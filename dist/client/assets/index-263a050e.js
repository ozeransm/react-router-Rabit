function jM(r, i) {
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
function xw(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, 'default')
    ? r.default
    : r;
}
var Rw = { exports: {} },
  pd = {},
  _w = { exports: {} },
  bd = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ bd.exports;
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
      T = Symbol.for('react.suspense_list'),
      D = Symbol.for('react.memo'),
      O = Symbol.for('react.lazy'),
      x = Symbol.for('react.offscreen'),
      P = Symbol.iterator,
      L = '@@iterator';
    function _(b) {
      if (b === null || typeof b != 'object') return null;
      var A = (P && b[P]) || b[L];
      return typeof A == 'function' ? A : null;
    }
    var z = { current: null },
      U = { transition: null },
      F = { current: null, isBatchingLegacy: !1, didScheduleLegacyUpdate: !1 },
      se = { current: null },
      ie = {},
      de = null;
    function re(b) {
      de = b;
    }
    ((ie.setExtraStackFrame = function (b) {
      de = b;
    }),
      (ie.getCurrentStack = null),
      (ie.getStackAddendum = function () {
        var b = '';
        de && (b += de);
        var A = ie.getCurrentStack;
        return (A && (b += A() || ''), b);
      }));
    var ae = !1,
      ue = !1,
      B = !1,
      q = !1,
      ne = !1,
      pe = {
        ReactCurrentDispatcher: z,
        ReactCurrentBatchConfig: U,
        ReactCurrentOwner: se,
      };
    ((pe.ReactDebugCurrentFrame = ie), (pe.ReactCurrentActQueue = F));
    function le(b) {
      {
        for (
          var A = arguments.length, Y = new Array(A > 1 ? A - 1 : 0), Q = 1;
          Q < A;
          Q++
        )
          Y[Q - 1] = arguments[Q];
        Ne('warn', b, Y);
      }
    }
    function ve(b) {
      {
        for (
          var A = arguments.length, Y = new Array(A > 1 ? A - 1 : 0), Q = 1;
          Q < A;
          Q++
        )
          Y[Q - 1] = arguments[Q];
        Ne('error', b, Y);
      }
    }
    function Ne(b, A, Y) {
      {
        var Q = pe.ReactDebugCurrentFrame,
          be = Q.getStackAddendum();
        be !== '' && ((A += '%s'), (Y = Y.concat([be])));
        var Xe = Y.map(function (Pe) {
          return String(Pe);
        });
        (Xe.unshift('Warning: ' + A),
          Function.prototype.apply.call(console[b], console, Xe));
      }
    }
    var Le = {};
    function ft(b, A) {
      {
        var Y = b.constructor,
          Q = (Y && (Y.displayName || Y.name)) || 'ReactClass',
          be = Q + '.' + A;
        if (Le[be]) return;
        (ve(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          A,
          Q
        ),
          (Le[be] = !0));
      }
    }
    var qt = {
        isMounted: function (b) {
          return !1;
        },
        enqueueForceUpdate: function (b, A, Y) {
          ft(b, 'forceUpdate');
        },
        enqueueReplaceState: function (b, A, Y, Q) {
          ft(b, 'replaceState');
        },
        enqueueSetState: function (b, A, Y, Q) {
          ft(b, 'setState');
        },
      },
      Ce = Object.assign,
      Ee = {};
    Object.freeze(Ee);
    function Te(b, A, Y) {
      ((this.props = b),
        (this.context = A),
        (this.refs = Ee),
        (this.updater = Y || qt));
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
      var Ve = {
          isMounted: [
            'isMounted',
            'Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.',
          ],
          replaceState: [
            'replaceState',
            'Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236).',
          ],
        },
        $ = function (b, A) {
          Object.defineProperty(Te.prototype, b, {
            get: function () {
              le(
                '%s(...) is deprecated in plain JavaScript React classes. %s',
                A[0],
                A[1]
              );
            },
          });
        };
      for (var Ke in Ve) Ve.hasOwnProperty(Ke) && $(Ke, Ve[Ke]);
    }
    function ye() {}
    ye.prototype = Te.prototype;
    function at(b, A, Y) {
      ((this.props = b),
        (this.context = A),
        (this.refs = Ee),
        (this.updater = Y || qt));
    }
    var qe = (at.prototype = new ye());
    ((qe.constructor = at),
      Ce(qe, Te.prototype),
      (qe.isPureReactComponent = !0));
    function Je() {
      var b = { current: null };
      return (Object.seal(b), b);
    }
    var oe = Array.isArray;
    function it(b) {
      return oe(b);
    }
    function dt(b) {
      {
        var A = typeof Symbol == 'function' && Symbol.toStringTag,
          Y = (A && b[Symbol.toStringTag]) || b.constructor.name || 'Object';
        return Y;
      }
    }
    function He(b) {
      try {
        return (vt(b), !1);
      } catch {
        return !0;
      }
    }
    function vt(b) {
      return '' + b;
    }
    function Ye(b) {
      if (He(b))
        return (
          ve(
            'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
            dt(b)
          ),
          vt(b)
        );
    }
    function Ot(b, A, Y) {
      var Q = b.displayName;
      if (Q) return Q;
      var be = A.displayName || A.name || '';
      return be !== '' ? Y + '(' + be + ')' : Y;
    }
    function ln(b) {
      return b.displayName || 'Context';
    }
    function R(b) {
      if (b == null) return null;
      if (
        (typeof b.tag == 'number' &&
          ve(
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
        case T:
          return 'SuspenseList';
      }
      if (typeof b == 'object')
        switch (b.$$typeof) {
          case g:
            var A = b;
            return ln(A) + '.Consumer';
          case m:
            var Y = b;
            return ln(Y._context) + '.Provider';
          case E:
            return Ot(b, b.render, 'ForwardRef');
          case D:
            var Q = b.displayName || null;
            return Q !== null ? Q : R(b.type) || 'Memo';
          case O: {
            var be = b,
              Xe = be._payload,
              Pe = be._init;
            try {
              return R(Pe(Xe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var V = Object.prototype.hasOwnProperty,
      W = { key: !0, ref: !0, __self: !0, __source: !0 },
      me,
      X,
      ee;
    ee = {};
    function De(b) {
      if (V.call(b, 'ref')) {
        var A = Object.getOwnPropertyDescriptor(b, 'ref').get;
        if (A && A.isReactWarning) return !1;
      }
      return b.ref !== void 0;
    }
    function Be(b) {
      if (V.call(b, 'key')) {
        var A = Object.getOwnPropertyDescriptor(b, 'key').get;
        if (A && A.isReactWarning) return !1;
      }
      return b.key !== void 0;
    }
    function Ze(b, A) {
      var Y = function () {
        me ||
          ((me = !0),
          ve(
            '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
            A
          ));
      };
      ((Y.isReactWarning = !0),
        Object.defineProperty(b, 'key', { get: Y, configurable: !0 }));
    }
    function tn(b, A) {
      var Y = function () {
        X ||
          ((X = !0),
          ve(
            '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
            A
          ));
      };
      ((Y.isReactWarning = !0),
        Object.defineProperty(b, 'ref', { get: Y, configurable: !0 }));
    }
    function or(b) {
      if (
        typeof b.ref == 'string' &&
        se.current &&
        b.__self &&
        se.current.stateNode !== b.__self
      ) {
        var A = R(se.current.type);
        ee[A] ||
          (ve(
            'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
            A,
            b.ref
          ),
          (ee[A] = !0));
      }
    }
    var Se = function (b, A, Y, Q, be, Xe, Pe) {
      var et = { $$typeof: s, type: b, key: A, ref: Y, props: Pe, _owner: Xe };
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
          value: Q,
        }),
        Object.defineProperty(et, '_source', {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: be,
        }),
        Object.freeze && (Object.freeze(et.props), Object.freeze(et)),
        et
      );
    };
    function Fe(b, A, Y) {
      var Q,
        be = {},
        Xe = null,
        Pe = null,
        et = null,
        mt = null;
      if (A != null) {
        (De(A) && ((Pe = A.ref), or(A)),
          Be(A) && (Ye(A.key), (Xe = '' + A.key)),
          (et = A.__self === void 0 ? null : A.__self),
          (mt = A.__source === void 0 ? null : A.__source));
        for (Q in A) V.call(A, Q) && !W.hasOwnProperty(Q) && (be[Q] = A[Q]);
      }
      var Lt = arguments.length - 2;
      if (Lt === 1) be.children = Y;
      else if (Lt > 1) {
        for (var Ft = Array(Lt), Vt = 0; Vt < Lt; Vt++)
          Ft[Vt] = arguments[Vt + 2];
        (Object.freeze && Object.freeze(Ft), (be.children = Ft));
      }
      if (b && b.defaultProps) {
        var Gt = b.defaultProps;
        for (Q in Gt) be[Q] === void 0 && (be[Q] = Gt[Q]);
      }
      if (Xe || Pe) {
        var rn =
          typeof b == 'function' ? b.displayName || b.name || 'Unknown' : b;
        (Xe && Ze(be, rn), Pe && tn(be, rn));
      }
      return Se(b, Xe, Pe, et, mt, se.current, be);
    }
    function ot(b, A) {
      var Y = Se(b.type, A, b.ref, b._self, b._source, b._owner, b.props);
      return Y;
    }
    function Tt(b, A, Y) {
      if (b == null)
        throw new Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' +
            b +
            '.'
        );
      var Q,
        be = Ce({}, b.props),
        Xe = b.key,
        Pe = b.ref,
        et = b._self,
        mt = b._source,
        Lt = b._owner;
      if (A != null) {
        (De(A) && ((Pe = A.ref), (Lt = se.current)),
          Be(A) && (Ye(A.key), (Xe = '' + A.key)));
        var Ft;
        b.type && b.type.defaultProps && (Ft = b.type.defaultProps);
        for (Q in A)
          V.call(A, Q) &&
            !W.hasOwnProperty(Q) &&
            (A[Q] === void 0 && Ft !== void 0
              ? (be[Q] = Ft[Q])
              : (be[Q] = A[Q]));
      }
      var Vt = arguments.length - 2;
      if (Vt === 1) be.children = Y;
      else if (Vt > 1) {
        for (var Gt = Array(Vt), rn = 0; rn < Vt; rn++)
          Gt[rn] = arguments[rn + 2];
        be.children = Gt;
      }
      return Se(b.type, Xe, Pe, et, mt, Lt, be);
    }
    function At(b) {
      return typeof b == 'object' && b !== null && b.$$typeof === s;
    }
    var nn = '.',
      Kt = ':';
    function Ln(b) {
      var A = /[=:]/g,
        Y = { '=': '=0', ':': '=2' },
        Q = b.replace(A, function (be) {
          return Y[be];
        });
      return '$' + Q;
    }
    var Ut = !1,
      hr = /\/+/g;
    function $t(b) {
      return b.replace(hr, '$&/');
    }
    function Yt(b, A) {
      return typeof b == 'object' && b !== null && b.key != null
        ? (Ye(b.key), Ln('' + b.key))
        : A.toString(36);
    }
    function ra(b, A, Y, Q, be) {
      var Xe = typeof b;
      (Xe === 'undefined' || Xe === 'boolean') && (b = null);
      var Pe = !1;
      if (b === null) Pe = !0;
      else
        switch (Xe) {
          case 'string':
          case 'number':
            Pe = !0;
            break;
          case 'object':
            switch (b.$$typeof) {
              case s:
              case c:
                Pe = !0;
            }
        }
      if (Pe) {
        var et = b,
          mt = be(et),
          Lt = Q === '' ? nn + Yt(et, 0) : Q;
        if (it(mt)) {
          var Ft = '';
          (Lt != null && (Ft = $t(Lt) + '/'),
            ra(mt, A, Ft, '', function (Ud) {
              return Ud;
            }));
        } else
          mt != null &&
            (At(mt) &&
              (mt.key && (!et || et.key !== mt.key) && Ye(mt.key),
              (mt = ot(
                mt,
                Y +
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
        _t = Q === '' ? nn : Q + Kt;
      if (it(b))
        for (var di = 0; di < b.length; di++)
          ((Vt = b[di]), (Gt = _t + Yt(Vt, di)), (rn += ra(Vt, A, Y, Gt, be)));
      else {
        var zo = _(b);
        if (typeof zo == 'function') {
          var Zl = b;
          zo === Zl.entries &&
            (Ut ||
              le(
                'Using Maps as children is not supported. Use an array of keyed ReactElements instead.'
              ),
            (Ut = !0));
          for (var zd = zo.call(Zl), Oa, es = 0; !(Oa = zd.next()).done; )
            ((Vt = Oa.value),
              (Gt = _t + Yt(Vt, es++)),
              (rn += ra(Vt, A, Y, Gt, be)));
        } else if (Xe === 'object') {
          var ts = String(b);
          throw new Error(
            'Objects are not valid as a React child (found: ' +
              (ts === '[object Object]'
                ? 'object with keys {' + Object.keys(b).join(', ') + '}'
                : ts) +
              '). If you meant to render a collection of children, use an array instead.'
          );
        }
      }
      return rn;
    }
    function Ur(b, A, Y) {
      if (b == null) return b;
      var Q = [],
        be = 0;
      return (
        ra(b, Q, '', '', function (Xe) {
          return A.call(Y, Xe, be++);
        }),
        Q
      );
    }
    function ji(b) {
      var A = 0;
      return (
        Ur(b, function () {
          A++;
        }),
        A
      );
    }
    function Ao(b, A, Y) {
      Ur(
        b,
        function () {
          A.apply(this, arguments);
        },
        Y
      );
    }
    function Vl(b) {
      return (
        Ur(b, function (A) {
          return A;
        }) || []
      );
    }
    function $i(b) {
      if (!At(b))
        throw new Error(
          'React.Children.only expected to receive a single React element child.'
        );
      return b;
    }
    function Yi(b) {
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
      var Y = !1,
        Q = !1,
        be = !1;
      {
        var Xe = { $$typeof: g, _context: A };
        (Object.defineProperties(Xe, {
          Provider: {
            get: function () {
              return (
                Q ||
                  ((Q = !0),
                  ve(
                    'Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?'
                  )),
                A.Provider
              );
            },
            set: function (Pe) {
              A.Provider = Pe;
            },
          },
          _currentValue: {
            get: function () {
              return A._currentValue;
            },
            set: function (Pe) {
              A._currentValue = Pe;
            },
          },
          _currentValue2: {
            get: function () {
              return A._currentValue2;
            },
            set: function (Pe) {
              A._currentValue2 = Pe;
            },
          },
          _threadCount: {
            get: function () {
              return A._threadCount;
            },
            set: function (Pe) {
              A._threadCount = Pe;
            },
          },
          Consumer: {
            get: function () {
              return (
                Y ||
                  ((Y = !0),
                  ve(
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
            set: function (Pe) {
              be ||
                (le(
                  "Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",
                  Pe
                ),
                (be = !0));
            },
          },
        }),
          (A.Consumer = Xe));
      }
      return ((A._currentRenderer = null), (A._currentRenderer2 = null), A);
    }
    var xa = -1,
      ri = 0,
      Ra = 1,
      Fr = 2;
    function Vr(b) {
      if (b._status === xa) {
        var A = b._result,
          Y = A();
        if (
          (Y.then(
            function (Xe) {
              if (b._status === ri || b._status === xa) {
                var Pe = b;
                ((Pe._status = Ra), (Pe._result = Xe));
              }
            },
            function (Xe) {
              if (b._status === ri || b._status === xa) {
                var Pe = b;
                ((Pe._status = Fr), (Pe._result = Xe));
              }
            }
          ),
          b._status === xa)
        ) {
          var Q = b;
          ((Q._status = ri), (Q._result = Y));
        }
      }
      if (b._status === Ra) {
        var be = b._result;
        return (
          be === void 0 &&
            ve(
              `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
              be
            ),
          'default' in be ||
            ve(
              `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
              be
            ),
          be.default
        );
      } else throw b._result;
    }
    function aa(b) {
      var A = { _status: xa, _result: b },
        Y = { $$typeof: O, _payload: A, _init: Vr };
      {
        var Q, be;
        Object.defineProperties(Y, {
          defaultProps: {
            configurable: !0,
            get: function () {
              return Q;
            },
            set: function (Xe) {
              (ve(
                'React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.'
              ),
                (Q = Xe),
                Object.defineProperty(Y, 'defaultProps', { enumerable: !0 }));
            },
          },
          propTypes: {
            configurable: !0,
            get: function () {
              return be;
            },
            set: function (Xe) {
              (ve(
                'React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.'
              ),
                (be = Xe),
                Object.defineProperty(Y, 'propTypes', { enumerable: !0 }));
            },
          },
        });
      }
      return Y;
    }
    function Gi(b) {
      (b != null && b.$$typeof === D
        ? ve(
            'forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).'
          )
        : typeof b != 'function'
          ? ve(
              'forwardRef requires a render function but was given %s.',
              b === null ? 'null' : typeof b
            )
          : b.length !== 0 &&
            b.length !== 2 &&
            ve(
              'forwardRef render functions accept exactly two parameters: props and ref. %s',
              b.length === 1
                ? 'Did you forget to use the ref parameter?'
                : 'Any additional parameter will be undefined.'
            ),
        b != null &&
          (b.defaultProps != null || b.propTypes != null) &&
          ve(
            'forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?'
          ));
      var A = { $$typeof: E, render: b };
      {
        var Y;
        Object.defineProperty(A, 'displayName', {
          enumerable: !1,
          configurable: !0,
          get: function () {
            return Y;
          },
          set: function (Q) {
            ((Y = Q), !b.name && !b.displayName && (b.displayName = Q));
          },
        });
      }
      return A;
    }
    var ai;
    ai = Symbol.for('react.module.reference');
    function M(b) {
      return !!(
        typeof b == 'string' ||
        typeof b == 'function' ||
        b === f ||
        b === h ||
        ne ||
        b === d ||
        b === S ||
        b === T ||
        q ||
        b === x ||
        ae ||
        ue ||
        B ||
        (typeof b == 'object' &&
          b !== null &&
          (b.$$typeof === O ||
            b.$$typeof === D ||
            b.$$typeof === m ||
            b.$$typeof === g ||
            b.$$typeof === E ||
            b.$$typeof === ai ||
            b.getModuleId !== void 0))
      );
    }
    function ce(b, A) {
      M(b) ||
        ve(
          'memo: The first argument must be a component. Instead received: %s',
          b === null ? 'null' : typeof b
        );
      var Y = { $$typeof: D, type: b, compare: A === void 0 ? null : A };
      {
        var Q;
        Object.defineProperty(Y, 'displayName', {
          enumerable: !1,
          configurable: !0,
          get: function () {
            return Q;
          },
          set: function (be) {
            ((Q = be), !b.name && !b.displayName && (b.displayName = be));
          },
        });
      }
      return Y;
    }
    function ge() {
      var b = z.current;
      return (
        b === null &&
          ve(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`),
        b
      );
    }
    function $e(b) {
      var A = ge();
      if (b._context !== void 0) {
        var Y = b._context;
        Y.Consumer === b
          ? ve(
              'Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?'
            )
          : Y.Provider === b &&
            ve(
              'Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?'
            );
      }
      return A.useContext(b);
    }
    function ht(b) {
      var A = ge();
      return A.useState(b);
    }
    function Et(b, A, Y) {
      var Q = ge();
      return Q.useReducer(b, A, Y);
    }
    function Ge(b) {
      var A = ge();
      return A.useRef(b);
    }
    function ut(b, A) {
      var Y = ge();
      return Y.useEffect(b, A);
    }
    function hn(b, A) {
      var Y = ge();
      return Y.useInsertionEffect(b, A);
    }
    function Bt(b, A) {
      var Y = ge();
      return Y.useLayoutEffect(b, A);
    }
    function Xt(b, A) {
      var Y = ge();
      return Y.useCallback(b, A);
    }
    function jn(b, A) {
      var Y = ge();
      return Y.useMemo(b, A);
    }
    function ia(b, A, Y) {
      var Q = ge();
      return Q.useImperativeHandle(b, A, Y);
    }
    function Dr(b, A) {
      {
        var Y = ge();
        return Y.useDebugValue(b, A);
      }
    }
    function xn() {
      var b = ge();
      return b.useTransition();
    }
    function mr(b) {
      var A = ge();
      return A.useDeferredValue(b);
    }
    function ct() {
      var b = ge();
      return b.useId();
    }
    function _a(b, A, Y) {
      var Q = ge();
      return Q.useSyncExternalStore(b, A, Y);
    }
    var ii = 0,
      Hl,
      Il,
      Bl,
      jl,
      $l,
      Yl,
      Gl;
    function Wu() {}
    Wu.__reactDisabledLog = !0;
    function kd() {
      {
        if (ii === 0) {
          ((Hl = console.log),
            (Il = console.info),
            (Bl = console.warn),
            (jl = console.error),
            ($l = console.group),
            (Yl = console.groupCollapsed),
            (Gl = console.groupEnd));
          var b = { configurable: !0, enumerable: !0, value: Wu, writable: !0 };
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
        ii++;
      }
    }
    function Wl() {
      {
        if ((ii--, ii === 0)) {
          var b = { configurable: !0, enumerable: !0, writable: !0 };
          Object.defineProperties(console, {
            log: Ce({}, b, { value: Hl }),
            info: Ce({}, b, { value: Il }),
            warn: Ce({}, b, { value: Bl }),
            error: Ce({}, b, { value: jl }),
            group: Ce({}, b, { value: $l }),
            groupCollapsed: Ce({}, b, { value: Yl }),
            groupEnd: Ce({}, b, { value: Gl }),
          });
        }
        ii < 0 &&
          ve(
            'disabledDepth fell below zero. This is a bug in React. Please file an issue.'
          );
      }
    }
    var Wi = pe.ReactCurrentDispatcher,
      Or;
    function oi(b, A, Y) {
      {
        if (Or === void 0)
          try {
            throw Error();
          } catch (be) {
            var Q = be.stack.trim().match(/\n( *(at )?)/);
            Or = (Q && Q[1]) || '';
          }
        return (
          `
` +
          Or +
          b
        );
      }
    }
    var li = !1,
      Mo;
    {
      var ql = typeof WeakMap == 'function' ? WeakMap : Map;
      Mo = new ql();
    }
    function qu(b, A) {
      if (!b || li) return '';
      {
        var Y = Mo.get(b);
        if (Y !== void 0) return Y;
      }
      var Q;
      li = !0;
      var be = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Xe;
      ((Xe = Wi.current), (Wi.current = null), kd());
      try {
        if (A) {
          var Pe = function () {
            throw Error();
          };
          if (
            (Object.defineProperty(Pe.prototype, 'props', {
              set: function () {
                throw Error();
              },
            }),
            typeof Reflect == 'object' && Reflect.construct)
          ) {
            try {
              Reflect.construct(Pe, []);
            } catch (_t) {
              Q = _t;
            }
            Reflect.construct(b, [], Pe);
          } else {
            try {
              Pe.call();
            } catch (_t) {
              Q = _t;
            }
            b.call(Pe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_t) {
            Q = _t;
          }
          b();
        }
      } catch (_t) {
        if (_t && Q && typeof _t.stack == 'string') {
          for (
            var et = _t.stack.split(`
`),
              mt = Q.stack.split(`
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
                      typeof b == 'function' && Mo.set(b, Vt),
                      Vt
                    );
                  }
                while (Lt >= 1 && Ft >= 0);
              break;
            }
        }
      } finally {
        ((li = !1), (Wi.current = Xe), Wl(), (Error.prepareStackTrace = be));
      }
      var Gt = b ? b.displayName || b.name : '',
        rn = Gt ? oi(Gt) : '';
      return (typeof b == 'function' && Mo.set(b, rn), rn);
    }
    function Xl(b, A, Y) {
      return qu(b, !1);
    }
    function Nd(b) {
      var A = b.prototype;
      return !!(A && A.isReactComponent);
    }
    function si(b, A, Y) {
      if (b == null) return '';
      if (typeof b == 'function') return qu(b, Nd(b));
      if (typeof b == 'string') return oi(b);
      switch (b) {
        case S:
          return oi('Suspense');
        case T:
          return oi('SuspenseList');
      }
      if (typeof b == 'object')
        switch (b.$$typeof) {
          case E:
            return Xl(b.render);
          case D:
            return si(b.type, A, Y);
          case O: {
            var Q = b,
              be = Q._payload,
              Xe = Q._init;
            try {
              return si(Xe(be), A, Y);
            } catch {}
          }
        }
      return '';
    }
    var Xu = {},
      Ql = pe.ReactDebugCurrentFrame;
    function Lo(b) {
      if (b) {
        var A = b._owner,
          Y = si(b.type, b._source, A ? A.type : null);
        Ql.setExtraStackFrame(Y);
      } else Ql.setExtraStackFrame(null);
    }
    function Qu(b, A, Y, Q, be) {
      {
        var Xe = Function.call.bind(V);
        for (var Pe in b)
          if (Xe(b, Pe)) {
            var et = void 0;
            try {
              if (typeof b[Pe] != 'function') {
                var mt = Error(
                  (Q || 'React class') +
                    ': ' +
                    Y +
                    ' type `' +
                    Pe +
                    '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                    typeof b[Pe] +
                    '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
                );
                throw ((mt.name = 'Invariant Violation'), mt);
              }
              et = b[Pe](
                A,
                Pe,
                Q,
                Y,
                null,
                'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
              );
            } catch (Lt) {
              et = Lt;
            }
            (et &&
              !(et instanceof Error) &&
              (Lo(be),
              ve(
                '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                Q || 'React class',
                Y,
                Pe,
                typeof et
              ),
              Lo(null)),
              et instanceof Error &&
                !(et.message in Xu) &&
                ((Xu[et.message] = !0),
                Lo(be),
                ve('Failed %s type: %s', Y, et.message),
                Lo(null)));
          }
      }
    }
    function Ct(b) {
      if (b) {
        var A = b._owner,
          Y = si(b.type, b._source, A ? A.type : null);
        re(Y);
      } else re(null);
    }
    var Kl;
    Kl = !1;
    function Jl() {
      if (se.current) {
        var b = R(se.current.type);
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
          Y = b.lineNumber;
        return (
          `

Check your code at ` +
          A +
          ':' +
          Y +
          '.'
        );
      }
      return '';
    }
    function Ku(b) {
      return b != null ? lt(b.__source) : '';
    }
    var $n = {};
    function qi(b) {
      var A = Jl();
      if (!A) {
        var Y = typeof b == 'string' ? b : b.displayName || b.name;
        Y &&
          (A =
            `

Check the top-level render call using <` +
            Y +
            '>.');
      }
      return A;
    }
    function ui(b, A) {
      if (!(!b._store || b._store.validated || b.key != null)) {
        b._store.validated = !0;
        var Y = qi(A);
        if (!$n[Y]) {
          $n[Y] = !0;
          var Q = '';
          (b &&
            b._owner &&
            b._owner !== se.current &&
            (Q = ' It was passed a child from ' + R(b._owner.type) + '.'),
            Ct(b),
            ve(
              'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
              Y,
              Q
            ),
            Ct(null));
        }
      }
    }
    function Ju(b, A) {
      if (typeof b == 'object') {
        if (it(b))
          for (var Y = 0; Y < b.length; Y++) {
            var Q = b[Y];
            At(Q) && ui(Q, A);
          }
        else if (At(b)) b._store && (b._store.validated = !0);
        else if (b) {
          var be = _(b);
          if (typeof be == 'function' && be !== b.entries)
            for (var Xe = be.call(b), Pe; !(Pe = Xe.next()).done; )
              At(Pe.value) && ui(Pe.value, A);
        }
      }
    }
    function Rn(b) {
      {
        var A = b.type;
        if (A == null || typeof A == 'string') return;
        var Y;
        if (typeof A == 'function') Y = A.propTypes;
        else if (typeof A == 'object' && (A.$$typeof === E || A.$$typeof === D))
          Y = A.propTypes;
        else return;
        if (Y) {
          var Q = R(A);
          Qu(Y, b.props, 'prop', Q, b);
        } else if (A.PropTypes !== void 0 && !Kl) {
          Kl = !0;
          var be = R(A);
          ve(
            'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
            be || 'Unknown'
          );
        }
        typeof A.getDefaultProps == 'function' &&
          !A.getDefaultProps.isReactClassApproved &&
          ve(
            'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.'
          );
      }
    }
    function Jt(b) {
      {
        for (var A = Object.keys(b.props), Y = 0; Y < A.length; Y++) {
          var Q = A[Y];
          if (Q !== 'children' && Q !== 'key') {
            (Ct(b),
              ve(
                'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
                Q
              ),
              Ct(null));
            break;
          }
        }
        b.ref !== null &&
          (Ct(b),
          ve('Invalid attribute `ref` supplied to `React.Fragment`.'),
          Ct(null));
      }
    }
    function Zu(b, A, Y) {
      var Q = M(b);
      if (!Q) {
        var be = '';
        (b === void 0 ||
          (typeof b == 'object' &&
            b !== null &&
            Object.keys(b).length === 0)) &&
          (be +=
            " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
        var Xe = Ku(A);
        Xe ? (be += Xe) : (be += Jl());
        var Pe;
        (b === null
          ? (Pe = 'null')
          : it(b)
            ? (Pe = 'array')
            : b !== void 0 && b.$$typeof === s
              ? ((Pe = '<' + (R(b.type) || 'Unknown') + ' />'),
                (be =
                  ' Did you accidentally export a JSX literal instead of a component?'))
              : (Pe = typeof b),
          ve(
            'React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
            Pe,
            be
          ));
      }
      var et = Fe.apply(this, arguments);
      if (et == null) return et;
      if (Q) for (var mt = 2; mt < arguments.length; mt++) Ju(arguments[mt], b);
      return (b === f ? Jt(et) : Rn(et), et);
    }
    var yr = !1;
    function lr(b) {
      var A = Zu.bind(null, b);
      return (
        (A.type = b),
        yr ||
          ((yr = !0),
          le(
            'React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.'
          )),
        Object.defineProperty(A, 'type', {
          enumerable: !1,
          get: function () {
            return (
              le(
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
    function oa(b, A, Y) {
      for (
        var Q = Tt.apply(this, arguments), be = 2;
        be < arguments.length;
        be++
      )
        Ju(arguments[be], Q.type);
      return (Rn(Q), Q);
    }
    function Pd(b, A) {
      var Y = U.transition;
      U.transition = {};
      var Q = U.transition;
      U.transition._updatedFibers = new Set();
      try {
        b();
      } finally {
        if (((U.transition = Y), Y === null && Q._updatedFibers)) {
          var be = Q._updatedFibers.size;
          (be > 10 &&
            le(
              'Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.'
            ),
            Q._updatedFibers.clear());
        }
      }
    }
    var ko = !1,
      Xi = null;
    function ec(b) {
      if (Xi === null)
        try {
          var A = ('require' + Math.random()).slice(0, 7),
            Y = r && r[A];
          Xi = Y.call(r, 'timers').setImmediate;
        } catch {
          Xi = function (be) {
            ko === !1 &&
              ((ko = !0),
              typeof MessageChannel > 'u' &&
                ve(
                  'This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.'
                ));
            var Xe = new MessageChannel();
            ((Xe.port1.onmessage = be), Xe.port2.postMessage(void 0));
          };
        }
      return Xi(b);
    }
    var ci = 0,
      tc = !1;
    function nc(b) {
      {
        var A = ci;
        (ci++, F.current === null && (F.current = []));
        var Y = F.isBatchingLegacy,
          Q;
        try {
          if (
            ((F.isBatchingLegacy = !0),
            (Q = b()),
            !Y && F.didScheduleLegacyUpdate)
          ) {
            var be = F.current;
            be !== null && ((F.didScheduleLegacyUpdate = !1), Po(be));
          }
        } catch (Gt) {
          throw (Da(A), Gt);
        } finally {
          F.isBatchingLegacy = Y;
        }
        if (Q !== null && typeof Q == 'object' && typeof Q.then == 'function') {
          var Xe = Q,
            Pe = !1,
            et = {
              then: function (Gt, rn) {
                ((Pe = !0),
                  Xe.then(
                    function (_t) {
                      (Da(A), ci === 0 ? No(_t, Gt, rn) : Gt(_t));
                    },
                    function (_t) {
                      (Da(A), rn(_t));
                    }
                  ));
              },
            };
          return (
            !tc &&
              typeof Promise < 'u' &&
              Promise.resolve()
                .then(function () {})
                .then(function () {
                  Pe ||
                    ((tc = !0),
                    ve(
                      'You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);'
                    ));
                }),
            et
          );
        } else {
          var mt = Q;
          if ((Da(A), ci === 0)) {
            var Lt = F.current;
            Lt !== null && (Po(Lt), (F.current = null));
            var Ft = {
              then: function (Gt, rn) {
                F.current === null
                  ? ((F.current = []), No(mt, Gt, rn))
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
    function Da(b) {
      (b !== ci - 1 &&
        ve(
          'You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. '
        ),
        (ci = b));
    }
    function No(b, A, Y) {
      {
        var Q = F.current;
        if (Q !== null)
          try {
            (Po(Q),
              ec(function () {
                Q.length === 0 ? ((F.current = null), A(b)) : No(b, A, Y);
              }));
          } catch (be) {
            Y(be);
          }
        else A(b);
      }
    }
    var fi = !1;
    function Po(b) {
      if (!fi) {
        fi = !0;
        var A = 0;
        try {
          for (; A < b.length; A++) {
            var Y = b[A];
            do Y = Y(!0);
            while (Y !== null);
          }
          b.length = 0;
        } catch (Q) {
          throw ((b = b.slice(A + 1)), Q);
        } finally {
          fi = !1;
        }
      }
    }
    var rc = Zu,
      ac = oa,
      ic = lr,
      oc = { map: Ur, forEach: Ao, count: ji, toArray: Vl, only: $i };
    ((i.Children = oc),
      (i.Component = Te),
      (i.Fragment = f),
      (i.Profiler = h),
      (i.PureComponent = at),
      (i.StrictMode = d),
      (i.Suspense = S),
      (i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pe),
      (i.act = nc),
      (i.cloneElement = ac),
      (i.createContext = Yi),
      (i.createElement = rc),
      (i.createFactory = ic),
      (i.createRef = Je),
      (i.forwardRef = Gi),
      (i.isValidElement = At),
      (i.lazy = aa),
      (i.memo = ce),
      (i.startTransition = Pd),
      (i.unstable_act = nc),
      (i.useCallback = Xt),
      (i.useContext = $e),
      (i.useDebugValue = Dr),
      (i.useDeferredValue = mr),
      (i.useEffect = ut),
      (i.useId = ct),
      (i.useImperativeHandle = ia),
      (i.useInsertionEffect = hn),
      (i.useLayoutEffect = Bt),
      (i.useMemo = jn),
      (i.useReducer = Et),
      (i.useRef = Ge),
      (i.useState = ht),
      (i.useSyncExternalStore = _a),
      (i.useTransition = xn),
      (i.version = o),
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' &&
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ==
          'function' &&
        __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error()));
  })();
})(bd, bd.exports);
var $M = bd.exports;
_w.exports = $M;
var Z = _w.exports;
const wt = xw(Z),
  YM = jM({ __proto__: null, default: wt }, [Z]);
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function () {
  var r = Z,
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
    T = Symbol.for('react.lazy'),
    D = Symbol.for('react.offscreen'),
    O = Symbol.iterator,
    x = '@@iterator';
  function P(M) {
    if (M === null || typeof M != 'object') return null;
    var ce = (O && M[O]) || M[x];
    return typeof ce == 'function' ? ce : null;
  }
  var L = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function _(M) {
    {
      for (
        var ce = arguments.length, ge = new Array(ce > 1 ? ce - 1 : 0), $e = 1;
        $e < ce;
        $e++
      )
        ge[$e - 1] = arguments[$e];
      z('error', M, ge);
    }
  }
  function z(M, ce, ge) {
    {
      var $e = L.ReactDebugCurrentFrame,
        ht = $e.getStackAddendum();
      ht !== '' && ((ce += '%s'), (ge = ge.concat([ht])));
      var Et = ge.map(function (Ge) {
        return String(Ge);
      });
      (Et.unshift('Warning: ' + ce),
        Function.prototype.apply.call(console[M], console, Et));
    }
  }
  var U = !1,
    F = !1,
    se = !1,
    ie = !1,
    de = !1,
    re;
  re = Symbol.for('react.module.reference');
  function ae(M) {
    return !!(
      typeof M == 'string' ||
      typeof M == 'function' ||
      M === s ||
      M === f ||
      de ||
      M === c ||
      M === g ||
      M === E ||
      ie ||
      M === D ||
      U ||
      F ||
      se ||
      (typeof M == 'object' &&
        M !== null &&
        (M.$$typeof === T ||
          M.$$typeof === S ||
          M.$$typeof === d ||
          M.$$typeof === h ||
          M.$$typeof === m ||
          M.$$typeof === re ||
          M.getModuleId !== void 0))
    );
  }
  function ue(M, ce, ge) {
    var $e = M.displayName;
    if ($e) return $e;
    var ht = ce.displayName || ce.name || '';
    return ht !== '' ? ge + '(' + ht + ')' : ge;
  }
  function B(M) {
    return M.displayName || 'Context';
  }
  function q(M) {
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
          var ce = M;
          return B(ce) + '.Consumer';
        case d:
          var ge = M;
          return B(ge._context) + '.Provider';
        case m:
          return ue(M, M.render, 'ForwardRef');
        case S:
          var $e = M.displayName || null;
          return $e !== null ? $e : q(M.type) || 'Memo';
        case T: {
          var ht = M,
            Et = ht._payload,
            Ge = ht._init;
          try {
            return q(Ge(Et));
          } catch {
            return null;
          }
        }
      }
    return null;
  }
  var ne = Object.assign,
    pe = 0,
    le,
    ve,
    Ne,
    Le,
    ft,
    qt,
    Ce;
  function Ee() {}
  Ee.__reactDisabledLog = !0;
  function Te() {
    {
      if (pe === 0) {
        ((le = console.log),
          (ve = console.info),
          (Ne = console.warn),
          (Le = console.error),
          (ft = console.group),
          (qt = console.groupCollapsed),
          (Ce = console.groupEnd));
        var M = { configurable: !0, enumerable: !0, value: Ee, writable: !0 };
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
      pe++;
    }
  }
  function Ve() {
    {
      if ((pe--, pe === 0)) {
        var M = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: ne({}, M, { value: le }),
          info: ne({}, M, { value: ve }),
          warn: ne({}, M, { value: Ne }),
          error: ne({}, M, { value: Le }),
          group: ne({}, M, { value: ft }),
          groupCollapsed: ne({}, M, { value: qt }),
          groupEnd: ne({}, M, { value: Ce }),
        });
      }
      pe < 0 &&
        _(
          'disabledDepth fell below zero. This is a bug in React. Please file an issue.'
        );
    }
  }
  var $ = L.ReactCurrentDispatcher,
    Ke;
  function ye(M, ce, ge) {
    {
      if (Ke === void 0)
        try {
          throw Error();
        } catch (ht) {
          var $e = ht.stack.trim().match(/\n( *(at )?)/);
          Ke = ($e && $e[1]) || '';
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
    qe;
  {
    var Je = typeof WeakMap == 'function' ? WeakMap : Map;
    qe = new Je();
  }
  function oe(M, ce) {
    if (!M || at) return '';
    {
      var ge = qe.get(M);
      if (ge !== void 0) return ge;
    }
    var $e;
    at = !0;
    var ht = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    var Et;
    ((Et = $.current), ($.current = null), Te());
    try {
      if (ce) {
        var Ge = function () {
          throw Error();
        };
        if (
          (Object.defineProperty(Ge.prototype, 'props', {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == 'object' && Reflect.construct)
        ) {
          try {
            Reflect.construct(Ge, []);
          } catch (xn) {
            $e = xn;
          }
          Reflect.construct(M, [], Ge);
        } else {
          try {
            Ge.call();
          } catch (xn) {
            $e = xn;
          }
          M.call(Ge.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (xn) {
          $e = xn;
        }
        M();
      }
    } catch (xn) {
      if (xn && $e && typeof xn.stack == 'string') {
        for (
          var ut = xn.stack.split(`
`),
            hn = $e.stack.split(`
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
                  var jn =
                    `
` + ut[Bt].replace(' at new ', ' at ');
                  return (
                    M.displayName &&
                      jn.includes('<anonymous>') &&
                      (jn = jn.replace('<anonymous>', M.displayName)),
                    typeof M == 'function' && qe.set(M, jn),
                    jn
                  );
                }
              while (Bt >= 1 && Xt >= 0);
            break;
          }
      }
    } finally {
      ((at = !1), ($.current = Et), Ve(), (Error.prepareStackTrace = ht));
    }
    var ia = M ? M.displayName || M.name : '',
      Dr = ia ? ye(ia) : '';
    return (typeof M == 'function' && qe.set(M, Dr), Dr);
  }
  function it(M, ce, ge) {
    return oe(M, !1);
  }
  function dt(M) {
    var ce = M.prototype;
    return !!(ce && ce.isReactComponent);
  }
  function He(M, ce, ge) {
    if (M == null) return '';
    if (typeof M == 'function') return oe(M, dt(M));
    if (typeof M == 'string') return ye(M);
    switch (M) {
      case g:
        return ye('Suspense');
      case E:
        return ye('SuspenseList');
    }
    if (typeof M == 'object')
      switch (M.$$typeof) {
        case m:
          return it(M.render);
        case S:
          return He(M.type, ce, ge);
        case T: {
          var $e = M,
            ht = $e._payload,
            Et = $e._init;
          try {
            return He(Et(ht), ce, ge);
          } catch {}
        }
      }
    return '';
  }
  var vt = Object.prototype.hasOwnProperty,
    Ye = {},
    Ot = L.ReactDebugCurrentFrame;
  function ln(M) {
    if (M) {
      var ce = M._owner,
        ge = He(M.type, M._source, ce ? ce.type : null);
      Ot.setExtraStackFrame(ge);
    } else Ot.setExtraStackFrame(null);
  }
  function R(M, ce, ge, $e, ht) {
    {
      var Et = Function.call.bind(vt);
      for (var Ge in M)
        if (Et(M, Ge)) {
          var ut = void 0;
          try {
            if (typeof M[Ge] != 'function') {
              var hn = Error(
                ($e || 'React class') +
                  ': ' +
                  ge +
                  ' type `' +
                  Ge +
                  '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                  typeof M[Ge] +
                  '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
              );
              throw ((hn.name = 'Invariant Violation'), hn);
            }
            ut = M[Ge](
              ce,
              Ge,
              $e,
              ge,
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
              $e || 'React class',
              ge,
              Ge,
              typeof ut
            ),
            ln(null)),
            ut instanceof Error &&
              !(ut.message in Ye) &&
              ((Ye[ut.message] = !0),
              ln(ht),
              _('Failed %s type: %s', ge, ut.message),
              ln(null)));
        }
    }
  }
  var V = Array.isArray;
  function W(M) {
    return V(M);
  }
  function me(M) {
    {
      var ce = typeof Symbol == 'function' && Symbol.toStringTag,
        ge = (ce && M[Symbol.toStringTag]) || M.constructor.name || 'Object';
      return ge;
    }
  }
  function X(M) {
    try {
      return (ee(M), !1);
    } catch {
      return !0;
    }
  }
  function ee(M) {
    return '' + M;
  }
  function De(M) {
    if (X(M))
      return (
        _(
          'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
          me(M)
        ),
        ee(M)
      );
  }
  var Be = L.ReactCurrentOwner,
    Ze = { key: !0, ref: !0, __self: !0, __source: !0 },
    tn,
    or,
    Se;
  Se = {};
  function Fe(M) {
    if (vt.call(M, 'ref')) {
      var ce = Object.getOwnPropertyDescriptor(M, 'ref').get;
      if (ce && ce.isReactWarning) return !1;
    }
    return M.ref !== void 0;
  }
  function ot(M) {
    if (vt.call(M, 'key')) {
      var ce = Object.getOwnPropertyDescriptor(M, 'key').get;
      if (ce && ce.isReactWarning) return !1;
    }
    return M.key !== void 0;
  }
  function Tt(M, ce) {
    if (
      typeof M.ref == 'string' &&
      Be.current &&
      ce &&
      Be.current.stateNode !== ce
    ) {
      var ge = q(Be.current.type);
      Se[ge] ||
        (_(
          'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
          q(Be.current.type),
          M.ref
        ),
        (Se[ge] = !0));
    }
  }
  function At(M, ce) {
    {
      var ge = function () {
        tn ||
          ((tn = !0),
          _(
            '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
            ce
          ));
      };
      ((ge.isReactWarning = !0),
        Object.defineProperty(M, 'key', { get: ge, configurable: !0 }));
    }
  }
  function nn(M, ce) {
    {
      var ge = function () {
        or ||
          ((or = !0),
          _(
            '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
            ce
          ));
      };
      ((ge.isReactWarning = !0),
        Object.defineProperty(M, 'ref', { get: ge, configurable: !0 }));
    }
  }
  var Kt = function (M, ce, ge, $e, ht, Et, Ge) {
    var ut = { $$typeof: i, type: M, key: ce, ref: ge, props: Ge, _owner: Et };
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
        value: $e,
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
  function Ln(M, ce, ge, $e, ht) {
    {
      var Et,
        Ge = {},
        ut = null,
        hn = null;
      (ge !== void 0 && (De(ge), (ut = '' + ge)),
        ot(ce) && (De(ce.key), (ut = '' + ce.key)),
        Fe(ce) && ((hn = ce.ref), Tt(ce, ht)));
      for (Et in ce)
        vt.call(ce, Et) && !Ze.hasOwnProperty(Et) && (Ge[Et] = ce[Et]);
      if (M && M.defaultProps) {
        var Bt = M.defaultProps;
        for (Et in Bt) Ge[Et] === void 0 && (Ge[Et] = Bt[Et]);
      }
      if (ut || hn) {
        var Xt =
          typeof M == 'function' ? M.displayName || M.name || 'Unknown' : M;
        (ut && At(Ge, Xt), hn && nn(Ge, Xt));
      }
      return Kt(M, ut, hn, ht, $e, Be.current, Ge);
    }
  }
  var Ut = L.ReactCurrentOwner,
    hr = L.ReactDebugCurrentFrame;
  function $t(M) {
    if (M) {
      var ce = M._owner,
        ge = He(M.type, M._source, ce ? ce.type : null);
      hr.setExtraStackFrame(ge);
    } else hr.setExtraStackFrame(null);
  }
  var Yt;
  Yt = !1;
  function ra(M) {
    return typeof M == 'object' && M !== null && M.$$typeof === i;
  }
  function Ur() {
    {
      if (Ut.current) {
        var M = q(Ut.current.type);
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
  function ji(M) {
    {
      if (M !== void 0) {
        var ce = M.fileName.replace(/^.*[\\\/]/, ''),
          ge = M.lineNumber;
        return (
          `

Check your code at ` +
          ce +
          ':' +
          ge +
          '.'
        );
      }
      return '';
    }
  }
  var Ao = {};
  function Vl(M) {
    {
      var ce = Ur();
      if (!ce) {
        var ge = typeof M == 'string' ? M : M.displayName || M.name;
        ge &&
          (ce =
            `

Check the top-level render call using <` +
            ge +
            '>.');
      }
      return ce;
    }
  }
  function $i(M, ce) {
    {
      if (!M._store || M._store.validated || M.key != null) return;
      M._store.validated = !0;
      var ge = Vl(ce);
      if (Ao[ge]) return;
      Ao[ge] = !0;
      var $e = '';
      (M &&
        M._owner &&
        M._owner !== Ut.current &&
        ($e = ' It was passed a child from ' + q(M._owner.type) + '.'),
        $t(M),
        _(
          'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
          ge,
          $e
        ),
        $t(null));
    }
  }
  function Yi(M, ce) {
    {
      if (typeof M != 'object') return;
      if (W(M))
        for (var ge = 0; ge < M.length; ge++) {
          var $e = M[ge];
          ra($e) && $i($e, ce);
        }
      else if (ra(M)) M._store && (M._store.validated = !0);
      else if (M) {
        var ht = P(M);
        if (typeof ht == 'function' && ht !== M.entries)
          for (var Et = ht.call(M), Ge; !(Ge = Et.next()).done; )
            ra(Ge.value) && $i(Ge.value, ce);
      }
    }
  }
  function xa(M) {
    {
      var ce = M.type;
      if (ce == null || typeof ce == 'string') return;
      var ge;
      if (typeof ce == 'function') ge = ce.propTypes;
      else if (
        typeof ce == 'object' &&
        (ce.$$typeof === m || ce.$$typeof === S)
      )
        ge = ce.propTypes;
      else return;
      if (ge) {
        var $e = q(ce);
        R(ge, M.props, 'prop', $e, M);
      } else if (ce.PropTypes !== void 0 && !Yt) {
        Yt = !0;
        var ht = q(ce);
        _(
          'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
          ht || 'Unknown'
        );
      }
      typeof ce.getDefaultProps == 'function' &&
        !ce.getDefaultProps.isReactClassApproved &&
        _(
          'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.'
        );
    }
  }
  function ri(M) {
    {
      for (var ce = Object.keys(M.props), ge = 0; ge < ce.length; ge++) {
        var $e = ce[ge];
        if ($e !== 'children' && $e !== 'key') {
          ($t(M),
            _(
              'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
              $e
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
  var Ra = {};
  function Fr(M, ce, ge, $e, ht, Et) {
    {
      var Ge = ae(M);
      if (!Ge) {
        var ut = '';
        (M === void 0 ||
          (typeof M == 'object' &&
            M !== null &&
            Object.keys(M).length === 0)) &&
          (ut +=
            " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
        var hn = ji(ht);
        hn ? (ut += hn) : (ut += Ur());
        var Bt;
        (M === null
          ? (Bt = 'null')
          : W(M)
            ? (Bt = 'array')
            : M !== void 0 && M.$$typeof === i
              ? ((Bt = '<' + (q(M.type) || 'Unknown') + ' />'),
                (ut =
                  ' Did you accidentally export a JSX literal instead of a component?'))
              : (Bt = typeof M),
          _(
            'React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
            Bt,
            ut
          ));
      }
      var Xt = Ln(M, ce, ge, ht, Et);
      if (Xt == null) return Xt;
      if (Ge) {
        var jn = ce.children;
        if (jn !== void 0)
          if ($e)
            if (W(jn)) {
              for (var ia = 0; ia < jn.length; ia++) Yi(jn[ia], M);
              Object.freeze && Object.freeze(jn);
            } else
              _(
                'React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.'
              );
          else Yi(jn, M);
      }
      if (vt.call(ce, 'key')) {
        var Dr = q(M),
          xn = Object.keys(ce).filter(function (_a) {
            return _a !== 'key';
          }),
          mr =
            xn.length > 0
              ? '{key: someKey, ' + xn.join(': ..., ') + ': ...}'
              : '{key: someKey}';
        if (!Ra[Dr + mr]) {
          var ct = xn.length > 0 ? '{' + xn.join(': ..., ') + ': ...}' : '{}';
          (_(
            `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
            mr,
            Dr,
            ct,
            Dr
          ),
            (Ra[Dr + mr] = !0));
        }
      }
      return (M === s ? ri(Xt) : xa(Xt), Xt);
    }
  }
  function Vr(M, ce, ge) {
    return Fr(M, ce, ge, !0);
  }
  function aa(M, ce, ge) {
    return Fr(M, ce, ge, !1);
  }
  var Gi = aa,
    ai = Vr;
  ((pd.Fragment = s), (pd.jsx = Gi), (pd.jsxs = ai));
})();
Rw.exports = pd;
var Dw = Rw.exports;
const Me = Dw.jsx,
  Bn = Dw.jsxs;
var Ow = { exports: {} },
  Rr = {},
  Aw = { exports: {} },
  Mw = {};
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
    function c(Se, Fe) {
      var ot = Se.length;
      (Se.push(Fe), h(Se, Fe, ot));
    }
    function f(Se) {
      return Se.length === 0 ? null : Se[0];
    }
    function d(Se) {
      if (Se.length === 0) return null;
      var Fe = Se[0],
        ot = Se.pop();
      return (ot !== Fe && ((Se[0] = ot), m(Se, ot, 0)), Fe);
    }
    function h(Se, Fe, ot) {
      for (var Tt = ot; Tt > 0; ) {
        var At = (Tt - 1) >>> 1,
          nn = Se[At];
        if (g(nn, Fe) > 0) ((Se[At] = Fe), (Se[Tt] = nn), (Tt = At));
        else return;
      }
    }
    function m(Se, Fe, ot) {
      for (var Tt = ot, At = Se.length, nn = At >>> 1; Tt < nn; ) {
        var Kt = (Tt + 1) * 2 - 1,
          Ln = Se[Kt],
          Ut = Kt + 1,
          hr = Se[Ut];
        if (g(Ln, Fe) < 0)
          Ut < At && g(hr, Ln) < 0
            ? ((Se[Tt] = hr), (Se[Ut] = Fe), (Tt = Ut))
            : ((Se[Tt] = Ln), (Se[Kt] = Fe), (Tt = Kt));
        else if (Ut < At && g(hr, Fe) < 0)
          ((Se[Tt] = hr), (Se[Ut] = Fe), (Tt = Ut));
        else return;
      }
    }
    function g(Se, Fe) {
      var ot = Se.sortIndex - Fe.sortIndex;
      return ot !== 0 ? ot : Se.id - Fe.id;
    }
    var E = 1,
      S = 2,
      T = 3,
      D = 4,
      O = 5;
    function x(Se, Fe) {}
    var P =
      typeof performance == 'object' && typeof performance.now == 'function';
    if (P) {
      var L = performance;
      r.unstable_now = function () {
        return L.now();
      };
    } else {
      var _ = Date,
        z = _.now();
      r.unstable_now = function () {
        return _.now() - z;
      };
    }
    var U = 1073741823,
      F = -1,
      se = 250,
      ie = 5e3,
      de = 1e4,
      re = U,
      ae = [],
      ue = [],
      B = 1,
      q = null,
      ne = T,
      pe = !1,
      le = !1,
      ve = !1,
      Ne = typeof setTimeout == 'function' ? setTimeout : null,
      Le = typeof clearTimeout == 'function' ? clearTimeout : null,
      ft = typeof setImmediate < 'u' ? setImmediate : null;
    typeof navigator < 'u' &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function qt(Se) {
      for (var Fe = f(ue); Fe !== null; ) {
        if (Fe.callback === null) d(ue);
        else if (Fe.startTime <= Se)
          (d(ue), (Fe.sortIndex = Fe.expirationTime), c(ae, Fe));
        else return;
        Fe = f(ue);
      }
    }
    function Ce(Se) {
      if (((ve = !1), qt(Se), !le))
        if (f(ae) !== null) ((le = !0), De(Ee));
        else {
          var Fe = f(ue);
          Fe !== null && Be(Ce, Fe.startTime - Se);
        }
    }
    function Ee(Se, Fe) {
      ((le = !1), ve && ((ve = !1), Ze()), (pe = !0));
      var ot = ne;
      try {
        var Tt;
        if (!o) return Te(Se, Fe);
      } finally {
        ((q = null), (ne = ot), (pe = !1));
      }
    }
    function Te(Se, Fe) {
      var ot = Fe;
      for (
        qt(ot), q = f(ae);
        q !== null && !i && !(q.expirationTime > ot && (!Se || ln()));

      ) {
        var Tt = q.callback;
        if (typeof Tt == 'function') {
          ((q.callback = null), (ne = q.priorityLevel));
          var At = q.expirationTime <= ot,
            nn = Tt(At);
          ((ot = r.unstable_now()),
            typeof nn == 'function' ? (q.callback = nn) : q === f(ae) && d(ae),
            qt(ot));
        } else d(ae);
        q = f(ae);
      }
      if (q !== null) return !0;
      var Kt = f(ue);
      return (Kt !== null && Be(Ce, Kt.startTime - ot), !1);
    }
    function Ve(Se, Fe) {
      switch (Se) {
        case E:
        case S:
        case T:
        case D:
        case O:
          break;
        default:
          Se = T;
      }
      var ot = ne;
      ne = Se;
      try {
        return Fe();
      } finally {
        ne = ot;
      }
    }
    function $(Se) {
      var Fe;
      switch (ne) {
        case E:
        case S:
        case T:
          Fe = T;
          break;
        default:
          Fe = ne;
          break;
      }
      var ot = ne;
      ne = Fe;
      try {
        return Se();
      } finally {
        ne = ot;
      }
    }
    function Ke(Se) {
      var Fe = ne;
      return function () {
        var ot = ne;
        ne = Fe;
        try {
          return Se.apply(this, arguments);
        } finally {
          ne = ot;
        }
      };
    }
    function ye(Se, Fe, ot) {
      var Tt = r.unstable_now(),
        At;
      if (typeof ot == 'object' && ot !== null) {
        var nn = ot.delay;
        typeof nn == 'number' && nn > 0 ? (At = Tt + nn) : (At = Tt);
      } else At = Tt;
      var Kt;
      switch (Se) {
        case E:
          Kt = F;
          break;
        case S:
          Kt = se;
          break;
        case O:
          Kt = re;
          break;
        case D:
          Kt = de;
          break;
        case T:
        default:
          Kt = ie;
          break;
      }
      var Ln = At + Kt,
        Ut = {
          id: B++,
          callback: Fe,
          priorityLevel: Se,
          startTime: At,
          expirationTime: Ln,
          sortIndex: -1,
        };
      return (
        At > Tt
          ? ((Ut.sortIndex = At),
            c(ue, Ut),
            f(ae) === null &&
              Ut === f(ue) &&
              (ve ? Ze() : (ve = !0), Be(Ce, At - Tt)))
          : ((Ut.sortIndex = Ln), c(ae, Ut), !le && !pe && ((le = !0), De(Ee))),
        Ut
      );
    }
    function at() {}
    function qe() {
      !le && !pe && ((le = !0), De(Ee));
    }
    function Je() {
      return f(ae);
    }
    function oe(Se) {
      Se.callback = null;
    }
    function it() {
      return ne;
    }
    var dt = !1,
      He = null,
      vt = -1,
      Ye = s,
      Ot = -1;
    function ln() {
      var Se = r.unstable_now() - Ot;
      return !(Se < Ye);
    }
    function R() {}
    function V(Se) {
      if (Se < 0 || Se > 125) {
        console.error(
          'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
        );
        return;
      }
      Se > 0 ? (Ye = Math.floor(1e3 / Se)) : (Ye = s);
    }
    var W = function () {
        if (He !== null) {
          var Se = r.unstable_now();
          Ot = Se;
          var Fe = !0,
            ot = !0;
          try {
            ot = He(Fe, Se);
          } finally {
            ot ? me() : ((dt = !1), (He = null));
          }
        } else dt = !1;
      },
      me;
    if (typeof ft == 'function')
      me = function () {
        ft(W);
      };
    else if (typeof MessageChannel < 'u') {
      var X = new MessageChannel(),
        ee = X.port2;
      ((X.port1.onmessage = W),
        (me = function () {
          ee.postMessage(null);
        }));
    } else
      me = function () {
        Ne(W, 0);
      };
    function De(Se) {
      ((He = Se), dt || ((dt = !0), me()));
    }
    function Be(Se, Fe) {
      vt = Ne(function () {
        Se(r.unstable_now());
      }, Fe);
    }
    function Ze() {
      (Le(vt), (vt = -1));
    }
    var tn = R,
      or = null;
    ((r.unstable_IdlePriority = O),
      (r.unstable_ImmediatePriority = E),
      (r.unstable_LowPriority = D),
      (r.unstable_NormalPriority = T),
      (r.unstable_Profiling = or),
      (r.unstable_UserBlockingPriority = S),
      (r.unstable_cancelCallback = oe),
      (r.unstable_continueExecution = qe),
      (r.unstable_forceFrameRate = V),
      (r.unstable_getCurrentPriorityLevel = it),
      (r.unstable_getFirstCallbackNode = Je),
      (r.unstable_next = $),
      (r.unstable_pauseExecution = at),
      (r.unstable_requestPaint = tn),
      (r.unstable_runWithPriority = Ve),
      (r.unstable_scheduleCallback = ye),
      (r.unstable_shouldYield = ln),
      (r.unstable_wrapCallback = Ke),
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' &&
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ==
          'function' &&
        __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error()));
  })();
})(Mw);
Aw.exports = Mw;
var GM = Aw.exports;
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
  var r = Z,
    i = GM,
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
    T = 4,
    D = 5,
    O = 6,
    x = 7,
    P = 8,
    L = 9,
    _ = 10,
    z = 11,
    U = 12,
    F = 13,
    se = 14,
    ie = 15,
    de = 16,
    re = 17,
    ae = 18,
    ue = 19,
    B = 21,
    q = 22,
    ne = 23,
    pe = 24,
    le = 25,
    ve = !0,
    Ne = !1,
    Le = !1,
    ft = !1,
    qt = !1,
    Ce = !0,
    Ee = !1,
    Te = !0,
    Ve = !0,
    $ = !0,
    Ke = !0,
    ye = new Set(),
    at = {},
    qe = {};
  function Je(e, t) {
    (oe(e, t), oe(e + 'Capture', t));
  }
  function oe(e, t) {
    (at[e] &&
      d(
        'EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.',
        e
      ),
      (at[e] = t));
    {
      var n = e.toLowerCase();
      ((qe[n] = e), e === 'onDoubleClick' && (qe.ondblclick = e));
    }
    for (var a = 0; a < t.length; a++) ye.add(t[a]);
  }
  var it =
      typeof window < 'u' &&
      typeof window.document < 'u' &&
      typeof window.document.createElement < 'u',
    dt = Object.prototype.hasOwnProperty;
  function He(e) {
    {
      var t = typeof Symbol == 'function' && Symbol.toStringTag,
        n = (t && e[Symbol.toStringTag]) || e.constructor.name || 'Object';
      return n;
    }
  }
  function vt(e) {
    try {
      return (Ye(e), !1);
    } catch {
      return !0;
    }
  }
  function Ye(e) {
    return '' + e;
  }
  function Ot(e, t) {
    if (vt(e))
      return (
        d(
          'The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.',
          t,
          He(e)
        ),
        Ye(e)
      );
  }
  function ln(e) {
    if (vt(e))
      return (
        d(
          'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
          He(e)
        ),
        Ye(e)
      );
  }
  function R(e, t) {
    if (vt(e))
      return (
        d(
          'The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.',
          t,
          He(e)
        ),
        Ye(e)
      );
  }
  function V(e, t) {
    if (vt(e))
      return (
        d(
          'The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.',
          t,
          He(e)
        ),
        Ye(e)
      );
  }
  function W(e) {
    if (vt(e))
      return (
        d(
          'The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.',
          He(e)
        ),
        Ye(e)
      );
  }
  function me(e) {
    if (vt(e))
      return (
        d(
          'Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.',
          He(e)
        ),
        Ye(e)
      );
  }
  var X = 0,
    ee = 1,
    De = 2,
    Be = 3,
    Ze = 4,
    tn = 5,
    or = 6,
    Se =
      ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD',
    Fe = Se + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040',
    ot = new RegExp('^[' + Se + '][' + Fe + ']*$'),
    Tt = {},
    At = {};
  function nn(e) {
    return dt.call(At, e)
      ? !0
      : dt.call(Tt, e)
        ? !1
        : ot.test(e)
          ? ((At[e] = !0), !0)
          : ((Tt[e] = !0), d('Invalid attribute name: `%s`', e), !1);
  }
  function Kt(e, t, n) {
    return t !== null
      ? t.type === X
      : n
        ? !1
        : e.length > 2 &&
          (e[0] === 'o' || e[0] === 'O') &&
          (e[1] === 'n' || e[1] === 'N');
  }
  function Ln(e, t, n, a) {
    if (n !== null && n.type === X) return !1;
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
        case Be:
          return !t;
        case Ze:
          return t === !1;
        case tn:
          return isNaN(t);
        case or:
          return isNaN(t) || t < 1;
      }
    return !1;
  }
  function hr(e) {
    return Yt.hasOwnProperty(e) ? Yt[e] : null;
  }
  function $t(e, t, n, a, l, u, p) {
    ((this.acceptsBooleans = t === De || t === Be || t === Ze),
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
    Yt[e] = new $t(e, X, !1, e, null, !1, !1);
  }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0],
        n = e[1];
      Yt[t] = new $t(t, ee, !1, n, null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(
      function (e) {
        Yt[e] = new $t(e, De, !1, e.toLowerCase(), null, !1, !1);
      }
    ),
    [
      'autoReverse',
      'externalResourcesRequired',
      'focusable',
      'preserveAlpha',
    ].forEach(function (e) {
      Yt[e] = new $t(e, De, !1, e, null, !1, !1);
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
      Yt[e] = new $t(e, Be, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      Yt[e] = new $t(e, Be, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
      Yt[e] = new $t(e, Ze, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      Yt[e] = new $t(e, or, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      Yt[e] = new $t(e, tn, !1, e.toLowerCase(), null, !1, !1);
    }));
  var Ur = /[\-\:]([a-z])/g,
    ji = function (e) {
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
    var t = e.replace(Ur, ji);
    Yt[t] = new $t(t, ee, !1, e, null, !1, !1);
  }),
    [
      'xlink:actuate',
      'xlink:arcrole',
      'xlink:role',
      'xlink:show',
      'xlink:title',
      'xlink:type',
    ].forEach(function (e) {
      var t = e.replace(Ur, ji);
      Yt[t] = new $t(t, ee, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
    }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(Ur, ji);
      Yt[t] = new $t(
        t,
        ee,
        !1,
        e,
        'http://www.w3.org/XML/1998/namespace',
        !1,
        !1
      );
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      Yt[e] = new $t(e, ee, !1, e.toLowerCase(), null, !1, !1);
    }));
  var Ao = 'xlinkHref';
  ((Yt[Ao] = new $t(
    'xlinkHref',
    ee,
    !1,
    'xlink:href',
    'http://www.w3.org/1999/xlink',
    !0,
    !1
  )),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      Yt[e] = new $t(e, ee, !1, e.toLowerCase(), null, !0, !0);
    }));
  var Vl =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i,
    $i = !1;
  function Yi(e) {
    !$i &&
      Vl.test(e) &&
      (($i = !0),
      d(
        'A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.',
        JSON.stringify(e)
      ));
  }
  function xa(e, t, n, a) {
    if (a.mustUseProperty) {
      var l = a.propertyName;
      return e[l];
    } else {
      (Ot(n, t), a.sanitizeURL && Yi('' + n));
      var u = a.attributeName,
        p = null;
      if (a.type === Ze) {
        if (e.hasAttribute(u)) {
          var v = e.getAttribute(u);
          return v === '' ? !0 : Ut(t, n, a, !1) ? v : v === '' + n ? n : v;
        }
      } else if (e.hasAttribute(u)) {
        if (Ut(t, n, a, !1)) return e.getAttribute(u);
        if (a.type === Be) return n;
        p = e.getAttribute(u);
      }
      return Ut(t, n, a, !1) ? (p === null ? n : p) : p === '' + n ? n : p;
    }
  }
  function ri(e, t, n, a) {
    {
      if (!nn(t)) return;
      if (!e.hasAttribute(t)) return n === void 0 ? void 0 : null;
      var l = e.getAttribute(t);
      return (Ot(n, t), l === '' + n ? n : l);
    }
  }
  function Ra(e, t, n, a) {
    var l = hr(t);
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
          e[v] = y === Be ? !1 : '';
        } else e[v] = n;
        return;
      }
      var C = l.attributeName,
        w = l.attributeNamespace;
      if (n === null) e.removeAttribute(C);
      else {
        var N = l.type,
          k;
        (N === Be || (N === Ze && n === !0)
          ? (k = '')
          : (Ot(n, C), (k = '' + n), l.sanitizeURL && Yi(k.toString())),
          w ? e.setAttributeNS(w, C, k) : e.setAttribute(C, k));
      }
    }
  }
  var Fr = Symbol.for('react.element'),
    Vr = Symbol.for('react.portal'),
    aa = Symbol.for('react.fragment'),
    Gi = Symbol.for('react.strict_mode'),
    ai = Symbol.for('react.profiler'),
    M = Symbol.for('react.provider'),
    ce = Symbol.for('react.context'),
    ge = Symbol.for('react.forward_ref'),
    $e = Symbol.for('react.suspense'),
    ht = Symbol.for('react.suspense_list'),
    Et = Symbol.for('react.memo'),
    Ge = Symbol.for('react.lazy'),
    ut = Symbol.for('react.scope'),
    hn = Symbol.for('react.debug_trace_mode'),
    Bt = Symbol.for('react.offscreen'),
    Xt = Symbol.for('react.legacy_hidden'),
    jn = Symbol.for('react.cache'),
    ia = Symbol.for('react.tracing_marker'),
    Dr = Symbol.iterator,
    xn = '@@iterator';
  function mr(e) {
    if (e === null || typeof e != 'object') return null;
    var t = (Dr && e[Dr]) || e[xn];
    return typeof t == 'function' ? t : null;
  }
  var ct = Object.assign,
    _a = 0,
    ii,
    Hl,
    Il,
    Bl,
    jl,
    $l,
    Yl;
  function Gl() {}
  Gl.__reactDisabledLog = !0;
  function Wu() {
    {
      if (_a === 0) {
        ((ii = console.log),
          (Hl = console.info),
          (Il = console.warn),
          (Bl = console.error),
          (jl = console.group),
          ($l = console.groupCollapsed),
          (Yl = console.groupEnd));
        var e = { configurable: !0, enumerable: !0, value: Gl, writable: !0 };
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
      _a++;
    }
  }
  function kd() {
    {
      if ((_a--, _a === 0)) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: ct({}, e, { value: ii }),
          info: ct({}, e, { value: Hl }),
          warn: ct({}, e, { value: Il }),
          error: ct({}, e, { value: Bl }),
          group: ct({}, e, { value: jl }),
          groupCollapsed: ct({}, e, { value: $l }),
          groupEnd: ct({}, e, { value: Yl }),
        });
      }
      _a < 0 &&
        d(
          'disabledDepth fell below zero. This is a bug in React. Please file an issue.'
        );
    }
  }
  var Wl = o.ReactCurrentDispatcher,
    Wi;
  function Or(e, t, n) {
    {
      if (Wi === void 0)
        try {
          throw Error();
        } catch (l) {
          var a = l.stack.trim().match(/\n( *(at )?)/);
          Wi = (a && a[1]) || '';
        }
      return (
        `
` +
        Wi +
        e
      );
    }
  }
  var oi = !1,
    li;
  {
    var Mo = typeof WeakMap == 'function' ? WeakMap : Map;
    li = new Mo();
  }
  function ql(e, t) {
    if (!e || oi) return '';
    {
      var n = li.get(e);
      if (n !== void 0) return n;
    }
    var a;
    oi = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    var u;
    ((u = Wl.current), (Wl.current = null), Wu());
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
          } catch (G) {
            a = G;
          }
          Reflect.construct(e, [], p);
        } else {
          try {
            p.call();
          } catch (G) {
            a = G;
          }
          e.call(p.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (G) {
          a = G;
        }
        e();
      }
    } catch (G) {
      if (G && a && typeof G.stack == 'string') {
        for (
          var v = G.stack.split(`
`),
            y = a.stack.split(`
`),
            C = v.length - 1,
            w = y.length - 1;
          C >= 1 && w >= 0 && v[C] !== y[w];

        )
          w--;
        for (; C >= 1 && w >= 0; C--, w--)
          if (v[C] !== y[w]) {
            if (C !== 1 || w !== 1)
              do
                if ((C--, w--, w < 0 || v[C] !== y[w])) {
                  var N =
                    `
` + v[C].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      N.includes('<anonymous>') &&
                      (N = N.replace('<anonymous>', e.displayName)),
                    typeof e == 'function' && li.set(e, N),
                    N
                  );
                }
              while (C >= 1 && w >= 0);
            break;
          }
      }
    } finally {
      ((oi = !1), (Wl.current = u), kd(), (Error.prepareStackTrace = l));
    }
    var k = e ? e.displayName || e.name : '',
      j = k ? Or(k) : '';
    return (typeof e == 'function' && li.set(e, j), j);
  }
  function qu(e, t, n) {
    return ql(e, !0);
  }
  function Xl(e, t, n) {
    return ql(e, !1);
  }
  function Nd(e) {
    var t = e.prototype;
    return !!(t && t.isReactComponent);
  }
  function si(e, t, n) {
    if (e == null) return '';
    if (typeof e == 'function') return ql(e, Nd(e));
    if (typeof e == 'string') return Or(e);
    switch (e) {
      case $e:
        return Or('Suspense');
      case ht:
        return Or('SuspenseList');
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case ge:
          return Xl(e.render);
        case Et:
          return si(e.type, t, n);
        case Ge: {
          var a = e,
            l = a._payload,
            u = a._init;
          try {
            return si(u(l), t, n);
          } catch {}
        }
      }
    return '';
  }
  function Xu(e) {
    switch ((e._debugOwner && e._debugOwner.type, e._debugSource, e.tag)) {
      case D:
        return Or(e.type);
      case de:
        return Or('Lazy');
      case F:
        return Or('Suspense');
      case ue:
        return Or('SuspenseList');
      case m:
      case E:
      case ie:
        return Xl(e.type);
      case z:
        return Xl(e.type.render);
      case g:
        return qu(e.type);
      default:
        return '';
    }
  }
  function Ql(e) {
    try {
      var t = '',
        n = e;
      do ((t += Xu(n)), (n = n.return));
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
  function Lo(e, t, n) {
    var a = e.displayName;
    if (a) return a;
    var l = t.displayName || t.name || '';
    return l !== '' ? n + '(' + l + ')' : n;
  }
  function Qu(e) {
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
      case ai:
        return 'Profiler';
      case Gi:
        return 'StrictMode';
      case $e:
        return 'Suspense';
      case ht:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case ce:
          var t = e;
          return Qu(t) + '.Consumer';
        case M:
          var n = e;
          return Qu(n._context) + '.Provider';
        case ge:
          return Lo(e, e.render, 'ForwardRef');
        case Et:
          var a = e.displayName || null;
          return a !== null ? a : Ct(e.type) || 'Memo';
        case Ge: {
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
  function Kl(e, t, n) {
    var a = t.displayName || t.name || '';
    return e.displayName || (a !== '' ? n + '(' + a + ')' : n);
  }
  function Jl(e) {
    return e.displayName || 'Context';
  }
  function lt(e) {
    var t = e.tag,
      n = e.type;
    switch (t) {
      case pe:
        return 'Cache';
      case L:
        var a = n;
        return Jl(a) + '.Consumer';
      case _:
        var l = n;
        return Jl(l._context) + '.Provider';
      case ae:
        return 'DehydratedFragment';
      case z:
        return Kl(n, n.render, 'ForwardRef');
      case x:
        return 'Fragment';
      case D:
        return n;
      case T:
        return 'Portal';
      case S:
        return 'Root';
      case O:
        return 'Text';
      case de:
        return Ct(n);
      case P:
        return n === Gi ? 'StrictMode' : 'Mode';
      case q:
        return 'Offscreen';
      case U:
        return 'Profiler';
      case B:
        return 'Scope';
      case F:
        return 'Suspense';
      case ue:
        return 'SuspenseList';
      case le:
        return 'TracingMarker';
      case g:
      case m:
      case re:
      case E:
      case se:
      case ie:
        if (typeof n == 'function') return n.displayName || n.name || null;
        if (typeof n == 'string') return n;
        break;
    }
    return null;
  }
  var Ku = o.ReactDebugCurrentFrame,
    $n = null,
    qi = !1;
  function ui() {
    {
      if ($n === null) return null;
      var e = $n._debugOwner;
      if (e !== null && typeof e < 'u') return lt(e);
    }
    return null;
  }
  function Ju() {
    return $n === null ? '' : Ql($n);
  }
  function Rn() {
    ((Ku.getCurrentStack = null), ($n = null), (qi = !1));
  }
  function Jt(e) {
    ((Ku.getCurrentStack = e === null ? null : Ju), ($n = e), (qi = !1));
  }
  function Zu() {
    return $n;
  }
  function yr(e) {
    qi = e;
  }
  function lr(e) {
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
        return (me(e), e);
      default:
        return '';
    }
  }
  var Pd = {
    button: !0,
    checkbox: !0,
    image: !0,
    hidden: !0,
    radio: !0,
    reset: !0,
    submit: !0,
  };
  function ko(e, t) {
    (Pd[t.type] ||
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
  function Xi(e) {
    var t = e.type,
      n = e.nodeName;
    return (
      n && n.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio')
    );
  }
  function ec(e) {
    return e._valueTracker;
  }
  function ci(e) {
    e._valueTracker = null;
  }
  function tc(e) {
    var t = '';
    return (
      e && (Xi(e) ? (t = e.checked ? 'true' : 'false') : (t = e.value)),
      t
    );
  }
  function nc(e) {
    var t = Xi(e) ? 'checked' : 'value',
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    me(e[t]);
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
          (me(v), (a = '' + v), u.call(this, v));
        },
      }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }));
      var p = {
        getValue: function () {
          return a;
        },
        setValue: function (v) {
          (me(v), (a = '' + v));
        },
        stopTracking: function () {
          (ci(e), delete e[t]);
        },
      };
      return p;
    }
  }
  function Da(e) {
    ec(e) || (e._valueTracker = nc(e));
  }
  function No(e) {
    if (!e) return !1;
    var t = ec(e);
    if (!t) return !0;
    var n = t.getValue(),
      a = tc(e);
    return a !== n ? (t.setValue(a), !0) : !1;
  }
  function fi(e) {
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
  var Po = !1,
    rc = !1,
    ac = !1,
    ic = !1;
  function oc(e) {
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
    (ko('input', t),
      t.checked !== void 0 &&
        t.defaultChecked !== void 0 &&
        !rc &&
        (d(
          '%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components',
          ui() || 'A component',
          t.type
        ),
        (rc = !0)),
      t.value !== void 0 &&
        t.defaultValue !== void 0 &&
        !Po &&
        (d(
          '%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components',
          ui() || 'A component',
          t.type
        ),
        (Po = !0)));
    var n = e,
      a = t.defaultValue == null ? '' : t.defaultValue;
    n._wrapperState = {
      initialChecked: t.checked != null ? t.checked : t.defaultChecked,
      initialValue: oa(t.value != null ? t.value : a),
      controlled: oc(t),
    };
  }
  function Y(e, t) {
    var n = e,
      a = t.checked;
    a != null && Ra(n, 'checked', a, !1);
  }
  function Q(e, t) {
    var n = e;
    {
      var a = oc(t);
      (!n._wrapperState.controlled &&
        a &&
        !ic &&
        (d(
          'A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components'
        ),
        (ic = !0)),
        n._wrapperState.controlled &&
          !a &&
          !ac &&
          (d(
            'A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components'
          ),
          (ac = !0)));
    }
    Y(e, t);
    var l = oa(t.value),
      u = t.type;
    if (l != null)
      u === 'number'
        ? ((l === 0 && n.value === '') || n.value != l) && (n.value = lr(l))
        : n.value !== lr(l) && (n.value = lr(l));
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
  function be(e, t, n) {
    var a = e;
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
      var l = t.type,
        u = l === 'submit' || l === 'reset';
      if (u && (t.value === void 0 || t.value === null)) return;
      var p = lr(a._wrapperState.initialValue);
      (n || (p !== a.value && (a.value = p)), (a.defaultValue = p));
    }
    var v = a.name;
    (v !== '' && (a.name = ''),
      (a.defaultChecked = !a.defaultChecked),
      (a.defaultChecked = !!a._wrapperState.initialChecked),
      v !== '' && (a.name = v));
  }
  function Xe(e, t) {
    var n = e;
    (Q(n, t), Pe(n, t));
  }
  function Pe(e, t) {
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
          var v = Gc(p);
          if (!v)
            throw new Error(
              'ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.'
            );
          (No(p), Q(p, v));
        }
      }
    }
  }
  function et(e, t, n) {
    (t !== 'number' || fi(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = lr(e._wrapperState.initialValue))
        : e.defaultValue !== lr(n) && (e.defaultValue = lr(n)));
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
    t.value != null && e.setAttribute('value', lr(oa(t.value)));
  }
  var rn = Array.isArray;
  function _t(e) {
    return rn(e);
  }
  var di;
  di = !1;
  function zo() {
    var e = ui();
    return e
      ? `

Check the render method of \`` +
          e +
          '`.'
      : '';
  }
  var Zl = ['value', 'defaultValue'];
  function zd(e) {
    {
      ko('select', e);
      for (var t = 0; t < Zl.length; t++) {
        var n = Zl[t];
        if (e[n] != null) {
          var a = _t(e[n]);
          e.multiple && !a
            ? d(
                'The `%s` prop supplied to <select> must be an array if `multiple` is true.%s',
                n,
                zo()
              )
            : !e.multiple &&
              a &&
              d(
                'The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s',
                n,
                zo()
              );
        }
      }
    }
  }
  function Oa(e, t, n, a) {
    var l = e.options;
    if (t) {
      for (var u = n, p = {}, v = 0; v < u.length; v++) p['$' + u[v]] = !0;
      for (var y = 0; y < l.length; y++) {
        var C = p.hasOwnProperty('$' + l[y].value);
        (l[y].selected !== C && (l[y].selected = C),
          C && a && (l[y].defaultSelected = !0));
      }
    } else {
      for (var w = lr(oa(n)), N = null, k = 0; k < l.length; k++) {
        if (l[k].value === w) {
          ((l[k].selected = !0), a && (l[k].defaultSelected = !0));
          return;
        }
        N === null && !l[k].disabled && (N = l[k]);
      }
      N !== null && (N.selected = !0);
    }
  }
  function es(e, t) {
    return ct({}, t, { value: void 0 });
  }
  function ts(e, t) {
    var n = e;
    (zd(t),
      (n._wrapperState = { wasMultiple: !!t.multiple }),
      t.value !== void 0 &&
        t.defaultValue !== void 0 &&
        !di &&
        (d(
          'Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components'
        ),
        (di = !0)));
  }
  function Ud(e, t) {
    var n = e;
    n.multiple = !!t.multiple;
    var a = t.value;
    a != null
      ? Oa(n, !!t.multiple, a, !1)
      : t.defaultValue != null && Oa(n, !!t.multiple, t.defaultValue, !0);
  }
  function _T(e, t) {
    var n = e,
      a = n._wrapperState.wasMultiple;
    n._wrapperState.wasMultiple = !!t.multiple;
    var l = t.value;
    l != null
      ? Oa(n, !!t.multiple, l, !1)
      : a !== !!t.multiple &&
        (t.defaultValue != null
          ? Oa(n, !!t.multiple, t.defaultValue, !0)
          : Oa(n, !!t.multiple, t.multiple ? [] : '', !1));
  }
  function DT(e, t) {
    var n = e,
      a = t.value;
    a != null && Oa(n, !!t.multiple, a, !1);
  }
  var Oy = !1;
  function Fd(e, t) {
    var n = e;
    if (t.dangerouslySetInnerHTML != null)
      throw new Error(
        '`dangerouslySetInnerHTML` does not make sense on <textarea>.'
      );
    var a = ct({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: lr(n._wrapperState.initialValue),
    });
    return a;
  }
  function Ay(e, t) {
    var n = e;
    (ko('textarea', t),
      t.value !== void 0 &&
        t.defaultValue !== void 0 &&
        !Oy &&
        (d(
          '%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components',
          ui() || 'A component'
        ),
        (Oy = !0)));
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
  function My(e, t) {
    var n = e,
      a = oa(t.value),
      l = oa(t.defaultValue);
    if (a != null) {
      var u = lr(a);
      (u !== n.value && (n.value = u),
        t.defaultValue == null && n.defaultValue !== u && (n.defaultValue = u));
    }
    l != null && (n.defaultValue = lr(l));
  }
  function Ly(e, t) {
    var n = e,
      a = n.textContent;
    a === n._wrapperState.initialValue &&
      a !== '' &&
      a !== null &&
      (n.value = a);
  }
  function OT(e, t) {
    My(e, t);
  }
  var Aa = 'http://www.w3.org/1999/xhtml',
    AT = 'http://www.w3.org/1998/Math/MathML',
    Vd = 'http://www.w3.org/2000/svg';
  function Hd(e) {
    switch (e) {
      case 'svg':
        return Vd;
      case 'math':
        return AT;
      default:
        return Aa;
    }
  }
  function Id(e, t) {
    return e == null || e === Aa
      ? Hd(t)
      : e === Vd && t === 'foreignObject'
        ? Aa
        : e;
  }
  var MT = function (e) {
      return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
        ? function (t, n, a, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, a, l);
            });
          }
        : e;
    },
    lc,
    ky = MT(function (e, t) {
      if (e.namespaceURI === Vd && !('innerHTML' in e)) {
        ((lc = lc || document.createElement('div')),
          (lc.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>'));
        for (var n = lc.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
        for (; n.firstChild; ) e.appendChild(n.firstChild);
        return;
      }
      e.innerHTML = t;
    }),
    sr = 1,
    Ma = 3,
    cn = 8,
    La = 9,
    Bd = 11,
    sc = function (e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === Ma) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    },
    LT = {
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
    ns = {
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
  function kT(e, t) {
    return e + t.charAt(0).toUpperCase() + t.substring(1);
  }
  var NT = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(ns).forEach(function (e) {
    NT.forEach(function (t) {
      ns[kT(t, e)] = ns[e];
    });
  });
  function jd(e, t, n) {
    var a = t == null || typeof t == 'boolean' || t === '';
    return a
      ? ''
      : !n &&
          typeof t == 'number' &&
          t !== 0 &&
          !(ns.hasOwnProperty(e) && ns[e])
        ? t + 'px'
        : (V(t, e), ('' + t).trim());
  }
  var PT = /([A-Z])/g,
    zT = /^ms-/;
  function UT(e) {
    return e.replace(PT, '-$1').toLowerCase().replace(zT, '-ms-');
  }
  var Ny = function () {};
  {
    var FT = /^(?:webkit|moz|o)[A-Z]/,
      VT = /^-ms-/,
      HT = /-(.)/g,
      Py = /;\s*$/,
      Uo = {},
      $d = {},
      zy = !1,
      Uy = !1,
      IT = function (e) {
        return e.replace(HT, function (t, n) {
          return n.toUpperCase();
        });
      },
      BT = function (e) {
        (Uo.hasOwnProperty(e) && Uo[e]) ||
          ((Uo[e] = !0),
          d(
            'Unsupported style property %s. Did you mean %s?',
            e,
            IT(e.replace(VT, 'ms-'))
          ));
      },
      jT = function (e) {
        (Uo.hasOwnProperty(e) && Uo[e]) ||
          ((Uo[e] = !0),
          d(
            'Unsupported vendor-prefixed style property %s. Did you mean %s?',
            e,
            e.charAt(0).toUpperCase() + e.slice(1)
          ));
      },
      $T = function (e, t) {
        ($d.hasOwnProperty(t) && $d[t]) ||
          (($d[t] = !0),
          d(
            `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
            e,
            t.replace(Py, '')
          ));
      },
      YT = function (e, t) {
        zy ||
          ((zy = !0),
          d('`NaN` is an invalid value for the `%s` css style property.', e));
      },
      GT = function (e, t) {
        Uy ||
          ((Uy = !0),
          d(
            '`Infinity` is an invalid value for the `%s` css style property.',
            e
          ));
      };
    Ny = function (e, t) {
      (e.indexOf('-') > -1
        ? BT(e)
        : FT.test(e)
          ? jT(e)
          : Py.test(t) && $T(e, t),
        typeof t == 'number' &&
          (isNaN(t) ? YT(e, t) : isFinite(t) || GT(e, t)));
    };
  }
  var WT = Ny;
  function qT(e) {
    {
      var t = '',
        n = '';
      for (var a in e)
        if (e.hasOwnProperty(a)) {
          var l = e[a];
          if (l != null) {
            var u = a.indexOf('--') === 0;
            ((t += n + (u ? a : UT(a)) + ':'), (t += jd(a, l, u)), (n = ';'));
          }
        }
      return t || null;
    }
  }
  function Fy(e, t) {
    var n = e.style;
    for (var a in t)
      if (t.hasOwnProperty(a)) {
        var l = a.indexOf('--') === 0;
        l || WT(a, t[a]);
        var u = jd(a, t[a], l);
        (a === 'float' && (a = 'cssFloat'),
          l ? n.setProperty(a, u) : (n[a] = u));
      }
  }
  function XT(e) {
    return e == null || typeof e == 'boolean' || e === '';
  }
  function Vy(e) {
    var t = {};
    for (var n in e)
      for (var a = LT[n] || [n], l = 0; l < a.length; l++) t[a[l]] = n;
    return t;
  }
  function QT(e, t) {
    {
      if (!t) return;
      var n = Vy(e),
        a = Vy(t),
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
              XT(e[p]) ? 'Removing' : 'Updating',
              p,
              v
            ));
        }
      }
    }
  }
  var KT = {
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
    JT = ct({ menuitem: !0 }, KT),
    ZT = '__html';
  function Yd(e, t) {
    if (t) {
      if (JT[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
          !(ZT in t.dangerouslySetInnerHTML)
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
  function Qi(e, t) {
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
  var uc = {
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
    Hy = {
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
    Fo = {},
    ex = new RegExp('^(aria)-[' + Fe + ']*$'),
    tx = new RegExp('^(aria)[A-Z][' + Fe + ']*$');
  function nx(e, t) {
    {
      if (dt.call(Fo, t) && Fo[t]) return !0;
      if (tx.test(t)) {
        var n = 'aria-' + t.slice(4).toLowerCase(),
          a = Hy.hasOwnProperty(n) ? n : null;
        if (a == null)
          return (
            d(
              'Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.',
              t
            ),
            (Fo[t] = !0),
            !0
          );
        if (t !== a)
          return (
            d('Invalid ARIA attribute `%s`. Did you mean `%s`?', t, a),
            (Fo[t] = !0),
            !0
          );
      }
      if (ex.test(t)) {
        var l = t.toLowerCase(),
          u = Hy.hasOwnProperty(l) ? l : null;
        if (u == null) return ((Fo[t] = !0), !1);
        if (t !== u)
          return (
            d('Unknown ARIA attribute `%s`. Did you mean `%s`?', t, u),
            (Fo[t] = !0),
            !0
          );
      }
    }
    return !0;
  }
  function rx(e, t) {
    {
      var n = [];
      for (var a in t) {
        var l = nx(e, a);
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
  function ax(e, t) {
    Qi(e, t) || rx(e, t);
  }
  var Iy = !1;
  function ix(e, t) {
    {
      if (e !== 'input' && e !== 'textarea' && e !== 'select') return;
      t != null &&
        t.value === null &&
        !Iy &&
        ((Iy = !0),
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
  var By = function () {};
  {
    var Jn = {},
      jy = /^on./,
      ox = /^on[^A-Z]/,
      lx = new RegExp('^(aria)-[' + Fe + ']*$'),
      sx = new RegExp('^(aria)[A-Z][' + Fe + ']*$');
    By = function (e, t, n, a) {
      if (dt.call(Jn, t) && Jn[t]) return !0;
      var l = t.toLowerCase();
      if (l === 'onfocusin' || l === 'onfocusout')
        return (
          d(
            'React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React.'
          ),
          (Jn[t] = !0),
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
            (Jn[t] = !0),
            !0
          );
        if (jy.test(t))
          return (
            d('Unknown event handler property `%s`. It will be ignored.', t),
            (Jn[t] = !0),
            !0
          );
      } else if (jy.test(t))
        return (
          ox.test(t) &&
            d(
              'Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.',
              t
            ),
          (Jn[t] = !0),
          !0
        );
      if (lx.test(t) || sx.test(t)) return !0;
      if (l === 'innerhtml')
        return (
          d(
            'Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`.'
          ),
          (Jn[t] = !0),
          !0
        );
      if (l === 'aria')
        return (
          d(
            'The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead.'
          ),
          (Jn[t] = !0),
          !0
        );
      if (l === 'is' && n !== null && n !== void 0 && typeof n != 'string')
        return (
          d(
            'Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.',
            typeof n
          ),
          (Jn[t] = !0),
          !0
        );
      if (typeof n == 'number' && isNaN(n))
        return (
          d(
            'Received NaN for the `%s` attribute. If this is expected, cast the value to a string.',
            t
          ),
          (Jn[t] = !0),
          !0
        );
      var y = hr(t),
        C = y !== null && y.type === X;
      if (uc.hasOwnProperty(l)) {
        var w = uc[l];
        if (w !== t)
          return (
            d('Invalid DOM property `%s`. Did you mean `%s`?', t, w),
            (Jn[t] = !0),
            !0
          );
      } else if (!C && t !== l)
        return (
          d(
            'React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.',
            t,
            l
          ),
          (Jn[t] = !0),
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
          (Jn[t] = !0),
          !0)
        : C
          ? !0
          : Ln(t, n, y, !1)
            ? ((Jn[t] = !0), !1)
            : ((n === 'false' || n === 'true') &&
                y !== null &&
                y.type === Be &&
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
                (Jn[t] = !0)),
              !0);
    };
  }
  var ux = function (e, t, n) {
    {
      var a = [];
      for (var l in t) {
        var u = By(e, l, t[l], n);
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
  function cx(e, t, n) {
    Qi(e, t) || ux(e, t, n);
  }
  var $y = 1,
    Gd = 2,
    rs = 4,
    fx = $y | Gd | rs,
    as = null;
  function dx(e) {
    (as !== null &&
      d(
        'Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue.'
      ),
      (as = e));
  }
  function px() {
    (as === null &&
      d(
        'Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue.'
      ),
      (as = null));
  }
  function vx(e) {
    return e === as;
  }
  function Wd(e) {
    var t = e.target || e.srcElement || window;
    return (
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === Ma ? t.parentNode : t
    );
  }
  var qd = null,
    Vo = null,
    Ho = null;
  function Yy(e) {
    var t = Si(e);
    if (t) {
      if (typeof qd != 'function')
        throw new Error(
          'setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.'
        );
      var n = t.stateNode;
      if (n) {
        var a = Gc(n);
        qd(t.stateNode, t.type, a);
      }
    }
  }
  function hx(e) {
    qd = e;
  }
  function Gy(e) {
    Vo ? (Ho ? Ho.push(e) : (Ho = [e])) : (Vo = e);
  }
  function mx() {
    return Vo !== null || Ho !== null;
  }
  function Wy() {
    if (Vo) {
      var e = Vo,
        t = Ho;
      if (((Vo = null), (Ho = null), Yy(e), t))
        for (var n = 0; n < t.length; n++) Yy(t[n]);
    }
  }
  var qy = function (e, t) {
      return e(t);
    },
    Xy = function () {},
    Xd = !1;
  function yx() {
    var e = mx();
    e && (Xy(), Wy());
  }
  function Qy(e, t, n) {
    if (Xd) return e(t, n);
    Xd = !0;
    try {
      return qy(e, t, n);
    } finally {
      ((Xd = !1), yx());
    }
  }
  function gx(e, t, n) {
    ((qy = e), (Xy = n));
  }
  function bx(e) {
    return (
      e === 'button' || e === 'input' || e === 'select' || e === 'textarea'
    );
  }
  function Sx(e, t, n) {
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
        return !!(n.disabled && bx(t));
      default:
        return !1;
    }
  }
  function is(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var a = Gc(n);
    if (a === null) return null;
    var l = a[t];
    if (Sx(t, e.type, a)) return null;
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
  var Qd = !1;
  if (it)
    try {
      var os = {};
      (Object.defineProperty(os, 'passive', {
        get: function () {
          Qd = !0;
        },
      }),
        window.addEventListener('test', os, os),
        window.removeEventListener('test', os, os));
    } catch {
      Qd = !1;
    }
  function Ky(e, t, n, a, l, u, p, v, y) {
    var C = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, C);
    } catch (w) {
      this.onError(w);
    }
  }
  var Jy = Ky;
  if (
    typeof window < 'u' &&
    typeof window.dispatchEvent == 'function' &&
    typeof document < 'u' &&
    typeof document.createEvent == 'function'
  ) {
    var Kd = document.createElement('react');
    Jy = function (t, n, a, l, u, p, v, y, C) {
      if (typeof document > 'u' || document === null)
        throw new Error(
          'The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.'
        );
      var w = document.createEvent('Event'),
        N = !1,
        k = !0,
        j = window.event,
        G = Object.getOwnPropertyDescriptor(window, 'event');
      function K() {
        (Kd.removeEventListener(J, Ie, !1),
          typeof window.event < 'u' &&
            window.hasOwnProperty('event') &&
            (window.event = j));
      }
      var xe = Array.prototype.slice.call(arguments, 3);
      function Ie() {
        ((N = !0), K(), n.apply(a, xe), (k = !1));
      }
      var ze,
        bt = !1,
        pt = !1;
      function H(I) {
        if (
          ((ze = I.error),
          (bt = !0),
          ze === null && I.colno === 0 && I.lineno === 0 && (pt = !0),
          I.defaultPrevented && ze != null && typeof ze == 'object')
        )
          try {
            ze._suppressLogging = !0;
          } catch {}
      }
      var J = 'react-' + (t || 'invokeguardedcallback');
      if (
        (window.addEventListener('error', H),
        Kd.addEventListener(J, Ie, !1),
        w.initEvent(J, !1, !1),
        Kd.dispatchEvent(w),
        G && Object.defineProperty(window, 'event', G),
        N &&
          k &&
          (bt
            ? pt &&
              (ze = new Error(
                "A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information."
              ))
            : (ze = new Error(
                `An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`
              )),
          this.onError(ze)),
        window.removeEventListener('error', H),
        !N)
      )
        return (K(), Ky.apply(this, arguments));
    };
  }
  var Ex = Jy,
    Io = !1,
    cc = null,
    fc = !1,
    Jd = null,
    Cx = {
      onError: function (e) {
        ((Io = !0), (cc = e));
      },
    };
  function Zd(e, t, n, a, l, u, p, v, y) {
    ((Io = !1), (cc = null), Ex.apply(Cx, arguments));
  }
  function wx(e, t, n, a, l, u, p, v, y) {
    if ((Zd.apply(this, arguments), Io)) {
      var C = ep();
      fc || ((fc = !0), (Jd = C));
    }
  }
  function Tx() {
    if (fc) {
      var e = Jd;
      throw ((fc = !1), (Jd = null), e);
    }
  }
  function xx() {
    return Io;
  }
  function ep() {
    if (Io) {
      var e = cc;
      return ((Io = !1), (cc = null), e);
    } else
      throw new Error(
        'clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.'
      );
  }
  function Bo(e) {
    return e._reactInternals;
  }
  function Rx(e) {
    return e._reactInternals !== void 0;
  }
  function _x(e, t) {
    e._reactInternals = t;
  }
  var We = 0,
    jo = 1,
    fn = 2,
    St = 4,
    Ki = 16,
    ls = 32,
    tp = 64,
    Dt = 128,
    ka = 256,
    pi = 512,
    Ji = 1024,
    Hr = 2048,
    Na = 4096,
    Zi = 8192,
    dc = 16384,
    Dx = Hr | St | tp | pi | Ji | dc,
    Ox = 32767,
    ss = 32768,
    Zn = 65536,
    np = 131072,
    Zy = 1048576,
    rp = 2097152,
    eo = 4194304,
    ap = 8388608,
    Pa = 16777216,
    pc = 33554432,
    ip = St | Ji | 0,
    op = fn | St | Ki | ls | pi | Na | Zi,
    us = St | tp | pi | Zi,
    $o = Hr | Ki,
    za = eo | ap | rp,
    Ax = o.ReactCurrentOwner;
  function to(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      var a = t;
      do
        ((t = a),
          (t.flags & (fn | Na)) !== We && (n = t.return),
          (a = t.return));
      while (a);
    }
    return t.tag === S ? n : null;
  }
  function eg(e) {
    if (e.tag === F) {
      var t = e.memoizedState;
      if (t === null) {
        var n = e.alternate;
        n !== null && (t = n.memoizedState);
      }
      if (t !== null) return t.dehydrated;
    }
    return null;
  }
  function tg(e) {
    return e.tag === S ? e.stateNode.containerInfo : null;
  }
  function Mx(e) {
    return to(e) === e;
  }
  function Lx(e) {
    {
      var t = Ax.current;
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
    var l = Bo(e);
    return l ? to(l) === l : !1;
  }
  function ng(e) {
    if (to(e) !== e)
      throw new Error('Unable to find node on an unmounted component.');
  }
  function rg(e) {
    var t = e.alternate;
    if (!t) {
      var n = to(e);
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
          if (y === a) return (ng(u), e);
          if (y === l) return (ng(u), t);
          y = y.sibling;
        }
        throw new Error('Unable to find node on an unmounted component.');
      }
      if (a.return !== l.return) ((a = u), (l = p));
      else {
        for (var C = !1, w = u.child; w; ) {
          if (w === a) {
            ((C = !0), (a = u), (l = p));
            break;
          }
          if (w === l) {
            ((C = !0), (l = u), (a = p));
            break;
          }
          w = w.sibling;
        }
        if (!C) {
          for (w = p.child; w; ) {
            if (w === a) {
              ((C = !0), (a = p), (l = u));
              break;
            }
            if (w === l) {
              ((C = !0), (l = p), (a = u));
              break;
            }
            w = w.sibling;
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
  function ag(e) {
    var t = rg(e);
    return t !== null ? ig(t) : null;
  }
  function ig(e) {
    if (e.tag === D || e.tag === O) return e;
    for (var t = e.child; t !== null; ) {
      var n = ig(t);
      if (n !== null) return n;
      t = t.sibling;
    }
    return null;
  }
  function kx(e) {
    var t = rg(e);
    return t !== null ? og(t) : null;
  }
  function og(e) {
    if (e.tag === D || e.tag === O) return e;
    for (var t = e.child; t !== null; ) {
      if (t.tag !== T) {
        var n = og(t);
        if (n !== null) return n;
      }
      t = t.sibling;
    }
    return null;
  }
  var lg = i.unstable_scheduleCallback,
    Nx = i.unstable_cancelCallback,
    Px = i.unstable_shouldYield,
    zx = i.unstable_requestPaint,
    _n = i.unstable_now,
    Ux = i.unstable_getCurrentPriorityLevel,
    vc = i.unstable_ImmediatePriority,
    lp = i.unstable_UserBlockingPriority,
    no = i.unstable_NormalPriority,
    Fx = i.unstable_LowPriority,
    sp = i.unstable_IdlePriority,
    Vx = i.unstable_yieldValue,
    Hx = i.unstable_setDisableYieldValue,
    Yo = null,
    Yn = null,
    _e = null,
    la = !1,
    Ir = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u';
  function Ix(e) {
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
      (Ve && (e = ct({}, e, { getLaneLabelMap: Wx, injectProfilingHooks: Gx })),
        (Yo = t.inject(e)),
        (Yn = t));
    } catch (n) {
      d('React instrumentation encountered an error: %s.', n);
    }
    return !!t.checkDCE;
  }
  function Bx(e, t) {
    if (Yn && typeof Yn.onScheduleFiberRoot == 'function')
      try {
        Yn.onScheduleFiberRoot(Yo, e, t);
      } catch (n) {
        la ||
          ((la = !0), d('React instrumentation encountered an error: %s', n));
      }
  }
  function jx(e, t) {
    if (Yn && typeof Yn.onCommitFiberRoot == 'function')
      try {
        var n = (e.current.flags & Dt) === Dt;
        if ($) {
          var a;
          switch (t) {
            case Sr:
              a = vc;
              break;
            case Fa:
              a = lp;
              break;
            case Va:
              a = no;
              break;
            case Ec:
              a = sp;
              break;
            default:
              a = no;
              break;
          }
          Yn.onCommitFiberRoot(Yo, e, a, n);
        }
      } catch (l) {
        la ||
          ((la = !0), d('React instrumentation encountered an error: %s', l));
      }
  }
  function $x(e) {
    if (Yn && typeof Yn.onPostCommitFiberRoot == 'function')
      try {
        Yn.onPostCommitFiberRoot(Yo, e);
      } catch (t) {
        la ||
          ((la = !0), d('React instrumentation encountered an error: %s', t));
      }
  }
  function Yx(e) {
    if (Yn && typeof Yn.onCommitFiberUnmount == 'function')
      try {
        Yn.onCommitFiberUnmount(Yo, e);
      } catch (t) {
        la ||
          ((la = !0), d('React instrumentation encountered an error: %s', t));
      }
  }
  function Dn(e) {
    if (
      (typeof Vx == 'function' && (Hx(e), c(e)),
      Yn && typeof Yn.setStrictMode == 'function')
    )
      try {
        Yn.setStrictMode(Yo, e);
      } catch (t) {
        la ||
          ((la = !0), d('React instrumentation encountered an error: %s', t));
      }
  }
  function Gx(e) {
    _e = e;
  }
  function Wx() {
    {
      for (var e = new Map(), t = 1, n = 0; n < cp; n++) {
        var a = pR(t);
        (e.set(t, a), (t *= 2));
      }
      return e;
    }
  }
  function qx(e) {
    _e !== null &&
      typeof _e.markCommitStarted == 'function' &&
      _e.markCommitStarted(e);
  }
  function sg() {
    _e !== null &&
      typeof _e.markCommitStopped == 'function' &&
      _e.markCommitStopped();
  }
  function cs(e) {
    _e !== null &&
      typeof _e.markComponentRenderStarted == 'function' &&
      _e.markComponentRenderStarted(e);
  }
  function Go() {
    _e !== null &&
      typeof _e.markComponentRenderStopped == 'function' &&
      _e.markComponentRenderStopped();
  }
  function Xx(e) {
    _e !== null &&
      typeof _e.markComponentPassiveEffectMountStarted == 'function' &&
      _e.markComponentPassiveEffectMountStarted(e);
  }
  function Qx() {
    _e !== null &&
      typeof _e.markComponentPassiveEffectMountStopped == 'function' &&
      _e.markComponentPassiveEffectMountStopped();
  }
  function Kx(e) {
    _e !== null &&
      typeof _e.markComponentPassiveEffectUnmountStarted == 'function' &&
      _e.markComponentPassiveEffectUnmountStarted(e);
  }
  function Jx() {
    _e !== null &&
      typeof _e.markComponentPassiveEffectUnmountStopped == 'function' &&
      _e.markComponentPassiveEffectUnmountStopped();
  }
  function Zx(e) {
    _e !== null &&
      typeof _e.markComponentLayoutEffectMountStarted == 'function' &&
      _e.markComponentLayoutEffectMountStarted(e);
  }
  function eR() {
    _e !== null &&
      typeof _e.markComponentLayoutEffectMountStopped == 'function' &&
      _e.markComponentLayoutEffectMountStopped();
  }
  function ug(e) {
    _e !== null &&
      typeof _e.markComponentLayoutEffectUnmountStarted == 'function' &&
      _e.markComponentLayoutEffectUnmountStarted(e);
  }
  function cg() {
    _e !== null &&
      typeof _e.markComponentLayoutEffectUnmountStopped == 'function' &&
      _e.markComponentLayoutEffectUnmountStopped();
  }
  function tR(e, t, n) {
    _e !== null &&
      typeof _e.markComponentErrored == 'function' &&
      _e.markComponentErrored(e, t, n);
  }
  function nR(e, t, n) {
    _e !== null &&
      typeof _e.markComponentSuspended == 'function' &&
      _e.markComponentSuspended(e, t, n);
  }
  function rR(e) {
    _e !== null &&
      typeof _e.markLayoutEffectsStarted == 'function' &&
      _e.markLayoutEffectsStarted(e);
  }
  function aR() {
    _e !== null &&
      typeof _e.markLayoutEffectsStopped == 'function' &&
      _e.markLayoutEffectsStopped();
  }
  function iR(e) {
    _e !== null &&
      typeof _e.markPassiveEffectsStarted == 'function' &&
      _e.markPassiveEffectsStarted(e);
  }
  function oR() {
    _e !== null &&
      typeof _e.markPassiveEffectsStopped == 'function' &&
      _e.markPassiveEffectsStopped();
  }
  function fg(e) {
    _e !== null &&
      typeof _e.markRenderStarted == 'function' &&
      _e.markRenderStarted(e);
  }
  function lR() {
    _e !== null &&
      typeof _e.markRenderYielded == 'function' &&
      _e.markRenderYielded();
  }
  function dg() {
    _e !== null &&
      typeof _e.markRenderStopped == 'function' &&
      _e.markRenderStopped();
  }
  function sR(e) {
    _e !== null &&
      typeof _e.markRenderScheduled == 'function' &&
      _e.markRenderScheduled(e);
  }
  function uR(e, t) {
    _e !== null &&
      typeof _e.markForceUpdateScheduled == 'function' &&
      _e.markForceUpdateScheduled(e, t);
  }
  function up(e, t) {
    _e !== null &&
      typeof _e.markStateUpdateScheduled == 'function' &&
      _e.markStateUpdateScheduled(e, t);
  }
  var je = 0,
    yt = 1,
    kt = 2,
    an = 8,
    sa = 16,
    pg = Math.clz32 ? Math.clz32 : dR,
    cR = Math.log,
    fR = Math.LN2;
  function dR(e) {
    var t = e >>> 0;
    return t === 0 ? 32 : (31 - ((cR(t) / fR) | 0)) | 0;
  }
  var cp = 31,
    fe = 0,
    On = 0,
    tt = 1,
    Wo = 2,
    Ua = 4,
    ro = 8,
    ua = 16,
    fs = 32,
    qo = 4194240,
    ds = 64,
    fp = 128,
    dp = 256,
    pp = 512,
    vp = 1024,
    hp = 2048,
    mp = 4096,
    yp = 8192,
    gp = 16384,
    bp = 32768,
    Sp = 65536,
    Ep = 131072,
    Cp = 262144,
    wp = 524288,
    Tp = 1048576,
    xp = 2097152,
    hc = 130023424,
    Xo = 4194304,
    Rp = 8388608,
    _p = 16777216,
    Dp = 33554432,
    Op = 67108864,
    vg = Xo,
    ps = 134217728,
    hg = 268435455,
    vs = 268435456,
    ao = 536870912,
    gr = 1073741824;
  function pR(e) {
    {
      if (e & tt) return 'Sync';
      if (e & Wo) return 'InputContinuousHydration';
      if (e & Ua) return 'InputContinuous';
      if (e & ro) return 'DefaultHydration';
      if (e & ua) return 'Default';
      if (e & fs) return 'TransitionHydration';
      if (e & qo) return 'Transition';
      if (e & hc) return 'Retry';
      if (e & ps) return 'SelectiveHydration';
      if (e & vs) return 'IdleHydration';
      if (e & ao) return 'Idle';
      if (e & gr) return 'Offscreen';
    }
  }
  var jt = -1,
    mc = ds,
    yc = Xo;
  function hs(e) {
    switch (io(e)) {
      case tt:
        return tt;
      case Wo:
        return Wo;
      case Ua:
        return Ua;
      case ro:
        return ro;
      case ua:
        return ua;
      case fs:
        return fs;
      case ds:
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
      case wp:
      case Tp:
      case xp:
        return e & qo;
      case Xo:
      case Rp:
      case _p:
      case Dp:
      case Op:
        return e & hc;
      case ps:
        return ps;
      case vs:
        return vs;
      case ao:
        return ao;
      case gr:
        return gr;
      default:
        return (
          d('Should have found matching lanes. This is a bug in React.'),
          e
        );
    }
  }
  function gc(e, t) {
    var n = e.pendingLanes;
    if (n === fe) return fe;
    var a = fe,
      l = e.suspendedLanes,
      u = e.pingedLanes,
      p = n & hg;
    if (p !== fe) {
      var v = p & ~l;
      if (v !== fe) a = hs(v);
      else {
        var y = p & u;
        y !== fe && (a = hs(y));
      }
    } else {
      var C = n & ~l;
      C !== fe ? (a = hs(C)) : u !== fe && (a = hs(u));
    }
    if (a === fe) return fe;
    if (t !== fe && t !== a && (t & l) === fe) {
      var w = io(a),
        N = io(t);
      if (w >= N || (w === ua && (N & qo) !== fe)) return t;
    }
    (a & Ua) !== fe && (a |= n & ua);
    var k = e.entangledLanes;
    if (k !== fe)
      for (var j = e.entanglements, G = a & k; G > 0; ) {
        var K = oo(G),
          xe = 1 << K;
        ((a |= j[K]), (G &= ~xe));
      }
    return a;
  }
  function vR(e, t) {
    for (var n = e.eventTimes, a = jt; t > 0; ) {
      var l = oo(t),
        u = 1 << l,
        p = n[l];
      (p > a && (a = p), (t &= ~u));
    }
    return a;
  }
  function hR(e, t) {
    switch (e) {
      case tt:
      case Wo:
      case Ua:
        return t + 250;
      case ro:
      case ua:
      case fs:
      case ds:
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
      case wp:
      case Tp:
      case xp:
        return t + 5e3;
      case Xo:
      case Rp:
      case _p:
      case Dp:
      case Op:
        return jt;
      case ps:
      case vs:
      case ao:
      case gr:
        return jt;
      default:
        return (
          d('Should have found matching lanes. This is a bug in React.'),
          jt
        );
    }
  }
  function mR(e, t) {
    for (
      var n = e.pendingLanes,
        a = e.suspendedLanes,
        l = e.pingedLanes,
        u = e.expirationTimes,
        p = n;
      p > 0;

    ) {
      var v = oo(p),
        y = 1 << v,
        C = u[v];
      (C === jt
        ? ((y & a) === fe || (y & l) !== fe) && (u[v] = hR(y, t))
        : C <= t && (e.expiredLanes |= y),
        (p &= ~y));
    }
  }
  function yR(e) {
    return hs(e.pendingLanes);
  }
  function Ap(e) {
    var t = e.pendingLanes & ~gr;
    return t !== fe ? t : t & gr ? gr : fe;
  }
  function gR(e) {
    return (e & tt) !== fe;
  }
  function Mp(e) {
    return (e & hg) !== fe;
  }
  function mg(e) {
    return (e & hc) === e;
  }
  function bR(e) {
    var t = tt | Ua | ua;
    return (e & t) === fe;
  }
  function SR(e) {
    return (e & qo) === e;
  }
  function bc(e, t) {
    var n = Wo | Ua | ro | ua;
    return (t & n) !== fe;
  }
  function ER(e, t) {
    return (t & e.expiredLanes) !== fe;
  }
  function yg(e) {
    return (e & qo) !== fe;
  }
  function gg() {
    var e = mc;
    return ((mc <<= 1), (mc & qo) === fe && (mc = ds), e);
  }
  function CR() {
    var e = yc;
    return ((yc <<= 1), (yc & hc) === fe && (yc = Xo), e);
  }
  function io(e) {
    return e & -e;
  }
  function ms(e) {
    return io(e);
  }
  function oo(e) {
    return 31 - pg(e);
  }
  function Lp(e) {
    return oo(e);
  }
  function br(e, t) {
    return (e & t) !== fe;
  }
  function Qo(e, t) {
    return (e & t) === t;
  }
  function st(e, t) {
    return e | t;
  }
  function Sc(e, t) {
    return e & ~t;
  }
  function bg(e, t) {
    return e & t;
  }
  function Bz(e) {
    return e;
  }
  function wR(e, t) {
    return e !== On && e < t ? e : t;
  }
  function kp(e) {
    for (var t = [], n = 0; n < cp; n++) t.push(e);
    return t;
  }
  function ys(e, t, n) {
    ((e.pendingLanes |= t),
      t !== ao && ((e.suspendedLanes = fe), (e.pingedLanes = fe)));
    var a = e.eventTimes,
      l = Lp(t);
    a[l] = n;
  }
  function TR(e, t) {
    ((e.suspendedLanes |= t), (e.pingedLanes &= ~t));
    for (var n = e.expirationTimes, a = t; a > 0; ) {
      var l = oo(a),
        u = 1 << l;
      ((n[l] = jt), (a &= ~u));
    }
  }
  function Sg(e, t, n) {
    e.pingedLanes |= e.suspendedLanes & t;
  }
  function xR(e, t) {
    var n = e.pendingLanes & ~t;
    ((e.pendingLanes = t),
      (e.suspendedLanes = fe),
      (e.pingedLanes = fe),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t));
    for (
      var a = e.entanglements, l = e.eventTimes, u = e.expirationTimes, p = n;
      p > 0;

    ) {
      var v = oo(p),
        y = 1 << v;
      ((a[v] = fe), (l[v] = jt), (u[v] = jt), (p &= ~y));
    }
  }
  function Np(e, t) {
    for (var n = (e.entangledLanes |= t), a = e.entanglements, l = n; l; ) {
      var u = oo(l),
        p = 1 << u;
      ((p & t) | (a[u] & t) && (a[u] |= t), (l &= ~p));
    }
  }
  function RR(e, t) {
    var n = io(t),
      a;
    switch (n) {
      case Ua:
        a = Wo;
        break;
      case ua:
        a = ro;
        break;
      case ds:
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
      case wp:
      case Tp:
      case xp:
      case Xo:
      case Rp:
      case _p:
      case Dp:
      case Op:
        a = fs;
        break;
      case ao:
        a = vs;
        break;
      default:
        a = On;
        break;
    }
    return (a & (e.suspendedLanes | t)) !== On ? On : a;
  }
  function Eg(e, t, n) {
    if (Ir)
      for (var a = e.pendingUpdatersLaneMap; n > 0; ) {
        var l = Lp(n),
          u = 1 << l,
          p = a[l];
        (p.add(t), (n &= ~u));
      }
  }
  function Cg(e, t) {
    if (Ir)
      for (var n = e.pendingUpdatersLaneMap, a = e.memoizedUpdaters; t > 0; ) {
        var l = Lp(t),
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
  function wg(e, t) {
    return null;
  }
  var Sr = tt,
    Fa = Ua,
    Va = ua,
    Ec = ao,
    gs = On;
  function Br() {
    return gs;
  }
  function An(e) {
    gs = e;
  }
  function _R(e, t) {
    var n = gs;
    try {
      return ((gs = e), t());
    } finally {
      gs = n;
    }
  }
  function DR(e, t) {
    return e !== 0 && e < t ? e : t;
  }
  function OR(e, t) {
    return e === 0 || e > t ? e : t;
  }
  function Pp(e, t) {
    return e !== 0 && e < t;
  }
  function Tg(e) {
    var t = io(e);
    return Pp(Sr, t) ? (Pp(Fa, t) ? (Mp(t) ? Va : Ec) : Fa) : Sr;
  }
  function Cc(e) {
    var t = e.current.memoizedState;
    return t.isDehydrated;
  }
  var xg;
  function AR(e) {
    xg = e;
  }
  function MR(e) {
    xg(e);
  }
  var zp;
  function LR(e) {
    zp = e;
  }
  var Rg;
  function kR(e) {
    Rg = e;
  }
  var _g;
  function NR(e) {
    _g = e;
  }
  var Dg;
  function PR(e) {
    Dg = e;
  }
  var Up = !1,
    wc = [],
    vi = null,
    hi = null,
    mi = null,
    bs = new Map(),
    Ss = new Map(),
    yi = [],
    zR = [
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
  function UR(e) {
    return zR.indexOf(e) > -1;
  }
  function FR(e, t, n, a, l) {
    return {
      blockedOn: e,
      domEventName: t,
      eventSystemFlags: n,
      nativeEvent: l,
      targetContainers: [a],
    };
  }
  function Og(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        vi = null;
        break;
      case 'dragenter':
      case 'dragleave':
        hi = null;
        break;
      case 'mouseover':
      case 'mouseout':
        mi = null;
        break;
      case 'pointerover':
      case 'pointerout': {
        var n = t.pointerId;
        bs.delete(n);
        break;
      }
      case 'gotpointercapture':
      case 'lostpointercapture': {
        var a = t.pointerId;
        Ss.delete(a);
        break;
      }
    }
  }
  function Es(e, t, n, a, l, u) {
    if (e === null || e.nativeEvent !== u) {
      var p = FR(t, n, a, l, u);
      if (t !== null) {
        var v = Si(t);
        v !== null && zp(v);
      }
      return p;
    }
    e.eventSystemFlags |= a;
    var y = e.targetContainers;
    return (l !== null && y.indexOf(l) === -1 && y.push(l), e);
  }
  function VR(e, t, n, a, l) {
    switch (t) {
      case 'focusin': {
        var u = l;
        return ((vi = Es(vi, e, t, n, a, u)), !0);
      }
      case 'dragenter': {
        var p = l;
        return ((hi = Es(hi, e, t, n, a, p)), !0);
      }
      case 'mouseover': {
        var v = l;
        return ((mi = Es(mi, e, t, n, a, v)), !0);
      }
      case 'pointerover': {
        var y = l,
          C = y.pointerId;
        return (bs.set(C, Es(bs.get(C) || null, e, t, n, a, y)), !0);
      }
      case 'gotpointercapture': {
        var w = l,
          N = w.pointerId;
        return (Ss.set(N, Es(Ss.get(N) || null, e, t, n, a, w)), !0);
      }
    }
    return !1;
  }
  function Ag(e) {
    var t = uo(e.target);
    if (t !== null) {
      var n = to(t);
      if (n !== null) {
        var a = n.tag;
        if (a === F) {
          var l = eg(n);
          if (l !== null) {
            ((e.blockedOn = l),
              Dg(e.priority, function () {
                Rg(n);
              }));
            return;
          }
        } else if (a === S) {
          var u = n.stateNode;
          if (Cc(u)) {
            e.blockedOn = tg(n);
            return;
          }
        }
      }
    }
    e.blockedOn = null;
  }
  function HR(e) {
    for (
      var t = _g(), n = { blockedOn: null, target: e, priority: t }, a = 0;
      a < yi.length && Pp(t, yi[a].priority);
      a++
    );
    (yi.splice(a, 0, n), a === 0 && Ag(n));
  }
  function Tc(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; t.length > 0; ) {
      var n = t[0],
        a = Hp(e.domEventName, e.eventSystemFlags, n, e.nativeEvent);
      if (a === null) {
        var l = e.nativeEvent,
          u = new l.constructor(l.type, l);
        (dx(u), l.target.dispatchEvent(u), px());
      } else {
        var p = Si(a);
        return (p !== null && zp(p), (e.blockedOn = a), !1);
      }
      t.shift();
    }
    return !0;
  }
  function Mg(e, t, n) {
    Tc(e) && n.delete(t);
  }
  function IR() {
    ((Up = !1),
      vi !== null && Tc(vi) && (vi = null),
      hi !== null && Tc(hi) && (hi = null),
      mi !== null && Tc(mi) && (mi = null),
      bs.forEach(Mg),
      Ss.forEach(Mg));
  }
  function Cs(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Up ||
        ((Up = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, IR)));
  }
  function ws(e) {
    if (wc.length > 0) {
      Cs(wc[0], e);
      for (var t = 1; t < wc.length; t++) {
        var n = wc[t];
        n.blockedOn === e && (n.blockedOn = null);
      }
    }
    (vi !== null && Cs(vi, e),
      hi !== null && Cs(hi, e),
      mi !== null && Cs(mi, e));
    var a = function (v) {
      return Cs(v, e);
    };
    (bs.forEach(a), Ss.forEach(a));
    for (var l = 0; l < yi.length; l++) {
      var u = yi[l];
      u.blockedOn === e && (u.blockedOn = null);
    }
    for (; yi.length > 0; ) {
      var p = yi[0];
      if (p.blockedOn !== null) break;
      (Ag(p), p.blockedOn === null && yi.shift());
    }
  }
  var Ko = o.ReactCurrentBatchConfig,
    Fp = !0;
  function Lg(e) {
    Fp = !!e;
  }
  function BR() {
    return Fp;
  }
  function jR(e, t, n) {
    var a = kg(t),
      l;
    switch (a) {
      case Sr:
        l = $R;
        break;
      case Fa:
        l = YR;
        break;
      case Va:
      default:
        l = Vp;
        break;
    }
    return l.bind(null, t, n, e);
  }
  function $R(e, t, n, a) {
    var l = Br(),
      u = Ko.transition;
    Ko.transition = null;
    try {
      (An(Sr), Vp(e, t, n, a));
    } finally {
      (An(l), (Ko.transition = u));
    }
  }
  function YR(e, t, n, a) {
    var l = Br(),
      u = Ko.transition;
    Ko.transition = null;
    try {
      (An(Fa), Vp(e, t, n, a));
    } finally {
      (An(l), (Ko.transition = u));
    }
  }
  function Vp(e, t, n, a) {
    Fp && GR(e, t, n, a);
  }
  function GR(e, t, n, a) {
    var l = Hp(e, t, n, a);
    if (l === null) {
      (ev(e, t, a, xc, n), Og(e, a));
      return;
    }
    if (VR(l, e, t, n, a)) {
      a.stopPropagation();
      return;
    }
    if ((Og(e, a), t & rs && UR(e))) {
      for (; l !== null; ) {
        var u = Si(l);
        u !== null && MR(u);
        var p = Hp(e, t, n, a);
        if ((p === null && ev(e, t, a, xc, n), p === l)) break;
        l = p;
      }
      l !== null && a.stopPropagation();
      return;
    }
    ev(e, t, a, null, n);
  }
  var xc = null;
  function Hp(e, t, n, a) {
    xc = null;
    var l = Wd(a),
      u = uo(l);
    if (u !== null) {
      var p = to(u);
      if (p === null) u = null;
      else {
        var v = p.tag;
        if (v === F) {
          var y = eg(p);
          if (y !== null) return y;
          u = null;
        } else if (v === S) {
          var C = p.stateNode;
          if (Cc(C)) return tg(p);
          u = null;
        } else p !== u && (u = null);
      }
    }
    return ((xc = u), null);
  }
  function kg(e) {
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
        return Sr;
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
        return Fa;
      case 'message': {
        var t = Ux();
        switch (t) {
          case vc:
            return Sr;
          case lp:
            return Fa;
          case no:
          case Fx:
            return Va;
          case sp:
            return Ec;
          default:
            return Va;
        }
      }
      default:
        return Va;
    }
  }
  function WR(e, t, n) {
    return (e.addEventListener(t, n, !1), n);
  }
  function qR(e, t, n) {
    return (e.addEventListener(t, n, !0), n);
  }
  function XR(e, t, n, a) {
    return (e.addEventListener(t, n, { capture: !0, passive: a }), n);
  }
  function QR(e, t, n, a) {
    return (e.addEventListener(t, n, { passive: a }), n);
  }
  var Ts = null,
    Ip = null,
    xs = null;
  function KR(e) {
    return ((Ts = e), (Ip = Pg()), !0);
  }
  function JR() {
    ((Ts = null), (Ip = null), (xs = null));
  }
  function Ng() {
    if (xs) return xs;
    var e,
      t = Ip,
      n = t.length,
      a,
      l = Pg(),
      u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var p = n - e;
    for (a = 1; a <= p && t[n - a] === l[u - a]; a++);
    var v = a > 1 ? 1 - a : void 0;
    return ((xs = l.slice(e, v)), xs);
  }
  function Pg() {
    return 'value' in Ts ? Ts.value : Ts.textContent;
  }
  function Rc(e) {
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
  function _c() {
    return !0;
  }
  function zg() {
    return !1;
  }
  function Er(e) {
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
        C ? (this.isDefaultPrevented = _c) : (this.isDefaultPrevented = zg),
        (this.isPropagationStopped = zg),
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
            (this.isDefaultPrevented = _c));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = _c));
        },
        persist: function () {},
        isPersistent: _c,
      }),
      t
    );
  }
  var Jo = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Bp = Er(Jo),
    Rs = ct({}, Jo, { view: 0, detail: 0 }),
    ZR = Er(Rs),
    jp,
    $p,
    _s;
  function e0(e) {
    e !== _s &&
      (_s && e.type === 'mousemove'
        ? ((jp = e.screenX - _s.screenX), ($p = e.screenY - _s.screenY))
        : ((jp = 0), ($p = 0)),
      (_s = e));
  }
  var Dc = ct({}, Rs, {
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
      getModifierState: Gp,
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
        return 'movementX' in e ? e.movementX : (e0(e), jp);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : $p;
      },
    }),
    Ug = Er(Dc),
    t0 = ct({}, Dc, { dataTransfer: 0 }),
    n0 = Er(t0),
    r0 = ct({}, Rs, { relatedTarget: 0 }),
    Yp = Er(r0),
    a0 = ct({}, Jo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    i0 = Er(a0),
    o0 = ct({}, Jo, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    l0 = Er(o0),
    s0 = ct({}, Jo, { data: 0 }),
    Fg = Er(s0),
    u0 = Fg,
    c0 = {
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
    f0 = {
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
  function d0(e) {
    if (e.key) {
      var t = c0[e.key] || e.key;
      if (t !== 'Unidentified') return t;
    }
    if (e.type === 'keypress') {
      var n = Rc(e);
      return n === 13 ? 'Enter' : String.fromCharCode(n);
    }
    return e.type === 'keydown' || e.type === 'keyup'
      ? f0[e.keyCode] || 'Unidentified'
      : '';
  }
  var p0 = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
  function v0(e) {
    var t = this,
      n = t.nativeEvent;
    if (n.getModifierState) return n.getModifierState(e);
    var a = p0[e];
    return a ? !!n[a] : !1;
  }
  function Gp(e) {
    return v0;
  }
  var h0 = ct({}, Rs, {
      key: d0,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Gp,
      charCode: function (e) {
        return e.type === 'keypress' ? Rc(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? Rc(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    m0 = Er(h0),
    y0 = ct({}, Dc, {
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
    Vg = Er(y0),
    g0 = ct({}, Rs, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Gp,
    }),
    b0 = Er(g0),
    S0 = ct({}, Jo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    E0 = Er(S0),
    C0 = ct({}, Dc, {
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
    w0 = Er(C0),
    T0 = [9, 13, 27, 32],
    Hg = 229,
    Wp = it && 'CompositionEvent' in window,
    Ds = null;
  it && 'documentMode' in document && (Ds = document.documentMode);
  var x0 = it && 'TextEvent' in window && !Ds,
    Ig = it && (!Wp || (Ds && Ds > 8 && Ds <= 11)),
    Bg = 32,
    jg = String.fromCharCode(Bg);
  function R0() {
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
  var $g = !1;
  function _0(e) {
    return (e.ctrlKey || e.altKey || e.metaKey) && !(e.ctrlKey && e.altKey);
  }
  function D0(e) {
    switch (e) {
      case 'compositionstart':
        return 'onCompositionStart';
      case 'compositionend':
        return 'onCompositionEnd';
      case 'compositionupdate':
        return 'onCompositionUpdate';
    }
  }
  function O0(e, t) {
    return e === 'keydown' && t.keyCode === Hg;
  }
  function Yg(e, t) {
    switch (e) {
      case 'keyup':
        return T0.indexOf(t.keyCode) !== -1;
      case 'keydown':
        return t.keyCode !== Hg;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function Gg(e) {
    var t = e.detail;
    return typeof t == 'object' && 'data' in t ? t.data : null;
  }
  function Wg(e) {
    return e.locale === 'ko';
  }
  var Zo = !1;
  function A0(e, t, n, a, l) {
    var u, p;
    if (
      (Wp
        ? (u = D0(t))
        : Zo
          ? Yg(t, a) && (u = 'onCompositionEnd')
          : O0(t, a) && (u = 'onCompositionStart'),
      !u)
    )
      return null;
    Ig &&
      !Wg(a) &&
      (!Zo && u === 'onCompositionStart'
        ? (Zo = KR(l))
        : u === 'onCompositionEnd' && Zo && (p = Ng()));
    var v = kc(n, u);
    if (v.length > 0) {
      var y = new Fg(u, t, null, a, l);
      if ((e.push({ event: y, listeners: v }), p)) y.data = p;
      else {
        var C = Gg(a);
        C !== null && (y.data = C);
      }
    }
  }
  function M0(e, t) {
    switch (e) {
      case 'compositionend':
        return Gg(t);
      case 'keypress':
        var n = t.which;
        return n !== Bg ? null : (($g = !0), jg);
      case 'textInput':
        var a = t.data;
        return a === jg && $g ? null : a;
      default:
        return null;
    }
  }
  function L0(e, t) {
    if (Zo) {
      if (e === 'compositionend' || (!Wp && Yg(e, t))) {
        var n = Ng();
        return (JR(), (Zo = !1), n);
      }
      return null;
    }
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!_0(t)) {
          if (t.char && t.char.length > 1) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case 'compositionend':
        return Ig && !Wg(t) ? null : t.data;
      default:
        return null;
    }
  }
  function k0(e, t, n, a, l) {
    var u;
    if ((x0 ? (u = M0(t, a)) : (u = L0(t, a)), !u)) return null;
    var p = kc(n, 'onBeforeInput');
    if (p.length > 0) {
      var v = new u0('onBeforeInput', 'beforeinput', null, a, l);
      (e.push({ event: v, listeners: p }), (v.data = u));
    }
  }
  function N0(e, t, n, a, l, u, p) {
    (A0(e, t, n, a, l), k0(e, t, n, a, l));
  }
  var P0 = {
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
  function qg(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!P0[e.type] : t === 'textarea';
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
   */ function z0(e) {
    if (!it) return !1;
    var t = 'on' + e,
      n = t in document;
    if (!n) {
      var a = document.createElement('div');
      (a.setAttribute(t, 'return;'), (n = typeof a[t] == 'function'));
    }
    return n;
  }
  function U0() {
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
  function Xg(e, t, n, a) {
    Gy(a);
    var l = kc(t, 'onChange');
    if (l.length > 0) {
      var u = new Bp('onChange', 'change', null, n, a);
      e.push({ event: u, listeners: l });
    }
  }
  var Os = null,
    As = null;
  function F0(e) {
    var t = e.nodeName && e.nodeName.toLowerCase();
    return t === 'select' || (t === 'input' && e.type === 'file');
  }
  function V0(e) {
    var t = [];
    (Xg(t, As, e, Wd(e)), Qy(H0, t));
  }
  function H0(e) {
    pb(e, 0);
  }
  function Oc(e) {
    var t = il(e);
    if (No(t)) return e;
  }
  function I0(e, t) {
    if (e === 'change') return t;
  }
  var Qg = !1;
  it &&
    (Qg = z0('input') && (!document.documentMode || document.documentMode > 9));
  function B0(e, t) {
    ((Os = e), (As = t), Os.attachEvent('onpropertychange', Jg));
  }
  function Kg() {
    Os && (Os.detachEvent('onpropertychange', Jg), (Os = null), (As = null));
  }
  function Jg(e) {
    e.propertyName === 'value' && Oc(As) && V0(e);
  }
  function j0(e, t, n) {
    e === 'focusin' ? (Kg(), B0(t, n)) : e === 'focusout' && Kg();
  }
  function $0(e, t) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
      return Oc(As);
  }
  function Y0(e) {
    var t = e.nodeName;
    return (
      t &&
      t.toLowerCase() === 'input' &&
      (e.type === 'checkbox' || e.type === 'radio')
    );
  }
  function G0(e, t) {
    if (e === 'click') return Oc(t);
  }
  function W0(e, t) {
    if (e === 'input' || e === 'change') return Oc(t);
  }
  function q0(e) {
    var t = e._wrapperState;
    !t || !t.controlled || e.type !== 'number' || et(e, 'number', e.value);
  }
  function X0(e, t, n, a, l, u, p) {
    var v = n ? il(n) : window,
      y,
      C;
    if (
      (F0(v)
        ? (y = I0)
        : qg(v)
          ? Qg
            ? (y = W0)
            : ((y = $0), (C = j0))
          : Y0(v) && (y = G0),
      y)
    ) {
      var w = y(t, n);
      if (w) {
        Xg(e, w, a, l);
        return;
      }
    }
    (C && C(t, v, n), t === 'focusout' && q0(v));
  }
  function Q0() {
    (oe('onMouseEnter', ['mouseout', 'mouseover']),
      oe('onMouseLeave', ['mouseout', 'mouseover']),
      oe('onPointerEnter', ['pointerout', 'pointerover']),
      oe('onPointerLeave', ['pointerout', 'pointerover']));
  }
  function K0(e, t, n, a, l, u, p) {
    var v = t === 'mouseover' || t === 'pointerover',
      y = t === 'mouseout' || t === 'pointerout';
    if (v && !vx(a)) {
      var C = a.relatedTarget || a.fromElement;
      if (C && (uo(C) || Ys(C))) return;
    }
    if (!(!y && !v)) {
      var w;
      if (l.window === l) w = l;
      else {
        var N = l.ownerDocument;
        N ? (w = N.defaultView || N.parentWindow) : (w = window);
      }
      var k, j;
      if (y) {
        var G = a.relatedTarget || a.toElement;
        if (((k = n), (j = G ? uo(G) : null), j !== null)) {
          var K = to(j);
          (j !== K || (j.tag !== D && j.tag !== O)) && (j = null);
        }
      } else ((k = null), (j = n));
      if (k !== j) {
        var xe = Ug,
          Ie = 'onMouseLeave',
          ze = 'onMouseEnter',
          bt = 'mouse';
        (t === 'pointerout' || t === 'pointerover') &&
          ((xe = Vg),
          (Ie = 'onPointerLeave'),
          (ze = 'onPointerEnter'),
          (bt = 'pointer'));
        var pt = k == null ? w : il(k),
          H = j == null ? w : il(j),
          J = new xe(Ie, bt + 'leave', k, a, l);
        ((J.target = pt), (J.relatedTarget = H));
        var I = null,
          he = uo(l);
        if (he === n) {
          var Ae = new xe(ze, bt + 'enter', j, a, l);
          ((Ae.target = H), (Ae.relatedTarget = pt), (I = Ae));
        }
        E_(e, J, I, k, j);
      }
    }
  }
  function J0(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Cr = typeof Object.is == 'function' ? Object.is : J0;
  function Ms(e, t) {
    if (Cr(e, t)) return !0;
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
      if (!dt.call(t, u) || !Cr(e[u], t[u])) return !1;
    }
    return !0;
  }
  function Zg(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Z0(e) {
    for (; e; ) {
      if (e.nextSibling) return e.nextSibling;
      e = e.parentNode;
    }
  }
  function eb(e, t) {
    for (var n = Zg(e), a = 0, l = 0; n; ) {
      if (n.nodeType === Ma) {
        if (((l = a + n.textContent.length), a <= t && l >= t))
          return { node: n, offset: t - a };
        a = l;
      }
      n = Zg(Z0(n));
    }
  }
  function e_(e) {
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
    return t_(e, l, u, p, v);
  }
  function t_(e, t, n, a, l) {
    var u = 0,
      p = -1,
      v = -1,
      y = 0,
      C = 0,
      w = e,
      N = null;
    e: for (;;) {
      for (
        var k = null;
        w === t && (n === 0 || w.nodeType === Ma) && (p = u + n),
          w === a && (l === 0 || w.nodeType === Ma) && (v = u + l),
          w.nodeType === Ma && (u += w.nodeValue.length),
          (k = w.firstChild) !== null;

      )
        ((N = w), (w = k));
      for (;;) {
        if (w === e) break e;
        if (
          (N === t && ++y === n && (p = u),
          N === a && ++C === l && (v = u),
          (k = w.nextSibling) !== null)
        )
          break;
        ((w = N), (N = w.parentNode));
      }
      w = k;
    }
    return p === -1 || v === -1 ? null : { start: p, end: v };
  }
  function n_(e, t) {
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
      var C = eb(e, p),
        w = eb(e, v);
      if (C && w) {
        if (
          l.rangeCount === 1 &&
          l.anchorNode === C.node &&
          l.anchorOffset === C.offset &&
          l.focusNode === w.node &&
          l.focusOffset === w.offset
        )
          return;
        var N = n.createRange();
        (N.setStart(C.node, C.offset),
          l.removeAllRanges(),
          p > v
            ? (l.addRange(N), l.extend(w.node, w.offset))
            : (N.setEnd(w.node, w.offset), l.addRange(N)));
      }
    }
  }
  function tb(e) {
    return e && e.nodeType === Ma;
  }
  function nb(e, t) {
    return !e || !t
      ? !1
      : e === t
        ? !0
        : tb(e)
          ? !1
          : tb(t)
            ? nb(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1;
  }
  function r_(e) {
    return e && e.ownerDocument && nb(e.ownerDocument.documentElement, e);
  }
  function a_(e) {
    try {
      return typeof e.contentWindow.location.href == 'string';
    } catch {
      return !1;
    }
  }
  function rb() {
    for (var e = window, t = fi(); t instanceof e.HTMLIFrameElement; ) {
      if (a_(t)) e = t.contentWindow;
      else return t;
      t = fi(e.document);
    }
    return t;
  }
  function qp(e) {
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
  function i_() {
    var e = rb();
    return { focusedElem: e, selectionRange: qp(e) ? l_(e) : null };
  }
  function o_(e) {
    var t = rb(),
      n = e.focusedElem,
      a = e.selectionRange;
    if (t !== n && r_(n)) {
      a !== null && qp(n) && s_(n, a);
      for (var l = [], u = n; (u = u.parentNode); )
        u.nodeType === sr &&
          l.push({ element: u, left: u.scrollLeft, top: u.scrollTop });
      typeof n.focus == 'function' && n.focus();
      for (var p = 0; p < l.length; p++) {
        var v = l[p];
        ((v.element.scrollLeft = v.left), (v.element.scrollTop = v.top));
      }
    }
  }
  function l_(e) {
    var t;
    return (
      'selectionStart' in e
        ? (t = { start: e.selectionStart, end: e.selectionEnd })
        : (t = e_(e)),
      t || { start: 0, end: 0 }
    );
  }
  function s_(e, t) {
    var n = t.start,
      a = t.end;
    (a === void 0 && (a = n),
      'selectionStart' in e
        ? ((e.selectionStart = n),
          (e.selectionEnd = Math.min(a, e.value.length)))
        : n_(e, t));
  }
  var u_ = it && 'documentMode' in document && document.documentMode <= 11;
  function c_() {
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
  var el = null,
    Xp = null,
    Ls = null,
    Qp = !1;
  function f_(e) {
    if ('selectionStart' in e && qp(e))
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
  function d_(e) {
    return e.window === e
      ? e.document
      : e.nodeType === La
        ? e
        : e.ownerDocument;
  }
  function ab(e, t, n) {
    var a = d_(n);
    if (!(Qp || el == null || el !== fi(a))) {
      var l = f_(el);
      if (!Ls || !Ms(Ls, l)) {
        Ls = l;
        var u = kc(Xp, 'onSelect');
        if (u.length > 0) {
          var p = new Bp('onSelect', 'select', null, t, n);
          (e.push({ event: p, listeners: u }), (p.target = el));
        }
      }
    }
  }
  function p_(e, t, n, a, l, u, p) {
    var v = n ? il(n) : window;
    switch (t) {
      case 'focusin':
        (qg(v) || v.contentEditable === 'true') &&
          ((el = v), (Xp = n), (Ls = null));
        break;
      case 'focusout':
        ((el = null), (Xp = null), (Ls = null));
        break;
      case 'mousedown':
        Qp = !0;
        break;
      case 'contextmenu':
      case 'mouseup':
      case 'dragend':
        ((Qp = !1), ab(e, a, l));
        break;
      case 'selectionchange':
        if (u_) break;
      case 'keydown':
      case 'keyup':
        ab(e, a, l);
    }
  }
  function Ac(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit' + e] = 'webkit' + t),
      (n['Moz' + e] = 'moz' + t),
      n
    );
  }
  var tl = {
      animationend: Ac('Animation', 'AnimationEnd'),
      animationiteration: Ac('Animation', 'AnimationIteration'),
      animationstart: Ac('Animation', 'AnimationStart'),
      transitionend: Ac('Transition', 'TransitionEnd'),
    },
    Kp = {},
    ib = {};
  it &&
    ((ib = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete tl.animationend.animation,
      delete tl.animationiteration.animation,
      delete tl.animationstart.animation),
    'TransitionEvent' in window || delete tl.transitionend.transition);
  function Mc(e) {
    if (Kp[e]) return Kp[e];
    if (!tl[e]) return e;
    var t = tl[e];
    for (var n in t) if (t.hasOwnProperty(n) && n in ib) return (Kp[e] = t[n]);
    return e;
  }
  var ob = Mc('animationend'),
    lb = Mc('animationiteration'),
    sb = Mc('animationstart'),
    ub = Mc('transitionend'),
    cb = new Map(),
    fb = [
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
  function gi(e, t) {
    (cb.set(e, t), Je(t, [e]));
  }
  function v_() {
    for (var e = 0; e < fb.length; e++) {
      var t = fb[e],
        n = t.toLowerCase(),
        a = t[0].toUpperCase() + t.slice(1);
      gi(n, 'on' + a);
    }
    (gi(ob, 'onAnimationEnd'),
      gi(lb, 'onAnimationIteration'),
      gi(sb, 'onAnimationStart'),
      gi('dblclick', 'onDoubleClick'),
      gi('focusin', 'onFocus'),
      gi('focusout', 'onBlur'),
      gi(ub, 'onTransitionEnd'));
  }
  function h_(e, t, n, a, l, u, p) {
    var v = cb.get(t);
    if (v !== void 0) {
      var y = Bp,
        C = t;
      switch (t) {
        case 'keypress':
          if (Rc(a) === 0) return;
        case 'keydown':
        case 'keyup':
          y = m0;
          break;
        case 'focusin':
          ((C = 'focus'), (y = Yp));
          break;
        case 'focusout':
          ((C = 'blur'), (y = Yp));
          break;
        case 'beforeblur':
        case 'afterblur':
          y = Yp;
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
          y = Ug;
          break;
        case 'drag':
        case 'dragend':
        case 'dragenter':
        case 'dragexit':
        case 'dragleave':
        case 'dragover':
        case 'dragstart':
        case 'drop':
          y = n0;
          break;
        case 'touchcancel':
        case 'touchend':
        case 'touchmove':
        case 'touchstart':
          y = b0;
          break;
        case ob:
        case lb:
        case sb:
          y = i0;
          break;
        case ub:
          y = E0;
          break;
        case 'scroll':
          y = ZR;
          break;
        case 'wheel':
          y = w0;
          break;
        case 'copy':
        case 'cut':
        case 'paste':
          y = l0;
          break;
        case 'gotpointercapture':
        case 'lostpointercapture':
        case 'pointercancel':
        case 'pointerdown':
        case 'pointermove':
        case 'pointerout':
        case 'pointerover':
        case 'pointerup':
          y = Vg;
          break;
      }
      var w = (u & rs) !== 0;
      {
        var N = !w && t === 'scroll',
          k = b_(n, v, a.type, w, N);
        if (k.length > 0) {
          var j = new y(v, C, null, a, l);
          e.push({ event: j, listeners: k });
        }
      }
    }
  }
  (v_(), Q0(), U0(), c_(), R0());
  function m_(e, t, n, a, l, u, p) {
    h_(e, t, n, a, l, u);
    var v = (u & fx) === 0;
    v &&
      (K0(e, t, n, a, l),
      X0(e, t, n, a, l),
      p_(e, t, n, a, l),
      N0(e, t, n, a, l));
  }
  var ks = [
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
    Jp = new Set(
      ['cancel', 'close', 'invalid', 'load', 'scroll', 'toggle'].concat(ks)
    );
  function db(e, t, n) {
    var a = e.type || 'unknown-event';
    ((e.currentTarget = n), wx(a, t, void 0, e), (e.currentTarget = null));
  }
  function y_(e, t, n) {
    var a;
    if (n)
      for (var l = t.length - 1; l >= 0; l--) {
        var u = t[l],
          p = u.instance,
          v = u.currentTarget,
          y = u.listener;
        if (p !== a && e.isPropagationStopped()) return;
        (db(e, y, v), (a = p));
      }
    else
      for (var C = 0; C < t.length; C++) {
        var w = t[C],
          N = w.instance,
          k = w.currentTarget,
          j = w.listener;
        if (N !== a && e.isPropagationStopped()) return;
        (db(e, j, k), (a = N));
      }
  }
  function pb(e, t) {
    for (var n = (t & rs) !== 0, a = 0; a < e.length; a++) {
      var l = e[a],
        u = l.event,
        p = l.listeners;
      y_(u, p, n);
    }
    Tx();
  }
  function g_(e, t, n, a, l) {
    var u = Wd(n),
      p = [];
    (m_(p, e, a, n, u, t), pb(p, t));
  }
  function Wt(e, t) {
    Jp.has(e) ||
      d(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e
      );
    var n = !1,
      a = qD(t),
      l = C_(e, n);
    a.has(l) || (vb(t, e, Gd, n), a.add(l));
  }
  function Zp(e, t, n) {
    Jp.has(e) &&
      !t &&
      d(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        e
      );
    var a = 0;
    (t && (a |= rs), vb(n, e, a, t));
  }
  var Lc = '_reactListening' + Math.random().toString(36).slice(2);
  function Ns(e) {
    if (!e[Lc]) {
      ((e[Lc] = !0),
        ye.forEach(function (n) {
          n !== 'selectionchange' && (Jp.has(n) || Zp(n, !1, e), Zp(n, !0, e));
        }));
      var t = e.nodeType === La ? e : e.ownerDocument;
      t !== null && (t[Lc] || ((t[Lc] = !0), Zp('selectionchange', !1, t)));
    }
  }
  function vb(e, t, n, a, l) {
    var u = jR(e, t, n),
      p = void 0;
    (Qd &&
      (t === 'touchstart' || t === 'touchmove' || t === 'wheel') &&
      (p = !0),
      (e = e),
      a
        ? p !== void 0
          ? XR(e, t, u, p)
          : qR(e, t, u)
        : p !== void 0
          ? QR(e, t, u, p)
          : WR(e, t, u));
  }
  function hb(e, t) {
    return e === t || (e.nodeType === cn && e.parentNode === t);
  }
  function ev(e, t, n, a, l) {
    var u = a;
    if (!(t & $y) && !(t & Gd)) {
      var p = l;
      if (a !== null) {
        var v = a;
        e: for (;;) {
          if (v === null) return;
          var y = v.tag;
          if (y === S || y === T) {
            var C = v.stateNode.containerInfo;
            if (hb(C, p)) break;
            if (y === T)
              for (var w = v.return; w !== null; ) {
                var N = w.tag;
                if (N === S || N === T) {
                  var k = w.stateNode.containerInfo;
                  if (hb(k, p)) return;
                }
                w = w.return;
              }
            for (; C !== null; ) {
              var j = uo(C);
              if (j === null) return;
              var G = j.tag;
              if (G === D || G === O) {
                v = u = j;
                continue e;
              }
              C = C.parentNode;
            }
          }
          v = v.return;
        }
      }
    }
    Qy(function () {
      return g_(e, t, n, u);
    });
  }
  function Ps(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function b_(e, t, n, a, l, u) {
    for (
      var p = t !== null ? t + 'Capture' : null,
        v = a ? p : t,
        y = [],
        C = e,
        w = null;
      C !== null;

    ) {
      var N = C,
        k = N.stateNode,
        j = N.tag;
      if (j === D && k !== null && ((w = k), v !== null)) {
        var G = is(C, v);
        G != null && y.push(Ps(C, G, w));
      }
      if (l) break;
      C = C.return;
    }
    return y;
  }
  function kc(e, t) {
    for (var n = t + 'Capture', a = [], l = e; l !== null; ) {
      var u = l,
        p = u.stateNode,
        v = u.tag;
      if (v === D && p !== null) {
        var y = p,
          C = is(l, n);
        C != null && a.unshift(Ps(l, C, y));
        var w = is(l, t);
        w != null && a.push(Ps(l, w, y));
      }
      l = l.return;
    }
    return a;
  }
  function nl(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== D);
    return e || null;
  }
  function S_(e, t) {
    for (var n = e, a = t, l = 0, u = n; u; u = nl(u)) l++;
    for (var p = 0, v = a; v; v = nl(v)) p++;
    for (; l - p > 0; ) ((n = nl(n)), l--);
    for (; p - l > 0; ) ((a = nl(a)), p--);
    for (var y = l; y--; ) {
      if (n === a || (a !== null && n === a.alternate)) return n;
      ((n = nl(n)), (a = nl(a)));
    }
    return null;
  }
  function mb(e, t, n, a, l) {
    for (var u = t._reactName, p = [], v = n; v !== null && v !== a; ) {
      var y = v,
        C = y.alternate,
        w = y.stateNode,
        N = y.tag;
      if (C !== null && C === a) break;
      if (N === D && w !== null) {
        var k = w;
        if (l) {
          var j = is(v, u);
          j != null && p.unshift(Ps(v, j, k));
        } else if (!l) {
          var G = is(v, u);
          G != null && p.push(Ps(v, G, k));
        }
      }
      v = v.return;
    }
    p.length !== 0 && e.push({ event: t, listeners: p });
  }
  function E_(e, t, n, a, l) {
    var u = a && l ? S_(a, l) : null;
    (a !== null && mb(e, t, a, u, !1),
      l !== null && n !== null && mb(e, n, l, u, !0));
  }
  function C_(e, t) {
    return e + '__' + (t ? 'capture' : 'bubble');
  }
  var ur = !1,
    zs = 'dangerouslySetInnerHTML',
    Nc = 'suppressContentEditableWarning',
    bi = 'suppressHydrationWarning',
    yb = 'autoFocus',
    lo = 'children',
    so = 'style',
    Pc = '__html',
    tv,
    zc,
    Us,
    gb,
    Uc,
    bb,
    Sb;
  ((tv = { dialog: !0, webview: !0 }),
    (zc = function (e, t) {
      (ax(e, t),
        ix(e, t),
        cx(e, t, {
          registrationNameDependencies: at,
          possibleRegistrationNames: qe,
        }));
    }),
    (bb = it && !document.documentMode),
    (Us = function (e, t, n) {
      if (!ur) {
        var a = Fc(n),
          l = Fc(t);
        l !== a &&
          ((ur = !0),
          d(
            'Prop `%s` did not match. Server: %s Client: %s',
            e,
            JSON.stringify(l),
            JSON.stringify(a)
          ));
      }
    }),
    (gb = function (e) {
      if (!ur) {
        ur = !0;
        var t = [];
        (e.forEach(function (n) {
          t.push(n);
        }),
          d('Extra attributes from the server: %s', t));
      }
    }),
    (Uc = function (e, t) {
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
    (Sb = function (e, t) {
      var n =
        e.namespaceURI === Aa
          ? e.ownerDocument.createElement(e.tagName)
          : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return ((n.innerHTML = t), n.innerHTML);
    }));
  var w_ = /\r\n?/g,
    T_ = /\u0000|\uFFFD/g;
  function Fc(e) {
    W(e);
    var t = typeof e == 'string' ? e : '' + e;
    return t
      .replace(
        w_,
        `
`
      )
      .replace(T_, '');
  }
  function Vc(e, t, n, a) {
    var l = Fc(t),
      u = Fc(e);
    if (
      u !== l &&
      (a &&
        (ur ||
          ((ur = !0),
          d('Text content did not match. Server: "%s" Client: "%s"', u, l))),
      n && ve)
    )
      throw new Error('Text content does not match server-rendered HTML.');
  }
  function Eb(e) {
    return e.nodeType === La ? e : e.ownerDocument;
  }
  function x_() {}
  function Hc(e) {
    e.onclick = x_;
  }
  function R_(e, t, n, a, l) {
    for (var u in a)
      if (a.hasOwnProperty(u)) {
        var p = a[u];
        if (u === so) (p && Object.freeze(p), Fy(t, p));
        else if (u === zs) {
          var v = p ? p[Pc] : void 0;
          v != null && ky(t, v);
        } else if (u === lo)
          if (typeof p == 'string') {
            var y = e !== 'textarea' || p !== '';
            y && sc(t, p);
          } else typeof p == 'number' && sc(t, '' + p);
        else
          u === Nc ||
            u === bi ||
            u === yb ||
            (at.hasOwnProperty(u)
              ? p != null &&
                (typeof p != 'function' && Uc(u, p),
                u === 'onScroll' && Wt('scroll', t))
              : p != null && Ra(t, u, p, l));
      }
  }
  function __(e, t, n, a) {
    for (var l = 0; l < t.length; l += 2) {
      var u = t[l],
        p = t[l + 1];
      u === so
        ? Fy(e, p)
        : u === zs
          ? ky(e, p)
          : u === lo
            ? sc(e, p)
            : Ra(e, u, p, a);
    }
  }
  function D_(e, t, n, a) {
    var l,
      u = Eb(n),
      p,
      v = a;
    if ((v === Aa && (v = Hd(e)), v === Aa)) {
      if (
        ((l = Qi(e, t)),
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
        var w = p;
        t.multiple ? (w.multiple = !0) : t.size && (w.size = t.size);
      }
    } else p = u.createElementNS(v, e);
    return (
      v === Aa &&
        !l &&
        Object.prototype.toString.call(p) === '[object HTMLUnknownElement]' &&
        !dt.call(tv, e) &&
        ((tv[e] = !0),
        d(
          'The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.',
          e
        )),
      p
    );
  }
  function O_(e, t) {
    return Eb(t).createTextNode(e);
  }
  function A_(e, t, n, a) {
    var l = Qi(t, n);
    zc(t, n);
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
        for (var p = 0; p < ks.length; p++) Wt(ks[p], e);
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
        (ts(e, n), (u = es(e, n)), Wt('invalid', e));
        break;
      case 'textarea':
        (Ay(e, n), (u = Fd(e, n)), Wt('invalid', e));
        break;
      default:
        u = n;
    }
    switch ((Yd(t, u), R_(t, e, a, u, l), t)) {
      case 'input':
        (Da(e), be(e, n, !1));
        break;
      case 'textarea':
        (Da(e), Ly(e));
        break;
      case 'option':
        Gt(e, n);
        break;
      case 'select':
        Ud(e, n);
        break;
      default:
        typeof u.onClick == 'function' && Hc(e);
        break;
    }
  }
  function M_(e, t, n, a, l) {
    zc(t, a);
    var u = null,
      p,
      v;
    switch (t) {
      case 'input':
        ((p = b(e, n)), (v = b(e, a)), (u = []));
        break;
      case 'select':
        ((p = es(e, n)), (v = es(e, a)), (u = []));
        break;
      case 'textarea':
        ((p = Fd(e, n)), (v = Fd(e, a)), (u = []));
        break;
      default:
        ((p = n),
          (v = a),
          typeof p.onClick != 'function' &&
            typeof v.onClick == 'function' &&
            Hc(e));
        break;
    }
    Yd(t, v);
    var y,
      C,
      w = null;
    for (y in p)
      if (!(v.hasOwnProperty(y) || !p.hasOwnProperty(y) || p[y] == null))
        if (y === so) {
          var N = p[y];
          for (C in N) N.hasOwnProperty(C) && (w || (w = {}), (w[C] = ''));
        } else
          y === zs ||
            y === lo ||
            y === Nc ||
            y === bi ||
            y === yb ||
            (at.hasOwnProperty(y)
              ? u || (u = [])
              : (u = u || []).push(y, null));
    for (y in v) {
      var k = v[y],
        j = p != null ? p[y] : void 0;
      if (!(!v.hasOwnProperty(y) || k === j || (k == null && j == null)))
        if (y === so)
          if ((k && Object.freeze(k), j)) {
            for (C in j)
              j.hasOwnProperty(C) &&
                (!k || !k.hasOwnProperty(C)) &&
                (w || (w = {}), (w[C] = ''));
            for (C in k)
              k.hasOwnProperty(C) &&
                j[C] !== k[C] &&
                (w || (w = {}), (w[C] = k[C]));
          } else (w || (u || (u = []), u.push(y, w)), (w = k));
        else if (y === zs) {
          var G = k ? k[Pc] : void 0,
            K = j ? j[Pc] : void 0;
          G != null && K !== G && (u = u || []).push(y, G);
        } else
          y === lo
            ? (typeof k == 'string' || typeof k == 'number') &&
              (u = u || []).push(y, '' + k)
            : y === Nc ||
              y === bi ||
              (at.hasOwnProperty(y)
                ? (k != null &&
                    (typeof k != 'function' && Uc(y, k),
                    y === 'onScroll' && Wt('scroll', e)),
                  !u && j !== k && (u = []))
                : (u = u || []).push(y, k));
    }
    return (w && (QT(w, v[so]), (u = u || []).push(so, w)), u);
  }
  function L_(e, t, n, a, l) {
    n === 'input' && l.type === 'radio' && l.name != null && Y(e, l);
    var u = Qi(n, a),
      p = Qi(n, l);
    switch ((__(e, t, u, p), n)) {
      case 'input':
        Q(e, l);
        break;
      case 'textarea':
        My(e, l);
        break;
      case 'select':
        _T(e, l);
        break;
    }
  }
  function k_(e) {
    {
      var t = e.toLowerCase();
      return (uc.hasOwnProperty(t) && uc[t]) || null;
    }
  }
  function N_(e, t, n, a, l, u, p) {
    var v, y;
    switch (((v = Qi(t, n)), zc(t, n), t)) {
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
        for (var C = 0; C < ks.length; C++) Wt(ks[C], e);
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
        (ts(e, n), Wt('invalid', e));
        break;
      case 'textarea':
        (Ay(e, n), Wt('invalid', e));
        break;
    }
    Yd(t, n);
    {
      y = new Set();
      for (var w = e.attributes, N = 0; N < w.length; N++) {
        var k = w[N].name.toLowerCase();
        switch (k) {
          case 'value':
            break;
          case 'checked':
            break;
          case 'selected':
            break;
          default:
            y.add(w[N].name);
        }
      }
    }
    var j = null;
    for (var G in n)
      if (n.hasOwnProperty(G)) {
        var K = n[G];
        if (G === lo)
          typeof K == 'string'
            ? e.textContent !== K &&
              (n[bi] !== !0 && Vc(e.textContent, K, u, p), (j = [lo, K]))
            : typeof K == 'number' &&
              e.textContent !== '' + K &&
              (n[bi] !== !0 && Vc(e.textContent, K, u, p), (j = [lo, '' + K]));
        else if (at.hasOwnProperty(G))
          K != null &&
            (typeof K != 'function' && Uc(G, K),
            G === 'onScroll' && Wt('scroll', e));
        else if (p && typeof v == 'boolean') {
          var xe = void 0,
            Ie = v && Ee ? null : hr(G);
          if (n[bi] !== !0) {
            if (
              !(
                G === Nc ||
                G === bi ||
                G === 'value' ||
                G === 'checked' ||
                G === 'selected'
              )
            ) {
              if (G === zs) {
                var ze = e.innerHTML,
                  bt = K ? K[Pc] : void 0;
                if (bt != null) {
                  var pt = Sb(e, bt);
                  pt !== ze && Us(G, ze, pt);
                }
              } else if (G === so) {
                if ((y.delete(G), bb)) {
                  var H = qT(K);
                  ((xe = e.getAttribute('style')), H !== xe && Us(G, xe, H));
                }
              } else if (v && !Ee)
                (y.delete(G.toLowerCase()),
                  (xe = ri(e, G, K)),
                  K !== xe && Us(G, xe, K));
              else if (!Kt(G, Ie, v) && !Ut(G, K, Ie, v)) {
                var J = !1;
                if (Ie !== null)
                  (y.delete(Ie.attributeName), (xe = xa(e, G, K, Ie)));
                else {
                  var I = a;
                  if ((I === Aa && (I = Hd(t)), I === Aa))
                    y.delete(G.toLowerCase());
                  else {
                    var he = k_(G);
                    (he !== null && he !== G && ((J = !0), y.delete(he)),
                      y.delete(G));
                  }
                  xe = ri(e, G, K);
                }
                var Ae = Ee;
                !Ae && K !== xe && !J && Us(G, xe, K);
              }
            }
          }
        }
      }
    switch ((p && y.size > 0 && n[bi] !== !0 && gb(y), t)) {
      case 'input':
        (Da(e), be(e, n, !0));
        break;
      case 'textarea':
        (Da(e), Ly(e));
        break;
      case 'select':
      case 'option':
        break;
      default:
        typeof n.onClick == 'function' && Hc(e);
        break;
    }
    return j;
  }
  function P_(e, t, n) {
    var a = e.nodeValue !== t;
    return a;
  }
  function nv(e, t) {
    {
      if (ur) return;
      ((ur = !0),
        d(
          'Did not expect server HTML to contain a <%s> in <%s>.',
          t.nodeName.toLowerCase(),
          e.nodeName.toLowerCase()
        ));
    }
  }
  function rv(e, t) {
    {
      if (ur) return;
      ((ur = !0),
        d(
          'Did not expect server HTML to contain the text node "%s" in <%s>.',
          t.nodeValue,
          e.nodeName.toLowerCase()
        ));
    }
  }
  function av(e, t, n) {
    {
      if (ur) return;
      ((ur = !0),
        d(
          'Expected server HTML to contain a matching <%s> in <%s>.',
          t,
          e.nodeName.toLowerCase()
        ));
    }
  }
  function iv(e, t) {
    {
      if (t === '' || ur) return;
      ((ur = !0),
        d(
          'Expected server HTML to contain a matching text node for "%s" in <%s>.',
          t,
          e.nodeName.toLowerCase()
        ));
    }
  }
  function z_(e, t, n) {
    switch (t) {
      case 'input':
        Xe(e, n);
        return;
      case 'textarea':
        OT(e, n);
        return;
      case 'select':
        DT(e, n);
        return;
    }
  }
  var Fs = function () {},
    Vs = function () {};
  {
    var U_ = [
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
      Cb = [
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
      F_ = Cb.concat(['button']),
      V_ = ['dd', 'dt', 'li', 'option', 'optgroup', 'p', 'rp', 'rt'],
      wb = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null,
      };
    Vs = function (e, t) {
      var n = ct({}, e || wb),
        a = { tag: t };
      return (
        Cb.indexOf(t) !== -1 &&
          ((n.aTagInScope = null),
          (n.buttonTagInScope = null),
          (n.nobrTagInScope = null)),
        F_.indexOf(t) !== -1 && (n.pTagInButtonScope = null),
        U_.indexOf(t) !== -1 &&
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
    var H_ = function (e, t) {
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
            return V_.indexOf(t) === -1;
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
      I_ = function (e, t) {
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
      Tb = {};
    Fs = function (e, t, n) {
      n = n || wb;
      var a = n.current,
        l = a && a.tag;
      t != null &&
        (e != null &&
          d(
            'validateDOMNesting: when childText is passed, childTag should be null'
          ),
        (e = '#text'));
      var u = H_(e, l) ? null : a,
        p = u ? null : I_(e, n),
        v = u || p;
      if (v) {
        var y = v.tag,
          C = !!u + '|' + e + '|' + y;
        if (!Tb[C]) {
          Tb[C] = !0;
          var w = e,
            N = '';
          if (
            (e === '#text'
              ? /\S/.test(t)
                ? (w = 'Text nodes')
                : ((w = 'Whitespace text nodes'),
                  (N =
                    " Make sure you don't have any extra whitespace between tags on each line of your source code."))
              : (w = '<' + e + '>'),
            u)
          ) {
            var k = '';
            (y === 'table' &&
              e === 'tr' &&
              (k +=
                ' Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser.'),
              d(
                'validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s',
                w,
                y,
                N,
                k
              ));
          } else
            d(
              'validateDOMNesting(...): %s cannot appear as a descendant of <%s>.',
              w,
              y
            );
        }
      }
    };
  }
  var Ic = 'suppressHydrationWarning',
    Bc = '$',
    jc = '/$',
    Hs = '$?',
    Is = '$!',
    B_ = 'style',
    ov = null,
    lv = null;
  function j_(e) {
    var t,
      n,
      a = e.nodeType;
    switch (a) {
      case La:
      case Bd: {
        t = a === La ? '#document' : '#fragment';
        var l = e.documentElement;
        n = l ? l.namespaceURI : Id(null, '');
        break;
      }
      default: {
        var u = a === cn ? e.parentNode : e,
          p = u.namespaceURI || null;
        ((t = u.tagName), (n = Id(p, t)));
        break;
      }
    }
    {
      var v = t.toLowerCase(),
        y = Vs(null, v);
      return { namespace: n, ancestorInfo: y };
    }
  }
  function $_(e, t, n) {
    {
      var a = e,
        l = Id(a.namespace, t),
        u = Vs(a.ancestorInfo, t);
      return { namespace: l, ancestorInfo: u };
    }
  }
  function jz(e) {
    return e;
  }
  function Y_(e) {
    ((ov = BR()), (lv = i_()));
    var t = null;
    return (Lg(!1), t);
  }
  function G_(e) {
    (o_(lv), Lg(ov), (ov = null), (lv = null));
  }
  function W_(e, t, n, a, l) {
    var u;
    {
      var p = a;
      if (
        (Fs(e, null, p.ancestorInfo),
        typeof t.children == 'string' || typeof t.children == 'number')
      ) {
        var v = '' + t.children,
          y = Vs(p.ancestorInfo, e);
        Fs(null, v, y);
      }
      u = p.namespace;
    }
    var C = D_(e, t, n, u);
    return ($s(l, C), hv(C, t), C);
  }
  function q_(e, t) {
    e.appendChild(t);
  }
  function X_(e, t, n, a, l) {
    switch ((A_(e, t, n, a), t)) {
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
  function Q_(e, t, n, a, l, u) {
    {
      var p = u;
      if (
        typeof a.children != typeof n.children &&
        (typeof a.children == 'string' || typeof a.children == 'number')
      ) {
        var v = '' + a.children,
          y = Vs(p.ancestorInfo, t);
        Fs(null, v, y);
      }
    }
    return M_(e, t, n, a);
  }
  function sv(e, t) {
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
  function K_(e, t, n, a) {
    {
      var l = n;
      Fs(null, e, l.ancestorInfo);
    }
    var u = O_(e, t);
    return ($s(a, u), u);
  }
  function J_() {
    var e = window.event;
    return e === void 0 ? Va : kg(e.type);
  }
  var uv = typeof setTimeout == 'function' ? setTimeout : void 0,
    Z_ = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    cv = -1,
    xb = typeof Promise == 'function' ? Promise : void 0,
    eD =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof xb < 'u'
          ? function (e) {
              return xb.resolve(null).then(e).catch(tD);
            }
          : uv;
  function tD(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function nD(e, t, n, a) {
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
  function rD(e, t, n, a, l, u) {
    (L_(e, t, n, a, l), hv(e, l));
  }
  function Rb(e) {
    sc(e, '');
  }
  function aD(e, t, n) {
    e.nodeValue = n;
  }
  function iD(e, t) {
    e.appendChild(t);
  }
  function oD(e, t) {
    var n;
    e.nodeType === cn
      ? ((n = e.parentNode), n.insertBefore(t, e))
      : ((n = e), n.appendChild(t));
    var a = e._reactRootContainer;
    a == null && n.onclick === null && Hc(n);
  }
  function lD(e, t, n) {
    e.insertBefore(t, n);
  }
  function sD(e, t, n) {
    e.nodeType === cn ? e.parentNode.insertBefore(t, n) : e.insertBefore(t, n);
  }
  function uD(e, t) {
    e.removeChild(t);
  }
  function cD(e, t) {
    e.nodeType === cn ? e.parentNode.removeChild(t) : e.removeChild(t);
  }
  function fv(e, t) {
    var n = t,
      a = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === cn)) {
        var u = l.data;
        if (u === jc)
          if (a === 0) {
            (e.removeChild(l), ws(t));
            return;
          } else a--;
        else (u === Bc || u === Hs || u === Is) && a++;
      }
      n = l;
    } while (n);
    ws(t);
  }
  function fD(e, t) {
    (e.nodeType === cn ? fv(e.parentNode, t) : e.nodeType === sr && fv(e, t),
      ws(e));
  }
  function dD(e) {
    e = e;
    var t = e.style;
    typeof t.setProperty == 'function'
      ? t.setProperty('display', 'none', 'important')
      : (t.display = 'none');
  }
  function pD(e) {
    e.nodeValue = '';
  }
  function vD(e, t) {
    e = e;
    var n = t[B_],
      a = n != null && n.hasOwnProperty('display') ? n.display : null;
    e.style.display = jd('display', a);
  }
  function hD(e, t) {
    e.nodeValue = t;
  }
  function mD(e) {
    e.nodeType === sr
      ? (e.textContent = '')
      : e.nodeType === La &&
        e.documentElement &&
        e.removeChild(e.documentElement);
  }
  function yD(e, t, n) {
    return e.nodeType !== sr || t.toLowerCase() !== e.nodeName.toLowerCase()
      ? null
      : e;
  }
  function gD(e, t) {
    return t === '' || e.nodeType !== Ma ? null : e;
  }
  function bD(e) {
    return e.nodeType !== cn ? null : e;
  }
  function _b(e) {
    return e.data === Hs;
  }
  function dv(e) {
    return e.data === Is;
  }
  function SD(e) {
    var t = e.nextSibling && e.nextSibling.dataset,
      n,
      a,
      l;
    return (
      t && ((n = t.dgst), (a = t.msg), (l = t.stck)),
      { message: a, digest: n, stack: l }
    );
  }
  function ED(e, t) {
    e._reactRetry = t;
  }
  function $c(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === sr || t === Ma) break;
      if (t === cn) {
        var n = e.data;
        if (n === Bc || n === Is || n === Hs) break;
        if (n === jc) return null;
      }
    }
    return e;
  }
  function Bs(e) {
    return $c(e.nextSibling);
  }
  function CD(e) {
    return $c(e.firstChild);
  }
  function wD(e) {
    return $c(e.firstChild);
  }
  function TD(e) {
    return $c(e.nextSibling);
  }
  function xD(e, t, n, a, l, u, p) {
    ($s(u, e), hv(e, n));
    var v;
    {
      var y = l;
      v = y.namespace;
    }
    var C = (u.mode & yt) !== je;
    return N_(e, t, n, v, a, C, p);
  }
  function RD(e, t, n, a) {
    return ($s(n, e), n.mode & yt, P_(e, t));
  }
  function _D(e, t) {
    $s(t, e);
  }
  function DD(e) {
    for (var t = e.nextSibling, n = 0; t; ) {
      if (t.nodeType === cn) {
        var a = t.data;
        if (a === jc) {
          if (n === 0) return Bs(t);
          n--;
        } else (a === Bc || a === Is || a === Hs) && n++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Db(e) {
    for (var t = e.previousSibling, n = 0; t; ) {
      if (t.nodeType === cn) {
        var a = t.data;
        if (a === Bc || a === Is || a === Hs) {
          if (n === 0) return t;
          n--;
        } else a === jc && n++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function OD(e) {
    ws(e);
  }
  function AD(e) {
    ws(e);
  }
  function MD(e) {
    return e !== 'head' && e !== 'body';
  }
  function LD(e, t, n, a) {
    var l = !0;
    Vc(t.nodeValue, n, a, l);
  }
  function kD(e, t, n, a, l, u) {
    if (t[Ic] !== !0) {
      var p = !0;
      Vc(a.nodeValue, l, u, p);
    }
  }
  function ND(e, t) {
    t.nodeType === sr ? nv(e, t) : t.nodeType === cn || rv(e, t);
  }
  function PD(e, t) {
    {
      var n = e.parentNode;
      n !== null &&
        (t.nodeType === sr ? nv(n, t) : t.nodeType === cn || rv(n, t));
    }
  }
  function zD(e, t, n, a, l) {
    (l || t[Ic] !== !0) &&
      (a.nodeType === sr ? nv(n, a) : a.nodeType === cn || rv(n, a));
  }
  function UD(e, t, n) {
    av(e, t);
  }
  function FD(e, t) {
    iv(e, t);
  }
  function VD(e, t, n) {
    {
      var a = e.parentNode;
      a !== null && av(a, t);
    }
  }
  function HD(e, t) {
    {
      var n = e.parentNode;
      n !== null && iv(n, t);
    }
  }
  function ID(e, t, n, a, l, u) {
    (u || t[Ic] !== !0) && av(n, a);
  }
  function BD(e, t, n, a, l) {
    (l || t[Ic] !== !0) && iv(n, a);
  }
  function jD(e) {
    d(
      'An error occurred during hydration. The server HTML was replaced with client content in <%s>.',
      e.nodeName.toLowerCase()
    );
  }
  function $D(e) {
    Ns(e);
  }
  var rl = Math.random().toString(36).slice(2),
    al = '__reactFiber$' + rl,
    pv = '__reactProps$' + rl,
    js = '__reactContainer$' + rl,
    vv = '__reactEvents$' + rl,
    YD = '__reactListeners$' + rl,
    GD = '__reactHandles$' + rl;
  function WD(e) {
    (delete e[al], delete e[pv], delete e[vv], delete e[YD], delete e[GD]);
  }
  function $s(e, t) {
    t[al] = e;
  }
  function Yc(e, t) {
    t[js] = e;
  }
  function Ob(e) {
    e[js] = null;
  }
  function Ys(e) {
    return !!e[js];
  }
  function uo(e) {
    var t = e[al];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (((t = n[js] || n[al]), t)) {
        var a = t.alternate;
        if (t.child !== null || (a !== null && a.child !== null))
          for (var l = Db(e); l !== null; ) {
            var u = l[al];
            if (u) return u;
            l = Db(l);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function Si(e) {
    var t = e[al] || e[js];
    return t && (t.tag === D || t.tag === O || t.tag === F || t.tag === S)
      ? t
      : null;
  }
  function il(e) {
    if (e.tag === D || e.tag === O) return e.stateNode;
    throw new Error('getNodeFromInstance: Invalid argument.');
  }
  function Gc(e) {
    return e[pv] || null;
  }
  function hv(e, t) {
    e[pv] = t;
  }
  function qD(e) {
    var t = e[vv];
    return (t === void 0 && (t = e[vv] = new Set()), t);
  }
  var Ab = {},
    Mb = o.ReactDebugCurrentFrame;
  function Wc(e) {
    if (e) {
      var t = e._owner,
        n = si(e.type, e._source, t ? t.type : null);
      Mb.setExtraStackFrame(n);
    } else Mb.setExtraStackFrame(null);
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
            (Wc(l),
            d(
              '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
              a || 'React class',
              n,
              p,
              typeof v
            ),
            Wc(null)),
            v instanceof Error &&
              !(v.message in Ab) &&
              ((Ab[v.message] = !0),
              Wc(l),
              d('Failed %s type: %s', n, v.message),
              Wc(null)));
        }
    }
  }
  var mv = [],
    qc;
  qc = [];
  var Ha = -1;
  function Ei(e) {
    return { current: e };
  }
  function Gn(e, t) {
    if (Ha < 0) {
      d('Unexpected pop.');
      return;
    }
    (t !== qc[Ha] && d('Unexpected Fiber popped.'),
      (e.current = mv[Ha]),
      (mv[Ha] = null),
      (qc[Ha] = null),
      Ha--);
  }
  function Wn(e, t, n) {
    (Ha++, (mv[Ha] = e.current), (qc[Ha] = n), (e.current = t));
  }
  var yv;
  yv = {};
  var wr = {};
  Object.freeze(wr);
  var Ia = Ei(wr),
    ca = Ei(!1),
    gv = wr;
  function ol(e, t, n) {
    return n && fa(t) ? gv : Ia.current;
  }
  function Lb(e, t, n) {
    {
      var a = e.stateNode;
      ((a.__reactInternalMemoizedUnmaskedChildContext = t),
        (a.__reactInternalMemoizedMaskedChildContext = n));
    }
  }
  function ll(e, t) {
    {
      var n = e.type,
        a = n.contextTypes;
      if (!a) return wr;
      var l = e.stateNode;
      if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
        return l.__reactInternalMemoizedMaskedChildContext;
      var u = {};
      for (var p in a) u[p] = t[p];
      {
        var v = lt(e) || 'Unknown';
        jr(a, u, 'context', v);
      }
      return (l && Lb(e, t, u), u);
    }
  }
  function Xc() {
    return ca.current;
  }
  function fa(e) {
    {
      var t = e.childContextTypes;
      return t != null;
    }
  }
  function Qc(e) {
    (Gn(ca, e), Gn(Ia, e));
  }
  function bv(e) {
    (Gn(ca, e), Gn(Ia, e));
  }
  function kb(e, t, n) {
    {
      if (Ia.current !== wr)
        throw new Error(
          'Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.'
        );
      (Wn(Ia, t, e), Wn(ca, n, e));
    }
  }
  function Nb(e, t, n) {
    {
      var a = e.stateNode,
        l = t.childContextTypes;
      if (typeof a.getChildContext != 'function') {
        {
          var u = lt(e) || 'Unknown';
          yv[u] ||
            ((yv[u] = !0),
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
  function Kc(e) {
    {
      var t = e.stateNode,
        n = (t && t.__reactInternalMemoizedMergedChildContext) || wr;
      return ((gv = Ia.current), Wn(Ia, n, e), Wn(ca, ca.current, e), !0);
    }
  }
  function Pb(e, t, n) {
    {
      var a = e.stateNode;
      if (!a)
        throw new Error(
          'Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.'
        );
      if (n) {
        var l = Nb(e, t, gv);
        ((a.__reactInternalMemoizedMergedChildContext = l),
          Gn(ca, e),
          Gn(Ia, e),
          Wn(Ia, l, e),
          Wn(ca, n, e));
      } else (Gn(ca, e), Wn(ca, n, e));
    }
  }
  function XD(e) {
    {
      if (!Mx(e) || e.tag !== g)
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
  var Ci = 0,
    Jc = 1,
    Ba = null,
    Sv = !1,
    Ev = !1;
  function zb(e) {
    Ba === null ? (Ba = [e]) : Ba.push(e);
  }
  function QD(e) {
    ((Sv = !0), zb(e));
  }
  function Ub() {
    Sv && wi();
  }
  function wi() {
    if (!Ev && Ba !== null) {
      Ev = !0;
      var e = 0,
        t = Br();
      try {
        var n = !0,
          a = Ba;
        for (An(Sr); e < a.length; e++) {
          var l = a[e];
          do l = l(n);
          while (l !== null);
        }
        ((Ba = null), (Sv = !1));
      } catch (u) {
        throw (Ba !== null && (Ba = Ba.slice(e + 1)), lg(vc, wi), u);
      } finally {
        (An(t), (Ev = !1));
      }
    }
    return null;
  }
  var sl = [],
    ul = 0,
    Zc = null,
    ef = 0,
    Ar = [],
    Mr = 0,
    co = null,
    ja = 1,
    $a = '';
  function KD(e) {
    return (po(), (e.flags & Zy) !== We);
  }
  function JD(e) {
    return (po(), ef);
  }
  function ZD() {
    var e = $a,
      t = ja,
      n = t & ~e1(t);
    return n.toString(32) + e;
  }
  function fo(e, t) {
    (po(), (sl[ul++] = ef), (sl[ul++] = Zc), (Zc = e), (ef = t));
  }
  function Fb(e, t, n) {
    (po(), (Ar[Mr++] = ja), (Ar[Mr++] = $a), (Ar[Mr++] = co), (co = e));
    var a = ja,
      l = $a,
      u = tf(a) - 1,
      p = a & ~(1 << u),
      v = n + 1,
      y = tf(t) + u;
    if (y > 30) {
      var C = u - (u % 5),
        w = (1 << C) - 1,
        N = (p & w).toString(32),
        k = p >> C,
        j = u - C,
        G = tf(t) + j,
        K = v << j,
        xe = K | k,
        Ie = N + l;
      ((ja = (1 << G) | xe), ($a = Ie));
    } else {
      var ze = v << u,
        bt = ze | p,
        pt = l;
      ((ja = (1 << y) | bt), ($a = pt));
    }
  }
  function Cv(e) {
    po();
    var t = e.return;
    if (t !== null) {
      var n = 1,
        a = 0;
      (fo(e, n), Fb(e, n, a));
    }
  }
  function tf(e) {
    return 32 - pg(e);
  }
  function e1(e) {
    return 1 << (tf(e) - 1);
  }
  function wv(e) {
    for (; e === Zc; )
      ((Zc = sl[--ul]), (sl[ul] = null), (ef = sl[--ul]), (sl[ul] = null));
    for (; e === co; )
      ((co = Ar[--Mr]),
        (Ar[Mr] = null),
        ($a = Ar[--Mr]),
        (Ar[Mr] = null),
        (ja = Ar[--Mr]),
        (Ar[Mr] = null));
  }
  function t1() {
    return (po(), co !== null ? { id: ja, overflow: $a } : null);
  }
  function n1(e, t) {
    (po(),
      (Ar[Mr++] = ja),
      (Ar[Mr++] = $a),
      (Ar[Mr++] = co),
      (ja = t.id),
      ($a = t.overflow),
      (co = e));
  }
  function po() {
    Nn() ||
      d(
        'Expected to be hydrating. This is a bug in React. Please file an issue.'
      );
  }
  var kn = null,
    Lr = null,
    $r = !1,
    vo = !1,
    Ti = null;
  function r1() {
    $r &&
      d(
        'We should not be hydrating here. This is a bug in React. Please file a bug.'
      );
  }
  function Vb() {
    vo = !0;
  }
  function a1() {
    return vo;
  }
  function i1(e) {
    var t = e.stateNode.containerInfo;
    return ((Lr = wD(t)), (kn = e), ($r = !0), (Ti = null), (vo = !1), !0);
  }
  function o1(e, t, n) {
    return (
      (Lr = TD(t)),
      (kn = e),
      ($r = !0),
      (Ti = null),
      (vo = !1),
      n !== null && n1(e, n),
      !0
    );
  }
  function Hb(e, t) {
    switch (e.tag) {
      case S: {
        ND(e.stateNode.containerInfo, t);
        break;
      }
      case D: {
        var n = (e.mode & yt) !== je;
        zD(e.type, e.memoizedProps, e.stateNode, t, n);
        break;
      }
      case F: {
        var a = e.memoizedState;
        a.dehydrated !== null && PD(a.dehydrated, t);
        break;
      }
    }
  }
  function Ib(e, t) {
    Hb(e, t);
    var n = cM();
    ((n.stateNode = t), (n.return = e));
    var a = e.deletions;
    a === null ? ((e.deletions = [n]), (e.flags |= Ki)) : a.push(n);
  }
  function Tv(e, t) {
    {
      if (vo) return;
      switch (e.tag) {
        case S: {
          var n = e.stateNode.containerInfo;
          switch (t.tag) {
            case D:
              var a = t.type;
              (t.pendingProps, UD(n, a));
              break;
            case O:
              var l = t.pendingProps;
              FD(n, l);
              break;
          }
          break;
        }
        case D: {
          var u = e.type,
            p = e.memoizedProps,
            v = e.stateNode;
          switch (t.tag) {
            case D: {
              var y = t.type,
                C = t.pendingProps,
                w = (e.mode & yt) !== je;
              ID(u, p, v, y, C, w);
              break;
            }
            case O: {
              var N = t.pendingProps,
                k = (e.mode & yt) !== je;
              BD(u, p, v, N, k);
              break;
            }
          }
          break;
        }
        case F: {
          var j = e.memoizedState,
            G = j.dehydrated;
          if (G !== null)
            switch (t.tag) {
              case D:
                var K = t.type;
                (t.pendingProps, VD(G, K));
                break;
              case O:
                var xe = t.pendingProps;
                HD(G, xe);
                break;
            }
          break;
        }
        default:
          return;
      }
    }
  }
  function Bb(e, t) {
    ((t.flags = (t.flags & ~Na) | fn), Tv(e, t));
  }
  function jb(e, t) {
    switch (e.tag) {
      case D: {
        var n = e.type;
        e.pendingProps;
        var a = yD(t, n);
        return a !== null
          ? ((e.stateNode = a), (kn = e), (Lr = CD(a)), !0)
          : !1;
      }
      case O: {
        var l = e.pendingProps,
          u = gD(t, l);
        return u !== null ? ((e.stateNode = u), (kn = e), (Lr = null), !0) : !1;
      }
      case F: {
        var p = bD(t);
        if (p !== null) {
          var v = { dehydrated: p, treeContext: t1(), retryLane: gr };
          e.memoizedState = v;
          var y = fM(p);
          return ((y.return = e), (e.child = y), (kn = e), (Lr = null), !0);
        }
        return !1;
      }
      default:
        return !1;
    }
  }
  function xv(e) {
    return (e.mode & yt) !== je && (e.flags & Dt) === We;
  }
  function Rv(e) {
    throw new Error(
      'Hydration failed because the initial UI does not match what was rendered on the server.'
    );
  }
  function _v(e) {
    if ($r) {
      var t = Lr;
      if (!t) {
        (xv(e) && (Tv(kn, e), Rv()), Bb(kn, e), ($r = !1), (kn = e));
        return;
      }
      var n = t;
      if (!jb(e, t)) {
        (xv(e) && (Tv(kn, e), Rv()), (t = Bs(n)));
        var a = kn;
        if (!t || !jb(e, t)) {
          (Bb(kn, e), ($r = !1), (kn = e));
          return;
        }
        Ib(a, n);
      }
    }
  }
  function l1(e, t, n) {
    var a = e.stateNode,
      l = !vo,
      u = xD(a, e.type, e.memoizedProps, t, n, e, l);
    return ((e.updateQueue = u), u !== null);
  }
  function s1(e) {
    var t = e.stateNode,
      n = e.memoizedProps,
      a = RD(t, n, e);
    if (a) {
      var l = kn;
      if (l !== null)
        switch (l.tag) {
          case S: {
            var u = l.stateNode.containerInfo,
              p = (l.mode & yt) !== je;
            LD(u, t, n, p);
            break;
          }
          case D: {
            var v = l.type,
              y = l.memoizedProps,
              C = l.stateNode,
              w = (l.mode & yt) !== je;
            kD(v, y, C, t, n, w);
            break;
          }
        }
    }
    return a;
  }
  function u1(e) {
    var t = e.memoizedState,
      n = t !== null ? t.dehydrated : null;
    if (!n)
      throw new Error(
        'Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.'
      );
    _D(n, e);
  }
  function c1(e) {
    var t = e.memoizedState,
      n = t !== null ? t.dehydrated : null;
    if (!n)
      throw new Error(
        'Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.'
      );
    return DD(n);
  }
  function $b(e) {
    for (
      var t = e.return;
      t !== null && t.tag !== D && t.tag !== S && t.tag !== F;

    )
      t = t.return;
    kn = t;
  }
  function nf(e) {
    if (e !== kn) return !1;
    if (!$r) return ($b(e), ($r = !0), !1);
    if (
      e.tag !== S &&
      (e.tag !== D || (MD(e.type) && !sv(e.type, e.memoizedProps)))
    ) {
      var t = Lr;
      if (t)
        if (xv(e)) (Yb(e), Rv());
        else for (; t; ) (Ib(e, t), (t = Bs(t)));
    }
    return (
      $b(e),
      e.tag === F ? (Lr = c1(e)) : (Lr = kn ? Bs(e.stateNode) : null),
      !0
    );
  }
  function f1() {
    return $r && Lr !== null;
  }
  function Yb(e) {
    for (var t = Lr; t; ) (Hb(e, t), (t = Bs(t)));
  }
  function cl() {
    ((kn = null), (Lr = null), ($r = !1), (vo = !1));
  }
  function Gb() {
    Ti !== null && (VE(Ti), (Ti = null));
  }
  function Nn() {
    return $r;
  }
  function Dv(e) {
    Ti === null ? (Ti = [e]) : Ti.push(e);
  }
  var d1 = o.ReactCurrentBatchConfig,
    p1 = null;
  function v1() {
    return d1.transition;
  }
  var Yr = {
    recordUnsafeLifecycleWarnings: function (e, t) {},
    flushPendingUnsafeLifecycleWarnings: function () {},
    recordLegacyContextWarning: function (e, t) {},
    flushLegacyContextWarning: function () {},
    discardPendingWarnings: function () {},
  };
  {
    var h1 = function (e) {
        for (var t = null, n = e; n !== null; )
          (n.mode & an && (t = n), (n = n.return));
        return t;
      },
      ho = function (e) {
        var t = [];
        return (
          e.forEach(function (n) {
            t.push(n);
          }),
          t.sort().join(', ')
        );
      },
      Gs = [],
      Ws = [],
      qs = [],
      Xs = [],
      Qs = [],
      Ks = [],
      mo = new Set();
    ((Yr.recordUnsafeLifecycleWarnings = function (e, t) {
      mo.has(e.type) ||
        (typeof t.componentWillMount == 'function' &&
          t.componentWillMount.__suppressDeprecationWarning !== !0 &&
          Gs.push(e),
        e.mode & an &&
          typeof t.UNSAFE_componentWillMount == 'function' &&
          Ws.push(e),
        typeof t.componentWillReceiveProps == 'function' &&
          t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 &&
          qs.push(e),
        e.mode & an &&
          typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
          Xs.push(e),
        typeof t.componentWillUpdate == 'function' &&
          t.componentWillUpdate.__suppressDeprecationWarning !== !0 &&
          Qs.push(e),
        e.mode & an &&
          typeof t.UNSAFE_componentWillUpdate == 'function' &&
          Ks.push(e));
    }),
      (Yr.flushPendingUnsafeLifecycleWarnings = function () {
        var e = new Set();
        Gs.length > 0 &&
          (Gs.forEach(function (k) {
            (e.add(lt(k) || 'Component'), mo.add(k.type));
          }),
          (Gs = []));
        var t = new Set();
        Ws.length > 0 &&
          (Ws.forEach(function (k) {
            (t.add(lt(k) || 'Component'), mo.add(k.type));
          }),
          (Ws = []));
        var n = new Set();
        qs.length > 0 &&
          (qs.forEach(function (k) {
            (n.add(lt(k) || 'Component'), mo.add(k.type));
          }),
          (qs = []));
        var a = new Set();
        Xs.length > 0 &&
          (Xs.forEach(function (k) {
            (a.add(lt(k) || 'Component'), mo.add(k.type));
          }),
          (Xs = []));
        var l = new Set();
        Qs.length > 0 &&
          (Qs.forEach(function (k) {
            (l.add(lt(k) || 'Component'), mo.add(k.type));
          }),
          (Qs = []));
        var u = new Set();
        if (
          (Ks.length > 0 &&
            (Ks.forEach(function (k) {
              (u.add(lt(k) || 'Component'), mo.add(k.type));
            }),
            (Ks = [])),
          t.size > 0)
        ) {
          var p = ho(t);
          d(
            `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
            p
          );
        }
        if (a.size > 0) {
          var v = ho(a);
          d(
            `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`,
            v
          );
        }
        if (u.size > 0) {
          var y = ho(u);
          d(
            `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
            y
          );
        }
        if (e.size > 0) {
          var C = ho(e);
          f(
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
            C
          );
        }
        if (n.size > 0) {
          var w = ho(n);
          f(
            `componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
            w
          );
        }
        if (l.size > 0) {
          var N = ho(l);
          f(
            `componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
            N
          );
        }
      }));
    var rf = new Map(),
      Wb = new Set();
    ((Yr.recordLegacyContextWarning = function (e, t) {
      var n = h1(e);
      if (n === null) {
        d(
          'Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.'
        );
        return;
      }
      if (!Wb.has(e.type)) {
        var a = rf.get(n);
        (e.type.contextTypes != null ||
          e.type.childContextTypes != null ||
          (t !== null && typeof t.getChildContext == 'function')) &&
          (a === void 0 && ((a = []), rf.set(n, a)), a.push(e));
      }
    }),
      (Yr.flushLegacyContextWarning = function () {
        rf.forEach(function (e, t) {
          if (e.length !== 0) {
            var n = e[0],
              a = new Set();
            e.forEach(function (u) {
              (a.add(lt(u) || 'Component'), Wb.add(u.type));
            });
            var l = ho(a);
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
        ((Gs = []),
          (Ws = []),
          (qs = []),
          (Xs = []),
          (Qs = []),
          (Ks = []),
          (rf = new Map()));
      }));
  }
  var Ov,
    Av,
    Mv,
    Lv,
    kv,
    qb = function (e, t) {};
  ((Ov = !1),
    (Av = !1),
    (Mv = {}),
    (Lv = {}),
    (kv = {}),
    (qb = function (e, t) {
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
        Lv[n] ||
          ((Lv[n] = !0),
          d(
            'Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'
          ));
      }
    }));
  function m1(e) {
    return e.prototype && e.prototype.isReactComponent;
  }
  function Js(e, t, n) {
    var a = n.ref;
    if (a !== null && typeof a != 'function' && typeof a != 'object') {
      if (
        (e.mode & an || Te) &&
        !(n._owner && n._self && n._owner.stateNode !== n._self) &&
        !(n._owner && n._owner.tag !== g) &&
        !(typeof n.type == 'function' && !m1(n.type)) &&
        n._owner
      ) {
        var l = lt(e) || 'Component';
        Mv[l] ||
          (d(
            'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
            l,
            a
          ),
          (Mv[l] = !0));
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
        var w = function (N) {
          var k = y.refs;
          N === null ? delete k[C] : (k[C] = N);
        };
        return ((w._stringRef = C), w);
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
  function af(e, t) {
    var n = Object.prototype.toString.call(t);
    throw new Error(
      'Objects are not valid as a React child (found: ' +
        (n === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : n) +
        '). If you meant to render a collection of children, use an array instead.'
    );
  }
  function of(e) {
    {
      var t = lt(e) || 'Component';
      if (kv[t]) return;
      ((kv[t] = !0),
        d(
          'Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.'
        ));
    }
  }
  function Xb(e) {
    var t = e._payload,
      n = e._init;
    return n(t);
  }
  function Qb(e) {
    function t(H, J) {
      if (e) {
        var I = H.deletions;
        I === null ? ((H.deletions = [J]), (H.flags |= Ki)) : I.push(J);
      }
    }
    function n(H, J) {
      if (!e) return null;
      for (var I = J; I !== null; ) (t(H, I), (I = I.sibling));
      return null;
    }
    function a(H, J) {
      for (var I = new Map(), he = J; he !== null; )
        (he.key !== null ? I.set(he.key, he) : I.set(he.index, he),
          (he = he.sibling));
      return I;
    }
    function l(H, J) {
      var I = xo(H, J);
      return ((I.index = 0), (I.sibling = null), I);
    }
    function u(H, J, I) {
      if (((H.index = I), !e)) return ((H.flags |= Zy), J);
      var he = H.alternate;
      if (he !== null) {
        var Ae = he.index;
        return Ae < J ? ((H.flags |= fn), J) : Ae;
      } else return ((H.flags |= fn), J);
    }
    function p(H) {
      return (e && H.alternate === null && (H.flags |= fn), H);
    }
    function v(H, J, I, he) {
      if (J === null || J.tag !== O) {
        var Ae = Dm(I, H.mode, he);
        return ((Ae.return = H), Ae);
      } else {
        var Re = l(J, I);
        return ((Re.return = H), Re);
      }
    }
    function y(H, J, I, he) {
      var Ae = I.type;
      if (Ae === aa) return w(H, J, I.props.children, he, I.key);
      if (
        J !== null &&
        (J.elementType === Ae ||
          tC(J, I) ||
          (typeof Ae == 'object' &&
            Ae !== null &&
            Ae.$$typeof === Ge &&
            Xb(Ae) === J.type))
      ) {
        var Re = l(J, I.props);
        return (
          (Re.ref = Js(H, J, I)),
          (Re.return = H),
          (Re._debugSource = I._source),
          (Re._debugOwner = I._owner),
          Re
        );
      }
      var Qe = _m(I, H.mode, he);
      return ((Qe.ref = Js(H, J, I)), (Qe.return = H), Qe);
    }
    function C(H, J, I, he) {
      if (
        J === null ||
        J.tag !== T ||
        J.stateNode.containerInfo !== I.containerInfo ||
        J.stateNode.implementation !== I.implementation
      ) {
        var Ae = Om(I, H.mode, he);
        return ((Ae.return = H), Ae);
      } else {
        var Re = l(J, I.children || []);
        return ((Re.return = H), Re);
      }
    }
    function w(H, J, I, he, Ae) {
      if (J === null || J.tag !== x) {
        var Re = Pi(I, H.mode, he, Ae);
        return ((Re.return = H), Re);
      } else {
        var Qe = l(J, I);
        return ((Qe.return = H), Qe);
      }
    }
    function N(H, J, I) {
      if ((typeof J == 'string' && J !== '') || typeof J == 'number') {
        var he = Dm('' + J, H.mode, I);
        return ((he.return = H), he);
      }
      if (typeof J == 'object' && J !== null) {
        switch (J.$$typeof) {
          case Fr: {
            var Ae = _m(J, H.mode, I);
            return ((Ae.ref = Js(H, null, J)), (Ae.return = H), Ae);
          }
          case Vr: {
            var Re = Om(J, H.mode, I);
            return ((Re.return = H), Re);
          }
          case Ge: {
            var Qe = J._payload,
              rt = J._init;
            return N(H, rt(Qe), I);
          }
        }
        if (_t(J) || mr(J)) {
          var Pt = Pi(J, H.mode, I, null);
          return ((Pt.return = H), Pt);
        }
        af(H, J);
      }
      return (typeof J == 'function' && of(H), null);
    }
    function k(H, J, I, he) {
      var Ae = J !== null ? J.key : null;
      if ((typeof I == 'string' && I !== '') || typeof I == 'number')
        return Ae !== null ? null : v(H, J, '' + I, he);
      if (typeof I == 'object' && I !== null) {
        switch (I.$$typeof) {
          case Fr:
            return I.key === Ae ? y(H, J, I, he) : null;
          case Vr:
            return I.key === Ae ? C(H, J, I, he) : null;
          case Ge: {
            var Re = I._payload,
              Qe = I._init;
            return k(H, J, Qe(Re), he);
          }
        }
        if (_t(I) || mr(I)) return Ae !== null ? null : w(H, J, I, he, null);
        af(H, I);
      }
      return (typeof I == 'function' && of(H), null);
    }
    function j(H, J, I, he, Ae) {
      if ((typeof he == 'string' && he !== '') || typeof he == 'number') {
        var Re = H.get(I) || null;
        return v(J, Re, '' + he, Ae);
      }
      if (typeof he == 'object' && he !== null) {
        switch (he.$$typeof) {
          case Fr: {
            var Qe = H.get(he.key === null ? I : he.key) || null;
            return y(J, Qe, he, Ae);
          }
          case Vr: {
            var rt = H.get(he.key === null ? I : he.key) || null;
            return C(J, rt, he, Ae);
          }
          case Ge:
            var Pt = he._payload,
              xt = he._init;
            return j(H, J, I, xt(Pt), Ae);
        }
        if (_t(he) || mr(he)) {
          var sn = H.get(I) || null;
          return w(J, sn, he, Ae, null);
        }
        af(J, he);
      }
      return (typeof he == 'function' && of(J), null);
    }
    function G(H, J, I) {
      {
        if (typeof H != 'object' || H === null) return J;
        switch (H.$$typeof) {
          case Fr:
          case Vr:
            qb(H, I);
            var he = H.key;
            if (typeof he != 'string') break;
            if (J === null) {
              ((J = new Set()), J.add(he));
              break;
            }
            if (!J.has(he)) {
              J.add(he);
              break;
            }
            d(
              'Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.',
              he
            );
            break;
          case Ge:
            var Ae = H._payload,
              Re = H._init;
            G(Re(Ae), J, I);
            break;
        }
      }
      return J;
    }
    function K(H, J, I, he) {
      for (var Ae = null, Re = 0; Re < I.length; Re++) {
        var Qe = I[Re];
        Ae = G(Qe, Ae, H);
      }
      for (
        var rt = null, Pt = null, xt = J, sn = 0, Rt = 0, on = null;
        xt !== null && Rt < I.length;
        Rt++
      ) {
        xt.index > Rt ? ((on = xt), (xt = null)) : (on = xt.sibling);
        var Xn = k(H, xt, I[Rt], he);
        if (Xn === null) {
          xt === null && (xt = on);
          break;
        }
        (e && xt && Xn.alternate === null && t(H, xt),
          (sn = u(Xn, sn, Rt)),
          Pt === null ? (rt = Xn) : (Pt.sibling = Xn),
          (Pt = Xn),
          (xt = on));
      }
      if (Rt === I.length) {
        if ((n(H, xt), Nn())) {
          var In = Rt;
          fo(H, In);
        }
        return rt;
      }
      if (xt === null) {
        for (; Rt < I.length; Rt++) {
          var xr = N(H, I[Rt], he);
          xr !== null &&
            ((sn = u(xr, sn, Rt)),
            Pt === null ? (rt = xr) : (Pt.sibling = xr),
            (Pt = xr));
        }
        if (Nn()) {
          var rr = Rt;
          fo(H, rr);
        }
        return rt;
      }
      for (var ar = a(H, xt); Rt < I.length; Rt++) {
        var Qn = j(ar, H, Rt, I[Rt], he);
        Qn !== null &&
          (e &&
            Qn.alternate !== null &&
            ar.delete(Qn.key === null ? Rt : Qn.key),
          (sn = u(Qn, sn, Rt)),
          Pt === null ? (rt = Qn) : (Pt.sibling = Qn),
          (Pt = Qn));
      }
      if (
        (e &&
          ar.forEach(function (Ol) {
            return t(H, Ol);
          }),
        Nn())
      ) {
        var Ka = Rt;
        fo(H, Ka);
      }
      return rt;
    }
    function xe(H, J, I, he) {
      var Ae = mr(I);
      if (typeof Ae != 'function')
        throw new Error(
          'An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.'
        );
      {
        (typeof Symbol == 'function' &&
          I[Symbol.toStringTag] === 'Generator' &&
          (Av ||
            d(
              'Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers.'
            ),
          (Av = !0)),
          I.entries === Ae &&
            (Ov ||
              d(
                'Using Maps as children is not supported. Use an array of keyed ReactElements instead.'
              ),
            (Ov = !0)));
        var Re = Ae.call(I);
        if (Re)
          for (var Qe = null, rt = Re.next(); !rt.done; rt = Re.next()) {
            var Pt = rt.value;
            Qe = G(Pt, Qe, H);
          }
      }
      var xt = Ae.call(I);
      if (xt == null)
        throw new Error('An iterable object provided no iterator.');
      for (
        var sn = null,
          Rt = null,
          on = J,
          Xn = 0,
          In = 0,
          xr = null,
          rr = xt.next();
        on !== null && !rr.done;
        In++, rr = xt.next()
      ) {
        on.index > In ? ((xr = on), (on = null)) : (xr = on.sibling);
        var ar = k(H, on, rr.value, he);
        if (ar === null) {
          on === null && (on = xr);
          break;
        }
        (e && on && ar.alternate === null && t(H, on),
          (Xn = u(ar, Xn, In)),
          Rt === null ? (sn = ar) : (Rt.sibling = ar),
          (Rt = ar),
          (on = xr));
      }
      if (rr.done) {
        if ((n(H, on), Nn())) {
          var Qn = In;
          fo(H, Qn);
        }
        return sn;
      }
      if (on === null) {
        for (; !rr.done; In++, rr = xt.next()) {
          var Ka = N(H, rr.value, he);
          Ka !== null &&
            ((Xn = u(Ka, Xn, In)),
            Rt === null ? (sn = Ka) : (Rt.sibling = Ka),
            (Rt = Ka));
        }
        if (Nn()) {
          var Ol = In;
          fo(H, Ol);
        }
        return sn;
      }
      for (var Au = a(H, on); !rr.done; In++, rr = xt.next()) {
        var ba = j(Au, H, In, rr.value, he);
        ba !== null &&
          (e &&
            ba.alternate !== null &&
            Au.delete(ba.key === null ? In : ba.key),
          (Xn = u(ba, Xn, In)),
          Rt === null ? (sn = ba) : (Rt.sibling = ba),
          (Rt = ba));
      }
      if (
        (e &&
          Au.forEach(function (BM) {
            return t(H, BM);
          }),
        Nn())
      ) {
        var IM = In;
        fo(H, IM);
      }
      return sn;
    }
    function Ie(H, J, I, he) {
      if (J !== null && J.tag === O) {
        n(H, J.sibling);
        var Ae = l(J, I);
        return ((Ae.return = H), Ae);
      }
      n(H, J);
      var Re = Dm(I, H.mode, he);
      return ((Re.return = H), Re);
    }
    function ze(H, J, I, he) {
      for (var Ae = I.key, Re = J; Re !== null; ) {
        if (Re.key === Ae) {
          var Qe = I.type;
          if (Qe === aa) {
            if (Re.tag === x) {
              n(H, Re.sibling);
              var rt = l(Re, I.props.children);
              return (
                (rt.return = H),
                (rt._debugSource = I._source),
                (rt._debugOwner = I._owner),
                rt
              );
            }
          } else if (
            Re.elementType === Qe ||
            tC(Re, I) ||
            (typeof Qe == 'object' &&
              Qe !== null &&
              Qe.$$typeof === Ge &&
              Xb(Qe) === Re.type)
          ) {
            n(H, Re.sibling);
            var Pt = l(Re, I.props);
            return (
              (Pt.ref = Js(H, Re, I)),
              (Pt.return = H),
              (Pt._debugSource = I._source),
              (Pt._debugOwner = I._owner),
              Pt
            );
          }
          n(H, Re);
          break;
        } else t(H, Re);
        Re = Re.sibling;
      }
      if (I.type === aa) {
        var xt = Pi(I.props.children, H.mode, he, I.key);
        return ((xt.return = H), xt);
      } else {
        var sn = _m(I, H.mode, he);
        return ((sn.ref = Js(H, J, I)), (sn.return = H), sn);
      }
    }
    function bt(H, J, I, he) {
      for (var Ae = I.key, Re = J; Re !== null; ) {
        if (Re.key === Ae)
          if (
            Re.tag === T &&
            Re.stateNode.containerInfo === I.containerInfo &&
            Re.stateNode.implementation === I.implementation
          ) {
            n(H, Re.sibling);
            var Qe = l(Re, I.children || []);
            return ((Qe.return = H), Qe);
          } else {
            n(H, Re);
            break;
          }
        else t(H, Re);
        Re = Re.sibling;
      }
      var rt = Om(I, H.mode, he);
      return ((rt.return = H), rt);
    }
    function pt(H, J, I, he) {
      var Ae =
        typeof I == 'object' && I !== null && I.type === aa && I.key === null;
      if ((Ae && (I = I.props.children), typeof I == 'object' && I !== null)) {
        switch (I.$$typeof) {
          case Fr:
            return p(ze(H, J, I, he));
          case Vr:
            return p(bt(H, J, I, he));
          case Ge:
            var Re = I._payload,
              Qe = I._init;
            return pt(H, J, Qe(Re), he);
        }
        if (_t(I)) return K(H, J, I, he);
        if (mr(I)) return xe(H, J, I, he);
        af(H, I);
      }
      return (typeof I == 'string' && I !== '') || typeof I == 'number'
        ? p(Ie(H, J, '' + I, he))
        : (typeof I == 'function' && of(H), n(H, J));
    }
    return pt;
  }
  var fl = Qb(!0),
    Kb = Qb(!1);
  function y1(e, t) {
    if (e !== null && t.child !== e.child)
      throw new Error('Resuming work not yet implemented.');
    if (t.child !== null) {
      var n = t.child,
        a = xo(n, n.pendingProps);
      for (t.child = a, a.return = t; n.sibling !== null; )
        ((n = n.sibling),
          (a = a.sibling = xo(n, n.pendingProps)),
          (a.return = t));
      a.sibling = null;
    }
  }
  function g1(e, t) {
    for (var n = e.child; n !== null; ) (iM(n, t), (n = n.sibling));
  }
  var Nv = Ei(null),
    Pv;
  Pv = {};
  var lf = null,
    dl = null,
    zv = null,
    sf = !1;
  function uf() {
    ((lf = null), (dl = null), (zv = null), (sf = !1));
  }
  function Jb() {
    sf = !0;
  }
  function Zb() {
    sf = !1;
  }
  function eS(e, t, n) {
    (Wn(Nv, t._currentValue, e),
      (t._currentValue = n),
      t._currentRenderer !== void 0 &&
        t._currentRenderer !== null &&
        t._currentRenderer !== Pv &&
        d(
          'Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.'
        ),
      (t._currentRenderer = Pv));
  }
  function Uv(e, t) {
    var n = Nv.current;
    (Gn(Nv, t), (e._currentValue = n));
  }
  function Fv(e, t, n) {
    for (var a = e; a !== null; ) {
      var l = a.alternate;
      if (
        (Qo(a.childLanes, t)
          ? l !== null &&
            !Qo(l.childLanes, t) &&
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
  function b1(e, t, n) {
    S1(e, t, n);
  }
  function S1(e, t, n) {
    var a = e.child;
    for (a !== null && (a.return = e); a !== null; ) {
      var l = void 0,
        u = a.dependencies;
      if (u !== null) {
        l = a.child;
        for (var p = u.firstContext; p !== null; ) {
          if (p.context === t) {
            if (a.tag === g) {
              var v = ms(n),
                y = Ya(jt, v);
              y.tag = ff;
              var C = a.updateQueue;
              if (C !== null) {
                var w = C.shared,
                  N = w.pending;
                (N === null ? (y.next = y) : ((y.next = N.next), (N.next = y)),
                  (w.pending = y));
              }
            }
            a.lanes = st(a.lanes, n);
            var k = a.alternate;
            (k !== null && (k.lanes = st(k.lanes, n)),
              Fv(a.return, n, e),
              (u.lanes = st(u.lanes, n)));
            break;
          }
          p = p.next;
        }
      } else if (a.tag === _) l = a.type === e.type ? null : a.child;
      else if (a.tag === ae) {
        var j = a.return;
        if (j === null)
          throw new Error(
            'We just came from a parent so we must have had a parent. This is a bug in React.'
          );
        j.lanes = st(j.lanes, n);
        var G = j.alternate;
        (G !== null && (G.lanes = st(G.lanes, n)),
          Fv(j, n, e),
          (l = a.sibling));
      } else l = a.child;
      if (l !== null) l.return = a;
      else
        for (l = a; l !== null; ) {
          if (l === e) {
            l = null;
            break;
          }
          var K = l.sibling;
          if (K !== null) {
            ((K.return = l.return), (l = K));
            break;
          }
          l = l.return;
        }
      a = l;
    }
  }
  function pl(e, t) {
    ((lf = e), (dl = null), (zv = null));
    var n = e.dependencies;
    if (n !== null) {
      var a = n.firstContext;
      a !== null && (br(n.lanes, t) && pu(), (n.firstContext = null));
    }
  }
  function dn(e) {
    sf &&
      d(
        'Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().'
      );
    var t = e._currentValue;
    if (zv !== e) {
      var n = { context: e, memoizedValue: t, next: null };
      if (dl === null) {
        if (lf === null)
          throw new Error(
            'Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().'
          );
        ((dl = n), (lf.dependencies = { lanes: fe, firstContext: n }));
      } else dl = dl.next = n;
    }
    return t;
  }
  var yo = null;
  function Vv(e) {
    yo === null ? (yo = [e]) : yo.push(e);
  }
  function E1() {
    if (yo !== null) {
      for (var e = 0; e < yo.length; e++) {
        var t = yo[e],
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
      yo = null;
    }
  }
  function tS(e, t, n, a) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Vv(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      cf(e, a)
    );
  }
  function C1(e, t, n, a) {
    var l = t.interleaved;
    (l === null ? ((n.next = n), Vv(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n));
  }
  function w1(e, t, n, a) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Vv(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      cf(e, a)
    );
  }
  function cr(e, t) {
    return cf(e, t);
  }
  var T1 = cf;
  function cf(e, t) {
    e.lanes = st(e.lanes, t);
    var n = e.alternate;
    (n !== null && (n.lanes = st(n.lanes, t)),
      n === null && (e.flags & (fn | Na)) !== We && KE(e));
    for (var a = e, l = e.return; l !== null; )
      ((l.childLanes = st(l.childLanes, t)),
        (n = l.alternate),
        n !== null
          ? (n.childLanes = st(n.childLanes, t))
          : (l.flags & (fn | Na)) !== We && KE(e),
        (a = l),
        (l = l.return));
    if (a.tag === S) {
      var u = a.stateNode;
      return u;
    } else return null;
  }
  var nS = 0,
    rS = 1,
    ff = 2,
    Hv = 3,
    df = !1,
    Iv,
    pf;
  ((Iv = !1), (pf = null));
  function Bv(e) {
    var t = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: fe },
      effects: null,
    };
    e.updateQueue = t;
  }
  function aS(e, t) {
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
  function Ya(e, t) {
    var n = {
      eventTime: e,
      lane: t,
      tag: nS,
      payload: null,
      callback: null,
      next: null,
    };
    return n;
  }
  function xi(e, t, n) {
    var a = e.updateQueue;
    if (a === null) return null;
    var l = a.shared;
    if (
      (pf === l &&
        !Iv &&
        (d(
          'An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.'
        ),
        (Iv = !0)),
      CA())
    ) {
      var u = l.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (l.pending = t),
        T1(e, n)
      );
    } else return w1(e, l, t, n);
  }
  function vf(e, t, n) {
    var a = t.updateQueue;
    if (a !== null) {
      var l = a.shared;
      if (yg(n)) {
        var u = l.lanes;
        u = bg(u, e.pendingLanes);
        var p = st(u, n);
        ((l.lanes = p), Np(e, p));
      }
    }
  }
  function jv(e, t) {
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
    var w = n.lastBaseUpdate;
    (w === null ? (n.firstBaseUpdate = t) : (w.next = t),
      (n.lastBaseUpdate = t));
  }
  function x1(e, t, n, a, l, u) {
    switch (n.tag) {
      case rS: {
        var p = n.payload;
        if (typeof p == 'function') {
          Jb();
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
            Zb();
          }
          return v;
        }
        return p;
      }
      case Hv:
        e.flags = (e.flags & ~Zn) | Dt;
      case nS: {
        var y = n.payload,
          C;
        if (typeof y == 'function') {
          (Jb(), (C = y.call(u, a, l)));
          {
            if (e.mode & an) {
              Dn(!0);
              try {
                y.call(u, a, l);
              } finally {
                Dn(!1);
              }
            }
            Zb();
          }
        } else C = y;
        return C == null ? a : ct({}, a, C);
      }
      case ff:
        return ((df = !0), a);
    }
    return a;
  }
  function hf(e, t, n, a) {
    var l = e.updateQueue;
    ((df = !1), (pf = l.shared));
    var u = l.firstBaseUpdate,
      p = l.lastBaseUpdate,
      v = l.shared.pending;
    if (v !== null) {
      l.shared.pending = null;
      var y = v,
        C = y.next;
      ((y.next = null), p === null ? (u = C) : (p.next = C), (p = y));
      var w = e.alternate;
      if (w !== null) {
        var N = w.updateQueue,
          k = N.lastBaseUpdate;
        k !== p &&
          (k === null ? (N.firstBaseUpdate = C) : (k.next = C),
          (N.lastBaseUpdate = y));
      }
    }
    if (u !== null) {
      var j = l.baseState,
        G = fe,
        K = null,
        xe = null,
        Ie = null,
        ze = u;
      do {
        var bt = ze.lane,
          pt = ze.eventTime;
        if (Qo(a, bt)) {
          if (Ie !== null) {
            var J = {
              eventTime: pt,
              lane: On,
              tag: ze.tag,
              payload: ze.payload,
              callback: ze.callback,
              next: null,
            };
            Ie = Ie.next = J;
          }
          j = x1(e, l, ze, j, t, n);
          var I = ze.callback;
          if (I !== null && ze.lane !== On) {
            e.flags |= tp;
            var he = l.effects;
            he === null ? (l.effects = [ze]) : he.push(ze);
          }
        } else {
          var H = {
            eventTime: pt,
            lane: bt,
            tag: ze.tag,
            payload: ze.payload,
            callback: ze.callback,
            next: null,
          };
          (Ie === null ? ((xe = Ie = H), (K = j)) : (Ie = Ie.next = H),
            (G = st(G, bt)));
        }
        if (((ze = ze.next), ze === null)) {
          if (((v = l.shared.pending), v === null)) break;
          var Ae = v,
            Re = Ae.next;
          ((Ae.next = null),
            (ze = Re),
            (l.lastBaseUpdate = Ae),
            (l.shared.pending = null));
        }
      } while (!0);
      (Ie === null && (K = j),
        (l.baseState = K),
        (l.firstBaseUpdate = xe),
        (l.lastBaseUpdate = Ie));
      var Qe = l.shared.interleaved;
      if (Qe !== null) {
        var rt = Qe;
        do ((G = st(G, rt.lane)), (rt = rt.next));
        while (rt !== Qe);
      } else u === null && (l.shared.lanes = fe);
      (xu(G), (e.lanes = G), (e.memoizedState = j));
    }
    pf = null;
  }
  function R1(e, t) {
    if (typeof e != 'function')
      throw new Error(
        'Invalid argument passed as callback. Expected a function. Instead ' +
          ('received: ' + e)
      );
    e.call(t);
  }
  function iS() {
    df = !1;
  }
  function mf() {
    return df;
  }
  function oS(e, t, n) {
    var a = t.effects;
    if (((t.effects = null), a !== null))
      for (var l = 0; l < a.length; l++) {
        var u = a[l],
          p = u.callback;
        p !== null && ((u.callback = null), R1(p, n));
      }
  }
  var Zs = {},
    Ri = Ei(Zs),
    eu = Ei(Zs),
    yf = Ei(Zs);
  function gf(e) {
    if (e === Zs)
      throw new Error(
        'Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.'
      );
    return e;
  }
  function lS() {
    var e = gf(yf.current);
    return e;
  }
  function $v(e, t) {
    (Wn(yf, t, e), Wn(eu, e, e), Wn(Ri, Zs, e));
    var n = j_(t);
    (Gn(Ri, e), Wn(Ri, n, e));
  }
  function vl(e) {
    (Gn(Ri, e), Gn(eu, e), Gn(yf, e));
  }
  function Yv() {
    var e = gf(Ri.current);
    return e;
  }
  function sS(e) {
    gf(yf.current);
    var t = gf(Ri.current),
      n = $_(t, e.type);
    t !== n && (Wn(eu, e, e), Wn(Ri, n, e));
  }
  function Gv(e) {
    eu.current === e && (Gn(Ri, e), Gn(eu, e));
  }
  var _1 = 0,
    uS = 1,
    cS = 1,
    tu = 2,
    Gr = Ei(_1);
  function Wv(e, t) {
    return (e & t) !== 0;
  }
  function hl(e) {
    return e & uS;
  }
  function qv(e, t) {
    return (e & uS) | t;
  }
  function D1(e, t) {
    return e | t;
  }
  function _i(e, t) {
    Wn(Gr, t, e);
  }
  function ml(e) {
    Gn(Gr, e);
  }
  function O1(e, t) {
    var n = e.memoizedState;
    return n !== null ? n.dehydrated !== null : (e.memoizedProps, !0);
  }
  function bf(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === F) {
        var n = t.memoizedState;
        if (n !== null) {
          var a = n.dehydrated;
          if (a === null || _b(a) || dv(a)) return t;
        }
      } else if (t.tag === ue && t.memoizedProps.revealOrder !== void 0) {
        var l = (t.flags & Dt) !== We;
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
  var fr = 0,
    mn = 1,
    da = 2,
    yn = 4,
    Pn = 8,
    Xv = [];
  function Qv() {
    for (var e = 0; e < Xv.length; e++) {
      var t = Xv[e];
      t._workInProgressVersionPrimary = null;
    }
    Xv.length = 0;
  }
  function A1(e, t) {
    var n = t._getVersion,
      a = n(t._source);
    e.mutableSourceEagerHydrationData == null
      ? (e.mutableSourceEagerHydrationData = [t, a])
      : e.mutableSourceEagerHydrationData.push(t, a);
  }
  var Oe = o.ReactCurrentDispatcher,
    nu = o.ReactCurrentBatchConfig,
    Kv,
    yl;
  Kv = new Set();
  var go = fe,
    Nt = null,
    gn = null,
    bn = null,
    Sf = !1,
    ru = !1,
    au = 0,
    M1 = 0,
    L1 = 25,
    te = null,
    kr = null,
    Di = -1,
    Jv = !1;
  function Mt() {
    {
      var e = te;
      kr === null ? (kr = [e]) : kr.push(e);
    }
  }
  function we() {
    {
      var e = te;
      kr !== null && (Di++, kr[Di] !== e && k1(e));
    }
  }
  function gl(e) {
    e != null &&
      !_t(e) &&
      d(
        '%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.',
        te,
        typeof e
      );
  }
  function k1(e) {
    {
      var t = lt(Nt);
      if (!Kv.has(t) && (Kv.add(t), kr !== null)) {
        for (var n = '', a = 30, l = 0; l <= Di; l++) {
          for (
            var u = kr[l], p = l === Di ? e : u, v = l + 1 + '. ' + u;
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
  function qn() {
    throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
  }
  function Zv(e, t) {
    if (Jv) return !1;
    if (t === null)
      return (
        d(
          '%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.',
          te
        ),
        !1
      );
    e.length !== t.length &&
      d(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        te,
        '[' + t.join(', ') + ']',
        '[' + e.join(', ') + ']'
      );
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Cr(e[n], t[n])) return !1;
    return !0;
  }
  function bl(e, t, n, a, l, u) {
    ((go = u),
      (Nt = t),
      (kr = e !== null ? e._debugHookTypes : null),
      (Di = -1),
      (Jv = e !== null && e.type !== t.type),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = fe),
      e !== null && e.memoizedState !== null
        ? (Oe.current = LS)
        : kr !== null
          ? (Oe.current = MS)
          : (Oe.current = AS));
    var p = n(a, l);
    if (ru) {
      var v = 0;
      do {
        if (((ru = !1), (au = 0), v >= L1))
          throw new Error(
            'Too many re-renders. React limits the number of renders to prevent an infinite loop.'
          );
        ((v += 1),
          (Jv = !1),
          (gn = null),
          (bn = null),
          (t.updateQueue = null),
          (Di = -1),
          (Oe.current = kS),
          (p = n(a, l)));
      } while (ru);
    }
    ((Oe.current = kf), (t._debugHookTypes = kr));
    var y = gn !== null && gn.next !== null;
    if (
      ((go = fe),
      (Nt = null),
      (gn = null),
      (bn = null),
      (te = null),
      (kr = null),
      (Di = -1),
      e !== null &&
        (e.flags & za) !== (t.flags & za) &&
        (e.mode & yt) !== je &&
        d(
          'Internal React error: Expected static flag was missing. Please notify the React team.'
        ),
      (Sf = !1),
      y)
    )
      throw new Error(
        'Rendered fewer hooks than expected. This may be caused by an accidental early return statement.'
      );
    return p;
  }
  function Sl() {
    var e = au !== 0;
    return ((au = 0), e);
  }
  function fS(e, t, n) {
    ((t.updateQueue = e.updateQueue),
      (t.mode & sa) !== je
        ? (t.flags &= ~(pc | Pa | Hr | St))
        : (t.flags &= ~(Hr | St)),
      (e.lanes = Sc(e.lanes, n)));
  }
  function dS() {
    if (((Oe.current = kf), Sf)) {
      for (var e = Nt.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      Sf = !1;
    }
    ((go = fe),
      (Nt = null),
      (gn = null),
      (bn = null),
      (kr = null),
      (Di = -1),
      (te = null),
      (xS = !1),
      (ru = !1),
      (au = 0));
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
  function pS() {
    return { lastEffect: null, stores: null };
  }
  function eh(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function th(e, t, n) {
    var a = pa(),
      l;
    (n !== void 0 ? (l = n(t)) : (l = t), (a.memoizedState = a.baseState = l));
    var u = {
      pending: null,
      interleaved: null,
      lanes: fe,
      dispatch: null,
      lastRenderedReducer: e,
      lastRenderedState: l,
    };
    a.queue = u;
    var p = (u.dispatch = U1.bind(null, Nt, u));
    return [a.memoizedState, p];
  }
  function nh(e, t, n) {
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
      var w = p.next,
        N = u.baseState,
        k = null,
        j = null,
        G = null,
        K = w;
      do {
        var xe = K.lane;
        if (Qo(go, xe)) {
          if (G !== null) {
            var ze = {
              lane: On,
              action: K.action,
              hasEagerState: K.hasEagerState,
              eagerState: K.eagerState,
              next: null,
            };
            G = G.next = ze;
          }
          if (K.hasEagerState) N = K.eagerState;
          else {
            var bt = K.action;
            N = e(N, bt);
          }
        } else {
          var Ie = {
            lane: xe,
            action: K.action,
            hasEagerState: K.hasEagerState,
            eagerState: K.eagerState,
            next: null,
          };
          (G === null ? ((j = G = Ie), (k = N)) : (G = G.next = Ie),
            (Nt.lanes = st(Nt.lanes, xe)),
            xu(xe));
        }
        K = K.next;
      } while (K !== null && K !== w);
      (G === null ? (k = N) : (G.next = j),
        Cr(N, a.memoizedState) || pu(),
        (a.memoizedState = N),
        (a.baseState = k),
        (a.baseQueue = G),
        (l.lastRenderedState = N));
    }
    var pt = l.interleaved;
    if (pt !== null) {
      var H = pt;
      do {
        var J = H.lane;
        ((Nt.lanes = st(Nt.lanes, J)), xu(J), (H = H.next));
      } while (H !== pt);
    } else p === null && (l.lanes = fe);
    var I = l.dispatch;
    return [a.memoizedState, I];
  }
  function rh(e, t, n) {
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
        var w = C.action;
        ((v = e(v, w)), (C = C.next));
      } while (C !== y);
      (Cr(v, a.memoizedState) || pu(),
        (a.memoizedState = v),
        a.baseQueue === null && (a.baseState = v),
        (l.lastRenderedState = v));
    }
    return [v, u];
  }
  function $z(e, t, n) {}
  function Yz(e, t, n) {}
  function ah(e, t, n) {
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
        yl ||
          (u !== n() &&
            (d(
              'The result of getServerSnapshot should be cached to avoid an infinite loop'
            ),
            (yl = !0))));
    } else {
      if (((u = t()), !yl)) {
        var v = t();
        Cr(u, v) ||
          (d(
            'The result of getSnapshot should be cached to avoid an infinite loop'
          ),
          (yl = !0));
      }
      var y = Jf();
      if (y === null)
        throw new Error(
          'Expected a work-in-progress root. This is a bug in React. Please file an issue.'
        );
      bc(y, go) || vS(a, t, u);
    }
    l.memoizedState = u;
    var C = { value: u, getSnapshot: t };
    return (
      (l.queue = C),
      xf(mS.bind(null, a, C, e), [e]),
      (a.flags |= Hr),
      iu(mn | Pn, hS.bind(null, a, C, u, t), void 0, null),
      u
    );
  }
  function Ef(e, t, n) {
    var a = Nt,
      l = Nr(),
      u = t();
    if (!yl) {
      var p = t();
      Cr(u, p) ||
        (d(
          'The result of getSnapshot should be cached to avoid an infinite loop'
        ),
        (yl = !0));
    }
    var v = l.memoizedState,
      y = !Cr(v, u);
    y && ((l.memoizedState = u), pu());
    var C = l.queue;
    if (
      (lu(mS.bind(null, a, C, e), [e]),
      C.getSnapshot !== t || y || (bn !== null && bn.memoizedState.tag & mn))
    ) {
      ((a.flags |= Hr), iu(mn | Pn, hS.bind(null, a, C, u, t), void 0, null));
      var w = Jf();
      if (w === null)
        throw new Error(
          'Expected a work-in-progress root. This is a bug in React. Please file an issue.'
        );
      bc(w, go) || vS(a, t, u);
    }
    return u;
  }
  function vS(e, t, n) {
    e.flags |= dc;
    var a = { getSnapshot: t, value: n },
      l = Nt.updateQueue;
    if (l === null) ((l = pS()), (Nt.updateQueue = l), (l.stores = [a]));
    else {
      var u = l.stores;
      u === null ? (l.stores = [a]) : u.push(a);
    }
  }
  function hS(e, t, n, a) {
    ((t.value = n), (t.getSnapshot = a), yS(t) && gS(e));
  }
  function mS(e, t, n) {
    var a = function () {
      yS(t) && gS(e);
    };
    return n(a);
  }
  function yS(e) {
    var t = e.getSnapshot,
      n = e.value;
    try {
      var a = t();
      return !Cr(n, a);
    } catch {
      return !0;
    }
  }
  function gS(e) {
    var t = cr(e, tt);
    t !== null && wn(t, e, tt, jt);
  }
  function Cf(e) {
    var t = pa();
    (typeof e == 'function' && (e = e()), (t.memoizedState = t.baseState = e));
    var n = {
      pending: null,
      interleaved: null,
      lanes: fe,
      dispatch: null,
      lastRenderedReducer: eh,
      lastRenderedState: e,
    };
    t.queue = n;
    var a = (n.dispatch = F1.bind(null, Nt, n));
    return [t.memoizedState, a];
  }
  function ih(e) {
    return nh(eh);
  }
  function oh(e) {
    return rh(eh);
  }
  function iu(e, t, n, a) {
    var l = { tag: e, create: t, destroy: n, deps: a, next: null },
      u = Nt.updateQueue;
    if (u === null)
      ((u = pS()), (Nt.updateQueue = u), (u.lastEffect = l.next = l));
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
  function lh(e) {
    var t = pa();
    {
      var n = { current: e };
      return ((t.memoizedState = n), n);
    }
  }
  function wf(e) {
    var t = Nr();
    return t.memoizedState;
  }
  function ou(e, t, n, a) {
    var l = pa(),
      u = a === void 0 ? null : a;
    ((Nt.flags |= e), (l.memoizedState = iu(mn | t, n, void 0, u)));
  }
  function Tf(e, t, n, a) {
    var l = Nr(),
      u = a === void 0 ? null : a,
      p = void 0;
    if (gn !== null) {
      var v = gn.memoizedState;
      if (((p = v.destroy), u !== null)) {
        var y = v.deps;
        if (Zv(u, y)) {
          l.memoizedState = iu(t, n, p, u);
          return;
        }
      }
    }
    ((Nt.flags |= e), (l.memoizedState = iu(mn | t, n, p, u)));
  }
  function xf(e, t) {
    return (Nt.mode & sa) !== je
      ? ou(pc | Hr | ap, Pn, e, t)
      : ou(Hr | ap, Pn, e, t);
  }
  function lu(e, t) {
    return Tf(Hr, Pn, e, t);
  }
  function sh(e, t) {
    return ou(St, da, e, t);
  }
  function Rf(e, t) {
    return Tf(St, da, e, t);
  }
  function uh(e, t) {
    var n = St;
    return ((n |= eo), (Nt.mode & sa) !== je && (n |= Pa), ou(n, yn, e, t));
  }
  function _f(e, t) {
    return Tf(St, yn, e, t);
  }
  function bS(e, t) {
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
  function ch(e, t, n) {
    typeof t != 'function' &&
      d(
        'Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.',
        t !== null ? typeof t : 'null'
      );
    var a = n != null ? n.concat([e]) : null,
      l = St;
    return (
      (l |= eo),
      (Nt.mode & sa) !== je && (l |= Pa),
      ou(l, yn, bS.bind(null, t, e), a)
    );
  }
  function Df(e, t, n) {
    typeof t != 'function' &&
      d(
        'Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.',
        t !== null ? typeof t : 'null'
      );
    var a = n != null ? n.concat([e]) : null;
    return Tf(St, yn, bS.bind(null, t, e), a);
  }
  function N1(e, t) {}
  var Of = N1;
  function fh(e, t) {
    var n = pa(),
      a = t === void 0 ? null : t;
    return ((n.memoizedState = [e, a]), e);
  }
  function Af(e, t) {
    var n = Nr(),
      a = t === void 0 ? null : t,
      l = n.memoizedState;
    if (l !== null && a !== null) {
      var u = l[1];
      if (Zv(a, u)) return l[0];
    }
    return ((n.memoizedState = [e, a]), e);
  }
  function dh(e, t) {
    var n = pa(),
      a = t === void 0 ? null : t,
      l = e();
    return ((n.memoizedState = [l, a]), l);
  }
  function Mf(e, t) {
    var n = Nr(),
      a = t === void 0 ? null : t,
      l = n.memoizedState;
    if (l !== null && a !== null) {
      var u = l[1];
      if (Zv(a, u)) return l[0];
    }
    var p = e();
    return ((n.memoizedState = [p, a]), p);
  }
  function ph(e) {
    var t = pa();
    return ((t.memoizedState = e), e);
  }
  function SS(e) {
    var t = Nr(),
      n = gn,
      a = n.memoizedState;
    return CS(t, a, e);
  }
  function ES(e) {
    var t = Nr();
    if (gn === null) return ((t.memoizedState = e), e);
    var n = gn.memoizedState;
    return CS(t, n, e);
  }
  function CS(e, t, n) {
    var a = !bR(go);
    if (a) {
      if (!Cr(n, t)) {
        var l = gg();
        ((Nt.lanes = st(Nt.lanes, l)), xu(l), (e.baseState = !0));
      }
      return t;
    } else
      return (
        e.baseState && ((e.baseState = !1), pu()),
        (e.memoizedState = n),
        n
      );
  }
  function P1(e, t, n) {
    var a = Br();
    (An(DR(a, Fa)), e(!0));
    var l = nu.transition;
    nu.transition = {};
    var u = nu.transition;
    nu.transition._updatedFibers = new Set();
    try {
      (e(!1), t());
    } finally {
      if ((An(a), (nu.transition = l), l === null && u._updatedFibers)) {
        var p = u._updatedFibers.size;
        (p > 10 &&
          f(
            'Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.'
          ),
          u._updatedFibers.clear());
      }
    }
  }
  function vh() {
    var e = Cf(!1),
      t = e[0],
      n = e[1],
      a = P1.bind(null, n),
      l = pa();
    return ((l.memoizedState = a), [t, a]);
  }
  function wS() {
    var e = ih(),
      t = e[0],
      n = Nr(),
      a = n.memoizedState;
    return [t, a];
  }
  function TS() {
    var e = oh(),
      t = e[0],
      n = Nr(),
      a = n.memoizedState;
    return [t, a];
  }
  var xS = !1;
  function z1() {
    return xS;
  }
  function hh() {
    var e = pa(),
      t = Jf(),
      n = t.identifierPrefix,
      a;
    if (Nn()) {
      var l = ZD();
      a = ':' + n + 'R' + l;
      var u = au++;
      (u > 0 && (a += 'H' + u.toString(32)), (a += ':'));
    } else {
      var p = M1++;
      a = ':' + n + 'r' + p.toString(32) + ':';
    }
    return ((e.memoizedState = a), a);
  }
  function Lf() {
    var e = Nr(),
      t = e.memoizedState;
    return t;
  }
  function U1(e, t, n) {
    typeof arguments[3] == 'function' &&
      d(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      );
    var a = ki(e),
      l = {
        lane: a,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (RS(e)) _S(t, l);
    else {
      var u = tS(e, t, l, a);
      if (u !== null) {
        var p = nr();
        (wn(u, e, a, p), DS(u, t, a));
      }
    }
    OS(e, a);
  }
  function F1(e, t, n) {
    typeof arguments[3] == 'function' &&
      d(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      );
    var a = ki(e),
      l = {
        lane: a,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (RS(e)) _S(t, l);
    else {
      var u = e.alternate;
      if (e.lanes === fe && (u === null || u.lanes === fe)) {
        var p = t.lastRenderedReducer;
        if (p !== null) {
          var v;
          ((v = Oe.current), (Oe.current = Wr));
          try {
            var y = t.lastRenderedState,
              C = p(y, n);
            if (((l.hasEagerState = !0), (l.eagerState = C), Cr(C, y))) {
              C1(e, t, l, a);
              return;
            }
          } catch {
          } finally {
            Oe.current = v;
          }
        }
      }
      var w = tS(e, t, l, a);
      if (w !== null) {
        var N = nr();
        (wn(w, e, a, N), DS(w, t, a));
      }
    }
    OS(e, a);
  }
  function RS(e) {
    var t = e.alternate;
    return e === Nt || (t !== null && t === Nt);
  }
  function _S(e, t) {
    ru = Sf = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function DS(e, t, n) {
    if (yg(n)) {
      var a = t.lanes;
      a = bg(a, e.pendingLanes);
      var l = st(a, n);
      ((t.lanes = l), Np(e, l));
    }
  }
  function OS(e, t, n) {
    up(e, t);
  }
  var kf = {
      readContext: dn,
      useCallback: qn,
      useContext: qn,
      useEffect: qn,
      useImperativeHandle: qn,
      useInsertionEffect: qn,
      useLayoutEffect: qn,
      useMemo: qn,
      useReducer: qn,
      useRef: qn,
      useState: qn,
      useDebugValue: qn,
      useDeferredValue: qn,
      useTransition: qn,
      useMutableSource: qn,
      useSyncExternalStore: qn,
      useId: qn,
      unstable_isNewReconciler: Ne,
    },
    AS = null,
    MS = null,
    LS = null,
    kS = null,
    va = null,
    Wr = null,
    Nf = null;
  {
    var mh = function () {
        d(
          'Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().'
        );
      },
      nt = function () {
        d(
          'Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks'
        );
      };
    ((AS = {
      readContext: function (e) {
        return dn(e);
      },
      useCallback: function (e, t) {
        return ((te = 'useCallback'), Mt(), gl(t), fh(e, t));
      },
      useContext: function (e) {
        return ((te = 'useContext'), Mt(), dn(e));
      },
      useEffect: function (e, t) {
        return ((te = 'useEffect'), Mt(), gl(t), xf(e, t));
      },
      useImperativeHandle: function (e, t, n) {
        return ((te = 'useImperativeHandle'), Mt(), gl(n), ch(e, t, n));
      },
      useInsertionEffect: function (e, t) {
        return ((te = 'useInsertionEffect'), Mt(), gl(t), sh(e, t));
      },
      useLayoutEffect: function (e, t) {
        return ((te = 'useLayoutEffect'), Mt(), gl(t), uh(e, t));
      },
      useMemo: function (e, t) {
        ((te = 'useMemo'), Mt(), gl(t));
        var n = Oe.current;
        Oe.current = va;
        try {
          return dh(e, t);
        } finally {
          Oe.current = n;
        }
      },
      useReducer: function (e, t, n) {
        ((te = 'useReducer'), Mt());
        var a = Oe.current;
        Oe.current = va;
        try {
          return th(e, t, n);
        } finally {
          Oe.current = a;
        }
      },
      useRef: function (e) {
        return ((te = 'useRef'), Mt(), lh(e));
      },
      useState: function (e) {
        ((te = 'useState'), Mt());
        var t = Oe.current;
        Oe.current = va;
        try {
          return Cf(e);
        } finally {
          Oe.current = t;
        }
      },
      useDebugValue: function (e, t) {
        return ((te = 'useDebugValue'), Mt(), void 0);
      },
      useDeferredValue: function (e) {
        return ((te = 'useDeferredValue'), Mt(), ph(e));
      },
      useTransition: function () {
        return ((te = 'useTransition'), Mt(), vh());
      },
      useMutableSource: function (e, t, n) {
        return ((te = 'useMutableSource'), Mt(), void 0);
      },
      useSyncExternalStore: function (e, t, n) {
        return ((te = 'useSyncExternalStore'), Mt(), ah(e, t, n));
      },
      useId: function () {
        return ((te = 'useId'), Mt(), hh());
      },
      unstable_isNewReconciler: Ne,
    }),
      (MS = {
        readContext: function (e) {
          return dn(e);
        },
        useCallback: function (e, t) {
          return ((te = 'useCallback'), we(), fh(e, t));
        },
        useContext: function (e) {
          return ((te = 'useContext'), we(), dn(e));
        },
        useEffect: function (e, t) {
          return ((te = 'useEffect'), we(), xf(e, t));
        },
        useImperativeHandle: function (e, t, n) {
          return ((te = 'useImperativeHandle'), we(), ch(e, t, n));
        },
        useInsertionEffect: function (e, t) {
          return ((te = 'useInsertionEffect'), we(), sh(e, t));
        },
        useLayoutEffect: function (e, t) {
          return ((te = 'useLayoutEffect'), we(), uh(e, t));
        },
        useMemo: function (e, t) {
          ((te = 'useMemo'), we());
          var n = Oe.current;
          Oe.current = va;
          try {
            return dh(e, t);
          } finally {
            Oe.current = n;
          }
        },
        useReducer: function (e, t, n) {
          ((te = 'useReducer'), we());
          var a = Oe.current;
          Oe.current = va;
          try {
            return th(e, t, n);
          } finally {
            Oe.current = a;
          }
        },
        useRef: function (e) {
          return ((te = 'useRef'), we(), lh(e));
        },
        useState: function (e) {
          ((te = 'useState'), we());
          var t = Oe.current;
          Oe.current = va;
          try {
            return Cf(e);
          } finally {
            Oe.current = t;
          }
        },
        useDebugValue: function (e, t) {
          return ((te = 'useDebugValue'), we(), void 0);
        },
        useDeferredValue: function (e) {
          return ((te = 'useDeferredValue'), we(), ph(e));
        },
        useTransition: function () {
          return ((te = 'useTransition'), we(), vh());
        },
        useMutableSource: function (e, t, n) {
          return ((te = 'useMutableSource'), we(), void 0);
        },
        useSyncExternalStore: function (e, t, n) {
          return ((te = 'useSyncExternalStore'), we(), ah(e, t, n));
        },
        useId: function () {
          return ((te = 'useId'), we(), hh());
        },
        unstable_isNewReconciler: Ne,
      }),
      (LS = {
        readContext: function (e) {
          return dn(e);
        },
        useCallback: function (e, t) {
          return ((te = 'useCallback'), we(), Af(e, t));
        },
        useContext: function (e) {
          return ((te = 'useContext'), we(), dn(e));
        },
        useEffect: function (e, t) {
          return ((te = 'useEffect'), we(), lu(e, t));
        },
        useImperativeHandle: function (e, t, n) {
          return ((te = 'useImperativeHandle'), we(), Df(e, t, n));
        },
        useInsertionEffect: function (e, t) {
          return ((te = 'useInsertionEffect'), we(), Rf(e, t));
        },
        useLayoutEffect: function (e, t) {
          return ((te = 'useLayoutEffect'), we(), _f(e, t));
        },
        useMemo: function (e, t) {
          ((te = 'useMemo'), we());
          var n = Oe.current;
          Oe.current = Wr;
          try {
            return Mf(e, t);
          } finally {
            Oe.current = n;
          }
        },
        useReducer: function (e, t, n) {
          ((te = 'useReducer'), we());
          var a = Oe.current;
          Oe.current = Wr;
          try {
            return nh(e, t, n);
          } finally {
            Oe.current = a;
          }
        },
        useRef: function (e) {
          return ((te = 'useRef'), we(), wf());
        },
        useState: function (e) {
          ((te = 'useState'), we());
          var t = Oe.current;
          Oe.current = Wr;
          try {
            return ih(e);
          } finally {
            Oe.current = t;
          }
        },
        useDebugValue: function (e, t) {
          return ((te = 'useDebugValue'), we(), Of());
        },
        useDeferredValue: function (e) {
          return ((te = 'useDeferredValue'), we(), SS(e));
        },
        useTransition: function () {
          return ((te = 'useTransition'), we(), wS());
        },
        useMutableSource: function (e, t, n) {
          return ((te = 'useMutableSource'), we(), void 0);
        },
        useSyncExternalStore: function (e, t, n) {
          return ((te = 'useSyncExternalStore'), we(), Ef(e, t));
        },
        useId: function () {
          return ((te = 'useId'), we(), Lf());
        },
        unstable_isNewReconciler: Ne,
      }),
      (kS = {
        readContext: function (e) {
          return dn(e);
        },
        useCallback: function (e, t) {
          return ((te = 'useCallback'), we(), Af(e, t));
        },
        useContext: function (e) {
          return ((te = 'useContext'), we(), dn(e));
        },
        useEffect: function (e, t) {
          return ((te = 'useEffect'), we(), lu(e, t));
        },
        useImperativeHandle: function (e, t, n) {
          return ((te = 'useImperativeHandle'), we(), Df(e, t, n));
        },
        useInsertionEffect: function (e, t) {
          return ((te = 'useInsertionEffect'), we(), Rf(e, t));
        },
        useLayoutEffect: function (e, t) {
          return ((te = 'useLayoutEffect'), we(), _f(e, t));
        },
        useMemo: function (e, t) {
          ((te = 'useMemo'), we());
          var n = Oe.current;
          Oe.current = Nf;
          try {
            return Mf(e, t);
          } finally {
            Oe.current = n;
          }
        },
        useReducer: function (e, t, n) {
          ((te = 'useReducer'), we());
          var a = Oe.current;
          Oe.current = Nf;
          try {
            return rh(e, t, n);
          } finally {
            Oe.current = a;
          }
        },
        useRef: function (e) {
          return ((te = 'useRef'), we(), wf());
        },
        useState: function (e) {
          ((te = 'useState'), we());
          var t = Oe.current;
          Oe.current = Nf;
          try {
            return oh(e);
          } finally {
            Oe.current = t;
          }
        },
        useDebugValue: function (e, t) {
          return ((te = 'useDebugValue'), we(), Of());
        },
        useDeferredValue: function (e) {
          return ((te = 'useDeferredValue'), we(), ES(e));
        },
        useTransition: function () {
          return ((te = 'useTransition'), we(), TS());
        },
        useMutableSource: function (e, t, n) {
          return ((te = 'useMutableSource'), we(), void 0);
        },
        useSyncExternalStore: function (e, t, n) {
          return ((te = 'useSyncExternalStore'), we(), Ef(e, t));
        },
        useId: function () {
          return ((te = 'useId'), we(), Lf());
        },
        unstable_isNewReconciler: Ne,
      }),
      (va = {
        readContext: function (e) {
          return (mh(), dn(e));
        },
        useCallback: function (e, t) {
          return ((te = 'useCallback'), nt(), Mt(), fh(e, t));
        },
        useContext: function (e) {
          return ((te = 'useContext'), nt(), Mt(), dn(e));
        },
        useEffect: function (e, t) {
          return ((te = 'useEffect'), nt(), Mt(), xf(e, t));
        },
        useImperativeHandle: function (e, t, n) {
          return ((te = 'useImperativeHandle'), nt(), Mt(), ch(e, t, n));
        },
        useInsertionEffect: function (e, t) {
          return ((te = 'useInsertionEffect'), nt(), Mt(), sh(e, t));
        },
        useLayoutEffect: function (e, t) {
          return ((te = 'useLayoutEffect'), nt(), Mt(), uh(e, t));
        },
        useMemo: function (e, t) {
          ((te = 'useMemo'), nt(), Mt());
          var n = Oe.current;
          Oe.current = va;
          try {
            return dh(e, t);
          } finally {
            Oe.current = n;
          }
        },
        useReducer: function (e, t, n) {
          ((te = 'useReducer'), nt(), Mt());
          var a = Oe.current;
          Oe.current = va;
          try {
            return th(e, t, n);
          } finally {
            Oe.current = a;
          }
        },
        useRef: function (e) {
          return ((te = 'useRef'), nt(), Mt(), lh(e));
        },
        useState: function (e) {
          ((te = 'useState'), nt(), Mt());
          var t = Oe.current;
          Oe.current = va;
          try {
            return Cf(e);
          } finally {
            Oe.current = t;
          }
        },
        useDebugValue: function (e, t) {
          return ((te = 'useDebugValue'), nt(), Mt(), void 0);
        },
        useDeferredValue: function (e) {
          return ((te = 'useDeferredValue'), nt(), Mt(), ph(e));
        },
        useTransition: function () {
          return ((te = 'useTransition'), nt(), Mt(), vh());
        },
        useMutableSource: function (e, t, n) {
          return ((te = 'useMutableSource'), nt(), Mt(), void 0);
        },
        useSyncExternalStore: function (e, t, n) {
          return ((te = 'useSyncExternalStore'), nt(), Mt(), ah(e, t, n));
        },
        useId: function () {
          return ((te = 'useId'), nt(), Mt(), hh());
        },
        unstable_isNewReconciler: Ne,
      }),
      (Wr = {
        readContext: function (e) {
          return (mh(), dn(e));
        },
        useCallback: function (e, t) {
          return ((te = 'useCallback'), nt(), we(), Af(e, t));
        },
        useContext: function (e) {
          return ((te = 'useContext'), nt(), we(), dn(e));
        },
        useEffect: function (e, t) {
          return ((te = 'useEffect'), nt(), we(), lu(e, t));
        },
        useImperativeHandle: function (e, t, n) {
          return ((te = 'useImperativeHandle'), nt(), we(), Df(e, t, n));
        },
        useInsertionEffect: function (e, t) {
          return ((te = 'useInsertionEffect'), nt(), we(), Rf(e, t));
        },
        useLayoutEffect: function (e, t) {
          return ((te = 'useLayoutEffect'), nt(), we(), _f(e, t));
        },
        useMemo: function (e, t) {
          ((te = 'useMemo'), nt(), we());
          var n = Oe.current;
          Oe.current = Wr;
          try {
            return Mf(e, t);
          } finally {
            Oe.current = n;
          }
        },
        useReducer: function (e, t, n) {
          ((te = 'useReducer'), nt(), we());
          var a = Oe.current;
          Oe.current = Wr;
          try {
            return nh(e, t, n);
          } finally {
            Oe.current = a;
          }
        },
        useRef: function (e) {
          return ((te = 'useRef'), nt(), we(), wf());
        },
        useState: function (e) {
          ((te = 'useState'), nt(), we());
          var t = Oe.current;
          Oe.current = Wr;
          try {
            return ih(e);
          } finally {
            Oe.current = t;
          }
        },
        useDebugValue: function (e, t) {
          return ((te = 'useDebugValue'), nt(), we(), Of());
        },
        useDeferredValue: function (e) {
          return ((te = 'useDeferredValue'), nt(), we(), SS(e));
        },
        useTransition: function () {
          return ((te = 'useTransition'), nt(), we(), wS());
        },
        useMutableSource: function (e, t, n) {
          return ((te = 'useMutableSource'), nt(), we(), void 0);
        },
        useSyncExternalStore: function (e, t, n) {
          return ((te = 'useSyncExternalStore'), nt(), we(), Ef(e, t));
        },
        useId: function () {
          return ((te = 'useId'), nt(), we(), Lf());
        },
        unstable_isNewReconciler: Ne,
      }),
      (Nf = {
        readContext: function (e) {
          return (mh(), dn(e));
        },
        useCallback: function (e, t) {
          return ((te = 'useCallback'), nt(), we(), Af(e, t));
        },
        useContext: function (e) {
          return ((te = 'useContext'), nt(), we(), dn(e));
        },
        useEffect: function (e, t) {
          return ((te = 'useEffect'), nt(), we(), lu(e, t));
        },
        useImperativeHandle: function (e, t, n) {
          return ((te = 'useImperativeHandle'), nt(), we(), Df(e, t, n));
        },
        useInsertionEffect: function (e, t) {
          return ((te = 'useInsertionEffect'), nt(), we(), Rf(e, t));
        },
        useLayoutEffect: function (e, t) {
          return ((te = 'useLayoutEffect'), nt(), we(), _f(e, t));
        },
        useMemo: function (e, t) {
          ((te = 'useMemo'), nt(), we());
          var n = Oe.current;
          Oe.current = Wr;
          try {
            return Mf(e, t);
          } finally {
            Oe.current = n;
          }
        },
        useReducer: function (e, t, n) {
          ((te = 'useReducer'), nt(), we());
          var a = Oe.current;
          Oe.current = Wr;
          try {
            return rh(e, t, n);
          } finally {
            Oe.current = a;
          }
        },
        useRef: function (e) {
          return ((te = 'useRef'), nt(), we(), wf());
        },
        useState: function (e) {
          ((te = 'useState'), nt(), we());
          var t = Oe.current;
          Oe.current = Wr;
          try {
            return oh(e);
          } finally {
            Oe.current = t;
          }
        },
        useDebugValue: function (e, t) {
          return ((te = 'useDebugValue'), nt(), we(), Of());
        },
        useDeferredValue: function (e) {
          return ((te = 'useDeferredValue'), nt(), we(), ES(e));
        },
        useTransition: function () {
          return ((te = 'useTransition'), nt(), we(), TS());
        },
        useMutableSource: function (e, t, n) {
          return ((te = 'useMutableSource'), nt(), we(), void 0);
        },
        useSyncExternalStore: function (e, t, n) {
          return ((te = 'useSyncExternalStore'), nt(), we(), Ef(e, t));
        },
        useId: function () {
          return ((te = 'useId'), nt(), we(), Lf());
        },
        unstable_isNewReconciler: Ne,
      }));
  }
  var Oi = i.unstable_now,
    NS = 0,
    Pf = -1,
    su = -1,
    zf = -1,
    yh = !1,
    Uf = !1;
  function PS() {
    return yh;
  }
  function V1() {
    Uf = !0;
  }
  function H1() {
    ((yh = !1), (Uf = !1));
  }
  function I1() {
    ((yh = Uf), (Uf = !1));
  }
  function zS() {
    return NS;
  }
  function US() {
    NS = Oi();
  }
  function gh(e) {
    ((su = Oi()), e.actualStartTime < 0 && (e.actualStartTime = Oi()));
  }
  function FS(e) {
    su = -1;
  }
  function Ff(e, t) {
    if (su >= 0) {
      var n = Oi() - su;
      ((e.actualDuration += n), t && (e.selfBaseDuration = n), (su = -1));
    }
  }
  function ha(e) {
    if (Pf >= 0) {
      var t = Oi() - Pf;
      Pf = -1;
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
  function bh(e) {
    if (zf >= 0) {
      var t = Oi() - zf;
      zf = -1;
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
    Pf = Oi();
  }
  function Sh() {
    zf = Oi();
  }
  function Eh(e) {
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
  var Ch = {},
    wh,
    Th,
    xh,
    Rh,
    _h,
    VS,
    Vf,
    Dh,
    Oh,
    Ah,
    uu;
  {
    ((wh = new Set()),
      (Th = new Set()),
      (xh = new Set()),
      (Rh = new Set()),
      (Dh = new Set()),
      (_h = new Set()),
      (Oh = new Set()),
      (Ah = new Set()),
      (uu = new Set()));
    var HS = new Set();
    ((Vf = function (e, t) {
      if (!(e === null || typeof e == 'function')) {
        var n = t + '_' + e;
        HS.has(n) ||
          (HS.add(n),
          d(
            '%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.',
            t,
            e
          ));
      }
    }),
      (VS = function (e, t) {
        if (t === void 0) {
          var n = Ct(e) || 'Component';
          _h.has(n) ||
            (_h.add(n),
            d(
              '%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.',
              n
            ));
        }
      }),
      Object.defineProperty(Ch, '_processChildContext', {
        enumerable: !1,
        value: function () {
          throw new Error(
            "_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal)."
          );
        },
      }),
      Object.freeze(Ch));
  }
  function Mh(e, t, n, a) {
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
      VS(t, u);
    }
    var p = u == null ? l : ct({}, l, u);
    if (((e.memoizedState = p), e.lanes === fe)) {
      var v = e.updateQueue;
      v.baseState = p;
    }
  }
  var Lh = {
    isMounted: Lx,
    enqueueSetState: function (e, t, n) {
      var a = Bo(e),
        l = nr(),
        u = ki(a),
        p = Ya(l, u);
      ((p.payload = t), n != null && (Vf(n, 'setState'), (p.callback = n)));
      var v = xi(a, p, u);
      (v !== null && (wn(v, a, u, l), vf(v, a, u)), up(a, u));
    },
    enqueueReplaceState: function (e, t, n) {
      var a = Bo(e),
        l = nr(),
        u = ki(a),
        p = Ya(l, u);
      ((p.tag = rS),
        (p.payload = t),
        n != null && (Vf(n, 'replaceState'), (p.callback = n)));
      var v = xi(a, p, u);
      (v !== null && (wn(v, a, u, l), vf(v, a, u)), up(a, u));
    },
    enqueueForceUpdate: function (e, t) {
      var n = Bo(e),
        a = nr(),
        l = ki(n),
        u = Ya(a, l);
      ((u.tag = ff), t != null && (Vf(t, 'forceUpdate'), (u.callback = t)));
      var p = xi(n, u, l);
      (p !== null && (wn(p, n, l, a), vf(p, n, l)), uR(n, l));
    },
  };
  function IS(e, t, n, a, l, u, p) {
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
      ? !Ms(n, a) || !Ms(l, u)
      : !0;
  }
  function B1(e, t, n) {
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
          !uu.has(t) &&
          (e.mode & an) === je &&
          (uu.add(t),
          d(
            `%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`,
            l
          )),
        t.contextTypes &&
          !uu.has(t) &&
          (e.mode & an) === je &&
          (uu.add(t),
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
          !Oh.has(t) &&
          (Oh.add(t),
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
          !xh.has(t) &&
          (xh.add(t),
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
  function BS(e, t) {
    ((t.updater = Lh),
      (e.stateNode = t),
      _x(t, e),
      (t._reactInternalInstance = Ch));
  }
  function jS(e, t, n) {
    var a = !1,
      l = wr,
      u = wr,
      p = t.contextType;
    if ('contextType' in t) {
      var v =
        p === null ||
        (p !== void 0 && p.$$typeof === ce && p._context === void 0);
      if (!v && !Ah.has(t)) {
        Ah.add(t);
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
      l = ol(e, t, !0);
      var C = t.contextTypes;
      ((a = C != null), (u = a ? ll(e, l) : wr));
    }
    var w = new t(n, u);
    if (e.mode & an) {
      Dn(!0);
      try {
        w = new t(n, u);
      } finally {
        Dn(!1);
      }
    }
    var N = (e.memoizedState =
      w.state !== null && w.state !== void 0 ? w.state : null);
    BS(e, w);
    {
      if (typeof t.getDerivedStateFromProps == 'function' && N === null) {
        var k = Ct(t) || 'Component';
        Th.has(k) ||
          (Th.add(k),
          d(
            '`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.',
            k,
            w.state === null ? 'null' : 'undefined',
            k
          ));
      }
      if (
        typeof t.getDerivedStateFromProps == 'function' ||
        typeof w.getSnapshotBeforeUpdate == 'function'
      ) {
        var j = null,
          G = null,
          K = null;
        if (
          (typeof w.componentWillMount == 'function' &&
          w.componentWillMount.__suppressDeprecationWarning !== !0
            ? (j = 'componentWillMount')
            : typeof w.UNSAFE_componentWillMount == 'function' &&
              (j = 'UNSAFE_componentWillMount'),
          typeof w.componentWillReceiveProps == 'function' &&
          w.componentWillReceiveProps.__suppressDeprecationWarning !== !0
            ? (G = 'componentWillReceiveProps')
            : typeof w.UNSAFE_componentWillReceiveProps == 'function' &&
              (G = 'UNSAFE_componentWillReceiveProps'),
          typeof w.componentWillUpdate == 'function' &&
          w.componentWillUpdate.__suppressDeprecationWarning !== !0
            ? (K = 'componentWillUpdate')
            : typeof w.UNSAFE_componentWillUpdate == 'function' &&
              (K = 'UNSAFE_componentWillUpdate'),
          j !== null || G !== null || K !== null)
        ) {
          var xe = Ct(t) || 'Component',
            Ie =
              typeof t.getDerivedStateFromProps == 'function'
                ? 'getDerivedStateFromProps()'
                : 'getSnapshotBeforeUpdate()';
          Rh.has(xe) ||
            (Rh.add(xe),
            d(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`,
              xe,
              Ie,
              j !== null
                ? `
  ` + j
                : '',
              G !== null
                ? `
  ` + G
                : '',
              K !== null
                ? `
  ` + K
                : ''
            ));
        }
      }
    }
    return (a && Lb(e, l, u), w);
  }
  function j1(e, t) {
    var n = t.state;
    (typeof t.componentWillMount == 'function' && t.componentWillMount(),
      typeof t.UNSAFE_componentWillMount == 'function' &&
        t.UNSAFE_componentWillMount(),
      n !== t.state &&
        (d(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          lt(e) || 'Component'
        ),
        Lh.enqueueReplaceState(t, t.state, null)));
  }
  function $S(e, t, n, a) {
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
        wh.has(u) ||
          (wh.add(u),
          d(
            "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
            u
          ));
      }
      Lh.enqueueReplaceState(t, t.state, null);
    }
  }
  function kh(e, t, n, a) {
    B1(e, t, n);
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Bv(e));
    var u = t.contextType;
    if (typeof u == 'object' && u !== null) l.context = dn(u);
    else {
      var p = ol(e, t, !0);
      l.context = ll(e, p);
    }
    {
      if (l.state === n) {
        var v = Ct(t) || 'Component';
        Dh.has(v) ||
          (Dh.add(v),
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
      (typeof y == 'function' && (Mh(e, t, y, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps != 'function' &&
        typeof l.getSnapshotBeforeUpdate != 'function' &&
        (typeof l.UNSAFE_componentWillMount == 'function' ||
          typeof l.componentWillMount == 'function') &&
        (j1(e, l), hf(e, n, l, a), (l.state = e.memoizedState)),
      typeof l.componentDidMount == 'function')
    ) {
      var C = St;
      ((C |= eo), (e.mode & sa) !== je && (C |= Pa), (e.flags |= C));
    }
  }
  function $1(e, t, n, a) {
    var l = e.stateNode,
      u = e.memoizedProps;
    l.props = u;
    var p = l.context,
      v = t.contextType,
      y = wr;
    if (typeof v == 'object' && v !== null) y = dn(v);
    else {
      var C = ol(e, t, !0);
      y = ll(e, C);
    }
    var w = t.getDerivedStateFromProps,
      N =
        typeof w == 'function' ||
        typeof l.getSnapshotBeforeUpdate == 'function';
    (!N &&
      (typeof l.UNSAFE_componentWillReceiveProps == 'function' ||
        typeof l.componentWillReceiveProps == 'function') &&
      (u !== n || p !== y) &&
      $S(e, l, n, y),
      iS());
    var k = e.memoizedState,
      j = (l.state = k);
    if (
      (hf(e, n, l, a),
      (j = e.memoizedState),
      u === n && k === j && !Xc() && !mf())
    ) {
      if (typeof l.componentDidMount == 'function') {
        var G = St;
        ((G |= eo), (e.mode & sa) !== je && (G |= Pa), (e.flags |= G));
      }
      return !1;
    }
    typeof w == 'function' && (Mh(e, t, w, n), (j = e.memoizedState));
    var K = mf() || IS(e, t, u, n, k, j, y);
    if (K) {
      if (
        (!N &&
          (typeof l.UNSAFE_componentWillMount == 'function' ||
            typeof l.componentWillMount == 'function') &&
          (typeof l.componentWillMount == 'function' && l.componentWillMount(),
          typeof l.UNSAFE_componentWillMount == 'function' &&
            l.UNSAFE_componentWillMount()),
        typeof l.componentDidMount == 'function')
      ) {
        var xe = St;
        ((xe |= eo), (e.mode & sa) !== je && (xe |= Pa), (e.flags |= xe));
      }
    } else {
      if (typeof l.componentDidMount == 'function') {
        var Ie = St;
        ((Ie |= eo), (e.mode & sa) !== je && (Ie |= Pa), (e.flags |= Ie));
      }
      ((e.memoizedProps = n), (e.memoizedState = j));
    }
    return ((l.props = n), (l.state = j), (l.context = y), K);
  }
  function Y1(e, t, n, a, l) {
    var u = t.stateNode;
    aS(e, t);
    var p = t.memoizedProps,
      v = t.type === t.elementType ? p : qr(t.type, p);
    u.props = v;
    var y = t.pendingProps,
      C = u.context,
      w = n.contextType,
      N = wr;
    if (typeof w == 'object' && w !== null) N = dn(w);
    else {
      var k = ol(t, n, !0);
      N = ll(t, k);
    }
    var j = n.getDerivedStateFromProps,
      G =
        typeof j == 'function' ||
        typeof u.getSnapshotBeforeUpdate == 'function';
    (!G &&
      (typeof u.UNSAFE_componentWillReceiveProps == 'function' ||
        typeof u.componentWillReceiveProps == 'function') &&
      (p !== y || C !== N) &&
      $S(t, u, a, N),
      iS());
    var K = t.memoizedState,
      xe = (u.state = K);
    if (
      (hf(t, a, u, l),
      (xe = t.memoizedState),
      p === y && K === xe && !Xc() && !mf() && !Le)
    )
      return (
        typeof u.componentDidUpdate == 'function' &&
          (p !== e.memoizedProps || K !== e.memoizedState) &&
          (t.flags |= St),
        typeof u.getSnapshotBeforeUpdate == 'function' &&
          (p !== e.memoizedProps || K !== e.memoizedState) &&
          (t.flags |= Ji),
        !1
      );
    typeof j == 'function' && (Mh(t, n, j, a), (xe = t.memoizedState));
    var Ie = mf() || IS(t, n, v, a, K, xe, N) || Le;
    return (
      Ie
        ? (!G &&
            (typeof u.UNSAFE_componentWillUpdate == 'function' ||
              typeof u.componentWillUpdate == 'function') &&
            (typeof u.componentWillUpdate == 'function' &&
              u.componentWillUpdate(a, xe, N),
            typeof u.UNSAFE_componentWillUpdate == 'function' &&
              u.UNSAFE_componentWillUpdate(a, xe, N)),
          typeof u.componentDidUpdate == 'function' && (t.flags |= St),
          typeof u.getSnapshotBeforeUpdate == 'function' && (t.flags |= Ji))
        : (typeof u.componentDidUpdate == 'function' &&
            (p !== e.memoizedProps || K !== e.memoizedState) &&
            (t.flags |= St),
          typeof u.getSnapshotBeforeUpdate == 'function' &&
            (p !== e.memoizedProps || K !== e.memoizedState) &&
            (t.flags |= Ji),
          (t.memoizedProps = a),
          (t.memoizedState = xe)),
      (u.props = a),
      (u.state = xe),
      (u.context = N),
      Ie
    );
  }
  function bo(e, t) {
    return { value: e, source: t, stack: Ql(t), digest: null };
  }
  function Nh(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function G1(e, t) {
    return !0;
  }
  function Ph(e, t) {
    try {
      var n = G1(e, t);
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
        var w = lt(e) || 'Anonymous';
        C =
          'React will try to recreate this component tree from scratch ' +
          ('using the error boundary you provided, ' + w + '.');
      }
      var N =
        y +
        `
` +
        p +
        `

` +
        ('' + C);
      console.error(N);
    } catch (k) {
      setTimeout(function () {
        throw k;
      });
    }
  }
  var W1 = typeof WeakMap == 'function' ? WeakMap : Map;
  function YS(e, t, n) {
    var a = Ya(jt, n);
    ((a.tag = Hv), (a.payload = { element: null }));
    var l = t.value;
    return (
      (a.callback = function () {
        (VA(l), Ph(e, t));
      }),
      a
    );
  }
  function zh(e, t, n) {
    var a = Ya(jt, n);
    a.tag = Hv;
    var l = e.type.getDerivedStateFromError;
    if (typeof l == 'function') {
      var u = t.value;
      ((a.payload = function () {
        return l(u);
      }),
        (a.callback = function () {
          (nC(e), Ph(e, t));
        }));
    }
    var p = e.stateNode;
    return (
      p !== null &&
        typeof p.componentDidCatch == 'function' &&
        (a.callback = function () {
          (nC(e), Ph(e, t), typeof l != 'function' && UA(this));
          var y = t.value,
            C = t.stack;
          (this.componentDidCatch(y, { componentStack: C !== null ? C : '' }),
            typeof l != 'function' &&
              (br(e.lanes, tt) ||
                d(
                  '%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.',
                  lt(e) || 'Unknown'
                )));
        }),
      a
    );
  }
  function GS(e, t, n) {
    var a = e.pingCache,
      l;
    if (
      (a === null
        ? ((a = e.pingCache = new W1()), (l = new Set()), a.set(t, l))
        : ((l = a.get(t)), l === void 0 && ((l = new Set()), a.set(t, l))),
      !l.has(n))
    ) {
      l.add(n);
      var u = HA.bind(null, e, t, n);
      (Ir && Ru(e, n), t.then(u, u));
    }
  }
  function q1(e, t, n, a) {
    var l = e.updateQueue;
    if (l === null) {
      var u = new Set();
      (u.add(n), (e.updateQueue = u));
    } else l.add(n);
  }
  function X1(e, t) {
    var n = e.tag;
    if ((e.mode & yt) === je && (n === m || n === z || n === ie)) {
      var a = e.alternate;
      a
        ? ((e.updateQueue = a.updateQueue),
          (e.memoizedState = a.memoizedState),
          (e.lanes = a.lanes))
        : ((e.updateQueue = null), (e.memoizedState = null));
    }
  }
  function WS(e) {
    var t = e;
    do {
      if (t.tag === F && O1(t)) return t;
      t = t.return;
    } while (t !== null);
    return null;
  }
  function qS(e, t, n, a, l) {
    if ((e.mode & yt) === je) {
      if (e === t) e.flags |= Zn;
      else {
        if (
          ((e.flags |= Dt),
          (n.flags |= np),
          (n.flags &= ~(Dx | ss)),
          n.tag === g)
        ) {
          var u = n.alternate;
          if (u === null) n.tag = re;
          else {
            var p = Ya(jt, tt);
            ((p.tag = ff), xi(n, p, tt));
          }
        }
        n.lanes = st(n.lanes, tt);
      }
      return e;
    }
    return ((e.flags |= Zn), (e.lanes = l), e);
  }
  function Q1(e, t, n, a, l) {
    if (
      ((n.flags |= ss),
      Ir && Ru(e, l),
      a !== null && typeof a == 'object' && typeof a.then == 'function')
    ) {
      var u = a;
      (X1(n), Nn() && n.mode & yt && Vb());
      var p = WS(t);
      if (p !== null) {
        ((p.flags &= ~ka),
          qS(p, t, n, e, l),
          p.mode & yt && GS(e, u, l),
          q1(p, e, u));
        return;
      } else {
        if (!gR(l)) {
          (GS(e, u, l), hm());
          return;
        }
        var v = new Error(
          'A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.'
        );
        a = v;
      }
    } else if (Nn() && n.mode & yt) {
      Vb();
      var y = WS(t);
      if (y !== null) {
        ((y.flags & Zn) === We && (y.flags |= ka),
          qS(y, t, n, e, l),
          Dv(bo(a, n)));
        return;
      }
    }
    ((a = bo(a, n)), OA(a));
    var C = t;
    do {
      switch (C.tag) {
        case S: {
          var w = a;
          C.flags |= Zn;
          var N = ms(l);
          C.lanes = st(C.lanes, N);
          var k = YS(C, w, N);
          jv(C, k);
          return;
        }
        case g:
          var j = a,
            G = C.type,
            K = C.stateNode;
          if (
            (C.flags & Dt) === We &&
            (typeof G.getDerivedStateFromError == 'function' ||
              (K !== null &&
                typeof K.componentDidCatch == 'function' &&
                !WE(K)))
          ) {
            C.flags |= Zn;
            var xe = ms(l);
            C.lanes = st(C.lanes, xe);
            var Ie = zh(C, j, xe);
            jv(C, Ie);
            return;
          }
          break;
      }
      C = C.return;
    } while (C !== null);
  }
  function K1() {
    return null;
  }
  var cu = o.ReactCurrentOwner,
    Xr = !1,
    Uh,
    fu,
    Fh,
    Vh,
    Hh,
    So,
    Ih,
    Hf,
    du;
  ((Uh = {}),
    (fu = {}),
    (Fh = {}),
    (Vh = {}),
    (Hh = {}),
    (So = !1),
    (Ih = {}),
    (Hf = {}),
    (du = {}));
  function er(e, t, n, a) {
    e === null
      ? (t.child = Kb(t, null, n, a))
      : (t.child = fl(t, e.child, n, a));
  }
  function J1(e, t, n, a) {
    ((t.child = fl(t, e.child, null, a)), (t.child = fl(t, null, n, a)));
  }
  function XS(e, t, n, a, l) {
    if (t.type !== t.elementType) {
      var u = n.propTypes;
      u && jr(u, a, 'prop', Ct(n));
    }
    var p = n.render,
      v = t.ref,
      y,
      C;
    (pl(t, l), cs(t));
    {
      if (
        ((cu.current = t),
        yr(!0),
        (y = bl(e, t, p, a, v, l)),
        (C = Sl()),
        t.mode & an)
      ) {
        Dn(!0);
        try {
          ((y = bl(e, t, p, a, v, l)), (C = Sl()));
        } finally {
          Dn(!1);
        }
      }
      yr(!1);
    }
    return (
      Go(),
      e !== null && !Xr
        ? (fS(e, t, l), Ga(e, t, l))
        : (Nn() && C && Cv(t), (t.flags |= jo), er(e, t, y, l), t.child)
    );
  }
  function QS(e, t, n, a, l) {
    if (e === null) {
      var u = n.type;
      if (rM(u) && n.compare === null && n.defaultProps === void 0) {
        var p = u;
        return (
          (p = Dl(u)),
          (t.tag = ie),
          (t.type = p),
          $h(t, u),
          KS(e, t, p, a, l)
        );
      }
      {
        var v = u.propTypes;
        if ((v && jr(v, a, 'prop', Ct(u)), n.defaultProps !== void 0)) {
          var y = Ct(u) || 'Unknown';
          du[y] ||
            (d(
              '%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.',
              y
            ),
            (du[y] = !0));
        }
      }
      var C = Rm(n.type, null, a, t, t.mode, l);
      return ((C.ref = t.ref), (C.return = t), (t.child = C), C);
    }
    {
      var w = n.type,
        N = w.propTypes;
      N && jr(N, a, 'prop', Ct(w));
    }
    var k = e.child,
      j = Qh(e, l);
    if (!j) {
      var G = k.memoizedProps,
        K = n.compare;
      if (((K = K !== null ? K : Ms), K(G, a) && e.ref === t.ref))
        return Ga(e, t, l);
    }
    t.flags |= jo;
    var xe = xo(k, a);
    return ((xe.ref = t.ref), (xe.return = t), (t.child = xe), xe);
  }
  function KS(e, t, n, a, l) {
    if (t.type !== t.elementType) {
      var u = t.elementType;
      if (u.$$typeof === Ge) {
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
      var w = e.memoizedProps;
      if (Ms(w, a) && e.ref === t.ref && t.type === e.type)
        if (((Xr = !1), (t.pendingProps = a = w), Qh(e, l)))
          (e.flags & np) !== We && (Xr = !0);
        else return ((t.lanes = e.lanes), Ga(e, t, l));
    }
    return Bh(e, t, n, a, l);
  }
  function JS(e, t, n) {
    var a = t.pendingProps,
      l = a.children,
      u = e !== null ? e.memoizedState : null;
    if (a.mode === 'hidden' || ft)
      if ((t.mode & yt) === je) {
        var p = { baseLanes: fe, cachePool: null, transitions: null };
        ((t.memoizedState = p), Zf(t, n));
      } else if (br(n, gr)) {
        var N = { baseLanes: fe, cachePool: null, transitions: null };
        t.memoizedState = N;
        var k = u !== null ? u.baseLanes : n;
        Zf(t, k);
      } else {
        var v = null,
          y;
        if (u !== null) {
          var C = u.baseLanes;
          y = st(C, n);
        } else y = n;
        t.lanes = t.childLanes = gr;
        var w = { baseLanes: y, cachePool: v, transitions: null };
        return ((t.memoizedState = w), (t.updateQueue = null), Zf(t, y), null);
      }
    else {
      var j;
      (u !== null
        ? ((j = st(u.baseLanes, n)), (t.memoizedState = null))
        : (j = n),
        Zf(t, j));
    }
    return (er(e, t, l, n), t.child);
  }
  function Z1(e, t, n) {
    var a = t.pendingProps;
    return (er(e, t, a, n), t.child);
  }
  function eO(e, t, n) {
    var a = t.pendingProps.children;
    return (er(e, t, a, n), t.child);
  }
  function tO(e, t, n) {
    {
      t.flags |= St;
      {
        var a = t.stateNode;
        ((a.effectDuration = 0), (a.passiveEffectDuration = 0));
      }
    }
    var l = t.pendingProps,
      u = l.children;
    return (er(e, t, u, n), t.child);
  }
  function ZS(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= pi), (t.flags |= rp));
  }
  function Bh(e, t, n, a, l) {
    if (t.type !== t.elementType) {
      var u = n.propTypes;
      u && jr(u, a, 'prop', Ct(n));
    }
    var p;
    {
      var v = ol(t, n, !0);
      p = ll(t, v);
    }
    var y, C;
    (pl(t, l), cs(t));
    {
      if (
        ((cu.current = t),
        yr(!0),
        (y = bl(e, t, n, a, p, l)),
        (C = Sl()),
        t.mode & an)
      ) {
        Dn(!0);
        try {
          ((y = bl(e, t, n, a, p, l)), (C = Sl()));
        } finally {
          Dn(!1);
        }
      }
      yr(!1);
    }
    return (
      Go(),
      e !== null && !Xr
        ? (fS(e, t, l), Ga(e, t, l))
        : (Nn() && C && Cv(t), (t.flags |= jo), er(e, t, y, l), t.child)
    );
  }
  function eE(e, t, n, a, l) {
    {
      switch (gM(t)) {
        case !1: {
          var u = t.stateNode,
            p = t.type,
            v = new p(t.memoizedProps, u.context),
            y = v.state;
          u.updater.enqueueSetState(u, y, null);
          break;
        }
        case !0: {
          ((t.flags |= Dt), (t.flags |= Zn));
          var C = new Error('Simulated error coming from DevTools'),
            w = ms(l);
          t.lanes = st(t.lanes, w);
          var N = zh(t, bo(C, t), w);
          jv(t, N);
          break;
        }
      }
      if (t.type !== t.elementType) {
        var k = n.propTypes;
        k && jr(k, a, 'prop', Ct(n));
      }
    }
    var j;
    (fa(n) ? ((j = !0), Kc(t)) : (j = !1), pl(t, l));
    var G = t.stateNode,
      K;
    G === null
      ? (Bf(e, t), jS(t, n, a), kh(t, n, a, l), (K = !0))
      : e === null
        ? (K = $1(t, n, a, l))
        : (K = Y1(e, t, n, a, l));
    var xe = jh(e, t, n, K, j, l);
    {
      var Ie = t.stateNode;
      K &&
        Ie.props !== a &&
        (So ||
          d(
            'It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.',
            lt(t) || 'a component'
          ),
        (So = !0));
    }
    return xe;
  }
  function jh(e, t, n, a, l, u) {
    ZS(e, t);
    var p = (t.flags & Dt) !== We;
    if (!a && !p) return (l && Pb(t, n, !1), Ga(e, t, u));
    var v = t.stateNode;
    cu.current = t;
    var y;
    if (p && typeof n.getDerivedStateFromError != 'function')
      ((y = null), FS());
    else {
      cs(t);
      {
        if ((yr(!0), (y = v.render()), t.mode & an)) {
          Dn(!0);
          try {
            v.render();
          } finally {
            Dn(!1);
          }
        }
        yr(!1);
      }
      Go();
    }
    return (
      (t.flags |= jo),
      e !== null && p ? J1(e, t, y, u) : er(e, t, y, u),
      (t.memoizedState = v.state),
      l && Pb(t, n, !0),
      t.child
    );
  }
  function tE(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? kb(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && kb(e, t.context, !1),
      $v(e, t.containerInfo));
  }
  function nO(e, t, n) {
    if ((tE(t), e === null))
      throw new Error('Should have a current fiber. This is a bug in React.');
    var a = t.pendingProps,
      l = t.memoizedState,
      u = l.element;
    (aS(e, t), hf(t, a, null, n));
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
      if (((C.baseState = y), (t.memoizedState = y), t.flags & ka)) {
        var w = bo(
          new Error(
            'There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering.'
          ),
          t
        );
        return nE(e, t, v, n, w);
      } else if (v !== u) {
        var N = bo(
          new Error(
            'This root received an early update, before anything was able hydrate. Switched the entire root to client rendering.'
          ),
          t
        );
        return nE(e, t, v, n, N);
      } else {
        i1(t);
        var k = Kb(t, null, v, n);
        t.child = k;
        for (var j = k; j; )
          ((j.flags = (j.flags & ~fn) | Na), (j = j.sibling));
      }
    } else {
      if ((cl(), v === u)) return Ga(e, t, n);
      er(e, t, v, n);
    }
    return t.child;
  }
  function nE(e, t, n, a, l) {
    return (cl(), Dv(l), (t.flags |= ka), er(e, t, n, a), t.child);
  }
  function rO(e, t, n) {
    (sS(t), e === null && _v(t));
    var a = t.type,
      l = t.pendingProps,
      u = e !== null ? e.memoizedProps : null,
      p = l.children,
      v = sv(a, l);
    return (
      v ? (p = null) : u !== null && sv(a, u) && (t.flags |= ls),
      ZS(e, t),
      er(e, t, p, n),
      t.child
    );
  }
  function aO(e, t) {
    return (e === null && _v(t), null);
  }
  function iO(e, t, n, a) {
    Bf(e, t);
    var l = t.pendingProps,
      u = n,
      p = u._payload,
      v = u._init,
      y = v(p);
    t.type = y;
    var C = (t.tag = aM(y)),
      w = qr(y, l),
      N;
    switch (C) {
      case m:
        return ($h(t, y), (t.type = y = Dl(y)), (N = Bh(null, t, y, w, a)), N);
      case g:
        return ((t.type = y = Sm(y)), (N = eE(null, t, y, w, a)), N);
      case z:
        return ((t.type = y = Em(y)), (N = XS(null, t, y, w, a)), N);
      case se: {
        if (t.type !== t.elementType) {
          var k = y.propTypes;
          k && jr(k, w, 'prop', Ct(y));
        }
        return ((N = QS(null, t, y, qr(y.type, w), a)), N);
      }
    }
    var j = '';
    throw (
      y !== null &&
        typeof y == 'object' &&
        y.$$typeof === Ge &&
        (j = ' Did you wrap a component in React.lazy() more than once?'),
      new Error(
        'Element type is invalid. Received a promise that resolves to: ' +
          y +
          '. ' +
          ('Lazy element type must resolve to a class or function.' + j)
      )
    );
  }
  function oO(e, t, n, a, l) {
    (Bf(e, t), (t.tag = g));
    var u;
    return (
      fa(n) ? ((u = !0), Kc(t)) : (u = !1),
      pl(t, l),
      jS(t, n, a),
      kh(t, n, a, l),
      jh(null, t, n, !0, u, l)
    );
  }
  function lO(e, t, n, a) {
    Bf(e, t);
    var l = t.pendingProps,
      u;
    {
      var p = ol(t, n, !1);
      u = ll(t, p);
    }
    pl(t, a);
    var v, y;
    cs(t);
    {
      if (n.prototype && typeof n.prototype.render == 'function') {
        var C = Ct(n) || 'Unknown';
        Uh[C] ||
          (d(
            "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
            C,
            C
          ),
          (Uh[C] = !0));
      }
      (t.mode & an && Yr.recordLegacyContextWarning(t, null),
        yr(!0),
        (cu.current = t),
        (v = bl(null, t, n, l, u, a)),
        (y = Sl()),
        yr(!1));
    }
    if (
      (Go(),
      (t.flags |= jo),
      typeof v == 'object' &&
        v !== null &&
        typeof v.render == 'function' &&
        v.$$typeof === void 0)
    ) {
      var w = Ct(n) || 'Unknown';
      fu[w] ||
        (d(
          "The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",
          w,
          w,
          w
        ),
        (fu[w] = !0));
    }
    if (
      typeof v == 'object' &&
      v !== null &&
      typeof v.render == 'function' &&
      v.$$typeof === void 0
    ) {
      {
        var N = Ct(n) || 'Unknown';
        fu[N] ||
          (d(
            "The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",
            N,
            N,
            N
          ),
          (fu[N] = !0));
      }
      ((t.tag = g), (t.memoizedState = null), (t.updateQueue = null));
      var k = !1;
      return (
        fa(n) ? ((k = !0), Kc(t)) : (k = !1),
        (t.memoizedState =
          v.state !== null && v.state !== void 0 ? v.state : null),
        Bv(t),
        BS(t, v),
        kh(t, n, l, a),
        jh(null, t, n, !0, k, a)
      );
    } else {
      if (((t.tag = m), t.mode & an)) {
        Dn(!0);
        try {
          ((v = bl(null, t, n, l, u, a)), (y = Sl()));
        } finally {
          Dn(!1);
        }
      }
      return (Nn() && y && Cv(t), er(null, t, v, a), $h(t, n), t.child);
    }
  }
  function $h(e, t) {
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
          a = ui();
        a &&
          (n +=
            `

Check the render method of \`` +
            a +
            '`.');
        var l = a || '',
          u = e._debugSource;
        (u && (l = u.fileName + ':' + u.lineNumber),
          Hh[l] ||
            ((Hh[l] = !0),
            d(
              'Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s',
              n
            )));
      }
      if (t.defaultProps !== void 0) {
        var p = Ct(t) || 'Unknown';
        du[p] ||
          (d(
            '%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.',
            p
          ),
          (du[p] = !0));
      }
      if (typeof t.getDerivedStateFromProps == 'function') {
        var v = Ct(t) || 'Unknown';
        Vh[v] ||
          (d(
            '%s: Function components do not support getDerivedStateFromProps.',
            v
          ),
          (Vh[v] = !0));
      }
      if (typeof t.contextType == 'object' && t.contextType !== null) {
        var y = Ct(t) || 'Unknown';
        Fh[y] ||
          (d('%s: Function components do not support contextType.', y),
          (Fh[y] = !0));
      }
    }
  }
  var Yh = { dehydrated: null, treeContext: null, retryLane: On };
  function Gh(e) {
    return { baseLanes: e, cachePool: K1(), transitions: null };
  }
  function sO(e, t) {
    var n = null;
    return {
      baseLanes: st(e.baseLanes, t),
      cachePool: n,
      transitions: e.transitions,
    };
  }
  function uO(e, t, n, a) {
    if (t !== null) {
      var l = t.memoizedState;
      if (l === null) return !1;
    }
    return Wv(e, tu);
  }
  function cO(e, t) {
    return Sc(e.childLanes, t);
  }
  function rE(e, t, n) {
    var a = t.pendingProps;
    bM(t) && (t.flags |= Dt);
    var l = Gr.current,
      u = !1,
      p = (t.flags & Dt) !== We;
    if (
      (p || uO(l, e)
        ? ((u = !0), (t.flags &= ~Dt))
        : (e === null || e.memoizedState !== null) && (l = D1(l, cS)),
      (l = hl(l)),
      _i(t, l),
      e === null)
    ) {
      _v(t);
      var v = t.memoizedState;
      if (v !== null) {
        var y = v.dehydrated;
        if (y !== null) return hO(t, y);
      }
      var C = a.children,
        w = a.fallback;
      if (u) {
        var N = fO(t, C, w, n),
          k = t.child;
        return ((k.memoizedState = Gh(n)), (t.memoizedState = Yh), N);
      } else return Wh(t, C);
    } else {
      var j = e.memoizedState;
      if (j !== null) {
        var G = j.dehydrated;
        if (G !== null) return mO(e, t, p, a, G, j, n);
      }
      if (u) {
        var K = a.fallback,
          xe = a.children,
          Ie = pO(e, t, xe, K, n),
          ze = t.child,
          bt = e.child.memoizedState;
        return (
          (ze.memoizedState = bt === null ? Gh(n) : sO(bt, n)),
          (ze.childLanes = cO(e, n)),
          (t.memoizedState = Yh),
          Ie
        );
      } else {
        var pt = a.children,
          H = dO(e, t, pt, n);
        return ((t.memoizedState = null), H);
      }
    }
  }
  function Wh(e, t, n) {
    var a = e.mode,
      l = { mode: 'visible', children: t },
      u = qh(l, a);
    return ((u.return = e), (e.child = u), u);
  }
  function fO(e, t, n, a) {
    var l = e.mode,
      u = e.child,
      p = { mode: 'hidden', children: t },
      v,
      y;
    return (
      (l & yt) === je && u !== null
        ? ((v = u),
          (v.childLanes = fe),
          (v.pendingProps = p),
          e.mode & kt &&
            ((v.actualDuration = 0),
            (v.actualStartTime = -1),
            (v.selfBaseDuration = 0),
            (v.treeBaseDuration = 0)),
          (y = Pi(n, l, a, null)))
        : ((v = qh(p, l)), (y = Pi(n, l, a, null))),
      (v.return = e),
      (y.return = e),
      (v.sibling = y),
      (e.child = v),
      y
    );
  }
  function qh(e, t, n) {
    return aC(e, t, fe, null);
  }
  function aE(e, t) {
    return xo(e, t);
  }
  function dO(e, t, n, a) {
    var l = e.child,
      u = l.sibling,
      p = aE(l, { mode: 'visible', children: n });
    if (
      ((t.mode & yt) === je && (p.lanes = a),
      (p.return = t),
      (p.sibling = null),
      u !== null)
    ) {
      var v = t.deletions;
      v === null ? ((t.deletions = [u]), (t.flags |= Ki)) : v.push(u);
    }
    return ((t.child = p), p);
  }
  function pO(e, t, n, a, l) {
    var u = t.mode,
      p = e.child,
      v = p.sibling,
      y = { mode: 'hidden', children: n },
      C;
    if ((u & yt) === je && t.child !== p) {
      var w = t.child;
      ((C = w),
        (C.childLanes = fe),
        (C.pendingProps = y),
        t.mode & kt &&
          ((C.actualDuration = 0),
          (C.actualStartTime = -1),
          (C.selfBaseDuration = p.selfBaseDuration),
          (C.treeBaseDuration = p.treeBaseDuration)),
        (t.deletions = null));
    } else ((C = aE(p, y)), (C.subtreeFlags = p.subtreeFlags & za));
    var N;
    return (
      v !== null ? (N = xo(v, a)) : ((N = Pi(a, u, l, null)), (N.flags |= fn)),
      (N.return = t),
      (C.return = t),
      (C.sibling = N),
      (t.child = C),
      N
    );
  }
  function If(e, t, n, a) {
    (a !== null && Dv(a), fl(t, e.child, null, n));
    var l = t.pendingProps,
      u = l.children,
      p = Wh(t, u);
    return ((p.flags |= fn), (t.memoizedState = null), p);
  }
  function vO(e, t, n, a, l) {
    var u = t.mode,
      p = { mode: 'visible', children: n },
      v = qh(p, u),
      y = Pi(a, u, l, null);
    return (
      (y.flags |= fn),
      (v.return = t),
      (y.return = t),
      (v.sibling = y),
      (t.child = v),
      (t.mode & yt) !== je && fl(t, e.child, null, l),
      y
    );
  }
  function hO(e, t, n) {
    return (
      (e.mode & yt) === je
        ? (d(
            'Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components.'
          ),
          (e.lanes = tt))
        : dv(t)
          ? (e.lanes = ro)
          : (e.lanes = gr),
      null
    );
  }
  function mO(e, t, n, a, l, u, p) {
    if (n)
      if (t.flags & ka) {
        t.flags &= ~ka;
        var H = Nh(
          new Error(
            'There was an error while hydrating this Suspense boundary. Switched to client rendering.'
          )
        );
        return If(e, t, p, H);
      } else {
        if (t.memoizedState !== null)
          return ((t.child = e.child), (t.flags |= Dt), null);
        var J = a.children,
          I = a.fallback,
          he = vO(e, t, J, I, p),
          Ae = t.child;
        return ((Ae.memoizedState = Gh(p)), (t.memoizedState = Yh), he);
      }
    else {
      if ((r1(), (t.mode & yt) === je)) return If(e, t, p, null);
      if (dv(l)) {
        var v, y, C;
        {
          var w = SD(l);
          ((v = w.digest), (y = w.message), (C = w.stack));
        }
        var N;
        y
          ? (N = new Error(y))
          : (N = new Error(
              'The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.'
            ));
        var k = Nh(N, v, C);
        return If(e, t, p, k);
      }
      var j = br(p, e.childLanes);
      if (Xr || j) {
        var G = Jf();
        if (G !== null) {
          var K = RR(G, p);
          if (K !== On && K !== u.retryLane) {
            u.retryLane = K;
            var xe = jt;
            (cr(e, K), wn(G, e, K, xe));
          }
        }
        hm();
        var Ie = Nh(
          new Error(
            'This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition.'
          )
        );
        return If(e, t, p, Ie);
      } else if (_b(l)) {
        ((t.flags |= Dt), (t.child = e.child));
        var ze = IA.bind(null, e);
        return (ED(l, ze), null);
      } else {
        o1(t, l, u.treeContext);
        var bt = a.children,
          pt = Wh(t, bt);
        return ((pt.flags |= Na), pt);
      }
    }
  }
  function iE(e, t, n) {
    e.lanes = st(e.lanes, t);
    var a = e.alternate;
    (a !== null && (a.lanes = st(a.lanes, t)), Fv(e.return, t, n));
  }
  function yO(e, t, n) {
    for (var a = t; a !== null; ) {
      if (a.tag === F) {
        var l = a.memoizedState;
        l !== null && iE(a, n, e);
      } else if (a.tag === ue) iE(a, n, e);
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
  function gO(e) {
    for (var t = e, n = null; t !== null; ) {
      var a = t.alternate;
      (a !== null && bf(a) === null && (n = t), (t = t.sibling));
    }
    return n;
  }
  function bO(e) {
    if (
      e !== void 0 &&
      e !== 'forwards' &&
      e !== 'backwards' &&
      e !== 'together' &&
      !Ih[e]
    )
      if (((Ih[e] = !0), typeof e == 'string'))
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
  function SO(e, t) {
    e !== void 0 &&
      !Hf[e] &&
      (e !== 'collapsed' && e !== 'hidden'
        ? ((Hf[e] = !0),
          d(
            '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',
            e
          ))
        : t !== 'forwards' &&
          t !== 'backwards' &&
          ((Hf[e] = !0),
          d(
            '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
            e
          )));
  }
  function oE(e, t) {
    {
      var n = _t(e),
        a = !n && typeof mr(e) == 'function';
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
  function EO(e, t) {
    if (
      (t === 'forwards' || t === 'backwards') &&
      e !== void 0 &&
      e !== null &&
      e !== !1
    )
      if (_t(e)) {
        for (var n = 0; n < e.length; n++) if (!oE(e[n], n)) return;
      } else {
        var a = mr(e);
        if (typeof a == 'function') {
          var l = a.call(e);
          if (l)
            for (var u = l.next(), p = 0; !u.done; u = l.next()) {
              if (!oE(u.value, p)) return;
              p++;
            }
        } else
          d(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            t
          );
      }
  }
  function Xh(e, t, n, a, l) {
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
  function lE(e, t, n) {
    var a = t.pendingProps,
      l = a.revealOrder,
      u = a.tail,
      p = a.children;
    (bO(l), SO(u, l), EO(p, l), er(e, t, p, n));
    var v = Gr.current,
      y = Wv(v, tu);
    if (y) ((v = qv(v, tu)), (t.flags |= Dt));
    else {
      var C = e !== null && (e.flags & Dt) !== We;
      (C && yO(t, t.child, n), (v = hl(v)));
    }
    if ((_i(t, v), (t.mode & yt) === je)) t.memoizedState = null;
    else
      switch (l) {
        case 'forwards': {
          var w = gO(t.child),
            N;
          (w === null
            ? ((N = t.child), (t.child = null))
            : ((N = w.sibling), (w.sibling = null)),
            Xh(t, !1, N, w, u));
          break;
        }
        case 'backwards': {
          var k = null,
            j = t.child;
          for (t.child = null; j !== null; ) {
            var G = j.alternate;
            if (G !== null && bf(G) === null) {
              t.child = j;
              break;
            }
            var K = j.sibling;
            ((j.sibling = k), (k = j), (j = K));
          }
          Xh(t, !0, k, null, u);
          break;
        }
        case 'together': {
          Xh(t, !1, null, null, void 0);
          break;
        }
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function CO(e, t, n) {
    $v(t, t.stateNode.containerInfo);
    var a = t.pendingProps;
    return (
      e === null ? (t.child = fl(t, null, a, n)) : er(e, t, a, n),
      t.child
    );
  }
  var sE = !1;
  function wO(e, t, n) {
    var a = t.type,
      l = a._context,
      u = t.pendingProps,
      p = t.memoizedProps,
      v = u.value;
    {
      'value' in u ||
        sE ||
        ((sE = !0),
        d(
          'The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?'
        ));
      var y = t.type.propTypes;
      y && jr(y, u, 'prop', 'Context.Provider');
    }
    if ((eS(t, l, v), p !== null)) {
      var C = p.value;
      if (Cr(C, v)) {
        if (p.children === u.children && !Xc()) return Ga(e, t, n);
      } else b1(t, l, n);
    }
    var w = u.children;
    return (er(e, t, w, n), t.child);
  }
  var uE = !1;
  function TO(e, t, n) {
    var a = t.type;
    a._context === void 0
      ? a !== a.Consumer &&
        (uE ||
          ((uE = !0),
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
      pl(t, n));
    var p = dn(a);
    cs(t);
    var v;
    return (
      (cu.current = t),
      yr(!0),
      (v = u(p)),
      yr(!1),
      Go(),
      (t.flags |= jo),
      er(e, t, v, n),
      t.child
    );
  }
  function pu() {
    Xr = !0;
  }
  function Bf(e, t) {
    (t.mode & yt) === je &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= fn));
  }
  function Ga(e, t, n) {
    return (
      e !== null && (t.dependencies = e.dependencies),
      FS(),
      xu(t.lanes),
      br(n, t.childLanes) ? (y1(e, t), t.child) : null
    );
  }
  function xO(e, t, n) {
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
        u === null ? ((a.deletions = [e]), (a.flags |= Ki)) : u.push(e),
        (n.flags |= fn),
        n
      );
    }
  }
  function Qh(e, t) {
    var n = e.lanes;
    return !!br(n, t);
  }
  function RO(e, t, n) {
    switch (t.tag) {
      case S:
        (tE(t), t.stateNode, cl());
        break;
      case D:
        sS(t);
        break;
      case g: {
        var a = t.type;
        fa(a) && Kc(t);
        break;
      }
      case T:
        $v(t, t.stateNode.containerInfo);
        break;
      case _: {
        var l = t.memoizedProps.value,
          u = t.type._context;
        eS(t, u, l);
        break;
      }
      case U:
        {
          var p = br(n, t.childLanes);
          p && (t.flags |= St);
          {
            var v = t.stateNode;
            ((v.effectDuration = 0), (v.passiveEffectDuration = 0));
          }
        }
        break;
      case F: {
        var y = t.memoizedState;
        if (y !== null) {
          if (y.dehydrated !== null)
            return (_i(t, hl(Gr.current)), (t.flags |= Dt), null);
          var C = t.child,
            w = C.childLanes;
          if (br(n, w)) return rE(e, t, n);
          _i(t, hl(Gr.current));
          var N = Ga(e, t, n);
          return N !== null ? N.sibling : null;
        } else _i(t, hl(Gr.current));
        break;
      }
      case ue: {
        var k = (e.flags & Dt) !== We,
          j = br(n, t.childLanes);
        if (k) {
          if (j) return lE(e, t, n);
          t.flags |= Dt;
        }
        var G = t.memoizedState;
        if (
          (G !== null &&
            ((G.rendering = null), (G.tail = null), (G.lastEffect = null)),
          _i(t, Gr.current),
          j)
        )
          break;
        return null;
      }
      case q:
      case ne:
        return ((t.lanes = fe), JS(e, t, n));
    }
    return Ga(e, t, n);
  }
  function cE(e, t, n) {
    if (t._debugNeedsRemount && e !== null)
      return xO(
        e,
        t,
        Rm(
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
      if (a !== l || Xc() || t.type !== e.type) Xr = !0;
      else {
        var u = Qh(e, n);
        if (!u && (t.flags & Dt) === We) return ((Xr = !1), RO(e, t, n));
        (e.flags & np) !== We ? (Xr = !0) : (Xr = !1);
      }
    } else if (((Xr = !1), Nn() && KD(t))) {
      var p = t.index,
        v = JD();
      Fb(t, v, p);
    }
    switch (((t.lanes = fe), t.tag)) {
      case E:
        return lO(e, t, t.type, n);
      case de: {
        var y = t.elementType;
        return iO(e, t, y, n);
      }
      case m: {
        var C = t.type,
          w = t.pendingProps,
          N = t.elementType === C ? w : qr(C, w);
        return Bh(e, t, C, N, n);
      }
      case g: {
        var k = t.type,
          j = t.pendingProps,
          G = t.elementType === k ? j : qr(k, j);
        return eE(e, t, k, G, n);
      }
      case S:
        return nO(e, t, n);
      case D:
        return rO(e, t, n);
      case O:
        return aO(e, t);
      case F:
        return rE(e, t, n);
      case T:
        return CO(e, t, n);
      case z: {
        var K = t.type,
          xe = t.pendingProps,
          Ie = t.elementType === K ? xe : qr(K, xe);
        return XS(e, t, K, Ie, n);
      }
      case x:
        return Z1(e, t, n);
      case P:
        return eO(e, t, n);
      case U:
        return tO(e, t, n);
      case _:
        return wO(e, t, n);
      case L:
        return TO(e, t, n);
      case se: {
        var ze = t.type,
          bt = t.pendingProps,
          pt = qr(ze, bt);
        if (t.type !== t.elementType) {
          var H = ze.propTypes;
          H && jr(H, pt, 'prop', Ct(ze));
        }
        return ((pt = qr(ze.type, pt)), QS(e, t, ze, pt, n));
      }
      case ie:
        return KS(e, t, t.type, t.pendingProps, n);
      case re: {
        var J = t.type,
          I = t.pendingProps,
          he = t.elementType === J ? I : qr(J, I);
        return oO(e, t, J, he, n);
      }
      case ue:
        return lE(e, t, n);
      case B:
        break;
      case q:
        return JS(e, t, n);
    }
    throw new Error(
      'Unknown unit of work tag (' +
        t.tag +
        '). This error is likely caused by a bug in React. Please file an issue.'
    );
  }
  function El(e) {
    e.flags |= St;
  }
  function fE(e) {
    ((e.flags |= pi), (e.flags |= rp));
  }
  var dE, Kh, pE, vE;
  ((dE = function (e, t, n, a) {
    for (var l = t.child; l !== null; ) {
      if (l.tag === D || l.tag === O) q_(e, l.stateNode);
      else if (l.tag !== T) {
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
    (Kh = function (e, t) {}),
    (pE = function (e, t, n, a, l) {
      var u = e.memoizedProps;
      if (u !== a) {
        var p = t.stateNode,
          v = Yv(),
          y = Q_(p, n, u, a, l, v);
        ((t.updateQueue = y), y && El(t));
      }
    }),
    (vE = function (e, t, n, a) {
      n !== a && El(t);
    }));
  function vu(e, t) {
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
      n = fe,
      a = We;
    if (t) {
      if ((e.mode & kt) !== je) {
        for (var y = e.selfBaseDuration, C = e.child; C !== null; )
          ((n = st(n, st(C.lanes, C.childLanes))),
            (a |= C.subtreeFlags & za),
            (a |= C.flags & za),
            (y += C.treeBaseDuration),
            (C = C.sibling));
        e.treeBaseDuration = y;
      } else
        for (var w = e.child; w !== null; )
          ((n = st(n, st(w.lanes, w.childLanes))),
            (a |= w.subtreeFlags & za),
            (a |= w.flags & za),
            (w.return = e),
            (w = w.sibling));
      e.subtreeFlags |= a;
    } else {
      if ((e.mode & kt) !== je) {
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
  function _O(e, t, n) {
    if (f1() && (t.mode & yt) !== je && (t.flags & Dt) === We)
      return (Yb(t), cl(), (t.flags |= ka | ss | Zn), !1);
    var a = nf(t);
    if (n !== null && n.dehydrated !== null)
      if (e === null) {
        if (!a)
          throw new Error(
            'A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.'
          );
        if ((u1(t), zn(t), (t.mode & kt) !== je)) {
          var l = n !== null;
          if (l) {
            var u = t.child;
            u !== null && (t.treeBaseDuration -= u.treeBaseDuration);
          }
        }
        return !1;
      } else {
        if (
          (cl(),
          (t.flags & Dt) === We && (t.memoizedState = null),
          (t.flags |= St),
          zn(t),
          (t.mode & kt) !== je)
        ) {
          var p = n !== null;
          if (p) {
            var v = t.child;
            v !== null && (t.treeBaseDuration -= v.treeBaseDuration);
          }
        }
        return !1;
      }
    else return (Gb(), !0);
  }
  function hE(e, t, n) {
    var a = t.pendingProps;
    switch ((wv(t), t.tag)) {
      case E:
      case de:
      case ie:
      case m:
      case z:
      case x:
      case P:
      case U:
      case L:
      case se:
        return (zn(t), null);
      case g: {
        var l = t.type;
        return (fa(l) && Qc(t), zn(t), null);
      }
      case S: {
        var u = t.stateNode;
        if (
          (vl(t),
          bv(t),
          Qv(),
          u.pendingContext &&
            ((u.context = u.pendingContext), (u.pendingContext = null)),
          e === null || e.child === null)
        ) {
          var p = nf(t);
          if (p) El(t);
          else if (e !== null) {
            var v = e.memoizedState;
            (!v.isDehydrated || (t.flags & ka) !== We) &&
              ((t.flags |= Ji), Gb());
          }
        }
        return (Kh(e, t), zn(t), null);
      }
      case D: {
        Gv(t);
        var y = lS(),
          C = t.type;
        if (e !== null && t.stateNode != null)
          (pE(e, t, C, a, y), e.ref !== t.ref && fE(t));
        else {
          if (!a) {
            if (t.stateNode === null)
              throw new Error(
                'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.'
              );
            return (zn(t), null);
          }
          var w = Yv(),
            N = nf(t);
          if (N) l1(t, y, w) && El(t);
          else {
            var k = W_(C, a, y, w, t);
            (dE(k, t, !1, !1), (t.stateNode = k), X_(k, C, a, y) && El(t));
          }
          t.ref !== null && fE(t);
        }
        return (zn(t), null);
      }
      case O: {
        var j = a;
        if (e && t.stateNode != null) {
          var G = e.memoizedProps;
          vE(e, t, G, j);
        } else {
          if (typeof j != 'string' && t.stateNode === null)
            throw new Error(
              'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.'
            );
          var K = lS(),
            xe = Yv(),
            Ie = nf(t);
          Ie ? s1(t) && El(t) : (t.stateNode = K_(j, K, xe, t));
        }
        return (zn(t), null);
      }
      case F: {
        ml(t);
        var ze = t.memoizedState;
        if (
          e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null)
        ) {
          var bt = _O(e, t, ze);
          if (!bt) return t.flags & Zn ? t : null;
        }
        if ((t.flags & Dt) !== We)
          return ((t.lanes = n), (t.mode & kt) !== je && Eh(t), t);
        var pt = ze !== null,
          H = e !== null && e.memoizedState !== null;
        if (pt !== H && pt) {
          var J = t.child;
          if (((J.flags |= Zi), (t.mode & yt) !== je)) {
            var I =
              e === null &&
              (t.memoizedProps.unstable_avoidThisFallback !== !0 || !qt);
            I || Wv(Gr.current, cS) ? DA() : hm();
          }
        }
        var he = t.updateQueue;
        if (
          (he !== null && (t.flags |= St), zn(t), (t.mode & kt) !== je && pt)
        ) {
          var Ae = t.child;
          Ae !== null && (t.treeBaseDuration -= Ae.treeBaseDuration);
        }
        return null;
      }
      case T:
        return (
          vl(t),
          Kh(e, t),
          e === null && $D(t.stateNode.containerInfo),
          zn(t),
          null
        );
      case _:
        var Re = t.type._context;
        return (Uv(Re, t), zn(t), null);
      case re: {
        var Qe = t.type;
        return (fa(Qe) && Qc(t), zn(t), null);
      }
      case ue: {
        ml(t);
        var rt = t.memoizedState;
        if (rt === null) return (zn(t), null);
        var Pt = (t.flags & Dt) !== We,
          xt = rt.rendering;
        if (xt === null)
          if (Pt) vu(rt, !1);
          else {
            var sn = AA() && (e === null || (e.flags & Dt) === We);
            if (!sn)
              for (var Rt = t.child; Rt !== null; ) {
                var on = bf(Rt);
                if (on !== null) {
                  ((Pt = !0), (t.flags |= Dt), vu(rt, !1));
                  var Xn = on.updateQueue;
                  return (
                    Xn !== null && ((t.updateQueue = Xn), (t.flags |= St)),
                    (t.subtreeFlags = We),
                    g1(t, n),
                    _i(t, qv(Gr.current, tu)),
                    t.child
                  );
                }
                Rt = Rt.sibling;
              }
            rt.tail !== null &&
              _n() > zE() &&
              ((t.flags |= Dt), (Pt = !0), vu(rt, !1), (t.lanes = vg));
          }
        else {
          if (!Pt) {
            var In = bf(xt);
            if (In !== null) {
              ((t.flags |= Dt), (Pt = !0));
              var xr = In.updateQueue;
              if (
                (xr !== null && ((t.updateQueue = xr), (t.flags |= St)),
                vu(rt, !0),
                rt.tail === null &&
                  rt.tailMode === 'hidden' &&
                  !xt.alternate &&
                  !Nn())
              )
                return (zn(t), null);
            } else
              _n() * 2 - rt.renderingStartTime > zE() &&
                n !== gr &&
                ((t.flags |= Dt), (Pt = !0), vu(rt, !1), (t.lanes = vg));
          }
          if (rt.isBackwards) ((xt.sibling = t.child), (t.child = xt));
          else {
            var rr = rt.last;
            (rr !== null ? (rr.sibling = xt) : (t.child = xt), (rt.last = xt));
          }
        }
        if (rt.tail !== null) {
          var ar = rt.tail;
          ((rt.rendering = ar),
            (rt.tail = ar.sibling),
            (rt.renderingStartTime = _n()),
            (ar.sibling = null));
          var Qn = Gr.current;
          return (Pt ? (Qn = qv(Qn, tu)) : (Qn = hl(Qn)), _i(t, Qn), ar);
        }
        return (zn(t), null);
      }
      case B:
        break;
      case q:
      case ne: {
        vm(t);
        var Ka = t.memoizedState,
          Ol = Ka !== null;
        if (e !== null) {
          var Au = e.memoizedState,
            ba = Au !== null;
          ba !== Ol && !ft && (t.flags |= Zi);
        }
        return (
          !Ol || (t.mode & yt) === je
            ? zn(t)
            : br(ga, gr) &&
              (zn(t), t.subtreeFlags & (fn | St) && (t.flags |= Zi)),
          null
        );
      }
      case pe:
        return null;
      case le:
        return null;
    }
    throw new Error(
      'Unknown unit of work tag (' +
        t.tag +
        '). This error is likely caused by a bug in React. Please file an issue.'
    );
  }
  function DO(e, t, n) {
    switch ((wv(t), t.tag)) {
      case g: {
        var a = t.type;
        fa(a) && Qc(t);
        var l = t.flags;
        return l & Zn
          ? ((t.flags = (l & ~Zn) | Dt), (t.mode & kt) !== je && Eh(t), t)
          : null;
      }
      case S: {
        (t.stateNode, vl(t), bv(t), Qv());
        var u = t.flags;
        return (u & Zn) !== We && (u & Dt) === We
          ? ((t.flags = (u & ~Zn) | Dt), t)
          : null;
      }
      case D:
        return (Gv(t), null);
      case F: {
        ml(t);
        var p = t.memoizedState;
        if (p !== null && p.dehydrated !== null) {
          if (t.alternate === null)
            throw new Error(
              'Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.'
            );
          cl();
        }
        var v = t.flags;
        return v & Zn
          ? ((t.flags = (v & ~Zn) | Dt), (t.mode & kt) !== je && Eh(t), t)
          : null;
      }
      case ue:
        return (ml(t), null);
      case T:
        return (vl(t), null);
      case _:
        var y = t.type._context;
        return (Uv(y, t), null);
      case q:
      case ne:
        return (vm(t), null);
      case pe:
        return null;
      default:
        return null;
    }
  }
  function mE(e, t, n) {
    switch ((wv(t), t.tag)) {
      case g: {
        var a = t.type.childContextTypes;
        a != null && Qc(t);
        break;
      }
      case S: {
        (t.stateNode, vl(t), bv(t), Qv());
        break;
      }
      case D: {
        Gv(t);
        break;
      }
      case T:
        vl(t);
        break;
      case F:
        ml(t);
        break;
      case ue:
        ml(t);
        break;
      case _:
        var l = t.type._context;
        Uv(l, t);
        break;
      case q:
      case ne:
        vm(t);
        break;
    }
  }
  var yE = null;
  yE = new Set();
  var jf = !1,
    Un = !1,
    OO = typeof WeakSet == 'function' ? WeakSet : Set,
    ke = null,
    Cl = null,
    wl = null;
  function AO(e) {
    (Zd(null, function () {
      throw e;
    }),
      ep());
  }
  var MO = function (e, t) {
    if (((t.props = e.memoizedProps), (t.state = e.memoizedState), e.mode & kt))
      try {
        (ma(), t.componentWillUnmount());
      } finally {
        ha(e);
      }
    else t.componentWillUnmount();
  };
  function gE(e, t) {
    try {
      Ai(yn, e);
    } catch (n) {
      Ht(e, t, n);
    }
  }
  function Jh(e, t, n) {
    try {
      MO(e, n);
    } catch (a) {
      Ht(e, t, a);
    }
  }
  function LO(e, t, n) {
    try {
      n.componentDidMount();
    } catch (a) {
      Ht(e, t, a);
    }
  }
  function bE(e, t) {
    try {
      EE(e);
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
          if ($ && Ke && e.mode & kt)
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
  function $f(e, t, n) {
    try {
      n();
    } catch (a) {
      Ht(e, t, a);
    }
  }
  var SE = !1;
  function kO(e, t) {
    (Y_(e.containerInfo), (ke = t), NO());
    var n = SE;
    return ((SE = !1), n);
  }
  function NO() {
    for (; ke !== null; ) {
      var e = ke,
        t = e.child;
      (e.subtreeFlags & ip) !== We && t !== null
        ? ((t.return = e), (ke = t))
        : PO();
    }
  }
  function PO() {
    for (; ke !== null; ) {
      var e = ke;
      Jt(e);
      try {
        zO(e);
      } catch (n) {
        Ht(e, e.return, n);
      }
      Rn();
      var t = e.sibling;
      if (t !== null) {
        ((t.return = e.return), (ke = t));
        return;
      }
      ke = e.return;
    }
  }
  function zO(e) {
    var t = e.alternate,
      n = e.flags;
    if ((n & Ji) !== We) {
      switch ((Jt(e), e.tag)) {
        case m:
        case z:
        case ie:
          break;
        case g: {
          if (t !== null) {
            var a = t.memoizedProps,
              l = t.memoizedState,
              u = e.stateNode;
            e.type === e.elementType &&
              !So &&
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
              var v = yE;
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
            mD(y.containerInfo);
          }
          break;
        }
        case D:
        case O:
        case T:
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
              ((e & Pn) !== fr ? Kx(t) : (e & yn) !== fr && ug(t),
              (e & da) !== fr && _u(!0),
              $f(t, n, v),
              (e & da) !== fr && _u(!1),
              (e & Pn) !== fr ? Jx() : (e & yn) !== fr && cg()));
        }
        p = p.next;
      } while (p !== u);
    }
  }
  function Ai(e, t) {
    var n = t.updateQueue,
      a = n !== null ? n.lastEffect : null;
    if (a !== null) {
      var l = a.next,
        u = l;
      do {
        if ((u.tag & e) === e) {
          (e & Pn) !== fr ? Xx(t) : (e & yn) !== fr && Zx(t);
          var p = u.create;
          ((e & da) !== fr && _u(!0),
            (u.destroy = p()),
            (e & da) !== fr && _u(!1),
            (e & Pn) !== fr ? Qx() : (e & yn) !== fr && eR());
          {
            var v = u.destroy;
            if (v !== void 0 && typeof v != 'function') {
              var y = void 0;
              (u.tag & yn) !== We
                ? (y = 'useLayoutEffect')
                : (u.tag & da) !== We
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
  function UO(e, t) {
    if ((t.flags & St) !== We)
      switch (t.tag) {
        case U: {
          var n = t.stateNode.passiveEffectDuration,
            a = t.memoizedProps,
            l = a.id,
            u = a.onPostCommit,
            p = zS(),
            v = t.alternate === null ? 'mount' : 'update';
          (PS() && (v = 'nested-update'),
            typeof u == 'function' && u(l, v, n, p));
          var y = t.return;
          e: for (; y !== null; ) {
            switch (y.tag) {
              case S:
                var C = y.stateNode;
                C.passiveEffectDuration += n;
                break e;
              case U:
                var w = y.stateNode;
                w.passiveEffectDuration += n;
                break e;
            }
            y = y.return;
          }
          break;
        }
      }
  }
  function FO(e, t, n, a) {
    if ((n.flags & us) !== We)
      switch (n.tag) {
        case m:
        case z:
        case ie: {
          if (!Un)
            if (n.mode & kt)
              try {
                (ma(), Ai(yn | mn, n));
              } finally {
                ha(n);
              }
            else Ai(yn | mn, n);
          break;
        }
        case g: {
          var l = n.stateNode;
          if (n.flags & St && !Un)
            if (t === null)
              if (
                (n.type === n.elementType &&
                  !So &&
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
                  !So &&
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
              !So &&
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
            oS(n, v, l));
          break;
        }
        case S: {
          var y = n.updateQueue;
          if (y !== null) {
            var C = null;
            if (n.child !== null)
              switch (n.child.tag) {
                case D:
                  C = n.child.stateNode;
                  break;
                case g:
                  C = n.child.stateNode;
                  break;
              }
            oS(n, y, C);
          }
          break;
        }
        case D: {
          var w = n.stateNode;
          if (t === null && n.flags & St) {
            var N = n.type,
              k = n.memoizedProps;
            nD(w, N, k);
          }
          break;
        }
        case O:
          break;
        case T:
          break;
        case U: {
          {
            var j = n.memoizedProps,
              G = j.onCommit,
              K = j.onRender,
              xe = n.stateNode.effectDuration,
              Ie = zS(),
              ze = t === null ? 'mount' : 'update';
            (PS() && (ze = 'nested-update'),
              typeof K == 'function' &&
                K(
                  n.memoizedProps.id,
                  ze,
                  n.actualDuration,
                  n.treeBaseDuration,
                  n.actualStartTime,
                  Ie
                ));
            {
              (typeof G == 'function' && G(n.memoizedProps.id, ze, xe, Ie),
                PA(n));
              var bt = n.return;
              e: for (; bt !== null; ) {
                switch (bt.tag) {
                  case S:
                    var pt = bt.stateNode;
                    pt.effectDuration += xe;
                    break e;
                  case U:
                    var H = bt.stateNode;
                    H.effectDuration += xe;
                    break e;
                }
                bt = bt.return;
              }
            }
          }
          break;
        }
        case F: {
          GO(e, n);
          break;
        }
        case ue:
        case re:
        case B:
        case q:
        case ne:
        case le:
          break;
        default:
          throw new Error(
            'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.'
          );
      }
    Un || (n.flags & pi && EE(n));
  }
  function VO(e) {
    switch (e.tag) {
      case m:
      case z:
      case ie: {
        if (e.mode & kt)
          try {
            (ma(), gE(e, e.return));
          } finally {
            ha(e);
          }
        else gE(e, e.return);
        break;
      }
      case g: {
        var t = e.stateNode;
        (typeof t.componentDidMount == 'function' && LO(e, e.return, t),
          bE(e, e.return));
        break;
      }
      case D: {
        bE(e, e.return);
        break;
      }
    }
  }
  function HO(e, t) {
    for (var n = null, a = e; ; ) {
      if (a.tag === D) {
        if (n === null) {
          n = a;
          try {
            var l = a.stateNode;
            t ? dD(l) : vD(a.stateNode, a.memoizedProps);
          } catch (p) {
            Ht(e, e.return, p);
          }
        }
      } else if (a.tag === O) {
        if (n === null)
          try {
            var u = a.stateNode;
            t ? pD(u) : hD(u, a.memoizedProps);
          } catch (p) {
            Ht(e, e.return, p);
          }
      } else if (
        !((a.tag === q || a.tag === ne) && a.memoizedState !== null && a !== e)
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
  function EE(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode,
        a;
      switch (e.tag) {
        case D:
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
  function IO(e) {
    var t = e.alternate;
    (t !== null && (t.return = null), (e.return = null));
  }
  function CE(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), CE(t));
    {
      if (
        ((e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === D)
      ) {
        var n = e.stateNode;
        n !== null && WD(n);
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
  function BO(e) {
    for (var t = e.return; t !== null; ) {
      if (wE(t)) return t;
      t = t.return;
    }
    throw new Error(
      'Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.'
    );
  }
  function wE(e) {
    return e.tag === D || e.tag === S || e.tag === T;
  }
  function TE(e) {
    var t = e;
    e: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || wE(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== D && t.tag !== O && t.tag !== ae;

      ) {
        if (t.flags & fn || t.child === null || t.tag === T) continue e;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & fn)) return t.stateNode;
    }
  }
  function jO(e) {
    var t = BO(e);
    switch (t.tag) {
      case D: {
        var n = t.stateNode;
        t.flags & ls && (Rb(n), (t.flags &= ~ls));
        var a = TE(e);
        em(e, a, n);
        break;
      }
      case S:
      case T: {
        var l = t.stateNode.containerInfo,
          u = TE(e);
        Zh(e, u, l);
        break;
      }
      default:
        throw new Error(
          'Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.'
        );
    }
  }
  function Zh(e, t, n) {
    var a = e.tag,
      l = a === D || a === O;
    if (l) {
      var u = e.stateNode;
      t ? sD(n, u, t) : oD(n, u);
    } else if (a !== T) {
      var p = e.child;
      if (p !== null) {
        Zh(p, t, n);
        for (var v = p.sibling; v !== null; ) (Zh(v, t, n), (v = v.sibling));
      }
    }
  }
  function em(e, t, n) {
    var a = e.tag,
      l = a === D || a === O;
    if (l) {
      var u = e.stateNode;
      t ? lD(n, u, t) : iD(n, u);
    } else if (a !== T) {
      var p = e.child;
      if (p !== null) {
        em(p, t, n);
        for (var v = p.sibling; v !== null; ) (em(v, t, n), (v = v.sibling));
      }
    }
  }
  var Fn = null,
    Kr = !1;
  function $O(e, t, n) {
    {
      var a = t;
      e: for (; a !== null; ) {
        switch (a.tag) {
          case D: {
            ((Fn = a.stateNode), (Kr = !1));
            break e;
          }
          case S: {
            ((Fn = a.stateNode.containerInfo), (Kr = !0));
            break e;
          }
          case T: {
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
      (xE(e, t, n), (Fn = null), (Kr = !1));
    }
    IO(n);
  }
  function Mi(e, t, n) {
    for (var a = n.child; a !== null; ) (xE(e, t, a), (a = a.sibling));
  }
  function xE(e, t, n) {
    switch ((Yx(n), n.tag)) {
      case D:
        Un || Tl(n, t);
      case O: {
        {
          var a = Fn,
            l = Kr;
          ((Fn = null),
            Mi(e, t, n),
            (Fn = a),
            (Kr = l),
            Fn !== null && (Kr ? cD(Fn, n.stateNode) : uD(Fn, n.stateNode)));
        }
        return;
      }
      case ae: {
        Fn !== null && (Kr ? fD(Fn, n.stateNode) : fv(Fn, n.stateNode));
        return;
      }
      case T: {
        {
          var u = Fn,
            p = Kr;
          ((Fn = n.stateNode.containerInfo),
            (Kr = !0),
            Mi(e, t, n),
            (Fn = u),
            (Kr = p));
        }
        return;
      }
      case m:
      case z:
      case se:
      case ie: {
        if (!Un) {
          var v = n.updateQueue;
          if (v !== null) {
            var y = v.lastEffect;
            if (y !== null) {
              var C = y.next,
                w = C;
              do {
                var N = w,
                  k = N.destroy,
                  j = N.tag;
                (k !== void 0 &&
                  ((j & da) !== fr
                    ? $f(n, t, k)
                    : (j & yn) !== fr &&
                      (ug(n),
                      n.mode & kt ? (ma(), $f(n, t, k), ha(n)) : $f(n, t, k),
                      cg())),
                  (w = w.next));
              } while (w !== C);
            }
          }
        }
        Mi(e, t, n);
        return;
      }
      case g: {
        if (!Un) {
          Tl(n, t);
          var G = n.stateNode;
          typeof G.componentWillUnmount == 'function' && Jh(n, t, G);
        }
        Mi(e, t, n);
        return;
      }
      case B: {
        Mi(e, t, n);
        return;
      }
      case q: {
        if (n.mode & yt) {
          var K = Un;
          ((Un = K || n.memoizedState !== null), Mi(e, t, n), (Un = K));
        } else Mi(e, t, n);
        break;
      }
      default: {
        Mi(e, t, n);
        return;
      }
    }
  }
  function YO(e) {
    e.memoizedState;
  }
  function GO(e, t) {
    var n = t.memoizedState;
    if (n === null) {
      var a = t.alternate;
      if (a !== null) {
        var l = a.memoizedState;
        if (l !== null) {
          var u = l.dehydrated;
          u !== null && AD(u);
        }
      }
    }
  }
  function RE(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new OO()),
        t.forEach(function (a) {
          var l = BA.bind(null, e, a);
          if (!n.has(a)) {
            if ((n.add(a), Ir))
              if (Cl !== null && wl !== null) Ru(wl, Cl);
              else
                throw Error(
                  'Expected finished root and lanes to be set. This is a bug in React.'
                );
            a.then(l, l);
          }
        }));
    }
  }
  function WO(e, t, n) {
    ((Cl = n), (wl = e), Jt(t), _E(t, e), Jt(t), (Cl = null), (wl = null));
  }
  function Jr(e, t, n) {
    var a = t.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var u = a[l];
        try {
          $O(e, t, u);
        } catch (y) {
          Ht(u, t, y);
        }
      }
    var p = Zu();
    if (t.subtreeFlags & op)
      for (var v = t.child; v !== null; ) (Jt(v), _E(v, e), (v = v.sibling));
    Jt(p);
  }
  function _E(e, t, n) {
    var a = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case m:
      case z:
      case se:
      case ie: {
        if ((Jr(t, e), ya(e), l & St)) {
          try {
            (Qr(da | mn, e, e.return), Ai(da | mn, e));
          } catch (Qe) {
            Ht(e, e.return, Qe);
          }
          if (e.mode & kt) {
            try {
              (ma(), Qr(yn | mn, e, e.return));
            } catch (Qe) {
              Ht(e, e.return, Qe);
            }
            ha(e);
          } else
            try {
              Qr(yn | mn, e, e.return);
            } catch (Qe) {
              Ht(e, e.return, Qe);
            }
        }
        return;
      }
      case g: {
        (Jr(t, e), ya(e), l & pi && a !== null && Tl(a, a.return));
        return;
      }
      case D: {
        (Jr(t, e), ya(e), l & pi && a !== null && Tl(a, a.return));
        {
          if (e.flags & ls) {
            var u = e.stateNode;
            try {
              Rb(u);
            } catch (Qe) {
              Ht(e, e.return, Qe);
            }
          }
          if (l & St) {
            var p = e.stateNode;
            if (p != null) {
              var v = e.memoizedProps,
                y = a !== null ? a.memoizedProps : v,
                C = e.type,
                w = e.updateQueue;
              if (((e.updateQueue = null), w !== null))
                try {
                  rD(p, w, C, y, v, e);
                } catch (Qe) {
                  Ht(e, e.return, Qe);
                }
            }
          }
        }
        return;
      }
      case O: {
        if ((Jr(t, e), ya(e), l & St)) {
          if (e.stateNode === null)
            throw new Error(
              'This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.'
            );
          var N = e.stateNode,
            k = e.memoizedProps,
            j = a !== null ? a.memoizedProps : k;
          try {
            aD(N, j, k);
          } catch (Qe) {
            Ht(e, e.return, Qe);
          }
        }
        return;
      }
      case S: {
        if ((Jr(t, e), ya(e), l & St && a !== null)) {
          var G = a.memoizedState;
          if (G.isDehydrated)
            try {
              OD(t.containerInfo);
            } catch (Qe) {
              Ht(e, e.return, Qe);
            }
        }
        return;
      }
      case T: {
        (Jr(t, e), ya(e));
        return;
      }
      case F: {
        (Jr(t, e), ya(e));
        var K = e.child;
        if (K.flags & Zi) {
          var xe = K.stateNode,
            Ie = K.memoizedState,
            ze = Ie !== null;
          if (((xe.isHidden = ze), ze)) {
            var bt = K.alternate !== null && K.alternate.memoizedState !== null;
            bt || _A();
          }
        }
        if (l & St) {
          try {
            YO(e);
          } catch (Qe) {
            Ht(e, e.return, Qe);
          }
          RE(e);
        }
        return;
      }
      case q: {
        var pt = a !== null && a.memoizedState !== null;
        if (e.mode & yt) {
          var H = Un;
          ((Un = H || pt), Jr(t, e), (Un = H));
        } else Jr(t, e);
        if ((ya(e), l & Zi)) {
          var J = e.stateNode,
            I = e.memoizedState,
            he = I !== null,
            Ae = e;
          if (((J.isHidden = he), he && !pt && (Ae.mode & yt) !== je)) {
            ke = Ae;
            for (var Re = Ae.child; Re !== null; )
              ((ke = Re), XO(Re), (Re = Re.sibling));
          }
          HO(Ae, he);
        }
        return;
      }
      case ue: {
        (Jr(t, e), ya(e), l & St && RE(e));
        return;
      }
      case B:
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
        jO(e);
      } catch (n) {
        Ht(e, e.return, n);
      }
      e.flags &= ~fn;
    }
    t & Na && (e.flags &= ~Na);
  }
  function qO(e, t, n) {
    ((Cl = n), (wl = t), (ke = e), DE(e, t, n), (Cl = null), (wl = null));
  }
  function DE(e, t, n) {
    for (var a = (e.mode & yt) !== je; ke !== null; ) {
      var l = ke,
        u = l.child;
      if (l.tag === q && a) {
        var p = l.memoizedState !== null,
          v = p || jf;
        if (v) {
          tm(e, t, n);
          continue;
        } else {
          var y = l.alternate,
            C = y !== null && y.memoizedState !== null,
            w = C || Un,
            N = jf,
            k = Un;
          ((jf = v), (Un = w), Un && !k && ((ke = l), QO(l)));
          for (var j = u; j !== null; )
            ((ke = j), DE(j, t, n), (j = j.sibling));
          ((ke = l), (jf = N), (Un = k), tm(e, t, n));
          continue;
        }
      }
      (l.subtreeFlags & us) !== We && u !== null
        ? ((u.return = l), (ke = u))
        : tm(e, t, n);
    }
  }
  function tm(e, t, n) {
    for (; ke !== null; ) {
      var a = ke;
      if ((a.flags & us) !== We) {
        var l = a.alternate;
        Jt(a);
        try {
          FO(t, l, a, n);
        } catch (p) {
          Ht(a, a.return, p);
        }
        Rn();
      }
      if (a === e) {
        ke = null;
        return;
      }
      var u = a.sibling;
      if (u !== null) {
        ((u.return = a.return), (ke = u));
        return;
      }
      ke = a.return;
    }
  }
  function XO(e) {
    for (; ke !== null; ) {
      var t = ke,
        n = t.child;
      switch (t.tag) {
        case m:
        case z:
        case se:
        case ie: {
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
          typeof a.componentWillUnmount == 'function' && Jh(t, t.return, a);
          break;
        }
        case D: {
          Tl(t, t.return);
          break;
        }
        case q: {
          var l = t.memoizedState !== null;
          if (l) {
            OE(e);
            continue;
          }
          break;
        }
      }
      n !== null ? ((n.return = t), (ke = n)) : OE(e);
    }
  }
  function OE(e) {
    for (; ke !== null; ) {
      var t = ke;
      if (t === e) {
        ke = null;
        return;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (ke = n));
        return;
      }
      ke = t.return;
    }
  }
  function QO(e) {
    for (; ke !== null; ) {
      var t = ke,
        n = t.child;
      if (t.tag === q) {
        var a = t.memoizedState !== null;
        if (a) {
          AE(e);
          continue;
        }
      }
      n !== null ? ((n.return = t), (ke = n)) : AE(e);
    }
  }
  function AE(e) {
    for (; ke !== null; ) {
      var t = ke;
      Jt(t);
      try {
        VO(t);
      } catch (a) {
        Ht(t, t.return, a);
      }
      if ((Rn(), t === e)) {
        ke = null;
        return;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (ke = n));
        return;
      }
      ke = t.return;
    }
  }
  function KO(e, t, n, a) {
    ((ke = t), JO(t, e, n, a));
  }
  function JO(e, t, n, a) {
    for (; ke !== null; ) {
      var l = ke,
        u = l.child;
      (l.subtreeFlags & $o) !== We && u !== null
        ? ((u.return = l), (ke = u))
        : ZO(e, t, n, a);
    }
  }
  function ZO(e, t, n, a) {
    for (; ke !== null; ) {
      var l = ke;
      if ((l.flags & Hr) !== We) {
        Jt(l);
        try {
          eA(t, l, n, a);
        } catch (p) {
          Ht(l, l.return, p);
        }
        Rn();
      }
      if (l === e) {
        ke = null;
        return;
      }
      var u = l.sibling;
      if (u !== null) {
        ((u.return = l.return), (ke = u));
        return;
      }
      ke = l.return;
    }
  }
  function eA(e, t, n, a) {
    switch (t.tag) {
      case m:
      case z:
      case ie: {
        if (t.mode & kt) {
          Sh();
          try {
            Ai(Pn | mn, t);
          } finally {
            bh(t);
          }
        } else Ai(Pn | mn, t);
        break;
      }
    }
  }
  function tA(e) {
    ((ke = e), nA());
  }
  function nA() {
    for (; ke !== null; ) {
      var e = ke,
        t = e.child;
      if ((ke.flags & Ki) !== We) {
        var n = e.deletions;
        if (n !== null) {
          for (var a = 0; a < n.length; a++) {
            var l = n[a];
            ((ke = l), iA(l, e));
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
          ke = e;
        }
      }
      (e.subtreeFlags & $o) !== We && t !== null
        ? ((t.return = e), (ke = t))
        : rA();
    }
  }
  function rA() {
    for (; ke !== null; ) {
      var e = ke;
      (e.flags & Hr) !== We && (Jt(e), aA(e), Rn());
      var t = e.sibling;
      if (t !== null) {
        ((t.return = e.return), (ke = t));
        return;
      }
      ke = e.return;
    }
  }
  function aA(e) {
    switch (e.tag) {
      case m:
      case z:
      case ie: {
        e.mode & kt
          ? (Sh(), Qr(Pn | mn, e, e.return), bh(e))
          : Qr(Pn | mn, e, e.return);
        break;
      }
    }
  }
  function iA(e, t) {
    for (; ke !== null; ) {
      var n = ke;
      (Jt(n), lA(n, t), Rn());
      var a = n.child;
      a !== null ? ((a.return = n), (ke = a)) : oA(e);
    }
  }
  function oA(e) {
    for (; ke !== null; ) {
      var t = ke,
        n = t.sibling,
        a = t.return;
      if ((CE(t), t === e)) {
        ke = null;
        return;
      }
      if (n !== null) {
        ((n.return = a), (ke = n));
        return;
      }
      ke = a;
    }
  }
  function lA(e, t) {
    switch (e.tag) {
      case m:
      case z:
      case ie: {
        e.mode & kt ? (Sh(), Qr(Pn, e, t), bh(e)) : Qr(Pn, e, t);
        break;
      }
    }
  }
  function sA(e) {
    switch (e.tag) {
      case m:
      case z:
      case ie: {
        try {
          Ai(yn | mn, e);
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
  function uA(e) {
    switch (e.tag) {
      case m:
      case z:
      case ie: {
        try {
          Ai(Pn | mn, e);
        } catch (t) {
          Ht(e, e.return, t);
        }
        break;
      }
    }
  }
  function cA(e) {
    switch (e.tag) {
      case m:
      case z:
      case ie: {
        try {
          Qr(yn | mn, e, e.return);
        } catch (n) {
          Ht(e, e.return, n);
        }
        break;
      }
      case g: {
        var t = e.stateNode;
        typeof t.componentWillUnmount == 'function' && Jh(e, e.return, t);
        break;
      }
    }
  }
  function fA(e) {
    switch (e.tag) {
      case m:
      case z:
      case ie:
        try {
          Qr(Pn | mn, e, e.return);
        } catch (t) {
          Ht(e, e.return, t);
        }
    }
  }
  if (typeof Symbol == 'function' && Symbol.for) {
    var hu = Symbol.for;
    (hu('selector.component'),
      hu('selector.has_pseudo_class'),
      hu('selector.role'),
      hu('selector.test_id'),
      hu('selector.text'));
  }
  var dA = [];
  function pA() {
    dA.forEach(function (e) {
      return e();
    });
  }
  var vA = o.ReactCurrentActQueue;
  function hA(e) {
    {
      var t =
          typeof IS_REACT_ACT_ENVIRONMENT < 'u'
            ? IS_REACT_ACT_ENVIRONMENT
            : void 0,
        n = typeof jest < 'u';
      return n && t !== !1;
    }
  }
  function ME() {
    {
      var e =
        typeof IS_REACT_ACT_ENVIRONMENT < 'u'
          ? IS_REACT_ACT_ENVIRONMENT
          : void 0;
      return (
        !e &&
          vA.current !== null &&
          d(
            'The current testing environment is not configured to support act(...)'
          ),
        e
      );
    }
  }
  var mA = Math.ceil,
    nm = o.ReactCurrentDispatcher,
    rm = o.ReactCurrentOwner,
    Vn = o.ReactCurrentBatchConfig,
    Zr = o.ReactCurrentActQueue,
    Sn = 0,
    LE = 1,
    Hn = 2,
    Pr = 4,
    Wa = 0,
    mu = 1,
    Eo = 2,
    Yf = 3,
    yu = 4,
    kE = 5,
    am = 6,
    gt = Sn,
    tr = null,
    Zt = null,
    En = fe,
    ga = fe,
    im = Ei(fe),
    Cn = Wa,
    gu = null,
    Gf = fe,
    bu = fe,
    Wf = fe,
    Su = null,
    dr = null,
    om = 0,
    NE = 500,
    PE = 1 / 0,
    yA = 500,
    qa = null;
  function Eu() {
    PE = _n() + yA;
  }
  function zE() {
    return PE;
  }
  var qf = !1,
    lm = null,
    xl = null,
    Co = !1,
    Li = null,
    Cu = fe,
    sm = [],
    um = null,
    gA = 50,
    wu = 0,
    cm = null,
    fm = !1,
    Xf = !1,
    bA = 50,
    Rl = 0,
    Qf = null,
    Tu = jt,
    Kf = fe,
    UE = !1;
  function Jf() {
    return tr;
  }
  function nr() {
    return (gt & (Hn | Pr)) !== Sn ? _n() : (Tu !== jt || (Tu = _n()), Tu);
  }
  function ki(e) {
    var t = e.mode;
    if ((t & yt) === je) return tt;
    if ((gt & Hn) !== Sn && En !== fe) return ms(En);
    var n = v1() !== p1;
    if (n) {
      if (Vn.transition !== null) {
        var a = Vn.transition;
        (a._updatedFibers || (a._updatedFibers = new Set()),
          a._updatedFibers.add(e));
      }
      return (Kf === On && (Kf = gg()), Kf);
    }
    var l = Br();
    if (l !== On) return l;
    var u = J_();
    return u;
  }
  function SA(e) {
    var t = e.mode;
    return (t & yt) === je ? tt : CR();
  }
  function wn(e, t, n, a) {
    ($A(),
      UE && d('useInsertionEffect must not schedule updates.'),
      fm && (Xf = !0),
      ys(e, n, a),
      (gt & Hn) !== fe && e === tr
        ? WA(t)
        : (Ir && Eg(e, t, n),
          qA(t),
          e === tr &&
            ((gt & Hn) === Sn && (bu = st(bu, n)), Cn === yu && Ni(e, En)),
          pr(e, a),
          n === tt &&
            gt === Sn &&
            (t.mode & yt) === je &&
            !Zr.isBatchingLegacy &&
            (Eu(), Ub())));
  }
  function EA(e, t, n) {
    var a = e.current;
    ((a.lanes = t), ys(e, t, n), pr(e, n));
  }
  function CA(e) {
    return (gt & Hn) !== Sn;
  }
  function pr(e, t) {
    var n = e.callbackNode;
    mR(e, t);
    var a = gc(e, e === tr ? En : fe);
    if (a === fe) {
      (n !== null && ZE(n), (e.callbackNode = null), (e.callbackPriority = On));
      return;
    }
    var l = io(a),
      u = e.callbackPriority;
    if (u === l && !(Zr.current !== null && n !== gm)) {
      n == null &&
        u !== tt &&
        d(
          'Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.'
        );
      return;
    }
    n != null && ZE(n);
    var p;
    if (l === tt)
      (e.tag === Ci
        ? (Zr.isBatchingLegacy !== null && (Zr.didScheduleLegacyUpdate = !0),
          QD(HE.bind(null, e)))
        : zb(HE.bind(null, e)),
        Zr.current !== null
          ? Zr.current.push(wi)
          : eD(function () {
              (gt & (Hn | Pr)) === Sn && wi();
            }),
        (p = null));
    else {
      var v;
      switch (Tg(a)) {
        case Sr:
          v = vc;
          break;
        case Fa:
          v = lp;
          break;
        case Va:
          v = no;
          break;
        case Ec:
          v = sp;
          break;
        default:
          v = no;
          break;
      }
      p = bm(v, FE.bind(null, e));
    }
    ((e.callbackPriority = l), (e.callbackNode = p));
  }
  function FE(e, t) {
    if ((H1(), (Tu = jt), (Kf = fe), (gt & (Hn | Pr)) !== Sn))
      throw new Error('Should not already be working.');
    var n = e.callbackNode,
      a = Qa();
    if (a && e.callbackNode !== n) return null;
    var l = gc(e, e === tr ? En : fe);
    if (l === fe) return null;
    var u = !bc(e, l) && !ER(e, l) && !t,
      p = u ? LA(e, l) : ed(e, l);
    if (p !== Wa) {
      if (p === Eo) {
        var v = Ap(e);
        v !== fe && ((l = v), (p = dm(e, v)));
      }
      if (p === mu) {
        var y = gu;
        throw (wo(e, fe), Ni(e, l), pr(e, _n()), y);
      }
      if (p === am) Ni(e, l);
      else {
        var C = !bc(e, l),
          w = e.current.alternate;
        if (C && !TA(w)) {
          if (((p = ed(e, l)), p === Eo)) {
            var N = Ap(e);
            N !== fe && ((l = N), (p = dm(e, N)));
          }
          if (p === mu) {
            var k = gu;
            throw (wo(e, fe), Ni(e, l), pr(e, _n()), k);
          }
        }
        ((e.finishedWork = w), (e.finishedLanes = l), wA(e, p, l));
      }
    }
    return (pr(e, _n()), e.callbackNode === n ? FE.bind(null, e) : null);
  }
  function dm(e, t) {
    var n = Su;
    if (Cc(e)) {
      var a = wo(e, t);
      ((a.flags |= ka), jD(e.containerInfo));
    }
    var l = ed(e, t);
    if (l !== Eo) {
      var u = dr;
      ((dr = n), u !== null && VE(u));
    }
    return l;
  }
  function VE(e) {
    dr === null ? (dr = e) : dr.push.apply(dr, e);
  }
  function wA(e, t, n) {
    switch (t) {
      case Wa:
      case mu:
        throw new Error('Root did not complete. This is a bug in React.');
      case Eo: {
        To(e, dr, qa);
        break;
      }
      case Yf: {
        if ((Ni(e, n), mg(n) && !eC())) {
          var a = om + NE - _n();
          if (a > 10) {
            var l = gc(e, fe);
            if (l !== fe) break;
            var u = e.suspendedLanes;
            if (!Qo(u, n)) {
              (nr(), Sg(e, u));
              break;
            }
            e.timeoutHandle = uv(To.bind(null, e, dr, qa), a);
            break;
          }
        }
        To(e, dr, qa);
        break;
      }
      case yu: {
        if ((Ni(e, n), SR(n))) break;
        if (!eC()) {
          var p = vR(e, n),
            v = p,
            y = _n() - v,
            C = jA(y) - y;
          if (C > 10) {
            e.timeoutHandle = uv(To.bind(null, e, dr, qa), C);
            break;
          }
        }
        To(e, dr, qa);
        break;
      }
      case kE: {
        To(e, dr, qa);
        break;
      }
      default:
        throw new Error('Unknown root exit status.');
    }
  }
  function TA(e) {
    for (var t = e; ; ) {
      if (t.flags & dc) {
        var n = t.updateQueue;
        if (n !== null) {
          var a = n.stores;
          if (a !== null)
            for (var l = 0; l < a.length; l++) {
              var u = a[l],
                p = u.getSnapshot,
                v = u.value;
              try {
                if (!Cr(p(), v)) return !1;
              } catch {
                return !1;
              }
            }
        }
      }
      var y = t.child;
      if (t.subtreeFlags & dc && y !== null) {
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
  function Ni(e, t) {
    ((t = Sc(t, Wf)), (t = Sc(t, bu)), TR(e, t));
  }
  function HE(e) {
    if ((I1(), (gt & (Hn | Pr)) !== Sn))
      throw new Error('Should not already be working.');
    Qa();
    var t = gc(e, fe);
    if (!br(t, tt)) return (pr(e, _n()), null);
    var n = ed(e, t);
    if (e.tag !== Ci && n === Eo) {
      var a = Ap(e);
      a !== fe && ((t = a), (n = dm(e, a)));
    }
    if (n === mu) {
      var l = gu;
      throw (wo(e, fe), Ni(e, t), pr(e, _n()), l);
    }
    if (n === am)
      throw new Error('Root did not complete. This is a bug in React.');
    var u = e.current.alternate;
    return (
      (e.finishedWork = u),
      (e.finishedLanes = t),
      To(e, dr, qa),
      pr(e, _n()),
      null
    );
  }
  function xA(e, t) {
    t !== fe &&
      (Np(e, st(t, tt)), pr(e, _n()), (gt & (Hn | Pr)) === Sn && (Eu(), wi()));
  }
  function pm(e, t) {
    var n = gt;
    gt |= LE;
    try {
      return e(t);
    } finally {
      ((gt = n), gt === Sn && !Zr.isBatchingLegacy && (Eu(), Ub()));
    }
  }
  function RA(e, t, n, a, l) {
    var u = Br(),
      p = Vn.transition;
    try {
      return ((Vn.transition = null), An(Sr), e(t, n, a, l));
    } finally {
      (An(u), (Vn.transition = p), gt === Sn && Eu());
    }
  }
  function Xa(e) {
    Li !== null && Li.tag === Ci && (gt & (Hn | Pr)) === Sn && Qa();
    var t = gt;
    gt |= LE;
    var n = Vn.transition,
      a = Br();
    try {
      return ((Vn.transition = null), An(Sr), e ? e() : void 0);
    } finally {
      (An(a), (Vn.transition = n), (gt = t), (gt & (Hn | Pr)) === Sn && wi());
    }
  }
  function IE() {
    return (gt & (Hn | Pr)) !== Sn;
  }
  function Zf(e, t) {
    (Wn(im, ga, e), (ga = st(ga, t)));
  }
  function vm(e) {
    ((ga = im.current), Gn(im, e));
  }
  function wo(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = fe));
    var n = e.timeoutHandle;
    if ((n !== cv && ((e.timeoutHandle = cv), Z_(n)), Zt !== null))
      for (var a = Zt.return; a !== null; ) {
        var l = a.alternate;
        (mE(l, a), (a = a.return));
      }
    tr = e;
    var u = xo(e.current, null);
    return (
      (Zt = u),
      (En = ga = t),
      (Cn = Wa),
      (gu = null),
      (Gf = fe),
      (bu = fe),
      (Wf = fe),
      (Su = null),
      (dr = null),
      E1(),
      Yr.discardPendingWarnings(),
      u
    );
  }
  function BE(e, t) {
    do {
      var n = Zt;
      try {
        if (
          (uf(),
          dS(),
          Rn(),
          (rm.current = null),
          n === null || n.return === null)
        ) {
          ((Cn = mu), (gu = t), (Zt = null));
          return;
        }
        if (($ && n.mode & kt && Ff(n, !0), Ve))
          if (
            (Go(),
            t !== null && typeof t == 'object' && typeof t.then == 'function')
          ) {
            var a = t;
            nR(n, a, En);
          } else tR(n, t, En);
        (Q1(e, n.return, n, t, En), GE(n));
      } catch (l) {
        ((t = l),
          Zt === n && n !== null ? ((n = n.return), (Zt = n)) : (n = Zt));
        continue;
      }
      return;
    } while (!0);
  }
  function jE() {
    var e = nm.current;
    return ((nm.current = kf), e === null ? kf : e);
  }
  function $E(e) {
    nm.current = e;
  }
  function _A() {
    om = _n();
  }
  function xu(e) {
    Gf = st(e, Gf);
  }
  function DA() {
    Cn === Wa && (Cn = Yf);
  }
  function hm() {
    ((Cn === Wa || Cn === Yf || Cn === Eo) && (Cn = yu),
      tr !== null && (Mp(Gf) || Mp(bu)) && Ni(tr, En));
  }
  function OA(e) {
    (Cn !== yu && (Cn = Eo), Su === null ? (Su = [e]) : Su.push(e));
  }
  function AA() {
    return Cn === Wa;
  }
  function ed(e, t) {
    var n = gt;
    gt |= Hn;
    var a = jE();
    if (tr !== e || En !== t) {
      if (Ir) {
        var l = e.memoizedUpdaters;
        (l.size > 0 && (Ru(e, En), l.clear()), Cg(e, t));
      }
      ((qa = wg()), wo(e, t));
    }
    fg(t);
    do
      try {
        MA();
        break;
      } catch (u) {
        BE(e, u);
      }
    while (!0);
    if ((uf(), (gt = n), $E(a), Zt !== null))
      throw new Error(
        'Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.'
      );
    return (dg(), (tr = null), (En = fe), Cn);
  }
  function MA() {
    for (; Zt !== null; ) YE(Zt);
  }
  function LA(e, t) {
    var n = gt;
    gt |= Hn;
    var a = jE();
    if (tr !== e || En !== t) {
      if (Ir) {
        var l = e.memoizedUpdaters;
        (l.size > 0 && (Ru(e, En), l.clear()), Cg(e, t));
      }
      ((qa = wg()), Eu(), wo(e, t));
    }
    fg(t);
    do
      try {
        kA();
        break;
      } catch (u) {
        BE(e, u);
      }
    while (!0);
    return (
      uf(),
      $E(a),
      (gt = n),
      Zt !== null ? (lR(), Wa) : (dg(), (tr = null), (En = fe), Cn)
    );
  }
  function kA() {
    for (; Zt !== null && !Px(); ) YE(Zt);
  }
  function YE(e) {
    var t = e.alternate;
    Jt(e);
    var n;
    ((e.mode & kt) !== je
      ? (gh(e), (n = mm(t, e, ga)), Ff(e, !0))
      : (n = mm(t, e, ga)),
      Rn(),
      (e.memoizedProps = e.pendingProps),
      n === null ? GE(e) : (Zt = n),
      (rm.current = null));
  }
  function GE(e) {
    var t = e;
    do {
      var n = t.alternate,
        a = t.return;
      if ((t.flags & ss) === We) {
        Jt(t);
        var l = void 0;
        if (
          ((t.mode & kt) === je
            ? (l = hE(n, t, ga))
            : (gh(t), (l = hE(n, t, ga)), Ff(t, !1)),
          Rn(),
          l !== null)
        ) {
          Zt = l;
          return;
        }
      } else {
        var u = DO(n, t);
        if (u !== null) {
          ((u.flags &= Ox), (Zt = u));
          return;
        }
        if ((t.mode & kt) !== je) {
          Ff(t, !1);
          for (var p = t.actualDuration, v = t.child; v !== null; )
            ((p += v.actualDuration), (v = v.sibling));
          t.actualDuration = p;
        }
        if (a !== null)
          ((a.flags |= ss), (a.subtreeFlags = We), (a.deletions = null));
        else {
          ((Cn = am), (Zt = null));
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
    Cn === Wa && (Cn = kE);
  }
  function To(e, t, n) {
    var a = Br(),
      l = Vn.transition;
    try {
      ((Vn.transition = null), An(Sr), NA(e, t, n, a));
    } finally {
      ((Vn.transition = l), An(a));
    }
    return null;
  }
  function NA(e, t, n, a) {
    do Qa();
    while (Li !== null);
    if ((YA(), (gt & (Hn | Pr)) !== Sn))
      throw new Error('Should not already be working.');
    var l = e.finishedWork,
      u = e.finishedLanes;
    if ((qx(u), l === null)) return (sg(), null);
    if (
      (u === fe &&
        d(
          'root.finishedLanes should not be empty during a commit. This is a bug in React.'
        ),
      (e.finishedWork = null),
      (e.finishedLanes = fe),
      l === e.current)
    )
      throw new Error(
        'Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.'
      );
    ((e.callbackNode = null), (e.callbackPriority = On));
    var p = st(l.lanes, l.childLanes);
    (xR(e, p),
      e === tr && ((tr = null), (Zt = null), (En = fe)),
      ((l.subtreeFlags & $o) !== We || (l.flags & $o) !== We) &&
        (Co ||
          ((Co = !0),
          (um = n),
          bm(no, function () {
            return (Qa(), null);
          }))));
    var v = (l.subtreeFlags & (ip | op | us | $o)) !== We,
      y = (l.flags & (ip | op | us | $o)) !== We;
    if (v || y) {
      var C = Vn.transition;
      Vn.transition = null;
      var w = Br();
      An(Sr);
      var N = gt;
      ((gt |= Pr),
        (rm.current = null),
        kO(e, l),
        US(),
        WO(e, l, u),
        G_(e.containerInfo),
        (e.current = l),
        rR(u),
        qO(l, e, u),
        aR(),
        zx(),
        (gt = N),
        An(w),
        (Vn.transition = C));
    } else ((e.current = l), US());
    var k = Co;
    if (
      (Co ? ((Co = !1), (Li = e), (Cu = u)) : ((Rl = 0), (Qf = null)),
      (p = e.pendingLanes),
      p === fe && (xl = null),
      k || QE(e.current, !1),
      jx(l.stateNode, a),
      Ir && e.memoizedUpdaters.clear(),
      pA(),
      pr(e, _n()),
      t !== null)
    )
      for (var j = e.onRecoverableError, G = 0; G < t.length; G++) {
        var K = t[G],
          xe = K.stack,
          Ie = K.digest;
        j(K.value, { componentStack: xe, digest: Ie });
      }
    if (qf) {
      qf = !1;
      var ze = lm;
      throw ((lm = null), ze);
    }
    return (
      br(Cu, tt) && e.tag !== Ci && Qa(),
      (p = e.pendingLanes),
      br(p, tt) ? (V1(), e === cm ? wu++ : ((wu = 0), (cm = e))) : (wu = 0),
      wi(),
      sg(),
      null
    );
  }
  function Qa() {
    if (Li !== null) {
      var e = Tg(Cu),
        t = OR(Va, e),
        n = Vn.transition,
        a = Br();
      try {
        return ((Vn.transition = null), An(t), zA());
      } finally {
        (An(a), (Vn.transition = n));
      }
    }
    return !1;
  }
  function PA(e) {
    (sm.push(e),
      Co ||
        ((Co = !0),
        bm(no, function () {
          return (Qa(), null);
        })));
  }
  function zA() {
    if (Li === null) return !1;
    var e = um;
    um = null;
    var t = Li,
      n = Cu;
    if (((Li = null), (Cu = fe), (gt & (Hn | Pr)) !== Sn))
      throw new Error('Cannot flush passive effects while already rendering.');
    ((fm = !0), (Xf = !1), iR(n));
    var a = gt;
    ((gt |= Pr), tA(t.current), KO(t, t.current, n, e));
    {
      var l = sm;
      sm = [];
      for (var u = 0; u < l.length; u++) {
        var p = l[u];
        UO(t, p);
      }
    }
    (oR(),
      QE(t.current, !0),
      (gt = a),
      wi(),
      Xf ? (t === Qf ? Rl++ : ((Rl = 0), (Qf = t))) : (Rl = 0),
      (fm = !1),
      (Xf = !1),
      $x(t));
    {
      var v = t.current.stateNode;
      ((v.effectDuration = 0), (v.passiveEffectDuration = 0));
    }
    return !0;
  }
  function WE(e) {
    return xl !== null && xl.has(e);
  }
  function UA(e) {
    xl === null ? (xl = new Set([e])) : xl.add(e);
  }
  function FA(e) {
    qf || ((qf = !0), (lm = e));
  }
  var VA = FA;
  function qE(e, t, n) {
    var a = bo(n, t),
      l = YS(e, a, tt),
      u = xi(e, l, tt),
      p = nr();
    u !== null && (ys(u, tt, p), pr(u, p));
  }
  function Ht(e, t, n) {
    if ((AO(n), _u(!1), e.tag === S)) {
      qE(e, e, n);
      return;
    }
    var a = null;
    for (a = t; a !== null; ) {
      if (a.tag === S) {
        qE(a, e, n);
        return;
      } else if (a.tag === g) {
        var l = a.type,
          u = a.stateNode;
        if (
          typeof l.getDerivedStateFromError == 'function' ||
          (typeof u.componentDidCatch == 'function' && !WE(u))
        ) {
          var p = bo(n, e),
            v = zh(a, p, tt),
            y = xi(a, v, tt),
            C = nr();
          y !== null && (ys(y, tt, C), pr(y, C));
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
  function HA(e, t, n) {
    var a = e.pingCache;
    a !== null && a.delete(t);
    var l = nr();
    (Sg(e, n),
      XA(e),
      tr === e &&
        Qo(En, n) &&
        (Cn === yu || (Cn === Yf && mg(En) && _n() - om < NE)
          ? wo(e, fe)
          : (Wf = st(Wf, n))),
      pr(e, l));
  }
  function XE(e, t) {
    t === On && (t = SA(e));
    var n = nr(),
      a = cr(e, t);
    a !== null && (ys(a, t, n), pr(a, n));
  }
  function IA(e) {
    var t = e.memoizedState,
      n = On;
    (t !== null && (n = t.retryLane), XE(e, n));
  }
  function BA(e, t) {
    var n = On,
      a;
    switch (e.tag) {
      case F:
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
    (a !== null && a.delete(t), XE(e, n));
  }
  function jA(e) {
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
                : mA(e / 1960) * 1960;
  }
  function $A() {
    if (wu > gA)
      throw (
        (wu = 0),
        (cm = null),
        new Error(
          'Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.'
        )
      );
    Rl > bA &&
      ((Rl = 0),
      (Qf = null),
      d(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      ));
  }
  function YA() {
    (Yr.flushLegacyContextWarning(), Yr.flushPendingUnsafeLifecycleWarnings());
  }
  function QE(e, t) {
    (Jt(e),
      td(e, Pa, cA),
      t && td(e, pc, fA),
      td(e, Pa, sA),
      t && td(e, pc, uA),
      Rn());
  }
  function td(e, t, n) {
    for (var a = e, l = null; a !== null; ) {
      var u = a.subtreeFlags & t;
      a !== l && a.child !== null && u !== We
        ? (a = a.child)
        : ((a.flags & t) !== We && n(a),
          a.sibling !== null ? (a = a.sibling) : (a = l = a.return));
    }
  }
  var nd = null;
  function KE(e) {
    {
      if ((gt & Hn) !== Sn || !(e.mode & yt)) return;
      var t = e.tag;
      if (
        t !== E &&
        t !== S &&
        t !== g &&
        t !== m &&
        t !== z &&
        t !== se &&
        t !== ie
      )
        return;
      var n = lt(e) || 'ReactComponent';
      if (nd !== null) {
        if (nd.has(n)) return;
        nd.add(n);
      } else nd = new Set([n]);
      var a = $n;
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
  var mm;
  {
    var GA = null;
    mm = function (e, t, n) {
      var a = iC(GA, t);
      try {
        return cE(e, t, n);
      } catch (u) {
        if (
          a1() ||
          (u !== null && typeof u == 'object' && typeof u.then == 'function')
        )
          throw u;
        if (
          (uf(),
          dS(),
          mE(e, t),
          iC(t, a),
          t.mode & kt && gh(t),
          Zd(null, cE, null, e, t, n),
          xx())
        ) {
          var l = ep();
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
  var JE = !1,
    ym;
  ym = new Set();
  function WA(e) {
    if (qi && !z1())
      switch (e.tag) {
        case m:
        case z:
        case ie: {
          var t = (Zt && lt(Zt)) || 'Unknown',
            n = t;
          if (!ym.has(n)) {
            ym.add(n);
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
          JE ||
            (d(
              'Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state.'
            ),
            (JE = !0));
          break;
        }
      }
  }
  function Ru(e, t) {
    if (Ir) {
      var n = e.memoizedUpdaters;
      n.forEach(function (a) {
        Eg(e, a, t);
      });
    }
  }
  var gm = {};
  function bm(e, t) {
    {
      var n = Zr.current;
      return n !== null ? (n.push(t), gm) : lg(e, t);
    }
  }
  function ZE(e) {
    if (e !== gm) return Nx(e);
  }
  function eC() {
    return Zr.current !== null;
  }
  function qA(e) {
    {
      if (e.mode & yt) {
        if (!ME()) return;
      } else if (
        !hA() ||
        gt !== Sn ||
        (e.tag !== m && e.tag !== z && e.tag !== ie)
      )
        return;
      if (Zr.current === null) {
        var t = $n;
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
  function XA(e) {
    e.tag !== Ci &&
      ME() &&
      Zr.current === null &&
      d(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
  }
  function _u(e) {
    UE = e;
  }
  var zr = null,
    _l = null,
    QA = function (e) {
      zr = e;
    };
  function Dl(e) {
    {
      if (zr === null) return e;
      var t = zr(e);
      return t === void 0 ? e : t.current;
    }
  }
  function Sm(e) {
    return Dl(e);
  }
  function Em(e) {
    {
      if (zr === null) return e;
      var t = zr(e);
      if (t === void 0) {
        if (e != null && typeof e.render == 'function') {
          var n = Dl(e.render);
          if (e.render !== n) {
            var a = { $$typeof: ge, render: n };
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
  function tC(e, t) {
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
          (typeof a == 'function' || u === Ge) && (l = !0);
          break;
        }
        case z: {
          (u === ge || u === Ge) && (l = !0);
          break;
        }
        case se:
        case ie: {
          (u === Et || u === Ge) && (l = !0);
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
  function nC(e) {
    {
      if (zr === null || typeof WeakSet != 'function') return;
      (_l === null && (_l = new WeakSet()), _l.add(e));
    }
  }
  var KA = function (e, t) {
      {
        if (zr === null) return;
        var n = t.staleFamilies,
          a = t.updatedFamilies;
        (Qa(),
          Xa(function () {
            Cm(e.current, a, n);
          }));
      }
    },
    JA = function (e, t) {
      {
        if (e.context !== wr) return;
        (Qa(),
          Xa(function () {
            Du(t, e, null, null);
          }));
      }
    };
  function Cm(e, t, n) {
    {
      var a = e.alternate,
        l = e.child,
        u = e.sibling,
        p = e.tag,
        v = e.type,
        y = null;
      switch (p) {
        case m:
        case ie:
        case g:
          y = v;
          break;
        case z:
          y = v.render;
          break;
      }
      if (zr === null)
        throw new Error('Expected resolveFamily to be set during hot reload.');
      var C = !1,
        w = !1;
      if (y !== null) {
        var N = zr(y);
        N !== void 0 &&
          (n.has(N) ? (w = !0) : t.has(N) && (p === g ? (w = !0) : (C = !0)));
      }
      if (
        (_l !== null && (_l.has(e) || (a !== null && _l.has(a))) && (w = !0),
        w && (e._debugNeedsRemount = !0),
        w || C)
      ) {
        var k = cr(e, tt);
        k !== null && wn(k, e, tt, jt);
      }
      (l !== null && !w && Cm(l, t, n), u !== null && Cm(u, t, n));
    }
  }
  var ZA = function (e, t) {
    {
      var n = new Set(),
        a = new Set(
          t.map(function (l) {
            return l.current;
          })
        );
      return (wm(e.current, a, n), n);
    }
  };
  function wm(e, t, n) {
    {
      var a = e.child,
        l = e.sibling,
        u = e.tag,
        p = e.type,
        v = null;
      switch (u) {
        case m:
        case ie:
        case g:
          v = p;
          break;
        case z:
          v = p.render;
          break;
      }
      var y = !1;
      (v !== null && t.has(v) && (y = !0),
        y ? eM(e, n) : a !== null && wm(a, t, n),
        l !== null && wm(l, t, n));
    }
  }
  function eM(e, t) {
    {
      var n = tM(e, t);
      if (n) return;
      for (var a = e; ; ) {
        switch (a.tag) {
          case D:
            t.add(a.stateNode);
            return;
          case T:
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
  function tM(e, t) {
    for (var n = e, a = !1; ; ) {
      if (n.tag === D) ((a = !0), t.add(n.stateNode));
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
  var Tm;
  {
    Tm = !1;
    try {
      var rC = Object.preventExtensions({});
    } catch {
      Tm = !0;
    }
  }
  function nM(e, t, n, a) {
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
      (this.flags = We),
      (this.subtreeFlags = We),
      (this.deletions = null),
      (this.lanes = fe),
      (this.childLanes = fe),
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
      !Tm &&
        typeof Object.preventExtensions == 'function' &&
        Object.preventExtensions(this));
  }
  var Tr = function (e, t, n, a) {
    return new nM(e, t, n, a);
  };
  function xm(e) {
    var t = e.prototype;
    return !!(t && t.isReactComponent);
  }
  function rM(e) {
    return typeof e == 'function' && !xm(e) && e.defaultProps === void 0;
  }
  function aM(e) {
    if (typeof e == 'function') return xm(e) ? g : m;
    if (e != null) {
      var t = e.$$typeof;
      if (t === ge) return z;
      if (t === Et) return se;
    }
    return E;
  }
  function xo(e, t) {
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
        (n.flags = We),
        (n.subtreeFlags = We),
        (n.deletions = null),
        (n.actualDuration = 0),
        (n.actualStartTime = -1)),
      (n.flags = e.flags & za),
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
      case ie:
        n.type = Dl(e.type);
        break;
      case g:
        n.type = Sm(e.type);
        break;
      case z:
        n.type = Em(e.type);
        break;
    }
    return n;
  }
  function iM(e, t) {
    e.flags &= za | fn;
    var n = e.alternate;
    if (n === null)
      ((e.childLanes = fe),
        (e.lanes = t),
        (e.child = null),
        (e.subtreeFlags = We),
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
        (e.subtreeFlags = We),
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
  function oM(e, t, n) {
    var a;
    return (
      e === Jc ? ((a = yt), t === !0 && ((a |= an), (a |= sa))) : (a = je),
      Ir && (a |= kt),
      Tr(S, null, null, a)
    );
  }
  function Rm(e, t, n, a, l, u) {
    var p = E,
      v = e;
    if (typeof e == 'function') xm(e) ? ((p = g), (v = Sm(v))) : (v = Dl(v));
    else if (typeof e == 'string') p = D;
    else
      e: switch (e) {
        case aa:
          return Pi(n.children, l, u, t);
        case Gi:
          ((p = P), (l |= an), (l & yt) !== je && (l |= sa));
          break;
        case ai:
          return lM(n, l, u, t);
        case $e:
          return sM(n, l, u, t);
        case ht:
          return uM(n, l, u, t);
        case Bt:
          return aC(n, l, u, t);
        case Xt:
        case ut:
        case jn:
        case ia:
        case hn:
        default: {
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case M:
                p = _;
                break e;
              case ce:
                p = L;
                break e;
              case ge:
                ((p = z), (v = Em(v)));
                break e;
              case Et:
                p = se;
                break e;
              case Ge:
                ((p = de), (v = null));
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
    var w = Tr(p, n, t, l);
    return (
      (w.elementType = e),
      (w.type = v),
      (w.lanes = u),
      (w._debugOwner = a),
      w
    );
  }
  function _m(e, t, n) {
    var a = null;
    a = e._owner;
    var l = e.type,
      u = e.key,
      p = e.props,
      v = Rm(l, u, p, a, t, n);
    return ((v._debugSource = e._source), (v._debugOwner = e._owner), v);
  }
  function Pi(e, t, n, a) {
    var l = Tr(x, e, a, t);
    return ((l.lanes = n), l);
  }
  function lM(e, t, n, a) {
    typeof e.id != 'string' &&
      d(
        'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
        typeof e.id
      );
    var l = Tr(U, e, a, t | kt);
    return (
      (l.elementType = ai),
      (l.lanes = n),
      (l.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }),
      l
    );
  }
  function sM(e, t, n, a) {
    var l = Tr(F, e, a, t);
    return ((l.elementType = $e), (l.lanes = n), l);
  }
  function uM(e, t, n, a) {
    var l = Tr(ue, e, a, t);
    return ((l.elementType = ht), (l.lanes = n), l);
  }
  function aC(e, t, n, a) {
    var l = Tr(q, e, a, t);
    ((l.elementType = Bt), (l.lanes = n));
    var u = { isHidden: !1 };
    return ((l.stateNode = u), l);
  }
  function Dm(e, t, n) {
    var a = Tr(O, e, null, t);
    return ((a.lanes = n), a);
  }
  function cM() {
    var e = Tr(D, null, null, je);
    return ((e.elementType = 'DELETED'), e);
  }
  function fM(e) {
    var t = Tr(ae, null, null, je);
    return ((t.stateNode = e), t);
  }
  function Om(e, t, n) {
    var a = e.children !== null ? e.children : [],
      l = Tr(T, a, e.key, t);
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
  function iC(e, t) {
    return (
      e === null && (e = Tr(E, null, null, je)),
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
  function dM(e, t, n, a, l) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.pendingChildren = null),
      (this.current = null),
      (this.pingCache = null),
      (this.finishedWork = null),
      (this.timeoutHandle = cv),
      (this.context = null),
      (this.pendingContext = null),
      (this.callbackNode = null),
      (this.callbackPriority = On),
      (this.eventTimes = kp(fe)),
      (this.expirationTimes = kp(jt)),
      (this.pendingLanes = fe),
      (this.suspendedLanes = fe),
      (this.pingedLanes = fe),
      (this.expiredLanes = fe),
      (this.mutableReadLanes = fe),
      (this.finishedLanes = fe),
      (this.entangledLanes = fe),
      (this.entanglements = kp(fe)),
      (this.identifierPrefix = a),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null),
      (this.effectDuration = 0),
      (this.passiveEffectDuration = 0));
    {
      this.memoizedUpdaters = new Set();
      for (var u = (this.pendingUpdatersLaneMap = []), p = 0; p < cp; p++)
        u.push(new Set());
    }
    switch (t) {
      case Jc:
        this._debugRootType = n ? 'hydrateRoot()' : 'createRoot()';
        break;
      case Ci:
        this._debugRootType = n ? 'hydrate()' : 'render()';
        break;
    }
  }
  function oC(e, t, n, a, l, u, p, v, y, C) {
    var w = new dM(e, t, n, v, y),
      N = oM(t, u);
    ((w.current = N), (N.stateNode = w));
    {
      var k = {
        element: a,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      };
      N.memoizedState = k;
    }
    return (Bv(N), w);
  }
  var Am = '18.3.1';
  function pM(e, t, n) {
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
  var Mm, Lm;
  ((Mm = !1), (Lm = {}));
  function lC(e) {
    if (!e) return wr;
    var t = Bo(e),
      n = XD(t);
    if (t.tag === g) {
      var a = t.type;
      if (fa(a)) return Nb(t, a, n);
    }
    return n;
  }
  function vM(e, t) {
    {
      var n = Bo(e);
      if (n === void 0) {
        if (typeof e.render == 'function')
          throw new Error('Unable to find node on an unmounted component.');
        var a = Object.keys(e).join(',');
        throw new Error(
          'Argument appears to not be a ReactComponent. Keys: ' + a
        );
      }
      var l = ag(n);
      if (l === null) return null;
      if (l.mode & an) {
        var u = lt(n) || 'Component';
        if (!Lm[u]) {
          Lm[u] = !0;
          var p = $n;
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
  function sC(e, t, n, a, l, u, p, v) {
    var y = !1,
      C = null;
    return oC(e, t, y, C, n, a, l, u, p);
  }
  function uC(e, t, n, a, l, u, p, v, y, C) {
    var w = !0,
      N = oC(n, a, w, e, l, u, p, v, y);
    N.context = lC(null);
    var k = N.current,
      j = nr(),
      G = ki(k),
      K = Ya(j, G);
    return ((K.callback = t ?? null), xi(k, K, G), EA(N, G, j), N);
  }
  function Du(e, t, n, a) {
    Bx(t, e);
    var l = t.current,
      u = nr(),
      p = ki(l);
    sR(p);
    var v = lC(n);
    (t.context === null ? (t.context = v) : (t.pendingContext = v),
      qi &&
        $n !== null &&
        !Mm &&
        ((Mm = !0),
        d(
          `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
          lt($n) || 'Unknown'
        )));
    var y = Ya(u, p);
    ((y.payload = { element: e }),
      (a = a === void 0 ? null : a),
      a !== null &&
        (typeof a != 'function' &&
          d(
            'render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.',
            a
          ),
        (y.callback = a)));
    var C = xi(l, y, p);
    return (C !== null && (wn(C, l, p, u), vf(C, l, p)), p);
  }
  function rd(e) {
    var t = e.current;
    if (!t.child) return null;
    switch (t.child.tag) {
      case D:
        return t.child.stateNode;
      default:
        return t.child.stateNode;
    }
  }
  function hM(e) {
    switch (e.tag) {
      case S: {
        var t = e.stateNode;
        if (Cc(t)) {
          var n = yR(t);
          xA(t, n);
        }
        break;
      }
      case F: {
        Xa(function () {
          var l = cr(e, tt);
          if (l !== null) {
            var u = nr();
            wn(l, e, tt, u);
          }
        });
        var a = tt;
        km(e, a);
        break;
      }
    }
  }
  function cC(e, t) {
    var n = e.memoizedState;
    n !== null && n.dehydrated !== null && (n.retryLane = wR(n.retryLane, t));
  }
  function km(e, t) {
    cC(e, t);
    var n = e.alternate;
    n && cC(n, t);
  }
  function mM(e) {
    if (e.tag === F) {
      var t = ps,
        n = cr(e, t);
      if (n !== null) {
        var a = nr();
        wn(n, e, t, a);
      }
      km(e, t);
    }
  }
  function yM(e) {
    if (e.tag === F) {
      var t = ki(e),
        n = cr(e, t);
      if (n !== null) {
        var a = nr();
        wn(n, e, t, a);
      }
      km(e, t);
    }
  }
  function fC(e) {
    var t = kx(e);
    return t === null ? null : t.stateNode;
  }
  var dC = function (e) {
    return null;
  };
  function gM(e) {
    return dC(e);
  }
  var pC = function (e) {
    return !1;
  };
  function bM(e) {
    return pC(e);
  }
  var vC = null,
    hC = null,
    mC = null,
    yC = null,
    gC = null,
    bC = null,
    SC = null,
    EC = null,
    CC = null;
  {
    var wC = function (e, t, n) {
        var a = t[n],
          l = _t(e) ? e.slice() : ct({}, e);
        return n + 1 === t.length
          ? (_t(l) ? l.splice(a, 1) : delete l[a], l)
          : ((l[a] = wC(e[a], t, n + 1)), l);
      },
      TC = function (e, t) {
        return wC(e, t, 0);
      },
      xC = function (e, t, n, a) {
        var l = t[a],
          u = _t(e) ? e.slice() : ct({}, e);
        if (a + 1 === t.length) {
          var p = n[a];
          ((u[p] = u[l]), _t(u) ? u.splice(l, 1) : delete u[l]);
        } else u[l] = xC(e[l], t, n, a + 1);
        return u;
      },
      RC = function (e, t, n) {
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
        return xC(e, t, n, 0);
      },
      _C = function (e, t, n, a) {
        if (n >= t.length) return a;
        var l = t[n],
          u = _t(e) ? e.slice() : ct({}, e);
        return ((u[l] = _C(e[l], t, n + 1, a)), u);
      },
      DC = function (e, t, n) {
        return _C(e, t, 0, n);
      },
      Nm = function (e, t) {
        for (var n = e.memoizedState; n !== null && t > 0; )
          ((n = n.next), t--);
        return n;
      };
    ((vC = function (e, t, n, a) {
      var l = Nm(e, t);
      if (l !== null) {
        var u = DC(l.memoizedState, n, a);
        ((l.memoizedState = u),
          (l.baseState = u),
          (e.memoizedProps = ct({}, e.memoizedProps)));
        var p = cr(e, tt);
        p !== null && wn(p, e, tt, jt);
      }
    }),
      (hC = function (e, t, n) {
        var a = Nm(e, t);
        if (a !== null) {
          var l = TC(a.memoizedState, n);
          ((a.memoizedState = l),
            (a.baseState = l),
            (e.memoizedProps = ct({}, e.memoizedProps)));
          var u = cr(e, tt);
          u !== null && wn(u, e, tt, jt);
        }
      }),
      (mC = function (e, t, n, a) {
        var l = Nm(e, t);
        if (l !== null) {
          var u = RC(l.memoizedState, n, a);
          ((l.memoizedState = u),
            (l.baseState = u),
            (e.memoizedProps = ct({}, e.memoizedProps)));
          var p = cr(e, tt);
          p !== null && wn(p, e, tt, jt);
        }
      }),
      (yC = function (e, t, n) {
        ((e.pendingProps = DC(e.memoizedProps, t, n)),
          e.alternate && (e.alternate.pendingProps = e.pendingProps));
        var a = cr(e, tt);
        a !== null && wn(a, e, tt, jt);
      }),
      (gC = function (e, t) {
        ((e.pendingProps = TC(e.memoizedProps, t)),
          e.alternate && (e.alternate.pendingProps = e.pendingProps));
        var n = cr(e, tt);
        n !== null && wn(n, e, tt, jt);
      }),
      (bC = function (e, t, n) {
        ((e.pendingProps = RC(e.memoizedProps, t, n)),
          e.alternate && (e.alternate.pendingProps = e.pendingProps));
        var a = cr(e, tt);
        a !== null && wn(a, e, tt, jt);
      }),
      (SC = function (e) {
        var t = cr(e, tt);
        t !== null && wn(t, e, tt, jt);
      }),
      (EC = function (e) {
        dC = e;
      }),
      (CC = function (e) {
        pC = e;
      }));
  }
  function SM(e) {
    var t = ag(e);
    return t === null ? null : t.stateNode;
  }
  function EM(e) {
    return null;
  }
  function CM() {
    return $n;
  }
  function wM(e) {
    var t = e.findFiberByHostInstance,
      n = o.ReactCurrentDispatcher;
    return Ix({
      bundleType: e.bundleType,
      version: e.version,
      rendererPackageName: e.rendererPackageName,
      rendererConfig: e.rendererConfig,
      overrideHookState: vC,
      overrideHookStateDeletePath: hC,
      overrideHookStateRenamePath: mC,
      overrideProps: yC,
      overridePropsDeletePath: gC,
      overridePropsRenamePath: bC,
      setErrorHandler: EC,
      setSuspenseHandler: CC,
      scheduleUpdate: SC,
      currentDispatcherRef: n,
      findHostInstanceByFiber: SM,
      findFiberByHostInstance: t || EM,
      findHostInstancesForRefresh: ZA,
      scheduleRefresh: KA,
      scheduleRoot: JA,
      setRefreshHandler: QA,
      getCurrentFiber: CM,
      reconcilerVersion: Am,
    });
  }
  var OC =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Pm(e) {
    this._internalRoot = e;
  }
  ((ad.prototype.render = Pm.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw new Error('Cannot update an unmounted root.');
      {
        typeof arguments[1] == 'function'
          ? d(
              'render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().'
            )
          : id(arguments[1])
            ? d(
                "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
              )
            : typeof arguments[1] < 'u' &&
              d(
                'You passed a second argument to root.render(...) but it only accepts one argument.'
              );
        var n = t.containerInfo;
        if (n.nodeType !== cn) {
          var a = fC(t.current);
          a &&
            a.parentNode !== n &&
            d(
              "render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container."
            );
        }
      }
      Du(e, t, null, null);
    }),
    (ad.prototype.unmount = Pm.prototype.unmount =
      function () {
        typeof arguments[0] == 'function' &&
          d(
            'unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().'
          );
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (IE() &&
            d(
              'Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition.'
            ),
            Xa(function () {
              Du(null, e, null, null);
            }),
            Ob(t));
        }
      }));
  function TM(e, t) {
    if (!id(e))
      throw new Error(
        'createRoot(...): Target container is not a DOM element.'
      );
    AC(e);
    var n = !1,
      a = !1,
      l = '',
      u = OC;
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
    var p = sC(e, Jc, null, n, a, l, u);
    Yc(p.current, e);
    var v = e.nodeType === cn ? e.parentNode : e;
    return (Ns(v), new Pm(p));
  }
  function ad(e) {
    this._internalRoot = e;
  }
  function xM(e) {
    e && HR(e);
  }
  ad.prototype.unstable_scheduleHydration = xM;
  function RM(e, t, n) {
    if (!id(e))
      throw new Error(
        'hydrateRoot(...): Target container is not a DOM element.'
      );
    (AC(e),
      t === void 0 &&
        d(
          'Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)'
        ));
    var a = n ?? null,
      l = (n != null && n.hydratedSources) || null,
      u = !1,
      p = !1,
      v = '',
      y = OC;
    n != null &&
      (n.unstable_strictMode === !0 && (u = !0),
      n.identifierPrefix !== void 0 && (v = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (y = n.onRecoverableError));
    var C = uC(t, null, e, Jc, a, u, p, v, y);
    if ((Yc(C.current, e), Ns(e), l))
      for (var w = 0; w < l.length; w++) {
        var N = l[w];
        A1(C, N);
      }
    return new ad(C);
  }
  function id(e) {
    return !!(
      e &&
      (e.nodeType === sr || e.nodeType === La || e.nodeType === Bd || !Ce)
    );
  }
  function Ou(e) {
    return !!(
      e &&
      (e.nodeType === sr ||
        e.nodeType === La ||
        e.nodeType === Bd ||
        (e.nodeType === cn && e.nodeValue === ' react-mount-point-unstable '))
    );
  }
  function AC(e) {
    (e.nodeType === sr &&
      e.tagName &&
      e.tagName.toUpperCase() === 'BODY' &&
      d(
        'createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app.'
      ),
      Ys(e) &&
        (e._reactRootContainer
          ? d(
              'You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.'
            )
          : d(
              'You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it.'
            )));
  }
  var _M = o.ReactCurrentOwner,
    MC;
  MC = function (e) {
    if (e._reactRootContainer && e.nodeType !== cn) {
      var t = fC(e._reactRootContainer.current);
      t &&
        t.parentNode !== e &&
        d(
          'render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.'
        );
    }
    var n = !!e._reactRootContainer,
      a = zm(e),
      l = !!(a && Si(a));
    (l &&
      !n &&
      d(
        'render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render.'
      ),
      e.nodeType === sr &&
        e.tagName &&
        e.tagName.toUpperCase() === 'BODY' &&
        d(
          'render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.'
        ));
  };
  function zm(e) {
    return e ? (e.nodeType === La ? e.documentElement : e.firstChild) : null;
  }
  function LC() {}
  function DM(e, t, n, a, l) {
    if (l) {
      if (typeof a == 'function') {
        var u = a;
        a = function () {
          var k = rd(p);
          u.call(k);
        };
      }
      var p = uC(t, a, e, Ci, null, !1, !1, '', LC);
      ((e._reactRootContainer = p), Yc(p.current, e));
      var v = e.nodeType === cn ? e.parentNode : e;
      return (Ns(v), Xa(), p);
    } else {
      for (var y; (y = e.lastChild); ) e.removeChild(y);
      if (typeof a == 'function') {
        var C = a;
        a = function () {
          var k = rd(w);
          C.call(k);
        };
      }
      var w = sC(e, Ci, null, !1, !1, '', LC);
      ((e._reactRootContainer = w), Yc(w.current, e));
      var N = e.nodeType === cn ? e.parentNode : e;
      return (
        Ns(N),
        Xa(function () {
          Du(t, w, n, a);
        }),
        w
      );
    }
  }
  function OM(e, t) {
    e !== null &&
      typeof e != 'function' &&
      d(
        '%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.',
        t,
        e
      );
  }
  function od(e, t, n, a, l) {
    (MC(n), OM(l === void 0 ? null : l, 'render'));
    var u = n._reactRootContainer,
      p;
    if (!u) p = DM(n, t, e, l, a);
    else {
      if (((p = u), typeof l == 'function')) {
        var v = l;
        l = function () {
          var y = rd(p);
          v.call(y);
        };
      }
      Du(t, p, e, l);
    }
    return rd(p);
  }
  var kC = !1;
  function AM(e) {
    {
      kC ||
        ((kC = !0),
        d(
          'findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node'
        ));
      var t = _M.current;
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
    return e == null ? null : e.nodeType === sr ? e : vM(e, 'findDOMNode');
  }
  function MM(e, t, n) {
    if (
      (d(
        "ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"
      ),
      !Ou(t))
    )
      throw new Error('Target container is not a DOM element.');
    {
      var a = Ys(t) && t._reactRootContainer === void 0;
      a &&
        d(
          'You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?'
        );
    }
    return od(null, e, t, !0, n);
  }
  function LM(e, t, n) {
    if (
      (d(
        "ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"
      ),
      !Ou(t))
    )
      throw new Error('Target container is not a DOM element.');
    {
      var a = Ys(t) && t._reactRootContainer === void 0;
      a &&
        d(
          'You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?'
        );
    }
    return od(null, e, t, !1, n);
  }
  function kM(e, t, n, a) {
    if (
      (d(
        "ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"
      ),
      !Ou(n))
    )
      throw new Error('Target container is not a DOM element.');
    if (e == null || !Rx(e))
      throw new Error('parentComponent must be a valid React Component');
    return od(e, t, n, !1, a);
  }
  var NC = !1;
  function NM(e) {
    if (
      (NC ||
        ((NC = !0),
        d(
          'unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot'
        )),
      !Ou(e))
    )
      throw new Error(
        'unmountComponentAtNode(...): Target container is not a DOM element.'
      );
    {
      var t = Ys(e) && e._reactRootContainer === void 0;
      t &&
        d(
          'You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?'
        );
    }
    if (e._reactRootContainer) {
      {
        var n = zm(e),
          a = n && !Si(n);
        a &&
          d(
            "unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React."
          );
      }
      return (
        Xa(function () {
          od(null, null, e, !1, function () {
            ((e._reactRootContainer = null), Ob(e));
          });
        }),
        !0
      );
    } else {
      {
        var l = zm(e),
          u = !!(l && Si(l)),
          p =
            e.nodeType === sr &&
            Ou(e.parentNode) &&
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
  (AR(hM),
    LR(mM),
    kR(yM),
    NR(Br),
    PR(_R),
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
    hx(z_),
    gx(pm, RA, Xa));
  function PM(e, t) {
    var n =
      arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    if (!id(t)) throw new Error('Target container is not a DOM element.');
    return pM(e, t, null, n);
  }
  function zM(e, t, n, a) {
    return kM(e, t, n, a);
  }
  var Um = { usingClientEntryPoint: !1, Events: [Si, il, Gc, Gy, Wy, pm] };
  function UM(e, t) {
    return (
      Um.usingClientEntryPoint ||
        d(
          'You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'
        ),
      TM(e, t)
    );
  }
  function FM(e, t, n) {
    return (
      Um.usingClientEntryPoint ||
        d(
          'You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'
        ),
      RM(e, t, n)
    );
  }
  function VM(e) {
    return (
      IE() &&
        d(
          'flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.'
        ),
      Xa(e)
    );
  }
  var HM = wM({
    findFiberByHostInstance: uo,
    bundleType: 1,
    version: Am,
    rendererPackageName: 'react-dom',
  });
  if (
    !HM &&
    it &&
    window.top === window.self &&
    ((navigator.userAgent.indexOf('Chrome') > -1 &&
      navigator.userAgent.indexOf('Edge') === -1) ||
      navigator.userAgent.indexOf('Firefox') > -1)
  ) {
    var PC = window.location.protocol;
    /^(https?|file):$/.test(PC) &&
      console.info(
        '%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools' +
          (PC === 'file:'
            ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq`
            : ''),
        'font-weight:bold'
      );
  }
  ((Rr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Um),
    (Rr.createPortal = PM),
    (Rr.createRoot = UM),
    (Rr.findDOMNode = AM),
    (Rr.flushSync = VM),
    (Rr.hydrate = MM),
    (Rr.hydrateRoot = FM),
    (Rr.render = LM),
    (Rr.unmountComponentAtNode = NM),
    (Rr.unstable_batchedUpdates = pm),
    (Rr.unstable_renderSubtreeIntoContainer = zM),
    (Rr.version = Am),
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' &&
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ==
        'function' &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error()));
})();
Ow.exports = Rr;
var WM = Ow.exports,
  Lw,
  zC = WM;
{
  var UC = zC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Lw = function (r, i, o) {
    UC.usingClientEntryPoint = !0;
    try {
      return zC.hydrateRoot(r, i, o);
    } finally {
      UC.usingClientEntryPoint = !1;
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
 */ function Uu() {
  return (
    (Uu = Object.assign
      ? Object.assign.bind()
      : function (r) {
          for (var i = 1; i < arguments.length; i++) {
            var o = arguments[i];
            for (var s in o)
              Object.prototype.hasOwnProperty.call(o, s) && (r[s] = o[s]);
          }
          return r;
        }),
    Uu.apply(this, arguments)
  );
}
var Vi;
(function (r) {
  ((r.Pop = 'POP'), (r.Push = 'PUSH'), (r.Replace = 'REPLACE'));
})(Vi || (Vi = {}));
const FC = 'popstate';
function qM(r) {
  r === void 0 && (r = {});
  function i(s, c) {
    let { pathname: f, search: d, hash: h } = s.location;
    return Jm(
      '',
      { pathname: f, search: d, hash: h },
      (c.state && c.state.usr) || null,
      (c.state && c.state.key) || 'default'
    );
  }
  function o(s, c) {
    return typeof c == 'string' ? c : Fu(c);
  }
  return QM(i, o, null, r);
}
function en(r, i) {
  if (r === !1 || r === null || typeof r > 'u') throw new Error(i);
}
function wa(r, i) {
  if (!r) {
    typeof console < 'u' && console.warn(i);
    try {
      throw new Error(i);
    } catch {}
  }
}
function XM() {
  return Math.random().toString(36).substr(2, 8);
}
function VC(r, i) {
  return { usr: r.state, key: r.key, idx: i };
}
function Jm(r, i, o, s) {
  return (
    o === void 0 && (o = null),
    Uu(
      { pathname: typeof r == 'string' ? r : r.pathname, search: '', hash: '' },
      typeof i == 'string' ? zl(i) : i,
      { state: o, key: (i && i.key) || s || XM() }
    )
  );
}
function Fu(r) {
  let { pathname: i = '/', search: o = '', hash: s = '' } = r;
  return (
    o && o !== '?' && (i += o.charAt(0) === '?' ? o : '?' + o),
    s && s !== '#' && (i += s.charAt(0) === '#' ? s : '#' + s),
    i
  );
}
function zl(r) {
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
function QM(r, i, o, s) {
  s === void 0 && (s = {});
  let { window: c = document.defaultView, v5Compat: f = !1 } = s,
    d = c.history,
    h = Vi.Pop,
    m = null,
    g = E();
  g == null && ((g = 0), d.replaceState(Uu({}, d.state, { idx: g }), ''));
  function E() {
    return (d.state || { idx: null }).idx;
  }
  function S() {
    h = Vi.Pop;
    let P = E(),
      L = P == null ? null : P - g;
    ((g = P), m && m({ action: h, location: x.location, delta: L }));
  }
  function T(P, L) {
    h = Vi.Push;
    let _ = Jm(x.location, P, L);
    (o && o(_, P), (g = E() + 1));
    let z = VC(_, g),
      U = x.createHref(_);
    try {
      d.pushState(z, '', U);
    } catch (F) {
      if (F instanceof DOMException && F.name === 'DataCloneError') throw F;
      c.location.assign(U);
    }
    f && m && m({ action: h, location: x.location, delta: 1 });
  }
  function D(P, L) {
    h = Vi.Replace;
    let _ = Jm(x.location, P, L);
    (o && o(_, P), (g = E()));
    let z = VC(_, g),
      U = x.createHref(_);
    (d.replaceState(z, '', U),
      f && m && m({ action: h, location: x.location, delta: 0 }));
  }
  function O(P) {
    let L = c.location.origin !== 'null' ? c.location.origin : c.location.href,
      _ = typeof P == 'string' ? P : Fu(P);
    return (
      (_ = _.replace(/ $/, '%20')),
      en(
        L,
        'No window.location.(origin|href) available to create URL for href: ' +
          _
      ),
      new URL(_, L)
    );
  }
  let x = {
    get action() {
      return h;
    },
    get location() {
      return r(c, d);
    },
    listen(P) {
      if (m) throw new Error('A history only accepts one active listener');
      return (
        c.addEventListener(FC, S),
        (m = P),
        () => {
          (c.removeEventListener(FC, S), (m = null));
        }
      );
    },
    createHref(P) {
      return i(c, P);
    },
    createURL: O,
    encodeLocation(P) {
      let L = O(P);
      return { pathname: L.pathname, search: L.search, hash: L.hash };
    },
    push: T,
    replace: D,
    go(P) {
      return d.go(P);
    },
  };
  return x;
}
var HC;
(function (r) {
  ((r.data = 'data'),
    (r.deferred = 'deferred'),
    (r.redirect = 'redirect'),
    (r.error = 'error'));
})(HC || (HC = {}));
function KM(r, i, o) {
  return (o === void 0 && (o = '/'), JM(r, i, o, !1));
}
function JM(r, i, o, s) {
  let c = typeof i == 'string' ? zl(i) : i,
    f = Bi(c.pathname || '/', o);
  if (f == null) return null;
  let d = kw(r);
  ZM(d);
  let h = null;
  for (let m = 0; h == null && m < d.length; ++m) {
    let g = cL(f);
    h = sL(d[m], g, s);
  }
  return h;
}
function kw(r, i, o, s) {
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
      kw(f.children, i, E, g)),
      !(f.path == null && !f.index) &&
        i.push({ path: g, score: oL(g, f.index), routesMeta: E }));
  };
  return (
    r.forEach((f, d) => {
      var h;
      if (f.path === '' || !((h = f.path) != null && h.includes('?'))) c(f, d);
      else for (let m of Nw(f.path)) c(f, d, m);
    }),
    i
  );
}
function Nw(r) {
  let i = r.split('/');
  if (i.length === 0) return [];
  let [o, ...s] = i,
    c = o.endsWith('?'),
    f = o.replace(/\?$/, '');
  if (s.length === 0) return c ? [f, ''] : [f];
  let d = Nw(s.join('/')),
    h = [];
  return (
    h.push(...d.map((m) => (m === '' ? f : [f, m].join('/')))),
    c && h.push(...d),
    h.map((m) => (r.startsWith('/') && m === '' ? '/' : m))
  );
}
function ZM(r) {
  r.sort((i, o) =>
    i.score !== o.score
      ? o.score - i.score
      : lL(
          i.routesMeta.map((s) => s.childrenIndex),
          o.routesMeta.map((s) => s.childrenIndex)
        )
  );
}
const eL = /^:[\w-]+$/,
  tL = 3,
  nL = 2,
  rL = 1,
  aL = 10,
  iL = -2,
  IC = (r) => r === '*';
function oL(r, i) {
  let o = r.split('/'),
    s = o.length;
  return (
    o.some(IC) && (s += iL),
    i && (s += nL),
    o
      .filter((c) => !IC(c))
      .reduce((c, f) => c + (eL.test(f) ? tL : f === '' ? rL : aL), s)
  );
}
function lL(r, i) {
  return r.length === i.length && r.slice(0, -1).every((s, c) => s === i[c])
    ? r[r.length - 1] - i[i.length - 1]
    : 0;
}
function sL(r, i, o) {
  o === void 0 && (o = !1);
  let { routesMeta: s } = r,
    c = {},
    f = '/',
    d = [];
  for (let h = 0; h < s.length; ++h) {
    let m = s[h],
      g = h === s.length - 1,
      E = f === '/' ? i : i.slice(f.length) || '/',
      S = Sd(
        { path: m.relativePath, caseSensitive: m.caseSensitive, end: g },
        E
      ),
      T = m.route;
    if (
      (!S &&
        g &&
        o &&
        !s[s.length - 1].route.index &&
        (S = Sd(
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
        pathnameBase: vL(ti([f, S.pathnameBase])),
        route: T,
      }),
      S.pathnameBase !== '/' && (f = ti([f, S.pathnameBase])));
  }
  return d;
}
function Sd(r, i) {
  typeof r == 'string' && (r = { path: r, caseSensitive: !1, end: !0 });
  let [o, s] = uL(r.path, r.caseSensitive, r.end),
    c = i.match(o);
  if (!c) return null;
  let f = c[0],
    d = f.replace(/(.)\/+$/, '$1'),
    h = c.slice(1);
  return {
    params: s.reduce((g, E, S) => {
      let { paramName: T, isOptional: D } = E;
      if (T === '*') {
        let x = h[S] || '';
        d = f.slice(0, f.length - x.length).replace(/(.)\/+$/, '$1');
      }
      const O = h[S];
      return (
        D && !O ? (g[T] = void 0) : (g[T] = (O || '').replace(/%2F/g, '/')),
        g
      );
    }, {}),
    pathname: f,
    pathnameBase: d,
    pattern: r,
  };
}
function uL(r, i, o) {
  (i === void 0 && (i = !1),
    o === void 0 && (o = !0),
    wa(
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
function cL(r) {
  try {
    return r
      .split('/')
      .map((i) => decodeURIComponent(i).replace(/\//g, '%2F'))
      .join('/');
  } catch (i) {
    return (
      wa(
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
function Bi(r, i) {
  if (i === '/') return r;
  if (!r.toLowerCase().startsWith(i.toLowerCase())) return null;
  let o = i.endsWith('/') ? i.length - 1 : i.length,
    s = r.charAt(o);
  return s && s !== '/' ? null : r.slice(o) || '/';
}
function fL(r, i) {
  i === void 0 && (i = '/');
  let {
    pathname: o,
    search: s = '',
    hash: c = '',
  } = typeof r == 'string' ? zl(r) : r;
  return {
    pathname: o ? (o.startsWith('/') ? o : dL(o, i)) : i,
    search: hL(s),
    hash: mL(c),
  };
}
function dL(r, i) {
  let o = i.replace(/\/+$/, '').split('/');
  return (
    r.split('/').forEach((c) => {
      c === '..' ? o.length > 1 && o.pop() : c !== '.' && o.push(c);
    }),
    o.length > 1 ? o.join('/') : '/'
  );
}
function Fm(r, i, o, s) {
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
function pL(r) {
  return r.filter(
    (i, o) => o === 0 || (i.route.path && i.route.path.length > 0)
  );
}
function Pw(r, i) {
  let o = pL(r);
  return i
    ? o.map((s, c) => (c === o.length - 1 ? s.pathname : s.pathnameBase))
    : o.map((s) => s.pathnameBase);
}
function zw(r, i, o, s) {
  s === void 0 && (s = !1);
  let c;
  typeof r == 'string'
    ? (c = zl(r))
    : ((c = Uu({}, r)),
      en(
        !c.pathname || !c.pathname.includes('?'),
        Fm('?', 'pathname', 'search', c)
      ),
      en(
        !c.pathname || !c.pathname.includes('#'),
        Fm('#', 'pathname', 'hash', c)
      ),
      en(!c.search || !c.search.includes('#'), Fm('#', 'search', 'hash', c)));
  let f = r === '' || c.pathname === '',
    d = f ? '/' : c.pathname,
    h;
  if (d == null) h = o;
  else {
    let S = i.length - 1;
    if (!s && d.startsWith('..')) {
      let T = d.split('/');
      for (; T[0] === '..'; ) (T.shift(), (S -= 1));
      c.pathname = T.join('/');
    }
    h = S >= 0 ? i[S] : '/';
  }
  let m = fL(c, h),
    g = d && d !== '/' && d.endsWith('/'),
    E = (f || d === '.') && o.endsWith('/');
  return (!m.pathname.endsWith('/') && (g || E) && (m.pathname += '/'), m);
}
const ti = (r) => r.join('/').replace(/\/\/+/g, '/'),
  vL = (r) => r.replace(/\/+$/, '').replace(/^\/*/, '/'),
  hL = (r) => (!r || r === '?' ? '' : r.startsWith('?') ? r : '?' + r),
  mL = (r) => (!r || r === '#' ? '' : r.startsWith('#') ? r : '#' + r);
function yL(r) {
  return (
    r != null &&
    typeof r.status == 'number' &&
    typeof r.statusText == 'string' &&
    typeof r.internal == 'boolean' &&
    'data' in r
  );
}
const Uw = ['post', 'put', 'patch', 'delete'];
new Set(Uw);
const gL = ['get', ...Uw];
new Set(gL);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Vu() {
  return (
    (Vu = Object.assign
      ? Object.assign.bind()
      : function (r) {
          for (var i = 1; i < arguments.length; i++) {
            var o = arguments[i];
            for (var s in o)
              Object.prototype.hasOwnProperty.call(o, s) && (r[s] = o[s]);
          }
          return r;
        }),
    Vu.apply(this, arguments)
  );
}
const Bu = Z.createContext(null);
Bu.displayName = 'DataRouter';
const uy = Z.createContext(null);
uy.displayName = 'DataRouterState';
const bL = Z.createContext(null);
bL.displayName = 'Await';
const na = Z.createContext(null);
na.displayName = 'Navigation';
const ju = Z.createContext(null);
ju.displayName = 'Location';
const Ta = Z.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Ta.displayName = 'Route';
const cy = Z.createContext(null);
cy.displayName = 'RouteError';
function SL(r, i) {
  let { relative: o } = i === void 0 ? {} : i;
  $u() ||
    en(
      !1,
      'useHref() may be used only in the context of a <Router> component.'
    );
  let { basename: s, navigator: c } = Z.useContext(na),
    { hash: f, pathname: d, search: h } = Yu(r, { relative: o }),
    m = d;
  return (
    s !== '/' && (m = d === '/' ? s : ti([s, d])),
    c.createHref({ pathname: m, search: h, hash: f })
  );
}
function $u() {
  return Z.useContext(ju) != null;
}
function Ul() {
  return (
    $u() ||
      en(
        !1,
        'useLocation() may be used only in the context of a <Router> component.'
      ),
    Z.useContext(ju).location
  );
}
const Fw =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function Vw(r) {
  Z.useContext(na).static || Z.useLayoutEffect(r);
}
function EL() {
  let { isDataRoute: r } = Z.useContext(Ta);
  return r ? UL() : CL();
}
function CL() {
  $u() ||
    en(
      !1,
      'useNavigate() may be used only in the context of a <Router> component.'
    );
  let r = Z.useContext(Bu),
    { basename: i, future: o, navigator: s } = Z.useContext(na),
    { matches: c } = Z.useContext(Ta),
    { pathname: f } = Ul(),
    d = JSON.stringify(Pw(c, o.v7_relativeSplatPath)),
    h = Z.useRef(!1);
  return (
    Vw(() => {
      h.current = !0;
    }),
    Z.useCallback(
      function (g, E) {
        if ((E === void 0 && (E = {}), wa(h.current, Fw), !h.current)) return;
        if (typeof g == 'number') {
          s.go(g);
          return;
        }
        let S = zw(g, JSON.parse(d), f, E.relative === 'path');
        (r == null &&
          i !== '/' &&
          (S.pathname = S.pathname === '/' ? i : ti([i, S.pathname])),
          (E.replace ? s.replace : s.push)(S, E.state, E));
      },
      [i, s, d, f, r]
    )
  );
}
const wL = Z.createContext(null);
function TL(r) {
  let i = Z.useContext(Ta).outlet;
  return i && Z.createElement(wL.Provider, { value: r }, i);
}
function Yu(r, i) {
  let { relative: o } = i === void 0 ? {} : i,
    { future: s } = Z.useContext(na),
    { matches: c } = Z.useContext(Ta),
    { pathname: f } = Ul(),
    d = JSON.stringify(Pw(c, s.v7_relativeSplatPath));
  return Z.useMemo(() => zw(r, JSON.parse(d), f, o === 'path'), [r, d, f, o]);
}
function xL(r, i) {
  return RL(r, i);
}
function RL(r, i, o, s) {
  $u() ||
    en(
      !1,
      'useRoutes() may be used only in the context of a <Router> component.'
    );
  let { navigator: c } = Z.useContext(na),
    { matches: f } = Z.useContext(Ta),
    d = f[f.length - 1],
    h = d ? d.params : {},
    m = d ? d.pathname : '/',
    g = d ? d.pathnameBase : '/',
    E = d && d.route;
  {
    let _ = (E && E.path) || '';
    Iw(
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
  let S = Ul(),
    T;
  if (i) {
    var D;
    let _ = typeof i == 'string' ? zl(i) : i;
    (g === '/' ||
      ((D = _.pathname) != null && D.startsWith(g)) ||
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
      (T = _));
  } else T = S;
  let O = T.pathname || '/',
    x = O;
  if (g !== '/') {
    let _ = g.replace(/^\//, '').split('/');
    x = '/' + O.replace(/^\//, '').split('/').slice(_.length).join('/');
  }
  let P = KM(r, { pathname: x });
  (wa(
    E || P != null,
    'No routes matched location "' + T.pathname + T.search + T.hash + '" '
  ),
    wa(
      P == null ||
        P[P.length - 1].route.element !== void 0 ||
        P[P.length - 1].route.Component !== void 0 ||
        P[P.length - 1].route.lazy !== void 0,
      'Matched leaf route at location "' +
        T.pathname +
        T.search +
        T.hash +
        '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.'
    ));
  let L = ML(
    P &&
      P.map((_) =>
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
  return i && L
    ? Z.createElement(
        ju.Provider,
        {
          value: {
            location: Vu(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              T
            ),
            navigationType: Vi.Pop,
          },
        },
        L
      )
    : L;
}
function _L() {
  let r = zL(),
    i = yL(r)
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
    (d = Z.createElement(
      Z.Fragment,
      null,
      Z.createElement('p', null, '💿 Hey developer 👋'),
      Z.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        Z.createElement('code', { style: f }, 'ErrorBoundary'),
        ' or',
        ' ',
        Z.createElement('code', { style: f }, 'errorElement'),
        ' prop on your route.'
      )
    )),
    Z.createElement(
      Z.Fragment,
      null,
      Z.createElement('h2', null, 'Unexpected Application Error!'),
      Z.createElement('h3', { style: { fontStyle: 'italic' } }, i),
      o ? Z.createElement('pre', { style: c }, o) : null,
      d
    )
  );
}
const DL = Z.createElement(_L, null);
class OL extends Z.Component {
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
      ? Z.createElement(
          Ta.Provider,
          { value: this.props.routeContext },
          Z.createElement(cy.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function AL(r) {
  let { routeContext: i, match: o, children: s } = r,
    c = Z.useContext(Bu);
  return (
    c &&
      c.static &&
      c.staticContext &&
      (o.route.errorElement || o.route.ErrorBoundary) &&
      (c.staticContext._deepestRenderedBoundaryId = o.route.id),
    Z.createElement(Ta.Provider, { value: i }, s)
  );
}
function ML(r, i, o, s) {
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
        let { loaderData: T, errors: D } = o,
          O =
            S.route.loader &&
            T[S.route.id] === void 0 &&
            (!D || D[S.route.id] === void 0);
        if (S.route.lazy || O) {
          ((m = !0), g >= 0 ? (d = d.slice(0, g + 1)) : (d = [d[0]]));
          break;
        }
      }
    }
  return d.reduceRight((E, S, T) => {
    let D,
      O = !1,
      x = null,
      P = null;
    o &&
      ((D = h && S.route.id ? h[S.route.id] : void 0),
      (x = S.route.errorElement || DL),
      m &&
        (g < 0 && T === 0
          ? (Iw(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (O = !0),
            (P = null))
          : g === T &&
            ((O = !0), (P = S.route.hydrateFallbackElement || null))));
    let L = i.concat(d.slice(0, T + 1)),
      _ = () => {
        let z;
        return (
          D
            ? (z = x)
            : O
              ? (z = P)
              : S.route.Component
                ? (z = Z.createElement(S.route.Component, null))
                : S.route.element
                  ? (z = S.route.element)
                  : (z = E),
          Z.createElement(AL, {
            match: S,
            routeContext: { outlet: E, matches: L, isDataRoute: o != null },
            children: z,
          })
        );
      };
    return o && (S.route.ErrorBoundary || S.route.errorElement || T === 0)
      ? Z.createElement(OL, {
          location: o.location,
          revalidation: o.revalidation,
          component: x,
          error: D,
          children: _(),
          routeContext: { outlet: null, matches: L, isDataRoute: !0 },
        })
      : _();
  }, null);
}
var Hw = (function (r) {
    return (
      (r.UseBlocker = 'useBlocker'),
      (r.UseRevalidator = 'useRevalidator'),
      (r.UseNavigateStable = 'useNavigate'),
      r
    );
  })(Hw || {}),
  Hu = (function (r) {
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
  })(Hu || {});
function fy(r) {
  return (
    r +
    ' must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router.'
  );
}
function LL(r) {
  let i = Z.useContext(Bu);
  return (i || en(!1, fy(r)), i);
}
function kL(r) {
  let i = Z.useContext(uy);
  return (i || en(!1, fy(r)), i);
}
function NL(r) {
  let i = Z.useContext(Ta);
  return (i || en(!1, fy(r)), i);
}
function dy(r) {
  let i = NL(r),
    o = i.matches[i.matches.length - 1];
  return (
    o.route.id ||
      en(!1, r + ' can only be used on routes that contain a unique "id"'),
    o.route.id
  );
}
function PL() {
  return dy(Hu.UseRouteId);
}
function zL() {
  var r;
  let i = Z.useContext(cy),
    o = kL(Hu.UseRouteError),
    s = dy(Hu.UseRouteError);
  return i !== void 0 ? i : (r = o.errors) == null ? void 0 : r[s];
}
function UL() {
  let { router: r } = LL(Hw.UseNavigateStable),
    i = dy(Hu.UseNavigateStable),
    o = Z.useRef(!1);
  return (
    Vw(() => {
      o.current = !0;
    }),
    Z.useCallback(
      function (c, f) {
        (f === void 0 && (f = {}),
          wa(o.current, Fw),
          o.current &&
            (typeof c == 'number'
              ? r.navigate(c)
              : r.navigate(c, Vu({ fromRouteId: i }, f))));
      },
      [r, i]
    )
  );
}
const BC = {};
function Iw(r, i, o) {
  !i && !BC[r] && ((BC[r] = !0), wa(!1, o));
}
const jC = {};
function FL(r, i) {
  jC[i] || ((jC[i] = !0), console.warn(i));
}
const Al = (r, i, o) =>
  FL(
    r,
    '⚠️ React Router Future Flag Warning: ' +
      i +
      '. ' +
      ('You can use the `' + r + '` future flag to opt-in early. ') +
      ('For more information, see ' + o + '.')
  );
function VL(r, i) {
  ((r == null ? void 0 : r.v7_startTransition) === void 0 &&
    Al(
      'v7_startTransition',
      'React Router will begin wrapping state updates in `React.startTransition` in v7',
      'https://reactrouter.com/v6/upgrading/future#v7_starttransition'
    ),
    (r == null ? void 0 : r.v7_relativeSplatPath) === void 0 &&
      (!i || i.v7_relativeSplatPath === void 0) &&
      Al(
        'v7_relativeSplatPath',
        'Relative route resolution within Splat routes is changing in v7',
        'https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath'
      ),
    i &&
      (i.v7_fetcherPersist === void 0 &&
        Al(
          'v7_fetcherPersist',
          'The persistence behavior of fetchers is changing in v7',
          'https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist'
        ),
      i.v7_normalizeFormMethod === void 0 &&
        Al(
          'v7_normalizeFormMethod',
          'Casing of `formMethod` fields is being normalized to uppercase in v7',
          'https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod'
        ),
      i.v7_partialHydration === void 0 &&
        Al(
          'v7_partialHydration',
          '`RouterProvider` hydration behavior is changing in v7',
          'https://reactrouter.com/v6/upgrading/future#v7_partialhydration'
        ),
      i.v7_skipActionErrorRevalidation === void 0 &&
        Al(
          'v7_skipActionErrorRevalidation',
          'The revalidation behavior after 4xx/5xx `action` responses is changing in v7',
          'https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation'
        )));
}
function HL(r) {
  return TL(r.context);
}
function Ro(r) {
  en(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
  );
}
function IL(r) {
  let {
    basename: i = '/',
    children: o = null,
    location: s,
    navigationType: c = Vi.Pop,
    navigator: f,
    static: d = !1,
    future: h,
  } = r;
  $u() &&
    en(
      !1,
      'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
    );
  let m = i.replace(/^\/*/, '/'),
    g = Z.useMemo(
      () => ({
        basename: m,
        navigator: f,
        static: d,
        future: Vu({ v7_relativeSplatPath: !1 }, h),
      }),
      [m, h, f, d]
    );
  typeof s == 'string' && (s = zl(s));
  let {
      pathname: E = '/',
      search: S = '',
      hash: T = '',
      state: D = null,
      key: O = 'default',
    } = s,
    x = Z.useMemo(() => {
      let P = Bi(E, m);
      return P == null
        ? null
        : {
            location: { pathname: P, search: S, hash: T, state: D, key: O },
            navigationType: c,
          };
    }, [m, E, S, T, D, O, c]);
  return (
    wa(
      x != null,
      '<Router basename="' +
        m +
        '"> is not able to match the URL ' +
        ('"' + E + S + T + '" because it does not start with the ') +
        "basename, so the <Router> won't render anything."
    ),
    x == null
      ? null
      : Z.createElement(
          na.Provider,
          { value: g },
          Z.createElement(ju.Provider, { children: o, value: x })
        )
  );
}
function BL(r) {
  let { children: i, location: o } = r;
  return xL(Zm(i), o);
}
new Promise(() => {});
function Zm(r, i) {
  i === void 0 && (i = []);
  let o = [];
  return (
    Z.Children.forEach(r, (s, c) => {
      if (!Z.isValidElement(s)) return;
      let f = [...i, c];
      if (s.type === Z.Fragment) {
        o.push.apply(o, Zm(s.props.children, f));
        return;
      }
      (s.type !== Ro &&
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
      (s.props.children && (d.children = Zm(s.props.children, f)), o.push(d));
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
 */ function kl() {
  return (
    (kl = Object.assign
      ? Object.assign.bind()
      : function (r) {
          for (var i = 1; i < arguments.length; i++) {
            var o = arguments[i];
            for (var s in o)
              Object.prototype.hasOwnProperty.call(o, s) && (r[s] = o[s]);
          }
          return r;
        }),
    kl.apply(this, arguments)
  );
}
function py(r, i) {
  if (r == null) return {};
  var o = {},
    s = Object.keys(r),
    c,
    f;
  for (f = 0; f < s.length; f++)
    ((c = s[f]), !(i.indexOf(c) >= 0) && (o[c] = r[c]));
  return o;
}
const vd = 'get',
  hd = 'application/x-www-form-urlencoded';
function Md(r) {
  return r != null && typeof r.tagName == 'string';
}
function jL(r) {
  return Md(r) && r.tagName.toLowerCase() === 'button';
}
function $L(r) {
  return Md(r) && r.tagName.toLowerCase() === 'form';
}
function YL(r) {
  return Md(r) && r.tagName.toLowerCase() === 'input';
}
function GL(r) {
  return !!(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey);
}
function WL(r, i) {
  return r.button === 0 && (!i || i === '_self') && !GL(r);
}
let ld = null;
function qL() {
  if (ld === null)
    try {
      (new FormData(document.createElement('form'), 0), (ld = !1));
    } catch {
      ld = !0;
    }
  return ld;
}
const XL = new Set([
  'application/x-www-form-urlencoded',
  'multipart/form-data',
  'text/plain',
]);
function Vm(r) {
  return r != null && !XL.has(r)
    ? (wa(
        !1,
        '"' +
          r +
          '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' +
          ('and will default to "' + hd + '"')
      ),
      null)
    : r;
}
function QL(r, i) {
  let o, s, c, f, d;
  if ($L(r)) {
    let h = r.getAttribute('action');
    ((s = h ? Bi(h, i) : null),
      (o = r.getAttribute('method') || vd),
      (c = Vm(r.getAttribute('enctype')) || hd),
      (f = new FormData(r)));
  } else if (jL(r) || (YL(r) && (r.type === 'submit' || r.type === 'image'))) {
    let h = r.form;
    if (h == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let m = r.getAttribute('formaction') || h.getAttribute('action');
    if (
      ((s = m ? Bi(m, i) : null),
      (o = r.getAttribute('formmethod') || h.getAttribute('method') || vd),
      (c =
        Vm(r.getAttribute('formenctype')) ||
        Vm(h.getAttribute('enctype')) ||
        hd),
      (f = new FormData(h, r)),
      !qL())
    ) {
      let { name: g, type: E, value: S } = r;
      if (E === 'image') {
        let T = g ? g + '.' : '';
        (f.append(T + 'x', '0'), f.append(T + 'y', '0'));
      } else g && f.append(g, S);
    }
  } else {
    if (Md(r))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    ((o = vd), (s = null), (c = hd), (d = r));
  }
  return (
    f && c === 'text/plain' && ((d = f), (f = void 0)),
    { action: s, method: o.toLowerCase(), encType: c, formData: f, body: d }
  );
}
const KL = [
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
  JL = [
    'aria-current',
    'caseSensitive',
    'className',
    'end',
    'style',
    'to',
    'viewTransition',
    'children',
  ],
  ZL = [
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
  ek = '6';
try {
  window.__reactRouterVersion = ek;
} catch {}
const Bw = Z.createContext({ isTransitioning: !1 });
Bw.displayName = 'ViewTransition';
const tk = Z.createContext(new Map());
tk.displayName = 'Fetchers';
const nk = 'startTransition',
  $C = YM[nk];
function rk(r) {
  let { basename: i, children: o, future: s, window: c } = r,
    f = Z.useRef();
  f.current == null && (f.current = qM({ window: c, v5Compat: !0 }));
  let d = f.current,
    [h, m] = Z.useState({ action: d.action, location: d.location }),
    { v7_startTransition: g } = s || {},
    E = Z.useCallback(
      (S) => {
        g && $C ? $C(() => m(S)) : m(S);
      },
      [m, g]
    );
  return (
    Z.useLayoutEffect(() => d.listen(E), [d, E]),
    Z.useEffect(() => VL(s), [s]),
    Z.createElement(IL, {
      basename: i,
      children: o,
      location: h.location,
      navigationType: h.action,
      navigator: d,
      future: s,
    })
  );
}
const ak =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  ik = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ui = Z.forwardRef(function (i, o) {
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
      T = py(i, KL),
      { basename: D } = Z.useContext(na),
      O,
      x = !1;
    if (typeof g == 'string' && ik.test(g) && ((O = g), ak))
      try {
        let z = new URL(window.location.href),
          U = g.startsWith('//') ? new URL(z.protocol + g) : new URL(g),
          F = Bi(U.pathname, D);
        U.origin === z.origin && F != null
          ? (g = F + U.search + U.hash)
          : (x = !0);
      } catch {
        wa(
          !1,
          '<Link to="' +
            g +
            '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.'
        );
      }
    let P = SL(g, { relative: c }),
      L = uk(g, {
        replace: d,
        state: h,
        target: m,
        preventScrollReset: E,
        relative: c,
        viewTransition: S,
      });
    function _(z) {
      (s && s(z), z.defaultPrevented || L(z));
    }
    return Z.createElement(
      'a',
      kl({}, T, { href: O || P, onClick: x || f ? s : _, ref: o, target: m })
    );
  });
Ui.displayName = 'Link';
const ok = Z.forwardRef(function (i, o) {
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
    S = py(i, JL),
    T = Yu(m, { relative: S.relative }),
    D = Ul(),
    O = Z.useContext(uy),
    { navigator: x, basename: P } = Z.useContext(na),
    L = O != null && hk(T) && g === !0,
    _ = x.encodeLocation ? x.encodeLocation(T).pathname : T.pathname,
    z = D.pathname,
    U =
      O && O.navigation && O.navigation.location
        ? O.navigation.location.pathname
        : null;
  (c ||
    ((z = z.toLowerCase()),
    (U = U ? U.toLowerCase() : null),
    (_ = _.toLowerCase())),
    U && P && (U = Bi(U, P) || U));
  const F = _ !== '/' && _.endsWith('/') ? _.length - 1 : _.length;
  let se = z === _ || (!d && z.startsWith(_) && z.charAt(F) === '/'),
    ie =
      U != null &&
      (U === _ || (!d && U.startsWith(_) && U.charAt(_.length) === '/')),
    de = { isActive: se, isPending: ie, isTransitioning: L },
    re = se ? s : void 0,
    ae;
  typeof f == 'function'
    ? (ae = f(de))
    : (ae = [
        f,
        se ? 'active' : null,
        ie ? 'pending' : null,
        L ? 'transitioning' : null,
      ]
        .filter(Boolean)
        .join(' '));
  let ue = typeof h == 'function' ? h(de) : h;
  return Z.createElement(
    Ui,
    kl({}, S, {
      'aria-current': re,
      className: ae,
      ref: o,
      style: ue,
      to: m,
      viewTransition: g,
    }),
    typeof E == 'function' ? E(de) : E
  );
});
ok.displayName = 'NavLink';
const lk = Z.forwardRef((r, i) => {
  let {
      fetcherKey: o,
      navigate: s,
      reloadDocument: c,
      replace: f,
      state: d,
      method: h = vd,
      action: m,
      onSubmit: g,
      relative: E,
      preventScrollReset: S,
      viewTransition: T,
    } = r,
    D = py(r, ZL),
    O = pk(),
    x = vk(m, { relative: E }),
    P = h.toLowerCase() === 'get' ? 'get' : 'post',
    L = (_) => {
      if ((g && g(_), _.defaultPrevented)) return;
      _.preventDefault();
      let z = _.nativeEvent.submitter,
        U = (z == null ? void 0 : z.getAttribute('formmethod')) || h;
      O(z || _.currentTarget, {
        fetcherKey: o,
        method: U,
        navigate: s,
        replace: f,
        state: d,
        relative: E,
        preventScrollReset: S,
        viewTransition: T,
      });
    };
  return Z.createElement(
    'form',
    kl({ ref: i, method: P, action: x, onSubmit: c ? g : L }, D)
  );
});
lk.displayName = 'Form';
var Ed;
(function (r) {
  ((r.UseScrollRestoration = 'useScrollRestoration'),
    (r.UseSubmit = 'useSubmit'),
    (r.UseSubmitFetcher = 'useSubmitFetcher'),
    (r.UseFetcher = 'useFetcher'),
    (r.useViewTransitionState = 'useViewTransitionState'));
})(Ed || (Ed = {}));
var YC;
(function (r) {
  ((r.UseFetcher = 'useFetcher'),
    (r.UseFetchers = 'useFetchers'),
    (r.UseScrollRestoration = 'useScrollRestoration'));
})(YC || (YC = {}));
function sk(r) {
  return (
    r +
    ' must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router.'
  );
}
function jw(r) {
  let i = Z.useContext(Bu);
  return (i || en(!1, sk(r)), i);
}
function uk(r, i) {
  let {
      target: o,
      replace: s,
      state: c,
      preventScrollReset: f,
      relative: d,
      viewTransition: h,
    } = i === void 0 ? {} : i,
    m = EL(),
    g = Ul(),
    E = Yu(r, { relative: d });
  return Z.useCallback(
    (S) => {
      if (WL(S, o)) {
        S.preventDefault();
        let T = s !== void 0 ? s : Fu(g) === Fu(E);
        m(r, {
          replace: T,
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
function ck() {
  if (typeof document > 'u')
    throw new Error(
      'You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.'
    );
}
let fk = 0,
  dk = () => '__' + String(++fk) + '__';
function pk() {
  let { router: r } = jw(Ed.UseSubmit),
    { basename: i } = Z.useContext(na),
    o = PL();
  return Z.useCallback(
    function (s, c) {
      (c === void 0 && (c = {}), ck());
      let { action: f, method: d, encType: h, formData: m, body: g } = QL(s, i);
      if (c.navigate === !1) {
        let E = c.fetcherKey || dk();
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
function vk(r, i) {
  let { relative: o } = i === void 0 ? {} : i,
    { basename: s } = Z.useContext(na),
    c = Z.useContext(Ta);
  c || en(!1, 'useFormAction must be used inside a RouteContext');
  let [f] = c.matches.slice(-1),
    d = kl({}, Yu(r || '.', { relative: o })),
    h = Ul();
  if (r == null) {
    d.search = h.search;
    let m = new URLSearchParams(d.search),
      g = m.getAll('index');
    if (g.some((S) => S === '')) {
      (m.delete('index'),
        g.filter((T) => T).forEach((T) => m.append('index', T)));
      let S = m.toString();
      d.search = S ? '?' + S : '';
    }
  }
  return (
    (!r || r === '.') &&
      f.route.index &&
      (d.search = d.search ? d.search.replace(/^\?/, '?index&') : '?index'),
    s !== '/' && (d.pathname = d.pathname === '/' ? s : ti([s, d.pathname])),
    Fu(d)
  );
}
function hk(r, i) {
  i === void 0 && (i = {});
  let o = Z.useContext(Bw);
  o == null &&
    en(
      !1,
      "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
    );
  let { basename: s } = jw(Ed.useViewTransitionState),
    c = Yu(r, { relative: i.relative });
  if (!o.isTransitioning) return !1;
  let f = Bi(o.currentLocation.pathname, s) || o.currentLocation.pathname,
    d = Bi(o.nextLocation.pathname, s) || o.nextLocation.pathname;
  return Sd(c.pathname, d) != null || Sd(c.pathname, f) != null;
}
var $w = { exports: {} },
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
      var P = x.$$typeof;
      switch (P) {
        case i:
          switch (((x = x.type), x)) {
            case s:
            case f:
            case c:
            case g:
            case E:
            case D:
              return x;
            default:
              switch (((x = x && x.$$typeof), x)) {
                case h:
                case m:
                case T:
                case S:
                  return x;
                case d:
                  return x;
                default:
                  return P;
              }
          }
        case o:
          return P;
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
    T = Symbol.for('react.lazy'),
    D = Symbol.for('react.view_transition'),
    O = Symbol.for('react.client.reference');
  ((It.ContextConsumer = d),
    (It.ContextProvider = h),
    (It.Element = i),
    (It.ForwardRef = m),
    (It.Fragment = s),
    (It.Lazy = T),
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
      return r(x) === T;
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
          (x.$$typeof === T ||
            x.$$typeof === S ||
            x.$$typeof === h ||
            x.$$typeof === d ||
            x.$$typeof === m ||
            x.$$typeof === O ||
            x.getModuleId !== void 0))
      );
    }),
    (It.typeOf = r));
})();
$w.exports = It;
var vy = $w.exports;
function mk(r) {
  function i(Ce, Ee, Te, Ve, $) {
    for (
      var Ke = 0,
        ye = 0,
        at = 0,
        qe = 0,
        Je,
        oe,
        it = 0,
        dt = 0,
        He,
        vt = (He = Je = 0),
        Ye = 0,
        Ot = 0,
        ln = 0,
        R = 0,
        V = Te.length,
        W = V - 1,
        me,
        X = '',
        ee = '',
        De = '',
        Be = '',
        Ze;
      Ye < V;

    ) {
      if (
        ((oe = Te.charCodeAt(Ye)),
        Ye === W &&
          ye + qe + at + Ke !== 0 &&
          (ye !== 0 && (oe = ye === 47 ? 10 : 47),
          (qe = at = Ke = 0),
          V++,
          W++),
        ye + qe + at + Ke === 0)
      ) {
        if (
          Ye === W &&
          (0 < Ot && (X = X.replace(T, '')), 0 < X.trim().length)
        ) {
          switch (oe) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              X += Te.charAt(Ye);
          }
          oe = 59;
        }
        switch (oe) {
          case 123:
            for (
              X = X.trim(), Je = X.charCodeAt(0), He = 1, R = ++Ye;
              Ye < V;

            ) {
              switch ((oe = Te.charCodeAt(Ye))) {
                case 123:
                  He++;
                  break;
                case 125:
                  He--;
                  break;
                case 47:
                  switch ((oe = Te.charCodeAt(Ye + 1))) {
                    case 42:
                    case 47:
                      e: {
                        for (vt = Ye + 1; vt < W; ++vt)
                          switch (Te.charCodeAt(vt)) {
                            case 47:
                              if (
                                oe === 42 &&
                                Te.charCodeAt(vt - 1) === 42 &&
                                Ye + 2 !== vt
                              ) {
                                Ye = vt + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (oe === 47) {
                                Ye = vt + 1;
                                break e;
                              }
                          }
                        Ye = vt;
                      }
                  }
                  break;
                case 91:
                  oe++;
                case 40:
                  oe++;
                case 34:
                case 39:
                  for (; Ye++ < W && Te.charCodeAt(Ye) !== oe; );
              }
              if (He === 0) break;
              Ye++;
            }
            switch (
              ((He = Te.substring(R, Ye)),
              Je === 0 && (Je = (X = X.replace(S, '').trim()).charCodeAt(0)),
              Je)
            ) {
              case 64:
                switch (
                  (0 < Ot && (X = X.replace(T, '')), (oe = X.charCodeAt(1)), oe)
                ) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    Ot = Ee;
                    break;
                  default:
                    Ot = le;
                }
                if (
                  ((He = i(Ee, Ot, He, oe, $ + 1)),
                  (R = He.length),
                  0 < Ne &&
                    ((Ot = o(le, X, ln)),
                    (Ze = h(3, He, Ot, Ee, q, B, R, oe, $, Ve)),
                    (X = Ot.join('')),
                    Ze !== void 0 &&
                      (R = (He = Ze.trim()).length) === 0 &&
                      ((oe = 0), (He = ''))),
                  0 < R)
                )
                  switch (oe) {
                    case 115:
                      X = X.replace(se, d);
                    case 100:
                    case 109:
                    case 45:
                      He = X + '{' + He + '}';
                      break;
                    case 107:
                      ((X = X.replace(_, '$1 $2')),
                        (He = X + '{' + He + '}'),
                        (He =
                          pe === 1 || (pe === 2 && f('@' + He, 3))
                            ? '@-webkit-' + He + '@' + He
                            : '@' + He));
                      break;
                    default:
                      ((He = X + He), Ve === 112 && (He = ((ee += He), '')));
                  }
                else He = '';
                break;
              default:
                He = i(Ee, o(Ee, X, ln), He, Ve, $ + 1);
            }
            ((De += He),
              (He = ln = Ot = vt = Je = 0),
              (X = ''),
              (oe = Te.charCodeAt(++Ye)));
            break;
          case 125:
          case 59:
            if (
              ((X = (0 < Ot ? X.replace(T, '') : X).trim()), 1 < (R = X.length))
            )
              switch (
                (vt === 0 &&
                  ((Je = X.charCodeAt(0)),
                  Je === 45 || (96 < Je && 123 > Je)) &&
                  (R = (X = X.replace(' ', ':')).length),
                0 < Ne &&
                  (Ze = h(1, X, Ee, Ce, q, B, ee.length, Ve, $, Ve)) !==
                    void 0 &&
                  (R = (X = Ze.trim()).length) === 0 &&
                  (X = '\0\0'),
                (Je = X.charCodeAt(0)),
                (oe = X.charCodeAt(1)),
                Je)
              ) {
                case 0:
                  break;
                case 64:
                  if (oe === 105 || oe === 99) {
                    Be += X + Te.charAt(Ye);
                    break;
                  }
                default:
                  X.charCodeAt(R - 1) !== 58 &&
                    (ee += c(X, Je, oe, X.charCodeAt(2)));
              }
            ((ln = Ot = vt = Je = 0), (X = ''), (oe = Te.charCodeAt(++Ye)));
        }
      }
      switch (oe) {
        case 13:
        case 10:
          (ye === 47
            ? (ye = 0)
            : 1 + Je === 0 &&
              Ve !== 107 &&
              0 < X.length &&
              ((Ot = 1), (X += '\0')),
            0 < Ne * ft && h(0, X, Ee, Ce, q, B, ee.length, Ve, $, Ve),
            (B = 1),
            q++);
          break;
        case 59:
        case 125:
          if (ye + qe + at + Ke === 0) {
            B++;
            break;
          }
        default:
          switch ((B++, (me = Te.charAt(Ye)), oe)) {
            case 9:
            case 32:
              if (qe + Ke + ye === 0)
                switch (it) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    me = '';
                    break;
                  default:
                    oe !== 32 && (me = ' ');
                }
              break;
            case 0:
              me = '\\0';
              break;
            case 12:
              me = '\\f';
              break;
            case 11:
              me = '\\v';
              break;
            case 38:
              qe + ye + Ke === 0 && ((Ot = ln = 1), (me = '\f' + me));
              break;
            case 108:
              if (qe + ye + Ke + ne === 0 && 0 < vt)
                switch (Ye - vt) {
                  case 2:
                    it === 112 && Te.charCodeAt(Ye - 3) === 58 && (ne = it);
                  case 8:
                    dt === 111 && (ne = dt);
                }
              break;
            case 58:
              qe + ye + Ke === 0 && (vt = Ye);
              break;
            case 44:
              ye + at + qe + Ke === 0 && ((Ot = 1), (me += '\r'));
              break;
            case 34:
            case 39:
              ye === 0 && (qe = qe === oe ? 0 : qe === 0 ? oe : qe);
              break;
            case 91:
              qe + ye + at === 0 && Ke++;
              break;
            case 93:
              qe + ye + at === 0 && Ke--;
              break;
            case 41:
              qe + ye + Ke === 0 && at--;
              break;
            case 40:
              if (qe + ye + Ke === 0) {
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
              ye + at + qe + Ke + vt + He === 0 && (He = 1);
              break;
            case 42:
            case 47:
              if (!(0 < qe + Ke + at))
                switch (ye) {
                  case 0:
                    switch (2 * oe + 3 * Te.charCodeAt(Ye + 1)) {
                      case 235:
                        ye = 47;
                        break;
                      case 220:
                        ((R = Ye), (ye = 42));
                    }
                    break;
                  case 42:
                    oe === 47 &&
                      it === 42 &&
                      R + 2 !== Ye &&
                      (Te.charCodeAt(R + 2) === 33 &&
                        (ee += Te.substring(R, Ye + 1)),
                      (me = ''),
                      (ye = 0));
                }
          }
          ye === 0 && (X += me);
      }
      ((dt = it), (it = oe), Ye++);
    }
    if (((R = ee.length), 0 < R)) {
      if (
        ((Ot = Ee),
        0 < Ne &&
          ((Ze = h(2, ee, Ot, Ce, q, B, R, Ve, $, Ve)),
          Ze !== void 0 && (ee = Ze).length === 0))
      )
        return Be + ee + De;
      if (((ee = Ot.join(',') + '{' + ee + '}'), pe * ne !== 0)) {
        switch ((pe !== 2 || f(ee, 2) || (ne = 0), ne)) {
          case 111:
            ee = ee.replace(U, ':-moz-$1') + ee;
            break;
          case 112:
            ee =
              ee.replace(z, '::-webkit-input-$1') +
              ee.replace(z, '::-moz-$1') +
              ee.replace(z, ':-ms-input-$1') +
              ee;
        }
        ne = 0;
      }
    }
    return Be + ee + De;
  }
  function o(Ce, Ee, Te) {
    var Ve = Ee.trim().split(P);
    Ee = Ve;
    var $ = Ve.length,
      Ke = Ce.length;
    switch (Ke) {
      case 0:
      case 1:
        var ye = 0;
        for (Ce = Ke === 0 ? '' : Ce[0] + ' '; ye < $; ++ye)
          Ee[ye] = s(Ce, Ee[ye], Te).trim();
        break;
      default:
        var at = (ye = 0);
        for (Ee = []; ye < $; ++ye)
          for (var qe = 0; qe < Ke; ++qe)
            Ee[at++] = s(Ce[qe] + ' ', Ve[ye], Te).trim();
    }
    return Ee;
  }
  function s(Ce, Ee, Te) {
    var Ve = Ee.charCodeAt(0);
    switch ((33 > Ve && (Ve = (Ee = Ee.trim()).charCodeAt(0)), Ve)) {
      case 38:
        return Ee.replace(L, '$1' + Ce.trim());
      case 58:
        return Ce.trim() + Ee.replace(L, '$1' + Ce.trim());
      default:
        if (0 < 1 * Te && 0 < Ee.indexOf('\f'))
          return Ee.replace(
            L,
            (Ce.charCodeAt(0) === 58 ? '' : '$1') + Ce.trim()
          );
    }
    return Ce + Ee;
  }
  function c(Ce, Ee, Te, Ve) {
    var $ = Ce + ';',
      Ke = 2 * Ee + 3 * Te + 4 * Ve;
    if (Ke === 944) {
      Ce = $.indexOf(':', 9) + 1;
      var ye = $.substring(Ce, $.length - 1).trim();
      return (
        (ye = $.substring(0, Ce).trim() + ye + ';'),
        pe === 1 || (pe === 2 && f(ye, 1)) ? '-webkit-' + ye + ye : ye
      );
    }
    if (pe === 0 || (pe === 2 && !f($, 1))) return $;
    switch (Ke) {
      case 1015:
        return $.charCodeAt(10) === 97 ? '-webkit-' + $ + $ : $;
      case 951:
        return $.charCodeAt(3) === 116 ? '-webkit-' + $ + $ : $;
      case 963:
        return $.charCodeAt(5) === 110 ? '-webkit-' + $ + $ : $;
      case 1009:
        if ($.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return '-webkit-' + $ + $;
      case 978:
        return '-webkit-' + $ + '-moz-' + $ + $;
      case 1019:
      case 983:
        return '-webkit-' + $ + '-moz-' + $ + '-ms-' + $ + $;
      case 883:
        if ($.charCodeAt(8) === 45) return '-webkit-' + $ + $;
        if (0 < $.indexOf('image-set(', 11))
          return $.replace(ue, '$1-webkit-$2') + $;
        break;
      case 932:
        if ($.charCodeAt(4) === 45)
          switch ($.charCodeAt(5)) {
            case 103:
              return (
                '-webkit-box-' +
                $.replace('-grow', '') +
                '-webkit-' +
                $ +
                '-ms-' +
                $.replace('grow', 'positive') +
                $
              );
            case 115:
              return (
                '-webkit-' + $ + '-ms-' + $.replace('shrink', 'negative') + $
              );
            case 98:
              return (
                '-webkit-' +
                $ +
                '-ms-' +
                $.replace('basis', 'preferred-size') +
                $
              );
          }
        return '-webkit-' + $ + '-ms-' + $ + $;
      case 964:
        return '-webkit-' + $ + '-ms-flex-' + $ + $;
      case 1023:
        if ($.charCodeAt(8) !== 99) break;
        return (
          (ye = $.substring($.indexOf(':', 15))
            .replace('flex-', '')
            .replace('space-between', 'justify')),
          '-webkit-box-pack' + ye + '-webkit-' + $ + '-ms-flex-pack' + ye + $
        );
      case 1005:
        return O.test($)
          ? $.replace(D, ':-webkit-') + $.replace(D, ':-moz-') + $
          : $;
      case 1e3:
        switch (
          ((ye = $.substring(13).trim()),
          (Ee = ye.indexOf('-') + 1),
          ye.charCodeAt(0) + ye.charCodeAt(Ee))
        ) {
          case 226:
            ye = $.replace(F, 'tb');
            break;
          case 232:
            ye = $.replace(F, 'tb-rl');
            break;
          case 220:
            ye = $.replace(F, 'lr');
            break;
          default:
            return $;
        }
        return '-webkit-' + $ + '-ms-' + ye + $;
      case 1017:
        if ($.indexOf('sticky', 9) === -1) break;
      case 975:
        switch (
          ((Ee = ($ = Ce).length - 10),
          (ye = ($.charCodeAt(Ee) === 33 ? $.substring(0, Ee) : $)
            .substring(Ce.indexOf(':', 7) + 1)
            .trim()),
          (Ke = ye.charCodeAt(0) + (ye.charCodeAt(7) | 0)))
        ) {
          case 203:
            if (111 > ye.charCodeAt(8)) break;
          case 115:
            $ = $.replace(ye, '-webkit-' + ye) + ';' + $;
            break;
          case 207:
          case 102:
            $ =
              $.replace(ye, '-webkit-' + (102 < Ke ? 'inline-' : '') + 'box') +
              ';' +
              $.replace(ye, '-webkit-' + ye) +
              ';' +
              $.replace(ye, '-ms-' + ye + 'box') +
              ';' +
              $;
        }
        return $ + ';';
      case 938:
        if ($.charCodeAt(5) === 45)
          switch ($.charCodeAt(6)) {
            case 105:
              return (
                (ye = $.replace('-items', '')),
                '-webkit-' + $ + '-webkit-box-' + ye + '-ms-flex-' + ye + $
              );
            case 115:
              return '-webkit-' + $ + '-ms-flex-item-' + $.replace(de, '') + $;
            default:
              return (
                '-webkit-' +
                $ +
                '-ms-flex-line-pack' +
                $.replace('align-content', '').replace(de, '') +
                $
              );
          }
        break;
      case 973:
      case 989:
        if ($.charCodeAt(3) !== 45 || $.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (ae.test(Ce) === !0)
          return (ye = Ce.substring(Ce.indexOf(':') + 1)).charCodeAt(0) === 115
            ? c(Ce.replace('stretch', 'fill-available'), Ee, Te, Ve).replace(
                ':fill-available',
                ':stretch'
              )
            : $.replace(ye, '-webkit-' + ye) +
                $.replace(ye, '-moz-' + ye.replace('fill-', '')) +
                $;
        break;
      case 962:
        if (
          (($ =
            '-webkit-' + $ + ($.charCodeAt(5) === 102 ? '-ms-' + $ : '') + $),
          Te + Ve === 211 &&
            $.charCodeAt(13) === 105 &&
            0 < $.indexOf('transform', 10))
        )
          return (
            $.substring(0, $.indexOf(';', 27) + 1).replace(x, '$1-webkit-$2') +
            $
          );
    }
    return $;
  }
  function f(Ce, Ee) {
    var Te = Ce.indexOf(Ee === 1 ? ':' : '{'),
      Ve = Ce.substring(0, Ee !== 3 ? Te : 10);
    return (
      (Te = Ce.substring(Te + 1, Ce.length - 1)),
      Le(Ee !== 2 ? Ve : Ve.replace(re, '$1'), Te, Ee)
    );
  }
  function d(Ce, Ee) {
    var Te = c(Ee, Ee.charCodeAt(0), Ee.charCodeAt(1), Ee.charCodeAt(2));
    return Te !== Ee + ';'
      ? Te.replace(ie, ' or ($1)').substring(4)
      : '(' + Ee + ')';
  }
  function h(Ce, Ee, Te, Ve, $, Ke, ye, at, qe, Je) {
    for (var oe = 0, it = Ee, dt; oe < Ne; ++oe)
      switch ((dt = ve[oe].call(E, Ce, it, Te, Ve, $, Ke, ye, at, qe, Je))) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          it = dt;
      }
    if (it !== Ee) return it;
  }
  function m(Ce) {
    switch (Ce) {
      case void 0:
      case null:
        Ne = ve.length = 0;
        break;
      default:
        if (typeof Ce == 'function') ve[Ne++] = Ce;
        else if (typeof Ce == 'object')
          for (var Ee = 0, Te = Ce.length; Ee < Te; ++Ee) m(Ce[Ee]);
        else ft = !!Ce | 0;
    }
    return m;
  }
  function g(Ce) {
    return (
      (Ce = Ce.prefix),
      Ce !== void 0 &&
        ((Le = null),
        Ce
          ? typeof Ce != 'function'
            ? (pe = 1)
            : ((pe = 2), (Le = Ce))
          : (pe = 0)),
      g
    );
  }
  function E(Ce, Ee) {
    var Te = Ce;
    if (
      (33 > Te.charCodeAt(0) && (Te = Te.trim()),
      (qt = Te),
      (Te = [qt]),
      0 < Ne)
    ) {
      var Ve = h(-1, Ee, Te, Te, q, B, 0, 0, 0, 0);
      Ve !== void 0 && typeof Ve == 'string' && (Ee = Ve);
    }
    var $ = i(le, Te, Ee, 0, 0);
    return (
      0 < Ne &&
        ((Ve = h(-2, $, Te, Te, q, B, $.length, 0, 0, 0)),
        Ve !== void 0 && ($ = Ve)),
      (qt = ''),
      (ne = 0),
      (B = q = 1),
      $
    );
  }
  var S = /^\0+/g,
    T = /[\0\r\f]/g,
    D = /: */g,
    O = /zoo|gra/,
    x = /([,: ])(transform)/g,
    P = /,\r+?/g,
    L = /([\t\r\n ])*\f?&/g,
    _ = /@(k\w+)\s*(\S*)\s*/,
    z = /::(place)/g,
    U = /:(read-only)/g,
    F = /[svh]\w+-[tblr]{2}/,
    se = /\(\s*(.*)\s*\)/g,
    ie = /([\s\S]*?);/g,
    de = /-self|flex-/g,
    re = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
    ae = /stretch|:\s*\w+\-(?:conte|avail)/,
    ue = /([^-])(image-set\()/,
    B = 1,
    q = 1,
    ne = 0,
    pe = 1,
    le = [],
    ve = [],
    Ne = 0,
    Le = null,
    ft = 0,
    qt = '';
  return ((E.use = m), (E.set = g), r !== void 0 && g(r), E);
}
var yk = {
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
function gk(r) {
  var i = Object.create(null);
  return function (o) {
    return (i[o] === void 0 && (i[o] = r(o)), i[o]);
  };
}
var bk =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  GC = gk(function (r) {
    return (
      bk.test(r) ||
      (r.charCodeAt(0) === 111 &&
        r.charCodeAt(1) === 110 &&
        r.charCodeAt(2) < 91)
    );
  }),
  Yw = { exports: {} },
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
    T = r ? Symbol.for('react.suspense_list') : 60120,
    D = r ? Symbol.for('react.memo') : 60115,
    O = r ? Symbol.for('react.lazy') : 60116,
    x = r ? Symbol.for('react.block') : 60121,
    P = r ? Symbol.for('react.fundamental') : 60117,
    L = r ? Symbol.for('react.responder') : 60118,
    _ = r ? Symbol.for('react.scope') : 60119;
  function z(oe) {
    return (
      typeof oe == 'string' ||
      typeof oe == 'function' ||
      oe === s ||
      oe === g ||
      oe === f ||
      oe === c ||
      oe === S ||
      oe === T ||
      (typeof oe == 'object' &&
        oe !== null &&
        (oe.$$typeof === O ||
          oe.$$typeof === D ||
          oe.$$typeof === d ||
          oe.$$typeof === h ||
          oe.$$typeof === E ||
          oe.$$typeof === P ||
          oe.$$typeof === L ||
          oe.$$typeof === _ ||
          oe.$$typeof === x))
    );
  }
  function U(oe) {
    if (typeof oe == 'object' && oe !== null) {
      var it = oe.$$typeof;
      switch (it) {
        case i:
          var dt = oe.type;
          switch (dt) {
            case m:
            case g:
            case s:
            case f:
            case c:
            case S:
              return dt;
            default:
              var He = dt && dt.$$typeof;
              switch (He) {
                case h:
                case E:
                case O:
                case D:
                case d:
                  return He;
                default:
                  return it;
              }
          }
        case o:
          return it;
      }
    }
  }
  var F = m,
    se = g,
    ie = h,
    de = d,
    re = i,
    ae = E,
    ue = s,
    B = O,
    q = D,
    ne = o,
    pe = f,
    le = c,
    ve = S,
    Ne = !1;
  function Le(oe) {
    return (
      Ne ||
        ((Ne = !0),
        console.warn(
          'The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.'
        )),
      ft(oe) || U(oe) === m
    );
  }
  function ft(oe) {
    return U(oe) === g;
  }
  function qt(oe) {
    return U(oe) === h;
  }
  function Ce(oe) {
    return U(oe) === d;
  }
  function Ee(oe) {
    return typeof oe == 'object' && oe !== null && oe.$$typeof === i;
  }
  function Te(oe) {
    return U(oe) === E;
  }
  function Ve(oe) {
    return U(oe) === s;
  }
  function $(oe) {
    return U(oe) === O;
  }
  function Ke(oe) {
    return U(oe) === D;
  }
  function ye(oe) {
    return U(oe) === o;
  }
  function at(oe) {
    return U(oe) === f;
  }
  function qe(oe) {
    return U(oe) === c;
  }
  function Je(oe) {
    return U(oe) === S;
  }
  ((zt.AsyncMode = F),
    (zt.ConcurrentMode = se),
    (zt.ContextConsumer = ie),
    (zt.ContextProvider = de),
    (zt.Element = re),
    (zt.ForwardRef = ae),
    (zt.Fragment = ue),
    (zt.Lazy = B),
    (zt.Memo = q),
    (zt.Portal = ne),
    (zt.Profiler = pe),
    (zt.StrictMode = le),
    (zt.Suspense = ve),
    (zt.isAsyncMode = Le),
    (zt.isConcurrentMode = ft),
    (zt.isContextConsumer = qt),
    (zt.isContextProvider = Ce),
    (zt.isElement = Ee),
    (zt.isForwardRef = Te),
    (zt.isFragment = Ve),
    (zt.isLazy = $),
    (zt.isMemo = Ke),
    (zt.isPortal = ye),
    (zt.isProfiler = at),
    (zt.isStrictMode = qe),
    (zt.isSuspense = Je),
    (zt.isValidElementType = z),
    (zt.typeOf = U));
})();
Yw.exports = zt;
var Sk = Yw.exports,
  hy = Sk,
  Ek = {
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
  Ck = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  wk = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  Gw = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  my = {};
my[hy.ForwardRef] = wk;
my[hy.Memo] = Gw;
function WC(r) {
  return hy.isMemo(r) ? Gw : my[r.$$typeof] || Ek;
}
var Tk = Object.defineProperty,
  xk = Object.getOwnPropertyNames,
  qC = Object.getOwnPropertySymbols,
  Rk = Object.getOwnPropertyDescriptor,
  _k = Object.getPrototypeOf,
  XC = Object.prototype;
function Ww(r, i, o) {
  if (typeof i != 'string') {
    if (XC) {
      var s = _k(i);
      s && s !== XC && Ww(r, s, o);
    }
    var c = xk(i);
    qC && (c = c.concat(qC(i)));
    for (var f = WC(r), d = WC(i), h = 0; h < c.length; ++h) {
      var m = c[h];
      if (!Ck[m] && !(o && o[m]) && !(d && d[m]) && !(f && f[m])) {
        var g = Rk(i, m);
        try {
          Tk(r, m, g);
        } catch {}
      }
    }
  }
  return r;
}
var Dk = Ww;
const Ok = xw(Dk);
function ei() {
  return (ei =
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
var QC = function (r, i) {
    for (var o = [r[0]], s = 0, c = i.length; s < c; s += 1)
      o.push(i[s], r[s + 1]);
    return o;
  },
  ey = function (r) {
    return (
      r !== null &&
      typeof r == 'object' &&
      (r.toString ? r.toString() : Object.prototype.toString.call(r)) ===
        '[object Object]' &&
      !vy.typeOf(r)
    );
  },
  Cd = Object.freeze([]),
  Ii = Object.freeze({});
function wd(r) {
  return typeof r == 'function';
}
function ty(r) {
  return (typeof r == 'string' && r) || r.displayName || r.name || 'Component';
}
function qw(r) {
  return r && typeof r.styledComponentId == 'string';
}
var Nl =
    (typeof process < 'u' &&
      process.env !== void 0 &&
      ({}.REACT_APP_SC_ATTR || {}.SC_ATTR)) ||
    'data-styled',
  yy = typeof window < 'u' && 'HTMLElement' in window,
  Ak = !!(typeof SC_DISABLE_SPEEDY == 'boolean'
    ? SC_DISABLE_SPEEDY
    : typeof process < 'u' &&
      process.env !== void 0 &&
      ({}.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      {}.REACT_APP_SC_DISABLE_SPEEDY !== ''
        ? {}.REACT_APP_SC_DISABLE_SPEEDY !== 'false' &&
          {}.REACT_APP_SC_DISABLE_SPEEDY
        : !({}.SC_DISABLE_SPEEDY !== void 0 && {}.SC_DISABLE_SPEEDY !== '') ||
          ({}.SC_DISABLE_SPEEDY !== 'false' && {}.SC_DISABLE_SPEEDY))),
  Mk = {
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
function Lk() {
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
function Fl(r) {
  for (
    var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), s = 1;
    s < i;
    s++
  )
    o[s - 1] = arguments[s];
  throw new Error(Lk.apply(void 0, [Mk[r]].concat(o)).trim());
}
var kk = (function () {
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
            (d <<= 1) < 0 && Fl(16, '' + o);
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
  md = new Map(),
  Td = new Map(),
  ku = 1,
  sd = function (r) {
    if (md.has(r)) return md.get(r);
    for (; Td.has(ku); ) ku++;
    var i = ku++;
    return (
      ((0 | i) < 0 || i > 1 << 30) && Fl(16, '' + i),
      md.set(r, i),
      Td.set(i, r),
      i
    );
  },
  Nk = function (r) {
    return Td.get(r);
  },
  Pk = function (r, i) {
    (i >= ku && (ku = i + 1), md.set(r, i), Td.set(i, r));
  },
  zk = 'style[' + Nl + '][data-styled-version="5.3.11"]',
  Uk = new RegExp('^' + Nl + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  Fk = function (r, i, o) {
    for (var s, c = o.split(','), f = 0, d = c.length; f < d; f++)
      (s = c[f]) && r.registerName(i, s);
  },
  Vk = function (r, i) {
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
        var h = d.match(Uk);
        if (h) {
          var m = 0 | parseInt(h[1], 10),
            g = h[2];
          (m !== 0 && (Pk(g, m), Fk(r, g, h[3]), r.getTag().insertRules(m, s)),
            (s.length = 0));
        } else s.push(d);
      }
    }
  },
  Hk = function () {
    return typeof __webpack_nonce__ < 'u' ? __webpack_nonce__ : null;
  },
  Xw = function (r) {
    var i = document.head,
      o = r || i,
      s = document.createElement('style'),
      c = (function (h) {
        for (var m = h.childNodes, g = m.length; g >= 0; g--) {
          var E = m[g];
          if (E && E.nodeType === 1 && E.hasAttribute(Nl)) return E;
        }
      })(o),
      f = c !== void 0 ? c.nextSibling : null;
    (s.setAttribute(Nl, 'active'),
      s.setAttribute('data-styled-version', '5.3.11'));
    var d = Hk();
    return (d && s.setAttribute('nonce', d), o.insertBefore(s, f), s);
  },
  Ik = (function () {
    function r(o) {
      var s = (this.element = Xw(o));
      (s.appendChild(document.createTextNode('')),
        (this.sheet = (function (c) {
          if (c.sheet) return c.sheet;
          for (var f = document.styleSheets, d = 0, h = f.length; d < h; d++) {
            var m = f[d];
            if (m.ownerNode === c) return m;
          }
          Fl(17);
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
  Bk = (function () {
    function r(o) {
      var s = (this.element = Xw(o));
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
  jk = (function () {
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
  KC = yy,
  $k = { isServer: !yy, useCSSOMInjection: !Ak },
  Qw = (function () {
    function r(o, s, c) {
      (o === void 0 && (o = Ii),
        s === void 0 && (s = {}),
        (this.options = ei({}, $k, {}, o)),
        (this.gs = s),
        (this.names = new Map(c)),
        (this.server = !!o.isServer),
        !this.server &&
          yy &&
          KC &&
          ((KC = !1),
          (function (f) {
            for (
              var d = document.querySelectorAll(zk), h = 0, m = d.length;
              h < m;
              h++
            ) {
              var g = d[h];
              g &&
                g.getAttribute(Nl) !== 'active' &&
                (Vk(f, g), g.parentNode && g.parentNode.removeChild(g));
            }
          })(this)));
    }
    r.registerId = function (o) {
      return sd(o);
    };
    var i = r.prototype;
    return (
      (i.reconstructWithOptions = function (o, s) {
        return (
          s === void 0 && (s = !0),
          new r(
            ei({}, this.options, {}, o),
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
            (o = c ? new jk(d) : f ? new Ik(d) : new Bk(d)),
            new kk(o)))
        );
        var o, s, c, f, d;
      }),
      (i.hasNameForId = function (o, s) {
        return this.names.has(o) && this.names.get(o).has(s);
      }),
      (i.registerName = function (o, s) {
        if ((sd(o), this.names.has(o))) this.names.get(o).add(s);
        else {
          var c = new Set();
          (c.add(s), this.names.set(o, c));
        }
      }),
      (i.insertRules = function (o, s, c) {
        (this.registerName(o, s), this.getTag().insertRules(sd(o), c));
      }),
      (i.clearNames = function (o) {
        this.names.has(o) && this.names.get(o).clear();
      }),
      (i.clearRules = function (o) {
        (this.getTag().clearGroup(sd(o)), this.clearNames(o));
      }),
      (i.clearTag = function () {
        this.tag = void 0;
      }),
      (i.toString = function () {
        return (function (o) {
          for (var s = o.getTag(), c = s.length, f = '', d = 0; d < c; d++) {
            var h = Nk(d);
            if (h !== void 0) {
              var m = o.names.get(h),
                g = s.getGroup(d);
              if (m && g && m.size) {
                var E = Nl + '.g' + d + '[id="' + h + '"]',
                  S = '';
                (m !== void 0 &&
                  m.forEach(function (T) {
                    T.length > 0 && (S += T + ',');
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
  Yk = /(a)(d)/gi,
  JC = function (r) {
    return String.fromCharCode(r + (r > 25 ? 39 : 97));
  };
function ny(r) {
  var i,
    o = '';
  for (i = Math.abs(r); i > 52; i = (i / 52) | 0) o = JC(i % 52) + o;
  return (JC(i % 52) + o).replace(Yk, '$1-$2');
}
var _o = function (r, i) {
    for (var o = i.length; o; ) r = (33 * r) ^ i.charCodeAt(--o);
    return r;
  },
  Kw = function (r) {
    return _o(5381, r);
  },
  Gk = Kw('5.3.11'),
  Wk = (function () {
    function r(i, o, s) {
      ((this.rules = i),
        (this.staticRulesId = ''),
        (this.isStatic = !1),
        (this.componentId = o),
        (this.baseHash = _o(Gk, o)),
        (this.baseStyle = s),
        Qw.registerId(o));
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
            var d = Pl(this.rules, i, o, s).join(''),
              h = ny(_o(this.baseHash, d) >>> 0);
            if (!o.hasNameForId(c, h)) {
              var m = s(d, '.' + h, void 0, c);
              o.insertRules(c, h, m);
            }
            (f.push(h), (this.staticRulesId = h));
          }
        else {
          for (
            var g = this.rules.length,
              E = _o(this.baseHash, s.hash),
              S = '',
              T = 0;
            T < g;
            T++
          ) {
            var D = this.rules[T];
            if (typeof D == 'string') ((S += D), (E = _o(E, D + T)));
            else if (D) {
              var O = Pl(D, i, o, s),
                x = Array.isArray(O) ? O.join('') : O;
              ((E = _o(E, x + T)), (S += x));
            }
          }
          if (S) {
            var P = ny(E >>> 0);
            if (!o.hasNameForId(c, P)) {
              var L = s(S, '.' + P, void 0, c);
              o.insertRules(c, P, L);
            }
            f.push(P);
          }
        }
        return f.join(' ');
      }),
      r
    );
  })(),
  qk = /^\s*\/\/.*$/gm,
  Xk = [':', '[', '.', '#'];
function Qk(r) {
  var i,
    o,
    s,
    c,
    f = r === void 0 ? Ii : r,
    d = f.options,
    h = d === void 0 ? Ii : d,
    m = f.plugins,
    g = m === void 0 ? Cd : m,
    E = new mk(h),
    S = [],
    T = (function (x) {
      function P(L) {
        if (L)
          try {
            x(L + '}');
          } catch {}
      }
      return function (L, _, z, U, F, se, ie, de, re, ae) {
        switch (L) {
          case 1:
            if (re === 0 && _.charCodeAt(0) === 64) return (x(_ + ';'), '');
            break;
          case 2:
            if (de === 0) return _ + '/*|*/';
            break;
          case 3:
            switch (de) {
              case 102:
              case 112:
                return (x(z[0] + _), '');
              default:
                return _ + (ae === 0 ? '/*|*/' : '');
            }
          case -2:
            _.split('/*|*/}').forEach(P);
        }
      };
    })(function (x) {
      S.push(x);
    }),
    D = function (x, P, L) {
      return (P === 0 && Xk.indexOf(L[o.length]) !== -1) || L.match(c)
        ? x
        : '.' + i;
    };
  function O(x, P, L, _) {
    _ === void 0 && (_ = '&');
    var z = x.replace(qk, ''),
      U = P && L ? L + ' ' + P + ' { ' + z + ' }' : z;
    return (
      (i = _),
      (o = P),
      (s = new RegExp('\\' + o + '\\b', 'g')),
      (c = new RegExp('(\\' + o + '\\b){2,}')),
      E(L || !P ? '' : P, U)
    );
  }
  return (
    E.use(
      [].concat(g, [
        function (x, P, L) {
          x === 2 &&
            L.length &&
            L[0].lastIndexOf(o) > 0 &&
            (L[0] = L[0].replace(s, D));
        },
        T,
        function (x) {
          if (x === -2) {
            var P = S;
            return ((S = []), P);
          }
        },
      ])
    ),
    (O.hash = g.length
      ? g
          .reduce(function (x, P) {
            return (P.name || Fl(15), _o(x, P.name));
          }, 5381)
          .toString()
      : ''),
    O
  );
}
var Jw = wt.createContext();
Jw.Consumer;
var Zw = wt.createContext(),
  Kk = (Zw.Consumer, new Qw()),
  ry = Qk();
function Jk() {
  return Z.useContext(Jw) || Kk;
}
function Zk() {
  return Z.useContext(Zw) || ry;
}
var eN = (function () {
    function r(i, o) {
      var s = this;
      ((this.inject = function (c, f) {
        f === void 0 && (f = ry);
        var d = s.name + f.hash;
        c.hasNameForId(s.id, d) ||
          c.insertRules(s.id, d, f(s.rules, d, '@keyframes'));
      }),
        (this.toString = function () {
          return Fl(12, String(s.name));
        }),
        (this.name = i),
        (this.id = 'sc-keyframes-' + i),
        (this.rules = o));
    }
    return (
      (r.prototype.getName = function (i) {
        return (i === void 0 && (i = ry), this.name + i.hash);
      }),
      r
    );
  })(),
  tN = /([A-Z])/,
  nN = /([A-Z])/g,
  rN = /^ms-/,
  aN = function (r) {
    return '-' + r.toLowerCase();
  };
function ZC(r) {
  return tN.test(r) ? r.replace(nN, aN).replace(rN, '-ms-') : r;
}
var ew = function (r) {
  return r == null || r === !1 || r === '';
};
function Pl(r, i, o, s) {
  if (Array.isArray(r)) {
    for (var c, f = [], d = 0, h = r.length; d < h; d += 1)
      (c = Pl(r[d], i, o, s)) !== '' &&
        (Array.isArray(c) ? f.push.apply(f, c) : f.push(c));
    return f;
  }
  if (ew(r)) return '';
  if (qw(r)) return '.' + r.styledComponentId;
  if (wd(r)) {
    if (
      typeof (g = r) != 'function' ||
      (g.prototype && g.prototype.isReactComponent) ||
      !i
    )
      return r;
    var m = r(i);
    return (
      vy.isElement(m) &&
        console.warn(
          ty(r) +
            ' is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.'
        ),
      Pl(m, i, o, s)
    );
  }
  var g;
  return r instanceof eN
    ? o
      ? (r.inject(o, s), r.getName(s))
      : r
    : ey(r)
      ? (function E(S, T) {
          var D,
            O,
            x = [];
          for (var P in S)
            S.hasOwnProperty(P) &&
              !ew(S[P]) &&
              ((Array.isArray(S[P]) && S[P].isCss) || wd(S[P])
                ? x.push(ZC(P) + ':', S[P], ';')
                : ey(S[P])
                  ? x.push.apply(x, E(S[P], P))
                  : x.push(
                      ZC(P) +
                        ': ' +
                        ((D = P),
                        (O = S[P]) == null || typeof O == 'boolean' || O === ''
                          ? ''
                          : typeof O != 'number' ||
                              O === 0 ||
                              D in yk ||
                              D.startsWith('--')
                            ? String(O).trim()
                            : O + 'px') +
                        ';'
                    ));
          return T ? [T + ' {'].concat(x, ['}']) : x;
        })(r)
      : r.toString();
}
var tw = function (r) {
  return (Array.isArray(r) && (r.isCss = !0), r);
};
function iN(r) {
  for (
    var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), s = 1;
    s < i;
    s++
  )
    o[s - 1] = arguments[s];
  return wd(r) || ey(r)
    ? tw(Pl(QC(Cd, [r].concat(o))))
    : o.length === 0 && r.length === 1 && typeof r[0] == 'string'
      ? r
      : tw(Pl(QC(r, o)));
}
var nw = /invalid hook call/i,
  ud = new Set(),
  oN = function (r, i) {
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
          if (nw.test(f)) ((c = !1), ud.delete(o));
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
          Z.useRef(),
          c && !ud.has(o) && (console.warn(o), ud.add(o)));
      } catch (f) {
        nw.test(f.message) && ud.delete(o);
      } finally {
        console.error = s;
      }
    }
  },
  lN = function (r, i, o) {
    return (
      o === void 0 && (o = Ii),
      (r.theme !== o.theme && r.theme) || i || o.theme
    );
  },
  sN = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  uN = /(^-|-$)/g;
function Hm(r) {
  return r.replace(sN, '-').replace(uN, '');
}
var cN = function (r) {
  return ny(Kw(r) >>> 0);
};
function cd(r) {
  return typeof r == 'string' && r.charAt(0) === r.charAt(0).toLowerCase();
}
var ay = function (r) {
    return (
      typeof r == 'function' ||
      (typeof r == 'object' && r !== null && !Array.isArray(r))
    );
  },
  fN = function (r) {
    return r !== '__proto__' && r !== 'constructor' && r !== 'prototype';
  };
function dN(r, i, o) {
  var s = r[o];
  ay(i) && ay(s) ? eT(s, i) : (r[o] = i);
}
function eT(r) {
  for (
    var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), s = 1;
    s < i;
    s++
  )
    o[s - 1] = arguments[s];
  for (var c = 0, f = o; c < f.length; c++) {
    var d = f[c];
    if (ay(d)) for (var h in d) fN(h) && dN(r, d[h], h);
  }
  return r;
}
var tT = wt.createContext();
tT.Consumer;
var Im = {};
function nT(r, i, o) {
  var s = qw(r),
    c = !cd(r),
    f = i.attrs,
    d = f === void 0 ? Cd : f,
    h = i.componentId,
    m =
      h === void 0
        ? (function (_, z) {
            var U = typeof _ != 'string' ? 'sc' : Hm(_);
            Im[U] = (Im[U] || 0) + 1;
            var F = U + '-' + cN('5.3.11' + U + Im[U]);
            return z ? z + '-' + F : F;
          })(i.displayName, i.parentComponentId)
        : h,
    g = i.displayName,
    E =
      g === void 0
        ? (function (_) {
            return cd(_) ? 'styled.' + _ : 'Styled(' + ty(_) + ')';
          })(r)
        : g,
    S =
      i.displayName && i.componentId
        ? Hm(i.displayName) + '-' + i.componentId
        : i.componentId || m,
    T = s && r.attrs ? Array.prototype.concat(r.attrs, d).filter(Boolean) : d,
    D = i.shouldForwardProp;
  s &&
    r.shouldForwardProp &&
    (D = i.shouldForwardProp
      ? function (_, z, U) {
          return r.shouldForwardProp(_, z, U) && i.shouldForwardProp(_, z, U);
        }
      : r.shouldForwardProp);
  var O,
    x = new Wk(o, S, s ? r.componentStyle : void 0),
    P = x.isStatic && d.length === 0,
    L = function (_, z) {
      return (function (U, F, se, ie) {
        var de = U.attrs,
          re = U.componentStyle,
          ae = U.defaultProps,
          ue = U.foldedComponentIds,
          B = U.shouldForwardProp,
          q = U.styledComponentId,
          ne = U.target,
          pe = (function (Ve, $, Ke) {
            Ve === void 0 && (Ve = Ii);
            var ye = ei({}, $, { theme: Ve }),
              at = {};
            return (
              Ke.forEach(function (qe) {
                var Je,
                  oe,
                  it,
                  dt = qe;
                for (Je in (wd(dt) && (dt = dt(ye)), dt))
                  ye[Je] = at[Je] =
                    Je === 'className'
                      ? ((oe = at[Je]),
                        (it = dt[Je]),
                        oe && it ? oe + ' ' + it : oe || it)
                      : dt[Je];
              }),
              [ye, at]
            );
          })(lN(F, Z.useContext(tT), ae) || Ii, F, de),
          le = pe[0],
          ve = pe[1],
          Ne = (function (Ve, $, Ke, ye) {
            var at = Jk(),
              qe = Zk(),
              Je = $
                ? Ve.generateAndInjectStyles(Ii, at, qe)
                : Ve.generateAndInjectStyles(Ke, at, qe);
            return (!$ && ye && ye(Je), Je);
          })(re, ie, le, U.warnTooManyClasses),
          Le = se,
          ft = ve.$as || F.$as || ve.as || F.as || ne,
          qt = cd(ft),
          Ce = ve !== F ? ei({}, F, {}, ve) : F,
          Ee = {};
        for (var Te in Ce)
          Te[0] !== '$' &&
            Te !== 'as' &&
            (Te === 'forwardedAs'
              ? (Ee.as = Ce[Te])
              : (B ? B(Te, GC, ft) : !qt || GC(Te)) && (Ee[Te] = Ce[Te]));
        return (
          F.style &&
            ve.style !== F.style &&
            (Ee.style = ei({}, F.style, {}, ve.style)),
          (Ee.className = Array.prototype
            .concat(ue, q, Ne !== q ? Ne : null, F.className, ve.className)
            .filter(Boolean)
            .join(' ')),
          (Ee.ref = Le),
          Z.createElement(ft, Ee)
        );
      })(O, _, z, P);
    };
  return (
    (L.displayName = E),
    ((O = wt.forwardRef(L)).attrs = T),
    (O.componentStyle = x),
    (O.displayName = E),
    (O.shouldForwardProp = D),
    (O.foldedComponentIds = s
      ? Array.prototype.concat(r.foldedComponentIds, r.styledComponentId)
      : Cd),
    (O.styledComponentId = S),
    (O.target = s ? r.target : r),
    (O.withComponent = function (_) {
      var z = i.componentId,
        U = (function (se, ie) {
          if (se == null) return {};
          var de,
            re,
            ae = {},
            ue = Object.keys(se);
          for (re = 0; re < ue.length; re++)
            ((de = ue[re]), ie.indexOf(de) >= 0 || (ae[de] = se[de]));
          return ae;
        })(i, ['componentId']),
        F = z && z + '-' + (cd(_) ? _ : Hm(ty(_)));
      return nT(_, ei({}, U, { attrs: T, componentId: F }), o);
    }),
    Object.defineProperty(O, 'defaultProps', {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (_) {
        this._foldedDefaultProps = s ? eT({}, r.defaultProps, _) : _;
      },
    }),
    oN(E, S),
    (O.warnTooManyClasses = (function (_, z) {
      var U = {},
        F = !1;
      return function (se) {
        if (!F && ((U[se] = !0), Object.keys(U).length >= 200)) {
          var ie = z ? ' with the id of "' + z + '"' : '';
          (console.warn(
            'Over 200 classes were generated for component ' +
              _ +
              ie +
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
            (F = !0),
            (U = {}));
        }
      };
    })(E, S)),
    Object.defineProperty(O, 'toString', {
      value: function () {
        return '.' + O.styledComponentId;
      },
    }),
    c &&
      Ok(O, r, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
        withComponent: !0,
      }),
    O
  );
}
var iy = function (r) {
  return (function i(o, s, c) {
    if ((c === void 0 && (c = Ii), !vy.isValidElementType(s)))
      return Fl(1, String(s));
    var f = function () {
      return o(s, c, iN.apply(void 0, arguments));
    };
    return (
      (f.withConfig = function (d) {
        return i(o, s, ei({}, c, {}, d));
      }),
      (f.attrs = function (d) {
        return i(
          o,
          s,
          ei({}, c, {
            attrs: Array.prototype.concat(c.attrs, d).filter(Boolean),
          })
        );
      }),
      f
    );
  })(nT, r);
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
  iy[r] = iy(r);
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
const Tn = iy;
function rw(r) {
  return (
    r !== null &&
    typeof r == 'object' &&
    'constructor' in r &&
    r.constructor === Object
  );
}
function gy(r, i) {
  (r === void 0 && (r = {}), i === void 0 && (i = {}));
  const o = ['__proto__', 'constructor', 'prototype'];
  Object.keys(i)
    .filter((s) => o.indexOf(s) < 0)
    .forEach((s) => {
      typeof r[s] > 'u'
        ? (r[s] = i[s])
        : rw(i[s]) &&
          rw(r[s]) &&
          Object.keys(i[s]).length > 0 &&
          gy(r[s], i[s]);
    });
}
const rT = {
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
function ni() {
  const r = typeof document < 'u' ? document : {};
  return (gy(r, rT), r);
}
const pN = {
  document: rT,
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
function Kn() {
  const r = typeof window < 'u' ? window : {};
  return (gy(r, pN), r);
}
function zi(r) {
  return (
    r === void 0 && (r = ''),
    r
      .trim()
      .split(' ')
      .filter((i) => !!i.trim())
  );
}
function vN(r) {
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
function by(r, i) {
  return (i === void 0 && (i = 0), setTimeout(r, i));
}
function xd() {
  return Date.now();
}
function hN(r) {
  const i = Kn();
  let o;
  return (
    i.getComputedStyle && (o = i.getComputedStyle(r, null)),
    !o && r.currentStyle && (o = r.currentStyle),
    o || (o = r.style),
    o
  );
}
function mN(r, i) {
  i === void 0 && (i = 'x');
  const o = Kn();
  let s, c, f;
  const d = hN(r);
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
function fd(r) {
  return (
    typeof r == 'object' &&
    r !== null &&
    r.constructor &&
    Object.prototype.toString.call(r).slice(8, -1) === 'Object'
  );
}
function yN(r) {
  return typeof window < 'u' && typeof window.HTMLElement < 'u'
    ? r instanceof HTMLElement
    : r && (r.nodeType === 1 || r.nodeType === 11);
}
function _r() {
  const r = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    i = ['__proto__', 'constructor', 'prototype'];
  for (let o = 1; o < arguments.length; o += 1) {
    const s = o < 0 || arguments.length <= o ? void 0 : arguments[o];
    if (s != null && !yN(s)) {
      const c = Object.keys(Object(s)).filter((f) => i.indexOf(f) < 0);
      for (let f = 0, d = c.length; f < d; f += 1) {
        const h = c[f],
          m = Object.getOwnPropertyDescriptor(s, h);
        m !== void 0 &&
          m.enumerable &&
          (fd(r[h]) && fd(s[h])
            ? s[h].__swiper__
              ? (r[h] = s[h])
              : _r(r[h], s[h])
            : !fd(r[h]) && fd(s[h])
              ? ((r[h] = {}), s[h].__swiper__ ? (r[h] = s[h]) : _r(r[h], s[h]))
              : (r[h] = s[h]));
      }
    }
  }
  return r;
}
function dd(r, i, o) {
  r.style.setProperty(i, o);
}
function aT(r) {
  let { swiper: i, targetPosition: o, side: s } = r;
  const c = Kn(),
    f = -i.translate;
  let d = null,
    h;
  const m = i.params.speed;
  ((i.wrapperEl.style.scrollSnapType = 'none'),
    c.cancelAnimationFrame(i.cssModeFrameID));
  const g = o > f ? 'next' : 'prev',
    E = (T, D) => (g === 'next' && T >= D) || (g === 'prev' && T <= D),
    S = () => {
      ((h = new Date().getTime()), d === null && (d = h));
      const T = Math.max(Math.min((h - d) / m, 1), 0),
        D = 0.5 - Math.cos(T * Math.PI) / 2;
      let O = f + D * (o - f);
      if ((E(O, o) && (O = o), i.wrapperEl.scrollTo({ [s]: O }), E(O, o))) {
        ((i.wrapperEl.style.overflow = 'hidden'),
          (i.wrapperEl.style.scrollSnapType = ''),
          setTimeout(() => {
            ((i.wrapperEl.style.overflow = ''),
              i.wrapperEl.scrollTo({ [s]: O }));
          }),
          c.cancelAnimationFrame(i.cssModeFrameID));
        return;
      }
      i.cssModeFrameID = c.requestAnimationFrame(S);
    };
  S();
}
function Ea(r, i) {
  i === void 0 && (i = '');
  const o = Kn(),
    s = [...r.children];
  return (
    o.HTMLSlotElement &&
      r instanceof HTMLSlotElement &&
      s.push(...r.assignedElements()),
    i ? s.filter((c) => c.matches(i)) : s
  );
}
function gN(r, i) {
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
function bN(r, i) {
  const o = Kn();
  let s = i.contains(r);
  return (
    !s &&
      o.HTMLSlotElement &&
      i instanceof HTMLSlotElement &&
      ((s = [...i.assignedElements()].includes(r)), s || (s = gN(r, i))),
    s
  );
}
function Rd(r) {
  try {
    console.warn(r);
    return;
  } catch {}
}
function Iu(r, i) {
  i === void 0 && (i = []);
  const o = document.createElement(r);
  return (o.classList.add(...(Array.isArray(i) ? i : zi(i))), o);
}
function SN(r) {
  const i = Kn(),
    o = ni(),
    s = r.getBoundingClientRect(),
    c = o.body,
    f = r.clientTop || c.clientTop || 0,
    d = r.clientLeft || c.clientLeft || 0,
    h = r === i ? i.scrollY : r.scrollTop,
    m = r === i ? i.scrollX : r.scrollLeft;
  return { top: s.top + h - f, left: s.left + m - d };
}
function EN(r, i) {
  const o = [];
  for (; r.previousElementSibling; ) {
    const s = r.previousElementSibling;
    (i ? s.matches(i) && o.push(s) : o.push(s), (r = s));
  }
  return o;
}
function CN(r, i) {
  const o = [];
  for (; r.nextElementSibling; ) {
    const s = r.nextElementSibling;
    (i ? s.matches(i) && o.push(s) : o.push(s), (r = s));
  }
  return o;
}
function Hi(r, i) {
  return Kn().getComputedStyle(r, null).getPropertyValue(i);
}
function aw(r) {
  let i = r,
    o;
  if (i) {
    for (o = 0; (i = i.previousSibling) !== null; )
      i.nodeType === 1 && (o += 1);
    return o;
  }
}
function wN(r, i) {
  const o = [];
  let s = r.parentElement;
  for (; s; )
    (i ? s.matches(i) && o.push(s) : o.push(s), (s = s.parentElement));
  return o;
}
function iw(r, i, o) {
  const s = Kn();
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
function TN(r) {
  return (Array.isArray(r) ? r : [r]).filter((i) => !!i);
}
function ow(r, i) {
  (i === void 0 && (i = ''),
    typeof trustedTypes < 'u'
      ? (r.innerHTML = trustedTypes
          .createPolicy('html', { createHTML: (o) => o })
          .createHTML(i))
      : (r.innerHTML = i));
}
let Bm;
function xN() {
  const r = Kn(),
    i = ni();
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
function iT() {
  return (Bm || (Bm = xN()), Bm);
}
let jm;
function RN(r) {
  let { userAgent: i } = r === void 0 ? {} : r;
  const o = iT(),
    s = Kn(),
    c = s.navigator.platform,
    f = i || s.navigator.userAgent,
    d = { ios: !1, android: !1 },
    h = s.screen.width,
    m = s.screen.height,
    g = f.match(/(Android);?[\s\/]+([\d.]+)?/);
  let E = f.match(/(iPad).*OS\s([\d_]+)/);
  const S = f.match(/(iPod)(.*OS\s([\d_]+))?/),
    T = !E && f.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    D = c === 'Win32';
  let O = c === 'MacIntel';
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
      O &&
      o.touch &&
      x.indexOf(`${h}x${m}`) >= 0 &&
      ((E = f.match(/(Version)\/([\d.]+)/)),
      E || (E = [0, 1, '13_0_0']),
      (O = !1)),
    g && !D && ((d.os = 'android'), (d.android = !0)),
    (E || T || S) && ((d.os = 'ios'), (d.ios = !0)),
    d
  );
}
function oT(r) {
  return (r === void 0 && (r = {}), jm || (jm = RN(r)), jm);
}
let $m;
function _N() {
  const r = Kn(),
    i = oT();
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
function lT() {
  return ($m || ($m = _N()), $m);
}
function DN(r) {
  let { swiper: i, on: o, emit: s } = r;
  const c = Kn();
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
            const { width: T, height: D } = i;
            let O = T,
              x = D;
            (S.forEach((P) => {
              let { contentBoxSize: L, contentRect: _, target: z } = P;
              (z && z !== i.el) ||
                ((O = _ ? _.width : (L[0] || L).inlineSize),
                (x = _ ? _.height : (L[0] || L).blockSize));
            }),
              (O !== T || x !== D) && h());
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
function ON(r) {
  let { swiper: i, extendParams: o, on: s, emit: c } = r;
  const f = [],
    d = Kn(),
    h = function (E, S) {
      S === void 0 && (S = {});
      const T = d.MutationObserver || d.WebkitMutationObserver,
        D = new T((O) => {
          if (i.__preventObserver__) return;
          if (O.length === 1) {
            c('observerUpdate', O[0]);
            return;
          }
          const x = function () {
            c('observerUpdate', O[0]);
          };
          d.requestAnimationFrame
            ? d.requestAnimationFrame(x)
            : d.setTimeout(x, 0);
        });
      (D.observe(E, {
        attributes: typeof S.attributes > 'u' ? !0 : S.attributes,
        childList: i.isElement || (typeof S.childList > 'u' ? !0 : S).childList,
        characterData: typeof S.characterData > 'u' ? !0 : S.characterData,
      }),
        f.push(D));
    },
    m = () => {
      if (i.params.observer) {
        if (i.params.observeParents) {
          const E = wN(i.hostEl);
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
var AN = {
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
function MN() {
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
        parseInt(Hi(s, 'padding-left') || 0, 10) -
        parseInt(Hi(s, 'padding-right') || 0, 10)),
      (o =
        o -
        parseInt(Hi(s, 'padding-top') || 0, 10) -
        parseInt(Hi(s, 'padding-bottom') || 0, 10)),
      Number.isNaN(i) && (i = 0),
      Number.isNaN(o) && (o = 0),
      Object.assign(r, {
        width: i,
        height: o,
        size: r.isHorizontal() ? i : o,
      })));
}
function LN() {
  const r = this;
  function i(ae, ue) {
    return parseFloat(ae.getPropertyValue(r.getDirectionLabel(ue)) || 0);
  }
  const o = r.params,
    { wrapperEl: s, slidesEl: c, size: f, rtlTranslate: d, wrongRTL: h } = r,
    m = r.virtual && o.virtual.enabled,
    g = m ? r.virtual.slides.length : r.slides.length,
    E = Ea(c, `.${r.params.slideClass}, swiper-slide`),
    S = m ? r.virtual.slides.length : E.length;
  let T = [];
  const D = [],
    O = [];
  let x = o.slidesOffsetBefore;
  typeof x == 'function' && (x = o.slidesOffsetBefore.call(r));
  let P = o.slidesOffsetAfter;
  typeof P == 'function' && (P = o.slidesOffsetAfter.call(r));
  const L = r.snapGrid.length,
    _ = r.slidesGrid.length;
  let z = o.spaceBetween,
    U = -x,
    F = 0,
    se = 0;
  if (typeof f > 'u') return;
  (typeof z == 'string' && z.indexOf('%') >= 0
    ? (z = (parseFloat(z.replace('%', '')) / 100) * f)
    : typeof z == 'string' && (z = parseFloat(z)),
    (r.virtualSize = -z),
    E.forEach((ae) => {
      (d ? (ae.style.marginLeft = '') : (ae.style.marginRight = ''),
        (ae.style.marginBottom = ''),
        (ae.style.marginTop = ''));
    }),
    o.centeredSlides &&
      o.cssMode &&
      (dd(s, '--swiper-centered-offset-before', ''),
      dd(s, '--swiper-centered-offset-after', '')));
  const ie = o.grid && o.grid.rows > 1 && r.grid;
  ie ? r.grid.initSlides(E) : r.grid && r.grid.unsetSlides();
  let de;
  const re =
    o.slidesPerView === 'auto' &&
    o.breakpoints &&
    Object.keys(o.breakpoints).filter(
      (ae) => typeof o.breakpoints[ae].slidesPerView < 'u'
    ).length > 0;
  for (let ae = 0; ae < S; ae += 1) {
    de = 0;
    let ue;
    if (
      (E[ae] && (ue = E[ae]),
      ie && r.grid.updateSlide(ae, ue, E),
      !(E[ae] && Hi(ue, 'display') === 'none'))
    ) {
      if (o.slidesPerView === 'auto') {
        re && (E[ae].style[r.getDirectionLabel('width')] = '');
        const B = getComputedStyle(ue),
          q = ue.style.transform,
          ne = ue.style.webkitTransform;
        if (
          (q && (ue.style.transform = 'none'),
          ne && (ue.style.webkitTransform = 'none'),
          o.roundLengths)
        )
          de = r.isHorizontal() ? iw(ue, 'width', !0) : iw(ue, 'height', !0);
        else {
          const pe = i(B, 'width'),
            le = i(B, 'padding-left'),
            ve = i(B, 'padding-right'),
            Ne = i(B, 'margin-left'),
            Le = i(B, 'margin-right'),
            ft = B.getPropertyValue('box-sizing');
          if (ft && ft === 'border-box') de = pe + Ne + Le;
          else {
            const { clientWidth: qt, offsetWidth: Ce } = ue;
            de = pe + le + ve + Ne + Le + (Ce - qt);
          }
        }
        (q && (ue.style.transform = q),
          ne && (ue.style.webkitTransform = ne),
          o.roundLengths && (de = Math.floor(de)));
      } else
        ((de = (f - (o.slidesPerView - 1) * z) / o.slidesPerView),
          o.roundLengths && (de = Math.floor(de)),
          E[ae] && (E[ae].style[r.getDirectionLabel('width')] = `${de}px`));
      (E[ae] && (E[ae].swiperSlideSize = de),
        O.push(de),
        o.centeredSlides
          ? ((U = U + de / 2 + F / 2 + z),
            F === 0 && ae !== 0 && (U = U - f / 2 - z),
            ae === 0 && (U = U - f / 2 - z),
            Math.abs(U) < 1 / 1e3 && (U = 0),
            o.roundLengths && (U = Math.floor(U)),
            se % o.slidesPerGroup === 0 && T.push(U),
            D.push(U))
          : (o.roundLengths && (U = Math.floor(U)),
            (se - Math.min(r.params.slidesPerGroupSkip, se)) %
              r.params.slidesPerGroup ===
              0 && T.push(U),
            D.push(U),
            (U = U + de + z)),
        (r.virtualSize += de + z),
        (F = de),
        (se += 1));
    }
  }
  if (
    ((r.virtualSize = Math.max(r.virtualSize, f) + P),
    d &&
      h &&
      (o.effect === 'slide' || o.effect === 'coverflow') &&
      (s.style.width = `${r.virtualSize + z}px`),
    o.setWrapperSize &&
      (s.style[r.getDirectionLabel('width')] = `${r.virtualSize + z}px`),
    ie && r.grid.updateWrapperSize(de, T),
    !o.centeredSlides)
  ) {
    const ae = [];
    for (let ue = 0; ue < T.length; ue += 1) {
      let B = T[ue];
      (o.roundLengths && (B = Math.floor(B)),
        T[ue] <= r.virtualSize - f && ae.push(B));
    }
    ((T = ae),
      Math.floor(r.virtualSize - f) - Math.floor(T[T.length - 1]) > 1 &&
        T.push(r.virtualSize - f));
  }
  if (m && o.loop) {
    const ae = O[0] + z;
    if (o.slidesPerGroup > 1) {
      const ue = Math.ceil(
          (r.virtual.slidesBefore + r.virtual.slidesAfter) / o.slidesPerGroup
        ),
        B = ae * o.slidesPerGroup;
      for (let q = 0; q < ue; q += 1) T.push(T[T.length - 1] + B);
    }
    for (
      let ue = 0;
      ue < r.virtual.slidesBefore + r.virtual.slidesAfter;
      ue += 1
    )
      (o.slidesPerGroup === 1 && T.push(T[T.length - 1] + ae),
        D.push(D[D.length - 1] + ae),
        (r.virtualSize += ae));
  }
  if ((T.length === 0 && (T = [0]), z !== 0)) {
    const ae =
      r.isHorizontal() && d ? 'marginLeft' : r.getDirectionLabel('marginRight');
    E.filter((ue, B) =>
      !o.cssMode || o.loop ? !0 : B !== E.length - 1
    ).forEach((ue) => {
      ue.style[ae] = `${z}px`;
    });
  }
  if (o.centeredSlides && o.centeredSlidesBounds) {
    let ae = 0;
    (O.forEach((B) => {
      ae += B + (z || 0);
    }),
      (ae -= z));
    const ue = ae > f ? ae - f : 0;
    T = T.map((B) => (B <= 0 ? -x : B > ue ? ue + P : B));
  }
  if (o.centerInsufficientSlides) {
    let ae = 0;
    (O.forEach((B) => {
      ae += B + (z || 0);
    }),
      (ae -= z));
    const ue = (o.slidesOffsetBefore || 0) + (o.slidesOffsetAfter || 0);
    if (ae + ue < f) {
      const B = (f - ae - ue) / 2;
      (T.forEach((q, ne) => {
        T[ne] = q - B;
      }),
        D.forEach((q, ne) => {
          D[ne] = q + B;
        }));
    }
  }
  if (
    (Object.assign(r, {
      slides: E,
      snapGrid: T,
      slidesGrid: D,
      slidesSizesGrid: O,
    }),
    o.centeredSlides && o.cssMode && !o.centeredSlidesBounds)
  ) {
    (dd(s, '--swiper-centered-offset-before', `${-T[0]}px`),
      dd(
        s,
        '--swiper-centered-offset-after',
        `${r.size / 2 - O[O.length - 1] / 2}px`
      ));
    const ae = -r.snapGrid[0],
      ue = -r.slidesGrid[0];
    ((r.snapGrid = r.snapGrid.map((B) => B + ae)),
      (r.slidesGrid = r.slidesGrid.map((B) => B + ue)));
  }
  if (
    (S !== g && r.emit('slidesLengthChange'),
    T.length !== L &&
      (r.params.watchOverflow && r.checkOverflow(),
      r.emit('snapGridLengthChange')),
    D.length !== _ && r.emit('slidesGridLengthChange'),
    o.watchSlidesProgress && r.updateSlidesOffset(),
    r.emit('slidesUpdated'),
    !m && !o.cssMode && (o.effect === 'slide' || o.effect === 'fade'))
  ) {
    const ae = `${o.containerModifierClass}backface-hidden`,
      ue = r.el.classList.contains(ae);
    S <= o.maxBackfaceHiddenSlides
      ? ue || r.el.classList.add(ae)
      : ue && r.el.classList.remove(ae);
  }
}
function kN(r) {
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
function NN() {
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
const lw = (r, i, o) => {
  i && !r.classList.contains(o)
    ? r.classList.add(o)
    : !i && r.classList.contains(o) && r.classList.remove(o);
};
function PN(r) {
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
      T =
        (d - f[0] + (o.centeredSlides ? i.minTranslate() : 0) - E) /
        (g.swiperSlideSize + h),
      D = -(d - E),
      O = D + i.slidesSizesGrid[m],
      x = D >= 0 && D <= i.size - i.slidesSizesGrid[m],
      P =
        (D >= 0 && D < i.size - 1) ||
        (O > 1 && O <= i.size) ||
        (D <= 0 && O >= i.size);
    (P && (i.visibleSlides.push(g), i.visibleSlidesIndexes.push(m)),
      lw(g, P, o.slideVisibleClass),
      lw(g, x, o.slideFullyVisibleClass),
      (g.progress = c ? -S : S),
      (g.originalProgress = c ? -T : T));
  }
}
function zN(r) {
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
      T = i.slidesGrid[E],
      D = i.slidesGrid[S],
      O = i.slidesGrid[i.slidesGrid.length - 1],
      x = Math.abs(r);
    (x >= T ? (h = (x - T) / O) : (h = (x + O - D) / O), h > 1 && (h -= 1));
  }
  (Object.assign(i, { progress: c, progressLoop: h, isBeginning: f, isEnd: d }),
    (o.watchSlidesProgress || (o.centeredSlides && o.autoHeight)) &&
      i.updateSlidesProgress(r),
    f && !m && i.emit('reachBeginning toEdge'),
    d && !g && i.emit('reachEnd toEdge'),
    ((m && !f) || (g && !d)) && i.emit('fromEdge'),
    i.emit('progress', c));
}
const Ym = (r, i, o) => {
  i && !r.classList.contains(o)
    ? r.classList.add(o)
    : !i && r.classList.contains(o) && r.classList.remove(o);
};
function UN() {
  const r = this,
    { slides: i, params: o, slidesEl: s, activeIndex: c } = r,
    f = r.virtual && o.virtual.enabled,
    d = r.grid && o.grid && o.grid.rows > 1,
    h = (S) => Ea(s, `.${o.slideClass}${S}, swiper-slide${S}`)[0];
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
      ((E = CN(m, `.${o.slideClass}, swiper-slide`)[0]),
      o.loop && !E && (E = i[0]),
      (g = EN(m, `.${o.slideClass}, swiper-slide`)[0]),
      o.loop && !g === 0 && (g = i[i.length - 1]))),
    i.forEach((S) => {
      (Ym(S, S === m, o.slideActiveClass),
        Ym(S, S === E, o.slideNextClass),
        Ym(S, S === g, o.slidePrevClass));
    }),
    r.emitSlidesClasses());
}
const yd = (r, i) => {
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
  Gm = (r, i) => {
    if (!r.slides[i]) return;
    const o = r.slides[i].querySelector('[loading="lazy"]');
    o && o.removeAttribute('loading');
  },
  oy = (r) => {
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
          h.includes(m.column) && Gm(r, g);
        }));
      return;
    }
    const f = c + s - 1;
    if (r.params.rewind || r.params.loop)
      for (let d = c - i; d <= f + i; d += 1) {
        const h = ((d % o) + o) % o;
        (h < c || h > f) && Gm(r, h);
      }
    else
      for (let d = Math.max(c - i, 0); d <= Math.min(f + i, o - 1); d += 1)
        d !== c && (d > f || d < c) && Gm(r, d);
  };
function FN(r) {
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
function VN(r) {
  const i = this,
    o = i.rtlTranslate ? i.translate : -i.translate,
    { snapGrid: s, params: c, activeIndex: f, realIndex: d, snapIndex: h } = i;
  let m = r,
    g;
  const E = (D) => {
    let O = D - i.virtual.slidesBefore;
    return (
      O < 0 && (O = i.virtual.slides.length + O),
      O >= i.virtual.slides.length && (O -= i.virtual.slides.length),
      O
    );
  };
  if ((typeof m > 'u' && (m = FN(i)), s.indexOf(o) >= 0)) g = s.indexOf(o);
  else {
    const D = Math.min(c.slidesPerGroupSkip, m);
    g = D + Math.floor((m - D) / c.slidesPerGroup);
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
  let T;
  if (i.virtual && c.virtual.enabled && c.loop) T = E(m);
  else if (S) {
    const D = i.slides.find((x) => x.column === m);
    let O = parseInt(D.getAttribute('data-swiper-slide-index'), 10);
    (Number.isNaN(O) && (O = Math.max(i.slides.indexOf(D), 0)),
      (T = Math.floor(O / c.grid.rows)));
  } else if (i.slides[m]) {
    const D = i.slides[m].getAttribute('data-swiper-slide-index');
    D ? (T = parseInt(D, 10)) : (T = m);
  } else T = m;
  (Object.assign(i, {
    previousSnapIndex: h,
    snapIndex: g,
    previousRealIndex: d,
    realIndex: T,
    previousIndex: f,
    activeIndex: m,
  }),
    i.initialized && oy(i),
    i.emit('activeIndexChange'),
    i.emit('snapIndexChange'),
    (i.initialized || i.params.runCallbacksOnInit) &&
      (d !== T && i.emit('realIndexChange'), i.emit('slideChange')));
}
function HN(r, i) {
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
var IN = {
  updateSize: MN,
  updateSlides: LN,
  updateAutoHeight: kN,
  updateSlidesOffset: NN,
  updateSlidesProgress: PN,
  updateProgress: zN,
  updateSlidesClasses: UN,
  updateActiveIndex: VN,
  updateClickedSlide: HN,
};
function BN(r) {
  r === void 0 && (r = this.isHorizontal() ? 'x' : 'y');
  const i = this,
    { params: o, rtlTranslate: s, translate: c, wrapperEl: f } = i;
  if (o.virtualTranslate) return s ? -c : c;
  if (o.cssMode) return c;
  let d = mN(f, r);
  return ((d += i.cssOverflowAdjustment()), s && (d = -d), d || 0);
}
function jN(r, i) {
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
function $N() {
  return -this.snapGrid[0];
}
function YN() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function GN(r, i, o, s, c) {
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
          aT({ swiper: f, targetPosition: -E, side: S ? 'left' : 'top' }),
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
            (f.onTranslateToWrapperTransitionEnd = function (T) {
              !f ||
                f.destroyed ||
                (T.target === this &&
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
var WN = {
  getTranslate: BN,
  setTranslate: jN,
  minTranslate: $N,
  maxTranslate: YN,
  translateTo: GN,
};
function qN(r, i) {
  const o = this;
  (o.params.cssMode ||
    ((o.wrapperEl.style.transitionDuration = `${r}ms`),
    (o.wrapperEl.style.transitionDelay = r === 0 ? '0ms' : '')),
    o.emit('setTransition', r, i));
}
function sT(r) {
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
function XN(r, i) {
  r === void 0 && (r = !0);
  const o = this,
    { params: s } = o;
  s.cssMode ||
    (s.autoHeight && o.updateAutoHeight(),
    sT({ swiper: o, runCallbacks: r, direction: i, step: 'Start' }));
}
function QN(r, i) {
  r === void 0 && (r = !0);
  const o = this,
    { params: s } = o;
  ((o.animating = !1),
    !s.cssMode &&
      (o.setTransition(0),
      sT({ swiper: o, runCallbacks: r, direction: i, step: 'End' })));
}
var KN = { setTransition: qN, transitionStart: XN, transitionEnd: QN };
function JN(r, i, o, s, c) {
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
    rtlTranslate: T,
    wrapperEl: D,
    enabled: O,
  } = f;
  if (
    (!O && !s && !c) ||
    f.destroyed ||
    (f.animating && h.preventInteractionOnTransition)
  )
    return !1;
  typeof i > 'u' && (i = f.params.speed);
  const x = Math.min(f.params.slidesPerGroupSkip, d);
  let P = x + Math.floor((d - x) / f.params.slidesPerGroup);
  P >= m.length && (P = m.length - 1);
  const L = -m[P];
  if (h.normalizeSlideIndex)
    for (let ie = 0; ie < g.length; ie += 1) {
      const de = -Math.floor(L * 100),
        re = Math.floor(g[ie] * 100),
        ae = Math.floor(g[ie + 1] * 100);
      typeof g[ie + 1] < 'u'
        ? de >= re && de < ae - (ae - re) / 2
          ? (d = ie)
          : de >= re && de < ae && (d = ie + 1)
        : de >= re && (d = ie);
    }
  if (
    f.initialized &&
    d !== S &&
    ((!f.allowSlideNext &&
      (T
        ? L > f.translate && L > f.minTranslate()
        : L < f.translate && L < f.minTranslate())) ||
      (!f.allowSlidePrev &&
        L > f.translate &&
        L > f.maxTranslate() &&
        (S || 0) !== d))
  )
    return !1;
  (d !== (E || 0) && o && f.emit('beforeSlideChangeStart'),
    f.updateProgress(L));
  let _;
  d > S ? (_ = 'next') : d < S ? (_ = 'prev') : (_ = 'reset');
  const z = f.virtual && f.params.virtual.enabled;
  if (!(z && c) && ((T && -L === f.translate) || (!T && L === f.translate)))
    return (
      f.updateActiveIndex(d),
      h.autoHeight && f.updateAutoHeight(),
      f.updateSlidesClasses(),
      h.effect !== 'slide' && f.setTranslate(L),
      _ !== 'reset' && (f.transitionStart(o, _), f.transitionEnd(o, _)),
      !1
    );
  if (h.cssMode) {
    const ie = f.isHorizontal(),
      de = T ? L : -L;
    if (i === 0)
      (z &&
        ((f.wrapperEl.style.scrollSnapType = 'none'),
        (f._immediateVirtual = !0)),
        z && !f._cssModeVirtualInitialSet && f.params.initialSlide > 0
          ? ((f._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              D[ie ? 'scrollLeft' : 'scrollTop'] = de;
            }))
          : (D[ie ? 'scrollLeft' : 'scrollTop'] = de),
        z &&
          requestAnimationFrame(() => {
            ((f.wrapperEl.style.scrollSnapType = ''),
              (f._immediateVirtual = !1));
          }));
    else {
      if (!f.support.smoothScroll)
        return (
          aT({ swiper: f, targetPosition: de, side: ie ? 'left' : 'top' }),
          !0
        );
      D.scrollTo({ [ie ? 'left' : 'top']: de, behavior: 'smooth' });
    }
    return !0;
  }
  const se = lT().isSafari;
  return (
    z && !c && se && f.isElement && f.virtual.update(!1, !1, d),
    f.setTransition(i),
    f.setTranslate(L),
    f.updateActiveIndex(d),
    f.updateSlidesClasses(),
    f.emit('beforeTransitionStart', i, s),
    f.transitionStart(o, _),
    i === 0
      ? f.transitionEnd(o, _)
      : f.animating ||
        ((f.animating = !0),
        f.onSlideToWrapperTransitionEnd ||
          (f.onSlideToWrapperTransitionEnd = function (de) {
            !f ||
              f.destroyed ||
              (de.target === this &&
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
function ZN(r, i, o, s) {
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
        const T = d * c.params.grid.rows;
        h = c.slides.find(
          (D) => D.getAttribute('data-swiper-slide-index') * 1 === T
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
        const T = g
          ? h < c.activeIndex
            ? 'prev'
            : 'next'
          : h - c.activeIndex - 1 < c.params.slidesPerView
            ? 'next'
            : 'prev';
        c.loopFix({
          direction: T,
          slideTo: !0,
          activeSlideIndex: T === 'next' ? h + 1 : h - m + 1,
          slideRealIndex: T === 'next' ? c.realIndex : void 0,
        });
      }
      if (f) {
        const T = d * c.params.grid.rows;
        d = c.slides.find(
          (D) => D.getAttribute('data-swiper-slide-index') * 1 === T
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
function eP(r, i, o) {
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
function tP(r, i, o) {
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
  function T(_) {
    return _ < 0 ? -Math.floor(Math.abs(_)) : Math.floor(_);
  }
  const D = T(S),
    O = f.map((_) => T(_)),
    x = c.freeMode && c.freeMode.enabled;
  let P = f[O.indexOf(D) - 1];
  if (typeof P > 'u' && (c.cssMode || x)) {
    let _;
    (f.forEach((z, U) => {
      D >= z && (_ = U);
    }),
      typeof _ < 'u' && (P = x ? f[_] : f[_ > 0 ? _ - 1 : _]));
  }
  let L = 0;
  if (
    (typeof P < 'u' &&
      ((L = d.indexOf(P)),
      L < 0 && (L = s.activeIndex - 1),
      c.slidesPerView === 'auto' &&
        c.slidesPerGroup === 1 &&
        c.slidesPerGroupAuto &&
        ((L = L - s.slidesPerViewDynamic('previous', !0) + 1),
        (L = Math.max(L, 0)))),
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
        s.slideTo(L, r, i, o);
      }),
      !0
    );
  return s.slideTo(L, r, i, o);
}
function nP(r, i, o) {
  i === void 0 && (i = !0);
  const s = this;
  if (!s.destroyed)
    return (
      typeof r > 'u' && (r = s.params.speed),
      s.slideTo(s.activeIndex, r, i, o)
    );
}
function rP(r, i, o, s) {
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
function aP() {
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
              Ea(o, `${d}[data-swiper-slide-index="${f}"]`)[0]
            )),
            by(() => {
              r.slideTo(c);
            }))
          : r.slideTo(c));
  } else r.slideTo(c);
}
var iP = {
  slideTo: JN,
  slideToLoop: ZN,
  slideNext: eP,
  slidePrev: tP,
  slideReset: nP,
  slideToClosest: rP,
  slideToClickedSlide: aP,
};
function oP(r, i) {
  const o = this,
    { params: s, slidesEl: c } = o;
  if (!s.loop || (o.virtual && o.params.virtual.enabled)) return;
  const f = () => {
      Ea(c, `.${s.slideClass}, swiper-slide`).forEach((D, O) => {
        D.setAttribute('data-swiper-slide-index', O);
      });
    },
    d = () => {
      const T = Ea(c, `.${s.slideBlankClass}`);
      (T.forEach((D) => {
        D.remove();
      }),
        T.length > 0 && (o.recalcSlides(), o.updateSlides()));
    },
    h = o.grid && s.grid && s.grid.rows > 1;
  s.loopAddBlankSlides && (s.slidesPerGroup > 1 || h) && d();
  const m = s.slidesPerGroup * (h ? s.grid.rows : 1),
    g = o.slides.length % m !== 0,
    E = h && o.slides.length % s.grid.rows !== 0,
    S = (T) => {
      for (let D = 0; D < T; D += 1) {
        const O = o.isElement
          ? Iu('swiper-slide', [s.slideBlankClass])
          : Iu('div', [s.slideClass, s.slideBlankClass]);
        o.slidesEl.append(O);
      }
    };
  if (g) {
    if (s.loopAddBlankSlides) {
      const T = m - (o.slides.length % m);
      (S(T), o.recalcSlides(), o.updateSlides());
    } else
      Rd(
        'Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
      );
    f();
  } else if (E) {
    if (s.loopAddBlankSlides) {
      const T = s.grid.rows - (o.slides.length % s.grid.rows);
      (S(T), o.recalcSlides(), o.updateSlides());
    } else
      Rd(
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
function lP(r) {
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
      allowSlideNext: T,
      slidesEl: D,
      params: O,
    } = g,
    { centeredSlides: x, initialSlide: P } = O;
  if (
    ((g.allowSlidePrev = !0),
    (g.allowSlideNext = !0),
    g.virtual && O.virtual.enabled)
  ) {
    (o &&
      (!O.centeredSlides && g.snapIndex === 0
        ? g.slideTo(g.virtual.slides.length, 0, !1, !0)
        : O.centeredSlides && g.snapIndex < O.slidesPerView
          ? g.slideTo(g.virtual.slides.length + g.snapIndex, 0, !1, !0)
          : g.snapIndex === g.snapGrid.length - 1 &&
            g.slideTo(g.virtual.slidesBefore, 0, !1, !0)),
      (g.allowSlidePrev = S),
      (g.allowSlideNext = T),
      g.emit('loopFix'));
    return;
  }
  let L = O.slidesPerView;
  L === 'auto'
    ? (L = g.slidesPerViewDynamic())
    : ((L = Math.ceil(parseFloat(O.slidesPerView, 10))),
      x && L % 2 === 0 && (L = L + 1));
  const _ = O.slidesPerGroupAuto ? L : O.slidesPerGroup;
  let z = x ? Math.max(_, Math.ceil(L / 2)) : _;
  (z % _ !== 0 && (z += _ - (z % _)),
    (z += O.loopAdditionalSlides),
    (g.loopedSlides = z));
  const U = g.grid && O.grid && O.grid.rows > 1;
  E.length < L + z || (g.params.effect === 'cards' && E.length < L + z * 2)
    ? Rd(
        'Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters'
      )
    : U &&
      O.grid.fill === 'row' &&
      Rd(
        'Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`'
      );
  const F = [],
    se = [],
    ie = U ? Math.ceil(E.length / O.grid.rows) : E.length,
    de = d && ie - P < L && !x;
  let re = de ? P : g.activeIndex;
  typeof f > 'u'
    ? (f = g.getSlideIndex(
        E.find((le) => le.classList.contains(O.slideActiveClass))
      ))
    : (re = f);
  const ae = s === 'next' || !s,
    ue = s === 'prev' || !s;
  let B = 0,
    q = 0;
  const pe = (U ? E[f].column : f) + (x && typeof c > 'u' ? -L / 2 + 0.5 : 0);
  if (pe < z) {
    B = Math.max(z - pe, _);
    for (let le = 0; le < z - pe; le += 1) {
      const ve = le - Math.floor(le / ie) * ie;
      if (U) {
        const Ne = ie - ve - 1;
        for (let Le = E.length - 1; Le >= 0; Le -= 1)
          E[Le].column === Ne && F.push(Le);
      } else F.push(ie - ve - 1);
    }
  } else if (pe + L > ie - z) {
    ((q = Math.max(pe - (ie - z * 2), _)),
      de && (q = Math.max(q, L - ie + P + 1)));
    for (let le = 0; le < q; le += 1) {
      const ve = le - Math.floor(le / ie) * ie;
      U
        ? E.forEach((Ne, Le) => {
            Ne.column === ve && se.push(Le);
          })
        : se.push(ve);
    }
  }
  if (
    ((g.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      g.__preventObserver__ = !1;
    }),
    g.params.effect === 'cards' &&
      E.length < L + z * 2 &&
      (se.includes(f) && se.splice(se.indexOf(f), 1),
      F.includes(f) && F.splice(F.indexOf(f), 1)),
    ue &&
      F.forEach((le) => {
        ((E[le].swiperLoopMoveDOM = !0),
          D.prepend(E[le]),
          (E[le].swiperLoopMoveDOM = !1));
      }),
    ae &&
      se.forEach((le) => {
        ((E[le].swiperLoopMoveDOM = !0),
          D.append(E[le]),
          (E[le].swiperLoopMoveDOM = !1));
      }),
    g.recalcSlides(),
    O.slidesPerView === 'auto'
      ? g.updateSlides()
      : U &&
        ((F.length > 0 && ue) || (se.length > 0 && ae)) &&
        g.slides.forEach((le, ve) => {
          g.grid.updateSlide(ve, le, g.slides);
        }),
    O.watchSlidesProgress && g.updateSlidesOffset(),
    o)
  ) {
    if (F.length > 0 && ue) {
      if (typeof i > 'u') {
        const le = g.slidesGrid[re],
          Ne = g.slidesGrid[re + B] - le;
        m
          ? g.setTranslate(g.translate - Ne)
          : (g.slideTo(re + Math.ceil(B), 0, !1, !0),
            c &&
              ((g.touchEventsData.startTranslate =
                g.touchEventsData.startTranslate - Ne),
              (g.touchEventsData.currentTranslate =
                g.touchEventsData.currentTranslate - Ne)));
      } else if (c) {
        const le = U ? F.length / O.grid.rows : F.length;
        (g.slideTo(g.activeIndex + le, 0, !1, !0),
          (g.touchEventsData.currentTranslate = g.translate));
      }
    } else if (se.length > 0 && ae)
      if (typeof i > 'u') {
        const le = g.slidesGrid[re],
          Ne = g.slidesGrid[re - q] - le;
        m
          ? g.setTranslate(g.translate - Ne)
          : (g.slideTo(re - q, 0, !1, !0),
            c &&
              ((g.touchEventsData.startTranslate =
                g.touchEventsData.startTranslate - Ne),
              (g.touchEventsData.currentTranslate =
                g.touchEventsData.currentTranslate - Ne)));
      } else {
        const le = U ? se.length / O.grid.rows : se.length;
        g.slideTo(g.activeIndex - le, 0, !1, !0);
      }
  }
  if (
    ((g.allowSlidePrev = S),
    (g.allowSlideNext = T),
    g.controller && g.controller.control && !h)
  ) {
    const le = {
      slideRealIndex: i,
      direction: s,
      setTranslate: c,
      activeSlideIndex: f,
      byController: !0,
    };
    Array.isArray(g.controller.control)
      ? g.controller.control.forEach((ve) => {
          !ve.destroyed &&
            ve.params.loop &&
            ve.loopFix({
              ...le,
              slideTo: ve.params.slidesPerView === O.slidesPerView ? o : !1,
            });
        })
      : g.controller.control instanceof g.constructor &&
        g.controller.control.params.loop &&
        g.controller.control.loopFix({
          ...le,
          slideTo:
            g.controller.control.params.slidesPerView === O.slidesPerView
              ? o
              : !1,
        });
  }
  g.emit('loopFix');
}
function sP() {
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
var uP = { loopCreate: oP, loopFix: lP, loopDestroy: sP };
function cP(r) {
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
function fP() {
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
var dP = { setGrabCursor: cP, unsetGrabCursor: fP };
function pP(r, i) {
  i === void 0 && (i = this);
  function o(s) {
    if (!s || s === ni() || s === Kn()) return null;
    s.assignedSlot && (s = s.assignedSlot);
    const c = s.closest(r);
    return !c && !s.getRootNode ? null : c || o(s.getRootNode().host);
  }
  return o(i);
}
function sw(r, i, o) {
  const s = Kn(),
    { params: c } = r,
    f = c.edgeSwipeDetection,
    d = c.edgeSwipeThreshold;
  return f && (o <= d || o >= s.innerWidth - d)
    ? f === 'prevent'
      ? (i.preventDefault(), !0)
      : !1
    : !0;
}
function vP(r) {
  const i = this,
    o = ni();
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
    sw(i, s, s.targetTouches[0].pageX);
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
    (f.touchEventsTarget === 'wrapper' && !bN(m, i.wrapperEl)) ||
    ('which' in s && s.which === 3) ||
    ('button' in s && s.button > 0) ||
    (c.isTouched && c.isMoved)
  )
    return;
  const g = !!f.noSwipingClass && f.noSwipingClass !== '',
    E = s.composedPath ? s.composedPath() : s.path;
  g && s.target && s.target.shadowRoot && E && (m = E[0]);
  const S = f.noSwipingSelector ? f.noSwipingSelector : `.${f.noSwipingClass}`,
    T = !!(s.target && s.target.shadowRoot);
  if (f.noSwiping && (T ? pP(S, m) : m.closest(S))) {
    i.allowClick = !0;
    return;
  }
  if (f.swipeHandler && !m.closest(f.swipeHandler)) return;
  ((d.currentX = s.pageX), (d.currentY = s.pageY));
  const D = d.currentX,
    O = d.currentY;
  if (!sw(i, s, D)) return;
  (Object.assign(c, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (d.startX = D),
    (d.startY = O),
    (c.touchStartTime = xd()),
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
  const P = x && i.allowTouchMove && f.touchStartPreventDefault;
  ((f.touchStartForcePreventDefault || P) &&
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
function hP(r) {
  const i = ni(),
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
      ((g = [...m.changedTouches].find((se) => se.identifier === s.touchId)),
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
        (s.touchStartTime = xd())));
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
  const T = f.currentX - f.startX,
    D = f.currentY - f.startY;
  if (o.params.threshold && Math.sqrt(T ** 2 + D ** 2) < o.params.threshold)
    return;
  if (typeof s.isScrolling > 'u') {
    let se;
    (o.isHorizontal() && f.currentY === f.startY) ||
    (o.isVertical() && f.currentX === f.startX)
      ? (s.isScrolling = !1)
      : T * T + D * D >= 25 &&
        ((se = (Math.atan2(Math.abs(D), Math.abs(T)) * 180) / Math.PI),
        (s.isScrolling = o.isHorizontal()
          ? se > c.touchAngle
          : 90 - se > c.touchAngle));
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
  let O = o.isHorizontal() ? T : D,
    x = o.isHorizontal() ? f.currentX - f.previousX : f.currentY - f.previousY;
  (c.oneWayMovement &&
    ((O = Math.abs(O) * (d ? 1 : -1)), (x = Math.abs(x) * (d ? 1 : -1))),
    (f.diff = O),
    (O *= c.touchRatio),
    d && ((O = -O), (x = -x)));
  const P = o.touchesDirection;
  ((o.swipeDirection = O > 0 ? 'prev' : 'next'),
    (o.touchesDirection = x > 0 ? 'prev' : 'next'));
  const L = o.params.loop && !c.cssMode,
    _ =
      (o.touchesDirection === 'next' && o.allowSlideNext) ||
      (o.touchesDirection === 'prev' && o.allowSlidePrev);
  if (!s.isMoved) {
    if (
      (L && _ && o.loopFix({ direction: o.swipeDirection }),
      (s.startTranslate = o.getTranslate()),
      o.setTransition(0),
      o.animating)
    ) {
      const se = new window.CustomEvent('transitionend', {
        bubbles: !0,
        cancelable: !0,
        detail: { bySwiperTouchMove: !0 },
      });
      o.wrapperEl.dispatchEvent(se);
    }
    ((s.allowMomentumBounce = !1),
      c.grabCursor &&
        (o.allowSlideNext === !0 || o.allowSlidePrev === !0) &&
        o.setGrabCursor(!0),
      o.emit('sliderFirstMove', m));
  }
  let z;
  if (
    (new Date().getTime(),
    c._loopSwapReset !== !1 &&
      s.isMoved &&
      s.allowThresholdMove &&
      P !== o.touchesDirection &&
      L &&
      _ &&
      Math.abs(O) >= 1)
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
    (s.currentTranslate = O + s.startTranslate));
  let U = !0,
    F = c.resistanceRatio;
  if (
    (c.touchReleaseOnEdges && (F = 0),
    O > 0
      ? (L &&
          _ &&
          !z &&
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
              (-o.minTranslate() + s.startTranslate + O) ** F)))
      : O < 0 &&
        (L &&
          _ &&
          !z &&
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
              (o.maxTranslate() - s.startTranslate - O) ** F))),
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
    if (Math.abs(O) > c.threshold || s.allowThresholdMove) {
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
function mP(r) {
  const i = this,
    o = i.touchEventsData;
  let s = r;
  s.originalEvent && (s = s.originalEvent);
  let c;
  if (s.type === 'touchend' || s.type === 'touchcancel') {
    if (
      ((c = [...s.changedTouches].find((F) => F.identifier === o.touchId)),
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
  const S = xd(),
    T = S - o.touchStartTime;
  if (i.allowClick) {
    const F = s.path || (s.composedPath && s.composedPath());
    (i.updateClickedSlide((F && F[0]) || s.target, F),
      i.emit('tap click', s),
      T < 300 &&
        S - o.lastClickTime < 300 &&
        i.emit('doubleTap doubleClick', s));
  }
  if (
    ((o.lastClickTime = xd()),
    by(() => {
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
  let D;
  if (
    (d.followFinger
      ? (D = m ? i.translate : -i.translate)
      : (D = -o.currentTranslate),
    d.cssMode)
  )
    return;
  if (d.freeMode && d.freeMode.enabled) {
    i.freeMode.onTouchEnd({ currentPos: D });
    return;
  }
  const O = D >= -i.maxTranslate() && !i.params.loop;
  let x = 0,
    P = i.slidesSizesGrid[0];
  for (
    let F = 0;
    F < g.length;
    F += F < d.slidesPerGroupSkip ? 1 : d.slidesPerGroup
  ) {
    const se = F < d.slidesPerGroupSkip - 1 ? 1 : d.slidesPerGroup;
    typeof g[F + se] < 'u'
      ? (O || (D >= g[F] && D < g[F + se])) && ((x = F), (P = g[F + se] - g[F]))
      : (O || D >= g[F]) && ((x = F), (P = g[g.length - 1] - g[g.length - 2]));
  }
  let L = null,
    _ = null;
  d.rewind &&
    (i.isBeginning
      ? (_ =
          d.virtual && d.virtual.enabled && i.virtual
            ? i.virtual.slides.length - 1
            : i.slides.length - 1)
      : i.isEnd && (L = 0));
  const z = (D - g[x]) / P,
    U = x < d.slidesPerGroupSkip - 1 ? 1 : d.slidesPerGroup;
  if (T > d.longSwipesMs) {
    if (!d.longSwipes) {
      i.slideTo(i.activeIndex);
      return;
    }
    (i.swipeDirection === 'next' &&
      (z >= d.longSwipesRatio
        ? i.slideTo(d.rewind && i.isEnd ? L : x + U)
        : i.slideTo(x)),
      i.swipeDirection === 'prev' &&
        (z > 1 - d.longSwipesRatio
          ? i.slideTo(x + U)
          : _ !== null && z < 0 && Math.abs(z) > d.longSwipesRatio
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
      : (i.swipeDirection === 'next' && i.slideTo(L !== null ? L : x + U),
        i.swipeDirection === 'prev' && i.slideTo(_ !== null ? _ : x));
  }
}
function uw() {
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
function yP(r) {
  const i = this;
  i.enabled &&
    (i.allowClick ||
      (i.params.preventClicks && r.preventDefault(),
      i.params.preventClicksPropagation &&
        i.animating &&
        (r.stopPropagation(), r.stopImmediatePropagation())));
}
function gP() {
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
function bP(r) {
  const i = this;
  (yd(i, r.target),
    !(
      i.params.cssMode ||
      (i.params.slidesPerView !== 'auto' && !i.params.autoHeight)
    ) && i.update());
}
function SP() {
  const r = this;
  r.documentTouchHandlerProceeded ||
    ((r.documentTouchHandlerProceeded = !0),
    r.params.touchReleaseOnEdges && (r.el.style.touchAction = 'auto'));
}
const uT = (r, i) => {
  const o = ni(),
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
          uw,
          !0
        )
      : r[g]('observerUpdate', uw, !0),
    c[m]('load', r.onLoad, { capture: !0 }));
};
function EP() {
  const r = this,
    { params: i } = r;
  ((r.onTouchStart = vP.bind(r)),
    (r.onTouchMove = hP.bind(r)),
    (r.onTouchEnd = mP.bind(r)),
    (r.onDocumentTouchStart = SP.bind(r)),
    i.cssMode && (r.onScroll = gP.bind(r)),
    (r.onClick = yP.bind(r)),
    (r.onLoad = bP.bind(r)),
    uT(r, 'on'));
}
function CP() {
  uT(this, 'off');
}
var wP = { attachEvents: EP, detachEvents: CP };
const cw = (r, i) => r.grid && i.grid && i.grid.rows > 1;
function TP() {
  const r = this,
    { realIndex: i, initialized: o, params: s, el: c } = r,
    f = s.breakpoints;
  if (!f || (f && Object.keys(f).length === 0)) return;
  const d = ni(),
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
    T = cw(r, s),
    D = cw(r, S),
    O = r.params.grabCursor,
    x = S.grabCursor,
    P = s.enabled;
  (T && !D
    ? (c.classList.remove(
        `${s.containerModifierClass}grid`,
        `${s.containerModifierClass}grid-column`
      ),
      r.emitContainerClasses())
    : !T &&
      D &&
      (c.classList.add(`${s.containerModifierClass}grid`),
      ((S.grid.fill && S.grid.fill === 'column') ||
        (!S.grid.fill && s.grid.fill === 'column')) &&
        c.classList.add(`${s.containerModifierClass}grid-column`),
      r.emitContainerClasses()),
    O && !x ? r.unsetGrabCursor() : !O && x && r.setGrabCursor(),
    ['navigation', 'pagination', 'scrollbar'].forEach((se) => {
      if (typeof S[se] > 'u') return;
      const ie = s[se] && s[se].enabled,
        de = S[se] && S[se].enabled;
      (ie && !de && r[se].disable(), !ie && de && r[se].enable());
    }));
  const L = S.direction && S.direction !== s.direction,
    _ = s.loop && (S.slidesPerView !== s.slidesPerView || L),
    z = s.loop;
  (L && o && r.changeDirection(), _r(r.params, S));
  const U = r.params.enabled,
    F = r.params.loop;
  (Object.assign(r, {
    allowTouchMove: r.params.allowTouchMove,
    allowSlideNext: r.params.allowSlideNext,
    allowSlidePrev: r.params.allowSlidePrev,
  }),
    P && !U ? r.disable() : !P && U && r.enable(),
    (r.currentBreakpoint = g),
    r.emit('_beforeBreakpoint', S),
    o &&
      (_
        ? (r.loopDestroy(), r.loopCreate(i), r.updateSlides())
        : !z && F
          ? (r.loopCreate(i), r.updateSlides())
          : z && !F && r.loopDestroy()),
    r.emit('breakpoint', S));
}
function xP(r, i, o) {
  if ((i === void 0 && (i = 'window'), !r || (i === 'container' && !o))) return;
  let s = !1;
  const c = Kn(),
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
var RP = { setBreakpoint: TP, getBreakpoint: xP };
function _P(r, i) {
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
function DP() {
  const r = this,
    { classNames: i, params: o, rtl: s, el: c, device: f } = r,
    d = _P(
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
function OP() {
  const r = this,
    { el: i, classNames: o } = r;
  !i ||
    typeof i == 'string' ||
    (i.classList.remove(...o), r.emitContainerClasses());
}
var AP = { addClasses: DP, removeClasses: OP };
function MP() {
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
var LP = { checkOverflow: MP },
  ly = {
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
function kP(r, i) {
  return function (s) {
    s === void 0 && (s = {});
    const c = Object.keys(s)[0],
      f = s[c];
    if (typeof f != 'object' || f === null) {
      _r(i, s);
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
      _r(i, s);
      return;
    }
    (typeof r[c] == 'object' && !('enabled' in r[c]) && (r[c].enabled = !0),
      r[c] || (r[c] = { enabled: !1 }),
      _r(i, s));
  };
}
const Wm = {
    eventsEmitter: AN,
    update: IN,
    translate: WN,
    transition: KN,
    slide: iP,
    loop: uP,
    grabCursor: dP,
    events: wP,
    breakpoints: RP,
    checkOverflow: LP,
    classes: AP,
  },
  qm = {};
let Sy = class Za {
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
      (o = _r({}, o)),
      i && !o.el && (o.el = i));
    const d = ni();
    if (
      o.el &&
      typeof o.el == 'string' &&
      d.querySelectorAll(o.el).length > 1
    ) {
      const E = [];
      return (
        d.querySelectorAll(o.el).forEach((S) => {
          const T = _r({}, o, { el: S });
          E.push(new Za(T));
        }),
        E
      );
    }
    const h = this;
    ((h.__swiper__ = !0),
      (h.support = iT()),
      (h.device = oT({ userAgent: o.userAgent })),
      (h.browser = lT()),
      (h.eventsListeners = {}),
      (h.eventsAnyListeners = []),
      (h.modules = [...h.__modules__]),
      o.modules && Array.isArray(o.modules) && h.modules.push(...o.modules));
    const m = {};
    h.modules.forEach((E) => {
      E({
        params: o,
        swiper: h,
        extendParams: kP(o, m),
        on: h.on.bind(h),
        once: h.once.bind(h),
        off: h.off.bind(h),
        emit: h.emit.bind(h),
      });
    });
    const g = _r({}, ly, m);
    return (
      (h.params = _r({}, g, qm, o)),
      (h.originalParams = _r({}, h.params)),
      (h.passedParams = _r({}, o)),
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
      c = Ea(o, `.${s.slideClass}, swiper-slide`),
      f = aw(c[0]);
    return aw(i) - f;
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
    i.slides = Ea(o, `.${s.slideClass}, swiper-slide`);
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
        T;
      for (let D = g + 1; D < f.length; D += 1)
        f[D] &&
          !T &&
          ((S += Math.ceil(f[D].swiperSlideSize)), (E += 1), S > m && (T = !0));
      for (let D = g - 1; D >= 0; D -= 1)
        f[D] &&
          !T &&
          ((S += f[D].swiperSlideSize), (E += 1), S > m && (T = !0));
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
        d.complete && yd(i, d);
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
        : Ea(s, c())[0])();
    return (
      !d &&
        o.params.createElements &&
        ((d = Iu('div', o.params.wrapperClass)),
        s.append(d),
        Ea(s, `.${o.params.slideClass}`).forEach((h) => {
          d.append(h);
        })),
      Object.assign(o, {
        el: s,
        wrapperEl: d,
        slidesEl:
          o.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : d,
        hostEl: o.isElement ? s.parentNode.host : s,
        mounted: !0,
        rtl: s.dir.toLowerCase() === 'rtl' || Hi(s, 'direction') === 'rtl',
        rtlTranslate:
          o.params.direction === 'horizontal' &&
          (s.dir.toLowerCase() === 'rtl' || Hi(s, 'direction') === 'rtl'),
        wrongRTL: Hi(d, 'display') === '-webkit-box',
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
          ? yd(o, f)
          : f.addEventListener('load', (d) => {
              yd(o, d.target);
            });
      }),
      oy(o),
      (o.initialized = !0),
      oy(o),
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
          (s.el && typeof s.el != 'string' && (s.el.swiper = null), vN(s)),
        (s.destroyed = !0)),
      null
    );
  }
  static extendDefaults(i) {
    _r(qm, i);
  }
  static get extendedDefaults() {
    return qm;
  }
  static get defaults() {
    return ly;
  }
  static installModule(i) {
    Za.prototype.__modules__ || (Za.prototype.__modules__ = []);
    const o = Za.prototype.__modules__;
    typeof i == 'function' && o.indexOf(i) < 0 && o.push(i);
  }
  static use(i) {
    return Array.isArray(i)
      ? (i.forEach((o) => Za.installModule(o)), Za)
      : (Za.installModule(i), Za);
  }
};
Object.keys(Wm).forEach((r) => {
  Object.keys(Wm[r]).forEach((i) => {
    Sy.prototype[i] = Wm[r][i];
  });
});
Sy.use([DN, ON]);
const cT = [
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
function Oo(r) {
  return (
    typeof r == 'object' &&
    r !== null &&
    r.constructor &&
    Object.prototype.toString.call(r).slice(8, -1) === 'Object' &&
    !r.__swiper__
  );
}
function Ll(r, i) {
  const o = ['__proto__', 'constructor', 'prototype'];
  Object.keys(i)
    .filter((s) => o.indexOf(s) < 0)
    .forEach((s) => {
      typeof r[s] > 'u'
        ? (r[s] = i[s])
        : Oo(i[s]) && Oo(r[s]) && Object.keys(i[s]).length > 0
          ? i[s].__swiper__
            ? (r[s] = i[s])
            : Ll(r[s], i[s])
          : (r[s] = i[s]);
    });
}
function fT(r) {
  return (
    r === void 0 && (r = {}),
    r.navigation &&
      typeof r.navigation.nextEl > 'u' &&
      typeof r.navigation.prevEl > 'u'
  );
}
function dT(r) {
  return (
    r === void 0 && (r = {}),
    r.pagination && typeof r.pagination.el > 'u'
  );
}
function pT(r) {
  return (r === void 0 && (r = {}), r.scrollbar && typeof r.scrollbar.el > 'u');
}
function vT(r) {
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
function NP(r) {
  return (
    r === void 0 && (r = ''),
    r
      ? r.includes('swiper-wrapper')
        ? r
        : `swiper-wrapper ${r}`
      : 'swiper-wrapper'
  );
}
function PP(r) {
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
      navigation: T,
      scrollbar: D,
      virtual: O,
      thumbs: x,
    } = i;
  let P, L, _, z, U, F, se, ie;
  (c.includes('thumbs') &&
    s.thumbs &&
    s.thumbs.swiper &&
    !s.thumbs.swiper.destroyed &&
    E.thumbs &&
    (!E.thumbs.swiper || E.thumbs.swiper.destroyed) &&
    (P = !0),
    c.includes('controller') &&
      s.controller &&
      s.controller.control &&
      E.controller &&
      !E.controller.control &&
      (L = !0),
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
      D &&
      !D.el &&
      (z = !0),
    c.includes('navigation') &&
      s.navigation &&
      (s.navigation.prevEl || d) &&
      (s.navigation.nextEl || f) &&
      (E.navigation || E.navigation === !1) &&
      T &&
      !T.prevEl &&
      !T.nextEl &&
      (U = !0));
  const de = (re) => {
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
    (E.loop && !s.loop ? (F = !0) : !E.loop && s.loop ? (se = !0) : (ie = !0)),
    g.forEach((re) => {
      if (Oo(E[re]) && Oo(s[re]))
        (Object.assign(E[re], s[re]),
          (re === 'navigation' || re === 'pagination' || re === 'scrollbar') &&
            'enabled' in s[re] &&
            !s[re].enabled &&
            de(re));
      else {
        const ae = s[re];
        (ae === !0 || ae === !1) &&
        (re === 'navigation' || re === 'pagination' || re === 'scrollbar')
          ? ae === !1 && de(re)
          : (E[re] = s[re]);
      }
    }),
    g.includes('controller') &&
      !L &&
      i.controller &&
      i.controller.control &&
      E.controller &&
      E.controller.control &&
      (i.controller.control = E.controller.control),
    c.includes('children') && o && O && E.virtual.enabled
      ? ((O.slides = o), O.update(!0))
      : c.includes('virtual') &&
        O &&
        E.virtual.enabled &&
        (o && (O.slides = o), O.update(!0)),
    c.includes('children') && o && E.loop && (ie = !0),
    P && x.init() && x.update(!0),
    L && (i.controller.control = E.controller.control),
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
    z &&
      (i.isElement &&
        (!h || typeof h == 'string') &&
        ((h = document.createElement('div')),
        h.classList.add('swiper-scrollbar'),
        h.part.add('scrollbar'),
        i.el.appendChild(h)),
      h && (E.scrollbar.el = h),
      D.init(),
      D.updateSize(),
      D.setTranslate()),
    U &&
      (i.isElement &&
        ((!f || typeof f == 'string') &&
          ((f = document.createElement('div')),
          f.classList.add('swiper-button-next'),
          ow(f, i.hostEl.constructor.nextButtonSvg),
          f.part.add('button-next'),
          i.el.appendChild(f)),
        (!d || typeof d == 'string') &&
          ((d = document.createElement('div')),
          d.classList.add('swiper-button-prev'),
          ow(d, i.hostEl.constructor.prevButtonSvg),
          d.part.add('button-prev'),
          i.el.appendChild(d))),
      f && (E.navigation.nextEl = f),
      d && (E.navigation.prevEl = d),
      T.init(),
      T.update()),
    c.includes('allowSlideNext') && (i.allowSlideNext = s.allowSlideNext),
    c.includes('allowSlidePrev') && (i.allowSlidePrev = s.allowSlidePrev),
    c.includes('direction') && i.changeDirection(s.direction, !1),
    (F || ie) && i.loopDestroy(),
    (se || ie) && i.loopCreate(),
    i.update());
}
function zP(r, i) {
  (r === void 0 && (r = {}), i === void 0 && (i = !0));
  const o = { on: {} },
    s = {},
    c = {};
  (Ll(o, ly), (o._emitClasses = !0), (o.init = !1));
  const f = {},
    d = cT.map((m) => m.replace(/_/, '')),
    h = Object.assign({}, r);
  return (
    Object.keys(h).forEach((m) => {
      typeof r[m] > 'u' ||
        (d.indexOf(m) >= 0
          ? Oo(r[m])
            ? ((o[m] = {}), (c[m] = {}), Ll(o[m], r[m]), Ll(c[m], r[m]))
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
function UP(r, i) {
  let {
    el: o,
    nextEl: s,
    prevEl: c,
    paginationEl: f,
    scrollbarEl: d,
    swiper: h,
  } = r;
  (fT(i) &&
    s &&
    c &&
    ((h.params.navigation.nextEl = s),
    (h.originalParams.navigation.nextEl = s),
    (h.params.navigation.prevEl = c),
    (h.originalParams.navigation.prevEl = c)),
    dT(i) &&
      f &&
      ((h.params.pagination.el = f), (h.originalParams.pagination.el = f)),
    pT(i) &&
      d &&
      ((h.params.scrollbar.el = d), (h.originalParams.scrollbar.el = d)),
    h.init(o));
}
function FP(r, i, o, s, c) {
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
    cT
      .filter((m) => m[0] === '_')
      .map((m) => m.replace(/_/, ''))
      .forEach((m) => {
        if (m in r && m in i)
          if (Oo(r[m]) && Oo(i[m])) {
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
const VP = (r) => {
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
function _d() {
  return (
    (_d = Object.assign
      ? Object.assign.bind()
      : function (r) {
          for (var i = 1; i < arguments.length; i++) {
            var o = arguments[i];
            for (var s in o)
              Object.prototype.hasOwnProperty.call(o, s) && (r[s] = o[s]);
          }
          return r;
        }),
    _d.apply(this, arguments)
  );
}
function hT(r) {
  return (
    r.type && r.type.displayName && r.type.displayName.includes('SwiperSlide')
  );
}
function mT(r) {
  const i = [];
  return (
    wt.Children.toArray(r).forEach((o) => {
      hT(o)
        ? i.push(o)
        : o.props &&
          o.props.children &&
          mT(o.props.children).forEach((s) => i.push(s));
    }),
    i
  );
}
function HP(r) {
  const i = [],
    o = {
      'container-start': [],
      'container-end': [],
      'wrapper-start': [],
      'wrapper-end': [],
    };
  return (
    wt.Children.toArray(r).forEach((s) => {
      if (hT(s)) i.push(s);
      else if (s.props && s.props.slot && o[s.props.slot])
        o[s.props.slot].push(s);
      else if (s.props && s.props.children) {
        const c = mT(s.props.children);
        c.length > 0 ? c.forEach((f) => i.push(f)) : o['container-end'].push(s);
      } else o['container-end'].push(s);
    }),
    { slides: i, slots: o }
  );
}
function IP(r, i, o) {
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
    wt.cloneElement(E, {
      swiper: r,
      style: c,
      key: E.props.virtualIndex || E.key || `slide-${S}`,
    })
  );
}
function Nu(r, i) {
  return typeof window > 'u' ? Z.useEffect(r, i) : Z.useLayoutEffect(r, i);
}
const fw = Z.createContext(null),
  BP = Z.createContext(null),
  Ey = Z.forwardRef(function (r, i) {
    let {
        className: o,
        tag: s = 'div',
        wrapperTag: c = 'div',
        children: f,
        onSwiper: d,
        ...h
      } = r === void 0 ? {} : r,
      m = !1;
    const [g, E] = Z.useState('swiper'),
      [S, T] = Z.useState(null),
      [D, O] = Z.useState(!1),
      x = Z.useRef(!1),
      P = Z.useRef(null),
      L = Z.useRef(null),
      _ = Z.useRef(null),
      z = Z.useRef(null),
      U = Z.useRef(null),
      F = Z.useRef(null),
      se = Z.useRef(null),
      ie = Z.useRef(null),
      { params: de, passedParams: re, rest: ae, events: ue } = zP(h),
      { slides: B, slots: q } = HP(f),
      ne = () => {
        O(!D);
      };
    Object.assign(de.on, {
      _containerClasses(Le, ft) {
        E(ft);
      },
    });
    const pe = () => {
      (Object.assign(de.on, ue), (m = !0));
      const Le = { ...de };
      if (
        (delete Le.wrapperClass,
        (L.current = new Sy(Le)),
        L.current.virtual && L.current.params.virtual.enabled)
      ) {
        L.current.virtual.slides = B;
        const ft = {
          cache: !1,
          slides: B,
          renderExternal: T,
          renderExternalUpdate: !1,
        };
        (Ll(L.current.params.virtual, ft),
          Ll(L.current.originalParams.virtual, ft));
      }
    };
    (P.current || pe(), L.current && L.current.on('_beforeBreakpoint', ne));
    const le = () => {
        m ||
          !ue ||
          !L.current ||
          Object.keys(ue).forEach((Le) => {
            L.current.on(Le, ue[Le]);
          });
      },
      ve = () => {
        !ue ||
          !L.current ||
          Object.keys(ue).forEach((Le) => {
            L.current.off(Le, ue[Le]);
          });
      };
    (Z.useEffect(() => () => {
      L.current && L.current.off('_beforeBreakpoint', ne);
    }),
      Z.useEffect(() => {
        !x.current &&
          L.current &&
          (L.current.emitSlidesClasses(), (x.current = !0));
      }),
      Nu(() => {
        if ((i && (i.current = P.current), !!P.current))
          return (
            L.current.destroyed && pe(),
            UP(
              {
                el: P.current,
                nextEl: U.current,
                prevEl: F.current,
                paginationEl: se.current,
                scrollbarEl: ie.current,
                swiper: L.current,
              },
              de
            ),
            d && !L.current.destroyed && d(L.current),
            () => {
              L.current && !L.current.destroyed && L.current.destroy(!0, !1);
            }
          );
      }, []),
      Nu(() => {
        le();
        const Le = FP(re, _.current, B, z.current, (ft) => ft.key);
        return (
          (_.current = re),
          (z.current = B),
          Le.length &&
            L.current &&
            !L.current.destroyed &&
            PP({
              swiper: L.current,
              slides: B,
              passedParams: re,
              changedParams: Le,
              nextEl: U.current,
              prevEl: F.current,
              scrollbarEl: ie.current,
              paginationEl: se.current,
            }),
          () => {
            ve();
          }
        );
      }),
      Nu(() => {
        VP(L.current);
      }, [S]));
    function Ne() {
      return de.virtual
        ? IP(L.current, B, S)
        : B.map((Le, ft) =>
            wt.cloneElement(Le, { swiper: L.current, swiperSlideIndex: ft })
          );
    }
    return wt.createElement(
      s,
      _d({ ref: P, className: vT(`${g}${o ? ` ${o}` : ''}`) }, ae),
      wt.createElement(
        BP.Provider,
        { value: L.current },
        q['container-start'],
        wt.createElement(
          c,
          { className: NP(de.wrapperClass) },
          q['wrapper-start'],
          Ne(),
          q['wrapper-end']
        ),
        fT(de) &&
          wt.createElement(
            wt.Fragment,
            null,
            wt.createElement('div', {
              ref: F,
              className: 'swiper-button-prev',
            }),
            wt.createElement('div', { ref: U, className: 'swiper-button-next' })
          ),
        pT(de) &&
          wt.createElement('div', { ref: ie, className: 'swiper-scrollbar' }),
        dT(de) &&
          wt.createElement('div', { ref: se, className: 'swiper-pagination' }),
        q['container-end']
      )
    );
  });
Ey.displayName = 'Swiper';
const Cy = Z.forwardRef(function (r, i) {
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
  const S = Z.useRef(null),
    [T, D] = Z.useState('swiper-slide'),
    [O, x] = Z.useState(!1);
  function P(U, F, se) {
    F === S.current && D(se);
  }
  (Nu(() => {
    if (
      (typeof g < 'u' && (S.current.swiperSlideIndex = g),
      i && (i.current = S.current),
      !(!S.current || !f))
    ) {
      if (f.destroyed) {
        T !== 'swiper-slide' && D('swiper-slide');
        return;
      }
      return (
        f.on('_slideClass', P),
        () => {
          f && f.off('_slideClass', P);
        }
      );
    }
  }),
    Nu(() => {
      f && S.current && !f.destroyed && D(f.getSlideClasses(S.current));
    }, [f]));
  const L = {
      isActive: T.indexOf('swiper-slide-active') >= 0,
      isVisible: T.indexOf('swiper-slide-visible') >= 0,
      isPrev: T.indexOf('swiper-slide-prev') >= 0,
      isNext: T.indexOf('swiper-slide-next') >= 0,
    },
    _ = () => (typeof s == 'function' ? s(L) : s),
    z = () => {
      x(!0);
    };
  return wt.createElement(
    o,
    _d(
      {
        ref: S,
        className: vT(`${T}${c ? ` ${c}` : ''}`),
        'data-swiper-slide-index': m,
        onLoad: z,
      },
      E
    ),
    d &&
      wt.createElement(
        fw.Provider,
        { value: L },
        wt.createElement(
          'div',
          {
            className: 'swiper-zoom-container',
            'data-swiper-zoom': typeof d == 'number' ? d : void 0,
          },
          _(),
          h &&
            !O &&
            wt.createElement('div', { className: 'swiper-lazy-preloader' })
        )
      ),
    !d &&
      wt.createElement(
        fw.Provider,
        { value: L },
        _(),
        h &&
          !O &&
          wt.createElement('div', { className: 'swiper-lazy-preloader' })
      )
  );
});
Cy.displayName = 'SwiperSlide';
function jP(r, i, o, s) {
  return (
    r.params.createElements &&
      Object.keys(s).forEach((c) => {
        if (!o[c] && o.auto === !0) {
          let f = Ea(r.el, `.${s[c]}`)[0];
          (f || ((f = Iu('div', s[c])), (f.className = s[c]), r.el.append(f)),
            (o[c] = f),
            (i[c] = f));
        }
      }),
    o
  );
}
function $P(r) {
  return (
    r === void 0 && (r = ''),
    `.${r
      .trim()
      .replace(/([\.:!+\/()[\]])/g, '\\$1')
      .replace(/ /g, '.')}`
  );
}
function yT(r) {
  let { swiper: i, extendParams: o, on: s, emit: c } = r;
  const f = ni();
  let d = !1,
    h = null,
    m = null,
    g,
    E,
    S,
    T;
  (o({
    scrollbar: {
      el: null,
      dragSize: 'auto',
      hide: !1,
      draggable: !1,
      snapOnRelease: !0,
      lockClass: 'swiper-scrollbar-lock',
      dragClass: 'swiper-scrollbar-drag',
      scrollbarDisabledClass: 'swiper-scrollbar-disabled',
      horizontalClass: 'swiper-scrollbar-horizontal',
      verticalClass: 'swiper-scrollbar-vertical',
    },
  }),
    (i.scrollbar = { el: null, dragEl: null }));
  function D() {
    if (!i.params.scrollbar.el || !i.scrollbar.el) return;
    const { scrollbar: B, rtlTranslate: q } = i,
      { dragEl: ne, el: pe } = B,
      le = i.params.scrollbar,
      ve = i.params.loop ? i.progressLoop : i.progress;
    let Ne = E,
      Le = (S - E) * ve;
    (q
      ? ((Le = -Le),
        Le > 0 ? ((Ne = E - Le), (Le = 0)) : -Le + E > S && (Ne = S + Le))
      : Le < 0
        ? ((Ne = E + Le), (Le = 0))
        : Le + E > S && (Ne = S - Le),
      i.isHorizontal()
        ? ((ne.style.transform = `translate3d(${Le}px, 0, 0)`),
          (ne.style.width = `${Ne}px`))
        : ((ne.style.transform = `translate3d(0px, ${Le}px, 0)`),
          (ne.style.height = `${Ne}px`)),
      le.hide &&
        (clearTimeout(h),
        (pe.style.opacity = 1),
        (h = setTimeout(() => {
          ((pe.style.opacity = 0), (pe.style.transitionDuration = '400ms'));
        }, 1e3))));
  }
  function O(B) {
    !i.params.scrollbar.el ||
      !i.scrollbar.el ||
      (i.scrollbar.dragEl.style.transitionDuration = `${B}ms`);
  }
  function x() {
    if (!i.params.scrollbar.el || !i.scrollbar.el) return;
    const { scrollbar: B } = i,
      { dragEl: q, el: ne } = B;
    ((q.style.width = ''),
      (q.style.height = ''),
      (S = i.isHorizontal() ? ne.offsetWidth : ne.offsetHeight),
      (T =
        i.size /
        (i.virtualSize +
          i.params.slidesOffsetBefore -
          (i.params.centeredSlides ? i.snapGrid[0] : 0))),
      i.params.scrollbar.dragSize === 'auto'
        ? (E = S * T)
        : (E = parseInt(i.params.scrollbar.dragSize, 10)),
      i.isHorizontal()
        ? (q.style.width = `${E}px`)
        : (q.style.height = `${E}px`),
      T >= 1 ? (ne.style.display = 'none') : (ne.style.display = ''),
      i.params.scrollbar.hide && (ne.style.opacity = 0),
      i.params.watchOverflow &&
        i.enabled &&
        B.el.classList[i.isLocked ? 'add' : 'remove'](
          i.params.scrollbar.lockClass
        ));
  }
  function P(B) {
    return i.isHorizontal() ? B.clientX : B.clientY;
  }
  function L(B) {
    const { scrollbar: q, rtlTranslate: ne } = i,
      { el: pe } = q;
    let le;
    ((le =
      (P(B) -
        SN(pe)[i.isHorizontal() ? 'left' : 'top'] -
        (g !== null ? g : E / 2)) /
      (S - E)),
      (le = Math.max(Math.min(le, 1), 0)),
      ne && (le = 1 - le));
    const ve = i.minTranslate() + (i.maxTranslate() - i.minTranslate()) * le;
    (i.updateProgress(ve),
      i.setTranslate(ve),
      i.updateActiveIndex(),
      i.updateSlidesClasses());
  }
  function _(B) {
    const q = i.params.scrollbar,
      { scrollbar: ne, wrapperEl: pe } = i,
      { el: le, dragEl: ve } = ne;
    ((d = !0),
      (g =
        B.target === ve
          ? P(B) -
            B.target.getBoundingClientRect()[i.isHorizontal() ? 'left' : 'top']
          : null),
      B.preventDefault(),
      B.stopPropagation(),
      (pe.style.transitionDuration = '100ms'),
      (ve.style.transitionDuration = '100ms'),
      L(B),
      clearTimeout(m),
      (le.style.transitionDuration = '0ms'),
      q.hide && (le.style.opacity = 1),
      i.params.cssMode && (i.wrapperEl.style['scroll-snap-type'] = 'none'),
      c('scrollbarDragStart', B));
  }
  function z(B) {
    const { scrollbar: q, wrapperEl: ne } = i,
      { el: pe, dragEl: le } = q;
    d &&
      (B.preventDefault && B.cancelable
        ? B.preventDefault()
        : (B.returnValue = !1),
      L(B),
      (ne.style.transitionDuration = '0ms'),
      (pe.style.transitionDuration = '0ms'),
      (le.style.transitionDuration = '0ms'),
      c('scrollbarDragMove', B));
  }
  function U(B) {
    const q = i.params.scrollbar,
      { scrollbar: ne, wrapperEl: pe } = i,
      { el: le } = ne;
    d &&
      ((d = !1),
      i.params.cssMode &&
        ((i.wrapperEl.style['scroll-snap-type'] = ''),
        (pe.style.transitionDuration = '')),
      q.hide &&
        (clearTimeout(m),
        (m = by(() => {
          ((le.style.opacity = 0), (le.style.transitionDuration = '400ms'));
        }, 1e3))),
      c('scrollbarDragEnd', B),
      q.snapOnRelease && i.slideToClosest());
  }
  function F(B) {
    const { scrollbar: q, params: ne } = i,
      pe = q.el;
    if (!pe) return;
    const le = pe,
      ve = ne.passiveListeners ? { passive: !1, capture: !1 } : !1,
      Ne = ne.passiveListeners ? { passive: !0, capture: !1 } : !1;
    if (!le) return;
    const Le = B === 'on' ? 'addEventListener' : 'removeEventListener';
    (le[Le]('pointerdown', _, ve),
      f[Le]('pointermove', z, ve),
      f[Le]('pointerup', U, Ne));
  }
  function se() {
    !i.params.scrollbar.el || !i.scrollbar.el || F('on');
  }
  function ie() {
    !i.params.scrollbar.el || !i.scrollbar.el || F('off');
  }
  function de() {
    const { scrollbar: B, el: q } = i;
    i.params.scrollbar = jP(i, i.originalParams.scrollbar, i.params.scrollbar, {
      el: 'swiper-scrollbar',
    });
    const ne = i.params.scrollbar;
    if (!ne.el) return;
    let pe;
    if (
      (typeof ne.el == 'string' &&
        i.isElement &&
        (pe = i.el.querySelector(ne.el)),
      !pe && typeof ne.el == 'string')
    ) {
      if (((pe = f.querySelectorAll(ne.el)), !pe.length)) return;
    } else pe || (pe = ne.el);
    (i.params.uniqueNavElements &&
      typeof ne.el == 'string' &&
      pe.length > 1 &&
      q.querySelectorAll(ne.el).length === 1 &&
      (pe = q.querySelector(ne.el)),
      pe.length > 0 && (pe = pe[0]),
      pe.classList.add(
        i.isHorizontal() ? ne.horizontalClass : ne.verticalClass
      ));
    let le;
    (pe &&
      ((le = pe.querySelector($P(i.params.scrollbar.dragClass))),
      le || ((le = Iu('div', i.params.scrollbar.dragClass)), pe.append(le))),
      Object.assign(B, { el: pe, dragEl: le }),
      ne.draggable && se(),
      pe &&
        pe.classList[i.enabled ? 'remove' : 'add'](
          ...zi(i.params.scrollbar.lockClass)
        ));
  }
  function re() {
    const B = i.params.scrollbar,
      q = i.scrollbar.el;
    (q &&
      q.classList.remove(
        ...zi(i.isHorizontal() ? B.horizontalClass : B.verticalClass)
      ),
      ie());
  }
  (s('changeDirection', () => {
    if (!i.scrollbar || !i.scrollbar.el) return;
    const B = i.params.scrollbar;
    let { el: q } = i.scrollbar;
    ((q = TN(q)),
      q.forEach((ne) => {
        (ne.classList.remove(B.horizontalClass, B.verticalClass),
          ne.classList.add(
            i.isHorizontal() ? B.horizontalClass : B.verticalClass
          ));
      }));
  }),
    s('init', () => {
      i.params.scrollbar.enabled === !1 ? ue() : (de(), x(), D());
    }),
    s('update resize observerUpdate lock unlock changeDirection', () => {
      x();
    }),
    s('setTranslate', () => {
      D();
    }),
    s('setTransition', (B, q) => {
      O(q);
    }),
    s('enable disable', () => {
      const { el: B } = i.scrollbar;
      B &&
        B.classList[i.enabled ? 'remove' : 'add'](
          ...zi(i.params.scrollbar.lockClass)
        );
    }),
    s('destroy', () => {
      re();
    }));
  const ae = () => {
      (i.el.classList.remove(...zi(i.params.scrollbar.scrollbarDisabledClass)),
        i.scrollbar.el &&
          i.scrollbar.el.classList.remove(
            ...zi(i.params.scrollbar.scrollbarDisabledClass)
          ),
        de(),
        x(),
        D());
    },
    ue = () => {
      (i.el.classList.add(...zi(i.params.scrollbar.scrollbarDisabledClass)),
        i.scrollbar.el &&
          i.scrollbar.el.classList.add(
            ...zi(i.params.scrollbar.scrollbarDisabledClass)
          ),
        re());
    };
  Object.assign(i.scrollbar, {
    enable: ae,
    disable: ue,
    updateSize: x,
    setTranslate: D,
    init: de,
    destroy: re,
  });
}
function gT(r) {
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
      const { slidesPerView: P } = i.params,
        { rows: L, fill: _ } = i.params.grid,
        z =
          i.virtual && i.params.virtual.enabled
            ? i.virtual.slides.length
            : x.length;
      ((d = Math.floor(z / L)),
        Math.floor(z / L) === z / L ? (c = z) : (c = Math.ceil(z / L) * L),
        P !== 'auto' && _ === 'row' && (c = Math.max(c, P * L)),
        (f = c / L));
    },
    E = () => {
      i.slides &&
        i.slides.forEach((x) => {
          x.swiperSlideGridSet &&
            ((x.style.height = ''),
            (x.style[i.getDirectionLabel('margin-top')] = ''));
        });
    },
    S = (x, P, L) => {
      const { slidesPerGroup: _ } = i.params,
        z = m(),
        { rows: U, fill: F } = i.params.grid,
        se =
          i.virtual && i.params.virtual.enabled
            ? i.virtual.slides.length
            : L.length;
      let ie, de, re;
      if (F === 'row' && _ > 1) {
        const ae = Math.floor(x / (_ * U)),
          ue = x - U * _ * ae,
          B = ae === 0 ? _ : Math.min(Math.ceil((se - ae * U * _) / U), _);
        ((re = Math.floor(ue / B)),
          (de = ue - re * B + ae * _),
          (ie = de + (re * c) / U),
          (P.style.order = ie));
      } else
        F === 'column'
          ? ((de = Math.floor(x / U)),
            (re = x - de * U),
            (de > d || (de === d && re === U - 1)) &&
              ((re += 1), re >= U && ((re = 0), (de += 1))))
          : ((re = Math.floor(x / f)), (de = x - re * f));
      ((P.row = re),
        (P.column = de),
        (P.style.height = `calc((100% - ${(U - 1) * z}px) / ${U})`),
        (P.style[i.getDirectionLabel('margin-top')] =
          re !== 0 ? z && `${z}px` : ''),
        (P.swiperSlideGridSet = !0));
    },
    T = (x, P) => {
      const { centeredSlides: L, roundLengths: _ } = i.params,
        z = m(),
        { rows: U } = i.params.grid;
      if (
        ((i.virtualSize = (x + z) * c),
        (i.virtualSize = Math.ceil(i.virtualSize / U) - z),
        i.params.cssMode ||
          (i.wrapperEl.style[i.getDirectionLabel('width')] =
            `${i.virtualSize + z}px`),
        L)
      ) {
        const F = [];
        for (let se = 0; se < P.length; se += 1) {
          let ie = P[se];
          (_ && (ie = Math.floor(ie)),
            P[se] < i.virtualSize + P[0] && F.push(ie));
        }
        (P.splice(0, P.length), P.push(...F));
      }
    },
    D = () => {
      h = i.params.grid && i.params.grid.rows > 1;
    },
    O = () => {
      const { params: x, el: P } = i,
        L = x.grid && x.grid.rows > 1;
      (h && !L
        ? (P.classList.remove(
            `${x.containerModifierClass}grid`,
            `${x.containerModifierClass}grid-column`
          ),
          (d = 1),
          i.emitContainerClasses())
        : !h &&
          L &&
          (P.classList.add(`${x.containerModifierClass}grid`),
          x.grid.fill === 'column' &&
            P.classList.add(`${x.containerModifierClass}grid-column`),
          i.emitContainerClasses()),
        (h = L));
    };
  (s('init', D),
    s('update', O),
    (i.grid = {
      initSlides: g,
      unsetSlides: E,
      updateSlide: S,
      updateWrapperSize: T,
    }));
}
const YP = Tn.div.withConfig({
    displayName: 'Card__CardWrapper',
    componentId: 'sc-h41vf0-0',
  })([
    'max-width:340px;background:#fff;border-radius:16px;padding:16px;margin:12px auto;box-shadow:0 8px 16px rgba(0,0,0,0.1);transition:transform 0.2s ease,box-shadow 0.3s ease;&:hover{transform:translateY(-4px);box-shadow:0 12px 24px rgba(0,0,0,0.15);}',
  ]),
  GP = Tn.img.withConfig({
    displayName: 'Card__StyledImg',
    componentId: 'sc-h41vf0-1',
  })(['width:100%;border-radius:12px;display:block;margin-bottom:12px;']),
  WP = Tn.p.withConfig({
    displayName: 'Card__ProductId',
    componentId: 'sc-h41vf0-2',
  })(['font-size:0.8rem;color:#888;margin:4px 0;']),
  qP = Tn.p.withConfig({
    displayName: 'Card__ProductName',
    componentId: 'sc-h41vf0-3',
  })(['font-size:1.2rem;font-weight:600;color:#333;margin:4px 0;']),
  XP = Tn.p.withConfig({
    displayName: 'Card__ProductPrice',
    componentId: 'sc-h41vf0-4',
  })(['font-size:1.1rem;font-weight:bold;color:#007b55;margin:4px 0 12px 0;']);
function wy({ product: r }) {
  return Bn(YP, {
    children: [
      Me(GP, { src: r.img, alt: r.name }),
      Bn(WP, { children: ['ID: ', r.id] }),
      Me(qP, { children: r.name }),
      Bn(XP, { children: ['$', r.price] }),
    ],
  });
}
const QP = Tn('div').withConfig({
  displayName: 'Cards__StyledBaseField',
  componentId: 'sc-in0nuh-0',
})([
  'width:100%;max-width:1200px;margin:0 auto;padding:1rem;box-sizing:border-box;.swiper{width:100%;height:auto;}.swiper-slide{display:flex;justify-content:center;align-items:center;height:100%;}.swiper-scrollbar{margin-top:8px;}',
]);
function KP({
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
  return Me(QP, {
    children: Me(Ey, {
      scrollbar: { hide: !0 },
      modules: [yT, gT],
      spaceBetween: 10,
      slidesPerView: h,
      grid: { rows: d, fill: 'row' },
      children: r.map((g) =>
        Me(
          Cy,
          {
            onClick: () => m(g.id),
            children: Me(wy, {
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
const JP = Tn('div').withConfig({
  displayName: 'Catalog__StyledBaseField',
  componentId: 'sc-lby759-0',
})(['width:90%;']);
function ZP({
  products: r,
  card: i,
  rows: o,
  setCard: s,
  setProductState: c,
  setIsOpenModal: f,
  isOpenModal: d,
}) {
  return Bn(JP, {
    children: [
      Me('h2', { children: 'Catalog' }),
      Me(KP, {
        products: r,
        card: i,
        rows: o,
        setCard: s,
        setProductState: c,
        setIsOpenModal: f,
        isOpenModal: d,
        url: '',
        endPoint: '',
      }),
    ],
  });
}
var Gu = (r) => r.type === 'checkbox',
  Do = (r) => r instanceof Date,
  ir = (r) => r == null;
const bT = (r) => typeof r == 'object';
var un = (r) => !ir(r) && !Array.isArray(r) && bT(r) && !Do(r),
  ez = (r) =>
    un(r) && r.target ? (Gu(r.target) ? r.target.checked : r.target.value) : r,
  tz = (r) => r.substring(0, r.search(/\.\d+(\.|$)/)) || r,
  nz = (r, i) => r.has(tz(i)),
  rz = (r) => {
    const i = r.constructor && r.constructor.prototype;
    return un(i) && i.hasOwnProperty('isPrototypeOf');
  },
  Ty =
    typeof window < 'u' &&
    typeof window.HTMLElement < 'u' &&
    typeof document < 'u';
function Mn(r) {
  let i;
  const o = Array.isArray(r),
    s = typeof FileList < 'u' ? r instanceof FileList : !1;
  if (r instanceof Date) i = new Date(r);
  else if (!(Ty && (r instanceof Blob || s)) && (o || un(r)))
    if (((i = o ? [] : {}), !o && !rz(r))) i = r;
    else for (const c in r) r.hasOwnProperty(c) && (i[c] = Mn(r[c]));
  else return r;
  return i;
}
var Ld = (r) => /^\w*$/.test(r),
  vn = (r) => r === void 0,
  xy = (r) => (Array.isArray(r) ? r.filter(Boolean) : []),
  Ry = (r) => xy(r.replace(/["|']|\]/g, '').split(/\.|\[/)),
  Ue = (r, i, o) => {
    if (!i || !un(r)) return o;
    const s = (Ld(i) ? [i] : Ry(i)).reduce((c, f) => (ir(c) ? c : c[f]), r);
    return vn(s) || s === r ? (vn(r[i]) ? o : r[i]) : s;
  },
  Sa = (r) => typeof r == 'boolean',
  Qt = (r, i, o) => {
    let s = -1;
    const c = Ld(i) ? [i] : Ry(i),
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
const dw = { BLUR: 'blur', FOCUS_OUT: 'focusout', CHANGE: 'change' },
  ea = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
    onTouched: 'onTouched',
    all: 'all',
  },
  Ja = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate',
  },
  az = wt.createContext(null);
az.displayName = 'HookFormContext';
var iz = (r, i, o, s = !0) => {
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
const oz = typeof window < 'u' ? Z.useLayoutEffect : Z.useEffect;
var Ca = (r) => typeof r == 'string',
  lz = (r, i, o, s, c) =>
    Ca(r)
      ? (s && i.watch.add(r), Ue(o, r, c))
      : Array.isArray(r)
        ? r.map((f) => (s && i.watch.add(f), Ue(o, f)))
        : (s && (i.watchAll = !0), o),
  sz = (r, i, o, s, c) =>
    i
      ? {
          ...o[r],
          types: { ...(o[r] && o[r].types ? o[r].types : {}), [s]: c || !0 },
        }
      : {},
  Pu = (r) => (Array.isArray(r) ? r : [r]),
  pw = () => {
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
  sy = (r) => ir(r) || !bT(r);
function Fi(r, i, o = new WeakSet()) {
  if (sy(r) || sy(i)) return r === i;
  if (Do(r) && Do(i)) return r.getTime() === i.getTime();
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
        (Do(d) && Do(h)) ||
        (un(d) && un(h)) ||
        (Array.isArray(d) && Array.isArray(h))
          ? !Fi(d, h, o)
          : d !== h
      )
        return !1;
    }
  }
  return !0;
}
var vr = (r) => un(r) && !Object.keys(r).length,
  _y = (r) => r.type === 'file',
  ta = (r) => typeof r == 'function',
  Dd = (r) => {
    if (!Ty) return !1;
    const i = r ? r.ownerDocument : 0;
    return (
      r instanceof
      (i && i.defaultView ? i.defaultView.HTMLElement : HTMLElement)
    );
  },
  ST = (r) => r.type === 'select-multiple',
  Dy = (r) => r.type === 'radio',
  uz = (r) => Dy(r) || Gu(r),
  Xm = (r) => Dd(r) && r.isConnected;
function cz(r, i) {
  const o = i.slice(0, -1).length;
  let s = 0;
  for (; s < o; ) r = vn(r) ? s++ : r[i[s++]];
  return r;
}
function fz(r) {
  for (const i in r) if (r.hasOwnProperty(i) && !vn(r[i])) return !1;
  return !0;
}
function pn(r, i) {
  const o = Array.isArray(i) ? i : Ld(i) ? [i] : Ry(i),
    s = o.length === 1 ? r : cz(r, o),
    c = o.length - 1,
    f = o[c];
  return (
    s && delete s[f],
    c !== 0 &&
      ((un(s) && vr(s)) || (Array.isArray(s) && fz(s))) &&
      pn(r, o.slice(0, -1)),
    r
  );
}
var ET = (r) => {
  for (const i in r) if (ta(r[i])) return !0;
  return !1;
};
function Od(r, i = {}) {
  const o = Array.isArray(r);
  if (un(r) || o)
    for (const s in r)
      Array.isArray(r[s]) || (un(r[s]) && !ET(r[s]))
        ? ((i[s] = Array.isArray(r[s]) ? [] : {}), Od(r[s], i[s]))
        : ir(r[s]) || (i[s] = !0);
  return i;
}
function CT(r, i, o) {
  const s = Array.isArray(r);
  if (un(r) || s)
    for (const c in r)
      Array.isArray(r[c]) || (un(r[c]) && !ET(r[c]))
        ? vn(i) || sy(o[c])
          ? (o[c] = Array.isArray(r[c]) ? Od(r[c], []) : { ...Od(r[c]) })
          : CT(r[c], ir(i) ? {} : i[c], o[c])
        : (o[c] = !Fi(r[c], i[c]));
  return o;
}
var Mu = (r, i) => CT(r, i, Od(i));
const vw = { value: !1, isValid: !1 },
  hw = { value: !0, isValid: !0 };
var wT = (r) => {
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
            ? hw
            : { value: r[0].value, isValid: !0 }
          : hw
        : vw;
    }
    return vw;
  },
  TT = (r, { valueAsNumber: i, valueAsDate: o, setValueAs: s }) =>
    vn(r)
      ? r
      : i
        ? r === ''
          ? NaN
          : r && +r
        : o && Ca(r)
          ? new Date(r)
          : s
            ? s(r)
            : r;
const mw = { isValid: !1, value: null };
var xT = (r) =>
  Array.isArray(r)
    ? r.reduce(
        (i, o) =>
          o && o.checked && !o.disabled ? { isValid: !0, value: o.value } : i,
        mw
      )
    : mw;
function yw(r) {
  const i = r.ref;
  return _y(i)
    ? i.files
    : Dy(i)
      ? xT(r.refs).value
      : ST(i)
        ? [...i.selectedOptions].map(({ value: o }) => o)
        : Gu(i)
          ? wT(r.refs).value
          : TT(vn(i.value) ? r.ref.value : i.value, r);
}
var dz = (r, i, o, s) => {
    const c = {};
    for (const f of r) {
      const d = Ue(i, f);
      d && Qt(c, f, d._f);
    }
    return {
      criteriaMode: o,
      names: [...r],
      fields: c,
      shouldUseNativeValidation: s,
    };
  },
  Ad = (r) => r instanceof RegExp,
  Lu = (r) =>
    vn(r)
      ? r
      : Ad(r)
        ? r.source
        : un(r)
          ? Ad(r.value)
            ? r.value.source
            : r.value
          : r,
  gw = (r) => ({
    isOnSubmit: !r || r === ea.onSubmit,
    isOnBlur: r === ea.onBlur,
    isOnChange: r === ea.onChange,
    isOnAll: r === ea.all,
    isOnTouch: r === ea.onTouched,
  });
const bw = 'AsyncFunction';
var pz = (r) =>
    !!r &&
    !!r.validate &&
    !!(
      (ta(r.validate) && r.validate.constructor.name === bw) ||
      (un(r.validate) &&
        Object.values(r.validate).find((i) => i.constructor.name === bw))
    ),
  vz = (r) =>
    r.mount &&
    (r.required ||
      r.min ||
      r.max ||
      r.maxLength ||
      r.minLength ||
      r.pattern ||
      r.validate),
  Sw = (r, i, o) =>
    !o &&
    (i.watchAll ||
      i.watch.has(r) ||
      [...i.watch].some(
        (s) => r.startsWith(s) && /^\.\w+/.test(r.slice(s.length))
      ));
const zu = (r, i, o, s) => {
  for (const c of o || Object.keys(r)) {
    const f = Ue(r, c);
    if (f) {
      const { _f: d, ...h } = f;
      if (d) {
        if (d.refs && d.refs[0] && i(d.refs[0], c) && !s) return !0;
        if (d.ref && i(d.ref, d.name) && !s) return !0;
        if (zu(h, i)) break;
      } else if (un(h) && zu(h, i)) break;
    }
  }
};
function Ew(r, i, o) {
  const s = Ue(r, o);
  if (s || Ld(o)) return { error: s, name: o };
  const c = o.split('.');
  for (; c.length; ) {
    const f = c.join('.'),
      d = Ue(i, f),
      h = Ue(r, f);
    if (d && !Array.isArray(d) && o !== f) return { name: o };
    if (h && h.type) return { name: f, error: h };
    if (h && h.root && h.root.type) return { name: `${f}.root`, error: h.root };
    c.pop();
  }
  return { name: o };
}
var hz = (r, i, o, s) => {
    o(r);
    const { name: c, ...f } = r;
    return (
      vr(f) ||
      Object.keys(f).length >= Object.keys(i).length ||
      Object.keys(f).find((d) => i[d] === (!s || ea.all))
    );
  },
  mz = (r, i, o) =>
    !r ||
    !i ||
    r === i ||
    Pu(r).some((s) => s && (o ? s === i : s.startsWith(i) || i.startsWith(s))),
  yz = (r, i, o, s, c) =>
    c.isOnAll
      ? !1
      : !o && c.isOnTouch
        ? !(i || r)
        : (o ? s.isOnBlur : c.isOnBlur)
          ? !r
          : (o ? s.isOnChange : c.isOnChange)
            ? r
            : !0,
  gz = (r, i) => !xy(Ue(r, i)).length && pn(r, i),
  bz = (r, i, o) => {
    const s = Pu(Ue(r, o));
    return (Qt(s, 'root', i[o]), Qt(r, o, s), r);
  },
  gd = (r) => Ca(r);
function Cw(r, i, o = 'validate') {
  if (gd(r) || (Array.isArray(r) && r.every(gd)) || (Sa(r) && !r))
    return { type: o, message: gd(r) ? r : '', ref: i };
}
var Ml = (r) => (un(r) && !Ad(r) ? r : { value: r, message: '' }),
  ww = async (r, i, o, s, c, f) => {
    const {
        ref: d,
        refs: h,
        required: m,
        maxLength: g,
        minLength: E,
        min: S,
        max: T,
        pattern: D,
        validate: O,
        name: x,
        valueAsNumber: P,
        mount: L,
      } = r._f,
      _ = Ue(o, x);
    if (!L || i.has(x)) return {};
    const z = h ? h[0] : d,
      U = (B) => {
        c &&
          z.reportValidity &&
          (z.setCustomValidity(Sa(B) ? '' : B || ''), z.reportValidity());
      },
      F = {},
      se = Dy(d),
      ie = Gu(d),
      de = se || ie,
      re =
        ((P || _y(d)) && vn(d.value) && vn(_)) ||
        (Dd(d) && d.value === '') ||
        _ === '' ||
        (Array.isArray(_) && !_.length),
      ae = sz.bind(null, x, s, F),
      ue = (B, q, ne, pe = Ja.maxLength, le = Ja.minLength) => {
        const ve = B ? q : ne;
        F[x] = {
          type: B ? pe : le,
          message: ve,
          ref: d,
          ...ae(B ? pe : le, ve),
        };
      };
    if (
      f
        ? !Array.isArray(_) || !_.length
        : m &&
          ((!de && (re || ir(_))) ||
            (Sa(_) && !_) ||
            (ie && !wT(h).isValid) ||
            (se && !xT(h).isValid))
    ) {
      const { value: B, message: q } = gd(m)
        ? { value: !!m, message: m }
        : Ml(m);
      if (
        B &&
        ((F[x] = {
          type: Ja.required,
          message: q,
          ref: z,
          ...ae(Ja.required, q),
        }),
        !s)
      )
        return (U(q), F);
    }
    if (!re && (!ir(S) || !ir(T))) {
      let B, q;
      const ne = Ml(T),
        pe = Ml(S);
      if (!ir(_) && !isNaN(_)) {
        const le = d.valueAsNumber || (_ && +_);
        (ir(ne.value) || (B = le > ne.value),
          ir(pe.value) || (q = le < pe.value));
      } else {
        const le = d.valueAsDate || new Date(_),
          ve = (ft) => new Date(new Date().toDateString() + ' ' + ft),
          Ne = d.type == 'time',
          Le = d.type == 'week';
        (Ca(ne.value) &&
          _ &&
          (B = Ne
            ? ve(_) > ve(ne.value)
            : Le
              ? _ > ne.value
              : le > new Date(ne.value)),
          Ca(pe.value) &&
            _ &&
            (q = Ne
              ? ve(_) < ve(pe.value)
              : Le
                ? _ < pe.value
                : le < new Date(pe.value)));
      }
      if ((B || q) && (ue(!!B, ne.message, pe.message, Ja.max, Ja.min), !s))
        return (U(F[x].message), F);
    }
    if ((g || E) && !re && (Ca(_) || (f && Array.isArray(_)))) {
      const B = Ml(g),
        q = Ml(E),
        ne = !ir(B.value) && _.length > +B.value,
        pe = !ir(q.value) && _.length < +q.value;
      if ((ne || pe) && (ue(ne, B.message, q.message), !s))
        return (U(F[x].message), F);
    }
    if (D && !re && Ca(_)) {
      const { value: B, message: q } = Ml(D);
      if (
        Ad(B) &&
        !_.match(B) &&
        ((F[x] = {
          type: Ja.pattern,
          message: q,
          ref: d,
          ...ae(Ja.pattern, q),
        }),
        !s)
      )
        return (U(q), F);
    }
    if (O) {
      if (ta(O)) {
        const B = await O(_, o),
          q = Cw(B, z);
        if (q && ((F[x] = { ...q, ...ae(Ja.validate, q.message) }), !s))
          return (U(q.message), F);
      } else if (un(O)) {
        let B = {};
        for (const q in O) {
          if (!vr(B) && !s) break;
          const ne = Cw(await O[q](_, o), z, q);
          ne &&
            ((B = { ...ne, ...ae(q, ne.message) }),
            U(ne.message),
            s && (F[x] = B));
        }
        if (!vr(B) && ((F[x] = { ref: z, ...B }), !s)) return F;
      }
    }
    return (U(!0), F);
  };
const Sz = {
  mode: ea.onSubmit,
  reValidateMode: ea.onChange,
  shouldFocusError: !0,
};
function Ez(r = {}) {
  let i = { ...Sz, ...r },
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
  const T = { array: pw(), state: pw() },
    D = i.criteriaMode === ea.all,
    O = (R) => (V) => {
      (clearTimeout(g), (g = setTimeout(R, V)));
    },
    x = async (R) => {
      if (!i.disabled && (E.isValid || S.isValid || R)) {
        const V = i.resolver ? vr((await ie()).errors) : await re(s, !0);
        V !== o.isValid && T.state.next({ isValid: V });
      }
    },
    P = (R, V) => {
      !i.disabled &&
        (E.isValidating ||
          E.validatingFields ||
          S.isValidating ||
          S.validatingFields) &&
        ((R || Array.from(h.mount)).forEach((W) => {
          W && (V ? Qt(o.validatingFields, W, V) : pn(o.validatingFields, W));
        }),
        T.state.next({
          validatingFields: o.validatingFields,
          isValidating: !vr(o.validatingFields),
        }));
    },
    L = (R, V = [], W, me, X = !0, ee = !0) => {
      if (me && W && !i.disabled) {
        if (((d.action = !0), ee && Array.isArray(Ue(s, R)))) {
          const De = W(Ue(s, R), me.argA, me.argB);
          X && Qt(s, R, De);
        }
        if (ee && Array.isArray(Ue(o.errors, R))) {
          const De = W(Ue(o.errors, R), me.argA, me.argB);
          (X && Qt(o.errors, R, De), gz(o.errors, R));
        }
        if (
          (E.touchedFields || S.touchedFields) &&
          ee &&
          Array.isArray(Ue(o.touchedFields, R))
        ) {
          const De = W(Ue(o.touchedFields, R), me.argA, me.argB);
          X && Qt(o.touchedFields, R, De);
        }
        ((E.dirtyFields || S.dirtyFields) && (o.dirtyFields = Mu(c, f)),
          T.state.next({
            name: R,
            isDirty: ue(R, V),
            dirtyFields: o.dirtyFields,
            errors: o.errors,
            isValid: o.isValid,
          }));
      } else Qt(f, R, V);
    },
    _ = (R, V) => {
      (Qt(o.errors, R, V), T.state.next({ errors: o.errors }));
    },
    z = (R) => {
      ((o.errors = R), T.state.next({ errors: o.errors, isValid: !1 }));
    },
    U = (R, V, W, me) => {
      const X = Ue(s, R);
      if (X) {
        const ee = Ue(f, R, vn(W) ? Ue(c, R) : W);
        (vn(ee) || (me && me.defaultChecked) || V
          ? Qt(f, R, V ? ee : yw(X._f))
          : ne(R, ee),
          d.mount && x());
      }
    },
    F = (R, V, W, me, X) => {
      let ee = !1,
        De = !1;
      const Be = { name: R };
      if (!i.disabled) {
        if (!W || me) {
          (E.isDirty || S.isDirty) &&
            ((De = o.isDirty),
            (o.isDirty = Be.isDirty = ue()),
            (ee = De !== Be.isDirty));
          const Ze = Fi(Ue(c, R), V);
          ((De = !!Ue(o.dirtyFields, R)),
            Ze ? pn(o.dirtyFields, R) : Qt(o.dirtyFields, R, !0),
            (Be.dirtyFields = o.dirtyFields),
            (ee = ee || ((E.dirtyFields || S.dirtyFields) && De !== !Ze)));
        }
        if (W) {
          const Ze = Ue(o.touchedFields, R);
          Ze ||
            (Qt(o.touchedFields, R, W),
            (Be.touchedFields = o.touchedFields),
            (ee = ee || ((E.touchedFields || S.touchedFields) && Ze !== W)));
        }
        ee && X && T.state.next(Be);
      }
      return ee ? Be : {};
    },
    se = (R, V, W, me) => {
      const X = Ue(o.errors, R),
        ee = (E.isValid || S.isValid) && Sa(V) && o.isValid !== V;
      if (
        (i.delayError && W
          ? ((m = O(() => _(R, W))), m(i.delayError))
          : (clearTimeout(g),
            (m = null),
            W ? Qt(o.errors, R, W) : pn(o.errors, R)),
        (W ? !Fi(X, W) : X) || !vr(me) || ee)
      ) {
        const De = {
          ...me,
          ...(ee && Sa(V) ? { isValid: V } : {}),
          errors: o.errors,
          name: R,
        };
        ((o = { ...o, ...De }), T.state.next(De));
      }
    },
    ie = async (R) => {
      P(R, !0);
      const V = await i.resolver(
        f,
        i.context,
        dz(R || h.mount, s, i.criteriaMode, i.shouldUseNativeValidation)
      );
      return (P(R), V);
    },
    de = async (R) => {
      const { errors: V } = await ie(R);
      if (R)
        for (const W of R) {
          const me = Ue(V, W);
          me ? Qt(o.errors, W, me) : pn(o.errors, W);
        }
      else o.errors = V;
      return V;
    },
    re = async (R, V, W = { valid: !0 }) => {
      for (const me in R) {
        const X = R[me];
        if (X) {
          const { _f: ee, ...De } = X;
          if (ee) {
            const Be = h.array.has(ee.name),
              Ze = X._f && pz(X._f);
            Ze && E.validatingFields && P([me], !0);
            const tn = await ww(
              X,
              h.disabled,
              f,
              D,
              i.shouldUseNativeValidation && !V,
              Be
            );
            if (
              (Ze && E.validatingFields && P([me]),
              tn[ee.name] && ((W.valid = !1), V))
            )
              break;
            !V &&
              (Ue(tn, ee.name)
                ? Be
                  ? bz(o.errors, tn, ee.name)
                  : Qt(o.errors, ee.name, tn[ee.name])
                : pn(o.errors, ee.name));
          }
          !vr(De) && (await re(De, V, W));
        }
      }
      return W.valid;
    },
    ae = () => {
      for (const R of h.unMount) {
        const V = Ue(s, R);
        V &&
          (V._f.refs ? V._f.refs.every((W) => !Xm(W)) : !Xm(V._f.ref)) &&
          Ke(R);
      }
      h.unMount = new Set();
    },
    ue = (R, V) => !i.disabled && (R && V && Qt(f, R, V), !Fi(ft(), c)),
    B = (R, V, W) =>
      lz(R, h, { ...(d.mount ? f : vn(V) ? c : Ca(R) ? { [R]: V } : V) }, W, V),
    q = (R) =>
      xy(Ue(d.mount ? f : c, R, i.shouldUnregister ? Ue(c, R, []) : [])),
    ne = (R, V, W = {}) => {
      const me = Ue(s, R);
      let X = V;
      if (me) {
        const ee = me._f;
        ee &&
          (!ee.disabled && Qt(f, R, TT(V, ee)),
          (X = Dd(ee.ref) && ir(V) ? '' : V),
          ST(ee.ref)
            ? [...ee.ref.options].forEach(
                (De) => (De.selected = X.includes(De.value))
              )
            : ee.refs
              ? Gu(ee.ref)
                ? ee.refs.forEach((De) => {
                    (!De.defaultChecked || !De.disabled) &&
                      (Array.isArray(X)
                        ? (De.checked = !!X.find((Be) => Be === De.value))
                        : (De.checked = X === De.value || !!X));
                  })
                : ee.refs.forEach((De) => (De.checked = De.value === X))
              : _y(ee.ref)
                ? (ee.ref.value = '')
                : ((ee.ref.value = X),
                  ee.ref.type || T.state.next({ name: R, values: Mn(f) })));
      }
      ((W.shouldDirty || W.shouldTouch) &&
        F(R, X, W.shouldTouch, W.shouldDirty, !0),
        W.shouldValidate && Le(R));
    },
    pe = (R, V, W) => {
      for (const me in V) {
        if (!V.hasOwnProperty(me)) return;
        const X = V[me],
          ee = R + '.' + me,
          De = Ue(s, ee);
        (h.array.has(R) || un(X) || (De && !De._f)) && !Do(X)
          ? pe(ee, X, W)
          : ne(ee, X, W);
      }
    },
    le = (R, V, W = {}) => {
      const me = Ue(s, R),
        X = h.array.has(R),
        ee = Mn(V);
      (Qt(f, R, ee),
        X
          ? (T.array.next({ name: R, values: Mn(f) }),
            (E.isDirty || E.dirtyFields || S.isDirty || S.dirtyFields) &&
              W.shouldDirty &&
              T.state.next({
                name: R,
                dirtyFields: Mu(c, f),
                isDirty: ue(R, ee),
              }))
          : me && !me._f && !ir(ee)
            ? pe(R, ee, W)
            : ne(R, ee, W),
        Sw(R, h) && T.state.next({ ...o }),
        T.state.next({ name: d.mount ? R : void 0, values: Mn(f) }));
    },
    ve = async (R) => {
      d.mount = !0;
      const V = R.target;
      let W = V.name,
        me = !0;
      const X = Ue(s, W),
        ee = (Ze) => {
          me =
            Number.isNaN(Ze) ||
            (Do(Ze) && isNaN(Ze.getTime())) ||
            Fi(Ze, Ue(f, W, Ze));
        },
        De = gw(i.mode),
        Be = gw(i.reValidateMode);
      if (X) {
        let Ze, tn;
        const or = V.type ? yw(X._f) : ez(R),
          Se = R.type === dw.BLUR || R.type === dw.FOCUS_OUT,
          Fe =
            (!vz(X._f) && !i.resolver && !Ue(o.errors, W) && !X._f.deps) ||
            yz(Se, Ue(o.touchedFields, W), o.isSubmitted, Be, De),
          ot = Sw(W, h, Se);
        (Qt(f, W, or),
          Se
            ? (X._f.onBlur && X._f.onBlur(R), m && m(0))
            : X._f.onChange && X._f.onChange(R));
        const Tt = F(W, or, Se),
          At = !vr(Tt) || ot;
        if ((!Se && T.state.next({ name: W, type: R.type, values: Mn(f) }), Fe))
          return (
            (E.isValid || S.isValid) &&
              (i.mode === 'onBlur' ? Se && x() : Se || x()),
            At && T.state.next({ name: W, ...(ot ? {} : Tt) })
          );
        if ((!Se && ot && T.state.next({ ...o }), i.resolver)) {
          const { errors: nn } = await ie([W]);
          if ((ee(or), me)) {
            const Kt = Ew(o.errors, s, W),
              Ln = Ew(nn, s, Kt.name || W);
            ((Ze = Ln.error), (W = Ln.name), (tn = vr(nn)));
          }
        } else
          (P([W], !0),
            (Ze = (await ww(X, h.disabled, f, D, i.shouldUseNativeValidation))[
              W
            ]),
            P([W]),
            ee(or),
            me &&
              (Ze
                ? (tn = !1)
                : (E.isValid || S.isValid) && (tn = await re(s, !0))));
        me && (X._f.deps && Le(X._f.deps), se(W, tn, Ze, Tt));
      }
    },
    Ne = (R, V) => {
      if (Ue(o.errors, V) && R.focus) return (R.focus(), 1);
    },
    Le = async (R, V = {}) => {
      let W, me;
      const X = Pu(R);
      if (i.resolver) {
        const ee = await de(vn(R) ? R : X);
        ((W = vr(ee)), (me = R ? !X.some((De) => Ue(ee, De)) : W));
      } else
        R
          ? ((me = (
              await Promise.all(
                X.map(async (ee) => {
                  const De = Ue(s, ee);
                  return await re(De && De._f ? { [ee]: De } : De);
                })
              )
            ).every(Boolean)),
            !(!me && !o.isValid) && x())
          : (me = W = await re(s));
      return (
        T.state.next({
          ...(!Ca(R) || ((E.isValid || S.isValid) && W !== o.isValid)
            ? {}
            : { name: R }),
          ...(i.resolver || !R ? { isValid: W } : {}),
          errors: o.errors,
        }),
        V.shouldFocus && !me && zu(s, Ne, R ? X : h.mount),
        me
      );
    },
    ft = (R) => {
      const V = { ...(d.mount ? f : c) };
      return vn(R) ? V : Ca(R) ? Ue(V, R) : R.map((W) => Ue(V, W));
    },
    qt = (R, V) => ({
      invalid: !!Ue((V || o).errors, R),
      isDirty: !!Ue((V || o).dirtyFields, R),
      error: Ue((V || o).errors, R),
      isValidating: !!Ue(o.validatingFields, R),
      isTouched: !!Ue((V || o).touchedFields, R),
    }),
    Ce = (R) => {
      (R && Pu(R).forEach((V) => pn(o.errors, V)),
        T.state.next({ errors: R ? o.errors : {} }));
    },
    Ee = (R, V, W) => {
      const me = (Ue(s, R, { _f: {} })._f || {}).ref,
        X = Ue(o.errors, R) || {},
        { ref: ee, message: De, type: Be, ...Ze } = X;
      (Qt(o.errors, R, { ...Ze, ...V, ref: me }),
        T.state.next({ name: R, errors: o.errors, isValid: !1 }),
        W && W.shouldFocus && me && me.focus && me.focus());
    },
    Te = (R, V) =>
      ta(R)
        ? T.state.subscribe({ next: (W) => R(B(void 0, V), W) })
        : B(R, V, !0),
    Ve = (R) =>
      T.state.subscribe({
        next: (V) => {
          mz(R.name, V.name, R.exact) &&
            hz(V, R.formState || E, Ye, R.reRenderRoot) &&
            R.callback({ values: { ...f }, ...o, ...V });
        },
      }).unsubscribe,
    $ = (R) => (
      (d.mount = !0),
      (S = { ...S, ...R.formState }),
      Ve({ ...R, formState: S })
    ),
    Ke = (R, V = {}) => {
      for (const W of R ? Pu(R) : h.mount)
        (h.mount.delete(W),
          h.array.delete(W),
          V.keepValue || (pn(s, W), pn(f, W)),
          !V.keepError && pn(o.errors, W),
          !V.keepDirty && pn(o.dirtyFields, W),
          !V.keepTouched && pn(o.touchedFields, W),
          !V.keepIsValidating && pn(o.validatingFields, W),
          !i.shouldUnregister && !V.keepDefaultValue && pn(c, W));
      (T.state.next({ values: Mn(f) }),
        T.state.next({ ...o, ...(V.keepDirty ? { isDirty: ue() } : {}) }),
        !V.keepIsValid && x());
    },
    ye = ({ disabled: R, name: V }) => {
      ((Sa(R) && d.mount) || R || h.disabled.has(V)) &&
        (R ? h.disabled.add(V) : h.disabled.delete(V));
    },
    at = (R, V = {}) => {
      let W = Ue(s, R);
      const me = Sa(V.disabled) || Sa(i.disabled);
      return (
        Qt(s, R, {
          ...(W || {}),
          _f: {
            ...(W && W._f ? W._f : { ref: { name: R } }),
            name: R,
            mount: !0,
            ...V,
          },
        }),
        h.mount.add(R),
        W
          ? ye({ disabled: Sa(V.disabled) ? V.disabled : i.disabled, name: R })
          : U(R, !0, V.value),
        {
          ...(me ? { disabled: V.disabled || i.disabled } : {}),
          ...(i.progressive
            ? {
                required: !!V.required,
                min: Lu(V.min),
                max: Lu(V.max),
                minLength: Lu(V.minLength),
                maxLength: Lu(V.maxLength),
                pattern: Lu(V.pattern),
              }
            : {}),
          name: R,
          onChange: ve,
          onBlur: ve,
          ref: (X) => {
            if (X) {
              (at(R, V), (W = Ue(s, R)));
              const ee =
                  (vn(X.value) &&
                    X.querySelectorAll &&
                    X.querySelectorAll('input,select,textarea')[0]) ||
                  X,
                De = uz(ee),
                Be = W._f.refs || [];
              if (De ? Be.find((Ze) => Ze === ee) : ee === W._f.ref) return;
              (Qt(s, R, {
                _f: {
                  ...W._f,
                  ...(De
                    ? {
                        refs: [
                          ...Be.filter(Xm),
                          ee,
                          ...(Array.isArray(Ue(c, R)) ? [{}] : []),
                        ],
                        ref: { type: ee.type, name: R },
                      }
                    : { ref: ee }),
                },
              }),
                U(R, !1, void 0, ee));
            } else
              ((W = Ue(s, R, {})),
                W._f && (W._f.mount = !1),
                (i.shouldUnregister || V.shouldUnregister) &&
                  !(nz(h.array, R) && d.action) &&
                  h.unMount.add(R));
          },
        }
      );
    },
    qe = () => i.shouldFocusError && zu(s, Ne, h.mount),
    Je = (R) => {
      Sa(R) &&
        (T.state.next({ disabled: R }),
        zu(
          s,
          (V, W) => {
            const me = Ue(s, W);
            me &&
              ((V.disabled = me._f.disabled || R),
              Array.isArray(me._f.refs) &&
                me._f.refs.forEach((X) => {
                  X.disabled = me._f.disabled || R;
                }));
          },
          0,
          !1
        ));
    },
    oe = (R, V) => async (W) => {
      let me;
      W && (W.preventDefault && W.preventDefault(), W.persist && W.persist());
      let X = Mn(f);
      if ((T.state.next({ isSubmitting: !0 }), i.resolver)) {
        const { errors: ee, values: De } = await ie();
        ((o.errors = ee), (X = Mn(De)));
      } else await re(s);
      if (h.disabled.size) for (const ee of h.disabled) pn(X, ee);
      if ((pn(o.errors, 'root'), vr(o.errors))) {
        T.state.next({ errors: {} });
        try {
          await R(X, W);
        } catch (ee) {
          me = ee;
        }
      } else (V && (await V({ ...o.errors }, W)), qe(), setTimeout(qe));
      if (
        (T.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: vr(o.errors) && !me,
          submitCount: o.submitCount + 1,
          errors: o.errors,
        }),
        me)
      )
        throw me;
    },
    it = (R, V = {}) => {
      Ue(s, R) &&
        (vn(V.defaultValue)
          ? le(R, Mn(Ue(c, R)))
          : (le(R, V.defaultValue), Qt(c, R, Mn(V.defaultValue))),
        V.keepTouched || pn(o.touchedFields, R),
        V.keepDirty ||
          (pn(o.dirtyFields, R),
          (o.isDirty = V.defaultValue ? ue(R, Mn(Ue(c, R))) : ue())),
        V.keepError || (pn(o.errors, R), E.isValid && x()),
        T.state.next({ ...o }));
    },
    dt = (R, V = {}) => {
      const W = R ? Mn(R) : c,
        me = Mn(W),
        X = vr(R),
        ee = X ? c : me;
      if ((V.keepDefaultValues || (c = W), !V.keepValues)) {
        if (V.keepDirtyValues) {
          const De = new Set([...h.mount, ...Object.keys(Mu(c, f))]);
          for (const Be of Array.from(De))
            Ue(o.dirtyFields, Be) ? Qt(ee, Be, Ue(f, Be)) : le(Be, Ue(ee, Be));
        } else {
          if (Ty && vn(R))
            for (const De of h.mount) {
              const Be = Ue(s, De);
              if (Be && Be._f) {
                const Ze = Array.isArray(Be._f.refs)
                  ? Be._f.refs[0]
                  : Be._f.ref;
                if (Dd(Ze)) {
                  const tn = Ze.closest('form');
                  if (tn) {
                    tn.reset();
                    break;
                  }
                }
              }
            }
          if (V.keepFieldsRef) for (const De of h.mount) le(De, Ue(ee, De));
          else s = {};
        }
        ((f = i.shouldUnregister ? (V.keepDefaultValues ? Mn(c) : {}) : Mn(ee)),
          T.array.next({ values: { ...ee } }),
          T.state.next({ values: { ...ee } }));
      }
      ((h = {
        mount: V.keepDirtyValues ? h.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        disabled: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: '',
      }),
        (d.mount = !E.isValid || !!V.keepIsValid || !!V.keepDirtyValues),
        (d.watch = !!i.shouldUnregister),
        T.state.next({
          submitCount: V.keepSubmitCount ? o.submitCount : 0,
          isDirty: X
            ? !1
            : V.keepDirty
              ? o.isDirty
              : !!(V.keepDefaultValues && !Fi(R, c)),
          isSubmitted: V.keepIsSubmitted ? o.isSubmitted : !1,
          dirtyFields: X
            ? {}
            : V.keepDirtyValues
              ? V.keepDefaultValues && f
                ? Mu(c, f)
                : o.dirtyFields
              : V.keepDefaultValues && R
                ? Mu(c, R)
                : V.keepDirty
                  ? o.dirtyFields
                  : {},
          touchedFields: V.keepTouched ? o.touchedFields : {},
          errors: V.keepErrors ? o.errors : {},
          isSubmitSuccessful: V.keepIsSubmitSuccessful
            ? o.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
        }));
    },
    He = (R, V) => dt(ta(R) ? R(f) : R, V),
    vt = (R, V = {}) => {
      const W = Ue(s, R),
        me = W && W._f;
      if (me) {
        const X = me.refs ? me.refs[0] : me.ref;
        X.focus && (X.focus(), V.shouldSelect && ta(X.select) && X.select());
      }
    },
    Ye = (R) => {
      o = { ...o, ...R };
    },
    ln = {
      control: {
        register: at,
        unregister: Ke,
        getFieldState: qt,
        handleSubmit: oe,
        setError: Ee,
        _subscribe: Ve,
        _runSchema: ie,
        _focusError: qe,
        _getWatch: B,
        _getDirty: ue,
        _setValid: x,
        _setFieldArray: L,
        _setDisabledField: ye,
        _setErrors: z,
        _getFieldArray: q,
        _reset: dt,
        _resetDefaultValues: () =>
          ta(i.defaultValues) &&
          i.defaultValues().then((R) => {
            (He(R, i.resetOptions), T.state.next({ isLoading: !1 }));
          }),
        _removeUnmounted: ae,
        _disableForm: Je,
        _subjects: T,
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
      subscribe: $,
      trigger: Le,
      register: at,
      handleSubmit: oe,
      watch: Te,
      setValue: le,
      getValues: ft,
      reset: He,
      resetField: it,
      clearErrors: Ce,
      unregister: Ke,
      setError: Ee,
      setFocus: vt,
      getFieldState: qt,
    };
  return { ...ln, formControl: ln };
}
function Cz(r = {}) {
  const i = wt.useRef(void 0),
    o = wt.useRef(void 0),
    [s, c] = wt.useState({
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
      const { formControl: d, ...h } = Ez(r);
      i.current = { ...h, formState: s };
    }
  const f = i.current.control;
  return (
    (f._options = r),
    oz(() => {
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
    wt.useEffect(() => f._disableForm(r.disabled), [f, r.disabled]),
    wt.useEffect(() => {
      (r.mode && (f._options.mode = r.mode),
        r.reValidateMode && (f._options.reValidateMode = r.reValidateMode));
    }, [f, r.mode, r.reValidateMode]),
    wt.useEffect(() => {
      r.errors && (f._setErrors(r.errors), f._focusError());
    }, [f, r.errors]),
    wt.useEffect(() => {
      r.shouldUnregister && f._subjects.state.next({ values: f._getWatch() });
    }, [f, r.shouldUnregister]),
    wt.useEffect(() => {
      if (f._proxyFormState.isDirty) {
        const d = f._getDirty();
        d !== s.isDirty && f._subjects.state.next({ isDirty: d });
      }
    }, [f, s.isDirty]),
    wt.useEffect(() => {
      r.values && !Fi(r.values, o.current)
        ? (f._reset(r.values, {
            keepFieldsRef: !0,
            ...f._options.resetOptions,
          }),
          (o.current = r.values),
          c((d) => ({ ...d })))
        : f._resetDefaultValues();
    }, [f, r.values]),
    wt.useEffect(() => {
      (f._state.mount || (f._setValid(), (f._state.mount = !0)),
        f._state.watch &&
          ((f._state.watch = !1), f._subjects.state.next({ ...f._formState })),
        f._removeUnmounted());
    }),
    (i.current.formState = iz(s, f)),
    i.current
  );
}
const wz = Tn('form').withConfig({
    displayName: 'MyForm__StyledForm',
    componentId: 'sc-1ycmc8g-0',
  })([
    'margin:30px;align-items:center;border:1px solid lightblue;border-radius:10px;padding:20px;display:flex;justify-content:center;flex-wrap:wrap;@media (min-width:480px){padding:40px;}@media (min-width:600px){width:500px;}',
  ]),
  Tw = Tn('input').withConfig({
    displayName: 'MyForm__StyledFormField',
    componentId: 'sc-1ycmc8g-1',
  })([
    'margin:5px;width:150px;@media (max-width:480px){width:200px;display:block;}',
  ]),
  Tz = Tn('textarea').withConfig({
    displayName: 'MyForm__StyledFormTextArea',
    componentId: 'sc-1ycmc8g-2',
  })(['margin:5px;width:200px;@media (min-width:480px){width:320px;}']),
  xz = Tn('input').withConfig({
    displayName: 'MyForm__StyledButton',
    componentId: 'sc-1ycmc8g-3',
  })(['margin:10px;display:block;']),
  Rz = Tn('input').withConfig({
    displayName: 'MyForm__StyledFormFile',
    componentId: 'sc-1ycmc8g-4',
  })(['margin:10px;display:block;']);
function RT({
  products: r,
  card: i,
  rows: o,
  setCard: s,
  setProductState: c,
  setIsOpenModal: f,
  isOpenModal: d,
  url: h,
  endPoint: m,
}) {
  const {
    register: g,
    reset: E,
    handleSubmit: S,
    watch: T,
    formState: { errors: D },
  } = Cz();
  return Bn('div', {
    children: [
      m === 'upload'
        ? Me('h2', { children: 'Create new card' })
        : Me('h2', { children: 'Update card' }),
      Bn(wz, {
        onSubmit: S(async (x) => {
          const P = new FormData();
          (P.append('name', x.name),
            P.append('price', x.price),
            P.append('description', x.description),
            P.append('id', i.id),
            s({
              id: i.id,
              name: x.name,
              description: x.description,
              price: x.price,
              img: i.img,
            }));
          const L = document.querySelector('input[name="files"]');
          (L != null &&
            L.files &&
            Array.from(L.files).forEach((F) => {
              P.append('files', F);
            }),
            await fetch(`${h}/${m}`, { method: 'POST', body: P }));
          const U = (
            await (await fetch(`${h}/all`, { method: 'GET' })).json()
          ).initialData.map((F) => {
            const { id: se, name: ie, price: de, description: re, img: ae } = F;
            return { id: se, name: ie, price: de, description: re, img: ae };
          });
          (c(U), E());
        }),
        children: [
          Bn('div', {
            children: [
              Me(Tw, { ...g('name', { required: !0 }), placeholder: 'Name' }),
              D.name && Me('span', { children: 'This field name is required' }),
              Me(Tw, { ...g('price', { required: !0 }), placeholder: 'Price' }),
              D.price &&
                Me('span', { children: 'This field price is required' }),
            ],
          }),
          Me(Tz, {
            ...g('description', { required: !0 }),
            placeholder: 'Description',
            rows: 5,
          }),
          Me(Rz, { type: 'file', name: 'files', accept: '.jpg', multiple: !0 }),
          D.description &&
            Me('span', { children: 'This field description is required' }),
          Me(xz, { type: 'submit' }),
        ],
      }),
    ],
  });
}
const _z = Tn.div.withConfig({
    displayName: 'Modal__StyledOverlay',
    componentId: 'sc-1pc8fcs-0',
  })([
    'position:fixed;inset:0;background:rgba(0,0,0,0.5);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;z-index:9999;',
  ]),
  Dz = Tn.div.withConfig({
    displayName: 'Modal__StyledModal',
    componentId: 'sc-1pc8fcs-1',
  })([
    'background:#ffffff;border-radius:16px;box-shadow:0 12px 32px rgba(0,0,0,0.2);padding:32px;width:90%;max-width:720px;max-height:90vh;overflow-y:auto;position:relative;display:flex;flex-direction:column;gap:24px;animation:fadeIn 0.3s ease-in-out;@keyframes fadeIn{from{opacity:0;transform:scale(0.95);}to{opacity:1;transform:scale(1);}}&::-webkit-scrollbar{width:8px;}&::-webkit-scrollbar-thumb{background:#ccc;border-radius:4px;}',
  ]),
  Oz = Tn.button.withConfig({
    displayName: 'Modal__StyledButtonClose',
    componentId: 'sc-1pc8fcs-2',
  })([
    'position:absolute;top:16px;right:20px;font-size:24px;color:#999;background:none;border:none;cursor:pointer;transition:color 0.2s;&:hover{color:#333;}',
  ]),
  Az = Tn.div.withConfig({
    displayName: 'Modal__StyledFormWrapper',
    componentId: 'sc-1pc8fcs-3',
  })(['display:flex;flex-direction:column;gap:20px;']),
  Mz = Tn.button.withConfig({
    displayName: 'Modal__StyledDeleteButton',
    componentId: 'sc-1pc8fcs-4',
  })([
    'align-self:center;padding:10px 24px;background-color:#ff4d4f;border:none;border-radius:8px;color:white;font-weight:bold;font-size:16px;cursor:pointer;transition:background-color 0.2s;&:hover{background-color:#d9363e;}',
  ]);
function Lz({
  products: r,
  card: i,
  rows: o,
  url: s,
  setCard: c,
  setProductState: f,
  setIsOpenModal: d,
  isOpenModal: h,
}) {
  function m() {
    d(!1);
  }
  async function g() {
    await fetch(`${s}/`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: i.id }),
    });
    const T = (
      await (await fetch(`${s}/all`, { method: 'GET' })).json()
    ).initialData.map((D) => {
      const { id: O, name: x, price: P, description: L, img: _ } = D;
      return { id: O, name: x, price: P, description: L, img: _ };
    });
    (c({ id: '', name: '', description: '', price: '', img: '' }), f(T), d(!1));
  }
  return Me(_z, {
    children: Bn(Dz, {
      children: [
        Me(Oz, { onClick: m, children: '×' }),
        Me(wy, { product: i }),
        Bn(Az, {
          children: [
            Me(RT, {
              products: r,
              card: i,
              rows: o,
              setCard: c,
              setProductState: f,
              setIsOpenModal: d,
              isOpenModal: h,
              url: s,
              endPoint: 'admin',
            }),
            Me(Mz, { onClick: g, children: '🗑 Delete Card' }),
          ],
        }),
      ],
    }),
  });
}
const Qm = 'http://localhost:3000',
  Km = 'upload',
  kz = Tn('div').withConfig({
    displayName: 'Admin__StyledBaseField',
    componentId: 'sc-1rnwr9c-0',
  })([
    'display:flex;flex-direction:column;justify-content:center;align-items:center;',
  ]);
function Nz({
  products: r,
  card: i,
  rows: o,
  setCard: s,
  setProductState: c,
  setIsOpenModal: f,
  isOpenModal: d,
}) {
  return Bn('div', {
    children: [
      d &&
        Me(Lz, {
          products: r,
          card: i,
          rows: o,
          setCard: s,
          setProductState: c,
          setIsOpenModal: f,
          isOpenModal: d,
          url: Qm,
          endPoint: Km,
        }),
      Bn(kz, {
        children: [
          Me('h2', { children: 'Administrator' }),
          Me(ZP, {
            products: r,
            card: i,
            rows: o,
            setCard: s,
            setProductState: c,
            setIsOpenModal: f,
            isOpenModal: d,
            url: Qm,
            endPoint: Km,
          }),
          Me(RT, {
            products: r,
            card: i,
            rows: o,
            setCard: s,
            setProductState: c,
            setIsOpenModal: f,
            isOpenModal: d,
            url: Qm,
            endPoint: Km,
          }),
        ],
      }),
    ],
  });
}
const Pz = Tn.div.withConfig({
  displayName: 'Home__StyledBaseField',
  componentId: 'sc-rf26ej-0',
})([
  'width:100%;max-width:1200px;margin:0 auto;padding:1rem;box-sizing:border-box;.swiper{width:100%;height:auto;}.swiper-slide{display:flex;justify-content:center;align-items:center;height:100%;}.swiper-scrollbar{margin-top:8px;}',
]);
function zz({ products: r, rows: i }) {
  let o = 5,
    s = 2;
  switch (i) {
    case 3:
      ((s = 1), (o = 5));
      break;
    case 2:
      ((s = 3), (o = 3));
      break;
    case 1:
      ((s = 5), (o = 5));
      break;
    default:
      s = 1;
  }
  return Bn('div', {
    children: [
      Me('h2', { children: 'Home' }),
      Me(Pz, {
        children: Me(Ey, {
          scrollbar: { hide: !0 },
          modules: [yT, gT],
          slidesPerView: s,
          spaceBetween: 20,
          grid: { rows: o, fill: 'row' },
          children: r.map((c) =>
            Me(
              Cy,
              {
                children: Me(wy, {
                  product: {
                    id: c.id ?? '',
                    name: c.name ?? '',
                    description: c.description ?? '',
                    price: c.price ?? '',
                    img: c.img ?? '',
                  },
                }),
              },
              c.id
            )
          ),
        }),
      }),
    ],
  });
}
function Uz() {
  return Me('div', { children: Me('h2', { children: 'Orders' }) });
}
function Fz() {
  return Me('div', { children: Me('h2', { children: 'Contacts' }) });
}
function Vz() {
  return Bn('div', {
    children: [
      Me('h2', { children: 'Nothing to see here!' }),
      Me('p', {
        children: Me(Ui, { to: '/', children: 'Go to the home page' }),
      }),
    ],
  });
}
function Hz() {
  return Bn('div', {
    children: [
      Me('nav', {
        children: Bn('ul', {
          children: [
            Me('li', { children: Me(Ui, { to: '/', children: 'Home' }) }),
            Me('li', { children: Me(Ui, { to: '/admin', children: 'Admin' }) }),
            Me('li', {
              children: Me(Ui, { to: '/orders', children: 'Orders' }),
            }),
            Me('li', {
              children: Me(Ui, { to: '/contacts', children: 'Contacts' }),
            }),
            Me('li', {
              children: Me(Ui, {
                to: '/nothing-here',
                children: 'Nothing Here',
              }),
            }),
          ],
        }),
      }),
      Me('hr', {}),
      Me(HL, {}),
    ],
  });
}
function Iz({ products: r }) {
  const [i, o] = Z.useState(r),
    [s, c] = Z.useState(2),
    [f, d] = Z.useState(!1),
    [h, m] = Z.useState({
      id: '',
      name: '',
      description: '',
      price: '',
      img: '',
    }),
    [g, E] = Z.useState(!1);
  return (
    Z.useEffect(() => {
      (o(r), E(!0));
    }, []),
    Z.useEffect(() => {
      function S() {
        const T = window.innerWidth;
        T < 480 ? c(4) : T < 768 ? c(3) : T < 1024 ? c(2) : c(1);
      }
      return (
        S(),
        window.addEventListener('resize', S),
        () => window.removeEventListener('resize', S)
      );
    }, []),
    g
      ? Bn('div', {
          children: [
            Me('h1', { children: 'Server Rendering Example' }),
            Me('p', {
              children:
                "If you check out the HTML source of this page, you'll notice that it already contains the HTML markup of the app that was sent from the server!",
            }),
            Me('p', {
              children:
                "This is great for search engines that need to index this page. It's also great for users because server-rendered pages tend to load more quickly on mobile devices and over slow networks.",
            }),
            Me('p', {
              children:
                "Another thing to notice is that when you click one of the links below and navigate to a different URL, then hit the refresh button on your browser, the server is able to generate the HTML markup for that page as well because you're using React Router on the server. This creates a seamless experience both for your users navigating around your site and for developers on your team who get to use the same routing library in both places.",
            }),
            Me(BL, {
              children: Bn(Ro, {
                path: '/',
                element: Me(Hz, {}),
                children: [
                  Me(Ro, {
                    index: !0,
                    element: Me(zz, {
                      products: i,
                      card: h,
                      rows: s,
                      setCard: m,
                      setProductState: o,
                      setIsOpenModal: d,
                      isOpenModal: f,
                      url: '',
                      endPoint: '',
                    }),
                  }),
                  Me(Ro, {
                    path: 'admin',
                    element: Me(Nz, {
                      products: i,
                      card: h,
                      rows: s,
                      setCard: m,
                      setProductState: o,
                      setIsOpenModal: d,
                      isOpenModal: f,
                      url: '',
                      endPoint: '',
                    }),
                  }),
                  Me(Ro, { path: 'orders', element: Me(Uz, {}) }),
                  Me(Ro, { path: 'contacts', element: Me(Fz, {}) }),
                  Me(Ro, { path: '*', element: Me(Vz, {}) }),
                ],
              }),
            }),
          ],
        })
      : null
  );
}
Lw(
  document.getElementById('app'),
  Me(Z.StrictMode, {
    children: Me(rk, {
      children: Me(Iz, { products: window.__INITIAL_PRODUCTS__ ?? [] }),
    }),
  })
);
