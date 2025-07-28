function GM(r, a) {
  for (var o = 0; o < a.length; o++) {
    const s = a[o];
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
  const a = document.createElement('link').relList;
  if (a && a.supports && a.supports('modulepreload')) return;
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
function DC(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, 'default')
    ? r.default
    : r;
}
var OC = { exports: {} },
  pd = {},
  AC = { exports: {} },
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
(function (r, a) {
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
      S = Symbol.for('react.forward_ref'),
      E = Symbol.for('react.suspense'),
      T = Symbol.for('react.suspense_list'),
      D = Symbol.for('react.memo'),
      O = Symbol.for('react.lazy'),
      x = Symbol.for('react.offscreen'),
      k = Symbol.iterator,
      L = '@@iterator';
    function R(b) {
      if (b === null || typeof b != 'object') return null;
      var A = (k && b[k]) || b[L];
      return typeof A == 'function' ? A : null;
    }
    var z = { current: null },
      U = { transition: null },
      F = { current: null, isBatchingLegacy: !1, didScheduleLegacyUpdate: !1 },
      te = { current: null },
      ae = {},
      le = null;
    function ne(b) {
      le = b;
    }
    ((ae.setExtraStackFrame = function (b) {
      le = b;
    }),
      (ae.getCurrentStack = null),
      (ae.getStackAddendum = function () {
        var b = '';
        le && (b += le);
        var A = ae.getCurrentStack;
        return (A && (b += A() || ''), b);
      }));
    var ee = !1,
      ue = !1,
      B = !1,
      W = !1,
      ie = !1,
      pe = {
        ReactCurrentDispatcher: z,
        ReactCurrentBatchConfig: U,
        ReactCurrentOwner: te,
      };
    ((pe.ReactDebugCurrentFrame = ae), (pe.ReactCurrentActQueue = F));
    function ce(b) {
      {
        for (
          var A = arguments.length, Y = new Array(A > 1 ? A - 1 : 0), Q = 1;
          Q < A;
          Q++
        )
          Y[Q - 1] = arguments[Q];
        be('warn', b, Y);
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
        be('error', b, Y);
      }
    }
    function be(b, A, Y) {
      {
        var Q = pe.ReactDebugCurrentFrame,
          Se = Q.getStackAddendum();
        Se !== '' && ((A += '%s'), (Y = Y.concat([Se])));
        var Qe = Y.map(function (Pe) {
          return String(Pe);
        });
        (Qe.unshift('Warning: ' + A),
          Function.prototype.apply.call(console[b], console, Qe));
      }
    }
    var xe = {};
    function Ye(b, A) {
      {
        var Y = b.constructor,
          Q = (Y && (Y.displayName || Y.name)) || 'ReactClass',
          Se = Q + '.' + A;
        if (xe[Se]) return;
        (ve(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          A,
          Q
        ),
          (xe[Se] = !0));
      }
    }
    var Lt = {
        isMounted: function (b) {
          return !1;
        },
        enqueueForceUpdate: function (b, A, Y) {
          Ye(b, 'forceUpdate');
        },
        enqueueReplaceState: function (b, A, Y, Q) {
          Ye(b, 'replaceState');
        },
        enqueueSetState: function (b, A, Y, Q) {
          Ye(b, 'setState');
        },
      },
      we = Object.assign,
      Ce = {};
    Object.freeze(Ce);
    function _e(b, A, Y) {
      ((this.props = b),
        (this.context = A),
        (this.refs = Ce),
        (this.updater = Y || Lt));
    }
    ((_e.prototype.isReactComponent = {}),
      (_e.prototype.setState = function (b, A) {
        if (typeof b != 'object' && typeof b != 'function' && b != null)
          throw new Error(
            'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
          );
        this.updater.enqueueSetState(this, b, A, 'setState');
      }),
      (_e.prototype.forceUpdate = function (b) {
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
          Object.defineProperty(_e.prototype, b, {
            get: function () {
              ce(
                '%s(...) is deprecated in plain JavaScript React classes. %s',
                A[0],
                A[1]
              );
            },
          });
        };
      for (var Je in Ve) Ve.hasOwnProperty(Je) && $(Je, Ve[Je]);
    }
    function ye() {}
    ye.prototype = _e.prototype;
    function it(b, A, Y) {
      ((this.props = b),
        (this.context = A),
        (this.refs = Ce),
        (this.updater = Y || Lt));
    }
    var Xe = (it.prototype = new ye());
    ((Xe.constructor = it),
      we(Xe, _e.prototype),
      (Xe.isPureReactComponent = !0));
    function Ze() {
      var b = { current: null };
      return (Object.seal(b), b);
    }
    var se = Array.isArray;
    function ot(b) {
      return se(b);
    }
    function dt(b) {
      {
        var A = typeof Symbol == 'function' && Symbol.toStringTag,
          Y = (A && b[Symbol.toStringTag]) || b.constructor.name || 'Object';
        return Y;
      }
    }
    function Ie(b) {
      try {
        return (vt(b), !1);
      } catch {
        return !0;
      }
    }
    function vt(b) {
      return '' + b;
    }
    function Ge(b) {
      if (Ie(b))
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
      var Se = A.displayName || A.name || '';
      return Se !== '' ? Y + '(' + Se + ')' : Y;
    }
    function sn(b) {
      return b.displayName || 'Context';
    }
    function _(b) {
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
        case E:
          return 'Suspense';
        case T:
          return 'SuspenseList';
      }
      if (typeof b == 'object')
        switch (b.$$typeof) {
          case g:
            var A = b;
            return sn(A) + '.Consumer';
          case m:
            var Y = b;
            return sn(Y._context) + '.Provider';
          case S:
            return Ot(b, b.render, 'ForwardRef');
          case D:
            var Q = b.displayName || null;
            return Q !== null ? Q : _(b.type) || 'Memo';
          case O: {
            var Se = b,
              Qe = Se._payload,
              Pe = Se._init;
            try {
              return _(Pe(Qe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var V = Object.prototype.hasOwnProperty,
      q = { key: !0, ref: !0, __self: !0, __source: !0 },
      me,
      X,
      re;
    re = {};
    function Me(b) {
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
    function et(b, A) {
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
    function nn(b, A) {
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
        te.current &&
        b.__self &&
        te.current.stateNode !== b.__self
      ) {
        var A = _(te.current.type);
        re[A] ||
          (ve(
            'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
            A,
            b.ref
          ),
          (re[A] = !0));
      }
    }
    var Ee = function (b, A, Y, Q, Se, Qe, Pe) {
      var tt = { $$typeof: s, type: b, key: A, ref: Y, props: Pe, _owner: Qe };
      return (
        (tt._store = {}),
        Object.defineProperty(tt._store, 'validated', {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1,
        }),
        Object.defineProperty(tt, '_self', {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: Q,
        }),
        Object.defineProperty(tt, '_source', {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: Se,
        }),
        Object.freeze && (Object.freeze(tt.props), Object.freeze(tt)),
        tt
      );
    };
    function Fe(b, A, Y) {
      var Q,
        Se = {},
        Qe = null,
        Pe = null,
        tt = null,
        mt = null;
      if (A != null) {
        (Me(A) && ((Pe = A.ref), or(A)),
          Be(A) && (Ge(A.key), (Qe = '' + A.key)),
          (tt = A.__self === void 0 ? null : A.__self),
          (mt = A.__source === void 0 ? null : A.__source));
        for (Q in A) V.call(A, Q) && !q.hasOwnProperty(Q) && (Se[Q] = A[Q]);
      }
      var kt = arguments.length - 2;
      if (kt === 1) Se.children = Y;
      else if (kt > 1) {
        for (var Vt = Array(kt), It = 0; It < kt; It++)
          Vt[It] = arguments[It + 2];
        (Object.freeze && Object.freeze(Vt), (Se.children = Vt));
      }
      if (b && b.defaultProps) {
        var Wt = b.defaultProps;
        for (Q in Wt) Se[Q] === void 0 && (Se[Q] = Wt[Q]);
      }
      if (Qe || Pe) {
        var an =
          typeof b == 'function' ? b.displayName || b.name || 'Unknown' : b;
        (Qe && et(Se, an), Pe && nn(Se, an));
      }
      return Ee(b, Qe, Pe, tt, mt, te.current, Se);
    }
    function lt(b, A) {
      var Y = Ee(b.type, A, b.ref, b._self, b._source, b._owner, b.props);
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
        Se = we({}, b.props),
        Qe = b.key,
        Pe = b.ref,
        tt = b._self,
        mt = b._source,
        kt = b._owner;
      if (A != null) {
        (Me(A) && ((Pe = A.ref), (kt = te.current)),
          Be(A) && (Ge(A.key), (Qe = '' + A.key)));
        var Vt;
        b.type && b.type.defaultProps && (Vt = b.type.defaultProps);
        for (Q in A)
          V.call(A, Q) &&
            !q.hasOwnProperty(Q) &&
            (A[Q] === void 0 && Vt !== void 0
              ? (Se[Q] = Vt[Q])
              : (Se[Q] = A[Q]));
      }
      var It = arguments.length - 2;
      if (It === 1) Se.children = Y;
      else if (It > 1) {
        for (var Wt = Array(It), an = 0; an < It; an++)
          Wt[an] = arguments[an + 2];
        Se.children = Wt;
      }
      return Ee(b.type, Qe, Pe, tt, mt, kt, Se);
    }
    function At(b) {
      return typeof b == 'object' && b !== null && b.$$typeof === s;
    }
    var rn = '.',
      Jt = ':';
    function kn(b) {
      var A = /[=:]/g,
        Y = { '=': '=0', ':': '=2' },
        Q = b.replace(A, function (Se) {
          return Y[Se];
        });
      return '$' + Q;
    }
    var Ft = !1,
      hr = /\/+/g;
    function Yt(b) {
      return b.replace(hr, '$&/');
    }
    function Gt(b, A) {
      return typeof b == 'object' && b !== null && b.key != null
        ? (Ge(b.key), kn('' + b.key))
        : A.toString(36);
    }
    function aa(b, A, Y, Q, Se) {
      var Qe = typeof b;
      (Qe === 'undefined' || Qe === 'boolean') && (b = null);
      var Pe = !1;
      if (b === null) Pe = !0;
      else
        switch (Qe) {
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
        var tt = b,
          mt = Se(tt),
          kt = Q === '' ? rn + Gt(tt, 0) : Q;
        if (ot(mt)) {
          var Vt = '';
          (kt != null && (Vt = Yt(kt) + '/'),
            aa(mt, A, Vt, '', function (Vd) {
              return Vd;
            }));
        } else
          mt != null &&
            (At(mt) &&
              (mt.key && (!tt || tt.key !== mt.key) && Ge(mt.key),
              (mt = lt(
                mt,
                Y +
                  (mt.key && (!tt || tt.key !== mt.key)
                    ? Yt('' + mt.key) + '/'
                    : '') +
                  kt
              ))),
            A.push(mt));
        return 1;
      }
      var It,
        Wt,
        an = 0,
        _t = Q === '' ? rn : Q + Jt;
      if (ot(b))
        for (var di = 0; di < b.length; di++)
          ((It = b[di]), (Wt = _t + Gt(It, di)), (an += aa(It, A, Y, Wt, Se)));
      else {
        var zo = R(b);
        if (typeof zo == 'function') {
          var Zl = b;
          zo === Zl.entries &&
            (Ft ||
              ce(
                'Using Maps as children is not supported. Use an array of keyed ReactElements instead.'
              ),
            (Ft = !0));
          for (var Fd = zo.call(Zl), Aa, es = 0; !(Aa = Fd.next()).done; )
            ((It = Aa.value),
              (Wt = _t + Gt(It, es++)),
              (an += aa(It, A, Y, Wt, Se)));
        } else if (Qe === 'object') {
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
      return an;
    }
    function Fr(b, A, Y) {
      if (b == null) return b;
      var Q = [],
        Se = 0;
      return (
        aa(b, Q, '', '', function (Qe) {
          return A.call(Y, Qe, Se++);
        }),
        Q
      );
    }
    function ji(b) {
      var A = 0;
      return (
        Fr(b, function () {
          A++;
        }),
        A
      );
    }
    function Ao(b, A, Y) {
      Fr(
        b,
        function () {
          A.apply(this, arguments);
        },
        Y
      );
    }
    function Vl(b) {
      return (
        Fr(b, function (A) {
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
        Se = !1;
      {
        var Qe = { $$typeof: g, _context: A };
        (Object.defineProperties(Qe, {
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
              Se ||
                (ce(
                  "Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",
                  Pe
                ),
                (Se = !0));
            },
          },
        }),
          (A.Consumer = Qe));
      }
      return ((A._currentRenderer = null), (A._currentRenderer2 = null), A);
    }
    var Ra = -1,
      ri = 0,
      _a = 1,
      Vr = 2;
    function Ir(b) {
      if (b._status === Ra) {
        var A = b._result,
          Y = A();
        if (
          (Y.then(
            function (Qe) {
              if (b._status === ri || b._status === Ra) {
                var Pe = b;
                ((Pe._status = _a), (Pe._result = Qe));
              }
            },
            function (Qe) {
              if (b._status === ri || b._status === Ra) {
                var Pe = b;
                ((Pe._status = Vr), (Pe._result = Qe));
              }
            }
          ),
          b._status === Ra)
        ) {
          var Q = b;
          ((Q._status = ri), (Q._result = Y));
        }
      }
      if (b._status === _a) {
        var Se = b._result;
        return (
          Se === void 0 &&
            ve(
              `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
              Se
            ),
          'default' in Se ||
            ve(
              `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
              Se
            ),
          Se.default
        );
      } else throw b._result;
    }
    function ia(b) {
      var A = { _status: Ra, _result: b },
        Y = { $$typeof: O, _payload: A, _init: Ir };
      {
        var Q, Se;
        Object.defineProperties(Y, {
          defaultProps: {
            configurable: !0,
            get: function () {
              return Q;
            },
            set: function (Qe) {
              (ve(
                'React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.'
              ),
                (Q = Qe),
                Object.defineProperty(Y, 'defaultProps', { enumerable: !0 }));
            },
          },
          propTypes: {
            configurable: !0,
            get: function () {
              return Se;
            },
            set: function (Qe) {
              (ve(
                'React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.'
              ),
                (Se = Qe),
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
      var A = { $$typeof: S, render: b };
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
        ie ||
        b === d ||
        b === E ||
        b === T ||
        W ||
        b === x ||
        ee ||
        ue ||
        B ||
        (typeof b == 'object' &&
          b !== null &&
          (b.$$typeof === O ||
            b.$$typeof === D ||
            b.$$typeof === m ||
            b.$$typeof === g ||
            b.$$typeof === S ||
            b.$$typeof === ai ||
            b.getModuleId !== void 0))
      );
    }
    function fe(b, A) {
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
          set: function (Se) {
            ((Q = Se), !b.name && !b.displayName && (b.displayName = Se));
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
    function We(b) {
      var A = ge();
      return A.useRef(b);
    }
    function ct(b, A) {
      var Y = ge();
      return Y.useEffect(b, A);
    }
    function yn(b, A) {
      var Y = ge();
      return Y.useInsertionEffect(b, A);
    }
    function jt(b, A) {
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
    function oa(b, A, Y) {
      var Q = ge();
      return Q.useImperativeHandle(b, A, Y);
    }
    function Dr(b, A) {
      {
        var Y = ge();
        return Y.useDebugValue(b, A);
      }
    }
    function Rn() {
      var b = ge();
      return b.useTransition();
    }
    function mr(b) {
      var A = ge();
      return A.useDeferredValue(b);
    }
    function ft() {
      var b = ge();
      return b.useId();
    }
    function Da(b, A, Y) {
      var Q = ge();
      return Q.useSyncExternalStore(b, A, Y);
    }
    var ii = 0,
      Il,
      Hl,
      Bl,
      jl,
      $l,
      Yl,
      Gl;
    function Wu() {}
    Wu.__reactDisabledLog = !0;
    function Pd() {
      {
        if (ii === 0) {
          ((Il = console.log),
            (Hl = console.info),
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
            log: we({}, b, { value: Il }),
            info: we({}, b, { value: Hl }),
            warn: we({}, b, { value: Bl }),
            error: we({}, b, { value: jl }),
            group: we({}, b, { value: $l }),
            groupCollapsed: we({}, b, { value: Yl }),
            groupEnd: we({}, b, { value: Gl }),
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
          } catch (Se) {
            var Q = Se.stack.trim().match(/\n( *(at )?)/);
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
      var Se = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Qe;
      ((Qe = Wi.current), (Wi.current = null), Pd());
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
            var tt = _t.stack.split(`
`),
              mt = Q.stack.split(`
`),
              kt = tt.length - 1,
              Vt = mt.length - 1;
            kt >= 1 && Vt >= 0 && tt[kt] !== mt[Vt];

          )
            Vt--;
          for (; kt >= 1 && Vt >= 0; kt--, Vt--)
            if (tt[kt] !== mt[Vt]) {
              if (kt !== 1 || Vt !== 1)
                do
                  if ((kt--, Vt--, Vt < 0 || tt[kt] !== mt[Vt])) {
                    var It =
                      `
` + tt[kt].replace(' at new ', ' at ');
                    return (
                      b.displayName &&
                        It.includes('<anonymous>') &&
                        (It = It.replace('<anonymous>', b.displayName)),
                      typeof b == 'function' && Mo.set(b, It),
                      It
                    );
                  }
                while (kt >= 1 && Vt >= 0);
              break;
            }
        }
      } finally {
        ((li = !1), (Wi.current = Qe), Wl(), (Error.prepareStackTrace = Se));
      }
      var Wt = b ? b.displayName || b.name : '',
        an = Wt ? oi(Wt) : '';
      return (typeof b == 'function' && Mo.set(b, an), an);
    }
    function Xl(b, A, Y) {
      return qu(b, !1);
    }
    function zd(b) {
      var A = b.prototype;
      return !!(A && A.isReactComponent);
    }
    function si(b, A, Y) {
      if (b == null) return '';
      if (typeof b == 'function') return qu(b, zd(b));
      if (typeof b == 'string') return oi(b);
      switch (b) {
        case E:
          return oi('Suspense');
        case T:
          return oi('SuspenseList');
      }
      if (typeof b == 'object')
        switch (b.$$typeof) {
          case S:
            return Xl(b.render);
          case D:
            return si(b.type, A, Y);
          case O: {
            var Q = b,
              Se = Q._payload,
              Qe = Q._init;
            try {
              return si(Qe(Se), A, Y);
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
    function Qu(b, A, Y, Q, Se) {
      {
        var Qe = Function.call.bind(V);
        for (var Pe in b)
          if (Qe(b, Pe)) {
            var tt = void 0;
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
              tt = b[Pe](
                A,
                Pe,
                Q,
                Y,
                null,
                'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
              );
            } catch (kt) {
              tt = kt;
            }
            (tt &&
              !(tt instanceof Error) &&
              (Lo(Se),
              ve(
                '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                Q || 'React class',
                Y,
                Pe,
                typeof tt
              ),
              Lo(null)),
              tt instanceof Error &&
                !(tt.message in Xu) &&
                ((Xu[tt.message] = !0),
                Lo(Se),
                ve('Failed %s type: %s', Y, tt.message),
                Lo(null)));
          }
      }
    }
    function wt(b) {
      if (b) {
        var A = b._owner,
          Y = si(b.type, b._source, A ? A.type : null);
        ne(Y);
      } else ne(null);
    }
    var Kl;
    Kl = !1;
    function Jl() {
      if (te.current) {
        var b = _(te.current.type);
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
    function st(b) {
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
      return b != null ? st(b.__source) : '';
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
            b._owner !== te.current &&
            (Q = ' It was passed a child from ' + _(b._owner.type) + '.'),
            wt(b),
            ve(
              'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
              Y,
              Q
            ),
            wt(null));
        }
      }
    }
    function Ju(b, A) {
      if (typeof b == 'object') {
        if (ot(b))
          for (var Y = 0; Y < b.length; Y++) {
            var Q = b[Y];
            At(Q) && ui(Q, A);
          }
        else if (At(b)) b._store && (b._store.validated = !0);
        else if (b) {
          var Se = R(b);
          if (typeof Se == 'function' && Se !== b.entries)
            for (var Qe = Se.call(b), Pe; !(Pe = Qe.next()).done; )
              At(Pe.value) && ui(Pe.value, A);
        }
      }
    }
    function _n(b) {
      {
        var A = b.type;
        if (A == null || typeof A == 'string') return;
        var Y;
        if (typeof A == 'function') Y = A.propTypes;
        else if (typeof A == 'object' && (A.$$typeof === S || A.$$typeof === D))
          Y = A.propTypes;
        else return;
        if (Y) {
          var Q = _(A);
          Qu(Y, b.props, 'prop', Q, b);
        } else if (A.PropTypes !== void 0 && !Kl) {
          Kl = !0;
          var Se = _(A);
          ve(
            'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
            Se || 'Unknown'
          );
        }
        typeof A.getDefaultProps == 'function' &&
          !A.getDefaultProps.isReactClassApproved &&
          ve(
            'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.'
          );
      }
    }
    function Zt(b) {
      {
        for (var A = Object.keys(b.props), Y = 0; Y < A.length; Y++) {
          var Q = A[Y];
          if (Q !== 'children' && Q !== 'key') {
            (wt(b),
              ve(
                'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
                Q
              ),
              wt(null));
            break;
          }
        }
        b.ref !== null &&
          (wt(b),
          ve('Invalid attribute `ref` supplied to `React.Fragment`.'),
          wt(null));
      }
    }
    function Zu(b, A, Y) {
      var Q = M(b);
      if (!Q) {
        var Se = '';
        (b === void 0 ||
          (typeof b == 'object' &&
            b !== null &&
            Object.keys(b).length === 0)) &&
          (Se +=
            " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
        var Qe = Ku(A);
        Qe ? (Se += Qe) : (Se += Jl());
        var Pe;
        (b === null
          ? (Pe = 'null')
          : ot(b)
            ? (Pe = 'array')
            : b !== void 0 && b.$$typeof === s
              ? ((Pe = '<' + (_(b.type) || 'Unknown') + ' />'),
                (Se =
                  ' Did you accidentally export a JSX literal instead of a component?'))
              : (Pe = typeof b),
          ve(
            'React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
            Pe,
            Se
          ));
      }
      var tt = Fe.apply(this, arguments);
      if (tt == null) return tt;
      if (Q) for (var mt = 2; mt < arguments.length; mt++) Ju(arguments[mt], b);
      return (b === f ? Zt(tt) : _n(tt), tt);
    }
    var yr = !1;
    function lr(b) {
      var A = Zu.bind(null, b);
      return (
        (A.type = b),
        yr ||
          ((yr = !0),
          ce(
            'React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.'
          )),
        Object.defineProperty(A, 'type', {
          enumerable: !1,
          get: function () {
            return (
              ce(
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
    function la(b, A, Y) {
      for (
        var Q = Tt.apply(this, arguments), Se = 2;
        Se < arguments.length;
        Se++
      )
        Ju(arguments[Se], Q.type);
      return (_n(Q), Q);
    }
    function Ud(b, A) {
      var Y = U.transition;
      U.transition = {};
      var Q = U.transition;
      U.transition._updatedFibers = new Set();
      try {
        b();
      } finally {
        if (((U.transition = Y), Y === null && Q._updatedFibers)) {
          var Se = Q._updatedFibers.size;
          (Se > 10 &&
            ce(
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
          Xi = function (Se) {
            ko === !1 &&
              ((ko = !0),
              typeof MessageChannel > 'u' &&
                ve(
                  'This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.'
                ));
            var Qe = new MessageChannel();
            ((Qe.port1.onmessage = Se), Qe.port2.postMessage(void 0));
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
            var Se = F.current;
            Se !== null && ((F.didScheduleLegacyUpdate = !1), Po(Se));
          }
        } catch (Wt) {
          throw (Oa(A), Wt);
        } finally {
          F.isBatchingLegacy = Y;
        }
        if (Q !== null && typeof Q == 'object' && typeof Q.then == 'function') {
          var Qe = Q,
            Pe = !1,
            tt = {
              then: function (Wt, an) {
                ((Pe = !0),
                  Qe.then(
                    function (_t) {
                      (Oa(A), ci === 0 ? No(_t, Wt, an) : Wt(_t));
                    },
                    function (_t) {
                      (Oa(A), an(_t));
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
            tt
          );
        } else {
          var mt = Q;
          if ((Oa(A), ci === 0)) {
            var kt = F.current;
            kt !== null && (Po(kt), (F.current = null));
            var Vt = {
              then: function (Wt, an) {
                F.current === null
                  ? ((F.current = []), No(mt, Wt, an))
                  : Wt(mt);
              },
            };
            return Vt;
          } else {
            var It = {
              then: function (Wt, an) {
                Wt(mt);
              },
            };
            return It;
          }
        }
      }
    }
    function Oa(b) {
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
          } catch (Se) {
            Y(Se);
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
      ac = la,
      ic = lr,
      oc = { map: Fr, forEach: Ao, count: ji, toArray: Vl, only: $i };
    ((a.Children = oc),
      (a.Component = _e),
      (a.Fragment = f),
      (a.Profiler = h),
      (a.PureComponent = it),
      (a.StrictMode = d),
      (a.Suspense = E),
      (a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pe),
      (a.act = nc),
      (a.cloneElement = ac),
      (a.createContext = Yi),
      (a.createElement = rc),
      (a.createFactory = ic),
      (a.createRef = Ze),
      (a.forwardRef = Gi),
      (a.isValidElement = At),
      (a.lazy = ia),
      (a.memo = fe),
      (a.startTransition = Ud),
      (a.unstable_act = nc),
      (a.useCallback = Xt),
      (a.useContext = $e),
      (a.useDebugValue = Dr),
      (a.useDeferredValue = mr),
      (a.useEffect = ct),
      (a.useId = ft),
      (a.useImperativeHandle = oa),
      (a.useInsertionEffect = yn),
      (a.useLayoutEffect = jt),
      (a.useMemo = jn),
      (a.useReducer = Et),
      (a.useRef = We),
      (a.useState = ht),
      (a.useSyncExternalStore = Da),
      (a.useTransition = Rn),
      (a.version = o),
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' &&
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ==
          'function' &&
        __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error()));
  })();
})(bd, bd.exports);
var WM = bd.exports;
AC.exports = WM;
var Z = AC.exports;
const Ct = DC(Z),
  qM = GM({ __proto__: null, default: Ct }, [Z]);
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
    a = Symbol.for('react.element'),
    o = Symbol.for('react.portal'),
    s = Symbol.for('react.fragment'),
    c = Symbol.for('react.strict_mode'),
    f = Symbol.for('react.profiler'),
    d = Symbol.for('react.provider'),
    h = Symbol.for('react.context'),
    m = Symbol.for('react.forward_ref'),
    g = Symbol.for('react.suspense'),
    S = Symbol.for('react.suspense_list'),
    E = Symbol.for('react.memo'),
    T = Symbol.for('react.lazy'),
    D = Symbol.for('react.offscreen'),
    O = Symbol.iterator,
    x = '@@iterator';
  function k(M) {
    if (M === null || typeof M != 'object') return null;
    var fe = (O && M[O]) || M[x];
    return typeof fe == 'function' ? fe : null;
  }
  var L = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function R(M) {
    {
      for (
        var fe = arguments.length, ge = new Array(fe > 1 ? fe - 1 : 0), $e = 1;
        $e < fe;
        $e++
      )
        ge[$e - 1] = arguments[$e];
      z('error', M, ge);
    }
  }
  function z(M, fe, ge) {
    {
      var $e = L.ReactDebugCurrentFrame,
        ht = $e.getStackAddendum();
      ht !== '' && ((fe += '%s'), (ge = ge.concat([ht])));
      var Et = ge.map(function (We) {
        return String(We);
      });
      (Et.unshift('Warning: ' + fe),
        Function.prototype.apply.call(console[M], console, Et));
    }
  }
  var U = !1,
    F = !1,
    te = !1,
    ae = !1,
    le = !1,
    ne;
  ne = Symbol.for('react.module.reference');
  function ee(M) {
    return !!(
      typeof M == 'string' ||
      typeof M == 'function' ||
      M === s ||
      M === f ||
      le ||
      M === c ||
      M === g ||
      M === S ||
      ae ||
      M === D ||
      U ||
      F ||
      te ||
      (typeof M == 'object' &&
        M !== null &&
        (M.$$typeof === T ||
          M.$$typeof === E ||
          M.$$typeof === d ||
          M.$$typeof === h ||
          M.$$typeof === m ||
          M.$$typeof === ne ||
          M.getModuleId !== void 0))
    );
  }
  function ue(M, fe, ge) {
    var $e = M.displayName;
    if ($e) return $e;
    var ht = fe.displayName || fe.name || '';
    return ht !== '' ? ge + '(' + ht + ')' : ge;
  }
  function B(M) {
    return M.displayName || 'Context';
  }
  function W(M) {
    if (M == null) return null;
    if (
      (typeof M.tag == 'number' &&
        R(
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
      case S:
        return 'SuspenseList';
    }
    if (typeof M == 'object')
      switch (M.$$typeof) {
        case h:
          var fe = M;
          return B(fe) + '.Consumer';
        case d:
          var ge = M;
          return B(ge._context) + '.Provider';
        case m:
          return ue(M, M.render, 'ForwardRef');
        case E:
          var $e = M.displayName || null;
          return $e !== null ? $e : W(M.type) || 'Memo';
        case T: {
          var ht = M,
            Et = ht._payload,
            We = ht._init;
          try {
            return W(We(Et));
          } catch {
            return null;
          }
        }
      }
    return null;
  }
  var ie = Object.assign,
    pe = 0,
    ce,
    ve,
    be,
    xe,
    Ye,
    Lt,
    we;
  function Ce() {}
  Ce.__reactDisabledLog = !0;
  function _e() {
    {
      if (pe === 0) {
        ((ce = console.log),
          (ve = console.info),
          (be = console.warn),
          (xe = console.error),
          (Ye = console.group),
          (Lt = console.groupCollapsed),
          (we = console.groupEnd));
        var M = { configurable: !0, enumerable: !0, value: Ce, writable: !0 };
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
          log: ie({}, M, { value: ce }),
          info: ie({}, M, { value: ve }),
          warn: ie({}, M, { value: be }),
          error: ie({}, M, { value: xe }),
          group: ie({}, M, { value: Ye }),
          groupCollapsed: ie({}, M, { value: Lt }),
          groupEnd: ie({}, M, { value: we }),
        });
      }
      pe < 0 &&
        R(
          'disabledDepth fell below zero. This is a bug in React. Please file an issue.'
        );
    }
  }
  var $ = L.ReactCurrentDispatcher,
    Je;
  function ye(M, fe, ge) {
    {
      if (Je === void 0)
        try {
          throw Error();
        } catch (ht) {
          var $e = ht.stack.trim().match(/\n( *(at )?)/);
          Je = ($e && $e[1]) || '';
        }
      return (
        `
` +
        Je +
        M
      );
    }
  }
  var it = !1,
    Xe;
  {
    var Ze = typeof WeakMap == 'function' ? WeakMap : Map;
    Xe = new Ze();
  }
  function se(M, fe) {
    if (!M || it) return '';
    {
      var ge = Xe.get(M);
      if (ge !== void 0) return ge;
    }
    var $e;
    it = !0;
    var ht = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    var Et;
    ((Et = $.current), ($.current = null), _e());
    try {
      if (fe) {
        var We = function () {
          throw Error();
        };
        if (
          (Object.defineProperty(We.prototype, 'props', {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == 'object' && Reflect.construct)
        ) {
          try {
            Reflect.construct(We, []);
          } catch (Rn) {
            $e = Rn;
          }
          Reflect.construct(M, [], We);
        } else {
          try {
            We.call();
          } catch (Rn) {
            $e = Rn;
          }
          M.call(We.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (Rn) {
          $e = Rn;
        }
        M();
      }
    } catch (Rn) {
      if (Rn && $e && typeof Rn.stack == 'string') {
        for (
          var ct = Rn.stack.split(`
`),
            yn = $e.stack.split(`
`),
            jt = ct.length - 1,
            Xt = yn.length - 1;
          jt >= 1 && Xt >= 0 && ct[jt] !== yn[Xt];

        )
          Xt--;
        for (; jt >= 1 && Xt >= 0; jt--, Xt--)
          if (ct[jt] !== yn[Xt]) {
            if (jt !== 1 || Xt !== 1)
              do
                if ((jt--, Xt--, Xt < 0 || ct[jt] !== yn[Xt])) {
                  var jn =
                    `
` + ct[jt].replace(' at new ', ' at ');
                  return (
                    M.displayName &&
                      jn.includes('<anonymous>') &&
                      (jn = jn.replace('<anonymous>', M.displayName)),
                    typeof M == 'function' && Xe.set(M, jn),
                    jn
                  );
                }
              while (jt >= 1 && Xt >= 0);
            break;
          }
      }
    } finally {
      ((it = !1), ($.current = Et), Ve(), (Error.prepareStackTrace = ht));
    }
    var oa = M ? M.displayName || M.name : '',
      Dr = oa ? ye(oa) : '';
    return (typeof M == 'function' && Xe.set(M, Dr), Dr);
  }
  function ot(M, fe, ge) {
    return se(M, !1);
  }
  function dt(M) {
    var fe = M.prototype;
    return !!(fe && fe.isReactComponent);
  }
  function Ie(M, fe, ge) {
    if (M == null) return '';
    if (typeof M == 'function') return se(M, dt(M));
    if (typeof M == 'string') return ye(M);
    switch (M) {
      case g:
        return ye('Suspense');
      case S:
        return ye('SuspenseList');
    }
    if (typeof M == 'object')
      switch (M.$$typeof) {
        case m:
          return ot(M.render);
        case E:
          return Ie(M.type, fe, ge);
        case T: {
          var $e = M,
            ht = $e._payload,
            Et = $e._init;
          try {
            return Ie(Et(ht), fe, ge);
          } catch {}
        }
      }
    return '';
  }
  var vt = Object.prototype.hasOwnProperty,
    Ge = {},
    Ot = L.ReactDebugCurrentFrame;
  function sn(M) {
    if (M) {
      var fe = M._owner,
        ge = Ie(M.type, M._source, fe ? fe.type : null);
      Ot.setExtraStackFrame(ge);
    } else Ot.setExtraStackFrame(null);
  }
  function _(M, fe, ge, $e, ht) {
    {
      var Et = Function.call.bind(vt);
      for (var We in M)
        if (Et(M, We)) {
          var ct = void 0;
          try {
            if (typeof M[We] != 'function') {
              var yn = Error(
                ($e || 'React class') +
                  ': ' +
                  ge +
                  ' type `' +
                  We +
                  '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                  typeof M[We] +
                  '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
              );
              throw ((yn.name = 'Invariant Violation'), yn);
            }
            ct = M[We](
              fe,
              We,
              $e,
              ge,
              null,
              'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
            );
          } catch (jt) {
            ct = jt;
          }
          (ct &&
            !(ct instanceof Error) &&
            (sn(ht),
            R(
              '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
              $e || 'React class',
              ge,
              We,
              typeof ct
            ),
            sn(null)),
            ct instanceof Error &&
              !(ct.message in Ge) &&
              ((Ge[ct.message] = !0),
              sn(ht),
              R('Failed %s type: %s', ge, ct.message),
              sn(null)));
        }
    }
  }
  var V = Array.isArray;
  function q(M) {
    return V(M);
  }
  function me(M) {
    {
      var fe = typeof Symbol == 'function' && Symbol.toStringTag,
        ge = (fe && M[Symbol.toStringTag]) || M.constructor.name || 'Object';
      return ge;
    }
  }
  function X(M) {
    try {
      return (re(M), !1);
    } catch {
      return !0;
    }
  }
  function re(M) {
    return '' + M;
  }
  function Me(M) {
    if (X(M))
      return (
        R(
          'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
          me(M)
        ),
        re(M)
      );
  }
  var Be = L.ReactCurrentOwner,
    et = { key: !0, ref: !0, __self: !0, __source: !0 },
    nn,
    or,
    Ee;
  Ee = {};
  function Fe(M) {
    if (vt.call(M, 'ref')) {
      var fe = Object.getOwnPropertyDescriptor(M, 'ref').get;
      if (fe && fe.isReactWarning) return !1;
    }
    return M.ref !== void 0;
  }
  function lt(M) {
    if (vt.call(M, 'key')) {
      var fe = Object.getOwnPropertyDescriptor(M, 'key').get;
      if (fe && fe.isReactWarning) return !1;
    }
    return M.key !== void 0;
  }
  function Tt(M, fe) {
    if (
      typeof M.ref == 'string' &&
      Be.current &&
      fe &&
      Be.current.stateNode !== fe
    ) {
      var ge = W(Be.current.type);
      Ee[ge] ||
        (R(
          'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
          W(Be.current.type),
          M.ref
        ),
        (Ee[ge] = !0));
    }
  }
  function At(M, fe) {
    {
      var ge = function () {
        nn ||
          ((nn = !0),
          R(
            '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
            fe
          ));
      };
      ((ge.isReactWarning = !0),
        Object.defineProperty(M, 'key', { get: ge, configurable: !0 }));
    }
  }
  function rn(M, fe) {
    {
      var ge = function () {
        or ||
          ((or = !0),
          R(
            '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
            fe
          ));
      };
      ((ge.isReactWarning = !0),
        Object.defineProperty(M, 'ref', { get: ge, configurable: !0 }));
    }
  }
  var Jt = function (M, fe, ge, $e, ht, Et, We) {
    var ct = { $$typeof: a, type: M, key: fe, ref: ge, props: We, _owner: Et };
    return (
      (ct._store = {}),
      Object.defineProperty(ct._store, 'validated', {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1,
      }),
      Object.defineProperty(ct, '_self', {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: $e,
      }),
      Object.defineProperty(ct, '_source', {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ht,
      }),
      Object.freeze && (Object.freeze(ct.props), Object.freeze(ct)),
      ct
    );
  };
  function kn(M, fe, ge, $e, ht) {
    {
      var Et,
        We = {},
        ct = null,
        yn = null;
      (ge !== void 0 && (Me(ge), (ct = '' + ge)),
        lt(fe) && (Me(fe.key), (ct = '' + fe.key)),
        Fe(fe) && ((yn = fe.ref), Tt(fe, ht)));
      for (Et in fe)
        vt.call(fe, Et) && !et.hasOwnProperty(Et) && (We[Et] = fe[Et]);
      if (M && M.defaultProps) {
        var jt = M.defaultProps;
        for (Et in jt) We[Et] === void 0 && (We[Et] = jt[Et]);
      }
      if (ct || yn) {
        var Xt =
          typeof M == 'function' ? M.displayName || M.name || 'Unknown' : M;
        (ct && At(We, Xt), yn && rn(We, Xt));
      }
      return Jt(M, ct, yn, ht, $e, Be.current, We);
    }
  }
  var Ft = L.ReactCurrentOwner,
    hr = L.ReactDebugCurrentFrame;
  function Yt(M) {
    if (M) {
      var fe = M._owner,
        ge = Ie(M.type, M._source, fe ? fe.type : null);
      hr.setExtraStackFrame(ge);
    } else hr.setExtraStackFrame(null);
  }
  var Gt;
  Gt = !1;
  function aa(M) {
    return typeof M == 'object' && M !== null && M.$$typeof === a;
  }
  function Fr() {
    {
      if (Ft.current) {
        var M = W(Ft.current.type);
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
        var fe = M.fileName.replace(/^.*[\\\/]/, ''),
          ge = M.lineNumber;
        return (
          `

Check your code at ` +
          fe +
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
      var fe = Fr();
      if (!fe) {
        var ge = typeof M == 'string' ? M : M.displayName || M.name;
        ge &&
          (fe =
            `

Check the top-level render call using <` +
            ge +
            '>.');
      }
      return fe;
    }
  }
  function $i(M, fe) {
    {
      if (!M._store || M._store.validated || M.key != null) return;
      M._store.validated = !0;
      var ge = Vl(fe);
      if (Ao[ge]) return;
      Ao[ge] = !0;
      var $e = '';
      (M &&
        M._owner &&
        M._owner !== Ft.current &&
        ($e = ' It was passed a child from ' + W(M._owner.type) + '.'),
        Yt(M),
        R(
          'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
          ge,
          $e
        ),
        Yt(null));
    }
  }
  function Yi(M, fe) {
    {
      if (typeof M != 'object') return;
      if (q(M))
        for (var ge = 0; ge < M.length; ge++) {
          var $e = M[ge];
          aa($e) && $i($e, fe);
        }
      else if (aa(M)) M._store && (M._store.validated = !0);
      else if (M) {
        var ht = k(M);
        if (typeof ht == 'function' && ht !== M.entries)
          for (var Et = ht.call(M), We; !(We = Et.next()).done; )
            aa(We.value) && $i(We.value, fe);
      }
    }
  }
  function Ra(M) {
    {
      var fe = M.type;
      if (fe == null || typeof fe == 'string') return;
      var ge;
      if (typeof fe == 'function') ge = fe.propTypes;
      else if (
        typeof fe == 'object' &&
        (fe.$$typeof === m || fe.$$typeof === E)
      )
        ge = fe.propTypes;
      else return;
      if (ge) {
        var $e = W(fe);
        _(ge, M.props, 'prop', $e, M);
      } else if (fe.PropTypes !== void 0 && !Gt) {
        Gt = !0;
        var ht = W(fe);
        R(
          'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
          ht || 'Unknown'
        );
      }
      typeof fe.getDefaultProps == 'function' &&
        !fe.getDefaultProps.isReactClassApproved &&
        R(
          'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.'
        );
    }
  }
  function ri(M) {
    {
      for (var fe = Object.keys(M.props), ge = 0; ge < fe.length; ge++) {
        var $e = fe[ge];
        if ($e !== 'children' && $e !== 'key') {
          (Yt(M),
            R(
              'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
              $e
            ),
            Yt(null));
          break;
        }
      }
      M.ref !== null &&
        (Yt(M),
        R('Invalid attribute `ref` supplied to `React.Fragment`.'),
        Yt(null));
    }
  }
  var _a = {};
  function Vr(M, fe, ge, $e, ht, Et) {
    {
      var We = ee(M);
      if (!We) {
        var ct = '';
        (M === void 0 ||
          (typeof M == 'object' &&
            M !== null &&
            Object.keys(M).length === 0)) &&
          (ct +=
            " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
        var yn = ji(ht);
        yn ? (ct += yn) : (ct += Fr());
        var jt;
        (M === null
          ? (jt = 'null')
          : q(M)
            ? (jt = 'array')
            : M !== void 0 && M.$$typeof === a
              ? ((jt = '<' + (W(M.type) || 'Unknown') + ' />'),
                (ct =
                  ' Did you accidentally export a JSX literal instead of a component?'))
              : (jt = typeof M),
          R(
            'React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
            jt,
            ct
          ));
      }
      var Xt = kn(M, fe, ge, ht, Et);
      if (Xt == null) return Xt;
      if (We) {
        var jn = fe.children;
        if (jn !== void 0)
          if ($e)
            if (q(jn)) {
              for (var oa = 0; oa < jn.length; oa++) Yi(jn[oa], M);
              Object.freeze && Object.freeze(jn);
            } else
              R(
                'React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.'
              );
          else Yi(jn, M);
      }
      if (vt.call(fe, 'key')) {
        var Dr = W(M),
          Rn = Object.keys(fe).filter(function (Da) {
            return Da !== 'key';
          }),
          mr =
            Rn.length > 0
              ? '{key: someKey, ' + Rn.join(': ..., ') + ': ...}'
              : '{key: someKey}';
        if (!_a[Dr + mr]) {
          var ft = Rn.length > 0 ? '{' + Rn.join(': ..., ') + ': ...}' : '{}';
          (R(
            `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
            mr,
            Dr,
            ft,
            Dr
          ),
            (_a[Dr + mr] = !0));
        }
      }
      return (M === s ? ri(Xt) : Ra(Xt), Xt);
    }
  }
  function Ir(M, fe, ge) {
    return Vr(M, fe, ge, !0);
  }
  function ia(M, fe, ge) {
    return Vr(M, fe, ge, !1);
  }
  var Gi = ia,
    ai = Ir;
  ((pd.Fragment = s), (pd.jsx = Gi), (pd.jsxs = ai));
})();
OC.exports = pd;
var MC = OC.exports;
const Re = MC.jsx,
  cn = MC.jsxs;
var LC = { exports: {} },
  Rr = {},
  kC = { exports: {} },
  NC = {};
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
    var a = !1,
      o = !1,
      s = 5;
    function c(Ee, Fe) {
      var lt = Ee.length;
      (Ee.push(Fe), h(Ee, Fe, lt));
    }
    function f(Ee) {
      return Ee.length === 0 ? null : Ee[0];
    }
    function d(Ee) {
      if (Ee.length === 0) return null;
      var Fe = Ee[0],
        lt = Ee.pop();
      return (lt !== Fe && ((Ee[0] = lt), m(Ee, lt, 0)), Fe);
    }
    function h(Ee, Fe, lt) {
      for (var Tt = lt; Tt > 0; ) {
        var At = (Tt - 1) >>> 1,
          rn = Ee[At];
        if (g(rn, Fe) > 0) ((Ee[At] = Fe), (Ee[Tt] = rn), (Tt = At));
        else return;
      }
    }
    function m(Ee, Fe, lt) {
      for (var Tt = lt, At = Ee.length, rn = At >>> 1; Tt < rn; ) {
        var Jt = (Tt + 1) * 2 - 1,
          kn = Ee[Jt],
          Ft = Jt + 1,
          hr = Ee[Ft];
        if (g(kn, Fe) < 0)
          Ft < At && g(hr, kn) < 0
            ? ((Ee[Tt] = hr), (Ee[Ft] = Fe), (Tt = Ft))
            : ((Ee[Tt] = kn), (Ee[Jt] = Fe), (Tt = Jt));
        else if (Ft < At && g(hr, Fe) < 0)
          ((Ee[Tt] = hr), (Ee[Ft] = Fe), (Tt = Ft));
        else return;
      }
    }
    function g(Ee, Fe) {
      var lt = Ee.sortIndex - Fe.sortIndex;
      return lt !== 0 ? lt : Ee.id - Fe.id;
    }
    var S = 1,
      E = 2,
      T = 3,
      D = 4,
      O = 5;
    function x(Ee, Fe) {}
    var k =
      typeof performance == 'object' && typeof performance.now == 'function';
    if (k) {
      var L = performance;
      r.unstable_now = function () {
        return L.now();
      };
    } else {
      var R = Date,
        z = R.now();
      r.unstable_now = function () {
        return R.now() - z;
      };
    }
    var U = 1073741823,
      F = -1,
      te = 250,
      ae = 5e3,
      le = 1e4,
      ne = U,
      ee = [],
      ue = [],
      B = 1,
      W = null,
      ie = T,
      pe = !1,
      ce = !1,
      ve = !1,
      be = typeof setTimeout == 'function' ? setTimeout : null,
      xe = typeof clearTimeout == 'function' ? clearTimeout : null,
      Ye = typeof setImmediate < 'u' ? setImmediate : null;
    typeof navigator < 'u' &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Lt(Ee) {
      for (var Fe = f(ue); Fe !== null; ) {
        if (Fe.callback === null) d(ue);
        else if (Fe.startTime <= Ee)
          (d(ue), (Fe.sortIndex = Fe.expirationTime), c(ee, Fe));
        else return;
        Fe = f(ue);
      }
    }
    function we(Ee) {
      if (((ve = !1), Lt(Ee), !ce))
        if (f(ee) !== null) ((ce = !0), Me(Ce));
        else {
          var Fe = f(ue);
          Fe !== null && Be(we, Fe.startTime - Ee);
        }
    }
    function Ce(Ee, Fe) {
      ((ce = !1), ve && ((ve = !1), et()), (pe = !0));
      var lt = ie;
      try {
        var Tt;
        if (!o) return _e(Ee, Fe);
      } finally {
        ((W = null), (ie = lt), (pe = !1));
      }
    }
    function _e(Ee, Fe) {
      var lt = Fe;
      for (
        Lt(lt), W = f(ee);
        W !== null && !a && !(W.expirationTime > lt && (!Ee || sn()));

      ) {
        var Tt = W.callback;
        if (typeof Tt == 'function') {
          ((W.callback = null), (ie = W.priorityLevel));
          var At = W.expirationTime <= lt,
            rn = Tt(At);
          ((lt = r.unstable_now()),
            typeof rn == 'function' ? (W.callback = rn) : W === f(ee) && d(ee),
            Lt(lt));
        } else d(ee);
        W = f(ee);
      }
      if (W !== null) return !0;
      var Jt = f(ue);
      return (Jt !== null && Be(we, Jt.startTime - lt), !1);
    }
    function Ve(Ee, Fe) {
      switch (Ee) {
        case S:
        case E:
        case T:
        case D:
        case O:
          break;
        default:
          Ee = T;
      }
      var lt = ie;
      ie = Ee;
      try {
        return Fe();
      } finally {
        ie = lt;
      }
    }
    function $(Ee) {
      var Fe;
      switch (ie) {
        case S:
        case E:
        case T:
          Fe = T;
          break;
        default:
          Fe = ie;
          break;
      }
      var lt = ie;
      ie = Fe;
      try {
        return Ee();
      } finally {
        ie = lt;
      }
    }
    function Je(Ee) {
      var Fe = ie;
      return function () {
        var lt = ie;
        ie = Fe;
        try {
          return Ee.apply(this, arguments);
        } finally {
          ie = lt;
        }
      };
    }
    function ye(Ee, Fe, lt) {
      var Tt = r.unstable_now(),
        At;
      if (typeof lt == 'object' && lt !== null) {
        var rn = lt.delay;
        typeof rn == 'number' && rn > 0 ? (At = Tt + rn) : (At = Tt);
      } else At = Tt;
      var Jt;
      switch (Ee) {
        case S:
          Jt = F;
          break;
        case E:
          Jt = te;
          break;
        case O:
          Jt = ne;
          break;
        case D:
          Jt = le;
          break;
        case T:
        default:
          Jt = ae;
          break;
      }
      var kn = At + Jt,
        Ft = {
          id: B++,
          callback: Fe,
          priorityLevel: Ee,
          startTime: At,
          expirationTime: kn,
          sortIndex: -1,
        };
      return (
        At > Tt
          ? ((Ft.sortIndex = At),
            c(ue, Ft),
            f(ee) === null &&
              Ft === f(ue) &&
              (ve ? et() : (ve = !0), Be(we, At - Tt)))
          : ((Ft.sortIndex = kn), c(ee, Ft), !ce && !pe && ((ce = !0), Me(Ce))),
        Ft
      );
    }
    function it() {}
    function Xe() {
      !ce && !pe && ((ce = !0), Me(Ce));
    }
    function Ze() {
      return f(ee);
    }
    function se(Ee) {
      Ee.callback = null;
    }
    function ot() {
      return ie;
    }
    var dt = !1,
      Ie = null,
      vt = -1,
      Ge = s,
      Ot = -1;
    function sn() {
      var Ee = r.unstable_now() - Ot;
      return !(Ee < Ge);
    }
    function _() {}
    function V(Ee) {
      if (Ee < 0 || Ee > 125) {
        console.error(
          'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
        );
        return;
      }
      Ee > 0 ? (Ge = Math.floor(1e3 / Ee)) : (Ge = s);
    }
    var q = function () {
        if (Ie !== null) {
          var Ee = r.unstable_now();
          Ot = Ee;
          var Fe = !0,
            lt = !0;
          try {
            lt = Ie(Fe, Ee);
          } finally {
            lt ? me() : ((dt = !1), (Ie = null));
          }
        } else dt = !1;
      },
      me;
    if (typeof Ye == 'function')
      me = function () {
        Ye(q);
      };
    else if (typeof MessageChannel < 'u') {
      var X = new MessageChannel(),
        re = X.port2;
      ((X.port1.onmessage = q),
        (me = function () {
          re.postMessage(null);
        }));
    } else
      me = function () {
        be(q, 0);
      };
    function Me(Ee) {
      ((Ie = Ee), dt || ((dt = !0), me()));
    }
    function Be(Ee, Fe) {
      vt = be(function () {
        Ee(r.unstable_now());
      }, Fe);
    }
    function et() {
      (xe(vt), (vt = -1));
    }
    var nn = _,
      or = null;
    ((r.unstable_IdlePriority = O),
      (r.unstable_ImmediatePriority = S),
      (r.unstable_LowPriority = D),
      (r.unstable_NormalPriority = T),
      (r.unstable_Profiling = or),
      (r.unstable_UserBlockingPriority = E),
      (r.unstable_cancelCallback = se),
      (r.unstable_continueExecution = Xe),
      (r.unstable_forceFrameRate = V),
      (r.unstable_getCurrentPriorityLevel = ot),
      (r.unstable_getFirstCallbackNode = Ze),
      (r.unstable_next = $),
      (r.unstable_pauseExecution = it),
      (r.unstable_requestPaint = nn),
      (r.unstable_runWithPriority = Ve),
      (r.unstable_scheduleCallback = ye),
      (r.unstable_shouldYield = sn),
      (r.unstable_wrapCallback = Je),
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' &&
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ==
          'function' &&
        __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error()));
  })();
})(NC);
kC.exports = NC;
var XM = kC.exports;
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
    a = XM,
    o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    s = !1;
  function c(e) {
    s = e;
  }
  function f(e) {
    if (!s) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1;
        i < t;
        i++
      )
        n[i - 1] = arguments[i];
      h('warn', e, n);
    }
  }
  function d(e) {
    if (!s) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1;
        i < t;
        i++
      )
        n[i - 1] = arguments[i];
      h('error', e, n);
    }
  }
  function h(e, t, n) {
    {
      var i = o.ReactDebugCurrentFrame,
        l = i.getStackAddendum();
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
    S = 2,
    E = 3,
    T = 4,
    D = 5,
    O = 6,
    x = 7,
    k = 8,
    L = 9,
    R = 10,
    z = 11,
    U = 12,
    F = 13,
    te = 14,
    ae = 15,
    le = 16,
    ne = 17,
    ee = 18,
    ue = 19,
    B = 21,
    W = 22,
    ie = 23,
    pe = 24,
    ce = 25,
    ve = !0,
    be = !1,
    xe = !1,
    Ye = !1,
    Lt = !1,
    we = !0,
    Ce = !1,
    _e = !0,
    Ve = !0,
    $ = !0,
    Je = !0,
    ye = new Set(),
    it = {},
    Xe = {};
  function Ze(e, t) {
    (se(e, t), se(e + 'Capture', t));
  }
  function se(e, t) {
    (it[e] &&
      d(
        'EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.',
        e
      ),
      (it[e] = t));
    {
      var n = e.toLowerCase();
      ((Xe[n] = e), e === 'onDoubleClick' && (Xe.ondblclick = e));
    }
    for (var i = 0; i < t.length; i++) ye.add(t[i]);
  }
  var ot =
      typeof window < 'u' &&
      typeof window.document < 'u' &&
      typeof window.document.createElement < 'u',
    dt = Object.prototype.hasOwnProperty;
  function Ie(e) {
    {
      var t = typeof Symbol == 'function' && Symbol.toStringTag,
        n = (t && e[Symbol.toStringTag]) || e.constructor.name || 'Object';
      return n;
    }
  }
  function vt(e) {
    try {
      return (Ge(e), !1);
    } catch {
      return !0;
    }
  }
  function Ge(e) {
    return '' + e;
  }
  function Ot(e, t) {
    if (vt(e))
      return (
        d(
          'The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.',
          t,
          Ie(e)
        ),
        Ge(e)
      );
  }
  function sn(e) {
    if (vt(e))
      return (
        d(
          'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
          Ie(e)
        ),
        Ge(e)
      );
  }
  function _(e, t) {
    if (vt(e))
      return (
        d(
          'The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.',
          t,
          Ie(e)
        ),
        Ge(e)
      );
  }
  function V(e, t) {
    if (vt(e))
      return (
        d(
          'The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.',
          t,
          Ie(e)
        ),
        Ge(e)
      );
  }
  function q(e) {
    if (vt(e))
      return (
        d(
          'The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.',
          Ie(e)
        ),
        Ge(e)
      );
  }
  function me(e) {
    if (vt(e))
      return (
        d(
          'Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.',
          Ie(e)
        ),
        Ge(e)
      );
  }
  var X = 0,
    re = 1,
    Me = 2,
    Be = 3,
    et = 4,
    nn = 5,
    or = 6,
    Ee =
      ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD',
    Fe = Ee + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040',
    lt = new RegExp('^[' + Ee + '][' + Fe + ']*$'),
    Tt = {},
    At = {};
  function rn(e) {
    return dt.call(At, e)
      ? !0
      : dt.call(Tt, e)
        ? !1
        : lt.test(e)
          ? ((At[e] = !0), !0)
          : ((Tt[e] = !0), d('Invalid attribute name: `%s`', e), !1);
  }
  function Jt(e, t, n) {
    return t !== null
      ? t.type === X
      : n
        ? !1
        : e.length > 2 &&
          (e[0] === 'o' || e[0] === 'O') &&
          (e[1] === 'n' || e[1] === 'N');
  }
  function kn(e, t, n, i) {
    if (n !== null && n.type === X) return !1;
    switch (typeof t) {
      case 'function':
      case 'symbol':
        return !0;
      case 'boolean': {
        if (i) return !1;
        if (n !== null) return !n.acceptsBooleans;
        var l = e.toLowerCase().slice(0, 5);
        return l !== 'data-' && l !== 'aria-';
      }
      default:
        return !1;
    }
  }
  function Ft(e, t, n, i) {
    if (t === null || typeof t > 'u' || kn(e, t, n, i)) return !0;
    if (i) return !1;
    if (n !== null)
      switch (n.type) {
        case Be:
          return !t;
        case et:
          return t === !1;
        case nn:
          return isNaN(t);
        case or:
          return isNaN(t) || t < 1;
      }
    return !1;
  }
  function hr(e) {
    return Gt.hasOwnProperty(e) ? Gt[e] : null;
  }
  function Yt(e, t, n, i, l, u, p) {
    ((this.acceptsBooleans = t === Me || t === Be || t === et),
      (this.attributeName = i),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = u),
      (this.removeEmptyString = p));
  }
  var Gt = {},
    aa = [
      'children',
      'dangerouslySetInnerHTML',
      'defaultValue',
      'defaultChecked',
      'innerHTML',
      'suppressContentEditableWarning',
      'suppressHydrationWarning',
      'style',
    ];
  (aa.forEach(function (e) {
    Gt[e] = new Yt(e, X, !1, e, null, !1, !1);
  }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0],
        n = e[1];
      Gt[t] = new Yt(t, re, !1, n, null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(
      function (e) {
        Gt[e] = new Yt(e, Me, !1, e.toLowerCase(), null, !1, !1);
      }
    ),
    [
      'autoReverse',
      'externalResourcesRequired',
      'focusable',
      'preserveAlpha',
    ].forEach(function (e) {
      Gt[e] = new Yt(e, Me, !1, e, null, !1, !1);
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
      Gt[e] = new Yt(e, Be, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      Gt[e] = new Yt(e, Be, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
      Gt[e] = new Yt(e, et, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      Gt[e] = new Yt(e, or, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      Gt[e] = new Yt(e, nn, !1, e.toLowerCase(), null, !1, !1);
    }));
  var Fr = /[\-\:]([a-z])/g,
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
    var t = e.replace(Fr, ji);
    Gt[t] = new Yt(t, re, !1, e, null, !1, !1);
  }),
    [
      'xlink:actuate',
      'xlink:arcrole',
      'xlink:role',
      'xlink:show',
      'xlink:title',
      'xlink:type',
    ].forEach(function (e) {
      var t = e.replace(Fr, ji);
      Gt[t] = new Yt(t, re, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
    }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(Fr, ji);
      Gt[t] = new Yt(
        t,
        re,
        !1,
        e,
        'http://www.w3.org/XML/1998/namespace',
        !1,
        !1
      );
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      Gt[e] = new Yt(e, re, !1, e.toLowerCase(), null, !1, !1);
    }));
  var Ao = 'xlinkHref';
  ((Gt[Ao] = new Yt(
    'xlinkHref',
    re,
    !1,
    'xlink:href',
    'http://www.w3.org/1999/xlink',
    !0,
    !1
  )),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      Gt[e] = new Yt(e, re, !1, e.toLowerCase(), null, !0, !0);
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
  function Ra(e, t, n, i) {
    if (i.mustUseProperty) {
      var l = i.propertyName;
      return e[l];
    } else {
      (Ot(n, t), i.sanitizeURL && Yi('' + n));
      var u = i.attributeName,
        p = null;
      if (i.type === et) {
        if (e.hasAttribute(u)) {
          var v = e.getAttribute(u);
          return v === '' ? !0 : Ft(t, n, i, !1) ? v : v === '' + n ? n : v;
        }
      } else if (e.hasAttribute(u)) {
        if (Ft(t, n, i, !1)) return e.getAttribute(u);
        if (i.type === Be) return n;
        p = e.getAttribute(u);
      }
      return Ft(t, n, i, !1) ? (p === null ? n : p) : p === '' + n ? n : p;
    }
  }
  function ri(e, t, n, i) {
    {
      if (!rn(t)) return;
      if (!e.hasAttribute(t)) return n === void 0 ? void 0 : null;
      var l = e.getAttribute(t);
      return (Ot(n, t), l === '' + n ? n : l);
    }
  }
  function _a(e, t, n, i) {
    var l = hr(t);
    if (!Jt(t, l, i)) {
      if ((Ft(t, n, l, i) && (n = null), i || l === null)) {
        if (rn(t)) {
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
      var w = l.attributeName,
        C = l.attributeNamespace;
      if (n === null) e.removeAttribute(w);
      else {
        var P = l.type,
          N;
        (P === Be || (P === et && n === !0)
          ? (N = '')
          : (Ot(n, w), (N = '' + n), l.sanitizeURL && Yi(N.toString())),
          C ? e.setAttributeNS(C, w, N) : e.setAttribute(w, N));
      }
    }
  }
  var Vr = Symbol.for('react.element'),
    Ir = Symbol.for('react.portal'),
    ia = Symbol.for('react.fragment'),
    Gi = Symbol.for('react.strict_mode'),
    ai = Symbol.for('react.profiler'),
    M = Symbol.for('react.provider'),
    fe = Symbol.for('react.context'),
    ge = Symbol.for('react.forward_ref'),
    $e = Symbol.for('react.suspense'),
    ht = Symbol.for('react.suspense_list'),
    Et = Symbol.for('react.memo'),
    We = Symbol.for('react.lazy'),
    ct = Symbol.for('react.scope'),
    yn = Symbol.for('react.debug_trace_mode'),
    jt = Symbol.for('react.offscreen'),
    Xt = Symbol.for('react.legacy_hidden'),
    jn = Symbol.for('react.cache'),
    oa = Symbol.for('react.tracing_marker'),
    Dr = Symbol.iterator,
    Rn = '@@iterator';
  function mr(e) {
    if (e === null || typeof e != 'object') return null;
    var t = (Dr && e[Dr]) || e[Rn];
    return typeof t == 'function' ? t : null;
  }
  var ft = Object.assign,
    Da = 0,
    ii,
    Il,
    Hl,
    Bl,
    jl,
    $l,
    Yl;
  function Gl() {}
  Gl.__reactDisabledLog = !0;
  function Wu() {
    {
      if (Da === 0) {
        ((ii = console.log),
          (Il = console.info),
          (Hl = console.warn),
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
      Da++;
    }
  }
  function Pd() {
    {
      if ((Da--, Da === 0)) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: ft({}, e, { value: ii }),
          info: ft({}, e, { value: Il }),
          warn: ft({}, e, { value: Hl }),
          error: ft({}, e, { value: Bl }),
          group: ft({}, e, { value: jl }),
          groupCollapsed: ft({}, e, { value: $l }),
          groupEnd: ft({}, e, { value: Yl }),
        });
      }
      Da < 0 &&
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
          var i = l.stack.trim().match(/\n( *(at )?)/);
          Wi = (i && i[1]) || '';
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
    var i;
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
            i = G;
          }
          Reflect.construct(e, [], p);
        } else {
          try {
            p.call();
          } catch (G) {
            i = G;
          }
          e.call(p.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (G) {
          i = G;
        }
        e();
      }
    } catch (G) {
      if (G && i && typeof G.stack == 'string') {
        for (
          var v = G.stack.split(`
`),
            y = i.stack.split(`
`),
            w = v.length - 1,
            C = y.length - 1;
          w >= 1 && C >= 0 && v[w] !== y[C];

        )
          C--;
        for (; w >= 1 && C >= 0; w--, C--)
          if (v[w] !== y[C]) {
            if (w !== 1 || C !== 1)
              do
                if ((w--, C--, C < 0 || v[w] !== y[C])) {
                  var P =
                    `
` + v[w].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      P.includes('<anonymous>') &&
                      (P = P.replace('<anonymous>', e.displayName)),
                    typeof e == 'function' && li.set(e, P),
                    P
                  );
                }
              while (w >= 1 && C >= 0);
            break;
          }
      }
    } finally {
      ((oi = !1), (Wl.current = u), Pd(), (Error.prepareStackTrace = l));
    }
    var N = e ? e.displayName || e.name : '',
      j = N ? Or(N) : '';
    return (typeof e == 'function' && li.set(e, j), j);
  }
  function qu(e, t, n) {
    return ql(e, !0);
  }
  function Xl(e, t, n) {
    return ql(e, !1);
  }
  function zd(e) {
    var t = e.prototype;
    return !!(t && t.isReactComponent);
  }
  function si(e, t, n) {
    if (e == null) return '';
    if (typeof e == 'function') return ql(e, zd(e));
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
        case We: {
          var i = e,
            l = i._payload,
            u = i._init;
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
      case le:
        return Or('Lazy');
      case F:
        return Or('Suspense');
      case ue:
        return Or('SuspenseList');
      case m:
      case S:
      case ae:
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
    } catch (i) {
      return (
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack
      );
    }
  }
  function Lo(e, t, n) {
    var i = e.displayName;
    if (i) return i;
    var l = t.displayName || t.name || '';
    return l !== '' ? n + '(' + l + ')' : n;
  }
  function Qu(e) {
    return e.displayName || 'Context';
  }
  function wt(e) {
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
      case ia:
        return 'Fragment';
      case Ir:
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
        case fe:
          var t = e;
          return Qu(t) + '.Consumer';
        case M:
          var n = e;
          return Qu(n._context) + '.Provider';
        case ge:
          return Lo(e, e.render, 'ForwardRef');
        case Et:
          var i = e.displayName || null;
          return i !== null ? i : wt(e.type) || 'Memo';
        case We: {
          var l = e,
            u = l._payload,
            p = l._init;
          try {
            return wt(p(u));
          } catch {
            return null;
          }
        }
      }
    return null;
  }
  function Kl(e, t, n) {
    var i = t.displayName || t.name || '';
    return e.displayName || (i !== '' ? n + '(' + i + ')' : n);
  }
  function Jl(e) {
    return e.displayName || 'Context';
  }
  function st(e) {
    var t = e.tag,
      n = e.type;
    switch (t) {
      case pe:
        return 'Cache';
      case L:
        var i = n;
        return Jl(i) + '.Consumer';
      case R:
        var l = n;
        return Jl(l._context) + '.Provider';
      case ee:
        return 'DehydratedFragment';
      case z:
        return Kl(n, n.render, 'ForwardRef');
      case x:
        return 'Fragment';
      case D:
        return n;
      case T:
        return 'Portal';
      case E:
        return 'Root';
      case O:
        return 'Text';
      case le:
        return wt(n);
      case k:
        return n === Gi ? 'StrictMode' : 'Mode';
      case W:
        return 'Offscreen';
      case U:
        return 'Profiler';
      case B:
        return 'Scope';
      case F:
        return 'Suspense';
      case ue:
        return 'SuspenseList';
      case ce:
        return 'TracingMarker';
      case g:
      case m:
      case ne:
      case S:
      case te:
      case ae:
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
      if (e !== null && typeof e < 'u') return st(e);
    }
    return null;
  }
  function Ju() {
    return $n === null ? '' : Ql($n);
  }
  function _n() {
    ((Ku.getCurrentStack = null), ($n = null), (qi = !1));
  }
  function Zt(e) {
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
  function la(e) {
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
  var Ud = {
    button: !0,
    checkbox: !0,
    image: !0,
    hidden: !0,
    radio: !0,
    reset: !0,
    submit: !0,
  };
  function ko(e, t) {
    (Ud[t.type] ||
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
    var i = '' + e[t];
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
          (me(v), (i = '' + v), u.call(this, v));
        },
      }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }));
      var p = {
        getValue: function () {
          return i;
        },
        setValue: function (v) {
          (me(v), (i = '' + v));
        },
        stopTracking: function () {
          (ci(e), delete e[t]);
        },
      };
      return p;
    }
  }
  function Oa(e) {
    ec(e) || (e._valueTracker = nc(e));
  }
  function No(e) {
    if (!e) return !1;
    var t = ec(e);
    if (!t) return !0;
    var n = t.getValue(),
      i = tc(e);
    return i !== n ? (t.setValue(i), !0) : !1;
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
      i = t.checked,
      l = ft({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? n._wrapperState.initialChecked,
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
      i = t.defaultValue == null ? '' : t.defaultValue;
    n._wrapperState = {
      initialChecked: t.checked != null ? t.checked : t.defaultChecked,
      initialValue: la(t.value != null ? t.value : i),
      controlled: oc(t),
    };
  }
  function Y(e, t) {
    var n = e,
      i = t.checked;
    i != null && _a(n, 'checked', i, !1);
  }
  function Q(e, t) {
    var n = e;
    {
      var i = oc(t);
      (!n._wrapperState.controlled &&
        i &&
        !ic &&
        (d(
          'A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components'
        ),
        (ic = !0)),
        n._wrapperState.controlled &&
          !i &&
          !ac &&
          (d(
            'A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components'
          ),
          (ac = !0)));
    }
    Y(e, t);
    var l = la(t.value),
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
      ? tt(n, t.type, l)
      : t.hasOwnProperty('defaultValue') && tt(n, t.type, la(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (n.defaultChecked = !!t.defaultChecked));
  }
  function Se(e, t, n) {
    var i = e;
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
      var l = t.type,
        u = l === 'submit' || l === 'reset';
      if (u && (t.value === void 0 || t.value === null)) return;
      var p = lr(i._wrapperState.initialValue);
      (n || (p !== i.value && (i.value = p)), (i.defaultValue = p));
    }
    var v = i.name;
    (v !== '' && (i.name = ''),
      (i.defaultChecked = !i.defaultChecked),
      (i.defaultChecked = !!i._wrapperState.initialChecked),
      v !== '' && (i.name = v));
  }
  function Qe(e, t) {
    var n = e;
    (Q(n, t), Pe(n, t));
  }
  function Pe(e, t) {
    var n = t.name;
    if (t.type === 'radio' && n != null) {
      for (var i = e; i.parentNode; ) i = i.parentNode;
      Ot(n, 'name');
      for (
        var l = i.querySelectorAll(
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
  function tt(e, t, n) {
    (t !== 'number' || fi(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = lr(e._wrapperState.initialValue))
        : e.defaultValue !== lr(n) && (e.defaultValue = lr(n)));
  }
  var mt = !1,
    kt = !1,
    Vt = !1;
  function It(e, t) {
    (t.value == null &&
      (typeof t.children == 'object' && t.children !== null
        ? r.Children.forEach(t.children, function (n) {
            n != null &&
              (typeof n == 'string' ||
                typeof n == 'number' ||
                kt ||
                ((kt = !0),
                d(
                  'Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.'
                )));
          })
        : t.dangerouslySetInnerHTML != null &&
          (Vt ||
            ((Vt = !0),
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
  function Wt(e, t) {
    t.value != null && e.setAttribute('value', lr(la(t.value)));
  }
  var an = Array.isArray;
  function _t(e) {
    return an(e);
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
  function Fd(e) {
    {
      ko('select', e);
      for (var t = 0; t < Zl.length; t++) {
        var n = Zl[t];
        if (e[n] != null) {
          var i = _t(e[n]);
          e.multiple && !i
            ? d(
                'The `%s` prop supplied to <select> must be an array if `multiple` is true.%s',
                n,
                zo()
              )
            : !e.multiple &&
              i &&
              d(
                'The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s',
                n,
                zo()
              );
        }
      }
    }
  }
  function Aa(e, t, n, i) {
    var l = e.options;
    if (t) {
      for (var u = n, p = {}, v = 0; v < u.length; v++) p['$' + u[v]] = !0;
      for (var y = 0; y < l.length; y++) {
        var w = p.hasOwnProperty('$' + l[y].value);
        (l[y].selected !== w && (l[y].selected = w),
          w && i && (l[y].defaultSelected = !0));
      }
    } else {
      for (var C = lr(la(n)), P = null, N = 0; N < l.length; N++) {
        if (l[N].value === C) {
          ((l[N].selected = !0), i && (l[N].defaultSelected = !0));
          return;
        }
        P === null && !l[N].disabled && (P = l[N]);
      }
      P !== null && (P.selected = !0);
    }
  }
  function es(e, t) {
    return ft({}, t, { value: void 0 });
  }
  function ts(e, t) {
    var n = e;
    (Fd(t),
      (n._wrapperState = { wasMultiple: !!t.multiple }),
      t.value !== void 0 &&
        t.defaultValue !== void 0 &&
        !di &&
        (d(
          'Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components'
        ),
        (di = !0)));
  }
  function Vd(e, t) {
    var n = e;
    n.multiple = !!t.multiple;
    var i = t.value;
    i != null
      ? Aa(n, !!t.multiple, i, !1)
      : t.defaultValue != null && Aa(n, !!t.multiple, t.defaultValue, !0);
  }
  function AT(e, t) {
    var n = e,
      i = n._wrapperState.wasMultiple;
    n._wrapperState.wasMultiple = !!t.multiple;
    var l = t.value;
    l != null
      ? Aa(n, !!t.multiple, l, !1)
      : i !== !!t.multiple &&
        (t.defaultValue != null
          ? Aa(n, !!t.multiple, t.defaultValue, !0)
          : Aa(n, !!t.multiple, t.multiple ? [] : '', !1));
  }
  function MT(e, t) {
    var n = e,
      i = t.value;
    i != null && Aa(n, !!t.multiple, i, !1);
  }
  var My = !1;
  function Id(e, t) {
    var n = e;
    if (t.dangerouslySetInnerHTML != null)
      throw new Error(
        '`dangerouslySetInnerHTML` does not make sense on <textarea>.'
      );
    var i = ft({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: lr(n._wrapperState.initialValue),
    });
    return i;
  }
  function Ly(e, t) {
    var n = e;
    (ko('textarea', t),
      t.value !== void 0 &&
        t.defaultValue !== void 0 &&
        !My &&
        (d(
          '%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components',
          ui() || 'A component'
        ),
        (My = !0)));
    var i = t.value;
    if (i == null) {
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
      (u == null && (u = ''), (i = u));
    }
    n._wrapperState = { initialValue: la(i) };
  }
  function ky(e, t) {
    var n = e,
      i = la(t.value),
      l = la(t.defaultValue);
    if (i != null) {
      var u = lr(i);
      (u !== n.value && (n.value = u),
        t.defaultValue == null && n.defaultValue !== u && (n.defaultValue = u));
    }
    l != null && (n.defaultValue = lr(l));
  }
  function Ny(e, t) {
    var n = e,
      i = n.textContent;
    i === n._wrapperState.initialValue &&
      i !== '' &&
      i !== null &&
      (n.value = i);
  }
  function LT(e, t) {
    ky(e, t);
  }
  var Ma = 'http://www.w3.org/1999/xhtml',
    kT = 'http://www.w3.org/1998/Math/MathML',
    Hd = 'http://www.w3.org/2000/svg';
  function Bd(e) {
    switch (e) {
      case 'svg':
        return Hd;
      case 'math':
        return kT;
      default:
        return Ma;
    }
  }
  function jd(e, t) {
    return e == null || e === Ma
      ? Bd(t)
      : e === Hd && t === 'foreignObject'
        ? Ma
        : e;
  }
  var NT = function (e) {
      return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
        ? function (t, n, i, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, i, l);
            });
          }
        : e;
    },
    lc,
    Py = NT(function (e, t) {
      if (e.namespaceURI === Hd && !('innerHTML' in e)) {
        ((lc = lc || document.createElement('div')),
          (lc.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>'));
        for (var n = lc.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
        for (; n.firstChild; ) e.appendChild(n.firstChild);
        return;
      }
      e.innerHTML = t;
    }),
    sr = 1,
    La = 3,
    dn = 8,
    ka = 9,
    $d = 11,
    sc = function (e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === La) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    },
    PT = {
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
  function zT(e, t) {
    return e + t.charAt(0).toUpperCase() + t.substring(1);
  }
  var UT = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(ns).forEach(function (e) {
    UT.forEach(function (t) {
      ns[zT(t, e)] = ns[e];
    });
  });
  function Yd(e, t, n) {
    var i = t == null || typeof t == 'boolean' || t === '';
    return i
      ? ''
      : !n &&
          typeof t == 'number' &&
          t !== 0 &&
          !(ns.hasOwnProperty(e) && ns[e])
        ? t + 'px'
        : (V(t, e), ('' + t).trim());
  }
  var FT = /([A-Z])/g,
    VT = /^ms-/;
  function IT(e) {
    return e.replace(FT, '-$1').toLowerCase().replace(VT, '-ms-');
  }
  var zy = function () {};
  {
    var HT = /^(?:webkit|moz|o)[A-Z]/,
      BT = /^-ms-/,
      jT = /-(.)/g,
      Uy = /;\s*$/,
      Uo = {},
      Gd = {},
      Fy = !1,
      Vy = !1,
      $T = function (e) {
        return e.replace(jT, function (t, n) {
          return n.toUpperCase();
        });
      },
      YT = function (e) {
        (Uo.hasOwnProperty(e) && Uo[e]) ||
          ((Uo[e] = !0),
          d(
            'Unsupported style property %s. Did you mean %s?',
            e,
            $T(e.replace(BT, 'ms-'))
          ));
      },
      GT = function (e) {
        (Uo.hasOwnProperty(e) && Uo[e]) ||
          ((Uo[e] = !0),
          d(
            'Unsupported vendor-prefixed style property %s. Did you mean %s?',
            e,
            e.charAt(0).toUpperCase() + e.slice(1)
          ));
      },
      WT = function (e, t) {
        (Gd.hasOwnProperty(t) && Gd[t]) ||
          ((Gd[t] = !0),
          d(
            `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
            e,
            t.replace(Uy, '')
          ));
      },
      qT = function (e, t) {
        Fy ||
          ((Fy = !0),
          d('`NaN` is an invalid value for the `%s` css style property.', e));
      },
      XT = function (e, t) {
        Vy ||
          ((Vy = !0),
          d(
            '`Infinity` is an invalid value for the `%s` css style property.',
            e
          ));
      };
    zy = function (e, t) {
      (e.indexOf('-') > -1
        ? YT(e)
        : HT.test(e)
          ? GT(e)
          : Uy.test(t) && WT(e, t),
        typeof t == 'number' &&
          (isNaN(t) ? qT(e, t) : isFinite(t) || XT(e, t)));
    };
  }
  var QT = zy;
  function KT(e) {
    {
      var t = '',
        n = '';
      for (var i in e)
        if (e.hasOwnProperty(i)) {
          var l = e[i];
          if (l != null) {
            var u = i.indexOf('--') === 0;
            ((t += n + (u ? i : IT(i)) + ':'), (t += Yd(i, l, u)), (n = ';'));
          }
        }
      return t || null;
    }
  }
  function Iy(e, t) {
    var n = e.style;
    for (var i in t)
      if (t.hasOwnProperty(i)) {
        var l = i.indexOf('--') === 0;
        l || QT(i, t[i]);
        var u = Yd(i, t[i], l);
        (i === 'float' && (i = 'cssFloat'),
          l ? n.setProperty(i, u) : (n[i] = u));
      }
  }
  function JT(e) {
    return e == null || typeof e == 'boolean' || e === '';
  }
  function Hy(e) {
    var t = {};
    for (var n in e)
      for (var i = PT[n] || [n], l = 0; l < i.length; l++) t[i[l]] = n;
    return t;
  }
  function ZT(e, t) {
    {
      if (!t) return;
      var n = Hy(e),
        i = Hy(t),
        l = {};
      for (var u in n) {
        var p = n[u],
          v = i[u];
        if (v && p !== v) {
          var y = p + ',' + v;
          if (l[y]) continue;
          ((l[y] = !0),
            d(
              "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
              JT(e[p]) ? 'Removing' : 'Updating',
              p,
              v
            ));
        }
      }
    }
  }
  var ex = {
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
    tx = ft({ menuitem: !0 }, ex),
    nx = '__html';
  function Wd(e, t) {
    if (t) {
      if (tx[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
          !(nx in t.dangerouslySetInnerHTML)
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
    By = {
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
    rx = new RegExp('^(aria)-[' + Fe + ']*$'),
    ax = new RegExp('^(aria)[A-Z][' + Fe + ']*$');
  function ix(e, t) {
    {
      if (dt.call(Fo, t) && Fo[t]) return !0;
      if (ax.test(t)) {
        var n = 'aria-' + t.slice(4).toLowerCase(),
          i = By.hasOwnProperty(n) ? n : null;
        if (i == null)
          return (
            d(
              'Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.',
              t
            ),
            (Fo[t] = !0),
            !0
          );
        if (t !== i)
          return (
            d('Invalid ARIA attribute `%s`. Did you mean `%s`?', t, i),
            (Fo[t] = !0),
            !0
          );
      }
      if (rx.test(t)) {
        var l = t.toLowerCase(),
          u = By.hasOwnProperty(l) ? l : null;
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
  function ox(e, t) {
    {
      var n = [];
      for (var i in t) {
        var l = ix(e, i);
        l || n.push(i);
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
  function lx(e, t) {
    Qi(e, t) || ox(e, t);
  }
  var jy = !1;
  function sx(e, t) {
    {
      if (e !== 'input' && e !== 'textarea' && e !== 'select') return;
      t != null &&
        t.value === null &&
        !jy &&
        ((jy = !0),
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
  var $y = function () {};
  {
    var Jn = {},
      Yy = /^on./,
      ux = /^on[^A-Z]/,
      cx = new RegExp('^(aria)-[' + Fe + ']*$'),
      fx = new RegExp('^(aria)[A-Z][' + Fe + ']*$');
    $y = function (e, t, n, i) {
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
      if (i != null) {
        var u = i.registrationNameDependencies,
          p = i.possibleRegistrationNames;
        if (u.hasOwnProperty(t)) return !0;
        var v = p.hasOwnProperty(l) ? p[l] : null;
        if (v != null)
          return (
            d('Invalid event handler property `%s`. Did you mean `%s`?', t, v),
            (Jn[t] = !0),
            !0
          );
        if (Yy.test(t))
          return (
            d('Unknown event handler property `%s`. It will be ignored.', t),
            (Jn[t] = !0),
            !0
          );
      } else if (Yy.test(t))
        return (
          ux.test(t) &&
            d(
              'Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.',
              t
            ),
          (Jn[t] = !0),
          !0
        );
      if (cx.test(t) || fx.test(t)) return !0;
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
        w = y !== null && y.type === X;
      if (uc.hasOwnProperty(l)) {
        var C = uc[l];
        if (C !== t)
          return (
            d('Invalid DOM property `%s`. Did you mean `%s`?', t, C),
            (Jn[t] = !0),
            !0
          );
      } else if (!w && t !== l)
        return (
          d(
            'React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.',
            t,
            l
          ),
          (Jn[t] = !0),
          !0
        );
      return typeof n == 'boolean' && kn(t, n, y, !1)
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
        : w
          ? !0
          : kn(t, n, y, !1)
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
  var dx = function (e, t, n) {
    {
      var i = [];
      for (var l in t) {
        var u = $y(e, l, t[l], n);
        u || i.push(l);
      }
      var p = i
        .map(function (v) {
          return '`' + v + '`';
        })
        .join(', ');
      i.length === 1
        ? d(
            'Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ',
            p,
            e
          )
        : i.length > 1 &&
          d(
            'Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ',
            p,
            e
          );
    }
  };
  function px(e, t, n) {
    Qi(e, t) || dx(e, t, n);
  }
  var Gy = 1,
    qd = 2,
    rs = 4,
    vx = Gy | qd | rs,
    as = null;
  function hx(e) {
    (as !== null &&
      d(
        'Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue.'
      ),
      (as = e));
  }
  function mx() {
    (as === null &&
      d(
        'Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue.'
      ),
      (as = null));
  }
  function yx(e) {
    return e === as;
  }
  function Xd(e) {
    var t = e.target || e.srcElement || window;
    return (
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === La ? t.parentNode : t
    );
  }
  var Qd = null,
    Vo = null,
    Io = null;
  function Wy(e) {
    var t = Si(e);
    if (t) {
      if (typeof Qd != 'function')
        throw new Error(
          'setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.'
        );
      var n = t.stateNode;
      if (n) {
        var i = Gc(n);
        Qd(t.stateNode, t.type, i);
      }
    }
  }
  function gx(e) {
    Qd = e;
  }
  function qy(e) {
    Vo ? (Io ? Io.push(e) : (Io = [e])) : (Vo = e);
  }
  function bx() {
    return Vo !== null || Io !== null;
  }
  function Xy() {
    if (Vo) {
      var e = Vo,
        t = Io;
      if (((Vo = null), (Io = null), Wy(e), t))
        for (var n = 0; n < t.length; n++) Wy(t[n]);
    }
  }
  var Qy = function (e, t) {
      return e(t);
    },
    Ky = function () {},
    Kd = !1;
  function Sx() {
    var e = bx();
    e && (Ky(), Xy());
  }
  function Jy(e, t, n) {
    if (Kd) return e(t, n);
    Kd = !0;
    try {
      return Qy(e, t, n);
    } finally {
      ((Kd = !1), Sx());
    }
  }
  function Ex(e, t, n) {
    ((Qy = e), (Ky = n));
  }
  function wx(e) {
    return (
      e === 'button' || e === 'input' || e === 'select' || e === 'textarea'
    );
  }
  function Cx(e, t, n) {
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
        return !!(n.disabled && wx(t));
      default:
        return !1;
    }
  }
  function is(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var i = Gc(n);
    if (i === null) return null;
    var l = i[t];
    if (Cx(t, e.type, i)) return null;
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
  var Jd = !1;
  if (ot)
    try {
      var os = {};
      (Object.defineProperty(os, 'passive', {
        get: function () {
          Jd = !0;
        },
      }),
        window.addEventListener('test', os, os),
        window.removeEventListener('test', os, os));
    } catch {
      Jd = !1;
    }
  function Zy(e, t, n, i, l, u, p, v, y) {
    var w = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, w);
    } catch (C) {
      this.onError(C);
    }
  }
  var eg = Zy;
  if (
    typeof window < 'u' &&
    typeof window.dispatchEvent == 'function' &&
    typeof document < 'u' &&
    typeof document.createEvent == 'function'
  ) {
    var Zd = document.createElement('react');
    eg = function (t, n, i, l, u, p, v, y, w) {
      if (typeof document > 'u' || document === null)
        throw new Error(
          'The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.'
        );
      var C = document.createEvent('Event'),
        P = !1,
        N = !0,
        j = window.event,
        G = Object.getOwnPropertyDescriptor(window, 'event');
      function K() {
        (Zd.removeEventListener(J, He, !1),
          typeof window.event < 'u' &&
            window.hasOwnProperty('event') &&
            (window.event = j));
      }
      var De = Array.prototype.slice.call(arguments, 3);
      function He() {
        ((P = !0), K(), n.apply(i, De), (N = !1));
      }
      var ze,
        bt = !1,
        pt = !1;
      function I(H) {
        if (
          ((ze = H.error),
          (bt = !0),
          ze === null && H.colno === 0 && H.lineno === 0 && (pt = !0),
          H.defaultPrevented && ze != null && typeof ze == 'object')
        )
          try {
            ze._suppressLogging = !0;
          } catch {}
      }
      var J = 'react-' + (t || 'invokeguardedcallback');
      if (
        (window.addEventListener('error', I),
        Zd.addEventListener(J, He, !1),
        C.initEvent(J, !1, !1),
        Zd.dispatchEvent(C),
        G && Object.defineProperty(window, 'event', G),
        P &&
          N &&
          (bt
            ? pt &&
              (ze = new Error(
                "A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information."
              ))
            : (ze = new Error(
                `An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`
              )),
          this.onError(ze)),
        window.removeEventListener('error', I),
        !P)
      )
        return (K(), Zy.apply(this, arguments));
    };
  }
  var Tx = eg,
    Ho = !1,
    cc = null,
    fc = !1,
    ep = null,
    xx = {
      onError: function (e) {
        ((Ho = !0), (cc = e));
      },
    };
  function tp(e, t, n, i, l, u, p, v, y) {
    ((Ho = !1), (cc = null), Tx.apply(xx, arguments));
  }
  function Rx(e, t, n, i, l, u, p, v, y) {
    if ((tp.apply(this, arguments), Ho)) {
      var w = np();
      fc || ((fc = !0), (ep = w));
    }
  }
  function _x() {
    if (fc) {
      var e = ep;
      throw ((fc = !1), (ep = null), e);
    }
  }
  function Dx() {
    return Ho;
  }
  function np() {
    if (Ho) {
      var e = cc;
      return ((Ho = !1), (cc = null), e);
    } else
      throw new Error(
        'clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.'
      );
  }
  function Bo(e) {
    return e._reactInternals;
  }
  function Ox(e) {
    return e._reactInternals !== void 0;
  }
  function Ax(e, t) {
    e._reactInternals = t;
  }
  var qe = 0,
    jo = 1,
    pn = 2,
    St = 4,
    Ki = 16,
    ls = 32,
    rp = 64,
    Dt = 128,
    Na = 256,
    pi = 512,
    Ji = 1024,
    Hr = 2048,
    Pa = 4096,
    Zi = 8192,
    dc = 16384,
    Mx = Hr | St | rp | pi | Ji | dc,
    Lx = 32767,
    ss = 32768,
    Zn = 65536,
    ap = 131072,
    tg = 1048576,
    ip = 2097152,
    eo = 4194304,
    op = 8388608,
    za = 16777216,
    pc = 33554432,
    lp = St | Ji | 0,
    sp = pn | St | Ki | ls | pi | Pa | Zi,
    us = St | rp | pi | Zi,
    $o = Hr | Ki,
    Ua = eo | op | ip,
    kx = o.ReactCurrentOwner;
  function to(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      var i = t;
      do
        ((t = i),
          (t.flags & (pn | Pa)) !== qe && (n = t.return),
          (i = t.return));
      while (i);
    }
    return t.tag === E ? n : null;
  }
  function ng(e) {
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
  function rg(e) {
    return e.tag === E ? e.stateNode.containerInfo : null;
  }
  function Nx(e) {
    return to(e) === e;
  }
  function Px(e) {
    {
      var t = kx.current;
      if (t !== null && t.tag === g) {
        var n = t,
          i = n.stateNode;
        (i._warnedAboutRefsInRender ||
          d(
            '%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.',
            st(n) || 'A component'
          ),
          (i._warnedAboutRefsInRender = !0));
      }
    }
    var l = Bo(e);
    return l ? to(l) === l : !1;
  }
  function ag(e) {
    if (to(e) !== e)
      throw new Error('Unable to find node on an unmounted component.');
  }
  function ig(e) {
    var t = e.alternate;
    if (!t) {
      var n = to(e);
      if (n === null)
        throw new Error('Unable to find node on an unmounted component.');
      return n !== e ? null : e;
    }
    for (var i = e, l = t; ; ) {
      var u = i.return;
      if (u === null) break;
      var p = u.alternate;
      if (p === null) {
        var v = u.return;
        if (v !== null) {
          i = l = v;
          continue;
        }
        break;
      }
      if (u.child === p.child) {
        for (var y = u.child; y; ) {
          if (y === i) return (ag(u), e);
          if (y === l) return (ag(u), t);
          y = y.sibling;
        }
        throw new Error('Unable to find node on an unmounted component.');
      }
      if (i.return !== l.return) ((i = u), (l = p));
      else {
        for (var w = !1, C = u.child; C; ) {
          if (C === i) {
            ((w = !0), (i = u), (l = p));
            break;
          }
          if (C === l) {
            ((w = !0), (l = u), (i = p));
            break;
          }
          C = C.sibling;
        }
        if (!w) {
          for (C = p.child; C; ) {
            if (C === i) {
              ((w = !0), (i = p), (l = u));
              break;
            }
            if (C === l) {
              ((w = !0), (l = p), (i = u));
              break;
            }
            C = C.sibling;
          }
          if (!w)
            throw new Error(
              'Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.'
            );
        }
      }
      if (i.alternate !== l)
        throw new Error(
          "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
        );
    }
    if (i.tag !== E)
      throw new Error('Unable to find node on an unmounted component.');
    return i.stateNode.current === i ? e : t;
  }
  function og(e) {
    var t = ig(e);
    return t !== null ? lg(t) : null;
  }
  function lg(e) {
    if (e.tag === D || e.tag === O) return e;
    for (var t = e.child; t !== null; ) {
      var n = lg(t);
      if (n !== null) return n;
      t = t.sibling;
    }
    return null;
  }
  function zx(e) {
    var t = ig(e);
    return t !== null ? sg(t) : null;
  }
  function sg(e) {
    if (e.tag === D || e.tag === O) return e;
    for (var t = e.child; t !== null; ) {
      if (t.tag !== T) {
        var n = sg(t);
        if (n !== null) return n;
      }
      t = t.sibling;
    }
    return null;
  }
  var ug = a.unstable_scheduleCallback,
    Ux = a.unstable_cancelCallback,
    Fx = a.unstable_shouldYield,
    Vx = a.unstable_requestPaint,
    Dn = a.unstable_now,
    Ix = a.unstable_getCurrentPriorityLevel,
    vc = a.unstable_ImmediatePriority,
    up = a.unstable_UserBlockingPriority,
    no = a.unstable_NormalPriority,
    Hx = a.unstable_LowPriority,
    cp = a.unstable_IdlePriority,
    Bx = a.unstable_yieldValue,
    jx = a.unstable_setDisableYieldValue,
    Yo = null,
    Yn = null,
    Ae = null,
    sa = !1,
    Br = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u';
  function $x(e) {
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
      (Ve && (e = ft({}, e, { getLaneLabelMap: Qx, injectProfilingHooks: Xx })),
        (Yo = t.inject(e)),
        (Yn = t));
    } catch (n) {
      d('React instrumentation encountered an error: %s.', n);
    }
    return !!t.checkDCE;
  }
  function Yx(e, t) {
    if (Yn && typeof Yn.onScheduleFiberRoot == 'function')
      try {
        Yn.onScheduleFiberRoot(Yo, e, t);
      } catch (n) {
        sa ||
          ((sa = !0), d('React instrumentation encountered an error: %s', n));
      }
  }
  function Gx(e, t) {
    if (Yn && typeof Yn.onCommitFiberRoot == 'function')
      try {
        var n = (e.current.flags & Dt) === Dt;
        if ($) {
          var i;
          switch (t) {
            case Sr:
              i = vc;
              break;
            case Va:
              i = up;
              break;
            case Ia:
              i = no;
              break;
            case Ec:
              i = cp;
              break;
            default:
              i = no;
              break;
          }
          Yn.onCommitFiberRoot(Yo, e, i, n);
        }
      } catch (l) {
        sa ||
          ((sa = !0), d('React instrumentation encountered an error: %s', l));
      }
  }
  function Wx(e) {
    if (Yn && typeof Yn.onPostCommitFiberRoot == 'function')
      try {
        Yn.onPostCommitFiberRoot(Yo, e);
      } catch (t) {
        sa ||
          ((sa = !0), d('React instrumentation encountered an error: %s', t));
      }
  }
  function qx(e) {
    if (Yn && typeof Yn.onCommitFiberUnmount == 'function')
      try {
        Yn.onCommitFiberUnmount(Yo, e);
      } catch (t) {
        sa ||
          ((sa = !0), d('React instrumentation encountered an error: %s', t));
      }
  }
  function On(e) {
    if (
      (typeof Bx == 'function' && (jx(e), c(e)),
      Yn && typeof Yn.setStrictMode == 'function')
    )
      try {
        Yn.setStrictMode(Yo, e);
      } catch (t) {
        sa ||
          ((sa = !0), d('React instrumentation encountered an error: %s', t));
      }
  }
  function Xx(e) {
    Ae = e;
  }
  function Qx() {
    {
      for (var e = new Map(), t = 1, n = 0; n < dp; n++) {
        var i = m0(t);
        (e.set(t, i), (t *= 2));
      }
      return e;
    }
  }
  function Kx(e) {
    Ae !== null &&
      typeof Ae.markCommitStarted == 'function' &&
      Ae.markCommitStarted(e);
  }
  function cg() {
    Ae !== null &&
      typeof Ae.markCommitStopped == 'function' &&
      Ae.markCommitStopped();
  }
  function cs(e) {
    Ae !== null &&
      typeof Ae.markComponentRenderStarted == 'function' &&
      Ae.markComponentRenderStarted(e);
  }
  function Go() {
    Ae !== null &&
      typeof Ae.markComponentRenderStopped == 'function' &&
      Ae.markComponentRenderStopped();
  }
  function Jx(e) {
    Ae !== null &&
      typeof Ae.markComponentPassiveEffectMountStarted == 'function' &&
      Ae.markComponentPassiveEffectMountStarted(e);
  }
  function Zx() {
    Ae !== null &&
      typeof Ae.markComponentPassiveEffectMountStopped == 'function' &&
      Ae.markComponentPassiveEffectMountStopped();
  }
  function e0(e) {
    Ae !== null &&
      typeof Ae.markComponentPassiveEffectUnmountStarted == 'function' &&
      Ae.markComponentPassiveEffectUnmountStarted(e);
  }
  function t0() {
    Ae !== null &&
      typeof Ae.markComponentPassiveEffectUnmountStopped == 'function' &&
      Ae.markComponentPassiveEffectUnmountStopped();
  }
  function n0(e) {
    Ae !== null &&
      typeof Ae.markComponentLayoutEffectMountStarted == 'function' &&
      Ae.markComponentLayoutEffectMountStarted(e);
  }
  function r0() {
    Ae !== null &&
      typeof Ae.markComponentLayoutEffectMountStopped == 'function' &&
      Ae.markComponentLayoutEffectMountStopped();
  }
  function fg(e) {
    Ae !== null &&
      typeof Ae.markComponentLayoutEffectUnmountStarted == 'function' &&
      Ae.markComponentLayoutEffectUnmountStarted(e);
  }
  function dg() {
    Ae !== null &&
      typeof Ae.markComponentLayoutEffectUnmountStopped == 'function' &&
      Ae.markComponentLayoutEffectUnmountStopped();
  }
  function a0(e, t, n) {
    Ae !== null &&
      typeof Ae.markComponentErrored == 'function' &&
      Ae.markComponentErrored(e, t, n);
  }
  function i0(e, t, n) {
    Ae !== null &&
      typeof Ae.markComponentSuspended == 'function' &&
      Ae.markComponentSuspended(e, t, n);
  }
  function o0(e) {
    Ae !== null &&
      typeof Ae.markLayoutEffectsStarted == 'function' &&
      Ae.markLayoutEffectsStarted(e);
  }
  function l0() {
    Ae !== null &&
      typeof Ae.markLayoutEffectsStopped == 'function' &&
      Ae.markLayoutEffectsStopped();
  }
  function s0(e) {
    Ae !== null &&
      typeof Ae.markPassiveEffectsStarted == 'function' &&
      Ae.markPassiveEffectsStarted(e);
  }
  function u0() {
    Ae !== null &&
      typeof Ae.markPassiveEffectsStopped == 'function' &&
      Ae.markPassiveEffectsStopped();
  }
  function pg(e) {
    Ae !== null &&
      typeof Ae.markRenderStarted == 'function' &&
      Ae.markRenderStarted(e);
  }
  function c0() {
    Ae !== null &&
      typeof Ae.markRenderYielded == 'function' &&
      Ae.markRenderYielded();
  }
  function vg() {
    Ae !== null &&
      typeof Ae.markRenderStopped == 'function' &&
      Ae.markRenderStopped();
  }
  function f0(e) {
    Ae !== null &&
      typeof Ae.markRenderScheduled == 'function' &&
      Ae.markRenderScheduled(e);
  }
  function d0(e, t) {
    Ae !== null &&
      typeof Ae.markForceUpdateScheduled == 'function' &&
      Ae.markForceUpdateScheduled(e, t);
  }
  function fp(e, t) {
    Ae !== null &&
      typeof Ae.markStateUpdateScheduled == 'function' &&
      Ae.markStateUpdateScheduled(e, t);
  }
  var je = 0,
    yt = 1,
    Nt = 2,
    on = 8,
    ua = 16,
    hg = Math.clz32 ? Math.clz32 : h0,
    p0 = Math.log,
    v0 = Math.LN2;
  function h0(e) {
    var t = e >>> 0;
    return t === 0 ? 32 : (31 - ((p0(t) / v0) | 0)) | 0;
  }
  var dp = 31,
    de = 0,
    An = 0,
    nt = 1,
    Wo = 2,
    Fa = 4,
    ro = 8,
    ca = 16,
    fs = 32,
    qo = 4194240,
    ds = 64,
    pp = 128,
    vp = 256,
    hp = 512,
    mp = 1024,
    yp = 2048,
    gp = 4096,
    bp = 8192,
    Sp = 16384,
    Ep = 32768,
    wp = 65536,
    Cp = 131072,
    Tp = 262144,
    xp = 524288,
    Rp = 1048576,
    _p = 2097152,
    hc = 130023424,
    Xo = 4194304,
    Dp = 8388608,
    Op = 16777216,
    Ap = 33554432,
    Mp = 67108864,
    mg = Xo,
    ps = 134217728,
    yg = 268435455,
    vs = 268435456,
    ao = 536870912,
    gr = 1073741824;
  function m0(e) {
    {
      if (e & nt) return 'Sync';
      if (e & Wo) return 'InputContinuousHydration';
      if (e & Fa) return 'InputContinuous';
      if (e & ro) return 'DefaultHydration';
      if (e & ca) return 'Default';
      if (e & fs) return 'TransitionHydration';
      if (e & qo) return 'Transition';
      if (e & hc) return 'Retry';
      if (e & ps) return 'SelectiveHydration';
      if (e & vs) return 'IdleHydration';
      if (e & ao) return 'Idle';
      if (e & gr) return 'Offscreen';
    }
  }
  var $t = -1,
    mc = ds,
    yc = Xo;
  function hs(e) {
    switch (io(e)) {
      case nt:
        return nt;
      case Wo:
        return Wo;
      case Fa:
        return Fa;
      case ro:
        return ro;
      case ca:
        return ca;
      case fs:
        return fs;
      case ds:
      case pp:
      case vp:
      case hp:
      case mp:
      case yp:
      case gp:
      case bp:
      case Sp:
      case Ep:
      case wp:
      case Cp:
      case Tp:
      case xp:
      case Rp:
      case _p:
        return e & qo;
      case Xo:
      case Dp:
      case Op:
      case Ap:
      case Mp:
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
    if (n === de) return de;
    var i = de,
      l = e.suspendedLanes,
      u = e.pingedLanes,
      p = n & yg;
    if (p !== de) {
      var v = p & ~l;
      if (v !== de) i = hs(v);
      else {
        var y = p & u;
        y !== de && (i = hs(y));
      }
    } else {
      var w = n & ~l;
      w !== de ? (i = hs(w)) : u !== de && (i = hs(u));
    }
    if (i === de) return de;
    if (t !== de && t !== i && (t & l) === de) {
      var C = io(i),
        P = io(t);
      if (C >= P || (C === ca && (P & qo) !== de)) return t;
    }
    (i & Fa) !== de && (i |= n & ca);
    var N = e.entangledLanes;
    if (N !== de)
      for (var j = e.entanglements, G = i & N; G > 0; ) {
        var K = oo(G),
          De = 1 << K;
        ((i |= j[K]), (G &= ~De));
      }
    return i;
  }
  function y0(e, t) {
    for (var n = e.eventTimes, i = $t; t > 0; ) {
      var l = oo(t),
        u = 1 << l,
        p = n[l];
      (p > i && (i = p), (t &= ~u));
    }
    return i;
  }
  function g0(e, t) {
    switch (e) {
      case nt:
      case Wo:
      case Fa:
        return t + 250;
      case ro:
      case ca:
      case fs:
      case ds:
      case pp:
      case vp:
      case hp:
      case mp:
      case yp:
      case gp:
      case bp:
      case Sp:
      case Ep:
      case wp:
      case Cp:
      case Tp:
      case xp:
      case Rp:
      case _p:
        return t + 5e3;
      case Xo:
      case Dp:
      case Op:
      case Ap:
      case Mp:
        return $t;
      case ps:
      case vs:
      case ao:
      case gr:
        return $t;
      default:
        return (
          d('Should have found matching lanes. This is a bug in React.'),
          $t
        );
    }
  }
  function b0(e, t) {
    for (
      var n = e.pendingLanes,
        i = e.suspendedLanes,
        l = e.pingedLanes,
        u = e.expirationTimes,
        p = n;
      p > 0;

    ) {
      var v = oo(p),
        y = 1 << v,
        w = u[v];
      (w === $t
        ? ((y & i) === de || (y & l) !== de) && (u[v] = g0(y, t))
        : w <= t && (e.expiredLanes |= y),
        (p &= ~y));
    }
  }
  function S0(e) {
    return hs(e.pendingLanes);
  }
  function Lp(e) {
    var t = e.pendingLanes & ~gr;
    return t !== de ? t : t & gr ? gr : de;
  }
  function E0(e) {
    return (e & nt) !== de;
  }
  function kp(e) {
    return (e & yg) !== de;
  }
  function gg(e) {
    return (e & hc) === e;
  }
  function w0(e) {
    var t = nt | Fa | ca;
    return (e & t) === de;
  }
  function C0(e) {
    return (e & qo) === e;
  }
  function bc(e, t) {
    var n = Wo | Fa | ro | ca;
    return (t & n) !== de;
  }
  function T0(e, t) {
    return (t & e.expiredLanes) !== de;
  }
  function bg(e) {
    return (e & qo) !== de;
  }
  function Sg() {
    var e = mc;
    return ((mc <<= 1), (mc & qo) === de && (mc = ds), e);
  }
  function x0() {
    var e = yc;
    return ((yc <<= 1), (yc & hc) === de && (yc = Xo), e);
  }
  function io(e) {
    return e & -e;
  }
  function ms(e) {
    return io(e);
  }
  function oo(e) {
    return 31 - hg(e);
  }
  function Np(e) {
    return oo(e);
  }
  function br(e, t) {
    return (e & t) !== de;
  }
  function Qo(e, t) {
    return (e & t) === t;
  }
  function ut(e, t) {
    return e | t;
  }
  function Sc(e, t) {
    return e & ~t;
  }
  function Eg(e, t) {
    return e & t;
  }
  function qz(e) {
    return e;
  }
  function R0(e, t) {
    return e !== An && e < t ? e : t;
  }
  function Pp(e) {
    for (var t = [], n = 0; n < dp; n++) t.push(e);
    return t;
  }
  function ys(e, t, n) {
    ((e.pendingLanes |= t),
      t !== ao && ((e.suspendedLanes = de), (e.pingedLanes = de)));
    var i = e.eventTimes,
      l = Np(t);
    i[l] = n;
  }
  function _0(e, t) {
    ((e.suspendedLanes |= t), (e.pingedLanes &= ~t));
    for (var n = e.expirationTimes, i = t; i > 0; ) {
      var l = oo(i),
        u = 1 << l;
      ((n[l] = $t), (i &= ~u));
    }
  }
  function wg(e, t, n) {
    e.pingedLanes |= e.suspendedLanes & t;
  }
  function D0(e, t) {
    var n = e.pendingLanes & ~t;
    ((e.pendingLanes = t),
      (e.suspendedLanes = de),
      (e.pingedLanes = de),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t));
    for (
      var i = e.entanglements, l = e.eventTimes, u = e.expirationTimes, p = n;
      p > 0;

    ) {
      var v = oo(p),
        y = 1 << v;
      ((i[v] = de), (l[v] = $t), (u[v] = $t), (p &= ~y));
    }
  }
  function zp(e, t) {
    for (var n = (e.entangledLanes |= t), i = e.entanglements, l = n; l; ) {
      var u = oo(l),
        p = 1 << u;
      ((p & t) | (i[u] & t) && (i[u] |= t), (l &= ~p));
    }
  }
  function O0(e, t) {
    var n = io(t),
      i;
    switch (n) {
      case Fa:
        i = Wo;
        break;
      case ca:
        i = ro;
        break;
      case ds:
      case pp:
      case vp:
      case hp:
      case mp:
      case yp:
      case gp:
      case bp:
      case Sp:
      case Ep:
      case wp:
      case Cp:
      case Tp:
      case xp:
      case Rp:
      case _p:
      case Xo:
      case Dp:
      case Op:
      case Ap:
      case Mp:
        i = fs;
        break;
      case ao:
        i = vs;
        break;
      default:
        i = An;
        break;
    }
    return (i & (e.suspendedLanes | t)) !== An ? An : i;
  }
  function Cg(e, t, n) {
    if (Br)
      for (var i = e.pendingUpdatersLaneMap; n > 0; ) {
        var l = Np(n),
          u = 1 << l,
          p = i[l];
        (p.add(t), (n &= ~u));
      }
  }
  function Tg(e, t) {
    if (Br)
      for (var n = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
        var l = Np(t),
          u = 1 << l,
          p = n[l];
        (p.size > 0 &&
          (p.forEach(function (v) {
            var y = v.alternate;
            (y === null || !i.has(y)) && i.add(v);
          }),
          p.clear()),
          (t &= ~u));
      }
  }
  function xg(e, t) {
    return null;
  }
  var Sr = nt,
    Va = Fa,
    Ia = ca,
    Ec = ao,
    gs = An;
  function jr() {
    return gs;
  }
  function Mn(e) {
    gs = e;
  }
  function A0(e, t) {
    var n = gs;
    try {
      return ((gs = e), t());
    } finally {
      gs = n;
    }
  }
  function M0(e, t) {
    return e !== 0 && e < t ? e : t;
  }
  function L0(e, t) {
    return e === 0 || e > t ? e : t;
  }
  function Up(e, t) {
    return e !== 0 && e < t;
  }
  function Rg(e) {
    var t = io(e);
    return Up(Sr, t) ? (Up(Va, t) ? (kp(t) ? Ia : Ec) : Va) : Sr;
  }
  function wc(e) {
    var t = e.current.memoizedState;
    return t.isDehydrated;
  }
  var _g;
  function k0(e) {
    _g = e;
  }
  function N0(e) {
    _g(e);
  }
  var Fp;
  function P0(e) {
    Fp = e;
  }
  var Dg;
  function z0(e) {
    Dg = e;
  }
  var Og;
  function U0(e) {
    Og = e;
  }
  var Ag;
  function F0(e) {
    Ag = e;
  }
  var Vp = !1,
    Cc = [],
    vi = null,
    hi = null,
    mi = null,
    bs = new Map(),
    Ss = new Map(),
    yi = [],
    V0 = [
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
  function I0(e) {
    return V0.indexOf(e) > -1;
  }
  function H0(e, t, n, i, l) {
    return {
      blockedOn: e,
      domEventName: t,
      eventSystemFlags: n,
      nativeEvent: l,
      targetContainers: [i],
    };
  }
  function Mg(e, t) {
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
        var i = t.pointerId;
        Ss.delete(i);
        break;
      }
    }
  }
  function Es(e, t, n, i, l, u) {
    if (e === null || e.nativeEvent !== u) {
      var p = H0(t, n, i, l, u);
      if (t !== null) {
        var v = Si(t);
        v !== null && Fp(v);
      }
      return p;
    }
    e.eventSystemFlags |= i;
    var y = e.targetContainers;
    return (l !== null && y.indexOf(l) === -1 && y.push(l), e);
  }
  function B0(e, t, n, i, l) {
    switch (t) {
      case 'focusin': {
        var u = l;
        return ((vi = Es(vi, e, t, n, i, u)), !0);
      }
      case 'dragenter': {
        var p = l;
        return ((hi = Es(hi, e, t, n, i, p)), !0);
      }
      case 'mouseover': {
        var v = l;
        return ((mi = Es(mi, e, t, n, i, v)), !0);
      }
      case 'pointerover': {
        var y = l,
          w = y.pointerId;
        return (bs.set(w, Es(bs.get(w) || null, e, t, n, i, y)), !0);
      }
      case 'gotpointercapture': {
        var C = l,
          P = C.pointerId;
        return (Ss.set(P, Es(Ss.get(P) || null, e, t, n, i, C)), !0);
      }
    }
    return !1;
  }
  function Lg(e) {
    var t = uo(e.target);
    if (t !== null) {
      var n = to(t);
      if (n !== null) {
        var i = n.tag;
        if (i === F) {
          var l = ng(n);
          if (l !== null) {
            ((e.blockedOn = l),
              Ag(e.priority, function () {
                Dg(n);
              }));
            return;
          }
        } else if (i === E) {
          var u = n.stateNode;
          if (wc(u)) {
            e.blockedOn = rg(n);
            return;
          }
        }
      }
    }
    e.blockedOn = null;
  }
  function j0(e) {
    for (
      var t = Og(), n = { blockedOn: null, target: e, priority: t }, i = 0;
      i < yi.length && Up(t, yi[i].priority);
      i++
    );
    (yi.splice(i, 0, n), i === 0 && Lg(n));
  }
  function Tc(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; t.length > 0; ) {
      var n = t[0],
        i = Bp(e.domEventName, e.eventSystemFlags, n, e.nativeEvent);
      if (i === null) {
        var l = e.nativeEvent,
          u = new l.constructor(l.type, l);
        (hx(u), l.target.dispatchEvent(u), mx());
      } else {
        var p = Si(i);
        return (p !== null && Fp(p), (e.blockedOn = i), !1);
      }
      t.shift();
    }
    return !0;
  }
  function kg(e, t, n) {
    Tc(e) && n.delete(t);
  }
  function $0() {
    ((Vp = !1),
      vi !== null && Tc(vi) && (vi = null),
      hi !== null && Tc(hi) && (hi = null),
      mi !== null && Tc(mi) && (mi = null),
      bs.forEach(kg),
      Ss.forEach(kg));
  }
  function ws(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Vp ||
        ((Vp = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, $0)));
  }
  function Cs(e) {
    if (Cc.length > 0) {
      ws(Cc[0], e);
      for (var t = 1; t < Cc.length; t++) {
        var n = Cc[t];
        n.blockedOn === e && (n.blockedOn = null);
      }
    }
    (vi !== null && ws(vi, e),
      hi !== null && ws(hi, e),
      mi !== null && ws(mi, e));
    var i = function (v) {
      return ws(v, e);
    };
    (bs.forEach(i), Ss.forEach(i));
    for (var l = 0; l < yi.length; l++) {
      var u = yi[l];
      u.blockedOn === e && (u.blockedOn = null);
    }
    for (; yi.length > 0; ) {
      var p = yi[0];
      if (p.blockedOn !== null) break;
      (Lg(p), p.blockedOn === null && yi.shift());
    }
  }
  var Ko = o.ReactCurrentBatchConfig,
    Ip = !0;
  function Ng(e) {
    Ip = !!e;
  }
  function Y0() {
    return Ip;
  }
  function G0(e, t, n) {
    var i = Pg(t),
      l;
    switch (i) {
      case Sr:
        l = W0;
        break;
      case Va:
        l = q0;
        break;
      case Ia:
      default:
        l = Hp;
        break;
    }
    return l.bind(null, t, n, e);
  }
  function W0(e, t, n, i) {
    var l = jr(),
      u = Ko.transition;
    Ko.transition = null;
    try {
      (Mn(Sr), Hp(e, t, n, i));
    } finally {
      (Mn(l), (Ko.transition = u));
    }
  }
  function q0(e, t, n, i) {
    var l = jr(),
      u = Ko.transition;
    Ko.transition = null;
    try {
      (Mn(Va), Hp(e, t, n, i));
    } finally {
      (Mn(l), (Ko.transition = u));
    }
  }
  function Hp(e, t, n, i) {
    Ip && X0(e, t, n, i);
  }
  function X0(e, t, n, i) {
    var l = Bp(e, t, n, i);
    if (l === null) {
      (nv(e, t, i, xc, n), Mg(e, i));
      return;
    }
    if (B0(l, e, t, n, i)) {
      i.stopPropagation();
      return;
    }
    if ((Mg(e, i), t & rs && I0(e))) {
      for (; l !== null; ) {
        var u = Si(l);
        u !== null && N0(u);
        var p = Bp(e, t, n, i);
        if ((p === null && nv(e, t, i, xc, n), p === l)) break;
        l = p;
      }
      l !== null && i.stopPropagation();
      return;
    }
    nv(e, t, i, null, n);
  }
  var xc = null;
  function Bp(e, t, n, i) {
    xc = null;
    var l = Xd(i),
      u = uo(l);
    if (u !== null) {
      var p = to(u);
      if (p === null) u = null;
      else {
        var v = p.tag;
        if (v === F) {
          var y = ng(p);
          if (y !== null) return y;
          u = null;
        } else if (v === E) {
          var w = p.stateNode;
          if (wc(w)) return rg(p);
          u = null;
        } else p !== u && (u = null);
      }
    }
    return ((xc = u), null);
  }
  function Pg(e) {
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
        return Va;
      case 'message': {
        var t = Ix();
        switch (t) {
          case vc:
            return Sr;
          case up:
            return Va;
          case no:
          case Hx:
            return Ia;
          case cp:
            return Ec;
          default:
            return Ia;
        }
      }
      default:
        return Ia;
    }
  }
  function Q0(e, t, n) {
    return (e.addEventListener(t, n, !1), n);
  }
  function K0(e, t, n) {
    return (e.addEventListener(t, n, !0), n);
  }
  function J0(e, t, n, i) {
    return (e.addEventListener(t, n, { capture: !0, passive: i }), n);
  }
  function Z0(e, t, n, i) {
    return (e.addEventListener(t, n, { passive: i }), n);
  }
  var Ts = null,
    jp = null,
    xs = null;
  function eR(e) {
    return ((Ts = e), (jp = Ug()), !0);
  }
  function tR() {
    ((Ts = null), (jp = null), (xs = null));
  }
  function zg() {
    if (xs) return xs;
    var e,
      t = jp,
      n = t.length,
      i,
      l = Ug(),
      u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var p = n - e;
    for (i = 1; i <= p && t[n - i] === l[u - i]; i++);
    var v = i > 1 ? 1 - i : void 0;
    return ((xs = l.slice(e, v)), xs);
  }
  function Ug() {
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
  function Fg() {
    return !1;
  }
  function Er(e) {
    function t(n, i, l, u, p) {
      ((this._reactName = n),
        (this._targetInst = l),
        (this.type = i),
        (this.nativeEvent = u),
        (this.target = p),
        (this.currentTarget = null));
      for (var v in e)
        if (e.hasOwnProperty(v)) {
          var y = e[v];
          y ? (this[v] = y(u)) : (this[v] = u[v]);
        }
      var w =
        u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1;
      return (
        w ? (this.isDefaultPrevented = _c) : (this.isDefaultPrevented = Fg),
        (this.isPropagationStopped = Fg),
        this
      );
    }
    return (
      ft(t.prototype, {
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
    $p = Er(Jo),
    Rs = ft({}, Jo, { view: 0, detail: 0 }),
    nR = Er(Rs),
    Yp,
    Gp,
    _s;
  function rR(e) {
    e !== _s &&
      (_s && e.type === 'mousemove'
        ? ((Yp = e.screenX - _s.screenX), (Gp = e.screenY - _s.screenY))
        : ((Yp = 0), (Gp = 0)),
      (_s = e));
  }
  var Dc = ft({}, Rs, {
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
      getModifierState: qp,
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
        return 'movementX' in e ? e.movementX : (rR(e), Yp);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Gp;
      },
    }),
    Vg = Er(Dc),
    aR = ft({}, Dc, { dataTransfer: 0 }),
    iR = Er(aR),
    oR = ft({}, Rs, { relatedTarget: 0 }),
    Wp = Er(oR),
    lR = ft({}, Jo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    sR = Er(lR),
    uR = ft({}, Jo, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    cR = Er(uR),
    fR = ft({}, Jo, { data: 0 }),
    Ig = Er(fR),
    dR = Ig,
    pR = {
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
    vR = {
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
  function hR(e) {
    if (e.key) {
      var t = pR[e.key] || e.key;
      if (t !== 'Unidentified') return t;
    }
    if (e.type === 'keypress') {
      var n = Rc(e);
      return n === 13 ? 'Enter' : String.fromCharCode(n);
    }
    return e.type === 'keydown' || e.type === 'keyup'
      ? vR[e.keyCode] || 'Unidentified'
      : '';
  }
  var mR = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
  function yR(e) {
    var t = this,
      n = t.nativeEvent;
    if (n.getModifierState) return n.getModifierState(e);
    var i = mR[e];
    return i ? !!n[i] : !1;
  }
  function qp(e) {
    return yR;
  }
  var gR = ft({}, Rs, {
      key: hR,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: qp,
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
    bR = Er(gR),
    SR = ft({}, Dc, {
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
    Hg = Er(SR),
    ER = ft({}, Rs, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: qp,
    }),
    wR = Er(ER),
    CR = ft({}, Jo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    TR = Er(CR),
    xR = ft({}, Dc, {
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
    RR = Er(xR),
    _R = [9, 13, 27, 32],
    Bg = 229,
    Xp = ot && 'CompositionEvent' in window,
    Ds = null;
  ot && 'documentMode' in document && (Ds = document.documentMode);
  var DR = ot && 'TextEvent' in window && !Ds,
    jg = ot && (!Xp || (Ds && Ds > 8 && Ds <= 11)),
    $g = 32,
    Yg = String.fromCharCode($g);
  function OR() {
    (Ze('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
      Ze('onCompositionEnd', [
        'compositionend',
        'focusout',
        'keydown',
        'keypress',
        'keyup',
        'mousedown',
      ]),
      Ze('onCompositionStart', [
        'compositionstart',
        'focusout',
        'keydown',
        'keypress',
        'keyup',
        'mousedown',
      ]),
      Ze('onCompositionUpdate', [
        'compositionupdate',
        'focusout',
        'keydown',
        'keypress',
        'keyup',
        'mousedown',
      ]));
  }
  var Gg = !1;
  function AR(e) {
    return (e.ctrlKey || e.altKey || e.metaKey) && !(e.ctrlKey && e.altKey);
  }
  function MR(e) {
    switch (e) {
      case 'compositionstart':
        return 'onCompositionStart';
      case 'compositionend':
        return 'onCompositionEnd';
      case 'compositionupdate':
        return 'onCompositionUpdate';
    }
  }
  function LR(e, t) {
    return e === 'keydown' && t.keyCode === Bg;
  }
  function Wg(e, t) {
    switch (e) {
      case 'keyup':
        return _R.indexOf(t.keyCode) !== -1;
      case 'keydown':
        return t.keyCode !== Bg;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function qg(e) {
    var t = e.detail;
    return typeof t == 'object' && 'data' in t ? t.data : null;
  }
  function Xg(e) {
    return e.locale === 'ko';
  }
  var Zo = !1;
  function kR(e, t, n, i, l) {
    var u, p;
    if (
      (Xp
        ? (u = MR(t))
        : Zo
          ? Wg(t, i) && (u = 'onCompositionEnd')
          : LR(t, i) && (u = 'onCompositionStart'),
      !u)
    )
      return null;
    jg &&
      !Xg(i) &&
      (!Zo && u === 'onCompositionStart'
        ? (Zo = eR(l))
        : u === 'onCompositionEnd' && Zo && (p = zg()));
    var v = kc(n, u);
    if (v.length > 0) {
      var y = new Ig(u, t, null, i, l);
      if ((e.push({ event: y, listeners: v }), p)) y.data = p;
      else {
        var w = qg(i);
        w !== null && (y.data = w);
      }
    }
  }
  function NR(e, t) {
    switch (e) {
      case 'compositionend':
        return qg(t);
      case 'keypress':
        var n = t.which;
        return n !== $g ? null : ((Gg = !0), Yg);
      case 'textInput':
        var i = t.data;
        return i === Yg && Gg ? null : i;
      default:
        return null;
    }
  }
  function PR(e, t) {
    if (Zo) {
      if (e === 'compositionend' || (!Xp && Wg(e, t))) {
        var n = zg();
        return (tR(), (Zo = !1), n);
      }
      return null;
    }
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!AR(t)) {
          if (t.char && t.char.length > 1) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case 'compositionend':
        return jg && !Xg(t) ? null : t.data;
      default:
        return null;
    }
  }
  function zR(e, t, n, i, l) {
    var u;
    if ((DR ? (u = NR(t, i)) : (u = PR(t, i)), !u)) return null;
    var p = kc(n, 'onBeforeInput');
    if (p.length > 0) {
      var v = new dR('onBeforeInput', 'beforeinput', null, i, l);
      (e.push({ event: v, listeners: p }), (v.data = u));
    }
  }
  function UR(e, t, n, i, l, u, p) {
    (kR(e, t, n, i, l), zR(e, t, n, i, l));
  }
  var FR = {
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
  function Qg(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!FR[e.type] : t === 'textarea';
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
   */ function VR(e) {
    if (!ot) return !1;
    var t = 'on' + e,
      n = t in document;
    if (!n) {
      var i = document.createElement('div');
      (i.setAttribute(t, 'return;'), (n = typeof i[t] == 'function'));
    }
    return n;
  }
  function IR() {
    Ze('onChange', [
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
  function Kg(e, t, n, i) {
    qy(i);
    var l = kc(t, 'onChange');
    if (l.length > 0) {
      var u = new $p('onChange', 'change', null, n, i);
      e.push({ event: u, listeners: l });
    }
  }
  var Os = null,
    As = null;
  function HR(e) {
    var t = e.nodeName && e.nodeName.toLowerCase();
    return t === 'select' || (t === 'input' && e.type === 'file');
  }
  function BR(e) {
    var t = [];
    (Kg(t, As, e, Xd(e)), Jy(jR, t));
  }
  function jR(e) {
    hb(e, 0);
  }
  function Oc(e) {
    var t = il(e);
    if (No(t)) return e;
  }
  function $R(e, t) {
    if (e === 'change') return t;
  }
  var Jg = !1;
  ot &&
    (Jg = VR('input') && (!document.documentMode || document.documentMode > 9));
  function YR(e, t) {
    ((Os = e), (As = t), Os.attachEvent('onpropertychange', eb));
  }
  function Zg() {
    Os && (Os.detachEvent('onpropertychange', eb), (Os = null), (As = null));
  }
  function eb(e) {
    e.propertyName === 'value' && Oc(As) && BR(e);
  }
  function GR(e, t, n) {
    e === 'focusin' ? (Zg(), YR(t, n)) : e === 'focusout' && Zg();
  }
  function WR(e, t) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
      return Oc(As);
  }
  function qR(e) {
    var t = e.nodeName;
    return (
      t &&
      t.toLowerCase() === 'input' &&
      (e.type === 'checkbox' || e.type === 'radio')
    );
  }
  function XR(e, t) {
    if (e === 'click') return Oc(t);
  }
  function QR(e, t) {
    if (e === 'input' || e === 'change') return Oc(t);
  }
  function KR(e) {
    var t = e._wrapperState;
    !t || !t.controlled || e.type !== 'number' || tt(e, 'number', e.value);
  }
  function JR(e, t, n, i, l, u, p) {
    var v = n ? il(n) : window,
      y,
      w;
    if (
      (HR(v)
        ? (y = $R)
        : Qg(v)
          ? Jg
            ? (y = QR)
            : ((y = WR), (w = GR))
          : qR(v) && (y = XR),
      y)
    ) {
      var C = y(t, n);
      if (C) {
        Kg(e, C, i, l);
        return;
      }
    }
    (w && w(t, v, n), t === 'focusout' && KR(v));
  }
  function ZR() {
    (se('onMouseEnter', ['mouseout', 'mouseover']),
      se('onMouseLeave', ['mouseout', 'mouseover']),
      se('onPointerEnter', ['pointerout', 'pointerover']),
      se('onPointerLeave', ['pointerout', 'pointerover']));
  }
  function e_(e, t, n, i, l, u, p) {
    var v = t === 'mouseover' || t === 'pointerover',
      y = t === 'mouseout' || t === 'pointerout';
    if (v && !yx(i)) {
      var w = i.relatedTarget || i.fromElement;
      if (w && (uo(w) || Ys(w))) return;
    }
    if (!(!y && !v)) {
      var C;
      if (l.window === l) C = l;
      else {
        var P = l.ownerDocument;
        P ? (C = P.defaultView || P.parentWindow) : (C = window);
      }
      var N, j;
      if (y) {
        var G = i.relatedTarget || i.toElement;
        if (((N = n), (j = G ? uo(G) : null), j !== null)) {
          var K = to(j);
          (j !== K || (j.tag !== D && j.tag !== O)) && (j = null);
        }
      } else ((N = null), (j = n));
      if (N !== j) {
        var De = Vg,
          He = 'onMouseLeave',
          ze = 'onMouseEnter',
          bt = 'mouse';
        (t === 'pointerout' || t === 'pointerover') &&
          ((De = Hg),
          (He = 'onPointerLeave'),
          (ze = 'onPointerEnter'),
          (bt = 'pointer'));
        var pt = N == null ? C : il(N),
          I = j == null ? C : il(j),
          J = new De(He, bt + 'leave', N, i, l);
        ((J.target = pt), (J.relatedTarget = I));
        var H = null,
          he = uo(l);
        if (he === n) {
          var ke = new De(ze, bt + 'enter', j, i, l);
          ((ke.target = I), (ke.relatedTarget = pt), (H = ke));
        }
        T_(e, J, H, N, j);
      }
    }
  }
  function t_(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var wr = typeof Object.is == 'function' ? Object.is : t_;
  function Ms(e, t) {
    if (wr(e, t)) return !0;
    if (
      typeof e != 'object' ||
      e === null ||
      typeof t != 'object' ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      i = Object.keys(t);
    if (n.length !== i.length) return !1;
    for (var l = 0; l < n.length; l++) {
      var u = n[l];
      if (!dt.call(t, u) || !wr(e[u], t[u])) return !1;
    }
    return !0;
  }
  function tb(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function n_(e) {
    for (; e; ) {
      if (e.nextSibling) return e.nextSibling;
      e = e.parentNode;
    }
  }
  function nb(e, t) {
    for (var n = tb(e), i = 0, l = 0; n; ) {
      if (n.nodeType === La) {
        if (((l = i + n.textContent.length), i <= t && l >= t))
          return { node: n, offset: t - i };
        i = l;
      }
      n = tb(n_(n));
    }
  }
  function r_(e) {
    var t = e.ownerDocument,
      n = (t && t.defaultView) || window,
      i = n.getSelection && n.getSelection();
    if (!i || i.rangeCount === 0) return null;
    var l = i.anchorNode,
      u = i.anchorOffset,
      p = i.focusNode,
      v = i.focusOffset;
    try {
      (l.nodeType, p.nodeType);
    } catch {
      return null;
    }
    return a_(e, l, u, p, v);
  }
  function a_(e, t, n, i, l) {
    var u = 0,
      p = -1,
      v = -1,
      y = 0,
      w = 0,
      C = e,
      P = null;
    e: for (;;) {
      for (
        var N = null;
        C === t && (n === 0 || C.nodeType === La) && (p = u + n),
          C === i && (l === 0 || C.nodeType === La) && (v = u + l),
          C.nodeType === La && (u += C.nodeValue.length),
          (N = C.firstChild) !== null;

      )
        ((P = C), (C = N));
      for (;;) {
        if (C === e) break e;
        if (
          (P === t && ++y === n && (p = u),
          P === i && ++w === l && (v = u),
          (N = C.nextSibling) !== null)
        )
          break;
        ((C = P), (P = C.parentNode));
      }
      C = N;
    }
    return p === -1 || v === -1 ? null : { start: p, end: v };
  }
  function i_(e, t) {
    var n = e.ownerDocument || document,
      i = (n && n.defaultView) || window;
    if (i.getSelection) {
      var l = i.getSelection(),
        u = e.textContent.length,
        p = Math.min(t.start, u),
        v = t.end === void 0 ? p : Math.min(t.end, u);
      if (!l.extend && p > v) {
        var y = v;
        ((v = p), (p = y));
      }
      var w = nb(e, p),
        C = nb(e, v);
      if (w && C) {
        if (
          l.rangeCount === 1 &&
          l.anchorNode === w.node &&
          l.anchorOffset === w.offset &&
          l.focusNode === C.node &&
          l.focusOffset === C.offset
        )
          return;
        var P = n.createRange();
        (P.setStart(w.node, w.offset),
          l.removeAllRanges(),
          p > v
            ? (l.addRange(P), l.extend(C.node, C.offset))
            : (P.setEnd(C.node, C.offset), l.addRange(P)));
      }
    }
  }
  function rb(e) {
    return e && e.nodeType === La;
  }
  function ab(e, t) {
    return !e || !t
      ? !1
      : e === t
        ? !0
        : rb(e)
          ? !1
          : rb(t)
            ? ab(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1;
  }
  function o_(e) {
    return e && e.ownerDocument && ab(e.ownerDocument.documentElement, e);
  }
  function l_(e) {
    try {
      return typeof e.contentWindow.location.href == 'string';
    } catch {
      return !1;
    }
  }
  function ib() {
    for (var e = window, t = fi(); t instanceof e.HTMLIFrameElement; ) {
      if (l_(t)) e = t.contentWindow;
      else return t;
      t = fi(e.document);
    }
    return t;
  }
  function Qp(e) {
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
  function s_() {
    var e = ib();
    return { focusedElem: e, selectionRange: Qp(e) ? c_(e) : null };
  }
  function u_(e) {
    var t = ib(),
      n = e.focusedElem,
      i = e.selectionRange;
    if (t !== n && o_(n)) {
      i !== null && Qp(n) && f_(n, i);
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
  function c_(e) {
    var t;
    return (
      'selectionStart' in e
        ? (t = { start: e.selectionStart, end: e.selectionEnd })
        : (t = r_(e)),
      t || { start: 0, end: 0 }
    );
  }
  function f_(e, t) {
    var n = t.start,
      i = t.end;
    (i === void 0 && (i = n),
      'selectionStart' in e
        ? ((e.selectionStart = n),
          (e.selectionEnd = Math.min(i, e.value.length)))
        : i_(e, t));
  }
  var d_ = ot && 'documentMode' in document && document.documentMode <= 11;
  function p_() {
    Ze('onSelect', [
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
    Kp = null,
    Ls = null,
    Jp = !1;
  function v_(e) {
    if ('selectionStart' in e && Qp(e))
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
  function h_(e) {
    return e.window === e
      ? e.document
      : e.nodeType === ka
        ? e
        : e.ownerDocument;
  }
  function ob(e, t, n) {
    var i = h_(n);
    if (!(Jp || el == null || el !== fi(i))) {
      var l = v_(el);
      if (!Ls || !Ms(Ls, l)) {
        Ls = l;
        var u = kc(Kp, 'onSelect');
        if (u.length > 0) {
          var p = new $p('onSelect', 'select', null, t, n);
          (e.push({ event: p, listeners: u }), (p.target = el));
        }
      }
    }
  }
  function m_(e, t, n, i, l, u, p) {
    var v = n ? il(n) : window;
    switch (t) {
      case 'focusin':
        (Qg(v) || v.contentEditable === 'true') &&
          ((el = v), (Kp = n), (Ls = null));
        break;
      case 'focusout':
        ((el = null), (Kp = null), (Ls = null));
        break;
      case 'mousedown':
        Jp = !0;
        break;
      case 'contextmenu':
      case 'mouseup':
      case 'dragend':
        ((Jp = !1), ob(e, i, l));
        break;
      case 'selectionchange':
        if (d_) break;
      case 'keydown':
      case 'keyup':
        ob(e, i, l);
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
    Zp = {},
    lb = {};
  ot &&
    ((lb = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete tl.animationend.animation,
      delete tl.animationiteration.animation,
      delete tl.animationstart.animation),
    'TransitionEvent' in window || delete tl.transitionend.transition);
  function Mc(e) {
    if (Zp[e]) return Zp[e];
    if (!tl[e]) return e;
    var t = tl[e];
    for (var n in t) if (t.hasOwnProperty(n) && n in lb) return (Zp[e] = t[n]);
    return e;
  }
  var sb = Mc('animationend'),
    ub = Mc('animationiteration'),
    cb = Mc('animationstart'),
    fb = Mc('transitionend'),
    db = new Map(),
    pb = [
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
    (db.set(e, t), Ze(t, [e]));
  }
  function y_() {
    for (var e = 0; e < pb.length; e++) {
      var t = pb[e],
        n = t.toLowerCase(),
        i = t[0].toUpperCase() + t.slice(1);
      gi(n, 'on' + i);
    }
    (gi(sb, 'onAnimationEnd'),
      gi(ub, 'onAnimationIteration'),
      gi(cb, 'onAnimationStart'),
      gi('dblclick', 'onDoubleClick'),
      gi('focusin', 'onFocus'),
      gi('focusout', 'onBlur'),
      gi(fb, 'onTransitionEnd'));
  }
  function g_(e, t, n, i, l, u, p) {
    var v = db.get(t);
    if (v !== void 0) {
      var y = $p,
        w = t;
      switch (t) {
        case 'keypress':
          if (Rc(i) === 0) return;
        case 'keydown':
        case 'keyup':
          y = bR;
          break;
        case 'focusin':
          ((w = 'focus'), (y = Wp));
          break;
        case 'focusout':
          ((w = 'blur'), (y = Wp));
          break;
        case 'beforeblur':
        case 'afterblur':
          y = Wp;
          break;
        case 'click':
          if (i.button === 2) return;
        case 'auxclick':
        case 'dblclick':
        case 'mousedown':
        case 'mousemove':
        case 'mouseup':
        case 'mouseout':
        case 'mouseover':
        case 'contextmenu':
          y = Vg;
          break;
        case 'drag':
        case 'dragend':
        case 'dragenter':
        case 'dragexit':
        case 'dragleave':
        case 'dragover':
        case 'dragstart':
        case 'drop':
          y = iR;
          break;
        case 'touchcancel':
        case 'touchend':
        case 'touchmove':
        case 'touchstart':
          y = wR;
          break;
        case sb:
        case ub:
        case cb:
          y = sR;
          break;
        case fb:
          y = TR;
          break;
        case 'scroll':
          y = nR;
          break;
        case 'wheel':
          y = RR;
          break;
        case 'copy':
        case 'cut':
        case 'paste':
          y = cR;
          break;
        case 'gotpointercapture':
        case 'lostpointercapture':
        case 'pointercancel':
        case 'pointerdown':
        case 'pointermove':
        case 'pointerout':
        case 'pointerover':
        case 'pointerup':
          y = Hg;
          break;
      }
      var C = (u & rs) !== 0;
      {
        var P = !C && t === 'scroll',
          N = w_(n, v, i.type, C, P);
        if (N.length > 0) {
          var j = new y(v, w, null, i, l);
          e.push({ event: j, listeners: N });
        }
      }
    }
  }
  (y_(), ZR(), IR(), p_(), OR());
  function b_(e, t, n, i, l, u, p) {
    g_(e, t, n, i, l, u);
    var v = (u & vx) === 0;
    v &&
      (e_(e, t, n, i, l),
      JR(e, t, n, i, l),
      m_(e, t, n, i, l),
      UR(e, t, n, i, l));
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
    ev = new Set(
      ['cancel', 'close', 'invalid', 'load', 'scroll', 'toggle'].concat(ks)
    );
  function vb(e, t, n) {
    var i = e.type || 'unknown-event';
    ((e.currentTarget = n), Rx(i, t, void 0, e), (e.currentTarget = null));
  }
  function S_(e, t, n) {
    var i;
    if (n)
      for (var l = t.length - 1; l >= 0; l--) {
        var u = t[l],
          p = u.instance,
          v = u.currentTarget,
          y = u.listener;
        if (p !== i && e.isPropagationStopped()) return;
        (vb(e, y, v), (i = p));
      }
    else
      for (var w = 0; w < t.length; w++) {
        var C = t[w],
          P = C.instance,
          N = C.currentTarget,
          j = C.listener;
        if (P !== i && e.isPropagationStopped()) return;
        (vb(e, j, N), (i = P));
      }
  }
  function hb(e, t) {
    for (var n = (t & rs) !== 0, i = 0; i < e.length; i++) {
      var l = e[i],
        u = l.event,
        p = l.listeners;
      S_(u, p, n);
    }
    _x();
  }
  function E_(e, t, n, i, l) {
    var u = Xd(n),
      p = [];
    (b_(p, e, i, n, u, t), hb(p, t));
  }
  function qt(e, t) {
    ev.has(e) ||
      d(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e
      );
    var n = !1,
      i = KD(t),
      l = x_(e, n);
    i.has(l) || (mb(t, e, qd, n), i.add(l));
  }
  function tv(e, t, n) {
    ev.has(e) &&
      !t &&
      d(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        e
      );
    var i = 0;
    (t && (i |= rs), mb(n, e, i, t));
  }
  var Lc = '_reactListening' + Math.random().toString(36).slice(2);
  function Ns(e) {
    if (!e[Lc]) {
      ((e[Lc] = !0),
        ye.forEach(function (n) {
          n !== 'selectionchange' && (ev.has(n) || tv(n, !1, e), tv(n, !0, e));
        }));
      var t = e.nodeType === ka ? e : e.ownerDocument;
      t !== null && (t[Lc] || ((t[Lc] = !0), tv('selectionchange', !1, t)));
    }
  }
  function mb(e, t, n, i, l) {
    var u = G0(e, t, n),
      p = void 0;
    (Jd &&
      (t === 'touchstart' || t === 'touchmove' || t === 'wheel') &&
      (p = !0),
      (e = e),
      i
        ? p !== void 0
          ? J0(e, t, u, p)
          : K0(e, t, u)
        : p !== void 0
          ? Z0(e, t, u, p)
          : Q0(e, t, u));
  }
  function yb(e, t) {
    return e === t || (e.nodeType === dn && e.parentNode === t);
  }
  function nv(e, t, n, i, l) {
    var u = i;
    if (!(t & Gy) && !(t & qd)) {
      var p = l;
      if (i !== null) {
        var v = i;
        e: for (;;) {
          if (v === null) return;
          var y = v.tag;
          if (y === E || y === T) {
            var w = v.stateNode.containerInfo;
            if (yb(w, p)) break;
            if (y === T)
              for (var C = v.return; C !== null; ) {
                var P = C.tag;
                if (P === E || P === T) {
                  var N = C.stateNode.containerInfo;
                  if (yb(N, p)) return;
                }
                C = C.return;
              }
            for (; w !== null; ) {
              var j = uo(w);
              if (j === null) return;
              var G = j.tag;
              if (G === D || G === O) {
                v = u = j;
                continue e;
              }
              w = w.parentNode;
            }
          }
          v = v.return;
        }
      }
    }
    Jy(function () {
      return E_(e, t, n, u);
    });
  }
  function Ps(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function w_(e, t, n, i, l, u) {
    for (
      var p = t !== null ? t + 'Capture' : null,
        v = i ? p : t,
        y = [],
        w = e,
        C = null;
      w !== null;

    ) {
      var P = w,
        N = P.stateNode,
        j = P.tag;
      if (j === D && N !== null && ((C = N), v !== null)) {
        var G = is(w, v);
        G != null && y.push(Ps(w, G, C));
      }
      if (l) break;
      w = w.return;
    }
    return y;
  }
  function kc(e, t) {
    for (var n = t + 'Capture', i = [], l = e; l !== null; ) {
      var u = l,
        p = u.stateNode,
        v = u.tag;
      if (v === D && p !== null) {
        var y = p,
          w = is(l, n);
        w != null && i.unshift(Ps(l, w, y));
        var C = is(l, t);
        C != null && i.push(Ps(l, C, y));
      }
      l = l.return;
    }
    return i;
  }
  function nl(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== D);
    return e || null;
  }
  function C_(e, t) {
    for (var n = e, i = t, l = 0, u = n; u; u = nl(u)) l++;
    for (var p = 0, v = i; v; v = nl(v)) p++;
    for (; l - p > 0; ) ((n = nl(n)), l--);
    for (; p - l > 0; ) ((i = nl(i)), p--);
    for (var y = l; y--; ) {
      if (n === i || (i !== null && n === i.alternate)) return n;
      ((n = nl(n)), (i = nl(i)));
    }
    return null;
  }
  function gb(e, t, n, i, l) {
    for (var u = t._reactName, p = [], v = n; v !== null && v !== i; ) {
      var y = v,
        w = y.alternate,
        C = y.stateNode,
        P = y.tag;
      if (w !== null && w === i) break;
      if (P === D && C !== null) {
        var N = C;
        if (l) {
          var j = is(v, u);
          j != null && p.unshift(Ps(v, j, N));
        } else if (!l) {
          var G = is(v, u);
          G != null && p.push(Ps(v, G, N));
        }
      }
      v = v.return;
    }
    p.length !== 0 && e.push({ event: t, listeners: p });
  }
  function T_(e, t, n, i, l) {
    var u = i && l ? C_(i, l) : null;
    (i !== null && gb(e, t, i, u, !1),
      l !== null && n !== null && gb(e, n, l, u, !0));
  }
  function x_(e, t) {
    return e + '__' + (t ? 'capture' : 'bubble');
  }
  var ur = !1,
    zs = 'dangerouslySetInnerHTML',
    Nc = 'suppressContentEditableWarning',
    bi = 'suppressHydrationWarning',
    bb = 'autoFocus',
    lo = 'children',
    so = 'style',
    Pc = '__html',
    rv,
    zc,
    Us,
    Sb,
    Uc,
    Eb,
    wb;
  ((rv = { dialog: !0, webview: !0 }),
    (zc = function (e, t) {
      (lx(e, t),
        sx(e, t),
        px(e, t, {
          registrationNameDependencies: it,
          possibleRegistrationNames: Xe,
        }));
    }),
    (Eb = ot && !document.documentMode),
    (Us = function (e, t, n) {
      if (!ur) {
        var i = Fc(n),
          l = Fc(t);
        l !== i &&
          ((ur = !0),
          d(
            'Prop `%s` did not match. Server: %s Client: %s',
            e,
            JSON.stringify(l),
            JSON.stringify(i)
          ));
      }
    }),
    (Sb = function (e) {
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
    (wb = function (e, t) {
      var n =
        e.namespaceURI === Ma
          ? e.ownerDocument.createElement(e.tagName)
          : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return ((n.innerHTML = t), n.innerHTML);
    }));
  var R_ = /\r\n?/g,
    __ = /\u0000|\uFFFD/g;
  function Fc(e) {
    q(e);
    var t = typeof e == 'string' ? e : '' + e;
    return t
      .replace(
        R_,
        `
`
      )
      .replace(__, '');
  }
  function Vc(e, t, n, i) {
    var l = Fc(t),
      u = Fc(e);
    if (
      u !== l &&
      (i &&
        (ur ||
          ((ur = !0),
          d('Text content did not match. Server: "%s" Client: "%s"', u, l))),
      n && ve)
    )
      throw new Error('Text content does not match server-rendered HTML.');
  }
  function Cb(e) {
    return e.nodeType === ka ? e : e.ownerDocument;
  }
  function D_() {}
  function Ic(e) {
    e.onclick = D_;
  }
  function O_(e, t, n, i, l) {
    for (var u in i)
      if (i.hasOwnProperty(u)) {
        var p = i[u];
        if (u === so) (p && Object.freeze(p), Iy(t, p));
        else if (u === zs) {
          var v = p ? p[Pc] : void 0;
          v != null && Py(t, v);
        } else if (u === lo)
          if (typeof p == 'string') {
            var y = e !== 'textarea' || p !== '';
            y && sc(t, p);
          } else typeof p == 'number' && sc(t, '' + p);
        else
          u === Nc ||
            u === bi ||
            u === bb ||
            (it.hasOwnProperty(u)
              ? p != null &&
                (typeof p != 'function' && Uc(u, p),
                u === 'onScroll' && qt('scroll', t))
              : p != null && _a(t, u, p, l));
      }
  }
  function A_(e, t, n, i) {
    for (var l = 0; l < t.length; l += 2) {
      var u = t[l],
        p = t[l + 1];
      u === so
        ? Iy(e, p)
        : u === zs
          ? Py(e, p)
          : u === lo
            ? sc(e, p)
            : _a(e, u, p, i);
    }
  }
  function M_(e, t, n, i) {
    var l,
      u = Cb(n),
      p,
      v = i;
    if ((v === Ma && (v = Bd(e)), v === Ma)) {
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
        var w = y.firstChild;
        p = y.removeChild(w);
      } else if (typeof t.is == 'string') p = u.createElement(e, { is: t.is });
      else if (((p = u.createElement(e)), e === 'select')) {
        var C = p;
        t.multiple ? (C.multiple = !0) : t.size && (C.size = t.size);
      }
    } else p = u.createElementNS(v, e);
    return (
      v === Ma &&
        !l &&
        Object.prototype.toString.call(p) === '[object HTMLUnknownElement]' &&
        !dt.call(rv, e) &&
        ((rv[e] = !0),
        d(
          'The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.',
          e
        )),
      p
    );
  }
  function L_(e, t) {
    return Cb(t).createTextNode(e);
  }
  function k_(e, t, n, i) {
    var l = Qi(t, n);
    zc(t, n);
    var u;
    switch (t) {
      case 'dialog':
        (qt('cancel', e), qt('close', e), (u = n));
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        (qt('load', e), (u = n));
        break;
      case 'video':
      case 'audio':
        for (var p = 0; p < ks.length; p++) qt(ks[p], e);
        u = n;
        break;
      case 'source':
        (qt('error', e), (u = n));
        break;
      case 'img':
      case 'image':
      case 'link':
        (qt('error', e), qt('load', e), (u = n));
        break;
      case 'details':
        (qt('toggle', e), (u = n));
        break;
      case 'input':
        (A(e, n), (u = b(e, n)), qt('invalid', e));
        break;
      case 'option':
        (It(e, n), (u = n));
        break;
      case 'select':
        (ts(e, n), (u = es(e, n)), qt('invalid', e));
        break;
      case 'textarea':
        (Ly(e, n), (u = Id(e, n)), qt('invalid', e));
        break;
      default:
        u = n;
    }
    switch ((Wd(t, u), O_(t, e, i, u, l), t)) {
      case 'input':
        (Oa(e), Se(e, n, !1));
        break;
      case 'textarea':
        (Oa(e), Ny(e));
        break;
      case 'option':
        Wt(e, n);
        break;
      case 'select':
        Vd(e, n);
        break;
      default:
        typeof u.onClick == 'function' && Ic(e);
        break;
    }
  }
  function N_(e, t, n, i, l) {
    zc(t, i);
    var u = null,
      p,
      v;
    switch (t) {
      case 'input':
        ((p = b(e, n)), (v = b(e, i)), (u = []));
        break;
      case 'select':
        ((p = es(e, n)), (v = es(e, i)), (u = []));
        break;
      case 'textarea':
        ((p = Id(e, n)), (v = Id(e, i)), (u = []));
        break;
      default:
        ((p = n),
          (v = i),
          typeof p.onClick != 'function' &&
            typeof v.onClick == 'function' &&
            Ic(e));
        break;
    }
    Wd(t, v);
    var y,
      w,
      C = null;
    for (y in p)
      if (!(v.hasOwnProperty(y) || !p.hasOwnProperty(y) || p[y] == null))
        if (y === so) {
          var P = p[y];
          for (w in P) P.hasOwnProperty(w) && (C || (C = {}), (C[w] = ''));
        } else
          y === zs ||
            y === lo ||
            y === Nc ||
            y === bi ||
            y === bb ||
            (it.hasOwnProperty(y)
              ? u || (u = [])
              : (u = u || []).push(y, null));
    for (y in v) {
      var N = v[y],
        j = p != null ? p[y] : void 0;
      if (!(!v.hasOwnProperty(y) || N === j || (N == null && j == null)))
        if (y === so)
          if ((N && Object.freeze(N), j)) {
            for (w in j)
              j.hasOwnProperty(w) &&
                (!N || !N.hasOwnProperty(w)) &&
                (C || (C = {}), (C[w] = ''));
            for (w in N)
              N.hasOwnProperty(w) &&
                j[w] !== N[w] &&
                (C || (C = {}), (C[w] = N[w]));
          } else (C || (u || (u = []), u.push(y, C)), (C = N));
        else if (y === zs) {
          var G = N ? N[Pc] : void 0,
            K = j ? j[Pc] : void 0;
          G != null && K !== G && (u = u || []).push(y, G);
        } else
          y === lo
            ? (typeof N == 'string' || typeof N == 'number') &&
              (u = u || []).push(y, '' + N)
            : y === Nc ||
              y === bi ||
              (it.hasOwnProperty(y)
                ? (N != null &&
                    (typeof N != 'function' && Uc(y, N),
                    y === 'onScroll' && qt('scroll', e)),
                  !u && j !== N && (u = []))
                : (u = u || []).push(y, N));
    }
    return (C && (ZT(C, v[so]), (u = u || []).push(so, C)), u);
  }
  function P_(e, t, n, i, l) {
    n === 'input' && l.type === 'radio' && l.name != null && Y(e, l);
    var u = Qi(n, i),
      p = Qi(n, l);
    switch ((A_(e, t, u, p), n)) {
      case 'input':
        Q(e, l);
        break;
      case 'textarea':
        ky(e, l);
        break;
      case 'select':
        AT(e, l);
        break;
    }
  }
  function z_(e) {
    {
      var t = e.toLowerCase();
      return (uc.hasOwnProperty(t) && uc[t]) || null;
    }
  }
  function U_(e, t, n, i, l, u, p) {
    var v, y;
    switch (((v = Qi(t, n)), zc(t, n), t)) {
      case 'dialog':
        (qt('cancel', e), qt('close', e));
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        qt('load', e);
        break;
      case 'video':
      case 'audio':
        for (var w = 0; w < ks.length; w++) qt(ks[w], e);
        break;
      case 'source':
        qt('error', e);
        break;
      case 'img':
      case 'image':
      case 'link':
        (qt('error', e), qt('load', e));
        break;
      case 'details':
        qt('toggle', e);
        break;
      case 'input':
        (A(e, n), qt('invalid', e));
        break;
      case 'option':
        It(e, n);
        break;
      case 'select':
        (ts(e, n), qt('invalid', e));
        break;
      case 'textarea':
        (Ly(e, n), qt('invalid', e));
        break;
    }
    Wd(t, n);
    {
      y = new Set();
      for (var C = e.attributes, P = 0; P < C.length; P++) {
        var N = C[P].name.toLowerCase();
        switch (N) {
          case 'value':
            break;
          case 'checked':
            break;
          case 'selected':
            break;
          default:
            y.add(C[P].name);
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
        else if (it.hasOwnProperty(G))
          K != null &&
            (typeof K != 'function' && Uc(G, K),
            G === 'onScroll' && qt('scroll', e));
        else if (p && typeof v == 'boolean') {
          var De = void 0,
            He = v && Ce ? null : hr(G);
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
                  var pt = wb(e, bt);
                  pt !== ze && Us(G, ze, pt);
                }
              } else if (G === so) {
                if ((y.delete(G), Eb)) {
                  var I = KT(K);
                  ((De = e.getAttribute('style')), I !== De && Us(G, De, I));
                }
              } else if (v && !Ce)
                (y.delete(G.toLowerCase()),
                  (De = ri(e, G, K)),
                  K !== De && Us(G, De, K));
              else if (!Jt(G, He, v) && !Ft(G, K, He, v)) {
                var J = !1;
                if (He !== null)
                  (y.delete(He.attributeName), (De = Ra(e, G, K, He)));
                else {
                  var H = i;
                  if ((H === Ma && (H = Bd(t)), H === Ma))
                    y.delete(G.toLowerCase());
                  else {
                    var he = z_(G);
                    (he !== null && he !== G && ((J = !0), y.delete(he)),
                      y.delete(G));
                  }
                  De = ri(e, G, K);
                }
                var ke = Ce;
                !ke && K !== De && !J && Us(G, De, K);
              }
            }
          }
        }
      }
    switch ((p && y.size > 0 && n[bi] !== !0 && Sb(y), t)) {
      case 'input':
        (Oa(e), Se(e, n, !0));
        break;
      case 'textarea':
        (Oa(e), Ny(e));
        break;
      case 'select':
      case 'option':
        break;
      default:
        typeof n.onClick == 'function' && Ic(e);
        break;
    }
    return j;
  }
  function F_(e, t, n) {
    var i = e.nodeValue !== t;
    return i;
  }
  function av(e, t) {
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
  function iv(e, t) {
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
  function ov(e, t, n) {
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
  function lv(e, t) {
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
  function V_(e, t, n) {
    switch (t) {
      case 'input':
        Qe(e, n);
        return;
      case 'textarea':
        LT(e, n);
        return;
      case 'select':
        MT(e, n);
        return;
    }
  }
  var Fs = function () {},
    Vs = function () {};
  {
    var I_ = [
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
      Tb = [
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
      H_ = Tb.concat(['button']),
      B_ = ['dd', 'dt', 'li', 'option', 'optgroup', 'p', 'rp', 'rt'],
      xb = {
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
      var n = ft({}, e || xb),
        i = { tag: t };
      return (
        Tb.indexOf(t) !== -1 &&
          ((n.aTagInScope = null),
          (n.buttonTagInScope = null),
          (n.nobrTagInScope = null)),
        H_.indexOf(t) !== -1 && (n.pTagInButtonScope = null),
        I_.indexOf(t) !== -1 &&
          t !== 'address' &&
          t !== 'div' &&
          t !== 'p' &&
          ((n.listItemTagAutoclosing = null), (n.dlItemTagAutoclosing = null)),
        (n.current = i),
        t === 'form' && (n.formTag = i),
        t === 'a' && (n.aTagInScope = i),
        t === 'button' && (n.buttonTagInScope = i),
        t === 'nobr' && (n.nobrTagInScope = i),
        t === 'p' && (n.pTagInButtonScope = i),
        t === 'li' && (n.listItemTagAutoclosing = i),
        (t === 'dd' || t === 'dt') && (n.dlItemTagAutoclosing = i),
        n
      );
    };
    var j_ = function (e, t) {
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
            return B_.indexOf(t) === -1;
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
      $_ = function (e, t) {
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
      Rb = {};
    Fs = function (e, t, n) {
      n = n || xb;
      var i = n.current,
        l = i && i.tag;
      t != null &&
        (e != null &&
          d(
            'validateDOMNesting: when childText is passed, childTag should be null'
          ),
        (e = '#text'));
      var u = j_(e, l) ? null : i,
        p = u ? null : $_(e, n),
        v = u || p;
      if (v) {
        var y = v.tag,
          w = !!u + '|' + e + '|' + y;
        if (!Rb[w]) {
          Rb[w] = !0;
          var C = e,
            P = '';
          if (
            (e === '#text'
              ? /\S/.test(t)
                ? (C = 'Text nodes')
                : ((C = 'Whitespace text nodes'),
                  (P =
                    " Make sure you don't have any extra whitespace between tags on each line of your source code."))
              : (C = '<' + e + '>'),
            u)
          ) {
            var N = '';
            (y === 'table' &&
              e === 'tr' &&
              (N +=
                ' Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser.'),
              d(
                'validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s',
                C,
                y,
                P,
                N
              ));
          } else
            d(
              'validateDOMNesting(...): %s cannot appear as a descendant of <%s>.',
              C,
              y
            );
        }
      }
    };
  }
  var Hc = 'suppressHydrationWarning',
    Bc = '$',
    jc = '/$',
    Is = '$?',
    Hs = '$!',
    Y_ = 'style',
    sv = null,
    uv = null;
  function G_(e) {
    var t,
      n,
      i = e.nodeType;
    switch (i) {
      case ka:
      case $d: {
        t = i === ka ? '#document' : '#fragment';
        var l = e.documentElement;
        n = l ? l.namespaceURI : jd(null, '');
        break;
      }
      default: {
        var u = i === dn ? e.parentNode : e,
          p = u.namespaceURI || null;
        ((t = u.tagName), (n = jd(p, t)));
        break;
      }
    }
    {
      var v = t.toLowerCase(),
        y = Vs(null, v);
      return { namespace: n, ancestorInfo: y };
    }
  }
  function W_(e, t, n) {
    {
      var i = e,
        l = jd(i.namespace, t),
        u = Vs(i.ancestorInfo, t);
      return { namespace: l, ancestorInfo: u };
    }
  }
  function Xz(e) {
    return e;
  }
  function q_(e) {
    ((sv = Y0()), (uv = s_()));
    var t = null;
    return (Ng(!1), t);
  }
  function X_(e) {
    (u_(uv), Ng(sv), (sv = null), (uv = null));
  }
  function Q_(e, t, n, i, l) {
    var u;
    {
      var p = i;
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
    var w = M_(e, t, n, u);
    return ($s(l, w), yv(w, t), w);
  }
  function K_(e, t) {
    e.appendChild(t);
  }
  function J_(e, t, n, i, l) {
    switch ((k_(e, t, n, i), t)) {
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
  function Z_(e, t, n, i, l, u) {
    {
      var p = u;
      if (
        typeof i.children != typeof n.children &&
        (typeof i.children == 'string' || typeof i.children == 'number')
      ) {
        var v = '' + i.children,
          y = Vs(p.ancestorInfo, t);
        Fs(null, v, y);
      }
    }
    return N_(e, t, n, i);
  }
  function cv(e, t) {
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
  function eD(e, t, n, i) {
    {
      var l = n;
      Fs(null, e, l.ancestorInfo);
    }
    var u = L_(e, t);
    return ($s(i, u), u);
  }
  function tD() {
    var e = window.event;
    return e === void 0 ? Ia : Pg(e.type);
  }
  var fv = typeof setTimeout == 'function' ? setTimeout : void 0,
    nD = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    dv = -1,
    _b = typeof Promise == 'function' ? Promise : void 0,
    rD =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof _b < 'u'
          ? function (e) {
              return _b.resolve(null).then(e).catch(aD);
            }
          : fv;
  function aD(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function iD(e, t, n, i) {
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
  function oD(e, t, n, i, l, u) {
    (P_(e, t, n, i, l), yv(e, l));
  }
  function Db(e) {
    sc(e, '');
  }
  function lD(e, t, n) {
    e.nodeValue = n;
  }
  function sD(e, t) {
    e.appendChild(t);
  }
  function uD(e, t) {
    var n;
    e.nodeType === dn
      ? ((n = e.parentNode), n.insertBefore(t, e))
      : ((n = e), n.appendChild(t));
    var i = e._reactRootContainer;
    i == null && n.onclick === null && Ic(n);
  }
  function cD(e, t, n) {
    e.insertBefore(t, n);
  }
  function fD(e, t, n) {
    e.nodeType === dn ? e.parentNode.insertBefore(t, n) : e.insertBefore(t, n);
  }
  function dD(e, t) {
    e.removeChild(t);
  }
  function pD(e, t) {
    e.nodeType === dn ? e.parentNode.removeChild(t) : e.removeChild(t);
  }
  function pv(e, t) {
    var n = t,
      i = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === dn)) {
        var u = l.data;
        if (u === jc)
          if (i === 0) {
            (e.removeChild(l), Cs(t));
            return;
          } else i--;
        else (u === Bc || u === Is || u === Hs) && i++;
      }
      n = l;
    } while (n);
    Cs(t);
  }
  function vD(e, t) {
    (e.nodeType === dn ? pv(e.parentNode, t) : e.nodeType === sr && pv(e, t),
      Cs(e));
  }
  function hD(e) {
    e = e;
    var t = e.style;
    typeof t.setProperty == 'function'
      ? t.setProperty('display', 'none', 'important')
      : (t.display = 'none');
  }
  function mD(e) {
    e.nodeValue = '';
  }
  function yD(e, t) {
    e = e;
    var n = t[Y_],
      i = n != null && n.hasOwnProperty('display') ? n.display : null;
    e.style.display = Yd('display', i);
  }
  function gD(e, t) {
    e.nodeValue = t;
  }
  function bD(e) {
    e.nodeType === sr
      ? (e.textContent = '')
      : e.nodeType === ka &&
        e.documentElement &&
        e.removeChild(e.documentElement);
  }
  function SD(e, t, n) {
    return e.nodeType !== sr || t.toLowerCase() !== e.nodeName.toLowerCase()
      ? null
      : e;
  }
  function ED(e, t) {
    return t === '' || e.nodeType !== La ? null : e;
  }
  function wD(e) {
    return e.nodeType !== dn ? null : e;
  }
  function Ob(e) {
    return e.data === Is;
  }
  function vv(e) {
    return e.data === Hs;
  }
  function CD(e) {
    var t = e.nextSibling && e.nextSibling.dataset,
      n,
      i,
      l;
    return (
      t && ((n = t.dgst), (i = t.msg), (l = t.stck)),
      { message: i, digest: n, stack: l }
    );
  }
  function TD(e, t) {
    e._reactRetry = t;
  }
  function $c(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === sr || t === La) break;
      if (t === dn) {
        var n = e.data;
        if (n === Bc || n === Hs || n === Is) break;
        if (n === jc) return null;
      }
    }
    return e;
  }
  function Bs(e) {
    return $c(e.nextSibling);
  }
  function xD(e) {
    return $c(e.firstChild);
  }
  function RD(e) {
    return $c(e.firstChild);
  }
  function _D(e) {
    return $c(e.nextSibling);
  }
  function DD(e, t, n, i, l, u, p) {
    ($s(u, e), yv(e, n));
    var v;
    {
      var y = l;
      v = y.namespace;
    }
    var w = (u.mode & yt) !== je;
    return U_(e, t, n, v, i, w, p);
  }
  function OD(e, t, n, i) {
    return ($s(n, e), n.mode & yt, F_(e, t));
  }
  function AD(e, t) {
    $s(t, e);
  }
  function MD(e) {
    for (var t = e.nextSibling, n = 0; t; ) {
      if (t.nodeType === dn) {
        var i = t.data;
        if (i === jc) {
          if (n === 0) return Bs(t);
          n--;
        } else (i === Bc || i === Hs || i === Is) && n++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Ab(e) {
    for (var t = e.previousSibling, n = 0; t; ) {
      if (t.nodeType === dn) {
        var i = t.data;
        if (i === Bc || i === Hs || i === Is) {
          if (n === 0) return t;
          n--;
        } else i === jc && n++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function LD(e) {
    Cs(e);
  }
  function kD(e) {
    Cs(e);
  }
  function ND(e) {
    return e !== 'head' && e !== 'body';
  }
  function PD(e, t, n, i) {
    var l = !0;
    Vc(t.nodeValue, n, i, l);
  }
  function zD(e, t, n, i, l, u) {
    if (t[Hc] !== !0) {
      var p = !0;
      Vc(i.nodeValue, l, u, p);
    }
  }
  function UD(e, t) {
    t.nodeType === sr ? av(e, t) : t.nodeType === dn || iv(e, t);
  }
  function FD(e, t) {
    {
      var n = e.parentNode;
      n !== null &&
        (t.nodeType === sr ? av(n, t) : t.nodeType === dn || iv(n, t));
    }
  }
  function VD(e, t, n, i, l) {
    (l || t[Hc] !== !0) &&
      (i.nodeType === sr ? av(n, i) : i.nodeType === dn || iv(n, i));
  }
  function ID(e, t, n) {
    ov(e, t);
  }
  function HD(e, t) {
    lv(e, t);
  }
  function BD(e, t, n) {
    {
      var i = e.parentNode;
      i !== null && ov(i, t);
    }
  }
  function jD(e, t) {
    {
      var n = e.parentNode;
      n !== null && lv(n, t);
    }
  }
  function $D(e, t, n, i, l, u) {
    (u || t[Hc] !== !0) && ov(n, i);
  }
  function YD(e, t, n, i, l) {
    (l || t[Hc] !== !0) && lv(n, i);
  }
  function GD(e) {
    d(
      'An error occurred during hydration. The server HTML was replaced with client content in <%s>.',
      e.nodeName.toLowerCase()
    );
  }
  function WD(e) {
    Ns(e);
  }
  var rl = Math.random().toString(36).slice(2),
    al = '__reactFiber$' + rl,
    hv = '__reactProps$' + rl,
    js = '__reactContainer$' + rl,
    mv = '__reactEvents$' + rl,
    qD = '__reactListeners$' + rl,
    XD = '__reactHandles$' + rl;
  function QD(e) {
    (delete e[al], delete e[hv], delete e[mv], delete e[qD], delete e[XD]);
  }
  function $s(e, t) {
    t[al] = e;
  }
  function Yc(e, t) {
    t[js] = e;
  }
  function Mb(e) {
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
        var i = t.alternate;
        if (t.child !== null || (i !== null && i.child !== null))
          for (var l = Ab(e); l !== null; ) {
            var u = l[al];
            if (u) return u;
            l = Ab(l);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function Si(e) {
    var t = e[al] || e[js];
    return t && (t.tag === D || t.tag === O || t.tag === F || t.tag === E)
      ? t
      : null;
  }
  function il(e) {
    if (e.tag === D || e.tag === O) return e.stateNode;
    throw new Error('getNodeFromInstance: Invalid argument.');
  }
  function Gc(e) {
    return e[hv] || null;
  }
  function yv(e, t) {
    e[hv] = t;
  }
  function KD(e) {
    var t = e[mv];
    return (t === void 0 && (t = e[mv] = new Set()), t);
  }
  var Lb = {},
    kb = o.ReactDebugCurrentFrame;
  function Wc(e) {
    if (e) {
      var t = e._owner,
        n = si(e.type, e._source, t ? t.type : null);
      kb.setExtraStackFrame(n);
    } else kb.setExtraStackFrame(null);
  }
  function $r(e, t, n, i, l) {
    {
      var u = Function.call.bind(dt);
      for (var p in e)
        if (u(e, p)) {
          var v = void 0;
          try {
            if (typeof e[p] != 'function') {
              var y = Error(
                (i || 'React class') +
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
              i,
              n,
              null,
              'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
            );
          } catch (w) {
            v = w;
          }
          (v &&
            !(v instanceof Error) &&
            (Wc(l),
            d(
              '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
              i || 'React class',
              n,
              p,
              typeof v
            ),
            Wc(null)),
            v instanceof Error &&
              !(v.message in Lb) &&
              ((Lb[v.message] = !0),
              Wc(l),
              d('Failed %s type: %s', n, v.message),
              Wc(null)));
        }
    }
  }
  var gv = [],
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
      (e.current = gv[Ha]),
      (gv[Ha] = null),
      (qc[Ha] = null),
      Ha--);
  }
  function Wn(e, t, n) {
    (Ha++, (gv[Ha] = e.current), (qc[Ha] = n), (e.current = t));
  }
  var bv;
  bv = {};
  var Cr = {};
  Object.freeze(Cr);
  var Ba = Ei(Cr),
    fa = Ei(!1),
    Sv = Cr;
  function ol(e, t, n) {
    return n && da(t) ? Sv : Ba.current;
  }
  function Nb(e, t, n) {
    {
      var i = e.stateNode;
      ((i.__reactInternalMemoizedUnmaskedChildContext = t),
        (i.__reactInternalMemoizedMaskedChildContext = n));
    }
  }
  function ll(e, t) {
    {
      var n = e.type,
        i = n.contextTypes;
      if (!i) return Cr;
      var l = e.stateNode;
      if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
        return l.__reactInternalMemoizedMaskedChildContext;
      var u = {};
      for (var p in i) u[p] = t[p];
      {
        var v = st(e) || 'Unknown';
        $r(i, u, 'context', v);
      }
      return (l && Nb(e, t, u), u);
    }
  }
  function Xc() {
    return fa.current;
  }
  function da(e) {
    {
      var t = e.childContextTypes;
      return t != null;
    }
  }
  function Qc(e) {
    (Gn(fa, e), Gn(Ba, e));
  }
  function Ev(e) {
    (Gn(fa, e), Gn(Ba, e));
  }
  function Pb(e, t, n) {
    {
      if (Ba.current !== Cr)
        throw new Error(
          'Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.'
        );
      (Wn(Ba, t, e), Wn(fa, n, e));
    }
  }
  function zb(e, t, n) {
    {
      var i = e.stateNode,
        l = t.childContextTypes;
      if (typeof i.getChildContext != 'function') {
        {
          var u = st(e) || 'Unknown';
          bv[u] ||
            ((bv[u] = !0),
            d(
              '%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.',
              u,
              u
            ));
        }
        return n;
      }
      var p = i.getChildContext();
      for (var v in p)
        if (!(v in l))
          throw new Error(
            (st(e) || 'Unknown') +
              '.getChildContext(): key "' +
              v +
              '" is not defined in childContextTypes.'
          );
      {
        var y = st(e) || 'Unknown';
        $r(l, p, 'child context', y);
      }
      return ft({}, n, p);
    }
  }
  function Kc(e) {
    {
      var t = e.stateNode,
        n = (t && t.__reactInternalMemoizedMergedChildContext) || Cr;
      return ((Sv = Ba.current), Wn(Ba, n, e), Wn(fa, fa.current, e), !0);
    }
  }
  function Ub(e, t, n) {
    {
      var i = e.stateNode;
      if (!i)
        throw new Error(
          'Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.'
        );
      if (n) {
        var l = zb(e, t, Sv);
        ((i.__reactInternalMemoizedMergedChildContext = l),
          Gn(fa, e),
          Gn(Ba, e),
          Wn(Ba, l, e),
          Wn(fa, n, e));
      } else (Gn(fa, e), Wn(fa, n, e));
    }
  }
  function JD(e) {
    {
      if (!Nx(e) || e.tag !== g)
        throw new Error(
          'Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.'
        );
      var t = e;
      do {
        switch (t.tag) {
          case E:
            return t.stateNode.context;
          case g: {
            var n = t.type;
            if (da(n))
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
  var wi = 0,
    Jc = 1,
    ja = null,
    wv = !1,
    Cv = !1;
  function Fb(e) {
    ja === null ? (ja = [e]) : ja.push(e);
  }
  function ZD(e) {
    ((wv = !0), Fb(e));
  }
  function Vb() {
    wv && Ci();
  }
  function Ci() {
    if (!Cv && ja !== null) {
      Cv = !0;
      var e = 0,
        t = jr();
      try {
        var n = !0,
          i = ja;
        for (Mn(Sr); e < i.length; e++) {
          var l = i[e];
          do l = l(n);
          while (l !== null);
        }
        ((ja = null), (wv = !1));
      } catch (u) {
        throw (ja !== null && (ja = ja.slice(e + 1)), ug(vc, Ci), u);
      } finally {
        (Mn(t), (Cv = !1));
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
    $a = 1,
    Ya = '';
  function e1(e) {
    return (po(), (e.flags & tg) !== qe);
  }
  function t1(e) {
    return (po(), ef);
  }
  function n1() {
    var e = Ya,
      t = $a,
      n = t & ~r1(t);
    return n.toString(32) + e;
  }
  function fo(e, t) {
    (po(), (sl[ul++] = ef), (sl[ul++] = Zc), (Zc = e), (ef = t));
  }
  function Ib(e, t, n) {
    (po(), (Ar[Mr++] = $a), (Ar[Mr++] = Ya), (Ar[Mr++] = co), (co = e));
    var i = $a,
      l = Ya,
      u = tf(i) - 1,
      p = i & ~(1 << u),
      v = n + 1,
      y = tf(t) + u;
    if (y > 30) {
      var w = u - (u % 5),
        C = (1 << w) - 1,
        P = (p & C).toString(32),
        N = p >> w,
        j = u - w,
        G = tf(t) + j,
        K = v << j,
        De = K | N,
        He = P + l;
      (($a = (1 << G) | De), (Ya = He));
    } else {
      var ze = v << u,
        bt = ze | p,
        pt = l;
      (($a = (1 << y) | bt), (Ya = pt));
    }
  }
  function Tv(e) {
    po();
    var t = e.return;
    if (t !== null) {
      var n = 1,
        i = 0;
      (fo(e, n), Ib(e, n, i));
    }
  }
  function tf(e) {
    return 32 - hg(e);
  }
  function r1(e) {
    return 1 << (tf(e) - 1);
  }
  function xv(e) {
    for (; e === Zc; )
      ((Zc = sl[--ul]), (sl[ul] = null), (ef = sl[--ul]), (sl[ul] = null));
    for (; e === co; )
      ((co = Ar[--Mr]),
        (Ar[Mr] = null),
        (Ya = Ar[--Mr]),
        (Ar[Mr] = null),
        ($a = Ar[--Mr]),
        (Ar[Mr] = null));
  }
  function a1() {
    return (po(), co !== null ? { id: $a, overflow: Ya } : null);
  }
  function i1(e, t) {
    (po(),
      (Ar[Mr++] = $a),
      (Ar[Mr++] = Ya),
      (Ar[Mr++] = co),
      ($a = t.id),
      (Ya = t.overflow),
      (co = e));
  }
  function po() {
    Pn() ||
      d(
        'Expected to be hydrating. This is a bug in React. Please file an issue.'
      );
  }
  var Nn = null,
    Lr = null,
    Yr = !1,
    vo = !1,
    Ti = null;
  function o1() {
    Yr &&
      d(
        'We should not be hydrating here. This is a bug in React. Please file a bug.'
      );
  }
  function Hb() {
    vo = !0;
  }
  function l1() {
    return vo;
  }
  function s1(e) {
    var t = e.stateNode.containerInfo;
    return ((Lr = RD(t)), (Nn = e), (Yr = !0), (Ti = null), (vo = !1), !0);
  }
  function u1(e, t, n) {
    return (
      (Lr = _D(t)),
      (Nn = e),
      (Yr = !0),
      (Ti = null),
      (vo = !1),
      n !== null && i1(e, n),
      !0
    );
  }
  function Bb(e, t) {
    switch (e.tag) {
      case E: {
        UD(e.stateNode.containerInfo, t);
        break;
      }
      case D: {
        var n = (e.mode & yt) !== je;
        VD(e.type, e.memoizedProps, e.stateNode, t, n);
        break;
      }
      case F: {
        var i = e.memoizedState;
        i.dehydrated !== null && FD(i.dehydrated, t);
        break;
      }
    }
  }
  function jb(e, t) {
    Bb(e, t);
    var n = pM();
    ((n.stateNode = t), (n.return = e));
    var i = e.deletions;
    i === null ? ((e.deletions = [n]), (e.flags |= Ki)) : i.push(n);
  }
  function Rv(e, t) {
    {
      if (vo) return;
      switch (e.tag) {
        case E: {
          var n = e.stateNode.containerInfo;
          switch (t.tag) {
            case D:
              var i = t.type;
              (t.pendingProps, ID(n, i));
              break;
            case O:
              var l = t.pendingProps;
              HD(n, l);
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
                w = t.pendingProps,
                C = (e.mode & yt) !== je;
              $D(u, p, v, y, w, C);
              break;
            }
            case O: {
              var P = t.pendingProps,
                N = (e.mode & yt) !== je;
              YD(u, p, v, P, N);
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
                (t.pendingProps, BD(G, K));
                break;
              case O:
                var De = t.pendingProps;
                jD(G, De);
                break;
            }
          break;
        }
        default:
          return;
      }
    }
  }
  function $b(e, t) {
    ((t.flags = (t.flags & ~Pa) | pn), Rv(e, t));
  }
  function Yb(e, t) {
    switch (e.tag) {
      case D: {
        var n = e.type;
        e.pendingProps;
        var i = SD(t, n);
        return i !== null
          ? ((e.stateNode = i), (Nn = e), (Lr = xD(i)), !0)
          : !1;
      }
      case O: {
        var l = e.pendingProps,
          u = ED(t, l);
        return u !== null ? ((e.stateNode = u), (Nn = e), (Lr = null), !0) : !1;
      }
      case F: {
        var p = wD(t);
        if (p !== null) {
          var v = { dehydrated: p, treeContext: a1(), retryLane: gr };
          e.memoizedState = v;
          var y = vM(p);
          return ((y.return = e), (e.child = y), (Nn = e), (Lr = null), !0);
        }
        return !1;
      }
      default:
        return !1;
    }
  }
  function _v(e) {
    return (e.mode & yt) !== je && (e.flags & Dt) === qe;
  }
  function Dv(e) {
    throw new Error(
      'Hydration failed because the initial UI does not match what was rendered on the server.'
    );
  }
  function Ov(e) {
    if (Yr) {
      var t = Lr;
      if (!t) {
        (_v(e) && (Rv(Nn, e), Dv()), $b(Nn, e), (Yr = !1), (Nn = e));
        return;
      }
      var n = t;
      if (!Yb(e, t)) {
        (_v(e) && (Rv(Nn, e), Dv()), (t = Bs(n)));
        var i = Nn;
        if (!t || !Yb(e, t)) {
          ($b(Nn, e), (Yr = !1), (Nn = e));
          return;
        }
        jb(i, n);
      }
    }
  }
  function c1(e, t, n) {
    var i = e.stateNode,
      l = !vo,
      u = DD(i, e.type, e.memoizedProps, t, n, e, l);
    return ((e.updateQueue = u), u !== null);
  }
  function f1(e) {
    var t = e.stateNode,
      n = e.memoizedProps,
      i = OD(t, n, e);
    if (i) {
      var l = Nn;
      if (l !== null)
        switch (l.tag) {
          case E: {
            var u = l.stateNode.containerInfo,
              p = (l.mode & yt) !== je;
            PD(u, t, n, p);
            break;
          }
          case D: {
            var v = l.type,
              y = l.memoizedProps,
              w = l.stateNode,
              C = (l.mode & yt) !== je;
            zD(v, y, w, t, n, C);
            break;
          }
        }
    }
    return i;
  }
  function d1(e) {
    var t = e.memoizedState,
      n = t !== null ? t.dehydrated : null;
    if (!n)
      throw new Error(
        'Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.'
      );
    AD(n, e);
  }
  function p1(e) {
    var t = e.memoizedState,
      n = t !== null ? t.dehydrated : null;
    if (!n)
      throw new Error(
        'Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.'
      );
    return MD(n);
  }
  function Gb(e) {
    for (
      var t = e.return;
      t !== null && t.tag !== D && t.tag !== E && t.tag !== F;

    )
      t = t.return;
    Nn = t;
  }
  function nf(e) {
    if (e !== Nn) return !1;
    if (!Yr) return (Gb(e), (Yr = !0), !1);
    if (
      e.tag !== E &&
      (e.tag !== D || (ND(e.type) && !cv(e.type, e.memoizedProps)))
    ) {
      var t = Lr;
      if (t)
        if (_v(e)) (Wb(e), Dv());
        else for (; t; ) (jb(e, t), (t = Bs(t)));
    }
    return (
      Gb(e),
      e.tag === F ? (Lr = p1(e)) : (Lr = Nn ? Bs(e.stateNode) : null),
      !0
    );
  }
  function v1() {
    return Yr && Lr !== null;
  }
  function Wb(e) {
    for (var t = Lr; t; ) (Bb(e, t), (t = Bs(t)));
  }
  function cl() {
    ((Nn = null), (Lr = null), (Yr = !1), (vo = !1));
  }
  function qb() {
    Ti !== null && (HE(Ti), (Ti = null));
  }
  function Pn() {
    return Yr;
  }
  function Av(e) {
    Ti === null ? (Ti = [e]) : Ti.push(e);
  }
  var h1 = o.ReactCurrentBatchConfig,
    m1 = null;
  function y1() {
    return h1.transition;
  }
  var Gr = {
    recordUnsafeLifecycleWarnings: function (e, t) {},
    flushPendingUnsafeLifecycleWarnings: function () {},
    recordLegacyContextWarning: function (e, t) {},
    flushLegacyContextWarning: function () {},
    discardPendingWarnings: function () {},
  };
  {
    var g1 = function (e) {
        for (var t = null, n = e; n !== null; )
          (n.mode & on && (t = n), (n = n.return));
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
    ((Gr.recordUnsafeLifecycleWarnings = function (e, t) {
      mo.has(e.type) ||
        (typeof t.componentWillMount == 'function' &&
          t.componentWillMount.__suppressDeprecationWarning !== !0 &&
          Gs.push(e),
        e.mode & on &&
          typeof t.UNSAFE_componentWillMount == 'function' &&
          Ws.push(e),
        typeof t.componentWillReceiveProps == 'function' &&
          t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 &&
          qs.push(e),
        e.mode & on &&
          typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
          Xs.push(e),
        typeof t.componentWillUpdate == 'function' &&
          t.componentWillUpdate.__suppressDeprecationWarning !== !0 &&
          Qs.push(e),
        e.mode & on &&
          typeof t.UNSAFE_componentWillUpdate == 'function' &&
          Ks.push(e));
    }),
      (Gr.flushPendingUnsafeLifecycleWarnings = function () {
        var e = new Set();
        Gs.length > 0 &&
          (Gs.forEach(function (N) {
            (e.add(st(N) || 'Component'), mo.add(N.type));
          }),
          (Gs = []));
        var t = new Set();
        Ws.length > 0 &&
          (Ws.forEach(function (N) {
            (t.add(st(N) || 'Component'), mo.add(N.type));
          }),
          (Ws = []));
        var n = new Set();
        qs.length > 0 &&
          (qs.forEach(function (N) {
            (n.add(st(N) || 'Component'), mo.add(N.type));
          }),
          (qs = []));
        var i = new Set();
        Xs.length > 0 &&
          (Xs.forEach(function (N) {
            (i.add(st(N) || 'Component'), mo.add(N.type));
          }),
          (Xs = []));
        var l = new Set();
        Qs.length > 0 &&
          (Qs.forEach(function (N) {
            (l.add(st(N) || 'Component'), mo.add(N.type));
          }),
          (Qs = []));
        var u = new Set();
        if (
          (Ks.length > 0 &&
            (Ks.forEach(function (N) {
              (u.add(st(N) || 'Component'), mo.add(N.type));
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
        if (i.size > 0) {
          var v = ho(i);
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
          var w = ho(e);
          f(
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
            w
          );
        }
        if (n.size > 0) {
          var C = ho(n);
          f(
            `componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
            C
          );
        }
        if (l.size > 0) {
          var P = ho(l);
          f(
            `componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
            P
          );
        }
      }));
    var rf = new Map(),
      Xb = new Set();
    ((Gr.recordLegacyContextWarning = function (e, t) {
      var n = g1(e);
      if (n === null) {
        d(
          'Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.'
        );
        return;
      }
      if (!Xb.has(e.type)) {
        var i = rf.get(n);
        (e.type.contextTypes != null ||
          e.type.childContextTypes != null ||
          (t !== null && typeof t.getChildContext == 'function')) &&
          (i === void 0 && ((i = []), rf.set(n, i)), i.push(e));
      }
    }),
      (Gr.flushLegacyContextWarning = function () {
        rf.forEach(function (e, t) {
          if (e.length !== 0) {
            var n = e[0],
              i = new Set();
            e.forEach(function (u) {
              (i.add(st(u) || 'Component'), Xb.add(u.type));
            });
            var l = ho(i);
            try {
              (Zt(n),
                d(
                  `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`,
                  l
                ));
            } finally {
              _n();
            }
          }
        });
      }),
      (Gr.discardPendingWarnings = function () {
        ((Gs = []),
          (Ws = []),
          (qs = []),
          (Xs = []),
          (Qs = []),
          (Ks = []),
          (rf = new Map()));
      }));
  }
  var Mv,
    Lv,
    kv,
    Nv,
    Pv,
    Qb = function (e, t) {};
  ((Mv = !1),
    (Lv = !1),
    (kv = {}),
    (Nv = {}),
    (Pv = {}),
    (Qb = function (e, t) {
      if (
        !(e === null || typeof e != 'object') &&
        !(!e._store || e._store.validated || e.key != null)
      ) {
        if (typeof e._store != 'object')
          throw new Error(
            'React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.'
          );
        e._store.validated = !0;
        var n = st(t) || 'Component';
        Nv[n] ||
          ((Nv[n] = !0),
          d(
            'Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'
          ));
      }
    }));
  function b1(e) {
    return e.prototype && e.prototype.isReactComponent;
  }
  function Js(e, t, n) {
    var i = n.ref;
    if (i !== null && typeof i != 'function' && typeof i != 'object') {
      if (
        (e.mode & on || _e) &&
        !(n._owner && n._self && n._owner.stateNode !== n._self) &&
        !(n._owner && n._owner.tag !== g) &&
        !(typeof n.type == 'function' && !b1(n.type)) &&
        n._owner
      ) {
        var l = st(e) || 'Component';
        kv[l] ||
          (d(
            'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
            l,
            i
          ),
          (kv[l] = !0));
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
              i +
              '. This error is likely caused by a bug in React. Please file an issue.'
          );
        var y = p;
        _(i, 'ref');
        var w = '' + i;
        if (
          t !== null &&
          t.ref !== null &&
          typeof t.ref == 'function' &&
          t.ref._stringRef === w
        )
          return t.ref;
        var C = function (P) {
          var N = y.refs;
          P === null ? delete N[w] : (N[w] = P);
        };
        return ((C._stringRef = w), C);
      } else {
        if (typeof i != 'string')
          throw new Error(
            'Expected ref to be a function, a string, an object returned by React.createRef(), or null.'
          );
        if (!n._owner)
          throw new Error(
            'Element ref was specified as a string (' +
              i +
              `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`
          );
      }
    }
    return i;
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
      var t = st(e) || 'Component';
      if (Pv[t]) return;
      ((Pv[t] = !0),
        d(
          'Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.'
        ));
    }
  }
  function Kb(e) {
    var t = e._payload,
      n = e._init;
    return n(t);
  }
  function Jb(e) {
    function t(I, J) {
      if (e) {
        var H = I.deletions;
        H === null ? ((I.deletions = [J]), (I.flags |= Ki)) : H.push(J);
      }
    }
    function n(I, J) {
      if (!e) return null;
      for (var H = J; H !== null; ) (t(I, H), (H = H.sibling));
      return null;
    }
    function i(I, J) {
      for (var H = new Map(), he = J; he !== null; )
        (he.key !== null ? H.set(he.key, he) : H.set(he.index, he),
          (he = he.sibling));
      return H;
    }
    function l(I, J) {
      var H = xo(I, J);
      return ((H.index = 0), (H.sibling = null), H);
    }
    function u(I, J, H) {
      if (((I.index = H), !e)) return ((I.flags |= tg), J);
      var he = I.alternate;
      if (he !== null) {
        var ke = he.index;
        return ke < J ? ((I.flags |= pn), J) : ke;
      } else return ((I.flags |= pn), J);
    }
    function p(I) {
      return (e && I.alternate === null && (I.flags |= pn), I);
    }
    function v(I, J, H, he) {
      if (J === null || J.tag !== O) {
        var ke = Am(H, I.mode, he);
        return ((ke.return = I), ke);
      } else {
        var Oe = l(J, H);
        return ((Oe.return = I), Oe);
      }
    }
    function y(I, J, H, he) {
      var ke = H.type;
      if (ke === ia) return C(I, J, H.props.children, he, H.key);
      if (
        J !== null &&
        (J.elementType === ke ||
          rw(J, H) ||
          (typeof ke == 'object' &&
            ke !== null &&
            ke.$$typeof === We &&
            Kb(ke) === J.type))
      ) {
        var Oe = l(J, H.props);
        return (
          (Oe.ref = Js(I, J, H)),
          (Oe.return = I),
          (Oe._debugSource = H._source),
          (Oe._debugOwner = H._owner),
          Oe
        );
      }
      var Ke = Om(H, I.mode, he);
      return ((Ke.ref = Js(I, J, H)), (Ke.return = I), Ke);
    }
    function w(I, J, H, he) {
      if (
        J === null ||
        J.tag !== T ||
        J.stateNode.containerInfo !== H.containerInfo ||
        J.stateNode.implementation !== H.implementation
      ) {
        var ke = Mm(H, I.mode, he);
        return ((ke.return = I), ke);
      } else {
        var Oe = l(J, H.children || []);
        return ((Oe.return = I), Oe);
      }
    }
    function C(I, J, H, he, ke) {
      if (J === null || J.tag !== x) {
        var Oe = Pi(H, I.mode, he, ke);
        return ((Oe.return = I), Oe);
      } else {
        var Ke = l(J, H);
        return ((Ke.return = I), Ke);
      }
    }
    function P(I, J, H) {
      if ((typeof J == 'string' && J !== '') || typeof J == 'number') {
        var he = Am('' + J, I.mode, H);
        return ((he.return = I), he);
      }
      if (typeof J == 'object' && J !== null) {
        switch (J.$$typeof) {
          case Vr: {
            var ke = Om(J, I.mode, H);
            return ((ke.ref = Js(I, null, J)), (ke.return = I), ke);
          }
          case Ir: {
            var Oe = Mm(J, I.mode, H);
            return ((Oe.return = I), Oe);
          }
          case We: {
            var Ke = J._payload,
              at = J._init;
            return P(I, at(Ke), H);
          }
        }
        if (_t(J) || mr(J)) {
          var zt = Pi(J, I.mode, H, null);
          return ((zt.return = I), zt);
        }
        af(I, J);
      }
      return (typeof J == 'function' && of(I), null);
    }
    function N(I, J, H, he) {
      var ke = J !== null ? J.key : null;
      if ((typeof H == 'string' && H !== '') || typeof H == 'number')
        return ke !== null ? null : v(I, J, '' + H, he);
      if (typeof H == 'object' && H !== null) {
        switch (H.$$typeof) {
          case Vr:
            return H.key === ke ? y(I, J, H, he) : null;
          case Ir:
            return H.key === ke ? w(I, J, H, he) : null;
          case We: {
            var Oe = H._payload,
              Ke = H._init;
            return N(I, J, Ke(Oe), he);
          }
        }
        if (_t(H) || mr(H)) return ke !== null ? null : C(I, J, H, he, null);
        af(I, H);
      }
      return (typeof H == 'function' && of(I), null);
    }
    function j(I, J, H, he, ke) {
      if ((typeof he == 'string' && he !== '') || typeof he == 'number') {
        var Oe = I.get(H) || null;
        return v(J, Oe, '' + he, ke);
      }
      if (typeof he == 'object' && he !== null) {
        switch (he.$$typeof) {
          case Vr: {
            var Ke = I.get(he.key === null ? H : he.key) || null;
            return y(J, Ke, he, ke);
          }
          case Ir: {
            var at = I.get(he.key === null ? H : he.key) || null;
            return w(J, at, he, ke);
          }
          case We:
            var zt = he._payload,
              xt = he._init;
            return j(I, J, H, xt(zt), ke);
        }
        if (_t(he) || mr(he)) {
          var un = I.get(H) || null;
          return C(J, un, he, ke, null);
        }
        af(J, he);
      }
      return (typeof he == 'function' && of(J), null);
    }
    function G(I, J, H) {
      {
        if (typeof I != 'object' || I === null) return J;
        switch (I.$$typeof) {
          case Vr:
          case Ir:
            Qb(I, H);
            var he = I.key;
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
          case We:
            var ke = I._payload,
              Oe = I._init;
            G(Oe(ke), J, H);
            break;
        }
      }
      return J;
    }
    function K(I, J, H, he) {
      for (var ke = null, Oe = 0; Oe < H.length; Oe++) {
        var Ke = H[Oe];
        ke = G(Ke, ke, I);
      }
      for (
        var at = null, zt = null, xt = J, un = 0, Rt = 0, ln = null;
        xt !== null && Rt < H.length;
        Rt++
      ) {
        xt.index > Rt ? ((ln = xt), (xt = null)) : (ln = xt.sibling);
        var Xn = N(I, xt, H[Rt], he);
        if (Xn === null) {
          xt === null && (xt = ln);
          break;
        }
        (e && xt && Xn.alternate === null && t(I, xt),
          (un = u(Xn, un, Rt)),
          zt === null ? (at = Xn) : (zt.sibling = Xn),
          (zt = Xn),
          (xt = ln));
      }
      if (Rt === H.length) {
        if ((n(I, xt), Pn())) {
          var Bn = Rt;
          fo(I, Bn);
        }
        return at;
      }
      if (xt === null) {
        for (; Rt < H.length; Rt++) {
          var xr = P(I, H[Rt], he);
          xr !== null &&
            ((un = u(xr, un, Rt)),
            zt === null ? (at = xr) : (zt.sibling = xr),
            (zt = xr));
        }
        if (Pn()) {
          var rr = Rt;
          fo(I, rr);
        }
        return at;
      }
      for (var ar = i(I, xt); Rt < H.length; Rt++) {
        var Qn = j(ar, I, Rt, H[Rt], he);
        Qn !== null &&
          (e &&
            Qn.alternate !== null &&
            ar.delete(Qn.key === null ? Rt : Qn.key),
          (un = u(Qn, un, Rt)),
          zt === null ? (at = Qn) : (zt.sibling = Qn),
          (zt = Qn));
      }
      if (
        (e &&
          ar.forEach(function (Ol) {
            return t(I, Ol);
          }),
        Pn())
      ) {
        var Ja = Rt;
        fo(I, Ja);
      }
      return at;
    }
    function De(I, J, H, he) {
      var ke = mr(H);
      if (typeof ke != 'function')
        throw new Error(
          'An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.'
        );
      {
        (typeof Symbol == 'function' &&
          H[Symbol.toStringTag] === 'Generator' &&
          (Lv ||
            d(
              'Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers.'
            ),
          (Lv = !0)),
          H.entries === ke &&
            (Mv ||
              d(
                'Using Maps as children is not supported. Use an array of keyed ReactElements instead.'
              ),
            (Mv = !0)));
        var Oe = ke.call(H);
        if (Oe)
          for (var Ke = null, at = Oe.next(); !at.done; at = Oe.next()) {
            var zt = at.value;
            Ke = G(zt, Ke, I);
          }
      }
      var xt = ke.call(H);
      if (xt == null)
        throw new Error('An iterable object provided no iterator.');
      for (
        var un = null,
          Rt = null,
          ln = J,
          Xn = 0,
          Bn = 0,
          xr = null,
          rr = xt.next();
        ln !== null && !rr.done;
        Bn++, rr = xt.next()
      ) {
        ln.index > Bn ? ((xr = ln), (ln = null)) : (xr = ln.sibling);
        var ar = N(I, ln, rr.value, he);
        if (ar === null) {
          ln === null && (ln = xr);
          break;
        }
        (e && ln && ar.alternate === null && t(I, ln),
          (Xn = u(ar, Xn, Bn)),
          Rt === null ? (un = ar) : (Rt.sibling = ar),
          (Rt = ar),
          (ln = xr));
      }
      if (rr.done) {
        if ((n(I, ln), Pn())) {
          var Qn = Bn;
          fo(I, Qn);
        }
        return un;
      }
      if (ln === null) {
        for (; !rr.done; Bn++, rr = xt.next()) {
          var Ja = P(I, rr.value, he);
          Ja !== null &&
            ((Xn = u(Ja, Xn, Bn)),
            Rt === null ? (un = Ja) : (Rt.sibling = Ja),
            (Rt = Ja));
        }
        if (Pn()) {
          var Ol = Bn;
          fo(I, Ol);
        }
        return un;
      }
      for (var Au = i(I, ln); !rr.done; Bn++, rr = xt.next()) {
        var Sa = j(Au, I, Bn, rr.value, he);
        Sa !== null &&
          (e &&
            Sa.alternate !== null &&
            Au.delete(Sa.key === null ? Bn : Sa.key),
          (Xn = u(Sa, Xn, Bn)),
          Rt === null ? (un = Sa) : (Rt.sibling = Sa),
          (Rt = Sa));
      }
      if (
        (e &&
          Au.forEach(function (YM) {
            return t(I, YM);
          }),
        Pn())
      ) {
        var $M = Bn;
        fo(I, $M);
      }
      return un;
    }
    function He(I, J, H, he) {
      if (J !== null && J.tag === O) {
        n(I, J.sibling);
        var ke = l(J, H);
        return ((ke.return = I), ke);
      }
      n(I, J);
      var Oe = Am(H, I.mode, he);
      return ((Oe.return = I), Oe);
    }
    function ze(I, J, H, he) {
      for (var ke = H.key, Oe = J; Oe !== null; ) {
        if (Oe.key === ke) {
          var Ke = H.type;
          if (Ke === ia) {
            if (Oe.tag === x) {
              n(I, Oe.sibling);
              var at = l(Oe, H.props.children);
              return (
                (at.return = I),
                (at._debugSource = H._source),
                (at._debugOwner = H._owner),
                at
              );
            }
          } else if (
            Oe.elementType === Ke ||
            rw(Oe, H) ||
            (typeof Ke == 'object' &&
              Ke !== null &&
              Ke.$$typeof === We &&
              Kb(Ke) === Oe.type)
          ) {
            n(I, Oe.sibling);
            var zt = l(Oe, H.props);
            return (
              (zt.ref = Js(I, Oe, H)),
              (zt.return = I),
              (zt._debugSource = H._source),
              (zt._debugOwner = H._owner),
              zt
            );
          }
          n(I, Oe);
          break;
        } else t(I, Oe);
        Oe = Oe.sibling;
      }
      if (H.type === ia) {
        var xt = Pi(H.props.children, I.mode, he, H.key);
        return ((xt.return = I), xt);
      } else {
        var un = Om(H, I.mode, he);
        return ((un.ref = Js(I, J, H)), (un.return = I), un);
      }
    }
    function bt(I, J, H, he) {
      for (var ke = H.key, Oe = J; Oe !== null; ) {
        if (Oe.key === ke)
          if (
            Oe.tag === T &&
            Oe.stateNode.containerInfo === H.containerInfo &&
            Oe.stateNode.implementation === H.implementation
          ) {
            n(I, Oe.sibling);
            var Ke = l(Oe, H.children || []);
            return ((Ke.return = I), Ke);
          } else {
            n(I, Oe);
            break;
          }
        else t(I, Oe);
        Oe = Oe.sibling;
      }
      var at = Mm(H, I.mode, he);
      return ((at.return = I), at);
    }
    function pt(I, J, H, he) {
      var ke =
        typeof H == 'object' && H !== null && H.type === ia && H.key === null;
      if ((ke && (H = H.props.children), typeof H == 'object' && H !== null)) {
        switch (H.$$typeof) {
          case Vr:
            return p(ze(I, J, H, he));
          case Ir:
            return p(bt(I, J, H, he));
          case We:
            var Oe = H._payload,
              Ke = H._init;
            return pt(I, J, Ke(Oe), he);
        }
        if (_t(H)) return K(I, J, H, he);
        if (mr(H)) return De(I, J, H, he);
        af(I, H);
      }
      return (typeof H == 'string' && H !== '') || typeof H == 'number'
        ? p(He(I, J, '' + H, he))
        : (typeof H == 'function' && of(I), n(I, J));
    }
    return pt;
  }
  var fl = Jb(!0),
    Zb = Jb(!1);
  function S1(e, t) {
    if (e !== null && t.child !== e.child)
      throw new Error('Resuming work not yet implemented.');
    if (t.child !== null) {
      var n = t.child,
        i = xo(n, n.pendingProps);
      for (t.child = i, i.return = t; n.sibling !== null; )
        ((n = n.sibling),
          (i = i.sibling = xo(n, n.pendingProps)),
          (i.return = t));
      i.sibling = null;
    }
  }
  function E1(e, t) {
    for (var n = e.child; n !== null; ) (sM(n, t), (n = n.sibling));
  }
  var zv = Ei(null),
    Uv;
  Uv = {};
  var lf = null,
    dl = null,
    Fv = null,
    sf = !1;
  function uf() {
    ((lf = null), (dl = null), (Fv = null), (sf = !1));
  }
  function eS() {
    sf = !0;
  }
  function tS() {
    sf = !1;
  }
  function nS(e, t, n) {
    (Wn(zv, t._currentValue, e),
      (t._currentValue = n),
      t._currentRenderer !== void 0 &&
        t._currentRenderer !== null &&
        t._currentRenderer !== Uv &&
        d(
          'Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.'
        ),
      (t._currentRenderer = Uv));
  }
  function Vv(e, t) {
    var n = zv.current;
    (Gn(zv, t), (e._currentValue = n));
  }
  function Iv(e, t, n) {
    for (var i = e; i !== null; ) {
      var l = i.alternate;
      if (
        (Qo(i.childLanes, t)
          ? l !== null &&
            !Qo(l.childLanes, t) &&
            (l.childLanes = ut(l.childLanes, t))
          : ((i.childLanes = ut(i.childLanes, t)),
            l !== null && (l.childLanes = ut(l.childLanes, t))),
        i === n)
      )
        break;
      i = i.return;
    }
    i !== n &&
      d(
        'Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.'
      );
  }
  function w1(e, t, n) {
    C1(e, t, n);
  }
  function C1(e, t, n) {
    var i = e.child;
    for (i !== null && (i.return = e); i !== null; ) {
      var l = void 0,
        u = i.dependencies;
      if (u !== null) {
        l = i.child;
        for (var p = u.firstContext; p !== null; ) {
          if (p.context === t) {
            if (i.tag === g) {
              var v = ms(n),
                y = Ga($t, v);
              y.tag = ff;
              var w = i.updateQueue;
              if (w !== null) {
                var C = w.shared,
                  P = C.pending;
                (P === null ? (y.next = y) : ((y.next = P.next), (P.next = y)),
                  (C.pending = y));
              }
            }
            i.lanes = ut(i.lanes, n);
            var N = i.alternate;
            (N !== null && (N.lanes = ut(N.lanes, n)),
              Iv(i.return, n, e),
              (u.lanes = ut(u.lanes, n)));
            break;
          }
          p = p.next;
        }
      } else if (i.tag === R) l = i.type === e.type ? null : i.child;
      else if (i.tag === ee) {
        var j = i.return;
        if (j === null)
          throw new Error(
            'We just came from a parent so we must have had a parent. This is a bug in React.'
          );
        j.lanes = ut(j.lanes, n);
        var G = j.alternate;
        (G !== null && (G.lanes = ut(G.lanes, n)),
          Iv(j, n, e),
          (l = i.sibling));
      } else l = i.child;
      if (l !== null) l.return = i;
      else
        for (l = i; l !== null; ) {
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
      i = l;
    }
  }
  function pl(e, t) {
    ((lf = e), (dl = null), (Fv = null));
    var n = e.dependencies;
    if (n !== null) {
      var i = n.firstContext;
      i !== null && (br(n.lanes, t) && pu(), (n.firstContext = null));
    }
  }
  function vn(e) {
    sf &&
      d(
        'Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().'
      );
    var t = e._currentValue;
    if (Fv !== e) {
      var n = { context: e, memoizedValue: t, next: null };
      if (dl === null) {
        if (lf === null)
          throw new Error(
            'Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().'
          );
        ((dl = n), (lf.dependencies = { lanes: de, firstContext: n }));
      } else dl = dl.next = n;
    }
    return t;
  }
  var yo = null;
  function Hv(e) {
    yo === null ? (yo = [e]) : yo.push(e);
  }
  function T1() {
    if (yo !== null) {
      for (var e = 0; e < yo.length; e++) {
        var t = yo[e],
          n = t.interleaved;
        if (n !== null) {
          t.interleaved = null;
          var i = n.next,
            l = t.pending;
          if (l !== null) {
            var u = l.next;
            ((l.next = i), (n.next = u));
          }
          t.pending = n;
        }
      }
      yo = null;
    }
  }
  function rS(e, t, n, i) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Hv(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      cf(e, i)
    );
  }
  function x1(e, t, n, i) {
    var l = t.interleaved;
    (l === null ? ((n.next = n), Hv(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n));
  }
  function R1(e, t, n, i) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Hv(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      cf(e, i)
    );
  }
  function cr(e, t) {
    return cf(e, t);
  }
  var _1 = cf;
  function cf(e, t) {
    e.lanes = ut(e.lanes, t);
    var n = e.alternate;
    (n !== null && (n.lanes = ut(n.lanes, t)),
      n === null && (e.flags & (pn | Pa)) !== qe && ZE(e));
    for (var i = e, l = e.return; l !== null; )
      ((l.childLanes = ut(l.childLanes, t)),
        (n = l.alternate),
        n !== null
          ? (n.childLanes = ut(n.childLanes, t))
          : (l.flags & (pn | Pa)) !== qe && ZE(e),
        (i = l),
        (l = l.return));
    if (i.tag === E) {
      var u = i.stateNode;
      return u;
    } else return null;
  }
  var aS = 0,
    iS = 1,
    ff = 2,
    Bv = 3,
    df = !1,
    jv,
    pf;
  ((jv = !1), (pf = null));
  function $v(e) {
    var t = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: de },
      effects: null,
    };
    e.updateQueue = t;
  }
  function oS(e, t) {
    var n = t.updateQueue,
      i = e.updateQueue;
    if (n === i) {
      var l = {
        baseState: i.baseState,
        firstBaseUpdate: i.firstBaseUpdate,
        lastBaseUpdate: i.lastBaseUpdate,
        shared: i.shared,
        effects: i.effects,
      };
      t.updateQueue = l;
    }
  }
  function Ga(e, t) {
    var n = {
      eventTime: e,
      lane: t,
      tag: aS,
      payload: null,
      callback: null,
      next: null,
    };
    return n;
  }
  function xi(e, t, n) {
    var i = e.updateQueue;
    if (i === null) return null;
    var l = i.shared;
    if (
      (pf === l &&
        !jv &&
        (d(
          'An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.'
        ),
        (jv = !0)),
      xA())
    ) {
      var u = l.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (l.pending = t),
        _1(e, n)
      );
    } else return R1(e, l, t, n);
  }
  function vf(e, t, n) {
    var i = t.updateQueue;
    if (i !== null) {
      var l = i.shared;
      if (bg(n)) {
        var u = l.lanes;
        u = Eg(u, e.pendingLanes);
        var p = ut(u, n);
        ((l.lanes = p), zp(e, p));
      }
    }
  }
  function Yv(e, t) {
    var n = e.updateQueue,
      i = e.alternate;
    if (i !== null) {
      var l = i.updateQueue;
      if (n === l) {
        var u = null,
          p = null,
          v = n.firstBaseUpdate;
        if (v !== null) {
          var y = v;
          do {
            var w = {
              eventTime: y.eventTime,
              lane: y.lane,
              tag: y.tag,
              payload: y.payload,
              callback: y.callback,
              next: null,
            };
            (p === null ? (u = p = w) : ((p.next = w), (p = w)), (y = y.next));
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
    var C = n.lastBaseUpdate;
    (C === null ? (n.firstBaseUpdate = t) : (C.next = t),
      (n.lastBaseUpdate = t));
  }
  function D1(e, t, n, i, l, u) {
    switch (n.tag) {
      case iS: {
        var p = n.payload;
        if (typeof p == 'function') {
          eS();
          var v = p.call(u, i, l);
          {
            if (e.mode & on) {
              On(!0);
              try {
                p.call(u, i, l);
              } finally {
                On(!1);
              }
            }
            tS();
          }
          return v;
        }
        return p;
      }
      case Bv:
        e.flags = (e.flags & ~Zn) | Dt;
      case aS: {
        var y = n.payload,
          w;
        if (typeof y == 'function') {
          (eS(), (w = y.call(u, i, l)));
          {
            if (e.mode & on) {
              On(!0);
              try {
                y.call(u, i, l);
              } finally {
                On(!1);
              }
            }
            tS();
          }
        } else w = y;
        return w == null ? i : ft({}, i, w);
      }
      case ff:
        return ((df = !0), i);
    }
    return i;
  }
  function hf(e, t, n, i) {
    var l = e.updateQueue;
    ((df = !1), (pf = l.shared));
    var u = l.firstBaseUpdate,
      p = l.lastBaseUpdate,
      v = l.shared.pending;
    if (v !== null) {
      l.shared.pending = null;
      var y = v,
        w = y.next;
      ((y.next = null), p === null ? (u = w) : (p.next = w), (p = y));
      var C = e.alternate;
      if (C !== null) {
        var P = C.updateQueue,
          N = P.lastBaseUpdate;
        N !== p &&
          (N === null ? (P.firstBaseUpdate = w) : (N.next = w),
          (P.lastBaseUpdate = y));
      }
    }
    if (u !== null) {
      var j = l.baseState,
        G = de,
        K = null,
        De = null,
        He = null,
        ze = u;
      do {
        var bt = ze.lane,
          pt = ze.eventTime;
        if (Qo(i, bt)) {
          if (He !== null) {
            var J = {
              eventTime: pt,
              lane: An,
              tag: ze.tag,
              payload: ze.payload,
              callback: ze.callback,
              next: null,
            };
            He = He.next = J;
          }
          j = D1(e, l, ze, j, t, n);
          var H = ze.callback;
          if (H !== null && ze.lane !== An) {
            e.flags |= rp;
            var he = l.effects;
            he === null ? (l.effects = [ze]) : he.push(ze);
          }
        } else {
          var I = {
            eventTime: pt,
            lane: bt,
            tag: ze.tag,
            payload: ze.payload,
            callback: ze.callback,
            next: null,
          };
          (He === null ? ((De = He = I), (K = j)) : (He = He.next = I),
            (G = ut(G, bt)));
        }
        if (((ze = ze.next), ze === null)) {
          if (((v = l.shared.pending), v === null)) break;
          var ke = v,
            Oe = ke.next;
          ((ke.next = null),
            (ze = Oe),
            (l.lastBaseUpdate = ke),
            (l.shared.pending = null));
        }
      } while (!0);
      (He === null && (K = j),
        (l.baseState = K),
        (l.firstBaseUpdate = De),
        (l.lastBaseUpdate = He));
      var Ke = l.shared.interleaved;
      if (Ke !== null) {
        var at = Ke;
        do ((G = ut(G, at.lane)), (at = at.next));
        while (at !== Ke);
      } else u === null && (l.shared.lanes = de);
      (xu(G), (e.lanes = G), (e.memoizedState = j));
    }
    pf = null;
  }
  function O1(e, t) {
    if (typeof e != 'function')
      throw new Error(
        'Invalid argument passed as callback. Expected a function. Instead ' +
          ('received: ' + e)
      );
    e.call(t);
  }
  function lS() {
    df = !1;
  }
  function mf() {
    return df;
  }
  function sS(e, t, n) {
    var i = t.effects;
    if (((t.effects = null), i !== null))
      for (var l = 0; l < i.length; l++) {
        var u = i[l],
          p = u.callback;
        p !== null && ((u.callback = null), O1(p, n));
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
  function uS() {
    var e = gf(yf.current);
    return e;
  }
  function Gv(e, t) {
    (Wn(yf, t, e), Wn(eu, e, e), Wn(Ri, Zs, e));
    var n = G_(t);
    (Gn(Ri, e), Wn(Ri, n, e));
  }
  function vl(e) {
    (Gn(Ri, e), Gn(eu, e), Gn(yf, e));
  }
  function Wv() {
    var e = gf(Ri.current);
    return e;
  }
  function cS(e) {
    gf(yf.current);
    var t = gf(Ri.current),
      n = W_(t, e.type);
    t !== n && (Wn(eu, e, e), Wn(Ri, n, e));
  }
  function qv(e) {
    eu.current === e && (Gn(Ri, e), Gn(eu, e));
  }
  var A1 = 0,
    fS = 1,
    dS = 1,
    tu = 2,
    Wr = Ei(A1);
  function Xv(e, t) {
    return (e & t) !== 0;
  }
  function hl(e) {
    return e & fS;
  }
  function Qv(e, t) {
    return (e & fS) | t;
  }
  function M1(e, t) {
    return e | t;
  }
  function _i(e, t) {
    Wn(Wr, t, e);
  }
  function ml(e) {
    Gn(Wr, e);
  }
  function L1(e, t) {
    var n = e.memoizedState;
    return n !== null ? n.dehydrated !== null : (e.memoizedProps, !0);
  }
  function bf(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === F) {
        var n = t.memoizedState;
        if (n !== null) {
          var i = n.dehydrated;
          if (i === null || Ob(i) || vv(i)) return t;
        }
      } else if (t.tag === ue && t.memoizedProps.revealOrder !== void 0) {
        var l = (t.flags & Dt) !== qe;
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
    gn = 1,
    pa = 2,
    bn = 4,
    zn = 8,
    Kv = [];
  function Jv() {
    for (var e = 0; e < Kv.length; e++) {
      var t = Kv[e];
      t._workInProgressVersionPrimary = null;
    }
    Kv.length = 0;
  }
  function k1(e, t) {
    var n = t._getVersion,
      i = n(t._source);
    e.mutableSourceEagerHydrationData == null
      ? (e.mutableSourceEagerHydrationData = [t, i])
      : e.mutableSourceEagerHydrationData.push(t, i);
  }
  var Le = o.ReactCurrentDispatcher,
    nu = o.ReactCurrentBatchConfig,
    Zv,
    yl;
  Zv = new Set();
  var go = de,
    Pt = null,
    Sn = null,
    En = null,
    Sf = !1,
    ru = !1,
    au = 0,
    N1 = 0,
    P1 = 25,
    oe = null,
    kr = null,
    Di = -1,
    eh = !1;
  function Mt() {
    {
      var e = oe;
      kr === null ? (kr = [e]) : kr.push(e);
    }
  }
  function Te() {
    {
      var e = oe;
      kr !== null && (Di++, kr[Di] !== e && z1(e));
    }
  }
  function gl(e) {
    e != null &&
      !_t(e) &&
      d(
        '%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.',
        oe,
        typeof e
      );
  }
  function z1(e) {
    {
      var t = st(Pt);
      if (!Zv.has(t) && (Zv.add(t), kr !== null)) {
        for (var n = '', i = 30, l = 0; l <= Di; l++) {
          for (
            var u = kr[l], p = l === Di ? e : u, v = l + 1 + '. ' + u;
            v.length < i;

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
  function th(e, t) {
    if (eh) return !1;
    if (t === null)
      return (
        d(
          '%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.',
          oe
        ),
        !1
      );
    e.length !== t.length &&
      d(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        oe,
        '[' + t.join(', ') + ']',
        '[' + e.join(', ') + ']'
      );
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!wr(e[n], t[n])) return !1;
    return !0;
  }
  function bl(e, t, n, i, l, u) {
    ((go = u),
      (Pt = t),
      (kr = e !== null ? e._debugHookTypes : null),
      (Di = -1),
      (eh = e !== null && e.type !== t.type),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = de),
      e !== null && e.memoizedState !== null
        ? (Le.current = NS)
        : kr !== null
          ? (Le.current = kS)
          : (Le.current = LS));
    var p = n(i, l);
    if (ru) {
      var v = 0;
      do {
        if (((ru = !1), (au = 0), v >= P1))
          throw new Error(
            'Too many re-renders. React limits the number of renders to prevent an infinite loop.'
          );
        ((v += 1),
          (eh = !1),
          (Sn = null),
          (En = null),
          (t.updateQueue = null),
          (Di = -1),
          (Le.current = PS),
          (p = n(i, l)));
      } while (ru);
    }
    ((Le.current = kf), (t._debugHookTypes = kr));
    var y = Sn !== null && Sn.next !== null;
    if (
      ((go = de),
      (Pt = null),
      (Sn = null),
      (En = null),
      (oe = null),
      (kr = null),
      (Di = -1),
      e !== null &&
        (e.flags & Ua) !== (t.flags & Ua) &&
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
  function pS(e, t, n) {
    ((t.updateQueue = e.updateQueue),
      (t.mode & ua) !== je
        ? (t.flags &= ~(pc | za | Hr | St))
        : (t.flags &= ~(Hr | St)),
      (e.lanes = Sc(e.lanes, n)));
  }
  function vS() {
    if (((Le.current = kf), Sf)) {
      for (var e = Pt.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      Sf = !1;
    }
    ((go = de),
      (Pt = null),
      (Sn = null),
      (En = null),
      (kr = null),
      (Di = -1),
      (oe = null),
      (_S = !1),
      (ru = !1),
      (au = 0));
  }
  function va() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (En === null ? (Pt.memoizedState = En = e) : (En = En.next = e), En);
  }
  function Nr() {
    var e;
    if (Sn === null) {
      var t = Pt.alternate;
      t !== null ? (e = t.memoizedState) : (e = null);
    } else e = Sn.next;
    var n;
    if ((En === null ? (n = Pt.memoizedState) : (n = En.next), n !== null))
      ((En = n), (n = En.next), (Sn = e));
    else {
      if (e === null)
        throw new Error('Rendered more hooks than during the previous render.');
      Sn = e;
      var i = {
        memoizedState: Sn.memoizedState,
        baseState: Sn.baseState,
        baseQueue: Sn.baseQueue,
        queue: Sn.queue,
        next: null,
      };
      En === null ? (Pt.memoizedState = En = i) : (En = En.next = i);
    }
    return En;
  }
  function hS() {
    return { lastEffect: null, stores: null };
  }
  function nh(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function rh(e, t, n) {
    var i = va(),
      l;
    (n !== void 0 ? (l = n(t)) : (l = t), (i.memoizedState = i.baseState = l));
    var u = {
      pending: null,
      interleaved: null,
      lanes: de,
      dispatch: null,
      lastRenderedReducer: e,
      lastRenderedState: l,
    };
    i.queue = u;
    var p = (u.dispatch = I1.bind(null, Pt, u));
    return [i.memoizedState, p];
  }
  function ah(e, t, n) {
    var i = Nr(),
      l = i.queue;
    if (l === null)
      throw new Error(
        'Should have a queue. This is likely a bug in React. Please file an issue.'
      );
    l.lastRenderedReducer = e;
    var u = Sn,
      p = u.baseQueue,
      v = l.pending;
    if (v !== null) {
      if (p !== null) {
        var y = p.next,
          w = v.next;
        ((p.next = w), (v.next = y));
      }
      (u.baseQueue !== p &&
        d(
          'Internal error: Expected work-in-progress queue to be a clone. This is a bug in React.'
        ),
        (u.baseQueue = p = v),
        (l.pending = null));
    }
    if (p !== null) {
      var C = p.next,
        P = u.baseState,
        N = null,
        j = null,
        G = null,
        K = C;
      do {
        var De = K.lane;
        if (Qo(go, De)) {
          if (G !== null) {
            var ze = {
              lane: An,
              action: K.action,
              hasEagerState: K.hasEagerState,
              eagerState: K.eagerState,
              next: null,
            };
            G = G.next = ze;
          }
          if (K.hasEagerState) P = K.eagerState;
          else {
            var bt = K.action;
            P = e(P, bt);
          }
        } else {
          var He = {
            lane: De,
            action: K.action,
            hasEagerState: K.hasEagerState,
            eagerState: K.eagerState,
            next: null,
          };
          (G === null ? ((j = G = He), (N = P)) : (G = G.next = He),
            (Pt.lanes = ut(Pt.lanes, De)),
            xu(De));
        }
        K = K.next;
      } while (K !== null && K !== C);
      (G === null ? (N = P) : (G.next = j),
        wr(P, i.memoizedState) || pu(),
        (i.memoizedState = P),
        (i.baseState = N),
        (i.baseQueue = G),
        (l.lastRenderedState = P));
    }
    var pt = l.interleaved;
    if (pt !== null) {
      var I = pt;
      do {
        var J = I.lane;
        ((Pt.lanes = ut(Pt.lanes, J)), xu(J), (I = I.next));
      } while (I !== pt);
    } else p === null && (l.lanes = de);
    var H = l.dispatch;
    return [i.memoizedState, H];
  }
  function ih(e, t, n) {
    var i = Nr(),
      l = i.queue;
    if (l === null)
      throw new Error(
        'Should have a queue. This is likely a bug in React. Please file an issue.'
      );
    l.lastRenderedReducer = e;
    var u = l.dispatch,
      p = l.pending,
      v = i.memoizedState;
    if (p !== null) {
      l.pending = null;
      var y = p.next,
        w = y;
      do {
        var C = w.action;
        ((v = e(v, C)), (w = w.next));
      } while (w !== y);
      (wr(v, i.memoizedState) || pu(),
        (i.memoizedState = v),
        i.baseQueue === null && (i.baseState = v),
        (l.lastRenderedState = v));
    }
    return [v, u];
  }
  function Qz(e, t, n) {}
  function Kz(e, t, n) {}
  function oh(e, t, n) {
    var i = Pt,
      l = va(),
      u,
      p = Pn();
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
        wr(u, v) ||
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
      bc(y, go) || mS(i, t, u);
    }
    l.memoizedState = u;
    var w = { value: u, getSnapshot: t };
    return (
      (l.queue = w),
      xf(gS.bind(null, i, w, e), [e]),
      (i.flags |= Hr),
      iu(gn | zn, yS.bind(null, i, w, u, t), void 0, null),
      u
    );
  }
  function Ef(e, t, n) {
    var i = Pt,
      l = Nr(),
      u = t();
    if (!yl) {
      var p = t();
      wr(u, p) ||
        (d(
          'The result of getSnapshot should be cached to avoid an infinite loop'
        ),
        (yl = !0));
    }
    var v = l.memoizedState,
      y = !wr(v, u);
    y && ((l.memoizedState = u), pu());
    var w = l.queue;
    if (
      (lu(gS.bind(null, i, w, e), [e]),
      w.getSnapshot !== t || y || (En !== null && En.memoizedState.tag & gn))
    ) {
      ((i.flags |= Hr), iu(gn | zn, yS.bind(null, i, w, u, t), void 0, null));
      var C = Jf();
      if (C === null)
        throw new Error(
          'Expected a work-in-progress root. This is a bug in React. Please file an issue.'
        );
      bc(C, go) || mS(i, t, u);
    }
    return u;
  }
  function mS(e, t, n) {
    e.flags |= dc;
    var i = { getSnapshot: t, value: n },
      l = Pt.updateQueue;
    if (l === null) ((l = hS()), (Pt.updateQueue = l), (l.stores = [i]));
    else {
      var u = l.stores;
      u === null ? (l.stores = [i]) : u.push(i);
    }
  }
  function yS(e, t, n, i) {
    ((t.value = n), (t.getSnapshot = i), bS(t) && SS(e));
  }
  function gS(e, t, n) {
    var i = function () {
      bS(t) && SS(e);
    };
    return n(i);
  }
  function bS(e) {
    var t = e.getSnapshot,
      n = e.value;
    try {
      var i = t();
      return !wr(n, i);
    } catch {
      return !0;
    }
  }
  function SS(e) {
    var t = cr(e, nt);
    t !== null && xn(t, e, nt, $t);
  }
  function wf(e) {
    var t = va();
    (typeof e == 'function' && (e = e()), (t.memoizedState = t.baseState = e));
    var n = {
      pending: null,
      interleaved: null,
      lanes: de,
      dispatch: null,
      lastRenderedReducer: nh,
      lastRenderedState: e,
    };
    t.queue = n;
    var i = (n.dispatch = H1.bind(null, Pt, n));
    return [t.memoizedState, i];
  }
  function lh(e) {
    return ah(nh);
  }
  function sh(e) {
    return ih(nh);
  }
  function iu(e, t, n, i) {
    var l = { tag: e, create: t, destroy: n, deps: i, next: null },
      u = Pt.updateQueue;
    if (u === null)
      ((u = hS()), (Pt.updateQueue = u), (u.lastEffect = l.next = l));
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
  function uh(e) {
    var t = va();
    {
      var n = { current: e };
      return ((t.memoizedState = n), n);
    }
  }
  function Cf(e) {
    var t = Nr();
    return t.memoizedState;
  }
  function ou(e, t, n, i) {
    var l = va(),
      u = i === void 0 ? null : i;
    ((Pt.flags |= e), (l.memoizedState = iu(gn | t, n, void 0, u)));
  }
  function Tf(e, t, n, i) {
    var l = Nr(),
      u = i === void 0 ? null : i,
      p = void 0;
    if (Sn !== null) {
      var v = Sn.memoizedState;
      if (((p = v.destroy), u !== null)) {
        var y = v.deps;
        if (th(u, y)) {
          l.memoizedState = iu(t, n, p, u);
          return;
        }
      }
    }
    ((Pt.flags |= e), (l.memoizedState = iu(gn | t, n, p, u)));
  }
  function xf(e, t) {
    return (Pt.mode & ua) !== je
      ? ou(pc | Hr | op, zn, e, t)
      : ou(Hr | op, zn, e, t);
  }
  function lu(e, t) {
    return Tf(Hr, zn, e, t);
  }
  function ch(e, t) {
    return ou(St, pa, e, t);
  }
  function Rf(e, t) {
    return Tf(St, pa, e, t);
  }
  function fh(e, t) {
    var n = St;
    return ((n |= eo), (Pt.mode & ua) !== je && (n |= za), ou(n, bn, e, t));
  }
  function _f(e, t) {
    return Tf(St, bn, e, t);
  }
  function ES(e, t) {
    if (typeof t == 'function') {
      var n = t,
        i = e();
      return (
        n(i),
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
  function dh(e, t, n) {
    typeof t != 'function' &&
      d(
        'Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.',
        t !== null ? typeof t : 'null'
      );
    var i = n != null ? n.concat([e]) : null,
      l = St;
    return (
      (l |= eo),
      (Pt.mode & ua) !== je && (l |= za),
      ou(l, bn, ES.bind(null, t, e), i)
    );
  }
  function Df(e, t, n) {
    typeof t != 'function' &&
      d(
        'Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.',
        t !== null ? typeof t : 'null'
      );
    var i = n != null ? n.concat([e]) : null;
    return Tf(St, bn, ES.bind(null, t, e), i);
  }
  function U1(e, t) {}
  var Of = U1;
  function ph(e, t) {
    var n = va(),
      i = t === void 0 ? null : t;
    return ((n.memoizedState = [e, i]), e);
  }
  function Af(e, t) {
    var n = Nr(),
      i = t === void 0 ? null : t,
      l = n.memoizedState;
    if (l !== null && i !== null) {
      var u = l[1];
      if (th(i, u)) return l[0];
    }
    return ((n.memoizedState = [e, i]), e);
  }
  function vh(e, t) {
    var n = va(),
      i = t === void 0 ? null : t,
      l = e();
    return ((n.memoizedState = [l, i]), l);
  }
  function Mf(e, t) {
    var n = Nr(),
      i = t === void 0 ? null : t,
      l = n.memoizedState;
    if (l !== null && i !== null) {
      var u = l[1];
      if (th(i, u)) return l[0];
    }
    var p = e();
    return ((n.memoizedState = [p, i]), p);
  }
  function hh(e) {
    var t = va();
    return ((t.memoizedState = e), e);
  }
  function wS(e) {
    var t = Nr(),
      n = Sn,
      i = n.memoizedState;
    return TS(t, i, e);
  }
  function CS(e) {
    var t = Nr();
    if (Sn === null) return ((t.memoizedState = e), e);
    var n = Sn.memoizedState;
    return TS(t, n, e);
  }
  function TS(e, t, n) {
    var i = !w0(go);
    if (i) {
      if (!wr(n, t)) {
        var l = Sg();
        ((Pt.lanes = ut(Pt.lanes, l)), xu(l), (e.baseState = !0));
      }
      return t;
    } else
      return (
        e.baseState && ((e.baseState = !1), pu()),
        (e.memoizedState = n),
        n
      );
  }
  function F1(e, t, n) {
    var i = jr();
    (Mn(M0(i, Va)), e(!0));
    var l = nu.transition;
    nu.transition = {};
    var u = nu.transition;
    nu.transition._updatedFibers = new Set();
    try {
      (e(!1), t());
    } finally {
      if ((Mn(i), (nu.transition = l), l === null && u._updatedFibers)) {
        var p = u._updatedFibers.size;
        (p > 10 &&
          f(
            'Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.'
          ),
          u._updatedFibers.clear());
      }
    }
  }
  function mh() {
    var e = wf(!1),
      t = e[0],
      n = e[1],
      i = F1.bind(null, n),
      l = va();
    return ((l.memoizedState = i), [t, i]);
  }
  function xS() {
    var e = lh(),
      t = e[0],
      n = Nr(),
      i = n.memoizedState;
    return [t, i];
  }
  function RS() {
    var e = sh(),
      t = e[0],
      n = Nr(),
      i = n.memoizedState;
    return [t, i];
  }
  var _S = !1;
  function V1() {
    return _S;
  }
  function yh() {
    var e = va(),
      t = Jf(),
      n = t.identifierPrefix,
      i;
    if (Pn()) {
      var l = n1();
      i = ':' + n + 'R' + l;
      var u = au++;
      (u > 0 && (i += 'H' + u.toString(32)), (i += ':'));
    } else {
      var p = N1++;
      i = ':' + n + 'r' + p.toString(32) + ':';
    }
    return ((e.memoizedState = i), i);
  }
  function Lf() {
    var e = Nr(),
      t = e.memoizedState;
    return t;
  }
  function I1(e, t, n) {
    typeof arguments[3] == 'function' &&
      d(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      );
    var i = ki(e),
      l = {
        lane: i,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (DS(e)) OS(t, l);
    else {
      var u = rS(e, t, l, i);
      if (u !== null) {
        var p = nr();
        (xn(u, e, i, p), AS(u, t, i));
      }
    }
    MS(e, i);
  }
  function H1(e, t, n) {
    typeof arguments[3] == 'function' &&
      d(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      );
    var i = ki(e),
      l = {
        lane: i,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (DS(e)) OS(t, l);
    else {
      var u = e.alternate;
      if (e.lanes === de && (u === null || u.lanes === de)) {
        var p = t.lastRenderedReducer;
        if (p !== null) {
          var v;
          ((v = Le.current), (Le.current = qr));
          try {
            var y = t.lastRenderedState,
              w = p(y, n);
            if (((l.hasEagerState = !0), (l.eagerState = w), wr(w, y))) {
              x1(e, t, l, i);
              return;
            }
          } catch {
          } finally {
            Le.current = v;
          }
        }
      }
      var C = rS(e, t, l, i);
      if (C !== null) {
        var P = nr();
        (xn(C, e, i, P), AS(C, t, i));
      }
    }
    MS(e, i);
  }
  function DS(e) {
    var t = e.alternate;
    return e === Pt || (t !== null && t === Pt);
  }
  function OS(e, t) {
    ru = Sf = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function AS(e, t, n) {
    if (bg(n)) {
      var i = t.lanes;
      i = Eg(i, e.pendingLanes);
      var l = ut(i, n);
      ((t.lanes = l), zp(e, l));
    }
  }
  function MS(e, t, n) {
    fp(e, t);
  }
  var kf = {
      readContext: vn,
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
      unstable_isNewReconciler: be,
    },
    LS = null,
    kS = null,
    NS = null,
    PS = null,
    ha = null,
    qr = null,
    Nf = null;
  {
    var gh = function () {
        d(
          'Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().'
        );
      },
      rt = function () {
        d(
          'Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks'
        );
      };
    ((LS = {
      readContext: function (e) {
        return vn(e);
      },
      useCallback: function (e, t) {
        return ((oe = 'useCallback'), Mt(), gl(t), ph(e, t));
      },
      useContext: function (e) {
        return ((oe = 'useContext'), Mt(), vn(e));
      },
      useEffect: function (e, t) {
        return ((oe = 'useEffect'), Mt(), gl(t), xf(e, t));
      },
      useImperativeHandle: function (e, t, n) {
        return ((oe = 'useImperativeHandle'), Mt(), gl(n), dh(e, t, n));
      },
      useInsertionEffect: function (e, t) {
        return ((oe = 'useInsertionEffect'), Mt(), gl(t), ch(e, t));
      },
      useLayoutEffect: function (e, t) {
        return ((oe = 'useLayoutEffect'), Mt(), gl(t), fh(e, t));
      },
      useMemo: function (e, t) {
        ((oe = 'useMemo'), Mt(), gl(t));
        var n = Le.current;
        Le.current = ha;
        try {
          return vh(e, t);
        } finally {
          Le.current = n;
        }
      },
      useReducer: function (e, t, n) {
        ((oe = 'useReducer'), Mt());
        var i = Le.current;
        Le.current = ha;
        try {
          return rh(e, t, n);
        } finally {
          Le.current = i;
        }
      },
      useRef: function (e) {
        return ((oe = 'useRef'), Mt(), uh(e));
      },
      useState: function (e) {
        ((oe = 'useState'), Mt());
        var t = Le.current;
        Le.current = ha;
        try {
          return wf(e);
        } finally {
          Le.current = t;
        }
      },
      useDebugValue: function (e, t) {
        return ((oe = 'useDebugValue'), Mt(), void 0);
      },
      useDeferredValue: function (e) {
        return ((oe = 'useDeferredValue'), Mt(), hh(e));
      },
      useTransition: function () {
        return ((oe = 'useTransition'), Mt(), mh());
      },
      useMutableSource: function (e, t, n) {
        return ((oe = 'useMutableSource'), Mt(), void 0);
      },
      useSyncExternalStore: function (e, t, n) {
        return ((oe = 'useSyncExternalStore'), Mt(), oh(e, t, n));
      },
      useId: function () {
        return ((oe = 'useId'), Mt(), yh());
      },
      unstable_isNewReconciler: be,
    }),
      (kS = {
        readContext: function (e) {
          return vn(e);
        },
        useCallback: function (e, t) {
          return ((oe = 'useCallback'), Te(), ph(e, t));
        },
        useContext: function (e) {
          return ((oe = 'useContext'), Te(), vn(e));
        },
        useEffect: function (e, t) {
          return ((oe = 'useEffect'), Te(), xf(e, t));
        },
        useImperativeHandle: function (e, t, n) {
          return ((oe = 'useImperativeHandle'), Te(), dh(e, t, n));
        },
        useInsertionEffect: function (e, t) {
          return ((oe = 'useInsertionEffect'), Te(), ch(e, t));
        },
        useLayoutEffect: function (e, t) {
          return ((oe = 'useLayoutEffect'), Te(), fh(e, t));
        },
        useMemo: function (e, t) {
          ((oe = 'useMemo'), Te());
          var n = Le.current;
          Le.current = ha;
          try {
            return vh(e, t);
          } finally {
            Le.current = n;
          }
        },
        useReducer: function (e, t, n) {
          ((oe = 'useReducer'), Te());
          var i = Le.current;
          Le.current = ha;
          try {
            return rh(e, t, n);
          } finally {
            Le.current = i;
          }
        },
        useRef: function (e) {
          return ((oe = 'useRef'), Te(), uh(e));
        },
        useState: function (e) {
          ((oe = 'useState'), Te());
          var t = Le.current;
          Le.current = ha;
          try {
            return wf(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function (e, t) {
          return ((oe = 'useDebugValue'), Te(), void 0);
        },
        useDeferredValue: function (e) {
          return ((oe = 'useDeferredValue'), Te(), hh(e));
        },
        useTransition: function () {
          return ((oe = 'useTransition'), Te(), mh());
        },
        useMutableSource: function (e, t, n) {
          return ((oe = 'useMutableSource'), Te(), void 0);
        },
        useSyncExternalStore: function (e, t, n) {
          return ((oe = 'useSyncExternalStore'), Te(), oh(e, t, n));
        },
        useId: function () {
          return ((oe = 'useId'), Te(), yh());
        },
        unstable_isNewReconciler: be,
      }),
      (NS = {
        readContext: function (e) {
          return vn(e);
        },
        useCallback: function (e, t) {
          return ((oe = 'useCallback'), Te(), Af(e, t));
        },
        useContext: function (e) {
          return ((oe = 'useContext'), Te(), vn(e));
        },
        useEffect: function (e, t) {
          return ((oe = 'useEffect'), Te(), lu(e, t));
        },
        useImperativeHandle: function (e, t, n) {
          return ((oe = 'useImperativeHandle'), Te(), Df(e, t, n));
        },
        useInsertionEffect: function (e, t) {
          return ((oe = 'useInsertionEffect'), Te(), Rf(e, t));
        },
        useLayoutEffect: function (e, t) {
          return ((oe = 'useLayoutEffect'), Te(), _f(e, t));
        },
        useMemo: function (e, t) {
          ((oe = 'useMemo'), Te());
          var n = Le.current;
          Le.current = qr;
          try {
            return Mf(e, t);
          } finally {
            Le.current = n;
          }
        },
        useReducer: function (e, t, n) {
          ((oe = 'useReducer'), Te());
          var i = Le.current;
          Le.current = qr;
          try {
            return ah(e, t, n);
          } finally {
            Le.current = i;
          }
        },
        useRef: function (e) {
          return ((oe = 'useRef'), Te(), Cf());
        },
        useState: function (e) {
          ((oe = 'useState'), Te());
          var t = Le.current;
          Le.current = qr;
          try {
            return lh(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function (e, t) {
          return ((oe = 'useDebugValue'), Te(), Of());
        },
        useDeferredValue: function (e) {
          return ((oe = 'useDeferredValue'), Te(), wS(e));
        },
        useTransition: function () {
          return ((oe = 'useTransition'), Te(), xS());
        },
        useMutableSource: function (e, t, n) {
          return ((oe = 'useMutableSource'), Te(), void 0);
        },
        useSyncExternalStore: function (e, t, n) {
          return ((oe = 'useSyncExternalStore'), Te(), Ef(e, t));
        },
        useId: function () {
          return ((oe = 'useId'), Te(), Lf());
        },
        unstable_isNewReconciler: be,
      }),
      (PS = {
        readContext: function (e) {
          return vn(e);
        },
        useCallback: function (e, t) {
          return ((oe = 'useCallback'), Te(), Af(e, t));
        },
        useContext: function (e) {
          return ((oe = 'useContext'), Te(), vn(e));
        },
        useEffect: function (e, t) {
          return ((oe = 'useEffect'), Te(), lu(e, t));
        },
        useImperativeHandle: function (e, t, n) {
          return ((oe = 'useImperativeHandle'), Te(), Df(e, t, n));
        },
        useInsertionEffect: function (e, t) {
          return ((oe = 'useInsertionEffect'), Te(), Rf(e, t));
        },
        useLayoutEffect: function (e, t) {
          return ((oe = 'useLayoutEffect'), Te(), _f(e, t));
        },
        useMemo: function (e, t) {
          ((oe = 'useMemo'), Te());
          var n = Le.current;
          Le.current = Nf;
          try {
            return Mf(e, t);
          } finally {
            Le.current = n;
          }
        },
        useReducer: function (e, t, n) {
          ((oe = 'useReducer'), Te());
          var i = Le.current;
          Le.current = Nf;
          try {
            return ih(e, t, n);
          } finally {
            Le.current = i;
          }
        },
        useRef: function (e) {
          return ((oe = 'useRef'), Te(), Cf());
        },
        useState: function (e) {
          ((oe = 'useState'), Te());
          var t = Le.current;
          Le.current = Nf;
          try {
            return sh(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function (e, t) {
          return ((oe = 'useDebugValue'), Te(), Of());
        },
        useDeferredValue: function (e) {
          return ((oe = 'useDeferredValue'), Te(), CS(e));
        },
        useTransition: function () {
          return ((oe = 'useTransition'), Te(), RS());
        },
        useMutableSource: function (e, t, n) {
          return ((oe = 'useMutableSource'), Te(), void 0);
        },
        useSyncExternalStore: function (e, t, n) {
          return ((oe = 'useSyncExternalStore'), Te(), Ef(e, t));
        },
        useId: function () {
          return ((oe = 'useId'), Te(), Lf());
        },
        unstable_isNewReconciler: be,
      }),
      (ha = {
        readContext: function (e) {
          return (gh(), vn(e));
        },
        useCallback: function (e, t) {
          return ((oe = 'useCallback'), rt(), Mt(), ph(e, t));
        },
        useContext: function (e) {
          return ((oe = 'useContext'), rt(), Mt(), vn(e));
        },
        useEffect: function (e, t) {
          return ((oe = 'useEffect'), rt(), Mt(), xf(e, t));
        },
        useImperativeHandle: function (e, t, n) {
          return ((oe = 'useImperativeHandle'), rt(), Mt(), dh(e, t, n));
        },
        useInsertionEffect: function (e, t) {
          return ((oe = 'useInsertionEffect'), rt(), Mt(), ch(e, t));
        },
        useLayoutEffect: function (e, t) {
          return ((oe = 'useLayoutEffect'), rt(), Mt(), fh(e, t));
        },
        useMemo: function (e, t) {
          ((oe = 'useMemo'), rt(), Mt());
          var n = Le.current;
          Le.current = ha;
          try {
            return vh(e, t);
          } finally {
            Le.current = n;
          }
        },
        useReducer: function (e, t, n) {
          ((oe = 'useReducer'), rt(), Mt());
          var i = Le.current;
          Le.current = ha;
          try {
            return rh(e, t, n);
          } finally {
            Le.current = i;
          }
        },
        useRef: function (e) {
          return ((oe = 'useRef'), rt(), Mt(), uh(e));
        },
        useState: function (e) {
          ((oe = 'useState'), rt(), Mt());
          var t = Le.current;
          Le.current = ha;
          try {
            return wf(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function (e, t) {
          return ((oe = 'useDebugValue'), rt(), Mt(), void 0);
        },
        useDeferredValue: function (e) {
          return ((oe = 'useDeferredValue'), rt(), Mt(), hh(e));
        },
        useTransition: function () {
          return ((oe = 'useTransition'), rt(), Mt(), mh());
        },
        useMutableSource: function (e, t, n) {
          return ((oe = 'useMutableSource'), rt(), Mt(), void 0);
        },
        useSyncExternalStore: function (e, t, n) {
          return ((oe = 'useSyncExternalStore'), rt(), Mt(), oh(e, t, n));
        },
        useId: function () {
          return ((oe = 'useId'), rt(), Mt(), yh());
        },
        unstable_isNewReconciler: be,
      }),
      (qr = {
        readContext: function (e) {
          return (gh(), vn(e));
        },
        useCallback: function (e, t) {
          return ((oe = 'useCallback'), rt(), Te(), Af(e, t));
        },
        useContext: function (e) {
          return ((oe = 'useContext'), rt(), Te(), vn(e));
        },
        useEffect: function (e, t) {
          return ((oe = 'useEffect'), rt(), Te(), lu(e, t));
        },
        useImperativeHandle: function (e, t, n) {
          return ((oe = 'useImperativeHandle'), rt(), Te(), Df(e, t, n));
        },
        useInsertionEffect: function (e, t) {
          return ((oe = 'useInsertionEffect'), rt(), Te(), Rf(e, t));
        },
        useLayoutEffect: function (e, t) {
          return ((oe = 'useLayoutEffect'), rt(), Te(), _f(e, t));
        },
        useMemo: function (e, t) {
          ((oe = 'useMemo'), rt(), Te());
          var n = Le.current;
          Le.current = qr;
          try {
            return Mf(e, t);
          } finally {
            Le.current = n;
          }
        },
        useReducer: function (e, t, n) {
          ((oe = 'useReducer'), rt(), Te());
          var i = Le.current;
          Le.current = qr;
          try {
            return ah(e, t, n);
          } finally {
            Le.current = i;
          }
        },
        useRef: function (e) {
          return ((oe = 'useRef'), rt(), Te(), Cf());
        },
        useState: function (e) {
          ((oe = 'useState'), rt(), Te());
          var t = Le.current;
          Le.current = qr;
          try {
            return lh(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function (e, t) {
          return ((oe = 'useDebugValue'), rt(), Te(), Of());
        },
        useDeferredValue: function (e) {
          return ((oe = 'useDeferredValue'), rt(), Te(), wS(e));
        },
        useTransition: function () {
          return ((oe = 'useTransition'), rt(), Te(), xS());
        },
        useMutableSource: function (e, t, n) {
          return ((oe = 'useMutableSource'), rt(), Te(), void 0);
        },
        useSyncExternalStore: function (e, t, n) {
          return ((oe = 'useSyncExternalStore'), rt(), Te(), Ef(e, t));
        },
        useId: function () {
          return ((oe = 'useId'), rt(), Te(), Lf());
        },
        unstable_isNewReconciler: be,
      }),
      (Nf = {
        readContext: function (e) {
          return (gh(), vn(e));
        },
        useCallback: function (e, t) {
          return ((oe = 'useCallback'), rt(), Te(), Af(e, t));
        },
        useContext: function (e) {
          return ((oe = 'useContext'), rt(), Te(), vn(e));
        },
        useEffect: function (e, t) {
          return ((oe = 'useEffect'), rt(), Te(), lu(e, t));
        },
        useImperativeHandle: function (e, t, n) {
          return ((oe = 'useImperativeHandle'), rt(), Te(), Df(e, t, n));
        },
        useInsertionEffect: function (e, t) {
          return ((oe = 'useInsertionEffect'), rt(), Te(), Rf(e, t));
        },
        useLayoutEffect: function (e, t) {
          return ((oe = 'useLayoutEffect'), rt(), Te(), _f(e, t));
        },
        useMemo: function (e, t) {
          ((oe = 'useMemo'), rt(), Te());
          var n = Le.current;
          Le.current = qr;
          try {
            return Mf(e, t);
          } finally {
            Le.current = n;
          }
        },
        useReducer: function (e, t, n) {
          ((oe = 'useReducer'), rt(), Te());
          var i = Le.current;
          Le.current = qr;
          try {
            return ih(e, t, n);
          } finally {
            Le.current = i;
          }
        },
        useRef: function (e) {
          return ((oe = 'useRef'), rt(), Te(), Cf());
        },
        useState: function (e) {
          ((oe = 'useState'), rt(), Te());
          var t = Le.current;
          Le.current = qr;
          try {
            return sh(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function (e, t) {
          return ((oe = 'useDebugValue'), rt(), Te(), Of());
        },
        useDeferredValue: function (e) {
          return ((oe = 'useDeferredValue'), rt(), Te(), CS(e));
        },
        useTransition: function () {
          return ((oe = 'useTransition'), rt(), Te(), RS());
        },
        useMutableSource: function (e, t, n) {
          return ((oe = 'useMutableSource'), rt(), Te(), void 0);
        },
        useSyncExternalStore: function (e, t, n) {
          return ((oe = 'useSyncExternalStore'), rt(), Te(), Ef(e, t));
        },
        useId: function () {
          return ((oe = 'useId'), rt(), Te(), Lf());
        },
        unstable_isNewReconciler: be,
      }));
  }
  var Oi = a.unstable_now,
    zS = 0,
    Pf = -1,
    su = -1,
    zf = -1,
    bh = !1,
    Uf = !1;
  function US() {
    return bh;
  }
  function B1() {
    Uf = !0;
  }
  function j1() {
    ((bh = !1), (Uf = !1));
  }
  function $1() {
    ((bh = Uf), (Uf = !1));
  }
  function FS() {
    return zS;
  }
  function VS() {
    zS = Oi();
  }
  function Sh(e) {
    ((su = Oi()), e.actualStartTime < 0 && (e.actualStartTime = Oi()));
  }
  function IS(e) {
    su = -1;
  }
  function Ff(e, t) {
    if (su >= 0) {
      var n = Oi() - su;
      ((e.actualDuration += n), t && (e.selfBaseDuration = n), (su = -1));
    }
  }
  function ma(e) {
    if (Pf >= 0) {
      var t = Oi() - Pf;
      Pf = -1;
      for (var n = e.return; n !== null; ) {
        switch (n.tag) {
          case E:
            var i = n.stateNode;
            i.effectDuration += t;
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
  function Eh(e) {
    if (zf >= 0) {
      var t = Oi() - zf;
      zf = -1;
      for (var n = e.return; n !== null; ) {
        switch (n.tag) {
          case E:
            var i = n.stateNode;
            i !== null && (i.passiveEffectDuration += t);
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
  function ya() {
    Pf = Oi();
  }
  function wh() {
    zf = Oi();
  }
  function Ch(e) {
    for (var t = e.child; t; )
      ((e.actualDuration += t.actualDuration), (t = t.sibling));
  }
  function Xr(e, t) {
    if (e && e.defaultProps) {
      var n = ft({}, t),
        i = e.defaultProps;
      for (var l in i) n[l] === void 0 && (n[l] = i[l]);
      return n;
    }
    return t;
  }
  var Th = {},
    xh,
    Rh,
    _h,
    Dh,
    Oh,
    HS,
    Vf,
    Ah,
    Mh,
    Lh,
    uu;
  {
    ((xh = new Set()),
      (Rh = new Set()),
      (_h = new Set()),
      (Dh = new Set()),
      (Ah = new Set()),
      (Oh = new Set()),
      (Mh = new Set()),
      (Lh = new Set()),
      (uu = new Set()));
    var BS = new Set();
    ((Vf = function (e, t) {
      if (!(e === null || typeof e == 'function')) {
        var n = t + '_' + e;
        BS.has(n) ||
          (BS.add(n),
          d(
            '%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.',
            t,
            e
          ));
      }
    }),
      (HS = function (e, t) {
        if (t === void 0) {
          var n = wt(e) || 'Component';
          Oh.has(n) ||
            (Oh.add(n),
            d(
              '%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.',
              n
            ));
        }
      }),
      Object.defineProperty(Th, '_processChildContext', {
        enumerable: !1,
        value: function () {
          throw new Error(
            "_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal)."
          );
        },
      }),
      Object.freeze(Th));
  }
  function kh(e, t, n, i) {
    var l = e.memoizedState,
      u = n(i, l);
    {
      if (e.mode & on) {
        On(!0);
        try {
          u = n(i, l);
        } finally {
          On(!1);
        }
      }
      HS(t, u);
    }
    var p = u == null ? l : ft({}, l, u);
    if (((e.memoizedState = p), e.lanes === de)) {
      var v = e.updateQueue;
      v.baseState = p;
    }
  }
  var Nh = {
    isMounted: Px,
    enqueueSetState: function (e, t, n) {
      var i = Bo(e),
        l = nr(),
        u = ki(i),
        p = Ga(l, u);
      ((p.payload = t), n != null && (Vf(n, 'setState'), (p.callback = n)));
      var v = xi(i, p, u);
      (v !== null && (xn(v, i, u, l), vf(v, i, u)), fp(i, u));
    },
    enqueueReplaceState: function (e, t, n) {
      var i = Bo(e),
        l = nr(),
        u = ki(i),
        p = Ga(l, u);
      ((p.tag = iS),
        (p.payload = t),
        n != null && (Vf(n, 'replaceState'), (p.callback = n)));
      var v = xi(i, p, u);
      (v !== null && (xn(v, i, u, l), vf(v, i, u)), fp(i, u));
    },
    enqueueForceUpdate: function (e, t) {
      var n = Bo(e),
        i = nr(),
        l = ki(n),
        u = Ga(i, l);
      ((u.tag = ff), t != null && (Vf(t, 'forceUpdate'), (u.callback = t)));
      var p = xi(n, u, l);
      (p !== null && (xn(p, n, l, i), vf(p, n, l)), d0(n, l));
    },
  };
  function jS(e, t, n, i, l, u, p) {
    var v = e.stateNode;
    if (typeof v.shouldComponentUpdate == 'function') {
      var y = v.shouldComponentUpdate(i, u, p);
      {
        if (e.mode & on) {
          On(!0);
          try {
            y = v.shouldComponentUpdate(i, u, p);
          } finally {
            On(!1);
          }
        }
        y === void 0 &&
          d(
            '%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.',
            wt(t) || 'Component'
          );
      }
      return y;
    }
    return t.prototype && t.prototype.isPureReactComponent
      ? !Ms(n, i) || !Ms(l, u)
      : !0;
  }
  function Y1(e, t, n) {
    var i = e.stateNode;
    {
      var l = wt(t) || 'Component',
        u = i.render;
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
        i.getInitialState &&
          !i.getInitialState.isReactClassApproved &&
          !i.state &&
          d(
            'getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?',
            l
          ),
        i.getDefaultProps &&
          !i.getDefaultProps.isReactClassApproved &&
          d(
            'getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.',
            l
          ),
        i.propTypes &&
          d(
            'propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.',
            l
          ),
        i.contextType &&
          d(
            'contextType was defined as an instance property on %s. Use a static property to define contextType instead.',
            l
          ),
        t.childContextTypes &&
          !uu.has(t) &&
          (e.mode & on) === je &&
          (uu.add(t),
          d(
            `%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`,
            l
          )),
        t.contextTypes &&
          !uu.has(t) &&
          (e.mode & on) === je &&
          (uu.add(t),
          d(
            `%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`,
            l
          )),
        i.contextTypes &&
          d(
            'contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.',
            l
          ),
        t.contextType &&
          t.contextTypes &&
          !Mh.has(t) &&
          (Mh.add(t),
          d(
            '%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.',
            l
          )),
        typeof i.componentShouldUpdate == 'function' &&
          d(
            '%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.',
            l
          ),
        t.prototype &&
          t.prototype.isPureReactComponent &&
          typeof i.shouldComponentUpdate < 'u' &&
          d(
            '%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.',
            wt(t) || 'A pure component'
          ),
        typeof i.componentDidUnmount == 'function' &&
          d(
            '%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?',
            l
          ),
        typeof i.componentDidReceiveProps == 'function' &&
          d(
            '%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().',
            l
          ),
        typeof i.componentWillRecieveProps == 'function' &&
          d(
            '%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
            l
          ),
        typeof i.UNSAFE_componentWillRecieveProps == 'function' &&
          d(
            '%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?',
            l
          ));
      var p = i.props !== n;
      (i.props !== void 0 &&
        p &&
        d(
          "%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
          l,
          l
        ),
        i.defaultProps &&
          d(
            'Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.',
            l,
            l
          ),
        typeof i.getSnapshotBeforeUpdate == 'function' &&
          typeof i.componentDidUpdate != 'function' &&
          !_h.has(t) &&
          (_h.add(t),
          d(
            '%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.',
            wt(t)
          )),
        typeof i.getDerivedStateFromProps == 'function' &&
          d(
            '%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.',
            l
          ),
        typeof i.getDerivedStateFromError == 'function' &&
          d(
            '%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.',
            l
          ),
        typeof t.getSnapshotBeforeUpdate == 'function' &&
          d(
            '%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.',
            l
          ));
      var v = i.state;
      (v &&
        (typeof v != 'object' || _t(v)) &&
        d('%s.state: must be set to an object or null', l),
        typeof i.getChildContext == 'function' &&
          typeof t.childContextTypes != 'object' &&
          d(
            '%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().',
            l
          ));
    }
  }
  function $S(e, t) {
    ((t.updater = Nh),
      (e.stateNode = t),
      Ax(t, e),
      (t._reactInternalInstance = Th));
  }
  function YS(e, t, n) {
    var i = !1,
      l = Cr,
      u = Cr,
      p = t.contextType;
    if ('contextType' in t) {
      var v =
        p === null ||
        (p !== void 0 && p.$$typeof === fe && p._context === void 0);
      if (!v && !Lh.has(t)) {
        Lh.add(t);
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
            wt(t) || 'Component',
            y
          ));
      }
    }
    if (typeof p == 'object' && p !== null) u = vn(p);
    else {
      l = ol(e, t, !0);
      var w = t.contextTypes;
      ((i = w != null), (u = i ? ll(e, l) : Cr));
    }
    var C = new t(n, u);
    if (e.mode & on) {
      On(!0);
      try {
        C = new t(n, u);
      } finally {
        On(!1);
      }
    }
    var P = (e.memoizedState =
      C.state !== null && C.state !== void 0 ? C.state : null);
    $S(e, C);
    {
      if (typeof t.getDerivedStateFromProps == 'function' && P === null) {
        var N = wt(t) || 'Component';
        Rh.has(N) ||
          (Rh.add(N),
          d(
            '`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.',
            N,
            C.state === null ? 'null' : 'undefined',
            N
          ));
      }
      if (
        typeof t.getDerivedStateFromProps == 'function' ||
        typeof C.getSnapshotBeforeUpdate == 'function'
      ) {
        var j = null,
          G = null,
          K = null;
        if (
          (typeof C.componentWillMount == 'function' &&
          C.componentWillMount.__suppressDeprecationWarning !== !0
            ? (j = 'componentWillMount')
            : typeof C.UNSAFE_componentWillMount == 'function' &&
              (j = 'UNSAFE_componentWillMount'),
          typeof C.componentWillReceiveProps == 'function' &&
          C.componentWillReceiveProps.__suppressDeprecationWarning !== !0
            ? (G = 'componentWillReceiveProps')
            : typeof C.UNSAFE_componentWillReceiveProps == 'function' &&
              (G = 'UNSAFE_componentWillReceiveProps'),
          typeof C.componentWillUpdate == 'function' &&
          C.componentWillUpdate.__suppressDeprecationWarning !== !0
            ? (K = 'componentWillUpdate')
            : typeof C.UNSAFE_componentWillUpdate == 'function' &&
              (K = 'UNSAFE_componentWillUpdate'),
          j !== null || G !== null || K !== null)
        ) {
          var De = wt(t) || 'Component',
            He =
              typeof t.getDerivedStateFromProps == 'function'
                ? 'getDerivedStateFromProps()'
                : 'getSnapshotBeforeUpdate()';
          Dh.has(De) ||
            (Dh.add(De),
            d(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`,
              De,
              He,
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
    return (i && Nb(e, l, u), C);
  }
  function G1(e, t) {
    var n = t.state;
    (typeof t.componentWillMount == 'function' && t.componentWillMount(),
      typeof t.UNSAFE_componentWillMount == 'function' &&
        t.UNSAFE_componentWillMount(),
      n !== t.state &&
        (d(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          st(e) || 'Component'
        ),
        Nh.enqueueReplaceState(t, t.state, null)));
  }
  function GS(e, t, n, i) {
    var l = t.state;
    if (
      (typeof t.componentWillReceiveProps == 'function' &&
        t.componentWillReceiveProps(n, i),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, i),
      t.state !== l)
    ) {
      {
        var u = st(e) || 'Component';
        xh.has(u) ||
          (xh.add(u),
          d(
            "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
            u
          ));
      }
      Nh.enqueueReplaceState(t, t.state, null);
    }
  }
  function Ph(e, t, n, i) {
    Y1(e, t, n);
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), $v(e));
    var u = t.contextType;
    if (typeof u == 'object' && u !== null) l.context = vn(u);
    else {
      var p = ol(e, t, !0);
      l.context = ll(e, p);
    }
    {
      if (l.state === n) {
        var v = wt(t) || 'Component';
        Ah.has(v) ||
          (Ah.add(v),
          d(
            "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
            v
          ));
      }
      (e.mode & on && Gr.recordLegacyContextWarning(e, l),
        Gr.recordUnsafeLifecycleWarnings(e, l));
    }
    l.state = e.memoizedState;
    var y = t.getDerivedStateFromProps;
    if (
      (typeof y == 'function' && (kh(e, t, y, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps != 'function' &&
        typeof l.getSnapshotBeforeUpdate != 'function' &&
        (typeof l.UNSAFE_componentWillMount == 'function' ||
          typeof l.componentWillMount == 'function') &&
        (G1(e, l), hf(e, n, l, i), (l.state = e.memoizedState)),
      typeof l.componentDidMount == 'function')
    ) {
      var w = St;
      ((w |= eo), (e.mode & ua) !== je && (w |= za), (e.flags |= w));
    }
  }
  function W1(e, t, n, i) {
    var l = e.stateNode,
      u = e.memoizedProps;
    l.props = u;
    var p = l.context,
      v = t.contextType,
      y = Cr;
    if (typeof v == 'object' && v !== null) y = vn(v);
    else {
      var w = ol(e, t, !0);
      y = ll(e, w);
    }
    var C = t.getDerivedStateFromProps,
      P =
        typeof C == 'function' ||
        typeof l.getSnapshotBeforeUpdate == 'function';
    (!P &&
      (typeof l.UNSAFE_componentWillReceiveProps == 'function' ||
        typeof l.componentWillReceiveProps == 'function') &&
      (u !== n || p !== y) &&
      GS(e, l, n, y),
      lS());
    var N = e.memoizedState,
      j = (l.state = N);
    if (
      (hf(e, n, l, i),
      (j = e.memoizedState),
      u === n && N === j && !Xc() && !mf())
    ) {
      if (typeof l.componentDidMount == 'function') {
        var G = St;
        ((G |= eo), (e.mode & ua) !== je && (G |= za), (e.flags |= G));
      }
      return !1;
    }
    typeof C == 'function' && (kh(e, t, C, n), (j = e.memoizedState));
    var K = mf() || jS(e, t, u, n, N, j, y);
    if (K) {
      if (
        (!P &&
          (typeof l.UNSAFE_componentWillMount == 'function' ||
            typeof l.componentWillMount == 'function') &&
          (typeof l.componentWillMount == 'function' && l.componentWillMount(),
          typeof l.UNSAFE_componentWillMount == 'function' &&
            l.UNSAFE_componentWillMount()),
        typeof l.componentDidMount == 'function')
      ) {
        var De = St;
        ((De |= eo), (e.mode & ua) !== je && (De |= za), (e.flags |= De));
      }
    } else {
      if (typeof l.componentDidMount == 'function') {
        var He = St;
        ((He |= eo), (e.mode & ua) !== je && (He |= za), (e.flags |= He));
      }
      ((e.memoizedProps = n), (e.memoizedState = j));
    }
    return ((l.props = n), (l.state = j), (l.context = y), K);
  }
  function q1(e, t, n, i, l) {
    var u = t.stateNode;
    oS(e, t);
    var p = t.memoizedProps,
      v = t.type === t.elementType ? p : Xr(t.type, p);
    u.props = v;
    var y = t.pendingProps,
      w = u.context,
      C = n.contextType,
      P = Cr;
    if (typeof C == 'object' && C !== null) P = vn(C);
    else {
      var N = ol(t, n, !0);
      P = ll(t, N);
    }
    var j = n.getDerivedStateFromProps,
      G =
        typeof j == 'function' ||
        typeof u.getSnapshotBeforeUpdate == 'function';
    (!G &&
      (typeof u.UNSAFE_componentWillReceiveProps == 'function' ||
        typeof u.componentWillReceiveProps == 'function') &&
      (p !== y || w !== P) &&
      GS(t, u, i, P),
      lS());
    var K = t.memoizedState,
      De = (u.state = K);
    if (
      (hf(t, i, u, l),
      (De = t.memoizedState),
      p === y && K === De && !Xc() && !mf() && !xe)
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
    typeof j == 'function' && (kh(t, n, j, i), (De = t.memoizedState));
    var He = mf() || jS(t, n, v, i, K, De, P) || xe;
    return (
      He
        ? (!G &&
            (typeof u.UNSAFE_componentWillUpdate == 'function' ||
              typeof u.componentWillUpdate == 'function') &&
            (typeof u.componentWillUpdate == 'function' &&
              u.componentWillUpdate(i, De, P),
            typeof u.UNSAFE_componentWillUpdate == 'function' &&
              u.UNSAFE_componentWillUpdate(i, De, P)),
          typeof u.componentDidUpdate == 'function' && (t.flags |= St),
          typeof u.getSnapshotBeforeUpdate == 'function' && (t.flags |= Ji))
        : (typeof u.componentDidUpdate == 'function' &&
            (p !== e.memoizedProps || K !== e.memoizedState) &&
            (t.flags |= St),
          typeof u.getSnapshotBeforeUpdate == 'function' &&
            (p !== e.memoizedProps || K !== e.memoizedState) &&
            (t.flags |= Ji),
          (t.memoizedProps = i),
          (t.memoizedState = De)),
      (u.props = i),
      (u.state = De),
      (u.context = P),
      He
    );
  }
  function bo(e, t) {
    return { value: e, source: t, stack: Ql(t), digest: null };
  }
  function zh(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function X1(e, t) {
    return !0;
  }
  function Uh(e, t) {
    try {
      var n = X1(e, t);
      if (n === !1) return;
      var i = t.value,
        l = t.source,
        u = t.stack,
        p = u !== null ? u : '';
      if (i != null && i._suppressLogging) {
        if (e.tag === g) return;
        console.error(i);
      }
      var v = l ? st(l) : null,
        y = v
          ? 'The above error occurred in the <' + v + '> component:'
          : 'The above error occurred in one of your React components:',
        w;
      if (e.tag === E)
        w = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
      else {
        var C = st(e) || 'Anonymous';
        w =
          'React will try to recreate this component tree from scratch ' +
          ('using the error boundary you provided, ' + C + '.');
      }
      var P =
        y +
        `
` +
        p +
        `

` +
        ('' + w);
      console.error(P);
    } catch (N) {
      setTimeout(function () {
        throw N;
      });
    }
  }
  var Q1 = typeof WeakMap == 'function' ? WeakMap : Map;
  function WS(e, t, n) {
    var i = Ga($t, n);
    ((i.tag = Bv), (i.payload = { element: null }));
    var l = t.value;
    return (
      (i.callback = function () {
        (BA(l), Uh(e, t));
      }),
      i
    );
  }
  function Fh(e, t, n) {
    var i = Ga($t, n);
    i.tag = Bv;
    var l = e.type.getDerivedStateFromError;
    if (typeof l == 'function') {
      var u = t.value;
      ((i.payload = function () {
        return l(u);
      }),
        (i.callback = function () {
          (aw(e), Uh(e, t));
        }));
    }
    var p = e.stateNode;
    return (
      p !== null &&
        typeof p.componentDidCatch == 'function' &&
        (i.callback = function () {
          (aw(e), Uh(e, t), typeof l != 'function' && IA(this));
          var y = t.value,
            w = t.stack;
          (this.componentDidCatch(y, { componentStack: w !== null ? w : '' }),
            typeof l != 'function' &&
              (br(e.lanes, nt) ||
                d(
                  '%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.',
                  st(e) || 'Unknown'
                )));
        }),
      i
    );
  }
  function qS(e, t, n) {
    var i = e.pingCache,
      l;
    if (
      (i === null
        ? ((i = e.pingCache = new Q1()), (l = new Set()), i.set(t, l))
        : ((l = i.get(t)), l === void 0 && ((l = new Set()), i.set(t, l))),
      !l.has(n))
    ) {
      l.add(n);
      var u = jA.bind(null, e, t, n);
      (Br && Ru(e, n), t.then(u, u));
    }
  }
  function K1(e, t, n, i) {
    var l = e.updateQueue;
    if (l === null) {
      var u = new Set();
      (u.add(n), (e.updateQueue = u));
    } else l.add(n);
  }
  function J1(e, t) {
    var n = e.tag;
    if ((e.mode & yt) === je && (n === m || n === z || n === ae)) {
      var i = e.alternate;
      i
        ? ((e.updateQueue = i.updateQueue),
          (e.memoizedState = i.memoizedState),
          (e.lanes = i.lanes))
        : ((e.updateQueue = null), (e.memoizedState = null));
    }
  }
  function XS(e) {
    var t = e;
    do {
      if (t.tag === F && L1(t)) return t;
      t = t.return;
    } while (t !== null);
    return null;
  }
  function QS(e, t, n, i, l) {
    if ((e.mode & yt) === je) {
      if (e === t) e.flags |= Zn;
      else {
        if (
          ((e.flags |= Dt),
          (n.flags |= ap),
          (n.flags &= ~(Mx | ss)),
          n.tag === g)
        ) {
          var u = n.alternate;
          if (u === null) n.tag = ne;
          else {
            var p = Ga($t, nt);
            ((p.tag = ff), xi(n, p, nt));
          }
        }
        n.lanes = ut(n.lanes, nt);
      }
      return e;
    }
    return ((e.flags |= Zn), (e.lanes = l), e);
  }
  function Z1(e, t, n, i, l) {
    if (
      ((n.flags |= ss),
      Br && Ru(e, l),
      i !== null && typeof i == 'object' && typeof i.then == 'function')
    ) {
      var u = i;
      (J1(n), Pn() && n.mode & yt && Hb());
      var p = XS(t);
      if (p !== null) {
        ((p.flags &= ~Na),
          QS(p, t, n, e, l),
          p.mode & yt && qS(e, u, l),
          K1(p, e, u));
        return;
      } else {
        if (!E0(l)) {
          (qS(e, u, l), ym());
          return;
        }
        var v = new Error(
          'A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.'
        );
        i = v;
      }
    } else if (Pn() && n.mode & yt) {
      Hb();
      var y = XS(t);
      if (y !== null) {
        ((y.flags & Zn) === qe && (y.flags |= Na),
          QS(y, t, n, e, l),
          Av(bo(i, n)));
        return;
      }
    }
    ((i = bo(i, n)), LA(i));
    var w = t;
    do {
      switch (w.tag) {
        case E: {
          var C = i;
          w.flags |= Zn;
          var P = ms(l);
          w.lanes = ut(w.lanes, P);
          var N = WS(w, C, P);
          Yv(w, N);
          return;
        }
        case g:
          var j = i,
            G = w.type,
            K = w.stateNode;
          if (
            (w.flags & Dt) === qe &&
            (typeof G.getDerivedStateFromError == 'function' ||
              (K !== null &&
                typeof K.componentDidCatch == 'function' &&
                !XE(K)))
          ) {
            w.flags |= Zn;
            var De = ms(l);
            w.lanes = ut(w.lanes, De);
            var He = Fh(w, j, De);
            Yv(w, He);
            return;
          }
          break;
      }
      w = w.return;
    } while (w !== null);
  }
  function eO() {
    return null;
  }
  var cu = o.ReactCurrentOwner,
    Qr = !1,
    Vh,
    fu,
    Ih,
    Hh,
    Bh,
    So,
    jh,
    If,
    du;
  ((Vh = {}),
    (fu = {}),
    (Ih = {}),
    (Hh = {}),
    (Bh = {}),
    (So = !1),
    (jh = {}),
    (If = {}),
    (du = {}));
  function er(e, t, n, i) {
    e === null
      ? (t.child = Zb(t, null, n, i))
      : (t.child = fl(t, e.child, n, i));
  }
  function tO(e, t, n, i) {
    ((t.child = fl(t, e.child, null, i)), (t.child = fl(t, null, n, i)));
  }
  function KS(e, t, n, i, l) {
    if (t.type !== t.elementType) {
      var u = n.propTypes;
      u && $r(u, i, 'prop', wt(n));
    }
    var p = n.render,
      v = t.ref,
      y,
      w;
    (pl(t, l), cs(t));
    {
      if (
        ((cu.current = t),
        yr(!0),
        (y = bl(e, t, p, i, v, l)),
        (w = Sl()),
        t.mode & on)
      ) {
        On(!0);
        try {
          ((y = bl(e, t, p, i, v, l)), (w = Sl()));
        } finally {
          On(!1);
        }
      }
      yr(!1);
    }
    return (
      Go(),
      e !== null && !Qr
        ? (pS(e, t, l), Wa(e, t, l))
        : (Pn() && w && Tv(t), (t.flags |= jo), er(e, t, y, l), t.child)
    );
  }
  function JS(e, t, n, i, l) {
    if (e === null) {
      var u = n.type;
      if (oM(u) && n.compare === null && n.defaultProps === void 0) {
        var p = u;
        return (
          (p = Dl(u)),
          (t.tag = ae),
          (t.type = p),
          Gh(t, u),
          ZS(e, t, p, i, l)
        );
      }
      {
        var v = u.propTypes;
        if ((v && $r(v, i, 'prop', wt(u)), n.defaultProps !== void 0)) {
          var y = wt(u) || 'Unknown';
          du[y] ||
            (d(
              '%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.',
              y
            ),
            (du[y] = !0));
        }
      }
      var w = Dm(n.type, null, i, t, t.mode, l);
      return ((w.ref = t.ref), (w.return = t), (t.child = w), w);
    }
    {
      var C = n.type,
        P = C.propTypes;
      P && $r(P, i, 'prop', wt(C));
    }
    var N = e.child,
      j = Jh(e, l);
    if (!j) {
      var G = N.memoizedProps,
        K = n.compare;
      if (((K = K !== null ? K : Ms), K(G, i) && e.ref === t.ref))
        return Wa(e, t, l);
    }
    t.flags |= jo;
    var De = xo(N, i);
    return ((De.ref = t.ref), (De.return = t), (t.child = De), De);
  }
  function ZS(e, t, n, i, l) {
    if (t.type !== t.elementType) {
      var u = t.elementType;
      if (u.$$typeof === We) {
        var p = u,
          v = p._payload,
          y = p._init;
        try {
          u = y(v);
        } catch {
          u = null;
        }
        var w = u && u.propTypes;
        w && $r(w, i, 'prop', wt(u));
      }
    }
    if (e !== null) {
      var C = e.memoizedProps;
      if (Ms(C, i) && e.ref === t.ref && t.type === e.type)
        if (((Qr = !1), (t.pendingProps = i = C), Jh(e, l)))
          (e.flags & ap) !== qe && (Qr = !0);
        else return ((t.lanes = e.lanes), Wa(e, t, l));
    }
    return $h(e, t, n, i, l);
  }
  function eE(e, t, n) {
    var i = t.pendingProps,
      l = i.children,
      u = e !== null ? e.memoizedState : null;
    if (i.mode === 'hidden' || Ye)
      if ((t.mode & yt) === je) {
        var p = { baseLanes: de, cachePool: null, transitions: null };
        ((t.memoizedState = p), Zf(t, n));
      } else if (br(n, gr)) {
        var P = { baseLanes: de, cachePool: null, transitions: null };
        t.memoizedState = P;
        var N = u !== null ? u.baseLanes : n;
        Zf(t, N);
      } else {
        var v = null,
          y;
        if (u !== null) {
          var w = u.baseLanes;
          y = ut(w, n);
        } else y = n;
        t.lanes = t.childLanes = gr;
        var C = { baseLanes: y, cachePool: v, transitions: null };
        return ((t.memoizedState = C), (t.updateQueue = null), Zf(t, y), null);
      }
    else {
      var j;
      (u !== null
        ? ((j = ut(u.baseLanes, n)), (t.memoizedState = null))
        : (j = n),
        Zf(t, j));
    }
    return (er(e, t, l, n), t.child);
  }
  function nO(e, t, n) {
    var i = t.pendingProps;
    return (er(e, t, i, n), t.child);
  }
  function rO(e, t, n) {
    var i = t.pendingProps.children;
    return (er(e, t, i, n), t.child);
  }
  function aO(e, t, n) {
    {
      t.flags |= St;
      {
        var i = t.stateNode;
        ((i.effectDuration = 0), (i.passiveEffectDuration = 0));
      }
    }
    var l = t.pendingProps,
      u = l.children;
    return (er(e, t, u, n), t.child);
  }
  function tE(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= pi), (t.flags |= ip));
  }
  function $h(e, t, n, i, l) {
    if (t.type !== t.elementType) {
      var u = n.propTypes;
      u && $r(u, i, 'prop', wt(n));
    }
    var p;
    {
      var v = ol(t, n, !0);
      p = ll(t, v);
    }
    var y, w;
    (pl(t, l), cs(t));
    {
      if (
        ((cu.current = t),
        yr(!0),
        (y = bl(e, t, n, i, p, l)),
        (w = Sl()),
        t.mode & on)
      ) {
        On(!0);
        try {
          ((y = bl(e, t, n, i, p, l)), (w = Sl()));
        } finally {
          On(!1);
        }
      }
      yr(!1);
    }
    return (
      Go(),
      e !== null && !Qr
        ? (pS(e, t, l), Wa(e, t, l))
        : (Pn() && w && Tv(t), (t.flags |= jo), er(e, t, y, l), t.child)
    );
  }
  function nE(e, t, n, i, l) {
    {
      switch (EM(t)) {
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
          var w = new Error('Simulated error coming from DevTools'),
            C = ms(l);
          t.lanes = ut(t.lanes, C);
          var P = Fh(t, bo(w, t), C);
          Yv(t, P);
          break;
        }
      }
      if (t.type !== t.elementType) {
        var N = n.propTypes;
        N && $r(N, i, 'prop', wt(n));
      }
    }
    var j;
    (da(n) ? ((j = !0), Kc(t)) : (j = !1), pl(t, l));
    var G = t.stateNode,
      K;
    G === null
      ? (Bf(e, t), YS(t, n, i), Ph(t, n, i, l), (K = !0))
      : e === null
        ? (K = W1(t, n, i, l))
        : (K = q1(e, t, n, i, l));
    var De = Yh(e, t, n, K, j, l);
    {
      var He = t.stateNode;
      K &&
        He.props !== i &&
        (So ||
          d(
            'It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.',
            st(t) || 'a component'
          ),
        (So = !0));
    }
    return De;
  }
  function Yh(e, t, n, i, l, u) {
    tE(e, t);
    var p = (t.flags & Dt) !== qe;
    if (!i && !p) return (l && Ub(t, n, !1), Wa(e, t, u));
    var v = t.stateNode;
    cu.current = t;
    var y;
    if (p && typeof n.getDerivedStateFromError != 'function')
      ((y = null), IS());
    else {
      cs(t);
      {
        if ((yr(!0), (y = v.render()), t.mode & on)) {
          On(!0);
          try {
            v.render();
          } finally {
            On(!1);
          }
        }
        yr(!1);
      }
      Go();
    }
    return (
      (t.flags |= jo),
      e !== null && p ? tO(e, t, y, u) : er(e, t, y, u),
      (t.memoizedState = v.state),
      l && Ub(t, n, !0),
      t.child
    );
  }
  function rE(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Pb(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Pb(e, t.context, !1),
      Gv(e, t.containerInfo));
  }
  function iO(e, t, n) {
    if ((rE(t), e === null))
      throw new Error('Should have a current fiber. This is a bug in React.');
    var i = t.pendingProps,
      l = t.memoizedState,
      u = l.element;
    (oS(e, t), hf(t, i, null, n));
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
        w = t.updateQueue;
      if (((w.baseState = y), (t.memoizedState = y), t.flags & Na)) {
        var C = bo(
          new Error(
            'There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering.'
          ),
          t
        );
        return aE(e, t, v, n, C);
      } else if (v !== u) {
        var P = bo(
          new Error(
            'This root received an early update, before anything was able hydrate. Switched the entire root to client rendering.'
          ),
          t
        );
        return aE(e, t, v, n, P);
      } else {
        s1(t);
        var N = Zb(t, null, v, n);
        t.child = N;
        for (var j = N; j; )
          ((j.flags = (j.flags & ~pn) | Pa), (j = j.sibling));
      }
    } else {
      if ((cl(), v === u)) return Wa(e, t, n);
      er(e, t, v, n);
    }
    return t.child;
  }
  function aE(e, t, n, i, l) {
    return (cl(), Av(l), (t.flags |= Na), er(e, t, n, i), t.child);
  }
  function oO(e, t, n) {
    (cS(t), e === null && Ov(t));
    var i = t.type,
      l = t.pendingProps,
      u = e !== null ? e.memoizedProps : null,
      p = l.children,
      v = cv(i, l);
    return (
      v ? (p = null) : u !== null && cv(i, u) && (t.flags |= ls),
      tE(e, t),
      er(e, t, p, n),
      t.child
    );
  }
  function lO(e, t) {
    return (e === null && Ov(t), null);
  }
  function sO(e, t, n, i) {
    Bf(e, t);
    var l = t.pendingProps,
      u = n,
      p = u._payload,
      v = u._init,
      y = v(p);
    t.type = y;
    var w = (t.tag = lM(y)),
      C = Xr(y, l),
      P;
    switch (w) {
      case m:
        return (Gh(t, y), (t.type = y = Dl(y)), (P = $h(null, t, y, C, i)), P);
      case g:
        return ((t.type = y = wm(y)), (P = nE(null, t, y, C, i)), P);
      case z:
        return ((t.type = y = Cm(y)), (P = KS(null, t, y, C, i)), P);
      case te: {
        if (t.type !== t.elementType) {
          var N = y.propTypes;
          N && $r(N, C, 'prop', wt(y));
        }
        return ((P = JS(null, t, y, Xr(y.type, C), i)), P);
      }
    }
    var j = '';
    throw (
      y !== null &&
        typeof y == 'object' &&
        y.$$typeof === We &&
        (j = ' Did you wrap a component in React.lazy() more than once?'),
      new Error(
        'Element type is invalid. Received a promise that resolves to: ' +
          y +
          '. ' +
          ('Lazy element type must resolve to a class or function.' + j)
      )
    );
  }
  function uO(e, t, n, i, l) {
    (Bf(e, t), (t.tag = g));
    var u;
    return (
      da(n) ? ((u = !0), Kc(t)) : (u = !1),
      pl(t, l),
      YS(t, n, i),
      Ph(t, n, i, l),
      Yh(null, t, n, !0, u, l)
    );
  }
  function cO(e, t, n, i) {
    Bf(e, t);
    var l = t.pendingProps,
      u;
    {
      var p = ol(t, n, !1);
      u = ll(t, p);
    }
    pl(t, i);
    var v, y;
    cs(t);
    {
      if (n.prototype && typeof n.prototype.render == 'function') {
        var w = wt(n) || 'Unknown';
        Vh[w] ||
          (d(
            "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
            w,
            w
          ),
          (Vh[w] = !0));
      }
      (t.mode & on && Gr.recordLegacyContextWarning(t, null),
        yr(!0),
        (cu.current = t),
        (v = bl(null, t, n, l, u, i)),
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
      var C = wt(n) || 'Unknown';
      fu[C] ||
        (d(
          "The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",
          C,
          C,
          C
        ),
        (fu[C] = !0));
    }
    if (
      typeof v == 'object' &&
      v !== null &&
      typeof v.render == 'function' &&
      v.$$typeof === void 0
    ) {
      {
        var P = wt(n) || 'Unknown';
        fu[P] ||
          (d(
            "The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",
            P,
            P,
            P
          ),
          (fu[P] = !0));
      }
      ((t.tag = g), (t.memoizedState = null), (t.updateQueue = null));
      var N = !1;
      return (
        da(n) ? ((N = !0), Kc(t)) : (N = !1),
        (t.memoizedState =
          v.state !== null && v.state !== void 0 ? v.state : null),
        $v(t),
        $S(t, v),
        Ph(t, n, l, i),
        Yh(null, t, n, !0, N, i)
      );
    } else {
      if (((t.tag = m), t.mode & on)) {
        On(!0);
        try {
          ((v = bl(null, t, n, l, u, i)), (y = Sl()));
        } finally {
          On(!1);
        }
      }
      return (Pn() && y && Tv(t), er(null, t, v, i), Gh(t, n), t.child);
    }
  }
  function Gh(e, t) {
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
          i = ui();
        i &&
          (n +=
            `

Check the render method of \`` +
            i +
            '`.');
        var l = i || '',
          u = e._debugSource;
        (u && (l = u.fileName + ':' + u.lineNumber),
          Bh[l] ||
            ((Bh[l] = !0),
            d(
              'Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s',
              n
            )));
      }
      if (t.defaultProps !== void 0) {
        var p = wt(t) || 'Unknown';
        du[p] ||
          (d(
            '%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.',
            p
          ),
          (du[p] = !0));
      }
      if (typeof t.getDerivedStateFromProps == 'function') {
        var v = wt(t) || 'Unknown';
        Hh[v] ||
          (d(
            '%s: Function components do not support getDerivedStateFromProps.',
            v
          ),
          (Hh[v] = !0));
      }
      if (typeof t.contextType == 'object' && t.contextType !== null) {
        var y = wt(t) || 'Unknown';
        Ih[y] ||
          (d('%s: Function components do not support contextType.', y),
          (Ih[y] = !0));
      }
    }
  }
  var Wh = { dehydrated: null, treeContext: null, retryLane: An };
  function qh(e) {
    return { baseLanes: e, cachePool: eO(), transitions: null };
  }
  function fO(e, t) {
    var n = null;
    return {
      baseLanes: ut(e.baseLanes, t),
      cachePool: n,
      transitions: e.transitions,
    };
  }
  function dO(e, t, n, i) {
    if (t !== null) {
      var l = t.memoizedState;
      if (l === null) return !1;
    }
    return Xv(e, tu);
  }
  function pO(e, t) {
    return Sc(e.childLanes, t);
  }
  function iE(e, t, n) {
    var i = t.pendingProps;
    wM(t) && (t.flags |= Dt);
    var l = Wr.current,
      u = !1,
      p = (t.flags & Dt) !== qe;
    if (
      (p || dO(l, e)
        ? ((u = !0), (t.flags &= ~Dt))
        : (e === null || e.memoizedState !== null) && (l = M1(l, dS)),
      (l = hl(l)),
      _i(t, l),
      e === null)
    ) {
      Ov(t);
      var v = t.memoizedState;
      if (v !== null) {
        var y = v.dehydrated;
        if (y !== null) return gO(t, y);
      }
      var w = i.children,
        C = i.fallback;
      if (u) {
        var P = vO(t, w, C, n),
          N = t.child;
        return ((N.memoizedState = qh(n)), (t.memoizedState = Wh), P);
      } else return Xh(t, w);
    } else {
      var j = e.memoizedState;
      if (j !== null) {
        var G = j.dehydrated;
        if (G !== null) return bO(e, t, p, i, G, j, n);
      }
      if (u) {
        var K = i.fallback,
          De = i.children,
          He = mO(e, t, De, K, n),
          ze = t.child,
          bt = e.child.memoizedState;
        return (
          (ze.memoizedState = bt === null ? qh(n) : fO(bt, n)),
          (ze.childLanes = pO(e, n)),
          (t.memoizedState = Wh),
          He
        );
      } else {
        var pt = i.children,
          I = hO(e, t, pt, n);
        return ((t.memoizedState = null), I);
      }
    }
  }
  function Xh(e, t, n) {
    var i = e.mode,
      l = { mode: 'visible', children: t },
      u = Qh(l, i);
    return ((u.return = e), (e.child = u), u);
  }
  function vO(e, t, n, i) {
    var l = e.mode,
      u = e.child,
      p = { mode: 'hidden', children: t },
      v,
      y;
    return (
      (l & yt) === je && u !== null
        ? ((v = u),
          (v.childLanes = de),
          (v.pendingProps = p),
          e.mode & Nt &&
            ((v.actualDuration = 0),
            (v.actualStartTime = -1),
            (v.selfBaseDuration = 0),
            (v.treeBaseDuration = 0)),
          (y = Pi(n, l, i, null)))
        : ((v = Qh(p, l)), (y = Pi(n, l, i, null))),
      (v.return = e),
      (y.return = e),
      (v.sibling = y),
      (e.child = v),
      y
    );
  }
  function Qh(e, t, n) {
    return ow(e, t, de, null);
  }
  function oE(e, t) {
    return xo(e, t);
  }
  function hO(e, t, n, i) {
    var l = e.child,
      u = l.sibling,
      p = oE(l, { mode: 'visible', children: n });
    if (
      ((t.mode & yt) === je && (p.lanes = i),
      (p.return = t),
      (p.sibling = null),
      u !== null)
    ) {
      var v = t.deletions;
      v === null ? ((t.deletions = [u]), (t.flags |= Ki)) : v.push(u);
    }
    return ((t.child = p), p);
  }
  function mO(e, t, n, i, l) {
    var u = t.mode,
      p = e.child,
      v = p.sibling,
      y = { mode: 'hidden', children: n },
      w;
    if ((u & yt) === je && t.child !== p) {
      var C = t.child;
      ((w = C),
        (w.childLanes = de),
        (w.pendingProps = y),
        t.mode & Nt &&
          ((w.actualDuration = 0),
          (w.actualStartTime = -1),
          (w.selfBaseDuration = p.selfBaseDuration),
          (w.treeBaseDuration = p.treeBaseDuration)),
        (t.deletions = null));
    } else ((w = oE(p, y)), (w.subtreeFlags = p.subtreeFlags & Ua));
    var P;
    return (
      v !== null ? (P = xo(v, i)) : ((P = Pi(i, u, l, null)), (P.flags |= pn)),
      (P.return = t),
      (w.return = t),
      (w.sibling = P),
      (t.child = w),
      P
    );
  }
  function Hf(e, t, n, i) {
    (i !== null && Av(i), fl(t, e.child, null, n));
    var l = t.pendingProps,
      u = l.children,
      p = Xh(t, u);
    return ((p.flags |= pn), (t.memoizedState = null), p);
  }
  function yO(e, t, n, i, l) {
    var u = t.mode,
      p = { mode: 'visible', children: n },
      v = Qh(p, u),
      y = Pi(i, u, l, null);
    return (
      (y.flags |= pn),
      (v.return = t),
      (y.return = t),
      (v.sibling = y),
      (t.child = v),
      (t.mode & yt) !== je && fl(t, e.child, null, l),
      y
    );
  }
  function gO(e, t, n) {
    return (
      (e.mode & yt) === je
        ? (d(
            'Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components.'
          ),
          (e.lanes = nt))
        : vv(t)
          ? (e.lanes = ro)
          : (e.lanes = gr),
      null
    );
  }
  function bO(e, t, n, i, l, u, p) {
    if (n)
      if (t.flags & Na) {
        t.flags &= ~Na;
        var I = zh(
          new Error(
            'There was an error while hydrating this Suspense boundary. Switched to client rendering.'
          )
        );
        return Hf(e, t, p, I);
      } else {
        if (t.memoizedState !== null)
          return ((t.child = e.child), (t.flags |= Dt), null);
        var J = i.children,
          H = i.fallback,
          he = yO(e, t, J, H, p),
          ke = t.child;
        return ((ke.memoizedState = qh(p)), (t.memoizedState = Wh), he);
      }
    else {
      if ((o1(), (t.mode & yt) === je)) return Hf(e, t, p, null);
      if (vv(l)) {
        var v, y, w;
        {
          var C = CD(l);
          ((v = C.digest), (y = C.message), (w = C.stack));
        }
        var P;
        y
          ? (P = new Error(y))
          : (P = new Error(
              'The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.'
            ));
        var N = zh(P, v, w);
        return Hf(e, t, p, N);
      }
      var j = br(p, e.childLanes);
      if (Qr || j) {
        var G = Jf();
        if (G !== null) {
          var K = O0(G, p);
          if (K !== An && K !== u.retryLane) {
            u.retryLane = K;
            var De = $t;
            (cr(e, K), xn(G, e, K, De));
          }
        }
        ym();
        var He = zh(
          new Error(
            'This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition.'
          )
        );
        return Hf(e, t, p, He);
      } else if (Ob(l)) {
        ((t.flags |= Dt), (t.child = e.child));
        var ze = $A.bind(null, e);
        return (TD(l, ze), null);
      } else {
        u1(t, l, u.treeContext);
        var bt = i.children,
          pt = Xh(t, bt);
        return ((pt.flags |= Pa), pt);
      }
    }
  }
  function lE(e, t, n) {
    e.lanes = ut(e.lanes, t);
    var i = e.alternate;
    (i !== null && (i.lanes = ut(i.lanes, t)), Iv(e.return, t, n));
  }
  function SO(e, t, n) {
    for (var i = t; i !== null; ) {
      if (i.tag === F) {
        var l = i.memoizedState;
        l !== null && lE(i, n, e);
      } else if (i.tag === ue) lE(i, n, e);
      else if (i.child !== null) {
        ((i.child.return = i), (i = i.child));
        continue;
      }
      if (i === e) return;
      for (; i.sibling === null; ) {
        if (i.return === null || i.return === e) return;
        i = i.return;
      }
      ((i.sibling.return = i.return), (i = i.sibling));
    }
  }
  function EO(e) {
    for (var t = e, n = null; t !== null; ) {
      var i = t.alternate;
      (i !== null && bf(i) === null && (n = t), (t = t.sibling));
    }
    return n;
  }
  function wO(e) {
    if (
      e !== void 0 &&
      e !== 'forwards' &&
      e !== 'backwards' &&
      e !== 'together' &&
      !jh[e]
    )
      if (((jh[e] = !0), typeof e == 'string'))
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
  function CO(e, t) {
    e !== void 0 &&
      !If[e] &&
      (e !== 'collapsed' && e !== 'hidden'
        ? ((If[e] = !0),
          d(
            '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',
            e
          ))
        : t !== 'forwards' &&
          t !== 'backwards' &&
          ((If[e] = !0),
          d(
            '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
            e
          )));
  }
  function sE(e, t) {
    {
      var n = _t(e),
        i = !n && typeof mr(e) == 'function';
      if (n || i) {
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
  function TO(e, t) {
    if (
      (t === 'forwards' || t === 'backwards') &&
      e !== void 0 &&
      e !== null &&
      e !== !1
    )
      if (_t(e)) {
        for (var n = 0; n < e.length; n++) if (!sE(e[n], n)) return;
      } else {
        var i = mr(e);
        if (typeof i == 'function') {
          var l = i.call(e);
          if (l)
            for (var u = l.next(), p = 0; !u.done; u = l.next()) {
              if (!sE(u.value, p)) return;
              p++;
            }
        } else
          d(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            t
          );
      }
  }
  function Kh(e, t, n, i, l) {
    var u = e.memoizedState;
    u === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: i,
          tail: n,
          tailMode: l,
        })
      : ((u.isBackwards = t),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = i),
        (u.tail = n),
        (u.tailMode = l));
  }
  function uE(e, t, n) {
    var i = t.pendingProps,
      l = i.revealOrder,
      u = i.tail,
      p = i.children;
    (wO(l), CO(u, l), TO(p, l), er(e, t, p, n));
    var v = Wr.current,
      y = Xv(v, tu);
    if (y) ((v = Qv(v, tu)), (t.flags |= Dt));
    else {
      var w = e !== null && (e.flags & Dt) !== qe;
      (w && SO(t, t.child, n), (v = hl(v)));
    }
    if ((_i(t, v), (t.mode & yt) === je)) t.memoizedState = null;
    else
      switch (l) {
        case 'forwards': {
          var C = EO(t.child),
            P;
          (C === null
            ? ((P = t.child), (t.child = null))
            : ((P = C.sibling), (C.sibling = null)),
            Kh(t, !1, P, C, u));
          break;
        }
        case 'backwards': {
          var N = null,
            j = t.child;
          for (t.child = null; j !== null; ) {
            var G = j.alternate;
            if (G !== null && bf(G) === null) {
              t.child = j;
              break;
            }
            var K = j.sibling;
            ((j.sibling = N), (N = j), (j = K));
          }
          Kh(t, !0, N, null, u);
          break;
        }
        case 'together': {
          Kh(t, !1, null, null, void 0);
          break;
        }
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function xO(e, t, n) {
    Gv(t, t.stateNode.containerInfo);
    var i = t.pendingProps;
    return (
      e === null ? (t.child = fl(t, null, i, n)) : er(e, t, i, n),
      t.child
    );
  }
  var cE = !1;
  function RO(e, t, n) {
    var i = t.type,
      l = i._context,
      u = t.pendingProps,
      p = t.memoizedProps,
      v = u.value;
    {
      'value' in u ||
        cE ||
        ((cE = !0),
        d(
          'The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?'
        ));
      var y = t.type.propTypes;
      y && $r(y, u, 'prop', 'Context.Provider');
    }
    if ((nS(t, l, v), p !== null)) {
      var w = p.value;
      if (wr(w, v)) {
        if (p.children === u.children && !Xc()) return Wa(e, t, n);
      } else w1(t, l, n);
    }
    var C = u.children;
    return (er(e, t, C, n), t.child);
  }
  var fE = !1;
  function _O(e, t, n) {
    var i = t.type;
    i._context === void 0
      ? i !== i.Consumer &&
        (fE ||
          ((fE = !0),
          d(
            'Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?'
          )))
      : (i = i._context);
    var l = t.pendingProps,
      u = l.children;
    (typeof u != 'function' &&
      d(
        "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
      ),
      pl(t, n));
    var p = vn(i);
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
    Qr = !0;
  }
  function Bf(e, t) {
    (t.mode & yt) === je &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= pn));
  }
  function Wa(e, t, n) {
    return (
      e !== null && (t.dependencies = e.dependencies),
      IS(),
      xu(t.lanes),
      br(n, t.childLanes) ? (S1(e, t), t.child) : null
    );
  }
  function DO(e, t, n) {
    {
      var i = t.return;
      if (i === null) throw new Error('Cannot swap the root fiber.');
      if (
        ((e.alternate = null),
        (t.alternate = null),
        (n.index = t.index),
        (n.sibling = t.sibling),
        (n.return = t.return),
        (n.ref = t.ref),
        t === i.child)
      )
        i.child = n;
      else {
        var l = i.child;
        if (l === null) throw new Error('Expected parent to have a child.');
        for (; l.sibling !== t; )
          if (((l = l.sibling), l === null))
            throw new Error('Expected to find the previous sibling.');
        l.sibling = n;
      }
      var u = i.deletions;
      return (
        u === null ? ((i.deletions = [e]), (i.flags |= Ki)) : u.push(e),
        (n.flags |= pn),
        n
      );
    }
  }
  function Jh(e, t) {
    var n = e.lanes;
    return !!br(n, t);
  }
  function OO(e, t, n) {
    switch (t.tag) {
      case E:
        (rE(t), t.stateNode, cl());
        break;
      case D:
        cS(t);
        break;
      case g: {
        var i = t.type;
        da(i) && Kc(t);
        break;
      }
      case T:
        Gv(t, t.stateNode.containerInfo);
        break;
      case R: {
        var l = t.memoizedProps.value,
          u = t.type._context;
        nS(t, u, l);
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
            return (_i(t, hl(Wr.current)), (t.flags |= Dt), null);
          var w = t.child,
            C = w.childLanes;
          if (br(n, C)) return iE(e, t, n);
          _i(t, hl(Wr.current));
          var P = Wa(e, t, n);
          return P !== null ? P.sibling : null;
        } else _i(t, hl(Wr.current));
        break;
      }
      case ue: {
        var N = (e.flags & Dt) !== qe,
          j = br(n, t.childLanes);
        if (N) {
          if (j) return uE(e, t, n);
          t.flags |= Dt;
        }
        var G = t.memoizedState;
        if (
          (G !== null &&
            ((G.rendering = null), (G.tail = null), (G.lastEffect = null)),
          _i(t, Wr.current),
          j)
        )
          break;
        return null;
      }
      case W:
      case ie:
        return ((t.lanes = de), eE(e, t, n));
    }
    return Wa(e, t, n);
  }
  function dE(e, t, n) {
    if (t._debugNeedsRemount && e !== null)
      return DO(
        e,
        t,
        Dm(
          t.type,
          t.key,
          t.pendingProps,
          t._debugOwner || null,
          t.mode,
          t.lanes
        )
      );
    if (e !== null) {
      var i = e.memoizedProps,
        l = t.pendingProps;
      if (i !== l || Xc() || t.type !== e.type) Qr = !0;
      else {
        var u = Jh(e, n);
        if (!u && (t.flags & Dt) === qe) return ((Qr = !1), OO(e, t, n));
        (e.flags & ap) !== qe ? (Qr = !0) : (Qr = !1);
      }
    } else if (((Qr = !1), Pn() && e1(t))) {
      var p = t.index,
        v = t1();
      Ib(t, v, p);
    }
    switch (((t.lanes = de), t.tag)) {
      case S:
        return cO(e, t, t.type, n);
      case le: {
        var y = t.elementType;
        return sO(e, t, y, n);
      }
      case m: {
        var w = t.type,
          C = t.pendingProps,
          P = t.elementType === w ? C : Xr(w, C);
        return $h(e, t, w, P, n);
      }
      case g: {
        var N = t.type,
          j = t.pendingProps,
          G = t.elementType === N ? j : Xr(N, j);
        return nE(e, t, N, G, n);
      }
      case E:
        return iO(e, t, n);
      case D:
        return oO(e, t, n);
      case O:
        return lO(e, t);
      case F:
        return iE(e, t, n);
      case T:
        return xO(e, t, n);
      case z: {
        var K = t.type,
          De = t.pendingProps,
          He = t.elementType === K ? De : Xr(K, De);
        return KS(e, t, K, He, n);
      }
      case x:
        return nO(e, t, n);
      case k:
        return rO(e, t, n);
      case U:
        return aO(e, t, n);
      case R:
        return RO(e, t, n);
      case L:
        return _O(e, t, n);
      case te: {
        var ze = t.type,
          bt = t.pendingProps,
          pt = Xr(ze, bt);
        if (t.type !== t.elementType) {
          var I = ze.propTypes;
          I && $r(I, pt, 'prop', wt(ze));
        }
        return ((pt = Xr(ze.type, pt)), JS(e, t, ze, pt, n));
      }
      case ae:
        return ZS(e, t, t.type, t.pendingProps, n);
      case ne: {
        var J = t.type,
          H = t.pendingProps,
          he = t.elementType === J ? H : Xr(J, H);
        return uO(e, t, J, he, n);
      }
      case ue:
        return uE(e, t, n);
      case B:
        break;
      case W:
        return eE(e, t, n);
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
  function pE(e) {
    ((e.flags |= pi), (e.flags |= ip));
  }
  var vE, Zh, hE, mE;
  ((vE = function (e, t, n, i) {
    for (var l = t.child; l !== null; ) {
      if (l.tag === D || l.tag === O) K_(e, l.stateNode);
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
    (Zh = function (e, t) {}),
    (hE = function (e, t, n, i, l) {
      var u = e.memoizedProps;
      if (u !== i) {
        var p = t.stateNode,
          v = Wv(),
          y = Z_(p, n, u, i, l, v);
        ((t.updateQueue = y), y && El(t));
      }
    }),
    (mE = function (e, t, n, i) {
      n !== i && El(t);
    }));
  function vu(e, t) {
    if (!Pn())
      switch (e.tailMode) {
        case 'hidden': {
          for (var n = e.tail, i = null; n !== null; )
            (n.alternate !== null && (i = n), (n = n.sibling));
          i === null ? (e.tail = null) : (i.sibling = null);
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
  function Un(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = de,
      i = qe;
    if (t) {
      if ((e.mode & Nt) !== je) {
        for (var y = e.selfBaseDuration, w = e.child; w !== null; )
          ((n = ut(n, ut(w.lanes, w.childLanes))),
            (i |= w.subtreeFlags & Ua),
            (i |= w.flags & Ua),
            (y += w.treeBaseDuration),
            (w = w.sibling));
        e.treeBaseDuration = y;
      } else
        for (var C = e.child; C !== null; )
          ((n = ut(n, ut(C.lanes, C.childLanes))),
            (i |= C.subtreeFlags & Ua),
            (i |= C.flags & Ua),
            (C.return = e),
            (C = C.sibling));
      e.subtreeFlags |= i;
    } else {
      if ((e.mode & Nt) !== je) {
        for (
          var l = e.actualDuration, u = e.selfBaseDuration, p = e.child;
          p !== null;

        )
          ((n = ut(n, ut(p.lanes, p.childLanes))),
            (i |= p.subtreeFlags),
            (i |= p.flags),
            (l += p.actualDuration),
            (u += p.treeBaseDuration),
            (p = p.sibling));
        ((e.actualDuration = l), (e.treeBaseDuration = u));
      } else
        for (var v = e.child; v !== null; )
          ((n = ut(n, ut(v.lanes, v.childLanes))),
            (i |= v.subtreeFlags),
            (i |= v.flags),
            (v.return = e),
            (v = v.sibling));
      e.subtreeFlags |= i;
    }
    return ((e.childLanes = n), t);
  }
  function AO(e, t, n) {
    if (v1() && (t.mode & yt) !== je && (t.flags & Dt) === qe)
      return (Wb(t), cl(), (t.flags |= Na | ss | Zn), !1);
    var i = nf(t);
    if (n !== null && n.dehydrated !== null)
      if (e === null) {
        if (!i)
          throw new Error(
            'A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.'
          );
        if ((d1(t), Un(t), (t.mode & Nt) !== je)) {
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
          (t.flags & Dt) === qe && (t.memoizedState = null),
          (t.flags |= St),
          Un(t),
          (t.mode & Nt) !== je)
        ) {
          var p = n !== null;
          if (p) {
            var v = t.child;
            v !== null && (t.treeBaseDuration -= v.treeBaseDuration);
          }
        }
        return !1;
      }
    else return (qb(), !0);
  }
  function yE(e, t, n) {
    var i = t.pendingProps;
    switch ((xv(t), t.tag)) {
      case S:
      case le:
      case ae:
      case m:
      case z:
      case x:
      case k:
      case U:
      case L:
      case te:
        return (Un(t), null);
      case g: {
        var l = t.type;
        return (da(l) && Qc(t), Un(t), null);
      }
      case E: {
        var u = t.stateNode;
        if (
          (vl(t),
          Ev(t),
          Jv(),
          u.pendingContext &&
            ((u.context = u.pendingContext), (u.pendingContext = null)),
          e === null || e.child === null)
        ) {
          var p = nf(t);
          if (p) El(t);
          else if (e !== null) {
            var v = e.memoizedState;
            (!v.isDehydrated || (t.flags & Na) !== qe) &&
              ((t.flags |= Ji), qb());
          }
        }
        return (Zh(e, t), Un(t), null);
      }
      case D: {
        qv(t);
        var y = uS(),
          w = t.type;
        if (e !== null && t.stateNode != null)
          (hE(e, t, w, i, y), e.ref !== t.ref && pE(t));
        else {
          if (!i) {
            if (t.stateNode === null)
              throw new Error(
                'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.'
              );
            return (Un(t), null);
          }
          var C = Wv(),
            P = nf(t);
          if (P) c1(t, y, C) && El(t);
          else {
            var N = Q_(w, i, y, C, t);
            (vE(N, t, !1, !1), (t.stateNode = N), J_(N, w, i, y) && El(t));
          }
          t.ref !== null && pE(t);
        }
        return (Un(t), null);
      }
      case O: {
        var j = i;
        if (e && t.stateNode != null) {
          var G = e.memoizedProps;
          mE(e, t, G, j);
        } else {
          if (typeof j != 'string' && t.stateNode === null)
            throw new Error(
              'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.'
            );
          var K = uS(),
            De = Wv(),
            He = nf(t);
          He ? f1(t) && El(t) : (t.stateNode = eD(j, K, De, t));
        }
        return (Un(t), null);
      }
      case F: {
        ml(t);
        var ze = t.memoizedState;
        if (
          e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null)
        ) {
          var bt = AO(e, t, ze);
          if (!bt) return t.flags & Zn ? t : null;
        }
        if ((t.flags & Dt) !== qe)
          return ((t.lanes = n), (t.mode & Nt) !== je && Ch(t), t);
        var pt = ze !== null,
          I = e !== null && e.memoizedState !== null;
        if (pt !== I && pt) {
          var J = t.child;
          if (((J.flags |= Zi), (t.mode & yt) !== je)) {
            var H =
              e === null &&
              (t.memoizedProps.unstable_avoidThisFallback !== !0 || !Lt);
            H || Xv(Wr.current, dS) ? MA() : ym();
          }
        }
        var he = t.updateQueue;
        if (
          (he !== null && (t.flags |= St), Un(t), (t.mode & Nt) !== je && pt)
        ) {
          var ke = t.child;
          ke !== null && (t.treeBaseDuration -= ke.treeBaseDuration);
        }
        return null;
      }
      case T:
        return (
          vl(t),
          Zh(e, t),
          e === null && WD(t.stateNode.containerInfo),
          Un(t),
          null
        );
      case R:
        var Oe = t.type._context;
        return (Vv(Oe, t), Un(t), null);
      case ne: {
        var Ke = t.type;
        return (da(Ke) && Qc(t), Un(t), null);
      }
      case ue: {
        ml(t);
        var at = t.memoizedState;
        if (at === null) return (Un(t), null);
        var zt = (t.flags & Dt) !== qe,
          xt = at.rendering;
        if (xt === null)
          if (zt) vu(at, !1);
          else {
            var un = kA() && (e === null || (e.flags & Dt) === qe);
            if (!un)
              for (var Rt = t.child; Rt !== null; ) {
                var ln = bf(Rt);
                if (ln !== null) {
                  ((zt = !0), (t.flags |= Dt), vu(at, !1));
                  var Xn = ln.updateQueue;
                  return (
                    Xn !== null && ((t.updateQueue = Xn), (t.flags |= St)),
                    (t.subtreeFlags = qe),
                    E1(t, n),
                    _i(t, Qv(Wr.current, tu)),
                    t.child
                  );
                }
                Rt = Rt.sibling;
              }
            at.tail !== null &&
              Dn() > FE() &&
              ((t.flags |= Dt), (zt = !0), vu(at, !1), (t.lanes = mg));
          }
        else {
          if (!zt) {
            var Bn = bf(xt);
            if (Bn !== null) {
              ((t.flags |= Dt), (zt = !0));
              var xr = Bn.updateQueue;
              if (
                (xr !== null && ((t.updateQueue = xr), (t.flags |= St)),
                vu(at, !0),
                at.tail === null &&
                  at.tailMode === 'hidden' &&
                  !xt.alternate &&
                  !Pn())
              )
                return (Un(t), null);
            } else
              Dn() * 2 - at.renderingStartTime > FE() &&
                n !== gr &&
                ((t.flags |= Dt), (zt = !0), vu(at, !1), (t.lanes = mg));
          }
          if (at.isBackwards) ((xt.sibling = t.child), (t.child = xt));
          else {
            var rr = at.last;
            (rr !== null ? (rr.sibling = xt) : (t.child = xt), (at.last = xt));
          }
        }
        if (at.tail !== null) {
          var ar = at.tail;
          ((at.rendering = ar),
            (at.tail = ar.sibling),
            (at.renderingStartTime = Dn()),
            (ar.sibling = null));
          var Qn = Wr.current;
          return (zt ? (Qn = Qv(Qn, tu)) : (Qn = hl(Qn)), _i(t, Qn), ar);
        }
        return (Un(t), null);
      }
      case B:
        break;
      case W:
      case ie: {
        mm(t);
        var Ja = t.memoizedState,
          Ol = Ja !== null;
        if (e !== null) {
          var Au = e.memoizedState,
            Sa = Au !== null;
          Sa !== Ol && !Ye && (t.flags |= Zi);
        }
        return (
          !Ol || (t.mode & yt) === je
            ? Un(t)
            : br(ba, gr) &&
              (Un(t), t.subtreeFlags & (pn | St) && (t.flags |= Zi)),
          null
        );
      }
      case pe:
        return null;
      case ce:
        return null;
    }
    throw new Error(
      'Unknown unit of work tag (' +
        t.tag +
        '). This error is likely caused by a bug in React. Please file an issue.'
    );
  }
  function MO(e, t, n) {
    switch ((xv(t), t.tag)) {
      case g: {
        var i = t.type;
        da(i) && Qc(t);
        var l = t.flags;
        return l & Zn
          ? ((t.flags = (l & ~Zn) | Dt), (t.mode & Nt) !== je && Ch(t), t)
          : null;
      }
      case E: {
        (t.stateNode, vl(t), Ev(t), Jv());
        var u = t.flags;
        return (u & Zn) !== qe && (u & Dt) === qe
          ? ((t.flags = (u & ~Zn) | Dt), t)
          : null;
      }
      case D:
        return (qv(t), null);
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
          ? ((t.flags = (v & ~Zn) | Dt), (t.mode & Nt) !== je && Ch(t), t)
          : null;
      }
      case ue:
        return (ml(t), null);
      case T:
        return (vl(t), null);
      case R:
        var y = t.type._context;
        return (Vv(y, t), null);
      case W:
      case ie:
        return (mm(t), null);
      case pe:
        return null;
      default:
        return null;
    }
  }
  function gE(e, t, n) {
    switch ((xv(t), t.tag)) {
      case g: {
        var i = t.type.childContextTypes;
        i != null && Qc(t);
        break;
      }
      case E: {
        (t.stateNode, vl(t), Ev(t), Jv());
        break;
      }
      case D: {
        qv(t);
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
      case R:
        var l = t.type._context;
        Vv(l, t);
        break;
      case W:
      case ie:
        mm(t);
        break;
    }
  }
  var bE = null;
  bE = new Set();
  var jf = !1,
    Fn = !1,
    LO = typeof WeakSet == 'function' ? WeakSet : Set,
    Ne = null,
    wl = null,
    Cl = null;
  function kO(e) {
    (tp(null, function () {
      throw e;
    }),
      np());
  }
  var NO = function (e, t) {
    if (((t.props = e.memoizedProps), (t.state = e.memoizedState), e.mode & Nt))
      try {
        (ya(), t.componentWillUnmount());
      } finally {
        ma(e);
      }
    else t.componentWillUnmount();
  };
  function SE(e, t) {
    try {
      Ai(bn, e);
    } catch (n) {
      Ht(e, t, n);
    }
  }
  function em(e, t, n) {
    try {
      NO(e, n);
    } catch (i) {
      Ht(e, t, i);
    }
  }
  function PO(e, t, n) {
    try {
      n.componentDidMount();
    } catch (i) {
      Ht(e, t, i);
    }
  }
  function EE(e, t) {
    try {
      CE(e);
    } catch (n) {
      Ht(e, t, n);
    }
  }
  function Tl(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == 'function') {
        var i;
        try {
          if ($ && Je && e.mode & Nt)
            try {
              (ya(), (i = n(null)));
            } finally {
              ma(e);
            }
          else i = n(null);
        } catch (l) {
          Ht(e, t, l);
        }
        typeof i == 'function' &&
          d(
            'Unexpected return value from a callback ref in %s. A callback ref should not return a function.',
            st(e)
          );
      } else n.current = null;
  }
  function $f(e, t, n) {
    try {
      n();
    } catch (i) {
      Ht(e, t, i);
    }
  }
  var wE = !1;
  function zO(e, t) {
    (q_(e.containerInfo), (Ne = t), UO());
    var n = wE;
    return ((wE = !1), n);
  }
  function UO() {
    for (; Ne !== null; ) {
      var e = Ne,
        t = e.child;
      (e.subtreeFlags & lp) !== qe && t !== null
        ? ((t.return = e), (Ne = t))
        : FO();
    }
  }
  function FO() {
    for (; Ne !== null; ) {
      var e = Ne;
      Zt(e);
      try {
        VO(e);
      } catch (n) {
        Ht(e, e.return, n);
      }
      _n();
      var t = e.sibling;
      if (t !== null) {
        ((t.return = e.return), (Ne = t));
        return;
      }
      Ne = e.return;
    }
  }
  function VO(e) {
    var t = e.alternate,
      n = e.flags;
    if ((n & Ji) !== qe) {
      switch ((Zt(e), e.tag)) {
        case m:
        case z:
        case ae:
          break;
        case g: {
          if (t !== null) {
            var i = t.memoizedProps,
              l = t.memoizedState,
              u = e.stateNode;
            e.type === e.elementType &&
              !So &&
              (u.props !== e.memoizedProps &&
                d(
                  'Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.',
                  st(e) || 'instance'
                ),
              u.state !== e.memoizedState &&
                d(
                  'Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.',
                  st(e) || 'instance'
                ));
            var p = u.getSnapshotBeforeUpdate(
              e.elementType === e.type ? i : Xr(e.type, i),
              l
            );
            {
              var v = bE;
              p === void 0 &&
                !v.has(e.type) &&
                (v.add(e.type),
                d(
                  '%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.',
                  st(e)
                ));
            }
            u.__reactInternalSnapshotBeforeUpdate = p;
          }
          break;
        }
        case E: {
          {
            var y = e.stateNode;
            bD(y.containerInfo);
          }
          break;
        }
        case D:
        case O:
        case T:
        case ne:
          break;
        default:
          throw new Error(
            'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.'
          );
      }
      _n();
    }
  }
  function Kr(e, t, n) {
    var i = t.updateQueue,
      l = i !== null ? i.lastEffect : null;
    if (l !== null) {
      var u = l.next,
        p = u;
      do {
        if ((p.tag & e) === e) {
          var v = p.destroy;
          ((p.destroy = void 0),
            v !== void 0 &&
              ((e & zn) !== fr ? e0(t) : (e & bn) !== fr && fg(t),
              (e & pa) !== fr && _u(!0),
              $f(t, n, v),
              (e & pa) !== fr && _u(!1),
              (e & zn) !== fr ? t0() : (e & bn) !== fr && dg()));
        }
        p = p.next;
      } while (p !== u);
    }
  }
  function Ai(e, t) {
    var n = t.updateQueue,
      i = n !== null ? n.lastEffect : null;
    if (i !== null) {
      var l = i.next,
        u = l;
      do {
        if ((u.tag & e) === e) {
          (e & zn) !== fr ? Jx(t) : (e & bn) !== fr && n0(t);
          var p = u.create;
          ((e & pa) !== fr && _u(!0),
            (u.destroy = p()),
            (e & pa) !== fr && _u(!1),
            (e & zn) !== fr ? Zx() : (e & bn) !== fr && r0());
          {
            var v = u.destroy;
            if (v !== void 0 && typeof v != 'function') {
              var y = void 0;
              (u.tag & bn) !== qe
                ? (y = 'useLayoutEffect')
                : (u.tag & pa) !== qe
                  ? (y = 'useInsertionEffect')
                  : (y = 'useEffect');
              var w = void 0;
              (v === null
                ? (w =
                    ' You returned null. If your effect does not require clean up, return undefined (or nothing).')
                : typeof v.then == 'function'
                  ? (w =
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
                  : (w = ' You returned: ' + v),
                d(
                  '%s must not return anything besides a function, which is used for clean-up.%s',
                  y,
                  w
                ));
            }
          }
        }
        u = u.next;
      } while (u !== l);
    }
  }
  function IO(e, t) {
    if ((t.flags & St) !== qe)
      switch (t.tag) {
        case U: {
          var n = t.stateNode.passiveEffectDuration,
            i = t.memoizedProps,
            l = i.id,
            u = i.onPostCommit,
            p = FS(),
            v = t.alternate === null ? 'mount' : 'update';
          (US() && (v = 'nested-update'),
            typeof u == 'function' && u(l, v, n, p));
          var y = t.return;
          e: for (; y !== null; ) {
            switch (y.tag) {
              case E:
                var w = y.stateNode;
                w.passiveEffectDuration += n;
                break e;
              case U:
                var C = y.stateNode;
                C.passiveEffectDuration += n;
                break e;
            }
            y = y.return;
          }
          break;
        }
      }
  }
  function HO(e, t, n, i) {
    if ((n.flags & us) !== qe)
      switch (n.tag) {
        case m:
        case z:
        case ae: {
          if (!Fn)
            if (n.mode & Nt)
              try {
                (ya(), Ai(bn | gn, n));
              } finally {
                ma(n);
              }
            else Ai(bn | gn, n);
          break;
        }
        case g: {
          var l = n.stateNode;
          if (n.flags & St && !Fn)
            if (t === null)
              if (
                (n.type === n.elementType &&
                  !So &&
                  (l.props !== n.memoizedProps &&
                    d(
                      'Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.',
                      st(n) || 'instance'
                    ),
                  l.state !== n.memoizedState &&
                    d(
                      'Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.',
                      st(n) || 'instance'
                    )),
                n.mode & Nt)
              )
                try {
                  (ya(), l.componentDidMount());
                } finally {
                  ma(n);
                }
              else l.componentDidMount();
            else {
              var u =
                  n.elementType === n.type
                    ? t.memoizedProps
                    : Xr(n.type, t.memoizedProps),
                p = t.memoizedState;
              if (
                (n.type === n.elementType &&
                  !So &&
                  (l.props !== n.memoizedProps &&
                    d(
                      'Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.',
                      st(n) || 'instance'
                    ),
                  l.state !== n.memoizedState &&
                    d(
                      'Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.',
                      st(n) || 'instance'
                    )),
                n.mode & Nt)
              )
                try {
                  (ya(),
                    l.componentDidUpdate(
                      u,
                      p,
                      l.__reactInternalSnapshotBeforeUpdate
                    ));
                } finally {
                  ma(n);
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
                  st(n) || 'instance'
                ),
              l.state !== n.memoizedState &&
                d(
                  'Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.',
                  st(n) || 'instance'
                )),
            sS(n, v, l));
          break;
        }
        case E: {
          var y = n.updateQueue;
          if (y !== null) {
            var w = null;
            if (n.child !== null)
              switch (n.child.tag) {
                case D:
                  w = n.child.stateNode;
                  break;
                case g:
                  w = n.child.stateNode;
                  break;
              }
            sS(n, y, w);
          }
          break;
        }
        case D: {
          var C = n.stateNode;
          if (t === null && n.flags & St) {
            var P = n.type,
              N = n.memoizedProps;
            iD(C, P, N);
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
              De = n.stateNode.effectDuration,
              He = FS(),
              ze = t === null ? 'mount' : 'update';
            (US() && (ze = 'nested-update'),
              typeof K == 'function' &&
                K(
                  n.memoizedProps.id,
                  ze,
                  n.actualDuration,
                  n.treeBaseDuration,
                  n.actualStartTime,
                  He
                ));
            {
              (typeof G == 'function' && G(n.memoizedProps.id, ze, De, He),
                FA(n));
              var bt = n.return;
              e: for (; bt !== null; ) {
                switch (bt.tag) {
                  case E:
                    var pt = bt.stateNode;
                    pt.effectDuration += De;
                    break e;
                  case U:
                    var I = bt.stateNode;
                    I.effectDuration += De;
                    break e;
                }
                bt = bt.return;
              }
            }
          }
          break;
        }
        case F: {
          XO(e, n);
          break;
        }
        case ue:
        case ne:
        case B:
        case W:
        case ie:
        case ce:
          break;
        default:
          throw new Error(
            'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.'
          );
      }
    Fn || (n.flags & pi && CE(n));
  }
  function BO(e) {
    switch (e.tag) {
      case m:
      case z:
      case ae: {
        if (e.mode & Nt)
          try {
            (ya(), SE(e, e.return));
          } finally {
            ma(e);
          }
        else SE(e, e.return);
        break;
      }
      case g: {
        var t = e.stateNode;
        (typeof t.componentDidMount == 'function' && PO(e, e.return, t),
          EE(e, e.return));
        break;
      }
      case D: {
        EE(e, e.return);
        break;
      }
    }
  }
  function jO(e, t) {
    for (var n = null, i = e; ; ) {
      if (i.tag === D) {
        if (n === null) {
          n = i;
          try {
            var l = i.stateNode;
            t ? hD(l) : yD(i.stateNode, i.memoizedProps);
          } catch (p) {
            Ht(e, e.return, p);
          }
        }
      } else if (i.tag === O) {
        if (n === null)
          try {
            var u = i.stateNode;
            t ? mD(u) : gD(u, i.memoizedProps);
          } catch (p) {
            Ht(e, e.return, p);
          }
      } else if (
        !((i.tag === W || i.tag === ie) && i.memoizedState !== null && i !== e)
      ) {
        if (i.child !== null) {
          ((i.child.return = i), (i = i.child));
          continue;
        }
      }
      if (i === e) return;
      for (; i.sibling === null; ) {
        if (i.return === null || i.return === e) return;
        (n === i && (n = null), (i = i.return));
      }
      (n === i && (n = null), (i.sibling.return = i.return), (i = i.sibling));
    }
  }
  function CE(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode,
        i;
      switch (e.tag) {
        case D:
          i = n;
          break;
        default:
          i = n;
      }
      if (typeof t == 'function') {
        var l;
        if (e.mode & Nt)
          try {
            (ya(), (l = t(i)));
          } finally {
            ma(e);
          }
        else l = t(i);
        typeof l == 'function' &&
          d(
            'Unexpected return value from a callback ref in %s. A callback ref should not return a function.',
            st(e)
          );
      } else
        (t.hasOwnProperty('current') ||
          d(
            'Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().',
            st(e)
          ),
          (t.current = i));
    }
  }
  function $O(e) {
    var t = e.alternate;
    (t !== null && (t.return = null), (e.return = null));
  }
  function TE(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), TE(t));
    {
      if (
        ((e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === D)
      ) {
        var n = e.stateNode;
        n !== null && QD(n);
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
  function YO(e) {
    for (var t = e.return; t !== null; ) {
      if (xE(t)) return t;
      t = t.return;
    }
    throw new Error(
      'Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.'
    );
  }
  function xE(e) {
    return e.tag === D || e.tag === E || e.tag === T;
  }
  function RE(e) {
    var t = e;
    e: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || xE(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== D && t.tag !== O && t.tag !== ee;

      ) {
        if (t.flags & pn || t.child === null || t.tag === T) continue e;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & pn)) return t.stateNode;
    }
  }
  function GO(e) {
    var t = YO(e);
    switch (t.tag) {
      case D: {
        var n = t.stateNode;
        t.flags & ls && (Db(n), (t.flags &= ~ls));
        var i = RE(e);
        nm(e, i, n);
        break;
      }
      case E:
      case T: {
        var l = t.stateNode.containerInfo,
          u = RE(e);
        tm(e, u, l);
        break;
      }
      default:
        throw new Error(
          'Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.'
        );
    }
  }
  function tm(e, t, n) {
    var i = e.tag,
      l = i === D || i === O;
    if (l) {
      var u = e.stateNode;
      t ? fD(n, u, t) : uD(n, u);
    } else if (i !== T) {
      var p = e.child;
      if (p !== null) {
        tm(p, t, n);
        for (var v = p.sibling; v !== null; ) (tm(v, t, n), (v = v.sibling));
      }
    }
  }
  function nm(e, t, n) {
    var i = e.tag,
      l = i === D || i === O;
    if (l) {
      var u = e.stateNode;
      t ? cD(n, u, t) : sD(n, u);
    } else if (i !== T) {
      var p = e.child;
      if (p !== null) {
        nm(p, t, n);
        for (var v = p.sibling; v !== null; ) (nm(v, t, n), (v = v.sibling));
      }
    }
  }
  var Vn = null,
    Jr = !1;
  function WO(e, t, n) {
    {
      var i = t;
      e: for (; i !== null; ) {
        switch (i.tag) {
          case D: {
            ((Vn = i.stateNode), (Jr = !1));
            break e;
          }
          case E: {
            ((Vn = i.stateNode.containerInfo), (Jr = !0));
            break e;
          }
          case T: {
            ((Vn = i.stateNode.containerInfo), (Jr = !0));
            break e;
          }
        }
        i = i.return;
      }
      if (Vn === null)
        throw new Error(
          'Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.'
        );
      (_E(e, t, n), (Vn = null), (Jr = !1));
    }
    $O(n);
  }
  function Mi(e, t, n) {
    for (var i = n.child; i !== null; ) (_E(e, t, i), (i = i.sibling));
  }
  function _E(e, t, n) {
    switch ((qx(n), n.tag)) {
      case D:
        Fn || Tl(n, t);
      case O: {
        {
          var i = Vn,
            l = Jr;
          ((Vn = null),
            Mi(e, t, n),
            (Vn = i),
            (Jr = l),
            Vn !== null && (Jr ? pD(Vn, n.stateNode) : dD(Vn, n.stateNode)));
        }
        return;
      }
      case ee: {
        Vn !== null && (Jr ? vD(Vn, n.stateNode) : pv(Vn, n.stateNode));
        return;
      }
      case T: {
        {
          var u = Vn,
            p = Jr;
          ((Vn = n.stateNode.containerInfo),
            (Jr = !0),
            Mi(e, t, n),
            (Vn = u),
            (Jr = p));
        }
        return;
      }
      case m:
      case z:
      case te:
      case ae: {
        if (!Fn) {
          var v = n.updateQueue;
          if (v !== null) {
            var y = v.lastEffect;
            if (y !== null) {
              var w = y.next,
                C = w;
              do {
                var P = C,
                  N = P.destroy,
                  j = P.tag;
                (N !== void 0 &&
                  ((j & pa) !== fr
                    ? $f(n, t, N)
                    : (j & bn) !== fr &&
                      (fg(n),
                      n.mode & Nt ? (ya(), $f(n, t, N), ma(n)) : $f(n, t, N),
                      dg())),
                  (C = C.next));
              } while (C !== w);
            }
          }
        }
        Mi(e, t, n);
        return;
      }
      case g: {
        if (!Fn) {
          Tl(n, t);
          var G = n.stateNode;
          typeof G.componentWillUnmount == 'function' && em(n, t, G);
        }
        Mi(e, t, n);
        return;
      }
      case B: {
        Mi(e, t, n);
        return;
      }
      case W: {
        if (n.mode & yt) {
          var K = Fn;
          ((Fn = K || n.memoizedState !== null), Mi(e, t, n), (Fn = K));
        } else Mi(e, t, n);
        break;
      }
      default: {
        Mi(e, t, n);
        return;
      }
    }
  }
  function qO(e) {
    e.memoizedState;
  }
  function XO(e, t) {
    var n = t.memoizedState;
    if (n === null) {
      var i = t.alternate;
      if (i !== null) {
        var l = i.memoizedState;
        if (l !== null) {
          var u = l.dehydrated;
          u !== null && kD(u);
        }
      }
    }
  }
  function DE(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new LO()),
        t.forEach(function (i) {
          var l = YA.bind(null, e, i);
          if (!n.has(i)) {
            if ((n.add(i), Br))
              if (wl !== null && Cl !== null) Ru(Cl, wl);
              else
                throw Error(
                  'Expected finished root and lanes to be set. This is a bug in React.'
                );
            i.then(l, l);
          }
        }));
    }
  }
  function QO(e, t, n) {
    ((wl = n), (Cl = e), Zt(t), OE(t, e), Zt(t), (wl = null), (Cl = null));
  }
  function Zr(e, t, n) {
    var i = t.deletions;
    if (i !== null)
      for (var l = 0; l < i.length; l++) {
        var u = i[l];
        try {
          WO(e, t, u);
        } catch (y) {
          Ht(u, t, y);
        }
      }
    var p = Zu();
    if (t.subtreeFlags & sp)
      for (var v = t.child; v !== null; ) (Zt(v), OE(v, e), (v = v.sibling));
    Zt(p);
  }
  function OE(e, t, n) {
    var i = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case m:
      case z:
      case te:
      case ae: {
        if ((Zr(t, e), ga(e), l & St)) {
          try {
            (Kr(pa | gn, e, e.return), Ai(pa | gn, e));
          } catch (Ke) {
            Ht(e, e.return, Ke);
          }
          if (e.mode & Nt) {
            try {
              (ya(), Kr(bn | gn, e, e.return));
            } catch (Ke) {
              Ht(e, e.return, Ke);
            }
            ma(e);
          } else
            try {
              Kr(bn | gn, e, e.return);
            } catch (Ke) {
              Ht(e, e.return, Ke);
            }
        }
        return;
      }
      case g: {
        (Zr(t, e), ga(e), l & pi && i !== null && Tl(i, i.return));
        return;
      }
      case D: {
        (Zr(t, e), ga(e), l & pi && i !== null && Tl(i, i.return));
        {
          if (e.flags & ls) {
            var u = e.stateNode;
            try {
              Db(u);
            } catch (Ke) {
              Ht(e, e.return, Ke);
            }
          }
          if (l & St) {
            var p = e.stateNode;
            if (p != null) {
              var v = e.memoizedProps,
                y = i !== null ? i.memoizedProps : v,
                w = e.type,
                C = e.updateQueue;
              if (((e.updateQueue = null), C !== null))
                try {
                  oD(p, C, w, y, v, e);
                } catch (Ke) {
                  Ht(e, e.return, Ke);
                }
            }
          }
        }
        return;
      }
      case O: {
        if ((Zr(t, e), ga(e), l & St)) {
          if (e.stateNode === null)
            throw new Error(
              'This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.'
            );
          var P = e.stateNode,
            N = e.memoizedProps,
            j = i !== null ? i.memoizedProps : N;
          try {
            lD(P, j, N);
          } catch (Ke) {
            Ht(e, e.return, Ke);
          }
        }
        return;
      }
      case E: {
        if ((Zr(t, e), ga(e), l & St && i !== null)) {
          var G = i.memoizedState;
          if (G.isDehydrated)
            try {
              LD(t.containerInfo);
            } catch (Ke) {
              Ht(e, e.return, Ke);
            }
        }
        return;
      }
      case T: {
        (Zr(t, e), ga(e));
        return;
      }
      case F: {
        (Zr(t, e), ga(e));
        var K = e.child;
        if (K.flags & Zi) {
          var De = K.stateNode,
            He = K.memoizedState,
            ze = He !== null;
          if (((De.isHidden = ze), ze)) {
            var bt = K.alternate !== null && K.alternate.memoizedState !== null;
            bt || AA();
          }
        }
        if (l & St) {
          try {
            qO(e);
          } catch (Ke) {
            Ht(e, e.return, Ke);
          }
          DE(e);
        }
        return;
      }
      case W: {
        var pt = i !== null && i.memoizedState !== null;
        if (e.mode & yt) {
          var I = Fn;
          ((Fn = I || pt), Zr(t, e), (Fn = I));
        } else Zr(t, e);
        if ((ga(e), l & Zi)) {
          var J = e.stateNode,
            H = e.memoizedState,
            he = H !== null,
            ke = e;
          if (((J.isHidden = he), he && !pt && (ke.mode & yt) !== je)) {
            Ne = ke;
            for (var Oe = ke.child; Oe !== null; )
              ((Ne = Oe), JO(Oe), (Oe = Oe.sibling));
          }
          jO(ke, he);
        }
        return;
      }
      case ue: {
        (Zr(t, e), ga(e), l & St && DE(e));
        return;
      }
      case B:
        return;
      default: {
        (Zr(t, e), ga(e));
        return;
      }
    }
  }
  function ga(e) {
    var t = e.flags;
    if (t & pn) {
      try {
        GO(e);
      } catch (n) {
        Ht(e, e.return, n);
      }
      e.flags &= ~pn;
    }
    t & Pa && (e.flags &= ~Pa);
  }
  function KO(e, t, n) {
    ((wl = n), (Cl = t), (Ne = e), AE(e, t, n), (wl = null), (Cl = null));
  }
  function AE(e, t, n) {
    for (var i = (e.mode & yt) !== je; Ne !== null; ) {
      var l = Ne,
        u = l.child;
      if (l.tag === W && i) {
        var p = l.memoizedState !== null,
          v = p || jf;
        if (v) {
          rm(e, t, n);
          continue;
        } else {
          var y = l.alternate,
            w = y !== null && y.memoizedState !== null,
            C = w || Fn,
            P = jf,
            N = Fn;
          ((jf = v), (Fn = C), Fn && !N && ((Ne = l), ZO(l)));
          for (var j = u; j !== null; )
            ((Ne = j), AE(j, t, n), (j = j.sibling));
          ((Ne = l), (jf = P), (Fn = N), rm(e, t, n));
          continue;
        }
      }
      (l.subtreeFlags & us) !== qe && u !== null
        ? ((u.return = l), (Ne = u))
        : rm(e, t, n);
    }
  }
  function rm(e, t, n) {
    for (; Ne !== null; ) {
      var i = Ne;
      if ((i.flags & us) !== qe) {
        var l = i.alternate;
        Zt(i);
        try {
          HO(t, l, i, n);
        } catch (p) {
          Ht(i, i.return, p);
        }
        _n();
      }
      if (i === e) {
        Ne = null;
        return;
      }
      var u = i.sibling;
      if (u !== null) {
        ((u.return = i.return), (Ne = u));
        return;
      }
      Ne = i.return;
    }
  }
  function JO(e) {
    for (; Ne !== null; ) {
      var t = Ne,
        n = t.child;
      switch (t.tag) {
        case m:
        case z:
        case te:
        case ae: {
          if (t.mode & Nt)
            try {
              (ya(), Kr(bn, t, t.return));
            } finally {
              ma(t);
            }
          else Kr(bn, t, t.return);
          break;
        }
        case g: {
          Tl(t, t.return);
          var i = t.stateNode;
          typeof i.componentWillUnmount == 'function' && em(t, t.return, i);
          break;
        }
        case D: {
          Tl(t, t.return);
          break;
        }
        case W: {
          var l = t.memoizedState !== null;
          if (l) {
            ME(e);
            continue;
          }
          break;
        }
      }
      n !== null ? ((n.return = t), (Ne = n)) : ME(e);
    }
  }
  function ME(e) {
    for (; Ne !== null; ) {
      var t = Ne;
      if (t === e) {
        Ne = null;
        return;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (Ne = n));
        return;
      }
      Ne = t.return;
    }
  }
  function ZO(e) {
    for (; Ne !== null; ) {
      var t = Ne,
        n = t.child;
      if (t.tag === W) {
        var i = t.memoizedState !== null;
        if (i) {
          LE(e);
          continue;
        }
      }
      n !== null ? ((n.return = t), (Ne = n)) : LE(e);
    }
  }
  function LE(e) {
    for (; Ne !== null; ) {
      var t = Ne;
      Zt(t);
      try {
        BO(t);
      } catch (i) {
        Ht(t, t.return, i);
      }
      if ((_n(), t === e)) {
        Ne = null;
        return;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (Ne = n));
        return;
      }
      Ne = t.return;
    }
  }
  function eA(e, t, n, i) {
    ((Ne = t), tA(t, e, n, i));
  }
  function tA(e, t, n, i) {
    for (; Ne !== null; ) {
      var l = Ne,
        u = l.child;
      (l.subtreeFlags & $o) !== qe && u !== null
        ? ((u.return = l), (Ne = u))
        : nA(e, t, n, i);
    }
  }
  function nA(e, t, n, i) {
    for (; Ne !== null; ) {
      var l = Ne;
      if ((l.flags & Hr) !== qe) {
        Zt(l);
        try {
          rA(t, l, n, i);
        } catch (p) {
          Ht(l, l.return, p);
        }
        _n();
      }
      if (l === e) {
        Ne = null;
        return;
      }
      var u = l.sibling;
      if (u !== null) {
        ((u.return = l.return), (Ne = u));
        return;
      }
      Ne = l.return;
    }
  }
  function rA(e, t, n, i) {
    switch (t.tag) {
      case m:
      case z:
      case ae: {
        if (t.mode & Nt) {
          wh();
          try {
            Ai(zn | gn, t);
          } finally {
            Eh(t);
          }
        } else Ai(zn | gn, t);
        break;
      }
    }
  }
  function aA(e) {
    ((Ne = e), iA());
  }
  function iA() {
    for (; Ne !== null; ) {
      var e = Ne,
        t = e.child;
      if ((Ne.flags & Ki) !== qe) {
        var n = e.deletions;
        if (n !== null) {
          for (var i = 0; i < n.length; i++) {
            var l = n[i];
            ((Ne = l), sA(l, e));
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
          Ne = e;
        }
      }
      (e.subtreeFlags & $o) !== qe && t !== null
        ? ((t.return = e), (Ne = t))
        : oA();
    }
  }
  function oA() {
    for (; Ne !== null; ) {
      var e = Ne;
      (e.flags & Hr) !== qe && (Zt(e), lA(e), _n());
      var t = e.sibling;
      if (t !== null) {
        ((t.return = e.return), (Ne = t));
        return;
      }
      Ne = e.return;
    }
  }
  function lA(e) {
    switch (e.tag) {
      case m:
      case z:
      case ae: {
        e.mode & Nt
          ? (wh(), Kr(zn | gn, e, e.return), Eh(e))
          : Kr(zn | gn, e, e.return);
        break;
      }
    }
  }
  function sA(e, t) {
    for (; Ne !== null; ) {
      var n = Ne;
      (Zt(n), cA(n, t), _n());
      var i = n.child;
      i !== null ? ((i.return = n), (Ne = i)) : uA(e);
    }
  }
  function uA(e) {
    for (; Ne !== null; ) {
      var t = Ne,
        n = t.sibling,
        i = t.return;
      if ((TE(t), t === e)) {
        Ne = null;
        return;
      }
      if (n !== null) {
        ((n.return = i), (Ne = n));
        return;
      }
      Ne = i;
    }
  }
  function cA(e, t) {
    switch (e.tag) {
      case m:
      case z:
      case ae: {
        e.mode & Nt ? (wh(), Kr(zn, e, t), Eh(e)) : Kr(zn, e, t);
        break;
      }
    }
  }
  function fA(e) {
    switch (e.tag) {
      case m:
      case z:
      case ae: {
        try {
          Ai(bn | gn, e);
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
  function dA(e) {
    switch (e.tag) {
      case m:
      case z:
      case ae: {
        try {
          Ai(zn | gn, e);
        } catch (t) {
          Ht(e, e.return, t);
        }
        break;
      }
    }
  }
  function pA(e) {
    switch (e.tag) {
      case m:
      case z:
      case ae: {
        try {
          Kr(bn | gn, e, e.return);
        } catch (n) {
          Ht(e, e.return, n);
        }
        break;
      }
      case g: {
        var t = e.stateNode;
        typeof t.componentWillUnmount == 'function' && em(e, e.return, t);
        break;
      }
    }
  }
  function vA(e) {
    switch (e.tag) {
      case m:
      case z:
      case ae:
        try {
          Kr(zn | gn, e, e.return);
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
  var hA = [];
  function mA() {
    hA.forEach(function (e) {
      return e();
    });
  }
  var yA = o.ReactCurrentActQueue;
  function gA(e) {
    {
      var t =
          typeof IS_REACT_ACT_ENVIRONMENT < 'u'
            ? IS_REACT_ACT_ENVIRONMENT
            : void 0,
        n = typeof jest < 'u';
      return n && t !== !1;
    }
  }
  function kE() {
    {
      var e =
        typeof IS_REACT_ACT_ENVIRONMENT < 'u'
          ? IS_REACT_ACT_ENVIRONMENT
          : void 0;
      return (
        !e &&
          yA.current !== null &&
          d(
            'The current testing environment is not configured to support act(...)'
          ),
        e
      );
    }
  }
  var bA = Math.ceil,
    am = o.ReactCurrentDispatcher,
    im = o.ReactCurrentOwner,
    In = o.ReactCurrentBatchConfig,
    ea = o.ReactCurrentActQueue,
    wn = 0,
    NE = 1,
    Hn = 2,
    Pr = 4,
    qa = 0,
    mu = 1,
    Eo = 2,
    Yf = 3,
    yu = 4,
    PE = 5,
    om = 6,
    gt = wn,
    tr = null,
    en = null,
    Cn = de,
    ba = de,
    lm = Ei(de),
    Tn = qa,
    gu = null,
    Gf = de,
    bu = de,
    Wf = de,
    Su = null,
    dr = null,
    sm = 0,
    zE = 500,
    UE = 1 / 0,
    SA = 500,
    Xa = null;
  function Eu() {
    UE = Dn() + SA;
  }
  function FE() {
    return UE;
  }
  var qf = !1,
    um = null,
    xl = null,
    wo = !1,
    Li = null,
    wu = de,
    cm = [],
    fm = null,
    EA = 50,
    Cu = 0,
    dm = null,
    pm = !1,
    Xf = !1,
    wA = 50,
    Rl = 0,
    Qf = null,
    Tu = $t,
    Kf = de,
    VE = !1;
  function Jf() {
    return tr;
  }
  function nr() {
    return (gt & (Hn | Pr)) !== wn ? Dn() : (Tu !== $t || (Tu = Dn()), Tu);
  }
  function ki(e) {
    var t = e.mode;
    if ((t & yt) === je) return nt;
    if ((gt & Hn) !== wn && Cn !== de) return ms(Cn);
    var n = y1() !== m1;
    if (n) {
      if (In.transition !== null) {
        var i = In.transition;
        (i._updatedFibers || (i._updatedFibers = new Set()),
          i._updatedFibers.add(e));
      }
      return (Kf === An && (Kf = Sg()), Kf);
    }
    var l = jr();
    if (l !== An) return l;
    var u = tD();
    return u;
  }
  function CA(e) {
    var t = e.mode;
    return (t & yt) === je ? nt : x0();
  }
  function xn(e, t, n, i) {
    (WA(),
      VE && d('useInsertionEffect must not schedule updates.'),
      pm && (Xf = !0),
      ys(e, n, i),
      (gt & Hn) !== de && e === tr
        ? QA(t)
        : (Br && Cg(e, t, n),
          KA(t),
          e === tr &&
            ((gt & Hn) === wn && (bu = ut(bu, n)), Tn === yu && Ni(e, Cn)),
          pr(e, i),
          n === nt &&
            gt === wn &&
            (t.mode & yt) === je &&
            !ea.isBatchingLegacy &&
            (Eu(), Vb())));
  }
  function TA(e, t, n) {
    var i = e.current;
    ((i.lanes = t), ys(e, t, n), pr(e, n));
  }
  function xA(e) {
    return (gt & Hn) !== wn;
  }
  function pr(e, t) {
    var n = e.callbackNode;
    b0(e, t);
    var i = gc(e, e === tr ? Cn : de);
    if (i === de) {
      (n !== null && tw(n), (e.callbackNode = null), (e.callbackPriority = An));
      return;
    }
    var l = io(i),
      u = e.callbackPriority;
    if (u === l && !(ea.current !== null && n !== Sm)) {
      n == null &&
        u !== nt &&
        d(
          'Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.'
        );
      return;
    }
    n != null && tw(n);
    var p;
    if (l === nt)
      (e.tag === wi
        ? (ea.isBatchingLegacy !== null && (ea.didScheduleLegacyUpdate = !0),
          ZD(BE.bind(null, e)))
        : Fb(BE.bind(null, e)),
        ea.current !== null
          ? ea.current.push(Ci)
          : rD(function () {
              (gt & (Hn | Pr)) === wn && Ci();
            }),
        (p = null));
    else {
      var v;
      switch (Rg(i)) {
        case Sr:
          v = vc;
          break;
        case Va:
          v = up;
          break;
        case Ia:
          v = no;
          break;
        case Ec:
          v = cp;
          break;
        default:
          v = no;
          break;
      }
      p = Em(v, IE.bind(null, e));
    }
    ((e.callbackPriority = l), (e.callbackNode = p));
  }
  function IE(e, t) {
    if ((j1(), (Tu = $t), (Kf = de), (gt & (Hn | Pr)) !== wn))
      throw new Error('Should not already be working.');
    var n = e.callbackNode,
      i = Ka();
    if (i && e.callbackNode !== n) return null;
    var l = gc(e, e === tr ? Cn : de);
    if (l === de) return null;
    var u = !bc(e, l) && !T0(e, l) && !t,
      p = u ? PA(e, l) : ed(e, l);
    if (p !== qa) {
      if (p === Eo) {
        var v = Lp(e);
        v !== de && ((l = v), (p = vm(e, v)));
      }
      if (p === mu) {
        var y = gu;
        throw (Co(e, de), Ni(e, l), pr(e, Dn()), y);
      }
      if (p === om) Ni(e, l);
      else {
        var w = !bc(e, l),
          C = e.current.alternate;
        if (w && !_A(C)) {
          if (((p = ed(e, l)), p === Eo)) {
            var P = Lp(e);
            P !== de && ((l = P), (p = vm(e, P)));
          }
          if (p === mu) {
            var N = gu;
            throw (Co(e, de), Ni(e, l), pr(e, Dn()), N);
          }
        }
        ((e.finishedWork = C), (e.finishedLanes = l), RA(e, p, l));
      }
    }
    return (pr(e, Dn()), e.callbackNode === n ? IE.bind(null, e) : null);
  }
  function vm(e, t) {
    var n = Su;
    if (wc(e)) {
      var i = Co(e, t);
      ((i.flags |= Na), GD(e.containerInfo));
    }
    var l = ed(e, t);
    if (l !== Eo) {
      var u = dr;
      ((dr = n), u !== null && HE(u));
    }
    return l;
  }
  function HE(e) {
    dr === null ? (dr = e) : dr.push.apply(dr, e);
  }
  function RA(e, t, n) {
    switch (t) {
      case qa:
      case mu:
        throw new Error('Root did not complete. This is a bug in React.');
      case Eo: {
        To(e, dr, Xa);
        break;
      }
      case Yf: {
        if ((Ni(e, n), gg(n) && !nw())) {
          var i = sm + zE - Dn();
          if (i > 10) {
            var l = gc(e, de);
            if (l !== de) break;
            var u = e.suspendedLanes;
            if (!Qo(u, n)) {
              (nr(), wg(e, u));
              break;
            }
            e.timeoutHandle = fv(To.bind(null, e, dr, Xa), i);
            break;
          }
        }
        To(e, dr, Xa);
        break;
      }
      case yu: {
        if ((Ni(e, n), C0(n))) break;
        if (!nw()) {
          var p = y0(e, n),
            v = p,
            y = Dn() - v,
            w = GA(y) - y;
          if (w > 10) {
            e.timeoutHandle = fv(To.bind(null, e, dr, Xa), w);
            break;
          }
        }
        To(e, dr, Xa);
        break;
      }
      case PE: {
        To(e, dr, Xa);
        break;
      }
      default:
        throw new Error('Unknown root exit status.');
    }
  }
  function _A(e) {
    for (var t = e; ; ) {
      if (t.flags & dc) {
        var n = t.updateQueue;
        if (n !== null) {
          var i = n.stores;
          if (i !== null)
            for (var l = 0; l < i.length; l++) {
              var u = i[l],
                p = u.getSnapshot,
                v = u.value;
              try {
                if (!wr(p(), v)) return !1;
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
    ((t = Sc(t, Wf)), (t = Sc(t, bu)), _0(e, t));
  }
  function BE(e) {
    if (($1(), (gt & (Hn | Pr)) !== wn))
      throw new Error('Should not already be working.');
    Ka();
    var t = gc(e, de);
    if (!br(t, nt)) return (pr(e, Dn()), null);
    var n = ed(e, t);
    if (e.tag !== wi && n === Eo) {
      var i = Lp(e);
      i !== de && ((t = i), (n = vm(e, i)));
    }
    if (n === mu) {
      var l = gu;
      throw (Co(e, de), Ni(e, t), pr(e, Dn()), l);
    }
    if (n === om)
      throw new Error('Root did not complete. This is a bug in React.');
    var u = e.current.alternate;
    return (
      (e.finishedWork = u),
      (e.finishedLanes = t),
      To(e, dr, Xa),
      pr(e, Dn()),
      null
    );
  }
  function DA(e, t) {
    t !== de &&
      (zp(e, ut(t, nt)), pr(e, Dn()), (gt & (Hn | Pr)) === wn && (Eu(), Ci()));
  }
  function hm(e, t) {
    var n = gt;
    gt |= NE;
    try {
      return e(t);
    } finally {
      ((gt = n), gt === wn && !ea.isBatchingLegacy && (Eu(), Vb()));
    }
  }
  function OA(e, t, n, i, l) {
    var u = jr(),
      p = In.transition;
    try {
      return ((In.transition = null), Mn(Sr), e(t, n, i, l));
    } finally {
      (Mn(u), (In.transition = p), gt === wn && Eu());
    }
  }
  function Qa(e) {
    Li !== null && Li.tag === wi && (gt & (Hn | Pr)) === wn && Ka();
    var t = gt;
    gt |= NE;
    var n = In.transition,
      i = jr();
    try {
      return ((In.transition = null), Mn(Sr), e ? e() : void 0);
    } finally {
      (Mn(i), (In.transition = n), (gt = t), (gt & (Hn | Pr)) === wn && Ci());
    }
  }
  function jE() {
    return (gt & (Hn | Pr)) !== wn;
  }
  function Zf(e, t) {
    (Wn(lm, ba, e), (ba = ut(ba, t)));
  }
  function mm(e) {
    ((ba = lm.current), Gn(lm, e));
  }
  function Co(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = de));
    var n = e.timeoutHandle;
    if ((n !== dv && ((e.timeoutHandle = dv), nD(n)), en !== null))
      for (var i = en.return; i !== null; ) {
        var l = i.alternate;
        (gE(l, i), (i = i.return));
      }
    tr = e;
    var u = xo(e.current, null);
    return (
      (en = u),
      (Cn = ba = t),
      (Tn = qa),
      (gu = null),
      (Gf = de),
      (bu = de),
      (Wf = de),
      (Su = null),
      (dr = null),
      T1(),
      Gr.discardPendingWarnings(),
      u
    );
  }
  function $E(e, t) {
    do {
      var n = en;
      try {
        if (
          (uf(),
          vS(),
          _n(),
          (im.current = null),
          n === null || n.return === null)
        ) {
          ((Tn = mu), (gu = t), (en = null));
          return;
        }
        if (($ && n.mode & Nt && Ff(n, !0), Ve))
          if (
            (Go(),
            t !== null && typeof t == 'object' && typeof t.then == 'function')
          ) {
            var i = t;
            i0(n, i, Cn);
          } else a0(n, t, Cn);
        (Z1(e, n.return, n, t, Cn), qE(n));
      } catch (l) {
        ((t = l),
          en === n && n !== null ? ((n = n.return), (en = n)) : (n = en));
        continue;
      }
      return;
    } while (!0);
  }
  function YE() {
    var e = am.current;
    return ((am.current = kf), e === null ? kf : e);
  }
  function GE(e) {
    am.current = e;
  }
  function AA() {
    sm = Dn();
  }
  function xu(e) {
    Gf = ut(e, Gf);
  }
  function MA() {
    Tn === qa && (Tn = Yf);
  }
  function ym() {
    ((Tn === qa || Tn === Yf || Tn === Eo) && (Tn = yu),
      tr !== null && (kp(Gf) || kp(bu)) && Ni(tr, Cn));
  }
  function LA(e) {
    (Tn !== yu && (Tn = Eo), Su === null ? (Su = [e]) : Su.push(e));
  }
  function kA() {
    return Tn === qa;
  }
  function ed(e, t) {
    var n = gt;
    gt |= Hn;
    var i = YE();
    if (tr !== e || Cn !== t) {
      if (Br) {
        var l = e.memoizedUpdaters;
        (l.size > 0 && (Ru(e, Cn), l.clear()), Tg(e, t));
      }
      ((Xa = xg()), Co(e, t));
    }
    pg(t);
    do
      try {
        NA();
        break;
      } catch (u) {
        $E(e, u);
      }
    while (!0);
    if ((uf(), (gt = n), GE(i), en !== null))
      throw new Error(
        'Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.'
      );
    return (vg(), (tr = null), (Cn = de), Tn);
  }
  function NA() {
    for (; en !== null; ) WE(en);
  }
  function PA(e, t) {
    var n = gt;
    gt |= Hn;
    var i = YE();
    if (tr !== e || Cn !== t) {
      if (Br) {
        var l = e.memoizedUpdaters;
        (l.size > 0 && (Ru(e, Cn), l.clear()), Tg(e, t));
      }
      ((Xa = xg()), Eu(), Co(e, t));
    }
    pg(t);
    do
      try {
        zA();
        break;
      } catch (u) {
        $E(e, u);
      }
    while (!0);
    return (
      uf(),
      GE(i),
      (gt = n),
      en !== null ? (c0(), qa) : (vg(), (tr = null), (Cn = de), Tn)
    );
  }
  function zA() {
    for (; en !== null && !Fx(); ) WE(en);
  }
  function WE(e) {
    var t = e.alternate;
    Zt(e);
    var n;
    ((e.mode & Nt) !== je
      ? (Sh(e), (n = gm(t, e, ba)), Ff(e, !0))
      : (n = gm(t, e, ba)),
      _n(),
      (e.memoizedProps = e.pendingProps),
      n === null ? qE(e) : (en = n),
      (im.current = null));
  }
  function qE(e) {
    var t = e;
    do {
      var n = t.alternate,
        i = t.return;
      if ((t.flags & ss) === qe) {
        Zt(t);
        var l = void 0;
        if (
          ((t.mode & Nt) === je
            ? (l = yE(n, t, ba))
            : (Sh(t), (l = yE(n, t, ba)), Ff(t, !1)),
          _n(),
          l !== null)
        ) {
          en = l;
          return;
        }
      } else {
        var u = MO(n, t);
        if (u !== null) {
          ((u.flags &= Lx), (en = u));
          return;
        }
        if ((t.mode & Nt) !== je) {
          Ff(t, !1);
          for (var p = t.actualDuration, v = t.child; v !== null; )
            ((p += v.actualDuration), (v = v.sibling));
          t.actualDuration = p;
        }
        if (i !== null)
          ((i.flags |= ss), (i.subtreeFlags = qe), (i.deletions = null));
        else {
          ((Tn = om), (en = null));
          return;
        }
      }
      var y = t.sibling;
      if (y !== null) {
        en = y;
        return;
      }
      ((t = i), (en = t));
    } while (t !== null);
    Tn === qa && (Tn = PE);
  }
  function To(e, t, n) {
    var i = jr(),
      l = In.transition;
    try {
      ((In.transition = null), Mn(Sr), UA(e, t, n, i));
    } finally {
      ((In.transition = l), Mn(i));
    }
    return null;
  }
  function UA(e, t, n, i) {
    do Ka();
    while (Li !== null);
    if ((qA(), (gt & (Hn | Pr)) !== wn))
      throw new Error('Should not already be working.');
    var l = e.finishedWork,
      u = e.finishedLanes;
    if ((Kx(u), l === null)) return (cg(), null);
    if (
      (u === de &&
        d(
          'root.finishedLanes should not be empty during a commit. This is a bug in React.'
        ),
      (e.finishedWork = null),
      (e.finishedLanes = de),
      l === e.current)
    )
      throw new Error(
        'Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.'
      );
    ((e.callbackNode = null), (e.callbackPriority = An));
    var p = ut(l.lanes, l.childLanes);
    (D0(e, p),
      e === tr && ((tr = null), (en = null), (Cn = de)),
      ((l.subtreeFlags & $o) !== qe || (l.flags & $o) !== qe) &&
        (wo ||
          ((wo = !0),
          (fm = n),
          Em(no, function () {
            return (Ka(), null);
          }))));
    var v = (l.subtreeFlags & (lp | sp | us | $o)) !== qe,
      y = (l.flags & (lp | sp | us | $o)) !== qe;
    if (v || y) {
      var w = In.transition;
      In.transition = null;
      var C = jr();
      Mn(Sr);
      var P = gt;
      ((gt |= Pr),
        (im.current = null),
        zO(e, l),
        VS(),
        QO(e, l, u),
        X_(e.containerInfo),
        (e.current = l),
        o0(u),
        KO(l, e, u),
        l0(),
        Vx(),
        (gt = P),
        Mn(C),
        (In.transition = w));
    } else ((e.current = l), VS());
    var N = wo;
    if (
      (wo ? ((wo = !1), (Li = e), (wu = u)) : ((Rl = 0), (Qf = null)),
      (p = e.pendingLanes),
      p === de && (xl = null),
      N || JE(e.current, !1),
      Gx(l.stateNode, i),
      Br && e.memoizedUpdaters.clear(),
      mA(),
      pr(e, Dn()),
      t !== null)
    )
      for (var j = e.onRecoverableError, G = 0; G < t.length; G++) {
        var K = t[G],
          De = K.stack,
          He = K.digest;
        j(K.value, { componentStack: De, digest: He });
      }
    if (qf) {
      qf = !1;
      var ze = um;
      throw ((um = null), ze);
    }
    return (
      br(wu, nt) && e.tag !== wi && Ka(),
      (p = e.pendingLanes),
      br(p, nt) ? (B1(), e === dm ? Cu++ : ((Cu = 0), (dm = e))) : (Cu = 0),
      Ci(),
      cg(),
      null
    );
  }
  function Ka() {
    if (Li !== null) {
      var e = Rg(wu),
        t = L0(Ia, e),
        n = In.transition,
        i = jr();
      try {
        return ((In.transition = null), Mn(t), VA());
      } finally {
        (Mn(i), (In.transition = n));
      }
    }
    return !1;
  }
  function FA(e) {
    (cm.push(e),
      wo ||
        ((wo = !0),
        Em(no, function () {
          return (Ka(), null);
        })));
  }
  function VA() {
    if (Li === null) return !1;
    var e = fm;
    fm = null;
    var t = Li,
      n = wu;
    if (((Li = null), (wu = de), (gt & (Hn | Pr)) !== wn))
      throw new Error('Cannot flush passive effects while already rendering.');
    ((pm = !0), (Xf = !1), s0(n));
    var i = gt;
    ((gt |= Pr), aA(t.current), eA(t, t.current, n, e));
    {
      var l = cm;
      cm = [];
      for (var u = 0; u < l.length; u++) {
        var p = l[u];
        IO(t, p);
      }
    }
    (u0(),
      JE(t.current, !0),
      (gt = i),
      Ci(),
      Xf ? (t === Qf ? Rl++ : ((Rl = 0), (Qf = t))) : (Rl = 0),
      (pm = !1),
      (Xf = !1),
      Wx(t));
    {
      var v = t.current.stateNode;
      ((v.effectDuration = 0), (v.passiveEffectDuration = 0));
    }
    return !0;
  }
  function XE(e) {
    return xl !== null && xl.has(e);
  }
  function IA(e) {
    xl === null ? (xl = new Set([e])) : xl.add(e);
  }
  function HA(e) {
    qf || ((qf = !0), (um = e));
  }
  var BA = HA;
  function QE(e, t, n) {
    var i = bo(n, t),
      l = WS(e, i, nt),
      u = xi(e, l, nt),
      p = nr();
    u !== null && (ys(u, nt, p), pr(u, p));
  }
  function Ht(e, t, n) {
    if ((kO(n), _u(!1), e.tag === E)) {
      QE(e, e, n);
      return;
    }
    var i = null;
    for (i = t; i !== null; ) {
      if (i.tag === E) {
        QE(i, e, n);
        return;
      } else if (i.tag === g) {
        var l = i.type,
          u = i.stateNode;
        if (
          typeof l.getDerivedStateFromError == 'function' ||
          (typeof u.componentDidCatch == 'function' && !XE(u))
        ) {
          var p = bo(n, e),
            v = Fh(i, p, nt),
            y = xi(i, v, nt),
            w = nr();
          y !== null && (ys(y, nt, w), pr(y, w));
          return;
        }
      }
      i = i.return;
    }
    d(
      `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
      n
    );
  }
  function jA(e, t, n) {
    var i = e.pingCache;
    i !== null && i.delete(t);
    var l = nr();
    (wg(e, n),
      JA(e),
      tr === e &&
        Qo(Cn, n) &&
        (Tn === yu || (Tn === Yf && gg(Cn) && Dn() - sm < zE)
          ? Co(e, de)
          : (Wf = ut(Wf, n))),
      pr(e, l));
  }
  function KE(e, t) {
    t === An && (t = CA(e));
    var n = nr(),
      i = cr(e, t);
    i !== null && (ys(i, t, n), pr(i, n));
  }
  function $A(e) {
    var t = e.memoizedState,
      n = An;
    (t !== null && (n = t.retryLane), KE(e, n));
  }
  function YA(e, t) {
    var n = An,
      i;
    switch (e.tag) {
      case F:
        i = e.stateNode;
        var l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case ue:
        i = e.stateNode;
        break;
      default:
        throw new Error(
          'Pinged unknown suspense boundary type. This is probably a bug in React.'
        );
    }
    (i !== null && i.delete(t), KE(e, n));
  }
  function GA(e) {
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
                : bA(e / 1960) * 1960;
  }
  function WA() {
    if (Cu > EA)
      throw (
        (Cu = 0),
        (dm = null),
        new Error(
          'Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.'
        )
      );
    Rl > wA &&
      ((Rl = 0),
      (Qf = null),
      d(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      ));
  }
  function qA() {
    (Gr.flushLegacyContextWarning(), Gr.flushPendingUnsafeLifecycleWarnings());
  }
  function JE(e, t) {
    (Zt(e),
      td(e, za, pA),
      t && td(e, pc, vA),
      td(e, za, fA),
      t && td(e, pc, dA),
      _n());
  }
  function td(e, t, n) {
    for (var i = e, l = null; i !== null; ) {
      var u = i.subtreeFlags & t;
      i !== l && i.child !== null && u !== qe
        ? (i = i.child)
        : ((i.flags & t) !== qe && n(i),
          i.sibling !== null ? (i = i.sibling) : (i = l = i.return));
    }
  }
  var nd = null;
  function ZE(e) {
    {
      if ((gt & Hn) !== wn || !(e.mode & yt)) return;
      var t = e.tag;
      if (
        t !== S &&
        t !== E &&
        t !== g &&
        t !== m &&
        t !== z &&
        t !== te &&
        t !== ae
      )
        return;
      var n = st(e) || 'ReactComponent';
      if (nd !== null) {
        if (nd.has(n)) return;
        nd.add(n);
      } else nd = new Set([n]);
      var i = $n;
      try {
        (Zt(e),
          d(
            "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead."
          ));
      } finally {
        i ? Zt(e) : _n();
      }
    }
  }
  var gm;
  {
    var XA = null;
    gm = function (e, t, n) {
      var i = lw(XA, t);
      try {
        return dE(e, t, n);
      } catch (u) {
        if (
          l1() ||
          (u !== null && typeof u == 'object' && typeof u.then == 'function')
        )
          throw u;
        if (
          (uf(),
          vS(),
          gE(e, t),
          lw(t, i),
          t.mode & Nt && Sh(t),
          tp(null, dE, null, e, t, n),
          Dx())
        ) {
          var l = np();
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
  var ew = !1,
    bm;
  bm = new Set();
  function QA(e) {
    if (qi && !V1())
      switch (e.tag) {
        case m:
        case z:
        case ae: {
          var t = (en && st(en)) || 'Unknown',
            n = t;
          if (!bm.has(n)) {
            bm.add(n);
            var i = st(e) || 'Unknown';
            d(
              'Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render',
              i,
              t,
              t
            );
          }
          break;
        }
        case g: {
          ew ||
            (d(
              'Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state.'
            ),
            (ew = !0));
          break;
        }
      }
  }
  function Ru(e, t) {
    if (Br) {
      var n = e.memoizedUpdaters;
      n.forEach(function (i) {
        Cg(e, i, t);
      });
    }
  }
  var Sm = {};
  function Em(e, t) {
    {
      var n = ea.current;
      return n !== null ? (n.push(t), Sm) : ug(e, t);
    }
  }
  function tw(e) {
    if (e !== Sm) return Ux(e);
  }
  function nw() {
    return ea.current !== null;
  }
  function KA(e) {
    {
      if (e.mode & yt) {
        if (!kE()) return;
      } else if (
        !gA() ||
        gt !== wn ||
        (e.tag !== m && e.tag !== z && e.tag !== ae)
      )
        return;
      if (ea.current === null) {
        var t = $n;
        try {
          (Zt(e),
            d(
              `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`,
              st(e)
            ));
        } finally {
          t ? Zt(e) : _n();
        }
      }
    }
  }
  function JA(e) {
    e.tag !== wi &&
      kE() &&
      ea.current === null &&
      d(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
  }
  function _u(e) {
    VE = e;
  }
  var zr = null,
    _l = null,
    ZA = function (e) {
      zr = e;
    };
  function Dl(e) {
    {
      if (zr === null) return e;
      var t = zr(e);
      return t === void 0 ? e : t.current;
    }
  }
  function wm(e) {
    return Dl(e);
  }
  function Cm(e) {
    {
      if (zr === null) return e;
      var t = zr(e);
      if (t === void 0) {
        if (e != null && typeof e.render == 'function') {
          var n = Dl(e.render);
          if (e.render !== n) {
            var i = { $$typeof: ge, render: n };
            return (
              e.displayName !== void 0 && (i.displayName = e.displayName),
              i
            );
          }
        }
        return e;
      }
      return t.current;
    }
  }
  function rw(e, t) {
    {
      if (zr === null) return !1;
      var n = e.elementType,
        i = t.type,
        l = !1,
        u = typeof i == 'object' && i !== null ? i.$$typeof : null;
      switch (e.tag) {
        case g: {
          typeof i == 'function' && (l = !0);
          break;
        }
        case m: {
          (typeof i == 'function' || u === We) && (l = !0);
          break;
        }
        case z: {
          (u === ge || u === We) && (l = !0);
          break;
        }
        case te:
        case ae: {
          (u === Et || u === We) && (l = !0);
          break;
        }
        default:
          return !1;
      }
      if (l) {
        var p = zr(n);
        if (p !== void 0 && p === zr(i)) return !0;
      }
      return !1;
    }
  }
  function aw(e) {
    {
      if (zr === null || typeof WeakSet != 'function') return;
      (_l === null && (_l = new WeakSet()), _l.add(e));
    }
  }
  var eM = function (e, t) {
      {
        if (zr === null) return;
        var n = t.staleFamilies,
          i = t.updatedFamilies;
        (Ka(),
          Qa(function () {
            Tm(e.current, i, n);
          }));
      }
    },
    tM = function (e, t) {
      {
        if (e.context !== Cr) return;
        (Ka(),
          Qa(function () {
            Du(t, e, null, null);
          }));
      }
    };
  function Tm(e, t, n) {
    {
      var i = e.alternate,
        l = e.child,
        u = e.sibling,
        p = e.tag,
        v = e.type,
        y = null;
      switch (p) {
        case m:
        case ae:
        case g:
          y = v;
          break;
        case z:
          y = v.render;
          break;
      }
      if (zr === null)
        throw new Error('Expected resolveFamily to be set during hot reload.');
      var w = !1,
        C = !1;
      if (y !== null) {
        var P = zr(y);
        P !== void 0 &&
          (n.has(P) ? (C = !0) : t.has(P) && (p === g ? (C = !0) : (w = !0)));
      }
      if (
        (_l !== null && (_l.has(e) || (i !== null && _l.has(i))) && (C = !0),
        C && (e._debugNeedsRemount = !0),
        C || w)
      ) {
        var N = cr(e, nt);
        N !== null && xn(N, e, nt, $t);
      }
      (l !== null && !C && Tm(l, t, n), u !== null && Tm(u, t, n));
    }
  }
  var nM = function (e, t) {
    {
      var n = new Set(),
        i = new Set(
          t.map(function (l) {
            return l.current;
          })
        );
      return (xm(e.current, i, n), n);
    }
  };
  function xm(e, t, n) {
    {
      var i = e.child,
        l = e.sibling,
        u = e.tag,
        p = e.type,
        v = null;
      switch (u) {
        case m:
        case ae:
        case g:
          v = p;
          break;
        case z:
          v = p.render;
          break;
      }
      var y = !1;
      (v !== null && t.has(v) && (y = !0),
        y ? rM(e, n) : i !== null && xm(i, t, n),
        l !== null && xm(l, t, n));
    }
  }
  function rM(e, t) {
    {
      var n = aM(e, t);
      if (n) return;
      for (var i = e; ; ) {
        switch (i.tag) {
          case D:
            t.add(i.stateNode);
            return;
          case T:
            t.add(i.stateNode.containerInfo);
            return;
          case E:
            t.add(i.stateNode.containerInfo);
            return;
        }
        if (i.return === null) throw new Error('Expected to reach root first.');
        i = i.return;
      }
    }
  }
  function aM(e, t) {
    for (var n = e, i = !1; ; ) {
      if (n.tag === D) ((i = !0), t.add(n.stateNode));
      else if (n.child !== null) {
        ((n.child.return = n), (n = n.child));
        continue;
      }
      if (n === e) return i;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return i;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
    return !1;
  }
  var Rm;
  {
    Rm = !1;
    try {
      var iw = Object.preventExtensions({});
    } catch {
      Rm = !0;
    }
  }
  function iM(e, t, n, i) {
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
      (this.mode = i),
      (this.flags = qe),
      (this.subtreeFlags = qe),
      (this.deletions = null),
      (this.lanes = de),
      (this.childLanes = de),
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
      !Rm &&
        typeof Object.preventExtensions == 'function' &&
        Object.preventExtensions(this));
  }
  var Tr = function (e, t, n, i) {
    return new iM(e, t, n, i);
  };
  function _m(e) {
    var t = e.prototype;
    return !!(t && t.isReactComponent);
  }
  function oM(e) {
    return typeof e == 'function' && !_m(e) && e.defaultProps === void 0;
  }
  function lM(e) {
    if (typeof e == 'function') return _m(e) ? g : m;
    if (e != null) {
      var t = e.$$typeof;
      if (t === ge) return z;
      if (t === Et) return te;
    }
    return S;
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
        (n.flags = qe),
        (n.subtreeFlags = qe),
        (n.deletions = null),
        (n.actualDuration = 0),
        (n.actualStartTime = -1)),
      (n.flags = e.flags & Ua),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue));
    var i = e.dependencies;
    switch (
      ((n.dependencies =
        i === null ? null : { lanes: i.lanes, firstContext: i.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      (n.selfBaseDuration = e.selfBaseDuration),
      (n.treeBaseDuration = e.treeBaseDuration),
      (n._debugNeedsRemount = e._debugNeedsRemount),
      n.tag)
    ) {
      case S:
      case m:
      case ae:
        n.type = Dl(e.type);
        break;
      case g:
        n.type = wm(e.type);
        break;
      case z:
        n.type = Cm(e.type);
        break;
    }
    return n;
  }
  function sM(e, t) {
    e.flags &= Ua | pn;
    var n = e.alternate;
    if (n === null)
      ((e.childLanes = de),
        (e.lanes = t),
        (e.child = null),
        (e.subtreeFlags = qe),
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
        (e.subtreeFlags = qe),
        (e.deletions = null),
        (e.memoizedProps = n.memoizedProps),
        (e.memoizedState = n.memoizedState),
        (e.updateQueue = n.updateQueue),
        (e.type = n.type));
      var i = n.dependencies;
      ((e.dependencies =
        i === null ? null : { lanes: i.lanes, firstContext: i.firstContext }),
        (e.selfBaseDuration = n.selfBaseDuration),
        (e.treeBaseDuration = n.treeBaseDuration));
    }
    return e;
  }
  function uM(e, t, n) {
    var i;
    return (
      e === Jc ? ((i = yt), t === !0 && ((i |= on), (i |= ua))) : (i = je),
      Br && (i |= Nt),
      Tr(E, null, null, i)
    );
  }
  function Dm(e, t, n, i, l, u) {
    var p = S,
      v = e;
    if (typeof e == 'function') _m(e) ? ((p = g), (v = wm(v))) : (v = Dl(v));
    else if (typeof e == 'string') p = D;
    else
      e: switch (e) {
        case ia:
          return Pi(n.children, l, u, t);
        case Gi:
          ((p = k), (l |= on), (l & yt) !== je && (l |= ua));
          break;
        case ai:
          return cM(n, l, u, t);
        case $e:
          return fM(n, l, u, t);
        case ht:
          return dM(n, l, u, t);
        case jt:
          return ow(n, l, u, t);
        case Xt:
        case ct:
        case jn:
        case oa:
        case yn:
        default: {
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case M:
                p = R;
                break e;
              case fe:
                p = L;
                break e;
              case ge:
                ((p = z), (v = Cm(v)));
                break e;
              case Et:
                p = te;
                break e;
              case We:
                ((p = le), (v = null));
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
            var w = i ? st(i) : null;
            w &&
              (y +=
                `

Check the render method of \`` +
                w +
                '`.');
          }
          throw new Error(
            'Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) ' +
              ('but got: ' + (e == null ? e : typeof e) + '.' + y)
          );
        }
      }
    var C = Tr(p, n, t, l);
    return (
      (C.elementType = e),
      (C.type = v),
      (C.lanes = u),
      (C._debugOwner = i),
      C
    );
  }
  function Om(e, t, n) {
    var i = null;
    i = e._owner;
    var l = e.type,
      u = e.key,
      p = e.props,
      v = Dm(l, u, p, i, t, n);
    return ((v._debugSource = e._source), (v._debugOwner = e._owner), v);
  }
  function Pi(e, t, n, i) {
    var l = Tr(x, e, i, t);
    return ((l.lanes = n), l);
  }
  function cM(e, t, n, i) {
    typeof e.id != 'string' &&
      d(
        'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
        typeof e.id
      );
    var l = Tr(U, e, i, t | Nt);
    return (
      (l.elementType = ai),
      (l.lanes = n),
      (l.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }),
      l
    );
  }
  function fM(e, t, n, i) {
    var l = Tr(F, e, i, t);
    return ((l.elementType = $e), (l.lanes = n), l);
  }
  function dM(e, t, n, i) {
    var l = Tr(ue, e, i, t);
    return ((l.elementType = ht), (l.lanes = n), l);
  }
  function ow(e, t, n, i) {
    var l = Tr(W, e, i, t);
    ((l.elementType = jt), (l.lanes = n));
    var u = { isHidden: !1 };
    return ((l.stateNode = u), l);
  }
  function Am(e, t, n) {
    var i = Tr(O, e, null, t);
    return ((i.lanes = n), i);
  }
  function pM() {
    var e = Tr(D, null, null, je);
    return ((e.elementType = 'DELETED'), e);
  }
  function vM(e) {
    var t = Tr(ee, null, null, je);
    return ((t.stateNode = e), t);
  }
  function Mm(e, t, n) {
    var i = e.children !== null ? e.children : [],
      l = Tr(T, i, e.key, t);
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
  function lw(e, t) {
    return (
      e === null && (e = Tr(S, null, null, je)),
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
  function hM(e, t, n, i, l) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.pendingChildren = null),
      (this.current = null),
      (this.pingCache = null),
      (this.finishedWork = null),
      (this.timeoutHandle = dv),
      (this.context = null),
      (this.pendingContext = null),
      (this.callbackNode = null),
      (this.callbackPriority = An),
      (this.eventTimes = Pp(de)),
      (this.expirationTimes = Pp($t)),
      (this.pendingLanes = de),
      (this.suspendedLanes = de),
      (this.pingedLanes = de),
      (this.expiredLanes = de),
      (this.mutableReadLanes = de),
      (this.finishedLanes = de),
      (this.entangledLanes = de),
      (this.entanglements = Pp(de)),
      (this.identifierPrefix = i),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null),
      (this.effectDuration = 0),
      (this.passiveEffectDuration = 0));
    {
      this.memoizedUpdaters = new Set();
      for (var u = (this.pendingUpdatersLaneMap = []), p = 0; p < dp; p++)
        u.push(new Set());
    }
    switch (t) {
      case Jc:
        this._debugRootType = n ? 'hydrateRoot()' : 'createRoot()';
        break;
      case wi:
        this._debugRootType = n ? 'hydrate()' : 'render()';
        break;
    }
  }
  function sw(e, t, n, i, l, u, p, v, y, w) {
    var C = new hM(e, t, n, v, y),
      P = uM(t, u);
    ((C.current = P), (P.stateNode = C));
    {
      var N = {
        element: i,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      };
      P.memoizedState = N;
    }
    return ($v(P), C);
  }
  var Lm = '18.3.1';
  function mM(e, t, n) {
    var i =
      arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
    return (
      sn(i),
      {
        $$typeof: Ir,
        key: i == null ? null : '' + i,
        children: e,
        containerInfo: t,
        implementation: n,
      }
    );
  }
  var km, Nm;
  ((km = !1), (Nm = {}));
  function uw(e) {
    if (!e) return Cr;
    var t = Bo(e),
      n = JD(t);
    if (t.tag === g) {
      var i = t.type;
      if (da(i)) return zb(t, i, n);
    }
    return n;
  }
  function yM(e, t) {
    {
      var n = Bo(e);
      if (n === void 0) {
        if (typeof e.render == 'function')
          throw new Error('Unable to find node on an unmounted component.');
        var i = Object.keys(e).join(',');
        throw new Error(
          'Argument appears to not be a ReactComponent. Keys: ' + i
        );
      }
      var l = og(n);
      if (l === null) return null;
      if (l.mode & on) {
        var u = st(n) || 'Component';
        if (!Nm[u]) {
          Nm[u] = !0;
          var p = $n;
          try {
            (Zt(l),
              n.mode & on
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
            p ? Zt(p) : _n();
          }
        }
      }
      return l.stateNode;
    }
  }
  function cw(e, t, n, i, l, u, p, v) {
    var y = !1,
      w = null;
    return sw(e, t, y, w, n, i, l, u, p);
  }
  function fw(e, t, n, i, l, u, p, v, y, w) {
    var C = !0,
      P = sw(n, i, C, e, l, u, p, v, y);
    P.context = uw(null);
    var N = P.current,
      j = nr(),
      G = ki(N),
      K = Ga(j, G);
    return ((K.callback = t ?? null), xi(N, K, G), TA(P, G, j), P);
  }
  function Du(e, t, n, i) {
    Yx(t, e);
    var l = t.current,
      u = nr(),
      p = ki(l);
    f0(p);
    var v = uw(n);
    (t.context === null ? (t.context = v) : (t.pendingContext = v),
      qi &&
        $n !== null &&
        !km &&
        ((km = !0),
        d(
          `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
          st($n) || 'Unknown'
        )));
    var y = Ga(u, p);
    ((y.payload = { element: e }),
      (i = i === void 0 ? null : i),
      i !== null &&
        (typeof i != 'function' &&
          d(
            'render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.',
            i
          ),
        (y.callback = i)));
    var w = xi(l, y, p);
    return (w !== null && (xn(w, l, p, u), vf(w, l, p)), p);
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
  function gM(e) {
    switch (e.tag) {
      case E: {
        var t = e.stateNode;
        if (wc(t)) {
          var n = S0(t);
          DA(t, n);
        }
        break;
      }
      case F: {
        Qa(function () {
          var l = cr(e, nt);
          if (l !== null) {
            var u = nr();
            xn(l, e, nt, u);
          }
        });
        var i = nt;
        Pm(e, i);
        break;
      }
    }
  }
  function dw(e, t) {
    var n = e.memoizedState;
    n !== null && n.dehydrated !== null && (n.retryLane = R0(n.retryLane, t));
  }
  function Pm(e, t) {
    dw(e, t);
    var n = e.alternate;
    n && dw(n, t);
  }
  function bM(e) {
    if (e.tag === F) {
      var t = ps,
        n = cr(e, t);
      if (n !== null) {
        var i = nr();
        xn(n, e, t, i);
      }
      Pm(e, t);
    }
  }
  function SM(e) {
    if (e.tag === F) {
      var t = ki(e),
        n = cr(e, t);
      if (n !== null) {
        var i = nr();
        xn(n, e, t, i);
      }
      Pm(e, t);
    }
  }
  function pw(e) {
    var t = zx(e);
    return t === null ? null : t.stateNode;
  }
  var vw = function (e) {
    return null;
  };
  function EM(e) {
    return vw(e);
  }
  var hw = function (e) {
    return !1;
  };
  function wM(e) {
    return hw(e);
  }
  var mw = null,
    yw = null,
    gw = null,
    bw = null,
    Sw = null,
    Ew = null,
    ww = null,
    Cw = null,
    Tw = null;
  {
    var xw = function (e, t, n) {
        var i = t[n],
          l = _t(e) ? e.slice() : ft({}, e);
        return n + 1 === t.length
          ? (_t(l) ? l.splice(i, 1) : delete l[i], l)
          : ((l[i] = xw(e[i], t, n + 1)), l);
      },
      Rw = function (e, t) {
        return xw(e, t, 0);
      },
      _w = function (e, t, n, i) {
        var l = t[i],
          u = _t(e) ? e.slice() : ft({}, e);
        if (i + 1 === t.length) {
          var p = n[i];
          ((u[p] = u[l]), _t(u) ? u.splice(l, 1) : delete u[l]);
        } else u[l] = _w(e[l], t, n, i + 1);
        return u;
      },
      Dw = function (e, t, n) {
        if (t.length !== n.length) {
          f('copyWithRename() expects paths of the same length');
          return;
        } else
          for (var i = 0; i < n.length - 1; i++)
            if (t[i] !== n[i]) {
              f(
                'copyWithRename() expects paths to be the same except for the deepest key'
              );
              return;
            }
        return _w(e, t, n, 0);
      },
      Ow = function (e, t, n, i) {
        if (n >= t.length) return i;
        var l = t[n],
          u = _t(e) ? e.slice() : ft({}, e);
        return ((u[l] = Ow(e[l], t, n + 1, i)), u);
      },
      Aw = function (e, t, n) {
        return Ow(e, t, 0, n);
      },
      zm = function (e, t) {
        for (var n = e.memoizedState; n !== null && t > 0; )
          ((n = n.next), t--);
        return n;
      };
    ((mw = function (e, t, n, i) {
      var l = zm(e, t);
      if (l !== null) {
        var u = Aw(l.memoizedState, n, i);
        ((l.memoizedState = u),
          (l.baseState = u),
          (e.memoizedProps = ft({}, e.memoizedProps)));
        var p = cr(e, nt);
        p !== null && xn(p, e, nt, $t);
      }
    }),
      (yw = function (e, t, n) {
        var i = zm(e, t);
        if (i !== null) {
          var l = Rw(i.memoizedState, n);
          ((i.memoizedState = l),
            (i.baseState = l),
            (e.memoizedProps = ft({}, e.memoizedProps)));
          var u = cr(e, nt);
          u !== null && xn(u, e, nt, $t);
        }
      }),
      (gw = function (e, t, n, i) {
        var l = zm(e, t);
        if (l !== null) {
          var u = Dw(l.memoizedState, n, i);
          ((l.memoizedState = u),
            (l.baseState = u),
            (e.memoizedProps = ft({}, e.memoizedProps)));
          var p = cr(e, nt);
          p !== null && xn(p, e, nt, $t);
        }
      }),
      (bw = function (e, t, n) {
        ((e.pendingProps = Aw(e.memoizedProps, t, n)),
          e.alternate && (e.alternate.pendingProps = e.pendingProps));
        var i = cr(e, nt);
        i !== null && xn(i, e, nt, $t);
      }),
      (Sw = function (e, t) {
        ((e.pendingProps = Rw(e.memoizedProps, t)),
          e.alternate && (e.alternate.pendingProps = e.pendingProps));
        var n = cr(e, nt);
        n !== null && xn(n, e, nt, $t);
      }),
      (Ew = function (e, t, n) {
        ((e.pendingProps = Dw(e.memoizedProps, t, n)),
          e.alternate && (e.alternate.pendingProps = e.pendingProps));
        var i = cr(e, nt);
        i !== null && xn(i, e, nt, $t);
      }),
      (ww = function (e) {
        var t = cr(e, nt);
        t !== null && xn(t, e, nt, $t);
      }),
      (Cw = function (e) {
        vw = e;
      }),
      (Tw = function (e) {
        hw = e;
      }));
  }
  function CM(e) {
    var t = og(e);
    return t === null ? null : t.stateNode;
  }
  function TM(e) {
    return null;
  }
  function xM() {
    return $n;
  }
  function RM(e) {
    var t = e.findFiberByHostInstance,
      n = o.ReactCurrentDispatcher;
    return $x({
      bundleType: e.bundleType,
      version: e.version,
      rendererPackageName: e.rendererPackageName,
      rendererConfig: e.rendererConfig,
      overrideHookState: mw,
      overrideHookStateDeletePath: yw,
      overrideHookStateRenamePath: gw,
      overrideProps: bw,
      overridePropsDeletePath: Sw,
      overridePropsRenamePath: Ew,
      setErrorHandler: Cw,
      setSuspenseHandler: Tw,
      scheduleUpdate: ww,
      currentDispatcherRef: n,
      findHostInstanceByFiber: CM,
      findFiberByHostInstance: t || TM,
      findHostInstancesForRefresh: nM,
      scheduleRefresh: eM,
      scheduleRoot: tM,
      setRefreshHandler: ZA,
      getCurrentFiber: xM,
      reconcilerVersion: Lm,
    });
  }
  var Mw =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Um(e) {
    this._internalRoot = e;
  }
  ((ad.prototype.render = Um.prototype.render =
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
        if (n.nodeType !== dn) {
          var i = pw(t.current);
          i &&
            i.parentNode !== n &&
            d(
              "render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container."
            );
        }
      }
      Du(e, t, null, null);
    }),
    (ad.prototype.unmount = Um.prototype.unmount =
      function () {
        typeof arguments[0] == 'function' &&
          d(
            'unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().'
          );
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (jE() &&
            d(
              'Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition.'
            ),
            Qa(function () {
              Du(null, e, null, null);
            }),
            Mb(t));
        }
      }));
  function _M(e, t) {
    if (!id(e))
      throw new Error(
        'createRoot(...): Target container is not a DOM element.'
      );
    Lw(e);
    var n = !1,
      i = !1,
      l = '',
      u = Mw;
    t != null &&
      (t.hydrate
        ? f(
            'hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.'
          )
        : typeof t == 'object' &&
          t !== null &&
          t.$$typeof === Vr &&
          d(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`),
      t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (u = t.onRecoverableError),
      t.transitionCallbacks !== void 0 && t.transitionCallbacks);
    var p = cw(e, Jc, null, n, i, l, u);
    Yc(p.current, e);
    var v = e.nodeType === dn ? e.parentNode : e;
    return (Ns(v), new Um(p));
  }
  function ad(e) {
    this._internalRoot = e;
  }
  function DM(e) {
    e && j0(e);
  }
  ad.prototype.unstable_scheduleHydration = DM;
  function OM(e, t, n) {
    if (!id(e))
      throw new Error(
        'hydrateRoot(...): Target container is not a DOM element.'
      );
    (Lw(e),
      t === void 0 &&
        d(
          'Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)'
        ));
    var i = n ?? null,
      l = (n != null && n.hydratedSources) || null,
      u = !1,
      p = !1,
      v = '',
      y = Mw;
    n != null &&
      (n.unstable_strictMode === !0 && (u = !0),
      n.identifierPrefix !== void 0 && (v = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (y = n.onRecoverableError));
    var w = fw(t, null, e, Jc, i, u, p, v, y);
    if ((Yc(w.current, e), Ns(e), l))
      for (var C = 0; C < l.length; C++) {
        var P = l[C];
        k1(w, P);
      }
    return new ad(w);
  }
  function id(e) {
    return !!(
      e &&
      (e.nodeType === sr || e.nodeType === ka || e.nodeType === $d || !we)
    );
  }
  function Ou(e) {
    return !!(
      e &&
      (e.nodeType === sr ||
        e.nodeType === ka ||
        e.nodeType === $d ||
        (e.nodeType === dn && e.nodeValue === ' react-mount-point-unstable '))
    );
  }
  function Lw(e) {
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
  var AM = o.ReactCurrentOwner,
    kw;
  kw = function (e) {
    if (e._reactRootContainer && e.nodeType !== dn) {
      var t = pw(e._reactRootContainer.current);
      t &&
        t.parentNode !== e &&
        d(
          'render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.'
        );
    }
    var n = !!e._reactRootContainer,
      i = Fm(e),
      l = !!(i && Si(i));
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
  function Fm(e) {
    return e ? (e.nodeType === ka ? e.documentElement : e.firstChild) : null;
  }
  function Nw() {}
  function MM(e, t, n, i, l) {
    if (l) {
      if (typeof i == 'function') {
        var u = i;
        i = function () {
          var N = rd(p);
          u.call(N);
        };
      }
      var p = fw(t, i, e, wi, null, !1, !1, '', Nw);
      ((e._reactRootContainer = p), Yc(p.current, e));
      var v = e.nodeType === dn ? e.parentNode : e;
      return (Ns(v), Qa(), p);
    } else {
      for (var y; (y = e.lastChild); ) e.removeChild(y);
      if (typeof i == 'function') {
        var w = i;
        i = function () {
          var N = rd(C);
          w.call(N);
        };
      }
      var C = cw(e, wi, null, !1, !1, '', Nw);
      ((e._reactRootContainer = C), Yc(C.current, e));
      var P = e.nodeType === dn ? e.parentNode : e;
      return (
        Ns(P),
        Qa(function () {
          Du(t, C, n, i);
        }),
        C
      );
    }
  }
  function LM(e, t) {
    e !== null &&
      typeof e != 'function' &&
      d(
        '%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.',
        t,
        e
      );
  }
  function od(e, t, n, i, l) {
    (kw(n), LM(l === void 0 ? null : l, 'render'));
    var u = n._reactRootContainer,
      p;
    if (!u) p = MM(n, t, e, l, i);
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
  var Pw = !1;
  function kM(e) {
    {
      Pw ||
        ((Pw = !0),
        d(
          'findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node'
        ));
      var t = AM.current;
      if (t !== null && t.stateNode !== null) {
        var n = t.stateNode._warnedAboutRefsInRender;
        (n ||
          d(
            '%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.',
            wt(t.type) || 'A component'
          ),
          (t.stateNode._warnedAboutRefsInRender = !0));
      }
    }
    return e == null ? null : e.nodeType === sr ? e : yM(e, 'findDOMNode');
  }
  function NM(e, t, n) {
    if (
      (d(
        "ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"
      ),
      !Ou(t))
    )
      throw new Error('Target container is not a DOM element.');
    {
      var i = Ys(t) && t._reactRootContainer === void 0;
      i &&
        d(
          'You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?'
        );
    }
    return od(null, e, t, !0, n);
  }
  function PM(e, t, n) {
    if (
      (d(
        "ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"
      ),
      !Ou(t))
    )
      throw new Error('Target container is not a DOM element.');
    {
      var i = Ys(t) && t._reactRootContainer === void 0;
      i &&
        d(
          'You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?'
        );
    }
    return od(null, e, t, !1, n);
  }
  function zM(e, t, n, i) {
    if (
      (d(
        "ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"
      ),
      !Ou(n))
    )
      throw new Error('Target container is not a DOM element.');
    if (e == null || !Ox(e))
      throw new Error('parentComponent must be a valid React Component');
    return od(e, t, n, !1, i);
  }
  var zw = !1;
  function UM(e) {
    if (
      (zw ||
        ((zw = !0),
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
        var n = Fm(e),
          i = n && !Si(n);
        i &&
          d(
            "unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React."
          );
      }
      return (
        Qa(function () {
          od(null, null, e, !1, function () {
            ((e._reactRootContainer = null), Mb(e));
          });
        }),
        !0
      );
    } else {
      {
        var l = Fm(e),
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
  (k0(gM),
    P0(bM),
    z0(SM),
    U0(jr),
    F0(A0),
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
    gx(V_),
    Ex(hm, OA, Qa));
  function FM(e, t) {
    var n =
      arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    if (!id(t)) throw new Error('Target container is not a DOM element.');
    return mM(e, t, null, n);
  }
  function VM(e, t, n, i) {
    return zM(e, t, n, i);
  }
  var Vm = { usingClientEntryPoint: !1, Events: [Si, il, Gc, qy, Xy, hm] };
  function IM(e, t) {
    return (
      Vm.usingClientEntryPoint ||
        d(
          'You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'
        ),
      _M(e, t)
    );
  }
  function HM(e, t, n) {
    return (
      Vm.usingClientEntryPoint ||
        d(
          'You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'
        ),
      OM(e, t, n)
    );
  }
  function BM(e) {
    return (
      jE() &&
        d(
          'flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.'
        ),
      Qa(e)
    );
  }
  var jM = RM({
    findFiberByHostInstance: uo,
    bundleType: 1,
    version: Lm,
    rendererPackageName: 'react-dom',
  });
  if (
    !jM &&
    ot &&
    window.top === window.self &&
    ((navigator.userAgent.indexOf('Chrome') > -1 &&
      navigator.userAgent.indexOf('Edge') === -1) ||
      navigator.userAgent.indexOf('Firefox') > -1)
  ) {
    var Uw = window.location.protocol;
    /^(https?|file):$/.test(Uw) &&
      console.info(
        '%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools' +
          (Uw === 'file:'
            ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq`
            : ''),
        'font-weight:bold'
      );
  }
  ((Rr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vm),
    (Rr.createPortal = FM),
    (Rr.createRoot = IM),
    (Rr.findDOMNode = kM),
    (Rr.flushSync = BM),
    (Rr.hydrate = NM),
    (Rr.hydrateRoot = HM),
    (Rr.render = PM),
    (Rr.unmountComponentAtNode = UM),
    (Rr.unstable_batchedUpdates = hm),
    (Rr.unstable_renderSubtreeIntoContainer = VM),
    (Rr.version = Lm),
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' &&
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ==
        'function' &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error()));
})();
LC.exports = Rr;
var QM = LC.exports,
  PC,
  Fw = QM;
{
  var Vw = Fw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  PC = function (r, a, o) {
    Vw.usingClientEntryPoint = !0;
    try {
      return Fw.hydrateRoot(r, a, o);
    } finally {
      Vw.usingClientEntryPoint = !1;
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
          for (var a = 1; a < arguments.length; a++) {
            var o = arguments[a];
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
const Iw = 'popstate';
function KM(r) {
  r === void 0 && (r = {});
  function a(s, c) {
    let { pathname: f, search: d, hash: h } = s.location;
    return ey(
      '',
      { pathname: f, search: d, hash: h },
      (c.state && c.state.usr) || null,
      (c.state && c.state.key) || 'default'
    );
  }
  function o(s, c) {
    return typeof c == 'string' ? c : Fu(c);
  }
  return ZM(a, o, null, r);
}
function tn(r, a) {
  if (r === !1 || r === null || typeof r > 'u') throw new Error(a);
}
function Ta(r, a) {
  if (!r) {
    typeof console < 'u' && console.warn(a);
    try {
      throw new Error(a);
    } catch {}
  }
}
function JM() {
  return Math.random().toString(36).substr(2, 8);
}
function Hw(r, a) {
  return { usr: r.state, key: r.key, idx: a };
}
function ey(r, a, o, s) {
  return (
    o === void 0 && (o = null),
    Uu(
      { pathname: typeof r == 'string' ? r : r.pathname, search: '', hash: '' },
      typeof a == 'string' ? zl(a) : a,
      { state: o, key: (a && a.key) || s || JM() }
    )
  );
}
function Fu(r) {
  let { pathname: a = '/', search: o = '', hash: s = '' } = r;
  return (
    o && o !== '?' && (a += o.charAt(0) === '?' ? o : '?' + o),
    s && s !== '#' && (a += s.charAt(0) === '#' ? s : '#' + s),
    a
  );
}
function zl(r) {
  let a = {};
  if (r) {
    let o = r.indexOf('#');
    o >= 0 && ((a.hash = r.substr(o)), (r = r.substr(0, o)));
    let s = r.indexOf('?');
    (s >= 0 && ((a.search = r.substr(s)), (r = r.substr(0, s))),
      r && (a.pathname = r));
  }
  return a;
}
function ZM(r, a, o, s) {
  s === void 0 && (s = {});
  let { window: c = document.defaultView, v5Compat: f = !1 } = s,
    d = c.history,
    h = Vi.Pop,
    m = null,
    g = S();
  g == null && ((g = 0), d.replaceState(Uu({}, d.state, { idx: g }), ''));
  function S() {
    return (d.state || { idx: null }).idx;
  }
  function E() {
    h = Vi.Pop;
    let k = S(),
      L = k == null ? null : k - g;
    ((g = k), m && m({ action: h, location: x.location, delta: L }));
  }
  function T(k, L) {
    h = Vi.Push;
    let R = ey(x.location, k, L);
    (o && o(R, k), (g = S() + 1));
    let z = Hw(R, g),
      U = x.createHref(R);
    try {
      d.pushState(z, '', U);
    } catch (F) {
      if (F instanceof DOMException && F.name === 'DataCloneError') throw F;
      c.location.assign(U);
    }
    f && m && m({ action: h, location: x.location, delta: 1 });
  }
  function D(k, L) {
    h = Vi.Replace;
    let R = ey(x.location, k, L);
    (o && o(R, k), (g = S()));
    let z = Hw(R, g),
      U = x.createHref(R);
    (d.replaceState(z, '', U),
      f && m && m({ action: h, location: x.location, delta: 0 }));
  }
  function O(k) {
    let L = c.location.origin !== 'null' ? c.location.origin : c.location.href,
      R = typeof k == 'string' ? k : Fu(k);
    return (
      (R = R.replace(/ $/, '%20')),
      tn(
        L,
        'No window.location.(origin|href) available to create URL for href: ' +
          R
      ),
      new URL(R, L)
    );
  }
  let x = {
    get action() {
      return h;
    },
    get location() {
      return r(c, d);
    },
    listen(k) {
      if (m) throw new Error('A history only accepts one active listener');
      return (
        c.addEventListener(Iw, E),
        (m = k),
        () => {
          (c.removeEventListener(Iw, E), (m = null));
        }
      );
    },
    createHref(k) {
      return a(c, k);
    },
    createURL: O,
    encodeLocation(k) {
      let L = O(k);
      return { pathname: L.pathname, search: L.search, hash: L.hash };
    },
    push: T,
    replace: D,
    go(k) {
      return d.go(k);
    },
  };
  return x;
}
var Bw;
(function (r) {
  ((r.data = 'data'),
    (r.deferred = 'deferred'),
    (r.redirect = 'redirect'),
    (r.error = 'error'));
})(Bw || (Bw = {}));
function eL(r, a, o) {
  return (o === void 0 && (o = '/'), tL(r, a, o, !1));
}
function tL(r, a, o, s) {
  let c = typeof a == 'string' ? zl(a) : a,
    f = Bi(c.pathname || '/', o);
  if (f == null) return null;
  let d = zC(r);
  nL(d);
  let h = null;
  for (let m = 0; h == null && m < d.length; ++m) {
    let g = pL(f);
    h = fL(d[m], g, s);
  }
  return h;
}
function zC(r, a, o, s) {
  (a === void 0 && (a = []),
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
      (tn(
        m.relativePath.startsWith(s),
        'Absolute route path "' +
          m.relativePath +
          '" nested under path ' +
          ('"' + s + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (m.relativePath = m.relativePath.slice(s.length)));
    let g = ni([s, m.relativePath]),
      S = o.concat(m);
    (f.children &&
      f.children.length > 0 &&
      (tn(
        f.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + g + '".')
      ),
      zC(f.children, a, S, g)),
      !(f.path == null && !f.index) &&
        a.push({ path: g, score: uL(g, f.index), routesMeta: S }));
  };
  return (
    r.forEach((f, d) => {
      var h;
      if (f.path === '' || !((h = f.path) != null && h.includes('?'))) c(f, d);
      else for (let m of UC(f.path)) c(f, d, m);
    }),
    a
  );
}
function UC(r) {
  let a = r.split('/');
  if (a.length === 0) return [];
  let [o, ...s] = a,
    c = o.endsWith('?'),
    f = o.replace(/\?$/, '');
  if (s.length === 0) return c ? [f, ''] : [f];
  let d = UC(s.join('/')),
    h = [];
  return (
    h.push(...d.map((m) => (m === '' ? f : [f, m].join('/')))),
    c && h.push(...d),
    h.map((m) => (r.startsWith('/') && m === '' ? '/' : m))
  );
}
function nL(r) {
  r.sort((a, o) =>
    a.score !== o.score
      ? o.score - a.score
      : cL(
          a.routesMeta.map((s) => s.childrenIndex),
          o.routesMeta.map((s) => s.childrenIndex)
        )
  );
}
const rL = /^:[\w-]+$/,
  aL = 3,
  iL = 2,
  oL = 1,
  lL = 10,
  sL = -2,
  jw = (r) => r === '*';
function uL(r, a) {
  let o = r.split('/'),
    s = o.length;
  return (
    o.some(jw) && (s += sL),
    a && (s += iL),
    o
      .filter((c) => !jw(c))
      .reduce((c, f) => c + (rL.test(f) ? aL : f === '' ? oL : lL), s)
  );
}
function cL(r, a) {
  return r.length === a.length && r.slice(0, -1).every((s, c) => s === a[c])
    ? r[r.length - 1] - a[a.length - 1]
    : 0;
}
function fL(r, a, o) {
  o === void 0 && (o = !1);
  let { routesMeta: s } = r,
    c = {},
    f = '/',
    d = [];
  for (let h = 0; h < s.length; ++h) {
    let m = s[h],
      g = h === s.length - 1,
      S = f === '/' ? a : a.slice(f.length) || '/',
      E = Sd(
        { path: m.relativePath, caseSensitive: m.caseSensitive, end: g },
        S
      ),
      T = m.route;
    if (
      (!E &&
        g &&
        o &&
        !s[s.length - 1].route.index &&
        (E = Sd(
          { path: m.relativePath, caseSensitive: m.caseSensitive, end: !1 },
          S
        )),
      !E)
    )
      return null;
    (Object.assign(c, E.params),
      d.push({
        params: c,
        pathname: ni([f, E.pathname]),
        pathnameBase: yL(ni([f, E.pathnameBase])),
        route: T,
      }),
      E.pathnameBase !== '/' && (f = ni([f, E.pathnameBase])));
  }
  return d;
}
function Sd(r, a) {
  typeof r == 'string' && (r = { path: r, caseSensitive: !1, end: !0 });
  let [o, s] = dL(r.path, r.caseSensitive, r.end),
    c = a.match(o);
  if (!c) return null;
  let f = c[0],
    d = f.replace(/(.)\/+$/, '$1'),
    h = c.slice(1);
  return {
    params: s.reduce((g, S, E) => {
      let { paramName: T, isOptional: D } = S;
      if (T === '*') {
        let x = h[E] || '';
        d = f.slice(0, f.length - x.length).replace(/(.)\/+$/, '$1');
      }
      const O = h[E];
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
function dL(r, a, o) {
  (a === void 0 && (a = !1),
    o === void 0 && (o = !0),
    Ta(
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
    [new RegExp(c, a ? void 0 : 'i'), s]
  );
}
function pL(r) {
  try {
    return r
      .split('/')
      .map((a) => decodeURIComponent(a).replace(/\//g, '%2F'))
      .join('/');
  } catch (a) {
    return (
      Ta(
        !1,
        'The URL path "' +
          r +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + a + ').')
      ),
      r
    );
  }
}
function Bi(r, a) {
  if (a === '/') return r;
  if (!r.toLowerCase().startsWith(a.toLowerCase())) return null;
  let o = a.endsWith('/') ? a.length - 1 : a.length,
    s = r.charAt(o);
  return s && s !== '/' ? null : r.slice(o) || '/';
}
function vL(r, a) {
  a === void 0 && (a = '/');
  let {
    pathname: o,
    search: s = '',
    hash: c = '',
  } = typeof r == 'string' ? zl(r) : r;
  return {
    pathname: o ? (o.startsWith('/') ? o : hL(o, a)) : a,
    search: gL(s),
    hash: bL(c),
  };
}
function hL(r, a) {
  let o = a.replace(/\/+$/, '').split('/');
  return (
    r.split('/').forEach((c) => {
      c === '..' ? o.length > 1 && o.pop() : c !== '.' && o.push(c);
    }),
    o.length > 1 ? o.join('/') : '/'
  );
}
function Im(r, a, o, s) {
  return (
    "Cannot include a '" +
    r +
    "' character in a manually specified " +
    ('`to.' +
      a +
      '` field [' +
      JSON.stringify(s) +
      '].  Please separate it out to the ') +
    ('`to.' + o + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function mL(r) {
  return r.filter(
    (a, o) => o === 0 || (a.route.path && a.route.path.length > 0)
  );
}
function FC(r, a) {
  let o = mL(r);
  return a
    ? o.map((s, c) => (c === o.length - 1 ? s.pathname : s.pathnameBase))
    : o.map((s) => s.pathnameBase);
}
function VC(r, a, o, s) {
  s === void 0 && (s = !1);
  let c;
  typeof r == 'string'
    ? (c = zl(r))
    : ((c = Uu({}, r)),
      tn(
        !c.pathname || !c.pathname.includes('?'),
        Im('?', 'pathname', 'search', c)
      ),
      tn(
        !c.pathname || !c.pathname.includes('#'),
        Im('#', 'pathname', 'hash', c)
      ),
      tn(!c.search || !c.search.includes('#'), Im('#', 'search', 'hash', c)));
  let f = r === '' || c.pathname === '',
    d = f ? '/' : c.pathname,
    h;
  if (d == null) h = o;
  else {
    let E = a.length - 1;
    if (!s && d.startsWith('..')) {
      let T = d.split('/');
      for (; T[0] === '..'; ) (T.shift(), (E -= 1));
      c.pathname = T.join('/');
    }
    h = E >= 0 ? a[E] : '/';
  }
  let m = vL(c, h),
    g = d && d !== '/' && d.endsWith('/'),
    S = (f || d === '.') && o.endsWith('/');
  return (!m.pathname.endsWith('/') && (g || S) && (m.pathname += '/'), m);
}
const ni = (r) => r.join('/').replace(/\/\/+/g, '/'),
  yL = (r) => r.replace(/\/+$/, '').replace(/^\/*/, '/'),
  gL = (r) => (!r || r === '?' ? '' : r.startsWith('?') ? r : '?' + r),
  bL = (r) => (!r || r === '#' ? '' : r.startsWith('#') ? r : '#' + r);
function SL(r) {
  return (
    r != null &&
    typeof r.status == 'number' &&
    typeof r.statusText == 'string' &&
    typeof r.internal == 'boolean' &&
    'data' in r
  );
}
const IC = ['post', 'put', 'patch', 'delete'];
new Set(IC);
const EL = ['get', ...IC];
new Set(EL);
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
          for (var a = 1; a < arguments.length; a++) {
            var o = arguments[a];
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
const fy = Z.createContext(null);
fy.displayName = 'DataRouterState';
const wL = Z.createContext(null);
wL.displayName = 'Await';
const ra = Z.createContext(null);
ra.displayName = 'Navigation';
const ju = Z.createContext(null);
ju.displayName = 'Location';
const xa = Z.createContext({ outlet: null, matches: [], isDataRoute: !1 });
xa.displayName = 'Route';
const dy = Z.createContext(null);
dy.displayName = 'RouteError';
function CL(r, a) {
  let { relative: o } = a === void 0 ? {} : a;
  $u() ||
    tn(
      !1,
      'useHref() may be used only in the context of a <Router> component.'
    );
  let { basename: s, navigator: c } = Z.useContext(ra),
    { hash: f, pathname: d, search: h } = Yu(r, { relative: o }),
    m = d;
  return (
    s !== '/' && (m = d === '/' ? s : ni([s, d])),
    c.createHref({ pathname: m, search: h, hash: f })
  );
}
function $u() {
  return Z.useContext(ju) != null;
}
function Ul() {
  return (
    $u() ||
      tn(
        !1,
        'useLocation() may be used only in the context of a <Router> component.'
      ),
    Z.useContext(ju).location
  );
}
const HC =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function BC(r) {
  Z.useContext(ra).static || Z.useLayoutEffect(r);
}
function TL() {
  let { isDataRoute: r } = Z.useContext(xa);
  return r ? IL() : xL();
}
function xL() {
  $u() ||
    tn(
      !1,
      'useNavigate() may be used only in the context of a <Router> component.'
    );
  let r = Z.useContext(Bu),
    { basename: a, future: o, navigator: s } = Z.useContext(ra),
    { matches: c } = Z.useContext(xa),
    { pathname: f } = Ul(),
    d = JSON.stringify(FC(c, o.v7_relativeSplatPath)),
    h = Z.useRef(!1);
  return (
    BC(() => {
      h.current = !0;
    }),
    Z.useCallback(
      function (g, S) {
        if ((S === void 0 && (S = {}), Ta(h.current, HC), !h.current)) return;
        if (typeof g == 'number') {
          s.go(g);
          return;
        }
        let E = VC(g, JSON.parse(d), f, S.relative === 'path');
        (r == null &&
          a !== '/' &&
          (E.pathname = E.pathname === '/' ? a : ni([a, E.pathname])),
          (S.replace ? s.replace : s.push)(E, S.state, S));
      },
      [a, s, d, f, r]
    )
  );
}
const RL = Z.createContext(null);
function _L(r) {
  let a = Z.useContext(xa).outlet;
  return a && Z.createElement(RL.Provider, { value: r }, a);
}
function Yu(r, a) {
  let { relative: o } = a === void 0 ? {} : a,
    { future: s } = Z.useContext(ra),
    { matches: c } = Z.useContext(xa),
    { pathname: f } = Ul(),
    d = JSON.stringify(FC(c, s.v7_relativeSplatPath));
  return Z.useMemo(() => VC(r, JSON.parse(d), f, o === 'path'), [r, d, f, o]);
}
function DL(r, a) {
  return OL(r, a);
}
function OL(r, a, o, s) {
  $u() ||
    tn(
      !1,
      'useRoutes() may be used only in the context of a <Router> component.'
    );
  let { navigator: c } = Z.useContext(ra),
    { matches: f } = Z.useContext(xa),
    d = f[f.length - 1],
    h = d ? d.params : {},
    m = d ? d.pathname : '/',
    g = d ? d.pathnameBase : '/',
    S = d && d.route;
  {
    let R = (S && S.path) || '';
    $C(
      m,
      !S || R.endsWith('*'),
      'You rendered descendant <Routes> (or called `useRoutes()`) at ' +
        ('"' + m + '" (under <Route path="' + R + '">) but the ') +
        `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` +
        ('Please change the parent <Route path="' + R + '"> to <Route ') +
        ('path="' + (R === '/' ? '*' : R + '/*') + '">.')
    );
  }
  let E = Ul(),
    T;
  if (a) {
    var D;
    let R = typeof a == 'string' ? zl(a) : a;
    (g === '/' ||
      ((D = R.pathname) != null && D.startsWith(g)) ||
      tn(
        !1,
        'When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was ' +
          ('matched by all parent routes. The current pathname base is "' +
            g +
            '" ') +
          ('but pathname "' +
            R.pathname +
            '" was given in the `location` prop.')
      ),
      (T = R));
  } else T = E;
  let O = T.pathname || '/',
    x = O;
  if (g !== '/') {
    let R = g.replace(/^\//, '').split('/');
    x = '/' + O.replace(/^\//, '').split('/').slice(R.length).join('/');
  }
  let k = eL(r, { pathname: x });
  (Ta(
    S || k != null,
    'No routes matched location "' + T.pathname + T.search + T.hash + '" '
  ),
    Ta(
      k == null ||
        k[k.length - 1].route.element !== void 0 ||
        k[k.length - 1].route.Component !== void 0 ||
        k[k.length - 1].route.lazy !== void 0,
      'Matched leaf route at location "' +
        T.pathname +
        T.search +
        T.hash +
        '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.'
    ));
  let L = NL(
    k &&
      k.map((R) =>
        Object.assign({}, R, {
          params: Object.assign({}, h, R.params),
          pathname: ni([
            g,
            c.encodeLocation
              ? c.encodeLocation(R.pathname).pathname
              : R.pathname,
          ]),
          pathnameBase:
            R.pathnameBase === '/'
              ? g
              : ni([
                  g,
                  c.encodeLocation
                    ? c.encodeLocation(R.pathnameBase).pathname
                    : R.pathnameBase,
                ]),
        })
      ),
    f,
    o,
    s
  );
  return a && L
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
function AL() {
  let r = VL(),
    a = SL(r)
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
      Z.createElement('h3', { style: { fontStyle: 'italic' } }, a),
      o ? Z.createElement('pre', { style: c }, o) : null,
      d
    )
  );
}
const ML = Z.createElement(AL, null);
class LL extends Z.Component {
  constructor(a) {
    (super(a),
      (this.state = {
        location: a.location,
        revalidation: a.revalidation,
        error: a.error,
      }));
  }
  static getDerivedStateFromError(a) {
    return { error: a };
  }
  static getDerivedStateFromProps(a, o) {
    return o.location !== a.location ||
      (o.revalidation !== 'idle' && a.revalidation === 'idle')
      ? { error: a.error, location: a.location, revalidation: a.revalidation }
      : {
          error: a.error !== void 0 ? a.error : o.error,
          location: o.location,
          revalidation: a.revalidation || o.revalidation,
        };
  }
  componentDidCatch(a, o) {
    console.error(
      'React Router caught the following error during render',
      a,
      o
    );
  }
  render() {
    return this.state.error !== void 0
      ? Z.createElement(
          xa.Provider,
          { value: this.props.routeContext },
          Z.createElement(dy.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function kL(r) {
  let { routeContext: a, match: o, children: s } = r,
    c = Z.useContext(Bu);
  return (
    c &&
      c.static &&
      c.staticContext &&
      (o.route.errorElement || o.route.ErrorBoundary) &&
      (c.staticContext._deepestRenderedBoundaryId = o.route.id),
    Z.createElement(xa.Provider, { value: a }, s)
  );
}
function NL(r, a, o, s) {
  var c;
  if (
    (a === void 0 && (a = []),
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
      a.length === 0 &&
      !o.initialized &&
      o.matches.length > 0
    )
      r = o.matches;
    else return null;
  }
  let d = r,
    h = (c = o) == null ? void 0 : c.errors;
  if (h != null) {
    let S = d.findIndex(
      (E) => E.route.id && (h == null ? void 0 : h[E.route.id]) !== void 0
    );
    (S >= 0 ||
      tn(
        !1,
        'Could not find a matching route for errors on route IDs: ' +
          Object.keys(h).join(',')
      ),
      (d = d.slice(0, Math.min(d.length, S + 1))));
  }
  let m = !1,
    g = -1;
  if (o && s && s.v7_partialHydration)
    for (let S = 0; S < d.length; S++) {
      let E = d[S];
      if (
        ((E.route.HydrateFallback || E.route.hydrateFallbackElement) && (g = S),
        E.route.id)
      ) {
        let { loaderData: T, errors: D } = o,
          O =
            E.route.loader &&
            T[E.route.id] === void 0 &&
            (!D || D[E.route.id] === void 0);
        if (E.route.lazy || O) {
          ((m = !0), g >= 0 ? (d = d.slice(0, g + 1)) : (d = [d[0]]));
          break;
        }
      }
    }
  return d.reduceRight((S, E, T) => {
    let D,
      O = !1,
      x = null,
      k = null;
    o &&
      ((D = h && E.route.id ? h[E.route.id] : void 0),
      (x = E.route.errorElement || ML),
      m &&
        (g < 0 && T === 0
          ? ($C(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (O = !0),
            (k = null))
          : g === T &&
            ((O = !0), (k = E.route.hydrateFallbackElement || null))));
    let L = a.concat(d.slice(0, T + 1)),
      R = () => {
        let z;
        return (
          D
            ? (z = x)
            : O
              ? (z = k)
              : E.route.Component
                ? (z = Z.createElement(E.route.Component, null))
                : E.route.element
                  ? (z = E.route.element)
                  : (z = S),
          Z.createElement(kL, {
            match: E,
            routeContext: { outlet: S, matches: L, isDataRoute: o != null },
            children: z,
          })
        );
      };
    return o && (E.route.ErrorBoundary || E.route.errorElement || T === 0)
      ? Z.createElement(LL, {
          location: o.location,
          revalidation: o.revalidation,
          component: x,
          error: D,
          children: R(),
          routeContext: { outlet: null, matches: L, isDataRoute: !0 },
        })
      : R();
  }, null);
}
var jC = (function (r) {
    return (
      (r.UseBlocker = 'useBlocker'),
      (r.UseRevalidator = 'useRevalidator'),
      (r.UseNavigateStable = 'useNavigate'),
      r
    );
  })(jC || {}),
  Iu = (function (r) {
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
  })(Iu || {});
function py(r) {
  return (
    r +
    ' must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router.'
  );
}
function PL(r) {
  let a = Z.useContext(Bu);
  return (a || tn(!1, py(r)), a);
}
function zL(r) {
  let a = Z.useContext(fy);
  return (a || tn(!1, py(r)), a);
}
function UL(r) {
  let a = Z.useContext(xa);
  return (a || tn(!1, py(r)), a);
}
function vy(r) {
  let a = UL(r),
    o = a.matches[a.matches.length - 1];
  return (
    o.route.id ||
      tn(!1, r + ' can only be used on routes that contain a unique "id"'),
    o.route.id
  );
}
function FL() {
  return vy(Iu.UseRouteId);
}
function VL() {
  var r;
  let a = Z.useContext(dy),
    o = zL(Iu.UseRouteError),
    s = vy(Iu.UseRouteError);
  return a !== void 0 ? a : (r = o.errors) == null ? void 0 : r[s];
}
function IL() {
  let { router: r } = PL(jC.UseNavigateStable),
    a = vy(Iu.UseNavigateStable),
    o = Z.useRef(!1);
  return (
    BC(() => {
      o.current = !0;
    }),
    Z.useCallback(
      function (c, f) {
        (f === void 0 && (f = {}),
          Ta(o.current, HC),
          o.current &&
            (typeof c == 'number'
              ? r.navigate(c)
              : r.navigate(c, Vu({ fromRouteId: a }, f))));
      },
      [r, a]
    )
  );
}
const $w = {};
function $C(r, a, o) {
  !a && !$w[r] && (($w[r] = !0), Ta(!1, o));
}
const Yw = {};
function HL(r, a) {
  Yw[a] || ((Yw[a] = !0), console.warn(a));
}
const Al = (r, a, o) =>
  HL(
    r,
    '⚠️ React Router Future Flag Warning: ' +
      a +
      '. ' +
      ('You can use the `' + r + '` future flag to opt-in early. ') +
      ('For more information, see ' + o + '.')
  );
function BL(r, a) {
  ((r == null ? void 0 : r.v7_startTransition) === void 0 &&
    Al(
      'v7_startTransition',
      'React Router will begin wrapping state updates in `React.startTransition` in v7',
      'https://reactrouter.com/v6/upgrading/future#v7_starttransition'
    ),
    (r == null ? void 0 : r.v7_relativeSplatPath) === void 0 &&
      (!a || a.v7_relativeSplatPath === void 0) &&
      Al(
        'v7_relativeSplatPath',
        'Relative route resolution within Splat routes is changing in v7',
        'https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath'
      ),
    a &&
      (a.v7_fetcherPersist === void 0 &&
        Al(
          'v7_fetcherPersist',
          'The persistence behavior of fetchers is changing in v7',
          'https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist'
        ),
      a.v7_normalizeFormMethod === void 0 &&
        Al(
          'v7_normalizeFormMethod',
          'Casing of `formMethod` fields is being normalized to uppercase in v7',
          'https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod'
        ),
      a.v7_partialHydration === void 0 &&
        Al(
          'v7_partialHydration',
          '`RouterProvider` hydration behavior is changing in v7',
          'https://reactrouter.com/v6/upgrading/future#v7_partialhydration'
        ),
      a.v7_skipActionErrorRevalidation === void 0 &&
        Al(
          'v7_skipActionErrorRevalidation',
          'The revalidation behavior after 4xx/5xx `action` responses is changing in v7',
          'https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation'
        )));
}
function jL(r) {
  return _L(r.context);
}
function Ro(r) {
  tn(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
  );
}
function $L(r) {
  let {
    basename: a = '/',
    children: o = null,
    location: s,
    navigationType: c = Vi.Pop,
    navigator: f,
    static: d = !1,
    future: h,
  } = r;
  $u() &&
    tn(
      !1,
      'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
    );
  let m = a.replace(/^\/*/, '/'),
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
      pathname: S = '/',
      search: E = '',
      hash: T = '',
      state: D = null,
      key: O = 'default',
    } = s,
    x = Z.useMemo(() => {
      let k = Bi(S, m);
      return k == null
        ? null
        : {
            location: { pathname: k, search: E, hash: T, state: D, key: O },
            navigationType: c,
          };
    }, [m, S, E, T, D, O, c]);
  return (
    Ta(
      x != null,
      '<Router basename="' +
        m +
        '"> is not able to match the URL ' +
        ('"' + S + E + T + '" because it does not start with the ') +
        "basename, so the <Router> won't render anything."
    ),
    x == null
      ? null
      : Z.createElement(
          ra.Provider,
          { value: g },
          Z.createElement(ju.Provider, { children: o, value: x })
        )
  );
}
function YL(r) {
  let { children: a, location: o } = r;
  return DL(ty(a), o);
}
new Promise(() => {});
function ty(r, a) {
  a === void 0 && (a = []);
  let o = [];
  return (
    Z.Children.forEach(r, (s, c) => {
      if (!Z.isValidElement(s)) return;
      let f = [...a, c];
      if (s.type === Z.Fragment) {
        o.push.apply(o, ty(s.props.children, f));
        return;
      }
      (s.type !== Ro &&
        tn(
          !1,
          '[' +
            (typeof s.type == 'string' ? s.type : s.type.name) +
            '] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>'
        ),
        !s.props.index ||
          !s.props.children ||
          tn(!1, 'An index route cannot have child routes.'));
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
      (s.props.children && (d.children = ty(s.props.children, f)), o.push(d));
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
          for (var a = 1; a < arguments.length; a++) {
            var o = arguments[a];
            for (var s in o)
              Object.prototype.hasOwnProperty.call(o, s) && (r[s] = o[s]);
          }
          return r;
        }),
    kl.apply(this, arguments)
  );
}
function hy(r, a) {
  if (r == null) return {};
  var o = {},
    s = Object.keys(r),
    c,
    f;
  for (f = 0; f < s.length; f++)
    ((c = s[f]), !(a.indexOf(c) >= 0) && (o[c] = r[c]));
  return o;
}
const vd = 'get',
  hd = 'application/x-www-form-urlencoded';
function Md(r) {
  return r != null && typeof r.tagName == 'string';
}
function GL(r) {
  return Md(r) && r.tagName.toLowerCase() === 'button';
}
function WL(r) {
  return Md(r) && r.tagName.toLowerCase() === 'form';
}
function qL(r) {
  return Md(r) && r.tagName.toLowerCase() === 'input';
}
function XL(r) {
  return !!(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey);
}
function QL(r, a) {
  return r.button === 0 && (!a || a === '_self') && !XL(r);
}
let ld = null;
function KL() {
  if (ld === null)
    try {
      (new FormData(document.createElement('form'), 0), (ld = !1));
    } catch {
      ld = !0;
    }
  return ld;
}
const JL = new Set([
  'application/x-www-form-urlencoded',
  'multipart/form-data',
  'text/plain',
]);
function Hm(r) {
  return r != null && !JL.has(r)
    ? (Ta(
        !1,
        '"' +
          r +
          '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' +
          ('and will default to "' + hd + '"')
      ),
      null)
    : r;
}
function ZL(r, a) {
  let o, s, c, f, d;
  if (WL(r)) {
    let h = r.getAttribute('action');
    ((s = h ? Bi(h, a) : null),
      (o = r.getAttribute('method') || vd),
      (c = Hm(r.getAttribute('enctype')) || hd),
      (f = new FormData(r)));
  } else if (GL(r) || (qL(r) && (r.type === 'submit' || r.type === 'image'))) {
    let h = r.form;
    if (h == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let m = r.getAttribute('formaction') || h.getAttribute('action');
    if (
      ((s = m ? Bi(m, a) : null),
      (o = r.getAttribute('formmethod') || h.getAttribute('method') || vd),
      (c =
        Hm(r.getAttribute('formenctype')) ||
        Hm(h.getAttribute('enctype')) ||
        hd),
      (f = new FormData(h, r)),
      !KL())
    ) {
      let { name: g, type: S, value: E } = r;
      if (S === 'image') {
        let T = g ? g + '.' : '';
        (f.append(T + 'x', '0'), f.append(T + 'y', '0'));
      } else g && f.append(g, E);
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
const ek = [
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
  tk = [
    'aria-current',
    'caseSensitive',
    'className',
    'end',
    'style',
    'to',
    'viewTransition',
    'children',
  ],
  nk = [
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
  rk = '6';
try {
  window.__reactRouterVersion = rk;
} catch {}
const YC = Z.createContext({ isTransitioning: !1 });
YC.displayName = 'ViewTransition';
const ak = Z.createContext(new Map());
ak.displayName = 'Fetchers';
const ik = 'startTransition',
  Gw = qM[ik];
function ok(r) {
  let { basename: a, children: o, future: s, window: c } = r,
    f = Z.useRef();
  f.current == null && (f.current = KM({ window: c, v5Compat: !0 }));
  let d = f.current,
    [h, m] = Z.useState({ action: d.action, location: d.location }),
    { v7_startTransition: g } = s || {},
    S = Z.useCallback(
      (E) => {
        g && Gw ? Gw(() => m(E)) : m(E);
      },
      [m, g]
    );
  return (
    Z.useLayoutEffect(() => d.listen(S), [d, S]),
    Z.useEffect(() => BL(s), [s]),
    Z.createElement($L, {
      basename: a,
      children: o,
      location: h.location,
      navigationType: h.action,
      navigator: d,
      future: s,
    })
  );
}
const lk =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  sk = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ui = Z.forwardRef(function (a, o) {
    let {
        onClick: s,
        relative: c,
        reloadDocument: f,
        replace: d,
        state: h,
        target: m,
        to: g,
        preventScrollReset: S,
        viewTransition: E,
      } = a,
      T = hy(a, ek),
      { basename: D } = Z.useContext(ra),
      O,
      x = !1;
    if (typeof g == 'string' && sk.test(g) && ((O = g), lk))
      try {
        let z = new URL(window.location.href),
          U = g.startsWith('//') ? new URL(z.protocol + g) : new URL(g),
          F = Bi(U.pathname, D);
        U.origin === z.origin && F != null
          ? (g = F + U.search + U.hash)
          : (x = !0);
      } catch {
        Ta(
          !1,
          '<Link to="' +
            g +
            '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.'
        );
      }
    let k = CL(g, { relative: c }),
      L = dk(g, {
        replace: d,
        state: h,
        target: m,
        preventScrollReset: S,
        relative: c,
        viewTransition: E,
      });
    function R(z) {
      (s && s(z), z.defaultPrevented || L(z));
    }
    return Z.createElement(
      'a',
      kl({}, T, { href: O || k, onClick: x || f ? s : R, ref: o, target: m })
    );
  });
Ui.displayName = 'Link';
const uk = Z.forwardRef(function (a, o) {
  let {
      'aria-current': s = 'page',
      caseSensitive: c = !1,
      className: f = '',
      end: d = !1,
      style: h,
      to: m,
      viewTransition: g,
      children: S,
    } = a,
    E = hy(a, tk),
    T = Yu(m, { relative: E.relative }),
    D = Ul(),
    O = Z.useContext(fy),
    { navigator: x, basename: k } = Z.useContext(ra),
    L = O != null && gk(T) && g === !0,
    R = x.encodeLocation ? x.encodeLocation(T).pathname : T.pathname,
    z = D.pathname,
    U =
      O && O.navigation && O.navigation.location
        ? O.navigation.location.pathname
        : null;
  (c ||
    ((z = z.toLowerCase()),
    (U = U ? U.toLowerCase() : null),
    (R = R.toLowerCase())),
    U && k && (U = Bi(U, k) || U));
  const F = R !== '/' && R.endsWith('/') ? R.length - 1 : R.length;
  let te = z === R || (!d && z.startsWith(R) && z.charAt(F) === '/'),
    ae =
      U != null &&
      (U === R || (!d && U.startsWith(R) && U.charAt(R.length) === '/')),
    le = { isActive: te, isPending: ae, isTransitioning: L },
    ne = te ? s : void 0,
    ee;
  typeof f == 'function'
    ? (ee = f(le))
    : (ee = [
        f,
        te ? 'active' : null,
        ae ? 'pending' : null,
        L ? 'transitioning' : null,
      ]
        .filter(Boolean)
        .join(' '));
  let ue = typeof h == 'function' ? h(le) : h;
  return Z.createElement(
    Ui,
    kl({}, E, {
      'aria-current': ne,
      className: ee,
      ref: o,
      style: ue,
      to: m,
      viewTransition: g,
    }),
    typeof S == 'function' ? S(le) : S
  );
});
uk.displayName = 'NavLink';
const ck = Z.forwardRef((r, a) => {
  let {
      fetcherKey: o,
      navigate: s,
      reloadDocument: c,
      replace: f,
      state: d,
      method: h = vd,
      action: m,
      onSubmit: g,
      relative: S,
      preventScrollReset: E,
      viewTransition: T,
    } = r,
    D = hy(r, nk),
    O = mk(),
    x = yk(m, { relative: S }),
    k = h.toLowerCase() === 'get' ? 'get' : 'post',
    L = (R) => {
      if ((g && g(R), R.defaultPrevented)) return;
      R.preventDefault();
      let z = R.nativeEvent.submitter,
        U = (z == null ? void 0 : z.getAttribute('formmethod')) || h;
      O(z || R.currentTarget, {
        fetcherKey: o,
        method: U,
        navigate: s,
        replace: f,
        state: d,
        relative: S,
        preventScrollReset: E,
        viewTransition: T,
      });
    };
  return Z.createElement(
    'form',
    kl({ ref: a, method: k, action: x, onSubmit: c ? g : L }, D)
  );
});
ck.displayName = 'Form';
var Ed;
(function (r) {
  ((r.UseScrollRestoration = 'useScrollRestoration'),
    (r.UseSubmit = 'useSubmit'),
    (r.UseSubmitFetcher = 'useSubmitFetcher'),
    (r.UseFetcher = 'useFetcher'),
    (r.useViewTransitionState = 'useViewTransitionState'));
})(Ed || (Ed = {}));
var Ww;
(function (r) {
  ((r.UseFetcher = 'useFetcher'),
    (r.UseFetchers = 'useFetchers'),
    (r.UseScrollRestoration = 'useScrollRestoration'));
})(Ww || (Ww = {}));
function fk(r) {
  return (
    r +
    ' must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router.'
  );
}
function GC(r) {
  let a = Z.useContext(Bu);
  return (a || tn(!1, fk(r)), a);
}
function dk(r, a) {
  let {
      target: o,
      replace: s,
      state: c,
      preventScrollReset: f,
      relative: d,
      viewTransition: h,
    } = a === void 0 ? {} : a,
    m = TL(),
    g = Ul(),
    S = Yu(r, { relative: d });
  return Z.useCallback(
    (E) => {
      if (QL(E, o)) {
        E.preventDefault();
        let T = s !== void 0 ? s : Fu(g) === Fu(S);
        m(r, {
          replace: T,
          state: c,
          preventScrollReset: f,
          relative: d,
          viewTransition: h,
        });
      }
    },
    [g, m, S, s, c, o, r, f, d, h]
  );
}
function pk() {
  if (typeof document > 'u')
    throw new Error(
      'You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.'
    );
}
let vk = 0,
  hk = () => '__' + String(++vk) + '__';
function mk() {
  let { router: r } = GC(Ed.UseSubmit),
    { basename: a } = Z.useContext(ra),
    o = FL();
  return Z.useCallback(
    function (s, c) {
      (c === void 0 && (c = {}), pk());
      let { action: f, method: d, encType: h, formData: m, body: g } = ZL(s, a);
      if (c.navigate === !1) {
        let S = c.fetcherKey || hk();
        r.fetch(S, o, c.action || f, {
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
    [r, a, o]
  );
}
function yk(r, a) {
  let { relative: o } = a === void 0 ? {} : a,
    { basename: s } = Z.useContext(ra),
    c = Z.useContext(xa);
  c || tn(!1, 'useFormAction must be used inside a RouteContext');
  let [f] = c.matches.slice(-1),
    d = kl({}, Yu(r || '.', { relative: o })),
    h = Ul();
  if (r == null) {
    d.search = h.search;
    let m = new URLSearchParams(d.search),
      g = m.getAll('index');
    if (g.some((E) => E === '')) {
      (m.delete('index'),
        g.filter((T) => T).forEach((T) => m.append('index', T)));
      let E = m.toString();
      d.search = E ? '?' + E : '';
    }
  }
  return (
    (!r || r === '.') &&
      f.route.index &&
      (d.search = d.search ? d.search.replace(/^\?/, '?index&') : '?index'),
    s !== '/' && (d.pathname = d.pathname === '/' ? s : ni([s, d.pathname])),
    Fu(d)
  );
}
function gk(r, a) {
  a === void 0 && (a = {});
  let o = Z.useContext(YC);
  o == null &&
    tn(
      !1,
      "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
    );
  let { basename: s } = GC(Ed.useViewTransitionState),
    c = Yu(r, { relative: a.relative });
  if (!o.isTransitioning) return !1;
  let f = Bi(o.currentLocation.pathname, s) || o.currentLocation.pathname,
    d = Bi(o.nextLocation.pathname, s) || o.nextLocation.pathname;
  return Sd(c.pathname, d) != null || Sd(c.pathname, f) != null;
}
var WC = { exports: {} },
  Bt = {};
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
      var k = x.$$typeof;
      switch (k) {
        case a:
          switch (((x = x.type), x)) {
            case s:
            case f:
            case c:
            case g:
            case S:
            case D:
              return x;
            default:
              switch (((x = x && x.$$typeof), x)) {
                case h:
                case m:
                case T:
                case E:
                  return x;
                case d:
                  return x;
                default:
                  return k;
              }
          }
        case o:
          return k;
      }
    }
  }
  var a = Symbol.for('react.transitional.element'),
    o = Symbol.for('react.portal'),
    s = Symbol.for('react.fragment'),
    c = Symbol.for('react.strict_mode'),
    f = Symbol.for('react.profiler'),
    d = Symbol.for('react.consumer'),
    h = Symbol.for('react.context'),
    m = Symbol.for('react.forward_ref'),
    g = Symbol.for('react.suspense'),
    S = Symbol.for('react.suspense_list'),
    E = Symbol.for('react.memo'),
    T = Symbol.for('react.lazy'),
    D = Symbol.for('react.view_transition'),
    O = Symbol.for('react.client.reference');
  ((Bt.ContextConsumer = d),
    (Bt.ContextProvider = h),
    (Bt.Element = a),
    (Bt.ForwardRef = m),
    (Bt.Fragment = s),
    (Bt.Lazy = T),
    (Bt.Memo = E),
    (Bt.Portal = o),
    (Bt.Profiler = f),
    (Bt.StrictMode = c),
    (Bt.Suspense = g),
    (Bt.SuspenseList = S),
    (Bt.isContextConsumer = function (x) {
      return r(x) === d;
    }),
    (Bt.isContextProvider = function (x) {
      return r(x) === h;
    }),
    (Bt.isElement = function (x) {
      return typeof x == 'object' && x !== null && x.$$typeof === a;
    }),
    (Bt.isForwardRef = function (x) {
      return r(x) === m;
    }),
    (Bt.isFragment = function (x) {
      return r(x) === s;
    }),
    (Bt.isLazy = function (x) {
      return r(x) === T;
    }),
    (Bt.isMemo = function (x) {
      return r(x) === E;
    }),
    (Bt.isPortal = function (x) {
      return r(x) === o;
    }),
    (Bt.isProfiler = function (x) {
      return r(x) === f;
    }),
    (Bt.isStrictMode = function (x) {
      return r(x) === c;
    }),
    (Bt.isSuspense = function (x) {
      return r(x) === g;
    }),
    (Bt.isSuspenseList = function (x) {
      return r(x) === S;
    }),
    (Bt.isValidElementType = function (x) {
      return (
        typeof x == 'string' ||
        typeof x == 'function' ||
        x === s ||
        x === f ||
        x === c ||
        x === g ||
        x === S ||
        (typeof x == 'object' &&
          x !== null &&
          (x.$$typeof === T ||
            x.$$typeof === E ||
            x.$$typeof === h ||
            x.$$typeof === d ||
            x.$$typeof === m ||
            x.$$typeof === O ||
            x.getModuleId !== void 0))
      );
    }),
    (Bt.typeOf = r));
})();
WC.exports = Bt;
var my = WC.exports;
function bk(r) {
  function a(we, Ce, _e, Ve, $) {
    for (
      var Je = 0,
        ye = 0,
        it = 0,
        Xe = 0,
        Ze,
        se,
        ot = 0,
        dt = 0,
        Ie,
        vt = (Ie = Ze = 0),
        Ge = 0,
        Ot = 0,
        sn = 0,
        _ = 0,
        V = _e.length,
        q = V - 1,
        me,
        X = '',
        re = '',
        Me = '',
        Be = '',
        et;
      Ge < V;

    ) {
      if (
        ((se = _e.charCodeAt(Ge)),
        Ge === q &&
          ye + Xe + it + Je !== 0 &&
          (ye !== 0 && (se = ye === 47 ? 10 : 47),
          (Xe = it = Je = 0),
          V++,
          q++),
        ye + Xe + it + Je === 0)
      ) {
        if (
          Ge === q &&
          (0 < Ot && (X = X.replace(T, '')), 0 < X.trim().length)
        ) {
          switch (se) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              X += _e.charAt(Ge);
          }
          se = 59;
        }
        switch (se) {
          case 123:
            for (
              X = X.trim(), Ze = X.charCodeAt(0), Ie = 1, _ = ++Ge;
              Ge < V;

            ) {
              switch ((se = _e.charCodeAt(Ge))) {
                case 123:
                  Ie++;
                  break;
                case 125:
                  Ie--;
                  break;
                case 47:
                  switch ((se = _e.charCodeAt(Ge + 1))) {
                    case 42:
                    case 47:
                      e: {
                        for (vt = Ge + 1; vt < q; ++vt)
                          switch (_e.charCodeAt(vt)) {
                            case 47:
                              if (
                                se === 42 &&
                                _e.charCodeAt(vt - 1) === 42 &&
                                Ge + 2 !== vt
                              ) {
                                Ge = vt + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (se === 47) {
                                Ge = vt + 1;
                                break e;
                              }
                          }
                        Ge = vt;
                      }
                  }
                  break;
                case 91:
                  se++;
                case 40:
                  se++;
                case 34:
                case 39:
                  for (; Ge++ < q && _e.charCodeAt(Ge) !== se; );
              }
              if (Ie === 0) break;
              Ge++;
            }
            switch (
              ((Ie = _e.substring(_, Ge)),
              Ze === 0 && (Ze = (X = X.replace(E, '').trim()).charCodeAt(0)),
              Ze)
            ) {
              case 64:
                switch (
                  (0 < Ot && (X = X.replace(T, '')), (se = X.charCodeAt(1)), se)
                ) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    Ot = Ce;
                    break;
                  default:
                    Ot = ce;
                }
                if (
                  ((Ie = a(Ce, Ot, Ie, se, $ + 1)),
                  (_ = Ie.length),
                  0 < be &&
                    ((Ot = o(ce, X, sn)),
                    (et = h(3, Ie, Ot, Ce, W, B, _, se, $, Ve)),
                    (X = Ot.join('')),
                    et !== void 0 &&
                      (_ = (Ie = et.trim()).length) === 0 &&
                      ((se = 0), (Ie = ''))),
                  0 < _)
                )
                  switch (se) {
                    case 115:
                      X = X.replace(te, d);
                    case 100:
                    case 109:
                    case 45:
                      Ie = X + '{' + Ie + '}';
                      break;
                    case 107:
                      ((X = X.replace(R, '$1 $2')),
                        (Ie = X + '{' + Ie + '}'),
                        (Ie =
                          pe === 1 || (pe === 2 && f('@' + Ie, 3))
                            ? '@-webkit-' + Ie + '@' + Ie
                            : '@' + Ie));
                      break;
                    default:
                      ((Ie = X + Ie), Ve === 112 && (Ie = ((re += Ie), '')));
                  }
                else Ie = '';
                break;
              default:
                Ie = a(Ce, o(Ce, X, sn), Ie, Ve, $ + 1);
            }
            ((Me += Ie),
              (Ie = sn = Ot = vt = Ze = 0),
              (X = ''),
              (se = _e.charCodeAt(++Ge)));
            break;
          case 125:
          case 59:
            if (
              ((X = (0 < Ot ? X.replace(T, '') : X).trim()), 1 < (_ = X.length))
            )
              switch (
                (vt === 0 &&
                  ((Ze = X.charCodeAt(0)),
                  Ze === 45 || (96 < Ze && 123 > Ze)) &&
                  (_ = (X = X.replace(' ', ':')).length),
                0 < be &&
                  (et = h(1, X, Ce, we, W, B, re.length, Ve, $, Ve)) !==
                    void 0 &&
                  (_ = (X = et.trim()).length) === 0 &&
                  (X = '\0\0'),
                (Ze = X.charCodeAt(0)),
                (se = X.charCodeAt(1)),
                Ze)
              ) {
                case 0:
                  break;
                case 64:
                  if (se === 105 || se === 99) {
                    Be += X + _e.charAt(Ge);
                    break;
                  }
                default:
                  X.charCodeAt(_ - 1) !== 58 &&
                    (re += c(X, Ze, se, X.charCodeAt(2)));
              }
            ((sn = Ot = vt = Ze = 0), (X = ''), (se = _e.charCodeAt(++Ge)));
        }
      }
      switch (se) {
        case 13:
        case 10:
          (ye === 47
            ? (ye = 0)
            : 1 + Ze === 0 &&
              Ve !== 107 &&
              0 < X.length &&
              ((Ot = 1), (X += '\0')),
            0 < be * Ye && h(0, X, Ce, we, W, B, re.length, Ve, $, Ve),
            (B = 1),
            W++);
          break;
        case 59:
        case 125:
          if (ye + Xe + it + Je === 0) {
            B++;
            break;
          }
        default:
          switch ((B++, (me = _e.charAt(Ge)), se)) {
            case 9:
            case 32:
              if (Xe + Je + ye === 0)
                switch (ot) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    me = '';
                    break;
                  default:
                    se !== 32 && (me = ' ');
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
              Xe + ye + Je === 0 && ((Ot = sn = 1), (me = '\f' + me));
              break;
            case 108:
              if (Xe + ye + Je + ie === 0 && 0 < vt)
                switch (Ge - vt) {
                  case 2:
                    ot === 112 && _e.charCodeAt(Ge - 3) === 58 && (ie = ot);
                  case 8:
                    dt === 111 && (ie = dt);
                }
              break;
            case 58:
              Xe + ye + Je === 0 && (vt = Ge);
              break;
            case 44:
              ye + it + Xe + Je === 0 && ((Ot = 1), (me += '\r'));
              break;
            case 34:
            case 39:
              ye === 0 && (Xe = Xe === se ? 0 : Xe === 0 ? se : Xe);
              break;
            case 91:
              Xe + ye + it === 0 && Je++;
              break;
            case 93:
              Xe + ye + it === 0 && Je--;
              break;
            case 41:
              Xe + ye + Je === 0 && it--;
              break;
            case 40:
              if (Xe + ye + Je === 0) {
                if (Ze === 0)
                  switch (2 * ot + 3 * dt) {
                    case 533:
                      break;
                    default:
                      Ze = 1;
                  }
                it++;
              }
              break;
            case 64:
              ye + it + Xe + Je + vt + Ie === 0 && (Ie = 1);
              break;
            case 42:
            case 47:
              if (!(0 < Xe + Je + it))
                switch (ye) {
                  case 0:
                    switch (2 * se + 3 * _e.charCodeAt(Ge + 1)) {
                      case 235:
                        ye = 47;
                        break;
                      case 220:
                        ((_ = Ge), (ye = 42));
                    }
                    break;
                  case 42:
                    se === 47 &&
                      ot === 42 &&
                      _ + 2 !== Ge &&
                      (_e.charCodeAt(_ + 2) === 33 &&
                        (re += _e.substring(_, Ge + 1)),
                      (me = ''),
                      (ye = 0));
                }
          }
          ye === 0 && (X += me);
      }
      ((dt = ot), (ot = se), Ge++);
    }
    if (((_ = re.length), 0 < _)) {
      if (
        ((Ot = Ce),
        0 < be &&
          ((et = h(2, re, Ot, we, W, B, _, Ve, $, Ve)),
          et !== void 0 && (re = et).length === 0))
      )
        return Be + re + Me;
      if (((re = Ot.join(',') + '{' + re + '}'), pe * ie !== 0)) {
        switch ((pe !== 2 || f(re, 2) || (ie = 0), ie)) {
          case 111:
            re = re.replace(U, ':-moz-$1') + re;
            break;
          case 112:
            re =
              re.replace(z, '::-webkit-input-$1') +
              re.replace(z, '::-moz-$1') +
              re.replace(z, ':-ms-input-$1') +
              re;
        }
        ie = 0;
      }
    }
    return Be + re + Me;
  }
  function o(we, Ce, _e) {
    var Ve = Ce.trim().split(k);
    Ce = Ve;
    var $ = Ve.length,
      Je = we.length;
    switch (Je) {
      case 0:
      case 1:
        var ye = 0;
        for (we = Je === 0 ? '' : we[0] + ' '; ye < $; ++ye)
          Ce[ye] = s(we, Ce[ye], _e).trim();
        break;
      default:
        var it = (ye = 0);
        for (Ce = []; ye < $; ++ye)
          for (var Xe = 0; Xe < Je; ++Xe)
            Ce[it++] = s(we[Xe] + ' ', Ve[ye], _e).trim();
    }
    return Ce;
  }
  function s(we, Ce, _e) {
    var Ve = Ce.charCodeAt(0);
    switch ((33 > Ve && (Ve = (Ce = Ce.trim()).charCodeAt(0)), Ve)) {
      case 38:
        return Ce.replace(L, '$1' + we.trim());
      case 58:
        return we.trim() + Ce.replace(L, '$1' + we.trim());
      default:
        if (0 < 1 * _e && 0 < Ce.indexOf('\f'))
          return Ce.replace(
            L,
            (we.charCodeAt(0) === 58 ? '' : '$1') + we.trim()
          );
    }
    return we + Ce;
  }
  function c(we, Ce, _e, Ve) {
    var $ = we + ';',
      Je = 2 * Ce + 3 * _e + 4 * Ve;
    if (Je === 944) {
      we = $.indexOf(':', 9) + 1;
      var ye = $.substring(we, $.length - 1).trim();
      return (
        (ye = $.substring(0, we).trim() + ye + ';'),
        pe === 1 || (pe === 2 && f(ye, 1)) ? '-webkit-' + ye + ye : ye
      );
    }
    if (pe === 0 || (pe === 2 && !f($, 1))) return $;
    switch (Je) {
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
          (Ce = ye.indexOf('-') + 1),
          ye.charCodeAt(0) + ye.charCodeAt(Ce))
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
          ((Ce = ($ = we).length - 10),
          (ye = ($.charCodeAt(Ce) === 33 ? $.substring(0, Ce) : $)
            .substring(we.indexOf(':', 7) + 1)
            .trim()),
          (Je = ye.charCodeAt(0) + (ye.charCodeAt(7) | 0)))
        ) {
          case 203:
            if (111 > ye.charCodeAt(8)) break;
          case 115:
            $ = $.replace(ye, '-webkit-' + ye) + ';' + $;
            break;
          case 207:
          case 102:
            $ =
              $.replace(ye, '-webkit-' + (102 < Je ? 'inline-' : '') + 'box') +
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
              return '-webkit-' + $ + '-ms-flex-item-' + $.replace(le, '') + $;
            default:
              return (
                '-webkit-' +
                $ +
                '-ms-flex-line-pack' +
                $.replace('align-content', '').replace(le, '') +
                $
              );
          }
        break;
      case 973:
      case 989:
        if ($.charCodeAt(3) !== 45 || $.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (ee.test(we) === !0)
          return (ye = we.substring(we.indexOf(':') + 1)).charCodeAt(0) === 115
            ? c(we.replace('stretch', 'fill-available'), Ce, _e, Ve).replace(
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
          _e + Ve === 211 &&
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
  function f(we, Ce) {
    var _e = we.indexOf(Ce === 1 ? ':' : '{'),
      Ve = we.substring(0, Ce !== 3 ? _e : 10);
    return (
      (_e = we.substring(_e + 1, we.length - 1)),
      xe(Ce !== 2 ? Ve : Ve.replace(ne, '$1'), _e, Ce)
    );
  }
  function d(we, Ce) {
    var _e = c(Ce, Ce.charCodeAt(0), Ce.charCodeAt(1), Ce.charCodeAt(2));
    return _e !== Ce + ';'
      ? _e.replace(ae, ' or ($1)').substring(4)
      : '(' + Ce + ')';
  }
  function h(we, Ce, _e, Ve, $, Je, ye, it, Xe, Ze) {
    for (var se = 0, ot = Ce, dt; se < be; ++se)
      switch ((dt = ve[se].call(S, we, ot, _e, Ve, $, Je, ye, it, Xe, Ze))) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ot = dt;
      }
    if (ot !== Ce) return ot;
  }
  function m(we) {
    switch (we) {
      case void 0:
      case null:
        be = ve.length = 0;
        break;
      default:
        if (typeof we == 'function') ve[be++] = we;
        else if (typeof we == 'object')
          for (var Ce = 0, _e = we.length; Ce < _e; ++Ce) m(we[Ce]);
        else Ye = !!we | 0;
    }
    return m;
  }
  function g(we) {
    return (
      (we = we.prefix),
      we !== void 0 &&
        ((xe = null),
        we
          ? typeof we != 'function'
            ? (pe = 1)
            : ((pe = 2), (xe = we))
          : (pe = 0)),
      g
    );
  }
  function S(we, Ce) {
    var _e = we;
    if (
      (33 > _e.charCodeAt(0) && (_e = _e.trim()),
      (Lt = _e),
      (_e = [Lt]),
      0 < be)
    ) {
      var Ve = h(-1, Ce, _e, _e, W, B, 0, 0, 0, 0);
      Ve !== void 0 && typeof Ve == 'string' && (Ce = Ve);
    }
    var $ = a(ce, _e, Ce, 0, 0);
    return (
      0 < be &&
        ((Ve = h(-2, $, _e, _e, W, B, $.length, 0, 0, 0)),
        Ve !== void 0 && ($ = Ve)),
      (Lt = ''),
      (ie = 0),
      (B = W = 1),
      $
    );
  }
  var E = /^\0+/g,
    T = /[\0\r\f]/g,
    D = /: */g,
    O = /zoo|gra/,
    x = /([,: ])(transform)/g,
    k = /,\r+?/g,
    L = /([\t\r\n ])*\f?&/g,
    R = /@(k\w+)\s*(\S*)\s*/,
    z = /::(place)/g,
    U = /:(read-only)/g,
    F = /[svh]\w+-[tblr]{2}/,
    te = /\(\s*(.*)\s*\)/g,
    ae = /([\s\S]*?);/g,
    le = /-self|flex-/g,
    ne = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
    ee = /stretch|:\s*\w+\-(?:conte|avail)/,
    ue = /([^-])(image-set\()/,
    B = 1,
    W = 1,
    ie = 0,
    pe = 1,
    ce = [],
    ve = [],
    be = 0,
    xe = null,
    Ye = 0,
    Lt = '';
  return ((S.use = m), (S.set = g), r !== void 0 && g(r), S);
}
var Sk = {
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
function Ek(r) {
  var a = Object.create(null);
  return function (o) {
    return (a[o] === void 0 && (a[o] = r(o)), a[o]);
  };
}
var wk =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  qw = Ek(function (r) {
    return (
      wk.test(r) ||
      (r.charCodeAt(0) === 111 &&
        r.charCodeAt(1) === 110 &&
        r.charCodeAt(2) < 91)
    );
  }),
  qC = { exports: {} },
  Ut = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function () {
  var r = typeof Symbol == 'function' && Symbol.for,
    a = r ? Symbol.for('react.element') : 60103,
    o = r ? Symbol.for('react.portal') : 60106,
    s = r ? Symbol.for('react.fragment') : 60107,
    c = r ? Symbol.for('react.strict_mode') : 60108,
    f = r ? Symbol.for('react.profiler') : 60114,
    d = r ? Symbol.for('react.provider') : 60109,
    h = r ? Symbol.for('react.context') : 60110,
    m = r ? Symbol.for('react.async_mode') : 60111,
    g = r ? Symbol.for('react.concurrent_mode') : 60111,
    S = r ? Symbol.for('react.forward_ref') : 60112,
    E = r ? Symbol.for('react.suspense') : 60113,
    T = r ? Symbol.for('react.suspense_list') : 60120,
    D = r ? Symbol.for('react.memo') : 60115,
    O = r ? Symbol.for('react.lazy') : 60116,
    x = r ? Symbol.for('react.block') : 60121,
    k = r ? Symbol.for('react.fundamental') : 60117,
    L = r ? Symbol.for('react.responder') : 60118,
    R = r ? Symbol.for('react.scope') : 60119;
  function z(se) {
    return (
      typeof se == 'string' ||
      typeof se == 'function' ||
      se === s ||
      se === g ||
      se === f ||
      se === c ||
      se === E ||
      se === T ||
      (typeof se == 'object' &&
        se !== null &&
        (se.$$typeof === O ||
          se.$$typeof === D ||
          se.$$typeof === d ||
          se.$$typeof === h ||
          se.$$typeof === S ||
          se.$$typeof === k ||
          se.$$typeof === L ||
          se.$$typeof === R ||
          se.$$typeof === x))
    );
  }
  function U(se) {
    if (typeof se == 'object' && se !== null) {
      var ot = se.$$typeof;
      switch (ot) {
        case a:
          var dt = se.type;
          switch (dt) {
            case m:
            case g:
            case s:
            case f:
            case c:
            case E:
              return dt;
            default:
              var Ie = dt && dt.$$typeof;
              switch (Ie) {
                case h:
                case S:
                case O:
                case D:
                case d:
                  return Ie;
                default:
                  return ot;
              }
          }
        case o:
          return ot;
      }
    }
  }
  var F = m,
    te = g,
    ae = h,
    le = d,
    ne = a,
    ee = S,
    ue = s,
    B = O,
    W = D,
    ie = o,
    pe = f,
    ce = c,
    ve = E,
    be = !1;
  function xe(se) {
    return (
      be ||
        ((be = !0),
        console.warn(
          'The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.'
        )),
      Ye(se) || U(se) === m
    );
  }
  function Ye(se) {
    return U(se) === g;
  }
  function Lt(se) {
    return U(se) === h;
  }
  function we(se) {
    return U(se) === d;
  }
  function Ce(se) {
    return typeof se == 'object' && se !== null && se.$$typeof === a;
  }
  function _e(se) {
    return U(se) === S;
  }
  function Ve(se) {
    return U(se) === s;
  }
  function $(se) {
    return U(se) === O;
  }
  function Je(se) {
    return U(se) === D;
  }
  function ye(se) {
    return U(se) === o;
  }
  function it(se) {
    return U(se) === f;
  }
  function Xe(se) {
    return U(se) === c;
  }
  function Ze(se) {
    return U(se) === E;
  }
  ((Ut.AsyncMode = F),
    (Ut.ConcurrentMode = te),
    (Ut.ContextConsumer = ae),
    (Ut.ContextProvider = le),
    (Ut.Element = ne),
    (Ut.ForwardRef = ee),
    (Ut.Fragment = ue),
    (Ut.Lazy = B),
    (Ut.Memo = W),
    (Ut.Portal = ie),
    (Ut.Profiler = pe),
    (Ut.StrictMode = ce),
    (Ut.Suspense = ve),
    (Ut.isAsyncMode = xe),
    (Ut.isConcurrentMode = Ye),
    (Ut.isContextConsumer = Lt),
    (Ut.isContextProvider = we),
    (Ut.isElement = Ce),
    (Ut.isForwardRef = _e),
    (Ut.isFragment = Ve),
    (Ut.isLazy = $),
    (Ut.isMemo = Je),
    (Ut.isPortal = ye),
    (Ut.isProfiler = it),
    (Ut.isStrictMode = Xe),
    (Ut.isSuspense = Ze),
    (Ut.isValidElementType = z),
    (Ut.typeOf = U));
})();
qC.exports = Ut;
var Ck = qC.exports,
  yy = Ck,
  Tk = {
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
  xk = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  Rk = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  XC = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  gy = {};
gy[yy.ForwardRef] = Rk;
gy[yy.Memo] = XC;
function Xw(r) {
  return yy.isMemo(r) ? XC : gy[r.$$typeof] || Tk;
}
var _k = Object.defineProperty,
  Dk = Object.getOwnPropertyNames,
  Qw = Object.getOwnPropertySymbols,
  Ok = Object.getOwnPropertyDescriptor,
  Ak = Object.getPrototypeOf,
  Kw = Object.prototype;
function QC(r, a, o) {
  if (typeof a != 'string') {
    if (Kw) {
      var s = Ak(a);
      s && s !== Kw && QC(r, s, o);
    }
    var c = Dk(a);
    Qw && (c = c.concat(Qw(a)));
    for (var f = Xw(r), d = Xw(a), h = 0; h < c.length; ++h) {
      var m = c[h];
      if (!xk[m] && !(o && o[m]) && !(d && d[m]) && !(f && f[m])) {
        var g = Ok(a, m);
        try {
          _k(r, m, g);
        } catch {}
      }
    }
  }
  return r;
}
var Mk = QC;
const Lk = DC(Mk);
function ti() {
  return (ti =
    Object.assign ||
    function (r) {
      for (var a = 1; a < arguments.length; a++) {
        var o = arguments[a];
        for (var s in o)
          Object.prototype.hasOwnProperty.call(o, s) && (r[s] = o[s]);
      }
      return r;
    }).apply(this, arguments);
}
var Jw = function (r, a) {
    for (var o = [r[0]], s = 0, c = a.length; s < c; s += 1)
      o.push(a[s], r[s + 1]);
    return o;
  },
  ny = function (r) {
    return (
      r !== null &&
      typeof r == 'object' &&
      (r.toString ? r.toString() : Object.prototype.toString.call(r)) ===
        '[object Object]' &&
      !my.typeOf(r)
    );
  },
  wd = Object.freeze([]),
  Hi = Object.freeze({});
function Cd(r) {
  return typeof r == 'function';
}
function ry(r) {
  return (typeof r == 'string' && r) || r.displayName || r.name || 'Component';
}
function KC(r) {
  return r && typeof r.styledComponentId == 'string';
}
var Nl =
    (typeof process < 'u' &&
      process.env !== void 0 &&
      ({}.REACT_APP_SC_ATTR || {}.SC_ATTR)) ||
    'data-styled',
  by = typeof window < 'u' && 'HTMLElement' in window,
  kk = !!(typeof SC_DISABLE_SPEEDY == 'boolean'
    ? SC_DISABLE_SPEEDY
    : typeof process < 'u' &&
      process.env !== void 0 &&
      ({}.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      {}.REACT_APP_SC_DISABLE_SPEEDY !== ''
        ? {}.REACT_APP_SC_DISABLE_SPEEDY !== 'false' &&
          {}.REACT_APP_SC_DISABLE_SPEEDY
        : !({}.SC_DISABLE_SPEEDY !== void 0 && {}.SC_DISABLE_SPEEDY !== '') ||
          ({}.SC_DISABLE_SPEEDY !== 'false' && {}.SC_DISABLE_SPEEDY))),
  Nk = {
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
function Pk() {
  for (
    var r = arguments.length <= 0 ? void 0 : arguments[0],
      a = [],
      o = 1,
      s = arguments.length;
    o < s;
    o += 1
  )
    a.push(o < 0 || arguments.length <= o ? void 0 : arguments[o]);
  return (
    a.forEach(function (c) {
      r = r.replace(/%[a-z]/, c);
    }),
    r
  );
}
function Fl(r) {
  for (
    var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), s = 1;
    s < a;
    s++
  )
    o[s - 1] = arguments[s];
  throw new Error(Pk.apply(void 0, [Nk[r]].concat(o)).trim());
}
var zk = (function () {
    function r(o) {
      ((this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = o));
    }
    var a = r.prototype;
    return (
      (a.indexOfGroup = function (o) {
        for (var s = 0, c = 0; c < o; c++) s += this.groupSizes[c];
        return s;
      }),
      (a.insertRules = function (o, s) {
        if (o >= this.groupSizes.length) {
          for (var c = this.groupSizes, f = c.length, d = f; o >= d; )
            (d <<= 1) < 0 && Fl(16, '' + o);
          ((this.groupSizes = new Uint32Array(d)),
            this.groupSizes.set(c),
            (this.length = d));
          for (var h = f; h < d; h++) this.groupSizes[h] = 0;
        }
        for (var m = this.indexOfGroup(o + 1), g = 0, S = s.length; g < S; g++)
          this.tag.insertRule(m, s[g]) && (this.groupSizes[o]++, m++);
      }),
      (a.clearGroup = function (o) {
        if (o < this.length) {
          var s = this.groupSizes[o],
            c = this.indexOfGroup(o),
            f = c + s;
          this.groupSizes[o] = 0;
          for (var d = c; d < f; d++) this.tag.deleteRule(c);
        }
      }),
      (a.getGroup = function (o) {
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
    var a = ku++;
    return (
      ((0 | a) < 0 || a > 1 << 30) && Fl(16, '' + a),
      md.set(r, a),
      Td.set(a, r),
      a
    );
  },
  Uk = function (r) {
    return Td.get(r);
  },
  Fk = function (r, a) {
    (a >= ku && (ku = a + 1), md.set(r, a), Td.set(a, r));
  },
  Vk = 'style[' + Nl + '][data-styled-version="5.3.11"]',
  Ik = new RegExp('^' + Nl + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  Hk = function (r, a, o) {
    for (var s, c = o.split(','), f = 0, d = c.length; f < d; f++)
      (s = c[f]) && r.registerName(a, s);
  },
  Bk = function (r, a) {
    for (
      var o = (a.textContent || '').split(`/*!sc*/
`),
        s = [],
        c = 0,
        f = o.length;
      c < f;
      c++
    ) {
      var d = o[c].trim();
      if (d) {
        var h = d.match(Ik);
        if (h) {
          var m = 0 | parseInt(h[1], 10),
            g = h[2];
          (m !== 0 && (Fk(g, m), Hk(r, g, h[3]), r.getTag().insertRules(m, s)),
            (s.length = 0));
        } else s.push(d);
      }
    }
  },
  jk = function () {
    return typeof __webpack_nonce__ < 'u' ? __webpack_nonce__ : null;
  },
  JC = function (r) {
    var a = document.head,
      o = r || a,
      s = document.createElement('style'),
      c = (function (h) {
        for (var m = h.childNodes, g = m.length; g >= 0; g--) {
          var S = m[g];
          if (S && S.nodeType === 1 && S.hasAttribute(Nl)) return S;
        }
      })(o),
      f = c !== void 0 ? c.nextSibling : null;
    (s.setAttribute(Nl, 'active'),
      s.setAttribute('data-styled-version', '5.3.11'));
    var d = jk();
    return (d && s.setAttribute('nonce', d), o.insertBefore(s, f), s);
  },
  $k = (function () {
    function r(o) {
      var s = (this.element = JC(o));
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
    var a = r.prototype;
    return (
      (a.insertRule = function (o, s) {
        try {
          return (this.sheet.insertRule(s, o), this.length++, !0);
        } catch {
          return !1;
        }
      }),
      (a.deleteRule = function (o) {
        (this.sheet.deleteRule(o), this.length--);
      }),
      (a.getRule = function (o) {
        var s = this.sheet.cssRules[o];
        return s !== void 0 && typeof s.cssText == 'string' ? s.cssText : '';
      }),
      r
    );
  })(),
  Yk = (function () {
    function r(o) {
      var s = (this.element = JC(o));
      ((this.nodes = s.childNodes), (this.length = 0));
    }
    var a = r.prototype;
    return (
      (a.insertRule = function (o, s) {
        if (o <= this.length && o >= 0) {
          var c = document.createTextNode(s),
            f = this.nodes[o];
          return (this.element.insertBefore(c, f || null), this.length++, !0);
        }
        return !1;
      }),
      (a.deleteRule = function (o) {
        (this.element.removeChild(this.nodes[o]), this.length--);
      }),
      (a.getRule = function (o) {
        return o < this.length ? this.nodes[o].textContent : '';
      }),
      r
    );
  })(),
  Gk = (function () {
    function r(o) {
      ((this.rules = []), (this.length = 0));
    }
    var a = r.prototype;
    return (
      (a.insertRule = function (o, s) {
        return (
          o <= this.length && (this.rules.splice(o, 0, s), this.length++, !0)
        );
      }),
      (a.deleteRule = function (o) {
        (this.rules.splice(o, 1), this.length--);
      }),
      (a.getRule = function (o) {
        return o < this.length ? this.rules[o] : '';
      }),
      r
    );
  })(),
  Zw = by,
  Wk = { isServer: !by, useCSSOMInjection: !kk },
  ZC = (function () {
    function r(o, s, c) {
      (o === void 0 && (o = Hi),
        s === void 0 && (s = {}),
        (this.options = ti({}, Wk, {}, o)),
        (this.gs = s),
        (this.names = new Map(c)),
        (this.server = !!o.isServer),
        !this.server &&
          by &&
          Zw &&
          ((Zw = !1),
          (function (f) {
            for (
              var d = document.querySelectorAll(Vk), h = 0, m = d.length;
              h < m;
              h++
            ) {
              var g = d[h];
              g &&
                g.getAttribute(Nl) !== 'active' &&
                (Bk(f, g), g.parentNode && g.parentNode.removeChild(g));
            }
          })(this)));
    }
    r.registerId = function (o) {
      return sd(o);
    };
    var a = r.prototype;
    return (
      (a.reconstructWithOptions = function (o, s) {
        return (
          s === void 0 && (s = !0),
          new r(
            ti({}, this.options, {}, o),
            this.gs,
            (s && this.names) || void 0
          )
        );
      }),
      (a.allocateGSInstance = function (o) {
        return (this.gs[o] = (this.gs[o] || 0) + 1);
      }),
      (a.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((c = (s = this.options).isServer),
            (f = s.useCSSOMInjection),
            (d = s.target),
            (o = c ? new Gk(d) : f ? new $k(d) : new Yk(d)),
            new zk(o)))
        );
        var o, s, c, f, d;
      }),
      (a.hasNameForId = function (o, s) {
        return this.names.has(o) && this.names.get(o).has(s);
      }),
      (a.registerName = function (o, s) {
        if ((sd(o), this.names.has(o))) this.names.get(o).add(s);
        else {
          var c = new Set();
          (c.add(s), this.names.set(o, c));
        }
      }),
      (a.insertRules = function (o, s, c) {
        (this.registerName(o, s), this.getTag().insertRules(sd(o), c));
      }),
      (a.clearNames = function (o) {
        this.names.has(o) && this.names.get(o).clear();
      }),
      (a.clearRules = function (o) {
        (this.getTag().clearGroup(sd(o)), this.clearNames(o));
      }),
      (a.clearTag = function () {
        this.tag = void 0;
      }),
      (a.toString = function () {
        return (function (o) {
          for (var s = o.getTag(), c = s.length, f = '', d = 0; d < c; d++) {
            var h = Uk(d);
            if (h !== void 0) {
              var m = o.names.get(h),
                g = s.getGroup(d);
              if (m && g && m.size) {
                var S = Nl + '.g' + d + '[id="' + h + '"]',
                  E = '';
                (m !== void 0 &&
                  m.forEach(function (T) {
                    T.length > 0 && (E += T + ',');
                  }),
                  (f +=
                    '' +
                    g +
                    S +
                    '{content:"' +
                    E +
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
  qk = /(a)(d)/gi,
  eC = function (r) {
    return String.fromCharCode(r + (r > 25 ? 39 : 97));
  };
function ay(r) {
  var a,
    o = '';
  for (a = Math.abs(r); a > 52; a = (a / 52) | 0) o = eC(a % 52) + o;
  return (eC(a % 52) + o).replace(qk, '$1-$2');
}
var _o = function (r, a) {
    for (var o = a.length; o; ) r = (33 * r) ^ a.charCodeAt(--o);
    return r;
  },
  eT = function (r) {
    return _o(5381, r);
  },
  Xk = eT('5.3.11'),
  Qk = (function () {
    function r(a, o, s) {
      ((this.rules = a),
        (this.staticRulesId = ''),
        (this.isStatic = !1),
        (this.componentId = o),
        (this.baseHash = _o(Xk, o)),
        (this.baseStyle = s),
        ZC.registerId(o));
    }
    return (
      (r.prototype.generateAndInjectStyles = function (a, o, s) {
        var c = this.componentId,
          f = [];
        if (
          (this.baseStyle &&
            f.push(this.baseStyle.generateAndInjectStyles(a, o, s)),
          this.isStatic && !s.hash)
        )
          if (this.staticRulesId && o.hasNameForId(c, this.staticRulesId))
            f.push(this.staticRulesId);
          else {
            var d = Pl(this.rules, a, o, s).join(''),
              h = ay(_o(this.baseHash, d) >>> 0);
            if (!o.hasNameForId(c, h)) {
              var m = s(d, '.' + h, void 0, c);
              o.insertRules(c, h, m);
            }
            (f.push(h), (this.staticRulesId = h));
          }
        else {
          for (
            var g = this.rules.length,
              S = _o(this.baseHash, s.hash),
              E = '',
              T = 0;
            T < g;
            T++
          ) {
            var D = this.rules[T];
            if (typeof D == 'string') ((E += D), (S = _o(S, D + T)));
            else if (D) {
              var O = Pl(D, a, o, s),
                x = Array.isArray(O) ? O.join('') : O;
              ((S = _o(S, x + T)), (E += x));
            }
          }
          if (E) {
            var k = ay(S >>> 0);
            if (!o.hasNameForId(c, k)) {
              var L = s(E, '.' + k, void 0, c);
              o.insertRules(c, k, L);
            }
            f.push(k);
          }
        }
        return f.join(' ');
      }),
      r
    );
  })(),
  Kk = /^\s*\/\/.*$/gm,
  Jk = [':', '[', '.', '#'];
function Zk(r) {
  var a,
    o,
    s,
    c,
    f = r === void 0 ? Hi : r,
    d = f.options,
    h = d === void 0 ? Hi : d,
    m = f.plugins,
    g = m === void 0 ? wd : m,
    S = new bk(h),
    E = [],
    T = (function (x) {
      function k(L) {
        if (L)
          try {
            x(L + '}');
          } catch {}
      }
      return function (L, R, z, U, F, te, ae, le, ne, ee) {
        switch (L) {
          case 1:
            if (ne === 0 && R.charCodeAt(0) === 64) return (x(R + ';'), '');
            break;
          case 2:
            if (le === 0) return R + '/*|*/';
            break;
          case 3:
            switch (le) {
              case 102:
              case 112:
                return (x(z[0] + R), '');
              default:
                return R + (ee === 0 ? '/*|*/' : '');
            }
          case -2:
            R.split('/*|*/}').forEach(k);
        }
      };
    })(function (x) {
      E.push(x);
    }),
    D = function (x, k, L) {
      return (k === 0 && Jk.indexOf(L[o.length]) !== -1) || L.match(c)
        ? x
        : '.' + a;
    };
  function O(x, k, L, R) {
    R === void 0 && (R = '&');
    var z = x.replace(Kk, ''),
      U = k && L ? L + ' ' + k + ' { ' + z + ' }' : z;
    return (
      (a = R),
      (o = k),
      (s = new RegExp('\\' + o + '\\b', 'g')),
      (c = new RegExp('(\\' + o + '\\b){2,}')),
      S(L || !k ? '' : k, U)
    );
  }
  return (
    S.use(
      [].concat(g, [
        function (x, k, L) {
          x === 2 &&
            L.length &&
            L[0].lastIndexOf(o) > 0 &&
            (L[0] = L[0].replace(s, D));
        },
        T,
        function (x) {
          if (x === -2) {
            var k = E;
            return ((E = []), k);
          }
        },
      ])
    ),
    (O.hash = g.length
      ? g
          .reduce(function (x, k) {
            return (k.name || Fl(15), _o(x, k.name));
          }, 5381)
          .toString()
      : ''),
    O
  );
}
var tT = Ct.createContext();
tT.Consumer;
var nT = Ct.createContext(),
  eN = (nT.Consumer, new ZC()),
  iy = Zk();
function tN() {
  return Z.useContext(tT) || eN;
}
function nN() {
  return Z.useContext(nT) || iy;
}
var rN = (function () {
    function r(a, o) {
      var s = this;
      ((this.inject = function (c, f) {
        f === void 0 && (f = iy);
        var d = s.name + f.hash;
        c.hasNameForId(s.id, d) ||
          c.insertRules(s.id, d, f(s.rules, d, '@keyframes'));
      }),
        (this.toString = function () {
          return Fl(12, String(s.name));
        }),
        (this.name = a),
        (this.id = 'sc-keyframes-' + a),
        (this.rules = o));
    }
    return (
      (r.prototype.getName = function (a) {
        return (a === void 0 && (a = iy), this.name + a.hash);
      }),
      r
    );
  })(),
  aN = /([A-Z])/,
  iN = /([A-Z])/g,
  oN = /^ms-/,
  lN = function (r) {
    return '-' + r.toLowerCase();
  };
function tC(r) {
  return aN.test(r) ? r.replace(iN, lN).replace(oN, '-ms-') : r;
}
var nC = function (r) {
  return r == null || r === !1 || r === '';
};
function Pl(r, a, o, s) {
  if (Array.isArray(r)) {
    for (var c, f = [], d = 0, h = r.length; d < h; d += 1)
      (c = Pl(r[d], a, o, s)) !== '' &&
        (Array.isArray(c) ? f.push.apply(f, c) : f.push(c));
    return f;
  }
  if (nC(r)) return '';
  if (KC(r)) return '.' + r.styledComponentId;
  if (Cd(r)) {
    if (
      typeof (g = r) != 'function' ||
      (g.prototype && g.prototype.isReactComponent) ||
      !a
    )
      return r;
    var m = r(a);
    return (
      my.isElement(m) &&
        console.warn(
          ry(r) +
            ' is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.'
        ),
      Pl(m, a, o, s)
    );
  }
  var g;
  return r instanceof rN
    ? o
      ? (r.inject(o, s), r.getName(s))
      : r
    : ny(r)
      ? (function S(E, T) {
          var D,
            O,
            x = [];
          for (var k in E)
            E.hasOwnProperty(k) &&
              !nC(E[k]) &&
              ((Array.isArray(E[k]) && E[k].isCss) || Cd(E[k])
                ? x.push(tC(k) + ':', E[k], ';')
                : ny(E[k])
                  ? x.push.apply(x, S(E[k], k))
                  : x.push(
                      tC(k) +
                        ': ' +
                        ((D = k),
                        (O = E[k]) == null || typeof O == 'boolean' || O === ''
                          ? ''
                          : typeof O != 'number' ||
                              O === 0 ||
                              D in Sk ||
                              D.startsWith('--')
                            ? String(O).trim()
                            : O + 'px') +
                        ';'
                    ));
          return T ? [T + ' {'].concat(x, ['}']) : x;
        })(r)
      : r.toString();
}
var rC = function (r) {
  return (Array.isArray(r) && (r.isCss = !0), r);
};
function sN(r) {
  for (
    var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), s = 1;
    s < a;
    s++
  )
    o[s - 1] = arguments[s];
  return Cd(r) || ny(r)
    ? rC(Pl(Jw(wd, [r].concat(o))))
    : o.length === 0 && r.length === 1 && typeof r[0] == 'string'
      ? r
      : rC(Pl(Jw(r, o)));
}
var aC = /invalid hook call/i,
  ud = new Set(),
  uN = function (r, a) {
    {
      var o =
          'The component ' +
          r +
          (a ? ' with the id of "' + a + '"' : '') +
          ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`,
        s = console.error;
      try {
        var c = !0;
        ((console.error = function (f) {
          if (aC.test(f)) ((c = !1), ud.delete(o));
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
        aC.test(f.message) && ud.delete(o);
      } finally {
        console.error = s;
      }
    }
  },
  cN = function (r, a, o) {
    return (
      o === void 0 && (o = Hi),
      (r.theme !== o.theme && r.theme) || a || o.theme
    );
  },
  fN = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  dN = /(^-|-$)/g;
function Bm(r) {
  return r.replace(fN, '-').replace(dN, '');
}
var pN = function (r) {
  return ay(eT(r) >>> 0);
};
function cd(r) {
  return typeof r == 'string' && r.charAt(0) === r.charAt(0).toLowerCase();
}
var oy = function (r) {
    return (
      typeof r == 'function' ||
      (typeof r == 'object' && r !== null && !Array.isArray(r))
    );
  },
  vN = function (r) {
    return r !== '__proto__' && r !== 'constructor' && r !== 'prototype';
  };
function hN(r, a, o) {
  var s = r[o];
  oy(a) && oy(s) ? rT(s, a) : (r[o] = a);
}
function rT(r) {
  for (
    var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), s = 1;
    s < a;
    s++
  )
    o[s - 1] = arguments[s];
  for (var c = 0, f = o; c < f.length; c++) {
    var d = f[c];
    if (oy(d)) for (var h in d) vN(h) && hN(r, d[h], h);
  }
  return r;
}
var aT = Ct.createContext();
aT.Consumer;
var jm = {};
function iT(r, a, o) {
  var s = KC(r),
    c = !cd(r),
    f = a.attrs,
    d = f === void 0 ? wd : f,
    h = a.componentId,
    m =
      h === void 0
        ? (function (R, z) {
            var U = typeof R != 'string' ? 'sc' : Bm(R);
            jm[U] = (jm[U] || 0) + 1;
            var F = U + '-' + pN('5.3.11' + U + jm[U]);
            return z ? z + '-' + F : F;
          })(a.displayName, a.parentComponentId)
        : h,
    g = a.displayName,
    S =
      g === void 0
        ? (function (R) {
            return cd(R) ? 'styled.' + R : 'Styled(' + ry(R) + ')';
          })(r)
        : g,
    E =
      a.displayName && a.componentId
        ? Bm(a.displayName) + '-' + a.componentId
        : a.componentId || m,
    T = s && r.attrs ? Array.prototype.concat(r.attrs, d).filter(Boolean) : d,
    D = a.shouldForwardProp;
  s &&
    r.shouldForwardProp &&
    (D = a.shouldForwardProp
      ? function (R, z, U) {
          return r.shouldForwardProp(R, z, U) && a.shouldForwardProp(R, z, U);
        }
      : r.shouldForwardProp);
  var O,
    x = new Qk(o, E, s ? r.componentStyle : void 0),
    k = x.isStatic && d.length === 0,
    L = function (R, z) {
      return (function (U, F, te, ae) {
        var le = U.attrs,
          ne = U.componentStyle,
          ee = U.defaultProps,
          ue = U.foldedComponentIds,
          B = U.shouldForwardProp,
          W = U.styledComponentId,
          ie = U.target,
          pe = (function (Ve, $, Je) {
            Ve === void 0 && (Ve = Hi);
            var ye = ti({}, $, { theme: Ve }),
              it = {};
            return (
              Je.forEach(function (Xe) {
                var Ze,
                  se,
                  ot,
                  dt = Xe;
                for (Ze in (Cd(dt) && (dt = dt(ye)), dt))
                  ye[Ze] = it[Ze] =
                    Ze === 'className'
                      ? ((se = it[Ze]),
                        (ot = dt[Ze]),
                        se && ot ? se + ' ' + ot : se || ot)
                      : dt[Ze];
              }),
              [ye, it]
            );
          })(cN(F, Z.useContext(aT), ee) || Hi, F, le),
          ce = pe[0],
          ve = pe[1],
          be = (function (Ve, $, Je, ye) {
            var it = tN(),
              Xe = nN(),
              Ze = $
                ? Ve.generateAndInjectStyles(Hi, it, Xe)
                : Ve.generateAndInjectStyles(Je, it, Xe);
            return (!$ && ye && ye(Ze), Ze);
          })(ne, ae, ce, U.warnTooManyClasses),
          xe = te,
          Ye = ve.$as || F.$as || ve.as || F.as || ie,
          Lt = cd(Ye),
          we = ve !== F ? ti({}, F, {}, ve) : F,
          Ce = {};
        for (var _e in we)
          _e[0] !== '$' &&
            _e !== 'as' &&
            (_e === 'forwardedAs'
              ? (Ce.as = we[_e])
              : (B ? B(_e, qw, Ye) : !Lt || qw(_e)) && (Ce[_e] = we[_e]));
        return (
          F.style &&
            ve.style !== F.style &&
            (Ce.style = ti({}, F.style, {}, ve.style)),
          (Ce.className = Array.prototype
            .concat(ue, W, be !== W ? be : null, F.className, ve.className)
            .filter(Boolean)
            .join(' ')),
          (Ce.ref = xe),
          Z.createElement(Ye, Ce)
        );
      })(O, R, z, k);
    };
  return (
    (L.displayName = S),
    ((O = Ct.forwardRef(L)).attrs = T),
    (O.componentStyle = x),
    (O.displayName = S),
    (O.shouldForwardProp = D),
    (O.foldedComponentIds = s
      ? Array.prototype.concat(r.foldedComponentIds, r.styledComponentId)
      : wd),
    (O.styledComponentId = E),
    (O.target = s ? r.target : r),
    (O.withComponent = function (R) {
      var z = a.componentId,
        U = (function (te, ae) {
          if (te == null) return {};
          var le,
            ne,
            ee = {},
            ue = Object.keys(te);
          for (ne = 0; ne < ue.length; ne++)
            ((le = ue[ne]), ae.indexOf(le) >= 0 || (ee[le] = te[le]));
          return ee;
        })(a, ['componentId']),
        F = z && z + '-' + (cd(R) ? R : Bm(ry(R)));
      return iT(R, ti({}, U, { attrs: T, componentId: F }), o);
    }),
    Object.defineProperty(O, 'defaultProps', {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (R) {
        this._foldedDefaultProps = s ? rT({}, r.defaultProps, R) : R;
      },
    }),
    uN(S, E),
    (O.warnTooManyClasses = (function (R, z) {
      var U = {},
        F = !1;
      return function (te) {
        if (!F && ((U[te] = !0), Object.keys(U).length >= 200)) {
          var ae = z ? ' with the id of "' + z + '"' : '';
          (console.warn(
            'Over 200 classes were generated for component ' +
              R +
              ae +
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
    })(S, E)),
    Object.defineProperty(O, 'toString', {
      value: function () {
        return '.' + O.styledComponentId;
      },
    }),
    c &&
      Lk(O, r, {
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
var ly = function (r) {
  return (function a(o, s, c) {
    if ((c === void 0 && (c = Hi), !my.isValidElementType(s)))
      return Fl(1, String(s));
    var f = function () {
      return o(s, c, sN.apply(void 0, arguments));
    };
    return (
      (f.withConfig = function (d) {
        return a(o, s, ti({}, c, {}, d));
      }),
      (f.attrs = function (d) {
        return a(
          o,
          s,
          ti({}, c, {
            attrs: Array.prototype.concat(c.attrs, d).filter(Boolean),
          })
        );
      }),
      f
    );
  })(iT, r);
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
  ly[r] = ly(r);
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
const Kt = ly;
function iC(r) {
  return (
    r !== null &&
    typeof r == 'object' &&
    'constructor' in r &&
    r.constructor === Object
  );
}
function Sy(r, a) {
  (r === void 0 && (r = {}), a === void 0 && (a = {}));
  const o = ['__proto__', 'constructor', 'prototype'];
  Object.keys(a)
    .filter((s) => o.indexOf(s) < 0)
    .forEach((s) => {
      typeof r[s] > 'u'
        ? (r[s] = a[s])
        : iC(a[s]) &&
          iC(r[s]) &&
          Object.keys(a[s]).length > 0 &&
          Sy(r[s], a[s]);
    });
}
const oT = {
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
function Ur() {
  const r = typeof document < 'u' ? document : {};
  return (Sy(r, oT), r);
}
const mN = {
  document: oT,
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
  return (Sy(r, mN), r);
}
function zi(r) {
  return (
    r === void 0 && (r = ''),
    r
      .trim()
      .split(' ')
      .filter((a) => !!a.trim())
  );
}
function yN(r) {
  const a = r;
  Object.keys(a).forEach((o) => {
    try {
      a[o] = null;
    } catch {}
    try {
      delete a[o];
    } catch {}
  });
}
function Ey(r, a) {
  return (a === void 0 && (a = 0), setTimeout(r, a));
}
function xd() {
  return Date.now();
}
function gN(r) {
  const a = Kn();
  let o;
  return (
    a.getComputedStyle && (o = a.getComputedStyle(r, null)),
    !o && r.currentStyle && (o = r.currentStyle),
    o || (o = r.style),
    o
  );
}
function bN(r, a) {
  a === void 0 && (a = 'x');
  const o = Kn();
  let s, c, f;
  const d = gN(r);
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
    a === 'x' &&
      (o.WebKitCSSMatrix
        ? (c = f.m41)
        : s.length === 16
          ? (c = parseFloat(s[12]))
          : (c = parseFloat(s[4]))),
    a === 'y' &&
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
function SN(r) {
  return typeof window < 'u' && typeof window.HTMLElement < 'u'
    ? r instanceof HTMLElement
    : r && (r.nodeType === 1 || r.nodeType === 11);
}
function _r() {
  const r = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    a = ['__proto__', 'constructor', 'prototype'];
  for (let o = 1; o < arguments.length; o += 1) {
    const s = o < 0 || arguments.length <= o ? void 0 : arguments[o];
    if (s != null && !SN(s)) {
      const c = Object.keys(Object(s)).filter((f) => a.indexOf(f) < 0);
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
function dd(r, a, o) {
  r.style.setProperty(a, o);
}
function lT(r) {
  let { swiper: a, targetPosition: o, side: s } = r;
  const c = Kn(),
    f = -a.translate;
  let d = null,
    h;
  const m = a.params.speed;
  ((a.wrapperEl.style.scrollSnapType = 'none'),
    c.cancelAnimationFrame(a.cssModeFrameID));
  const g = o > f ? 'next' : 'prev',
    S = (T, D) => (g === 'next' && T >= D) || (g === 'prev' && T <= D),
    E = () => {
      ((h = new Date().getTime()), d === null && (d = h));
      const T = Math.max(Math.min((h - d) / m, 1), 0),
        D = 0.5 - Math.cos(T * Math.PI) / 2;
      let O = f + D * (o - f);
      if ((S(O, o) && (O = o), a.wrapperEl.scrollTo({ [s]: O }), S(O, o))) {
        ((a.wrapperEl.style.overflow = 'hidden'),
          (a.wrapperEl.style.scrollSnapType = ''),
          setTimeout(() => {
            ((a.wrapperEl.style.overflow = ''),
              a.wrapperEl.scrollTo({ [s]: O }));
          }),
          c.cancelAnimationFrame(a.cssModeFrameID));
        return;
      }
      a.cssModeFrameID = c.requestAnimationFrame(E);
    };
  E();
}
function wa(r, a) {
  a === void 0 && (a = '');
  const o = Kn(),
    s = [...r.children];
  return (
    o.HTMLSlotElement &&
      r instanceof HTMLSlotElement &&
      s.push(...r.assignedElements()),
    a ? s.filter((c) => c.matches(a)) : s
  );
}
function EN(r, a) {
  const o = [a];
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
function wN(r, a) {
  const o = Kn();
  let s = a.contains(r);
  return (
    !s &&
      o.HTMLSlotElement &&
      a instanceof HTMLSlotElement &&
      ((s = [...a.assignedElements()].includes(r)), s || (s = EN(r, a))),
    s
  );
}
function Rd(r) {
  try {
    console.warn(r);
    return;
  } catch {}
}
function Hu(r, a) {
  a === void 0 && (a = []);
  const o = document.createElement(r);
  return (o.classList.add(...(Array.isArray(a) ? a : zi(a))), o);
}
function CN(r) {
  const a = Kn(),
    o = Ur(),
    s = r.getBoundingClientRect(),
    c = o.body,
    f = r.clientTop || c.clientTop || 0,
    d = r.clientLeft || c.clientLeft || 0,
    h = r === a ? a.scrollY : r.scrollTop,
    m = r === a ? a.scrollX : r.scrollLeft;
  return { top: s.top + h - f, left: s.left + m - d };
}
function TN(r, a) {
  const o = [];
  for (; r.previousElementSibling; ) {
    const s = r.previousElementSibling;
    (a ? s.matches(a) && o.push(s) : o.push(s), (r = s));
  }
  return o;
}
function xN(r, a) {
  const o = [];
  for (; r.nextElementSibling; ) {
    const s = r.nextElementSibling;
    (a ? s.matches(a) && o.push(s) : o.push(s), (r = s));
  }
  return o;
}
function Ii(r, a) {
  return Kn().getComputedStyle(r, null).getPropertyValue(a);
}
function oC(r) {
  let a = r,
    o;
  if (a) {
    for (o = 0; (a = a.previousSibling) !== null; )
      a.nodeType === 1 && (o += 1);
    return o;
  }
}
function RN(r, a) {
  const o = [];
  let s = r.parentElement;
  for (; s; )
    (a ? s.matches(a) && o.push(s) : o.push(s), (s = s.parentElement));
  return o;
}
function lC(r, a, o) {
  const s = Kn();
  return o
    ? r[a === 'width' ? 'offsetWidth' : 'offsetHeight'] +
        parseFloat(
          s
            .getComputedStyle(r, null)
            .getPropertyValue(a === 'width' ? 'margin-right' : 'margin-top')
        ) +
        parseFloat(
          s
            .getComputedStyle(r, null)
            .getPropertyValue(a === 'width' ? 'margin-left' : 'margin-bottom')
        )
    : r.offsetWidth;
}
function _N(r) {
  return (Array.isArray(r) ? r : [r]).filter((a) => !!a);
}
function sC(r, a) {
  (a === void 0 && (a = ''),
    typeof trustedTypes < 'u'
      ? (r.innerHTML = trustedTypes
          .createPolicy('html', { createHTML: (o) => o })
          .createHTML(a))
      : (r.innerHTML = a));
}
let $m;
function DN() {
  const r = Kn(),
    a = Ur();
  return {
    smoothScroll:
      a.documentElement &&
      a.documentElement.style &&
      'scrollBehavior' in a.documentElement.style,
    touch: !!(
      'ontouchstart' in r ||
      (r.DocumentTouch && a instanceof r.DocumentTouch)
    ),
  };
}
function sT() {
  return ($m || ($m = DN()), $m);
}
let Ym;
function ON(r) {
  let { userAgent: a } = r === void 0 ? {} : r;
  const o = sT(),
    s = Kn(),
    c = s.navigator.platform,
    f = a || s.navigator.userAgent,
    d = { ios: !1, android: !1 },
    h = s.screen.width,
    m = s.screen.height,
    g = f.match(/(Android);?[\s\/]+([\d.]+)?/);
  let S = f.match(/(iPad).*OS\s([\d_]+)/);
  const E = f.match(/(iPod)(.*OS\s([\d_]+))?/),
    T = !S && f.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
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
    !S &&
      O &&
      o.touch &&
      x.indexOf(`${h}x${m}`) >= 0 &&
      ((S = f.match(/(Version)\/([\d.]+)/)),
      S || (S = [0, 1, '13_0_0']),
      (O = !1)),
    g && !D && ((d.os = 'android'), (d.android = !0)),
    (S || T || E) && ((d.os = 'ios'), (d.ios = !0)),
    d
  );
}
function uT(r) {
  return (r === void 0 && (r = {}), Ym || (Ym = ON(r)), Ym);
}
let Gm;
function AN() {
  const r = Kn(),
    a = uT();
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
        .map((S) => Number(S));
      o = m < 16 || (m === 16 && g < 2);
    }
  }
  const c = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      r.navigator.userAgent
    ),
    f = s(),
    d = f || (c && a.ios);
  return {
    isSafari: o || f,
    needPerspectiveFix: o,
    need3dFix: d,
    isWebView: c,
  };
}
function cT() {
  return (Gm || (Gm = AN()), Gm);
}
function MN(r) {
  let { swiper: a, on: o, emit: s } = r;
  const c = Kn();
  let f = null,
    d = null;
  const h = () => {
      !a || a.destroyed || !a.initialized || (s('beforeResize'), s('resize'));
    },
    m = () => {
      !a ||
        a.destroyed ||
        !a.initialized ||
        ((f = new ResizeObserver((E) => {
          d = c.requestAnimationFrame(() => {
            const { width: T, height: D } = a;
            let O = T,
              x = D;
            (E.forEach((k) => {
              let { contentBoxSize: L, contentRect: R, target: z } = k;
              (z && z !== a.el) ||
                ((O = R ? R.width : (L[0] || L).inlineSize),
                (x = R ? R.height : (L[0] || L).blockSize));
            }),
              (O !== T || x !== D) && h());
          });
        })),
        f.observe(a.el));
    },
    g = () => {
      (d && c.cancelAnimationFrame(d),
        f && f.unobserve && a.el && (f.unobserve(a.el), (f = null)));
    },
    S = () => {
      !a || a.destroyed || !a.initialized || s('orientationchange');
    };
  (o('init', () => {
    if (a.params.resizeObserver && typeof c.ResizeObserver < 'u') {
      m();
      return;
    }
    (c.addEventListener('resize', h),
      c.addEventListener('orientationchange', S));
  }),
    o('destroy', () => {
      (g(),
        c.removeEventListener('resize', h),
        c.removeEventListener('orientationchange', S));
    }));
}
function LN(r) {
  let { swiper: a, extendParams: o, on: s, emit: c } = r;
  const f = [],
    d = Kn(),
    h = function (S, E) {
      E === void 0 && (E = {});
      const T = d.MutationObserver || d.WebkitMutationObserver,
        D = new T((O) => {
          if (a.__preventObserver__) return;
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
      (D.observe(S, {
        attributes: typeof E.attributes > 'u' ? !0 : E.attributes,
        childList: a.isElement || (typeof E.childList > 'u' ? !0 : E).childList,
        characterData: typeof E.characterData > 'u' ? !0 : E.characterData,
      }),
        f.push(D));
    },
    m = () => {
      if (a.params.observer) {
        if (a.params.observeParents) {
          const S = RN(a.hostEl);
          for (let E = 0; E < S.length; E += 1) h(S[E]);
        }
        (h(a.hostEl, { childList: a.params.observeSlideChildren }),
          h(a.wrapperEl, { attributes: !1 }));
      }
    },
    g = () => {
      (f.forEach((S) => {
        S.disconnect();
      }),
        f.splice(0, f.length));
    };
  (o({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    s('init', m),
    s('destroy', g));
}
var kN = {
  on(r, a, o) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof a != 'function') return s;
    const c = o ? 'unshift' : 'push';
    return (
      r.split(' ').forEach((f) => {
        (s.eventsListeners[f] || (s.eventsListeners[f] = []),
          s.eventsListeners[f][c](a));
      }),
      s
    );
  },
  once(r, a, o) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof a != 'function') return s;
    function c() {
      (s.off(r, c), c.__emitterProxy && delete c.__emitterProxy);
      for (var f = arguments.length, d = new Array(f), h = 0; h < f; h++)
        d[h] = arguments[h];
      a.apply(s, d);
    }
    return ((c.__emitterProxy = a), s.on(r, c, o));
  },
  onAny(r, a) {
    const o = this;
    if (!o.eventsListeners || o.destroyed || typeof r != 'function') return o;
    const s = a ? 'unshift' : 'push';
    return (
      o.eventsAnyListeners.indexOf(r) < 0 && o.eventsAnyListeners[s](r),
      o
    );
  },
  offAny(r) {
    const a = this;
    if (!a.eventsListeners || a.destroyed || !a.eventsAnyListeners) return a;
    const o = a.eventsAnyListeners.indexOf(r);
    return (o >= 0 && a.eventsAnyListeners.splice(o, 1), a);
  },
  off(r, a) {
    const o = this;
    return (
      !o.eventsListeners ||
        o.destroyed ||
        !o.eventsListeners ||
        r.split(' ').forEach((s) => {
          typeof a > 'u'
            ? (o.eventsListeners[s] = [])
            : o.eventsListeners[s] &&
              o.eventsListeners[s].forEach((c, f) => {
                (c === a || (c.__emitterProxy && c.__emitterProxy === a)) &&
                  o.eventsListeners[s].splice(f, 1);
              });
        }),
      o
    );
  },
  emit() {
    const r = this;
    if (!r.eventsListeners || r.destroyed || !r.eventsListeners) return r;
    let a, o, s;
    for (var c = arguments.length, f = new Array(c), d = 0; d < c; d++)
      f[d] = arguments[d];
    return (
      typeof f[0] == 'string' || Array.isArray(f[0])
        ? ((a = f[0]), (o = f.slice(1, f.length)), (s = r))
        : ((a = f[0].events), (o = f[0].data), (s = f[0].context || r)),
      o.unshift(s),
      (Array.isArray(a) ? a : a.split(' ')).forEach((m) => {
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
function NN() {
  const r = this;
  let a, o;
  const s = r.el;
  (typeof r.params.width < 'u' && r.params.width !== null
    ? (a = r.params.width)
    : (a = s.clientWidth),
    typeof r.params.height < 'u' && r.params.height !== null
      ? (o = r.params.height)
      : (o = s.clientHeight),
    !((a === 0 && r.isHorizontal()) || (o === 0 && r.isVertical())) &&
      ((a =
        a -
        parseInt(Ii(s, 'padding-left') || 0, 10) -
        parseInt(Ii(s, 'padding-right') || 0, 10)),
      (o =
        o -
        parseInt(Ii(s, 'padding-top') || 0, 10) -
        parseInt(Ii(s, 'padding-bottom') || 0, 10)),
      Number.isNaN(a) && (a = 0),
      Number.isNaN(o) && (o = 0),
      Object.assign(r, {
        width: a,
        height: o,
        size: r.isHorizontal() ? a : o,
      })));
}
function PN() {
  const r = this;
  function a(ee, ue) {
    return parseFloat(ee.getPropertyValue(r.getDirectionLabel(ue)) || 0);
  }
  const o = r.params,
    { wrapperEl: s, slidesEl: c, size: f, rtlTranslate: d, wrongRTL: h } = r,
    m = r.virtual && o.virtual.enabled,
    g = m ? r.virtual.slides.length : r.slides.length,
    S = wa(c, `.${r.params.slideClass}, swiper-slide`),
    E = m ? r.virtual.slides.length : S.length;
  let T = [];
  const D = [],
    O = [];
  let x = o.slidesOffsetBefore;
  typeof x == 'function' && (x = o.slidesOffsetBefore.call(r));
  let k = o.slidesOffsetAfter;
  typeof k == 'function' && (k = o.slidesOffsetAfter.call(r));
  const L = r.snapGrid.length,
    R = r.slidesGrid.length;
  let z = o.spaceBetween,
    U = -x,
    F = 0,
    te = 0;
  if (typeof f > 'u') return;
  (typeof z == 'string' && z.indexOf('%') >= 0
    ? (z = (parseFloat(z.replace('%', '')) / 100) * f)
    : typeof z == 'string' && (z = parseFloat(z)),
    (r.virtualSize = -z),
    S.forEach((ee) => {
      (d ? (ee.style.marginLeft = '') : (ee.style.marginRight = ''),
        (ee.style.marginBottom = ''),
        (ee.style.marginTop = ''));
    }),
    o.centeredSlides &&
      o.cssMode &&
      (dd(s, '--swiper-centered-offset-before', ''),
      dd(s, '--swiper-centered-offset-after', '')));
  const ae = o.grid && o.grid.rows > 1 && r.grid;
  ae ? r.grid.initSlides(S) : r.grid && r.grid.unsetSlides();
  let le;
  const ne =
    o.slidesPerView === 'auto' &&
    o.breakpoints &&
    Object.keys(o.breakpoints).filter(
      (ee) => typeof o.breakpoints[ee].slidesPerView < 'u'
    ).length > 0;
  for (let ee = 0; ee < E; ee += 1) {
    le = 0;
    let ue;
    if (
      (S[ee] && (ue = S[ee]),
      ae && r.grid.updateSlide(ee, ue, S),
      !(S[ee] && Ii(ue, 'display') === 'none'))
    ) {
      if (o.slidesPerView === 'auto') {
        ne && (S[ee].style[r.getDirectionLabel('width')] = '');
        const B = getComputedStyle(ue),
          W = ue.style.transform,
          ie = ue.style.webkitTransform;
        if (
          (W && (ue.style.transform = 'none'),
          ie && (ue.style.webkitTransform = 'none'),
          o.roundLengths)
        )
          le = r.isHorizontal() ? lC(ue, 'width', !0) : lC(ue, 'height', !0);
        else {
          const pe = a(B, 'width'),
            ce = a(B, 'padding-left'),
            ve = a(B, 'padding-right'),
            be = a(B, 'margin-left'),
            xe = a(B, 'margin-right'),
            Ye = B.getPropertyValue('box-sizing');
          if (Ye && Ye === 'border-box') le = pe + be + xe;
          else {
            const { clientWidth: Lt, offsetWidth: we } = ue;
            le = pe + ce + ve + be + xe + (we - Lt);
          }
        }
        (W && (ue.style.transform = W),
          ie && (ue.style.webkitTransform = ie),
          o.roundLengths && (le = Math.floor(le)));
      } else
        ((le = (f - (o.slidesPerView - 1) * z) / o.slidesPerView),
          o.roundLengths && (le = Math.floor(le)),
          S[ee] && (S[ee].style[r.getDirectionLabel('width')] = `${le}px`));
      (S[ee] && (S[ee].swiperSlideSize = le),
        O.push(le),
        o.centeredSlides
          ? ((U = U + le / 2 + F / 2 + z),
            F === 0 && ee !== 0 && (U = U - f / 2 - z),
            ee === 0 && (U = U - f / 2 - z),
            Math.abs(U) < 1 / 1e3 && (U = 0),
            o.roundLengths && (U = Math.floor(U)),
            te % o.slidesPerGroup === 0 && T.push(U),
            D.push(U))
          : (o.roundLengths && (U = Math.floor(U)),
            (te - Math.min(r.params.slidesPerGroupSkip, te)) %
              r.params.slidesPerGroup ===
              0 && T.push(U),
            D.push(U),
            (U = U + le + z)),
        (r.virtualSize += le + z),
        (F = le),
        (te += 1));
    }
  }
  if (
    ((r.virtualSize = Math.max(r.virtualSize, f) + k),
    d &&
      h &&
      (o.effect === 'slide' || o.effect === 'coverflow') &&
      (s.style.width = `${r.virtualSize + z}px`),
    o.setWrapperSize &&
      (s.style[r.getDirectionLabel('width')] = `${r.virtualSize + z}px`),
    ae && r.grid.updateWrapperSize(le, T),
    !o.centeredSlides)
  ) {
    const ee = [];
    for (let ue = 0; ue < T.length; ue += 1) {
      let B = T[ue];
      (o.roundLengths && (B = Math.floor(B)),
        T[ue] <= r.virtualSize - f && ee.push(B));
    }
    ((T = ee),
      Math.floor(r.virtualSize - f) - Math.floor(T[T.length - 1]) > 1 &&
        T.push(r.virtualSize - f));
  }
  if (m && o.loop) {
    const ee = O[0] + z;
    if (o.slidesPerGroup > 1) {
      const ue = Math.ceil(
          (r.virtual.slidesBefore + r.virtual.slidesAfter) / o.slidesPerGroup
        ),
        B = ee * o.slidesPerGroup;
      for (let W = 0; W < ue; W += 1) T.push(T[T.length - 1] + B);
    }
    for (
      let ue = 0;
      ue < r.virtual.slidesBefore + r.virtual.slidesAfter;
      ue += 1
    )
      (o.slidesPerGroup === 1 && T.push(T[T.length - 1] + ee),
        D.push(D[D.length - 1] + ee),
        (r.virtualSize += ee));
  }
  if ((T.length === 0 && (T = [0]), z !== 0)) {
    const ee =
      r.isHorizontal() && d ? 'marginLeft' : r.getDirectionLabel('marginRight');
    S.filter((ue, B) =>
      !o.cssMode || o.loop ? !0 : B !== S.length - 1
    ).forEach((ue) => {
      ue.style[ee] = `${z}px`;
    });
  }
  if (o.centeredSlides && o.centeredSlidesBounds) {
    let ee = 0;
    (O.forEach((B) => {
      ee += B + (z || 0);
    }),
      (ee -= z));
    const ue = ee > f ? ee - f : 0;
    T = T.map((B) => (B <= 0 ? -x : B > ue ? ue + k : B));
  }
  if (o.centerInsufficientSlides) {
    let ee = 0;
    (O.forEach((B) => {
      ee += B + (z || 0);
    }),
      (ee -= z));
    const ue = (o.slidesOffsetBefore || 0) + (o.slidesOffsetAfter || 0);
    if (ee + ue < f) {
      const B = (f - ee - ue) / 2;
      (T.forEach((W, ie) => {
        T[ie] = W - B;
      }),
        D.forEach((W, ie) => {
          D[ie] = W + B;
        }));
    }
  }
  if (
    (Object.assign(r, {
      slides: S,
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
    const ee = -r.snapGrid[0],
      ue = -r.slidesGrid[0];
    ((r.snapGrid = r.snapGrid.map((B) => B + ee)),
      (r.slidesGrid = r.slidesGrid.map((B) => B + ue)));
  }
  if (
    (E !== g && r.emit('slidesLengthChange'),
    T.length !== L &&
      (r.params.watchOverflow && r.checkOverflow(),
      r.emit('snapGridLengthChange')),
    D.length !== R && r.emit('slidesGridLengthChange'),
    o.watchSlidesProgress && r.updateSlidesOffset(),
    r.emit('slidesUpdated'),
    !m && !o.cssMode && (o.effect === 'slide' || o.effect === 'fade'))
  ) {
    const ee = `${o.containerModifierClass}backface-hidden`,
      ue = r.el.classList.contains(ee);
    E <= o.maxBackfaceHiddenSlides
      ? ue || r.el.classList.add(ee)
      : ue && r.el.classList.remove(ee);
  }
}
function zN(r) {
  const a = this,
    o = [],
    s = a.virtual && a.params.virtual.enabled;
  let c = 0,
    f;
  typeof r == 'number'
    ? a.setTransition(r)
    : r === !0 && a.setTransition(a.params.speed);
  const d = (h) => (s ? a.slides[a.getSlideIndexByData(h)] : a.slides[h]);
  if (a.params.slidesPerView !== 'auto' && a.params.slidesPerView > 1)
    if (a.params.centeredSlides)
      (a.visibleSlides || []).forEach((h) => {
        o.push(h);
      });
    else
      for (f = 0; f < Math.ceil(a.params.slidesPerView); f += 1) {
        const h = a.activeIndex + f;
        if (h > a.slides.length && !s) break;
        o.push(d(h));
      }
  else o.push(d(a.activeIndex));
  for (f = 0; f < o.length; f += 1)
    if (typeof o[f] < 'u') {
      const h = o[f].offsetHeight;
      c = h > c ? h : c;
    }
  (c || c === 0) && (a.wrapperEl.style.height = `${c}px`);
}
function UN() {
  const r = this,
    a = r.slides,
    o = r.isElement
      ? r.isHorizontal()
        ? r.wrapperEl.offsetLeft
        : r.wrapperEl.offsetTop
      : 0;
  for (let s = 0; s < a.length; s += 1)
    a[s].swiperSlideOffset =
      (r.isHorizontal() ? a[s].offsetLeft : a[s].offsetTop) -
      o -
      r.cssOverflowAdjustment();
}
const uC = (r, a, o) => {
  a && !r.classList.contains(o)
    ? r.classList.add(o)
    : !a && r.classList.contains(o) && r.classList.remove(o);
};
function FN(r) {
  r === void 0 && (r = (this && this.translate) || 0);
  const a = this,
    o = a.params,
    { slides: s, rtlTranslate: c, snapGrid: f } = a;
  if (s.length === 0) return;
  typeof s[0].swiperSlideOffset > 'u' && a.updateSlidesOffset();
  let d = -r;
  (c && (d = r), (a.visibleSlidesIndexes = []), (a.visibleSlides = []));
  let h = o.spaceBetween;
  typeof h == 'string' && h.indexOf('%') >= 0
    ? (h = (parseFloat(h.replace('%', '')) / 100) * a.size)
    : typeof h == 'string' && (h = parseFloat(h));
  for (let m = 0; m < s.length; m += 1) {
    const g = s[m];
    let S = g.swiperSlideOffset;
    o.cssMode && o.centeredSlides && (S -= s[0].swiperSlideOffset);
    const E =
        (d + (o.centeredSlides ? a.minTranslate() : 0) - S) /
        (g.swiperSlideSize + h),
      T =
        (d - f[0] + (o.centeredSlides ? a.minTranslate() : 0) - S) /
        (g.swiperSlideSize + h),
      D = -(d - S),
      O = D + a.slidesSizesGrid[m],
      x = D >= 0 && D <= a.size - a.slidesSizesGrid[m],
      k =
        (D >= 0 && D < a.size - 1) ||
        (O > 1 && O <= a.size) ||
        (D <= 0 && O >= a.size);
    (k && (a.visibleSlides.push(g), a.visibleSlidesIndexes.push(m)),
      uC(g, k, o.slideVisibleClass),
      uC(g, x, o.slideFullyVisibleClass),
      (g.progress = c ? -E : E),
      (g.originalProgress = c ? -T : T));
  }
}
function VN(r) {
  const a = this;
  if (typeof r > 'u') {
    const S = a.rtlTranslate ? -1 : 1;
    r = (a && a.translate && a.translate * S) || 0;
  }
  const o = a.params,
    s = a.maxTranslate() - a.minTranslate();
  let { progress: c, isBeginning: f, isEnd: d, progressLoop: h } = a;
  const m = f,
    g = d;
  if (s === 0) ((c = 0), (f = !0), (d = !0));
  else {
    c = (r - a.minTranslate()) / s;
    const S = Math.abs(r - a.minTranslate()) < 1,
      E = Math.abs(r - a.maxTranslate()) < 1;
    ((f = S || c <= 0), (d = E || c >= 1), S && (c = 0), E && (c = 1));
  }
  if (o.loop) {
    const S = a.getSlideIndexByData(0),
      E = a.getSlideIndexByData(a.slides.length - 1),
      T = a.slidesGrid[S],
      D = a.slidesGrid[E],
      O = a.slidesGrid[a.slidesGrid.length - 1],
      x = Math.abs(r);
    (x >= T ? (h = (x - T) / O) : (h = (x + O - D) / O), h > 1 && (h -= 1));
  }
  (Object.assign(a, { progress: c, progressLoop: h, isBeginning: f, isEnd: d }),
    (o.watchSlidesProgress || (o.centeredSlides && o.autoHeight)) &&
      a.updateSlidesProgress(r),
    f && !m && a.emit('reachBeginning toEdge'),
    d && !g && a.emit('reachEnd toEdge'),
    ((m && !f) || (g && !d)) && a.emit('fromEdge'),
    a.emit('progress', c));
}
const Wm = (r, a, o) => {
  a && !r.classList.contains(o)
    ? r.classList.add(o)
    : !a && r.classList.contains(o) && r.classList.remove(o);
};
function IN() {
  const r = this,
    { slides: a, params: o, slidesEl: s, activeIndex: c } = r,
    f = r.virtual && o.virtual.enabled,
    d = r.grid && o.grid && o.grid.rows > 1,
    h = (E) => wa(s, `.${o.slideClass}${E}, swiper-slide${E}`)[0];
  let m, g, S;
  if (f)
    if (o.loop) {
      let E = c - r.virtual.slidesBefore;
      (E < 0 && (E = r.virtual.slides.length + E),
        E >= r.virtual.slides.length && (E -= r.virtual.slides.length),
        (m = h(`[data-swiper-slide-index="${E}"]`)));
    } else m = h(`[data-swiper-slide-index="${c}"]`);
  else
    d
      ? ((m = a.find((E) => E.column === c)),
        (S = a.find((E) => E.column === c + 1)),
        (g = a.find((E) => E.column === c - 1)))
      : (m = a[c]);
  (m &&
    (d ||
      ((S = xN(m, `.${o.slideClass}, swiper-slide`)[0]),
      o.loop && !S && (S = a[0]),
      (g = TN(m, `.${o.slideClass}, swiper-slide`)[0]),
      o.loop && !g === 0 && (g = a[a.length - 1]))),
    a.forEach((E) => {
      (Wm(E, E === m, o.slideActiveClass),
        Wm(E, E === S, o.slideNextClass),
        Wm(E, E === g, o.slidePrevClass));
    }),
    r.emitSlidesClasses());
}
const yd = (r, a) => {
    if (!r || r.destroyed || !r.params) return;
    const o = () => (r.isElement ? 'swiper-slide' : `.${r.params.slideClass}`),
      s = a.closest(o());
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
  qm = (r, a) => {
    if (!r.slides[a]) return;
    const o = r.slides[a].querySelector('[loading="lazy"]');
    o && o.removeAttribute('loading');
  },
  sy = (r) => {
    if (!r || r.destroyed || !r.params) return;
    let a = r.params.lazyPreloadPrevNext;
    const o = r.slides.length;
    if (!o || !a || a < 0) return;
    a = Math.min(a, o);
    const s =
        r.params.slidesPerView === 'auto'
          ? r.slidesPerViewDynamic()
          : Math.ceil(r.params.slidesPerView),
      c = r.activeIndex;
    if (r.params.grid && r.params.grid.rows > 1) {
      const d = c,
        h = [d - a];
      (h.push(...Array.from({ length: a }).map((m, g) => d + s + g)),
        r.slides.forEach((m, g) => {
          h.includes(m.column) && qm(r, g);
        }));
      return;
    }
    const f = c + s - 1;
    if (r.params.rewind || r.params.loop)
      for (let d = c - a; d <= f + a; d += 1) {
        const h = ((d % o) + o) % o;
        (h < c || h > f) && qm(r, h);
      }
    else
      for (let d = Math.max(c - a, 0); d <= Math.min(f + a, o - 1); d += 1)
        d !== c && (d > f || d < c) && qm(r, d);
  };
function HN(r) {
  const { slidesGrid: a, params: o } = r,
    s = r.rtlTranslate ? r.translate : -r.translate;
  let c;
  for (let f = 0; f < a.length; f += 1)
    typeof a[f + 1] < 'u'
      ? s >= a[f] && s < a[f + 1] - (a[f + 1] - a[f]) / 2
        ? (c = f)
        : s >= a[f] && s < a[f + 1] && (c = f + 1)
      : s >= a[f] && (c = f);
  return (o.normalizeSlideIndex && (c < 0 || typeof c > 'u') && (c = 0), c);
}
function BN(r) {
  const a = this,
    o = a.rtlTranslate ? a.translate : -a.translate,
    { snapGrid: s, params: c, activeIndex: f, realIndex: d, snapIndex: h } = a;
  let m = r,
    g;
  const S = (D) => {
    let O = D - a.virtual.slidesBefore;
    return (
      O < 0 && (O = a.virtual.slides.length + O),
      O >= a.virtual.slides.length && (O -= a.virtual.slides.length),
      O
    );
  };
  if ((typeof m > 'u' && (m = HN(a)), s.indexOf(o) >= 0)) g = s.indexOf(o);
  else {
    const D = Math.min(c.slidesPerGroupSkip, m);
    g = D + Math.floor((m - D) / c.slidesPerGroup);
  }
  if ((g >= s.length && (g = s.length - 1), m === f && !a.params.loop)) {
    g !== h && ((a.snapIndex = g), a.emit('snapIndexChange'));
    return;
  }
  if (m === f && a.params.loop && a.virtual && a.params.virtual.enabled) {
    a.realIndex = S(m);
    return;
  }
  const E = a.grid && c.grid && c.grid.rows > 1;
  let T;
  if (a.virtual && c.virtual.enabled && c.loop) T = S(m);
  else if (E) {
    const D = a.slides.find((x) => x.column === m);
    let O = parseInt(D.getAttribute('data-swiper-slide-index'), 10);
    (Number.isNaN(O) && (O = Math.max(a.slides.indexOf(D), 0)),
      (T = Math.floor(O / c.grid.rows)));
  } else if (a.slides[m]) {
    const D = a.slides[m].getAttribute('data-swiper-slide-index');
    D ? (T = parseInt(D, 10)) : (T = m);
  } else T = m;
  (Object.assign(a, {
    previousSnapIndex: h,
    snapIndex: g,
    previousRealIndex: d,
    realIndex: T,
    previousIndex: f,
    activeIndex: m,
  }),
    a.initialized && sy(a),
    a.emit('activeIndexChange'),
    a.emit('snapIndexChange'),
    (a.initialized || a.params.runCallbacksOnInit) &&
      (d !== T && a.emit('realIndexChange'), a.emit('slideChange')));
}
function jN(r, a) {
  const o = this,
    s = o.params;
  let c = r.closest(`.${s.slideClass}, swiper-slide`);
  !c &&
    o.isElement &&
    a &&
    a.length > 1 &&
    a.includes(r) &&
    [...a.slice(a.indexOf(r) + 1, a.length)].forEach((h) => {
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
var $N = {
  updateSize: NN,
  updateSlides: PN,
  updateAutoHeight: zN,
  updateSlidesOffset: UN,
  updateSlidesProgress: FN,
  updateProgress: VN,
  updateSlidesClasses: IN,
  updateActiveIndex: BN,
  updateClickedSlide: jN,
};
function YN(r) {
  r === void 0 && (r = this.isHorizontal() ? 'x' : 'y');
  const a = this,
    { params: o, rtlTranslate: s, translate: c, wrapperEl: f } = a;
  if (o.virtualTranslate) return s ? -c : c;
  if (o.cssMode) return c;
  let d = bN(f, r);
  return ((d += a.cssOverflowAdjustment()), s && (d = -d), d || 0);
}
function GN(r, a) {
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
  let S;
  const E = o.maxTranslate() - o.minTranslate();
  (E === 0 ? (S = 0) : (S = (r - o.minTranslate()) / E),
    S !== d && o.updateProgress(r),
    o.emit('setTranslate', o.translate, a));
}
function WN() {
  return -this.snapGrid[0];
}
function qN() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function XN(r, a, o, s, c) {
  (r === void 0 && (r = 0),
    a === void 0 && (a = this.params.speed),
    o === void 0 && (o = !0),
    s === void 0 && (s = !0));
  const f = this,
    { params: d, wrapperEl: h } = f;
  if (f.animating && d.preventInteractionOnTransition) return !1;
  const m = f.minTranslate(),
    g = f.maxTranslate();
  let S;
  if (
    (s && r > m ? (S = m) : s && r < g ? (S = g) : (S = r),
    f.updateProgress(S),
    d.cssMode)
  ) {
    const E = f.isHorizontal();
    if (a === 0) h[E ? 'scrollLeft' : 'scrollTop'] = -S;
    else {
      if (!f.support.smoothScroll)
        return (
          lT({ swiper: f, targetPosition: -S, side: E ? 'left' : 'top' }),
          !0
        );
      h.scrollTo({ [E ? 'left' : 'top']: -S, behavior: 'smooth' });
    }
    return !0;
  }
  return (
    a === 0
      ? (f.setTransition(0),
        f.setTranslate(S),
        o && (f.emit('beforeTransitionStart', a, c), f.emit('transitionEnd')))
      : (f.setTransition(a),
        f.setTranslate(S),
        o && (f.emit('beforeTransitionStart', a, c), f.emit('transitionStart')),
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
var QN = {
  getTranslate: YN,
  setTranslate: GN,
  minTranslate: WN,
  maxTranslate: qN,
  translateTo: XN,
};
function KN(r, a) {
  const o = this;
  (o.params.cssMode ||
    ((o.wrapperEl.style.transitionDuration = `${r}ms`),
    (o.wrapperEl.style.transitionDelay = r === 0 ? '0ms' : '')),
    o.emit('setTransition', r, a));
}
function fT(r) {
  let { swiper: a, runCallbacks: o, direction: s, step: c } = r;
  const { activeIndex: f, previousIndex: d } = a;
  let h = s;
  (h || (f > d ? (h = 'next') : f < d ? (h = 'prev') : (h = 'reset')),
    a.emit(`transition${c}`),
    o && h === 'reset'
      ? a.emit(`slideResetTransition${c}`)
      : o &&
        f !== d &&
        (a.emit(`slideChangeTransition${c}`),
        h === 'next'
          ? a.emit(`slideNextTransition${c}`)
          : a.emit(`slidePrevTransition${c}`)));
}
function JN(r, a) {
  r === void 0 && (r = !0);
  const o = this,
    { params: s } = o;
  s.cssMode ||
    (s.autoHeight && o.updateAutoHeight(),
    fT({ swiper: o, runCallbacks: r, direction: a, step: 'Start' }));
}
function ZN(r, a) {
  r === void 0 && (r = !0);
  const o = this,
    { params: s } = o;
  ((o.animating = !1),
    !s.cssMode &&
      (o.setTransition(0),
      fT({ swiper: o, runCallbacks: r, direction: a, step: 'End' })));
}
var eP = { setTransition: KN, transitionStart: JN, transitionEnd: ZN };
function tP(r, a, o, s, c) {
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
    previousIndex: S,
    activeIndex: E,
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
  typeof a > 'u' && (a = f.params.speed);
  const x = Math.min(f.params.slidesPerGroupSkip, d);
  let k = x + Math.floor((d - x) / f.params.slidesPerGroup);
  k >= m.length && (k = m.length - 1);
  const L = -m[k];
  if (h.normalizeSlideIndex)
    for (let ae = 0; ae < g.length; ae += 1) {
      const le = -Math.floor(L * 100),
        ne = Math.floor(g[ae] * 100),
        ee = Math.floor(g[ae + 1] * 100);
      typeof g[ae + 1] < 'u'
        ? le >= ne && le < ee - (ee - ne) / 2
          ? (d = ae)
          : le >= ne && le < ee && (d = ae + 1)
        : le >= ne && (d = ae);
    }
  if (
    f.initialized &&
    d !== E &&
    ((!f.allowSlideNext &&
      (T
        ? L > f.translate && L > f.minTranslate()
        : L < f.translate && L < f.minTranslate())) ||
      (!f.allowSlidePrev &&
        L > f.translate &&
        L > f.maxTranslate() &&
        (E || 0) !== d))
  )
    return !1;
  (d !== (S || 0) && o && f.emit('beforeSlideChangeStart'),
    f.updateProgress(L));
  let R;
  d > E ? (R = 'next') : d < E ? (R = 'prev') : (R = 'reset');
  const z = f.virtual && f.params.virtual.enabled;
  if (!(z && c) && ((T && -L === f.translate) || (!T && L === f.translate)))
    return (
      f.updateActiveIndex(d),
      h.autoHeight && f.updateAutoHeight(),
      f.updateSlidesClasses(),
      h.effect !== 'slide' && f.setTranslate(L),
      R !== 'reset' && (f.transitionStart(o, R), f.transitionEnd(o, R)),
      !1
    );
  if (h.cssMode) {
    const ae = f.isHorizontal(),
      le = T ? L : -L;
    if (a === 0)
      (z &&
        ((f.wrapperEl.style.scrollSnapType = 'none'),
        (f._immediateVirtual = !0)),
        z && !f._cssModeVirtualInitialSet && f.params.initialSlide > 0
          ? ((f._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              D[ae ? 'scrollLeft' : 'scrollTop'] = le;
            }))
          : (D[ae ? 'scrollLeft' : 'scrollTop'] = le),
        z &&
          requestAnimationFrame(() => {
            ((f.wrapperEl.style.scrollSnapType = ''),
              (f._immediateVirtual = !1));
          }));
    else {
      if (!f.support.smoothScroll)
        return (
          lT({ swiper: f, targetPosition: le, side: ae ? 'left' : 'top' }),
          !0
        );
      D.scrollTo({ [ae ? 'left' : 'top']: le, behavior: 'smooth' });
    }
    return !0;
  }
  const te = cT().isSafari;
  return (
    z && !c && te && f.isElement && f.virtual.update(!1, !1, d),
    f.setTransition(a),
    f.setTranslate(L),
    f.updateActiveIndex(d),
    f.updateSlidesClasses(),
    f.emit('beforeTransitionStart', a, s),
    f.transitionStart(o, R),
    a === 0
      ? f.transitionEnd(o, R)
      : f.animating ||
        ((f.animating = !0),
        f.onSlideToWrapperTransitionEnd ||
          (f.onSlideToWrapperTransitionEnd = function (le) {
            !f ||
              f.destroyed ||
              (le.target === this &&
                (f.wrapperEl.removeEventListener(
                  'transitionend',
                  f.onSlideToWrapperTransitionEnd
                ),
                (f.onSlideToWrapperTransitionEnd = null),
                delete f.onSlideToWrapperTransitionEnd,
                f.transitionEnd(o, R)));
          }),
        f.wrapperEl.addEventListener(
          'transitionend',
          f.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function nP(r, a, o, s) {
  (r === void 0 && (r = 0),
    o === void 0 && (o = !0),
    typeof r == 'string' && (r = parseInt(r, 10)));
  const c = this;
  if (c.destroyed) return;
  typeof a > 'u' && (a = c.params.speed);
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
      let S = c.params.slidesPerView;
      S === 'auto'
        ? (S = c.slidesPerViewDynamic())
        : ((S = Math.ceil(parseFloat(c.params.slidesPerView, 10))),
          g && S % 2 === 0 && (S = S + 1));
      let E = m - h < S;
      if (
        (g && (E = E || h < Math.ceil(S / 2)),
        s && g && c.params.slidesPerView !== 'auto' && !f && (E = !1),
        E)
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
      c.slideTo(d, a, o, s);
    }),
    c
  );
}
function rP(r, a, o) {
  a === void 0 && (a = !0);
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
          s.slideTo(s.activeIndex + m, r, a, o);
        }),
        !0
      );
  }
  return f.rewind && s.isEnd
    ? s.slideTo(0, r, a, o)
    : s.slideTo(s.activeIndex + m, r, a, o);
}
function aP(r, a, o) {
  a === void 0 && (a = !0);
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
  const S = s.virtual && c.virtual.enabled;
  if (c.loop) {
    if (g && !S && c.loopPreventsSliding) return !1;
    (s.loopFix({ direction: 'prev' }),
      (s._clientLeft = s.wrapperEl.clientLeft));
  }
  const E = h ? s.translate : -s.translate;
  function T(R) {
    return R < 0 ? -Math.floor(Math.abs(R)) : Math.floor(R);
  }
  const D = T(E),
    O = f.map((R) => T(R)),
    x = c.freeMode && c.freeMode.enabled;
  let k = f[O.indexOf(D) - 1];
  if (typeof k > 'u' && (c.cssMode || x)) {
    let R;
    (f.forEach((z, U) => {
      D >= z && (R = U);
    }),
      typeof R < 'u' && (k = x ? f[R] : f[R > 0 ? R - 1 : R]));
  }
  let L = 0;
  if (
    (typeof k < 'u' &&
      ((L = d.indexOf(k)),
      L < 0 && (L = s.activeIndex - 1),
      c.slidesPerView === 'auto' &&
        c.slidesPerGroup === 1 &&
        c.slidesPerGroupAuto &&
        ((L = L - s.slidesPerViewDynamic('previous', !0) + 1),
        (L = Math.max(L, 0)))),
    c.rewind && s.isBeginning)
  ) {
    const R =
      s.params.virtual && s.params.virtual.enabled && s.virtual
        ? s.virtual.slides.length - 1
        : s.slides.length - 1;
    return s.slideTo(R, r, a, o);
  } else if (c.loop && s.activeIndex === 0 && c.cssMode)
    return (
      requestAnimationFrame(() => {
        s.slideTo(L, r, a, o);
      }),
      !0
    );
  return s.slideTo(L, r, a, o);
}
function iP(r, a, o) {
  a === void 0 && (a = !0);
  const s = this;
  if (!s.destroyed)
    return (
      typeof r > 'u' && (r = s.params.speed),
      s.slideTo(s.activeIndex, r, a, o)
    );
}
function oP(r, a, o, s) {
  (a === void 0 && (a = !0), s === void 0 && (s = 0.5));
  const c = this;
  if (c.destroyed) return;
  typeof r > 'u' && (r = c.params.speed);
  let f = c.activeIndex;
  const d = Math.min(c.params.slidesPerGroupSkip, f),
    h = d + Math.floor((f - d) / c.params.slidesPerGroup),
    m = c.rtlTranslate ? c.translate : -c.translate;
  if (m >= c.snapGrid[h]) {
    const g = c.snapGrid[h],
      S = c.snapGrid[h + 1];
    m - g > (S - g) * s && (f += c.params.slidesPerGroup);
  } else {
    const g = c.snapGrid[h - 1],
      S = c.snapGrid[h];
    m - g <= (S - g) * s && (f -= c.params.slidesPerGroup);
  }
  return (
    (f = Math.max(f, 0)),
    (f = Math.min(f, c.slidesGrid.length - 1)),
    c.slideTo(f, r, a, o)
  );
}
function lP() {
  const r = this;
  if (r.destroyed) return;
  const { params: a, slidesEl: o } = r,
    s = a.slidesPerView === 'auto' ? r.slidesPerViewDynamic() : a.slidesPerView;
  let c = r.getSlideIndexWhenGrid(r.clickedIndex),
    f;
  const d = r.isElement ? 'swiper-slide' : `.${a.slideClass}`,
    h = r.grid && r.params.grid && r.params.grid.rows > 1;
  if (a.loop) {
    if (r.animating) return;
    ((f = parseInt(r.clickedSlide.getAttribute('data-swiper-slide-index'), 10)),
      a.centeredSlides
        ? r.slideToLoop(f)
        : c >
            (h
              ? (r.slides.length - s) / 2 - (r.params.grid.rows - 1)
              : r.slides.length - s)
          ? (r.loopFix(),
            (c = r.getSlideIndex(
              wa(o, `${d}[data-swiper-slide-index="${f}"]`)[0]
            )),
            Ey(() => {
              r.slideTo(c);
            }))
          : r.slideTo(c));
  } else r.slideTo(c);
}
var sP = {
  slideTo: tP,
  slideToLoop: nP,
  slideNext: rP,
  slidePrev: aP,
  slideReset: iP,
  slideToClosest: oP,
  slideToClickedSlide: lP,
};
function uP(r, a) {
  const o = this,
    { params: s, slidesEl: c } = o;
  if (!s.loop || (o.virtual && o.params.virtual.enabled)) return;
  const f = () => {
      wa(c, `.${s.slideClass}, swiper-slide`).forEach((D, O) => {
        D.setAttribute('data-swiper-slide-index', O);
      });
    },
    d = () => {
      const T = wa(c, `.${s.slideBlankClass}`);
      (T.forEach((D) => {
        D.remove();
      }),
        T.length > 0 && (o.recalcSlides(), o.updateSlides()));
    },
    h = o.grid && s.grid && s.grid.rows > 1;
  s.loopAddBlankSlides && (s.slidesPerGroup > 1 || h) && d();
  const m = s.slidesPerGroup * (h ? s.grid.rows : 1),
    g = o.slides.length % m !== 0,
    S = h && o.slides.length % s.grid.rows !== 0,
    E = (T) => {
      for (let D = 0; D < T; D += 1) {
        const O = o.isElement
          ? Hu('swiper-slide', [s.slideBlankClass])
          : Hu('div', [s.slideClass, s.slideBlankClass]);
        o.slidesEl.append(O);
      }
    };
  if (g) {
    if (s.loopAddBlankSlides) {
      const T = m - (o.slides.length % m);
      (E(T), o.recalcSlides(), o.updateSlides());
    } else
      Rd(
        'Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
      );
    f();
  } else if (S) {
    if (s.loopAddBlankSlides) {
      const T = s.grid.rows - (o.slides.length % s.grid.rows);
      (E(T), o.recalcSlides(), o.updateSlides());
    } else
      Rd(
        'Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
      );
    f();
  } else f();
  o.loopFix({
    slideRealIndex: r,
    direction: s.centeredSlides ? void 0 : 'next',
    initial: a,
  });
}
function cP(r) {
  let {
    slideRealIndex: a,
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
      slides: S,
      allowSlidePrev: E,
      allowSlideNext: T,
      slidesEl: D,
      params: O,
    } = g,
    { centeredSlides: x, initialSlide: k } = O;
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
      (g.allowSlidePrev = E),
      (g.allowSlideNext = T),
      g.emit('loopFix'));
    return;
  }
  let L = O.slidesPerView;
  L === 'auto'
    ? (L = g.slidesPerViewDynamic())
    : ((L = Math.ceil(parseFloat(O.slidesPerView, 10))),
      x && L % 2 === 0 && (L = L + 1));
  const R = O.slidesPerGroupAuto ? L : O.slidesPerGroup;
  let z = x ? Math.max(R, Math.ceil(L / 2)) : R;
  (z % R !== 0 && (z += R - (z % R)),
    (z += O.loopAdditionalSlides),
    (g.loopedSlides = z));
  const U = g.grid && O.grid && O.grid.rows > 1;
  S.length < L + z || (g.params.effect === 'cards' && S.length < L + z * 2)
    ? Rd(
        'Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters'
      )
    : U &&
      O.grid.fill === 'row' &&
      Rd(
        'Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`'
      );
  const F = [],
    te = [],
    ae = U ? Math.ceil(S.length / O.grid.rows) : S.length,
    le = d && ae - k < L && !x;
  let ne = le ? k : g.activeIndex;
  typeof f > 'u'
    ? (f = g.getSlideIndex(
        S.find((ce) => ce.classList.contains(O.slideActiveClass))
      ))
    : (ne = f);
  const ee = s === 'next' || !s,
    ue = s === 'prev' || !s;
  let B = 0,
    W = 0;
  const pe = (U ? S[f].column : f) + (x && typeof c > 'u' ? -L / 2 + 0.5 : 0);
  if (pe < z) {
    B = Math.max(z - pe, R);
    for (let ce = 0; ce < z - pe; ce += 1) {
      const ve = ce - Math.floor(ce / ae) * ae;
      if (U) {
        const be = ae - ve - 1;
        for (let xe = S.length - 1; xe >= 0; xe -= 1)
          S[xe].column === be && F.push(xe);
      } else F.push(ae - ve - 1);
    }
  } else if (pe + L > ae - z) {
    ((W = Math.max(pe - (ae - z * 2), R)),
      le && (W = Math.max(W, L - ae + k + 1)));
    for (let ce = 0; ce < W; ce += 1) {
      const ve = ce - Math.floor(ce / ae) * ae;
      U
        ? S.forEach((be, xe) => {
            be.column === ve && te.push(xe);
          })
        : te.push(ve);
    }
  }
  if (
    ((g.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      g.__preventObserver__ = !1;
    }),
    g.params.effect === 'cards' &&
      S.length < L + z * 2 &&
      (te.includes(f) && te.splice(te.indexOf(f), 1),
      F.includes(f) && F.splice(F.indexOf(f), 1)),
    ue &&
      F.forEach((ce) => {
        ((S[ce].swiperLoopMoveDOM = !0),
          D.prepend(S[ce]),
          (S[ce].swiperLoopMoveDOM = !1));
      }),
    ee &&
      te.forEach((ce) => {
        ((S[ce].swiperLoopMoveDOM = !0),
          D.append(S[ce]),
          (S[ce].swiperLoopMoveDOM = !1));
      }),
    g.recalcSlides(),
    O.slidesPerView === 'auto'
      ? g.updateSlides()
      : U &&
        ((F.length > 0 && ue) || (te.length > 0 && ee)) &&
        g.slides.forEach((ce, ve) => {
          g.grid.updateSlide(ve, ce, g.slides);
        }),
    O.watchSlidesProgress && g.updateSlidesOffset(),
    o)
  ) {
    if (F.length > 0 && ue) {
      if (typeof a > 'u') {
        const ce = g.slidesGrid[ne],
          be = g.slidesGrid[ne + B] - ce;
        m
          ? g.setTranslate(g.translate - be)
          : (g.slideTo(ne + Math.ceil(B), 0, !1, !0),
            c &&
              ((g.touchEventsData.startTranslate =
                g.touchEventsData.startTranslate - be),
              (g.touchEventsData.currentTranslate =
                g.touchEventsData.currentTranslate - be)));
      } else if (c) {
        const ce = U ? F.length / O.grid.rows : F.length;
        (g.slideTo(g.activeIndex + ce, 0, !1, !0),
          (g.touchEventsData.currentTranslate = g.translate));
      }
    } else if (te.length > 0 && ee)
      if (typeof a > 'u') {
        const ce = g.slidesGrid[ne],
          be = g.slidesGrid[ne - W] - ce;
        m
          ? g.setTranslate(g.translate - be)
          : (g.slideTo(ne - W, 0, !1, !0),
            c &&
              ((g.touchEventsData.startTranslate =
                g.touchEventsData.startTranslate - be),
              (g.touchEventsData.currentTranslate =
                g.touchEventsData.currentTranslate - be)));
      } else {
        const ce = U ? te.length / O.grid.rows : te.length;
        g.slideTo(g.activeIndex - ce, 0, !1, !0);
      }
  }
  if (
    ((g.allowSlidePrev = E),
    (g.allowSlideNext = T),
    g.controller && g.controller.control && !h)
  ) {
    const ce = {
      slideRealIndex: a,
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
              ...ce,
              slideTo: ve.params.slidesPerView === O.slidesPerView ? o : !1,
            });
        })
      : g.controller.control instanceof g.constructor &&
        g.controller.control.params.loop &&
        g.controller.control.loopFix({
          ...ce,
          slideTo:
            g.controller.control.params.slidesPerView === O.slidesPerView
              ? o
              : !1,
        });
  }
  g.emit('loopFix');
}
function fP() {
  const r = this,
    { params: a, slidesEl: o } = r;
  if (!a.loop || !o || (r.virtual && r.params.virtual.enabled)) return;
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
var dP = { loopCreate: uP, loopFix: cP, loopDestroy: fP };
function pP(r) {
  const a = this;
  if (
    !a.params.simulateTouch ||
    (a.params.watchOverflow && a.isLocked) ||
    a.params.cssMode
  )
    return;
  const o = a.params.touchEventsTarget === 'container' ? a.el : a.wrapperEl;
  (a.isElement && (a.__preventObserver__ = !0),
    (o.style.cursor = 'move'),
    (o.style.cursor = r ? 'grabbing' : 'grab'),
    a.isElement &&
      requestAnimationFrame(() => {
        a.__preventObserver__ = !1;
      }));
}
function vP() {
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
var hP = { setGrabCursor: pP, unsetGrabCursor: vP };
function mP(r, a) {
  a === void 0 && (a = this);
  function o(s) {
    if (!s || s === Ur() || s === Kn()) return null;
    s.assignedSlot && (s = s.assignedSlot);
    const c = s.closest(r);
    return !c && !s.getRootNode ? null : c || o(s.getRootNode().host);
  }
  return o(a);
}
function cC(r, a, o) {
  const s = Kn(),
    { params: c } = r,
    f = c.edgeSwipeDetection,
    d = c.edgeSwipeThreshold;
  return f && (o <= d || o >= s.innerWidth - d)
    ? f === 'prevent'
      ? (a.preventDefault(), !0)
      : !1
    : !0;
}
function yP(r) {
  const a = this,
    o = Ur();
  let s = r;
  s.originalEvent && (s = s.originalEvent);
  const c = a.touchEventsData;
  if (s.type === 'pointerdown') {
    if (c.pointerId !== null && c.pointerId !== s.pointerId) return;
    c.pointerId = s.pointerId;
  } else
    s.type === 'touchstart' &&
      s.targetTouches.length === 1 &&
      (c.touchId = s.targetTouches[0].identifier);
  if (s.type === 'touchstart') {
    cC(a, s, s.targetTouches[0].pageX);
    return;
  }
  const { params: f, touches: d, enabled: h } = a;
  if (
    !h ||
    (!f.simulateTouch && s.pointerType === 'mouse') ||
    (a.animating && f.preventInteractionOnTransition)
  )
    return;
  !a.animating && f.cssMode && f.loop && a.loopFix();
  let m = s.target;
  if (
    (f.touchEventsTarget === 'wrapper' && !wN(m, a.wrapperEl)) ||
    ('which' in s && s.which === 3) ||
    ('button' in s && s.button > 0) ||
    (c.isTouched && c.isMoved)
  )
    return;
  const g = !!f.noSwipingClass && f.noSwipingClass !== '',
    S = s.composedPath ? s.composedPath() : s.path;
  g && s.target && s.target.shadowRoot && S && (m = S[0]);
  const E = f.noSwipingSelector ? f.noSwipingSelector : `.${f.noSwipingClass}`,
    T = !!(s.target && s.target.shadowRoot);
  if (f.noSwiping && (T ? mP(E, m) : m.closest(E))) {
    a.allowClick = !0;
    return;
  }
  if (f.swipeHandler && !m.closest(f.swipeHandler)) return;
  ((d.currentX = s.pageX), (d.currentY = s.pageY));
  const D = d.currentX,
    O = d.currentY;
  if (!cC(a, s, D)) return;
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
    (a.allowClick = !0),
    a.updateSize(),
    (a.swipeDirection = void 0),
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
  const k = x && a.allowTouchMove && f.touchStartPreventDefault;
  ((f.touchStartForcePreventDefault || k) &&
    !m.isContentEditable &&
    s.preventDefault(),
    f.freeMode &&
      f.freeMode.enabled &&
      a.freeMode &&
      a.animating &&
      !f.cssMode &&
      a.freeMode.onTouchStart(),
    a.emit('touchStart', s));
}
function gP(r) {
  const a = Ur(),
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
      ((g = [...m.changedTouches].find((te) => te.identifier === s.touchId)),
      !g || g.identifier !== s.touchId)
    )
      return;
  } else g = m;
  if (!s.isTouched) {
    s.startMoving && s.isScrolling && o.emit('touchMoveOpposite', m);
    return;
  }
  const S = g.pageX,
    E = g.pageY;
  if (m.preventedByNestedSwiper) {
    ((f.startX = S), (f.startY = E));
    return;
  }
  if (!o.allowTouchMove) {
    (m.target.matches(s.focusableElements) || (o.allowClick = !1),
      s.isTouched &&
        (Object.assign(f, { startX: S, startY: E, currentX: S, currentY: E }),
        (s.touchStartTime = xd())));
    return;
  }
  if (c.touchReleaseOnEdges && !c.loop)
    if (o.isVertical()) {
      if (
        (E < f.startY && o.translate <= o.maxTranslate()) ||
        (E > f.startY && o.translate >= o.minTranslate())
      ) {
        ((s.isTouched = !1), (s.isMoved = !1));
        return;
      }
    } else {
      if (
        d &&
        ((S > f.startX && -o.translate <= o.maxTranslate()) ||
          (S < f.startX && -o.translate >= o.minTranslate()))
      )
        return;
      if (
        !d &&
        ((S < f.startX && o.translate <= o.maxTranslate()) ||
          (S > f.startX && o.translate >= o.minTranslate()))
      )
        return;
    }
  if (
    (a.activeElement &&
      a.activeElement.matches(s.focusableElements) &&
      a.activeElement !== m.target &&
      m.pointerType !== 'mouse' &&
      a.activeElement.blur(),
    a.activeElement &&
      m.target === a.activeElement &&
      m.target.matches(s.focusableElements))
  ) {
    ((s.isMoved = !0), (o.allowClick = !1));
    return;
  }
  (s.allowTouchCallbacks && o.emit('touchMove', m),
    (f.previousX = f.currentX),
    (f.previousY = f.currentY),
    (f.currentX = S),
    (f.currentY = E));
  const T = f.currentX - f.startX,
    D = f.currentY - f.startY;
  if (o.params.threshold && Math.sqrt(T ** 2 + D ** 2) < o.params.threshold)
    return;
  if (typeof s.isScrolling > 'u') {
    let te;
    (o.isHorizontal() && f.currentY === f.startY) ||
    (o.isVertical() && f.currentX === f.startX)
      ? (s.isScrolling = !1)
      : T * T + D * D >= 25 &&
        ((te = (Math.atan2(Math.abs(D), Math.abs(T)) * 180) / Math.PI),
        (s.isScrolling = o.isHorizontal()
          ? te > c.touchAngle
          : 90 - te > c.touchAngle));
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
  const k = o.touchesDirection;
  ((o.swipeDirection = O > 0 ? 'prev' : 'next'),
    (o.touchesDirection = x > 0 ? 'prev' : 'next'));
  const L = o.params.loop && !c.cssMode,
    R =
      (o.touchesDirection === 'next' && o.allowSlideNext) ||
      (o.touchesDirection === 'prev' && o.allowSlidePrev);
  if (!s.isMoved) {
    if (
      (L && R && o.loopFix({ direction: o.swipeDirection }),
      (s.startTranslate = o.getTranslate()),
      o.setTransition(0),
      o.animating)
    ) {
      const te = new window.CustomEvent('transitionend', {
        bubbles: !0,
        cancelable: !0,
        detail: { bySwiperTouchMove: !0 },
      });
      o.wrapperEl.dispatchEvent(te);
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
      k !== o.touchesDirection &&
      L &&
      R &&
      Math.abs(O) >= 1)
  ) {
    (Object.assign(f, {
      startX: S,
      startY: E,
      currentX: S,
      currentY: E,
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
          R &&
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
          R &&
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
function bP(r) {
  const a = this,
    o = a.touchEventsData;
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
      (a.browser.isSafari || a.browser.isWebView)
    )
  )
    return;
  ((o.pointerId = null), (o.touchId = null));
  const {
    params: d,
    touches: h,
    rtlTranslate: m,
    slidesGrid: g,
    enabled: S,
  } = a;
  if (!S || (!d.simulateTouch && s.pointerType === 'mouse')) return;
  if (
    (o.allowTouchCallbacks && a.emit('touchEnd', s),
    (o.allowTouchCallbacks = !1),
    !o.isTouched)
  ) {
    (o.isMoved && d.grabCursor && a.setGrabCursor(!1),
      (o.isMoved = !1),
      (o.startMoving = !1));
    return;
  }
  d.grabCursor &&
    o.isMoved &&
    o.isTouched &&
    (a.allowSlideNext === !0 || a.allowSlidePrev === !0) &&
    a.setGrabCursor(!1);
  const E = xd(),
    T = E - o.touchStartTime;
  if (a.allowClick) {
    const F = s.path || (s.composedPath && s.composedPath());
    (a.updateClickedSlide((F && F[0]) || s.target, F),
      a.emit('tap click', s),
      T < 300 &&
        E - o.lastClickTime < 300 &&
        a.emit('doubleTap doubleClick', s));
  }
  if (
    ((o.lastClickTime = xd()),
    Ey(() => {
      a.destroyed || (a.allowClick = !0);
    }),
    !o.isTouched ||
      !o.isMoved ||
      !a.swipeDirection ||
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
      ? (D = m ? a.translate : -a.translate)
      : (D = -o.currentTranslate),
    d.cssMode)
  )
    return;
  if (d.freeMode && d.freeMode.enabled) {
    a.freeMode.onTouchEnd({ currentPos: D });
    return;
  }
  const O = D >= -a.maxTranslate() && !a.params.loop;
  let x = 0,
    k = a.slidesSizesGrid[0];
  for (
    let F = 0;
    F < g.length;
    F += F < d.slidesPerGroupSkip ? 1 : d.slidesPerGroup
  ) {
    const te = F < d.slidesPerGroupSkip - 1 ? 1 : d.slidesPerGroup;
    typeof g[F + te] < 'u'
      ? (O || (D >= g[F] && D < g[F + te])) && ((x = F), (k = g[F + te] - g[F]))
      : (O || D >= g[F]) && ((x = F), (k = g[g.length - 1] - g[g.length - 2]));
  }
  let L = null,
    R = null;
  d.rewind &&
    (a.isBeginning
      ? (R =
          d.virtual && d.virtual.enabled && a.virtual
            ? a.virtual.slides.length - 1
            : a.slides.length - 1)
      : a.isEnd && (L = 0));
  const z = (D - g[x]) / k,
    U = x < d.slidesPerGroupSkip - 1 ? 1 : d.slidesPerGroup;
  if (T > d.longSwipesMs) {
    if (!d.longSwipes) {
      a.slideTo(a.activeIndex);
      return;
    }
    (a.swipeDirection === 'next' &&
      (z >= d.longSwipesRatio
        ? a.slideTo(d.rewind && a.isEnd ? L : x + U)
        : a.slideTo(x)),
      a.swipeDirection === 'prev' &&
        (z > 1 - d.longSwipesRatio
          ? a.slideTo(x + U)
          : R !== null && z < 0 && Math.abs(z) > d.longSwipesRatio
            ? a.slideTo(R)
            : a.slideTo(x)));
  } else {
    if (!d.shortSwipes) {
      a.slideTo(a.activeIndex);
      return;
    }
    a.navigation &&
    (s.target === a.navigation.nextEl || s.target === a.navigation.prevEl)
      ? s.target === a.navigation.nextEl
        ? a.slideTo(x + U)
        : a.slideTo(x)
      : (a.swipeDirection === 'next' && a.slideTo(L !== null ? L : x + U),
        a.swipeDirection === 'prev' && a.slideTo(R !== null ? R : x));
  }
}
function fC() {
  const r = this,
    { params: a, el: o } = r;
  if (o && o.offsetWidth === 0) return;
  a.breakpoints && r.setBreakpoint();
  const { allowSlideNext: s, allowSlidePrev: c, snapGrid: f } = r,
    d = r.virtual && r.params.virtual.enabled;
  ((r.allowSlideNext = !0),
    (r.allowSlidePrev = !0),
    r.updateSize(),
    r.updateSlides(),
    r.updateSlidesClasses());
  const h = d && a.loop;
  ((a.slidesPerView === 'auto' || a.slidesPerView > 1) &&
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
function SP(r) {
  const a = this;
  a.enabled &&
    (a.allowClick ||
      (a.params.preventClicks && r.preventDefault(),
      a.params.preventClicksPropagation &&
        a.animating &&
        (r.stopPropagation(), r.stopImmediatePropagation())));
}
function EP() {
  const r = this,
    { wrapperEl: a, rtlTranslate: o, enabled: s } = r;
  if (!s) return;
  ((r.previousTranslate = r.translate),
    r.isHorizontal()
      ? (r.translate = -a.scrollLeft)
      : (r.translate = -a.scrollTop),
    r.translate === 0 && (r.translate = 0),
    r.updateActiveIndex(),
    r.updateSlidesClasses());
  let c;
  const f = r.maxTranslate() - r.minTranslate();
  (f === 0 ? (c = 0) : (c = (r.translate - r.minTranslate()) / f),
    c !== r.progress && r.updateProgress(o ? -r.translate : r.translate),
    r.emit('setTranslate', r.translate, !1));
}
function wP(r) {
  const a = this;
  (yd(a, r.target),
    !(
      a.params.cssMode ||
      (a.params.slidesPerView !== 'auto' && !a.params.autoHeight)
    ) && a.update());
}
function CP() {
  const r = this;
  r.documentTouchHandlerProceeded ||
    ((r.documentTouchHandlerProceeded = !0),
    r.params.touchReleaseOnEdges && (r.el.style.touchAction = 'auto'));
}
const dT = (r, a) => {
  const o = Ur(),
    { params: s, el: c, wrapperEl: f, device: d } = r,
    h = !!s.nested,
    m = a === 'on' ? 'addEventListener' : 'removeEventListener',
    g = a;
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
          fC,
          !0
        )
      : r[g]('observerUpdate', fC, !0),
    c[m]('load', r.onLoad, { capture: !0 }));
};
function TP() {
  const r = this,
    { params: a } = r;
  ((r.onTouchStart = yP.bind(r)),
    (r.onTouchMove = gP.bind(r)),
    (r.onTouchEnd = bP.bind(r)),
    (r.onDocumentTouchStart = CP.bind(r)),
    a.cssMode && (r.onScroll = EP.bind(r)),
    (r.onClick = SP.bind(r)),
    (r.onLoad = wP.bind(r)),
    dT(r, 'on'));
}
function xP() {
  dT(this, 'off');
}
var RP = { attachEvents: TP, detachEvents: xP };
const dC = (r, a) => r.grid && a.grid && a.grid.rows > 1;
function _P() {
  const r = this,
    { realIndex: a, initialized: o, params: s, el: c } = r,
    f = s.breakpoints;
  if (!f || (f && Object.keys(f).length === 0)) return;
  const d = Ur(),
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
  const E = (g in f ? f[g] : void 0) || r.originalParams,
    T = dC(r, s),
    D = dC(r, E),
    O = r.params.grabCursor,
    x = E.grabCursor,
    k = s.enabled;
  (T && !D
    ? (c.classList.remove(
        `${s.containerModifierClass}grid`,
        `${s.containerModifierClass}grid-column`
      ),
      r.emitContainerClasses())
    : !T &&
      D &&
      (c.classList.add(`${s.containerModifierClass}grid`),
      ((E.grid.fill && E.grid.fill === 'column') ||
        (!E.grid.fill && s.grid.fill === 'column')) &&
        c.classList.add(`${s.containerModifierClass}grid-column`),
      r.emitContainerClasses()),
    O && !x ? r.unsetGrabCursor() : !O && x && r.setGrabCursor(),
    ['navigation', 'pagination', 'scrollbar'].forEach((te) => {
      if (typeof E[te] > 'u') return;
      const ae = s[te] && s[te].enabled,
        le = E[te] && E[te].enabled;
      (ae && !le && r[te].disable(), !ae && le && r[te].enable());
    }));
  const L = E.direction && E.direction !== s.direction,
    R = s.loop && (E.slidesPerView !== s.slidesPerView || L),
    z = s.loop;
  (L && o && r.changeDirection(), _r(r.params, E));
  const U = r.params.enabled,
    F = r.params.loop;
  (Object.assign(r, {
    allowTouchMove: r.params.allowTouchMove,
    allowSlideNext: r.params.allowSlideNext,
    allowSlidePrev: r.params.allowSlidePrev,
  }),
    k && !U ? r.disable() : !k && U && r.enable(),
    (r.currentBreakpoint = g),
    r.emit('_beforeBreakpoint', E),
    o &&
      (R
        ? (r.loopDestroy(), r.loopCreate(a), r.updateSlides())
        : !z && F
          ? (r.loopCreate(a), r.updateSlides())
          : z && !F && r.loopDestroy()),
    r.emit('breakpoint', E));
}
function DP(r, a, o) {
  if ((a === void 0 && (a = 'window'), !r || (a === 'container' && !o))) return;
  let s = !1;
  const c = Kn(),
    f = a === 'window' ? c.innerHeight : o.clientHeight,
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
    a === 'window'
      ? c.matchMedia(`(min-width: ${g}px)`).matches && (s = m)
      : g <= o.clientWidth && (s = m);
  }
  return s || 'max';
}
var OP = { setBreakpoint: _P, getBreakpoint: DP };
function AP(r, a) {
  const o = [];
  return (
    r.forEach((s) => {
      typeof s == 'object'
        ? Object.keys(s).forEach((c) => {
            s[c] && o.push(a + c);
          })
        : typeof s == 'string' && o.push(a + s);
    }),
    o
  );
}
function MP() {
  const r = this,
    { classNames: a, params: o, rtl: s, el: c, device: f } = r,
    d = AP(
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
  (a.push(...d), c.classList.add(...a), r.emitContainerClasses());
}
function LP() {
  const r = this,
    { el: a, classNames: o } = r;
  !a ||
    typeof a == 'string' ||
    (a.classList.remove(...o), r.emitContainerClasses());
}
var kP = { addClasses: MP, removeClasses: LP };
function NP() {
  const r = this,
    { isLocked: a, params: o } = r,
    { slidesOffsetBefore: s } = o;
  if (s) {
    const c = r.slides.length - 1,
      f = r.slidesGrid[c] + r.slidesSizesGrid[c] + s * 2;
    r.isLocked = r.size > f;
  } else r.isLocked = r.snapGrid.length === 1;
  (o.allowSlideNext === !0 && (r.allowSlideNext = !r.isLocked),
    o.allowSlidePrev === !0 && (r.allowSlidePrev = !r.isLocked),
    a && a !== r.isLocked && (r.isEnd = !1),
    a !== r.isLocked && r.emit(r.isLocked ? 'lock' : 'unlock'));
}
var PP = { checkOverflow: NP },
  uy = {
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
function zP(r, a) {
  return function (s) {
    s === void 0 && (s = {});
    const c = Object.keys(s)[0],
      f = s[c];
    if (typeof f != 'object' || f === null) {
      _r(a, s);
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
      _r(a, s);
      return;
    }
    (typeof r[c] == 'object' && !('enabled' in r[c]) && (r[c].enabled = !0),
      r[c] || (r[c] = { enabled: !1 }),
      _r(a, s));
  };
}
const Xm = {
    eventsEmitter: kN,
    update: $N,
    translate: QN,
    transition: eP,
    slide: sP,
    loop: dP,
    grabCursor: hP,
    events: RP,
    breakpoints: OP,
    checkOverflow: PP,
    classes: kP,
  },
  Qm = {};
let wy = class ei {
  constructor() {
    let a, o;
    for (var s = arguments.length, c = new Array(s), f = 0; f < s; f++)
      c[f] = arguments[f];
    (c.length === 1 &&
    c[0].constructor &&
    Object.prototype.toString.call(c[0]).slice(8, -1) === 'Object'
      ? (o = c[0])
      : ([a, o] = c),
      o || (o = {}),
      (o = _r({}, o)),
      a && !o.el && (o.el = a));
    const d = Ur();
    if (
      o.el &&
      typeof o.el == 'string' &&
      d.querySelectorAll(o.el).length > 1
    ) {
      const S = [];
      return (
        d.querySelectorAll(o.el).forEach((E) => {
          const T = _r({}, o, { el: E });
          S.push(new ei(T));
        }),
        S
      );
    }
    const h = this;
    ((h.__swiper__ = !0),
      (h.support = sT()),
      (h.device = uT({ userAgent: o.userAgent })),
      (h.browser = cT()),
      (h.eventsListeners = {}),
      (h.eventsAnyListeners = []),
      (h.modules = [...h.__modules__]),
      o.modules && Array.isArray(o.modules) && h.modules.push(...o.modules));
    const m = {};
    h.modules.forEach((S) => {
      S({
        params: o,
        swiper: h,
        extendParams: zP(o, m),
        on: h.on.bind(h),
        once: h.once.bind(h),
        off: h.off.bind(h),
        emit: h.emit.bind(h),
      });
    });
    const g = _r({}, uy, m);
    return (
      (h.params = _r({}, g, Qm, o)),
      (h.originalParams = _r({}, h.params)),
      (h.passedParams = _r({}, o)),
      h.params &&
        h.params.on &&
        Object.keys(h.params.on).forEach((S) => {
          h.on(S, h.params.on[S]);
        }),
      h.params && h.params.onAny && h.onAny(h.params.onAny),
      Object.assign(h, {
        enabled: h.params.enabled,
        el: a,
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
  getDirectionLabel(a) {
    return this.isHorizontal()
      ? a
      : {
          width: 'height',
          'margin-top': 'margin-left',
          'margin-bottom ': 'margin-right',
          'margin-left': 'margin-top',
          'margin-right': 'margin-bottom',
          'padding-left': 'padding-top',
          'padding-right': 'padding-bottom',
          marginRight: 'marginBottom',
        }[a];
  }
  getSlideIndex(a) {
    const { slidesEl: o, params: s } = this,
      c = wa(o, `.${s.slideClass}, swiper-slide`),
      f = oC(c[0]);
    return oC(a) - f;
  }
  getSlideIndexByData(a) {
    return this.getSlideIndex(
      this.slides.find(
        (o) => o.getAttribute('data-swiper-slide-index') * 1 === a
      )
    );
  }
  getSlideIndexWhenGrid(a) {
    return (
      this.grid &&
        this.params.grid &&
        this.params.grid.rows > 1 &&
        (this.params.grid.fill === 'column'
          ? (a = Math.floor(a / this.params.grid.rows))
          : this.params.grid.fill === 'row' &&
            (a = a % Math.ceil(this.slides.length / this.params.grid.rows))),
      a
    );
  }
  recalcSlides() {
    const a = this,
      { slidesEl: o, params: s } = a;
    a.slides = wa(o, `.${s.slideClass}, swiper-slide`);
  }
  enable() {
    const a = this;
    a.enabled ||
      ((a.enabled = !0),
      a.params.grabCursor && a.setGrabCursor(),
      a.emit('enable'));
  }
  disable() {
    const a = this;
    a.enabled &&
      ((a.enabled = !1),
      a.params.grabCursor && a.unsetGrabCursor(),
      a.emit('disable'));
  }
  setProgress(a, o) {
    const s = this;
    a = Math.min(Math.max(a, 0), 1);
    const c = s.minTranslate(),
      d = (s.maxTranslate() - c) * a + c;
    (s.translateTo(d, typeof o > 'u' ? 0 : o),
      s.updateActiveIndex(),
      s.updateSlidesClasses());
  }
  emitContainerClasses() {
    const a = this;
    if (!a.params._emitClasses || !a.el) return;
    const o = a.el.className
      .split(' ')
      .filter(
        (s) =>
          s.indexOf('swiper') === 0 ||
          s.indexOf(a.params.containerModifierClass) === 0
      );
    a.emit('_containerClasses', o.join(' '));
  }
  getSlideClasses(a) {
    const o = this;
    return o.destroyed
      ? ''
      : a.className
          .split(' ')
          .filter(
            (s) =>
              s.indexOf('swiper-slide') === 0 ||
              s.indexOf(o.params.slideClass) === 0
          )
          .join(' ');
  }
  emitSlidesClasses() {
    const a = this;
    if (!a.params._emitClasses || !a.el) return;
    const o = [];
    (a.slides.forEach((s) => {
      const c = a.getSlideClasses(s);
      (o.push({ slideEl: s, classNames: c }), a.emit('_slideClass', s, c));
    }),
      a.emit('_slideClasses', o));
  }
  slidesPerViewDynamic(a, o) {
    (a === void 0 && (a = 'current'), o === void 0 && (o = !1));
    const s = this,
      {
        params: c,
        slides: f,
        slidesGrid: d,
        slidesSizesGrid: h,
        size: m,
        activeIndex: g,
      } = s;
    let S = 1;
    if (typeof c.slidesPerView == 'number') return c.slidesPerView;
    if (c.centeredSlides) {
      let E = f[g] ? Math.ceil(f[g].swiperSlideSize) : 0,
        T;
      for (let D = g + 1; D < f.length; D += 1)
        f[D] &&
          !T &&
          ((E += Math.ceil(f[D].swiperSlideSize)), (S += 1), E > m && (T = !0));
      for (let D = g - 1; D >= 0; D -= 1)
        f[D] &&
          !T &&
          ((E += f[D].swiperSlideSize), (S += 1), E > m && (T = !0));
    } else if (a === 'current')
      for (let E = g + 1; E < f.length; E += 1)
        (o ? d[E] + h[E] - d[g] < m : d[E] - d[g] < m) && (S += 1);
    else for (let E = g - 1; E >= 0; E -= 1) d[g] - d[E] < m && (S += 1);
    return S;
  }
  update() {
    const a = this;
    if (!a || a.destroyed) return;
    const { snapGrid: o, params: s } = a;
    (s.breakpoints && a.setBreakpoint(),
      [...a.el.querySelectorAll('[loading="lazy"]')].forEach((d) => {
        d.complete && yd(a, d);
      }),
      a.updateSize(),
      a.updateSlides(),
      a.updateProgress(),
      a.updateSlidesClasses());
    function c() {
      const d = a.rtlTranslate ? a.translate * -1 : a.translate,
        h = Math.min(Math.max(d, a.maxTranslate()), a.minTranslate());
      (a.setTranslate(h), a.updateActiveIndex(), a.updateSlidesClasses());
    }
    let f;
    if (s.freeMode && s.freeMode.enabled && !s.cssMode)
      (c(), s.autoHeight && a.updateAutoHeight());
    else {
      if (
        (s.slidesPerView === 'auto' || s.slidesPerView > 1) &&
        a.isEnd &&
        !s.centeredSlides
      ) {
        const d = a.virtual && s.virtual.enabled ? a.virtual.slides : a.slides;
        f = a.slideTo(d.length - 1, 0, !1, !0);
      } else f = a.slideTo(a.activeIndex, 0, !1, !0);
      f || c();
    }
    (s.watchOverflow && o !== a.snapGrid && a.checkOverflow(),
      a.emit('update'));
  }
  changeDirection(a, o) {
    o === void 0 && (o = !0);
    const s = this,
      c = s.params.direction;
    return (
      a || (a = c === 'horizontal' ? 'vertical' : 'horizontal'),
      a === c ||
        (a !== 'horizontal' && a !== 'vertical') ||
        (s.el.classList.remove(`${s.params.containerModifierClass}${c}`),
        s.el.classList.add(`${s.params.containerModifierClass}${a}`),
        s.emitContainerClasses(),
        (s.params.direction = a),
        s.slides.forEach((f) => {
          a === 'vertical' ? (f.style.width = '') : (f.style.height = '');
        }),
        s.emit('changeDirection'),
        o && s.update()),
      s
    );
  }
  changeLanguageDirection(a) {
    const o = this;
    (o.rtl && a === 'rtl') ||
      (!o.rtl && a === 'ltr') ||
      ((o.rtl = a === 'rtl'),
      (o.rtlTranslate = o.params.direction === 'horizontal' && o.rtl),
      o.rtl
        ? (o.el.classList.add(`${o.params.containerModifierClass}rtl`),
          (o.el.dir = 'rtl'))
        : (o.el.classList.remove(`${o.params.containerModifierClass}rtl`),
          (o.el.dir = 'ltr')),
      o.update());
  }
  mount(a) {
    const o = this;
    if (o.mounted) return !0;
    let s = a || o.params.el;
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
        : wa(s, c())[0])();
    return (
      !d &&
        o.params.createElements &&
        ((d = Hu('div', o.params.wrapperClass)),
        s.append(d),
        wa(s, `.${o.params.slideClass}`).forEach((h) => {
          d.append(h);
        })),
      Object.assign(o, {
        el: s,
        wrapperEl: d,
        slidesEl:
          o.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : d,
        hostEl: o.isElement ? s.parentNode.host : s,
        mounted: !0,
        rtl: s.dir.toLowerCase() === 'rtl' || Ii(s, 'direction') === 'rtl',
        rtlTranslate:
          o.params.direction === 'horizontal' &&
          (s.dir.toLowerCase() === 'rtl' || Ii(s, 'direction') === 'rtl'),
        wrongRTL: Ii(d, 'display') === '-webkit-box',
      }),
      !0
    );
  }
  init(a) {
    const o = this;
    if (o.initialized || o.mount(a) === !1) return o;
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
      sy(o),
      (o.initialized = !0),
      sy(o),
      o.emit('init'),
      o.emit('afterInit'),
      o
    );
  }
  destroy(a, o) {
    (a === void 0 && (a = !0), o === void 0 && (o = !0));
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
        a !== !1 &&
          (s.el && typeof s.el != 'string' && (s.el.swiper = null), yN(s)),
        (s.destroyed = !0)),
      null
    );
  }
  static extendDefaults(a) {
    _r(Qm, a);
  }
  static get extendedDefaults() {
    return Qm;
  }
  static get defaults() {
    return uy;
  }
  static installModule(a) {
    ei.prototype.__modules__ || (ei.prototype.__modules__ = []);
    const o = ei.prototype.__modules__;
    typeof a == 'function' && o.indexOf(a) < 0 && o.push(a);
  }
  static use(a) {
    return Array.isArray(a)
      ? (a.forEach((o) => ei.installModule(o)), ei)
      : (ei.installModule(a), ei);
  }
};
Object.keys(Xm).forEach((r) => {
  Object.keys(Xm[r]).forEach((a) => {
    wy.prototype[a] = Xm[r][a];
  });
});
wy.use([MN, LN]);
const pT = [
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
function Ll(r, a) {
  const o = ['__proto__', 'constructor', 'prototype'];
  Object.keys(a)
    .filter((s) => o.indexOf(s) < 0)
    .forEach((s) => {
      typeof r[s] > 'u'
        ? (r[s] = a[s])
        : Oo(a[s]) && Oo(r[s]) && Object.keys(a[s]).length > 0
          ? a[s].__swiper__
            ? (r[s] = a[s])
            : Ll(r[s], a[s])
          : (r[s] = a[s]);
    });
}
function vT(r) {
  return (
    r === void 0 && (r = {}),
    r.navigation &&
      typeof r.navigation.nextEl > 'u' &&
      typeof r.navigation.prevEl > 'u'
  );
}
function hT(r) {
  return (
    r === void 0 && (r = {}),
    r.pagination && typeof r.pagination.el > 'u'
  );
}
function mT(r) {
  return (r === void 0 && (r = {}), r.scrollbar && typeof r.scrollbar.el > 'u');
}
function yT(r) {
  r === void 0 && (r = '');
  const a = r
      .split(' ')
      .map((s) => s.trim())
      .filter((s) => !!s),
    o = [];
  return (
    a.forEach((s) => {
      o.indexOf(s) < 0 && o.push(s);
    }),
    o.join(' ')
  );
}
function UP(r) {
  return (
    r === void 0 && (r = ''),
    r
      ? r.includes('swiper-wrapper')
        ? r
        : `swiper-wrapper ${r}`
      : 'swiper-wrapper'
  );
}
function FP(r) {
  let {
    swiper: a,
    slides: o,
    passedParams: s,
    changedParams: c,
    nextEl: f,
    prevEl: d,
    scrollbarEl: h,
    paginationEl: m,
  } = r;
  const g = c.filter(
      (ne) => ne !== 'children' && ne !== 'direction' && ne !== 'wrapperClass'
    ),
    {
      params: S,
      pagination: E,
      navigation: T,
      scrollbar: D,
      virtual: O,
      thumbs: x,
    } = a;
  let k, L, R, z, U, F, te, ae;
  (c.includes('thumbs') &&
    s.thumbs &&
    s.thumbs.swiper &&
    !s.thumbs.swiper.destroyed &&
    S.thumbs &&
    (!S.thumbs.swiper || S.thumbs.swiper.destroyed) &&
    (k = !0),
    c.includes('controller') &&
      s.controller &&
      s.controller.control &&
      S.controller &&
      !S.controller.control &&
      (L = !0),
    c.includes('pagination') &&
      s.pagination &&
      (s.pagination.el || m) &&
      (S.pagination || S.pagination === !1) &&
      E &&
      !E.el &&
      (R = !0),
    c.includes('scrollbar') &&
      s.scrollbar &&
      (s.scrollbar.el || h) &&
      (S.scrollbar || S.scrollbar === !1) &&
      D &&
      !D.el &&
      (z = !0),
    c.includes('navigation') &&
      s.navigation &&
      (s.navigation.prevEl || d) &&
      (s.navigation.nextEl || f) &&
      (S.navigation || S.navigation === !1) &&
      T &&
      !T.prevEl &&
      !T.nextEl &&
      (U = !0));
  const le = (ne) => {
    a[ne] &&
      (a[ne].destroy(),
      ne === 'navigation'
        ? (a.isElement && (a[ne].prevEl.remove(), a[ne].nextEl.remove()),
          (S[ne].prevEl = void 0),
          (S[ne].nextEl = void 0),
          (a[ne].prevEl = void 0),
          (a[ne].nextEl = void 0))
        : (a.isElement && a[ne].el.remove(),
          (S[ne].el = void 0),
          (a[ne].el = void 0)));
  };
  (c.includes('loop') &&
    a.isElement &&
    (S.loop && !s.loop ? (F = !0) : !S.loop && s.loop ? (te = !0) : (ae = !0)),
    g.forEach((ne) => {
      if (Oo(S[ne]) && Oo(s[ne]))
        (Object.assign(S[ne], s[ne]),
          (ne === 'navigation' || ne === 'pagination' || ne === 'scrollbar') &&
            'enabled' in s[ne] &&
            !s[ne].enabled &&
            le(ne));
      else {
        const ee = s[ne];
        (ee === !0 || ee === !1) &&
        (ne === 'navigation' || ne === 'pagination' || ne === 'scrollbar')
          ? ee === !1 && le(ne)
          : (S[ne] = s[ne]);
      }
    }),
    g.includes('controller') &&
      !L &&
      a.controller &&
      a.controller.control &&
      S.controller &&
      S.controller.control &&
      (a.controller.control = S.controller.control),
    c.includes('children') && o && O && S.virtual.enabled
      ? ((O.slides = o), O.update(!0))
      : c.includes('virtual') &&
        O &&
        S.virtual.enabled &&
        (o && (O.slides = o), O.update(!0)),
    c.includes('children') && o && S.loop && (ae = !0),
    k && x.init() && x.update(!0),
    L && (a.controller.control = S.controller.control),
    R &&
      (a.isElement &&
        (!m || typeof m == 'string') &&
        ((m = document.createElement('div')),
        m.classList.add('swiper-pagination'),
        m.part.add('pagination'),
        a.el.appendChild(m)),
      m && (S.pagination.el = m),
      E.init(),
      E.render(),
      E.update()),
    z &&
      (a.isElement &&
        (!h || typeof h == 'string') &&
        ((h = document.createElement('div')),
        h.classList.add('swiper-scrollbar'),
        h.part.add('scrollbar'),
        a.el.appendChild(h)),
      h && (S.scrollbar.el = h),
      D.init(),
      D.updateSize(),
      D.setTranslate()),
    U &&
      (a.isElement &&
        ((!f || typeof f == 'string') &&
          ((f = document.createElement('div')),
          f.classList.add('swiper-button-next'),
          sC(f, a.hostEl.constructor.nextButtonSvg),
          f.part.add('button-next'),
          a.el.appendChild(f)),
        (!d || typeof d == 'string') &&
          ((d = document.createElement('div')),
          d.classList.add('swiper-button-prev'),
          sC(d, a.hostEl.constructor.prevButtonSvg),
          d.part.add('button-prev'),
          a.el.appendChild(d))),
      f && (S.navigation.nextEl = f),
      d && (S.navigation.prevEl = d),
      T.init(),
      T.update()),
    c.includes('allowSlideNext') && (a.allowSlideNext = s.allowSlideNext),
    c.includes('allowSlidePrev') && (a.allowSlidePrev = s.allowSlidePrev),
    c.includes('direction') && a.changeDirection(s.direction, !1),
    (F || ae) && a.loopDestroy(),
    (te || ae) && a.loopCreate(),
    a.update());
}
function VP(r, a) {
  (r === void 0 && (r = {}), a === void 0 && (a = !0));
  const o = { on: {} },
    s = {},
    c = {};
  (Ll(o, uy), (o._emitClasses = !0), (o.init = !1));
  const f = {},
    d = pT.map((m) => m.replace(/_/, '')),
    h = Object.assign({}, r);
  return (
    Object.keys(h).forEach((m) => {
      typeof r[m] > 'u' ||
        (d.indexOf(m) >= 0
          ? Oo(r[m])
            ? ((o[m] = {}), (c[m] = {}), Ll(o[m], r[m]), Ll(c[m], r[m]))
            : ((o[m] = r[m]), (c[m] = r[m]))
          : m.search(/on[A-Z]/) === 0 && typeof r[m] == 'function'
            ? a
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
function IP(r, a) {
  let {
    el: o,
    nextEl: s,
    prevEl: c,
    paginationEl: f,
    scrollbarEl: d,
    swiper: h,
  } = r;
  (vT(a) &&
    s &&
    c &&
    ((h.params.navigation.nextEl = s),
    (h.originalParams.navigation.nextEl = s),
    (h.params.navigation.prevEl = c),
    (h.originalParams.navigation.prevEl = c)),
    hT(a) &&
      f &&
      ((h.params.pagination.el = f), (h.originalParams.pagination.el = f)),
    mT(a) &&
      d &&
      ((h.params.scrollbar.el = d), (h.originalParams.scrollbar.el = d)),
    h.init(o));
}
function HP(r, a, o, s, c) {
  const f = [];
  if (!a) return f;
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
    pT
      .filter((m) => m[0] === '_')
      .map((m) => m.replace(/_/, ''))
      .forEach((m) => {
        if (m in r && m in a)
          if (Oo(r[m]) && Oo(a[m])) {
            const g = Object.keys(r[m]),
              S = Object.keys(a[m]);
            g.length !== S.length
              ? d(m)
              : (g.forEach((E) => {
                  r[m][E] !== a[m][E] && d(m);
                }),
                S.forEach((E) => {
                  r[m][E] !== a[m][E] && d(m);
                }));
          } else r[m] !== a[m] && d(m);
      }),
    f
  );
}
const BP = (r) => {
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
          for (var a = 1; a < arguments.length; a++) {
            var o = arguments[a];
            for (var s in o)
              Object.prototype.hasOwnProperty.call(o, s) && (r[s] = o[s]);
          }
          return r;
        }),
    _d.apply(this, arguments)
  );
}
function gT(r) {
  return (
    r.type && r.type.displayName && r.type.displayName.includes('SwiperSlide')
  );
}
function bT(r) {
  const a = [];
  return (
    Ct.Children.toArray(r).forEach((o) => {
      gT(o)
        ? a.push(o)
        : o.props &&
          o.props.children &&
          bT(o.props.children).forEach((s) => a.push(s));
    }),
    a
  );
}
function jP(r) {
  const a = [],
    o = {
      'container-start': [],
      'container-end': [],
      'wrapper-start': [],
      'wrapper-end': [],
    };
  return (
    Ct.Children.toArray(r).forEach((s) => {
      if (gT(s)) a.push(s);
      else if (s.props && s.props.slot && o[s.props.slot])
        o[s.props.slot].push(s);
      else if (s.props && s.props.children) {
        const c = bT(s.props.children);
        c.length > 0 ? c.forEach((f) => a.push(f)) : o['container-end'].push(s);
      } else o['container-end'].push(s);
    }),
    { slides: a, slots: o }
  );
}
function $P(r, a, o) {
  if (!o) return null;
  const s = (S) => {
      let E = S;
      return (
        S < 0 ? (E = a.length + S) : E >= a.length && (E = E - a.length),
        E
      );
    },
    c = r.isHorizontal()
      ? { [r.rtlTranslate ? 'right' : 'left']: `${o.offset}px` }
      : { top: `${o.offset}px` },
    { from: f, to: d } = o,
    h = r.params.loop ? -a.length : 0,
    m = r.params.loop ? a.length * 2 : a.length,
    g = [];
  for (let S = h; S < m; S += 1) S >= f && S <= d && g.push(a[s(S)]);
  return g.map((S, E) =>
    Ct.cloneElement(S, {
      swiper: r,
      style: c,
      key: S.props.virtualIndex || S.key || `slide-${E}`,
    })
  );
}
function Nu(r, a) {
  return typeof window > 'u' ? Z.useEffect(r, a) : Z.useLayoutEffect(r, a);
}
const pC = Z.createContext(null),
  YP = Z.createContext(null),
  Ld = Z.forwardRef(function (r, a) {
    let {
        className: o,
        tag: s = 'div',
        wrapperTag: c = 'div',
        children: f,
        onSwiper: d,
        ...h
      } = r === void 0 ? {} : r,
      m = !1;
    const [g, S] = Z.useState('swiper'),
      [E, T] = Z.useState(null),
      [D, O] = Z.useState(!1),
      x = Z.useRef(!1),
      k = Z.useRef(null),
      L = Z.useRef(null),
      R = Z.useRef(null),
      z = Z.useRef(null),
      U = Z.useRef(null),
      F = Z.useRef(null),
      te = Z.useRef(null),
      ae = Z.useRef(null),
      { params: le, passedParams: ne, rest: ee, events: ue } = VP(h),
      { slides: B, slots: W } = jP(f),
      ie = () => {
        O(!D);
      };
    Object.assign(le.on, {
      _containerClasses(xe, Ye) {
        S(Ye);
      },
    });
    const pe = () => {
      (Object.assign(le.on, ue), (m = !0));
      const xe = { ...le };
      if (
        (delete xe.wrapperClass,
        (L.current = new wy(xe)),
        L.current.virtual && L.current.params.virtual.enabled)
      ) {
        L.current.virtual.slides = B;
        const Ye = {
          cache: !1,
          slides: B,
          renderExternal: T,
          renderExternalUpdate: !1,
        };
        (Ll(L.current.params.virtual, Ye),
          Ll(L.current.originalParams.virtual, Ye));
      }
    };
    (k.current || pe(), L.current && L.current.on('_beforeBreakpoint', ie));
    const ce = () => {
        m ||
          !ue ||
          !L.current ||
          Object.keys(ue).forEach((xe) => {
            L.current.on(xe, ue[xe]);
          });
      },
      ve = () => {
        !ue ||
          !L.current ||
          Object.keys(ue).forEach((xe) => {
            L.current.off(xe, ue[xe]);
          });
      };
    (Z.useEffect(() => () => {
      L.current && L.current.off('_beforeBreakpoint', ie);
    }),
      Z.useEffect(() => {
        !x.current &&
          L.current &&
          (L.current.emitSlidesClasses(), (x.current = !0));
      }),
      Nu(() => {
        if ((a && (a.current = k.current), !!k.current))
          return (
            L.current.destroyed && pe(),
            IP(
              {
                el: k.current,
                nextEl: U.current,
                prevEl: F.current,
                paginationEl: te.current,
                scrollbarEl: ae.current,
                swiper: L.current,
              },
              le
            ),
            d && !L.current.destroyed && d(L.current),
            () => {
              L.current && !L.current.destroyed && L.current.destroy(!0, !1);
            }
          );
      }, []),
      Nu(() => {
        ce();
        const xe = HP(ne, R.current, B, z.current, (Ye) => Ye.key);
        return (
          (R.current = ne),
          (z.current = B),
          xe.length &&
            L.current &&
            !L.current.destroyed &&
            FP({
              swiper: L.current,
              slides: B,
              passedParams: ne,
              changedParams: xe,
              nextEl: U.current,
              prevEl: F.current,
              scrollbarEl: ae.current,
              paginationEl: te.current,
            }),
          () => {
            ve();
          }
        );
      }),
      Nu(() => {
        BP(L.current);
      }, [E]));
    function be() {
      return le.virtual
        ? $P(L.current, B, E)
        : B.map((xe, Ye) =>
            Ct.cloneElement(xe, { swiper: L.current, swiperSlideIndex: Ye })
          );
    }
    return Ct.createElement(
      s,
      _d({ ref: k, className: yT(`${g}${o ? ` ${o}` : ''}`) }, ee),
      Ct.createElement(
        YP.Provider,
        { value: L.current },
        W['container-start'],
        Ct.createElement(
          c,
          { className: UP(le.wrapperClass) },
          W['wrapper-start'],
          be(),
          W['wrapper-end']
        ),
        vT(le) &&
          Ct.createElement(
            Ct.Fragment,
            null,
            Ct.createElement('div', {
              ref: F,
              className: 'swiper-button-prev',
            }),
            Ct.createElement('div', { ref: U, className: 'swiper-button-next' })
          ),
        mT(le) &&
          Ct.createElement('div', { ref: ae, className: 'swiper-scrollbar' }),
        hT(le) &&
          Ct.createElement('div', { ref: te, className: 'swiper-pagination' }),
        W['container-end']
      )
    );
  });
Ld.displayName = 'Swiper';
const kd = Z.forwardRef(function (r, a) {
  let {
    tag: o = 'div',
    children: s,
    className: c = '',
    swiper: f,
    zoom: d,
    lazy: h,
    virtualIndex: m,
    swiperSlideIndex: g,
    ...S
  } = r === void 0 ? {} : r;
  const E = Z.useRef(null),
    [T, D] = Z.useState('swiper-slide'),
    [O, x] = Z.useState(!1);
  function k(U, F, te) {
    F === E.current && D(te);
  }
  (Nu(() => {
    if (
      (typeof g < 'u' && (E.current.swiperSlideIndex = g),
      a && (a.current = E.current),
      !(!E.current || !f))
    ) {
      if (f.destroyed) {
        T !== 'swiper-slide' && D('swiper-slide');
        return;
      }
      return (
        f.on('_slideClass', k),
        () => {
          f && f.off('_slideClass', k);
        }
      );
    }
  }),
    Nu(() => {
      f && E.current && !f.destroyed && D(f.getSlideClasses(E.current));
    }, [f]));
  const L = {
      isActive: T.indexOf('swiper-slide-active') >= 0,
      isVisible: T.indexOf('swiper-slide-visible') >= 0,
      isPrev: T.indexOf('swiper-slide-prev') >= 0,
      isNext: T.indexOf('swiper-slide-next') >= 0,
    },
    R = () => (typeof s == 'function' ? s(L) : s),
    z = () => {
      x(!0);
    };
  return Ct.createElement(
    o,
    _d(
      {
        ref: E,
        className: yT(`${T}${c ? ` ${c}` : ''}`),
        'data-swiper-slide-index': m,
        onLoad: z,
      },
      S
    ),
    d &&
      Ct.createElement(
        pC.Provider,
        { value: L },
        Ct.createElement(
          'div',
          {
            className: 'swiper-zoom-container',
            'data-swiper-zoom': typeof d == 'number' ? d : void 0,
          },
          R(),
          h &&
            !O &&
            Ct.createElement('div', { className: 'swiper-lazy-preloader' })
        )
      ),
    !d &&
      Ct.createElement(
        pC.Provider,
        { value: L },
        R(),
        h &&
          !O &&
          Ct.createElement('div', { className: 'swiper-lazy-preloader' })
      )
  );
});
kd.displayName = 'SwiperSlide';
function GP(r, a, o, s) {
  return (
    r.params.createElements &&
      Object.keys(s).forEach((c) => {
        if (!o[c] && o.auto === !0) {
          let f = wa(r.el, `.${s[c]}`)[0];
          (f || ((f = Hu('div', s[c])), (f.className = s[c]), r.el.append(f)),
            (o[c] = f),
            (a[c] = f));
        }
      }),
    o
  );
}
function WP(r) {
  return (
    r === void 0 && (r = ''),
    `.${r
      .trim()
      .replace(/([\.:!+\/()[\]])/g, '\\$1')
      .replace(/ /g, '.')}`
  );
}
function Cy(r) {
  let { swiper: a, extendParams: o, on: s, emit: c } = r;
  const f = Ur();
  let d = !1,
    h = null,
    m = null,
    g,
    S,
    E,
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
    (a.scrollbar = { el: null, dragEl: null }));
  function D() {
    if (!a.params.scrollbar.el || !a.scrollbar.el) return;
    const { scrollbar: B, rtlTranslate: W } = a,
      { dragEl: ie, el: pe } = B,
      ce = a.params.scrollbar,
      ve = a.params.loop ? a.progressLoop : a.progress;
    let be = S,
      xe = (E - S) * ve;
    (W
      ? ((xe = -xe),
        xe > 0 ? ((be = S - xe), (xe = 0)) : -xe + S > E && (be = E + xe))
      : xe < 0
        ? ((be = S + xe), (xe = 0))
        : xe + S > E && (be = E - xe),
      a.isHorizontal()
        ? ((ie.style.transform = `translate3d(${xe}px, 0, 0)`),
          (ie.style.width = `${be}px`))
        : ((ie.style.transform = `translate3d(0px, ${xe}px, 0)`),
          (ie.style.height = `${be}px`)),
      ce.hide &&
        (clearTimeout(h),
        (pe.style.opacity = 1),
        (h = setTimeout(() => {
          ((pe.style.opacity = 0), (pe.style.transitionDuration = '400ms'));
        }, 1e3))));
  }
  function O(B) {
    !a.params.scrollbar.el ||
      !a.scrollbar.el ||
      (a.scrollbar.dragEl.style.transitionDuration = `${B}ms`);
  }
  function x() {
    if (!a.params.scrollbar.el || !a.scrollbar.el) return;
    const { scrollbar: B } = a,
      { dragEl: W, el: ie } = B;
    ((W.style.width = ''),
      (W.style.height = ''),
      (E = a.isHorizontal() ? ie.offsetWidth : ie.offsetHeight),
      (T =
        a.size /
        (a.virtualSize +
          a.params.slidesOffsetBefore -
          (a.params.centeredSlides ? a.snapGrid[0] : 0))),
      a.params.scrollbar.dragSize === 'auto'
        ? (S = E * T)
        : (S = parseInt(a.params.scrollbar.dragSize, 10)),
      a.isHorizontal()
        ? (W.style.width = `${S}px`)
        : (W.style.height = `${S}px`),
      T >= 1 ? (ie.style.display = 'none') : (ie.style.display = ''),
      a.params.scrollbar.hide && (ie.style.opacity = 0),
      a.params.watchOverflow &&
        a.enabled &&
        B.el.classList[a.isLocked ? 'add' : 'remove'](
          a.params.scrollbar.lockClass
        ));
  }
  function k(B) {
    return a.isHorizontal() ? B.clientX : B.clientY;
  }
  function L(B) {
    const { scrollbar: W, rtlTranslate: ie } = a,
      { el: pe } = W;
    let ce;
    ((ce =
      (k(B) -
        CN(pe)[a.isHorizontal() ? 'left' : 'top'] -
        (g !== null ? g : S / 2)) /
      (E - S)),
      (ce = Math.max(Math.min(ce, 1), 0)),
      ie && (ce = 1 - ce));
    const ve = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * ce;
    (a.updateProgress(ve),
      a.setTranslate(ve),
      a.updateActiveIndex(),
      a.updateSlidesClasses());
  }
  function R(B) {
    const W = a.params.scrollbar,
      { scrollbar: ie, wrapperEl: pe } = a,
      { el: ce, dragEl: ve } = ie;
    ((d = !0),
      (g =
        B.target === ve
          ? k(B) -
            B.target.getBoundingClientRect()[a.isHorizontal() ? 'left' : 'top']
          : null),
      B.preventDefault(),
      B.stopPropagation(),
      (pe.style.transitionDuration = '100ms'),
      (ve.style.transitionDuration = '100ms'),
      L(B),
      clearTimeout(m),
      (ce.style.transitionDuration = '0ms'),
      W.hide && (ce.style.opacity = 1),
      a.params.cssMode && (a.wrapperEl.style['scroll-snap-type'] = 'none'),
      c('scrollbarDragStart', B));
  }
  function z(B) {
    const { scrollbar: W, wrapperEl: ie } = a,
      { el: pe, dragEl: ce } = W;
    d &&
      (B.preventDefault && B.cancelable
        ? B.preventDefault()
        : (B.returnValue = !1),
      L(B),
      (ie.style.transitionDuration = '0ms'),
      (pe.style.transitionDuration = '0ms'),
      (ce.style.transitionDuration = '0ms'),
      c('scrollbarDragMove', B));
  }
  function U(B) {
    const W = a.params.scrollbar,
      { scrollbar: ie, wrapperEl: pe } = a,
      { el: ce } = ie;
    d &&
      ((d = !1),
      a.params.cssMode &&
        ((a.wrapperEl.style['scroll-snap-type'] = ''),
        (pe.style.transitionDuration = '')),
      W.hide &&
        (clearTimeout(m),
        (m = Ey(() => {
          ((ce.style.opacity = 0), (ce.style.transitionDuration = '400ms'));
        }, 1e3))),
      c('scrollbarDragEnd', B),
      W.snapOnRelease && a.slideToClosest());
  }
  function F(B) {
    const { scrollbar: W, params: ie } = a,
      pe = W.el;
    if (!pe) return;
    const ce = pe,
      ve = ie.passiveListeners ? { passive: !1, capture: !1 } : !1,
      be = ie.passiveListeners ? { passive: !0, capture: !1 } : !1;
    if (!ce) return;
    const xe = B === 'on' ? 'addEventListener' : 'removeEventListener';
    (ce[xe]('pointerdown', R, ve),
      f[xe]('pointermove', z, ve),
      f[xe]('pointerup', U, be));
  }
  function te() {
    !a.params.scrollbar.el || !a.scrollbar.el || F('on');
  }
  function ae() {
    !a.params.scrollbar.el || !a.scrollbar.el || F('off');
  }
  function le() {
    const { scrollbar: B, el: W } = a;
    a.params.scrollbar = GP(a, a.originalParams.scrollbar, a.params.scrollbar, {
      el: 'swiper-scrollbar',
    });
    const ie = a.params.scrollbar;
    if (!ie.el) return;
    let pe;
    if (
      (typeof ie.el == 'string' &&
        a.isElement &&
        (pe = a.el.querySelector(ie.el)),
      !pe && typeof ie.el == 'string')
    ) {
      if (((pe = f.querySelectorAll(ie.el)), !pe.length)) return;
    } else pe || (pe = ie.el);
    (a.params.uniqueNavElements &&
      typeof ie.el == 'string' &&
      pe.length > 1 &&
      W.querySelectorAll(ie.el).length === 1 &&
      (pe = W.querySelector(ie.el)),
      pe.length > 0 && (pe = pe[0]),
      pe.classList.add(
        a.isHorizontal() ? ie.horizontalClass : ie.verticalClass
      ));
    let ce;
    (pe &&
      ((ce = pe.querySelector(WP(a.params.scrollbar.dragClass))),
      ce || ((ce = Hu('div', a.params.scrollbar.dragClass)), pe.append(ce))),
      Object.assign(B, { el: pe, dragEl: ce }),
      ie.draggable && te(),
      pe &&
        pe.classList[a.enabled ? 'remove' : 'add'](
          ...zi(a.params.scrollbar.lockClass)
        ));
  }
  function ne() {
    const B = a.params.scrollbar,
      W = a.scrollbar.el;
    (W &&
      W.classList.remove(
        ...zi(a.isHorizontal() ? B.horizontalClass : B.verticalClass)
      ),
      ae());
  }
  (s('changeDirection', () => {
    if (!a.scrollbar || !a.scrollbar.el) return;
    const B = a.params.scrollbar;
    let { el: W } = a.scrollbar;
    ((W = _N(W)),
      W.forEach((ie) => {
        (ie.classList.remove(B.horizontalClass, B.verticalClass),
          ie.classList.add(
            a.isHorizontal() ? B.horizontalClass : B.verticalClass
          ));
      }));
  }),
    s('init', () => {
      a.params.scrollbar.enabled === !1 ? ue() : (le(), x(), D());
    }),
    s('update resize observerUpdate lock unlock changeDirection', () => {
      x();
    }),
    s('setTranslate', () => {
      D();
    }),
    s('setTransition', (B, W) => {
      O(W);
    }),
    s('enable disable', () => {
      const { el: B } = a.scrollbar;
      B &&
        B.classList[a.enabled ? 'remove' : 'add'](
          ...zi(a.params.scrollbar.lockClass)
        );
    }),
    s('destroy', () => {
      ne();
    }));
  const ee = () => {
      (a.el.classList.remove(...zi(a.params.scrollbar.scrollbarDisabledClass)),
        a.scrollbar.el &&
          a.scrollbar.el.classList.remove(
            ...zi(a.params.scrollbar.scrollbarDisabledClass)
          ),
        le(),
        x(),
        D());
    },
    ue = () => {
      (a.el.classList.add(...zi(a.params.scrollbar.scrollbarDisabledClass)),
        a.scrollbar.el &&
          a.scrollbar.el.classList.add(
            ...zi(a.params.scrollbar.scrollbarDisabledClass)
          ),
        ne());
    };
  Object.assign(a.scrollbar, {
    enable: ee,
    disable: ue,
    updateSize: x,
    setTranslate: D,
    init: le,
    destroy: ne,
  });
}
function ST(r) {
  let { swiper: a, extendParams: o, on: s, emit: c, params: f } = r;
  ((a.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
    o({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !1,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1,
      },
    }));
  let d,
    h,
    m = f && f.autoplay ? f.autoplay.delay : 3e3,
    g = f && f.autoplay ? f.autoplay.delay : 3e3,
    S,
    E = new Date().getTime(),
    T,
    D,
    O,
    x,
    k,
    L,
    R;
  function z(be) {
    !a ||
      a.destroyed ||
      !a.wrapperEl ||
      (be.target === a.wrapperEl &&
        (a.wrapperEl.removeEventListener('transitionend', z),
        !(R || (be.detail && be.detail.bySwiperTouchMove)) && ee()));
  }
  const U = () => {
      if (a.destroyed || !a.autoplay.running) return;
      a.autoplay.paused ? (T = !0) : T && ((g = S), (T = !1));
      const be = a.autoplay.paused ? S : E + g - new Date().getTime();
      ((a.autoplay.timeLeft = be),
        c('autoplayTimeLeft', be, be / m),
        (h = requestAnimationFrame(() => {
          U();
        })));
    },
    F = () => {
      let be;
      return (
        a.virtual && a.params.virtual.enabled
          ? (be = a.slides.find((Ye) =>
              Ye.classList.contains('swiper-slide-active')
            ))
          : (be = a.slides[a.activeIndex]),
        be ? parseInt(be.getAttribute('data-swiper-autoplay'), 10) : void 0
      );
    },
    te = (be) => {
      if (a.destroyed || !a.autoplay.running) return;
      (cancelAnimationFrame(h), U());
      let xe = typeof be > 'u' ? a.params.autoplay.delay : be;
      ((m = a.params.autoplay.delay), (g = a.params.autoplay.delay));
      const Ye = F();
      (!Number.isNaN(Ye) &&
        Ye > 0 &&
        typeof be > 'u' &&
        ((xe = Ye), (m = Ye), (g = Ye)),
        (S = xe));
      const Lt = a.params.speed,
        we = () => {
          !a ||
            a.destroyed ||
            (a.params.autoplay.reverseDirection
              ? !a.isBeginning || a.params.loop || a.params.rewind
                ? (a.slidePrev(Lt, !0, !0), c('autoplay'))
                : a.params.autoplay.stopOnLastSlide ||
                  (a.slideTo(a.slides.length - 1, Lt, !0, !0), c('autoplay'))
              : !a.isEnd || a.params.loop || a.params.rewind
                ? (a.slideNext(Lt, !0, !0), c('autoplay'))
                : a.params.autoplay.stopOnLastSlide ||
                  (a.slideTo(0, Lt, !0, !0), c('autoplay')),
            a.params.cssMode &&
              ((E = new Date().getTime()),
              requestAnimationFrame(() => {
                te();
              })));
        };
      return (
        xe > 0
          ? (clearTimeout(d),
            (d = setTimeout(() => {
              we();
            }, xe)))
          : requestAnimationFrame(() => {
              we();
            }),
        xe
      );
    },
    ae = () => {
      ((E = new Date().getTime()),
        (a.autoplay.running = !0),
        te(),
        c('autoplayStart'));
    },
    le = () => {
      ((a.autoplay.running = !1),
        clearTimeout(d),
        cancelAnimationFrame(h),
        c('autoplayStop'));
    },
    ne = (be, xe) => {
      if (a.destroyed || !a.autoplay.running) return;
      (clearTimeout(d), be || (L = !0));
      const Ye = () => {
        (c('autoplayPause'),
          a.params.autoplay.waitForTransition
            ? a.wrapperEl.addEventListener('transitionend', z)
            : ee());
      };
      if (((a.autoplay.paused = !0), xe)) {
        (k && (S = a.params.autoplay.delay), (k = !1), Ye());
        return;
      }
      ((S = (S || a.params.autoplay.delay) - (new Date().getTime() - E)),
        !(a.isEnd && S < 0 && !a.params.loop) && (S < 0 && (S = 0), Ye()));
    },
    ee = () => {
      (a.isEnd && S < 0 && !a.params.loop) ||
        a.destroyed ||
        !a.autoplay.running ||
        ((E = new Date().getTime()),
        L ? ((L = !1), te(S)) : te(),
        (a.autoplay.paused = !1),
        c('autoplayResume'));
    },
    ue = () => {
      if (a.destroyed || !a.autoplay.running) return;
      const be = Ur();
      (be.visibilityState === 'hidden' && ((L = !0), ne(!0)),
        be.visibilityState === 'visible' && ee());
    },
    B = (be) => {
      be.pointerType === 'mouse' &&
        ((L = !0), (R = !0), !(a.animating || a.autoplay.paused) && ne(!0));
    },
    W = (be) => {
      be.pointerType === 'mouse' && ((R = !1), a.autoplay.paused && ee());
    },
    ie = () => {
      a.params.autoplay.pauseOnMouseEnter &&
        (a.el.addEventListener('pointerenter', B),
        a.el.addEventListener('pointerleave', W));
    },
    pe = () => {
      a.el &&
        typeof a.el != 'string' &&
        (a.el.removeEventListener('pointerenter', B),
        a.el.removeEventListener('pointerleave', W));
    },
    ce = () => {
      Ur().addEventListener('visibilitychange', ue);
    },
    ve = () => {
      Ur().removeEventListener('visibilitychange', ue);
    };
  (s('init', () => {
    a.params.autoplay.enabled && (ie(), ce(), ae());
  }),
    s('destroy', () => {
      (pe(), ve(), a.autoplay.running && le());
    }),
    s('_freeModeStaticRelease', () => {
      (O || L) && ee();
    }),
    s('_freeModeNoMomentumRelease', () => {
      a.params.autoplay.disableOnInteraction ? le() : ne(!0, !0);
    }),
    s('beforeTransitionStart', (be, xe, Ye) => {
      a.destroyed ||
        !a.autoplay.running ||
        (Ye || !a.params.autoplay.disableOnInteraction ? ne(!0, !0) : le());
    }),
    s('sliderFirstMove', () => {
      if (!(a.destroyed || !a.autoplay.running)) {
        if (a.params.autoplay.disableOnInteraction) {
          le();
          return;
        }
        ((D = !0),
          (O = !1),
          (L = !1),
          (x = setTimeout(() => {
            ((L = !0), (O = !0), ne(!0));
          }, 200)));
      }
    }),
    s('touchEnd', () => {
      if (!(a.destroyed || !a.autoplay.running || !D)) {
        if (
          (clearTimeout(x),
          clearTimeout(d),
          a.params.autoplay.disableOnInteraction)
        ) {
          ((O = !1), (D = !1));
          return;
        }
        (O && a.params.cssMode && ee(), (O = !1), (D = !1));
      }
    }),
    s('slideChange', () => {
      a.destroyed || !a.autoplay.running || (k = !0);
    }),
    Object.assign(a.autoplay, { start: ae, stop: le, pause: ne, resume: ee }));
}
function Ty(r) {
  let { swiper: a, extendParams: o, on: s } = r;
  o({ grid: { rows: 1, fill: 'column' } });
  let c, f, d, h;
  const m = () => {
      let x = a.params.spaceBetween;
      return (
        typeof x == 'string' && x.indexOf('%') >= 0
          ? (x = (parseFloat(x.replace('%', '')) / 100) * a.size)
          : typeof x == 'string' && (x = parseFloat(x)),
        x
      );
    },
    g = (x) => {
      const { slidesPerView: k } = a.params,
        { rows: L, fill: R } = a.params.grid,
        z =
          a.virtual && a.params.virtual.enabled
            ? a.virtual.slides.length
            : x.length;
      ((d = Math.floor(z / L)),
        Math.floor(z / L) === z / L ? (c = z) : (c = Math.ceil(z / L) * L),
        k !== 'auto' && R === 'row' && (c = Math.max(c, k * L)),
        (f = c / L));
    },
    S = () => {
      a.slides &&
        a.slides.forEach((x) => {
          x.swiperSlideGridSet &&
            ((x.style.height = ''),
            (x.style[a.getDirectionLabel('margin-top')] = ''));
        });
    },
    E = (x, k, L) => {
      const { slidesPerGroup: R } = a.params,
        z = m(),
        { rows: U, fill: F } = a.params.grid,
        te =
          a.virtual && a.params.virtual.enabled
            ? a.virtual.slides.length
            : L.length;
      let ae, le, ne;
      if (F === 'row' && R > 1) {
        const ee = Math.floor(x / (R * U)),
          ue = x - U * R * ee,
          B = ee === 0 ? R : Math.min(Math.ceil((te - ee * U * R) / U), R);
        ((ne = Math.floor(ue / B)),
          (le = ue - ne * B + ee * R),
          (ae = le + (ne * c) / U),
          (k.style.order = ae));
      } else
        F === 'column'
          ? ((le = Math.floor(x / U)),
            (ne = x - le * U),
            (le > d || (le === d && ne === U - 1)) &&
              ((ne += 1), ne >= U && ((ne = 0), (le += 1))))
          : ((ne = Math.floor(x / f)), (le = x - ne * f));
      ((k.row = ne),
        (k.column = le),
        (k.style.height = `calc((100% - ${(U - 1) * z}px) / ${U})`),
        (k.style[a.getDirectionLabel('margin-top')] =
          ne !== 0 ? z && `${z}px` : ''),
        (k.swiperSlideGridSet = !0));
    },
    T = (x, k) => {
      const { centeredSlides: L, roundLengths: R } = a.params,
        z = m(),
        { rows: U } = a.params.grid;
      if (
        ((a.virtualSize = (x + z) * c),
        (a.virtualSize = Math.ceil(a.virtualSize / U) - z),
        a.params.cssMode ||
          (a.wrapperEl.style[a.getDirectionLabel('width')] =
            `${a.virtualSize + z}px`),
        L)
      ) {
        const F = [];
        for (let te = 0; te < k.length; te += 1) {
          let ae = k[te];
          (R && (ae = Math.floor(ae)),
            k[te] < a.virtualSize + k[0] && F.push(ae));
        }
        (k.splice(0, k.length), k.push(...F));
      }
    },
    D = () => {
      h = a.params.grid && a.params.grid.rows > 1;
    },
    O = () => {
      const { params: x, el: k } = a,
        L = x.grid && x.grid.rows > 1;
      (h && !L
        ? (k.classList.remove(
            `${x.containerModifierClass}grid`,
            `${x.containerModifierClass}grid-column`
          ),
          (d = 1),
          a.emitContainerClasses())
        : !h &&
          L &&
          (k.classList.add(`${x.containerModifierClass}grid`),
          x.grid.fill === 'column' &&
            k.classList.add(`${x.containerModifierClass}grid-column`),
          a.emitContainerClasses()),
        (h = L));
    };
  (s('init', D),
    s('update', O),
    (a.grid = {
      initSlides: g,
      unsetSlides: S,
      updateSlide: E,
      updateWrapperSize: T,
    }));
}
const qP = Kt.div.withConfig({
    displayName: 'Card__CardWrapper',
    componentId: 'sc-h41vf0-0',
  })([
    'max-width:340px;background:#fff;border-radius:16px;padding:16px;margin:12px auto;box-shadow:0 8px 16px rgba(0,0,0,0.1);transition:transform 0.2s ease,box-shadow 0.3s ease;&:hover{transform:translateY(-4px);box-shadow:0 12px 24px rgba(0,0,0,0.15);}',
  ]),
  XP = Kt.img.withConfig({
    displayName: 'Card__StyledImg',
    componentId: 'sc-h41vf0-1',
  })(['width:100%;border-radius:12px;display:block;margin-bottom:12px;']),
  QP = Kt.p.withConfig({
    displayName: 'Card__ProductId',
    componentId: 'sc-h41vf0-2',
  })(['font-size:0.8rem;color:#888;margin:4px 0;']),
  KP = Kt.p.withConfig({
    displayName: 'Card__ProductName',
    componentId: 'sc-h41vf0-3',
  })(['font-size:1.2rem;font-weight:600;color:#333;margin:4px 0;']),
  JP = Kt.p.withConfig({
    displayName: 'Card__ProductPrice',
    componentId: 'sc-h41vf0-4',
  })(['font-size:1.1rem;font-weight:bold;color:#007b55;margin:4px 0 12px 0;']);
function xy({ product: r }) {
  return cn(qP, {
    children: [
      Re(XP, { src: r.img.split(',')[0], alt: r.name }),
      cn(QP, { children: ['ID: ', r.id] }),
      Re(KP, { children: r.name }),
      cn(JP, { children: ['$', r.price] }),
    ],
  });
}
const ZP = Kt('div').withConfig({
  displayName: 'Cards__StyledBaseField',
  componentId: 'sc-in0nuh-0',
})([
  'width:100%;max-width:1200px;margin:0 auto;padding:1rem;box-sizing:border-box;.swiper{width:100%;height:auto;}.swiper-slide{display:flex;justify-content:center;align-items:center;height:100%;}.swiper-scrollbar{margin-top:8px;}',
]);
function ez({
  products: r,
  card: a,
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
    const S = r.find((E) => E.id === g) ?? {
      id: '',
      name: '',
      description: '',
      price: '',
      img: '',
    };
    (s(S), c(!0));
  }
  return Re(ZP, {
    children: Re(Ld, {
      scrollbar: { hide: !0 },
      modules: [Cy, Ty],
      spaceBetween: 10,
      slidesPerView: h,
      grid: { rows: d, fill: 'row' },
      children: r.map((g) =>
        Re(
          kd,
          {
            onClick: () => m(g.id),
            children: Re(xy, {
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
const tz = Kt('div').withConfig({
  displayName: 'Catalog__StyledBaseField',
  componentId: 'sc-lby759-0',
})(['width:90%;']);
function nz({
  products: r,
  card: a,
  rows: o,
  setCard: s,
  setProductState: c,
  setIsOpenModal: f,
  isOpenModal: d,
}) {
  return cn(tz, {
    children: [
      Re('h2', { children: 'Catalog' }),
      Re(ez, {
        products: r,
        card: a,
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
const ET = (r) => typeof r == 'object';
var fn = (r) => !ir(r) && !Array.isArray(r) && ET(r) && !Do(r),
  rz = (r) =>
    fn(r) && r.target ? (Gu(r.target) ? r.target.checked : r.target.value) : r,
  az = (r) => r.substring(0, r.search(/\.\d+(\.|$)/)) || r,
  iz = (r, a) => r.has(az(a)),
  oz = (r) => {
    const a = r.constructor && r.constructor.prototype;
    return fn(a) && a.hasOwnProperty('isPrototypeOf');
  },
  Ry =
    typeof window < 'u' &&
    typeof window.HTMLElement < 'u' &&
    typeof document < 'u';
function Ln(r) {
  let a;
  const o = Array.isArray(r),
    s = typeof FileList < 'u' ? r instanceof FileList : !1;
  if (r instanceof Date) a = new Date(r);
  else if (!(Ry && (r instanceof Blob || s)) && (o || fn(r)))
    if (((a = o ? [] : {}), !o && !oz(r))) a = r;
    else for (const c in r) r.hasOwnProperty(c) && (a[c] = Ln(r[c]));
  else return r;
  return a;
}
var Nd = (r) => /^\w*$/.test(r),
  mn = (r) => r === void 0,
  _y = (r) => (Array.isArray(r) ? r.filter(Boolean) : []),
  Dy = (r) => _y(r.replace(/["|']|\]/g, '').split(/\.|\[/)),
  Ue = (r, a, o) => {
    if (!a || !fn(r)) return o;
    const s = (Nd(a) ? [a] : Dy(a)).reduce((c, f) => (ir(c) ? c : c[f]), r);
    return mn(s) || s === r ? (mn(r[a]) ? o : r[a]) : s;
  },
  Ea = (r) => typeof r == 'boolean',
  Qt = (r, a, o) => {
    let s = -1;
    const c = Nd(a) ? [a] : Dy(a),
      f = c.length,
      d = f - 1;
    for (; ++s < f; ) {
      const h = c[s];
      let m = o;
      if (s !== d) {
        const g = r[h];
        m = fn(g) || Array.isArray(g) ? g : isNaN(+c[s + 1]) ? {} : [];
      }
      if (h === '__proto__' || h === 'constructor' || h === 'prototype') return;
      ((r[h] = m), (r = r[h]));
    }
  };
const vC = { BLUR: 'blur', FOCUS_OUT: 'focusout', CHANGE: 'change' },
  ta = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
    onTouched: 'onTouched',
    all: 'all',
  },
  Za = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate',
  },
  lz = Ct.createContext(null);
lz.displayName = 'HookFormContext';
var sz = (r, a, o, s = !0) => {
  const c = { defaultValues: a._defaultValues };
  for (const f in r)
    Object.defineProperty(c, f, {
      get: () => {
        const d = f;
        return (
          a._proxyFormState[d] !== ta.all &&
            (a._proxyFormState[d] = !s || ta.all),
          o && (o[d] = !0),
          r[d]
        );
      },
    });
  return c;
};
const uz = typeof window < 'u' ? Z.useLayoutEffect : Z.useEffect;
var Ca = (r) => typeof r == 'string',
  cz = (r, a, o, s, c) =>
    Ca(r)
      ? (s && a.watch.add(r), Ue(o, r, c))
      : Array.isArray(r)
        ? r.map((f) => (s && a.watch.add(f), Ue(o, f)))
        : (s && (a.watchAll = !0), o),
  fz = (r, a, o, s, c) =>
    a
      ? {
          ...o[r],
          types: { ...(o[r] && o[r].types ? o[r].types : {}), [s]: c || !0 },
        }
      : {},
  Pu = (r) => (Array.isArray(r) ? r : [r]),
  hC = () => {
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
  cy = (r) => ir(r) || !ET(r);
function Fi(r, a, o = new WeakSet()) {
  if (cy(r) || cy(a)) return r === a;
  if (Do(r) && Do(a)) return r.getTime() === a.getTime();
  const s = Object.keys(r),
    c = Object.keys(a);
  if (s.length !== c.length) return !1;
  if (o.has(r) || o.has(a)) return !0;
  (o.add(r), o.add(a));
  for (const f of s) {
    const d = r[f];
    if (!c.includes(f)) return !1;
    if (f !== 'ref') {
      const h = a[f];
      if (
        (Do(d) && Do(h)) ||
        (fn(d) && fn(h)) ||
        (Array.isArray(d) && Array.isArray(h))
          ? !Fi(d, h, o)
          : d !== h
      )
        return !1;
    }
  }
  return !0;
}
var vr = (r) => fn(r) && !Object.keys(r).length,
  Oy = (r) => r.type === 'file',
  na = (r) => typeof r == 'function',
  Dd = (r) => {
    if (!Ry) return !1;
    const a = r ? r.ownerDocument : 0;
    return (
      r instanceof
      (a && a.defaultView ? a.defaultView.HTMLElement : HTMLElement)
    );
  },
  wT = (r) => r.type === 'select-multiple',
  Ay = (r) => r.type === 'radio',
  dz = (r) => Ay(r) || Gu(r),
  Km = (r) => Dd(r) && r.isConnected;
function pz(r, a) {
  const o = a.slice(0, -1).length;
  let s = 0;
  for (; s < o; ) r = mn(r) ? s++ : r[a[s++]];
  return r;
}
function vz(r) {
  for (const a in r) if (r.hasOwnProperty(a) && !mn(r[a])) return !1;
  return !0;
}
function hn(r, a) {
  const o = Array.isArray(a) ? a : Nd(a) ? [a] : Dy(a),
    s = o.length === 1 ? r : pz(r, o),
    c = o.length - 1,
    f = o[c];
  return (
    s && delete s[f],
    c !== 0 &&
      ((fn(s) && vr(s)) || (Array.isArray(s) && vz(s))) &&
      hn(r, o.slice(0, -1)),
    r
  );
}
var CT = (r) => {
  for (const a in r) if (na(r[a])) return !0;
  return !1;
};
function Od(r, a = {}) {
  const o = Array.isArray(r);
  if (fn(r) || o)
    for (const s in r)
      Array.isArray(r[s]) || (fn(r[s]) && !CT(r[s]))
        ? ((a[s] = Array.isArray(r[s]) ? [] : {}), Od(r[s], a[s]))
        : ir(r[s]) || (a[s] = !0);
  return a;
}
function TT(r, a, o) {
  const s = Array.isArray(r);
  if (fn(r) || s)
    for (const c in r)
      Array.isArray(r[c]) || (fn(r[c]) && !CT(r[c]))
        ? mn(a) || cy(o[c])
          ? (o[c] = Array.isArray(r[c]) ? Od(r[c], []) : { ...Od(r[c]) })
          : TT(r[c], ir(a) ? {} : a[c], o[c])
        : (o[c] = !Fi(r[c], a[c]));
  return o;
}
var Mu = (r, a) => TT(r, a, Od(a));
const mC = { value: !1, isValid: !1 },
  yC = { value: !0, isValid: !0 };
var xT = (r) => {
    if (Array.isArray(r)) {
      if (r.length > 1) {
        const a = r
          .filter((o) => o && o.checked && !o.disabled)
          .map((o) => o.value);
        return { value: a, isValid: !!a.length };
      }
      return r[0].checked && !r[0].disabled
        ? r[0].attributes && !mn(r[0].attributes.value)
          ? mn(r[0].value) || r[0].value === ''
            ? yC
            : { value: r[0].value, isValid: !0 }
          : yC
        : mC;
    }
    return mC;
  },
  RT = (r, { valueAsNumber: a, valueAsDate: o, setValueAs: s }) =>
    mn(r)
      ? r
      : a
        ? r === ''
          ? NaN
          : r && +r
        : o && Ca(r)
          ? new Date(r)
          : s
            ? s(r)
            : r;
const gC = { isValid: !1, value: null };
var _T = (r) =>
  Array.isArray(r)
    ? r.reduce(
        (a, o) =>
          o && o.checked && !o.disabled ? { isValid: !0, value: o.value } : a,
        gC
      )
    : gC;
function bC(r) {
  const a = r.ref;
  return Oy(a)
    ? a.files
    : Ay(a)
      ? _T(r.refs).value
      : wT(a)
        ? [...a.selectedOptions].map(({ value: o }) => o)
        : Gu(a)
          ? xT(r.refs).value
          : RT(mn(a.value) ? r.ref.value : a.value, r);
}
var hz = (r, a, o, s) => {
    const c = {};
    for (const f of r) {
      const d = Ue(a, f);
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
    mn(r)
      ? r
      : Ad(r)
        ? r.source
        : fn(r)
          ? Ad(r.value)
            ? r.value.source
            : r.value
          : r,
  SC = (r) => ({
    isOnSubmit: !r || r === ta.onSubmit,
    isOnBlur: r === ta.onBlur,
    isOnChange: r === ta.onChange,
    isOnAll: r === ta.all,
    isOnTouch: r === ta.onTouched,
  });
const EC = 'AsyncFunction';
var mz = (r) =>
    !!r &&
    !!r.validate &&
    !!(
      (na(r.validate) && r.validate.constructor.name === EC) ||
      (fn(r.validate) &&
        Object.values(r.validate).find((a) => a.constructor.name === EC))
    ),
  yz = (r) =>
    r.mount &&
    (r.required ||
      r.min ||
      r.max ||
      r.maxLength ||
      r.minLength ||
      r.pattern ||
      r.validate),
  wC = (r, a, o) =>
    !o &&
    (a.watchAll ||
      a.watch.has(r) ||
      [...a.watch].some(
        (s) => r.startsWith(s) && /^\.\w+/.test(r.slice(s.length))
      ));
const zu = (r, a, o, s) => {
  for (const c of o || Object.keys(r)) {
    const f = Ue(r, c);
    if (f) {
      const { _f: d, ...h } = f;
      if (d) {
        if (d.refs && d.refs[0] && a(d.refs[0], c) && !s) return !0;
        if (d.ref && a(d.ref, d.name) && !s) return !0;
        if (zu(h, a)) break;
      } else if (fn(h) && zu(h, a)) break;
    }
  }
};
function CC(r, a, o) {
  const s = Ue(r, o);
  if (s || Nd(o)) return { error: s, name: o };
  const c = o.split('.');
  for (; c.length; ) {
    const f = c.join('.'),
      d = Ue(a, f),
      h = Ue(r, f);
    if (d && !Array.isArray(d) && o !== f) return { name: o };
    if (h && h.type) return { name: f, error: h };
    if (h && h.root && h.root.type) return { name: `${f}.root`, error: h.root };
    c.pop();
  }
  return { name: o };
}
var gz = (r, a, o, s) => {
    o(r);
    const { name: c, ...f } = r;
    return (
      vr(f) ||
      Object.keys(f).length >= Object.keys(a).length ||
      Object.keys(f).find((d) => a[d] === (!s || ta.all))
    );
  },
  bz = (r, a, o) =>
    !r ||
    !a ||
    r === a ||
    Pu(r).some((s) => s && (o ? s === a : s.startsWith(a) || a.startsWith(s))),
  Sz = (r, a, o, s, c) =>
    c.isOnAll
      ? !1
      : !o && c.isOnTouch
        ? !(a || r)
        : (o ? s.isOnBlur : c.isOnBlur)
          ? !r
          : (o ? s.isOnChange : c.isOnChange)
            ? r
            : !0,
  Ez = (r, a) => !_y(Ue(r, a)).length && hn(r, a),
  wz = (r, a, o) => {
    const s = Pu(Ue(r, o));
    return (Qt(s, 'root', a[o]), Qt(r, o, s), r);
  },
  gd = (r) => Ca(r);
function TC(r, a, o = 'validate') {
  if (gd(r) || (Array.isArray(r) && r.every(gd)) || (Ea(r) && !r))
    return { type: o, message: gd(r) ? r : '', ref: a };
}
var Ml = (r) => (fn(r) && !Ad(r) ? r : { value: r, message: '' }),
  xC = async (r, a, o, s, c, f) => {
    const {
        ref: d,
        refs: h,
        required: m,
        maxLength: g,
        minLength: S,
        min: E,
        max: T,
        pattern: D,
        validate: O,
        name: x,
        valueAsNumber: k,
        mount: L,
      } = r._f,
      R = Ue(o, x);
    if (!L || a.has(x)) return {};
    const z = h ? h[0] : d,
      U = (B) => {
        c &&
          z.reportValidity &&
          (z.setCustomValidity(Ea(B) ? '' : B || ''), z.reportValidity());
      },
      F = {},
      te = Ay(d),
      ae = Gu(d),
      le = te || ae,
      ne =
        ((k || Oy(d)) && mn(d.value) && mn(R)) ||
        (Dd(d) && d.value === '') ||
        R === '' ||
        (Array.isArray(R) && !R.length),
      ee = fz.bind(null, x, s, F),
      ue = (B, W, ie, pe = Za.maxLength, ce = Za.minLength) => {
        const ve = B ? W : ie;
        F[x] = {
          type: B ? pe : ce,
          message: ve,
          ref: d,
          ...ee(B ? pe : ce, ve),
        };
      };
    if (
      f
        ? !Array.isArray(R) || !R.length
        : m &&
          ((!le && (ne || ir(R))) ||
            (Ea(R) && !R) ||
            (ae && !xT(h).isValid) ||
            (te && !_T(h).isValid))
    ) {
      const { value: B, message: W } = gd(m)
        ? { value: !!m, message: m }
        : Ml(m);
      if (
        B &&
        ((F[x] = {
          type: Za.required,
          message: W,
          ref: z,
          ...ee(Za.required, W),
        }),
        !s)
      )
        return (U(W), F);
    }
    if (!ne && (!ir(E) || !ir(T))) {
      let B, W;
      const ie = Ml(T),
        pe = Ml(E);
      if (!ir(R) && !isNaN(R)) {
        const ce = d.valueAsNumber || (R && +R);
        (ir(ie.value) || (B = ce > ie.value),
          ir(pe.value) || (W = ce < pe.value));
      } else {
        const ce = d.valueAsDate || new Date(R),
          ve = (Ye) => new Date(new Date().toDateString() + ' ' + Ye),
          be = d.type == 'time',
          xe = d.type == 'week';
        (Ca(ie.value) &&
          R &&
          (B = be
            ? ve(R) > ve(ie.value)
            : xe
              ? R > ie.value
              : ce > new Date(ie.value)),
          Ca(pe.value) &&
            R &&
            (W = be
              ? ve(R) < ve(pe.value)
              : xe
                ? R < pe.value
                : ce < new Date(pe.value)));
      }
      if ((B || W) && (ue(!!B, ie.message, pe.message, Za.max, Za.min), !s))
        return (U(F[x].message), F);
    }
    if ((g || S) && !ne && (Ca(R) || (f && Array.isArray(R)))) {
      const B = Ml(g),
        W = Ml(S),
        ie = !ir(B.value) && R.length > +B.value,
        pe = !ir(W.value) && R.length < +W.value;
      if ((ie || pe) && (ue(ie, B.message, W.message), !s))
        return (U(F[x].message), F);
    }
    if (D && !ne && Ca(R)) {
      const { value: B, message: W } = Ml(D);
      if (
        Ad(B) &&
        !R.match(B) &&
        ((F[x] = {
          type: Za.pattern,
          message: W,
          ref: d,
          ...ee(Za.pattern, W),
        }),
        !s)
      )
        return (U(W), F);
    }
    if (O) {
      if (na(O)) {
        const B = await O(R, o),
          W = TC(B, z);
        if (W && ((F[x] = { ...W, ...ee(Za.validate, W.message) }), !s))
          return (U(W.message), F);
      } else if (fn(O)) {
        let B = {};
        for (const W in O) {
          if (!vr(B) && !s) break;
          const ie = TC(await O[W](R, o), z, W);
          ie &&
            ((B = { ...ie, ...ee(W, ie.message) }),
            U(ie.message),
            s && (F[x] = B));
        }
        if (!vr(B) && ((F[x] = { ref: z, ...B }), !s)) return F;
      }
    }
    return (U(!0), F);
  };
const Cz = {
  mode: ta.onSubmit,
  reValidateMode: ta.onChange,
  shouldFocusError: !0,
};
function Tz(r = {}) {
  let a = { ...Cz, ...r },
    o = {
      submitCount: 0,
      isDirty: !1,
      isReady: !1,
      isLoading: na(a.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: a.errors || {},
      disabled: a.disabled || !1,
    },
    s = {},
    c =
      fn(a.defaultValues) || fn(a.values)
        ? Ln(a.defaultValues || a.values) || {}
        : {},
    f = a.shouldUnregister ? {} : Ln(c),
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
  const S = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1,
  };
  let E = { ...S };
  const T = { array: hC(), state: hC() },
    D = a.criteriaMode === ta.all,
    O = (_) => (V) => {
      (clearTimeout(g), (g = setTimeout(_, V)));
    },
    x = async (_) => {
      if (!a.disabled && (S.isValid || E.isValid || _)) {
        const V = a.resolver ? vr((await ae()).errors) : await ne(s, !0);
        V !== o.isValid && T.state.next({ isValid: V });
      }
    },
    k = (_, V) => {
      !a.disabled &&
        (S.isValidating ||
          S.validatingFields ||
          E.isValidating ||
          E.validatingFields) &&
        ((_ || Array.from(h.mount)).forEach((q) => {
          q && (V ? Qt(o.validatingFields, q, V) : hn(o.validatingFields, q));
        }),
        T.state.next({
          validatingFields: o.validatingFields,
          isValidating: !vr(o.validatingFields),
        }));
    },
    L = (_, V = [], q, me, X = !0, re = !0) => {
      if (me && q && !a.disabled) {
        if (((d.action = !0), re && Array.isArray(Ue(s, _)))) {
          const Me = q(Ue(s, _), me.argA, me.argB);
          X && Qt(s, _, Me);
        }
        if (re && Array.isArray(Ue(o.errors, _))) {
          const Me = q(Ue(o.errors, _), me.argA, me.argB);
          (X && Qt(o.errors, _, Me), Ez(o.errors, _));
        }
        if (
          (S.touchedFields || E.touchedFields) &&
          re &&
          Array.isArray(Ue(o.touchedFields, _))
        ) {
          const Me = q(Ue(o.touchedFields, _), me.argA, me.argB);
          X && Qt(o.touchedFields, _, Me);
        }
        ((S.dirtyFields || E.dirtyFields) && (o.dirtyFields = Mu(c, f)),
          T.state.next({
            name: _,
            isDirty: ue(_, V),
            dirtyFields: o.dirtyFields,
            errors: o.errors,
            isValid: o.isValid,
          }));
      } else Qt(f, _, V);
    },
    R = (_, V) => {
      (Qt(o.errors, _, V), T.state.next({ errors: o.errors }));
    },
    z = (_) => {
      ((o.errors = _), T.state.next({ errors: o.errors, isValid: !1 }));
    },
    U = (_, V, q, me) => {
      const X = Ue(s, _);
      if (X) {
        const re = Ue(f, _, mn(q) ? Ue(c, _) : q);
        (mn(re) || (me && me.defaultChecked) || V
          ? Qt(f, _, V ? re : bC(X._f))
          : ie(_, re),
          d.mount && x());
      }
    },
    F = (_, V, q, me, X) => {
      let re = !1,
        Me = !1;
      const Be = { name: _ };
      if (!a.disabled) {
        if (!q || me) {
          (S.isDirty || E.isDirty) &&
            ((Me = o.isDirty),
            (o.isDirty = Be.isDirty = ue()),
            (re = Me !== Be.isDirty));
          const et = Fi(Ue(c, _), V);
          ((Me = !!Ue(o.dirtyFields, _)),
            et ? hn(o.dirtyFields, _) : Qt(o.dirtyFields, _, !0),
            (Be.dirtyFields = o.dirtyFields),
            (re = re || ((S.dirtyFields || E.dirtyFields) && Me !== !et)));
        }
        if (q) {
          const et = Ue(o.touchedFields, _);
          et ||
            (Qt(o.touchedFields, _, q),
            (Be.touchedFields = o.touchedFields),
            (re = re || ((S.touchedFields || E.touchedFields) && et !== q)));
        }
        re && X && T.state.next(Be);
      }
      return re ? Be : {};
    },
    te = (_, V, q, me) => {
      const X = Ue(o.errors, _),
        re = (S.isValid || E.isValid) && Ea(V) && o.isValid !== V;
      if (
        (a.delayError && q
          ? ((m = O(() => R(_, q))), m(a.delayError))
          : (clearTimeout(g),
            (m = null),
            q ? Qt(o.errors, _, q) : hn(o.errors, _)),
        (q ? !Fi(X, q) : X) || !vr(me) || re)
      ) {
        const Me = {
          ...me,
          ...(re && Ea(V) ? { isValid: V } : {}),
          errors: o.errors,
          name: _,
        };
        ((o = { ...o, ...Me }), T.state.next(Me));
      }
    },
    ae = async (_) => {
      k(_, !0);
      const V = await a.resolver(
        f,
        a.context,
        hz(_ || h.mount, s, a.criteriaMode, a.shouldUseNativeValidation)
      );
      return (k(_), V);
    },
    le = async (_) => {
      const { errors: V } = await ae(_);
      if (_)
        for (const q of _) {
          const me = Ue(V, q);
          me ? Qt(o.errors, q, me) : hn(o.errors, q);
        }
      else o.errors = V;
      return V;
    },
    ne = async (_, V, q = { valid: !0 }) => {
      for (const me in _) {
        const X = _[me];
        if (X) {
          const { _f: re, ...Me } = X;
          if (re) {
            const Be = h.array.has(re.name),
              et = X._f && mz(X._f);
            et && S.validatingFields && k([me], !0);
            const nn = await xC(
              X,
              h.disabled,
              f,
              D,
              a.shouldUseNativeValidation && !V,
              Be
            );
            if (
              (et && S.validatingFields && k([me]),
              nn[re.name] && ((q.valid = !1), V))
            )
              break;
            !V &&
              (Ue(nn, re.name)
                ? Be
                  ? wz(o.errors, nn, re.name)
                  : Qt(o.errors, re.name, nn[re.name])
                : hn(o.errors, re.name));
          }
          !vr(Me) && (await ne(Me, V, q));
        }
      }
      return q.valid;
    },
    ee = () => {
      for (const _ of h.unMount) {
        const V = Ue(s, _);
        V &&
          (V._f.refs ? V._f.refs.every((q) => !Km(q)) : !Km(V._f.ref)) &&
          Je(_);
      }
      h.unMount = new Set();
    },
    ue = (_, V) => !a.disabled && (_ && V && Qt(f, _, V), !Fi(Ye(), c)),
    B = (_, V, q) =>
      cz(_, h, { ...(d.mount ? f : mn(V) ? c : Ca(_) ? { [_]: V } : V) }, q, V),
    W = (_) =>
      _y(Ue(d.mount ? f : c, _, a.shouldUnregister ? Ue(c, _, []) : [])),
    ie = (_, V, q = {}) => {
      const me = Ue(s, _);
      let X = V;
      if (me) {
        const re = me._f;
        re &&
          (!re.disabled && Qt(f, _, RT(V, re)),
          (X = Dd(re.ref) && ir(V) ? '' : V),
          wT(re.ref)
            ? [...re.ref.options].forEach(
                (Me) => (Me.selected = X.includes(Me.value))
              )
            : re.refs
              ? Gu(re.ref)
                ? re.refs.forEach((Me) => {
                    (!Me.defaultChecked || !Me.disabled) &&
                      (Array.isArray(X)
                        ? (Me.checked = !!X.find((Be) => Be === Me.value))
                        : (Me.checked = X === Me.value || !!X));
                  })
                : re.refs.forEach((Me) => (Me.checked = Me.value === X))
              : Oy(re.ref)
                ? (re.ref.value = '')
                : ((re.ref.value = X),
                  re.ref.type || T.state.next({ name: _, values: Ln(f) })));
      }
      ((q.shouldDirty || q.shouldTouch) &&
        F(_, X, q.shouldTouch, q.shouldDirty, !0),
        q.shouldValidate && xe(_));
    },
    pe = (_, V, q) => {
      for (const me in V) {
        if (!V.hasOwnProperty(me)) return;
        const X = V[me],
          re = _ + '.' + me,
          Me = Ue(s, re);
        (h.array.has(_) || fn(X) || (Me && !Me._f)) && !Do(X)
          ? pe(re, X, q)
          : ie(re, X, q);
      }
    },
    ce = (_, V, q = {}) => {
      const me = Ue(s, _),
        X = h.array.has(_),
        re = Ln(V);
      (Qt(f, _, re),
        X
          ? (T.array.next({ name: _, values: Ln(f) }),
            (S.isDirty || S.dirtyFields || E.isDirty || E.dirtyFields) &&
              q.shouldDirty &&
              T.state.next({
                name: _,
                dirtyFields: Mu(c, f),
                isDirty: ue(_, re),
              }))
          : me && !me._f && !ir(re)
            ? pe(_, re, q)
            : ie(_, re, q),
        wC(_, h) && T.state.next({ ...o }),
        T.state.next({ name: d.mount ? _ : void 0, values: Ln(f) }));
    },
    ve = async (_) => {
      d.mount = !0;
      const V = _.target;
      let q = V.name,
        me = !0;
      const X = Ue(s, q),
        re = (et) => {
          me =
            Number.isNaN(et) ||
            (Do(et) && isNaN(et.getTime())) ||
            Fi(et, Ue(f, q, et));
        },
        Me = SC(a.mode),
        Be = SC(a.reValidateMode);
      if (X) {
        let et, nn;
        const or = V.type ? bC(X._f) : rz(_),
          Ee = _.type === vC.BLUR || _.type === vC.FOCUS_OUT,
          Fe =
            (!yz(X._f) && !a.resolver && !Ue(o.errors, q) && !X._f.deps) ||
            Sz(Ee, Ue(o.touchedFields, q), o.isSubmitted, Be, Me),
          lt = wC(q, h, Ee);
        (Qt(f, q, or),
          Ee
            ? (X._f.onBlur && X._f.onBlur(_), m && m(0))
            : X._f.onChange && X._f.onChange(_));
        const Tt = F(q, or, Ee),
          At = !vr(Tt) || lt;
        if ((!Ee && T.state.next({ name: q, type: _.type, values: Ln(f) }), Fe))
          return (
            (S.isValid || E.isValid) &&
              (a.mode === 'onBlur' ? Ee && x() : Ee || x()),
            At && T.state.next({ name: q, ...(lt ? {} : Tt) })
          );
        if ((!Ee && lt && T.state.next({ ...o }), a.resolver)) {
          const { errors: rn } = await ae([q]);
          if ((re(or), me)) {
            const Jt = CC(o.errors, s, q),
              kn = CC(rn, s, Jt.name || q);
            ((et = kn.error), (q = kn.name), (nn = vr(rn)));
          }
        } else
          (k([q], !0),
            (et = (await xC(X, h.disabled, f, D, a.shouldUseNativeValidation))[
              q
            ]),
            k([q]),
            re(or),
            me &&
              (et
                ? (nn = !1)
                : (S.isValid || E.isValid) && (nn = await ne(s, !0))));
        me && (X._f.deps && xe(X._f.deps), te(q, nn, et, Tt));
      }
    },
    be = (_, V) => {
      if (Ue(o.errors, V) && _.focus) return (_.focus(), 1);
    },
    xe = async (_, V = {}) => {
      let q, me;
      const X = Pu(_);
      if (a.resolver) {
        const re = await le(mn(_) ? _ : X);
        ((q = vr(re)), (me = _ ? !X.some((Me) => Ue(re, Me)) : q));
      } else
        _
          ? ((me = (
              await Promise.all(
                X.map(async (re) => {
                  const Me = Ue(s, re);
                  return await ne(Me && Me._f ? { [re]: Me } : Me);
                })
              )
            ).every(Boolean)),
            !(!me && !o.isValid) && x())
          : (me = q = await ne(s));
      return (
        T.state.next({
          ...(!Ca(_) || ((S.isValid || E.isValid) && q !== o.isValid)
            ? {}
            : { name: _ }),
          ...(a.resolver || !_ ? { isValid: q } : {}),
          errors: o.errors,
        }),
        V.shouldFocus && !me && zu(s, be, _ ? X : h.mount),
        me
      );
    },
    Ye = (_) => {
      const V = { ...(d.mount ? f : c) };
      return mn(_) ? V : Ca(_) ? Ue(V, _) : _.map((q) => Ue(V, q));
    },
    Lt = (_, V) => ({
      invalid: !!Ue((V || o).errors, _),
      isDirty: !!Ue((V || o).dirtyFields, _),
      error: Ue((V || o).errors, _),
      isValidating: !!Ue(o.validatingFields, _),
      isTouched: !!Ue((V || o).touchedFields, _),
    }),
    we = (_) => {
      (_ && Pu(_).forEach((V) => hn(o.errors, V)),
        T.state.next({ errors: _ ? o.errors : {} }));
    },
    Ce = (_, V, q) => {
      const me = (Ue(s, _, { _f: {} })._f || {}).ref,
        X = Ue(o.errors, _) || {},
        { ref: re, message: Me, type: Be, ...et } = X;
      (Qt(o.errors, _, { ...et, ...V, ref: me }),
        T.state.next({ name: _, errors: o.errors, isValid: !1 }),
        q && q.shouldFocus && me && me.focus && me.focus());
    },
    _e = (_, V) =>
      na(_)
        ? T.state.subscribe({ next: (q) => _(B(void 0, V), q) })
        : B(_, V, !0),
    Ve = (_) =>
      T.state.subscribe({
        next: (V) => {
          bz(_.name, V.name, _.exact) &&
            gz(V, _.formState || S, Ge, _.reRenderRoot) &&
            _.callback({ values: { ...f }, ...o, ...V });
        },
      }).unsubscribe,
    $ = (_) => (
      (d.mount = !0),
      (E = { ...E, ..._.formState }),
      Ve({ ..._, formState: E })
    ),
    Je = (_, V = {}) => {
      for (const q of _ ? Pu(_) : h.mount)
        (h.mount.delete(q),
          h.array.delete(q),
          V.keepValue || (hn(s, q), hn(f, q)),
          !V.keepError && hn(o.errors, q),
          !V.keepDirty && hn(o.dirtyFields, q),
          !V.keepTouched && hn(o.touchedFields, q),
          !V.keepIsValidating && hn(o.validatingFields, q),
          !a.shouldUnregister && !V.keepDefaultValue && hn(c, q));
      (T.state.next({ values: Ln(f) }),
        T.state.next({ ...o, ...(V.keepDirty ? { isDirty: ue() } : {}) }),
        !V.keepIsValid && x());
    },
    ye = ({ disabled: _, name: V }) => {
      ((Ea(_) && d.mount) || _ || h.disabled.has(V)) &&
        (_ ? h.disabled.add(V) : h.disabled.delete(V));
    },
    it = (_, V = {}) => {
      let q = Ue(s, _);
      const me = Ea(V.disabled) || Ea(a.disabled);
      return (
        Qt(s, _, {
          ...(q || {}),
          _f: {
            ...(q && q._f ? q._f : { ref: { name: _ } }),
            name: _,
            mount: !0,
            ...V,
          },
        }),
        h.mount.add(_),
        q
          ? ye({ disabled: Ea(V.disabled) ? V.disabled : a.disabled, name: _ })
          : U(_, !0, V.value),
        {
          ...(me ? { disabled: V.disabled || a.disabled } : {}),
          ...(a.progressive
            ? {
                required: !!V.required,
                min: Lu(V.min),
                max: Lu(V.max),
                minLength: Lu(V.minLength),
                maxLength: Lu(V.maxLength),
                pattern: Lu(V.pattern),
              }
            : {}),
          name: _,
          onChange: ve,
          onBlur: ve,
          ref: (X) => {
            if (X) {
              (it(_, V), (q = Ue(s, _)));
              const re =
                  (mn(X.value) &&
                    X.querySelectorAll &&
                    X.querySelectorAll('input,select,textarea')[0]) ||
                  X,
                Me = dz(re),
                Be = q._f.refs || [];
              if (Me ? Be.find((et) => et === re) : re === q._f.ref) return;
              (Qt(s, _, {
                _f: {
                  ...q._f,
                  ...(Me
                    ? {
                        refs: [
                          ...Be.filter(Km),
                          re,
                          ...(Array.isArray(Ue(c, _)) ? [{}] : []),
                        ],
                        ref: { type: re.type, name: _ },
                      }
                    : { ref: re }),
                },
              }),
                U(_, !1, void 0, re));
            } else
              ((q = Ue(s, _, {})),
                q._f && (q._f.mount = !1),
                (a.shouldUnregister || V.shouldUnregister) &&
                  !(iz(h.array, _) && d.action) &&
                  h.unMount.add(_));
          },
        }
      );
    },
    Xe = () => a.shouldFocusError && zu(s, be, h.mount),
    Ze = (_) => {
      Ea(_) &&
        (T.state.next({ disabled: _ }),
        zu(
          s,
          (V, q) => {
            const me = Ue(s, q);
            me &&
              ((V.disabled = me._f.disabled || _),
              Array.isArray(me._f.refs) &&
                me._f.refs.forEach((X) => {
                  X.disabled = me._f.disabled || _;
                }));
          },
          0,
          !1
        ));
    },
    se = (_, V) => async (q) => {
      let me;
      q && (q.preventDefault && q.preventDefault(), q.persist && q.persist());
      let X = Ln(f);
      if ((T.state.next({ isSubmitting: !0 }), a.resolver)) {
        const { errors: re, values: Me } = await ae();
        ((o.errors = re), (X = Ln(Me)));
      } else await ne(s);
      if (h.disabled.size) for (const re of h.disabled) hn(X, re);
      if ((hn(o.errors, 'root'), vr(o.errors))) {
        T.state.next({ errors: {} });
        try {
          await _(X, q);
        } catch (re) {
          me = re;
        }
      } else (V && (await V({ ...o.errors }, q)), Xe(), setTimeout(Xe));
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
    ot = (_, V = {}) => {
      Ue(s, _) &&
        (mn(V.defaultValue)
          ? ce(_, Ln(Ue(c, _)))
          : (ce(_, V.defaultValue), Qt(c, _, Ln(V.defaultValue))),
        V.keepTouched || hn(o.touchedFields, _),
        V.keepDirty ||
          (hn(o.dirtyFields, _),
          (o.isDirty = V.defaultValue ? ue(_, Ln(Ue(c, _))) : ue())),
        V.keepError || (hn(o.errors, _), S.isValid && x()),
        T.state.next({ ...o }));
    },
    dt = (_, V = {}) => {
      const q = _ ? Ln(_) : c,
        me = Ln(q),
        X = vr(_),
        re = X ? c : me;
      if ((V.keepDefaultValues || (c = q), !V.keepValues)) {
        if (V.keepDirtyValues) {
          const Me = new Set([...h.mount, ...Object.keys(Mu(c, f))]);
          for (const Be of Array.from(Me))
            Ue(o.dirtyFields, Be) ? Qt(re, Be, Ue(f, Be)) : ce(Be, Ue(re, Be));
        } else {
          if (Ry && mn(_))
            for (const Me of h.mount) {
              const Be = Ue(s, Me);
              if (Be && Be._f) {
                const et = Array.isArray(Be._f.refs)
                  ? Be._f.refs[0]
                  : Be._f.ref;
                if (Dd(et)) {
                  const nn = et.closest('form');
                  if (nn) {
                    nn.reset();
                    break;
                  }
                }
              }
            }
          if (V.keepFieldsRef) for (const Me of h.mount) ce(Me, Ue(re, Me));
          else s = {};
        }
        ((f = a.shouldUnregister ? (V.keepDefaultValues ? Ln(c) : {}) : Ln(re)),
          T.array.next({ values: { ...re } }),
          T.state.next({ values: { ...re } }));
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
        (d.mount = !S.isValid || !!V.keepIsValid || !!V.keepDirtyValues),
        (d.watch = !!a.shouldUnregister),
        T.state.next({
          submitCount: V.keepSubmitCount ? o.submitCount : 0,
          isDirty: X
            ? !1
            : V.keepDirty
              ? o.isDirty
              : !!(V.keepDefaultValues && !Fi(_, c)),
          isSubmitted: V.keepIsSubmitted ? o.isSubmitted : !1,
          dirtyFields: X
            ? {}
            : V.keepDirtyValues
              ? V.keepDefaultValues && f
                ? Mu(c, f)
                : o.dirtyFields
              : V.keepDefaultValues && _
                ? Mu(c, _)
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
    Ie = (_, V) => dt(na(_) ? _(f) : _, V),
    vt = (_, V = {}) => {
      const q = Ue(s, _),
        me = q && q._f;
      if (me) {
        const X = me.refs ? me.refs[0] : me.ref;
        X.focus && (X.focus(), V.shouldSelect && na(X.select) && X.select());
      }
    },
    Ge = (_) => {
      o = { ...o, ..._ };
    },
    sn = {
      control: {
        register: it,
        unregister: Je,
        getFieldState: Lt,
        handleSubmit: se,
        setError: Ce,
        _subscribe: Ve,
        _runSchema: ae,
        _focusError: Xe,
        _getWatch: B,
        _getDirty: ue,
        _setValid: x,
        _setFieldArray: L,
        _setDisabledField: ye,
        _setErrors: z,
        _getFieldArray: W,
        _reset: dt,
        _resetDefaultValues: () =>
          na(a.defaultValues) &&
          a.defaultValues().then((_) => {
            (Ie(_, a.resetOptions), T.state.next({ isLoading: !1 }));
          }),
        _removeUnmounted: ee,
        _disableForm: Ze,
        _subjects: T,
        _proxyFormState: S,
        get _fields() {
          return s;
        },
        get _formValues() {
          return f;
        },
        get _state() {
          return d;
        },
        set _state(_) {
          d = _;
        },
        get _defaultValues() {
          return c;
        },
        get _names() {
          return h;
        },
        set _names(_) {
          h = _;
        },
        get _formState() {
          return o;
        },
        get _options() {
          return a;
        },
        set _options(_) {
          a = { ...a, ..._ };
        },
      },
      subscribe: $,
      trigger: xe,
      register: it,
      handleSubmit: se,
      watch: _e,
      setValue: ce,
      getValues: Ye,
      reset: Ie,
      resetField: ot,
      clearErrors: we,
      unregister: Je,
      setError: Ce,
      setFocus: vt,
      getFieldState: Lt,
    };
  return { ...sn, formControl: sn };
}
function DT(r = {}) {
  const a = Ct.useRef(void 0),
    o = Ct.useRef(void 0),
    [s, c] = Ct.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: na(r.defaultValues),
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
      defaultValues: na(r.defaultValues) ? void 0 : r.defaultValues,
    });
  if (!a.current)
    if (r.formControl)
      ((a.current = { ...r.formControl, formState: s }),
        r.defaultValues &&
          !na(r.defaultValues) &&
          r.formControl.reset(r.defaultValues, r.resetOptions));
    else {
      const { formControl: d, ...h } = Tz(r);
      a.current = { ...h, formState: s };
    }
  const f = a.current.control;
  return (
    (f._options = r),
    uz(() => {
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
    Ct.useEffect(() => f._disableForm(r.disabled), [f, r.disabled]),
    Ct.useEffect(() => {
      (r.mode && (f._options.mode = r.mode),
        r.reValidateMode && (f._options.reValidateMode = r.reValidateMode));
    }, [f, r.mode, r.reValidateMode]),
    Ct.useEffect(() => {
      r.errors && (f._setErrors(r.errors), f._focusError());
    }, [f, r.errors]),
    Ct.useEffect(() => {
      r.shouldUnregister && f._subjects.state.next({ values: f._getWatch() });
    }, [f, r.shouldUnregister]),
    Ct.useEffect(() => {
      if (f._proxyFormState.isDirty) {
        const d = f._getDirty();
        d !== s.isDirty && f._subjects.state.next({ isDirty: d });
      }
    }, [f, s.isDirty]),
    Ct.useEffect(() => {
      r.values && !Fi(r.values, o.current)
        ? (f._reset(r.values, {
            keepFieldsRef: !0,
            ...f._options.resetOptions,
          }),
          (o.current = r.values),
          c((d) => ({ ...d })))
        : f._resetDefaultValues();
    }, [f, r.values]),
    Ct.useEffect(() => {
      (f._state.mount || (f._setValid(), (f._state.mount = !0)),
        f._state.watch &&
          ((f._state.watch = !1), f._subjects.state.next({ ...f._formState })),
        f._removeUnmounted());
    }),
    (a.current.formState = sz(s, f)),
    a.current
  );
}
const xz = Kt('form').withConfig({
    displayName: 'MyForm__StyledForm',
    componentId: 'sc-1ycmc8g-0',
  })([
    'margin:30px;align-items:center;border:1px solid lightblue;border-radius:10px;padding:20px;display:flex;justify-content:center;flex-wrap:wrap;@media (min-width:480px){padding:40px;}@media (min-width:600px){width:500px;}',
  ]),
  RC = Kt('input').withConfig({
    displayName: 'MyForm__StyledFormField',
    componentId: 'sc-1ycmc8g-1',
  })([
    'margin:5px;width:150px;@media (max-width:480px){width:200px;display:block;}',
  ]),
  Rz = Kt('textarea').withConfig({
    displayName: 'MyForm__StyledFormTextArea',
    componentId: 'sc-1ycmc8g-2',
  })([
    'display:block;margin:5px;width:200px;@media (min-width:480px){width:320px;}',
  ]),
  _z = Kt('input').withConfig({
    displayName: 'MyForm__StyledButton',
    componentId: 'sc-1ycmc8g-3',
  })(['width:150px;margin:10px;display:block;']),
  Dz = Kt('input').withConfig({
    displayName: 'MyForm__StyledFormFile',
    componentId: 'sc-1ycmc8g-4',
  })(['margin:10px;display:block;']);
function OT({
  products: r,
  card: a,
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
    reset: S,
    handleSubmit: E,
    watch: T,
    formState: { errors: D },
  } = DT();
  return cn('div', {
    children: [
      m === 'upload'
        ? Re('h2', { children: 'Create new card' })
        : Re('h2', { children: 'Update card' }),
      cn(xz, {
        onSubmit: E(async (x) => {
          const k = new FormData();
          (k.append('name', x.name),
            k.append('price', x.price),
            k.append('description', x.description),
            k.append('id', a.id),
            s({
              id: a.id,
              name: x.name,
              description: x.description,
              price: x.price,
              img: a.img,
            }));
          const L = document.querySelector('input[name="files"]');
          (L != null &&
            L.files &&
            Array.from(L.files).forEach((F) => {
              k.append('files', F);
            }),
            await fetch(`${h}/${m}`, { method: 'POST', body: k }));
          const U = (
            await (await fetch(`${h}/all`, { method: 'GET' })).json()
          ).initialData.map((F) => {
            const { id: te, name: ae, price: le, description: ne, img: ee } = F;
            return { id: te, name: ae, price: le, description: ne, img: ee };
          });
          (c(U), S());
        }),
        children: [
          cn('div', {
            children: [
              Re(RC, { ...g('name', { required: !0 }), placeholder: 'Name' }),
              D.name && Re('span', { children: 'This field name is required' }),
              Re(RC, { ...g('price', { required: !0 }), placeholder: 'Price' }),
              D.price &&
                Re('span', { children: 'This field price is required' }),
            ],
          }),
          Re(Rz, {
            ...g('description', { required: !0 }),
            placeholder: 'Description',
            rows: 5,
          }),
          m === 'upload'
            ? Re(Dz, {
                type: 'file',
                name: 'files',
                accept: '.jpg',
                multiple: !0,
              })
            : '',
          D.description &&
            Re('span', { children: 'This field description is required' }),
          Re(_z, { type: 'submit' }),
        ],
      }),
    ],
  });
}
const Oz = Kt.div.withConfig({
    displayName: 'Modal__StyledOverlay',
    componentId: 'sc-1pc8fcs-0',
  })([
    'position:fixed;inset:0;background:rgba(0,0,0,0.5);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;z-index:9999;',
  ]),
  Az = Kt.div.withConfig({
    displayName: 'Modal__StyledModal',
    componentId: 'sc-1pc8fcs-1',
  })([
    'background:#ffffff;border-radius:16px;box-shadow:0 12px 32px rgba(0,0,0,0.2);padding:32px;width:90%;max-width:720px;max-height:90vh;overflow-y:auto;position:relative;display:flex;flex-direction:column;gap:24px;animation:fadeIn 0.3s ease-in-out;@keyframes fadeIn{from{opacity:0;transform:scale(0.95);}to{opacity:1;transform:scale(1);}}&::-webkit-scrollbar{width:8px;}&::-webkit-scrollbar-thumb{background:#ccc;border-radius:4px;}',
  ]),
  Mz = Kt.button.withConfig({
    displayName: 'Modal__StyledButtonClose',
    componentId: 'sc-1pc8fcs-2',
  })([
    'position:absolute;top:16px;right:20px;font-size:24px;color:#999;background:none;border:none;cursor:pointer;transition:color 0.2s;&:hover{color:#333;}',
  ]),
  Lz = Kt.div.withConfig({
    displayName: 'Modal__StyledFormWrapper',
    componentId: 'sc-1pc8fcs-3',
  })([
    'margin:40px;display:flex;flex-direction:column;align-items:center;gap:20px;',
  ]),
  kz = Kt.button.withConfig({
    displayName: 'Modal__StyledDeleteButton',
    componentId: 'sc-1pc8fcs-4',
  })([
    'align-self:center;padding:10px 24px;background-color:#ff4d4f;border:none;border-radius:8px;color:white;font-weight:bold;font-size:16px;cursor:pointer;transition:background-color 0.2s;&:hover{background-color:#d9363e;}',
  ]),
  Nz = Kt.div.withConfig({
    displayName: 'Modal__SwiperContainer',
    componentId: 'sc-1pc8fcs-5',
  })([
    'margin:30px;width:100%;max-width:720px;height:300px;margin:0 auto;.swiper-slide{display:flex;justify-content:center;align-items:center;}.swiper-slide img{width:70%;height:70%;object-fit:contain;}',
  ]),
  Pz = Kt.div.withConfig({
    displayName: 'Modal__SrtyledDivImg',
    componentId: 'sc-1pc8fcs-6',
  })(['width:100%;height:auto;margin-bottom:15px;']),
  zz = Kt.img.withConfig({
    displayName: 'Modal__StyledImg',
    componentId: 'sc-1pc8fcs-7',
  })(['width:100%;border-radius:12px;display:block;margin-bottom:12px;']),
  _C = Kt.input.withConfig({
    displayName: 'Modal__StyledInput',
    componentId: 'sc-1pc8fcs-8',
  })(['display:block;']),
  Uz = Kt.input.withConfig({
    displayName: 'Modal__StyledInputButton',
    componentId: 'sc-1pc8fcs-9',
  })(['display:block;margin:30px;']);
function Fz({
  products: r,
  card: a,
  rows: o,
  url: s,
  setCard: c,
  setProductState: f,
  setIsOpenModal: d,
  isOpenModal: h,
}) {
  const {
      register: m,
      reset: g,
      handleSubmit: S,
      watch: E,
      formState: { errors: T },
    } = DT(),
    D = async (k) => {
      let L = [...a.img.split(',')];
      for (let te = 0; te < k.deletePhotos.length; te++)
        +k.deletePhotos[te] != +k.selectedPhoto &&
          (L[+k.deletePhotos[te]] = '');
      ((L = [
        L[+k.selectedPhoto],
        ...L.filter((te, ae) => ae !== +k.selectedPhoto),
      ]),
        (L = L.filter((te) => te && te.trim())),
        c({
          id: a.id,
          name: a.name,
          description: a.description,
          price: a.price,
          img: L.join(','),
        }));
      const R = new FormData();
      (R.append('img', L.join(',')),
        R.append('id', a.id),
        await fetch(`${s}/admin`, { method: 'POST', body: R }));
      const F = (
        await (await fetch(`${s}/all`, { method: 'GET' })).json()
      ).initialData.map((te) => {
        const { id: ae, name: le, price: ne, description: ee, img: ue } = te;
        return { id: ae, name: le, price: ne, description: ee, img: ue };
      });
      (f(F), g());
    };
  function O() {
    d(!1);
  }
  async function x() {
    await fetch(`${s}/`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: a.id }),
    });
    const R = (
      await (await fetch(`${s}/all`, { method: 'GET' })).json()
    ).initialData.map((z) => {
      const { id: U, name: F, price: te, description: ae, img: le } = z;
      return { id: U, name: F, price: te, description: ae, img: le };
    });
    (c({ id: '', name: '', description: '', price: '', img: '' }), f(R), d(!1));
  }
  return Re(Oz, {
    children: cn(Az, {
      children: [
        Re(Mz, { onClick: O, children: '×' }),
        Re(xy, { product: a }),
        Re(Nz, {
          children: cn('form', {
            onSubmit: S(D),
            children: [
              Re(Ld, {
                scrollbar: { hide: !0, draggable: !0 },
                modules: [Cy, Ty, ST],
                autoplay: { delay: 2500, disableOnInteraction: !0 },
                slidesPerView: 3,
                spaceBetween: 20,
                grid: { rows: 1, fill: 'row' },
                children: a.img
                  .split(',')
                  .map((k, L) =>
                    Re(
                      kd,
                      {
                        children: cn(Pz, {
                          children: [
                            cn('label', {
                              children: [
                                Re(_C, {
                                  type: 'checkbox',
                                  value: L,
                                  ...m('deletePhotos'),
                                }),
                                'Delete Photo',
                              ],
                            }),
                            Re(zz, { src: k, alt: a.name }),
                            cn('label', {
                              children: [
                                Re(_C, {
                                  type: 'radio',
                                  value: L,
                                  defaultChecked: L === 0,
                                  ...m('selectedPhoto'),
                                }),
                                L === 0 && 'General Photo',
                              ],
                            }),
                          ],
                        }),
                      },
                      L
                    )
                  ),
              }),
              Re(Uz, { type: 'submit', value: 'Changed' }),
            ],
          }),
        }),
        cn(Lz, {
          children: [
            Re(OT, {
              products: r,
              card: a,
              rows: o,
              setCard: c,
              setProductState: f,
              setIsOpenModal: d,
              isOpenModal: h,
              url: s,
              endPoint: 'admin',
            }),
            Re(kz, { onClick: x, children: '🗑 Delete Card' }),
          ],
        }),
      ],
    }),
  });
}
const Jm = 'https://soft-rabit.onrender.com',
  Zm = 'upload',
  Vz = Kt('div').withConfig({
    displayName: 'Admin__StyledBaseField',
    componentId: 'sc-1rnwr9c-0',
  })([
    'display:flex;flex-direction:column;justify-content:center;align-items:center;',
  ]);
function Iz({
  products: r,
  card: a,
  rows: o,
  setCard: s,
  setProductState: c,
  setIsOpenModal: f,
  isOpenModal: d,
}) {
  return cn('div', {
    children: [
      d &&
        Re(Fz, {
          products: r,
          card: a,
          rows: o,
          setCard: s,
          setProductState: c,
          setIsOpenModal: f,
          isOpenModal: d,
          url: Jm,
          endPoint: Zm,
        }),
      cn(Vz, {
        children: [
          Re('h2', { children: 'Administrator' }),
          Re(nz, {
            products: r,
            card: a,
            rows: o,
            setCard: s,
            setProductState: c,
            setIsOpenModal: f,
            isOpenModal: d,
            url: Jm,
            endPoint: Zm,
          }),
          Re(OT, {
            products: r,
            card: a,
            rows: o,
            setCard: s,
            setProductState: c,
            setIsOpenModal: f,
            isOpenModal: d,
            url: Jm,
            endPoint: Zm,
          }),
        ],
      }),
    ],
  });
}
const Hz = Kt.div.withConfig({
  displayName: 'Home__StyledBaseField',
  componentId: 'sc-rf26ej-0',
})([
  'width:100%;max-width:1200px;margin:0 auto;padding:1rem;box-sizing:border-box;.swiper{width:100%;height:auto;}.swiper-slide{display:flex;justify-content:center;align-items:center;height:100%;}.swiper-scrollbar{margin-top:8px;}',
]);
function Bz({ products: r, rows: a }) {
  let o = 5,
    s = 2;
  switch (a) {
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
  return cn('div', {
    children: [
      Re('h2', { children: 'Home' }),
      Re(Hz, {
        children: Re(Ld, {
          scrollbar: { hide: !0, draggable: !0 },
          modules: [Cy, Ty, ST],
          autoplay: { delay: 2500, disableOnInteraction: !0 },
          slidesPerView: s,
          spaceBetween: 20,
          grid: { rows: o, fill: 'row' },
          children: r.map((c) =>
            Re(
              kd,
              {
                children: Re(xy, {
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
function jz() {
  return Re('div', { children: Re('h2', { children: 'Orders' }) });
}
function $z() {
  return Re('div', { children: Re('h2', { children: 'Contacts' }) });
}
function Yz() {
  return cn('div', {
    children: [
      Re('h2', { children: 'Nothing to see here!' }),
      Re('p', {
        children: Re(Ui, { to: '/', children: 'Go to the home page' }),
      }),
    ],
  });
}
function Gz() {
  return cn('div', {
    children: [
      Re('nav', {
        children: cn('ul', {
          children: [
            Re('li', { children: Re(Ui, { to: '/', children: 'Home' }) }),
            Re('li', { children: Re(Ui, { to: '/admin', children: 'Admin' }) }),
            Re('li', {
              children: Re(Ui, { to: '/orders', children: 'Orders' }),
            }),
            Re('li', {
              children: Re(Ui, { to: '/contacts', children: 'Contacts' }),
            }),
            Re('li', {
              children: Re(Ui, {
                to: '/nothing-here',
                children: 'Nothing Here',
              }),
            }),
          ],
        }),
      }),
      Re('hr', {}),
      Re(jL, {}),
    ],
  });
}
function Wz({ products: r }) {
  const [a, o] = Z.useState(r),
    [s, c] = Z.useState(2),
    [f, d] = Z.useState(!1),
    [h, m] = Z.useState({
      id: '',
      name: '',
      description: '',
      price: '',
      img: '',
    }),
    [g, S] = Z.useState(!1);
  return (
    Z.useEffect(() => {
      (o(r), S(!0));
    }, []),
    Z.useEffect(() => {
      function E() {
        const T = window.innerWidth;
        T < 480 ? c(4) : T < 768 ? c(3) : T < 1024 ? c(2) : c(1);
      }
      return (
        E(),
        window.addEventListener('resize', E),
        () => window.removeEventListener('resize', E)
      );
    }, []),
    g
      ? cn('div', {
          children: [
            Re('h1', { children: 'Server Rendering Example' }),
            Re('p', {
              children:
                "If you check out the HTML source of this page, you'll notice that it already contains the HTML markup of the app that was sent from the server!",
            }),
            Re('p', {
              children:
                "This is great for search engines that need to index this page. It's also great for users because server-rendered pages tend to load more quickly on mobile devices and over slow networks.",
            }),
            Re('p', {
              children:
                "Another thing to notice is that when you click one of the links below and navigate to a different URL, then hit the refresh button on your browser, the server is able to generate the HTML markup for that page as well because you're using React Router on the server. This creates a seamless experience both for your users navigating around your site and for developers on your team who get to use the same routing library in both places.",
            }),
            Re(YL, {
              children: cn(Ro, {
                path: '/',
                element: Re(Gz, {}),
                children: [
                  Re(Ro, {
                    index: !0,
                    element: Re(Bz, {
                      products: a,
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
                  Re(Ro, {
                    path: 'admin',
                    element: Re(Iz, {
                      products: a,
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
                  Re(Ro, { path: 'orders', element: Re(jz, {}) }),
                  Re(Ro, { path: 'contacts', element: Re($z, {}) }),
                  Re(Ro, { path: '*', element: Re(Yz, {}) }),
                ],
              }),
            }),
          ],
        })
      : null
  );
}
PC(
  document.getElementById('app'),
  Re(Z.StrictMode, {
    children: Re(ok, {
      children: Re(Wz, { products: window.__INITIAL_PRODUCTS__ ?? [] }),
    }),
  })
);
