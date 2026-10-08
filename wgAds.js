/* AFG v9.0.0 893eb5e+dirty-2026-10-02T11:43Z */
(function() {
    var w$a = typeof Object.defineProperties == "function" ? Object.defineProperty : function(ka, Ya, za) {
        if (ka == Array.prototype || ka == Object.prototype)
            return ka;
        ka[Ya] = za.value;
        return ka
    }
    ;
    function w$b(ka) {
        ka = ["object" == typeof globalThis && globalThis, ka, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var Ya = 0; Ya < ka.length; ++Ya) {
            var za = ka[Ya];
            if (za && za.Math == Math)
                return za
        }
        throw Error("Cannot find global object");
    }
    var w$ = w$b(this);
    function w$c(ka, Ya) {
        if (Ya)
            a: {
                var za = w$;
                ka = ka.split(".");
                for (var Wb = 0; Wb < ka.length - 1; Wb++) {
                    var K = ka[Wb];
                    if (!(K in za))
                        break a;
                    za = za[K]
                }
                ka = ka[ka.length - 1];
                Wb = za[ka];
                Ya = Ya(Wb);
                Ya != Wb && Ya != null && w$a(za, ka, {
                    configurable: !0,
                    writable: !0,
                    value: Ya
                })
            }
    }
    w$c("globalThis", function(ka) {
        return ka || w$
    });
    (function() {
        function ka(a, b, c, d) {
            if (c === "a" && !d)
                throw new TypeError("Private accessor was defined without a getter");
            if (typeof b === "function" ? a !== b || !d : !b.has(a))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return c === "m" ? d : c === "a" ? d.call(a) : d ? d.value : b.get(a)
        }
        function Ya(a, b, c, d, e) {
            if (d === "m")
                throw new TypeError("Private method is not writable");
            if (d === "a" && !e)
                throw new TypeError("Private accessor was defined without a setter");
            if (typeof b === "function" ? a !== b || !e : !b.has(a))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return d === "a" ? e.call(a, c) : e ? e.value = c : b.set(a, c),
            c
        }
        function za(a, b, c, d) {
            if (c === "a" && !d)
                throw new TypeError("Private accessor was defined without a getter");
            if (typeof b === "function" ? a !== b || !d : !b.has(a))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return c === "m" ? d : c === "a" ? d.call(a) : d ? d.value : b.get(a)
        }
        function Wb(a, b, c, d, e) {
            if (d === "m")
                throw new TypeError("Private method is not writable");
            if (d === "a" && !e)
                throw new TypeError("Private accessor was defined without a setter");
            if (typeof b === "function" ? a !== b || !e : !b.has(a))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return d === "a" ? e.call(a, c) : e ? e.value = c : b.set(a, c),
            c
        }
        function K(a, b, c, d) {
            if (c === "a" && !d)
                throw new TypeError("Private accessor was defined without a getter");
            if (typeof b === "function" ? a !== b || !d : !b.has(a))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return c === "m" ? d : c === "a" ? d.call(a) : d ? d.value : b.get(a)
        }
        function ua(a, b, c, d, e) {
            if (d === "m")
                throw new TypeError("Private method is not writable");
            if (d === "a" && !e)
                throw new TypeError("Private accessor was defined without a setter");
            if (typeof b === "function" ? a !== b || !e : !b.has(a))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return d === "a" ? e.call(a, c) : e ? e.value = c : b.set(a, c),
            c
        }
        function Ba(a, b, c, d) {
            if (c === "a" && !d)
                throw new TypeError("Private accessor was defined without a getter");
            if (typeof b === "function" ? a !== b || !d : !b.has(a))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return c === "m" ? d : c === "a" ? d.call(a) : d ? d.value : b.get(a)
        }
        function lf(a, b, c, d, e) {
            if (d === "m")
                throw new TypeError("Private method is not writable");
            if (d === "a" && !e)
                throw new TypeError("Private accessor was defined without a setter");
            if (typeof b === "function" ? a !== b || !e : !b.has(a))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return d === "a" ? e.call(a, c) : e ? e.value = c : b.set(a, c),
            c
        }
        function x(a, b, c, d) {
            if (c === "a" && !d)
                throw new TypeError("Private accessor was defined without a getter");
            if (typeof b === "function" ? a !== b || !d : !b.has(a))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return c === "m" ? d : c === "a" ? d.call(a) : d ? d.value : b.get(a)
        }
        function Ta(a, b, c, d, e) {
            if (d === "m")
                throw new TypeError("Private method is not writable");
            if (d === "a" && !e)
                throw new TypeError("Private accessor was defined without a setter");
            if (typeof b === "function" ? a !== b || !e : !b.has(a))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return d === "a" ? e.call(a, c) : e ? e.value = c : b.set(a, c),
            c
        }
        function Ia(a, b, c, d) {
            if (c === "a" && !d)
                throw new TypeError("Private accessor was defined without a getter");
            if (typeof b === "function" ? a !== b || !d : !b.has(a))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return c === "m" ? d : c === "a" ? d.call(a) : d ? d.value : b.get(a)
        }
        function sd(a, b, c, d, e) {
            if (d === "m")
                throw new TypeError("Private method is not writable");
            if (d === "a" && !e)
                throw new TypeError("Private accessor was defined without a setter");
            if (typeof b === "function" ? a !== b || !e : !b.has(a))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return d === "a" ? e.call(a, c) : e ? e.value = c : b.set(a, c),
            c
        }
        function Xb(a, b, c, d) {
            if (c === "a" && !d)
                throw new TypeError("Private accessor was defined without a getter");
            if (typeof b === "function" ? a !== b || !d : !b.has(a))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return c === "m" ? d : c === "a" ? d.call(a) : d ? d.value : b.get(a)
        }
        function mf(a, b, c, d, e) {
            if (d === "m")
                throw new TypeError("Private method is not writable");
            if (d === "a" && !e)
                throw new TypeError("Private accessor was defined without a setter");
            if (typeof b === "function" ? a !== b || !e : !b.has(a))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return d === "a" ? e.call(a, c) : e ? e.value = c : b.set(a, c),
            c
        }
        function Kc(a, b, c, d) {
            if (c === "a" && !d)
                throw new TypeError("Private accessor was defined without a getter");
            if (typeof b === "function" ? a !== b || !d : !b.has(a))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return c === "m" ? d : c === "a" ? d.call(a) : d ? d.value : b.get(a)
        }
        function nf(a, b, c, d, e) {
            if (d === "m")
                throw new TypeError("Private method is not writable");
            if (d === "a" && !e)
                throw new TypeError("Private accessor was defined without a setter");
            if (typeof b === "function" ? a !== b || !e : !b.has(a))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return d === "a" ? e.call(a, c) : e ? e.value = c : b.set(a, c),
            c
        }
        function F(a, b, c, d) {
            if (c === "a" && !d)
                throw new TypeError("Private accessor was defined without a getter");
            if (typeof b === "function" ? a !== b || !d : !b.has(a))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return c === "m" ? d : c === "a" ? d.call(a) : d ? d.value : b.get(a)
        }
        function Pa(a, b, c, d, e) {
            if (d === "m")
                throw new TypeError("Private method is not writable");
            if (d === "a" && !e)
                throw new TypeError("Private accessor was defined without a setter");
            if (typeof b === "function" ? a !== b || !e : !b.has(a))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return d === "a" ? e.call(a, c) : e ? e.value = c : b.set(a, c),
            c
        }
        function T(a, b, c, d) {
            if (c === "a" && !d)
                throw new TypeError("Private accessor was defined without a getter");
            if (typeof b === "function" ? a !== b || !d : !b.has(a))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return c === "m" ? d : c === "a" ? d.call(a) : d ? d.value : b.get(a)
        }
        function Ua(a, b, c, d, e) {
            if (d === "m")
                throw new TypeError("Private method is not writable");
            if (d === "a" && !e)
                throw new TypeError("Private accessor was defined without a setter");
            if (typeof b === "function" ? a !== b || !e : !b.has(a))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return d === "a" ? e.call(a, c) : e ? e.value = c : b.set(a, c),
            c
        }
        function Bb(a, b, c, d) {
            if (c === "a" && !d)
                throw new TypeError("Private accessor was defined without a getter");
            if (typeof b === "function" ? a !== b || !d : !b.has(a))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return c === "m" ? d : c === "a" ? d.call(a) : d ? d.value : b.get(a)
        }
        function td(a, b, c, d, e) {
            if (d === "m")
                throw new TypeError("Private method is not writable");
            if (d === "a" && !e)
                throw new TypeError("Private accessor was defined without a setter");
            if (typeof b === "function" ? a !== b || !e : !b.has(a))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return d === "a" ? e.call(a, c) : e ? e.value = c : b.set(a, c),
            c
        }
        function J(a, b, c, d) {
            if (c === "a" && !d)
                throw new TypeError("Private accessor was defined without a getter");
            if (typeof b === "function" ? a !== b || !d : !b.has(a))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return c === "m" ? d : c === "a" ? d.call(a) : d ? d.value : b.get(a)
        }
        function Za(a, b, c, d, e) {
            if (d === "m")
                throw new TypeError("Private method is not writable");
            if (d === "a" && !e)
                throw new TypeError("Private accessor was defined without a setter");
            if (typeof b === "function" ? a !== b || !e : !b.has(a))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return d === "a" ? e.call(a, c) : e ? e.value = c : b.set(a, c),
            c
        }
        function kb(a, b, c, d) {
            if (c === "a" && !d)
                throw new TypeError("Private accessor was defined without a getter");
            if (typeof b === "function" ? a !== b || !d : !b.has(a))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return c === "m" ? d : c === "a" ? d.call(a) : d ? d.value : b.get(a)
        }
        function of(a, b, c, d, e) {
            if (d === "m")
                throw new TypeError("Private method is not writable");
            if (d === "a" && !e)
                throw new TypeError("Private accessor was defined without a setter");
            if (typeof b === "function" ? a !== b || !e : !b.has(a))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return d === "a" ? e.call(a, c) : e ? e.value = c : b.set(a, c),
            c
        }
        function Yb(a, b, c, d) {
            if (c === "a" && !d)
                throw new TypeError("Private accessor was defined without a getter");
            if (typeof b === "function" ? a !== b || !d : !b.has(a))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return c === "m" ? d : c === "a" ? d.call(a) : d ? d.value : b.get(a)
        }
        function Vg(a, b, c, d, e) {
            if (d === "m")
                throw new TypeError("Private method is not writable");
            if (d === "a" && !e)
                throw new TypeError("Private accessor was defined without a setter");
            if (typeof b === "function" ? a !== b || !e : !b.has(a))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return d === "a" ? e.call(a, c) : e ? e.value = c : b.set(a, c),
            c
        }
        function B(a, b, c, d) {
            if (c === "a" && !d)
                throw new TypeError("Private accessor was defined without a getter");
            if (typeof b === "function" ? a !== b || !d : !b.has(a))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return c === "m" ? d : c === "a" ? d.call(a) : d ? d.value : b.get(a)
        }
        function Ja(a, b, c, d, e) {
            if (d === "m")
                throw new TypeError("Private method is not writable");
            if (d === "a" && !e)
                throw new TypeError("Private accessor was defined without a setter");
            if (typeof b === "function" ? a !== b || !e : !b.has(a))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return d === "a" ? e.call(a, c) : e ? e.value = c : b.set(a, c),
            c
        }
        function N(a, b, c, d) {
            if (c === "a" && !d)
                throw new TypeError("Private accessor was defined without a getter");
            if (typeof b === "function" ? a !== b || !d : !b.has(a))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return c === "m" ? d : c === "a" ? d.call(a) : d ? d.value : b.get(a)
        }
        function Cb(a, b, c, d, e) {
            if (d === "m")
                throw new TypeError("Private method is not writable");
            if (d === "a" && !e)
                throw new TypeError("Private accessor was defined without a setter");
            if (typeof b === "function" ? a !== b || !e : !b.has(a))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return d === "a" ? e.call(a, c) : e ? e.value = c : b.set(a, c),
            c
        }
        function ea(a, b, c, d) {
            if (c === "a" && !d)
                throw new TypeError("Private accessor was defined without a getter");
            if (typeof b === "function" ? a !== b || !d : !b.has(a))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return c === "m" ? d : c === "a" ? d.call(a) : d ? d.value : b.get(a)
        }
        function pf(a, b, c, d, e) {
            if (d === "m")
                throw new TypeError("Private method is not writable");
            if (d === "a" && !e)
                throw new TypeError("Private accessor was defined without a setter");
            if (typeof b === "function" ? a !== b || !e : !b.has(a))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return d === "a" ? e.call(a, c) : e ? e.value = c : b.set(a, c),
            c
        }
        function Y(a, b, c, d) {
            if (c === "a" && !d)
                throw new TypeError("Private accessor was defined without a getter");
            if (typeof b === "function" ? a !== b || !d : !b.has(a))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return c === "m" ? d : c === "a" ? d.call(a) : d ? d.value : b.get(a)
        }
        function le(a, b, c, d, e) {
            if (d === "m")
                throw new TypeError("Private method is not writable");
            if (d === "a" && !e)
                throw new TypeError("Private accessor was defined without a setter");
            if (typeof b === "function" ? a !== b || !e : !b.has(a))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return d === "a" ? e.call(a, c) : e ? e.value = c : b.set(a, c),
            c
        }
        function Ca(a, b, c, d) {
            if (c === "a" && !d)
                throw new TypeError("Private accessor was defined without a getter");
            if (typeof b === "function" ? a !== b || !d : !b.has(a))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return c === "m" ? d : c === "a" ? d.call(a) : d ? d.value : b.get(a)
        }
        function Lc(a, b, c, d, e) {
            if (d === "m")
                throw new TypeError("Private method is not writable");
            if (d === "a" && !e)
                throw new TypeError("Private accessor was defined without a setter");
            if (typeof b === "function" ? a !== b || !e : !b.has(a))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return d === "a" ? e.call(a, c) : e ? e.value = c : b.set(a, c),
            c
        }
        function Da(a, b, c, d) {
            if (c === "a" && !d)
                throw new TypeError("Private accessor was defined without a getter");
            if (typeof b === "function" ? a !== b || !d : !b.has(a))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return c === "m" ? d : c === "a" ? d.call(a) : d ? d.value : b.get(a)
        }
        function Kb(a, b, c, d, e) {
            if (d === "m")
                throw new TypeError("Private method is not writable");
            if (d === "a" && !e)
                throw new TypeError("Private accessor was defined without a setter");
            if (typeof b === "function" ? a !== b || !e : !b.has(a))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return d === "a" ? e.call(a, c) : e ? e.value = c : b.set(a, c),
            c
        }
        function oa(a, b, c, d) {
            if (c === "a" && !d)
                throw new TypeError("Private accessor was defined without a getter");
            if (typeof b === "function" ? a !== b || !d : !b.has(a))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return c === "m" ? d : c === "a" ? d.call(a) : d ? d.value : b.get(a)
        }
        function Wg(a, b, c, d, e) {
            if (d === "m")
                throw new TypeError("Private method is not writable");
            if (d === "a" && !e)
                throw new TypeError("Private accessor was defined without a setter");
            if (typeof b === "function" ? a !== b || !e : !b.has(a))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return d === "a" ? e.call(a, c) : e ? e.value = c : b.set(a, c),
            c
        }
        function Qa(a, b, c, d) {
            if (c === "a" && !d)
                throw new TypeError("Private accessor was defined without a getter");
            if (typeof b === "function" ? a !== b || !d : !b.has(a))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return c === "m" ? d : c === "a" ? d.call(a) : d ? d.value : b.get(a)
        }
        function ud(a, b, c, d, e) {
            if (d === "m")
                throw new TypeError("Private method is not writable");
            if (d === "a" && !e)
                throw new TypeError("Private accessor was defined without a setter");
            if (typeof b === "function" ? a !== b || !e : !b.has(a))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return d === "a" ? e.call(a, c) : e ? e.value = c : b.set(a, c),
            c
        }
        function qf(a, b, c, d, e) {
            if (d === "m")
                throw new TypeError("Private method is not writable");
            if (d === "a" && !e)
                throw new TypeError("Private accessor was defined without a setter");
            if (typeof b === "function" ? a !== b || !e : !b.has(a))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return d === "a" ? e.call(a, c) : e ? e.value = c : b.set(a, c),
            c
        }
        function Ki(a, b, c, d) {
            if (c === "a" && !d)
                throw new TypeError("Private accessor was defined without a getter");
            if (typeof b === "function" ? a !== b || !d : !b.has(a))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return c === "m" ? d : c === "a" ? d.call(a) : d ? d.value : b.get(a)
        }
        function sa(a, b, c, d) {
            if (c === "a" && !d)
                throw new TypeError("Private accessor was defined without a getter");
            if (typeof b === "function" ? a !== b || !d : !b.has(a))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return c === "m" ? d : c === "a" ? d.call(a) : d ? d.value : b.get(a)
        }
        function Mc(a, b, c, d, e) {
            if (d === "m")
                throw new TypeError("Private method is not writable");
            if (d === "a" && !e)
                throw new TypeError("Private accessor was defined without a setter");
            if (typeof b === "function" ? a !== b || !e : !b.has(a))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return d === "a" ? e.call(a, c) : e ? e.value = c : b.set(a, c),
            c
        }
        function la(a, b, c, d) {
            if (c === "a" && !d)
                throw new TypeError("Private accessor was defined without a getter");
            if (typeof b === "function" ? a !== b || !d : !b.has(a))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return c === "m" ? d : c === "a" ? d.call(a) : d ? d.value : b.get(a)
        }
        function ra(a, b, c, d) {
            if (c === "a" && !d)
                throw new TypeError("Private accessor was defined without a getter");
            if (typeof b === "function" ? a !== b || !d : !b.has(a))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return c === "m" ? d : c === "a" ? d.call(a) : d ? d.value : b.get(a)
        }
        function Zb(a, b, c, d, e) {
            if (d === "m")
                throw new TypeError("Private method is not writable");
            if (d === "a" && !e)
                throw new TypeError("Private accessor was defined without a setter");
            if (typeof b === "function" ? a !== b || !e : !b.has(a))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return d === "a" ? e.call(a, c) : e ? e.value = c : b.set(a, c),
            c
        }
        function A(a, b, c, d) {
            if (c === "a" && !d)
                throw new TypeError("Private accessor was defined without a getter");
            if (typeof b === "function" ? a !== b || !d : !b.has(a))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return c === "m" ? d : c === "a" ? d.call(a) : d ? d.value : b.get(a)
        }
        function $a(a, b, c, d, e) {
            if (d === "m")
                throw new TypeError("Private method is not writable");
            if (d === "a" && !e)
                throw new TypeError("Private accessor was defined without a setter");
            if (typeof b === "function" ? a !== b || !e : !b.has(a))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return d === "a" ? e.call(a, c) : e ? e.value = c : b.set(a, c),
            c
        }
        function fa(a, b, c, d) {
            if (c === "a" && !d)
                throw new TypeError("Private accessor was defined without a getter");
            if (typeof b === "function" ? a !== b || !d : !b.has(a))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return c === "m" ? d : c === "a" ? d.call(a) : d ? d.value : b.get(a)
        }
        function ab(a, b, c, d, e) {
            if (d === "m")
                throw new TypeError("Private method is not writable");
            if (d === "a" && !e)
                throw new TypeError("Private accessor was defined without a setter");
            if (typeof b === "function" ? a !== b || !e : !b.has(a))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return d === "a" ? e.call(a, c) : e ? e.value = c : b.set(a, c),
            c
        }
        function p(a, b, c, d) {
            if (c === "a" && !d)
                throw new TypeError("Private accessor was defined without a getter");
            if (typeof b === "function" ? a !== b || !d : !b.has(a))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return c === "m" ? d : c === "a" ? d.call(a) : d ? d.value : b.get(a)
        }
        function V(a, b, c, d, e) {
            if (d === "m")
                throw new TypeError("Private method is not writable");
            if (d === "a" && !e)
                throw new TypeError("Private accessor was defined without a setter");
            if (typeof b === "function" ? a !== b || !e : !b.has(a))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return d === "a" ? e.call(a, c) : e ? e.value = c : b.set(a, c),
            c
        }
        function L(a, b, c, d) {
            if (c === "a" && !d)
                throw new TypeError("Private accessor was defined without a getter");
            if (typeof b === "function" ? a !== b || !d : !b.has(a))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return c === "m" ? d : c === "a" ? d.call(a) : d ? d.value : b.get(a)
        }
        function pb(a, b, c, d, e) {
            if (d === "m")
                throw new TypeError("Private method is not writable");
            if (d === "a" && !e)
                throw new TypeError("Private accessor was defined without a setter");
            if (typeof b === "function" ? a !== b || !e : !b.has(a))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return d === "a" ? e.call(a, c) : e ? e.value = c : b.set(a, c),
            c
        }
        function Nc(a, b, c, d, e) {
            if (d === "m")
                throw new TypeError("Private method is not writable");
            if (d === "a" && !e)
                throw new TypeError("Private accessor was defined without a setter");
            if (typeof b === "function" ? a !== b || !e : !b.has(a))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return d === "a" ? e.call(a, c) : e ? e.value = c : b.set(a, c),
            c
        }
        function La(a, b, c, d) {
            if (c === "a" && !d)
                throw new TypeError("Private accessor was defined without a getter");
            if (typeof b === "function" ? a !== b || !d : !b.has(a))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return c === "m" ? d : c === "a" ? d.call(a) : d ? d.value : b.get(a)
        }
        function bb(a, b, c, d) {
            if (c === "a" && !d)
                throw new TypeError("Private accessor was defined without a getter");
            if (typeof b === "function" ? a !== b || !d : !b.has(a))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return c === "m" ? d : c === "a" ? d.call(a) : d ? d.value : b.get(a)
        }
        function me(a, b, c, d, e) {
            if (d === "m")
                throw new TypeError("Private method is not writable");
            if (d === "a" && !e)
                throw new TypeError("Private accessor was defined without a setter");
            if (typeof b === "function" ? a !== b || !e : !b.has(a))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return d === "a" ? e.call(a, c) : e ? e.value = c : b.set(a, c),
            c
        }
        function nc(a, b, c, d=!1) {
            return Object.freeze({
                muted: a,
                autoplay: b,
                reason: c,
                qg: d
            })
        }
        function Li(a) {
            return a.ac ? nc(!0, !a.qc, "publisher requested muted ads") : a.Y && !a.$e ? nc(!0, !a.qc, "iOS withholds audio without a gesture") : a.wf === "midroll" && a.Oa ? nc(!1, !0, "autoplay midroll: the player is already in the game") : a.qc ? nc(!1, !1, "a real user gesture started this pod") : a.Gb ? nc(!0, !0, "forced autoplay without a gesture") : a.Ia ? nc(!1, !1, "splash gate will supply a gesture before playback", !0) : a.ke ? nc(!1, !0, "the player clicked through to this view") : nc(!0, !0, "no gesture and nothing will supply one")
        }
        function rf(a, b="") {
            return new RegExp(`([?&])${a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}=([^&]*)`,b)
        }
        function vd(a, b) {
            return rf(b).test(a)
        }
        function Mi(a, b) {
            a = rf(b).exec(a);
            var c;
            return a === null ? null : (c = a[2]) != null ? c : ""
        }
        function wd(a, b, c) {
            return `${a}${a.includes("?") ? "&" : "?"}${b}=${c}`
        }
        function Ni(a, b, c) {
            var d = a.indexOf("?");
            return d === -1 ? `${a}?${b}=${c}` : `${a.slice(0, d + 1)}${b}=${c}&${a.slice(d + 1)}`
        }
        function Xg(a, b, c) {
            return vd(a, b) ? a.replace(rf(b), `$1${b}=${c}`) : wd(a, b, c)
        }
        function Oi(a) {
            return ["casual_games", a ? "mobile_games" : "pc_games", "video_gaming"]
        }
        function Pi(a, b) {
            a = [a, b].filter(c => !!c);
            return a.length === 0 ? null : a.join("&")
        }
        function Yg(a, b) {
            if (!b)
                return a;
            var c = Mi(a, "cust_params");
            return c === null ? wd(a, "cust_params", encodeURIComponent(b)) : Xg(a, "cust_params", c + encodeURIComponent(`&${b}`))
        }
        function Vk(a, b) {
            return a ? [b, ...Wk].some(c => a.includes(c)) : !1
        }
        function Zg(a, b, c) {
            return a && b ? a.replace(`${c.replace("iu=", "")}/`, b) : a
        }
        function Qi(a, b) {
            var c = b.Ve ? Pi(b.Oc, "WGIP=true") : b.Oc;
            a = Yg(a, Pi(b.we, c));
            a = Zg(a, b.Pb, b.na);
            c = Mi(a, "ad_type");
            c !== null ? b.Zb && c.includes("audio") && (a = a.replace(rf("ad_type", "g"), "$1").replace(/([?&])&+/g, "$1").replace(/&$/, ""),
            a = a.endsWith("?") ? a.slice(0, -1) : a) : a = b.pe && !b.Zb ? wd(a, "ad_type", "audio_video_image_text") : a;
            if (b.lc && Vk(a, b.na)) {
                let d, e;
                c = (e = (d = /iu=\/([^/&]+)\/([^/&]+)\//i.exec(a)) == null ? void 0 : d[2]) != null ? e : null;
                a = !c || c.endsWith(b.lc) ? a : a.replace(c, c + b.lc)
            }
            vd(a, "plcmt") || (a = Ni(a, "plcmt", "1"));
            vd(a, "vpmute") || (a = Ni(a, "vpmute", b.Zb ? "1" : "0"));
            a = Xg(a, "description_url", encodeURIComponent(b.G));
            vd(a, "vpos") || (a = wd(a, "vpos", b.location));
            return a
        }
        function Ri(a, b={}) {
            a = typeof a === "string" ? a.toLowerCase() : "";
            var c = Xk.test(a), d;
            b = c && ((d = b.maxTouchPoints) != null ? d : 0) > 0;
            d = Yk.test(a) || b;
            var e = b || Zk.test(a) ? "tablet" : $k.test(a) ? "phone" : "desktop";
            return Object.freeze({
                kind: e,
                N: e !== "desktop",
                Y: d,
                cd: al.test(a),
                Nk: c && !b,
                Ok: bl.test(a)
            })
        }
        function cl(a) {
            for (let b of a)
                if (b && !b.includes("wgplayer.com/afg/v6/logs.js") && dl.some(c => b.includes(c)))
                    return b;
            return null
        }
        function el(a, b) {
            if (!a)
                return b;
            var c, d;
            return (d = (c = fl.exec(a)) == null ? void 0 : c[1]) != null ? d : b
        }
        function $b(a, b) {
            try {
                return a() !== b()
            } catch (c) {
                return !0
            }
        }
        function gl(a) {
            var b = [];
            return b.length > 0 ? b.map(c => `//pubads.g.doubleclick.net/gampad/ads?iu=/1002212/${c}&description_url=${a.K}&env=vp&impl=s&correlator=&tfcd=0&npa=0&gdfp_req=1&output=vast&sz=730x400&unviewed_position_start=1`) : Si(a.Dg)
        }
        function Si(a) {
            return a === null ? [] : typeof a === "string" ? [a] : [...a]
        }
        function sf(a) {
            var b = /[?&]iu=([^&]+)/.exec(a);
            return (b == null ? void 0 : b[1]) !== void 0 ? decodeURIComponent(b[1]) : a.length > 48 ? `${a.slice(0, 48)}\u2026` : a
        }
        function hl(a="pod") {
            var b = 0;
            return function(c, d) {
                b += 1;
                return new il(`${a}-${b}`,c,d)
            }
        }
        function Oc(a, b) {
            return typeof a === "string" && a.toLowerCase().includes(b)
        }
        function $g(a) {
            return Oc(a, "video") || Oc(a, "javascript")
        }
        function jl(a) {
            return Oc(a, "audio") && !$g(a)
        }
        function kl(a) {
            return (a == null ? void 0 : a.isLinear) === !1
        }
        function ll(a) {
            var b = (c, d) => {
                try {
                    let e = c == null ? void 0 : c[d];
                    return typeof e === "function" ? e.call(c) : null
                } catch (e) {
                    return null
                }
            }
            ;
            a = b(a, "getError");
            return {
                errorCode: b(a, "getErrorCode"),
                rc: b(a, "getVastErrorCode"),
                type: b(a, "getType"),
                message: b(a, "getMessage")
            }
        }
        function Pc(a, b) {
            try {
                return a()
            } catch (c) {
                return b
            }
        }
        function Ti(a) {
            if (a.u) {
                let c;
                return (c = a.la) != null ? c : 1
            }
            var b;
            return (b = a.T) != null ? b : 2
        }
        function ah(a) {
            return Object.freeze({
                action: "finish",
                reason: a
            })
        }
        function bh(a) {
            if (a.u)
                return Ti(a);
            var b, c;
            return (c = (b = a.Ca) != null ? b : a.T) != null ? c : 2
        }
        function ml(a) {
            return a.yg ? ne("single-ad-pod") : a.Si ? ne("already-in-flight") : a.Da || a.dh ? a.o + (a.Da ? 1 : 0) >= a.ua ? ne("pod-full") : a.ek <= 0 ? ne("no-tags-left") : Object.freeze({
                Af: !0
            }) : ne("nothing-playing")
        }
        function ne(a) {
            return Object.freeze({
                Af: !1,
                reason: a
            })
        }
        function Ui(a) {
            a = atob(a);
            var b = "";
            for (let c = 0; c < a.length; c++)
                b += String.fromCharCode(a.charCodeAt(c) ^ 63);
            return b
        }
        function Vi(a) {
            var b;
            (b = a.h) || (ch != null || (ch = Object.freeze(nl.map(Ui))),
            b = ch.some(e => a.Ba.includes(e)));
            if (b)
                return !0;
            var c, d;
            b = (d = (c = a.K) == null ? void 0 : c.trim().toLowerCase()) != null ? d : "";
            if (c = b !== "")
                dh != null || (dh = Object.freeze(ol.map(Ui))),
                c = dh.includes(b);
            return c
        }
        function pl(a, b) {
            var c = b.location;
            b = b.slot;
            return a.reason === "no-slot" ? `[afg-slot] ${c} not requested: the ad container measures ${b.width}x${b.height}, so there is nowhere to show an ad. Its height comes from contentContainer \u2014 an element with no height of its own (often body) collapses once the game is taken down` : a.reason === "no-tags-left" && a.ha === 0 ? `[afg-tags] ${c} not requested: there are no ${c} tags to ask for` : null
        }
        function oe(a) {
            return a.replace(/#goog(?:le)?_[^#]*$/, "")
        }
        function ql(a, b) {
            var c = a.history
              , d = a.ee
              , e = a.navigation;
            if (e !== null && e !== void 0)
                return e.addEventListener("currententrychange", b),
                () => {
                    e.removeEventListener("currententrychange", b)
                }
                ;
            var f = c.pushState
              , g = c.replaceState
              , h = !0;
            a = t => function(...w) {
                t.apply(this, w);
                h && b()
            }
            ;
            var l = a(f)
              , m = a(g);
            c.pushState = l;
            c.replaceState = m;
            d.addEventListener("popstate", b);
            return () => {
                h = !1;
                c.pushState === l && (c.pushState = f);
                c.replaceState === m && (c.replaceState = g);
                d.removeEventListener("popstate", b)
            }
        }
        function rl(a) {
            var b = !1
              , c = !1
              , d = null
              , e = () => {
                c = !1;
                if (!b) {
                    var g;
                    (g = a.ij) == null || g.call(a);
                    g = a.measure();
                    var h = g.N && g.nh ? g.viewport : g.Ig;
                    g = Math.round(h.width);
                    h = Math.round(h.height);
                    g = g <= 0 || h <= 0 ? null : {
                        width: g,
                        height: h
                    };
                    g === null || d !== null && g.width === d.width && g.height === d.height || (d = g,
                    a.apply(g))
                }
            }
              , f = a.observe( () => {
                b || c || (c = !0,
                a.rb(e))
            }
            );
            return () => {
                b || (b = !0,
                f())
            }
        }
        function Wi(a, b) {
            if (typeof a === "number")
                return a;
            if (!a || a.length === 0)
                return 30;
            var c;
            return (c = a[Math.min(Math.max(b, 0), a.length - 1)]) != null ? c : 30
        }
        function sl(a) {
            if (a.$b)
                return ac("ads-disabled");
            if (a.ab)
                return ac("ad-blocked");
            if (a.cb && a.Ic && !a.h)
                return ac("consent-unknown");
            var b = a.W && a.Hj && a.Od > 0 && a.R > 0 && a.R < a.Od;
            if (a.u)
                return {
                    I: !0
                };
            if (a.W && a.Xb === !0)
                return ac("ad-playing-above");
            if (a.Qd && a.ig === 1)
                return ac("skip-first-midroll");
            var c = a.R > 0 && a.R < a.Ga && a.se;
            return !a.W && c ? ac("first-midroll-outside-iframe", Math.max(0, Math.ceil(a.Ga - a.R))) : c && a.W && (a.Qc ? a.Jd : 1) ? ac("too-soon-after-preroll", Math.max(0, Math.ceil(a.Ga - a.R))) : a.ej > 0 && a.R > 0 && a.R < a.ca && !a.se && a.Uh > 0 ? ac("too-soon-after-midroll", Math.max(0, Math.ceil(a.ca - a.R))) : b ? ac("too-soon-after-ad", Math.max(0, Math.ceil(a.Od - a.R))) : {
                I: !0
            }
        }
        function ac(a, b=0) {
            return Object.freeze({
                I: !1,
                reason: a,
                j: b
            })
        }
        function Xi(a) {
            return a.fd === -1 ? !0 : a.Mf < a.fd
        }
        function tf() {
            return Object.freeze({
                I: !0,
                j: 0
            })
        }
        function eh(a, b) {
            return Object.freeze({
                I: !1,
                reason: a,
                j: b
            })
        }
        function oc(a, b=0) {
            return {
                m: !1,
                reason: a,
                j: b > 0 ? b : null
            }
        }
        function uf(a) {
            return Object.freeze({
                action: "skip",
                reason: a
            })
        }
        function xd(a, b) {
            if (typeof a === "boolean")
                return a;
            if (typeof a === "string") {
                a = a.trim().toLowerCase();
                if (tl.includes(a))
                    return !0;
                if (ul.includes(a))
                    return !1
            }
            return b
        }
        function bc(a, b) {
            return typeof a === "number" ? Number.isFinite(a) ? a : b : typeof a === "string" && a.trim() !== "" && (a = Number(a),
            Number.isFinite(a)) ? a : b
        }
        function Yi(a) {
            return typeof a === "string" ? Object.freeze(a.trim() === "" ? [] : [a]) : Array.isArray(a) ? Object.freeze(a.filter(b => typeof b === "string" && b.trim() !== "")) : vl
        }
        function wl(a) {
            if (a === "")
                return null;
            var b = Zi.get(a);
            if (b !== void 0)
                return b;
            if (fh.has(a))
                return null;
            b = a.toLowerCase();
            var c = Math.min(2, Math.floor(a.length / 3));
            if (c < 1)
                return null;
            var d = null
              , e = c + 1;
            for (let f of $i) {
                if (Math.abs(f.length - a.length) > c)
                    continue;
                let g = xl(b, f.toLowerCase(), e - 1);
                g !== null && g < e && (e = g,
                d = f)
            }
            return d
        }
        function xl(a, b, c) {
            if (c < 0)
                return null;
            if (a === b)
                return 0;
            if (Math.abs(a.length - b.length) > c)
                return null;
            var d = []
              , e = Array.from({
                length: b.length + 1
            }, (f, g) => g);
            for (let f = 1; f <= a.length; f++) {
                let g = [f]
                  , h = f;
                for (let l = 1; l <= b.length; l++) {
                    let m = Math.min(e[l - 1] + (a[f - 1] === b[l - 1] ? 0 : 1), e[l] + 1, g[l - 1] + 1);
                    f > 1 && l > 1 && a[f - 1] === b[l - 2] && a[f - 2] === b[l - 1] && (m = Math.min(m, d[l - 2] + 1));
                    g.push(m);
                    m < h && (h = m)
                }
                if (h > c)
                    return null;
                d = e;
                e = g
            }
            a = e[b.length];
            return a <= c ? a : null
        }
        function yl(a) {
            if (typeof a !== "string" || a.trim() === "")
                return null;
            a = a.split(",");
            if (a.length < 2)
                return null;
            try {
                var b;
                var c = decodeURIComponent((b = a[0]) != null ? b : "")
            } catch (f) {
                return null
            }
            if (c === "")
                return null;
            var d;
            b = Number.parseInt((d = a[1]) != null ? d : "", 10);
            if (!Number.isFinite(b) || b < 0)
                return null;
            var e;
            return Object.freeze({
                Ce: c,
                position: b,
                $g: ((e = a[2]) != null ? e : "").trim() === "right"
            })
        }
        function zl(a) {
            return Array.isArray(a) && a.length !== 0 ? Object.freeze(a.map(b => typeof b === "string" ? b : "")) : Al
        }
        function gh(a, b) {
            if (typeof a !== "string")
                return b;
            a = a.trim();
            return a === "" || /[{};<>]/.test(a) ? b : a
        }
        function aj(a) {
            var b = yd(a.C.name, a.Sa), c;
            var d = (c = yd(a.C.Rj)) != null ? c : bj(a.Ha, 192, a.Vf);
            var e;
            c = (e = yd(a.C.vg)) != null ? e : bj(a.Ha, 512, a.Vf);
            d = d === null || c === null ? Object.freeze([]) : Object.freeze([vf(d, "192x192", "any"), vf(d, "192x192", "maskable"), vf(c, "512x512", "any"), vf(c, "512x512", "maskable")]);
            if (b === null || d.length === 0)
                return null;
            var f, g, h, l;
            e = (f = yd(a.C.Ij, b)) != null ? f : b;
            f = a.G;
            c = cj(f);
            c !== null && (c.hash = "",
            c.searchParams.set("utm_source", "hs"),
            f = c.toString());
            {
                c = a.G;
                let m = cj(c);
                m !== null && (m.hash = "",
                m.search = "",
                m.pathname = m.pathname.slice(0, m.pathname.lastIndexOf("/") + 1),
                c = m.toString())
            }
            b = {
                name: b,
                short_name: e,
                icons: d,
                start_url: f,
                scope: c,
                display: (g = a.C.display) != null ? g : "standalone",
                background_color: (h = a.C.backgroundColor) != null ? h : "#569aff",
                theme_color: (l = a.C.fk) != null ? l : "#569aff"
            };
            a = yd(a.C.Bb);
            a !== null && (b.categories = [a]);
            return Object.freeze(b)
        }
        function vf(a, b, c) {
            return Object.freeze({
                src: a,
                type: "image/png",
                sizes: b,
                purpose: c
            })
        }
        function bj(a, b, c) {
            a = yd(a);
            if (a === null)
                return null;
            if (!c)
                return a;
            c = a.startsWith("//") ? `https:${a}` : a;
            return /^https?:\/\//i.test(c) ? `https://scout.wgimager.com/f_jpg/w_${b}/h_${b}/${c}` : a
        }
        function cj(a) {
            try {
                return new URL(a)
            } catch (b) {
                return null
            }
        }
        function yd(...a) {
            for (let b of a)
                if (typeof b === "string" && b.trim() !== "")
                    return b.trim();
            return null
        }
        function wf(a, b="") {
            var c = a != null ? a : {}, d, e, f, g, h, l, m, t, w, y, I, M, G, ja, Aa = Object, r = Aa.freeze, v = Yi(c.adTagURL), C = Yi(c.midrollAdTagURL), R = Z(c.containerId), D = c.location === "midroll" ? "midroll" : "preroll", P = xd(c.adMuted, !1), u = xd(c.waitForClickPre, !1), E = xd(c.waitForClickMid, !1), W = c.autoplayMidroll === !0, S = c.midrollCountdown !== !1, ba = c.vpaidMode;
            var O = ba === "disabled" || ba === "enabled" ? ba : "insecure";
            var ca = pc(c.amma)
              , Ea = c.prefetchPreroll === !0
              , Qc = c.prefetchMidroll === !0
              , xf = Z(c.wgAdTagIdentifier)
              , pe = c.parent === "parent" ? "parent" : "top"
              , yf = c.fr === !0
              , qe = c.game !== null && typeof c.game === "object" ? c.game : null
              , zf = c.sandboxed === !0
              , hh = c.isSpa === !0
              , ih = c.isCustomSpa === !0
              , zd = c.ec
              , Af = yl(c.titleExtract)
              , lb = c.autoplay === !0
              , Ad = c.preloadIma !== !1;
            var re = c.mainClassName;
            if (typeof re !== "string")
                var se = null;
            else {
                var Bf = re.trim();
                se = /^[A-Za-z_-][\w-]*$/.test(Bf) ? Bf : null
            }
            var Bd = Z(c.customCss)
              , Cd = zl(c.icv);
            var qc = c.background;
            if (Array.isArray(qc))
                var Dd = Object.freeze({
                    container: gh(qc[0], Cf.container),
                    H: gh(qc[1], Cf.H)
                });
            else if (typeof qc === "string") {
                let cc = gh(qc, Cf.container);
                Dd = Object.freeze({
                    container: cc,
                    H: cc
                })
            } else
                Dd = Cf;
            var Fa = Z(c.gameBackground)
              , xa = Z(c.loaderObjectName);
            var ta = c.app;
            if (ta === null || typeof ta !== "object")
                var dc = null;
            else {
                var Ed, Rc = (Ed = ta.options) != null ? Ed : {}, Sc, te = Object, Df = te.freeze, Ef = ta.addToHome === !0, Ff = Z(ta.name), Gf = Z(ta.shortName), Hf = Z(ta.category), Lb = ta.display;
                var Fd = Bl.includes(Lb) ? Lb : null;
                dc = Df.call(te, {
                    ie: Ef,
                    name: Ff,
                    Ij: Gf,
                    Bb: Hf,
                    display: Fd,
                    backgroundColor: Z(ta.bgColor),
                    fk: Z(ta.themeColor),
                    Cc: Z(ta.btnColor),
                    Gf: Z(ta.safeImg),
                    Rj: Z(ta.smallIcon),
                    vg: Z(ta.bigIcon),
                    Pa: (Sc = pc(ta.delay)) != null ? Sc : null,
                    container: Z(Rc.container),
                    button: Z(Rc.button),
                    Bj: ta.serviceWorker === !1 ? null : Z(ta.serviceWorker)
                })
            }
            var Tc = (d = c.splash) == null ? void 0 : d.theme;
            var ue = Tc === "light" || Tc === "dark" ? Tc : "auto";
            var If = ((e = c.splash) == null ? void 0 : e.motion) !== !1
              , Gd = (f = c.splash) == null ? void 0 : f.skin;
            var jh = typeof Gd === "string" && Gd.trim() !== "" ? Gd : "default";
            var Jf = ((g = c.splash) == null ? void 0 : g.confetti) !== !1
              , kh = ((h = c.splash) == null ? void 0 : h.countdown) !== !1
              , Hd = Z((l = c.splash) == null ? void 0 : l.hostBg)
              , lh = ((m = c.splash) == null ? void 0 : m.landscape) === !0
              , rc = (y = Z(c.attributionLogo)) != null ? y : "data:image/webp;base64,UklGRgADAABXRUJQVlA4TPQCAAAvOUALEPeloG0byVCOP8k913EQCCRR7S+0g1gwGUz+hB2M20hSdEN7fL/LP86F7iabtKFzwbzxTggYHAaHw9GQeJBI7HA0BA44PiQKOwqOQKJgOODYkQgYEgdOGAwHCoETAccPQ0OioVAwVPUGxQAIjB8EgSAIQZjD+AIAxAJATBAAAAACQQjEHNiaPg4DAMGwfgjGGg46OFgAhA5BNyhJWBAW5qWM8BMjbSRpgCBRkmTTtvaz7YtnXtu2bdu2bT3btv3O3DMf92b1uet8QUT/J4Ct/edEQXQIEVFAtrXdTiJ1t5XdCSC1/zvrMqUTWMXWvUjoXSvLQXLYulcIndVimm/MjQ8LCwtcTXgmFSMxv3R8LyZ1zB/hlRnpZI1/8gnsZbGLQN/XOroIDHov/I5DKljjmyCkgcU5Qm/p6CJw9amUi2Sxxj/xSCGLDwidRjbus7O3tz956oStNE/oolSHRP1UrTvqZihdpFwk/o/wKRjpZOXmSwZoI9wjtIfFQQL936nOGaDXVqEa8XsrmJKRalbuN9Az/P/nYKSMxcuEPlI5Ij7bhSFCr0mlSD4rdxvoeRbTkAwWn5uRJdUFaKdwg9BxqYXApH8qB+Qii2VI5A/hWzgywOpDyB7hpS/SxuIogYEfgE0eKmcW2wg0vxRM6UgNo8dVB4QfkUgpi1cIvQ9t85Zc1wtThN6USpBcxs9Kh1nMRrJYfG5GFizYJbhtFO4QOiO1Epj01wJ2+u8Yi+VI7C/hewQyyJYeNAzDc4vwzIx0sDhCYOhXiza4G8ZpFpsJXH0h/EtBGtlyG8PYIXwJQYpYXCb04Rps8XBgcZjQRSkfyeG1PLJXMKUiiX+Fx4TOronyKqEDLDYjsb90lCLBH4VvoUg3a3zli9SyOEag/zsdbYTekzKRStb4PQLJZvEGodd1jBI6KVUg6azRlIpE/xRe+yJjOm4R2sdiP4GRP3TcRoI/SE1IO+v8lwLUs7wM+L3RwhOrCv8nin95CnM1ryU="
              , Kf = c.launchEvent === "none"
              , ec = c.autoInit !== !1
              , ve = Z(c.customStyles)
              , we = c.nss === !0
              , sc = c.wpb === !0
              , k = bc(c.ect, 0)
              , n = c.noint === !0
              , q = c.arrivedByClick === !0
              , H = Z((t = c.game) == null ? void 0 : t.game)
              , X = bc(c.waitForSpa, 1)
              , va = c.waitForAd === !0
              , Ma = Z(c.triggerPre)
              , fc = Z(c.triggerMid)
              , Uc = c.checkAdsTxt === !0
              , Cl = c.fallbackAd === !0
              , Dl = c.sp === !0
              , El = bc(c.preAdLimit, -1)
              , Fl = bc(c.midAdLimit, -1)
              , Gl = bc(c.tbp, 0)
              , Hl = xd(c.forceAutoplay, !1)
              , Il = pc(c.ma)
              , Jl = ((I = pc(c.adCount)) != null ? I : 0) > 1 ? pc(c.adCount) : void 0
              , mh = pc(c.waterfallTimeout);
            var Kl = mh !== void 0 && mh > 0 ? mh * 1E3 : void 0;
            var Ll = c.preload === !0
              , Ml = c.showmidrollOnIframeAtStart === !0
              , Ol = Nl(c.exctpos)
              , Pl = c.replace !== !1
              , Ql = c.remove !== !1
              , Rl = Z(c.callToAction)
              , Sl = Math.max(0, (M = pc(c.lt)) != null ? M : 0)
              , Tl = Z(c.jingle)
              , Ul = c.sfp === !0
              , Vl = c.sfm === !0
              , Wl = dj(c.npd)
              , Xl = dj(c.ypd)
              , Yl = bc(c.fmo, 0);
            var Lf = c.minAdInterval;
            if (Array.isArray(Lf)) {
                if (Array.isArray(Lf)) {
                    var ej = [];
                    for (let Mf of Lf) {
                        let xe = bc(Mf, fj);
                        xe !== fj && ej.push(xe)
                    }
                    var gj = Object.freeze(ej)
                } else
                    gj = Zl;
                let cc = gj;
                var hj = cc.length > 0 ? cc : 30
            } else
                hj = bc(Lf, 30);
            var $l = xd(c.cgdpr, !1)
              , am = xd(c.adTest, !1) || b.includes("adtest=true")
              , cm = bm(c)
              , dm = Z(c.gameName)
              , em = Z(c.gameDescription)
              , ye = c.gameThumbnail;
            var fm = typeof ye === "string" ? ye : ye !== null && typeof ye === "object" ? ye : null;
            var gm = (G = Z(c.gameLogo)) != null ? G : Z((w = c.playground) == null ? void 0 : w.gl), hm = Z(c.publisherName), im = Z(c.playGameText), jm = Z(c.continueGameText), km = c.io !== !1, lm = (ja = Z(c.contentContainer)) != null ? ja : Z(c.contentContainerQuery), mm = c.restore !== !1, nm = c.si === !0, om = Z(c.customParamsPre), pm = Z(c.customParamsMid), nh;
            if (nh = c.ppsj !== !1) {
                a: {
                    try {
                        var ij = globalThis.wgPpsj;
                        break a
                    } catch (cc) {}
                    ij = void 0
                }
                nh = ij !== !1
            }
            var qm = nh
              , rm = c.am !== !1
              , sm = c.noAd === !0;
            var ze = c.rewarded;
            if (ze === null || ze === void 0 || ze === !1)
                var jj = null;
            else {
                var Vc = typeof ze === "object" ? ze : {};
                jj = Object.freeze({
                    wc: Z(Vc.adTagURL),
                    eb: Z(Vc.customParams),
                    tk: Vc.useTargeting !== !1,
                    disableInitialLoad: Vc.disableInitialLoad === !0,
                    xa: pc(Vc.maxRequests),
                    Xe: Z(Vc.init),
                    h: Vc.adTest === !0
                })
            }
            var tm = c.disableAdBlock
              , um = c.logErrors === !0 && c.log !== !1;
            {
                let cc = []
                  , Mf = []
                  , xe = []
                  , kj = []
                  , lj = [];
                if (a !== null && typeof a === "object") {
                    var wm = new Set(vm);
                    for (let cb of Object.keys(a).sort()) {
                        if (a[cb] === void 0)
                            continue;
                        let mj = cb.replace(/_+$/, "");
                        mj !== cb && fh.has(mj) || cb.startsWith("_") || (wm.has(cb) ? cc.push(cb) : xm.has(cb) ? xe.push(cb) : fh.has(cb) ? Mf.push(cb) : nj.has(cb) ? kj.push({
                            key: cb,
                            ug: nj.get(cb)
                        }) : lj.push({
                            key: cb,
                            Pg: wl(cb)
                        }))
                    }
                }
                var ym = Object.freeze({
                    read: Object.freeze(cc),
                    We: Object.freeze(Mf),
                    Fe: Object.freeze(xe),
                    Vh: Object.freeze(kj),
                    qk: Object.freeze(lj)
                })
            }
            return r.call(Aa, {
                wc: v,
                Rh: C,
                containerId: R,
                location: D,
                he: P,
                Yf: u,
                Zf: E,
                Oa: W,
                Sh: S,
                Ma: O,
                la: ca,
                Bd: Ea,
                Ti: Qc,
                na: xf,
                Bc: pe,
                ak: yf,
                Tc: qe,
                fa: zf,
                zh: hh,
                wh: ih,
                Cb: zd,
                Zd: Af,
                autoplay: lb,
                Wk: Ad,
                df: se,
                Mg: Bd,
                Lg: Cd,
                background: Dd,
                Kk: Fa,
                Qk: xa,
                C: dc,
                Zj: ue,
                Xj: If,
                Yj: jh,
                Tj: Jf,
                Uj: kh,
                Vj: Hd,
                Wj: lh,
                Na: rc,
                Mk: Kf,
                Gk: ec,
                Ng: ve,
                Xh: we,
                fe: sc,
                Mb: k,
                Tk: n,
                pg: q,
                pk: H,
                Ib: c,
                zk: X,
                yk: va,
                jk: Ma,
                ik: fc,
                zg: Uc,
                Xg: Cl,
                Xd: Dl,
                Dd: El,
                jd: Fl,
                Kd: Gl,
                Gb: Hl,
                T: Il,
                Ca: Jl,
                sc: Kl,
                Ui: Ll,
                Th: Ml,
                Ie: Ol,
                lj: Pl,
                Ef: Ql,
                Ab: Rl,
                Rk: Sl,
                Bh: Tl,
                Rd: Ul,
                Nd: Vl,
                Qb: Wl,
                tc: Xl,
                Ga: Yl,
                ca: hj,
                cb: $l,
                h: am,
                S: cm,
                Sa: dm,
                Sc: em,
                Ha: fm,
                bh: gm,
                qb: hm,
                vd: im,
                Jc: jm,
                ib: km,
                F: lm,
                fc: mm,
                wb: nm,
                Ae: om,
                Lc: pm,
                $i: qm,
                sg: rm,
                md: sm,
                L: jj,
                fg: tm,
                Hh: um,
                mj: ym
            })
        }
        function Z(a) {
            return typeof a === "string" && a.trim() !== "" ? a : null
        }
        function pc(a) {
            a = bc(a, Number.NaN);
            return Number.isFinite(a) ? a : void 0
        }
        function bm(a) {
            var b = c => {
                c = a[c];
                return typeof c === "string" && c.trim() !== "" ? c : void 0
            }
            ;
            return {
                uc: b("adEventCallback"),
                U: b("midrollCallback"),
                Gd: b("removeAdsCallback"),
                yf: b("preAfgCallback"),
                xd: b("postInitAfgCallback"),
                zf: b("preInitCallback"),
                zd: b("preSpaCallback"),
                Mc: b("delayedPrerollCallback"),
                debug: b("debugCallback"),
                Cd: b("prerollCtaClick"),
                Vd: b("splashPreDisplayed"),
                Td: b("splashMidDisplayed"),
                Ud: b("splashPreCallback"),
                Sd: b("splashMidCallback")
            }
        }
        function zm(a) {
            var b = [];
            for (let {key: c, Pg: d} of a.qk)
                b.push(d === null ? `  "${c}" is not a config option` : `  "${c}" is not a config option \u2014 did you mean "${d}"?`);
            for (let {key: c, ug: d} of a.Vh)
                b.push(d === "public-api" ? `  "${c}" is not a config option \u2014 it is an argument your game passes at call time` : `  "${c}" belongs inside "${d}", not at the top level`);
            a.Fe.length > 0 && b.push(`  set but deliberately not implemented in v9: ${a.Fe.join(", ")}`);
            a.We.length > 0 && b.push(`  accepted but not yet implemented in v9: ${a.We.join(", ")}`);
            return b.length > 0 ? `[afg] config:\n${b.join("\n")}` : null
        }
        function Nl(a) {
            if (!Array.isArray(a))
                return Object.freeze([]);
            a = a.filter(b => typeof b === "number" && Number.isInteger(b) && b >= 0);
            return Object.freeze(a)
        }
        function dj(a) {
            return Array.isArray(a) ? Object.freeze(a.filter(b => typeof b === "string" && b.trim() !== "")) : Object.freeze([])
        }
        function Am(a) {
            var b, c = Object, d = c.freeze;
            var e = (b = Nf(a.Sa, a.Ug)) != null ? b : "";
            b = a.Zd;
            if (typeof e !== "string")
                b = "";
            else if (b === null)
                b = e;
            else {
                e = e.split(b.Ce);
                var [f,g] = b.$g ? [e.length - b.position - 1, e.length - 1] : [0, b.position]
                  , h = Math.max(0, Math.min(f, e.length - 1));
                b = e.slice(h, Math.max(h, Math.min(g, e.length - 1)) + 1).join(b.Ce)
            }
            b = oj(b);
            a.location === "midroll" ? e = "Thanks for playing! Quick ad break to keep the game free. Back soon - Appreciate your support!" : (e = Nf(a.Sc, a.Qh),
            e === null ? e = "Thanks for playing! Quick ad break to keep the game free. Back soon - Appreciate your support!" : (e = e.replace(/<[^>]*>/g, ""),
            e = e.length >= 200 ? e.slice(0, 200) + "..." : e));
            var l, m;
            h = a.location === "midroll" ? (l = Nf(a.Ab, a.Jc)) != null ? l : "Continue game" : (m = Nf(a.Ab, a.vd)) != null ? m : "Play game";
            return d.call(c, {
                title: b,
                description: e,
                Eb: h,
                Zc: oh(a.Ha)
            })
        }
        function oj(a) {
            return a.length <= 40 ? a : a.slice(0, 39).replace(/\s+$/, "") + "\u2026"
        }
        function oh(a) {
            return typeof a === "string" ? a.trim() : a !== null && typeof a === "object" ? (a = a.image,
            typeof a === "string" ? a.trim() : "") : ""
        }
        function pj(a) {
            var b = Bm(a.url, a.oa).replace(/'/g, "%27");
            if (!a.ue)
                return b;
            var c = /^\/\//.test(b) ? `https:${b}` : b;
            return /^https?:\/\//i.test(c) ? `https://scout.wgimager.com/f_${a.Y ? "jpg" : "webp"}/w_420/q_90/${c}` : b
        }
        function Bm(a, b) {
            var c = a.trim();
            return c === "" || c === b || Cm.some(d => c.includes(d)) ? "https://afg.wgplayer.com/default_afg_image_400_q70.webp" : c
        }
        function Nf(...a) {
            for (let b of a)
                if (typeof b === "string" && b.trim() !== "")
                    return b;
            return null
        }
        function Dm(a) {
            var b = a.O === "auto" ? a.Ri ? "dark" : "light" : a.O, c, d = (c = qj.get(a.Pd)) != null ? c : qj.get("default");
            c = Object.assign({}, b === "dark" ? Em : Fm, d(b));
            d = Gm(a.Ua);
            return a.Ua === null || d === null || d.gd > .95 && d.Ag < .05 ? Object.freeze({
                O: b,
                Wb: Object.freeze(c)
            }) : Object.freeze({
                O: b,
                Wb: Object.freeze(Object.assign({}, c, {
                    Wc: `color-mix(in oklab, ${a.Ua} ${Math.round(55 + d.gd * 37)}%, transparent)`,
                    Vc: `color-mix(in oklab, ${a.Ua} ${Math.round(38 + d.gd * 30)}%, transparent)`
                }))
            })
        }
        function Gm(a) {
            if (a === null)
                return null;
            a = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(a.trim());
            if (a === null)
                return null;
            a = a[1];
            var b = a.length === 3 ? a.split("").map(d => d + d).join("") : a;
            a = Number.parseInt(b.slice(0, 2), 16) / 255;
            var c = Number.parseInt(b.slice(2, 4), 16) / 255;
            b = Number.parseInt(b.slice(4, 6), 16) / 255;
            return Object.freeze({
                gd: .299 * a + .587 * c + .114 * b,
                Ag: Math.max(a, c, b) - Math.min(a, c, b)
            })
        }
        function Hm(a, b, c, d=Im) {
            for (var e = []; a !== null && a.nodeType === 1; a = a.parentElement)
                d(a) || e.push(a);
            for (let f of c)
                f !== null && e.push(f);
            for (let f of e)
                if (c = Jm(b(f)),
                c !== null)
                    return c;
            return null
        }
        function Jm(a) {
            if (a === null || a === "")
                return null;
            a = /^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*(?:,\s*([\d.]+)\s*)?\)$/i.exec(a);
            if (a === null || (a[4] === void 0 ? 1 : Number.parseFloat(a[4])) < .05)
                return null;
            var b = c => Math.max(0, Math.min(255, Math.round(Number.parseFloat(c)))).toString(16).padStart(2, "0");
            return `#${b(a[1])}${b(a[2])}${b(a[3])}`
        }
        function Km(a) {
            try {
                let b;
                if (((b = a.matchMedia) == null ? void 0 : b.call(a, "(prefers-color-scheme: dark)").matches) === !0)
                    return !0;
                let c, d, e = (d = (c = a.Vi) == null ? void 0 : c.call(a)) != null ? d : null;
                if (e === null)
                    return !1;
                let f = /(\d+)[,\s]+(\d+)[,\s]+(\d+)/.exec(e);
                return f === null ? !1 : (.299 * Number(f[1]) + .587 * Number(f[2]) + .114 * Number(f[3])) / 255 < .5
            } catch (b) {
                return !1
            }
        }
        function Lm(a, b) {
            var c = b.document;
            Mm(c);
            var d = Am(a.content)
              , e = pj({
                url: d.Zc,
                ue: a.ib,
                Y: a.Y,
                oa: a.oa
            });
            a.host.classList.add("wgSplashV2");
            a.host.setAttribute("data-splash-variant", "classic-v2");
            a.host.setAttribute("data-splash-location", a.location);
            a.host.classList.remove("wgSplash");
            var f, g = Dm({
                O: a.O,
                Pd: a.Pd,
                Ua: (f = a.Ua) != null ? f : Nm(c),
                Ri: Km({
                    matchMedia: b.matchMedia === void 0 ? void 0 : v => {
                        var C;
                        return (C = b.matchMedia) == null ? void 0 : C.call(b, v)
                    }
                    ,
                    Vi: () => {
                        a: {
                            try {
                                let C = c.createElement("div");
                                C.style.cssText = "position:absolute;left:-9999px;top:-9999px;width:1px;height:1px;background-color:Canvas;";
                                let R, D = (R = c.body) != null ? R : c.documentElement;
                                if (D === null) {
                                    var v = null;
                                    break a
                                }
                                D.appendChild(C);
                                let P, u, E = (u = (P = c.defaultView) == null ? void 0 : P.getComputedStyle(C).backgroundColor) != null ? u : null;
                                C.remove();
                                v = E;
                                break a
                            } catch (C) {
                                v = null;
                                break a
                            }
                            v = void 0
                        }
                        return v
                    }
                })
            });
            f = g.Wb;
            var h, l = (h = a.host.shadowRoot) != null ? h : a.host.attachShadow({
                mode: "open"
            });
            l.replaceChildren();
            h = c.createElement("style");
            h.textContent = '.wgBg, .wgBgImage, .wgThumb { display: none !important; }.splash-container {all: initial;display: block;container-type: size;width: 100%;height: 100%;box-sizing: border-box;font-family: system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;}@media (min-resolution: 1.1dppx) {.splash-card.splash-classic { background: var(--splash-base) !important; }}.splash-card { transition: box-shadow .35s cubic-bezier(.2,.7,.3,1); isolation: isolate; }.splash-card.splash-classic:hover {box-shadow: 0 1px 0 rgba(0,0,0,.04), 0 28px 60px -22px rgba(40,30,15,.28);}.splash-img-frame { overflow: hidden; position: relative; z-index: 1; }.splash-img-frame::after {content: ""; position: absolute; inset: 0;background: radial-gradient(110% 80% at 50% 50%, transparent 30%, rgba(0,0,0,.35) 65%, rgba(0,0,0,.85) 100%);opacity: 0; transition: opacity .55s ease-out; pointer-events: none; z-index: 2;}.splash-card:hover .splash-img-frame::after { opacity: 1; }.splash-img-pan { display: block; width: 100%; height: 100%; transform-origin: center; }.splash-img-zoom {display: block; width: 100%; height: 100%;transform: scale(1); transform-origin: center;transition: transform 1.2s cubic-bezier(.2,.7,.3,1);}.splash-motion .splash-img-pan { animation: splash-kenburns 18s ease-in-out infinite alternate; }.splash-card.splash-motion:hover .splash-img-pan { animation-duration: 5s; }.splash-card:hover .splash-img-zoom { transform: scale(1.12); }@keyframes splash-kenburns {0%   { transform: scale(1.04) translate(-1%, -0.5%); }100% { transform: scale(1.10) translate(1.5%, 0.8%); }}.splash-cta { position: relative; overflow: hidden; isolation: isolate; }.splash-cta::after {content: ""; position: absolute; top: 0; left: 0;width: 38%; height: 100%;background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,.42) 50%, transparent 100%);transform: translateX(-150%) skewX(-22deg);pointer-events: none; z-index: 1;}.splash-motion .splash-cta::after { animation: splash-shimmer 4.5s ease-in-out 1.5s infinite; }.splash-cta > * { position: relative; z-index: 2; }.splash-cta-icon { transition: transform .25s cubic-bezier(.2,.7,.3,1); }.splash-card:hover .splash-cta-icon { animation: splash-icon-pulse 1s ease-in-out infinite; }@keyframes splash-icon-pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.18); } }@keyframes splash-cta-spin { to { transform: rotate(360deg); } }.splash-cta.is-loading { pointer-events: none; cursor: default; opacity: .82; animation: none !important; transform: none !important; }.splash-cta.is-loading .splash-cta-icon { font-size: 0 !important; padding-left: 0 !important; animation: none !important; transform: none !important; }.splash-cta.is-loading .splash-cta-icon::after { content: ""; box-sizing: border-box; width: 23px; height: 23px; border-radius: 50%; border: 2px solid rgba(255,255,255,.4); border-top-color: #fff; animation: splash-cta-spin .7s linear infinite; }.splash-motion .splash-cta { animation: splash-pulse 2.8s ease-in-out infinite; }.splash-card.splash-motion:hover .splash-cta {animation: splash-pulse 2.8s ease-in-out infinite, splash-glow-pulse 2.8s ease-in-out infinite;}.splash-motion .splash-live-dot { animation: splash-dot-pulse 1.6s ease-in-out infinite; }.splash-motion .splash-tag-pulse { animation: splash-tag-pulse 2.8s ease-in-out infinite; }@keyframes splash-shimmer {0% { transform: translateX(-150%) skewX(-22deg); }60%, 100% { transform: translateX(320%) skewX(-22deg); }}@keyframes splash-pulse {0%, 100% { transform: translateY(0); }50% { transform: translateY(-4px); }}@keyframes splash-glow-pulse {0%, 100% { box-shadow: 0 4px 14px rgba(0,0,0,.16), 0 0 0 0 transparent; }50% { box-shadow: 0 12px 22px rgba(0,0,0,.2), 0 0 22px 2px var(--splash-glow, currentColor); }}@keyframes splash-dot-pulse {0%, 100% { box-shadow: 0 0 6px currentColor; opacity: .9; }50% { box-shadow: 0 0 16px currentColor, 0 0 4px currentColor; opacity: 1; }}@keyframes splash-tag-pulse { 0%, 100% { opacity: 1; } 50% { opacity: .65; } }@keyframes splash-pop-in {from { opacity: 0; transform: translateY(6px) scale(.97); }to   { opacity: 1; transform: translateY(0) scale(1); }}.splash-classic.splash-dot-drift .splash-dots {will-change: transform;animation: splash-dot-drift 18s linear infinite;}@keyframes splash-dot-drift {0%   { transform: translate3d(0, 0, 0); }100% { transform: translate3d(72px, 36px, 0); }}.splash-anim-throb .splash-img-zoom { animation: splash-img-throb 4s ease-in-out infinite; }@keyframes splash-img-throb {0%, 100% { filter: saturate(1) brightness(1) contrast(1); }50%      { filter: saturate(1.28) brightness(1.07) contrast(1.04); }}.splash-fx-sweep {position: absolute; top: -10%; left: 0; width: 60%; height: 120%;background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,.04) 20%, rgba(255,255,255,.18) 42%, rgba(255,255,255,.42) 50%, rgba(255,255,255,.18) 58%, rgba(255,255,255,.04) 80%, transparent 100%);transform: translateX(-160%) skewX(-22deg);pointer-events: none; z-index: 2; mix-blend-mode: screen; filter: blur(2px);}.splash-motion.splash-anim-sweep:hover .splash-fx-sweep { animation: splash-img-sweep 1.4s cubic-bezier(.3,.4,.5,.7); }@keyframes splash-img-sweep {0%   { transform: translateX(-160%) skewX(-22deg); }100% { transform: translateX(280%) skewX(-22deg); }}.splash-motion.splash-anim-sheen-flare:hover .splash-fx-sweep { animation: splash-img-sweep 1.4s cubic-bezier(.3,.4,.5,.7); }.splash-fx-lens-flare {position: absolute; top: 8%; right: 8%; width: 90px; height: 90px;background: radial-gradient(circle at center, rgba(255,235,180,.85) 0%, rgba(255,200,120,.55) 18%, rgba(255,150,80,.25) 38%, transparent 60%);pointer-events: none; z-index: 3; mix-blend-mode: screen;opacity: 0; transform: scale(.4); transition: opacity .4s ease-out, transform .4s ease-out;}.splash-card.splash-anim-lens-flare:hover .splash-fx-lens-flare,.splash-card.splash-anim-sheen-flare:hover .splash-fx-lens-flare {opacity: 1; transform: scale(1);}.splash-confetti-particle {position: absolute; top: 50%; left: 50%; width: 8px; height: 8px;border-radius: 2px; pointer-events: none; opacity: 0;--angle: calc(var(--i) * 25.7deg);animation: splash-confetti-fly .9s cubic-bezier(.2,.7,.3,1) forwards;z-index: 4;}@keyframes splash-confetti-fly {0% { opacity: 0; transform: translate(-50%, -50%) rotate(var(--angle)) translateY(0) rotate(0); }10% { opacity: 1; }100% { opacity: 0; transform: translate(-50%, -50%) rotate(var(--angle)) translateY(-72px) rotate(540deg) scale(.6); }}.splash-ticker-msg {display: inline-flex; align-items: center; gap: 6px;animation: splash-ticker-slide .45s cubic-bezier(.2,.7,.3,1);}@keyframes splash-ticker-slide {from { opacity: 0; transform: translateY(8px); }to   { opacity: 1; transform: translateY(0); }}@container (aspect-ratio < 1.06) and (min-width: 720px) {.splash-card.splash-classic {grid-template-columns: 1fr !important;grid-template-rows: 560px auto !important;padding: 40px !important; gap: 36px !important; border-radius: 22px !important;}.splash-classic .splash-img-frame {aspect-ratio: auto !important; width: 100% !important; height: 100% !important; min-width: 0 !important;}.splash-classic h1 { font-size: 56px !important; letter-spacing: -.035em !important; }.splash-classic p  { font-size: 17px !important; margin-top: 26px !important; max-width: 640px !important; }.splash-classic .splash-ready-pill {margin-bottom: 22px !important; padding: 7px 14px 7px 12px !important; font-size: 12px !important;}}@container (max-width: 820px) {.splash-card.splash-classic {grid-template-columns: 1fr !important;grid-template-rows: auto auto !important;padding: 28px !important; gap: 24px !important; border-radius: 18px !important;}.splash-classic .splash-img-frame { aspect-ratio: 16/9; width: 100% !important; min-width: 0 !important; }.splash-classic h1 { font-size: 38px !important; letter-spacing: -.03em !important; }.splash-classic p  { font-size: 15px !important; margin-top: 22px !important; max-width: none !important; }.splash-classic .splash-ready-pill { margin-bottom: 22px !important; }}@container (max-width: 620px) {.splash-card.splash-classic { padding: 20px !important; gap: 20px !important; border-radius: 16px !important; }.splash-classic h1 { font-size: 30px !important; letter-spacing: -.025em !important; }.splash-classic p  { font-size: 14px !important; margin-top: 18px !important; }.splash-classic .splash-ready-pill { margin-bottom: 18px !important; }}@container (max-width: 380px) {.splash-card.splash-classic { padding: 16px !important; gap: 16px !important; }.splash-classic h1 { font-size: 26px !important; }.splash-classic p  {font-size: 13.5px !important; margin-top: 14px !important;display: -webkit-box !important; -webkit-line-clamp: 3 !important; -webkit-box-orient: vertical !important; overflow: hidden !important;}.splash-classic .splash-ready-pill { margin-bottom: 14px !important; }}@container (max-height: 500px) and (min-aspect-ratio: 1.3) and (min-width: 480px) {.splash-card.splash-classic {grid-template-columns: 1fr 1.15fr !important;grid-template-rows: 1fr !important;padding: 20px !important; gap: 20px !important; border-radius: 16px !important;}.splash-classic .splash-img-frame { aspect-ratio: auto !important; width: 100% !important; height: 100% !important; min-width: 0 !important; }.splash-classic h1 { font-size: 28px !important; letter-spacing: -.025em !important; }.splash-classic p  {font-size: 13px !important; margin-top: 12px !important; max-width: none !important;display: -webkit-box !important; -webkit-line-clamp: 2 !important; -webkit-box-orient: vertical !important; overflow: hidden !important;}.splash-classic .splash-ready-pill { margin-bottom: 10px !important; }}@container (max-height: 330px) and (min-width: 480px) {.splash-card.splash-classic {grid-template-columns: 1fr !important;grid-template-rows: 90px 1fr !important;padding: 12px !important; gap: 10px !important; border-radius: 14px !important;}.splash-classic .splash-img-frame { aspect-ratio: auto !important; width: 100% !important; height: 100% !important; min-width: 0 !important; }.splash-card.splash-classic .splash-classic-content {display: flex !important; flex-direction: row !important; align-items: center !important;justify-content: space-between !important; gap: 28px !important; padding: 0 !important; min-height: 0 !important;}.splash-card.splash-classic .splash-classic-info {flex: 1 1 0 !important; min-width: 0 !important;display: flex !important; flex-direction: column !important; justify-content: center !important; gap: 14px !important;}.splash-card.splash-classic .splash-classic-main { display: contents !important; }.splash-card.splash-classic .splash-classic-publisher { display: flex !important; gap: 6px !important; align-items: center !important; }.splash-card.splash-classic .splash-classic-publisher > span { font-size: 9px !important; letter-spacing: .18em !important; }.splash-card.splash-classic .splash-classic-publisher img { height: 14px !important; }.splash-card.splash-classic .splash-ready-pill {margin-bottom: 0 !important; padding: 3px 9px 3px 7px !important;font-size: 9.5px !important; letter-spacing: .14em !important; align-self: flex-start !important;}.splash-card.splash-classic .splash-live-dot { width: 6px !important; height: 6px !important; }.splash-classic h1 { font-size: 18px !important; line-height: 1.04 !important; letter-spacing: -.02em !important; margin: 0 !important; }.splash-card.splash-classic .splash-classic-info p {display: -webkit-box !important; -webkit-line-clamp: 2 !important; -webkit-box-orient: vertical !important; overflow: hidden !important;margin: 0 !important; font-size: 11.5px !important; line-height: 1.35 !important; max-width: none !important;}.splash-card.splash-classic .splash-classic-actions { flex: 0 0 auto !important; margin-top: 0 !important; align-items: center !important; gap: 6px !important; }.splash-classic .splash-cta { padding: 9px 18px !important; font-size: 13.5px !important; }.splash-classic .splash-cta-icon { width: 22px !important; height: 22px !important; font-size: 10px !important; }.splash-card.splash-classic .splash-classic-actions > span { font-size: 9.5px !important; letter-spacing: .14em !important; }}@media (prefers-reduced-motion: reduce) {.splash-card, .splash-card *, .splash-card *::before, .splash-card *::after {animation-duration: .001ms !important; animation-iteration-count: 1 !important; transition-duration: .12s !important;}}';
            var m = Om(c, Object.assign({}, {
                content: d,
                Zc: e,
                Ya: a.Ya,
                Ec: a.Ec,
                X: a.X && a.location !== "midroll",
                Wb: f,
                O: g.O,
                Na: a.Na,
                ed: a.ed
            }, {
                pb: a.pb,
                qb: a.qb
            }));
            l.append(h, m.container);
            d = `only ${g.O}`;
            a.host.style.setProperty("color-scheme", d);
            m.container.style.setProperty("color-scheme", d);
            var t = null;
            if (m.td !== null) {
                let v = ["Ready in 3\u2026", "Ready in 2\u2026", "Ready in 1\u2026", "Ready to play"]
                  , C = 0;
                t = setInterval( () => {
                    C += 1;
                    if (C >= v.length)
                        t !== null && (clearInterval(t),
                        t = null);
                    else {
                        var R = c.createElement("span");
                        R.className = "splash-ticker-msg";
                        R.textContent = v[C];
                        var D;
                        (D = m.td) == null || D.replaceWith(R);
                        m.td = R
                    }
                }
                , 1E3)
            }
            var w = null
              , y = v => {
                m.Fa.classList.toggle("is-loading", v);
                m.Fa.setAttribute("aria-busy", v ? "true" : "false");
                w !== null && (clearTimeout(w),
                w = null);
                v && (w = setTimeout( () => y(!1), 2E4))
            }
              , I = () => {
                var v, C, R = ((v = b.navigator) == null ? void 0 : (C = v.userActivation) == null ? void 0 : C.isActive) === !0;
                y(!0);
                try {
                    a.od({
                        xg: R
                    })
                } catch (D) {
                    y(!1),
                    console.error("[afg] the pod threw while starting from the splash", D)
                }
            }
              , M = () => {
                I()
            }
            ;
            m.Fa.addEventListener("click", I);
            m.frame.addEventListener("click", M);
            var G = 0
              , ja = !1
              , Aa = v => pj({
                url: v,
                ue: a.ib,
                Y: a.Y,
                oa: a.oa
            })
              , r = v => {
                var C = G += 1
                  , R = Aa(v);
                R !== m.image.getAttribute("src") && (v = c.createElement("img"),
                v.addEventListener("load", () => {
                    ja || C !== G || m.image.setAttribute("src", R)
                }
                , {
                    once: !0
                }),
                v.addEventListener("error", () => {
                    var D = Aa("https://afg.wgplayer.com/default_afg_image_400_q70.webp");
                    ja || C !== G || m.image.setAttribute("src", D)
                }
                , {
                    once: !0
                }),
                v.setAttribute("src", R))
            }
            ;
            return {
                If: y,
                Jf(v) {
                    v ? a.host.style.setProperty("display", "block", "important") : a.host.style.setProperty("display", "none", "important")
                },
                Ej(v) {
                    m.ze.textContent = v
                },
                update(v) {
                    Of(v.title) && (m.title.textContent = oj(v.title));
                    Of(v.Ra) && (m.description.textContent = v.Ra);
                    Of(v.Fa) && (m.ze.textContent = v.Fa);
                    Of(v.$c) && r(v.$c)
                },
                destroy() {
                    ja = !0;
                    w !== null && (clearTimeout(w),
                    w = null);
                    t !== null && (clearInterval(t),
                    t = null);
                    m.Fa.removeEventListener("click", I);
                    m.frame.removeEventListener("click", M);
                    l.replaceChildren();
                    a.host.classList.remove("wgSplashV2");
                    a.host.removeAttribute("data-splash-variant");
                    a.host.removeAttribute("data-splash-location")
                }
            }
        }
        function Om(a, b) {
            var c = b.Wb
              , d = ["splash-card", "splash-classic"];
            b.Ya && d.push("splash-motion", "splash-dot-drift", "splash-anim-throb", "splash-anim-sweep");
            d = Ka(a, "div", d.join(" "));
            ya(d, {
                width: "100%",
                height: "100%",
                background: [`radial-gradient(120% 80% at 100% 0%, ${c.Wc}, transparent 55%)`, `radial-gradient(90% 70% at 0% 100%, ${c.Vc}, transparent 60%)`, c.yc].join(", "),
                "--splash-base": c.yc,
                border: `1px solid ${c.border}`,
                "border-radius": "20px",
                padding: "32px",
                display: "grid",
                "grid-template-columns": b.ed ? "4fr 1.2fr" : "1fr 1.2fr",
                gap: "32px",
                "align-items": "stretch",
                "box-shadow": c.te,
                "font-family": Id.body,
                color: c.Ke,
                position: "relative",
                overflow: "hidden",
                "box-sizing": "border-box"
            });
            var e = Ka(a, "div", "splash-dots");
            e.setAttribute("aria-hidden", "true");
            ya(e, {
                position: "absolute",
                inset: "-126px",
                "pointer-events": "none",
                "z-index": "0",
                background: `radial-gradient(${c.Ee} 1.2px, transparent 1.4px) 0 0 / 18px 18px`
            });
            var f = a.createElement("div");
            f.setAttribute("aria-hidden", "true");
            ya(f, {
                position: "absolute",
                inset: "0",
                "pointer-events": "none",
                "z-index": "2",
                "border-radius": "20px",
                "box-shadow": `inset 0 1px 0 ${c.Ye}, inset 0 -1px 0 ${c.Ze}`
            });
            var g = a.createElement("img");
            g.className = "splash-img-zoom";
            g.src = b.Zc;
            g.alt = "";
            ya(g, {
                width: "100%",
                height: "100%",
                "object-fit": "cover",
                "border-radius": "14px",
                display: "block"
            });
            var h = Ka(a, "div", "splash-img-pan");
            h.append(g);
            var l = Ka(a, "div", "splash-img-frame");
            ya(l, {
                position: "relative",
                "border-radius": "14px",
                overflow: "hidden",
                cursor: "pointer",
                "--brand-glow": c.va
            });
            l.append(h);
            b.Ya && (h = Ka(a, "span", "splash-fx-sweep"),
            h.setAttribute("aria-hidden", "true"),
            l.append(h));
            h = a.createElement("span");
            h.textContent = b.pb !== null ? "Published by" : "Now playing";
            ya(h, {
                "font-family": Id.kd,
                "font-size": "11px",
                "letter-spacing": ".2em",
                "text-transform": "uppercase",
                color: c.Wa,
                "font-weight": "700"
            });
            var m = Ka(a, "div", "splash-classic-publisher");
            ya(m, {
                display: "flex",
                "align-items": "center",
                gap: "10px"
            });
            m.append(h);
            if (b.pb !== null) {
                h = a.createElement("img");
                h.src = b.pb;
                var t;
                h.alt = (t = b.qb) != null ? t : "Publisher";
                ya(h, {
                    height: b.O === "dark" ? "16px" : "22px",
                    display: "block"
                });
                t = a.createElement("span");
                ya(t, {
                    display: "inline-flex",
                    "align-items": "center",
                    height: "22px",
                    padding: b.O === "dark" ? "3px 8px" : "0",
                    background: b.O === "dark" ? c.Pf : "transparent",
                    "border-radius": "5px"
                });
                t.append(h);
                m.append(t)
            }
            t = b.X && b.Ya;
            h = Ka(a, "span", "splash-ticker-msg");
            h.textContent = t ? "Ready in 3\u2026" : "Ready to play";
            var w = Ka(a, "span", "splash-live-dot");
            ya(w, {
                width: "7px",
                height: "7px",
                "border-radius": "50%",
                background: "#22c55e",
                color: "#22c55e",
                "box-shadow": "0 0 8px #22c55e",
                "flex-shrink": "0"
            });
            var y = Ka(a, "span", "splash-ready-pill");
            ya(y, {
                display: "inline-flex",
                "align-items": "center",
                gap: "8px",
                padding: "6px 12px 6px 10px",
                "margin-bottom": "26px",
                background: b.O === "dark" ? "rgba(34, 197, 94, .18)" : "rgba(22, 163, 74, .14)",
                border: `1px solid ${b.O === "dark" ? "rgba(74, 222, 128, .35)" : "rgba(22, 163, 74, .28)"}`,
                "border-radius": "999px",
                "font-family": Id.kd,
                "font-size": "11px",
                "font-weight": "700",
                "letter-spacing": ".16em",
                "text-transform": "uppercase",
                color: b.O === "dark" ? "#86efac" : "#15803d"
            });
            y.append(w, h);
            w = Ka(a, "h1", "wgTitle");
            w.textContent = b.content.title;
            ya(w, {
                margin: "0",
                "font-family": Id.display,
                "font-weight": "800",
                "font-size": "44px",
                "line-height": "1.02",
                "letter-spacing": "-.03em",
                "text-wrap": "balance"
            });
            var I = Ka(a, "p", "wgPrerollDescription");
            I.textContent = b.content.description;
            ya(I, {
                margin: "26px 0 0",
                "font-size": "16px",
                "line-height": "1.55",
                color: c.Ra,
                "max-width": "480px",
                "text-wrap": "pretty"
            });
            var M = Ka(a, "div", "splash-classic-main");
            ya(M, {
                "align-self": "center"
            });
            M.append(y, w, I);
            y = Ka(a, "div", "splash-classic-info");
            ya(y, {
                display: "grid",
                "grid-template-rows": "auto 1fr",
                "min-height": "0"
            });
            y.append(m, M);
            var G = Ka(a, "span", "splash-cta-icon");
            G.textContent = "\u25b6";
            ya(G, {
                width: "38px",
                height: "38px",
                "border-radius": "50%",
                background: "rgba(0,0,0,.22)",
                display: "flex",
                "align-items": "center",
                "justify-content": "center",
                "font-size": "16px",
                "padding-left": "2px"
            });
            m = a.createElement("span");
            m.textContent = b.content.Eb;
            var ja = a.createElement("span");
            ja.setAttribute("aria-hidden", "true");
            ya(ja, {
                position: "absolute",
                inset: "0",
                "pointer-events": "none",
                overflow: "visible"
            });
            M = Ka(a, "button", "splash-cta wgPrerollCTA");
            M.type = "button";
            ya(M, {
                position: "relative",
                padding: "20px 36px",
                background: c.va,
                color: c.Eb,
                border: "none",
                "border-radius": "999px",
                "font-family": Id.display,
                "font-weight": "800",
                "font-size": "22px",
                "letter-spacing": "-.01em",
                cursor: "pointer",
                display: "inline-flex",
                "align-items": "center",
                gap: "14px",
                "white-space": "nowrap",
                "--splash-glow": c.va,
                transition: "transform .2s ease-out"
            });
            M.append(G, m, ja);
            b.Ec && b.Ya && M.addEventListener("mouseenter", () => {
                ja.replaceChildren();
                for (let r = 0; r < 14; r += 1) {
                    let v = Ka(a, "span", "splash-confetti-particle");
                    v.style.setProperty("--i", String(r));
                    v.style.setProperty("background", rj[r % rj.length]);
                    v.style.setProperty("animation-delay", `${r % 4 * 30}ms`);
                    ja.append(v)
                }
            }
            );
            G = a.createElement("span");
            ya(G, {
                "align-self": "stretch",
                display: "flex",
                "align-items": "center",
                "justify-content": "center",
                gap: "8px",
                "font-family": Id.kd,
                "font-size": "11px",
                "letter-spacing": ".18em",
                "text-transform": "uppercase",
                color: c.caption
            });
            G.append(Pm(a), a.createTextNode("Watch ad to play"));
            c = Ka(a, "div", "splash-classic-actions");
            ya(c, {
                display: "flex",
                "flex-direction": "column",
                "align-items": "flex-start",
                gap: "10px",
                "margin-top": "12px",
                width: "fit-content"
            });
            c.append(M, G);
            G = Ka(a, "div", "splash-classic-content");
            ya(G, {
                display: "grid",
                "grid-template-rows": "1fr auto",
                padding: "4px 0",
                "min-height": "0",
                position: "relative",
                "z-index": "1"
            });
            G.append(y, c);
            d.append(e, f, l, G);
            b.Na !== null && d.append(Qm(a, b.Na, b.O));
            b = a.createElement("div");
            b.innerHTML = "";
            for (var Aa of ["wgBg", "wgBgImage", "wgThumb"])
                b.append(Ka(a, "div", Aa));
            Aa = Ka(a, "div", "splash-container");
            Aa.append(d, b);
            return {
                container: Aa,
                Hk: d,
                frame: l,
                image: g,
                Fa: M,
                ze: m,
                title: w,
                description: I,
                td: t ? h : null
            }
        }
        function Pm(a) {
            var b = a.createElementNS("http://www.w3.org/2000/svg", "svg");
            b.setAttribute("width", "14");
            b.setAttribute("height", "14");
            b.setAttribute("viewBox", "0 0 16 16");
            b.setAttribute("aria-hidden", "true");
            b.setAttribute("fill", "none");
            var c = a.createElementNS("http://www.w3.org/2000/svg", "circle");
            c.setAttribute("cx", "8");
            c.setAttribute("cy", "8");
            c.setAttribute("r", "7");
            c.setAttribute("stroke", "currentColor");
            c.setAttribute("stroke-width", "1.4");
            a = a.createElementNS("http://www.w3.org/2000/svg", "path");
            a.setAttribute("d", "M6.5 5.5 L11 8 L6.5 10.5 Z");
            a.setAttribute("fill", "currentColor");
            b.append(c, a);
            return b
        }
        function Qm(a, b, c) {
            var d = a.createElement("img");
            d.src = b;
            d.alt = "Ad partner";
            ya(d, {
                height: "20px",
                width: "auto",
                display: "block",
                "pointer-events": "none",
                filter: c === "dark" ? "brightness(0) invert(1)" : "none"
            });
            b = a.createElement("button");
            b.type = "button";
            b.setAttribute("aria-label", "Ad partner information");
            ya(b, {
                display: "inline-flex",
                "align-items": "center",
                "justify-content": "center",
                padding: "6px 8px",
                background: "transparent",
                border: "none",
                "border-radius": "8px",
                cursor: "pointer",
                opacity: ".75",
                transition: "opacity .15s, background .15s, transform .15s"
            });
            b.append(d);
            a = a.createElement("div");
            ya(a, {
                position: "absolute",
                right: "14px",
                bottom: "12px",
                "z-index": "5"
            });
            a.append(b);
            return a
        }
        function ya(a, b) {
            a = a.style;
            for (let c of Object.keys(b))
                a.setProperty(c, b[c])
        }
        function Nm(a) {
            try {
                return Hm(null, b => {
                    var c, d;
                    return (d = (c = a.defaultView) == null ? void 0 : c.getComputedStyle(b).backgroundColor) != null ? d : ""
                }
                , [a.body, a.documentElement])
            } catch (b) {
                return null
            }
        }
        function Of(a) {
            return typeof a === "string" && a.trim() !== ""
        }
        function Ka(a, b, c) {
            a = a.createElement(b);
            a.className = c;
            return a
        }
        function Mm(a) {
            if (a.getElementById("splash-classic-v2-css") === null) {
                var b = a.createElement("style");
                b.id = "splash-classic-v2-css";
                b.setAttribute("wg-css", "");
                b.textContent = ".wgSplashV2 {display: block !important;background: transparent !important;background-color: transparent !important;padding: 0 !important;overflow: hidden !important;box-sizing: border-box !important;}.wgSplashV2::before, .wgSplashV2::after {content: none !important; background: none !important; display: none !important;}";
                a.head.appendChild(b);
                b = a.createElement("link");
                b.rel = "stylesheet";
                b.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@700&family=Space+Grotesk:wght@700&display=swap";
                a.head.appendChild(b)
            }
        }
        function Rm(a) {
            return a.ac || !a.mh || a.cd && !a.rh ? !1 : !0
        }
        function Pf(a) {
            return Object.freeze({
                show: !1,
                reason: a
            })
        }
        function sj(a, b="") {
            ph = a;
            qh = a >= 1;
            tj = a >= 2;
            uj = a >= 1;
            Qf = b
        }
        function vj(a, b) {
            return b === "" ? a : a.replace(/^\[(afg[a-z-]*)\]/, `[$1 @ ${b}]`)
        }
        function rh(a) {
            var [b,...c] = a;
            return typeof b === "string" ? [vj(b, Qf), ...c] : [...a]
        }
        function aa(...a) {
            if (qh)
                try {
                    console.warn(...rh(a))
                } catch (b) {}
        }
        function hc(...a) {
            if (qh)
                try {
                    console.info(...rh(a))
                } catch (b) {}
        }
        function z(...a) {
            if (tj)
                try {
                    console.info(...rh(a))
                } catch (b) {}
        }
        function Mb(a) {
            if (uj)
                try {
                    console.info(vj(a, Qf))
                } catch (b) {}
        }
        function sh(a) {
            if (a === null)
                return 0;
            a = Number.parseInt(a, 10);
            return Number.isFinite(a) ? a < 0 ? 0 : a : 1
        }
        function Sm(a, b) {
            var c, d = (c = a.host.shadowRoot) != null ? c : a.host.attachShadow({
                mode: "open"
            }), e = b.createElement("style");
            e.textContent = '\n:host { all: initial; }\n\n.wrap {\n    position: absolute;\n    inset: 0;\n    /*\n     * Above everything else in the ad slot, including the H5.\n     *\n     * Without a z-index at all the chrome paints in DOM order, and the second ad of a pod\n     * renders into a host appended *after* this one \u2014 so the counter and the sound control\n     * disappeared for every promoted lane while the ad played on top of them. Measured: a\n     * live, ticking "Ad 2 of 2" in the shadow root and nothing on screen.\n     *\n     * Above the H5 at 2147483004, because the counter is the pod\'s rather than the\n     * creative\'s: it says which of the pod\'s ads the player is on, and an H5 is one of\n     * them. It sits bottom-left, clear of the close and reward controls a rewarded\n     * overlay puts top-right.\n     *\n     * **True of one H5 path, and not of the other.** `H5Interstitial` renders through\n     * `IsolatedFrame` on a top-level page \u2014 an iframe inside the ad container, at\n     * `H5_Z_INDEX`, so this number does beat it. On an *embedded* page it renders through\n     * `EmbeddedInjection`, and the ad is then a GPT out-of-page slot\n     * (`defineOutOfPageSlot`, `GAME_MANUAL_INTERSTITIAL` / `REWARDED`) that **GPT draws\n     * itself, at document level, outside our container**. The counter is not its sibling,\n     * so no z-index here can reach above it: it shows through GPT\'s scrim, dimmed.\n     * Reported from `azgames.io`, where the SDK runs only inside the game frame.\n     *\n     * Left as it is, deliberately, and not a v9 regression \u2014 v6 puts its H5 at `999999`\n     * against a base `ZINDEX` of `9999` (`1580`), so its counter is under the H5 too.\n     * Raising ours would mean drawing over a Google creative: the bottom-left corner is\n     * where GPT puts its own label, we register no friendly obstructions with OMID\n     * anywhere in this SDK, and ad-interference is the kind of policy finding that\n     * restricts a domain rather than an impression. A pill saying "Ad 1 of 2" is not worth\n     * that. See `src/h5/README.md`.\n     */\n    z-index: 2147483005;\n    pointer-events: none;\n    font: 400 14px/1.3 system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;\n    color: #fff;\n    -webkit-font-smoothing: antialiased;\n}\n\n.counter {\n    position: absolute;\n    left: 12px;\n    bottom: 12px;\n    padding: 5px 10px;\n    border-radius: 999px;\n    background: rgba(0, 0, 0, .62);\n    font-size: 12px;\n    font-variant-numeric: tabular-nums;\n    letter-spacing: .01em;\n    white-space: nowrap;\n    backdrop-filter: blur(2px);\n}\n\n/* v6 lifts the pill above IMA\'s own skip button by 100px (24802). Same intent. */\n.counter[data-skippable="true"] { bottom: 100px; }\n\n.progress {\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    height: 3px;\n    background: rgba(255, 255, 255, .18);\n}\n\n.progress > i {\n    display: block;\n    height: 100%;\n    width: 0;\n    background: #fff;\n    transition: width .12s linear;\n}\n\n.sound {\n    position: absolute;\n    top: 12px;\n    right: 12px;\n    width: 38px;\n    height: 38px;\n    padding: 0;\n    border: 0;\n    border-radius: 50%;\n    background: rgba(0, 0, 0, .62);\n    color: #fff;\n    font-size: 17px;\n    line-height: 38px;\n    text-align: center;\n    cursor: pointer;\n    pointer-events: auto;\n    backdrop-filter: blur(2px);\n}\n\n.sound:focus-visible { outline: 2px solid #fff; outline-offset: 2px; }\n\n.hidden { display: none; }\n\n@media (prefers-reduced-motion: reduce) {\n    .progress > i { transition: none; }\n}\n\n.resume {\n    position: absolute;\n    inset: 0;\n    margin: auto;\n    width: 100px;\n    height: 100px;\n    padding: 0;\n    border: none;\n    border-radius: 50%;\n    background: rgba(0, 0, 0, 0.8);\n    color: #fff;\n    cursor: pointer;\n    pointer-events: auto;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 40px;\n    line-height: 1;\n    transition: background-color 0.2s;\n}\n\n.resume::before {\n    /* A glyph, where v6 uses a 1.4 kB base64 PNG of the same triangle (22001). */\n    content: \'\u25b6\';\n    margin-left: 6px;\n}\n\n/*\n * After the .hidden rule, so it has to say so itself.\n *\n * The .hidden rule sits above this block, and a later rule of the same specificity wins \u2014\n * so a plain .resume { display: flex } un-hid the button and put a play control over the\n * splash. Caught by splash-parity-check: 8 differing pixels became 7563.\n */\n.resume.hidden { display: none; }\n\n.resume:hover { background: rgba(0, 0, 0, 1); }\n.resume:focus-visible { outline: 2px solid #fff; outline-offset: 2px; }\n';
            d.appendChild(e);
            var f = Tm(b);
            d.appendChild(f.wrap);
            var g = a.Of
              , h = !0
              , l = !1
              , m = () => {
                if (h) {
                    g = !g;
                    f.ga.textContent = g ? "\ud83d\udd0a" : "\ud83d\udd07";
                    try {
                        a.Ei(g)
                    } catch (w) {
                        aa("[afg] the sound toggle threw", w)
                    }
                }
            }
            ;
            f.ga.addEventListener("click", m);
            var t = () => {
                if (h) {
                    Db(f.resume, !1);
                    try {
                        a.zi()
                    } catch (w) {
                        aa("[afg] resuming the ad threw", w)
                    }
                }
            }
            ;
            f.resume.addEventListener("click", t);
            f.ga.textContent = a.Of ? "\ud83d\udd0a" : "\ud83d\udd07";
            Db(f.ga, !1);
            return {
                show(w) {
                    w = w.Oe ? Object.freeze({
                        show: !0,
                        Yd: !1
                    }) : w.Xa === 1 ? Pf("single-ad-pod") : w.Qe || w.Pe ? w.je ? Pf("already-started") : w.xf ? Pf("podding-suppressed") : Object.freeze({
                        show: !0,
                        Yd: !0
                    }) : Pf("no-ad");
                    Db(f.counter, w.show);
                    l = w.show && w.Yd;
                    Db(f.ga, !1);
                    Db(f.progress, w.show && w.Yd)
                },
                aa() {
                    Db(f.counter, !1);
                    Db(f.progress, !1);
                    Db(f.ga, !1);
                    Db(f.resume, !1)
                },
                jc(w) {
                    Db(f.resume, w)
                },
                Ld(w) {
                    f.counter.setAttribute("data-skippable", String(w))
                },
                update(w) {
                    var y = w.za;
                    if (!Number.isFinite(y) || y < 0)
                        y = null;
                    else {
                        var I = Math.floor(y);
                        y = Math.floor(I / 3600);
                        var M = Math.floor(I / 60) % 60;
                        I %= 60;
                        I = I < 10 ? `0${I}` : `${I}`;
                        y = y > 0 ? `${y}:${M}:${I}` : `${M}:${I}`
                    }
                    M = `Ad ${w.index} of ${a.Xa}`;
                    f.counter.textContent = y === null ? M : `${M} (${y})`;
                    y = w.za;
                    M = w.M;
                    y = !Number.isFinite(y) || !Number.isFinite(M) || M <= 0 ? null : Math.min(100, Math.max(0, (M - Math.max(0, y)) / M * 100));
                    y !== null && (f.Wi.style.width = `${y}%`);
                    y = w.muted;
                    Db(f.ga, l && y);
                    g = !w.muted;
                    f.ga.textContent = w.muted ? "\ud83d\udd07" : "\ud83d\udd0a";
                    f.ga.setAttribute("aria-label", w.muted ? "Turn sound on" : "Turn sound off")
                },
                destroy() {
                    h = !1;
                    f.ga.removeEventListener("click", m);
                    f.resume.removeEventListener("click", t);
                    f.wrap.remove();
                    e.remove()
                }
            }
        }
        function Tm(a) {
            var b = a.createElement("div");
            b.className = "wrap";
            var c = a.createElement("div");
            c.className = "counter hidden";
            var d = a.createElement("div");
            d.className = "progress hidden";
            var e = a.createElement("i");
            d.appendChild(e);
            var f = a.createElement("button");
            f.className = "sound";
            f.type = "button";
            f.setAttribute("aria-label", "Turn sound on");
            a = a.createElement("button");
            a.className = "resume wgResumeAdButton hidden";
            a.type = "button";
            a.setAttribute("aria-label", "Resume the ad");
            b.appendChild(c);
            b.appendChild(d);
            b.appendChild(f);
            b.appendChild(a);
            return {
                wrap: b,
                counter: c,
                progress: d,
                Wi: e,
                ga: f,
                resume: a
            }
        }
        function Db(a, b) {
            a.classList.toggle("hidden", !b)
        }
        function Um(a, b) {
            var c, d = (c = a.host.shadowRoot) != null ? c : a.host.attachShadow({
                mode: "open"
            });
            d.replaceChildren();
            var e = b.createElement("style");
            e.textContent = "\n:host { all: initial; }\n\n.wrap {\n    position: absolute;\n    inset: 0;\n    display: none;\n    background-color: #1e1e1e;\n    background-image: url(\"data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1023.55 782.83'%3E%3Cdefs%3E%3Cstyle%3E .cls-1 %7B fill: %23c9ccce; opacity:.3; %7D %3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M522.19,403.24a13.86,13.86,0,0,1-13.82-13.84V315.19A13.82,13.82,0,0,1,528.75,303l66.35,35.81a13.82,13.82,0,0,1,.36,24.12L563,381.72A5.05,5.05,0,0,1,558,373l32.41-18.77a3.72,3.72,0,0,0-.09-6.48L524,311.92a3.71,3.71,0,0,0-5.47,3.27V389.4a3.71,3.71,0,0,0,5.57,3.21l7.63-4.42a5.06,5.06,0,0,1,5.07,8.75l-7.63,4.42A13.76,13.76,0,0,1,522.19,403.24Z' transform='translate(-44.14 -22.29)' /%3E%3Cpath class='cls-1' d='M75.32,470.86a31.18,31.18,0,1,1,31.18-31.18A31.21,31.21,0,0,1,75.32,470.86Zm0-52.26a21.08,21.08,0,1,0,21.07,21.08A21.11,21.11,0,0,0,75.32,418.6Z' transform='translate(-44.14 -22.29)' /%3E%3Cpath class='cls-1' d='M308.82,185.57a4,4,0,0,1-.49,0,5.05,5.05,0,0,1-4.55-5.51l.27-2.75a5.05,5.05,0,0,1,10.06,1l-.26,2.75A5.07,5.07,0,0,1,308.82,185.57Z' transform='translate(-44.14 -22.29)' /%3E%3Cpath class='cls-1' d='M222.79,315.48a46,46,0,1,1,46-46,5.06,5.06,0,1,1-10.11,0,35.88,35.88,0,1,0-22.52,33.33,5.05,5.05,0,0,1,3.77,9.38A45.67,45.67,0,0,1,222.79,315.48Z' transform='translate(-44.14 -22.29)' /%3E%3Cpath class='cls-1' d='M859.32,458.49a5.06,5.06,0,0,1-1-10,32.06,32.06,0,1,0-30.86-10.63,5.06,5.06,0,1,1-7.7,6.56,42.15,42.15,0,1,1,40.59,14A5.05,5.05,0,0,1,859.32,458.49Z' transform='translate(-44.14 -22.29)' /%3E%3Cpath class='cls-1' d='M830.37,249.51l-.52,0a5.06,5.06,0,0,1-4.51-5.54L827,228a5.05,5.05,0,0,1,10,1L835.4,245A5.06,5.06,0,0,1,830.37,249.51ZM876.49,212a4.53,4.53,0,0,1-.52,0l-16-1.63a5.06,5.06,0,0,1,1-10.06l16,1.64a5.05,5.05,0,0,1-.51,10.08ZM808.77,205a4.61,4.61,0,0,1-.52,0l-15.94-1.63a5.06,5.06,0,1,1,1-10.06l15.94,1.63a5.05,5.05,0,0,1-.51,10.08Zm28.54-23.23a4.53,4.53,0,0,1-.52,0,5.05,5.05,0,0,1-4.52-5.54l1.64-15.95a5.05,5.05,0,0,1,10.05,1l-1.63,15.95A5.06,5.06,0,0,1,837.31,181.79Z' transform='translate(-44.14 -22.29)' /%3E%3Cpath class='cls-1' d='M99.48,305.08a4,4,0,0,1-.49,0,5,5,0,0,1-4.55-5.51l.27-2.75a5.05,5.05,0,1,1,10.06,1l-.27,2.75A5.05,5.05,0,0,1,99.48,305.08Z' transform='translate(-44.14 -22.29)' /%3E%3Cpath class='cls-1' d='M681.06,158.7a4.1,4.1,0,0,1-.49,0,5.05,5.05,0,0,1-4.54-5.52l.26-2.74a5.05,5.05,0,1,1,10.06,1l-.26,2.74A5.06,5.06,0,0,1,681.06,158.7Z' transform='translate(-44.14 -22.29)' /%3E%3Cpath class='cls-1' d='M990.31,510.33a5,5,0,0,1-1.51-.23,5.06,5.06,0,0,1-3.32-6.33l4.76-15.3a5.05,5.05,0,1,1,9.65,3l-4.76,15.31A5.05,5.05,0,0,1,990.31,510.33ZM1043,482.68a5.26,5.26,0,0,1-1.5-.23l-15.31-4.77a5.05,5.05,0,1,1,3-9.65l15.3,4.76a5.06,5.06,0,0,1-1.5,9.89Zm-65-20.23a4.93,4.93,0,0,1-1.5-.23l-15.31-4.76a5.06,5.06,0,0,1,3-9.66l15.31,4.77a5.05,5.05,0,0,1-1.51,9.88Zm32.58-17.12a5.19,5.19,0,0,1-1.5-.22,5.06,5.06,0,0,1-3.33-6.33l4.77-15.31a5.05,5.05,0,1,1,9.65,3l-4.76,15.3A5.06,5.06,0,0,1,1010.53,445.33Z' transform='translate(-44.14 -22.29)' /%3E%3Cpath class='cls-1' d='M269,493.61a5,5,0,0,1-4.23-2.28L256,477.94a5.05,5.05,0,1,1,8.44-5.55l8.81,13.39a5,5,0,0,1-4.21,7.83Zm-58.25-12a5.06,5.06,0,0,1-2.78-9.28l13.39-8.81A5.06,5.06,0,0,1,227,472l-13.39,8.81A5.07,5.07,0,0,1,210.78,481.6Zm56.87-37.42a5.06,5.06,0,0,1-2.79-9.28l13.39-8.81a5.06,5.06,0,0,1,5.56,8.45l-13.39,8.81A5.06,5.06,0,0,1,267.65,444.18Zm-36-7.43a5,5,0,0,1-4.23-2.28l-8.81-13.39a5.05,5.05,0,0,1,8.44-5.56l8.81,13.39a5.05,5.05,0,0,1-4.21,7.84Z' transform='translate(-44.14 -22.29)' /%3E%3Cpath class='cls-1' d='M455.78,181.4A40,40,0,1,1,474,105.69a5.05,5.05,0,1,1-4.6,9,29.61,29.61,0,0,0-13.62-3.27,29.94,29.94,0,1,0,29.67,34,5.05,5.05,0,1,1,10,1.34A40.16,40.16,0,0,1,455.78,181.4Z' transform='translate(-44.14 -22.29)' /%3E%3Cpath class='cls-1' d='M962,303.7a4.18,4.18,0,0,1-.5,0,5.06,5.06,0,0,1-4.54-5.52l.26-2.74a5.06,5.06,0,0,1,10.07,1l-.27,2.75A5,5,0,0,1,962,303.7Z' transform='translate(-44.14 -22.29)' /%3E%3Cpath class='cls-1' d='M63.23,685.84a20.43,20.43,0,0,1,1.85-3.4l14.69-21.77a20.62,20.62,0,0,1,28.6-5.56l27.08,18.27,18.83-27.91a20.61,20.61,0,0,1,28.59-5.56l23.42,15.79a20.61,20.61,0,0,1,5.56,28.6L193,712.21l27.09,18.27a20.6,20.6,0,0,1,5.56,28.59L211,780.85a20.61,20.61,0,0,1-28.6,5.56L155.3,768.14,136.48,796a20.63,20.63,0,0,1-28.6,5.57l-23.41-15.8a20.6,20.6,0,0,1-5.56-28.59l8.06-12a5.05,5.05,0,0,1,8.38,5.65l-8.06,12a10.5,10.5,0,0,0,2.83,14.56l23.41,15.79a10.5,10.5,0,0,0,14.57-2.83l21.65-32.09a5,5,0,0,1,7-1.37L188,778a10.49,10.49,0,0,0,14.56-2.83l14.69-21.78a10.49,10.49,0,0,0-2.83-14.56l-31.28-21.1a5,5,0,0,1-1.36-7l21.64-32.1a10.49,10.49,0,0,0-2.83-14.56l-23.41-15.8a10.51,10.51,0,0,0-14.56,2.83L141,683.22a5.05,5.05,0,0,1-7,1.37l-31.28-21.1a10.51,10.51,0,0,0-14.56,2.83L73.46,688.1a10.48,10.48,0,0,0,2.84,14.56L85.71,709a5.05,5.05,0,1,1-5.65,8.38L70.64,711a20.6,20.6,0,0,1-7.41-25.2Z' transform='translate(-44.14 -22.29)' /%3E%3Cpath class='cls-1' d='M387.8,660.32a31.54,31.54,0,1,1-59.57,9.49,5.05,5.05,0,1,1,10,1.4,21.43,21.43,0,1,0,20-18.45,5.05,5.05,0,1,1-.55-10.09A31.49,31.49,0,0,1,387.8,660.32Z' transform='translate(-44.14 -22.29)' /%3E%3Cpath class='cls-1' d='M486.56,576.28a5.06,5.06,0,0,1-8.51,5.35,21.44,21.44,0,1,0,.65,25.74,5.06,5.06,0,1,1,8.24,5.86,31.54,31.54,0,1,1-.95-37.87A5.2,5.2,0,0,1,486.56,576.28Z' transform='translate(-44.14 -22.29)' /%3E%3Cpath class='cls-1' d='M478.89,672.79a31.6,31.6,0,0,1-5.2,35.26,31.9,31.9,0,0,1-4.61,4.1,5.05,5.05,0,1,1-5.94-8.18,21.46,21.46,0,0,0,1.94-33.07A21.43,21.43,0,0,0,436,702.37a5.05,5.05,0,1,1-6.86,7.42A31.54,31.54,0,0,1,472,663.48,31.82,31.82,0,0,1,478.89,672.79Z' transform='translate(-44.14 -22.29)' /%3E%3Cpath class='cls-1' d='M398.57,568.82a31.54,31.54,0,0,1-56.63,27.8,30.4,30.4,0,0,1-3.2-12.11,5.05,5.05,0,1,1,10.09-.59,21.22,21.22,0,0,0,2.15,8.16l0,.07a21.43,21.43,0,0,0,38.47-18.89l0-.07a21.41,21.41,0,0,0-22.08-11.76,5.06,5.06,0,0,1-1.35-10,31.52,31.52,0,0,1,32.5,17.31Z' transform='translate(-44.14 -22.29)' /%3E%3Cpath class='cls-1' d='M907.24,581.56a41.49,41.49,0,0,1,66.5,19.24,5.05,5.05,0,0,1-9.65,3,32.26,32.26,0,0,0-2-4.9,31.32,31.32,0,1,0-5.7,36.28,5.06,5.06,0,0,1,7.18,7.12,41.72,41.72,0,0,1-10.66,7.76,41.46,41.46,0,0,1-45.68-68.51ZM802.87,670.29a41.45,41.45,0,1,1,25.5,73,5.05,5.05,0,1,1,.33-10.1,31.34,31.34,0,1,0-26.48-16.26,5.06,5.06,0,1,1-8.86,4.87A41.57,41.57,0,0,1,802.87,670.29Z' transform='translate(-44.14 -22.29)' /%3E%3Cpath class='cls-1' d='M114.89,145.41a5.27,5.27,0,0,1-1.51-.23,5.06,5.06,0,0,1-3.32-6.33l4.76-15.31a5.05,5.05,0,1,1,9.65,3l-4.76,15.3A5.05,5.05,0,0,1,114.89,145.41Zm52.64-27.66a4.93,4.93,0,0,1-1.5-.23l-15.31-4.76a5.06,5.06,0,0,1,3-9.66l15.3,4.77a5.05,5.05,0,0,1-1.5,9.88Zm-65-20.22a5.26,5.26,0,0,1-1.5-.23L85.72,92.53a5.05,5.05,0,0,1,3-9.65L104,87.64a5.06,5.06,0,0,1-1.51,9.89Zm32.58-17.12a4.88,4.88,0,0,1-1.5-.23,5.05,5.05,0,0,1-3.33-6.33l4.77-15.3a5.05,5.05,0,1,1,9.65,3l-4.76,15.31A5.08,5.08,0,0,1,135.11,80.41Z' transform='translate(-44.14 -22.29)' /%3E%3Cpath class='cls-1' d='M1066.38,70.51a5.06,5.06,0,0,1-8.52,5.35,21.44,21.44,0,1,0,.65,25.74,5.06,5.06,0,1,1,8.24,5.86,31.54,31.54,0,1,1-1-37.86A5.18,5.18,0,0,1,1066.38,70.51Z' transform='translate(-44.14 -22.29)' /%3E%3Cpath class='cls-1' d='M978.38,63.05a31.54,31.54,0,0,1-56.63,27.8,30.53,30.53,0,0,1-3.2-12.11,5.05,5.05,0,1,1,10.09-.59,21.35,21.35,0,0,0,2.15,8.16l0,.07A21.43,21.43,0,0,0,969.3,67.49l0-.06a21.41,21.41,0,0,0-22.08-11.77,5.06,5.06,0,0,1-1.35-10A31.52,31.52,0,0,1,978.33,63Z' transform='translate(-44.14 -22.29)' /%3E%3Cpath class='cls-1' d='M990.25,771.31l-.49,0a5.07,5.07,0,0,1-4.55-5.52l.27-2.75a5.05,5.05,0,0,1,10.06,1l-.26,2.75A5.07,5.07,0,0,1,990.25,771.31Z' transform='translate(-44.14 -22.29)' /%3E%3Cpath class='cls-1' d='M676.24,564.7A40,40,0,1,1,694.46,489a5.05,5.05,0,1,1-4.6,9,29.61,29.61,0,0,0-13.62-3.27,29.94,29.94,0,1,0,29.67,34,5.05,5.05,0,1,1,10,1.34A40.16,40.16,0,0,1,676.24,564.7Z' transform='translate(-44.14 -22.29)' /%3E%3Cpath class='cls-1' d='M614.1,792.77a4.61,4.61,0,0,1-.52,0,5.05,5.05,0,0,1-4.51-5.55l1.63-15.94a5.06,5.06,0,1,1,10.06,1l-1.64,15.94A5,5,0,0,1,614.1,792.77Zm46.12-37.54a4.41,4.41,0,0,1-.52,0l-16-1.63a5.06,5.06,0,0,1,1-10.06l16,1.63a5.06,5.06,0,0,1-.51,10.09Zm-67.72-6.94a4.53,4.53,0,0,1-.52,0l-16-1.63a5.06,5.06,0,0,1,1-10.06l16,1.64a5.05,5.05,0,0,1-.51,10.08ZM621,725.06l-.52,0a5.06,5.06,0,0,1-4.51-5.54l1.64-16a5.05,5.05,0,1,1,10.05,1l-1.63,15.95A5.06,5.06,0,0,1,621,725.06Z' transform='translate(-44.14 -22.29)' /%3E%3Cpath class='cls-1' d='M401.25,363.31a4.1,4.1,0,0,1-.49,0,5.07,5.07,0,0,1-4.55-5.52l.27-2.75a5.05,5.05,0,1,1,10.06,1l-.26,2.74A5.06,5.06,0,0,1,401.25,363.31Z' transform='translate(-44.14 -22.29)' /%3E%3Cpath class='cls-1' d='M713.25,358.34l-.49,0a4.84,4.84,0,0,1-4.55-5.18l.27-2.58a5,5,0,0,1,5.52-4.27,4.83,4.83,0,0,1,4.54,5.18l-.26,2.58A5,5,0,0,1,713.25,358.34Z' transform='translate(-44.14 -22.29)' /%3E%3Cpath class='cls-1' d='M555.25,521.31l-.49,0a5.05,5.05,0,0,1-4.55-5.51l.27-2.75a5.05,5.05,0,1,1,10.06,1l-.26,2.75A5.07,5.07,0,0,1,555.25,521.31Z' transform='translate(-44.14 -22.29)' /%3E%3Cpath class='cls-1' d='M667.73,40a31.62,31.62,0,0,1-9.8,39.36A5.06,5.06,0,0,1,652,71.16a21,21,0,0,0,3.13-2.78,21.44,21.44,0,1,0-30.28,1.18A5.05,5.05,0,1,1,618,77a31.54,31.54,0,1,1,49.76-37Z' transform='translate(-44.14 -22.29)' /%3E%3C/svg%3E\");\n    background-size: 40%;\n    /* Behind the creative, and never in the way of a click on it. */\n    pointer-events: none;\n    z-index: 0;\n}\n\n.wrap[data-visible=\"true\"] { display: block; }\n\n.mark {\n    position: absolute;\n    inset: 0;\n    background-image: url(\"data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 206.18 235.34'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23e03c2c;%7D.cls-2%7Bfill:%23f8bc19;%7D.cls-3%7Bfill:%23eda925;%7D.cls-4%7Bfill:%23b82b27;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M873.71,372.51l10.15,1.3c9.92,5.54,13.82,13.52,11.49,25-1.94,9.57-2.57,19.4-4,29.09-1.88,13.13-10.11,19.19-23.32,17.34-1.51-.22-3-.71-4.48,0q2.63-19.17,5.27-38.33Q871.24,389.71,873.71,372.51Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-1' d='M720.56,444.56c-12.55,3.7-22.53-1.81-24.92-14.33-2.26-11.93-4.1-24-5.64-36-1.21-9.41,4-15.51,11.76-19.92l10.12-1.63c1.24,7.4,2.52,14.8,3.69,22.22,2.44,15.49,4.74,31,7.31,46.46C723.28,443.76,722.91,444.64,720.56,444.56Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-2' d='M873.78,371.47c1-9.66,3.55-19.23,1.57-29-1.28-29.59-13.43-53.21-38-70.3-22.53-15.66-46.82-18.7-72.17-9.25-32.93,12.27-56.55,46.22-56,83.15v16.22c-1,3.37-2.92,2.71-5.09,1.3,0-4.13,0-8.27-.12-12.41-.06-2.81,1-5.89-3.67-6.7-2.56-.44-1.63-3.74-1.5-5.74,2.38-35.14,19.05-61.73,50-78.11,56.78-30.11,124.67,3.39,136.67,66.73.61,3.2.89,6.46,1.23,9.7.16,1.51.26,3.08-.74,4.4-5,6.61-5.21,12.69-2.09,21.47,1.15,3.23.09,7.26,0,10.92l-10.15-1.3A.82.82,0,0,1,873.78,371.47Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-3' d='M709.19,346c-.56-36.93,23.06-70.88,56-83.15,25.35-9.45,49.64-6.41,72.17,9.25,24.57,17.09,36.72,40.71,38,70.3-4.6-.35-4.54-4-4.93-7.16-5-40.79-38.46-70.44-79.14-70-39.15.37-73.62,32.32-76.64,71.42C714.29,341.08,713,344.06,709.19,346Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-4' d='M720.56,444.56c2.35.08,2.72-.8,2.32-3.19-2.57-15.46-4.87-31-7.31-46.46-1.17-7.42-2.45-14.82-3.69-22.23,0-.83,0-1.66,0-2.49a10.14,10.14,0,0,1,11-3.56c4.43,1.23,4.28,5.37,4.84,9q4.71,30.84,9.64,61.65c.62,3.88,2.09,8.35-2.52,10.31-4,1.72-8.86,3.11-11.85-2.48C722.73,444.66,721.4,444.75,720.56,444.56Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-4' d='M873.71,372.51q-2.44,17.19-4.86,34.4-2.67,19.15-5.27,38.33c-1.9,5.91-6.41,3.94-10.2,3.1s-4.63-4.11-4.16-7.65q4.54-34.44,9.1-68.88c.43-3.3,2.32-5.31,5.41-5.47,4.15-.22,8.35.19,10.06,5.11A.84.84,0,0,0,873.71,372.51Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-3' d='M711.87,370.19c0,.83,0,1.66,0,2.49l-10.12,1.64c.5-3.65-2.75-8.12,2.34-10.77,2.17,1.41,4.14,2.07,5.09-1.3C711.88,364.29,711.47,367.38,711.87,370.19Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-2' d='M759,299.64h1.69l5.18,14.06h-2.13l-3.9-11.34L756,313.7h-2.13Zm-2.79,9.1h7.4v1.87h-7.4Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-2' d='M769.81,309.76a2.27,2.27,0,0,0,.53,1.63,2,2,0,0,0,1.52.58,2.06,2.06,0,0,0,1.49-.51,1.93,1.93,0,0,0,.54-1.46l.13,2.09a2.81,2.81,0,0,1-2.72,1.75,3.17,3.17,0,0,1-2.56-1.06,4.52,4.52,0,0,1-.91-3v-6.1h2Zm4.08-6.1h2v10h-2Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-2' d='M780.15,313.4A3,3,0,0,1,779,312a5.46,5.46,0,0,1-.4-2.21v-2.21a5.69,5.69,0,0,1,.39-2.22,3,3,0,0,1,1.16-1.39,3.34,3.34,0,0,1,1.82-.48,3,3,0,0,1,1.63.46,3.46,3.46,0,0,1,1.2,1.31l-.21,2.05a2.35,2.35,0,0,0-.23-1.1,1.59,1.59,0,0,0-.67-.69,2.32,2.32,0,0,0-1.07-.23,1.88,1.88,0,0,0-1.51.61,2.47,2.47,0,0,0-.54,1.71v2.18a2.43,2.43,0,0,0,.54,1.69,1.91,1.91,0,0,0,1.51.6,2.2,2.2,0,0,0,1.07-.25,1.64,1.64,0,0,0,.67-.71,2.39,2.39,0,0,0,.23-1.11l.14,2.11a2.84,2.84,0,0,1-1,1.25,2.74,2.74,0,0,1-1.68.5A3.59,3.59,0,0,1,780.15,313.4Zm4.4-13.76h2V313.7h-2Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-2' d='M789.52,299.64h2v2h-2Zm0,4h2v10h-2Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-2' d='M796.11,313.33a3.41,3.41,0,0,1-1.42-1.49,5.35,5.35,0,0,1-.49-2.37v-1.63a5.25,5.25,0,0,1,.49-2.34,3.44,3.44,0,0,1,1.42-1.48,5.25,5.25,0,0,1,4.47,0A3.36,3.36,0,0,1,802,305.5a5.12,5.12,0,0,1,.49,2.34v1.66a5.13,5.13,0,0,1-.49,2.35,3.31,3.31,0,0,1-1.41,1.48,5.15,5.15,0,0,1-4.47,0Zm3.83-2a2.66,2.66,0,0,0,.57-1.82v-1.66a2.64,2.64,0,0,0-.57-1.81,2.32,2.32,0,0,0-3.2,0,2.69,2.69,0,0,0-.56,1.81v1.66a2.71,2.71,0,0,0,.56,1.82,2.29,2.29,0,0,0,3.2,0Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-2' d='M814.63,299.64h1.68l5.18,14.06h-2.12l-3.9-11.34-3.9,11.34h-2.12Zm-2.8,9.1h7.4v1.87h-7.4Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-2' d='M823.62,299.64h2V313.7h-2ZM825,311.82h3.18a3.4,3.4,0,0,0,2.41-.8,3,3,0,0,0,.86-2.28V304.6a3,3,0,0,0-.86-2.28,3.36,3.36,0,0,0-2.41-.81H825v-1.87h3.12a6.53,6.53,0,0,1,2.89.59A4.12,4.12,0,0,1,832.8,302a5.51,5.51,0,0,1,.63,2.73v4a5.54,5.54,0,0,1-.63,2.73,4.12,4.12,0,0,1-1.83,1.72,6.61,6.61,0,0,1-2.9.59H825Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-2' d='M758.68,466.49h2v14.06h-2Zm1,6.73h4.49a2.12,2.12,0,0,0,1.13-.3,2,2,0,0,0,.75-.85,3,3,0,0,0,.26-1.27,3,3,0,0,0-.26-1.27,2,2,0,0,0-.75-.86,2.12,2.12,0,0,0-1.13-.3H759.7v-1.88h4.43a4.41,4.41,0,0,1,2.21.54,3.74,3.74,0,0,1,1.49,1.51,5.17,5.17,0,0,1,0,4.52,3.8,3.8,0,0,1-1.49,1.51,4.52,4.52,0,0,1-2.21.53H759.7Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-2' d='M772.79,478a1,1,0,0,0,.16.57.55.55,0,0,0,.45.19h.93v1.88h-1.16a2.18,2.18,0,0,1-1.74-.7,2.86,2.86,0,0,1-.61-2V466.49h2Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-2' d='M776.89,479.93a2.88,2.88,0,0,1-.92-2.34,2.82,2.82,0,0,1,.84-2.23,3.75,3.75,0,0,1,2.55-.75h2.85l.14,1.59h-3a1.69,1.69,0,0,0-1.16.34,1.36,1.36,0,0,0-.38,1,1.29,1.29,0,0,0,.51,1.13,2.59,2.59,0,0,0,1.54.37,4.52,4.52,0,0,0,1.69-.24.79.79,0,0,0,.55-.75l.21,1.41a2.27,2.27,0,0,1-.65.66,2.73,2.73,0,0,1-.88.4,4.87,4.87,0,0,1-1.13.13A4.27,4.27,0,0,1,776.89,479.93Zm5.23-5.74a2.1,2.1,0,0,0-.52-1.53,2,2,0,0,0-1.5-.55,3.86,3.86,0,0,0-1.17.18,3.5,3.5,0,0,0-1,.52l-1.44-1a3.8,3.8,0,0,1,1.5-1.07,5.49,5.49,0,0,1,2.07-.38,4.8,4.8,0,0,1,2.14.44,3,3,0,0,1,1.36,1.27,4.1,4.1,0,0,1,.46,2v6.45h-1.88Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-2' d='M785.64,470.51h2l3.08,8.73-1.09,2.13Zm8.89,0-4.27,12.39a3.05,3.05,0,0,1-.61,1.09,2,2,0,0,1-.93.57,4.41,4.41,0,0,1-1.35.18H787v-1.9h.4a1.52,1.52,0,0,0,.87-.22,1.74,1.74,0,0,0,.57-.76l3.71-11.35Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-2' d='M796.27,466.49h2v2h-2Zm0,4h2v10h-2Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-2' d='M801.24,470.51h2v10h-2Zm6.1,4a2.3,2.3,0,0,0-.56-1.65,2,2,0,0,0-1.54-.58,2.07,2.07,0,0,0-1.5.52,1.91,1.91,0,0,0-.52,1.44l-.21-1.94a3.64,3.64,0,0,1,1.22-1.4,2.93,2.93,0,0,1,1.65-.49,3.09,3.09,0,0,1,2.53,1.07,4.55,4.55,0,0,1,.9,3v6.09h-2Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-2' d='M813.61,480.25a3,3,0,0,1-1.19-1.4,5.46,5.46,0,0,1-.4-2.21v-2.21a5.64,5.64,0,0,1,.39-2.21,3,3,0,0,1,1.16-1.4,3.31,3.31,0,0,1,1.82-.48,3,3,0,0,1,1.63.46,3.44,3.44,0,0,1,1.19,1.31l-.2,2.05a2.41,2.41,0,0,0-.23-1.09,1.54,1.54,0,0,0-.67-.69,2.23,2.23,0,0,0-1.07-.24,1.88,1.88,0,0,0-1.51.61,2.47,2.47,0,0,0-.54,1.71v2.18a2.42,2.42,0,0,0,.54,1.69,1.91,1.91,0,0,0,1.51.6,2.23,2.23,0,0,0,1.07-.25,1.65,1.65,0,0,0,.67-.71,2.53,2.53,0,0,0,.23-1.11l.14,2.12a2.87,2.87,0,0,1-1,1.24,2.75,2.75,0,0,1-1.68.51A3.5,3.5,0,0,1,813.61,480.25Zm0,4a3.23,3.23,0,0,1-1.39-1.18l1.33-1.21a2.79,2.79,0,0,0,.93.82,2.34,2.34,0,0,0,1.12.29,2.36,2.36,0,0,0,1.75-.62,2.39,2.39,0,0,0,.62-1.77v-10h2v9.74a5.12,5.12,0,0,1-.5,2.37,3.41,3.41,0,0,1-1.48,1.5,4.92,4.92,0,0,1-2.33.51A4.68,4.68,0,0,1,813.65,484.21Z' transform='translate(-689.82 -249.4)'/%3E%3Cg transform='rotate(180 50 50)'%3E%3Crect x='33' y='-82.5' width='5' height='40' fill='%234285f4'%3E%3Canimate attributeName='height' calcMode='spline' values='50;75;10;50' times='0;0.33;0.66;1' dur='0.8695652173913042s' keySplines='0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1' repeatCount='indefinite' begin='-0.5797101449275361s'%3E%3C/animate%3E%3C/rect%3E%3Crect x='18' y='-82.5' width='5' height='40' fill='%23ea4335'%3E%3Canimate attributeName='height' calcMode='spline' values='50;75;10;50' times='0;0.33;0.66;1' dur='0.8695652173913042s' keySplines='0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1' repeatCount='indefinite' begin='-0.4347826086956521s'%3E%3C/animate%3E%3C/rect%3E%3Crect x='3' y='-82.5' width='5' height='40' fill='%23fbbc05'%3E%3Canimate attributeName='height' calcMode='spline' values='50;75;10;50' times='0;0.33;0.66;1' dur='0.8695652173913042s' keySplines='0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1' repeatCount='indefinite' begin='0s'%3E%3C/animate%3E%3C/rect%3E%3Crect x='-13' y='-82.5' width='5' height='40' fill='%234285f4'%3E%3Canimate attributeName='height' calcMode='spline' values='50;75;10;50' times='0;0.33;0.66;1' dur='0.8695652173913042s' keySplines='0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1' repeatCount='indefinite' begin='-0.14492753623188404s'%3E%3C/animate%3E%3C/rect%3E%3Crect x='-27' y='-82.5' width='5' height='40' fill='%2334a853'%3E%3Canimate attributeName='height' calcMode='spline' values='50;75;10;50' times='0;0.33;0.66;1' dur='0.8695652173913042s' keySplines='0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1' repeatCount='indefinite' begin='-0.7246376811594203s'%3E%3C/animate%3E%3C/rect%3E%3Crect x='-42' y='-82.5' width='5' height='40' fill='%23ea4335'%3E%3Canimate attributeName='height' calcMode='spline' values='50;75;10;50' times='0;0.33;0.66;1' dur='0.8695652173913042s' keySplines='0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1' repeatCount='indefinite' begin='-0.28985507246376807s'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3C/svg%3E\");\n    background-size: 30%;\n    background-repeat: no-repeat;\n    background-position: center center;\n    filter: drop-shadow(7px 7px 5px rgba(0, 0, 0, 0.7));\n}\n\n.wrap[data-paused=\"true\"] .mark {\n    background-image: url(\"data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 206.18 235.37'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23e03c2c;%7D.cls-2%7Bfill:%23f8bc19;%7D.cls-3%7Bfill:%23eda925;%7D.cls-4%7Bfill:%23b82b27;%7D.cls-5%7Bfill:%23f7bc17;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M873.71,372.51l10.15,1.3c9.92,5.54,13.82,13.52,11.49,25-1.94,9.57-2.57,19.4-4,29.09-1.88,13.13-10.11,19.19-23.32,17.34-1.51-.22-3-.71-4.48,0q2.63-19.17,5.27-38.33Q871.24,389.71,873.71,372.51Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-1' d='M720.56,444.56c-12.55,3.7-22.53-1.81-24.92-14.33-2.26-11.93-4.1-24-5.64-36-1.21-9.41,4-15.51,11.76-19.92l10.12-1.63c1.24,7.4,2.52,14.8,3.69,22.22,2.44,15.49,4.74,31,7.31,46.46C723.28,443.76,722.91,444.64,720.56,444.56Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-2' d='M873.78,371.47c1-9.66,3.55-19.23,1.57-29-1.28-29.59-13.43-53.21-38-70.3-22.53-15.66-46.82-18.7-72.17-9.25-32.93,12.27-56.55,46.22-56,83.15v16.22c-1,3.37-2.92,2.71-5.09,1.3,0-4.13,0-8.27-.12-12.41-.06-2.81,1-5.89-3.67-6.7-2.56-.44-1.63-3.74-1.5-5.74,2.38-35.14,19.05-61.73,50-78.11,56.78-30.11,124.67,3.39,136.67,66.73.61,3.2.89,6.46,1.23,9.7.16,1.51.26,3.08-.74,4.4-5,6.61-5.21,12.69-2.09,21.47,1.15,3.23.09,7.26,0,10.92l-10.15-1.3A.82.82,0,0,1,873.78,371.47Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-3' d='M709.19,346c-.56-36.93,23.06-70.88,56-83.15,25.35-9.45,49.64-6.41,72.17,9.25,24.57,17.09,36.72,40.71,38,70.3-4.6-.35-4.54-4-4.93-7.16-5-40.79-38.46-70.44-79.14-70-39.15.37-73.62,32.32-76.64,71.42C714.29,341.08,713,344.06,709.19,346Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-4' d='M720.56,444.56c2.35.08,2.72-.8,2.32-3.19-2.57-15.46-4.87-31-7.31-46.46-1.17-7.42-2.45-14.82-3.69-22.23,0-.83,0-1.66,0-2.49a10.14,10.14,0,0,1,11-3.56c4.43,1.23,4.28,5.37,4.84,9q4.71,30.84,9.64,61.65c.62,3.88,2.09,8.35-2.52,10.31-4,1.72-8.86,3.11-11.85-2.48C722.73,444.66,721.4,444.75,720.56,444.56Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-4' d='M873.71,372.51q-2.44,17.19-4.86,34.4-2.67,19.15-5.27,38.33c-1.9,5.91-6.41,3.94-10.2,3.1s-4.63-4.11-4.16-7.65q4.54-34.44,9.1-68.88c.43-3.3,2.32-5.31,5.41-5.47,4.15-.22,8.35.19,10.06,5.11A.84.84,0,0,0,873.71,372.51Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-3' d='M711.87,370.19c0,.83,0,1.66,0,2.49l-10.12,1.64c.5-3.65-2.75-8.12,2.34-10.77,2.17,1.41,4.14,2.07,5.09-1.3C711.88,364.29,711.47,367.38,711.87,370.19Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-2' d='M759,299.64h1.69l5.18,14.06h-2.13l-3.9-11.34L756,313.7h-2.13Zm-2.79,9.1h7.4v1.87h-7.4Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-2' d='M769.81,309.76a2.27,2.27,0,0,0,.53,1.63,2,2,0,0,0,1.52.58,2.06,2.06,0,0,0,1.49-.51,1.93,1.93,0,0,0,.54-1.46l.13,2.09a2.81,2.81,0,0,1-2.72,1.75,3.17,3.17,0,0,1-2.56-1.06,4.52,4.52,0,0,1-.91-3v-6.1h2Zm4.08-6.1h2v10h-2Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-2' d='M780.15,313.4A3,3,0,0,1,779,312a5.46,5.46,0,0,1-.4-2.21v-2.21a5.69,5.69,0,0,1,.39-2.22,3,3,0,0,1,1.16-1.39,3.34,3.34,0,0,1,1.82-.48,3,3,0,0,1,1.63.46,3.46,3.46,0,0,1,1.2,1.31l-.21,2.05a2.35,2.35,0,0,0-.23-1.1,1.59,1.59,0,0,0-.67-.69,2.32,2.32,0,0,0-1.07-.23,1.88,1.88,0,0,0-1.51.61,2.47,2.47,0,0,0-.54,1.71v2.18a2.43,2.43,0,0,0,.54,1.69,1.91,1.91,0,0,0,1.51.6,2.2,2.2,0,0,0,1.07-.25,1.64,1.64,0,0,0,.67-.71,2.39,2.39,0,0,0,.23-1.11l.14,2.11a2.84,2.84,0,0,1-1,1.25,2.74,2.74,0,0,1-1.68.5A3.59,3.59,0,0,1,780.15,313.4Zm4.4-13.76h2V313.7h-2Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-2' d='M789.52,299.64h2v2h-2Zm0,4h2v10h-2Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-2' d='M796.11,313.33a3.41,3.41,0,0,1-1.42-1.49,5.35,5.35,0,0,1-.49-2.37v-1.63a5.25,5.25,0,0,1,.49-2.34,3.44,3.44,0,0,1,1.42-1.48,5.25,5.25,0,0,1,4.47,0A3.36,3.36,0,0,1,802,305.5a5.12,5.12,0,0,1,.49,2.34v1.66a5.13,5.13,0,0,1-.49,2.35,3.31,3.31,0,0,1-1.41,1.48,5.15,5.15,0,0,1-4.47,0Zm3.83-2a2.66,2.66,0,0,0,.57-1.82v-1.66a2.64,2.64,0,0,0-.57-1.81,2.32,2.32,0,0,0-3.2,0,2.69,2.69,0,0,0-.56,1.81v1.66a2.71,2.71,0,0,0,.56,1.82,2.29,2.29,0,0,0,3.2,0Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-2' d='M814.63,299.64h1.68l5.18,14.06h-2.12l-3.9-11.34-3.9,11.34h-2.12Zm-2.8,9.1h7.4v1.87h-7.4Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-2' d='M823.62,299.64h2V313.7h-2ZM825,311.82h3.18a3.4,3.4,0,0,0,2.41-.8,3,3,0,0,0,.86-2.28V304.6a3,3,0,0,0-.86-2.28,3.36,3.36,0,0,0-2.41-.81H825v-1.87h3.12a6.53,6.53,0,0,1,2.89.59A4.12,4.12,0,0,1,832.8,302a5.51,5.51,0,0,1,.63,2.73v4a5.54,5.54,0,0,1-.63,2.73,4.12,4.12,0,0,1-1.83,1.72,6.61,6.61,0,0,1-2.9.59H825Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-5' d='M761.41,470.49h2V484.6h-2Zm1,6.76h4.51a2.1,2.1,0,0,0,1.13-.3,2,2,0,0,0,.75-.86,2.86,2.86,0,0,0,.27-1.27,2.9,2.9,0,0,0-.27-1.28,2,2,0,0,0-1.88-1.16h-4.51v-1.89h4.45a4.45,4.45,0,0,1,2.22.54,3.82,3.82,0,0,1,1.49,1.52,5.13,5.13,0,0,1,0,4.54,3.8,3.8,0,0,1-1.49,1.51,4.55,4.55,0,0,1-2.22.53h-4.45Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-5' d='M772.15,484a3.42,3.42,0,0,1-.08-4.58,3.75,3.75,0,0,1,2.55-.75h2.87l.13,1.59h-3a1.71,1.71,0,0,0-1.16.35,1.36,1.36,0,0,0-.38,1.05,1.32,1.32,0,0,0,.51,1.14,2.7,2.7,0,0,0,1.55.37,4.48,4.48,0,0,0,1.69-.25.8.8,0,0,0,.56-.75l.2,1.41a2.28,2.28,0,0,1-.64.67,2.57,2.57,0,0,1-.89.39,4.45,4.45,0,0,1-1.14.14A4.21,4.21,0,0,1,772.15,484Zm5.25-5.75a2.13,2.13,0,0,0-.53-1.54,2,2,0,0,0-1.5-.55,3.69,3.69,0,0,0-1.18.19,3.48,3.48,0,0,0-1,.51l-1.45-1a3.74,3.74,0,0,1,1.51-1.07,5.39,5.39,0,0,1,2.08-.39,4.74,4.74,0,0,1,2.15.45,3,3,0,0,1,1.35,1.28,4.1,4.1,0,0,1,.47,2v6.47H777.4Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-5' d='M782.88,480.65a2.31,2.31,0,0,0,.53,1.64,2,2,0,0,0,1.52.57,2.11,2.11,0,0,0,1.51-.51,2,2,0,0,0,.53-1.47l.13,2.11a2.84,2.84,0,0,1-2.72,1.76,3.2,3.2,0,0,1-2.58-1.08,4.55,4.55,0,0,1-.9-3v-6.12h2Zm4.09-6.12h2V484.6h-2Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-5' d='M792.44,484.57a6.32,6.32,0,0,1-1.46-.52,6,6,0,0,1-1.25-.88l1.17-1.44a7.13,7.13,0,0,0,1.62.93,4.37,4.37,0,0,0,1.6.31,3.45,3.45,0,0,0,1.76-.36,1.21,1.21,0,0,0,.58-1.09.83.83,0,0,0-.32-.73,1.89,1.89,0,0,0-.79-.33c-.32,0-.77-.1-1.34-.15h-.17l-.16,0h-.16a7.83,7.83,0,0,1-1.66-.28,2.32,2.32,0,0,1-1.13-.78,2.62,2.62,0,0,1-.45-1.64,3.35,3.35,0,0,1,.44-1.78,2.66,2.66,0,0,1,1.3-1.06,5.67,5.67,0,0,1,2.16-.36,7.2,7.2,0,0,1,1.5.15A6.74,6.74,0,0,1,797,475a6.15,6.15,0,0,1,1.26.73l-1.2,1.44a6.61,6.61,0,0,0-1.49-.73,4.52,4.52,0,0,0-1.43-.24,2.7,2.7,0,0,0-1.51.34,1.17,1.17,0,0,0-.5,1,.7.7,0,0,0,.28.61,1.67,1.67,0,0,0,.72.27c.3.05.71.08,1.25.12h.36a8.31,8.31,0,0,1,1.8.28,2.41,2.41,0,0,1,1.25.84,2.85,2.85,0,0,1,.51,1.83,3.2,3.2,0,0,1-.47,1.79,2.81,2.81,0,0,1-1.4,1.08,6.64,6.64,0,0,1-2.35.36A7.46,7.46,0,0,1,792.44,484.57Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-5' d='M801.2,484.22a3.51,3.51,0,0,1-1.51-1.54,5.38,5.38,0,0,1-.51-2.45V479.1a5.8,5.8,0,0,1,.5-2.55,3.5,3.5,0,0,1,1.45-1.61,4.44,4.44,0,0,1,2.29-.56,3.64,3.64,0,0,1,2.15.64,3.89,3.89,0,0,1,1.36,1.82,7.65,7.65,0,0,1,.47,2.86v.66h-6.79v-1.59h4.91a3.4,3.4,0,0,0-.64-1.92,1.78,1.78,0,0,0-1.46-.68,2.15,2.15,0,0,0-1.75.74,3.15,3.15,0,0,0-.61,2.08v1.28a2.6,2.6,0,0,0,.66,1.92,2.49,2.49,0,0,0,1.87.67,3.12,3.12,0,0,0,1.19-.24,3.38,3.38,0,0,0,1.06-.68l1.3,1.3a5.46,5.46,0,0,1-1.68,1.11,4.8,4.8,0,0,1-1.87.4A5.05,5.05,0,0,1,801.2,484.22Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-5' d='M810,484.29a3.05,3.05,0,0,1-1.19-1.4,5.46,5.46,0,0,1-.4-2.21v-2.22a5.65,5.65,0,0,1,.39-2.22,3.06,3.06,0,0,1,1.16-1.4,3.37,3.37,0,0,1,1.83-.48,3,3,0,0,1,1.64.46,3.54,3.54,0,0,1,1.2,1.31l-.21,2.06a2.48,2.48,0,0,0-.23-1.1,1.62,1.62,0,0,0-.68-.69,2.2,2.2,0,0,0-1.07-.24,1.92,1.92,0,0,0-1.52.61,2.56,2.56,0,0,0-.53,1.72v2.19a2.46,2.46,0,0,0,.53,1.69,1.94,1.94,0,0,0,1.52.6,2.09,2.09,0,0,0,1.07-.25,1.61,1.61,0,0,0,.68-.71,2.54,2.54,0,0,0,.23-1.12l.14,2.13a2.85,2.85,0,0,1-1,1.25,2.7,2.7,0,0,1-1.68.5A3.54,3.54,0,0,1,810,484.29Zm4.42-13.8h2V484.6h-2Z' transform='translate(-689.82 -249.4)'/%3E%3Cg transform='rotate(180 50 50)'%3E%3Crect x='33' y='-82.5' width='5' height='40' fill='%234285f4'%3E%3C/rect%3E%3Crect x='18' y='-82.5' width='5' height='40' fill='%23ea4335'%3E%3C/rect%3E%3Crect x='3' y='-82.5' width='5' height='40' fill='%23fbbc05'%3E%3C/rect%3E%3Crect x='-13' y='-82.5' width='5' height='40' fill='%234285f4'%3E%3C/rect%3E%3Crect x='-27' y='-82.5' width='5' height='40' fill='%2334a853'%3E%3C/rect%3E%3Crect x='-42' y='-82.5' width='5' height='40' fill='%23ea4335'%3E%3C/rect%3E%3C/g%3E%3C/svg%3E\");\n}\n\n@media (max-width: 767px) {\n    .wrap { background-size: 70%; }\n    .mark { background-size: 60%; }\n}\n\n/*\n * A player who has asked for less motion still gets the mark; it is the equaliser that\n * stops. The paused drawing is exactly that: the same artwork with its animate elements\n * removed, so the preference is served by the picture v6 had already drawn.\n */\n@media (prefers-reduced-motion: reduce) {\n    .mark { background-image: url(\"data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 206.18 235.37'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23e03c2c;%7D.cls-2%7Bfill:%23f8bc19;%7D.cls-3%7Bfill:%23eda925;%7D.cls-4%7Bfill:%23b82b27;%7D.cls-5%7Bfill:%23f7bc17;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M873.71,372.51l10.15,1.3c9.92,5.54,13.82,13.52,11.49,25-1.94,9.57-2.57,19.4-4,29.09-1.88,13.13-10.11,19.19-23.32,17.34-1.51-.22-3-.71-4.48,0q2.63-19.17,5.27-38.33Q871.24,389.71,873.71,372.51Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-1' d='M720.56,444.56c-12.55,3.7-22.53-1.81-24.92-14.33-2.26-11.93-4.1-24-5.64-36-1.21-9.41,4-15.51,11.76-19.92l10.12-1.63c1.24,7.4,2.52,14.8,3.69,22.22,2.44,15.49,4.74,31,7.31,46.46C723.28,443.76,722.91,444.64,720.56,444.56Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-2' d='M873.78,371.47c1-9.66,3.55-19.23,1.57-29-1.28-29.59-13.43-53.21-38-70.3-22.53-15.66-46.82-18.7-72.17-9.25-32.93,12.27-56.55,46.22-56,83.15v16.22c-1,3.37-2.92,2.71-5.09,1.3,0-4.13,0-8.27-.12-12.41-.06-2.81,1-5.89-3.67-6.7-2.56-.44-1.63-3.74-1.5-5.74,2.38-35.14,19.05-61.73,50-78.11,56.78-30.11,124.67,3.39,136.67,66.73.61,3.2.89,6.46,1.23,9.7.16,1.51.26,3.08-.74,4.4-5,6.61-5.21,12.69-2.09,21.47,1.15,3.23.09,7.26,0,10.92l-10.15-1.3A.82.82,0,0,1,873.78,371.47Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-3' d='M709.19,346c-.56-36.93,23.06-70.88,56-83.15,25.35-9.45,49.64-6.41,72.17,9.25,24.57,17.09,36.72,40.71,38,70.3-4.6-.35-4.54-4-4.93-7.16-5-40.79-38.46-70.44-79.14-70-39.15.37-73.62,32.32-76.64,71.42C714.29,341.08,713,344.06,709.19,346Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-4' d='M720.56,444.56c2.35.08,2.72-.8,2.32-3.19-2.57-15.46-4.87-31-7.31-46.46-1.17-7.42-2.45-14.82-3.69-22.23,0-.83,0-1.66,0-2.49a10.14,10.14,0,0,1,11-3.56c4.43,1.23,4.28,5.37,4.84,9q4.71,30.84,9.64,61.65c.62,3.88,2.09,8.35-2.52,10.31-4,1.72-8.86,3.11-11.85-2.48C722.73,444.66,721.4,444.75,720.56,444.56Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-4' d='M873.71,372.51q-2.44,17.19-4.86,34.4-2.67,19.15-5.27,38.33c-1.9,5.91-6.41,3.94-10.2,3.1s-4.63-4.11-4.16-7.65q4.54-34.44,9.1-68.88c.43-3.3,2.32-5.31,5.41-5.47,4.15-.22,8.35.19,10.06,5.11A.84.84,0,0,0,873.71,372.51Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-3' d='M711.87,370.19c0,.83,0,1.66,0,2.49l-10.12,1.64c.5-3.65-2.75-8.12,2.34-10.77,2.17,1.41,4.14,2.07,5.09-1.3C711.88,364.29,711.47,367.38,711.87,370.19Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-2' d='M759,299.64h1.69l5.18,14.06h-2.13l-3.9-11.34L756,313.7h-2.13Zm-2.79,9.1h7.4v1.87h-7.4Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-2' d='M769.81,309.76a2.27,2.27,0,0,0,.53,1.63,2,2,0,0,0,1.52.58,2.06,2.06,0,0,0,1.49-.51,1.93,1.93,0,0,0,.54-1.46l.13,2.09a2.81,2.81,0,0,1-2.72,1.75,3.17,3.17,0,0,1-2.56-1.06,4.52,4.52,0,0,1-.91-3v-6.1h2Zm4.08-6.1h2v10h-2Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-2' d='M780.15,313.4A3,3,0,0,1,779,312a5.46,5.46,0,0,1-.4-2.21v-2.21a5.69,5.69,0,0,1,.39-2.22,3,3,0,0,1,1.16-1.39,3.34,3.34,0,0,1,1.82-.48,3,3,0,0,1,1.63.46,3.46,3.46,0,0,1,1.2,1.31l-.21,2.05a2.35,2.35,0,0,0-.23-1.1,1.59,1.59,0,0,0-.67-.69,2.32,2.32,0,0,0-1.07-.23,1.88,1.88,0,0,0-1.51.61,2.47,2.47,0,0,0-.54,1.71v2.18a2.43,2.43,0,0,0,.54,1.69,1.91,1.91,0,0,0,1.51.6,2.2,2.2,0,0,0,1.07-.25,1.64,1.64,0,0,0,.67-.71,2.39,2.39,0,0,0,.23-1.11l.14,2.11a2.84,2.84,0,0,1-1,1.25,2.74,2.74,0,0,1-1.68.5A3.59,3.59,0,0,1,780.15,313.4Zm4.4-13.76h2V313.7h-2Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-2' d='M789.52,299.64h2v2h-2Zm0,4h2v10h-2Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-2' d='M796.11,313.33a3.41,3.41,0,0,1-1.42-1.49,5.35,5.35,0,0,1-.49-2.37v-1.63a5.25,5.25,0,0,1,.49-2.34,3.44,3.44,0,0,1,1.42-1.48,5.25,5.25,0,0,1,4.47,0A3.36,3.36,0,0,1,802,305.5a5.12,5.12,0,0,1,.49,2.34v1.66a5.13,5.13,0,0,1-.49,2.35,3.31,3.31,0,0,1-1.41,1.48,5.15,5.15,0,0,1-4.47,0Zm3.83-2a2.66,2.66,0,0,0,.57-1.82v-1.66a2.64,2.64,0,0,0-.57-1.81,2.32,2.32,0,0,0-3.2,0,2.69,2.69,0,0,0-.56,1.81v1.66a2.71,2.71,0,0,0,.56,1.82,2.29,2.29,0,0,0,3.2,0Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-2' d='M814.63,299.64h1.68l5.18,14.06h-2.12l-3.9-11.34-3.9,11.34h-2.12Zm-2.8,9.1h7.4v1.87h-7.4Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-2' d='M823.62,299.64h2V313.7h-2ZM825,311.82h3.18a3.4,3.4,0,0,0,2.41-.8,3,3,0,0,0,.86-2.28V304.6a3,3,0,0,0-.86-2.28,3.36,3.36,0,0,0-2.41-.81H825v-1.87h3.12a6.53,6.53,0,0,1,2.89.59A4.12,4.12,0,0,1,832.8,302a5.51,5.51,0,0,1,.63,2.73v4a5.54,5.54,0,0,1-.63,2.73,4.12,4.12,0,0,1-1.83,1.72,6.61,6.61,0,0,1-2.9.59H825Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-5' d='M761.41,470.49h2V484.6h-2Zm1,6.76h4.51a2.1,2.1,0,0,0,1.13-.3,2,2,0,0,0,.75-.86,2.86,2.86,0,0,0,.27-1.27,2.9,2.9,0,0,0-.27-1.28,2,2,0,0,0-1.88-1.16h-4.51v-1.89h4.45a4.45,4.45,0,0,1,2.22.54,3.82,3.82,0,0,1,1.49,1.52,5.13,5.13,0,0,1,0,4.54,3.8,3.8,0,0,1-1.49,1.51,4.55,4.55,0,0,1-2.22.53h-4.45Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-5' d='M772.15,484a3.42,3.42,0,0,1-.08-4.58,3.75,3.75,0,0,1,2.55-.75h2.87l.13,1.59h-3a1.71,1.71,0,0,0-1.16.35,1.36,1.36,0,0,0-.38,1.05,1.32,1.32,0,0,0,.51,1.14,2.7,2.7,0,0,0,1.55.37,4.48,4.48,0,0,0,1.69-.25.8.8,0,0,0,.56-.75l.2,1.41a2.28,2.28,0,0,1-.64.67,2.57,2.57,0,0,1-.89.39,4.45,4.45,0,0,1-1.14.14A4.21,4.21,0,0,1,772.15,484Zm5.25-5.75a2.13,2.13,0,0,0-.53-1.54,2,2,0,0,0-1.5-.55,3.69,3.69,0,0,0-1.18.19,3.48,3.48,0,0,0-1,.51l-1.45-1a3.74,3.74,0,0,1,1.51-1.07,5.39,5.39,0,0,1,2.08-.39,4.74,4.74,0,0,1,2.15.45,3,3,0,0,1,1.35,1.28,4.1,4.1,0,0,1,.47,2v6.47H777.4Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-5' d='M782.88,480.65a2.31,2.31,0,0,0,.53,1.64,2,2,0,0,0,1.52.57,2.11,2.11,0,0,0,1.51-.51,2,2,0,0,0,.53-1.47l.13,2.11a2.84,2.84,0,0,1-2.72,1.76,3.2,3.2,0,0,1-2.58-1.08,4.55,4.55,0,0,1-.9-3v-6.12h2Zm4.09-6.12h2V484.6h-2Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-5' d='M792.44,484.57a6.32,6.32,0,0,1-1.46-.52,6,6,0,0,1-1.25-.88l1.17-1.44a7.13,7.13,0,0,0,1.62.93,4.37,4.37,0,0,0,1.6.31,3.45,3.45,0,0,0,1.76-.36,1.21,1.21,0,0,0,.58-1.09.83.83,0,0,0-.32-.73,1.89,1.89,0,0,0-.79-.33c-.32,0-.77-.1-1.34-.15h-.17l-.16,0h-.16a7.83,7.83,0,0,1-1.66-.28,2.32,2.32,0,0,1-1.13-.78,2.62,2.62,0,0,1-.45-1.64,3.35,3.35,0,0,1,.44-1.78,2.66,2.66,0,0,1,1.3-1.06,5.67,5.67,0,0,1,2.16-.36,7.2,7.2,0,0,1,1.5.15A6.74,6.74,0,0,1,797,475a6.15,6.15,0,0,1,1.26.73l-1.2,1.44a6.61,6.61,0,0,0-1.49-.73,4.52,4.52,0,0,0-1.43-.24,2.7,2.7,0,0,0-1.51.34,1.17,1.17,0,0,0-.5,1,.7.7,0,0,0,.28.61,1.67,1.67,0,0,0,.72.27c.3.05.71.08,1.25.12h.36a8.31,8.31,0,0,1,1.8.28,2.41,2.41,0,0,1,1.25.84,2.85,2.85,0,0,1,.51,1.83,3.2,3.2,0,0,1-.47,1.79,2.81,2.81,0,0,1-1.4,1.08,6.64,6.64,0,0,1-2.35.36A7.46,7.46,0,0,1,792.44,484.57Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-5' d='M801.2,484.22a3.51,3.51,0,0,1-1.51-1.54,5.38,5.38,0,0,1-.51-2.45V479.1a5.8,5.8,0,0,1,.5-2.55,3.5,3.5,0,0,1,1.45-1.61,4.44,4.44,0,0,1,2.29-.56,3.64,3.64,0,0,1,2.15.64,3.89,3.89,0,0,1,1.36,1.82,7.65,7.65,0,0,1,.47,2.86v.66h-6.79v-1.59h4.91a3.4,3.4,0,0,0-.64-1.92,1.78,1.78,0,0,0-1.46-.68,2.15,2.15,0,0,0-1.75.74,3.15,3.15,0,0,0-.61,2.08v1.28a2.6,2.6,0,0,0,.66,1.92,2.49,2.49,0,0,0,1.87.67,3.12,3.12,0,0,0,1.19-.24,3.38,3.38,0,0,0,1.06-.68l1.3,1.3a5.46,5.46,0,0,1-1.68,1.11,4.8,4.8,0,0,1-1.87.4A5.05,5.05,0,0,1,801.2,484.22Z' transform='translate(-689.82 -249.4)'/%3E%3Cpath class='cls-5' d='M810,484.29a3.05,3.05,0,0,1-1.19-1.4,5.46,5.46,0,0,1-.4-2.21v-2.22a5.65,5.65,0,0,1,.39-2.22,3.06,3.06,0,0,1,1.16-1.4,3.37,3.37,0,0,1,1.83-.48,3,3,0,0,1,1.64.46,3.54,3.54,0,0,1,1.2,1.31l-.21,2.06a2.48,2.48,0,0,0-.23-1.1,1.62,1.62,0,0,0-.68-.69,2.2,2.2,0,0,0-1.07-.24,1.92,1.92,0,0,0-1.52.61,2.56,2.56,0,0,0-.53,1.72v2.19a2.46,2.46,0,0,0,.53,1.69,1.94,1.94,0,0,0,1.52.6,2.09,2.09,0,0,0,1.07-.25,1.61,1.61,0,0,0,.68-.71,2.54,2.54,0,0,0,.23-1.12l.14,2.13a2.85,2.85,0,0,1-1,1.25,2.7,2.7,0,0,1-1.68.5A3.54,3.54,0,0,1,810,484.29Zm4.42-13.8h2V484.6h-2Z' transform='translate(-689.82 -249.4)'/%3E%3Cg transform='rotate(180 50 50)'%3E%3Crect x='33' y='-82.5' width='5' height='40' fill='%234285f4'%3E%3C/rect%3E%3Crect x='18' y='-82.5' width='5' height='40' fill='%23ea4335'%3E%3C/rect%3E%3Crect x='3' y='-82.5' width='5' height='40' fill='%23fbbc05'%3E%3C/rect%3E%3Crect x='-13' y='-82.5' width='5' height='40' fill='%234285f4'%3E%3C/rect%3E%3Crect x='-27' y='-82.5' width='5' height='40' fill='%2334a853'%3E%3C/rect%3E%3Crect x='-42' y='-82.5' width='5' height='40' fill='%23ea4335'%3E%3C/rect%3E%3C/g%3E%3C/svg%3E\"); }\n}\n";
            var f = b.createElement("div");
            f.className = "wrap";
            f.setAttribute("data-visible", "false");
            f.setAttribute("data-paused", "false");
            b = b.createElement("div");
            b.className = "mark";
            f.append(b);
            d.append(e, f);
            return {
                show() {
                    f.setAttribute("data-visible", "true")
                },
                aa() {
                    f.setAttribute("data-visible", "false");
                    f.setAttribute("data-paused", "false")
                },
                jc(g) {
                    f.setAttribute("data-paused", g ? "true" : "false")
                },
                destroy() {
                    f.remove();
                    e.remove();
                    a.host.remove()
                }
            }
        }
        function Vm(a, b) {
            var c, d = (c = a.host.shadowRoot) != null ? c : a.host.attachShadow({
                mode: "open"
            });
            d.replaceChildren();
            var e = b.createElement("style");
            e.textContent = '\n:host { all: initial; }\n\n.wrap {\n    position: absolute;\n    inset: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    gap: 16px;\n    /*\n     * Lighter under the spinner, deeper at the edges, so the overlay has a centre instead\n     * of being a sheet of black. The middle stops short of full opacity deliberately \u2014 the\n     * game stays faintly visible, which reads as "paused" rather than "gone".\n     */\n    background:\n        radial-gradient(ellipse 110% 95% at 50% 45%,\n            rgba(24, 24, 30, 0.66) 0%,\n            rgba(12, 12, 16, 0.86) 50%,\n            rgba(3, 3, 5, 0.95) 100%);\n    color: #fff;\n    font: 500 15px/1.4 system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;\n    text-align: center;\n    padding: 16px;\n    box-sizing: border-box;\n    z-index: 2147482000;\n\n    /*\n     * Faded rather than switched.\n     *\n     * This was `display: none` toggled to `flex`, which cannot transition \u2014 the overlay\n     * arrived in one frame, and a hard cut is most of what made it feel cheap. `visibility`\n     * carries the hiding that `display` used to, so nothing is hit-testable or read by a\n     * screen reader while it is down, and the box still costs no layout: it is\n     * `position: absolute; inset: 0`.\n     *\n     * The attribute is unchanged, which matters \u2014 the parity checks read `data-visible`,\n     * not the computed display.\n     */\n    opacity: 0;\n    visibility: hidden;\n    pointer-events: none;\n    transition: opacity 240ms ease, visibility 0s linear 240ms;\n}\n\n.wrap[data-visible="true"] {\n    opacity: 1;\n    visibility: visible;\n    pointer-events: auto;\n    transition: opacity 240ms ease, visibility 0s;\n}\n\n/* Holds the two arcs and the glow in one stacking context, so the label spacing is theirs. */\n.spinner {\n    position: relative;\n    width: 42px;\n    height: 42px;\n    flex: none;\n}\n\n/*\n * The glow. Behind both arcs, breathing slowly enough that it is felt rather than watched.\n */\n.spinner::before {\n    content: "";\n    position: absolute;\n    inset: -40%;\n    border-radius: 50%;\n    background: radial-gradient(circle,\n        rgba(255, 255, 255, 0.20) 0%,\n        rgba(255, 255, 255, 0.07) 45%,\n        rgba(255, 255, 255, 0) 70%);\n    animation: wgGlow 2s ease-in-out infinite;\n}\n\n/*\n * A track, and one arc travelling on it.\n *\n * Two concentric arcs turning against each other was busier than it needed to be at 42px \u2014\n * the second one read as clutter rather than as motion. One ring carries the movement, and\n * a dim complete circle underneath gives it something to travel *along*: the eye is told\n * where the path goes, so a quarter-turn of white reads as progress around a whole rather\n * than as a fragment floating on its own.\n *\n * Both circles share a radius. They are the same ring, drawn twice \u2014 once whole and faint,\n * once partial and bright \u2014 which is why the bright one can never drift off the dim one.\n *\n * **SVG rather than a bordered box.** A border arc is a rectangle\'s edge: its ends are cut\n * square, and its length is whichever quarter-turns the border sides happen to cover. A\n * stroked circle can have `stroke-linecap: round`, which is most of the difference between\n * "a spinner" and "the default spinner", and its length is `stroke-dasharray` \u2014 a number,\n * so it can be animated. The head therefore breathes as it turns: it draws out and pulls\n * back on 1.9s against a 1.4s rotation, two periods that do not divide into each other, so\n * the pair never repeats the same picture while anyone is looking at it.\n */\n.rings {\n    position: absolute;\n    inset: 0;\n    width: 100%;\n    height: 100%;\n    overflow: visible;\n}\n\n.arc {\n    fill: none;\n    stroke-linecap: round;\n    /* The geometry box is the circle itself, so 50% is its centre whatever the stroke does. */\n    transform-box: fill-box;\n    transform-origin: 50% 50%;\n}\n\n/* The path, whole and dim. Static: a track that moved would not be a track. */\n.arc--track {\n    stroke: rgba(255, 255, 255, 0.16);\n    stroke-width: 2.5;\n}\n\n.arc--head {\n    stroke: rgba(255, 255, 255, 0.95);\n    stroke-width: 2.5;\n    /* Circumference is 2\u03c0r \u2248 119.4; the gap is oversized so only one arc is ever drawn. */\n    stroke-dasharray: 30 200;\n    animation:\n        wgSpin 1.4s linear infinite,\n        wgDraw 1.9s ease-in-out infinite;\n}\n\n.label {\n    letter-spacing: 0.04em;\n    font-size: 13px;\n    opacity: 0.85;\n}\n\n.label:empty { display: none; }\n\n.countdown {\n    font-size: 30px;\n    font-weight: 700;\n    line-height: 1;\n    font-variant-numeric: tabular-nums;\n}\n\n.countdown:empty { display: none; }\n\n@keyframes wgSpin { to { transform: rotate(360deg); } }\n\n/*\n * The arc drawing itself out and pulling back in.\n *\n * The offset moves with the length so the arc grows from its leading end rather than\n * stretching symmetrically about its middle \u2014 the difference between something being drawn\n * and something being scaled.\n */\n@keyframes wgDraw {\n    0%   { stroke-dasharray: 14 200; stroke-dashoffset: 0; }\n    50%  { stroke-dasharray: 76 200; stroke-dashoffset: -26; }\n    100% { stroke-dasharray: 14 200; stroke-dashoffset: -119; }\n}\n\n@keyframes wgGlow {\n    0%, 100% { opacity: 0.45; transform: scale(0.94); }\n    50%      { opacity: 1;    transform: scale(1.06); }\n}\n\n/*\n * Still, and deliberately so.\n *\n * `animation: none` on a partial ring was leaving it frozen at whatever angle it had\n * reached \u2014 a broken-looking fragment rather than a resting state. Under reduced motion the\n * arcs become one complete, even ring and the glow holds at a fixed opacity, so what the\n * player sees is a finished shape instead of a stopped one.\n */\n@media (prefers-reduced-motion: reduce) {\n    .wrap { transition: none; }\n    .spinner::before { animation: none; opacity: 0.6; transform: none; }\n    /* A dash pattern of "none" closes the gap, so the head becomes the whole circle and\n       settles exactly onto the track it was travelling \u2014 one finished ring, not a fragment. */\n    .arc--head { animation: none; stroke-dasharray: none; stroke-dashoffset: 0;\n                 stroke: rgba(255, 255, 255, 0.55); }\n}\n';
            var f = b.createElement("div");
            f.className = "wrap";
            c = Wm(b);
            var g = b.createElement("span");
            g.className = "label";
            var h = b.createElement("span");
            h.className = "countdown";
            d.append(e, f);
            var l = a.ef === void 0 ? null : Xm(a.ef, b);
            l === null ? f.append(c, g, h) : f.append(c);
            var m = l != null ? l : {
                wrap: f,
                label: g,
                X: h
            };
            return {
                show(t="", w=0) {
                    a.suppressed || (w = Number.parseInt(String(w), 10),
                    t = Object.freeze({
                        text: t.trim() === "" ? "Game will resume momentarily ..." : t,
                        X: Number.isFinite(w) && w > 0 ? w : null
                    }),
                    m.label.textContent = t.text,
                    m.X.textContent = t.X === null ? "" : String(t.X),
                    m.wrap.setAttribute("data-visible", "true"),
                    l !== null && f.setAttribute("data-visible", "false"))
                },
                Lj() {
                    a.suppressed || (m.label.textContent = "",
                    m.X.textContent = "",
                    l !== null && l.wrap.setAttribute("data-visible", "false"),
                    f.setAttribute("data-visible", "true"))
                },
                aa() {
                    f.setAttribute("data-visible", "false");
                    m.wrap.setAttribute("data-visible", "false");
                    m.label.textContent = "";
                    m.X.textContent = ""
                },
                destroy() {
                    f.remove();
                    e.remove();
                    a.host.remove();
                    l == null || l.destroy()
                }
            }
        }
        function Wm(a) {
            var b = a.createElement("div");
            b.className = "spinner";
            var c = a.createElementNS("http://www.w3.org/2000/svg", "svg");
            c.setAttribute("viewBox", "0 0 44 44");
            c.setAttribute("class", "rings");
            c.setAttribute("aria-hidden", "true");
            c.append(wj(a, "arc arc--track", 19), wj(a, "arc arc--head", 19));
            b.append(c);
            return b
        }
        function wj(a, b, c) {
            a = a.createElementNS("http://www.w3.org/2000/svg", "circle");
            a.setAttribute("class", b);
            a.setAttribute("cx", "22");
            a.setAttribute("cy", "22");
            a.setAttribute("r", String(c));
            return a
        }
        function Xm(a, b) {
            var c, d = (c = a.shadowRoot) != null ? c : a.attachShadow({
                mode: "open"
            });
            d.replaceChildren();
            c = b.createElement("style");
            c.textContent = '\n:host { all: initial; }\n\n.wrap {\n    position: absolute;\n    inset: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    gap: 16px;\n    /*\n     * Lighter under the spinner, deeper at the edges, so the overlay has a centre instead\n     * of being a sheet of black. The middle stops short of full opacity deliberately \u2014 the\n     * game stays faintly visible, which reads as "paused" rather than "gone".\n     */\n    background:\n        radial-gradient(ellipse 110% 95% at 50% 45%,\n            rgba(24, 24, 30, 0.66) 0%,\n            rgba(12, 12, 16, 0.86) 50%,\n            rgba(3, 3, 5, 0.95) 100%);\n    color: #fff;\n    font: 500 15px/1.4 system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;\n    text-align: center;\n    padding: 16px;\n    box-sizing: border-box;\n    z-index: 2147482000;\n\n    /*\n     * Faded rather than switched.\n     *\n     * This was `display: none` toggled to `flex`, which cannot transition \u2014 the overlay\n     * arrived in one frame, and a hard cut is most of what made it feel cheap. `visibility`\n     * carries the hiding that `display` used to, so nothing is hit-testable or read by a\n     * screen reader while it is down, and the box still costs no layout: it is\n     * `position: absolute; inset: 0`.\n     *\n     * The attribute is unchanged, which matters \u2014 the parity checks read `data-visible`,\n     * not the computed display.\n     */\n    opacity: 0;\n    visibility: hidden;\n    pointer-events: none;\n    transition: opacity 240ms ease, visibility 0s linear 240ms;\n}\n\n.wrap[data-visible="true"] {\n    opacity: 1;\n    visibility: visible;\n    pointer-events: auto;\n    transition: opacity 240ms ease, visibility 0s;\n}\n\n/* Holds the two arcs and the glow in one stacking context, so the label spacing is theirs. */\n.spinner {\n    position: relative;\n    width: 42px;\n    height: 42px;\n    flex: none;\n}\n\n/*\n * The glow. Behind both arcs, breathing slowly enough that it is felt rather than watched.\n */\n.spinner::before {\n    content: "";\n    position: absolute;\n    inset: -40%;\n    border-radius: 50%;\n    background: radial-gradient(circle,\n        rgba(255, 255, 255, 0.20) 0%,\n        rgba(255, 255, 255, 0.07) 45%,\n        rgba(255, 255, 255, 0) 70%);\n    animation: wgGlow 2s ease-in-out infinite;\n}\n\n/*\n * A track, and one arc travelling on it.\n *\n * Two concentric arcs turning against each other was busier than it needed to be at 42px \u2014\n * the second one read as clutter rather than as motion. One ring carries the movement, and\n * a dim complete circle underneath gives it something to travel *along*: the eye is told\n * where the path goes, so a quarter-turn of white reads as progress around a whole rather\n * than as a fragment floating on its own.\n *\n * Both circles share a radius. They are the same ring, drawn twice \u2014 once whole and faint,\n * once partial and bright \u2014 which is why the bright one can never drift off the dim one.\n *\n * **SVG rather than a bordered box.** A border arc is a rectangle\'s edge: its ends are cut\n * square, and its length is whichever quarter-turns the border sides happen to cover. A\n * stroked circle can have `stroke-linecap: round`, which is most of the difference between\n * "a spinner" and "the default spinner", and its length is `stroke-dasharray` \u2014 a number,\n * so it can be animated. The head therefore breathes as it turns: it draws out and pulls\n * back on 1.9s against a 1.4s rotation, two periods that do not divide into each other, so\n * the pair never repeats the same picture while anyone is looking at it.\n */\n.rings {\n    position: absolute;\n    inset: 0;\n    width: 100%;\n    height: 100%;\n    overflow: visible;\n}\n\n.arc {\n    fill: none;\n    stroke-linecap: round;\n    /* The geometry box is the circle itself, so 50% is its centre whatever the stroke does. */\n    transform-box: fill-box;\n    transform-origin: 50% 50%;\n}\n\n/* The path, whole and dim. Static: a track that moved would not be a track. */\n.arc--track {\n    stroke: rgba(255, 255, 255, 0.16);\n    stroke-width: 2.5;\n}\n\n.arc--head {\n    stroke: rgba(255, 255, 255, 0.95);\n    stroke-width: 2.5;\n    /* Circumference is 2\u03c0r \u2248 119.4; the gap is oversized so only one arc is ever drawn. */\n    stroke-dasharray: 30 200;\n    animation:\n        wgSpin 1.4s linear infinite,\n        wgDraw 1.9s ease-in-out infinite;\n}\n\n.label {\n    letter-spacing: 0.04em;\n    font-size: 13px;\n    opacity: 0.85;\n}\n\n.label:empty { display: none; }\n\n.countdown {\n    font-size: 30px;\n    font-weight: 700;\n    line-height: 1;\n    font-variant-numeric: tabular-nums;\n}\n\n.countdown:empty { display: none; }\n\n@keyframes wgSpin { to { transform: rotate(360deg); } }\n\n/*\n * The arc drawing itself out and pulling back in.\n *\n * The offset moves with the length so the arc grows from its leading end rather than\n * stretching symmetrically about its middle \u2014 the difference between something being drawn\n * and something being scaled.\n */\n@keyframes wgDraw {\n    0%   { stroke-dasharray: 14 200; stroke-dashoffset: 0; }\n    50%  { stroke-dasharray: 76 200; stroke-dashoffset: -26; }\n    100% { stroke-dasharray: 14 200; stroke-dashoffset: -119; }\n}\n\n@keyframes wgGlow {\n    0%, 100% { opacity: 0.45; transform: scale(0.94); }\n    50%      { opacity: 1;    transform: scale(1.06); }\n}\n\n/*\n * Still, and deliberately so.\n *\n * `animation: none` on a partial ring was leaving it frozen at whatever angle it had\n * reached \u2014 a broken-looking fragment rather than a resting state. Under reduced motion the\n * arcs become one complete, even ring and the glow holds at a fixed opacity, so what the\n * player sees is a finished shape instead of a stopped one.\n */\n@media (prefers-reduced-motion: reduce) {\n    .wrap { transition: none; }\n    .spinner::before { animation: none; opacity: 0.6; transform: none; }\n    /* A dash pattern of "none" closes the gap, so the head becomes the whole circle and\n       settles exactly onto the track it was travelling \u2014 one finished ring, not a fragment. */\n    .arc--head { animation: none; stroke-dasharray: none; stroke-dashoffset: 0;\n                 stroke: rgba(255, 255, 255, 0.55); }\n}\n';
            var e = b.createElement("div");
            e.className = "wrap";
            var f = b.createElement("span");
            f.className = "label";
            b = b.createElement("span");
            b.className = "countdown";
            e.append(f, b);
            d.append(c, e);
            return {
                wrap: e,
                label: f,
                X: b,
                destroy: () => {
                    a.remove()
                }
            }
        }
        function xj(a, b) {
            var c = Object
              , d = c.freeze
              , e = th(a.minWidth)
              , f = th(a.minHeight)
              , g = yj(a.containerPosition)
              , h = a.fitToPx !== void 0 && a.fitToPx !== !1
              , l = a.fitParent === !0;
            var m = a.zIndex;
            m = typeof m === "number" && Number.isFinite(m) ? Math.max(9999, Math.floor(m)) : 9999;
            return d.call(c, {
                width: e,
                height: f,
                position: g,
                Zg: h,
                Rc: l,
                zIndex: m,
                maxHeight: th(a.maxHeight),
                Wh: yj(a.mobilePosition),
                Jk: a.fixedBody === !0,
                N: b.N
            })
        }
        function th(a) {
            if (typeof a === "number" && Number.isFinite(a))
                return `${a}px`;
            if (typeof a !== "string")
                return null;
            a = a.trim();
            return a === "" || /[{};<>]/.test(a) ? null : a
        }
        function yj(a) {
            return a === "absolute" || a === "relative" || a === "fixed" || a === "static" ? a : null
        }
        function zj(a, b) {
            var c = a.width - b.left - b.right;
            a = a.height - b.top - b.bottom;
            return c <= 0 || a <= 0 ? null : Object.freeze({
                width: `${c}px`,
                height: `${a}px`,
                maxWidth: "100%"
            })
        }
        function Ym(a) {
            return a.Ob.width > 0 && a.Ob.height > 0 ? {
                width: a.Ob.width,
                height: a.Ob.height
            } : a.viewport.width <= 0 || a.viewport.height <= 0 ? null : a.La.width >= a.tf.width - 1 && a.La.height >= a.tf.height - 1 ? {
                width: a.viewport.width,
                height: a.viewport.height
            } : null
        }
        function Aj(a, b) {
            var c;
            return (c = (a != null ? a : Bj).get(b)) != null ? c : Zm
        }
        function $m(a, b, c=Bj) {
            a = an(a);
            var d = {};
            for (let e of uh) {
                let f = b - Aj(c, e).yb * 6E4, g;
                d[e] = Object.freeze(((g = a[e]) != null ? g : []).filter(h => typeof h === "number" && h > f))
            }
            return Object.freeze(d)
        }
        function Rf(a, b, c) {
            return Object.freeze({
                I: a,
                reason: b,
                Ea: c
            })
        }
        function an(a) {
            if (a === null || a === "")
                return {};
            try {
                let b = JSON.parse(atob(a));
                if (b === null || typeof b !== "object")
                    return {};
                a = {};
                for (let c of uh) {
                    let d = b[c];
                    Array.isArray(d) && (a[c] = d)
                }
                return a
            } catch (b) {
                return {}
            }
        }
        function bn(a) {
            if (a === null || a === void 0 || a === !1)
                return null;
            a = typeof a === "object" ? a : {};
            var b = a.enableFreePlay === !0;
            if (b)
                var c = "overlay";
            else
                c = a.position,
                c = c === "top" || c === "bottom" ? c : "overlay";
            var d = Object
              , e = d.freeze
              , f = a.level === "info" ? "info" : "block"
              , g = vh(a.message, Sf.message)
              , h = vh(a.info, Sf.info);
            var l = a.freePlayTime;
            var m = Sf.Hb;
            l = typeof l !== "number" || !Number.isFinite(l) || l <= 0 ? m : Math.floor(l);
            return e.call(d, {
                level: f,
                message: g,
                info: h,
                He: b,
                Hb: l,
                ud: vh(a.playButtonText, Sf.ud),
                position: c
            })
        }
        function cn(a) {
            return a.ud.replace("%s", String(a.Hb))
        }
        function vh(a, b) {
            return typeof a === "string" && a.trim() !== "" ? a : b
        }
        function dn(a) {
            if (a === null || typeof a !== "object")
                return en;
            var b = wh(a.v)
              , c = Object
              , d = c.freeze
              , e = wh(a.i)
              , f = wh(a.t);
            a = a.v;
            a = typeof a === "number" && Number.isFinite(a) && a >= 0;
            return d.call(c, {
                Wf: b,
                Ue: e,
                Sf: f,
                Xf: a ? b / 1E3 : 3
            })
        }
        function Cj(a, b) {
            switch (a) {
            case "video":
                return b.Wf;
            case "image":
                return b.Ue;
            case "text":
                return b.Sf;
            default:
                return 4E3
            }
        }
        function fn(a) {
            return a.kind !== "video" || a.Mb <= 0 || !Number.isFinite(a.M) || a.M <= 0 ? !0 : a.M > a.Mb / 1E3
        }
        function wh(a) {
            return typeof a !== "number" || !Number.isFinite(a) || a < 0 ? 4E3 : a
        }
        function gn(a) {
            var b = new URLSearchParams, c;
            b.set("p", (c = a.Zi) != null ? c : "");
            b.set("d", a.Og);
            b.set("u", a.referrer);
            return `https://collect.wgplayer.com/midrollads/?${b.toString()}`
        }
        function hn(a, b) {
            var c, d = (c = a.host.shadowRoot) != null ? c : a.host.attachShadow({
                mode: "open"
            }), e = b.createElement("style");
            e.textContent = '\n:host { all: initial; }\n\n.screen {\n    position: absolute;\n    inset: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 14px;\n    padding: 28px;\n    box-sizing: border-box;\n    background: #11141a;\n    color: #e8ecf2;\n    font: 400 15px/1.5 system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;\n    text-align: center;\n}\n\nh2 {\n    margin: 0;\n    font-size: 18px;\n    font-weight: 600;\n}\n\np { margin: 0; max-width: 46ch; color: #aeb6c2; }\n\npre {\n    margin: 0;\n    max-width: 100%;\n    max-height: 40%;\n    padding: 12px 14px;\n    overflow: auto;\n    box-sizing: border-box;\n    border-radius: 6px;\n    background: #0a0c10;\n    color: #d7e3ff;\n    font: 400 12px/1.5 ui-monospace, SFMono-Regular, Menlo, monospace;\n    text-align: left;\n    white-space: pre;\n}\n\n.hidden { display: none; }\n';
            d.appendChild(e);
            var f = b.createElement("div");
            f.className = "screen hidden";
            f.setAttribute("role", "alert");
            c = a.Nb !== null;
            var g = b.createElement("h2");
            g.textContent = c ? "Your ads.txt is missing some lines" : "This game is not available here";
            var h = b.createElement("p");
            h.textContent = c ? "Add the lines below to the ads.txt file at the root of your domain, then reload." : "The site hosting this game is not authorised to show it. If you are the publisher, check your ads.txt and your account status.";
            f.appendChild(g);
            f.appendChild(h);
            c && (b = b.createElement("pre"),
            b.textContent = a.Nb,
            f.appendChild(b));
            d.appendChild(f);
            return {
                show() {
                    f.classList.remove("hidden")
                },
                aa() {
                    f.classList.add("hidden")
                },
                destroy() {
                    f.remove();
                    e.remove()
                }
            }
        }
        function jn(a, b) {
            return b ? String(a != null ? a : "") !== "1009" : !1
        }
        function kn(a) {
            var b = {
                Intersection: a.intersectionRatio,
                AdBlock: a.eg,
                ErrorType: a.error.type,
                Error: a.error.text,
                ErrorCode: a.error.errorCode,
                ErrorMessage: a.error.message,
                DOM: {
                    AC: a.bb.rect,
                    CC: a.F.rect
                },
                AcClass: a.bb.Bg.join(),
                UA: a.userAgent,
                Screen: `${a.screen.width || 0} x ${a.screen.height || 0}`,
                URL: encodeURIComponent(a.G),
                Referrer: a.referrer || "noref",
                AdTag: encodeURIComponent(a.adTagUrl),
                SlotSize: {
                    Linear: {
                        w: a.slot.cf.width,
                        h: a.slot.cf.height
                    },
                    NonLinear: {
                        w: a.slot.hf.width,
                        h: a.slot.hf.height
                    }
                },
                Screenshot: null,
                PrefetchPRE: a.Bd,
                V: a.version
            };
            a.ra !== null && (a = a.ra,
            b.Ad = {
                ContentType: a.contentType,
                AdSystem: a.Dk,
                MediaURL: a.Sk,
                Width: `${a.wk} / ${a.width} / ${a.wk}`,
                Height: `${a.vk} / ${a.height} / ${a.vk}`
            });
            return b
        }
        function ln(a, b) {
            var c = a.host.shadowRoot === null ? a.host.attachShadow({
                mode: "open"
            }) : a.host.shadowRoot
              , d = b.createElement("style");
            d.textContent = '\n:host { all: initial; }\n\n.mask {\n    position: absolute;\n    inset: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 16px;\n    padding: 24px;\n    box-sizing: border-box;\n    background: rgba(0, 0, 0, .85);\n    color: #fff;\n    font: 400 15px/1.45 system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;\n    text-align: center;\n}\n\n.bar {\n    position: absolute;\n    left: 0;\n    right: 0;\n    padding: 10px 14px;\n    box-sizing: border-box;\n    background: rgba(0, 0, 0, .82);\n    color: #fff;\n    font: 400 13px/1.4 system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;\n    text-align: center;\n    cursor: pointer;\n}\n\n.bar[data-position="top"] { top: 0; }\n.bar[data-position="bottom"] { bottom: 0; }\n\n.cta {\n    padding: 10px 18px;\n    border: 0;\n    border-radius: 6px;\n    background: #2e9e4f;\n    color: #fff;\n    font: 600 15px/1 inherit;\n    cursor: pointer;\n}\n\n.cta:focus-visible { outline: 2px solid #fff; outline-offset: 3px; }\n\n.countdown {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    padding: 9px;\n    box-sizing: border-box;\n    background: #000;\n    color: #fff;\n    font: 400 14px/1.3 system-ui, sans-serif;\n    text-align: center;\n    font-variant-numeric: tabular-nums;\n}\n\n.hidden { display: none; }\n';
            c.appendChild(d);
            return a.config.level === "info" ? mn(a, c, d, b) : nn(a, c, d, b)
        }
        function mn(a, b, c, d) {
            var e = d.createElement("div");
            e.className = "bar hidden";
            e.setAttribute("data-position", a.config.position === "top" ? "top" : "bottom");
            e.setAttribute("role", "button");
            e.setAttribute("tabindex", "0");
            e.textContent = a.config.info;
            var f = () => {
                e.classList.add("hidden")
            }
            ;
            e.addEventListener("click", f);
            b.appendChild(e);
            return {
                show() {
                    e.classList.remove("hidden")
                },
                Tf() {},
                block() {},
                destroy() {
                    e.removeEventListener("click", f);
                    e.remove();
                    c.remove()
                }
            }
        }
        function nn(a, b, c, d) {
            var e = d.createElement("div");
            e.className = "mask hidden";
            var f = d.createElement("div");
            f.textContent = a.config.message;
            e.appendChild(f);
            var g = d.createElement("div");
            g.className = "countdown hidden";
            var h = null
              , l = () => {
                var m;
                (m = h) == null || m.remove();
                h = null;
                e.classList.add("hidden");
                g.classList.remove("hidden");
                var t;
                (t = a.ni) == null || t.call(a)
            }
            ;
            a.config.He && (h = d.createElement("button"),
            h.className = "cta",
            h.type = "button",
            h.textContent = cn(a.config),
            h.addEventListener("click", l),
            e.appendChild(h));
            b.appendChild(e);
            b.appendChild(g);
            return {
                show() {
                    e.classList.remove("hidden")
                },
                Tf(m) {
                    m = Math.max(0, Math.ceil(m));
                    g.textContent = m === 1 ? "Game closes in 1 second." : `Game closes in ${m} seconds.`
                },
                block() {
                    var m;
                    (m = h) == null || m.remove();
                    h = null;
                    g.classList.add("hidden");
                    e.classList.remove("hidden");
                    var t;
                    (t = a.Vk) == null || t.call(a)
                },
                destroy() {
                    var m;
                    (m = h) == null || m.removeEventListener("click", l);
                    e.remove();
                    g.remove();
                    c.remove()
                }
            }
        }
        function on(a) {
            if (typeof a !== "string" || !a.startsWith("wgafg://"))
                return null;
            a = a.slice(8);
            if (a === "")
                return null;
            try {
                var b = JSON.parse(a)
            } catch (c) {
                return null
            }
            if (b === null || typeof b !== "object" || Array.isArray(b))
                return null;
            a = b.action;
            return typeof a !== "string" || a === "" ? null : Object.freeze({
                action: a,
                Yb: Object.freeze(Object.assign({}, b))
            })
        }
        function pn(a, b={}) {
            return "wgafg://" + JSON.stringify(Object.assign({}, b, {
                action: a
            }))
        }
        function qn(a, b) {
            return b === "parent" ? !rn.has(a) : !sn.has(a)
        }
        function Dj(a) {
            var b = Object.keys(a);
            if (b.length === 0)
                return "{}";
            try {
                return JSON.stringify(a).slice(0, 160)
            } catch (c) {
                return `{${b.join(",")}}`
            }
        }
        function tn(a, b) {
            try {
                return a(b)
            } catch (c) {
                return null
            }
        }
        function Ej(a, b, c=null, d= () => {}
        ) {
            try {
                a.dispatchEvent(new CustomEvent(b,{
                    detail: c
                }))
            } catch (e) {
                d(e)
            }
        }
        function un(a) {
            var b = new Map;
            b.set("initHandshake", (c, d) => {
                d.dc("receiveHandshake", {
                    logLevel: a.Ih()
                })
            }
            );
            b.set("receiveHandshake", (c, d) => {
                c = tc(c.logLevel);
                c !== null && a.fi(c);
                a.ei(d.source)
            }
            );
            b.set("getLta", (c, d) => {
                c = xh(c.networkId);
                var e = d.dc
                  , f = a.kb()
                  , g = a.Pb();
                e.call(d, "lta", {
                    lastAdAt: f,
                    sameSite: c === null || g === null ? !1 : c === g,
                    minAdInterval: a.ca(),
                    sfm: a.Nd(),
                    adOnScreen: a.hg()
                })
            }
            );
            b.set("lta", (c, d) => {
                var e = tc(c.lastAdAt);
                e !== null && e > 0 && a.Hf(e);
                e = c.sameSite;
                typeof e === "boolean" && a.Bi(e);
                e = tc(c.minAdInterval);
                e !== null && e > 0 && a.ti(e);
                c = c.adOnScreen;
                typeof c === "boolean" && a.pf(d.source, c);
                a.xi()
            }
            );
            b.set("adOnScreen", (c, d) => {
                c = c.onScreen;
                typeof c === "boolean" && a.pf(d.source, c)
            }
            );
            b.set("resetLta", () => {
                a.Hf(Date.now())
            }
            );
            b.set("refetchAd", (c, d) => {
                a.rj(e => {
                    d.dc("midrollEnd", {
                        delivered: e.o,
                        reason: e.reason,
                        waitSeconds: e.j
                    })
                }
                )
            }
            );
            b.set("midrollEnd", c => {
                a.fc();
                var d;
                a.kf({
                    o: (d = tc(c.delivered)) != null ? d : 0,
                    reason: xh(c.reason),
                    j: tc(c.waitSeconds)
                })
            }
            );
            b.set("delegateAd", (c, d) => {
                c = vn(c);
                c !== null && a.zj(c, e => {
                    d.dc("delegatedAdEnd", {
                        delivered: e.o,
                        reason: e.reason,
                        waitSeconds: e.j
                    })
                }
                )
            }
            );
            b.set("delegatedAdEnd", c => {
                a.fc();
                var d;
                a.kf({
                    o: (d = tc(c.delivered)) != null ? d : 0,
                    reason: xh(c.reason),
                    j: tc(c.waitSeconds)
                })
            }
            );
            b.set("rewarded-init", (c, d) => {
                a.L.init(d.source)
            }
            );
            b.set("rewarded-show", () => {
                a.L.show()
            }
            );
            b.set("rewarded-ready", () => {
                a.L.Z()
            }
            );
            b.set("rewarded-granted", () => {
                a.L.pd()
            }
            );
            for (let c of ["rewarded-failed", "rewarded-canceled"])
                b.set(c, () => {
                    a.L.hi()
                }
                );
            b.set("rewarded-closed", () => {
                a.L.mb()
            }
            );
            return b
        }
        function vn(a) {
            var b = a.location === "midroll" ? "midroll" : "preroll"
              , c = a.tags;
            if (!Array.isArray(c))
                return null;
            c = c.filter(d => typeof d === "string" && d !== "");
            if (c.length === 0)
                return null;
            a = tc(a.maxAds);
            return {
                location: b,
                dk: c,
                Oh: a !== null && a > 0 ? a : null
            }
        }
        function xh(a) {
            return typeof a === "string" && a !== "" ? a : null
        }
        function tc(a) {
            return typeof a === "number" && Number.isFinite(a) ? a : null
        }
        function wn(a) {
            if (a.kh) {
                if (a.h)
                    var b = !0;
                else {
                    var c;
                    b = xn.includes((c = a.Gc) != null ? c : "") || a.V === !1 ? !0 : a.Hc === "timeout"
                }
                a = b ? Tf(!0, null, !1) : a.hc ? Tf(!0, null, !0) : Tf(!1, "consent-incomplete", !0)
            } else
                a = Tf(!1, "no-tag", !1);
            return a
        }
        function Tf(a, b, c) {
            return Object.freeze({
                I: a,
                reason: b,
                Hd: c
            })
        }
        function yn(a) {
            a += 1;
            return (1 + a / 2 * a * 10) * 1E3
        }
        function zn(a) {
            return a.Jb || a.xa <= 0 ? !1 : a.oe < a.xa
        }
        function An(a) {
            if (a === null || typeof a !== "object")
                return null;
            var b = a.makeRewardedVisible;
            return typeof b === "function" ? b.bind(a) : null
        }
        function yh(a) {
            return Object.freeze({
                m: !1,
                reason: a
            })
        }
        function Ae(a, b) {
            return `__wgAdInterstitial_${a}_${b}`
        }
        function ub(a) {
            return JSON.stringify(a).replace(/</g, "\\u003c")
        }
        function Fj(a) {
            switch (a.trim()) {
            case "H5R":
            case "REWARDED":
                return "REWARDED";
            default:
                return "GAME_MANUAL_INTERSTITIAL"
            }
        }
        function Bn(a) {
            if (a.xh && a.W && !a.referrer.includes("wgplayground.com"))
                return !1;
            if (a.sh)
                return !0;
            a = a.userAgent;
            return !(Cn.test(a) && Dn.test(a) && !En.test(a))
        }
        function Fn(a) {
            if (!a.Ji || !a.enabled)
                return null;
            var b, c, d = (c = (b = a.tag) == null ? void 0 : b.trim()) != null ? c : "";
            if (d === "")
                return null;
            var e, f;
            b = Object;
            c = b.freeze;
            var g, h = a.position;
            h = (g = h == null ? void 0 : h.trim().toLowerCase()) != null ? g : "";
            g = Gn.includes(h) ? h : "after";
            return c.call(b, {
                tag: d,
                position: g,
                $a: (f = (e = a.$a) == null ? void 0 : e.trim()) != null ? f : ""
            })
        }
        function Hn(a) {
            var b;
            a = (b = a == null ? void 0 : a.trim()) != null ? b : "";
            return a === "" ? "H5R" : a
        }
        function In(a, b) {
            return Fj(a) === "REWARDED" ? b === !0 : b !== !1
        }
        function Jn(a) {
            if (!Array.isArray(a))
                return null;
            var b = []
              , c = new Set;
            for (let d of a) {
                if (b.length >= 30)
                    break;
                a = String(d);
                /^\d+$/.test(a) && !c.has(a) && (c.add(a),
                b.push(a))
            }
            return b.length > 0 ? b : null
        }
        function Gj(a, b) {
            return a.width <= 0 || a.height <= 0 || b.width <= 0 || b.height <= 0 ? !0 : b.width >= a.width - 1 && b.height >= a.height - 1
        }
        function Uf(a, b) {
            return Object.freeze({
                I: a,
                reason: b
            })
        }
        function Kn(a) {
            switch (a.position) {
            case "begin":
                return a.wd;
            case "before":
                return Hj(a.ld, a.$a);
            case "after":
                return Hj(a.Fd, a.$a);
            case "end":
                return a.de;
            default:
                return !1
            }
        }
        function Hj(a, b) {
            return a === null || a === "" || b === "" ? !1 : a.includes(b)
        }
        function Ln(a) {
            if (a.referrer.includes("y8.com"))
                return "www.y8.com";
            if (a.gf === "wgplayground.com" && a.Nf !== null)
                return a.Nf;
            if (a.href.includes("wgplayground.com")) {
                let b;
                return (b = a.gf) != null ? b : a.referrer
            }
            return a.href
        }
        function Mn(a) {
            var b, c, d, e = (d = (b = a.Te) == null ? void 0 : (c = b.src) == null ? void 0 : c.trim()) != null ? d : "";
            a.Te === null || a.wb ? e = Object.freeze({
                shape: "inline",
                Nc: null,
                zc: !1
            }) : (b = a.G,
            a = a.oa,
            e = (e === "" ? 0 : e === b || e.replace(/\/$/, "") === a.replace(/\/$/, "")) ? Object.freeze({
                shape: "self-hosted",
                Nc: e === "" ? null : e,
                zc: !1
            }) : Object.freeze({
                shape: "embedded",
                Nc: e === "" ? null : e,
                zc: e !== ""
            }));
            return e
        }
        function Ij(a) {
            return typeof a === "string" && a.trim() !== "" ? a : null
        }
        function Jd(a, b, c, d) {
            return Object.freeze({
                Id: a,
                shape: b,
                Lk: c,
                reason: d
            })
        }
        function Vf(a) {
            return Object.freeze(Object.assign({}, a, {
                jf: a.V !== !0 || a.gb ? 0 : 1
            }))
        }
        function zh(a) {
            return typeof a === "string" ? a : ""
        }
        function Ah(a) {
            return typeof a === "string" && a !== "" ? a : null
        }
        function Bh(a) {
            a = a == null ? void 0 : a.ids;
            if (!Array.isArray(a))
                return null;
            var b = new Set
              , c = [];
            for (let d of a) {
                if (c.length >= 30)
                    break;
                let e;
                try {
                    e = String(d)
                } catch (f) {
                    continue
                }
                /^\d+$/.test(e) && !b.has(e) && (b.add(e),
                c.push(e))
            }
            return c.length > 0 ? Object.freeze(c) : null
        }
        function Nn(a, b) {
            if (typeof a !== "string" || a === "")
                return a;
            if (a.includes("ppsj=") || b === null || b.length === 0)
                return a;
            try {
                let d = a.includes("?") ? "&" : "?";
                b = {
                    PublisherProvidedTaxonomySignals: [{
                        taxonomy: "IAB_AUDIENCE_1_1",
                        values: [...b]
                    }]
                };
                var c = encodeURIComponent(btoa(JSON.stringify(b)));
                return `${a}${d}ppsj=${c}`
            } catch (d) {
                return a
            }
        }
        function On(a) {
            var b = Math.max(0, a.tj - a.Li);
            return a.mg ? uc("already-installed", b) : a.Sg ? uc("dismissed", b) : a.Mj ? uc("already-showing", b) : a.Yi ? a.gg ? uc("ad-in-flight", b) : a.Vg ? b > 0 ? uc("still-playing", b) : uc("show", 0) : uc("page-hidden", b) : uc("no-prompt-available", b)
        }
        function uc(a, b) {
            return Object.freeze({
                show: a === "show",
                reason: a,
                jj: b
            })
        }
        async function Pn(a) {
            if (a.container === null) {
                var b;
                (b = a.g) == null || b.call(a, "this browser has no service worker support");
                return !1
            }
            a: {
                var c = a.path;
                b = a.G;
                c = (c != null ? c : "/weegoo-sw.js").trim();
                if (c === "")
                    var d = {
                        ok: !1,
                        reason: "no service worker path"
                    };
                else {
                    try {
                        d = new URL(b);
                        var e = new URL(c,d)
                    } catch (f) {
                        d = {
                            ok: !1,
                            reason: `cannot resolve "${c}" against "${b}"`
                        };
                        break a
                    }
                    d = e.origin !== d.origin ? {
                        ok: !1,
                        reason: `a service worker must be same-origin \u2014 "${e.origin}" is not "${d.origin}". Host a copy of weegoo-sw.js on your own domain.`
                    } : d.protocol !== "https:" && d.hostname !== "localhost" && d.hostname !== "127.0.0.1" ? {
                        ok: !1,
                        reason: `a service worker needs https \u2014 "${d.protocol}" is not`
                    } : {
                        ok: !0,
                        url: e.href,
                        scope: (new URL(e.pathname.slice(0, e.pathname.lastIndexOf("/") + 1),d)).href
                    }
                }
            }
            if (!d.ok) {
                let f;
                (f = a.g) == null || f.call(a, d.reason);
                return !1
            }
            try {
                return await a.container.register(d.url, {
                    scope: d.scope
                }),
                !0
            } catch (f) {
                let g;
                (g = a.g) == null || g.call(a, `could not register ${d.url}`, f);
                return !1
            }
        }
        function Jj(a, b) {
            a = a.trim();
            return a === "" || /[{};<>]/.test(a) ? b : a
        }
        function Kj(a) {
            if (a === null || typeof a !== "object")
                return !1;
            try {
                return typeof a.SendMessage === "function"
            } catch (b) {
                return !1
            }
        }
        function Lj(a) {
            return typeof a === "function" ? a : null
        }
        function Qn(a, b) {
            return b ? a.replace(/^www\./i, "") : a
        }
        function Rn(a) {
            return a.W ? "allowed" : a.ih ? a.jh ? a.Qb.length > 0 ? Mj(a.Me, a.Qb) ? "denied-by-npd" : "allowed" : a.tc.length > 0 ? Mj(a.Me, a.tc) ? "allowed" : "not-in-ypd" : "allowed" : "allowed" : "no-content-container"
        }
        function Nj(a) {
            return a === "denied-by-npd" || a === "not-in-ypd"
        }
        function Mj(a, b) {
            if (a === null)
                return !1;
            var c = a.toLowerCase();
            return b.some(d => c.includes(d.toLowerCase()))
        }
        function Sn(a) {
            a = Number.parseInt(a != null ? a : "", 10);
            return Number.isFinite(a) ? a < 2 : !0
        }
        function Tn(a) {
            a = Number.parseInt(a != null ? a : "", 10);
            return (Number.isFinite(a) ? a : 0) + 1
        }
        function Un(a) {
            return (b, c) => {
                var d = !1;
                try {
                    let e = a.createElement("script");
                    e.async = !0;
                    e.src = b;
                    e.addEventListener("load", () => {
                        d || (d = !0,
                        c(!0))
                    }
                    );
                    e.addEventListener("error", () => {
                        d || (d = !0,
                        c(!1))
                    }
                    );
                    let f;
                    ((f = a.head) != null ? f : a.documentElement).appendChild(e)
                } catch (e) {
                    d || (d = !0,
                    c(!1))
                }
            }
        }
        function Vn(a) {
            var b = !a.Le
              , c = []
              , d = e => {
                if (!b) {
                    b = !0;
                    var f;
                    (f = a.Ci) == null || f.call(a, e);
                    for (let g of c.splice(0))
                        try {
                            g()
                        } catch (h) {}
                }
            }
            ;
            a.Le && a.rb( () => {
                d("timeout")
            }
            , a.mc);
            return {
                get Md() {
                    return b
                },
                $f(e) {
                    b ? e() : c.push(e)
                },
                Gj: () => {
                    d("answer")
                }
            }
        }
        function Be(a) {
            return a.width > 0 && a.height > 0
        }
        function Wn(a, b) {
            if (Be(a.measure()))
                b();
            else {
                var c = !1
                  , d = null
                  , e = null
                  , f = g => {
                    if (!c) {
                        c = !0;
                        e !== null && a.cancel(e);
                        var h;
                        (h = d) == null || h();
                        var l;
                        (l = a.Gi) == null || l.call(a, g, a.measure());
                        b()
                    }
                }
                ;
                d = a.observe( () => {
                    Be(a.measure()) && f("ready")
                }
                );
                e = a.rb( () => {
                    f("timeout")
                }
                , a.mc);
                Be(a.measure()) && f("ready")
            }
        }
        function Xn(a, b, c) {
            var d = Oc(b, "image");
            var e = $g(b);
            b = Oc(b, "text");
            d = d ? "i" : e ? c ? "vs" : "v" : b ? "t" : null;
            if (d !== null) {
                e = Date.now();
                b = $m(a.read("wgpcpp_2"), e);
                c = {
                    history: b,
                    Ea: d
                };
                if (c.Ea === null)
                    c = Rf(!0, null, null);
                else {
                    var f = Aj(c.Pk, c.Ea);
                    c = f.max === 0 ? Rf(!0, null, c.Ea) : c.history[c.Ea].length < f.max ? Rf(!0, null, c.Ea) : Rf(!1, "budget-exhausted", c.Ea)
                }
                c.I || aa(`[afg] click budget spent for "${d}" ads \u2014 recorded, not blocked`);
                c = a.write;
                d = d === null ? b : Object.freeze(Object.assign({}, b, {
                    [d]: Object.freeze([...b[d], e])
                }));
                e = {};
                for (g of uh)
                    e[g] = d[g];
                var g = JSON.stringify(e);
                g = btoa(g);
                c.call(a, "wgpcpp_2", g)
            }
        }
        function Q(a, b) {
            try {
                return b()
            } catch (c) {
                aa(`[afg] ${a} failed`, c)
            }
        }
        function Yn() {
            var a = b => {
                try {
                    let c = b == null ? void 0 : b.__tcfapi;
                    return typeof c === "function" ? c : null
                } catch (c) {
                    return null
                }
            }
            ;
            return {
                Gh: () => a(window),
                gk: () => window.top === window ? null : a(window.top),
                Yg: () => {
                    for (var b = window; ; ) {
                        try {
                            if (b.frames.__tcfapiLocator)
                                return b
                        } catch (c) {}
                        if (b === window.top || b.parent === b)
                            return null;
                        try {
                            b = b.parent
                        } catch (c) {
                            return null
                        }
                    }
                }
                ,
                kg: b => {
                    var c = d => b(d.data);
                    window.addEventListener("message", c);
                    return () => window.removeEventListener("message", c)
                }
                ,
                l: (b, c) => window.setTimeout(b, c),
                A: b => window.clearTimeout(b)
            }
        }
        function Zn(a, b= () => !0) {
            var {container: c, qe: d} = $n(a)
              , e = d ? [] : [...c.childNodes]
              , f = [...document.getElementsByTagName("script")].map(g => g.src);
            return {
                container: c,
                Fg: d,
                Hg: e,
                F: () => b() ? Wf(a.F) : null,
                slot: () => {
                    var g = c.getBoundingClientRect();
                    return {
                        width: Math.round(g.width),
                        height: Math.round(g.height)
                    }
                }
                ,
                P: Ri(navigator.userAgent, {
                    maxTouchPoints: navigator.maxTouchPoints
                }),
                K: el(cl(f), document.domain),
                G: window.location.href
            }
        }
        function Wf(a) {
            if (a === null)
                return null;
            a = /^[.#[]/.test(a) ? [a] : [`#${a}`, `.${a}`, a];
            for (let b of a)
                try {
                    let c = document.querySelector(b);
                    if (c instanceof HTMLElement)
                        return c
                } catch (c) {}
            return null
        }
        function Ce(a) {
            a = wf(a).F;
            var b = a === null || typeof document === "undefined" ? null : Wf(a);
            return {
                qa: a,
                element: b,
                Ed: b !== null
            }
        }
        function Kd() {
            var a;
            return ((a = navigator.userActivation) == null ? void 0 : a.hasBeenActive) === !0
        }
        function Oj() {
            var a, b = (a = globalThis.google) == null ? void 0 : a.ima;
            if (!b)
                throw Error("google.ima is not loaded \u2014 the IMA SDK script must run first");
            return b
        }
        function ao(a, b, c) {
            function d() {
                var k = [];
                try {
                    let n = window;
                    for (let q = 0; q < 10; q += 1) {
                        let H = n.parent;
                        if (H === n)
                            break;
                        k.push(H);
                        if (H === window.top)
                            break;
                        n = H
                    }
                } catch (n) {}
                return k
            }
            var e = wf(a, Ch());
            e.h && aa("[afg] ad-test mode is ON \u2014 every tag is replaced with a Google demo unit, and nothing served will earn. Remove adtest=true from the url to turn it off.");
            Mb("[afg] 9.0.0 build 893eb5e+dirty-2026-10-02T11:43Z");
            a = zm(e.mj);
            a !== null && aa(a);
            var f;
            hc(`[afg] conf: waitForClickPre=${e.Yf} waitForClickMid=${e.Zf} autoplayMidroll=${e.Oa} sandboxed=${e.fa} ma=${(f = e.T) != null ? f : "unset"}`);
            var g = !1
              , h = null
              , l = Zn(e, () => !g)
              , m = new bo({
                names: e.S,
                uj: k => g ? void 0 : window[k],
                g: (k, n) => {
                    aa(`[afg] callback "${k}" threw`, n)
                }
            })
              , t = e.F !== null && e.lj ? new co({
                container: l.F,
                G: l.G,
                oa: window.location.origin,
                wb: e.wb,
                vj: e.fc,
                fj: k => {
                    var n, q;
                    return k !== null && ((q = (n = lb) == null ? void 0 : n.children) != null ? q : []).includes(k)
                }
            }) : null;
            Q("saving the game", () => t == null ? void 0 : t.save());
            var w = new eo({
                ee: Yn()
            });
            Q("asking the CMP", () => w.start());
            var y = new fo({
                ready: () => window.wgInterestReady === !0,
                read: () => {
                    var k = window;
                    try {
                        let n, q;
                        return (q = k.wgInterestData) != null ? q : (n = window.top) == null ? void 0 : n.wgInterestData
                    } catch (n) {
                        return k.wgInterestData
                    }
                }
                ,
                subscribe: k => {
                    var n = window, q;
                    ((q = n.wgOnInterest) != null ? q : n.wgOnInterest = []).push(k)
                }
            }), I, M = Rn({
                Me: go(l.F()),
                ih: l.F() !== null,
                jh: ((I = l.F()) == null ? void 0 : I.querySelector("iframe")) !== null && l.F() !== null,
                W: $b( () => window.self, () => window.parent),
                Qb: e.Qb,
                tc: e.tc
            });
            Nj(M) && (aa(`[afg] this embedded game is not configured to monetise here (${M})`),
            m.debug({
                prerollDomain: M
            }));
            Q("reading publisher signals", () => y.start());
            var G = new Pj({
                trace: k => {
                    z(`[afg-tags] ${k}`)
                }
            })
              , ja = (k, n) => {
                var q = new Pj({
                    trace: H => {
                        z(`[afg-tags] ${H}`)
                    }
                });
                q.reset(k === "midroll" ? {
                    ea: [],
                    U: [...n]
                } : {
                    ea: [...n],
                    U: []
                });
                return q
            }
              , Aa = () => {
                var k = G.reset;
                var n = {
                    Dg: e.wc,
                    Cg: e.Rh,
                    h: e.h,
                    K: l.K,
                    fe: e.fe
                };
                if (n.h)
                    var q = {
                        ea: ["https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/single_preroll_skippable&sz=640x480&ciu_szs=300x250%2C728x90&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&correlator="],
                        U: ["https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/single_preroll_skippable&sz=640x480&ciu_szs=300x250%2C728x90&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&correlator="]
                    };
                else {
                    var H = gl(n);
                    q = [...H];
                    var X = Si(n.Cg);
                    H = X.length === 0 ? [...H] : X;
                    q.push(`//pubads.g.doubleclick.net/gampad/ads?sz=1x1&iu=/1002212/WGAFGPRE3/${n.K}&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1`);
                    n.fe && (n = `https://wpb.wgplayer.com/wgbanner/?domain=${n.K}&iu=/1002212`,
                    q.push(n),
                    H.push(n));
                    q = {
                        ea: q,
                        U: H
                    }
                }
                k.call(G, ho(e, q))
            }
            ;
            Aa();
            var r = !1
              , v = !1
              , C = "preroll"
              , R = !1
              , D = null
              , P = !1
              , u = () => {
                D === null || P || D.classList.remove("wgContent");
                D = null;
                P = !1
            }
              , E = k => {
                Q("marking the game container for the page stylesheet", () => {
                    var n;
                    if (!(n = g)) {
                        n = C;
                        var q = R;
                        n = !(v && (n === "preroll" || !q))
                    }
                    n || k === null ? u() : D !== k && (u(),
                    D = k,
                    P = k.classList.contains("wgContent"),
                    k.classList.add("wgContent"))
                }
                )
            }
              , W = null
              , S = new Map
              , ba = null
              , O = new io;
            f = Math.random().toString(36).slice(2, 12);
            var ca = new jo({
                source: e.Bh,
                Bf: () => {
                    try {
                        return window.sessionStorage.getItem("jingleCount")
                    } catch (k) {
                        return null
                    }
                }
                ,
                Bk: k => {
                    window.sessionStorage.setItem("jingleCount", k)
                }
                ,
                Jg: () => document.createElement("audio"),
                g: (k, n) => {
                    aa(`[afg] ${k}`, n)
                }
            });
            ca.D();
            var Ea = new ko({
                Lb: e.pk,
                pa: k => window[k],
                Uc: () => Object.keys(window),
                Tc: e.Tc,
                Tg: Qn(window.location.host, e.ak),
                th: () => O.D,
                nk: f,
                l: (k, n) => window.setTimeout(k, n),
                A: k => {
                    window.clearTimeout(k)
                }
                ,
                g: (k, n) => {
                    aa(`[afg] the game did not accept "${k}"`, n)
                }
            }), Qc = !1, xf = {
                Ac: !1
            }, pe = bn(e.fg), yf = !1, qe = null, zf = null, hh = () => {
                pe === null || yf || (yf = !0,
                Q("showing the ad-block response", () => {
                    var k, n = (k = l.F()) != null ? k : l.container;
                    k = document.createElement("div");
                    k.className = "wgAdBlockResponse";
                    qe = k;
                    k.setAttribute("data-wg-owned", "true");
                    k.style.cssText = "position:absolute;inset:0;z-index:2147483000;";
                    n.style.position = n.style.position === "" ? "relative" : n.style.position;
                    n.appendChild(k);
                    var q = ln({
                        config: pe,
                        host: k,
                        ni: () => {
                            var H = new lo({
                                hk: pe.Hb,
                                l: (X, va) => window.setInterval(X, va),
                                A: X => {
                                    window.clearInterval(X)
                                }
                                ,
                                sd: X => {
                                    q.Tf(X)
                                }
                                ,
                                lf: () => {
                                    q.block()
                                }
                            });
                            H.start();
                            zf = H
                        }
                    }, document);
                    q.show()
                }
                ))
            }
            , ih = mo(e, l, y), zd = null, Af = !1, lb = null, Ad = null, re = [], se = null, Bf = k => {
                var n, q, H = (q = (n = lb) == null ? void 0 : n.children) != null ? q : [];
                for (let X of H)
                    Q("telling a child frame the ad clock moved", () => {
                        var va;
                        (va = lb) == null || va.send(X, "lta", {
                            lastAdAt: k
                        })
                    }
                    )
            }
            , Bd = !1, Cd = !1, qc = k => {
                var n, q;
                for (let H of (q = (n = lb) == null ? void 0 : n.children) != null ? q : [])
                    Q("telling a child frame whether an ad is on screen", () => {
                        var X;
                        (X = lb) == null || X.send(H, "adOnScreen", {
                            onScreen: k
                        })
                    }
                    )
            }
            , Dd = () => {
                v || Bd ? Cd || (Cd = !0,
                qc(!0)) : Promise.resolve().then( () => {
                    !Cd || v || Bd || (Cd = !1,
                    qc(!1))
                }
                )
            }
            , Fa = new no({
                config: {
                    Ga: e.Ga,
                    ca: e.ca,
                    Qc: !1,
                    Qd: !1,
                    cb: e.cb,
                    h: e.h,
                    Xd: e.Xd,
                    Rd: e.Rd,
                    Dd: e.Dd,
                    jd: e.jd,
                    Kd: e.Kd
                },
                nf: k => {
                    Bf(k)
                }
                ,
                yi: () => {
                    m.Mc()
                }
                ,
                uh: () => r,
                qf: (k, n) => {
                    if (!g) {
                        var q;
                        (q = zd) == null || q.D(k);
                        e.Ib.fixedBody === !0 && Qj(k);
                        q = l.F();
                        var H = xj(e.Ib, {
                            N: l.P.N
                        }).height;
                        if (!k)
                            Rj();
                        else if (q !== null && q.tagName.toLowerCase() !== "body" && k && De === null) {
                            De = {
                                position: q.style.position,
                                minHeight: q.style.minHeight,
                                width: q.style.width,
                                height: q.style.height,
                                maxWidth: q.style.maxWidth,
                                fh: q.classList.contains("wgContentSafeSize")
                            };
                            Xf = q;
                            window.getComputedStyle(q).position === "static" && (q.style.position = "relative");
                            var X = q.getBoundingClientRect()
                              , va = X.height;
                            H = va > 0 ? `${Math.round(va)}px` : H;
                            H !== null && (q.style.minHeight = H);
                            Wc = H === null ? null : {
                                minHeight: H,
                                La: {
                                    width: X.width,
                                    height: X.height
                                },
                                viewport: Dh()
                            };
                            X = q.getBoundingClientRect();
                            z(`[afg-box] ${Eh(q)} is ${Math.round(X.width)}x${Math.round(X.height)} for this pod (min-height ${H != null ? H : "left alone \u2014 it has a height of its own"})`)
                        }
                        v = k;
                        C = n;
                        Dd();
                        E(l.F());
                        k || Aa()
                    }
                }
                ,
                now: () => Date.now(),
                storage: Fh(),
                wa: () => ({
                    W: $b( () => window.self, () => window.parent),
                    Jd: Af,
                    Ic: w.Aa().J === "unknown" || w.Aa().J === "pending",
                    $b: e.md || xf.Ac || Nj(M),
                    ab: O.D
                }),
                $j: (k, n, q) => {
                    if (g)
                        q({
                            reason: "stopped",
                            o: 0,
                            ha: 0,
                            ia: ["session-ended"]
                        });
                    else if (e.fa)
                        n.u || Ea.pause(),
                        kh(k, q);
                    else {
                        var H;
                        Gh({
                            config: e,
                            B: l,
                            S: m,
                            Rf: t,
                            Nj: y,
                            Fc: w,
                            location: k,
                            Ta: ih,
                            Ah: ca,
                            ya: n.Qa === void 0 ? G : ja(k, n.Qa),
                            T: (H = n.fb) != null ? H : e.T,
                            u: n.u,
                            Uf: Ea,
                            Lf: n.Za !== !0,
                            yj: n.u || Qc,
                            ci: () => {
                                O.Ja();
                                O.D && hh()
                            }
                            ,
                            Ff: (X, va) => {
                                r = X;
                                W = va;
                                ba = X ? k : null;
                                R = X;
                                E(l.F());
                                X = S.get(k);
                                va !== null && X !== void 0 && va.update(X)
                            }
                            ,
                            pj: () => {
                                R = !1;
                                E(l.F())
                            }
                            ,
                            da: X => {
                                Ad = null;
                                q(X)
                            }
                            ,
                            mi: X => {
                                Ad = X
                            }
                            ,
                            Ak: () => h !== oe(Ch()),
                            nd: () => {
                                h = oe(Ch())
                            }
                            ,
                            Dj: () => g
                        })
                    }
                }
            }), xa = {}, ta = (k, ...n) => {
                typeof k === "function" ? k(...n) : typeof k === "string" && Ea.send(k)
            }
            , dc = (...k) => xa.context === void 0 ? k : [...k, xa.context], Ed = null, Rc = k => {
                if (Ed === null)
                    z(`[afg-rw] ${k}: no child asked us for this ad, nothing remitted`);
                else {
                    z(`[afg-rw] remitting ${k} to the child that asked`);
                    var n;
                    (n = lb) == null || n.send(Ed, k, {})
                }
            }
            , Sc, te, Df, Ef, Ff, Gf, Hf, Lb = new oo({
                config: {
                    ve: e.L !== null,
                    tag: {
                        Eg: (Gf = (Sc = e.L) == null ? void 0 : Sc.wc) != null ? Gf : null,
                        ck: db("wgRwTagName"),
                        Ki: () => db("wgNetworkId"),
                        na: (Hf = e.na) != null ? Hf : "iu=/1002212",
                        h: e.h
                    },
                    sb: po(e),
                    h: e.h,
                    hc: db("wgRewardTest") === "true" || ((te = e.L) == null ? void 0 : te.h) === !0,
                    disableInitialLoad: ((Df = e.L) == null ? void 0 : Df.disableInitialLoad) === !0,
                    xa: (Ef = e.L) == null ? void 0 : Ef.xa,
                    Ch: ((Ff = e.L) == null ? void 0 : Ff.Xe) !== "ongamerestore"
                },
                wa: {
                    Gc: () => w.Aa().ja,
                    Hc: () => w.Aa().J,
                    V: () => w.Aa().V,
                    ab: () => O.D
                },
                S: {
                    Z: k => {
                        var n, q;
                        ta(xa.Z, k, (n = b == null ? void 0 : b()) != null ? n : null, (q = xa.context) != null ? q : {});
                        Rc("rewarded-ready")
                    }
                    ,
                    nb: k => {
                        ta(xa.nb, ...dc(k));
                        Rc("rewarded-granted")
                    }
                    ,
                    lb: () => {
                        ta(xa.lb, ...dc());
                        Rc("rewarded-canceled")
                    }
                    ,
                    Ka: () => {
                        ta(xa.Ka, ...dc());
                        Ea.resume();
                        Rc("rewarded-closed")
                    }
                },
                Fh: k => {
                    qo(k)
                }
                ,
                l: (k, n) => window.setTimeout(k, n),
                A: k => {
                    window.clearTimeout(k)
                }
                ,
                Hd: () => {
                    aa("[afg] rewarded requested with consent unsettled")
                }
                ,
                g: (k, n) => {
                    aa(`[afg] rewarded: ${k}`, n)
                }
                ,
                Tb: k => {
                    Bd = k;
                    Dd()
                }
            }), Fd = null, Tc = [], ue = () => {
                for (let k of d(e.Bc))
                    if (Tc.includes(k))
                        return k;
                return null
            }
            , If = [], Gd = () => {
                for (let k of If.splice(0))
                    try {
                        k()
                    } catch (n) {}
            }
            , jh = k => {
                ue() !== null || rc.Md ? k() : If.push(k)
            }
            , Jf = k => e.fa && k.m ? {
                m: !0,
                reason: "delegated-to-parent"
            } : k, kh = (k, n) => {
                var q = G.Aa(k);
                Fd = n != null ? n : null;
                k = Hd("delegateAd", {
                    location: k,
                    tags: [...q],
                    maxAds: e.T
                });
                if (!k.m) {
                    Fd = null;
                    let H;
                    n == null || n({
                        reason: "stopped",
                        o: 0,
                        ha: 0,
                        ia: [k.reason],
                        j: (H = k.j) != null ? H : null
                    })
                }
                return k
            }
            , Hd = (k, n={}) => {
                var q = ue();
                if (q === null)
                    return aa("[afg] sandboxed, but no frame above this one is running the SDK \u2014 nothing will be shown"),
                    {
                        m: !1,
                        reason: "ads-disabled",
                        j: null
                    };
                var H;
                (H = lb) == null || H.send(q, k, n);
                return {
                    m: !0,
                    reason: "delegated-to-parent"
                }
            }
            , lh = Date.now();
            (Sc = $b( () => window.self, () => window.parent)) && z("[afg-gate] framed \u2014 waiting up to 2000ms for a frame above");
            var rc = Vn({
                Le: Sc,
                rb: (k, n) => {
                    window.setTimeout(k, n)
                }
                ,
                mc: 2E3,
                Ci: k => {
                    var n = Date.now() - lh;
                    z(k === "answer" ? `[afg-gate] settled by an answer after ${n}ms` : `[afg-gate] settled by timeout after ${n}ms \u2014 no frame above answered, capping locally from here`)
                }
            });
            rc.$f( () => {
                Gd()
            }
            );
            var Kf = (k, n) => {
                z(`[afg-gate] preroll clock: ${Fa.R}s since the last ad, shared interval ${Fa.lk}s`);
                return Jf(Sj(Fa.ka(k, n), n, "preroll"))
            }
              , ec = null
              , ve = !1
              , we = () => {
                var k;
                (k = ec) == null || k();
                ec = null;
                if (e.L === null)
                    z("[afg-rw] not requesting: options.rewarded is absent from this config");
                else if (e.L.Xe === "ongamerestore")
                    z('[afg-rw] not requesting: rewarded.init="ongamerestore" \u2014 v6 shows its opt-in overlay here instead, and that path is not ported');
                else if (e.fa && ue() === null && !rc.Md)
                    ve || (ve = !0,
                    z("[afg-rw] sandboxed \u2014 registered before any frame above answered, holding"),
                    jh( () => {
                        ve = !1;
                        we()
                    }
                    ));
                else {
                    var n = () => {
                        if (e.fa) {
                            var q = Hd("rewarded-init");
                            let H;
                            z(`[afg-rw] sandboxed \u2014 asked the frame above: ${q.m ? "sent" : (H = q.reason) != null ? H : "refused"}`);
                            return !0
                        }
                        q = Lb.request();
                        z(`[afg-rw] request: ${q.m ? "started" : q.reason}`);
                        return q.m || q.reason !== "consent-incomplete"
                    }
                    ;
                    n() || (z("[afg-rw] registered before consent settled \u2014 holding the request"),
                    ec = w.D( () => {
                        if (n()) {
                            var q;
                            (q = ec) == null || q();
                            ec = null
                        }
                    }
                    ))
                }
            }
              , sc = {
                ka: (k, n) => {
                    var q = k != null ? k : {};
                    if (rc.Md)
                        return Kf(q, n);
                    rc.$f( () => {
                        Kf(q, n)
                    }
                    );
                    return {
                        m: !1,
                        reason: "awaiting-parent",
                        j: null
                    }
                }
                ,
                $: (k, n) => Jf(Sj(Fa.$(k != null ? k : {}, n), n, "midroll")),
                sj: () => {
                    z(`[afg-rw] the game called requestReward()${e.fa ? " \u2014 sandboxed, so it goes to the frame above" : ""}`);
                    return e.fa ? Hd("rewarded-init").m ? {
                        m: !0
                    } : {
                        m: !1,
                        reason: "not-configured"
                    } : Lb.request()
                }
                ,
                Kj: () => {
                    z(`[afg-rw] the game called showRewardAd()${e.fa ? " \u2014 sandboxed, so the ad is on the screen of the frame above" : ""}`);
                    e.fa ? Hd("rewarded-show") : (Ea.pause(),
                    Lb.show())
                }
                ,
                Df: k => {
                    k = k != null ? k : {};
                    xa.Z = Yf(k.onReady);
                    xa.nb = Yf(k.onSuccess);
                    xa.lb = Yf(k.onFail);
                    xa.Ka = Yf(k.onClose);
                    xa.context = k.context;
                    z(`[afg-rw] the game registered reward callbacks \u2014 onReady=${xa.Z === void 0 ? "no" : "yes"} onSuccess=${xa.nb === void 0 ? "no" : "yes"} onFail=${xa.lb === void 0 ? "no" : "yes"} onClose=${xa.Ka === void 0 ? "no" : "yes"} context=${xa.context === void 0 ? "no" : "yes"} sandboxed=${e.fa}`);
                    we();
                    return () => Lb.request()
                }
                ,
                ping: k => {
                    Ea.ping(k)
                }
                ,
                Cf: k => {
                    Ea.D(k)
                }
                ,
                ah: k => {
                    m.debug({
                        gameEvent: typeof k === "string" ? k : null
                    });
                    return sc.$({})
                }
                ,
                rk: k => {
                    w.Ja(Vf({
                        J: "resolved",
                        V: k.V,
                        gb: k.Fc,
                        ub: k.ub,
                        tb: k.tb,
                        Db: "supplied",
                        ja: k.ja === "" ? "useractioncomplete" : k.ja
                    }))
                }
                ,
                aj: k => {
                    if (k === null || typeof k !== "object")
                        var n = Object.freeze({
                            Bb: null,
                            action: null,
                            label: null,
                            qd: null
                        });
                    else {
                        var q = (n = k.d) != null ? n : k.onSent, H, X, va;
                        n = Object.freeze({
                            Bb: Ah((H = k.a) != null ? H : k.category),
                            action: Ah((X = k.b) != null ? X : k.action),
                            label: Ah((va = k.c) != null ? va : k.label),
                            qd: typeof q === "function" ? q : null
                        })
                    }
                    k = n;
                    b: {
                        for (Ma of ["ga", "__GAtracker"])
                            if (q = window[Ma],
                            typeof q === "function") {
                                var Ma = q;
                                break b
                            }
                        Ma = null
                    }
                    if (Ma !== null)
                        try {
                            let fc = {
                                hitType: "event",
                                eventCategory: k.Bb,
                                eventAction: k.action,
                                eventLabel: k.label,
                                transport: "beacon"
                            };
                            k.qd !== null && (fc.hitCallback = k.qd);
                            Ma("send", fc)
                        } catch (fc) {
                            aa("[afg] the page's analytics rejected an event", fc)
                        }
                }
                ,
                wg: k => {
                    Tj(l, k === -2 ? "" : null)
                }
                ,
                oc: (k, n) => {
                    k = k === "preroll" || k === "midroll" ? k : null;
                    if (k === null || n === null || typeof n !== "object")
                        return !1;
                    var q = Object
                      , H = q.assign
                      , X = S.get(k);
                    var va = Zf(n.title);
                    var Ma = Zf(n.cta);
                    var fc = Zf(n.desc);
                    n = Zf(n.img);
                    var Uc = {};
                    va !== void 0 && (Uc.title = va);
                    Ma !== void 0 && (Uc.Fa = Ma);
                    fc !== void 0 && (Uc.Ra = fc);
                    n !== void 0 && (Uc.$c = n);
                    va = H.call(q, {}, X, Uc);
                    S.set(k, va);
                    W !== null && r && ba === k && W.update(va);
                    return !0
                }
                ,
                destroy: () => {
                    for (let Ma of re)
                        Ma.stop();
                    var k;
                    (k = se) == null || k.stop();
                    var n;
                    (n = lb) == null || n.stop();
                    var q;
                    (q = ec) == null || q();
                    ec = null;
                    Q("releasing the CMP", () => {
                        w.stop()
                    }
                    );
                    Q("releasing the rewarded slot", () => {
                        Lb.stop()
                    }
                    );
                    Q("releasing the game", () => {
                        Ea.destroy()
                    }
                    );
                    Q("releasing the install prompt", () => {
                        var Ma;
                        (Ma = zd) == null || Ma.destroy()
                    }
                    );
                    var H;
                    (H = zf) == null || H.stop();
                    Fa.D && (Q("giving the game back", () => {
                        t == null || t.D()
                    }
                    ),
                    Rj(),
                    e.Ib.fixedBody === !0 && Qj(!1),
                    Q("resuming the game", () => {
                        Ea.resume(!1)
                    }
                    ));
                    g = !0;
                    var X = Ad;
                    Ad = null;
                    Q("stopping the pod in flight", () => {
                        X == null || X.stop()
                    }
                    );
                    u();
                    Q("removing the ad container", () => {
                        if (l.Fg)
                            l.container.remove();
                        else {
                            for (let Ma of [...l.container.childNodes])
                                l.Hg.includes(Ma) || Ma.remove();
                            $f(l.container, !1);
                            l.container.removeAttribute("data-wg-owned")
                        }
                    }
                    );
                    var va;
                    (va = qe) == null || va.remove();
                    qe = null
                }
            };
            c == null || c(sc);
            c = !$b( () => window.self, () => window.parent);
            e.Th && !c && Fa.$();
            if (e.sg && c && !l.P.N) {
                let k = new ro({
                    now: () => Date.now(),
                    bi: (n, q) => {
                        var H = () => {
                            document.visibilityState === "hidden" ? n() : q()
                        }
                        ;
                        document.addEventListener("visibilitychange", H);
                        return () => {
                            document.removeEventListener("visibilitychange", H)
                        }
                    }
                    ,
                    l: (n, q) => window.setTimeout(n, q),
                    A: n => {
                        window.clearTimeout(n)
                    }
                    ,
                    dj: () => ({
                        Sj: r,
                        Da: Fa.D,
                        Ni: Fa.ag || e.md,
                        oh: window.location.href.includes("goog_rewarded")
                    }),
                    request: () => {
                        Fa.$({
                            u: !0
                        }, () => {
                            k.D()
                        }
                        )
                    }
                });
                k.start();
                se = k
            }
            if (e.C !== null && e.C.ie) {
                let k = Fh();
                zd = new so({
                    document,
                    window,
                    C: e.C,
                    hd: {
                        Sa: e.Sa,
                        Ha: to(e.Ha),
                        Vf: e.ib,
                        G: window.location.href
                    },
                    Aj: "serviceWorker" in navigator ? navigator.serviceWorker : null,
                    now: () => Date.now(),
                    bj: () => k.read("wgAppDismissed") === "1",
                    Ck: () => {
                        k.write("wgAppDismissed", "1")
                    }
                    ,
                    g: (n, q) => {
                        aa(`[afg] install: ${n}`, q);
                        m.debug({
                            install: n
                        })
                    }
                    ,
                    ji: n => {
                        m.debug({
                            install: n
                        })
                    }
                });
                zd.start()
            }
            c = $b( () => window.self, () => window.parent);
            lb = new uo({
                Eh: k => {
                    var n = q => {
                        k({
                            data: q.data,
                            origin: q.origin,
                            source: q.source
                        })
                    }
                    ;
                    window.addEventListener("message", n);
                    return () => {
                        window.removeEventListener("message", n)
                    }
                }
                ,
                rf: c ? d(e.Bc) : [],
                lg: null,
                Oi: (k, n, q) => {
                    k == null || k.postMessage(n, q)
                }
                ,
                trace: k => {
                    z(`[afg-bridge] ${k}`)
                }
                ,
                gh: un({
                    kb: () => Fa.kb,
                    hg: () => v || Bd,
                    pf: (k, n) => {
                        Fa.$h(k, n);
                        z(n ? "[afg-lta] the frame above has an ad on screen \u2014 this frame's prerolls and midrolls wait for it" : "[afg-lta] the frame above's ad is off screen")
                    }
                    ,
                    Hf: k => {
                        var n = Fa.kb;
                        Fa.Jh(k);
                        var q = Math.round((Date.now() - k) / 1E3);
                        z(Fa.kb === k ? `[afg-lta] adopted the frame above's clock \u2014 an ad ${q}s ago` : `[afg-lta] ignored ${k} (an ad ${q}s ago) \u2014 not newer than what this frame already holds (${n})`)
                    }
                    ,
                    kf: k => {
                        var n = Fd;
                        Fd = null;
                        Q("resuming the game after a delegated pod", () => {
                            Ea.resume(k.o > 0)
                        }
                        );
                        Q("answering a delegated midroll", () => {
                            var q;
                            n == null || n({
                                reason: (q = k.reason) != null ? q : "stopped",
                                o: k.o,
                                ha: 0,
                                ia: [],
                                j: k.j
                            })
                        }
                        )
                    }
                    ,
                    rj: k => {
                        var n = Fa.$({}, q => {
                            k({
                                o: q.o,
                                reason: q.reason,
                                j: null
                            })
                        }
                        );
                        n.m || k({
                            o: 0,
                            reason: n.reason,
                            j: n.j
                        })
                    }
                    ,
                    fc: () => {
                        t == null || t.restore({
                            dd: !0,
                            u: !1
                        })
                    }
                    ,
                    L: {
                        init: k => {
                            z("[afg-rw] a child frame asked us to run its rewarded ad");
                            Ed = k;
                            we()
                        }
                        ,
                        show: () => {
                            Ea.pause();
                            Lb.show()
                        }
                        ,
                        Z: () => {
                            var k, n;
                            ta(xa.Z, () => {
                                Lb.show()
                            }
                            , (k = b == null ? void 0 : b()) != null ? k : null, (n = xa.context) != null ? n : {})
                        }
                        ,
                        pd: () => {
                            ta(xa.nb, ...dc(null))
                        }
                        ,
                        hi: () => {
                            ta(xa.lb, ...dc())
                        }
                        ,
                        mb: () => {
                            ta(xa.Ka, ...dc());
                            Ea.resume()
                        }
                    },
                    Ih: () => ph,
                    fi: k => {
                        k <= ph || sj(k, Qf)
                    }
                    ,
                    ei: k => {
                        Tc.includes(k) || Tc.push(k);
                        Gd()
                    }
                    ,
                    zj: (k, n) => {
                        var q = {
                            Qa: k.dk,
                            fb: k.Oh
                        };
                        k = k.location === "preroll" ? Fa.ka(q, H => {
                            n({
                                o: H.o,
                                reason: H.reason,
                                j: null
                            })
                        }
                        ) : Fa.$(q, H => {
                            n({
                                o: H.o,
                                reason: H.reason,
                                j: null
                            })
                        }
                        );
                        k.m || n({
                            o: 0,
                            reason: k.reason,
                            j: k.j
                        })
                    }
                    ,
                    Pb: () => db("wgNetworkId"),
                    ca: () => {
                        var k = e.ca, n;
                        return typeof k === "number" ? k : (n = k[0]) != null ? n : 30
                    }
                    ,
                    Nd: () => e.Nd,
                    Bi: k => {
                        Af = k
                    }
                    ,
                    ti: k => {
                        Fa.Ja(k)
                    }
                    ,
                    xi: () => {
                        Fa.Dh();
                        rc.Gj()
                    }
                }),
                Vb: (k, n) => {
                    aa(`[afg] bridge refused ${n != null ? n : "a message"}: ${k}`)
                }
            });
            lb.start();
            if (c)
                for (let k of d(e.Bc))
                    Q("asking a frame above us when it last ran an ad", () => {
                        var n;
                        (n = lb) == null || n.send(k, "initHandshake", {});
                        var q;
                        (q = lb) == null || q.send(k, "getLta", {
                            networkId: db("wgNetworkId")
                        })
                    }
                    );
            e.zg && $b( () => window.self, () => window.parent) && Q("checking ads.txt", () => {
                vo(e, l, xf)
            }
            );
            for (let[k,n] of [[e.jk, () => {
                sc.ka()
            }
            ], [e.ik, () => {
                sc.$({})
            }
            ]]) {
                if (k === null)
                    continue;
                c = new wo({
                    qa: k,
                    find: q => document.querySelector(q),
                    l: (q, H) => window.setTimeout(q, H),
                    A: q => {
                        window.clearTimeout(q)
                    }
                    ,
                    Fi: () => {
                        Q("the publisher trigger", n)
                    }
                    ,
                    wi: q => {
                        aa(`[afg] no element matched the configured trigger "${q}"`)
                    }
                });
                c.start();
                re.push(c)
            }
            b !== void 0 && m.xd(b());
            Xc(document, "wgSdkReady");
            e.autoplay && (Qc = !0,
            Q("the autoplay preroll", () => {
                sc.ka()
            }
            ),
            Qc = !1);
            return sc
        }
        function Gh(a, b=!1) {
            var c = a.config
              , d = a.B
              , e = a.S
              , f = a.location
              , g = a.Rf;
            if (Uj.jb)
                if (b || (Q("showing the ad container", () => {
                    $f(d.container, !0)
                }
                ),
                Q("sizing the ad container", () => {
                    ag(a)
                }
                )),
                b || Be(d.slot())) {
                    var h = () => {}
                      , l = () => !1
                      , m = xo(a, D => {
                        h(D)
                    }
                    , () => l())
                      , t = yo(a)
                      , w = zo(a);
                    if (!a.u) {
                        var y;
                        (y = a.Uf) == null || y.pause()
                    }
                    Q("showing the ad container", () => {
                        $f(a.B.container, !0)
                    }
                    );
                    Q("sizing the ad container", () => {
                        ag(a)
                    }
                    );
                    Q("placing the ad container", () => {
                        Vj(a)
                    }
                    );
                    Q("applying the publisher class", () => {
                        Ao(a)
                    }
                    );
                    var I = Object.assign({}, a, {
                        H: m,
                        rg: t,
                        Cb: w,
                        ne: D => {
                            h = D
                        }
                        ,
                        me: D => {
                            l = D
                        }
                        ,
                        da: D => {
                            m == null || m.destroy();
                            t == null || t.destroy();
                            w.destroy();
                            a.da(D)
                        }
                    });
                    y = c.Oa;
                    var M = f === "midroll" && y && c.Sh;
                    if (f === "preroll" ? !c.Yf || c.Ui : !c.Zf || c.Ti || y) {
                        let D = Bo(a, M)
                          , P = Object.assign({}, I, {
                            Rb: D,
                            da: E => {
                                D == null || D.destroy();
                                I.da(E)
                            }
                        })
                          , u = () => {
                            bg(P, {
                                Kb: a.yj ? !1 : Kd(),
                                Ia: !1
                            })
                        }
                        ;
                        M && D !== null ? Co(D, 3, u) : (f === "midroll" && y && z("[afg-tags] midrollCountdown is off \u2014 the midroll starts unannounced"),
                        f === "preroll" ? D == null || D.show("Preparing game") : D == null || D.show(),
                        u())
                    } else {
                        var G = null
                          , ja = null
                          , Aa = Wj(a.B.container, "wgLoadingScreen", 2147483001, !a.Lf)
                          , r = Object.assign({}, I, {
                            Rb: Aa,
                            Yh: !0,
                            da: D => {
                                var P;
                                (P = G) == null || P.destroy();
                                G = null;
                                Aa == null || Aa.destroy();
                                a.Ff(!1, null);
                                I.da(D)
                            }
                        })
                          , v = (y = c.Bd && f === "preroll") && c.yk
                          , C = D => {
                            f === "preroll" ? (e.Cd(null),
                            Xc(window, "wgPrerollPlay"),
                            e.Ud()) : e.Sd();
                            a.pj();
                            if (ja !== null) {
                                if (!ja.uf()) {
                                    let P;
                                    (P = G) == null || P.If(!0)
                                }
                            } else
                                bg(r, {
                                    kc: () => G,
                                    Kb: D.xg,
                                    Ia: !0
                                })
                        }
                          , R = () => {
                            if (G === null)
                                if (f === "preroll" && c.Ef && Q("taking the game down for the splash", () => g == null ? void 0 : g.remove()) === !0 && g !== null && g.shape !== null && g.shape !== "inline" && Xc(document, "wgIframeRemoved"),
                                Q("sizing the splash container", () => {
                                    ag(a)
                                }
                                ),
                                Q("placing the splash container", () => {
                                    Vj(a)
                                }
                                ),
                                G = Do({
                                    B: d,
                                    config: c,
                                    S: e,
                                    location: f,
                                    od: C
                                }),
                                G === null) {
                                    let D = ja;
                                    D !== null ? D.uf() : bg(I, {
                                        Kb: Kd(),
                                        Ia: !1
                                    })
                                } else
                                    Q("patching the splash from the live config", () => {
                                        var D;
                                        if ((D = G) != null) {
                                            var P = D.update
                                              , u = Xj("gameName")
                                              , E = Xj("gameDescription");
                                            if (f === "preroll")
                                                a: {
                                                    try {
                                                        let S, ba, O, ca = oh((O = (S = window.preroll) == null ? void 0 : (ba = S.config) == null ? void 0 : ba.gameThumbnail) != null ? O : null);
                                                        var W = ca === "" ? void 0 : ca;
                                                        break a
                                                    } catch (S) {}
                                                    W = void 0
                                                }
                                            else
                                                W = void 0;
                                            P.call(D, {
                                                title: u,
                                                Ra: E,
                                                $c: W
                                            })
                                        }
                                    }
                                    ),
                                    a.Ff(!0, G),
                                    f === "preroll" ? e.Vd() : e.Td()
                        }
                        ;
                        y && (ja = bg(r, {
                            kc: () => G,
                            Kb: Kd(),
                            Ia: !0,
                            Yc: !0,
                            Sb: () => {
                                if (v)
                                    R();
                                else {
                                    let D;
                                    (D = G) == null || D.If(!1)
                                }
                            }
                        }));
                        v || R()
                    }
                } else {
                    z("[afg-slot] the ad container has no area \u2014 waiting up to 2000ms for it to be laid out");
                    let D = Date.now();
                    Wn({
                        measure: () => d.slot(),
                        observe: P => {
                            var u = window.ResizeObserver;
                            if (u === void 0)
                                return () => {}
                                ;
                            var E = new u(P);
                            E.observe(d.container);
                            return () => {
                                E.disconnect()
                            }
                        }
                        ,
                        rb: (P, u) => window.setTimeout(P, u),
                        cancel: P => {
                            window.clearTimeout(P)
                        }
                        ,
                        mc: 2E3,
                        Gi: (P, u) => {
                            var E = Date.now() - D;
                            z(P === "ready" ? `[afg-slot] laid out after ${E}ms \u2014 ${u.width}x${u.height}` : `[afg-slot] still ${u.width}x${u.height} after ${E}ms \u2014 proceeding without it`)
                        }
                    }, () => {
                        Gh(a, !0)
                    }
                    )
                }
            else
                Uj.load().then(D => {
                    D === "failed" ? (aa("[afg] the IMA SDK could not be loaded \u2014 no ad can be requested"),
                    a.da({
                        reason: "stopped",
                        o: 0,
                        ha: 0,
                        ia: ["ima-unavailable"]
                    })) : Gh(a, b)
                }
                )
        }
        function Do(a) {
            var b = a.B
              , c = a.config
              , d = a.od;
            try {
                let e = document.createElement("div");
                e.className = a.location === "preroll" ? "wgSplashPreroll" : "wgSplashMidroll";
                e.setAttribute("data-wg-owned", "true");
                e.style.cssText = `display:block;position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;cursor:pointer;z-index:2147483000;background-color:${c.background.container};`;
                b.container.appendChild(e);
                let f = Lm({
                    host: e,
                    location: a.location,
                    content: {
                        location: a.location,
                        Sa: c.Sa,
                        Ug: document.title,
                        Zd: c.Zd,
                        Sc: c.Sc,
                        Qh: Eo(),
                        Ha: c.Ha,
                        vd: c.vd,
                        Jc: c.Jc,
                        Ab: c.Ab
                    },
                    O: c.Zj,
                    Ya: c.Xj,
                    ib: c.ib,
                    Y: b.P.Y,
                    oa: window.location.origin,
                    Pd: c.Yj,
                    Ec: c.Tj,
                    X: c.Uj,
                    Ua: c.Vj,
                    ed: c.Wj,
                    Na: c.Na,
                    pb: c.bh,
                    qb: c.qb,
                    od: d
                }, window);
                return Object.assign({}, f, {
                    destroy() {
                        f.destroy();
                        e.remove()
                    }
                })
            } catch (e) {
                return aa("[afg] the splash could not be built", e),
                null
            }
        }
        function Eo() {
            var a, b, c, d = (c = (b = (a = document.querySelector('meta[name="Description"]')) != null ? a : document.querySelector('meta[name="description"]')) != null ? b : document.querySelector('meta[property="og:description"]')) == null ? void 0 : c.getAttribute("content");
            return typeof d === "string" && d.trim() !== "" ? d : null
        }
        function bg(a, b) {
            var c = a.config
              , d = a.B
              , e = a.ya
              , f = a.S
              , g = a.Rf
              , h = a.Nj
              , l = a.Fc
              , m = a.location
              , t = a.da
              , w = b.Kb
              , y = b.Ia;
            Q("saving the game", () => g == null ? void 0 : g.save());
            a.location === "preroll" && a.config.Ef && Q("taking the game down", () => g == null ? void 0 : g.remove()) === !0 && g !== null && g.shape !== null && g.shape !== "inline" && Xc(document, "wgIframeRemoved");
            var I = null, M = null, G, ja = new Fo(Object.assign({}, {
                ya: e,
                createSession: hl(),
                pi: () => {
                    Q("counting the H5", () => {
                        var r;
                        (r = a.H) == null || r.eh()
                    }
                    );
                    Q("taking the caption down for the H5", () => {
                        var r;
                        (r = a.Rb) == null || r.aa()
                    }
                    )
                }
                ,
                oi: () => {
                    Q("taking the counter down after the H5", () => {
                        var r;
                        (r = a.H) == null || r.ge()
                    }
                    );
                    Q("covering the gap after the H5", () => {
                        var r, v;
                        (r = b.kc) == null || (v = r.call(b)) == null || v.Jf(!1);
                        if (a.Yh === !0) {
                            let C;
                            (C = a.Rb) == null || C.Lj()
                        }
                    }
                    )
                }
                ,
                ui: () => {
                    Q("revealing the promoted ad", () => {
                        var r = d.container.querySelector(".wgAdPrefetch");
                        if (r !== null) {
                            for (let v of d.container.querySelectorAll(".wgAdPromoted"))
                                v.remove();
                            r.classList.remove("wgAdPrefetch");
                            r.classList.add("wgAdPromoted");
                            r.removeAttribute("aria-hidden");
                            r.style.visibility = "visible";
                            r.style.pointerEvents = ""
                        }
                    }
                    );
                    Q("re-pointing the ad chrome", () => {
                        var r = I;
                        if (r !== null) {
                            M = r;
                            var v;
                            (v = a.H) == null || v.le( () => r.vf());
                            var C;
                            (C = a.ne) == null || C.call(a, D => {
                                r.setVolume(D)
                            }
                            );
                            var R;
                            (R = a.me) == null || R.call(a, () => r.resume())
                        }
                    }
                    )
                }
                ,
                Wg: ( () => {
                    var r = Oj().AdEvent.Type;
                    return {
                        m: String(r.STARTED),
                        ended: [String(r.COMPLETE), String(r.SKIPPED)]
                    }
                }
                )(),
                ye: (r, v) => {
                    var C = new Go(Oj(),{
                        bb: v === "prefetch" ? Ho(d) : d.container,
                        Ph: () => {
                            var R = d.slot();
                            return Be(R) ? R : null
                        }
                        ,
                        ob: r
                    });
                    if (v === "primary") {
                        M = C;
                        let R;
                        (R = a.H) == null || R.le( () => C.vf());
                        let D;
                        (D = a.ne) == null || D.call(a, u => {
                            C.setVolume(u)
                        }
                        );
                        let P;
                        (P = a.me) == null || P.call(a, () => C.resume())
                    } else
                        I = C;
                    return C
                }
                ,
                Kf: (r, v, C) => {
                    var R, D = d.G, P = v === "midroll" ? c.Lc : c.Ae;
                    var u = P !== null && P !== "" ? P : null;
                    P = d.P.N;
                    var E = (R = c.na) != null ? R : "iu=/1002212";
                    R = db("wgNetworkId");
                    var W = h.Se()
                      , S = !c.$i
                      , ba = l.Aa().jf;
                    W = S || ba === 1 ? null : W;
                    r = Qi(r, {
                        location: v,
                        G: D,
                        we: u,
                        Oc: null,
                        Ve: !1,
                        Pb: R,
                        na: E,
                        lc: null,
                        pe: !1,
                        Zb: C
                    });
                    r = Yg(r, `content_cat=${Oi(P).join(",")}`);
                    C = Nn(r, W);
                    r = {
                        Zh: Date.now()
                    };
                    r.Pi && !vd(C, "ppid") && (C = wd(C, "ppid", r.Pi),
                    C = Yg(C, "wgppid=true"));
                    r.Qi && !vd(C, "ppsj") && (C = wd(C, "ppsj", r.Qi));
                    r = Xg(C, "correlator", `${r.Zh}000000`);
                    z(`[afg-tags] ${v} request ${r}`);
                    return r
                }
                ,
                slot: d.slot(),
                Ma: c.Ma,
                K: d.K,
                h: c.h,
                sc: ((G = a.Ak) == null ? void 0 : G.call(a)) === !1 ? void 0 : c.sc,
                nd: () => {
                    var r;
                    (r = a.nd) == null || r.call(a)
                }
            }, a.Ta === null ? {} : {
                Ta: a.Ta
            }, b.Sb === void 0 ? {} : {
                Sb: b.Sb
            }, {
                nj: (r, v) => {
                    Io(a, r, v);
                    if (r.af) {
                        let C;
                        (C = a.ci) == null || C.call(a)
                    }
                }
                ,
                Di: r => {
                    !Number.isInteger(r) || r < 0 ? r = null : (r = c.Lg[r],
                    r = r === void 0 || r === "" ? null : r);
                    if (r !== null) {
                        let v, C;
                        (v = b.kc) == null || (C = v.call(b)) == null || C.Ej(r)
                    }
                }
                ,
                oj: r => {
                    if (r.type === "click") {
                        try {
                            Xn(Fh(), r.contentType, r.isSkippable)
                        } catch (v) {
                            aa("[afg] could not record the click", v)
                        }
                        if (r.Va) {
                            Q("pausing the clicked ad", () => {
                                var R;
                                (R = M) == null || R.pause()
                            }
                            );
                            let v;
                            (v = a.H) == null || v.vc(!0);
                            let C;
                            (C = a.Cb) == null || C.xe(Yj(r.contentType, r.Va), r.M)
                        }
                    }
                    if (r.type === "start") {
                        let v, C;
                        (v = b.kc) == null || (C = v.call(b)) == null || C.Jf(!1)
                    }
                    Jo(a, r);
                    Ko(a, r);
                    Lo(a, r, a.Cb);
                    f.uc({
                        type: r.type,
                        P: d.P.kind,
                        event: r.event,
                        ra: r.ra,
                        Va: r.Va,
                        adTagUrl: r.adTagUrl
                    })
                }
            }));
            Q("handing out the pod", () => {
                var r;
                (r = a.mi) == null || r.call(a, ja)
            }
            );
            var Aa = rl({
                observe: r => {
                    window.addEventListener("resize", r);
                    for (let v of Zj)
                        document.addEventListener(v, r);
                    return () => {
                        window.removeEventListener("resize", r);
                        for (let v of Zj)
                            document.removeEventListener(v, r)
                    }
                }
                ,
                rb: r => {
                    window.requestAnimationFrame(r)
                }
                ,
                ij: () => {
                    Q("resizing the game container", () => {
                        Mo(a)
                    }
                    );
                    Q("resizing the ad container", () => {
                        ag(a, !1)
                    }
                    );
                    Q("checking the H5 still fits", () => {
                        var r;
                        (r = a.Ta) == null || r.be()
                    }
                    )
                }
                ,
                measure: () => {
                    var r = d.P.N, v, C, R;
                    var D = !((R = (C = (v = document.fullscreenElement) != null ? v : document.webkitFullscreenElement) != null ? C : document.mozFullScreenElement) != null ? !R : !document.msFullscreenElement);
                    return {
                        N: r,
                        nh: D,
                        viewport: {
                            width: document.documentElement.clientWidth,
                            height: document.documentElement.clientHeight
                        },
                        Ig: d.slot()
                    }
                }
                ,
                apply: r => {
                    Q("resizing the ad", () => {
                        ja.resize(r.width, r.height)
                    }
                    )
                }
            });
            ja.D(Object.assign({}, {
                kind: m,
                location: m,
                nc: {
                    source: "host",
                    uk: w
                },
                ta: {
                    ac: c.he,
                    Y: d.P.Y,
                    $e: w,
                    Oa: c.Oa,
                    Gb: c.Gb,
                    Ia: y,
                    ke: c.pg && Kd()
                },
                ua: Ti({
                    u: a.u,
                    T: a.T,
                    la: c.la
                })
            }, b.Yc === !0 ? {
                Yc: !0
            } : {}, {
                da: r => {
                    Aa();
                    var v = pl(r, {
                        location: m,
                        slot: d.slot()
                    });
                    v !== null && aa(v);
                    if (r.reason === "waterfall-timeout") {
                        let P;
                        z(`[afg-tags] ${m} gave up: waterfallTimeout (${(P = c.sc) != null ? P : 0}ms) ran out with nothing shown, after ${r.ha} tag(s)`)
                    }
                    var C;
                    if (((C = a.Dj) == null ? void 0 : C.call(a)) === !0)
                        t(r);
                    else {
                        v = Q("putting the game back", () => g == null ? void 0 : g.restore({
                            dd: m === "midroll",
                            u: a.u
                        }));
                        m === "preroll" && (v == null ? void 0 : v.Id) === !0 && Q("playing the jingle", () => {
                            var P;
                            (P = a.Ah) == null || P.play()
                        }
                        );
                        (v == null ? void 0 : v.Id) === !0 && v.shape !== null && v.shape !== "inline" && Xc(document, "wgIframeRestored");
                        v === void 0 || v.Id || v.reason === null || v.reason === "not-removed" || aa(`[afg] the game was not restored: ${v.reason}`);
                        var R;
                        f.Gd({
                            P: d.P.kind,
                            F: (R = d.F()) != null ? R : d.container
                        });
                        m === "midroll" ? f.U() : Xc(document, "wgContentResumePreroll");
                        Q("putting the ad container away", () => {
                            $f(d.container, !1);
                            for (let P of d.container.querySelectorAll(".wgAdPromoted"))
                                P.remove()
                        }
                        );
                        var D;
                        (D = a.Uf) == null || D.resume(r.o > 0);
                        t(r);
                        Xc(document, "wgContentRestored")
                    }
                }
            }));
            return ja
        }
        function Sj(a, b, c) {
            a.m || z(`[afg-gate] ${c} refused: ${a.reason}${typeof a.j === "number" && a.j > 0 ? ` \u2014 ${a.j}s left` : ""}`);
            var d;
            if (d = !a.m && b)
                d = a.reason,
                d = d === "awaiting-parent" ? !1 : d === "too-soon-after-ad" || d === "ad-playing-above" ? c === "midroll" : !0;
            d && b({
                reason: "stopped",
                o: 0,
                ha: 0,
                ia: [a.reason]
            });
            return a
        }
        function Fh() {
            return {
                read: a => {
                    try {
                        return window.localStorage.getItem(a)
                    } catch (b) {
                        return null
                    }
                }
                ,
                write: (a, b) => {
                    try {
                        window.localStorage.setItem(a, b)
                    } catch (c) {}
                }
            }
        }
        function po(a) {
            var b = new Map, c;
            if (((c = a.L) == null ? void 0 : c.tk) !== !1) {
                let d, e;
                c = (e = (d = a.L) == null ? void 0 : d.eb) != null ? e : a.Lc;
                if (c !== null && c !== void 0 && c !== "")
                    for (let[f,g] of new URLSearchParams(c))
                        b.set(f, g)
            }
            b.set("content_cat", Oi(Ri(navigator.userAgent, {
                maxTouchPoints: navigator.maxTouchPoints
            }).N));
            return b
        }
        function db(a) {
            a = window[a];
            return typeof a === "string" && a !== "" ? a : null
        }
        function No() {
            var a, b = (a = document.querySelector('[property*="wgp:site_url"]')) == null ? void 0 : a.content;
            return typeof b === "string" && b !== "" ? b : null
        }
        function qo(a) {
            var b = ak();
            if (b !== null)
                z("[afg-rw] gpt.js is loaded already"),
                a(b);
            else {
                bk() !== null && z("[afg-rw] googletag is on the page but only as the command stub \u2014 gpt.js has not finished loading");
                document.querySelector('script[src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"]') === null ? (z("[afg-rw] injecting gpt.js"),
                b = document.createElement("script"),
                b.async = !0,
                b.addEventListener("error", () => {
                    z("[afg-rw] gpt.js FAILED to load \u2014 blocked, most likely")
                }
                ),
                b.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js",
                document.head.appendChild(b)) : z("[afg-rw] gpt.js is already on the page \u2014 waiting for it to finish");
                var c = 0
                  , d = () => {
                    var e = ak();
                    e !== null ? (z(`[afg-rw] gpt.js finished loading after ${c}ms`),
                    a(e)) : (c += 100,
                    c < 1E4 ? window.setTimeout(d, 100) : (z("[afg-rw] gpt.js never finished loading in 10000ms \u2014 no rewarded ad can be requested from this frame"),
                    a(null)))
                }
                ;
                window.setTimeout(d, 100)
            }
        }
        function ak() {
            var a = bk();
            return a === null ? null : a.Ek === !0 || typeof a.pubads === "function" ? a : null
        }
        function Ch() {
            try {
                return window.location.href
            } catch (a) {
                return ""
            }
        }
        function bk() {
            var a = window.googletag;
            return a === null || typeof a !== "object" ? null : typeof a.cmd === "object" ? a : null
        }
        function Yf(a) {
            if (typeof a === "function")
                return a;
            if (typeof a === "string" && a.trim() !== "")
                return a.trim()
        }
        function mo(a, b, c) {
            var d = window, e = Bn({
                xh: b.G.includes("wgplayground.com"),
                W: $b( () => window.self, () => window.parent),
                referrer: document.referrer,
                userAgent: navigator.userAgent,
                sh: d.wgEnableIphoneH5 === !0
            }), f, g, h, l, m = Fn({
                Ji: e,
                enabled: d.wgh5enabled === !0,
                tag: (f = db("wgh5TagName")) != null ? f : b.K === null ? null : `/1002212/WGH5/${b.K}`,
                position: (g = db("wgh5position")) != null ? g : db("H5POSITION"),
                $a: (l = (h = db("wgh5pointer")) != null ? h : db("H5POINTER")) != null ? l : "/WGAFGPRE/"
            });
            if (m === null)
                return null;
            var t, w = Hn((t = db("wgh5type")) != null ? t : db("H5TYPE")), y = $b( () => window.self, () => window.parent);
            return new Oo({
                tg: () => m,
                format: () => w,
                qh: () => {
                    var I, M;
                    return new Po({
                        sa: Zg(m.tag, db("wgNetworkId"), (I = a.na) != null ? I : "iu=/1002212"),
                        format: w,
                        eb: (M = a.Lc) != null ? M : a.Ae,
                        ae: d.wgPpid !== !1,
                        yd: () => c.Se(),
                        container: () => b.container,
                        bf: y,
                        kj: () => y ? {
                            width: document.documentElement.clientWidth,
                            height: document.documentElement.clientHeight
                        } : b.slot(),
                        ba: `wgH5${Math.random().toString(36).slice(2, 10)}`,
                        De: document,
                        hb: window,
                        G: Ln({
                            href: window.location.href,
                            referrer: document.referrer,
                            gf: db("wgNetworkDomainName"),
                            Nf: No()
                        }),
                        mobile: b.P.N,
                        Pc: In(w, d.wgh5fallback),
                        now: () => Date.now(),
                        l: (G, ja) => window.setTimeout(G, ja),
                        A: G => {
                            window.clearTimeout(G)
                        }
                        ,
                        g: (G, ja) => {
                            aa(`[afg] h5: ${G}`, ja)
                        }
                        ,
                        trace: G => {
                            z(`[afg-h5] ${G}`)
                        }
                    })
                }
                ,
                Ub: I => {
                    hc("[afg] h5", I.kind)
                }
            })
        }
        function Lo(a, b, c) {
            c !== void 0 && (b.type === "start" ? c.xe(Yj(b.contentType, b.Va), b.M) : b.type !== "complete" && b.type !== "skip" && b.type !== "allAdsCompleted" || c.mk())
        }
        function Yj(a, b) {
            return b ? "video" : Oc(a, "image") ? "image" : Oc(a, "text") ? "text" : "other"
        }
        function Ko(a, b) {
            var c = a.rg;
            c !== null && c !== void 0 && (b.type === "start" ? jl(b.contentType) ? (c.show(),
            Q("clearing the creative background for an audio ad", () => {
                for (let d of a.B.container.querySelectorAll("video, lima-video"))
                    d.style.backgroundColor = "transparent"
            }
            )) : c.aa() : b.type === "pause" ? c.jc(!0) : b.type === "resume" ? c.jc(!1) : ck.has(b.type) && c.aa())
        }
        function Jo(a, b) {
            if (b.type === "start") {
                var c;
                (c = a.Rb) == null || c.aa()
            }
            c = a.H;
            c !== null && c !== void 0 && (b.type === "start" ? c.jg({
                Oe: !1,
                Xa: bh({
                    u: a.u,
                    Ca: a.config.Ca,
                    T: a.T,
                    la: a.config.la
                }),
                Qe: !0,
                Pe: !1,
                je: !1,
                xf: !1
            }, b.isSkippable) : b.type === "pause" ? c.vc(!0) : b.type === "resume" ? c.vc(!1) : ck.has(b.type) && c.ge())
        }
        function yo(a) {
            try {
                let b = document.createElement("div");
                b.className = "wgAudioBg";
                b.setAttribute("data-wg-owned", "true");
                a.B.container.insertBefore(b, a.B.container.firstChild);
                return Um({
                    host: b
                }, document)
            } catch (b) {
                return aa("[afg] could not build the audio ad background", b),
                null
            }
        }
        function xo(a, b, c) {
            try {
                let d = document.createElement("div");
                d.className = "wgAdOverlay";
                d.setAttribute("data-wg-owned", "true");
                a.B.container.appendChild(d);
                let e = Sm({
                    host: d,
                    Xa: bh({
                        u: a.u,
                        Ca: a.config.Ca,
                        T: a.T,
                        la: a.config.la
                    }),
                    Of: Rm({
                        mh: Kd(),
                        cd: a.B.P.cd,
                        rh: Kd(),
                        ac: a.config.he
                    }),
                    Ei: f => {
                        b(f ? 1 : 0)
                    }
                    ,
                    zi: () => {
                        c() || aa("[afg] the ad could not be resumed")
                    }
                }, document);
                return new Qo({
                    H: e,
                    Xa: bh({
                        u: a.u,
                        Ca: a.config.Ca,
                        T: a.T,
                        la: a.config.la
                    }),
                    l: (f, g) => window.setInterval(f, g),
                    A: f => {
                        window.clearInterval(f)
                    }
                })
            } catch (d) {
                return aa("[afg] the ad overlay could not be built", d),
                null
            }
        }
        function Ho(a) {
            var b = a.container.querySelector(".wgAdPrefetch");
            if (b !== null)
                return b;
            b = document.createElement("div");
            b.className = "wgAdPrefetch";
            b.setAttribute("data-wg-owned", "true");
            b.setAttribute("aria-hidden", "true");
            b.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100%;visibility:hidden;pointer-events:none;";
            a.container.appendChild(b);
            return b
        }
        function Io(a, b, c) {
            if (jn(b.errorCode, a.config.Hh))
                try {
                    let d = a.B.container, e = a.B.F(), f = a.B.slot(), g, h = kn({
                        error: {
                            type: b.type,
                            text: (g = b.message) != null ? g : "",
                            errorCode: b.errorCode,
                            rc: b.rc,
                            message: b.message
                        },
                        eg: !1,
                        intersectionRatio: null,
                        bb: {
                            rect: dk(d),
                            Bg: [...d.classList]
                        },
                        F: {
                            rect: e === null ? ek : dk(e)
                        },
                        userAgent: navigator.userAgent,
                        screen: {
                            width: window.screen.width,
                            height: window.screen.height
                        },
                        G: a.B.G,
                        referrer: document.referrer,
                        adTagUrl: c != null ? c : "",
                        slot: {
                            cf: {
                                width: f.width,
                                height: f.height
                            },
                            hf: {
                                width: f.width,
                                height: f.height
                            }
                        },
                        Bd: !1,
                        version: "9.0.0",
                        ra: null
                    }), l = `p=${JSON.stringify(h)}&g=afgerrnew`, m, t;
                    ((t = (m = navigator).sendBeacon) == null ? void 0 : t.call(m, "https://collect.wgplayer.com/gic", l)) !== !0 && fetch("https://collect.wgplayer.com/gic", {
                        method: "POST",
                        body: l,
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        keepalive: !0,
                        mode: "no-cors"
                    }).catch( () => {}
                    )
                } catch (d) {
                    aa("[afg] the error report could not be sent", d)
                }
        }
        function dk(a) {
            try {
                let b = a.getBoundingClientRect();
                return {
                    width: b.width,
                    height: b.height
                }
            } catch (b) {
                return ek
            }
        }
        function vo(a, b, c) {
            try {
                var d = (new URL(document.referrer)).hostname || null
            } catch (e) {
                d = null
            }
            d = gn({
                Zi: d,
                Og: window.location.hostname,
                referrer: document.referrer
            });
            fetch(d, {
                credentials: "omit"
            }).then(e => e.json()).then(e => {
                var f = a.Xg
                  , g = e == null ? void 0 : e.status;
                g === -1 ? e = Object.freeze({
                    kind: "block-ad",
                    sk: f
                }) : g === -2 ? (f = Object,
                e = e == null ? void 0 : e.lines,
                e = f.freeze.call(f, {
                    kind: "block-game",
                    Nb: typeof e === "string" && e.trim() !== "" ? e : null
                })) : e = Object.freeze({
                    kind: typeof g === "number" ? "ok" : "unknown"
                });
                e.kind !== "block-ad" || e.sk ? e.kind === "block-game" && (c.Ac = !0,
                Tj(b, e.Nb)) : c.Ac = !0
            }
            ).catch( () => {}
            )
        }
        function Xj(a) {
            try {
                let b, c, d = (b = window.preroll) == null ? void 0 : (c = b.config) == null ? void 0 : c[a];
                return typeof d === "string" && d.trim() !== "" ? d : void 0
            } catch (b) {}
        }
        function Zf(a) {
            return typeof a === "string" && a.trim() !== "" ? a : void 0
        }
        function Co(a, b, c) {
            var d = b;
            z(`[afg-tags] counting the player down from ${b}`);
            a.show("Game will continue after a short ad break.", d);
            var e = window.setInterval( () => {
                --d;
                d <= 0 ? (window.clearInterval(e),
                c()) : a.show("Game will continue after a short ad break.", d)
            }
            , 1E3)
        }
        function Bo(a, b) {
            var c;
            return Wj((c = a.B.F()) != null ? c : a.B.container, "wgLoadingAnim", 2147482E3, !a.Lf, b ? "wgAdNotice" : void 0)
        }
        function Eh(a) {
            return a.id !== "" ? `#${a.id}` : a.className !== "" ? `.${String(a.className).split(" ")[0]}` : a.tagName.toLowerCase()
        }
        function Wj(a, b, c, d, e) {
            try {
                a: {
                    let l = a;
                    for (let m = 0; l !== null && m < 4; m += 1) {
                        let t = l.getBoundingClientRect();
                        if (t.width > 0 && t.height > 0) {
                            var f = l;
                            break a
                        }
                        l = l.parentElement
                    }
                    f = a
                }
                f !== a && aa(`[afg] "${Eh(a)}" has no size, so the loading overlay was drawn on "${Eh(f)}" instead`);
                let g = document.createElement("div");
                g.className = b;
                g.setAttribute("data-wg-owned", "true");
                g.style.cssText = `position:absolute;inset:0;pointer-events:none;z-index:${c};`;
                f.style.position === "" && (f.style.position = "relative");
                f.appendChild(g);
                let h;
                e !== void 0 && (h = document.createElement("div"),
                h.className = e,
                h.setAttribute("data-wg-owned", "true"),
                h.style.cssText = `position:absolute;inset:0;pointer-events:none;z-index:${c + 1};`,
                f.appendChild(h));
                return Vm({
                    host: g,
                    suppressed: d,
                    ef: h
                }, document)
            } catch (g) {
                return aa("[afg] the loading overlay could not be built", g),
                null
            }
        }
        function Xc(a, b, c=null) {
            Ej(a, b, c, d => {
                aa(`[afg] a "${b}" listener threw`, d)
            }
            )
        }
        function Tj(a, b) {
            try {
                let d, e = (d = a.F()) != null ? d : a.container;
                if (e.querySelector(".wgBlockGame") === null) {
                    var c = document.createElement("div");
                    c.className = "wgBlockGame";
                    c.setAttribute("data-wg-owned", "true");
                    c.style.cssText = "position:absolute;inset:0;z-index:2147483000;";
                    e.style.position === "" && (e.style.position = "relative");
                    e.appendChild(c);
                    hn({
                        host: c,
                        Nb: b
                    }, document).show()
                }
            } catch (d) {
                aa("[afg] the block-game screen could not be shown", d)
            }
        }
        function zo(a) {
            var b = dn(a.config.Cb)
              , c = null
              , d = null
              , e = null
              , f = () => {
                d !== null && (window.clearTimeout(d),
                d = null);
                e !== null && (window.clearInterval(e),
                e = null);
                var g;
                (g = c) == null || g.remove();
                c = null
            }
            ;
            return {
                xe(g, h) {
                    f();
                    if (fn({
                        kind: g,
                        M: h,
                        Mb: a.config.Mb
                    })) {
                        try {
                            let m = document.createElement("div");
                            m.className = "wgNoClick";
                            m.setAttribute("data-wg-owned", "true");
                            m.setAttribute("aria-hidden", "true");
                            m.style.cssText = "position:absolute;inset:0;z-index:2147483002;background:transparent;";
                            a.B.container.appendChild(m);
                            c = m
                        } catch (m) {
                            aa("[afg] the no-click layer could not be built", m);
                            return
                        }
                        var l = Date.now();
                        d = window.setTimeout(f, Cj(g, b));
                        g === "video" && (e = window.setInterval( () => {
                            var m, t, w = (t = (m = a.H) == null ? void 0 : m.Mi) != null ? t : null;
                            (Date.now() - l >= Cj(g, b) || w !== null && w > b.Xf) && f()
                        }
                        , 250))
                    }
                },
                mk: f,
                destroy: f
            }
        }
        function ag(a, b=!0) {
            var c = xj(a.config.Ib, {
                N: a.B.P.N
            })
              , d = a.B.container;
            d.style.width = "";
            d.style.height = "";
            var e = a.B.slot();
            var f = e.width;
            e = e.height;
            var g = c.height === "100%" && !c.Rc, h = c.width === "100%" && c.Zg && f > 0, l;
            f = Object.freeze({
                width: h ? `${f}px` : c.width,
                height: c.Rc && e > 0 ? `${e}px` : c.height,
                minWidth: h ? "100%" : null,
                minHeight: g && !c.N ? "100%" : null,
                maxHeight: c.maxHeight === null || c.N ? g && !c.N ? "100%" : null : c.maxHeight,
                position: (l = c.Wh) != null ? l : "absolute",
                zIndex: c.zIndex,
                padding: c.Rc ? null : "inherit"
            });
            d.style.zIndex = String(f.zIndex);
            d.style.backgroundColor = "rgba(0,0,0,1)";
            f.width !== null && (d.style.width = f.width);
            f.height !== null && (d.style.height = f.height);
            f.minWidth !== null && (d.style.minWidth = f.minWidth);
            f.minHeight !== null && (d.style.minHeight = f.minHeight);
            f.maxHeight !== null && (d.style.maxHeight = f.maxHeight);
            f.position !== null && (d.style.position = f.position);
            f.padding !== null && (d.style.padding = f.padding);
            b && (a = a.B.slot(),
            (a.width <= 0 || a.height <= 0) && aa(`[afg] the ad container measures ${a.width}x${a.height} \u2014 nothing can render in it and no ad will be requested`))
        }
        function Ao(a) {
            a.config.df !== null && a.B.container.classList.add(a.config.df);
            Ro(a);
            a = [a.config.Mg, a.config.Ng].filter(c => c !== null).join("\n");
            if (a !== "" && document.getElementById("wgCustomCss") === null) {
                var b = document.createElement("style");
                b.id = "wgCustomCss";
                b.textContent = a;
                document.head.appendChild(b)
            }
        }
        function Rj() {
            if (De !== null && Xf !== null) {
                var a = Xf
                  , b = De;
                a.style.position = b.position;
                a.style.minHeight = b.minHeight;
                a.style.width = b.width;
                a.style.height = b.height;
                a.style.maxWidth = b.maxWidth;
                b.fh || a.classList.remove("wgContentSafeSize")
            }
            Wc = cg = Xf = De = null
        }
        function Dh() {
            return {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
            }
        }
        function Mo(a) {
            var b, c = (b = cg) != null ? b : Wc;
            if (c !== null) {
                var d = a.B.F();
                if (d !== null && d.tagName.toLowerCase() !== "body") {
                    var e = d.style.width
                      , f = d.style.height
                      , g = d.style.minHeight;
                    d.style.width = "";
                    d.style.height = "";
                    d.style.minHeight = "";
                    a = d.getBoundingClientRect();
                    c = Ym({
                        La: c.La,
                        tf: c.viewport,
                        Ob: {
                            width: a.width,
                            height: a.height
                        },
                        viewport: Dh()
                    });
                    a = () => {
                        d.style.width = e;
                        d.style.height = f;
                        d.style.minHeight = g
                    }
                    ;
                    c === null ? a() : (Wc === null ? d.style.minHeight = g : (a = `${Math.round(c.height)}px`,
                    d.style.minHeight = a,
                    Wc = {
                        minHeight: a,
                        La: Wc.La,
                        viewport: Wc.viewport
                    }),
                    cg === null ? (d.style.width = e,
                    d.style.height = f) : (a = window.getComputedStyle(d),
                    c = zj(c, {
                        left: vc(a.paddingLeft),
                        right: vc(a.paddingRight),
                        top: vc(a.paddingTop),
                        bottom: vc(a.paddingBottom)
                    }),
                    c === null ? (d.style.width = e,
                    d.style.height = f) : (d.style.width = c.width,
                    d.style.height = c.height,
                    d.style.maxWidth = c.maxWidth)))
                }
            }
        }
        function Ro(a) {
            var b = a.B.F();
            if (b !== null && !a.config.Xh && b.tagName.toLowerCase() !== "body") {
                a = b.getBoundingClientRect();
                var c = window.getComputedStyle(b)
                  , d = zj({
                    width: a.width,
                    height: a.height
                }, {
                    left: vc(c.paddingLeft),
                    right: vc(c.paddingRight),
                    top: vc(c.paddingTop),
                    bottom: vc(c.paddingBottom)
                });
                d !== null && (cg = {
                    La: {
                        width: a.width,
                        height: a.height
                    },
                    viewport: Dh()
                },
                b.classList.add("wgContentSafeSize"),
                b.style.width = d.width,
                b.style.height = d.height,
                b.style.maxWidth = d.maxWidth,
                c.position === "static" && (b.style.position = "relative"))
            }
        }
        function vc(a) {
            a = Number.parseInt(a, 10);
            return Number.isFinite(a) ? a : 0
        }
        function to(a) {
            a = oh(a);
            return a === "https://afg.wgplayer.com/default_afg_image_400_q70.webp" ? null : a
        }
        function Qj(a) {
            var b = document.body;
            b && (a ? (Ee === null && (Ee = b.style.position),
            b.style.position = "fixed") : Ee !== null && (b.style.position = Ee,
            Ee = null))
        }
        function ho(a, b) {
            if (!a.md || a.Ie.length === 0)
                return b;
            var c = d => d.filter( (e, f) => !a.Ie.includes(f));
            return {
                ea: c(b.ea),
                U: c(b.U)
            }
        }
        function go(a) {
            var b;
            a = (b = a == null ? void 0 : a.querySelector("iframe")) == null ? void 0 : b.getAttribute("src");
            if (!a)
                return null;
            try {
                return (new URL(a,window.location.href)).host
            } catch (c) {
                return null
            }
        }
        function Vj(a) {
            var b = a.B.container;
            a.location !== "midroll" ? (b.style.top = "",
            b.style.left = "",
            So(a)) : (b.style.position = $b( () => window.self, () => window.parent) ? "fixed" : "absolute",
            b.style.top = "0",
            b.style.left = "0")
        }
        function So(a) {
            var b = a.B.container;
            b.style.position === "absolute" && (b.style.top = "0",
            b.style.left = "0",
            a = a.B.F(),
            a !== null && getComputedStyle(a).position === "static" && (a.style.position = "relative"))
        }
        function $f(a, b) {
            a.style.display = b ? "block" : "none"
        }
        function $n(a) {
            var b = a.containerId === null ? null : document.getElementById(a.containerId);
            if (b !== null)
                return b.setAttribute("data-wg-owned", "true"),
                {
                    container: b,
                    qe: !1
                };
            a.containerId !== null && aa(`[afg] ad container "#${a.containerId}" is not in the document \u2014 building one`);
            b = document.createElement("div");
            b.id = `wgAd${Math.random().toString(36).slice(2, 10)}`;
            b.setAttribute("data-wgplayer", "true");
            b.setAttribute("data-wg-owned", "true");
            b.classList.add("google-anno-skip");
            b.style.display = "none";
            var c, d;
            ((d = (c = Wf(a.F)) != null ? c : document.body) != null ? d : document.documentElement).appendChild(b);
            return {
                container: b,
                qe: !0
            }
        }
        function To(a, b=[]) {
            var c = new Set(b)
              , d = 0
              , e = !1
              , f = () => {
                if (!e) {
                    var g = a.cj();
                    g = typeof g !== "string" || g === "" ? null : c.has(g) ? null : g;
                    if (g !== null && (c.add(g),
                    a.ad(g))) {
                        let h;
                        (h = a.di) == null || h.call(a, g)
                    }
                    d += 1;
                    d >= 30 || a.l(f, 1E3)
                }
            }
            ;
            a.l(f, 1E3);
            return () => {
                e = !0
            }
        }
        function fk(a) {
            try {
                let b, c = (b = a("preroll")) == null ? void 0 : b.config;
                return c !== null && typeof c === "object" ? c : null
            } catch (b) {
                return null
            }
        }
        function gk(a) {
            if (a === null)
                return !1;
            if (a.sandboxed === !0 || a.noAd === !0 || Hh(a.adTagURL) || Hh(a.midrollAdTagURL))
                return !0;
            a = a.rewarded;
            return typeof a === "object" && a !== null && Hh(a.adTagURL)
        }
        function Hh(a) {
            return typeof a === "string" ? a !== "" : Array.isArray(a) && a.length > 0
        }
        function Uo(a) {
            return a.ng ? "already-running" : a.dg ? "aborted" : a.config === null ? "waiting" : gk(a.config) || a.Hi === !0 ? a.Xc === !1 ? "document-not-ready" : a.config.launchEvent === "none" ? "launch-event-none" : "started" : "config-not-ready"
        }
        function Vo(a) {
            var b = 0
              , c = 0
              , d = null
              , e = g => {
                if (g !== d) {
                    d = g;
                    var h;
                    (h = a.Ub) == null || h.call(a, g)
                }
            }
              , f = () => {
                var g;
                if (((g = a.bd) == null ? void 0 : g.call(a)) === !0) {
                    var h;
                    (h = a.Ub) == null || h.call(a, "page-called-init");
                    return "page-called-init"
                }
                g = fk(a.pa);
                var l;
                h = Uo({
                    config: g,
                    dg: a.pa("wgAbortInit") === !0,
                    ng: Wo(a.pa, g, a.Ii),
                    Hi: c + 1 >= 300,
                    Xc: (l = a.Xc) == null ? void 0 : l.call(a)
                });
                h === "started" && g !== null && a.start(g);
                if (h === "config-not-ready")
                    return c += 1,
                    a.l( () => {
                        f()
                    }
                    , 100),
                    e(h),
                    h;
                if (h === "document-not-ready") {
                    c += 1;
                    if (c >= 300)
                        return e("gave-up"),
                        "gave-up";
                    a.l( () => {
                        f()
                    }
                    , 100);
                    e(h);
                    return h
                }
                if (h === "waiting" || h === "already-running") {
                    b += 1;
                    if (b >= 30)
                        return e("gave-up"),
                        "gave-up";
                    a.l( () => {
                        f()
                    }
                    , 1E3)
                }
                e(h);
                return h
            }
            ;
            return f()
        }
        function Wo(a, b, c) {
            b = b == null ? void 0 : b.loaderObjectName;
            if (typeof b !== "string" || b === "")
                return !1;
            a = a(b);
            return a !== void 0 && a !== c
        }
        function Xo(a, b) {
            var c = dg(a), d, e;
            return Object.freeze({
                Dc: c != null ? c : dg(b),
                options: (e = (d = eg(c === null ? a : null)) != null ? d : eg(b)) != null ? e : Object.freeze({})
            })
        }
        function Yo(a, b, c) {
            var d = dg(a), e = d != null ? d : dg(b), f, g;
            a = (g = (f = eg(d === null ? a : null)) != null ? f : eg(b)) != null ? g : Object.freeze({});
            return Object.freeze({
                Dc: e,
                options: a,
                u: c === !0 || a.isAutoMidroll === !0
            })
        }
        function dg(a) {
            if (typeof a === "function")
                return a;
            if (Array.isArray(a)) {
                let[b,c] = a;
                return typeof b !== "function" ? null : (...d) => {
                    b.apply(c, d)
                }
            }
            return null
        }
        function eg(a) {
            return a === null || typeof a !== "object" || Array.isArray(a) ? null : a
        }
        function Zo(a, b) {
            if (b === "file:")
                return !0;
            var c = a.toLowerCase();
            return c === "" ? !1 : $o.includes(c) ? !0 : ap.some(d => c.endsWith(d))
        }
        function fg(a, b, c) {
            a = a.setTimeout;
            if (typeof a !== "function")
                return 0;
            try {
                return a(b, c)
            } catch (d) {
                return 0
            }
        }
        function hk(a, b) {
            var c = a.MutationObserver;
            a = a.document;
            if (typeof c !== "function" || a === void 0)
                return () => {}
                ;
            var d = new c( () => {
                b()
            }
            ), e;
            d.observe((e = a.body) != null ? e : a.documentElement, {
                childList: !0,
                subtree: !0
            });
            return () => {
                d.disconnect()
            }
        }
        function bp(a) {
            try {
                let b = a.navigation;
                return b === null || b === void 0 ? null : typeof b.addEventListener === "function" && typeof b.removeEventListener === "function" ? b : null
            } catch (b) {
                return null
            }
        }
        function cp(a=null) {
            var b = null
              , c = null
              , d = null
              , e = null
              , f = null
              , g = null
              , h = !1
              , l = null
              , m = null
              , t = null
              , w = null
              , y = null
              , I = null
              , M = Ld({
                m: !1,
                reason: "no-request-yet"
            })
              , G = () => {
                if (b === null)
                    throw Error("afg9: call init(config) before requesting an ad");
                return b
            }
              , ja = u => {
                M = Ld(u);
                return u.m ? !0 : u.reason === "awaiting-parent" || u.reason === "awaiting-init"
            }
              , Aa = () => {
                var u = a === null ? null : fk(E => a[E]);
                return u !== null && gk(u) ? u : f
            }
              , r = () => {
                a !== null && a.wgNoAfg === !0 ? hc("[afg] the page navigated, and window.wgNoAfg is set \u2014 not starting again") : (hc("[afg] the page navigated \u2014 starting the SDK again for the new view"),
                P.init(Aa()))
            }
              , v = () => {
                var u = I;
                I = null;
                u !== null && (Mb("[afg] a game asked for an ad before the SDK started, and it never did \u2014 answering so the game is not left waiting"),
                u(dp))
            }
              , C = u => {
                w = null;
                var E, W = b = (E = ao(u, () => P, S => {
                    b = S
                }
                )) != null ? E : b;
                u = Ce(u);
                m = u.qa;
                t = u.element;
                u = (S, ba) => {
                    S !== null && S.Fb !== W && (S.Fb = W,
                    ba(S.value))
                }
                ;
                u(c, S => {
                    W.ping(S)
                }
                );
                u(d, S => {
                    W.Cf(S)
                }
                );
                u(e, S => {
                    w = W.Df(S)
                }
                );
                I !== null && (u = I,
                I = null,
                u(W))
            }
              , R = (u, E) => {
                var W = !1
                  , S = 0;
                g = () => {
                    W = !0;
                    g = null
                }
                ;
                Mb(`[afg] the content container "${E}" is not on this page \u2014 the SDK starts when it appears, and not before`);
                var ba = () => {
                    if (!W)
                        if (Ce(u).Ed) {
                            g = null;
                            hc(`[afg] the content container "${E}" is on the page now \u2014 starting`);
                            try {
                                C(u)
                            } catch (O) {
                                Mb(`[afg] init failed: ${ik(O)}`)
                            }
                        } else
                            S += 1,
                            S >= 300 ? (g = null,
                            Mb(`[afg] the content container "${E}" never appeared \u2014 the SDK did not start`),
                            v()) : fg(a != null ? a : {}, ba, 100)
                }
                ;
                fg(a != null ? a : {}, ba, 100)
            }
              , D = u => {
                if (l === null && a !== null) {
                    var E = wf(u);
                    if (E.zh && !E.wh) {
                        var W = a.history;
                        if (W !== void 0 && typeof W.pushState === "function" && typeof a.addEventListener === "function") {
                            var S = () => {
                                var O, ca;
                                return String((ca = (O = a.location) == null ? void 0 : O.href) != null ? ca : "")
                            }
                              , ba = new ep({
                                Kc: S,
                                Gg: () => Ce(Aa()).Ed,
                                Pa: E.zk,
                                now: () => Date.now(),
                                l: (O, ca) => fg(a, O, ca),
                                A: O => {
                                    var ca = a.clearTimeout;
                                    if (typeof ca === "function")
                                        try {
                                            ca(O)
                                        } catch (Ea) {}
                                }
                                ,
                                ai: O => hk(a, O),
                                gi: () => {
                                    var O = wf(Aa()).S.zd;
                                    if (O !== void 0 && (O = a[O],
                                    typeof O === "function"))
                                        try {
                                            O.call(void 0)
                                        } catch (ca) {
                                            aa('[afg] callback "preSpaCallback" threw', ca)
                                        }
                                }
                                ,
                                gj: r,
                                ii: () => {
                                    hc("[afg] the page navigated to a view with no game container \u2014 the SDK stops until one appears");
                                    var O;
                                    (O = g) == null || O();
                                    O = b;
                                    b = null;
                                    if (O !== null)
                                        try {
                                            O.destroy()
                                        } catch (ca) {}
                                }
                            });
                            l = ba;
                            E = bp(a);
                            hc(`[afg] watching this page's navigation through ${E === null ? "history" : "the Navigation API"}, and its game container`);
                            u = Ce(u);
                            m = u.qa;
                            t = u.element;
                            hk(a, () => {
                                if (g === null && m !== null) {
                                    var O = Wf(m);
                                    O !== t && (t = O,
                                    ba.Ja() && hc(`[afg] the game container "${m}" was ${O === null ? "removed" : "replaced"} \u2014 treating it as a navigation`))
                                }
                            }
                            );
                            ql({
                                history: W,
                                ee: a,
                                navigation: E
                            }, () => {
                                if (ba.D()) {
                                    var O = a.document;
                                    O !== void 0 && Ej(O, "wgNavigation", S(), ca => {
                                        aa('[afg] a "wgNavigation" listener threw', ca)
                                    }
                                    )
                                }
                            }
                            )
                        }
                    }
                }
            }
              , P = {
                version: "9.0.0",
                build: "893eb5e+dirty-2026-10-02T11:43Z",
                decideAudibility: u => {
                    u = u != null ? u : {};
                    var E = u.publisherWantsMuted === !0
                      , W = u.isIos === !0
                      , S = u.iosAudioPermission === !0;
                    var ba = u.podKind;
                    if (ba !== "preroll" && ba !== "midroll" && ba !== "rewarded")
                        throw new TypeError(`unknown pod kind ${JSON.stringify(ba)} \u2014 expected preroll, midroll or rewarded`);
                    u = Li({
                        ac: E,
                        Y: W,
                        $e: S,
                        wf: ba,
                        Oa: u.autoplayMidroll === !0,
                        Gb: u.forceAutoplay === !0,
                        qc: u.userGestureAtTrigger === !0,
                        Ia: u.gatedOnUserGesture === !0,
                        ke: u.arrivedByGesture === !0
                    });
                    return {
                        muted: u.muted,
                        autoplay: u.autoplay,
                        reason: u.reason,
                        audibilityIsPromised: u.qg
                    }
                }
                ,
                buildTagUrl: (u, E) => Qi(String(u), fp(E)),
                init: u => {
                    var E;
                    (E = g) == null || E();
                    h = !1;
                    if (b !== null) {
                        try {
                            b.destroy()
                        } catch (ca) {}
                        b = null
                    }
                    var W = () => {
                        var ca = u == null ? void 0 : u.loaderObjectName;
                        return typeof ca === "string" ? ca : Ih(a != null ? a : {})
                    }
                      , S = [];
                    E = () => {
                        if (a === null)
                            return !0;
                        var ca = W();
                        typeof ca === "string" && ca !== "" && S.push(ca);
                        return Jh(a, P, ca)
                    }
                    ;
                    var ba = E();
                    try {
                        f = u;
                        D(u);
                        var O = Ce(u);
                        m = O.qa;
                        O.qa === null ? (h = !0,
                        Mb("[afg] the config names no contentContainer \u2014 the SDK needs to know where the game is, and does not start without it"),
                        v()) : O.Ed ? C(u) : R(u, O.qa)
                    } catch (ca) {
                        throw Mb(`[afg] init failed: ${ik(ca)}`),
                        ca;
                    } finally {
                        ba || a === null || (ba = E());
                        ba || (O = W(),
                        Mb(typeof O === "string" ? `[afg] the SDK could not be installed as "${O}" \u2014 it is only reachable as "afg9" for now, and it keeps looking` : '[afg] no loaderObjectName was configured, so the SDK is only reachable as "afg9" \u2014 set it in the config passed to init, or on window.preroll.config'));
                        let ca;
                        (ca = y) == null || ca();
                        y = a === null ? null : To({
                            cj: () => Ih(a),
                            ad: Ea => Jh(a, P, Ea),
                            l: (Ea, Qc) => fg(a, Ea, Qc),
                            di: Ea => {
                                hc(`[afg] also installed as "${Ea}" \u2014 the page asked for that name after init, so the SDK answers to both`)
                            }
                        }, S)
                    }
                }
                ,
                fetchAd: (u, E) => {
                    u = Xo(u, E);
                    var W = {
                        Za: jk(u.options.noloading)
                    }
                      , S = Kh(u.Dc);
                    return b === null ? (I = ba => {
                        ba.ka(W, S)
                    }
                    ,
                    ja({
                        m: !1,
                        reason: "awaiting-init"
                    })) : ja(b.ka(W, S))
                }
                ,
                refetchAd: (u, E, W) => {
                    var S = Yo(u, E, W)
                      , ba = {
                        u: S.u,
                        Za: jk(S.options.noloading)
                    }
                      , O = Kh(S.Dc);
                    if (b === null)
                        return I = ca => {
                            ca.oc("midroll", S.options);
                            ca.$(ba, O)
                        }
                        ,
                        ja({
                            m: !1,
                            reason: "awaiting-init"
                        });
                    b.oc("midroll", S.options);
                    return ja(b.$(ba, O))
                }
                ,
                lastOutcome: () => M,
                requestReward: () => Ld(G().sj()),
                showRewardAd: () => {
                    G().Kj()
                }
                ,
                registerRewardCallbacks: u => {
                    e = {
                        value: u,
                        Fb: b
                    };
                    b !== null && (w = b.Df(u));
                    return () => w === null ? Ld({
                        m: !1,
                        reason: "not-configured"
                    }) : Ld(w())
                }
                ,
                ping: u => {
                    c = {
                        value: u,
                        Fb: b
                    };
                    var E;
                    (E = b) == null || E.ping(u)
                }
                ,
                registerGameControls: u => {
                    d = {
                        value: u,
                        Fb: b
                    };
                    var E;
                    (E = b) == null || E.Cf(u)
                }
                ,
                GameEvent: u => Ld(G().ah(u)),
                log: u => {
                    try {
                        var E = sh(window.localStorage.getItem("gapi"))
                    } catch (W) {
                        E = 0
                    }
                    E >= 1 && console.log(u)
                }
                ,
                getVersion: () => "9.0.0",
                fetchPreroll: (u, E) => u ? G().ka({}, Kh(E)).m : (aa("[afg] fetchPreroll needs the user event as its first argument"),
                !1),
                updateConsent: (u, E, W, S, ba) => {
                    G().rk({
                        Fc: u === !0,
                        V: typeof E === "boolean" ? E : null,
                        tb: W != null ? W : null,
                        ub: typeof S === "string" ? S : "",
                        ja: typeof ba === "string" ? ba : ""
                    })
                }
                ,
                pushEvent: u => {
                    G().aj(u)
                }
                ,
                blockGame: u => {
                    G().wg(u)
                }
                ,
                updateSplash: (u, E) => G().oc(u, E)
            };
            return {
                zb: P,
                bd: () => b !== null || g !== null || h,
                cg: v
            }
        }
        function Kh(a) {
            if (typeof a === "function")
                return b => {
                    var c = b.o > 0, d;
                    b = {
                        reason: b.reason,
                        delivered: b.o,
                        tagsTried: b.ha,
                        violations: [...b.ia],
                        waitSeconds: (d = b.j) != null ? d : null
                    };
                    return a(c, b)
                }
        }
        function ik(a) {
            if (a instanceof Error)
                return `${a.name}: ${a.message}`;
            try {
                return String(a)
            } catch (b) {
                return "an error that could not be described"
            }
        }
        function jk(a) {
            return typeof a === "boolean" ? a : void 0
        }
        function Ld(a) {
            var b, c;
            return {
                started: a.m,
                reason: (b = a.reason) != null ? b : null,
                waitSeconds: (c = a.j) != null ? c : null
            }
        }
        function fp(a) {
            a = a != null ? a : {};
            var b = d => typeof d === "string" && d.length > 0 ? d : null, c;
            return {
                location: a.location === "midroll" ? "midroll" : "preroll",
                G: typeof a.pageUrl === "string" ? a.pageUrl : "",
                we: b(a.configuredParams),
                Oc: b(a.extraParams),
                Ve: a.inHousePromo === !0,
                Pb: b(a.networkId),
                na: (c = b(a.networkIdentifier)) != null ? c : "iu=/1002212",
                lc: b(a.tagnameSuffix),
                pe: a.audioAdEnabled === !0,
                Zb: a.playMuted !== !1
            }
        }
        function Jh(a, b, c) {
            return typeof c === "string" && gp.test(c) && c !== "afg9" ? a[c] === b ? !0 : a[c] !== void 0 ? (aa(`[afg] "${c}" is already taken on this page, so the SDK is only reachable as "afg9". Whatever holds that name was there first and has not been replaced.`),
            !1) : hp(a, b, c) : !1
        }
        function hp(a, b, c) {
            try {
                return Object.defineProperty(a, c, {
                    configurable: !0,
                    enumerable: !0,
                    get: () => b,
                    set: d => {
                        d !== b && Mb(`[afg] something tried to replace "${c}" \u2014 refused, so the page can still reach the SDK by the name it was given`)
                    }
                }),
                !0
            } catch (d) {
                return a[c] = b,
                a[c] === b
            }
        }
        function Ih(a) {
            a: {
                try {
                    let c, d;
                    var b = (d = (c = a.preroll) == null ? void 0 : c.config) == null ? void 0 : d.loaderObjectName;
                    break a
                } catch (c) {}
                b = void 0
            }
            return typeof b === "string" ? b : a.wgLoaderObjectName
        }
        var Wk = ["iu=/52117743", "iu=/5023680"]
          , Zk = /(ipad|(tablet(?!.*pc))|(android(?!.*mobile))|(windows(?!.*phone)(.*touch(?!.*tablet\spc)))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/
          , $k = /(mobi|ipod|phone|blackberry|opera mini|fennec|minimo|symbian|psp|nintendo ds|archos|skyfire|puffin|blazer|bolt|gobrowser|iris|maemo|semc|teashark|uzard|android)/
          , Yk = /iphone|ipad|ipod/
          , al = /iphone|ipod/
          , Xk = /macintosh/
          , bl = /^((?!chrome|android).)*safari/
          , dl = ["wgAds.js", "/afg/v6/"]
          , fl = /(?:\/\/|\.)(?:st|afg)\.wgplayer\.com\/(.+)\/js/i;
        class Pj {
            constructor(a={}) {
                wc.add(this);
                Lh.set(this, new Map([["preroll", []], ["midroll", []]]));
                Yc.set(this, null);
                Md.set(this, void 0);
                var b;
                me(this, Md, (b = a.trace) != null ? b : null, "f")
            }
            reset(a) {
                me(this, Lh, new Map([["preroll", [...a.ea]], ["midroll", [...a.U]]]), "f");
                me(this, Yc, null, "f");
                var b;
                (b = bb(this, Md, "f")) == null || b.call(this, `seeded \u2014 preroll: ${a.ea.length} tag(s) [${a.ea.map(sf).join(", ")}], midroll: ${a.U.length} tag(s) [${a.U.map(sf).join(", ")}]`)
            }
            size(a) {
                return bb(this, wc, "m", Zc).call(this, a).length
            }
            sf(a) {
                var b;
                return (b = bb(this, wc, "m", Zc).call(this, a)[0]) != null ? b : null
            }
            Qf(a) {
                var b = bb(this, wc, "m", Zc).call(this, a).shift();
                if (b === void 0) {
                    let d;
                    (d = bb(this, Md, "f")) == null || d.call(this, `${a} \u2014 none left, the waterfall is exhausted`);
                    return null
                }
                me(this, Yc, b, "f");
                var c;
                (c = bb(this, Md, "f")) == null || c.call(this, `${a} -> ${sf(b)} (${bb(this, wc, "m", Zc).call(this, a).length} left after this)`);
                return b
            }
            hj(a) {
                if (bb(this, Yc, "f") !== null) {
                    var b;
                    (b = bb(this, Md, "f")) == null || b.call(this, `${a} <- ${sf(bb(this, Yc, "f"))} put back, it delivered`);
                    bb(this, wc, "m", Zc).call(this, a).unshift(bb(this, Yc, "f"));
                    me(this, Yc, null, "f")
                }
            }
            push(a, b, c={}) {
                a = bb(this, wc, "m", Zc).call(this, a);
                if (c.after !== void 0) {
                    let d = a.findIndex(e => e.includes(c.after));
                    d !== -1 && a.splice(d + 1, 0, b)
                } else
                    c.Fk === !0 ? a.unshift(b) : a.push(b)
            }
            Aa(a) {
                return Object.freeze([...bb(this, wc, "m", Zc).call(this, a)])
            }
        }
        var Lh = new WeakMap;
        var Yc = new WeakMap;
        var Md = new WeakMap;
        var wc = new WeakSet;
        var Zc = function(a) {
            var b = bb(this, Lh, "f").get(a);
            if (b === void 0)
                throw Error(`TagQueue: unknown location "${a}"`);
            return b
        };
        var kk = ["created", "requested", "loaded", "playing", "ended"];
        class Nd extends Error {
            constructor(a) {
                super(a);
                this.name = "AdSessionError"
            }
        }
        class il {
            constructor(a, b, c) {
                Mh.add(this);
                Nb.set(this, "created");
                xc.set(this, null);
                Nh.set(this, null);
                Oh.set(this, []);
                lk.set(this, !1);
                Ph.set(this, 0);
                this.id = a;
                this.kind = b;
                this.nc = Object.freeze(Object.assign({}, c))
            }
            get J() {
                return La(this, Nb, "f")
            }
            get dd() {
                return this.kind === "midroll"
            }
            get Ba() {
                return La(this, Nh, "f")
            }
            get ia() {
                return [...La(this, Oh, "f")]
            }
            get ta() {
                if (La(this, xc, "f") === null)
                    throw new Nd(`session ${this.id}: audibility read before it was decided \u2014 call decideAudibility() when the request is built`);
                return La(this, xc, "f")
            }
            Be(a) {
                if (La(this, xc, "f") !== null)
                    throw new Nd(`session ${this.id}: audibility already decided (${La(this, xc, "f").reason}) \u2014 it is frozen for the life of the pod`);
                Nc(this, xc, Li(Object.assign({}, a, {
                    wf: this.kind,
                    qc: this.nc.uk
                })), "f");
                La(this, xc, "f")
            }
            Nh(a) {
                if (La(this, xc, "f") === null)
                    throw new Nd(`session ${this.id}: requested before deciding audibility \u2014 the request carries the declaration, so it cannot be built without one`);
                if (La(this, Nb, "f") === "ended")
                    throw new Nd(`session ${this.id}: requested after the pod ended`);
                Nc(this, Nb, "requested", "f");
                Nc(this, Ph, La(this, Ph, "f") + 1, "f");
                Nc(this, Nh, a, "f")
            }
            Lh() {
                La(this, Mh, "m", mk).call(this, "loaded")
            }
            Mh(a) {
                La(this, Mh, "m", mk).call(this, "playing");
                if (a !== void 0) {
                    Nc(this, lk, !0, "f");
                    var b = this.ta
                      , c = a.muted || a.volume === 0;
                    (a = !b.muted && c ? `declared audible (${b.reason}) but playback began silent (muted=${a.muted}, volume=${a.volume})` : b.muted && !c ? `declared muted (${b.reason}) but playback began audible (volume=${a.volume})` : null) && La(this, Oh, "f").push(a)
                }
            }
            end() {
                La(this, Nb, "f") !== "ended" && Nc(this, Nb, "ended", "f")
            }
        }
        var Nb = new WeakMap;
        var xc = new WeakMap;
        var Nh = new WeakMap;
        var Oh = new WeakMap;
        var lk = new WeakMap;
        var Ph = new WeakMap;
        var Mh = new WeakSet;
        var mk = function(a) {
            if (La(this, Nb, "f") === "ended")
                throw new Nd(`session ${this.id}: "${a}" after the pod ended`);
            var b = kk.indexOf(La(this, Nb, "f"));
            if (kk.indexOf(a) <= b)
                throw new Nd(`session ${this.id}: cannot move from "${La(this, Nb, "f")}" to "${a}" within one attempt \u2014 start a new attempt with markRequested()`);
            Nc(this, Nb, a, "f")
        };
        var Qh = Object.freeze({
            DISABLED: 0,
            ENABLED: 1,
            INSECURE: 2
        });
        class Go {
            constructor(a, b) {
                $c.add(this);
                qb.set(this, void 0);
                vb.set(this, void 0);
                Rh.set(this, null);
                gg.set(this, null);
                Od.set(this, null);
                Va.set(this, null);
                Fe.set(this, null);
                rb.set(this, !1);
                pb(this, qb, a, "f");
                pb(this, vb, b, "f")
            }
            requestAds(a, b) {
                if (L(this, rb, "f"))
                    throw Error("ImaAdapter: requestAds() after destroy() \u2014 build a new adapter");
                var c = a.ta;
                var d = b.slot;
                if (!(d.width > 0 && d.height > 0))
                    throw new RangeError(`ad slot has no area (${d.width}x${d.height}) \u2014 IMA selects a creative by slot size, so this request would ask for nothing`);
                d = b.Ba;
                d = d.startsWith("//") ? `https:${d}` : d;
                var e = b.slot.width;
                var f = b.slot.height;
                var g = b.slot.width;
                var h = b.slot.height;
                var l = c.autoplay;
                c = c.muted;
                a: switch (b.Ma) {
                case "disabled":
                    var m = Qh.DISABLED;
                    break a;
                case "enabled":
                    m = Qh.ENABLED;
                    break a;
                default:
                    m = Qh.INSECURE
                }
                var t = L(this, $c, "m", ip).call(this);
                t.getSettings().setVpaidMode(m);
                m = new (L(this, qb, "f").AdsRequest);
                m.adTagUrl = d;
                m.linearAdSlotWidth = e;
                m.linearAdSlotHeight = f;
                m.nonLinearAdSlotWidth = g;
                m.nonLinearAdSlotHeight = h;
                m.forceNonLinearFullSlot = !0;
                m.vastLoadTimeout = 1E4;
                m.setAdWillAutoPlay(l);
                m.setAdWillPlayMuted(c);
                pb(this, Fe, a, "f");
                pb(this, Rh, b.slot, "f");
                a.Nh(d);
                t.requestAds(m)
            }
            start() {
                var a = L(this, Va, "f")
                  , b = L(this, Rh, "f");
                if (!L(this, rb, "f") && a !== null && b !== null) {
                    var c, d = (c = Pc( () => {
                        var e, f, g;
                        return (g = (f = (e = L(this, vb, "f")).Ph) == null ? void 0 : f.call(e)) != null ? g : null
                    }
                    , null)) != null ? c : b;
                    a.init(d.width, d.height, L(this, qb, "f").ViewMode.NORMAL);
                    b = L(this, Fe, "f");
                    if (b !== null)
                        try {
                            a.setVolume(b.ta.muted ? 0 : 1)
                        } catch (e) {}
                    a.start()
                }
            }
            resize(a, b) {
                var c = L(this, Va, "f");
                if (!L(this, rb, "f") && c !== null)
                    try {
                        c.resize(a, b, L(this, qb, "f").ViewMode.NORMAL)
                    } catch (d) {}
            }
            destroy() {
                if (!L(this, rb, "f")) {
                    pb(this, rb, !0, "f");
                    try {
                        let a;
                        (a = L(this, Va, "f")) == null || a.destroy()
                    } catch (a) {}
                    try {
                        let a;
                        (a = L(this, Od, "f")) == null || a.destroy()
                    } catch (a) {}
                    try {
                        let a;
                        (a = L(this, gg, "f")) == null || a.destroy()
                    } catch (a) {}
                    pb(this, Va, null, "f");
                    pb(this, Od, null, "f");
                    pb(this, gg, null, "f");
                    pb(this, Fe, null, "f")
                }
            }
            vf() {
                var a = L(this, Va, "f");
                if (a === null || L(this, rb, "f"))
                    return null;
                var b = Pc( () => a.getCurrentAd(), null);
                return b === null ? null : {
                    za: Pc( () => a.getRemainingTime(), -1),
                    M: Pc( () => b.getDuration(), -1),
                    muted: Pc( () => a.getVolume(), 0) <= 0,
                    isSkippable: typeof b.isSkippable === "function" ? Pc( () => b.isSkippable() === !0, !1) : !1
                }
            }
            resume() {
                if (L(this, rb, "f") || L(this, Va, "f") === null)
                    return !1;
                try {
                    return L(this, Va, "f").resume(),
                    !0
                } catch (a) {
                    return !1
                }
            }
            pause() {
                if (L(this, rb, "f") || L(this, Va, "f") === null)
                    return !1;
                try {
                    return L(this, Va, "f").pause(),
                    !0
                } catch (a) {
                    return !1
                }
            }
            setVolume(a) {
                if (!L(this, rb, "f"))
                    try {
                        let b;
                        (b = L(this, Va, "f")) == null || b.setVolume(a)
                    } catch (b) {}
            }
        }
        var qb = new WeakMap;
        var vb = new WeakMap;
        var Rh = new WeakMap;
        var gg = new WeakMap;
        var Od = new WeakMap;
        var Va = new WeakMap;
        var Fe = new WeakMap;
        var rb = new WeakMap;
        var $c = new WeakSet;
        var ip = function() {
            if (L(this, Od, "f"))
                return L(this, Od, "f");
            var a = L(this, qb, "f").AdDisplayContainer
              , b = L(this, qb, "f").AdsLoader;
            a = L(this, vb, "f").xk === void 0 ? new a(L(this, vb, "f").bb) : new a(L(this, vb, "f").bb,L(this, vb, "f").xk);
            a.initialize();
            b = new b(a);
            b.addEventListener(L(this, qb, "f").AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, c => L(this, $c, "m", jp).call(this, c));
            b.addEventListener(L(this, qb, "f").AdErrorEvent.Type.AD_ERROR, c => L(this, $c, "m", nk).call(this, c));
            pb(this, gg, a, "f");
            pb(this, Od, b, "f");
            return b
        };
        var jp = function(a) {
            if (!L(this, rb, "f")) {
                var b = new (L(this, qb, "f").AdsRenderingSettings);
                b.enablePreloading = !0;
                b.useStyledNonLinearAds = !0;
                b.loadVideoTimeout = -1;
                a = a.getAdsManager(b);
                pb(this, Va, a, "f");
                for (let d of Object.values(L(this, qb, "f").AdEvent.Type))
                    a.addEventListener(d, e => L(this, $c, "m", kp).call(this, e));
                a.addEventListener(L(this, qb, "f").AdErrorEvent.Type.AD_ERROR, d => L(this, $c, "m", nk).call(this, d));
                var c;
                (c = L(this, Fe, "f")) == null || c.Lh();
                L(this, vb, "f").ob({
                    kind: "manager-ready"
                })
            }
        };
        var kp = function(a) {
            if (!L(this, rb, "f")) {
                var b, c = String((b = a.type) != null ? b : ""), d, e, f = (e = (d = L(this, Va, "f")) == null ? void 0 : d.getCurrentAd()) != null ? e : null;
                b = f ? f.getContentType() : null;
                d = typeof (f == null ? void 0 : f.isSkippable) === "function" ? f.isSkippable() === !0 : !1;
                c === L(this, qb, "f").AdEvent.Type.LOADED && kl(f ? {
                    isLinear: f.isLinear()
                } : null) ? (L(this, $c, "m", lp).call(this),
                L(this, vb, "f").ob({
                    kind: "try-next-tag",
                    reason: "non-linear-creative"
                })) : (e = f === null ? -1 : Pc( () => f.getDuration(), -1),
                L(this, vb, "f").ob({
                    kind: "ad-event",
                    type: c,
                    contentType: b,
                    event: a,
                    ra: f,
                    isSkippable: d,
                    M: e
                }))
            }
        };
        var nk = function(a) {
            if (!L(this, rb, "f")) {
                var b;
                a = ll(a);
                let c = String((b = a.errorCode) != null ? b : "") === "1012", d, e, f, g;
                b = {
                    errorCode: (d = a.errorCode) != null ? d : null,
                    rc: (e = a.rc) != null ? e : null,
                    type: (f = a.type) != null ? f : null,
                    message: (g = a.message) != null ? g : null,
                    af: c,
                    Jj: !0
                };
                L(this, vb, "f").ob({
                    kind: "error",
                    error: b
                });
                b.Jj && L(this, vb, "f").ob({
                    kind: "try-next-tag",
                    reason: "ad-error"
                })
            }
        };
        var lp = function() {
            try {
                let a;
                (a = L(this, Va, "f")) == null || a.stop()
            } catch (a) {}
            try {
                let a;
                (a = L(this, Va, "f")) == null || a.destroy()
            } catch (a) {}
            pb(this, Va, null, "f")
        };
        var nl = Object.freeze(["VkoCEAoNDg4ICAsM", "VkoCEAoPDQwJBw8=", "VkoCEA4PDw0NDg0=", "VkoCEA4NCwwOBg8GCQ=="])
          , ol = Object.freeze(["SFhPU15GWk0RXFBS", "SFhPU15GWE1QSlFbEVhWS1dKXRFWUA=="])
          , ch = null
          , dh = null
          , mp = Object.freeze({
            m: "start",
            ended: Object.freeze(["complete", "skip"])
        });
        class Fo {
            constructor(a) {
                da.add(this);
                U.set(this, void 0);
                hg.set(this, void 0);
                wa.set(this, null);
                Eb.set(this, null);
                Fb.set(this, null);
                Gb.set(this, null);
                Ob.set(this, 0);
                yc.set(this, !1);
                ad.set(this, 0);
                ic.set(this, !1);
                Pd.set(this, null);
                Sh.set(this, null);
                Ge.set(this, !1);
                ig.set(this, !1);
                jg.set(this, !1);
                Qd.set(this, !1);
                He.set(this, !1);
                Rd.set(this, null);
                kg.set(this, !1);
                lg.set(this, !1);
                V(this, U, a, "f");
                var b;
                V(this, hg, (b = a.Wg) != null ? b : mp, "f")
            }
            D(a) {
                if (p(this, wa, "f") !== null)
                    throw Error("PodFlow: already run \u2014 one flow drives one pod");
                V(this, wa, a, "f");
                var b = p(this, U, "f").createSession(a.kind, a.nc);
                b.Be(a.ta);
                V(this, Fb, b, "f");
                V(this, Eb, p(this, U, "f").ye(d => p(this, da, "m", ok).call(this, d), "primary"), "f");
                var c;
                (c = p(this, U, "f").Ta) == null || c.reset();
                V(this, jg, !1, "f");
                p(this, U, "f").slot.width > 0 && p(this, U, "f").slot.height > 0 ? p(this, da, "m", Ie).call(this, {
                    kind: "pod-started"
                }) : p(this, da, "m", Sd).call(this, "no-slot")
            }
            uf() {
                if (!p(this, He, "f") || p(this, ic, "f"))
                    return !1;
                V(this, He, !1, "f");
                var a;
                (a = p(this, Eb, "f")) == null || a.start();
                return !0
            }
            resize(a, b) {
                if (!p(this, ic, "f")) {
                    var c;
                    (c = p(this, Eb, "f")) == null || c.resize(a, b)
                }
            }
            stop() {
                p(this, da, "m", Sd).call(this, "stopped")
            }
        }
        var U = new WeakMap;
        var hg = new WeakMap;
        var wa = new WeakMap;
        var Eb = new WeakMap;
        var Fb = new WeakMap;
        var Gb = new WeakMap;
        var Ob = new WeakMap;
        var yc = new WeakMap;
        var ad = new WeakMap;
        var ic = new WeakMap;
        var Pd = new WeakMap;
        var Sh = new WeakMap;
        var Ge = new WeakMap;
        var ig = new WeakMap;
        var jg = new WeakMap;
        var Qd = new WeakMap;
        var He = new WeakMap;
        var Rd = new WeakMap;
        var kg = new WeakMap;
        var lg = new WeakMap;
        var da = new WeakSet;
        var Ie = function(a) {
            if (!p(this, ic, "f") && p(this, wa, "f") !== null && !p(this, Ge, "f"))
                if (p(this, kg, "f") && a.kind === "tag-failed")
                    p(this, da, "m", Sd).call(this, "waterfall-timeout");
                else {
                    var b = p(this, Ob, "f");
                    var c = p(this, yc, "f")
                      , d = p(this, wa, "f").ua
                      , e = p(this, U, "f").ya.size(p(this, wa, "f").location) + (p(this, Gb, "f") === null ? 0 : 1);
                    b = a.kind === "ad-blocked" ? ah("ad-blocked") : b + (c ? 1 : 0) >= d ? ah("pod-full") : e <= 0 ? ah("no-tags-left") : Object.freeze({
                        action: "request-next"
                    });
                    if (b.action === "finish") {
                        if (b.reason === "no-tags-left" && !p(this, jg, "f") && (V(this, jg, !0, "f"),
                        p(this, da, "m", pk).call(this, a, !0)))
                            return;
                        p(this, da, "m", Sd).call(this, b.reason)
                    } else
                        p(this, da, "m", pk).call(this, a, !1) || (a = p(this, da, "m", np).call(this),
                        a = a.kind === "ready" ? Object.freeze({
                            action: "promote"
                        }) : a.kind === "loading" ? Object.freeze({
                            action: "wait"
                        }) : Object.freeze({
                            action: "request-next"
                        }),
                        a.action === "promote" ? p(this, da, "m", qk).call(this) : a.action === "wait" ? V(this, Qd, !0, "f") : p(this, da, "m", op).call(this))
                }
        };
        var pk = function(a, b) {
            var c = p(this, U, "f").Ta;
            if (c === void 0 || p(this, wa, "f") === null)
                return !1;
            V(this, Ge, !0, "f");
            (a = c.kk({
                ld: p(this, U, "f").ya.sf(p(this, wa, "f").location),
                Fd: p(this, Sh, "f"),
                wd: a.kind === "pod-started",
                de: b,
                Da: p(this, yc, "f"),
                o: p(this, Ob, "f"),
                ua: p(this, wa, "f").ua
            }, {
                rd: () => {
                    V(this, ig, !0, "f");
                    V(this, Ob, p(this, Ob, "f") + 1, "f");
                    p(this, da, "m", Th).call(this);
                    var d, e;
                    (e = (d = p(this, U, "f")).pi) == null || e.call(d);
                    p(this, da, "m", Uh).call(this)
                }
                ,
                li: d => {
                    V(this, Ge, !1, "f");
                    V(this, ig, !1, "f");
                    if (d) {
                        let e, f;
                        (f = (e = p(this, U, "f")).oi) == null || f.call(e)
                    }
                    p(this, da, "m", Ie).call(this, d ? {
                        kind: "ad-delivered"
                    } : {
                        kind: "tag-failed"
                    })
                }
            })) ? p(this, da, "m", rk).call(this) : V(this, Ge, !1, "f");
            return a
        };
        var pp = function(a) {
            if (p(this, wa, "f") === null)
                return null;
            var b = p(this, U, "f").ya.Qf(p(this, wa, "f").location);
            if (b === null)
                return null;
            a = p(this, U, "f").Kf(b, p(this, wa, "f").location, a.ta.muted);
            return Vi({
                Ba: a,
                K: p(this, U, "f").K,
                h: p(this, U, "f").h
            }) ? a : null
        };
        var Uh = function() {
            if (p(this, wa, "f") !== null && p(this, Gb, "f") === null && ml({
                o: p(this, Ob, "f"),
                Da: p(this, yc, "f"),
                dh: p(this, ig, "f"),
                ua: p(this, wa, "f").ua,
                ek: p(this, U, "f").ya.size(p(this, wa, "f").location),
                Si: p(this, Gb, "f") !== null,
                yg: p(this, wa, "f").ua === 1
            }).Af) {
                var a = p(this, U, "f").createSession(p(this, wa, "f").kind, p(this, wa, "f").nc);
                a.Be(p(this, wa, "f").ta);
                var b = p(this, da, "m", pp).call(this, a);
                if (b !== null) {
                    var c = !1
                      , d = p(this, U, "f").ye(e => {
                        c ? p(this, da, "m", ok).call(this, e) : p(this, da, "m", qp).call(this, e)
                    }
                    , "prefetch");
                    V(this, Gb, {
                        xc: d,
                        Cj: a,
                        Ba: b,
                        ready: !1,
                        Je: !1,
                        Xi: () => {
                            c = !0
                        }
                    }, "f");
                    V(this, ad, p(this, ad, "f") + 1, "f");
                    d.requestAds(a, {
                        Ba: b,
                        slot: p(this, U, "f").slot,
                        Ma: p(this, U, "f").Ma,
                        K: p(this, U, "f").K,
                        h: p(this, U, "f").h
                    })
                }
            }
        };
        var qp = function(a) {
            var b = p(this, Gb, "f");
            if (b !== null && !p(this, ic, "f"))
                if (a.kind === "manager-ready")
                    b.ready = !0,
                    p(this, da, "m", Th).call(this),
                    p(this, Qd, "f") && (V(this, Qd, !1, "f"),
                    p(this, da, "m", qk).call(this));
                else {
                    var c = a.kind === "error" && a.error.af;
                    if (a.kind === "try-next-tag" || c)
                        b.Je = !0,
                        p(this, da, "m", sk).call(this),
                        p(this, Qd, "f") ? (V(this, Qd, !1, "f"),
                        p(this, da, "m", Ie).call(this, {
                            kind: "tag-failed"
                        })) : c || p(this, da, "m", Uh).call(this)
                }
        };
        var np = function() {
            var a = p(this, Gb, "f");
            return a === null ? {
                kind: "none"
            } : a.ready ? {
                kind: "ready"
            } : a.Je ? {
                kind: "failed"
            } : {
                kind: "loading"
            }
        };
        var qk = function() {
            var a = p(this, Gb, "f");
            if (a !== null) {
                V(this, Gb, null, "f");
                a.Xi();
                try {
                    let b;
                    (b = p(this, Eb, "f")) == null || b.destroy()
                } catch (b) {}
                V(this, Eb, a.xc, "f");
                V(this, Fb, a.Cj, "f");
                V(this, Pd, a.Ba, "f");
                try {
                    let b, c;
                    (c = (b = p(this, U, "f")).ui) == null || c.call(b)
                } catch (b) {}
                a.xc.start()
            }
        };
        var sk = function() {
            var a = p(this, Gb, "f");
            if (a !== null) {
                V(this, Gb, null, "f");
                try {
                    a.xc.destroy()
                } catch (b) {}
            }
        };
        var op = function() {
            if (p(this, wa, "f") !== null && p(this, Fb, "f") !== null && p(this, Eb, "f") !== null) {
                var a = p(this, U, "f").ya.Qf(p(this, wa, "f").location);
                if (a === null)
                    p(this, da, "m", Sd).call(this, "no-tags-left");
                else if (a = p(this, U, "f").Kf(a, p(this, wa, "f").location, p(this, Fb, "f").ta.muted),
                V(this, Pd, a, "f"),
                Vi({
                    Ba: a,
                    K: p(this, U, "f").K,
                    h: p(this, U, "f").h
                })) {
                    var b, c;
                    (c = (b = p(this, U, "f")).Di) == null || c.call(b, p(this, ad, "f"));
                    V(this, ad, p(this, ad, "f") + 1, "f");
                    p(this, da, "m", rk).call(this);
                    p(this, Eb, "f").requestAds(p(this, Fb, "f"), {
                        Ba: a,
                        slot: p(this, U, "f").slot,
                        Ma: p(this, U, "f").Ma,
                        K: p(this, U, "f").K,
                        h: p(this, U, "f").h
                    })
                } else
                    p(this, da, "m", Sd).call(this, "no-tags-left")
            }
        };
        var rp = function(a, b, c, d, e, f) {
            var g = p(this, U, "f").oj;
            if (g !== void 0)
                try {
                    g({
                        type: a,
                        event: b,
                        ra: c,
                        Va: $g(d),
                        contentType: d,
                        isSkippable: e,
                        M: f,
                        adTagUrl: p(this, Pd, "f")
                    })
                } catch (h) {}
        };
        var ok = function(a) {
            if (!p(this, ic, "f"))
                switch (a.kind) {
                case "manager-ready":
                    p(this, da, "m", Th).call(this);
                    let b;
                    if (((b = p(this, wa, "f")) == null ? void 0 : b.Yc) === !0 && p(this, Ob, "f") === 0 && !p(this, He, "f")) {
                        V(this, He, !0, "f");
                        let d, e;
                        (e = (d = p(this, U, "f")).Sb) == null || e.call(d);
                        break
                    }
                    let c;
                    (c = p(this, Eb, "f")) == null || c.start();
                    break;
                case "error":
                    p(this, da, "m", sp).call(this, a.error);
                    break;
                case "try-next-tag":
                    V(this, yc, !1, "f");
                    p(this, da, "m", Ie).call(this, {
                        kind: "tag-failed"
                    });
                    break;
                case "ad-event":
                    p(this, da, "m", rp).call(this, a.type, a.event, a.ra, a.contentType, a.isSkippable, a.M),
                    p(this, da, "m", tp).call(this, a.type)
                }
        };
        var sp = function(a) {
            var b = p(this, U, "f").nj;
            if (b !== void 0)
                try {
                    b(a, p(this, Pd, "f"))
                } catch (c) {}
        };
        var tp = function(a) {
            if (a === p(this, hg, "f").m) {
                V(this, yc, !0, "f");
                V(this, Sh, p(this, Pd, "f"), "f");
                p(this, da, "m", up).call(this);
                let b, c;
                p(this, U, "f").ya.hj((c = (b = p(this, wa, "f")) == null ? void 0 : b.location) != null ? c : "preroll");
                p(this, da, "m", Uh).call(this)
            } else
                p(this, hg, "f").ended.includes(a) && p(this, yc, "f") && (V(this, Ob, p(this, Ob, "f") + 1, "f"),
                V(this, yc, !1, "f"),
                p(this, da, "m", Ie).call(this, {
                    kind: "ad-delivered"
                }))
        };
        var up = function() {
            if (p(this, Fb, "f") !== null && p(this, Fb, "f").J !== "playing") {
                var a, b, c, d = (c = (b = (a = p(this, U, "f")).Uk) == null ? void 0 : b.call(a)) != null ? c : void 0;
                try {
                    p(this, Fb, "f").Mh(d)
                } catch (e) {}
            }
        };
        var rk = function() {
            var a = p(this, U, "f").sc;
            if (!p(this, lg, "f") && !p(this, ic, "f") && a !== void 0 && a > 0) {
                V(this, lg, !0, "f");
                var b, c = (b = p(this, U, "f").l) != null ? b : (d, e) => globalThis.setTimeout(d, e);
                V(this, Rd, c( () => {
                    V(this, Rd, null, "f");
                    V(this, kg, !0, "f")
                }
                , a), "f")
            }
        };
        var tk = function() {
            V(this, kg, !1, "f");
            if (p(this, Rd, "f") !== null) {
                var a;
                ((a = p(this, U, "f").A) != null ? a : b => {
                    globalThis.clearTimeout(b)
                }
                )(p(this, Rd, "f"));
                V(this, Rd, null, "f")
            }
        };
        var Th = function() {
            V(this, lg, !0, "f");
            p(this, da, "m", tk).call(this);
            try {
                let a, b;
                (b = (a = p(this, U, "f")).nd) == null || b.call(a)
            } catch (a) {}
        };
        var Sd = function(a) {
            if (!p(this, ic, "f")) {
                V(this, ic, !0, "f");
                p(this, da, "m", tk).call(this);
                var b, c, d = (c = (b = p(this, Fb, "f")) == null ? void 0 : b.ia) != null ? c : [], e;
                (e = p(this, Fb, "f")) == null || e.end();
                p(this, da, "m", sk).call(this);
                try {
                    let g;
                    (g = p(this, Eb, "f")) == null || g.destroy()
                } catch (g) {}
                V(this, Eb, null, "f");
                var f;
                (f = p(this, wa, "f")) == null || f.da({
                    reason: a,
                    o: p(this, Ob, "f"),
                    ha: p(this, ad, "f"),
                    ia: d
                })
            }
        };
        class ep {
            constructor(a) {
                wb.add(this);
                eb.set(this, void 0);
                Je.set(this, void 0);
                bd.set(this, null);
                Ke.set(this, 0);
                mg.set(this, 0);
                ng.set(this, 0);
                cd.set(this, null);
                ab(this, eb, a, "f");
                ab(this, Je, oe(a.Kc()), "f")
            }
            D() {
                var a = oe(fa(this, eb, "f").Kc());
                if (a === fa(this, Je, "f"))
                    return !1;
                ab(this, Je, a, "f");
                fa(this, wb, "m", uk).call(this);
                return !0
            }
            Ja() {
                if (fa(this, bd, "f") !== null)
                    return !1;
                ab(this, Je, oe(fa(this, eb, "f").Kc()), "f");
                fa(this, wb, "m", uk).call(this);
                return !0
            }
            stop() {
                fa(this, wb, "m", Vh).call(this)
            }
        }
        var eb = new WeakMap;
        var Je = new WeakMap;
        var bd = new WeakMap;
        var Ke = new WeakMap;
        var mg = new WeakMap;
        var ng = new WeakMap;
        var cd = new WeakMap;
        var wb = new WeakSet;
        var uk = function() {
            ab(this, Ke, 0, "f");
            fa(this, wb, "m", Vh).call(this);
            ab(this, mg, fa(this, eb, "f").now(), "f");
            ab(this, ng, fa(this, mg, "f"), "f");
            var a, b, c;
            ab(this, cd, (c = (b = (a = fa(this, eb, "f")).ai) == null ? void 0 : b.call(a, () => {
                ab(this, ng, fa(this, eb, "f").now(), "f")
            }
            )) != null ? c : null, "f");
            fa(this, wb, "m", vp).call(this)
        };
        var vp = function b() {
            if (fa(this, eb, "f").Gg()) {
                var c = fa(this, eb, "f").now()
                  , d = c - fa(this, ng, "f");
                c -= fa(this, mg, "f");
                if (fa(this, cd, "f") !== null && d < 150 && c < 3E3)
                    fa(this, wb, "m", Wh).call(this, () => {
                        fa(this, wb, "m", b).call(this)
                    }
                    , Math.min(100, 150 - d));
                else {
                    var e;
                    (e = fa(this, cd, "f")) == null || e.call(this);
                    ab(this, cd, null, "f");
                    fa(this, eb, "f").gi();
                    fa(this, wb, "m", Wh).call(this, () => {
                        fa(this, eb, "f").gj()
                    }
                    , Math.max(0, fa(this, eb, "f").Pa))
                }
            } else
                ab(this, Ke, fa(this, Ke, "f") + 1, "f"),
                fa(this, Ke, "f") >= 100 ? (fa(this, wb, "m", Vh).call(this),
                (c = (d = fa(this, eb, "f")).ii) == null || c.call(d)) : fa(this, wb, "m", Wh).call(this, () => {
                    fa(this, wb, "m", b).call(this)
                }
                , 100)
        };
        var Wh = function(b, c) {
            ab(this, bd, fa(this, eb, "f").l( () => {
                ab(this, bd, null, "f");
                b()
            }
            , c), "f")
        };
        var Vh = function() {
            var b;
            (b = fa(this, cd, "f")) == null || b.call(this);
            ab(this, cd, null, "f");
            fa(this, bd, "f") !== null && (fa(this, eb, "f").A(fa(this, bd, "f")),
            ab(this, bd, null, "f"))
        };
        class no {
            constructor(b) {
                xb.add(this);
                ma.set(this, void 0);
                zc.set(this, 0);
                og.set(this, 0);
                Td.set(this, 0);
                pg.set(this, 0);
                Xh.set(this, !0);
                qg.set(this, {
                    ea: 0,
                    U: 0
                });
                Le.set(this, !1);
                Yh.set(this, !1);
                rg.set(this, null);
                sg.set(this, null);
                tg.set(this, !1);
                Zh.set(this, !1);
                $h.set(this, !1);
                Me.set(this, new Map);
                $a(this, ma, b, "f")
            }
            $h(b, c) {
                c ? A(this, Me, "f").set(b, A(this, ma, "f").now()) : A(this, Me, "f").delete(b)
            }
            get Xb() {
                var b = A(this, ma, "f").now();
                for (let[c,d] of A(this, Me, "f")) {
                    if (b - d < 3E5)
                        return !0;
                    A(this, Me, "f").delete(c)
                }
                return !1
            }
            get D() {
                return A(this, Le, "f")
            }
            get ag() {
                return A(this, Yh, "f")
            }
            Dh() {
                $a(this, Zh, !0, "f")
            }
            Jh(b) {
                if (!(!Number.isFinite(b) || b <= 0 || b <= A(this, zc, "f"))) {
                    $a(this, zc, b, "f");
                    $a(this, tg, !0, "f");
                    var c, d;
                    (d = (c = A(this, ma, "f")).nf) == null || d.call(c, b)
                }
            }
            Ja(b) {
                if (Number.isFinite(b) && !(b <= 0)) {
                    var c;
                    $a(this, rg, Math.max((c = A(this, rg, "f")) != null ? c : 0, b), "f");
                    var d;
                    $a(this, sg, Math.max((d = A(this, sg, "f")) != null ? d : 0, b), "f")
                }
            }
            get lk() {
                return A(this, xb, "m", ai).call(this)
            }
            get kb() {
                return A(this, zc, "f")
            }
            get R() {
                if (A(this, zc, "f") === 0)
                    return 0;
                var b = (A(this, ma, "f").now() - A(this, zc, "f")) / 1E3;
                return b < 0 ? Math.floor(b) : Math.max(1, Math.floor(b))
            }
            ka(b={}, c) {
                var d = A(this, ma, "f").wa();
                if (d.$b)
                    return oc("ads-disabled");
                var e = A(this, ma, "f").config.Xd
                  , f = {
                    fd: A(this, ma, "f").config.Dd,
                    Mf: A(this, qg, "f").ea
                };
                var g = A(this, ma, "f").config.Kd;
                var h = A(this, xb, "m", wp).call(this)
                  , l = A(this, ma, "f").now();
                e ? g = eh("suppressed", 0) : Xi(f) ? (g <= 0 || h === null || h <= 0 ? g = tf() : (e = h + g * 1E3,
                l >= e ? g = tf() : (l = Math.ceil((e - l) / 1E3),
                g = l > g ? tf() : Object.freeze({
                    I: !1,
                    j: l
                }))),
                g = g.I ? Object.freeze({
                    I: !0,
                    reason: null,
                    j: 0
                }) : eh("too-soon", g.j)) : g = eh("session-limit", 0);
                if (!g.I) {
                    var m, t;
                    (t = (m = A(this, ma, "f")).yi) == null || t.call(m, g.j);
                    b = g.reason;
                    return oc(b === "suppressed" ? "ads-disabled" : b === "session-limit" ? "session-limit" : "too-soon-after-preroll", g.j)
                }
                if (A(this, ma, "f").config.Rd && A(this, Zh, "f") && !A(this, $h, "f"))
                    return $a(this, $h, !0, "f"),
                    oc("skip-first-preroll");
                if (d.W && this.Xb)
                    return oc("ad-playing-above");
                d = d.W;
                m = A(this, tg, "f");
                t = this.R;
                g = A(this, xb, "m", ai).call(this);
                d = !d || !m || g <= 0 || t <= 0 || t >= g ? tf() : Object.freeze({
                    I: !1,
                    j: Math.ceil(g - t)
                });
                if (!d.I)
                    return oc("too-soon-after-ad", d.j);
                $a(this, Yh, !0, "f");
                return A(this, xb, "m", vk).call(this, "preroll", {
                    u: !1,
                    Za: b.Za,
                    Qa: b.Qa,
                    fb: b.fb
                }, c)
            }
            $(b={}, c) {
                var d = b.u === !0;
                $a(this, pg, A(this, pg, "f") + 1, "f");
                var e = A(this, ma, "f").wa();
                e = sl({
                    R: this.R,
                    Od: A(this, xb, "m", ai).call(this),
                    Hj: A(this, tg, "f"),
                    Xb: this.Xb,
                    Ga: A(this, xb, "m", wk).call(this),
                    ca: Wi(A(this, ma, "f").config.ca, A(this, Td, "f")),
                    Qc: A(this, ma, "f").config.Qc,
                    Qd: A(this, ma, "f").config.Qd,
                    ig: A(this, pg, "f"),
                    ej: A(this, Td, "f"),
                    Uh: A(this, og, "f"),
                    se: A(this, Xh, "f"),
                    W: e.W,
                    Jd: e.Jd,
                    u: d,
                    Ic: e.Ic,
                    cb: A(this, ma, "f").config.cb,
                    h: A(this, ma, "f").config.h,
                    $b: e.$b,
                    ab: !1
                });
                A(this, xb, "m", xp).call(this) && $a(this, Xh, !1, "f");
                return e.I ? Xi({
                    fd: A(this, ma, "f").config.jd,
                    Mf: A(this, qg, "f").U
                }) ? A(this, xb, "m", vk).call(this, "midroll", {
                    u: d,
                    Za: b.Za,
                    Qa: b.Qa,
                    fb: b.fb
                }, c) : oc("session-limit") : oc(e.reason, e.j)
            }
        }
        var ma = new WeakMap;
        var zc = new WeakMap;
        var og = new WeakMap;
        var Td = new WeakMap;
        var pg = new WeakMap;
        var Xh = new WeakMap;
        var qg = new WeakMap;
        var Le = new WeakMap;
        var Yh = new WeakMap;
        var rg = new WeakMap;
        var sg = new WeakMap;
        var tg = new WeakMap;
        var Zh = new WeakMap;
        var $h = new WeakMap;
        var Me = new WeakMap;
        var xb = new WeakSet;
        var ai = function() {
            var b = Wi(A(this, ma, "f").config.ca, A(this, Td, "f")), c;
            return Math.max(b, (c = A(this, sg, "f")) != null ? c : 0)
        };
        var vk = function(b, c, d) {
            var e = c.u;
            if (A(this, Le, "f")) {
                let h, l;
                return ((l = (h = A(this, ma, "f")).uh) == null ? void 0 : l.call(h)) === !0 ? {
                    m: !0
                } : oc("pod-already-running")
            }
            $a(this, Le, !0, "f");
            var f, g;
            (g = (f = A(this, ma, "f")).qf) == null || g.call(f, !0, b);
            A(this, ma, "f").$j(b, c, h => {
                $a(this, Le, !1, "f");
                var l, m;
                (m = (l = A(this, ma, "f")).qf) == null || m.call(l, !1, b);
                A(this, xb, "m", yp).call(this, b, e, h);
                d == null || d(h)
            }
            );
            return {
                m: !0
            }
        };
        var yp = function(b, c, d) {
            if (d.o !== 0) {
                if (!c) {
                    $a(this, zc, A(this, ma, "f").now(), "f");
                    let e, f;
                    (f = (e = A(this, ma, "f")).nf) == null || f.call(e, A(this, zc, "f"))
                }
                A(this, qg, "f")[b] += 1;
                b === "preroll" && A(this, xb, "m", zp).call(this, A(this, ma, "f").now());
                b === "midroll" && ($a(this, og, A(this, og, "f") + 1, "f"),
                c || $a(this, Td, A(this, Td, "f") + 1, "f"))
            }
        };
        var xp = function() {
            var b = this.R;
            return !(b > 0 && b < A(this, xb, "m", wk).call(this))
        };
        var wk = function() {
            var b;
            return (b = A(this, rg, "f")) != null ? b : A(this, ma, "f").config.Ga
        };
        var wp = function() {
            var b, c = Number.parseInt((b = A(this, ma, "f").storage.read("wgTbp")) != null ? b : "", 10);
            return Number.isFinite(c) && c > 0 ? c : null
        };
        var zp = function(b) {
            try {
                A(this, ma, "f").storage.write("wgTbp", String(b))
            } catch (c) {}
        };
        class ro {
            constructor(b) {
                Pb.add(this);
                fb.set(this, void 0);
                ug.set(this, void 0);
                bi.set(this, !1);
                Ud.set(this, null);
                Ne.set(this, null);
                Zb(this, fb, b, "f");
                Zb(this, ug, b.now(), "f")
            }
            start() {
                ra(this, Ne, "f") === null && Zb(this, Ne, ra(this, fb, "f").bi( () => {
                    ra(this, Pb, "m", Ap).call(this)
                }
                , () => {
                    ra(this, Pb, "m", Bp).call(this)
                }
                ), "f")
            }
            stop() {
                ra(this, Pb, "m", ci).call(this);
                var b;
                (b = ra(this, Ne, "f")) == null || b.call(this);
                Zb(this, Ne, null, "f")
            }
            D() {
                Zb(this, ug, ra(this, fb, "f").now(), "f")
            }
            sf() {
                return ra(this, Pb, "m", di).call(this)
            }
        }
        var fb = new WeakMap;
        var ug = new WeakMap;
        var bi = new WeakMap;
        var Ud = new WeakMap;
        var Ne = new WeakMap;
        var Pb = new WeakSet;
        var Ap = function() {
            ra(this, Pb, "m", ci).call(this);
            ra(this, Pb, "m", Cp).call(this, ra(this, Pb, "m", di).call(this));
            Zb(this, bi, !0, "f")
        };
        var Bp = function() {
            ra(this, Pb, "m", ci).call(this)
        };
        var di = function() {
            var b = ra(this, fb, "f").dj()
              , c = ra(this, ug, "f")
              , d = ra(this, fb, "f").now();
            c = Math.max(0, Math.floor((d - c) / 1E3));
            d = !ra(this, bi, "f");
            var e = b.Sj
              , f = b.Da
              , g = b.oh;
            return b.Ni ? g ? uf("in-google-rewarded") : e ? uf("splash-active") : f ? uf("ad-playing") : d || c > 300 ? Object.freeze({
                action: "request"
            }) : Object.freeze({
                action: "defer",
                Pa: Math.max(0, 300 - c) * 1E3
            }) : uf("no-pod-history")
        };
        var Cp = function(b) {
            if (b.action === "request") {
                let e, f;
                (f = (e = ra(this, fb, "f")).log) == null || f.call(e, "auto-midroll: requesting");
                ra(this, fb, "f").request()
            } else if (b.action === "skip") {
                let e, f;
                (f = (e = ra(this, fb, "f")).log) == null || f.call(e, `auto-midroll: skipped (${b.reason})`)
            } else {
                var c, d;
                (d = (c = ra(this, fb, "f")).log) == null || d.call(c, `auto-midroll: deferred ${b.Pa}ms`);
                Zb(this, Ud, ra(this, fb, "f").l( () => {
                    Zb(this, Ud, null, "f");
                    var e = ra(this, Pb, "m", di).call(this);
                    if (e.action === "request") {
                        let h, l;
                        (l = (h = ra(this, fb, "f")).log) == null || l.call(h, "auto-midroll: requesting after defer");
                        ra(this, fb, "f").request()
                    } else {
                        var f, g;
                        (g = (f = ra(this, fb, "f")).log) == null || g.call(f, `auto-midroll: dropped after defer (${e.action})`)
                    }
                }
                , b.Pa), "f")
            }
        };
        var ci = function() {
            ra(this, Ud, "f") !== null && (ra(this, fb, "f").A(ra(this, Ud, "f")),
            Zb(this, Ud, null, "f"))
        };
        class bo {
            constructor(b) {
                gb.add(this);
                Na.set(this, void 0);
                xk.set(this, !1);
                var c = Na;
                if (typeof c === "function" || !c.has(this))
                    throw new TypeError("Cannot write private member to an object whose class did not declare it");
                c.set(this, b)
            }
            uc(b) {
                la(this, xk, "f") || la(this, gb, "m", mb).call(this, la(this, Na, "f").names.uc, [b.type, b.P, b.event, b.ra, b.Va, b.adTagUrl])
            }
            U() {
                la(this, gb, "m", mb).call(this, la(this, Na, "f").names.U, [])
            }
            Gd(b) {
                la(this, gb, "m", mb).call(this, la(this, Na, "f").names.Gd, [{
                    device: b.P,
                    cc: b.F
                }])
            }
            yf() {
                la(this, gb, "m", mb).call(this, la(this, Na, "f").names.yf, [])
            }
            xd(b) {
                la(this, gb, "m", mb).call(this, la(this, Na, "f").names.xd, [b])
            }
            zf() {
                la(this, gb, "m", mb).call(this, la(this, Na, "f").names.zf, [])
            }
            zd() {
                la(this, gb, "m", mb).call(this, la(this, Na, "f").names.zd, [])
            }
            Mc() {
                la(this, gb, "m", mb).call(this, la(this, Na, "f").names.Mc, [])
            }
            debug(b) {
                la(this, gb, "m", mb).call(this, la(this, Na, "f").names.debug, [b])
            }
            Cd(b) {
                la(this, gb, "m", mb).call(this, la(this, Na, "f").names.Cd, [b])
            }
            Ud() {
                la(this, gb, "m", mb).call(this, la(this, Na, "f").names.Ud, [])
            }
            Sd() {
                la(this, gb, "m", mb).call(this, la(this, Na, "f").names.Sd, [])
            }
            Vd() {
                la(this, gb, "m", mb).call(this, la(this, Na, "f").names.Vd, [])
            }
            Td() {
                la(this, gb, "m", mb).call(this, la(this, Na, "f").names.Td, [])
            }
        }
        var Na = new WeakMap;
        var xk = new WeakMap;
        var gb = new WeakSet;
        var mb = function(b, c) {
            if (b !== void 0 && b !== "") {
                var d = la(this, Na, "f").uj(b);
                if (typeof d === "function")
                    try {
                        d(...c)
                    } catch (e) {
                        la(this, Na, "f").g(b, e)
                    }
            }
        };
        var tl = ["true", "1"]
          , ul = ["false", "0"]
          , fj = Number.MIN_SAFE_INTEGER
          , vl = Object.freeze([])
          , Zl = Object.freeze([])
          , Dp = Object.freeze("AdxAfgDscAdTagURL adCount adEventCallback adMuted adTagURL afv am amma app attributionLogo autoInit autoplay autoplayMidroll background callToAction cap cgdpr cmp cod containerPosition contentContainer contentContainerQuery continueGameText continueRewardText cpp customCss customParamsMid customParamsPre customStyles debugCallback delayedPrerollCallback disableAdBlock dsc ec ect exc exctpos fallbackAd fallbackAdTagURL fe fetchAdOptions fitParent fitToPx fitWindow fixedBody flashAllowContactPage flashAllowMovie flashAllowText flashButtonText flashIcon flashTags flashTitle fmo forceAutoplay fr fs game gameBackground gameDescription gameLogo gameName gameThumbnail h5 icv intro io isCustomSpa isFlashGame isSpa jingle launchEvent loaderObjectName loading log logErrors lt ltr ma mad mainClassName maxHeight midAdLimit midrollAdTagURL midrollCallback midrollfq minAdInterval minHeight minWidth mobilePosition moreGames moreGamesText ms naoc noAd noint npa npd nss otherGames parent pd playGameText playground postInitAfgCallback poster preAdLimit preAfgCallback preInitCallback preSpaCallback prefetchMidroll prefetchPrerll prefetchPreroll preload preloadIma prerollCtaClick prerollfq promoGames pss publisherName rcc_cb remove removeAdsCallback removeFlashTags replace reportEvents resizeContainer restore rewarded sandboxed sfm sfp sg showmidrollOnIframeAtStart si siteName sp splash splashMidCallback splashMidDisplayed splashPreCallback splashPreDisplayed spqr square stats sv tbp tc titleExtract tr triggerMid triggerPre ua useDefaultPwaButton useFlashAllowPopup utmsource videoTest vpaidMode waitForAd waitForClickMid waitForClickPre waitForSpa walkthroughText wb wgAdTagIdentifier wpb wt ypd zIndex".split(" "))
          , Zi = Object.freeze(new Map([["prefetchPrerll", "prefetchPreroll"]]))
          , nj = Object.freeze(new Map([["SendMessage", "public-api"], ["adTest", "rewarded"], ["button", "app"], ["container", "app"], ["context", "public-api"], ["controls", "sv"], ["desktop", "rewarded"], ["display", "app"], ["extraTime", "rewarded"], ["fullgd", "sv"], ["gameInfo", "sv"], ["gb", "sv"], ["gc", "sv"], ["gct", "sv"], ["gd", "sv"], ["gi", "sv"], ["git", "sv"], ["gl", "sv"], ["gn", "sv"], ["gr", "sv"], ["gravity", "sv"], ["gsg", "sv"], ["gt", "sv"], ["gtar", "sv"], ["h", "sv"], ["kb", "sv"], ["maxRequests", "rewarded"], ["maxTime", "rewarded"], ["onFail", "public-api"], ["onReady", "public-api"], ["onSuccess", "public-api"], ["orientation", "sv"], ["pause", "public-api"], ["pegi", "sv"], ["resume", "public-api"], ["sendMessage", "public-api"], ["source", "intro"], ["time", "rewarded"], ["w", "sv"]]))
          , $i = Object.freeze(Dp.filter(b => !Zi.has(b)))
          , fh = new Set($i)
          , Ep = Object.freeze("noloading mad promoGames moreGames otherGames cap fe isFlashGame flashTags removeFlashTags flashIcon flashTitle flashAllowText flashButtonText flashAllowMovie flashAllowContactPage useFlashAllowPopup fs waitForFlash npa sv naoc sg wb pss ltr walkthroughText exc cpp intro pd continueRewardText moreGamesText fetchAdOptions h5 afv siteName videoTest useDefaultPwaButton poster square wt stats reportEvents ua ms cod rcc_cb cmp prerollfq midrollfq utmsource spqr fitWindow resizeContainer loading dsc AdxAfgDscAdTagURL fallbackAdTagURL tc tr".split(" "))
          , xm = new Set(Ep)
          , Al = Object.freeze("Loading;;Loading;;Getting ready;;Almost done".split(";"))
          , Cf = Object.freeze({
            container: "rgba(0,0,0,0.9)",
            H: "rgba(0,0,0,0.5)"
        })
          , Bl = ["fullscreen", "standalone", "minimal-ui", "browser"]
          , vm = Object.freeze("adTagURL midrollAdTagURL containerId location adMuted waitForClickPre forceAutoplay ma fmo minAdInterval cgdpr adTest adEventCallback midrollCallback removeAdsCallback preAfgCallback postInitAfgCallback preInitCallback preSpaCallback delayedPrerollCallback debugCallback prerollCtaClick splashPreDisplayed splashMidDisplayed splashPreCallback splashMidCallback gameName gameDescription gameThumbnail gameLogo publisherName playGameText continueGameText io contentContainer contentContainerQuery restore si customParamsPre customParamsMid ppsj am noAd adCount preload showmidrollOnIframeAtStart exctpos replace sfp sfm npd ypd rewarded disableAdBlock logErrors log waitForClickMid autoplayMidroll midrollCountdown waterfallTimeout sp preAdLimit midAdLimit tbp vpaidMode amma checkAdsTxt fallbackAd triggerPre triggerMid prefetchPreroll prefetchMidroll waitForAd wgAdTagIdentifier parent fr sandboxed isSpa isCustomSpa waitForSpa ec remove callToAction lt jingle attributionLogo playground minWidth minHeight containerPosition fitToPx zIndex maxHeight mobilePosition fixedBody titleExtract autoplay preloadIma mainClassName customCss icv background game autoInit customStyles nss wpb ect noint arrivedByClick splash launchEvent fitParent gameBackground loaderObjectName app".split(" "))
          , Cm = ["afg_bkg.jpg", "nologo.jpg"]
          , Fm = Object.freeze({
            yc: "#faf7f0",
            border: "#e6dfd0",
            Wc: "rgba(255, 196, 130, .25)",
            Vc: "rgba(255, 120, 80, .12)",
            Ee: "rgba(42, 29, 10, .07)",
            Ye: "rgba(255,255,255,.6)",
            Ze: "rgba(40,30,15,.04)",
            te: "0 1px 0 rgba(0,0,0,.04), 0 18px 40px -20px rgba(40,30,15,.18)",
            Ke: "#2a1d0a",
            Wa: "#a67328",
            Ra: "rgba(42,29,10,.7)",
            caption: "rgba(42,29,10,.55)",
            Pf: "#2a1d0a",
            bk: "#fff",
            va: "#ff4d36",
            Eb: "#fff"
        })
          , Em = Object.freeze({
            yc: "#171310",
            border: "rgba(255,255,255,.06)",
            Wc: "rgba(255, 140, 60, .22)",
            Vc: "rgba(255, 90, 40, .14)",
            Ee: "rgba(255, 240, 220, .055)",
            Ye: "rgba(255,255,255,.08)",
            Ze: "rgba(0,0,0,.4)",
            te: "0 1px 0 rgba(255,255,255,.04), 0 30px 60px -22px rgba(0,0,0,.55)",
            Ke: "#f4ede0",
            Wa: "#ffb86b",
            Ra: "rgba(244,237,224,.72)",
            caption: "rgba(244,237,224,.55)",
            Pf: "#f4ede0",
            bk: "#1a1208",
            va: "#ff5d3a",
            Eb: "#fff"
        })
          , qj = new Map([["default", () => ({})], ["halloween", b => ({
            va: "#f97316",
            Wa: b === "dark" ? "#fdba74" : "#c2410c"
        })], ["holiday", b => ({
            va: "#dc2626",
            Wa: b === "dark" ? "#fca5a5" : "#15803d"
        })], ["spring", b => ({
            va: "#10b981",
            Wa: b === "dark" ? "#86efac" : "#047857"
        })], ["summer", b => ({
            va: "#06b6d4",
            Wa: b === "dark" ? "#7dd3fc" : "#0e7490"
        })]])
          , Im = () => !1
          , Id = {
            display: "'Space Grotesk', 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            body: "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            kd: "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace"
        }
          , rj = Object.freeze("#ff4d36 #ffd23f #34d399 #60a5fa #f472b6 #fb923c".split(" "))
          , qh = !1
          , tj = !1
          , uj = !1
          , Qf = ""
          , ph = 0;
        class Qo {
            constructor(b) {
                Oe.add(this);
                hb.set(this, void 0);
                Pe.set(this, null);
                Vd.set(this, null);
                dd.set(this, 0);
                Mc(this, hb, b, "f")
            }
            le(b) {
                Mc(this, Pe, b, "f")
            }
            jg(b, c=!1) {
                Mc(this, dd, sa(this, dd, "f") + 1, "f");
                sa(this, hb, "f").H.show(b);
                sa(this, hb, "f").H.Ld(c);
                sa(this, Oe, "m", yk).call(this);
                sa(this, Vd, "f") === null && Mc(this, Vd, sa(this, hb, "f").l( () => {
                    sa(this, Oe, "m", yk).call(this)
                }
                , 100), "f")
            }
            eh() {
                Mc(this, dd, sa(this, dd, "f") + 1, "f");
                sa(this, hb, "f").H.Ld(!1);
                sa(this, hb, "f").H.show({
                    Oe: !0,
                    Xa: sa(this, hb, "f").Xa,
                    Qe: !1,
                    Pe: !0,
                    je: !1,
                    xf: !1
                });
                sa(this, hb, "f").H.update({
                    index: sa(this, dd, "f"),
                    za: -1,
                    M: -1,
                    muted: !0
                })
            }
            vc(b) {
                sa(this, hb, "f").H.jc(b)
            }
            ge() {
                sa(this, Oe, "m", zk).call(this);
                sa(this, hb, "f").H.aa();
                sa(this, hb, "f").H.Ld(!1)
            }
            get Mi() {
                var b, c, d = (c = (b = sa(this, Pe, "f")) == null ? void 0 : b.call(this)) != null ? c : null;
                return d === null || !Number.isFinite(d.M) || d.M <= 0 || !Number.isFinite(d.za) || d.za < 0 ? null : Math.max(0, d.M - d.za)
            }
            destroy() {
                sa(this, Oe, "m", zk).call(this);
                Mc(this, Pe, null, "f");
                sa(this, hb, "f").H.destroy()
            }
        }
        var hb = new WeakMap;
        var Pe = new WeakMap;
        var Vd = new WeakMap;
        var dd = new WeakMap;
        var Oe = new WeakSet;
        var yk = function() {
            var b, c, d = (c = (b = sa(this, Pe, "f")) == null ? void 0 : b.call(this)) != null ? c : null;
            d !== null && sa(this, hb, "f").H.update({
                index: sa(this, dd, "f"),
                za: d.za,
                M: d.M,
                muted: d.muted
            })
        };
        var zk = function() {
            sa(this, Vd, "f") !== null && (sa(this, hb, "f").A(sa(this, Vd, "f")),
            Mc(this, Vd, null, "f"))
        };
        var Bj = new Map([["v", Object.freeze({
            max: 100,
            yb: 5
        })], ["vs", Object.freeze({
            max: 100,
            yb: 5
        })], ["i", Object.freeze({
            max: 100,
            yb: 5
        })], ["t", Object.freeze({
            max: 100,
            yb: 5
        })]])
          , Zm = Object.freeze({
            max: 100,
            yb: 5
        })
          , uh = Object.freeze(["v", "vs", "i", "t"])
          , Sf = Object.freeze({
            level: "block",
            message: "Please disable your ad blocker to play this game, then refresh the page.",
            info: "Please support us by disabling your ad blocker.",
            He: !1,
            Hb: 30,
            ud: "Play for %s seconds",
            position: "overlay"
        });
        class io {
            constructor() {
                Qe.set(this, 0);
                ei.set(this, null)
            }
            get D() {
                return Ki(this, Qe, "f") >= 2
            }
            Ja() {
                qf(this, Qe, Ki(this, Qe, "f") + 1, "f");
                qf(this, ei, "ima-error-1012", "f")
            }
            reset() {
                qf(this, Qe, 0, "f");
                qf(this, ei, null, "f")
            }
        }
        var Qe = new WeakMap;
        var ei = new WeakMap;
        var en = Object.freeze({
            Wf: 4E3,
            Ue: 4E3,
            Sf: 4E3,
            Xf: 3
        });
        class lo {
            constructor(b) {
                Ak.add(this);
                jc.set(this, void 0);
                Wd.set(this, null);
                Ac.set(this, void 0);
                fi.set(this, !1);
                ud(this, jc, b, "f");
                ud(this, Ac, Math.max(0, Math.floor(b.hk)), "f")
            }
            start() {
                Qa(this, fi, "f") || Qa(this, Wd, "f") !== null || (ud(this, fi, !0, "f"),
                Qa(this, Ac, "f") <= 0 ? Qa(this, jc, "f").lf() : (Qa(this, jc, "f").sd(Qa(this, Ac, "f")),
                ud(this, Wd, Qa(this, jc, "f").l( () => {
                    Qa(this, Ak, "m", Fp).call(this)
                }
                , 1E3), "f")))
            }
            stop() {
                Qa(this, Wd, "f") !== null && (Qa(this, jc, "f").A(Qa(this, Wd, "f")),
                ud(this, Wd, null, "f"))
            }
        }
        var jc = new WeakMap;
        var Wd = new WeakMap;
        var Ac = new WeakMap;
        var fi = new WeakMap;
        var Ak = new WeakSet;
        var Fp = function() {
            ud(this, Ac, Qa(this, Ac, "f") - 1, "f");
            Qa(this, Ac, "f") > 0 ? Qa(this, jc, "f").sd(Qa(this, Ac, "f")) : (this.stop(),
            Qa(this, jc, "f").sd(0),
            Qa(this, jc, "f").lf())
        };
        var Gp = new Set(["initHandshake"])
          , sn = new Set("navigate playground-data lta resetLta adOnScreen showRecallButton receiveHandshake rewarded-ready rewarded-granted rewarded-canceled rewarded-closed rewarded-failed midrollEnd delegatedAdEnd".split(" "))
          , rn = new Set("initHandshake fetchAd refetchAd delegateAd getLta playground reminder rewarded-init rewarded-show".split(" "));
        class uo {
            constructor(b) {
                Xd.add(this);
                Oa.set(this, void 0);
                ed.set(this, []);
                Re.set(this, null);
                Wg(this, Oa, b, "f")
            }
            start() {
                oa(this, Re, "f") === null && Wg(this, Re, oa(this, Oa, "f").Eh(b => {
                    oa(this, Xd, "m", Hp).call(this, b)
                }
                ), "f")
            }
            stop() {
                var b;
                (b = oa(this, Re, "f")) == null || b.call(this);
                Wg(this, Re, null, "f");
                oa(this, ed, "f").length = 0
            }
            send(b, c, d={}) {
                var e, f;
                (f = (e = oa(this, Oa, "f")).trace) == null || f.call(e, `-> ${oa(this, Xd, "m", Ip).call(this, b)} ${c} ${Dj(d)}`);
                oa(this, Oa, "f").Oi(b, pn(c, d), "*")
            }
            get children() {
                return oa(this, ed, "f")
            }
        }
        var Oa = new WeakMap;
        var ed = new WeakMap;
        var Re = new WeakMap;
        var Xd = new WeakSet;
        var Ip = function(b) {
            return oa(this, Oa, "f").rf.includes(b) ? "parent" : oa(this, ed, "f").includes(b) ? "child" : "frame"
        };
        var Hp = function(b) {
            var c = on(b.data);
            if (c !== null) {
                var d = oa(this, Oa, "f").rf
                  , e = oa(this, ed, "f")
                  , f = b.source
                  , g = b.origin
                  , h = oa(this, Oa, "f").lg;
                d = f === null || f === void 0 ? Object.freeze({
                    xb: !1,
                    reason: "no-source"
                }) : h === null || h.includes(g) ? f !== null && f !== void 0 && d.includes(f) ? Object.freeze({
                    xb: !0,
                    bc: "parent"
                }) : e.includes(f) ? Object.freeze({
                    xb: !0,
                    bc: "child"
                }) : Object.freeze({
                    xb: !1,
                    reason: "unknown-source"
                }) : Object.freeze({
                    xb: !1,
                    reason: "untrusted-origin"
                });
                if (d.xb) {
                    var l, m;
                    (m = (l = oa(this, Oa, "f")).trace) == null || m.call(l, `<- ${d.bc} ${c.action} ${Dj(c.Yb)} (${b.origin})`);
                    oa(this, Xd, "m", Bk).call(this, c, d.bc, b)
                } else if (d.reason === "unknown-source" && Gp.has(c.action)) {
                    oa(this, Xd, "m", Jp).call(this, b.source);
                    let M, G;
                    (G = (M = oa(this, Oa, "f")).trace) == null || G.call(M, `+ enrolled a child via ${c.action} (${b.origin})`);
                    oa(this, Xd, "m", Bk).call(this, c, "child", b)
                } else {
                    var t, w;
                    (w = (t = oa(this, Oa, "f")).trace) == null || w.call(t, `x ${c.action} refused: ${d.reason} (from ${b.origin})`);
                    var y, I;
                    (I = (y = oa(this, Oa, "f")).Vb) == null || I.call(y, d.reason, c.action)
                }
            }
        };
        var Bk = function(b, c, d) {
            if (qn(b.action, c)) {
                var e = oa(this, Oa, "f").gh.get(b.action);
                if (e === void 0) {
                    let f, g;
                    (g = (f = oa(this, Oa, "f")).trace) == null || g.call(f, `x ${b.action} refused: no-handler`);
                    let h, l;
                    (l = (h = oa(this, Oa, "f")).Vb) == null || l.call(h, "no-handler", b.action)
                } else {
                    c = {
                        bc: c,
                        source: d.source,
                        origin: d.origin,
                        dc: (f, g) => {
                            this.send(d.source, f, g)
                        }
                    };
                    try {
                        e(b.Yb, c)
                    } catch (f) {
                        let g, h;
                        (h = (g = oa(this, Oa, "f")).Vb) == null || h.call(g, "handler-threw", b.action)
                    }
                }
            } else {
                let f;
                (f = (e = oa(this, Oa, "f")).trace) == null || f.call(e, `x ${b.action} refused: wrong-direction (from a ${c})`);
                let g, h;
                (h = (g = oa(this, Oa, "f")).Vb) == null || h.call(g, "wrong-direction", b.action)
            }
        };
        var Jp = function(b) {
            b !== null && b !== void 0 && (oa(this, ed, "f").includes(b) || oa(this, ed, "f").push(b))
        };
        class wo {
            constructor(b) {
                vg.add(this);
                Qb.set(this, void 0);
                Bc.set(this, null);
                wg.set(this, 0);
                Yd.set(this, null);
                Se.set(this, null);
                Kb(this, Qb, b, "f")
            }
            start() {
                Da(this, Qb, "f").qa !== null && Da(this, Qb, "f").qa !== "" && Da(this, Yd, "f") === null && Da(this, Bc, "f") === null && Da(this, vg, "m", Kp).call(this)
            }
            stop() {
                Da(this, Bc, "f") !== null && (Da(this, Qb, "f").A(Da(this, Bc, "f")),
                Kb(this, Bc, null, "f"));
                Da(this, Yd, "f") !== null && Da(this, Se, "f") !== null && Da(this, Yd, "f").removeEventListener("click", Da(this, Se, "f"));
                Kb(this, Yd, null, "f");
                Kb(this, Se, null, "f")
            }
        }
        var Qb = new WeakMap;
        var Bc = new WeakMap;
        var wg = new WeakMap;
        var Yd = new WeakMap;
        var Se = new WeakMap;
        var vg = new WeakSet;
        var Kp = function c() {
            var d = Da(this, Qb, "f").qa;
            if (d !== null) {
                var e = tn(Da(this, Qb, "f").find, d);
                if (e !== null)
                    Da(this, vg, "m", Lp).call(this, e);
                else if (Kb(this, wg, Da(this, wg, "f") + 1, "f"),
                Da(this, wg, "f") >= 100) {
                    Kb(this, Bc, null, "f");
                    let f, g;
                    (g = (f = Da(this, Qb, "f")).wi) == null || g.call(f, d)
                } else
                    Kb(this, Bc, Da(this, Qb, "f").l( () => {
                        Kb(this, Bc, null, "f");
                        Da(this, vg, "m", c).call(this)
                    }
                    , 100), "f")
            }
        };
        var Lp = function(c) {
            var d = e => {
                Da(this, Qb, "f").Fi(e)
            }
            ;
            Kb(this, Se, d, "f");
            Kb(this, Yd, c, "f");
            c.addEventListener("click", d)
        };
        var xn = ["useractioncomplete", "tcloaded"];
        class Mp {
            constructor(c) {
                gi.add(this);
                fd.set(this, void 0);
                Te.set(this, void 0);
                kc.set(this, 0);
                Zd.set(this, null);
                xg.set(this, !1);
                Lc(this, fd, c, "f");
                var d;
                Lc(this, Te, (d = c.xa) != null ? d : 4, "f")
            }
            get oe() {
                return Ca(this, kc, "f")
            }
            start() {
                Ca(this, xg, "f") || Ca(this, gi, "m", Np).call(this)
            }
            stop() {
                Lc(this, xg, !0, "f");
                Ca(this, Zd, "f") !== null && (Ca(this, fd, "f").A(Ca(this, Zd, "f")),
                Lc(this, Zd, null, "f"))
            }
        }
        var fd = new WeakMap;
        var Te = new WeakMap;
        var kc = new WeakMap;
        var Zd = new WeakMap;
        var xg = new WeakMap;
        var gi = new WeakSet;
        var Np = function d() {
            var e = Ca(this, fd, "f").Jb();
            zn({
                oe: Ca(this, kc, "f"),
                xa: Ca(this, Te, "f"),
                Jb: e
            }) ? (e = yn(Ca(this, kc, "f")),
            z(`[afg-rw] retry: no ad yet \u2014 asking again in ${e}ms (attempt ${Ca(this, kc, "f") + 1} of ${Ca(this, Te, "f")})`),
            Lc(this, Zd, Ca(this, fd, "f").l( () => {
                Lc(this, Zd, null, "f");
                Ca(this, xg, "f") || (Ca(this, fd, "f").Jb() ? z("[afg-rw] retry: an ad arrived while waiting \u2014 loop ends") : (Lc(this, kc, Ca(this, kc, "f") + 1, "f"),
                z(`[afg-rw] retry: attempt ${Ca(this, kc, "f")} \u2014 re-requesting the slot`),
                Ca(this, fd, "f").qj(),
                Ca(this, gi, "m", d).call(this)))
            }
            , e), "f")) : z(`[afg-rw] retry: stopping after ${Ca(this, kc, "f")} of ${Ca(this, Te, "f")} (${e ? "an ad is in hand" : "attempts exhausted"})`)
        };
        var Op = new Map([["idle", Object.freeze(["requested"])], ["requested", Object.freeze(["ready", "closed"])], ["ready", Object.freeze(["shown", "closed"])], ["shown", Object.freeze(["granted", "closed"])], ["granted", Object.freeze(["closed"])], ["closed", Object.freeze([])]]);
        class Pp {
            constructor(d) {
                ib.add(this);
                Rb.set(this, void 0);
                Ra.set(this, "idle");
                Ue.set(this, null);
                hi.set(this, null);
                le(this, Rb, d, "f")
            }
            get J() {
                return Y(this, Ra, "f")
            }
            get hh() {
                return Y(this, Ra, "f") === "ready" || Y(this, Ra, "f") === "shown" || Y(this, Ra, "f") === "granted"
            }
            request() {
                Y(this, ib, "m", yg).call(this, "requested") && Y(this, Rb, "f").request()
            }
            Qj(d) {
                Y(this, ib, "m", yg).call(this, "ready") && (le(this, Ue, d, "f"),
                Y(this, ib, "m", gd).call(this, "onReady", () => {
                    var e, f;
                    return (f = (e = Y(this, Rb, "f").S).Z) == null ? void 0 : f.call(e, () => this.show())
                }
                ))
            }
            show() {
                z(`[afg-rw] show asked for (phase=${Y(this, Ra, "f")} handle=${Y(this, Ue, "f") === null ? "none" : "held"})`);
                Y(this, Ra, "f") !== "ready" || Y(this, Ue, "f") === null ? (z("[afg-rw] nothing to show \u2014 reported as a cancellation"),
                Y(this, ib, "m", ii).call(this, {
                    kind: "no-fill"
                })) : Y(this, ib, "m", yg).call(this, "shown") && (Y(this, ib, "m", gd).call(this, "onOnScreenChanged", () => {
                    var d, e;
                    return (e = (d = Y(this, Rb, "f")).Tb) == null ? void 0 : e.call(d, !0)
                }
                ),
                Y(this, ib, "m", gd).call(this, "makeVisible", () => {
                    var d;
                    return (d = Y(this, Ue, "f")) == null ? void 0 : d.Kh()
                }
                ))
            }
            Pj(d) {
                Y(this, ib, "m", yg).call(this, "granted") && le(this, hi, d, "f")
            }
            Oj() {
                Y(this, ib, "m", ii).call(this, Y(this, Ra, "f") === "granted" ? {
                    kind: "granted",
                    Yb: Y(this, hi, "f")
                } : {
                    kind: "dismissed"
                })
            }
            bg() {
                Y(this, ib, "m", ii).call(this, {
                    kind: "no-fill"
                })
            }
        }
        var Rb = new WeakMap;
        var Ra = new WeakMap;
        var Ue = new WeakMap;
        var hi = new WeakMap;
        var ib = new WeakSet;
        var ii = function(d) {
            if (Y(this, Ra, "f") === "closed")
                z(`[afg-rw] already closed \u2014 ${d.kind} ignored`);
            else {
                z(`[afg-rw] outcome: ${d.kind} (from ${Y(this, Ra, "f")}) \u2014 ${d.kind === "granted" ? "onSuccess" : "onFail"} then onClose`);
                var e = Y(this, Ra, "f") === "shown" || Y(this, Ra, "f") === "granted";
                le(this, Ra, "closed", "f");
                e && Y(this, ib, "m", gd).call(this, "onOnScreenChanged", () => {
                    var f, g;
                    return (g = (f = Y(this, Rb, "f")).Tb) == null ? void 0 : g.call(f, !1)
                }
                );
                d.kind === "granted" ? Y(this, ib, "m", gd).call(this, "onComplete", () => {
                    var f, g;
                    return (g = (f = Y(this, Rb, "f").S).nb) == null ? void 0 : g.call(f, d.Yb)
                }
                ) : Y(this, ib, "m", gd).call(this, "onCancel", () => {
                    var f, g;
                    return (g = (f = Y(this, Rb, "f").S).lb) == null ? void 0 : g.call(f)
                }
                );
                Y(this, ib, "m", gd).call(this, "onClose", () => {
                    var f, g;
                    return (g = (f = Y(this, Rb, "f").S).Ka) == null ? void 0 : g.call(f)
                }
                )
            }
        };
        var yg = function(d) {
            var e = Y(this, Ra, "f"), f;
            if (((f = Op.get(e)) == null ? void 0 : f.includes(d)) !== !0)
                return z(`[afg-rw] phase: ${Y(this, Ra, "f")} -x-> ${d} (refused, out of order)`),
                !1;
            z(`[afg-rw] phase: ${Y(this, Ra, "f")} -> ${d}`);
            le(this, Ra, d, "f");
            return !0
        };
        var gd = function(d, e) {
            try {
                e()
            } catch (f) {
                Y(this, Rb, "f").g(d, f)
            }
        };
        class Qp {
            constructor(d) {
                sb.add(this);
                Ga.set(this, void 0);
                hd.set(this, null);
                ji.set(this, !1);
                pf(this, Ga, d, "f")
            }
            request() {
                var d = ea(this, Ga, "f").googletag();
                d === null ? (z("[afg-rw] gpt: no googletag on this page \u2014 nothing can be defined"),
                ea(this, Ga, "f").g("googletag-missing", null)) : (z("[afg-rw] gpt: queued a define on googletag.cmd"),
                d.cmd.push( () => {
                    ea(this, sb, "m", Rp).call(this, d)
                }
                ))
            }
            destroy() {
                var d = ea(this, Ga, "f").googletag()
                  , e = ea(this, hd, "f");
                pf(this, hd, null, "f");
                if (d !== null && e !== null)
                    try {
                        d.destroySlots([e]),
                        z("[afg-rw] gpt: destroyed the previous slot")
                    } catch (f) {
                        ea(this, Ga, "f").g("destroy-slots", f)
                    }
            }
        }
        var Ga = new WeakMap;
        var hd = new WeakMap;
        var ji = new WeakMap;
        var sb = new WeakSet;
        var Rp = function(d) {
            var e = "defineOutOfPageSlot";
            try {
                this.destroy();
                let f = ea(this, Ga, "f").sa();
                z(`[afg-rw] gpt: defineOutOfPageSlot("${f}", REWARDED)`);
                let g = d.defineOutOfPageSlot(f, d.enums.OutOfPageFormat.REWARDED);
                g === null ? (z("[afg-rw] gpt: defineOutOfPageSlot returned null \u2014 this page cannot host an out-of-page slot, so no request will be made"),
                ea(this, Ga, "f").g("slot-not-available", null)) : (g.addService(d.pubads()),
                ea(this, sb, "m", Sp).call(this, g),
                pf(this, hd, g, "f"),
                ea(this, Ga, "f").disableInitialLoad && aa("[afg] rewarded.disableInitialLoad is ignored: it suppresses the first fetch of every slot on the page, and GPT disables refresh for rewarded slots \u2014 so honouring it would leave this ad unable to request at all"),
                ea(this, Ga, "f").h && d.pubads().set("adsense_test_mode", "on"),
                ea(this, sb, "m", Tp).call(this, d),
                e = "enableServices",
                d.enableServices(),
                z("[afg-rw] gpt: enableServices()"),
                e = "display",
                d.display(g),
                z(`[afg-rw] gpt: display(slot) \u2014 ${f} is requested from here${ea(this, Ga, "f").h ? " (adsense_test_mode on)" : ""}`),
                e = "refresh",
                d.pubads().refresh([g]))
            } catch (f) {
                ea(this, Ga, "f").g(`define-slot:${e}`, f)
            }
        };
        var Sp = function(d) {
            ea(this, Ga, "f").sb.size > 0 && z("[afg-rw] gpt: slot targeting " + [...ea(this, Ga, "f").sb].map( ([e,f]) => `${e}=${String(f)}`).join(" "));
            for (let[e,f] of ea(this, Ga, "f").sb)
                try {
                    d.setTargeting(e, f)
                } catch (g) {
                    ea(this, Ga, "f").g(`targeting:${e}`, g)
                }
        };
        var Tp = function(d) {
            ea(this, ji, "f") || (pf(this, ji, !0, "f"),
            d = d.pubads(),
            z("[afg-rw] gpt: listening for rewardedSlotReady, -Granted and -Closed"),
            d.addEventListener("rewardedSlotReady", e => {
                if (ea(this, sb, "m", ki).call(this, e)) {
                    z("[afg-rw] gpt: rewardedSlotReady \u2014 GAM filled it");
                    var f = An(e);
                    f === null ? ea(this, Ga, "f").g("ready-without-make-visible", e) : ea(this, sb, "m", li).call(this, "onReady", () => {
                        ea(this, Ga, "f").Z(f)
                    }
                    )
                } else
                    ea(this, sb, "m", mi).call(this, "rewardedSlotReady", e)
            }
            ),
            d.addEventListener("rewardedSlotGranted", e => {
                ea(this, sb, "m", ki).call(this, e) ? (z("[afg-rw] gpt: rewardedSlotGranted \u2014 the reward was earned"),
                ea(this, sb, "m", li).call(this, "onGranted", () => {
                    var f = ea(this, Ga, "f")
                      , g = f.pd;
                    if (e === null || typeof e !== "object")
                        var h = null;
                    else {
                        var l;
                        h = (l = e.payload) != null ? l : null
                    }
                    g.call(f, h)
                }
                )) : ea(this, sb, "m", mi).call(this, "rewardedSlotGranted", e)
            }
            ),
            d.addEventListener("rewardedSlotClosed", e => {
                ea(this, sb, "m", ki).call(this, e) ? (z("[afg-rw] gpt: rewardedSlotClosed"),
                ea(this, sb, "m", li).call(this, "onClosed", () => {
                    ea(this, Ga, "f").mb()
                }
                )) : ea(this, sb, "m", mi).call(this, "rewardedSlotClosed", e)
            }
            ))
        };
        var ki = function(d) {
            return ea(this, hd, "f") === null || d === null || typeof d !== "object" ? !1 : d.slot === ea(this, hd, "f")
        };
        var mi = function(d) {
            z(`[afg-rw] gpt: ${d} for ${ea(this, hd, "f") === null ? "no slot of ours" : "another slot"} \u2014 ignored`)
        };
        var li = function(d, e) {
            try {
                e()
            } catch (f) {
                ea(this, Ga, "f").g(d, f)
            }
        };
        class oo {
            constructor(d) {
                zg.add(this);
                pa.set(this, void 0);
                nb.set(this, null);
                id.set(this, null);
                Cc.set(this, null);
                ni.set(this, !1);
                oi.set(this, null);
                pi.set(this, "");
                Cb(this, pa, d, "f")
            }
            D() {
                var d = N(this, pa, "f").wa.ab()
                  , e = N(this, pa, "f").config.ve;
                return (d ? {
                    I: !1,
                    reason: "ad-blocked"
                } : e ? {
                    I: !0
                } : {
                    I: !1,
                    reason: "not-configured"
                }).I
            }
            sa() {
                {
                    var d = N(this, pa, "f").config.tag;
                    b: {
                        var e = [d.ck, d.h ? "/22639388115/rewarded_web_example" : d.Eg];
                        for (var f of e)
                            if (typeof f === "string" && f.trim() !== "") {
                                e = f;
                                break b
                            }
                        e = null
                    }
                    let g = e;
                    if (g === null)
                        d = null;
                    else {
                        {
                            let h = g.match(/\/([0-9]+),([0-9]+)\//);
                            h === null ? e = g : (e = h[1],
                            f = g.indexOf("/WGRW"),
                            e = f > -1 ? `/${e}/WGRW${g.slice(f + 5)}` : g.replace(`,${h[2]}`, ""))
                        }
                        d = Zg(e, d.Ki(), d.na)
                    }
                }
                return d
            }
            request() {
                if (!this.D()) {
                    var d = N(this, pa, "f").wa.ab();
                    z(`[afg-rw] request refused: ${d ? "ad-blocked" : "not-configured"} (adBlocked=${d} configured=${N(this, pa, "f").config.ve})`);
                    return yh(d ? "ad-blocked" : "not-configured")
                }
                if (N(this, nb, "f") !== null && N(this, nb, "f").J !== "idle" && N(this, nb, "f").J !== "closed")
                    return z(`[afg-rw] request refused: already-in-flight (phase=${N(this, nb, "f").J})`),
                    yh("already-in-flight");
                d = this.sa();
                var e = N(this, pa, "f").wa.Gc()
                  , f = N(this, pa, "f").wa.Hc()
                  , g = N(this, pa, "f").wa.V();
                z(`[afg-rw] gates: unit=${d != null ? d : "none"} consent=${e === null || e === "" ? "nothing yet" : e} phase=${f != null ? f : "unknown"} gdpr=${String(g)} adTest=${N(this, pa, "f").config.h} rewardTest=${N(this, pa, "f").config.hc}`);
                e = wn({
                    kh: d !== null,
                    Gc: e,
                    Hc: f,
                    V: g,
                    h: N(this, pa, "f").config.h,
                    hc: N(this, pa, "f").config.hc
                });
                e.Hd && N(this, zg, "m", Up).call(this, "report-consent-failure", () => {
                    N(this, pa, "f").Hd()
                }
                );
                if (!e.I || d === null) {
                    let h;
                    z(`[afg-rw] request refused: ${(h = e.reason) != null ? h : "no-tag"}`);
                    let l;
                    return yh((l = e.reason) != null ? l : "no-tag")
                }
                z(`[afg-rw] requesting ${d}`);
                N(this, zg, "m", Vp).call(this, d);
                return Object.freeze({
                    m: !0
                })
            }
            show() {
                var d;
                (d = N(this, nb, "f")) == null || d.show()
            }
            stop() {
                z("[afg-rw] stopping \u2014 retry cancelled, slot destroyed, phase abandoned");
                Cb(this, ni, !0, "f");
                var d;
                (d = N(this, Cc, "f")) == null || d.stop();
                Cb(this, Cc, null, "f");
                var e;
                (e = N(this, id, "f")) == null || e.destroy();
                Cb(this, id, null, "f");
                var f;
                (f = N(this, nb, "f")) == null || f.bg();
                Cb(this, nb, null, "f")
            }
        }
        var pa = new WeakMap;
        var nb = new WeakMap;
        var id = new WeakMap;
        var Cc = new WeakMap;
        var ni = new WeakMap;
        var oi = new WeakMap;
        var pi = new WeakMap;
        var zg = new WeakSet;
        var Vp = function(d) {
            var e;
            (e = N(this, Cc, "f")) == null || e.stop();
            Cb(this, Cc, null, "f");
            Cb(this, pi, d, "f");
            var f, g = (f = N(this, id, "f")) != null ? f : new Qp({
                googletag: () => N(this, oi, "f"),
                sa: () => N(this, pi, "f"),
                sb: N(this, pa, "f").config.sb,
                h: N(this, pa, "f").config.h,
                disableInitialLoad: N(this, pa, "f").config.disableInitialLoad,
                Z: h => {
                    var l;
                    (l = N(this, nb, "f")) == null || l.Qj({
                        Kh: h
                    })
                }
                ,
                pd: h => {
                    var l;
                    (l = N(this, nb, "f")) == null || l.Pj(h)
                }
                ,
                mb: () => {
                    var h;
                    (h = N(this, nb, "f")) == null || h.Oj()
                }
                ,
                g: N(this, pa, "f").g
            });
            Cb(this, id, g, "f");
            Cb(this, nb, new Pp({
                request: () => {
                    g.request()
                }
                ,
                S: Object.assign({}, N(this, pa, "f").S, {
                    Ka: () => {
                        var h;
                        (h = N(this, Cc, "f")) == null || h.stop();
                        var l, m;
                        (m = (l = N(this, pa, "f").S).Ka) == null || m.call(l);
                        N(this, pa, "f").config.Ch && !N(this, ni, "f") && this.request()
                    }
                }),
                g: N(this, pa, "f").g,
                Tb: N(this, pa, "f").Tb
            }), "f");
            z(`[afg-rw] loading gpt.js${N(this, id, "f") === g ? "" : " (first request)"}`);
            N(this, pa, "f").Fh(h => {
                z(`[afg-rw] gpt.js ${h === null ? "did NOT load \u2014 no ad can be requested" : "is ready"}`);
                Cb(this, oi, h, "f");
                var l;
                (l = N(this, nb, "f")) == null || l.request();
                N(this, zg, "m", Wp).call(this)
            }
            )
        };
        var Wp = function() {
            var d;
            (d = N(this, Cc, "f")) == null || d.stop();
            d = new Mp({
                xa: N(this, pa, "f").config.xa,
                l: N(this, pa, "f").l,
                A: N(this, pa, "f").A,
                Jb: () => {
                    var e;
                    return ((e = N(this, nb, "f")) == null ? void 0 : e.hh) === !0
                }
                ,
                qj: () => {
                    var e;
                    (e = N(this, id, "f")) == null || e.request()
                }
            });
            Cb(this, Cc, d, "f");
            d.start()
        };
        var Up = function(d, e) {
            try {
                e()
            } catch (f) {
                N(this, pa, "f").g(d, f)
            }
        };
        var Xp = `    on('rewardedSlotReady', function(e) {
      if (adSlot === e.slot) {
        window[${ub("__wgAdInterstitial_")} + INSTANCE_ID + '_show'] = function() { e.makeRewardedVisible(); };
        cb('OnReady')();
      }
    });
    on('rewardedSlotGranted', function(e) {
      if (adSlot === e.slot) {
        cb('OnRewarded')({
          type:   e.payload ? e.payload.type   : null,
          amount: e.payload ? e.payload.amount : null
        });
      }
    });
    on('rewardedSlotClosed', function(e) {
      if (adSlot === e.slot) { cb('Restore')(); }
    });`
          , Yp = `    on('gameManualInterstitialSlotReady', function(e) {
      if (adSlot === e.slot) {
        window[${ub("__wgAdInterstitial_")} + INSTANCE_ID + '_show'] = function() { e.makeGameManualInterstitialVisible(); };
        cb('OnReady')();
      }
    });
    on('gameManualInterstitialSlotClosed', function(e) {
      if (adSlot === e.slot) { cb('Restore')(); }
    });`
          , Cn = /iPhone/
          , Dn = /Safari\//
          , En = /CriOS|FxiOS|EdgiOS|OPiOS/
          , Gn = Object.freeze(["begin", "before", "after", "end"]);
        class Zp {
            constructor(d) {
                Sa.add(this);
                qa.set(this, void 0);
                Ha.set(this, "idle");
                lc.set(this, void 0);
                Ag.set(this, []);
                jd.set(this, null);
                $d.set(this, null);
                Bg.set(this, !1);
                qi.set(this, 5E3);
                Ja(this, qa, d, "f");
                Ja(this, lc, d.format, "f")
            }
            start(d, e) {
                if (B(this, Ha, "f") === "idle") {
                    Ja(this, Ha, "requested", "f");
                    Ja(this, Bg, d === "show", "f");
                    Ja(this, qi, e, "f");
                    Ja(this, Ag, [], "f");
                    B(this, Sa, "m", $p).call(this);
                    B(this, Sa, "m", Ck).call(this);
                    B(this, Sa, "m", Dk).call(this, e);
                    var f, g;
                    (g = (f = B(this, qa, "f")).trace) == null || g.call(f, `asked ${B(this, qa, "f").sa} for a ${B(this, lc, "f")} (${d}, ${e}ms)`)
                }
            }
            show() {
                B(this, Ha, "f") === "ready" ? B(this, Sa, "m", Ek).call(this) : B(this, Ha, "f") === "requested" && Ja(this, Bg, !0, "f")
            }
            destroy() {
                Ja(this, Ha, "done", "f");
                B(this, Sa, "m", Cg).call(this)
            }
        }
        var qa = new WeakMap;
        var Ha = new WeakMap;
        var lc = new WeakMap;
        var Ag = new WeakMap;
        var jd = new WeakMap;
        var $d = new WeakMap;
        var Bg = new WeakMap;
        var qi = new WeakMap;
        var Sa = new WeakSet;
        var Ck = function() {
            B(this, Ag, "f").push(B(this, lc, "f"));
            var d = B(this, qa, "f").Kg(B(this, lc, "f"));
            Ja(this, jd, d, "f");
            var e = d.ff;
            var f = B(this, qa, "f").sa;
            var g = B(this, lc, "f")
              , h = B(this, qa, "f").G
              , l = B(this, qa, "f").eb
              , m = B(this, qa, "f").yd
              , t = B(this, qa, "f").ae
              , w = B(this, qa, "f").ba
              , y = B(this, qa, "f").mobile
              , I = d.re
              , M = g === "REWARDED";
            y = y ? "mobile_games" : "pc_games";
            var G = m !== null && m.length > 0;
            f = `(function() {
  var AD_UNIT_PATH       = ${ub(f)};
  var OUT_OF_PAGE_FORMAT = ${ub(g)};
  var PAGE_URL           = ${ub(h)};
  var C_PARAMS           = ${l === null ? "false" : ub(l)};
  var PPS_IDS            = ${G ? ub(m) : "false"};
  var INSTANCE_ID        = ${ub(w)};

  function cb(name) {
    return ${I}[${ub("__wgAdInterstitial_")} + INSTANCE_ID + '_' + name];
  }

  /*
   * Say how far this got.
   *
   * This code runs in a scope the SDK cannot see into and reports back only through the
   * callbacks below, so an attempt that answers nothing is indistinguishable from one whose
   * script never ran \u2014 and on a live publisher it timed out with GPT loaded, the format enum
   * present, and no ad request on the wire at all. Optional and wrapped: a missing step
   * callback, or a throw inside it, must never be what stops an ad. V78.
   */
  function step(what) {
    try { var fn = cb('OnStep'); if (fn) { fn(what); } } catch (e) {}
  }

  window.googletag = window.googletag || { cmd: [] };
${t ? "\n  var ppid = false;\n  try { ppid = window.mcmPublisherProvidedId || window.top.mcmPublisherProvidedId; } catch (e) {}\n  if (ppid) {\n    googletag.cmd.push(function() { googletag.pubads().setPublisherProvidedId(ppid); });\n  }\n" : ""}
  function defineAdSlot() {
    step('defining ' + AD_UNIT_PATH + ' as ' + OUT_OF_PAGE_FORMAT);
    var adSlot = googletag.defineOutOfPageSlot(AD_UNIT_PATH, googletag.enums.OutOfPageFormat[OUT_OF_PAGE_FORMAT]);

    if (!adSlot) { step('GPT returned no slot'); cb('OnNoFill')(); return; }

    // Exposed so teardown can destroy the slot and drop the listeners it added. In
    // embedded mode pubads() is shared across retries, and untracked listeners would
    // accumulate for the lifetime of the page.
    window[${ub("__wgAdInterstitial_")} + INSTANCE_ID + '_slot'] = adSlot;
    var listeners = [];
    window[${ub("__wgAdInterstitial_")} + INSTANCE_ID + '_listeners'] = listeners;
    function on(name, fn) {
      googletag.pubads().addEventListener(name, fn);
      listeners.push([name, fn]);
    }
${l === null ? "" : "\n    var entries = new URLSearchParams(C_PARAMS).entries();\n    for (var pair of entries) { adSlot['setTargeting'](pair[0], pair[1]); }\n"}
    adSlot['setTargeting']('content_cat', ['casual_games', ${ub(y)}, 'video_gaming']);
    adSlot.addService(googletag.pubads());

    on('slotRenderEnded', function(event) {
      if (adSlot === event.slot && event.isEmpty) { cb('OnNoFill')(); }
    });

${M ? Xp : Yp}
${M ? "" : "\n    if (!window.__wgGptServicesEnabled) {\n      googletag.pubads().enableSingleRequest();\n    }\n"}
    /*
     * Whether the page had GPT running before we got here.
     *
     * display() fetches a slot only when GPT has not already been through
     * enableServices(). On a publisher whose own GPT started at page load \u2014 and
     * pubads_impl.js is on most of them \u2014 a slot defined afterwards is merely registered
     * by display, and nothing is requested until it is refreshed. Measured live: the
     * injected script ran to completion, GPT returned a slot, and no ad request left the
     * page. V78.
     */
    var pubadsAlreadyLive = !!googletag.pubadsReady;

    window.__wgGptServicesEnabled = true;
    googletag.enableServices();
    step('displaying');
    googletag.display(adSlot);
    step('displayed');

    /*
     * Only for a late slot, and never otherwise: display has already fetched a slot on a
     * page whose GPT we started ourselves, and refreshing that one would ask twice for one
     * placement.
     */
    if (pubadsAlreadyLive) {
      step('refreshing a late slot');
      googletag.pubads().refresh([adSlot]);
    }
  }

  step('injected, queued behind googletag.cmd');
  googletag.cmd.push(function() {
    step('googletag.cmd ran');
    if (!window.__wgGptPageUrlSet) {
      window.__wgGptPageUrlSet = true;
      googletag.pubads().set('page_url', PAGE_URL);
    }
${G ? "\n    if (PPS_IDS && typeof googletag.setConfig === 'function') {\n      try {\n        googletag.setConfig({\n          pps: { taxonomies: { 'IAB_AUDIENCE_1_1': { values: PPS_IDS } } }\n        });\n      } catch (e) {}\n    }\n" : ""}
    defineAdSlot();
  });
})();`;
            e.call(d, f)
        };
        var $p = function() {
            var d = B(this, qa, "f").hb
              , e = f => Ae(B(this, qa, "f").ba, f);
            d[e("OnReady")] = () => {
                var f, g;
                (g = (f = B(this, qa, "f")).trace) == null || g.call(f, "the slot answered: ready");
                B(this, Ha, "f") === "requested" && (Ja(this, Ha, "ready", "f"),
                B(this, Sa, "m", Dg).call(this),
                B(this, qa, "f").Z(),
                B(this, Bg, "f") && B(this, Sa, "m", Ek).call(this))
            }
            ;
            d[e("OnStep")] = f => {
                var g, h;
                (h = (g = B(this, qa, "f")).trace) == null || h.call(g, `the script: ${String(f)}`)
            }
            ;
            d[e("OnNoFill")] = () => {
                var f, g;
                (g = (f = B(this, qa, "f")).trace) == null || g.call(f, "the slot answered: no fill");
                B(this, Sa, "m", aq).call(this)
            }
            ;
            d[e("OnRewarded")] = f => {
                B(this, Ha, "f") !== "done" && B(this, qa, "f").Ai(f)
            }
            ;
            d[e("Restore")] = () => {
                if (B(this, Ha, "f") !== "done") {
                    var f = B(this, Ha, "f") === "shown";
                    Ja(this, Ha, "done", "f");
                    B(this, Sa, "m", Cg).call(this);
                    B(this, qa, "f").mb(f)
                }
            }
        };
        var Ek = function() {
            if (B(this, Ha, "f") !== "shown" && B(this, Ha, "f") !== "done") {
                Ja(this, Ha, "shown", "f");
                B(this, Sa, "m", Dg).call(this);
                var d, e;
                (d = B(this, jd, "f")) == null || (e = d.wj) == null || e.call(d);
                var f, g, h;
                d = (h = (g = (f = B(this, jd, "f")) == null ? void 0 : f.scope()) != null ? g : null) == null ? void 0 : h[Ae(B(this, qa, "f").ba, "show")];
                if (typeof d === "function")
                    try {
                        d()
                    } catch (l) {}
                B(this, qa, "f").rd(B(this, lc, "f"))
            }
        };
        var aq = function() {
            if (B(this, Ha, "f") !== "done" && B(this, Ha, "f") !== "shown") {
                var d = B(this, lc, "f") === "REWARDED" ? "GAME_MANUAL_INTERSTITIAL" : "REWARDED";
                if (!B(this, qa, "f").Pc || B(this, Ag, "f").includes(d))
                    Ja(this, Ha, "done", "f"),
                    B(this, Sa, "m", Cg).call(this),
                    B(this, qa, "f").mf("nofill");
                else {
                    Ja(this, lc, d, "f");
                    Ja(this, Ha, "requested", "f");
                    var e;
                    (e = B(this, jd, "f")) == null || e.$d();
                    B(this, Sa, "m", Ck).call(this);
                    B(this, Sa, "m", Dk).call(this, B(this, qi, "f"))
                }
            }
        };
        var Dk = function(d) {
            B(this, Sa, "m", Dg).call(this);
            Ja(this, $d, B(this, qa, "f").l( () => {
                Ja(this, $d, null, "f");
                B(this, Ha, "f") === "requested" && (Ja(this, Ha, "done", "f"),
                B(this, Sa, "m", Cg).call(this),
                B(this, qa, "f").mf("timeout"))
            }
            , d), "f")
        };
        var Dg = function() {
            B(this, $d, "f") !== null && (B(this, qa, "f").A(B(this, $d, "f")),
            Ja(this, $d, null, "f"))
        };
        var Cg = function() {
            B(this, Sa, "m", Dg).call(this);
            var d;
            (d = B(this, jd, "f")) == null || d.$d();
            Ja(this, jd, null, "f");
            d = B(this, qa, "f").hb;
            for (let e of "OnReady OnNoFill OnRewarded Restore show slot listeners".split(" "))
                delete d[Ae(B(this, qa, "f").ba, e)]
        };
        class bq {
            constructor(d) {
                this.re = "window.parent";
                ae.set(this, void 0);
                Dc.set(this, null);
                Vg(this, ae, d, "f")
            }
            ff(d) {
                var e = Yb(this, ae, "f").document.createElement("iframe")
                  , f = e.style;
                f.position = "absolute";
                f.top = "0";
                f.left = "0";
                f.border = "none";
                f.zIndex = Yb(this, ae, "f").zIndex;
                f.visibility = "hidden";
                f.pointerEvents = "none";
                f.setProperty("width", "100%", "important");
                f.setProperty("height", "100%", "important");
                e.srcdoc = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>html, body { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; }body{backdrop-filter: blur(100px);}</style>
  <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"><\/script>
</head>
<body>
  <script>
${d}
  <\/script>
</body>
</html>`;
                e.setAttribute("wg-interstitial-frame", "");
                Yb(this, ae, "f").container.insertBefore(e, Yb(this, ae, "f").container.firstChild);
                Vg(this, Dc, e, "f")
            }
            wj() {
                if (Yb(this, Dc, "f") !== null) {
                    var d = Yb(this, Dc, "f").style;
                    d.visibility = "visible";
                    d.pointerEvents = "auto"
                }
            }
            scope() {
                var d, e;
                return (e = (d = Yb(this, Dc, "f")) == null ? void 0 : d.contentWindow) != null ? e : null
            }
            $d() {
                if (Yb(this, Dc, "f") !== null) {
                    try {
                        Yb(this, Dc, "f").remove()
                    } catch (d) {}
                    Vg(this, Dc, null, "f")
                }
            }
        }
        var ae = new WeakMap;
        var Dc = new WeakMap;
        class cq {
            constructor(d) {
                Fk.add(this);
                this.re = "window";
                Hb.set(this, void 0);
                Ve.set(this, []);
                Eg.set(this, !1);
                of(this, Hb, d, "f")
            }
            ff(d) {
                if (kb(this, Hb, "f").document.querySelector('script[src*="https://securepubads.g.doubleclick.net/tag/js/gpt.js"]') === null) {
                    var e = kb(this, Hb, "f").document.createElement("script");
                    e.async = !0;
                    e.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
                    kb(this, Hb, "f").document.head.appendChild(e);
                    kb(this, Ve, "f").push(e)
                }
                e = kb(this, Hb, "f").document.createElement("script");
                e.textContent = d;
                kb(this, Hb, "f").document.head.appendChild(e);
                kb(this, Ve, "f").push(e);
                of(this, Eg, !0, "f")
            }
            scope() {
                return kb(this, Eg, "f") ? kb(this, Hb, "f").window : null
            }
            $d() {
                kb(this, Fk, "m", dq).call(this);
                for (let d of kb(this, Ve, "f"))
                    try {
                        d.remove()
                    } catch (e) {}
                of(this, Ve, [], "f");
                of(this, Eg, !1, "f")
            }
        }
        var Hb = new WeakMap;
        var Ve = new WeakMap;
        var Eg = new WeakMap;
        var Fk = new WeakSet;
        var dq = function() {
            var d = kb(this, Hb, "f").window
              , e = d.googletag
              , f = Ae(kb(this, Hb, "f").ba, "slot")
              , g = Ae(kb(this, Hb, "f").ba, "listeners")
              , h = d[g];
            if (Array.isArray(h) && typeof (e == null ? void 0 : e.pubads) === "function") {
                let l = e.pubads();
                for (let m of h)
                    if (Array.isArray(m))
                        try {
                            let t;
                            (t = l.removeEventListener) == null || t.call(l, m[0], m[1])
                        } catch (t) {}
            }
            h = d[f];
            if (h !== void 0 && h !== null && typeof (e == null ? void 0 : e.destroySlots) === "function")
                try {
                    e.destroySlots([h])
                } catch (l) {}
            delete d[f];
            delete d[g]
        };
        class Po {
            constructor(d) {
                tb.add(this);
                na.set(this, void 0);
                Ec.set(this, null);
                be.set(this, !1);
                We.set(this, null);
                ri.set(this, () => {}
                );
                kd.set(this, !1);
                si.set(this, null);
                ld.set(this, null);
                Za(this, na, d, "f")
            }
            start(d, e, f, g=Gk) {
                Za(this, We, f, "f");
                Za(this, ri, g, "f");
                Za(this, be, !1, "f");
                Za(this, kd, !1, "f");
                var h = J(this, na, "f").container();
                if (h === null || h === void 0)
                    J(this, tb, "m", ce).call(this, {
                        kind: "failed",
                        reason: "no-container"
                    });
                else
                    try {
                        Za(this, Ec, new Zp({
                            trace: l => {
                                var m, t;
                                (t = (m = J(this, na, "f")).trace) == null || t.call(m, `${J(this, na, "f").bf ? "embedded" : "isolated"}: ${l}`)
                            }
                            ,
                            Kg: () => J(this, na, "f").bf ? new cq({
                                document: J(this, na, "f").De,
                                window: J(this, na, "f").hb,
                                ba: J(this, na, "f").ba
                            }) : new bq({
                                document: J(this, na, "f").De,
                                container: h,
                                zIndex: 2147483004
                            }),
                            hb: J(this, na, "f").hb,
                            ba: J(this, na, "f").ba,
                            sa: J(this, na, "f").sa,
                            format: Fj(J(this, na, "f").format),
                            G: J(this, na, "f").G,
                            eb: J(this, na, "f").eb,
                            yd: Jn(J(this, na, "f").yd()),
                            ae: J(this, na, "f").ae,
                            mobile: J(this, na, "f").mobile,
                            Pc: J(this, na, "f").Pc,
                            now: J(this, na, "f").now,
                            l: J(this, na, "f").l,
                            A: J(this, na, "f").A,
                            Z: Gk,
                            rd: () => {
                                if (!J(this, kd, "f")) {
                                    Za(this, kd, !0, "f");
                                    Za(this, si, J(this, tb, "m", ti).call(this), "f");
                                    try {
                                        J(this, ri, "f").call(this)
                                    } catch (l) {
                                        J(this, na, "f").g("onShown", l)
                                    }
                                }
                            }
                            ,
                            Ai: () => {
                                var l;
                                (l = J(this, Ec, "f")) == null || l.destroy();
                                J(this, tb, "m", ce).call(this, {
                                    kind: "closed",
                                    ce: J(this, kd, "f")
                                })
                            }
                            ,
                            mb: l => {
                                J(this, tb, "m", ce).call(this, {
                                    kind: "closed",
                                    ce: l
                                })
                            }
                            ,
                            mf: l => {
                                J(this, tb, "m", ce).call(this, {
                                    kind: "failed",
                                    reason: l
                                })
                            }
                        }), "f"),
                        J(this, Ec, "f").start(d, e)
                    } catch (l) {
                        J(this, na, "f").g("construct", l),
                        J(this, tb, "m", ce).call(this, {
                            kind: "failed",
                            reason: "construction-threw"
                        })
                    }
            }
            show() {
                var d;
                (d = J(this, Ec, "f")) == null || d.show()
            }
            be() {
                if (!J(this, be, "f") && J(this, kd, "f")) {
                    var d = J(this, si, "f");
                    d !== null && (Gj(d, J(this, tb, "m", ti).call(this)) ? J(this, tb, "m", ui).call(this) : J(this, ld, "f") === null && Za(this, ld, J(this, na, "f").l( () => {
                        Za(this, ld, null, "f");
                        if (!J(this, be, "f") && J(this, kd, "f") && !Gj(d, J(this, tb, "m", ti).call(this))) {
                            var e, f;
                            (f = (e = J(this, na, "f")).trace) == null || f.call(e, "the creative no longer fits the window \u2014 ending the attempt");
                            var g;
                            (g = J(this, Ec, "f")) == null || g.destroy();
                            J(this, tb, "m", ce).call(this, {
                                kind: "closed",
                                ce: !0
                            })
                        }
                    }
                    , 1E3), "f"))
                }
            }
            destroy() {
                J(this, tb, "m", ui).call(this);
                var d;
                (d = J(this, Ec, "f")) == null || d.destroy();
                Za(this, Ec, null, "f");
                Za(this, We, null, "f")
            }
        }
        var na = new WeakMap;
        var Ec = new WeakMap;
        var be = new WeakMap;
        var We = new WeakMap;
        var ri = new WeakMap;
        var kd = new WeakMap;
        var si = new WeakMap;
        var ld = new WeakMap;
        var tb = new WeakSet;
        var ti = function() {
            try {
                return J(this, na, "f").kj()
            } catch (d) {
                return J(this, na, "f").g("renderBox", d),
                {
                    width: 0,
                    height: 0
                }
            }
        };
        var ui = function() {
            J(this, ld, "f") !== null && (J(this, na, "f").A(J(this, ld, "f")),
            Za(this, ld, null, "f"))
        };
        var ce = function(d) {
            if (!J(this, be, "f")) {
                Za(this, be, !0, "f");
                J(this, tb, "m", ui).call(this);
                var e = J(this, We, "f");
                Za(this, We, null, "f");
                e == null || e(d)
            }
        };
        var Gk = () => {}
        ;
        class Oo {
            constructor(d) {
                Fg.add(this);
                de.set(this, void 0);
                Gg.set(this, !1);
                md.set(this, null);
                td(this, de, d, "f")
            }
            be() {
                var d;
                (d = Bb(this, md, "f")) == null || d.be()
            }
            reset() {
                var d;
                (d = Bb(this, md, "f")) == null || d.destroy();
                td(this, md, null, "f");
                td(this, Gg, !1, "f")
            }
            kk(d, e) {
                var f = Bb(this, de, "f").tg();
                if (f === null || !Kn({
                    position: f.position,
                    $a: f.$a,
                    ld: d.ld,
                    Fd: d.Fd,
                    wd: d.wd,
                    de: d.de
                }))
                    return !1;
                f = Bb(this, Gg, "f");
                var g = Bb(this, md, "f") !== null
                  , h = d.o
                  , l = d.ua
                  , m = d.Da;
                f = f ? Uf(!1, "already-attempted") : g ? Uf(!1, "ad-pending") : h + (m ? 1 : 0) >= l ? Uf(!1, "no-capacity") : Uf(!0, null);
                if (!f.I) {
                    let t;
                    Bb(this, Fg, "m", Hk).call(this, {
                        kind: "skipped",
                        reason: (t = f.reason) != null ? t : "no-capacity"
                    });
                    return !1
                }
                Bb(this, Fg, "m", eq).call(this, d, e);
                return !0
            }
        }
        var de = new WeakMap;
        var Gg = new WeakMap;
        var md = new WeakMap;
        var Fg = new WeakSet;
        var eq = function(d, e) {
            var f = Bb(this, de, "f").qh();
            td(this, md, f, "f");
            f.start(d.Da ? "prepare" : "show", 2500, g => {
                td(this, md, null, "f");
                var h = Bb(this, de, "f").format();
                g = g.kind === "closed" ? g.ce ? {
                    kind: "shown",
                    format: h
                } : {
                    kind: "no-fill"
                } : g.reason === "timeout" ? {
                    kind: "timeout"
                } : {
                    kind: "no-fill"
                };
                Bb(this, Fg, "m", Hk).call(this, g);
                g.kind !== "skipped" && td(this, Gg, !0, "f");
                e.li(g.kind === "shown")
            }
            , () => {
                e.rd()
            }
            )
        };
        var Hk = function(d) {
            try {
                let e, f;
                (f = (e = Bb(this, de, "f")).Ub) == null || f.call(e, d)
            } catch (e) {}
        };
        var fq = new Map([["live", Object.freeze(["saved"])], ["saved", Object.freeze(["removed"])], ["removed", Object.freeze(["restored"])], ["restored", Object.freeze(["removed"])]]);
        class co {
            constructor(d) {
                Ik.add(this);
                Ib.set(this, void 0);
                yb.set(this, "live");
                jb.set(this, null);
                Hg.set(this, []);
                Jb.set(this, null);
                Xe.set(this, !1);
                vi.set(this, null);
                Ig.set(this, null);
                Ua(this, Ib, d, "f")
            }
            get state() {
                return T(this, yb, "f")
            }
            get shape() {
                var d, e;
                return (e = (d = T(this, jb, "f")) == null ? void 0 : d.shape) != null ? e : null
            }
            save() {
                if (T(this, yb, "f") !== "live")
                    return !1;
                var d = T(this, Ib, "f").container();
                if (d === null)
                    return !1;
                var e = d.querySelector("iframe"), f;
                Ua(this, jb, Mn({
                    Te: e === null ? null : {
                        src: (f = e.getAttribute("src")) != null ? f : e.getAttribute("data-src")
                    },
                    G: T(this, Ib, "f").G,
                    oa: T(this, Ib, "f").oa,
                    wb: T(this, Ib, "f").wb
                }), "f");
                Ua(this, Hg, [...d.childNodes].filter(g => !(g.nodeType === 1 && g.hasAttribute("data-wg-owned"))), "f");
                T(this, jb, "f").shape !== "inline" && e !== null && (Ua(this, Jb, e, "f"),
                e.setAttribute("data-wg-content", "true"));
                Ua(this, vi, d, "f");
                Ua(this, yb, "saved", "f");
                return !0
            }
            remove() {
                var d = T(this, yb, "f"), e;
                if (((e = fq.get(d)) == null ? void 0 : e.includes("removed")) !== !0)
                    return !1;
                d = T(this, Ib, "f").container();
                if (d === null)
                    return !1;
                var f;
                if (((f = T(this, jb, "f")) == null ? void 0 : f.shape) === "inline")
                    for (var g of T(this, Hg, "f"))
                        g.parentNode === d && d.removeChild(g);
                else {
                    var h;
                    if (((h = T(this, jb, "f")) == null ? void 0 : h.zc) === !0 && T(this, Jb, "f") !== null) {
                        f = T(this, Ib, "f");
                        g = f.fj;
                        h = T(this, Jb, "f");
                        try {
                            var l = h.contentWindow
                        } catch (w) {
                            l = null
                        }
                        if (g.call(f, l))
                            return Ua(this, Ig, T(this, Jb, "f").getAttribute("src"), "f"),
                            Ua(this, yb, "removed", "f"),
                            !0;
                        a: {
                            l = T(this, Jb, "f");
                            try {
                                if (l.contentWindow !== null) {
                                    l.contentWindow.location.href = "about:blank";
                                    break a
                                }
                            } catch (w) {}
                            l.setAttribute("src", "about:blank")
                        }
                        Ua(this, Xe, !0, "f")
                    }
                }
                var m, t;
                Ua(this, Ig, (t = (m = T(this, Jb, "f")) == null ? void 0 : m.getAttribute("src")) != null ? t : null, "f");
                Ua(this, yb, "removed", "f");
                return !0
            }
            restore(d) {
                if (T(this, yb, "f") !== "removed") {
                    var e;
                    let y;
                    return Jd(!1, (y = (e = T(this, jb, "f")) == null ? void 0 : e.shape) != null ? y : null, !1, "not-removed")
                }
                if (!T(this, Ib, "f").vj) {
                    Ua(this, yb, "restored", "f");
                    let y, I;
                    return Jd(!1, (I = (y = T(this, jb, "f")) == null ? void 0 : y.shape) != null ? I : null, !0, "nothing-to-restore")
                }
                e = T(this, Ib, "f").container();
                if (e === null) {
                    let y, I;
                    return Jd(!1, (I = (y = T(this, jb, "f")) == null ? void 0 : y.shape) != null ? I : null, !1, "no-container")
                }
                var f;
                if (((f = T(this, jb, "f")) == null ? void 0 : f.shape) === "inline")
                    for (let y of T(this, Hg, "f"))
                        e.appendChild(y);
                else {
                    var g, h, l;
                    let y, I, M;
                    f = (y = (g = T(this, jb, "f")) == null ? void 0 : g.Nc) != null ? y : null;
                    g = (I = (h = T(this, Jb, "f")) == null ? void 0 : h.getAttribute("data-src")) != null ? I : null;
                    d = d.u;
                    h = (M = (l = T(this, jb, "f")) == null ? void 0 : l.shape) != null ? M : "inline";
                    if (d || h === "inline" || h === "self-hosted")
                        l = null;
                    else {
                        var m;
                        l = (m = Ij(g)) != null ? m : Ij(f)
                    }
                    m = l;
                    m !== null && T(this, Jb, "f") !== null && T(this, Xe, "f") && (T(this, Jb, "f").setAttribute("src", m),
                    Ua(this, Xe, !1, "f"))
                }
                Ua(this, yb, "restored", "f");
                var t, w;
                return Jd(!0, (w = (t = T(this, jb, "f")) == null ? void 0 : t.shape) != null ? w : null, !0, null)
            }
            D() {
                var d, e, f = (e = (d = T(this, jb, "f")) == null ? void 0 : d.shape) != null ? e : null;
                T(this, yb, "f") !== "removed" ? Jd(!1, f, !1, "not-removed") : (d = T(this, Ib, "f").container(),
                d !== null && d === T(this, vi, "f") && T(this, Ik, "m", gq).call(this, d) ? this.restore({
                    dd: !1,
                    u: !1
                }) : (Ua(this, yb, "restored", "f"),
                Ua(this, Xe, !1, "f"),
                Jd(!1, f, !0, "view-changed")))
            }
        }
        var Ib = new WeakMap;
        var yb = new WeakMap;
        var jb = new WeakMap;
        var Hg = new WeakMap;
        var Jb = new WeakMap;
        var Xe = new WeakMap;
        var vi = new WeakMap;
        var Ig = new WeakMap;
        var Ik = new WeakSet;
        var gq = function(d) {
            var e;
            if (((e = T(this, jb, "f")) == null ? void 0 : e.shape) === "inline")
                return [...d.childNodes].every(f => f.nodeType === 1 && f.hasAttribute("data-wg-owned"));
            e = T(this, Jb, "f");
            return e !== null && d.contains(e) && e.getAttribute("src") === T(this, Ig, "f")
        };
        var hq = Object.freeze(["useractioncomplete", "tcloaded"]);
        class eo {
            constructor(d) {
                Wa.add(this);
                zb.set(this, void 0);
                Jg.set(this, void 0);
                ee.set(this, new Set);
                Ye.set(this, Vf({
                    J: "unknown",
                    V: null,
                    gb: !1,
                    ub: "",
                    tb: null,
                    Db: "",
                    ja: ""
                }));
                Ze.set(this, !1);
                Kg.set(this, 0);
                $e.set(this, !1);
                wi.set(this, 0);
                af.set(this, new Map);
                Lg.set(this, new Set);
                bf.set(this, null);
                Fc.set(this, null);
                mc.set(this, null);
                xi.set(this, new Set);
                Pa(this, zb, d.ee, "f");
                var e;
                Pa(this, Jg, (e = d.mc) != null ? e : 1E3, "f")
            }
            Aa() {
                return F(this, Ye, "f")
            }
            D(d) {
                F(this, ee, "f").add(d);
                return () => {
                    F(this, ee, "f").delete(d)
                }
            }
            Ja(d) {
                F(this, Wa, "m", Jk).call(this, d)
            }
            start() {
                F(this, bf, "f") !== null || F(this, Ze, "f") || (z(`[afg-cmp] looking for a CMP, up to ${F(this, Jg, "f")}ms`),
                Pa(this, bf, F(this, zb, "f").kg(d => F(this, Wa, "m", iq).call(this, d)), "f"),
                Pa(this, Fc, F(this, zb, "f").l( () => F(this, Wa, "m", Kk).call(this, Vf({
                    J: "timeout",
                    V: null,
                    gb: !1,
                    ub: "",
                    tb: {},
                    Db: "timeout",
                    ja: ""
                })), F(this, Jg, "f")), "f"),
                F(this, Wa, "m", jq).call(this))
            }
            stop() {
                var d;
                (d = F(this, bf, "f")) == null || d.call(this);
                Pa(this, bf, null, "f");
                F(this, Fc, "f") !== null && (F(this, zb, "f").A(F(this, Fc, "f")),
                Pa(this, Fc, null, "f"));
                F(this, mc, "f") !== null && (F(this, zb, "f").A(F(this, mc, "f")),
                Pa(this, mc, null, "f"));
                F(this, af, "f").clear();
                F(this, Lg, "f").clear();
                F(this, ee, "f").clear()
            }
        }
        var zb = new WeakMap;
        var Jg = new WeakMap;
        var ee = new WeakMap;
        var Ye = new WeakMap;
        var Ze = new WeakMap;
        var Kg = new WeakMap;
        var $e = new WeakMap;
        var wi = new WeakMap;
        var af = new WeakMap;
        var Lg = new WeakMap;
        var bf = new WeakMap;
        var Fc = new WeakMap;
        var mc = new WeakMap;
        var xi = new WeakMap;
        var Wa = new WeakSet;
        var jq = function e() {
            F(this, $e, "f") || (Pa(this, Kg, F(this, Kg, "f") + 1, "f"),
            F(this, Wa, "m", kq).call(this),
            F(this, Kg, "f") * 100 < 3E4 ? Pa(this, mc, F(this, zb, "f").l( () => {
                Pa(this, mc, null, "f");
                F(this, Wa, "m", e).call(this)
            }
            , 100), "f") : z("[afg-cmp] gave up looking after 30000ms \u2014 no CMP on this page"))
        };
        var kq = function() {
            F(this, Wa, "m", Lk).call(this, "ping", e => {
                e = (e == null ? void 0 : e.cmpLoaded) === !0;
                z(`[afg-cmp] ping answered: cmpLoaded=${e}`);
                e && F(this, Wa, "m", lq).call(this)
            }
            )
        };
        var lq = function() {
            F(this, $e, "f") || (Pa(this, $e, !0, "f"),
            z("[afg-cmp] the CMP is up \u2014 subscribing to its updates"),
            F(this, Wa, "m", Lk).call(this, "addEventListener", (e, f) => {
                if (f && e !== null && e !== void 0) {
                    f = F(this, Wa, "m", Jk);
                    var g = f.call;
                    let m = e != null ? e : {};
                    var h, l;
                    let t = ((l = (h = m.vendor) == null ? void 0 : h.legitimateInterests) == null ? void 0 : l["755"]) === !0;
                    h = m.gdprApplies;
                    l = zh(m.eventStatus);
                    e = Vf({
                        J: hq.includes(l) ? "resolved" : "pending",
                        V: typeof h === "boolean" ? h : null,
                        gb: t,
                        ub: zh(m.tcString),
                        tb: e,
                        Db: zh(m.cmpStatus),
                        ja: l
                    });
                    g.call(f, this, e)
                } else
                    z(`[afg-cmp] addEventListener answered with nothing (success=${f})`)
            }
            ))
        };
        var Lk = function(e, f) {
            var g, h = F(this, zb, "f").Gh();
            if (h !== null)
                F(this, Wa, "m", Mg).call(this, e, "window.__tcfapi"),
                h(e, 2, f);
            else if (h = F(this, zb, "f").gk(),
            h !== null)
                F(this, Wa, "m", Mg).call(this, e, "top.__tcfapi"),
                h(e, 2, f);
            else if (h = F(this, zb, "f").Yg(),
            h === null)
                F(this, Wa, "m", Mg).call(this, e, "nowhere \u2014 no __tcfapi, and no __tcfapiLocator frame above");
            else {
                F(this, Wa, "m", Mg).call(this, e, "postMessage to the __tcfapiLocator owner");
                var l = Pa(this, wi, (g = F(this, wi, "f"),
                ++g), "f");
                F(this, af, "f").set(l, f);
                e === "addEventListener" && F(this, Lg, "f").add(l);
                h.postMessage({
                    __tcfapiCall: {
                        command: e,
                        version: 2,
                        callId: l,
                        parameter: null
                    }
                }, "*")
            }
        };
        var Mg = function(e, f) {
            F(this, xi, "f").has(e) || (F(this, xi, "f").add(e),
            z(`[afg-cmp] ${e} via ${f}`))
        };
        var iq = function(e) {
            var f;
            a: {
                if (typeof e === "string")
                    try {
                        var g = JSON.parse(e);
                        break a
                    } catch (h) {
                        g = null;
                        break a
                    }
                g = e !== null && typeof e === "object" ? e : null
            }
            e = (f = g) == null ? void 0 : f.__tcfapiReturn;
            e !== void 0 && (f = F(this, af, "f").get(e.callId),
            f !== void 0 && (g = e.callId,
            F(this, Lg, "f").has(g) || F(this, af, "f").delete(g),
            f(e.returnValue, e.success === !0)))
        };
        var Jk = function(e) {
            if (F(this, Ze, "f") && e.J !== "resolved")
                z(`[afg-cmp] ${e.ja || e.J} arrived after the answer was settled \u2014 noted, not applied`);
            else {
                z(`[afg-cmp] ${e.J}: eventStatus=${e.ja || "none"} cmpStatus=${e.Db || "none"} gdprApplies=${String(e.V)} google-LI=${e.gb} npa=${e.jf}`);
                Pa(this, Ye, e, "f");
                for (let f of F(this, ee, "f"))
                    try {
                        f(e)
                    } catch (g) {}
                e.J === "resolved" && F(this, Wa, "m", Kk).call(this, e)
            }
        };
        var Kk = function(e) {
            if (!F(this, Ze, "f") && (Pa(this, Ze, !0, "f"),
            F(this, Fc, "f") !== null && (F(this, zb, "f").A(F(this, Fc, "f")),
            Pa(this, Fc, null, "f")),
            F(this, mc, "f") === null || e.J !== "resolved" && !F(this, $e, "f") || (F(this, zb, "f").A(F(this, mc, "f")),
            Pa(this, mc, null, "f")),
            F(this, Ye, "f").J !== "resolved")) {
                Pa(this, Ye, e, "f");
                z(`[afg-cmp] settled: ${e.J}${e.J === "timeout" ? " \u2014 nobody answered in time, so nothing waits on one any more" : ""}`);
                for (let f of F(this, ee, "f"))
                    try {
                        f(e)
                    } catch (g) {}
            }
        };
        class fo {
            constructor(e) {
                fe.set(this, void 0);
                nd.set(this, null);
                nf(this, fe, e, "f")
            }
            start() {
                try {
                    Kc(this, fe, "f").ready() ? nf(this, nd, Bh(Kc(this, fe, "f").read()), "f") : Kc(this, fe, "f").subscribe(e => {
                        nf(this, nd, Bh(e), "f")
                    }
                    )
                } catch (e) {}
            }
            Se() {
                if (Kc(this, nd, "f") !== null && Kc(this, nd, "f").length > 0)
                    return Kc(this, nd, "f");
                try {
                    let e = Bh(Kc(this, fe, "f").read());
                    e !== null && nf(this, nd, e, "f");
                    return e
                } catch (e) {
                    return null
                }
            }
        }
        var fe = new WeakMap;
        var nd = new WeakMap;
        class mq {
            constructor(e) {
                Ng.set(this, void 0);
                Og.set(this, 0);
                Gc.set(this, null);
                mf(this, Ng, e, "f")
            }
            get xj() {
                return Xb(this, Gc, "f") !== null
            }
            get Ge() {
                return Xb(this, Gc, "f") === null ? Xb(this, Og, "f") : Xb(this, Og, "f") + Math.max(0, Xb(this, Ng, "f").call(this) - Xb(this, Gc, "f"))
            }
            resume() {
                Xb(this, Gc, "f") === null && mf(this, Gc, Xb(this, Ng, "f").call(this), "f")
            }
            pause() {
                Xb(this, Gc, "f") !== null && (mf(this, Og, this.Ge, "f"),
                mf(this, Gc, null, "f"))
            }
            Fj(e) {
                e ? this.resume() : this.pause()
            }
        }
        var Ng = new WeakMap;
        var Og = new WeakMap;
        var Gc = new WeakMap;
        class nq {
            constructor(e, f, g) {
                od.set(this, void 0);
                Ab.set(this, void 0);
                Hc.set(this, !1);
                yi.set(this, !1);
                sd(this, od, e.createElement("div"), "f");
                Ia(this, od, "f").className = "wgAppInstall";
                var h = Ia(this, od, "f").attachShadow({
                    mode: "open"
                })
                  , l = e.createElement("style");
                l.textContent = '\n:host { all: initial; }\n\n.banner {\n    position: fixed;\n    top: 0;\n    left: 50%;\n    z-index: 2147483000;\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    box-sizing: border-box;\n    max-width: min(420px, calc(100vw - 24px));\n    padding: 10px 12px;\n    border-radius: 0 0 12px 12px;\n    background: var(--wg-bg, #569aff);\n    box-shadow: 0 6px 24px rgba(0, 0, 0, .28);\n    font: 400 14px/1.35 system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;\n    color: #fff;\n    -webkit-font-smoothing: antialiased;\n    transform: translate(-50%, -100%);\n    transition: transform .28s cubic-bezier(.2, .7, .3, 1);\n}\n\n.banner.shown { transform: translate(-50%, 0); }\n\n@media (prefers-reduced-motion: reduce) {\n    .banner { transition: none; }\n}\n\n.icon {\n    flex: 0 0 auto;\n    width: 38px;\n    height: 38px;\n    border-radius: 9px;\n    background: rgba(255, 255, 255, .18);\n    object-fit: cover;\n}\n\n.text {\n    flex: 1 1 auto;\n    min-width: 0;\n}\n\n.title {\n    display: block;\n    overflow: hidden;\n    font-weight: 600;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\n.subtitle {\n    display: block;\n    font-size: 12px;\n    opacity: .85;\n}\n\n.install {\n    flex: 0 0 auto;\n    padding: 7px 14px;\n    border: 0;\n    border-radius: 999px;\n    background: var(--wg-btn, #ff9600);\n    font: inherit;\n    font-weight: 600;\n    color: #fff;\n    cursor: pointer;\n}\n\n.install:hover { filter: brightness(1.08); }\n.install:focus-visible { outline: 2px solid #fff; outline-offset: 2px; }\n\n.close {\n    flex: 0 0 auto;\n    width: 26px;\n    height: 26px;\n    padding: 0;\n    border: 0;\n    border-radius: 50%;\n    background: rgba(255, 255, 255, .16);\n    font: inherit;\n    font-size: 16px;\n    line-height: 1;\n    color: #fff;\n    cursor: pointer;\n}\n\n.close:hover { background: rgba(255, 255, 255, .28); }\n.close:focus-visible { outline: 2px solid #fff; outline-offset: 2px; }\n';
                h.appendChild(l);
                sd(this, Ab, e.createElement("div"), "f");
                Ia(this, Ab, "f").className = "banner";
                Ia(this, Ab, "f").setAttribute("role", "dialog");
                Ia(this, Ab, "f").setAttribute("aria-label", f.title);
                Ia(this, Ab, "f").style.setProperty("--wg-bg", Jj(f.backgroundColor, "#569aff"));
                Ia(this, Ab, "f").style.setProperty("--wg-btn", Jj(f.Cc, "#ff9600"));
                f.Re !== null && (l = e.createElement("img"),
                l.className = "icon",
                l.src = f.Re,
                l.alt = "",
                Ia(this, Ab, "f").appendChild(l));
                l = e.createElement("div");
                l.className = "text";
                var m = e.createElement("span");
                m.className = "title";
                m.textContent = f.title;
                var t = e.createElement("span");
                t.className = "subtitle";
                t.textContent = f.Wd;
                l.append(m, t);
                m = e.createElement("button");
                m.className = "install";
                m.type = "button";
                m.textContent = f.ph;
                m.addEventListener("click", () => {
                    g.ri()
                }
                );
                e = e.createElement("button");
                e.className = "close";
                e.type = "button";
                e.textContent = "\u00d7";
                e.setAttribute("aria-label", f.Rg);
                e.addEventListener("click", () => {
                    g.ki()
                }
                );
                Ia(this, Ab, "f").append(l, m, e);
                h.appendChild(Ia(this, Ab, "f"))
            }
            get element() {
                return Ia(this, od, "f")
            }
            get yh() {
                return Ia(this, Hc, "f")
            }
            show(e, f) {
                Ia(this, Hc, "f") || Ia(this, yi, "f") || (sd(this, Hc, !0, "f"),
                e.appendChild(Ia(this, od, "f")),
                f( () => {
                    Ia(this, Hc, "f") && Ia(this, Ab, "f").classList.add("shown")
                }
                ))
            }
            aa(e) {
                Ia(this, Hc, "f") && (sd(this, Hc, !1, "f"),
                Ia(this, Ab, "f").classList.remove("shown"),
                e( () => {
                    this.remove()
                }
                , 300))
            }
            remove() {
                sd(this, yi, !0, "f");
                sd(this, Hc, !1, "f");
                Ia(this, od, "f").remove()
            }
        }
        var od = new WeakMap;
        var Ab = new WeakMap;
        var Hc = new WeakMap;
        var yi = new WeakMap;
        var oq = Object.freeze({
            title: "Install this game",
            Wd: "Play it from your home screen",
            ad: "Install",
            Qg: "Not now"
        });
        class so {
            constructor(e) {
                ha.add(this);
                ia.set(this, void 0);
                ge.set(this, void 0);
                he.set(this, void 0);
                zi.set(this, void 0);
                Ai.set(this, []);
                ie.set(this, null);
                je.set(this, null);
                Pg.set(this, !1);
                Qg.set(this, !1);
                cf.set(this, null);
                df.set(this, !1);
                Bi.set(this, !1);
                Ta(this, ia, e, "f");
                Ta(this, ge, Object.assign({}, oq, e.Xk), "f");
                Ta(this, he, new mq(e.now), "f");
                var f = zi;
                e = e.C.Pa;
                e = e !== null && Number.isFinite(e) ? Math.max(3E4, e) : 3E5;
                Ta(this, f, e, "f")
            }
            async start() {
                if (x(this, Bi, "f"))
                    return !1;
                Ta(this, Bi, !0, "f");
                if (!x(this, ia, "f").C.ie)
                    return x(this, ha, "m", Sb).call(this, "addToHome is off"),
                    !1;
                Ta(this, Qg, x(this, ha, "m", pq).call(this), "f");
                if (!x(this, ha, "m", qq).call(this))
                    return x(this, ha, "m", Sb).call(this, "no manifest could be built"),
                    !1;
                x(this, ha, "m", rq).call(this);
                x(this, ha, "m", Rg).call(this);
                var e = await Pn({
                    G: x(this, ia, "f").hd.G,
                    path: x(this, ia, "f").C.Bj,
                    container: x(this, ia, "f").Aj,
                    g: x(this, ia, "f").g
                });
                e || x(this, ha, "m", Sb).call(this, "no service worker, so no install prompt");
                return e
            }
            D(e) {
                x(this, df, "f") !== e && (Ta(this, df, e, "f"),
                e && x(this, ha, "m", Sg).call(this),
                x(this, ha, "m", Rg).call(this))
            }
            destroy() {
                x(this, ha, "m", Ci).call(this);
                x(this, he, "f").pause();
                for (let f of x(this, Ai, "f").splice(0))
                    f();
                var e;
                (e = x(this, je, "f")) == null || e.remove();
                Ta(this, je, null, "f")
            }
        }
        var ia = new WeakMap;
        var ge = new WeakMap;
        var he = new WeakMap;
        var zi = new WeakMap;
        var Ai = new WeakMap;
        var ie = new WeakMap;
        var je = new WeakMap;
        var Pg = new WeakMap;
        var Qg = new WeakMap;
        var cf = new WeakMap;
        var df = new WeakMap;
        var Bi = new WeakMap;
        var ha = new WeakSet;
        var rq = function() {
            var {window: e, document: f} = x(this, ia, "f");
            x(this, ha, "m", Di).call(this, e, "beforeinstallprompt", g => {
                g.preventDefault();
                Ta(this, ie, g, "f");
                x(this, ha, "m", Sb).call(this, "the browser offered an install prompt");
                x(this, ha, "m", Rg).call(this)
            }
            );
            x(this, ha, "m", Di).call(this, e, "appinstalled", () => {
                Ta(this, Pg, !0, "f");
                Ta(this, ie, null, "f");
                x(this, ha, "m", Sg).call(this);
                x(this, ha, "m", Sb).call(this, "installed");
                x(this, ha, "m", Ci).call(this)
            }
            );
            x(this, ha, "m", Di).call(this, f, "visibilitychange", () => {
                x(this, ha, "m", Rg).call(this)
            }
            )
        };
        var Di = function(e, f, g) {
            e.addEventListener(f, g);
            x(this, Ai, "f").push( () => {
                e.removeEventListener(f, g)
            }
            )
        };
        var qq = function() {
            var e = aj(Object.assign({}, x(this, ia, "f").hd, {
                C: x(this, ia, "f").C
            }));
            if (e === null)
                return !1;
            var {document: f} = x(this, ia, "f")
              , g = f.querySelector('link#wgpmanifest[rel="manifest"]');
            if (g === null) {
                if (f.querySelector('link[rel="manifest"]') !== null)
                    return x(this, ha, "m", Sb).call(this, "the page already declares a manifest"),
                    !1;
                g = f.createElement("link");
                g.rel = "manifest";
                g.id = "wgpmanifest";
                f.head.appendChild(g)
            }
            var h = g.href;
            try {
                let l = new Blob([JSON.stringify(e)],{
                    type: "application/manifest+json"
                });
                g.href = URL.createObjectURL(l);
                h.startsWith("blob:") && URL.revokeObjectURL(h)
            } catch (l) {
                let m, t;
                (t = (m = x(this, ia, "f")).g) == null || t.call(m, "could not write the manifest", l);
                return !1
            }
            x(this, ia, "f").C.Gf !== null && (f.createElement("img").src = x(this, ia, "f").C.Gf);
            return !0
        };
        var Rg = function f() {
            x(this, ha, "m", Ci).call(this);
            var g = x(this, ia, "f").document.visibilityState !== "hidden";
            x(this, he, "f").Fj(g && !x(this, df, "f") && !x(this, Pg, "f"));
            var h;
            g = On({
                Yi: x(this, ie, "f") !== null,
                Li: x(this, he, "f").Ge,
                tj: x(this, zi, "f"),
                gg: x(this, df, "f"),
                Vg: g,
                mg: x(this, Pg, "f"),
                Sg: x(this, Qg, "f"),
                Mj: ((h = x(this, je, "f")) == null ? void 0 : h.yh) === !0
            });
            g.show ? x(this, ha, "m", sq).call(this) : (x(this, ha, "m", Sb).call(this, g.reason),
            g.reason === "still-playing" && x(this, he, "f").xj && Ta(this, cf, x(this, ia, "f").window.setTimeout( () => {
                x(this, ha, "m", f).call(this)
            }
            , Math.max(250, g.jj)), "f"))
        };
        var sq = function() {
            var {document: f} = x(this, ia, "f");
            if (x(this, ia, "f").C.button !== null) {
                var g = f.querySelector(x(this, ia, "f").C.button);
                let t = x(this, ia, "f").C.container === null ? null : f.querySelector(x(this, ia, "f").C.container);
                if (g !== null) {
                    t == null || t.setAttribute("wg-app-install", "true");
                    g.addEventListener("click", () => {
                        x(this, ha, "m", Mk).call(this)
                    }
                    , {
                        once: !0
                    });
                    x(this, ha, "m", Sb).call(this, "offered through the publisher own button");
                    return
                }
            }
            var h, l, m;
            g = ((h = x(this, ia, "f").Ik) != null ? h : (t, w) => new nq(f,t,w))({
                title: x(this, ge, "f").title,
                Wd: x(this, ge, "f").Wd,
                ph: x(this, ge, "f").ad,
                Rg: x(this, ge, "f").Qg,
                Re: x(this, ha, "m", tq).call(this),
                backgroundColor: (l = x(this, ia, "f").C.backgroundColor) != null ? l : "#569aff",
                Cc: (m = x(this, ia, "f").C.Cc) != null ? m : "#ff9600"
            }, {
                ri: () => {
                    x(this, ha, "m", Mk).call(this)
                }
                ,
                ki: () => {
                    x(this, ha, "m", Nk).call(this)
                }
            });
            Ta(this, je, g, "f");
            g.show(f.body, t => {
                typeof x(this, ia, "f").window.requestAnimationFrame === "function" ? x(this, ia, "f").window.requestAnimationFrame( () => {
                    t()
                }
                ) : t()
            }
            );
            x(this, ha, "m", Sb).call(this, "banner shown")
        };
        var Mk = async function() {
            var f = x(this, ie, "f");
            Ta(this, ie, null, "f");
            x(this, ha, "m", Sg).call(this);
            if (f !== null)
                try {
                    await f.prompt();
                    let g = await f.userChoice;
                    x(this, ha, "m", Sb).call(this, `the player ${g.outcome} the install prompt`);
                    g.outcome !== "accepted" && x(this, ha, "m", Nk).call(this)
                } catch (g) {
                    let h, l;
                    (l = (h = x(this, ia, "f")).g) == null || l.call(h, "the install prompt failed", g)
                }
        };
        var Nk = function() {
            Ta(this, Qg, !0, "f");
            x(this, ha, "m", Sg).call(this);
            try {
                x(this, ia, "f").Ck()
            } catch (f) {
                let g, h;
                (h = (g = x(this, ia, "f")).g) == null || h.call(g, "could not remember the dismissal", f)
            }
        };
        var Sg = function() {
            var f;
            (f = x(this, je, "f")) == null || f.aa( (g, h) => {
                x(this, ia, "f").window.setTimeout(g, h)
            }
            )
        };
        var tq = function() {
            var f = aj(Object.assign({}, x(this, ia, "f").hd, {
                C: x(this, ia, "f").C
            })), g;
            f = f == null ? void 0 : f.icons;
            f = (g = (Array.isArray(f) ? f : [])[0]) == null ? void 0 : g.src;
            return typeof f === "string" ? f : null
        };
        var pq = function() {
            try {
                return x(this, ia, "f").bj()
            } catch (f) {
                return !1
            }
        };
        var Ci = function() {
            x(this, cf, "f") !== null && (x(this, ia, "f").window.clearTimeout(x(this, cf, "f")),
            Ta(this, cf, null, "f"))
        };
        var Sb = function(f) {
            var g, h;
            (h = (g = x(this, ia, "f")).ji) == null || h.call(g, f)
        };
        class uq {
            constructor(f) {
                Ic.add(this);
                Tb.set(this, void 0);
                Tg.set(this, void 0);
                ef.set(this, null);
                Ei.set(this, !1);
                lf(this, Tb, f, "f");
                var g;
                lf(this, Tg, (g = f.Ne) != null ? g : "WeeGooAdManager", "f")
            }
            get isConnected() {
                return Ba(this, Ic, "m", Ok).call(this) !== null
            }
            pause() {
                this.send("Pause")
            }
            resume() {
                this.send("Resume")
            }
            send(f) {
                Ba(this, Ic, "m", Pk).call(this, f)
            }
            D(f) {
                Ba(this, Ic, "m", Pk).call(this, "Unlock", encodeURIComponent(JSON.stringify(f)))
            }
        }
        var Tb = new WeakMap;
        var Tg = new WeakMap;
        var ef = new WeakMap;
        var Ei = new WeakMap;
        var Ic = new WeakSet;
        var Pk = function(f, g) {
            var h = Ba(this, Ic, "m", Ok).call(this);
            if (h !== null)
                try {
                    let l = h.SendMessage;
                    g === void 0 ? l.call(h, Ba(this, Tg, "f"), f) : l.call(h, Ba(this, Tg, "f"), f, g)
                } catch (l) {
                    let m, t;
                    (t = (m = Ba(this, Tb, "f")).g) == null || t.call(m, f, l)
                }
        };
        var Ok = function() {
            if (Ba(this, ef, "f") !== null)
                return Ba(this, ef, "f");
            if (Ba(this, Ei, "f"))
                return null;
            lf(this, Ei, !0, "f");
            var f, g, h;
            lf(this, ef, (h = (g = (f = Ba(this, Tb, "f").instance) != null ? f : Ba(this, Ic, "m", vq).call(this)) != null ? g : Ba(this, Ic, "m", wq).call(this)) != null ? h : Ba(this, Ic, "m", xq).call(this), "f");
            return Ba(this, ef, "f")
        };
        var vq = function() {
            if (Ba(this, Tb, "f").Lb === null)
                return null;
            var f = Ba(this, Tb, "f").pa(Ba(this, Tb, "f").Lb);
            return Kj(f) ? f : null
        };
        var wq = function() {
            var f = Ba(this, Tb, "f").pa("wgUnityInstance");
            return Kj(f) ? f : null
        };
        var xq = function() {
            for (let h of Ba(this, Tb, "f").Uc()) {
                let l;
                try {
                    l = Ba(this, Tb, "f").pa(h)
                } catch (m) {
                    continue
                }
                var f = l;
                if (f === null || typeof f !== "object")
                    var g = !1;
                else
                    try {
                        g = Object.prototype.hasOwnProperty.call(f, "SendMessage") && Object.prototype.hasOwnProperty.call(f, "SetFullscreen") && typeof f.SendMessage === "function"
                    } catch (m) {
                        g = !1
                    }
                if (g)
                    return l
            }
            return null
        };
        class ko {
            constructor(f) {
                ob.add(this);
                Xa.set(this, void 0);
                Jc.set(this, null);
                ff.set(this, "WeeGooAdManager");
                Ub.set(this, null);
                ke.set(this, 0);
                gf.set(this, !1);
                pd.set(this, !1);
                Fi.set(this, !1);
                qd.set(this, null);
                Gi.set(this, null);
                Hi.set(this, null);
                Ii.set(this, null);
                Ji.set(this, null);
                ua(this, Xa, f, "f")
            }
            get isConnected() {
                var f;
                return ((f = K(this, Jc, "f")) == null ? void 0 : f.isConnected) === !0
            }
            get Ne() {
                return K(this, ff, "f")
            }
            start() {
                K(this, ob, "m", Qk).call(this) || K(this, ob, "m", yq).call(this)
            }
            ping(f) {
                ua(this, Fi, !0, "f");
                K(this, ob, "m", Rk).call(this);
                typeof f === "string" && f.trim() !== "" && (ua(this, ff, f.trim(), "f"),
                ua(this, Jc, null, "f"),
                ua(this, gf, !1, "f"));
                ua(this, ke, 0, "f");
                this.start()
            }
            D(f) {
                if (f === null || typeof f !== "object")
                    f = null;
                else if (typeof f.sendMessage === "function" || typeof f.SendMessage === "function")
                    f = Object.freeze({
                        kind: "unity",
                        instance: f
                    });
                else {
                    var g;
                    f = Object.freeze({
                        kind: "callbacks",
                        pause: Lj(f.pause),
                        resume: Lj(f.resume),
                        context: (g = f.context) != null ? g : null
                    })
                }
                g = f;
                g !== null && (g.kind === "unity" ? (ua(this, Gi, g.instance, "f"),
                ua(this, Jc, null, "f"),
                ua(this, gf, !1, "f"),
                ua(this, ke, 0, "f"),
                K(this, Fi, "f") ? this.start() : K(this, ob, "m", zq).call(this)) : (ua(this, Hi, g.pause, "f"),
                ua(this, Ii, g.resume, "f"),
                ua(this, Ji, g.context, "f"),
                K(this, pd, "f") && K(this, ob, "m", Sk).call(this)))
            }
            send(f) {
                if (typeof f === "string" && f.trim() !== "") {
                    var g;
                    (g = K(this, Jc, "f")) == null || g.send(f.trim())
                }
            }
            pause() {
                if (!K(this, pd, "f")) {
                    ua(this, pd, !0, "f");
                    var f;
                    (f = K(this, Jc, "f")) == null || f.pause();
                    K(this, ob, "m", Sk).call(this)
                }
            }
            resume(f=!1) {
                if (K(this, pd, "f")) {
                    ua(this, pd, !1, "f");
                    var g;
                    (g = K(this, Jc, "f")) == null || g.resume();
                    K(this, ob, "m", Aq).call(this, f)
                }
            }
            destroy() {
                K(this, Ub, "f") !== null && (K(this, Xa, "f").A(K(this, Ub, "f")),
                ua(this, Ub, null, "f"));
                K(this, ob, "m", Rk).call(this)
            }
        }
        var Xa = new WeakMap;
        var Jc = new WeakMap;
        var ff = new WeakMap;
        var Ub = new WeakMap;
        var ke = new WeakMap;
        var gf = new WeakMap;
        var pd = new WeakMap;
        var Fi = new WeakMap;
        var qd = new WeakMap;
        var Gi = new WeakMap;
        var Hi = new WeakMap;
        var Ii = new WeakMap;
        var Ji = new WeakMap;
        var ob = new WeakSet;
        var zq = function() {
            K(this, Ub, "f") !== null && (K(this, Xa, "f").A(K(this, Ub, "f")),
            ua(this, Ub, null, "f"));
            K(this, qd, "f") === null && ua(this, qd, K(this, Xa, "f").l( () => {
                ua(this, qd, null, "f");
                this.start()
            }
            , 1E3), "f")
        };
        var Rk = function() {
            K(this, qd, "f") !== null && (K(this, Xa, "f").A(K(this, qd, "f")),
            ua(this, qd, null, "f"))
        };
        var Sk = function() {
            K(this, ob, "m", Tk).call(this, "pause", K(this, Hi, "f"), [])
        };
        var Aq = function(f) {
            K(this, ob, "m", Tk).call(this, "resume", K(this, Ii, "f"), [f])
        };
        var Tk = function(f, g, h) {
            if (g !== null)
                try {
                    g.apply(K(this, Ji, "f"), [...h])
                } catch (l) {
                    let m, t;
                    (t = (m = K(this, Xa, "f")).g) == null || t.call(m, f, l)
                }
        };
        var yq = function g() {
            K(this, Ub, "f") === null && (K(this, ke, "f") >= 60 || ua(this, Ub, K(this, Xa, "f").l( () => {
                ua(this, Ub, null, "f");
                ua(this, ke, K(this, ke, "f") + 1, "f");
                K(this, ob, "m", Qk).call(this) || K(this, ob, "m", g).call(this)
            }
            , 1E3), "f"))
        };
        var Qk = function() {
            var g, h = new uq({
                instance: (g = K(this, Gi, "f")) != null ? g : void 0,
                Lb: K(this, Xa, "f").Lb,
                pa: K(this, Xa, "f").pa,
                Uc: K(this, Xa, "f").Uc,
                Ne: K(this, ff, "f"),
                g: K(this, Xa, "f").g
            });
            if (!h.isConnected)
                return !1;
            ua(this, Jc, h, "f");
            K(this, gf, "f") || (ua(this, gf, !0, "f"),
            h.D(K(this, ob, "m", Bq).call(this)));
            K(this, pd, "f") && h.pause();
            return !0
        };
        var Bq = function() {
            var g;
            return Object.assign({}, (g = K(this, Xa, "f").Tc) != null ? g : {}, {
                key: "_246_",
                docDomain: K(this, Xa, "f").Tg,
                adBlock: K(this, Xa, "f").th(),
                uniqueId: K(this, Xa, "f").nk,
                dndName: K(this, ff, "f")
            })
        };
        class jo {
            constructor(g) {
                Vb.set(this, void 0);
                hf.set(this, null);
                Wb(this, Vb, g, "f")
            }
            D() {
                if (za(this, hf, "f") === null && za(this, Vb, "f").source !== null)
                    try {
                        let g = za(this, Vb, "f").Jg();
                        g !== null && (g.src = za(this, Vb, "f").source,
                        g.preload = "auto",
                        Wb(this, hf, g, "f"))
                    } catch (g) {
                        let h, l;
                        (l = (h = za(this, Vb, "f")).g) == null || l.call(h, "could not prepare the jingle", g)
                    }
            }
            play() {
                if (za(this, hf, "f") !== null && Sn(za(this, Vb, "f").Bf())) {
                    try {
                        za(this, Vb, "f").Bk(String(Tn(za(this, Vb, "f").Bf())))
                    } catch (g) {}
                    try {
                        let g = za(this, hf, "f").play();
                        g instanceof Promise && g.catch( () => {}
                        )
                    } catch (g) {
                        let h, l;
                        (l = (h = za(this, Vb, "f")).g) == null || l.call(h, "the jingle would not play", g)
                    }
                }
            }
        }
        var Vb = new WeakMap;
        var hf = new WeakMap;
        class Cq {
            constructor(g) {
                rd.set(this, void 0);
                jf.set(this, null);
                Ya(this, rd, g, "f")
            }
            get jb() {
                return ka(this, rd, "f").jb()
            }
            load() {
                if (ka(this, rd, "f").jb())
                    return Promise.resolve("already-present");
                if (ka(this, jf, "f") !== null)
                    return ka(this, jf, "f");
                Ya(this, jf, new Promise(g => {
                    var h = ka(this, rd, "f").debug === !0 ? "//imasdk.googleapis.com/js/sdkloader/ima3_debug.js" : "//imasdk.googleapis.com/js/sdkloader/ima3.js";
                    ka(this, rd, "f").og(h, l => {
                        g(l && ka(this, rd, "f").jb() ? "loaded" : "failed")
                    }
                    )
                }
                ), "f");
                return ka(this, jf, "f")
            }
        }
        var rd = new WeakMap;
        var jf = new WeakMap;
        var Zj = ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"]
          , Uj = new Cq({
            jb: () => {
                var g;
                return ((g = globalThis.google) == null ? void 0 : g.ima) !== void 0
            }
            ,
            og: (g, h) => {
                Un(document)(g, h)
            }
        })
          , ck = new Set(["complete", "skip", "allAdsCompleted", "adBreakFetchError"])
          , ek = {
            width: 0,
            height: 0
        }
          , De = null
          , Xf = null
          , cg = null
          , Wc = null
          , Ee = null
          , $o = Object.freeze(["localhost", "127.0.0.1", "::1", "[::1]"])
          , ap = Object.freeze([".localhost", ".local"])
          , Dq = function() {
            try {
                let h = window.localStorage.getItem("gapi");
                if (h !== null)
                    return sh(h);
                let l = /(^|[?&])gapi=(\d+)/.exec(window.location.search), m;
                var g = l === null ? null : sh((m = l[2]) != null ? m : null);
                return g !== null ? g : /(^|[?&])wgafgtrace($|[=&])/.test(window.location.search) ? 2 : /(^|[?&])wgafgdebug($|[=&])/.test(window.location.search) ? 1 : Zo(window.location.hostname, window.location.protocol) ? 1 : 0
            } catch (h) {
                return 0
            }
        }();
        try {
            var Uk = window.top === window.self ? "" : window.location.host || "frame"
        } catch (g) {
            Uk = "frame"
        }
        sj(Dq, Uk);
        var dp = {
            ka: (g, h) => {
                h == null || h({
                    reason: "stopped",
                    o: 0,
                    ha: 0,
                    ia: ["no-sdk"]
                });
                return {
                    m: !1,
                    reason: "ads-disabled",
                    j: null
                }
            }
            ,
            $: (g, h) => {
                h == null || h({
                    reason: "stopped",
                    o: 0,
                    ha: 0,
                    ia: ["no-sdk"]
                });
                return {
                    m: !1,
                    reason: "ads-disabled",
                    j: null
                }
            }
            ,
            oc: () => {}
        }
          , gp = /^[A-Za-z_$][\w$]*$/
          , Eq = {
            started: "",
            "page-called-init": "",
            "already-running": "another script holds the name in options.loaderObjectName, so this SDK will not start over it \u2014 it keeps looking, and starts if the name is released",
            aborted: "window.wgAbortInit is set",
            waiting: "window.preroll.config has not appeared yet \u2014 still looking",
            "config-not-ready": "window.preroll.config carries no adTagURL, so it is the placeholder rather than the conf \u2014 still looking, and it starts on what is there if the conf never lands",
            "document-not-ready": "the document has no <body> yet, so there is nowhere to put an ad \u2014 still looking. The SDK was loaded from <head>; nothing is wrong unless this is the last thing you see",
            "gave-up": "window.preroll.config never appeared \u2014 call init(config) yourself, or make sure the config script runs",
            "launch-event-none": 'options.launchEvent is "none", so the page is expected to call init(config) itself'
        }
          , kf = globalThis
          , Ug = function(g) {
            var h = cp(g);
            g.afg9 = h.zb;
            Jh(g, h.zb, Ih(g));
            return h
        }(kf);
        (g => {
            var h = kf.setTimeout;
            if (typeof h !== "function")
                g();
            else
                try {
                    h(g, 0)
                } catch (l) {
                    g()
                }
        }
        )( () => Vo({
            pa: g => kf[g],
            start: g => {
                Ug.zb.init(g)
            }
            ,
            l: (g, h) => {
                var l = kf.setTimeout;
                if (typeof l !== "function")
                    return 0;
                try {
                    return l(g, h)
                } catch (m) {
                    return 0
                }
            }
            ,
            Ii: Ug.zb,
            bd: Ug.bd,
            Xc: () => {
                try {
                    let g = kf.document;
                    return g === void 0 || g.body !== null
                } catch (g) {
                    return !0
                }
            }
            ,
            Ub: g => {
                g !== "started" && g !== "page-called-init" && (g === "gave-up" && Ug.cg(),
                Mb(`[afg] the SDK did not start itself: ${g} \u2014 ${Eq[g]}`))
            }
        }))
    }
    )();
}
).call(this);
