function FM(r, i) {
  for (var o = 0; o < i.length; o++) {
    const s = i[o];
    if (typeof s != 'string' && !Array.isArray(s)) {
      for (const c in s)
        if (c !== 'default' && !(c in r)) {
          const f = Object.getOwnPropertyDescriptor(s, c);
          f &&
            Object.defineProperty(
              r,
              c,
              f.get ? f : { enumerable: !0, get: () => s[c] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(r, Symbol.toStringTag, { value: 'Module' })
  );
}
(function () {
  const i = document.createElement('link').relList;
  if (i && i.supports && i.supports('modulepreload')) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) s(c);
  new MutationObserver((c) => {
    for (const f of c)
      if (f.type === 'childList')
        for (const d of f.addedNodes)
          d.tagName === 'LINK' && d.rel === 'modulepreload' && s(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(c) {
    const f = {};
    return (
      c.integrity && (f.integrity = c.integrity),
      c.referrerPolicy && (f.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === 'use-credentials'
        ? (f.credentials = 'include')
        : c.crossOrigin === 'anonymous'
          ? (f.credentials = 'omit')
          : (f.credentials = 'same-origin'),
      f
    );
  }
  function s(c) {
    if (c.ep) return;
    c.ep = !0;
    const f = o(c);
    fetch(c.href, f);
  }
})();
function bT(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, 'default')
    ? r.default
    : r;
}
var ST = { exports: {} },
  fd = {},
  ET = { exports: {} },
  yd = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ yd.exports;
(function (r, i) {
  (function () {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' &&
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ==
        'function' &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var o = '18.3.1',
      s = Symbol.for('react.element'),
      c = Symbol.for('react.portal'),
      f = Symbol.for('react.fragment'),
      d = Symbol.for('react.strict_mode'),
      h = Symbol.for('react.profiler'),
      m = Symbol.for('react.provider'),
      g = Symbol.for('react.context'),
      E = Symbol.for('react.forward_ref'),
      S = Symbol.for('react.suspense'),
      w = Symbol.for('react.suspense_list'),
      O = Symbol.for('react.memo'),
      D = Symbol.for('react.lazy'),
      x = Symbol.for('react.offscreen'),
      z = Symbol.iterator,
      N = '@@iterator';
    function _(b) {
      if (b === null || typeof b != 'object') return null;
      var A = (z && b[z]) || b[N];
      return typeof A == 'function' ? A : null;
    }
    var P = { current: null },
      U = { transition: null },
      V = { current: null, isBatchingLegacy: !1, didScheduleLegacyUpdate: !1 },
      oe = { current: null },
      ne = {},
      ce = null;
    function re(b) {
      ce = b;
    }
    ((ne.setExtraStackFrame = function (b) {
      ce = b;
    }),
      (ne.getCurrentStack = null),
      (ne.getStackAddendum = function () {
        var b = '';
        ce && (b += ce);
        var A = ne.getCurrentStack;
        return (A && (b += A() || ''), b);
      }));
    var te = !1,
      ue = !1,
      ae = !1,
      ie = !1,
      Ee = !1,
      Me = {
        ReactCurrentDispatcher: P,
        ReactCurrentBatchConfig: U,
        ReactCurrentOwner: oe,
      };
    ((Me.ReactDebugCurrentFrame = ne), (Me.ReactCurrentActQueue = V));
    function be(b) {
      {
        for (
          var A = arguments.length, $ = new Array(A > 1 ? A - 1 : 0), q = 1;
          q < A;
          q++
        )
          $[q - 1] = arguments[q];
        Ve('warn', b, $);
      }
    }
    function me(b) {
      {
        for (
          var A = arguments.length, $ = new Array(A > 1 ? A - 1 : 0), q = 1;
          q < A;
          q++
        )
          $[q - 1] = arguments[q];
        Ve('error', b, $);
      }
    }
    function Ve(b, A, $) {
      {
        var q = Me.ReactDebugCurrentFrame,
          he = q.getStackAddendum();
        he !== '' && ((A += '%s'), ($ = $.concat([he])));
        var qe = $.map(function (ke) {
          return String(ke);
        });
        (qe.unshift('Warning: ' + A),
          Function.prototype.apply.call(console[b], console, qe));
      }
    }
    var Qe = {};
    function ft(b, A) {
      {
        var $ = b.constructor,
          q = ($ && ($.displayName || $.name)) || 'ReactClass',
          he = q + '.' + A;
        if (Qe[he]) return;
        (me(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          A,
          q
        ),
          (Qe[he] = !0));
      }
    }
    var qt = {
        isMounted: function (b) {
          return !1;
        },
        enqueueForceUpdate: function (b, A, $) {
          ft(b, 'forceUpdate');
        },
        enqueueReplaceState: function (b, A, $, q) {
          ft(b, 'replaceState');
        },
        enqueueSetState: function (b, A, $, q) {
          ft(b, 'setState');
        },
      },
      Se = Object.assign,
      ge = {};
    Object.freeze(ge);
    function Te(b, A, $) {
      ((this.props = b),
        (this.context = A),
        (this.refs = ge),
        (this.updater = $ || qt));
    }
    ((Te.prototype.isReactComponent = {}),
      (Te.prototype.setState = function (b, A) {
        if (typeof b != 'object' && typeof b != 'function' && b != null)
          throw new Error(
            'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
          );
        this.updater.enqueueSetState(this, b, A, 'setState');
      }),
      (Te.prototype.forceUpdate = function (b) {
        this.updater.enqueueForceUpdate(this, b, 'forceUpdate');
      }));
    {
      var Ue = {
          isMounted: [
            'isMounted',
            'Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.',
          ],
          replaceState: [
            'replaceState',
            'Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236).',
          ],
        },
        j = function (b, A) {
          Object.defineProperty(Te.prototype, b, {
            get: function () {
              be(
                '%s(...) is deprecated in plain JavaScript React classes. %s',
                A[0],
                A[1]
              );
            },
          });
        };
      for (var Ke in Ue) Ue.hasOwnProperty(Ke) && j(Ke, Ue[Ke]);
    }
    function pe() {}
    pe.prototype = Te.prototype;
    function at(b, A, $) {
      ((this.props = b),
        (this.context = A),
        (this.refs = ge),
        (this.updater = $ || qt));
    }
    var We = (at.prototype = new pe());
    ((We.constructor = at),
      Se(We, Te.prototype),
      (We.isPureReactComponent = !0));
    function Je() {
      var b = { current: null };
      return (Object.seal(b), b);
    }
    var ee = Array.isArray;
    function it(b) {
      return ee(b);
    }
    function dt(b) {
      {
        var A = typeof Symbol == 'function' && Symbol.toStringTag,
          $ = (A && b[Symbol.toStringTag]) || b.constructor.name || 'Object';
        return $;
      }
    }
    function Fe(b) {
      try {
        return (vt(b), !1);
      } catch {
        return !0;
      }
    }
    function vt(b) {
      return '' + b;
    }
    function $e(b) {
      if (Fe(b))
        return (
          me(
            'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
            dt(b)
          ),
          vt(b)
        );
    }
    function Ot(b, A, $) {
      var q = b.displayName;
      if (q) return q;
      var he = A.displayName || A.name || '';
      return he !== '' ? $ + '(' + he + ')' : $;
    }
    function ln(b) {
      return b.displayName || 'Context';
    }
    function R(b) {
      if (b == null) return null;
      if (
        (typeof b.tag == 'number' &&
          me(
            'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.'
          ),
        typeof b == 'function')
      )
        return b.displayName || b.name || null;
      if (typeof b == 'string') return b;
      switch (b) {
        case f:
          return 'Fragment';
        case c:
          return 'Portal';
        case h:
          return 'Profiler';
        case d:
          return 'StrictMode';
        case S:
          return 'Suspense';
        case w:
          return 'SuspenseList';
      }
      if (typeof b == 'object')
        switch (b.$$typeof) {
          case g:
            var A = b;
            return ln(A) + '.Consumer';
          case m:
            var $ = b;
            return ln($._context) + '.Provider';
          case E:
            return Ot(b, b.render, 'ForwardRef');
          case O:
            var q = b.displayName || null;
            return q !== null ? q : R(b.type) || 'Memo';
          case D: {
            var he = b,
              qe = he._payload,
              ke = he._init;
            try {
              return R(ke(qe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.prototype.hasOwnProperty,
      G = { key: !0, ref: !0, __self: !0, __source: !0 },
      de,
      W,
      J;
    J = {};
    function _e(b) {
      if (F.call(b, 'ref')) {
        var A = Object.getOwnPropertyDescriptor(b, 'ref').get;
        if (A && A.isReactWarning) return !1;
      }
      return b.ref !== void 0;
    }
    function Ie(b) {
      if (F.call(b, 'key')) {
        var A = Object.getOwnPropertyDescriptor(b, 'key').get;
        if (A && A.isReactWarning) return !1;
      }
      return b.key !== void 0;
    }
    function Ze(b, A) {
      var $ = function () {
        de ||
          ((de = !0),
          me(
            '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
            A
          ));
      };
      (($.isReactWarning = !0),
        Object.defineProperty(b, 'key', { get: $, configurable: !0 }));
    }
    function tn(b, A) {
      var $ = function () {
        W ||
          ((W = !0),
          me(
            '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
            A
          ));
      };
      (($.isReactWarning = !0),
        Object.defineProperty(b, 'ref', { get: $, configurable: !0 }));
    }
    function ir(b) {
      if (
        typeof b.ref == 'string' &&
        oe.current &&
        b.__self &&
        oe.current.stateNode !== b.__self
      ) {
        var A = R(oe.current.type);
        J[A] ||
          (me(
            'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
            A,
            b.ref
          ),
          (J[A] = !0));
      }
    }
    var ye = function (b, A, $, q, he, qe, ke) {
      var et = { $$typeof: s, type: b, key: A, ref: $, props: ke, _owner: qe };
      return (
        (et._store = {}),
        Object.defineProperty(et._store, 'validated', {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1,
        }),
        Object.defineProperty(et, '_self', {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: q,
        }),
        Object.defineProperty(et, '_source', {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: he,
        }),
        Object.freeze && (Object.freeze(et.props), Object.freeze(et)),
        et
      );
    };
    function ze(b, A, $) {
      var q,
        he = {},
        qe = null,
        ke = null,
        et = null,
        mt = null;
      if (A != null) {
        (_e(A) && ((ke = A.ref), ir(A)),
          Ie(A) && ($e(A.key), (qe = '' + A.key)),
          (et = A.__self === void 0 ? null : A.__self),
          (mt = A.__source === void 0 ? null : A.__source));
        for (q in A) F.call(A, q) && !G.hasOwnProperty(q) && (he[q] = A[q]);
      }
      var Lt = arguments.length - 2;
      if (Lt === 1) he.children = $;
      else if (Lt > 1) {
        for (var Ft = Array(Lt), Vt = 0; Vt < Lt; Vt++)
          Ft[Vt] = arguments[Vt + 2];
        (Object.freeze && Object.freeze(Ft), (he.children = Ft));
      }
      if (b && b.defaultProps) {
        var Gt = b.defaultProps;
        for (q in Gt) he[q] === void 0 && (he[q] = Gt[q]);
      }
      if (qe || ke) {
        var rn =
          typeof b == 'function' ? b.displayName || b.name || 'Unknown' : b;
        (qe && Ze(he, rn), ke && tn(he, rn));
      }
      return ye(b, qe, ke, et, mt, oe.current, he);
    }
    function ot(b, A) {
      var $ = ye(b.type, A, b.ref, b._self, b._source, b._owner, b.props);
      return $;
    }
    function wt(b, A, $) {
      if (b == null)
        throw new Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' +
            b +
            '.'
        );
      var q,
        he = Se({}, b.props),
        qe = b.key,
        ke = b.ref,
        et = b._self,
        mt = b._source,
        Lt = b._owner;
      if (A != null) {
        (_e(A) && ((ke = A.ref), (Lt = oe.current)),
          Ie(A) && ($e(A.key), (qe = '' + A.key)));
        var Ft;
        b.type && b.type.defaultProps && (Ft = b.type.defaultProps);
        for (q in A)
          F.call(A, q) &&
            !G.hasOwnProperty(q) &&
            (A[q] === void 0 && Ft !== void 0
              ? (he[q] = Ft[q])
              : (he[q] = A[q]));
      }
      var Vt = arguments.length - 2;
      if (Vt === 1) he.children = $;
      else if (Vt > 1) {
        for (var Gt = Array(Vt), rn = 0; rn < Vt; rn++)
          Gt[rn] = arguments[rn + 2];
        he.children = Gt;
      }
      return ye(b.type, qe, ke, et, mt, Lt, he);
    }
    function At(b) {
      return typeof b == 'object' && b !== null && b.$$typeof === s;
    }
    var nn = '.',
      Kt = ':';
    function Ln(b) {
      var A = /[=:]/g,
        $ = { '=': '=0', ':': '=2' },
        q = b.replace(A, function (he) {
          return $[he];
        });
      return '$' + q;
    }
    var Ut = !1,
      vr = /\/+/g;
    function $t(b) {
      return b.replace(vr, '$&/');
    }
    function Yt(b, A) {
      return typeof b == 'object' && b !== null && b.key != null
        ? ($e(b.key), Ln('' + b.key))
        : A.toString(36);
    }
    function ra(b, A, $, q, he) {
      var qe = typeof b;
      (qe === 'undefined' || qe === 'boolean') && (b = null);
      var ke = !1;
      if (b === null) ke = !0;
      else
        switch (qe) {
          case 'string':
          case 'number':
            ke = !0;
            break;
          case 'object':
            switch (b.$$typeof) {
              case s:
              case c:
                ke = !0;
            }
        }
      if (ke) {
        var et = b,
          mt = he(et),
          Lt = q === '' ? nn + Yt(et, 0) : q;
        if (it(mt)) {
          var Ft = '';
          (Lt != null && (Ft = $t(Lt) + '/'),
            ra(mt, A, Ft, '', function (Pd) {
              return Pd;
            }));
        } else
          mt != null &&
            (At(mt) &&
              (mt.key && (!et || et.key !== mt.key) && $e(mt.key),
              (mt = ot(
                mt,
                $ +
                  (mt.key && (!et || et.key !== mt.key)
                    ? $t('' + mt.key) + '/'
                    : '') +
                  Lt
              ))),
            A.push(mt));
        return 1;
      }
      var Vt,
        Gt,
        rn = 0,
        _t = q === '' ? nn : q + Kt;
      if (it(b))
        for (var fi = 0; fi < b.length; fi++)
          ((Vt = b[fi]), (Gt = _t + Yt(Vt, fi)), (rn += ra(Vt, A, $, Gt, he)));
      else {
        var Po = _(b);
        if (typeof Po == 'function') {
          var Jl = b;
          Po === Jl.entries &&
            (Ut ||
              be(
                'Using Maps as children is not supported. Use an array of keyed ReactElements instead.'
              ),
            (Ut = !0));
          for (var Nd = Po.call(Jl), Da, Zl = 0; !(Da = Nd.next()).done; )
            ((Vt = Da.value),
              (Gt = _t + Yt(Vt, Zl++)),
              (rn += ra(Vt, A, $, Gt, he)));
        } else if (qe === 'object') {
          var es = String(b);
          throw new Error(
            'Objects are not valid as a React child (found: ' +
              (es === '[object Object]'
                ? 'object with keys {' + Object.keys(b).join(', ') + '}'
                : es) +
              '). If you meant to render a collection of children, use an array instead.'
          );
        }
      }
      return rn;
    }
    function Ur(b, A, $) {
      if (b == null) return b;
      var q = [],
        he = 0;
      return (
        ra(b, q, '', '', function (qe) {
          return A.call($, qe, he++);
        }),
        q
      );
    }
    function Ii(b) {
      var A = 0;
      return (
        Ur(b, function () {
          A++;
        }),
        A
      );
    }
    function Oo(b, A, $) {
      Ur(
        b,
        function () {
          A.apply(this, arguments);
        },
        $
      );
    }
    function Fl(b) {
      return (
        Ur(b, function (A) {
          return A;
        }) || []
      );
    }
    function Bi(b) {
      if (!At(b))
        throw new Error(
          'React.Children.only expected to receive a single React element child.'
        );
      return b;
    }
    function ji(b) {
      var A = {
        $$typeof: g,
        _currentValue: b,
        _currentValue2: b,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      };
      A.Provider = { $$typeof: m, _context: A };
      var $ = !1,
        q = !1,
        he = !1;
      {
        var qe = { $$typeof: g, _context: A };
        (Object.defineProperties(qe, {
          Provider: {
            get: function () {
              return (
                q ||
                  ((q = !0),
                  me(
                    'Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?'
                  )),
                A.Provider
              );
            },
            set: function (ke) {
              A.Provider = ke;
            },
          },
          _currentValue: {
            get: function () {
              return A._currentValue;
            },
            set: function (ke) {
              A._currentValue = ke;
            },
          },
          _currentValue2: {
            get: function () {
              return A._currentValue2;
            },
            set: function (ke) {
              A._currentValue2 = ke;
            },
          },
          _threadCount: {
            get: function () {
              return A._threadCount;
            },
            set: function (ke) {
              A._threadCount = ke;
            },
          },
          Consumer: {
            get: function () {
              return (
                $ ||
                  (($ = !0),
                  me(
                    'Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?'
                  )),
                A.Consumer
              );
            },
          },
          displayName: {
            get: function () {
              return A.displayName;
            },
            set: function (ke) {
              he ||
                (be(
                  "Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",
                  ke
                ),
                (he = !0));
            },
          },
        }),
          (A.Consumer = qe));
      }
      return ((A._currentRenderer = null), (A._currentRenderer2 = null), A);
    }
    var wa = -1,
      ni = 0,
      xa = 1,
      Fr = 2;
    function Vr(b) {
      if (b._status === wa) {
        var A = b._result,
          $ = A();
        if (
          ($.then(
            function (qe) {
              if (b._status === ni || b._status === wa) {
                var ke = b;
                ((ke._status = xa), (ke._result = qe));
              }
            },
            function (qe) {
              if (b._status === ni || b._status === wa) {
                var ke = b;
                ((ke._status = Fr), (ke._result = qe));
              }
            }
          ),
          b._status === wa)
        ) {
          var q = b;
          ((q._status = ni), (q._result = $));
        }
      }
      if (b._status === xa) {
        var he = b._result;
        return (
          he === void 0 &&
            me(
              `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
              he
            ),
          'default' in he ||
            me(
              `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
              he
            ),
          he.default
        );
      } else throw b._result;
    }
    function aa(b) {
      var A = { _status: wa, _result: b },
        $ = { $$typeof: D, _payload: A, _init: Vr };
      {
        var q, he;
        Object.defineProperties($, {
          defaultProps: {
            configurable: !0,
            get: function () {
              return q;
            },
            set: function (qe) {
              (me(
                'React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.'
              ),
                (q = qe),
                Object.defineProperty($, 'defaultProps', { enumerable: !0 }));
            },
          },
          propTypes: {
            configurable: !0,
            get: function () {
              return he;
            },
            set: function (qe) {
              (me(
                'React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.'
              ),
                (he = qe),
                Object.defineProperty($, 'propTypes', { enumerable: !0 }));
            },
          },
        });
      }
      return $;
    }
    function $i(b) {
      (b != null && b.$$typeof === O
        ? me(
            'forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).'
          )
        : typeof b != 'function'
          ? me(
              'forwardRef requires a render function but was given %s.',
              b === null ? 'null' : typeof b
            )
          : b.length !== 0 &&
            b.length !== 2 &&
            me(
              'forwardRef render functions accept exactly two parameters: props and ref. %s',
              b.length === 1
                ? 'Did you forget to use the ref parameter?'
                : 'Any additional parameter will be undefined.'
            ),
        b != null &&
          (b.defaultProps != null || b.propTypes != null) &&
          me(
            'forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?'
          ));
      var A = { $$typeof: E, render: b };
      {
        var $;
        Object.defineProperty(A, 'displayName', {
          enumerable: !1,
          configurable: !0,
          get: function () {
            return $;
          },
          set: function (q) {
            (($ = q), !b.name && !b.displayName && (b.displayName = q));
          },
        });
      }
      return A;
    }
    var ri;
    ri = Symbol.for('react.module.reference');
    function M(b) {
      return !!(
        typeof b == 'string' ||
        typeof b == 'function' ||
        b === f ||
        b === h ||
        Ee ||
        b === d ||
        b === S ||
        b === w ||
        ie ||
        b === x ||
        te ||
        ue ||
        ae ||
        (typeof b == 'object' &&
          b !== null &&
          (b.$$typeof === D ||
            b.$$typeof === O ||
            b.$$typeof === m ||
            b.$$typeof === g ||
            b.$$typeof === E ||
            b.$$typeof === ri ||
            b.getModuleId !== void 0))
      );
    }
    function le(b, A) {
      M(b) ||
        me(
          'memo: The first argument must be a component. Instead received: %s',
          b === null ? 'null' : typeof b
        );
      var $ = { $$typeof: O, type: b, compare: A === void 0 ? null : A };
      {
        var q;
        Object.defineProperty($, 'displayName', {
          enumerable: !1,
          configurable: !0,
          get: function () {
            return q;
          },
          set: function (he) {
            ((q = he), !b.name && !b.displayName && (b.displayName = he));
          },
        });
      }
      return $;
    }
    function ve() {
      var b = P.current;
      return (
        b === null &&
          me(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`),
        b
      );
    }
    function je(b) {
      var A = ve();
      if (b._context !== void 0) {
        var $ = b._context;
        $.Consumer === b
          ? me(
              'Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?'
            )
          : $.Provider === b &&
            me(
              'Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?'
            );
      }
      return A.useContext(b);
    }
    function ht(b) {
      var A = ve();
      return A.useState(b);
    }
    function Et(b, A, $) {
      var q = ve();
      return q.useReducer(b, A, $);
    }
    function Ye(b) {
      var A = ve();
      return A.useRef(b);
    }
    function ut(b, A) {
      var $ = ve();
      return $.useEffect(b, A);
    }
    function hn(b, A) {
      var $ = ve();
      return $.useInsertionEffect(b, A);
    }
    function Bt(b, A) {
      var $ = ve();
      return $.useLayoutEffect(b, A);
    }
    function Xt(b, A) {
      var $ = ve();
      return $.useCallback(b, A);
    }
    function Bn(b, A) {
      var $ = ve();
      return $.useMemo(b, A);
    }
    function ia(b, A, $) {
      var q = ve();
      return q.useImperativeHandle(b, A, $);
    }
    function Dr(b, A) {
      {
        var $ = ve();
        return $.useDebugValue(b, A);
      }
    }
    function xn() {
      var b = ve();
      return b.useTransition();
    }
    function hr(b) {
      var A = ve();
      return A.useDeferredValue(b);
    }
    function ct() {
      var b = ve();
      return b.useId();
    }
    function Ra(b, A, $) {
      var q = ve();
      return q.useSyncExternalStore(b, A, $);
    }
    var ai = 0,
      Vl,
      Hl,
      Il,
      Bl,
      jl,
      $l,
      Yl;
    function Yu() {}
    Yu.__reactDisabledLog = !0;
    function Md() {
      {
        if (ai === 0) {
          ((Vl = console.log),
            (Hl = console.info),
            (Il = console.warn),
            (Bl = console.error),
            (jl = console.group),
            ($l = console.groupCollapsed),
            (Yl = console.groupEnd));
          var b = { configurable: !0, enumerable: !0, value: Yu, writable: !0 };
          Object.defineProperties(console, {
            info: b,
            log: b,
            warn: b,
            error: b,
            group: b,
            groupCollapsed: b,
            groupEnd: b,
          });
        }
        ai++;
      }
    }
    function Gl() {
      {
        if ((ai--, ai === 0)) {
          var b = { configurable: !0, enumerable: !0, writable: !0 };
          Object.defineProperties(console, {
            log: Se({}, b, { value: Vl }),
            info: Se({}, b, { value: Hl }),
            warn: Se({}, b, { value: Il }),
            error: Se({}, b, { value: Bl }),
            group: Se({}, b, { value: jl }),
            groupCollapsed: Se({}, b, { value: $l }),
            groupEnd: Se({}, b, { value: Yl }),
          });
        }
        ai < 0 &&
          me(
            'disabledDepth fell below zero. This is a bug in React. Please file an issue.'
          );
      }
    }
    var Yi = Me.ReactCurrentDispatcher,
      Or;
    function ii(b, A, $) {
      {
        if (Or === void 0)
          try {
            throw Error();
          } catch (he) {
            var q = he.stack.trim().match(/\n( *(at )?)/);
            Or = (q && q[1]) || '';
          }
        return (
          `
` +
          Or +
          b
        );
      }
    }
    var oi = !1,
      Ao;
    {
      var Wl = typeof WeakMap == 'function' ? WeakMap : Map;
      Ao = new Wl();
    }
    function Gu(b, A) {
      if (!b || oi) return '';
      {
        var $ = Ao.get(b);
        if ($ !== void 0) return $;
      }
      var q;
      oi = !0;
      var he = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var qe;
      ((qe = Yi.current), (Yi.current = null), Md());
      try {
        if (A) {
          var ke = function () {
            throw Error();
          };
          if (
            (Object.defineProperty(ke.prototype, 'props', {
              set: function () {
                throw Error();
              },
            }),
            typeof Reflect == 'object' && Reflect.construct)
          ) {
            try {
              Reflect.construct(ke, []);
            } catch (_t) {
              q = _t;
            }
            Reflect.construct(b, [], ke);
          } else {
            try {
              ke.call();
            } catch (_t) {
              q = _t;
            }
            b.call(ke.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_t) {
            q = _t;
          }
          b();
        }
      } catch (_t) {
        if (_t && q && typeof _t.stack == 'string') {
          for (
            var et = _t.stack.split(`
`),
              mt = q.stack.split(`
`),
              Lt = et.length - 1,
              Ft = mt.length - 1;
            Lt >= 1 && Ft >= 0 && et[Lt] !== mt[Ft];

          )
            Ft--;
          for (; Lt >= 1 && Ft >= 0; Lt--, Ft--)
            if (et[Lt] !== mt[Ft]) {
              if (Lt !== 1 || Ft !== 1)
                do
                  if ((Lt--, Ft--, Ft < 0 || et[Lt] !== mt[Ft])) {
                    var Vt =
                      `
` + et[Lt].replace(' at new ', ' at ');
                    return (
                      b.displayName &&
                        Vt.includes('<anonymous>') &&
                        (Vt = Vt.replace('<anonymous>', b.displayName)),
                      typeof b == 'function' && Ao.set(b, Vt),
                      Vt
                    );
                  }
                while (Lt >= 1 && Ft >= 0);
              break;
            }
        }
      } finally {
        ((oi = !1), (Yi.current = qe), Gl(), (Error.prepareStackTrace = he));
      }
      var Gt = b ? b.displayName || b.name : '',
        rn = Gt ? ii(Gt) : '';
      return (typeof b == 'function' && Ao.set(b, rn), rn);
    }
    function ql(b, A, $) {
      return Gu(b, !1);
    }
    function Ld(b) {
      var A = b.prototype;
      return !!(A && A.isReactComponent);
    }
    function li(b, A, $) {
      if (b == null) return '';
      if (typeof b == 'function') return Gu(b, Ld(b));
      if (typeof b == 'string') return ii(b);
      switch (b) {
        case S:
          return ii('Suspense');
        case w:
          return ii('SuspenseList');
      }
      if (typeof b == 'object')
        switch (b.$$typeof) {
          case E:
            return ql(b.render);
          case O:
            return li(b.type, A, $);
          case D: {
            var q = b,
              he = q._payload,
              qe = q._init;
            try {
              return li(qe(he), A, $);
            } catch {}
          }
        }
      return '';
    }
    var Wu = {},
      Xl = Me.ReactDebugCurrentFrame;
    function Mo(b) {
      if (b) {
        var A = b._owner,
          $ = li(b.type, b._source, A ? A.type : null);
        Xl.setExtraStackFrame($);
      } else Xl.setExtraStackFrame(null);
    }
    function qu(b, A, $, q, he) {
      {
        var qe = Function.call.bind(F);
        for (var ke in b)
          if (qe(b, ke)) {
            var et = void 0;
            try {
              if (typeof b[ke] != 'function') {
                var mt = Error(
                  (q || 'React class') +
                    ': ' +
                    $ +
                    ' type `' +
                    ke +
                    '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                    typeof b[ke] +
                    '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
                );
                throw ((mt.name = 'Invariant Violation'), mt);
              }
              et = b[ke](
                A,
                ke,
                q,
                $,
                null,
                'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
              );
            } catch (Lt) {
              et = Lt;
            }
            (et &&
              !(et instanceof Error) &&
              (Mo(he),
              me(
                '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                q || 'React class',
                $,
                ke,
                typeof et
              ),
              Mo(null)),
              et instanceof Error &&
                !(et.message in Wu) &&
                ((Wu[et.message] = !0),
                Mo(he),
                me('Failed %s type: %s', $, et.message),
                Mo(null)));
          }
      }
    }
    function Ct(b) {
      if (b) {
        var A = b._owner,
          $ = li(b.type, b._source, A ? A.type : null);
        re($);
      } else re(null);
    }
    var Ql;
    Ql = !1;
    function Kl() {
      if (oe.current) {
        var b = R(oe.current.type);
        if (b)
          return (
            `

Check the render method of \`` +
            b +
            '`.'
          );
      }
      return '';
    }
    function lt(b) {
      if (b !== void 0) {
        var A = b.fileName.replace(/^.*[\\\/]/, ''),
          $ = b.lineNumber;
        return (
          `

Check your code at ` +
          A +
          ':' +
          $ +
          '.'
        );
      }
      return '';
    }
    function Xu(b) {
      return b != null ? lt(b.__source) : '';
    }
    var jn = {};
    function Gi(b) {
      var A = Kl();
      if (!A) {
        var $ = typeof b == 'string' ? b : b.displayName || b.name;
        $ &&
          (A =
            `

Check the top-level render call using <` +
            $ +
            '>.');
      }
      return A;
    }
    function si(b, A) {
      if (!(!b._store || b._store.validated || b.key != null)) {
        b._store.validated = !0;
        var $ = Gi(A);
        if (!jn[$]) {
          jn[$] = !0;
          var q = '';
          (b &&
            b._owner &&
            b._owner !== oe.current &&
            (q = ' It was passed a child from ' + R(b._owner.type) + '.'),
            Ct(b),
            me(
              'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
              $,
              q
            ),
            Ct(null));
        }
      }
    }
    function Qu(b, A) {
      if (typeof b == 'object') {
        if (it(b))
          for (var $ = 0; $ < b.length; $++) {
            var q = b[$];
            At(q) && si(q, A);
          }
        else if (At(b)) b._store && (b._store.validated = !0);
        else if (b) {
          var he = _(b);
          if (typeof he == 'function' && he !== b.entries)
            for (var qe = he.call(b), ke; !(ke = qe.next()).done; )
              At(ke.value) && si(ke.value, A);
        }
      }
    }
    function Rn(b) {
      {
        var A = b.type;
        if (A == null || typeof A == 'string') return;
        var $;
        if (typeof A == 'function') $ = A.propTypes;
        else if (typeof A == 'object' && (A.$$typeof === E || A.$$typeof === O))
          $ = A.propTypes;
        else return;
        if ($) {
          var q = R(A);
          qu($, b.props, 'prop', q, b);
        } else if (A.PropTypes !== void 0 && !Ql) {
          Ql = !0;
          var he = R(A);
          me(
            'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
            he || 'Unknown'
          );
        }
        typeof A.getDefaultProps == 'function' &&
          !A.getDefaultProps.isReactClassApproved &&
          me(
            'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.'
          );
      }
    }
    function Jt(b) {
      {
        for (var A = Object.keys(b.props), $ = 0; $ < A.length; $++) {
          var q = A[$];
          if (q !== 'children' && q !== 'key') {
            (Ct(b),
              me(
                'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
                q
              ),
              Ct(null));
            break;
          }
        }
        b.ref !== null &&
          (Ct(b),
          me('Invalid attribute `ref` supplied to `React.Fragment`.'),
          Ct(null));
      }
    }
    function Ku(b, A, $) {
      var q = M(b);
      if (!q) {
        var he = '';
        (b === void 0 ||
          (typeof b == 'object' &&
            b !== null &&
            Object.keys(b).length === 0)) &&
          (he +=
            " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
        var qe = Xu(A);
        qe ? (he += qe) : (he += Kl());
        var ke;
        (b === null
          ? (ke = 'null')
          : it(b)
            ? (ke = 'array')
            : b !== void 0 && b.$$typeof === s
              ? ((ke = '<' + (R(b.type) || 'Unknown') + ' />'),
                (he =
                  ' Did you accidentally export a JSX literal instead of a component?'))
              : (ke = typeof b),
          me(
            'React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
            ke,
            he
          ));
      }
      var et = ze.apply(this, arguments);
      if (et == null) return et;
      if (q) for (var mt = 2; mt < arguments.length; mt++) Qu(arguments[mt], b);
      return (b === f ? Jt(et) : Rn(et), et);
    }
    var mr = !1;
    function or(b) {
      var A = Ku.bind(null, b);
      return (
        (A.type = b),
        mr ||
          ((mr = !0),
          be(
            'React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.'
          )),
        Object.defineProperty(A, 'type', {
          enumerable: !1,
          get: function () {
            return (
              be(
                'Factory.type is deprecated. Access the class directly before passing it to createFactory.'
              ),
              Object.defineProperty(this, 'type', { value: b }),
              b
            );
          },
        }),
        A
      );
    }
    function oa(b, A, $) {
      for (
        var q = wt.apply(this, arguments), he = 2;
        he < arguments.length;
        he++
      )
        Qu(arguments[he], q.type);
      return (Rn(q), q);
    }
    function kd(b, A) {
      var $ = U.transition;
      U.transition = {};
      var q = U.transition;
      U.transition._updatedFibers = new Set();
      try {
        b();
      } finally {
        if (((U.transition = $), $ === null && q._updatedFibers)) {
          var he = q._updatedFibers.size;
          (he > 10 &&
            be(
              'Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.'
            ),
            q._updatedFibers.clear());
        }
      }
    }
    var Lo = !1,
      Wi = null;
    function Ju(b) {
      if (Wi === null)
        try {
          var A = ('require' + Math.random()).slice(0, 7),
            $ = r && r[A];
          Wi = $.call(r, 'timers').setImmediate;
        } catch {
          Wi = function (he) {
            Lo === !1 &&
              ((Lo = !0),
              typeof MessageChannel > 'u' &&
                me(
                  'This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.'
                ));
            var qe = new MessageChannel();
            ((qe.port1.onmessage = he), qe.port2.postMessage(void 0));
          };
        }
      return Wi(b);
    }
    var ui = 0,
      Zu = !1;
    function ec(b) {
      {
        var A = ui;
        (ui++, V.current === null && (V.current = []));
        var $ = V.isBatchingLegacy,
          q;
        try {
          if (
            ((V.isBatchingLegacy = !0),
            (q = b()),
            !$ && V.didScheduleLegacyUpdate)
          ) {
            var he = V.current;
            he !== null && ((V.didScheduleLegacyUpdate = !1), No(he));
          }
        } catch (Gt) {
          throw (_a(A), Gt);
        } finally {
          V.isBatchingLegacy = $;
        }
        if (q !== null && typeof q == 'object' && typeof q.then == 'function') {
          var qe = q,
            ke = !1,
            et = {
              then: function (Gt, rn) {
                ((ke = !0),
                  qe.then(
                    function (_t) {
                      (_a(A), ui === 0 ? ko(_t, Gt, rn) : Gt(_t));
                    },
                    function (_t) {
                      (_a(A), rn(_t));
                    }
                  ));
              },
            };
          return (
            !Zu &&
              typeof Promise < 'u' &&
              Promise.resolve()
                .then(function () {})
                .then(function () {
                  ke ||
                    ((Zu = !0),
                    me(
                      'You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);'
                    ));
                }),
            et
          );
        } else {
          var mt = q;
          if ((_a(A), ui === 0)) {
            var Lt = V.current;
            Lt !== null && (No(Lt), (V.current = null));
            var Ft = {
              then: function (Gt, rn) {
                V.current === null
                  ? ((V.current = []), ko(mt, Gt, rn))
                  : Gt(mt);
              },
            };
            return Ft;
          } else {
            var Vt = {
              then: function (Gt, rn) {
                Gt(mt);
              },
            };
            return Vt;
          }
        }
      }
    }
    function _a(b) {
      (b !== ui - 1 &&
        me(
          'You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. '
        ),
        (ui = b));
    }
    function ko(b, A, $) {
      {
        var q = V.current;
        if (q !== null)
          try {
            (No(q),
              Ju(function () {
                q.length === 0 ? ((V.current = null), A(b)) : ko(b, A, $);
              }));
          } catch (he) {
            $(he);
          }
        else A(b);
      }
    }
    var ci = !1;
    function No(b) {
      if (!ci) {
        ci = !0;
        var A = 0;
        try {
          for (; A < b.length; A++) {
            var $ = b[A];
            do $ = $(!0);
            while ($ !== null);
          }
          b.length = 0;
        } catch (q) {
          throw ((b = b.slice(A + 1)), q);
        } finally {
          ci = !1;
        }
      }
    }
    var tc = Ku,
      nc = oa,
      rc = or,
      ac = { map: Ur, forEach: Oo, count: Ii, toArray: Fl, only: Bi };
    ((i.Children = ac),
      (i.Component = Te),
      (i.Fragment = f),
      (i.Profiler = h),
      (i.PureComponent = at),
      (i.StrictMode = d),
      (i.Suspense = S),
      (i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Me),
      (i.act = ec),
      (i.cloneElement = nc),
      (i.createContext = ji),
      (i.createElement = tc),
      (i.createFactory = rc),
      (i.createRef = Je),
      (i.forwardRef = $i),
      (i.isValidElement = At),
      (i.lazy = aa),
      (i.memo = le),
      (i.startTransition = kd),
      (i.unstable_act = ec),
      (i.useCallback = Xt),
      (i.useContext = je),
      (i.useDebugValue = Dr),
      (i.useDeferredValue = hr),
      (i.useEffect = ut),
      (i.useId = ct),
      (i.useImperativeHandle = ia),
      (i.useInsertionEffect = hn),
      (i.useLayoutEffect = Bt),
      (i.useMemo = Bn),
      (i.useReducer = Et),
      (i.useRef = Ye),
      (i.useState = ht),
      (i.useSyncExternalStore = Ra),
      (i.useTransition = xn),
      (i.version = o),
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' &&
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ==
          'function' &&
        __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error()));
  })();
})(yd, yd.exports);
var VM = yd.exports;
ET.exports = VM;
var K = ET.exports;
const Tt = bT(K),
  HM = FM({ __proto__: null, default: Tt }, [K]);
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function () {
  var r = K,
    i = Symbol.for('react.element'),
    o = Symbol.for('react.portal'),
    s = Symbol.for('react.fragment'),
    c = Symbol.for('react.strict_mode'),
    f = Symbol.for('react.profiler'),
    d = Symbol.for('react.provider'),
    h = Symbol.for('react.context'),
    m = Symbol.for('react.forward_ref'),
    g = Symbol.for('react.suspense'),
    E = Symbol.for('react.suspense_list'),
    S = Symbol.for('react.memo'),
    w = Symbol.for('react.lazy'),
    O = Symbol.for('react.offscreen'),
    D = Symbol.iterator,
    x = '@@iterator';
  function z(M) {
    if (M === null || typeof M != 'object') return null;
    var le = (D && M[D]) || M[x];
    return typeof le == 'function' ? le : null;
  }
  var N = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function _(M) {
    {
      for (
        var le = arguments.length, ve = new Array(le > 1 ? le - 1 : 0), je = 1;
        je < le;
        je++
      )
        ve[je - 1] = arguments[je];
      P('error', M, ve);
    }
  }
  function P(M, le, ve) {
    {
      var je = N.ReactDebugCurrentFrame,
        ht = je.getStackAddendum();
      ht !== '' && ((le += '%s'), (ve = ve.concat([ht])));
      var Et = ve.map(function (Ye) {
        return String(Ye);
      });
      (Et.unshift('Warning: ' + le),
        Function.prototype.apply.call(console[M], console, Et));
    }
  }
  var U = !1,
    V = !1,
    oe = !1,
    ne = !1,
    ce = !1,
    re;
  re = Symbol.for('react.module.reference');
  function te(M) {
    return !!(
      typeof M == 'string' ||
      typeof M == 'function' ||
      M === s ||
      M === f ||
      ce ||
      M === c ||
      M === g ||
      M === E ||
      ne ||
      M === O ||
      U ||
      V ||
      oe ||
      (typeof M == 'object' &&
        M !== null &&
        (M.$$typeof === w ||
          M.$$typeof === S ||
          M.$$typeof === d ||
          M.$$typeof === h ||
          M.$$typeof === m ||
          M.$$typeof === re ||
          M.getModuleId !== void 0))
    );
  }
  function ue(M, le, ve) {
    var je = M.displayName;
    if (je) return je;
    var ht = le.displayName || le.name || '';
    return ht !== '' ? ve + '(' + ht + ')' : ve;
  }
  function ae(M) {
    return M.displayName || 'Context';
  }
  function ie(M) {
    if (M == null) return null;
    if (
      (typeof M.tag == 'number' &&
        _(
          'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.'
        ),
      typeof M == 'function')
    )
      return M.displayName || M.name || null;
    if (typeof M == 'string') return M;
    switch (M) {
      case s:
        return 'Fragment';
      case o:
        return 'Portal';
      case f:
        return 'Profiler';
      case c:
        return 'StrictMode';
      case g:
        return 'Suspense';
      case E:
        return 'SuspenseList';
    }
    if (typeof M == 'object')
      switch (M.$$typeof) {
        case h:
          var le = M;
          return ae(le) + '.Consumer';
        case d:
          var ve = M;
          return ae(ve._context) + '.Provider';
        case m:
          return ue(M, M.render, 'ForwardRef');
        case S:
          var je = M.displayName || null;
          return je !== null ? je : ie(M.type) || 'Memo';
        case w: {
          var ht = M,
            Et = ht._payload,
            Ye = ht._init;
          try {
            return ie(Ye(Et));
          } catch {
            return null;
          }
        }
      }
    return null;
  }
  var Ee = Object.assign,
    Me = 0,
    be,
    me,
    Ve,
    Qe,
    ft,
    qt,
    Se;
  function ge() {}
  ge.__reactDisabledLog = !0;
  function Te() {
    {
      if (Me === 0) {
        ((be = console.log),
          (me = console.info),
          (Ve = console.warn),
          (Qe = console.error),
          (ft = console.group),
          (qt = console.groupCollapsed),
          (Se = console.groupEnd));
        var M = { configurable: !0, enumerable: !0, value: ge, writable: !0 };
        Object.defineProperties(console, {
          info: M,
          log: M,
          warn: M,
          error: M,
          group: M,
          groupCollapsed: M,
          groupEnd: M,
        });
      }
      Me++;
    }
  }
  function Ue() {
    {
      if ((Me--, Me === 0)) {
        var M = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: Ee({}, M, { value: be }),
          info: Ee({}, M, { value: me }),
          warn: Ee({}, M, { value: Ve }),
          error: Ee({}, M, { value: Qe }),
          group: Ee({}, M, { value: ft }),
          groupCollapsed: Ee({}, M, { value: qt }),
          groupEnd: Ee({}, M, { value: Se }),
        });
      }
      Me < 0 &&
        _(
          'disabledDepth fell below zero. This is a bug in React. Please file an issue.'
        );
    }
  }
  var j = N.ReactCurrentDispatcher,
    Ke;
  function pe(M, le, ve) {
    {
      if (Ke === void 0)
        try {
          throw Error();
        } catch (ht) {
          var je = ht.stack.trim().match(/\n( *(at )?)/);
          Ke = (je && je[1]) || '';
        }
      return (
        `
` +
        Ke +
        M
      );
    }
  }
  var at = !1,
    We;
  {
    var Je = typeof WeakMap == 'function' ? WeakMap : Map;
    We = new Je();
  }
  function ee(M, le) {
    if (!M || at) return '';
    {
      var ve = We.get(M);
      if (ve !== void 0) return ve;
    }
    var je;
    at = !0;
    var ht = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    var Et;
    ((Et = j.current), (j.current = null), Te());
    try {
      if (le) {
        var Ye = function () {
          throw Error();
        };
        if (
          (Object.defineProperty(Ye.prototype, 'props', {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == 'object' && Reflect.construct)
        ) {
          try {
            Reflect.construct(Ye, []);
          } catch (xn) {
            je = xn;
          }
          Reflect.construct(M, [], Ye);
        } else {
          try {
            Ye.call();
          } catch (xn) {
            je = xn;
          }
          M.call(Ye.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (xn) {
          je = xn;
        }
        M();
      }
    } catch (xn) {
      if (xn && je && typeof xn.stack == 'string') {
        for (
          var ut = xn.stack.split(`
`),
            hn = je.stack.split(`
`),
            Bt = ut.length - 1,
            Xt = hn.length - 1;
          Bt >= 1 && Xt >= 0 && ut[Bt] !== hn[Xt];

        )
          Xt--;
        for (; Bt >= 1 && Xt >= 0; Bt--, Xt--)
          if (ut[Bt] !== hn[Xt]) {
            if (Bt !== 1 || Xt !== 1)
              do
                if ((Bt--, Xt--, Xt < 0 || ut[Bt] !== hn[Xt])) {
                  var Bn =
                    `
` + ut[Bt].replace(' at new ', ' at ');
                  return (
                    M.displayName &&
                      Bn.includes('<anonymous>') &&
                      (Bn = Bn.replace('<anonymous>', M.displayName)),
                    typeof M == 'function' && We.set(M, Bn),
                    Bn
                  );
                }
              while (Bt >= 1 && Xt >= 0);
            break;
          }
      }
    } finally {
      ((at = !1), (j.current = Et), Ue(), (Error.prepareStackTrace = ht));
    }
    var ia = M ? M.displayName || M.name : '',
      Dr = ia ? pe(ia) : '';
    return (typeof M == 'function' && We.set(M, Dr), Dr);
  }
  function it(M, le, ve) {
    return ee(M, !1);
  }
  function dt(M) {
    var le = M.prototype;
    return !!(le && le.isReactComponent);
  }
  function Fe(M, le, ve) {
    if (M == null) return '';
    if (typeof M == 'function') return ee(M, dt(M));
    if (typeof M == 'string') return pe(M);
    switch (M) {
      case g:
        return pe('Suspense');
      case E:
        return pe('SuspenseList');
    }
    if (typeof M == 'object')
      switch (M.$$typeof) {
        case m:
          return it(M.render);
        case S:
          return Fe(M.type, le, ve);
        case w: {
          var je = M,
            ht = je._payload,
            Et = je._init;
          try {
            return Fe(Et(ht), le, ve);
          } catch {}
        }
      }
    return '';
  }
  var vt = Object.prototype.hasOwnProperty,
    $e = {},
    Ot = N.ReactDebugCurrentFrame;
  function ln(M) {
    if (M) {
      var le = M._owner,
        ve = Fe(M.type, M._source, le ? le.type : null);
      Ot.setExtraStackFrame(ve);
    } else Ot.setExtraStackFrame(null);
  }
  function R(M, le, ve, je, ht) {
    {
      var Et = Function.call.bind(vt);
      for (var Ye in M)
        if (Et(M, Ye)) {
          var ut = void 0;
          try {
            if (typeof M[Ye] != 'function') {
              var hn = Error(
                (je || 'React class') +
                  ': ' +
                  ve +
                  ' type `' +
                  Ye +
                  '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                  typeof M[Ye] +
                  '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
              );
              throw ((hn.name = 'Invariant Violation'), hn);
            }
            ut = M[Ye](
              le,
              Ye,
              je,
              ve,
              null,
              'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
            );
          } catch (Bt) {
            ut = Bt;
          }
          (ut &&
            !(ut instanceof Error) &&
            (ln(ht),
            _(
              '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
              je || 'React class',
              ve,
              Ye,
              typeof ut
            ),
            ln(null)),
            ut instanceof Error &&
              !(ut.message in $e) &&
              (($e[ut.message] = !0),
              ln(ht),
              _('Failed %s type: %s', ve, ut.message),
              ln(null)));
        }
    }
  }
  var F = Array.isArray;
  function G(M) {
    return F(M);
  }
  function de(M) {
    {
      var le = typeof Symbol == 'function' && Symbol.toStringTag,
        ve = (le && M[Symbol.toStringTag]) || M.constructor.name || 'Object';
      return ve;
    }
  }
  function W(M) {
    try {
      return (J(M), !1);
    } catch {
      return !0;
    }
  }
  function J(M) {
    return '' + M;
  }
  function _e(M) {
    if (W(M))
      return (
        _(
          'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
          de(M)
        ),
        J(M)
      );
  }
  var Ie = N.ReactCurrentOwner,
    Ze = { key: !0, ref: !0, __self: !0, __source: !0 },
    tn,
    ir,
    ye;
  ye = {};
  function ze(M) {
    if (vt.call(M, 'ref')) {
      var le = Object.getOwnPropertyDescriptor(M, 'ref').get;
      if (le && le.isReactWarning) return !1;
    }
    return M.ref !== void 0;
  }
  function ot(M) {
    if (vt.call(M, 'key')) {
      var le = Object.getOwnPropertyDescriptor(M, 'key').get;
      if (le && le.isReactWarning) return !1;
    }
    return M.key !== void 0;
  }
  function wt(M, le) {
    if (
      typeof M.ref == 'string' &&
      Ie.current &&
      le &&
      Ie.current.stateNode !== le
    ) {
      var ve = ie(Ie.current.type);
      ye[ve] ||
        (_(
          'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
          ie(Ie.current.type),
          M.ref
        ),
        (ye[ve] = !0));
    }
  }
  function At(M, le) {
    {
      var ve = function () {
        tn ||
          ((tn = !0),
          _(
            '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
            le
          ));
      };
      ((ve.isReactWarning = !0),
        Object.defineProperty(M, 'key', { get: ve, configurable: !0 }));
    }
  }
  function nn(M, le) {
    {
      var ve = function () {
        ir ||
          ((ir = !0),
          _(
            '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
            le
          ));
      };
      ((ve.isReactWarning = !0),
        Object.defineProperty(M, 'ref', { get: ve, configurable: !0 }));
    }
  }
  var Kt = function (M, le, ve, je, ht, Et, Ye) {
    var ut = { $$typeof: i, type: M, key: le, ref: ve, props: Ye, _owner: Et };
    return (
      (ut._store = {}),
      Object.defineProperty(ut._store, 'validated', {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1,
      }),
      Object.defineProperty(ut, '_self', {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: je,
      }),
      Object.defineProperty(ut, '_source', {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ht,
      }),
      Object.freeze && (Object.freeze(ut.props), Object.freeze(ut)),
      ut
    );
  };
  function Ln(M, le, ve, je, ht) {
    {
      var Et,
        Ye = {},
        ut = null,
        hn = null;
      (ve !== void 0 && (_e(ve), (ut = '' + ve)),
        ot(le) && (_e(le.key), (ut = '' + le.key)),
        ze(le) && ((hn = le.ref), wt(le, ht)));
      for (Et in le)
        vt.call(le, Et) && !Ze.hasOwnProperty(Et) && (Ye[Et] = le[Et]);
      if (M && M.defaultProps) {
        var Bt = M.defaultProps;
        for (Et in Bt) Ye[Et] === void 0 && (Ye[Et] = Bt[Et]);
      }
      if (ut || hn) {
        var Xt =
          typeof M == 'function' ? M.displayName || M.name || 'Unknown' : M;
        (ut && At(Ye, Xt), hn && nn(Ye, Xt));
      }
      return Kt(M, ut, hn, ht, je, Ie.current, Ye);
    }
  }
  var Ut = N.ReactCurrentOwner,
    vr = N.ReactDebugCurrentFrame;
  function $t(M) {
    if (M) {
      var le = M._owner,
        ve = Fe(M.type, M._source, le ? le.type : null);
      vr.setExtraStackFrame(ve);
    } else vr.setExtraStackFrame(null);
  }
  var Yt;
  Yt = !1;
  function ra(M) {
    return typeof M == 'object' && M !== null && M.$$typeof === i;
  }
  function Ur() {
    {
      if (Ut.current) {
        var M = ie(Ut.current.type);
        if (M)
          return (
            `

Check the render method of \`` +
            M +
            '`.'
          );
      }
      return '';
    }
  }
  function Ii(M) {
    {
      if (M !== void 0) {
        var le = M.fileName.replace(/^.*[\\\/]/, ''),
          ve = M.lineNumber;
        return (
          `

Check your code at ` +
          le +
          ':' +
          ve +
          '.'
        );
      }
      return '';
    }
  }
  var Oo = {};
  function Fl(M) {
    {
      var le = Ur();
      if (!le) {
        var ve = typeof M == 'string' ? M : M.displayName || M.name;
        ve &&
          (le =
            `

Check the top-level render call using <` +
            ve +
            '>.');
      }
      return le;
    }
  }
  function Bi(M, le) {
    {
      if (!M._store || M._store.validated || M.key != null) return;
      M._store.validated = !0;
      var ve = Fl(le);
      if (Oo[ve]) return;
      Oo[ve] = !0;
      var je = '';
      (M &&
        M._owner &&
        M._owner !== Ut.current &&
        (je = ' It was passed a child from ' + ie(M._owner.type) + '.'),
        $t(M),
        _(
          'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
          ve,
          je
        ),
        $t(null));
    }
  }
  function ji(M, le) {
    {
      if (typeof M != 'object') return;
      if (G(M))
        for (var ve = 0; ve < M.length; ve++) {
          var je = M[ve];
          ra(je) && Bi(je, le);
        }
      else if (ra(M)) M._store && (M._store.validated = !0);
      else if (M) {
        var ht = z(M);
        if (typeof ht == 'function' && ht !== M.entries)
          for (var Et = ht.call(M), Ye; !(Ye = Et.next()).done; )
            ra(Ye.value) && Bi(Ye.value, le);
      }
    }
  }
  function wa(M) {
    {
      var le = M.type;
      if (le == null || typeof le == 'string') return;
      var ve;
      if (typeof le == 'function') ve = le.propTypes;
      else if (
        typeof le == 'object' &&
        (le.$$typeof === m || le.$$typeof === S)
      )
        ve = le.propTypes;
      else return;
      if (ve) {
        var je = ie(le);
        R(ve, M.props, 'prop', je, M);
      } else if (le.PropTypes !== void 0 && !Yt) {
        Yt = !0;
        var ht = ie(le);
        _(
          'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
          ht || 'Unknown'
        );
      }
      typeof le.getDefaultProps == 'function' &&
        !le.getDefaultProps.isReactClassApproved &&
        _(
          'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.'
        );
    }
  }
  function ni(M) {
    {
      for (var le = Object.keys(M.props), ve = 0; ve < le.length; ve++) {
        var je = le[ve];
        if (je !== 'children' && je !== 'key') {
          ($t(M),
            _(
              'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
              je
            ),
            $t(null));
          break;
        }
      }
      M.ref !== null &&
        ($t(M),
        _('Invalid attribute `ref` supplied to `React.Fragment`.'),
        $t(null));
    }
  }
  var xa = {};
  function Fr(M, le, ve, je, ht, Et) {
    {
      var Ye = te(M);
      if (!Ye) {
        var ut = '';
        (M === void 0 ||
          (typeof M == 'object' &&
            M !== null &&
            Object.keys(M).length === 0)) &&
          (ut +=
            " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
        var hn = Ii(ht);
        hn ? (ut += hn) : (ut += Ur());
        var Bt;
        (M === null
          ? (Bt = 'null')
          : G(M)
            ? (Bt = 'array')
            : M !== void 0 && M.$$typeof === i
              ? ((Bt = '<' + (ie(M.type) || 'Unknown') + ' />'),
                (ut =
                  ' Did you accidentally export a JSX literal instead of a component?'))
              : (Bt = typeof M),
          _(
            'React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
            Bt,
            ut
          ));
      }
      var Xt = Ln(M, le, ve, ht, Et);
      if (Xt == null) return Xt;
      if (Ye) {
        var Bn = le.children;
        if (Bn !== void 0)
          if (je)
            if (G(Bn)) {
              for (var ia = 0; ia < Bn.length; ia++) ji(Bn[ia], M);
              Object.freeze && Object.freeze(Bn);
            } else
              _(
                'React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.'
              );
          else ji(Bn, M);
      }
      if (vt.call(le, 'key')) {
        var Dr = ie(M),
          xn = Object.keys(le).filter(function (Ra) {
            return Ra !== 'key';
          }),
          hr =
            xn.length > 0
              ? '{key: someKey, ' + xn.join(': ..., ') + ': ...}'
              : '{key: someKey}';
        if (!xa[Dr + hr]) {
          var ct = xn.length > 0 ? '{' + xn.join(': ..., ') + ': ...}' : '{}';
          (_(
            `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
            hr,
            Dr,
            ct,
            Dr
          ),
            (xa[Dr + hr] = !0));
        }
      }
      return (M === s ? ni(Xt) : wa(Xt), Xt);
    }
  }
  function Vr(M, le, ve) {
    return Fr(M, le, ve, !0);
  }
  function aa(M, le, ve) {
    return Fr(M, le, ve, !1);
  }
  var $i = aa,
    ri = Vr;
  ((fd.Fragment = s), (fd.jsx = $i), (fd.jsxs = ri));
})();
ST.exports = fd;
var CT = ST.exports;
const Ae = CT.jsx,
  wn = CT.jsxs;
var TT = { exports: {} },
  xr = {},
  wT = { exports: {} },
  xT = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (r) {
  (function () {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' &&
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ==
        'function' &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var i = !1,
      o = !1,
      s = 5;
    function c(ye, ze) {
      var ot = ye.length;
      (ye.push(ze), h(ye, ze, ot));
    }
    function f(ye) {
      return ye.length === 0 ? null : ye[0];
    }
    function d(ye) {
      if (ye.length === 0) return null;
      var ze = ye[0],
        ot = ye.pop();
      return (ot !== ze && ((ye[0] = ot), m(ye, ot, 0)), ze);
    }
    function h(ye, ze, ot) {
      for (var wt = ot; wt > 0; ) {
        var At = (wt - 1) >>> 1,
          nn = ye[At];
        if (g(nn, ze) > 0) ((ye[At] = ze), (ye[wt] = nn), (wt = At));
        else return;
      }
    }
    function m(ye, ze, ot) {
      for (var wt = ot, At = ye.length, nn = At >>> 1; wt < nn; ) {
        var Kt = (wt + 1) * 2 - 1,
          Ln = ye[Kt],
          Ut = Kt + 1,
          vr = ye[Ut];
        if (g(Ln, ze) < 0)
          Ut < At && g(vr, Ln) < 0
            ? ((ye[wt] = vr), (ye[Ut] = ze), (wt = Ut))
            : ((ye[wt] = Ln), (ye[Kt] = ze), (wt = Kt));
        else if (Ut < At && g(vr, ze) < 0)
          ((ye[wt] = vr), (ye[Ut] = ze), (wt = Ut));
        else return;
      }
    }
    function g(ye, ze) {
      var ot = ye.sortIndex - ze.sortIndex;
      return ot !== 0 ? ot : ye.id - ze.id;
    }
    var E = 1,
      S = 2,
      w = 3,
      O = 4,
      D = 5;
    function x(ye, ze) {}
    var z =
      typeof performance == 'object' && typeof performance.now == 'function';
    if (z) {
      var N = performance;
      r.unstable_now = function () {
        return N.now();
      };
    } else {
      var _ = Date,
        P = _.now();
      r.unstable_now = function () {
        return _.now() - P;
      };
    }
    var U = 1073741823,
      V = -1,
      oe = 250,
      ne = 5e3,
      ce = 1e4,
      re = U,
      te = [],
      ue = [],
      ae = 1,
      ie = null,
      Ee = w,
      Me = !1,
      be = !1,
      me = !1,
      Ve = typeof setTimeout == 'function' ? setTimeout : null,
      Qe = typeof clearTimeout == 'function' ? clearTimeout : null,
      ft = typeof setImmediate < 'u' ? setImmediate : null;
    typeof navigator < 'u' &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function qt(ye) {
      for (var ze = f(ue); ze !== null; ) {
        if (ze.callback === null) d(ue);
        else if (ze.startTime <= ye)
          (d(ue), (ze.sortIndex = ze.expirationTime), c(te, ze));
        else return;
        ze = f(ue);
      }
    }
    function Se(ye) {
      if (((me = !1), qt(ye), !be))
        if (f(te) !== null) ((be = !0), _e(ge));
        else {
          var ze = f(ue);
          ze !== null && Ie(Se, ze.startTime - ye);
        }
    }
    function ge(ye, ze) {
      ((be = !1), me && ((me = !1), Ze()), (Me = !0));
      var ot = Ee;
      try {
        var wt;
        if (!o) return Te(ye, ze);
      } finally {
        ((ie = null), (Ee = ot), (Me = !1));
      }
    }
    function Te(ye, ze) {
      var ot = ze;
      for (
        qt(ot), ie = f(te);
        ie !== null && !i && !(ie.expirationTime > ot && (!ye || ln()));

      ) {
        var wt = ie.callback;
        if (typeof wt == 'function') {
          ((ie.callback = null), (Ee = ie.priorityLevel));
          var At = ie.expirationTime <= ot,
            nn = wt(At);
          ((ot = r.unstable_now()),
            typeof nn == 'function'
              ? (ie.callback = nn)
              : ie === f(te) && d(te),
            qt(ot));
        } else d(te);
        ie = f(te);
      }
      if (ie !== null) return !0;
      var Kt = f(ue);
      return (Kt !== null && Ie(Se, Kt.startTime - ot), !1);
    }
    function Ue(ye, ze) {
      switch (ye) {
        case E:
        case S:
        case w:
        case O:
        case D:
          break;
        default:
          ye = w;
      }
      var ot = Ee;
      Ee = ye;
      try {
        return ze();
      } finally {
        Ee = ot;
      }
    }
    function j(ye) {
      var ze;
      switch (Ee) {
        case E:
        case S:
        case w:
          ze = w;
          break;
        default:
          ze = Ee;
          break;
      }
      var ot = Ee;
      Ee = ze;
      try {
        return ye();
      } finally {
        Ee = ot;
      }
    }
    function Ke(ye) {
      var ze = Ee;
      return function () {
        var ot = Ee;
        Ee = ze;
        try {
          return ye.apply(this, arguments);
        } finally {
          Ee = ot;
        }
      };
    }
    function pe(ye, ze, ot) {
      var wt = r.unstable_now(),
        At;
      if (typeof ot == 'object' && ot !== null) {
        var nn = ot.delay;
        typeof nn == 'number' && nn > 0 ? (At = wt + nn) : (At = wt);
      } else At = wt;
      var Kt;
      switch (ye) {
        case E:
          Kt = V;
          break;
        case S:
          Kt = oe;
          break;
        case D:
          Kt = re;
          break;
        case O:
          Kt = ce;
          break;
        case w:
        default:
          Kt = ne;
          break;
      }
      var Ln = At + Kt,
        Ut = {
          id: ae++,
          callback: ze,
          priorityLevel: ye,
          startTime: At,
          expirationTime: Ln,
          sortIndex: -1,
        };
      return (
        At > wt
          ? ((Ut.sortIndex = At),
            c(ue, Ut),
            f(te) === null &&
              Ut === f(ue) &&
              (me ? Ze() : (me = !0), Ie(Se, At - wt)))
          : ((Ut.sortIndex = Ln), c(te, Ut), !be && !Me && ((be = !0), _e(ge))),
        Ut
      );
    }
    function at() {}
    function We() {
      !be && !Me && ((be = !0), _e(ge));
    }
    function Je() {
      return f(te);
    }
    function ee(ye) {
      ye.callback = null;
    }
    function it() {
      return Ee;
    }
    var dt = !1,
      Fe = null,
      vt = -1,
      $e = s,
      Ot = -1;
    function ln() {
      var ye = r.unstable_now() - Ot;
      return !(ye < $e);
    }
    function R() {}
    function F(ye) {
      if (ye < 0 || ye > 125) {
        console.error(
          'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
        );
        return;
      }
      ye > 0 ? ($e = Math.floor(1e3 / ye)) : ($e = s);
    }
    var G = function () {
        if (Fe !== null) {
          var ye = r.unstable_now();
          Ot = ye;
          var ze = !0,
            ot = !0;
          try {
            ot = Fe(ze, ye);
          } finally {
            ot ? de() : ((dt = !1), (Fe = null));
          }
        } else dt = !1;
      },
      de;
    if (typeof ft == 'function')
      de = function () {
        ft(G);
      };
    else if (typeof MessageChannel < 'u') {
      var W = new MessageChannel(),
        J = W.port2;
      ((W.port1.onmessage = G),
        (de = function () {
          J.postMessage(null);
        }));
    } else
      de = function () {
        Ve(G, 0);
      };
    function _e(ye) {
      ((Fe = ye), dt || ((dt = !0), de()));
    }
    function Ie(ye, ze) {
      vt = Ve(function () {
        ye(r.unstable_now());
      }, ze);
    }
    function Ze() {
      (Qe(vt), (vt = -1));
    }
    var tn = R,
      ir = null;
    ((r.unstable_IdlePriority = D),
      (r.unstable_ImmediatePriority = E),
      (r.unstable_LowPriority = O),
      (r.unstable_NormalPriority = w),
      (r.unstable_Profiling = ir),
      (r.unstable_UserBlockingPriority = S),
      (r.unstable_cancelCallback = ee),
      (r.unstable_continueExecution = We),
      (r.unstable_forceFrameRate = F),
      (r.unstable_getCurrentPriorityLevel = it),
      (r.unstable_getFirstCallbackNode = Je),
      (r.unstable_next = j),
      (r.unstable_pauseExecution = at),
      (r.unstable_requestPaint = tn),
      (r.unstable_runWithPriority = Ue),
      (r.unstable_scheduleCallback = pe),
      (r.unstable_shouldYield = ln),
      (r.unstable_wrapCallback = Ke),
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' &&
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ==
          'function' &&
        __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error()));
  })();
})(xT);
wT.exports = xT;
var IM = wT.exports;
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function () {
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' &&
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ==
      'function' &&
    __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
  var r = K,
    i = IM,
    o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    s = !1;
  function c(e) {
    s = e;
  }
  function f(e) {
    if (!s) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1;
        a < t;
        a++
      )
        n[a - 1] = arguments[a];
      h('warn', e, n);
    }
  }
  function d(e) {
    if (!s) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1;
        a < t;
        a++
      )
        n[a - 1] = arguments[a];
      h('error', e, n);
    }
  }
  function h(e, t, n) {
    {
      var a = o.ReactDebugCurrentFrame,
        l = a.getStackAddendum();
      l !== '' && ((t += '%s'), (n = n.concat([l])));
      var u = n.map(function (p) {
        return String(p);
      });
      (u.unshift('Warning: ' + t),
        Function.prototype.apply.call(console[e], console, u));
    }
  }
  var m = 0,
    g = 1,
    E = 2,
    S = 3,
    w = 4,
    O = 5,
    D = 6,
    x = 7,
    z = 8,
    N = 9,
    _ = 10,
    P = 11,
    U = 12,
    V = 13,
    oe = 14,
    ne = 15,
    ce = 16,
    re = 17,
    te = 18,
    ue = 19,
    ae = 21,
    ie = 22,
    Ee = 23,
    Me = 24,
    be = 25,
    me = !0,
    Ve = !1,
    Qe = !1,
    ft = !1,
    qt = !1,
    Se = !0,
    ge = !1,
    Te = !0,
    Ue = !0,
    j = !0,
    Ke = !0,
    pe = new Set(),
    at = {},
    We = {};
  function Je(e, t) {
    (ee(e, t), ee(e + 'Capture', t));
  }
  function ee(e, t) {
    (at[e] &&
      d(
        'EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.',
        e
      ),
      (at[e] = t));
    {
      var n = e.toLowerCase();
      ((We[n] = e), e === 'onDoubleClick' && (We.ondblclick = e));
    }
    for (var a = 0; a < t.length; a++) pe.add(t[a]);
  }
  var it =
      typeof window < 'u' &&
      typeof window.document < 'u' &&
      typeof window.document.createElement < 'u',
    dt = Object.prototype.hasOwnProperty;
  function Fe(e) {
    {
      var t = typeof Symbol == 'function' && Symbol.toStringTag,
        n = (t && e[Symbol.toStringTag]) || e.constructor.name || 'Object';
      return n;
    }
  }
  function vt(e) {
    try {
      return ($e(e), !1);
    } catch {
      return !0;
    }
  }
  function $e(e) {
    return '' + e;
  }
  function Ot(e, t) {
    if (vt(e))
      return (
        d(
          'The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.',
          t,
          Fe(e)
        ),
        $e(e)
      );
  }
  function ln(e) {
    if (vt(e))
      return (
        d(
          'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
          Fe(e)
        ),
        $e(e)
      );
  }
  function R(e, t) {
    if (vt(e))
      return (
        d(
          'The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.',
          t,
          Fe(e)
        ),
        $e(e)
      );
  }
  function F(e, t) {
    if (vt(e))
      return (
        d(
          'The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.',
          t,
          Fe(e)
        ),
        $e(e)
      );
  }
  function G(e) {
    if (vt(e))
      return (
        d(
          'The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.',
          Fe(e)
        ),
        $e(e)
      );
  }
  function de(e) {
    if (vt(e))
      return (
        d(
          'Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.',
          Fe(e)
        ),
        $e(e)
      );
  }
  var W = 0,
    J = 1,
    _e = 2,
    Ie = 3,
    Ze = 4,
    tn = 5,
    ir = 6,
    ye =
      ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD',
    ze = ye + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040',
    ot = new RegExp('^[' + ye + '][' + ze + ']*$'),
    wt = {},
    At = {};
  function nn(e) {
    return dt.call(At, e)
      ? !0
      : dt.call(wt, e)
        ? !1
        : ot.test(e)
          ? ((At[e] = !0), !0)
          : ((wt[e] = !0), d('Invalid attribute name: `%s`', e), !1);
  }
  function Kt(e, t, n) {
    return t !== null
      ? t.type === W
      : n
        ? !1
        : e.length > 2 &&
          (e[0] === 'o' || e[0] === 'O') &&
          (e[1] === 'n' || e[1] === 'N');
  }
  function Ln(e, t, n, a) {
    if (n !== null && n.type === W) return !1;
    switch (typeof t) {
      case 'function':
      case 'symbol':
        return !0;
      case 'boolean': {
        if (a) return !1;
        if (n !== null) return !n.acceptsBooleans;
        var l = e.toLowerCase().slice(0, 5);
        return l !== 'data-' && l !== 'aria-';
      }
      default:
        return !1;
    }
  }
  function Ut(e, t, n, a) {
    if (t === null || typeof t > 'u' || Ln(e, t, n, a)) return !0;
    if (a) return !1;
    if (n !== null)
      switch (n.type) {
        case Ie:
          return !t;
        case Ze:
          return t === !1;
        case tn:
          return isNaN(t);
        case ir:
          return isNaN(t) || t < 1;
      }
    return !1;
  }
  function vr(e) {
    return Yt.hasOwnProperty(e) ? Yt[e] : null;
  }
  function $t(e, t, n, a, l, u, p) {
    ((this.acceptsBooleans = t === _e || t === Ie || t === Ze),
      (this.attributeName = a),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = u),
      (this.removeEmptyString = p));
  }
  var Yt = {},
    ra = [
      'children',
      'dangerouslySetInnerHTML',
      'defaultValue',
      'defaultChecked',
      'innerHTML',
      'suppressContentEditableWarning',
      'suppressHydrationWarning',
      'style',
    ];
  (ra.forEach(function (e) {
    Yt[e] = new $t(e, W, !1, e, null, !1, !1);
  }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0],
        n = e[1];
      Yt[t] = new $t(t, J, !1, n, null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(
      function (e) {
        Yt[e] = new $t(e, _e, !1, e.toLowerCase(), null, !1, !1);
      }
    ),
    [
      'autoReverse',
      'externalResourcesRequired',
      'focusable',
      'preserveAlpha',
    ].forEach(function (e) {
      Yt[e] = new $t(e, _e, !1, e, null, !1, !1);
    }),
    [
      'allowFullScreen',
      'async',
      'autoFocus',
      'autoPlay',
      'controls',
      'default',
      'defer',
      'disabled',
      'disablePictureInPicture',
      'disableRemotePlayback',
      'formNoValidate',
      'hidden',
      'loop',
      'noModule',
      'noValidate',
      'open',
      'playsInline',
      'readOnly',
      'required',
      'reversed',
      'scoped',
      'seamless',
      'itemScope',
    ].forEach(function (e) {
      Yt[e] = new $t(e, Ie, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      Yt[e] = new $t(e, Ie, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
      Yt[e] = new $t(e, Ze, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      Yt[e] = new $t(e, ir, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      Yt[e] = new $t(e, tn, !1, e.toLowerCase(), null, !1, !1);
    }));
  var Ur = /[\-\:]([a-z])/g,
    Ii = function (e) {
      return e[1].toUpperCase();
    };
  ([
    'accent-height',
    'alignment-baseline',
    'arabic-form',
    'baseline-shift',
    'cap-height',
    'clip-path',
    'clip-rule',
    'color-interpolation',
    'color-interpolation-filters',
    'color-profile',
    'color-rendering',
    'dominant-baseline',
    'enable-background',
    'fill-opacity',
    'fill-rule',
    'flood-color',
    'flood-opacity',
    'font-family',
    'font-size',
    'font-size-adjust',
    'font-stretch',
    'font-style',
    'font-variant',
    'font-weight',
    'glyph-name',
    'glyph-orientation-horizontal',
    'glyph-orientation-vertical',
    'horiz-adv-x',
    'horiz-origin-x',
    'image-rendering',
    'letter-spacing',
    'lighting-color',
    'marker-end',
    'marker-mid',
    'marker-start',
    'overline-position',
    'overline-thickness',
    'paint-order',
    'panose-1',
    'pointer-events',
    'rendering-intent',
    'shape-rendering',
    'stop-color',
    'stop-opacity',
    'strikethrough-position',
    'strikethrough-thickness',
    'stroke-dasharray',
    'stroke-dashoffset',
    'stroke-linecap',
    'stroke-linejoin',
    'stroke-miterlimit',
    'stroke-opacity',
    'stroke-width',
    'text-anchor',
    'text-decoration',
    'text-rendering',
    'underline-position',
    'underline-thickness',
    'unicode-bidi',
    'unicode-range',
    'units-per-em',
    'v-alphabetic',
    'v-hanging',
    'v-ideographic',
    'v-mathematical',
    'vector-effect',
    'vert-adv-y',
    'vert-origin-x',
    'vert-origin-y',
    'word-spacing',
    'writing-mode',
    'xmlns:xlink',
    'x-height',
  ].forEach(function (e) {
    var t = e.replace(Ur, Ii);
    Yt[t] = new $t(t, J, !1, e, null, !1, !1);
  }),
    [
      'xlink:actuate',
      'xlink:arcrole',
      'xlink:role',
      'xlink:show',
      'xlink:title',
      'xlink:type',
    ].forEach(function (e) {
      var t = e.replace(Ur, Ii);
      Yt[t] = new $t(t, J, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
    }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(Ur, Ii);
      Yt[t] = new $t(
        t,
        J,
        !1,
        e,
        'http://www.w3.org/XML/1998/namespace',
        !1,
        !1
      );
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      Yt[e] = new $t(e, J, !1, e.toLowerCase(), null, !1, !1);
    }));
  var Oo = 'xlinkHref';
  ((Yt[Oo] = new $t(
    'xlinkHref',
    J,
    !1,
    'xlink:href',
    'http://www.w3.org/1999/xlink',
    !0,
    !1
  )),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      Yt[e] = new $t(e, J, !1, e.toLowerCase(), null, !0, !0);
    }));
  var Fl =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i,
    Bi = !1;
  function ji(e) {
    !Bi &&
      Fl.test(e) &&
      ((Bi = !0),
      d(
        'A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.',
        JSON.stringify(e)
      ));
  }
  function wa(e, t, n, a) {
    if (a.mustUseProperty) {
      var l = a.propertyName;
      return e[l];
    } else {
      (Ot(n, t), a.sanitizeURL && ji('' + n));
      var u = a.attributeName,
        p = null;
      if (a.type === Ze) {
        if (e.hasAttribute(u)) {
          var v = e.getAttribute(u);
          return v === '' ? !0 : Ut(t, n, a, !1) ? v : v === '' + n ? n : v;
        }
      } else if (e.hasAttribute(u)) {
        if (Ut(t, n, a, !1)) return e.getAttribute(u);
        if (a.type === Ie) return n;
        p = e.getAttribute(u);
      }
      return Ut(t, n, a, !1) ? (p === null ? n : p) : p === '' + n ? n : p;
    }
  }
  function ni(e, t, n, a) {
    {
      if (!nn(t)) return;
      if (!e.hasAttribute(t)) return n === void 0 ? void 0 : null;
      var l = e.getAttribute(t);
      return (Ot(n, t), l === '' + n ? n : l);
    }
  }
  function xa(e, t, n, a) {
    var l = vr(t);
    if (!Kt(t, l, a)) {
      if ((Ut(t, n, l, a) && (n = null), a || l === null)) {
        if (nn(t)) {
          var u = t;
          n === null
            ? e.removeAttribute(u)
            : (Ot(n, t), e.setAttribute(u, '' + n));
        }
        return;
      }
      var p = l.mustUseProperty;
      if (p) {
        var v = l.propertyName;
        if (n === null) {
          var y = l.type;
          e[v] = y === Ie ? !1 : '';
        } else e[v] = n;
        return;
      }
      var C = l.attributeName,
        T = l.attributeNamespace;
      if (n === null) e.removeAttribute(C);
      else {
        var k = l.type,
          L;
        (k === Ie || (k === Ze && n === !0)
          ? (L = '')
          : (Ot(n, C), (L = '' + n), l.sanitizeURL && ji(L.toString())),
          T ? e.setAttributeNS(T, C, L) : e.setAttribute(C, L));
      }
    }
  }
  var Fr = Symbol.for('react.element'),
    Vr = Symbol.for('react.portal'),
    aa = Symbol.for('react.fragment'),
    $i = Symbol.for('react.strict_mode'),
    ri = Symbol.for('react.profiler'),
    M = Symbol.for('react.provider'),
    le = Symbol.for('react.context'),
    ve = Symbol.for('react.forward_ref'),
    je = Symbol.for('react.suspense'),
    ht = Symbol.for('react.suspense_list'),
    Et = Symbol.for('react.memo'),
    Ye = Symbol.for('react.lazy'),
    ut = Symbol.for('react.scope'),
    hn = Symbol.for('react.debug_trace_mode'),
    Bt = Symbol.for('react.offscreen'),
    Xt = Symbol.for('react.legacy_hidden'),
    Bn = Symbol.for('react.cache'),
    ia = Symbol.for('react.tracing_marker'),
    Dr = Symbol.iterator,
    xn = '@@iterator';
  function hr(e) {
    if (e === null || typeof e != 'object') return null;
    var t = (Dr && e[Dr]) || e[xn];
    return typeof t == 'function' ? t : null;
  }
  var ct = Object.assign,
    Ra = 0,
    ai,
    Vl,
    Hl,
    Il,
    Bl,
    jl,
    $l;
  function Yl() {}
  Yl.__reactDisabledLog = !0;
  function Yu() {
    {
      if (Ra === 0) {
        ((ai = console.log),
          (Vl = console.info),
          (Hl = console.warn),
          (Il = console.error),
          (Bl = console.group),
          (jl = console.groupCollapsed),
          ($l = console.groupEnd));
        var e = { configurable: !0, enumerable: !0, value: Yl, writable: !0 };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e,
        });
      }
      Ra++;
    }
  }
  function Md() {
    {
      if ((Ra--, Ra === 0)) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: ct({}, e, { value: ai }),
          info: ct({}, e, { value: Vl }),
          warn: ct({}, e, { value: Hl }),
          error: ct({}, e, { value: Il }),
          group: ct({}, e, { value: Bl }),
          groupCollapsed: ct({}, e, { value: jl }),
          groupEnd: ct({}, e, { value: $l }),
        });
      }
      Ra < 0 &&
        d(
          'disabledDepth fell below zero. This is a bug in React. Please file an issue.'
        );
    }
  }
  var Gl = o.ReactCurrentDispatcher,
    Yi;
  function Or(e, t, n) {
    {
      if (Yi === void 0)
        try {
          throw Error();
        } catch (l) {
          var a = l.stack.trim().match(/\n( *(at )?)/);
          Yi = (a && a[1]) || '';
        }
      return (
        `
` +
        Yi +
        e
      );
    }
  }
  var ii = !1,
    oi;
  {
    var Ao = typeof WeakMap == 'function' ? WeakMap : Map;
    oi = new Ao();
  }
  function Wl(e, t) {
    if (!e || ii) return '';
    {
      var n = oi.get(e);
      if (n !== void 0) return n;
    }
    var a;
    ii = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    var u;
    ((u = Gl.current), (Gl.current = null), Yu());
    try {
      if (t) {
        var p = function () {
          throw Error();
        };
        if (
          (Object.defineProperty(p.prototype, 'props', {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == 'object' && Reflect.construct)
        ) {
          try {
            Reflect.construct(p, []);
          } catch (Y) {
            a = Y;
          }
          Reflect.construct(e, [], p);
        } else {
          try {
            p.call();
          } catch (Y) {
            a = Y;
          }
          e.call(p.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (Y) {
          a = Y;
        }
        e();
      }
    } catch (Y) {
      if (Y && a && typeof Y.stack == 'string') {
        for (
          var v = Y.stack.split(`
`),
            y = a.stack.split(`
`),
            C = v.length - 1,
            T = y.length - 1;
          C >= 1 && T >= 0 && v[C] !== y[T];

        )
          T--;
        for (; C >= 1 && T >= 0; C--, T--)
          if (v[C] !== y[T]) {
            if (C !== 1 || T !== 1)
              do
                if ((C--, T--, T < 0 || v[C] !== y[T])) {
                  var k =
                    `
` + v[C].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      k.includes('<anonymous>') &&
                      (k = k.replace('<anonymous>', e.displayName)),
                    typeof e == 'function' && oi.set(e, k),
                    k
                  );
                }
              while (C >= 1 && T >= 0);
            break;
          }
      }
    } finally {
      ((ii = !1), (Gl.current = u), Md(), (Error.prepareStackTrace = l));
    }
    var L = e ? e.displayName || e.name : '',
      B = L ? Or(L) : '';
    return (typeof e == 'function' && oi.set(e, B), B);
  }
  function Gu(e, t, n) {
    return Wl(e, !0);
  }
  function ql(e, t, n) {
    return Wl(e, !1);
  }
  function Ld(e) {
    var t = e.prototype;
    return !!(t && t.isReactComponent);
  }
  function li(e, t, n) {
    if (e == null) return '';
    if (typeof e == 'function') return Wl(e, Ld(e));
    if (typeof e == 'string') return Or(e);
    switch (e) {
      case je:
        return Or('Suspense');
      case ht:
        return Or('SuspenseList');
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case ve:
          return ql(e.render);
        case Et:
          return li(e.type, t, n);
        case Ye: {
          var a = e,
            l = a._payload,
            u = a._init;
          try {
            return li(u(l), t, n);
          } catch {}
        }
      }
    return '';
  }
  function Wu(e) {
    switch ((e._debugOwner && e._debugOwner.type, e._debugSource, e.tag)) {
      case O:
        return Or(e.type);
      case ce:
        return Or('Lazy');
      case V:
        return Or('Suspense');
      case ue:
        return Or('SuspenseList');
      case m:
      case E:
      case ne:
        return ql(e.type);
      case P:
        return ql(e.type.render);
      case g:
        return Gu(e.type);
      default:
        return '';
    }
  }
  function Xl(e) {
    try {
      var t = '',
        n = e;
      do ((t += Wu(n)), (n = n.return));
      while (n);
      return t;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  function Mo(e, t, n) {
    var a = e.displayName;
    if (a) return a;
    var l = t.displayName || t.name || '';
    return l !== '' ? n + '(' + l + ')' : n;
  }
  function qu(e) {
    return e.displayName || 'Context';
  }
  function Ct(e) {
    if (e == null) return null;
    if (
      (typeof e.tag == 'number' &&
        d(
          'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.'
        ),
      typeof e == 'function')
    )
      return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case aa:
        return 'Fragment';
      case Vr:
        return 'Portal';
      case ri:
        return 'Profiler';
      case $i:
        return 'StrictMode';
      case je:
        return 'Suspense';
      case ht:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case le:
          var t = e;
          return qu(t) + '.Consumer';
        case M:
          var n = e;
          return qu(n._context) + '.Provider';
        case ve:
          return Mo(e, e.render, 'ForwardRef');
        case Et:
          var a = e.displayName || null;
          return a !== null ? a : Ct(e.type) || 'Memo';
        case Ye: {
          var l = e,
            u = l._payload,
            p = l._init;
          try {
            return Ct(p(u));
          } catch {
            return null;
          }
        }
      }
    return null;
  }
  function Ql(e, t, n) {
    var a = t.displayName || t.name || '';
    return e.displayName || (a !== '' ? n + '(' + a + ')' : n);
  }
  function Kl(e) {
    return e.displayName || 'Context';
  }
  function lt(e) {
    var t = e.tag,
      n = e.type;
    switch (t) {
      case Me:
        return 'Cache';
      case N:
        var a = n;
        return Kl(a) + '.Consumer';
      case _:
        var l = n;
        return Kl(l._context) + '.Provider';
      case te:
        return 'DehydratedFragment';
      case P:
        return Ql(n, n.render, 'ForwardRef');
      case x:
        return 'Fragment';
      case O:
        return n;
      case w:
        return 'Portal';
      case S:
        return 'Root';
      case D:
        return 'Text';
      case ce:
        return Ct(n);
      case z:
        return n === $i ? 'StrictMode' : 'Mode';
      case ie:
        return 'Offscreen';
      case U:
        return 'Profiler';
      case ae:
        return 'Scope';
      case V:
        return 'Suspense';
      case ue:
        return 'SuspenseList';
      case be:
        return 'TracingMarker';
      case g:
      case m:
      case re:
      case E:
      case oe:
      case ne:
        if (typeof n == 'function') return n.displayName || n.name || null;
        if (typeof n == 'string') return n;
        break;
    }
    return null;
  }
  var Xu = o.ReactDebugCurrentFrame,
    jn = null,
    Gi = !1;
  function si() {
    {
      if (jn === null) return null;
      var e = jn._debugOwner;
      if (e !== null && typeof e < 'u') return lt(e);
    }
    return null;
  }
  function Qu() {
    return jn === null ? '' : Xl(jn);
  }
  function Rn() {
    ((Xu.getCurrentStack = null), (jn = null), (Gi = !1));
  }
  function Jt(e) {
    ((Xu.getCurrentStack = e === null ? null : Qu), (jn = e), (Gi = !1));
  }
  function Ku() {
    return jn;
  }
  function mr(e) {
    Gi = e;
  }
  function or(e) {
    return '' + e;
  }
  function oa(e) {
    switch (typeof e) {
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e;
      case 'object':
        return (de(e), e);
      default:
        return '';
    }
  }
  var kd = {
    button: !0,
    checkbox: !0,
    image: !0,
    hidden: !0,
    radio: !0,
    reset: !0,
    submit: !0,
  };
  function Lo(e, t) {
    (kd[t.type] ||
      t.onChange ||
      t.onInput ||
      t.readOnly ||
      t.disabled ||
      t.value == null ||
      d(
        'You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.'
      ),
      t.onChange ||
        t.readOnly ||
        t.disabled ||
        t.checked == null ||
        d(
          'You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.'
        ));
  }
  function Wi(e) {
    var t = e.type,
      n = e.nodeName;
    return (
      n && n.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio')
    );
  }
  function Ju(e) {
    return e._valueTracker;
  }
  function ui(e) {
    e._valueTracker = null;
  }
  function Zu(e) {
    var t = '';
    return (
      e && (Wi(e) ? (t = e.checked ? 'true' : 'false') : (t = e.value)),
      t
    );
  }
  function ec(e) {
    var t = Wi(e) ? 'checked' : 'value',
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    de(e[t]);
    var a = '' + e[t];
    if (
      !(
        e.hasOwnProperty(t) ||
        typeof n > 'u' ||
        typeof n.get != 'function' ||
        typeof n.set != 'function'
      )
    ) {
      var l = n.get,
        u = n.set;
      (Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (v) {
          (de(v), (a = '' + v), u.call(this, v));
        },
      }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }));
      var p = {
        getValue: function () {
          return a;
        },
        setValue: function (v) {
          (de(v), (a = '' + v));
        },
        stopTracking: function () {
          (ui(e), delete e[t]);
        },
      };
      return p;
    }
  }
  function _a(e) {
    Ju(e) || (e._valueTracker = ec(e));
  }
  function ko(e) {
    if (!e) return !1;
    var t = Ju(e);
    if (!t) return !0;
    var n = t.getValue(),
      a = Zu(e);
    return a !== n ? (t.setValue(a), !0) : !1;
  }
  function ci(e) {
    if (
      ((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var No = !1,
    tc = !1,
    nc = !1,
    rc = !1;
  function ac(e) {
    var t = e.type === 'checkbox' || e.type === 'radio';
    return t ? e.checked != null : e.value != null;
  }
  function b(e, t) {
    var n = e,
      a = t.checked,
      l = ct({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: a ?? n._wrapperState.initialChecked,
      });
    return l;
  }
  function A(e, t) {
    (Lo('input', t),
      t.checked !== void 0 &&
        t.defaultChecked !== void 0 &&
        !tc &&
        (d(
          '%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components',
          si() || 'A component',
          t.type
        ),
        (tc = !0)),
      t.value !== void 0 &&
        t.defaultValue !== void 0 &&
        !No &&
        (d(
          '%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components',
          si() || 'A component',
          t.type
        ),
        (No = !0)));
    var n = e,
      a = t.defaultValue == null ? '' : t.defaultValue;
    n._wrapperState = {
      initialChecked: t.checked != null ? t.checked : t.defaultChecked,
      initialValue: oa(t.value != null ? t.value : a),
      controlled: ac(t),
    };
  }
  function $(e, t) {
    var n = e,
      a = t.checked;
    a != null && xa(n, 'checked', a, !1);
  }
  function q(e, t) {
    var n = e;
    {
      var a = ac(t);
      (!n._wrapperState.controlled &&
        a &&
        !rc &&
        (d(
          'A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components'
        ),
        (rc = !0)),
        n._wrapperState.controlled &&
          !a &&
          !nc &&
          (d(
            'A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components'
          ),
          (nc = !0)));
    }
    $(e, t);
    var l = oa(t.value),
      u = t.type;
    if (l != null)
      u === 'number'
        ? ((l === 0 && n.value === '') || n.value != l) && (n.value = or(l))
        : n.value !== or(l) && (n.value = or(l));
    else if (u === 'submit' || u === 'reset') {
      n.removeAttribute('value');
      return;
    }
    (t.hasOwnProperty('value')
      ? et(n, t.type, l)
      : t.hasOwnProperty('defaultValue') && et(n, t.type, oa(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (n.defaultChecked = !!t.defaultChecked));
  }
  function he(e, t, n) {
    var a = e;
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
      var l = t.type,
        u = l === 'submit' || l === 'reset';
      if (u && (t.value === void 0 || t.value === null)) return;
      var p = or(a._wrapperState.initialValue);
      (n || (p !== a.value && (a.value = p)), (a.defaultValue = p));
    }
    var v = a.name;
    (v !== '' && (a.name = ''),
      (a.defaultChecked = !a.defaultChecked),
      (a.defaultChecked = !!a._wrapperState.initialChecked),
      v !== '' && (a.name = v));
  }
  function qe(e, t) {
    var n = e;
    (q(n, t), ke(n, t));
  }
  function ke(e, t) {
    var n = t.name;
    if (t.type === 'radio' && n != null) {
      for (var a = e; a.parentNode; ) a = a.parentNode;
      Ot(n, 'name');
      for (
        var l = a.querySelectorAll(
            'input[name=' + JSON.stringify('' + n) + '][type="radio"]'
          ),
          u = 0;
        u < l.length;
        u++
      ) {
        var p = l[u];
        if (!(p === e || p.form !== e.form)) {
          var v = $c(p);
          if (!v)
            throw new Error(
              'ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.'
            );
          (ko(p), q(p, v));
        }
      }
    }
  }
  function et(e, t, n) {
    (t !== 'number' || ci(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = or(e._wrapperState.initialValue))
        : e.defaultValue !== or(n) && (e.defaultValue = or(n)));
  }
  var mt = !1,
    Lt = !1,
    Ft = !1;
  function Vt(e, t) {
    (t.value == null &&
      (typeof t.children == 'object' && t.children !== null
        ? r.Children.forEach(t.children, function (n) {
            n != null &&
              (typeof n == 'string' ||
                typeof n == 'number' ||
                Lt ||
                ((Lt = !0),
                d(
                  'Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.'
                )));
          })
        : t.dangerouslySetInnerHTML != null &&
          (Ft ||
            ((Ft = !0),
            d(
              'Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.'
            )))),
      t.selected != null &&
        !mt &&
        (d(
          'Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.'
        ),
        (mt = !0)));
  }
  function Gt(e, t) {
    t.value != null && e.setAttribute('value', or(oa(t.value)));
  }
  var rn = Array.isArray;
  function _t(e) {
    return rn(e);
  }
  var fi;
  fi = !1;
  function Po() {
    var e = si();
    return e
      ? `

Check the render method of \`` +
          e +
          '`.'
      : '';
  }
  var Jl = ['value', 'defaultValue'];
  function Nd(e) {
    {
      Lo('select', e);
      for (var t = 0; t < Jl.length; t++) {
        var n = Jl[t];
        if (e[n] != null) {
          var a = _t(e[n]);
          e.multiple && !a
            ? d(
                'The `%s` prop supplied to <select> must be an array if `multiple` is true.%s',
                n,
                Po()
              )
            : !e.multiple &&
              a &&
              d(
                'The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s',
                n,
                Po()
              );
        }
      }
    }
  }
  function Da(e, t, n, a) {
    var l = e.options;
    if (t) {
      for (var u = n, p = {}, v = 0; v < u.length; v++) p['$' + u[v]] = !0;
      for (var y = 0; y < l.length; y++) {
        var C = p.hasOwnProperty('$' + l[y].value);
        (l[y].selected !== C && (l[y].selected = C),
          C && a && (l[y].defaultSelected = !0));
      }
    } else {
      for (var T = or(oa(n)), k = null, L = 0; L < l.length; L++) {
        if (l[L].value === T) {
          ((l[L].selected = !0), a && (l[L].defaultSelected = !0));
          return;
        }
        k === null && !l[L].disabled && (k = l[L]);
      }
      k !== null && (k.selected = !0);
    }
  }
  function Zl(e, t) {
    return ct({}, t, { value: void 0 });
  }
  function es(e, t) {
    var n = e;
    (Nd(t),
      (n._wrapperState = { wasMultiple: !!t.multiple }),
      t.value !== void 0 &&
        t.defaultValue !== void 0 &&
        !fi &&
        (d(
          'Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components'
        ),
        (fi = !0)));
  }
  function Pd(e, t) {
    var n = e;
    n.multiple = !!t.multiple;
    var a = t.value;
    a != null
      ? Da(n, !!t.multiple, a, !1)
      : t.defaultValue != null && Da(n, !!t.multiple, t.defaultValue, !0);
  }
  function Cw(e, t) {
    var n = e,
      a = n._wrapperState.wasMultiple;
    n._wrapperState.wasMultiple = !!t.multiple;
    var l = t.value;
    l != null
      ? Da(n, !!t.multiple, l, !1)
      : a !== !!t.multiple &&
        (t.defaultValue != null
          ? Da(n, !!t.multiple, t.defaultValue, !0)
          : Da(n, !!t.multiple, t.multiple ? [] : '', !1));
  }
  function Tw(e, t) {
    var n = e,
      a = t.value;
    a != null && Da(n, !!t.multiple, a, !1);
  }
  var Cy = !1;
  function zd(e, t) {
    var n = e;
    if (t.dangerouslySetInnerHTML != null)
      throw new Error(
        '`dangerouslySetInnerHTML` does not make sense on <textarea>.'
      );
    var a = ct({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: or(n._wrapperState.initialValue),
    });
    return a;
  }
  function Ty(e, t) {
    var n = e;
    (Lo('textarea', t),
      t.value !== void 0 &&
        t.defaultValue !== void 0 &&
        !Cy &&
        (d(
          '%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components',
          si() || 'A component'
        ),
        (Cy = !0)));
    var a = t.value;
    if (a == null) {
      var l = t.children,
        u = t.defaultValue;
      if (l != null) {
        d(
          'Use the `defaultValue` or `value` props instead of setting children on <textarea>.'
        );
        {
          if (u != null)
            throw new Error(
              'If you supply `defaultValue` on a <textarea>, do not pass children.'
            );
          if (_t(l)) {
            if (l.length > 1)
              throw new Error('<textarea> can only have at most one child.');
            l = l[0];
          }
          u = l;
        }
      }
      (u == null && (u = ''), (a = u));
    }
    n._wrapperState = { initialValue: oa(a) };
  }
  function wy(e, t) {
    var n = e,
      a = oa(t.value),
      l = oa(t.defaultValue);
    if (a != null) {
      var u = or(a);
      (u !== n.value && (n.value = u),
        t.defaultValue == null && n.defaultValue !== u && (n.defaultValue = u));
    }
    l != null && (n.defaultValue = or(l));
  }
  function xy(e, t) {
    var n = e,
      a = n.textContent;
    a === n._wrapperState.initialValue &&
      a !== '' &&
      a !== null &&
      (n.value = a);
  }
  function ww(e, t) {
    wy(e, t);
  }
  var Oa = 'http://www.w3.org/1999/xhtml',
    xw = 'http://www.w3.org/1998/Math/MathML',
    Ud = 'http://www.w3.org/2000/svg';
  function Fd(e) {
    switch (e) {
      case 'svg':
        return Ud;
      case 'math':
        return xw;
      default:
        return Oa;
    }
  }
  function Vd(e, t) {
    return e == null || e === Oa
      ? Fd(t)
      : e === Ud && t === 'foreignObject'
        ? Oa
        : e;
  }
  var Rw = function (e) {
      return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
        ? function (t, n, a, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, a, l);
            });
          }
        : e;
    },
    ic,
    Ry = Rw(function (e, t) {
      if (e.namespaceURI === Ud && !('innerHTML' in e)) {
        ((ic = ic || document.createElement('div')),
          (ic.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>'));
        for (var n = ic.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
        for (; n.firstChild; ) e.appendChild(n.firstChild);
        return;
      }
      e.innerHTML = t;
    }),
    lr = 1,
    Aa = 3,
    cn = 8,
    Ma = 9,
    Hd = 11,
    oc = function (e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === Aa) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    },
    _w = {
      animation: [
        'animationDelay',
        'animationDirection',
        'animationDuration',
        'animationFillMode',
        'animationIterationCount',
        'animationName',
        'animationPlayState',
        'animationTimingFunction',
      ],
      background: [
        'backgroundAttachment',
        'backgroundClip',
        'backgroundColor',
        'backgroundImage',
        'backgroundOrigin',
        'backgroundPositionX',
        'backgroundPositionY',
        'backgroundRepeat',
        'backgroundSize',
      ],
      backgroundPosition: ['backgroundPositionX', 'backgroundPositionY'],
      border: [
        'borderBottomColor',
        'borderBottomStyle',
        'borderBottomWidth',
        'borderImageOutset',
        'borderImageRepeat',
        'borderImageSlice',
        'borderImageSource',
        'borderImageWidth',
        'borderLeftColor',
        'borderLeftStyle',
        'borderLeftWidth',
        'borderRightColor',
        'borderRightStyle',
        'borderRightWidth',
        'borderTopColor',
        'borderTopStyle',
        'borderTopWidth',
      ],
      borderBlockEnd: [
        'borderBlockEndColor',
        'borderBlockEndStyle',
        'borderBlockEndWidth',
      ],
      borderBlockStart: [
        'borderBlockStartColor',
        'borderBlockStartStyle',
        'borderBlockStartWidth',
      ],
      borderBottom: [
        'borderBottomColor',
        'borderBottomStyle',
        'borderBottomWidth',
      ],
      borderColor: [
        'borderBottomColor',
        'borderLeftColor',
        'borderRightColor',
        'borderTopColor',
      ],
      borderImage: [
        'borderImageOutset',
        'borderImageRepeat',
        'borderImageSlice',
        'borderImageSource',
        'borderImageWidth',
      ],
      borderInlineEnd: [
        'borderInlineEndColor',
        'borderInlineEndStyle',
        'borderInlineEndWidth',
      ],
      borderInlineStart: [
        'borderInlineStartColor',
        'borderInlineStartStyle',
        'borderInlineStartWidth',
      ],
      borderLeft: ['borderLeftColor', 'borderLeftStyle', 'borderLeftWidth'],
      borderRadius: [
        'borderBottomLeftRadius',
        'borderBottomRightRadius',
        'borderTopLeftRadius',
        'borderTopRightRadius',
      ],
      borderRight: ['borderRightColor', 'borderRightStyle', 'borderRightWidth'],
      borderStyle: [
        'borderBottomStyle',
        'borderLeftStyle',
        'borderRightStyle',
        'borderTopStyle',
      ],
      borderTop: ['borderTopColor', 'borderTopStyle', 'borderTopWidth'],
      borderWidth: [
        'borderBottomWidth',
        'borderLeftWidth',
        'borderRightWidth',
        'borderTopWidth',
      ],
      columnRule: ['columnRuleColor', 'columnRuleStyle', 'columnRuleWidth'],
      columns: ['columnCount', 'columnWidth'],
      flex: ['flexBasis', 'flexGrow', 'flexShrink'],
      flexFlow: ['flexDirection', 'flexWrap'],
      font: [
        'fontFamily',
        'fontFeatureSettings',
        'fontKerning',
        'fontLanguageOverride',
        'fontSize',
        'fontSizeAdjust',
        'fontStretch',
        'fontStyle',
        'fontVariant',
        'fontVariantAlternates',
        'fontVariantCaps',
        'fontVariantEastAsian',
        'fontVariantLigatures',
        'fontVariantNumeric',
        'fontVariantPosition',
        'fontWeight',
        'lineHeight',
      ],
      fontVariant: [
        'fontVariantAlternates',
        'fontVariantCaps',
        'fontVariantEastAsian',
        'fontVariantLigatures',
        'fontVariantNumeric',
        'fontVariantPosition',
      ],
      gap: ['columnGap', 'rowGap'],
      grid: [
        'gridAutoColumns',
        'gridAutoFlow',
        'gridAutoRows',
        'gridTemplateAreas',
        'gridTemplateColumns',
        'gridTemplateRows',
      ],
      gridArea: [
        'gridColumnEnd',
        'gridColumnStart',
        'gridRowEnd',
        'gridRowStart',
      ],
      gridColumn: ['gridColumnEnd', 'gridColumnStart'],
      gridColumnGap: ['columnGap'],
      gridGap: ['columnGap', 'rowGap'],
      gridRow: ['gridRowEnd', 'gridRowStart'],
      gridRowGap: ['rowGap'],
      gridTemplate: [
        'gridTemplateAreas',
        'gridTemplateColumns',
        'gridTemplateRows',
      ],
      listStyle: ['listStyleImage', 'listStylePosition', 'listStyleType'],
      margin: ['marginBottom', 'marginLeft', 'marginRight', 'marginTop'],
      marker: ['markerEnd', 'markerMid', 'markerStart'],
      mask: [
        'maskClip',
        'maskComposite',
        'maskImage',
        'maskMode',
        'maskOrigin',
        'maskPositionX',
        'maskPositionY',
        'maskRepeat',
        'maskSize',
      ],
      maskPosition: ['maskPositionX', 'maskPositionY'],
      outline: ['outlineColor', 'outlineStyle', 'outlineWidth'],
      overflow: ['overflowX', 'overflowY'],
      padding: ['paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop'],
      placeContent: ['alignContent', 'justifyContent'],
      placeItems: ['alignItems', 'justifyItems'],
      placeSelf: ['alignSelf', 'justifySelf'],
      textDecoration: [
        'textDecorationColor',
        'textDecorationLine',
        'textDecorationStyle',
      ],
      textEmphasis: ['textEmphasisColor', 'textEmphasisStyle'],
      transition: [
        'transitionDelay',
        'transitionDuration',
        'transitionProperty',
        'transitionTimingFunction',
      ],
      wordWrap: ['overflowWrap'],
    },
    ts = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    };
  function Dw(e, t) {
    return e + t.charAt(0).toUpperCase() + t.substring(1);
  }
  var Ow = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(ts).forEach(function (e) {
    Ow.forEach(function (t) {
      ts[Dw(t, e)] = ts[e];
    });
  });
  function Id(e, t, n) {
    var a = t == null || typeof t == 'boolean' || t === '';
    return a
      ? ''
      : !n &&
          typeof t == 'number' &&
          t !== 0 &&
          !(ts.hasOwnProperty(e) && ts[e])
        ? t + 'px'
        : (F(t, e), ('' + t).trim());
  }
  var Aw = /([A-Z])/g,
    Mw = /^ms-/;
  function Lw(e) {
    return e.replace(Aw, '-$1').toLowerCase().replace(Mw, '-ms-');
  }
  var _y = function () {};
  {
    var kw = /^(?:webkit|moz|o)[A-Z]/,
      Nw = /^-ms-/,
      Pw = /-(.)/g,
      Dy = /;\s*$/,
      zo = {},
      Bd = {},
      Oy = !1,
      Ay = !1,
      zw = function (e) {
        return e.replace(Pw, function (t, n) {
          return n.toUpperCase();
        });
      },
      Uw = function (e) {
        (zo.hasOwnProperty(e) && zo[e]) ||
          ((zo[e] = !0),
          d(
            'Unsupported style property %s. Did you mean %s?',
            e,
            zw(e.replace(Nw, 'ms-'))
          ));
      },
      Fw = function (e) {
        (zo.hasOwnProperty(e) && zo[e]) ||
          ((zo[e] = !0),
          d(
            'Unsupported vendor-prefixed style property %s. Did you mean %s?',
            e,
            e.charAt(0).toUpperCase() + e.slice(1)
          ));
      },
      Vw = function (e, t) {
        (Bd.hasOwnProperty(t) && Bd[t]) ||
          ((Bd[t] = !0),
          d(
            `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
            e,
            t.replace(Dy, '')
          ));
      },
      Hw = function (e, t) {
        Oy ||
          ((Oy = !0),
          d('`NaN` is an invalid value for the `%s` css style property.', e));
      },
      Iw = function (e, t) {
        Ay ||
          ((Ay = !0),
          d(
            '`Infinity` is an invalid value for the `%s` css style property.',
            e
          ));
      };
    _y = function (e, t) {
      (e.indexOf('-') > -1
        ? Uw(e)
        : kw.test(e)
          ? Fw(e)
          : Dy.test(t) && Vw(e, t),
        typeof t == 'number' &&
          (isNaN(t) ? Hw(e, t) : isFinite(t) || Iw(e, t)));
    };
  }
  var Bw = _y;
  function jw(e) {
    {
      var t = '',
        n = '';
      for (var a in e)
        if (e.hasOwnProperty(a)) {
          var l = e[a];
          if (l != null) {
            var u = a.indexOf('--') === 0;
            ((t += n + (u ? a : Lw(a)) + ':'), (t += Id(a, l, u)), (n = ';'));
          }
        }
      return t || null;
    }
  }
  function My(e, t) {
    var n = e.style;
    for (var a in t)
      if (t.hasOwnProperty(a)) {
        var l = a.indexOf('--') === 0;
        l || Bw(a, t[a]);
        var u = Id(a, t[a], l);
        (a === 'float' && (a = 'cssFloat'),
          l ? n.setProperty(a, u) : (n[a] = u));
      }
  }
  function $w(e) {
    return e == null || typeof e == 'boolean' || e === '';
  }
  function Ly(e) {
    var t = {};
    for (var n in e)
      for (var a = _w[n] || [n], l = 0; l < a.length; l++) t[a[l]] = n;
    return t;
  }
  function Yw(e, t) {
    {
      if (!t) return;
      var n = Ly(e),
        a = Ly(t),
        l = {};
      for (var u in n) {
        var p = n[u],
          v = a[u];
        if (v && p !== v) {
          var y = p + ',' + v;
          if (l[y]) continue;
          ((l[y] = !0),
            d(
              "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
              $w(e[p]) ? 'Removing' : 'Updating',
              p,
              v
            ));
        }
      }
    }
  }
  var Gw = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
    Ww = ct({ menuitem: !0 }, Gw),
    qw = '__html';
  function jd(e, t) {
    if (t) {
      if (Ww[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw new Error(
          e +
            ' is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.'
        );
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null)
          throw new Error(
            'Can only set one of `children` or `props.dangerouslySetInnerHTML`.'
          );
        if (
          typeof t.dangerouslySetInnerHTML != 'object' ||
          !(qw in t.dangerouslySetInnerHTML)
        )
          throw new Error(
            '`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.'
          );
      }
      if (
        (!t.suppressContentEditableWarning &&
          t.contentEditable &&
          t.children != null &&
          d(
            'A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.'
          ),
        t.style != null && typeof t.style != 'object')
      )
        throw new Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
    }
  }
  function qi(e, t) {
    if (e.indexOf('-') === -1) return typeof t.is == 'string';
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var lc = {
      accept: 'accept',
      acceptcharset: 'acceptCharset',
      'accept-charset': 'acceptCharset',
      accesskey: 'accessKey',
      action: 'action',
      allowfullscreen: 'allowFullScreen',
      alt: 'alt',
      as: 'as',
      async: 'async',
      autocapitalize: 'autoCapitalize',
      autocomplete: 'autoComplete',
      autocorrect: 'autoCorrect',
      autofocus: 'autoFocus',
      autoplay: 'autoPlay',
      autosave: 'autoSave',
      capture: 'capture',
      cellpadding: 'cellPadding',
      cellspacing: 'cellSpacing',
      challenge: 'challenge',
      charset: 'charSet',
      checked: 'checked',
      children: 'children',
      cite: 'cite',
      class: 'className',
      classid: 'classID',
      classname: 'className',
      cols: 'cols',
      colspan: 'colSpan',
      content: 'content',
      contenteditable: 'contentEditable',
      contextmenu: 'contextMenu',
      controls: 'controls',
      controlslist: 'controlsList',
      coords: 'coords',
      crossorigin: 'crossOrigin',
      dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
      data: 'data',
      datetime: 'dateTime',
      default: 'default',
      defaultchecked: 'defaultChecked',
      defaultvalue: 'defaultValue',
      defer: 'defer',
      dir: 'dir',
      disabled: 'disabled',
      disablepictureinpicture: 'disablePictureInPicture',
      disableremoteplayback: 'disableRemotePlayback',
      download: 'download',
      draggable: 'draggable',
      enctype: 'encType',
      enterkeyhint: 'enterKeyHint',
      for: 'htmlFor',
      form: 'form',
      formmethod: 'formMethod',
      formaction: 'formAction',
      formenctype: 'formEncType',
      formnovalidate: 'formNoValidate',
      formtarget: 'formTarget',
      frameborder: 'frameBorder',
      headers: 'headers',
      height: 'height',
      hidden: 'hidden',
      high: 'high',
      href: 'href',
      hreflang: 'hrefLang',
      htmlfor: 'htmlFor',
      httpequiv: 'httpEquiv',
      'http-equiv': 'httpEquiv',
      icon: 'icon',
      id: 'id',
      imagesizes: 'imageSizes',
      imagesrcset: 'imageSrcSet',
      innerhtml: 'innerHTML',
      inputmode: 'inputMode',
      integrity: 'integrity',
      is: 'is',
      itemid: 'itemID',
      itemprop: 'itemProp',
      itemref: 'itemRef',
      itemscope: 'itemScope',
      itemtype: 'itemType',
      keyparams: 'keyParams',
      keytype: 'keyType',
      kind: 'kind',
      label: 'label',
      lang: 'lang',
      list: 'list',
      loop: 'loop',
      low: 'low',
      manifest: 'manifest',
      marginwidth: 'marginWidth',
      marginheight: 'marginHeight',
      max: 'max',
      maxlength: 'maxLength',
      media: 'media',
      mediagroup: 'mediaGroup',
      method: 'method',
      min: 'min',
      minlength: 'minLength',
      multiple: 'multiple',
      muted: 'muted',
      name: 'name',
      nomodule: 'noModule',
      nonce: 'nonce',
      novalidate: 'noValidate',
      open: 'open',
      optimum: 'optimum',
      pattern: 'pattern',
      placeholder: 'placeholder',
      playsinline: 'playsInline',
      poster: 'poster',
      preload: 'preload',
      profile: 'profile',
      radiogroup: 'radioGroup',
      readonly: 'readOnly',
      referrerpolicy: 'referrerPolicy',
      rel: 'rel',
      required: 'required',
      reversed: 'reversed',
      role: 'role',
      rows: 'rows',
      rowspan: 'rowSpan',
      sandbox: 'sandbox',
      scope: 'scope',
      scoped: 'scoped',
      scrolling: 'scrolling',
      seamless: 'seamless',
      selected: 'selected',
      shape: 'shape',
      size: 'size',
      sizes: 'sizes',
      span: 'span',
      spellcheck: 'spellCheck',
      src: 'src',
      srcdoc: 'srcDoc',
      srclang: 'srcLang',
      srcset: 'srcSet',
      start: 'start',
      step: 'step',
      style: 'style',
      summary: 'summary',
      tabindex: 'tabIndex',
      target: 'target',
      title: 'title',
      type: 'type',
      usemap: 'useMap',
      value: 'value',
      width: 'width',
      wmode: 'wmode',
      wrap: 'wrap',
      about: 'about',
      accentheight: 'accentHeight',
      'accent-height': 'accentHeight',
      accumulate: 'accumulate',
      additive: 'additive',
      alignmentbaseline: 'alignmentBaseline',
      'alignment-baseline': 'alignmentBaseline',
      allowreorder: 'allowReorder',
      alphabetic: 'alphabetic',
      amplitude: 'amplitude',
      arabicform: 'arabicForm',
      'arabic-form': 'arabicForm',
      ascent: 'ascent',
      attributename: 'attributeName',
      attributetype: 'attributeType',
      autoreverse: 'autoReverse',
      azimuth: 'azimuth',
      basefrequency: 'baseFrequency',
      baselineshift: 'baselineShift',
      'baseline-shift': 'baselineShift',
      baseprofile: 'baseProfile',
      bbox: 'bbox',
      begin: 'begin',
      bias: 'bias',
      by: 'by',
      calcmode: 'calcMode',
      capheight: 'capHeight',
      'cap-height': 'capHeight',
      clip: 'clip',
      clippath: 'clipPath',
      'clip-path': 'clipPath',
      clippathunits: 'clipPathUnits',
      cliprule: 'clipRule',
      'clip-rule': 'clipRule',
      color: 'color',
      colorinterpolation: 'colorInterpolation',
      'color-interpolation': 'colorInterpolation',
      colorinterpolationfilters: 'colorInterpolationFilters',
      'color-interpolation-filters': 'colorInterpolationFilters',
      colorprofile: 'colorProfile',
      'color-profile': 'colorProfile',
      colorrendering: 'colorRendering',
      'color-rendering': 'colorRendering',
      contentscripttype: 'contentScriptType',
      contentstyletype: 'contentStyleType',
      cursor: 'cursor',
      cx: 'cx',
      cy: 'cy',
      d: 'd',
      datatype: 'datatype',
      decelerate: 'decelerate',
      descent: 'descent',
      diffuseconstant: 'diffuseConstant',
      direction: 'direction',
      display: 'display',
      divisor: 'divisor',
      dominantbaseline: 'dominantBaseline',
      'dominant-baseline': 'dominantBaseline',
      dur: 'dur',
      dx: 'dx',
      dy: 'dy',
      edgemode: 'edgeMode',
      elevation: 'elevation',
      enablebackground: 'enableBackground',
      'enable-background': 'enableBackground',
      end: 'end',
      exponent: 'exponent',
      externalresourcesrequired: 'externalResourcesRequired',
      fill: 'fill',
      fillopacity: 'fillOpacity',
      'fill-opacity': 'fillOpacity',
      fillrule: 'fillRule',
      'fill-rule': 'fillRule',
      filter: 'filter',
      filterres: 'filterRes',
      filterunits: 'filterUnits',
      floodopacity: 'floodOpacity',
      'flood-opacity': 'floodOpacity',
      floodcolor: 'floodColor',
      'flood-color': 'floodColor',
      focusable: 'focusable',
      fontfamily: 'fontFamily',
      'font-family': 'fontFamily',
      fontsize: 'fontSize',
      'font-size': 'fontSize',
      fontsizeadjust: 'fontSizeAdjust',
      'font-size-adjust': 'fontSizeAdjust',
      fontstretch: 'fontStretch',
      'font-stretch': 'fontStretch',
      fontstyle: 'fontStyle',
      'font-style': 'fontStyle',
      fontvariant: 'fontVariant',
      'font-variant': 'fontVariant',
      fontweight: 'fontWeight',
      'font-weight': 'fontWeight',
      format: 'format',
      from: 'from',
      fx: 'fx',
      fy: 'fy',
      g1: 'g1',
      g2: 'g2',
      glyphname: 'glyphName',
      'glyph-name': 'glyphName',
      glyphorientationhorizontal: 'glyphOrientationHorizontal',
      'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
      glyphorientationvertical: 'glyphOrientationVertical',
      'glyph-orientation-vertical': 'glyphOrientationVertical',
      glyphref: 'glyphRef',
      gradienttransform: 'gradientTransform',
      gradientunits: 'gradientUnits',
      hanging: 'hanging',
      horizadvx: 'horizAdvX',
      'horiz-adv-x': 'horizAdvX',
      horizoriginx: 'horizOriginX',
      'horiz-origin-x': 'horizOriginX',
      ideographic: 'ideographic',
      imagerendering: 'imageRendering',
      'image-rendering': 'imageRendering',
      in2: 'in2',
      in: 'in',
      inlist: 'inlist',
      intercept: 'intercept',
      k1: 'k1',
      k2: 'k2',
      k3: 'k3',
      k4: 'k4',
      k: 'k',
      kernelmatrix: 'kernelMatrix',
      kernelunitlength: 'kernelUnitLength',
      kerning: 'kerning',
      keypoints: 'keyPoints',
      keysplines: 'keySplines',
      keytimes: 'keyTimes',
      lengthadjust: 'lengthAdjust',
      letterspacing: 'letterSpacing',
      'letter-spacing': 'letterSpacing',
      lightingcolor: 'lightingColor',
      'lighting-color': 'lightingColor',
      limitingconeangle: 'limitingConeAngle',
      local: 'local',
      markerend: 'markerEnd',
      'marker-end': 'markerEnd',
      markerheight: 'markerHeight',
      markermid: 'markerMid',
      'marker-mid': 'markerMid',
      markerstart: 'markerStart',
      'marker-start': 'markerStart',
      markerunits: 'markerUnits',
      markerwidth: 'markerWidth',
      mask: 'mask',
      maskcontentunits: 'maskContentUnits',
      maskunits: 'maskUnits',
      mathematical: 'mathematical',
      mode: 'mode',
      numoctaves: 'numOctaves',
      offset: 'offset',
      opacity: 'opacity',
      operator: 'operator',
      order: 'order',
      orient: 'orient',
      orientation: 'orientation',
      origin: 'origin',
      overflow: 'overflow',
      overlineposition: 'overlinePosition',
      'overline-position': 'overlinePosition',
      overlinethickness: 'overlineThickness',
      'overline-thickness': 'overlineThickness',
      paintorder: 'paintOrder',
      'paint-order': 'paintOrder',
      panose1: 'panose1',
      'panose-1': 'panose1',
      pathlength: 'pathLength',
      patterncontentunits: 'patternContentUnits',
      patterntransform: 'patternTransform',
      patternunits: 'patternUnits',
      pointerevents: 'pointerEvents',
      'pointer-events': 'pointerEvents',
      points: 'points',
      pointsatx: 'pointsAtX',
      pointsaty: 'pointsAtY',
      pointsatz: 'pointsAtZ',
      prefix: 'prefix',
      preservealpha: 'preserveAlpha',
      preserveaspectratio: 'preserveAspectRatio',
      primitiveunits: 'primitiveUnits',
      property: 'property',
      r: 'r',
      radius: 'radius',
      refx: 'refX',
      refy: 'refY',
      renderingintent: 'renderingIntent',
      'rendering-intent': 'renderingIntent',
      repeatcount: 'repeatCount',
      repeatdur: 'repeatDur',
      requiredextensions: 'requiredExtensions',
      requiredfeatures: 'requiredFeatures',
      resource: 'resource',
      restart: 'restart',
      result: 'result',
      results: 'results',
      rotate: 'rotate',
      rx: 'rx',
      ry: 'ry',
      scale: 'scale',
      security: 'security',
      seed: 'seed',
      shaperendering: 'shapeRendering',
      'shape-rendering': 'shapeRendering',
      slope: 'slope',
      spacing: 'spacing',
      specularconstant: 'specularConstant',
      specularexponent: 'specularExponent',
      speed: 'speed',
      spreadmethod: 'spreadMethod',
      startoffset: 'startOffset',
      stddeviation: 'stdDeviation',
      stemh: 'stemh',
      stemv: 'stemv',
      stitchtiles: 'stitchTiles',
      stopcolor: 'stopColor',
      'stop-color': 'stopColor',
      stopopacity: 'stopOpacity',
      'stop-opacity': 'stopOpacity',
      strikethroughposition: 'strikethroughPosition',
      'strikethrough-position': 'strikethroughPosition',
      strikethroughthickness: 'strikethroughThickness',
      'strikethrough-thickness': 'strikethroughThickness',
      string: 'string',
      stroke: 'stroke',
      strokedasharray: 'strokeDasharray',
      'stroke-dasharray': 'strokeDasharray',
      strokedashoffset: 'strokeDashoffset',
      'stroke-dashoffset': 'strokeDashoffset',
      strokelinecap: 'strokeLinecap',
      'stroke-linecap': 'strokeLinecap',
      strokelinejoin: 'strokeLinejoin',
      'stroke-linejoin': 'strokeLinejoin',
      strokemiterlimit: 'strokeMiterlimit',
      'stroke-miterlimit': 'strokeMiterlimit',
      strokewidth: 'strokeWidth',
      'stroke-width': 'strokeWidth',
      strokeopacity: 'strokeOpacity',
      'stroke-opacity': 'strokeOpacity',
      suppresscontenteditablewarning: 'suppressContentEditableWarning',
      suppresshydrationwarning: 'suppressHydrationWarning',
      surfacescale: 'surfaceScale',
      systemlanguage: 'systemLanguage',
      tablevalues: 'tableValues',
      targetx: 'targetX',
      targety: 'targetY',
      textanchor: 'textAnchor',
      'text-anchor': 'textAnchor',
      textdecoration: 'textDecoration',
      'text-decoration': 'textDecoration',
      textlength: 'textLength',
      textrendering: 'textRendering',
      'text-rendering': 'textRendering',
      to: 'to',
      transform: 'transform',
      typeof: 'typeof',
      u1: 'u1',
      u2: 'u2',
      underlineposition: 'underlinePosition',
      'underline-position': 'underlinePosition',
      underlinethickness: 'underlineThickness',
      'underline-thickness': 'underlineThickness',
      unicode: 'unicode',
      unicodebidi: 'unicodeBidi',
      'unicode-bidi': 'unicodeBidi',
      unicoderange: 'unicodeRange',
      'unicode-range': 'unicodeRange',
      unitsperem: 'unitsPerEm',
      'units-per-em': 'unitsPerEm',
      unselectable: 'unselectable',
      valphabetic: 'vAlphabetic',
      'v-alphabetic': 'vAlphabetic',
      values: 'values',
      vectoreffect: 'vectorEffect',
      'vector-effect': 'vectorEffect',
      version: 'version',
      vertadvy: 'vertAdvY',
      'vert-adv-y': 'vertAdvY',
      vertoriginx: 'vertOriginX',
      'vert-origin-x': 'vertOriginX',
      vertoriginy: 'vertOriginY',
      'vert-origin-y': 'vertOriginY',
      vhanging: 'vHanging',
      'v-hanging': 'vHanging',
      videographic: 'vIdeographic',
      'v-ideographic': 'vIdeographic',
      viewbox: 'viewBox',
      viewtarget: 'viewTarget',
      visibility: 'visibility',
      vmathematical: 'vMathematical',
      'v-mathematical': 'vMathematical',
      vocab: 'vocab',
      widths: 'widths',
      wordspacing: 'wordSpacing',
      'word-spacing': 'wordSpacing',
      writingmode: 'writingMode',
      'writing-mode': 'writingMode',
      x1: 'x1',
      x2: 'x2',
      x: 'x',
      xchannelselector: 'xChannelSelector',
      xheight: 'xHeight',
      'x-height': 'xHeight',
      xlinkactuate: 'xlinkActuate',
      'xlink:actuate': 'xlinkActuate',
      xlinkarcrole: 'xlinkArcrole',
      'xlink:arcrole': 'xlinkArcrole',
      xlinkhref: 'xlinkHref',
      'xlink:href': 'xlinkHref',
      xlinkrole: 'xlinkRole',
      'xlink:role': 'xlinkRole',
      xlinkshow: 'xlinkShow',
      'xlink:show': 'xlinkShow',
      xlinktitle: 'xlinkTitle',
      'xlink:title': 'xlinkTitle',
      xlinktype: 'xlinkType',
      'xlink:type': 'xlinkType',
      xmlbase: 'xmlBase',
      'xml:base': 'xmlBase',
      xmllang: 'xmlLang',
      'xml:lang': 'xmlLang',
      xmlns: 'xmlns',
      'xml:space': 'xmlSpace',
      xmlnsxlink: 'xmlnsXlink',
      'xmlns:xlink': 'xmlnsXlink',
      xmlspace: 'xmlSpace',
      y1: 'y1',
      y2: 'y2',
      y: 'y',
      ychannelselector: 'yChannelSelector',
      z: 'z',
      zoomandpan: 'zoomAndPan',
    },
    ky = {
      'aria-current': 0,
      'aria-description': 0,
      'aria-details': 0,
      'aria-disabled': 0,
      'aria-hidden': 0,
      'aria-invalid': 0,
      'aria-keyshortcuts': 0,
      'aria-label': 0,
      'aria-roledescription': 0,
      'aria-autocomplete': 0,
      'aria-checked': 0,
      'aria-expanded': 0,
      'aria-haspopup': 0,
      'aria-level': 0,
      'aria-modal': 0,
      'aria-multiline': 0,
      'aria-multiselectable': 0,
      'aria-orientation': 0,
      'aria-placeholder': 0,
      'aria-pressed': 0,
      'aria-readonly': 0,
      'aria-required': 0,
      'aria-selected': 0,
      'aria-sort': 0,
      'aria-valuemax': 0,
      'aria-valuemin': 0,
      'aria-valuenow': 0,
      'aria-valuetext': 0,
      'aria-atomic': 0,
      'aria-busy': 0,
      'aria-live': 0,
      'aria-relevant': 0,
      'aria-dropeffect': 0,
      'aria-grabbed': 0,
      'aria-activedescendant': 0,
      'aria-colcount': 0,
      'aria-colindex': 0,
      'aria-colspan': 0,
      'aria-controls': 0,
      'aria-describedby': 0,
      'aria-errormessage': 0,
      'aria-flowto': 0,
      'aria-labelledby': 0,
      'aria-owns': 0,
      'aria-posinset': 0,
      'aria-rowcount': 0,
      'aria-rowindex': 0,
      'aria-rowspan': 0,
      'aria-setsize': 0,
    },
    Uo = {},
    Xw = new RegExp('^(aria)-[' + ze + ']*$'),
    Qw = new RegExp('^(aria)[A-Z][' + ze + ']*$');
  function Kw(e, t) {
    {
      if (dt.call(Uo, t) && Uo[t]) return !0;
      if (Qw.test(t)) {
        var n = 'aria-' + t.slice(4).toLowerCase(),
          a = ky.hasOwnProperty(n) ? n : null;
        if (a == null)
          return (
            d(
              'Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.',
              t
            ),
            (Uo[t] = !0),
            !0
          );
        if (t !== a)
          return (
            d('Invalid ARIA attribute `%s`. Did you mean `%s`?', t, a),
            (Uo[t] = !0),
            !0
          );
      }
      if (Xw.test(t)) {
        var l = t.toLowerCase(),
          u = ky.hasOwnProperty(l) ? l : null;
        if (u == null) return ((Uo[t] = !0), !1);
        if (t !== u)
          return (
            d('Unknown ARIA attribute `%s`. Did you mean `%s`?', t, u),
            (Uo[t] = !0),
            !0
          );
      }
    }
    return !0;
  }
  function Jw(e, t) {
    {
      var n = [];
      for (var a in t) {
        var l = Kw(e, a);
        l || n.push(a);
      }
      var u = n
        .map(function (p) {
          return '`' + p + '`';
        })
        .join(', ');
      n.length === 1
        ? d(
            'Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props',
            u,
            e
          )
        : n.length > 1 &&
          d(
            'Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props',
            u,
            e
          );
    }
  }
  function Zw(e, t) {
    qi(e, t) || Jw(e, t);
  }
  var Ny = !1;
  function ex(e, t) {
    {
      if (e !== 'input' && e !== 'textarea' && e !== 'select') return;
      t != null &&
        t.value === null &&
        !Ny &&
        ((Ny = !0),
        e === 'select' && t.multiple
          ? d(
              '`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.',
              e
            )
          : d(
              '`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.',
              e
            ));
    }
  }
  var Py = function () {};
  {
    var Qn = {},
      zy = /^on./,
      tx = /^on[^A-Z]/,
      nx = new RegExp('^(aria)-[' + ze + ']*$'),
      rx = new RegExp('^(aria)[A-Z][' + ze + ']*$');
    Py = function (e, t, n, a) {
      if (dt.call(Qn, t) && Qn[t]) return !0;
      var l = t.toLowerCase();
      if (l === 'onfocusin' || l === 'onfocusout')
        return (
          d(
            'React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React.'
          ),
          (Qn[t] = !0),
          !0
        );
      if (a != null) {
        var u = a.registrationNameDependencies,
          p = a.possibleRegistrationNames;
        if (u.hasOwnProperty(t)) return !0;
        var v = p.hasOwnProperty(l) ? p[l] : null;
        if (v != null)
          return (
            d('Invalid event handler property `%s`. Did you mean `%s`?', t, v),
            (Qn[t] = !0),
            !0
          );
        if (zy.test(t))
          return (
            d('Unknown event handler property `%s`. It will be ignored.', t),
            (Qn[t] = !0),
            !0
          );
      } else if (zy.test(t))
        return (
          tx.test(t) &&
            d(
              'Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.',
              t
            ),
          (Qn[t] = !0),
          !0
        );
      if (nx.test(t) || rx.test(t)) return !0;
      if (l === 'innerhtml')
        return (
          d(
            'Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`.'
          ),
          (Qn[t] = !0),
          !0
        );
      if (l === 'aria')
        return (
          d(
            'The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead.'
          ),
          (Qn[t] = !0),
          !0
        );
      if (l === 'is' && n !== null && n !== void 0 && typeof n != 'string')
        return (
          d(
            'Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.',
            typeof n
          ),
          (Qn[t] = !0),
          !0
        );
      if (typeof n == 'number' && isNaN(n))
        return (
          d(
            'Received NaN for the `%s` attribute. If this is expected, cast the value to a string.',
            t
          ),
          (Qn[t] = !0),
          !0
        );
      var y = vr(t),
        C = y !== null && y.type === W;
      if (lc.hasOwnProperty(l)) {
        var T = lc[l];
        if (T !== t)
          return (
            d('Invalid DOM property `%s`. Did you mean `%s`?', t, T),
            (Qn[t] = !0),
            !0
          );
      } else if (!C && t !== l)
        return (
          d(
            'React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.',
            t,
            l
          ),
          (Qn[t] = !0),
          !0
        );
      return typeof n == 'boolean' && Ln(t, n, y, !1)
        ? (n
            ? d(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                n,
                t,
                t,
                n,
                t
              )
            : d(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                n,
                t,
                t,
                n,
                t,
                t,
                t
              ),
          (Qn[t] = !0),
          !0)
        : C
          ? !0
          : Ln(t, n, y, !1)
            ? ((Qn[t] = !0), !1)
            : ((n === 'false' || n === 'true') &&
                y !== null &&
                y.type === Ie &&
                (d(
                  'Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?',
                  n,
                  t,
                  n === 'false'
                    ? 'The browser will interpret it as a truthy value.'
                    : 'Although this works, it will not work as expected if you pass the string "false".',
                  t,
                  n
                ),
                (Qn[t] = !0)),
              !0);
    };
  }
  var ax = function (e, t, n) {
    {
      var a = [];
      for (var l in t) {
        var u = Py(e, l, t[l], n);
        u || a.push(l);
      }
      var p = a
        .map(function (v) {
          return '`' + v + '`';
        })
        .join(', ');
      a.length === 1
        ? d(
            'Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ',
            p,
            e
          )
        : a.length > 1 &&
          d(
            'Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ',
            p,
            e
          );
    }
  };
  function ix(e, t, n) {
    qi(e, t) || ax(e, t, n);
  }
  var Uy = 1,
    $d = 2,
    ns = 4,
    ox = Uy | $d | ns,
    rs = null;
  function lx(e) {
    (rs !== null &&
      d(
        'Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue.'
      ),
      (rs = e));
  }
  function sx() {
    (rs === null &&
      d(
        'Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue.'
      ),
      (rs = null));
  }
  function ux(e) {
    return e === rs;
  }
  function Yd(e) {
    var t = e.target || e.srcElement || window;
    return (
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === Aa ? t.parentNode : t
    );
  }
  var Gd = null,
    Fo = null,
    Vo = null;
  function Fy(e) {
    var t = bi(e);
    if (t) {
      if (typeof Gd != 'function')
        throw new Error(
          'setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.'
        );
      var n = t.stateNode;
      if (n) {
        var a = $c(n);
        Gd(t.stateNode, t.type, a);
      }
    }
  }
  function cx(e) {
    Gd = e;
  }
  function Vy(e) {
    Fo ? (Vo ? Vo.push(e) : (Vo = [e])) : (Fo = e);
  }
  function fx() {
    return Fo !== null || Vo !== null;
  }
  function Hy() {
    if (Fo) {
      var e = Fo,
        t = Vo;
      if (((Fo = null), (Vo = null), Fy(e), t))
        for (var n = 0; n < t.length; n++) Fy(t[n]);
    }
  }
  var Iy = function (e, t) {
      return e(t);
    },
    By = function () {},
    Wd = !1;
  function dx() {
    var e = fx();
    e && (By(), Hy());
  }
  function jy(e, t, n) {
    if (Wd) return e(t, n);
    Wd = !0;
    try {
      return Iy(e, t, n);
    } finally {
      ((Wd = !1), dx());
    }
  }
  function px(e, t, n) {
    ((Iy = e), (By = n));
  }
  function vx(e) {
    return (
      e === 'button' || e === 'input' || e === 'select' || e === 'textarea'
    );
  }
  function hx(e, t, n) {
    switch (e) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        return !!(n.disabled && vx(t));
      default:
        return !1;
    }
  }
  function as(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var a = $c(n);
    if (a === null) return null;
    var l = a[t];
    if (hx(t, e.type, a)) return null;
    if (l && typeof l != 'function')
      throw new Error(
        'Expected `' +
          t +
          '` listener to be a function, instead got a value of `' +
          typeof l +
          '` type.'
      );
    return l;
  }
  var qd = !1;
  if (it)
    try {
      var is = {};
      (Object.defineProperty(is, 'passive', {
        get: function () {
          qd = !0;
        },
      }),
        window.addEventListener('test', is, is),
        window.removeEventListener('test', is, is));
    } catch {
      qd = !1;
    }
  function $y(e, t, n, a, l, u, p, v, y) {
    var C = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, C);
    } catch (T) {
      this.onError(T);
    }
  }
  var Yy = $y;
  if (
    typeof window < 'u' &&
    typeof window.dispatchEvent == 'function' &&
    typeof document < 'u' &&
    typeof document.createEvent == 'function'
  ) {
    var Xd = document.createElement('react');
    Yy = function (t, n, a, l, u, p, v, y, C) {
      if (typeof document > 'u' || document === null)
        throw new Error(
          'The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.'
        );
      var T = document.createEvent('Event'),
        k = !1,
        L = !0,
        B = window.event,
        Y = Object.getOwnPropertyDescriptor(window, 'event');
      function X() {
        (Xd.removeEventListener(Q, He, !1),
          typeof window.event < 'u' &&
            window.hasOwnProperty('event') &&
            (window.event = B));
      }
      var we = Array.prototype.slice.call(arguments, 3);
      function He() {
        ((k = !0), X(), n.apply(a, we), (L = !1));
      }
      var Ne,
        bt = !1,
        pt = !1;
      function H(I) {
        if (
          ((Ne = I.error),
          (bt = !0),
          Ne === null && I.colno === 0 && I.lineno === 0 && (pt = !0),
          I.defaultPrevented && Ne != null && typeof Ne == 'object')
        )
          try {
            Ne._suppressLogging = !0;
          } catch {}
      }
      var Q = 'react-' + (t || 'invokeguardedcallback');
      if (
        (window.addEventListener('error', H),
        Xd.addEventListener(Q, He, !1),
        T.initEvent(Q, !1, !1),
        Xd.dispatchEvent(T),
        Y && Object.defineProperty(window, 'event', Y),
        k &&
          L &&
          (bt
            ? pt &&
              (Ne = new Error(
                "A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information."
              ))
            : (Ne = new Error(
                `An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`
              )),
          this.onError(Ne)),
        window.removeEventListener('error', H),
        !k)
      )
        return (X(), $y.apply(this, arguments));
    };
  }
  var mx = Yy,
    Ho = !1,
    sc = null,
    uc = !1,
    Qd = null,
    yx = {
      onError: function (e) {
        ((Ho = !0), (sc = e));
      },
    };
  function Kd(e, t, n, a, l, u, p, v, y) {
    ((Ho = !1), (sc = null), mx.apply(yx, arguments));
  }
  function gx(e, t, n, a, l, u, p, v, y) {
    if ((Kd.apply(this, arguments), Ho)) {
      var C = Jd();
      uc || ((uc = !0), (Qd = C));
    }
  }
  function bx() {
    if (uc) {
      var e = Qd;
      throw ((uc = !1), (Qd = null), e);
    }
  }
  function Sx() {
    return Ho;
  }
  function Jd() {
    if (Ho) {
      var e = sc;
      return ((Ho = !1), (sc = null), e);
    } else
      throw new Error(
        'clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.'
      );
  }
  function Io(e) {
    return e._reactInternals;
  }
  function Ex(e) {
    return e._reactInternals !== void 0;
  }
  function Cx(e, t) {
    e._reactInternals = t;
  }
  var Ge = 0,
    Bo = 1,
    fn = 2,
    St = 4,
    Xi = 16,
    os = 32,
    Zd = 64,
    Dt = 128,
    La = 256,
    di = 512,
    Qi = 1024,
    Hr = 2048,
    ka = 4096,
    Ki = 8192,
    cc = 16384,
    Tx = Hr | St | Zd | di | Qi | cc,
    wx = 32767,
    ls = 32768,
    Kn = 65536,
    ep = 131072,
    Gy = 1048576,
    tp = 2097152,
    Ji = 4194304,
    np = 8388608,
    Na = 16777216,
    fc = 33554432,
    rp = St | Qi | 0,
    ap = fn | St | Xi | os | di | ka | Ki,
    ss = St | Zd | di | Ki,
    jo = Hr | Xi,
    Pa = Ji | np | tp,
    xx = o.ReactCurrentOwner;
  function Zi(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      var a = t;
      do
        ((t = a),
          (t.flags & (fn | ka)) !== Ge && (n = t.return),
          (a = t.return));
      while (a);
    }
    return t.tag === S ? n : null;
  }
  function Wy(e) {
    if (e.tag === V) {
      var t = e.memoizedState;
      if (t === null) {
        var n = e.alternate;
        n !== null && (t = n.memoizedState);
      }
      if (t !== null) return t.dehydrated;
    }
    return null;
  }
  function qy(e) {
    return e.tag === S ? e.stateNode.containerInfo : null;
  }
  function Rx(e) {
    return Zi(e) === e;
  }
  function _x(e) {
    {
      var t = xx.current;
      if (t !== null && t.tag === g) {
        var n = t,
          a = n.stateNode;
        (a._warnedAboutRefsInRender ||
          d(
            '%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.',
            lt(n) || 'A component'
          ),
          (a._warnedAboutRefsInRender = !0));
      }
    }
    var l = Io(e);
    return l ? Zi(l) === l : !1;
  }
  function Xy(e) {
    if (Zi(e) !== e)
      throw new Error('Unable to find node on an unmounted component.');
  }
  function Qy(e) {
    var t = e.alternate;
    if (!t) {
      var n = Zi(e);
      if (n === null)
        throw new Error('Unable to find node on an unmounted component.');
      return n !== e ? null : e;
    }
    for (var a = e, l = t; ; ) {
      var u = a.return;
      if (u === null) break;
      var p = u.alternate;
      if (p === null) {
        var v = u.return;
        if (v !== null) {
          a = l = v;
          continue;
        }
        break;
      }
      if (u.child === p.child) {
        for (var y = u.child; y; ) {
          if (y === a) return (Xy(u), e);
          if (y === l) return (Xy(u), t);
          y = y.sibling;
        }
        throw new Error('Unable to find node on an unmounted component.');
      }
      if (a.return !== l.return) ((a = u), (l = p));
      else {
        for (var C = !1, T = u.child; T; ) {
          if (T === a) {
            ((C = !0), (a = u), (l = p));
            break;
          }
          if (T === l) {
            ((C = !0), (l = u), (a = p));
            break;
          }
          T = T.sibling;
        }
        if (!C) {
          for (T = p.child; T; ) {
            if (T === a) {
              ((C = !0), (a = p), (l = u));
              break;
            }
            if (T === l) {
              ((C = !0), (l = p), (a = u));
              break;
            }
            T = T.sibling;
          }
          if (!C)
            throw new Error(
              'Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.'
            );
        }
      }
      if (a.alternate !== l)
        throw new Error(
          "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
        );
    }
    if (a.tag !== S)
      throw new Error('Unable to find node on an unmounted component.');
    return a.stateNode.current === a ? e : t;
  }
  function Ky(e) {
    var t = Qy(e);
    return t !== null ? Jy(t) : null;
  }
  function Jy(e) {
    if (e.tag === O || e.tag === D) return e;
    for (var t = e.child; t !== null; ) {
      var n = Jy(t);
      if (n !== null) return n;
      t = t.sibling;
    }
    return null;
  }
  function Dx(e) {
    var t = Qy(e);
    return t !== null ? Zy(t) : null;
  }
  function Zy(e) {
    if (e.tag === O || e.tag === D) return e;
    for (var t = e.child; t !== null; ) {
      if (t.tag !== w) {
        var n = Zy(t);
        if (n !== null) return n;
      }
      t = t.sibling;
    }
    return null;
  }
  var eg = i.unstable_scheduleCallback,
    Ox = i.unstable_cancelCallback,
    Ax = i.unstable_shouldYield,
    Mx = i.unstable_requestPaint,
    _n = i.unstable_now,
    Lx = i.unstable_getCurrentPriorityLevel,
    dc = i.unstable_ImmediatePriority,
    ip = i.unstable_UserBlockingPriority,
    eo = i.unstable_NormalPriority,
    kx = i.unstable_LowPriority,
    op = i.unstable_IdlePriority,
    Nx = i.unstable_yieldValue,
    Px = i.unstable_setDisableYieldValue,
    $o = null,
    $n = null,
    Re = null,
    la = !1,
    Ir = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u';
  function zx(e) {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u') return !1;
    var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (t.isDisabled) return !0;
    if (!t.supportsFiber)
      return (
        d(
          'The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools'
        ),
        !0
      );
    try {
      (Ue && (e = ct({}, e, { getLaneLabelMap: Bx, injectProfilingHooks: Ix })),
        ($o = t.inject(e)),
        ($n = t));
    } catch (n) {
      d('React instrumentation encountered an error: %s.', n);
    }
    return !!t.checkDCE;
  }
  function Ux(e, t) {
    if ($n && typeof $n.onScheduleFiberRoot == 'function')
      try {
        $n.onScheduleFiberRoot($o, e, t);
      } catch (n) {
        la ||
          ((la = !0), d('React instrumentation encountered an error: %s', n));
      }
  }
  function Fx(e, t) {
    if ($n && typeof $n.onCommitFiberRoot == 'function')
      try {
        var n = (e.current.flags & Dt) === Dt;
        if (j) {
          var a;
          switch (t) {
            case br:
              a = dc;
              break;
            case Ua:
              a = ip;
              break;
            case Fa:
              a = eo;
              break;
            case bc:
              a = op;
              break;
            default:
              a = eo;
              break;
          }
          $n.onCommitFiberRoot($o, e, a, n);
        }
      } catch (l) {
        la ||
          ((la = !0), d('React instrumentation encountered an error: %s', l));
      }
  }
  function Vx(e) {
    if ($n && typeof $n.onPostCommitFiberRoot == 'function')
      try {
        $n.onPostCommitFiberRoot($o, e);
      } catch (t) {
        la ||
          ((la = !0), d('React instrumentation encountered an error: %s', t));
      }
  }
  function Hx(e) {
    if ($n && typeof $n.onCommitFiberUnmount == 'function')
      try {
        $n.onCommitFiberUnmount($o, e);
      } catch (t) {
        la ||
          ((la = !0), d('React instrumentation encountered an error: %s', t));
      }
  }
  function Dn(e) {
    if (
      (typeof Nx == 'function' && (Px(e), c(e)),
      $n && typeof $n.setStrictMode == 'function')
    )
      try {
        $n.setStrictMode($o, e);
      } catch (t) {
        la ||
          ((la = !0), d('React instrumentation encountered an error: %s', t));
      }
  }
  function Ix(e) {
    Re = e;
  }
  function Bx() {
    {
      for (var e = new Map(), t = 1, n = 0; n < sp; n++) {
        var a = sR(t);
        (e.set(t, a), (t *= 2));
      }
      return e;
    }
  }
  function jx(e) {
    Re !== null &&
      typeof Re.markCommitStarted == 'function' &&
      Re.markCommitStarted(e);
  }
  function tg() {
    Re !== null &&
      typeof Re.markCommitStopped == 'function' &&
      Re.markCommitStopped();
  }
  function us(e) {
    Re !== null &&
      typeof Re.markComponentRenderStarted == 'function' &&
      Re.markComponentRenderStarted(e);
  }
  function Yo() {
    Re !== null &&
      typeof Re.markComponentRenderStopped == 'function' &&
      Re.markComponentRenderStopped();
  }
  function $x(e) {
    Re !== null &&
      typeof Re.markComponentPassiveEffectMountStarted == 'function' &&
      Re.markComponentPassiveEffectMountStarted(e);
  }
  function Yx() {
    Re !== null &&
      typeof Re.markComponentPassiveEffectMountStopped == 'function' &&
      Re.markComponentPassiveEffectMountStopped();
  }
  function Gx(e) {
    Re !== null &&
      typeof Re.markComponentPassiveEffectUnmountStarted == 'function' &&
      Re.markComponentPassiveEffectUnmountStarted(e);
  }
  function Wx() {
    Re !== null &&
      typeof Re.markComponentPassiveEffectUnmountStopped == 'function' &&
      Re.markComponentPassiveEffectUnmountStopped();
  }
  function qx(e) {
    Re !== null &&
      typeof Re.markComponentLayoutEffectMountStarted == 'function' &&
      Re.markComponentLayoutEffectMountStarted(e);
  }
  function Xx() {
    Re !== null &&
      typeof Re.markComponentLayoutEffectMountStopped == 'function' &&
      Re.markComponentLayoutEffectMountStopped();
  }
  function ng(e) {
    Re !== null &&
      typeof Re.markComponentLayoutEffectUnmountStarted == 'function' &&
      Re.markComponentLayoutEffectUnmountStarted(e);
  }
  function rg() {
    Re !== null &&
      typeof Re.markComponentLayoutEffectUnmountStopped == 'function' &&
      Re.markComponentLayoutEffectUnmountStopped();
  }
  function Qx(e, t, n) {
    Re !== null &&
      typeof Re.markComponentErrored == 'function' &&
      Re.markComponentErrored(e, t, n);
  }
  function Kx(e, t, n) {
    Re !== null &&
      typeof Re.markComponentSuspended == 'function' &&
      Re.markComponentSuspended(e, t, n);
  }
  function Jx(e) {
    Re !== null &&
      typeof Re.markLayoutEffectsStarted == 'function' &&
      Re.markLayoutEffectsStarted(e);
  }
  function Zx() {
    Re !== null &&
      typeof Re.markLayoutEffectsStopped == 'function' &&
      Re.markLayoutEffectsStopped();
  }
  function eR(e) {
    Re !== null &&
      typeof Re.markPassiveEffectsStarted == 'function' &&
      Re.markPassiveEffectsStarted(e);
  }
  function tR() {
    Re !== null &&
      typeof Re.markPassiveEffectsStopped == 'function' &&
      Re.markPassiveEffectsStopped();
  }
  function ag(e) {
    Re !== null &&
      typeof Re.markRenderStarted == 'function' &&
      Re.markRenderStarted(e);
  }
  function nR() {
    Re !== null &&
      typeof Re.markRenderYielded == 'function' &&
      Re.markRenderYielded();
  }
  function ig() {
    Re !== null &&
      typeof Re.markRenderStopped == 'function' &&
      Re.markRenderStopped();
  }
  function rR(e) {
    Re !== null &&
      typeof Re.markRenderScheduled == 'function' &&
      Re.markRenderScheduled(e);
  }
  function aR(e, t) {
    Re !== null &&
      typeof Re.markForceUpdateScheduled == 'function' &&
      Re.markForceUpdateScheduled(e, t);
  }
  function lp(e, t) {
    Re !== null &&
      typeof Re.markStateUpdateScheduled == 'function' &&
      Re.markStateUpdateScheduled(e, t);
  }
  var Be = 0,
    yt = 1,
    kt = 2,
    an = 8,
    sa = 16,
    og = Math.clz32 ? Math.clz32 : lR,
    iR = Math.log,
    oR = Math.LN2;
  function lR(e) {
    var t = e >>> 0;
    return t === 0 ? 32 : (31 - ((iR(t) / oR) | 0)) | 0;
  }
  var sp = 31,
    se = 0,
    On = 0,
    tt = 1,
    Go = 2,
    za = 4,
    to = 8,
    ua = 16,
    cs = 32,
    Wo = 4194240,
    fs = 64,
    up = 128,
    cp = 256,
    fp = 512,
    dp = 1024,
    pp = 2048,
    vp = 4096,
    hp = 8192,
    mp = 16384,
    yp = 32768,
    gp = 65536,
    bp = 131072,
    Sp = 262144,
    Ep = 524288,
    Cp = 1048576,
    Tp = 2097152,
    pc = 130023424,
    qo = 4194304,
    wp = 8388608,
    xp = 16777216,
    Rp = 33554432,
    _p = 67108864,
    lg = qo,
    ds = 134217728,
    sg = 268435455,
    ps = 268435456,
    no = 536870912,
    yr = 1073741824;
  function sR(e) {
    {
      if (e & tt) return 'Sync';
      if (e & Go) return 'InputContinuousHydration';
      if (e & za) return 'InputContinuous';
      if (e & to) return 'DefaultHydration';
      if (e & ua) return 'Default';
      if (e & cs) return 'TransitionHydration';
      if (e & Wo) return 'Transition';
      if (e & pc) return 'Retry';
      if (e & ds) return 'SelectiveHydration';
      if (e & ps) return 'IdleHydration';
      if (e & no) return 'Idle';
      if (e & yr) return 'Offscreen';
    }
  }
  var jt = -1,
    vc = fs,
    hc = qo;
  function vs(e) {
    switch (ro(e)) {
      case tt:
        return tt;
      case Go:
        return Go;
      case za:
        return za;
      case to:
        return to;
      case ua:
        return ua;
      case cs:
        return cs;
      case fs:
      case up:
      case cp:
      case fp:
      case dp:
      case pp:
      case vp:
      case hp:
      case mp:
      case yp:
      case gp:
      case bp:
      case Sp:
      case Ep:
      case Cp:
      case Tp:
        return e & Wo;
      case qo:
      case wp:
      case xp:
      case Rp:
      case _p:
        return e & pc;
      case ds:
        return ds;
      case ps:
        return ps;
      case no:
        return no;
      case yr:
        return yr;
      default:
        return (
          d('Should have found matching lanes. This is a bug in React.'),
          e
        );
    }
  }
  function mc(e, t) {
    var n = e.pendingLanes;
    if (n === se) return se;
    var a = se,
      l = e.suspendedLanes,
      u = e.pingedLanes,
      p = n & sg;
    if (p !== se) {
      var v = p & ~l;
      if (v !== se) a = vs(v);
      else {
        var y = p & u;
        y !== se && (a = vs(y));
      }
    } else {
      var C = n & ~l;
      C !== se ? (a = vs(C)) : u !== se && (a = vs(u));
    }
    if (a === se) return se;
    if (t !== se && t !== a && (t & l) === se) {
      var T = ro(a),
        k = ro(t);
      if (T >= k || (T === ua && (k & Wo) !== se)) return t;
    }
    (a & za) !== se && (a |= n & ua);
    var L = e.entangledLanes;
    if (L !== se)
      for (var B = e.entanglements, Y = a & L; Y > 0; ) {
        var X = ao(Y),
          we = 1 << X;
        ((a |= B[X]), (Y &= ~we));
      }
    return a;
  }
  function uR(e, t) {
    for (var n = e.eventTimes, a = jt; t > 0; ) {
      var l = ao(t),
        u = 1 << l,
        p = n[l];
      (p > a && (a = p), (t &= ~u));
    }
    return a;
  }
  function cR(e, t) {
    switch (e) {
      case tt:
      case Go:
      case za:
        return t + 250;
      case to:
      case ua:
      case cs:
      case fs:
      case up:
      case cp:
      case fp:
      case dp:
      case pp:
      case vp:
      case hp:
      case mp:
      case yp:
      case gp:
      case bp:
      case Sp:
      case Ep:
      case Cp:
      case Tp:
        return t + 5e3;
      case qo:
      case wp:
      case xp:
      case Rp:
      case _p:
        return jt;
      case ds:
      case ps:
      case no:
      case yr:
        return jt;
      default:
        return (
          d('Should have found matching lanes. This is a bug in React.'),
          jt
        );
    }
  }
  function fR(e, t) {
    for (
      var n = e.pendingLanes,
        a = e.suspendedLanes,
        l = e.pingedLanes,
        u = e.expirationTimes,
        p = n;
      p > 0;

    ) {
      var v = ao(p),
        y = 1 << v,
        C = u[v];
      (C === jt
        ? ((y & a) === se || (y & l) !== se) && (u[v] = cR(y, t))
        : C <= t && (e.expiredLanes |= y),
        (p &= ~y));
    }
  }
  function dR(e) {
    return vs(e.pendingLanes);
  }
  function Dp(e) {
    var t = e.pendingLanes & ~yr;
    return t !== se ? t : t & yr ? yr : se;
  }
  function pR(e) {
    return (e & tt) !== se;
  }
  function Op(e) {
    return (e & sg) !== se;
  }
  function ug(e) {
    return (e & pc) === e;
  }
  function vR(e) {
    var t = tt | za | ua;
    return (e & t) === se;
  }
  function hR(e) {
    return (e & Wo) === e;
  }
  function yc(e, t) {
    var n = Go | za | to | ua;
    return (t & n) !== se;
  }
  function mR(e, t) {
    return (t & e.expiredLanes) !== se;
  }
  function cg(e) {
    return (e & Wo) !== se;
  }
  function fg() {
    var e = vc;
    return ((vc <<= 1), (vc & Wo) === se && (vc = fs), e);
  }
  function yR() {
    var e = hc;
    return ((hc <<= 1), (hc & pc) === se && (hc = qo), e);
  }
  function ro(e) {
    return e & -e;
  }
  function hs(e) {
    return ro(e);
  }
  function ao(e) {
    return 31 - og(e);
  }
  function Ap(e) {
    return ao(e);
  }
  function gr(e, t) {
    return (e & t) !== se;
  }
  function Xo(e, t) {
    return (e & t) === t;
  }
  function st(e, t) {
    return e | t;
  }
  function gc(e, t) {
    return e & ~t;
  }
  function dg(e, t) {
    return e & t;
  }
  function Oz(e) {
    return e;
  }
  function gR(e, t) {
    return e !== On && e < t ? e : t;
  }
  function Mp(e) {
    for (var t = [], n = 0; n < sp; n++) t.push(e);
    return t;
  }
  function ms(e, t, n) {
    ((e.pendingLanes |= t),
      t !== no && ((e.suspendedLanes = se), (e.pingedLanes = se)));
    var a = e.eventTimes,
      l = Ap(t);
    a[l] = n;
  }
  function bR(e, t) {
    ((e.suspendedLanes |= t), (e.pingedLanes &= ~t));
    for (var n = e.expirationTimes, a = t; a > 0; ) {
      var l = ao(a),
        u = 1 << l;
      ((n[l] = jt), (a &= ~u));
    }
  }
  function pg(e, t, n) {
    e.pingedLanes |= e.suspendedLanes & t;
  }
  function SR(e, t) {
    var n = e.pendingLanes & ~t;
    ((e.pendingLanes = t),
      (e.suspendedLanes = se),
      (e.pingedLanes = se),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t));
    for (
      var a = e.entanglements, l = e.eventTimes, u = e.expirationTimes, p = n;
      p > 0;

    ) {
      var v = ao(p),
        y = 1 << v;
      ((a[v] = se), (l[v] = jt), (u[v] = jt), (p &= ~y));
    }
  }
  function Lp(e, t) {
    for (var n = (e.entangledLanes |= t), a = e.entanglements, l = n; l; ) {
      var u = ao(l),
        p = 1 << u;
      ((p & t) | (a[u] & t) && (a[u] |= t), (l &= ~p));
    }
  }
  function ER(e, t) {
    var n = ro(t),
      a;
    switch (n) {
      case za:
        a = Go;
        break;
      case ua:
        a = to;
        break;
      case fs:
      case up:
      case cp:
      case fp:
      case dp:
      case pp:
      case vp:
      case hp:
      case mp:
      case yp:
      case gp:
      case bp:
      case Sp:
      case Ep:
      case Cp:
      case Tp:
      case qo:
      case wp:
      case xp:
      case Rp:
      case _p:
        a = cs;
        break;
      case no:
        a = ps;
        break;
      default:
        a = On;
        break;
    }
    return (a & (e.suspendedLanes | t)) !== On ? On : a;
  }
  function vg(e, t, n) {
    if (Ir)
      for (var a = e.pendingUpdatersLaneMap; n > 0; ) {
        var l = Ap(n),
          u = 1 << l,
          p = a[l];
        (p.add(t), (n &= ~u));
      }
  }
  function hg(e, t) {
    if (Ir)
      for (var n = e.pendingUpdatersLaneMap, a = e.memoizedUpdaters; t > 0; ) {
        var l = Ap(t),
          u = 1 << l,
          p = n[l];
        (p.size > 0 &&
          (p.forEach(function (v) {
            var y = v.alternate;
            (y === null || !a.has(y)) && a.add(v);
          }),
          p.clear()),
          (t &= ~u));
      }
  }
  function mg(e, t) {
    return null;
  }
  var br = tt,
    Ua = za,
    Fa = ua,
    bc = no,
    ys = On;
  function Br() {
    return ys;
  }
  function An(e) {
    ys = e;
  }
  function CR(e, t) {
    var n = ys;
    try {
      return ((ys = e), t());
    } finally {
      ys = n;
    }
  }
  function TR(e, t) {
    return e !== 0 && e < t ? e : t;
  }
  function wR(e, t) {
    return e === 0 || e > t ? e : t;
  }
  function kp(e, t) {
    return e !== 0 && e < t;
  }
  function yg(e) {
    var t = ro(e);
    return kp(br, t) ? (kp(Ua, t) ? (Op(t) ? Fa : bc) : Ua) : br;
  }
  function Sc(e) {
    var t = e.current.memoizedState;
    return t.isDehydrated;
  }
  var gg;
  function xR(e) {
    gg = e;
  }
  function RR(e) {
    gg(e);
  }
  var Np;
  function _R(e) {
    Np = e;
  }
  var bg;
  function DR(e) {
    bg = e;
  }
  var Sg;
  function OR(e) {
    Sg = e;
  }
  var Eg;
  function AR(e) {
    Eg = e;
  }
  var Pp = !1,
    Ec = [],
    pi = null,
    vi = null,
    hi = null,
    gs = new Map(),
    bs = new Map(),
    mi = [],
    MR = [
      'mousedown',
      'mouseup',
      'touchcancel',
      'touchend',
      'touchstart',
      'auxclick',
      'dblclick',
      'pointercancel',
      'pointerdown',
      'pointerup',
      'dragend',
      'dragstart',
      'drop',
      'compositionend',
      'compositionstart',
      'keydown',
      'keypress',
      'keyup',
      'input',
      'textInput',
      'copy',
      'cut',
      'paste',
      'click',
      'change',
      'contextmenu',
      'reset',
      'submit',
    ];
  function LR(e) {
    return MR.indexOf(e) > -1;
  }
  function kR(e, t, n, a, l) {
    return {
      blockedOn: e,
      domEventName: t,
      eventSystemFlags: n,
      nativeEvent: l,
      targetContainers: [a],
    };
  }
  function Cg(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        pi = null;
        break;
      case 'dragenter':
      case 'dragleave':
        vi = null;
        break;
      case 'mouseover':
      case 'mouseout':
        hi = null;
        break;
      case 'pointerover':
      case 'pointerout': {
        var n = t.pointerId;
        gs.delete(n);
        break;
      }
      case 'gotpointercapture':
      case 'lostpointercapture': {
        var a = t.pointerId;
        bs.delete(a);
        break;
      }
    }
  }
  function Ss(e, t, n, a, l, u) {
    if (e === null || e.nativeEvent !== u) {
      var p = kR(t, n, a, l, u);
      if (t !== null) {
        var v = bi(t);
        v !== null && Np(v);
      }
      return p;
    }
    e.eventSystemFlags |= a;
    var y = e.targetContainers;
    return (l !== null && y.indexOf(l) === -1 && y.push(l), e);
  }
  function NR(e, t, n, a, l) {
    switch (t) {
      case 'focusin': {
        var u = l;
        return ((pi = Ss(pi, e, t, n, a, u)), !0);
      }
      case 'dragenter': {
        var p = l;
        return ((vi = Ss(vi, e, t, n, a, p)), !0);
      }
      case 'mouseover': {
        var v = l;
        return ((hi = Ss(hi, e, t, n, a, v)), !0);
      }
      case 'pointerover': {
        var y = l,
          C = y.pointerId;
        return (gs.set(C, Ss(gs.get(C) || null, e, t, n, a, y)), !0);
      }
      case 'gotpointercapture': {
        var T = l,
          k = T.pointerId;
        return (bs.set(k, Ss(bs.get(k) || null, e, t, n, a, T)), !0);
      }
    }
    return !1;
  }
  function Tg(e) {
    var t = lo(e.target);
    if (t !== null) {
      var n = Zi(t);
      if (n !== null) {
        var a = n.tag;
        if (a === V) {
          var l = Wy(n);
          if (l !== null) {
            ((e.blockedOn = l),
              Eg(e.priority, function () {
                bg(n);
              }));
            return;
          }
        } else if (a === S) {
          var u = n.stateNode;
          if (Sc(u)) {
            e.blockedOn = qy(n);
            return;
          }
        }
      }
    }
    e.blockedOn = null;
  }
  function PR(e) {
    for (
      var t = Sg(), n = { blockedOn: null, target: e, priority: t }, a = 0;
      a < mi.length && kp(t, mi[a].priority);
      a++
    );
    (mi.splice(a, 0, n), a === 0 && Tg(n));
  }
  function Cc(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; t.length > 0; ) {
      var n = t[0],
        a = Fp(e.domEventName, e.eventSystemFlags, n, e.nativeEvent);
      if (a === null) {
        var l = e.nativeEvent,
          u = new l.constructor(l.type, l);
        (lx(u), l.target.dispatchEvent(u), sx());
      } else {
        var p = bi(a);
        return (p !== null && Np(p), (e.blockedOn = a), !1);
      }
      t.shift();
    }
    return !0;
  }
  function wg(e, t, n) {
    Cc(e) && n.delete(t);
  }
  function zR() {
    ((Pp = !1),
      pi !== null && Cc(pi) && (pi = null),
      vi !== null && Cc(vi) && (vi = null),
      hi !== null && Cc(hi) && (hi = null),
      gs.forEach(wg),
      bs.forEach(wg));
  }
  function Es(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Pp ||
        ((Pp = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, zR)));
  }
  function Cs(e) {
    if (Ec.length > 0) {
      Es(Ec[0], e);
      for (var t = 1; t < Ec.length; t++) {
        var n = Ec[t];
        n.blockedOn === e && (n.blockedOn = null);
      }
    }
    (pi !== null && Es(pi, e),
      vi !== null && Es(vi, e),
      hi !== null && Es(hi, e));
    var a = function (v) {
      return Es(v, e);
    };
    (gs.forEach(a), bs.forEach(a));
    for (var l = 0; l < mi.length; l++) {
      var u = mi[l];
      u.blockedOn === e && (u.blockedOn = null);
    }
    for (; mi.length > 0; ) {
      var p = mi[0];
      if (p.blockedOn !== null) break;
      (Tg(p), p.blockedOn === null && mi.shift());
    }
  }
  var Qo = o.ReactCurrentBatchConfig,
    zp = !0;
  function xg(e) {
    zp = !!e;
  }
  function UR() {
    return zp;
  }
  function FR(e, t, n) {
    var a = Rg(t),
      l;
    switch (a) {
      case br:
        l = VR;
        break;
      case Ua:
        l = HR;
        break;
      case Fa:
      default:
        l = Up;
        break;
    }
    return l.bind(null, t, n, e);
  }
  function VR(e, t, n, a) {
    var l = Br(),
      u = Qo.transition;
    Qo.transition = null;
    try {
      (An(br), Up(e, t, n, a));
    } finally {
      (An(l), (Qo.transition = u));
    }
  }
  function HR(e, t, n, a) {
    var l = Br(),
      u = Qo.transition;
    Qo.transition = null;
    try {
      (An(Ua), Up(e, t, n, a));
    } finally {
      (An(l), (Qo.transition = u));
    }
  }
  function Up(e, t, n, a) {
    zp && IR(e, t, n, a);
  }
  function IR(e, t, n, a) {
    var l = Fp(e, t, n, a);
    if (l === null) {
      (Jp(e, t, a, Tc, n), Cg(e, a));
      return;
    }
    if (NR(l, e, t, n, a)) {
      a.stopPropagation();
      return;
    }
    if ((Cg(e, a), t & ns && LR(e))) {
      for (; l !== null; ) {
        var u = bi(l);
        u !== null && RR(u);
        var p = Fp(e, t, n, a);
        if ((p === null && Jp(e, t, a, Tc, n), p === l)) break;
        l = p;
      }
      l !== null && a.stopPropagation();
      return;
    }
    Jp(e, t, a, null, n);
  }
  var Tc = null;
  function Fp(e, t, n, a) {
    Tc = null;
    var l = Yd(a),
      u = lo(l);
    if (u !== null) {
      var p = Zi(u);
      if (p === null) u = null;
      else {
        var v = p.tag;
        if (v === V) {
          var y = Wy(p);
          if (y !== null) return y;
          u = null;
        } else if (v === S) {
          var C = p.stateNode;
          if (Sc(C)) return qy(p);
          u = null;
        } else p !== u && (u = null);
      }
    }
    return ((Tc = u), null);
  }
  function Rg(e) {
    switch (e) {
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return br;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'toggle':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return Ua;
      case 'message': {
        var t = Lx();
        switch (t) {
          case dc:
            return br;
          case ip:
            return Ua;
          case eo:
          case kx:
            return Fa;
          case op:
            return bc;
          default:
            return Fa;
        }
      }
      default:
        return Fa;
    }
  }
  function BR(e, t, n) {
    return (e.addEventListener(t, n, !1), n);
  }
  function jR(e, t, n) {
    return (e.addEventListener(t, n, !0), n);
  }
  function $R(e, t, n, a) {
    return (e.addEventListener(t, n, { capture: !0, passive: a }), n);
  }
  function YR(e, t, n, a) {
    return (e.addEventListener(t, n, { passive: a }), n);
  }
  var Ts = null,
    Vp = null,
    ws = null;
  function GR(e) {
    return ((Ts = e), (Vp = Dg()), !0);
  }
  function WR() {
    ((Ts = null), (Vp = null), (ws = null));
  }
  function _g() {
    if (ws) return ws;
    var e,
      t = Vp,
      n = t.length,
      a,
      l = Dg(),
      u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var p = n - e;
    for (a = 1; a <= p && t[n - a] === l[u - a]; a++);
    var v = a > 1 ? 1 - a : void 0;
    return ((ws = l.slice(e, v)), ws);
  }
  function Dg() {
    return 'value' in Ts ? Ts.value : Ts.textContent;
  }
  function wc(e) {
    var t,
      n = e.keyCode;
    return (
      'charCode' in e
        ? ((t = e.charCode), t === 0 && n === 13 && (t = 13))
        : (t = n),
      t === 10 && (t = 13),
      t >= 32 || t === 13 ? t : 0
    );
  }
  function xc() {
    return !0;
  }
  function Og() {
    return !1;
  }
  function Sr(e) {
    function t(n, a, l, u, p) {
      ((this._reactName = n),
        (this._targetInst = l),
        (this.type = a),
        (this.nativeEvent = u),
        (this.target = p),
        (this.currentTarget = null));
      for (var v in e)
        if (e.hasOwnProperty(v)) {
          var y = e[v];
          y ? (this[v] = y(u)) : (this[v] = u[v]);
        }
      var C =
        u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1;
      return (
        C ? (this.isDefaultPrevented = xc) : (this.isDefaultPrevented = Og),
        (this.isPropagationStopped = Og),
        this
      );
    }
    return (
      ct(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
            (this.isDefaultPrevented = xc));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = xc));
        },
        persist: function () {},
        isPersistent: xc,
      }),
      t
    );
  }
  var Ko = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Hp = Sr(Ko),
    xs = ct({}, Ko, { view: 0, detail: 0 }),
    qR = Sr(xs),
    Ip,
    Bp,
    Rs;
  function XR(e) {
    e !== Rs &&
      (Rs && e.type === 'mousemove'
        ? ((Ip = e.screenX - Rs.screenX), (Bp = e.screenY - Rs.screenY))
        : ((Ip = 0), (Bp = 0)),
      (Rs = e));
  }
  var Rc = ct({}, xs, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: $p,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return 'movementX' in e ? e.movementX : (XR(e), Ip);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Bp;
      },
    }),
    Ag = Sr(Rc),
    QR = ct({}, Rc, { dataTransfer: 0 }),
    KR = Sr(QR),
    JR = ct({}, xs, { relatedTarget: 0 }),
    jp = Sr(JR),
    ZR = ct({}, Ko, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    e0 = Sr(ZR),
    t0 = ct({}, Ko, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    n0 = Sr(t0),
    r0 = ct({}, Ko, { data: 0 }),
    Mg = Sr(r0),
    a0 = Mg,
    i0 = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    o0 = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    };
  function l0(e) {
    if (e.key) {
      var t = i0[e.key] || e.key;
      if (t !== 'Unidentified') return t;
    }
    if (e.type === 'keypress') {
      var n = wc(e);
      return n === 13 ? 'Enter' : String.fromCharCode(n);
    }
    return e.type === 'keydown' || e.type === 'keyup'
      ? o0[e.keyCode] || 'Unidentified'
      : '';
  }
  var s0 = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
  function u0(e) {
    var t = this,
      n = t.nativeEvent;
    if (n.getModifierState) return n.getModifierState(e);
    var a = s0[e];
    return a ? !!n[a] : !1;
  }
  function $p(e) {
    return u0;
  }
  var c0 = ct({}, xs, {
      key: l0,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: $p,
      charCode: function (e) {
        return e.type === 'keypress' ? wc(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? wc(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    f0 = Sr(c0),
    d0 = ct({}, Rc, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Lg = Sr(d0),
    p0 = ct({}, xs, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: $p,
    }),
    v0 = Sr(p0),
    h0 = ct({}, Ko, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    m0 = Sr(h0),
    y0 = ct({}, Rc, {
      deltaX: function (e) {
        return 'deltaX' in e
          ? e.deltaX
          : 'wheelDeltaX' in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
            ? -e.wheelDeltaY
            : 'wheelDelta' in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    g0 = Sr(y0),
    b0 = [9, 13, 27, 32],
    kg = 229,
    Yp = it && 'CompositionEvent' in window,
    _s = null;
  it && 'documentMode' in document && (_s = document.documentMode);
  var S0 = it && 'TextEvent' in window && !_s,
    Ng = it && (!Yp || (_s && _s > 8 && _s <= 11)),
    Pg = 32,
    zg = String.fromCharCode(Pg);
  function E0() {
    (Je('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
      Je('onCompositionEnd', [
        'compositionend',
        'focusout',
        'keydown',
        'keypress',
        'keyup',
        'mousedown',
      ]),
      Je('onCompositionStart', [
        'compositionstart',
        'focusout',
        'keydown',
        'keypress',
        'keyup',
        'mousedown',
      ]),
      Je('onCompositionUpdate', [
        'compositionupdate',
        'focusout',
        'keydown',
        'keypress',
        'keyup',
        'mousedown',
      ]));
  }
  var Ug = !1;
  function C0(e) {
    return (e.ctrlKey || e.altKey || e.metaKey) && !(e.ctrlKey && e.altKey);
  }
  function T0(e) {
    switch (e) {
      case 'compositionstart':
        return 'onCompositionStart';
      case 'compositionend':
        return 'onCompositionEnd';
      case 'compositionupdate':
        return 'onCompositionUpdate';
    }
  }
  function w0(e, t) {
    return e === 'keydown' && t.keyCode === kg;
  }
  function Fg(e, t) {
    switch (e) {
      case 'keyup':
        return b0.indexOf(t.keyCode) !== -1;
      case 'keydown':
        return t.keyCode !== kg;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function Vg(e) {
    var t = e.detail;
    return typeof t == 'object' && 'data' in t ? t.data : null;
  }
  function Hg(e) {
    return e.locale === 'ko';
  }
  var Jo = !1;
  function x0(e, t, n, a, l) {
    var u, p;
    if (
      (Yp
        ? (u = T0(t))
        : Jo
          ? Fg(t, a) && (u = 'onCompositionEnd')
          : w0(t, a) && (u = 'onCompositionStart'),
      !u)
    )
      return null;
    Ng &&
      !Hg(a) &&
      (!Jo && u === 'onCompositionStart'
        ? (Jo = GR(l))
        : u === 'onCompositionEnd' && Jo && (p = _g()));
    var v = Mc(n, u);
    if (v.length > 0) {
      var y = new Mg(u, t, null, a, l);
      if ((e.push({ event: y, listeners: v }), p)) y.data = p;
      else {
        var C = Vg(a);
        C !== null && (y.data = C);
      }
    }
  }
  function R0(e, t) {
    switch (e) {
      case 'compositionend':
        return Vg(t);
      case 'keypress':
        var n = t.which;
        return n !== Pg ? null : ((Ug = !0), zg);
      case 'textInput':
        var a = t.data;
        return a === zg && Ug ? null : a;
      default:
        return null;
    }
  }
  function _0(e, t) {
    if (Jo) {
      if (e === 'compositionend' || (!Yp && Fg(e, t))) {
        var n = _g();
        return (WR(), (Jo = !1), n);
      }
      return null;
    }
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!C0(t)) {
          if (t.char && t.char.length > 1) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case 'compositionend':
        return Ng && !Hg(t) ? null : t.data;
      default:
        return null;
    }
  }
  function D0(e, t, n, a, l) {
    var u;
    if ((S0 ? (u = R0(t, a)) : (u = _0(t, a)), !u)) return null;
    var p = Mc(n, 'onBeforeInput');
    if (p.length > 0) {
      var v = new a0('onBeforeInput', 'beforeinput', null, a, l);
      (e.push({ event: v, listeners: p }), (v.data = u));
    }
  }
  function O0(e, t, n, a, l, u, p) {
    (x0(e, t, n, a, l), D0(e, t, n, a, l));
  }
  var A0 = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Ig(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!A0[e.type] : t === 'textarea';
  }
  /**
   * Checks if an event is supported in the current execution environment.
   *
   * NOTE: This will not work correctly for non-generic events such as `change`,
   * `reset`, `load`, `error`, and `select`.
   *
   * Borrows from Modernizr.
   *
   * @param {string} eventNameSuffix Event name, e.g. "click".
   * @return {boolean} True if the event is supported.
   * @internal
   * @license Modernizr 3.0.0pre (Custom Build) | MIT
   */ function M0(e) {
    if (!it) return !1;
    var t = 'on' + e,
      n = t in document;
    if (!n) {
      var a = document.createElement('div');
      (a.setAttribute(t, 'return;'), (n = typeof a[t] == 'function'));
    }
    return n;
  }
  function L0() {
    Je('onChange', [
      'change',
      'click',
      'focusin',
      'focusout',
      'input',
      'keydown',
      'keyup',
      'selectionchange',
    ]);
  }
  function Bg(e, t, n, a) {
    Vy(a);
    var l = Mc(t, 'onChange');
    if (l.length > 0) {
      var u = new Hp('onChange', 'change', null, n, a);
      e.push({ event: u, listeners: l });
    }
  }
  var Ds = null,
    Os = null;
  function k0(e) {
    var t = e.nodeName && e.nodeName.toLowerCase();
    return t === 'select' || (t === 'input' && e.type === 'file');
  }
  function N0(e) {
    var t = [];
    (Bg(t, Os, e, Yd(e)), jy(P0, t));
  }
  function P0(e) {
    ob(e, 0);
  }
  function _c(e) {
    var t = al(e);
    if (ko(t)) return e;
  }
  function z0(e, t) {
    if (e === 'change') return t;
  }
  var jg = !1;
  it &&
    (jg = M0('input') && (!document.documentMode || document.documentMode > 9));
  function U0(e, t) {
    ((Ds = e), (Os = t), Ds.attachEvent('onpropertychange', Yg));
  }
  function $g() {
    Ds && (Ds.detachEvent('onpropertychange', Yg), (Ds = null), (Os = null));
  }
  function Yg(e) {
    e.propertyName === 'value' && _c(Os) && N0(e);
  }
  function F0(e, t, n) {
    e === 'focusin' ? ($g(), U0(t, n)) : e === 'focusout' && $g();
  }
  function V0(e, t) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
      return _c(Os);
  }
  function H0(e) {
    var t = e.nodeName;
    return (
      t &&
      t.toLowerCase() === 'input' &&
      (e.type === 'checkbox' || e.type === 'radio')
    );
  }
  function I0(e, t) {
    if (e === 'click') return _c(t);
  }
  function B0(e, t) {
    if (e === 'input' || e === 'change') return _c(t);
  }
  function j0(e) {
    var t = e._wrapperState;
    !t || !t.controlled || e.type !== 'number' || et(e, 'number', e.value);
  }
  function $0(e, t, n, a, l, u, p) {
    var v = n ? al(n) : window,
      y,
      C;
    if (
      (k0(v)
        ? (y = z0)
        : Ig(v)
          ? jg
            ? (y = B0)
            : ((y = V0), (C = F0))
          : H0(v) && (y = I0),
      y)
    ) {
      var T = y(t, n);
      if (T) {
        Bg(e, T, a, l);
        return;
      }
    }
    (C && C(t, v, n), t === 'focusout' && j0(v));
  }
  function Y0() {
    (ee('onMouseEnter', ['mouseout', 'mouseover']),
      ee('onMouseLeave', ['mouseout', 'mouseover']),
      ee('onPointerEnter', ['pointerout', 'pointerover']),
      ee('onPointerLeave', ['pointerout', 'pointerover']));
  }
  function G0(e, t, n, a, l, u, p) {
    var v = t === 'mouseover' || t === 'pointerover',
      y = t === 'mouseout' || t === 'pointerout';
    if (v && !ux(a)) {
      var C = a.relatedTarget || a.fromElement;
      if (C && (lo(C) || $s(C))) return;
    }
    if (!(!y && !v)) {
      var T;
      if (l.window === l) T = l;
      else {
        var k = l.ownerDocument;
        k ? (T = k.defaultView || k.parentWindow) : (T = window);
      }
      var L, B;
      if (y) {
        var Y = a.relatedTarget || a.toElement;
        if (((L = n), (B = Y ? lo(Y) : null), B !== null)) {
          var X = Zi(B);
          (B !== X || (B.tag !== O && B.tag !== D)) && (B = null);
        }
      } else ((L = null), (B = n));
      if (L !== B) {
        var we = Ag,
          He = 'onMouseLeave',
          Ne = 'onMouseEnter',
          bt = 'mouse';
        (t === 'pointerout' || t === 'pointerover') &&
          ((we = Lg),
          (He = 'onPointerLeave'),
          (Ne = 'onPointerEnter'),
          (bt = 'pointer'));
        var pt = L == null ? T : al(L),
          H = B == null ? T : al(B),
          Q = new we(He, bt + 'leave', L, a, l);
        ((Q.target = pt), (Q.relatedTarget = H));
        var I = null,
          fe = lo(l);
        if (fe === n) {
          var Oe = new we(Ne, bt + 'enter', B, a, l);
          ((Oe.target = H), (Oe.relatedTarget = pt), (I = Oe));
        }
        m_(e, Q, I, L, B);
      }
    }
  }
  function W0(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Er = typeof Object.is == 'function' ? Object.is : W0;
  function As(e, t) {
    if (Er(e, t)) return !0;
    if (
      typeof e != 'object' ||
      e === null ||
      typeof t != 'object' ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      a = Object.keys(t);
    if (n.length !== a.length) return !1;
    for (var l = 0; l < n.length; l++) {
      var u = n[l];
      if (!dt.call(t, u) || !Er(e[u], t[u])) return !1;
    }
    return !0;
  }
  function Gg(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function q0(e) {
    for (; e; ) {
      if (e.nextSibling) return e.nextSibling;
      e = e.parentNode;
    }
  }
  function Wg(e, t) {
    for (var n = Gg(e), a = 0, l = 0; n; ) {
      if (n.nodeType === Aa) {
        if (((l = a + n.textContent.length), a <= t && l >= t))
          return { node: n, offset: t - a };
        a = l;
      }
      n = Gg(q0(n));
    }
  }
  function X0(e) {
    var t = e.ownerDocument,
      n = (t && t.defaultView) || window,
      a = n.getSelection && n.getSelection();
    if (!a || a.rangeCount === 0) return null;
    var l = a.anchorNode,
      u = a.anchorOffset,
      p = a.focusNode,
      v = a.focusOffset;
    try {
      (l.nodeType, p.nodeType);
    } catch {
      return null;
    }
    return Q0(e, l, u, p, v);
  }
  function Q0(e, t, n, a, l) {
    var u = 0,
      p = -1,
      v = -1,
      y = 0,
      C = 0,
      T = e,
      k = null;
    e: for (;;) {
      for (
        var L = null;
        T === t && (n === 0 || T.nodeType === Aa) && (p = u + n),
          T === a && (l === 0 || T.nodeType === Aa) && (v = u + l),
          T.nodeType === Aa && (u += T.nodeValue.length),
          (L = T.firstChild) !== null;

      )
        ((k = T), (T = L));
      for (;;) {
        if (T === e) break e;
        if (
          (k === t && ++y === n && (p = u),
          k === a && ++C === l && (v = u),
          (L = T.nextSibling) !== null)
        )
          break;
        ((T = k), (k = T.parentNode));
      }
      T = L;
    }
    return p === -1 || v === -1 ? null : { start: p, end: v };
  }
  function K0(e, t) {
    var n = e.ownerDocument || document,
      a = (n && n.defaultView) || window;
    if (a.getSelection) {
      var l = a.getSelection(),
        u = e.textContent.length,
        p = Math.min(t.start, u),
        v = t.end === void 0 ? p : Math.min(t.end, u);
      if (!l.extend && p > v) {
        var y = v;
        ((v = p), (p = y));
      }
      var C = Wg(e, p),
        T = Wg(e, v);
      if (C && T) {
        if (
          l.rangeCount === 1 &&
          l.anchorNode === C.node &&
          l.anchorOffset === C.offset &&
          l.focusNode === T.node &&
          l.focusOffset === T.offset
        )
          return;
        var k = n.createRange();
        (k.setStart(C.node, C.offset),
          l.removeAllRanges(),
          p > v
            ? (l.addRange(k), l.extend(T.node, T.offset))
            : (k.setEnd(T.node, T.offset), l.addRange(k)));
      }
    }
  }
  function qg(e) {
    return e && e.nodeType === Aa;
  }
  function Xg(e, t) {
    return !e || !t
      ? !1
      : e === t
        ? !0
        : qg(e)
          ? !1
          : qg(t)
            ? Xg(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1;
  }
  function J0(e) {
    return e && e.ownerDocument && Xg(e.ownerDocument.documentElement, e);
  }
  function Z0(e) {
    try {
      return typeof e.contentWindow.location.href == 'string';
    } catch {
      return !1;
    }
  }
  function Qg() {
    for (var e = window, t = ci(); t instanceof e.HTMLIFrameElement; ) {
      if (Z0(t)) e = t.contentWindow;
      else return t;
      t = ci(e.document);
    }
    return t;
  }
  function Gp(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  function e_() {
    var e = Qg();
    return { focusedElem: e, selectionRange: Gp(e) ? n_(e) : null };
  }
  function t_(e) {
    var t = Qg(),
      n = e.focusedElem,
      a = e.selectionRange;
    if (t !== n && J0(n)) {
      a !== null && Gp(n) && r_(n, a);
      for (var l = [], u = n; (u = u.parentNode); )
        u.nodeType === lr &&
          l.push({ element: u, left: u.scrollLeft, top: u.scrollTop });
      typeof n.focus == 'function' && n.focus();
      for (var p = 0; p < l.length; p++) {
        var v = l[p];
        ((v.element.scrollLeft = v.left), (v.element.scrollTop = v.top));
      }
    }
  }
  function n_(e) {
    var t;
    return (
      'selectionStart' in e
        ? (t = { start: e.selectionStart, end: e.selectionEnd })
        : (t = X0(e)),
      t || { start: 0, end: 0 }
    );
  }
  function r_(e, t) {
    var n = t.start,
      a = t.end;
    (a === void 0 && (a = n),
      'selectionStart' in e
        ? ((e.selectionStart = n),
          (e.selectionEnd = Math.min(a, e.value.length)))
        : K0(e, t));
  }
  var a_ = it && 'documentMode' in document && document.documentMode <= 11;
  function i_() {
    Je('onSelect', [
      'focusout',
      'contextmenu',
      'dragend',
      'focusin',
      'keydown',
      'keyup',
      'mousedown',
      'mouseup',
      'selectionchange',
    ]);
  }
  var Zo = null,
    Wp = null,
    Ms = null,
    qp = !1;
  function o_(e) {
    if ('selectionStart' in e && Gp(e))
      return { start: e.selectionStart, end: e.selectionEnd };
    var t = (e.ownerDocument && e.ownerDocument.defaultView) || window,
      n = t.getSelection();
    return {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset,
    };
  }
  function l_(e) {
    return e.window === e
      ? e.document
      : e.nodeType === Ma
        ? e
        : e.ownerDocument;
  }
  function Kg(e, t, n) {
    var a = l_(n);
    if (!(qp || Zo == null || Zo !== ci(a))) {
      var l = o_(Zo);
      if (!Ms || !As(Ms, l)) {
        Ms = l;
        var u = Mc(Wp, 'onSelect');
        if (u.length > 0) {
          var p = new Hp('onSelect', 'select', null, t, n);
          (e.push({ event: p, listeners: u }), (p.target = Zo));
        }
      }
    }
  }
  function s_(e, t, n, a, l, u, p) {
    var v = n ? al(n) : window;
    switch (t) {
      case 'focusin':
        (Ig(v) || v.contentEditable === 'true') &&
          ((Zo = v), (Wp = n), (Ms = null));
        break;
      case 'focusout':
        ((Zo = null), (Wp = null), (Ms = null));
        break;
      case 'mousedown':
        qp = !0;
        break;
      case 'contextmenu':
      case 'mouseup':
      case 'dragend':
        ((qp = !1), Kg(e, a, l));
        break;
      case 'selectionchange':
        if (a_) break;
      case 'keydown':
      case 'keyup':
        Kg(e, a, l);
    }
  }
  function Dc(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit' + e] = 'webkit' + t),
      (n['Moz' + e] = 'moz' + t),
      n
    );
  }
  var el = {
      animationend: Dc('Animation', 'AnimationEnd'),
      animationiteration: Dc('Animation', 'AnimationIteration'),
      animationstart: Dc('Animation', 'AnimationStart'),
      transitionend: Dc('Transition', 'TransitionEnd'),
    },
    Xp = {},
    Jg = {};
  it &&
    ((Jg = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete el.animationend.animation,
      delete el.animationiteration.animation,
      delete el.animationstart.animation),
    'TransitionEvent' in window || delete el.transitionend.transition);
  function Oc(e) {
    if (Xp[e]) return Xp[e];
    if (!el[e]) return e;
    var t = el[e];
    for (var n in t) if (t.hasOwnProperty(n) && n in Jg) return (Xp[e] = t[n]);
    return e;
  }
  var Zg = Oc('animationend'),
    eb = Oc('animationiteration'),
    tb = Oc('animationstart'),
    nb = Oc('transitionend'),
    rb = new Map(),
    ab = [
      'abort',
      'auxClick',
      'cancel',
      'canPlay',
      'canPlayThrough',
      'click',
      'close',
      'contextMenu',
      'copy',
      'cut',
      'drag',
      'dragEnd',
      'dragEnter',
      'dragExit',
      'dragLeave',
      'dragOver',
      'dragStart',
      'drop',
      'durationChange',
      'emptied',
      'encrypted',
      'ended',
      'error',
      'gotPointerCapture',
      'input',
      'invalid',
      'keyDown',
      'keyPress',
      'keyUp',
      'load',
      'loadedData',
      'loadedMetadata',
      'loadStart',
      'lostPointerCapture',
      'mouseDown',
      'mouseMove',
      'mouseOut',
      'mouseOver',
      'mouseUp',
      'paste',
      'pause',
      'play',
      'playing',
      'pointerCancel',
      'pointerDown',
      'pointerMove',
      'pointerOut',
      'pointerOver',
      'pointerUp',
      'progress',
      'rateChange',
      'reset',
      'resize',
      'seeked',
      'seeking',
      'stalled',
      'submit',
      'suspend',
      'timeUpdate',
      'touchCancel',
      'touchEnd',
      'touchStart',
      'volumeChange',
      'scroll',
      'toggle',
      'touchMove',
      'waiting',
      'wheel',
    ];
  function yi(e, t) {
    (rb.set(e, t), Je(t, [e]));
  }
  function u_() {
    for (var e = 0; e < ab.length; e++) {
      var t = ab[e],
        n = t.toLowerCase(),
        a = t[0].toUpperCase() + t.slice(1);
      yi(n, 'on' + a);
    }
    (yi(Zg, 'onAnimationEnd'),
      yi(eb, 'onAnimationIteration'),
      yi(tb, 'onAnimationStart'),
      yi('dblclick', 'onDoubleClick'),
      yi('focusin', 'onFocus'),
      yi('focusout', 'onBlur'),
      yi(nb, 'onTransitionEnd'));
  }
  function c_(e, t, n, a, l, u, p) {
    var v = rb.get(t);
    if (v !== void 0) {
      var y = Hp,
        C = t;
      switch (t) {
        case 'keypress':
          if (wc(a) === 0) return;
        case 'keydown':
        case 'keyup':
          y = f0;
          break;
        case 'focusin':
          ((C = 'focus'), (y = jp));
          break;
        case 'focusout':
          ((C = 'blur'), (y = jp));
          break;
        case 'beforeblur':
        case 'afterblur':
          y = jp;
          break;
        case 'click':
          if (a.button === 2) return;
        case 'auxclick':
        case 'dblclick':
        case 'mousedown':
        case 'mousemove':
        case 'mouseup':
        case 'mouseout':
        case 'mouseover':
        case 'contextmenu':
          y = Ag;
          break;
        case 'drag':
        case 'dragend':
        case 'dragenter':
        case 'dragexit':
        case 'dragleave':
        case 'dragover':
        case 'dragstart':
        case 'drop':
          y = KR;
          break;
        case 'touchcancel':
        case 'touchend':
        case 'touchmove':
        case 'touchstart':
          y = v0;
          break;
        case Zg:
        case eb:
        case tb:
          y = e0;
          break;
        case nb:
          y = m0;
          break;
        case 'scroll':
          y = qR;
          break;
        case 'wheel':
          y = g0;
          break;
        case 'copy':
        case 'cut':
        case 'paste':
          y = n0;
          break;
        case 'gotpointercapture':
        case 'lostpointercapture':
        case 'pointercancel':
        case 'pointerdown':
        case 'pointermove':
        case 'pointerout':
        case 'pointerover':
        case 'pointerup':
          y = Lg;
          break;
      }
      var T = (u & ns) !== 0;
      {
        var k = !T && t === 'scroll',
          L = v_(n, v, a.type, T, k);
        if (L.length > 0) {
          var B = new y(v, C, null, a, l);
          e.push({ event: B, listeners: L });
        }
      }
    }
  }
  (u_(), Y0(), L0(), i_(), E0());
  function f_(e, t, n, a, l, u, p) {
    c_(e, t, n, a, l, u);
    var v = (u & ox) === 0;
    v &&
      (G0(e, t, n, a, l),
      $0(e, t, n, a, l),
      s_(e, t, n, a, l),
      O0(e, t, n, a, l));
  }
  var Ls = [
      'abort',
      'canplay',
      'canplaythrough',
      'durationchange',
      'emptied',
      'encrypted',
      'ended',
      'error',
      'loadeddata',
      'loadedmetadata',
      'loadstart',
      'pause',
      'play',
      'playing',
      'progress',
      'ratechange',
      'resize',
      'seeked',
      'seeking',
      'stalled',
      'suspend',
      'timeupdate',
      'volumechange',
      'waiting',
    ],
    Qp = new Set(
      ['cancel', 'close', 'invalid', 'load', 'scroll', 'toggle'].concat(Ls)
    );
  function ib(e, t, n) {
    var a = e.type || 'unknown-event';
    ((e.currentTarget = n), gx(a, t, void 0, e), (e.currentTarget = null));
  }
  function d_(e, t, n) {
    var a;
    if (n)
      for (var l = t.length - 1; l >= 0; l--) {
        var u = t[l],
          p = u.instance,
          v = u.currentTarget,
          y = u.listener;
        if (p !== a && e.isPropagationStopped()) return;
        (ib(e, y, v), (a = p));
      }
    else
      for (var C = 0; C < t.length; C++) {
        var T = t[C],
          k = T.instance,
          L = T.currentTarget,
          B = T.listener;
        if (k !== a && e.isPropagationStopped()) return;
        (ib(e, B, L), (a = k));
      }
  }
  function ob(e, t) {
    for (var n = (t & ns) !== 0, a = 0; a < e.length; a++) {
      var l = e[a],
        u = l.event,
        p = l.listeners;
      d_(u, p, n);
    }
    bx();
  }
  function p_(e, t, n, a, l) {
    var u = Yd(n),
      p = [];
    (f_(p, e, a, n, u, t), ob(p, t));
  }
  function Wt(e, t) {
    Qp.has(e) ||
      d(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e
      );
    var n = !1,
      a = jD(t),
      l = y_(e, n);
    a.has(l) || (lb(t, e, $d, n), a.add(l));
  }
  function Kp(e, t, n) {
    Qp.has(e) &&
      !t &&
      d(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        e
      );
    var a = 0;
    (t && (a |= ns), lb(n, e, a, t));
  }
  var Ac = '_reactListening' + Math.random().toString(36).slice(2);
  function ks(e) {
    if (!e[Ac]) {
      ((e[Ac] = !0),
        pe.forEach(function (n) {
          n !== 'selectionchange' && (Qp.has(n) || Kp(n, !1, e), Kp(n, !0, e));
        }));
      var t = e.nodeType === Ma ? e : e.ownerDocument;
      t !== null && (t[Ac] || ((t[Ac] = !0), Kp('selectionchange', !1, t)));
    }
  }
  function lb(e, t, n, a, l) {
    var u = FR(e, t, n),
      p = void 0;
    (qd &&
      (t === 'touchstart' || t === 'touchmove' || t === 'wheel') &&
      (p = !0),
      (e = e),
      a
        ? p !== void 0
          ? $R(e, t, u, p)
          : jR(e, t, u)
        : p !== void 0
          ? YR(e, t, u, p)
          : BR(e, t, u));
  }
  function sb(e, t) {
    return e === t || (e.nodeType === cn && e.parentNode === t);
  }
  function Jp(e, t, n, a, l) {
    var u = a;
    if (!(t & Uy) && !(t & $d)) {
      var p = l;
      if (a !== null) {
        var v = a;
        e: for (;;) {
          if (v === null) return;
          var y = v.tag;
          if (y === S || y === w) {
            var C = v.stateNode.containerInfo;
            if (sb(C, p)) break;
            if (y === w)
              for (var T = v.return; T !== null; ) {
                var k = T.tag;
                if (k === S || k === w) {
                  var L = T.stateNode.containerInfo;
                  if (sb(L, p)) return;
                }
                T = T.return;
              }
            for (; C !== null; ) {
              var B = lo(C);
              if (B === null) return;
              var Y = B.tag;
              if (Y === O || Y === D) {
                v = u = B;
                continue e;
              }
              C = C.parentNode;
            }
          }
          v = v.return;
        }
      }
    }
    jy(function () {
      return p_(e, t, n, u);
    });
  }
  function Ns(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function v_(e, t, n, a, l, u) {
    for (
      var p = t !== null ? t + 'Capture' : null,
        v = a ? p : t,
        y = [],
        C = e,
        T = null;
      C !== null;

    ) {
      var k = C,
        L = k.stateNode,
        B = k.tag;
      if (B === O && L !== null && ((T = L), v !== null)) {
        var Y = as(C, v);
        Y != null && y.push(Ns(C, Y, T));
      }
      if (l) break;
      C = C.return;
    }
    return y;
  }
  function Mc(e, t) {
    for (var n = t + 'Capture', a = [], l = e; l !== null; ) {
      var u = l,
        p = u.stateNode,
        v = u.tag;
      if (v === O && p !== null) {
        var y = p,
          C = as(l, n);
        C != null && a.unshift(Ns(l, C, y));
        var T = as(l, t);
        T != null && a.push(Ns(l, T, y));
      }
      l = l.return;
    }
    return a;
  }
  function tl(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== O);
    return e || null;
  }
  function h_(e, t) {
    for (var n = e, a = t, l = 0, u = n; u; u = tl(u)) l++;
    for (var p = 0, v = a; v; v = tl(v)) p++;
    for (; l - p > 0; ) ((n = tl(n)), l--);
    for (; p - l > 0; ) ((a = tl(a)), p--);
    for (var y = l; y--; ) {
      if (n === a || (a !== null && n === a.alternate)) return n;
      ((n = tl(n)), (a = tl(a)));
    }
    return null;
  }
  function ub(e, t, n, a, l) {
    for (var u = t._reactName, p = [], v = n; v !== null && v !== a; ) {
      var y = v,
        C = y.alternate,
        T = y.stateNode,
        k = y.tag;
      if (C !== null && C === a) break;
      if (k === O && T !== null) {
        var L = T;
        if (l) {
          var B = as(v, u);
          B != null && p.unshift(Ns(v, B, L));
        } else if (!l) {
          var Y = as(v, u);
          Y != null && p.push(Ns(v, Y, L));
        }
      }
      v = v.return;
    }
    p.length !== 0 && e.push({ event: t, listeners: p });
  }
  function m_(e, t, n, a, l) {
    var u = a && l ? h_(a, l) : null;
    (a !== null && ub(e, t, a, u, !1),
      l !== null && n !== null && ub(e, n, l, u, !0));
  }
  function y_(e, t) {
    return e + '__' + (t ? 'capture' : 'bubble');
  }
  var sr = !1,
    Ps = 'dangerouslySetInnerHTML',
    Lc = 'suppressContentEditableWarning',
    gi = 'suppressHydrationWarning',
    cb = 'autoFocus',
    io = 'children',
    oo = 'style',
    kc = '__html',
    Zp,
    Nc,
    zs,
    fb,
    Pc,
    db,
    pb;
  ((Zp = { dialog: !0, webview: !0 }),
    (Nc = function (e, t) {
      (Zw(e, t),
        ex(e, t),
        ix(e, t, {
          registrationNameDependencies: at,
          possibleRegistrationNames: We,
        }));
    }),
    (db = it && !document.documentMode),
    (zs = function (e, t, n) {
      if (!sr) {
        var a = zc(n),
          l = zc(t);
        l !== a &&
          ((sr = !0),
          d(
            'Prop `%s` did not match. Server: %s Client: %s',
            e,
            JSON.stringify(l),
            JSON.stringify(a)
          ));
      }
    }),
    (fb = function (e) {
      if (!sr) {
        sr = !0;
        var t = [];
        (e.forEach(function (n) {
          t.push(n);
        }),
          d('Extra attributes from the server: %s', t));
      }
    }),
    (Pc = function (e, t) {
      t === !1
        ? d(
            'Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
            e,
            e,
            e
          )
        : d(
            'Expected `%s` listener to be a function, instead got a value of `%s` type.',
            e,
            typeof t
          );
    }),
    (pb = function (e, t) {
      var n =
        e.namespaceURI === Oa
          ? e.ownerDocument.createElement(e.tagName)
          : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return ((n.innerHTML = t), n.innerHTML);
    }));
  var g_ = /\r\n?/g,
    b_ = /\u0000|\uFFFD/g;
  function zc(e) {
    G(e);
    var t = typeof e == 'string' ? e : '' + e;
    return t
      .replace(
        g_,
        `
`
      )
      .replace(b_, '');
  }
  function Uc(e, t, n, a) {
    var l = zc(t),
      u = zc(e);
    if (
      u !== l &&
      (a &&
        (sr ||
          ((sr = !0),
          d('Text content did not match. Server: "%s" Client: "%s"', u, l))),
      n && me)
    )
      throw new Error('Text content does not match server-rendered HTML.');
  }
  function vb(e) {
    return e.nodeType === Ma ? e : e.ownerDocument;
  }
  function S_() {}
  function Fc(e) {
    e.onclick = S_;
  }
  function E_(e, t, n, a, l) {
    for (var u in a)
      if (a.hasOwnProperty(u)) {
        var p = a[u];
        if (u === oo) (p && Object.freeze(p), My(t, p));
        else if (u === Ps) {
          var v = p ? p[kc] : void 0;
          v != null && Ry(t, v);
        } else if (u === io)
          if (typeof p == 'string') {
            var y = e !== 'textarea' || p !== '';
            y && oc(t, p);
          } else typeof p == 'number' && oc(t, '' + p);
        else
          u === Lc ||
            u === gi ||
            u === cb ||
            (at.hasOwnProperty(u)
              ? p != null &&
                (typeof p != 'function' && Pc(u, p),
                u === 'onScroll' && Wt('scroll', t))
              : p != null && xa(t, u, p, l));
      }
  }
  function C_(e, t, n, a) {
    for (var l = 0; l < t.length; l += 2) {
      var u = t[l],
        p = t[l + 1];
      u === oo
        ? My(e, p)
        : u === Ps
          ? Ry(e, p)
          : u === io
            ? oc(e, p)
            : xa(e, u, p, a);
    }
  }
  function T_(e, t, n, a) {
    var l,
      u = vb(n),
      p,
      v = a;
    if ((v === Oa && (v = Fd(e)), v === Oa)) {
      if (
        ((l = qi(e, t)),
        !l &&
          e !== e.toLowerCase() &&
          d(
            '<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.',
            e
          ),
        e === 'script')
      ) {
        var y = u.createElement('div');
        y.innerHTML = '<script><\/script>';
        var C = y.firstChild;
        p = y.removeChild(C);
      } else if (typeof t.is == 'string') p = u.createElement(e, { is: t.is });
      else if (((p = u.createElement(e)), e === 'select')) {
        var T = p;
        t.multiple ? (T.multiple = !0) : t.size && (T.size = t.size);
      }
    } else p = u.createElementNS(v, e);
    return (
      v === Oa &&
        !l &&
        Object.prototype.toString.call(p) === '[object HTMLUnknownElement]' &&
        !dt.call(Zp, e) &&
        ((Zp[e] = !0),
        d(
          'The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.',
          e
        )),
      p
    );
  }
  function w_(e, t) {
    return vb(t).createTextNode(e);
  }
  function x_(e, t, n, a) {
    var l = qi(t, n);
    Nc(t, n);
    var u;
    switch (t) {
      case 'dialog':
        (Wt('cancel', e), Wt('close', e), (u = n));
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        (Wt('load', e), (u = n));
        break;
      case 'video':
      case 'audio':
        for (var p = 0; p < Ls.length; p++) Wt(Ls[p], e);
        u = n;
        break;
      case 'source':
        (Wt('error', e), (u = n));
        break;
      case 'img':
      case 'image':
      case 'link':
        (Wt('error', e), Wt('load', e), (u = n));
        break;
      case 'details':
        (Wt('toggle', e), (u = n));
        break;
      case 'input':
        (A(e, n), (u = b(e, n)), Wt('invalid', e));
        break;
      case 'option':
        (Vt(e, n), (u = n));
        break;
      case 'select':
        (es(e, n), (u = Zl(e, n)), Wt('invalid', e));
        break;
      case 'textarea':
        (Ty(e, n), (u = zd(e, n)), Wt('invalid', e));
        break;
      default:
        u = n;
    }
    switch ((jd(t, u), E_(t, e, a, u, l), t)) {
      case 'input':
        (_a(e), he(e, n, !1));
        break;
      case 'textarea':
        (_a(e), xy(e));
        break;
      case 'option':
        Gt(e, n);
        break;
      case 'select':
        Pd(e, n);
        break;
      default:
        typeof u.onClick == 'function' && Fc(e);
        break;
    }
  }
  function R_(e, t, n, a, l) {
    Nc(t, a);
    var u = null,
      p,
      v;
    switch (t) {
      case 'input':
        ((p = b(e, n)), (v = b(e, a)), (u = []));
        break;
      case 'select':
        ((p = Zl(e, n)), (v = Zl(e, a)), (u = []));
        break;
      case 'textarea':
        ((p = zd(e, n)), (v = zd(e, a)), (u = []));
        break;
      default:
        ((p = n),
          (v = a),
          typeof p.onClick != 'function' &&
            typeof v.onClick == 'function' &&
            Fc(e));
        break;
    }
    jd(t, v);
    var y,
      C,
      T = null;
    for (y in p)
      if (!(v.hasOwnProperty(y) || !p.hasOwnProperty(y) || p[y] == null))
        if (y === oo) {
          var k = p[y];
          for (C in k) k.hasOwnProperty(C) && (T || (T = {}), (T[C] = ''));
        } else
          y === Ps ||
            y === io ||
            y === Lc ||
            y === gi ||
            y === cb ||
            (at.hasOwnProperty(y)
              ? u || (u = [])
              : (u = u || []).push(y, null));
    for (y in v) {
      var L = v[y],
        B = p != null ? p[y] : void 0;
      if (!(!v.hasOwnProperty(y) || L === B || (L == null && B == null)))
        if (y === oo)
          if ((L && Object.freeze(L), B)) {
            for (C in B)
              B.hasOwnProperty(C) &&
                (!L || !L.hasOwnProperty(C)) &&
                (T || (T = {}), (T[C] = ''));
            for (C in L)
              L.hasOwnProperty(C) &&
                B[C] !== L[C] &&
                (T || (T = {}), (T[C] = L[C]));
          } else (T || (u || (u = []), u.push(y, T)), (T = L));
        else if (y === Ps) {
          var Y = L ? L[kc] : void 0,
            X = B ? B[kc] : void 0;
          Y != null && X !== Y && (u = u || []).push(y, Y);
        } else
          y === io
            ? (typeof L == 'string' || typeof L == 'number') &&
              (u = u || []).push(y, '' + L)
            : y === Lc ||
              y === gi ||
              (at.hasOwnProperty(y)
                ? (L != null &&
                    (typeof L != 'function' && Pc(y, L),
                    y === 'onScroll' && Wt('scroll', e)),
                  !u && B !== L && (u = []))
                : (u = u || []).push(y, L));
    }
    return (T && (Yw(T, v[oo]), (u = u || []).push(oo, T)), u);
  }
  function __(e, t, n, a, l) {
    n === 'input' && l.type === 'radio' && l.name != null && $(e, l);
    var u = qi(n, a),
      p = qi(n, l);
    switch ((C_(e, t, u, p), n)) {
      case 'input':
        q(e, l);
        break;
      case 'textarea':
        wy(e, l);
        break;
      case 'select':
        Cw(e, l);
        break;
    }
  }
  function D_(e) {
    {
      var t = e.toLowerCase();
      return (lc.hasOwnProperty(t) && lc[t]) || null;
    }
  }
  function O_(e, t, n, a, l, u, p) {
    var v, y;
    switch (((v = qi(t, n)), Nc(t, n), t)) {
      case 'dialog':
        (Wt('cancel', e), Wt('close', e));
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        Wt('load', e);
        break;
      case 'video':
      case 'audio':
        for (var C = 0; C < Ls.length; C++) Wt(Ls[C], e);
        break;
      case 'source':
        Wt('error', e);
        break;
      case 'img':
      case 'image':
      case 'link':
        (Wt('error', e), Wt('load', e));
        break;
      case 'details':
        Wt('toggle', e);
        break;
      case 'input':
        (A(e, n), Wt('invalid', e));
        break;
      case 'option':
        Vt(e, n);
        break;
      case 'select':
        (es(e, n), Wt('invalid', e));
        break;
      case 'textarea':
        (Ty(e, n), Wt('invalid', e));
        break;
    }
    jd(t, n);
    {
      y = new Set();
      for (var T = e.attributes, k = 0; k < T.length; k++) {
        var L = T[k].name.toLowerCase();
        switch (L) {
          case 'value':
            break;
          case 'checked':
            break;
          case 'selected':
            break;
          default:
            y.add(T[k].name);
        }
      }
    }
    var B = null;
    for (var Y in n)
      if (n.hasOwnProperty(Y)) {
        var X = n[Y];
        if (Y === io)
          typeof X == 'string'
            ? e.textContent !== X &&
              (n[gi] !== !0 && Uc(e.textContent, X, u, p), (B = [io, X]))
            : typeof X == 'number' &&
              e.textContent !== '' + X &&
              (n[gi] !== !0 && Uc(e.textContent, X, u, p), (B = [io, '' + X]));
        else if (at.hasOwnProperty(Y))
          X != null &&
            (typeof X != 'function' && Pc(Y, X),
            Y === 'onScroll' && Wt('scroll', e));
        else if (p && typeof v == 'boolean') {
          var we = void 0,
            He = v && ge ? null : vr(Y);
          if (n[gi] !== !0) {
            if (
              !(
                Y === Lc ||
                Y === gi ||
                Y === 'value' ||
                Y === 'checked' ||
                Y === 'selected'
              )
            ) {
              if (Y === Ps) {
                var Ne = e.innerHTML,
                  bt = X ? X[kc] : void 0;
                if (bt != null) {
                  var pt = pb(e, bt);
                  pt !== Ne && zs(Y, Ne, pt);
                }
              } else if (Y === oo) {
                if ((y.delete(Y), db)) {
                  var H = jw(X);
                  ((we = e.getAttribute('style')), H !== we && zs(Y, we, H));
                }
              } else if (v && !ge)
                (y.delete(Y.toLowerCase()),
                  (we = ni(e, Y, X)),
                  X !== we && zs(Y, we, X));
              else if (!Kt(Y, He, v) && !Ut(Y, X, He, v)) {
                var Q = !1;
                if (He !== null)
                  (y.delete(He.attributeName), (we = wa(e, Y, X, He)));
                else {
                  var I = a;
                  if ((I === Oa && (I = Fd(t)), I === Oa))
                    y.delete(Y.toLowerCase());
                  else {
                    var fe = D_(Y);
                    (fe !== null && fe !== Y && ((Q = !0), y.delete(fe)),
                      y.delete(Y));
                  }
                  we = ni(e, Y, X);
                }
                var Oe = ge;
                !Oe && X !== we && !Q && zs(Y, we, X);
              }
            }
          }
        }
      }
    switch ((p && y.size > 0 && n[gi] !== !0 && fb(y), t)) {
      case 'input':
        (_a(e), he(e, n, !0));
        break;
      case 'textarea':
        (_a(e), xy(e));
        break;
      case 'select':
      case 'option':
        break;
      default:
        typeof n.onClick == 'function' && Fc(e);
        break;
    }
    return B;
  }
  function A_(e, t, n) {
    var a = e.nodeValue !== t;
    return a;
  }
  function ev(e, t) {
    {
      if (sr) return;
      ((sr = !0),
        d(
          'Did not expect server HTML to contain a <%s> in <%s>.',
          t.nodeName.toLowerCase(),
          e.nodeName.toLowerCase()
        ));
    }
  }
  function tv(e, t) {
    {
      if (sr) return;
      ((sr = !0),
        d(
          'Did not expect server HTML to contain the text node "%s" in <%s>.',
          t.nodeValue,
          e.nodeName.toLowerCase()
        ));
    }
  }
  function nv(e, t, n) {
    {
      if (sr) return;
      ((sr = !0),
        d(
          'Expected server HTML to contain a matching <%s> in <%s>.',
          t,
          e.nodeName.toLowerCase()
        ));
    }
  }
  function rv(e, t) {
    {
      if (t === '' || sr) return;
      ((sr = !0),
        d(
          'Expected server HTML to contain a matching text node for "%s" in <%s>.',
          t,
          e.nodeName.toLowerCase()
        ));
    }
  }
  function M_(e, t, n) {
    switch (t) {
      case 'input':
        qe(e, n);
        return;
      case 'textarea':
        ww(e, n);
        return;
      case 'select':
        Tw(e, n);
        return;
    }
  }
  var Us = function () {},
    Fs = function () {};
  {
    var L_ = [
        'address',
        'applet',
        'area',
        'article',
        'aside',
        'base',
        'basefont',
        'bgsound',
        'blockquote',
        'body',
        'br',
        'button',
        'caption',
        'center',
        'col',
        'colgroup',
        'dd',
        'details',
        'dir',
        'div',
        'dl',
        'dt',
        'embed',
        'fieldset',
        'figcaption',
        'figure',
        'footer',
        'form',
        'frame',
        'frameset',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'head',
        'header',
        'hgroup',
        'hr',
        'html',
        'iframe',
        'img',
        'input',
        'isindex',
        'li',
        'link',
        'listing',
        'main',
        'marquee',
        'menu',
        'menuitem',
        'meta',
        'nav',
        'noembed',
        'noframes',
        'noscript',
        'object',
        'ol',
        'p',
        'param',
        'plaintext',
        'pre',
        'script',
        'section',
        'select',
        'source',
        'style',
        'summary',
        'table',
        'tbody',
        'td',
        'template',
        'textarea',
        'tfoot',
        'th',
        'thead',
        'title',
        'tr',
        'track',
        'ul',
        'wbr',
        'xmp',
      ],
      hb = [
        'applet',
        'caption',
        'html',
        'table',
        'td',
        'th',
        'marquee',
        'object',
        'template',
        'foreignObject',
        'desc',
        'title',
      ],
      k_ = hb.concat(['button']),
      N_ = ['dd', 'dt', 'li', 'option', 'optgroup', 'p', 'rp', 'rt'],
      mb = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null,
      };
    Fs = function (e, t) {
      var n = ct({}, e || mb),
        a = { tag: t };
      return (
        hb.indexOf(t) !== -1 &&
          ((n.aTagInScope = null),
          (n.buttonTagInScope = null),
          (n.nobrTagInScope = null)),
        k_.indexOf(t) !== -1 && (n.pTagInButtonScope = null),
        L_.indexOf(t) !== -1 &&
          t !== 'address' &&
          t !== 'div' &&
          t !== 'p' &&
          ((n.listItemTagAutoclosing = null), (n.dlItemTagAutoclosing = null)),
        (n.current = a),
        t === 'form' && (n.formTag = a),
        t === 'a' && (n.aTagInScope = a),
        t === 'button' && (n.buttonTagInScope = a),
        t === 'nobr' && (n.nobrTagInScope = a),
        t === 'p' && (n.pTagInButtonScope = a),
        t === 'li' && (n.listItemTagAutoclosing = a),
        (t === 'dd' || t === 'dt') && (n.dlItemTagAutoclosing = a),
        n
      );
    };
    var P_ = function (e, t) {
        switch (t) {
          case 'select':
            return e === 'option' || e === 'optgroup' || e === '#text';
          case 'optgroup':
            return e === 'option' || e === '#text';
          case 'option':
            return e === '#text';
          case 'tr':
            return (
              e === 'th' ||
              e === 'td' ||
              e === 'style' ||
              e === 'script' ||
              e === 'template'
            );
          case 'tbody':
          case 'thead':
          case 'tfoot':
            return (
              e === 'tr' || e === 'style' || e === 'script' || e === 'template'
            );
          case 'colgroup':
            return e === 'col' || e === 'template';
          case 'table':
            return (
              e === 'caption' ||
              e === 'colgroup' ||
              e === 'tbody' ||
              e === 'tfoot' ||
              e === 'thead' ||
              e === 'style' ||
              e === 'script' ||
              e === 'template'
            );
          case 'head':
            return (
              e === 'base' ||
              e === 'basefont' ||
              e === 'bgsound' ||
              e === 'link' ||
              e === 'meta' ||
              e === 'title' ||
              e === 'noscript' ||
              e === 'noframes' ||
              e === 'style' ||
              e === 'script' ||
              e === 'template'
            );
          case 'html':
            return e === 'head' || e === 'body' || e === 'frameset';
          case 'frameset':
            return e === 'frame';
          case '#document':
            return e === 'html';
        }
        switch (e) {
          case 'h1':
          case 'h2':
          case 'h3':
          case 'h4':
          case 'h5':
          case 'h6':
            return (
              t !== 'h1' &&
              t !== 'h2' &&
              t !== 'h3' &&
              t !== 'h4' &&
              t !== 'h5' &&
              t !== 'h6'
            );
          case 'rp':
          case 'rt':
            return N_.indexOf(t) === -1;
          case 'body':
          case 'caption':
          case 'col':
          case 'colgroup':
          case 'frameset':
          case 'frame':
          case 'head':
          case 'html':
          case 'tbody':
          case 'td':
          case 'tfoot':
          case 'th':
          case 'thead':
          case 'tr':
            return t == null;
        }
        return !0;
      },
      z_ = function (e, t) {
        switch (e) {
          case 'address':
          case 'article':
          case 'aside':
          case 'blockquote':
          case 'center':
          case 'details':
          case 'dialog':
          case 'dir':
          case 'div':
          case 'dl':
          case 'fieldset':
          case 'figcaption':
          case 'figure':
          case 'footer':
          case 'header':
          case 'hgroup':
          case 'main':
          case 'menu':
          case 'nav':
          case 'ol':
          case 'p':
          case 'section':
          case 'summary':
          case 'ul':
          case 'pre':
          case 'listing':
          case 'table':
          case 'hr':
          case 'xmp':
          case 'h1':
          case 'h2':
          case 'h3':
          case 'h4':
          case 'h5':
          case 'h6':
            return t.pTagInButtonScope;
          case 'form':
            return t.formTag || t.pTagInButtonScope;
          case 'li':
            return t.listItemTagAutoclosing;
          case 'dd':
          case 'dt':
            return t.dlItemTagAutoclosing;
          case 'button':
            return t.buttonTagInScope;
          case 'a':
            return t.aTagInScope;
          case 'nobr':
            return t.nobrTagInScope;
        }
        return null;
      },
      yb = {};
    Us = function (e, t, n) {
      n = n || mb;
      var a = n.current,
        l = a && a.tag;
      t != null &&
        (e != null &&
          d(
            'validateDOMNesting: when childText is passed, childTag should be null'
          ),
        (e = '#text'));
      var u = P_(e, l) ? null : a,
        p = u ? null : z_(e, n),
        v = u || p;
      if (v) {
        var y = v.tag,
          C = !!u + '|' + e + '|' + y;
        if (!yb[C]) {
          yb[C] = !0;
          var T = e,
            k = '';
          if (
            (e === '#text'
              ? /\S/.test(t)
                ? (T = 'Text nodes')
                : ((T = 'Whitespace text nodes'),
                  (k =
                    " Make sure you don't have any extra whitespace between tags on each line of your source code."))
              : (T = '<' + e + '>'),
            u)
          ) {
            var L = '';
            (y === 'table' &&
              e === 'tr' &&
              (L +=
                ' Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser.'),
              d(
                'validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s',
                T,
                y,
                k,
                L
              ));
          } else
            d(
              'validateDOMNesting(...): %s cannot appear as a descendant of <%s>.',
              T,
              y
            );
        }
      }
    };
  }
  var Vc = 'suppressHydrationWarning',
    Hc = '$',
    Ic = '/$',
    Vs = '$?',
    Hs = '$!',
    U_ = 'style',
    av = null,
    iv = null;
  function F_(e) {
    var t,
      n,
      a = e.nodeType;
    switch (a) {
      case Ma:
      case Hd: {
        t = a === Ma ? '#document' : '#fragment';
        var l = e.documentElement;
        n = l ? l.namespaceURI : Vd(null, '');
        break;
      }
      default: {
        var u = a === cn ? e.parentNode : e,
          p = u.namespaceURI || null;
        ((t = u.tagName), (n = Vd(p, t)));
        break;
      }
    }
    {
      var v = t.toLowerCase(),
        y = Fs(null, v);
      return { namespace: n, ancestorInfo: y };
    }
  }
  function V_(e, t, n) {
    {
      var a = e,
        l = Vd(a.namespace, t),
        u = Fs(a.ancestorInfo, t);
      return { namespace: l, ancestorInfo: u };
    }
  }
  function Az(e) {
    return e;
  }
  function H_(e) {
    ((av = UR()), (iv = e_()));
    var t = null;
    return (xg(!1), t);
  }
  function I_(e) {
    (t_(iv), xg(av), (av = null), (iv = null));
  }
  function B_(e, t, n, a, l) {
    var u;
    {
      var p = a;
      if (
        (Us(e, null, p.ancestorInfo),
        typeof t.children == 'string' || typeof t.children == 'number')
      ) {
        var v = '' + t.children,
          y = Fs(p.ancestorInfo, e);
        Us(null, v, y);
      }
      u = p.namespace;
    }
    var C = T_(e, t, n, u);
    return (js(l, C), pv(C, t), C);
  }
  function j_(e, t) {
    e.appendChild(t);
  }
  function $_(e, t, n, a, l) {
    switch ((x_(e, t, n, a), t)) {
      case 'button':
      case 'input':
      case 'select':
      case 'textarea':
        return !!n.autoFocus;
      case 'img':
        return !0;
      default:
        return !1;
    }
  }
  function Y_(e, t, n, a, l, u) {
    {
      var p = u;
      if (
        typeof a.children != typeof n.children &&
        (typeof a.children == 'string' || typeof a.children == 'number')
      ) {
        var v = '' + a.children,
          y = Fs(p.ancestorInfo, t);
        Us(null, v, y);
      }
    }
    return R_(e, t, n, a);
  }
  function ov(e, t) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  function G_(e, t, n, a) {
    {
      var l = n;
      Us(null, e, l.ancestorInfo);
    }
    var u = w_(e, t);
    return (js(a, u), u);
  }
  function W_() {
    var e = window.event;
    return e === void 0 ? Fa : Rg(e.type);
  }
  var lv = typeof setTimeout == 'function' ? setTimeout : void 0,
    q_ = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    sv = -1,
    gb = typeof Promise == 'function' ? Promise : void 0,
    X_ =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof gb < 'u'
          ? function (e) {
              return gb.resolve(null).then(e).catch(Q_);
            }
          : lv;
  function Q_(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function K_(e, t, n, a) {
    switch (t) {
      case 'button':
      case 'input':
      case 'select':
      case 'textarea':
        n.autoFocus && e.focus();
        return;
      case 'img': {
        n.src && (e.src = n.src);
        return;
      }
    }
  }
  function J_(e, t, n, a, l, u) {
    (__(e, t, n, a, l), pv(e, l));
  }
  function bb(e) {
    oc(e, '');
  }
  function Z_(e, t, n) {
    e.nodeValue = n;
  }
  function eD(e, t) {
    e.appendChild(t);
  }
  function tD(e, t) {
    var n;
    e.nodeType === cn
      ? ((n = e.parentNode), n.insertBefore(t, e))
      : ((n = e), n.appendChild(t));
    var a = e._reactRootContainer;
    a == null && n.onclick === null && Fc(n);
  }
  function nD(e, t, n) {
    e.insertBefore(t, n);
  }
  function rD(e, t, n) {
    e.nodeType === cn ? e.parentNode.insertBefore(t, n) : e.insertBefore(t, n);
  }
  function aD(e, t) {
    e.removeChild(t);
  }
  function iD(e, t) {
    e.nodeType === cn ? e.parentNode.removeChild(t) : e.removeChild(t);
  }
  function uv(e, t) {
    var n = t,
      a = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === cn)) {
        var u = l.data;
        if (u === Ic)
          if (a === 0) {
            (e.removeChild(l), Cs(t));
            return;
          } else a--;
        else (u === Hc || u === Vs || u === Hs) && a++;
      }
      n = l;
    } while (n);
    Cs(t);
  }
  function oD(e, t) {
    (e.nodeType === cn ? uv(e.parentNode, t) : e.nodeType === lr && uv(e, t),
      Cs(e));
  }
  function lD(e) {
    e = e;
    var t = e.style;
    typeof t.setProperty == 'function'
      ? t.setProperty('display', 'none', 'important')
      : (t.display = 'none');
  }
  function sD(e) {
    e.nodeValue = '';
  }
  function uD(e, t) {
    e = e;
    var n = t[U_],
      a = n != null && n.hasOwnProperty('display') ? n.display : null;
    e.style.display = Id('display', a);
  }
  function cD(e, t) {
    e.nodeValue = t;
  }
  function fD(e) {
    e.nodeType === lr
      ? (e.textContent = '')
      : e.nodeType === Ma &&
        e.documentElement &&
        e.removeChild(e.documentElement);
  }
  function dD(e, t, n) {
    return e.nodeType !== lr || t.toLowerCase() !== e.nodeName.toLowerCase()
      ? null
      : e;
  }
  function pD(e, t) {
    return t === '' || e.nodeType !== Aa ? null : e;
  }
  function vD(e) {
    return e.nodeType !== cn ? null : e;
  }
  function Sb(e) {
    return e.data === Vs;
  }
  function cv(e) {
    return e.data === Hs;
  }
  function hD(e) {
    var t = e.nextSibling && e.nextSibling.dataset,
      n,
      a,
      l;
    return (
      t && ((n = t.dgst), (a = t.msg), (l = t.stck)),
      { message: a, digest: n, stack: l }
    );
  }
  function mD(e, t) {
    e._reactRetry = t;
  }
  function Bc(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === lr || t === Aa) break;
      if (t === cn) {
        var n = e.data;
        if (n === Hc || n === Hs || n === Vs) break;
        if (n === Ic) return null;
      }
    }
    return e;
  }
  function Is(e) {
    return Bc(e.nextSibling);
  }
  function yD(e) {
    return Bc(e.firstChild);
  }
  function gD(e) {
    return Bc(e.firstChild);
  }
  function bD(e) {
    return Bc(e.nextSibling);
  }
  function SD(e, t, n, a, l, u, p) {
    (js(u, e), pv(e, n));
    var v;
    {
      var y = l;
      v = y.namespace;
    }
    var C = (u.mode & yt) !== Be;
    return O_(e, t, n, v, a, C, p);
  }
  function ED(e, t, n, a) {
    return (js(n, e), n.mode & yt, A_(e, t));
  }
  function CD(e, t) {
    js(t, e);
  }
  function TD(e) {
    for (var t = e.nextSibling, n = 0; t; ) {
      if (t.nodeType === cn) {
        var a = t.data;
        if (a === Ic) {
          if (n === 0) return Is(t);
          n--;
        } else (a === Hc || a === Hs || a === Vs) && n++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Eb(e) {
    for (var t = e.previousSibling, n = 0; t; ) {
      if (t.nodeType === cn) {
        var a = t.data;
        if (a === Hc || a === Hs || a === Vs) {
          if (n === 0) return t;
          n--;
        } else a === Ic && n++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function wD(e) {
    Cs(e);
  }
  function xD(e) {
    Cs(e);
  }
  function RD(e) {
    return e !== 'head' && e !== 'body';
  }
  function _D(e, t, n, a) {
    var l = !0;
    Uc(t.nodeValue, n, a, l);
  }
  function DD(e, t, n, a, l, u) {
    if (t[Vc] !== !0) {
      var p = !0;
      Uc(a.nodeValue, l, u, p);
    }
  }
  function OD(e, t) {
    t.nodeType === lr ? ev(e, t) : t.nodeType === cn || tv(e, t);
  }
  function AD(e, t) {
    {
      var n = e.parentNode;
      n !== null &&
        (t.nodeType === lr ? ev(n, t) : t.nodeType === cn || tv(n, t));
    }
  }
  function MD(e, t, n, a, l) {
    (l || t[Vc] !== !0) &&
      (a.nodeType === lr ? ev(n, a) : a.nodeType === cn || tv(n, a));
  }
  function LD(e, t, n) {
    nv(e, t);
  }
  function kD(e, t) {
    rv(e, t);
  }
  function ND(e, t, n) {
    {
      var a = e.parentNode;
      a !== null && nv(a, t);
    }
  }
  function PD(e, t) {
    {
      var n = e.parentNode;
      n !== null && rv(n, t);
    }
  }
  function zD(e, t, n, a, l, u) {
    (u || t[Vc] !== !0) && nv(n, a);
  }
  function UD(e, t, n, a, l) {
    (l || t[Vc] !== !0) && rv(n, a);
  }
  function FD(e) {
    d(
      'An error occurred during hydration. The server HTML was replaced with client content in <%s>.',
      e.nodeName.toLowerCase()
    );
  }
  function VD(e) {
    ks(e);
  }
  var nl = Math.random().toString(36).slice(2),
    rl = '__reactFiber$' + nl,
    fv = '__reactProps$' + nl,
    Bs = '__reactContainer$' + nl,
    dv = '__reactEvents$' + nl,
    HD = '__reactListeners$' + nl,
    ID = '__reactHandles$' + nl;
  function BD(e) {
    (delete e[rl], delete e[fv], delete e[dv], delete e[HD], delete e[ID]);
  }
  function js(e, t) {
    t[rl] = e;
  }
  function jc(e, t) {
    t[Bs] = e;
  }
  function Cb(e) {
    e[Bs] = null;
  }
  function $s(e) {
    return !!e[Bs];
  }
  function lo(e) {
    var t = e[rl];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (((t = n[Bs] || n[rl]), t)) {
        var a = t.alternate;
        if (t.child !== null || (a !== null && a.child !== null))
          for (var l = Eb(e); l !== null; ) {
            var u = l[rl];
            if (u) return u;
            l = Eb(l);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function bi(e) {
    var t = e[rl] || e[Bs];
    return t && (t.tag === O || t.tag === D || t.tag === V || t.tag === S)
      ? t
      : null;
  }
  function al(e) {
    if (e.tag === O || e.tag === D) return e.stateNode;
    throw new Error('getNodeFromInstance: Invalid argument.');
  }
  function $c(e) {
    return e[fv] || null;
  }
  function pv(e, t) {
    e[fv] = t;
  }
  function jD(e) {
    var t = e[dv];
    return (t === void 0 && (t = e[dv] = new Set()), t);
  }
  var Tb = {},
    wb = o.ReactDebugCurrentFrame;
  function Yc(e) {
    if (e) {
      var t = e._owner,
        n = li(e.type, e._source, t ? t.type : null);
      wb.setExtraStackFrame(n);
    } else wb.setExtraStackFrame(null);
  }
  function jr(e, t, n, a, l) {
    {
      var u = Function.call.bind(dt);
      for (var p in e)
        if (u(e, p)) {
          var v = void 0;
          try {
            if (typeof e[p] != 'function') {
              var y = Error(
                (a || 'React class') +
                  ': ' +
                  n +
                  ' type `' +
                  p +
                  '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                  typeof e[p] +
                  '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
              );
              throw ((y.name = 'Invariant Violation'), y);
            }
            v = e[p](
              t,
              p,
              a,
              n,
              null,
              'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
            );
          } catch (C) {
            v = C;
          }
          (v &&
            !(v instanceof Error) &&
            (Yc(l),
            d(
              '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
              a || 'React class',
              n,
              p,
              typeof v
            ),
            Yc(null)),
            v instanceof Error &&
              !(v.message in Tb) &&
              ((Tb[v.message] = !0),
              Yc(l),
              d('Failed %s type: %s', n, v.message),
              Yc(null)));
        }
    }
  }
  var vv = [],
    Gc;
  Gc = [];
  var Va = -1;
  function Si(e) {
    return { current: e };
  }
  function Yn(e, t) {
    if (Va < 0) {
      d('Unexpected pop.');
      return;
    }
    (t !== Gc[Va] && d('Unexpected Fiber popped.'),
      (e.current = vv[Va]),
      (vv[Va] = null),
      (Gc[Va] = null),
      Va--);
  }
  function Gn(e, t, n) {
    (Va++, (vv[Va] = e.current), (Gc[Va] = n), (e.current = t));
  }
  var hv;
  hv = {};
  var Cr = {};
  Object.freeze(Cr);
  var Ha = Si(Cr),
    ca = Si(!1),
    mv = Cr;
  function il(e, t, n) {
    return n && fa(t) ? mv : Ha.current;
  }
  function xb(e, t, n) {
    {
      var a = e.stateNode;
      ((a.__reactInternalMemoizedUnmaskedChildContext = t),
        (a.__reactInternalMemoizedMaskedChildContext = n));
    }
  }
  function ol(e, t) {
    {
      var n = e.type,
        a = n.contextTypes;
      if (!a) return Cr;
      var l = e.stateNode;
      if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
        return l.__reactInternalMemoizedMaskedChildContext;
      var u = {};
      for (var p in a) u[p] = t[p];
      {
        var v = lt(e) || 'Unknown';
        jr(a, u, 'context', v);
      }
      return (l && xb(e, t, u), u);
    }
  }
  function Wc() {
    return ca.current;
  }
  function fa(e) {
    {
      var t = e.childContextTypes;
      return t != null;
    }
  }
  function qc(e) {
    (Yn(ca, e), Yn(Ha, e));
  }
  function yv(e) {
    (Yn(ca, e), Yn(Ha, e));
  }
  function Rb(e, t, n) {
    {
      if (Ha.current !== Cr)
        throw new Error(
          'Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.'
        );
      (Gn(Ha, t, e), Gn(ca, n, e));
    }
  }
  function _b(e, t, n) {
    {
      var a = e.stateNode,
        l = t.childContextTypes;
      if (typeof a.getChildContext != 'function') {
        {
          var u = lt(e) || 'Unknown';
          hv[u] ||
            ((hv[u] = !0),
            d(
              '%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.',
              u,
              u
            ));
        }
        return n;
      }
      var p = a.getChildContext();
      for (var v in p)
        if (!(v in l))
          throw new Error(
            (lt(e) || 'Unknown') +
              '.getChildContext(): key "' +
              v +
              '" is not defined in childContextTypes.'
          );
      {
        var y = lt(e) || 'Unknown';
        jr(l, p, 'child context', y);
      }
      return ct({}, n, p);
    }
  }
  function Xc(e) {
    {
      var t = e.stateNode,
        n = (t && t.__reactInternalMemoizedMergedChildContext) || Cr;
      return ((mv = Ha.current), Gn(Ha, n, e), Gn(ca, ca.current, e), !0);
    }
  }
  function Db(e, t, n) {
    {
      var a = e.stateNode;
      if (!a)
        throw new Error(
          'Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.'
        );
      if (n) {
        var l = _b(e, t, mv);
        ((a.__reactInternalMemoizedMergedChildContext = l),
          Yn(ca, e),
          Yn(Ha, e),
          Gn(Ha, l, e),
          Gn(ca, n, e));
      } else (Yn(ca, e), Gn(ca, n, e));
    }
  }
  function $D(e) {
    {
      if (!Rx(e) || e.tag !== g)
        throw new Error(
          'Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.'
        );
      var t = e;
      do {
        switch (t.tag) {
          case S:
            return t.stateNode.context;
          case g: {
            var n = t.type;
            if (fa(n))
              return t.stateNode.__reactInternalMemoizedMergedChildContext;
            break;
          }
        }
        t = t.return;
      } while (t !== null);
      throw new Error(
        'Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.'
      );
    }
  }
  var Ei = 0,
    Qc = 1,
    Ia = null,
    gv = !1,
    bv = !1;
  function Ob(e) {
    Ia === null ? (Ia = [e]) : Ia.push(e);
  }
  function YD(e) {
    ((gv = !0), Ob(e));
  }
  function Ab() {
    gv && Ci();
  }
  function Ci() {
    if (!bv && Ia !== null) {
      bv = !0;
      var e = 0,
        t = Br();
      try {
        var n = !0,
          a = Ia;
        for (An(br); e < a.length; e++) {
          var l = a[e];
          do l = l(n);
          while (l !== null);
        }
        ((Ia = null), (gv = !1));
      } catch (u) {
        throw (Ia !== null && (Ia = Ia.slice(e + 1)), eg(dc, Ci), u);
      } finally {
        (An(t), (bv = !1));
      }
    }
    return null;
  }
  var ll = [],
    sl = 0,
    Kc = null,
    Jc = 0,
    Ar = [],
    Mr = 0,
    so = null,
    Ba = 1,
    ja = '';
  function GD(e) {
    return (co(), (e.flags & Gy) !== Ge);
  }
  function WD(e) {
    return (co(), Jc);
  }
  function qD() {
    var e = ja,
      t = Ba,
      n = t & ~XD(t);
    return n.toString(32) + e;
  }
  function uo(e, t) {
    (co(), (ll[sl++] = Jc), (ll[sl++] = Kc), (Kc = e), (Jc = t));
  }
  function Mb(e, t, n) {
    (co(), (Ar[Mr++] = Ba), (Ar[Mr++] = ja), (Ar[Mr++] = so), (so = e));
    var a = Ba,
      l = ja,
      u = Zc(a) - 1,
      p = a & ~(1 << u),
      v = n + 1,
      y = Zc(t) + u;
    if (y > 30) {
      var C = u - (u % 5),
        T = (1 << C) - 1,
        k = (p & T).toString(32),
        L = p >> C,
        B = u - C,
        Y = Zc(t) + B,
        X = v << B,
        we = X | L,
        He = k + l;
      ((Ba = (1 << Y) | we), (ja = He));
    } else {
      var Ne = v << u,
        bt = Ne | p,
        pt = l;
      ((Ba = (1 << y) | bt), (ja = pt));
    }
  }
  function Sv(e) {
    co();
    var t = e.return;
    if (t !== null) {
      var n = 1,
        a = 0;
      (uo(e, n), Mb(e, n, a));
    }
  }
  function Zc(e) {
    return 32 - og(e);
  }
  function XD(e) {
    return 1 << (Zc(e) - 1);
  }
  function Ev(e) {
    for (; e === Kc; )
      ((Kc = ll[--sl]), (ll[sl] = null), (Jc = ll[--sl]), (ll[sl] = null));
    for (; e === so; )
      ((so = Ar[--Mr]),
        (Ar[Mr] = null),
        (ja = Ar[--Mr]),
        (Ar[Mr] = null),
        (Ba = Ar[--Mr]),
        (Ar[Mr] = null));
  }
  function QD() {
    return (co(), so !== null ? { id: Ba, overflow: ja } : null);
  }
  function KD(e, t) {
    (co(),
      (Ar[Mr++] = Ba),
      (Ar[Mr++] = ja),
      (Ar[Mr++] = so),
      (Ba = t.id),
      (ja = t.overflow),
      (so = e));
  }
  function co() {
    Nn() ||
      d(
        'Expected to be hydrating. This is a bug in React. Please file an issue.'
      );
  }
  var kn = null,
    Lr = null,
    $r = !1,
    fo = !1,
    Ti = null;
  function JD() {
    $r &&
      d(
        'We should not be hydrating here. This is a bug in React. Please file a bug.'
      );
  }
  function Lb() {
    fo = !0;
  }
  function ZD() {
    return fo;
  }
  function eO(e) {
    var t = e.stateNode.containerInfo;
    return ((Lr = gD(t)), (kn = e), ($r = !0), (Ti = null), (fo = !1), !0);
  }
  function tO(e, t, n) {
    return (
      (Lr = bD(t)),
      (kn = e),
      ($r = !0),
      (Ti = null),
      (fo = !1),
      n !== null && KD(e, n),
      !0
    );
  }
  function kb(e, t) {
    switch (e.tag) {
      case S: {
        OD(e.stateNode.containerInfo, t);
        break;
      }
      case O: {
        var n = (e.mode & yt) !== Be;
        MD(e.type, e.memoizedProps, e.stateNode, t, n);
        break;
      }
      case V: {
        var a = e.memoizedState;
        a.dehydrated !== null && AD(a.dehydrated, t);
        break;
      }
    }
  }
  function Nb(e, t) {
    kb(e, t);
    var n = iM();
    ((n.stateNode = t), (n.return = e));
    var a = e.deletions;
    a === null ? ((e.deletions = [n]), (e.flags |= Xi)) : a.push(n);
  }
  function Cv(e, t) {
    {
      if (fo) return;
      switch (e.tag) {
        case S: {
          var n = e.stateNode.containerInfo;
          switch (t.tag) {
            case O:
              var a = t.type;
              (t.pendingProps, LD(n, a));
              break;
            case D:
              var l = t.pendingProps;
              kD(n, l);
              break;
          }
          break;
        }
        case O: {
          var u = e.type,
            p = e.memoizedProps,
            v = e.stateNode;
          switch (t.tag) {
            case O: {
              var y = t.type,
                C = t.pendingProps,
                T = (e.mode & yt) !== Be;
              zD(u, p, v, y, C, T);
              break;
            }
            case D: {
              var k = t.pendingProps,
                L = (e.mode & yt) !== Be;
              UD(u, p, v, k, L);
              break;
            }
          }
          break;
        }
        case V: {
          var B = e.memoizedState,
            Y = B.dehydrated;
          if (Y !== null)
            switch (t.tag) {
              case O:
                var X = t.type;
                (t.pendingProps, ND(Y, X));
                break;
              case D:
                var we = t.pendingProps;
                PD(Y, we);
                break;
            }
          break;
        }
        default:
          return;
      }
    }
  }
  function Pb(e, t) {
    ((t.flags = (t.flags & ~ka) | fn), Cv(e, t));
  }
  function zb(e, t) {
    switch (e.tag) {
      case O: {
        var n = e.type;
        e.pendingProps;
        var a = dD(t, n);
        return a !== null
          ? ((e.stateNode = a), (kn = e), (Lr = yD(a)), !0)
          : !1;
      }
      case D: {
        var l = e.pendingProps,
          u = pD(t, l);
        return u !== null ? ((e.stateNode = u), (kn = e), (Lr = null), !0) : !1;
      }
      case V: {
        var p = vD(t);
        if (p !== null) {
          var v = { dehydrated: p, treeContext: QD(), retryLane: yr };
          e.memoizedState = v;
          var y = oM(p);
          return ((y.return = e), (e.child = y), (kn = e), (Lr = null), !0);
        }
        return !1;
      }
      default:
        return !1;
    }
  }
  function Tv(e) {
    return (e.mode & yt) !== Be && (e.flags & Dt) === Ge;
  }
  function wv(e) {
    throw new Error(
      'Hydration failed because the initial UI does not match what was rendered on the server.'
    );
  }
  function xv(e) {
    if ($r) {
      var t = Lr;
      if (!t) {
        (Tv(e) && (Cv(kn, e), wv()), Pb(kn, e), ($r = !1), (kn = e));
        return;
      }
      var n = t;
      if (!zb(e, t)) {
        (Tv(e) && (Cv(kn, e), wv()), (t = Is(n)));
        var a = kn;
        if (!t || !zb(e, t)) {
          (Pb(kn, e), ($r = !1), (kn = e));
          return;
        }
        Nb(a, n);
      }
    }
  }
  function nO(e, t, n) {
    var a = e.stateNode,
      l = !fo,
      u = SD(a, e.type, e.memoizedProps, t, n, e, l);
    return ((e.updateQueue = u), u !== null);
  }
  function rO(e) {
    var t = e.stateNode,
      n = e.memoizedProps,
      a = ED(t, n, e);
    if (a) {
      var l = kn;
      if (l !== null)
        switch (l.tag) {
          case S: {
            var u = l.stateNode.containerInfo,
              p = (l.mode & yt) !== Be;
            _D(u, t, n, p);
            break;
          }
          case O: {
            var v = l.type,
              y = l.memoizedProps,
              C = l.stateNode,
              T = (l.mode & yt) !== Be;
            DD(v, y, C, t, n, T);
            break;
          }
        }
    }
    return a;
  }
  function aO(e) {
    var t = e.memoizedState,
      n = t !== null ? t.dehydrated : null;
    if (!n)
      throw new Error(
        'Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.'
      );
    CD(n, e);
  }
  function iO(e) {
    var t = e.memoizedState,
      n = t !== null ? t.dehydrated : null;
    if (!n)
      throw new Error(
        'Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.'
      );
    return TD(n);
  }
  function Ub(e) {
    for (
      var t = e.return;
      t !== null && t.tag !== O && t.tag !== S && t.tag !== V;

    )
      t = t.return;
    kn = t;
  }
  function ef(e) {
    if (e !== kn) return !1;
    if (!$r) return (Ub(e), ($r = !0), !1);
    if (
      e.tag !== S &&
      (e.tag !== O || (RD(e.type) && !ov(e.type, e.memoizedProps)))
    ) {
      var t = Lr;
      if (t)
        if (Tv(e)) (Fb(e), wv());
        else for (; t; ) (Nb(e, t), (t = Is(t)));
    }
    return (
      Ub(e),
      e.tag === V ? (Lr = iO(e)) : (Lr = kn ? Is(e.stateNode) : null),
      !0
    );
  }
  function oO() {
    return $r && Lr !== null;
  }
  function Fb(e) {
    for (var t = Lr; t; ) (kb(e, t), (t = Is(t)));
  }
  function ul() {
    ((kn = null), (Lr = null), ($r = !1), (fo = !1));
  }
  function Vb() {
    Ti !== null && (LE(Ti), (Ti = null));
  }
  function Nn() {
    return $r;
  }
  function Rv(e) {
    Ti === null ? (Ti = [e]) : Ti.push(e);
  }
  var lO = o.ReactCurrentBatchConfig,
    sO = null;
  function uO() {
    return lO.transition;
  }
  var Yr = {
    recordUnsafeLifecycleWarnings: function (e, t) {},
    flushPendingUnsafeLifecycleWarnings: function () {},
    recordLegacyContextWarning: function (e, t) {},
    flushLegacyContextWarning: function () {},
    discardPendingWarnings: function () {},
  };
  {
    var cO = function (e) {
        for (var t = null, n = e; n !== null; )
          (n.mode & an && (t = n), (n = n.return));
        return t;
      },
      po = function (e) {
        var t = [];
        return (
          e.forEach(function (n) {
            t.push(n);
          }),
          t.sort().join(', ')
        );
      },
      Ys = [],
      Gs = [],
      Ws = [],
      qs = [],
      Xs = [],
      Qs = [],
      vo = new Set();
    ((Yr.recordUnsafeLifecycleWarnings = function (e, t) {
      vo.has(e.type) ||
        (typeof t.componentWillMount == 'function' &&
          t.componentWillMount.__suppressDeprecationWarning !== !0 &&
          Ys.push(e),
        e.mode & an &&
          typeof t.UNSAFE_componentWillMount == 'function' &&
          Gs.push(e),
        typeof t.componentWillReceiveProps == 'function' &&
          t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 &&
          Ws.push(e),
        e.mode & an &&
          typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
          qs.push(e),
        typeof t.componentWillUpdate == 'function' &&
          t.componentWillUpdate.__suppressDeprecationWarning !== !0 &&
          Xs.push(e),
        e.mode & an &&
          typeof t.UNSAFE_componentWillUpdate == 'function' &&
          Qs.push(e));
    }),
      (Yr.flushPendingUnsafeLifecycleWarnings = function () {
        var e = new Set();
        Ys.length > 0 &&
          (Ys.forEach(function (L) {
            (e.add(lt(L) || 'Component'), vo.add(L.type));
          }),
          (Ys = []));
        var t = new Set();
        Gs.length > 0 &&
          (Gs.forEach(function (L) {
            (t.add(lt(L) || 'Component'), vo.add(L.type));
          }),
          (Gs = []));
        var n = new Set();
        Ws.length > 0 &&
          (Ws.forEach(function (L) {
            (n.add(lt(L) || 'Component'), vo.add(L.type));
          }),
          (Ws = []));
        var a = new Set();
        qs.length > 0 &&
          (qs.forEach(function (L) {
            (a.add(lt(L) || 'Component'), vo.add(L.type));
          }),
          (qs = []));
        var l = new Set();
        Xs.length > 0 &&
          (Xs.forEach(function (L) {
            (l.add(lt(L) || 'Component'), vo.add(L.type));
          }),
          (Xs = []));
        var u = new Set();
        if (
          (Qs.length > 0 &&
            (Qs.forEach(function (L) {
              (u.add(lt(L) || 'Component'), vo.add(L.type));
            }),
            (Qs = [])),
          t.size > 0)
        ) {
          var p = po(t);
          d(
            `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
            p
          );
        }
        if (a.size > 0) {
          var v = po(a);
          d(
            `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`,
            v
          );
        }
        if (u.size > 0) {
          var y = po(u);
          d(
            `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
            y
          );
        }
        if (e.size > 0) {
          var C = po(e);
          f(
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
            C
          );
        }
        if (n.size > 0) {
          var T = po(n);
          f(
            `componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
            T
          );
        }
        if (l.size > 0) {
          var k = po(l);
          f(
            `componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
            k
          );
        }
      }));
    var tf = new Map(),
      Hb = new Set();
    ((Yr.recordLegacyContextWarning = function (e, t) {
      var n = cO(e);
      if (n === null) {
        d(
          'Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.'
        );
        return;
      }
      if (!Hb.has(e.type)) {
        var a = tf.get(n);
        (e.type.contextTypes != null ||
          e.type.childContextTypes != null ||
          (t !== null && typeof t.getChildContext == 'function')) &&
          (a === void 0 && ((a = []), tf.set(n, a)), a.push(e));
      }
    }),
      (Yr.flushLegacyContextWarning = function () {
        tf.forEach(function (e, t) {
          if (e.length !== 0) {
            var n = e[0],
              a = new Set();
            e.forEach(function (u) {
              (a.add(lt(u) || 'Component'), Hb.add(u.type));
            });
            var l = po(a);
            try {
              (Jt(n),
                d(
                  `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`,
                  l
                ));
            } finally {
              Rn();
            }
          }
        });
      }),
      (Yr.discardPendingWarnings = function () {
        ((Ys = []),
          (Gs = []),
          (Ws = []),
          (qs = []),
          (Xs = []),
          (Qs = []),
          (tf = new Map()));
      }));
  }
  var _v,
    Dv,
    Ov,
    Av,
    Mv,
    Ib = function (e, t) {};
  ((_v = !1),
    (Dv = !1),
    (Ov = {}),
    (Av = {}),
    (Mv = {}),
    (Ib = function (e, t) {
      if (
        !(e === null || typeof e != 'object') &&
        !(!e._store || e._store.validated || e.key != null)
      ) {
        if (typeof e._store != 'object')
          throw new Error(
            'React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.'
          );
        e._store.validated = !0;
        var n = lt(t) || 'Component';
        Av[n] ||
          ((Av[n] = !0),
          d(
            'Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'
          ));
      }
    }));
  function fO(e) {
    return e.prototype && e.prototype.isReactComponent;
  }
  function Ks(e, t, n) {
    var a = n.ref;
    if (a !== null && typeof a != 'function' && typeof a != 'object') {
      if (
        (e.mode & an || Te) &&
        !(n._owner && n._self && n._owner.stateNode !== n._self) &&
        !(n._owner && n._owner.tag !== g) &&
        !(typeof n.type == 'function' && !fO(n.type)) &&
        n._owner
      ) {
        var l = lt(e) || 'Component';
        Ov[l] ||
          (d(
            'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
            l,
            a
          ),
          (Ov[l] = !0));
      }
      if (n._owner) {
        var u = n._owner,
          p;
        if (u) {
          var v = u;
          if (v.tag !== g)
            throw new Error(
              'Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref'
            );
          p = v.stateNode;
        }
        if (!p)
          throw new Error(
            'Missing owner for string ref ' +
              a +
              '. This error is likely caused by a bug in React. Please file an issue.'
          );
        var y = p;
        R(a, 'ref');
        var C = '' + a;
        if (
          t !== null &&
          t.ref !== null &&
          typeof t.ref == 'function' &&
          t.ref._stringRef === C
        )
          return t.ref;
        var T = function (k) {
          var L = y.refs;
          k === null ? delete L[C] : (L[C] = k);
        };
        return ((T._stringRef = C), T);
      } else {
        if (typeof a != 'string')
          throw new Error(
            'Expected ref to be a function, a string, an object returned by React.createRef(), or null.'
          );
        if (!n._owner)
          throw new Error(
            'Element ref was specified as a string (' +
              a +
              `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`
          );
      }
    }
    return a;
  }
  function nf(e, t) {
    var n = Object.prototype.toString.call(t);
    throw new Error(
      'Objects are not valid as a React child (found: ' +
        (n === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : n) +
        '). If you meant to render a collection of children, use an array instead.'
    );
  }
  function rf(e) {
    {
      var t = lt(e) || 'Component';
      if (Mv[t]) return;
      ((Mv[t] = !0),
        d(
          'Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.'
        ));
    }
  }
  function Bb(e) {
    var t = e._payload,
      n = e._init;
    return n(t);
  }
  function jb(e) {
    function t(H, Q) {
      if (e) {
        var I = H.deletions;
        I === null ? ((H.deletions = [Q]), (H.flags |= Xi)) : I.push(Q);
      }
    }
    function n(H, Q) {
      if (!e) return null;
      for (var I = Q; I !== null; ) (t(H, I), (I = I.sibling));
      return null;
    }
    function a(H, Q) {
      for (var I = new Map(), fe = Q; fe !== null; )
        (fe.key !== null ? I.set(fe.key, fe) : I.set(fe.index, fe),
          (fe = fe.sibling));
      return I;
    }
    function l(H, Q) {
      var I = To(H, Q);
      return ((I.index = 0), (I.sibling = null), I);
    }
    function u(H, Q, I) {
      if (((H.index = I), !e)) return ((H.flags |= Gy), Q);
      var fe = H.alternate;
      if (fe !== null) {
        var Oe = fe.index;
        return Oe < Q ? ((H.flags |= fn), Q) : Oe;
      } else return ((H.flags |= fn), Q);
    }
    function p(H) {
      return (e && H.alternate === null && (H.flags |= fn), H);
    }
    function v(H, Q, I, fe) {
      if (Q === null || Q.tag !== D) {
        var Oe = Rm(I, H.mode, fe);
        return ((Oe.return = H), Oe);
      } else {
        var xe = l(Q, I);
        return ((xe.return = H), xe);
      }
    }
    function y(H, Q, I, fe) {
      var Oe = I.type;
      if (Oe === aa) return T(H, Q, I.props.children, fe, I.key);
      if (
        Q !== null &&
        (Q.elementType === Oe ||
          qE(Q, I) ||
          (typeof Oe == 'object' &&
            Oe !== null &&
            Oe.$$typeof === Ye &&
            Bb(Oe) === Q.type))
      ) {
        var xe = l(Q, I.props);
        return (
          (xe.ref = Ks(H, Q, I)),
          (xe.return = H),
          (xe._debugSource = I._source),
          (xe._debugOwner = I._owner),
          xe
        );
      }
      var Xe = xm(I, H.mode, fe);
      return ((Xe.ref = Ks(H, Q, I)), (Xe.return = H), Xe);
    }
    function C(H, Q, I, fe) {
      if (
        Q === null ||
        Q.tag !== w ||
        Q.stateNode.containerInfo !== I.containerInfo ||
        Q.stateNode.implementation !== I.implementation
      ) {
        var Oe = _m(I, H.mode, fe);
        return ((Oe.return = H), Oe);
      } else {
        var xe = l(Q, I.children || []);
        return ((xe.return = H), xe);
      }
    }
    function T(H, Q, I, fe, Oe) {
      if (Q === null || Q.tag !== x) {
        var xe = Ni(I, H.mode, fe, Oe);
        return ((xe.return = H), xe);
      } else {
        var Xe = l(Q, I);
        return ((Xe.return = H), Xe);
      }
    }
    function k(H, Q, I) {
      if ((typeof Q == 'string' && Q !== '') || typeof Q == 'number') {
        var fe = Rm('' + Q, H.mode, I);
        return ((fe.return = H), fe);
      }
      if (typeof Q == 'object' && Q !== null) {
        switch (Q.$$typeof) {
          case Fr: {
            var Oe = xm(Q, H.mode, I);
            return ((Oe.ref = Ks(H, null, Q)), (Oe.return = H), Oe);
          }
          case Vr: {
            var xe = _m(Q, H.mode, I);
            return ((xe.return = H), xe);
          }
          case Ye: {
            var Xe = Q._payload,
              rt = Q._init;
            return k(H, rt(Xe), I);
          }
        }
        if (_t(Q) || hr(Q)) {
          var Pt = Ni(Q, H.mode, I, null);
          return ((Pt.return = H), Pt);
        }
        nf(H, Q);
      }
      return (typeof Q == 'function' && rf(H), null);
    }
    function L(H, Q, I, fe) {
      var Oe = Q !== null ? Q.key : null;
      if ((typeof I == 'string' && I !== '') || typeof I == 'number')
        return Oe !== null ? null : v(H, Q, '' + I, fe);
      if (typeof I == 'object' && I !== null) {
        switch (I.$$typeof) {
          case Fr:
            return I.key === Oe ? y(H, Q, I, fe) : null;
          case Vr:
            return I.key === Oe ? C(H, Q, I, fe) : null;
          case Ye: {
            var xe = I._payload,
              Xe = I._init;
            return L(H, Q, Xe(xe), fe);
          }
        }
        if (_t(I) || hr(I)) return Oe !== null ? null : T(H, Q, I, fe, null);
        nf(H, I);
      }
      return (typeof I == 'function' && rf(H), null);
    }
    function B(H, Q, I, fe, Oe) {
      if ((typeof fe == 'string' && fe !== '') || typeof fe == 'number') {
        var xe = H.get(I) || null;
        return v(Q, xe, '' + fe, Oe);
      }
      if (typeof fe == 'object' && fe !== null) {
        switch (fe.$$typeof) {
          case Fr: {
            var Xe = H.get(fe.key === null ? I : fe.key) || null;
            return y(Q, Xe, fe, Oe);
          }
          case Vr: {
            var rt = H.get(fe.key === null ? I : fe.key) || null;
            return C(Q, rt, fe, Oe);
          }
          case Ye:
            var Pt = fe._payload,
              xt = fe._init;
            return B(H, Q, I, xt(Pt), Oe);
        }
        if (_t(fe) || hr(fe)) {
          var sn = H.get(I) || null;
          return T(Q, sn, fe, Oe, null);
        }
        nf(Q, fe);
      }
      return (typeof fe == 'function' && rf(Q), null);
    }
    function Y(H, Q, I) {
      {
        if (typeof H != 'object' || H === null) return Q;
        switch (H.$$typeof) {
          case Fr:
          case Vr:
            Ib(H, I);
            var fe = H.key;
            if (typeof fe != 'string') break;
            if (Q === null) {
              ((Q = new Set()), Q.add(fe));
              break;
            }
            if (!Q.has(fe)) {
              Q.add(fe);
              break;
            }
            d(
              'Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.',
              fe
            );
            break;
          case Ye:
            var Oe = H._payload,
              xe = H._init;
            Y(xe(Oe), Q, I);
            break;
        }
      }
      return Q;
    }
    function X(H, Q, I, fe) {
      for (var Oe = null, xe = 0; xe < I.length; xe++) {
        var Xe = I[xe];
        Oe = Y(Xe, Oe, H);
      }
      for (
        var rt = null, Pt = null, xt = Q, sn = 0, Rt = 0, on = null;
        xt !== null && Rt < I.length;
        Rt++
      ) {
        xt.index > Rt ? ((on = xt), (xt = null)) : (on = xt.sibling);
        var qn = L(H, xt, I[Rt], fe);
        if (qn === null) {
          xt === null && (xt = on);
          break;
        }
        (e && xt && qn.alternate === null && t(H, xt),
          (sn = u(qn, sn, Rt)),
          Pt === null ? (rt = qn) : (Pt.sibling = qn),
          (Pt = qn),
          (xt = on));
      }
      if (Rt === I.length) {
        if ((n(H, xt), Nn())) {
          var In = Rt;
          uo(H, In);
        }
        return rt;
      }
      if (xt === null) {
        for (; Rt < I.length; Rt++) {
          var wr = k(H, I[Rt], fe);
          wr !== null &&
            ((sn = u(wr, sn, Rt)),
            Pt === null ? (rt = wr) : (Pt.sibling = wr),
            (Pt = wr));
        }
        if (Nn()) {
          var tr = Rt;
          uo(H, tr);
        }
        return rt;
      }
      for (var nr = a(H, xt); Rt < I.length; Rt++) {
        var Xn = B(nr, H, Rt, I[Rt], fe);
        Xn !== null &&
          (e &&
            Xn.alternate !== null &&
            nr.delete(Xn.key === null ? Rt : Xn.key),
          (sn = u(Xn, sn, Rt)),
          Pt === null ? (rt = Xn) : (Pt.sibling = Xn),
          (Pt = Xn));
      }
      if (
        (e &&
          nr.forEach(function (Dl) {
            return t(H, Dl);
          }),
        Nn())
      ) {
        var Qa = Rt;
        uo(H, Qa);
      }
      return rt;
    }
    function we(H, Q, I, fe) {
      var Oe = hr(I);
      if (typeof Oe != 'function')
        throw new Error(
          'An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.'
        );
      {
        (typeof Symbol == 'function' &&
          I[Symbol.toStringTag] === 'Generator' &&
          (Dv ||
            d(
              'Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers.'
            ),
          (Dv = !0)),
          I.entries === Oe &&
            (_v ||
              d(
                'Using Maps as children is not supported. Use an array of keyed ReactElements instead.'
              ),
            (_v = !0)));
        var xe = Oe.call(I);
        if (xe)
          for (var Xe = null, rt = xe.next(); !rt.done; rt = xe.next()) {
            var Pt = rt.value;
            Xe = Y(Pt, Xe, H);
          }
      }
      var xt = Oe.call(I);
      if (xt == null)
        throw new Error('An iterable object provided no iterator.');
      for (
        var sn = null,
          Rt = null,
          on = Q,
          qn = 0,
          In = 0,
          wr = null,
          tr = xt.next();
        on !== null && !tr.done;
        In++, tr = xt.next()
      ) {
        on.index > In ? ((wr = on), (on = null)) : (wr = on.sibling);
        var nr = L(H, on, tr.value, fe);
        if (nr === null) {
          on === null && (on = wr);
          break;
        }
        (e && on && nr.alternate === null && t(H, on),
          (qn = u(nr, qn, In)),
          Rt === null ? (sn = nr) : (Rt.sibling = nr),
          (Rt = nr),
          (on = wr));
      }
      if (tr.done) {
        if ((n(H, on), Nn())) {
          var Xn = In;
          uo(H, Xn);
        }
        return sn;
      }
      if (on === null) {
        for (; !tr.done; In++, tr = xt.next()) {
          var Qa = k(H, tr.value, fe);
          Qa !== null &&
            ((qn = u(Qa, qn, In)),
            Rt === null ? (sn = Qa) : (Rt.sibling = Qa),
            (Rt = Qa));
        }
        if (Nn()) {
          var Dl = In;
          uo(H, Dl);
        }
        return sn;
      }
      for (var Ou = a(H, on); !tr.done; In++, tr = xt.next()) {
        var ba = B(Ou, H, In, tr.value, fe);
        ba !== null &&
          (e &&
            ba.alternate !== null &&
            Ou.delete(ba.key === null ? In : ba.key),
          (qn = u(ba, qn, In)),
          Rt === null ? (sn = ba) : (Rt.sibling = ba),
          (Rt = ba));
      }
      if (
        (e &&
          Ou.forEach(function (UM) {
            return t(H, UM);
          }),
        Nn())
      ) {
        var zM = In;
        uo(H, zM);
      }
      return sn;
    }
    function He(H, Q, I, fe) {
      if (Q !== null && Q.tag === D) {
        n(H, Q.sibling);
        var Oe = l(Q, I);
        return ((Oe.return = H), Oe);
      }
      n(H, Q);
      var xe = Rm(I, H.mode, fe);
      return ((xe.return = H), xe);
    }
    function Ne(H, Q, I, fe) {
      for (var Oe = I.key, xe = Q; xe !== null; ) {
        if (xe.key === Oe) {
          var Xe = I.type;
          if (Xe === aa) {
            if (xe.tag === x) {
              n(H, xe.sibling);
              var rt = l(xe, I.props.children);
              return (
                (rt.return = H),
                (rt._debugSource = I._source),
                (rt._debugOwner = I._owner),
                rt
              );
            }
          } else if (
            xe.elementType === Xe ||
            qE(xe, I) ||
            (typeof Xe == 'object' &&
              Xe !== null &&
              Xe.$$typeof === Ye &&
              Bb(Xe) === xe.type)
          ) {
            n(H, xe.sibling);
            var Pt = l(xe, I.props);
            return (
              (Pt.ref = Ks(H, xe, I)),
              (Pt.return = H),
              (Pt._debugSource = I._source),
              (Pt._debugOwner = I._owner),
              Pt
            );
          }
          n(H, xe);
          break;
        } else t(H, xe);
        xe = xe.sibling;
      }
      if (I.type === aa) {
        var xt = Ni(I.props.children, H.mode, fe, I.key);
        return ((xt.return = H), xt);
      } else {
        var sn = xm(I, H.mode, fe);
        return ((sn.ref = Ks(H, Q, I)), (sn.return = H), sn);
      }
    }
    function bt(H, Q, I, fe) {
      for (var Oe = I.key, xe = Q; xe !== null; ) {
        if (xe.key === Oe)
          if (
            xe.tag === w &&
            xe.stateNode.containerInfo === I.containerInfo &&
            xe.stateNode.implementation === I.implementation
          ) {
            n(H, xe.sibling);
            var Xe = l(xe, I.children || []);
            return ((Xe.return = H), Xe);
          } else {
            n(H, xe);
            break;
          }
        else t(H, xe);
        xe = xe.sibling;
      }
      var rt = _m(I, H.mode, fe);
      return ((rt.return = H), rt);
    }
    function pt(H, Q, I, fe) {
      var Oe =
        typeof I == 'object' && I !== null && I.type === aa && I.key === null;
      if ((Oe && (I = I.props.children), typeof I == 'object' && I !== null)) {
        switch (I.$$typeof) {
          case Fr:
            return p(Ne(H, Q, I, fe));
          case Vr:
            return p(bt(H, Q, I, fe));
          case Ye:
            var xe = I._payload,
              Xe = I._init;
            return pt(H, Q, Xe(xe), fe);
        }
        if (_t(I)) return X(H, Q, I, fe);
        if (hr(I)) return we(H, Q, I, fe);
        nf(H, I);
      }
      return (typeof I == 'string' && I !== '') || typeof I == 'number'
        ? p(He(H, Q, '' + I, fe))
        : (typeof I == 'function' && rf(H), n(H, Q));
    }
    return pt;
  }
  var cl = jb(!0),
    $b = jb(!1);
  function dO(e, t) {
    if (e !== null && t.child !== e.child)
      throw new Error('Resuming work not yet implemented.');
    if (t.child !== null) {
      var n = t.child,
        a = To(n, n.pendingProps);
      for (t.child = a, a.return = t; n.sibling !== null; )
        ((n = n.sibling),
          (a = a.sibling = To(n, n.pendingProps)),
          (a.return = t));
      a.sibling = null;
    }
  }
  function pO(e, t) {
    for (var n = e.child; n !== null; ) (eM(n, t), (n = n.sibling));
  }
  var Lv = Si(null),
    kv;
  kv = {};
  var af = null,
    fl = null,
    Nv = null,
    of = !1;
  function lf() {
    ((af = null), (fl = null), (Nv = null), (of = !1));
  }
  function Yb() {
    of = !0;
  }
  function Gb() {
    of = !1;
  }
  function Wb(e, t, n) {
    (Gn(Lv, t._currentValue, e),
      (t._currentValue = n),
      t._currentRenderer !== void 0 &&
        t._currentRenderer !== null &&
        t._currentRenderer !== kv &&
        d(
          'Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.'
        ),
      (t._currentRenderer = kv));
  }
  function Pv(e, t) {
    var n = Lv.current;
    (Yn(Lv, t), (e._currentValue = n));
  }
  function zv(e, t, n) {
    for (var a = e; a !== null; ) {
      var l = a.alternate;
      if (
        (Xo(a.childLanes, t)
          ? l !== null &&
            !Xo(l.childLanes, t) &&
            (l.childLanes = st(l.childLanes, t))
          : ((a.childLanes = st(a.childLanes, t)),
            l !== null && (l.childLanes = st(l.childLanes, t))),
        a === n)
      )
        break;
      a = a.return;
    }
    a !== n &&
      d(
        'Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.'
      );
  }
  function vO(e, t, n) {
    hO(e, t, n);
  }
  function hO(e, t, n) {
    var a = e.child;
    for (a !== null && (a.return = e); a !== null; ) {
      var l = void 0,
        u = a.dependencies;
      if (u !== null) {
        l = a.child;
        for (var p = u.firstContext; p !== null; ) {
          if (p.context === t) {
            if (a.tag === g) {
              var v = hs(n),
                y = $a(jt, v);
              y.tag = uf;
              var C = a.updateQueue;
              if (C !== null) {
                var T = C.shared,
                  k = T.pending;
                (k === null ? (y.next = y) : ((y.next = k.next), (k.next = y)),
                  (T.pending = y));
              }
            }
            a.lanes = st(a.lanes, n);
            var L = a.alternate;
            (L !== null && (L.lanes = st(L.lanes, n)),
              zv(a.return, n, e),
              (u.lanes = st(u.lanes, n)));
            break;
          }
          p = p.next;
        }
      } else if (a.tag === _) l = a.type === e.type ? null : a.child;
      else if (a.tag === te) {
        var B = a.return;
        if (B === null)
          throw new Error(
            'We just came from a parent so we must have had a parent. This is a bug in React.'
          );
        B.lanes = st(B.lanes, n);
        var Y = B.alternate;
        (Y !== null && (Y.lanes = st(Y.lanes, n)),
          zv(B, n, e),
          (l = a.sibling));
      } else l = a.child;
      if (l !== null) l.return = a;
      else
        for (l = a; l !== null; ) {
          if (l === e) {
            l = null;
            break;
          }
          var X = l.sibling;
          if (X !== null) {
            ((X.return = l.return), (l = X));
            break;
          }
          l = l.return;
        }
      a = l;
    }
  }
  function dl(e, t) {
    ((af = e), (fl = null), (Nv = null));
    var n = e.dependencies;
    if (n !== null) {
      var a = n.firstContext;
      a !== null && (gr(n.lanes, t) && du(), (n.firstContext = null));
    }
  }
  function dn(e) {
    of &&
      d(
        'Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().'
      );
    var t = e._currentValue;
    if (Nv !== e) {
      var n = { context: e, memoizedValue: t, next: null };
      if (fl === null) {
        if (af === null)
          throw new Error(
            'Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().'
          );
        ((fl = n), (af.dependencies = { lanes: se, firstContext: n }));
      } else fl = fl.next = n;
    }
    return t;
  }
  var ho = null;
  function Uv(e) {
    ho === null ? (ho = [e]) : ho.push(e);
  }
  function mO() {
    if (ho !== null) {
      for (var e = 0; e < ho.length; e++) {
        var t = ho[e],
          n = t.interleaved;
        if (n !== null) {
          t.interleaved = null;
          var a = n.next,
            l = t.pending;
          if (l !== null) {
            var u = l.next;
            ((l.next = a), (n.next = u));
          }
          t.pending = n;
        }
      }
      ho = null;
    }
  }
  function qb(e, t, n, a) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Uv(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      sf(e, a)
    );
  }
  function yO(e, t, n, a) {
    var l = t.interleaved;
    (l === null ? ((n.next = n), Uv(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n));
  }
  function gO(e, t, n, a) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Uv(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      sf(e, a)
    );
  }
  function ur(e, t) {
    return sf(e, t);
  }
  var bO = sf;
  function sf(e, t) {
    e.lanes = st(e.lanes, t);
    var n = e.alternate;
    (n !== null && (n.lanes = st(n.lanes, t)),
      n === null && (e.flags & (fn | ka)) !== Ge && $E(e));
    for (var a = e, l = e.return; l !== null; )
      ((l.childLanes = st(l.childLanes, t)),
        (n = l.alternate),
        n !== null
          ? (n.childLanes = st(n.childLanes, t))
          : (l.flags & (fn | ka)) !== Ge && $E(e),
        (a = l),
        (l = l.return));
    if (a.tag === S) {
      var u = a.stateNode;
      return u;
    } else return null;
  }
  var Xb = 0,
    Qb = 1,
    uf = 2,
    Fv = 3,
    cf = !1,
    Vv,
    ff;
  ((Vv = !1), (ff = null));
  function Hv(e) {
    var t = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: se },
      effects: null,
    };
    e.updateQueue = t;
  }
  function Kb(e, t) {
    var n = t.updateQueue,
      a = e.updateQueue;
    if (n === a) {
      var l = {
        baseState: a.baseState,
        firstBaseUpdate: a.firstBaseUpdate,
        lastBaseUpdate: a.lastBaseUpdate,
        shared: a.shared,
        effects: a.effects,
      };
      t.updateQueue = l;
    }
  }
  function $a(e, t) {
    var n = {
      eventTime: e,
      lane: t,
      tag: Xb,
      payload: null,
      callback: null,
      next: null,
    };
    return n;
  }
  function wi(e, t, n) {
    var a = e.updateQueue;
    if (a === null) return null;
    var l = a.shared;
    if (
      (ff === l &&
        !Vv &&
        (d(
          'An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.'
        ),
        (Vv = !0)),
      yA())
    ) {
      var u = l.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (l.pending = t),
        bO(e, n)
      );
    } else return gO(e, l, t, n);
  }
  function df(e, t, n) {
    var a = t.updateQueue;
    if (a !== null) {
      var l = a.shared;
      if (cg(n)) {
        var u = l.lanes;
        u = dg(u, e.pendingLanes);
        var p = st(u, n);
        ((l.lanes = p), Lp(e, p));
      }
    }
  }
  function Iv(e, t) {
    var n = e.updateQueue,
      a = e.alternate;
    if (a !== null) {
      var l = a.updateQueue;
      if (n === l) {
        var u = null,
          p = null,
          v = n.firstBaseUpdate;
        if (v !== null) {
          var y = v;
          do {
            var C = {
              eventTime: y.eventTime,
              lane: y.lane,
              tag: y.tag,
              payload: y.payload,
              callback: y.callback,
              next: null,
            };
            (p === null ? (u = p = C) : ((p.next = C), (p = C)), (y = y.next));
          } while (y !== null);
          p === null ? (u = p = t) : ((p.next = t), (p = t));
        } else u = p = t;
        ((n = {
          baseState: l.baseState,
          firstBaseUpdate: u,
          lastBaseUpdate: p,
          shared: l.shared,
          effects: l.effects,
        }),
          (e.updateQueue = n));
        return;
      }
    }
    var T = n.lastBaseUpdate;
    (T === null ? (n.firstBaseUpdate = t) : (T.next = t),
      (n.lastBaseUpdate = t));
  }
  function SO(e, t, n, a, l, u) {
    switch (n.tag) {
      case Qb: {
        var p = n.payload;
        if (typeof p == 'function') {
          Yb();
          var v = p.call(u, a, l);
          {
            if (e.mode & an) {
              Dn(!0);
              try {
                p.call(u, a, l);
              } finally {
                Dn(!1);
              }
            }
            Gb();
          }
          return v;
        }
        return p;
      }
      case Fv:
        e.flags = (e.flags & ~Kn) | Dt;
      case Xb: {
        var y = n.payload,
          C;
        if (typeof y == 'function') {
          (Yb(), (C = y.call(u, a, l)));
          {
            if (e.mode & an) {
              Dn(!0);
              try {
                y.call(u, a, l);
              } finally {
                Dn(!1);
              }
            }
            Gb();
          }
        } else C = y;
        return C == null ? a : ct({}, a, C);
      }
      case uf:
        return ((cf = !0), a);
    }
    return a;
  }
  function pf(e, t, n, a) {
    var l = e.updateQueue;
    ((cf = !1), (ff = l.shared));
    var u = l.firstBaseUpdate,
      p = l.lastBaseUpdate,
      v = l.shared.pending;
    if (v !== null) {
      l.shared.pending = null;
      var y = v,
        C = y.next;
      ((y.next = null), p === null ? (u = C) : (p.next = C), (p = y));
      var T = e.alternate;
      if (T !== null) {
        var k = T.updateQueue,
          L = k.lastBaseUpdate;
        L !== p &&
          (L === null ? (k.firstBaseUpdate = C) : (L.next = C),
          (k.lastBaseUpdate = y));
      }
    }
    if (u !== null) {
      var B = l.baseState,
        Y = se,
        X = null,
        we = null,
        He = null,
        Ne = u;
      do {
        var bt = Ne.lane,
          pt = Ne.eventTime;
        if (Xo(a, bt)) {
          if (He !== null) {
            var Q = {
              eventTime: pt,
              lane: On,
              tag: Ne.tag,
              payload: Ne.payload,
              callback: Ne.callback,
              next: null,
            };
            He = He.next = Q;
          }
          B = SO(e, l, Ne, B, t, n);
          var I = Ne.callback;
          if (I !== null && Ne.lane !== On) {
            e.flags |= Zd;
            var fe = l.effects;
            fe === null ? (l.effects = [Ne]) : fe.push(Ne);
          }
        } else {
          var H = {
            eventTime: pt,
            lane: bt,
            tag: Ne.tag,
            payload: Ne.payload,
            callback: Ne.callback,
            next: null,
          };
          (He === null ? ((we = He = H), (X = B)) : (He = He.next = H),
            (Y = st(Y, bt)));
        }
        if (((Ne = Ne.next), Ne === null)) {
          if (((v = l.shared.pending), v === null)) break;
          var Oe = v,
            xe = Oe.next;
          ((Oe.next = null),
            (Ne = xe),
            (l.lastBaseUpdate = Oe),
            (l.shared.pending = null));
        }
      } while (!0);
      (He === null && (X = B),
        (l.baseState = X),
        (l.firstBaseUpdate = we),
        (l.lastBaseUpdate = He));
      var Xe = l.shared.interleaved;
      if (Xe !== null) {
        var rt = Xe;
        do ((Y = st(Y, rt.lane)), (rt = rt.next));
        while (rt !== Xe);
      } else u === null && (l.shared.lanes = se);
      (wu(Y), (e.lanes = Y), (e.memoizedState = B));
    }
    ff = null;
  }
  function EO(e, t) {
    if (typeof e != 'function')
      throw new Error(
        'Invalid argument passed as callback. Expected a function. Instead ' +
          ('received: ' + e)
      );
    e.call(t);
  }
  function Jb() {
    cf = !1;
  }
  function vf() {
    return cf;
  }
  function Zb(e, t, n) {
    var a = t.effects;
    if (((t.effects = null), a !== null))
      for (var l = 0; l < a.length; l++) {
        var u = a[l],
          p = u.callback;
        p !== null && ((u.callback = null), EO(p, n));
      }
  }
  var Js = {},
    xi = Si(Js),
    Zs = Si(Js),
    hf = Si(Js);
  function mf(e) {
    if (e === Js)
      throw new Error(
        'Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.'
      );
    return e;
  }
  function eS() {
    var e = mf(hf.current);
    return e;
  }
  function Bv(e, t) {
    (Gn(hf, t, e), Gn(Zs, e, e), Gn(xi, Js, e));
    var n = F_(t);
    (Yn(xi, e), Gn(xi, n, e));
  }
  function pl(e) {
    (Yn(xi, e), Yn(Zs, e), Yn(hf, e));
  }
  function jv() {
    var e = mf(xi.current);
    return e;
  }
  function tS(e) {
    mf(hf.current);
    var t = mf(xi.current),
      n = V_(t, e.type);
    t !== n && (Gn(Zs, e, e), Gn(xi, n, e));
  }
  function $v(e) {
    Zs.current === e && (Yn(xi, e), Yn(Zs, e));
  }
  var CO = 0,
    nS = 1,
    rS = 1,
    eu = 2,
    Gr = Si(CO);
  function Yv(e, t) {
    return (e & t) !== 0;
  }
  function vl(e) {
    return e & nS;
  }
  function Gv(e, t) {
    return (e & nS) | t;
  }
  function TO(e, t) {
    return e | t;
  }
  function Ri(e, t) {
    Gn(Gr, t, e);
  }
  function hl(e) {
    Yn(Gr, e);
  }
  function wO(e, t) {
    var n = e.memoizedState;
    return n !== null ? n.dehydrated !== null : (e.memoizedProps, !0);
  }
  function yf(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === V) {
        var n = t.memoizedState;
        if (n !== null) {
          var a = n.dehydrated;
          if (a === null || Sb(a) || cv(a)) return t;
        }
      } else if (t.tag === ue && t.memoizedProps.revealOrder !== void 0) {
        var l = (t.flags & Dt) !== Ge;
        if (l) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) return null;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var cr = 0,
    mn = 1,
    da = 2,
    yn = 4,
    Pn = 8,
    Wv = [];
  function qv() {
    for (var e = 0; e < Wv.length; e++) {
      var t = Wv[e];
      t._workInProgressVersionPrimary = null;
    }
    Wv.length = 0;
  }
  function xO(e, t) {
    var n = t._getVersion,
      a = n(t._source);
    e.mutableSourceEagerHydrationData == null
      ? (e.mutableSourceEagerHydrationData = [t, a])
      : e.mutableSourceEagerHydrationData.push(t, a);
  }
  var De = o.ReactCurrentDispatcher,
    tu = o.ReactCurrentBatchConfig,
    Xv,
    ml;
  Xv = new Set();
  var mo = se,
    Nt = null,
    gn = null,
    bn = null,
    gf = !1,
    nu = !1,
    ru = 0,
    RO = 0,
    _O = 25,
    Z = null,
    kr = null,
    _i = -1,
    Qv = !1;
  function Mt() {
    {
      var e = Z;
      kr === null ? (kr = [e]) : kr.push(e);
    }
  }
  function Ce() {
    {
      var e = Z;
      kr !== null && (_i++, kr[_i] !== e && DO(e));
    }
  }
  function yl(e) {
    e != null &&
      !_t(e) &&
      d(
        '%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.',
        Z,
        typeof e
      );
  }
  function DO(e) {
    {
      var t = lt(Nt);
      if (!Xv.has(t) && (Xv.add(t), kr !== null)) {
        for (var n = '', a = 30, l = 0; l <= _i; l++) {
          for (
            var u = kr[l], p = l === _i ? e : u, v = l + 1 + '. ' + u;
            v.length < a;

          )
            v += ' ';
          ((v +=
            p +
            `
`),
            (n += v));
        }
        d(
          `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
          t,
          n
        );
      }
    }
  }
  function Wn() {
    throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
  }
  function Kv(e, t) {
    if (Qv) return !1;
    if (t === null)
      return (
        d(
          '%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.',
          Z
        ),
        !1
      );
    e.length !== t.length &&
      d(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        Z,
        '[' + t.join(', ') + ']',
        '[' + e.join(', ') + ']'
      );
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Er(e[n], t[n])) return !1;
    return !0;
  }
  function gl(e, t, n, a, l, u) {
    ((mo = u),
      (Nt = t),
      (kr = e !== null ? e._debugHookTypes : null),
      (_i = -1),
      (Qv = e !== null && e.type !== t.type),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = se),
      e !== null && e.memoizedState !== null
        ? (De.current = xS)
        : kr !== null
          ? (De.current = wS)
          : (De.current = TS));
    var p = n(a, l);
    if (nu) {
      var v = 0;
      do {
        if (((nu = !1), (ru = 0), v >= _O))
          throw new Error(
            'Too many re-renders. React limits the number of renders to prevent an infinite loop.'
          );
        ((v += 1),
          (Qv = !1),
          (gn = null),
          (bn = null),
          (t.updateQueue = null),
          (_i = -1),
          (De.current = RS),
          (p = n(a, l)));
      } while (nu);
    }
    ((De.current = Mf), (t._debugHookTypes = kr));
    var y = gn !== null && gn.next !== null;
    if (
      ((mo = se),
      (Nt = null),
      (gn = null),
      (bn = null),
      (Z = null),
      (kr = null),
      (_i = -1),
      e !== null &&
        (e.flags & Pa) !== (t.flags & Pa) &&
        (e.mode & yt) !== Be &&
        d(
          'Internal React error: Expected static flag was missing. Please notify the React team.'
        ),
      (gf = !1),
      y)
    )
      throw new Error(
        'Rendered fewer hooks than expected. This may be caused by an accidental early return statement.'
      );
    return p;
  }
  function bl() {
    var e = ru !== 0;
    return ((ru = 0), e);
  }
  function aS(e, t, n) {
    ((t.updateQueue = e.updateQueue),
      (t.mode & sa) !== Be
        ? (t.flags &= ~(fc | Na | Hr | St))
        : (t.flags &= ~(Hr | St)),
      (e.lanes = gc(e.lanes, n)));
  }
  function iS() {
    if (((De.current = Mf), gf)) {
      for (var e = Nt.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      gf = !1;
    }
    ((mo = se),
      (Nt = null),
      (gn = null),
      (bn = null),
      (kr = null),
      (_i = -1),
      (Z = null),
      (gS = !1),
      (nu = !1),
      (ru = 0));
  }
  function pa() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (bn === null ? (Nt.memoizedState = bn = e) : (bn = bn.next = e), bn);
  }
  function Nr() {
    var e;
    if (gn === null) {
      var t = Nt.alternate;
      t !== null ? (e = t.memoizedState) : (e = null);
    } else e = gn.next;
    var n;
    if ((bn === null ? (n = Nt.memoizedState) : (n = bn.next), n !== null))
      ((bn = n), (n = bn.next), (gn = e));
    else {
      if (e === null)
        throw new Error('Rendered more hooks than during the previous render.');
      gn = e;
      var a = {
        memoizedState: gn.memoizedState,
        baseState: gn.baseState,
        baseQueue: gn.baseQueue,
        queue: gn.queue,
        next: null,
      };
      bn === null ? (Nt.memoizedState = bn = a) : (bn = bn.next = a);
    }
    return bn;
  }
  function oS() {
    return { lastEffect: null, stores: null };
  }
  function Jv(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function Zv(e, t, n) {
    var a = pa(),
      l;
    (n !== void 0 ? (l = n(t)) : (l = t), (a.memoizedState = a.baseState = l));
    var u = {
      pending: null,
      interleaved: null,
      lanes: se,
      dispatch: null,
      lastRenderedReducer: e,
      lastRenderedState: l,
    };
    a.queue = u;
    var p = (u.dispatch = LO.bind(null, Nt, u));
    return [a.memoizedState, p];
  }
  function eh(e, t, n) {
    var a = Nr(),
      l = a.queue;
    if (l === null)
      throw new Error(
        'Should have a queue. This is likely a bug in React. Please file an issue.'
      );
    l.lastRenderedReducer = e;
    var u = gn,
      p = u.baseQueue,
      v = l.pending;
    if (v !== null) {
      if (p !== null) {
        var y = p.next,
          C = v.next;
        ((p.next = C), (v.next = y));
      }
      (u.baseQueue !== p &&
        d(
          'Internal error: Expected work-in-progress queue to be a clone. This is a bug in React.'
        ),
        (u.baseQueue = p = v),
        (l.pending = null));
    }
    if (p !== null) {
      var T = p.next,
        k = u.baseState,
        L = null,
        B = null,
        Y = null,
        X = T;
      do {
        var we = X.lane;
        if (Xo(mo, we)) {
          if (Y !== null) {
            var Ne = {
              lane: On,
              action: X.action,
              hasEagerState: X.hasEagerState,
              eagerState: X.eagerState,
              next: null,
            };
            Y = Y.next = Ne;
          }
          if (X.hasEagerState) k = X.eagerState;
          else {
            var bt = X.action;
            k = e(k, bt);
          }
        } else {
          var He = {
            lane: we,
            action: X.action,
            hasEagerState: X.hasEagerState,
            eagerState: X.eagerState,
            next: null,
          };
          (Y === null ? ((B = Y = He), (L = k)) : (Y = Y.next = He),
            (Nt.lanes = st(Nt.lanes, we)),
            wu(we));
        }
        X = X.next;
      } while (X !== null && X !== T);
      (Y === null ? (L = k) : (Y.next = B),
        Er(k, a.memoizedState) || du(),
        (a.memoizedState = k),
        (a.baseState = L),
        (a.baseQueue = Y),
        (l.lastRenderedState = k));
    }
    var pt = l.interleaved;
    if (pt !== null) {
      var H = pt;
      do {
        var Q = H.lane;
        ((Nt.lanes = st(Nt.lanes, Q)), wu(Q), (H = H.next));
      } while (H !== pt);
    } else p === null && (l.lanes = se);
    var I = l.dispatch;
    return [a.memoizedState, I];
  }
  function th(e, t, n) {
    var a = Nr(),
      l = a.queue;
    if (l === null)
      throw new Error(
        'Should have a queue. This is likely a bug in React. Please file an issue.'
      );
    l.lastRenderedReducer = e;
    var u = l.dispatch,
      p = l.pending,
      v = a.memoizedState;
    if (p !== null) {
      l.pending = null;
      var y = p.next,
        C = y;
      do {
        var T = C.action;
        ((v = e(v, T)), (C = C.next));
      } while (C !== y);
      (Er(v, a.memoizedState) || du(),
        (a.memoizedState = v),
        a.baseQueue === null && (a.baseState = v),
        (l.lastRenderedState = v));
    }
    return [v, u];
  }
  function Mz(e, t, n) {}
  function Lz(e, t, n) {}
  function nh(e, t, n) {
    var a = Nt,
      l = pa(),
      u,
      p = Nn();
    if (p) {
      if (n === void 0)
        throw new Error(
          'Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.'
        );
      ((u = n()),
        ml ||
          (u !== n() &&
            (d(
              'The result of getServerSnapshot should be cached to avoid an infinite loop'
            ),
            (ml = !0))));
    } else {
      if (((u = t()), !ml)) {
        var v = t();
        Er(u, v) ||
          (d(
            'The result of getSnapshot should be cached to avoid an infinite loop'
          ),
          (ml = !0));
      }
      var y = Qf();
      if (y === null)
        throw new Error(
          'Expected a work-in-progress root. This is a bug in React. Please file an issue.'
        );
      yc(y, mo) || lS(a, t, u);
    }
    l.memoizedState = u;
    var C = { value: u, getSnapshot: t };
    return (
      (l.queue = C),
      Tf(uS.bind(null, a, C, e), [e]),
      (a.flags |= Hr),
      au(mn | Pn, sS.bind(null, a, C, u, t), void 0, null),
      u
    );
  }
  function bf(e, t, n) {
    var a = Nt,
      l = Nr(),
      u = t();
    if (!ml) {
      var p = t();
      Er(u, p) ||
        (d(
          'The result of getSnapshot should be cached to avoid an infinite loop'
        ),
        (ml = !0));
    }
    var v = l.memoizedState,
      y = !Er(v, u);
    y && ((l.memoizedState = u), du());
    var C = l.queue;
    if (
      (ou(uS.bind(null, a, C, e), [e]),
      C.getSnapshot !== t || y || (bn !== null && bn.memoizedState.tag & mn))
    ) {
      ((a.flags |= Hr), au(mn | Pn, sS.bind(null, a, C, u, t), void 0, null));
      var T = Qf();
      if (T === null)
        throw new Error(
          'Expected a work-in-progress root. This is a bug in React. Please file an issue.'
        );
      yc(T, mo) || lS(a, t, u);
    }
    return u;
  }
  function lS(e, t, n) {
    e.flags |= cc;
    var a = { getSnapshot: t, value: n },
      l = Nt.updateQueue;
    if (l === null) ((l = oS()), (Nt.updateQueue = l), (l.stores = [a]));
    else {
      var u = l.stores;
      u === null ? (l.stores = [a]) : u.push(a);
    }
  }
  function sS(e, t, n, a) {
    ((t.value = n), (t.getSnapshot = a), cS(t) && fS(e));
  }
  function uS(e, t, n) {
    var a = function () {
      cS(t) && fS(e);
    };
    return n(a);
  }
  function cS(e) {
    var t = e.getSnapshot,
      n = e.value;
    try {
      var a = t();
      return !Er(n, a);
    } catch {
      return !0;
    }
  }
  function fS(e) {
    var t = ur(e, tt);
    t !== null && Tn(t, e, tt, jt);
  }
  function Sf(e) {
    var t = pa();
    (typeof e == 'function' && (e = e()), (t.memoizedState = t.baseState = e));
    var n = {
      pending: null,
      interleaved: null,
      lanes: se,
      dispatch: null,
      lastRenderedReducer: Jv,
      lastRenderedState: e,
    };
    t.queue = n;
    var a = (n.dispatch = kO.bind(null, Nt, n));
    return [t.memoizedState, a];
  }
  function rh(e) {
    return eh(Jv);
  }
  function ah(e) {
    return th(Jv);
  }
  function au(e, t, n, a) {
    var l = { tag: e, create: t, destroy: n, deps: a, next: null },
      u = Nt.updateQueue;
    if (u === null)
      ((u = oS()), (Nt.updateQueue = u), (u.lastEffect = l.next = l));
    else {
      var p = u.lastEffect;
      if (p === null) u.lastEffect = l.next = l;
      else {
        var v = p.next;
        ((p.next = l), (l.next = v), (u.lastEffect = l));
      }
    }
    return l;
  }
  function ih(e) {
    var t = pa();
    {
      var n = { current: e };
      return ((t.memoizedState = n), n);
    }
  }
  function Ef(e) {
    var t = Nr();
    return t.memoizedState;
  }
  function iu(e, t, n, a) {
    var l = pa(),
      u = a === void 0 ? null : a;
    ((Nt.flags |= e), (l.memoizedState = au(mn | t, n, void 0, u)));
  }
  function Cf(e, t, n, a) {
    var l = Nr(),
      u = a === void 0 ? null : a,
      p = void 0;
    if (gn !== null) {
      var v = gn.memoizedState;
      if (((p = v.destroy), u !== null)) {
        var y = v.deps;
        if (Kv(u, y)) {
          l.memoizedState = au(t, n, p, u);
          return;
        }
      }
    }
    ((Nt.flags |= e), (l.memoizedState = au(mn | t, n, p, u)));
  }
  function Tf(e, t) {
    return (Nt.mode & sa) !== Be
      ? iu(fc | Hr | np, Pn, e, t)
      : iu(Hr | np, Pn, e, t);
  }
  function ou(e, t) {
    return Cf(Hr, Pn, e, t);
  }
  function oh(e, t) {
    return iu(St, da, e, t);
  }
  function wf(e, t) {
    return Cf(St, da, e, t);
  }
  function lh(e, t) {
    var n = St;
    return ((n |= Ji), (Nt.mode & sa) !== Be && (n |= Na), iu(n, yn, e, t));
  }
  function xf(e, t) {
    return Cf(St, yn, e, t);
  }
  function dS(e, t) {
    if (typeof t == 'function') {
      var n = t,
        a = e();
      return (
        n(a),
        function () {
          n(null);
        }
      );
    } else if (t != null) {
      var l = t;
      l.hasOwnProperty('current') ||
        d(
          'Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.',
          'an object with keys {' + Object.keys(l).join(', ') + '}'
        );
      var u = e();
      return (
        (l.current = u),
        function () {
          l.current = null;
        }
      );
    }
  }
  function sh(e, t, n) {
    typeof t != 'function' &&
      d(
        'Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.',
        t !== null ? typeof t : 'null'
      );
    var a = n != null ? n.concat([e]) : null,
      l = St;
    return (
      (l |= Ji),
      (Nt.mode & sa) !== Be && (l |= Na),
      iu(l, yn, dS.bind(null, t, e), a)
    );
  }
  function Rf(e, t, n) {
    typeof t != 'function' &&
      d(
        'Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.',
        t !== null ? typeof t : 'null'
      );
    var a = n != null ? n.concat([e]) : null;
    return Cf(St, yn, dS.bind(null, t, e), a);
  }
  function OO(e, t) {}
  var _f = OO;
  function uh(e, t) {
    var n = pa(),
      a = t === void 0 ? null : t;
    return ((n.memoizedState = [e, a]), e);
  }
  function Df(e, t) {
    var n = Nr(),
      a = t === void 0 ? null : t,
      l = n.memoizedState;
    if (l !== null && a !== null) {
      var u = l[1];
      if (Kv(a, u)) return l[0];
    }
    return ((n.memoizedState = [e, a]), e);
  }
  function ch(e, t) {
    var n = pa(),
      a = t === void 0 ? null : t,
      l = e();
    return ((n.memoizedState = [l, a]), l);
  }
  function Of(e, t) {
    var n = Nr(),
      a = t === void 0 ? null : t,
      l = n.memoizedState;
    if (l !== null && a !== null) {
      var u = l[1];
      if (Kv(a, u)) return l[0];
    }
    var p = e();
    return ((n.memoizedState = [p, a]), p);
  }
  function fh(e) {
    var t = pa();
    return ((t.memoizedState = e), e);
  }
  function pS(e) {
    var t = Nr(),
      n = gn,
      a = n.memoizedState;
    return hS(t, a, e);
  }
  function vS(e) {
    var t = Nr();
    if (gn === null) return ((t.memoizedState = e), e);
    var n = gn.memoizedState;
    return hS(t, n, e);
  }
  function hS(e, t, n) {
    var a = !vR(mo);
    if (a) {
      if (!Er(n, t)) {
        var l = fg();
        ((Nt.lanes = st(Nt.lanes, l)), wu(l), (e.baseState = !0));
      }
      return t;
    } else
      return (
        e.baseState && ((e.baseState = !1), du()),
        (e.memoizedState = n),
        n
      );
  }
  function AO(e, t, n) {
    var a = Br();
    (An(TR(a, Ua)), e(!0));
    var l = tu.transition;
    tu.transition = {};
    var u = tu.transition;
    tu.transition._updatedFibers = new Set();
    try {
      (e(!1), t());
    } finally {
      if ((An(a), (tu.transition = l), l === null && u._updatedFibers)) {
        var p = u._updatedFibers.size;
        (p > 10 &&
          f(
            'Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.'
          ),
          u._updatedFibers.clear());
      }
    }
  }
  function dh() {
    var e = Sf(!1),
      t = e[0],
      n = e[1],
      a = AO.bind(null, n),
      l = pa();
    return ((l.memoizedState = a), [t, a]);
  }
  function mS() {
    var e = rh(),
      t = e[0],
      n = Nr(),
      a = n.memoizedState;
    return [t, a];
  }
  function yS() {
    var e = ah(),
      t = e[0],
      n = Nr(),
      a = n.memoizedState;
    return [t, a];
  }
  var gS = !1;
  function MO() {
    return gS;
  }
  function ph() {
    var e = pa(),
      t = Qf(),
      n = t.identifierPrefix,
      a;
    if (Nn()) {
      var l = qD();
      a = ':' + n + 'R' + l;
      var u = ru++;
      (u > 0 && (a += 'H' + u.toString(32)), (a += ':'));
    } else {
      var p = RO++;
      a = ':' + n + 'r' + p.toString(32) + ':';
    }
    return ((e.memoizedState = a), a);
  }
  function Af() {
    var e = Nr(),
      t = e.memoizedState;
    return t;
  }
  function LO(e, t, n) {
    typeof arguments[3] == 'function' &&
      d(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      );
    var a = Li(e),
      l = {
        lane: a,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (bS(e)) SS(t, l);
    else {
      var u = qb(e, t, l, a);
      if (u !== null) {
        var p = er();
        (Tn(u, e, a, p), ES(u, t, a));
      }
    }
    CS(e, a);
  }
  function kO(e, t, n) {
    typeof arguments[3] == 'function' &&
      d(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      );
    var a = Li(e),
      l = {
        lane: a,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (bS(e)) SS(t, l);
    else {
      var u = e.alternate;
      if (e.lanes === se && (u === null || u.lanes === se)) {
        var p = t.lastRenderedReducer;
        if (p !== null) {
          var v;
          ((v = De.current), (De.current = Wr));
          try {
            var y = t.lastRenderedState,
              C = p(y, n);
            if (((l.hasEagerState = !0), (l.eagerState = C), Er(C, y))) {
              yO(e, t, l, a);
              return;
            }
          } catch {
          } finally {
            De.current = v;
          }
        }
      }
      var T = qb(e, t, l, a);
      if (T !== null) {
        var k = er();
        (Tn(T, e, a, k), ES(T, t, a));
      }
    }
    CS(e, a);
  }
  function bS(e) {
    var t = e.alternate;
    return e === Nt || (t !== null && t === Nt);
  }
  function SS(e, t) {
    nu = gf = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function ES(e, t, n) {
    if (cg(n)) {
      var a = t.lanes;
      a = dg(a, e.pendingLanes);
      var l = st(a, n);
      ((t.lanes = l), Lp(e, l));
    }
  }
  function CS(e, t, n) {
    lp(e, t);
  }
  var Mf = {
      readContext: dn,
      useCallback: Wn,
      useContext: Wn,
      useEffect: Wn,
      useImperativeHandle: Wn,
      useInsertionEffect: Wn,
      useLayoutEffect: Wn,
      useMemo: Wn,
      useReducer: Wn,
      useRef: Wn,
      useState: Wn,
      useDebugValue: Wn,
      useDeferredValue: Wn,
      useTransition: Wn,
      useMutableSource: Wn,
      useSyncExternalStore: Wn,
      useId: Wn,
      unstable_isNewReconciler: Ve,
    },
    TS = null,
    wS = null,
    xS = null,
    RS = null,
    va = null,
    Wr = null,
    Lf = null;
  {
    var vh = function () {
        d(
          'Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().'
        );
      },
      nt = function () {
        d(
          'Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks'
        );
      };
    ((TS = {
      readContext: function (e) {
        return dn(e);
      },
      useCallback: function (e, t) {
        return ((Z = 'useCallback'), Mt(), yl(t), uh(e, t));
      },
      useContext: function (e) {
        return ((Z = 'useContext'), Mt(), dn(e));
      },
      useEffect: function (e, t) {
        return ((Z = 'useEffect'), Mt(), yl(t), Tf(e, t));
      },
      useImperativeHandle: function (e, t, n) {
        return ((Z = 'useImperativeHandle'), Mt(), yl(n), sh(e, t, n));
      },
      useInsertionEffect: function (e, t) {
        return ((Z = 'useInsertionEffect'), Mt(), yl(t), oh(e, t));
      },
      useLayoutEffect: function (e, t) {
        return ((Z = 'useLayoutEffect'), Mt(), yl(t), lh(e, t));
      },
      useMemo: function (e, t) {
        ((Z = 'useMemo'), Mt(), yl(t));
        var n = De.current;
        De.current = va;
        try {
          return ch(e, t);
        } finally {
          De.current = n;
        }
      },
      useReducer: function (e, t, n) {
        ((Z = 'useReducer'), Mt());
        var a = De.current;
        De.current = va;
        try {
          return Zv(e, t, n);
        } finally {
          De.current = a;
        }
      },
      useRef: function (e) {
        return ((Z = 'useRef'), Mt(), ih(e));
      },
      useState: function (e) {
        ((Z = 'useState'), Mt());
        var t = De.current;
        De.current = va;
        try {
          return Sf(e);
        } finally {
          De.current = t;
        }
      },
      useDebugValue: function (e, t) {
        return ((Z = 'useDebugValue'), Mt(), void 0);
      },
      useDeferredValue: function (e) {
        return ((Z = 'useDeferredValue'), Mt(), fh(e));
      },
      useTransition: function () {
        return ((Z = 'useTransition'), Mt(), dh());
      },
      useMutableSource: function (e, t, n) {
        return ((Z = 'useMutableSource'), Mt(), void 0);
      },
      useSyncExternalStore: function (e, t, n) {
        return ((Z = 'useSyncExternalStore'), Mt(), nh(e, t, n));
      },
      useId: function () {
        return ((Z = 'useId'), Mt(), ph());
      },
      unstable_isNewReconciler: Ve,
    }),
      (wS = {
        readContext: function (e) {
          return dn(e);
        },
        useCallback: function (e, t) {
          return ((Z = 'useCallback'), Ce(), uh(e, t));
        },
        useContext: function (e) {
          return ((Z = 'useContext'), Ce(), dn(e));
        },
        useEffect: function (e, t) {
          return ((Z = 'useEffect'), Ce(), Tf(e, t));
        },
        useImperativeHandle: function (e, t, n) {
          return ((Z = 'useImperativeHandle'), Ce(), sh(e, t, n));
        },
        useInsertionEffect: function (e, t) {
          return ((Z = 'useInsertionEffect'), Ce(), oh(e, t));
        },
        useLayoutEffect: function (e, t) {
          return ((Z = 'useLayoutEffect'), Ce(), lh(e, t));
        },
        useMemo: function (e, t) {
          ((Z = 'useMemo'), Ce());
          var n = De.current;
          De.current = va;
          try {
            return ch(e, t);
          } finally {
            De.current = n;
          }
        },
        useReducer: function (e, t, n) {
          ((Z = 'useReducer'), Ce());
          var a = De.current;
          De.current = va;
          try {
            return Zv(e, t, n);
          } finally {
            De.current = a;
          }
        },
        useRef: function (e) {
          return ((Z = 'useRef'), Ce(), ih(e));
        },
        useState: function (e) {
          ((Z = 'useState'), Ce());
          var t = De.current;
          De.current = va;
          try {
            return Sf(e);
          } finally {
            De.current = t;
          }
        },
        useDebugValue: function (e, t) {
          return ((Z = 'useDebugValue'), Ce(), void 0);
        },
        useDeferredValue: function (e) {
          return ((Z = 'useDeferredValue'), Ce(), fh(e));
        },
        useTransition: function () {
          return ((Z = 'useTransition'), Ce(), dh());
        },
        useMutableSource: function (e, t, n) {
          return ((Z = 'useMutableSource'), Ce(), void 0);
        },
        useSyncExternalStore: function (e, t, n) {
          return ((Z = 'useSyncExternalStore'), Ce(), nh(e, t, n));
        },
        useId: function () {
          return ((Z = 'useId'), Ce(), ph());
        },
        unstable_isNewReconciler: Ve,
      }),
      (xS = {
        readContext: function (e) {
          return dn(e);
        },
        useCallback: function (e, t) {
          return ((Z = 'useCallback'), Ce(), Df(e, t));
        },
        useContext: function (e) {
          return ((Z = 'useContext'), Ce(), dn(e));
        },
        useEffect: function (e, t) {
          return ((Z = 'useEffect'), Ce(), ou(e, t));
        },
        useImperativeHandle: function (e, t, n) {
          return ((Z = 'useImperativeHandle'), Ce(), Rf(e, t, n));
        },
        useInsertionEffect: function (e, t) {
          return ((Z = 'useInsertionEffect'), Ce(), wf(e, t));
        },
        useLayoutEffect: function (e, t) {
          return ((Z = 'useLayoutEffect'), Ce(), xf(e, t));
        },
        useMemo: function (e, t) {
          ((Z = 'useMemo'), Ce());
          var n = De.current;
          De.current = Wr;
          try {
            return Of(e, t);
          } finally {
            De.current = n;
          }
        },
        useReducer: function (e, t, n) {
          ((Z = 'useReducer'), Ce());
          var a = De.current;
          De.current = Wr;
          try {
            return eh(e, t, n);
          } finally {
            De.current = a;
          }
        },
        useRef: function (e) {
          return ((Z = 'useRef'), Ce(), Ef());
        },
        useState: function (e) {
          ((Z = 'useState'), Ce());
          var t = De.current;
          De.current = Wr;
          try {
            return rh(e);
          } finally {
            De.current = t;
          }
        },
        useDebugValue: function (e, t) {
          return ((Z = 'useDebugValue'), Ce(), _f());
        },
        useDeferredValue: function (e) {
          return ((Z = 'useDeferredValue'), Ce(), pS(e));
        },
        useTransition: function () {
          return ((Z = 'useTransition'), Ce(), mS());
        },
        useMutableSource: function (e, t, n) {
          return ((Z = 'useMutableSource'), Ce(), void 0);
        },
        useSyncExternalStore: function (e, t, n) {
          return ((Z = 'useSyncExternalStore'), Ce(), bf(e, t));
        },
        useId: function () {
          return ((Z = 'useId'), Ce(), Af());
        },
        unstable_isNewReconciler: Ve,
      }),
      (RS = {
        readContext: function (e) {
          return dn(e);
        },
        useCallback: function (e, t) {
          return ((Z = 'useCallback'), Ce(), Df(e, t));
        },
        useContext: function (e) {
          return ((Z = 'useContext'), Ce(), dn(e));
        },
        useEffect: function (e, t) {
          return ((Z = 'useEffect'), Ce(), ou(e, t));
        },
        useImperativeHandle: function (e, t, n) {
          return ((Z = 'useImperativeHandle'), Ce(), Rf(e, t, n));
        },
        useInsertionEffect: function (e, t) {
          return ((Z = 'useInsertionEffect'), Ce(), wf(e, t));
        },
        useLayoutEffect: function (e, t) {
          return ((Z = 'useLayoutEffect'), Ce(), xf(e, t));
        },
        useMemo: function (e, t) {
          ((Z = 'useMemo'), Ce());
          var n = De.current;
          De.current = Lf;
          try {
            return Of(e, t);
          } finally {
            De.current = n;
          }
        },
        useReducer: function (e, t, n) {
          ((Z = 'useReducer'), Ce());
          var a = De.current;
          De.current = Lf;
          try {
            return th(e, t, n);
          } finally {
            De.current = a;
          }
        },
        useRef: function (e) {
          return ((Z = 'useRef'), Ce(), Ef());
        },
        useState: function (e) {
          ((Z = 'useState'), Ce());
          var t = De.current;
          De.current = Lf;
          try {
            return ah(e);
          } finally {
            De.current = t;
          }
        },
        useDebugValue: function (e, t) {
          return ((Z = 'useDebugValue'), Ce(), _f());
        },
        useDeferredValue: function (e) {
          return ((Z = 'useDeferredValue'), Ce(), vS(e));
        },
        useTransition: function () {
          return ((Z = 'useTransition'), Ce(), yS());
        },
        useMutableSource: function (e, t, n) {
          return ((Z = 'useMutableSource'), Ce(), void 0);
        },
        useSyncExternalStore: function (e, t, n) {
          return ((Z = 'useSyncExternalStore'), Ce(), bf(e, t));
        },
        useId: function () {
          return ((Z = 'useId'), Ce(), Af());
        },
        unstable_isNewReconciler: Ve,
      }),
      (va = {
        readContext: function (e) {
          return (vh(), dn(e));
        },
        useCallback: function (e, t) {
          return ((Z = 'useCallback'), nt(), Mt(), uh(e, t));
        },
        useContext: function (e) {
          return ((Z = 'useContext'), nt(), Mt(), dn(e));
        },
        useEffect: function (e, t) {
          return ((Z = 'useEffect'), nt(), Mt(), Tf(e, t));
        },
        useImperativeHandle: function (e, t, n) {
          return ((Z = 'useImperativeHandle'), nt(), Mt(), sh(e, t, n));
        },
        useInsertionEffect: function (e, t) {
          return ((Z = 'useInsertionEffect'), nt(), Mt(), oh(e, t));
        },
        useLayoutEffect: function (e, t) {
          return ((Z = 'useLayoutEffect'), nt(), Mt(), lh(e, t));
        },
        useMemo: function (e, t) {
          ((Z = 'useMemo'), nt(), Mt());
          var n = De.current;
          De.current = va;
          try {
            return ch(e, t);
          } finally {
            De.current = n;
          }
        },
        useReducer: function (e, t, n) {
          ((Z = 'useReducer'), nt(), Mt());
          var a = De.current;
          De.current = va;
          try {
            return Zv(e, t, n);
          } finally {
            De.current = a;
          }
        },
        useRef: function (e) {
          return ((Z = 'useRef'), nt(), Mt(), ih(e));
        },
        useState: function (e) {
          ((Z = 'useState'), nt(), Mt());
          var t = De.current;
          De.current = va;
          try {
            return Sf(e);
          } finally {
            De.current = t;
          }
        },
        useDebugValue: function (e, t) {
          return ((Z = 'useDebugValue'), nt(), Mt(), void 0);
        },
        useDeferredValue: function (e) {
          return ((Z = 'useDeferredValue'), nt(), Mt(), fh(e));
        },
        useTransition: function () {
          return ((Z = 'useTransition'), nt(), Mt(), dh());
        },
        useMutableSource: function (e, t, n) {
          return ((Z = 'useMutableSource'), nt(), Mt(), void 0);
        },
        useSyncExternalStore: function (e, t, n) {
          return ((Z = 'useSyncExternalStore'), nt(), Mt(), nh(e, t, n));
        },
        useId: function () {
          return ((Z = 'useId'), nt(), Mt(), ph());
        },
        unstable_isNewReconciler: Ve,
      }),
      (Wr = {
        readContext: function (e) {
          return (vh(), dn(e));
        },
        useCallback: function (e, t) {
          return ((Z = 'useCallback'), nt(), Ce(), Df(e, t));
        },
        useContext: function (e) {
          return ((Z = 'useContext'), nt(), Ce(), dn(e));
        },
        useEffect: function (e, t) {
          return ((Z = 'useEffect'), nt(), Ce(), ou(e, t));
        },
        useImperativeHandle: function (e, t, n) {
          return ((Z = 'useImperativeHandle'), nt(), Ce(), Rf(e, t, n));
        },
        useInsertionEffect: function (e, t) {
          return ((Z = 'useInsertionEffect'), nt(), Ce(), wf(e, t));
        },
        useLayoutEffect: function (e, t) {
          return ((Z = 'useLayoutEffect'), nt(), Ce(), xf(e, t));
        },
        useMemo: function (e, t) {
          ((Z = 'useMemo'), nt(), Ce());
          var n = De.current;
          De.current = Wr;
          try {
            return Of(e, t);
          } finally {
            De.current = n;
          }
        },
        useReducer: function (e, t, n) {
          ((Z = 'useReducer'), nt(), Ce());
          var a = De.current;
          De.current = Wr;
          try {
            return eh(e, t, n);
          } finally {
            De.current = a;
          }
        },
        useRef: function (e) {
          return ((Z = 'useRef'), nt(), Ce(), Ef());
        },
        useState: function (e) {
          ((Z = 'useState'), nt(), Ce());
          var t = De.current;
          De.current = Wr;
          try {
            return rh(e);
          } finally {
            De.current = t;
          }
        },
        useDebugValue: function (e, t) {
          return ((Z = 'useDebugValue'), nt(), Ce(), _f());
        },
        useDeferredValue: function (e) {
          return ((Z = 'useDeferredValue'), nt(), Ce(), pS(e));
        },
        useTransition: function () {
          return ((Z = 'useTransition'), nt(), Ce(), mS());
        },
        useMutableSource: function (e, t, n) {
          return ((Z = 'useMutableSource'), nt(), Ce(), void 0);
        },
        useSyncExternalStore: function (e, t, n) {
          return ((Z = 'useSyncExternalStore'), nt(), Ce(), bf(e, t));
        },
        useId: function () {
          return ((Z = 'useId'), nt(), Ce(), Af());
        },
        unstable_isNewReconciler: Ve,
      }),
      (Lf = {
        readContext: function (e) {
          return (vh(), dn(e));
        },
        useCallback: function (e, t) {
          return ((Z = 'useCallback'), nt(), Ce(), Df(e, t));
        },
        useContext: function (e) {
          return ((Z = 'useContext'), nt(), Ce(), dn(e));
        },
        useEffect: function (e, t) {
          return ((Z = 'useEffect'), nt(), Ce(), ou(e, t));
        },
        useImperativeHandle: function (e, t, n) {
          return ((Z = 'useImperativeHandle'), nt(), Ce(), Rf(e, t, n));
        },
        useInsertionEffect: function (e, t) {
          return ((Z = 'useInsertionEffect'), nt(), Ce(), wf(e, t));
        },
        useLayoutEffect: function (e, t) {
          return ((Z = 'useLayoutEffect'), nt(), Ce(), xf(e, t));
        },
        useMemo: function (e, t) {
          ((Z = 'useMemo'), nt(), Ce());
          var n = De.current;
          De.current = Wr;
          try {
            return Of(e, t);
          } finally {
            De.current = n;
          }
        },
        useReducer: function (e, t, n) {
          ((Z = 'useReducer'), nt(), Ce());
          var a = De.current;
          De.current = Wr;
          try {
            return th(e, t, n);
          } finally {
            De.current = a;
          }
        },
        useRef: function (e) {
          return ((Z = 'useRef'), nt(), Ce(), Ef());
        },
        useState: function (e) {
          ((Z = 'useState'), nt(), Ce());
          var t = De.current;
          De.current = Wr;
          try {
            return ah(e);
          } finally {
            De.current = t;
          }
        },
        useDebugValue: function (e, t) {
          return ((Z = 'useDebugValue'), nt(), Ce(), _f());
        },
        useDeferredValue: function (e) {
          return ((Z = 'useDeferredValue'), nt(), Ce(), vS(e));
        },
        useTransition: function () {
          return ((Z = 'useTransition'), nt(), Ce(), yS());
        },
        useMutableSource: function (e, t, n) {
          return ((Z = 'useMutableSource'), nt(), Ce(), void 0);
        },
        useSyncExternalStore: function (e, t, n) {
          return ((Z = 'useSyncExternalStore'), nt(), Ce(), bf(e, t));
        },
        useId: function () {
          return ((Z = 'useId'), nt(), Ce(), Af());
        },
        unstable_isNewReconciler: Ve,
      }));
  }
  var Di = i.unstable_now,
    _S = 0,
    kf = -1,
    lu = -1,
    Nf = -1,
    hh = !1,
    Pf = !1;
  function DS() {
    return hh;
  }
  function NO() {
    Pf = !0;
  }
  function PO() {
    ((hh = !1), (Pf = !1));
  }
  function zO() {
    ((hh = Pf), (Pf = !1));
  }
  function OS() {
    return _S;
  }
  function AS() {
    _S = Di();
  }
  function mh(e) {
    ((lu = Di()), e.actualStartTime < 0 && (e.actualStartTime = Di()));
  }
  function MS(e) {
    lu = -1;
  }
  function zf(e, t) {
    if (lu >= 0) {
      var n = Di() - lu;
      ((e.actualDuration += n), t && (e.selfBaseDuration = n), (lu = -1));
    }
  }
  function ha(e) {
    if (kf >= 0) {
      var t = Di() - kf;
      kf = -1;
      for (var n = e.return; n !== null; ) {
        switch (n.tag) {
          case S:
            var a = n.stateNode;
            a.effectDuration += t;
            return;
          case U:
            var l = n.stateNode;
            l.effectDuration += t;
            return;
        }
        n = n.return;
      }
    }
  }
  function yh(e) {
    if (Nf >= 0) {
      var t = Di() - Nf;
      Nf = -1;
      for (var n = e.return; n !== null; ) {
        switch (n.tag) {
          case S:
            var a = n.stateNode;
            a !== null && (a.passiveEffectDuration += t);
            return;
          case U:
            var l = n.stateNode;
            l !== null && (l.passiveEffectDuration += t);
            return;
        }
        n = n.return;
      }
    }
  }
  function ma() {
    kf = Di();
  }
  function gh() {
    Nf = Di();
  }
  function bh(e) {
    for (var t = e.child; t; )
      ((e.actualDuration += t.actualDuration), (t = t.sibling));
  }
  function qr(e, t) {
    if (e && e.defaultProps) {
      var n = ct({}, t),
        a = e.defaultProps;
      for (var l in a) n[l] === void 0 && (n[l] = a[l]);
      return n;
    }
    return t;
  }
  var Sh = {},
    Eh,
    Ch,
    Th,
    wh,
    xh,
    LS,
    Uf,
    Rh,
    _h,
    Dh,
    su;
  {
    ((Eh = new Set()),
      (Ch = new Set()),
      (Th = new Set()),
      (wh = new Set()),
      (Rh = new Set()),
      (xh = new Set()),
      (_h = new Set()),
      (Dh = new Set()),
      (su = new Set()));
    var kS = new Set();
    ((Uf = function (e, t) {
      if (!(e === null || typeof e == 'function')) {
        var n = t + '_' + e;
        kS.has(n) ||
          (kS.add(n),
          d(
            '%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.',
            t,
            e
          ));
      }
    }),
      (LS = function (e, t) {
        if (t === void 0) {
          var n = Ct(e) || 'Component';
          xh.has(n) ||
            (xh.add(n),
            d(
              '%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.',
              n
            ));
        }
      }),
      Object.defineProperty(Sh, '_processChildContext', {
        enumerable: !1,
        value: function () {
          throw new Error(
            "_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal)."
          );
        },
      }),
      Object.freeze(Sh));
  }
  function Oh(e, t, n, a) {
    var l = e.memoizedState,
      u = n(a, l);
    {
      if (e.mode & an) {
        Dn(!0);
        try {
          u = n(a, l);
        } finally {
          Dn(!1);
        }
      }
      LS(t, u);
    }
    var p = u == null ? l : ct({}, l, u);
    if (((e.memoizedState = p), e.lanes === se)) {
      var v = e.updateQueue;
      v.baseState = p;
    }
  }
  var Ah = {
    isMounted: _x,
    enqueueSetState: function (e, t, n) {
      var a = Io(e),
        l = er(),
        u = Li(a),
        p = $a(l, u);
      ((p.payload = t), n != null && (Uf(n, 'setState'), (p.callback = n)));
      var v = wi(a, p, u);
      (v !== null && (Tn(v, a, u, l), df(v, a, u)), lp(a, u));
    },
    enqueueReplaceState: function (e, t, n) {
      var a = Io(e),
        l = er(),
        u = Li(a),
        p = $a(l, u);
      ((p.tag = Qb),
        (p.payload = t),
        n != null && (Uf(n, 'replaceState'), (p.callback = n)));
      var v = wi(a, p, u);
      (v !== null && (Tn(v, a, u, l), df(v, a, u)), lp(a, u));
    },
    enqueueForceUpdate: function (e, t) {
      var n = Io(e),
        a = er(),
        l = Li(n),
        u = $a(a, l);
      ((u.tag = uf), t != null && (Uf(t, 'forceUpdate'), (u.callback = t)));
      var p = wi(n, u, l);
      (p !== null && (Tn(p, n, l, a), df(p, n, l)), aR(n, l));
    },
  };
  function NS(e, t, n, a, l, u, p) {
    var v = e.stateNode;
    if (typeof v.shouldComponentUpdate == 'function') {
      var y = v.shouldComponentUpdate(a, u, p);
      {
        if (e.mode & an) {
          Dn(!0);
          try {
            y = v.shouldComponentUpdate(a, u, p);
          } finally {
            Dn(!1);
          }
        }
        y === void 0 &&
          d(
            '%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.',
            Ct(t) || 'Component'
          );
      }
      return y;
    }
    return t.prototype && t.prototype.isPureReactComponent
      ? !As(n, a) || !As(l, u)
      : !0;
  }
  function UO(e, t, n) {
    var a = e.stateNode;
    {
      var l = Ct(t) || 'Component',
        u = a.render;
      (u ||
        (t.prototype && typeof t.prototype.render == 'function'
          ? d(
              '%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?',
              l
            )
          : d(
              '%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.',
              l
            )),
        a.getInitialState &&
          !a.getInitialState.isReactClassApproved &&
          !a.state &&
          d(
            'getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?',
            l
          ),
        a.getDefaultProps &&
          !a.getDefaultProps.isReactClassApproved &&
          d(
            'getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.',
            l
          ),
        a.propTypes &&
          d(
            'propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.',
            l
          ),
        a.contextType &&
          d(
            'contextType was defined as an instance property on %s. Use a static property to define contextType instead.',
            l
          ),
        t.childContextTypes &&
          !su.has(t) &&
          (e.mode & an) === Be &&
          (su.add(t),
          d(
            `%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`,
            l
          )),
        t.contextTypes &&
          !su.has(t) &&
          (e.mode & an) === Be &&
          (su.add(t),
          d(
            `%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`,
            l
          )),
        a.contextTypes &&
          d(
            'contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.',
            l
          ),
        t.contextType &&
          t.contextTypes &&
          !_h.has(t) &&
          (_h.add(t),
          d(
            '%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.',
            l
          )),
        typeof a.componentShouldUpdate == 'function' &&
          d(
            '%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.',
            l
          ),
        t.prototype &&
          t.prototype.isPureReactComponent &&
          typeof a.shouldComponentUpdate < 'u' &&
          d(
            '%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.',
            Ct(t) || 'A pure component'
          ),
        typeof a.componentDidUnmount == 'function' &&
          d(
            '%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?',
            l
          ),
        typeof a.componentDidReceiveProps == 'function' &&
          d(
            '%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().',
            l
          ),
        typeof a.componentWillRecieveProps == 'function' &&
          d(
            '%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
            l
          ),
        typeof a.UNSAFE_componentWillRecieveProps == 'function' &&
          d(
            '%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?',
            l
          ));
      var p = a.props !== n;
      (a.props !== void 0 &&
        p &&
        d(
          "%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
          l,
          l
        ),
        a.defaultProps &&
          d(
            'Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.',
            l,
            l
          ),
        typeof a.getSnapshotBeforeUpdate == 'function' &&
          typeof a.componentDidUpdate != 'function' &&
          !Th.has(t) &&
          (Th.add(t),
          d(
            '%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.',
            Ct(t)
          )),
        typeof a.getDerivedStateFromProps == 'function' &&
          d(
            '%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.',
            l
          ),
        typeof a.getDerivedStateFromError == 'function' &&
          d(
            '%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.',
            l
          ),
        typeof t.getSnapshotBeforeUpdate == 'function' &&
          d(
            '%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.',
            l
          ));
      var v = a.state;
      (v &&
        (typeof v != 'object' || _t(v)) &&
        d('%s.state: must be set to an object or null', l),
        typeof a.getChildContext == 'function' &&
          typeof t.childContextTypes != 'object' &&
          d(
            '%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().',
            l
          ));
    }
  }
  function PS(e, t) {
    ((t.updater = Ah),
      (e.stateNode = t),
      Cx(t, e),
      (t._reactInternalInstance = Sh));
  }
  function zS(e, t, n) {
    var a = !1,
      l = Cr,
      u = Cr,
      p = t.contextType;
    if ('contextType' in t) {
      var v =
        p === null ||
        (p !== void 0 && p.$$typeof === le && p._context === void 0);
      if (!v && !Dh.has(t)) {
        Dh.add(t);
        var y = '';
        (p === void 0
          ? (y =
              ' However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.')
          : typeof p != 'object'
            ? (y = ' However, it is set to a ' + typeof p + '.')
            : p.$$typeof === M
              ? (y = ' Did you accidentally pass the Context.Provider instead?')
              : p._context !== void 0
                ? (y =
                    ' Did you accidentally pass the Context.Consumer instead?')
                : (y =
                    ' However, it is set to an object with keys {' +
                    Object.keys(p).join(', ') +
                    '}.'),
          d(
            '%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s',
            Ct(t) || 'Component',
            y
          ));
      }
    }
    if (typeof p == 'object' && p !== null) u = dn(p);
    else {
      l = il(e, t, !0);
      var C = t.contextTypes;
      ((a = C != null), (u = a ? ol(e, l) : Cr));
    }
    var T = new t(n, u);
    if (e.mode & an) {
      Dn(!0);
      try {
        T = new t(n, u);
      } finally {
        Dn(!1);
      }
    }
    var k = (e.memoizedState =
      T.state !== null && T.state !== void 0 ? T.state : null);
    PS(e, T);
    {
      if (typeof t.getDerivedStateFromProps == 'function' && k === null) {
        var L = Ct(t) || 'Component';
        Ch.has(L) ||
          (Ch.add(L),
          d(
            '`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.',
            L,
            T.state === null ? 'null' : 'undefined',
            L
          ));
      }
      if (
        typeof t.getDerivedStateFromProps == 'function' ||
        typeof T.getSnapshotBeforeUpdate == 'function'
      ) {
        var B = null,
          Y = null,
          X = null;
        if (
          (typeof T.componentWillMount == 'function' &&
          T.componentWillMount.__suppressDeprecationWarning !== !0
            ? (B = 'componentWillMount')
            : typeof T.UNSAFE_componentWillMount == 'function' &&
              (B = 'UNSAFE_componentWillMount'),
          typeof T.componentWillReceiveProps == 'function' &&
          T.componentWillReceiveProps.__suppressDeprecationWarning !== !0
            ? (Y = 'componentWillReceiveProps')
            : typeof T.UNSAFE_componentWillReceiveProps == 'function' &&
              (Y = 'UNSAFE_componentWillReceiveProps'),
          typeof T.componentWillUpdate == 'function' &&
          T.componentWillUpdate.__suppressDeprecationWarning !== !0
            ? (X = 'componentWillUpdate')
            : typeof T.UNSAFE_componentWillUpdate == 'function' &&
              (X = 'UNSAFE_componentWillUpdate'),
          B !== null || Y !== null || X !== null)
        ) {
          var we = Ct(t) || 'Component',
            He =
              typeof t.getDerivedStateFromProps == 'function'
                ? 'getDerivedStateFromProps()'
                : 'getSnapshotBeforeUpdate()';
          wh.has(we) ||
            (wh.add(we),
            d(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`,
              we,
              He,
              B !== null
                ? `
  ` + B
                : '',
              Y !== null
                ? `
  ` + Y
                : '',
              X !== null
                ? `
  ` + X
                : ''
            ));
        }
      }
    }
    return (a && xb(e, l, u), T);
  }
  function FO(e, t) {
    var n = t.state;
    (typeof t.componentWillMount == 'function' && t.componentWillMount(),
      typeof t.UNSAFE_componentWillMount == 'function' &&
        t.UNSAFE_componentWillMount(),
      n !== t.state &&
        (d(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          lt(e) || 'Component'
        ),
        Ah.enqueueReplaceState(t, t.state, null)));
  }
  function US(e, t, n, a) {
    var l = t.state;
    if (
      (typeof t.componentWillReceiveProps == 'function' &&
        t.componentWillReceiveProps(n, a),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, a),
      t.state !== l)
    ) {
      {
        var u = lt(e) || 'Component';
        Eh.has(u) ||
          (Eh.add(u),
          d(
            "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
            u
          ));
      }
      Ah.enqueueReplaceState(t, t.state, null);
    }
  }
  function Mh(e, t, n, a) {
    UO(e, t, n);
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Hv(e));
    var u = t.contextType;
    if (typeof u == 'object' && u !== null) l.context = dn(u);
    else {
      var p = il(e, t, !0);
      l.context = ol(e, p);
    }
    {
      if (l.state === n) {
        var v = Ct(t) || 'Component';
        Rh.has(v) ||
          (Rh.add(v),
          d(
            "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
            v
          ));
      }
      (e.mode & an && Yr.recordLegacyContextWarning(e, l),
        Yr.recordUnsafeLifecycleWarnings(e, l));
    }
    l.state = e.memoizedState;
    var y = t.getDerivedStateFromProps;
    if (
      (typeof y == 'function' && (Oh(e, t, y, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps != 'function' &&
        typeof l.getSnapshotBeforeUpdate != 'function' &&
        (typeof l.UNSAFE_componentWillMount == 'function' ||
          typeof l.componentWillMount == 'function') &&
        (FO(e, l), pf(e, n, l, a), (l.state = e.memoizedState)),
      typeof l.componentDidMount == 'function')
    ) {
      var C = St;
      ((C |= Ji), (e.mode & sa) !== Be && (C |= Na), (e.flags |= C));
    }
  }
  function VO(e, t, n, a) {
    var l = e.stateNode,
      u = e.memoizedProps;
    l.props = u;
    var p = l.context,
      v = t.contextType,
      y = Cr;
    if (typeof v == 'object' && v !== null) y = dn(v);
    else {
      var C = il(e, t, !0);
      y = ol(e, C);
    }
    var T = t.getDerivedStateFromProps,
      k =
        typeof T == 'function' ||
        typeof l.getSnapshotBeforeUpdate == 'function';
    (!k &&
      (typeof l.UNSAFE_componentWillReceiveProps == 'function' ||
        typeof l.componentWillReceiveProps == 'function') &&
      (u !== n || p !== y) &&
      US(e, l, n, y),
      Jb());
    var L = e.memoizedState,
      B = (l.state = L);
    if (
      (pf(e, n, l, a),
      (B = e.memoizedState),
      u === n && L === B && !Wc() && !vf())
    ) {
      if (typeof l.componentDidMount == 'function') {
        var Y = St;
        ((Y |= Ji), (e.mode & sa) !== Be && (Y |= Na), (e.flags |= Y));
      }
      return !1;
    }
    typeof T == 'function' && (Oh(e, t, T, n), (B = e.memoizedState));
    var X = vf() || NS(e, t, u, n, L, B, y);
    if (X) {
      if (
        (!k &&
          (typeof l.UNSAFE_componentWillMount == 'function' ||
            typeof l.componentWillMount == 'function') &&
          (typeof l.componentWillMount == 'function' && l.componentWillMount(),
          typeof l.UNSAFE_componentWillMount == 'function' &&
            l.UNSAFE_componentWillMount()),
        typeof l.componentDidMount == 'function')
      ) {
        var we = St;
        ((we |= Ji), (e.mode & sa) !== Be && (we |= Na), (e.flags |= we));
      }
    } else {
      if (typeof l.componentDidMount == 'function') {
        var He = St;
        ((He |= Ji), (e.mode & sa) !== Be && (He |= Na), (e.flags |= He));
      }
      ((e.memoizedProps = n), (e.memoizedState = B));
    }
    return ((l.props = n), (l.state = B), (l.context = y), X);
  }
  function HO(e, t, n, a, l) {
    var u = t.stateNode;
    Kb(e, t);
    var p = t.memoizedProps,
      v = t.type === t.elementType ? p : qr(t.type, p);
    u.props = v;
    var y = t.pendingProps,
      C = u.context,
      T = n.contextType,
      k = Cr;
    if (typeof T == 'object' && T !== null) k = dn(T);
    else {
      var L = il(t, n, !0);
      k = ol(t, L);
    }
    var B = n.getDerivedStateFromProps,
      Y =
        typeof B == 'function' ||
        typeof u.getSnapshotBeforeUpdate == 'function';
    (!Y &&
      (typeof u.UNSAFE_componentWillReceiveProps == 'function' ||
        typeof u.componentWillReceiveProps == 'function') &&
      (p !== y || C !== k) &&
      US(t, u, a, k),
      Jb());
    var X = t.memoizedState,
      we = (u.state = X);
    if (
      (pf(t, a, u, l),
      (we = t.memoizedState),
      p === y && X === we && !Wc() && !vf() && !Qe)
    )
      return (
        typeof u.componentDidUpdate == 'function' &&
          (p !== e.memoizedProps || X !== e.memoizedState) &&
          (t.flags |= St),
        typeof u.getSnapshotBeforeUpdate == 'function' &&
          (p !== e.memoizedProps || X !== e.memoizedState) &&
          (t.flags |= Qi),
        !1
      );
    typeof B == 'function' && (Oh(t, n, B, a), (we = t.memoizedState));
    var He = vf() || NS(t, n, v, a, X, we, k) || Qe;
    return (
      He
        ? (!Y &&
            (typeof u.UNSAFE_componentWillUpdate == 'function' ||
              typeof u.componentWillUpdate == 'function') &&
            (typeof u.componentWillUpdate == 'function' &&
              u.componentWillUpdate(a, we, k),
            typeof u.UNSAFE_componentWillUpdate == 'function' &&
              u.UNSAFE_componentWillUpdate(a, we, k)),
          typeof u.componentDidUpdate == 'function' && (t.flags |= St),
          typeof u.getSnapshotBeforeUpdate == 'function' && (t.flags |= Qi))
        : (typeof u.componentDidUpdate == 'function' &&
            (p !== e.memoizedProps || X !== e.memoizedState) &&
            (t.flags |= St),
          typeof u.getSnapshotBeforeUpdate == 'function' &&
            (p !== e.memoizedProps || X !== e.memoizedState) &&
            (t.flags |= Qi),
          (t.memoizedProps = a),
          (t.memoizedState = we)),
      (u.props = a),
      (u.state = we),
      (u.context = k),
      He
    );
  }
  function yo(e, t) {
    return { value: e, source: t, stack: Xl(t), digest: null };
  }
  function Lh(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function IO(e, t) {
    return !0;
  }
  function kh(e, t) {
    try {
      var n = IO(e, t);
      if (n === !1) return;
      var a = t.value,
        l = t.source,
        u = t.stack,
        p = u !== null ? u : '';
      if (a != null && a._suppressLogging) {
        if (e.tag === g) return;
        console.error(a);
      }
      var v = l ? lt(l) : null,
        y = v
          ? 'The above error occurred in the <' + v + '> component:'
          : 'The above error occurred in one of your React components:',
        C;
      if (e.tag === S)
        C = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
      else {
        var T = lt(e) || 'Anonymous';
        C =
          'React will try to recreate this component tree from scratch ' +
          ('using the error boundary you provided, ' + T + '.');
      }
      var k =
        y +
        `
` +
        p +
        `

` +
        ('' + C);
      console.error(k);
    } catch (L) {
      setTimeout(function () {
        throw L;
      });
    }
  }
  var BO = typeof WeakMap == 'function' ? WeakMap : Map;
  function FS(e, t, n) {
    var a = $a(jt, n);
    ((a.tag = Fv), (a.payload = { element: null }));
    var l = t.value;
    return (
      (a.callback = function () {
        (NA(l), kh(e, t));
      }),
      a
    );
  }
  function Nh(e, t, n) {
    var a = $a(jt, n);
    a.tag = Fv;
    var l = e.type.getDerivedStateFromError;
    if (typeof l == 'function') {
      var u = t.value;
      ((a.payload = function () {
        return l(u);
      }),
        (a.callback = function () {
          (XE(e), kh(e, t));
        }));
    }
    var p = e.stateNode;
    return (
      p !== null &&
        typeof p.componentDidCatch == 'function' &&
        (a.callback = function () {
          (XE(e), kh(e, t), typeof l != 'function' && LA(this));
          var y = t.value,
            C = t.stack;
          (this.componentDidCatch(y, { componentStack: C !== null ? C : '' }),
            typeof l != 'function' &&
              (gr(e.lanes, tt) ||
                d(
                  '%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.',
                  lt(e) || 'Unknown'
                )));
        }),
      a
    );
  }
  function VS(e, t, n) {
    var a = e.pingCache,
      l;
    if (
      (a === null
        ? ((a = e.pingCache = new BO()), (l = new Set()), a.set(t, l))
        : ((l = a.get(t)), l === void 0 && ((l = new Set()), a.set(t, l))),
      !l.has(n))
    ) {
      l.add(n);
      var u = PA.bind(null, e, t, n);
      (Ir && xu(e, n), t.then(u, u));
    }
  }
  function jO(e, t, n, a) {
    var l = e.updateQueue;
    if (l === null) {
      var u = new Set();
      (u.add(n), (e.updateQueue = u));
    } else l.add(n);
  }
  function $O(e, t) {
    var n = e.tag;
    if ((e.mode & yt) === Be && (n === m || n === P || n === ne)) {
      var a = e.alternate;
      a
        ? ((e.updateQueue = a.updateQueue),
          (e.memoizedState = a.memoizedState),
          (e.lanes = a.lanes))
        : ((e.updateQueue = null), (e.memoizedState = null));
    }
  }
  function HS(e) {
    var t = e;
    do {
      if (t.tag === V && wO(t)) return t;
      t = t.return;
    } while (t !== null);
    return null;
  }
  function IS(e, t, n, a, l) {
    if ((e.mode & yt) === Be) {
      if (e === t) e.flags |= Kn;
      else {
        if (
          ((e.flags |= Dt),
          (n.flags |= ep),
          (n.flags &= ~(Tx | ls)),
          n.tag === g)
        ) {
          var u = n.alternate;
          if (u === null) n.tag = re;
          else {
            var p = $a(jt, tt);
            ((p.tag = uf), wi(n, p, tt));
          }
        }
        n.lanes = st(n.lanes, tt);
      }
      return e;
    }
    return ((e.flags |= Kn), (e.lanes = l), e);
  }
  function YO(e, t, n, a, l) {
    if (
      ((n.flags |= ls),
      Ir && xu(e, l),
      a !== null && typeof a == 'object' && typeof a.then == 'function')
    ) {
      var u = a;
      ($O(n), Nn() && n.mode & yt && Lb());
      var p = HS(t);
      if (p !== null) {
        ((p.flags &= ~La),
          IS(p, t, n, e, l),
          p.mode & yt && VS(e, u, l),
          jO(p, e, u));
        return;
      } else {
        if (!pR(l)) {
          (VS(e, u, l), pm());
          return;
        }
        var v = new Error(
          'A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.'
        );
        a = v;
      }
    } else if (Nn() && n.mode & yt) {
      Lb();
      var y = HS(t);
      if (y !== null) {
        ((y.flags & Kn) === Ge && (y.flags |= La),
          IS(y, t, n, e, l),
          Rv(yo(a, n)));
        return;
      }
    }
    ((a = yo(a, n)), wA(a));
    var C = t;
    do {
      switch (C.tag) {
        case S: {
          var T = a;
          C.flags |= Kn;
          var k = hs(l);
          C.lanes = st(C.lanes, k);
          var L = FS(C, T, k);
          Iv(C, L);
          return;
        }
        case g:
          var B = a,
            Y = C.type,
            X = C.stateNode;
          if (
            (C.flags & Dt) === Ge &&
            (typeof Y.getDerivedStateFromError == 'function' ||
              (X !== null &&
                typeof X.componentDidCatch == 'function' &&
                !HE(X)))
          ) {
            C.flags |= Kn;
            var we = hs(l);
            C.lanes = st(C.lanes, we);
            var He = Nh(C, B, we);
            Iv(C, He);
            return;
          }
          break;
      }
      C = C.return;
    } while (C !== null);
  }
  function GO() {
    return null;
  }
  var uu = o.ReactCurrentOwner,
    Xr = !1,
    Ph,
    cu,
    zh,
    Uh,
    Fh,
    go,
    Vh,
    Ff,
    fu;
  ((Ph = {}),
    (cu = {}),
    (zh = {}),
    (Uh = {}),
    (Fh = {}),
    (go = !1),
    (Vh = {}),
    (Ff = {}),
    (fu = {}));
  function Jn(e, t, n, a) {
    e === null
      ? (t.child = $b(t, null, n, a))
      : (t.child = cl(t, e.child, n, a));
  }
  function WO(e, t, n, a) {
    ((t.child = cl(t, e.child, null, a)), (t.child = cl(t, null, n, a)));
  }
  function BS(e, t, n, a, l) {
    if (t.type !== t.elementType) {
      var u = n.propTypes;
      u && jr(u, a, 'prop', Ct(n));
    }
    var p = n.render,
      v = t.ref,
      y,
      C;
    (dl(t, l), us(t));
    {
      if (
        ((uu.current = t),
        mr(!0),
        (y = gl(e, t, p, a, v, l)),
        (C = bl()),
        t.mode & an)
      ) {
        Dn(!0);
        try {
          ((y = gl(e, t, p, a, v, l)), (C = bl()));
        } finally {
          Dn(!1);
        }
      }
      mr(!1);
    }
    return (
      Yo(),
      e !== null && !Xr
        ? (aS(e, t, l), Ya(e, t, l))
        : (Nn() && C && Sv(t), (t.flags |= Bo), Jn(e, t, y, l), t.child)
    );
  }
  function jS(e, t, n, a, l) {
    if (e === null) {
      var u = n.type;
      if (JA(u) && n.compare === null && n.defaultProps === void 0) {
        var p = u;
        return (
          (p = _l(u)),
          (t.tag = ne),
          (t.type = p),
          Bh(t, u),
          $S(e, t, p, a, l)
        );
      }
      {
        var v = u.propTypes;
        if ((v && jr(v, a, 'prop', Ct(u)), n.defaultProps !== void 0)) {
          var y = Ct(u) || 'Unknown';
          fu[y] ||
            (d(
              '%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.',
              y
            ),
            (fu[y] = !0));
        }
      }
      var C = wm(n.type, null, a, t, t.mode, l);
      return ((C.ref = t.ref), (C.return = t), (t.child = C), C);
    }
    {
      var T = n.type,
        k = T.propTypes;
      k && jr(k, a, 'prop', Ct(T));
    }
    var L = e.child,
      B = qh(e, l);
    if (!B) {
      var Y = L.memoizedProps,
        X = n.compare;
      if (((X = X !== null ? X : As), X(Y, a) && e.ref === t.ref))
        return Ya(e, t, l);
    }
    t.flags |= Bo;
    var we = To(L, a);
    return ((we.ref = t.ref), (we.return = t), (t.child = we), we);
  }
  function $S(e, t, n, a, l) {
    if (t.type !== t.elementType) {
      var u = t.elementType;
      if (u.$$typeof === Ye) {
        var p = u,
          v = p._payload,
          y = p._init;
        try {
          u = y(v);
        } catch {
          u = null;
        }
        var C = u && u.propTypes;
        C && jr(C, a, 'prop', Ct(u));
      }
    }
    if (e !== null) {
      var T = e.memoizedProps;
      if (As(T, a) && e.ref === t.ref && t.type === e.type)
        if (((Xr = !1), (t.pendingProps = a = T), qh(e, l)))
          (e.flags & ep) !== Ge && (Xr = !0);
        else return ((t.lanes = e.lanes), Ya(e, t, l));
    }
    return Hh(e, t, n, a, l);
  }
  function YS(e, t, n) {
    var a = t.pendingProps,
      l = a.children,
      u = e !== null ? e.memoizedState : null;
    if (a.mode === 'hidden' || ft)
      if ((t.mode & yt) === Be) {
        var p = { baseLanes: se, cachePool: null, transitions: null };
        ((t.memoizedState = p), Kf(t, n));
      } else if (gr(n, yr)) {
        var k = { baseLanes: se, cachePool: null, transitions: null };
        t.memoizedState = k;
        var L = u !== null ? u.baseLanes : n;
        Kf(t, L);
      } else {
        var v = null,
          y;
        if (u !== null) {
          var C = u.baseLanes;
          y = st(C, n);
        } else y = n;
        t.lanes = t.childLanes = yr;
        var T = { baseLanes: y, cachePool: v, transitions: null };
        return ((t.memoizedState = T), (t.updateQueue = null), Kf(t, y), null);
      }
    else {
      var B;
      (u !== null
        ? ((B = st(u.baseLanes, n)), (t.memoizedState = null))
        : (B = n),
        Kf(t, B));
    }
    return (Jn(e, t, l, n), t.child);
  }
  function qO(e, t, n) {
    var a = t.pendingProps;
    return (Jn(e, t, a, n), t.child);
  }
  function XO(e, t, n) {
    var a = t.pendingProps.children;
    return (Jn(e, t, a, n), t.child);
  }
  function QO(e, t, n) {
    {
      t.flags |= St;
      {
        var a = t.stateNode;
        ((a.effectDuration = 0), (a.passiveEffectDuration = 0));
      }
    }
    var l = t.pendingProps,
      u = l.children;
    return (Jn(e, t, u, n), t.child);
  }
  function GS(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= di), (t.flags |= tp));
  }
  function Hh(e, t, n, a, l) {
    if (t.type !== t.elementType) {
      var u = n.propTypes;
      u && jr(u, a, 'prop', Ct(n));
    }
    var p;
    {
      var v = il(t, n, !0);
      p = ol(t, v);
    }
    var y, C;
    (dl(t, l), us(t));
    {
      if (
        ((uu.current = t),
        mr(!0),
        (y = gl(e, t, n, a, p, l)),
        (C = bl()),
        t.mode & an)
      ) {
        Dn(!0);
        try {
          ((y = gl(e, t, n, a, p, l)), (C = bl()));
        } finally {
          Dn(!1);
        }
      }
      mr(!1);
    }
    return (
      Yo(),
      e !== null && !Xr
        ? (aS(e, t, l), Ya(e, t, l))
        : (Nn() && C && Sv(t), (t.flags |= Bo), Jn(e, t, y, l), t.child)
    );
  }
  function WS(e, t, n, a, l) {
    {
      switch (pM(t)) {
        case !1: {
          var u = t.stateNode,
            p = t.type,
            v = new p(t.memoizedProps, u.context),
            y = v.state;
          u.updater.enqueueSetState(u, y, null);
          break;
        }
        case !0: {
          ((t.flags |= Dt), (t.flags |= Kn));
          var C = new Error('Simulated error coming from DevTools'),
            T = hs(l);
          t.lanes = st(t.lanes, T);
          var k = Nh(t, yo(C, t), T);
          Iv(t, k);
          break;
        }
      }
      if (t.type !== t.elementType) {
        var L = n.propTypes;
        L && jr(L, a, 'prop', Ct(n));
      }
    }
    var B;
    (fa(n) ? ((B = !0), Xc(t)) : (B = !1), dl(t, l));
    var Y = t.stateNode,
      X;
    Y === null
      ? (Hf(e, t), zS(t, n, a), Mh(t, n, a, l), (X = !0))
      : e === null
        ? (X = VO(t, n, a, l))
        : (X = HO(e, t, n, a, l));
    var we = Ih(e, t, n, X, B, l);
    {
      var He = t.stateNode;
      X &&
        He.props !== a &&
        (go ||
          d(
            'It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.',
            lt(t) || 'a component'
          ),
        (go = !0));
    }
    return we;
  }
  function Ih(e, t, n, a, l, u) {
    GS(e, t);
    var p = (t.flags & Dt) !== Ge;
    if (!a && !p) return (l && Db(t, n, !1), Ya(e, t, u));
    var v = t.stateNode;
    uu.current = t;
    var y;
    if (p && typeof n.getDerivedStateFromError != 'function')
      ((y = null), MS());
    else {
      us(t);
      {
        if ((mr(!0), (y = v.render()), t.mode & an)) {
          Dn(!0);
          try {
            v.render();
          } finally {
            Dn(!1);
          }
        }
        mr(!1);
      }
      Yo();
    }
    return (
      (t.flags |= Bo),
      e !== null && p ? WO(e, t, y, u) : Jn(e, t, y, u),
      (t.memoizedState = v.state),
      l && Db(t, n, !0),
      t.child
    );
  }
  function qS(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Rb(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Rb(e, t.context, !1),
      Bv(e, t.containerInfo));
  }
  function KO(e, t, n) {
    if ((qS(t), e === null))
      throw new Error('Should have a current fiber. This is a bug in React.');
    var a = t.pendingProps,
      l = t.memoizedState,
      u = l.element;
    (Kb(e, t), pf(t, a, null, n));
    var p = t.memoizedState;
    t.stateNode;
    var v = p.element;
    if (l.isDehydrated) {
      var y = {
          element: v,
          isDehydrated: !1,
          cache: p.cache,
          pendingSuspenseBoundaries: p.pendingSuspenseBoundaries,
          transitions: p.transitions,
        },
        C = t.updateQueue;
      if (((C.baseState = y), (t.memoizedState = y), t.flags & La)) {
        var T = yo(
          new Error(
            'There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering.'
          ),
          t
        );
        return XS(e, t, v, n, T);
      } else if (v !== u) {
        var k = yo(
          new Error(
            'This root received an early update, before anything was able hydrate. Switched the entire root to client rendering.'
          ),
          t
        );
        return XS(e, t, v, n, k);
      } else {
        eO(t);
        var L = $b(t, null, v, n);
        t.child = L;
        for (var B = L; B; )
          ((B.flags = (B.flags & ~fn) | ka), (B = B.sibling));
      }
    } else {
      if ((ul(), v === u)) return Ya(e, t, n);
      Jn(e, t, v, n);
    }
    return t.child;
  }
  function XS(e, t, n, a, l) {
    return (ul(), Rv(l), (t.flags |= La), Jn(e, t, n, a), t.child);
  }
  function JO(e, t, n) {
    (tS(t), e === null && xv(t));
    var a = t.type,
      l = t.pendingProps,
      u = e !== null ? e.memoizedProps : null,
      p = l.children,
      v = ov(a, l);
    return (
      v ? (p = null) : u !== null && ov(a, u) && (t.flags |= os),
      GS(e, t),
      Jn(e, t, p, n),
      t.child
    );
  }
  function ZO(e, t) {
    return (e === null && xv(t), null);
  }
  function e1(e, t, n, a) {
    Hf(e, t);
    var l = t.pendingProps,
      u = n,
      p = u._payload,
      v = u._init,
      y = v(p);
    t.type = y;
    var C = (t.tag = ZA(y)),
      T = qr(y, l),
      k;
    switch (C) {
      case m:
        return (Bh(t, y), (t.type = y = _l(y)), (k = Hh(null, t, y, T, a)), k);
      case g:
        return ((t.type = y = gm(y)), (k = WS(null, t, y, T, a)), k);
      case P:
        return ((t.type = y = bm(y)), (k = BS(null, t, y, T, a)), k);
      case oe: {
        if (t.type !== t.elementType) {
          var L = y.propTypes;
          L && jr(L, T, 'prop', Ct(y));
        }
        return ((k = jS(null, t, y, qr(y.type, T), a)), k);
      }
    }
    var B = '';
    throw (
      y !== null &&
        typeof y == 'object' &&
        y.$$typeof === Ye &&
        (B = ' Did you wrap a component in React.lazy() more than once?'),
      new Error(
        'Element type is invalid. Received a promise that resolves to: ' +
          y +
          '. ' +
          ('Lazy element type must resolve to a class or function.' + B)
      )
    );
  }
  function t1(e, t, n, a, l) {
    (Hf(e, t), (t.tag = g));
    var u;
    return (
      fa(n) ? ((u = !0), Xc(t)) : (u = !1),
      dl(t, l),
      zS(t, n, a),
      Mh(t, n, a, l),
      Ih(null, t, n, !0, u, l)
    );
  }
  function n1(e, t, n, a) {
    Hf(e, t);
    var l = t.pendingProps,
      u;
    {
      var p = il(t, n, !1);
      u = ol(t, p);
    }
    dl(t, a);
    var v, y;
    us(t);
    {
      if (n.prototype && typeof n.prototype.render == 'function') {
        var C = Ct(n) || 'Unknown';
        Ph[C] ||
          (d(
            "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
            C,
            C
          ),
          (Ph[C] = !0));
      }
      (t.mode & an && Yr.recordLegacyContextWarning(t, null),
        mr(!0),
        (uu.current = t),
        (v = gl(null, t, n, l, u, a)),
        (y = bl()),
        mr(!1));
    }
    if (
      (Yo(),
      (t.flags |= Bo),
      typeof v == 'object' &&
        v !== null &&
        typeof v.render == 'function' &&
        v.$$typeof === void 0)
    ) {
      var T = Ct(n) || 'Unknown';
      cu[T] ||
        (d(
          "The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",
          T,
          T,
          T
        ),
        (cu[T] = !0));
    }
    if (
      typeof v == 'object' &&
      v !== null &&
      typeof v.render == 'function' &&
      v.$$typeof === void 0
    ) {
      {
        var k = Ct(n) || 'Unknown';
        cu[k] ||
          (d(
            "The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",
            k,
            k,
            k
          ),
          (cu[k] = !0));
      }
      ((t.tag = g), (t.memoizedState = null), (t.updateQueue = null));
      var L = !1;
      return (
        fa(n) ? ((L = !0), Xc(t)) : (L = !1),
        (t.memoizedState =
          v.state !== null && v.state !== void 0 ? v.state : null),
        Hv(t),
        PS(t, v),
        Mh(t, n, l, a),
        Ih(null, t, n, !0, L, a)
      );
    } else {
      if (((t.tag = m), t.mode & an)) {
        Dn(!0);
        try {
          ((v = gl(null, t, n, l, u, a)), (y = bl()));
        } finally {
          Dn(!1);
        }
      }
      return (Nn() && y && Sv(t), Jn(null, t, v, a), Bh(t, n), t.child);
    }
  }
  function Bh(e, t) {
    {
      if (
        (t &&
          t.childContextTypes &&
          d(
            '%s(...): childContextTypes cannot be defined on a function component.',
            t.displayName || t.name || 'Component'
          ),
        e.ref !== null)
      ) {
        var n = '',
          a = si();
        a &&
          (n +=
            `

Check the render method of \`` +
            a +
            '`.');
        var l = a || '',
          u = e._debugSource;
        (u && (l = u.fileName + ':' + u.lineNumber),
          Fh[l] ||
            ((Fh[l] = !0),
            d(
              'Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s',
              n
            )));
      }
      if (t.defaultProps !== void 0) {
        var p = Ct(t) || 'Unknown';
        fu[p] ||
          (d(
            '%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.',
            p
          ),
          (fu[p] = !0));
      }
      if (typeof t.getDerivedStateFromProps == 'function') {
        var v = Ct(t) || 'Unknown';
        Uh[v] ||
          (d(
            '%s: Function components do not support getDerivedStateFromProps.',
            v
          ),
          (Uh[v] = !0));
      }
      if (typeof t.contextType == 'object' && t.contextType !== null) {
        var y = Ct(t) || 'Unknown';
        zh[y] ||
          (d('%s: Function components do not support contextType.', y),
          (zh[y] = !0));
      }
    }
  }
  var jh = { dehydrated: null, treeContext: null, retryLane: On };
  function $h(e) {
    return { baseLanes: e, cachePool: GO(), transitions: null };
  }
  function r1(e, t) {
    var n = null;
    return {
      baseLanes: st(e.baseLanes, t),
      cachePool: n,
      transitions: e.transitions,
    };
  }
  function a1(e, t, n, a) {
    if (t !== null) {
      var l = t.memoizedState;
      if (l === null) return !1;
    }
    return Yv(e, eu);
  }
  function i1(e, t) {
    return gc(e.childLanes, t);
  }
  function QS(e, t, n) {
    var a = t.pendingProps;
    vM(t) && (t.flags |= Dt);
    var l = Gr.current,
      u = !1,
      p = (t.flags & Dt) !== Ge;
    if (
      (p || a1(l, e)
        ? ((u = !0), (t.flags &= ~Dt))
        : (e === null || e.memoizedState !== null) && (l = TO(l, rS)),
      (l = vl(l)),
      Ri(t, l),
      e === null)
    ) {
      xv(t);
      var v = t.memoizedState;
      if (v !== null) {
        var y = v.dehydrated;
        if (y !== null) return c1(t, y);
      }
      var C = a.children,
        T = a.fallback;
      if (u) {
        var k = o1(t, C, T, n),
          L = t.child;
        return ((L.memoizedState = $h(n)), (t.memoizedState = jh), k);
      } else return Yh(t, C);
    } else {
      var B = e.memoizedState;
      if (B !== null) {
        var Y = B.dehydrated;
        if (Y !== null) return f1(e, t, p, a, Y, B, n);
      }
      if (u) {
        var X = a.fallback,
          we = a.children,
          He = s1(e, t, we, X, n),
          Ne = t.child,
          bt = e.child.memoizedState;
        return (
          (Ne.memoizedState = bt === null ? $h(n) : r1(bt, n)),
          (Ne.childLanes = i1(e, n)),
          (t.memoizedState = jh),
          He
        );
      } else {
        var pt = a.children,
          H = l1(e, t, pt, n);
        return ((t.memoizedState = null), H);
      }
    }
  }
  function Yh(e, t, n) {
    var a = e.mode,
      l = { mode: 'visible', children: t },
      u = Gh(l, a);
    return ((u.return = e), (e.child = u), u);
  }
  function o1(e, t, n, a) {
    var l = e.mode,
      u = e.child,
      p = { mode: 'hidden', children: t },
      v,
      y;
    return (
      (l & yt) === Be && u !== null
        ? ((v = u),
          (v.childLanes = se),
          (v.pendingProps = p),
          e.mode & kt &&
            ((v.actualDuration = 0),
            (v.actualStartTime = -1),
            (v.selfBaseDuration = 0),
            (v.treeBaseDuration = 0)),
          (y = Ni(n, l, a, null)))
        : ((v = Gh(p, l)), (y = Ni(n, l, a, null))),
      (v.return = e),
      (y.return = e),
      (v.sibling = y),
      (e.child = v),
      y
    );
  }
  function Gh(e, t, n) {
    return KE(e, t, se, null);
  }
  function KS(e, t) {
    return To(e, t);
  }
  function l1(e, t, n, a) {
    var l = e.child,
      u = l.sibling,
      p = KS(l, { mode: 'visible', children: n });
    if (
      ((t.mode & yt) === Be && (p.lanes = a),
      (p.return = t),
      (p.sibling = null),
      u !== null)
    ) {
      var v = t.deletions;
      v === null ? ((t.deletions = [u]), (t.flags |= Xi)) : v.push(u);
    }
    return ((t.child = p), p);
  }
  function s1(e, t, n, a, l) {
    var u = t.mode,
      p = e.child,
      v = p.sibling,
      y = { mode: 'hidden', children: n },
      C;
    if ((u & yt) === Be && t.child !== p) {
      var T = t.child;
      ((C = T),
        (C.childLanes = se),
        (C.pendingProps = y),
        t.mode & kt &&
          ((C.actualDuration = 0),
          (C.actualStartTime = -1),
          (C.selfBaseDuration = p.selfBaseDuration),
          (C.treeBaseDuration = p.treeBaseDuration)),
        (t.deletions = null));
    } else ((C = KS(p, y)), (C.subtreeFlags = p.subtreeFlags & Pa));
    var k;
    return (
      v !== null ? (k = To(v, a)) : ((k = Ni(a, u, l, null)), (k.flags |= fn)),
      (k.return = t),
      (C.return = t),
      (C.sibling = k),
      (t.child = C),
      k
    );
  }
  function Vf(e, t, n, a) {
    (a !== null && Rv(a), cl(t, e.child, null, n));
    var l = t.pendingProps,
      u = l.children,
      p = Yh(t, u);
    return ((p.flags |= fn), (t.memoizedState = null), p);
  }
  function u1(e, t, n, a, l) {
    var u = t.mode,
      p = { mode: 'visible', children: n },
      v = Gh(p, u),
      y = Ni(a, u, l, null);
    return (
      (y.flags |= fn),
      (v.return = t),
      (y.return = t),
      (v.sibling = y),
      (t.child = v),
      (t.mode & yt) !== Be && cl(t, e.child, null, l),
      y
    );
  }
  function c1(e, t, n) {
    return (
      (e.mode & yt) === Be
        ? (d(
            'Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components.'
          ),
          (e.lanes = tt))
        : cv(t)
          ? (e.lanes = to)
          : (e.lanes = yr),
      null
    );
  }
  function f1(e, t, n, a, l, u, p) {
    if (n)
      if (t.flags & La) {
        t.flags &= ~La;
        var H = Lh(
          new Error(
            'There was an error while hydrating this Suspense boundary. Switched to client rendering.'
          )
        );
        return Vf(e, t, p, H);
      } else {
        if (t.memoizedState !== null)
          return ((t.child = e.child), (t.flags |= Dt), null);
        var Q = a.children,
          I = a.fallback,
          fe = u1(e, t, Q, I, p),
          Oe = t.child;
        return ((Oe.memoizedState = $h(p)), (t.memoizedState = jh), fe);
      }
    else {
      if ((JD(), (t.mode & yt) === Be)) return Vf(e, t, p, null);
      if (cv(l)) {
        var v, y, C;
        {
          var T = hD(l);
          ((v = T.digest), (y = T.message), (C = T.stack));
        }
        var k;
        y
          ? (k = new Error(y))
          : (k = new Error(
              'The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.'
            ));
        var L = Lh(k, v, C);
        return Vf(e, t, p, L);
      }
      var B = gr(p, e.childLanes);
      if (Xr || B) {
        var Y = Qf();
        if (Y !== null) {
          var X = ER(Y, p);
          if (X !== On && X !== u.retryLane) {
            u.retryLane = X;
            var we = jt;
            (ur(e, X), Tn(Y, e, X, we));
          }
        }
        pm();
        var He = Lh(
          new Error(
            'This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition.'
          )
        );
        return Vf(e, t, p, He);
      } else if (Sb(l)) {
        ((t.flags |= Dt), (t.child = e.child));
        var Ne = zA.bind(null, e);
        return (mD(l, Ne), null);
      } else {
        tO(t, l, u.treeContext);
        var bt = a.children,
          pt = Yh(t, bt);
        return ((pt.flags |= ka), pt);
      }
    }
  }
  function JS(e, t, n) {
    e.lanes = st(e.lanes, t);
    var a = e.alternate;
    (a !== null && (a.lanes = st(a.lanes, t)), zv(e.return, t, n));
  }
  function d1(e, t, n) {
    for (var a = t; a !== null; ) {
      if (a.tag === V) {
        var l = a.memoizedState;
        l !== null && JS(a, n, e);
      } else if (a.tag === ue) JS(a, n, e);
      else if (a.child !== null) {
        ((a.child.return = a), (a = a.child));
        continue;
      }
      if (a === e) return;
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === e) return;
        a = a.return;
      }
      ((a.sibling.return = a.return), (a = a.sibling));
    }
  }
  function p1(e) {
    for (var t = e, n = null; t !== null; ) {
      var a = t.alternate;
      (a !== null && yf(a) === null && (n = t), (t = t.sibling));
    }
    return n;
  }
  function v1(e) {
    if (
      e !== void 0 &&
      e !== 'forwards' &&
      e !== 'backwards' &&
      e !== 'together' &&
      !Vh[e]
    )
      if (((Vh[e] = !0), typeof e == 'string'))
        switch (e.toLowerCase()) {
          case 'together':
          case 'forwards':
          case 'backwards': {
            d(
              '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
              e,
              e.toLowerCase()
            );
            break;
          }
          case 'forward':
          case 'backward': {
            d(
              '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
              e,
              e.toLowerCase()
            );
            break;
          }
          default:
            d(
              '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
              e
            );
            break;
        }
      else
        d(
          '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
          e
        );
  }
  function h1(e, t) {
    e !== void 0 &&
      !Ff[e] &&
      (e !== 'collapsed' && e !== 'hidden'
        ? ((Ff[e] = !0),
          d(
            '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',
            e
          ))
        : t !== 'forwards' &&
          t !== 'backwards' &&
          ((Ff[e] = !0),
          d(
            '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
            e
          )));
  }
  function ZS(e, t) {
    {
      var n = _t(e),
        a = !n && typeof hr(e) == 'function';
      if (n || a) {
        var l = n ? 'array' : 'iterable';
        return (
          d(
            'A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>',
            l,
            t,
            l
          ),
          !1
        );
      }
    }
    return !0;
  }
  function m1(e, t) {
    if (
      (t === 'forwards' || t === 'backwards') &&
      e !== void 0 &&
      e !== null &&
      e !== !1
    )
      if (_t(e)) {
        for (var n = 0; n < e.length; n++) if (!ZS(e[n], n)) return;
      } else {
        var a = hr(e);
        if (typeof a == 'function') {
          var l = a.call(e);
          if (l)
            for (var u = l.next(), p = 0; !u.done; u = l.next()) {
              if (!ZS(u.value, p)) return;
              p++;
            }
        } else
          d(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            t
          );
      }
  }
  function Wh(e, t, n, a, l) {
    var u = e.memoizedState;
    u === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: n,
          tailMode: l,
        })
      : ((u.isBackwards = t),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = a),
        (u.tail = n),
        (u.tailMode = l));
  }
  function eE(e, t, n) {
    var a = t.pendingProps,
      l = a.revealOrder,
      u = a.tail,
      p = a.children;
    (v1(l), h1(u, l), m1(p, l), Jn(e, t, p, n));
    var v = Gr.current,
      y = Yv(v, eu);
    if (y) ((v = Gv(v, eu)), (t.flags |= Dt));
    else {
      var C = e !== null && (e.flags & Dt) !== Ge;
      (C && d1(t, t.child, n), (v = vl(v)));
    }
    if ((Ri(t, v), (t.mode & yt) === Be)) t.memoizedState = null;
    else
      switch (l) {
        case 'forwards': {
          var T = p1(t.child),
            k;
          (T === null
            ? ((k = t.child), (t.child = null))
            : ((k = T.sibling), (T.sibling = null)),
            Wh(t, !1, k, T, u));
          break;
        }
        case 'backwards': {
          var L = null,
            B = t.child;
          for (t.child = null; B !== null; ) {
            var Y = B.alternate;
            if (Y !== null && yf(Y) === null) {
              t.child = B;
              break;
            }
            var X = B.sibling;
            ((B.sibling = L), (L = B), (B = X));
          }
          Wh(t, !0, L, null, u);
          break;
        }
        case 'together': {
          Wh(t, !1, null, null, void 0);
          break;
        }
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function y1(e, t, n) {
    Bv(t, t.stateNode.containerInfo);
    var a = t.pendingProps;
    return (
      e === null ? (t.child = cl(t, null, a, n)) : Jn(e, t, a, n),
      t.child
    );
  }
  var tE = !1;
  function g1(e, t, n) {
    var a = t.type,
      l = a._context,
      u = t.pendingProps,
      p = t.memoizedProps,
      v = u.value;
    {
      'value' in u ||
        tE ||
        ((tE = !0),
        d(
          'The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?'
        ));
      var y = t.type.propTypes;
      y && jr(y, u, 'prop', 'Context.Provider');
    }
    if ((Wb(t, l, v), p !== null)) {
      var C = p.value;
      if (Er(C, v)) {
        if (p.children === u.children && !Wc()) return Ya(e, t, n);
      } else vO(t, l, n);
    }
    var T = u.children;
    return (Jn(e, t, T, n), t.child);
  }
  var nE = !1;
  function b1(e, t, n) {
    var a = t.type;
    a._context === void 0
      ? a !== a.Consumer &&
        (nE ||
          ((nE = !0),
          d(
            'Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?'
          )))
      : (a = a._context);
    var l = t.pendingProps,
      u = l.children;
    (typeof u != 'function' &&
      d(
        "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
      ),
      dl(t, n));
    var p = dn(a);
    us(t);
    var v;
    return (
      (uu.current = t),
      mr(!0),
      (v = u(p)),
      mr(!1),
      Yo(),
      (t.flags |= Bo),
      Jn(e, t, v, n),
      t.child
    );
  }
  function du() {
    Xr = !0;
  }
  function Hf(e, t) {
    (t.mode & yt) === Be &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= fn));
  }
  function Ya(e, t, n) {
    return (
      e !== null && (t.dependencies = e.dependencies),
      MS(),
      wu(t.lanes),
      gr(n, t.childLanes) ? (dO(e, t), t.child) : null
    );
  }
  function S1(e, t, n) {
    {
      var a = t.return;
      if (a === null) throw new Error('Cannot swap the root fiber.');
      if (
        ((e.alternate = null),
        (t.alternate = null),
        (n.index = t.index),
        (n.sibling = t.sibling),
        (n.return = t.return),
        (n.ref = t.ref),
        t === a.child)
      )
        a.child = n;
      else {
        var l = a.child;
        if (l === null) throw new Error('Expected parent to have a child.');
        for (; l.sibling !== t; )
          if (((l = l.sibling), l === null))
            throw new Error('Expected to find the previous sibling.');
        l.sibling = n;
      }
      var u = a.deletions;
      return (
        u === null ? ((a.deletions = [e]), (a.flags |= Xi)) : u.push(e),
        (n.flags |= fn),
        n
      );
    }
  }
  function qh(e, t) {
    var n = e.lanes;
    return !!gr(n, t);
  }
  function E1(e, t, n) {
    switch (t.tag) {
      case S:
        (qS(t), t.stateNode, ul());
        break;
      case O:
        tS(t);
        break;
      case g: {
        var a = t.type;
        fa(a) && Xc(t);
        break;
      }
      case w:
        Bv(t, t.stateNode.containerInfo);
        break;
      case _: {
        var l = t.memoizedProps.value,
          u = t.type._context;
        Wb(t, u, l);
        break;
      }
      case U:
        {
          var p = gr(n, t.childLanes);
          p && (t.flags |= St);
          {
            var v = t.stateNode;
            ((v.effectDuration = 0), (v.passiveEffectDuration = 0));
          }
        }
        break;
      case V: {
        var y = t.memoizedState;
        if (y !== null) {
          if (y.dehydrated !== null)
            return (Ri(t, vl(Gr.current)), (t.flags |= Dt), null);
          var C = t.child,
            T = C.childLanes;
          if (gr(n, T)) return QS(e, t, n);
          Ri(t, vl(Gr.current));
          var k = Ya(e, t, n);
          return k !== null ? k.sibling : null;
        } else Ri(t, vl(Gr.current));
        break;
      }
      case ue: {
        var L = (e.flags & Dt) !== Ge,
          B = gr(n, t.childLanes);
        if (L) {
          if (B) return eE(e, t, n);
          t.flags |= Dt;
        }
        var Y = t.memoizedState;
        if (
          (Y !== null &&
            ((Y.rendering = null), (Y.tail = null), (Y.lastEffect = null)),
          Ri(t, Gr.current),
          B)
        )
          break;
        return null;
      }
      case ie:
      case Ee:
        return ((t.lanes = se), YS(e, t, n));
    }
    return Ya(e, t, n);
  }
  function rE(e, t, n) {
    if (t._debugNeedsRemount && e !== null)
      return S1(
        e,
        t,
        wm(
          t.type,
          t.key,
          t.pendingProps,
          t._debugOwner || null,
          t.mode,
          t.lanes
        )
      );
    if (e !== null) {
      var a = e.memoizedProps,
        l = t.pendingProps;
      if (a !== l || Wc() || t.type !== e.type) Xr = !0;
      else {
        var u = qh(e, n);
        if (!u && (t.flags & Dt) === Ge) return ((Xr = !1), E1(e, t, n));
        (e.flags & ep) !== Ge ? (Xr = !0) : (Xr = !1);
      }
    } else if (((Xr = !1), Nn() && GD(t))) {
      var p = t.index,
        v = WD();
      Mb(t, v, p);
    }
    switch (((t.lanes = se), t.tag)) {
      case E:
        return n1(e, t, t.type, n);
      case ce: {
        var y = t.elementType;
        return e1(e, t, y, n);
      }
      case m: {
        var C = t.type,
          T = t.pendingProps,
          k = t.elementType === C ? T : qr(C, T);
        return Hh(e, t, C, k, n);
      }
      case g: {
        var L = t.type,
          B = t.pendingProps,
          Y = t.elementType === L ? B : qr(L, B);
        return WS(e, t, L, Y, n);
      }
      case S:
        return KO(e, t, n);
      case O:
        return JO(e, t, n);
      case D:
        return ZO(e, t);
      case V:
        return QS(e, t, n);
      case w:
        return y1(e, t, n);
      case P: {
        var X = t.type,
          we = t.pendingProps,
          He = t.elementType === X ? we : qr(X, we);
        return BS(e, t, X, He, n);
      }
      case x:
        return qO(e, t, n);
      case z:
        return XO(e, t, n);
      case U:
        return QO(e, t, n);
      case _:
        return g1(e, t, n);
      case N:
        return b1(e, t, n);
      case oe: {
        var Ne = t.type,
          bt = t.pendingProps,
          pt = qr(Ne, bt);
        if (t.type !== t.elementType) {
          var H = Ne.propTypes;
          H && jr(H, pt, 'prop', Ct(Ne));
        }
        return ((pt = qr(Ne.type, pt)), jS(e, t, Ne, pt, n));
      }
      case ne:
        return $S(e, t, t.type, t.pendingProps, n);
      case re: {
        var Q = t.type,
          I = t.pendingProps,
          fe = t.elementType === Q ? I : qr(Q, I);
        return t1(e, t, Q, fe, n);
      }
      case ue:
        return eE(e, t, n);
      case ae:
        break;
      case ie:
        return YS(e, t, n);
    }
    throw new Error(
      'Unknown unit of work tag (' +
        t.tag +
        '). This error is likely caused by a bug in React. Please file an issue.'
    );
  }
  function Sl(e) {
    e.flags |= St;
  }
  function aE(e) {
    ((e.flags |= di), (e.flags |= tp));
  }
  var iE, Xh, oE, lE;
  ((iE = function (e, t, n, a) {
    for (var l = t.child; l !== null; ) {
      if (l.tag === O || l.tag === D) j_(e, l.stateNode);
      else if (l.tag !== w) {
        if (l.child !== null) {
          ((l.child.return = l), (l = l.child));
          continue;
        }
      }
      if (l === t) return;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === t) return;
        l = l.return;
      }
      ((l.sibling.return = l.return), (l = l.sibling));
    }
  }),
    (Xh = function (e, t) {}),
    (oE = function (e, t, n, a, l) {
      var u = e.memoizedProps;
      if (u !== a) {
        var p = t.stateNode,
          v = jv(),
          y = Y_(p, n, u, a, l, v);
        ((t.updateQueue = y), y && Sl(t));
      }
    }),
    (lE = function (e, t, n, a) {
      n !== a && Sl(t);
    }));
  function pu(e, t) {
    if (!Nn())
      switch (e.tailMode) {
        case 'hidden': {
          for (var n = e.tail, a = null; n !== null; )
            (n.alternate !== null && (a = n), (n = n.sibling));
          a === null ? (e.tail = null) : (a.sibling = null);
          break;
        }
        case 'collapsed': {
          for (var l = e.tail, u = null; l !== null; )
            (l.alternate !== null && (u = l), (l = l.sibling));
          u === null
            ? !t && e.tail !== null
              ? (e.tail.sibling = null)
              : (e.tail = null)
            : (u.sibling = null);
          break;
        }
      }
  }
  function zn(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = se,
      a = Ge;
    if (t) {
      if ((e.mode & kt) !== Be) {
        for (var y = e.selfBaseDuration, C = e.child; C !== null; )
          ((n = st(n, st(C.lanes, C.childLanes))),
            (a |= C.subtreeFlags & Pa),
            (a |= C.flags & Pa),
            (y += C.treeBaseDuration),
            (C = C.sibling));
        e.treeBaseDuration = y;
      } else
        for (var T = e.child; T !== null; )
          ((n = st(n, st(T.lanes, T.childLanes))),
            (a |= T.subtreeFlags & Pa),
            (a |= T.flags & Pa),
            (T.return = e),
            (T = T.sibling));
      e.subtreeFlags |= a;
    } else {
      if ((e.mode & kt) !== Be) {
        for (
          var l = e.actualDuration, u = e.selfBaseDuration, p = e.child;
          p !== null;

        )
          ((n = st(n, st(p.lanes, p.childLanes))),
            (a |= p.subtreeFlags),
            (a |= p.flags),
            (l += p.actualDuration),
            (u += p.treeBaseDuration),
            (p = p.sibling));
        ((e.actualDuration = l), (e.treeBaseDuration = u));
      } else
        for (var v = e.child; v !== null; )
          ((n = st(n, st(v.lanes, v.childLanes))),
            (a |= v.subtreeFlags),
            (a |= v.flags),
            (v.return = e),
            (v = v.sibling));
      e.subtreeFlags |= a;
    }
    return ((e.childLanes = n), t);
  }
  function C1(e, t, n) {
    if (oO() && (t.mode & yt) !== Be && (t.flags & Dt) === Ge)
      return (Fb(t), ul(), (t.flags |= La | ls | Kn), !1);
    var a = ef(t);
    if (n !== null && n.dehydrated !== null)
      if (e === null) {
        if (!a)
          throw new Error(
            'A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.'
          );
        if ((aO(t), zn(t), (t.mode & kt) !== Be)) {
          var l = n !== null;
          if (l) {
            var u = t.child;
            u !== null && (t.treeBaseDuration -= u.treeBaseDuration);
          }
        }
        return !1;
      } else {
        if (
          (ul(),
          (t.flags & Dt) === Ge && (t.memoizedState = null),
          (t.flags |= St),
          zn(t),
          (t.mode & kt) !== Be)
        ) {
          var p = n !== null;
          if (p) {
            var v = t.child;
            v !== null && (t.treeBaseDuration -= v.treeBaseDuration);
          }
        }
        return !1;
      }
    else return (Vb(), !0);
  }
  function sE(e, t, n) {
    var a = t.pendingProps;
    switch ((Ev(t), t.tag)) {
      case E:
      case ce:
      case ne:
      case m:
      case P:
      case x:
      case z:
      case U:
      case N:
      case oe:
        return (zn(t), null);
      case g: {
        var l = t.type;
        return (fa(l) && qc(t), zn(t), null);
      }
      case S: {
        var u = t.stateNode;
        if (
          (pl(t),
          yv(t),
          qv(),
          u.pendingContext &&
            ((u.context = u.pendingContext), (u.pendingContext = null)),
          e === null || e.child === null)
        ) {
          var p = ef(t);
          if (p) Sl(t);
          else if (e !== null) {
            var v = e.memoizedState;
            (!v.isDehydrated || (t.flags & La) !== Ge) &&
              ((t.flags |= Qi), Vb());
          }
        }
        return (Xh(e, t), zn(t), null);
      }
      case O: {
        $v(t);
        var y = eS(),
          C = t.type;
        if (e !== null && t.stateNode != null)
          (oE(e, t, C, a, y), e.ref !== t.ref && aE(t));
        else {
          if (!a) {
            if (t.stateNode === null)
              throw new Error(
                'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.'
              );
            return (zn(t), null);
          }
          var T = jv(),
            k = ef(t);
          if (k) nO(t, y, T) && Sl(t);
          else {
            var L = B_(C, a, y, T, t);
            (iE(L, t, !1, !1), (t.stateNode = L), $_(L, C, a, y) && Sl(t));
          }
          t.ref !== null && aE(t);
        }
        return (zn(t), null);
      }
      case D: {
        var B = a;
        if (e && t.stateNode != null) {
          var Y = e.memoizedProps;
          lE(e, t, Y, B);
        } else {
          if (typeof B != 'string' && t.stateNode === null)
            throw new Error(
              'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.'
            );
          var X = eS(),
            we = jv(),
            He = ef(t);
          He ? rO(t) && Sl(t) : (t.stateNode = G_(B, X, we, t));
        }
        return (zn(t), null);
      }
      case V: {
        hl(t);
        var Ne = t.memoizedState;
        if (
          e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null)
        ) {
          var bt = C1(e, t, Ne);
          if (!bt) return t.flags & Kn ? t : null;
        }
        if ((t.flags & Dt) !== Ge)
          return ((t.lanes = n), (t.mode & kt) !== Be && bh(t), t);
        var pt = Ne !== null,
          H = e !== null && e.memoizedState !== null;
        if (pt !== H && pt) {
          var Q = t.child;
          if (((Q.flags |= Ki), (t.mode & yt) !== Be)) {
            var I =
              e === null &&
              (t.memoizedProps.unstable_avoidThisFallback !== !0 || !qt);
            I || Yv(Gr.current, rS) ? TA() : pm();
          }
        }
        var fe = t.updateQueue;
        if (
          (fe !== null && (t.flags |= St), zn(t), (t.mode & kt) !== Be && pt)
        ) {
          var Oe = t.child;
          Oe !== null && (t.treeBaseDuration -= Oe.treeBaseDuration);
        }
        return null;
      }
      case w:
        return (
          pl(t),
          Xh(e, t),
          e === null && VD(t.stateNode.containerInfo),
          zn(t),
          null
        );
      case _:
        var xe = t.type._context;
        return (Pv(xe, t), zn(t), null);
      case re: {
        var Xe = t.type;
        return (fa(Xe) && qc(t), zn(t), null);
      }
      case ue: {
        hl(t);
        var rt = t.memoizedState;
        if (rt === null) return (zn(t), null);
        var Pt = (t.flags & Dt) !== Ge,
          xt = rt.rendering;
        if (xt === null)
          if (Pt) pu(rt, !1);
          else {
            var sn = xA() && (e === null || (e.flags & Dt) === Ge);
            if (!sn)
              for (var Rt = t.child; Rt !== null; ) {
                var on = yf(Rt);
                if (on !== null) {
                  ((Pt = !0), (t.flags |= Dt), pu(rt, !1));
                  var qn = on.updateQueue;
                  return (
                    qn !== null && ((t.updateQueue = qn), (t.flags |= St)),
                    (t.subtreeFlags = Ge),
                    pO(t, n),
                    Ri(t, Gv(Gr.current, eu)),
                    t.child
                  );
                }
                Rt = Rt.sibling;
              }
            rt.tail !== null &&
              _n() > OE() &&
              ((t.flags |= Dt), (Pt = !0), pu(rt, !1), (t.lanes = lg));
          }
        else {
          if (!Pt) {
            var In = yf(xt);
            if (In !== null) {
              ((t.flags |= Dt), (Pt = !0));
              var wr = In.updateQueue;
              if (
                (wr !== null && ((t.updateQueue = wr), (t.flags |= St)),
                pu(rt, !0),
                rt.tail === null &&
                  rt.tailMode === 'hidden' &&
                  !xt.alternate &&
                  !Nn())
              )
                return (zn(t), null);
            } else
              _n() * 2 - rt.renderingStartTime > OE() &&
                n !== yr &&
                ((t.flags |= Dt), (Pt = !0), pu(rt, !1), (t.lanes = lg));
          }
          if (rt.isBackwards) ((xt.sibling = t.child), (t.child = xt));
          else {
            var tr = rt.last;
            (tr !== null ? (tr.sibling = xt) : (t.child = xt), (rt.last = xt));
          }
        }
        if (rt.tail !== null) {
          var nr = rt.tail;
          ((rt.rendering = nr),
            (rt.tail = nr.sibling),
            (rt.renderingStartTime = _n()),
            (nr.sibling = null));
          var Xn = Gr.current;
          return (Pt ? (Xn = Gv(Xn, eu)) : (Xn = vl(Xn)), Ri(t, Xn), nr);
        }
        return (zn(t), null);
      }
      case ae:
        break;
      case ie:
      case Ee: {
        dm(t);
        var Qa = t.memoizedState,
          Dl = Qa !== null;
        if (e !== null) {
          var Ou = e.memoizedState,
            ba = Ou !== null;
          ba !== Dl && !ft && (t.flags |= Ki);
        }
        return (
          !Dl || (t.mode & yt) === Be
            ? zn(t)
            : gr(ga, yr) &&
              (zn(t), t.subtreeFlags & (fn | St) && (t.flags |= Ki)),
          null
        );
      }
      case Me:
        return null;
      case be:
        return null;
    }
    throw new Error(
      'Unknown unit of work tag (' +
        t.tag +
        '). This error is likely caused by a bug in React. Please file an issue.'
    );
  }
  function T1(e, t, n) {
    switch ((Ev(t), t.tag)) {
      case g: {
        var a = t.type;
        fa(a) && qc(t);
        var l = t.flags;
        return l & Kn
          ? ((t.flags = (l & ~Kn) | Dt), (t.mode & kt) !== Be && bh(t), t)
          : null;
      }
      case S: {
        (t.stateNode, pl(t), yv(t), qv());
        var u = t.flags;
        return (u & Kn) !== Ge && (u & Dt) === Ge
          ? ((t.flags = (u & ~Kn) | Dt), t)
          : null;
      }
      case O:
        return ($v(t), null);
      case V: {
        hl(t);
        var p = t.memoizedState;
        if (p !== null && p.dehydrated !== null) {
          if (t.alternate === null)
            throw new Error(
              'Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.'
            );
          ul();
        }
        var v = t.flags;
        return v & Kn
          ? ((t.flags = (v & ~Kn) | Dt), (t.mode & kt) !== Be && bh(t), t)
          : null;
      }
      case ue:
        return (hl(t), null);
      case w:
        return (pl(t), null);
      case _:
        var y = t.type._context;
        return (Pv(y, t), null);
      case ie:
      case Ee:
        return (dm(t), null);
      case Me:
        return null;
      default:
        return null;
    }
  }
  function uE(e, t, n) {
    switch ((Ev(t), t.tag)) {
      case g: {
        var a = t.type.childContextTypes;
        a != null && qc(t);
        break;
      }
      case S: {
        (t.stateNode, pl(t), yv(t), qv());
        break;
      }
      case O: {
        $v(t);
        break;
      }
      case w:
        pl(t);
        break;
      case V:
        hl(t);
        break;
      case ue:
        hl(t);
        break;
      case _:
        var l = t.type._context;
        Pv(l, t);
        break;
      case ie:
      case Ee:
        dm(t);
        break;
    }
  }
  var cE = null;
  cE = new Set();
  var If = !1,
    Un = !1,
    w1 = typeof WeakSet == 'function' ? WeakSet : Set,
    Le = null,
    El = null,
    Cl = null;
  function x1(e) {
    (Kd(null, function () {
      throw e;
    }),
      Jd());
  }
  var R1 = function (e, t) {
    if (((t.props = e.memoizedProps), (t.state = e.memoizedState), e.mode & kt))
      try {
        (ma(), t.componentWillUnmount());
      } finally {
        ha(e);
      }
    else t.componentWillUnmount();
  };
  function fE(e, t) {
    try {
      Oi(yn, e);
    } catch (n) {
      Ht(e, t, n);
    }
  }
  function Qh(e, t, n) {
    try {
      R1(e, n);
    } catch (a) {
      Ht(e, t, a);
    }
  }
  function _1(e, t, n) {
    try {
      n.componentDidMount();
    } catch (a) {
      Ht(e, t, a);
    }
  }
  function dE(e, t) {
    try {
      vE(e);
    } catch (n) {
      Ht(e, t, n);
    }
  }
  function Tl(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == 'function') {
        var a;
        try {
          if (j && Ke && e.mode & kt)
            try {
              (ma(), (a = n(null)));
            } finally {
              ha(e);
            }
          else a = n(null);
        } catch (l) {
          Ht(e, t, l);
        }
        typeof a == 'function' &&
          d(
            'Unexpected return value from a callback ref in %s. A callback ref should not return a function.',
            lt(e)
          );
      } else n.current = null;
  }
  function Bf(e, t, n) {
    try {
      n();
    } catch (a) {
      Ht(e, t, a);
    }
  }
  var pE = !1;
  function D1(e, t) {
    (H_(e.containerInfo), (Le = t), O1());
    var n = pE;
    return ((pE = !1), n);
  }
  function O1() {
    for (; Le !== null; ) {
      var e = Le,
        t = e.child;
      (e.subtreeFlags & rp) !== Ge && t !== null
        ? ((t.return = e), (Le = t))
        : A1();
    }
  }
  function A1() {
    for (; Le !== null; ) {
      var e = Le;
      Jt(e);
      try {
        M1(e);
      } catch (n) {
        Ht(e, e.return, n);
      }
      Rn();
      var t = e.sibling;
      if (t !== null) {
        ((t.return = e.return), (Le = t));
        return;
      }
      Le = e.return;
    }
  }
  function M1(e) {
    var t = e.alternate,
      n = e.flags;
    if ((n & Qi) !== Ge) {
      switch ((Jt(e), e.tag)) {
        case m:
        case P:
        case ne:
          break;
        case g: {
          if (t !== null) {
            var a = t.memoizedProps,
              l = t.memoizedState,
              u = e.stateNode;
            e.type === e.elementType &&
              !go &&
              (u.props !== e.memoizedProps &&
                d(
                  'Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.',
                  lt(e) || 'instance'
                ),
              u.state !== e.memoizedState &&
                d(
                  'Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.',
                  lt(e) || 'instance'
                ));
            var p = u.getSnapshotBeforeUpdate(
              e.elementType === e.type ? a : qr(e.type, a),
              l
            );
            {
              var v = cE;
              p === void 0 &&
                !v.has(e.type) &&
                (v.add(e.type),
                d(
                  '%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.',
                  lt(e)
                ));
            }
            u.__reactInternalSnapshotBeforeUpdate = p;
          }
          break;
        }
        case S: {
          {
            var y = e.stateNode;
            fD(y.containerInfo);
          }
          break;
        }
        case O:
        case D:
        case w:
        case re:
          break;
        default:
          throw new Error(
            'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.'
          );
      }
      Rn();
    }
  }
  function Qr(e, t, n) {
    var a = t.updateQueue,
      l = a !== null ? a.lastEffect : null;
    if (l !== null) {
      var u = l.next,
        p = u;
      do {
        if ((p.tag & e) === e) {
          var v = p.destroy;
          ((p.destroy = void 0),
            v !== void 0 &&
              ((e & Pn) !== cr ? Gx(t) : (e & yn) !== cr && ng(t),
              (e & da) !== cr && Ru(!0),
              Bf(t, n, v),
              (e & da) !== cr && Ru(!1),
              (e & Pn) !== cr ? Wx() : (e & yn) !== cr && rg()));
        }
        p = p.next;
      } while (p !== u);
    }
  }
  function Oi(e, t) {
    var n = t.updateQueue,
      a = n !== null ? n.lastEffect : null;
    if (a !== null) {
      var l = a.next,
        u = l;
      do {
        if ((u.tag & e) === e) {
          (e & Pn) !== cr ? $x(t) : (e & yn) !== cr && qx(t);
          var p = u.create;
          ((e & da) !== cr && Ru(!0),
            (u.destroy = p()),
            (e & da) !== cr && Ru(!1),
            (e & Pn) !== cr ? Yx() : (e & yn) !== cr && Xx());
          {
            var v = u.destroy;
            if (v !== void 0 && typeof v != 'function') {
              var y = void 0;
              (u.tag & yn) !== Ge
                ? (y = 'useLayoutEffect')
                : (u.tag & da) !== Ge
                  ? (y = 'useInsertionEffect')
                  : (y = 'useEffect');
              var C = void 0;
              (v === null
                ? (C =
                    ' You returned null. If your effect does not require clean up, return undefined (or nothing).')
                : typeof v.then == 'function'
                  ? (C =
                      `

It looks like you wrote ` +
                      y +
                      `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` +
                      y +
                      `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching`)
                  : (C = ' You returned: ' + v),
                d(
                  '%s must not return anything besides a function, which is used for clean-up.%s',
                  y,
                  C
                ));
            }
          }
        }
        u = u.next;
      } while (u !== l);
    }
  }
  function L1(e, t) {
    if ((t.flags & St) !== Ge)
      switch (t.tag) {
        case U: {
          var n = t.stateNode.passiveEffectDuration,
            a = t.memoizedProps,
            l = a.id,
            u = a.onPostCommit,
            p = OS(),
            v = t.alternate === null ? 'mount' : 'update';
          (DS() && (v = 'nested-update'),
            typeof u == 'function' && u(l, v, n, p));
          var y = t.return;
          e: for (; y !== null; ) {
            switch (y.tag) {
              case S:
                var C = y.stateNode;
                C.passiveEffectDuration += n;
                break e;
              case U:
                var T = y.stateNode;
                T.passiveEffectDuration += n;
                break e;
            }
            y = y.return;
          }
          break;
        }
      }
  }
  function k1(e, t, n, a) {
    if ((n.flags & ss) !== Ge)
      switch (n.tag) {
        case m:
        case P:
        case ne: {
          if (!Un)
            if (n.mode & kt)
              try {
                (ma(), Oi(yn | mn, n));
              } finally {
                ha(n);
              }
            else Oi(yn | mn, n);
          break;
        }
        case g: {
          var l = n.stateNode;
          if (n.flags & St && !Un)
            if (t === null)
              if (
                (n.type === n.elementType &&
                  !go &&
                  (l.props !== n.memoizedProps &&
                    d(
                      'Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.',
                      lt(n) || 'instance'
                    ),
                  l.state !== n.memoizedState &&
                    d(
                      'Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.',
                      lt(n) || 'instance'
                    )),
                n.mode & kt)
              )
                try {
                  (ma(), l.componentDidMount());
                } finally {
                  ha(n);
                }
              else l.componentDidMount();
            else {
              var u =
                  n.elementType === n.type
                    ? t.memoizedProps
                    : qr(n.type, t.memoizedProps),
                p = t.memoizedState;
              if (
                (n.type === n.elementType &&
                  !go &&
                  (l.props !== n.memoizedProps &&
                    d(
                      'Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.',
                      lt(n) || 'instance'
                    ),
                  l.state !== n.memoizedState &&
                    d(
                      'Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.',
                      lt(n) || 'instance'
                    )),
                n.mode & kt)
              )
                try {
                  (ma(),
                    l.componentDidUpdate(
                      u,
                      p,
                      l.__reactInternalSnapshotBeforeUpdate
                    ));
                } finally {
                  ha(n);
                }
              else
                l.componentDidUpdate(
                  u,
                  p,
                  l.__reactInternalSnapshotBeforeUpdate
                );
            }
          var v = n.updateQueue;
          v !== null &&
            (n.type === n.elementType &&
              !go &&
              (l.props !== n.memoizedProps &&
                d(
                  'Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.',
                  lt(n) || 'instance'
                ),
              l.state !== n.memoizedState &&
                d(
                  'Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.',
                  lt(n) || 'instance'
                )),
            Zb(n, v, l));
          break;
        }
        case S: {
          var y = n.updateQueue;
          if (y !== null) {
            var C = null;
            if (n.child !== null)
              switch (n.child.tag) {
                case O:
                  C = n.child.stateNode;
                  break;
                case g:
                  C = n.child.stateNode;
                  break;
              }
            Zb(n, y, C);
          }
          break;
        }
        case O: {
          var T = n.stateNode;
          if (t === null && n.flags & St) {
            var k = n.type,
              L = n.memoizedProps;
            K_(T, k, L);
          }
          break;
        }
        case D:
          break;
        case w:
          break;
        case U: {
          {
            var B = n.memoizedProps,
              Y = B.onCommit,
              X = B.onRender,
              we = n.stateNode.effectDuration,
              He = OS(),
              Ne = t === null ? 'mount' : 'update';
            (DS() && (Ne = 'nested-update'),
              typeof X == 'function' &&
                X(
                  n.memoizedProps.id,
                  Ne,
                  n.actualDuration,
                  n.treeBaseDuration,
                  n.actualStartTime,
                  He
                ));
            {
              (typeof Y == 'function' && Y(n.memoizedProps.id, Ne, we, He),
                AA(n));
              var bt = n.return;
              e: for (; bt !== null; ) {
                switch (bt.tag) {
                  case S:
                    var pt = bt.stateNode;
                    pt.effectDuration += we;
                    break e;
                  case U:
                    var H = bt.stateNode;
                    H.effectDuration += we;
                    break e;
                }
                bt = bt.return;
              }
            }
          }
          break;
        }
        case V: {
          I1(e, n);
          break;
        }
        case ue:
        case re:
        case ae:
        case ie:
        case Ee:
        case be:
          break;
        default:
          throw new Error(
            'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.'
          );
      }
    Un || (n.flags & di && vE(n));
  }
  function N1(e) {
    switch (e.tag) {
      case m:
      case P:
      case ne: {
        if (e.mode & kt)
          try {
            (ma(), fE(e, e.return));
          } finally {
            ha(e);
          }
        else fE(e, e.return);
        break;
      }
      case g: {
        var t = e.stateNode;
        (typeof t.componentDidMount == 'function' && _1(e, e.return, t),
          dE(e, e.return));
        break;
      }
      case O: {
        dE(e, e.return);
        break;
      }
    }
  }
  function P1(e, t) {
    for (var n = null, a = e; ; ) {
      if (a.tag === O) {
        if (n === null) {
          n = a;
          try {
            var l = a.stateNode;
            t ? lD(l) : uD(a.stateNode, a.memoizedProps);
          } catch (p) {
            Ht(e, e.return, p);
          }
        }
      } else if (a.tag === D) {
        if (n === null)
          try {
            var u = a.stateNode;
            t ? sD(u) : cD(u, a.memoizedProps);
          } catch (p) {
            Ht(e, e.return, p);
          }
      } else if (
        !((a.tag === ie || a.tag === Ee) && a.memoizedState !== null && a !== e)
      ) {
        if (a.child !== null) {
          ((a.child.return = a), (a = a.child));
          continue;
        }
      }
      if (a === e) return;
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === e) return;
        (n === a && (n = null), (a = a.return));
      }
      (n === a && (n = null), (a.sibling.return = a.return), (a = a.sibling));
    }
  }
  function vE(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode,
        a;
      switch (e.tag) {
        case O:
          a = n;
          break;
        default:
          a = n;
      }
      if (typeof t == 'function') {
        var l;
        if (e.mode & kt)
          try {
            (ma(), (l = t(a)));
          } finally {
            ha(e);
          }
        else l = t(a);
        typeof l == 'function' &&
          d(
            'Unexpected return value from a callback ref in %s. A callback ref should not return a function.',
            lt(e)
          );
      } else
        (t.hasOwnProperty('current') ||
          d(
            'Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().',
            lt(e)
          ),
          (t.current = a));
    }
  }
  function z1(e) {
    var t = e.alternate;
    (t !== null && (t.return = null), (e.return = null));
  }
  function hE(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), hE(t));
    {
      if (
        ((e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === O)
      ) {
        var n = e.stateNode;
        n !== null && BD(n);
      }
      ((e.stateNode = null),
        (e._debugOwner = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null));
    }
  }
  function U1(e) {
    for (var t = e.return; t !== null; ) {
      if (mE(t)) return t;
      t = t.return;
    }
    throw new Error(
      'Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.'
    );
  }
  function mE(e) {
    return e.tag === O || e.tag === S || e.tag === w;
  }
  function yE(e) {
    var t = e;
    e: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || mE(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== O && t.tag !== D && t.tag !== te;

      ) {
        if (t.flags & fn || t.child === null || t.tag === w) continue e;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & fn)) return t.stateNode;
    }
  }
  function F1(e) {
    var t = U1(e);
    switch (t.tag) {
      case O: {
        var n = t.stateNode;
        t.flags & os && (bb(n), (t.flags &= ~os));
        var a = yE(e);
        Jh(e, a, n);
        break;
      }
      case S:
      case w: {
        var l = t.stateNode.containerInfo,
          u = yE(e);
        Kh(e, u, l);
        break;
      }
      default:
        throw new Error(
          'Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.'
        );
    }
  }
  function Kh(e, t, n) {
    var a = e.tag,
      l = a === O || a === D;
    if (l) {
      var u = e.stateNode;
      t ? rD(n, u, t) : tD(n, u);
    } else if (a !== w) {
      var p = e.child;
      if (p !== null) {
        Kh(p, t, n);
        for (var v = p.sibling; v !== null; ) (Kh(v, t, n), (v = v.sibling));
      }
    }
  }
  function Jh(e, t, n) {
    var a = e.tag,
      l = a === O || a === D;
    if (l) {
      var u = e.stateNode;
      t ? nD(n, u, t) : eD(n, u);
    } else if (a !== w) {
      var p = e.child;
      if (p !== null) {
        Jh(p, t, n);
        for (var v = p.sibling; v !== null; ) (Jh(v, t, n), (v = v.sibling));
      }
    }
  }
  var Fn = null,
    Kr = !1;
  function V1(e, t, n) {
    {
      var a = t;
      e: for (; a !== null; ) {
        switch (a.tag) {
          case O: {
            ((Fn = a.stateNode), (Kr = !1));
            break e;
          }
          case S: {
            ((Fn = a.stateNode.containerInfo), (Kr = !0));
            break e;
          }
          case w: {
            ((Fn = a.stateNode.containerInfo), (Kr = !0));
            break e;
          }
        }
        a = a.return;
      }
      if (Fn === null)
        throw new Error(
          'Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.'
        );
      (gE(e, t, n), (Fn = null), (Kr = !1));
    }
    z1(n);
  }
  function Ai(e, t, n) {
    for (var a = n.child; a !== null; ) (gE(e, t, a), (a = a.sibling));
  }
  function gE(e, t, n) {
    switch ((Hx(n), n.tag)) {
      case O:
        Un || Tl(n, t);
      case D: {
        {
          var a = Fn,
            l = Kr;
          ((Fn = null),
            Ai(e, t, n),
            (Fn = a),
            (Kr = l),
            Fn !== null && (Kr ? iD(Fn, n.stateNode) : aD(Fn, n.stateNode)));
        }
        return;
      }
      case te: {
        Fn !== null && (Kr ? oD(Fn, n.stateNode) : uv(Fn, n.stateNode));
        return;
      }
      case w: {
        {
          var u = Fn,
            p = Kr;
          ((Fn = n.stateNode.containerInfo),
            (Kr = !0),
            Ai(e, t, n),
            (Fn = u),
            (Kr = p));
        }
        return;
      }
      case m:
      case P:
      case oe:
      case ne: {
        if (!Un) {
          var v = n.updateQueue;
          if (v !== null) {
            var y = v.lastEffect;
            if (y !== null) {
              var C = y.next,
                T = C;
              do {
                var k = T,
                  L = k.destroy,
                  B = k.tag;
                (L !== void 0 &&
                  ((B & da) !== cr
                    ? Bf(n, t, L)
                    : (B & yn) !== cr &&
                      (ng(n),
                      n.mode & kt ? (ma(), Bf(n, t, L), ha(n)) : Bf(n, t, L),
                      rg())),
                  (T = T.next));
              } while (T !== C);
            }
          }
        }
        Ai(e, t, n);
        return;
      }
      case g: {
        if (!Un) {
          Tl(n, t);
          var Y = n.stateNode;
          typeof Y.componentWillUnmount == 'function' && Qh(n, t, Y);
        }
        Ai(e, t, n);
        return;
      }
      case ae: {
        Ai(e, t, n);
        return;
      }
      case ie: {
        if (n.mode & yt) {
          var X = Un;
          ((Un = X || n.memoizedState !== null), Ai(e, t, n), (Un = X));
        } else Ai(e, t, n);
        break;
      }
      default: {
        Ai(e, t, n);
        return;
      }
    }
  }
  function H1(e) {
    e.memoizedState;
  }
  function I1(e, t) {
    var n = t.memoizedState;
    if (n === null) {
      var a = t.alternate;
      if (a !== null) {
        var l = a.memoizedState;
        if (l !== null) {
          var u = l.dehydrated;
          u !== null && xD(u);
        }
      }
    }
  }
  function bE(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new w1()),
        t.forEach(function (a) {
          var l = UA.bind(null, e, a);
          if (!n.has(a)) {
            if ((n.add(a), Ir))
              if (El !== null && Cl !== null) xu(Cl, El);
              else
                throw Error(
                  'Expected finished root and lanes to be set. This is a bug in React.'
                );
            a.then(l, l);
          }
        }));
    }
  }
  function B1(e, t, n) {
    ((El = n), (Cl = e), Jt(t), SE(t, e), Jt(t), (El = null), (Cl = null));
  }
  function Jr(e, t, n) {
    var a = t.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var u = a[l];
        try {
          V1(e, t, u);
        } catch (y) {
          Ht(u, t, y);
        }
      }
    var p = Ku();
    if (t.subtreeFlags & ap)
      for (var v = t.child; v !== null; ) (Jt(v), SE(v, e), (v = v.sibling));
    Jt(p);
  }
  function SE(e, t, n) {
    var a = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case m:
      case P:
      case oe:
      case ne: {
        if ((Jr(t, e), ya(e), l & St)) {
          try {
            (Qr(da | mn, e, e.return), Oi(da | mn, e));
          } catch (Xe) {
            Ht(e, e.return, Xe);
          }
          if (e.mode & kt) {
            try {
              (ma(), Qr(yn | mn, e, e.return));
            } catch (Xe) {
              Ht(e, e.return, Xe);
            }
            ha(e);
          } else
            try {
              Qr(yn | mn, e, e.return);
            } catch (Xe) {
              Ht(e, e.return, Xe);
            }
        }
        return;
      }
      case g: {
        (Jr(t, e), ya(e), l & di && a !== null && Tl(a, a.return));
        return;
      }
      case O: {
        (Jr(t, e), ya(e), l & di && a !== null && Tl(a, a.return));
        {
          if (e.flags & os) {
            var u = e.stateNode;
            try {
              bb(u);
            } catch (Xe) {
              Ht(e, e.return, Xe);
            }
          }
          if (l & St) {
            var p = e.stateNode;
            if (p != null) {
              var v = e.memoizedProps,
                y = a !== null ? a.memoizedProps : v,
                C = e.type,
                T = e.updateQueue;
              if (((e.updateQueue = null), T !== null))
                try {
                  J_(p, T, C, y, v, e);
                } catch (Xe) {
                  Ht(e, e.return, Xe);
                }
            }
          }
        }
        return;
      }
      case D: {
        if ((Jr(t, e), ya(e), l & St)) {
          if (e.stateNode === null)
            throw new Error(
              'This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.'
            );
          var k = e.stateNode,
            L = e.memoizedProps,
            B = a !== null ? a.memoizedProps : L;
          try {
            Z_(k, B, L);
          } catch (Xe) {
            Ht(e, e.return, Xe);
          }
        }
        return;
      }
      case S: {
        if ((Jr(t, e), ya(e), l & St && a !== null)) {
          var Y = a.memoizedState;
          if (Y.isDehydrated)
            try {
              wD(t.containerInfo);
            } catch (Xe) {
              Ht(e, e.return, Xe);
            }
        }
        return;
      }
      case w: {
        (Jr(t, e), ya(e));
        return;
      }
      case V: {
        (Jr(t, e), ya(e));
        var X = e.child;
        if (X.flags & Ki) {
          var we = X.stateNode,
            He = X.memoizedState,
            Ne = He !== null;
          if (((we.isHidden = Ne), Ne)) {
            var bt = X.alternate !== null && X.alternate.memoizedState !== null;
            bt || CA();
          }
        }
        if (l & St) {
          try {
            H1(e);
          } catch (Xe) {
            Ht(e, e.return, Xe);
          }
          bE(e);
        }
        return;
      }
      case ie: {
        var pt = a !== null && a.memoizedState !== null;
        if (e.mode & yt) {
          var H = Un;
          ((Un = H || pt), Jr(t, e), (Un = H));
        } else Jr(t, e);
        if ((ya(e), l & Ki)) {
          var Q = e.stateNode,
            I = e.memoizedState,
            fe = I !== null,
            Oe = e;
          if (((Q.isHidden = fe), fe && !pt && (Oe.mode & yt) !== Be)) {
            Le = Oe;
            for (var xe = Oe.child; xe !== null; )
              ((Le = xe), $1(xe), (xe = xe.sibling));
          }
          P1(Oe, fe);
        }
        return;
      }
      case ue: {
        (Jr(t, e), ya(e), l & St && bE(e));
        return;
      }
      case ae:
        return;
      default: {
        (Jr(t, e), ya(e));
        return;
      }
    }
  }
  function ya(e) {
    var t = e.flags;
    if (t & fn) {
      try {
        F1(e);
      } catch (n) {
        Ht(e, e.return, n);
      }
      e.flags &= ~fn;
    }
    t & ka && (e.flags &= ~ka);
  }
  function j1(e, t, n) {
    ((El = n), (Cl = t), (Le = e), EE(e, t, n), (El = null), (Cl = null));
  }
  function EE(e, t, n) {
    for (var a = (e.mode & yt) !== Be; Le !== null; ) {
      var l = Le,
        u = l.child;
      if (l.tag === ie && a) {
        var p = l.memoizedState !== null,
          v = p || If;
        if (v) {
          Zh(e, t, n);
          continue;
        } else {
          var y = l.alternate,
            C = y !== null && y.memoizedState !== null,
            T = C || Un,
            k = If,
            L = Un;
          ((If = v), (Un = T), Un && !L && ((Le = l), Y1(l)));
          for (var B = u; B !== null; )
            ((Le = B), EE(B, t, n), (B = B.sibling));
          ((Le = l), (If = k), (Un = L), Zh(e, t, n));
          continue;
        }
      }
      (l.subtreeFlags & ss) !== Ge && u !== null
        ? ((u.return = l), (Le = u))
        : Zh(e, t, n);
    }
  }
  function Zh(e, t, n) {
    for (; Le !== null; ) {
      var a = Le;
      if ((a.flags & ss) !== Ge) {
        var l = a.alternate;
        Jt(a);
        try {
          k1(t, l, a, n);
        } catch (p) {
          Ht(a, a.return, p);
        }
        Rn();
      }
      if (a === e) {
        Le = null;
        return;
      }
      var u = a.sibling;
      if (u !== null) {
        ((u.return = a.return), (Le = u));
        return;
      }
      Le = a.return;
    }
  }
  function $1(e) {
    for (; Le !== null; ) {
      var t = Le,
        n = t.child;
      switch (t.tag) {
        case m:
        case P:
        case oe:
        case ne: {
          if (t.mode & kt)
            try {
              (ma(), Qr(yn, t, t.return));
            } finally {
              ha(t);
            }
          else Qr(yn, t, t.return);
          break;
        }
        case g: {
          Tl(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == 'function' && Qh(t, t.return, a);
          break;
        }
        case O: {
          Tl(t, t.return);
          break;
        }
        case ie: {
          var l = t.memoizedState !== null;
          if (l) {
            CE(e);
            continue;
          }
          break;
        }
      }
      n !== null ? ((n.return = t), (Le = n)) : CE(e);
    }
  }
  function CE(e) {
    for (; Le !== null; ) {
      var t = Le;
      if (t === e) {
        Le = null;
        return;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (Le = n));
        return;
      }
      Le = t.return;
    }
  }
  function Y1(e) {
    for (; Le !== null; ) {
      var t = Le,
        n = t.child;
      if (t.tag === ie) {
        var a = t.memoizedState !== null;
        if (a) {
          TE(e);
          continue;
        }
      }
      n !== null ? ((n.return = t), (Le = n)) : TE(e);
    }
  }
  function TE(e) {
    for (; Le !== null; ) {
      var t = Le;
      Jt(t);
      try {
        N1(t);
      } catch (a) {
        Ht(t, t.return, a);
      }
      if ((Rn(), t === e)) {
        Le = null;
        return;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (Le = n));
        return;
      }
      Le = t.return;
    }
  }
  function G1(e, t, n, a) {
    ((Le = t), W1(t, e, n, a));
  }
  function W1(e, t, n, a) {
    for (; Le !== null; ) {
      var l = Le,
        u = l.child;
      (l.subtreeFlags & jo) !== Ge && u !== null
        ? ((u.return = l), (Le = u))
        : q1(e, t, n, a);
    }
  }
  function q1(e, t, n, a) {
    for (; Le !== null; ) {
      var l = Le;
      if ((l.flags & Hr) !== Ge) {
        Jt(l);
        try {
          X1(t, l, n, a);
        } catch (p) {
          Ht(l, l.return, p);
        }
        Rn();
      }
      if (l === e) {
        Le = null;
        return;
      }
      var u = l.sibling;
      if (u !== null) {
        ((u.return = l.return), (Le = u));
        return;
      }
      Le = l.return;
    }
  }
  function X1(e, t, n, a) {
    switch (t.tag) {
      case m:
      case P:
      case ne: {
        if (t.mode & kt) {
          gh();
          try {
            Oi(Pn | mn, t);
          } finally {
            yh(t);
          }
        } else Oi(Pn | mn, t);
        break;
      }
    }
  }
  function Q1(e) {
    ((Le = e), K1());
  }
  function K1() {
    for (; Le !== null; ) {
      var e = Le,
        t = e.child;
      if ((Le.flags & Xi) !== Ge) {
        var n = e.deletions;
        if (n !== null) {
          for (var a = 0; a < n.length; a++) {
            var l = n[a];
            ((Le = l), eA(l, e));
          }
          {
            var u = e.alternate;
            if (u !== null) {
              var p = u.child;
              if (p !== null) {
                u.child = null;
                do {
                  var v = p.sibling;
                  ((p.sibling = null), (p = v));
                } while (p !== null);
              }
            }
          }
          Le = e;
        }
      }
      (e.subtreeFlags & jo) !== Ge && t !== null
        ? ((t.return = e), (Le = t))
        : J1();
    }
  }
  function J1() {
    for (; Le !== null; ) {
      var e = Le;
      (e.flags & Hr) !== Ge && (Jt(e), Z1(e), Rn());
      var t = e.sibling;
      if (t !== null) {
        ((t.return = e.return), (Le = t));
        return;
      }
      Le = e.return;
    }
  }
  function Z1(e) {
    switch (e.tag) {
      case m:
      case P:
      case ne: {
        e.mode & kt
          ? (gh(), Qr(Pn | mn, e, e.return), yh(e))
          : Qr(Pn | mn, e, e.return);
        break;
      }
    }
  }
  function eA(e, t) {
    for (; Le !== null; ) {
      var n = Le;
      (Jt(n), nA(n, t), Rn());
      var a = n.child;
      a !== null ? ((a.return = n), (Le = a)) : tA(e);
    }
  }
  function tA(e) {
    for (; Le !== null; ) {
      var t = Le,
        n = t.sibling,
        a = t.return;
      if ((hE(t), t === e)) {
        Le = null;
        return;
      }
      if (n !== null) {
        ((n.return = a), (Le = n));
        return;
      }
      Le = a;
    }
  }
  function nA(e, t) {
    switch (e.tag) {
      case m:
      case P:
      case ne: {
        e.mode & kt ? (gh(), Qr(Pn, e, t), yh(e)) : Qr(Pn, e, t);
        break;
      }
    }
  }
  function rA(e) {
    switch (e.tag) {
      case m:
      case P:
      case ne: {
        try {
          Oi(yn | mn, e);
        } catch (n) {
          Ht(e, e.return, n);
        }
        break;
      }
      case g: {
        var t = e.stateNode;
        try {
          t.componentDidMount();
        } catch (n) {
          Ht(e, e.return, n);
        }
        break;
      }
    }
  }
  function aA(e) {
    switch (e.tag) {
      case m:
      case P:
      case ne: {
        try {
          Oi(Pn | mn, e);
        } catch (t) {
          Ht(e, e.return, t);
        }
        break;
      }
    }
  }
  function iA(e) {
    switch (e.tag) {
      case m:
      case P:
      case ne: {
        try {
          Qr(yn | mn, e, e.return);
        } catch (n) {
          Ht(e, e.return, n);
        }
        break;
      }
      case g: {
        var t = e.stateNode;
        typeof t.componentWillUnmount == 'function' && Qh(e, e.return, t);
        break;
      }
    }
  }
  function oA(e) {
    switch (e.tag) {
      case m:
      case P:
      case ne:
        try {
          Qr(Pn | mn, e, e.return);
        } catch (t) {
          Ht(e, e.return, t);
        }
    }
  }
  if (typeof Symbol == 'function' && Symbol.for) {
    var vu = Symbol.for;
    (vu('selector.component'),
      vu('selector.has_pseudo_class'),
      vu('selector.role'),
      vu('selector.test_id'),
      vu('selector.text'));
  }
  var lA = [];
  function sA() {
    lA.forEach(function (e) {
      return e();
    });
  }
  var uA = o.ReactCurrentActQueue;
  function cA(e) {
    {
      var t =
          typeof IS_REACT_ACT_ENVIRONMENT < 'u'
            ? IS_REACT_ACT_ENVIRONMENT
            : void 0,
        n = typeof jest < 'u';
      return n && t !== !1;
    }
  }
  function wE() {
    {
      var e =
        typeof IS_REACT_ACT_ENVIRONMENT < 'u'
          ? IS_REACT_ACT_ENVIRONMENT
          : void 0;
      return (
        !e &&
          uA.current !== null &&
          d(
            'The current testing environment is not configured to support act(...)'
          ),
        e
      );
    }
  }
  var fA = Math.ceil,
    em = o.ReactCurrentDispatcher,
    tm = o.ReactCurrentOwner,
    Vn = o.ReactCurrentBatchConfig,
    Zr = o.ReactCurrentActQueue,
    Sn = 0,
    xE = 1,
    Hn = 2,
    Pr = 4,
    Ga = 0,
    hu = 1,
    bo = 2,
    jf = 3,
    mu = 4,
    RE = 5,
    nm = 6,
    gt = Sn,
    Zn = null,
    Zt = null,
    En = se,
    ga = se,
    rm = Si(se),
    Cn = Ga,
    yu = null,
    $f = se,
    gu = se,
    Yf = se,
    bu = null,
    fr = null,
    am = 0,
    _E = 500,
    DE = 1 / 0,
    dA = 500,
    Wa = null;
  function Su() {
    DE = _n() + dA;
  }
  function OE() {
    return DE;
  }
  var Gf = !1,
    im = null,
    wl = null,
    So = !1,
    Mi = null,
    Eu = se,
    om = [],
    lm = null,
    pA = 50,
    Cu = 0,
    sm = null,
    um = !1,
    Wf = !1,
    vA = 50,
    xl = 0,
    qf = null,
    Tu = jt,
    Xf = se,
    AE = !1;
  function Qf() {
    return Zn;
  }
  function er() {
    return (gt & (Hn | Pr)) !== Sn ? _n() : (Tu !== jt || (Tu = _n()), Tu);
  }
  function Li(e) {
    var t = e.mode;
    if ((t & yt) === Be) return tt;
    if ((gt & Hn) !== Sn && En !== se) return hs(En);
    var n = uO() !== sO;
    if (n) {
      if (Vn.transition !== null) {
        var a = Vn.transition;
        (a._updatedFibers || (a._updatedFibers = new Set()),
          a._updatedFibers.add(e));
      }
      return (Xf === On && (Xf = fg()), Xf);
    }
    var l = Br();
    if (l !== On) return l;
    var u = W_();
    return u;
  }
  function hA(e) {
    var t = e.mode;
    return (t & yt) === Be ? tt : yR();
  }
  function Tn(e, t, n, a) {
    (VA(),
      AE && d('useInsertionEffect must not schedule updates.'),
      um && (Wf = !0),
      ms(e, n, a),
      (gt & Hn) !== se && e === Zn
        ? BA(t)
        : (Ir && vg(e, t, n),
          jA(t),
          e === Zn &&
            ((gt & Hn) === Sn && (gu = st(gu, n)), Cn === mu && ki(e, En)),
          dr(e, a),
          n === tt &&
            gt === Sn &&
            (t.mode & yt) === Be &&
            !Zr.isBatchingLegacy &&
            (Su(), Ab())));
  }
  function mA(e, t, n) {
    var a = e.current;
    ((a.lanes = t), ms(e, t, n), dr(e, n));
  }
  function yA(e) {
    return (gt & Hn) !== Sn;
  }
  function dr(e, t) {
    var n = e.callbackNode;
    fR(e, t);
    var a = mc(e, e === Zn ? En : se);
    if (a === se) {
      (n !== null && GE(n), (e.callbackNode = null), (e.callbackPriority = On));
      return;
    }
    var l = ro(a),
      u = e.callbackPriority;
    if (u === l && !(Zr.current !== null && n !== mm)) {
      n == null &&
        u !== tt &&
        d(
          'Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.'
        );
      return;
    }
    n != null && GE(n);
    var p;
    if (l === tt)
      (e.tag === Ei
        ? (Zr.isBatchingLegacy !== null && (Zr.didScheduleLegacyUpdate = !0),
          YD(kE.bind(null, e)))
        : Ob(kE.bind(null, e)),
        Zr.current !== null
          ? Zr.current.push(Ci)
          : X_(function () {
              (gt & (Hn | Pr)) === Sn && Ci();
            }),
        (p = null));
    else {
      var v;
      switch (yg(a)) {
        case br:
          v = dc;
          break;
        case Ua:
          v = ip;
          break;
        case Fa:
          v = eo;
          break;
        case bc:
          v = op;
          break;
        default:
          v = eo;
          break;
      }
      p = ym(v, ME.bind(null, e));
    }
    ((e.callbackPriority = l), (e.callbackNode = p));
  }
  function ME(e, t) {
    if ((PO(), (Tu = jt), (Xf = se), (gt & (Hn | Pr)) !== Sn))
      throw new Error('Should not already be working.');
    var n = e.callbackNode,
      a = Xa();
    if (a && e.callbackNode !== n) return null;
    var l = mc(e, e === Zn ? En : se);
    if (l === se) return null;
    var u = !yc(e, l) && !mR(e, l) && !t,
      p = u ? _A(e, l) : Jf(e, l);
    if (p !== Ga) {
      if (p === bo) {
        var v = Dp(e);
        v !== se && ((l = v), (p = cm(e, v)));
      }
      if (p === hu) {
        var y = yu;
        throw (Eo(e, se), ki(e, l), dr(e, _n()), y);
      }
      if (p === nm) ki(e, l);
      else {
        var C = !yc(e, l),
          T = e.current.alternate;
        if (C && !bA(T)) {
          if (((p = Jf(e, l)), p === bo)) {
            var k = Dp(e);
            k !== se && ((l = k), (p = cm(e, k)));
          }
          if (p === hu) {
            var L = yu;
            throw (Eo(e, se), ki(e, l), dr(e, _n()), L);
          }
        }
        ((e.finishedWork = T), (e.finishedLanes = l), gA(e, p, l));
      }
    }
    return (dr(e, _n()), e.callbackNode === n ? ME.bind(null, e) : null);
  }
  function cm(e, t) {
    var n = bu;
    if (Sc(e)) {
      var a = Eo(e, t);
      ((a.flags |= La), FD(e.containerInfo));
    }
    var l = Jf(e, t);
    if (l !== bo) {
      var u = fr;
      ((fr = n), u !== null && LE(u));
    }
    return l;
  }
  function LE(e) {
    fr === null ? (fr = e) : fr.push.apply(fr, e);
  }
  function gA(e, t, n) {
    switch (t) {
      case Ga:
      case hu:
        throw new Error('Root did not complete. This is a bug in React.');
      case bo: {
        Co(e, fr, Wa);
        break;
      }
      case jf: {
        if ((ki(e, n), ug(n) && !WE())) {
          var a = am + _E - _n();
          if (a > 10) {
            var l = mc(e, se);
            if (l !== se) break;
            var u = e.suspendedLanes;
            if (!Xo(u, n)) {
              (er(), pg(e, u));
              break;
            }
            e.timeoutHandle = lv(Co.bind(null, e, fr, Wa), a);
            break;
          }
        }
        Co(e, fr, Wa);
        break;
      }
      case mu: {
        if ((ki(e, n), hR(n))) break;
        if (!WE()) {
          var p = uR(e, n),
            v = p,
            y = _n() - v,
            C = FA(y) - y;
          if (C > 10) {
            e.timeoutHandle = lv(Co.bind(null, e, fr, Wa), C);
            break;
          }
        }
        Co(e, fr, Wa);
        break;
      }
      case RE: {
        Co(e, fr, Wa);
        break;
      }
      default:
        throw new Error('Unknown root exit status.');
    }
  }
  function bA(e) {
    for (var t = e; ; ) {
      if (t.flags & cc) {
        var n = t.updateQueue;
        if (n !== null) {
          var a = n.stores;
          if (a !== null)
            for (var l = 0; l < a.length; l++) {
              var u = a[l],
                p = u.getSnapshot,
                v = u.value;
              try {
                if (!Er(p(), v)) return !1;
              } catch {
                return !1;
              }
            }
        }
      }
      var y = t.child;
      if (t.subtreeFlags & cc && y !== null) {
        ((y.return = t), (t = y));
        continue;
      }
      if (t === e) return !0;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return !0;
  }
  function ki(e, t) {
    ((t = gc(t, Yf)), (t = gc(t, gu)), bR(e, t));
  }
  function kE(e) {
    if ((zO(), (gt & (Hn | Pr)) !== Sn))
      throw new Error('Should not already be working.');
    Xa();
    var t = mc(e, se);
    if (!gr(t, tt)) return (dr(e, _n()), null);
    var n = Jf(e, t);
    if (e.tag !== Ei && n === bo) {
      var a = Dp(e);
      a !== se && ((t = a), (n = cm(e, a)));
    }
    if (n === hu) {
      var l = yu;
      throw (Eo(e, se), ki(e, t), dr(e, _n()), l);
    }
    if (n === nm)
      throw new Error('Root did not complete. This is a bug in React.');
    var u = e.current.alternate;
    return (
      (e.finishedWork = u),
      (e.finishedLanes = t),
      Co(e, fr, Wa),
      dr(e, _n()),
      null
    );
  }
  function SA(e, t) {
    t !== se &&
      (Lp(e, st(t, tt)), dr(e, _n()), (gt & (Hn | Pr)) === Sn && (Su(), Ci()));
  }
  function fm(e, t) {
    var n = gt;
    gt |= xE;
    try {
      return e(t);
    } finally {
      ((gt = n), gt === Sn && !Zr.isBatchingLegacy && (Su(), Ab()));
    }
  }
  function EA(e, t, n, a, l) {
    var u = Br(),
      p = Vn.transition;
    try {
      return ((Vn.transition = null), An(br), e(t, n, a, l));
    } finally {
      (An(u), (Vn.transition = p), gt === Sn && Su());
    }
  }
  function qa(e) {
    Mi !== null && Mi.tag === Ei && (gt & (Hn | Pr)) === Sn && Xa();
    var t = gt;
    gt |= xE;
    var n = Vn.transition,
      a = Br();
    try {
      return ((Vn.transition = null), An(br), e ? e() : void 0);
    } finally {
      (An(a), (Vn.transition = n), (gt = t), (gt & (Hn | Pr)) === Sn && Ci());
    }
  }
  function NE() {
    return (gt & (Hn | Pr)) !== Sn;
  }
  function Kf(e, t) {
    (Gn(rm, ga, e), (ga = st(ga, t)));
  }
  function dm(e) {
    ((ga = rm.current), Yn(rm, e));
  }
  function Eo(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = se));
    var n = e.timeoutHandle;
    if ((n !== sv && ((e.timeoutHandle = sv), q_(n)), Zt !== null))
      for (var a = Zt.return; a !== null; ) {
        var l = a.alternate;
        (uE(l, a), (a = a.return));
      }
    Zn = e;
    var u = To(e.current, null);
    return (
      (Zt = u),
      (En = ga = t),
      (Cn = Ga),
      (yu = null),
      ($f = se),
      (gu = se),
      (Yf = se),
      (bu = null),
      (fr = null),
      mO(),
      Yr.discardPendingWarnings(),
      u
    );
  }
  function PE(e, t) {
    do {
      var n = Zt;
      try {
        if (
          (lf(),
          iS(),
          Rn(),
          (tm.current = null),
          n === null || n.return === null)
        ) {
          ((Cn = hu), (yu = t), (Zt = null));
          return;
        }
        if ((j && n.mode & kt && zf(n, !0), Ue))
          if (
            (Yo(),
            t !== null && typeof t == 'object' && typeof t.then == 'function')
          ) {
            var a = t;
            Kx(n, a, En);
          } else Qx(n, t, En);
        (YO(e, n.return, n, t, En), VE(n));
      } catch (l) {
        ((t = l),
          Zt === n && n !== null ? ((n = n.return), (Zt = n)) : (n = Zt));
        continue;
      }
      return;
    } while (!0);
  }
  function zE() {
    var e = em.current;
    return ((em.current = Mf), e === null ? Mf : e);
  }
  function UE(e) {
    em.current = e;
  }
  function CA() {
    am = _n();
  }
  function wu(e) {
    $f = st(e, $f);
  }
  function TA() {
    Cn === Ga && (Cn = jf);
  }
  function pm() {
    ((Cn === Ga || Cn === jf || Cn === bo) && (Cn = mu),
      Zn !== null && (Op($f) || Op(gu)) && ki(Zn, En));
  }
  function wA(e) {
    (Cn !== mu && (Cn = bo), bu === null ? (bu = [e]) : bu.push(e));
  }
  function xA() {
    return Cn === Ga;
  }
  function Jf(e, t) {
    var n = gt;
    gt |= Hn;
    var a = zE();
    if (Zn !== e || En !== t) {
      if (Ir) {
        var l = e.memoizedUpdaters;
        (l.size > 0 && (xu(e, En), l.clear()), hg(e, t));
      }
      ((Wa = mg()), Eo(e, t));
    }
    ag(t);
    do
      try {
        RA();
        break;
      } catch (u) {
        PE(e, u);
      }
    while (!0);
    if ((lf(), (gt = n), UE(a), Zt !== null))
      throw new Error(
        'Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.'
      );
    return (ig(), (Zn = null), (En = se), Cn);
  }
  function RA() {
    for (; Zt !== null; ) FE(Zt);
  }
  function _A(e, t) {
    var n = gt;
    gt |= Hn;
    var a = zE();
    if (Zn !== e || En !== t) {
      if (Ir) {
        var l = e.memoizedUpdaters;
        (l.size > 0 && (xu(e, En), l.clear()), hg(e, t));
      }
      ((Wa = mg()), Su(), Eo(e, t));
    }
    ag(t);
    do
      try {
        DA();
        break;
      } catch (u) {
        PE(e, u);
      }
    while (!0);
    return (
      lf(),
      UE(a),
      (gt = n),
      Zt !== null ? (nR(), Ga) : (ig(), (Zn = null), (En = se), Cn)
    );
  }
  function DA() {
    for (; Zt !== null && !Ax(); ) FE(Zt);
  }
  function FE(e) {
    var t = e.alternate;
    Jt(e);
    var n;
    ((e.mode & kt) !== Be
      ? (mh(e), (n = vm(t, e, ga)), zf(e, !0))
      : (n = vm(t, e, ga)),
      Rn(),
      (e.memoizedProps = e.pendingProps),
      n === null ? VE(e) : (Zt = n),
      (tm.current = null));
  }
  function VE(e) {
    var t = e;
    do {
      var n = t.alternate,
        a = t.return;
      if ((t.flags & ls) === Ge) {
        Jt(t);
        var l = void 0;
        if (
          ((t.mode & kt) === Be
            ? (l = sE(n, t, ga))
            : (mh(t), (l = sE(n, t, ga)), zf(t, !1)),
          Rn(),
          l !== null)
        ) {
          Zt = l;
          return;
        }
      } else {
        var u = T1(n, t);
        if (u !== null) {
          ((u.flags &= wx), (Zt = u));
          return;
        }
        if ((t.mode & kt) !== Be) {
          zf(t, !1);
          for (var p = t.actualDuration, v = t.child; v !== null; )
            ((p += v.actualDuration), (v = v.sibling));
          t.actualDuration = p;
        }
        if (a !== null)
          ((a.flags |= ls), (a.subtreeFlags = Ge), (a.deletions = null));
        else {
          ((Cn = nm), (Zt = null));
          return;
        }
      }
      var y = t.sibling;
      if (y !== null) {
        Zt = y;
        return;
      }
      ((t = a), (Zt = t));
    } while (t !== null);
    Cn === Ga && (Cn = RE);
  }
  function Co(e, t, n) {
    var a = Br(),
      l = Vn.transition;
    try {
      ((Vn.transition = null), An(br), OA(e, t, n, a));
    } finally {
      ((Vn.transition = l), An(a));
    }
    return null;
  }
  function OA(e, t, n, a) {
    do Xa();
    while (Mi !== null);
    if ((HA(), (gt & (Hn | Pr)) !== Sn))
      throw new Error('Should not already be working.');
    var l = e.finishedWork,
      u = e.finishedLanes;
    if ((jx(u), l === null)) return (tg(), null);
    if (
      (u === se &&
        d(
          'root.finishedLanes should not be empty during a commit. This is a bug in React.'
        ),
      (e.finishedWork = null),
      (e.finishedLanes = se),
      l === e.current)
    )
      throw new Error(
        'Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.'
      );
    ((e.callbackNode = null), (e.callbackPriority = On));
    var p = st(l.lanes, l.childLanes);
    (SR(e, p),
      e === Zn && ((Zn = null), (Zt = null), (En = se)),
      ((l.subtreeFlags & jo) !== Ge || (l.flags & jo) !== Ge) &&
        (So ||
          ((So = !0),
          (lm = n),
          ym(eo, function () {
            return (Xa(), null);
          }))));
    var v = (l.subtreeFlags & (rp | ap | ss | jo)) !== Ge,
      y = (l.flags & (rp | ap | ss | jo)) !== Ge;
    if (v || y) {
      var C = Vn.transition;
      Vn.transition = null;
      var T = Br();
      An(br);
      var k = gt;
      ((gt |= Pr),
        (tm.current = null),
        D1(e, l),
        AS(),
        B1(e, l, u),
        I_(e.containerInfo),
        (e.current = l),
        Jx(u),
        j1(l, e, u),
        Zx(),
        Mx(),
        (gt = k),
        An(T),
        (Vn.transition = C));
    } else ((e.current = l), AS());
    var L = So;
    if (
      (So ? ((So = !1), (Mi = e), (Eu = u)) : ((xl = 0), (qf = null)),
      (p = e.pendingLanes),
      p === se && (wl = null),
      L || jE(e.current, !1),
      Fx(l.stateNode, a),
      Ir && e.memoizedUpdaters.clear(),
      sA(),
      dr(e, _n()),
      t !== null)
    )
      for (var B = e.onRecoverableError, Y = 0; Y < t.length; Y++) {
        var X = t[Y],
          we = X.stack,
          He = X.digest;
        B(X.value, { componentStack: we, digest: He });
      }
    if (Gf) {
      Gf = !1;
      var Ne = im;
      throw ((im = null), Ne);
    }
    return (
      gr(Eu, tt) && e.tag !== Ei && Xa(),
      (p = e.pendingLanes),
      gr(p, tt) ? (NO(), e === sm ? Cu++ : ((Cu = 0), (sm = e))) : (Cu = 0),
      Ci(),
      tg(),
      null
    );
  }
  function Xa() {
    if (Mi !== null) {
      var e = yg(Eu),
        t = wR(Fa, e),
        n = Vn.transition,
        a = Br();
      try {
        return ((Vn.transition = null), An(t), MA());
      } finally {
        (An(a), (Vn.transition = n));
      }
    }
    return !1;
  }
  function AA(e) {
    (om.push(e),
      So ||
        ((So = !0),
        ym(eo, function () {
          return (Xa(), null);
        })));
  }
  function MA() {
    if (Mi === null) return !1;
    var e = lm;
    lm = null;
    var t = Mi,
      n = Eu;
    if (((Mi = null), (Eu = se), (gt & (Hn | Pr)) !== Sn))
      throw new Error('Cannot flush passive effects while already rendering.');
    ((um = !0), (Wf = !1), eR(n));
    var a = gt;
    ((gt |= Pr), Q1(t.current), G1(t, t.current, n, e));
    {
      var l = om;
      om = [];
      for (var u = 0; u < l.length; u++) {
        var p = l[u];
        L1(t, p);
      }
    }
    (tR(),
      jE(t.current, !0),
      (gt = a),
      Ci(),
      Wf ? (t === qf ? xl++ : ((xl = 0), (qf = t))) : (xl = 0),
      (um = !1),
      (Wf = !1),
      Vx(t));
    {
      var v = t.current.stateNode;
      ((v.effectDuration = 0), (v.passiveEffectDuration = 0));
    }
    return !0;
  }
  function HE(e) {
    return wl !== null && wl.has(e);
  }
  function LA(e) {
    wl === null ? (wl = new Set([e])) : wl.add(e);
  }
  function kA(e) {
    Gf || ((Gf = !0), (im = e));
  }
  var NA = kA;
  function IE(e, t, n) {
    var a = yo(n, t),
      l = FS(e, a, tt),
      u = wi(e, l, tt),
      p = er();
    u !== null && (ms(u, tt, p), dr(u, p));
  }
  function Ht(e, t, n) {
    if ((x1(n), Ru(!1), e.tag === S)) {
      IE(e, e, n);
      return;
    }
    var a = null;
    for (a = t; a !== null; ) {
      if (a.tag === S) {
        IE(a, e, n);
        return;
      } else if (a.tag === g) {
        var l = a.type,
          u = a.stateNode;
        if (
          typeof l.getDerivedStateFromError == 'function' ||
          (typeof u.componentDidCatch == 'function' && !HE(u))
        ) {
          var p = yo(n, e),
            v = Nh(a, p, tt),
            y = wi(a, v, tt),
            C = er();
          y !== null && (ms(y, tt, C), dr(y, C));
          return;
        }
      }
      a = a.return;
    }
    d(
      `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
      n
    );
  }
  function PA(e, t, n) {
    var a = e.pingCache;
    a !== null && a.delete(t);
    var l = er();
    (pg(e, n),
      $A(e),
      Zn === e &&
        Xo(En, n) &&
        (Cn === mu || (Cn === jf && ug(En) && _n() - am < _E)
          ? Eo(e, se)
          : (Yf = st(Yf, n))),
      dr(e, l));
  }
  function BE(e, t) {
    t === On && (t = hA(e));
    var n = er(),
      a = ur(e, t);
    a !== null && (ms(a, t, n), dr(a, n));
  }
  function zA(e) {
    var t = e.memoizedState,
      n = On;
    (t !== null && (n = t.retryLane), BE(e, n));
  }
  function UA(e, t) {
    var n = On,
      a;
    switch (e.tag) {
      case V:
        a = e.stateNode;
        var l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case ue:
        a = e.stateNode;
        break;
      default:
        throw new Error(
          'Pinged unknown suspense boundary type. This is probably a bug in React.'
        );
    }
    (a !== null && a.delete(t), BE(e, n));
  }
  function FA(e) {
    return e < 120
      ? 120
      : e < 480
        ? 480
        : e < 1080
          ? 1080
          : e < 1920
            ? 1920
            : e < 3e3
              ? 3e3
              : e < 4320
                ? 4320
                : fA(e / 1960) * 1960;
  }
  function VA() {
    if (Cu > pA)
      throw (
        (Cu = 0),
        (sm = null),
        new Error(
          'Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.'
        )
      );
    xl > vA &&
      ((xl = 0),
      (qf = null),
      d(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      ));
  }
  function HA() {
    (Yr.flushLegacyContextWarning(), Yr.flushPendingUnsafeLifecycleWarnings());
  }
  function jE(e, t) {
    (Jt(e),
      Zf(e, Na, iA),
      t && Zf(e, fc, oA),
      Zf(e, Na, rA),
      t && Zf(e, fc, aA),
      Rn());
  }
  function Zf(e, t, n) {
    for (var a = e, l = null; a !== null; ) {
      var u = a.subtreeFlags & t;
      a !== l && a.child !== null && u !== Ge
        ? (a = a.child)
        : ((a.flags & t) !== Ge && n(a),
          a.sibling !== null ? (a = a.sibling) : (a = l = a.return));
    }
  }
  var ed = null;
  function $E(e) {
    {
      if ((gt & Hn) !== Sn || !(e.mode & yt)) return;
      var t = e.tag;
      if (
        t !== E &&
        t !== S &&
        t !== g &&
        t !== m &&
        t !== P &&
        t !== oe &&
        t !== ne
      )
        return;
      var n = lt(e) || 'ReactComponent';
      if (ed !== null) {
        if (ed.has(n)) return;
        ed.add(n);
      } else ed = new Set([n]);
      var a = jn;
      try {
        (Jt(e),
          d(
            "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead."
          ));
      } finally {
        a ? Jt(e) : Rn();
      }
    }
  }
  var vm;
  {
    var IA = null;
    vm = function (e, t, n) {
      var a = JE(IA, t);
      try {
        return rE(e, t, n);
      } catch (u) {
        if (
          ZD() ||
          (u !== null && typeof u == 'object' && typeof u.then == 'function')
        )
          throw u;
        if (
          (lf(),
          iS(),
          uE(e, t),
          JE(t, a),
          t.mode & kt && mh(t),
          Kd(null, rE, null, e, t, n),
          Sx())
        ) {
          var l = Jd();
          typeof l == 'object' &&
            l !== null &&
            l._suppressLogging &&
            typeof u == 'object' &&
            u !== null &&
            !u._suppressLogging &&
            (u._suppressLogging = !0);
        }
        throw u;
      }
    };
  }
  var YE = !1,
    hm;
  hm = new Set();
  function BA(e) {
    if (Gi && !MO())
      switch (e.tag) {
        case m:
        case P:
        case ne: {
          var t = (Zt && lt(Zt)) || 'Unknown',
            n = t;
          if (!hm.has(n)) {
            hm.add(n);
            var a = lt(e) || 'Unknown';
            d(
              'Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render',
              a,
              t,
              t
            );
          }
          break;
        }
        case g: {
          YE ||
            (d(
              'Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state.'
            ),
            (YE = !0));
          break;
        }
      }
  }
  function xu(e, t) {
    if (Ir) {
      var n = e.memoizedUpdaters;
      n.forEach(function (a) {
        vg(e, a, t);
      });
    }
  }
  var mm = {};
  function ym(e, t) {
    {
      var n = Zr.current;
      return n !== null ? (n.push(t), mm) : eg(e, t);
    }
  }
  function GE(e) {
    if (e !== mm) return Ox(e);
  }
  function WE() {
    return Zr.current !== null;
  }
  function jA(e) {
    {
      if (e.mode & yt) {
        if (!wE()) return;
      } else if (
        !cA() ||
        gt !== Sn ||
        (e.tag !== m && e.tag !== P && e.tag !== ne)
      )
        return;
      if (Zr.current === null) {
        var t = jn;
        try {
          (Jt(e),
            d(
              `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`,
              lt(e)
            ));
        } finally {
          t ? Jt(e) : Rn();
        }
      }
    }
  }
  function $A(e) {
    e.tag !== Ei &&
      wE() &&
      Zr.current === null &&
      d(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
  }
  function Ru(e) {
    AE = e;
  }
  var zr = null,
    Rl = null,
    YA = function (e) {
      zr = e;
    };
  function _l(e) {
    {
      if (zr === null) return e;
      var t = zr(e);
      return t === void 0 ? e : t.current;
    }
  }
  function gm(e) {
    return _l(e);
  }
  function bm(e) {
    {
      if (zr === null) return e;
      var t = zr(e);
      if (t === void 0) {
        if (e != null && typeof e.render == 'function') {
          var n = _l(e.render);
          if (e.render !== n) {
            var a = { $$typeof: ve, render: n };
            return (
              e.displayName !== void 0 && (a.displayName = e.displayName),
              a
            );
          }
        }
        return e;
      }
      return t.current;
    }
  }
  function qE(e, t) {
    {
      if (zr === null) return !1;
      var n = e.elementType,
        a = t.type,
        l = !1,
        u = typeof a == 'object' && a !== null ? a.$$typeof : null;
      switch (e.tag) {
        case g: {
          typeof a == 'function' && (l = !0);
          break;
        }
        case m: {
          (typeof a == 'function' || u === Ye) && (l = !0);
          break;
        }
        case P: {
          (u === ve || u === Ye) && (l = !0);
          break;
        }
        case oe:
        case ne: {
          (u === Et || u === Ye) && (l = !0);
          break;
        }
        default:
          return !1;
      }
      if (l) {
        var p = zr(n);
        if (p !== void 0 && p === zr(a)) return !0;
      }
      return !1;
    }
  }
  function XE(e) {
    {
      if (zr === null || typeof WeakSet != 'function') return;
      (Rl === null && (Rl = new WeakSet()), Rl.add(e));
    }
  }
  var GA = function (e, t) {
      {
        if (zr === null) return;
        var n = t.staleFamilies,
          a = t.updatedFamilies;
        (Xa(),
          qa(function () {
            Sm(e.current, a, n);
          }));
      }
    },
    WA = function (e, t) {
      {
        if (e.context !== Cr) return;
        (Xa(),
          qa(function () {
            _u(t, e, null, null);
          }));
      }
    };
  function Sm(e, t, n) {
    {
      var a = e.alternate,
        l = e.child,
        u = e.sibling,
        p = e.tag,
        v = e.type,
        y = null;
      switch (p) {
        case m:
        case ne:
        case g:
          y = v;
          break;
        case P:
          y = v.render;
          break;
      }
      if (zr === null)
        throw new Error('Expected resolveFamily to be set during hot reload.');
      var C = !1,
        T = !1;
      if (y !== null) {
        var k = zr(y);
        k !== void 0 &&
          (n.has(k) ? (T = !0) : t.has(k) && (p === g ? (T = !0) : (C = !0)));
      }
      if (
        (Rl !== null && (Rl.has(e) || (a !== null && Rl.has(a))) && (T = !0),
        T && (e._debugNeedsRemount = !0),
        T || C)
      ) {
        var L = ur(e, tt);
        L !== null && Tn(L, e, tt, jt);
      }
      (l !== null && !T && Sm(l, t, n), u !== null && Sm(u, t, n));
    }
  }
  var qA = function (e, t) {
    {
      var n = new Set(),
        a = new Set(
          t.map(function (l) {
            return l.current;
          })
        );
      return (Em(e.current, a, n), n);
    }
  };
  function Em(e, t, n) {
    {
      var a = e.child,
        l = e.sibling,
        u = e.tag,
        p = e.type,
        v = null;
      switch (u) {
        case m:
        case ne:
        case g:
          v = p;
          break;
        case P:
          v = p.render;
          break;
      }
      var y = !1;
      (v !== null && t.has(v) && (y = !0),
        y ? XA(e, n) : a !== null && Em(a, t, n),
        l !== null && Em(l, t, n));
    }
  }
  function XA(e, t) {
    {
      var n = QA(e, t);
      if (n) return;
      for (var a = e; ; ) {
        switch (a.tag) {
          case O:
            t.add(a.stateNode);
            return;
          case w:
            t.add(a.stateNode.containerInfo);
            return;
          case S:
            t.add(a.stateNode.containerInfo);
            return;
        }
        if (a.return === null) throw new Error('Expected to reach root first.');
        a = a.return;
      }
    }
  }
  function QA(e, t) {
    for (var n = e, a = !1; ; ) {
      if (n.tag === O) ((a = !0), t.add(n.stateNode));
      else if (n.child !== null) {
        ((n.child.return = n), (n = n.child));
        continue;
      }
      if (n === e) return a;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return a;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
    return !1;
  }
  var Cm;
  {
    Cm = !1;
    try {
      var QE = Object.preventExtensions({});
    } catch {
      Cm = !0;
    }
  }
  function KA(e, t, n, a) {
    ((this.tag = e),
      (this.key = n),
      (this.elementType = null),
      (this.type = null),
      (this.stateNode = null),
      (this.return = null),
      (this.child = null),
      (this.sibling = null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.memoizedProps = null),
      (this.updateQueue = null),
      (this.memoizedState = null),
      (this.dependencies = null),
      (this.mode = a),
      (this.flags = Ge),
      (this.subtreeFlags = Ge),
      (this.deletions = null),
      (this.lanes = se),
      (this.childLanes = se),
      (this.alternate = null),
      (this.actualDuration = Number.NaN),
      (this.actualStartTime = Number.NaN),
      (this.selfBaseDuration = Number.NaN),
      (this.treeBaseDuration = Number.NaN),
      (this.actualDuration = 0),
      (this.actualStartTime = -1),
      (this.selfBaseDuration = 0),
      (this.treeBaseDuration = 0),
      (this._debugSource = null),
      (this._debugOwner = null),
      (this._debugNeedsRemount = !1),
      (this._debugHookTypes = null),
      !Cm &&
        typeof Object.preventExtensions == 'function' &&
        Object.preventExtensions(this));
  }
  var Tr = function (e, t, n, a) {
    return new KA(e, t, n, a);
  };
  function Tm(e) {
    var t = e.prototype;
    return !!(t && t.isReactComponent);
  }
  function JA(e) {
    return typeof e == 'function' && !Tm(e) && e.defaultProps === void 0;
  }
  function ZA(e) {
    if (typeof e == 'function') return Tm(e) ? g : m;
    if (e != null) {
      var t = e.$$typeof;
      if (t === ve) return P;
      if (t === Et) return oe;
    }
    return E;
  }
  function To(e, t) {
    var n = e.alternate;
    (n === null
      ? ((n = Tr(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n._debugSource = e._debugSource),
        (n._debugOwner = e._debugOwner),
        (n._debugHookTypes = e._debugHookTypes),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = Ge),
        (n.subtreeFlags = Ge),
        (n.deletions = null),
        (n.actualDuration = 0),
        (n.actualStartTime = -1)),
      (n.flags = e.flags & Pa),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue));
    var a = e.dependencies;
    switch (
      ((n.dependencies =
        a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      (n.selfBaseDuration = e.selfBaseDuration),
      (n.treeBaseDuration = e.treeBaseDuration),
      (n._debugNeedsRemount = e._debugNeedsRemount),
      n.tag)
    ) {
      case E:
      case m:
      case ne:
        n.type = _l(e.type);
        break;
      case g:
        n.type = gm(e.type);
        break;
      case P:
        n.type = bm(e.type);
        break;
    }
    return n;
  }
  function eM(e, t) {
    e.flags &= Pa | fn;
    var n = e.alternate;
    if (n === null)
      ((e.childLanes = se),
        (e.lanes = t),
        (e.child = null),
        (e.subtreeFlags = Ge),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.updateQueue = null),
        (e.dependencies = null),
        (e.stateNode = null),
        (e.selfBaseDuration = 0),
        (e.treeBaseDuration = 0));
    else {
      ((e.childLanes = n.childLanes),
        (e.lanes = n.lanes),
        (e.child = n.child),
        (e.subtreeFlags = Ge),
        (e.deletions = null),
        (e.memoizedProps = n.memoizedProps),
        (e.memoizedState = n.memoizedState),
        (e.updateQueue = n.updateQueue),
        (e.type = n.type));
      var a = n.dependencies;
      ((e.dependencies =
        a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }),
        (e.selfBaseDuration = n.selfBaseDuration),
        (e.treeBaseDuration = n.treeBaseDuration));
    }
    return e;
  }
  function tM(e, t, n) {
    var a;
    return (
      e === Qc ? ((a = yt), t === !0 && ((a |= an), (a |= sa))) : (a = Be),
      Ir && (a |= kt),
      Tr(S, null, null, a)
    );
  }
  function wm(e, t, n, a, l, u) {
    var p = E,
      v = e;
    if (typeof e == 'function') Tm(e) ? ((p = g), (v = gm(v))) : (v = _l(v));
    else if (typeof e == 'string') p = O;
    else
      e: switch (e) {
        case aa:
          return Ni(n.children, l, u, t);
        case $i:
          ((p = z), (l |= an), (l & yt) !== Be && (l |= sa));
          break;
        case ri:
          return nM(n, l, u, t);
        case je:
          return rM(n, l, u, t);
        case ht:
          return aM(n, l, u, t);
        case Bt:
          return KE(n, l, u, t);
        case Xt:
        case ut:
        case Bn:
        case ia:
        case hn:
        default: {
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case M:
                p = _;
                break e;
              case le:
                p = N;
                break e;
              case ve:
                ((p = P), (v = bm(v)));
                break e;
              case Et:
                p = oe;
                break e;
              case Ye:
                ((p = ce), (v = null));
                break e;
            }
          var y = '';
          {
            (e === void 0 ||
              (typeof e == 'object' &&
                e !== null &&
                Object.keys(e).length === 0)) &&
              (y +=
                " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var C = a ? lt(a) : null;
            C &&
              (y +=
                `

Check the render method of \`` +
                C +
                '`.');
          }
          throw new Error(
            'Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) ' +
              ('but got: ' + (e == null ? e : typeof e) + '.' + y)
          );
        }
      }
    var T = Tr(p, n, t, l);
    return (
      (T.elementType = e),
      (T.type = v),
      (T.lanes = u),
      (T._debugOwner = a),
      T
    );
  }
  function xm(e, t, n) {
    var a = null;
    a = e._owner;
    var l = e.type,
      u = e.key,
      p = e.props,
      v = wm(l, u, p, a, t, n);
    return ((v._debugSource = e._source), (v._debugOwner = e._owner), v);
  }
  function Ni(e, t, n, a) {
    var l = Tr(x, e, a, t);
    return ((l.lanes = n), l);
  }
  function nM(e, t, n, a) {
    typeof e.id != 'string' &&
      d(
        'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
        typeof e.id
      );
    var l = Tr(U, e, a, t | kt);
    return (
      (l.elementType = ri),
      (l.lanes = n),
      (l.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }),
      l
    );
  }
  function rM(e, t, n, a) {
    var l = Tr(V, e, a, t);
    return ((l.elementType = je), (l.lanes = n), l);
  }
  function aM(e, t, n, a) {
    var l = Tr(ue, e, a, t);
    return ((l.elementType = ht), (l.lanes = n), l);
  }
  function KE(e, t, n, a) {
    var l = Tr(ie, e, a, t);
    ((l.elementType = Bt), (l.lanes = n));
    var u = { isHidden: !1 };
    return ((l.stateNode = u), l);
  }
  function Rm(e, t, n) {
    var a = Tr(D, e, null, t);
    return ((a.lanes = n), a);
  }
  function iM() {
    var e = Tr(O, null, null, Be);
    return ((e.elementType = 'DELETED'), e);
  }
  function oM(e) {
    var t = Tr(te, null, null, Be);
    return ((t.stateNode = e), t);
  }
  function _m(e, t, n) {
    var a = e.children !== null ? e.children : [],
      l = Tr(w, a, e.key, t);
    return (
      (l.lanes = n),
      (l.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      l
    );
  }
  function JE(e, t) {
    return (
      e === null && (e = Tr(E, null, null, Be)),
      (e.tag = t.tag),
      (e.key = t.key),
      (e.elementType = t.elementType),
      (e.type = t.type),
      (e.stateNode = t.stateNode),
      (e.return = t.return),
      (e.child = t.child),
      (e.sibling = t.sibling),
      (e.index = t.index),
      (e.ref = t.ref),
      (e.pendingProps = t.pendingProps),
      (e.memoizedProps = t.memoizedProps),
      (e.updateQueue = t.updateQueue),
      (e.memoizedState = t.memoizedState),
      (e.dependencies = t.dependencies),
      (e.mode = t.mode),
      (e.flags = t.flags),
      (e.subtreeFlags = t.subtreeFlags),
      (e.deletions = t.deletions),
      (e.lanes = t.lanes),
      (e.childLanes = t.childLanes),
      (e.alternate = t.alternate),
      (e.actualDuration = t.actualDuration),
      (e.actualStartTime = t.actualStartTime),
      (e.selfBaseDuration = t.selfBaseDuration),
      (e.treeBaseDuration = t.treeBaseDuration),
      (e._debugSource = t._debugSource),
      (e._debugOwner = t._debugOwner),
      (e._debugNeedsRemount = t._debugNeedsRemount),
      (e._debugHookTypes = t._debugHookTypes),
      e
    );
  }
  function lM(e, t, n, a, l) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.pendingChildren = null),
      (this.current = null),
      (this.pingCache = null),
      (this.finishedWork = null),
      (this.timeoutHandle = sv),
      (this.context = null),
      (this.pendingContext = null),
      (this.callbackNode = null),
      (this.callbackPriority = On),
      (this.eventTimes = Mp(se)),
      (this.expirationTimes = Mp(jt)),
      (this.pendingLanes = se),
      (this.suspendedLanes = se),
      (this.pingedLanes = se),
      (this.expiredLanes = se),
      (this.mutableReadLanes = se),
      (this.finishedLanes = se),
      (this.entangledLanes = se),
      (this.entanglements = Mp(se)),
      (this.identifierPrefix = a),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null),
      (this.effectDuration = 0),
      (this.passiveEffectDuration = 0));
    {
      this.memoizedUpdaters = new Set();
      for (var u = (this.pendingUpdatersLaneMap = []), p = 0; p < sp; p++)
        u.push(new Set());
    }
    switch (t) {
      case Qc:
        this._debugRootType = n ? 'hydrateRoot()' : 'createRoot()';
        break;
      case Ei:
        this._debugRootType = n ? 'hydrate()' : 'render()';
        break;
    }
  }
  function ZE(e, t, n, a, l, u, p, v, y, C) {
    var T = new lM(e, t, n, v, y),
      k = tM(t, u);
    ((T.current = k), (k.stateNode = T));
    {
      var L = {
        element: a,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      };
      k.memoizedState = L;
    }
    return (Hv(k), T);
  }
  var Dm = '18.3.1';
  function sM(e, t, n) {
    var a =
      arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
    return (
      ln(a),
      {
        $$typeof: Vr,
        key: a == null ? null : '' + a,
        children: e,
        containerInfo: t,
        implementation: n,
      }
    );
  }
  var Om, Am;
  ((Om = !1), (Am = {}));
  function eC(e) {
    if (!e) return Cr;
    var t = Io(e),
      n = $D(t);
    if (t.tag === g) {
      var a = t.type;
      if (fa(a)) return _b(t, a, n);
    }
    return n;
  }
  function uM(e, t) {
    {
      var n = Io(e);
      if (n === void 0) {
        if (typeof e.render == 'function')
          throw new Error('Unable to find node on an unmounted component.');
        var a = Object.keys(e).join(',');
        throw new Error(
          'Argument appears to not be a ReactComponent. Keys: ' + a
        );
      }
      var l = Ky(n);
      if (l === null) return null;
      if (l.mode & an) {
        var u = lt(n) || 'Component';
        if (!Am[u]) {
          Am[u] = !0;
          var p = jn;
          try {
            (Jt(l),
              n.mode & an
                ? d(
                    '%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node',
                    t,
                    t,
                    u
                  )
                : d(
                    '%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node',
                    t,
                    t,
                    u
                  ));
          } finally {
            p ? Jt(p) : Rn();
          }
        }
      }
      return l.stateNode;
    }
  }
  function tC(e, t, n, a, l, u, p, v) {
    var y = !1,
      C = null;
    return ZE(e, t, y, C, n, a, l, u, p);
  }
  function nC(e, t, n, a, l, u, p, v, y, C) {
    var T = !0,
      k = ZE(n, a, T, e, l, u, p, v, y);
    k.context = eC(null);
    var L = k.current,
      B = er(),
      Y = Li(L),
      X = $a(B, Y);
    return ((X.callback = t ?? null), wi(L, X, Y), mA(k, Y, B), k);
  }
  function _u(e, t, n, a) {
    Ux(t, e);
    var l = t.current,
      u = er(),
      p = Li(l);
    rR(p);
    var v = eC(n);
    (t.context === null ? (t.context = v) : (t.pendingContext = v),
      Gi &&
        jn !== null &&
        !Om &&
        ((Om = !0),
        d(
          `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
          lt(jn) || 'Unknown'
        )));
    var y = $a(u, p);
    ((y.payload = { element: e }),
      (a = a === void 0 ? null : a),
      a !== null &&
        (typeof a != 'function' &&
          d(
            'render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.',
            a
          ),
        (y.callback = a)));
    var C = wi(l, y, p);
    return (C !== null && (Tn(C, l, p, u), df(C, l, p)), p);
  }
  function td(e) {
    var t = e.current;
    if (!t.child) return null;
    switch (t.child.tag) {
      case O:
        return t.child.stateNode;
      default:
        return t.child.stateNode;
    }
  }
  function cM(e) {
    switch (e.tag) {
      case S: {
        var t = e.stateNode;
        if (Sc(t)) {
          var n = dR(t);
          SA(t, n);
        }
        break;
      }
      case V: {
        qa(function () {
          var l = ur(e, tt);
          if (l !== null) {
            var u = er();
            Tn(l, e, tt, u);
          }
        });
        var a = tt;
        Mm(e, a);
        break;
      }
    }
  }
  function rC(e, t) {
    var n = e.memoizedState;
    n !== null && n.dehydrated !== null && (n.retryLane = gR(n.retryLane, t));
  }
  function Mm(e, t) {
    rC(e, t);
    var n = e.alternate;
    n && rC(n, t);
  }
  function fM(e) {
    if (e.tag === V) {
      var t = ds,
        n = ur(e, t);
      if (n !== null) {
        var a = er();
        Tn(n, e, t, a);
      }
      Mm(e, t);
    }
  }
  function dM(e) {
    if (e.tag === V) {
      var t = Li(e),
        n = ur(e, t);
      if (n !== null) {
        var a = er();
        Tn(n, e, t, a);
      }
      Mm(e, t);
    }
  }
  function aC(e) {
    var t = Dx(e);
    return t === null ? null : t.stateNode;
  }
  var iC = function (e) {
    return null;
  };
  function pM(e) {
    return iC(e);
  }
  var oC = function (e) {
    return !1;
  };
  function vM(e) {
    return oC(e);
  }
  var lC = null,
    sC = null,
    uC = null,
    cC = null,
    fC = null,
    dC = null,
    pC = null,
    vC = null,
    hC = null;
  {
    var mC = function (e, t, n) {
        var a = t[n],
          l = _t(e) ? e.slice() : ct({}, e);
        return n + 1 === t.length
          ? (_t(l) ? l.splice(a, 1) : delete l[a], l)
          : ((l[a] = mC(e[a], t, n + 1)), l);
      },
      yC = function (e, t) {
        return mC(e, t, 0);
      },
      gC = function (e, t, n, a) {
        var l = t[a],
          u = _t(e) ? e.slice() : ct({}, e);
        if (a + 1 === t.length) {
          var p = n[a];
          ((u[p] = u[l]), _t(u) ? u.splice(l, 1) : delete u[l]);
        } else u[l] = gC(e[l], t, n, a + 1);
        return u;
      },
      bC = function (e, t, n) {
        if (t.length !== n.length) {
          f('copyWithRename() expects paths of the same length');
          return;
        } else
          for (var a = 0; a < n.length - 1; a++)
            if (t[a] !== n[a]) {
              f(
                'copyWithRename() expects paths to be the same except for the deepest key'
              );
              return;
            }
        return gC(e, t, n, 0);
      },
      SC = function (e, t, n, a) {
        if (n >= t.length) return a;
        var l = t[n],
          u = _t(e) ? e.slice() : ct({}, e);
        return ((u[l] = SC(e[l], t, n + 1, a)), u);
      },
      EC = function (e, t, n) {
        return SC(e, t, 0, n);
      },
      Lm = function (e, t) {
        for (var n = e.memoizedState; n !== null && t > 0; )
          ((n = n.next), t--);
        return n;
      };
    ((lC = function (e, t, n, a) {
      var l = Lm(e, t);
      if (l !== null) {
        var u = EC(l.memoizedState, n, a);
        ((l.memoizedState = u),
          (l.baseState = u),
          (e.memoizedProps = ct({}, e.memoizedProps)));
        var p = ur(e, tt);
        p !== null && Tn(p, e, tt, jt);
      }
    }),
      (sC = function (e, t, n) {
        var a = Lm(e, t);
        if (a !== null) {
          var l = yC(a.memoizedState, n);
          ((a.memoizedState = l),
            (a.baseState = l),
            (e.memoizedProps = ct({}, e.memoizedProps)));
          var u = ur(e, tt);
          u !== null && Tn(u, e, tt, jt);
        }
      }),
      (uC = function (e, t, n, a) {
        var l = Lm(e, t);
        if (l !== null) {
          var u = bC(l.memoizedState, n, a);
          ((l.memoizedState = u),
            (l.baseState = u),
            (e.memoizedProps = ct({}, e.memoizedProps)));
          var p = ur(e, tt);
          p !== null && Tn(p, e, tt, jt);
        }
      }),
      (cC = function (e, t, n) {
        ((e.pendingProps = EC(e.memoizedProps, t, n)),
          e.alternate && (e.alternate.pendingProps = e.pendingProps));
        var a = ur(e, tt);
        a !== null && Tn(a, e, tt, jt);
      }),
      (fC = function (e, t) {
        ((e.pendingProps = yC(e.memoizedProps, t)),
          e.alternate && (e.alternate.pendingProps = e.pendingProps));
        var n = ur(e, tt);
        n !== null && Tn(n, e, tt, jt);
      }),
      (dC = function (e, t, n) {
        ((e.pendingProps = bC(e.memoizedProps, t, n)),
          e.alternate && (e.alternate.pendingProps = e.pendingProps));
        var a = ur(e, tt);
        a !== null && Tn(a, e, tt, jt);
      }),
      (pC = function (e) {
        var t = ur(e, tt);
        t !== null && Tn(t, e, tt, jt);
      }),
      (vC = function (e) {
        iC = e;
      }),
      (hC = function (e) {
        oC = e;
      }));
  }
  function hM(e) {
    var t = Ky(e);
    return t === null ? null : t.stateNode;
  }
  function mM(e) {
    return null;
  }
  function yM() {
    return jn;
  }
  function gM(e) {
    var t = e.findFiberByHostInstance,
      n = o.ReactCurrentDispatcher;
    return zx({
      bundleType: e.bundleType,
      version: e.version,
      rendererPackageName: e.rendererPackageName,
      rendererConfig: e.rendererConfig,
      overrideHookState: lC,
      overrideHookStateDeletePath: sC,
      overrideHookStateRenamePath: uC,
      overrideProps: cC,
      overridePropsDeletePath: fC,
      overridePropsRenamePath: dC,
      setErrorHandler: vC,
      setSuspenseHandler: hC,
      scheduleUpdate: pC,
      currentDispatcherRef: n,
      findHostInstanceByFiber: hM,
      findFiberByHostInstance: t || mM,
      findHostInstancesForRefresh: qA,
      scheduleRefresh: GA,
      scheduleRoot: WA,
      setRefreshHandler: YA,
      getCurrentFiber: yM,
      reconcilerVersion: Dm,
    });
  }
  var CC =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  function km(e) {
    this._internalRoot = e;
  }
  ((nd.prototype.render = km.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw new Error('Cannot update an unmounted root.');
      {
        typeof arguments[1] == 'function'
          ? d(
              'render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().'
            )
          : rd(arguments[1])
            ? d(
                "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
              )
            : typeof arguments[1] < 'u' &&
              d(
                'You passed a second argument to root.render(...) but it only accepts one argument.'
              );
        var n = t.containerInfo;
        if (n.nodeType !== cn) {
          var a = aC(t.current);
          a &&
            a.parentNode !== n &&
            d(
              "render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container."
            );
        }
      }
      _u(e, t, null, null);
    }),
    (nd.prototype.unmount = km.prototype.unmount =
      function () {
        typeof arguments[0] == 'function' &&
          d(
            'unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().'
          );
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (NE() &&
            d(
              'Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition.'
            ),
            qa(function () {
              _u(null, e, null, null);
            }),
            Cb(t));
        }
      }));
  function bM(e, t) {
    if (!rd(e))
      throw new Error(
        'createRoot(...): Target container is not a DOM element.'
      );
    TC(e);
    var n = !1,
      a = !1,
      l = '',
      u = CC;
    t != null &&
      (t.hydrate
        ? f(
            'hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.'
          )
        : typeof t == 'object' &&
          t !== null &&
          t.$$typeof === Fr &&
          d(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`),
      t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (u = t.onRecoverableError),
      t.transitionCallbacks !== void 0 && t.transitionCallbacks);
    var p = tC(e, Qc, null, n, a, l, u);
    jc(p.current, e);
    var v = e.nodeType === cn ? e.parentNode : e;
    return (ks(v), new km(p));
  }
  function nd(e) {
    this._internalRoot = e;
  }
  function SM(e) {
    e && PR(e);
  }
  nd.prototype.unstable_scheduleHydration = SM;
  function EM(e, t, n) {
    if (!rd(e))
      throw new Error(
        'hydrateRoot(...): Target container is not a DOM element.'
      );
    (TC(e),
      t === void 0 &&
        d(
          'Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)'
        ));
    var a = n ?? null,
      l = (n != null && n.hydratedSources) || null,
      u = !1,
      p = !1,
      v = '',
      y = CC;
    n != null &&
      (n.unstable_strictMode === !0 && (u = !0),
      n.identifierPrefix !== void 0 && (v = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (y = n.onRecoverableError));
    var C = nC(t, null, e, Qc, a, u, p, v, y);
    if ((jc(C.current, e), ks(e), l))
      for (var T = 0; T < l.length; T++) {
        var k = l[T];
        xO(C, k);
      }
    return new nd(C);
  }
  function rd(e) {
    return !!(
      e &&
      (e.nodeType === lr || e.nodeType === Ma || e.nodeType === Hd || !Se)
    );
  }
  function Du(e) {
    return !!(
      e &&
      (e.nodeType === lr ||
        e.nodeType === Ma ||
        e.nodeType === Hd ||
        (e.nodeType === cn && e.nodeValue === ' react-mount-point-unstable '))
    );
  }
  function TC(e) {
    (e.nodeType === lr &&
      e.tagName &&
      e.tagName.toUpperCase() === 'BODY' &&
      d(
        'createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app.'
      ),
      $s(e) &&
        (e._reactRootContainer
          ? d(
              'You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.'
            )
          : d(
              'You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it.'
            )));
  }
  var CM = o.ReactCurrentOwner,
    wC;
  wC = function (e) {
    if (e._reactRootContainer && e.nodeType !== cn) {
      var t = aC(e._reactRootContainer.current);
      t &&
        t.parentNode !== e &&
        d(
          'render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.'
        );
    }
    var n = !!e._reactRootContainer,
      a = Nm(e),
      l = !!(a && bi(a));
    (l &&
      !n &&
      d(
        'render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render.'
      ),
      e.nodeType === lr &&
        e.tagName &&
        e.tagName.toUpperCase() === 'BODY' &&
        d(
          'render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.'
        ));
  };
  function Nm(e) {
    return e ? (e.nodeType === Ma ? e.documentElement : e.firstChild) : null;
  }
  function xC() {}
  function TM(e, t, n, a, l) {
    if (l) {
      if (typeof a == 'function') {
        var u = a;
        a = function () {
          var L = td(p);
          u.call(L);
        };
      }
      var p = nC(t, a, e, Ei, null, !1, !1, '', xC);
      ((e._reactRootContainer = p), jc(p.current, e));
      var v = e.nodeType === cn ? e.parentNode : e;
      return (ks(v), qa(), p);
    } else {
      for (var y; (y = e.lastChild); ) e.removeChild(y);
      if (typeof a == 'function') {
        var C = a;
        a = function () {
          var L = td(T);
          C.call(L);
        };
      }
      var T = tC(e, Ei, null, !1, !1, '', xC);
      ((e._reactRootContainer = T), jc(T.current, e));
      var k = e.nodeType === cn ? e.parentNode : e;
      return (
        ks(k),
        qa(function () {
          _u(t, T, n, a);
        }),
        T
      );
    }
  }
  function wM(e, t) {
    e !== null &&
      typeof e != 'function' &&
      d(
        '%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.',
        t,
        e
      );
  }
  function ad(e, t, n, a, l) {
    (wC(n), wM(l === void 0 ? null : l, 'render'));
    var u = n._reactRootContainer,
      p;
    if (!u) p = TM(n, t, e, l, a);
    else {
      if (((p = u), typeof l == 'function')) {
        var v = l;
        l = function () {
          var y = td(p);
          v.call(y);
        };
      }
      _u(t, p, e, l);
    }
    return td(p);
  }
  var RC = !1;
  function xM(e) {
    {
      RC ||
        ((RC = !0),
        d(
          'findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node'
        ));
      var t = CM.current;
      if (t !== null && t.stateNode !== null) {
        var n = t.stateNode._warnedAboutRefsInRender;
        (n ||
          d(
            '%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.',
            Ct(t.type) || 'A component'
          ),
          (t.stateNode._warnedAboutRefsInRender = !0));
      }
    }
    return e == null ? null : e.nodeType === lr ? e : uM(e, 'findDOMNode');
  }
  function RM(e, t, n) {
    if (
      (d(
        "ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"
      ),
      !Du(t))
    )
      throw new Error('Target container is not a DOM element.');
    {
      var a = $s(t) && t._reactRootContainer === void 0;
      a &&
        d(
          'You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?'
        );
    }
    return ad(null, e, t, !0, n);
  }
  function _M(e, t, n) {
    if (
      (d(
        "ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"
      ),
      !Du(t))
    )
      throw new Error('Target container is not a DOM element.');
    {
      var a = $s(t) && t._reactRootContainer === void 0;
      a &&
        d(
          'You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?'
        );
    }
    return ad(null, e, t, !1, n);
  }
  function DM(e, t, n, a) {
    if (
      (d(
        "ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"
      ),
      !Du(n))
    )
      throw new Error('Target container is not a DOM element.');
    if (e == null || !Ex(e))
      throw new Error('parentComponent must be a valid React Component');
    return ad(e, t, n, !1, a);
  }
  var _C = !1;
  function OM(e) {
    if (
      (_C ||
        ((_C = !0),
        d(
          'unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot'
        )),
      !Du(e))
    )
      throw new Error(
        'unmountComponentAtNode(...): Target container is not a DOM element.'
      );
    {
      var t = $s(e) && e._reactRootContainer === void 0;
      t &&
        d(
          'You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?'
        );
    }
    if (e._reactRootContainer) {
      {
        var n = Nm(e),
          a = n && !bi(n);
        a &&
          d(
            "unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React."
          );
      }
      return (
        qa(function () {
          ad(null, null, e, !1, function () {
            ((e._reactRootContainer = null), Cb(e));
          });
        }),
        !0
      );
    } else {
      {
        var l = Nm(e),
          u = !!(l && bi(l)),
          p =
            e.nodeType === lr &&
            Du(e.parentNode) &&
            !!e.parentNode._reactRootContainer;
        u &&
          d(
            "unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s",
            p
              ? 'You may have accidentally passed in a React root node instead of its container.'
              : 'Instead, have the parent component update its state and rerender in order to remove this component.'
          );
      }
      return !1;
    }
  }
  (xR(cM),
    _R(fM),
    DR(dM),
    OR(Br),
    AR(CR),
    (typeof Map != 'function' ||
      Map.prototype == null ||
      typeof Map.prototype.forEach != 'function' ||
      typeof Set != 'function' ||
      Set.prototype == null ||
      typeof Set.prototype.clear != 'function' ||
      typeof Set.prototype.forEach != 'function') &&
      d(
        'React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills'
      ),
    cx(M_),
    px(fm, EA, qa));
  function AM(e, t) {
    var n =
      arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    if (!rd(t)) throw new Error('Target container is not a DOM element.');
    return sM(e, t, null, n);
  }
  function MM(e, t, n, a) {
    return DM(e, t, n, a);
  }
  var Pm = { usingClientEntryPoint: !1, Events: [bi, al, $c, Vy, Hy, fm] };
  function LM(e, t) {
    return (
      Pm.usingClientEntryPoint ||
        d(
          'You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'
        ),
      bM(e, t)
    );
  }
  function kM(e, t, n) {
    return (
      Pm.usingClientEntryPoint ||
        d(
          'You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'
        ),
      EM(e, t, n)
    );
  }
  function NM(e) {
    return (
      NE() &&
        d(
          'flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.'
        ),
      qa(e)
    );
  }
  var PM = gM({
    findFiberByHostInstance: lo,
    bundleType: 1,
    version: Dm,
    rendererPackageName: 'react-dom',
  });
  if (
    !PM &&
    it &&
    window.top === window.self &&
    ((navigator.userAgent.indexOf('Chrome') > -1 &&
      navigator.userAgent.indexOf('Edge') === -1) ||
      navigator.userAgent.indexOf('Firefox') > -1)
  ) {
    var DC = window.location.protocol;
    /^(https?|file):$/.test(DC) &&
      console.info(
        '%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools' +
          (DC === 'file:'
            ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq`
            : ''),
        'font-weight:bold'
      );
  }
  ((xr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pm),
    (xr.createPortal = AM),
    (xr.createRoot = LM),
    (xr.findDOMNode = xM),
    (xr.flushSync = NM),
    (xr.hydrate = RM),
    (xr.hydrateRoot = kM),
    (xr.render = _M),
    (xr.unmountComponentAtNode = OM),
    (xr.unstable_batchedUpdates = fm),
    (xr.unstable_renderSubtreeIntoContainer = MM),
    (xr.version = Dm),
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' &&
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ==
        'function' &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error()));
})();
TT.exports = xr;
var BM = TT.exports,
  RT,
  OC = BM;
{
  var AC = OC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  RT = function (r, i, o) {
    AC.usingClientEntryPoint = !0;
    try {
      return OC.hydrateRoot(r, i, o);
    } finally {
      AC.usingClientEntryPoint = !1;
    }
  };
}
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function zu() {
  return (
    (zu = Object.assign
      ? Object.assign.bind()
      : function (r) {
          for (var i = 1; i < arguments.length; i++) {
            var o = arguments[i];
            for (var s in o)
              Object.prototype.hasOwnProperty.call(o, s) && (r[s] = o[s]);
          }
          return r;
        }),
    zu.apply(this, arguments)
  );
}
var Ui;
(function (r) {
  ((r.Pop = 'POP'), (r.Push = 'PUSH'), (r.Replace = 'REPLACE'));
})(Ui || (Ui = {}));
const MC = 'popstate';
function jM(r) {
  r === void 0 && (r = {});
  function i(s, c) {
    let { pathname: f, search: d, hash: h } = s.location;
    return qm(
      '',
      { pathname: f, search: d, hash: h },
      (c.state && c.state.usr) || null,
      (c.state && c.state.key) || 'default'
    );
  }
  function o(s, c) {
    return typeof c == 'string' ? c : Uu(c);
  }
  return YM(i, o, null, r);
}
function en(r, i) {
  if (r === !1 || r === null || typeof r > 'u') throw new Error(i);
}
function Ca(r, i) {
  if (!r) {
    typeof console < 'u' && console.warn(i);
    try {
      throw new Error(i);
    } catch {}
  }
}
function $M() {
  return Math.random().toString(36).substr(2, 8);
}
function LC(r, i) {
  return { usr: r.state, key: r.key, idx: i };
}
function qm(r, i, o, s) {
  return (
    o === void 0 && (o = null),
    zu(
      { pathname: typeof r == 'string' ? r : r.pathname, search: '', hash: '' },
      typeof i == 'string' ? Pl(i) : i,
      { state: o, key: (i && i.key) || s || $M() }
    )
  );
}
function Uu(r) {
  let { pathname: i = '/', search: o = '', hash: s = '' } = r;
  return (
    o && o !== '?' && (i += o.charAt(0) === '?' ? o : '?' + o),
    s && s !== '#' && (i += s.charAt(0) === '#' ? s : '#' + s),
    i
  );
}
function Pl(r) {
  let i = {};
  if (r) {
    let o = r.indexOf('#');
    o >= 0 && ((i.hash = r.substr(o)), (r = r.substr(0, o)));
    let s = r.indexOf('?');
    (s >= 0 && ((i.search = r.substr(s)), (r = r.substr(0, s))),
      r && (i.pathname = r));
  }
  return i;
}
function YM(r, i, o, s) {
  s === void 0 && (s = {});
  let { window: c = document.defaultView, v5Compat: f = !1 } = s,
    d = c.history,
    h = Ui.Pop,
    m = null,
    g = E();
  g == null && ((g = 0), d.replaceState(zu({}, d.state, { idx: g }), ''));
  function E() {
    return (d.state || { idx: null }).idx;
  }
  function S() {
    h = Ui.Pop;
    let z = E(),
      N = z == null ? null : z - g;
    ((g = z), m && m({ action: h, location: x.location, delta: N }));
  }
  function w(z, N) {
    h = Ui.Push;
    let _ = qm(x.location, z, N);
    (o && o(_, z), (g = E() + 1));
    let P = LC(_, g),
      U = x.createHref(_);
    try {
      d.pushState(P, '', U);
    } catch (V) {
      if (V instanceof DOMException && V.name === 'DataCloneError') throw V;
      c.location.assign(U);
    }
    f && m && m({ action: h, location: x.location, delta: 1 });
  }
  function O(z, N) {
    h = Ui.Replace;
    let _ = qm(x.location, z, N);
    (o && o(_, z), (g = E()));
    let P = LC(_, g),
      U = x.createHref(_);
    (d.replaceState(P, '', U),
      f && m && m({ action: h, location: x.location, delta: 0 }));
  }
  function D(z) {
    let N = c.location.origin !== 'null' ? c.location.origin : c.location.href,
      _ = typeof z == 'string' ? z : Uu(z);
    return (
      (_ = _.replace(/ $/, '%20')),
      en(
        N,
        'No window.location.(origin|href) available to create URL for href: ' +
          _
      ),
      new URL(_, N)
    );
  }
  let x = {
    get action() {
      return h;
    },
    get location() {
      return r(c, d);
    },
    listen(z) {
      if (m) throw new Error('A history only accepts one active listener');
      return (
        c.addEventListener(MC, S),
        (m = z),
        () => {
          (c.removeEventListener(MC, S), (m = null));
        }
      );
    },
    createHref(z) {
      return i(c, z);
    },
    createURL: D,
    encodeLocation(z) {
      let N = D(z);
      return { pathname: N.pathname, search: N.search, hash: N.hash };
    },
    push: w,
    replace: O,
    go(z) {
      return d.go(z);
    },
  };
  return x;
}
var kC;
(function (r) {
  ((r.data = 'data'),
    (r.deferred = 'deferred'),
    (r.redirect = 'redirect'),
    (r.error = 'error'));
})(kC || (kC = {}));
function GM(r, i, o) {
  return (o === void 0 && (o = '/'), WM(r, i, o, !1));
}
function WM(r, i, o, s) {
  let c = typeof i == 'string' ? Pl(i) : i,
    f = Hi(c.pathname || '/', o);
  if (f == null) return null;
  let d = _T(r);
  qM(d);
  let h = null;
  for (let m = 0; h == null && m < d.length; ++m) {
    let g = iL(f);
    h = rL(d[m], g, s);
  }
  return h;
}
function _T(r, i, o, s) {
  (i === void 0 && (i = []),
    o === void 0 && (o = []),
    s === void 0 && (s = ''));
  let c = (f, d, h) => {
    let m = {
      relativePath: h === void 0 ? f.path || '' : h,
      caseSensitive: f.caseSensitive === !0,
      childrenIndex: d,
      route: f,
    };
    m.relativePath.startsWith('/') &&
      (en(
        m.relativePath.startsWith(s),
        'Absolute route path "' +
          m.relativePath +
          '" nested under path ' +
          ('"' + s + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (m.relativePath = m.relativePath.slice(s.length)));
    let g = ti([s, m.relativePath]),
      E = o.concat(m);
    (f.children &&
      f.children.length > 0 &&
      (en(
        f.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + g + '".')
      ),
      _T(f.children, i, E, g)),
      !(f.path == null && !f.index) &&
        i.push({ path: g, score: tL(g, f.index), routesMeta: E }));
  };
  return (
    r.forEach((f, d) => {
      var h;
      if (f.path === '' || !((h = f.path) != null && h.includes('?'))) c(f, d);
      else for (let m of DT(f.path)) c(f, d, m);
    }),
    i
  );
}
function DT(r) {
  let i = r.split('/');
  if (i.length === 0) return [];
  let [o, ...s] = i,
    c = o.endsWith('?'),
    f = o.replace(/\?$/, '');
  if (s.length === 0) return c ? [f, ''] : [f];
  let d = DT(s.join('/')),
    h = [];
  return (
    h.push(...d.map((m) => (m === '' ? f : [f, m].join('/')))),
    c && h.push(...d),
    h.map((m) => (r.startsWith('/') && m === '' ? '/' : m))
  );
}
function qM(r) {
  r.sort((i, o) =>
    i.score !== o.score
      ? o.score - i.score
      : nL(
          i.routesMeta.map((s) => s.childrenIndex),
          o.routesMeta.map((s) => s.childrenIndex)
        )
  );
}
const XM = /^:[\w-]+$/,
  QM = 3,
  KM = 2,
  JM = 1,
  ZM = 10,
  eL = -2,
  NC = (r) => r === '*';
function tL(r, i) {
  let o = r.split('/'),
    s = o.length;
  return (
    o.some(NC) && (s += eL),
    i && (s += KM),
    o
      .filter((c) => !NC(c))
      .reduce((c, f) => c + (XM.test(f) ? QM : f === '' ? JM : ZM), s)
  );
}
function nL(r, i) {
  return r.length === i.length && r.slice(0, -1).every((s, c) => s === i[c])
    ? r[r.length - 1] - i[i.length - 1]
    : 0;
}
function rL(r, i, o) {
  o === void 0 && (o = !1);
  let { routesMeta: s } = r,
    c = {},
    f = '/',
    d = [];
  for (let h = 0; h < s.length; ++h) {
    let m = s[h],
      g = h === s.length - 1,
      E = f === '/' ? i : i.slice(f.length) || '/',
      S = gd(
        { path: m.relativePath, caseSensitive: m.caseSensitive, end: g },
        E
      ),
      w = m.route;
    if (
      (!S &&
        g &&
        o &&
        !s[s.length - 1].route.index &&
        (S = gd(
          { path: m.relativePath, caseSensitive: m.caseSensitive, end: !1 },
          E
        )),
      !S)
    )
      return null;
    (Object.assign(c, S.params),
      d.push({
        params: c,
        pathname: ti([f, S.pathname]),
        pathnameBase: uL(ti([f, S.pathnameBase])),
        route: w,
      }),
      S.pathnameBase !== '/' && (f = ti([f, S.pathnameBase])));
  }
  return d;
}
function gd(r, i) {
  typeof r == 'string' && (r = { path: r, caseSensitive: !1, end: !0 });
  let [o, s] = aL(r.path, r.caseSensitive, r.end),
    c = i.match(o);
  if (!c) return null;
  let f = c[0],
    d = f.replace(/(.)\/+$/, '$1'),
    h = c.slice(1);
  return {
    params: s.reduce((g, E, S) => {
      let { paramName: w, isOptional: O } = E;
      if (w === '*') {
        let x = h[S] || '';
        d = f.slice(0, f.length - x.length).replace(/(.)\/+$/, '$1');
      }
      const D = h[S];
      return (
        O && !D ? (g[w] = void 0) : (g[w] = (D || '').replace(/%2F/g, '/')),
        g
      );
    }, {}),
    pathname: f,
    pathnameBase: d,
    pattern: r,
  };
}
function aL(r, i, o) {
  (i === void 0 && (i = !1),
    o === void 0 && (o = !0),
    Ca(
      r === '*' || !r.endsWith('*') || r.endsWith('/*'),
      'Route path "' +
        r +
        '" will be treated as if it were ' +
        ('"' + r.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + r.replace(/\*$/, '/*') + '".')
    ));
  let s = [],
    c =
      '^' +
      r
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (d, h, m) => (
            s.push({ paramName: h, isOptional: m != null }),
            m ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        );
  return (
    r.endsWith('*')
      ? (s.push({ paramName: '*' }),
        (c += r === '*' || r === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : o
        ? (c += '\\/*$')
        : r !== '' && r !== '/' && (c += '(?:(?=\\/|$))'),
    [new RegExp(c, i ? void 0 : 'i'), s]
  );
}
function iL(r) {
  try {
    return r
      .split('/')
      .map((i) => decodeURIComponent(i).replace(/\//g, '%2F'))
      .join('/');
  } catch (i) {
    return (
      Ca(
        !1,
        'The URL path "' +
          r +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + i + ').')
      ),
      r
    );
  }
}
function Hi(r, i) {
  if (i === '/') return r;
  if (!r.toLowerCase().startsWith(i.toLowerCase())) return null;
  let o = i.endsWith('/') ? i.length - 1 : i.length,
    s = r.charAt(o);
  return s && s !== '/' ? null : r.slice(o) || '/';
}
function oL(r, i) {
  i === void 0 && (i = '/');
  let {
    pathname: o,
    search: s = '',
    hash: c = '',
  } = typeof r == 'string' ? Pl(r) : r;
  return {
    pathname: o ? (o.startsWith('/') ? o : lL(o, i)) : i,
    search: cL(s),
    hash: fL(c),
  };
}
function lL(r, i) {
  let o = i.replace(/\/+$/, '').split('/');
  return (
    r.split('/').forEach((c) => {
      c === '..' ? o.length > 1 && o.pop() : c !== '.' && o.push(c);
    }),
    o.length > 1 ? o.join('/') : '/'
  );
}
function zm(r, i, o, s) {
  return (
    "Cannot include a '" +
    r +
    "' character in a manually specified " +
    ('`to.' +
      i +
      '` field [' +
      JSON.stringify(s) +
      '].  Please separate it out to the ') +
    ('`to.' + o + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function sL(r) {
  return r.filter(
    (i, o) => o === 0 || (i.route.path && i.route.path.length > 0)
  );
}
function OT(r, i) {
  let o = sL(r);
  return i
    ? o.map((s, c) => (c === o.length - 1 ? s.pathname : s.pathnameBase))
    : o.map((s) => s.pathnameBase);
}
function AT(r, i, o, s) {
  s === void 0 && (s = !1);
  let c;
  typeof r == 'string'
    ? (c = Pl(r))
    : ((c = zu({}, r)),
      en(
        !c.pathname || !c.pathname.includes('?'),
        zm('?', 'pathname', 'search', c)
      ),
      en(
        !c.pathname || !c.pathname.includes('#'),
        zm('#', 'pathname', 'hash', c)
      ),
      en(!c.search || !c.search.includes('#'), zm('#', 'search', 'hash', c)));
  let f = r === '' || c.pathname === '',
    d = f ? '/' : c.pathname,
    h;
  if (d == null) h = o;
  else {
    let S = i.length - 1;
    if (!s && d.startsWith('..')) {
      let w = d.split('/');
      for (; w[0] === '..'; ) (w.shift(), (S -= 1));
      c.pathname = w.join('/');
    }
    h = S >= 0 ? i[S] : '/';
  }
  let m = oL(c, h),
    g = d && d !== '/' && d.endsWith('/'),
    E = (f || d === '.') && o.endsWith('/');
  return (!m.pathname.endsWith('/') && (g || E) && (m.pathname += '/'), m);
}
const ti = (r) => r.join('/').replace(/\/\/+/g, '/'),
  uL = (r) => r.replace(/\/+$/, '').replace(/^\/*/, '/'),
  cL = (r) => (!r || r === '?' ? '' : r.startsWith('?') ? r : '?' + r),
  fL = (r) => (!r || r === '#' ? '' : r.startsWith('#') ? r : '#' + r);
function dL(r) {
  return (
    r != null &&
    typeof r.status == 'number' &&
    typeof r.statusText == 'string' &&
    typeof r.internal == 'boolean' &&
    'data' in r
  );
}
const MT = ['post', 'put', 'patch', 'delete'];
new Set(MT);
const pL = ['get', ...MT];
new Set(pL);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Fu() {
  return (
    (Fu = Object.assign
      ? Object.assign.bind()
      : function (r) {
          for (var i = 1; i < arguments.length; i++) {
            var o = arguments[i];
            for (var s in o)
              Object.prototype.hasOwnProperty.call(o, s) && (r[s] = o[s]);
          }
          return r;
        }),
    Fu.apply(this, arguments)
  );
}
const Hu = K.createContext(null);
Hu.displayName = 'DataRouter';
const oy = K.createContext(null);
oy.displayName = 'DataRouterState';
const vL = K.createContext(null);
vL.displayName = 'Await';
const na = K.createContext(null);
na.displayName = 'Navigation';
const Iu = K.createContext(null);
Iu.displayName = 'Location';
const Ta = K.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Ta.displayName = 'Route';
const ly = K.createContext(null);
ly.displayName = 'RouteError';
function hL(r, i) {
  let { relative: o } = i === void 0 ? {} : i;
  Bu() ||
    en(
      !1,
      'useHref() may be used only in the context of a <Router> component.'
    );
  let { basename: s, navigator: c } = K.useContext(na),
    { hash: f, pathname: d, search: h } = ju(r, { relative: o }),
    m = d;
  return (
    s !== '/' && (m = d === '/' ? s : ti([s, d])),
    c.createHref({ pathname: m, search: h, hash: f })
  );
}
function Bu() {
  return K.useContext(Iu) != null;
}
function zl() {
  return (
    Bu() ||
      en(
        !1,
        'useLocation() may be used only in the context of a <Router> component.'
      ),
    K.useContext(Iu).location
  );
}
const LT =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function kT(r) {
  K.useContext(na).static || K.useLayoutEffect(r);
}
function mL() {
  let { isDataRoute: r } = K.useContext(Ta);
  return r ? LL() : yL();
}
function yL() {
  Bu() ||
    en(
      !1,
      'useNavigate() may be used only in the context of a <Router> component.'
    );
  let r = K.useContext(Hu),
    { basename: i, future: o, navigator: s } = K.useContext(na),
    { matches: c } = K.useContext(Ta),
    { pathname: f } = zl(),
    d = JSON.stringify(OT(c, o.v7_relativeSplatPath)),
    h = K.useRef(!1);
  return (
    kT(() => {
      h.current = !0;
    }),
    K.useCallback(
      function (g, E) {
        if ((E === void 0 && (E = {}), Ca(h.current, LT), !h.current)) return;
        if (typeof g == 'number') {
          s.go(g);
          return;
        }
        let S = AT(g, JSON.parse(d), f, E.relative === 'path');
        (r == null &&
          i !== '/' &&
          (S.pathname = S.pathname === '/' ? i : ti([i, S.pathname])),
          (E.replace ? s.replace : s.push)(S, E.state, E));
      },
      [i, s, d, f, r]
    )
  );
}
const gL = K.createContext(null);
function bL(r) {
  let i = K.useContext(Ta).outlet;
  return i && K.createElement(gL.Provider, { value: r }, i);
}
function ju(r, i) {
  let { relative: o } = i === void 0 ? {} : i,
    { future: s } = K.useContext(na),
    { matches: c } = K.useContext(Ta),
    { pathname: f } = zl(),
    d = JSON.stringify(OT(c, s.v7_relativeSplatPath));
  return K.useMemo(() => AT(r, JSON.parse(d), f, o === 'path'), [r, d, f, o]);
}
function SL(r, i) {
  return EL(r, i);
}
function EL(r, i, o, s) {
  Bu() ||
    en(
      !1,
      'useRoutes() may be used only in the context of a <Router> component.'
    );
  let { navigator: c } = K.useContext(na),
    { matches: f } = K.useContext(Ta),
    d = f[f.length - 1],
    h = d ? d.params : {},
    m = d ? d.pathname : '/',
    g = d ? d.pathnameBase : '/',
    E = d && d.route;
  {
    let _ = (E && E.path) || '';
    PT(
      m,
      !E || _.endsWith('*'),
      'You rendered descendant <Routes> (or called `useRoutes()`) at ' +
        ('"' + m + '" (under <Route path="' + _ + '">) but the ') +
        `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` +
        ('Please change the parent <Route path="' + _ + '"> to <Route ') +
        ('path="' + (_ === '/' ? '*' : _ + '/*') + '">.')
    );
  }
  let S = zl(),
    w;
  if (i) {
    var O;
    let _ = typeof i == 'string' ? Pl(i) : i;
    (g === '/' ||
      ((O = _.pathname) != null && O.startsWith(g)) ||
      en(
        !1,
        'When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was ' +
          ('matched by all parent routes. The current pathname base is "' +
            g +
            '" ') +
          ('but pathname "' +
            _.pathname +
            '" was given in the `location` prop.')
      ),
      (w = _));
  } else w = S;
  let D = w.pathname || '/',
    x = D;
  if (g !== '/') {
    let _ = g.replace(/^\//, '').split('/');
    x = '/' + D.replace(/^\//, '').split('/').slice(_.length).join('/');
  }
  let z = GM(r, { pathname: x });
  (Ca(
    E || z != null,
    'No routes matched location "' + w.pathname + w.search + w.hash + '" '
  ),
    Ca(
      z == null ||
        z[z.length - 1].route.element !== void 0 ||
        z[z.length - 1].route.Component !== void 0 ||
        z[z.length - 1].route.lazy !== void 0,
      'Matched leaf route at location "' +
        w.pathname +
        w.search +
        w.hash +
        '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.'
    ));
  let N = RL(
    z &&
      z.map((_) =>
        Object.assign({}, _, {
          params: Object.assign({}, h, _.params),
          pathname: ti([
            g,
            c.encodeLocation
              ? c.encodeLocation(_.pathname).pathname
              : _.pathname,
          ]),
          pathnameBase:
            _.pathnameBase === '/'
              ? g
              : ti([
                  g,
                  c.encodeLocation
                    ? c.encodeLocation(_.pathnameBase).pathname
                    : _.pathnameBase,
                ]),
        })
      ),
    f,
    o,
    s
  );
  return i && N
    ? K.createElement(
        Iu.Provider,
        {
          value: {
            location: Fu(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              w
            ),
            navigationType: Ui.Pop,
          },
        },
        N
      )
    : N;
}
function CL() {
  let r = ML(),
    i = dL(r)
      ? r.status + ' ' + r.statusText
      : r instanceof Error
        ? r.message
        : JSON.stringify(r),
    o = r instanceof Error ? r.stack : null,
    s = 'rgba(200,200,200, 0.5)',
    c = { padding: '0.5rem', backgroundColor: s },
    f = { padding: '2px 4px', backgroundColor: s },
    d = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', r),
    (d = K.createElement(
      K.Fragment,
      null,
      K.createElement('p', null, '💿 Hey developer 👋'),
      K.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        K.createElement('code', { style: f }, 'ErrorBoundary'),
        ' or',
        ' ',
        K.createElement('code', { style: f }, 'errorElement'),
        ' prop on your route.'
      )
    )),
    K.createElement(
      K.Fragment,
      null,
      K.createElement('h2', null, 'Unexpected Application Error!'),
      K.createElement('h3', { style: { fontStyle: 'italic' } }, i),
      o ? K.createElement('pre', { style: c }, o) : null,
      d
    )
  );
}
const TL = K.createElement(CL, null);
class wL extends K.Component {
  constructor(i) {
    (super(i),
      (this.state = {
        location: i.location,
        revalidation: i.revalidation,
        error: i.error,
      }));
  }
  static getDerivedStateFromError(i) {
    return { error: i };
  }
  static getDerivedStateFromProps(i, o) {
    return o.location !== i.location ||
      (o.revalidation !== 'idle' && i.revalidation === 'idle')
      ? { error: i.error, location: i.location, revalidation: i.revalidation }
      : {
          error: i.error !== void 0 ? i.error : o.error,
          location: o.location,
          revalidation: i.revalidation || o.revalidation,
        };
  }
  componentDidCatch(i, o) {
    console.error(
      'React Router caught the following error during render',
      i,
      o
    );
  }
  render() {
    return this.state.error !== void 0
      ? K.createElement(
          Ta.Provider,
          { value: this.props.routeContext },
          K.createElement(ly.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function xL(r) {
  let { routeContext: i, match: o, children: s } = r,
    c = K.useContext(Hu);
  return (
    c &&
      c.static &&
      c.staticContext &&
      (o.route.errorElement || o.route.ErrorBoundary) &&
      (c.staticContext._deepestRenderedBoundaryId = o.route.id),
    K.createElement(Ta.Provider, { value: i }, s)
  );
}
function RL(r, i, o, s) {
  var c;
  if (
    (i === void 0 && (i = []),
    o === void 0 && (o = null),
    s === void 0 && (s = null),
    r == null)
  ) {
    var f;
    if (!o) return null;
    if (o.errors) r = o.matches;
    else if (
      (f = s) != null &&
      f.v7_partialHydration &&
      i.length === 0 &&
      !o.initialized &&
      o.matches.length > 0
    )
      r = o.matches;
    else return null;
  }
  let d = r,
    h = (c = o) == null ? void 0 : c.errors;
  if (h != null) {
    let E = d.findIndex(
      (S) => S.route.id && (h == null ? void 0 : h[S.route.id]) !== void 0
    );
    (E >= 0 ||
      en(
        !1,
        'Could not find a matching route for errors on route IDs: ' +
          Object.keys(h).join(',')
      ),
      (d = d.slice(0, Math.min(d.length, E + 1))));
  }
  let m = !1,
    g = -1;
  if (o && s && s.v7_partialHydration)
    for (let E = 0; E < d.length; E++) {
      let S = d[E];
      if (
        ((S.route.HydrateFallback || S.route.hydrateFallbackElement) && (g = E),
        S.route.id)
      ) {
        let { loaderData: w, errors: O } = o,
          D =
            S.route.loader &&
            w[S.route.id] === void 0 &&
            (!O || O[S.route.id] === void 0);
        if (S.route.lazy || D) {
          ((m = !0), g >= 0 ? (d = d.slice(0, g + 1)) : (d = [d[0]]));
          break;
        }
      }
    }
  return d.reduceRight((E, S, w) => {
    let O,
      D = !1,
      x = null,
      z = null;
    o &&
      ((O = h && S.route.id ? h[S.route.id] : void 0),
      (x = S.route.errorElement || TL),
      m &&
        (g < 0 && w === 0
          ? (PT(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (D = !0),
            (z = null))
          : g === w &&
            ((D = !0), (z = S.route.hydrateFallbackElement || null))));
    let N = i.concat(d.slice(0, w + 1)),
      _ = () => {
        let P;
        return (
          O
            ? (P = x)
            : D
              ? (P = z)
              : S.route.Component
                ? (P = K.createElement(S.route.Component, null))
                : S.route.element
                  ? (P = S.route.element)
                  : (P = E),
          K.createElement(xL, {
            match: S,
            routeContext: { outlet: E, matches: N, isDataRoute: o != null },
            children: P,
          })
        );
      };
    return o && (S.route.ErrorBoundary || S.route.errorElement || w === 0)
      ? K.createElement(wL, {
          location: o.location,
          revalidation: o.revalidation,
          component: x,
          error: O,
          children: _(),
          routeContext: { outlet: null, matches: N, isDataRoute: !0 },
        })
      : _();
  }, null);
}
var NT = (function (r) {
    return (
      (r.UseBlocker = 'useBlocker'),
      (r.UseRevalidator = 'useRevalidator'),
      (r.UseNavigateStable = 'useNavigate'),
      r
    );
  })(NT || {}),
  Vu = (function (r) {
    return (
      (r.UseBlocker = 'useBlocker'),
      (r.UseLoaderData = 'useLoaderData'),
      (r.UseActionData = 'useActionData'),
      (r.UseRouteError = 'useRouteError'),
      (r.UseNavigation = 'useNavigation'),
      (r.UseRouteLoaderData = 'useRouteLoaderData'),
      (r.UseMatches = 'useMatches'),
      (r.UseRevalidator = 'useRevalidator'),
      (r.UseNavigateStable = 'useNavigate'),
      (r.UseRouteId = 'useRouteId'),
      r
    );
  })(Vu || {});
function sy(r) {
  return (
    r +
    ' must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router.'
  );
}
function _L(r) {
  let i = K.useContext(Hu);
  return (i || en(!1, sy(r)), i);
}
function DL(r) {
  let i = K.useContext(oy);
  return (i || en(!1, sy(r)), i);
}
function OL(r) {
  let i = K.useContext(Ta);
  return (i || en(!1, sy(r)), i);
}
function uy(r) {
  let i = OL(r),
    o = i.matches[i.matches.length - 1];
  return (
    o.route.id ||
      en(!1, r + ' can only be used on routes that contain a unique "id"'),
    o.route.id
  );
}
function AL() {
  return uy(Vu.UseRouteId);
}
function ML() {
  var r;
  let i = K.useContext(ly),
    o = DL(Vu.UseRouteError),
    s = uy(Vu.UseRouteError);
  return i !== void 0 ? i : (r = o.errors) == null ? void 0 : r[s];
}
function LL() {
  let { router: r } = _L(NT.UseNavigateStable),
    i = uy(Vu.UseNavigateStable),
    o = K.useRef(!1);
  return (
    kT(() => {
      o.current = !0;
    }),
    K.useCallback(
      function (c, f) {
        (f === void 0 && (f = {}),
          Ca(o.current, LT),
          o.current &&
            (typeof c == 'number'
              ? r.navigate(c)
              : r.navigate(c, Fu({ fromRouteId: i }, f))));
      },
      [r, i]
    )
  );
}
const PC = {};
function PT(r, i, o) {
  !i && !PC[r] && ((PC[r] = !0), Ca(!1, o));
}
const zC = {};
function kL(r, i) {
  zC[i] || ((zC[i] = !0), console.warn(i));
}
const Ol = (r, i, o) =>
  kL(
    r,
    '⚠️ React Router Future Flag Warning: ' +
      i +
      '. ' +
      ('You can use the `' + r + '` future flag to opt-in early. ') +
      ('For more information, see ' + o + '.')
  );
function NL(r, i) {
  ((r == null ? void 0 : r.v7_startTransition) === void 0 &&
    Ol(
      'v7_startTransition',
      'React Router will begin wrapping state updates in `React.startTransition` in v7',
      'https://reactrouter.com/v6/upgrading/future#v7_starttransition'
    ),
    (r == null ? void 0 : r.v7_relativeSplatPath) === void 0 &&
      (!i || i.v7_relativeSplatPath === void 0) &&
      Ol(
        'v7_relativeSplatPath',
        'Relative route resolution within Splat routes is changing in v7',
        'https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath'
      ),
    i &&
      (i.v7_fetcherPersist === void 0 &&
        Ol(
          'v7_fetcherPersist',
          'The persistence behavior of fetchers is changing in v7',
          'https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist'
        ),
      i.v7_normalizeFormMethod === void 0 &&
        Ol(
          'v7_normalizeFormMethod',
          'Casing of `formMethod` fields is being normalized to uppercase in v7',
          'https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod'
        ),
      i.v7_partialHydration === void 0 &&
        Ol(
          'v7_partialHydration',
          '`RouterProvider` hydration behavior is changing in v7',
          'https://reactrouter.com/v6/upgrading/future#v7_partialhydration'
        ),
      i.v7_skipActionErrorRevalidation === void 0 &&
        Ol(
          'v7_skipActionErrorRevalidation',
          'The revalidation behavior after 4xx/5xx `action` responses is changing in v7',
          'https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation'
        )));
}
function PL(r) {
  return bL(r.context);
}
function wo(r) {
  en(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
  );
}
function zL(r) {
  let {
    basename: i = '/',
    children: o = null,
    location: s,
    navigationType: c = Ui.Pop,
    navigator: f,
    static: d = !1,
    future: h,
  } = r;
  Bu() &&
    en(
      !1,
      'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
    );
  let m = i.replace(/^\/*/, '/'),
    g = K.useMemo(
      () => ({
        basename: m,
        navigator: f,
        static: d,
        future: Fu({ v7_relativeSplatPath: !1 }, h),
      }),
      [m, h, f, d]
    );
  typeof s == 'string' && (s = Pl(s));
  let {
      pathname: E = '/',
      search: S = '',
      hash: w = '',
      state: O = null,
      key: D = 'default',
    } = s,
    x = K.useMemo(() => {
      let z = Hi(E, m);
      return z == null
        ? null
        : {
            location: { pathname: z, search: S, hash: w, state: O, key: D },
            navigationType: c,
          };
    }, [m, E, S, w, O, D, c]);
  return (
    Ca(
      x != null,
      '<Router basename="' +
        m +
        '"> is not able to match the URL ' +
        ('"' + E + S + w + '" because it does not start with the ') +
        "basename, so the <Router> won't render anything."
    ),
    x == null
      ? null
      : K.createElement(
          na.Provider,
          { value: g },
          K.createElement(Iu.Provider, { children: o, value: x })
        )
  );
}
function UL(r) {
  let { children: i, location: o } = r;
  return SL(Xm(i), o);
}
new Promise(() => {});
function Xm(r, i) {
  i === void 0 && (i = []);
  let o = [];
  return (
    K.Children.forEach(r, (s, c) => {
      if (!K.isValidElement(s)) return;
      let f = [...i, c];
      if (s.type === K.Fragment) {
        o.push.apply(o, Xm(s.props.children, f));
        return;
      }
      (s.type !== wo &&
        en(
          !1,
          '[' +
            (typeof s.type == 'string' ? s.type : s.type.name) +
            '] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>'
        ),
        !s.props.index ||
          !s.props.children ||
          en(!1, 'An index route cannot have child routes.'));
      let d = {
        id: s.props.id || f.join('-'),
        caseSensitive: s.props.caseSensitive,
        element: s.props.element,
        Component: s.props.Component,
        index: s.props.index,
        path: s.props.path,
        loader: s.props.loader,
        action: s.props.action,
        errorElement: s.props.errorElement,
        ErrorBoundary: s.props.ErrorBoundary,
        hasErrorBoundary:
          s.props.ErrorBoundary != null || s.props.errorElement != null,
        shouldRevalidate: s.props.shouldRevalidate,
        handle: s.props.handle,
        lazy: s.props.lazy,
      };
      (s.props.children && (d.children = Xm(s.props.children, f)), o.push(d));
    }),
    o
  );
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ll() {
  return (
    (Ll = Object.assign
      ? Object.assign.bind()
      : function (r) {
          for (var i = 1; i < arguments.length; i++) {
            var o = arguments[i];
            for (var s in o)
              Object.prototype.hasOwnProperty.call(o, s) && (r[s] = o[s]);
          }
          return r;
        }),
    Ll.apply(this, arguments)
  );
}
function cy(r, i) {
  if (r == null) return {};
  var o = {},
    s = Object.keys(r),
    c,
    f;
  for (f = 0; f < s.length; f++)
    ((c = s[f]), !(i.indexOf(c) >= 0) && (o[c] = r[c]));
  return o;
}
const dd = 'get',
  pd = 'application/x-www-form-urlencoded';
function Od(r) {
  return r != null && typeof r.tagName == 'string';
}
function FL(r) {
  return Od(r) && r.tagName.toLowerCase() === 'button';
}
function VL(r) {
  return Od(r) && r.tagName.toLowerCase() === 'form';
}
function HL(r) {
  return Od(r) && r.tagName.toLowerCase() === 'input';
}
function IL(r) {
  return !!(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey);
}
function BL(r, i) {
  return r.button === 0 && (!i || i === '_self') && !IL(r);
}
let id = null;
function jL() {
  if (id === null)
    try {
      (new FormData(document.createElement('form'), 0), (id = !1));
    } catch {
      id = !0;
    }
  return id;
}
const $L = new Set([
  'application/x-www-form-urlencoded',
  'multipart/form-data',
  'text/plain',
]);
function Um(r) {
  return r != null && !$L.has(r)
    ? (Ca(
        !1,
        '"' +
          r +
          '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' +
          ('and will default to "' + pd + '"')
      ),
      null)
    : r;
}
function YL(r, i) {
  let o, s, c, f, d;
  if (VL(r)) {
    let h = r.getAttribute('action');
    ((s = h ? Hi(h, i) : null),
      (o = r.getAttribute('method') || dd),
      (c = Um(r.getAttribute('enctype')) || pd),
      (f = new FormData(r)));
  } else if (FL(r) || (HL(r) && (r.type === 'submit' || r.type === 'image'))) {
    let h = r.form;
    if (h == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let m = r.getAttribute('formaction') || h.getAttribute('action');
    if (
      ((s = m ? Hi(m, i) : null),
      (o = r.getAttribute('formmethod') || h.getAttribute('method') || dd),
      (c =
        Um(r.getAttribute('formenctype')) ||
        Um(h.getAttribute('enctype')) ||
        pd),
      (f = new FormData(h, r)),
      !jL())
    ) {
      let { name: g, type: E, value: S } = r;
      if (E === 'image') {
        let w = g ? g + '.' : '';
        (f.append(w + 'x', '0'), f.append(w + 'y', '0'));
      } else g && f.append(g, S);
    }
  } else {
    if (Od(r))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    ((o = dd), (s = null), (c = pd), (d = r));
  }
  return (
    f && c === 'text/plain' && ((d = f), (f = void 0)),
    { action: s, method: o.toLowerCase(), encType: c, formData: f, body: d }
  );
}
const GL = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
    'viewTransition',
  ],
  WL = [
    'aria-current',
    'caseSensitive',
    'className',
    'end',
    'style',
    'to',
    'viewTransition',
    'children',
  ],
  qL = [
    'fetcherKey',
    'navigate',
    'reloadDocument',
    'replace',
    'state',
    'method',
    'action',
    'onSubmit',
    'relative',
    'preventScrollReset',
    'viewTransition',
  ],
  XL = '6';
try {
  window.__reactRouterVersion = XL;
} catch {}
const zT = K.createContext({ isTransitioning: !1 });
zT.displayName = 'ViewTransition';
const QL = K.createContext(new Map());
QL.displayName = 'Fetchers';
const KL = 'startTransition',
  UC = HM[KL];
function JL(r) {
  let { basename: i, children: o, future: s, window: c } = r,
    f = K.useRef();
  f.current == null && (f.current = jM({ window: c, v5Compat: !0 }));
  let d = f.current,
    [h, m] = K.useState({ action: d.action, location: d.location }),
    { v7_startTransition: g } = s || {},
    E = K.useCallback(
      (S) => {
        g && UC ? UC(() => m(S)) : m(S);
      },
      [m, g]
    );
  return (
    K.useLayoutEffect(() => d.listen(E), [d, E]),
    K.useEffect(() => NL(s), [s]),
    K.createElement(zL, {
      basename: i,
      children: o,
      location: h.location,
      navigationType: h.action,
      navigator: d,
      future: s,
    })
  );
}
const ZL =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  ek = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Pi = K.forwardRef(function (i, o) {
    let {
        onClick: s,
        relative: c,
        reloadDocument: f,
        replace: d,
        state: h,
        target: m,
        to: g,
        preventScrollReset: E,
        viewTransition: S,
      } = i,
      w = cy(i, GL),
      { basename: O } = K.useContext(na),
      D,
      x = !1;
    if (typeof g == 'string' && ek.test(g) && ((D = g), ZL))
      try {
        let P = new URL(window.location.href),
          U = g.startsWith('//') ? new URL(P.protocol + g) : new URL(g),
          V = Hi(U.pathname, O);
        U.origin === P.origin && V != null
          ? (g = V + U.search + U.hash)
          : (x = !0);
      } catch {
        Ca(
          !1,
          '<Link to="' +
            g +
            '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.'
        );
      }
    let z = hL(g, { relative: c }),
      N = ak(g, {
        replace: d,
        state: h,
        target: m,
        preventScrollReset: E,
        relative: c,
        viewTransition: S,
      });
    function _(P) {
      (s && s(P), P.defaultPrevented || N(P));
    }
    return K.createElement(
      'a',
      Ll({}, w, { href: D || z, onClick: x || f ? s : _, ref: o, target: m })
    );
  });
Pi.displayName = 'Link';
const tk = K.forwardRef(function (i, o) {
  let {
      'aria-current': s = 'page',
      caseSensitive: c = !1,
      className: f = '',
      end: d = !1,
      style: h,
      to: m,
      viewTransition: g,
      children: E,
    } = i,
    S = cy(i, WL),
    w = ju(m, { relative: S.relative }),
    O = zl(),
    D = K.useContext(oy),
    { navigator: x, basename: z } = K.useContext(na),
    N = D != null && ck(w) && g === !0,
    _ = x.encodeLocation ? x.encodeLocation(w).pathname : w.pathname,
    P = O.pathname,
    U =
      D && D.navigation && D.navigation.location
        ? D.navigation.location.pathname
        : null;
  (c ||
    ((P = P.toLowerCase()),
    (U = U ? U.toLowerCase() : null),
    (_ = _.toLowerCase())),
    U && z && (U = Hi(U, z) || U));
  const V = _ !== '/' && _.endsWith('/') ? _.length - 1 : _.length;
  let oe = P === _ || (!d && P.startsWith(_) && P.charAt(V) === '/'),
    ne =
      U != null &&
      (U === _ || (!d && U.startsWith(_) && U.charAt(_.length) === '/')),
    ce = { isActive: oe, isPending: ne, isTransitioning: N },
    re = oe ? s : void 0,
    te;
  typeof f == 'function'
    ? (te = f(ce))
    : (te = [
        f,
        oe ? 'active' : null,
        ne ? 'pending' : null,
        N ? 'transitioning' : null,
      ]
        .filter(Boolean)
        .join(' '));
  let ue = typeof h == 'function' ? h(ce) : h;
  return K.createElement(
    Pi,
    Ll({}, S, {
      'aria-current': re,
      className: te,
      ref: o,
      style: ue,
      to: m,
      viewTransition: g,
    }),
    typeof E == 'function' ? E(ce) : E
  );
});
tk.displayName = 'NavLink';
const nk = K.forwardRef((r, i) => {
  let {
      fetcherKey: o,
      navigate: s,
      reloadDocument: c,
      replace: f,
      state: d,
      method: h = dd,
      action: m,
      onSubmit: g,
      relative: E,
      preventScrollReset: S,
      viewTransition: w,
    } = r,
    O = cy(r, qL),
    D = sk(),
    x = uk(m, { relative: E }),
    z = h.toLowerCase() === 'get' ? 'get' : 'post',
    N = (_) => {
      if ((g && g(_), _.defaultPrevented)) return;
      _.preventDefault();
      let P = _.nativeEvent.submitter,
        U = (P == null ? void 0 : P.getAttribute('formmethod')) || h;
      D(P || _.currentTarget, {
        fetcherKey: o,
        method: U,
        navigate: s,
        replace: f,
        state: d,
        relative: E,
        preventScrollReset: S,
        viewTransition: w,
      });
    };
  return K.createElement(
    'form',
    Ll({ ref: i, method: z, action: x, onSubmit: c ? g : N }, O)
  );
});
nk.displayName = 'Form';
var bd;
(function (r) {
  ((r.UseScrollRestoration = 'useScrollRestoration'),
    (r.UseSubmit = 'useSubmit'),
    (r.UseSubmitFetcher = 'useSubmitFetcher'),
    (r.UseFetcher = 'useFetcher'),
    (r.useViewTransitionState = 'useViewTransitionState'));
})(bd || (bd = {}));
var FC;
(function (r) {
  ((r.UseFetcher = 'useFetcher'),
    (r.UseFetchers = 'useFetchers'),
    (r.UseScrollRestoration = 'useScrollRestoration'));
})(FC || (FC = {}));
function rk(r) {
  return (
    r +
    ' must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router.'
  );
}
function UT(r) {
  let i = K.useContext(Hu);
  return (i || en(!1, rk(r)), i);
}
function ak(r, i) {
  let {
      target: o,
      replace: s,
      state: c,
      preventScrollReset: f,
      relative: d,
      viewTransition: h,
    } = i === void 0 ? {} : i,
    m = mL(),
    g = zl(),
    E = ju(r, { relative: d });
  return K.useCallback(
    (S) => {
      if (BL(S, o)) {
        S.preventDefault();
        let w = s !== void 0 ? s : Uu(g) === Uu(E);
        m(r, {
          replace: w,
          state: c,
          preventScrollReset: f,
          relative: d,
          viewTransition: h,
        });
      }
    },
    [g, m, E, s, c, o, r, f, d, h]
  );
}
function ik() {
  if (typeof document > 'u')
    throw new Error(
      'You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.'
    );
}
let ok = 0,
  lk = () => '__' + String(++ok) + '__';
function sk() {
  let { router: r } = UT(bd.UseSubmit),
    { basename: i } = K.useContext(na),
    o = AL();
  return K.useCallback(
    function (s, c) {
      (c === void 0 && (c = {}), ik());
      let { action: f, method: d, encType: h, formData: m, body: g } = YL(s, i);
      if (c.navigate === !1) {
        let E = c.fetcherKey || lk();
        r.fetch(E, o, c.action || f, {
          preventScrollReset: c.preventScrollReset,
          formData: m,
          body: g,
          formMethod: c.method || d,
          formEncType: c.encType || h,
          flushSync: c.flushSync,
        });
      } else
        r.navigate(c.action || f, {
          preventScrollReset: c.preventScrollReset,
          formData: m,
          body: g,
          formMethod: c.method || d,
          formEncType: c.encType || h,
          replace: c.replace,
          state: c.state,
          fromRouteId: o,
          flushSync: c.flushSync,
          viewTransition: c.viewTransition,
        });
    },
    [r, i, o]
  );
}
function uk(r, i) {
  let { relative: o } = i === void 0 ? {} : i,
    { basename: s } = K.useContext(na),
    c = K.useContext(Ta);
  c || en(!1, 'useFormAction must be used inside a RouteContext');
  let [f] = c.matches.slice(-1),
    d = Ll({}, ju(r || '.', { relative: o })),
    h = zl();
  if (r == null) {
    d.search = h.search;
    let m = new URLSearchParams(d.search),
      g = m.getAll('index');
    if (g.some((S) => S === '')) {
      (m.delete('index'),
        g.filter((w) => w).forEach((w) => m.append('index', w)));
      let S = m.toString();
      d.search = S ? '?' + S : '';
    }
  }
  return (
    (!r || r === '.') &&
      f.route.index &&
      (d.search = d.search ? d.search.replace(/^\?/, '?index&') : '?index'),
    s !== '/' && (d.pathname = d.pathname === '/' ? s : ti([s, d.pathname])),
    Uu(d)
  );
}
function ck(r, i) {
  i === void 0 && (i = {});
  let o = K.useContext(zT);
  o == null &&
    en(
      !1,
      "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
    );
  let { basename: s } = UT(bd.useViewTransitionState),
    c = ju(r, { relative: i.relative });
  if (!o.isTransitioning) return !1;
  let f = Hi(o.currentLocation.pathname, s) || o.currentLocation.pathname,
    d = Hi(o.nextLocation.pathname, s) || o.nextLocation.pathname;
  return gd(c.pathname, d) != null || gd(c.pathname, f) != null;
}
var $u = (r) => r.type === 'checkbox',
  Ro = (r) => r instanceof Date,
  rr = (r) => r == null;
const FT = (r) => typeof r == 'object';
var un = (r) => !rr(r) && !Array.isArray(r) && FT(r) && !Ro(r),
  fk = (r) =>
    un(r) && r.target ? ($u(r.target) ? r.target.checked : r.target.value) : r,
  dk = (r) => r.substring(0, r.search(/\.\d+(\.|$)/)) || r,
  pk = (r, i) => r.has(dk(i)),
  vk = (r) => {
    const i = r.constructor && r.constructor.prototype;
    return un(i) && i.hasOwnProperty('isPrototypeOf');
  },
  fy =
    typeof window < 'u' &&
    typeof window.HTMLElement < 'u' &&
    typeof document < 'u';
function Mn(r) {
  let i;
  const o = Array.isArray(r),
    s = typeof FileList < 'u' ? r instanceof FileList : !1;
  if (r instanceof Date) i = new Date(r);
  else if (!(fy && (r instanceof Blob || s)) && (o || un(r)))
    if (((i = o ? [] : {}), !o && !vk(r))) i = r;
    else for (const c in r) r.hasOwnProperty(c) && (i[c] = Mn(r[c]));
  else return r;
  return i;
}
var Ad = (r) => /^\w*$/.test(r),
  vn = (r) => r === void 0,
  dy = (r) => (Array.isArray(r) ? r.filter(Boolean) : []),
  py = (r) => dy(r.replace(/["|']|\]/g, '').split(/\.|\[/)),
  Pe = (r, i, o) => {
    if (!i || !un(r)) return o;
    const s = (Ad(i) ? [i] : py(i)).reduce((c, f) => (rr(c) ? c : c[f]), r);
    return vn(s) || s === r ? (vn(r[i]) ? o : r[i]) : s;
  },
  Sa = (r) => typeof r == 'boolean',
  Qt = (r, i, o) => {
    let s = -1;
    const c = Ad(i) ? [i] : py(i),
      f = c.length,
      d = f - 1;
    for (; ++s < f; ) {
      const h = c[s];
      let m = o;
      if (s !== d) {
        const g = r[h];
        m = un(g) || Array.isArray(g) ? g : isNaN(+c[s + 1]) ? {} : [];
      }
      if (h === '__proto__' || h === 'constructor' || h === 'prototype') return;
      ((r[h] = m), (r = r[h]));
    }
  };
const VC = { BLUR: 'blur', FOCUS_OUT: 'focusout', CHANGE: 'change' },
  ea = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
    onTouched: 'onTouched',
    all: 'all',
  },
  Ka = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate',
  },
  hk = Tt.createContext(null);
hk.displayName = 'HookFormContext';
var mk = (r, i, o, s = !0) => {
  const c = { defaultValues: i._defaultValues };
  for (const f in r)
    Object.defineProperty(c, f, {
      get: () => {
        const d = f;
        return (
          i._proxyFormState[d] !== ea.all &&
            (i._proxyFormState[d] = !s || ea.all),
          o && (o[d] = !0),
          r[d]
        );
      },
    });
  return c;
};
const yk = typeof window < 'u' ? K.useLayoutEffect : K.useEffect;
var Ea = (r) => typeof r == 'string',
  gk = (r, i, o, s, c) =>
    Ea(r)
      ? (s && i.watch.add(r), Pe(o, r, c))
      : Array.isArray(r)
        ? r.map((f) => (s && i.watch.add(f), Pe(o, f)))
        : (s && (i.watchAll = !0), o),
  bk = (r, i, o, s, c) =>
    i
      ? {
          ...o[r],
          types: { ...(o[r] && o[r].types ? o[r].types : {}), [s]: c || !0 },
        }
      : {},
  Lu = (r) => (Array.isArray(r) ? r : [r]),
  HC = () => {
    let r = [];
    return {
      get observers() {
        return r;
      },
      next: (c) => {
        for (const f of r) f.next && f.next(c);
      },
      subscribe: (c) => (
        r.push(c),
        {
          unsubscribe: () => {
            r = r.filter((f) => f !== c);
          },
        }
      ),
      unsubscribe: () => {
        r = [];
      },
    };
  },
  Qm = (r) => rr(r) || !FT(r);
function zi(r, i, o = new WeakSet()) {
  if (Qm(r) || Qm(i)) return r === i;
  if (Ro(r) && Ro(i)) return r.getTime() === i.getTime();
  const s = Object.keys(r),
    c = Object.keys(i);
  if (s.length !== c.length) return !1;
  if (o.has(r) || o.has(i)) return !0;
  (o.add(r), o.add(i));
  for (const f of s) {
    const d = r[f];
    if (!c.includes(f)) return !1;
    if (f !== 'ref') {
      const h = i[f];
      if (
        (Ro(d) && Ro(h)) ||
        (un(d) && un(h)) ||
        (Array.isArray(d) && Array.isArray(h))
          ? !zi(d, h, o)
          : d !== h
      )
        return !1;
    }
  }
  return !0;
}
var pr = (r) => un(r) && !Object.keys(r).length,
  vy = (r) => r.type === 'file',
  ta = (r) => typeof r == 'function',
  Sd = (r) => {
    if (!fy) return !1;
    const i = r ? r.ownerDocument : 0;
    return (
      r instanceof
      (i && i.defaultView ? i.defaultView.HTMLElement : HTMLElement)
    );
  },
  VT = (r) => r.type === 'select-multiple',
  hy = (r) => r.type === 'radio',
  Sk = (r) => hy(r) || $u(r),
  Fm = (r) => Sd(r) && r.isConnected;
function Ek(r, i) {
  const o = i.slice(0, -1).length;
  let s = 0;
  for (; s < o; ) r = vn(r) ? s++ : r[i[s++]];
  return r;
}
function Ck(r) {
  for (const i in r) if (r.hasOwnProperty(i) && !vn(r[i])) return !1;
  return !0;
}
function pn(r, i) {
  const o = Array.isArray(i) ? i : Ad(i) ? [i] : py(i),
    s = o.length === 1 ? r : Ek(r, o),
    c = o.length - 1,
    f = o[c];
  return (
    s && delete s[f],
    c !== 0 &&
      ((un(s) && pr(s)) || (Array.isArray(s) && Ck(s))) &&
      pn(r, o.slice(0, -1)),
    r
  );
}
var HT = (r) => {
  for (const i in r) if (ta(r[i])) return !0;
  return !1;
};
function Ed(r, i = {}) {
  const o = Array.isArray(r);
  if (un(r) || o)
    for (const s in r)
      Array.isArray(r[s]) || (un(r[s]) && !HT(r[s]))
        ? ((i[s] = Array.isArray(r[s]) ? [] : {}), Ed(r[s], i[s]))
        : rr(r[s]) || (i[s] = !0);
  return i;
}
function IT(r, i, o) {
  const s = Array.isArray(r);
  if (un(r) || s)
    for (const c in r)
      Array.isArray(r[c]) || (un(r[c]) && !HT(r[c]))
        ? vn(i) || Qm(o[c])
          ? (o[c] = Array.isArray(r[c]) ? Ed(r[c], []) : { ...Ed(r[c]) })
          : IT(r[c], rr(i) ? {} : i[c], o[c])
        : (o[c] = !zi(r[c], i[c]));
  return o;
}
var Au = (r, i) => IT(r, i, Ed(i));
const IC = { value: !1, isValid: !1 },
  BC = { value: !0, isValid: !0 };
var BT = (r) => {
    if (Array.isArray(r)) {
      if (r.length > 1) {
        const i = r
          .filter((o) => o && o.checked && !o.disabled)
          .map((o) => o.value);
        return { value: i, isValid: !!i.length };
      }
      return r[0].checked && !r[0].disabled
        ? r[0].attributes && !vn(r[0].attributes.value)
          ? vn(r[0].value) || r[0].value === ''
            ? BC
            : { value: r[0].value, isValid: !0 }
          : BC
        : IC;
    }
    return IC;
  },
  jT = (r, { valueAsNumber: i, valueAsDate: o, setValueAs: s }) =>
    vn(r)
      ? r
      : i
        ? r === ''
          ? NaN
          : r && +r
        : o && Ea(r)
          ? new Date(r)
          : s
            ? s(r)
            : r;
const jC = { isValid: !1, value: null };
var $T = (r) =>
  Array.isArray(r)
    ? r.reduce(
        (i, o) =>
          o && o.checked && !o.disabled ? { isValid: !0, value: o.value } : i,
        jC
      )
    : jC;
function $C(r) {
  const i = r.ref;
  return vy(i)
    ? i.files
    : hy(i)
      ? $T(r.refs).value
      : VT(i)
        ? [...i.selectedOptions].map(({ value: o }) => o)
        : $u(i)
          ? BT(r.refs).value
          : jT(vn(i.value) ? r.ref.value : i.value, r);
}
var Tk = (r, i, o, s) => {
    const c = {};
    for (const f of r) {
      const d = Pe(i, f);
      d && Qt(c, f, d._f);
    }
    return {
      criteriaMode: o,
      names: [...r],
      fields: c,
      shouldUseNativeValidation: s,
    };
  },
  Cd = (r) => r instanceof RegExp,
  Mu = (r) =>
    vn(r)
      ? r
      : Cd(r)
        ? r.source
        : un(r)
          ? Cd(r.value)
            ? r.value.source
            : r.value
          : r,
  YC = (r) => ({
    isOnSubmit: !r || r === ea.onSubmit,
    isOnBlur: r === ea.onBlur,
    isOnChange: r === ea.onChange,
    isOnAll: r === ea.all,
    isOnTouch: r === ea.onTouched,
  });
const GC = 'AsyncFunction';
var wk = (r) =>
    !!r &&
    !!r.validate &&
    !!(
      (ta(r.validate) && r.validate.constructor.name === GC) ||
      (un(r.validate) &&
        Object.values(r.validate).find((i) => i.constructor.name === GC))
    ),
  xk = (r) =>
    r.mount &&
    (r.required ||
      r.min ||
      r.max ||
      r.maxLength ||
      r.minLength ||
      r.pattern ||
      r.validate),
  WC = (r, i, o) =>
    !o &&
    (i.watchAll ||
      i.watch.has(r) ||
      [...i.watch].some(
        (s) => r.startsWith(s) && /^\.\w+/.test(r.slice(s.length))
      ));
const ku = (r, i, o, s) => {
  for (const c of o || Object.keys(r)) {
    const f = Pe(r, c);
    if (f) {
      const { _f: d, ...h } = f;
      if (d) {
        if (d.refs && d.refs[0] && i(d.refs[0], c) && !s) return !0;
        if (d.ref && i(d.ref, d.name) && !s) return !0;
        if (ku(h, i)) break;
      } else if (un(h) && ku(h, i)) break;
    }
  }
};
function qC(r, i, o) {
  const s = Pe(r, o);
  if (s || Ad(o)) return { error: s, name: o };
  const c = o.split('.');
  for (; c.length; ) {
    const f = c.join('.'),
      d = Pe(i, f),
      h = Pe(r, f);
    if (d && !Array.isArray(d) && o !== f) return { name: o };
    if (h && h.type) return { name: f, error: h };
    if (h && h.root && h.root.type) return { name: `${f}.root`, error: h.root };
    c.pop();
  }
  return { name: o };
}
var Rk = (r, i, o, s) => {
    o(r);
    const { name: c, ...f } = r;
    return (
      pr(f) ||
      Object.keys(f).length >= Object.keys(i).length ||
      Object.keys(f).find((d) => i[d] === (!s || ea.all))
    );
  },
  _k = (r, i, o) =>
    !r ||
    !i ||
    r === i ||
    Lu(r).some((s) => s && (o ? s === i : s.startsWith(i) || i.startsWith(s))),
  Dk = (r, i, o, s, c) =>
    c.isOnAll
      ? !1
      : !o && c.isOnTouch
        ? !(i || r)
        : (o ? s.isOnBlur : c.isOnBlur)
          ? !r
          : (o ? s.isOnChange : c.isOnChange)
            ? r
            : !0,
  Ok = (r, i) => !dy(Pe(r, i)).length && pn(r, i),
  Ak = (r, i, o) => {
    const s = Lu(Pe(r, o));
    return (Qt(s, 'root', i[o]), Qt(r, o, s), r);
  },
  vd = (r) => Ea(r);
function XC(r, i, o = 'validate') {
  if (vd(r) || (Array.isArray(r) && r.every(vd)) || (Sa(r) && !r))
    return { type: o, message: vd(r) ? r : '', ref: i };
}
var Al = (r) => (un(r) && !Cd(r) ? r : { value: r, message: '' }),
  QC = async (r, i, o, s, c, f) => {
    const {
        ref: d,
        refs: h,
        required: m,
        maxLength: g,
        minLength: E,
        min: S,
        max: w,
        pattern: O,
        validate: D,
        name: x,
        valueAsNumber: z,
        mount: N,
      } = r._f,
      _ = Pe(o, x);
    if (!N || i.has(x)) return {};
    const P = h ? h[0] : d,
      U = (ae) => {
        c &&
          P.reportValidity &&
          (P.setCustomValidity(Sa(ae) ? '' : ae || ''), P.reportValidity());
      },
      V = {},
      oe = hy(d),
      ne = $u(d),
      ce = oe || ne,
      re =
        ((z || vy(d)) && vn(d.value) && vn(_)) ||
        (Sd(d) && d.value === '') ||
        _ === '' ||
        (Array.isArray(_) && !_.length),
      te = bk.bind(null, x, s, V),
      ue = (ae, ie, Ee, Me = Ka.maxLength, be = Ka.minLength) => {
        const me = ae ? ie : Ee;
        V[x] = {
          type: ae ? Me : be,
          message: me,
          ref: d,
          ...te(ae ? Me : be, me),
        };
      };
    if (
      f
        ? !Array.isArray(_) || !_.length
        : m &&
          ((!ce && (re || rr(_))) ||
            (Sa(_) && !_) ||
            (ne && !BT(h).isValid) ||
            (oe && !$T(h).isValid))
    ) {
      const { value: ae, message: ie } = vd(m)
        ? { value: !!m, message: m }
        : Al(m);
      if (
        ae &&
        ((V[x] = {
          type: Ka.required,
          message: ie,
          ref: P,
          ...te(Ka.required, ie),
        }),
        !s)
      )
        return (U(ie), V);
    }
    if (!re && (!rr(S) || !rr(w))) {
      let ae, ie;
      const Ee = Al(w),
        Me = Al(S);
      if (!rr(_) && !isNaN(_)) {
        const be = d.valueAsNumber || (_ && +_);
        (rr(Ee.value) || (ae = be > Ee.value),
          rr(Me.value) || (ie = be < Me.value));
      } else {
        const be = d.valueAsDate || new Date(_),
          me = (ft) => new Date(new Date().toDateString() + ' ' + ft),
          Ve = d.type == 'time',
          Qe = d.type == 'week';
        (Ea(Ee.value) &&
          _ &&
          (ae = Ve
            ? me(_) > me(Ee.value)
            : Qe
              ? _ > Ee.value
              : be > new Date(Ee.value)),
          Ea(Me.value) &&
            _ &&
            (ie = Ve
              ? me(_) < me(Me.value)
              : Qe
                ? _ < Me.value
                : be < new Date(Me.value)));
      }
      if ((ae || ie) && (ue(!!ae, Ee.message, Me.message, Ka.max, Ka.min), !s))
        return (U(V[x].message), V);
    }
    if ((g || E) && !re && (Ea(_) || (f && Array.isArray(_)))) {
      const ae = Al(g),
        ie = Al(E),
        Ee = !rr(ae.value) && _.length > +ae.value,
        Me = !rr(ie.value) && _.length < +ie.value;
      if ((Ee || Me) && (ue(Ee, ae.message, ie.message), !s))
        return (U(V[x].message), V);
    }
    if (O && !re && Ea(_)) {
      const { value: ae, message: ie } = Al(O);
      if (
        Cd(ae) &&
        !_.match(ae) &&
        ((V[x] = {
          type: Ka.pattern,
          message: ie,
          ref: d,
          ...te(Ka.pattern, ie),
        }),
        !s)
      )
        return (U(ie), V);
    }
    if (D) {
      if (ta(D)) {
        const ae = await D(_, o),
          ie = XC(ae, P);
        if (ie && ((V[x] = { ...ie, ...te(Ka.validate, ie.message) }), !s))
          return (U(ie.message), V);
      } else if (un(D)) {
        let ae = {};
        for (const ie in D) {
          if (!pr(ae) && !s) break;
          const Ee = XC(await D[ie](_, o), P, ie);
          Ee &&
            ((ae = { ...Ee, ...te(ie, Ee.message) }),
            U(Ee.message),
            s && (V[x] = ae));
        }
        if (!pr(ae) && ((V[x] = { ref: P, ...ae }), !s)) return V;
      }
    }
    return (U(!0), V);
  };
const Mk = {
  mode: ea.onSubmit,
  reValidateMode: ea.onChange,
  shouldFocusError: !0,
};
function Lk(r = {}) {
  let i = { ...Mk, ...r },
    o = {
      submitCount: 0,
      isDirty: !1,
      isReady: !1,
      isLoading: ta(i.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: i.errors || {},
      disabled: i.disabled || !1,
    },
    s = {},
    c =
      un(i.defaultValues) || un(i.values)
        ? Mn(i.defaultValues || i.values) || {}
        : {},
    f = i.shouldUnregister ? {} : Mn(c),
    d = { action: !1, mount: !1, watch: !1 },
    h = {
      mount: new Set(),
      disabled: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    m,
    g = 0;
  const E = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1,
  };
  let S = { ...E };
  const w = { array: HC(), state: HC() },
    O = i.criteriaMode === ea.all,
    D = (R) => (F) => {
      (clearTimeout(g), (g = setTimeout(R, F)));
    },
    x = async (R) => {
      if (!i.disabled && (E.isValid || S.isValid || R)) {
        const F = i.resolver ? pr((await ne()).errors) : await re(s, !0);
        F !== o.isValid && w.state.next({ isValid: F });
      }
    },
    z = (R, F) => {
      !i.disabled &&
        (E.isValidating ||
          E.validatingFields ||
          S.isValidating ||
          S.validatingFields) &&
        ((R || Array.from(h.mount)).forEach((G) => {
          G && (F ? Qt(o.validatingFields, G, F) : pn(o.validatingFields, G));
        }),
        w.state.next({
          validatingFields: o.validatingFields,
          isValidating: !pr(o.validatingFields),
        }));
    },
    N = (R, F = [], G, de, W = !0, J = !0) => {
      if (de && G && !i.disabled) {
        if (((d.action = !0), J && Array.isArray(Pe(s, R)))) {
          const _e = G(Pe(s, R), de.argA, de.argB);
          W && Qt(s, R, _e);
        }
        if (J && Array.isArray(Pe(o.errors, R))) {
          const _e = G(Pe(o.errors, R), de.argA, de.argB);
          (W && Qt(o.errors, R, _e), Ok(o.errors, R));
        }
        if (
          (E.touchedFields || S.touchedFields) &&
          J &&
          Array.isArray(Pe(o.touchedFields, R))
        ) {
          const _e = G(Pe(o.touchedFields, R), de.argA, de.argB);
          W && Qt(o.touchedFields, R, _e);
        }
        ((E.dirtyFields || S.dirtyFields) && (o.dirtyFields = Au(c, f)),
          w.state.next({
            name: R,
            isDirty: ue(R, F),
            dirtyFields: o.dirtyFields,
            errors: o.errors,
            isValid: o.isValid,
          }));
      } else Qt(f, R, F);
    },
    _ = (R, F) => {
      (Qt(o.errors, R, F), w.state.next({ errors: o.errors }));
    },
    P = (R) => {
      ((o.errors = R), w.state.next({ errors: o.errors, isValid: !1 }));
    },
    U = (R, F, G, de) => {
      const W = Pe(s, R);
      if (W) {
        const J = Pe(f, R, vn(G) ? Pe(c, R) : G);
        (vn(J) || (de && de.defaultChecked) || F
          ? Qt(f, R, F ? J : $C(W._f))
          : Ee(R, J),
          d.mount && x());
      }
    },
    V = (R, F, G, de, W) => {
      let J = !1,
        _e = !1;
      const Ie = { name: R };
      if (!i.disabled) {
        if (!G || de) {
          (E.isDirty || S.isDirty) &&
            ((_e = o.isDirty),
            (o.isDirty = Ie.isDirty = ue()),
            (J = _e !== Ie.isDirty));
          const Ze = zi(Pe(c, R), F);
          ((_e = !!Pe(o.dirtyFields, R)),
            Ze ? pn(o.dirtyFields, R) : Qt(o.dirtyFields, R, !0),
            (Ie.dirtyFields = o.dirtyFields),
            (J = J || ((E.dirtyFields || S.dirtyFields) && _e !== !Ze)));
        }
        if (G) {
          const Ze = Pe(o.touchedFields, R);
          Ze ||
            (Qt(o.touchedFields, R, G),
            (Ie.touchedFields = o.touchedFields),
            (J = J || ((E.touchedFields || S.touchedFields) && Ze !== G)));
        }
        J && W && w.state.next(Ie);
      }
      return J ? Ie : {};
    },
    oe = (R, F, G, de) => {
      const W = Pe(o.errors, R),
        J = (E.isValid || S.isValid) && Sa(F) && o.isValid !== F;
      if (
        (i.delayError && G
          ? ((m = D(() => _(R, G))), m(i.delayError))
          : (clearTimeout(g),
            (m = null),
            G ? Qt(o.errors, R, G) : pn(o.errors, R)),
        (G ? !zi(W, G) : W) || !pr(de) || J)
      ) {
        const _e = {
          ...de,
          ...(J && Sa(F) ? { isValid: F } : {}),
          errors: o.errors,
          name: R,
        };
        ((o = { ...o, ..._e }), w.state.next(_e));
      }
    },
    ne = async (R) => {
      z(R, !0);
      const F = await i.resolver(
        f,
        i.context,
        Tk(R || h.mount, s, i.criteriaMode, i.shouldUseNativeValidation)
      );
      return (z(R), F);
    },
    ce = async (R) => {
      const { errors: F } = await ne(R);
      if (R)
        for (const G of R) {
          const de = Pe(F, G);
          de ? Qt(o.errors, G, de) : pn(o.errors, G);
        }
      else o.errors = F;
      return F;
    },
    re = async (R, F, G = { valid: !0 }) => {
      for (const de in R) {
        const W = R[de];
        if (W) {
          const { _f: J, ..._e } = W;
          if (J) {
            const Ie = h.array.has(J.name),
              Ze = W._f && wk(W._f);
            Ze && E.validatingFields && z([de], !0);
            const tn = await QC(
              W,
              h.disabled,
              f,
              O,
              i.shouldUseNativeValidation && !F,
              Ie
            );
            if (
              (Ze && E.validatingFields && z([de]),
              tn[J.name] && ((G.valid = !1), F))
            )
              break;
            !F &&
              (Pe(tn, J.name)
                ? Ie
                  ? Ak(o.errors, tn, J.name)
                  : Qt(o.errors, J.name, tn[J.name])
                : pn(o.errors, J.name));
          }
          !pr(_e) && (await re(_e, F, G));
        }
      }
      return G.valid;
    },
    te = () => {
      for (const R of h.unMount) {
        const F = Pe(s, R);
        F &&
          (F._f.refs ? F._f.refs.every((G) => !Fm(G)) : !Fm(F._f.ref)) &&
          Ke(R);
      }
      h.unMount = new Set();
    },
    ue = (R, F) => !i.disabled && (R && F && Qt(f, R, F), !zi(ft(), c)),
    ae = (R, F, G) =>
      gk(R, h, { ...(d.mount ? f : vn(F) ? c : Ea(R) ? { [R]: F } : F) }, G, F),
    ie = (R) =>
      dy(Pe(d.mount ? f : c, R, i.shouldUnregister ? Pe(c, R, []) : [])),
    Ee = (R, F, G = {}) => {
      const de = Pe(s, R);
      let W = F;
      if (de) {
        const J = de._f;
        J &&
          (!J.disabled && Qt(f, R, jT(F, J)),
          (W = Sd(J.ref) && rr(F) ? '' : F),
          VT(J.ref)
            ? [...J.ref.options].forEach(
                (_e) => (_e.selected = W.includes(_e.value))
              )
            : J.refs
              ? $u(J.ref)
                ? J.refs.forEach((_e) => {
                    (!_e.defaultChecked || !_e.disabled) &&
                      (Array.isArray(W)
                        ? (_e.checked = !!W.find((Ie) => Ie === _e.value))
                        : (_e.checked = W === _e.value || !!W));
                  })
                : J.refs.forEach((_e) => (_e.checked = _e.value === W))
              : vy(J.ref)
                ? (J.ref.value = '')
                : ((J.ref.value = W),
                  J.ref.type || w.state.next({ name: R, values: Mn(f) })));
      }
      ((G.shouldDirty || G.shouldTouch) &&
        V(R, W, G.shouldTouch, G.shouldDirty, !0),
        G.shouldValidate && Qe(R));
    },
    Me = (R, F, G) => {
      for (const de in F) {
        if (!F.hasOwnProperty(de)) return;
        const W = F[de],
          J = R + '.' + de,
          _e = Pe(s, J);
        (h.array.has(R) || un(W) || (_e && !_e._f)) && !Ro(W)
          ? Me(J, W, G)
          : Ee(J, W, G);
      }
    },
    be = (R, F, G = {}) => {
      const de = Pe(s, R),
        W = h.array.has(R),
        J = Mn(F);
      (Qt(f, R, J),
        W
          ? (w.array.next({ name: R, values: Mn(f) }),
            (E.isDirty || E.dirtyFields || S.isDirty || S.dirtyFields) &&
              G.shouldDirty &&
              w.state.next({
                name: R,
                dirtyFields: Au(c, f),
                isDirty: ue(R, J),
              }))
          : de && !de._f && !rr(J)
            ? Me(R, J, G)
            : Ee(R, J, G),
        WC(R, h) && w.state.next({ ...o }),
        w.state.next({ name: d.mount ? R : void 0, values: Mn(f) }));
    },
    me = async (R) => {
      d.mount = !0;
      const F = R.target;
      let G = F.name,
        de = !0;
      const W = Pe(s, G),
        J = (Ze) => {
          de =
            Number.isNaN(Ze) ||
            (Ro(Ze) && isNaN(Ze.getTime())) ||
            zi(Ze, Pe(f, G, Ze));
        },
        _e = YC(i.mode),
        Ie = YC(i.reValidateMode);
      if (W) {
        let Ze, tn;
        const ir = F.type ? $C(W._f) : fk(R),
          ye = R.type === VC.BLUR || R.type === VC.FOCUS_OUT,
          ze =
            (!xk(W._f) && !i.resolver && !Pe(o.errors, G) && !W._f.deps) ||
            Dk(ye, Pe(o.touchedFields, G), o.isSubmitted, Ie, _e),
          ot = WC(G, h, ye);
        (Qt(f, G, ir),
          ye
            ? (W._f.onBlur && W._f.onBlur(R), m && m(0))
            : W._f.onChange && W._f.onChange(R));
        const wt = V(G, ir, ye),
          At = !pr(wt) || ot;
        if ((!ye && w.state.next({ name: G, type: R.type, values: Mn(f) }), ze))
          return (
            (E.isValid || S.isValid) &&
              (i.mode === 'onBlur' ? ye && x() : ye || x()),
            At && w.state.next({ name: G, ...(ot ? {} : wt) })
          );
        if ((!ye && ot && w.state.next({ ...o }), i.resolver)) {
          const { errors: nn } = await ne([G]);
          if ((J(ir), de)) {
            const Kt = qC(o.errors, s, G),
              Ln = qC(nn, s, Kt.name || G);
            ((Ze = Ln.error), (G = Ln.name), (tn = pr(nn)));
          }
        } else
          (z([G], !0),
            (Ze = (await QC(W, h.disabled, f, O, i.shouldUseNativeValidation))[
              G
            ]),
            z([G]),
            J(ir),
            de &&
              (Ze
                ? (tn = !1)
                : (E.isValid || S.isValid) && (tn = await re(s, !0))));
        de && (W._f.deps && Qe(W._f.deps), oe(G, tn, Ze, wt));
      }
    },
    Ve = (R, F) => {
      if (Pe(o.errors, F) && R.focus) return (R.focus(), 1);
    },
    Qe = async (R, F = {}) => {
      let G, de;
      const W = Lu(R);
      if (i.resolver) {
        const J = await ce(vn(R) ? R : W);
        ((G = pr(J)), (de = R ? !W.some((_e) => Pe(J, _e)) : G));
      } else
        R
          ? ((de = (
              await Promise.all(
                W.map(async (J) => {
                  const _e = Pe(s, J);
                  return await re(_e && _e._f ? { [J]: _e } : _e);
                })
              )
            ).every(Boolean)),
            !(!de && !o.isValid) && x())
          : (de = G = await re(s));
      return (
        w.state.next({
          ...(!Ea(R) || ((E.isValid || S.isValid) && G !== o.isValid)
            ? {}
            : { name: R }),
          ...(i.resolver || !R ? { isValid: G } : {}),
          errors: o.errors,
        }),
        F.shouldFocus && !de && ku(s, Ve, R ? W : h.mount),
        de
      );
    },
    ft = (R) => {
      const F = { ...(d.mount ? f : c) };
      return vn(R) ? F : Ea(R) ? Pe(F, R) : R.map((G) => Pe(F, G));
    },
    qt = (R, F) => ({
      invalid: !!Pe((F || o).errors, R),
      isDirty: !!Pe((F || o).dirtyFields, R),
      error: Pe((F || o).errors, R),
      isValidating: !!Pe(o.validatingFields, R),
      isTouched: !!Pe((F || o).touchedFields, R),
    }),
    Se = (R) => {
      (R && Lu(R).forEach((F) => pn(o.errors, F)),
        w.state.next({ errors: R ? o.errors : {} }));
    },
    ge = (R, F, G) => {
      const de = (Pe(s, R, { _f: {} })._f || {}).ref,
        W = Pe(o.errors, R) || {},
        { ref: J, message: _e, type: Ie, ...Ze } = W;
      (Qt(o.errors, R, { ...Ze, ...F, ref: de }),
        w.state.next({ name: R, errors: o.errors, isValid: !1 }),
        G && G.shouldFocus && de && de.focus && de.focus());
    },
    Te = (R, F) =>
      ta(R)
        ? w.state.subscribe({ next: (G) => R(ae(void 0, F), G) })
        : ae(R, F, !0),
    Ue = (R) =>
      w.state.subscribe({
        next: (F) => {
          _k(R.name, F.name, R.exact) &&
            Rk(F, R.formState || E, $e, R.reRenderRoot) &&
            R.callback({ values: { ...f }, ...o, ...F });
        },
      }).unsubscribe,
    j = (R) => (
      (d.mount = !0),
      (S = { ...S, ...R.formState }),
      Ue({ ...R, formState: S })
    ),
    Ke = (R, F = {}) => {
      for (const G of R ? Lu(R) : h.mount)
        (h.mount.delete(G),
          h.array.delete(G),
          F.keepValue || (pn(s, G), pn(f, G)),
          !F.keepError && pn(o.errors, G),
          !F.keepDirty && pn(o.dirtyFields, G),
          !F.keepTouched && pn(o.touchedFields, G),
          !F.keepIsValidating && pn(o.validatingFields, G),
          !i.shouldUnregister && !F.keepDefaultValue && pn(c, G));
      (w.state.next({ values: Mn(f) }),
        w.state.next({ ...o, ...(F.keepDirty ? { isDirty: ue() } : {}) }),
        !F.keepIsValid && x());
    },
    pe = ({ disabled: R, name: F }) => {
      ((Sa(R) && d.mount) || R || h.disabled.has(F)) &&
        (R ? h.disabled.add(F) : h.disabled.delete(F));
    },
    at = (R, F = {}) => {
      let G = Pe(s, R);
      const de = Sa(F.disabled) || Sa(i.disabled);
      return (
        Qt(s, R, {
          ...(G || {}),
          _f: {
            ...(G && G._f ? G._f : { ref: { name: R } }),
            name: R,
            mount: !0,
            ...F,
          },
        }),
        h.mount.add(R),
        G
          ? pe({ disabled: Sa(F.disabled) ? F.disabled : i.disabled, name: R })
          : U(R, !0, F.value),
        {
          ...(de ? { disabled: F.disabled || i.disabled } : {}),
          ...(i.progressive
            ? {
                required: !!F.required,
                min: Mu(F.min),
                max: Mu(F.max),
                minLength: Mu(F.minLength),
                maxLength: Mu(F.maxLength),
                pattern: Mu(F.pattern),
              }
            : {}),
          name: R,
          onChange: me,
          onBlur: me,
          ref: (W) => {
            if (W) {
              (at(R, F), (G = Pe(s, R)));
              const J =
                  (vn(W.value) &&
                    W.querySelectorAll &&
                    W.querySelectorAll('input,select,textarea')[0]) ||
                  W,
                _e = Sk(J),
                Ie = G._f.refs || [];
              if (_e ? Ie.find((Ze) => Ze === J) : J === G._f.ref) return;
              (Qt(s, R, {
                _f: {
                  ...G._f,
                  ...(_e
                    ? {
                        refs: [
                          ...Ie.filter(Fm),
                          J,
                          ...(Array.isArray(Pe(c, R)) ? [{}] : []),
                        ],
                        ref: { type: J.type, name: R },
                      }
                    : { ref: J }),
                },
              }),
                U(R, !1, void 0, J));
            } else
              ((G = Pe(s, R, {})),
                G._f && (G._f.mount = !1),
                (i.shouldUnregister || F.shouldUnregister) &&
                  !(pk(h.array, R) && d.action) &&
                  h.unMount.add(R));
          },
        }
      );
    },
    We = () => i.shouldFocusError && ku(s, Ve, h.mount),
    Je = (R) => {
      Sa(R) &&
        (w.state.next({ disabled: R }),
        ku(
          s,
          (F, G) => {
            const de = Pe(s, G);
            de &&
              ((F.disabled = de._f.disabled || R),
              Array.isArray(de._f.refs) &&
                de._f.refs.forEach((W) => {
                  W.disabled = de._f.disabled || R;
                }));
          },
          0,
          !1
        ));
    },
    ee = (R, F) => async (G) => {
      let de;
      G && (G.preventDefault && G.preventDefault(), G.persist && G.persist());
      let W = Mn(f);
      if ((w.state.next({ isSubmitting: !0 }), i.resolver)) {
        const { errors: J, values: _e } = await ne();
        ((o.errors = J), (W = Mn(_e)));
      } else await re(s);
      if (h.disabled.size) for (const J of h.disabled) pn(W, J);
      if ((pn(o.errors, 'root'), pr(o.errors))) {
        w.state.next({ errors: {} });
        try {
          await R(W, G);
        } catch (J) {
          de = J;
        }
      } else (F && (await F({ ...o.errors }, G)), We(), setTimeout(We));
      if (
        (w.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: pr(o.errors) && !de,
          submitCount: o.submitCount + 1,
          errors: o.errors,
        }),
        de)
      )
        throw de;
    },
    it = (R, F = {}) => {
      Pe(s, R) &&
        (vn(F.defaultValue)
          ? be(R, Mn(Pe(c, R)))
          : (be(R, F.defaultValue), Qt(c, R, Mn(F.defaultValue))),
        F.keepTouched || pn(o.touchedFields, R),
        F.keepDirty ||
          (pn(o.dirtyFields, R),
          (o.isDirty = F.defaultValue ? ue(R, Mn(Pe(c, R))) : ue())),
        F.keepError || (pn(o.errors, R), E.isValid && x()),
        w.state.next({ ...o }));
    },
    dt = (R, F = {}) => {
      const G = R ? Mn(R) : c,
        de = Mn(G),
        W = pr(R),
        J = W ? c : de;
      if ((F.keepDefaultValues || (c = G), !F.keepValues)) {
        if (F.keepDirtyValues) {
          const _e = new Set([...h.mount, ...Object.keys(Au(c, f))]);
          for (const Ie of Array.from(_e))
            Pe(o.dirtyFields, Ie) ? Qt(J, Ie, Pe(f, Ie)) : be(Ie, Pe(J, Ie));
        } else {
          if (fy && vn(R))
            for (const _e of h.mount) {
              const Ie = Pe(s, _e);
              if (Ie && Ie._f) {
                const Ze = Array.isArray(Ie._f.refs)
                  ? Ie._f.refs[0]
                  : Ie._f.ref;
                if (Sd(Ze)) {
                  const tn = Ze.closest('form');
                  if (tn) {
                    tn.reset();
                    break;
                  }
                }
              }
            }
          if (F.keepFieldsRef) for (const _e of h.mount) be(_e, Pe(J, _e));
          else s = {};
        }
        ((f = i.shouldUnregister ? (F.keepDefaultValues ? Mn(c) : {}) : Mn(J)),
          w.array.next({ values: { ...J } }),
          w.state.next({ values: { ...J } }));
      }
      ((h = {
        mount: F.keepDirtyValues ? h.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        disabled: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: '',
      }),
        (d.mount = !E.isValid || !!F.keepIsValid || !!F.keepDirtyValues),
        (d.watch = !!i.shouldUnregister),
        w.state.next({
          submitCount: F.keepSubmitCount ? o.submitCount : 0,
          isDirty: W
            ? !1
            : F.keepDirty
              ? o.isDirty
              : !!(F.keepDefaultValues && !zi(R, c)),
          isSubmitted: F.keepIsSubmitted ? o.isSubmitted : !1,
          dirtyFields: W
            ? {}
            : F.keepDirtyValues
              ? F.keepDefaultValues && f
                ? Au(c, f)
                : o.dirtyFields
              : F.keepDefaultValues && R
                ? Au(c, R)
                : F.keepDirty
                  ? o.dirtyFields
                  : {},
          touchedFields: F.keepTouched ? o.touchedFields : {},
          errors: F.keepErrors ? o.errors : {},
          isSubmitSuccessful: F.keepIsSubmitSuccessful
            ? o.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
        }));
    },
    Fe = (R, F) => dt(ta(R) ? R(f) : R, F),
    vt = (R, F = {}) => {
      const G = Pe(s, R),
        de = G && G._f;
      if (de) {
        const W = de.refs ? de.refs[0] : de.ref;
        W.focus && (W.focus(), F.shouldSelect && ta(W.select) && W.select());
      }
    },
    $e = (R) => {
      o = { ...o, ...R };
    },
    ln = {
      control: {
        register: at,
        unregister: Ke,
        getFieldState: qt,
        handleSubmit: ee,
        setError: ge,
        _subscribe: Ue,
        _runSchema: ne,
        _focusError: We,
        _getWatch: ae,
        _getDirty: ue,
        _setValid: x,
        _setFieldArray: N,
        _setDisabledField: pe,
        _setErrors: P,
        _getFieldArray: ie,
        _reset: dt,
        _resetDefaultValues: () =>
          ta(i.defaultValues) &&
          i.defaultValues().then((R) => {
            (Fe(R, i.resetOptions), w.state.next({ isLoading: !1 }));
          }),
        _removeUnmounted: te,
        _disableForm: Je,
        _subjects: w,
        _proxyFormState: E,
        get _fields() {
          return s;
        },
        get _formValues() {
          return f;
        },
        get _state() {
          return d;
        },
        set _state(R) {
          d = R;
        },
        get _defaultValues() {
          return c;
        },
        get _names() {
          return h;
        },
        set _names(R) {
          h = R;
        },
        get _formState() {
          return o;
        },
        get _options() {
          return i;
        },
        set _options(R) {
          i = { ...i, ...R };
        },
      },
      subscribe: j,
      trigger: Qe,
      register: at,
      handleSubmit: ee,
      watch: Te,
      setValue: be,
      getValues: ft,
      reset: Fe,
      resetField: it,
      clearErrors: Se,
      unregister: Ke,
      setError: ge,
      setFocus: vt,
      getFieldState: qt,
    };
  return { ...ln, formControl: ln };
}
function kk(r = {}) {
  const i = Tt.useRef(void 0),
    o = Tt.useRef(void 0),
    [s, c] = Tt.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: ta(r.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: r.errors || {},
      disabled: r.disabled || !1,
      isReady: !1,
      defaultValues: ta(r.defaultValues) ? void 0 : r.defaultValues,
    });
  if (!i.current)
    if (r.formControl)
      ((i.current = { ...r.formControl, formState: s }),
        r.defaultValues &&
          !ta(r.defaultValues) &&
          r.formControl.reset(r.defaultValues, r.resetOptions));
    else {
      const { formControl: d, ...h } = Lk(r);
      i.current = { ...h, formState: s };
    }
  const f = i.current.control;
  return (
    (f._options = r),
    yk(() => {
      const d = f._subscribe({
        formState: f._proxyFormState,
        callback: () => c({ ...f._formState }),
        reRenderRoot: !0,
      });
      return (
        c((h) => ({ ...h, isReady: !0 })),
        (f._formState.isReady = !0),
        d
      );
    }, [f]),
    Tt.useEffect(() => f._disableForm(r.disabled), [f, r.disabled]),
    Tt.useEffect(() => {
      (r.mode && (f._options.mode = r.mode),
        r.reValidateMode && (f._options.reValidateMode = r.reValidateMode));
    }, [f, r.mode, r.reValidateMode]),
    Tt.useEffect(() => {
      r.errors && (f._setErrors(r.errors), f._focusError());
    }, [f, r.errors]),
    Tt.useEffect(() => {
      r.shouldUnregister && f._subjects.state.next({ values: f._getWatch() });
    }, [f, r.shouldUnregister]),
    Tt.useEffect(() => {
      if (f._proxyFormState.isDirty) {
        const d = f._getDirty();
        d !== s.isDirty && f._subjects.state.next({ isDirty: d });
      }
    }, [f, s.isDirty]),
    Tt.useEffect(() => {
      r.values && !zi(r.values, o.current)
        ? (f._reset(r.values, {
            keepFieldsRef: !0,
            ...f._options.resetOptions,
          }),
          (o.current = r.values),
          c((d) => ({ ...d })))
        : f._resetDefaultValues();
    }, [f, r.values]),
    Tt.useEffect(() => {
      (f._state.mount || (f._setValid(), (f._state.mount = !0)),
        f._state.watch &&
          ((f._state.watch = !1), f._subjects.state.next({ ...f._formState })),
        f._removeUnmounted());
    }),
    (i.current.formState = mk(s, f)),
    i.current
  );
}
var YT = { exports: {} },
  It = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function () {
  function r(x) {
    if (typeof x == 'object' && x !== null) {
      var z = x.$$typeof;
      switch (z) {
        case i:
          switch (((x = x.type), x)) {
            case s:
            case f:
            case c:
            case g:
            case E:
            case O:
              return x;
            default:
              switch (((x = x && x.$$typeof), x)) {
                case h:
                case m:
                case w:
                case S:
                  return x;
                case d:
                  return x;
                default:
                  return z;
              }
          }
        case o:
          return z;
      }
    }
  }
  var i = Symbol.for('react.transitional.element'),
    o = Symbol.for('react.portal'),
    s = Symbol.for('react.fragment'),
    c = Symbol.for('react.strict_mode'),
    f = Symbol.for('react.profiler'),
    d = Symbol.for('react.consumer'),
    h = Symbol.for('react.context'),
    m = Symbol.for('react.forward_ref'),
    g = Symbol.for('react.suspense'),
    E = Symbol.for('react.suspense_list'),
    S = Symbol.for('react.memo'),
    w = Symbol.for('react.lazy'),
    O = Symbol.for('react.view_transition'),
    D = Symbol.for('react.client.reference');
  ((It.ContextConsumer = d),
    (It.ContextProvider = h),
    (It.Element = i),
    (It.ForwardRef = m),
    (It.Fragment = s),
    (It.Lazy = w),
    (It.Memo = S),
    (It.Portal = o),
    (It.Profiler = f),
    (It.StrictMode = c),
    (It.Suspense = g),
    (It.SuspenseList = E),
    (It.isContextConsumer = function (x) {
      return r(x) === d;
    }),
    (It.isContextProvider = function (x) {
      return r(x) === h;
    }),
    (It.isElement = function (x) {
      return typeof x == 'object' && x !== null && x.$$typeof === i;
    }),
    (It.isForwardRef = function (x) {
      return r(x) === m;
    }),
    (It.isFragment = function (x) {
      return r(x) === s;
    }),
    (It.isLazy = function (x) {
      return r(x) === w;
    }),
    (It.isMemo = function (x) {
      return r(x) === S;
    }),
    (It.isPortal = function (x) {
      return r(x) === o;
    }),
    (It.isProfiler = function (x) {
      return r(x) === f;
    }),
    (It.isStrictMode = function (x) {
      return r(x) === c;
    }),
    (It.isSuspense = function (x) {
      return r(x) === g;
    }),
    (It.isSuspenseList = function (x) {
      return r(x) === E;
    }),
    (It.isValidElementType = function (x) {
      return (
        typeof x == 'string' ||
        typeof x == 'function' ||
        x === s ||
        x === f ||
        x === c ||
        x === g ||
        x === E ||
        (typeof x == 'object' &&
          x !== null &&
          (x.$$typeof === w ||
            x.$$typeof === S ||
            x.$$typeof === h ||
            x.$$typeof === d ||
            x.$$typeof === m ||
            x.$$typeof === D ||
            x.getModuleId !== void 0))
      );
    }),
    (It.typeOf = r));
})();
YT.exports = It;
var my = YT.exports;
function Nk(r) {
  function i(Se, ge, Te, Ue, j) {
    for (
      var Ke = 0,
        pe = 0,
        at = 0,
        We = 0,
        Je,
        ee,
        it = 0,
        dt = 0,
        Fe,
        vt = (Fe = Je = 0),
        $e = 0,
        Ot = 0,
        ln = 0,
        R = 0,
        F = Te.length,
        G = F - 1,
        de,
        W = '',
        J = '',
        _e = '',
        Ie = '',
        Ze;
      $e < F;

    ) {
      if (
        ((ee = Te.charCodeAt($e)),
        $e === G &&
          pe + We + at + Ke !== 0 &&
          (pe !== 0 && (ee = pe === 47 ? 10 : 47),
          (We = at = Ke = 0),
          F++,
          G++),
        pe + We + at + Ke === 0)
      ) {
        if (
          $e === G &&
          (0 < Ot && (W = W.replace(w, '')), 0 < W.trim().length)
        ) {
          switch (ee) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              W += Te.charAt($e);
          }
          ee = 59;
        }
        switch (ee) {
          case 123:
            for (
              W = W.trim(), Je = W.charCodeAt(0), Fe = 1, R = ++$e;
              $e < F;

            ) {
              switch ((ee = Te.charCodeAt($e))) {
                case 123:
                  Fe++;
                  break;
                case 125:
                  Fe--;
                  break;
                case 47:
                  switch ((ee = Te.charCodeAt($e + 1))) {
                    case 42:
                    case 47:
                      e: {
                        for (vt = $e + 1; vt < G; ++vt)
                          switch (Te.charCodeAt(vt)) {
                            case 47:
                              if (
                                ee === 42 &&
                                Te.charCodeAt(vt - 1) === 42 &&
                                $e + 2 !== vt
                              ) {
                                $e = vt + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (ee === 47) {
                                $e = vt + 1;
                                break e;
                              }
                          }
                        $e = vt;
                      }
                  }
                  break;
                case 91:
                  ee++;
                case 40:
                  ee++;
                case 34:
                case 39:
                  for (; $e++ < G && Te.charCodeAt($e) !== ee; );
              }
              if (Fe === 0) break;
              $e++;
            }
            switch (
              ((Fe = Te.substring(R, $e)),
              Je === 0 && (Je = (W = W.replace(S, '').trim()).charCodeAt(0)),
              Je)
            ) {
              case 64:
                switch (
                  (0 < Ot && (W = W.replace(w, '')), (ee = W.charCodeAt(1)), ee)
                ) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    Ot = ge;
                    break;
                  default:
                    Ot = be;
                }
                if (
                  ((Fe = i(ge, Ot, Fe, ee, j + 1)),
                  (R = Fe.length),
                  0 < Ve &&
                    ((Ot = o(be, W, ln)),
                    (Ze = h(3, Fe, Ot, ge, ie, ae, R, ee, j, Ue)),
                    (W = Ot.join('')),
                    Ze !== void 0 &&
                      (R = (Fe = Ze.trim()).length) === 0 &&
                      ((ee = 0), (Fe = ''))),
                  0 < R)
                )
                  switch (ee) {
                    case 115:
                      W = W.replace(oe, d);
                    case 100:
                    case 109:
                    case 45:
                      Fe = W + '{' + Fe + '}';
                      break;
                    case 107:
                      ((W = W.replace(_, '$1 $2')),
                        (Fe = W + '{' + Fe + '}'),
                        (Fe =
                          Me === 1 || (Me === 2 && f('@' + Fe, 3))
                            ? '@-webkit-' + Fe + '@' + Fe
                            : '@' + Fe));
                      break;
                    default:
                      ((Fe = W + Fe), Ue === 112 && (Fe = ((J += Fe), '')));
                  }
                else Fe = '';
                break;
              default:
                Fe = i(ge, o(ge, W, ln), Fe, Ue, j + 1);
            }
            ((_e += Fe),
              (Fe = ln = Ot = vt = Je = 0),
              (W = ''),
              (ee = Te.charCodeAt(++$e)));
            break;
          case 125:
          case 59:
            if (
              ((W = (0 < Ot ? W.replace(w, '') : W).trim()), 1 < (R = W.length))
            )
              switch (
                (vt === 0 &&
                  ((Je = W.charCodeAt(0)),
                  Je === 45 || (96 < Je && 123 > Je)) &&
                  (R = (W = W.replace(' ', ':')).length),
                0 < Ve &&
                  (Ze = h(1, W, ge, Se, ie, ae, J.length, Ue, j, Ue)) !==
                    void 0 &&
                  (R = (W = Ze.trim()).length) === 0 &&
                  (W = '\0\0'),
                (Je = W.charCodeAt(0)),
                (ee = W.charCodeAt(1)),
                Je)
              ) {
                case 0:
                  break;
                case 64:
                  if (ee === 105 || ee === 99) {
                    Ie += W + Te.charAt($e);
                    break;
                  }
                default:
                  W.charCodeAt(R - 1) !== 58 &&
                    (J += c(W, Je, ee, W.charCodeAt(2)));
              }
            ((ln = Ot = vt = Je = 0), (W = ''), (ee = Te.charCodeAt(++$e)));
        }
      }
      switch (ee) {
        case 13:
        case 10:
          (pe === 47
            ? (pe = 0)
            : 1 + Je === 0 &&
              Ue !== 107 &&
              0 < W.length &&
              ((Ot = 1), (W += '\0')),
            0 < Ve * ft && h(0, W, ge, Se, ie, ae, J.length, Ue, j, Ue),
            (ae = 1),
            ie++);
          break;
        case 59:
        case 125:
          if (pe + We + at + Ke === 0) {
            ae++;
            break;
          }
        default:
          switch ((ae++, (de = Te.charAt($e)), ee)) {
            case 9:
            case 32:
              if (We + Ke + pe === 0)
                switch (it) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    de = '';
                    break;
                  default:
                    ee !== 32 && (de = ' ');
                }
              break;
            case 0:
              de = '\\0';
              break;
            case 12:
              de = '\\f';
              break;
            case 11:
              de = '\\v';
              break;
            case 38:
              We + pe + Ke === 0 && ((Ot = ln = 1), (de = '\f' + de));
              break;
            case 108:
              if (We + pe + Ke + Ee === 0 && 0 < vt)
                switch ($e - vt) {
                  case 2:
                    it === 112 && Te.charCodeAt($e - 3) === 58 && (Ee = it);
                  case 8:
                    dt === 111 && (Ee = dt);
                }
              break;
            case 58:
              We + pe + Ke === 0 && (vt = $e);
              break;
            case 44:
              pe + at + We + Ke === 0 && ((Ot = 1), (de += '\r'));
              break;
            case 34:
            case 39:
              pe === 0 && (We = We === ee ? 0 : We === 0 ? ee : We);
              break;
            case 91:
              We + pe + at === 0 && Ke++;
              break;
            case 93:
              We + pe + at === 0 && Ke--;
              break;
            case 41:
              We + pe + Ke === 0 && at--;
              break;
            case 40:
              if (We + pe + Ke === 0) {
                if (Je === 0)
                  switch (2 * it + 3 * dt) {
                    case 533:
                      break;
                    default:
                      Je = 1;
                  }
                at++;
              }
              break;
            case 64:
              pe + at + We + Ke + vt + Fe === 0 && (Fe = 1);
              break;
            case 42:
            case 47:
              if (!(0 < We + Ke + at))
                switch (pe) {
                  case 0:
                    switch (2 * ee + 3 * Te.charCodeAt($e + 1)) {
                      case 235:
                        pe = 47;
                        break;
                      case 220:
                        ((R = $e), (pe = 42));
                    }
                    break;
                  case 42:
                    ee === 47 &&
                      it === 42 &&
                      R + 2 !== $e &&
                      (Te.charCodeAt(R + 2) === 33 &&
                        (J += Te.substring(R, $e + 1)),
                      (de = ''),
                      (pe = 0));
                }
          }
          pe === 0 && (W += de);
      }
      ((dt = it), (it = ee), $e++);
    }
    if (((R = J.length), 0 < R)) {
      if (
        ((Ot = ge),
        0 < Ve &&
          ((Ze = h(2, J, Ot, Se, ie, ae, R, Ue, j, Ue)),
          Ze !== void 0 && (J = Ze).length === 0))
      )
        return Ie + J + _e;
      if (((J = Ot.join(',') + '{' + J + '}'), Me * Ee !== 0)) {
        switch ((Me !== 2 || f(J, 2) || (Ee = 0), Ee)) {
          case 111:
            J = J.replace(U, ':-moz-$1') + J;
            break;
          case 112:
            J =
              J.replace(P, '::-webkit-input-$1') +
              J.replace(P, '::-moz-$1') +
              J.replace(P, ':-ms-input-$1') +
              J;
        }
        Ee = 0;
      }
    }
    return Ie + J + _e;
  }
  function o(Se, ge, Te) {
    var Ue = ge.trim().split(z);
    ge = Ue;
    var j = Ue.length,
      Ke = Se.length;
    switch (Ke) {
      case 0:
      case 1:
        var pe = 0;
        for (Se = Ke === 0 ? '' : Se[0] + ' '; pe < j; ++pe)
          ge[pe] = s(Se, ge[pe], Te).trim();
        break;
      default:
        var at = (pe = 0);
        for (ge = []; pe < j; ++pe)
          for (var We = 0; We < Ke; ++We)
            ge[at++] = s(Se[We] + ' ', Ue[pe], Te).trim();
    }
    return ge;
  }
  function s(Se, ge, Te) {
    var Ue = ge.charCodeAt(0);
    switch ((33 > Ue && (Ue = (ge = ge.trim()).charCodeAt(0)), Ue)) {
      case 38:
        return ge.replace(N, '$1' + Se.trim());
      case 58:
        return Se.trim() + ge.replace(N, '$1' + Se.trim());
      default:
        if (0 < 1 * Te && 0 < ge.indexOf('\f'))
          return ge.replace(
            N,
            (Se.charCodeAt(0) === 58 ? '' : '$1') + Se.trim()
          );
    }
    return Se + ge;
  }
  function c(Se, ge, Te, Ue) {
    var j = Se + ';',
      Ke = 2 * ge + 3 * Te + 4 * Ue;
    if (Ke === 944) {
      Se = j.indexOf(':', 9) + 1;
      var pe = j.substring(Se, j.length - 1).trim();
      return (
        (pe = j.substring(0, Se).trim() + pe + ';'),
        Me === 1 || (Me === 2 && f(pe, 1)) ? '-webkit-' + pe + pe : pe
      );
    }
    if (Me === 0 || (Me === 2 && !f(j, 1))) return j;
    switch (Ke) {
      case 1015:
        return j.charCodeAt(10) === 97 ? '-webkit-' + j + j : j;
      case 951:
        return j.charCodeAt(3) === 116 ? '-webkit-' + j + j : j;
      case 963:
        return j.charCodeAt(5) === 110 ? '-webkit-' + j + j : j;
      case 1009:
        if (j.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return '-webkit-' + j + j;
      case 978:
        return '-webkit-' + j + '-moz-' + j + j;
      case 1019:
      case 983:
        return '-webkit-' + j + '-moz-' + j + '-ms-' + j + j;
      case 883:
        if (j.charCodeAt(8) === 45) return '-webkit-' + j + j;
        if (0 < j.indexOf('image-set(', 11))
          return j.replace(ue, '$1-webkit-$2') + j;
        break;
      case 932:
        if (j.charCodeAt(4) === 45)
          switch (j.charCodeAt(5)) {
            case 103:
              return (
                '-webkit-box-' +
                j.replace('-grow', '') +
                '-webkit-' +
                j +
                '-ms-' +
                j.replace('grow', 'positive') +
                j
              );
            case 115:
              return (
                '-webkit-' + j + '-ms-' + j.replace('shrink', 'negative') + j
              );
            case 98:
              return (
                '-webkit-' +
                j +
                '-ms-' +
                j.replace('basis', 'preferred-size') +
                j
              );
          }
        return '-webkit-' + j + '-ms-' + j + j;
      case 964:
        return '-webkit-' + j + '-ms-flex-' + j + j;
      case 1023:
        if (j.charCodeAt(8) !== 99) break;
        return (
          (pe = j
            .substring(j.indexOf(':', 15))
            .replace('flex-', '')
            .replace('space-between', 'justify')),
          '-webkit-box-pack' + pe + '-webkit-' + j + '-ms-flex-pack' + pe + j
        );
      case 1005:
        return D.test(j)
          ? j.replace(O, ':-webkit-') + j.replace(O, ':-moz-') + j
          : j;
      case 1e3:
        switch (
          ((pe = j.substring(13).trim()),
          (ge = pe.indexOf('-') + 1),
          pe.charCodeAt(0) + pe.charCodeAt(ge))
        ) {
          case 226:
            pe = j.replace(V, 'tb');
            break;
          case 232:
            pe = j.replace(V, 'tb-rl');
            break;
          case 220:
            pe = j.replace(V, 'lr');
            break;
          default:
            return j;
        }
        return '-webkit-' + j + '-ms-' + pe + j;
      case 1017:
        if (j.indexOf('sticky', 9) === -1) break;
      case 975:
        switch (
          ((ge = (j = Se).length - 10),
          (pe = (j.charCodeAt(ge) === 33 ? j.substring(0, ge) : j)
            .substring(Se.indexOf(':', 7) + 1)
            .trim()),
          (Ke = pe.charCodeAt(0) + (pe.charCodeAt(7) | 0)))
        ) {
          case 203:
            if (111 > pe.charCodeAt(8)) break;
          case 115:
            j = j.replace(pe, '-webkit-' + pe) + ';' + j;
            break;
          case 207:
          case 102:
            j =
              j.replace(pe, '-webkit-' + (102 < Ke ? 'inline-' : '') + 'box') +
              ';' +
              j.replace(pe, '-webkit-' + pe) +
              ';' +
              j.replace(pe, '-ms-' + pe + 'box') +
              ';' +
              j;
        }
        return j + ';';
      case 938:
        if (j.charCodeAt(5) === 45)
          switch (j.charCodeAt(6)) {
            case 105:
              return (
                (pe = j.replace('-items', '')),
                '-webkit-' + j + '-webkit-box-' + pe + '-ms-flex-' + pe + j
              );
            case 115:
              return '-webkit-' + j + '-ms-flex-item-' + j.replace(ce, '') + j;
            default:
              return (
                '-webkit-' +
                j +
                '-ms-flex-line-pack' +
                j.replace('align-content', '').replace(ce, '') +
                j
              );
          }
        break;
      case 973:
      case 989:
        if (j.charCodeAt(3) !== 45 || j.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (te.test(Se) === !0)
          return (pe = Se.substring(Se.indexOf(':') + 1)).charCodeAt(0) === 115
            ? c(Se.replace('stretch', 'fill-available'), ge, Te, Ue).replace(
                ':fill-available',
                ':stretch'
              )
            : j.replace(pe, '-webkit-' + pe) +
                j.replace(pe, '-moz-' + pe.replace('fill-', '')) +
                j;
        break;
      case 962:
        if (
          ((j =
            '-webkit-' + j + (j.charCodeAt(5) === 102 ? '-ms-' + j : '') + j),
          Te + Ue === 211 &&
            j.charCodeAt(13) === 105 &&
            0 < j.indexOf('transform', 10))
        )
          return (
            j.substring(0, j.indexOf(';', 27) + 1).replace(x, '$1-webkit-$2') +
            j
          );
    }
    return j;
  }
  function f(Se, ge) {
    var Te = Se.indexOf(ge === 1 ? ':' : '{'),
      Ue = Se.substring(0, ge !== 3 ? Te : 10);
    return (
      (Te = Se.substring(Te + 1, Se.length - 1)),
      Qe(ge !== 2 ? Ue : Ue.replace(re, '$1'), Te, ge)
    );
  }
  function d(Se, ge) {
    var Te = c(ge, ge.charCodeAt(0), ge.charCodeAt(1), ge.charCodeAt(2));
    return Te !== ge + ';'
      ? Te.replace(ne, ' or ($1)').substring(4)
      : '(' + ge + ')';
  }
  function h(Se, ge, Te, Ue, j, Ke, pe, at, We, Je) {
    for (var ee = 0, it = ge, dt; ee < Ve; ++ee)
      switch ((dt = me[ee].call(E, Se, it, Te, Ue, j, Ke, pe, at, We, Je))) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          it = dt;
      }
    if (it !== ge) return it;
  }
  function m(Se) {
    switch (Se) {
      case void 0:
      case null:
        Ve = me.length = 0;
        break;
      default:
        if (typeof Se == 'function') me[Ve++] = Se;
        else if (typeof Se == 'object')
          for (var ge = 0, Te = Se.length; ge < Te; ++ge) m(Se[ge]);
        else ft = !!Se | 0;
    }
    return m;
  }
  function g(Se) {
    return (
      (Se = Se.prefix),
      Se !== void 0 &&
        ((Qe = null),
        Se
          ? typeof Se != 'function'
            ? (Me = 1)
            : ((Me = 2), (Qe = Se))
          : (Me = 0)),
      g
    );
  }
  function E(Se, ge) {
    var Te = Se;
    if (
      (33 > Te.charCodeAt(0) && (Te = Te.trim()),
      (qt = Te),
      (Te = [qt]),
      0 < Ve)
    ) {
      var Ue = h(-1, ge, Te, Te, ie, ae, 0, 0, 0, 0);
      Ue !== void 0 && typeof Ue == 'string' && (ge = Ue);
    }
    var j = i(be, Te, ge, 0, 0);
    return (
      0 < Ve &&
        ((Ue = h(-2, j, Te, Te, ie, ae, j.length, 0, 0, 0)),
        Ue !== void 0 && (j = Ue)),
      (qt = ''),
      (Ee = 0),
      (ae = ie = 1),
      j
    );
  }
  var S = /^\0+/g,
    w = /[\0\r\f]/g,
    O = /: */g,
    D = /zoo|gra/,
    x = /([,: ])(transform)/g,
    z = /,\r+?/g,
    N = /([\t\r\n ])*\f?&/g,
    _ = /@(k\w+)\s*(\S*)\s*/,
    P = /::(place)/g,
    U = /:(read-only)/g,
    V = /[svh]\w+-[tblr]{2}/,
    oe = /\(\s*(.*)\s*\)/g,
    ne = /([\s\S]*?);/g,
    ce = /-self|flex-/g,
    re = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
    te = /stretch|:\s*\w+\-(?:conte|avail)/,
    ue = /([^-])(image-set\()/,
    ae = 1,
    ie = 1,
    Ee = 0,
    Me = 1,
    be = [],
    me = [],
    Ve = 0,
    Qe = null,
    ft = 0,
    qt = '';
  return ((E.use = m), (E.set = g), r !== void 0 && g(r), E);
}
var Pk = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1,
};
function zk(r) {
  var i = Object.create(null);
  return function (o) {
    return (i[o] === void 0 && (i[o] = r(o)), i[o]);
  };
}
var Uk =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  KC = zk(function (r) {
    return (
      Uk.test(r) ||
      (r.charCodeAt(0) === 111 &&
        r.charCodeAt(1) === 110 &&
        r.charCodeAt(2) < 91)
    );
  }),
  GT = { exports: {} },
  zt = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function () {
  var r = typeof Symbol == 'function' && Symbol.for,
    i = r ? Symbol.for('react.element') : 60103,
    o = r ? Symbol.for('react.portal') : 60106,
    s = r ? Symbol.for('react.fragment') : 60107,
    c = r ? Symbol.for('react.strict_mode') : 60108,
    f = r ? Symbol.for('react.profiler') : 60114,
    d = r ? Symbol.for('react.provider') : 60109,
    h = r ? Symbol.for('react.context') : 60110,
    m = r ? Symbol.for('react.async_mode') : 60111,
    g = r ? Symbol.for('react.concurrent_mode') : 60111,
    E = r ? Symbol.for('react.forward_ref') : 60112,
    S = r ? Symbol.for('react.suspense') : 60113,
    w = r ? Symbol.for('react.suspense_list') : 60120,
    O = r ? Symbol.for('react.memo') : 60115,
    D = r ? Symbol.for('react.lazy') : 60116,
    x = r ? Symbol.for('react.block') : 60121,
    z = r ? Symbol.for('react.fundamental') : 60117,
    N = r ? Symbol.for('react.responder') : 60118,
    _ = r ? Symbol.for('react.scope') : 60119;
  function P(ee) {
    return (
      typeof ee == 'string' ||
      typeof ee == 'function' ||
      ee === s ||
      ee === g ||
      ee === f ||
      ee === c ||
      ee === S ||
      ee === w ||
      (typeof ee == 'object' &&
        ee !== null &&
        (ee.$$typeof === D ||
          ee.$$typeof === O ||
          ee.$$typeof === d ||
          ee.$$typeof === h ||
          ee.$$typeof === E ||
          ee.$$typeof === z ||
          ee.$$typeof === N ||
          ee.$$typeof === _ ||
          ee.$$typeof === x))
    );
  }
  function U(ee) {
    if (typeof ee == 'object' && ee !== null) {
      var it = ee.$$typeof;
      switch (it) {
        case i:
          var dt = ee.type;
          switch (dt) {
            case m:
            case g:
            case s:
            case f:
            case c:
            case S:
              return dt;
            default:
              var Fe = dt && dt.$$typeof;
              switch (Fe) {
                case h:
                case E:
                case D:
                case O:
                case d:
                  return Fe;
                default:
                  return it;
              }
          }
        case o:
          return it;
      }
    }
  }
  var V = m,
    oe = g,
    ne = h,
    ce = d,
    re = i,
    te = E,
    ue = s,
    ae = D,
    ie = O,
    Ee = o,
    Me = f,
    be = c,
    me = S,
    Ve = !1;
  function Qe(ee) {
    return (
      Ve ||
        ((Ve = !0),
        console.warn(
          'The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.'
        )),
      ft(ee) || U(ee) === m
    );
  }
  function ft(ee) {
    return U(ee) === g;
  }
  function qt(ee) {
    return U(ee) === h;
  }
  function Se(ee) {
    return U(ee) === d;
  }
  function ge(ee) {
    return typeof ee == 'object' && ee !== null && ee.$$typeof === i;
  }
  function Te(ee) {
    return U(ee) === E;
  }
  function Ue(ee) {
    return U(ee) === s;
  }
  function j(ee) {
    return U(ee) === D;
  }
  function Ke(ee) {
    return U(ee) === O;
  }
  function pe(ee) {
    return U(ee) === o;
  }
  function at(ee) {
    return U(ee) === f;
  }
  function We(ee) {
    return U(ee) === c;
  }
  function Je(ee) {
    return U(ee) === S;
  }
  ((zt.AsyncMode = V),
    (zt.ConcurrentMode = oe),
    (zt.ContextConsumer = ne),
    (zt.ContextProvider = ce),
    (zt.Element = re),
    (zt.ForwardRef = te),
    (zt.Fragment = ue),
    (zt.Lazy = ae),
    (zt.Memo = ie),
    (zt.Portal = Ee),
    (zt.Profiler = Me),
    (zt.StrictMode = be),
    (zt.Suspense = me),
    (zt.isAsyncMode = Qe),
    (zt.isConcurrentMode = ft),
    (zt.isContextConsumer = qt),
    (zt.isContextProvider = Se),
    (zt.isElement = ge),
    (zt.isForwardRef = Te),
    (zt.isFragment = Ue),
    (zt.isLazy = j),
    (zt.isMemo = Ke),
    (zt.isPortal = pe),
    (zt.isProfiler = at),
    (zt.isStrictMode = We),
    (zt.isSuspense = Je),
    (zt.isValidElementType = P),
    (zt.typeOf = U));
})();
GT.exports = zt;
var Fk = GT.exports,
  yy = Fk,
  Vk = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  Hk = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  Ik = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  WT = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  gy = {};
gy[yy.ForwardRef] = Ik;
gy[yy.Memo] = WT;
function JC(r) {
  return yy.isMemo(r) ? WT : gy[r.$$typeof] || Vk;
}
var Bk = Object.defineProperty,
  jk = Object.getOwnPropertyNames,
  ZC = Object.getOwnPropertySymbols,
  $k = Object.getOwnPropertyDescriptor,
  Yk = Object.getPrototypeOf,
  eT = Object.prototype;
function qT(r, i, o) {
  if (typeof i != 'string') {
    if (eT) {
      var s = Yk(i);
      s && s !== eT && qT(r, s, o);
    }
    var c = jk(i);
    ZC && (c = c.concat(ZC(i)));
    for (var f = JC(r), d = JC(i), h = 0; h < c.length; ++h) {
      var m = c[h];
      if (!Hk[m] && !(o && o[m]) && !(d && d[m]) && !(f && f[m])) {
        var g = $k(i, m);
        try {
          Bk(r, m, g);
        } catch {}
      }
    }
  }
  return r;
}
var Gk = qT;
const Wk = bT(Gk);
function Za() {
  return (Za =
    Object.assign ||
    function (r) {
      for (var i = 1; i < arguments.length; i++) {
        var o = arguments[i];
        for (var s in o)
          Object.prototype.hasOwnProperty.call(o, s) && (r[s] = o[s]);
      }
      return r;
    }).apply(this, arguments);
}
var tT = function (r, i) {
    for (var o = [r[0]], s = 0, c = i.length; s < c; s += 1)
      o.push(i[s], r[s + 1]);
    return o;
  },
  Km = function (r) {
    return (
      r !== null &&
      typeof r == 'object' &&
      (r.toString ? r.toString() : Object.prototype.toString.call(r)) ===
        '[object Object]' &&
      !my.typeOf(r)
    );
  },
  Td = Object.freeze([]),
  Vi = Object.freeze({});
function wd(r) {
  return typeof r == 'function';
}
function Jm(r) {
  return (typeof r == 'string' && r) || r.displayName || r.name || 'Component';
}
function XT(r) {
  return r && typeof r.styledComponentId == 'string';
}
var kl =
    (typeof process < 'u' &&
      process.env !== void 0 &&
      ({}.REACT_APP_SC_ATTR || {}.SC_ATTR)) ||
    'data-styled',
  by = typeof window < 'u' && 'HTMLElement' in window,
  qk = !!(typeof SC_DISABLE_SPEEDY == 'boolean'
    ? SC_DISABLE_SPEEDY
    : typeof process < 'u' &&
      process.env !== void 0 &&
      ({}.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      {}.REACT_APP_SC_DISABLE_SPEEDY !== ''
        ? {}.REACT_APP_SC_DISABLE_SPEEDY !== 'false' &&
          {}.REACT_APP_SC_DISABLE_SPEEDY
        : !({}.SC_DISABLE_SPEEDY !== void 0 && {}.SC_DISABLE_SPEEDY !== '') ||
          ({}.SC_DISABLE_SPEEDY !== 'false' && {}.SC_DISABLE_SPEEDY))),
  Xk = {
    1: `Cannot create styled-component for component: %s.

`,
    2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`,
    3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`,
    4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`,
    5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`,
    6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`,
    7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',
    8: `ThemeProvider: Please make your "theme" prop an object.

`,
    9: 'Missing document `<head>`\n\n',
    10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`,
    11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`,
    12: 'It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n',
    13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`,
    14: `ThemeProvider: "theme" prop is required.

`,
    15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",
    16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`,
    17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`,
  };
function Qk() {
  for (
    var r = arguments.length <= 0 ? void 0 : arguments[0],
      i = [],
      o = 1,
      s = arguments.length;
    o < s;
    o += 1
  )
    i.push(o < 0 || arguments.length <= o ? void 0 : arguments[o]);
  return (
    i.forEach(function (c) {
      r = r.replace(/%[a-z]/, c);
    }),
    r
  );
}
function Ul(r) {
  for (
    var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), s = 1;
    s < i;
    s++
  )
    o[s - 1] = arguments[s];
  throw new Error(Qk.apply(void 0, [Xk[r]].concat(o)).trim());
}
var Kk = (function () {
    function r(o) {
      ((this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = o));
    }
    var i = r.prototype;
    return (
      (i.indexOfGroup = function (o) {
        for (var s = 0, c = 0; c < o; c++) s += this.groupSizes[c];
        return s;
      }),
      (i.insertRules = function (o, s) {
        if (o >= this.groupSizes.length) {
          for (var c = this.groupSizes, f = c.length, d = f; o >= d; )
            (d <<= 1) < 0 && Ul(16, '' + o);
          ((this.groupSizes = new Uint32Array(d)),
            this.groupSizes.set(c),
            (this.length = d));
          for (var h = f; h < d; h++) this.groupSizes[h] = 0;
        }
        for (var m = this.indexOfGroup(o + 1), g = 0, E = s.length; g < E; g++)
          this.tag.insertRule(m, s[g]) && (this.groupSizes[o]++, m++);
      }),
      (i.clearGroup = function (o) {
        if (o < this.length) {
          var s = this.groupSizes[o],
            c = this.indexOfGroup(o),
            f = c + s;
          this.groupSizes[o] = 0;
          for (var d = c; d < f; d++) this.tag.deleteRule(c);
        }
      }),
      (i.getGroup = function (o) {
        var s = '';
        if (o >= this.length || this.groupSizes[o] === 0) return s;
        for (
          var c = this.groupSizes[o],
            f = this.indexOfGroup(o),
            d = f + c,
            h = f;
          h < d;
          h++
        )
          s +=
            this.tag.getRule(h) +
            `/*!sc*/
`;
        return s;
      }),
      r
    );
  })(),
  hd = new Map(),
  xd = new Map(),
  Nu = 1,
  od = function (r) {
    if (hd.has(r)) return hd.get(r);
    for (; xd.has(Nu); ) Nu++;
    var i = Nu++;
    return (
      ((0 | i) < 0 || i > 1 << 30) && Ul(16, '' + i),
      hd.set(r, i),
      xd.set(i, r),
      i
    );
  },
  Jk = function (r) {
    return xd.get(r);
  },
  Zk = function (r, i) {
    (i >= Nu && (Nu = i + 1), hd.set(r, i), xd.set(i, r));
  },
  eN = 'style[' + kl + '][data-styled-version="5.3.11"]',
  tN = new RegExp('^' + kl + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  nN = function (r, i, o) {
    for (var s, c = o.split(','), f = 0, d = c.length; f < d; f++)
      (s = c[f]) && r.registerName(i, s);
  },
  rN = function (r, i) {
    for (
      var o = (i.textContent || '').split(`/*!sc*/
`),
        s = [],
        c = 0,
        f = o.length;
      c < f;
      c++
    ) {
      var d = o[c].trim();
      if (d) {
        var h = d.match(tN);
        if (h) {
          var m = 0 | parseInt(h[1], 10),
            g = h[2];
          (m !== 0 && (Zk(g, m), nN(r, g, h[3]), r.getTag().insertRules(m, s)),
            (s.length = 0));
        } else s.push(d);
      }
    }
  },
  aN = function () {
    return typeof __webpack_nonce__ < 'u' ? __webpack_nonce__ : null;
  },
  QT = function (r) {
    var i = document.head,
      o = r || i,
      s = document.createElement('style'),
      c = (function (h) {
        for (var m = h.childNodes, g = m.length; g >= 0; g--) {
          var E = m[g];
          if (E && E.nodeType === 1 && E.hasAttribute(kl)) return E;
        }
      })(o),
      f = c !== void 0 ? c.nextSibling : null;
    (s.setAttribute(kl, 'active'),
      s.setAttribute('data-styled-version', '5.3.11'));
    var d = aN();
    return (d && s.setAttribute('nonce', d), o.insertBefore(s, f), s);
  },
  iN = (function () {
    function r(o) {
      var s = (this.element = QT(o));
      (s.appendChild(document.createTextNode('')),
        (this.sheet = (function (c) {
          if (c.sheet) return c.sheet;
          for (var f = document.styleSheets, d = 0, h = f.length; d < h; d++) {
            var m = f[d];
            if (m.ownerNode === c) return m;
          }
          Ul(17);
        })(s)),
        (this.length = 0));
    }
    var i = r.prototype;
    return (
      (i.insertRule = function (o, s) {
        try {
          return (this.sheet.insertRule(s, o), this.length++, !0);
        } catch {
          return !1;
        }
      }),
      (i.deleteRule = function (o) {
        (this.sheet.deleteRule(o), this.length--);
      }),
      (i.getRule = function (o) {
        var s = this.sheet.cssRules[o];
        return s !== void 0 && typeof s.cssText == 'string' ? s.cssText : '';
      }),
      r
    );
  })(),
  oN = (function () {
    function r(o) {
      var s = (this.element = QT(o));
      ((this.nodes = s.childNodes), (this.length = 0));
    }
    var i = r.prototype;
    return (
      (i.insertRule = function (o, s) {
        if (o <= this.length && o >= 0) {
          var c = document.createTextNode(s),
            f = this.nodes[o];
          return (this.element.insertBefore(c, f || null), this.length++, !0);
        }
        return !1;
      }),
      (i.deleteRule = function (o) {
        (this.element.removeChild(this.nodes[o]), this.length--);
      }),
      (i.getRule = function (o) {
        return o < this.length ? this.nodes[o].textContent : '';
      }),
      r
    );
  })(),
  lN = (function () {
    function r(o) {
      ((this.rules = []), (this.length = 0));
    }
    var i = r.prototype;
    return (
      (i.insertRule = function (o, s) {
        return (
          o <= this.length && (this.rules.splice(o, 0, s), this.length++, !0)
        );
      }),
      (i.deleteRule = function (o) {
        (this.rules.splice(o, 1), this.length--);
      }),
      (i.getRule = function (o) {
        return o < this.length ? this.rules[o] : '';
      }),
      r
    );
  })(),
  nT = by,
  sN = { isServer: !by, useCSSOMInjection: !qk },
  KT = (function () {
    function r(o, s, c) {
      (o === void 0 && (o = Vi),
        s === void 0 && (s = {}),
        (this.options = Za({}, sN, {}, o)),
        (this.gs = s),
        (this.names = new Map(c)),
        (this.server = !!o.isServer),
        !this.server &&
          by &&
          nT &&
          ((nT = !1),
          (function (f) {
            for (
              var d = document.querySelectorAll(eN), h = 0, m = d.length;
              h < m;
              h++
            ) {
              var g = d[h];
              g &&
                g.getAttribute(kl) !== 'active' &&
                (rN(f, g), g.parentNode && g.parentNode.removeChild(g));
            }
          })(this)));
    }
    r.registerId = function (o) {
      return od(o);
    };
    var i = r.prototype;
    return (
      (i.reconstructWithOptions = function (o, s) {
        return (
          s === void 0 && (s = !0),
          new r(
            Za({}, this.options, {}, o),
            this.gs,
            (s && this.names) || void 0
          )
        );
      }),
      (i.allocateGSInstance = function (o) {
        return (this.gs[o] = (this.gs[o] || 0) + 1);
      }),
      (i.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((c = (s = this.options).isServer),
            (f = s.useCSSOMInjection),
            (d = s.target),
            (o = c ? new lN(d) : f ? new iN(d) : new oN(d)),
            new Kk(o)))
        );
        var o, s, c, f, d;
      }),
      (i.hasNameForId = function (o, s) {
        return this.names.has(o) && this.names.get(o).has(s);
      }),
      (i.registerName = function (o, s) {
        if ((od(o), this.names.has(o))) this.names.get(o).add(s);
        else {
          var c = new Set();
          (c.add(s), this.names.set(o, c));
        }
      }),
      (i.insertRules = function (o, s, c) {
        (this.registerName(o, s), this.getTag().insertRules(od(o), c));
      }),
      (i.clearNames = function (o) {
        this.names.has(o) && this.names.get(o).clear();
      }),
      (i.clearRules = function (o) {
        (this.getTag().clearGroup(od(o)), this.clearNames(o));
      }),
      (i.clearTag = function () {
        this.tag = void 0;
      }),
      (i.toString = function () {
        return (function (o) {
          for (var s = o.getTag(), c = s.length, f = '', d = 0; d < c; d++) {
            var h = Jk(d);
            if (h !== void 0) {
              var m = o.names.get(h),
                g = s.getGroup(d);
              if (m && g && m.size) {
                var E = kl + '.g' + d + '[id="' + h + '"]',
                  S = '';
                (m !== void 0 &&
                  m.forEach(function (w) {
                    w.length > 0 && (S += w + ',');
                  }),
                  (f +=
                    '' +
                    g +
                    E +
                    '{content:"' +
                    S +
                    `"}/*!sc*/
`));
              }
            }
          }
          return f;
        })(this);
      }),
      r
    );
  })(),
  uN = /(a)(d)/gi,
  rT = function (r) {
    return String.fromCharCode(r + (r > 25 ? 39 : 97));
  };
function Zm(r) {
  var i,
    o = '';
  for (i = Math.abs(r); i > 52; i = (i / 52) | 0) o = rT(i % 52) + o;
  return (rT(i % 52) + o).replace(uN, '$1-$2');
}
var xo = function (r, i) {
    for (var o = i.length; o; ) r = (33 * r) ^ i.charCodeAt(--o);
    return r;
  },
  JT = function (r) {
    return xo(5381, r);
  },
  cN = JT('5.3.11'),
  fN = (function () {
    function r(i, o, s) {
      ((this.rules = i),
        (this.staticRulesId = ''),
        (this.isStatic = !1),
        (this.componentId = o),
        (this.baseHash = xo(cN, o)),
        (this.baseStyle = s),
        KT.registerId(o));
    }
    return (
      (r.prototype.generateAndInjectStyles = function (i, o, s) {
        var c = this.componentId,
          f = [];
        if (
          (this.baseStyle &&
            f.push(this.baseStyle.generateAndInjectStyles(i, o, s)),
          this.isStatic && !s.hash)
        )
          if (this.staticRulesId && o.hasNameForId(c, this.staticRulesId))
            f.push(this.staticRulesId);
          else {
            var d = Nl(this.rules, i, o, s).join(''),
              h = Zm(xo(this.baseHash, d) >>> 0);
            if (!o.hasNameForId(c, h)) {
              var m = s(d, '.' + h, void 0, c);
              o.insertRules(c, h, m);
            }
            (f.push(h), (this.staticRulesId = h));
          }
        else {
          for (
            var g = this.rules.length,
              E = xo(this.baseHash, s.hash),
              S = '',
              w = 0;
            w < g;
            w++
          ) {
            var O = this.rules[w];
            if (typeof O == 'string') ((S += O), (E = xo(E, O + w)));
            else if (O) {
              var D = Nl(O, i, o, s),
                x = Array.isArray(D) ? D.join('') : D;
              ((E = xo(E, x + w)), (S += x));
            }
          }
          if (S) {
            var z = Zm(E >>> 0);
            if (!o.hasNameForId(c, z)) {
              var N = s(S, '.' + z, void 0, c);
              o.insertRules(c, z, N);
            }
            f.push(z);
          }
        }
        return f.join(' ');
      }),
      r
    );
  })(),
  dN = /^\s*\/\/.*$/gm,
  pN = [':', '[', '.', '#'];
function vN(r) {
  var i,
    o,
    s,
    c,
    f = r === void 0 ? Vi : r,
    d = f.options,
    h = d === void 0 ? Vi : d,
    m = f.plugins,
    g = m === void 0 ? Td : m,
    E = new Nk(h),
    S = [],
    w = (function (x) {
      function z(N) {
        if (N)
          try {
            x(N + '}');
          } catch {}
      }
      return function (N, _, P, U, V, oe, ne, ce, re, te) {
        switch (N) {
          case 1:
            if (re === 0 && _.charCodeAt(0) === 64) return (x(_ + ';'), '');
            break;
          case 2:
            if (ce === 0) return _ + '/*|*/';
            break;
          case 3:
            switch (ce) {
              case 102:
              case 112:
                return (x(P[0] + _), '');
              default:
                return _ + (te === 0 ? '/*|*/' : '');
            }
          case -2:
            _.split('/*|*/}').forEach(z);
        }
      };
    })(function (x) {
      S.push(x);
    }),
    O = function (x, z, N) {
      return (z === 0 && pN.indexOf(N[o.length]) !== -1) || N.match(c)
        ? x
        : '.' + i;
    };
  function D(x, z, N, _) {
    _ === void 0 && (_ = '&');
    var P = x.replace(dN, ''),
      U = z && N ? N + ' ' + z + ' { ' + P + ' }' : P;
    return (
      (i = _),
      (o = z),
      (s = new RegExp('\\' + o + '\\b', 'g')),
      (c = new RegExp('(\\' + o + '\\b){2,}')),
      E(N || !z ? '' : z, U)
    );
  }
  return (
    E.use(
      [].concat(g, [
        function (x, z, N) {
          x === 2 &&
            N.length &&
            N[0].lastIndexOf(o) > 0 &&
            (N[0] = N[0].replace(s, O));
        },
        w,
        function (x) {
          if (x === -2) {
            var z = S;
            return ((S = []), z);
          }
        },
      ])
    ),
    (D.hash = g.length
      ? g
          .reduce(function (x, z) {
            return (z.name || Ul(15), xo(x, z.name));
          }, 5381)
          .toString()
      : ''),
    D
  );
}
var ZT = Tt.createContext();
ZT.Consumer;
var ew = Tt.createContext(),
  hN = (ew.Consumer, new KT()),
  ey = vN();
function mN() {
  return K.useContext(ZT) || hN;
}
function yN() {
  return K.useContext(ew) || ey;
}
var gN = (function () {
    function r(i, o) {
      var s = this;
      ((this.inject = function (c, f) {
        f === void 0 && (f = ey);
        var d = s.name + f.hash;
        c.hasNameForId(s.id, d) ||
          c.insertRules(s.id, d, f(s.rules, d, '@keyframes'));
      }),
        (this.toString = function () {
          return Ul(12, String(s.name));
        }),
        (this.name = i),
        (this.id = 'sc-keyframes-' + i),
        (this.rules = o));
    }
    return (
      (r.prototype.getName = function (i) {
        return (i === void 0 && (i = ey), this.name + i.hash);
      }),
      r
    );
  })(),
  bN = /([A-Z])/,
  SN = /([A-Z])/g,
  EN = /^ms-/,
  CN = function (r) {
    return '-' + r.toLowerCase();
  };
function aT(r) {
  return bN.test(r) ? r.replace(SN, CN).replace(EN, '-ms-') : r;
}
var iT = function (r) {
  return r == null || r === !1 || r === '';
};
function Nl(r, i, o, s) {
  if (Array.isArray(r)) {
    for (var c, f = [], d = 0, h = r.length; d < h; d += 1)
      (c = Nl(r[d], i, o, s)) !== '' &&
        (Array.isArray(c) ? f.push.apply(f, c) : f.push(c));
    return f;
  }
  if (iT(r)) return '';
  if (XT(r)) return '.' + r.styledComponentId;
  if (wd(r)) {
    if (
      typeof (g = r) != 'function' ||
      (g.prototype && g.prototype.isReactComponent) ||
      !i
    )
      return r;
    var m = r(i);
    return (
      my.isElement(m) &&
        console.warn(
          Jm(r) +
            ' is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.'
        ),
      Nl(m, i, o, s)
    );
  }
  var g;
  return r instanceof gN
    ? o
      ? (r.inject(o, s), r.getName(s))
      : r
    : Km(r)
      ? (function E(S, w) {
          var O,
            D,
            x = [];
          for (var z in S)
            S.hasOwnProperty(z) &&
              !iT(S[z]) &&
              ((Array.isArray(S[z]) && S[z].isCss) || wd(S[z])
                ? x.push(aT(z) + ':', S[z], ';')
                : Km(S[z])
                  ? x.push.apply(x, E(S[z], z))
                  : x.push(
                      aT(z) +
                        ': ' +
                        ((O = z),
                        (D = S[z]) == null || typeof D == 'boolean' || D === ''
                          ? ''
                          : typeof D != 'number' ||
                              D === 0 ||
                              O in Pk ||
                              O.startsWith('--')
                            ? String(D).trim()
                            : D + 'px') +
                        ';'
                    ));
          return w ? [w + ' {'].concat(x, ['}']) : x;
        })(r)
      : r.toString();
}
var oT = function (r) {
  return (Array.isArray(r) && (r.isCss = !0), r);
};
function TN(r) {
  for (
    var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), s = 1;
    s < i;
    s++
  )
    o[s - 1] = arguments[s];
  return wd(r) || Km(r)
    ? oT(Nl(tT(Td, [r].concat(o))))
    : o.length === 0 && r.length === 1 && typeof r[0] == 'string'
      ? r
      : oT(Nl(tT(r, o)));
}
var lT = /invalid hook call/i,
  ld = new Set(),
  wN = function (r, i) {
    {
      var o =
          'The component ' +
          r +
          (i ? ' with the id of "' + i + '"' : '') +
          ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`,
        s = console.error;
      try {
        var c = !0;
        ((console.error = function (f) {
          if (lT.test(f)) ((c = !1), ld.delete(o));
          else {
            for (
              var d = arguments.length, h = new Array(d > 1 ? d - 1 : 0), m = 1;
              m < d;
              m++
            )
              h[m - 1] = arguments[m];
            s.apply(void 0, [f].concat(h));
          }
        }),
          K.useRef(),
          c && !ld.has(o) && (console.warn(o), ld.add(o)));
      } catch (f) {
        lT.test(f.message) && ld.delete(o);
      } finally {
        console.error = s;
      }
    }
  },
  xN = function (r, i, o) {
    return (
      o === void 0 && (o = Vi),
      (r.theme !== o.theme && r.theme) || i || o.theme
    );
  },
  RN = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  _N = /(^-|-$)/g;
function Vm(r) {
  return r.replace(RN, '-').replace(_N, '');
}
var DN = function (r) {
  return Zm(JT(r) >>> 0);
};
function sd(r) {
  return typeof r == 'string' && r.charAt(0) === r.charAt(0).toLowerCase();
}
var ty = function (r) {
    return (
      typeof r == 'function' ||
      (typeof r == 'object' && r !== null && !Array.isArray(r))
    );
  },
  ON = function (r) {
    return r !== '__proto__' && r !== 'constructor' && r !== 'prototype';
  };
function AN(r, i, o) {
  var s = r[o];
  ty(i) && ty(s) ? tw(s, i) : (r[o] = i);
}
function tw(r) {
  for (
    var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), s = 1;
    s < i;
    s++
  )
    o[s - 1] = arguments[s];
  for (var c = 0, f = o; c < f.length; c++) {
    var d = f[c];
    if (ty(d)) for (var h in d) ON(h) && AN(r, d[h], h);
  }
  return r;
}
var nw = Tt.createContext();
nw.Consumer;
var Hm = {};
function rw(r, i, o) {
  var s = XT(r),
    c = !sd(r),
    f = i.attrs,
    d = f === void 0 ? Td : f,
    h = i.componentId,
    m =
      h === void 0
        ? (function (_, P) {
            var U = typeof _ != 'string' ? 'sc' : Vm(_);
            Hm[U] = (Hm[U] || 0) + 1;
            var V = U + '-' + DN('5.3.11' + U + Hm[U]);
            return P ? P + '-' + V : V;
          })(i.displayName, i.parentComponentId)
        : h,
    g = i.displayName,
    E =
      g === void 0
        ? (function (_) {
            return sd(_) ? 'styled.' + _ : 'Styled(' + Jm(_) + ')';
          })(r)
        : g,
    S =
      i.displayName && i.componentId
        ? Vm(i.displayName) + '-' + i.componentId
        : i.componentId || m,
    w = s && r.attrs ? Array.prototype.concat(r.attrs, d).filter(Boolean) : d,
    O = i.shouldForwardProp;
  s &&
    r.shouldForwardProp &&
    (O = i.shouldForwardProp
      ? function (_, P, U) {
          return r.shouldForwardProp(_, P, U) && i.shouldForwardProp(_, P, U);
        }
      : r.shouldForwardProp);
  var D,
    x = new fN(o, S, s ? r.componentStyle : void 0),
    z = x.isStatic && d.length === 0,
    N = function (_, P) {
      return (function (U, V, oe, ne) {
        var ce = U.attrs,
          re = U.componentStyle,
          te = U.defaultProps,
          ue = U.foldedComponentIds,
          ae = U.shouldForwardProp,
          ie = U.styledComponentId,
          Ee = U.target,
          Me = (function (Ue, j, Ke) {
            Ue === void 0 && (Ue = Vi);
            var pe = Za({}, j, { theme: Ue }),
              at = {};
            return (
              Ke.forEach(function (We) {
                var Je,
                  ee,
                  it,
                  dt = We;
                for (Je in (wd(dt) && (dt = dt(pe)), dt))
                  pe[Je] = at[Je] =
                    Je === 'className'
                      ? ((ee = at[Je]),
                        (it = dt[Je]),
                        ee && it ? ee + ' ' + it : ee || it)
                      : dt[Je];
              }),
              [pe, at]
            );
          })(xN(V, K.useContext(nw), te) || Vi, V, ce),
          be = Me[0],
          me = Me[1],
          Ve = (function (Ue, j, Ke, pe) {
            var at = mN(),
              We = yN(),
              Je = j
                ? Ue.generateAndInjectStyles(Vi, at, We)
                : Ue.generateAndInjectStyles(Ke, at, We);
            return (!j && pe && pe(Je), Je);
          })(re, ne, be, U.warnTooManyClasses),
          Qe = oe,
          ft = me.$as || V.$as || me.as || V.as || Ee,
          qt = sd(ft),
          Se = me !== V ? Za({}, V, {}, me) : V,
          ge = {};
        for (var Te in Se)
          Te[0] !== '$' &&
            Te !== 'as' &&
            (Te === 'forwardedAs'
              ? (ge.as = Se[Te])
              : (ae ? ae(Te, KC, ft) : !qt || KC(Te)) && (ge[Te] = Se[Te]));
        return (
          V.style &&
            me.style !== V.style &&
            (ge.style = Za({}, V.style, {}, me.style)),
          (ge.className = Array.prototype
            .concat(ue, ie, Ve !== ie ? Ve : null, V.className, me.className)
            .filter(Boolean)
            .join(' ')),
          (ge.ref = Qe),
          K.createElement(ft, ge)
        );
      })(D, _, P, z);
    };
  return (
    (N.displayName = E),
    ((D = Tt.forwardRef(N)).attrs = w),
    (D.componentStyle = x),
    (D.displayName = E),
    (D.shouldForwardProp = O),
    (D.foldedComponentIds = s
      ? Array.prototype.concat(r.foldedComponentIds, r.styledComponentId)
      : Td),
    (D.styledComponentId = S),
    (D.target = s ? r.target : r),
    (D.withComponent = function (_) {
      var P = i.componentId,
        U = (function (oe, ne) {
          if (oe == null) return {};
          var ce,
            re,
            te = {},
            ue = Object.keys(oe);
          for (re = 0; re < ue.length; re++)
            ((ce = ue[re]), ne.indexOf(ce) >= 0 || (te[ce] = oe[ce]));
          return te;
        })(i, ['componentId']),
        V = P && P + '-' + (sd(_) ? _ : Vm(Jm(_)));
      return rw(_, Za({}, U, { attrs: w, componentId: V }), o);
    }),
    Object.defineProperty(D, 'defaultProps', {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (_) {
        this._foldedDefaultProps = s ? tw({}, r.defaultProps, _) : _;
      },
    }),
    wN(E, S),
    (D.warnTooManyClasses = (function (_, P) {
      var U = {},
        V = !1;
      return function (oe) {
        if (!V && ((U[oe] = !0), Object.keys(U).length >= 200)) {
          var ne = P ? ' with the id of "' + P + '"' : '';
          (console.warn(
            'Over 200 classes were generated for component ' +
              _ +
              ne +
              `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`
          ),
            (V = !0),
            (U = {}));
        }
      };
    })(E, S)),
    Object.defineProperty(D, 'toString', {
      value: function () {
        return '.' + D.styledComponentId;
      },
    }),
    c &&
      Wk(D, r, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
        withComponent: !0,
      }),
    D
  );
}
var ny = function (r) {
  return (function i(o, s, c) {
    if ((c === void 0 && (c = Vi), !my.isValidElementType(s)))
      return Ul(1, String(s));
    var f = function () {
      return o(s, c, TN.apply(void 0, arguments));
    };
    return (
      (f.withConfig = function (d) {
        return i(o, s, Za({}, c, {}, d));
      }),
      (f.attrs = function (d) {
        return i(
          o,
          s,
          Za({}, c, {
            attrs: Array.prototype.concat(c.attrs, d).filter(Boolean),
          })
        );
      }),
      f
    );
  })(rw, r);
};
[
  'a',
  'abbr',
  'address',
  'area',
  'article',
  'aside',
  'audio',
  'b',
  'base',
  'bdi',
  'bdo',
  'big',
  'blockquote',
  'body',
  'br',
  'button',
  'canvas',
  'caption',
  'cite',
  'code',
  'col',
  'colgroup',
  'data',
  'datalist',
  'dd',
  'del',
  'details',
  'dfn',
  'dialog',
  'div',
  'dl',
  'dt',
  'em',
  'embed',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'header',
  'hgroup',
  'hr',
  'html',
  'i',
  'iframe',
  'img',
  'input',
  'ins',
  'kbd',
  'keygen',
  'label',
  'legend',
  'li',
  'link',
  'main',
  'map',
  'mark',
  'marquee',
  'menu',
  'menuitem',
  'meta',
  'meter',
  'nav',
  'noscript',
  'object',
  'ol',
  'optgroup',
  'option',
  'output',
  'p',
  'param',
  'picture',
  'pre',
  'progress',
  'q',
  'rp',
  'rt',
  'ruby',
  's',
  'samp',
  'script',
  'section',
  'select',
  'small',
  'source',
  'span',
  'strong',
  'style',
  'sub',
  'summary',
  'sup',
  'table',
  'tbody',
  'td',
  'textarea',
  'tfoot',
  'th',
  'thead',
  'time',
  'title',
  'tr',
  'track',
  'u',
  'ul',
  'var',
  'video',
  'wbr',
  'circle',
  'clipPath',
  'defs',
  'ellipse',
  'foreignObject',
  'g',
  'image',
  'line',
  'linearGradient',
  'marker',
  'mask',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'radialGradient',
  'rect',
  'stop',
  'svg',
  'text',
  'textPath',
  'tspan',
].forEach(function (r) {
  ny[r] = ny(r);
});
(typeof navigator < 'u' &&
  navigator.product === 'ReactNative' &&
  console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`),
  typeof window < 'u' &&
    ((window['__styled-components-init__'] =
      window['__styled-components-init__'] || 0),
    window['__styled-components-init__'] === 1 &&
      console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`),
    (window['__styled-components-init__'] += 1)));
const _r = ny;
function sT(r) {
  return (
    r !== null &&
    typeof r == 'object' &&
    'constructor' in r &&
    r.constructor === Object
  );
}
function Sy(r, i) {
  (r === void 0 && (r = {}), i === void 0 && (i = {}));
  const o = ['__proto__', 'constructor', 'prototype'];
  Object.keys(i)
    .filter((s) => o.indexOf(s) < 0)
    .forEach((s) => {
      typeof r[s] > 'u'
        ? (r[s] = i[s])
        : sT(i[s]) &&
          sT(r[s]) &&
          Object.keys(i[s]).length > 0 &&
          Sy(r[s], i[s]);
    });
}
const aw = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: '' },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: '',
  },
};
function Do() {
  const r = typeof document < 'u' ? document : {};
  return (Sy(r, aw), r);
}
const MN = {
  document: aw,
  navigator: { userAgent: '' },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: '',
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return '';
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(r) {
    return typeof setTimeout > 'u' ? (r(), null) : setTimeout(r, 0);
  },
  cancelAnimationFrame(r) {
    typeof setTimeout > 'u' || clearTimeout(r);
  },
};
function ar() {
  const r = typeof window < 'u' ? window : {};
  return (Sy(r, MN), r);
}
function LN(r) {
  return (
    r === void 0 && (r = ''),
    r
      .trim()
      .split(' ')
      .filter((i) => !!i.trim())
  );
}
function kN(r) {
  const i = r;
  Object.keys(i).forEach((o) => {
    try {
      i[o] = null;
    } catch {}
    try {
      delete i[o];
    } catch {}
  });
}
function iw(r, i) {
  return (i === void 0 && (i = 0), setTimeout(r, i));
}
function Rd() {
  return Date.now();
}
function NN(r) {
  const i = ar();
  let o;
  return (
    i.getComputedStyle && (o = i.getComputedStyle(r, null)),
    !o && r.currentStyle && (o = r.currentStyle),
    o || (o = r.style),
    o
  );
}
function PN(r, i) {
  i === void 0 && (i = 'x');
  const o = ar();
  let s, c, f;
  const d = NN(r);
  return (
    o.WebKitCSSMatrix
      ? ((c = d.transform || d.webkitTransform),
        c.split(',').length > 6 &&
          (c = c
            .split(', ')
            .map((h) => h.replace(',', '.'))
            .join(', ')),
        (f = new o.WebKitCSSMatrix(c === 'none' ? '' : c)))
      : ((f =
          d.MozTransform ||
          d.OTransform ||
          d.MsTransform ||
          d.msTransform ||
          d.transform ||
          d
            .getPropertyValue('transform')
            .replace('translate(', 'matrix(1, 0, 0, 1,')),
        (s = f.toString().split(','))),
    i === 'x' &&
      (o.WebKitCSSMatrix
        ? (c = f.m41)
        : s.length === 16
          ? (c = parseFloat(s[12]))
          : (c = parseFloat(s[4]))),
    i === 'y' &&
      (o.WebKitCSSMatrix
        ? (c = f.m42)
        : s.length === 16
          ? (c = parseFloat(s[13]))
          : (c = parseFloat(s[5]))),
    c || 0
  );
}
function ud(r) {
  return (
    typeof r == 'object' &&
    r !== null &&
    r.constructor &&
    Object.prototype.toString.call(r).slice(8, -1) === 'Object'
  );
}
function zN(r) {
  return typeof window < 'u' && typeof window.HTMLElement < 'u'
    ? r instanceof HTMLElement
    : r && (r.nodeType === 1 || r.nodeType === 11);
}
function Rr() {
  const r = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    i = ['__proto__', 'constructor', 'prototype'];
  for (let o = 1; o < arguments.length; o += 1) {
    const s = o < 0 || arguments.length <= o ? void 0 : arguments[o];
    if (s != null && !zN(s)) {
      const c = Object.keys(Object(s)).filter((f) => i.indexOf(f) < 0);
      for (let f = 0, d = c.length; f < d; f += 1) {
        const h = c[f],
          m = Object.getOwnPropertyDescriptor(s, h);
        m !== void 0 &&
          m.enumerable &&
          (ud(r[h]) && ud(s[h])
            ? s[h].__swiper__
              ? (r[h] = s[h])
              : Rr(r[h], s[h])
            : !ud(r[h]) && ud(s[h])
              ? ((r[h] = {}), s[h].__swiper__ ? (r[h] = s[h]) : Rr(r[h], s[h]))
              : (r[h] = s[h]));
      }
    }
  }
  return r;
}
function cd(r, i, o) {
  r.style.setProperty(i, o);
}
function ow(r) {
  let { swiper: i, targetPosition: o, side: s } = r;
  const c = ar(),
    f = -i.translate;
  let d = null,
    h;
  const m = i.params.speed;
  ((i.wrapperEl.style.scrollSnapType = 'none'),
    c.cancelAnimationFrame(i.cssModeFrameID));
  const g = o > f ? 'next' : 'prev',
    E = (w, O) => (g === 'next' && w >= O) || (g === 'prev' && w <= O),
    S = () => {
      ((h = new Date().getTime()), d === null && (d = h));
      const w = Math.max(Math.min((h - d) / m, 1), 0),
        O = 0.5 - Math.cos(w * Math.PI) / 2;
      let D = f + O * (o - f);
      if ((E(D, o) && (D = o), i.wrapperEl.scrollTo({ [s]: D }), E(D, o))) {
        ((i.wrapperEl.style.overflow = 'hidden'),
          (i.wrapperEl.style.scrollSnapType = ''),
          setTimeout(() => {
            ((i.wrapperEl.style.overflow = ''),
              i.wrapperEl.scrollTo({ [s]: D }));
          }),
          c.cancelAnimationFrame(i.cssModeFrameID));
        return;
      }
      i.cssModeFrameID = c.requestAnimationFrame(S);
    };
  S();
}
function ei(r, i) {
  i === void 0 && (i = '');
  const o = ar(),
    s = [...r.children];
  return (
    o.HTMLSlotElement &&
      r instanceof HTMLSlotElement &&
      s.push(...r.assignedElements()),
    i ? s.filter((c) => c.matches(i)) : s
  );
}
function UN(r, i) {
  const o = [i];
  for (; o.length > 0; ) {
    const s = o.shift();
    if (r === s) return !0;
    o.push(
      ...s.children,
      ...(s.shadowRoot ? s.shadowRoot.children : []),
      ...(s.assignedElements ? s.assignedElements() : [])
    );
  }
}
function FN(r, i) {
  const o = ar();
  let s = i.contains(r);
  return (
    !s &&
      o.HTMLSlotElement &&
      i instanceof HTMLSlotElement &&
      ((s = [...i.assignedElements()].includes(r)), s || (s = UN(r, i))),
    s
  );
}
function _d(r) {
  try {
    console.warn(r);
    return;
  } catch {}
}
function ry(r, i) {
  i === void 0 && (i = []);
  const o = document.createElement(r);
  return (o.classList.add(...(Array.isArray(i) ? i : LN(i))), o);
}
function VN(r, i) {
  const o = [];
  for (; r.previousElementSibling; ) {
    const s = r.previousElementSibling;
    (i ? s.matches(i) && o.push(s) : o.push(s), (r = s));
  }
  return o;
}
function HN(r, i) {
  const o = [];
  for (; r.nextElementSibling; ) {
    const s = r.nextElementSibling;
    (i ? s.matches(i) && o.push(s) : o.push(s), (r = s));
  }
  return o;
}
function Fi(r, i) {
  return ar().getComputedStyle(r, null).getPropertyValue(i);
}
function uT(r) {
  let i = r,
    o;
  if (i) {
    for (o = 0; (i = i.previousSibling) !== null; )
      i.nodeType === 1 && (o += 1);
    return o;
  }
}
function IN(r, i) {
  const o = [];
  let s = r.parentElement;
  for (; s; )
    (i ? s.matches(i) && o.push(s) : o.push(s), (s = s.parentElement));
  return o;
}
function cT(r, i, o) {
  const s = ar();
  return o
    ? r[i === 'width' ? 'offsetWidth' : 'offsetHeight'] +
        parseFloat(
          s
            .getComputedStyle(r, null)
            .getPropertyValue(i === 'width' ? 'margin-right' : 'margin-top')
        ) +
        parseFloat(
          s
            .getComputedStyle(r, null)
            .getPropertyValue(i === 'width' ? 'margin-left' : 'margin-bottom')
        )
    : r.offsetWidth;
}
function fT(r, i) {
  (i === void 0 && (i = ''),
    typeof trustedTypes < 'u'
      ? (r.innerHTML = trustedTypes
          .createPolicy('html', { createHTML: (o) => o })
          .createHTML(i))
      : (r.innerHTML = i));
}
let Im;
function BN() {
  const r = ar(),
    i = Do();
  return {
    smoothScroll:
      i.documentElement &&
      i.documentElement.style &&
      'scrollBehavior' in i.documentElement.style,
    touch: !!(
      'ontouchstart' in r ||
      (r.DocumentTouch && i instanceof r.DocumentTouch)
    ),
  };
}
function lw() {
  return (Im || (Im = BN()), Im);
}
let Bm;
function jN(r) {
  let { userAgent: i } = r === void 0 ? {} : r;
  const o = lw(),
    s = ar(),
    c = s.navigator.platform,
    f = i || s.navigator.userAgent,
    d = { ios: !1, android: !1 },
    h = s.screen.width,
    m = s.screen.height,
    g = f.match(/(Android);?[\s\/]+([\d.]+)?/);
  let E = f.match(/(iPad).*OS\s([\d_]+)/);
  const S = f.match(/(iPod)(.*OS\s([\d_]+))?/),
    w = !E && f.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    O = c === 'Win32';
  let D = c === 'MacIntel';
  const x = [
    '1024x1366',
    '1366x1024',
    '834x1194',
    '1194x834',
    '834x1112',
    '1112x834',
    '768x1024',
    '1024x768',
    '820x1180',
    '1180x820',
    '810x1080',
    '1080x810',
  ];
  return (
    !E &&
      D &&
      o.touch &&
      x.indexOf(`${h}x${m}`) >= 0 &&
      ((E = f.match(/(Version)\/([\d.]+)/)),
      E || (E = [0, 1, '13_0_0']),
      (D = !1)),
    g && !O && ((d.os = 'android'), (d.android = !0)),
    (E || w || S) && ((d.os = 'ios'), (d.ios = !0)),
    d
  );
}
function sw(r) {
  return (r === void 0 && (r = {}), Bm || (Bm = jN(r)), Bm);
}
let jm;
function $N() {
  const r = ar(),
    i = sw();
  let o = !1;
  function s() {
    const h = r.navigator.userAgent.toLowerCase();
    return (
      h.indexOf('safari') >= 0 &&
      h.indexOf('chrome') < 0 &&
      h.indexOf('android') < 0
    );
  }
  if (s()) {
    const h = String(r.navigator.userAgent);
    if (h.includes('Version/')) {
      const [m, g] = h
        .split('Version/')[1]
        .split(' ')[0]
        .split('.')
        .map((E) => Number(E));
      o = m < 16 || (m === 16 && g < 2);
    }
  }
  const c = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      r.navigator.userAgent
    ),
    f = s(),
    d = f || (c && i.ios);
  return {
    isSafari: o || f,
    needPerspectiveFix: o,
    need3dFix: d,
    isWebView: c,
  };
}
function uw() {
  return (jm || (jm = $N()), jm);
}
function YN(r) {
  let { swiper: i, on: o, emit: s } = r;
  const c = ar();
  let f = null,
    d = null;
  const h = () => {
      !i || i.destroyed || !i.initialized || (s('beforeResize'), s('resize'));
    },
    m = () => {
      !i ||
        i.destroyed ||
        !i.initialized ||
        ((f = new ResizeObserver((S) => {
          d = c.requestAnimationFrame(() => {
            const { width: w, height: O } = i;
            let D = w,
              x = O;
            (S.forEach((z) => {
              let { contentBoxSize: N, contentRect: _, target: P } = z;
              (P && P !== i.el) ||
                ((D = _ ? _.width : (N[0] || N).inlineSize),
                (x = _ ? _.height : (N[0] || N).blockSize));
            }),
              (D !== w || x !== O) && h());
          });
        })),
        f.observe(i.el));
    },
    g = () => {
      (d && c.cancelAnimationFrame(d),
        f && f.unobserve && i.el && (f.unobserve(i.el), (f = null)));
    },
    E = () => {
      !i || i.destroyed || !i.initialized || s('orientationchange');
    };
  (o('init', () => {
    if (i.params.resizeObserver && typeof c.ResizeObserver < 'u') {
      m();
      return;
    }
    (c.addEventListener('resize', h),
      c.addEventListener('orientationchange', E));
  }),
    o('destroy', () => {
      (g(),
        c.removeEventListener('resize', h),
        c.removeEventListener('orientationchange', E));
    }));
}
function GN(r) {
  let { swiper: i, extendParams: o, on: s, emit: c } = r;
  const f = [],
    d = ar(),
    h = function (E, S) {
      S === void 0 && (S = {});
      const w = d.MutationObserver || d.WebkitMutationObserver,
        O = new w((D) => {
          if (i.__preventObserver__) return;
          if (D.length === 1) {
            c('observerUpdate', D[0]);
            return;
          }
          const x = function () {
            c('observerUpdate', D[0]);
          };
          d.requestAnimationFrame
            ? d.requestAnimationFrame(x)
            : d.setTimeout(x, 0);
        });
      (O.observe(E, {
        attributes: typeof S.attributes > 'u' ? !0 : S.attributes,
        childList: i.isElement || (typeof S.childList > 'u' ? !0 : S).childList,
        characterData: typeof S.characterData > 'u' ? !0 : S.characterData,
      }),
        f.push(O));
    },
    m = () => {
      if (i.params.observer) {
        if (i.params.observeParents) {
          const E = IN(i.hostEl);
          for (let S = 0; S < E.length; S += 1) h(E[S]);
        }
        (h(i.hostEl, { childList: i.params.observeSlideChildren }),
          h(i.wrapperEl, { attributes: !1 }));
      }
    },
    g = () => {
      (f.forEach((E) => {
        E.disconnect();
      }),
        f.splice(0, f.length));
    };
  (o({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    s('init', m),
    s('destroy', g));
}
var WN = {
  on(r, i, o) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof i != 'function') return s;
    const c = o ? 'unshift' : 'push';
    return (
      r.split(' ').forEach((f) => {
        (s.eventsListeners[f] || (s.eventsListeners[f] = []),
          s.eventsListeners[f][c](i));
      }),
      s
    );
  },
  once(r, i, o) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof i != 'function') return s;
    function c() {
      (s.off(r, c), c.__emitterProxy && delete c.__emitterProxy);
      for (var f = arguments.length, d = new Array(f), h = 0; h < f; h++)
        d[h] = arguments[h];
      i.apply(s, d);
    }
    return ((c.__emitterProxy = i), s.on(r, c, o));
  },
  onAny(r, i) {
    const o = this;
    if (!o.eventsListeners || o.destroyed || typeof r != 'function') return o;
    const s = i ? 'unshift' : 'push';
    return (
      o.eventsAnyListeners.indexOf(r) < 0 && o.eventsAnyListeners[s](r),
      o
    );
  },
  offAny(r) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || !i.eventsAnyListeners) return i;
    const o = i.eventsAnyListeners.indexOf(r);
    return (o >= 0 && i.eventsAnyListeners.splice(o, 1), i);
  },
  off(r, i) {
    const o = this;
    return (
      !o.eventsListeners ||
        o.destroyed ||
        !o.eventsListeners ||
        r.split(' ').forEach((s) => {
          typeof i > 'u'
            ? (o.eventsListeners[s] = [])
            : o.eventsListeners[s] &&
              o.eventsListeners[s].forEach((c, f) => {
                (c === i || (c.__emitterProxy && c.__emitterProxy === i)) &&
                  o.eventsListeners[s].splice(f, 1);
              });
        }),
      o
    );
  },
  emit() {
    const r = this;
    if (!r.eventsListeners || r.destroyed || !r.eventsListeners) return r;
    let i, o, s;
    for (var c = arguments.length, f = new Array(c), d = 0; d < c; d++)
      f[d] = arguments[d];
    return (
      typeof f[0] == 'string' || Array.isArray(f[0])
        ? ((i = f[0]), (o = f.slice(1, f.length)), (s = r))
        : ((i = f[0].events), (o = f[0].data), (s = f[0].context || r)),
      o.unshift(s),
      (Array.isArray(i) ? i : i.split(' ')).forEach((m) => {
        (r.eventsAnyListeners &&
          r.eventsAnyListeners.length &&
          r.eventsAnyListeners.forEach((g) => {
            g.apply(s, [m, ...o]);
          }),
          r.eventsListeners &&
            r.eventsListeners[m] &&
            r.eventsListeners[m].forEach((g) => {
              g.apply(s, o);
            }));
      }),
      r
    );
  },
};
function qN() {
  const r = this;
  let i, o;
  const s = r.el;
  (typeof r.params.width < 'u' && r.params.width !== null
    ? (i = r.params.width)
    : (i = s.clientWidth),
    typeof r.params.height < 'u' && r.params.height !== null
      ? (o = r.params.height)
      : (o = s.clientHeight),
    !((i === 0 && r.isHorizontal()) || (o === 0 && r.isVertical())) &&
      ((i =
        i -
        parseInt(Fi(s, 'padding-left') || 0, 10) -
        parseInt(Fi(s, 'padding-right') || 0, 10)),
      (o =
        o -
        parseInt(Fi(s, 'padding-top') || 0, 10) -
        parseInt(Fi(s, 'padding-bottom') || 0, 10)),
      Number.isNaN(i) && (i = 0),
      Number.isNaN(o) && (o = 0),
      Object.assign(r, {
        width: i,
        height: o,
        size: r.isHorizontal() ? i : o,
      })));
}
function XN() {
  const r = this;
  function i(te, ue) {
    return parseFloat(te.getPropertyValue(r.getDirectionLabel(ue)) || 0);
  }
  const o = r.params,
    { wrapperEl: s, slidesEl: c, size: f, rtlTranslate: d, wrongRTL: h } = r,
    m = r.virtual && o.virtual.enabled,
    g = m ? r.virtual.slides.length : r.slides.length,
    E = ei(c, `.${r.params.slideClass}, swiper-slide`),
    S = m ? r.virtual.slides.length : E.length;
  let w = [];
  const O = [],
    D = [];
  let x = o.slidesOffsetBefore;
  typeof x == 'function' && (x = o.slidesOffsetBefore.call(r));
  let z = o.slidesOffsetAfter;
  typeof z == 'function' && (z = o.slidesOffsetAfter.call(r));
  const N = r.snapGrid.length,
    _ = r.slidesGrid.length;
  let P = o.spaceBetween,
    U = -x,
    V = 0,
    oe = 0;
  if (typeof f > 'u') return;
  (typeof P == 'string' && P.indexOf('%') >= 0
    ? (P = (parseFloat(P.replace('%', '')) / 100) * f)
    : typeof P == 'string' && (P = parseFloat(P)),
    (r.virtualSize = -P),
    E.forEach((te) => {
      (d ? (te.style.marginLeft = '') : (te.style.marginRight = ''),
        (te.style.marginBottom = ''),
        (te.style.marginTop = ''));
    }),
    o.centeredSlides &&
      o.cssMode &&
      (cd(s, '--swiper-centered-offset-before', ''),
      cd(s, '--swiper-centered-offset-after', '')));
  const ne = o.grid && o.grid.rows > 1 && r.grid;
  ne ? r.grid.initSlides(E) : r.grid && r.grid.unsetSlides();
  let ce;
  const re =
    o.slidesPerView === 'auto' &&
    o.breakpoints &&
    Object.keys(o.breakpoints).filter(
      (te) => typeof o.breakpoints[te].slidesPerView < 'u'
    ).length > 0;
  for (let te = 0; te < S; te += 1) {
    ce = 0;
    let ue;
    if (
      (E[te] && (ue = E[te]),
      ne && r.grid.updateSlide(te, ue, E),
      !(E[te] && Fi(ue, 'display') === 'none'))
    ) {
      if (o.slidesPerView === 'auto') {
        re && (E[te].style[r.getDirectionLabel('width')] = '');
        const ae = getComputedStyle(ue),
          ie = ue.style.transform,
          Ee = ue.style.webkitTransform;
        if (
          (ie && (ue.style.transform = 'none'),
          Ee && (ue.style.webkitTransform = 'none'),
          o.roundLengths)
        )
          ce = r.isHorizontal() ? cT(ue, 'width', !0) : cT(ue, 'height', !0);
        else {
          const Me = i(ae, 'width'),
            be = i(ae, 'padding-left'),
            me = i(ae, 'padding-right'),
            Ve = i(ae, 'margin-left'),
            Qe = i(ae, 'margin-right'),
            ft = ae.getPropertyValue('box-sizing');
          if (ft && ft === 'border-box') ce = Me + Ve + Qe;
          else {
            const { clientWidth: qt, offsetWidth: Se } = ue;
            ce = Me + be + me + Ve + Qe + (Se - qt);
          }
        }
        (ie && (ue.style.transform = ie),
          Ee && (ue.style.webkitTransform = Ee),
          o.roundLengths && (ce = Math.floor(ce)));
      } else
        ((ce = (f - (o.slidesPerView - 1) * P) / o.slidesPerView),
          o.roundLengths && (ce = Math.floor(ce)),
          E[te] && (E[te].style[r.getDirectionLabel('width')] = `${ce}px`));
      (E[te] && (E[te].swiperSlideSize = ce),
        D.push(ce),
        o.centeredSlides
          ? ((U = U + ce / 2 + V / 2 + P),
            V === 0 && te !== 0 && (U = U - f / 2 - P),
            te === 0 && (U = U - f / 2 - P),
            Math.abs(U) < 1 / 1e3 && (U = 0),
            o.roundLengths && (U = Math.floor(U)),
            oe % o.slidesPerGroup === 0 && w.push(U),
            O.push(U))
          : (o.roundLengths && (U = Math.floor(U)),
            (oe - Math.min(r.params.slidesPerGroupSkip, oe)) %
              r.params.slidesPerGroup ===
              0 && w.push(U),
            O.push(U),
            (U = U + ce + P)),
        (r.virtualSize += ce + P),
        (V = ce),
        (oe += 1));
    }
  }
  if (
    ((r.virtualSize = Math.max(r.virtualSize, f) + z),
    d &&
      h &&
      (o.effect === 'slide' || o.effect === 'coverflow') &&
      (s.style.width = `${r.virtualSize + P}px`),
    o.setWrapperSize &&
      (s.style[r.getDirectionLabel('width')] = `${r.virtualSize + P}px`),
    ne && r.grid.updateWrapperSize(ce, w),
    !o.centeredSlides)
  ) {
    const te = [];
    for (let ue = 0; ue < w.length; ue += 1) {
      let ae = w[ue];
      (o.roundLengths && (ae = Math.floor(ae)),
        w[ue] <= r.virtualSize - f && te.push(ae));
    }
    ((w = te),
      Math.floor(r.virtualSize - f) - Math.floor(w[w.length - 1]) > 1 &&
        w.push(r.virtualSize - f));
  }
  if (m && o.loop) {
    const te = D[0] + P;
    if (o.slidesPerGroup > 1) {
      const ue = Math.ceil(
          (r.virtual.slidesBefore + r.virtual.slidesAfter) / o.slidesPerGroup
        ),
        ae = te * o.slidesPerGroup;
      for (let ie = 0; ie < ue; ie += 1) w.push(w[w.length - 1] + ae);
    }
    for (
      let ue = 0;
      ue < r.virtual.slidesBefore + r.virtual.slidesAfter;
      ue += 1
    )
      (o.slidesPerGroup === 1 && w.push(w[w.length - 1] + te),
        O.push(O[O.length - 1] + te),
        (r.virtualSize += te));
  }
  if ((w.length === 0 && (w = [0]), P !== 0)) {
    const te =
      r.isHorizontal() && d ? 'marginLeft' : r.getDirectionLabel('marginRight');
    E.filter((ue, ae) =>
      !o.cssMode || o.loop ? !0 : ae !== E.length - 1
    ).forEach((ue) => {
      ue.style[te] = `${P}px`;
    });
  }
  if (o.centeredSlides && o.centeredSlidesBounds) {
    let te = 0;
    (D.forEach((ae) => {
      te += ae + (P || 0);
    }),
      (te -= P));
    const ue = te > f ? te - f : 0;
    w = w.map((ae) => (ae <= 0 ? -x : ae > ue ? ue + z : ae));
  }
  if (o.centerInsufficientSlides) {
    let te = 0;
    (D.forEach((ae) => {
      te += ae + (P || 0);
    }),
      (te -= P));
    const ue = (o.slidesOffsetBefore || 0) + (o.slidesOffsetAfter || 0);
    if (te + ue < f) {
      const ae = (f - te - ue) / 2;
      (w.forEach((ie, Ee) => {
        w[Ee] = ie - ae;
      }),
        O.forEach((ie, Ee) => {
          O[Ee] = ie + ae;
        }));
    }
  }
  if (
    (Object.assign(r, {
      slides: E,
      snapGrid: w,
      slidesGrid: O,
      slidesSizesGrid: D,
    }),
    o.centeredSlides && o.cssMode && !o.centeredSlidesBounds)
  ) {
    (cd(s, '--swiper-centered-offset-before', `${-w[0]}px`),
      cd(
        s,
        '--swiper-centered-offset-after',
        `${r.size / 2 - D[D.length - 1] / 2}px`
      ));
    const te = -r.snapGrid[0],
      ue = -r.slidesGrid[0];
    ((r.snapGrid = r.snapGrid.map((ae) => ae + te)),
      (r.slidesGrid = r.slidesGrid.map((ae) => ae + ue)));
  }
  if (
    (S !== g && r.emit('slidesLengthChange'),
    w.length !== N &&
      (r.params.watchOverflow && r.checkOverflow(),
      r.emit('snapGridLengthChange')),
    O.length !== _ && r.emit('slidesGridLengthChange'),
    o.watchSlidesProgress && r.updateSlidesOffset(),
    r.emit('slidesUpdated'),
    !m && !o.cssMode && (o.effect === 'slide' || o.effect === 'fade'))
  ) {
    const te = `${o.containerModifierClass}backface-hidden`,
      ue = r.el.classList.contains(te);
    S <= o.maxBackfaceHiddenSlides
      ? ue || r.el.classList.add(te)
      : ue && r.el.classList.remove(te);
  }
}
function QN(r) {
  const i = this,
    o = [],
    s = i.virtual && i.params.virtual.enabled;
  let c = 0,
    f;
  typeof r == 'number'
    ? i.setTransition(r)
    : r === !0 && i.setTransition(i.params.speed);
  const d = (h) => (s ? i.slides[i.getSlideIndexByData(h)] : i.slides[h]);
  if (i.params.slidesPerView !== 'auto' && i.params.slidesPerView > 1)
    if (i.params.centeredSlides)
      (i.visibleSlides || []).forEach((h) => {
        o.push(h);
      });
    else
      for (f = 0; f < Math.ceil(i.params.slidesPerView); f += 1) {
        const h = i.activeIndex + f;
        if (h > i.slides.length && !s) break;
        o.push(d(h));
      }
  else o.push(d(i.activeIndex));
  for (f = 0; f < o.length; f += 1)
    if (typeof o[f] < 'u') {
      const h = o[f].offsetHeight;
      c = h > c ? h : c;
    }
  (c || c === 0) && (i.wrapperEl.style.height = `${c}px`);
}
function KN() {
  const r = this,
    i = r.slides,
    o = r.isElement
      ? r.isHorizontal()
        ? r.wrapperEl.offsetLeft
        : r.wrapperEl.offsetTop
      : 0;
  for (let s = 0; s < i.length; s += 1)
    i[s].swiperSlideOffset =
      (r.isHorizontal() ? i[s].offsetLeft : i[s].offsetTop) -
      o -
      r.cssOverflowAdjustment();
}
const dT = (r, i, o) => {
  i && !r.classList.contains(o)
    ? r.classList.add(o)
    : !i && r.classList.contains(o) && r.classList.remove(o);
};
function JN(r) {
  r === void 0 && (r = (this && this.translate) || 0);
  const i = this,
    o = i.params,
    { slides: s, rtlTranslate: c, snapGrid: f } = i;
  if (s.length === 0) return;
  typeof s[0].swiperSlideOffset > 'u' && i.updateSlidesOffset();
  let d = -r;
  (c && (d = r), (i.visibleSlidesIndexes = []), (i.visibleSlides = []));
  let h = o.spaceBetween;
  typeof h == 'string' && h.indexOf('%') >= 0
    ? (h = (parseFloat(h.replace('%', '')) / 100) * i.size)
    : typeof h == 'string' && (h = parseFloat(h));
  for (let m = 0; m < s.length; m += 1) {
    const g = s[m];
    let E = g.swiperSlideOffset;
    o.cssMode && o.centeredSlides && (E -= s[0].swiperSlideOffset);
    const S =
        (d + (o.centeredSlides ? i.minTranslate() : 0) - E) /
        (g.swiperSlideSize + h),
      w =
        (d - f[0] + (o.centeredSlides ? i.minTranslate() : 0) - E) /
        (g.swiperSlideSize + h),
      O = -(d - E),
      D = O + i.slidesSizesGrid[m],
      x = O >= 0 && O <= i.size - i.slidesSizesGrid[m],
      z =
        (O >= 0 && O < i.size - 1) ||
        (D > 1 && D <= i.size) ||
        (O <= 0 && D >= i.size);
    (z && (i.visibleSlides.push(g), i.visibleSlidesIndexes.push(m)),
      dT(g, z, o.slideVisibleClass),
      dT(g, x, o.slideFullyVisibleClass),
      (g.progress = c ? -S : S),
      (g.originalProgress = c ? -w : w));
  }
}
function ZN(r) {
  const i = this;
  if (typeof r > 'u') {
    const E = i.rtlTranslate ? -1 : 1;
    r = (i && i.translate && i.translate * E) || 0;
  }
  const o = i.params,
    s = i.maxTranslate() - i.minTranslate();
  let { progress: c, isBeginning: f, isEnd: d, progressLoop: h } = i;
  const m = f,
    g = d;
  if (s === 0) ((c = 0), (f = !0), (d = !0));
  else {
    c = (r - i.minTranslate()) / s;
    const E = Math.abs(r - i.minTranslate()) < 1,
      S = Math.abs(r - i.maxTranslate()) < 1;
    ((f = E || c <= 0), (d = S || c >= 1), E && (c = 0), S && (c = 1));
  }
  if (o.loop) {
    const E = i.getSlideIndexByData(0),
      S = i.getSlideIndexByData(i.slides.length - 1),
      w = i.slidesGrid[E],
      O = i.slidesGrid[S],
      D = i.slidesGrid[i.slidesGrid.length - 1],
      x = Math.abs(r);
    (x >= w ? (h = (x - w) / D) : (h = (x + D - O) / D), h > 1 && (h -= 1));
  }
  (Object.assign(i, { progress: c, progressLoop: h, isBeginning: f, isEnd: d }),
    (o.watchSlidesProgress || (o.centeredSlides && o.autoHeight)) &&
      i.updateSlidesProgress(r),
    f && !m && i.emit('reachBeginning toEdge'),
    d && !g && i.emit('reachEnd toEdge'),
    ((m && !f) || (g && !d)) && i.emit('fromEdge'),
    i.emit('progress', c));
}
const $m = (r, i, o) => {
  i && !r.classList.contains(o)
    ? r.classList.add(o)
    : !i && r.classList.contains(o) && r.classList.remove(o);
};
function eP() {
  const r = this,
    { slides: i, params: o, slidesEl: s, activeIndex: c } = r,
    f = r.virtual && o.virtual.enabled,
    d = r.grid && o.grid && o.grid.rows > 1,
    h = (S) => ei(s, `.${o.slideClass}${S}, swiper-slide${S}`)[0];
  let m, g, E;
  if (f)
    if (o.loop) {
      let S = c - r.virtual.slidesBefore;
      (S < 0 && (S = r.virtual.slides.length + S),
        S >= r.virtual.slides.length && (S -= r.virtual.slides.length),
        (m = h(`[data-swiper-slide-index="${S}"]`)));
    } else m = h(`[data-swiper-slide-index="${c}"]`);
  else
    d
      ? ((m = i.find((S) => S.column === c)),
        (E = i.find((S) => S.column === c + 1)),
        (g = i.find((S) => S.column === c - 1)))
      : (m = i[c]);
  (m &&
    (d ||
      ((E = HN(m, `.${o.slideClass}, swiper-slide`)[0]),
      o.loop && !E && (E = i[0]),
      (g = VN(m, `.${o.slideClass}, swiper-slide`)[0]),
      o.loop && !g === 0 && (g = i[i.length - 1]))),
    i.forEach((S) => {
      ($m(S, S === m, o.slideActiveClass),
        $m(S, S === E, o.slideNextClass),
        $m(S, S === g, o.slidePrevClass));
    }),
    r.emitSlidesClasses());
}
const md = (r, i) => {
    if (!r || r.destroyed || !r.params) return;
    const o = () => (r.isElement ? 'swiper-slide' : `.${r.params.slideClass}`),
      s = i.closest(o());
    if (s) {
      let c = s.querySelector(`.${r.params.lazyPreloaderClass}`);
      (!c &&
        r.isElement &&
        (s.shadowRoot
          ? (c = s.shadowRoot.querySelector(`.${r.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              s.shadowRoot &&
                ((c = s.shadowRoot.querySelector(
                  `.${r.params.lazyPreloaderClass}`
                )),
                c && c.remove());
            })),
        c && c.remove());
    }
  },
  Ym = (r, i) => {
    if (!r.slides[i]) return;
    const o = r.slides[i].querySelector('[loading="lazy"]');
    o && o.removeAttribute('loading');
  },
  ay = (r) => {
    if (!r || r.destroyed || !r.params) return;
    let i = r.params.lazyPreloadPrevNext;
    const o = r.slides.length;
    if (!o || !i || i < 0) return;
    i = Math.min(i, o);
    const s =
        r.params.slidesPerView === 'auto'
          ? r.slidesPerViewDynamic()
          : Math.ceil(r.params.slidesPerView),
      c = r.activeIndex;
    if (r.params.grid && r.params.grid.rows > 1) {
      const d = c,
        h = [d - i];
      (h.push(...Array.from({ length: i }).map((m, g) => d + s + g)),
        r.slides.forEach((m, g) => {
          h.includes(m.column) && Ym(r, g);
        }));
      return;
    }
    const f = c + s - 1;
    if (r.params.rewind || r.params.loop)
      for (let d = c - i; d <= f + i; d += 1) {
        const h = ((d % o) + o) % o;
        (h < c || h > f) && Ym(r, h);
      }
    else
      for (let d = Math.max(c - i, 0); d <= Math.min(f + i, o - 1); d += 1)
        d !== c && (d > f || d < c) && Ym(r, d);
  };
function tP(r) {
  const { slidesGrid: i, params: o } = r,
    s = r.rtlTranslate ? r.translate : -r.translate;
  let c;
  for (let f = 0; f < i.length; f += 1)
    typeof i[f + 1] < 'u'
      ? s >= i[f] && s < i[f + 1] - (i[f + 1] - i[f]) / 2
        ? (c = f)
        : s >= i[f] && s < i[f + 1] && (c = f + 1)
      : s >= i[f] && (c = f);
  return (o.normalizeSlideIndex && (c < 0 || typeof c > 'u') && (c = 0), c);
}
function nP(r) {
  const i = this,
    o = i.rtlTranslate ? i.translate : -i.translate,
    { snapGrid: s, params: c, activeIndex: f, realIndex: d, snapIndex: h } = i;
  let m = r,
    g;
  const E = (O) => {
    let D = O - i.virtual.slidesBefore;
    return (
      D < 0 && (D = i.virtual.slides.length + D),
      D >= i.virtual.slides.length && (D -= i.virtual.slides.length),
      D
    );
  };
  if ((typeof m > 'u' && (m = tP(i)), s.indexOf(o) >= 0)) g = s.indexOf(o);
  else {
    const O = Math.min(c.slidesPerGroupSkip, m);
    g = O + Math.floor((m - O) / c.slidesPerGroup);
  }
  if ((g >= s.length && (g = s.length - 1), m === f && !i.params.loop)) {
    g !== h && ((i.snapIndex = g), i.emit('snapIndexChange'));
    return;
  }
  if (m === f && i.params.loop && i.virtual && i.params.virtual.enabled) {
    i.realIndex = E(m);
    return;
  }
  const S = i.grid && c.grid && c.grid.rows > 1;
  let w;
  if (i.virtual && c.virtual.enabled && c.loop) w = E(m);
  else if (S) {
    const O = i.slides.find((x) => x.column === m);
    let D = parseInt(O.getAttribute('data-swiper-slide-index'), 10);
    (Number.isNaN(D) && (D = Math.max(i.slides.indexOf(O), 0)),
      (w = Math.floor(D / c.grid.rows)));
  } else if (i.slides[m]) {
    const O = i.slides[m].getAttribute('data-swiper-slide-index');
    O ? (w = parseInt(O, 10)) : (w = m);
  } else w = m;
  (Object.assign(i, {
    previousSnapIndex: h,
    snapIndex: g,
    previousRealIndex: d,
    realIndex: w,
    previousIndex: f,
    activeIndex: m,
  }),
    i.initialized && ay(i),
    i.emit('activeIndexChange'),
    i.emit('snapIndexChange'),
    (i.initialized || i.params.runCallbacksOnInit) &&
      (d !== w && i.emit('realIndexChange'), i.emit('slideChange')));
}
function rP(r, i) {
  const o = this,
    s = o.params;
  let c = r.closest(`.${s.slideClass}, swiper-slide`);
  !c &&
    o.isElement &&
    i &&
    i.length > 1 &&
    i.includes(r) &&
    [...i.slice(i.indexOf(r) + 1, i.length)].forEach((h) => {
      !c && h.matches && h.matches(`.${s.slideClass}, swiper-slide`) && (c = h);
    });
  let f = !1,
    d;
  if (c) {
    for (let h = 0; h < o.slides.length; h += 1)
      if (o.slides[h] === c) {
        ((f = !0), (d = h));
        break;
      }
  }
  if (c && f)
    ((o.clickedSlide = c),
      o.virtual && o.params.virtual.enabled
        ? (o.clickedIndex = parseInt(
            c.getAttribute('data-swiper-slide-index'),
            10
          ))
        : (o.clickedIndex = d));
  else {
    ((o.clickedSlide = void 0), (o.clickedIndex = void 0));
    return;
  }
  s.slideToClickedSlide &&
    o.clickedIndex !== void 0 &&
    o.clickedIndex !== o.activeIndex &&
    o.slideToClickedSlide();
}
var aP = {
  updateSize: qN,
  updateSlides: XN,
  updateAutoHeight: QN,
  updateSlidesOffset: KN,
  updateSlidesProgress: JN,
  updateProgress: ZN,
  updateSlidesClasses: eP,
  updateActiveIndex: nP,
  updateClickedSlide: rP,
};
function iP(r) {
  r === void 0 && (r = this.isHorizontal() ? 'x' : 'y');
  const i = this,
    { params: o, rtlTranslate: s, translate: c, wrapperEl: f } = i;
  if (o.virtualTranslate) return s ? -c : c;
  if (o.cssMode) return c;
  let d = PN(f, r);
  return ((d += i.cssOverflowAdjustment()), s && (d = -d), d || 0);
}
function oP(r, i) {
  const o = this,
    { rtlTranslate: s, params: c, wrapperEl: f, progress: d } = o;
  let h = 0,
    m = 0;
  const g = 0;
  (o.isHorizontal() ? (h = s ? -r : r) : (m = r),
    c.roundLengths && ((h = Math.floor(h)), (m = Math.floor(m))),
    (o.previousTranslate = o.translate),
    (o.translate = o.isHorizontal() ? h : m),
    c.cssMode
      ? (f[o.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = o.isHorizontal()
          ? -h
          : -m)
      : c.virtualTranslate ||
        (o.isHorizontal()
          ? (h -= o.cssOverflowAdjustment())
          : (m -= o.cssOverflowAdjustment()),
        (f.style.transform = `translate3d(${h}px, ${m}px, ${g}px)`)));
  let E;
  const S = o.maxTranslate() - o.minTranslate();
  (S === 0 ? (E = 0) : (E = (r - o.minTranslate()) / S),
    E !== d && o.updateProgress(r),
    o.emit('setTranslate', o.translate, i));
}
function lP() {
  return -this.snapGrid[0];
}
function sP() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function uP(r, i, o, s, c) {
  (r === void 0 && (r = 0),
    i === void 0 && (i = this.params.speed),
    o === void 0 && (o = !0),
    s === void 0 && (s = !0));
  const f = this,
    { params: d, wrapperEl: h } = f;
  if (f.animating && d.preventInteractionOnTransition) return !1;
  const m = f.minTranslate(),
    g = f.maxTranslate();
  let E;
  if (
    (s && r > m ? (E = m) : s && r < g ? (E = g) : (E = r),
    f.updateProgress(E),
    d.cssMode)
  ) {
    const S = f.isHorizontal();
    if (i === 0) h[S ? 'scrollLeft' : 'scrollTop'] = -E;
    else {
      if (!f.support.smoothScroll)
        return (
          ow({ swiper: f, targetPosition: -E, side: S ? 'left' : 'top' }),
          !0
        );
      h.scrollTo({ [S ? 'left' : 'top']: -E, behavior: 'smooth' });
    }
    return !0;
  }
  return (
    i === 0
      ? (f.setTransition(0),
        f.setTranslate(E),
        o && (f.emit('beforeTransitionStart', i, c), f.emit('transitionEnd')))
      : (f.setTransition(i),
        f.setTranslate(E),
        o && (f.emit('beforeTransitionStart', i, c), f.emit('transitionStart')),
        f.animating ||
          ((f.animating = !0),
          f.onTranslateToWrapperTransitionEnd ||
            (f.onTranslateToWrapperTransitionEnd = function (w) {
              !f ||
                f.destroyed ||
                (w.target === this &&
                  (f.wrapperEl.removeEventListener(
                    'transitionend',
                    f.onTranslateToWrapperTransitionEnd
                  ),
                  (f.onTranslateToWrapperTransitionEnd = null),
                  delete f.onTranslateToWrapperTransitionEnd,
                  (f.animating = !1),
                  o && f.emit('transitionEnd')));
            }),
          f.wrapperEl.addEventListener(
            'transitionend',
            f.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
var cP = {
  getTranslate: iP,
  setTranslate: oP,
  minTranslate: lP,
  maxTranslate: sP,
  translateTo: uP,
};
function fP(r, i) {
  const o = this;
  (o.params.cssMode ||
    ((o.wrapperEl.style.transitionDuration = `${r}ms`),
    (o.wrapperEl.style.transitionDelay = r === 0 ? '0ms' : '')),
    o.emit('setTransition', r, i));
}
function cw(r) {
  let { swiper: i, runCallbacks: o, direction: s, step: c } = r;
  const { activeIndex: f, previousIndex: d } = i;
  let h = s;
  (h || (f > d ? (h = 'next') : f < d ? (h = 'prev') : (h = 'reset')),
    i.emit(`transition${c}`),
    o && h === 'reset'
      ? i.emit(`slideResetTransition${c}`)
      : o &&
        f !== d &&
        (i.emit(`slideChangeTransition${c}`),
        h === 'next'
          ? i.emit(`slideNextTransition${c}`)
          : i.emit(`slidePrevTransition${c}`)));
}
function dP(r, i) {
  r === void 0 && (r = !0);
  const o = this,
    { params: s } = o;
  s.cssMode ||
    (s.autoHeight && o.updateAutoHeight(),
    cw({ swiper: o, runCallbacks: r, direction: i, step: 'Start' }));
}
function pP(r, i) {
  r === void 0 && (r = !0);
  const o = this,
    { params: s } = o;
  ((o.animating = !1),
    !s.cssMode &&
      (o.setTransition(0),
      cw({ swiper: o, runCallbacks: r, direction: i, step: 'End' })));
}
var vP = { setTransition: fP, transitionStart: dP, transitionEnd: pP };
function hP(r, i, o, s, c) {
  (r === void 0 && (r = 0),
    o === void 0 && (o = !0),
    typeof r == 'string' && (r = parseInt(r, 10)));
  const f = this;
  let d = r;
  d < 0 && (d = 0);
  const {
    params: h,
    snapGrid: m,
    slidesGrid: g,
    previousIndex: E,
    activeIndex: S,
    rtlTranslate: w,
    wrapperEl: O,
    enabled: D,
  } = f;
  if (
    (!D && !s && !c) ||
    f.destroyed ||
    (f.animating && h.preventInteractionOnTransition)
  )
    return !1;
  typeof i > 'u' && (i = f.params.speed);
  const x = Math.min(f.params.slidesPerGroupSkip, d);
  let z = x + Math.floor((d - x) / f.params.slidesPerGroup);
  z >= m.length && (z = m.length - 1);
  const N = -m[z];
  if (h.normalizeSlideIndex)
    for (let ne = 0; ne < g.length; ne += 1) {
      const ce = -Math.floor(N * 100),
        re = Math.floor(g[ne] * 100),
        te = Math.floor(g[ne + 1] * 100);
      typeof g[ne + 1] < 'u'
        ? ce >= re && ce < te - (te - re) / 2
          ? (d = ne)
          : ce >= re && ce < te && (d = ne + 1)
        : ce >= re && (d = ne);
    }
  if (
    f.initialized &&
    d !== S &&
    ((!f.allowSlideNext &&
      (w
        ? N > f.translate && N > f.minTranslate()
        : N < f.translate && N < f.minTranslate())) ||
      (!f.allowSlidePrev &&
        N > f.translate &&
        N > f.maxTranslate() &&
        (S || 0) !== d))
  )
    return !1;
  (d !== (E || 0) && o && f.emit('beforeSlideChangeStart'),
    f.updateProgress(N));
  let _;
  d > S ? (_ = 'next') : d < S ? (_ = 'prev') : (_ = 'reset');
  const P = f.virtual && f.params.virtual.enabled;
  if (!(P && c) && ((w && -N === f.translate) || (!w && N === f.translate)))
    return (
      f.updateActiveIndex(d),
      h.autoHeight && f.updateAutoHeight(),
      f.updateSlidesClasses(),
      h.effect !== 'slide' && f.setTranslate(N),
      _ !== 'reset' && (f.transitionStart(o, _), f.transitionEnd(o, _)),
      !1
    );
  if (h.cssMode) {
    const ne = f.isHorizontal(),
      ce = w ? N : -N;
    if (i === 0)
      (P &&
        ((f.wrapperEl.style.scrollSnapType = 'none'),
        (f._immediateVirtual = !0)),
        P && !f._cssModeVirtualInitialSet && f.params.initialSlide > 0
          ? ((f._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              O[ne ? 'scrollLeft' : 'scrollTop'] = ce;
            }))
          : (O[ne ? 'scrollLeft' : 'scrollTop'] = ce),
        P &&
          requestAnimationFrame(() => {
            ((f.wrapperEl.style.scrollSnapType = ''),
              (f._immediateVirtual = !1));
          }));
    else {
      if (!f.support.smoothScroll)
        return (
          ow({ swiper: f, targetPosition: ce, side: ne ? 'left' : 'top' }),
          !0
        );
      O.scrollTo({ [ne ? 'left' : 'top']: ce, behavior: 'smooth' });
    }
    return !0;
  }
  const oe = uw().isSafari;
  return (
    P && !c && oe && f.isElement && f.virtual.update(!1, !1, d),
    f.setTransition(i),
    f.setTranslate(N),
    f.updateActiveIndex(d),
    f.updateSlidesClasses(),
    f.emit('beforeTransitionStart', i, s),
    f.transitionStart(o, _),
    i === 0
      ? f.transitionEnd(o, _)
      : f.animating ||
        ((f.animating = !0),
        f.onSlideToWrapperTransitionEnd ||
          (f.onSlideToWrapperTransitionEnd = function (ce) {
            !f ||
              f.destroyed ||
              (ce.target === this &&
                (f.wrapperEl.removeEventListener(
                  'transitionend',
                  f.onSlideToWrapperTransitionEnd
                ),
                (f.onSlideToWrapperTransitionEnd = null),
                delete f.onSlideToWrapperTransitionEnd,
                f.transitionEnd(o, _)));
          }),
        f.wrapperEl.addEventListener(
          'transitionend',
          f.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function mP(r, i, o, s) {
  (r === void 0 && (r = 0),
    o === void 0 && (o = !0),
    typeof r == 'string' && (r = parseInt(r, 10)));
  const c = this;
  if (c.destroyed) return;
  typeof i > 'u' && (i = c.params.speed);
  const f = c.grid && c.params.grid && c.params.grid.rows > 1;
  let d = r;
  if (c.params.loop)
    if (c.virtual && c.params.virtual.enabled) d = d + c.virtual.slidesBefore;
    else {
      let h;
      if (f) {
        const w = d * c.params.grid.rows;
        h = c.slides.find(
          (O) => O.getAttribute('data-swiper-slide-index') * 1 === w
        ).column;
      } else h = c.getSlideIndexByData(d);
      const m = f
          ? Math.ceil(c.slides.length / c.params.grid.rows)
          : c.slides.length,
        { centeredSlides: g } = c.params;
      let E = c.params.slidesPerView;
      E === 'auto'
        ? (E = c.slidesPerViewDynamic())
        : ((E = Math.ceil(parseFloat(c.params.slidesPerView, 10))),
          g && E % 2 === 0 && (E = E + 1));
      let S = m - h < E;
      if (
        (g && (S = S || h < Math.ceil(E / 2)),
        s && g && c.params.slidesPerView !== 'auto' && !f && (S = !1),
        S)
      ) {
        const w = g
          ? h < c.activeIndex
            ? 'prev'
            : 'next'
          : h - c.activeIndex - 1 < c.params.slidesPerView
            ? 'next'
            : 'prev';
        c.loopFix({
          direction: w,
          slideTo: !0,
          activeSlideIndex: w === 'next' ? h + 1 : h - m + 1,
          slideRealIndex: w === 'next' ? c.realIndex : void 0,
        });
      }
      if (f) {
        const w = d * c.params.grid.rows;
        d = c.slides.find(
          (O) => O.getAttribute('data-swiper-slide-index') * 1 === w
        ).column;
      } else d = c.getSlideIndexByData(d);
    }
  return (
    requestAnimationFrame(() => {
      c.slideTo(d, i, o, s);
    }),
    c
  );
}
function yP(r, i, o) {
  i === void 0 && (i = !0);
  const s = this,
    { enabled: c, params: f, animating: d } = s;
  if (!c || s.destroyed) return s;
  typeof r > 'u' && (r = s.params.speed);
  let h = f.slidesPerGroup;
  f.slidesPerView === 'auto' &&
    f.slidesPerGroup === 1 &&
    f.slidesPerGroupAuto &&
    (h = Math.max(s.slidesPerViewDynamic('current', !0), 1));
  const m = s.activeIndex < f.slidesPerGroupSkip ? 1 : h,
    g = s.virtual && f.virtual.enabled;
  if (f.loop) {
    if (d && !g && f.loopPreventsSliding) return !1;
    if (
      (s.loopFix({ direction: 'next' }),
      (s._clientLeft = s.wrapperEl.clientLeft),
      s.activeIndex === s.slides.length - 1 && f.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          s.slideTo(s.activeIndex + m, r, i, o);
        }),
        !0
      );
  }
  return f.rewind && s.isEnd
    ? s.slideTo(0, r, i, o)
    : s.slideTo(s.activeIndex + m, r, i, o);
}
function gP(r, i, o) {
  i === void 0 && (i = !0);
  const s = this,
    {
      params: c,
      snapGrid: f,
      slidesGrid: d,
      rtlTranslate: h,
      enabled: m,
      animating: g,
    } = s;
  if (!m || s.destroyed) return s;
  typeof r > 'u' && (r = s.params.speed);
  const E = s.virtual && c.virtual.enabled;
  if (c.loop) {
    if (g && !E && c.loopPreventsSliding) return !1;
    (s.loopFix({ direction: 'prev' }),
      (s._clientLeft = s.wrapperEl.clientLeft));
  }
  const S = h ? s.translate : -s.translate;
  function w(_) {
    return _ < 0 ? -Math.floor(Math.abs(_)) : Math.floor(_);
  }
  const O = w(S),
    D = f.map((_) => w(_)),
    x = c.freeMode && c.freeMode.enabled;
  let z = f[D.indexOf(O) - 1];
  if (typeof z > 'u' && (c.cssMode || x)) {
    let _;
    (f.forEach((P, U) => {
      O >= P && (_ = U);
    }),
      typeof _ < 'u' && (z = x ? f[_] : f[_ > 0 ? _ - 1 : _]));
  }
  let N = 0;
  if (
    (typeof z < 'u' &&
      ((N = d.indexOf(z)),
      N < 0 && (N = s.activeIndex - 1),
      c.slidesPerView === 'auto' &&
        c.slidesPerGroup === 1 &&
        c.slidesPerGroupAuto &&
        ((N = N - s.slidesPerViewDynamic('previous', !0) + 1),
        (N = Math.max(N, 0)))),
    c.rewind && s.isBeginning)
  ) {
    const _ =
      s.params.virtual && s.params.virtual.enabled && s.virtual
        ? s.virtual.slides.length - 1
        : s.slides.length - 1;
    return s.slideTo(_, r, i, o);
  } else if (c.loop && s.activeIndex === 0 && c.cssMode)
    return (
      requestAnimationFrame(() => {
        s.slideTo(N, r, i, o);
      }),
      !0
    );
  return s.slideTo(N, r, i, o);
}
function bP(r, i, o) {
  i === void 0 && (i = !0);
  const s = this;
  if (!s.destroyed)
    return (
      typeof r > 'u' && (r = s.params.speed),
      s.slideTo(s.activeIndex, r, i, o)
    );
}
function SP(r, i, o, s) {
  (i === void 0 && (i = !0), s === void 0 && (s = 0.5));
  const c = this;
  if (c.destroyed) return;
  typeof r > 'u' && (r = c.params.speed);
  let f = c.activeIndex;
  const d = Math.min(c.params.slidesPerGroupSkip, f),
    h = d + Math.floor((f - d) / c.params.slidesPerGroup),
    m = c.rtlTranslate ? c.translate : -c.translate;
  if (m >= c.snapGrid[h]) {
    const g = c.snapGrid[h],
      E = c.snapGrid[h + 1];
    m - g > (E - g) * s && (f += c.params.slidesPerGroup);
  } else {
    const g = c.snapGrid[h - 1],
      E = c.snapGrid[h];
    m - g <= (E - g) * s && (f -= c.params.slidesPerGroup);
  }
  return (
    (f = Math.max(f, 0)),
    (f = Math.min(f, c.slidesGrid.length - 1)),
    c.slideTo(f, r, i, o)
  );
}
function EP() {
  const r = this;
  if (r.destroyed) return;
  const { params: i, slidesEl: o } = r,
    s = i.slidesPerView === 'auto' ? r.slidesPerViewDynamic() : i.slidesPerView;
  let c = r.getSlideIndexWhenGrid(r.clickedIndex),
    f;
  const d = r.isElement ? 'swiper-slide' : `.${i.slideClass}`,
    h = r.grid && r.params.grid && r.params.grid.rows > 1;
  if (i.loop) {
    if (r.animating) return;
    ((f = parseInt(r.clickedSlide.getAttribute('data-swiper-slide-index'), 10)),
      i.centeredSlides
        ? r.slideToLoop(f)
        : c >
            (h
              ? (r.slides.length - s) / 2 - (r.params.grid.rows - 1)
              : r.slides.length - s)
          ? (r.loopFix(),
            (c = r.getSlideIndex(
              ei(o, `${d}[data-swiper-slide-index="${f}"]`)[0]
            )),
            iw(() => {
              r.slideTo(c);
            }))
          : r.slideTo(c));
  } else r.slideTo(c);
}
var CP = {
  slideTo: hP,
  slideToLoop: mP,
  slideNext: yP,
  slidePrev: gP,
  slideReset: bP,
  slideToClosest: SP,
  slideToClickedSlide: EP,
};
function TP(r, i) {
  const o = this,
    { params: s, slidesEl: c } = o;
  if (!s.loop || (o.virtual && o.params.virtual.enabled)) return;
  const f = () => {
      ei(c, `.${s.slideClass}, swiper-slide`).forEach((O, D) => {
        O.setAttribute('data-swiper-slide-index', D);
      });
    },
    d = () => {
      const w = ei(c, `.${s.slideBlankClass}`);
      (w.forEach((O) => {
        O.remove();
      }),
        w.length > 0 && (o.recalcSlides(), o.updateSlides()));
    },
    h = o.grid && s.grid && s.grid.rows > 1;
  s.loopAddBlankSlides && (s.slidesPerGroup > 1 || h) && d();
  const m = s.slidesPerGroup * (h ? s.grid.rows : 1),
    g = o.slides.length % m !== 0,
    E = h && o.slides.length % s.grid.rows !== 0,
    S = (w) => {
      for (let O = 0; O < w; O += 1) {
        const D = o.isElement
          ? ry('swiper-slide', [s.slideBlankClass])
          : ry('div', [s.slideClass, s.slideBlankClass]);
        o.slidesEl.append(D);
      }
    };
  if (g) {
    if (s.loopAddBlankSlides) {
      const w = m - (o.slides.length % m);
      (S(w), o.recalcSlides(), o.updateSlides());
    } else
      _d(
        'Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
      );
    f();
  } else if (E) {
    if (s.loopAddBlankSlides) {
      const w = s.grid.rows - (o.slides.length % s.grid.rows);
      (S(w), o.recalcSlides(), o.updateSlides());
    } else
      _d(
        'Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
      );
    f();
  } else f();
  o.loopFix({
    slideRealIndex: r,
    direction: s.centeredSlides ? void 0 : 'next',
    initial: i,
  });
}
function wP(r) {
  let {
    slideRealIndex: i,
    slideTo: o = !0,
    direction: s,
    setTranslate: c,
    activeSlideIndex: f,
    initial: d,
    byController: h,
    byMousewheel: m,
  } = r === void 0 ? {} : r;
  const g = this;
  if (!g.params.loop) return;
  g.emit('beforeLoopFix');
  const {
      slides: E,
      allowSlidePrev: S,
      allowSlideNext: w,
      slidesEl: O,
      params: D,
    } = g,
    { centeredSlides: x, initialSlide: z } = D;
  if (
    ((g.allowSlidePrev = !0),
    (g.allowSlideNext = !0),
    g.virtual && D.virtual.enabled)
  ) {
    (o &&
      (!D.centeredSlides && g.snapIndex === 0
        ? g.slideTo(g.virtual.slides.length, 0, !1, !0)
        : D.centeredSlides && g.snapIndex < D.slidesPerView
          ? g.slideTo(g.virtual.slides.length + g.snapIndex, 0, !1, !0)
          : g.snapIndex === g.snapGrid.length - 1 &&
            g.slideTo(g.virtual.slidesBefore, 0, !1, !0)),
      (g.allowSlidePrev = S),
      (g.allowSlideNext = w),
      g.emit('loopFix'));
    return;
  }
  let N = D.slidesPerView;
  N === 'auto'
    ? (N = g.slidesPerViewDynamic())
    : ((N = Math.ceil(parseFloat(D.slidesPerView, 10))),
      x && N % 2 === 0 && (N = N + 1));
  const _ = D.slidesPerGroupAuto ? N : D.slidesPerGroup;
  let P = x ? Math.max(_, Math.ceil(N / 2)) : _;
  (P % _ !== 0 && (P += _ - (P % _)),
    (P += D.loopAdditionalSlides),
    (g.loopedSlides = P));
  const U = g.grid && D.grid && D.grid.rows > 1;
  E.length < N + P || (g.params.effect === 'cards' && E.length < N + P * 2)
    ? _d(
        'Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters'
      )
    : U &&
      D.grid.fill === 'row' &&
      _d(
        'Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`'
      );
  const V = [],
    oe = [],
    ne = U ? Math.ceil(E.length / D.grid.rows) : E.length,
    ce = d && ne - z < N && !x;
  let re = ce ? z : g.activeIndex;
  typeof f > 'u'
    ? (f = g.getSlideIndex(
        E.find((be) => be.classList.contains(D.slideActiveClass))
      ))
    : (re = f);
  const te = s === 'next' || !s,
    ue = s === 'prev' || !s;
  let ae = 0,
    ie = 0;
  const Me = (U ? E[f].column : f) + (x && typeof c > 'u' ? -N / 2 + 0.5 : 0);
  if (Me < P) {
    ae = Math.max(P - Me, _);
    for (let be = 0; be < P - Me; be += 1) {
      const me = be - Math.floor(be / ne) * ne;
      if (U) {
        const Ve = ne - me - 1;
        for (let Qe = E.length - 1; Qe >= 0; Qe -= 1)
          E[Qe].column === Ve && V.push(Qe);
      } else V.push(ne - me - 1);
    }
  } else if (Me + N > ne - P) {
    ((ie = Math.max(Me - (ne - P * 2), _)),
      ce && (ie = Math.max(ie, N - ne + z + 1)));
    for (let be = 0; be < ie; be += 1) {
      const me = be - Math.floor(be / ne) * ne;
      U
        ? E.forEach((Ve, Qe) => {
            Ve.column === me && oe.push(Qe);
          })
        : oe.push(me);
    }
  }
  if (
    ((g.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      g.__preventObserver__ = !1;
    }),
    g.params.effect === 'cards' &&
      E.length < N + P * 2 &&
      (oe.includes(f) && oe.splice(oe.indexOf(f), 1),
      V.includes(f) && V.splice(V.indexOf(f), 1)),
    ue &&
      V.forEach((be) => {
        ((E[be].swiperLoopMoveDOM = !0),
          O.prepend(E[be]),
          (E[be].swiperLoopMoveDOM = !1));
      }),
    te &&
      oe.forEach((be) => {
        ((E[be].swiperLoopMoveDOM = !0),
          O.append(E[be]),
          (E[be].swiperLoopMoveDOM = !1));
      }),
    g.recalcSlides(),
    D.slidesPerView === 'auto'
      ? g.updateSlides()
      : U &&
        ((V.length > 0 && ue) || (oe.length > 0 && te)) &&
        g.slides.forEach((be, me) => {
          g.grid.updateSlide(me, be, g.slides);
        }),
    D.watchSlidesProgress && g.updateSlidesOffset(),
    o)
  ) {
    if (V.length > 0 && ue) {
      if (typeof i > 'u') {
        const be = g.slidesGrid[re],
          Ve = g.slidesGrid[re + ae] - be;
        m
          ? g.setTranslate(g.translate - Ve)
          : (g.slideTo(re + Math.ceil(ae), 0, !1, !0),
            c &&
              ((g.touchEventsData.startTranslate =
                g.touchEventsData.startTranslate - Ve),
              (g.touchEventsData.currentTranslate =
                g.touchEventsData.currentTranslate - Ve)));
      } else if (c) {
        const be = U ? V.length / D.grid.rows : V.length;
        (g.slideTo(g.activeIndex + be, 0, !1, !0),
          (g.touchEventsData.currentTranslate = g.translate));
      }
    } else if (oe.length > 0 && te)
      if (typeof i > 'u') {
        const be = g.slidesGrid[re],
          Ve = g.slidesGrid[re - ie] - be;
        m
          ? g.setTranslate(g.translate - Ve)
          : (g.slideTo(re - ie, 0, !1, !0),
            c &&
              ((g.touchEventsData.startTranslate =
                g.touchEventsData.startTranslate - Ve),
              (g.touchEventsData.currentTranslate =
                g.touchEventsData.currentTranslate - Ve)));
      } else {
        const be = U ? oe.length / D.grid.rows : oe.length;
        g.slideTo(g.activeIndex - be, 0, !1, !0);
      }
  }
  if (
    ((g.allowSlidePrev = S),
    (g.allowSlideNext = w),
    g.controller && g.controller.control && !h)
  ) {
    const be = {
      slideRealIndex: i,
      direction: s,
      setTranslate: c,
      activeSlideIndex: f,
      byController: !0,
    };
    Array.isArray(g.controller.control)
      ? g.controller.control.forEach((me) => {
          !me.destroyed &&
            me.params.loop &&
            me.loopFix({
              ...be,
              slideTo: me.params.slidesPerView === D.slidesPerView ? o : !1,
            });
        })
      : g.controller.control instanceof g.constructor &&
        g.controller.control.params.loop &&
        g.controller.control.loopFix({
          ...be,
          slideTo:
            g.controller.control.params.slidesPerView === D.slidesPerView
              ? o
              : !1,
        });
  }
  g.emit('loopFix');
}
function xP() {
  const r = this,
    { params: i, slidesEl: o } = r;
  if (!i.loop || !o || (r.virtual && r.params.virtual.enabled)) return;
  r.recalcSlides();
  const s = [];
  (r.slides.forEach((c) => {
    const f =
      typeof c.swiperSlideIndex > 'u'
        ? c.getAttribute('data-swiper-slide-index') * 1
        : c.swiperSlideIndex;
    s[f] = c;
  }),
    r.slides.forEach((c) => {
      c.removeAttribute('data-swiper-slide-index');
    }),
    s.forEach((c) => {
      o.append(c);
    }),
    r.recalcSlides(),
    r.slideTo(r.realIndex, 0));
}
var RP = { loopCreate: TP, loopFix: wP, loopDestroy: xP };
function _P(r) {
  const i = this;
  if (
    !i.params.simulateTouch ||
    (i.params.watchOverflow && i.isLocked) ||
    i.params.cssMode
  )
    return;
  const o = i.params.touchEventsTarget === 'container' ? i.el : i.wrapperEl;
  (i.isElement && (i.__preventObserver__ = !0),
    (o.style.cursor = 'move'),
    (o.style.cursor = r ? 'grabbing' : 'grab'),
    i.isElement &&
      requestAnimationFrame(() => {
        i.__preventObserver__ = !1;
      }));
}
function DP() {
  const r = this;
  (r.params.watchOverflow && r.isLocked) ||
    r.params.cssMode ||
    (r.isElement && (r.__preventObserver__ = !0),
    (r[
      r.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'
    ].style.cursor = ''),
    r.isElement &&
      requestAnimationFrame(() => {
        r.__preventObserver__ = !1;
      }));
}
var OP = { setGrabCursor: _P, unsetGrabCursor: DP };
function AP(r, i) {
  i === void 0 && (i = this);
  function o(s) {
    if (!s || s === Do() || s === ar()) return null;
    s.assignedSlot && (s = s.assignedSlot);
    const c = s.closest(r);
    return !c && !s.getRootNode ? null : c || o(s.getRootNode().host);
  }
  return o(i);
}
function pT(r, i, o) {
  const s = ar(),
    { params: c } = r,
    f = c.edgeSwipeDetection,
    d = c.edgeSwipeThreshold;
  return f && (o <= d || o >= s.innerWidth - d)
    ? f === 'prevent'
      ? (i.preventDefault(), !0)
      : !1
    : !0;
}
function MP(r) {
  const i = this,
    o = Do();
  let s = r;
  s.originalEvent && (s = s.originalEvent);
  const c = i.touchEventsData;
  if (s.type === 'pointerdown') {
    if (c.pointerId !== null && c.pointerId !== s.pointerId) return;
    c.pointerId = s.pointerId;
  } else
    s.type === 'touchstart' &&
      s.targetTouches.length === 1 &&
      (c.touchId = s.targetTouches[0].identifier);
  if (s.type === 'touchstart') {
    pT(i, s, s.targetTouches[0].pageX);
    return;
  }
  const { params: f, touches: d, enabled: h } = i;
  if (
    !h ||
    (!f.simulateTouch && s.pointerType === 'mouse') ||
    (i.animating && f.preventInteractionOnTransition)
  )
    return;
  !i.animating && f.cssMode && f.loop && i.loopFix();
  let m = s.target;
  if (
    (f.touchEventsTarget === 'wrapper' && !FN(m, i.wrapperEl)) ||
    ('which' in s && s.which === 3) ||
    ('button' in s && s.button > 0) ||
    (c.isTouched && c.isMoved)
  )
    return;
  const g = !!f.noSwipingClass && f.noSwipingClass !== '',
    E = s.composedPath ? s.composedPath() : s.path;
  g && s.target && s.target.shadowRoot && E && (m = E[0]);
  const S = f.noSwipingSelector ? f.noSwipingSelector : `.${f.noSwipingClass}`,
    w = !!(s.target && s.target.shadowRoot);
  if (f.noSwiping && (w ? AP(S, m) : m.closest(S))) {
    i.allowClick = !0;
    return;
  }
  if (f.swipeHandler && !m.closest(f.swipeHandler)) return;
  ((d.currentX = s.pageX), (d.currentY = s.pageY));
  const O = d.currentX,
    D = d.currentY;
  if (!pT(i, s, O)) return;
  (Object.assign(c, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (d.startX = O),
    (d.startY = D),
    (c.touchStartTime = Rd()),
    (i.allowClick = !0),
    i.updateSize(),
    (i.swipeDirection = void 0),
    f.threshold > 0 && (c.allowThresholdMove = !1));
  let x = !0;
  (m.matches(c.focusableElements) &&
    ((x = !1), m.nodeName === 'SELECT' && (c.isTouched = !1)),
    o.activeElement &&
      o.activeElement.matches(c.focusableElements) &&
      o.activeElement !== m &&
      (s.pointerType === 'mouse' ||
        (s.pointerType !== 'mouse' && !m.matches(c.focusableElements))) &&
      o.activeElement.blur());
  const z = x && i.allowTouchMove && f.touchStartPreventDefault;
  ((f.touchStartForcePreventDefault || z) &&
    !m.isContentEditable &&
    s.preventDefault(),
    f.freeMode &&
      f.freeMode.enabled &&
      i.freeMode &&
      i.animating &&
      !f.cssMode &&
      i.freeMode.onTouchStart(),
    i.emit('touchStart', s));
}
function LP(r) {
  const i = Do(),
    o = this,
    s = o.touchEventsData,
    { params: c, touches: f, rtlTranslate: d, enabled: h } = o;
  if (!h || (!c.simulateTouch && r.pointerType === 'mouse')) return;
  let m = r;
  if (
    (m.originalEvent && (m = m.originalEvent),
    m.type === 'pointermove' &&
      (s.touchId !== null || m.pointerId !== s.pointerId))
  )
    return;
  let g;
  if (m.type === 'touchmove') {
    if (
      ((g = [...m.changedTouches].find((oe) => oe.identifier === s.touchId)),
      !g || g.identifier !== s.touchId)
    )
      return;
  } else g = m;
  if (!s.isTouched) {
    s.startMoving && s.isScrolling && o.emit('touchMoveOpposite', m);
    return;
  }
  const E = g.pageX,
    S = g.pageY;
  if (m.preventedByNestedSwiper) {
    ((f.startX = E), (f.startY = S));
    return;
  }
  if (!o.allowTouchMove) {
    (m.target.matches(s.focusableElements) || (o.allowClick = !1),
      s.isTouched &&
        (Object.assign(f, { startX: E, startY: S, currentX: E, currentY: S }),
        (s.touchStartTime = Rd())));
    return;
  }
  if (c.touchReleaseOnEdges && !c.loop)
    if (o.isVertical()) {
      if (
        (S < f.startY && o.translate <= o.maxTranslate()) ||
        (S > f.startY && o.translate >= o.minTranslate())
      ) {
        ((s.isTouched = !1), (s.isMoved = !1));
        return;
      }
    } else {
      if (
        d &&
        ((E > f.startX && -o.translate <= o.maxTranslate()) ||
          (E < f.startX && -o.translate >= o.minTranslate()))
      )
        return;
      if (
        !d &&
        ((E < f.startX && o.translate <= o.maxTranslate()) ||
          (E > f.startX && o.translate >= o.minTranslate()))
      )
        return;
    }
  if (
    (i.activeElement &&
      i.activeElement.matches(s.focusableElements) &&
      i.activeElement !== m.target &&
      m.pointerType !== 'mouse' &&
      i.activeElement.blur(),
    i.activeElement &&
      m.target === i.activeElement &&
      m.target.matches(s.focusableElements))
  ) {
    ((s.isMoved = !0), (o.allowClick = !1));
    return;
  }
  (s.allowTouchCallbacks && o.emit('touchMove', m),
    (f.previousX = f.currentX),
    (f.previousY = f.currentY),
    (f.currentX = E),
    (f.currentY = S));
  const w = f.currentX - f.startX,
    O = f.currentY - f.startY;
  if (o.params.threshold && Math.sqrt(w ** 2 + O ** 2) < o.params.threshold)
    return;
  if (typeof s.isScrolling > 'u') {
    let oe;
    (o.isHorizontal() && f.currentY === f.startY) ||
    (o.isVertical() && f.currentX === f.startX)
      ? (s.isScrolling = !1)
      : w * w + O * O >= 25 &&
        ((oe = (Math.atan2(Math.abs(O), Math.abs(w)) * 180) / Math.PI),
        (s.isScrolling = o.isHorizontal()
          ? oe > c.touchAngle
          : 90 - oe > c.touchAngle));
  }
  if (
    (s.isScrolling && o.emit('touchMoveOpposite', m),
    typeof s.startMoving > 'u' &&
      (f.currentX !== f.startX || f.currentY !== f.startY) &&
      (s.startMoving = !0),
    s.isScrolling ||
      (m.type === 'touchmove' && s.preventTouchMoveFromPointerMove))
  ) {
    s.isTouched = !1;
    return;
  }
  if (!s.startMoving) return;
  ((o.allowClick = !1),
    !c.cssMode && m.cancelable && m.preventDefault(),
    c.touchMoveStopPropagation && !c.nested && m.stopPropagation());
  let D = o.isHorizontal() ? w : O,
    x = o.isHorizontal() ? f.currentX - f.previousX : f.currentY - f.previousY;
  (c.oneWayMovement &&
    ((D = Math.abs(D) * (d ? 1 : -1)), (x = Math.abs(x) * (d ? 1 : -1))),
    (f.diff = D),
    (D *= c.touchRatio),
    d && ((D = -D), (x = -x)));
  const z = o.touchesDirection;
  ((o.swipeDirection = D > 0 ? 'prev' : 'next'),
    (o.touchesDirection = x > 0 ? 'prev' : 'next'));
  const N = o.params.loop && !c.cssMode,
    _ =
      (o.touchesDirection === 'next' && o.allowSlideNext) ||
      (o.touchesDirection === 'prev' && o.allowSlidePrev);
  if (!s.isMoved) {
    if (
      (N && _ && o.loopFix({ direction: o.swipeDirection }),
      (s.startTranslate = o.getTranslate()),
      o.setTransition(0),
      o.animating)
    ) {
      const oe = new window.CustomEvent('transitionend', {
        bubbles: !0,
        cancelable: !0,
        detail: { bySwiperTouchMove: !0 },
      });
      o.wrapperEl.dispatchEvent(oe);
    }
    ((s.allowMomentumBounce = !1),
      c.grabCursor &&
        (o.allowSlideNext === !0 || o.allowSlidePrev === !0) &&
        o.setGrabCursor(!0),
      o.emit('sliderFirstMove', m));
  }
  let P;
  if (
    (new Date().getTime(),
    c._loopSwapReset !== !1 &&
      s.isMoved &&
      s.allowThresholdMove &&
      z !== o.touchesDirection &&
      N &&
      _ &&
      Math.abs(D) >= 1)
  ) {
    (Object.assign(f, {
      startX: E,
      startY: S,
      currentX: E,
      currentY: S,
      startTranslate: s.currentTranslate,
    }),
      (s.loopSwapReset = !0),
      (s.startTranslate = s.currentTranslate));
    return;
  }
  (o.emit('sliderMove', m),
    (s.isMoved = !0),
    (s.currentTranslate = D + s.startTranslate));
  let U = !0,
    V = c.resistanceRatio;
  if (
    (c.touchReleaseOnEdges && (V = 0),
    D > 0
      ? (N &&
          _ &&
          !P &&
          s.allowThresholdMove &&
          s.currentTranslate >
            (c.centeredSlides
              ? o.minTranslate() -
                o.slidesSizesGrid[o.activeIndex + 1] -
                (c.slidesPerView !== 'auto' &&
                o.slides.length - c.slidesPerView >= 2
                  ? o.slidesSizesGrid[o.activeIndex + 1] + o.params.spaceBetween
                  : 0) -
                o.params.spaceBetween
              : o.minTranslate()) &&
          o.loopFix({
            direction: 'prev',
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        s.currentTranslate > o.minTranslate() &&
          ((U = !1),
          c.resistance &&
            (s.currentTranslate =
              o.minTranslate() -
              1 +
              (-o.minTranslate() + s.startTranslate + D) ** V)))
      : D < 0 &&
        (N &&
          _ &&
          !P &&
          s.allowThresholdMove &&
          s.currentTranslate <
            (c.centeredSlides
              ? o.maxTranslate() +
                o.slidesSizesGrid[o.slidesSizesGrid.length - 1] +
                o.params.spaceBetween +
                (c.slidesPerView !== 'auto' &&
                o.slides.length - c.slidesPerView >= 2
                  ? o.slidesSizesGrid[o.slidesSizesGrid.length - 1] +
                    o.params.spaceBetween
                  : 0)
              : o.maxTranslate()) &&
          o.loopFix({
            direction: 'next',
            setTranslate: !0,
            activeSlideIndex:
              o.slides.length -
              (c.slidesPerView === 'auto'
                ? o.slidesPerViewDynamic()
                : Math.ceil(parseFloat(c.slidesPerView, 10))),
          }),
        s.currentTranslate < o.maxTranslate() &&
          ((U = !1),
          c.resistance &&
            (s.currentTranslate =
              o.maxTranslate() +
              1 -
              (o.maxTranslate() - s.startTranslate - D) ** V))),
    U && (m.preventedByNestedSwiper = !0),
    !o.allowSlideNext &&
      o.swipeDirection === 'next' &&
      s.currentTranslate < s.startTranslate &&
      (s.currentTranslate = s.startTranslate),
    !o.allowSlidePrev &&
      o.swipeDirection === 'prev' &&
      s.currentTranslate > s.startTranslate &&
      (s.currentTranslate = s.startTranslate),
    !o.allowSlidePrev &&
      !o.allowSlideNext &&
      (s.currentTranslate = s.startTranslate),
    c.threshold > 0)
  )
    if (Math.abs(D) > c.threshold || s.allowThresholdMove) {
      if (!s.allowThresholdMove) {
        ((s.allowThresholdMove = !0),
          (f.startX = f.currentX),
          (f.startY = f.currentY),
          (s.currentTranslate = s.startTranslate),
          (f.diff = o.isHorizontal()
            ? f.currentX - f.startX
            : f.currentY - f.startY));
        return;
      }
    } else {
      s.currentTranslate = s.startTranslate;
      return;
    }
  !c.followFinger ||
    c.cssMode ||
    (((c.freeMode && c.freeMode.enabled && o.freeMode) ||
      c.watchSlidesProgress) &&
      (o.updateActiveIndex(), o.updateSlidesClasses()),
    c.freeMode && c.freeMode.enabled && o.freeMode && o.freeMode.onTouchMove(),
    o.updateProgress(s.currentTranslate),
    o.setTranslate(s.currentTranslate));
}
function kP(r) {
  const i = this,
    o = i.touchEventsData;
  let s = r;
  s.originalEvent && (s = s.originalEvent);
  let c;
  if (s.type === 'touchend' || s.type === 'touchcancel') {
    if (
      ((c = [...s.changedTouches].find((V) => V.identifier === o.touchId)),
      !c || c.identifier !== o.touchId)
    )
      return;
  } else {
    if (o.touchId !== null || s.pointerId !== o.pointerId) return;
    c = s;
  }
  if (
    ['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(
      s.type
    ) &&
    !(
      ['pointercancel', 'contextmenu'].includes(s.type) &&
      (i.browser.isSafari || i.browser.isWebView)
    )
  )
    return;
  ((o.pointerId = null), (o.touchId = null));
  const {
    params: d,
    touches: h,
    rtlTranslate: m,
    slidesGrid: g,
    enabled: E,
  } = i;
  if (!E || (!d.simulateTouch && s.pointerType === 'mouse')) return;
  if (
    (o.allowTouchCallbacks && i.emit('touchEnd', s),
    (o.allowTouchCallbacks = !1),
    !o.isTouched)
  ) {
    (o.isMoved && d.grabCursor && i.setGrabCursor(!1),
      (o.isMoved = !1),
      (o.startMoving = !1));
    return;
  }
  d.grabCursor &&
    o.isMoved &&
    o.isTouched &&
    (i.allowSlideNext === !0 || i.allowSlidePrev === !0) &&
    i.setGrabCursor(!1);
  const S = Rd(),
    w = S - o.touchStartTime;
  if (i.allowClick) {
    const V = s.path || (s.composedPath && s.composedPath());
    (i.updateClickedSlide((V && V[0]) || s.target, V),
      i.emit('tap click', s),
      w < 300 &&
        S - o.lastClickTime < 300 &&
        i.emit('doubleTap doubleClick', s));
  }
  if (
    ((o.lastClickTime = Rd()),
    iw(() => {
      i.destroyed || (i.allowClick = !0);
    }),
    !o.isTouched ||
      !o.isMoved ||
      !i.swipeDirection ||
      (h.diff === 0 && !o.loopSwapReset) ||
      (o.currentTranslate === o.startTranslate && !o.loopSwapReset))
  ) {
    ((o.isTouched = !1), (o.isMoved = !1), (o.startMoving = !1));
    return;
  }
  ((o.isTouched = !1), (o.isMoved = !1), (o.startMoving = !1));
  let O;
  if (
    (d.followFinger
      ? (O = m ? i.translate : -i.translate)
      : (O = -o.currentTranslate),
    d.cssMode)
  )
    return;
  if (d.freeMode && d.freeMode.enabled) {
    i.freeMode.onTouchEnd({ currentPos: O });
    return;
  }
  const D = O >= -i.maxTranslate() && !i.params.loop;
  let x = 0,
    z = i.slidesSizesGrid[0];
  for (
    let V = 0;
    V < g.length;
    V += V < d.slidesPerGroupSkip ? 1 : d.slidesPerGroup
  ) {
    const oe = V < d.slidesPerGroupSkip - 1 ? 1 : d.slidesPerGroup;
    typeof g[V + oe] < 'u'
      ? (D || (O >= g[V] && O < g[V + oe])) && ((x = V), (z = g[V + oe] - g[V]))
      : (D || O >= g[V]) && ((x = V), (z = g[g.length - 1] - g[g.length - 2]));
  }
  let N = null,
    _ = null;
  d.rewind &&
    (i.isBeginning
      ? (_ =
          d.virtual && d.virtual.enabled && i.virtual
            ? i.virtual.slides.length - 1
            : i.slides.length - 1)
      : i.isEnd && (N = 0));
  const P = (O - g[x]) / z,
    U = x < d.slidesPerGroupSkip - 1 ? 1 : d.slidesPerGroup;
  if (w > d.longSwipesMs) {
    if (!d.longSwipes) {
      i.slideTo(i.activeIndex);
      return;
    }
    (i.swipeDirection === 'next' &&
      (P >= d.longSwipesRatio
        ? i.slideTo(d.rewind && i.isEnd ? N : x + U)
        : i.slideTo(x)),
      i.swipeDirection === 'prev' &&
        (P > 1 - d.longSwipesRatio
          ? i.slideTo(x + U)
          : _ !== null && P < 0 && Math.abs(P) > d.longSwipesRatio
            ? i.slideTo(_)
            : i.slideTo(x)));
  } else {
    if (!d.shortSwipes) {
      i.slideTo(i.activeIndex);
      return;
    }
    i.navigation &&
    (s.target === i.navigation.nextEl || s.target === i.navigation.prevEl)
      ? s.target === i.navigation.nextEl
        ? i.slideTo(x + U)
        : i.slideTo(x)
      : (i.swipeDirection === 'next' && i.slideTo(N !== null ? N : x + U),
        i.swipeDirection === 'prev' && i.slideTo(_ !== null ? _ : x));
  }
}
function vT() {
  const r = this,
    { params: i, el: o } = r;
  if (o && o.offsetWidth === 0) return;
  i.breakpoints && r.setBreakpoint();
  const { allowSlideNext: s, allowSlidePrev: c, snapGrid: f } = r,
    d = r.virtual && r.params.virtual.enabled;
  ((r.allowSlideNext = !0),
    (r.allowSlidePrev = !0),
    r.updateSize(),
    r.updateSlides(),
    r.updateSlidesClasses());
  const h = d && i.loop;
  ((i.slidesPerView === 'auto' || i.slidesPerView > 1) &&
  r.isEnd &&
  !r.isBeginning &&
  !r.params.centeredSlides &&
  !h
    ? r.slideTo(r.slides.length - 1, 0, !1, !0)
    : r.params.loop && !d
      ? r.slideToLoop(r.realIndex, 0, !1, !0)
      : r.slideTo(r.activeIndex, 0, !1, !0),
    r.autoplay &&
      r.autoplay.running &&
      r.autoplay.paused &&
      (clearTimeout(r.autoplay.resizeTimeout),
      (r.autoplay.resizeTimeout = setTimeout(() => {
        r.autoplay &&
          r.autoplay.running &&
          r.autoplay.paused &&
          r.autoplay.resume();
      }, 500))),
    (r.allowSlidePrev = c),
    (r.allowSlideNext = s),
    r.params.watchOverflow && f !== r.snapGrid && r.checkOverflow());
}
function NP(r) {
  const i = this;
  i.enabled &&
    (i.allowClick ||
      (i.params.preventClicks && r.preventDefault(),
      i.params.preventClicksPropagation &&
        i.animating &&
        (r.stopPropagation(), r.stopImmediatePropagation())));
}
function PP() {
  const r = this,
    { wrapperEl: i, rtlTranslate: o, enabled: s } = r;
  if (!s) return;
  ((r.previousTranslate = r.translate),
    r.isHorizontal()
      ? (r.translate = -i.scrollLeft)
      : (r.translate = -i.scrollTop),
    r.translate === 0 && (r.translate = 0),
    r.updateActiveIndex(),
    r.updateSlidesClasses());
  let c;
  const f = r.maxTranslate() - r.minTranslate();
  (f === 0 ? (c = 0) : (c = (r.translate - r.minTranslate()) / f),
    c !== r.progress && r.updateProgress(o ? -r.translate : r.translate),
    r.emit('setTranslate', r.translate, !1));
}
function zP(r) {
  const i = this;
  (md(i, r.target),
    !(
      i.params.cssMode ||
      (i.params.slidesPerView !== 'auto' && !i.params.autoHeight)
    ) && i.update());
}
function UP() {
  const r = this;
  r.documentTouchHandlerProceeded ||
    ((r.documentTouchHandlerProceeded = !0),
    r.params.touchReleaseOnEdges && (r.el.style.touchAction = 'auto'));
}
const fw = (r, i) => {
  const o = Do(),
    { params: s, el: c, wrapperEl: f, device: d } = r,
    h = !!s.nested,
    m = i === 'on' ? 'addEventListener' : 'removeEventListener',
    g = i;
  !c ||
    typeof c == 'string' ||
    (o[m]('touchstart', r.onDocumentTouchStart, { passive: !1, capture: h }),
    c[m]('touchstart', r.onTouchStart, { passive: !1 }),
    c[m]('pointerdown', r.onTouchStart, { passive: !1 }),
    o[m]('touchmove', r.onTouchMove, { passive: !1, capture: h }),
    o[m]('pointermove', r.onTouchMove, { passive: !1, capture: h }),
    o[m]('touchend', r.onTouchEnd, { passive: !0 }),
    o[m]('pointerup', r.onTouchEnd, { passive: !0 }),
    o[m]('pointercancel', r.onTouchEnd, { passive: !0 }),
    o[m]('touchcancel', r.onTouchEnd, { passive: !0 }),
    o[m]('pointerout', r.onTouchEnd, { passive: !0 }),
    o[m]('pointerleave', r.onTouchEnd, { passive: !0 }),
    o[m]('contextmenu', r.onTouchEnd, { passive: !0 }),
    (s.preventClicks || s.preventClicksPropagation) &&
      c[m]('click', r.onClick, !0),
    s.cssMode && f[m]('scroll', r.onScroll),
    s.updateOnWindowResize
      ? r[g](
          d.ios || d.android
            ? 'resize orientationchange observerUpdate'
            : 'resize observerUpdate',
          vT,
          !0
        )
      : r[g]('observerUpdate', vT, !0),
    c[m]('load', r.onLoad, { capture: !0 }));
};
function FP() {
  const r = this,
    { params: i } = r;
  ((r.onTouchStart = MP.bind(r)),
    (r.onTouchMove = LP.bind(r)),
    (r.onTouchEnd = kP.bind(r)),
    (r.onDocumentTouchStart = UP.bind(r)),
    i.cssMode && (r.onScroll = PP.bind(r)),
    (r.onClick = NP.bind(r)),
    (r.onLoad = zP.bind(r)),
    fw(r, 'on'));
}
function VP() {
  fw(this, 'off');
}
var HP = { attachEvents: FP, detachEvents: VP };
const hT = (r, i) => r.grid && i.grid && i.grid.rows > 1;
function IP() {
  const r = this,
    { realIndex: i, initialized: o, params: s, el: c } = r,
    f = s.breakpoints;
  if (!f || (f && Object.keys(f).length === 0)) return;
  const d = Do(),
    h =
      s.breakpointsBase === 'window' || !s.breakpointsBase
        ? s.breakpointsBase
        : 'container',
    m =
      ['window', 'container'].includes(s.breakpointsBase) || !s.breakpointsBase
        ? r.el
        : d.querySelector(s.breakpointsBase),
    g = r.getBreakpoint(f, h, m);
  if (!g || r.currentBreakpoint === g) return;
  const S = (g in f ? f[g] : void 0) || r.originalParams,
    w = hT(r, s),
    O = hT(r, S),
    D = r.params.grabCursor,
    x = S.grabCursor,
    z = s.enabled;
  (w && !O
    ? (c.classList.remove(
        `${s.containerModifierClass}grid`,
        `${s.containerModifierClass}grid-column`
      ),
      r.emitContainerClasses())
    : !w &&
      O &&
      (c.classList.add(`${s.containerModifierClass}grid`),
      ((S.grid.fill && S.grid.fill === 'column') ||
        (!S.grid.fill && s.grid.fill === 'column')) &&
        c.classList.add(`${s.containerModifierClass}grid-column`),
      r.emitContainerClasses()),
    D && !x ? r.unsetGrabCursor() : !D && x && r.setGrabCursor(),
    ['navigation', 'pagination', 'scrollbar'].forEach((oe) => {
      if (typeof S[oe] > 'u') return;
      const ne = s[oe] && s[oe].enabled,
        ce = S[oe] && S[oe].enabled;
      (ne && !ce && r[oe].disable(), !ne && ce && r[oe].enable());
    }));
  const N = S.direction && S.direction !== s.direction,
    _ = s.loop && (S.slidesPerView !== s.slidesPerView || N),
    P = s.loop;
  (N && o && r.changeDirection(), Rr(r.params, S));
  const U = r.params.enabled,
    V = r.params.loop;
  (Object.assign(r, {
    allowTouchMove: r.params.allowTouchMove,
    allowSlideNext: r.params.allowSlideNext,
    allowSlidePrev: r.params.allowSlidePrev,
  }),
    z && !U ? r.disable() : !z && U && r.enable(),
    (r.currentBreakpoint = g),
    r.emit('_beforeBreakpoint', S),
    o &&
      (_
        ? (r.loopDestroy(), r.loopCreate(i), r.updateSlides())
        : !P && V
          ? (r.loopCreate(i), r.updateSlides())
          : P && !V && r.loopDestroy()),
    r.emit('breakpoint', S));
}
function BP(r, i, o) {
  if ((i === void 0 && (i = 'window'), !r || (i === 'container' && !o))) return;
  let s = !1;
  const c = ar(),
    f = i === 'window' ? c.innerHeight : o.clientHeight,
    d = Object.keys(r).map((h) => {
      if (typeof h == 'string' && h.indexOf('@') === 0) {
        const m = parseFloat(h.substr(1));
        return { value: f * m, point: h };
      }
      return { value: h, point: h };
    });
  d.sort((h, m) => parseInt(h.value, 10) - parseInt(m.value, 10));
  for (let h = 0; h < d.length; h += 1) {
    const { point: m, value: g } = d[h];
    i === 'window'
      ? c.matchMedia(`(min-width: ${g}px)`).matches && (s = m)
      : g <= o.clientWidth && (s = m);
  }
  return s || 'max';
}
var jP = { setBreakpoint: IP, getBreakpoint: BP };
function $P(r, i) {
  const o = [];
  return (
    r.forEach((s) => {
      typeof s == 'object'
        ? Object.keys(s).forEach((c) => {
            s[c] && o.push(i + c);
          })
        : typeof s == 'string' && o.push(i + s);
    }),
    o
  );
}
function YP() {
  const r = this,
    { classNames: i, params: o, rtl: s, el: c, device: f } = r,
    d = $P(
      [
        'initialized',
        o.direction,
        { 'free-mode': r.params.freeMode && o.freeMode.enabled },
        { autoheight: o.autoHeight },
        { rtl: s },
        { grid: o.grid && o.grid.rows > 1 },
        {
          'grid-column': o.grid && o.grid.rows > 1 && o.grid.fill === 'column',
        },
        { android: f.android },
        { ios: f.ios },
        { 'css-mode': o.cssMode },
        { centered: o.cssMode && o.centeredSlides },
        { 'watch-progress': o.watchSlidesProgress },
      ],
      o.containerModifierClass
    );
  (i.push(...d), c.classList.add(...i), r.emitContainerClasses());
}
function GP() {
  const r = this,
    { el: i, classNames: o } = r;
  !i ||
    typeof i == 'string' ||
    (i.classList.remove(...o), r.emitContainerClasses());
}
var WP = { addClasses: YP, removeClasses: GP };
function qP() {
  const r = this,
    { isLocked: i, params: o } = r,
    { slidesOffsetBefore: s } = o;
  if (s) {
    const c = r.slides.length - 1,
      f = r.slidesGrid[c] + r.slidesSizesGrid[c] + s * 2;
    r.isLocked = r.size > f;
  } else r.isLocked = r.snapGrid.length === 1;
  (o.allowSlideNext === !0 && (r.allowSlideNext = !r.isLocked),
    o.allowSlidePrev === !0 && (r.allowSlidePrev = !r.isLocked),
    i && i !== r.isLocked && (r.isEnd = !1),
    i !== r.isLocked && r.emit(r.isLocked ? 'lock' : 'unlock'));
}
var XP = { checkOverflow: qP },
  iy = {
    init: !0,
    direction: 'horizontal',
    oneWayMovement: !1,
    swiperElementNodeName: 'SWIPER-CONTAINER',
    touchEventsTarget: 'wrapper',
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: 'swiper',
    enabled: !0,
    focusableElements: 'input, select, option, textarea, button, video, label',
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: 'slide',
    breakpoints: void 0,
    breakpointsBase: 'window',
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: 'swiper-',
    slideClass: 'swiper-slide',
    slideBlankClass: 'swiper-slide-blank',
    slideActiveClass: 'swiper-slide-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideFullyVisibleClass: 'swiper-slide-fully-visible',
    slideNextClass: 'swiper-slide-next',
    slidePrevClass: 'swiper-slide-prev',
    wrapperClass: 'swiper-wrapper',
    lazyPreloaderClass: 'swiper-lazy-preloader',
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function QP(r, i) {
  return function (s) {
    s === void 0 && (s = {});
    const c = Object.keys(s)[0],
      f = s[c];
    if (typeof f != 'object' || f === null) {
      Rr(i, s);
      return;
    }
    if (
      (r[c] === !0 && (r[c] = { enabled: !0 }),
      c === 'navigation' &&
        r[c] &&
        r[c].enabled &&
        !r[c].prevEl &&
        !r[c].nextEl &&
        (r[c].auto = !0),
      ['pagination', 'scrollbar'].indexOf(c) >= 0 &&
        r[c] &&
        r[c].enabled &&
        !r[c].el &&
        (r[c].auto = !0),
      !(c in r && 'enabled' in f))
    ) {
      Rr(i, s);
      return;
    }
    (typeof r[c] == 'object' && !('enabled' in r[c]) && (r[c].enabled = !0),
      r[c] || (r[c] = { enabled: !1 }),
      Rr(i, s));
  };
}
const Gm = {
    eventsEmitter: WN,
    update: aP,
    translate: cP,
    transition: vP,
    slide: CP,
    loop: RP,
    grabCursor: OP,
    events: HP,
    breakpoints: jP,
    checkOverflow: XP,
    classes: WP,
  },
  Wm = {};
let Ey = class Ja {
  constructor() {
    let i, o;
    for (var s = arguments.length, c = new Array(s), f = 0; f < s; f++)
      c[f] = arguments[f];
    (c.length === 1 &&
    c[0].constructor &&
    Object.prototype.toString.call(c[0]).slice(8, -1) === 'Object'
      ? (o = c[0])
      : ([i, o] = c),
      o || (o = {}),
      (o = Rr({}, o)),
      i && !o.el && (o.el = i));
    const d = Do();
    if (
      o.el &&
      typeof o.el == 'string' &&
      d.querySelectorAll(o.el).length > 1
    ) {
      const E = [];
      return (
        d.querySelectorAll(o.el).forEach((S) => {
          const w = Rr({}, o, { el: S });
          E.push(new Ja(w));
        }),
        E
      );
    }
    const h = this;
    ((h.__swiper__ = !0),
      (h.support = lw()),
      (h.device = sw({ userAgent: o.userAgent })),
      (h.browser = uw()),
      (h.eventsListeners = {}),
      (h.eventsAnyListeners = []),
      (h.modules = [...h.__modules__]),
      o.modules && Array.isArray(o.modules) && h.modules.push(...o.modules));
    const m = {};
    h.modules.forEach((E) => {
      E({
        params: o,
        swiper: h,
        extendParams: QP(o, m),
        on: h.on.bind(h),
        once: h.once.bind(h),
        off: h.off.bind(h),
        emit: h.emit.bind(h),
      });
    });
    const g = Rr({}, iy, m);
    return (
      (h.params = Rr({}, g, Wm, o)),
      (h.originalParams = Rr({}, h.params)),
      (h.passedParams = Rr({}, o)),
      h.params &&
        h.params.on &&
        Object.keys(h.params.on).forEach((E) => {
          h.on(E, h.params.on[E]);
        }),
      h.params && h.params.onAny && h.onAny(h.params.onAny),
      Object.assign(h, {
        enabled: h.params.enabled,
        el: i,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return h.params.direction === 'horizontal';
        },
        isVertical() {
          return h.params.direction === 'vertical';
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: h.params.allowSlideNext,
        allowSlidePrev: h.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: h.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: h.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      h.emit('_swiper'),
      h.params.init && h.init(),
      h
    );
  }
  getDirectionLabel(i) {
    return this.isHorizontal()
      ? i
      : {
          width: 'height',
          'margin-top': 'margin-left',
          'margin-bottom ': 'margin-right',
          'margin-left': 'margin-top',
          'margin-right': 'margin-bottom',
          'padding-left': 'padding-top',
          'padding-right': 'padding-bottom',
          marginRight: 'marginBottom',
        }[i];
  }
  getSlideIndex(i) {
    const { slidesEl: o, params: s } = this,
      c = ei(o, `.${s.slideClass}, swiper-slide`),
      f = uT(c[0]);
    return uT(i) - f;
  }
  getSlideIndexByData(i) {
    return this.getSlideIndex(
      this.slides.find(
        (o) => o.getAttribute('data-swiper-slide-index') * 1 === i
      )
    );
  }
  getSlideIndexWhenGrid(i) {
    return (
      this.grid &&
        this.params.grid &&
        this.params.grid.rows > 1 &&
        (this.params.grid.fill === 'column'
          ? (i = Math.floor(i / this.params.grid.rows))
          : this.params.grid.fill === 'row' &&
            (i = i % Math.ceil(this.slides.length / this.params.grid.rows))),
      i
    );
  }
  recalcSlides() {
    const i = this,
      { slidesEl: o, params: s } = i;
    i.slides = ei(o, `.${s.slideClass}, swiper-slide`);
  }
  enable() {
    const i = this;
    i.enabled ||
      ((i.enabled = !0),
      i.params.grabCursor && i.setGrabCursor(),
      i.emit('enable'));
  }
  disable() {
    const i = this;
    i.enabled &&
      ((i.enabled = !1),
      i.params.grabCursor && i.unsetGrabCursor(),
      i.emit('disable'));
  }
  setProgress(i, o) {
    const s = this;
    i = Math.min(Math.max(i, 0), 1);
    const c = s.minTranslate(),
      d = (s.maxTranslate() - c) * i + c;
    (s.translateTo(d, typeof o > 'u' ? 0 : o),
      s.updateActiveIndex(),
      s.updateSlidesClasses());
  }
  emitContainerClasses() {
    const i = this;
    if (!i.params._emitClasses || !i.el) return;
    const o = i.el.className
      .split(' ')
      .filter(
        (s) =>
          s.indexOf('swiper') === 0 ||
          s.indexOf(i.params.containerModifierClass) === 0
      );
    i.emit('_containerClasses', o.join(' '));
  }
  getSlideClasses(i) {
    const o = this;
    return o.destroyed
      ? ''
      : i.className
          .split(' ')
          .filter(
            (s) =>
              s.indexOf('swiper-slide') === 0 ||
              s.indexOf(o.params.slideClass) === 0
          )
          .join(' ');
  }
  emitSlidesClasses() {
    const i = this;
    if (!i.params._emitClasses || !i.el) return;
    const o = [];
    (i.slides.forEach((s) => {
      const c = i.getSlideClasses(s);
      (o.push({ slideEl: s, classNames: c }), i.emit('_slideClass', s, c));
    }),
      i.emit('_slideClasses', o));
  }
  slidesPerViewDynamic(i, o) {
    (i === void 0 && (i = 'current'), o === void 0 && (o = !1));
    const s = this,
      {
        params: c,
        slides: f,
        slidesGrid: d,
        slidesSizesGrid: h,
        size: m,
        activeIndex: g,
      } = s;
    let E = 1;
    if (typeof c.slidesPerView == 'number') return c.slidesPerView;
    if (c.centeredSlides) {
      let S = f[g] ? Math.ceil(f[g].swiperSlideSize) : 0,
        w;
      for (let O = g + 1; O < f.length; O += 1)
        f[O] &&
          !w &&
          ((S += Math.ceil(f[O].swiperSlideSize)), (E += 1), S > m && (w = !0));
      for (let O = g - 1; O >= 0; O -= 1)
        f[O] &&
          !w &&
          ((S += f[O].swiperSlideSize), (E += 1), S > m && (w = !0));
    } else if (i === 'current')
      for (let S = g + 1; S < f.length; S += 1)
        (o ? d[S] + h[S] - d[g] < m : d[S] - d[g] < m) && (E += 1);
    else for (let S = g - 1; S >= 0; S -= 1) d[g] - d[S] < m && (E += 1);
    return E;
  }
  update() {
    const i = this;
    if (!i || i.destroyed) return;
    const { snapGrid: o, params: s } = i;
    (s.breakpoints && i.setBreakpoint(),
      [...i.el.querySelectorAll('[loading="lazy"]')].forEach((d) => {
        d.complete && md(i, d);
      }),
      i.updateSize(),
      i.updateSlides(),
      i.updateProgress(),
      i.updateSlidesClasses());
    function c() {
      const d = i.rtlTranslate ? i.translate * -1 : i.translate,
        h = Math.min(Math.max(d, i.maxTranslate()), i.minTranslate());
      (i.setTranslate(h), i.updateActiveIndex(), i.updateSlidesClasses());
    }
    let f;
    if (s.freeMode && s.freeMode.enabled && !s.cssMode)
      (c(), s.autoHeight && i.updateAutoHeight());
    else {
      if (
        (s.slidesPerView === 'auto' || s.slidesPerView > 1) &&
        i.isEnd &&
        !s.centeredSlides
      ) {
        const d = i.virtual && s.virtual.enabled ? i.virtual.slides : i.slides;
        f = i.slideTo(d.length - 1, 0, !1, !0);
      } else f = i.slideTo(i.activeIndex, 0, !1, !0);
      f || c();
    }
    (s.watchOverflow && o !== i.snapGrid && i.checkOverflow(),
      i.emit('update'));
  }
  changeDirection(i, o) {
    o === void 0 && (o = !0);
    const s = this,
      c = s.params.direction;
    return (
      i || (i = c === 'horizontal' ? 'vertical' : 'horizontal'),
      i === c ||
        (i !== 'horizontal' && i !== 'vertical') ||
        (s.el.classList.remove(`${s.params.containerModifierClass}${c}`),
        s.el.classList.add(`${s.params.containerModifierClass}${i}`),
        s.emitContainerClasses(),
        (s.params.direction = i),
        s.slides.forEach((f) => {
          i === 'vertical' ? (f.style.width = '') : (f.style.height = '');
        }),
        s.emit('changeDirection'),
        o && s.update()),
      s
    );
  }
  changeLanguageDirection(i) {
    const o = this;
    (o.rtl && i === 'rtl') ||
      (!o.rtl && i === 'ltr') ||
      ((o.rtl = i === 'rtl'),
      (o.rtlTranslate = o.params.direction === 'horizontal' && o.rtl),
      o.rtl
        ? (o.el.classList.add(`${o.params.containerModifierClass}rtl`),
          (o.el.dir = 'rtl'))
        : (o.el.classList.remove(`${o.params.containerModifierClass}rtl`),
          (o.el.dir = 'ltr')),
      o.update());
  }
  mount(i) {
    const o = this;
    if (o.mounted) return !0;
    let s = i || o.params.el;
    if ((typeof s == 'string' && (s = document.querySelector(s)), !s))
      return !1;
    ((s.swiper = o),
      s.parentNode &&
        s.parentNode.host &&
        s.parentNode.host.nodeName ===
          o.params.swiperElementNodeName.toUpperCase() &&
        (o.isElement = !0));
    const c = () =>
      `.${(o.params.wrapperClass || '').trim().split(' ').join('.')}`;
    let d = (() =>
      s && s.shadowRoot && s.shadowRoot.querySelector
        ? s.shadowRoot.querySelector(c())
        : ei(s, c())[0])();
    return (
      !d &&
        o.params.createElements &&
        ((d = ry('div', o.params.wrapperClass)),
        s.append(d),
        ei(s, `.${o.params.slideClass}`).forEach((h) => {
          d.append(h);
        })),
      Object.assign(o, {
        el: s,
        wrapperEl: d,
        slidesEl:
          o.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : d,
        hostEl: o.isElement ? s.parentNode.host : s,
        mounted: !0,
        rtl: s.dir.toLowerCase() === 'rtl' || Fi(s, 'direction') === 'rtl',
        rtlTranslate:
          o.params.direction === 'horizontal' &&
          (s.dir.toLowerCase() === 'rtl' || Fi(s, 'direction') === 'rtl'),
        wrongRTL: Fi(d, 'display') === '-webkit-box',
      }),
      !0
    );
  }
  init(i) {
    const o = this;
    if (o.initialized || o.mount(i) === !1) return o;
    (o.emit('beforeInit'),
      o.params.breakpoints && o.setBreakpoint(),
      o.addClasses(),
      o.updateSize(),
      o.updateSlides(),
      o.params.watchOverflow && o.checkOverflow(),
      o.params.grabCursor && o.enabled && o.setGrabCursor(),
      o.params.loop && o.virtual && o.params.virtual.enabled
        ? o.slideTo(
            o.params.initialSlide + o.virtual.slidesBefore,
            0,
            o.params.runCallbacksOnInit,
            !1,
            !0
          )
        : o.slideTo(
            o.params.initialSlide,
            0,
            o.params.runCallbacksOnInit,
            !1,
            !0
          ),
      o.params.loop && o.loopCreate(void 0, !0),
      o.attachEvents());
    const c = [...o.el.querySelectorAll('[loading="lazy"]')];
    return (
      o.isElement && c.push(...o.hostEl.querySelectorAll('[loading="lazy"]')),
      c.forEach((f) => {
        f.complete
          ? md(o, f)
          : f.addEventListener('load', (d) => {
              md(o, d.target);
            });
      }),
      ay(o),
      (o.initialized = !0),
      ay(o),
      o.emit('init'),
      o.emit('afterInit'),
      o
    );
  }
  destroy(i, o) {
    (i === void 0 && (i = !0), o === void 0 && (o = !0));
    const s = this,
      { params: c, el: f, wrapperEl: d, slides: h } = s;
    return (
      typeof s.params > 'u' ||
        s.destroyed ||
        (s.emit('beforeDestroy'),
        (s.initialized = !1),
        s.detachEvents(),
        c.loop && s.loopDestroy(),
        o &&
          (s.removeClasses(),
          f && typeof f != 'string' && f.removeAttribute('style'),
          d && d.removeAttribute('style'),
          h &&
            h.length &&
            h.forEach((m) => {
              (m.classList.remove(
                c.slideVisibleClass,
                c.slideFullyVisibleClass,
                c.slideActiveClass,
                c.slideNextClass,
                c.slidePrevClass
              ),
                m.removeAttribute('style'),
                m.removeAttribute('data-swiper-slide-index'));
            })),
        s.emit('destroy'),
        Object.keys(s.eventsListeners).forEach((m) => {
          s.off(m);
        }),
        i !== !1 &&
          (s.el && typeof s.el != 'string' && (s.el.swiper = null), kN(s)),
        (s.destroyed = !0)),
      null
    );
  }
  static extendDefaults(i) {
    Rr(Wm, i);
  }
  static get extendedDefaults() {
    return Wm;
  }
  static get defaults() {
    return iy;
  }
  static installModule(i) {
    Ja.prototype.__modules__ || (Ja.prototype.__modules__ = []);
    const o = Ja.prototype.__modules__;
    typeof i == 'function' && o.indexOf(i) < 0 && o.push(i);
  }
  static use(i) {
    return Array.isArray(i)
      ? (i.forEach((o) => Ja.installModule(o)), Ja)
      : (Ja.installModule(i), Ja);
  }
};
Object.keys(Gm).forEach((r) => {
  Object.keys(Gm[r]).forEach((i) => {
    Ey.prototype[i] = Gm[r][i];
  });
});
Ey.use([YN, GN]);
const dw = [
  'eventsPrefix',
  'injectStyles',
  'injectStylesUrls',
  'modules',
  'init',
  '_direction',
  'oneWayMovement',
  'swiperElementNodeName',
  'touchEventsTarget',
  'initialSlide',
  '_speed',
  'cssMode',
  'updateOnWindowResize',
  'resizeObserver',
  'nested',
  'focusableElements',
  '_enabled',
  '_width',
  '_height',
  'preventInteractionOnTransition',
  'userAgent',
  'url',
  '_edgeSwipeDetection',
  '_edgeSwipeThreshold',
  '_freeMode',
  '_autoHeight',
  'setWrapperSize',
  'virtualTranslate',
  '_effect',
  'breakpoints',
  'breakpointsBase',
  '_spaceBetween',
  '_slidesPerView',
  'maxBackfaceHiddenSlides',
  '_grid',
  '_slidesPerGroup',
  '_slidesPerGroupSkip',
  '_slidesPerGroupAuto',
  '_centeredSlides',
  '_centeredSlidesBounds',
  '_slidesOffsetBefore',
  '_slidesOffsetAfter',
  'normalizeSlideIndex',
  '_centerInsufficientSlides',
  '_watchOverflow',
  'roundLengths',
  'touchRatio',
  'touchAngle',
  'simulateTouch',
  '_shortSwipes',
  '_longSwipes',
  'longSwipesRatio',
  'longSwipesMs',
  '_followFinger',
  'allowTouchMove',
  '_threshold',
  'touchMoveStopPropagation',
  'touchStartPreventDefault',
  'touchStartForcePreventDefault',
  'touchReleaseOnEdges',
  'uniqueNavElements',
  '_resistance',
  '_resistanceRatio',
  '_watchSlidesProgress',
  '_grabCursor',
  'preventClicks',
  'preventClicksPropagation',
  '_slideToClickedSlide',
  '_loop',
  'loopAdditionalSlides',
  'loopAddBlankSlides',
  'loopPreventsSliding',
  '_rewind',
  '_allowSlidePrev',
  '_allowSlideNext',
  '_swipeHandler',
  '_noSwiping',
  'noSwipingClass',
  'noSwipingSelector',
  'passiveListeners',
  'containerModifierClass',
  'slideClass',
  'slideActiveClass',
  'slideVisibleClass',
  'slideFullyVisibleClass',
  'slideNextClass',
  'slidePrevClass',
  'slideBlankClass',
  'wrapperClass',
  'lazyPreloaderClass',
  'lazyPreloadPrevNext',
  'runCallbacksOnInit',
  'observer',
  'observeParents',
  'observeSlideChildren',
  'a11y',
  '_autoplay',
  '_controller',
  'coverflowEffect',
  'cubeEffect',
  'fadeEffect',
  'flipEffect',
  'creativeEffect',
  'cardsEffect',
  'hashNavigation',
  'history',
  'keyboard',
  'mousewheel',
  '_navigation',
  '_pagination',
  'parallax',
  '_scrollbar',
  '_thumbs',
  'virtual',
  'zoom',
  'control',
];
function _o(r) {
  return (
    typeof r == 'object' &&
    r !== null &&
    r.constructor &&
    Object.prototype.toString.call(r).slice(8, -1) === 'Object' &&
    !r.__swiper__
  );
}
function Ml(r, i) {
  const o = ['__proto__', 'constructor', 'prototype'];
  Object.keys(i)
    .filter((s) => o.indexOf(s) < 0)
    .forEach((s) => {
      typeof r[s] > 'u'
        ? (r[s] = i[s])
        : _o(i[s]) && _o(r[s]) && Object.keys(i[s]).length > 0
          ? i[s].__swiper__
            ? (r[s] = i[s])
            : Ml(r[s], i[s])
          : (r[s] = i[s]);
    });
}
function pw(r) {
  return (
    r === void 0 && (r = {}),
    r.navigation &&
      typeof r.navigation.nextEl > 'u' &&
      typeof r.navigation.prevEl > 'u'
  );
}
function vw(r) {
  return (
    r === void 0 && (r = {}),
    r.pagination && typeof r.pagination.el > 'u'
  );
}
function hw(r) {
  return (r === void 0 && (r = {}), r.scrollbar && typeof r.scrollbar.el > 'u');
}
function mw(r) {
  r === void 0 && (r = '');
  const i = r
      .split(' ')
      .map((s) => s.trim())
      .filter((s) => !!s),
    o = [];
  return (
    i.forEach((s) => {
      o.indexOf(s) < 0 && o.push(s);
    }),
    o.join(' ')
  );
}
function KP(r) {
  return (
    r === void 0 && (r = ''),
    r
      ? r.includes('swiper-wrapper')
        ? r
        : `swiper-wrapper ${r}`
      : 'swiper-wrapper'
  );
}
function JP(r) {
  let {
    swiper: i,
    slides: o,
    passedParams: s,
    changedParams: c,
    nextEl: f,
    prevEl: d,
    scrollbarEl: h,
    paginationEl: m,
  } = r;
  const g = c.filter(
      (re) => re !== 'children' && re !== 'direction' && re !== 'wrapperClass'
    ),
    {
      params: E,
      pagination: S,
      navigation: w,
      scrollbar: O,
      virtual: D,
      thumbs: x,
    } = i;
  let z, N, _, P, U, V, oe, ne;
  (c.includes('thumbs') &&
    s.thumbs &&
    s.thumbs.swiper &&
    !s.thumbs.swiper.destroyed &&
    E.thumbs &&
    (!E.thumbs.swiper || E.thumbs.swiper.destroyed) &&
    (z = !0),
    c.includes('controller') &&
      s.controller &&
      s.controller.control &&
      E.controller &&
      !E.controller.control &&
      (N = !0),
    c.includes('pagination') &&
      s.pagination &&
      (s.pagination.el || m) &&
      (E.pagination || E.pagination === !1) &&
      S &&
      !S.el &&
      (_ = !0),
    c.includes('scrollbar') &&
      s.scrollbar &&
      (s.scrollbar.el || h) &&
      (E.scrollbar || E.scrollbar === !1) &&
      O &&
      !O.el &&
      (P = !0),
    c.includes('navigation') &&
      s.navigation &&
      (s.navigation.prevEl || d) &&
      (s.navigation.nextEl || f) &&
      (E.navigation || E.navigation === !1) &&
      w &&
      !w.prevEl &&
      !w.nextEl &&
      (U = !0));
  const ce = (re) => {
    i[re] &&
      (i[re].destroy(),
      re === 'navigation'
        ? (i.isElement && (i[re].prevEl.remove(), i[re].nextEl.remove()),
          (E[re].prevEl = void 0),
          (E[re].nextEl = void 0),
          (i[re].prevEl = void 0),
          (i[re].nextEl = void 0))
        : (i.isElement && i[re].el.remove(),
          (E[re].el = void 0),
          (i[re].el = void 0)));
  };
  (c.includes('loop') &&
    i.isElement &&
    (E.loop && !s.loop ? (V = !0) : !E.loop && s.loop ? (oe = !0) : (ne = !0)),
    g.forEach((re) => {
      if (_o(E[re]) && _o(s[re]))
        (Object.assign(E[re], s[re]),
          (re === 'navigation' || re === 'pagination' || re === 'scrollbar') &&
            'enabled' in s[re] &&
            !s[re].enabled &&
            ce(re));
      else {
        const te = s[re];
        (te === !0 || te === !1) &&
        (re === 'navigation' || re === 'pagination' || re === 'scrollbar')
          ? te === !1 && ce(re)
          : (E[re] = s[re]);
      }
    }),
    g.includes('controller') &&
      !N &&
      i.controller &&
      i.controller.control &&
      E.controller &&
      E.controller.control &&
      (i.controller.control = E.controller.control),
    c.includes('children') && o && D && E.virtual.enabled
      ? ((D.slides = o), D.update(!0))
      : c.includes('virtual') &&
        D &&
        E.virtual.enabled &&
        (o && (D.slides = o), D.update(!0)),
    c.includes('children') && o && E.loop && (ne = !0),
    z && x.init() && x.update(!0),
    N && (i.controller.control = E.controller.control),
    _ &&
      (i.isElement &&
        (!m || typeof m == 'string') &&
        ((m = document.createElement('div')),
        m.classList.add('swiper-pagination'),
        m.part.add('pagination'),
        i.el.appendChild(m)),
      m && (E.pagination.el = m),
      S.init(),
      S.render(),
      S.update()),
    P &&
      (i.isElement &&
        (!h || typeof h == 'string') &&
        ((h = document.createElement('div')),
        h.classList.add('swiper-scrollbar'),
        h.part.add('scrollbar'),
        i.el.appendChild(h)),
      h && (E.scrollbar.el = h),
      O.init(),
      O.updateSize(),
      O.setTranslate()),
    U &&
      (i.isElement &&
        ((!f || typeof f == 'string') &&
          ((f = document.createElement('div')),
          f.classList.add('swiper-button-next'),
          fT(f, i.hostEl.constructor.nextButtonSvg),
          f.part.add('button-next'),
          i.el.appendChild(f)),
        (!d || typeof d == 'string') &&
          ((d = document.createElement('div')),
          d.classList.add('swiper-button-prev'),
          fT(d, i.hostEl.constructor.prevButtonSvg),
          d.part.add('button-prev'),
          i.el.appendChild(d))),
      f && (E.navigation.nextEl = f),
      d && (E.navigation.prevEl = d),
      w.init(),
      w.update()),
    c.includes('allowSlideNext') && (i.allowSlideNext = s.allowSlideNext),
    c.includes('allowSlidePrev') && (i.allowSlidePrev = s.allowSlidePrev),
    c.includes('direction') && i.changeDirection(s.direction, !1),
    (V || ne) && i.loopDestroy(),
    (oe || ne) && i.loopCreate(),
    i.update());
}
function ZP(r, i) {
  (r === void 0 && (r = {}), i === void 0 && (i = !0));
  const o = { on: {} },
    s = {},
    c = {};
  (Ml(o, iy), (o._emitClasses = !0), (o.init = !1));
  const f = {},
    d = dw.map((m) => m.replace(/_/, '')),
    h = Object.assign({}, r);
  return (
    Object.keys(h).forEach((m) => {
      typeof r[m] > 'u' ||
        (d.indexOf(m) >= 0
          ? _o(r[m])
            ? ((o[m] = {}), (c[m] = {}), Ml(o[m], r[m]), Ml(c[m], r[m]))
            : ((o[m] = r[m]), (c[m] = r[m]))
          : m.search(/on[A-Z]/) === 0 && typeof r[m] == 'function'
            ? i
              ? (s[`${m[2].toLowerCase()}${m.substr(3)}`] = r[m])
              : (o.on[`${m[2].toLowerCase()}${m.substr(3)}`] = r[m])
            : (f[m] = r[m]));
    }),
    ['navigation', 'pagination', 'scrollbar'].forEach((m) => {
      (o[m] === !0 && (o[m] = {}), o[m] === !1 && delete o[m]);
    }),
    { params: o, passedParams: c, rest: f, events: s }
  );
}
function ez(r, i) {
  let {
    el: o,
    nextEl: s,
    prevEl: c,
    paginationEl: f,
    scrollbarEl: d,
    swiper: h,
  } = r;
  (pw(i) &&
    s &&
    c &&
    ((h.params.navigation.nextEl = s),
    (h.originalParams.navigation.nextEl = s),
    (h.params.navigation.prevEl = c),
    (h.originalParams.navigation.prevEl = c)),
    vw(i) &&
      f &&
      ((h.params.pagination.el = f), (h.originalParams.pagination.el = f)),
    hw(i) &&
      d &&
      ((h.params.scrollbar.el = d), (h.originalParams.scrollbar.el = d)),
    h.init(o));
}
function tz(r, i, o, s, c) {
  const f = [];
  if (!i) return f;
  const d = (m) => {
    f.indexOf(m) < 0 && f.push(m);
  };
  if (o && s) {
    const m = s.map(c),
      g = o.map(c);
    (m.join('') !== g.join('') && d('children'),
      s.length !== o.length && d('children'));
  }
  return (
    dw
      .filter((m) => m[0] === '_')
      .map((m) => m.replace(/_/, ''))
      .forEach((m) => {
        if (m in r && m in i)
          if (_o(r[m]) && _o(i[m])) {
            const g = Object.keys(r[m]),
              E = Object.keys(i[m]);
            g.length !== E.length
              ? d(m)
              : (g.forEach((S) => {
                  r[m][S] !== i[m][S] && d(m);
                }),
                E.forEach((S) => {
                  r[m][S] !== i[m][S] && d(m);
                }));
          } else r[m] !== i[m] && d(m);
      }),
    f
  );
}
const nz = (r) => {
  !r ||
    r.destroyed ||
    !r.params.virtual ||
    (r.params.virtual && !r.params.virtual.enabled) ||
    (r.updateSlides(),
    r.updateProgress(),
    r.updateSlidesClasses(),
    r.emit('_virtualUpdated'),
    r.parallax &&
      r.params.parallax &&
      r.params.parallax.enabled &&
      r.parallax.setTranslate());
};
function Dd() {
  return (
    (Dd = Object.assign
      ? Object.assign.bind()
      : function (r) {
          for (var i = 1; i < arguments.length; i++) {
            var o = arguments[i];
            for (var s in o)
              Object.prototype.hasOwnProperty.call(o, s) && (r[s] = o[s]);
          }
          return r;
        }),
    Dd.apply(this, arguments)
  );
}
function yw(r) {
  return (
    r.type && r.type.displayName && r.type.displayName.includes('SwiperSlide')
  );
}
function gw(r) {
  const i = [];
  return (
    Tt.Children.toArray(r).forEach((o) => {
      yw(o)
        ? i.push(o)
        : o.props &&
          o.props.children &&
          gw(o.props.children).forEach((s) => i.push(s));
    }),
    i
  );
}
function rz(r) {
  const i = [],
    o = {
      'container-start': [],
      'container-end': [],
      'wrapper-start': [],
      'wrapper-end': [],
    };
  return (
    Tt.Children.toArray(r).forEach((s) => {
      if (yw(s)) i.push(s);
      else if (s.props && s.props.slot && o[s.props.slot])
        o[s.props.slot].push(s);
      else if (s.props && s.props.children) {
        const c = gw(s.props.children);
        c.length > 0 ? c.forEach((f) => i.push(f)) : o['container-end'].push(s);
      } else o['container-end'].push(s);
    }),
    { slides: i, slots: o }
  );
}
function az(r, i, o) {
  if (!o) return null;
  const s = (E) => {
      let S = E;
      return (
        E < 0 ? (S = i.length + E) : S >= i.length && (S = S - i.length),
        S
      );
    },
    c = r.isHorizontal()
      ? { [r.rtlTranslate ? 'right' : 'left']: `${o.offset}px` }
      : { top: `${o.offset}px` },
    { from: f, to: d } = o,
    h = r.params.loop ? -i.length : 0,
    m = r.params.loop ? i.length * 2 : i.length,
    g = [];
  for (let E = h; E < m; E += 1) E >= f && E <= d && g.push(i[s(E)]);
  return g.map((E, S) =>
    Tt.cloneElement(E, {
      swiper: r,
      style: c,
      key: E.props.virtualIndex || E.key || `slide-${S}`,
    })
  );
}
function Pu(r, i) {
  return typeof window > 'u' ? K.useEffect(r, i) : K.useLayoutEffect(r, i);
}
const mT = K.createContext(null),
  iz = K.createContext(null),
  bw = K.forwardRef(function (r, i) {
    let {
        className: o,
        tag: s = 'div',
        wrapperTag: c = 'div',
        children: f,
        onSwiper: d,
        ...h
      } = r === void 0 ? {} : r,
      m = !1;
    const [g, E] = K.useState('swiper'),
      [S, w] = K.useState(null),
      [O, D] = K.useState(!1),
      x = K.useRef(!1),
      z = K.useRef(null),
      N = K.useRef(null),
      _ = K.useRef(null),
      P = K.useRef(null),
      U = K.useRef(null),
      V = K.useRef(null),
      oe = K.useRef(null),
      ne = K.useRef(null),
      { params: ce, passedParams: re, rest: te, events: ue } = ZP(h),
      { slides: ae, slots: ie } = rz(f),
      Ee = () => {
        D(!O);
      };
    Object.assign(ce.on, {
      _containerClasses(Qe, ft) {
        E(ft);
      },
    });
    const Me = () => {
      (Object.assign(ce.on, ue), (m = !0));
      const Qe = { ...ce };
      if (
        (delete Qe.wrapperClass,
        (N.current = new Ey(Qe)),
        N.current.virtual && N.current.params.virtual.enabled)
      ) {
        N.current.virtual.slides = ae;
        const ft = {
          cache: !1,
          slides: ae,
          renderExternal: w,
          renderExternalUpdate: !1,
        };
        (Ml(N.current.params.virtual, ft),
          Ml(N.current.originalParams.virtual, ft));
      }
    };
    (z.current || Me(), N.current && N.current.on('_beforeBreakpoint', Ee));
    const be = () => {
        m ||
          !ue ||
          !N.current ||
          Object.keys(ue).forEach((Qe) => {
            N.current.on(Qe, ue[Qe]);
          });
      },
      me = () => {
        !ue ||
          !N.current ||
          Object.keys(ue).forEach((Qe) => {
            N.current.off(Qe, ue[Qe]);
          });
      };
    (K.useEffect(() => () => {
      N.current && N.current.off('_beforeBreakpoint', Ee);
    }),
      K.useEffect(() => {
        !x.current &&
          N.current &&
          (N.current.emitSlidesClasses(), (x.current = !0));
      }),
      Pu(() => {
        if ((i && (i.current = z.current), !!z.current))
          return (
            N.current.destroyed && Me(),
            ez(
              {
                el: z.current,
                nextEl: U.current,
                prevEl: V.current,
                paginationEl: oe.current,
                scrollbarEl: ne.current,
                swiper: N.current,
              },
              ce
            ),
            d && !N.current.destroyed && d(N.current),
            () => {
              N.current && !N.current.destroyed && N.current.destroy(!0, !1);
            }
          );
      }, []),
      Pu(() => {
        be();
        const Qe = tz(re, _.current, ae, P.current, (ft) => ft.key);
        return (
          (_.current = re),
          (P.current = ae),
          Qe.length &&
            N.current &&
            !N.current.destroyed &&
            JP({
              swiper: N.current,
              slides: ae,
              passedParams: re,
              changedParams: Qe,
              nextEl: U.current,
              prevEl: V.current,
              scrollbarEl: ne.current,
              paginationEl: oe.current,
            }),
          () => {
            me();
          }
        );
      }),
      Pu(() => {
        nz(N.current);
      }, [S]));
    function Ve() {
      return ce.virtual
        ? az(N.current, ae, S)
        : ae.map((Qe, ft) =>
            Tt.cloneElement(Qe, { swiper: N.current, swiperSlideIndex: ft })
          );
    }
    return Tt.createElement(
      s,
      Dd({ ref: z, className: mw(`${g}${o ? ` ${o}` : ''}`) }, te),
      Tt.createElement(
        iz.Provider,
        { value: N.current },
        ie['container-start'],
        Tt.createElement(
          c,
          { className: KP(ce.wrapperClass) },
          ie['wrapper-start'],
          Ve(),
          ie['wrapper-end']
        ),
        pw(ce) &&
          Tt.createElement(
            Tt.Fragment,
            null,
            Tt.createElement('div', {
              ref: V,
              className: 'swiper-button-prev',
            }),
            Tt.createElement('div', { ref: U, className: 'swiper-button-next' })
          ),
        hw(ce) &&
          Tt.createElement('div', { ref: ne, className: 'swiper-scrollbar' }),
        vw(ce) &&
          Tt.createElement('div', { ref: oe, className: 'swiper-pagination' }),
        ie['container-end']
      )
    );
  });
bw.displayName = 'Swiper';
const Sw = K.forwardRef(function (r, i) {
  let {
    tag: o = 'div',
    children: s,
    className: c = '',
    swiper: f,
    zoom: d,
    lazy: h,
    virtualIndex: m,
    swiperSlideIndex: g,
    ...E
  } = r === void 0 ? {} : r;
  const S = K.useRef(null),
    [w, O] = K.useState('swiper-slide'),
    [D, x] = K.useState(!1);
  function z(U, V, oe) {
    V === S.current && O(oe);
  }
  (Pu(() => {
    if (
      (typeof g < 'u' && (S.current.swiperSlideIndex = g),
      i && (i.current = S.current),
      !(!S.current || !f))
    ) {
      if (f.destroyed) {
        w !== 'swiper-slide' && O('swiper-slide');
        return;
      }
      return (
        f.on('_slideClass', z),
        () => {
          f && f.off('_slideClass', z);
        }
      );
    }
  }),
    Pu(() => {
      f && S.current && !f.destroyed && O(f.getSlideClasses(S.current));
    }, [f]));
  const N = {
      isActive: w.indexOf('swiper-slide-active') >= 0,
      isVisible: w.indexOf('swiper-slide-visible') >= 0,
      isPrev: w.indexOf('swiper-slide-prev') >= 0,
      isNext: w.indexOf('swiper-slide-next') >= 0,
    },
    _ = () => (typeof s == 'function' ? s(N) : s),
    P = () => {
      x(!0);
    };
  return Tt.createElement(
    o,
    Dd(
      {
        ref: S,
        className: mw(`${w}${c ? ` ${c}` : ''}`),
        'data-swiper-slide-index': m,
        onLoad: P,
      },
      E
    ),
    d &&
      Tt.createElement(
        mT.Provider,
        { value: N },
        Tt.createElement(
          'div',
          {
            className: 'swiper-zoom-container',
            'data-swiper-zoom': typeof d == 'number' ? d : void 0,
          },
          _(),
          h &&
            !D &&
            Tt.createElement('div', { className: 'swiper-lazy-preloader' })
        )
      ),
    !d &&
      Tt.createElement(
        mT.Provider,
        { value: N },
        _(),
        h &&
          !D &&
          Tt.createElement('div', { className: 'swiper-lazy-preloader' })
      )
  );
});
Sw.displayName = 'SwiperSlide';
function oz(r) {
  let { swiper: i, extendParams: o, on: s } = r;
  o({ grid: { rows: 1, fill: 'column' } });
  let c, f, d, h;
  const m = () => {
      let x = i.params.spaceBetween;
      return (
        typeof x == 'string' && x.indexOf('%') >= 0
          ? (x = (parseFloat(x.replace('%', '')) / 100) * i.size)
          : typeof x == 'string' && (x = parseFloat(x)),
        x
      );
    },
    g = (x) => {
      const { slidesPerView: z } = i.params,
        { rows: N, fill: _ } = i.params.grid,
        P =
          i.virtual && i.params.virtual.enabled
            ? i.virtual.slides.length
            : x.length;
      ((d = Math.floor(P / N)),
        Math.floor(P / N) === P / N ? (c = P) : (c = Math.ceil(P / N) * N),
        z !== 'auto' && _ === 'row' && (c = Math.max(c, z * N)),
        (f = c / N));
    },
    E = () => {
      i.slides &&
        i.slides.forEach((x) => {
          x.swiperSlideGridSet &&
            ((x.style.height = ''),
            (x.style[i.getDirectionLabel('margin-top')] = ''));
        });
    },
    S = (x, z, N) => {
      const { slidesPerGroup: _ } = i.params,
        P = m(),
        { rows: U, fill: V } = i.params.grid,
        oe =
          i.virtual && i.params.virtual.enabled
            ? i.virtual.slides.length
            : N.length;
      let ne, ce, re;
      if (V === 'row' && _ > 1) {
        const te = Math.floor(x / (_ * U)),
          ue = x - U * _ * te,
          ae = te === 0 ? _ : Math.min(Math.ceil((oe - te * U * _) / U), _);
        ((re = Math.floor(ue / ae)),
          (ce = ue - re * ae + te * _),
          (ne = ce + (re * c) / U),
          (z.style.order = ne));
      } else
        V === 'column'
          ? ((ce = Math.floor(x / U)),
            (re = x - ce * U),
            (ce > d || (ce === d && re === U - 1)) &&
              ((re += 1), re >= U && ((re = 0), (ce += 1))))
          : ((re = Math.floor(x / f)), (ce = x - re * f));
      ((z.row = re),
        (z.column = ce),
        (z.style.height = `calc((100% - ${(U - 1) * P}px) / ${U})`),
        (z.style[i.getDirectionLabel('margin-top')] =
          re !== 0 ? P && `${P}px` : ''),
        (z.swiperSlideGridSet = !0));
    },
    w = (x, z) => {
      const { centeredSlides: N, roundLengths: _ } = i.params,
        P = m(),
        { rows: U } = i.params.grid;
      if (
        ((i.virtualSize = (x + P) * c),
        (i.virtualSize = Math.ceil(i.virtualSize / U) - P),
        i.params.cssMode ||
          (i.wrapperEl.style[i.getDirectionLabel('width')] =
            `${i.virtualSize + P}px`),
        N)
      ) {
        const V = [];
        for (let oe = 0; oe < z.length; oe += 1) {
          let ne = z[oe];
          (_ && (ne = Math.floor(ne)),
            z[oe] < i.virtualSize + z[0] && V.push(ne));
        }
        (z.splice(0, z.length), z.push(...V));
      }
    },
    O = () => {
      h = i.params.grid && i.params.grid.rows > 1;
    },
    D = () => {
      const { params: x, el: z } = i,
        N = x.grid && x.grid.rows > 1;
      (h && !N
        ? (z.classList.remove(
            `${x.containerModifierClass}grid`,
            `${x.containerModifierClass}grid-column`
          ),
          (d = 1),
          i.emitContainerClasses())
        : !h &&
          N &&
          (z.classList.add(`${x.containerModifierClass}grid`),
          x.grid.fill === 'column' &&
            z.classList.add(`${x.containerModifierClass}grid-column`),
          i.emitContainerClasses()),
        (h = N));
    };
  (s('init', O),
    s('update', D),
    (i.grid = {
      initSlides: g,
      unsetSlides: E,
      updateSlide: S,
      updateWrapperSize: w,
    }));
}
const lz = _r('img').withConfig({
  displayName: 'Card__StyledImg',
  componentId: 'sc-h41vf0-0',
})([
  'width:220px;display:block;margin:0;padding:0;border-radius:10px;@media (min-width:480px){width:320px;}@media (min-width:768px){width:300px;}@media (min-width:1024px){width:260px;}',
]);
function Ew({ product: r }) {
  return wn('div', {
    children: [
      Ae('p', { children: r.id }),
      Ae('p', { children: r.name }),
      Ae('p', { children: r.price }),
      Ae(lz, { src: r.img, alt: r.name }),
    ],
  });
}
const sz = _r('div').withConfig({
  displayName: 'Cards__StyledBaseField',
  componentId: 'sc-in0nuh-0',
})(['border:1px solid lightblue;border-radius:10px;padding:40px;']);
function uz({
  products: r,
  card: i,
  rows: o,
  setCard: s,
  setIsOpenModal: c,
  isOpenModal: f,
}) {
  let d = 3,
    h = 1;
  switch (o) {
    case 3:
      ((h = 1), (d = 3));
      break;
    case 2:
      ((h = 2), (d = 2));
      break;
    case 1:
      ((h = 3), (d = 1));
      break;
    default:
      h = 1;
  }
  function m(g) {
    const E = r.find((S) => S.id === g) ?? {
      id: '',
      name: '',
      description: '',
      price: '',
      img: '',
    };
    (s(E), c(!0));
  }
  return Ae(sz, {
    children: Ae(bw, {
      modules: [oz],
      spaceBetween: 10,
      slidesPerView: h,
      grid: { rows: d, fill: 'row' },
      children: r.map((g) =>
        Ae(
          Sw,
          {
            onClick: () => m(g.id),
            children: Ae(Ew, {
              product: {
                id: g.id ?? '',
                name: g.name ?? '',
                description: g.description ?? '',
                price: g.price ?? '',
                img: g.img ?? '',
              },
            }),
          },
          g.id
        )
      ),
    }),
  });
}
const cz = _r('div').withConfig({
  displayName: 'Catalog__StyledBaseField',
  componentId: 'sc-lby759-0',
})(['width:90%;']);
function fz({
  products: r,
  card: i,
  rows: o,
  setCard: s,
  setProductState: c,
  setIsOpenModal: f,
  isOpenModal: d,
}) {
  return wn(cz, {
    children: [
      Ae('h2', { children: 'Catalog' }),
      Ae(uz, {
        products: r,
        card: i,
        rows: o,
        setCard: s,
        setProductState: c,
        setIsOpenModal: f,
        isOpenModal: d,
      }),
    ],
  });
}
const dz = _r('div').withConfig({
    displayName: 'Modal__StyledBaseField',
    componentId: 'sc-1pc8fcs-0',
  })([
    'position:relative;width:80%;height:80%;padding:20px;background-color:whitesmoke;border:1px solid lightblue;border-radius:10px;',
  ]),
  pz = _r('div').withConfig({
    displayName: 'Modal__StyledOverlay',
    componentId: 'sc-1pc8fcs-1',
  })([
    'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:1000;',
  ]),
  vz = _r('div').withConfig({
    displayName: 'Modal__StyledButtonClose',
    componentId: 'sc-1pc8fcs-2',
  })([
    'position:absolute;top:12px;right:16px;font-size:18px;background:none;border:none;cursor:pointer;color:#555555;transition:color 0.2s ease;',
  ]);
function hz({
  products: r,
  card: i,
  rows: o,
  setCard: s,
  setProductState: c,
  setIsOpenModal: f,
  isOpenModal: d,
}) {
  function h() {
    f(!1);
  }
  return Ae(pz, {
    children: wn(dz, {
      children: [Ae(vz, { onClick: h, children: 'x' }), Ae(Ew, { product: i })],
    }),
  });
}
const yT = 'localhost:3000',
  mz = _r('div').withConfig({
    displayName: 'Admin__StyledBaseField',
    componentId: 'sc-1rnwr9c-0',
  })([
    'display:flex;flex-direction:column;justify-content:center;align-items:center;',
  ]),
  yz = _r('form').withConfig({
    displayName: 'Admin__StyledForm',
    componentId: 'sc-1rnwr9c-1',
  })([
    'margin:30px;align-items:center;border:1px solid lightblue;border-radius:10px;padding:20px;display:flex;justify-content:center;flex-wrap:wrap;@media (min-width:480px){padding:40px;}@media (min-width:600px){width:500px;}',
  ]),
  gT = _r('input').withConfig({
    displayName: 'Admin__StyledFormField',
    componentId: 'sc-1rnwr9c-2',
  })([
    'margin:5px;width:150px;@media (max-width:480px){width:200px;display:block;}',
  ]),
  gz = _r('textarea').withConfig({
    displayName: 'Admin__StyledFormTextArea',
    componentId: 'sc-1rnwr9c-3',
  })(['margin:5px;width:200px;@media (min-width:480px){width:320px;}']),
  bz = _r('input').withConfig({
    displayName: 'Admin__StyledButton',
    componentId: 'sc-1rnwr9c-4',
  })(['margin:10px;display:block;']),
  Sz = _r('input').withConfig({
    displayName: 'Admin__StyledFormFile',
    componentId: 'sc-1rnwr9c-5',
  })(['margin:10px;display:block;']);
function Ez({
  products: r,
  card: i,
  rows: o,
  setCard: s,
  setProductState: c,
  setIsOpenModal: f,
  isOpenModal: d,
}) {
  const {
    register: h,
    reset: m,
    handleSubmit: g,
    watch: E,
    formState: { errors: S },
  } = kk();
  return wn('div', {
    children: [
      d &&
        Ae(hz, {
          products: r,
          card: i,
          rows: o,
          setCard: s,
          setProductState: c,
          setIsOpenModal: f,
          isOpenModal: d,
        }),
      wn(mz, {
        children: [
          Ae('h2', { children: 'Administrator' }),
          Ae(fz, {
            products: r,
            card: i,
            rows: o,
            setCard: s,
            setProductState: c,
            setIsOpenModal: f,
            isOpenModal: d,
          }),
          Ae('h2', { children: 'Create new card' }),
          wn(yz, {
            onSubmit: g(async (O) => {
              console.log(O);
              const D = new FormData();
              (D.append('name', O.name),
                D.append('price', O.price),
                D.append('description', O.description));
              const x = document.querySelector('input[name="files"]');
              (x != null &&
                x.files &&
                Array.from(x.files).forEach((P) => {
                  D.append('files', P);
                }),
                await fetch(`http://${yT}/upload`, {
                  method: 'POST',
                  body: D,
                }));
              const _ = (
                await (
                  await fetch(`http://${yT}/all`, { method: 'GET' })
                ).json()
              ).initialData.map((P) => {
                const {
                  id: U,
                  name: V,
                  price: oe,
                  description: ne,
                  img: ce,
                } = P;
                return { id: U, name: V, price: oe, description: ne, img: ce };
              });
              (c(_), m());
            }),
            children: [
              wn('div', {
                children: [
                  Ae(gT, {
                    ...h('name', { required: !0 }),
                    placeholder: 'Name',
                  }),
                  S.name &&
                    Ae('span', { children: 'This field name is required' }),
                  Ae(gT, {
                    ...h('price', { required: !0 }),
                    placeholder: 'Price',
                  }),
                  S.price &&
                    Ae('span', { children: 'This field price is required' }),
                ],
              }),
              Ae(gz, {
                ...h('description', { required: !0 }),
                placeholder: 'Description',
                rows: 5,
              }),
              Ae(Sz, {
                type: 'file',
                name: 'files',
                accept: '.jpg',
                multiple: !0,
              }),
              S.description &&
                Ae('span', { children: 'This field description is required' }),
              Ae(bz, { type: 'submit' }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Cz({ products: r }) {
  return wn('div', {
    children: [
      Ae('h2', { children: 'Home' }),
      Ae('div', {
        children: r.map((i) =>
          wn(
            'div',
            {
              children: [
                wn('h3', { children: ['Name: ', i.name] }),
                wn('p', { children: ['id: ', i.id] }),
                wn('p', { children: ['Description: ', i.description] }),
                wn('p', { children: ['Price: ', i.price] }),
                wn('p', { children: ['images: ', i.img] }),
              ],
            },
            i.id
          )
        ),
      }),
    ],
  });
}
function Tz() {
  return Ae('div', { children: Ae('h2', { children: 'Orders' }) });
}
function wz() {
  return Ae('div', { children: Ae('h2', { children: 'Contacts' }) });
}
function xz() {
  return wn('div', {
    children: [
      Ae('h2', { children: 'Nothing to see here!' }),
      Ae('p', {
        children: Ae(Pi, { to: '/', children: 'Go to the home page' }),
      }),
    ],
  });
}
function Rz() {
  return wn('div', {
    children: [
      Ae('nav', {
        children: wn('ul', {
          children: [
            Ae('li', { children: Ae(Pi, { to: '/', children: 'Home' }) }),
            Ae('li', { children: Ae(Pi, { to: '/admin', children: 'Admin' }) }),
            Ae('li', {
              children: Ae(Pi, { to: '/orders', children: 'Orders' }),
            }),
            Ae('li', {
              children: Ae(Pi, { to: '/contacts', children: 'Contacts' }),
            }),
            Ae('li', {
              children: Ae(Pi, {
                to: '/nothing-here',
                children: 'Nothing Here',
              }),
            }),
          ],
        }),
      }),
      Ae('hr', {}),
      Ae(PL, {}),
    ],
  });
}
const _z = _r('div').withConfig({
  displayName: 'App__Test',
  componentId: 'sc-zj5zhc-0',
})(['color:red;']);
function Dz({ products: r }) {
  const [i, o] = K.useState(r),
    [s, c] = K.useState(2),
    [f, d] = K.useState(!1),
    [h, m] = K.useState({
      id: '',
      name: '',
      description: '',
      price: '',
      img: '',
    }),
    [g, E] = K.useState(!1);
  return (
    K.useEffect(() => {
      E(!0);
    }, []),
    K.useEffect(() => {
      function S() {
        const w = window.innerWidth;
        w < 480 ? c(4) : w < 768 ? c(3) : w < 1024 ? c(2) : c(1);
      }
      return (
        S(),
        window.addEventListener('resize', S),
        () => window.removeEventListener('resize', S)
      );
    }, []),
    g
      ? wn('div', {
          children: [
            Ae('h1', { children: 'Server Rendering Example' }),
            Ae('p', {
              children:
                "If you check out the HTML source of this page, you'll notice that it already contains the HTML markup of the app that was sent from the server!",
            }),
            Ae('p', {
              children:
                "This is great for search engines that need to index this page. It's also great for users because server-rendered pages tend to load more quickly on mobile devices and over slow networks.",
            }),
            Ae('p', {
              children:
                "Another thing to notice is that when you click one of the links below and navigate to a different URL, then hit the refresh button on your browser, the server is able to generate the HTML markup for that page as well because you're using React Router on the server. This creates a seamless experience both for your users navigating around your site and for developers on your team who get to use the same routing library in both places.",
            }),
            Ae(_z, { children: 'dfsdfsdfsdfsd' }),
            Ae(UL, {
              children: wn(wo, {
                path: '/',
                element: Ae(Rz, {}),
                children: [
                  Ae(wo, { index: !0, element: Ae(Cz, { products: r }) }),
                  Ae(wo, {
                    path: 'admin',
                    element: Ae(Ez, {
                      products: r,
                      card: h,
                      rows: s,
                      setCard: m,
                      setProductState: o,
                      setIsOpenModal: d,
                      isOpenModal: f,
                    }),
                  }),
                  Ae(wo, { path: 'orders', element: Ae(Tz, {}) }),
                  Ae(wo, { path: 'contacts', element: Ae(wz, {}) }),
                  Ae(wo, { path: '*', element: Ae(xz, {}) }),
                ],
              }),
            }),
          ],
        })
      : null
  );
}
RT(
  document.getElementById('app'),
  Ae(K.StrictMode, {
    children: Ae(JL, {
      children: Ae(Dz, { products: window.__INITIAL_PRODUCTS__ ?? [] }),
    }),
  })
);
