function xL(r, a) {
  for (var o = 0; o < a.length; o++) {
    const s = a[o];
    if (typeof s != 'string' && !Array.isArray(s)) {
      for (const u in s)
        if (u !== 'default' && !(u in r)) {
          const d = Object.getOwnPropertyDescriptor(s, u);
          d &&
            Object.defineProperty(
              r,
              u,
              d.get ? d : { enumerable: !0, get: () => s[u] }
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
  for (const u of document.querySelectorAll('link[rel="modulepreload"]')) s(u);
  new MutationObserver((u) => {
    for (const d of u)
      if (d.type === 'childList')
        for (const f of d.addedNodes)
          f.tagName === 'LINK' && f.rel === 'modulepreload' && s(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(u) {
    const d = {};
    return (
      u.integrity && (d.integrity = u.integrity),
      u.referrerPolicy && (d.referrerPolicy = u.referrerPolicy),
      u.crossOrigin === 'use-credentials'
        ? (d.credentials = 'include')
        : u.crossOrigin === 'anonymous'
          ? (d.credentials = 'omit')
          : (d.credentials = 'same-origin'),
      d
    );
  }
  function s(u) {
    if (u.ep) return;
    u.ep = !0;
    const d = o(u);
    fetch(u.href, d);
  }
})();
function JE(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, 'default')
    ? r.default
    : r;
}
var ZE = { exports: {} },
  xd = {},
  ew = { exports: {} },
  Md = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ Md.exports;
(function (r, a) {
  (function () {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' &&
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ==
        'function' &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var o = '18.3.1',
      s = Symbol.for('react.element'),
      u = Symbol.for('react.portal'),
      d = Symbol.for('react.fragment'),
      f = Symbol.for('react.strict_mode'),
      v = Symbol.for('react.profiler'),
      m = Symbol.for('react.provider'),
      y = Symbol.for('react.context'),
      b = Symbol.for('react.forward_ref'),
      T = Symbol.for('react.suspense'),
      w = Symbol.for('react.suspense_list'),
      R = Symbol.for('react.memo'),
      D = Symbol.for('react.lazy'),
      _ = Symbol.for('react.offscreen'),
      L = Symbol.iterator,
      O = '@@iterator';
    function C(S) {
      if (S === null || typeof S != 'object') return null;
      var N = (L && S[L]) || S[O];
      return typeof N == 'function' ? N : null;
    }
    var M = { current: null },
      k = { transition: null },
      z = { current: null, isBatchingLegacy: !1, didScheduleLegacyUpdate: !1 },
      Y = { current: null },
      B = {},
      q = null;
    function Z(S) {
      q = S;
    }
    ((B.setExtraStackFrame = function (S) {
      q = S;
    }),
      (B.getCurrentStack = null),
      (B.getStackAddendum = function () {
        var S = '';
        q && (S += q);
        var N = B.getCurrentStack;
        return (N && (S += N() || ''), S);
      }));
    var W = !1,
      ie = !1,
      I = !1,
      X = !1,
      oe = !1,
      fe = {
        ReactCurrentDispatcher: M,
        ReactCurrentBatchConfig: k,
        ReactCurrentOwner: Y,
      };
    ((fe.ReactDebugCurrentFrame = B), (fe.ReactCurrentActQueue = z));
    function ue(S) {
      {
        for (
          var N = arguments.length, K = new Array(N > 1 ? N - 1 : 0), ne = 1;
          ne < N;
          ne++
        )
          K[ne - 1] = arguments[ne];
        me('warn', S, K);
      }
    }
    function de(S) {
      {
        for (
          var N = arguments.length, K = new Array(N > 1 ? N - 1 : 0), ne = 1;
          ne < N;
          ne++
        )
          K[ne - 1] = arguments[ne];
        me('error', S, K);
      }
    }
    function me(S, N, K) {
      {
        var ne = fe.ReactDebugCurrentFrame,
          Te = ne.getStackAddendum();
        Te !== '' && ((N += '%s'), (K = K.concat([Te])));
        var Ke = K.map(function (Pe) {
          return String(Pe);
        });
        (Ke.unshift('Warning: ' + N),
          Function.prototype.apply.call(console[S], console, Ke));
      }
    }
    var _e = {};
    function Ge(S, N) {
      {
        var K = S.constructor,
          ne = (K && (K.displayName || K.name)) || 'ReactClass',
          Te = ne + '.' + N;
        if (_e[Te]) return;
        (de(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          N,
          ne
        ),
          (_e[Te] = !0));
      }
    }
    var Nt = {
        isMounted: function (S) {
          return !1;
        },
        enqueueForceUpdate: function (S, N, K) {
          Ge(S, 'forceUpdate');
        },
        enqueueReplaceState: function (S, N, K, ne) {
          Ge(S, 'replaceState');
        },
        enqueueSetState: function (S, N, K, ne) {
          Ge(S, 'setState');
        },
      },
      we = Object.assign,
      Ce = {};
    Object.freeze(Ce);
    function Re(S, N, K) {
      ((this.props = S),
        (this.context = N),
        (this.refs = Ce),
        (this.updater = K || Nt));
    }
    ((Re.prototype.isReactComponent = {}),
      (Re.prototype.setState = function (S, N) {
        if (typeof S != 'object' && typeof S != 'function' && S != null)
          throw new Error(
            'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
          );
        this.updater.enqueueSetState(this, S, N, 'setState');
      }),
      (Re.prototype.forceUpdate = function (S) {
        this.updater.enqueueForceUpdate(this, S, 'forceUpdate');
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
        Q = function (S, N) {
          Object.defineProperty(Re.prototype, S, {
            get: function () {
              ue(
                '%s(...) is deprecated in plain JavaScript React classes. %s',
                N[0],
                N[1]
              );
            },
          });
        };
      for (var Ze in Ve) Ve.hasOwnProperty(Ze) && Q(Ze, Ve[Ze]);
    }
    function be() {}
    be.prototype = Re.prototype;
    function ot(S, N, K) {
      ((this.props = S),
        (this.context = N),
        (this.refs = Ce),
        (this.updater = K || Nt));
    }
    var Qe = (ot.prototype = new be());
    ((Qe.constructor = ot),
      we(Qe, Re.prototype),
      (Qe.isPureReactComponent = !0));
    function et() {
      var S = { current: null };
      return (Object.seal(S), S);
    }
    var ce = Array.isArray;
    function st(S) {
      return ce(S);
    }
    function pt(S) {
      {
        var N = typeof Symbol == 'function' && Symbol.toStringTag,
          K = (N && S[Symbol.toStringTag]) || S.constructor.name || 'Object';
        return K;
      }
    }
    function Be(S) {
      try {
        return (ht(S), !1);
      } catch {
        return !0;
      }
    }
    function ht(S) {
      return '' + S;
    }
    function We(S) {
      if (Be(S))
        return (
          de(
            'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
            pt(S)
          ),
          ht(S)
        );
    }
    function At(S, N, K) {
      var ne = S.displayName;
      if (ne) return ne;
      var Te = N.displayName || N.name || '';
      return Te !== '' ? K + '(' + Te + ')' : K;
    }
    function cn(S) {
      return S.displayName || 'Context';
    }
    function A(S) {
      if (S == null) return null;
      if (
        (typeof S.tag == 'number' &&
          de(
            'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.'
          ),
        typeof S == 'function')
      )
        return S.displayName || S.name || null;
      if (typeof S == 'string') return S;
      switch (S) {
        case d:
          return 'Fragment';
        case u:
          return 'Portal';
        case v:
          return 'Profiler';
        case f:
          return 'StrictMode';
        case T:
          return 'Suspense';
        case w:
          return 'SuspenseList';
      }
      if (typeof S == 'object')
        switch (S.$$typeof) {
          case y:
            var N = S;
            return cn(N) + '.Consumer';
          case m:
            var K = S;
            return cn(K._context) + '.Provider';
          case b:
            return At(S, S.render, 'ForwardRef');
          case R:
            var ne = S.displayName || null;
            return ne !== null ? ne : A(S.type) || 'Memo';
          case D: {
            var Te = S,
              Ke = Te._payload,
              Pe = Te._init;
            try {
              return A(Pe(Ke));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var V = Object.prototype.hasOwnProperty,
      ee = { key: !0, ref: !0, __self: !0, __source: !0 },
      ge,
      te,
      se;
    se = {};
    function Me(S) {
      if (V.call(S, 'ref')) {
        var N = Object.getOwnPropertyDescriptor(S, 'ref').get;
        if (N && N.isReactWarning) return !1;
      }
      return S.ref !== void 0;
    }
    function je(S) {
      if (V.call(S, 'key')) {
        var N = Object.getOwnPropertyDescriptor(S, 'key').get;
        if (N && N.isReactWarning) return !1;
      }
      return S.key !== void 0;
    }
    function tt(S, N) {
      var K = function () {
        ge ||
          ((ge = !0),
          de(
            '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
            N
          ));
      };
      ((K.isReactWarning = !0),
        Object.defineProperty(S, 'key', { get: K, configurable: !0 }));
    }
    function an(S, N) {
      var K = function () {
        te ||
          ((te = !0),
          de(
            '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
            N
          ));
      };
      ((K.isReactWarning = !0),
        Object.defineProperty(S, 'ref', { get: K, configurable: !0 }));
    }
    function lr(S) {
      if (
        typeof S.ref == 'string' &&
        Y.current &&
        S.__self &&
        Y.current.stateNode !== S.__self
      ) {
        var N = A(Y.current.type);
        se[N] ||
          (de(
            'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
            N,
            S.ref
          ),
          (se[N] = !0));
      }
    }
    var Ee = function (S, N, K, ne, Te, Ke, Pe) {
      var nt = { $$typeof: s, type: S, key: N, ref: K, props: Pe, _owner: Ke };
      return (
        (nt._store = {}),
        Object.defineProperty(nt._store, 'validated', {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1,
        }),
        Object.defineProperty(nt, '_self', {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ne,
        }),
        Object.defineProperty(nt, '_source', {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: Te,
        }),
        Object.freeze && (Object.freeze(nt.props), Object.freeze(nt)),
        nt
      );
    };
    function Ie(S, N, K) {
      var ne,
        Te = {},
        Ke = null,
        Pe = null,
        nt = null,
        gt = null;
      if (N != null) {
        (Me(N) && ((Pe = N.ref), lr(N)),
          je(N) && (We(N.key), (Ke = '' + N.key)),
          (nt = N.__self === void 0 ? null : N.__self),
          (gt = N.__source === void 0 ? null : N.__source));
        for (ne in N)
          V.call(N, ne) && !ee.hasOwnProperty(ne) && (Te[ne] = N[ne]);
      }
      var Pt = arguments.length - 2;
      if (Pt === 1) Te.children = K;
      else if (Pt > 1) {
        for (var Ht = Array(Pt), jt = 0; jt < Pt; jt++)
          Ht[jt] = arguments[jt + 2];
        (Object.freeze && Object.freeze(Ht), (Te.children = Ht));
      }
      if (S && S.defaultProps) {
        var Qt = S.defaultProps;
        for (ne in Qt) Te[ne] === void 0 && (Te[ne] = Qt[ne]);
      }
      if (Ke || Pe) {
        var sn =
          typeof S == 'function' ? S.displayName || S.name || 'Unknown' : S;
        (Ke && tt(Te, sn), Pe && an(Te, sn));
      }
      return Ee(S, Ke, Pe, nt, gt, Y.current, Te);
    }
    function lt(S, N) {
      var K = Ee(S.type, N, S.ref, S._self, S._source, S._owner, S.props);
      return K;
    }
    function xt(S, N, K) {
      if (S == null)
        throw new Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' +
            S +
            '.'
        );
      var ne,
        Te = we({}, S.props),
        Ke = S.key,
        Pe = S.ref,
        nt = S._self,
        gt = S._source,
        Pt = S._owner;
      if (N != null) {
        (Me(N) && ((Pe = N.ref), (Pt = Y.current)),
          je(N) && (We(N.key), (Ke = '' + N.key)));
        var Ht;
        S.type && S.type.defaultProps && (Ht = S.type.defaultProps);
        for (ne in N)
          V.call(N, ne) &&
            !ee.hasOwnProperty(ne) &&
            (N[ne] === void 0 && Ht !== void 0
              ? (Te[ne] = Ht[ne])
              : (Te[ne] = N[ne]));
      }
      var jt = arguments.length - 2;
      if (jt === 1) Te.children = K;
      else if (jt > 1) {
        for (var Qt = Array(jt), sn = 0; sn < jt; sn++)
          Qt[sn] = arguments[sn + 2];
        Te.children = Qt;
      }
      return Ee(S.type, Ke, Pe, nt, gt, Pt, Te);
    }
    function Mt(S) {
      return typeof S == 'object' && S !== null && S.$$typeof === s;
    }
    var on = '.',
      en = ':';
    function Nn(S) {
      var N = /[=:]/g,
        K = { '=': '=0', ':': '=2' },
        ne = S.replace(N, function (Te) {
          return K[Te];
        });
      return '$' + ne;
    }
    var Bt = !1,
      yr = /\/+/g;
    function qt(S) {
      return S.replace(yr, '$&/');
    }
    function Xt(S, N) {
      return typeof S == 'object' && S !== null && S.key != null
        ? (We(S.key), Nn('' + S.key))
        : N.toString(36);
    }
    function oa(S, N, K, ne, Te) {
      var Ke = typeof S;
      (Ke === 'undefined' || Ke === 'boolean') && (S = null);
      var Pe = !1;
      if (S === null) Pe = !0;
      else
        switch (Ke) {
          case 'string':
          case 'number':
            Pe = !0;
            break;
          case 'object':
            switch (S.$$typeof) {
              case s:
              case u:
                Pe = !0;
            }
        }
      if (Pe) {
        var nt = S,
          gt = Te(nt),
          Pt = ne === '' ? on + Xt(nt, 0) : ne;
        if (st(gt)) {
          var Ht = '';
          (Pt != null && (Ht = qt(Pt) + '/'),
            oa(gt, N, Ht, '', function (ep) {
              return ep;
            }));
        } else
          gt != null &&
            (Mt(gt) &&
              (gt.key && (!nt || nt.key !== gt.key) && We(gt.key),
              (gt = lt(
                gt,
                K +
                  (gt.key && (!nt || nt.key !== gt.key)
                    ? qt('' + gt.key) + '/'
                    : '') +
                  Pt
              ))),
            N.push(gt));
        return 1;
      }
      var jt,
        Qt,
        sn = 0,
        Dt = ne === '' ? on : ne + en;
      if (st(S))
        for (var mi = 0; mi < S.length; mi++)
          ((jt = S[mi]), (Qt = Dt + Xt(jt, mi)), (sn += oa(jt, N, K, Qt, Te)));
      else {
        var Bo = C(S);
        if (typeof Bo == 'function') {
          var al = S;
          Bo === al.entries &&
            (Bt ||
              ue(
                'Using Maps as children is not supported. Use an array of keyed ReactElements instead.'
              ),
            (Bt = !0));
          for (var Zd = Bo.call(al), La, il = 0; !(La = Zd.next()).done; )
            ((jt = La.value),
              (Qt = Dt + Xt(jt, il++)),
              (sn += oa(jt, N, K, Qt, Te)));
        } else if (Ke === 'object') {
          var ol = String(S);
          throw new Error(
            'Objects are not valid as a React child (found: ' +
              (ol === '[object Object]'
                ? 'object with keys {' + Object.keys(S).join(', ') + '}'
                : ol) +
              '). If you meant to render a collection of children, use an array instead.'
          );
        }
      }
      return sn;
    }
    function Vr(S, N, K) {
      if (S == null) return S;
      var ne = [],
        Te = 0;
      return (
        oa(S, ne, '', '', function (Ke) {
          return N.call(K, Ke, Te++);
        }),
        ne
      );
    }
    function Wi(S) {
      var N = 0;
      return (
        Vr(S, function () {
          N++;
        }),
        N
      );
    }
    function Po(S, N, K) {
      Vr(
        S,
        function () {
          N.apply(this, arguments);
        },
        K
      );
    }
    function $s(S) {
      return (
        Vr(S, function (N) {
          return N;
        }) || []
      );
    }
    function qi(S) {
      if (!Mt(S))
        throw new Error(
          'React.Children.only expected to receive a single React element child.'
        );
      return S;
    }
    function Xi(S) {
      var N = {
        $$typeof: y,
        _currentValue: S,
        _currentValue2: S,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      };
      N.Provider = { $$typeof: m, _context: N };
      var K = !1,
        ne = !1,
        Te = !1;
      {
        var Ke = { $$typeof: y, _context: N };
        (Object.defineProperties(Ke, {
          Provider: {
            get: function () {
              return (
                ne ||
                  ((ne = !0),
                  de(
                    'Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?'
                  )),
                N.Provider
              );
            },
            set: function (Pe) {
              N.Provider = Pe;
            },
          },
          _currentValue: {
            get: function () {
              return N._currentValue;
            },
            set: function (Pe) {
              N._currentValue = Pe;
            },
          },
          _currentValue2: {
            get: function () {
              return N._currentValue2;
            },
            set: function (Pe) {
              N._currentValue2 = Pe;
            },
          },
          _threadCount: {
            get: function () {
              return N._threadCount;
            },
            set: function (Pe) {
              N._threadCount = Pe;
            },
          },
          Consumer: {
            get: function () {
              return (
                K ||
                  ((K = !0),
                  de(
                    'Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?'
                  )),
                N.Consumer
              );
            },
          },
          displayName: {
            get: function () {
              return N.displayName;
            },
            set: function (Pe) {
              Te ||
                (ue(
                  "Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",
                  Pe
                ),
                (Te = !0));
            },
          },
        }),
          (N.Consumer = Ke));
      }
      return ((N._currentRenderer = null), (N._currentRenderer2 = null), N);
    }
    var Da = -1,
      si = 0,
      Oa = 1,
      Br = 2;
    function Hr(S) {
      if (S._status === Da) {
        var N = S._result,
          K = N();
        if (
          (K.then(
            function (Ke) {
              if (S._status === si || S._status === Da) {
                var Pe = S;
                ((Pe._status = Oa), (Pe._result = Ke));
              }
            },
            function (Ke) {
              if (S._status === si || S._status === Da) {
                var Pe = S;
                ((Pe._status = Br), (Pe._result = Ke));
              }
            }
          ),
          S._status === Da)
        ) {
          var ne = S;
          ((ne._status = si), (ne._result = K));
        }
      }
      if (S._status === Oa) {
        var Te = S._result;
        return (
          Te === void 0 &&
            de(
              `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
              Te
            ),
          'default' in Te ||
            de(
              `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
              Te
            ),
          Te.default
        );
      } else throw S._result;
    }
    function sa(S) {
      var N = { _status: Da, _result: S },
        K = { $$typeof: D, _payload: N, _init: Hr };
      {
        var ne, Te;
        Object.defineProperties(K, {
          defaultProps: {
            configurable: !0,
            get: function () {
              return ne;
            },
            set: function (Ke) {
              (de(
                'React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.'
              ),
                (ne = Ke),
                Object.defineProperty(K, 'defaultProps', { enumerable: !0 }));
            },
          },
          propTypes: {
            configurable: !0,
            get: function () {
              return Te;
            },
            set: function (Ke) {
              (de(
                'React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.'
              ),
                (Te = Ke),
                Object.defineProperty(K, 'propTypes', { enumerable: !0 }));
            },
          },
        });
      }
      return K;
    }
    function Qi(S) {
      (S != null && S.$$typeof === R
        ? de(
            'forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).'
          )
        : typeof S != 'function'
          ? de(
              'forwardRef requires a render function but was given %s.',
              S === null ? 'null' : typeof S
            )
          : S.length !== 0 &&
            S.length !== 2 &&
            de(
              'forwardRef render functions accept exactly two parameters: props and ref. %s',
              S.length === 1
                ? 'Did you forget to use the ref parameter?'
                : 'Any additional parameter will be undefined.'
            ),
        S != null &&
          (S.defaultProps != null || S.propTypes != null) &&
          de(
            'forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?'
          ));
      var N = { $$typeof: b, render: S };
      {
        var K;
        Object.defineProperty(N, 'displayName', {
          enumerable: !1,
          configurable: !0,
          get: function () {
            return K;
          },
          set: function (ne) {
            ((K = ne), !S.name && !S.displayName && (S.displayName = ne));
          },
        });
      }
      return N;
    }
    var li;
    li = Symbol.for('react.module.reference');
    function P(S) {
      return !!(
        typeof S == 'string' ||
        typeof S == 'function' ||
        S === d ||
        S === v ||
        oe ||
        S === f ||
        S === T ||
        S === w ||
        X ||
        S === _ ||
        W ||
        ie ||
        I ||
        (typeof S == 'object' &&
          S !== null &&
          (S.$$typeof === D ||
            S.$$typeof === R ||
            S.$$typeof === m ||
            S.$$typeof === y ||
            S.$$typeof === b ||
            S.$$typeof === li ||
            S.getModuleId !== void 0))
      );
    }
    function pe(S, N) {
      P(S) ||
        de(
          'memo: The first argument must be a component. Instead received: %s',
          S === null ? 'null' : typeof S
        );
      var K = { $$typeof: R, type: S, compare: N === void 0 ? null : N };
      {
        var ne;
        Object.defineProperty(K, 'displayName', {
          enumerable: !1,
          configurable: !0,
          get: function () {
            return ne;
          },
          set: function (Te) {
            ((ne = Te), !S.name && !S.displayName && (S.displayName = Te));
          },
        });
      }
      return K;
    }
    function Se() {
      var S = M.current;
      return (
        S === null &&
          de(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`),
        S
      );
    }
    function Ye(S) {
      var N = Se();
      if (S._context !== void 0) {
        var K = S._context;
        K.Consumer === S
          ? de(
              'Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?'
            )
          : K.Provider === S &&
            de(
              'Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?'
            );
      }
      return N.useContext(S);
    }
    function mt(S) {
      var N = Se();
      return N.useState(S);
    }
    function wt(S, N, K) {
      var ne = Se();
      return ne.useReducer(S, N, K);
    }
    function qe(S) {
      var N = Se();
      return N.useRef(S);
    }
    function ft(S, N) {
      var K = Se();
      return K.useEffect(S, N);
    }
    function gn(S, N) {
      var K = Se();
      return K.useInsertionEffect(S, N);
    }
    function Gt(S, N) {
      var K = Se();
      return K.useLayoutEffect(S, N);
    }
    function Jt(S, N) {
      var K = Se();
      return K.useCallback(S, N);
    }
    function $n(S, N) {
      var K = Se();
      return K.useMemo(S, N);
    }
    function la(S, N, K) {
      var ne = Se();
      return ne.useImperativeHandle(S, N, K);
    }
    function Ar(S, N) {
      {
        var K = Se();
        return K.useDebugValue(S, N);
      }
    }
    function Rn() {
      var S = Se();
      return S.useTransition();
    }
    function gr(S) {
      var N = Se();
      return N.useDeferredValue(S);
    }
    function dt() {
      var S = Se();
      return S.useId();
    }
    function Aa(S, N, K) {
      var ne = Se();
      return ne.useSyncExternalStore(S, N, K);
    }
    var ui = 0,
      Ys,
      Gs,
      Ws,
      qs,
      Xs,
      Qs,
      Ks;
    function tc() {}
    tc.__reactDisabledLog = !0;
    function Qd() {
      {
        if (ui === 0) {
          ((Ys = console.log),
            (Gs = console.info),
            (Ws = console.warn),
            (qs = console.error),
            (Xs = console.group),
            (Qs = console.groupCollapsed),
            (Ks = console.groupEnd));
          var S = { configurable: !0, enumerable: !0, value: tc, writable: !0 };
          Object.defineProperties(console, {
            info: S,
            log: S,
            warn: S,
            error: S,
            group: S,
            groupCollapsed: S,
            groupEnd: S,
          });
        }
        ui++;
      }
    }
    function Js() {
      {
        if ((ui--, ui === 0)) {
          var S = { configurable: !0, enumerable: !0, writable: !0 };
          Object.defineProperties(console, {
            log: we({}, S, { value: Ys }),
            info: we({}, S, { value: Gs }),
            warn: we({}, S, { value: Ws }),
            error: we({}, S, { value: qs }),
            group: we({}, S, { value: Xs }),
            groupCollapsed: we({}, S, { value: Qs }),
            groupEnd: we({}, S, { value: Ks }),
          });
        }
        ui < 0 &&
          de(
            'disabledDepth fell below zero. This is a bug in React. Please file an issue.'
          );
      }
    }
    var Ki = fe.ReactCurrentDispatcher,
      Mr;
    function ci(S, N, K) {
      {
        if (Mr === void 0)
          try {
            throw Error();
          } catch (Te) {
            var ne = Te.stack.trim().match(/\n( *(at )?)/);
            Mr = (ne && ne[1]) || '';
          }
        return (
          `
` +
          Mr +
          S
        );
      }
    }
    var fi = !1,
      zo;
    {
      var Zs = typeof WeakMap == 'function' ? WeakMap : Map;
      zo = new Zs();
    }
    function nc(S, N) {
      if (!S || fi) return '';
      {
        var K = zo.get(S);
        if (K !== void 0) return K;
      }
      var ne;
      fi = !0;
      var Te = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ke;
      ((Ke = Ki.current), (Ki.current = null), Qd());
      try {
        if (N) {
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
            } catch (Dt) {
              ne = Dt;
            }
            Reflect.construct(S, [], Pe);
          } else {
            try {
              Pe.call();
            } catch (Dt) {
              ne = Dt;
            }
            S.call(Pe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Dt) {
            ne = Dt;
          }
          S();
        }
      } catch (Dt) {
        if (Dt && ne && typeof Dt.stack == 'string') {
          for (
            var nt = Dt.stack.split(`
`),
              gt = ne.stack.split(`
`),
              Pt = nt.length - 1,
              Ht = gt.length - 1;
            Pt >= 1 && Ht >= 0 && nt[Pt] !== gt[Ht];

          )
            Ht--;
          for (; Pt >= 1 && Ht >= 0; Pt--, Ht--)
            if (nt[Pt] !== gt[Ht]) {
              if (Pt !== 1 || Ht !== 1)
                do
                  if ((Pt--, Ht--, Ht < 0 || nt[Pt] !== gt[Ht])) {
                    var jt =
                      `
` + nt[Pt].replace(' at new ', ' at ');
                    return (
                      S.displayName &&
                        jt.includes('<anonymous>') &&
                        (jt = jt.replace('<anonymous>', S.displayName)),
                      typeof S == 'function' && zo.set(S, jt),
                      jt
                    );
                  }
                while (Pt >= 1 && Ht >= 0);
              break;
            }
        }
      } finally {
        ((fi = !1), (Ki.current = Ke), Js(), (Error.prepareStackTrace = Te));
      }
      var Qt = S ? S.displayName || S.name : '',
        sn = Qt ? ci(Qt) : '';
      return (typeof S == 'function' && zo.set(S, sn), sn);
    }
    function el(S, N, K) {
      return nc(S, !1);
    }
    function Kd(S) {
      var N = S.prototype;
      return !!(N && N.isReactComponent);
    }
    function di(S, N, K) {
      if (S == null) return '';
      if (typeof S == 'function') return nc(S, Kd(S));
      if (typeof S == 'string') return ci(S);
      switch (S) {
        case T:
          return ci('Suspense');
        case w:
          return ci('SuspenseList');
      }
      if (typeof S == 'object')
        switch (S.$$typeof) {
          case b:
            return el(S.render);
          case R:
            return di(S.type, N, K);
          case D: {
            var ne = S,
              Te = ne._payload,
              Ke = ne._init;
            try {
              return di(Ke(Te), N, K);
            } catch {}
          }
        }
      return '';
    }
    var rc = {},
      tl = fe.ReactDebugCurrentFrame;
    function Fo(S) {
      if (S) {
        var N = S._owner,
          K = di(S.type, S._source, N ? N.type : null);
        tl.setExtraStackFrame(K);
      } else tl.setExtraStackFrame(null);
    }
    function ac(S, N, K, ne, Te) {
      {
        var Ke = Function.call.bind(V);
        for (var Pe in S)
          if (Ke(S, Pe)) {
            var nt = void 0;
            try {
              if (typeof S[Pe] != 'function') {
                var gt = Error(
                  (ne || 'React class') +
                    ': ' +
                    K +
                    ' type `' +
                    Pe +
                    '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                    typeof S[Pe] +
                    '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
                );
                throw ((gt.name = 'Invariant Violation'), gt);
              }
              nt = S[Pe](
                N,
                Pe,
                ne,
                K,
                null,
                'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
              );
            } catch (Pt) {
              nt = Pt;
            }
            (nt &&
              !(nt instanceof Error) &&
              (Fo(Te),
              de(
                '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                ne || 'React class',
                K,
                Pe,
                typeof nt
              ),
              Fo(null)),
              nt instanceof Error &&
                !(nt.message in rc) &&
                ((rc[nt.message] = !0),
                Fo(Te),
                de('Failed %s type: %s', K, nt.message),
                Fo(null)));
          }
      }
    }
    function Ct(S) {
      if (S) {
        var N = S._owner,
          K = di(S.type, S._source, N ? N.type : null);
        Z(K);
      } else Z(null);
    }
    var nl;
    nl = !1;
    function rl() {
      if (Y.current) {
        var S = A(Y.current.type);
        if (S)
          return (
            `

Check the render method of \`` +
            S +
            '`.'
          );
      }
      return '';
    }
    function ut(S) {
      if (S !== void 0) {
        var N = S.fileName.replace(/^.*[\\\/]/, ''),
          K = S.lineNumber;
        return (
          `

Check your code at ` +
          N +
          ':' +
          K +
          '.'
        );
      }
      return '';
    }
    function ic(S) {
      return S != null ? ut(S.__source) : '';
    }
    var Yn = {};
    function Ji(S) {
      var N = rl();
      if (!N) {
        var K = typeof S == 'string' ? S : S.displayName || S.name;
        K &&
          (N =
            `

Check the top-level render call using <` +
            K +
            '>.');
      }
      return N;
    }
    function pi(S, N) {
      if (!(!S._store || S._store.validated || S.key != null)) {
        S._store.validated = !0;
        var K = Ji(N);
        if (!Yn[K]) {
          Yn[K] = !0;
          var ne = '';
          (S &&
            S._owner &&
            S._owner !== Y.current &&
            (ne = ' It was passed a child from ' + A(S._owner.type) + '.'),
            Ct(S),
            de(
              'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
              K,
              ne
            ),
            Ct(null));
        }
      }
    }
    function oc(S, N) {
      if (typeof S == 'object') {
        if (st(S))
          for (var K = 0; K < S.length; K++) {
            var ne = S[K];
            Mt(ne) && pi(ne, N);
          }
        else if (Mt(S)) S._store && (S._store.validated = !0);
        else if (S) {
          var Te = C(S);
          if (typeof Te == 'function' && Te !== S.entries)
            for (var Ke = Te.call(S), Pe; !(Pe = Ke.next()).done; )
              Mt(Pe.value) && pi(Pe.value, N);
        }
      }
    }
    function Dn(S) {
      {
        var N = S.type;
        if (N == null || typeof N == 'string') return;
        var K;
        if (typeof N == 'function') K = N.propTypes;
        else if (typeof N == 'object' && (N.$$typeof === b || N.$$typeof === R))
          K = N.propTypes;
        else return;
        if (K) {
          var ne = A(N);
          ac(K, S.props, 'prop', ne, S);
        } else if (N.PropTypes !== void 0 && !nl) {
          nl = !0;
          var Te = A(N);
          de(
            'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
            Te || 'Unknown'
          );
        }
        typeof N.getDefaultProps == 'function' &&
          !N.getDefaultProps.isReactClassApproved &&
          de(
            'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.'
          );
      }
    }
    function tn(S) {
      {
        for (var N = Object.keys(S.props), K = 0; K < N.length; K++) {
          var ne = N[K];
          if (ne !== 'children' && ne !== 'key') {
            (Ct(S),
              de(
                'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
                ne
              ),
              Ct(null));
            break;
          }
        }
        S.ref !== null &&
          (Ct(S),
          de('Invalid attribute `ref` supplied to `React.Fragment`.'),
          Ct(null));
      }
    }
    function sc(S, N, K) {
      var ne = P(S);
      if (!ne) {
        var Te = '';
        (S === void 0 ||
          (typeof S == 'object' &&
            S !== null &&
            Object.keys(S).length === 0)) &&
          (Te +=
            " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
        var Ke = ic(N);
        Ke ? (Te += Ke) : (Te += rl());
        var Pe;
        (S === null
          ? (Pe = 'null')
          : st(S)
            ? (Pe = 'array')
            : S !== void 0 && S.$$typeof === s
              ? ((Pe = '<' + (A(S.type) || 'Unknown') + ' />'),
                (Te =
                  ' Did you accidentally export a JSX literal instead of a component?'))
              : (Pe = typeof S),
          de(
            'React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
            Pe,
            Te
          ));
      }
      var nt = Ie.apply(this, arguments);
      if (nt == null) return nt;
      if (ne)
        for (var gt = 2; gt < arguments.length; gt++) oc(arguments[gt], S);
      return (S === d ? tn(nt) : Dn(nt), nt);
    }
    var br = !1;
    function ur(S) {
      var N = sc.bind(null, S);
      return (
        (N.type = S),
        br ||
          ((br = !0),
          ue(
            'React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.'
          )),
        Object.defineProperty(N, 'type', {
          enumerable: !1,
          get: function () {
            return (
              ue(
                'Factory.type is deprecated. Access the class directly before passing it to createFactory.'
              ),
              Object.defineProperty(this, 'type', { value: S }),
              S
            );
          },
        }),
        N
      );
    }
    function ua(S, N, K) {
      for (
        var ne = xt.apply(this, arguments), Te = 2;
        Te < arguments.length;
        Te++
      )
        oc(arguments[Te], ne.type);
      return (Dn(ne), ne);
    }
    function Jd(S, N) {
      var K = k.transition;
      k.transition = {};
      var ne = k.transition;
      k.transition._updatedFibers = new Set();
      try {
        S();
      } finally {
        if (((k.transition = K), K === null && ne._updatedFibers)) {
          var Te = ne._updatedFibers.size;
          (Te > 10 &&
            ue(
              'Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.'
            ),
            ne._updatedFibers.clear());
        }
      }
    }
    var Uo = !1,
      Zi = null;
    function lc(S) {
      if (Zi === null)
        try {
          var N = ('require' + Math.random()).slice(0, 7),
            K = r && r[N];
          Zi = K.call(r, 'timers').setImmediate;
        } catch {
          Zi = function (Te) {
            Uo === !1 &&
              ((Uo = !0),
              typeof MessageChannel > 'u' &&
                de(
                  'This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.'
                ));
            var Ke = new MessageChannel();
            ((Ke.port1.onmessage = Te), Ke.port2.postMessage(void 0));
          };
        }
      return Zi(S);
    }
    var vi = 0,
      uc = !1;
    function cc(S) {
      {
        var N = vi;
        (vi++, z.current === null && (z.current = []));
        var K = z.isBatchingLegacy,
          ne;
        try {
          if (
            ((z.isBatchingLegacy = !0),
            (ne = S()),
            !K && z.didScheduleLegacyUpdate)
          ) {
            var Te = z.current;
            Te !== null && ((z.didScheduleLegacyUpdate = !1), Vo(Te));
          }
        } catch (Qt) {
          throw (Ma(N), Qt);
        } finally {
          z.isBatchingLegacy = K;
        }
        if (
          ne !== null &&
          typeof ne == 'object' &&
          typeof ne.then == 'function'
        ) {
          var Ke = ne,
            Pe = !1,
            nt = {
              then: function (Qt, sn) {
                ((Pe = !0),
                  Ke.then(
                    function (Dt) {
                      (Ma(N), vi === 0 ? Io(Dt, Qt, sn) : Qt(Dt));
                    },
                    function (Dt) {
                      (Ma(N), sn(Dt));
                    }
                  ));
              },
            };
          return (
            !uc &&
              typeof Promise < 'u' &&
              Promise.resolve()
                .then(function () {})
                .then(function () {
                  Pe ||
                    ((uc = !0),
                    de(
                      'You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);'
                    ));
                }),
            nt
          );
        } else {
          var gt = ne;
          if ((Ma(N), vi === 0)) {
            var Pt = z.current;
            Pt !== null && (Vo(Pt), (z.current = null));
            var Ht = {
              then: function (Qt, sn) {
                z.current === null
                  ? ((z.current = []), Io(gt, Qt, sn))
                  : Qt(gt);
              },
            };
            return Ht;
          } else {
            var jt = {
              then: function (Qt, sn) {
                Qt(gt);
              },
            };
            return jt;
          }
        }
      }
    }
    function Ma(S) {
      (S !== vi - 1 &&
        de(
          'You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. '
        ),
        (vi = S));
    }
    function Io(S, N, K) {
      {
        var ne = z.current;
        if (ne !== null)
          try {
            (Vo(ne),
              lc(function () {
                ne.length === 0 ? ((z.current = null), N(S)) : Io(S, N, K);
              }));
          } catch (Te) {
            K(Te);
          }
        else N(S);
      }
    }
    var hi = !1;
    function Vo(S) {
      if (!hi) {
        hi = !0;
        var N = 0;
        try {
          for (; N < S.length; N++) {
            var K = S[N];
            do K = K(!0);
            while (K !== null);
          }
          S.length = 0;
        } catch (ne) {
          throw ((S = S.slice(N + 1)), ne);
        } finally {
          hi = !1;
        }
      }
    }
    var fc = sc,
      dc = ua,
      pc = ur,
      vc = { map: Vr, forEach: Po, count: Wi, toArray: $s, only: qi };
    ((a.Children = vc),
      (a.Component = Re),
      (a.Fragment = d),
      (a.Profiler = v),
      (a.PureComponent = ot),
      (a.StrictMode = f),
      (a.Suspense = T),
      (a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fe),
      (a.act = cc),
      (a.cloneElement = dc),
      (a.createContext = Xi),
      (a.createElement = fc),
      (a.createFactory = pc),
      (a.createRef = et),
      (a.forwardRef = Qi),
      (a.isValidElement = Mt),
      (a.lazy = sa),
      (a.memo = pe),
      (a.startTransition = Jd),
      (a.unstable_act = cc),
      (a.useCallback = Jt),
      (a.useContext = Ye),
      (a.useDebugValue = Ar),
      (a.useDeferredValue = gr),
      (a.useEffect = ft),
      (a.useId = dt),
      (a.useImperativeHandle = la),
      (a.useInsertionEffect = gn),
      (a.useLayoutEffect = Gt),
      (a.useMemo = $n),
      (a.useReducer = wt),
      (a.useRef = qe),
      (a.useState = mt),
      (a.useSyncExternalStore = Aa),
      (a.useTransition = Rn),
      (a.version = o),
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' &&
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ==
          'function' &&
        __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error()));
  })();
})(Md, Md.exports);
var _L = Md.exports;
ew.exports = _L;
var $ = ew.exports;
const Ue = JE($),
  RL = xL({ __proto__: null, default: Ue }, [$]);
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function () {
  var r = $,
    a = Symbol.for('react.element'),
    o = Symbol.for('react.portal'),
    s = Symbol.for('react.fragment'),
    u = Symbol.for('react.strict_mode'),
    d = Symbol.for('react.profiler'),
    f = Symbol.for('react.provider'),
    v = Symbol.for('react.context'),
    m = Symbol.for('react.forward_ref'),
    y = Symbol.for('react.suspense'),
    b = Symbol.for('react.suspense_list'),
    T = Symbol.for('react.memo'),
    w = Symbol.for('react.lazy'),
    R = Symbol.for('react.offscreen'),
    D = Symbol.iterator,
    _ = '@@iterator';
  function L(P) {
    if (P === null || typeof P != 'object') return null;
    var pe = (D && P[D]) || P[_];
    return typeof pe == 'function' ? pe : null;
  }
  var O = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function C(P) {
    {
      for (
        var pe = arguments.length, Se = new Array(pe > 1 ? pe - 1 : 0), Ye = 1;
        Ye < pe;
        Ye++
      )
        Se[Ye - 1] = arguments[Ye];
      M('error', P, Se);
    }
  }
  function M(P, pe, Se) {
    {
      var Ye = O.ReactDebugCurrentFrame,
        mt = Ye.getStackAddendum();
      mt !== '' && ((pe += '%s'), (Se = Se.concat([mt])));
      var wt = Se.map(function (qe) {
        return String(qe);
      });
      (wt.unshift('Warning: ' + pe),
        Function.prototype.apply.call(console[P], console, wt));
    }
  }
  var k = !1,
    z = !1,
    Y = !1,
    B = !1,
    q = !1,
    Z;
  Z = Symbol.for('react.module.reference');
  function W(P) {
    return !!(
      typeof P == 'string' ||
      typeof P == 'function' ||
      P === s ||
      P === d ||
      q ||
      P === u ||
      P === y ||
      P === b ||
      B ||
      P === R ||
      k ||
      z ||
      Y ||
      (typeof P == 'object' &&
        P !== null &&
        (P.$$typeof === w ||
          P.$$typeof === T ||
          P.$$typeof === f ||
          P.$$typeof === v ||
          P.$$typeof === m ||
          P.$$typeof === Z ||
          P.getModuleId !== void 0))
    );
  }
  function ie(P, pe, Se) {
    var Ye = P.displayName;
    if (Ye) return Ye;
    var mt = pe.displayName || pe.name || '';
    return mt !== '' ? Se + '(' + mt + ')' : Se;
  }
  function I(P) {
    return P.displayName || 'Context';
  }
  function X(P) {
    if (P == null) return null;
    if (
      (typeof P.tag == 'number' &&
        C(
          'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.'
        ),
      typeof P == 'function')
    )
      return P.displayName || P.name || null;
    if (typeof P == 'string') return P;
    switch (P) {
      case s:
        return 'Fragment';
      case o:
        return 'Portal';
      case d:
        return 'Profiler';
      case u:
        return 'StrictMode';
      case y:
        return 'Suspense';
      case b:
        return 'SuspenseList';
    }
    if (typeof P == 'object')
      switch (P.$$typeof) {
        case v:
          var pe = P;
          return I(pe) + '.Consumer';
        case f:
          var Se = P;
          return I(Se._context) + '.Provider';
        case m:
          return ie(P, P.render, 'ForwardRef');
        case T:
          var Ye = P.displayName || null;
          return Ye !== null ? Ye : X(P.type) || 'Memo';
        case w: {
          var mt = P,
            wt = mt._payload,
            qe = mt._init;
          try {
            return X(qe(wt));
          } catch {
            return null;
          }
        }
      }
    return null;
  }
  var oe = Object.assign,
    fe = 0,
    ue,
    de,
    me,
    _e,
    Ge,
    Nt,
    we;
  function Ce() {}
  Ce.__reactDisabledLog = !0;
  function Re() {
    {
      if (fe === 0) {
        ((ue = console.log),
          (de = console.info),
          (me = console.warn),
          (_e = console.error),
          (Ge = console.group),
          (Nt = console.groupCollapsed),
          (we = console.groupEnd));
        var P = { configurable: !0, enumerable: !0, value: Ce, writable: !0 };
        Object.defineProperties(console, {
          info: P,
          log: P,
          warn: P,
          error: P,
          group: P,
          groupCollapsed: P,
          groupEnd: P,
        });
      }
      fe++;
    }
  }
  function Ve() {
    {
      if ((fe--, fe === 0)) {
        var P = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: oe({}, P, { value: ue }),
          info: oe({}, P, { value: de }),
          warn: oe({}, P, { value: me }),
          error: oe({}, P, { value: _e }),
          group: oe({}, P, { value: Ge }),
          groupCollapsed: oe({}, P, { value: Nt }),
          groupEnd: oe({}, P, { value: we }),
        });
      }
      fe < 0 &&
        C(
          'disabledDepth fell below zero. This is a bug in React. Please file an issue.'
        );
    }
  }
  var Q = O.ReactCurrentDispatcher,
    Ze;
  function be(P, pe, Se) {
    {
      if (Ze === void 0)
        try {
          throw Error();
        } catch (mt) {
          var Ye = mt.stack.trim().match(/\n( *(at )?)/);
          Ze = (Ye && Ye[1]) || '';
        }
      return (
        `
` +
        Ze +
        P
      );
    }
  }
  var ot = !1,
    Qe;
  {
    var et = typeof WeakMap == 'function' ? WeakMap : Map;
    Qe = new et();
  }
  function ce(P, pe) {
    if (!P || ot) return '';
    {
      var Se = Qe.get(P);
      if (Se !== void 0) return Se;
    }
    var Ye;
    ot = !0;
    var mt = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    var wt;
    ((wt = Q.current), (Q.current = null), Re());
    try {
      if (pe) {
        var qe = function () {
          throw Error();
        };
        if (
          (Object.defineProperty(qe.prototype, 'props', {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == 'object' && Reflect.construct)
        ) {
          try {
            Reflect.construct(qe, []);
          } catch (Rn) {
            Ye = Rn;
          }
          Reflect.construct(P, [], qe);
        } else {
          try {
            qe.call();
          } catch (Rn) {
            Ye = Rn;
          }
          P.call(qe.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (Rn) {
          Ye = Rn;
        }
        P();
      }
    } catch (Rn) {
      if (Rn && Ye && typeof Rn.stack == 'string') {
        for (
          var ft = Rn.stack.split(`
`),
            gn = Ye.stack.split(`
`),
            Gt = ft.length - 1,
            Jt = gn.length - 1;
          Gt >= 1 && Jt >= 0 && ft[Gt] !== gn[Jt];

        )
          Jt--;
        for (; Gt >= 1 && Jt >= 0; Gt--, Jt--)
          if (ft[Gt] !== gn[Jt]) {
            if (Gt !== 1 || Jt !== 1)
              do
                if ((Gt--, Jt--, Jt < 0 || ft[Gt] !== gn[Jt])) {
                  var $n =
                    `
` + ft[Gt].replace(' at new ', ' at ');
                  return (
                    P.displayName &&
                      $n.includes('<anonymous>') &&
                      ($n = $n.replace('<anonymous>', P.displayName)),
                    typeof P == 'function' && Qe.set(P, $n),
                    $n
                  );
                }
              while (Gt >= 1 && Jt >= 0);
            break;
          }
      }
    } finally {
      ((ot = !1), (Q.current = wt), Ve(), (Error.prepareStackTrace = mt));
    }
    var la = P ? P.displayName || P.name : '',
      Ar = la ? be(la) : '';
    return (typeof P == 'function' && Qe.set(P, Ar), Ar);
  }
  function st(P, pe, Se) {
    return ce(P, !1);
  }
  function pt(P) {
    var pe = P.prototype;
    return !!(pe && pe.isReactComponent);
  }
  function Be(P, pe, Se) {
    if (P == null) return '';
    if (typeof P == 'function') return ce(P, pt(P));
    if (typeof P == 'string') return be(P);
    switch (P) {
      case y:
        return be('Suspense');
      case b:
        return be('SuspenseList');
    }
    if (typeof P == 'object')
      switch (P.$$typeof) {
        case m:
          return st(P.render);
        case T:
          return Be(P.type, pe, Se);
        case w: {
          var Ye = P,
            mt = Ye._payload,
            wt = Ye._init;
          try {
            return Be(wt(mt), pe, Se);
          } catch {}
        }
      }
    return '';
  }
  var ht = Object.prototype.hasOwnProperty,
    We = {},
    At = O.ReactDebugCurrentFrame;
  function cn(P) {
    if (P) {
      var pe = P._owner,
        Se = Be(P.type, P._source, pe ? pe.type : null);
      At.setExtraStackFrame(Se);
    } else At.setExtraStackFrame(null);
  }
  function A(P, pe, Se, Ye, mt) {
    {
      var wt = Function.call.bind(ht);
      for (var qe in P)
        if (wt(P, qe)) {
          var ft = void 0;
          try {
            if (typeof P[qe] != 'function') {
              var gn = Error(
                (Ye || 'React class') +
                  ': ' +
                  Se +
                  ' type `' +
                  qe +
                  '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                  typeof P[qe] +
                  '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
              );
              throw ((gn.name = 'Invariant Violation'), gn);
            }
            ft = P[qe](
              pe,
              qe,
              Ye,
              Se,
              null,
              'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
            );
          } catch (Gt) {
            ft = Gt;
          }
          (ft &&
            !(ft instanceof Error) &&
            (cn(mt),
            C(
              '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
              Ye || 'React class',
              Se,
              qe,
              typeof ft
            ),
            cn(null)),
            ft instanceof Error &&
              !(ft.message in We) &&
              ((We[ft.message] = !0),
              cn(mt),
              C('Failed %s type: %s', Se, ft.message),
              cn(null)));
        }
    }
  }
  var V = Array.isArray;
  function ee(P) {
    return V(P);
  }
  function ge(P) {
    {
      var pe = typeof Symbol == 'function' && Symbol.toStringTag,
        Se = (pe && P[Symbol.toStringTag]) || P.constructor.name || 'Object';
      return Se;
    }
  }
  function te(P) {
    try {
      return (se(P), !1);
    } catch {
      return !0;
    }
  }
  function se(P) {
    return '' + P;
  }
  function Me(P) {
    if (te(P))
      return (
        C(
          'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
          ge(P)
        ),
        se(P)
      );
  }
  var je = O.ReactCurrentOwner,
    tt = { key: !0, ref: !0, __self: !0, __source: !0 },
    an,
    lr,
    Ee;
  Ee = {};
  function Ie(P) {
    if (ht.call(P, 'ref')) {
      var pe = Object.getOwnPropertyDescriptor(P, 'ref').get;
      if (pe && pe.isReactWarning) return !1;
    }
    return P.ref !== void 0;
  }
  function lt(P) {
    if (ht.call(P, 'key')) {
      var pe = Object.getOwnPropertyDescriptor(P, 'key').get;
      if (pe && pe.isReactWarning) return !1;
    }
    return P.key !== void 0;
  }
  function xt(P, pe) {
    if (
      typeof P.ref == 'string' &&
      je.current &&
      pe &&
      je.current.stateNode !== pe
    ) {
      var Se = X(je.current.type);
      Ee[Se] ||
        (C(
          'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
          X(je.current.type),
          P.ref
        ),
        (Ee[Se] = !0));
    }
  }
  function Mt(P, pe) {
    {
      var Se = function () {
        an ||
          ((an = !0),
          C(
            '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
            pe
          ));
      };
      ((Se.isReactWarning = !0),
        Object.defineProperty(P, 'key', { get: Se, configurable: !0 }));
    }
  }
  function on(P, pe) {
    {
      var Se = function () {
        lr ||
          ((lr = !0),
          C(
            '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
            pe
          ));
      };
      ((Se.isReactWarning = !0),
        Object.defineProperty(P, 'ref', { get: Se, configurable: !0 }));
    }
  }
  var en = function (P, pe, Se, Ye, mt, wt, qe) {
    var ft = { $$typeof: a, type: P, key: pe, ref: Se, props: qe, _owner: wt };
    return (
      (ft._store = {}),
      Object.defineProperty(ft._store, 'validated', {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1,
      }),
      Object.defineProperty(ft, '_self', {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ye,
      }),
      Object.defineProperty(ft, '_source', {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: mt,
      }),
      Object.freeze && (Object.freeze(ft.props), Object.freeze(ft)),
      ft
    );
  };
  function Nn(P, pe, Se, Ye, mt) {
    {
      var wt,
        qe = {},
        ft = null,
        gn = null;
      (Se !== void 0 && (Me(Se), (ft = '' + Se)),
        lt(pe) && (Me(pe.key), (ft = '' + pe.key)),
        Ie(pe) && ((gn = pe.ref), xt(pe, mt)));
      for (wt in pe)
        ht.call(pe, wt) && !tt.hasOwnProperty(wt) && (qe[wt] = pe[wt]);
      if (P && P.defaultProps) {
        var Gt = P.defaultProps;
        for (wt in Gt) qe[wt] === void 0 && (qe[wt] = Gt[wt]);
      }
      if (ft || gn) {
        var Jt =
          typeof P == 'function' ? P.displayName || P.name || 'Unknown' : P;
        (ft && Mt(qe, Jt), gn && on(qe, Jt));
      }
      return en(P, ft, gn, mt, Ye, je.current, qe);
    }
  }
  var Bt = O.ReactCurrentOwner,
    yr = O.ReactDebugCurrentFrame;
  function qt(P) {
    if (P) {
      var pe = P._owner,
        Se = Be(P.type, P._source, pe ? pe.type : null);
      yr.setExtraStackFrame(Se);
    } else yr.setExtraStackFrame(null);
  }
  var Xt;
  Xt = !1;
  function oa(P) {
    return typeof P == 'object' && P !== null && P.$$typeof === a;
  }
  function Vr() {
    {
      if (Bt.current) {
        var P = X(Bt.current.type);
        if (P)
          return (
            `

Check the render method of \`` +
            P +
            '`.'
          );
      }
      return '';
    }
  }
  function Wi(P) {
    {
      if (P !== void 0) {
        var pe = P.fileName.replace(/^.*[\\\/]/, ''),
          Se = P.lineNumber;
        return (
          `

Check your code at ` +
          pe +
          ':' +
          Se +
          '.'
        );
      }
      return '';
    }
  }
  var Po = {};
  function $s(P) {
    {
      var pe = Vr();
      if (!pe) {
        var Se = typeof P == 'string' ? P : P.displayName || P.name;
        Se &&
          (pe =
            `

Check the top-level render call using <` +
            Se +
            '>.');
      }
      return pe;
    }
  }
  function qi(P, pe) {
    {
      if (!P._store || P._store.validated || P.key != null) return;
      P._store.validated = !0;
      var Se = $s(pe);
      if (Po[Se]) return;
      Po[Se] = !0;
      var Ye = '';
      (P &&
        P._owner &&
        P._owner !== Bt.current &&
        (Ye = ' It was passed a child from ' + X(P._owner.type) + '.'),
        qt(P),
        C(
          'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
          Se,
          Ye
        ),
        qt(null));
    }
  }
  function Xi(P, pe) {
    {
      if (typeof P != 'object') return;
      if (ee(P))
        for (var Se = 0; Se < P.length; Se++) {
          var Ye = P[Se];
          oa(Ye) && qi(Ye, pe);
        }
      else if (oa(P)) P._store && (P._store.validated = !0);
      else if (P) {
        var mt = L(P);
        if (typeof mt == 'function' && mt !== P.entries)
          for (var wt = mt.call(P), qe; !(qe = wt.next()).done; )
            oa(qe.value) && qi(qe.value, pe);
      }
    }
  }
  function Da(P) {
    {
      var pe = P.type;
      if (pe == null || typeof pe == 'string') return;
      var Se;
      if (typeof pe == 'function') Se = pe.propTypes;
      else if (
        typeof pe == 'object' &&
        (pe.$$typeof === m || pe.$$typeof === T)
      )
        Se = pe.propTypes;
      else return;
      if (Se) {
        var Ye = X(pe);
        A(Se, P.props, 'prop', Ye, P);
      } else if (pe.PropTypes !== void 0 && !Xt) {
        Xt = !0;
        var mt = X(pe);
        C(
          'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
          mt || 'Unknown'
        );
      }
      typeof pe.getDefaultProps == 'function' &&
        !pe.getDefaultProps.isReactClassApproved &&
        C(
          'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.'
        );
    }
  }
  function si(P) {
    {
      for (var pe = Object.keys(P.props), Se = 0; Se < pe.length; Se++) {
        var Ye = pe[Se];
        if (Ye !== 'children' && Ye !== 'key') {
          (qt(P),
            C(
              'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
              Ye
            ),
            qt(null));
          break;
        }
      }
      P.ref !== null &&
        (qt(P),
        C('Invalid attribute `ref` supplied to `React.Fragment`.'),
        qt(null));
    }
  }
  var Oa = {};
  function Br(P, pe, Se, Ye, mt, wt) {
    {
      var qe = W(P);
      if (!qe) {
        var ft = '';
        (P === void 0 ||
          (typeof P == 'object' &&
            P !== null &&
            Object.keys(P).length === 0)) &&
          (ft +=
            " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
        var gn = Wi(mt);
        gn ? (ft += gn) : (ft += Vr());
        var Gt;
        (P === null
          ? (Gt = 'null')
          : ee(P)
            ? (Gt = 'array')
            : P !== void 0 && P.$$typeof === a
              ? ((Gt = '<' + (X(P.type) || 'Unknown') + ' />'),
                (ft =
                  ' Did you accidentally export a JSX literal instead of a component?'))
              : (Gt = typeof P),
          C(
            'React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
            Gt,
            ft
          ));
      }
      var Jt = Nn(P, pe, Se, mt, wt);
      if (Jt == null) return Jt;
      if (qe) {
        var $n = pe.children;
        if ($n !== void 0)
          if (Ye)
            if (ee($n)) {
              for (var la = 0; la < $n.length; la++) Xi($n[la], P);
              Object.freeze && Object.freeze($n);
            } else
              C(
                'React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.'
              );
          else Xi($n, P);
      }
      if (ht.call(pe, 'key')) {
        var Ar = X(P),
          Rn = Object.keys(pe).filter(function (Aa) {
            return Aa !== 'key';
          }),
          gr =
            Rn.length > 0
              ? '{key: someKey, ' + Rn.join(': ..., ') + ': ...}'
              : '{key: someKey}';
        if (!Oa[Ar + gr]) {
          var dt = Rn.length > 0 ? '{' + Rn.join(': ..., ') + ': ...}' : '{}';
          (C(
            `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
            gr,
            Ar,
            dt,
            Ar
          ),
            (Oa[Ar + gr] = !0));
        }
      }
      return (P === s ? si(Jt) : Da(Jt), Jt);
    }
  }
  function Hr(P, pe, Se) {
    return Br(P, pe, Se, !0);
  }
  function sa(P, pe, Se) {
    return Br(P, pe, Se, !1);
  }
  var Qi = sa,
    li = Hr;
  ((xd.Fragment = s), (xd.jsx = Qi), (xd.jsxs = li));
})();
ZE.exports = xd;
var Oy = ZE.exports;
const tw = Oy.Fragment,
  he = Oy.jsx,
  Vt = Oy.jsxs;
var nw = { exports: {} },
  Dr = {},
  rw = { exports: {} },
  aw = {};
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
    function u(Ee, Ie) {
      var lt = Ee.length;
      (Ee.push(Ie), v(Ee, Ie, lt));
    }
    function d(Ee) {
      return Ee.length === 0 ? null : Ee[0];
    }
    function f(Ee) {
      if (Ee.length === 0) return null;
      var Ie = Ee[0],
        lt = Ee.pop();
      return (lt !== Ie && ((Ee[0] = lt), m(Ee, lt, 0)), Ie);
    }
    function v(Ee, Ie, lt) {
      for (var xt = lt; xt > 0; ) {
        var Mt = (xt - 1) >>> 1,
          on = Ee[Mt];
        if (y(on, Ie) > 0) ((Ee[Mt] = Ie), (Ee[xt] = on), (xt = Mt));
        else return;
      }
    }
    function m(Ee, Ie, lt) {
      for (var xt = lt, Mt = Ee.length, on = Mt >>> 1; xt < on; ) {
        var en = (xt + 1) * 2 - 1,
          Nn = Ee[en],
          Bt = en + 1,
          yr = Ee[Bt];
        if (y(Nn, Ie) < 0)
          Bt < Mt && y(yr, Nn) < 0
            ? ((Ee[xt] = yr), (Ee[Bt] = Ie), (xt = Bt))
            : ((Ee[xt] = Nn), (Ee[en] = Ie), (xt = en));
        else if (Bt < Mt && y(yr, Ie) < 0)
          ((Ee[xt] = yr), (Ee[Bt] = Ie), (xt = Bt));
        else return;
      }
    }
    function y(Ee, Ie) {
      var lt = Ee.sortIndex - Ie.sortIndex;
      return lt !== 0 ? lt : Ee.id - Ie.id;
    }
    var b = 1,
      T = 2,
      w = 3,
      R = 4,
      D = 5;
    function _(Ee, Ie) {}
    var L =
      typeof performance == 'object' && typeof performance.now == 'function';
    if (L) {
      var O = performance;
      r.unstable_now = function () {
        return O.now();
      };
    } else {
      var C = Date,
        M = C.now();
      r.unstable_now = function () {
        return C.now() - M;
      };
    }
    var k = 1073741823,
      z = -1,
      Y = 250,
      B = 5e3,
      q = 1e4,
      Z = k,
      W = [],
      ie = [],
      I = 1,
      X = null,
      oe = w,
      fe = !1,
      ue = !1,
      de = !1,
      me = typeof setTimeout == 'function' ? setTimeout : null,
      _e = typeof clearTimeout == 'function' ? clearTimeout : null,
      Ge = typeof setImmediate < 'u' ? setImmediate : null;
    typeof navigator < 'u' &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Nt(Ee) {
      for (var Ie = d(ie); Ie !== null; ) {
        if (Ie.callback === null) f(ie);
        else if (Ie.startTime <= Ee)
          (f(ie), (Ie.sortIndex = Ie.expirationTime), u(W, Ie));
        else return;
        Ie = d(ie);
      }
    }
    function we(Ee) {
      if (((de = !1), Nt(Ee), !ue))
        if (d(W) !== null) ((ue = !0), Me(Ce));
        else {
          var Ie = d(ie);
          Ie !== null && je(we, Ie.startTime - Ee);
        }
    }
    function Ce(Ee, Ie) {
      ((ue = !1), de && ((de = !1), tt()), (fe = !0));
      var lt = oe;
      try {
        var xt;
        if (!o) return Re(Ee, Ie);
      } finally {
        ((X = null), (oe = lt), (fe = !1));
      }
    }
    function Re(Ee, Ie) {
      var lt = Ie;
      for (
        Nt(lt), X = d(W);
        X !== null && !a && !(X.expirationTime > lt && (!Ee || cn()));

      ) {
        var xt = X.callback;
        if (typeof xt == 'function') {
          ((X.callback = null), (oe = X.priorityLevel));
          var Mt = X.expirationTime <= lt,
            on = xt(Mt);
          ((lt = r.unstable_now()),
            typeof on == 'function' ? (X.callback = on) : X === d(W) && f(W),
            Nt(lt));
        } else f(W);
        X = d(W);
      }
      if (X !== null) return !0;
      var en = d(ie);
      return (en !== null && je(we, en.startTime - lt), !1);
    }
    function Ve(Ee, Ie) {
      switch (Ee) {
        case b:
        case T:
        case w:
        case R:
        case D:
          break;
        default:
          Ee = w;
      }
      var lt = oe;
      oe = Ee;
      try {
        return Ie();
      } finally {
        oe = lt;
      }
    }
    function Q(Ee) {
      var Ie;
      switch (oe) {
        case b:
        case T:
        case w:
          Ie = w;
          break;
        default:
          Ie = oe;
          break;
      }
      var lt = oe;
      oe = Ie;
      try {
        return Ee();
      } finally {
        oe = lt;
      }
    }
    function Ze(Ee) {
      var Ie = oe;
      return function () {
        var lt = oe;
        oe = Ie;
        try {
          return Ee.apply(this, arguments);
        } finally {
          oe = lt;
        }
      };
    }
    function be(Ee, Ie, lt) {
      var xt = r.unstable_now(),
        Mt;
      if (typeof lt == 'object' && lt !== null) {
        var on = lt.delay;
        typeof on == 'number' && on > 0 ? (Mt = xt + on) : (Mt = xt);
      } else Mt = xt;
      var en;
      switch (Ee) {
        case b:
          en = z;
          break;
        case T:
          en = Y;
          break;
        case D:
          en = Z;
          break;
        case R:
          en = q;
          break;
        case w:
        default:
          en = B;
          break;
      }
      var Nn = Mt + en,
        Bt = {
          id: I++,
          callback: Ie,
          priorityLevel: Ee,
          startTime: Mt,
          expirationTime: Nn,
          sortIndex: -1,
        };
      return (
        Mt > xt
          ? ((Bt.sortIndex = Mt),
            u(ie, Bt),
            d(W) === null &&
              Bt === d(ie) &&
              (de ? tt() : (de = !0), je(we, Mt - xt)))
          : ((Bt.sortIndex = Nn), u(W, Bt), !ue && !fe && ((ue = !0), Me(Ce))),
        Bt
      );
    }
    function ot() {}
    function Qe() {
      !ue && !fe && ((ue = !0), Me(Ce));
    }
    function et() {
      return d(W);
    }
    function ce(Ee) {
      Ee.callback = null;
    }
    function st() {
      return oe;
    }
    var pt = !1,
      Be = null,
      ht = -1,
      We = s,
      At = -1;
    function cn() {
      var Ee = r.unstable_now() - At;
      return !(Ee < We);
    }
    function A() {}
    function V(Ee) {
      if (Ee < 0 || Ee > 125) {
        console.error(
          'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
        );
        return;
      }
      Ee > 0 ? (We = Math.floor(1e3 / Ee)) : (We = s);
    }
    var ee = function () {
        if (Be !== null) {
          var Ee = r.unstable_now();
          At = Ee;
          var Ie = !0,
            lt = !0;
          try {
            lt = Be(Ie, Ee);
          } finally {
            lt ? ge() : ((pt = !1), (Be = null));
          }
        } else pt = !1;
      },
      ge;
    if (typeof Ge == 'function')
      ge = function () {
        Ge(ee);
      };
    else if (typeof MessageChannel < 'u') {
      var te = new MessageChannel(),
        se = te.port2;
      ((te.port1.onmessage = ee),
        (ge = function () {
          se.postMessage(null);
        }));
    } else
      ge = function () {
        me(ee, 0);
      };
    function Me(Ee) {
      ((Be = Ee), pt || ((pt = !0), ge()));
    }
    function je(Ee, Ie) {
      ht = me(function () {
        Ee(r.unstable_now());
      }, Ie);
    }
    function tt() {
      (_e(ht), (ht = -1));
    }
    var an = A,
      lr = null;
    ((r.unstable_IdlePriority = D),
      (r.unstable_ImmediatePriority = b),
      (r.unstable_LowPriority = R),
      (r.unstable_NormalPriority = w),
      (r.unstable_Profiling = lr),
      (r.unstable_UserBlockingPriority = T),
      (r.unstable_cancelCallback = ce),
      (r.unstable_continueExecution = Qe),
      (r.unstable_forceFrameRate = V),
      (r.unstable_getCurrentPriorityLevel = st),
      (r.unstable_getFirstCallbackNode = et),
      (r.unstable_next = Q),
      (r.unstable_pauseExecution = ot),
      (r.unstable_requestPaint = an),
      (r.unstable_runWithPriority = Ve),
      (r.unstable_scheduleCallback = be),
      (r.unstable_shouldYield = cn),
      (r.unstable_wrapCallback = Ze),
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' &&
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ==
          'function' &&
        __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error()));
  })();
})(aw);
rw.exports = aw;
var DL = rw.exports;
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
  var r = $,
    a = DL,
    o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    s = !1;
  function u(e) {
    s = e;
  }
  function d(e) {
    if (!s) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1;
        i < t;
        i++
      )
        n[i - 1] = arguments[i];
      v('warn', e, n);
    }
  }
  function f(e) {
    if (!s) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1;
        i < t;
        i++
      )
        n[i - 1] = arguments[i];
      v('error', e, n);
    }
  }
  function v(e, t, n) {
    {
      var i = o.ReactDebugCurrentFrame,
        l = i.getStackAddendum();
      l !== '' && ((t += '%s'), (n = n.concat([l])));
      var c = n.map(function (p) {
        return String(p);
      });
      (c.unshift('Warning: ' + t),
        Function.prototype.apply.call(console[e], console, c));
    }
  }
  var m = 0,
    y = 1,
    b = 2,
    T = 3,
    w = 4,
    R = 5,
    D = 6,
    _ = 7,
    L = 8,
    O = 9,
    C = 10,
    M = 11,
    k = 12,
    z = 13,
    Y = 14,
    B = 15,
    q = 16,
    Z = 17,
    W = 18,
    ie = 19,
    I = 21,
    X = 22,
    oe = 23,
    fe = 24,
    ue = 25,
    de = !0,
    me = !1,
    _e = !1,
    Ge = !1,
    Nt = !1,
    we = !0,
    Ce = !1,
    Re = !0,
    Ve = !0,
    Q = !0,
    Ze = !0,
    be = new Set(),
    ot = {},
    Qe = {};
  function et(e, t) {
    (ce(e, t), ce(e + 'Capture', t));
  }
  function ce(e, t) {
    (ot[e] &&
      f(
        'EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.',
        e
      ),
      (ot[e] = t));
    {
      var n = e.toLowerCase();
      ((Qe[n] = e), e === 'onDoubleClick' && (Qe.ondblclick = e));
    }
    for (var i = 0; i < t.length; i++) be.add(t[i]);
  }
  var st =
      typeof window < 'u' &&
      typeof window.document < 'u' &&
      typeof window.document.createElement < 'u',
    pt = Object.prototype.hasOwnProperty;
  function Be(e) {
    {
      var t = typeof Symbol == 'function' && Symbol.toStringTag,
        n = (t && e[Symbol.toStringTag]) || e.constructor.name || 'Object';
      return n;
    }
  }
  function ht(e) {
    try {
      return (We(e), !1);
    } catch {
      return !0;
    }
  }
  function We(e) {
    return '' + e;
  }
  function At(e, t) {
    if (ht(e))
      return (
        f(
          'The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.',
          t,
          Be(e)
        ),
        We(e)
      );
  }
  function cn(e) {
    if (ht(e))
      return (
        f(
          'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
          Be(e)
        ),
        We(e)
      );
  }
  function A(e, t) {
    if (ht(e))
      return (
        f(
          'The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.',
          t,
          Be(e)
        ),
        We(e)
      );
  }
  function V(e, t) {
    if (ht(e))
      return (
        f(
          'The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.',
          t,
          Be(e)
        ),
        We(e)
      );
  }
  function ee(e) {
    if (ht(e))
      return (
        f(
          'The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.',
          Be(e)
        ),
        We(e)
      );
  }
  function ge(e) {
    if (ht(e))
      return (
        f(
          'Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.',
          Be(e)
        ),
        We(e)
      );
  }
  var te = 0,
    se = 1,
    Me = 2,
    je = 3,
    tt = 4,
    an = 5,
    lr = 6,
    Ee =
      ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD',
    Ie = Ee + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040',
    lt = new RegExp('^[' + Ee + '][' + Ie + ']*$'),
    xt = {},
    Mt = {};
  function on(e) {
    return pt.call(Mt, e)
      ? !0
      : pt.call(xt, e)
        ? !1
        : lt.test(e)
          ? ((Mt[e] = !0), !0)
          : ((xt[e] = !0), f('Invalid attribute name: `%s`', e), !1);
  }
  function en(e, t, n) {
    return t !== null
      ? t.type === te
      : n
        ? !1
        : e.length > 2 &&
          (e[0] === 'o' || e[0] === 'O') &&
          (e[1] === 'n' || e[1] === 'N');
  }
  function Nn(e, t, n, i) {
    if (n !== null && n.type === te) return !1;
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
  function Bt(e, t, n, i) {
    if (t === null || typeof t > 'u' || Nn(e, t, n, i)) return !0;
    if (i) return !1;
    if (n !== null)
      switch (n.type) {
        case je:
          return !t;
        case tt:
          return t === !1;
        case an:
          return isNaN(t);
        case lr:
          return isNaN(t) || t < 1;
      }
    return !1;
  }
  function yr(e) {
    return Xt.hasOwnProperty(e) ? Xt[e] : null;
  }
  function qt(e, t, n, i, l, c, p) {
    ((this.acceptsBooleans = t === Me || t === je || t === tt),
      (this.attributeName = i),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = c),
      (this.removeEmptyString = p));
  }
  var Xt = {},
    oa = [
      'children',
      'dangerouslySetInnerHTML',
      'defaultValue',
      'defaultChecked',
      'innerHTML',
      'suppressContentEditableWarning',
      'suppressHydrationWarning',
      'style',
    ];
  (oa.forEach(function (e) {
    Xt[e] = new qt(e, te, !1, e, null, !1, !1);
  }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0],
        n = e[1];
      Xt[t] = new qt(t, se, !1, n, null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(
      function (e) {
        Xt[e] = new qt(e, Me, !1, e.toLowerCase(), null, !1, !1);
      }
    ),
    [
      'autoReverse',
      'externalResourcesRequired',
      'focusable',
      'preserveAlpha',
    ].forEach(function (e) {
      Xt[e] = new qt(e, Me, !1, e, null, !1, !1);
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
      Xt[e] = new qt(e, je, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      Xt[e] = new qt(e, je, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
      Xt[e] = new qt(e, tt, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      Xt[e] = new qt(e, lr, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      Xt[e] = new qt(e, an, !1, e.toLowerCase(), null, !1, !1);
    }));
  var Vr = /[\-\:]([a-z])/g,
    Wi = function (e) {
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
    var t = e.replace(Vr, Wi);
    Xt[t] = new qt(t, se, !1, e, null, !1, !1);
  }),
    [
      'xlink:actuate',
      'xlink:arcrole',
      'xlink:role',
      'xlink:show',
      'xlink:title',
      'xlink:type',
    ].forEach(function (e) {
      var t = e.replace(Vr, Wi);
      Xt[t] = new qt(t, se, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
    }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(Vr, Wi);
      Xt[t] = new qt(
        t,
        se,
        !1,
        e,
        'http://www.w3.org/XML/1998/namespace',
        !1,
        !1
      );
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      Xt[e] = new qt(e, se, !1, e.toLowerCase(), null, !1, !1);
    }));
  var Po = 'xlinkHref';
  ((Xt[Po] = new qt(
    'xlinkHref',
    se,
    !1,
    'xlink:href',
    'http://www.w3.org/1999/xlink',
    !0,
    !1
  )),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      Xt[e] = new qt(e, se, !1, e.toLowerCase(), null, !0, !0);
    }));
  var $s =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i,
    qi = !1;
  function Xi(e) {
    !qi &&
      $s.test(e) &&
      ((qi = !0),
      f(
        'A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.',
        JSON.stringify(e)
      ));
  }
  function Da(e, t, n, i) {
    if (i.mustUseProperty) {
      var l = i.propertyName;
      return e[l];
    } else {
      (At(n, t), i.sanitizeURL && Xi('' + n));
      var c = i.attributeName,
        p = null;
      if (i.type === tt) {
        if (e.hasAttribute(c)) {
          var h = e.getAttribute(c);
          return h === '' ? !0 : Bt(t, n, i, !1) ? h : h === '' + n ? n : h;
        }
      } else if (e.hasAttribute(c)) {
        if (Bt(t, n, i, !1)) return e.getAttribute(c);
        if (i.type === je) return n;
        p = e.getAttribute(c);
      }
      return Bt(t, n, i, !1) ? (p === null ? n : p) : p === '' + n ? n : p;
    }
  }
  function si(e, t, n, i) {
    {
      if (!on(t)) return;
      if (!e.hasAttribute(t)) return n === void 0 ? void 0 : null;
      var l = e.getAttribute(t);
      return (At(n, t), l === '' + n ? n : l);
    }
  }
  function Oa(e, t, n, i) {
    var l = yr(t);
    if (!en(t, l, i)) {
      if ((Bt(t, n, l, i) && (n = null), i || l === null)) {
        if (on(t)) {
          var c = t;
          n === null
            ? e.removeAttribute(c)
            : (At(n, t), e.setAttribute(c, '' + n));
        }
        return;
      }
      var p = l.mustUseProperty;
      if (p) {
        var h = l.propertyName;
        if (n === null) {
          var g = l.type;
          e[h] = g === je ? !1 : '';
        } else e[h] = n;
        return;
      }
      var E = l.attributeName,
        x = l.attributeNamespace;
      if (n === null) e.removeAttribute(E);
      else {
        var U = l.type,
          F;
        (U === je || (U === tt && n === !0)
          ? (F = '')
          : (At(n, E), (F = '' + n), l.sanitizeURL && Xi(F.toString())),
          x ? e.setAttributeNS(x, E, F) : e.setAttribute(E, F));
      }
    }
  }
  var Br = Symbol.for('react.element'),
    Hr = Symbol.for('react.portal'),
    sa = Symbol.for('react.fragment'),
    Qi = Symbol.for('react.strict_mode'),
    li = Symbol.for('react.profiler'),
    P = Symbol.for('react.provider'),
    pe = Symbol.for('react.context'),
    Se = Symbol.for('react.forward_ref'),
    Ye = Symbol.for('react.suspense'),
    mt = Symbol.for('react.suspense_list'),
    wt = Symbol.for('react.memo'),
    qe = Symbol.for('react.lazy'),
    ft = Symbol.for('react.scope'),
    gn = Symbol.for('react.debug_trace_mode'),
    Gt = Symbol.for('react.offscreen'),
    Jt = Symbol.for('react.legacy_hidden'),
    $n = Symbol.for('react.cache'),
    la = Symbol.for('react.tracing_marker'),
    Ar = Symbol.iterator,
    Rn = '@@iterator';
  function gr(e) {
    if (e === null || typeof e != 'object') return null;
    var t = (Ar && e[Ar]) || e[Rn];
    return typeof t == 'function' ? t : null;
  }
  var dt = Object.assign,
    Aa = 0,
    ui,
    Ys,
    Gs,
    Ws,
    qs,
    Xs,
    Qs;
  function Ks() {}
  Ks.__reactDisabledLog = !0;
  function tc() {
    {
      if (Aa === 0) {
        ((ui = console.log),
          (Ys = console.info),
          (Gs = console.warn),
          (Ws = console.error),
          (qs = console.group),
          (Xs = console.groupCollapsed),
          (Qs = console.groupEnd));
        var e = { configurable: !0, enumerable: !0, value: Ks, writable: !0 };
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
      Aa++;
    }
  }
  function Qd() {
    {
      if ((Aa--, Aa === 0)) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: dt({}, e, { value: ui }),
          info: dt({}, e, { value: Ys }),
          warn: dt({}, e, { value: Gs }),
          error: dt({}, e, { value: Ws }),
          group: dt({}, e, { value: qs }),
          groupCollapsed: dt({}, e, { value: Xs }),
          groupEnd: dt({}, e, { value: Qs }),
        });
      }
      Aa < 0 &&
        f(
          'disabledDepth fell below zero. This is a bug in React. Please file an issue.'
        );
    }
  }
  var Js = o.ReactCurrentDispatcher,
    Ki;
  function Mr(e, t, n) {
    {
      if (Ki === void 0)
        try {
          throw Error();
        } catch (l) {
          var i = l.stack.trim().match(/\n( *(at )?)/);
          Ki = (i && i[1]) || '';
        }
      return (
        `
` +
        Ki +
        e
      );
    }
  }
  var ci = !1,
    fi;
  {
    var zo = typeof WeakMap == 'function' ? WeakMap : Map;
    fi = new zo();
  }
  function Zs(e, t) {
    if (!e || ci) return '';
    {
      var n = fi.get(e);
      if (n !== void 0) return n;
    }
    var i;
    ci = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    var c;
    ((c = Js.current), (Js.current = null), tc());
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
          } catch (J) {
            i = J;
          }
          Reflect.construct(e, [], p);
        } else {
          try {
            p.call();
          } catch (J) {
            i = J;
          }
          e.call(p.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (J) {
          i = J;
        }
        e();
      }
    } catch (J) {
      if (J && i && typeof J.stack == 'string') {
        for (
          var h = J.stack.split(`
`),
            g = i.stack.split(`
`),
            E = h.length - 1,
            x = g.length - 1;
          E >= 1 && x >= 0 && h[E] !== g[x];

        )
          x--;
        for (; E >= 1 && x >= 0; E--, x--)
          if (h[E] !== g[x]) {
            if (E !== 1 || x !== 1)
              do
                if ((E--, x--, x < 0 || h[E] !== g[x])) {
                  var U =
                    `
` + h[E].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      U.includes('<anonymous>') &&
                      (U = U.replace('<anonymous>', e.displayName)),
                    typeof e == 'function' && fi.set(e, U),
                    U
                  );
                }
              while (E >= 1 && x >= 0);
            break;
          }
      }
    } finally {
      ((ci = !1), (Js.current = c), Qd(), (Error.prepareStackTrace = l));
    }
    var F = e ? e.displayName || e.name : '',
      G = F ? Mr(F) : '';
    return (typeof e == 'function' && fi.set(e, G), G);
  }
  function nc(e, t, n) {
    return Zs(e, !0);
  }
  function el(e, t, n) {
    return Zs(e, !1);
  }
  function Kd(e) {
    var t = e.prototype;
    return !!(t && t.isReactComponent);
  }
  function di(e, t, n) {
    if (e == null) return '';
    if (typeof e == 'function') return Zs(e, Kd(e));
    if (typeof e == 'string') return Mr(e);
    switch (e) {
      case Ye:
        return Mr('Suspense');
      case mt:
        return Mr('SuspenseList');
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case Se:
          return el(e.render);
        case wt:
          return di(e.type, t, n);
        case qe: {
          var i = e,
            l = i._payload,
            c = i._init;
          try {
            return di(c(l), t, n);
          } catch {}
        }
      }
    return '';
  }
  function rc(e) {
    switch ((e._debugOwner && e._debugOwner.type, e._debugSource, e.tag)) {
      case R:
        return Mr(e.type);
      case q:
        return Mr('Lazy');
      case z:
        return Mr('Suspense');
      case ie:
        return Mr('SuspenseList');
      case m:
      case b:
      case B:
        return el(e.type);
      case M:
        return el(e.type.render);
      case y:
        return nc(e.type);
      default:
        return '';
    }
  }
  function tl(e) {
    try {
      var t = '',
        n = e;
      do ((t += rc(n)), (n = n.return));
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
  function Fo(e, t, n) {
    var i = e.displayName;
    if (i) return i;
    var l = t.displayName || t.name || '';
    return l !== '' ? n + '(' + l + ')' : n;
  }
  function ac(e) {
    return e.displayName || 'Context';
  }
  function Ct(e) {
    if (e == null) return null;
    if (
      (typeof e.tag == 'number' &&
        f(
          'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.'
        ),
      typeof e == 'function')
    )
      return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case sa:
        return 'Fragment';
      case Hr:
        return 'Portal';
      case li:
        return 'Profiler';
      case Qi:
        return 'StrictMode';
      case Ye:
        return 'Suspense';
      case mt:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case pe:
          var t = e;
          return ac(t) + '.Consumer';
        case P:
          var n = e;
          return ac(n._context) + '.Provider';
        case Se:
          return Fo(e, e.render, 'ForwardRef');
        case wt:
          var i = e.displayName || null;
          return i !== null ? i : Ct(e.type) || 'Memo';
        case qe: {
          var l = e,
            c = l._payload,
            p = l._init;
          try {
            return Ct(p(c));
          } catch {
            return null;
          }
        }
      }
    return null;
  }
  function nl(e, t, n) {
    var i = t.displayName || t.name || '';
    return e.displayName || (i !== '' ? n + '(' + i + ')' : n);
  }
  function rl(e) {
    return e.displayName || 'Context';
  }
  function ut(e) {
    var t = e.tag,
      n = e.type;
    switch (t) {
      case fe:
        return 'Cache';
      case O:
        var i = n;
        return rl(i) + '.Consumer';
      case C:
        var l = n;
        return rl(l._context) + '.Provider';
      case W:
        return 'DehydratedFragment';
      case M:
        return nl(n, n.render, 'ForwardRef');
      case _:
        return 'Fragment';
      case R:
        return n;
      case w:
        return 'Portal';
      case T:
        return 'Root';
      case D:
        return 'Text';
      case q:
        return Ct(n);
      case L:
        return n === Qi ? 'StrictMode' : 'Mode';
      case X:
        return 'Offscreen';
      case k:
        return 'Profiler';
      case I:
        return 'Scope';
      case z:
        return 'Suspense';
      case ie:
        return 'SuspenseList';
      case ue:
        return 'TracingMarker';
      case y:
      case m:
      case Z:
      case b:
      case Y:
      case B:
        if (typeof n == 'function') return n.displayName || n.name || null;
        if (typeof n == 'string') return n;
        break;
    }
    return null;
  }
  var ic = o.ReactDebugCurrentFrame,
    Yn = null,
    Ji = !1;
  function pi() {
    {
      if (Yn === null) return null;
      var e = Yn._debugOwner;
      if (e !== null && typeof e < 'u') return ut(e);
    }
    return null;
  }
  function oc() {
    return Yn === null ? '' : tl(Yn);
  }
  function Dn() {
    ((ic.getCurrentStack = null), (Yn = null), (Ji = !1));
  }
  function tn(e) {
    ((ic.getCurrentStack = e === null ? null : oc), (Yn = e), (Ji = !1));
  }
  function sc() {
    return Yn;
  }
  function br(e) {
    Ji = e;
  }
  function ur(e) {
    return '' + e;
  }
  function ua(e) {
    switch (typeof e) {
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e;
      case 'object':
        return (ge(e), e);
      default:
        return '';
    }
  }
  var Jd = {
    button: !0,
    checkbox: !0,
    image: !0,
    hidden: !0,
    radio: !0,
    reset: !0,
    submit: !0,
  };
  function Uo(e, t) {
    (Jd[t.type] ||
      t.onChange ||
      t.onInput ||
      t.readOnly ||
      t.disabled ||
      t.value == null ||
      f(
        'You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.'
      ),
      t.onChange ||
        t.readOnly ||
        t.disabled ||
        t.checked == null ||
        f(
          'You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.'
        ));
  }
  function Zi(e) {
    var t = e.type,
      n = e.nodeName;
    return (
      n && n.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio')
    );
  }
  function lc(e) {
    return e._valueTracker;
  }
  function vi(e) {
    e._valueTracker = null;
  }
  function uc(e) {
    var t = '';
    return (
      e && (Zi(e) ? (t = e.checked ? 'true' : 'false') : (t = e.value)),
      t
    );
  }
  function cc(e) {
    var t = Zi(e) ? 'checked' : 'value',
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    ge(e[t]);
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
        c = n.set;
      (Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (h) {
          (ge(h), (i = '' + h), c.call(this, h));
        },
      }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }));
      var p = {
        getValue: function () {
          return i;
        },
        setValue: function (h) {
          (ge(h), (i = '' + h));
        },
        stopTracking: function () {
          (vi(e), delete e[t]);
        },
      };
      return p;
    }
  }
  function Ma(e) {
    lc(e) || (e._valueTracker = cc(e));
  }
  function Io(e) {
    if (!e) return !1;
    var t = lc(e);
    if (!t) return !0;
    var n = t.getValue(),
      i = uc(e);
    return i !== n ? (t.setValue(i), !0) : !1;
  }
  function hi(e) {
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
  var Vo = !1,
    fc = !1,
    dc = !1,
    pc = !1;
  function vc(e) {
    var t = e.type === 'checkbox' || e.type === 'radio';
    return t ? e.checked != null : e.value != null;
  }
  function S(e, t) {
    var n = e,
      i = t.checked,
      l = dt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? n._wrapperState.initialChecked,
      });
    return l;
  }
  function N(e, t) {
    (Uo('input', t),
      t.checked !== void 0 &&
        t.defaultChecked !== void 0 &&
        !fc &&
        (f(
          '%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components',
          pi() || 'A component',
          t.type
        ),
        (fc = !0)),
      t.value !== void 0 &&
        t.defaultValue !== void 0 &&
        !Vo &&
        (f(
          '%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components',
          pi() || 'A component',
          t.type
        ),
        (Vo = !0)));
    var n = e,
      i = t.defaultValue == null ? '' : t.defaultValue;
    n._wrapperState = {
      initialChecked: t.checked != null ? t.checked : t.defaultChecked,
      initialValue: ua(t.value != null ? t.value : i),
      controlled: vc(t),
    };
  }
  function K(e, t) {
    var n = e,
      i = t.checked;
    i != null && Oa(n, 'checked', i, !1);
  }
  function ne(e, t) {
    var n = e;
    {
      var i = vc(t);
      (!n._wrapperState.controlled &&
        i &&
        !pc &&
        (f(
          'A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components'
        ),
        (pc = !0)),
        n._wrapperState.controlled &&
          !i &&
          !dc &&
          (f(
            'A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components'
          ),
          (dc = !0)));
    }
    K(e, t);
    var l = ua(t.value),
      c = t.type;
    if (l != null)
      c === 'number'
        ? ((l === 0 && n.value === '') || n.value != l) && (n.value = ur(l))
        : n.value !== ur(l) && (n.value = ur(l));
    else if (c === 'submit' || c === 'reset') {
      n.removeAttribute('value');
      return;
    }
    (t.hasOwnProperty('value')
      ? nt(n, t.type, l)
      : t.hasOwnProperty('defaultValue') && nt(n, t.type, ua(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (n.defaultChecked = !!t.defaultChecked));
  }
  function Te(e, t, n) {
    var i = e;
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
      var l = t.type,
        c = l === 'submit' || l === 'reset';
      if (c && (t.value === void 0 || t.value === null)) return;
      var p = ur(i._wrapperState.initialValue);
      (n || (p !== i.value && (i.value = p)), (i.defaultValue = p));
    }
    var h = i.name;
    (h !== '' && (i.name = ''),
      (i.defaultChecked = !i.defaultChecked),
      (i.defaultChecked = !!i._wrapperState.initialChecked),
      h !== '' && (i.name = h));
  }
  function Ke(e, t) {
    var n = e;
    (ne(n, t), Pe(n, t));
  }
  function Pe(e, t) {
    var n = t.name;
    if (t.type === 'radio' && n != null) {
      for (var i = e; i.parentNode; ) i = i.parentNode;
      At(n, 'name');
      for (
        var l = i.querySelectorAll(
            'input[name=' + JSON.stringify('' + n) + '][type="radio"]'
          ),
          c = 0;
        c < l.length;
        c++
      ) {
        var p = l[c];
        if (!(p === e || p.form !== e.form)) {
          var h = ef(p);
          if (!h)
            throw new Error(
              'ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.'
            );
          (Io(p), ne(p, h));
        }
      }
    }
  }
  function nt(e, t, n) {
    (t !== 'number' || hi(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = ur(e._wrapperState.initialValue))
        : e.defaultValue !== ur(n) && (e.defaultValue = ur(n)));
  }
  var gt = !1,
    Pt = !1,
    Ht = !1;
  function jt(e, t) {
    (t.value == null &&
      (typeof t.children == 'object' && t.children !== null
        ? r.Children.forEach(t.children, function (n) {
            n != null &&
              (typeof n == 'string' ||
                typeof n == 'number' ||
                Pt ||
                ((Pt = !0),
                f(
                  'Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.'
                )));
          })
        : t.dangerouslySetInnerHTML != null &&
          (Ht ||
            ((Ht = !0),
            f(
              'Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.'
            )))),
      t.selected != null &&
        !gt &&
        (f(
          'Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.'
        ),
        (gt = !0)));
  }
  function Qt(e, t) {
    t.value != null && e.setAttribute('value', ur(ua(t.value)));
  }
  var sn = Array.isArray;
  function Dt(e) {
    return sn(e);
  }
  var mi;
  mi = !1;
  function Bo() {
    var e = pi();
    return e
      ? `

Check the render method of \`` +
          e +
          '`.'
      : '';
  }
  var al = ['value', 'defaultValue'];
  function Zd(e) {
    {
      Uo('select', e);
      for (var t = 0; t < al.length; t++) {
        var n = al[t];
        if (e[n] != null) {
          var i = Dt(e[n]);
          e.multiple && !i
            ? f(
                'The `%s` prop supplied to <select> must be an array if `multiple` is true.%s',
                n,
                Bo()
              )
            : !e.multiple &&
              i &&
              f(
                'The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s',
                n,
                Bo()
              );
        }
      }
    }
  }
  function La(e, t, n, i) {
    var l = e.options;
    if (t) {
      for (var c = n, p = {}, h = 0; h < c.length; h++) p['$' + c[h]] = !0;
      for (var g = 0; g < l.length; g++) {
        var E = p.hasOwnProperty('$' + l[g].value);
        (l[g].selected !== E && (l[g].selected = E),
          E && i && (l[g].defaultSelected = !0));
      }
    } else {
      for (var x = ur(ua(n)), U = null, F = 0; F < l.length; F++) {
        if (l[F].value === x) {
          ((l[F].selected = !0), i && (l[F].defaultSelected = !0));
          return;
        }
        U === null && !l[F].disabled && (U = l[F]);
      }
      U !== null && (U.selected = !0);
    }
  }
  function il(e, t) {
    return dt({}, t, { value: void 0 });
  }
  function ol(e, t) {
    var n = e;
    (Zd(t),
      (n._wrapperState = { wasMultiple: !!t.multiple }),
      t.value !== void 0 &&
        t.defaultValue !== void 0 &&
        !mi &&
        (f(
          'Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components'
        ),
        (mi = !0)));
  }
  function ep(e, t) {
    var n = e;
    n.multiple = !!t.multiple;
    var i = t.value;
    i != null
      ? La(n, !!t.multiple, i, !1)
      : t.defaultValue != null && La(n, !!t.multiple, t.defaultValue, !0);
  }
  function uC(e, t) {
    var n = e,
      i = n._wrapperState.wasMultiple;
    n._wrapperState.wasMultiple = !!t.multiple;
    var l = t.value;
    l != null
      ? La(n, !!t.multiple, l, !1)
      : i !== !!t.multiple &&
        (t.defaultValue != null
          ? La(n, !!t.multiple, t.defaultValue, !0)
          : La(n, !!t.multiple, t.multiple ? [] : '', !1));
  }
  function cC(e, t) {
    var n = e,
      i = t.value;
    i != null && La(n, !!t.multiple, i, !1);
  }
  var Ky = !1;
  function tp(e, t) {
    var n = e;
    if (t.dangerouslySetInnerHTML != null)
      throw new Error(
        '`dangerouslySetInnerHTML` does not make sense on <textarea>.'
      );
    var i = dt({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: ur(n._wrapperState.initialValue),
    });
    return i;
  }
  function Jy(e, t) {
    var n = e;
    (Uo('textarea', t),
      t.value !== void 0 &&
        t.defaultValue !== void 0 &&
        !Ky &&
        (f(
          '%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components',
          pi() || 'A component'
        ),
        (Ky = !0)));
    var i = t.value;
    if (i == null) {
      var l = t.children,
        c = t.defaultValue;
      if (l != null) {
        f(
          'Use the `defaultValue` or `value` props instead of setting children on <textarea>.'
        );
        {
          if (c != null)
            throw new Error(
              'If you supply `defaultValue` on a <textarea>, do not pass children.'
            );
          if (Dt(l)) {
            if (l.length > 1)
              throw new Error('<textarea> can only have at most one child.');
            l = l[0];
          }
          c = l;
        }
      }
      (c == null && (c = ''), (i = c));
    }
    n._wrapperState = { initialValue: ua(i) };
  }
  function Zy(e, t) {
    var n = e,
      i = ua(t.value),
      l = ua(t.defaultValue);
    if (i != null) {
      var c = ur(i);
      (c !== n.value && (n.value = c),
        t.defaultValue == null && n.defaultValue !== c && (n.defaultValue = c));
    }
    l != null && (n.defaultValue = ur(l));
  }
  function eg(e, t) {
    var n = e,
      i = n.textContent;
    i === n._wrapperState.initialValue &&
      i !== '' &&
      i !== null &&
      (n.value = i);
  }
  function fC(e, t) {
    Zy(e, t);
  }
  var ka = 'http://www.w3.org/1999/xhtml',
    dC = 'http://www.w3.org/1998/Math/MathML',
    np = 'http://www.w3.org/2000/svg';
  function rp(e) {
    switch (e) {
      case 'svg':
        return np;
      case 'math':
        return dC;
      default:
        return ka;
    }
  }
  function ap(e, t) {
    return e == null || e === ka
      ? rp(t)
      : e === np && t === 'foreignObject'
        ? ka
        : e;
  }
  var pC = function (e) {
      return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
        ? function (t, n, i, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, i, l);
            });
          }
        : e;
    },
    hc,
    tg = pC(function (e, t) {
      if (e.namespaceURI === np && !('innerHTML' in e)) {
        ((hc = hc || document.createElement('div')),
          (hc.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>'));
        for (var n = hc.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
        for (; n.firstChild; ) e.appendChild(n.firstChild);
        return;
      }
      e.innerHTML = t;
    }),
    cr = 1,
    Na = 3,
    pn = 8,
    Pa = 9,
    ip = 11,
    mc = function (e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === Na) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    },
    vC = {
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
    sl = {
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
  function hC(e, t) {
    return e + t.charAt(0).toUpperCase() + t.substring(1);
  }
  var mC = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(sl).forEach(function (e) {
    mC.forEach(function (t) {
      sl[hC(t, e)] = sl[e];
    });
  });
  function op(e, t, n) {
    var i = t == null || typeof t == 'boolean' || t === '';
    return i
      ? ''
      : !n &&
          typeof t == 'number' &&
          t !== 0 &&
          !(sl.hasOwnProperty(e) && sl[e])
        ? t + 'px'
        : (V(t, e), ('' + t).trim());
  }
  var yC = /([A-Z])/g,
    gC = /^ms-/;
  function bC(e) {
    return e.replace(yC, '-$1').toLowerCase().replace(gC, '-ms-');
  }
  var ng = function () {};
  {
    var SC = /^(?:webkit|moz|o)[A-Z]/,
      TC = /^-ms-/,
      EC = /-(.)/g,
      rg = /;\s*$/,
      Ho = {},
      sp = {},
      ag = !1,
      ig = !1,
      wC = function (e) {
        return e.replace(EC, function (t, n) {
          return n.toUpperCase();
        });
      },
      CC = function (e) {
        (Ho.hasOwnProperty(e) && Ho[e]) ||
          ((Ho[e] = !0),
          f(
            'Unsupported style property %s. Did you mean %s?',
            e,
            wC(e.replace(TC, 'ms-'))
          ));
      },
      xC = function (e) {
        (Ho.hasOwnProperty(e) && Ho[e]) ||
          ((Ho[e] = !0),
          f(
            'Unsupported vendor-prefixed style property %s. Did you mean %s?',
            e,
            e.charAt(0).toUpperCase() + e.slice(1)
          ));
      },
      _C = function (e, t) {
        (sp.hasOwnProperty(t) && sp[t]) ||
          ((sp[t] = !0),
          f(
            `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
            e,
            t.replace(rg, '')
          ));
      },
      RC = function (e, t) {
        ag ||
          ((ag = !0),
          f('`NaN` is an invalid value for the `%s` css style property.', e));
      },
      DC = function (e, t) {
        ig ||
          ((ig = !0),
          f(
            '`Infinity` is an invalid value for the `%s` css style property.',
            e
          ));
      };
    ng = function (e, t) {
      (e.indexOf('-') > -1
        ? CC(e)
        : SC.test(e)
          ? xC(e)
          : rg.test(t) && _C(e, t),
        typeof t == 'number' &&
          (isNaN(t) ? RC(e, t) : isFinite(t) || DC(e, t)));
    };
  }
  var OC = ng;
  function AC(e) {
    {
      var t = '',
        n = '';
      for (var i in e)
        if (e.hasOwnProperty(i)) {
          var l = e[i];
          if (l != null) {
            var c = i.indexOf('--') === 0;
            ((t += n + (c ? i : bC(i)) + ':'), (t += op(i, l, c)), (n = ';'));
          }
        }
      return t || null;
    }
  }
  function og(e, t) {
    var n = e.style;
    for (var i in t)
      if (t.hasOwnProperty(i)) {
        var l = i.indexOf('--') === 0;
        l || OC(i, t[i]);
        var c = op(i, t[i], l);
        (i === 'float' && (i = 'cssFloat'),
          l ? n.setProperty(i, c) : (n[i] = c));
      }
  }
  function MC(e) {
    return e == null || typeof e == 'boolean' || e === '';
  }
  function sg(e) {
    var t = {};
    for (var n in e)
      for (var i = vC[n] || [n], l = 0; l < i.length; l++) t[i[l]] = n;
    return t;
  }
  function LC(e, t) {
    {
      if (!t) return;
      var n = sg(e),
        i = sg(t),
        l = {};
      for (var c in n) {
        var p = n[c],
          h = i[c];
        if (h && p !== h) {
          var g = p + ',' + h;
          if (l[g]) continue;
          ((l[g] = !0),
            f(
              "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
              MC(e[p]) ? 'Removing' : 'Updating',
              p,
              h
            ));
        }
      }
    }
  }
  var kC = {
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
    NC = dt({ menuitem: !0 }, kC),
    PC = '__html';
  function lp(e, t) {
    if (t) {
      if (NC[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
          !(PC in t.dangerouslySetInnerHTML)
        )
          throw new Error(
            '`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.'
          );
      }
      if (
        (!t.suppressContentEditableWarning &&
          t.contentEditable &&
          t.children != null &&
          f(
            'A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.'
          ),
        t.style != null && typeof t.style != 'object')
      )
        throw new Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
    }
  }
  function eo(e, t) {
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
  var yc = {
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
    lg = {
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
    jo = {},
    zC = new RegExp('^(aria)-[' + Ie + ']*$'),
    FC = new RegExp('^(aria)[A-Z][' + Ie + ']*$');
  function UC(e, t) {
    {
      if (pt.call(jo, t) && jo[t]) return !0;
      if (FC.test(t)) {
        var n = 'aria-' + t.slice(4).toLowerCase(),
          i = lg.hasOwnProperty(n) ? n : null;
        if (i == null)
          return (
            f(
              'Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.',
              t
            ),
            (jo[t] = !0),
            !0
          );
        if (t !== i)
          return (
            f('Invalid ARIA attribute `%s`. Did you mean `%s`?', t, i),
            (jo[t] = !0),
            !0
          );
      }
      if (zC.test(t)) {
        var l = t.toLowerCase(),
          c = lg.hasOwnProperty(l) ? l : null;
        if (c == null) return ((jo[t] = !0), !1);
        if (t !== c)
          return (
            f('Unknown ARIA attribute `%s`. Did you mean `%s`?', t, c),
            (jo[t] = !0),
            !0
          );
      }
    }
    return !0;
  }
  function IC(e, t) {
    {
      var n = [];
      for (var i in t) {
        var l = UC(e, i);
        l || n.push(i);
      }
      var c = n
        .map(function (p) {
          return '`' + p + '`';
        })
        .join(', ');
      n.length === 1
        ? f(
            'Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props',
            c,
            e
          )
        : n.length > 1 &&
          f(
            'Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props',
            c,
            e
          );
    }
  }
  function VC(e, t) {
    eo(e, t) || IC(e, t);
  }
  var ug = !1;
  function BC(e, t) {
    {
      if (e !== 'input' && e !== 'textarea' && e !== 'select') return;
      t != null &&
        t.value === null &&
        !ug &&
        ((ug = !0),
        e === 'select' && t.multiple
          ? f(
              '`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.',
              e
            )
          : f(
              '`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.',
              e
            ));
    }
  }
  var cg = function () {};
  {
    var Zn = {},
      fg = /^on./,
      HC = /^on[^A-Z]/,
      jC = new RegExp('^(aria)-[' + Ie + ']*$'),
      $C = new RegExp('^(aria)[A-Z][' + Ie + ']*$');
    cg = function (e, t, n, i) {
      if (pt.call(Zn, t) && Zn[t]) return !0;
      var l = t.toLowerCase();
      if (l === 'onfocusin' || l === 'onfocusout')
        return (
          f(
            'React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React.'
          ),
          (Zn[t] = !0),
          !0
        );
      if (i != null) {
        var c = i.registrationNameDependencies,
          p = i.possibleRegistrationNames;
        if (c.hasOwnProperty(t)) return !0;
        var h = p.hasOwnProperty(l) ? p[l] : null;
        if (h != null)
          return (
            f('Invalid event handler property `%s`. Did you mean `%s`?', t, h),
            (Zn[t] = !0),
            !0
          );
        if (fg.test(t))
          return (
            f('Unknown event handler property `%s`. It will be ignored.', t),
            (Zn[t] = !0),
            !0
          );
      } else if (fg.test(t))
        return (
          HC.test(t) &&
            f(
              'Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.',
              t
            ),
          (Zn[t] = !0),
          !0
        );
      if (jC.test(t) || $C.test(t)) return !0;
      if (l === 'innerhtml')
        return (
          f(
            'Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`.'
          ),
          (Zn[t] = !0),
          !0
        );
      if (l === 'aria')
        return (
          f(
            'The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead.'
          ),
          (Zn[t] = !0),
          !0
        );
      if (l === 'is' && n !== null && n !== void 0 && typeof n != 'string')
        return (
          f(
            'Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.',
            typeof n
          ),
          (Zn[t] = !0),
          !0
        );
      if (typeof n == 'number' && isNaN(n))
        return (
          f(
            'Received NaN for the `%s` attribute. If this is expected, cast the value to a string.',
            t
          ),
          (Zn[t] = !0),
          !0
        );
      var g = yr(t),
        E = g !== null && g.type === te;
      if (yc.hasOwnProperty(l)) {
        var x = yc[l];
        if (x !== t)
          return (
            f('Invalid DOM property `%s`. Did you mean `%s`?', t, x),
            (Zn[t] = !0),
            !0
          );
      } else if (!E && t !== l)
        return (
          f(
            'React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.',
            t,
            l
          ),
          (Zn[t] = !0),
          !0
        );
      return typeof n == 'boolean' && Nn(t, n, g, !1)
        ? (n
            ? f(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                n,
                t,
                t,
                n,
                t
              )
            : f(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                n,
                t,
                t,
                n,
                t,
                t,
                t
              ),
          (Zn[t] = !0),
          !0)
        : E
          ? !0
          : Nn(t, n, g, !1)
            ? ((Zn[t] = !0), !1)
            : ((n === 'false' || n === 'true') &&
                g !== null &&
                g.type === je &&
                (f(
                  'Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?',
                  n,
                  t,
                  n === 'false'
                    ? 'The browser will interpret it as a truthy value.'
                    : 'Although this works, it will not work as expected if you pass the string "false".',
                  t,
                  n
                ),
                (Zn[t] = !0)),
              !0);
    };
  }
  var YC = function (e, t, n) {
    {
      var i = [];
      for (var l in t) {
        var c = cg(e, l, t[l], n);
        c || i.push(l);
      }
      var p = i
        .map(function (h) {
          return '`' + h + '`';
        })
        .join(', ');
      i.length === 1
        ? f(
            'Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ',
            p,
            e
          )
        : i.length > 1 &&
          f(
            'Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ',
            p,
            e
          );
    }
  };
  function GC(e, t, n) {
    eo(e, t) || YC(e, t, n);
  }
  var dg = 1,
    up = 2,
    ll = 4,
    WC = dg | up | ll,
    ul = null;
  function qC(e) {
    (ul !== null &&
      f(
        'Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue.'
      ),
      (ul = e));
  }
  function XC() {
    (ul === null &&
      f(
        'Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue.'
      ),
      (ul = null));
  }
  function QC(e) {
    return e === ul;
  }
  function cp(e) {
    var t = e.target || e.srcElement || window;
    return (
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === Na ? t.parentNode : t
    );
  }
  var fp = null,
    $o = null,
    Yo = null;
  function pg(e) {
    var t = Ci(e);
    if (t) {
      if (typeof fp != 'function')
        throw new Error(
          'setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.'
        );
      var n = t.stateNode;
      if (n) {
        var i = ef(n);
        fp(t.stateNode, t.type, i);
      }
    }
  }
  function KC(e) {
    fp = e;
  }
  function vg(e) {
    $o ? (Yo ? Yo.push(e) : (Yo = [e])) : ($o = e);
  }
  function JC() {
    return $o !== null || Yo !== null;
  }
  function hg() {
    if ($o) {
      var e = $o,
        t = Yo;
      if ((($o = null), (Yo = null), pg(e), t))
        for (var n = 0; n < t.length; n++) pg(t[n]);
    }
  }
  var mg = function (e, t) {
      return e(t);
    },
    yg = function () {},
    dp = !1;
  function ZC() {
    var e = JC();
    e && (yg(), hg());
  }
  function gg(e, t, n) {
    if (dp) return e(t, n);
    dp = !0;
    try {
      return mg(e, t, n);
    } finally {
      ((dp = !1), ZC());
    }
  }
  function ex(e, t, n) {
    ((mg = e), (yg = n));
  }
  function tx(e) {
    return (
      e === 'button' || e === 'input' || e === 'select' || e === 'textarea'
    );
  }
  function nx(e, t, n) {
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
        return !!(n.disabled && tx(t));
      default:
        return !1;
    }
  }
  function cl(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var i = ef(n);
    if (i === null) return null;
    var l = i[t];
    if (nx(t, e.type, i)) return null;
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
  var pp = !1;
  if (st)
    try {
      var fl = {};
      (Object.defineProperty(fl, 'passive', {
        get: function () {
          pp = !0;
        },
      }),
        window.addEventListener('test', fl, fl),
        window.removeEventListener('test', fl, fl));
    } catch {
      pp = !1;
    }
  function bg(e, t, n, i, l, c, p, h, g) {
    var E = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, E);
    } catch (x) {
      this.onError(x);
    }
  }
  var Sg = bg;
  if (
    typeof window < 'u' &&
    typeof window.dispatchEvent == 'function' &&
    typeof document < 'u' &&
    typeof document.createEvent == 'function'
  ) {
    var vp = document.createElement('react');
    Sg = function (t, n, i, l, c, p, h, g, E) {
      if (typeof document > 'u' || document === null)
        throw new Error(
          'The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.'
        );
      var x = document.createEvent('Event'),
        U = !1,
        F = !0,
        G = window.event,
        J = Object.getOwnPropertyDescriptor(window, 'event');
      function re() {
        (vp.removeEventListener(ae, He, !1),
          typeof window.event < 'u' &&
            window.hasOwnProperty('event') &&
            (window.event = G));
      }
      var De = Array.prototype.slice.call(arguments, 3);
      function He() {
        ((U = !0), re(), n.apply(i, De), (F = !1));
      }
      var ze,
        Tt = !1,
        vt = !1;
      function H(j) {
        if (
          ((ze = j.error),
          (Tt = !0),
          ze === null && j.colno === 0 && j.lineno === 0 && (vt = !0),
          j.defaultPrevented && ze != null && typeof ze == 'object')
        )
          try {
            ze._suppressLogging = !0;
          } catch {}
      }
      var ae = 'react-' + (t || 'invokeguardedcallback');
      if (
        (window.addEventListener('error', H),
        vp.addEventListener(ae, He, !1),
        x.initEvent(ae, !1, !1),
        vp.dispatchEvent(x),
        J && Object.defineProperty(window, 'event', J),
        U &&
          F &&
          (Tt
            ? vt &&
              (ze = new Error(
                "A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information."
              ))
            : (ze = new Error(
                `An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`
              )),
          this.onError(ze)),
        window.removeEventListener('error', H),
        !U)
      )
        return (re(), bg.apply(this, arguments));
    };
  }
  var rx = Sg,
    Go = !1,
    gc = null,
    bc = !1,
    hp = null,
    ax = {
      onError: function (e) {
        ((Go = !0), (gc = e));
      },
    };
  function mp(e, t, n, i, l, c, p, h, g) {
    ((Go = !1), (gc = null), rx.apply(ax, arguments));
  }
  function ix(e, t, n, i, l, c, p, h, g) {
    if ((mp.apply(this, arguments), Go)) {
      var E = yp();
      bc || ((bc = !0), (hp = E));
    }
  }
  function ox() {
    if (bc) {
      var e = hp;
      throw ((bc = !1), (hp = null), e);
    }
  }
  function sx() {
    return Go;
  }
  function yp() {
    if (Go) {
      var e = gc;
      return ((Go = !1), (gc = null), e);
    } else
      throw new Error(
        'clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.'
      );
  }
  function Wo(e) {
    return e._reactInternals;
  }
  function lx(e) {
    return e._reactInternals !== void 0;
  }
  function ux(e, t) {
    e._reactInternals = t;
  }
  var Xe = 0,
    qo = 1,
    vn = 2,
    Et = 4,
    to = 16,
    dl = 32,
    gp = 64,
    Ot = 128,
    za = 256,
    yi = 512,
    no = 1024,
    jr = 2048,
    Fa = 4096,
    ro = 8192,
    Sc = 16384,
    cx = jr | Et | gp | yi | no | Sc,
    fx = 32767,
    pl = 32768,
    er = 65536,
    bp = 131072,
    Tg = 1048576,
    Sp = 2097152,
    ao = 4194304,
    Tp = 8388608,
    Ua = 16777216,
    Tc = 33554432,
    Ep = Et | no | 0,
    wp = vn | Et | to | dl | yi | Fa | ro,
    vl = Et | gp | yi | ro,
    Xo = jr | to,
    Ia = ao | Tp | Sp,
    dx = o.ReactCurrentOwner;
  function io(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      var i = t;
      do
        ((t = i),
          (t.flags & (vn | Fa)) !== Xe && (n = t.return),
          (i = t.return));
      while (i);
    }
    return t.tag === T ? n : null;
  }
  function Eg(e) {
    if (e.tag === z) {
      var t = e.memoizedState;
      if (t === null) {
        var n = e.alternate;
        n !== null && (t = n.memoizedState);
      }
      if (t !== null) return t.dehydrated;
    }
    return null;
  }
  function wg(e) {
    return e.tag === T ? e.stateNode.containerInfo : null;
  }
  function px(e) {
    return io(e) === e;
  }
  function vx(e) {
    {
      var t = dx.current;
      if (t !== null && t.tag === y) {
        var n = t,
          i = n.stateNode;
        (i._warnedAboutRefsInRender ||
          f(
            '%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.',
            ut(n) || 'A component'
          ),
          (i._warnedAboutRefsInRender = !0));
      }
    }
    var l = Wo(e);
    return l ? io(l) === l : !1;
  }
  function Cg(e) {
    if (io(e) !== e)
      throw new Error('Unable to find node on an unmounted component.');
  }
  function xg(e) {
    var t = e.alternate;
    if (!t) {
      var n = io(e);
      if (n === null)
        throw new Error('Unable to find node on an unmounted component.');
      return n !== e ? null : e;
    }
    for (var i = e, l = t; ; ) {
      var c = i.return;
      if (c === null) break;
      var p = c.alternate;
      if (p === null) {
        var h = c.return;
        if (h !== null) {
          i = l = h;
          continue;
        }
        break;
      }
      if (c.child === p.child) {
        for (var g = c.child; g; ) {
          if (g === i) return (Cg(c), e);
          if (g === l) return (Cg(c), t);
          g = g.sibling;
        }
        throw new Error('Unable to find node on an unmounted component.');
      }
      if (i.return !== l.return) ((i = c), (l = p));
      else {
        for (var E = !1, x = c.child; x; ) {
          if (x === i) {
            ((E = !0), (i = c), (l = p));
            break;
          }
          if (x === l) {
            ((E = !0), (l = c), (i = p));
            break;
          }
          x = x.sibling;
        }
        if (!E) {
          for (x = p.child; x; ) {
            if (x === i) {
              ((E = !0), (i = p), (l = c));
              break;
            }
            if (x === l) {
              ((E = !0), (l = p), (i = c));
              break;
            }
            x = x.sibling;
          }
          if (!E)
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
    if (i.tag !== T)
      throw new Error('Unable to find node on an unmounted component.');
    return i.stateNode.current === i ? e : t;
  }
  function _g(e) {
    var t = xg(e);
    return t !== null ? Rg(t) : null;
  }
  function Rg(e) {
    if (e.tag === R || e.tag === D) return e;
    for (var t = e.child; t !== null; ) {
      var n = Rg(t);
      if (n !== null) return n;
      t = t.sibling;
    }
    return null;
  }
  function hx(e) {
    var t = xg(e);
    return t !== null ? Dg(t) : null;
  }
  function Dg(e) {
    if (e.tag === R || e.tag === D) return e;
    for (var t = e.child; t !== null; ) {
      if (t.tag !== w) {
        var n = Dg(t);
        if (n !== null) return n;
      }
      t = t.sibling;
    }
    return null;
  }
  var Og = a.unstable_scheduleCallback,
    mx = a.unstable_cancelCallback,
    yx = a.unstable_shouldYield,
    gx = a.unstable_requestPaint,
    On = a.unstable_now,
    bx = a.unstable_getCurrentPriorityLevel,
    Ec = a.unstable_ImmediatePriority,
    Cp = a.unstable_UserBlockingPriority,
    oo = a.unstable_NormalPriority,
    Sx = a.unstable_LowPriority,
    xp = a.unstable_IdlePriority,
    Tx = a.unstable_yieldValue,
    Ex = a.unstable_setDisableYieldValue,
    Qo = null,
    Gn = null,
    Ae = null,
    ca = !1,
    $r = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u';
  function wx(e) {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u') return !1;
    var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (t.isDisabled) return !0;
    if (!t.supportsFiber)
      return (
        f(
          'The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools'
        ),
        !0
      );
    try {
      (Ve && (e = dt({}, e, { getLaneLabelMap: Ox, injectProfilingHooks: Dx })),
        (Qo = t.inject(e)),
        (Gn = t));
    } catch (n) {
      f('React instrumentation encountered an error: %s.', n);
    }
    return !!t.checkDCE;
  }
  function Cx(e, t) {
    if (Gn && typeof Gn.onScheduleFiberRoot == 'function')
      try {
        Gn.onScheduleFiberRoot(Qo, e, t);
      } catch (n) {
        ca ||
          ((ca = !0), f('React instrumentation encountered an error: %s', n));
      }
  }
  function xx(e, t) {
    if (Gn && typeof Gn.onCommitFiberRoot == 'function')
      try {
        var n = (e.current.flags & Ot) === Ot;
        if (Q) {
          var i;
          switch (t) {
            case Er:
              i = Ec;
              break;
            case Ba:
              i = Cp;
              break;
            case Ha:
              i = oo;
              break;
            case Oc:
              i = xp;
              break;
            default:
              i = oo;
              break;
          }
          Gn.onCommitFiberRoot(Qo, e, i, n);
        }
      } catch (l) {
        ca ||
          ((ca = !0), f('React instrumentation encountered an error: %s', l));
      }
  }
  function _x(e) {
    if (Gn && typeof Gn.onPostCommitFiberRoot == 'function')
      try {
        Gn.onPostCommitFiberRoot(Qo, e);
      } catch (t) {
        ca ||
          ((ca = !0), f('React instrumentation encountered an error: %s', t));
      }
  }
  function Rx(e) {
    if (Gn && typeof Gn.onCommitFiberUnmount == 'function')
      try {
        Gn.onCommitFiberUnmount(Qo, e);
      } catch (t) {
        ca ||
          ((ca = !0), f('React instrumentation encountered an error: %s', t));
      }
  }
  function An(e) {
    if (
      (typeof Tx == 'function' && (Ex(e), u(e)),
      Gn && typeof Gn.setStrictMode == 'function')
    )
      try {
        Gn.setStrictMode(Qo, e);
      } catch (t) {
        ca ||
          ((ca = !0), f('React instrumentation encountered an error: %s', t));
      }
  }
  function Dx(e) {
    Ae = e;
  }
  function Ox() {
    {
      for (var e = new Map(), t = 1, n = 0; n < Rp; n++) {
        var i = Xx(t);
        (e.set(t, i), (t *= 2));
      }
      return e;
    }
  }
  function Ax(e) {
    Ae !== null &&
      typeof Ae.markCommitStarted == 'function' &&
      Ae.markCommitStarted(e);
  }
  function Ag() {
    Ae !== null &&
      typeof Ae.markCommitStopped == 'function' &&
      Ae.markCommitStopped();
  }
  function hl(e) {
    Ae !== null &&
      typeof Ae.markComponentRenderStarted == 'function' &&
      Ae.markComponentRenderStarted(e);
  }
  function Ko() {
    Ae !== null &&
      typeof Ae.markComponentRenderStopped == 'function' &&
      Ae.markComponentRenderStopped();
  }
  function Mx(e) {
    Ae !== null &&
      typeof Ae.markComponentPassiveEffectMountStarted == 'function' &&
      Ae.markComponentPassiveEffectMountStarted(e);
  }
  function Lx() {
    Ae !== null &&
      typeof Ae.markComponentPassiveEffectMountStopped == 'function' &&
      Ae.markComponentPassiveEffectMountStopped();
  }
  function kx(e) {
    Ae !== null &&
      typeof Ae.markComponentPassiveEffectUnmountStarted == 'function' &&
      Ae.markComponentPassiveEffectUnmountStarted(e);
  }
  function Nx() {
    Ae !== null &&
      typeof Ae.markComponentPassiveEffectUnmountStopped == 'function' &&
      Ae.markComponentPassiveEffectUnmountStopped();
  }
  function Px(e) {
    Ae !== null &&
      typeof Ae.markComponentLayoutEffectMountStarted == 'function' &&
      Ae.markComponentLayoutEffectMountStarted(e);
  }
  function zx() {
    Ae !== null &&
      typeof Ae.markComponentLayoutEffectMountStopped == 'function' &&
      Ae.markComponentLayoutEffectMountStopped();
  }
  function Mg(e) {
    Ae !== null &&
      typeof Ae.markComponentLayoutEffectUnmountStarted == 'function' &&
      Ae.markComponentLayoutEffectUnmountStarted(e);
  }
  function Lg() {
    Ae !== null &&
      typeof Ae.markComponentLayoutEffectUnmountStopped == 'function' &&
      Ae.markComponentLayoutEffectUnmountStopped();
  }
  function Fx(e, t, n) {
    Ae !== null &&
      typeof Ae.markComponentErrored == 'function' &&
      Ae.markComponentErrored(e, t, n);
  }
  function Ux(e, t, n) {
    Ae !== null &&
      typeof Ae.markComponentSuspended == 'function' &&
      Ae.markComponentSuspended(e, t, n);
  }
  function Ix(e) {
    Ae !== null &&
      typeof Ae.markLayoutEffectsStarted == 'function' &&
      Ae.markLayoutEffectsStarted(e);
  }
  function Vx() {
    Ae !== null &&
      typeof Ae.markLayoutEffectsStopped == 'function' &&
      Ae.markLayoutEffectsStopped();
  }
  function Bx(e) {
    Ae !== null &&
      typeof Ae.markPassiveEffectsStarted == 'function' &&
      Ae.markPassiveEffectsStarted(e);
  }
  function Hx() {
    Ae !== null &&
      typeof Ae.markPassiveEffectsStopped == 'function' &&
      Ae.markPassiveEffectsStopped();
  }
  function kg(e) {
    Ae !== null &&
      typeof Ae.markRenderStarted == 'function' &&
      Ae.markRenderStarted(e);
  }
  function jx() {
    Ae !== null &&
      typeof Ae.markRenderYielded == 'function' &&
      Ae.markRenderYielded();
  }
  function Ng() {
    Ae !== null &&
      typeof Ae.markRenderStopped == 'function' &&
      Ae.markRenderStopped();
  }
  function $x(e) {
    Ae !== null &&
      typeof Ae.markRenderScheduled == 'function' &&
      Ae.markRenderScheduled(e);
  }
  function Yx(e, t) {
    Ae !== null &&
      typeof Ae.markForceUpdateScheduled == 'function' &&
      Ae.markForceUpdateScheduled(e, t);
  }
  function _p(e, t) {
    Ae !== null &&
      typeof Ae.markStateUpdateScheduled == 'function' &&
      Ae.markStateUpdateScheduled(e, t);
  }
  var $e = 0,
    bt = 1,
    zt = 2,
    ln = 8,
    fa = 16,
    Pg = Math.clz32 ? Math.clz32 : qx,
    Gx = Math.log,
    Wx = Math.LN2;
  function qx(e) {
    var t = e >>> 0;
    return t === 0 ? 32 : (31 - ((Gx(t) / Wx) | 0)) | 0;
  }
  var Rp = 31,
    ve = 0,
    Mn = 0,
    rt = 1,
    Jo = 2,
    Va = 4,
    so = 8,
    da = 16,
    ml = 32,
    Zo = 4194240,
    yl = 64,
    Dp = 128,
    Op = 256,
    Ap = 512,
    Mp = 1024,
    Lp = 2048,
    kp = 4096,
    Np = 8192,
    Pp = 16384,
    zp = 32768,
    Fp = 65536,
    Up = 131072,
    Ip = 262144,
    Vp = 524288,
    Bp = 1048576,
    Hp = 2097152,
    wc = 130023424,
    es = 4194304,
    jp = 8388608,
    $p = 16777216,
    Yp = 33554432,
    Gp = 67108864,
    zg = es,
    gl = 134217728,
    Fg = 268435455,
    bl = 268435456,
    lo = 536870912,
    Sr = 1073741824;
  function Xx(e) {
    {
      if (e & rt) return 'Sync';
      if (e & Jo) return 'InputContinuousHydration';
      if (e & Va) return 'InputContinuous';
      if (e & so) return 'DefaultHydration';
      if (e & da) return 'Default';
      if (e & ml) return 'TransitionHydration';
      if (e & Zo) return 'Transition';
      if (e & wc) return 'Retry';
      if (e & gl) return 'SelectiveHydration';
      if (e & bl) return 'IdleHydration';
      if (e & lo) return 'Idle';
      if (e & Sr) return 'Offscreen';
    }
  }
  var Wt = -1,
    Cc = yl,
    xc = es;
  function Sl(e) {
    switch (uo(e)) {
      case rt:
        return rt;
      case Jo:
        return Jo;
      case Va:
        return Va;
      case so:
        return so;
      case da:
        return da;
      case ml:
        return ml;
      case yl:
      case Dp:
      case Op:
      case Ap:
      case Mp:
      case Lp:
      case kp:
      case Np:
      case Pp:
      case zp:
      case Fp:
      case Up:
      case Ip:
      case Vp:
      case Bp:
      case Hp:
        return e & Zo;
      case es:
      case jp:
      case $p:
      case Yp:
      case Gp:
        return e & wc;
      case gl:
        return gl;
      case bl:
        return bl;
      case lo:
        return lo;
      case Sr:
        return Sr;
      default:
        return (
          f('Should have found matching lanes. This is a bug in React.'),
          e
        );
    }
  }
  function _c(e, t) {
    var n = e.pendingLanes;
    if (n === ve) return ve;
    var i = ve,
      l = e.suspendedLanes,
      c = e.pingedLanes,
      p = n & Fg;
    if (p !== ve) {
      var h = p & ~l;
      if (h !== ve) i = Sl(h);
      else {
        var g = p & c;
        g !== ve && (i = Sl(g));
      }
    } else {
      var E = n & ~l;
      E !== ve ? (i = Sl(E)) : c !== ve && (i = Sl(c));
    }
    if (i === ve) return ve;
    if (t !== ve && t !== i && (t & l) === ve) {
      var x = uo(i),
        U = uo(t);
      if (x >= U || (x === da && (U & Zo) !== ve)) return t;
    }
    (i & Va) !== ve && (i |= n & da);
    var F = e.entangledLanes;
    if (F !== ve)
      for (var G = e.entanglements, J = i & F; J > 0; ) {
        var re = co(J),
          De = 1 << re;
        ((i |= G[re]), (J &= ~De));
      }
    return i;
  }
  function Qx(e, t) {
    for (var n = e.eventTimes, i = Wt; t > 0; ) {
      var l = co(t),
        c = 1 << l,
        p = n[l];
      (p > i && (i = p), (t &= ~c));
    }
    return i;
  }
  function Kx(e, t) {
    switch (e) {
      case rt:
      case Jo:
      case Va:
        return t + 250;
      case so:
      case da:
      case ml:
      case yl:
      case Dp:
      case Op:
      case Ap:
      case Mp:
      case Lp:
      case kp:
      case Np:
      case Pp:
      case zp:
      case Fp:
      case Up:
      case Ip:
      case Vp:
      case Bp:
      case Hp:
        return t + 5e3;
      case es:
      case jp:
      case $p:
      case Yp:
      case Gp:
        return Wt;
      case gl:
      case bl:
      case lo:
      case Sr:
        return Wt;
      default:
        return (
          f('Should have found matching lanes. This is a bug in React.'),
          Wt
        );
    }
  }
  function Jx(e, t) {
    for (
      var n = e.pendingLanes,
        i = e.suspendedLanes,
        l = e.pingedLanes,
        c = e.expirationTimes,
        p = n;
      p > 0;

    ) {
      var h = co(p),
        g = 1 << h,
        E = c[h];
      (E === Wt
        ? ((g & i) === ve || (g & l) !== ve) && (c[h] = Kx(g, t))
        : E <= t && (e.expiredLanes |= g),
        (p &= ~g));
    }
  }
  function Zx(e) {
    return Sl(e.pendingLanes);
  }
  function Wp(e) {
    var t = e.pendingLanes & ~Sr;
    return t !== ve ? t : t & Sr ? Sr : ve;
  }
  function e_(e) {
    return (e & rt) !== ve;
  }
  function qp(e) {
    return (e & Fg) !== ve;
  }
  function Ug(e) {
    return (e & wc) === e;
  }
  function t_(e) {
    var t = rt | Va | da;
    return (e & t) === ve;
  }
  function n_(e) {
    return (e & Zo) === e;
  }
  function Rc(e, t) {
    var n = Jo | Va | so | da;
    return (t & n) !== ve;
  }
  function r_(e, t) {
    return (t & e.expiredLanes) !== ve;
  }
  function Ig(e) {
    return (e & Zo) !== ve;
  }
  function Vg() {
    var e = Cc;
    return ((Cc <<= 1), (Cc & Zo) === ve && (Cc = yl), e);
  }
  function a_() {
    var e = xc;
    return ((xc <<= 1), (xc & wc) === ve && (xc = es), e);
  }
  function uo(e) {
    return e & -e;
  }
  function Tl(e) {
    return uo(e);
  }
  function co(e) {
    return 31 - Pg(e);
  }
  function Xp(e) {
    return co(e);
  }
  function Tr(e, t) {
    return (e & t) !== ve;
  }
  function ts(e, t) {
    return (e & t) === t;
  }
  function ct(e, t) {
    return e | t;
  }
  function Dc(e, t) {
    return e & ~t;
  }
  function Bg(e, t) {
    return e & t;
  }
  function CU(e) {
    return e;
  }
  function i_(e, t) {
    return e !== Mn && e < t ? e : t;
  }
  function Qp(e) {
    for (var t = [], n = 0; n < Rp; n++) t.push(e);
    return t;
  }
  function El(e, t, n) {
    ((e.pendingLanes |= t),
      t !== lo && ((e.suspendedLanes = ve), (e.pingedLanes = ve)));
    var i = e.eventTimes,
      l = Xp(t);
    i[l] = n;
  }
  function o_(e, t) {
    ((e.suspendedLanes |= t), (e.pingedLanes &= ~t));
    for (var n = e.expirationTimes, i = t; i > 0; ) {
      var l = co(i),
        c = 1 << l;
      ((n[l] = Wt), (i &= ~c));
    }
  }
  function Hg(e, t, n) {
    e.pingedLanes |= e.suspendedLanes & t;
  }
  function s_(e, t) {
    var n = e.pendingLanes & ~t;
    ((e.pendingLanes = t),
      (e.suspendedLanes = ve),
      (e.pingedLanes = ve),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t));
    for (
      var i = e.entanglements, l = e.eventTimes, c = e.expirationTimes, p = n;
      p > 0;

    ) {
      var h = co(p),
        g = 1 << h;
      ((i[h] = ve), (l[h] = Wt), (c[h] = Wt), (p &= ~g));
    }
  }
  function Kp(e, t) {
    for (var n = (e.entangledLanes |= t), i = e.entanglements, l = n; l; ) {
      var c = co(l),
        p = 1 << c;
      ((p & t) | (i[c] & t) && (i[c] |= t), (l &= ~p));
    }
  }
  function l_(e, t) {
    var n = uo(t),
      i;
    switch (n) {
      case Va:
        i = Jo;
        break;
      case da:
        i = so;
        break;
      case yl:
      case Dp:
      case Op:
      case Ap:
      case Mp:
      case Lp:
      case kp:
      case Np:
      case Pp:
      case zp:
      case Fp:
      case Up:
      case Ip:
      case Vp:
      case Bp:
      case Hp:
      case es:
      case jp:
      case $p:
      case Yp:
      case Gp:
        i = ml;
        break;
      case lo:
        i = bl;
        break;
      default:
        i = Mn;
        break;
    }
    return (i & (e.suspendedLanes | t)) !== Mn ? Mn : i;
  }
  function jg(e, t, n) {
    if ($r)
      for (var i = e.pendingUpdatersLaneMap; n > 0; ) {
        var l = Xp(n),
          c = 1 << l,
          p = i[l];
        (p.add(t), (n &= ~c));
      }
  }
  function $g(e, t) {
    if ($r)
      for (var n = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
        var l = Xp(t),
          c = 1 << l,
          p = n[l];
        (p.size > 0 &&
          (p.forEach(function (h) {
            var g = h.alternate;
            (g === null || !i.has(g)) && i.add(h);
          }),
          p.clear()),
          (t &= ~c));
      }
  }
  function Yg(e, t) {
    return null;
  }
  var Er = rt,
    Ba = Va,
    Ha = da,
    Oc = lo,
    wl = Mn;
  function Yr() {
    return wl;
  }
  function Ln(e) {
    wl = e;
  }
  function u_(e, t) {
    var n = wl;
    try {
      return ((wl = e), t());
    } finally {
      wl = n;
    }
  }
  function c_(e, t) {
    return e !== 0 && e < t ? e : t;
  }
  function f_(e, t) {
    return e === 0 || e > t ? e : t;
  }
  function Jp(e, t) {
    return e !== 0 && e < t;
  }
  function Gg(e) {
    var t = uo(e);
    return Jp(Er, t) ? (Jp(Ba, t) ? (qp(t) ? Ha : Oc) : Ba) : Er;
  }
  function Ac(e) {
    var t = e.current.memoizedState;
    return t.isDehydrated;
  }
  var Wg;
  function d_(e) {
    Wg = e;
  }
  function p_(e) {
    Wg(e);
  }
  var Zp;
  function v_(e) {
    Zp = e;
  }
  var qg;
  function h_(e) {
    qg = e;
  }
  var Xg;
  function m_(e) {
    Xg = e;
  }
  var Qg;
  function y_(e) {
    Qg = e;
  }
  var ev = !1,
    Mc = [],
    gi = null,
    bi = null,
    Si = null,
    Cl = new Map(),
    xl = new Map(),
    Ti = [],
    g_ = [
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
  function b_(e) {
    return g_.indexOf(e) > -1;
  }
  function S_(e, t, n, i, l) {
    return {
      blockedOn: e,
      domEventName: t,
      eventSystemFlags: n,
      nativeEvent: l,
      targetContainers: [i],
    };
  }
  function Kg(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        gi = null;
        break;
      case 'dragenter':
      case 'dragleave':
        bi = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Si = null;
        break;
      case 'pointerover':
      case 'pointerout': {
        var n = t.pointerId;
        Cl.delete(n);
        break;
      }
      case 'gotpointercapture':
      case 'lostpointercapture': {
        var i = t.pointerId;
        xl.delete(i);
        break;
      }
    }
  }
  function _l(e, t, n, i, l, c) {
    if (e === null || e.nativeEvent !== c) {
      var p = S_(t, n, i, l, c);
      if (t !== null) {
        var h = Ci(t);
        h !== null && Zp(h);
      }
      return p;
    }
    e.eventSystemFlags |= i;
    var g = e.targetContainers;
    return (l !== null && g.indexOf(l) === -1 && g.push(l), e);
  }
  function T_(e, t, n, i, l) {
    switch (t) {
      case 'focusin': {
        var c = l;
        return ((gi = _l(gi, e, t, n, i, c)), !0);
      }
      case 'dragenter': {
        var p = l;
        return ((bi = _l(bi, e, t, n, i, p)), !0);
      }
      case 'mouseover': {
        var h = l;
        return ((Si = _l(Si, e, t, n, i, h)), !0);
      }
      case 'pointerover': {
        var g = l,
          E = g.pointerId;
        return (Cl.set(E, _l(Cl.get(E) || null, e, t, n, i, g)), !0);
      }
      case 'gotpointercapture': {
        var x = l,
          U = x.pointerId;
        return (xl.set(U, _l(xl.get(U) || null, e, t, n, i, x)), !0);
      }
    }
    return !1;
  }
  function Jg(e) {
    var t = vo(e.target);
    if (t !== null) {
      var n = io(t);
      if (n !== null) {
        var i = n.tag;
        if (i === z) {
          var l = Eg(n);
          if (l !== null) {
            ((e.blockedOn = l),
              Qg(e.priority, function () {
                qg(n);
              }));
            return;
          }
        } else if (i === T) {
          var c = n.stateNode;
          if (Ac(c)) {
            e.blockedOn = wg(n);
            return;
          }
        }
      }
    }
    e.blockedOn = null;
  }
  function E_(e) {
    for (
      var t = Xg(), n = { blockedOn: null, target: e, priority: t }, i = 0;
      i < Ti.length && Jp(t, Ti[i].priority);
      i++
    );
    (Ti.splice(i, 0, n), i === 0 && Jg(n));
  }
  function Lc(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; t.length > 0; ) {
      var n = t[0],
        i = rv(e.domEventName, e.eventSystemFlags, n, e.nativeEvent);
      if (i === null) {
        var l = e.nativeEvent,
          c = new l.constructor(l.type, l);
        (qC(c), l.target.dispatchEvent(c), XC());
      } else {
        var p = Ci(i);
        return (p !== null && Zp(p), (e.blockedOn = i), !1);
      }
      t.shift();
    }
    return !0;
  }
  function Zg(e, t, n) {
    Lc(e) && n.delete(t);
  }
  function w_() {
    ((ev = !1),
      gi !== null && Lc(gi) && (gi = null),
      bi !== null && Lc(bi) && (bi = null),
      Si !== null && Lc(Si) && (Si = null),
      Cl.forEach(Zg),
      xl.forEach(Zg));
  }
  function Rl(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      ev ||
        ((ev = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, w_)));
  }
  function Dl(e) {
    if (Mc.length > 0) {
      Rl(Mc[0], e);
      for (var t = 1; t < Mc.length; t++) {
        var n = Mc[t];
        n.blockedOn === e && (n.blockedOn = null);
      }
    }
    (gi !== null && Rl(gi, e),
      bi !== null && Rl(bi, e),
      Si !== null && Rl(Si, e));
    var i = function (h) {
      return Rl(h, e);
    };
    (Cl.forEach(i), xl.forEach(i));
    for (var l = 0; l < Ti.length; l++) {
      var c = Ti[l];
      c.blockedOn === e && (c.blockedOn = null);
    }
    for (; Ti.length > 0; ) {
      var p = Ti[0];
      if (p.blockedOn !== null) break;
      (Jg(p), p.blockedOn === null && Ti.shift());
    }
  }
  var ns = o.ReactCurrentBatchConfig,
    tv = !0;
  function eb(e) {
    tv = !!e;
  }
  function C_() {
    return tv;
  }
  function x_(e, t, n) {
    var i = tb(t),
      l;
    switch (i) {
      case Er:
        l = __;
        break;
      case Ba:
        l = R_;
        break;
      case Ha:
      default:
        l = nv;
        break;
    }
    return l.bind(null, t, n, e);
  }
  function __(e, t, n, i) {
    var l = Yr(),
      c = ns.transition;
    ns.transition = null;
    try {
      (Ln(Er), nv(e, t, n, i));
    } finally {
      (Ln(l), (ns.transition = c));
    }
  }
  function R_(e, t, n, i) {
    var l = Yr(),
      c = ns.transition;
    ns.transition = null;
    try {
      (Ln(Ba), nv(e, t, n, i));
    } finally {
      (Ln(l), (ns.transition = c));
    }
  }
  function nv(e, t, n, i) {
    tv && D_(e, t, n, i);
  }
  function D_(e, t, n, i) {
    var l = rv(e, t, n, i);
    if (l === null) {
      (yv(e, t, i, kc, n), Kg(e, i));
      return;
    }
    if (T_(l, e, t, n, i)) {
      i.stopPropagation();
      return;
    }
    if ((Kg(e, i), t & ll && b_(e))) {
      for (; l !== null; ) {
        var c = Ci(l);
        c !== null && p_(c);
        var p = rv(e, t, n, i);
        if ((p === null && yv(e, t, i, kc, n), p === l)) break;
        l = p;
      }
      l !== null && i.stopPropagation();
      return;
    }
    yv(e, t, i, null, n);
  }
  var kc = null;
  function rv(e, t, n, i) {
    kc = null;
    var l = cp(i),
      c = vo(l);
    if (c !== null) {
      var p = io(c);
      if (p === null) c = null;
      else {
        var h = p.tag;
        if (h === z) {
          var g = Eg(p);
          if (g !== null) return g;
          c = null;
        } else if (h === T) {
          var E = p.stateNode;
          if (Ac(E)) return wg(p);
          c = null;
        } else p !== c && (c = null);
      }
    }
    return ((kc = c), null);
  }
  function tb(e) {
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
        return Er;
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
        return Ba;
      case 'message': {
        var t = bx();
        switch (t) {
          case Ec:
            return Er;
          case Cp:
            return Ba;
          case oo:
          case Sx:
            return Ha;
          case xp:
            return Oc;
          default:
            return Ha;
        }
      }
      default:
        return Ha;
    }
  }
  function O_(e, t, n) {
    return (e.addEventListener(t, n, !1), n);
  }
  function A_(e, t, n) {
    return (e.addEventListener(t, n, !0), n);
  }
  function M_(e, t, n, i) {
    return (e.addEventListener(t, n, { capture: !0, passive: i }), n);
  }
  function L_(e, t, n, i) {
    return (e.addEventListener(t, n, { passive: i }), n);
  }
  var Ol = null,
    av = null,
    Al = null;
  function k_(e) {
    return ((Ol = e), (av = rb()), !0);
  }
  function N_() {
    ((Ol = null), (av = null), (Al = null));
  }
  function nb() {
    if (Al) return Al;
    var e,
      t = av,
      n = t.length,
      i,
      l = rb(),
      c = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var p = n - e;
    for (i = 1; i <= p && t[n - i] === l[c - i]; i++);
    var h = i > 1 ? 1 - i : void 0;
    return ((Al = l.slice(e, h)), Al);
  }
  function rb() {
    return 'value' in Ol ? Ol.value : Ol.textContent;
  }
  function Nc(e) {
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
  function Pc() {
    return !0;
  }
  function ab() {
    return !1;
  }
  function wr(e) {
    function t(n, i, l, c, p) {
      ((this._reactName = n),
        (this._targetInst = l),
        (this.type = i),
        (this.nativeEvent = c),
        (this.target = p),
        (this.currentTarget = null));
      for (var h in e)
        if (e.hasOwnProperty(h)) {
          var g = e[h];
          g ? (this[h] = g(c)) : (this[h] = c[h]);
        }
      var E =
        c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1;
      return (
        E ? (this.isDefaultPrevented = Pc) : (this.isDefaultPrevented = ab),
        (this.isPropagationStopped = ab),
        this
      );
    }
    return (
      dt(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
            (this.isDefaultPrevented = Pc));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = Pc));
        },
        persist: function () {},
        isPersistent: Pc,
      }),
      t
    );
  }
  var rs = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    iv = wr(rs),
    Ml = dt({}, rs, { view: 0, detail: 0 }),
    P_ = wr(Ml),
    ov,
    sv,
    Ll;
  function z_(e) {
    e !== Ll &&
      (Ll && e.type === 'mousemove'
        ? ((ov = e.screenX - Ll.screenX), (sv = e.screenY - Ll.screenY))
        : ((ov = 0), (sv = 0)),
      (Ll = e));
  }
  var zc = dt({}, Ml, {
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
      getModifierState: uv,
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
        return 'movementX' in e ? e.movementX : (z_(e), ov);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : sv;
      },
    }),
    ib = wr(zc),
    F_ = dt({}, zc, { dataTransfer: 0 }),
    U_ = wr(F_),
    I_ = dt({}, Ml, { relatedTarget: 0 }),
    lv = wr(I_),
    V_ = dt({}, rs, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    B_ = wr(V_),
    H_ = dt({}, rs, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    j_ = wr(H_),
    $_ = dt({}, rs, { data: 0 }),
    ob = wr($_),
    Y_ = ob,
    G_ = {
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
    W_ = {
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
  function q_(e) {
    if (e.key) {
      var t = G_[e.key] || e.key;
      if (t !== 'Unidentified') return t;
    }
    if (e.type === 'keypress') {
      var n = Nc(e);
      return n === 13 ? 'Enter' : String.fromCharCode(n);
    }
    return e.type === 'keydown' || e.type === 'keyup'
      ? W_[e.keyCode] || 'Unidentified'
      : '';
  }
  var X_ = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
  function Q_(e) {
    var t = this,
      n = t.nativeEvent;
    if (n.getModifierState) return n.getModifierState(e);
    var i = X_[e];
    return i ? !!n[i] : !1;
  }
  function uv(e) {
    return Q_;
  }
  var K_ = dt({}, Ml, {
      key: q_,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: uv,
      charCode: function (e) {
        return e.type === 'keypress' ? Nc(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? Nc(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    J_ = wr(K_),
    Z_ = dt({}, zc, {
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
    sb = wr(Z_),
    eR = dt({}, Ml, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: uv,
    }),
    tR = wr(eR),
    nR = dt({}, rs, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    rR = wr(nR),
    aR = dt({}, zc, {
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
    iR = wr(aR),
    oR = [9, 13, 27, 32],
    lb = 229,
    cv = st && 'CompositionEvent' in window,
    kl = null;
  st && 'documentMode' in document && (kl = document.documentMode);
  var sR = st && 'TextEvent' in window && !kl,
    ub = st && (!cv || (kl && kl > 8 && kl <= 11)),
    cb = 32,
    fb = String.fromCharCode(cb);
  function lR() {
    (et('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
      et('onCompositionEnd', [
        'compositionend',
        'focusout',
        'keydown',
        'keypress',
        'keyup',
        'mousedown',
      ]),
      et('onCompositionStart', [
        'compositionstart',
        'focusout',
        'keydown',
        'keypress',
        'keyup',
        'mousedown',
      ]),
      et('onCompositionUpdate', [
        'compositionupdate',
        'focusout',
        'keydown',
        'keypress',
        'keyup',
        'mousedown',
      ]));
  }
  var db = !1;
  function uR(e) {
    return (e.ctrlKey || e.altKey || e.metaKey) && !(e.ctrlKey && e.altKey);
  }
  function cR(e) {
    switch (e) {
      case 'compositionstart':
        return 'onCompositionStart';
      case 'compositionend':
        return 'onCompositionEnd';
      case 'compositionupdate':
        return 'onCompositionUpdate';
    }
  }
  function fR(e, t) {
    return e === 'keydown' && t.keyCode === lb;
  }
  function pb(e, t) {
    switch (e) {
      case 'keyup':
        return oR.indexOf(t.keyCode) !== -1;
      case 'keydown':
        return t.keyCode !== lb;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function vb(e) {
    var t = e.detail;
    return typeof t == 'object' && 'data' in t ? t.data : null;
  }
  function hb(e) {
    return e.locale === 'ko';
  }
  var as = !1;
  function dR(e, t, n, i, l) {
    var c, p;
    if (
      (cv
        ? (c = cR(t))
        : as
          ? pb(t, i) && (c = 'onCompositionEnd')
          : fR(t, i) && (c = 'onCompositionStart'),
      !c)
    )
      return null;
    ub &&
      !hb(i) &&
      (!as && c === 'onCompositionStart'
        ? (as = k_(l))
        : c === 'onCompositionEnd' && as && (p = nb()));
    var h = Bc(n, c);
    if (h.length > 0) {
      var g = new ob(c, t, null, i, l);
      if ((e.push({ event: g, listeners: h }), p)) g.data = p;
      else {
        var E = vb(i);
        E !== null && (g.data = E);
      }
    }
  }
  function pR(e, t) {
    switch (e) {
      case 'compositionend':
        return vb(t);
      case 'keypress':
        var n = t.which;
        return n !== cb ? null : ((db = !0), fb);
      case 'textInput':
        var i = t.data;
        return i === fb && db ? null : i;
      default:
        return null;
    }
  }
  function vR(e, t) {
    if (as) {
      if (e === 'compositionend' || (!cv && pb(e, t))) {
        var n = nb();
        return (N_(), (as = !1), n);
      }
      return null;
    }
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!uR(t)) {
          if (t.char && t.char.length > 1) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case 'compositionend':
        return ub && !hb(t) ? null : t.data;
      default:
        return null;
    }
  }
  function hR(e, t, n, i, l) {
    var c;
    if ((sR ? (c = pR(t, i)) : (c = vR(t, i)), !c)) return null;
    var p = Bc(n, 'onBeforeInput');
    if (p.length > 0) {
      var h = new Y_('onBeforeInput', 'beforeinput', null, i, l);
      (e.push({ event: h, listeners: p }), (h.data = c));
    }
  }
  function mR(e, t, n, i, l, c, p) {
    (dR(e, t, n, i, l), hR(e, t, n, i, l));
  }
  var yR = {
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
  function mb(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!yR[e.type] : t === 'textarea';
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
   */ function gR(e) {
    if (!st) return !1;
    var t = 'on' + e,
      n = t in document;
    if (!n) {
      var i = document.createElement('div');
      (i.setAttribute(t, 'return;'), (n = typeof i[t] == 'function'));
    }
    return n;
  }
  function bR() {
    et('onChange', [
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
  function yb(e, t, n, i) {
    vg(i);
    var l = Bc(t, 'onChange');
    if (l.length > 0) {
      var c = new iv('onChange', 'change', null, n, i);
      e.push({ event: c, listeners: l });
    }
  }
  var Nl = null,
    Pl = null;
  function SR(e) {
    var t = e.nodeName && e.nodeName.toLowerCase();
    return t === 'select' || (t === 'input' && e.type === 'file');
  }
  function TR(e) {
    var t = [];
    (yb(t, Pl, e, cp(e)), gg(ER, t));
  }
  function ER(e) {
    Pb(e, 0);
  }
  function Fc(e) {
    var t = cs(e);
    if (Io(t)) return e;
  }
  function wR(e, t) {
    if (e === 'change') return t;
  }
  var gb = !1;
  st &&
    (gb = gR('input') && (!document.documentMode || document.documentMode > 9));
  function CR(e, t) {
    ((Nl = e), (Pl = t), Nl.attachEvent('onpropertychange', Sb));
  }
  function bb() {
    Nl && (Nl.detachEvent('onpropertychange', Sb), (Nl = null), (Pl = null));
  }
  function Sb(e) {
    e.propertyName === 'value' && Fc(Pl) && TR(e);
  }
  function xR(e, t, n) {
    e === 'focusin' ? (bb(), CR(t, n)) : e === 'focusout' && bb();
  }
  function _R(e, t) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
      return Fc(Pl);
  }
  function RR(e) {
    var t = e.nodeName;
    return (
      t &&
      t.toLowerCase() === 'input' &&
      (e.type === 'checkbox' || e.type === 'radio')
    );
  }
  function DR(e, t) {
    if (e === 'click') return Fc(t);
  }
  function OR(e, t) {
    if (e === 'input' || e === 'change') return Fc(t);
  }
  function AR(e) {
    var t = e._wrapperState;
    !t || !t.controlled || e.type !== 'number' || nt(e, 'number', e.value);
  }
  function MR(e, t, n, i, l, c, p) {
    var h = n ? cs(n) : window,
      g,
      E;
    if (
      (SR(h)
        ? (g = wR)
        : mb(h)
          ? gb
            ? (g = OR)
            : ((g = _R), (E = xR))
          : RR(h) && (g = DR),
      g)
    ) {
      var x = g(t, n);
      if (x) {
        yb(e, x, i, l);
        return;
      }
    }
    (E && E(t, h, n), t === 'focusout' && AR(h));
  }
  function LR() {
    (ce('onMouseEnter', ['mouseout', 'mouseover']),
      ce('onMouseLeave', ['mouseout', 'mouseover']),
      ce('onPointerEnter', ['pointerout', 'pointerover']),
      ce('onPointerLeave', ['pointerout', 'pointerover']));
  }
  function kR(e, t, n, i, l, c, p) {
    var h = t === 'mouseover' || t === 'pointerover',
      g = t === 'mouseout' || t === 'pointerout';
    if (h && !QC(i)) {
      var E = i.relatedTarget || i.fromElement;
      if (E && (vo(E) || Ql(E))) return;
    }
    if (!(!g && !h)) {
      var x;
      if (l.window === l) x = l;
      else {
        var U = l.ownerDocument;
        U ? (x = U.defaultView || U.parentWindow) : (x = window);
      }
      var F, G;
      if (g) {
        var J = i.relatedTarget || i.toElement;
        if (((F = n), (G = J ? vo(J) : null), G !== null)) {
          var re = io(G);
          (G !== re || (G.tag !== R && G.tag !== D)) && (G = null);
        }
      } else ((F = null), (G = n));
      if (F !== G) {
        var De = ib,
          He = 'onMouseLeave',
          ze = 'onMouseEnter',
          Tt = 'mouse';
        (t === 'pointerout' || t === 'pointerover') &&
          ((De = sb),
          (He = 'onPointerLeave'),
          (ze = 'onPointerEnter'),
          (Tt = 'pointer'));
        var vt = F == null ? x : cs(F),
          H = G == null ? x : cs(G),
          ae = new De(He, Tt + 'leave', F, i, l);
        ((ae.target = vt), (ae.relatedTarget = H));
        var j = null,
          ye = vo(l);
        if (ye === n) {
          var ke = new De(ze, Tt + 'enter', G, i, l);
          ((ke.target = H), (ke.relatedTarget = vt), (j = ke));
        }
        r1(e, ae, j, F, G);
      }
    }
  }
  function NR(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Cr = typeof Object.is == 'function' ? Object.is : NR;
  function zl(e, t) {
    if (Cr(e, t)) return !0;
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
      var c = n[l];
      if (!pt.call(t, c) || !Cr(e[c], t[c])) return !1;
    }
    return !0;
  }
  function Tb(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function PR(e) {
    for (; e; ) {
      if (e.nextSibling) return e.nextSibling;
      e = e.parentNode;
    }
  }
  function Eb(e, t) {
    for (var n = Tb(e), i = 0, l = 0; n; ) {
      if (n.nodeType === Na) {
        if (((l = i + n.textContent.length), i <= t && l >= t))
          return { node: n, offset: t - i };
        i = l;
      }
      n = Tb(PR(n));
    }
  }
  function zR(e) {
    var t = e.ownerDocument,
      n = (t && t.defaultView) || window,
      i = n.getSelection && n.getSelection();
    if (!i || i.rangeCount === 0) return null;
    var l = i.anchorNode,
      c = i.anchorOffset,
      p = i.focusNode,
      h = i.focusOffset;
    try {
      (l.nodeType, p.nodeType);
    } catch {
      return null;
    }
    return FR(e, l, c, p, h);
  }
  function FR(e, t, n, i, l) {
    var c = 0,
      p = -1,
      h = -1,
      g = 0,
      E = 0,
      x = e,
      U = null;
    e: for (;;) {
      for (
        var F = null;
        x === t && (n === 0 || x.nodeType === Na) && (p = c + n),
          x === i && (l === 0 || x.nodeType === Na) && (h = c + l),
          x.nodeType === Na && (c += x.nodeValue.length),
          (F = x.firstChild) !== null;

      )
        ((U = x), (x = F));
      for (;;) {
        if (x === e) break e;
        if (
          (U === t && ++g === n && (p = c),
          U === i && ++E === l && (h = c),
          (F = x.nextSibling) !== null)
        )
          break;
        ((x = U), (U = x.parentNode));
      }
      x = F;
    }
    return p === -1 || h === -1 ? null : { start: p, end: h };
  }
  function UR(e, t) {
    var n = e.ownerDocument || document,
      i = (n && n.defaultView) || window;
    if (i.getSelection) {
      var l = i.getSelection(),
        c = e.textContent.length,
        p = Math.min(t.start, c),
        h = t.end === void 0 ? p : Math.min(t.end, c);
      if (!l.extend && p > h) {
        var g = h;
        ((h = p), (p = g));
      }
      var E = Eb(e, p),
        x = Eb(e, h);
      if (E && x) {
        if (
          l.rangeCount === 1 &&
          l.anchorNode === E.node &&
          l.anchorOffset === E.offset &&
          l.focusNode === x.node &&
          l.focusOffset === x.offset
        )
          return;
        var U = n.createRange();
        (U.setStart(E.node, E.offset),
          l.removeAllRanges(),
          p > h
            ? (l.addRange(U), l.extend(x.node, x.offset))
            : (U.setEnd(x.node, x.offset), l.addRange(U)));
      }
    }
  }
  function wb(e) {
    return e && e.nodeType === Na;
  }
  function Cb(e, t) {
    return !e || !t
      ? !1
      : e === t
        ? !0
        : wb(e)
          ? !1
          : wb(t)
            ? Cb(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1;
  }
  function IR(e) {
    return e && e.ownerDocument && Cb(e.ownerDocument.documentElement, e);
  }
  function VR(e) {
    try {
      return typeof e.contentWindow.location.href == 'string';
    } catch {
      return !1;
    }
  }
  function xb() {
    for (var e = window, t = hi(); t instanceof e.HTMLIFrameElement; ) {
      if (VR(t)) e = t.contentWindow;
      else return t;
      t = hi(e.document);
    }
    return t;
  }
  function fv(e) {
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
  function BR() {
    var e = xb();
    return { focusedElem: e, selectionRange: fv(e) ? jR(e) : null };
  }
  function HR(e) {
    var t = xb(),
      n = e.focusedElem,
      i = e.selectionRange;
    if (t !== n && IR(n)) {
      i !== null && fv(n) && $R(n, i);
      for (var l = [], c = n; (c = c.parentNode); )
        c.nodeType === cr &&
          l.push({ element: c, left: c.scrollLeft, top: c.scrollTop });
      typeof n.focus == 'function' && n.focus();
      for (var p = 0; p < l.length; p++) {
        var h = l[p];
        ((h.element.scrollLeft = h.left), (h.element.scrollTop = h.top));
      }
    }
  }
  function jR(e) {
    var t;
    return (
      'selectionStart' in e
        ? (t = { start: e.selectionStart, end: e.selectionEnd })
        : (t = zR(e)),
      t || { start: 0, end: 0 }
    );
  }
  function $R(e, t) {
    var n = t.start,
      i = t.end;
    (i === void 0 && (i = n),
      'selectionStart' in e
        ? ((e.selectionStart = n),
          (e.selectionEnd = Math.min(i, e.value.length)))
        : UR(e, t));
  }
  var YR = st && 'documentMode' in document && document.documentMode <= 11;
  function GR() {
    et('onSelect', [
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
  var is = null,
    dv = null,
    Fl = null,
    pv = !1;
  function WR(e) {
    if ('selectionStart' in e && fv(e))
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
  function qR(e) {
    return e.window === e
      ? e.document
      : e.nodeType === Pa
        ? e
        : e.ownerDocument;
  }
  function _b(e, t, n) {
    var i = qR(n);
    if (!(pv || is == null || is !== hi(i))) {
      var l = WR(is);
      if (!Fl || !zl(Fl, l)) {
        Fl = l;
        var c = Bc(dv, 'onSelect');
        if (c.length > 0) {
          var p = new iv('onSelect', 'select', null, t, n);
          (e.push({ event: p, listeners: c }), (p.target = is));
        }
      }
    }
  }
  function XR(e, t, n, i, l, c, p) {
    var h = n ? cs(n) : window;
    switch (t) {
      case 'focusin':
        (mb(h) || h.contentEditable === 'true') &&
          ((is = h), (dv = n), (Fl = null));
        break;
      case 'focusout':
        ((is = null), (dv = null), (Fl = null));
        break;
      case 'mousedown':
        pv = !0;
        break;
      case 'contextmenu':
      case 'mouseup':
      case 'dragend':
        ((pv = !1), _b(e, i, l));
        break;
      case 'selectionchange':
        if (YR) break;
      case 'keydown':
      case 'keyup':
        _b(e, i, l);
    }
  }
  function Uc(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit' + e] = 'webkit' + t),
      (n['Moz' + e] = 'moz' + t),
      n
    );
  }
  var os = {
      animationend: Uc('Animation', 'AnimationEnd'),
      animationiteration: Uc('Animation', 'AnimationIteration'),
      animationstart: Uc('Animation', 'AnimationStart'),
      transitionend: Uc('Transition', 'TransitionEnd'),
    },
    vv = {},
    Rb = {};
  st &&
    ((Rb = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete os.animationend.animation,
      delete os.animationiteration.animation,
      delete os.animationstart.animation),
    'TransitionEvent' in window || delete os.transitionend.transition);
  function Ic(e) {
    if (vv[e]) return vv[e];
    if (!os[e]) return e;
    var t = os[e];
    for (var n in t) if (t.hasOwnProperty(n) && n in Rb) return (vv[e] = t[n]);
    return e;
  }
  var Db = Ic('animationend'),
    Ob = Ic('animationiteration'),
    Ab = Ic('animationstart'),
    Mb = Ic('transitionend'),
    Lb = new Map(),
    kb = [
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
  function Ei(e, t) {
    (Lb.set(e, t), et(t, [e]));
  }
  function QR() {
    for (var e = 0; e < kb.length; e++) {
      var t = kb[e],
        n = t.toLowerCase(),
        i = t[0].toUpperCase() + t.slice(1);
      Ei(n, 'on' + i);
    }
    (Ei(Db, 'onAnimationEnd'),
      Ei(Ob, 'onAnimationIteration'),
      Ei(Ab, 'onAnimationStart'),
      Ei('dblclick', 'onDoubleClick'),
      Ei('focusin', 'onFocus'),
      Ei('focusout', 'onBlur'),
      Ei(Mb, 'onTransitionEnd'));
  }
  function KR(e, t, n, i, l, c, p) {
    var h = Lb.get(t);
    if (h !== void 0) {
      var g = iv,
        E = t;
      switch (t) {
        case 'keypress':
          if (Nc(i) === 0) return;
        case 'keydown':
        case 'keyup':
          g = J_;
          break;
        case 'focusin':
          ((E = 'focus'), (g = lv));
          break;
        case 'focusout':
          ((E = 'blur'), (g = lv));
          break;
        case 'beforeblur':
        case 'afterblur':
          g = lv;
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
          g = ib;
          break;
        case 'drag':
        case 'dragend':
        case 'dragenter':
        case 'dragexit':
        case 'dragleave':
        case 'dragover':
        case 'dragstart':
        case 'drop':
          g = U_;
          break;
        case 'touchcancel':
        case 'touchend':
        case 'touchmove':
        case 'touchstart':
          g = tR;
          break;
        case Db:
        case Ob:
        case Ab:
          g = B_;
          break;
        case Mb:
          g = rR;
          break;
        case 'scroll':
          g = P_;
          break;
        case 'wheel':
          g = iR;
          break;
        case 'copy':
        case 'cut':
        case 'paste':
          g = j_;
          break;
        case 'gotpointercapture':
        case 'lostpointercapture':
        case 'pointercancel':
        case 'pointerdown':
        case 'pointermove':
        case 'pointerout':
        case 'pointerover':
        case 'pointerup':
          g = sb;
          break;
      }
      var x = (c & ll) !== 0;
      {
        var U = !x && t === 'scroll',
          F = t1(n, h, i.type, x, U);
        if (F.length > 0) {
          var G = new g(h, E, null, i, l);
          e.push({ event: G, listeners: F });
        }
      }
    }
  }
  (QR(), LR(), bR(), GR(), lR());
  function JR(e, t, n, i, l, c, p) {
    KR(e, t, n, i, l, c);
    var h = (c & WC) === 0;
    h &&
      (kR(e, t, n, i, l),
      MR(e, t, n, i, l),
      XR(e, t, n, i, l),
      mR(e, t, n, i, l));
  }
  var Ul = [
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
    hv = new Set(
      ['cancel', 'close', 'invalid', 'load', 'scroll', 'toggle'].concat(Ul)
    );
  function Nb(e, t, n) {
    var i = e.type || 'unknown-event';
    ((e.currentTarget = n), ix(i, t, void 0, e), (e.currentTarget = null));
  }
  function ZR(e, t, n) {
    var i;
    if (n)
      for (var l = t.length - 1; l >= 0; l--) {
        var c = t[l],
          p = c.instance,
          h = c.currentTarget,
          g = c.listener;
        if (p !== i && e.isPropagationStopped()) return;
        (Nb(e, g, h), (i = p));
      }
    else
      for (var E = 0; E < t.length; E++) {
        var x = t[E],
          U = x.instance,
          F = x.currentTarget,
          G = x.listener;
        if (U !== i && e.isPropagationStopped()) return;
        (Nb(e, G, F), (i = U));
      }
  }
  function Pb(e, t) {
    for (var n = (t & ll) !== 0, i = 0; i < e.length; i++) {
      var l = e[i],
        c = l.event,
        p = l.listeners;
      ZR(c, p, n);
    }
    ox();
  }
  function e1(e, t, n, i, l) {
    var c = cp(n),
      p = [];
    (JR(p, e, i, n, c, t), Pb(p, t));
  }
  function Kt(e, t) {
    hv.has(e) ||
      f(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e
      );
    var n = !1,
      i = AD(t),
      l = a1(e, n);
    i.has(l) || (zb(t, e, up, n), i.add(l));
  }
  function mv(e, t, n) {
    hv.has(e) &&
      !t &&
      f(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        e
      );
    var i = 0;
    (t && (i |= ll), zb(n, e, i, t));
  }
  var Vc = '_reactListening' + Math.random().toString(36).slice(2);
  function Il(e) {
    if (!e[Vc]) {
      ((e[Vc] = !0),
        be.forEach(function (n) {
          n !== 'selectionchange' && (hv.has(n) || mv(n, !1, e), mv(n, !0, e));
        }));
      var t = e.nodeType === Pa ? e : e.ownerDocument;
      t !== null && (t[Vc] || ((t[Vc] = !0), mv('selectionchange', !1, t)));
    }
  }
  function zb(e, t, n, i, l) {
    var c = x_(e, t, n),
      p = void 0;
    (pp &&
      (t === 'touchstart' || t === 'touchmove' || t === 'wheel') &&
      (p = !0),
      (e = e),
      i
        ? p !== void 0
          ? M_(e, t, c, p)
          : A_(e, t, c)
        : p !== void 0
          ? L_(e, t, c, p)
          : O_(e, t, c));
  }
  function Fb(e, t) {
    return e === t || (e.nodeType === pn && e.parentNode === t);
  }
  function yv(e, t, n, i, l) {
    var c = i;
    if (!(t & dg) && !(t & up)) {
      var p = l;
      if (i !== null) {
        var h = i;
        e: for (;;) {
          if (h === null) return;
          var g = h.tag;
          if (g === T || g === w) {
            var E = h.stateNode.containerInfo;
            if (Fb(E, p)) break;
            if (g === w)
              for (var x = h.return; x !== null; ) {
                var U = x.tag;
                if (U === T || U === w) {
                  var F = x.stateNode.containerInfo;
                  if (Fb(F, p)) return;
                }
                x = x.return;
              }
            for (; E !== null; ) {
              var G = vo(E);
              if (G === null) return;
              var J = G.tag;
              if (J === R || J === D) {
                h = c = G;
                continue e;
              }
              E = E.parentNode;
            }
          }
          h = h.return;
        }
      }
    }
    gg(function () {
      return e1(e, t, n, c);
    });
  }
  function Vl(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function t1(e, t, n, i, l, c) {
    for (
      var p = t !== null ? t + 'Capture' : null,
        h = i ? p : t,
        g = [],
        E = e,
        x = null;
      E !== null;

    ) {
      var U = E,
        F = U.stateNode,
        G = U.tag;
      if (G === R && F !== null && ((x = F), h !== null)) {
        var J = cl(E, h);
        J != null && g.push(Vl(E, J, x));
      }
      if (l) break;
      E = E.return;
    }
    return g;
  }
  function Bc(e, t) {
    for (var n = t + 'Capture', i = [], l = e; l !== null; ) {
      var c = l,
        p = c.stateNode,
        h = c.tag;
      if (h === R && p !== null) {
        var g = p,
          E = cl(l, n);
        E != null && i.unshift(Vl(l, E, g));
        var x = cl(l, t);
        x != null && i.push(Vl(l, x, g));
      }
      l = l.return;
    }
    return i;
  }
  function ss(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== R);
    return e || null;
  }
  function n1(e, t) {
    for (var n = e, i = t, l = 0, c = n; c; c = ss(c)) l++;
    for (var p = 0, h = i; h; h = ss(h)) p++;
    for (; l - p > 0; ) ((n = ss(n)), l--);
    for (; p - l > 0; ) ((i = ss(i)), p--);
    for (var g = l; g--; ) {
      if (n === i || (i !== null && n === i.alternate)) return n;
      ((n = ss(n)), (i = ss(i)));
    }
    return null;
  }
  function Ub(e, t, n, i, l) {
    for (var c = t._reactName, p = [], h = n; h !== null && h !== i; ) {
      var g = h,
        E = g.alternate,
        x = g.stateNode,
        U = g.tag;
      if (E !== null && E === i) break;
      if (U === R && x !== null) {
        var F = x;
        if (l) {
          var G = cl(h, c);
          G != null && p.unshift(Vl(h, G, F));
        } else if (!l) {
          var J = cl(h, c);
          J != null && p.push(Vl(h, J, F));
        }
      }
      h = h.return;
    }
    p.length !== 0 && e.push({ event: t, listeners: p });
  }
  function r1(e, t, n, i, l) {
    var c = i && l ? n1(i, l) : null;
    (i !== null && Ub(e, t, i, c, !1),
      l !== null && n !== null && Ub(e, n, l, c, !0));
  }
  function a1(e, t) {
    return e + '__' + (t ? 'capture' : 'bubble');
  }
  var fr = !1,
    Bl = 'dangerouslySetInnerHTML',
    Hc = 'suppressContentEditableWarning',
    wi = 'suppressHydrationWarning',
    Ib = 'autoFocus',
    fo = 'children',
    po = 'style',
    jc = '__html',
    gv,
    $c,
    Hl,
    Vb,
    Yc,
    Bb,
    Hb;
  ((gv = { dialog: !0, webview: !0 }),
    ($c = function (e, t) {
      (VC(e, t),
        BC(e, t),
        GC(e, t, {
          registrationNameDependencies: ot,
          possibleRegistrationNames: Qe,
        }));
    }),
    (Bb = st && !document.documentMode),
    (Hl = function (e, t, n) {
      if (!fr) {
        var i = Gc(n),
          l = Gc(t);
        l !== i &&
          ((fr = !0),
          f(
            'Prop `%s` did not match. Server: %s Client: %s',
            e,
            JSON.stringify(l),
            JSON.stringify(i)
          ));
      }
    }),
    (Vb = function (e) {
      if (!fr) {
        fr = !0;
        var t = [];
        (e.forEach(function (n) {
          t.push(n);
        }),
          f('Extra attributes from the server: %s', t));
      }
    }),
    (Yc = function (e, t) {
      t === !1
        ? f(
            'Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
            e,
            e,
            e
          )
        : f(
            'Expected `%s` listener to be a function, instead got a value of `%s` type.',
            e,
            typeof t
          );
    }),
    (Hb = function (e, t) {
      var n =
        e.namespaceURI === ka
          ? e.ownerDocument.createElement(e.tagName)
          : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return ((n.innerHTML = t), n.innerHTML);
    }));
  var i1 = /\r\n?/g,
    o1 = /\u0000|\uFFFD/g;
  function Gc(e) {
    ee(e);
    var t = typeof e == 'string' ? e : '' + e;
    return t
      .replace(
        i1,
        `
`
      )
      .replace(o1, '');
  }
  function Wc(e, t, n, i) {
    var l = Gc(t),
      c = Gc(e);
    if (
      c !== l &&
      (i &&
        (fr ||
          ((fr = !0),
          f('Text content did not match. Server: "%s" Client: "%s"', c, l))),
      n && de)
    )
      throw new Error('Text content does not match server-rendered HTML.');
  }
  function jb(e) {
    return e.nodeType === Pa ? e : e.ownerDocument;
  }
  function s1() {}
  function qc(e) {
    e.onclick = s1;
  }
  function l1(e, t, n, i, l) {
    for (var c in i)
      if (i.hasOwnProperty(c)) {
        var p = i[c];
        if (c === po) (p && Object.freeze(p), og(t, p));
        else if (c === Bl) {
          var h = p ? p[jc] : void 0;
          h != null && tg(t, h);
        } else if (c === fo)
          if (typeof p == 'string') {
            var g = e !== 'textarea' || p !== '';
            g && mc(t, p);
          } else typeof p == 'number' && mc(t, '' + p);
        else
          c === Hc ||
            c === wi ||
            c === Ib ||
            (ot.hasOwnProperty(c)
              ? p != null &&
                (typeof p != 'function' && Yc(c, p),
                c === 'onScroll' && Kt('scroll', t))
              : p != null && Oa(t, c, p, l));
      }
  }
  function u1(e, t, n, i) {
    for (var l = 0; l < t.length; l += 2) {
      var c = t[l],
        p = t[l + 1];
      c === po
        ? og(e, p)
        : c === Bl
          ? tg(e, p)
          : c === fo
            ? mc(e, p)
            : Oa(e, c, p, i);
    }
  }
  function c1(e, t, n, i) {
    var l,
      c = jb(n),
      p,
      h = i;
    if ((h === ka && (h = rp(e)), h === ka)) {
      if (
        ((l = eo(e, t)),
        !l &&
          e !== e.toLowerCase() &&
          f(
            '<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.',
            e
          ),
        e === 'script')
      ) {
        var g = c.createElement('div');
        g.innerHTML = '<script><\/script>';
        var E = g.firstChild;
        p = g.removeChild(E);
      } else if (typeof t.is == 'string') p = c.createElement(e, { is: t.is });
      else if (((p = c.createElement(e)), e === 'select')) {
        var x = p;
        t.multiple ? (x.multiple = !0) : t.size && (x.size = t.size);
      }
    } else p = c.createElementNS(h, e);
    return (
      h === ka &&
        !l &&
        Object.prototype.toString.call(p) === '[object HTMLUnknownElement]' &&
        !pt.call(gv, e) &&
        ((gv[e] = !0),
        f(
          'The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.',
          e
        )),
      p
    );
  }
  function f1(e, t) {
    return jb(t).createTextNode(e);
  }
  function d1(e, t, n, i) {
    var l = eo(t, n);
    $c(t, n);
    var c;
    switch (t) {
      case 'dialog':
        (Kt('cancel', e), Kt('close', e), (c = n));
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        (Kt('load', e), (c = n));
        break;
      case 'video':
      case 'audio':
        for (var p = 0; p < Ul.length; p++) Kt(Ul[p], e);
        c = n;
        break;
      case 'source':
        (Kt('error', e), (c = n));
        break;
      case 'img':
      case 'image':
      case 'link':
        (Kt('error', e), Kt('load', e), (c = n));
        break;
      case 'details':
        (Kt('toggle', e), (c = n));
        break;
      case 'input':
        (N(e, n), (c = S(e, n)), Kt('invalid', e));
        break;
      case 'option':
        (jt(e, n), (c = n));
        break;
      case 'select':
        (ol(e, n), (c = il(e, n)), Kt('invalid', e));
        break;
      case 'textarea':
        (Jy(e, n), (c = tp(e, n)), Kt('invalid', e));
        break;
      default:
        c = n;
    }
    switch ((lp(t, c), l1(t, e, i, c, l), t)) {
      case 'input':
        (Ma(e), Te(e, n, !1));
        break;
      case 'textarea':
        (Ma(e), eg(e));
        break;
      case 'option':
        Qt(e, n);
        break;
      case 'select':
        ep(e, n);
        break;
      default:
        typeof c.onClick == 'function' && qc(e);
        break;
    }
  }
  function p1(e, t, n, i, l) {
    $c(t, i);
    var c = null,
      p,
      h;
    switch (t) {
      case 'input':
        ((p = S(e, n)), (h = S(e, i)), (c = []));
        break;
      case 'select':
        ((p = il(e, n)), (h = il(e, i)), (c = []));
        break;
      case 'textarea':
        ((p = tp(e, n)), (h = tp(e, i)), (c = []));
        break;
      default:
        ((p = n),
          (h = i),
          typeof p.onClick != 'function' &&
            typeof h.onClick == 'function' &&
            qc(e));
        break;
    }
    lp(t, h);
    var g,
      E,
      x = null;
    for (g in p)
      if (!(h.hasOwnProperty(g) || !p.hasOwnProperty(g) || p[g] == null))
        if (g === po) {
          var U = p[g];
          for (E in U) U.hasOwnProperty(E) && (x || (x = {}), (x[E] = ''));
        } else
          g === Bl ||
            g === fo ||
            g === Hc ||
            g === wi ||
            g === Ib ||
            (ot.hasOwnProperty(g)
              ? c || (c = [])
              : (c = c || []).push(g, null));
    for (g in h) {
      var F = h[g],
        G = p != null ? p[g] : void 0;
      if (!(!h.hasOwnProperty(g) || F === G || (F == null && G == null)))
        if (g === po)
          if ((F && Object.freeze(F), G)) {
            for (E in G)
              G.hasOwnProperty(E) &&
                (!F || !F.hasOwnProperty(E)) &&
                (x || (x = {}), (x[E] = ''));
            for (E in F)
              F.hasOwnProperty(E) &&
                G[E] !== F[E] &&
                (x || (x = {}), (x[E] = F[E]));
          } else (x || (c || (c = []), c.push(g, x)), (x = F));
        else if (g === Bl) {
          var J = F ? F[jc] : void 0,
            re = G ? G[jc] : void 0;
          J != null && re !== J && (c = c || []).push(g, J);
        } else
          g === fo
            ? (typeof F == 'string' || typeof F == 'number') &&
              (c = c || []).push(g, '' + F)
            : g === Hc ||
              g === wi ||
              (ot.hasOwnProperty(g)
                ? (F != null &&
                    (typeof F != 'function' && Yc(g, F),
                    g === 'onScroll' && Kt('scroll', e)),
                  !c && G !== F && (c = []))
                : (c = c || []).push(g, F));
    }
    return (x && (LC(x, h[po]), (c = c || []).push(po, x)), c);
  }
  function v1(e, t, n, i, l) {
    n === 'input' && l.type === 'radio' && l.name != null && K(e, l);
    var c = eo(n, i),
      p = eo(n, l);
    switch ((u1(e, t, c, p), n)) {
      case 'input':
        ne(e, l);
        break;
      case 'textarea':
        Zy(e, l);
        break;
      case 'select':
        uC(e, l);
        break;
    }
  }
  function h1(e) {
    {
      var t = e.toLowerCase();
      return (yc.hasOwnProperty(t) && yc[t]) || null;
    }
  }
  function m1(e, t, n, i, l, c, p) {
    var h, g;
    switch (((h = eo(t, n)), $c(t, n), t)) {
      case 'dialog':
        (Kt('cancel', e), Kt('close', e));
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        Kt('load', e);
        break;
      case 'video':
      case 'audio':
        for (var E = 0; E < Ul.length; E++) Kt(Ul[E], e);
        break;
      case 'source':
        Kt('error', e);
        break;
      case 'img':
      case 'image':
      case 'link':
        (Kt('error', e), Kt('load', e));
        break;
      case 'details':
        Kt('toggle', e);
        break;
      case 'input':
        (N(e, n), Kt('invalid', e));
        break;
      case 'option':
        jt(e, n);
        break;
      case 'select':
        (ol(e, n), Kt('invalid', e));
        break;
      case 'textarea':
        (Jy(e, n), Kt('invalid', e));
        break;
    }
    lp(t, n);
    {
      g = new Set();
      for (var x = e.attributes, U = 0; U < x.length; U++) {
        var F = x[U].name.toLowerCase();
        switch (F) {
          case 'value':
            break;
          case 'checked':
            break;
          case 'selected':
            break;
          default:
            g.add(x[U].name);
        }
      }
    }
    var G = null;
    for (var J in n)
      if (n.hasOwnProperty(J)) {
        var re = n[J];
        if (J === fo)
          typeof re == 'string'
            ? e.textContent !== re &&
              (n[wi] !== !0 && Wc(e.textContent, re, c, p), (G = [fo, re]))
            : typeof re == 'number' &&
              e.textContent !== '' + re &&
              (n[wi] !== !0 && Wc(e.textContent, re, c, p),
              (G = [fo, '' + re]));
        else if (ot.hasOwnProperty(J))
          re != null &&
            (typeof re != 'function' && Yc(J, re),
            J === 'onScroll' && Kt('scroll', e));
        else if (p && typeof h == 'boolean') {
          var De = void 0,
            He = h && Ce ? null : yr(J);
          if (n[wi] !== !0) {
            if (
              !(
                J === Hc ||
                J === wi ||
                J === 'value' ||
                J === 'checked' ||
                J === 'selected'
              )
            ) {
              if (J === Bl) {
                var ze = e.innerHTML,
                  Tt = re ? re[jc] : void 0;
                if (Tt != null) {
                  var vt = Hb(e, Tt);
                  vt !== ze && Hl(J, ze, vt);
                }
              } else if (J === po) {
                if ((g.delete(J), Bb)) {
                  var H = AC(re);
                  ((De = e.getAttribute('style')), H !== De && Hl(J, De, H));
                }
              } else if (h && !Ce)
                (g.delete(J.toLowerCase()),
                  (De = si(e, J, re)),
                  re !== De && Hl(J, De, re));
              else if (!en(J, He, h) && !Bt(J, re, He, h)) {
                var ae = !1;
                if (He !== null)
                  (g.delete(He.attributeName), (De = Da(e, J, re, He)));
                else {
                  var j = i;
                  if ((j === ka && (j = rp(t)), j === ka))
                    g.delete(J.toLowerCase());
                  else {
                    var ye = h1(J);
                    (ye !== null && ye !== J && ((ae = !0), g.delete(ye)),
                      g.delete(J));
                  }
                  De = si(e, J, re);
                }
                var ke = Ce;
                !ke && re !== De && !ae && Hl(J, De, re);
              }
            }
          }
        }
      }
    switch ((p && g.size > 0 && n[wi] !== !0 && Vb(g), t)) {
      case 'input':
        (Ma(e), Te(e, n, !0));
        break;
      case 'textarea':
        (Ma(e), eg(e));
        break;
      case 'select':
      case 'option':
        break;
      default:
        typeof n.onClick == 'function' && qc(e);
        break;
    }
    return G;
  }
  function y1(e, t, n) {
    var i = e.nodeValue !== t;
    return i;
  }
  function bv(e, t) {
    {
      if (fr) return;
      ((fr = !0),
        f(
          'Did not expect server HTML to contain a <%s> in <%s>.',
          t.nodeName.toLowerCase(),
          e.nodeName.toLowerCase()
        ));
    }
  }
  function Sv(e, t) {
    {
      if (fr) return;
      ((fr = !0),
        f(
          'Did not expect server HTML to contain the text node "%s" in <%s>.',
          t.nodeValue,
          e.nodeName.toLowerCase()
        ));
    }
  }
  function Tv(e, t, n) {
    {
      if (fr) return;
      ((fr = !0),
        f(
          'Expected server HTML to contain a matching <%s> in <%s>.',
          t,
          e.nodeName.toLowerCase()
        ));
    }
  }
  function Ev(e, t) {
    {
      if (t === '' || fr) return;
      ((fr = !0),
        f(
          'Expected server HTML to contain a matching text node for "%s" in <%s>.',
          t,
          e.nodeName.toLowerCase()
        ));
    }
  }
  function g1(e, t, n) {
    switch (t) {
      case 'input':
        Ke(e, n);
        return;
      case 'textarea':
        fC(e, n);
        return;
      case 'select':
        cC(e, n);
        return;
    }
  }
  var jl = function () {},
    $l = function () {};
  {
    var b1 = [
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
      $b = [
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
      S1 = $b.concat(['button']),
      T1 = ['dd', 'dt', 'li', 'option', 'optgroup', 'p', 'rp', 'rt'],
      Yb = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null,
      };
    $l = function (e, t) {
      var n = dt({}, e || Yb),
        i = { tag: t };
      return (
        $b.indexOf(t) !== -1 &&
          ((n.aTagInScope = null),
          (n.buttonTagInScope = null),
          (n.nobrTagInScope = null)),
        S1.indexOf(t) !== -1 && (n.pTagInButtonScope = null),
        b1.indexOf(t) !== -1 &&
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
    var E1 = function (e, t) {
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
            return T1.indexOf(t) === -1;
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
      w1 = function (e, t) {
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
      Gb = {};
    jl = function (e, t, n) {
      n = n || Yb;
      var i = n.current,
        l = i && i.tag;
      t != null &&
        (e != null &&
          f(
            'validateDOMNesting: when childText is passed, childTag should be null'
          ),
        (e = '#text'));
      var c = E1(e, l) ? null : i,
        p = c ? null : w1(e, n),
        h = c || p;
      if (h) {
        var g = h.tag,
          E = !!c + '|' + e + '|' + g;
        if (!Gb[E]) {
          Gb[E] = !0;
          var x = e,
            U = '';
          if (
            (e === '#text'
              ? /\S/.test(t)
                ? (x = 'Text nodes')
                : ((x = 'Whitespace text nodes'),
                  (U =
                    " Make sure you don't have any extra whitespace between tags on each line of your source code."))
              : (x = '<' + e + '>'),
            c)
          ) {
            var F = '';
            (g === 'table' &&
              e === 'tr' &&
              (F +=
                ' Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser.'),
              f(
                'validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s',
                x,
                g,
                U,
                F
              ));
          } else
            f(
              'validateDOMNesting(...): %s cannot appear as a descendant of <%s>.',
              x,
              g
            );
        }
      }
    };
  }
  var Xc = 'suppressHydrationWarning',
    Qc = '$',
    Kc = '/$',
    Yl = '$?',
    Gl = '$!',
    C1 = 'style',
    wv = null,
    Cv = null;
  function x1(e) {
    var t,
      n,
      i = e.nodeType;
    switch (i) {
      case Pa:
      case ip: {
        t = i === Pa ? '#document' : '#fragment';
        var l = e.documentElement;
        n = l ? l.namespaceURI : ap(null, '');
        break;
      }
      default: {
        var c = i === pn ? e.parentNode : e,
          p = c.namespaceURI || null;
        ((t = c.tagName), (n = ap(p, t)));
        break;
      }
    }
    {
      var h = t.toLowerCase(),
        g = $l(null, h);
      return { namespace: n, ancestorInfo: g };
    }
  }
  function _1(e, t, n) {
    {
      var i = e,
        l = ap(i.namespace, t),
        c = $l(i.ancestorInfo, t);
      return { namespace: l, ancestorInfo: c };
    }
  }
  function xU(e) {
    return e;
  }
  function R1(e) {
    ((wv = C_()), (Cv = BR()));
    var t = null;
    return (eb(!1), t);
  }
  function D1(e) {
    (HR(Cv), eb(wv), (wv = null), (Cv = null));
  }
  function O1(e, t, n, i, l) {
    var c;
    {
      var p = i;
      if (
        (jl(e, null, p.ancestorInfo),
        typeof t.children == 'string' || typeof t.children == 'number')
      ) {
        var h = '' + t.children,
          g = $l(p.ancestorInfo, e);
        jl(null, h, g);
      }
      c = p.namespace;
    }
    var E = c1(e, t, n, c);
    return (Xl(l, E), Lv(E, t), E);
  }
  function A1(e, t) {
    e.appendChild(t);
  }
  function M1(e, t, n, i, l) {
    switch ((d1(e, t, n, i), t)) {
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
  function L1(e, t, n, i, l, c) {
    {
      var p = c;
      if (
        typeof i.children != typeof n.children &&
        (typeof i.children == 'string' || typeof i.children == 'number')
      ) {
        var h = '' + i.children,
          g = $l(p.ancestorInfo, t);
        jl(null, h, g);
      }
    }
    return p1(e, t, n, i);
  }
  function xv(e, t) {
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
  function k1(e, t, n, i) {
    {
      var l = n;
      jl(null, e, l.ancestorInfo);
    }
    var c = f1(e, t);
    return (Xl(i, c), c);
  }
  function N1() {
    var e = window.event;
    return e === void 0 ? Ha : tb(e.type);
  }
  var _v = typeof setTimeout == 'function' ? setTimeout : void 0,
    P1 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Rv = -1,
    Wb = typeof Promise == 'function' ? Promise : void 0,
    z1 =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Wb < 'u'
          ? function (e) {
              return Wb.resolve(null).then(e).catch(F1);
            }
          : _v;
  function F1(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function U1(e, t, n, i) {
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
  function I1(e, t, n, i, l, c) {
    (v1(e, t, n, i, l), Lv(e, l));
  }
  function qb(e) {
    mc(e, '');
  }
  function V1(e, t, n) {
    e.nodeValue = n;
  }
  function B1(e, t) {
    e.appendChild(t);
  }
  function H1(e, t) {
    var n;
    e.nodeType === pn
      ? ((n = e.parentNode), n.insertBefore(t, e))
      : ((n = e), n.appendChild(t));
    var i = e._reactRootContainer;
    i == null && n.onclick === null && qc(n);
  }
  function j1(e, t, n) {
    e.insertBefore(t, n);
  }
  function $1(e, t, n) {
    e.nodeType === pn ? e.parentNode.insertBefore(t, n) : e.insertBefore(t, n);
  }
  function Y1(e, t) {
    e.removeChild(t);
  }
  function G1(e, t) {
    e.nodeType === pn ? e.parentNode.removeChild(t) : e.removeChild(t);
  }
  function Dv(e, t) {
    var n = t,
      i = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === pn)) {
        var c = l.data;
        if (c === Kc)
          if (i === 0) {
            (e.removeChild(l), Dl(t));
            return;
          } else i--;
        else (c === Qc || c === Yl || c === Gl) && i++;
      }
      n = l;
    } while (n);
    Dl(t);
  }
  function W1(e, t) {
    (e.nodeType === pn ? Dv(e.parentNode, t) : e.nodeType === cr && Dv(e, t),
      Dl(e));
  }
  function q1(e) {
    e = e;
    var t = e.style;
    typeof t.setProperty == 'function'
      ? t.setProperty('display', 'none', 'important')
      : (t.display = 'none');
  }
  function X1(e) {
    e.nodeValue = '';
  }
  function Q1(e, t) {
    e = e;
    var n = t[C1],
      i = n != null && n.hasOwnProperty('display') ? n.display : null;
    e.style.display = op('display', i);
  }
  function K1(e, t) {
    e.nodeValue = t;
  }
  function J1(e) {
    e.nodeType === cr
      ? (e.textContent = '')
      : e.nodeType === Pa &&
        e.documentElement &&
        e.removeChild(e.documentElement);
  }
  function Z1(e, t, n) {
    return e.nodeType !== cr || t.toLowerCase() !== e.nodeName.toLowerCase()
      ? null
      : e;
  }
  function eD(e, t) {
    return t === '' || e.nodeType !== Na ? null : e;
  }
  function tD(e) {
    return e.nodeType !== pn ? null : e;
  }
  function Xb(e) {
    return e.data === Yl;
  }
  function Ov(e) {
    return e.data === Gl;
  }
  function nD(e) {
    var t = e.nextSibling && e.nextSibling.dataset,
      n,
      i,
      l;
    return (
      t && ((n = t.dgst), (i = t.msg), (l = t.stck)),
      { message: i, digest: n, stack: l }
    );
  }
  function rD(e, t) {
    e._reactRetry = t;
  }
  function Jc(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === cr || t === Na) break;
      if (t === pn) {
        var n = e.data;
        if (n === Qc || n === Gl || n === Yl) break;
        if (n === Kc) return null;
      }
    }
    return e;
  }
  function Wl(e) {
    return Jc(e.nextSibling);
  }
  function aD(e) {
    return Jc(e.firstChild);
  }
  function iD(e) {
    return Jc(e.firstChild);
  }
  function oD(e) {
    return Jc(e.nextSibling);
  }
  function sD(e, t, n, i, l, c, p) {
    (Xl(c, e), Lv(e, n));
    var h;
    {
      var g = l;
      h = g.namespace;
    }
    var E = (c.mode & bt) !== $e;
    return m1(e, t, n, h, i, E, p);
  }
  function lD(e, t, n, i) {
    return (Xl(n, e), n.mode & bt, y1(e, t));
  }
  function uD(e, t) {
    Xl(t, e);
  }
  function cD(e) {
    for (var t = e.nextSibling, n = 0; t; ) {
      if (t.nodeType === pn) {
        var i = t.data;
        if (i === Kc) {
          if (n === 0) return Wl(t);
          n--;
        } else (i === Qc || i === Gl || i === Yl) && n++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Qb(e) {
    for (var t = e.previousSibling, n = 0; t; ) {
      if (t.nodeType === pn) {
        var i = t.data;
        if (i === Qc || i === Gl || i === Yl) {
          if (n === 0) return t;
          n--;
        } else i === Kc && n++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function fD(e) {
    Dl(e);
  }
  function dD(e) {
    Dl(e);
  }
  function pD(e) {
    return e !== 'head' && e !== 'body';
  }
  function vD(e, t, n, i) {
    var l = !0;
    Wc(t.nodeValue, n, i, l);
  }
  function hD(e, t, n, i, l, c) {
    if (t[Xc] !== !0) {
      var p = !0;
      Wc(i.nodeValue, l, c, p);
    }
  }
  function mD(e, t) {
    t.nodeType === cr ? bv(e, t) : t.nodeType === pn || Sv(e, t);
  }
  function yD(e, t) {
    {
      var n = e.parentNode;
      n !== null &&
        (t.nodeType === cr ? bv(n, t) : t.nodeType === pn || Sv(n, t));
    }
  }
  function gD(e, t, n, i, l) {
    (l || t[Xc] !== !0) &&
      (i.nodeType === cr ? bv(n, i) : i.nodeType === pn || Sv(n, i));
  }
  function bD(e, t, n) {
    Tv(e, t);
  }
  function SD(e, t) {
    Ev(e, t);
  }
  function TD(e, t, n) {
    {
      var i = e.parentNode;
      i !== null && Tv(i, t);
    }
  }
  function ED(e, t) {
    {
      var n = e.parentNode;
      n !== null && Ev(n, t);
    }
  }
  function wD(e, t, n, i, l, c) {
    (c || t[Xc] !== !0) && Tv(n, i);
  }
  function CD(e, t, n, i, l) {
    (l || t[Xc] !== !0) && Ev(n, i);
  }
  function xD(e) {
    f(
      'An error occurred during hydration. The server HTML was replaced with client content in <%s>.',
      e.nodeName.toLowerCase()
    );
  }
  function _D(e) {
    Il(e);
  }
  var ls = Math.random().toString(36).slice(2),
    us = '__reactFiber$' + ls,
    Av = '__reactProps$' + ls,
    ql = '__reactContainer$' + ls,
    Mv = '__reactEvents$' + ls,
    RD = '__reactListeners$' + ls,
    DD = '__reactHandles$' + ls;
  function OD(e) {
    (delete e[us], delete e[Av], delete e[Mv], delete e[RD], delete e[DD]);
  }
  function Xl(e, t) {
    t[us] = e;
  }
  function Zc(e, t) {
    t[ql] = e;
  }
  function Kb(e) {
    e[ql] = null;
  }
  function Ql(e) {
    return !!e[ql];
  }
  function vo(e) {
    var t = e[us];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (((t = n[ql] || n[us]), t)) {
        var i = t.alternate;
        if (t.child !== null || (i !== null && i.child !== null))
          for (var l = Qb(e); l !== null; ) {
            var c = l[us];
            if (c) return c;
            l = Qb(l);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function Ci(e) {
    var t = e[us] || e[ql];
    return t && (t.tag === R || t.tag === D || t.tag === z || t.tag === T)
      ? t
      : null;
  }
  function cs(e) {
    if (e.tag === R || e.tag === D) return e.stateNode;
    throw new Error('getNodeFromInstance: Invalid argument.');
  }
  function ef(e) {
    return e[Av] || null;
  }
  function Lv(e, t) {
    e[Av] = t;
  }
  function AD(e) {
    var t = e[Mv];
    return (t === void 0 && (t = e[Mv] = new Set()), t);
  }
  var Jb = {},
    Zb = o.ReactDebugCurrentFrame;
  function tf(e) {
    if (e) {
      var t = e._owner,
        n = di(e.type, e._source, t ? t.type : null);
      Zb.setExtraStackFrame(n);
    } else Zb.setExtraStackFrame(null);
  }
  function Gr(e, t, n, i, l) {
    {
      var c = Function.call.bind(pt);
      for (var p in e)
        if (c(e, p)) {
          var h = void 0;
          try {
            if (typeof e[p] != 'function') {
              var g = Error(
                (i || 'React class') +
                  ': ' +
                  n +
                  ' type `' +
                  p +
                  '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                  typeof e[p] +
                  '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
              );
              throw ((g.name = 'Invariant Violation'), g);
            }
            h = e[p](
              t,
              p,
              i,
              n,
              null,
              'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
            );
          } catch (E) {
            h = E;
          }
          (h &&
            !(h instanceof Error) &&
            (tf(l),
            f(
              '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
              i || 'React class',
              n,
              p,
              typeof h
            ),
            tf(null)),
            h instanceof Error &&
              !(h.message in Jb) &&
              ((Jb[h.message] = !0),
              tf(l),
              f('Failed %s type: %s', n, h.message),
              tf(null)));
        }
    }
  }
  var kv = [],
    nf;
  nf = [];
  var ja = -1;
  function xi(e) {
    return { current: e };
  }
  function Wn(e, t) {
    if (ja < 0) {
      f('Unexpected pop.');
      return;
    }
    (t !== nf[ja] && f('Unexpected Fiber popped.'),
      (e.current = kv[ja]),
      (kv[ja] = null),
      (nf[ja] = null),
      ja--);
  }
  function qn(e, t, n) {
    (ja++, (kv[ja] = e.current), (nf[ja] = n), (e.current = t));
  }
  var Nv;
  Nv = {};
  var xr = {};
  Object.freeze(xr);
  var $a = xi(xr),
    pa = xi(!1),
    Pv = xr;
  function fs(e, t, n) {
    return n && va(t) ? Pv : $a.current;
  }
  function eS(e, t, n) {
    {
      var i = e.stateNode;
      ((i.__reactInternalMemoizedUnmaskedChildContext = t),
        (i.__reactInternalMemoizedMaskedChildContext = n));
    }
  }
  function ds(e, t) {
    {
      var n = e.type,
        i = n.contextTypes;
      if (!i) return xr;
      var l = e.stateNode;
      if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
        return l.__reactInternalMemoizedMaskedChildContext;
      var c = {};
      for (var p in i) c[p] = t[p];
      {
        var h = ut(e) || 'Unknown';
        Gr(i, c, 'context', h);
      }
      return (l && eS(e, t, c), c);
    }
  }
  function rf() {
    return pa.current;
  }
  function va(e) {
    {
      var t = e.childContextTypes;
      return t != null;
    }
  }
  function af(e) {
    (Wn(pa, e), Wn($a, e));
  }
  function zv(e) {
    (Wn(pa, e), Wn($a, e));
  }
  function tS(e, t, n) {
    {
      if ($a.current !== xr)
        throw new Error(
          'Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.'
        );
      (qn($a, t, e), qn(pa, n, e));
    }
  }
  function nS(e, t, n) {
    {
      var i = e.stateNode,
        l = t.childContextTypes;
      if (typeof i.getChildContext != 'function') {
        {
          var c = ut(e) || 'Unknown';
          Nv[c] ||
            ((Nv[c] = !0),
            f(
              '%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.',
              c,
              c
            ));
        }
        return n;
      }
      var p = i.getChildContext();
      for (var h in p)
        if (!(h in l))
          throw new Error(
            (ut(e) || 'Unknown') +
              '.getChildContext(): key "' +
              h +
              '" is not defined in childContextTypes.'
          );
      {
        var g = ut(e) || 'Unknown';
        Gr(l, p, 'child context', g);
      }
      return dt({}, n, p);
    }
  }
  function of(e) {
    {
      var t = e.stateNode,
        n = (t && t.__reactInternalMemoizedMergedChildContext) || xr;
      return ((Pv = $a.current), qn($a, n, e), qn(pa, pa.current, e), !0);
    }
  }
  function rS(e, t, n) {
    {
      var i = e.stateNode;
      if (!i)
        throw new Error(
          'Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.'
        );
      if (n) {
        var l = nS(e, t, Pv);
        ((i.__reactInternalMemoizedMergedChildContext = l),
          Wn(pa, e),
          Wn($a, e),
          qn($a, l, e),
          qn(pa, n, e));
      } else (Wn(pa, e), qn(pa, n, e));
    }
  }
  function MD(e) {
    {
      if (!px(e) || e.tag !== y)
        throw new Error(
          'Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.'
        );
      var t = e;
      do {
        switch (t.tag) {
          case T:
            return t.stateNode.context;
          case y: {
            var n = t.type;
            if (va(n))
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
  var _i = 0,
    sf = 1,
    Ya = null,
    Fv = !1,
    Uv = !1;
  function aS(e) {
    Ya === null ? (Ya = [e]) : Ya.push(e);
  }
  function LD(e) {
    ((Fv = !0), aS(e));
  }
  function iS() {
    Fv && Ri();
  }
  function Ri() {
    if (!Uv && Ya !== null) {
      Uv = !0;
      var e = 0,
        t = Yr();
      try {
        var n = !0,
          i = Ya;
        for (Ln(Er); e < i.length; e++) {
          var l = i[e];
          do l = l(n);
          while (l !== null);
        }
        ((Ya = null), (Fv = !1));
      } catch (c) {
        throw (Ya !== null && (Ya = Ya.slice(e + 1)), Og(Ec, Ri), c);
      } finally {
        (Ln(t), (Uv = !1));
      }
    }
    return null;
  }
  var ps = [],
    vs = 0,
    lf = null,
    uf = 0,
    Lr = [],
    kr = 0,
    ho = null,
    Ga = 1,
    Wa = '';
  function kD(e) {
    return (yo(), (e.flags & Tg) !== Xe);
  }
  function ND(e) {
    return (yo(), uf);
  }
  function PD() {
    var e = Wa,
      t = Ga,
      n = t & ~zD(t);
    return n.toString(32) + e;
  }
  function mo(e, t) {
    (yo(), (ps[vs++] = uf), (ps[vs++] = lf), (lf = e), (uf = t));
  }
  function oS(e, t, n) {
    (yo(), (Lr[kr++] = Ga), (Lr[kr++] = Wa), (Lr[kr++] = ho), (ho = e));
    var i = Ga,
      l = Wa,
      c = cf(i) - 1,
      p = i & ~(1 << c),
      h = n + 1,
      g = cf(t) + c;
    if (g > 30) {
      var E = c - (c % 5),
        x = (1 << E) - 1,
        U = (p & x).toString(32),
        F = p >> E,
        G = c - E,
        J = cf(t) + G,
        re = h << G,
        De = re | F,
        He = U + l;
      ((Ga = (1 << J) | De), (Wa = He));
    } else {
      var ze = h << c,
        Tt = ze | p,
        vt = l;
      ((Ga = (1 << g) | Tt), (Wa = vt));
    }
  }
  function Iv(e) {
    yo();
    var t = e.return;
    if (t !== null) {
      var n = 1,
        i = 0;
      (mo(e, n), oS(e, n, i));
    }
  }
  function cf(e) {
    return 32 - Pg(e);
  }
  function zD(e) {
    return 1 << (cf(e) - 1);
  }
  function Vv(e) {
    for (; e === lf; )
      ((lf = ps[--vs]), (ps[vs] = null), (uf = ps[--vs]), (ps[vs] = null));
    for (; e === ho; )
      ((ho = Lr[--kr]),
        (Lr[kr] = null),
        (Wa = Lr[--kr]),
        (Lr[kr] = null),
        (Ga = Lr[--kr]),
        (Lr[kr] = null));
  }
  function FD() {
    return (yo(), ho !== null ? { id: Ga, overflow: Wa } : null);
  }
  function UD(e, t) {
    (yo(),
      (Lr[kr++] = Ga),
      (Lr[kr++] = Wa),
      (Lr[kr++] = ho),
      (Ga = t.id),
      (Wa = t.overflow),
      (ho = e));
  }
  function yo() {
    zn() ||
      f(
        'Expected to be hydrating. This is a bug in React. Please file an issue.'
      );
  }
  var Pn = null,
    Nr = null,
    Wr = !1,
    go = !1,
    Di = null;
  function ID() {
    Wr &&
      f(
        'We should not be hydrating here. This is a bug in React. Please file a bug.'
      );
  }
  function sS() {
    go = !0;
  }
  function VD() {
    return go;
  }
  function BD(e) {
    var t = e.stateNode.containerInfo;
    return ((Nr = iD(t)), (Pn = e), (Wr = !0), (Di = null), (go = !1), !0);
  }
  function HD(e, t, n) {
    return (
      (Nr = oD(t)),
      (Pn = e),
      (Wr = !0),
      (Di = null),
      (go = !1),
      n !== null && UD(e, n),
      !0
    );
  }
  function lS(e, t) {
    switch (e.tag) {
      case T: {
        mD(e.stateNode.containerInfo, t);
        break;
      }
      case R: {
        var n = (e.mode & bt) !== $e;
        gD(e.type, e.memoizedProps, e.stateNode, t, n);
        break;
      }
      case z: {
        var i = e.memoizedState;
        i.dehydrated !== null && yD(i.dehydrated, t);
        break;
      }
    }
  }
  function uS(e, t) {
    lS(e, t);
    var n = GM();
    ((n.stateNode = t), (n.return = e));
    var i = e.deletions;
    i === null ? ((e.deletions = [n]), (e.flags |= to)) : i.push(n);
  }
  function Bv(e, t) {
    {
      if (go) return;
      switch (e.tag) {
        case T: {
          var n = e.stateNode.containerInfo;
          switch (t.tag) {
            case R:
              var i = t.type;
              (t.pendingProps, bD(n, i));
              break;
            case D:
              var l = t.pendingProps;
              SD(n, l);
              break;
          }
          break;
        }
        case R: {
          var c = e.type,
            p = e.memoizedProps,
            h = e.stateNode;
          switch (t.tag) {
            case R: {
              var g = t.type,
                E = t.pendingProps,
                x = (e.mode & bt) !== $e;
              wD(c, p, h, g, E, x);
              break;
            }
            case D: {
              var U = t.pendingProps,
                F = (e.mode & bt) !== $e;
              CD(c, p, h, U, F);
              break;
            }
          }
          break;
        }
        case z: {
          var G = e.memoizedState,
            J = G.dehydrated;
          if (J !== null)
            switch (t.tag) {
              case R:
                var re = t.type;
                (t.pendingProps, TD(J, re));
                break;
              case D:
                var De = t.pendingProps;
                ED(J, De);
                break;
            }
          break;
        }
        default:
          return;
      }
    }
  }
  function cS(e, t) {
    ((t.flags = (t.flags & ~Fa) | vn), Bv(e, t));
  }
  function fS(e, t) {
    switch (e.tag) {
      case R: {
        var n = e.type;
        e.pendingProps;
        var i = Z1(t, n);
        return i !== null
          ? ((e.stateNode = i), (Pn = e), (Nr = aD(i)), !0)
          : !1;
      }
      case D: {
        var l = e.pendingProps,
          c = eD(t, l);
        return c !== null ? ((e.stateNode = c), (Pn = e), (Nr = null), !0) : !1;
      }
      case z: {
        var p = tD(t);
        if (p !== null) {
          var h = { dehydrated: p, treeContext: FD(), retryLane: Sr };
          e.memoizedState = h;
          var g = WM(p);
          return ((g.return = e), (e.child = g), (Pn = e), (Nr = null), !0);
        }
        return !1;
      }
      default:
        return !1;
    }
  }
  function Hv(e) {
    return (e.mode & bt) !== $e && (e.flags & Ot) === Xe;
  }
  function jv(e) {
    throw new Error(
      'Hydration failed because the initial UI does not match what was rendered on the server.'
    );
  }
  function $v(e) {
    if (Wr) {
      var t = Nr;
      if (!t) {
        (Hv(e) && (Bv(Pn, e), jv()), cS(Pn, e), (Wr = !1), (Pn = e));
        return;
      }
      var n = t;
      if (!fS(e, t)) {
        (Hv(e) && (Bv(Pn, e), jv()), (t = Wl(n)));
        var i = Pn;
        if (!t || !fS(e, t)) {
          (cS(Pn, e), (Wr = !1), (Pn = e));
          return;
        }
        uS(i, n);
      }
    }
  }
  function jD(e, t, n) {
    var i = e.stateNode,
      l = !go,
      c = sD(i, e.type, e.memoizedProps, t, n, e, l);
    return ((e.updateQueue = c), c !== null);
  }
  function $D(e) {
    var t = e.stateNode,
      n = e.memoizedProps,
      i = lD(t, n, e);
    if (i) {
      var l = Pn;
      if (l !== null)
        switch (l.tag) {
          case T: {
            var c = l.stateNode.containerInfo,
              p = (l.mode & bt) !== $e;
            vD(c, t, n, p);
            break;
          }
          case R: {
            var h = l.type,
              g = l.memoizedProps,
              E = l.stateNode,
              x = (l.mode & bt) !== $e;
            hD(h, g, E, t, n, x);
            break;
          }
        }
    }
    return i;
  }
  function YD(e) {
    var t = e.memoizedState,
      n = t !== null ? t.dehydrated : null;
    if (!n)
      throw new Error(
        'Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.'
      );
    uD(n, e);
  }
  function GD(e) {
    var t = e.memoizedState,
      n = t !== null ? t.dehydrated : null;
    if (!n)
      throw new Error(
        'Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.'
      );
    return cD(n);
  }
  function dS(e) {
    for (
      var t = e.return;
      t !== null && t.tag !== R && t.tag !== T && t.tag !== z;

    )
      t = t.return;
    Pn = t;
  }
  function ff(e) {
    if (e !== Pn) return !1;
    if (!Wr) return (dS(e), (Wr = !0), !1);
    if (
      e.tag !== T &&
      (e.tag !== R || (pD(e.type) && !xv(e.type, e.memoizedProps)))
    ) {
      var t = Nr;
      if (t)
        if (Hv(e)) (pS(e), jv());
        else for (; t; ) (uS(e, t), (t = Wl(t)));
    }
    return (
      dS(e),
      e.tag === z ? (Nr = GD(e)) : (Nr = Pn ? Wl(e.stateNode) : null),
      !0
    );
  }
  function WD() {
    return Wr && Nr !== null;
  }
  function pS(e) {
    for (var t = Nr; t; ) (lS(e, t), (t = Wl(t)));
  }
  function hs() {
    ((Pn = null), (Nr = null), (Wr = !1), (go = !1));
  }
  function vS() {
    Di !== null && (s0(Di), (Di = null));
  }
  function zn() {
    return Wr;
  }
  function Yv(e) {
    Di === null ? (Di = [e]) : Di.push(e);
  }
  var qD = o.ReactCurrentBatchConfig,
    XD = null;
  function QD() {
    return qD.transition;
  }
  var qr = {
    recordUnsafeLifecycleWarnings: function (e, t) {},
    flushPendingUnsafeLifecycleWarnings: function () {},
    recordLegacyContextWarning: function (e, t) {},
    flushLegacyContextWarning: function () {},
    discardPendingWarnings: function () {},
  };
  {
    var KD = function (e) {
        for (var t = null, n = e; n !== null; )
          (n.mode & ln && (t = n), (n = n.return));
        return t;
      },
      bo = function (e) {
        var t = [];
        return (
          e.forEach(function (n) {
            t.push(n);
          }),
          t.sort().join(', ')
        );
      },
      Kl = [],
      Jl = [],
      Zl = [],
      eu = [],
      tu = [],
      nu = [],
      So = new Set();
    ((qr.recordUnsafeLifecycleWarnings = function (e, t) {
      So.has(e.type) ||
        (typeof t.componentWillMount == 'function' &&
          t.componentWillMount.__suppressDeprecationWarning !== !0 &&
          Kl.push(e),
        e.mode & ln &&
          typeof t.UNSAFE_componentWillMount == 'function' &&
          Jl.push(e),
        typeof t.componentWillReceiveProps == 'function' &&
          t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 &&
          Zl.push(e),
        e.mode & ln &&
          typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
          eu.push(e),
        typeof t.componentWillUpdate == 'function' &&
          t.componentWillUpdate.__suppressDeprecationWarning !== !0 &&
          tu.push(e),
        e.mode & ln &&
          typeof t.UNSAFE_componentWillUpdate == 'function' &&
          nu.push(e));
    }),
      (qr.flushPendingUnsafeLifecycleWarnings = function () {
        var e = new Set();
        Kl.length > 0 &&
          (Kl.forEach(function (F) {
            (e.add(ut(F) || 'Component'), So.add(F.type));
          }),
          (Kl = []));
        var t = new Set();
        Jl.length > 0 &&
          (Jl.forEach(function (F) {
            (t.add(ut(F) || 'Component'), So.add(F.type));
          }),
          (Jl = []));
        var n = new Set();
        Zl.length > 0 &&
          (Zl.forEach(function (F) {
            (n.add(ut(F) || 'Component'), So.add(F.type));
          }),
          (Zl = []));
        var i = new Set();
        eu.length > 0 &&
          (eu.forEach(function (F) {
            (i.add(ut(F) || 'Component'), So.add(F.type));
          }),
          (eu = []));
        var l = new Set();
        tu.length > 0 &&
          (tu.forEach(function (F) {
            (l.add(ut(F) || 'Component'), So.add(F.type));
          }),
          (tu = []));
        var c = new Set();
        if (
          (nu.length > 0 &&
            (nu.forEach(function (F) {
              (c.add(ut(F) || 'Component'), So.add(F.type));
            }),
            (nu = [])),
          t.size > 0)
        ) {
          var p = bo(t);
          f(
            `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
            p
          );
        }
        if (i.size > 0) {
          var h = bo(i);
          f(
            `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`,
            h
          );
        }
        if (c.size > 0) {
          var g = bo(c);
          f(
            `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
            g
          );
        }
        if (e.size > 0) {
          var E = bo(e);
          d(
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
            E
          );
        }
        if (n.size > 0) {
          var x = bo(n);
          d(
            `componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
            x
          );
        }
        if (l.size > 0) {
          var U = bo(l);
          d(
            `componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
            U
          );
        }
      }));
    var df = new Map(),
      hS = new Set();
    ((qr.recordLegacyContextWarning = function (e, t) {
      var n = KD(e);
      if (n === null) {
        f(
          'Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.'
        );
        return;
      }
      if (!hS.has(e.type)) {
        var i = df.get(n);
        (e.type.contextTypes != null ||
          e.type.childContextTypes != null ||
          (t !== null && typeof t.getChildContext == 'function')) &&
          (i === void 0 && ((i = []), df.set(n, i)), i.push(e));
      }
    }),
      (qr.flushLegacyContextWarning = function () {
        df.forEach(function (e, t) {
          if (e.length !== 0) {
            var n = e[0],
              i = new Set();
            e.forEach(function (c) {
              (i.add(ut(c) || 'Component'), hS.add(c.type));
            });
            var l = bo(i);
            try {
              (tn(n),
                f(
                  `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`,
                  l
                ));
            } finally {
              Dn();
            }
          }
        });
      }),
      (qr.discardPendingWarnings = function () {
        ((Kl = []),
          (Jl = []),
          (Zl = []),
          (eu = []),
          (tu = []),
          (nu = []),
          (df = new Map()));
      }));
  }
  var Gv,
    Wv,
    qv,
    Xv,
    Qv,
    mS = function (e, t) {};
  ((Gv = !1),
    (Wv = !1),
    (qv = {}),
    (Xv = {}),
    (Qv = {}),
    (mS = function (e, t) {
      if (
        !(e === null || typeof e != 'object') &&
        !(!e._store || e._store.validated || e.key != null)
      ) {
        if (typeof e._store != 'object')
          throw new Error(
            'React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.'
          );
        e._store.validated = !0;
        var n = ut(t) || 'Component';
        Xv[n] ||
          ((Xv[n] = !0),
          f(
            'Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'
          ));
      }
    }));
  function JD(e) {
    return e.prototype && e.prototype.isReactComponent;
  }
  function ru(e, t, n) {
    var i = n.ref;
    if (i !== null && typeof i != 'function' && typeof i != 'object') {
      if (
        (e.mode & ln || Re) &&
        !(n._owner && n._self && n._owner.stateNode !== n._self) &&
        !(n._owner && n._owner.tag !== y) &&
        !(typeof n.type == 'function' && !JD(n.type)) &&
        n._owner
      ) {
        var l = ut(e) || 'Component';
        qv[l] ||
          (f(
            'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
            l,
            i
          ),
          (qv[l] = !0));
      }
      if (n._owner) {
        var c = n._owner,
          p;
        if (c) {
          var h = c;
          if (h.tag !== y)
            throw new Error(
              'Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref'
            );
          p = h.stateNode;
        }
        if (!p)
          throw new Error(
            'Missing owner for string ref ' +
              i +
              '. This error is likely caused by a bug in React. Please file an issue.'
          );
        var g = p;
        A(i, 'ref');
        var E = '' + i;
        if (
          t !== null &&
          t.ref !== null &&
          typeof t.ref == 'function' &&
          t.ref._stringRef === E
        )
          return t.ref;
        var x = function (U) {
          var F = g.refs;
          U === null ? delete F[E] : (F[E] = U);
        };
        return ((x._stringRef = E), x);
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
  function pf(e, t) {
    var n = Object.prototype.toString.call(t);
    throw new Error(
      'Objects are not valid as a React child (found: ' +
        (n === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : n) +
        '). If you meant to render a collection of children, use an array instead.'
    );
  }
  function vf(e) {
    {
      var t = ut(e) || 'Component';
      if (Qv[t]) return;
      ((Qv[t] = !0),
        f(
          'Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.'
        ));
    }
  }
  function yS(e) {
    var t = e._payload,
      n = e._init;
    return n(t);
  }
  function gS(e) {
    function t(H, ae) {
      if (e) {
        var j = H.deletions;
        j === null ? ((H.deletions = [ae]), (H.flags |= to)) : j.push(ae);
      }
    }
    function n(H, ae) {
      if (!e) return null;
      for (var j = ae; j !== null; ) (t(H, j), (j = j.sibling));
      return null;
    }
    function i(H, ae) {
      for (var j = new Map(), ye = ae; ye !== null; )
        (ye.key !== null ? j.set(ye.key, ye) : j.set(ye.index, ye),
          (ye = ye.sibling));
      return j;
    }
    function l(H, ae) {
      var j = Oo(H, ae);
      return ((j.index = 0), (j.sibling = null), j);
    }
    function c(H, ae, j) {
      if (((H.index = j), !e)) return ((H.flags |= Tg), ae);
      var ye = H.alternate;
      if (ye !== null) {
        var ke = ye.index;
        return ke < ae ? ((H.flags |= vn), ae) : ke;
      } else return ((H.flags |= vn), ae);
    }
    function p(H) {
      return (e && H.alternate === null && (H.flags |= vn), H);
    }
    function h(H, ae, j, ye) {
      if (ae === null || ae.tag !== D) {
        var ke = Ym(j, H.mode, ye);
        return ((ke.return = H), ke);
      } else {
        var Oe = l(ae, j);
        return ((Oe.return = H), Oe);
      }
    }
    function g(H, ae, j, ye) {
      var ke = j.type;
      if (ke === sa) return x(H, ae, j.props.children, ye, j.key);
      if (
        ae !== null &&
        (ae.elementType === ke ||
          w0(ae, j) ||
          (typeof ke == 'object' &&
            ke !== null &&
            ke.$$typeof === qe &&
            yS(ke) === ae.type))
      ) {
        var Oe = l(ae, j.props);
        return (
          (Oe.ref = ru(H, ae, j)),
          (Oe.return = H),
          (Oe._debugSource = j._source),
          (Oe._debugOwner = j._owner),
          Oe
        );
      }
      var Je = $m(j, H.mode, ye);
      return ((Je.ref = ru(H, ae, j)), (Je.return = H), Je);
    }
    function E(H, ae, j, ye) {
      if (
        ae === null ||
        ae.tag !== w ||
        ae.stateNode.containerInfo !== j.containerInfo ||
        ae.stateNode.implementation !== j.implementation
      ) {
        var ke = Gm(j, H.mode, ye);
        return ((ke.return = H), ke);
      } else {
        var Oe = l(ae, j.children || []);
        return ((Oe.return = H), Oe);
      }
    }
    function x(H, ae, j, ye, ke) {
      if (ae === null || ae.tag !== _) {
        var Oe = Ii(j, H.mode, ye, ke);
        return ((Oe.return = H), Oe);
      } else {
        var Je = l(ae, j);
        return ((Je.return = H), Je);
      }
    }
    function U(H, ae, j) {
      if ((typeof ae == 'string' && ae !== '') || typeof ae == 'number') {
        var ye = Ym('' + ae, H.mode, j);
        return ((ye.return = H), ye);
      }
      if (typeof ae == 'object' && ae !== null) {
        switch (ae.$$typeof) {
          case Br: {
            var ke = $m(ae, H.mode, j);
            return ((ke.ref = ru(H, null, ae)), (ke.return = H), ke);
          }
          case Hr: {
            var Oe = Gm(ae, H.mode, j);
            return ((Oe.return = H), Oe);
          }
          case qe: {
            var Je = ae._payload,
              it = ae._init;
            return U(H, it(Je), j);
          }
        }
        if (Dt(ae) || gr(ae)) {
          var Ut = Ii(ae, H.mode, j, null);
          return ((Ut.return = H), Ut);
        }
        pf(H, ae);
      }
      return (typeof ae == 'function' && vf(H), null);
    }
    function F(H, ae, j, ye) {
      var ke = ae !== null ? ae.key : null;
      if ((typeof j == 'string' && j !== '') || typeof j == 'number')
        return ke !== null ? null : h(H, ae, '' + j, ye);
      if (typeof j == 'object' && j !== null) {
        switch (j.$$typeof) {
          case Br:
            return j.key === ke ? g(H, ae, j, ye) : null;
          case Hr:
            return j.key === ke ? E(H, ae, j, ye) : null;
          case qe: {
            var Oe = j._payload,
              Je = j._init;
            return F(H, ae, Je(Oe), ye);
          }
        }
        if (Dt(j) || gr(j)) return ke !== null ? null : x(H, ae, j, ye, null);
        pf(H, j);
      }
      return (typeof j == 'function' && vf(H), null);
    }
    function G(H, ae, j, ye, ke) {
      if ((typeof ye == 'string' && ye !== '') || typeof ye == 'number') {
        var Oe = H.get(j) || null;
        return h(ae, Oe, '' + ye, ke);
      }
      if (typeof ye == 'object' && ye !== null) {
        switch (ye.$$typeof) {
          case Br: {
            var Je = H.get(ye.key === null ? j : ye.key) || null;
            return g(ae, Je, ye, ke);
          }
          case Hr: {
            var it = H.get(ye.key === null ? j : ye.key) || null;
            return E(ae, it, ye, ke);
          }
          case qe:
            var Ut = ye._payload,
              _t = ye._init;
            return G(H, ae, j, _t(Ut), ke);
        }
        if (Dt(ye) || gr(ye)) {
          var fn = H.get(j) || null;
          return x(ae, fn, ye, ke, null);
        }
        pf(ae, ye);
      }
      return (typeof ye == 'function' && vf(ae), null);
    }
    function J(H, ae, j) {
      {
        if (typeof H != 'object' || H === null) return ae;
        switch (H.$$typeof) {
          case Br:
          case Hr:
            mS(H, j);
            var ye = H.key;
            if (typeof ye != 'string') break;
            if (ae === null) {
              ((ae = new Set()), ae.add(ye));
              break;
            }
            if (!ae.has(ye)) {
              ae.add(ye);
              break;
            }
            f(
              'Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.',
              ye
            );
            break;
          case qe:
            var ke = H._payload,
              Oe = H._init;
            J(Oe(ke), ae, j);
            break;
        }
      }
      return ae;
    }
    function re(H, ae, j, ye) {
      for (var ke = null, Oe = 0; Oe < j.length; Oe++) {
        var Je = j[Oe];
        ke = J(Je, ke, H);
      }
      for (
        var it = null, Ut = null, _t = ae, fn = 0, Rt = 0, un = null;
        _t !== null && Rt < j.length;
        Rt++
      ) {
        _t.index > Rt ? ((un = _t), (_t = null)) : (un = _t.sibling);
        var Qn = F(H, _t, j[Rt], ye);
        if (Qn === null) {
          _t === null && (_t = un);
          break;
        }
        (e && _t && Qn.alternate === null && t(H, _t),
          (fn = c(Qn, fn, Rt)),
          Ut === null ? (it = Qn) : (Ut.sibling = Qn),
          (Ut = Qn),
          (_t = un));
      }
      if (Rt === j.length) {
        if ((n(H, _t), zn())) {
          var jn = Rt;
          mo(H, jn);
        }
        return it;
      }
      if (_t === null) {
        for (; Rt < j.length; Rt++) {
          var Rr = U(H, j[Rt], ye);
          Rr !== null &&
            ((fn = c(Rr, fn, Rt)),
            Ut === null ? (it = Rr) : (Ut.sibling = Rr),
            (Ut = Rr));
        }
        if (zn()) {
          var ar = Rt;
          mo(H, ar);
        }
        return it;
      }
      for (var ir = i(H, _t); Rt < j.length; Rt++) {
        var Kn = G(ir, H, Rt, j[Rt], ye);
        Kn !== null &&
          (e &&
            Kn.alternate !== null &&
            ir.delete(Kn.key === null ? Rt : Kn.key),
          (fn = c(Kn, fn, Rt)),
          Ut === null ? (it = Kn) : (Ut.sibling = Kn),
          (Ut = Kn));
      }
      if (
        (e &&
          ir.forEach(function (Ns) {
            return t(H, Ns);
          }),
        zn())
      ) {
        var ei = Rt;
        mo(H, ei);
      }
      return it;
    }
    function De(H, ae, j, ye) {
      var ke = gr(j);
      if (typeof ke != 'function')
        throw new Error(
          'An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.'
        );
      {
        (typeof Symbol == 'function' &&
          j[Symbol.toStringTag] === 'Generator' &&
          (Wv ||
            f(
              'Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers.'
            ),
          (Wv = !0)),
          j.entries === ke &&
            (Gv ||
              f(
                'Using Maps as children is not supported. Use an array of keyed ReactElements instead.'
              ),
            (Gv = !0)));
        var Oe = ke.call(j);
        if (Oe)
          for (var Je = null, it = Oe.next(); !it.done; it = Oe.next()) {
            var Ut = it.value;
            Je = J(Ut, Je, H);
          }
      }
      var _t = ke.call(j);
      if (_t == null)
        throw new Error('An iterable object provided no iterator.');
      for (
        var fn = null,
          Rt = null,
          un = ae,
          Qn = 0,
          jn = 0,
          Rr = null,
          ar = _t.next();
        un !== null && !ar.done;
        jn++, ar = _t.next()
      ) {
        un.index > jn ? ((Rr = un), (un = null)) : (Rr = un.sibling);
        var ir = F(H, un, ar.value, ye);
        if (ir === null) {
          un === null && (un = Rr);
          break;
        }
        (e && un && ir.alternate === null && t(H, un),
          (Qn = c(ir, Qn, jn)),
          Rt === null ? (fn = ir) : (Rt.sibling = ir),
          (Rt = ir),
          (un = Rr));
      }
      if (ar.done) {
        if ((n(H, un), zn())) {
          var Kn = jn;
          mo(H, Kn);
        }
        return fn;
      }
      if (un === null) {
        for (; !ar.done; jn++, ar = _t.next()) {
          var ei = U(H, ar.value, ye);
          ei !== null &&
            ((Qn = c(ei, Qn, jn)),
            Rt === null ? (fn = ei) : (Rt.sibling = ei),
            (Rt = ei));
        }
        if (zn()) {
          var Ns = jn;
          mo(H, Ns);
        }
        return fn;
      }
      for (var Pu = i(H, un); !ar.done; jn++, ar = _t.next()) {
        var Ea = G(Pu, H, jn, ar.value, ye);
        Ea !== null &&
          (e &&
            Ea.alternate !== null &&
            Pu.delete(Ea.key === null ? jn : Ea.key),
          (Qn = c(Ea, Qn, jn)),
          Rt === null ? (fn = Ea) : (Rt.sibling = Ea),
          (Rt = Ea));
      }
      if (
        (e &&
          Pu.forEach(function (CL) {
            return t(H, CL);
          }),
        zn())
      ) {
        var wL = jn;
        mo(H, wL);
      }
      return fn;
    }
    function He(H, ae, j, ye) {
      if (ae !== null && ae.tag === D) {
        n(H, ae.sibling);
        var ke = l(ae, j);
        return ((ke.return = H), ke);
      }
      n(H, ae);
      var Oe = Ym(j, H.mode, ye);
      return ((Oe.return = H), Oe);
    }
    function ze(H, ae, j, ye) {
      for (var ke = j.key, Oe = ae; Oe !== null; ) {
        if (Oe.key === ke) {
          var Je = j.type;
          if (Je === sa) {
            if (Oe.tag === _) {
              n(H, Oe.sibling);
              var it = l(Oe, j.props.children);
              return (
                (it.return = H),
                (it._debugSource = j._source),
                (it._debugOwner = j._owner),
                it
              );
            }
          } else if (
            Oe.elementType === Je ||
            w0(Oe, j) ||
            (typeof Je == 'object' &&
              Je !== null &&
              Je.$$typeof === qe &&
              yS(Je) === Oe.type)
          ) {
            n(H, Oe.sibling);
            var Ut = l(Oe, j.props);
            return (
              (Ut.ref = ru(H, Oe, j)),
              (Ut.return = H),
              (Ut._debugSource = j._source),
              (Ut._debugOwner = j._owner),
              Ut
            );
          }
          n(H, Oe);
          break;
        } else t(H, Oe);
        Oe = Oe.sibling;
      }
      if (j.type === sa) {
        var _t = Ii(j.props.children, H.mode, ye, j.key);
        return ((_t.return = H), _t);
      } else {
        var fn = $m(j, H.mode, ye);
        return ((fn.ref = ru(H, ae, j)), (fn.return = H), fn);
      }
    }
    function Tt(H, ae, j, ye) {
      for (var ke = j.key, Oe = ae; Oe !== null; ) {
        if (Oe.key === ke)
          if (
            Oe.tag === w &&
            Oe.stateNode.containerInfo === j.containerInfo &&
            Oe.stateNode.implementation === j.implementation
          ) {
            n(H, Oe.sibling);
            var Je = l(Oe, j.children || []);
            return ((Je.return = H), Je);
          } else {
            n(H, Oe);
            break;
          }
        else t(H, Oe);
        Oe = Oe.sibling;
      }
      var it = Gm(j, H.mode, ye);
      return ((it.return = H), it);
    }
    function vt(H, ae, j, ye) {
      var ke =
        typeof j == 'object' && j !== null && j.type === sa && j.key === null;
      if ((ke && (j = j.props.children), typeof j == 'object' && j !== null)) {
        switch (j.$$typeof) {
          case Br:
            return p(ze(H, ae, j, ye));
          case Hr:
            return p(Tt(H, ae, j, ye));
          case qe:
            var Oe = j._payload,
              Je = j._init;
            return vt(H, ae, Je(Oe), ye);
        }
        if (Dt(j)) return re(H, ae, j, ye);
        if (gr(j)) return De(H, ae, j, ye);
        pf(H, j);
      }
      return (typeof j == 'string' && j !== '') || typeof j == 'number'
        ? p(He(H, ae, '' + j, ye))
        : (typeof j == 'function' && vf(H), n(H, ae));
    }
    return vt;
  }
  var ms = gS(!0),
    bS = gS(!1);
  function ZD(e, t) {
    if (e !== null && t.child !== e.child)
      throw new Error('Resuming work not yet implemented.');
    if (t.child !== null) {
      var n = t.child,
        i = Oo(n, n.pendingProps);
      for (t.child = i, i.return = t; n.sibling !== null; )
        ((n = n.sibling),
          (i = i.sibling = Oo(n, n.pendingProps)),
          (i.return = t));
      i.sibling = null;
    }
  }
  function eO(e, t) {
    for (var n = e.child; n !== null; ) (BM(n, t), (n = n.sibling));
  }
  var Kv = xi(null),
    Jv;
  Jv = {};
  var hf = null,
    ys = null,
    Zv = null,
    mf = !1;
  function yf() {
    ((hf = null), (ys = null), (Zv = null), (mf = !1));
  }
  function SS() {
    mf = !0;
  }
  function TS() {
    mf = !1;
  }
  function ES(e, t, n) {
    (qn(Kv, t._currentValue, e),
      (t._currentValue = n),
      t._currentRenderer !== void 0 &&
        t._currentRenderer !== null &&
        t._currentRenderer !== Jv &&
        f(
          'Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.'
        ),
      (t._currentRenderer = Jv));
  }
  function eh(e, t) {
    var n = Kv.current;
    (Wn(Kv, t), (e._currentValue = n));
  }
  function th(e, t, n) {
    for (var i = e; i !== null; ) {
      var l = i.alternate;
      if (
        (ts(i.childLanes, t)
          ? l !== null &&
            !ts(l.childLanes, t) &&
            (l.childLanes = ct(l.childLanes, t))
          : ((i.childLanes = ct(i.childLanes, t)),
            l !== null && (l.childLanes = ct(l.childLanes, t))),
        i === n)
      )
        break;
      i = i.return;
    }
    i !== n &&
      f(
        'Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.'
      );
  }
  function tO(e, t, n) {
    nO(e, t, n);
  }
  function nO(e, t, n) {
    var i = e.child;
    for (i !== null && (i.return = e); i !== null; ) {
      var l = void 0,
        c = i.dependencies;
      if (c !== null) {
        l = i.child;
        for (var p = c.firstContext; p !== null; ) {
          if (p.context === t) {
            if (i.tag === y) {
              var h = Tl(n),
                g = qa(Wt, h);
              g.tag = bf;
              var E = i.updateQueue;
              if (E !== null) {
                var x = E.shared,
                  U = x.pending;
                (U === null ? (g.next = g) : ((g.next = U.next), (U.next = g)),
                  (x.pending = g));
              }
            }
            i.lanes = ct(i.lanes, n);
            var F = i.alternate;
            (F !== null && (F.lanes = ct(F.lanes, n)),
              th(i.return, n, e),
              (c.lanes = ct(c.lanes, n)));
            break;
          }
          p = p.next;
        }
      } else if (i.tag === C) l = i.type === e.type ? null : i.child;
      else if (i.tag === W) {
        var G = i.return;
        if (G === null)
          throw new Error(
            'We just came from a parent so we must have had a parent. This is a bug in React.'
          );
        G.lanes = ct(G.lanes, n);
        var J = G.alternate;
        (J !== null && (J.lanes = ct(J.lanes, n)),
          th(G, n, e),
          (l = i.sibling));
      } else l = i.child;
      if (l !== null) l.return = i;
      else
        for (l = i; l !== null; ) {
          if (l === e) {
            l = null;
            break;
          }
          var re = l.sibling;
          if (re !== null) {
            ((re.return = l.return), (l = re));
            break;
          }
          l = l.return;
        }
      i = l;
    }
  }
  function gs(e, t) {
    ((hf = e), (ys = null), (Zv = null));
    var n = e.dependencies;
    if (n !== null) {
      var i = n.firstContext;
      i !== null && (Tr(n.lanes, t) && gu(), (n.firstContext = null));
    }
  }
  function hn(e) {
    mf &&
      f(
        'Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().'
      );
    var t = e._currentValue;
    if (Zv !== e) {
      var n = { context: e, memoizedValue: t, next: null };
      if (ys === null) {
        if (hf === null)
          throw new Error(
            'Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().'
          );
        ((ys = n), (hf.dependencies = { lanes: ve, firstContext: n }));
      } else ys = ys.next = n;
    }
    return t;
  }
  var To = null;
  function nh(e) {
    To === null ? (To = [e]) : To.push(e);
  }
  function rO() {
    if (To !== null) {
      for (var e = 0; e < To.length; e++) {
        var t = To[e],
          n = t.interleaved;
        if (n !== null) {
          t.interleaved = null;
          var i = n.next,
            l = t.pending;
          if (l !== null) {
            var c = l.next;
            ((l.next = i), (n.next = c));
          }
          t.pending = n;
        }
      }
      To = null;
    }
  }
  function wS(e, t, n, i) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), nh(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      gf(e, i)
    );
  }
  function aO(e, t, n, i) {
    var l = t.interleaved;
    (l === null ? ((n.next = n), nh(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n));
  }
  function iO(e, t, n, i) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), nh(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      gf(e, i)
    );
  }
  function dr(e, t) {
    return gf(e, t);
  }
  var oO = gf;
  function gf(e, t) {
    e.lanes = ct(e.lanes, t);
    var n = e.alternate;
    (n !== null && (n.lanes = ct(n.lanes, t)),
      n === null && (e.flags & (vn | Fa)) !== Xe && b0(e));
    for (var i = e, l = e.return; l !== null; )
      ((l.childLanes = ct(l.childLanes, t)),
        (n = l.alternate),
        n !== null
          ? (n.childLanes = ct(n.childLanes, t))
          : (l.flags & (vn | Fa)) !== Xe && b0(e),
        (i = l),
        (l = l.return));
    if (i.tag === T) {
      var c = i.stateNode;
      return c;
    } else return null;
  }
  var CS = 0,
    xS = 1,
    bf = 2,
    rh = 3,
    Sf = !1,
    ah,
    Tf;
  ((ah = !1), (Tf = null));
  function ih(e) {
    var t = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: ve },
      effects: null,
    };
    e.updateQueue = t;
  }
  function _S(e, t) {
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
  function qa(e, t) {
    var n = {
      eventTime: e,
      lane: t,
      tag: CS,
      payload: null,
      callback: null,
      next: null,
    };
    return n;
  }
  function Oi(e, t, n) {
    var i = e.updateQueue;
    if (i === null) return null;
    var l = i.shared;
    if (
      (Tf === l &&
        !ah &&
        (f(
          'An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.'
        ),
        (ah = !0)),
      aM())
    ) {
      var c = l.pending;
      return (
        c === null ? (t.next = t) : ((t.next = c.next), (c.next = t)),
        (l.pending = t),
        oO(e, n)
      );
    } else return iO(e, l, t, n);
  }
  function Ef(e, t, n) {
    var i = t.updateQueue;
    if (i !== null) {
      var l = i.shared;
      if (Ig(n)) {
        var c = l.lanes;
        c = Bg(c, e.pendingLanes);
        var p = ct(c, n);
        ((l.lanes = p), Kp(e, p));
      }
    }
  }
  function oh(e, t) {
    var n = e.updateQueue,
      i = e.alternate;
    if (i !== null) {
      var l = i.updateQueue;
      if (n === l) {
        var c = null,
          p = null,
          h = n.firstBaseUpdate;
        if (h !== null) {
          var g = h;
          do {
            var E = {
              eventTime: g.eventTime,
              lane: g.lane,
              tag: g.tag,
              payload: g.payload,
              callback: g.callback,
              next: null,
            };
            (p === null ? (c = p = E) : ((p.next = E), (p = E)), (g = g.next));
          } while (g !== null);
          p === null ? (c = p = t) : ((p.next = t), (p = t));
        } else c = p = t;
        ((n = {
          baseState: l.baseState,
          firstBaseUpdate: c,
          lastBaseUpdate: p,
          shared: l.shared,
          effects: l.effects,
        }),
          (e.updateQueue = n));
        return;
      }
    }
    var x = n.lastBaseUpdate;
    (x === null ? (n.firstBaseUpdate = t) : (x.next = t),
      (n.lastBaseUpdate = t));
  }
  function sO(e, t, n, i, l, c) {
    switch (n.tag) {
      case xS: {
        var p = n.payload;
        if (typeof p == 'function') {
          SS();
          var h = p.call(c, i, l);
          {
            if (e.mode & ln) {
              An(!0);
              try {
                p.call(c, i, l);
              } finally {
                An(!1);
              }
            }
            TS();
          }
          return h;
        }
        return p;
      }
      case rh:
        e.flags = (e.flags & ~er) | Ot;
      case CS: {
        var g = n.payload,
          E;
        if (typeof g == 'function') {
          (SS(), (E = g.call(c, i, l)));
          {
            if (e.mode & ln) {
              An(!0);
              try {
                g.call(c, i, l);
              } finally {
                An(!1);
              }
            }
            TS();
          }
        } else E = g;
        return E == null ? i : dt({}, i, E);
      }
      case bf:
        return ((Sf = !0), i);
    }
    return i;
  }
  function wf(e, t, n, i) {
    var l = e.updateQueue;
    ((Sf = !1), (Tf = l.shared));
    var c = l.firstBaseUpdate,
      p = l.lastBaseUpdate,
      h = l.shared.pending;
    if (h !== null) {
      l.shared.pending = null;
      var g = h,
        E = g.next;
      ((g.next = null), p === null ? (c = E) : (p.next = E), (p = g));
      var x = e.alternate;
      if (x !== null) {
        var U = x.updateQueue,
          F = U.lastBaseUpdate;
        F !== p &&
          (F === null ? (U.firstBaseUpdate = E) : (F.next = E),
          (U.lastBaseUpdate = g));
      }
    }
    if (c !== null) {
      var G = l.baseState,
        J = ve,
        re = null,
        De = null,
        He = null,
        ze = c;
      do {
        var Tt = ze.lane,
          vt = ze.eventTime;
        if (ts(i, Tt)) {
          if (He !== null) {
            var ae = {
              eventTime: vt,
              lane: Mn,
              tag: ze.tag,
              payload: ze.payload,
              callback: ze.callback,
              next: null,
            };
            He = He.next = ae;
          }
          G = sO(e, l, ze, G, t, n);
          var j = ze.callback;
          if (j !== null && ze.lane !== Mn) {
            e.flags |= gp;
            var ye = l.effects;
            ye === null ? (l.effects = [ze]) : ye.push(ze);
          }
        } else {
          var H = {
            eventTime: vt,
            lane: Tt,
            tag: ze.tag,
            payload: ze.payload,
            callback: ze.callback,
            next: null,
          };
          (He === null ? ((De = He = H), (re = G)) : (He = He.next = H),
            (J = ct(J, Tt)));
        }
        if (((ze = ze.next), ze === null)) {
          if (((h = l.shared.pending), h === null)) break;
          var ke = h,
            Oe = ke.next;
          ((ke.next = null),
            (ze = Oe),
            (l.lastBaseUpdate = ke),
            (l.shared.pending = null));
        }
      } while (!0);
      (He === null && (re = G),
        (l.baseState = re),
        (l.firstBaseUpdate = De),
        (l.lastBaseUpdate = He));
      var Je = l.shared.interleaved;
      if (Je !== null) {
        var it = Je;
        do ((J = ct(J, it.lane)), (it = it.next));
        while (it !== Je);
      } else c === null && (l.shared.lanes = ve);
      (Au(J), (e.lanes = J), (e.memoizedState = G));
    }
    Tf = null;
  }
  function lO(e, t) {
    if (typeof e != 'function')
      throw new Error(
        'Invalid argument passed as callback. Expected a function. Instead ' +
          ('received: ' + e)
      );
    e.call(t);
  }
  function RS() {
    Sf = !1;
  }
  function Cf() {
    return Sf;
  }
  function DS(e, t, n) {
    var i = t.effects;
    if (((t.effects = null), i !== null))
      for (var l = 0; l < i.length; l++) {
        var c = i[l],
          p = c.callback;
        p !== null && ((c.callback = null), lO(p, n));
      }
  }
  var au = {},
    Ai = xi(au),
    iu = xi(au),
    xf = xi(au);
  function _f(e) {
    if (e === au)
      throw new Error(
        'Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.'
      );
    return e;
  }
  function OS() {
    var e = _f(xf.current);
    return e;
  }
  function sh(e, t) {
    (qn(xf, t, e), qn(iu, e, e), qn(Ai, au, e));
    var n = x1(t);
    (Wn(Ai, e), qn(Ai, n, e));
  }
  function bs(e) {
    (Wn(Ai, e), Wn(iu, e), Wn(xf, e));
  }
  function lh() {
    var e = _f(Ai.current);
    return e;
  }
  function AS(e) {
    _f(xf.current);
    var t = _f(Ai.current),
      n = _1(t, e.type);
    t !== n && (qn(iu, e, e), qn(Ai, n, e));
  }
  function uh(e) {
    iu.current === e && (Wn(Ai, e), Wn(iu, e));
  }
  var uO = 0,
    MS = 1,
    LS = 1,
    ou = 2,
    Xr = xi(uO);
  function ch(e, t) {
    return (e & t) !== 0;
  }
  function Ss(e) {
    return e & MS;
  }
  function fh(e, t) {
    return (e & MS) | t;
  }
  function cO(e, t) {
    return e | t;
  }
  function Mi(e, t) {
    qn(Xr, t, e);
  }
  function Ts(e) {
    Wn(Xr, e);
  }
  function fO(e, t) {
    var n = e.memoizedState;
    return n !== null ? n.dehydrated !== null : (e.memoizedProps, !0);
  }
  function Rf(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === z) {
        var n = t.memoizedState;
        if (n !== null) {
          var i = n.dehydrated;
          if (i === null || Xb(i) || Ov(i)) return t;
        }
      } else if (t.tag === ie && t.memoizedProps.revealOrder !== void 0) {
        var l = (t.flags & Ot) !== Xe;
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
  var pr = 0,
    bn = 1,
    ha = 2,
    Sn = 4,
    Fn = 8,
    dh = [];
  function ph() {
    for (var e = 0; e < dh.length; e++) {
      var t = dh[e];
      t._workInProgressVersionPrimary = null;
    }
    dh.length = 0;
  }
  function dO(e, t) {
    var n = t._getVersion,
      i = n(t._source);
    e.mutableSourceEagerHydrationData == null
      ? (e.mutableSourceEagerHydrationData = [t, i])
      : e.mutableSourceEagerHydrationData.push(t, i);
  }
  var Le = o.ReactCurrentDispatcher,
    su = o.ReactCurrentBatchConfig,
    vh,
    Es;
  vh = new Set();
  var Eo = ve,
    Ft = null,
    Tn = null,
    En = null,
    Df = !1,
    lu = !1,
    uu = 0,
    pO = 0,
    vO = 25,
    le = null,
    Pr = null,
    Li = -1,
    hh = !1;
  function Lt() {
    {
      var e = le;
      Pr === null ? (Pr = [e]) : Pr.push(e);
    }
  }
  function xe() {
    {
      var e = le;
      Pr !== null && (Li++, Pr[Li] !== e && hO(e));
    }
  }
  function ws(e) {
    e != null &&
      !Dt(e) &&
      f(
        '%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.',
        le,
        typeof e
      );
  }
  function hO(e) {
    {
      var t = ut(Ft);
      if (!vh.has(t) && (vh.add(t), Pr !== null)) {
        for (var n = '', i = 30, l = 0; l <= Li; l++) {
          for (
            var c = Pr[l], p = l === Li ? e : c, h = l + 1 + '. ' + c;
            h.length < i;

          )
            h += ' ';
          ((h +=
            p +
            `
`),
            (n += h));
        }
        f(
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
  function Xn() {
    throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
  }
  function mh(e, t) {
    if (hh) return !1;
    if (t === null)
      return (
        f(
          '%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.',
          le
        ),
        !1
      );
    e.length !== t.length &&
      f(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        le,
        '[' + t.join(', ') + ']',
        '[' + e.join(', ') + ']'
      );
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Cr(e[n], t[n])) return !1;
    return !0;
  }
  function Cs(e, t, n, i, l, c) {
    ((Eo = c),
      (Ft = t),
      (Pr = e !== null ? e._debugHookTypes : null),
      (Li = -1),
      (hh = e !== null && e.type !== t.type),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = ve),
      e !== null && e.memoizedState !== null
        ? (Le.current = eT)
        : Pr !== null
          ? (Le.current = ZS)
          : (Le.current = JS));
    var p = n(i, l);
    if (lu) {
      var h = 0;
      do {
        if (((lu = !1), (uu = 0), h >= vO))
          throw new Error(
            'Too many re-renders. React limits the number of renders to prevent an infinite loop.'
          );
        ((h += 1),
          (hh = !1),
          (Tn = null),
          (En = null),
          (t.updateQueue = null),
          (Li = -1),
          (Le.current = tT),
          (p = n(i, l)));
      } while (lu);
    }
    ((Le.current = Bf), (t._debugHookTypes = Pr));
    var g = Tn !== null && Tn.next !== null;
    if (
      ((Eo = ve),
      (Ft = null),
      (Tn = null),
      (En = null),
      (le = null),
      (Pr = null),
      (Li = -1),
      e !== null &&
        (e.flags & Ia) !== (t.flags & Ia) &&
        (e.mode & bt) !== $e &&
        f(
          'Internal React error: Expected static flag was missing. Please notify the React team.'
        ),
      (Df = !1),
      g)
    )
      throw new Error(
        'Rendered fewer hooks than expected. This may be caused by an accidental early return statement.'
      );
    return p;
  }
  function xs() {
    var e = uu !== 0;
    return ((uu = 0), e);
  }
  function kS(e, t, n) {
    ((t.updateQueue = e.updateQueue),
      (t.mode & fa) !== $e
        ? (t.flags &= ~(Tc | Ua | jr | Et))
        : (t.flags &= ~(jr | Et)),
      (e.lanes = Dc(e.lanes, n)));
  }
  function NS() {
    if (((Le.current = Bf), Df)) {
      for (var e = Ft.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      Df = !1;
    }
    ((Eo = ve),
      (Ft = null),
      (Tn = null),
      (En = null),
      (Pr = null),
      (Li = -1),
      (le = null),
      (WS = !1),
      (lu = !1),
      (uu = 0));
  }
  function ma() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (En === null ? (Ft.memoizedState = En = e) : (En = En.next = e), En);
  }
  function zr() {
    var e;
    if (Tn === null) {
      var t = Ft.alternate;
      t !== null ? (e = t.memoizedState) : (e = null);
    } else e = Tn.next;
    var n;
    if ((En === null ? (n = Ft.memoizedState) : (n = En.next), n !== null))
      ((En = n), (n = En.next), (Tn = e));
    else {
      if (e === null)
        throw new Error('Rendered more hooks than during the previous render.');
      Tn = e;
      var i = {
        memoizedState: Tn.memoizedState,
        baseState: Tn.baseState,
        baseQueue: Tn.baseQueue,
        queue: Tn.queue,
        next: null,
      };
      En === null ? (Ft.memoizedState = En = i) : (En = En.next = i);
    }
    return En;
  }
  function PS() {
    return { lastEffect: null, stores: null };
  }
  function yh(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function gh(e, t, n) {
    var i = ma(),
      l;
    (n !== void 0 ? (l = n(t)) : (l = t), (i.memoizedState = i.baseState = l));
    var c = {
      pending: null,
      interleaved: null,
      lanes: ve,
      dispatch: null,
      lastRenderedReducer: e,
      lastRenderedState: l,
    };
    i.queue = c;
    var p = (c.dispatch = bO.bind(null, Ft, c));
    return [i.memoizedState, p];
  }
  function bh(e, t, n) {
    var i = zr(),
      l = i.queue;
    if (l === null)
      throw new Error(
        'Should have a queue. This is likely a bug in React. Please file an issue.'
      );
    l.lastRenderedReducer = e;
    var c = Tn,
      p = c.baseQueue,
      h = l.pending;
    if (h !== null) {
      if (p !== null) {
        var g = p.next,
          E = h.next;
        ((p.next = E), (h.next = g));
      }
      (c.baseQueue !== p &&
        f(
          'Internal error: Expected work-in-progress queue to be a clone. This is a bug in React.'
        ),
        (c.baseQueue = p = h),
        (l.pending = null));
    }
    if (p !== null) {
      var x = p.next,
        U = c.baseState,
        F = null,
        G = null,
        J = null,
        re = x;
      do {
        var De = re.lane;
        if (ts(Eo, De)) {
          if (J !== null) {
            var ze = {
              lane: Mn,
              action: re.action,
              hasEagerState: re.hasEagerState,
              eagerState: re.eagerState,
              next: null,
            };
            J = J.next = ze;
          }
          if (re.hasEagerState) U = re.eagerState;
          else {
            var Tt = re.action;
            U = e(U, Tt);
          }
        } else {
          var He = {
            lane: De,
            action: re.action,
            hasEagerState: re.hasEagerState,
            eagerState: re.eagerState,
            next: null,
          };
          (J === null ? ((G = J = He), (F = U)) : (J = J.next = He),
            (Ft.lanes = ct(Ft.lanes, De)),
            Au(De));
        }
        re = re.next;
      } while (re !== null && re !== x);
      (J === null ? (F = U) : (J.next = G),
        Cr(U, i.memoizedState) || gu(),
        (i.memoizedState = U),
        (i.baseState = F),
        (i.baseQueue = J),
        (l.lastRenderedState = U));
    }
    var vt = l.interleaved;
    if (vt !== null) {
      var H = vt;
      do {
        var ae = H.lane;
        ((Ft.lanes = ct(Ft.lanes, ae)), Au(ae), (H = H.next));
      } while (H !== vt);
    } else p === null && (l.lanes = ve);
    var j = l.dispatch;
    return [i.memoizedState, j];
  }
  function Sh(e, t, n) {
    var i = zr(),
      l = i.queue;
    if (l === null)
      throw new Error(
        'Should have a queue. This is likely a bug in React. Please file an issue.'
      );
    l.lastRenderedReducer = e;
    var c = l.dispatch,
      p = l.pending,
      h = i.memoizedState;
    if (p !== null) {
      l.pending = null;
      var g = p.next,
        E = g;
      do {
        var x = E.action;
        ((h = e(h, x)), (E = E.next));
      } while (E !== g);
      (Cr(h, i.memoizedState) || gu(),
        (i.memoizedState = h),
        i.baseQueue === null && (i.baseState = h),
        (l.lastRenderedState = h));
    }
    return [h, c];
  }
  function _U(e, t, n) {}
  function RU(e, t, n) {}
  function Th(e, t, n) {
    var i = Ft,
      l = ma(),
      c,
      p = zn();
    if (p) {
      if (n === void 0)
        throw new Error(
          'Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.'
        );
      ((c = n()),
        Es ||
          (c !== n() &&
            (f(
              'The result of getServerSnapshot should be cached to avoid an infinite loop'
            ),
            (Es = !0))));
    } else {
      if (((c = t()), !Es)) {
        var h = t();
        Cr(c, h) ||
          (f(
            'The result of getSnapshot should be cached to avoid an infinite loop'
          ),
          (Es = !0));
      }
      var g = od();
      if (g === null)
        throw new Error(
          'Expected a work-in-progress root. This is a bug in React. Please file an issue.'
        );
      Rc(g, Eo) || zS(i, t, c);
    }
    l.memoizedState = c;
    var E = { value: c, getSnapshot: t };
    return (
      (l.queue = E),
      kf(US.bind(null, i, E, e), [e]),
      (i.flags |= jr),
      cu(bn | Fn, FS.bind(null, i, E, c, t), void 0, null),
      c
    );
  }
  function Of(e, t, n) {
    var i = Ft,
      l = zr(),
      c = t();
    if (!Es) {
      var p = t();
      Cr(c, p) ||
        (f(
          'The result of getSnapshot should be cached to avoid an infinite loop'
        ),
        (Es = !0));
    }
    var h = l.memoizedState,
      g = !Cr(h, c);
    g && ((l.memoizedState = c), gu());
    var E = l.queue;
    if (
      (du(US.bind(null, i, E, e), [e]),
      E.getSnapshot !== t || g || (En !== null && En.memoizedState.tag & bn))
    ) {
      ((i.flags |= jr), cu(bn | Fn, FS.bind(null, i, E, c, t), void 0, null));
      var x = od();
      if (x === null)
        throw new Error(
          'Expected a work-in-progress root. This is a bug in React. Please file an issue.'
        );
      Rc(x, Eo) || zS(i, t, c);
    }
    return c;
  }
  function zS(e, t, n) {
    e.flags |= Sc;
    var i = { getSnapshot: t, value: n },
      l = Ft.updateQueue;
    if (l === null) ((l = PS()), (Ft.updateQueue = l), (l.stores = [i]));
    else {
      var c = l.stores;
      c === null ? (l.stores = [i]) : c.push(i);
    }
  }
  function FS(e, t, n, i) {
    ((t.value = n), (t.getSnapshot = i), IS(t) && VS(e));
  }
  function US(e, t, n) {
    var i = function () {
      IS(t) && VS(e);
    };
    return n(i);
  }
  function IS(e) {
    var t = e.getSnapshot,
      n = e.value;
    try {
      var i = t();
      return !Cr(n, i);
    } catch {
      return !0;
    }
  }
  function VS(e) {
    var t = dr(e, rt);
    t !== null && _n(t, e, rt, Wt);
  }
  function Af(e) {
    var t = ma();
    (typeof e == 'function' && (e = e()), (t.memoizedState = t.baseState = e));
    var n = {
      pending: null,
      interleaved: null,
      lanes: ve,
      dispatch: null,
      lastRenderedReducer: yh,
      lastRenderedState: e,
    };
    t.queue = n;
    var i = (n.dispatch = SO.bind(null, Ft, n));
    return [t.memoizedState, i];
  }
  function Eh(e) {
    return bh(yh);
  }
  function wh(e) {
    return Sh(yh);
  }
  function cu(e, t, n, i) {
    var l = { tag: e, create: t, destroy: n, deps: i, next: null },
      c = Ft.updateQueue;
    if (c === null)
      ((c = PS()), (Ft.updateQueue = c), (c.lastEffect = l.next = l));
    else {
      var p = c.lastEffect;
      if (p === null) c.lastEffect = l.next = l;
      else {
        var h = p.next;
        ((p.next = l), (l.next = h), (c.lastEffect = l));
      }
    }
    return l;
  }
  function Ch(e) {
    var t = ma();
    {
      var n = { current: e };
      return ((t.memoizedState = n), n);
    }
  }
  function Mf(e) {
    var t = zr();
    return t.memoizedState;
  }
  function fu(e, t, n, i) {
    var l = ma(),
      c = i === void 0 ? null : i;
    ((Ft.flags |= e), (l.memoizedState = cu(bn | t, n, void 0, c)));
  }
  function Lf(e, t, n, i) {
    var l = zr(),
      c = i === void 0 ? null : i,
      p = void 0;
    if (Tn !== null) {
      var h = Tn.memoizedState;
      if (((p = h.destroy), c !== null)) {
        var g = h.deps;
        if (mh(c, g)) {
          l.memoizedState = cu(t, n, p, c);
          return;
        }
      }
    }
    ((Ft.flags |= e), (l.memoizedState = cu(bn | t, n, p, c)));
  }
  function kf(e, t) {
    return (Ft.mode & fa) !== $e
      ? fu(Tc | jr | Tp, Fn, e, t)
      : fu(jr | Tp, Fn, e, t);
  }
  function du(e, t) {
    return Lf(jr, Fn, e, t);
  }
  function xh(e, t) {
    return fu(Et, ha, e, t);
  }
  function Nf(e, t) {
    return Lf(Et, ha, e, t);
  }
  function _h(e, t) {
    var n = Et;
    return ((n |= ao), (Ft.mode & fa) !== $e && (n |= Ua), fu(n, Sn, e, t));
  }
  function Pf(e, t) {
    return Lf(Et, Sn, e, t);
  }
  function BS(e, t) {
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
        f(
          'Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.',
          'an object with keys {' + Object.keys(l).join(', ') + '}'
        );
      var c = e();
      return (
        (l.current = c),
        function () {
          l.current = null;
        }
      );
    }
  }
  function Rh(e, t, n) {
    typeof t != 'function' &&
      f(
        'Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.',
        t !== null ? typeof t : 'null'
      );
    var i = n != null ? n.concat([e]) : null,
      l = Et;
    return (
      (l |= ao),
      (Ft.mode & fa) !== $e && (l |= Ua),
      fu(l, Sn, BS.bind(null, t, e), i)
    );
  }
  function zf(e, t, n) {
    typeof t != 'function' &&
      f(
        'Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.',
        t !== null ? typeof t : 'null'
      );
    var i = n != null ? n.concat([e]) : null;
    return Lf(Et, Sn, BS.bind(null, t, e), i);
  }
  function mO(e, t) {}
  var Ff = mO;
  function Dh(e, t) {
    var n = ma(),
      i = t === void 0 ? null : t;
    return ((n.memoizedState = [e, i]), e);
  }
  function Uf(e, t) {
    var n = zr(),
      i = t === void 0 ? null : t,
      l = n.memoizedState;
    if (l !== null && i !== null) {
      var c = l[1];
      if (mh(i, c)) return l[0];
    }
    return ((n.memoizedState = [e, i]), e);
  }
  function Oh(e, t) {
    var n = ma(),
      i = t === void 0 ? null : t,
      l = e();
    return ((n.memoizedState = [l, i]), l);
  }
  function If(e, t) {
    var n = zr(),
      i = t === void 0 ? null : t,
      l = n.memoizedState;
    if (l !== null && i !== null) {
      var c = l[1];
      if (mh(i, c)) return l[0];
    }
    var p = e();
    return ((n.memoizedState = [p, i]), p);
  }
  function Ah(e) {
    var t = ma();
    return ((t.memoizedState = e), e);
  }
  function HS(e) {
    var t = zr(),
      n = Tn,
      i = n.memoizedState;
    return $S(t, i, e);
  }
  function jS(e) {
    var t = zr();
    if (Tn === null) return ((t.memoizedState = e), e);
    var n = Tn.memoizedState;
    return $S(t, n, e);
  }
  function $S(e, t, n) {
    var i = !t_(Eo);
    if (i) {
      if (!Cr(n, t)) {
        var l = Vg();
        ((Ft.lanes = ct(Ft.lanes, l)), Au(l), (e.baseState = !0));
      }
      return t;
    } else
      return (
        e.baseState && ((e.baseState = !1), gu()),
        (e.memoizedState = n),
        n
      );
  }
  function yO(e, t, n) {
    var i = Yr();
    (Ln(c_(i, Ba)), e(!0));
    var l = su.transition;
    su.transition = {};
    var c = su.transition;
    su.transition._updatedFibers = new Set();
    try {
      (e(!1), t());
    } finally {
      if ((Ln(i), (su.transition = l), l === null && c._updatedFibers)) {
        var p = c._updatedFibers.size;
        (p > 10 &&
          d(
            'Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.'
          ),
          c._updatedFibers.clear());
      }
    }
  }
  function Mh() {
    var e = Af(!1),
      t = e[0],
      n = e[1],
      i = yO.bind(null, n),
      l = ma();
    return ((l.memoizedState = i), [t, i]);
  }
  function YS() {
    var e = Eh(),
      t = e[0],
      n = zr(),
      i = n.memoizedState;
    return [t, i];
  }
  function GS() {
    var e = wh(),
      t = e[0],
      n = zr(),
      i = n.memoizedState;
    return [t, i];
  }
  var WS = !1;
  function gO() {
    return WS;
  }
  function Lh() {
    var e = ma(),
      t = od(),
      n = t.identifierPrefix,
      i;
    if (zn()) {
      var l = PD();
      i = ':' + n + 'R' + l;
      var c = uu++;
      (c > 0 && (i += 'H' + c.toString(32)), (i += ':'));
    } else {
      var p = pO++;
      i = ':' + n + 'r' + p.toString(32) + ':';
    }
    return ((e.memoizedState = i), i);
  }
  function Vf() {
    var e = zr(),
      t = e.memoizedState;
    return t;
  }
  function bO(e, t, n) {
    typeof arguments[3] == 'function' &&
      f(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      );
    var i = Fi(e),
      l = {
        lane: i,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (qS(e)) XS(t, l);
    else {
      var c = wS(e, t, l, i);
      if (c !== null) {
        var p = rr();
        (_n(c, e, i, p), QS(c, t, i));
      }
    }
    KS(e, i);
  }
  function SO(e, t, n) {
    typeof arguments[3] == 'function' &&
      f(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      );
    var i = Fi(e),
      l = {
        lane: i,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (qS(e)) XS(t, l);
    else {
      var c = e.alternate;
      if (e.lanes === ve && (c === null || c.lanes === ve)) {
        var p = t.lastRenderedReducer;
        if (p !== null) {
          var h;
          ((h = Le.current), (Le.current = Qr));
          try {
            var g = t.lastRenderedState,
              E = p(g, n);
            if (((l.hasEagerState = !0), (l.eagerState = E), Cr(E, g))) {
              aO(e, t, l, i);
              return;
            }
          } catch {
          } finally {
            Le.current = h;
          }
        }
      }
      var x = wS(e, t, l, i);
      if (x !== null) {
        var U = rr();
        (_n(x, e, i, U), QS(x, t, i));
      }
    }
    KS(e, i);
  }
  function qS(e) {
    var t = e.alternate;
    return e === Ft || (t !== null && t === Ft);
  }
  function XS(e, t) {
    lu = Df = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function QS(e, t, n) {
    if (Ig(n)) {
      var i = t.lanes;
      i = Bg(i, e.pendingLanes);
      var l = ct(i, n);
      ((t.lanes = l), Kp(e, l));
    }
  }
  function KS(e, t, n) {
    _p(e, t);
  }
  var Bf = {
      readContext: hn,
      useCallback: Xn,
      useContext: Xn,
      useEffect: Xn,
      useImperativeHandle: Xn,
      useInsertionEffect: Xn,
      useLayoutEffect: Xn,
      useMemo: Xn,
      useReducer: Xn,
      useRef: Xn,
      useState: Xn,
      useDebugValue: Xn,
      useDeferredValue: Xn,
      useTransition: Xn,
      useMutableSource: Xn,
      useSyncExternalStore: Xn,
      useId: Xn,
      unstable_isNewReconciler: me,
    },
    JS = null,
    ZS = null,
    eT = null,
    tT = null,
    ya = null,
    Qr = null,
    Hf = null;
  {
    var kh = function () {
        f(
          'Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().'
        );
      },
      at = function () {
        f(
          'Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks'
        );
      };
    ((JS = {
      readContext: function (e) {
        return hn(e);
      },
      useCallback: function (e, t) {
        return ((le = 'useCallback'), Lt(), ws(t), Dh(e, t));
      },
      useContext: function (e) {
        return ((le = 'useContext'), Lt(), hn(e));
      },
      useEffect: function (e, t) {
        return ((le = 'useEffect'), Lt(), ws(t), kf(e, t));
      },
      useImperativeHandle: function (e, t, n) {
        return ((le = 'useImperativeHandle'), Lt(), ws(n), Rh(e, t, n));
      },
      useInsertionEffect: function (e, t) {
        return ((le = 'useInsertionEffect'), Lt(), ws(t), xh(e, t));
      },
      useLayoutEffect: function (e, t) {
        return ((le = 'useLayoutEffect'), Lt(), ws(t), _h(e, t));
      },
      useMemo: function (e, t) {
        ((le = 'useMemo'), Lt(), ws(t));
        var n = Le.current;
        Le.current = ya;
        try {
          return Oh(e, t);
        } finally {
          Le.current = n;
        }
      },
      useReducer: function (e, t, n) {
        ((le = 'useReducer'), Lt());
        var i = Le.current;
        Le.current = ya;
        try {
          return gh(e, t, n);
        } finally {
          Le.current = i;
        }
      },
      useRef: function (e) {
        return ((le = 'useRef'), Lt(), Ch(e));
      },
      useState: function (e) {
        ((le = 'useState'), Lt());
        var t = Le.current;
        Le.current = ya;
        try {
          return Af(e);
        } finally {
          Le.current = t;
        }
      },
      useDebugValue: function (e, t) {
        return ((le = 'useDebugValue'), Lt(), void 0);
      },
      useDeferredValue: function (e) {
        return ((le = 'useDeferredValue'), Lt(), Ah(e));
      },
      useTransition: function () {
        return ((le = 'useTransition'), Lt(), Mh());
      },
      useMutableSource: function (e, t, n) {
        return ((le = 'useMutableSource'), Lt(), void 0);
      },
      useSyncExternalStore: function (e, t, n) {
        return ((le = 'useSyncExternalStore'), Lt(), Th(e, t, n));
      },
      useId: function () {
        return ((le = 'useId'), Lt(), Lh());
      },
      unstable_isNewReconciler: me,
    }),
      (ZS = {
        readContext: function (e) {
          return hn(e);
        },
        useCallback: function (e, t) {
          return ((le = 'useCallback'), xe(), Dh(e, t));
        },
        useContext: function (e) {
          return ((le = 'useContext'), xe(), hn(e));
        },
        useEffect: function (e, t) {
          return ((le = 'useEffect'), xe(), kf(e, t));
        },
        useImperativeHandle: function (e, t, n) {
          return ((le = 'useImperativeHandle'), xe(), Rh(e, t, n));
        },
        useInsertionEffect: function (e, t) {
          return ((le = 'useInsertionEffect'), xe(), xh(e, t));
        },
        useLayoutEffect: function (e, t) {
          return ((le = 'useLayoutEffect'), xe(), _h(e, t));
        },
        useMemo: function (e, t) {
          ((le = 'useMemo'), xe());
          var n = Le.current;
          Le.current = ya;
          try {
            return Oh(e, t);
          } finally {
            Le.current = n;
          }
        },
        useReducer: function (e, t, n) {
          ((le = 'useReducer'), xe());
          var i = Le.current;
          Le.current = ya;
          try {
            return gh(e, t, n);
          } finally {
            Le.current = i;
          }
        },
        useRef: function (e) {
          return ((le = 'useRef'), xe(), Ch(e));
        },
        useState: function (e) {
          ((le = 'useState'), xe());
          var t = Le.current;
          Le.current = ya;
          try {
            return Af(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function (e, t) {
          return ((le = 'useDebugValue'), xe(), void 0);
        },
        useDeferredValue: function (e) {
          return ((le = 'useDeferredValue'), xe(), Ah(e));
        },
        useTransition: function () {
          return ((le = 'useTransition'), xe(), Mh());
        },
        useMutableSource: function (e, t, n) {
          return ((le = 'useMutableSource'), xe(), void 0);
        },
        useSyncExternalStore: function (e, t, n) {
          return ((le = 'useSyncExternalStore'), xe(), Th(e, t, n));
        },
        useId: function () {
          return ((le = 'useId'), xe(), Lh());
        },
        unstable_isNewReconciler: me,
      }),
      (eT = {
        readContext: function (e) {
          return hn(e);
        },
        useCallback: function (e, t) {
          return ((le = 'useCallback'), xe(), Uf(e, t));
        },
        useContext: function (e) {
          return ((le = 'useContext'), xe(), hn(e));
        },
        useEffect: function (e, t) {
          return ((le = 'useEffect'), xe(), du(e, t));
        },
        useImperativeHandle: function (e, t, n) {
          return ((le = 'useImperativeHandle'), xe(), zf(e, t, n));
        },
        useInsertionEffect: function (e, t) {
          return ((le = 'useInsertionEffect'), xe(), Nf(e, t));
        },
        useLayoutEffect: function (e, t) {
          return ((le = 'useLayoutEffect'), xe(), Pf(e, t));
        },
        useMemo: function (e, t) {
          ((le = 'useMemo'), xe());
          var n = Le.current;
          Le.current = Qr;
          try {
            return If(e, t);
          } finally {
            Le.current = n;
          }
        },
        useReducer: function (e, t, n) {
          ((le = 'useReducer'), xe());
          var i = Le.current;
          Le.current = Qr;
          try {
            return bh(e, t, n);
          } finally {
            Le.current = i;
          }
        },
        useRef: function (e) {
          return ((le = 'useRef'), xe(), Mf());
        },
        useState: function (e) {
          ((le = 'useState'), xe());
          var t = Le.current;
          Le.current = Qr;
          try {
            return Eh(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function (e, t) {
          return ((le = 'useDebugValue'), xe(), Ff());
        },
        useDeferredValue: function (e) {
          return ((le = 'useDeferredValue'), xe(), HS(e));
        },
        useTransition: function () {
          return ((le = 'useTransition'), xe(), YS());
        },
        useMutableSource: function (e, t, n) {
          return ((le = 'useMutableSource'), xe(), void 0);
        },
        useSyncExternalStore: function (e, t, n) {
          return ((le = 'useSyncExternalStore'), xe(), Of(e, t));
        },
        useId: function () {
          return ((le = 'useId'), xe(), Vf());
        },
        unstable_isNewReconciler: me,
      }),
      (tT = {
        readContext: function (e) {
          return hn(e);
        },
        useCallback: function (e, t) {
          return ((le = 'useCallback'), xe(), Uf(e, t));
        },
        useContext: function (e) {
          return ((le = 'useContext'), xe(), hn(e));
        },
        useEffect: function (e, t) {
          return ((le = 'useEffect'), xe(), du(e, t));
        },
        useImperativeHandle: function (e, t, n) {
          return ((le = 'useImperativeHandle'), xe(), zf(e, t, n));
        },
        useInsertionEffect: function (e, t) {
          return ((le = 'useInsertionEffect'), xe(), Nf(e, t));
        },
        useLayoutEffect: function (e, t) {
          return ((le = 'useLayoutEffect'), xe(), Pf(e, t));
        },
        useMemo: function (e, t) {
          ((le = 'useMemo'), xe());
          var n = Le.current;
          Le.current = Hf;
          try {
            return If(e, t);
          } finally {
            Le.current = n;
          }
        },
        useReducer: function (e, t, n) {
          ((le = 'useReducer'), xe());
          var i = Le.current;
          Le.current = Hf;
          try {
            return Sh(e, t, n);
          } finally {
            Le.current = i;
          }
        },
        useRef: function (e) {
          return ((le = 'useRef'), xe(), Mf());
        },
        useState: function (e) {
          ((le = 'useState'), xe());
          var t = Le.current;
          Le.current = Hf;
          try {
            return wh(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function (e, t) {
          return ((le = 'useDebugValue'), xe(), Ff());
        },
        useDeferredValue: function (e) {
          return ((le = 'useDeferredValue'), xe(), jS(e));
        },
        useTransition: function () {
          return ((le = 'useTransition'), xe(), GS());
        },
        useMutableSource: function (e, t, n) {
          return ((le = 'useMutableSource'), xe(), void 0);
        },
        useSyncExternalStore: function (e, t, n) {
          return ((le = 'useSyncExternalStore'), xe(), Of(e, t));
        },
        useId: function () {
          return ((le = 'useId'), xe(), Vf());
        },
        unstable_isNewReconciler: me,
      }),
      (ya = {
        readContext: function (e) {
          return (kh(), hn(e));
        },
        useCallback: function (e, t) {
          return ((le = 'useCallback'), at(), Lt(), Dh(e, t));
        },
        useContext: function (e) {
          return ((le = 'useContext'), at(), Lt(), hn(e));
        },
        useEffect: function (e, t) {
          return ((le = 'useEffect'), at(), Lt(), kf(e, t));
        },
        useImperativeHandle: function (e, t, n) {
          return ((le = 'useImperativeHandle'), at(), Lt(), Rh(e, t, n));
        },
        useInsertionEffect: function (e, t) {
          return ((le = 'useInsertionEffect'), at(), Lt(), xh(e, t));
        },
        useLayoutEffect: function (e, t) {
          return ((le = 'useLayoutEffect'), at(), Lt(), _h(e, t));
        },
        useMemo: function (e, t) {
          ((le = 'useMemo'), at(), Lt());
          var n = Le.current;
          Le.current = ya;
          try {
            return Oh(e, t);
          } finally {
            Le.current = n;
          }
        },
        useReducer: function (e, t, n) {
          ((le = 'useReducer'), at(), Lt());
          var i = Le.current;
          Le.current = ya;
          try {
            return gh(e, t, n);
          } finally {
            Le.current = i;
          }
        },
        useRef: function (e) {
          return ((le = 'useRef'), at(), Lt(), Ch(e));
        },
        useState: function (e) {
          ((le = 'useState'), at(), Lt());
          var t = Le.current;
          Le.current = ya;
          try {
            return Af(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function (e, t) {
          return ((le = 'useDebugValue'), at(), Lt(), void 0);
        },
        useDeferredValue: function (e) {
          return ((le = 'useDeferredValue'), at(), Lt(), Ah(e));
        },
        useTransition: function () {
          return ((le = 'useTransition'), at(), Lt(), Mh());
        },
        useMutableSource: function (e, t, n) {
          return ((le = 'useMutableSource'), at(), Lt(), void 0);
        },
        useSyncExternalStore: function (e, t, n) {
          return ((le = 'useSyncExternalStore'), at(), Lt(), Th(e, t, n));
        },
        useId: function () {
          return ((le = 'useId'), at(), Lt(), Lh());
        },
        unstable_isNewReconciler: me,
      }),
      (Qr = {
        readContext: function (e) {
          return (kh(), hn(e));
        },
        useCallback: function (e, t) {
          return ((le = 'useCallback'), at(), xe(), Uf(e, t));
        },
        useContext: function (e) {
          return ((le = 'useContext'), at(), xe(), hn(e));
        },
        useEffect: function (e, t) {
          return ((le = 'useEffect'), at(), xe(), du(e, t));
        },
        useImperativeHandle: function (e, t, n) {
          return ((le = 'useImperativeHandle'), at(), xe(), zf(e, t, n));
        },
        useInsertionEffect: function (e, t) {
          return ((le = 'useInsertionEffect'), at(), xe(), Nf(e, t));
        },
        useLayoutEffect: function (e, t) {
          return ((le = 'useLayoutEffect'), at(), xe(), Pf(e, t));
        },
        useMemo: function (e, t) {
          ((le = 'useMemo'), at(), xe());
          var n = Le.current;
          Le.current = Qr;
          try {
            return If(e, t);
          } finally {
            Le.current = n;
          }
        },
        useReducer: function (e, t, n) {
          ((le = 'useReducer'), at(), xe());
          var i = Le.current;
          Le.current = Qr;
          try {
            return bh(e, t, n);
          } finally {
            Le.current = i;
          }
        },
        useRef: function (e) {
          return ((le = 'useRef'), at(), xe(), Mf());
        },
        useState: function (e) {
          ((le = 'useState'), at(), xe());
          var t = Le.current;
          Le.current = Qr;
          try {
            return Eh(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function (e, t) {
          return ((le = 'useDebugValue'), at(), xe(), Ff());
        },
        useDeferredValue: function (e) {
          return ((le = 'useDeferredValue'), at(), xe(), HS(e));
        },
        useTransition: function () {
          return ((le = 'useTransition'), at(), xe(), YS());
        },
        useMutableSource: function (e, t, n) {
          return ((le = 'useMutableSource'), at(), xe(), void 0);
        },
        useSyncExternalStore: function (e, t, n) {
          return ((le = 'useSyncExternalStore'), at(), xe(), Of(e, t));
        },
        useId: function () {
          return ((le = 'useId'), at(), xe(), Vf());
        },
        unstable_isNewReconciler: me,
      }),
      (Hf = {
        readContext: function (e) {
          return (kh(), hn(e));
        },
        useCallback: function (e, t) {
          return ((le = 'useCallback'), at(), xe(), Uf(e, t));
        },
        useContext: function (e) {
          return ((le = 'useContext'), at(), xe(), hn(e));
        },
        useEffect: function (e, t) {
          return ((le = 'useEffect'), at(), xe(), du(e, t));
        },
        useImperativeHandle: function (e, t, n) {
          return ((le = 'useImperativeHandle'), at(), xe(), zf(e, t, n));
        },
        useInsertionEffect: function (e, t) {
          return ((le = 'useInsertionEffect'), at(), xe(), Nf(e, t));
        },
        useLayoutEffect: function (e, t) {
          return ((le = 'useLayoutEffect'), at(), xe(), Pf(e, t));
        },
        useMemo: function (e, t) {
          ((le = 'useMemo'), at(), xe());
          var n = Le.current;
          Le.current = Qr;
          try {
            return If(e, t);
          } finally {
            Le.current = n;
          }
        },
        useReducer: function (e, t, n) {
          ((le = 'useReducer'), at(), xe());
          var i = Le.current;
          Le.current = Qr;
          try {
            return Sh(e, t, n);
          } finally {
            Le.current = i;
          }
        },
        useRef: function (e) {
          return ((le = 'useRef'), at(), xe(), Mf());
        },
        useState: function (e) {
          ((le = 'useState'), at(), xe());
          var t = Le.current;
          Le.current = Qr;
          try {
            return wh(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function (e, t) {
          return ((le = 'useDebugValue'), at(), xe(), Ff());
        },
        useDeferredValue: function (e) {
          return ((le = 'useDeferredValue'), at(), xe(), jS(e));
        },
        useTransition: function () {
          return ((le = 'useTransition'), at(), xe(), GS());
        },
        useMutableSource: function (e, t, n) {
          return ((le = 'useMutableSource'), at(), xe(), void 0);
        },
        useSyncExternalStore: function (e, t, n) {
          return ((le = 'useSyncExternalStore'), at(), xe(), Of(e, t));
        },
        useId: function () {
          return ((le = 'useId'), at(), xe(), Vf());
        },
        unstable_isNewReconciler: me,
      }));
  }
  var ki = a.unstable_now,
    nT = 0,
    jf = -1,
    pu = -1,
    $f = -1,
    Nh = !1,
    Yf = !1;
  function rT() {
    return Nh;
  }
  function TO() {
    Yf = !0;
  }
  function EO() {
    ((Nh = !1), (Yf = !1));
  }
  function wO() {
    ((Nh = Yf), (Yf = !1));
  }
  function aT() {
    return nT;
  }
  function iT() {
    nT = ki();
  }
  function Ph(e) {
    ((pu = ki()), e.actualStartTime < 0 && (e.actualStartTime = ki()));
  }
  function oT(e) {
    pu = -1;
  }
  function Gf(e, t) {
    if (pu >= 0) {
      var n = ki() - pu;
      ((e.actualDuration += n), t && (e.selfBaseDuration = n), (pu = -1));
    }
  }
  function ga(e) {
    if (jf >= 0) {
      var t = ki() - jf;
      jf = -1;
      for (var n = e.return; n !== null; ) {
        switch (n.tag) {
          case T:
            var i = n.stateNode;
            i.effectDuration += t;
            return;
          case k:
            var l = n.stateNode;
            l.effectDuration += t;
            return;
        }
        n = n.return;
      }
    }
  }
  function zh(e) {
    if ($f >= 0) {
      var t = ki() - $f;
      $f = -1;
      for (var n = e.return; n !== null; ) {
        switch (n.tag) {
          case T:
            var i = n.stateNode;
            i !== null && (i.passiveEffectDuration += t);
            return;
          case k:
            var l = n.stateNode;
            l !== null && (l.passiveEffectDuration += t);
            return;
        }
        n = n.return;
      }
    }
  }
  function ba() {
    jf = ki();
  }
  function Fh() {
    $f = ki();
  }
  function Uh(e) {
    for (var t = e.child; t; )
      ((e.actualDuration += t.actualDuration), (t = t.sibling));
  }
  function Kr(e, t) {
    if (e && e.defaultProps) {
      var n = dt({}, t),
        i = e.defaultProps;
      for (var l in i) n[l] === void 0 && (n[l] = i[l]);
      return n;
    }
    return t;
  }
  var Ih = {},
    Vh,
    Bh,
    Hh,
    jh,
    $h,
    sT,
    Wf,
    Yh,
    Gh,
    Wh,
    vu;
  {
    ((Vh = new Set()),
      (Bh = new Set()),
      (Hh = new Set()),
      (jh = new Set()),
      (Yh = new Set()),
      ($h = new Set()),
      (Gh = new Set()),
      (Wh = new Set()),
      (vu = new Set()));
    var lT = new Set();
    ((Wf = function (e, t) {
      if (!(e === null || typeof e == 'function')) {
        var n = t + '_' + e;
        lT.has(n) ||
          (lT.add(n),
          f(
            '%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.',
            t,
            e
          ));
      }
    }),
      (sT = function (e, t) {
        if (t === void 0) {
          var n = Ct(e) || 'Component';
          $h.has(n) ||
            ($h.add(n),
            f(
              '%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.',
              n
            ));
        }
      }),
      Object.defineProperty(Ih, '_processChildContext', {
        enumerable: !1,
        value: function () {
          throw new Error(
            "_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal)."
          );
        },
      }),
      Object.freeze(Ih));
  }
  function qh(e, t, n, i) {
    var l = e.memoizedState,
      c = n(i, l);
    {
      if (e.mode & ln) {
        An(!0);
        try {
          c = n(i, l);
        } finally {
          An(!1);
        }
      }
      sT(t, c);
    }
    var p = c == null ? l : dt({}, l, c);
    if (((e.memoizedState = p), e.lanes === ve)) {
      var h = e.updateQueue;
      h.baseState = p;
    }
  }
  var Xh = {
    isMounted: vx,
    enqueueSetState: function (e, t, n) {
      var i = Wo(e),
        l = rr(),
        c = Fi(i),
        p = qa(l, c);
      ((p.payload = t), n != null && (Wf(n, 'setState'), (p.callback = n)));
      var h = Oi(i, p, c);
      (h !== null && (_n(h, i, c, l), Ef(h, i, c)), _p(i, c));
    },
    enqueueReplaceState: function (e, t, n) {
      var i = Wo(e),
        l = rr(),
        c = Fi(i),
        p = qa(l, c);
      ((p.tag = xS),
        (p.payload = t),
        n != null && (Wf(n, 'replaceState'), (p.callback = n)));
      var h = Oi(i, p, c);
      (h !== null && (_n(h, i, c, l), Ef(h, i, c)), _p(i, c));
    },
    enqueueForceUpdate: function (e, t) {
      var n = Wo(e),
        i = rr(),
        l = Fi(n),
        c = qa(i, l);
      ((c.tag = bf), t != null && (Wf(t, 'forceUpdate'), (c.callback = t)));
      var p = Oi(n, c, l);
      (p !== null && (_n(p, n, l, i), Ef(p, n, l)), Yx(n, l));
    },
  };
  function uT(e, t, n, i, l, c, p) {
    var h = e.stateNode;
    if (typeof h.shouldComponentUpdate == 'function') {
      var g = h.shouldComponentUpdate(i, c, p);
      {
        if (e.mode & ln) {
          An(!0);
          try {
            g = h.shouldComponentUpdate(i, c, p);
          } finally {
            An(!1);
          }
        }
        g === void 0 &&
          f(
            '%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.',
            Ct(t) || 'Component'
          );
      }
      return g;
    }
    return t.prototype && t.prototype.isPureReactComponent
      ? !zl(n, i) || !zl(l, c)
      : !0;
  }
  function CO(e, t, n) {
    var i = e.stateNode;
    {
      var l = Ct(t) || 'Component',
        c = i.render;
      (c ||
        (t.prototype && typeof t.prototype.render == 'function'
          ? f(
              '%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?',
              l
            )
          : f(
              '%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.',
              l
            )),
        i.getInitialState &&
          !i.getInitialState.isReactClassApproved &&
          !i.state &&
          f(
            'getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?',
            l
          ),
        i.getDefaultProps &&
          !i.getDefaultProps.isReactClassApproved &&
          f(
            'getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.',
            l
          ),
        i.propTypes &&
          f(
            'propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.',
            l
          ),
        i.contextType &&
          f(
            'contextType was defined as an instance property on %s. Use a static property to define contextType instead.',
            l
          ),
        t.childContextTypes &&
          !vu.has(t) &&
          (e.mode & ln) === $e &&
          (vu.add(t),
          f(
            `%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`,
            l
          )),
        t.contextTypes &&
          !vu.has(t) &&
          (e.mode & ln) === $e &&
          (vu.add(t),
          f(
            `%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`,
            l
          )),
        i.contextTypes &&
          f(
            'contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.',
            l
          ),
        t.contextType &&
          t.contextTypes &&
          !Gh.has(t) &&
          (Gh.add(t),
          f(
            '%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.',
            l
          )),
        typeof i.componentShouldUpdate == 'function' &&
          f(
            '%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.',
            l
          ),
        t.prototype &&
          t.prototype.isPureReactComponent &&
          typeof i.shouldComponentUpdate < 'u' &&
          f(
            '%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.',
            Ct(t) || 'A pure component'
          ),
        typeof i.componentDidUnmount == 'function' &&
          f(
            '%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?',
            l
          ),
        typeof i.componentDidReceiveProps == 'function' &&
          f(
            '%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().',
            l
          ),
        typeof i.componentWillRecieveProps == 'function' &&
          f(
            '%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
            l
          ),
        typeof i.UNSAFE_componentWillRecieveProps == 'function' &&
          f(
            '%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?',
            l
          ));
      var p = i.props !== n;
      (i.props !== void 0 &&
        p &&
        f(
          "%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
          l,
          l
        ),
        i.defaultProps &&
          f(
            'Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.',
            l,
            l
          ),
        typeof i.getSnapshotBeforeUpdate == 'function' &&
          typeof i.componentDidUpdate != 'function' &&
          !Hh.has(t) &&
          (Hh.add(t),
          f(
            '%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.',
            Ct(t)
          )),
        typeof i.getDerivedStateFromProps == 'function' &&
          f(
            '%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.',
            l
          ),
        typeof i.getDerivedStateFromError == 'function' &&
          f(
            '%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.',
            l
          ),
        typeof t.getSnapshotBeforeUpdate == 'function' &&
          f(
            '%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.',
            l
          ));
      var h = i.state;
      (h &&
        (typeof h != 'object' || Dt(h)) &&
        f('%s.state: must be set to an object or null', l),
        typeof i.getChildContext == 'function' &&
          typeof t.childContextTypes != 'object' &&
          f(
            '%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().',
            l
          ));
    }
  }
  function cT(e, t) {
    ((t.updater = Xh),
      (e.stateNode = t),
      ux(t, e),
      (t._reactInternalInstance = Ih));
  }
  function fT(e, t, n) {
    var i = !1,
      l = xr,
      c = xr,
      p = t.contextType;
    if ('contextType' in t) {
      var h =
        p === null ||
        (p !== void 0 && p.$$typeof === pe && p._context === void 0);
      if (!h && !Wh.has(t)) {
        Wh.add(t);
        var g = '';
        (p === void 0
          ? (g =
              ' However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.')
          : typeof p != 'object'
            ? (g = ' However, it is set to a ' + typeof p + '.')
            : p.$$typeof === P
              ? (g = ' Did you accidentally pass the Context.Provider instead?')
              : p._context !== void 0
                ? (g =
                    ' Did you accidentally pass the Context.Consumer instead?')
                : (g =
                    ' However, it is set to an object with keys {' +
                    Object.keys(p).join(', ') +
                    '}.'),
          f(
            '%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s',
            Ct(t) || 'Component',
            g
          ));
      }
    }
    if (typeof p == 'object' && p !== null) c = hn(p);
    else {
      l = fs(e, t, !0);
      var E = t.contextTypes;
      ((i = E != null), (c = i ? ds(e, l) : xr));
    }
    var x = new t(n, c);
    if (e.mode & ln) {
      An(!0);
      try {
        x = new t(n, c);
      } finally {
        An(!1);
      }
    }
    var U = (e.memoizedState =
      x.state !== null && x.state !== void 0 ? x.state : null);
    cT(e, x);
    {
      if (typeof t.getDerivedStateFromProps == 'function' && U === null) {
        var F = Ct(t) || 'Component';
        Bh.has(F) ||
          (Bh.add(F),
          f(
            '`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.',
            F,
            x.state === null ? 'null' : 'undefined',
            F
          ));
      }
      if (
        typeof t.getDerivedStateFromProps == 'function' ||
        typeof x.getSnapshotBeforeUpdate == 'function'
      ) {
        var G = null,
          J = null,
          re = null;
        if (
          (typeof x.componentWillMount == 'function' &&
          x.componentWillMount.__suppressDeprecationWarning !== !0
            ? (G = 'componentWillMount')
            : typeof x.UNSAFE_componentWillMount == 'function' &&
              (G = 'UNSAFE_componentWillMount'),
          typeof x.componentWillReceiveProps == 'function' &&
          x.componentWillReceiveProps.__suppressDeprecationWarning !== !0
            ? (J = 'componentWillReceiveProps')
            : typeof x.UNSAFE_componentWillReceiveProps == 'function' &&
              (J = 'UNSAFE_componentWillReceiveProps'),
          typeof x.componentWillUpdate == 'function' &&
          x.componentWillUpdate.__suppressDeprecationWarning !== !0
            ? (re = 'componentWillUpdate')
            : typeof x.UNSAFE_componentWillUpdate == 'function' &&
              (re = 'UNSAFE_componentWillUpdate'),
          G !== null || J !== null || re !== null)
        ) {
          var De = Ct(t) || 'Component',
            He =
              typeof t.getDerivedStateFromProps == 'function'
                ? 'getDerivedStateFromProps()'
                : 'getSnapshotBeforeUpdate()';
          jh.has(De) ||
            (jh.add(De),
            f(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`,
              De,
              He,
              G !== null
                ? `
  ` + G
                : '',
              J !== null
                ? `
  ` + J
                : '',
              re !== null
                ? `
  ` + re
                : ''
            ));
        }
      }
    }
    return (i && eS(e, l, c), x);
  }
  function xO(e, t) {
    var n = t.state;
    (typeof t.componentWillMount == 'function' && t.componentWillMount(),
      typeof t.UNSAFE_componentWillMount == 'function' &&
        t.UNSAFE_componentWillMount(),
      n !== t.state &&
        (f(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          ut(e) || 'Component'
        ),
        Xh.enqueueReplaceState(t, t.state, null)));
  }
  function dT(e, t, n, i) {
    var l = t.state;
    if (
      (typeof t.componentWillReceiveProps == 'function' &&
        t.componentWillReceiveProps(n, i),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, i),
      t.state !== l)
    ) {
      {
        var c = ut(e) || 'Component';
        Vh.has(c) ||
          (Vh.add(c),
          f(
            "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
            c
          ));
      }
      Xh.enqueueReplaceState(t, t.state, null);
    }
  }
  function Qh(e, t, n, i) {
    CO(e, t, n);
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), ih(e));
    var c = t.contextType;
    if (typeof c == 'object' && c !== null) l.context = hn(c);
    else {
      var p = fs(e, t, !0);
      l.context = ds(e, p);
    }
    {
      if (l.state === n) {
        var h = Ct(t) || 'Component';
        Yh.has(h) ||
          (Yh.add(h),
          f(
            "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
            h
          ));
      }
      (e.mode & ln && qr.recordLegacyContextWarning(e, l),
        qr.recordUnsafeLifecycleWarnings(e, l));
    }
    l.state = e.memoizedState;
    var g = t.getDerivedStateFromProps;
    if (
      (typeof g == 'function' && (qh(e, t, g, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps != 'function' &&
        typeof l.getSnapshotBeforeUpdate != 'function' &&
        (typeof l.UNSAFE_componentWillMount == 'function' ||
          typeof l.componentWillMount == 'function') &&
        (xO(e, l), wf(e, n, l, i), (l.state = e.memoizedState)),
      typeof l.componentDidMount == 'function')
    ) {
      var E = Et;
      ((E |= ao), (e.mode & fa) !== $e && (E |= Ua), (e.flags |= E));
    }
  }
  function _O(e, t, n, i) {
    var l = e.stateNode,
      c = e.memoizedProps;
    l.props = c;
    var p = l.context,
      h = t.contextType,
      g = xr;
    if (typeof h == 'object' && h !== null) g = hn(h);
    else {
      var E = fs(e, t, !0);
      g = ds(e, E);
    }
    var x = t.getDerivedStateFromProps,
      U =
        typeof x == 'function' ||
        typeof l.getSnapshotBeforeUpdate == 'function';
    (!U &&
      (typeof l.UNSAFE_componentWillReceiveProps == 'function' ||
        typeof l.componentWillReceiveProps == 'function') &&
      (c !== n || p !== g) &&
      dT(e, l, n, g),
      RS());
    var F = e.memoizedState,
      G = (l.state = F);
    if (
      (wf(e, n, l, i),
      (G = e.memoizedState),
      c === n && F === G && !rf() && !Cf())
    ) {
      if (typeof l.componentDidMount == 'function') {
        var J = Et;
        ((J |= ao), (e.mode & fa) !== $e && (J |= Ua), (e.flags |= J));
      }
      return !1;
    }
    typeof x == 'function' && (qh(e, t, x, n), (G = e.memoizedState));
    var re = Cf() || uT(e, t, c, n, F, G, g);
    if (re) {
      if (
        (!U &&
          (typeof l.UNSAFE_componentWillMount == 'function' ||
            typeof l.componentWillMount == 'function') &&
          (typeof l.componentWillMount == 'function' && l.componentWillMount(),
          typeof l.UNSAFE_componentWillMount == 'function' &&
            l.UNSAFE_componentWillMount()),
        typeof l.componentDidMount == 'function')
      ) {
        var De = Et;
        ((De |= ao), (e.mode & fa) !== $e && (De |= Ua), (e.flags |= De));
      }
    } else {
      if (typeof l.componentDidMount == 'function') {
        var He = Et;
        ((He |= ao), (e.mode & fa) !== $e && (He |= Ua), (e.flags |= He));
      }
      ((e.memoizedProps = n), (e.memoizedState = G));
    }
    return ((l.props = n), (l.state = G), (l.context = g), re);
  }
  function RO(e, t, n, i, l) {
    var c = t.stateNode;
    _S(e, t);
    var p = t.memoizedProps,
      h = t.type === t.elementType ? p : Kr(t.type, p);
    c.props = h;
    var g = t.pendingProps,
      E = c.context,
      x = n.contextType,
      U = xr;
    if (typeof x == 'object' && x !== null) U = hn(x);
    else {
      var F = fs(t, n, !0);
      U = ds(t, F);
    }
    var G = n.getDerivedStateFromProps,
      J =
        typeof G == 'function' ||
        typeof c.getSnapshotBeforeUpdate == 'function';
    (!J &&
      (typeof c.UNSAFE_componentWillReceiveProps == 'function' ||
        typeof c.componentWillReceiveProps == 'function') &&
      (p !== g || E !== U) &&
      dT(t, c, i, U),
      RS());
    var re = t.memoizedState,
      De = (c.state = re);
    if (
      (wf(t, i, c, l),
      (De = t.memoizedState),
      p === g && re === De && !rf() && !Cf() && !_e)
    )
      return (
        typeof c.componentDidUpdate == 'function' &&
          (p !== e.memoizedProps || re !== e.memoizedState) &&
          (t.flags |= Et),
        typeof c.getSnapshotBeforeUpdate == 'function' &&
          (p !== e.memoizedProps || re !== e.memoizedState) &&
          (t.flags |= no),
        !1
      );
    typeof G == 'function' && (qh(t, n, G, i), (De = t.memoizedState));
    var He = Cf() || uT(t, n, h, i, re, De, U) || _e;
    return (
      He
        ? (!J &&
            (typeof c.UNSAFE_componentWillUpdate == 'function' ||
              typeof c.componentWillUpdate == 'function') &&
            (typeof c.componentWillUpdate == 'function' &&
              c.componentWillUpdate(i, De, U),
            typeof c.UNSAFE_componentWillUpdate == 'function' &&
              c.UNSAFE_componentWillUpdate(i, De, U)),
          typeof c.componentDidUpdate == 'function' && (t.flags |= Et),
          typeof c.getSnapshotBeforeUpdate == 'function' && (t.flags |= no))
        : (typeof c.componentDidUpdate == 'function' &&
            (p !== e.memoizedProps || re !== e.memoizedState) &&
            (t.flags |= Et),
          typeof c.getSnapshotBeforeUpdate == 'function' &&
            (p !== e.memoizedProps || re !== e.memoizedState) &&
            (t.flags |= no),
          (t.memoizedProps = i),
          (t.memoizedState = De)),
      (c.props = i),
      (c.state = De),
      (c.context = U),
      He
    );
  }
  function wo(e, t) {
    return { value: e, source: t, stack: tl(t), digest: null };
  }
  function Kh(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function DO(e, t) {
    return !0;
  }
  function Jh(e, t) {
    try {
      var n = DO(e, t);
      if (n === !1) return;
      var i = t.value,
        l = t.source,
        c = t.stack,
        p = c !== null ? c : '';
      if (i != null && i._suppressLogging) {
        if (e.tag === y) return;
        console.error(i);
      }
      var h = l ? ut(l) : null,
        g = h
          ? 'The above error occurred in the <' + h + '> component:'
          : 'The above error occurred in one of your React components:',
        E;
      if (e.tag === T)
        E = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
      else {
        var x = ut(e) || 'Anonymous';
        E =
          'React will try to recreate this component tree from scratch ' +
          ('using the error boundary you provided, ' + x + '.');
      }
      var U =
        g +
        `
` +
        p +
        `

` +
        ('' + E);
      console.error(U);
    } catch (F) {
      setTimeout(function () {
        throw F;
      });
    }
  }
  var OO = typeof WeakMap == 'function' ? WeakMap : Map;
  function pT(e, t, n) {
    var i = qa(Wt, n);
    ((i.tag = rh), (i.payload = { element: null }));
    var l = t.value;
    return (
      (i.callback = function () {
        (TM(l), Jh(e, t));
      }),
      i
    );
  }
  function Zh(e, t, n) {
    var i = qa(Wt, n);
    i.tag = rh;
    var l = e.type.getDerivedStateFromError;
    if (typeof l == 'function') {
      var c = t.value;
      ((i.payload = function () {
        return l(c);
      }),
        (i.callback = function () {
          (C0(e), Jh(e, t));
        }));
    }
    var p = e.stateNode;
    return (
      p !== null &&
        typeof p.componentDidCatch == 'function' &&
        (i.callback = function () {
          (C0(e), Jh(e, t), typeof l != 'function' && bM(this));
          var g = t.value,
            E = t.stack;
          (this.componentDidCatch(g, { componentStack: E !== null ? E : '' }),
            typeof l != 'function' &&
              (Tr(e.lanes, rt) ||
                f(
                  '%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.',
                  ut(e) || 'Unknown'
                )));
        }),
      i
    );
  }
  function vT(e, t, n) {
    var i = e.pingCache,
      l;
    if (
      (i === null
        ? ((i = e.pingCache = new OO()), (l = new Set()), i.set(t, l))
        : ((l = i.get(t)), l === void 0 && ((l = new Set()), i.set(t, l))),
      !l.has(n))
    ) {
      l.add(n);
      var c = EM.bind(null, e, t, n);
      ($r && Mu(e, n), t.then(c, c));
    }
  }
  function AO(e, t, n, i) {
    var l = e.updateQueue;
    if (l === null) {
      var c = new Set();
      (c.add(n), (e.updateQueue = c));
    } else l.add(n);
  }
  function MO(e, t) {
    var n = e.tag;
    if ((e.mode & bt) === $e && (n === m || n === M || n === B)) {
      var i = e.alternate;
      i
        ? ((e.updateQueue = i.updateQueue),
          (e.memoizedState = i.memoizedState),
          (e.lanes = i.lanes))
        : ((e.updateQueue = null), (e.memoizedState = null));
    }
  }
  function hT(e) {
    var t = e;
    do {
      if (t.tag === z && fO(t)) return t;
      t = t.return;
    } while (t !== null);
    return null;
  }
  function mT(e, t, n, i, l) {
    if ((e.mode & bt) === $e) {
      if (e === t) e.flags |= er;
      else {
        if (
          ((e.flags |= Ot),
          (n.flags |= bp),
          (n.flags &= ~(cx | pl)),
          n.tag === y)
        ) {
          var c = n.alternate;
          if (c === null) n.tag = Z;
          else {
            var p = qa(Wt, rt);
            ((p.tag = bf), Oi(n, p, rt));
          }
        }
        n.lanes = ct(n.lanes, rt);
      }
      return e;
    }
    return ((e.flags |= er), (e.lanes = l), e);
  }
  function LO(e, t, n, i, l) {
    if (
      ((n.flags |= pl),
      $r && Mu(e, l),
      i !== null && typeof i == 'object' && typeof i.then == 'function')
    ) {
      var c = i;
      (MO(n), zn() && n.mode & bt && sS());
      var p = hT(t);
      if (p !== null) {
        ((p.flags &= ~za),
          mT(p, t, n, e, l),
          p.mode & bt && vT(e, c, l),
          AO(p, e, c));
        return;
      } else {
        if (!e_(l)) {
          (vT(e, c, l), Lm());
          return;
        }
        var h = new Error(
          'A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.'
        );
        i = h;
      }
    } else if (zn() && n.mode & bt) {
      sS();
      var g = hT(t);
      if (g !== null) {
        ((g.flags & er) === Xe && (g.flags |= za),
          mT(g, t, n, e, l),
          Yv(wo(i, n)));
        return;
      }
    }
    ((i = wo(i, n)), fM(i));
    var E = t;
    do {
      switch (E.tag) {
        case T: {
          var x = i;
          E.flags |= er;
          var U = Tl(l);
          E.lanes = ct(E.lanes, U);
          var F = pT(E, x, U);
          oh(E, F);
          return;
        }
        case y:
          var G = i,
            J = E.type,
            re = E.stateNode;
          if (
            (E.flags & Ot) === Xe &&
            (typeof J.getDerivedStateFromError == 'function' ||
              (re !== null &&
                typeof re.componentDidCatch == 'function' &&
                !h0(re)))
          ) {
            E.flags |= er;
            var De = Tl(l);
            E.lanes = ct(E.lanes, De);
            var He = Zh(E, G, De);
            oh(E, He);
            return;
          }
          break;
      }
      E = E.return;
    } while (E !== null);
  }
  function kO() {
    return null;
  }
  var hu = o.ReactCurrentOwner,
    Jr = !1,
    em,
    mu,
    tm,
    nm,
    rm,
    Co,
    am,
    qf,
    yu;
  ((em = {}),
    (mu = {}),
    (tm = {}),
    (nm = {}),
    (rm = {}),
    (Co = !1),
    (am = {}),
    (qf = {}),
    (yu = {}));
  function tr(e, t, n, i) {
    e === null
      ? (t.child = bS(t, null, n, i))
      : (t.child = ms(t, e.child, n, i));
  }
  function NO(e, t, n, i) {
    ((t.child = ms(t, e.child, null, i)), (t.child = ms(t, null, n, i)));
  }
  function yT(e, t, n, i, l) {
    if (t.type !== t.elementType) {
      var c = n.propTypes;
      c && Gr(c, i, 'prop', Ct(n));
    }
    var p = n.render,
      h = t.ref,
      g,
      E;
    (gs(t, l), hl(t));
    {
      if (
        ((hu.current = t),
        br(!0),
        (g = Cs(e, t, p, i, h, l)),
        (E = xs()),
        t.mode & ln)
      ) {
        An(!0);
        try {
          ((g = Cs(e, t, p, i, h, l)), (E = xs()));
        } finally {
          An(!1);
        }
      }
      br(!1);
    }
    return (
      Ko(),
      e !== null && !Jr
        ? (kS(e, t, l), Xa(e, t, l))
        : (zn() && E && Iv(t), (t.flags |= qo), tr(e, t, g, l), t.child)
    );
  }
  function gT(e, t, n, i, l) {
    if (e === null) {
      var c = n.type;
      if (IM(c) && n.compare === null && n.defaultProps === void 0) {
        var p = c;
        return (
          (p = ks(c)),
          (t.tag = B),
          (t.type = p),
          sm(t, c),
          bT(e, t, p, i, l)
        );
      }
      {
        var h = c.propTypes;
        if ((h && Gr(h, i, 'prop', Ct(c)), n.defaultProps !== void 0)) {
          var g = Ct(c) || 'Unknown';
          yu[g] ||
            (f(
              '%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.',
              g
            ),
            (yu[g] = !0));
        }
      }
      var E = jm(n.type, null, i, t, t.mode, l);
      return ((E.ref = t.ref), (E.return = t), (t.child = E), E);
    }
    {
      var x = n.type,
        U = x.propTypes;
      U && Gr(U, i, 'prop', Ct(x));
    }
    var F = e.child,
      G = pm(e, l);
    if (!G) {
      var J = F.memoizedProps,
        re = n.compare;
      if (((re = re !== null ? re : zl), re(J, i) && e.ref === t.ref))
        return Xa(e, t, l);
    }
    t.flags |= qo;
    var De = Oo(F, i);
    return ((De.ref = t.ref), (De.return = t), (t.child = De), De);
  }
  function bT(e, t, n, i, l) {
    if (t.type !== t.elementType) {
      var c = t.elementType;
      if (c.$$typeof === qe) {
        var p = c,
          h = p._payload,
          g = p._init;
        try {
          c = g(h);
        } catch {
          c = null;
        }
        var E = c && c.propTypes;
        E && Gr(E, i, 'prop', Ct(c));
      }
    }
    if (e !== null) {
      var x = e.memoizedProps;
      if (zl(x, i) && e.ref === t.ref && t.type === e.type)
        if (((Jr = !1), (t.pendingProps = i = x), pm(e, l)))
          (e.flags & bp) !== Xe && (Jr = !0);
        else return ((t.lanes = e.lanes), Xa(e, t, l));
    }
    return im(e, t, n, i, l);
  }
  function ST(e, t, n) {
    var i = t.pendingProps,
      l = i.children,
      c = e !== null ? e.memoizedState : null;
    if (i.mode === 'hidden' || Ge)
      if ((t.mode & bt) === $e) {
        var p = { baseLanes: ve, cachePool: null, transitions: null };
        ((t.memoizedState = p), sd(t, n));
      } else if (Tr(n, Sr)) {
        var U = { baseLanes: ve, cachePool: null, transitions: null };
        t.memoizedState = U;
        var F = c !== null ? c.baseLanes : n;
        sd(t, F);
      } else {
        var h = null,
          g;
        if (c !== null) {
          var E = c.baseLanes;
          g = ct(E, n);
        } else g = n;
        t.lanes = t.childLanes = Sr;
        var x = { baseLanes: g, cachePool: h, transitions: null };
        return ((t.memoizedState = x), (t.updateQueue = null), sd(t, g), null);
      }
    else {
      var G;
      (c !== null
        ? ((G = ct(c.baseLanes, n)), (t.memoizedState = null))
        : (G = n),
        sd(t, G));
    }
    return (tr(e, t, l, n), t.child);
  }
  function PO(e, t, n) {
    var i = t.pendingProps;
    return (tr(e, t, i, n), t.child);
  }
  function zO(e, t, n) {
    var i = t.pendingProps.children;
    return (tr(e, t, i, n), t.child);
  }
  function FO(e, t, n) {
    {
      t.flags |= Et;
      {
        var i = t.stateNode;
        ((i.effectDuration = 0), (i.passiveEffectDuration = 0));
      }
    }
    var l = t.pendingProps,
      c = l.children;
    return (tr(e, t, c, n), t.child);
  }
  function TT(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= yi), (t.flags |= Sp));
  }
  function im(e, t, n, i, l) {
    if (t.type !== t.elementType) {
      var c = n.propTypes;
      c && Gr(c, i, 'prop', Ct(n));
    }
    var p;
    {
      var h = fs(t, n, !0);
      p = ds(t, h);
    }
    var g, E;
    (gs(t, l), hl(t));
    {
      if (
        ((hu.current = t),
        br(!0),
        (g = Cs(e, t, n, i, p, l)),
        (E = xs()),
        t.mode & ln)
      ) {
        An(!0);
        try {
          ((g = Cs(e, t, n, i, p, l)), (E = xs()));
        } finally {
          An(!1);
        }
      }
      br(!1);
    }
    return (
      Ko(),
      e !== null && !Jr
        ? (kS(e, t, l), Xa(e, t, l))
        : (zn() && E && Iv(t), (t.flags |= qo), tr(e, t, g, l), t.child)
    );
  }
  function ET(e, t, n, i, l) {
    {
      switch (eL(t)) {
        case !1: {
          var c = t.stateNode,
            p = t.type,
            h = new p(t.memoizedProps, c.context),
            g = h.state;
          c.updater.enqueueSetState(c, g, null);
          break;
        }
        case !0: {
          ((t.flags |= Ot), (t.flags |= er));
          var E = new Error('Simulated error coming from DevTools'),
            x = Tl(l);
          t.lanes = ct(t.lanes, x);
          var U = Zh(t, wo(E, t), x);
          oh(t, U);
          break;
        }
      }
      if (t.type !== t.elementType) {
        var F = n.propTypes;
        F && Gr(F, i, 'prop', Ct(n));
      }
    }
    var G;
    (va(n) ? ((G = !0), of(t)) : (G = !1), gs(t, l));
    var J = t.stateNode,
      re;
    J === null
      ? (Qf(e, t), fT(t, n, i), Qh(t, n, i, l), (re = !0))
      : e === null
        ? (re = _O(t, n, i, l))
        : (re = RO(e, t, n, i, l));
    var De = om(e, t, n, re, G, l);
    {
      var He = t.stateNode;
      re &&
        He.props !== i &&
        (Co ||
          f(
            'It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.',
            ut(t) || 'a component'
          ),
        (Co = !0));
    }
    return De;
  }
  function om(e, t, n, i, l, c) {
    TT(e, t);
    var p = (t.flags & Ot) !== Xe;
    if (!i && !p) return (l && rS(t, n, !1), Xa(e, t, c));
    var h = t.stateNode;
    hu.current = t;
    var g;
    if (p && typeof n.getDerivedStateFromError != 'function')
      ((g = null), oT());
    else {
      hl(t);
      {
        if ((br(!0), (g = h.render()), t.mode & ln)) {
          An(!0);
          try {
            h.render();
          } finally {
            An(!1);
          }
        }
        br(!1);
      }
      Ko();
    }
    return (
      (t.flags |= qo),
      e !== null && p ? NO(e, t, g, c) : tr(e, t, g, c),
      (t.memoizedState = h.state),
      l && rS(t, n, !0),
      t.child
    );
  }
  function wT(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? tS(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && tS(e, t.context, !1),
      sh(e, t.containerInfo));
  }
  function UO(e, t, n) {
    if ((wT(t), e === null))
      throw new Error('Should have a current fiber. This is a bug in React.');
    var i = t.pendingProps,
      l = t.memoizedState,
      c = l.element;
    (_S(e, t), wf(t, i, null, n));
    var p = t.memoizedState;
    t.stateNode;
    var h = p.element;
    if (l.isDehydrated) {
      var g = {
          element: h,
          isDehydrated: !1,
          cache: p.cache,
          pendingSuspenseBoundaries: p.pendingSuspenseBoundaries,
          transitions: p.transitions,
        },
        E = t.updateQueue;
      if (((E.baseState = g), (t.memoizedState = g), t.flags & za)) {
        var x = wo(
          new Error(
            'There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering.'
          ),
          t
        );
        return CT(e, t, h, n, x);
      } else if (h !== c) {
        var U = wo(
          new Error(
            'This root received an early update, before anything was able hydrate. Switched the entire root to client rendering.'
          ),
          t
        );
        return CT(e, t, h, n, U);
      } else {
        BD(t);
        var F = bS(t, null, h, n);
        t.child = F;
        for (var G = F; G; )
          ((G.flags = (G.flags & ~vn) | Fa), (G = G.sibling));
      }
    } else {
      if ((hs(), h === c)) return Xa(e, t, n);
      tr(e, t, h, n);
    }
    return t.child;
  }
  function CT(e, t, n, i, l) {
    return (hs(), Yv(l), (t.flags |= za), tr(e, t, n, i), t.child);
  }
  function IO(e, t, n) {
    (AS(t), e === null && $v(t));
    var i = t.type,
      l = t.pendingProps,
      c = e !== null ? e.memoizedProps : null,
      p = l.children,
      h = xv(i, l);
    return (
      h ? (p = null) : c !== null && xv(i, c) && (t.flags |= dl),
      TT(e, t),
      tr(e, t, p, n),
      t.child
    );
  }
  function VO(e, t) {
    return (e === null && $v(t), null);
  }
  function BO(e, t, n, i) {
    Qf(e, t);
    var l = t.pendingProps,
      c = n,
      p = c._payload,
      h = c._init,
      g = h(p);
    t.type = g;
    var E = (t.tag = VM(g)),
      x = Kr(g, l),
      U;
    switch (E) {
      case m:
        return (sm(t, g), (t.type = g = ks(g)), (U = im(null, t, g, x, i)), U);
      case y:
        return ((t.type = g = Fm(g)), (U = ET(null, t, g, x, i)), U);
      case M:
        return ((t.type = g = Um(g)), (U = yT(null, t, g, x, i)), U);
      case Y: {
        if (t.type !== t.elementType) {
          var F = g.propTypes;
          F && Gr(F, x, 'prop', Ct(g));
        }
        return ((U = gT(null, t, g, Kr(g.type, x), i)), U);
      }
    }
    var G = '';
    throw (
      g !== null &&
        typeof g == 'object' &&
        g.$$typeof === qe &&
        (G = ' Did you wrap a component in React.lazy() more than once?'),
      new Error(
        'Element type is invalid. Received a promise that resolves to: ' +
          g +
          '. ' +
          ('Lazy element type must resolve to a class or function.' + G)
      )
    );
  }
  function HO(e, t, n, i, l) {
    (Qf(e, t), (t.tag = y));
    var c;
    return (
      va(n) ? ((c = !0), of(t)) : (c = !1),
      gs(t, l),
      fT(t, n, i),
      Qh(t, n, i, l),
      om(null, t, n, !0, c, l)
    );
  }
  function jO(e, t, n, i) {
    Qf(e, t);
    var l = t.pendingProps,
      c;
    {
      var p = fs(t, n, !1);
      c = ds(t, p);
    }
    gs(t, i);
    var h, g;
    hl(t);
    {
      if (n.prototype && typeof n.prototype.render == 'function') {
        var E = Ct(n) || 'Unknown';
        em[E] ||
          (f(
            "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
            E,
            E
          ),
          (em[E] = !0));
      }
      (t.mode & ln && qr.recordLegacyContextWarning(t, null),
        br(!0),
        (hu.current = t),
        (h = Cs(null, t, n, l, c, i)),
        (g = xs()),
        br(!1));
    }
    if (
      (Ko(),
      (t.flags |= qo),
      typeof h == 'object' &&
        h !== null &&
        typeof h.render == 'function' &&
        h.$$typeof === void 0)
    ) {
      var x = Ct(n) || 'Unknown';
      mu[x] ||
        (f(
          "The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",
          x,
          x,
          x
        ),
        (mu[x] = !0));
    }
    if (
      typeof h == 'object' &&
      h !== null &&
      typeof h.render == 'function' &&
      h.$$typeof === void 0
    ) {
      {
        var U = Ct(n) || 'Unknown';
        mu[U] ||
          (f(
            "The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",
            U,
            U,
            U
          ),
          (mu[U] = !0));
      }
      ((t.tag = y), (t.memoizedState = null), (t.updateQueue = null));
      var F = !1;
      return (
        va(n) ? ((F = !0), of(t)) : (F = !1),
        (t.memoizedState =
          h.state !== null && h.state !== void 0 ? h.state : null),
        ih(t),
        cT(t, h),
        Qh(t, n, l, i),
        om(null, t, n, !0, F, i)
      );
    } else {
      if (((t.tag = m), t.mode & ln)) {
        An(!0);
        try {
          ((h = Cs(null, t, n, l, c, i)), (g = xs()));
        } finally {
          An(!1);
        }
      }
      return (zn() && g && Iv(t), tr(null, t, h, i), sm(t, n), t.child);
    }
  }
  function sm(e, t) {
    {
      if (
        (t &&
          t.childContextTypes &&
          f(
            '%s(...): childContextTypes cannot be defined on a function component.',
            t.displayName || t.name || 'Component'
          ),
        e.ref !== null)
      ) {
        var n = '',
          i = pi();
        i &&
          (n +=
            `

Check the render method of \`` +
            i +
            '`.');
        var l = i || '',
          c = e._debugSource;
        (c && (l = c.fileName + ':' + c.lineNumber),
          rm[l] ||
            ((rm[l] = !0),
            f(
              'Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s',
              n
            )));
      }
      if (t.defaultProps !== void 0) {
        var p = Ct(t) || 'Unknown';
        yu[p] ||
          (f(
            '%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.',
            p
          ),
          (yu[p] = !0));
      }
      if (typeof t.getDerivedStateFromProps == 'function') {
        var h = Ct(t) || 'Unknown';
        nm[h] ||
          (f(
            '%s: Function components do not support getDerivedStateFromProps.',
            h
          ),
          (nm[h] = !0));
      }
      if (typeof t.contextType == 'object' && t.contextType !== null) {
        var g = Ct(t) || 'Unknown';
        tm[g] ||
          (f('%s: Function components do not support contextType.', g),
          (tm[g] = !0));
      }
    }
  }
  var lm = { dehydrated: null, treeContext: null, retryLane: Mn };
  function um(e) {
    return { baseLanes: e, cachePool: kO(), transitions: null };
  }
  function $O(e, t) {
    var n = null;
    return {
      baseLanes: ct(e.baseLanes, t),
      cachePool: n,
      transitions: e.transitions,
    };
  }
  function YO(e, t, n, i) {
    if (t !== null) {
      var l = t.memoizedState;
      if (l === null) return !1;
    }
    return ch(e, ou);
  }
  function GO(e, t) {
    return Dc(e.childLanes, t);
  }
  function xT(e, t, n) {
    var i = t.pendingProps;
    tL(t) && (t.flags |= Ot);
    var l = Xr.current,
      c = !1,
      p = (t.flags & Ot) !== Xe;
    if (
      (p || YO(l, e)
        ? ((c = !0), (t.flags &= ~Ot))
        : (e === null || e.memoizedState !== null) && (l = cO(l, LS)),
      (l = Ss(l)),
      Mi(t, l),
      e === null)
    ) {
      $v(t);
      var h = t.memoizedState;
      if (h !== null) {
        var g = h.dehydrated;
        if (g !== null) return KO(t, g);
      }
      var E = i.children,
        x = i.fallback;
      if (c) {
        var U = WO(t, E, x, n),
          F = t.child;
        return ((F.memoizedState = um(n)), (t.memoizedState = lm), U);
      } else return cm(t, E);
    } else {
      var G = e.memoizedState;
      if (G !== null) {
        var J = G.dehydrated;
        if (J !== null) return JO(e, t, p, i, J, G, n);
      }
      if (c) {
        var re = i.fallback,
          De = i.children,
          He = XO(e, t, De, re, n),
          ze = t.child,
          Tt = e.child.memoizedState;
        return (
          (ze.memoizedState = Tt === null ? um(n) : $O(Tt, n)),
          (ze.childLanes = GO(e, n)),
          (t.memoizedState = lm),
          He
        );
      } else {
        var vt = i.children,
          H = qO(e, t, vt, n);
        return ((t.memoizedState = null), H);
      }
    }
  }
  function cm(e, t, n) {
    var i = e.mode,
      l = { mode: 'visible', children: t },
      c = fm(l, i);
    return ((c.return = e), (e.child = c), c);
  }
  function WO(e, t, n, i) {
    var l = e.mode,
      c = e.child,
      p = { mode: 'hidden', children: t },
      h,
      g;
    return (
      (l & bt) === $e && c !== null
        ? ((h = c),
          (h.childLanes = ve),
          (h.pendingProps = p),
          e.mode & zt &&
            ((h.actualDuration = 0),
            (h.actualStartTime = -1),
            (h.selfBaseDuration = 0),
            (h.treeBaseDuration = 0)),
          (g = Ii(n, l, i, null)))
        : ((h = fm(p, l)), (g = Ii(n, l, i, null))),
      (h.return = e),
      (g.return = e),
      (h.sibling = g),
      (e.child = h),
      g
    );
  }
  function fm(e, t, n) {
    return _0(e, t, ve, null);
  }
  function _T(e, t) {
    return Oo(e, t);
  }
  function qO(e, t, n, i) {
    var l = e.child,
      c = l.sibling,
      p = _T(l, { mode: 'visible', children: n });
    if (
      ((t.mode & bt) === $e && (p.lanes = i),
      (p.return = t),
      (p.sibling = null),
      c !== null)
    ) {
      var h = t.deletions;
      h === null ? ((t.deletions = [c]), (t.flags |= to)) : h.push(c);
    }
    return ((t.child = p), p);
  }
  function XO(e, t, n, i, l) {
    var c = t.mode,
      p = e.child,
      h = p.sibling,
      g = { mode: 'hidden', children: n },
      E;
    if ((c & bt) === $e && t.child !== p) {
      var x = t.child;
      ((E = x),
        (E.childLanes = ve),
        (E.pendingProps = g),
        t.mode & zt &&
          ((E.actualDuration = 0),
          (E.actualStartTime = -1),
          (E.selfBaseDuration = p.selfBaseDuration),
          (E.treeBaseDuration = p.treeBaseDuration)),
        (t.deletions = null));
    } else ((E = _T(p, g)), (E.subtreeFlags = p.subtreeFlags & Ia));
    var U;
    return (
      h !== null ? (U = Oo(h, i)) : ((U = Ii(i, c, l, null)), (U.flags |= vn)),
      (U.return = t),
      (E.return = t),
      (E.sibling = U),
      (t.child = E),
      U
    );
  }
  function Xf(e, t, n, i) {
    (i !== null && Yv(i), ms(t, e.child, null, n));
    var l = t.pendingProps,
      c = l.children,
      p = cm(t, c);
    return ((p.flags |= vn), (t.memoizedState = null), p);
  }
  function QO(e, t, n, i, l) {
    var c = t.mode,
      p = { mode: 'visible', children: n },
      h = fm(p, c),
      g = Ii(i, c, l, null);
    return (
      (g.flags |= vn),
      (h.return = t),
      (g.return = t),
      (h.sibling = g),
      (t.child = h),
      (t.mode & bt) !== $e && ms(t, e.child, null, l),
      g
    );
  }
  function KO(e, t, n) {
    return (
      (e.mode & bt) === $e
        ? (f(
            'Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components.'
          ),
          (e.lanes = rt))
        : Ov(t)
          ? (e.lanes = so)
          : (e.lanes = Sr),
      null
    );
  }
  function JO(e, t, n, i, l, c, p) {
    if (n)
      if (t.flags & za) {
        t.flags &= ~za;
        var H = Kh(
          new Error(
            'There was an error while hydrating this Suspense boundary. Switched to client rendering.'
          )
        );
        return Xf(e, t, p, H);
      } else {
        if (t.memoizedState !== null)
          return ((t.child = e.child), (t.flags |= Ot), null);
        var ae = i.children,
          j = i.fallback,
          ye = QO(e, t, ae, j, p),
          ke = t.child;
        return ((ke.memoizedState = um(p)), (t.memoizedState = lm), ye);
      }
    else {
      if ((ID(), (t.mode & bt) === $e)) return Xf(e, t, p, null);
      if (Ov(l)) {
        var h, g, E;
        {
          var x = nD(l);
          ((h = x.digest), (g = x.message), (E = x.stack));
        }
        var U;
        g
          ? (U = new Error(g))
          : (U = new Error(
              'The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.'
            ));
        var F = Kh(U, h, E);
        return Xf(e, t, p, F);
      }
      var G = Tr(p, e.childLanes);
      if (Jr || G) {
        var J = od();
        if (J !== null) {
          var re = l_(J, p);
          if (re !== Mn && re !== c.retryLane) {
            c.retryLane = re;
            var De = Wt;
            (dr(e, re), _n(J, e, re, De));
          }
        }
        Lm();
        var He = Kh(
          new Error(
            'This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition.'
          )
        );
        return Xf(e, t, p, He);
      } else if (Xb(l)) {
        ((t.flags |= Ot), (t.child = e.child));
        var ze = wM.bind(null, e);
        return (rD(l, ze), null);
      } else {
        HD(t, l, c.treeContext);
        var Tt = i.children,
          vt = cm(t, Tt);
        return ((vt.flags |= Fa), vt);
      }
    }
  }
  function RT(e, t, n) {
    e.lanes = ct(e.lanes, t);
    var i = e.alternate;
    (i !== null && (i.lanes = ct(i.lanes, t)), th(e.return, t, n));
  }
  function ZO(e, t, n) {
    for (var i = t; i !== null; ) {
      if (i.tag === z) {
        var l = i.memoizedState;
        l !== null && RT(i, n, e);
      } else if (i.tag === ie) RT(i, n, e);
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
  function eA(e) {
    for (var t = e, n = null; t !== null; ) {
      var i = t.alternate;
      (i !== null && Rf(i) === null && (n = t), (t = t.sibling));
    }
    return n;
  }
  function tA(e) {
    if (
      e !== void 0 &&
      e !== 'forwards' &&
      e !== 'backwards' &&
      e !== 'together' &&
      !am[e]
    )
      if (((am[e] = !0), typeof e == 'string'))
        switch (e.toLowerCase()) {
          case 'together':
          case 'forwards':
          case 'backwards': {
            f(
              '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
              e,
              e.toLowerCase()
            );
            break;
          }
          case 'forward':
          case 'backward': {
            f(
              '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
              e,
              e.toLowerCase()
            );
            break;
          }
          default:
            f(
              '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
              e
            );
            break;
        }
      else
        f(
          '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
          e
        );
  }
  function nA(e, t) {
    e !== void 0 &&
      !qf[e] &&
      (e !== 'collapsed' && e !== 'hidden'
        ? ((qf[e] = !0),
          f(
            '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',
            e
          ))
        : t !== 'forwards' &&
          t !== 'backwards' &&
          ((qf[e] = !0),
          f(
            '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
            e
          )));
  }
  function DT(e, t) {
    {
      var n = Dt(e),
        i = !n && typeof gr(e) == 'function';
      if (n || i) {
        var l = n ? 'array' : 'iterable';
        return (
          f(
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
  function rA(e, t) {
    if (
      (t === 'forwards' || t === 'backwards') &&
      e !== void 0 &&
      e !== null &&
      e !== !1
    )
      if (Dt(e)) {
        for (var n = 0; n < e.length; n++) if (!DT(e[n], n)) return;
      } else {
        var i = gr(e);
        if (typeof i == 'function') {
          var l = i.call(e);
          if (l)
            for (var c = l.next(), p = 0; !c.done; c = l.next()) {
              if (!DT(c.value, p)) return;
              p++;
            }
        } else
          f(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            t
          );
      }
  }
  function dm(e, t, n, i, l) {
    var c = e.memoizedState;
    c === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: i,
          tail: n,
          tailMode: l,
        })
      : ((c.isBackwards = t),
        (c.rendering = null),
        (c.renderingStartTime = 0),
        (c.last = i),
        (c.tail = n),
        (c.tailMode = l));
  }
  function OT(e, t, n) {
    var i = t.pendingProps,
      l = i.revealOrder,
      c = i.tail,
      p = i.children;
    (tA(l), nA(c, l), rA(p, l), tr(e, t, p, n));
    var h = Xr.current,
      g = ch(h, ou);
    if (g) ((h = fh(h, ou)), (t.flags |= Ot));
    else {
      var E = e !== null && (e.flags & Ot) !== Xe;
      (E && ZO(t, t.child, n), (h = Ss(h)));
    }
    if ((Mi(t, h), (t.mode & bt) === $e)) t.memoizedState = null;
    else
      switch (l) {
        case 'forwards': {
          var x = eA(t.child),
            U;
          (x === null
            ? ((U = t.child), (t.child = null))
            : ((U = x.sibling), (x.sibling = null)),
            dm(t, !1, U, x, c));
          break;
        }
        case 'backwards': {
          var F = null,
            G = t.child;
          for (t.child = null; G !== null; ) {
            var J = G.alternate;
            if (J !== null && Rf(J) === null) {
              t.child = G;
              break;
            }
            var re = G.sibling;
            ((G.sibling = F), (F = G), (G = re));
          }
          dm(t, !0, F, null, c);
          break;
        }
        case 'together': {
          dm(t, !1, null, null, void 0);
          break;
        }
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function aA(e, t, n) {
    sh(t, t.stateNode.containerInfo);
    var i = t.pendingProps;
    return (
      e === null ? (t.child = ms(t, null, i, n)) : tr(e, t, i, n),
      t.child
    );
  }
  var AT = !1;
  function iA(e, t, n) {
    var i = t.type,
      l = i._context,
      c = t.pendingProps,
      p = t.memoizedProps,
      h = c.value;
    {
      'value' in c ||
        AT ||
        ((AT = !0),
        f(
          'The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?'
        ));
      var g = t.type.propTypes;
      g && Gr(g, c, 'prop', 'Context.Provider');
    }
    if ((ES(t, l, h), p !== null)) {
      var E = p.value;
      if (Cr(E, h)) {
        if (p.children === c.children && !rf()) return Xa(e, t, n);
      } else tO(t, l, n);
    }
    var x = c.children;
    return (tr(e, t, x, n), t.child);
  }
  var MT = !1;
  function oA(e, t, n) {
    var i = t.type;
    i._context === void 0
      ? i !== i.Consumer &&
        (MT ||
          ((MT = !0),
          f(
            'Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?'
          )))
      : (i = i._context);
    var l = t.pendingProps,
      c = l.children;
    (typeof c != 'function' &&
      f(
        "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
      ),
      gs(t, n));
    var p = hn(i);
    hl(t);
    var h;
    return (
      (hu.current = t),
      br(!0),
      (h = c(p)),
      br(!1),
      Ko(),
      (t.flags |= qo),
      tr(e, t, h, n),
      t.child
    );
  }
  function gu() {
    Jr = !0;
  }
  function Qf(e, t) {
    (t.mode & bt) === $e &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= vn));
  }
  function Xa(e, t, n) {
    return (
      e !== null && (t.dependencies = e.dependencies),
      oT(),
      Au(t.lanes),
      Tr(n, t.childLanes) ? (ZD(e, t), t.child) : null
    );
  }
  function sA(e, t, n) {
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
      var c = i.deletions;
      return (
        c === null ? ((i.deletions = [e]), (i.flags |= to)) : c.push(e),
        (n.flags |= vn),
        n
      );
    }
  }
  function pm(e, t) {
    var n = e.lanes;
    return !!Tr(n, t);
  }
  function lA(e, t, n) {
    switch (t.tag) {
      case T:
        (wT(t), t.stateNode, hs());
        break;
      case R:
        AS(t);
        break;
      case y: {
        var i = t.type;
        va(i) && of(t);
        break;
      }
      case w:
        sh(t, t.stateNode.containerInfo);
        break;
      case C: {
        var l = t.memoizedProps.value,
          c = t.type._context;
        ES(t, c, l);
        break;
      }
      case k:
        {
          var p = Tr(n, t.childLanes);
          p && (t.flags |= Et);
          {
            var h = t.stateNode;
            ((h.effectDuration = 0), (h.passiveEffectDuration = 0));
          }
        }
        break;
      case z: {
        var g = t.memoizedState;
        if (g !== null) {
          if (g.dehydrated !== null)
            return (Mi(t, Ss(Xr.current)), (t.flags |= Ot), null);
          var E = t.child,
            x = E.childLanes;
          if (Tr(n, x)) return xT(e, t, n);
          Mi(t, Ss(Xr.current));
          var U = Xa(e, t, n);
          return U !== null ? U.sibling : null;
        } else Mi(t, Ss(Xr.current));
        break;
      }
      case ie: {
        var F = (e.flags & Ot) !== Xe,
          G = Tr(n, t.childLanes);
        if (F) {
          if (G) return OT(e, t, n);
          t.flags |= Ot;
        }
        var J = t.memoizedState;
        if (
          (J !== null &&
            ((J.rendering = null), (J.tail = null), (J.lastEffect = null)),
          Mi(t, Xr.current),
          G)
        )
          break;
        return null;
      }
      case X:
      case oe:
        return ((t.lanes = ve), ST(e, t, n));
    }
    return Xa(e, t, n);
  }
  function LT(e, t, n) {
    if (t._debugNeedsRemount && e !== null)
      return sA(
        e,
        t,
        jm(
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
      if (i !== l || rf() || t.type !== e.type) Jr = !0;
      else {
        var c = pm(e, n);
        if (!c && (t.flags & Ot) === Xe) return ((Jr = !1), lA(e, t, n));
        (e.flags & bp) !== Xe ? (Jr = !0) : (Jr = !1);
      }
    } else if (((Jr = !1), zn() && kD(t))) {
      var p = t.index,
        h = ND();
      oS(t, h, p);
    }
    switch (((t.lanes = ve), t.tag)) {
      case b:
        return jO(e, t, t.type, n);
      case q: {
        var g = t.elementType;
        return BO(e, t, g, n);
      }
      case m: {
        var E = t.type,
          x = t.pendingProps,
          U = t.elementType === E ? x : Kr(E, x);
        return im(e, t, E, U, n);
      }
      case y: {
        var F = t.type,
          G = t.pendingProps,
          J = t.elementType === F ? G : Kr(F, G);
        return ET(e, t, F, J, n);
      }
      case T:
        return UO(e, t, n);
      case R:
        return IO(e, t, n);
      case D:
        return VO(e, t);
      case z:
        return xT(e, t, n);
      case w:
        return aA(e, t, n);
      case M: {
        var re = t.type,
          De = t.pendingProps,
          He = t.elementType === re ? De : Kr(re, De);
        return yT(e, t, re, He, n);
      }
      case _:
        return PO(e, t, n);
      case L:
        return zO(e, t, n);
      case k:
        return FO(e, t, n);
      case C:
        return iA(e, t, n);
      case O:
        return oA(e, t, n);
      case Y: {
        var ze = t.type,
          Tt = t.pendingProps,
          vt = Kr(ze, Tt);
        if (t.type !== t.elementType) {
          var H = ze.propTypes;
          H && Gr(H, vt, 'prop', Ct(ze));
        }
        return ((vt = Kr(ze.type, vt)), gT(e, t, ze, vt, n));
      }
      case B:
        return bT(e, t, t.type, t.pendingProps, n);
      case Z: {
        var ae = t.type,
          j = t.pendingProps,
          ye = t.elementType === ae ? j : Kr(ae, j);
        return HO(e, t, ae, ye, n);
      }
      case ie:
        return OT(e, t, n);
      case I:
        break;
      case X:
        return ST(e, t, n);
    }
    throw new Error(
      'Unknown unit of work tag (' +
        t.tag +
        '). This error is likely caused by a bug in React. Please file an issue.'
    );
  }
  function _s(e) {
    e.flags |= Et;
  }
  function kT(e) {
    ((e.flags |= yi), (e.flags |= Sp));
  }
  var NT, vm, PT, zT;
  ((NT = function (e, t, n, i) {
    for (var l = t.child; l !== null; ) {
      if (l.tag === R || l.tag === D) A1(e, l.stateNode);
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
    (vm = function (e, t) {}),
    (PT = function (e, t, n, i, l) {
      var c = e.memoizedProps;
      if (c !== i) {
        var p = t.stateNode,
          h = lh(),
          g = L1(p, n, c, i, l, h);
        ((t.updateQueue = g), g && _s(t));
      }
    }),
    (zT = function (e, t, n, i) {
      n !== i && _s(t);
    }));
  function bu(e, t) {
    if (!zn())
      switch (e.tailMode) {
        case 'hidden': {
          for (var n = e.tail, i = null; n !== null; )
            (n.alternate !== null && (i = n), (n = n.sibling));
          i === null ? (e.tail = null) : (i.sibling = null);
          break;
        }
        case 'collapsed': {
          for (var l = e.tail, c = null; l !== null; )
            (l.alternate !== null && (c = l), (l = l.sibling));
          c === null
            ? !t && e.tail !== null
              ? (e.tail.sibling = null)
              : (e.tail = null)
            : (c.sibling = null);
          break;
        }
      }
  }
  function Un(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = ve,
      i = Xe;
    if (t) {
      if ((e.mode & zt) !== $e) {
        for (var g = e.selfBaseDuration, E = e.child; E !== null; )
          ((n = ct(n, ct(E.lanes, E.childLanes))),
            (i |= E.subtreeFlags & Ia),
            (i |= E.flags & Ia),
            (g += E.treeBaseDuration),
            (E = E.sibling));
        e.treeBaseDuration = g;
      } else
        for (var x = e.child; x !== null; )
          ((n = ct(n, ct(x.lanes, x.childLanes))),
            (i |= x.subtreeFlags & Ia),
            (i |= x.flags & Ia),
            (x.return = e),
            (x = x.sibling));
      e.subtreeFlags |= i;
    } else {
      if ((e.mode & zt) !== $e) {
        for (
          var l = e.actualDuration, c = e.selfBaseDuration, p = e.child;
          p !== null;

        )
          ((n = ct(n, ct(p.lanes, p.childLanes))),
            (i |= p.subtreeFlags),
            (i |= p.flags),
            (l += p.actualDuration),
            (c += p.treeBaseDuration),
            (p = p.sibling));
        ((e.actualDuration = l), (e.treeBaseDuration = c));
      } else
        for (var h = e.child; h !== null; )
          ((n = ct(n, ct(h.lanes, h.childLanes))),
            (i |= h.subtreeFlags),
            (i |= h.flags),
            (h.return = e),
            (h = h.sibling));
      e.subtreeFlags |= i;
    }
    return ((e.childLanes = n), t);
  }
  function uA(e, t, n) {
    if (WD() && (t.mode & bt) !== $e && (t.flags & Ot) === Xe)
      return (pS(t), hs(), (t.flags |= za | pl | er), !1);
    var i = ff(t);
    if (n !== null && n.dehydrated !== null)
      if (e === null) {
        if (!i)
          throw new Error(
            'A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.'
          );
        if ((YD(t), Un(t), (t.mode & zt) !== $e)) {
          var l = n !== null;
          if (l) {
            var c = t.child;
            c !== null && (t.treeBaseDuration -= c.treeBaseDuration);
          }
        }
        return !1;
      } else {
        if (
          (hs(),
          (t.flags & Ot) === Xe && (t.memoizedState = null),
          (t.flags |= Et),
          Un(t),
          (t.mode & zt) !== $e)
        ) {
          var p = n !== null;
          if (p) {
            var h = t.child;
            h !== null && (t.treeBaseDuration -= h.treeBaseDuration);
          }
        }
        return !1;
      }
    else return (vS(), !0);
  }
  function FT(e, t, n) {
    var i = t.pendingProps;
    switch ((Vv(t), t.tag)) {
      case b:
      case q:
      case B:
      case m:
      case M:
      case _:
      case L:
      case k:
      case O:
      case Y:
        return (Un(t), null);
      case y: {
        var l = t.type;
        return (va(l) && af(t), Un(t), null);
      }
      case T: {
        var c = t.stateNode;
        if (
          (bs(t),
          zv(t),
          ph(),
          c.pendingContext &&
            ((c.context = c.pendingContext), (c.pendingContext = null)),
          e === null || e.child === null)
        ) {
          var p = ff(t);
          if (p) _s(t);
          else if (e !== null) {
            var h = e.memoizedState;
            (!h.isDehydrated || (t.flags & za) !== Xe) &&
              ((t.flags |= no), vS());
          }
        }
        return (vm(e, t), Un(t), null);
      }
      case R: {
        uh(t);
        var g = OS(),
          E = t.type;
        if (e !== null && t.stateNode != null)
          (PT(e, t, E, i, g), e.ref !== t.ref && kT(t));
        else {
          if (!i) {
            if (t.stateNode === null)
              throw new Error(
                'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.'
              );
            return (Un(t), null);
          }
          var x = lh(),
            U = ff(t);
          if (U) jD(t, g, x) && _s(t);
          else {
            var F = O1(E, i, g, x, t);
            (NT(F, t, !1, !1), (t.stateNode = F), M1(F, E, i, g) && _s(t));
          }
          t.ref !== null && kT(t);
        }
        return (Un(t), null);
      }
      case D: {
        var G = i;
        if (e && t.stateNode != null) {
          var J = e.memoizedProps;
          zT(e, t, J, G);
        } else {
          if (typeof G != 'string' && t.stateNode === null)
            throw new Error(
              'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.'
            );
          var re = OS(),
            De = lh(),
            He = ff(t);
          He ? $D(t) && _s(t) : (t.stateNode = k1(G, re, De, t));
        }
        return (Un(t), null);
      }
      case z: {
        Ts(t);
        var ze = t.memoizedState;
        if (
          e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null)
        ) {
          var Tt = uA(e, t, ze);
          if (!Tt) return t.flags & er ? t : null;
        }
        if ((t.flags & Ot) !== Xe)
          return ((t.lanes = n), (t.mode & zt) !== $e && Uh(t), t);
        var vt = ze !== null,
          H = e !== null && e.memoizedState !== null;
        if (vt !== H && vt) {
          var ae = t.child;
          if (((ae.flags |= ro), (t.mode & bt) !== $e)) {
            var j =
              e === null &&
              (t.memoizedProps.unstable_avoidThisFallback !== !0 || !Nt);
            j || ch(Xr.current, LS) ? cM() : Lm();
          }
        }
        var ye = t.updateQueue;
        if (
          (ye !== null && (t.flags |= Et), Un(t), (t.mode & zt) !== $e && vt)
        ) {
          var ke = t.child;
          ke !== null && (t.treeBaseDuration -= ke.treeBaseDuration);
        }
        return null;
      }
      case w:
        return (
          bs(t),
          vm(e, t),
          e === null && _D(t.stateNode.containerInfo),
          Un(t),
          null
        );
      case C:
        var Oe = t.type._context;
        return (eh(Oe, t), Un(t), null);
      case Z: {
        var Je = t.type;
        return (va(Je) && af(t), Un(t), null);
      }
      case ie: {
        Ts(t);
        var it = t.memoizedState;
        if (it === null) return (Un(t), null);
        var Ut = (t.flags & Ot) !== Xe,
          _t = it.rendering;
        if (_t === null)
          if (Ut) bu(it, !1);
          else {
            var fn = dM() && (e === null || (e.flags & Ot) === Xe);
            if (!fn)
              for (var Rt = t.child; Rt !== null; ) {
                var un = Rf(Rt);
                if (un !== null) {
                  ((Ut = !0), (t.flags |= Ot), bu(it, !1));
                  var Qn = un.updateQueue;
                  return (
                    Qn !== null && ((t.updateQueue = Qn), (t.flags |= Et)),
                    (t.subtreeFlags = Xe),
                    eO(t, n),
                    Mi(t, fh(Xr.current, ou)),
                    t.child
                  );
                }
                Rt = Rt.sibling;
              }
            it.tail !== null &&
              On() > a0() &&
              ((t.flags |= Ot), (Ut = !0), bu(it, !1), (t.lanes = zg));
          }
        else {
          if (!Ut) {
            var jn = Rf(_t);
            if (jn !== null) {
              ((t.flags |= Ot), (Ut = !0));
              var Rr = jn.updateQueue;
              if (
                (Rr !== null && ((t.updateQueue = Rr), (t.flags |= Et)),
                bu(it, !0),
                it.tail === null &&
                  it.tailMode === 'hidden' &&
                  !_t.alternate &&
                  !zn())
              )
                return (Un(t), null);
            } else
              On() * 2 - it.renderingStartTime > a0() &&
                n !== Sr &&
                ((t.flags |= Ot), (Ut = !0), bu(it, !1), (t.lanes = zg));
          }
          if (it.isBackwards) ((_t.sibling = t.child), (t.child = _t));
          else {
            var ar = it.last;
            (ar !== null ? (ar.sibling = _t) : (t.child = _t), (it.last = _t));
          }
        }
        if (it.tail !== null) {
          var ir = it.tail;
          ((it.rendering = ir),
            (it.tail = ir.sibling),
            (it.renderingStartTime = On()),
            (ir.sibling = null));
          var Kn = Xr.current;
          return (Ut ? (Kn = fh(Kn, ou)) : (Kn = Ss(Kn)), Mi(t, Kn), ir);
        }
        return (Un(t), null);
      }
      case I:
        break;
      case X:
      case oe: {
        Mm(t);
        var ei = t.memoizedState,
          Ns = ei !== null;
        if (e !== null) {
          var Pu = e.memoizedState,
            Ea = Pu !== null;
          Ea !== Ns && !Ge && (t.flags |= ro);
        }
        return (
          !Ns || (t.mode & bt) === $e
            ? Un(t)
            : Tr(Ta, Sr) &&
              (Un(t), t.subtreeFlags & (vn | Et) && (t.flags |= ro)),
          null
        );
      }
      case fe:
        return null;
      case ue:
        return null;
    }
    throw new Error(
      'Unknown unit of work tag (' +
        t.tag +
        '). This error is likely caused by a bug in React. Please file an issue.'
    );
  }
  function cA(e, t, n) {
    switch ((Vv(t), t.tag)) {
      case y: {
        var i = t.type;
        va(i) && af(t);
        var l = t.flags;
        return l & er
          ? ((t.flags = (l & ~er) | Ot), (t.mode & zt) !== $e && Uh(t), t)
          : null;
      }
      case T: {
        (t.stateNode, bs(t), zv(t), ph());
        var c = t.flags;
        return (c & er) !== Xe && (c & Ot) === Xe
          ? ((t.flags = (c & ~er) | Ot), t)
          : null;
      }
      case R:
        return (uh(t), null);
      case z: {
        Ts(t);
        var p = t.memoizedState;
        if (p !== null && p.dehydrated !== null) {
          if (t.alternate === null)
            throw new Error(
              'Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.'
            );
          hs();
        }
        var h = t.flags;
        return h & er
          ? ((t.flags = (h & ~er) | Ot), (t.mode & zt) !== $e && Uh(t), t)
          : null;
      }
      case ie:
        return (Ts(t), null);
      case w:
        return (bs(t), null);
      case C:
        var g = t.type._context;
        return (eh(g, t), null);
      case X:
      case oe:
        return (Mm(t), null);
      case fe:
        return null;
      default:
        return null;
    }
  }
  function UT(e, t, n) {
    switch ((Vv(t), t.tag)) {
      case y: {
        var i = t.type.childContextTypes;
        i != null && af(t);
        break;
      }
      case T: {
        (t.stateNode, bs(t), zv(t), ph());
        break;
      }
      case R: {
        uh(t);
        break;
      }
      case w:
        bs(t);
        break;
      case z:
        Ts(t);
        break;
      case ie:
        Ts(t);
        break;
      case C:
        var l = t.type._context;
        eh(l, t);
        break;
      case X:
      case oe:
        Mm(t);
        break;
    }
  }
  var IT = null;
  IT = new Set();
  var Kf = !1,
    In = !1,
    fA = typeof WeakSet == 'function' ? WeakSet : Set,
    Ne = null,
    Rs = null,
    Ds = null;
  function dA(e) {
    (mp(null, function () {
      throw e;
    }),
      yp());
  }
  var pA = function (e, t) {
    if (((t.props = e.memoizedProps), (t.state = e.memoizedState), e.mode & zt))
      try {
        (ba(), t.componentWillUnmount());
      } finally {
        ga(e);
      }
    else t.componentWillUnmount();
  };
  function VT(e, t) {
    try {
      Ni(Sn, e);
    } catch (n) {
      $t(e, t, n);
    }
  }
  function hm(e, t, n) {
    try {
      pA(e, n);
    } catch (i) {
      $t(e, t, i);
    }
  }
  function vA(e, t, n) {
    try {
      n.componentDidMount();
    } catch (i) {
      $t(e, t, i);
    }
  }
  function BT(e, t) {
    try {
      jT(e);
    } catch (n) {
      $t(e, t, n);
    }
  }
  function Os(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == 'function') {
        var i;
        try {
          if (Q && Ze && e.mode & zt)
            try {
              (ba(), (i = n(null)));
            } finally {
              ga(e);
            }
          else i = n(null);
        } catch (l) {
          $t(e, t, l);
        }
        typeof i == 'function' &&
          f(
            'Unexpected return value from a callback ref in %s. A callback ref should not return a function.',
            ut(e)
          );
      } else n.current = null;
  }
  function Jf(e, t, n) {
    try {
      n();
    } catch (i) {
      $t(e, t, i);
    }
  }
  var HT = !1;
  function hA(e, t) {
    (R1(e.containerInfo), (Ne = t), mA());
    var n = HT;
    return ((HT = !1), n);
  }
  function mA() {
    for (; Ne !== null; ) {
      var e = Ne,
        t = e.child;
      (e.subtreeFlags & Ep) !== Xe && t !== null
        ? ((t.return = e), (Ne = t))
        : yA();
    }
  }
  function yA() {
    for (; Ne !== null; ) {
      var e = Ne;
      tn(e);
      try {
        gA(e);
      } catch (n) {
        $t(e, e.return, n);
      }
      Dn();
      var t = e.sibling;
      if (t !== null) {
        ((t.return = e.return), (Ne = t));
        return;
      }
      Ne = e.return;
    }
  }
  function gA(e) {
    var t = e.alternate,
      n = e.flags;
    if ((n & no) !== Xe) {
      switch ((tn(e), e.tag)) {
        case m:
        case M:
        case B:
          break;
        case y: {
          if (t !== null) {
            var i = t.memoizedProps,
              l = t.memoizedState,
              c = e.stateNode;
            e.type === e.elementType &&
              !Co &&
              (c.props !== e.memoizedProps &&
                f(
                  'Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.',
                  ut(e) || 'instance'
                ),
              c.state !== e.memoizedState &&
                f(
                  'Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.',
                  ut(e) || 'instance'
                ));
            var p = c.getSnapshotBeforeUpdate(
              e.elementType === e.type ? i : Kr(e.type, i),
              l
            );
            {
              var h = IT;
              p === void 0 &&
                !h.has(e.type) &&
                (h.add(e.type),
                f(
                  '%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.',
                  ut(e)
                ));
            }
            c.__reactInternalSnapshotBeforeUpdate = p;
          }
          break;
        }
        case T: {
          {
            var g = e.stateNode;
            J1(g.containerInfo);
          }
          break;
        }
        case R:
        case D:
        case w:
        case Z:
          break;
        default:
          throw new Error(
            'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.'
          );
      }
      Dn();
    }
  }
  function Zr(e, t, n) {
    var i = t.updateQueue,
      l = i !== null ? i.lastEffect : null;
    if (l !== null) {
      var c = l.next,
        p = c;
      do {
        if ((p.tag & e) === e) {
          var h = p.destroy;
          ((p.destroy = void 0),
            h !== void 0 &&
              ((e & Fn) !== pr ? kx(t) : (e & Sn) !== pr && Mg(t),
              (e & ha) !== pr && Lu(!0),
              Jf(t, n, h),
              (e & ha) !== pr && Lu(!1),
              (e & Fn) !== pr ? Nx() : (e & Sn) !== pr && Lg()));
        }
        p = p.next;
      } while (p !== c);
    }
  }
  function Ni(e, t) {
    var n = t.updateQueue,
      i = n !== null ? n.lastEffect : null;
    if (i !== null) {
      var l = i.next,
        c = l;
      do {
        if ((c.tag & e) === e) {
          (e & Fn) !== pr ? Mx(t) : (e & Sn) !== pr && Px(t);
          var p = c.create;
          ((e & ha) !== pr && Lu(!0),
            (c.destroy = p()),
            (e & ha) !== pr && Lu(!1),
            (e & Fn) !== pr ? Lx() : (e & Sn) !== pr && zx());
          {
            var h = c.destroy;
            if (h !== void 0 && typeof h != 'function') {
              var g = void 0;
              (c.tag & Sn) !== Xe
                ? (g = 'useLayoutEffect')
                : (c.tag & ha) !== Xe
                  ? (g = 'useInsertionEffect')
                  : (g = 'useEffect');
              var E = void 0;
              (h === null
                ? (E =
                    ' You returned null. If your effect does not require clean up, return undefined (or nothing).')
                : typeof h.then == 'function'
                  ? (E =
                      `

It looks like you wrote ` +
                      g +
                      `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` +
                      g +
                      `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching`)
                  : (E = ' You returned: ' + h),
                f(
                  '%s must not return anything besides a function, which is used for clean-up.%s',
                  g,
                  E
                ));
            }
          }
        }
        c = c.next;
      } while (c !== l);
    }
  }
  function bA(e, t) {
    if ((t.flags & Et) !== Xe)
      switch (t.tag) {
        case k: {
          var n = t.stateNode.passiveEffectDuration,
            i = t.memoizedProps,
            l = i.id,
            c = i.onPostCommit,
            p = aT(),
            h = t.alternate === null ? 'mount' : 'update';
          (rT() && (h = 'nested-update'),
            typeof c == 'function' && c(l, h, n, p));
          var g = t.return;
          e: for (; g !== null; ) {
            switch (g.tag) {
              case T:
                var E = g.stateNode;
                E.passiveEffectDuration += n;
                break e;
              case k:
                var x = g.stateNode;
                x.passiveEffectDuration += n;
                break e;
            }
            g = g.return;
          }
          break;
        }
      }
  }
  function SA(e, t, n, i) {
    if ((n.flags & vl) !== Xe)
      switch (n.tag) {
        case m:
        case M:
        case B: {
          if (!In)
            if (n.mode & zt)
              try {
                (ba(), Ni(Sn | bn, n));
              } finally {
                ga(n);
              }
            else Ni(Sn | bn, n);
          break;
        }
        case y: {
          var l = n.stateNode;
          if (n.flags & Et && !In)
            if (t === null)
              if (
                (n.type === n.elementType &&
                  !Co &&
                  (l.props !== n.memoizedProps &&
                    f(
                      'Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.',
                      ut(n) || 'instance'
                    ),
                  l.state !== n.memoizedState &&
                    f(
                      'Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.',
                      ut(n) || 'instance'
                    )),
                n.mode & zt)
              )
                try {
                  (ba(), l.componentDidMount());
                } finally {
                  ga(n);
                }
              else l.componentDidMount();
            else {
              var c =
                  n.elementType === n.type
                    ? t.memoizedProps
                    : Kr(n.type, t.memoizedProps),
                p = t.memoizedState;
              if (
                (n.type === n.elementType &&
                  !Co &&
                  (l.props !== n.memoizedProps &&
                    f(
                      'Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.',
                      ut(n) || 'instance'
                    ),
                  l.state !== n.memoizedState &&
                    f(
                      'Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.',
                      ut(n) || 'instance'
                    )),
                n.mode & zt)
              )
                try {
                  (ba(),
                    l.componentDidUpdate(
                      c,
                      p,
                      l.__reactInternalSnapshotBeforeUpdate
                    ));
                } finally {
                  ga(n);
                }
              else
                l.componentDidUpdate(
                  c,
                  p,
                  l.__reactInternalSnapshotBeforeUpdate
                );
            }
          var h = n.updateQueue;
          h !== null &&
            (n.type === n.elementType &&
              !Co &&
              (l.props !== n.memoizedProps &&
                f(
                  'Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.',
                  ut(n) || 'instance'
                ),
              l.state !== n.memoizedState &&
                f(
                  'Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.',
                  ut(n) || 'instance'
                )),
            DS(n, h, l));
          break;
        }
        case T: {
          var g = n.updateQueue;
          if (g !== null) {
            var E = null;
            if (n.child !== null)
              switch (n.child.tag) {
                case R:
                  E = n.child.stateNode;
                  break;
                case y:
                  E = n.child.stateNode;
                  break;
              }
            DS(n, g, E);
          }
          break;
        }
        case R: {
          var x = n.stateNode;
          if (t === null && n.flags & Et) {
            var U = n.type,
              F = n.memoizedProps;
            U1(x, U, F);
          }
          break;
        }
        case D:
          break;
        case w:
          break;
        case k: {
          {
            var G = n.memoizedProps,
              J = G.onCommit,
              re = G.onRender,
              De = n.stateNode.effectDuration,
              He = aT(),
              ze = t === null ? 'mount' : 'update';
            (rT() && (ze = 'nested-update'),
              typeof re == 'function' &&
                re(
                  n.memoizedProps.id,
                  ze,
                  n.actualDuration,
                  n.treeBaseDuration,
                  n.actualStartTime,
                  He
                ));
            {
              (typeof J == 'function' && J(n.memoizedProps.id, ze, De, He),
                yM(n));
              var Tt = n.return;
              e: for (; Tt !== null; ) {
                switch (Tt.tag) {
                  case T:
                    var vt = Tt.stateNode;
                    vt.effectDuration += De;
                    break e;
                  case k:
                    var H = Tt.stateNode;
                    H.effectDuration += De;
                    break e;
                }
                Tt = Tt.return;
              }
            }
          }
          break;
        }
        case z: {
          DA(e, n);
          break;
        }
        case ie:
        case Z:
        case I:
        case X:
        case oe:
        case ue:
          break;
        default:
          throw new Error(
            'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.'
          );
      }
    In || (n.flags & yi && jT(n));
  }
  function TA(e) {
    switch (e.tag) {
      case m:
      case M:
      case B: {
        if (e.mode & zt)
          try {
            (ba(), VT(e, e.return));
          } finally {
            ga(e);
          }
        else VT(e, e.return);
        break;
      }
      case y: {
        var t = e.stateNode;
        (typeof t.componentDidMount == 'function' && vA(e, e.return, t),
          BT(e, e.return));
        break;
      }
      case R: {
        BT(e, e.return);
        break;
      }
    }
  }
  function EA(e, t) {
    for (var n = null, i = e; ; ) {
      if (i.tag === R) {
        if (n === null) {
          n = i;
          try {
            var l = i.stateNode;
            t ? q1(l) : Q1(i.stateNode, i.memoizedProps);
          } catch (p) {
            $t(e, e.return, p);
          }
        }
      } else if (i.tag === D) {
        if (n === null)
          try {
            var c = i.stateNode;
            t ? X1(c) : K1(c, i.memoizedProps);
          } catch (p) {
            $t(e, e.return, p);
          }
      } else if (
        !((i.tag === X || i.tag === oe) && i.memoizedState !== null && i !== e)
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
  function jT(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode,
        i;
      switch (e.tag) {
        case R:
          i = n;
          break;
        default:
          i = n;
      }
      if (typeof t == 'function') {
        var l;
        if (e.mode & zt)
          try {
            (ba(), (l = t(i)));
          } finally {
            ga(e);
          }
        else l = t(i);
        typeof l == 'function' &&
          f(
            'Unexpected return value from a callback ref in %s. A callback ref should not return a function.',
            ut(e)
          );
      } else
        (t.hasOwnProperty('current') ||
          f(
            'Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().',
            ut(e)
          ),
          (t.current = i));
    }
  }
  function wA(e) {
    var t = e.alternate;
    (t !== null && (t.return = null), (e.return = null));
  }
  function $T(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), $T(t));
    {
      if (
        ((e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === R)
      ) {
        var n = e.stateNode;
        n !== null && OD(n);
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
  function CA(e) {
    for (var t = e.return; t !== null; ) {
      if (YT(t)) return t;
      t = t.return;
    }
    throw new Error(
      'Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.'
    );
  }
  function YT(e) {
    return e.tag === R || e.tag === T || e.tag === w;
  }
  function GT(e) {
    var t = e;
    e: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || YT(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== R && t.tag !== D && t.tag !== W;

      ) {
        if (t.flags & vn || t.child === null || t.tag === w) continue e;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & vn)) return t.stateNode;
    }
  }
  function xA(e) {
    var t = CA(e);
    switch (t.tag) {
      case R: {
        var n = t.stateNode;
        t.flags & dl && (qb(n), (t.flags &= ~dl));
        var i = GT(e);
        ym(e, i, n);
        break;
      }
      case T:
      case w: {
        var l = t.stateNode.containerInfo,
          c = GT(e);
        mm(e, c, l);
        break;
      }
      default:
        throw new Error(
          'Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.'
        );
    }
  }
  function mm(e, t, n) {
    var i = e.tag,
      l = i === R || i === D;
    if (l) {
      var c = e.stateNode;
      t ? $1(n, c, t) : H1(n, c);
    } else if (i !== w) {
      var p = e.child;
      if (p !== null) {
        mm(p, t, n);
        for (var h = p.sibling; h !== null; ) (mm(h, t, n), (h = h.sibling));
      }
    }
  }
  function ym(e, t, n) {
    var i = e.tag,
      l = i === R || i === D;
    if (l) {
      var c = e.stateNode;
      t ? j1(n, c, t) : B1(n, c);
    } else if (i !== w) {
      var p = e.child;
      if (p !== null) {
        ym(p, t, n);
        for (var h = p.sibling; h !== null; ) (ym(h, t, n), (h = h.sibling));
      }
    }
  }
  var Vn = null,
    ea = !1;
  function _A(e, t, n) {
    {
      var i = t;
      e: for (; i !== null; ) {
        switch (i.tag) {
          case R: {
            ((Vn = i.stateNode), (ea = !1));
            break e;
          }
          case T: {
            ((Vn = i.stateNode.containerInfo), (ea = !0));
            break e;
          }
          case w: {
            ((Vn = i.stateNode.containerInfo), (ea = !0));
            break e;
          }
        }
        i = i.return;
      }
      if (Vn === null)
        throw new Error(
          'Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.'
        );
      (WT(e, t, n), (Vn = null), (ea = !1));
    }
    wA(n);
  }
  function Pi(e, t, n) {
    for (var i = n.child; i !== null; ) (WT(e, t, i), (i = i.sibling));
  }
  function WT(e, t, n) {
    switch ((Rx(n), n.tag)) {
      case R:
        In || Os(n, t);
      case D: {
        {
          var i = Vn,
            l = ea;
          ((Vn = null),
            Pi(e, t, n),
            (Vn = i),
            (ea = l),
            Vn !== null && (ea ? G1(Vn, n.stateNode) : Y1(Vn, n.stateNode)));
        }
        return;
      }
      case W: {
        Vn !== null && (ea ? W1(Vn, n.stateNode) : Dv(Vn, n.stateNode));
        return;
      }
      case w: {
        {
          var c = Vn,
            p = ea;
          ((Vn = n.stateNode.containerInfo),
            (ea = !0),
            Pi(e, t, n),
            (Vn = c),
            (ea = p));
        }
        return;
      }
      case m:
      case M:
      case Y:
      case B: {
        if (!In) {
          var h = n.updateQueue;
          if (h !== null) {
            var g = h.lastEffect;
            if (g !== null) {
              var E = g.next,
                x = E;
              do {
                var U = x,
                  F = U.destroy,
                  G = U.tag;
                (F !== void 0 &&
                  ((G & ha) !== pr
                    ? Jf(n, t, F)
                    : (G & Sn) !== pr &&
                      (Mg(n),
                      n.mode & zt ? (ba(), Jf(n, t, F), ga(n)) : Jf(n, t, F),
                      Lg())),
                  (x = x.next));
              } while (x !== E);
            }
          }
        }
        Pi(e, t, n);
        return;
      }
      case y: {
        if (!In) {
          Os(n, t);
          var J = n.stateNode;
          typeof J.componentWillUnmount == 'function' && hm(n, t, J);
        }
        Pi(e, t, n);
        return;
      }
      case I: {
        Pi(e, t, n);
        return;
      }
      case X: {
        if (n.mode & bt) {
          var re = In;
          ((In = re || n.memoizedState !== null), Pi(e, t, n), (In = re));
        } else Pi(e, t, n);
        break;
      }
      default: {
        Pi(e, t, n);
        return;
      }
    }
  }
  function RA(e) {
    e.memoizedState;
  }
  function DA(e, t) {
    var n = t.memoizedState;
    if (n === null) {
      var i = t.alternate;
      if (i !== null) {
        var l = i.memoizedState;
        if (l !== null) {
          var c = l.dehydrated;
          c !== null && dD(c);
        }
      }
    }
  }
  function qT(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new fA()),
        t.forEach(function (i) {
          var l = CM.bind(null, e, i);
          if (!n.has(i)) {
            if ((n.add(i), $r))
              if (Rs !== null && Ds !== null) Mu(Ds, Rs);
              else
                throw Error(
                  'Expected finished root and lanes to be set. This is a bug in React.'
                );
            i.then(l, l);
          }
        }));
    }
  }
  function OA(e, t, n) {
    ((Rs = n), (Ds = e), tn(t), XT(t, e), tn(t), (Rs = null), (Ds = null));
  }
  function ta(e, t, n) {
    var i = t.deletions;
    if (i !== null)
      for (var l = 0; l < i.length; l++) {
        var c = i[l];
        try {
          _A(e, t, c);
        } catch (g) {
          $t(c, t, g);
        }
      }
    var p = sc();
    if (t.subtreeFlags & wp)
      for (var h = t.child; h !== null; ) (tn(h), XT(h, e), (h = h.sibling));
    tn(p);
  }
  function XT(e, t, n) {
    var i = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case m:
      case M:
      case Y:
      case B: {
        if ((ta(t, e), Sa(e), l & Et)) {
          try {
            (Zr(ha | bn, e, e.return), Ni(ha | bn, e));
          } catch (Je) {
            $t(e, e.return, Je);
          }
          if (e.mode & zt) {
            try {
              (ba(), Zr(Sn | bn, e, e.return));
            } catch (Je) {
              $t(e, e.return, Je);
            }
            ga(e);
          } else
            try {
              Zr(Sn | bn, e, e.return);
            } catch (Je) {
              $t(e, e.return, Je);
            }
        }
        return;
      }
      case y: {
        (ta(t, e), Sa(e), l & yi && i !== null && Os(i, i.return));
        return;
      }
      case R: {
        (ta(t, e), Sa(e), l & yi && i !== null && Os(i, i.return));
        {
          if (e.flags & dl) {
            var c = e.stateNode;
            try {
              qb(c);
            } catch (Je) {
              $t(e, e.return, Je);
            }
          }
          if (l & Et) {
            var p = e.stateNode;
            if (p != null) {
              var h = e.memoizedProps,
                g = i !== null ? i.memoizedProps : h,
                E = e.type,
                x = e.updateQueue;
              if (((e.updateQueue = null), x !== null))
                try {
                  I1(p, x, E, g, h, e);
                } catch (Je) {
                  $t(e, e.return, Je);
                }
            }
          }
        }
        return;
      }
      case D: {
        if ((ta(t, e), Sa(e), l & Et)) {
          if (e.stateNode === null)
            throw new Error(
              'This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.'
            );
          var U = e.stateNode,
            F = e.memoizedProps,
            G = i !== null ? i.memoizedProps : F;
          try {
            V1(U, G, F);
          } catch (Je) {
            $t(e, e.return, Je);
          }
        }
        return;
      }
      case T: {
        if ((ta(t, e), Sa(e), l & Et && i !== null)) {
          var J = i.memoizedState;
          if (J.isDehydrated)
            try {
              fD(t.containerInfo);
            } catch (Je) {
              $t(e, e.return, Je);
            }
        }
        return;
      }
      case w: {
        (ta(t, e), Sa(e));
        return;
      }
      case z: {
        (ta(t, e), Sa(e));
        var re = e.child;
        if (re.flags & ro) {
          var De = re.stateNode,
            He = re.memoizedState,
            ze = He !== null;
          if (((De.isHidden = ze), ze)) {
            var Tt =
              re.alternate !== null && re.alternate.memoizedState !== null;
            Tt || uM();
          }
        }
        if (l & Et) {
          try {
            RA(e);
          } catch (Je) {
            $t(e, e.return, Je);
          }
          qT(e);
        }
        return;
      }
      case X: {
        var vt = i !== null && i.memoizedState !== null;
        if (e.mode & bt) {
          var H = In;
          ((In = H || vt), ta(t, e), (In = H));
        } else ta(t, e);
        if ((Sa(e), l & ro)) {
          var ae = e.stateNode,
            j = e.memoizedState,
            ye = j !== null,
            ke = e;
          if (((ae.isHidden = ye), ye && !vt && (ke.mode & bt) !== $e)) {
            Ne = ke;
            for (var Oe = ke.child; Oe !== null; )
              ((Ne = Oe), MA(Oe), (Oe = Oe.sibling));
          }
          EA(ke, ye);
        }
        return;
      }
      case ie: {
        (ta(t, e), Sa(e), l & Et && qT(e));
        return;
      }
      case I:
        return;
      default: {
        (ta(t, e), Sa(e));
        return;
      }
    }
  }
  function Sa(e) {
    var t = e.flags;
    if (t & vn) {
      try {
        xA(e);
      } catch (n) {
        $t(e, e.return, n);
      }
      e.flags &= ~vn;
    }
    t & Fa && (e.flags &= ~Fa);
  }
  function AA(e, t, n) {
    ((Rs = n), (Ds = t), (Ne = e), QT(e, t, n), (Rs = null), (Ds = null));
  }
  function QT(e, t, n) {
    for (var i = (e.mode & bt) !== $e; Ne !== null; ) {
      var l = Ne,
        c = l.child;
      if (l.tag === X && i) {
        var p = l.memoizedState !== null,
          h = p || Kf;
        if (h) {
          gm(e, t, n);
          continue;
        } else {
          var g = l.alternate,
            E = g !== null && g.memoizedState !== null,
            x = E || In,
            U = Kf,
            F = In;
          ((Kf = h), (In = x), In && !F && ((Ne = l), LA(l)));
          for (var G = c; G !== null; )
            ((Ne = G), QT(G, t, n), (G = G.sibling));
          ((Ne = l), (Kf = U), (In = F), gm(e, t, n));
          continue;
        }
      }
      (l.subtreeFlags & vl) !== Xe && c !== null
        ? ((c.return = l), (Ne = c))
        : gm(e, t, n);
    }
  }
  function gm(e, t, n) {
    for (; Ne !== null; ) {
      var i = Ne;
      if ((i.flags & vl) !== Xe) {
        var l = i.alternate;
        tn(i);
        try {
          SA(t, l, i, n);
        } catch (p) {
          $t(i, i.return, p);
        }
        Dn();
      }
      if (i === e) {
        Ne = null;
        return;
      }
      var c = i.sibling;
      if (c !== null) {
        ((c.return = i.return), (Ne = c));
        return;
      }
      Ne = i.return;
    }
  }
  function MA(e) {
    for (; Ne !== null; ) {
      var t = Ne,
        n = t.child;
      switch (t.tag) {
        case m:
        case M:
        case Y:
        case B: {
          if (t.mode & zt)
            try {
              (ba(), Zr(Sn, t, t.return));
            } finally {
              ga(t);
            }
          else Zr(Sn, t, t.return);
          break;
        }
        case y: {
          Os(t, t.return);
          var i = t.stateNode;
          typeof i.componentWillUnmount == 'function' && hm(t, t.return, i);
          break;
        }
        case R: {
          Os(t, t.return);
          break;
        }
        case X: {
          var l = t.memoizedState !== null;
          if (l) {
            KT(e);
            continue;
          }
          break;
        }
      }
      n !== null ? ((n.return = t), (Ne = n)) : KT(e);
    }
  }
  function KT(e) {
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
  function LA(e) {
    for (; Ne !== null; ) {
      var t = Ne,
        n = t.child;
      if (t.tag === X) {
        var i = t.memoizedState !== null;
        if (i) {
          JT(e);
          continue;
        }
      }
      n !== null ? ((n.return = t), (Ne = n)) : JT(e);
    }
  }
  function JT(e) {
    for (; Ne !== null; ) {
      var t = Ne;
      tn(t);
      try {
        TA(t);
      } catch (i) {
        $t(t, t.return, i);
      }
      if ((Dn(), t === e)) {
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
  function kA(e, t, n, i) {
    ((Ne = t), NA(t, e, n, i));
  }
  function NA(e, t, n, i) {
    for (; Ne !== null; ) {
      var l = Ne,
        c = l.child;
      (l.subtreeFlags & Xo) !== Xe && c !== null
        ? ((c.return = l), (Ne = c))
        : PA(e, t, n, i);
    }
  }
  function PA(e, t, n, i) {
    for (; Ne !== null; ) {
      var l = Ne;
      if ((l.flags & jr) !== Xe) {
        tn(l);
        try {
          zA(t, l, n, i);
        } catch (p) {
          $t(l, l.return, p);
        }
        Dn();
      }
      if (l === e) {
        Ne = null;
        return;
      }
      var c = l.sibling;
      if (c !== null) {
        ((c.return = l.return), (Ne = c));
        return;
      }
      Ne = l.return;
    }
  }
  function zA(e, t, n, i) {
    switch (t.tag) {
      case m:
      case M:
      case B: {
        if (t.mode & zt) {
          Fh();
          try {
            Ni(Fn | bn, t);
          } finally {
            zh(t);
          }
        } else Ni(Fn | bn, t);
        break;
      }
    }
  }
  function FA(e) {
    ((Ne = e), UA());
  }
  function UA() {
    for (; Ne !== null; ) {
      var e = Ne,
        t = e.child;
      if ((Ne.flags & to) !== Xe) {
        var n = e.deletions;
        if (n !== null) {
          for (var i = 0; i < n.length; i++) {
            var l = n[i];
            ((Ne = l), BA(l, e));
          }
          {
            var c = e.alternate;
            if (c !== null) {
              var p = c.child;
              if (p !== null) {
                c.child = null;
                do {
                  var h = p.sibling;
                  ((p.sibling = null), (p = h));
                } while (p !== null);
              }
            }
          }
          Ne = e;
        }
      }
      (e.subtreeFlags & Xo) !== Xe && t !== null
        ? ((t.return = e), (Ne = t))
        : IA();
    }
  }
  function IA() {
    for (; Ne !== null; ) {
      var e = Ne;
      (e.flags & jr) !== Xe && (tn(e), VA(e), Dn());
      var t = e.sibling;
      if (t !== null) {
        ((t.return = e.return), (Ne = t));
        return;
      }
      Ne = e.return;
    }
  }
  function VA(e) {
    switch (e.tag) {
      case m:
      case M:
      case B: {
        e.mode & zt
          ? (Fh(), Zr(Fn | bn, e, e.return), zh(e))
          : Zr(Fn | bn, e, e.return);
        break;
      }
    }
  }
  function BA(e, t) {
    for (; Ne !== null; ) {
      var n = Ne;
      (tn(n), jA(n, t), Dn());
      var i = n.child;
      i !== null ? ((i.return = n), (Ne = i)) : HA(e);
    }
  }
  function HA(e) {
    for (; Ne !== null; ) {
      var t = Ne,
        n = t.sibling,
        i = t.return;
      if (($T(t), t === e)) {
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
  function jA(e, t) {
    switch (e.tag) {
      case m:
      case M:
      case B: {
        e.mode & zt ? (Fh(), Zr(Fn, e, t), zh(e)) : Zr(Fn, e, t);
        break;
      }
    }
  }
  function $A(e) {
    switch (e.tag) {
      case m:
      case M:
      case B: {
        try {
          Ni(Sn | bn, e);
        } catch (n) {
          $t(e, e.return, n);
        }
        break;
      }
      case y: {
        var t = e.stateNode;
        try {
          t.componentDidMount();
        } catch (n) {
          $t(e, e.return, n);
        }
        break;
      }
    }
  }
  function YA(e) {
    switch (e.tag) {
      case m:
      case M:
      case B: {
        try {
          Ni(Fn | bn, e);
        } catch (t) {
          $t(e, e.return, t);
        }
        break;
      }
    }
  }
  function GA(e) {
    switch (e.tag) {
      case m:
      case M:
      case B: {
        try {
          Zr(Sn | bn, e, e.return);
        } catch (n) {
          $t(e, e.return, n);
        }
        break;
      }
      case y: {
        var t = e.stateNode;
        typeof t.componentWillUnmount == 'function' && hm(e, e.return, t);
        break;
      }
    }
  }
  function WA(e) {
    switch (e.tag) {
      case m:
      case M:
      case B:
        try {
          Zr(Fn | bn, e, e.return);
        } catch (t) {
          $t(e, e.return, t);
        }
    }
  }
  if (typeof Symbol == 'function' && Symbol.for) {
    var Su = Symbol.for;
    (Su('selector.component'),
      Su('selector.has_pseudo_class'),
      Su('selector.role'),
      Su('selector.test_id'),
      Su('selector.text'));
  }
  var qA = [];
  function XA() {
    qA.forEach(function (e) {
      return e();
    });
  }
  var QA = o.ReactCurrentActQueue;
  function KA(e) {
    {
      var t =
          typeof IS_REACT_ACT_ENVIRONMENT < 'u'
            ? IS_REACT_ACT_ENVIRONMENT
            : void 0,
        n = typeof jest < 'u';
      return n && t !== !1;
    }
  }
  function ZT() {
    {
      var e =
        typeof IS_REACT_ACT_ENVIRONMENT < 'u'
          ? IS_REACT_ACT_ENVIRONMENT
          : void 0;
      return (
        !e &&
          QA.current !== null &&
          f(
            'The current testing environment is not configured to support act(...)'
          ),
        e
      );
    }
  }
  var JA = Math.ceil,
    bm = o.ReactCurrentDispatcher,
    Sm = o.ReactCurrentOwner,
    Bn = o.ReactCurrentBatchConfig,
    na = o.ReactCurrentActQueue,
    wn = 0,
    e0 = 1,
    Hn = 2,
    Fr = 4,
    Qa = 0,
    Tu = 1,
    xo = 2,
    Zf = 3,
    Eu = 4,
    t0 = 5,
    Tm = 6,
    St = wn,
    nr = null,
    nn = null,
    Cn = ve,
    Ta = ve,
    Em = xi(ve),
    xn = Qa,
    wu = null,
    ed = ve,
    Cu = ve,
    td = ve,
    xu = null,
    vr = null,
    wm = 0,
    n0 = 500,
    r0 = 1 / 0,
    ZA = 500,
    Ka = null;
  function _u() {
    r0 = On() + ZA;
  }
  function a0() {
    return r0;
  }
  var nd = !1,
    Cm = null,
    As = null,
    _o = !1,
    zi = null,
    Ru = ve,
    xm = [],
    _m = null,
    eM = 50,
    Du = 0,
    Rm = null,
    Dm = !1,
    rd = !1,
    tM = 50,
    Ms = 0,
    ad = null,
    Ou = Wt,
    id = ve,
    i0 = !1;
  function od() {
    return nr;
  }
  function rr() {
    return (St & (Hn | Fr)) !== wn ? On() : (Ou !== Wt || (Ou = On()), Ou);
  }
  function Fi(e) {
    var t = e.mode;
    if ((t & bt) === $e) return rt;
    if ((St & Hn) !== wn && Cn !== ve) return Tl(Cn);
    var n = QD() !== XD;
    if (n) {
      if (Bn.transition !== null) {
        var i = Bn.transition;
        (i._updatedFibers || (i._updatedFibers = new Set()),
          i._updatedFibers.add(e));
      }
      return (id === Mn && (id = Vg()), id);
    }
    var l = Yr();
    if (l !== Mn) return l;
    var c = N1();
    return c;
  }
  function nM(e) {
    var t = e.mode;
    return (t & bt) === $e ? rt : a_();
  }
  function _n(e, t, n, i) {
    (_M(),
      i0 && f('useInsertionEffect must not schedule updates.'),
      Dm && (rd = !0),
      El(e, n, i),
      (St & Hn) !== ve && e === nr
        ? OM(t)
        : ($r && jg(e, t, n),
          AM(t),
          e === nr &&
            ((St & Hn) === wn && (Cu = ct(Cu, n)), xn === Eu && Ui(e, Cn)),
          hr(e, i),
          n === rt &&
            St === wn &&
            (t.mode & bt) === $e &&
            !na.isBatchingLegacy &&
            (_u(), iS())));
  }
  function rM(e, t, n) {
    var i = e.current;
    ((i.lanes = t), El(e, t, n), hr(e, n));
  }
  function aM(e) {
    return (St & Hn) !== wn;
  }
  function hr(e, t) {
    var n = e.callbackNode;
    Jx(e, t);
    var i = _c(e, e === nr ? Cn : ve);
    if (i === ve) {
      (n !== null && T0(n), (e.callbackNode = null), (e.callbackPriority = Mn));
      return;
    }
    var l = uo(i),
      c = e.callbackPriority;
    if (c === l && !(na.current !== null && n !== Pm)) {
      n == null &&
        c !== rt &&
        f(
          'Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.'
        );
      return;
    }
    n != null && T0(n);
    var p;
    if (l === rt)
      (e.tag === _i
        ? (na.isBatchingLegacy !== null && (na.didScheduleLegacyUpdate = !0),
          LD(l0.bind(null, e)))
        : aS(l0.bind(null, e)),
        na.current !== null
          ? na.current.push(Ri)
          : z1(function () {
              (St & (Hn | Fr)) === wn && Ri();
            }),
        (p = null));
    else {
      var h;
      switch (Gg(i)) {
        case Er:
          h = Ec;
          break;
        case Ba:
          h = Cp;
          break;
        case Ha:
          h = oo;
          break;
        case Oc:
          h = xp;
          break;
        default:
          h = oo;
          break;
      }
      p = zm(h, o0.bind(null, e));
    }
    ((e.callbackPriority = l), (e.callbackNode = p));
  }
  function o0(e, t) {
    if ((EO(), (Ou = Wt), (id = ve), (St & (Hn | Fr)) !== wn))
      throw new Error('Should not already be working.');
    var n = e.callbackNode,
      i = Za();
    if (i && e.callbackNode !== n) return null;
    var l = _c(e, e === nr ? Cn : ve);
    if (l === ve) return null;
    var c = !Rc(e, l) && !r_(e, l) && !t,
      p = c ? vM(e, l) : ld(e, l);
    if (p !== Qa) {
      if (p === xo) {
        var h = Wp(e);
        h !== ve && ((l = h), (p = Om(e, h)));
      }
      if (p === Tu) {
        var g = wu;
        throw (Ro(e, ve), Ui(e, l), hr(e, On()), g);
      }
      if (p === Tm) Ui(e, l);
      else {
        var E = !Rc(e, l),
          x = e.current.alternate;
        if (E && !oM(x)) {
          if (((p = ld(e, l)), p === xo)) {
            var U = Wp(e);
            U !== ve && ((l = U), (p = Om(e, U)));
          }
          if (p === Tu) {
            var F = wu;
            throw (Ro(e, ve), Ui(e, l), hr(e, On()), F);
          }
        }
        ((e.finishedWork = x), (e.finishedLanes = l), iM(e, p, l));
      }
    }
    return (hr(e, On()), e.callbackNode === n ? o0.bind(null, e) : null);
  }
  function Om(e, t) {
    var n = xu;
    if (Ac(e)) {
      var i = Ro(e, t);
      ((i.flags |= za), xD(e.containerInfo));
    }
    var l = ld(e, t);
    if (l !== xo) {
      var c = vr;
      ((vr = n), c !== null && s0(c));
    }
    return l;
  }
  function s0(e) {
    vr === null ? (vr = e) : vr.push.apply(vr, e);
  }
  function iM(e, t, n) {
    switch (t) {
      case Qa:
      case Tu:
        throw new Error('Root did not complete. This is a bug in React.');
      case xo: {
        Do(e, vr, Ka);
        break;
      }
      case Zf: {
        if ((Ui(e, n), Ug(n) && !E0())) {
          var i = wm + n0 - On();
          if (i > 10) {
            var l = _c(e, ve);
            if (l !== ve) break;
            var c = e.suspendedLanes;
            if (!ts(c, n)) {
              (rr(), Hg(e, c));
              break;
            }
            e.timeoutHandle = _v(Do.bind(null, e, vr, Ka), i);
            break;
          }
        }
        Do(e, vr, Ka);
        break;
      }
      case Eu: {
        if ((Ui(e, n), n_(n))) break;
        if (!E0()) {
          var p = Qx(e, n),
            h = p,
            g = On() - h,
            E = xM(g) - g;
          if (E > 10) {
            e.timeoutHandle = _v(Do.bind(null, e, vr, Ka), E);
            break;
          }
        }
        Do(e, vr, Ka);
        break;
      }
      case t0: {
        Do(e, vr, Ka);
        break;
      }
      default:
        throw new Error('Unknown root exit status.');
    }
  }
  function oM(e) {
    for (var t = e; ; ) {
      if (t.flags & Sc) {
        var n = t.updateQueue;
        if (n !== null) {
          var i = n.stores;
          if (i !== null)
            for (var l = 0; l < i.length; l++) {
              var c = i[l],
                p = c.getSnapshot,
                h = c.value;
              try {
                if (!Cr(p(), h)) return !1;
              } catch {
                return !1;
              }
            }
        }
      }
      var g = t.child;
      if (t.subtreeFlags & Sc && g !== null) {
        ((g.return = t), (t = g));
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
  function Ui(e, t) {
    ((t = Dc(t, td)), (t = Dc(t, Cu)), o_(e, t));
  }
  function l0(e) {
    if ((wO(), (St & (Hn | Fr)) !== wn))
      throw new Error('Should not already be working.');
    Za();
    var t = _c(e, ve);
    if (!Tr(t, rt)) return (hr(e, On()), null);
    var n = ld(e, t);
    if (e.tag !== _i && n === xo) {
      var i = Wp(e);
      i !== ve && ((t = i), (n = Om(e, i)));
    }
    if (n === Tu) {
      var l = wu;
      throw (Ro(e, ve), Ui(e, t), hr(e, On()), l);
    }
    if (n === Tm)
      throw new Error('Root did not complete. This is a bug in React.');
    var c = e.current.alternate;
    return (
      (e.finishedWork = c),
      (e.finishedLanes = t),
      Do(e, vr, Ka),
      hr(e, On()),
      null
    );
  }
  function sM(e, t) {
    t !== ve &&
      (Kp(e, ct(t, rt)), hr(e, On()), (St & (Hn | Fr)) === wn && (_u(), Ri()));
  }
  function Am(e, t) {
    var n = St;
    St |= e0;
    try {
      return e(t);
    } finally {
      ((St = n), St === wn && !na.isBatchingLegacy && (_u(), iS()));
    }
  }
  function lM(e, t, n, i, l) {
    var c = Yr(),
      p = Bn.transition;
    try {
      return ((Bn.transition = null), Ln(Er), e(t, n, i, l));
    } finally {
      (Ln(c), (Bn.transition = p), St === wn && _u());
    }
  }
  function Ja(e) {
    zi !== null && zi.tag === _i && (St & (Hn | Fr)) === wn && Za();
    var t = St;
    St |= e0;
    var n = Bn.transition,
      i = Yr();
    try {
      return ((Bn.transition = null), Ln(Er), e ? e() : void 0);
    } finally {
      (Ln(i), (Bn.transition = n), (St = t), (St & (Hn | Fr)) === wn && Ri());
    }
  }
  function u0() {
    return (St & (Hn | Fr)) !== wn;
  }
  function sd(e, t) {
    (qn(Em, Ta, e), (Ta = ct(Ta, t)));
  }
  function Mm(e) {
    ((Ta = Em.current), Wn(Em, e));
  }
  function Ro(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = ve));
    var n = e.timeoutHandle;
    if ((n !== Rv && ((e.timeoutHandle = Rv), P1(n)), nn !== null))
      for (var i = nn.return; i !== null; ) {
        var l = i.alternate;
        (UT(l, i), (i = i.return));
      }
    nr = e;
    var c = Oo(e.current, null);
    return (
      (nn = c),
      (Cn = Ta = t),
      (xn = Qa),
      (wu = null),
      (ed = ve),
      (Cu = ve),
      (td = ve),
      (xu = null),
      (vr = null),
      rO(),
      qr.discardPendingWarnings(),
      c
    );
  }
  function c0(e, t) {
    do {
      var n = nn;
      try {
        if (
          (yf(),
          NS(),
          Dn(),
          (Sm.current = null),
          n === null || n.return === null)
        ) {
          ((xn = Tu), (wu = t), (nn = null));
          return;
        }
        if ((Q && n.mode & zt && Gf(n, !0), Ve))
          if (
            (Ko(),
            t !== null && typeof t == 'object' && typeof t.then == 'function')
          ) {
            var i = t;
            Ux(n, i, Cn);
          } else Fx(n, t, Cn);
        (LO(e, n.return, n, t, Cn), v0(n));
      } catch (l) {
        ((t = l),
          nn === n && n !== null ? ((n = n.return), (nn = n)) : (n = nn));
        continue;
      }
      return;
    } while (!0);
  }
  function f0() {
    var e = bm.current;
    return ((bm.current = Bf), e === null ? Bf : e);
  }
  function d0(e) {
    bm.current = e;
  }
  function uM() {
    wm = On();
  }
  function Au(e) {
    ed = ct(e, ed);
  }
  function cM() {
    xn === Qa && (xn = Zf);
  }
  function Lm() {
    ((xn === Qa || xn === Zf || xn === xo) && (xn = Eu),
      nr !== null && (qp(ed) || qp(Cu)) && Ui(nr, Cn));
  }
  function fM(e) {
    (xn !== Eu && (xn = xo), xu === null ? (xu = [e]) : xu.push(e));
  }
  function dM() {
    return xn === Qa;
  }
  function ld(e, t) {
    var n = St;
    St |= Hn;
    var i = f0();
    if (nr !== e || Cn !== t) {
      if ($r) {
        var l = e.memoizedUpdaters;
        (l.size > 0 && (Mu(e, Cn), l.clear()), $g(e, t));
      }
      ((Ka = Yg()), Ro(e, t));
    }
    kg(t);
    do
      try {
        pM();
        break;
      } catch (c) {
        c0(e, c);
      }
    while (!0);
    if ((yf(), (St = n), d0(i), nn !== null))
      throw new Error(
        'Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.'
      );
    return (Ng(), (nr = null), (Cn = ve), xn);
  }
  function pM() {
    for (; nn !== null; ) p0(nn);
  }
  function vM(e, t) {
    var n = St;
    St |= Hn;
    var i = f0();
    if (nr !== e || Cn !== t) {
      if ($r) {
        var l = e.memoizedUpdaters;
        (l.size > 0 && (Mu(e, Cn), l.clear()), $g(e, t));
      }
      ((Ka = Yg()), _u(), Ro(e, t));
    }
    kg(t);
    do
      try {
        hM();
        break;
      } catch (c) {
        c0(e, c);
      }
    while (!0);
    return (
      yf(),
      d0(i),
      (St = n),
      nn !== null ? (jx(), Qa) : (Ng(), (nr = null), (Cn = ve), xn)
    );
  }
  function hM() {
    for (; nn !== null && !yx(); ) p0(nn);
  }
  function p0(e) {
    var t = e.alternate;
    tn(e);
    var n;
    ((e.mode & zt) !== $e
      ? (Ph(e), (n = km(t, e, Ta)), Gf(e, !0))
      : (n = km(t, e, Ta)),
      Dn(),
      (e.memoizedProps = e.pendingProps),
      n === null ? v0(e) : (nn = n),
      (Sm.current = null));
  }
  function v0(e) {
    var t = e;
    do {
      var n = t.alternate,
        i = t.return;
      if ((t.flags & pl) === Xe) {
        tn(t);
        var l = void 0;
        if (
          ((t.mode & zt) === $e
            ? (l = FT(n, t, Ta))
            : (Ph(t), (l = FT(n, t, Ta)), Gf(t, !1)),
          Dn(),
          l !== null)
        ) {
          nn = l;
          return;
        }
      } else {
        var c = cA(n, t);
        if (c !== null) {
          ((c.flags &= fx), (nn = c));
          return;
        }
        if ((t.mode & zt) !== $e) {
          Gf(t, !1);
          for (var p = t.actualDuration, h = t.child; h !== null; )
            ((p += h.actualDuration), (h = h.sibling));
          t.actualDuration = p;
        }
        if (i !== null)
          ((i.flags |= pl), (i.subtreeFlags = Xe), (i.deletions = null));
        else {
          ((xn = Tm), (nn = null));
          return;
        }
      }
      var g = t.sibling;
      if (g !== null) {
        nn = g;
        return;
      }
      ((t = i), (nn = t));
    } while (t !== null);
    xn === Qa && (xn = t0);
  }
  function Do(e, t, n) {
    var i = Yr(),
      l = Bn.transition;
    try {
      ((Bn.transition = null), Ln(Er), mM(e, t, n, i));
    } finally {
      ((Bn.transition = l), Ln(i));
    }
    return null;
  }
  function mM(e, t, n, i) {
    do Za();
    while (zi !== null);
    if ((RM(), (St & (Hn | Fr)) !== wn))
      throw new Error('Should not already be working.');
    var l = e.finishedWork,
      c = e.finishedLanes;
    if ((Ax(c), l === null)) return (Ag(), null);
    if (
      (c === ve &&
        f(
          'root.finishedLanes should not be empty during a commit. This is a bug in React.'
        ),
      (e.finishedWork = null),
      (e.finishedLanes = ve),
      l === e.current)
    )
      throw new Error(
        'Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.'
      );
    ((e.callbackNode = null), (e.callbackPriority = Mn));
    var p = ct(l.lanes, l.childLanes);
    (s_(e, p),
      e === nr && ((nr = null), (nn = null), (Cn = ve)),
      ((l.subtreeFlags & Xo) !== Xe || (l.flags & Xo) !== Xe) &&
        (_o ||
          ((_o = !0),
          (_m = n),
          zm(oo, function () {
            return (Za(), null);
          }))));
    var h = (l.subtreeFlags & (Ep | wp | vl | Xo)) !== Xe,
      g = (l.flags & (Ep | wp | vl | Xo)) !== Xe;
    if (h || g) {
      var E = Bn.transition;
      Bn.transition = null;
      var x = Yr();
      Ln(Er);
      var U = St;
      ((St |= Fr),
        (Sm.current = null),
        hA(e, l),
        iT(),
        OA(e, l, c),
        D1(e.containerInfo),
        (e.current = l),
        Ix(c),
        AA(l, e, c),
        Vx(),
        gx(),
        (St = U),
        Ln(x),
        (Bn.transition = E));
    } else ((e.current = l), iT());
    var F = _o;
    if (
      (_o ? ((_o = !1), (zi = e), (Ru = c)) : ((Ms = 0), (ad = null)),
      (p = e.pendingLanes),
      p === ve && (As = null),
      F || g0(e.current, !1),
      xx(l.stateNode, i),
      $r && e.memoizedUpdaters.clear(),
      XA(),
      hr(e, On()),
      t !== null)
    )
      for (var G = e.onRecoverableError, J = 0; J < t.length; J++) {
        var re = t[J],
          De = re.stack,
          He = re.digest;
        G(re.value, { componentStack: De, digest: He });
      }
    if (nd) {
      nd = !1;
      var ze = Cm;
      throw ((Cm = null), ze);
    }
    return (
      Tr(Ru, rt) && e.tag !== _i && Za(),
      (p = e.pendingLanes),
      Tr(p, rt) ? (TO(), e === Rm ? Du++ : ((Du = 0), (Rm = e))) : (Du = 0),
      Ri(),
      Ag(),
      null
    );
  }
  function Za() {
    if (zi !== null) {
      var e = Gg(Ru),
        t = f_(Ha, e),
        n = Bn.transition,
        i = Yr();
      try {
        return ((Bn.transition = null), Ln(t), gM());
      } finally {
        (Ln(i), (Bn.transition = n));
      }
    }
    return !1;
  }
  function yM(e) {
    (xm.push(e),
      _o ||
        ((_o = !0),
        zm(oo, function () {
          return (Za(), null);
        })));
  }
  function gM() {
    if (zi === null) return !1;
    var e = _m;
    _m = null;
    var t = zi,
      n = Ru;
    if (((zi = null), (Ru = ve), (St & (Hn | Fr)) !== wn))
      throw new Error('Cannot flush passive effects while already rendering.');
    ((Dm = !0), (rd = !1), Bx(n));
    var i = St;
    ((St |= Fr), FA(t.current), kA(t, t.current, n, e));
    {
      var l = xm;
      xm = [];
      for (var c = 0; c < l.length; c++) {
        var p = l[c];
        bA(t, p);
      }
    }
    (Hx(),
      g0(t.current, !0),
      (St = i),
      Ri(),
      rd ? (t === ad ? Ms++ : ((Ms = 0), (ad = t))) : (Ms = 0),
      (Dm = !1),
      (rd = !1),
      _x(t));
    {
      var h = t.current.stateNode;
      ((h.effectDuration = 0), (h.passiveEffectDuration = 0));
    }
    return !0;
  }
  function h0(e) {
    return As !== null && As.has(e);
  }
  function bM(e) {
    As === null ? (As = new Set([e])) : As.add(e);
  }
  function SM(e) {
    nd || ((nd = !0), (Cm = e));
  }
  var TM = SM;
  function m0(e, t, n) {
    var i = wo(n, t),
      l = pT(e, i, rt),
      c = Oi(e, l, rt),
      p = rr();
    c !== null && (El(c, rt, p), hr(c, p));
  }
  function $t(e, t, n) {
    if ((dA(n), Lu(!1), e.tag === T)) {
      m0(e, e, n);
      return;
    }
    var i = null;
    for (i = t; i !== null; ) {
      if (i.tag === T) {
        m0(i, e, n);
        return;
      } else if (i.tag === y) {
        var l = i.type,
          c = i.stateNode;
        if (
          typeof l.getDerivedStateFromError == 'function' ||
          (typeof c.componentDidCatch == 'function' && !h0(c))
        ) {
          var p = wo(n, e),
            h = Zh(i, p, rt),
            g = Oi(i, h, rt),
            E = rr();
          g !== null && (El(g, rt, E), hr(g, E));
          return;
        }
      }
      i = i.return;
    }
    f(
      `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
      n
    );
  }
  function EM(e, t, n) {
    var i = e.pingCache;
    i !== null && i.delete(t);
    var l = rr();
    (Hg(e, n),
      MM(e),
      nr === e &&
        ts(Cn, n) &&
        (xn === Eu || (xn === Zf && Ug(Cn) && On() - wm < n0)
          ? Ro(e, ve)
          : (td = ct(td, n))),
      hr(e, l));
  }
  function y0(e, t) {
    t === Mn && (t = nM(e));
    var n = rr(),
      i = dr(e, t);
    i !== null && (El(i, t, n), hr(i, n));
  }
  function wM(e) {
    var t = e.memoizedState,
      n = Mn;
    (t !== null && (n = t.retryLane), y0(e, n));
  }
  function CM(e, t) {
    var n = Mn,
      i;
    switch (e.tag) {
      case z:
        i = e.stateNode;
        var l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case ie:
        i = e.stateNode;
        break;
      default:
        throw new Error(
          'Pinged unknown suspense boundary type. This is probably a bug in React.'
        );
    }
    (i !== null && i.delete(t), y0(e, n));
  }
  function xM(e) {
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
                : JA(e / 1960) * 1960;
  }
  function _M() {
    if (Du > eM)
      throw (
        (Du = 0),
        (Rm = null),
        new Error(
          'Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.'
        )
      );
    Ms > tM &&
      ((Ms = 0),
      (ad = null),
      f(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      ));
  }
  function RM() {
    (qr.flushLegacyContextWarning(), qr.flushPendingUnsafeLifecycleWarnings());
  }
  function g0(e, t) {
    (tn(e),
      ud(e, Ua, GA),
      t && ud(e, Tc, WA),
      ud(e, Ua, $A),
      t && ud(e, Tc, YA),
      Dn());
  }
  function ud(e, t, n) {
    for (var i = e, l = null; i !== null; ) {
      var c = i.subtreeFlags & t;
      i !== l && i.child !== null && c !== Xe
        ? (i = i.child)
        : ((i.flags & t) !== Xe && n(i),
          i.sibling !== null ? (i = i.sibling) : (i = l = i.return));
    }
  }
  var cd = null;
  function b0(e) {
    {
      if ((St & Hn) !== wn || !(e.mode & bt)) return;
      var t = e.tag;
      if (
        t !== b &&
        t !== T &&
        t !== y &&
        t !== m &&
        t !== M &&
        t !== Y &&
        t !== B
      )
        return;
      var n = ut(e) || 'ReactComponent';
      if (cd !== null) {
        if (cd.has(n)) return;
        cd.add(n);
      } else cd = new Set([n]);
      var i = Yn;
      try {
        (tn(e),
          f(
            "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead."
          ));
      } finally {
        i ? tn(e) : Dn();
      }
    }
  }
  var km;
  {
    var DM = null;
    km = function (e, t, n) {
      var i = R0(DM, t);
      try {
        return LT(e, t, n);
      } catch (c) {
        if (
          VD() ||
          (c !== null && typeof c == 'object' && typeof c.then == 'function')
        )
          throw c;
        if (
          (yf(),
          NS(),
          UT(e, t),
          R0(t, i),
          t.mode & zt && Ph(t),
          mp(null, LT, null, e, t, n),
          sx())
        ) {
          var l = yp();
          typeof l == 'object' &&
            l !== null &&
            l._suppressLogging &&
            typeof c == 'object' &&
            c !== null &&
            !c._suppressLogging &&
            (c._suppressLogging = !0);
        }
        throw c;
      }
    };
  }
  var S0 = !1,
    Nm;
  Nm = new Set();
  function OM(e) {
    if (Ji && !gO())
      switch (e.tag) {
        case m:
        case M:
        case B: {
          var t = (nn && ut(nn)) || 'Unknown',
            n = t;
          if (!Nm.has(n)) {
            Nm.add(n);
            var i = ut(e) || 'Unknown';
            f(
              'Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render',
              i,
              t,
              t
            );
          }
          break;
        }
        case y: {
          S0 ||
            (f(
              'Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state.'
            ),
            (S0 = !0));
          break;
        }
      }
  }
  function Mu(e, t) {
    if ($r) {
      var n = e.memoizedUpdaters;
      n.forEach(function (i) {
        jg(e, i, t);
      });
    }
  }
  var Pm = {};
  function zm(e, t) {
    {
      var n = na.current;
      return n !== null ? (n.push(t), Pm) : Og(e, t);
    }
  }
  function T0(e) {
    if (e !== Pm) return mx(e);
  }
  function E0() {
    return na.current !== null;
  }
  function AM(e) {
    {
      if (e.mode & bt) {
        if (!ZT()) return;
      } else if (
        !KA() ||
        St !== wn ||
        (e.tag !== m && e.tag !== M && e.tag !== B)
      )
        return;
      if (na.current === null) {
        var t = Yn;
        try {
          (tn(e),
            f(
              `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`,
              ut(e)
            ));
        } finally {
          t ? tn(e) : Dn();
        }
      }
    }
  }
  function MM(e) {
    e.tag !== _i &&
      ZT() &&
      na.current === null &&
      f(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
  }
  function Lu(e) {
    i0 = e;
  }
  var Ur = null,
    Ls = null,
    LM = function (e) {
      Ur = e;
    };
  function ks(e) {
    {
      if (Ur === null) return e;
      var t = Ur(e);
      return t === void 0 ? e : t.current;
    }
  }
  function Fm(e) {
    return ks(e);
  }
  function Um(e) {
    {
      if (Ur === null) return e;
      var t = Ur(e);
      if (t === void 0) {
        if (e != null && typeof e.render == 'function') {
          var n = ks(e.render);
          if (e.render !== n) {
            var i = { $$typeof: Se, render: n };
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
  function w0(e, t) {
    {
      if (Ur === null) return !1;
      var n = e.elementType,
        i = t.type,
        l = !1,
        c = typeof i == 'object' && i !== null ? i.$$typeof : null;
      switch (e.tag) {
        case y: {
          typeof i == 'function' && (l = !0);
          break;
        }
        case m: {
          (typeof i == 'function' || c === qe) && (l = !0);
          break;
        }
        case M: {
          (c === Se || c === qe) && (l = !0);
          break;
        }
        case Y:
        case B: {
          (c === wt || c === qe) && (l = !0);
          break;
        }
        default:
          return !1;
      }
      if (l) {
        var p = Ur(n);
        if (p !== void 0 && p === Ur(i)) return !0;
      }
      return !1;
    }
  }
  function C0(e) {
    {
      if (Ur === null || typeof WeakSet != 'function') return;
      (Ls === null && (Ls = new WeakSet()), Ls.add(e));
    }
  }
  var kM = function (e, t) {
      {
        if (Ur === null) return;
        var n = t.staleFamilies,
          i = t.updatedFamilies;
        (Za(),
          Ja(function () {
            Im(e.current, i, n);
          }));
      }
    },
    NM = function (e, t) {
      {
        if (e.context !== xr) return;
        (Za(),
          Ja(function () {
            ku(t, e, null, null);
          }));
      }
    };
  function Im(e, t, n) {
    {
      var i = e.alternate,
        l = e.child,
        c = e.sibling,
        p = e.tag,
        h = e.type,
        g = null;
      switch (p) {
        case m:
        case B:
        case y:
          g = h;
          break;
        case M:
          g = h.render;
          break;
      }
      if (Ur === null)
        throw new Error('Expected resolveFamily to be set during hot reload.');
      var E = !1,
        x = !1;
      if (g !== null) {
        var U = Ur(g);
        U !== void 0 &&
          (n.has(U) ? (x = !0) : t.has(U) && (p === y ? (x = !0) : (E = !0)));
      }
      if (
        (Ls !== null && (Ls.has(e) || (i !== null && Ls.has(i))) && (x = !0),
        x && (e._debugNeedsRemount = !0),
        x || E)
      ) {
        var F = dr(e, rt);
        F !== null && _n(F, e, rt, Wt);
      }
      (l !== null && !x && Im(l, t, n), c !== null && Im(c, t, n));
    }
  }
  var PM = function (e, t) {
    {
      var n = new Set(),
        i = new Set(
          t.map(function (l) {
            return l.current;
          })
        );
      return (Vm(e.current, i, n), n);
    }
  };
  function Vm(e, t, n) {
    {
      var i = e.child,
        l = e.sibling,
        c = e.tag,
        p = e.type,
        h = null;
      switch (c) {
        case m:
        case B:
        case y:
          h = p;
          break;
        case M:
          h = p.render;
          break;
      }
      var g = !1;
      (h !== null && t.has(h) && (g = !0),
        g ? zM(e, n) : i !== null && Vm(i, t, n),
        l !== null && Vm(l, t, n));
    }
  }
  function zM(e, t) {
    {
      var n = FM(e, t);
      if (n) return;
      for (var i = e; ; ) {
        switch (i.tag) {
          case R:
            t.add(i.stateNode);
            return;
          case w:
            t.add(i.stateNode.containerInfo);
            return;
          case T:
            t.add(i.stateNode.containerInfo);
            return;
        }
        if (i.return === null) throw new Error('Expected to reach root first.');
        i = i.return;
      }
    }
  }
  function FM(e, t) {
    for (var n = e, i = !1; ; ) {
      if (n.tag === R) ((i = !0), t.add(n.stateNode));
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
  var Bm;
  {
    Bm = !1;
    try {
      var x0 = Object.preventExtensions({});
    } catch {
      Bm = !0;
    }
  }
  function UM(e, t, n, i) {
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
      (this.flags = Xe),
      (this.subtreeFlags = Xe),
      (this.deletions = null),
      (this.lanes = ve),
      (this.childLanes = ve),
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
      !Bm &&
        typeof Object.preventExtensions == 'function' &&
        Object.preventExtensions(this));
  }
  var _r = function (e, t, n, i) {
    return new UM(e, t, n, i);
  };
  function Hm(e) {
    var t = e.prototype;
    return !!(t && t.isReactComponent);
  }
  function IM(e) {
    return typeof e == 'function' && !Hm(e) && e.defaultProps === void 0;
  }
  function VM(e) {
    if (typeof e == 'function') return Hm(e) ? y : m;
    if (e != null) {
      var t = e.$$typeof;
      if (t === Se) return M;
      if (t === wt) return Y;
    }
    return b;
  }
  function Oo(e, t) {
    var n = e.alternate;
    (n === null
      ? ((n = _r(e.tag, t, e.key, e.mode)),
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
        (n.flags = Xe),
        (n.subtreeFlags = Xe),
        (n.deletions = null),
        (n.actualDuration = 0),
        (n.actualStartTime = -1)),
      (n.flags = e.flags & Ia),
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
      case b:
      case m:
      case B:
        n.type = ks(e.type);
        break;
      case y:
        n.type = Fm(e.type);
        break;
      case M:
        n.type = Um(e.type);
        break;
    }
    return n;
  }
  function BM(e, t) {
    e.flags &= Ia | vn;
    var n = e.alternate;
    if (n === null)
      ((e.childLanes = ve),
        (e.lanes = t),
        (e.child = null),
        (e.subtreeFlags = Xe),
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
        (e.subtreeFlags = Xe),
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
  function HM(e, t, n) {
    var i;
    return (
      e === sf ? ((i = bt), t === !0 && ((i |= ln), (i |= fa))) : (i = $e),
      $r && (i |= zt),
      _r(T, null, null, i)
    );
  }
  function jm(e, t, n, i, l, c) {
    var p = b,
      h = e;
    if (typeof e == 'function') Hm(e) ? ((p = y), (h = Fm(h))) : (h = ks(h));
    else if (typeof e == 'string') p = R;
    else
      e: switch (e) {
        case sa:
          return Ii(n.children, l, c, t);
        case Qi:
          ((p = L), (l |= ln), (l & bt) !== $e && (l |= fa));
          break;
        case li:
          return jM(n, l, c, t);
        case Ye:
          return $M(n, l, c, t);
        case mt:
          return YM(n, l, c, t);
        case Gt:
          return _0(n, l, c, t);
        case Jt:
        case ft:
        case $n:
        case la:
        case gn:
        default: {
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case P:
                p = C;
                break e;
              case pe:
                p = O;
                break e;
              case Se:
                ((p = M), (h = Um(h)));
                break e;
              case wt:
                p = Y;
                break e;
              case qe:
                ((p = q), (h = null));
                break e;
            }
          var g = '';
          {
            (e === void 0 ||
              (typeof e == 'object' &&
                e !== null &&
                Object.keys(e).length === 0)) &&
              (g +=
                " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var E = i ? ut(i) : null;
            E &&
              (g +=
                `

Check the render method of \`` +
                E +
                '`.');
          }
          throw new Error(
            'Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) ' +
              ('but got: ' + (e == null ? e : typeof e) + '.' + g)
          );
        }
      }
    var x = _r(p, n, t, l);
    return (
      (x.elementType = e),
      (x.type = h),
      (x.lanes = c),
      (x._debugOwner = i),
      x
    );
  }
  function $m(e, t, n) {
    var i = null;
    i = e._owner;
    var l = e.type,
      c = e.key,
      p = e.props,
      h = jm(l, c, p, i, t, n);
    return ((h._debugSource = e._source), (h._debugOwner = e._owner), h);
  }
  function Ii(e, t, n, i) {
    var l = _r(_, e, i, t);
    return ((l.lanes = n), l);
  }
  function jM(e, t, n, i) {
    typeof e.id != 'string' &&
      f(
        'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
        typeof e.id
      );
    var l = _r(k, e, i, t | zt);
    return (
      (l.elementType = li),
      (l.lanes = n),
      (l.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }),
      l
    );
  }
  function $M(e, t, n, i) {
    var l = _r(z, e, i, t);
    return ((l.elementType = Ye), (l.lanes = n), l);
  }
  function YM(e, t, n, i) {
    var l = _r(ie, e, i, t);
    return ((l.elementType = mt), (l.lanes = n), l);
  }
  function _0(e, t, n, i) {
    var l = _r(X, e, i, t);
    ((l.elementType = Gt), (l.lanes = n));
    var c = { isHidden: !1 };
    return ((l.stateNode = c), l);
  }
  function Ym(e, t, n) {
    var i = _r(D, e, null, t);
    return ((i.lanes = n), i);
  }
  function GM() {
    var e = _r(R, null, null, $e);
    return ((e.elementType = 'DELETED'), e);
  }
  function WM(e) {
    var t = _r(W, null, null, $e);
    return ((t.stateNode = e), t);
  }
  function Gm(e, t, n) {
    var i = e.children !== null ? e.children : [],
      l = _r(w, i, e.key, t);
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
  function R0(e, t) {
    return (
      e === null && (e = _r(b, null, null, $e)),
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
  function qM(e, t, n, i, l) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.pendingChildren = null),
      (this.current = null),
      (this.pingCache = null),
      (this.finishedWork = null),
      (this.timeoutHandle = Rv),
      (this.context = null),
      (this.pendingContext = null),
      (this.callbackNode = null),
      (this.callbackPriority = Mn),
      (this.eventTimes = Qp(ve)),
      (this.expirationTimes = Qp(Wt)),
      (this.pendingLanes = ve),
      (this.suspendedLanes = ve),
      (this.pingedLanes = ve),
      (this.expiredLanes = ve),
      (this.mutableReadLanes = ve),
      (this.finishedLanes = ve),
      (this.entangledLanes = ve),
      (this.entanglements = Qp(ve)),
      (this.identifierPrefix = i),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null),
      (this.effectDuration = 0),
      (this.passiveEffectDuration = 0));
    {
      this.memoizedUpdaters = new Set();
      for (var c = (this.pendingUpdatersLaneMap = []), p = 0; p < Rp; p++)
        c.push(new Set());
    }
    switch (t) {
      case sf:
        this._debugRootType = n ? 'hydrateRoot()' : 'createRoot()';
        break;
      case _i:
        this._debugRootType = n ? 'hydrate()' : 'render()';
        break;
    }
  }
  function D0(e, t, n, i, l, c, p, h, g, E) {
    var x = new qM(e, t, n, h, g),
      U = HM(t, c);
    ((x.current = U), (U.stateNode = x));
    {
      var F = {
        element: i,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      };
      U.memoizedState = F;
    }
    return (ih(U), x);
  }
  var Wm = '18.3.1';
  function XM(e, t, n) {
    var i =
      arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
    return (
      cn(i),
      {
        $$typeof: Hr,
        key: i == null ? null : '' + i,
        children: e,
        containerInfo: t,
        implementation: n,
      }
    );
  }
  var qm, Xm;
  ((qm = !1), (Xm = {}));
  function O0(e) {
    if (!e) return xr;
    var t = Wo(e),
      n = MD(t);
    if (t.tag === y) {
      var i = t.type;
      if (va(i)) return nS(t, i, n);
    }
    return n;
  }
  function QM(e, t) {
    {
      var n = Wo(e);
      if (n === void 0) {
        if (typeof e.render == 'function')
          throw new Error('Unable to find node on an unmounted component.');
        var i = Object.keys(e).join(',');
        throw new Error(
          'Argument appears to not be a ReactComponent. Keys: ' + i
        );
      }
      var l = _g(n);
      if (l === null) return null;
      if (l.mode & ln) {
        var c = ut(n) || 'Component';
        if (!Xm[c]) {
          Xm[c] = !0;
          var p = Yn;
          try {
            (tn(l),
              n.mode & ln
                ? f(
                    '%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node',
                    t,
                    t,
                    c
                  )
                : f(
                    '%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node',
                    t,
                    t,
                    c
                  ));
          } finally {
            p ? tn(p) : Dn();
          }
        }
      }
      return l.stateNode;
    }
  }
  function A0(e, t, n, i, l, c, p, h) {
    var g = !1,
      E = null;
    return D0(e, t, g, E, n, i, l, c, p);
  }
  function M0(e, t, n, i, l, c, p, h, g, E) {
    var x = !0,
      U = D0(n, i, x, e, l, c, p, h, g);
    U.context = O0(null);
    var F = U.current,
      G = rr(),
      J = Fi(F),
      re = qa(G, J);
    return ((re.callback = t ?? null), Oi(F, re, J), rM(U, J, G), U);
  }
  function ku(e, t, n, i) {
    Cx(t, e);
    var l = t.current,
      c = rr(),
      p = Fi(l);
    $x(p);
    var h = O0(n);
    (t.context === null ? (t.context = h) : (t.pendingContext = h),
      Ji &&
        Yn !== null &&
        !qm &&
        ((qm = !0),
        f(
          `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
          ut(Yn) || 'Unknown'
        )));
    var g = qa(c, p);
    ((g.payload = { element: e }),
      (i = i === void 0 ? null : i),
      i !== null &&
        (typeof i != 'function' &&
          f(
            'render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.',
            i
          ),
        (g.callback = i)));
    var E = Oi(l, g, p);
    return (E !== null && (_n(E, l, p, c), Ef(E, l, p)), p);
  }
  function fd(e) {
    var t = e.current;
    if (!t.child) return null;
    switch (t.child.tag) {
      case R:
        return t.child.stateNode;
      default:
        return t.child.stateNode;
    }
  }
  function KM(e) {
    switch (e.tag) {
      case T: {
        var t = e.stateNode;
        if (Ac(t)) {
          var n = Zx(t);
          sM(t, n);
        }
        break;
      }
      case z: {
        Ja(function () {
          var l = dr(e, rt);
          if (l !== null) {
            var c = rr();
            _n(l, e, rt, c);
          }
        });
        var i = rt;
        Qm(e, i);
        break;
      }
    }
  }
  function L0(e, t) {
    var n = e.memoizedState;
    n !== null && n.dehydrated !== null && (n.retryLane = i_(n.retryLane, t));
  }
  function Qm(e, t) {
    L0(e, t);
    var n = e.alternate;
    n && L0(n, t);
  }
  function JM(e) {
    if (e.tag === z) {
      var t = gl,
        n = dr(e, t);
      if (n !== null) {
        var i = rr();
        _n(n, e, t, i);
      }
      Qm(e, t);
    }
  }
  function ZM(e) {
    if (e.tag === z) {
      var t = Fi(e),
        n = dr(e, t);
      if (n !== null) {
        var i = rr();
        _n(n, e, t, i);
      }
      Qm(e, t);
    }
  }
  function k0(e) {
    var t = hx(e);
    return t === null ? null : t.stateNode;
  }
  var N0 = function (e) {
    return null;
  };
  function eL(e) {
    return N0(e);
  }
  var P0 = function (e) {
    return !1;
  };
  function tL(e) {
    return P0(e);
  }
  var z0 = null,
    F0 = null,
    U0 = null,
    I0 = null,
    V0 = null,
    B0 = null,
    H0 = null,
    j0 = null,
    $0 = null;
  {
    var Y0 = function (e, t, n) {
        var i = t[n],
          l = Dt(e) ? e.slice() : dt({}, e);
        return n + 1 === t.length
          ? (Dt(l) ? l.splice(i, 1) : delete l[i], l)
          : ((l[i] = Y0(e[i], t, n + 1)), l);
      },
      G0 = function (e, t) {
        return Y0(e, t, 0);
      },
      W0 = function (e, t, n, i) {
        var l = t[i],
          c = Dt(e) ? e.slice() : dt({}, e);
        if (i + 1 === t.length) {
          var p = n[i];
          ((c[p] = c[l]), Dt(c) ? c.splice(l, 1) : delete c[l]);
        } else c[l] = W0(e[l], t, n, i + 1);
        return c;
      },
      q0 = function (e, t, n) {
        if (t.length !== n.length) {
          d('copyWithRename() expects paths of the same length');
          return;
        } else
          for (var i = 0; i < n.length - 1; i++)
            if (t[i] !== n[i]) {
              d(
                'copyWithRename() expects paths to be the same except for the deepest key'
              );
              return;
            }
        return W0(e, t, n, 0);
      },
      X0 = function (e, t, n, i) {
        if (n >= t.length) return i;
        var l = t[n],
          c = Dt(e) ? e.slice() : dt({}, e);
        return ((c[l] = X0(e[l], t, n + 1, i)), c);
      },
      Q0 = function (e, t, n) {
        return X0(e, t, 0, n);
      },
      Km = function (e, t) {
        for (var n = e.memoizedState; n !== null && t > 0; )
          ((n = n.next), t--);
        return n;
      };
    ((z0 = function (e, t, n, i) {
      var l = Km(e, t);
      if (l !== null) {
        var c = Q0(l.memoizedState, n, i);
        ((l.memoizedState = c),
          (l.baseState = c),
          (e.memoizedProps = dt({}, e.memoizedProps)));
        var p = dr(e, rt);
        p !== null && _n(p, e, rt, Wt);
      }
    }),
      (F0 = function (e, t, n) {
        var i = Km(e, t);
        if (i !== null) {
          var l = G0(i.memoizedState, n);
          ((i.memoizedState = l),
            (i.baseState = l),
            (e.memoizedProps = dt({}, e.memoizedProps)));
          var c = dr(e, rt);
          c !== null && _n(c, e, rt, Wt);
        }
      }),
      (U0 = function (e, t, n, i) {
        var l = Km(e, t);
        if (l !== null) {
          var c = q0(l.memoizedState, n, i);
          ((l.memoizedState = c),
            (l.baseState = c),
            (e.memoizedProps = dt({}, e.memoizedProps)));
          var p = dr(e, rt);
          p !== null && _n(p, e, rt, Wt);
        }
      }),
      (I0 = function (e, t, n) {
        ((e.pendingProps = Q0(e.memoizedProps, t, n)),
          e.alternate && (e.alternate.pendingProps = e.pendingProps));
        var i = dr(e, rt);
        i !== null && _n(i, e, rt, Wt);
      }),
      (V0 = function (e, t) {
        ((e.pendingProps = G0(e.memoizedProps, t)),
          e.alternate && (e.alternate.pendingProps = e.pendingProps));
        var n = dr(e, rt);
        n !== null && _n(n, e, rt, Wt);
      }),
      (B0 = function (e, t, n) {
        ((e.pendingProps = q0(e.memoizedProps, t, n)),
          e.alternate && (e.alternate.pendingProps = e.pendingProps));
        var i = dr(e, rt);
        i !== null && _n(i, e, rt, Wt);
      }),
      (H0 = function (e) {
        var t = dr(e, rt);
        t !== null && _n(t, e, rt, Wt);
      }),
      (j0 = function (e) {
        N0 = e;
      }),
      ($0 = function (e) {
        P0 = e;
      }));
  }
  function nL(e) {
    var t = _g(e);
    return t === null ? null : t.stateNode;
  }
  function rL(e) {
    return null;
  }
  function aL() {
    return Yn;
  }
  function iL(e) {
    var t = e.findFiberByHostInstance,
      n = o.ReactCurrentDispatcher;
    return wx({
      bundleType: e.bundleType,
      version: e.version,
      rendererPackageName: e.rendererPackageName,
      rendererConfig: e.rendererConfig,
      overrideHookState: z0,
      overrideHookStateDeletePath: F0,
      overrideHookStateRenamePath: U0,
      overrideProps: I0,
      overridePropsDeletePath: V0,
      overridePropsRenamePath: B0,
      setErrorHandler: j0,
      setSuspenseHandler: $0,
      scheduleUpdate: H0,
      currentDispatcherRef: n,
      findHostInstanceByFiber: nL,
      findFiberByHostInstance: t || rL,
      findHostInstancesForRefresh: PM,
      scheduleRefresh: kM,
      scheduleRoot: NM,
      setRefreshHandler: LM,
      getCurrentFiber: aL,
      reconcilerVersion: Wm,
    });
  }
  var K0 =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Jm(e) {
    this._internalRoot = e;
  }
  ((dd.prototype.render = Jm.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw new Error('Cannot update an unmounted root.');
      {
        typeof arguments[1] == 'function'
          ? f(
              'render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().'
            )
          : pd(arguments[1])
            ? f(
                "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
              )
            : typeof arguments[1] < 'u' &&
              f(
                'You passed a second argument to root.render(...) but it only accepts one argument.'
              );
        var n = t.containerInfo;
        if (n.nodeType !== pn) {
          var i = k0(t.current);
          i &&
            i.parentNode !== n &&
            f(
              "render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container."
            );
        }
      }
      ku(e, t, null, null);
    }),
    (dd.prototype.unmount = Jm.prototype.unmount =
      function () {
        typeof arguments[0] == 'function' &&
          f(
            'unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().'
          );
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (u0() &&
            f(
              'Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition.'
            ),
            Ja(function () {
              ku(null, e, null, null);
            }),
            Kb(t));
        }
      }));
  function oL(e, t) {
    if (!pd(e))
      throw new Error(
        'createRoot(...): Target container is not a DOM element.'
      );
    J0(e);
    var n = !1,
      i = !1,
      l = '',
      c = K0;
    t != null &&
      (t.hydrate
        ? d(
            'hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.'
          )
        : typeof t == 'object' &&
          t !== null &&
          t.$$typeof === Br &&
          f(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`),
      t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (c = t.onRecoverableError),
      t.transitionCallbacks !== void 0 && t.transitionCallbacks);
    var p = A0(e, sf, null, n, i, l, c);
    Zc(p.current, e);
    var h = e.nodeType === pn ? e.parentNode : e;
    return (Il(h), new Jm(p));
  }
  function dd(e) {
    this._internalRoot = e;
  }
  function sL(e) {
    e && E_(e);
  }
  dd.prototype.unstable_scheduleHydration = sL;
  function lL(e, t, n) {
    if (!pd(e))
      throw new Error(
        'hydrateRoot(...): Target container is not a DOM element.'
      );
    (J0(e),
      t === void 0 &&
        f(
          'Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)'
        ));
    var i = n ?? null,
      l = (n != null && n.hydratedSources) || null,
      c = !1,
      p = !1,
      h = '',
      g = K0;
    n != null &&
      (n.unstable_strictMode === !0 && (c = !0),
      n.identifierPrefix !== void 0 && (h = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (g = n.onRecoverableError));
    var E = M0(t, null, e, sf, i, c, p, h, g);
    if ((Zc(E.current, e), Il(e), l))
      for (var x = 0; x < l.length; x++) {
        var U = l[x];
        dO(E, U);
      }
    return new dd(E);
  }
  function pd(e) {
    return !!(
      e &&
      (e.nodeType === cr || e.nodeType === Pa || e.nodeType === ip || !we)
    );
  }
  function Nu(e) {
    return !!(
      e &&
      (e.nodeType === cr ||
        e.nodeType === Pa ||
        e.nodeType === ip ||
        (e.nodeType === pn && e.nodeValue === ' react-mount-point-unstable '))
    );
  }
  function J0(e) {
    (e.nodeType === cr &&
      e.tagName &&
      e.tagName.toUpperCase() === 'BODY' &&
      f(
        'createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app.'
      ),
      Ql(e) &&
        (e._reactRootContainer
          ? f(
              'You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.'
            )
          : f(
              'You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it.'
            )));
  }
  var uL = o.ReactCurrentOwner,
    Z0;
  Z0 = function (e) {
    if (e._reactRootContainer && e.nodeType !== pn) {
      var t = k0(e._reactRootContainer.current);
      t &&
        t.parentNode !== e &&
        f(
          'render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.'
        );
    }
    var n = !!e._reactRootContainer,
      i = Zm(e),
      l = !!(i && Ci(i));
    (l &&
      !n &&
      f(
        'render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render.'
      ),
      e.nodeType === cr &&
        e.tagName &&
        e.tagName.toUpperCase() === 'BODY' &&
        f(
          'render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.'
        ));
  };
  function Zm(e) {
    return e ? (e.nodeType === Pa ? e.documentElement : e.firstChild) : null;
  }
  function eE() {}
  function cL(e, t, n, i, l) {
    if (l) {
      if (typeof i == 'function') {
        var c = i;
        i = function () {
          var F = fd(p);
          c.call(F);
        };
      }
      var p = M0(t, i, e, _i, null, !1, !1, '', eE);
      ((e._reactRootContainer = p), Zc(p.current, e));
      var h = e.nodeType === pn ? e.parentNode : e;
      return (Il(h), Ja(), p);
    } else {
      for (var g; (g = e.lastChild); ) e.removeChild(g);
      if (typeof i == 'function') {
        var E = i;
        i = function () {
          var F = fd(x);
          E.call(F);
        };
      }
      var x = A0(e, _i, null, !1, !1, '', eE);
      ((e._reactRootContainer = x), Zc(x.current, e));
      var U = e.nodeType === pn ? e.parentNode : e;
      return (
        Il(U),
        Ja(function () {
          ku(t, x, n, i);
        }),
        x
      );
    }
  }
  function fL(e, t) {
    e !== null &&
      typeof e != 'function' &&
      f(
        '%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.',
        t,
        e
      );
  }
  function vd(e, t, n, i, l) {
    (Z0(n), fL(l === void 0 ? null : l, 'render'));
    var c = n._reactRootContainer,
      p;
    if (!c) p = cL(n, t, e, l, i);
    else {
      if (((p = c), typeof l == 'function')) {
        var h = l;
        l = function () {
          var g = fd(p);
          h.call(g);
        };
      }
      ku(t, p, e, l);
    }
    return fd(p);
  }
  var tE = !1;
  function dL(e) {
    {
      tE ||
        ((tE = !0),
        f(
          'findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node'
        ));
      var t = uL.current;
      if (t !== null && t.stateNode !== null) {
        var n = t.stateNode._warnedAboutRefsInRender;
        (n ||
          f(
            '%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.',
            Ct(t.type) || 'A component'
          ),
          (t.stateNode._warnedAboutRefsInRender = !0));
      }
    }
    return e == null ? null : e.nodeType === cr ? e : QM(e, 'findDOMNode');
  }
  function pL(e, t, n) {
    if (
      (f(
        "ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"
      ),
      !Nu(t))
    )
      throw new Error('Target container is not a DOM element.');
    {
      var i = Ql(t) && t._reactRootContainer === void 0;
      i &&
        f(
          'You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?'
        );
    }
    return vd(null, e, t, !0, n);
  }
  function vL(e, t, n) {
    if (
      (f(
        "ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"
      ),
      !Nu(t))
    )
      throw new Error('Target container is not a DOM element.');
    {
      var i = Ql(t) && t._reactRootContainer === void 0;
      i &&
        f(
          'You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?'
        );
    }
    return vd(null, e, t, !1, n);
  }
  function hL(e, t, n, i) {
    if (
      (f(
        "ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"
      ),
      !Nu(n))
    )
      throw new Error('Target container is not a DOM element.');
    if (e == null || !lx(e))
      throw new Error('parentComponent must be a valid React Component');
    return vd(e, t, n, !1, i);
  }
  var nE = !1;
  function mL(e) {
    if (
      (nE ||
        ((nE = !0),
        f(
          'unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot'
        )),
      !Nu(e))
    )
      throw new Error(
        'unmountComponentAtNode(...): Target container is not a DOM element.'
      );
    {
      var t = Ql(e) && e._reactRootContainer === void 0;
      t &&
        f(
          'You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?'
        );
    }
    if (e._reactRootContainer) {
      {
        var n = Zm(e),
          i = n && !Ci(n);
        i &&
          f(
            "unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React."
          );
      }
      return (
        Ja(function () {
          vd(null, null, e, !1, function () {
            ((e._reactRootContainer = null), Kb(e));
          });
        }),
        !0
      );
    } else {
      {
        var l = Zm(e),
          c = !!(l && Ci(l)),
          p =
            e.nodeType === cr &&
            Nu(e.parentNode) &&
            !!e.parentNode._reactRootContainer;
        c &&
          f(
            "unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s",
            p
              ? 'You may have accidentally passed in a React root node instead of its container.'
              : 'Instead, have the parent component update its state and rerender in order to remove this component.'
          );
      }
      return !1;
    }
  }
  (d_(KM),
    v_(JM),
    h_(ZM),
    m_(Yr),
    y_(u_),
    (typeof Map != 'function' ||
      Map.prototype == null ||
      typeof Map.prototype.forEach != 'function' ||
      typeof Set != 'function' ||
      Set.prototype == null ||
      typeof Set.prototype.clear != 'function' ||
      typeof Set.prototype.forEach != 'function') &&
      f(
        'React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills'
      ),
    KC(g1),
    ex(Am, lM, Ja));
  function yL(e, t) {
    var n =
      arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    if (!pd(t)) throw new Error('Target container is not a DOM element.');
    return XM(e, t, null, n);
  }
  function gL(e, t, n, i) {
    return hL(e, t, n, i);
  }
  var ey = { usingClientEntryPoint: !1, Events: [Ci, cs, ef, vg, hg, Am] };
  function bL(e, t) {
    return (
      ey.usingClientEntryPoint ||
        f(
          'You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'
        ),
      oL(e, t)
    );
  }
  function SL(e, t, n) {
    return (
      ey.usingClientEntryPoint ||
        f(
          'You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'
        ),
      lL(e, t, n)
    );
  }
  function TL(e) {
    return (
      u0() &&
        f(
          'flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.'
        ),
      Ja(e)
    );
  }
  var EL = iL({
    findFiberByHostInstance: vo,
    bundleType: 1,
    version: Wm,
    rendererPackageName: 'react-dom',
  });
  if (
    !EL &&
    st &&
    window.top === window.self &&
    ((navigator.userAgent.indexOf('Chrome') > -1 &&
      navigator.userAgent.indexOf('Edge') === -1) ||
      navigator.userAgent.indexOf('Firefox') > -1)
  ) {
    var rE = window.location.protocol;
    /^(https?|file):$/.test(rE) &&
      console.info(
        '%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools' +
          (rE === 'file:'
            ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq`
            : ''),
        'font-weight:bold'
      );
  }
  ((Dr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ey),
    (Dr.createPortal = yL),
    (Dr.createRoot = bL),
    (Dr.findDOMNode = dL),
    (Dr.flushSync = TL),
    (Dr.hydrate = pL),
    (Dr.hydrateRoot = SL),
    (Dr.render = vL),
    (Dr.unmountComponentAtNode = mL),
    (Dr.unstable_batchedUpdates = Am),
    (Dr.unstable_renderSubtreeIntoContainer = gL),
    (Dr.version = Wm),
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' &&
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ==
        'function' &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error()));
})();
nw.exports = Dr;
var OL = nw.exports,
  iw,
  aE = OL;
{
  var iE = aE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  iw = function (r, a, o) {
    iE.usingClientEntryPoint = !0;
    try {
      return aE.hydrateRoot(r, a, o);
    } finally {
      iE.usingClientEntryPoint = !1;
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
 */ function Hu() {
  return (
    (Hu = Object.assign
      ? Object.assign.bind()
      : function (r) {
          for (var a = 1; a < arguments.length; a++) {
            var o = arguments[a];
            for (var s in o)
              Object.prototype.hasOwnProperty.call(o, s) && (r[s] = o[s]);
          }
          return r;
        }),
    Hu.apply(this, arguments)
  );
}
var ji;
(function (r) {
  ((r.Pop = 'POP'), (r.Push = 'PUSH'), (r.Replace = 'REPLACE'));
})(ji || (ji = {}));
const oE = 'popstate';
function AL(r) {
  r === void 0 && (r = {});
  function a(s, u) {
    let { pathname: d, search: f, hash: v } = s.location;
    return vy(
      '',
      { pathname: d, search: f, hash: v },
      (u.state && u.state.usr) || null,
      (u.state && u.state.key) || 'default'
    );
  }
  function o(s, u) {
    return typeof u == 'string' ? u : ju(u);
  }
  return LL(a, o, null, r);
}
function rn(r, a) {
  if (r === !1 || r === null || typeof r > 'u') throw new Error(a);
}
function _a(r, a) {
  if (!r) {
    typeof console < 'u' && console.warn(a);
    try {
      throw new Error(a);
    } catch {}
  }
}
function ML() {
  return Math.random().toString(36).substr(2, 8);
}
function sE(r, a) {
  return { usr: r.state, key: r.key, idx: a };
}
function vy(r, a, o, s) {
  return (
    o === void 0 && (o = null),
    Hu(
      { pathname: typeof r == 'string' ? r : r.pathname, search: '', hash: '' },
      typeof a == 'string' ? Bs(a) : a,
      { state: o, key: (a && a.key) || s || ML() }
    )
  );
}
function ju(r) {
  let { pathname: a = '/', search: o = '', hash: s = '' } = r;
  return (
    o && o !== '?' && (a += o.charAt(0) === '?' ? o : '?' + o),
    s && s !== '#' && (a += s.charAt(0) === '#' ? s : '#' + s),
    a
  );
}
function Bs(r) {
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
function LL(r, a, o, s) {
  s === void 0 && (s = {});
  let { window: u = document.defaultView, v5Compat: d = !1 } = s,
    f = u.history,
    v = ji.Pop,
    m = null,
    y = b();
  y == null && ((y = 0), f.replaceState(Hu({}, f.state, { idx: y }), ''));
  function b() {
    return (f.state || { idx: null }).idx;
  }
  function T() {
    v = ji.Pop;
    let L = b(),
      O = L == null ? null : L - y;
    ((y = L), m && m({ action: v, location: _.location, delta: O }));
  }
  function w(L, O) {
    v = ji.Push;
    let C = vy(_.location, L, O);
    (o && o(C, L), (y = b() + 1));
    let M = sE(C, y),
      k = _.createHref(C);
    try {
      f.pushState(M, '', k);
    } catch (z) {
      if (z instanceof DOMException && z.name === 'DataCloneError') throw z;
      u.location.assign(k);
    }
    d && m && m({ action: v, location: _.location, delta: 1 });
  }
  function R(L, O) {
    v = ji.Replace;
    let C = vy(_.location, L, O);
    (o && o(C, L), (y = b()));
    let M = sE(C, y),
      k = _.createHref(C);
    (f.replaceState(M, '', k),
      d && m && m({ action: v, location: _.location, delta: 0 }));
  }
  function D(L) {
    let O = u.location.origin !== 'null' ? u.location.origin : u.location.href,
      C = typeof L == 'string' ? L : ju(L);
    return (
      (C = C.replace(/ $/, '%20')),
      rn(
        O,
        'No window.location.(origin|href) available to create URL for href: ' +
          C
      ),
      new URL(C, O)
    );
  }
  let _ = {
    get action() {
      return v;
    },
    get location() {
      return r(u, f);
    },
    listen(L) {
      if (m) throw new Error('A history only accepts one active listener');
      return (
        u.addEventListener(oE, T),
        (m = L),
        () => {
          (u.removeEventListener(oE, T), (m = null));
        }
      );
    },
    createHref(L) {
      return a(u, L);
    },
    createURL: D,
    encodeLocation(L) {
      let O = D(L);
      return { pathname: O.pathname, search: O.search, hash: O.hash };
    },
    push: w,
    replace: R,
    go(L) {
      return f.go(L);
    },
  };
  return _;
}
var lE;
(function (r) {
  ((r.data = 'data'),
    (r.deferred = 'deferred'),
    (r.redirect = 'redirect'),
    (r.error = 'error'));
})(lE || (lE = {}));
function kL(r, a, o) {
  return (o === void 0 && (o = '/'), NL(r, a, o, !1));
}
function NL(r, a, o, s) {
  let u = typeof a == 'string' ? Bs(a) : a,
    d = Gi(u.pathname || '/', o);
  if (d == null) return null;
  let f = ow(r);
  PL(f);
  let v = null;
  for (let m = 0; v == null && m < f.length; ++m) {
    let y = GL(d);
    v = $L(f[m], y, s);
  }
  return v;
}
function ow(r, a, o, s) {
  (a === void 0 && (a = []),
    o === void 0 && (o = []),
    s === void 0 && (s = ''));
  let u = (d, f, v) => {
    let m = {
      relativePath: v === void 0 ? d.path || '' : v,
      caseSensitive: d.caseSensitive === !0,
      childrenIndex: f,
      route: d,
    };
    m.relativePath.startsWith('/') &&
      (rn(
        m.relativePath.startsWith(s),
        'Absolute route path "' +
          m.relativePath +
          '" nested under path ' +
          ('"' + s + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (m.relativePath = m.relativePath.slice(s.length)));
    let y = ii([s, m.relativePath]),
      b = o.concat(m);
    (d.children &&
      d.children.length > 0 &&
      (rn(
        d.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + y + '".')
      ),
      ow(d.children, a, b, y)),
      !(d.path == null && !d.index) &&
        a.push({ path: y, score: HL(y, d.index), routesMeta: b }));
  };
  return (
    r.forEach((d, f) => {
      var v;
      if (d.path === '' || !((v = d.path) != null && v.includes('?'))) u(d, f);
      else for (let m of sw(d.path)) u(d, f, m);
    }),
    a
  );
}
function sw(r) {
  let a = r.split('/');
  if (a.length === 0) return [];
  let [o, ...s] = a,
    u = o.endsWith('?'),
    d = o.replace(/\?$/, '');
  if (s.length === 0) return u ? [d, ''] : [d];
  let f = sw(s.join('/')),
    v = [];
  return (
    v.push(...f.map((m) => (m === '' ? d : [d, m].join('/')))),
    u && v.push(...f),
    v.map((m) => (r.startsWith('/') && m === '' ? '/' : m))
  );
}
function PL(r) {
  r.sort((a, o) =>
    a.score !== o.score
      ? o.score - a.score
      : jL(
          a.routesMeta.map((s) => s.childrenIndex),
          o.routesMeta.map((s) => s.childrenIndex)
        )
  );
}
const zL = /^:[\w-]+$/,
  FL = 3,
  UL = 2,
  IL = 1,
  VL = 10,
  BL = -2,
  uE = (r) => r === '*';
function HL(r, a) {
  let o = r.split('/'),
    s = o.length;
  return (
    o.some(uE) && (s += BL),
    a && (s += UL),
    o
      .filter((u) => !uE(u))
      .reduce((u, d) => u + (zL.test(d) ? FL : d === '' ? IL : VL), s)
  );
}
function jL(r, a) {
  return r.length === a.length && r.slice(0, -1).every((s, u) => s === a[u])
    ? r[r.length - 1] - a[a.length - 1]
    : 0;
}
function $L(r, a, o) {
  o === void 0 && (o = !1);
  let { routesMeta: s } = r,
    u = {},
    d = '/',
    f = [];
  for (let v = 0; v < s.length; ++v) {
    let m = s[v],
      y = v === s.length - 1,
      b = d === '/' ? a : a.slice(d.length) || '/',
      T = Ld(
        { path: m.relativePath, caseSensitive: m.caseSensitive, end: y },
        b
      ),
      w = m.route;
    if (
      (!T &&
        y &&
        o &&
        !s[s.length - 1].route.index &&
        (T = Ld(
          { path: m.relativePath, caseSensitive: m.caseSensitive, end: !1 },
          b
        )),
      !T)
    )
      return null;
    (Object.assign(u, T.params),
      f.push({
        params: u,
        pathname: ii([d, T.pathname]),
        pathnameBase: QL(ii([d, T.pathnameBase])),
        route: w,
      }),
      T.pathnameBase !== '/' && (d = ii([d, T.pathnameBase])));
  }
  return f;
}
function Ld(r, a) {
  typeof r == 'string' && (r = { path: r, caseSensitive: !1, end: !0 });
  let [o, s] = YL(r.path, r.caseSensitive, r.end),
    u = a.match(o);
  if (!u) return null;
  let d = u[0],
    f = d.replace(/(.)\/+$/, '$1'),
    v = u.slice(1);
  return {
    params: s.reduce((y, b, T) => {
      let { paramName: w, isOptional: R } = b;
      if (w === '*') {
        let _ = v[T] || '';
        f = d.slice(0, d.length - _.length).replace(/(.)\/+$/, '$1');
      }
      const D = v[T];
      return (
        R && !D ? (y[w] = void 0) : (y[w] = (D || '').replace(/%2F/g, '/')),
        y
      );
    }, {}),
    pathname: d,
    pathnameBase: f,
    pattern: r,
  };
}
function YL(r, a, o) {
  (a === void 0 && (a = !1),
    o === void 0 && (o = !0),
    _a(
      r === '*' || !r.endsWith('*') || r.endsWith('/*'),
      'Route path "' +
        r +
        '" will be treated as if it were ' +
        ('"' + r.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + r.replace(/\*$/, '/*') + '".')
    ));
  let s = [],
    u =
      '^' +
      r
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (f, v, m) => (
            s.push({ paramName: v, isOptional: m != null }),
            m ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        );
  return (
    r.endsWith('*')
      ? (s.push({ paramName: '*' }),
        (u += r === '*' || r === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : o
        ? (u += '\\/*$')
        : r !== '' && r !== '/' && (u += '(?:(?=\\/|$))'),
    [new RegExp(u, a ? void 0 : 'i'), s]
  );
}
function GL(r) {
  try {
    return r
      .split('/')
      .map((a) => decodeURIComponent(a).replace(/\//g, '%2F'))
      .join('/');
  } catch (a) {
    return (
      _a(
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
function Gi(r, a) {
  if (a === '/') return r;
  if (!r.toLowerCase().startsWith(a.toLowerCase())) return null;
  let o = a.endsWith('/') ? a.length - 1 : a.length,
    s = r.charAt(o);
  return s && s !== '/' ? null : r.slice(o) || '/';
}
function WL(r, a) {
  a === void 0 && (a = '/');
  let {
    pathname: o,
    search: s = '',
    hash: u = '',
  } = typeof r == 'string' ? Bs(r) : r;
  return {
    pathname: o ? (o.startsWith('/') ? o : qL(o, a)) : a,
    search: KL(s),
    hash: JL(u),
  };
}
function qL(r, a) {
  let o = a.replace(/\/+$/, '').split('/');
  return (
    r.split('/').forEach((u) => {
      u === '..' ? o.length > 1 && o.pop() : u !== '.' && o.push(u);
    }),
    o.length > 1 ? o.join('/') : '/'
  );
}
function ty(r, a, o, s) {
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
function XL(r) {
  return r.filter(
    (a, o) => o === 0 || (a.route.path && a.route.path.length > 0)
  );
}
function lw(r, a) {
  let o = XL(r);
  return a
    ? o.map((s, u) => (u === o.length - 1 ? s.pathname : s.pathnameBase))
    : o.map((s) => s.pathnameBase);
}
function uw(r, a, o, s) {
  s === void 0 && (s = !1);
  let u;
  typeof r == 'string'
    ? (u = Bs(r))
    : ((u = Hu({}, r)),
      rn(
        !u.pathname || !u.pathname.includes('?'),
        ty('?', 'pathname', 'search', u)
      ),
      rn(
        !u.pathname || !u.pathname.includes('#'),
        ty('#', 'pathname', 'hash', u)
      ),
      rn(!u.search || !u.search.includes('#'), ty('#', 'search', 'hash', u)));
  let d = r === '' || u.pathname === '',
    f = d ? '/' : u.pathname,
    v;
  if (f == null) v = o;
  else {
    let T = a.length - 1;
    if (!s && f.startsWith('..')) {
      let w = f.split('/');
      for (; w[0] === '..'; ) (w.shift(), (T -= 1));
      u.pathname = w.join('/');
    }
    v = T >= 0 ? a[T] : '/';
  }
  let m = WL(u, v),
    y = f && f !== '/' && f.endsWith('/'),
    b = (d || f === '.') && o.endsWith('/');
  return (!m.pathname.endsWith('/') && (y || b) && (m.pathname += '/'), m);
}
const ii = (r) => r.join('/').replace(/\/\/+/g, '/'),
  QL = (r) => r.replace(/\/+$/, '').replace(/^\/*/, '/'),
  KL = (r) => (!r || r === '?' ? '' : r.startsWith('?') ? r : '?' + r),
  JL = (r) => (!r || r === '#' ? '' : r.startsWith('#') ? r : '#' + r);
function ZL(r) {
  return (
    r != null &&
    typeof r.status == 'number' &&
    typeof r.statusText == 'string' &&
    typeof r.internal == 'boolean' &&
    'data' in r
  );
}
const cw = ['post', 'put', 'patch', 'delete'];
new Set(cw);
const ek = ['get', ...cw];
new Set(ek);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function $u() {
  return (
    ($u = Object.assign
      ? Object.assign.bind()
      : function (r) {
          for (var a = 1; a < arguments.length; a++) {
            var o = arguments[a];
            for (var s in o)
              Object.prototype.hasOwnProperty.call(o, s) && (r[s] = o[s]);
          }
          return r;
        }),
    $u.apply(this, arguments)
  );
}
const qu = $.createContext(null);
qu.displayName = 'DataRouter';
const Ay = $.createContext(null);
Ay.displayName = 'DataRouterState';
const tk = $.createContext(null);
tk.displayName = 'Await';
const ia = $.createContext(null);
ia.displayName = 'Navigation';
const Xu = $.createContext(null);
Xu.displayName = 'Location';
const Ra = $.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Ra.displayName = 'Route';
const My = $.createContext(null);
My.displayName = 'RouteError';
function nk(r, a) {
  let { relative: o } = a === void 0 ? {} : a;
  Qu() ||
    rn(
      !1,
      'useHref() may be used only in the context of a <Router> component.'
    );
  let { basename: s, navigator: u } = $.useContext(ia),
    { hash: d, pathname: f, search: v } = Ku(r, { relative: o }),
    m = f;
  return (
    s !== '/' && (m = f === '/' ? s : ii([s, f])),
    u.createHref({ pathname: m, search: v, hash: d })
  );
}
function Qu() {
  return $.useContext(Xu) != null;
}
function Hs() {
  return (
    Qu() ||
      rn(
        !1,
        'useLocation() may be used only in the context of a <Router> component.'
      ),
    $.useContext(Xu).location
  );
}
const fw =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function dw(r) {
  $.useContext(ia).static || $.useLayoutEffect(r);
}
function pw() {
  let { isDataRoute: r } = $.useContext(Ra);
  return r ? gk() : rk();
}
function rk() {
  Qu() ||
    rn(
      !1,
      'useNavigate() may be used only in the context of a <Router> component.'
    );
  let r = $.useContext(qu),
    { basename: a, future: o, navigator: s } = $.useContext(ia),
    { matches: u } = $.useContext(Ra),
    { pathname: d } = Hs(),
    f = JSON.stringify(lw(u, o.v7_relativeSplatPath)),
    v = $.useRef(!1);
  return (
    dw(() => {
      v.current = !0;
    }),
    $.useCallback(
      function (y, b) {
        if ((b === void 0 && (b = {}), _a(v.current, fw), !v.current)) return;
        if (typeof y == 'number') {
          s.go(y);
          return;
        }
        let T = uw(y, JSON.parse(f), d, b.relative === 'path');
        (r == null &&
          a !== '/' &&
          (T.pathname = T.pathname === '/' ? a : ii([a, T.pathname])),
          (b.replace ? s.replace : s.push)(T, b.state, b));
      },
      [a, s, f, d, r]
    )
  );
}
const ak = $.createContext(null);
function ik(r) {
  let a = $.useContext(Ra).outlet;
  return a && $.createElement(ak.Provider, { value: r }, a);
}
function Ku(r, a) {
  let { relative: o } = a === void 0 ? {} : a,
    { future: s } = $.useContext(ia),
    { matches: u } = $.useContext(Ra),
    { pathname: d } = Hs(),
    f = JSON.stringify(lw(u, s.v7_relativeSplatPath));
  return $.useMemo(() => uw(r, JSON.parse(f), d, o === 'path'), [r, f, d, o]);
}
function ok(r, a) {
  return sk(r, a);
}
function sk(r, a, o, s) {
  Qu() ||
    rn(
      !1,
      'useRoutes() may be used only in the context of a <Router> component.'
    );
  let { navigator: u } = $.useContext(ia),
    { matches: d } = $.useContext(Ra),
    f = d[d.length - 1],
    v = f ? f.params : {},
    m = f ? f.pathname : '/',
    y = f ? f.pathnameBase : '/',
    b = f && f.route;
  {
    let C = (b && b.path) || '';
    hw(
      m,
      !b || C.endsWith('*'),
      'You rendered descendant <Routes> (or called `useRoutes()`) at ' +
        ('"' + m + '" (under <Route path="' + C + '">) but the ') +
        `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` +
        ('Please change the parent <Route path="' + C + '"> to <Route ') +
        ('path="' + (C === '/' ? '*' : C + '/*') + '">.')
    );
  }
  let T = Hs(),
    w;
  if (a) {
    var R;
    let C = typeof a == 'string' ? Bs(a) : a;
    (y === '/' ||
      ((R = C.pathname) != null && R.startsWith(y)) ||
      rn(
        !1,
        'When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was ' +
          ('matched by all parent routes. The current pathname base is "' +
            y +
            '" ') +
          ('but pathname "' +
            C.pathname +
            '" was given in the `location` prop.')
      ),
      (w = C));
  } else w = T;
  let D = w.pathname || '/',
    _ = D;
  if (y !== '/') {
    let C = y.replace(/^\//, '').split('/');
    _ = '/' + D.replace(/^\//, '').split('/').slice(C.length).join('/');
  }
  let L = kL(r, { pathname: _ });
  (_a(
    b || L != null,
    'No routes matched location "' + w.pathname + w.search + w.hash + '" '
  ),
    _a(
      L == null ||
        L[L.length - 1].route.element !== void 0 ||
        L[L.length - 1].route.Component !== void 0 ||
        L[L.length - 1].route.lazy !== void 0,
      'Matched leaf route at location "' +
        w.pathname +
        w.search +
        w.hash +
        '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.'
    ));
  let O = dk(
    L &&
      L.map((C) =>
        Object.assign({}, C, {
          params: Object.assign({}, v, C.params),
          pathname: ii([
            y,
            u.encodeLocation
              ? u.encodeLocation(C.pathname).pathname
              : C.pathname,
          ]),
          pathnameBase:
            C.pathnameBase === '/'
              ? y
              : ii([
                  y,
                  u.encodeLocation
                    ? u.encodeLocation(C.pathnameBase).pathname
                    : C.pathnameBase,
                ]),
        })
      ),
    d,
    o,
    s
  );
  return a && O
    ? $.createElement(
        Xu.Provider,
        {
          value: {
            location: $u(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              w
            ),
            navigationType: ji.Pop,
          },
        },
        O
      )
    : O;
}
function lk() {
  let r = yk(),
    a = ZL(r)
      ? r.status + ' ' + r.statusText
      : r instanceof Error
        ? r.message
        : JSON.stringify(r),
    o = r instanceof Error ? r.stack : null,
    s = 'rgba(200,200,200, 0.5)',
    u = { padding: '0.5rem', backgroundColor: s },
    d = { padding: '2px 4px', backgroundColor: s },
    f = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', r),
    (f = $.createElement(
      $.Fragment,
      null,
      $.createElement('p', null, '💿 Hey developer 👋'),
      $.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        $.createElement('code', { style: d }, 'ErrorBoundary'),
        ' or',
        ' ',
        $.createElement('code', { style: d }, 'errorElement'),
        ' prop on your route.'
      )
    )),
    $.createElement(
      $.Fragment,
      null,
      $.createElement('h2', null, 'Unexpected Application Error!'),
      $.createElement('h3', { style: { fontStyle: 'italic' } }, a),
      o ? $.createElement('pre', { style: u }, o) : null,
      f
    )
  );
}
const uk = $.createElement(lk, null);
class ck extends $.Component {
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
      ? $.createElement(
          Ra.Provider,
          { value: this.props.routeContext },
          $.createElement(My.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function fk(r) {
  let { routeContext: a, match: o, children: s } = r,
    u = $.useContext(qu);
  return (
    u &&
      u.static &&
      u.staticContext &&
      (o.route.errorElement || o.route.ErrorBoundary) &&
      (u.staticContext._deepestRenderedBoundaryId = o.route.id),
    $.createElement(Ra.Provider, { value: a }, s)
  );
}
function dk(r, a, o, s) {
  var u;
  if (
    (a === void 0 && (a = []),
    o === void 0 && (o = null),
    s === void 0 && (s = null),
    r == null)
  ) {
    var d;
    if (!o) return null;
    if (o.errors) r = o.matches;
    else if (
      (d = s) != null &&
      d.v7_partialHydration &&
      a.length === 0 &&
      !o.initialized &&
      o.matches.length > 0
    )
      r = o.matches;
    else return null;
  }
  let f = r,
    v = (u = o) == null ? void 0 : u.errors;
  if (v != null) {
    let b = f.findIndex(
      (T) => T.route.id && (v == null ? void 0 : v[T.route.id]) !== void 0
    );
    (b >= 0 ||
      rn(
        !1,
        'Could not find a matching route for errors on route IDs: ' +
          Object.keys(v).join(',')
      ),
      (f = f.slice(0, Math.min(f.length, b + 1))));
  }
  let m = !1,
    y = -1;
  if (o && s && s.v7_partialHydration)
    for (let b = 0; b < f.length; b++) {
      let T = f[b];
      if (
        ((T.route.HydrateFallback || T.route.hydrateFallbackElement) && (y = b),
        T.route.id)
      ) {
        let { loaderData: w, errors: R } = o,
          D =
            T.route.loader &&
            w[T.route.id] === void 0 &&
            (!R || R[T.route.id] === void 0);
        if (T.route.lazy || D) {
          ((m = !0), y >= 0 ? (f = f.slice(0, y + 1)) : (f = [f[0]]));
          break;
        }
      }
    }
  return f.reduceRight((b, T, w) => {
    let R,
      D = !1,
      _ = null,
      L = null;
    o &&
      ((R = v && T.route.id ? v[T.route.id] : void 0),
      (_ = T.route.errorElement || uk),
      m &&
        (y < 0 && w === 0
          ? (hw(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (D = !0),
            (L = null))
          : y === w &&
            ((D = !0), (L = T.route.hydrateFallbackElement || null))));
    let O = a.concat(f.slice(0, w + 1)),
      C = () => {
        let M;
        return (
          R
            ? (M = _)
            : D
              ? (M = L)
              : T.route.Component
                ? (M = $.createElement(T.route.Component, null))
                : T.route.element
                  ? (M = T.route.element)
                  : (M = b),
          $.createElement(fk, {
            match: T,
            routeContext: { outlet: b, matches: O, isDataRoute: o != null },
            children: M,
          })
        );
      };
    return o && (T.route.ErrorBoundary || T.route.errorElement || w === 0)
      ? $.createElement(ck, {
          location: o.location,
          revalidation: o.revalidation,
          component: _,
          error: R,
          children: C(),
          routeContext: { outlet: null, matches: O, isDataRoute: !0 },
        })
      : C();
  }, null);
}
var vw = (function (r) {
    return (
      (r.UseBlocker = 'useBlocker'),
      (r.UseRevalidator = 'useRevalidator'),
      (r.UseNavigateStable = 'useNavigate'),
      r
    );
  })(vw || {}),
  Yu = (function (r) {
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
  })(Yu || {});
function Ly(r) {
  return (
    r +
    ' must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router.'
  );
}
function pk(r) {
  let a = $.useContext(qu);
  return (a || rn(!1, Ly(r)), a);
}
function vk(r) {
  let a = $.useContext(Ay);
  return (a || rn(!1, Ly(r)), a);
}
function hk(r) {
  let a = $.useContext(Ra);
  return (a || rn(!1, Ly(r)), a);
}
function ky(r) {
  let a = hk(r),
    o = a.matches[a.matches.length - 1];
  return (
    o.route.id ||
      rn(!1, r + ' can only be used on routes that contain a unique "id"'),
    o.route.id
  );
}
function mk() {
  return ky(Yu.UseRouteId);
}
function yk() {
  var r;
  let a = $.useContext(My),
    o = vk(Yu.UseRouteError),
    s = ky(Yu.UseRouteError);
  return a !== void 0 ? a : (r = o.errors) == null ? void 0 : r[s];
}
function gk() {
  let { router: r } = pk(vw.UseNavigateStable),
    a = ky(Yu.UseNavigateStable),
    o = $.useRef(!1);
  return (
    dw(() => {
      o.current = !0;
    }),
    $.useCallback(
      function (u, d) {
        (d === void 0 && (d = {}),
          _a(o.current, fw),
          o.current &&
            (typeof u == 'number'
              ? r.navigate(u)
              : r.navigate(u, $u({ fromRouteId: a }, d))));
      },
      [r, a]
    )
  );
}
const cE = {};
function hw(r, a, o) {
  !a && !cE[r] && ((cE[r] = !0), _a(!1, o));
}
const fE = {};
function bk(r, a) {
  fE[a] || ((fE[a] = !0), console.warn(a));
}
const Ps = (r, a, o) =>
  bk(
    r,
    '⚠️ React Router Future Flag Warning: ' +
      a +
      '. ' +
      ('You can use the `' + r + '` future flag to opt-in early. ') +
      ('For more information, see ' + o + '.')
  );
function Sk(r, a) {
  ((r == null ? void 0 : r.v7_startTransition) === void 0 &&
    Ps(
      'v7_startTransition',
      'React Router will begin wrapping state updates in `React.startTransition` in v7',
      'https://reactrouter.com/v6/upgrading/future#v7_starttransition'
    ),
    (r == null ? void 0 : r.v7_relativeSplatPath) === void 0 &&
      (!a || a.v7_relativeSplatPath === void 0) &&
      Ps(
        'v7_relativeSplatPath',
        'Relative route resolution within Splat routes is changing in v7',
        'https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath'
      ),
    a &&
      (a.v7_fetcherPersist === void 0 &&
        Ps(
          'v7_fetcherPersist',
          'The persistence behavior of fetchers is changing in v7',
          'https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist'
        ),
      a.v7_normalizeFormMethod === void 0 &&
        Ps(
          'v7_normalizeFormMethod',
          'Casing of `formMethod` fields is being normalized to uppercase in v7',
          'https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod'
        ),
      a.v7_partialHydration === void 0 &&
        Ps(
          'v7_partialHydration',
          '`RouterProvider` hydration behavior is changing in v7',
          'https://reactrouter.com/v6/upgrading/future#v7_partialhydration'
        ),
      a.v7_skipActionErrorRevalidation === void 0 &&
        Ps(
          'v7_skipActionErrorRevalidation',
          'The revalidation behavior after 4xx/5xx `action` responses is changing in v7',
          'https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation'
        )));
}
function Tk(r) {
  return ik(r.context);
}
function Vi(r) {
  rn(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
  );
}
function Ek(r) {
  let {
    basename: a = '/',
    children: o = null,
    location: s,
    navigationType: u = ji.Pop,
    navigator: d,
    static: f = !1,
    future: v,
  } = r;
  Qu() &&
    rn(
      !1,
      'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
    );
  let m = a.replace(/^\/*/, '/'),
    y = $.useMemo(
      () => ({
        basename: m,
        navigator: d,
        static: f,
        future: $u({ v7_relativeSplatPath: !1 }, v),
      }),
      [m, v, d, f]
    );
  typeof s == 'string' && (s = Bs(s));
  let {
      pathname: b = '/',
      search: T = '',
      hash: w = '',
      state: R = null,
      key: D = 'default',
    } = s,
    _ = $.useMemo(() => {
      let L = Gi(b, m);
      return L == null
        ? null
        : {
            location: { pathname: L, search: T, hash: w, state: R, key: D },
            navigationType: u,
          };
    }, [m, b, T, w, R, D, u]);
  return (
    _a(
      _ != null,
      '<Router basename="' +
        m +
        '"> is not able to match the URL ' +
        ('"' + b + T + w + '" because it does not start with the ') +
        "basename, so the <Router> won't render anything."
    ),
    _ == null
      ? null
      : $.createElement(
          ia.Provider,
          { value: y },
          $.createElement(Xu.Provider, { children: o, value: _ })
        )
  );
}
function wk(r) {
  let { children: a, location: o } = r;
  return ok(hy(a), o);
}
new Promise(() => {});
function hy(r, a) {
  a === void 0 && (a = []);
  let o = [];
  return (
    $.Children.forEach(r, (s, u) => {
      if (!$.isValidElement(s)) return;
      let d = [...a, u];
      if (s.type === $.Fragment) {
        o.push.apply(o, hy(s.props.children, d));
        return;
      }
      (s.type !== Vi &&
        rn(
          !1,
          '[' +
            (typeof s.type == 'string' ? s.type : s.type.name) +
            '] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>'
        ),
        !s.props.index ||
          !s.props.children ||
          rn(!1, 'An index route cannot have child routes.'));
      let f = {
        id: s.props.id || d.join('-'),
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
      (s.props.children && (f.children = hy(s.props.children, d)), o.push(f));
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
 */ function Us() {
  return (
    (Us = Object.assign
      ? Object.assign.bind()
      : function (r) {
          for (var a = 1; a < arguments.length; a++) {
            var o = arguments[a];
            for (var s in o)
              Object.prototype.hasOwnProperty.call(o, s) && (r[s] = o[s]);
          }
          return r;
        }),
    Us.apply(this, arguments)
  );
}
function Ny(r, a) {
  if (r == null) return {};
  var o = {},
    s = Object.keys(r),
    u,
    d;
  for (d = 0; d < s.length; d++)
    ((u = s[d]), !(a.indexOf(u) >= 0) && (o[u] = r[u]));
  return o;
}
const _d = 'get',
  Rd = 'application/x-www-form-urlencoded';
function jd(r) {
  return r != null && typeof r.tagName == 'string';
}
function Ck(r) {
  return jd(r) && r.tagName.toLowerCase() === 'button';
}
function xk(r) {
  return jd(r) && r.tagName.toLowerCase() === 'form';
}
function _k(r) {
  return jd(r) && r.tagName.toLowerCase() === 'input';
}
function Rk(r) {
  return !!(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey);
}
function Dk(r, a) {
  return r.button === 0 && (!a || a === '_self') && !Rk(r);
}
let hd = null;
function Ok() {
  if (hd === null)
    try {
      (new FormData(document.createElement('form'), 0), (hd = !1));
    } catch {
      hd = !0;
    }
  return hd;
}
const Ak = new Set([
  'application/x-www-form-urlencoded',
  'multipart/form-data',
  'text/plain',
]);
function ny(r) {
  return r != null && !Ak.has(r)
    ? (_a(
        !1,
        '"' +
          r +
          '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' +
          ('and will default to "' + Rd + '"')
      ),
      null)
    : r;
}
function Mk(r, a) {
  let o, s, u, d, f;
  if (xk(r)) {
    let v = r.getAttribute('action');
    ((s = v ? Gi(v, a) : null),
      (o = r.getAttribute('method') || _d),
      (u = ny(r.getAttribute('enctype')) || Rd),
      (d = new FormData(r)));
  } else if (Ck(r) || (_k(r) && (r.type === 'submit' || r.type === 'image'))) {
    let v = r.form;
    if (v == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let m = r.getAttribute('formaction') || v.getAttribute('action');
    if (
      ((s = m ? Gi(m, a) : null),
      (o = r.getAttribute('formmethod') || v.getAttribute('method') || _d),
      (u =
        ny(r.getAttribute('formenctype')) ||
        ny(v.getAttribute('enctype')) ||
        Rd),
      (d = new FormData(v, r)),
      !Ok())
    ) {
      let { name: y, type: b, value: T } = r;
      if (b === 'image') {
        let w = y ? y + '.' : '';
        (d.append(w + 'x', '0'), d.append(w + 'y', '0'));
      } else y && d.append(y, T);
    }
  } else {
    if (jd(r))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    ((o = _d), (s = null), (u = Rd), (f = r));
  }
  return (
    d && u === 'text/plain' && ((f = d), (d = void 0)),
    { action: s, method: o.toLowerCase(), encType: u, formData: d, body: f }
  );
}
const Lk = [
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
  kk = [
    'aria-current',
    'caseSensitive',
    'className',
    'end',
    'style',
    'to',
    'viewTransition',
    'children',
  ],
  Nk = [
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
  Pk = '6';
try {
  window.__reactRouterVersion = Pk;
} catch {}
const mw = $.createContext({ isTransitioning: !1 });
mw.displayName = 'ViewTransition';
const zk = $.createContext(new Map());
zk.displayName = 'Fetchers';
const Fk = 'startTransition',
  dE = RL[Fk];
function Uk(r) {
  let { basename: a, children: o, future: s, window: u } = r,
    d = $.useRef();
  d.current == null && (d.current = AL({ window: u, v5Compat: !0 }));
  let f = d.current,
    [v, m] = $.useState({ action: f.action, location: f.location }),
    { v7_startTransition: y } = s || {},
    b = $.useCallback(
      (T) => {
        y && dE ? dE(() => m(T)) : m(T);
      },
      [m, y]
    );
  return (
    $.useLayoutEffect(() => f.listen(b), [f, b]),
    $.useEffect(() => Sk(s), [s]),
    $.createElement(Ek, {
      basename: a,
      children: o,
      location: v.location,
      navigationType: v.action,
      navigator: f,
      future: s,
    })
  );
}
const Ik =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  Vk = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ri = $.forwardRef(function (a, o) {
    let {
        onClick: s,
        relative: u,
        reloadDocument: d,
        replace: f,
        state: v,
        target: m,
        to: y,
        preventScrollReset: b,
        viewTransition: T,
      } = a,
      w = Ny(a, Lk),
      { basename: R } = $.useContext(ia),
      D,
      _ = !1;
    if (typeof y == 'string' && Vk.test(y) && ((D = y), Ik))
      try {
        let M = new URL(window.location.href),
          k = y.startsWith('//') ? new URL(M.protocol + y) : new URL(y),
          z = Gi(k.pathname, R);
        k.origin === M.origin && z != null
          ? (y = z + k.search + k.hash)
          : (_ = !0);
      } catch {
        _a(
          !1,
          '<Link to="' +
            y +
            '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.'
        );
      }
    let L = nk(y, { relative: u }),
      O = $k(y, {
        replace: f,
        state: v,
        target: m,
        preventScrollReset: b,
        relative: u,
        viewTransition: T,
      });
    function C(M) {
      (s && s(M), M.defaultPrevented || O(M));
    }
    return $.createElement(
      'a',
      Us({}, w, { href: D || L, onClick: _ || d ? s : C, ref: o, target: m })
    );
  });
ri.displayName = 'Link';
const Bk = $.forwardRef(function (a, o) {
  let {
      'aria-current': s = 'page',
      caseSensitive: u = !1,
      className: d = '',
      end: f = !1,
      style: v,
      to: m,
      viewTransition: y,
      children: b,
    } = a,
    T = Ny(a, kk),
    w = Ku(m, { relative: T.relative }),
    R = Hs(),
    D = $.useContext(Ay),
    { navigator: _, basename: L } = $.useContext(ia),
    O = D != null && Qk(w) && y === !0,
    C = _.encodeLocation ? _.encodeLocation(w).pathname : w.pathname,
    M = R.pathname,
    k =
      D && D.navigation && D.navigation.location
        ? D.navigation.location.pathname
        : null;
  (u ||
    ((M = M.toLowerCase()),
    (k = k ? k.toLowerCase() : null),
    (C = C.toLowerCase())),
    k && L && (k = Gi(k, L) || k));
  const z = C !== '/' && C.endsWith('/') ? C.length - 1 : C.length;
  let Y = M === C || (!f && M.startsWith(C) && M.charAt(z) === '/'),
    B =
      k != null &&
      (k === C || (!f && k.startsWith(C) && k.charAt(C.length) === '/')),
    q = { isActive: Y, isPending: B, isTransitioning: O },
    Z = Y ? s : void 0,
    W;
  typeof d == 'function'
    ? (W = d(q))
    : (W = [
        d,
        Y ? 'active' : null,
        B ? 'pending' : null,
        O ? 'transitioning' : null,
      ]
        .filter(Boolean)
        .join(' '));
  let ie = typeof v == 'function' ? v(q) : v;
  return $.createElement(
    ri,
    Us({}, T, {
      'aria-current': Z,
      className: W,
      ref: o,
      style: ie,
      to: m,
      viewTransition: y,
    }),
    typeof b == 'function' ? b(q) : b
  );
});
Bk.displayName = 'NavLink';
const Hk = $.forwardRef((r, a) => {
  let {
      fetcherKey: o,
      navigate: s,
      reloadDocument: u,
      replace: d,
      state: f,
      method: v = _d,
      action: m,
      onSubmit: y,
      relative: b,
      preventScrollReset: T,
      viewTransition: w,
    } = r,
    R = Ny(r, Nk),
    D = qk(),
    _ = Xk(m, { relative: b }),
    L = v.toLowerCase() === 'get' ? 'get' : 'post',
    O = (C) => {
      if ((y && y(C), C.defaultPrevented)) return;
      C.preventDefault();
      let M = C.nativeEvent.submitter,
        k = (M == null ? void 0 : M.getAttribute('formmethod')) || v;
      D(M || C.currentTarget, {
        fetcherKey: o,
        method: k,
        navigate: s,
        replace: d,
        state: f,
        relative: b,
        preventScrollReset: T,
        viewTransition: w,
      });
    };
  return $.createElement(
    'form',
    Us({ ref: a, method: L, action: _, onSubmit: u ? y : O }, R)
  );
});
Hk.displayName = 'Form';
var kd;
(function (r) {
  ((r.UseScrollRestoration = 'useScrollRestoration'),
    (r.UseSubmit = 'useSubmit'),
    (r.UseSubmitFetcher = 'useSubmitFetcher'),
    (r.UseFetcher = 'useFetcher'),
    (r.useViewTransitionState = 'useViewTransitionState'));
})(kd || (kd = {}));
var pE;
(function (r) {
  ((r.UseFetcher = 'useFetcher'),
    (r.UseFetchers = 'useFetchers'),
    (r.UseScrollRestoration = 'useScrollRestoration'));
})(pE || (pE = {}));
function jk(r) {
  return (
    r +
    ' must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router.'
  );
}
function yw(r) {
  let a = $.useContext(qu);
  return (a || rn(!1, jk(r)), a);
}
function $k(r, a) {
  let {
      target: o,
      replace: s,
      state: u,
      preventScrollReset: d,
      relative: f,
      viewTransition: v,
    } = a === void 0 ? {} : a,
    m = pw(),
    y = Hs(),
    b = Ku(r, { relative: f });
  return $.useCallback(
    (T) => {
      if (Dk(T, o)) {
        T.preventDefault();
        let w = s !== void 0 ? s : ju(y) === ju(b);
        m(r, {
          replace: w,
          state: u,
          preventScrollReset: d,
          relative: f,
          viewTransition: v,
        });
      }
    },
    [y, m, b, s, u, o, r, d, f, v]
  );
}
function Yk() {
  if (typeof document > 'u')
    throw new Error(
      'You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.'
    );
}
let Gk = 0,
  Wk = () => '__' + String(++Gk) + '__';
function qk() {
  let { router: r } = yw(kd.UseSubmit),
    { basename: a } = $.useContext(ia),
    o = mk();
  return $.useCallback(
    function (s, u) {
      (u === void 0 && (u = {}), Yk());
      let { action: d, method: f, encType: v, formData: m, body: y } = Mk(s, a);
      if (u.navigate === !1) {
        let b = u.fetcherKey || Wk();
        r.fetch(b, o, u.action || d, {
          preventScrollReset: u.preventScrollReset,
          formData: m,
          body: y,
          formMethod: u.method || f,
          formEncType: u.encType || v,
          flushSync: u.flushSync,
        });
      } else
        r.navigate(u.action || d, {
          preventScrollReset: u.preventScrollReset,
          formData: m,
          body: y,
          formMethod: u.method || f,
          formEncType: u.encType || v,
          replace: u.replace,
          state: u.state,
          fromRouteId: o,
          flushSync: u.flushSync,
          viewTransition: u.viewTransition,
        });
    },
    [r, a, o]
  );
}
function Xk(r, a) {
  let { relative: o } = a === void 0 ? {} : a,
    { basename: s } = $.useContext(ia),
    u = $.useContext(Ra);
  u || rn(!1, 'useFormAction must be used inside a RouteContext');
  let [d] = u.matches.slice(-1),
    f = Us({}, Ku(r || '.', { relative: o })),
    v = Hs();
  if (r == null) {
    f.search = v.search;
    let m = new URLSearchParams(f.search),
      y = m.getAll('index');
    if (y.some((T) => T === '')) {
      (m.delete('index'),
        y.filter((w) => w).forEach((w) => m.append('index', w)));
      let T = m.toString();
      f.search = T ? '?' + T : '';
    }
  }
  return (
    (!r || r === '.') &&
      d.route.index &&
      (f.search = f.search ? f.search.replace(/^\?/, '?index&') : '?index'),
    s !== '/' && (f.pathname = f.pathname === '/' ? s : ii([s, f.pathname])),
    ju(f)
  );
}
function Qk(r, a) {
  a === void 0 && (a = {});
  let o = $.useContext(mw);
  o == null &&
    rn(
      !1,
      "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
    );
  let { basename: s } = yw(kd.useViewTransitionState),
    u = Ku(r, { relative: a.relative });
  if (!o.isTransitioning) return !1;
  let d = Gi(o.currentLocation.pathname, s) || o.currentLocation.pathname,
    f = Gi(o.nextLocation.pathname, s) || o.nextLocation.pathname;
  return Ld(u.pathname, f) != null || Ld(u.pathname, d) != null;
}
var gw = { exports: {} },
  Yt = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function () {
  function r(_) {
    if (typeof _ == 'object' && _ !== null) {
      var L = _.$$typeof;
      switch (L) {
        case a:
          switch (((_ = _.type), _)) {
            case s:
            case d:
            case u:
            case y:
            case b:
            case R:
              return _;
            default:
              switch (((_ = _ && _.$$typeof), _)) {
                case v:
                case m:
                case w:
                case T:
                  return _;
                case f:
                  return _;
                default:
                  return L;
              }
          }
        case o:
          return L;
      }
    }
  }
  var a = Symbol.for('react.transitional.element'),
    o = Symbol.for('react.portal'),
    s = Symbol.for('react.fragment'),
    u = Symbol.for('react.strict_mode'),
    d = Symbol.for('react.profiler'),
    f = Symbol.for('react.consumer'),
    v = Symbol.for('react.context'),
    m = Symbol.for('react.forward_ref'),
    y = Symbol.for('react.suspense'),
    b = Symbol.for('react.suspense_list'),
    T = Symbol.for('react.memo'),
    w = Symbol.for('react.lazy'),
    R = Symbol.for('react.view_transition'),
    D = Symbol.for('react.client.reference');
  ((Yt.ContextConsumer = f),
    (Yt.ContextProvider = v),
    (Yt.Element = a),
    (Yt.ForwardRef = m),
    (Yt.Fragment = s),
    (Yt.Lazy = w),
    (Yt.Memo = T),
    (Yt.Portal = o),
    (Yt.Profiler = d),
    (Yt.StrictMode = u),
    (Yt.Suspense = y),
    (Yt.SuspenseList = b),
    (Yt.isContextConsumer = function (_) {
      return r(_) === f;
    }),
    (Yt.isContextProvider = function (_) {
      return r(_) === v;
    }),
    (Yt.isElement = function (_) {
      return typeof _ == 'object' && _ !== null && _.$$typeof === a;
    }),
    (Yt.isForwardRef = function (_) {
      return r(_) === m;
    }),
    (Yt.isFragment = function (_) {
      return r(_) === s;
    }),
    (Yt.isLazy = function (_) {
      return r(_) === w;
    }),
    (Yt.isMemo = function (_) {
      return r(_) === T;
    }),
    (Yt.isPortal = function (_) {
      return r(_) === o;
    }),
    (Yt.isProfiler = function (_) {
      return r(_) === d;
    }),
    (Yt.isStrictMode = function (_) {
      return r(_) === u;
    }),
    (Yt.isSuspense = function (_) {
      return r(_) === y;
    }),
    (Yt.isSuspenseList = function (_) {
      return r(_) === b;
    }),
    (Yt.isValidElementType = function (_) {
      return (
        typeof _ == 'string' ||
        typeof _ == 'function' ||
        _ === s ||
        _ === d ||
        _ === u ||
        _ === y ||
        _ === b ||
        (typeof _ == 'object' &&
          _ !== null &&
          (_.$$typeof === w ||
            _.$$typeof === T ||
            _.$$typeof === v ||
            _.$$typeof === f ||
            _.$$typeof === m ||
            _.$$typeof === D ||
            _.getModuleId !== void 0))
      );
    }),
    (Yt.typeOf = r));
})();
gw.exports = Yt;
var Py = gw.exports;
function Kk(r) {
  function a(we, Ce, Re, Ve, Q) {
    for (
      var Ze = 0,
        be = 0,
        ot = 0,
        Qe = 0,
        et,
        ce,
        st = 0,
        pt = 0,
        Be,
        ht = (Be = et = 0),
        We = 0,
        At = 0,
        cn = 0,
        A = 0,
        V = Re.length,
        ee = V - 1,
        ge,
        te = '',
        se = '',
        Me = '',
        je = '',
        tt;
      We < V;

    ) {
      if (
        ((ce = Re.charCodeAt(We)),
        We === ee &&
          be + Qe + ot + Ze !== 0 &&
          (be !== 0 && (ce = be === 47 ? 10 : 47),
          (Qe = ot = Ze = 0),
          V++,
          ee++),
        be + Qe + ot + Ze === 0)
      ) {
        if (
          We === ee &&
          (0 < At && (te = te.replace(w, '')), 0 < te.trim().length)
        ) {
          switch (ce) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              te += Re.charAt(We);
          }
          ce = 59;
        }
        switch (ce) {
          case 123:
            for (
              te = te.trim(), et = te.charCodeAt(0), Be = 1, A = ++We;
              We < V;

            ) {
              switch ((ce = Re.charCodeAt(We))) {
                case 123:
                  Be++;
                  break;
                case 125:
                  Be--;
                  break;
                case 47:
                  switch ((ce = Re.charCodeAt(We + 1))) {
                    case 42:
                    case 47:
                      e: {
                        for (ht = We + 1; ht < ee; ++ht)
                          switch (Re.charCodeAt(ht)) {
                            case 47:
                              if (
                                ce === 42 &&
                                Re.charCodeAt(ht - 1) === 42 &&
                                We + 2 !== ht
                              ) {
                                We = ht + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (ce === 47) {
                                We = ht + 1;
                                break e;
                              }
                          }
                        We = ht;
                      }
                  }
                  break;
                case 91:
                  ce++;
                case 40:
                  ce++;
                case 34:
                case 39:
                  for (; We++ < ee && Re.charCodeAt(We) !== ce; );
              }
              if (Be === 0) break;
              We++;
            }
            switch (
              ((Be = Re.substring(A, We)),
              et === 0 && (et = (te = te.replace(T, '').trim()).charCodeAt(0)),
              et)
            ) {
              case 64:
                switch (
                  (0 < At && (te = te.replace(w, '')),
                  (ce = te.charCodeAt(1)),
                  ce)
                ) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    At = Ce;
                    break;
                  default:
                    At = ue;
                }
                if (
                  ((Be = a(Ce, At, Be, ce, Q + 1)),
                  (A = Be.length),
                  0 < me &&
                    ((At = o(ue, te, cn)),
                    (tt = v(3, Be, At, Ce, X, I, A, ce, Q, Ve)),
                    (te = At.join('')),
                    tt !== void 0 &&
                      (A = (Be = tt.trim()).length) === 0 &&
                      ((ce = 0), (Be = ''))),
                  0 < A)
                )
                  switch (ce) {
                    case 115:
                      te = te.replace(Y, f);
                    case 100:
                    case 109:
                    case 45:
                      Be = te + '{' + Be + '}';
                      break;
                    case 107:
                      ((te = te.replace(C, '$1 $2')),
                        (Be = te + '{' + Be + '}'),
                        (Be =
                          fe === 1 || (fe === 2 && d('@' + Be, 3))
                            ? '@-webkit-' + Be + '@' + Be
                            : '@' + Be));
                      break;
                    default:
                      ((Be = te + Be), Ve === 112 && (Be = ((se += Be), '')));
                  }
                else Be = '';
                break;
              default:
                Be = a(Ce, o(Ce, te, cn), Be, Ve, Q + 1);
            }
            ((Me += Be),
              (Be = cn = At = ht = et = 0),
              (te = ''),
              (ce = Re.charCodeAt(++We)));
            break;
          case 125:
          case 59:
            if (
              ((te = (0 < At ? te.replace(w, '') : te).trim()),
              1 < (A = te.length))
            )
              switch (
                (ht === 0 &&
                  ((et = te.charCodeAt(0)),
                  et === 45 || (96 < et && 123 > et)) &&
                  (A = (te = te.replace(' ', ':')).length),
                0 < me &&
                  (tt = v(1, te, Ce, we, X, I, se.length, Ve, Q, Ve)) !==
                    void 0 &&
                  (A = (te = tt.trim()).length) === 0 &&
                  (te = '\0\0'),
                (et = te.charCodeAt(0)),
                (ce = te.charCodeAt(1)),
                et)
              ) {
                case 0:
                  break;
                case 64:
                  if (ce === 105 || ce === 99) {
                    je += te + Re.charAt(We);
                    break;
                  }
                default:
                  te.charCodeAt(A - 1) !== 58 &&
                    (se += u(te, et, ce, te.charCodeAt(2)));
              }
            ((cn = At = ht = et = 0), (te = ''), (ce = Re.charCodeAt(++We)));
        }
      }
      switch (ce) {
        case 13:
        case 10:
          (be === 47
            ? (be = 0)
            : 1 + et === 0 &&
              Ve !== 107 &&
              0 < te.length &&
              ((At = 1), (te += '\0')),
            0 < me * Ge && v(0, te, Ce, we, X, I, se.length, Ve, Q, Ve),
            (I = 1),
            X++);
          break;
        case 59:
        case 125:
          if (be + Qe + ot + Ze === 0) {
            I++;
            break;
          }
        default:
          switch ((I++, (ge = Re.charAt(We)), ce)) {
            case 9:
            case 32:
              if (Qe + Ze + be === 0)
                switch (st) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    ge = '';
                    break;
                  default:
                    ce !== 32 && (ge = ' ');
                }
              break;
            case 0:
              ge = '\\0';
              break;
            case 12:
              ge = '\\f';
              break;
            case 11:
              ge = '\\v';
              break;
            case 38:
              Qe + be + Ze === 0 && ((At = cn = 1), (ge = '\f' + ge));
              break;
            case 108:
              if (Qe + be + Ze + oe === 0 && 0 < ht)
                switch (We - ht) {
                  case 2:
                    st === 112 && Re.charCodeAt(We - 3) === 58 && (oe = st);
                  case 8:
                    pt === 111 && (oe = pt);
                }
              break;
            case 58:
              Qe + be + Ze === 0 && (ht = We);
              break;
            case 44:
              be + ot + Qe + Ze === 0 && ((At = 1), (ge += '\r'));
              break;
            case 34:
            case 39:
              be === 0 && (Qe = Qe === ce ? 0 : Qe === 0 ? ce : Qe);
              break;
            case 91:
              Qe + be + ot === 0 && Ze++;
              break;
            case 93:
              Qe + be + ot === 0 && Ze--;
              break;
            case 41:
              Qe + be + Ze === 0 && ot--;
              break;
            case 40:
              if (Qe + be + Ze === 0) {
                if (et === 0)
                  switch (2 * st + 3 * pt) {
                    case 533:
                      break;
                    default:
                      et = 1;
                  }
                ot++;
              }
              break;
            case 64:
              be + ot + Qe + Ze + ht + Be === 0 && (Be = 1);
              break;
            case 42:
            case 47:
              if (!(0 < Qe + Ze + ot))
                switch (be) {
                  case 0:
                    switch (2 * ce + 3 * Re.charCodeAt(We + 1)) {
                      case 235:
                        be = 47;
                        break;
                      case 220:
                        ((A = We), (be = 42));
                    }
                    break;
                  case 42:
                    ce === 47 &&
                      st === 42 &&
                      A + 2 !== We &&
                      (Re.charCodeAt(A + 2) === 33 &&
                        (se += Re.substring(A, We + 1)),
                      (ge = ''),
                      (be = 0));
                }
          }
          be === 0 && (te += ge);
      }
      ((pt = st), (st = ce), We++);
    }
    if (((A = se.length), 0 < A)) {
      if (
        ((At = Ce),
        0 < me &&
          ((tt = v(2, se, At, we, X, I, A, Ve, Q, Ve)),
          tt !== void 0 && (se = tt).length === 0))
      )
        return je + se + Me;
      if (((se = At.join(',') + '{' + se + '}'), fe * oe !== 0)) {
        switch ((fe !== 2 || d(se, 2) || (oe = 0), oe)) {
          case 111:
            se = se.replace(k, ':-moz-$1') + se;
            break;
          case 112:
            se =
              se.replace(M, '::-webkit-input-$1') +
              se.replace(M, '::-moz-$1') +
              se.replace(M, ':-ms-input-$1') +
              se;
        }
        oe = 0;
      }
    }
    return je + se + Me;
  }
  function o(we, Ce, Re) {
    var Ve = Ce.trim().split(L);
    Ce = Ve;
    var Q = Ve.length,
      Ze = we.length;
    switch (Ze) {
      case 0:
      case 1:
        var be = 0;
        for (we = Ze === 0 ? '' : we[0] + ' '; be < Q; ++be)
          Ce[be] = s(we, Ce[be], Re).trim();
        break;
      default:
        var ot = (be = 0);
        for (Ce = []; be < Q; ++be)
          for (var Qe = 0; Qe < Ze; ++Qe)
            Ce[ot++] = s(we[Qe] + ' ', Ve[be], Re).trim();
    }
    return Ce;
  }
  function s(we, Ce, Re) {
    var Ve = Ce.charCodeAt(0);
    switch ((33 > Ve && (Ve = (Ce = Ce.trim()).charCodeAt(0)), Ve)) {
      case 38:
        return Ce.replace(O, '$1' + we.trim());
      case 58:
        return we.trim() + Ce.replace(O, '$1' + we.trim());
      default:
        if (0 < 1 * Re && 0 < Ce.indexOf('\f'))
          return Ce.replace(
            O,
            (we.charCodeAt(0) === 58 ? '' : '$1') + we.trim()
          );
    }
    return we + Ce;
  }
  function u(we, Ce, Re, Ve) {
    var Q = we + ';',
      Ze = 2 * Ce + 3 * Re + 4 * Ve;
    if (Ze === 944) {
      we = Q.indexOf(':', 9) + 1;
      var be = Q.substring(we, Q.length - 1).trim();
      return (
        (be = Q.substring(0, we).trim() + be + ';'),
        fe === 1 || (fe === 2 && d(be, 1)) ? '-webkit-' + be + be : be
      );
    }
    if (fe === 0 || (fe === 2 && !d(Q, 1))) return Q;
    switch (Ze) {
      case 1015:
        return Q.charCodeAt(10) === 97 ? '-webkit-' + Q + Q : Q;
      case 951:
        return Q.charCodeAt(3) === 116 ? '-webkit-' + Q + Q : Q;
      case 963:
        return Q.charCodeAt(5) === 110 ? '-webkit-' + Q + Q : Q;
      case 1009:
        if (Q.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return '-webkit-' + Q + Q;
      case 978:
        return '-webkit-' + Q + '-moz-' + Q + Q;
      case 1019:
      case 983:
        return '-webkit-' + Q + '-moz-' + Q + '-ms-' + Q + Q;
      case 883:
        if (Q.charCodeAt(8) === 45) return '-webkit-' + Q + Q;
        if (0 < Q.indexOf('image-set(', 11))
          return Q.replace(ie, '$1-webkit-$2') + Q;
        break;
      case 932:
        if (Q.charCodeAt(4) === 45)
          switch (Q.charCodeAt(5)) {
            case 103:
              return (
                '-webkit-box-' +
                Q.replace('-grow', '') +
                '-webkit-' +
                Q +
                '-ms-' +
                Q.replace('grow', 'positive') +
                Q
              );
            case 115:
              return (
                '-webkit-' + Q + '-ms-' + Q.replace('shrink', 'negative') + Q
              );
            case 98:
              return (
                '-webkit-' +
                Q +
                '-ms-' +
                Q.replace('basis', 'preferred-size') +
                Q
              );
          }
        return '-webkit-' + Q + '-ms-' + Q + Q;
      case 964:
        return '-webkit-' + Q + '-ms-flex-' + Q + Q;
      case 1023:
        if (Q.charCodeAt(8) !== 99) break;
        return (
          (be = Q.substring(Q.indexOf(':', 15))
            .replace('flex-', '')
            .replace('space-between', 'justify')),
          '-webkit-box-pack' + be + '-webkit-' + Q + '-ms-flex-pack' + be + Q
        );
      case 1005:
        return D.test(Q)
          ? Q.replace(R, ':-webkit-') + Q.replace(R, ':-moz-') + Q
          : Q;
      case 1e3:
        switch (
          ((be = Q.substring(13).trim()),
          (Ce = be.indexOf('-') + 1),
          be.charCodeAt(0) + be.charCodeAt(Ce))
        ) {
          case 226:
            be = Q.replace(z, 'tb');
            break;
          case 232:
            be = Q.replace(z, 'tb-rl');
            break;
          case 220:
            be = Q.replace(z, 'lr');
            break;
          default:
            return Q;
        }
        return '-webkit-' + Q + '-ms-' + be + Q;
      case 1017:
        if (Q.indexOf('sticky', 9) === -1) break;
      case 975:
        switch (
          ((Ce = (Q = we).length - 10),
          (be = (Q.charCodeAt(Ce) === 33 ? Q.substring(0, Ce) : Q)
            .substring(we.indexOf(':', 7) + 1)
            .trim()),
          (Ze = be.charCodeAt(0) + (be.charCodeAt(7) | 0)))
        ) {
          case 203:
            if (111 > be.charCodeAt(8)) break;
          case 115:
            Q = Q.replace(be, '-webkit-' + be) + ';' + Q;
            break;
          case 207:
          case 102:
            Q =
              Q.replace(be, '-webkit-' + (102 < Ze ? 'inline-' : '') + 'box') +
              ';' +
              Q.replace(be, '-webkit-' + be) +
              ';' +
              Q.replace(be, '-ms-' + be + 'box') +
              ';' +
              Q;
        }
        return Q + ';';
      case 938:
        if (Q.charCodeAt(5) === 45)
          switch (Q.charCodeAt(6)) {
            case 105:
              return (
                (be = Q.replace('-items', '')),
                '-webkit-' + Q + '-webkit-box-' + be + '-ms-flex-' + be + Q
              );
            case 115:
              return '-webkit-' + Q + '-ms-flex-item-' + Q.replace(q, '') + Q;
            default:
              return (
                '-webkit-' +
                Q +
                '-ms-flex-line-pack' +
                Q.replace('align-content', '').replace(q, '') +
                Q
              );
          }
        break;
      case 973:
      case 989:
        if (Q.charCodeAt(3) !== 45 || Q.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (W.test(we) === !0)
          return (be = we.substring(we.indexOf(':') + 1)).charCodeAt(0) === 115
            ? u(we.replace('stretch', 'fill-available'), Ce, Re, Ve).replace(
                ':fill-available',
                ':stretch'
              )
            : Q.replace(be, '-webkit-' + be) +
                Q.replace(be, '-moz-' + be.replace('fill-', '')) +
                Q;
        break;
      case 962:
        if (
          ((Q =
            '-webkit-' + Q + (Q.charCodeAt(5) === 102 ? '-ms-' + Q : '') + Q),
          Re + Ve === 211 &&
            Q.charCodeAt(13) === 105 &&
            0 < Q.indexOf('transform', 10))
        )
          return (
            Q.substring(0, Q.indexOf(';', 27) + 1).replace(_, '$1-webkit-$2') +
            Q
          );
    }
    return Q;
  }
  function d(we, Ce) {
    var Re = we.indexOf(Ce === 1 ? ':' : '{'),
      Ve = we.substring(0, Ce !== 3 ? Re : 10);
    return (
      (Re = we.substring(Re + 1, we.length - 1)),
      _e(Ce !== 2 ? Ve : Ve.replace(Z, '$1'), Re, Ce)
    );
  }
  function f(we, Ce) {
    var Re = u(Ce, Ce.charCodeAt(0), Ce.charCodeAt(1), Ce.charCodeAt(2));
    return Re !== Ce + ';'
      ? Re.replace(B, ' or ($1)').substring(4)
      : '(' + Ce + ')';
  }
  function v(we, Ce, Re, Ve, Q, Ze, be, ot, Qe, et) {
    for (var ce = 0, st = Ce, pt; ce < me; ++ce)
      switch ((pt = de[ce].call(b, we, st, Re, Ve, Q, Ze, be, ot, Qe, et))) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          st = pt;
      }
    if (st !== Ce) return st;
  }
  function m(we) {
    switch (we) {
      case void 0:
      case null:
        me = de.length = 0;
        break;
      default:
        if (typeof we == 'function') de[me++] = we;
        else if (typeof we == 'object')
          for (var Ce = 0, Re = we.length; Ce < Re; ++Ce) m(we[Ce]);
        else Ge = !!we | 0;
    }
    return m;
  }
  function y(we) {
    return (
      (we = we.prefix),
      we !== void 0 &&
        ((_e = null),
        we
          ? typeof we != 'function'
            ? (fe = 1)
            : ((fe = 2), (_e = we))
          : (fe = 0)),
      y
    );
  }
  function b(we, Ce) {
    var Re = we;
    if (
      (33 > Re.charCodeAt(0) && (Re = Re.trim()),
      (Nt = Re),
      (Re = [Nt]),
      0 < me)
    ) {
      var Ve = v(-1, Ce, Re, Re, X, I, 0, 0, 0, 0);
      Ve !== void 0 && typeof Ve == 'string' && (Ce = Ve);
    }
    var Q = a(ue, Re, Ce, 0, 0);
    return (
      0 < me &&
        ((Ve = v(-2, Q, Re, Re, X, I, Q.length, 0, 0, 0)),
        Ve !== void 0 && (Q = Ve)),
      (Nt = ''),
      (oe = 0),
      (I = X = 1),
      Q
    );
  }
  var T = /^\0+/g,
    w = /[\0\r\f]/g,
    R = /: */g,
    D = /zoo|gra/,
    _ = /([,: ])(transform)/g,
    L = /,\r+?/g,
    O = /([\t\r\n ])*\f?&/g,
    C = /@(k\w+)\s*(\S*)\s*/,
    M = /::(place)/g,
    k = /:(read-only)/g,
    z = /[svh]\w+-[tblr]{2}/,
    Y = /\(\s*(.*)\s*\)/g,
    B = /([\s\S]*?);/g,
    q = /-self|flex-/g,
    Z = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
    W = /stretch|:\s*\w+\-(?:conte|avail)/,
    ie = /([^-])(image-set\()/,
    I = 1,
    X = 1,
    oe = 0,
    fe = 1,
    ue = [],
    de = [],
    me = 0,
    _e = null,
    Ge = 0,
    Nt = '';
  return ((b.use = m), (b.set = y), r !== void 0 && y(r), b);
}
var Jk = {
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
function Zk(r) {
  var a = Object.create(null);
  return function (o) {
    return (a[o] === void 0 && (a[o] = r(o)), a[o]);
  };
}
var eN =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  vE = Zk(function (r) {
    return (
      eN.test(r) ||
      (r.charCodeAt(0) === 111 &&
        r.charCodeAt(1) === 110 &&
        r.charCodeAt(2) < 91)
    );
  }),
  bw = { exports: {} },
  It = {};
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
    u = r ? Symbol.for('react.strict_mode') : 60108,
    d = r ? Symbol.for('react.profiler') : 60114,
    f = r ? Symbol.for('react.provider') : 60109,
    v = r ? Symbol.for('react.context') : 60110,
    m = r ? Symbol.for('react.async_mode') : 60111,
    y = r ? Symbol.for('react.concurrent_mode') : 60111,
    b = r ? Symbol.for('react.forward_ref') : 60112,
    T = r ? Symbol.for('react.suspense') : 60113,
    w = r ? Symbol.for('react.suspense_list') : 60120,
    R = r ? Symbol.for('react.memo') : 60115,
    D = r ? Symbol.for('react.lazy') : 60116,
    _ = r ? Symbol.for('react.block') : 60121,
    L = r ? Symbol.for('react.fundamental') : 60117,
    O = r ? Symbol.for('react.responder') : 60118,
    C = r ? Symbol.for('react.scope') : 60119;
  function M(ce) {
    return (
      typeof ce == 'string' ||
      typeof ce == 'function' ||
      ce === s ||
      ce === y ||
      ce === d ||
      ce === u ||
      ce === T ||
      ce === w ||
      (typeof ce == 'object' &&
        ce !== null &&
        (ce.$$typeof === D ||
          ce.$$typeof === R ||
          ce.$$typeof === f ||
          ce.$$typeof === v ||
          ce.$$typeof === b ||
          ce.$$typeof === L ||
          ce.$$typeof === O ||
          ce.$$typeof === C ||
          ce.$$typeof === _))
    );
  }
  function k(ce) {
    if (typeof ce == 'object' && ce !== null) {
      var st = ce.$$typeof;
      switch (st) {
        case a:
          var pt = ce.type;
          switch (pt) {
            case m:
            case y:
            case s:
            case d:
            case u:
            case T:
              return pt;
            default:
              var Be = pt && pt.$$typeof;
              switch (Be) {
                case v:
                case b:
                case D:
                case R:
                case f:
                  return Be;
                default:
                  return st;
              }
          }
        case o:
          return st;
      }
    }
  }
  var z = m,
    Y = y,
    B = v,
    q = f,
    Z = a,
    W = b,
    ie = s,
    I = D,
    X = R,
    oe = o,
    fe = d,
    ue = u,
    de = T,
    me = !1;
  function _e(ce) {
    return (
      me ||
        ((me = !0),
        console.warn(
          'The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.'
        )),
      Ge(ce) || k(ce) === m
    );
  }
  function Ge(ce) {
    return k(ce) === y;
  }
  function Nt(ce) {
    return k(ce) === v;
  }
  function we(ce) {
    return k(ce) === f;
  }
  function Ce(ce) {
    return typeof ce == 'object' && ce !== null && ce.$$typeof === a;
  }
  function Re(ce) {
    return k(ce) === b;
  }
  function Ve(ce) {
    return k(ce) === s;
  }
  function Q(ce) {
    return k(ce) === D;
  }
  function Ze(ce) {
    return k(ce) === R;
  }
  function be(ce) {
    return k(ce) === o;
  }
  function ot(ce) {
    return k(ce) === d;
  }
  function Qe(ce) {
    return k(ce) === u;
  }
  function et(ce) {
    return k(ce) === T;
  }
  ((It.AsyncMode = z),
    (It.ConcurrentMode = Y),
    (It.ContextConsumer = B),
    (It.ContextProvider = q),
    (It.Element = Z),
    (It.ForwardRef = W),
    (It.Fragment = ie),
    (It.Lazy = I),
    (It.Memo = X),
    (It.Portal = oe),
    (It.Profiler = fe),
    (It.StrictMode = ue),
    (It.Suspense = de),
    (It.isAsyncMode = _e),
    (It.isConcurrentMode = Ge),
    (It.isContextConsumer = Nt),
    (It.isContextProvider = we),
    (It.isElement = Ce),
    (It.isForwardRef = Re),
    (It.isFragment = Ve),
    (It.isLazy = Q),
    (It.isMemo = Ze),
    (It.isPortal = be),
    (It.isProfiler = ot),
    (It.isStrictMode = Qe),
    (It.isSuspense = et),
    (It.isValidElementType = M),
    (It.typeOf = k));
})();
bw.exports = It;
var tN = bw.exports,
  zy = tN,
  nN = {
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
  rN = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  aN = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  Sw = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Fy = {};
Fy[zy.ForwardRef] = aN;
Fy[zy.Memo] = Sw;
function hE(r) {
  return zy.isMemo(r) ? Sw : Fy[r.$$typeof] || nN;
}
var iN = Object.defineProperty,
  oN = Object.getOwnPropertyNames,
  mE = Object.getOwnPropertySymbols,
  sN = Object.getOwnPropertyDescriptor,
  lN = Object.getPrototypeOf,
  yE = Object.prototype;
function Tw(r, a, o) {
  if (typeof a != 'string') {
    if (yE) {
      var s = lN(a);
      s && s !== yE && Tw(r, s, o);
    }
    var u = oN(a);
    mE && (u = u.concat(mE(a)));
    for (var d = hE(r), f = hE(a), v = 0; v < u.length; ++v) {
      var m = u[v];
      if (!rN[m] && !(o && o[m]) && !(f && f[m]) && !(d && d[m])) {
        var y = sN(a, m);
        try {
          iN(r, m, y);
        } catch {}
      }
    }
  }
  return r;
}
var uN = Tw;
const cN = JE(uN);
function ai() {
  return (ai =
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
var gE = function (r, a) {
    for (var o = [r[0]], s = 0, u = a.length; s < u; s += 1)
      o.push(a[s], r[s + 1]);
    return o;
  },
  my = function (r) {
    return (
      r !== null &&
      typeof r == 'object' &&
      (r.toString ? r.toString() : Object.prototype.toString.call(r)) ===
        '[object Object]' &&
      !Py.typeOf(r)
    );
  },
  Nd = Object.freeze([]),
  Yi = Object.freeze({});
function Pd(r) {
  return typeof r == 'function';
}
function yy(r) {
  return (typeof r == 'string' && r) || r.displayName || r.name || 'Component';
}
function Ew(r) {
  return r && typeof r.styledComponentId == 'string';
}
var Is =
    (typeof process < 'u' &&
      process.env !== void 0 &&
      ({}.REACT_APP_SC_ATTR || {}.SC_ATTR)) ||
    'data-styled',
  Uy = typeof window < 'u' && 'HTMLElement' in window,
  fN = !!(typeof SC_DISABLE_SPEEDY == 'boolean'
    ? SC_DISABLE_SPEEDY
    : typeof process < 'u' &&
      process.env !== void 0 &&
      ({}.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      {}.REACT_APP_SC_DISABLE_SPEEDY !== ''
        ? {}.REACT_APP_SC_DISABLE_SPEEDY !== 'false' &&
          {}.REACT_APP_SC_DISABLE_SPEEDY
        : !({}.SC_DISABLE_SPEEDY !== void 0 && {}.SC_DISABLE_SPEEDY !== '') ||
          ({}.SC_DISABLE_SPEEDY !== 'false' && {}.SC_DISABLE_SPEEDY))),
  dN = {
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
function pN() {
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
    a.forEach(function (u) {
      r = r.replace(/%[a-z]/, u);
    }),
    r
  );
}
function js(r) {
  for (
    var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), s = 1;
    s < a;
    s++
  )
    o[s - 1] = arguments[s];
  throw new Error(pN.apply(void 0, [dN[r]].concat(o)).trim());
}
var vN = (function () {
    function r(o) {
      ((this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = o));
    }
    var a = r.prototype;
    return (
      (a.indexOfGroup = function (o) {
        for (var s = 0, u = 0; u < o; u++) s += this.groupSizes[u];
        return s;
      }),
      (a.insertRules = function (o, s) {
        if (o >= this.groupSizes.length) {
          for (var u = this.groupSizes, d = u.length, f = d; o >= f; )
            (f <<= 1) < 0 && js(16, '' + o);
          ((this.groupSizes = new Uint32Array(f)),
            this.groupSizes.set(u),
            (this.length = f));
          for (var v = d; v < f; v++) this.groupSizes[v] = 0;
        }
        for (var m = this.indexOfGroup(o + 1), y = 0, b = s.length; y < b; y++)
          this.tag.insertRule(m, s[y]) && (this.groupSizes[o]++, m++);
      }),
      (a.clearGroup = function (o) {
        if (o < this.length) {
          var s = this.groupSizes[o],
            u = this.indexOfGroup(o),
            d = u + s;
          this.groupSizes[o] = 0;
          for (var f = u; f < d; f++) this.tag.deleteRule(u);
        }
      }),
      (a.getGroup = function (o) {
        var s = '';
        if (o >= this.length || this.groupSizes[o] === 0) return s;
        for (
          var u = this.groupSizes[o],
            d = this.indexOfGroup(o),
            f = d + u,
            v = d;
          v < f;
          v++
        )
          s +=
            this.tag.getRule(v) +
            `/*!sc*/
`;
        return s;
      }),
      r
    );
  })(),
  Dd = new Map(),
  zd = new Map(),
  Uu = 1,
  md = function (r) {
    if (Dd.has(r)) return Dd.get(r);
    for (; zd.has(Uu); ) Uu++;
    var a = Uu++;
    return (
      ((0 | a) < 0 || a > 1 << 30) && js(16, '' + a),
      Dd.set(r, a),
      zd.set(a, r),
      a
    );
  },
  hN = function (r) {
    return zd.get(r);
  },
  mN = function (r, a) {
    (a >= Uu && (Uu = a + 1), Dd.set(r, a), zd.set(a, r));
  },
  yN = 'style[' + Is + '][data-styled-version="5.3.11"]',
  gN = new RegExp('^' + Is + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  bN = function (r, a, o) {
    for (var s, u = o.split(','), d = 0, f = u.length; d < f; d++)
      (s = u[d]) && r.registerName(a, s);
  },
  SN = function (r, a) {
    for (
      var o = (a.textContent || '').split(`/*!sc*/
`),
        s = [],
        u = 0,
        d = o.length;
      u < d;
      u++
    ) {
      var f = o[u].trim();
      if (f) {
        var v = f.match(gN);
        if (v) {
          var m = 0 | parseInt(v[1], 10),
            y = v[2];
          (m !== 0 && (mN(y, m), bN(r, y, v[3]), r.getTag().insertRules(m, s)),
            (s.length = 0));
        } else s.push(f);
      }
    }
  },
  TN = function () {
    return typeof __webpack_nonce__ < 'u' ? __webpack_nonce__ : null;
  },
  ww = function (r) {
    var a = document.head,
      o = r || a,
      s = document.createElement('style'),
      u = (function (v) {
        for (var m = v.childNodes, y = m.length; y >= 0; y--) {
          var b = m[y];
          if (b && b.nodeType === 1 && b.hasAttribute(Is)) return b;
        }
      })(o),
      d = u !== void 0 ? u.nextSibling : null;
    (s.setAttribute(Is, 'active'),
      s.setAttribute('data-styled-version', '5.3.11'));
    var f = TN();
    return (f && s.setAttribute('nonce', f), o.insertBefore(s, d), s);
  },
  EN = (function () {
    function r(o) {
      var s = (this.element = ww(o));
      (s.appendChild(document.createTextNode('')),
        (this.sheet = (function (u) {
          if (u.sheet) return u.sheet;
          for (var d = document.styleSheets, f = 0, v = d.length; f < v; f++) {
            var m = d[f];
            if (m.ownerNode === u) return m;
          }
          js(17);
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
  wN = (function () {
    function r(o) {
      var s = (this.element = ww(o));
      ((this.nodes = s.childNodes), (this.length = 0));
    }
    var a = r.prototype;
    return (
      (a.insertRule = function (o, s) {
        if (o <= this.length && o >= 0) {
          var u = document.createTextNode(s),
            d = this.nodes[o];
          return (this.element.insertBefore(u, d || null), this.length++, !0);
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
  CN = (function () {
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
  bE = Uy,
  xN = { isServer: !Uy, useCSSOMInjection: !fN },
  Cw = (function () {
    function r(o, s, u) {
      (o === void 0 && (o = Yi),
        s === void 0 && (s = {}),
        (this.options = ai({}, xN, {}, o)),
        (this.gs = s),
        (this.names = new Map(u)),
        (this.server = !!o.isServer),
        !this.server &&
          Uy &&
          bE &&
          ((bE = !1),
          (function (d) {
            for (
              var f = document.querySelectorAll(yN), v = 0, m = f.length;
              v < m;
              v++
            ) {
              var y = f[v];
              y &&
                y.getAttribute(Is) !== 'active' &&
                (SN(d, y), y.parentNode && y.parentNode.removeChild(y));
            }
          })(this)));
    }
    r.registerId = function (o) {
      return md(o);
    };
    var a = r.prototype;
    return (
      (a.reconstructWithOptions = function (o, s) {
        return (
          s === void 0 && (s = !0),
          new r(
            ai({}, this.options, {}, o),
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
            ((u = (s = this.options).isServer),
            (d = s.useCSSOMInjection),
            (f = s.target),
            (o = u ? new CN(f) : d ? new EN(f) : new wN(f)),
            new vN(o)))
        );
        var o, s, u, d, f;
      }),
      (a.hasNameForId = function (o, s) {
        return this.names.has(o) && this.names.get(o).has(s);
      }),
      (a.registerName = function (o, s) {
        if ((md(o), this.names.has(o))) this.names.get(o).add(s);
        else {
          var u = new Set();
          (u.add(s), this.names.set(o, u));
        }
      }),
      (a.insertRules = function (o, s, u) {
        (this.registerName(o, s), this.getTag().insertRules(md(o), u));
      }),
      (a.clearNames = function (o) {
        this.names.has(o) && this.names.get(o).clear();
      }),
      (a.clearRules = function (o) {
        (this.getTag().clearGroup(md(o)), this.clearNames(o));
      }),
      (a.clearTag = function () {
        this.tag = void 0;
      }),
      (a.toString = function () {
        return (function (o) {
          for (var s = o.getTag(), u = s.length, d = '', f = 0; f < u; f++) {
            var v = hN(f);
            if (v !== void 0) {
              var m = o.names.get(v),
                y = s.getGroup(f);
              if (m && y && m.size) {
                var b = Is + '.g' + f + '[id="' + v + '"]',
                  T = '';
                (m !== void 0 &&
                  m.forEach(function (w) {
                    w.length > 0 && (T += w + ',');
                  }),
                  (d +=
                    '' +
                    y +
                    b +
                    '{content:"' +
                    T +
                    `"}/*!sc*/
`));
              }
            }
          }
          return d;
        })(this);
      }),
      r
    );
  })(),
  _N = /(a)(d)/gi,
  SE = function (r) {
    return String.fromCharCode(r + (r > 25 ? 39 : 97));
  };
function gy(r) {
  var a,
    o = '';
  for (a = Math.abs(r); a > 52; a = (a / 52) | 0) o = SE(a % 52) + o;
  return (SE(a % 52) + o).replace(_N, '$1-$2');
}
var Ao = function (r, a) {
    for (var o = a.length; o; ) r = (33 * r) ^ a.charCodeAt(--o);
    return r;
  },
  xw = function (r) {
    return Ao(5381, r);
  },
  RN = xw('5.3.11'),
  DN = (function () {
    function r(a, o, s) {
      ((this.rules = a),
        (this.staticRulesId = ''),
        (this.isStatic = !1),
        (this.componentId = o),
        (this.baseHash = Ao(RN, o)),
        (this.baseStyle = s),
        Cw.registerId(o));
    }
    return (
      (r.prototype.generateAndInjectStyles = function (a, o, s) {
        var u = this.componentId,
          d = [];
        if (
          (this.baseStyle &&
            d.push(this.baseStyle.generateAndInjectStyles(a, o, s)),
          this.isStatic && !s.hash)
        )
          if (this.staticRulesId && o.hasNameForId(u, this.staticRulesId))
            d.push(this.staticRulesId);
          else {
            var f = Vs(this.rules, a, o, s).join(''),
              v = gy(Ao(this.baseHash, f) >>> 0);
            if (!o.hasNameForId(u, v)) {
              var m = s(f, '.' + v, void 0, u);
              o.insertRules(u, v, m);
            }
            (d.push(v), (this.staticRulesId = v));
          }
        else {
          for (
            var y = this.rules.length,
              b = Ao(this.baseHash, s.hash),
              T = '',
              w = 0;
            w < y;
            w++
          ) {
            var R = this.rules[w];
            if (typeof R == 'string') ((T += R), (b = Ao(b, R + w)));
            else if (R) {
              var D = Vs(R, a, o, s),
                _ = Array.isArray(D) ? D.join('') : D;
              ((b = Ao(b, _ + w)), (T += _));
            }
          }
          if (T) {
            var L = gy(b >>> 0);
            if (!o.hasNameForId(u, L)) {
              var O = s(T, '.' + L, void 0, u);
              o.insertRules(u, L, O);
            }
            d.push(L);
          }
        }
        return d.join(' ');
      }),
      r
    );
  })(),
  ON = /^\s*\/\/.*$/gm,
  AN = [':', '[', '.', '#'];
function MN(r) {
  var a,
    o,
    s,
    u,
    d = r === void 0 ? Yi : r,
    f = d.options,
    v = f === void 0 ? Yi : f,
    m = d.plugins,
    y = m === void 0 ? Nd : m,
    b = new Kk(v),
    T = [],
    w = (function (_) {
      function L(O) {
        if (O)
          try {
            _(O + '}');
          } catch {}
      }
      return function (O, C, M, k, z, Y, B, q, Z, W) {
        switch (O) {
          case 1:
            if (Z === 0 && C.charCodeAt(0) === 64) return (_(C + ';'), '');
            break;
          case 2:
            if (q === 0) return C + '/*|*/';
            break;
          case 3:
            switch (q) {
              case 102:
              case 112:
                return (_(M[0] + C), '');
              default:
                return C + (W === 0 ? '/*|*/' : '');
            }
          case -2:
            C.split('/*|*/}').forEach(L);
        }
      };
    })(function (_) {
      T.push(_);
    }),
    R = function (_, L, O) {
      return (L === 0 && AN.indexOf(O[o.length]) !== -1) || O.match(u)
        ? _
        : '.' + a;
    };
  function D(_, L, O, C) {
    C === void 0 && (C = '&');
    var M = _.replace(ON, ''),
      k = L && O ? O + ' ' + L + ' { ' + M + ' }' : M;
    return (
      (a = C),
      (o = L),
      (s = new RegExp('\\' + o + '\\b', 'g')),
      (u = new RegExp('(\\' + o + '\\b){2,}')),
      b(O || !L ? '' : L, k)
    );
  }
  return (
    b.use(
      [].concat(y, [
        function (_, L, O) {
          _ === 2 &&
            O.length &&
            O[0].lastIndexOf(o) > 0 &&
            (O[0] = O[0].replace(s, R));
        },
        w,
        function (_) {
          if (_ === -2) {
            var L = T;
            return ((T = []), L);
          }
        },
      ])
    ),
    (D.hash = y.length
      ? y
          .reduce(function (_, L) {
            return (L.name || js(15), Ao(_, L.name));
          }, 5381)
          .toString()
      : ''),
    D
  );
}
var _w = Ue.createContext();
_w.Consumer;
var Rw = Ue.createContext(),
  LN = (Rw.Consumer, new Cw()),
  by = MN();
function kN() {
  return $.useContext(_w) || LN;
}
function NN() {
  return $.useContext(Rw) || by;
}
var PN = (function () {
    function r(a, o) {
      var s = this;
      ((this.inject = function (u, d) {
        d === void 0 && (d = by);
        var f = s.name + d.hash;
        u.hasNameForId(s.id, f) ||
          u.insertRules(s.id, f, d(s.rules, f, '@keyframes'));
      }),
        (this.toString = function () {
          return js(12, String(s.name));
        }),
        (this.name = a),
        (this.id = 'sc-keyframes-' + a),
        (this.rules = o));
    }
    return (
      (r.prototype.getName = function (a) {
        return (a === void 0 && (a = by), this.name + a.hash);
      }),
      r
    );
  })(),
  zN = /([A-Z])/,
  FN = /([A-Z])/g,
  UN = /^ms-/,
  IN = function (r) {
    return '-' + r.toLowerCase();
  };
function TE(r) {
  return zN.test(r) ? r.replace(FN, IN).replace(UN, '-ms-') : r;
}
var EE = function (r) {
  return r == null || r === !1 || r === '';
};
function Vs(r, a, o, s) {
  if (Array.isArray(r)) {
    for (var u, d = [], f = 0, v = r.length; f < v; f += 1)
      (u = Vs(r[f], a, o, s)) !== '' &&
        (Array.isArray(u) ? d.push.apply(d, u) : d.push(u));
    return d;
  }
  if (EE(r)) return '';
  if (Ew(r)) return '.' + r.styledComponentId;
  if (Pd(r)) {
    if (
      typeof (y = r) != 'function' ||
      (y.prototype && y.prototype.isReactComponent) ||
      !a
    )
      return r;
    var m = r(a);
    return (
      Py.isElement(m) &&
        console.warn(
          yy(r) +
            ' is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.'
        ),
      Vs(m, a, o, s)
    );
  }
  var y;
  return r instanceof PN
    ? o
      ? (r.inject(o, s), r.getName(s))
      : r
    : my(r)
      ? (function b(T, w) {
          var R,
            D,
            _ = [];
          for (var L in T)
            T.hasOwnProperty(L) &&
              !EE(T[L]) &&
              ((Array.isArray(T[L]) && T[L].isCss) || Pd(T[L])
                ? _.push(TE(L) + ':', T[L], ';')
                : my(T[L])
                  ? _.push.apply(_, b(T[L], L))
                  : _.push(
                      TE(L) +
                        ': ' +
                        ((R = L),
                        (D = T[L]) == null || typeof D == 'boolean' || D === ''
                          ? ''
                          : typeof D != 'number' ||
                              D === 0 ||
                              R in Jk ||
                              R.startsWith('--')
                            ? String(D).trim()
                            : D + 'px') +
                        ';'
                    ));
          return w ? [w + ' {'].concat(_, ['}']) : _;
        })(r)
      : r.toString();
}
var wE = function (r) {
  return (Array.isArray(r) && (r.isCss = !0), r);
};
function VN(r) {
  for (
    var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), s = 1;
    s < a;
    s++
  )
    o[s - 1] = arguments[s];
  return Pd(r) || my(r)
    ? wE(Vs(gE(Nd, [r].concat(o))))
    : o.length === 0 && r.length === 1 && typeof r[0] == 'string'
      ? r
      : wE(Vs(gE(r, o)));
}
var CE = /invalid hook call/i,
  yd = new Set(),
  BN = function (r, a) {
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
        var u = !0;
        ((console.error = function (d) {
          if (CE.test(d)) ((u = !1), yd.delete(o));
          else {
            for (
              var f = arguments.length, v = new Array(f > 1 ? f - 1 : 0), m = 1;
              m < f;
              m++
            )
              v[m - 1] = arguments[m];
            s.apply(void 0, [d].concat(v));
          }
        }),
          $.useRef(),
          u && !yd.has(o) && (console.warn(o), yd.add(o)));
      } catch (d) {
        CE.test(d.message) && yd.delete(o);
      } finally {
        console.error = s;
      }
    }
  },
  HN = function (r, a, o) {
    return (
      o === void 0 && (o = Yi),
      (r.theme !== o.theme && r.theme) || a || o.theme
    );
  },
  jN = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  $N = /(^-|-$)/g;
function ry(r) {
  return r.replace(jN, '-').replace($N, '');
}
var YN = function (r) {
  return gy(xw(r) >>> 0);
};
function gd(r) {
  return typeof r == 'string' && r.charAt(0) === r.charAt(0).toLowerCase();
}
var Sy = function (r) {
    return (
      typeof r == 'function' ||
      (typeof r == 'object' && r !== null && !Array.isArray(r))
    );
  },
  GN = function (r) {
    return r !== '__proto__' && r !== 'constructor' && r !== 'prototype';
  };
function WN(r, a, o) {
  var s = r[o];
  Sy(a) && Sy(s) ? Dw(s, a) : (r[o] = a);
}
function Dw(r) {
  for (
    var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), s = 1;
    s < a;
    s++
  )
    o[s - 1] = arguments[s];
  for (var u = 0, d = o; u < d.length; u++) {
    var f = d[u];
    if (Sy(f)) for (var v in f) GN(v) && WN(r, f[v], v);
  }
  return r;
}
var Ow = Ue.createContext();
Ow.Consumer;
var ay = {};
function Aw(r, a, o) {
  var s = Ew(r),
    u = !gd(r),
    d = a.attrs,
    f = d === void 0 ? Nd : d,
    v = a.componentId,
    m =
      v === void 0
        ? (function (C, M) {
            var k = typeof C != 'string' ? 'sc' : ry(C);
            ay[k] = (ay[k] || 0) + 1;
            var z = k + '-' + YN('5.3.11' + k + ay[k]);
            return M ? M + '-' + z : z;
          })(a.displayName, a.parentComponentId)
        : v,
    y = a.displayName,
    b =
      y === void 0
        ? (function (C) {
            return gd(C) ? 'styled.' + C : 'Styled(' + yy(C) + ')';
          })(r)
        : y,
    T =
      a.displayName && a.componentId
        ? ry(a.displayName) + '-' + a.componentId
        : a.componentId || m,
    w = s && r.attrs ? Array.prototype.concat(r.attrs, f).filter(Boolean) : f,
    R = a.shouldForwardProp;
  s &&
    r.shouldForwardProp &&
    (R = a.shouldForwardProp
      ? function (C, M, k) {
          return r.shouldForwardProp(C, M, k) && a.shouldForwardProp(C, M, k);
        }
      : r.shouldForwardProp);
  var D,
    _ = new DN(o, T, s ? r.componentStyle : void 0),
    L = _.isStatic && f.length === 0,
    O = function (C, M) {
      return (function (k, z, Y, B) {
        var q = k.attrs,
          Z = k.componentStyle,
          W = k.defaultProps,
          ie = k.foldedComponentIds,
          I = k.shouldForwardProp,
          X = k.styledComponentId,
          oe = k.target,
          fe = (function (Ve, Q, Ze) {
            Ve === void 0 && (Ve = Yi);
            var be = ai({}, Q, { theme: Ve }),
              ot = {};
            return (
              Ze.forEach(function (Qe) {
                var et,
                  ce,
                  st,
                  pt = Qe;
                for (et in (Pd(pt) && (pt = pt(be)), pt))
                  be[et] = ot[et] =
                    et === 'className'
                      ? ((ce = ot[et]),
                        (st = pt[et]),
                        ce && st ? ce + ' ' + st : ce || st)
                      : pt[et];
              }),
              [be, ot]
            );
          })(HN(z, $.useContext(Ow), W) || Yi, z, q),
          ue = fe[0],
          de = fe[1],
          me = (function (Ve, Q, Ze, be) {
            var ot = kN(),
              Qe = NN(),
              et = Q
                ? Ve.generateAndInjectStyles(Yi, ot, Qe)
                : Ve.generateAndInjectStyles(Ze, ot, Qe);
            return (!Q && be && be(et), et);
          })(Z, B, ue, k.warnTooManyClasses),
          _e = Y,
          Ge = de.$as || z.$as || de.as || z.as || oe,
          Nt = gd(Ge),
          we = de !== z ? ai({}, z, {}, de) : z,
          Ce = {};
        for (var Re in we)
          Re[0] !== '$' &&
            Re !== 'as' &&
            (Re === 'forwardedAs'
              ? (Ce.as = we[Re])
              : (I ? I(Re, vE, Ge) : !Nt || vE(Re)) && (Ce[Re] = we[Re]));
        return (
          z.style &&
            de.style !== z.style &&
            (Ce.style = ai({}, z.style, {}, de.style)),
          (Ce.className = Array.prototype
            .concat(ie, X, me !== X ? me : null, z.className, de.className)
            .filter(Boolean)
            .join(' ')),
          (Ce.ref = _e),
          $.createElement(Ge, Ce)
        );
      })(D, C, M, L);
    };
  return (
    (O.displayName = b),
    ((D = Ue.forwardRef(O)).attrs = w),
    (D.componentStyle = _),
    (D.displayName = b),
    (D.shouldForwardProp = R),
    (D.foldedComponentIds = s
      ? Array.prototype.concat(r.foldedComponentIds, r.styledComponentId)
      : Nd),
    (D.styledComponentId = T),
    (D.target = s ? r.target : r),
    (D.withComponent = function (C) {
      var M = a.componentId,
        k = (function (Y, B) {
          if (Y == null) return {};
          var q,
            Z,
            W = {},
            ie = Object.keys(Y);
          for (Z = 0; Z < ie.length; Z++)
            ((q = ie[Z]), B.indexOf(q) >= 0 || (W[q] = Y[q]));
          return W;
        })(a, ['componentId']),
        z = M && M + '-' + (gd(C) ? C : ry(yy(C)));
      return Aw(C, ai({}, k, { attrs: w, componentId: z }), o);
    }),
    Object.defineProperty(D, 'defaultProps', {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (C) {
        this._foldedDefaultProps = s ? Dw({}, r.defaultProps, C) : C;
      },
    }),
    BN(b, T),
    (D.warnTooManyClasses = (function (C, M) {
      var k = {},
        z = !1;
      return function (Y) {
        if (!z && ((k[Y] = !0), Object.keys(k).length >= 200)) {
          var B = M ? ' with the id of "' + M + '"' : '';
          (console.warn(
            'Over 200 classes were generated for component ' +
              C +
              B +
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
            (z = !0),
            (k = {}));
        }
      };
    })(b, T)),
    Object.defineProperty(D, 'toString', {
      value: function () {
        return '.' + D.styledComponentId;
      },
    }),
    u &&
      cN(D, r, {
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
var Ty = function (r) {
  return (function a(o, s, u) {
    if ((u === void 0 && (u = Yi), !Py.isValidElementType(s)))
      return js(1, String(s));
    var d = function () {
      return o(s, u, VN.apply(void 0, arguments));
    };
    return (
      (d.withConfig = function (f) {
        return a(o, s, ai({}, u, {}, f));
      }),
      (d.attrs = function (f) {
        return a(
          o,
          s,
          ai({}, u, {
            attrs: Array.prototype.concat(u.attrs, f).filter(Boolean),
          })
        );
      }),
      d
    );
  })(Aw, r);
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
  Ty[r] = Ty(r);
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
const yt = Ty;
function xE(r) {
  return (
    r !== null &&
    typeof r == 'object' &&
    'constructor' in r &&
    r.constructor === Object
  );
}
function Iy(r, a) {
  (r === void 0 && (r = {}), a === void 0 && (a = {}));
  const o = ['__proto__', 'constructor', 'prototype'];
  Object.keys(a)
    .filter((s) => o.indexOf(s) < 0)
    .forEach((s) => {
      typeof r[s] > 'u'
        ? (r[s] = a[s])
        : xE(a[s]) &&
          xE(r[s]) &&
          Object.keys(a[s]).length > 0 &&
          Iy(r[s], a[s]);
    });
}
const Mw = {
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
function Ir() {
  const r = typeof document < 'u' ? document : {};
  return (Iy(r, Mw), r);
}
const qN = {
  document: Mw,
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
function Jn() {
  const r = typeof window < 'u' ? window : {};
  return (Iy(r, qN), r);
}
function Bi(r) {
  return (
    r === void 0 && (r = ''),
    r
      .trim()
      .split(' ')
      .filter((a) => !!a.trim())
  );
}
function XN(r) {
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
function Vy(r, a) {
  return (a === void 0 && (a = 0), setTimeout(r, a));
}
function Fd() {
  return Date.now();
}
function QN(r) {
  const a = Jn();
  let o;
  return (
    a.getComputedStyle && (o = a.getComputedStyle(r, null)),
    !o && r.currentStyle && (o = r.currentStyle),
    o || (o = r.style),
    o
  );
}
function KN(r, a) {
  a === void 0 && (a = 'x');
  const o = Jn();
  let s, u, d;
  const f = QN(r);
  return (
    o.WebKitCSSMatrix
      ? ((u = f.transform || f.webkitTransform),
        u.split(',').length > 6 &&
          (u = u
            .split(', ')
            .map((v) => v.replace(',', '.'))
            .join(', ')),
        (d = new o.WebKitCSSMatrix(u === 'none' ? '' : u)))
      : ((d =
          f.MozTransform ||
          f.OTransform ||
          f.MsTransform ||
          f.msTransform ||
          f.transform ||
          f
            .getPropertyValue('transform')
            .replace('translate(', 'matrix(1, 0, 0, 1,')),
        (s = d.toString().split(','))),
    a === 'x' &&
      (o.WebKitCSSMatrix
        ? (u = d.m41)
        : s.length === 16
          ? (u = parseFloat(s[12]))
          : (u = parseFloat(s[4]))),
    a === 'y' &&
      (o.WebKitCSSMatrix
        ? (u = d.m42)
        : s.length === 16
          ? (u = parseFloat(s[13]))
          : (u = parseFloat(s[5]))),
    u || 0
  );
}
function bd(r) {
  return (
    typeof r == 'object' &&
    r !== null &&
    r.constructor &&
    Object.prototype.toString.call(r).slice(8, -1) === 'Object'
  );
}
function JN(r) {
  return typeof window < 'u' && typeof window.HTMLElement < 'u'
    ? r instanceof HTMLElement
    : r && (r.nodeType === 1 || r.nodeType === 11);
}
function Or() {
  const r = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    a = ['__proto__', 'constructor', 'prototype'];
  for (let o = 1; o < arguments.length; o += 1) {
    const s = o < 0 || arguments.length <= o ? void 0 : arguments[o];
    if (s != null && !JN(s)) {
      const u = Object.keys(Object(s)).filter((d) => a.indexOf(d) < 0);
      for (let d = 0, f = u.length; d < f; d += 1) {
        const v = u[d],
          m = Object.getOwnPropertyDescriptor(s, v);
        m !== void 0 &&
          m.enumerable &&
          (bd(r[v]) && bd(s[v])
            ? s[v].__swiper__
              ? (r[v] = s[v])
              : Or(r[v], s[v])
            : !bd(r[v]) && bd(s[v])
              ? ((r[v] = {}), s[v].__swiper__ ? (r[v] = s[v]) : Or(r[v], s[v]))
              : (r[v] = s[v]));
      }
    }
  }
  return r;
}
function Sd(r, a, o) {
  r.style.setProperty(a, o);
}
function Lw(r) {
  let { swiper: a, targetPosition: o, side: s } = r;
  const u = Jn(),
    d = -a.translate;
  let f = null,
    v;
  const m = a.params.speed;
  ((a.wrapperEl.style.scrollSnapType = 'none'),
    u.cancelAnimationFrame(a.cssModeFrameID));
  const y = o > d ? 'next' : 'prev',
    b = (w, R) => (y === 'next' && w >= R) || (y === 'prev' && w <= R),
    T = () => {
      ((v = new Date().getTime()), f === null && (f = v));
      const w = Math.max(Math.min((v - f) / m, 1), 0),
        R = 0.5 - Math.cos(w * Math.PI) / 2;
      let D = d + R * (o - d);
      if ((b(D, o) && (D = o), a.wrapperEl.scrollTo({ [s]: D }), b(D, o))) {
        ((a.wrapperEl.style.overflow = 'hidden'),
          (a.wrapperEl.style.scrollSnapType = ''),
          setTimeout(() => {
            ((a.wrapperEl.style.overflow = ''),
              a.wrapperEl.scrollTo({ [s]: D }));
          }),
          u.cancelAnimationFrame(a.cssModeFrameID));
        return;
      }
      a.cssModeFrameID = u.requestAnimationFrame(T);
    };
  T();
}
function Ca(r, a) {
  a === void 0 && (a = '');
  const o = Jn(),
    s = [...r.children];
  return (
    o.HTMLSlotElement &&
      r instanceof HTMLSlotElement &&
      s.push(...r.assignedElements()),
    a ? s.filter((u) => u.matches(a)) : s
  );
}
function ZN(r, a) {
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
function eP(r, a) {
  const o = Jn();
  let s = a.contains(r);
  return (
    !s &&
      o.HTMLSlotElement &&
      a instanceof HTMLSlotElement &&
      ((s = [...a.assignedElements()].includes(r)), s || (s = ZN(r, a))),
    s
  );
}
function Ud(r) {
  try {
    console.warn(r);
    return;
  } catch {}
}
function Gu(r, a) {
  a === void 0 && (a = []);
  const o = document.createElement(r);
  return (o.classList.add(...(Array.isArray(a) ? a : Bi(a))), o);
}
function tP(r) {
  const a = Jn(),
    o = Ir(),
    s = r.getBoundingClientRect(),
    u = o.body,
    d = r.clientTop || u.clientTop || 0,
    f = r.clientLeft || u.clientLeft || 0,
    v = r === a ? a.scrollY : r.scrollTop,
    m = r === a ? a.scrollX : r.scrollLeft;
  return { top: s.top + v - d, left: s.left + m - f };
}
function nP(r, a) {
  const o = [];
  for (; r.previousElementSibling; ) {
    const s = r.previousElementSibling;
    (a ? s.matches(a) && o.push(s) : o.push(s), (r = s));
  }
  return o;
}
function rP(r, a) {
  const o = [];
  for (; r.nextElementSibling; ) {
    const s = r.nextElementSibling;
    (a ? s.matches(a) && o.push(s) : o.push(s), (r = s));
  }
  return o;
}
function $i(r, a) {
  return Jn().getComputedStyle(r, null).getPropertyValue(a);
}
function _E(r) {
  let a = r,
    o;
  if (a) {
    for (o = 0; (a = a.previousSibling) !== null; )
      a.nodeType === 1 && (o += 1);
    return o;
  }
}
function aP(r, a) {
  const o = [];
  let s = r.parentElement;
  for (; s; )
    (a ? s.matches(a) && o.push(s) : o.push(s), (s = s.parentElement));
  return o;
}
function RE(r, a, o) {
  const s = Jn();
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
function iP(r) {
  return (Array.isArray(r) ? r : [r]).filter((a) => !!a);
}
function DE(r, a) {
  (a === void 0 && (a = ''),
    typeof trustedTypes < 'u'
      ? (r.innerHTML = trustedTypes
          .createPolicy('html', { createHTML: (o) => o })
          .createHTML(a))
      : (r.innerHTML = a));
}
let iy;
function oP() {
  const r = Jn(),
    a = Ir();
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
function kw() {
  return (iy || (iy = oP()), iy);
}
let oy;
function sP(r) {
  let { userAgent: a } = r === void 0 ? {} : r;
  const o = kw(),
    s = Jn(),
    u = s.navigator.platform,
    d = a || s.navigator.userAgent,
    f = { ios: !1, android: !1 },
    v = s.screen.width,
    m = s.screen.height,
    y = d.match(/(Android);?[\s\/]+([\d.]+)?/);
  let b = d.match(/(iPad).*OS\s([\d_]+)/);
  const T = d.match(/(iPod)(.*OS\s([\d_]+))?/),
    w = !b && d.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    R = u === 'Win32';
  let D = u === 'MacIntel';
  const _ = [
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
    !b &&
      D &&
      o.touch &&
      _.indexOf(`${v}x${m}`) >= 0 &&
      ((b = d.match(/(Version)\/([\d.]+)/)),
      b || (b = [0, 1, '13_0_0']),
      (D = !1)),
    y && !R && ((f.os = 'android'), (f.android = !0)),
    (b || w || T) && ((f.os = 'ios'), (f.ios = !0)),
    f
  );
}
function Nw(r) {
  return (r === void 0 && (r = {}), oy || (oy = sP(r)), oy);
}
let sy;
function lP() {
  const r = Jn(),
    a = Nw();
  let o = !1;
  function s() {
    const v = r.navigator.userAgent.toLowerCase();
    return (
      v.indexOf('safari') >= 0 &&
      v.indexOf('chrome') < 0 &&
      v.indexOf('android') < 0
    );
  }
  if (s()) {
    const v = String(r.navigator.userAgent);
    if (v.includes('Version/')) {
      const [m, y] = v
        .split('Version/')[1]
        .split(' ')[0]
        .split('.')
        .map((b) => Number(b));
      o = m < 16 || (m === 16 && y < 2);
    }
  }
  const u = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      r.navigator.userAgent
    ),
    d = s(),
    f = d || (u && a.ios);
  return {
    isSafari: o || d,
    needPerspectiveFix: o,
    need3dFix: f,
    isWebView: u,
  };
}
function Pw() {
  return (sy || (sy = lP()), sy);
}
function uP(r) {
  let { swiper: a, on: o, emit: s } = r;
  const u = Jn();
  let d = null,
    f = null;
  const v = () => {
      !a || a.destroyed || !a.initialized || (s('beforeResize'), s('resize'));
    },
    m = () => {
      !a ||
        a.destroyed ||
        !a.initialized ||
        ((d = new ResizeObserver((T) => {
          f = u.requestAnimationFrame(() => {
            const { width: w, height: R } = a;
            let D = w,
              _ = R;
            (T.forEach((L) => {
              let { contentBoxSize: O, contentRect: C, target: M } = L;
              (M && M !== a.el) ||
                ((D = C ? C.width : (O[0] || O).inlineSize),
                (_ = C ? C.height : (O[0] || O).blockSize));
            }),
              (D !== w || _ !== R) && v());
          });
        })),
        d.observe(a.el));
    },
    y = () => {
      (f && u.cancelAnimationFrame(f),
        d && d.unobserve && a.el && (d.unobserve(a.el), (d = null)));
    },
    b = () => {
      !a || a.destroyed || !a.initialized || s('orientationchange');
    };
  (o('init', () => {
    if (a.params.resizeObserver && typeof u.ResizeObserver < 'u') {
      m();
      return;
    }
    (u.addEventListener('resize', v),
      u.addEventListener('orientationchange', b));
  }),
    o('destroy', () => {
      (y(),
        u.removeEventListener('resize', v),
        u.removeEventListener('orientationchange', b));
    }));
}
function cP(r) {
  let { swiper: a, extendParams: o, on: s, emit: u } = r;
  const d = [],
    f = Jn(),
    v = function (b, T) {
      T === void 0 && (T = {});
      const w = f.MutationObserver || f.WebkitMutationObserver,
        R = new w((D) => {
          if (a.__preventObserver__) return;
          if (D.length === 1) {
            u('observerUpdate', D[0]);
            return;
          }
          const _ = function () {
            u('observerUpdate', D[0]);
          };
          f.requestAnimationFrame
            ? f.requestAnimationFrame(_)
            : f.setTimeout(_, 0);
        });
      (R.observe(b, {
        attributes: typeof T.attributes > 'u' ? !0 : T.attributes,
        childList: a.isElement || (typeof T.childList > 'u' ? !0 : T).childList,
        characterData: typeof T.characterData > 'u' ? !0 : T.characterData,
      }),
        d.push(R));
    },
    m = () => {
      if (a.params.observer) {
        if (a.params.observeParents) {
          const b = aP(a.hostEl);
          for (let T = 0; T < b.length; T += 1) v(b[T]);
        }
        (v(a.hostEl, { childList: a.params.observeSlideChildren }),
          v(a.wrapperEl, { attributes: !1 }));
      }
    },
    y = () => {
      (d.forEach((b) => {
        b.disconnect();
      }),
        d.splice(0, d.length));
    };
  (o({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    s('init', m),
    s('destroy', y));
}
var fP = {
  on(r, a, o) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof a != 'function') return s;
    const u = o ? 'unshift' : 'push';
    return (
      r.split(' ').forEach((d) => {
        (s.eventsListeners[d] || (s.eventsListeners[d] = []),
          s.eventsListeners[d][u](a));
      }),
      s
    );
  },
  once(r, a, o) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof a != 'function') return s;
    function u() {
      (s.off(r, u), u.__emitterProxy && delete u.__emitterProxy);
      for (var d = arguments.length, f = new Array(d), v = 0; v < d; v++)
        f[v] = arguments[v];
      a.apply(s, f);
    }
    return ((u.__emitterProxy = a), s.on(r, u, o));
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
              o.eventsListeners[s].forEach((u, d) => {
                (u === a || (u.__emitterProxy && u.__emitterProxy === a)) &&
                  o.eventsListeners[s].splice(d, 1);
              });
        }),
      o
    );
  },
  emit() {
    const r = this;
    if (!r.eventsListeners || r.destroyed || !r.eventsListeners) return r;
    let a, o, s;
    for (var u = arguments.length, d = new Array(u), f = 0; f < u; f++)
      d[f] = arguments[f];
    return (
      typeof d[0] == 'string' || Array.isArray(d[0])
        ? ((a = d[0]), (o = d.slice(1, d.length)), (s = r))
        : ((a = d[0].events), (o = d[0].data), (s = d[0].context || r)),
      o.unshift(s),
      (Array.isArray(a) ? a : a.split(' ')).forEach((m) => {
        (r.eventsAnyListeners &&
          r.eventsAnyListeners.length &&
          r.eventsAnyListeners.forEach((y) => {
            y.apply(s, [m, ...o]);
          }),
          r.eventsListeners &&
            r.eventsListeners[m] &&
            r.eventsListeners[m].forEach((y) => {
              y.apply(s, o);
            }));
      }),
      r
    );
  },
};
function dP() {
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
        parseInt($i(s, 'padding-left') || 0, 10) -
        parseInt($i(s, 'padding-right') || 0, 10)),
      (o =
        o -
        parseInt($i(s, 'padding-top') || 0, 10) -
        parseInt($i(s, 'padding-bottom') || 0, 10)),
      Number.isNaN(a) && (a = 0),
      Number.isNaN(o) && (o = 0),
      Object.assign(r, {
        width: a,
        height: o,
        size: r.isHorizontal() ? a : o,
      })));
}
function pP() {
  const r = this;
  function a(W, ie) {
    return parseFloat(W.getPropertyValue(r.getDirectionLabel(ie)) || 0);
  }
  const o = r.params,
    { wrapperEl: s, slidesEl: u, size: d, rtlTranslate: f, wrongRTL: v } = r,
    m = r.virtual && o.virtual.enabled,
    y = m ? r.virtual.slides.length : r.slides.length,
    b = Ca(u, `.${r.params.slideClass}, swiper-slide`),
    T = m ? r.virtual.slides.length : b.length;
  let w = [];
  const R = [],
    D = [];
  let _ = o.slidesOffsetBefore;
  typeof _ == 'function' && (_ = o.slidesOffsetBefore.call(r));
  let L = o.slidesOffsetAfter;
  typeof L == 'function' && (L = o.slidesOffsetAfter.call(r));
  const O = r.snapGrid.length,
    C = r.slidesGrid.length;
  let M = o.spaceBetween,
    k = -_,
    z = 0,
    Y = 0;
  if (typeof d > 'u') return;
  (typeof M == 'string' && M.indexOf('%') >= 0
    ? (M = (parseFloat(M.replace('%', '')) / 100) * d)
    : typeof M == 'string' && (M = parseFloat(M)),
    (r.virtualSize = -M),
    b.forEach((W) => {
      (f ? (W.style.marginLeft = '') : (W.style.marginRight = ''),
        (W.style.marginBottom = ''),
        (W.style.marginTop = ''));
    }),
    o.centeredSlides &&
      o.cssMode &&
      (Sd(s, '--swiper-centered-offset-before', ''),
      Sd(s, '--swiper-centered-offset-after', '')));
  const B = o.grid && o.grid.rows > 1 && r.grid;
  B ? r.grid.initSlides(b) : r.grid && r.grid.unsetSlides();
  let q;
  const Z =
    o.slidesPerView === 'auto' &&
    o.breakpoints &&
    Object.keys(o.breakpoints).filter(
      (W) => typeof o.breakpoints[W].slidesPerView < 'u'
    ).length > 0;
  for (let W = 0; W < T; W += 1) {
    q = 0;
    let ie;
    if (
      (b[W] && (ie = b[W]),
      B && r.grid.updateSlide(W, ie, b),
      !(b[W] && $i(ie, 'display') === 'none'))
    ) {
      if (o.slidesPerView === 'auto') {
        Z && (b[W].style[r.getDirectionLabel('width')] = '');
        const I = getComputedStyle(ie),
          X = ie.style.transform,
          oe = ie.style.webkitTransform;
        if (
          (X && (ie.style.transform = 'none'),
          oe && (ie.style.webkitTransform = 'none'),
          o.roundLengths)
        )
          q = r.isHorizontal() ? RE(ie, 'width', !0) : RE(ie, 'height', !0);
        else {
          const fe = a(I, 'width'),
            ue = a(I, 'padding-left'),
            de = a(I, 'padding-right'),
            me = a(I, 'margin-left'),
            _e = a(I, 'margin-right'),
            Ge = I.getPropertyValue('box-sizing');
          if (Ge && Ge === 'border-box') q = fe + me + _e;
          else {
            const { clientWidth: Nt, offsetWidth: we } = ie;
            q = fe + ue + de + me + _e + (we - Nt);
          }
        }
        (X && (ie.style.transform = X),
          oe && (ie.style.webkitTransform = oe),
          o.roundLengths && (q = Math.floor(q)));
      } else
        ((q = (d - (o.slidesPerView - 1) * M) / o.slidesPerView),
          o.roundLengths && (q = Math.floor(q)),
          b[W] && (b[W].style[r.getDirectionLabel('width')] = `${q}px`));
      (b[W] && (b[W].swiperSlideSize = q),
        D.push(q),
        o.centeredSlides
          ? ((k = k + q / 2 + z / 2 + M),
            z === 0 && W !== 0 && (k = k - d / 2 - M),
            W === 0 && (k = k - d / 2 - M),
            Math.abs(k) < 1 / 1e3 && (k = 0),
            o.roundLengths && (k = Math.floor(k)),
            Y % o.slidesPerGroup === 0 && w.push(k),
            R.push(k))
          : (o.roundLengths && (k = Math.floor(k)),
            (Y - Math.min(r.params.slidesPerGroupSkip, Y)) %
              r.params.slidesPerGroup ===
              0 && w.push(k),
            R.push(k),
            (k = k + q + M)),
        (r.virtualSize += q + M),
        (z = q),
        (Y += 1));
    }
  }
  if (
    ((r.virtualSize = Math.max(r.virtualSize, d) + L),
    f &&
      v &&
      (o.effect === 'slide' || o.effect === 'coverflow') &&
      (s.style.width = `${r.virtualSize + M}px`),
    o.setWrapperSize &&
      (s.style[r.getDirectionLabel('width')] = `${r.virtualSize + M}px`),
    B && r.grid.updateWrapperSize(q, w),
    !o.centeredSlides)
  ) {
    const W = [];
    for (let ie = 0; ie < w.length; ie += 1) {
      let I = w[ie];
      (o.roundLengths && (I = Math.floor(I)),
        w[ie] <= r.virtualSize - d && W.push(I));
    }
    ((w = W),
      Math.floor(r.virtualSize - d) - Math.floor(w[w.length - 1]) > 1 &&
        w.push(r.virtualSize - d));
  }
  if (m && o.loop) {
    const W = D[0] + M;
    if (o.slidesPerGroup > 1) {
      const ie = Math.ceil(
          (r.virtual.slidesBefore + r.virtual.slidesAfter) / o.slidesPerGroup
        ),
        I = W * o.slidesPerGroup;
      for (let X = 0; X < ie; X += 1) w.push(w[w.length - 1] + I);
    }
    for (
      let ie = 0;
      ie < r.virtual.slidesBefore + r.virtual.slidesAfter;
      ie += 1
    )
      (o.slidesPerGroup === 1 && w.push(w[w.length - 1] + W),
        R.push(R[R.length - 1] + W),
        (r.virtualSize += W));
  }
  if ((w.length === 0 && (w = [0]), M !== 0)) {
    const W =
      r.isHorizontal() && f ? 'marginLeft' : r.getDirectionLabel('marginRight');
    b.filter((ie, I) =>
      !o.cssMode || o.loop ? !0 : I !== b.length - 1
    ).forEach((ie) => {
      ie.style[W] = `${M}px`;
    });
  }
  if (o.centeredSlides && o.centeredSlidesBounds) {
    let W = 0;
    (D.forEach((I) => {
      W += I + (M || 0);
    }),
      (W -= M));
    const ie = W > d ? W - d : 0;
    w = w.map((I) => (I <= 0 ? -_ : I > ie ? ie + L : I));
  }
  if (o.centerInsufficientSlides) {
    let W = 0;
    (D.forEach((I) => {
      W += I + (M || 0);
    }),
      (W -= M));
    const ie = (o.slidesOffsetBefore || 0) + (o.slidesOffsetAfter || 0);
    if (W + ie < d) {
      const I = (d - W - ie) / 2;
      (w.forEach((X, oe) => {
        w[oe] = X - I;
      }),
        R.forEach((X, oe) => {
          R[oe] = X + I;
        }));
    }
  }
  if (
    (Object.assign(r, {
      slides: b,
      snapGrid: w,
      slidesGrid: R,
      slidesSizesGrid: D,
    }),
    o.centeredSlides && o.cssMode && !o.centeredSlidesBounds)
  ) {
    (Sd(s, '--swiper-centered-offset-before', `${-w[0]}px`),
      Sd(
        s,
        '--swiper-centered-offset-after',
        `${r.size / 2 - D[D.length - 1] / 2}px`
      ));
    const W = -r.snapGrid[0],
      ie = -r.slidesGrid[0];
    ((r.snapGrid = r.snapGrid.map((I) => I + W)),
      (r.slidesGrid = r.slidesGrid.map((I) => I + ie)));
  }
  if (
    (T !== y && r.emit('slidesLengthChange'),
    w.length !== O &&
      (r.params.watchOverflow && r.checkOverflow(),
      r.emit('snapGridLengthChange')),
    R.length !== C && r.emit('slidesGridLengthChange'),
    o.watchSlidesProgress && r.updateSlidesOffset(),
    r.emit('slidesUpdated'),
    !m && !o.cssMode && (o.effect === 'slide' || o.effect === 'fade'))
  ) {
    const W = `${o.containerModifierClass}backface-hidden`,
      ie = r.el.classList.contains(W);
    T <= o.maxBackfaceHiddenSlides
      ? ie || r.el.classList.add(W)
      : ie && r.el.classList.remove(W);
  }
}
function vP(r) {
  const a = this,
    o = [],
    s = a.virtual && a.params.virtual.enabled;
  let u = 0,
    d;
  typeof r == 'number'
    ? a.setTransition(r)
    : r === !0 && a.setTransition(a.params.speed);
  const f = (v) => (s ? a.slides[a.getSlideIndexByData(v)] : a.slides[v]);
  if (a.params.slidesPerView !== 'auto' && a.params.slidesPerView > 1)
    if (a.params.centeredSlides)
      (a.visibleSlides || []).forEach((v) => {
        o.push(v);
      });
    else
      for (d = 0; d < Math.ceil(a.params.slidesPerView); d += 1) {
        const v = a.activeIndex + d;
        if (v > a.slides.length && !s) break;
        o.push(f(v));
      }
  else o.push(f(a.activeIndex));
  for (d = 0; d < o.length; d += 1)
    if (typeof o[d] < 'u') {
      const v = o[d].offsetHeight;
      u = v > u ? v : u;
    }
  (u || u === 0) && (a.wrapperEl.style.height = `${u}px`);
}
function hP() {
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
const OE = (r, a, o) => {
  a && !r.classList.contains(o)
    ? r.classList.add(o)
    : !a && r.classList.contains(o) && r.classList.remove(o);
};
function mP(r) {
  r === void 0 && (r = (this && this.translate) || 0);
  const a = this,
    o = a.params,
    { slides: s, rtlTranslate: u, snapGrid: d } = a;
  if (s.length === 0) return;
  typeof s[0].swiperSlideOffset > 'u' && a.updateSlidesOffset();
  let f = -r;
  (u && (f = r), (a.visibleSlidesIndexes = []), (a.visibleSlides = []));
  let v = o.spaceBetween;
  typeof v == 'string' && v.indexOf('%') >= 0
    ? (v = (parseFloat(v.replace('%', '')) / 100) * a.size)
    : typeof v == 'string' && (v = parseFloat(v));
  for (let m = 0; m < s.length; m += 1) {
    const y = s[m];
    let b = y.swiperSlideOffset;
    o.cssMode && o.centeredSlides && (b -= s[0].swiperSlideOffset);
    const T =
        (f + (o.centeredSlides ? a.minTranslate() : 0) - b) /
        (y.swiperSlideSize + v),
      w =
        (f - d[0] + (o.centeredSlides ? a.minTranslate() : 0) - b) /
        (y.swiperSlideSize + v),
      R = -(f - b),
      D = R + a.slidesSizesGrid[m],
      _ = R >= 0 && R <= a.size - a.slidesSizesGrid[m],
      L =
        (R >= 0 && R < a.size - 1) ||
        (D > 1 && D <= a.size) ||
        (R <= 0 && D >= a.size);
    (L && (a.visibleSlides.push(y), a.visibleSlidesIndexes.push(m)),
      OE(y, L, o.slideVisibleClass),
      OE(y, _, o.slideFullyVisibleClass),
      (y.progress = u ? -T : T),
      (y.originalProgress = u ? -w : w));
  }
}
function yP(r) {
  const a = this;
  if (typeof r > 'u') {
    const b = a.rtlTranslate ? -1 : 1;
    r = (a && a.translate && a.translate * b) || 0;
  }
  const o = a.params,
    s = a.maxTranslate() - a.minTranslate();
  let { progress: u, isBeginning: d, isEnd: f, progressLoop: v } = a;
  const m = d,
    y = f;
  if (s === 0) ((u = 0), (d = !0), (f = !0));
  else {
    u = (r - a.minTranslate()) / s;
    const b = Math.abs(r - a.minTranslate()) < 1,
      T = Math.abs(r - a.maxTranslate()) < 1;
    ((d = b || u <= 0), (f = T || u >= 1), b && (u = 0), T && (u = 1));
  }
  if (o.loop) {
    const b = a.getSlideIndexByData(0),
      T = a.getSlideIndexByData(a.slides.length - 1),
      w = a.slidesGrid[b],
      R = a.slidesGrid[T],
      D = a.slidesGrid[a.slidesGrid.length - 1],
      _ = Math.abs(r);
    (_ >= w ? (v = (_ - w) / D) : (v = (_ + D - R) / D), v > 1 && (v -= 1));
  }
  (Object.assign(a, { progress: u, progressLoop: v, isBeginning: d, isEnd: f }),
    (o.watchSlidesProgress || (o.centeredSlides && o.autoHeight)) &&
      a.updateSlidesProgress(r),
    d && !m && a.emit('reachBeginning toEdge'),
    f && !y && a.emit('reachEnd toEdge'),
    ((m && !d) || (y && !f)) && a.emit('fromEdge'),
    a.emit('progress', u));
}
const ly = (r, a, o) => {
  a && !r.classList.contains(o)
    ? r.classList.add(o)
    : !a && r.classList.contains(o) && r.classList.remove(o);
};
function gP() {
  const r = this,
    { slides: a, params: o, slidesEl: s, activeIndex: u } = r,
    d = r.virtual && o.virtual.enabled,
    f = r.grid && o.grid && o.grid.rows > 1,
    v = (T) => Ca(s, `.${o.slideClass}${T}, swiper-slide${T}`)[0];
  let m, y, b;
  if (d)
    if (o.loop) {
      let T = u - r.virtual.slidesBefore;
      (T < 0 && (T = r.virtual.slides.length + T),
        T >= r.virtual.slides.length && (T -= r.virtual.slides.length),
        (m = v(`[data-swiper-slide-index="${T}"]`)));
    } else m = v(`[data-swiper-slide-index="${u}"]`);
  else
    f
      ? ((m = a.find((T) => T.column === u)),
        (b = a.find((T) => T.column === u + 1)),
        (y = a.find((T) => T.column === u - 1)))
      : (m = a[u]);
  (m &&
    (f ||
      ((b = rP(m, `.${o.slideClass}, swiper-slide`)[0]),
      o.loop && !b && (b = a[0]),
      (y = nP(m, `.${o.slideClass}, swiper-slide`)[0]),
      o.loop && !y === 0 && (y = a[a.length - 1]))),
    a.forEach((T) => {
      (ly(T, T === m, o.slideActiveClass),
        ly(T, T === b, o.slideNextClass),
        ly(T, T === y, o.slidePrevClass));
    }),
    r.emitSlidesClasses());
}
const Od = (r, a) => {
    if (!r || r.destroyed || !r.params) return;
    const o = () => (r.isElement ? 'swiper-slide' : `.${r.params.slideClass}`),
      s = a.closest(o());
    if (s) {
      let u = s.querySelector(`.${r.params.lazyPreloaderClass}`);
      (!u &&
        r.isElement &&
        (s.shadowRoot
          ? (u = s.shadowRoot.querySelector(`.${r.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              s.shadowRoot &&
                ((u = s.shadowRoot.querySelector(
                  `.${r.params.lazyPreloaderClass}`
                )),
                u && u.remove());
            })),
        u && u.remove());
    }
  },
  uy = (r, a) => {
    if (!r.slides[a]) return;
    const o = r.slides[a].querySelector('[loading="lazy"]');
    o && o.removeAttribute('loading');
  },
  Ey = (r) => {
    if (!r || r.destroyed || !r.params) return;
    let a = r.params.lazyPreloadPrevNext;
    const o = r.slides.length;
    if (!o || !a || a < 0) return;
    a = Math.min(a, o);
    const s =
        r.params.slidesPerView === 'auto'
          ? r.slidesPerViewDynamic()
          : Math.ceil(r.params.slidesPerView),
      u = r.activeIndex;
    if (r.params.grid && r.params.grid.rows > 1) {
      const f = u,
        v = [f - a];
      (v.push(...Array.from({ length: a }).map((m, y) => f + s + y)),
        r.slides.forEach((m, y) => {
          v.includes(m.column) && uy(r, y);
        }));
      return;
    }
    const d = u + s - 1;
    if (r.params.rewind || r.params.loop)
      for (let f = u - a; f <= d + a; f += 1) {
        const v = ((f % o) + o) % o;
        (v < u || v > d) && uy(r, v);
      }
    else
      for (let f = Math.max(u - a, 0); f <= Math.min(d + a, o - 1); f += 1)
        f !== u && (f > d || f < u) && uy(r, f);
  };
function bP(r) {
  const { slidesGrid: a, params: o } = r,
    s = r.rtlTranslate ? r.translate : -r.translate;
  let u;
  for (let d = 0; d < a.length; d += 1)
    typeof a[d + 1] < 'u'
      ? s >= a[d] && s < a[d + 1] - (a[d + 1] - a[d]) / 2
        ? (u = d)
        : s >= a[d] && s < a[d + 1] && (u = d + 1)
      : s >= a[d] && (u = d);
  return (o.normalizeSlideIndex && (u < 0 || typeof u > 'u') && (u = 0), u);
}
function SP(r) {
  const a = this,
    o = a.rtlTranslate ? a.translate : -a.translate,
    { snapGrid: s, params: u, activeIndex: d, realIndex: f, snapIndex: v } = a;
  let m = r,
    y;
  const b = (R) => {
    let D = R - a.virtual.slidesBefore;
    return (
      D < 0 && (D = a.virtual.slides.length + D),
      D >= a.virtual.slides.length && (D -= a.virtual.slides.length),
      D
    );
  };
  if ((typeof m > 'u' && (m = bP(a)), s.indexOf(o) >= 0)) y = s.indexOf(o);
  else {
    const R = Math.min(u.slidesPerGroupSkip, m);
    y = R + Math.floor((m - R) / u.slidesPerGroup);
  }
  if ((y >= s.length && (y = s.length - 1), m === d && !a.params.loop)) {
    y !== v && ((a.snapIndex = y), a.emit('snapIndexChange'));
    return;
  }
  if (m === d && a.params.loop && a.virtual && a.params.virtual.enabled) {
    a.realIndex = b(m);
    return;
  }
  const T = a.grid && u.grid && u.grid.rows > 1;
  let w;
  if (a.virtual && u.virtual.enabled && u.loop) w = b(m);
  else if (T) {
    const R = a.slides.find((_) => _.column === m);
    let D = parseInt(R.getAttribute('data-swiper-slide-index'), 10);
    (Number.isNaN(D) && (D = Math.max(a.slides.indexOf(R), 0)),
      (w = Math.floor(D / u.grid.rows)));
  } else if (a.slides[m]) {
    const R = a.slides[m].getAttribute('data-swiper-slide-index');
    R ? (w = parseInt(R, 10)) : (w = m);
  } else w = m;
  (Object.assign(a, {
    previousSnapIndex: v,
    snapIndex: y,
    previousRealIndex: f,
    realIndex: w,
    previousIndex: d,
    activeIndex: m,
  }),
    a.initialized && Ey(a),
    a.emit('activeIndexChange'),
    a.emit('snapIndexChange'),
    (a.initialized || a.params.runCallbacksOnInit) &&
      (f !== w && a.emit('realIndexChange'), a.emit('slideChange')));
}
function TP(r, a) {
  const o = this,
    s = o.params;
  let u = r.closest(`.${s.slideClass}, swiper-slide`);
  !u &&
    o.isElement &&
    a &&
    a.length > 1 &&
    a.includes(r) &&
    [...a.slice(a.indexOf(r) + 1, a.length)].forEach((v) => {
      !u && v.matches && v.matches(`.${s.slideClass}, swiper-slide`) && (u = v);
    });
  let d = !1,
    f;
  if (u) {
    for (let v = 0; v < o.slides.length; v += 1)
      if (o.slides[v] === u) {
        ((d = !0), (f = v));
        break;
      }
  }
  if (u && d)
    ((o.clickedSlide = u),
      o.virtual && o.params.virtual.enabled
        ? (o.clickedIndex = parseInt(
            u.getAttribute('data-swiper-slide-index'),
            10
          ))
        : (o.clickedIndex = f));
  else {
    ((o.clickedSlide = void 0), (o.clickedIndex = void 0));
    return;
  }
  s.slideToClickedSlide &&
    o.clickedIndex !== void 0 &&
    o.clickedIndex !== o.activeIndex &&
    o.slideToClickedSlide();
}
var EP = {
  updateSize: dP,
  updateSlides: pP,
  updateAutoHeight: vP,
  updateSlidesOffset: hP,
  updateSlidesProgress: mP,
  updateProgress: yP,
  updateSlidesClasses: gP,
  updateActiveIndex: SP,
  updateClickedSlide: TP,
};
function wP(r) {
  r === void 0 && (r = this.isHorizontal() ? 'x' : 'y');
  const a = this,
    { params: o, rtlTranslate: s, translate: u, wrapperEl: d } = a;
  if (o.virtualTranslate) return s ? -u : u;
  if (o.cssMode) return u;
  let f = KN(d, r);
  return ((f += a.cssOverflowAdjustment()), s && (f = -f), f || 0);
}
function CP(r, a) {
  const o = this,
    { rtlTranslate: s, params: u, wrapperEl: d, progress: f } = o;
  let v = 0,
    m = 0;
  const y = 0;
  (o.isHorizontal() ? (v = s ? -r : r) : (m = r),
    u.roundLengths && ((v = Math.floor(v)), (m = Math.floor(m))),
    (o.previousTranslate = o.translate),
    (o.translate = o.isHorizontal() ? v : m),
    u.cssMode
      ? (d[o.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = o.isHorizontal()
          ? -v
          : -m)
      : u.virtualTranslate ||
        (o.isHorizontal()
          ? (v -= o.cssOverflowAdjustment())
          : (m -= o.cssOverflowAdjustment()),
        (d.style.transform = `translate3d(${v}px, ${m}px, ${y}px)`)));
  let b;
  const T = o.maxTranslate() - o.minTranslate();
  (T === 0 ? (b = 0) : (b = (r - o.minTranslate()) / T),
    b !== f && o.updateProgress(r),
    o.emit('setTranslate', o.translate, a));
}
function xP() {
  return -this.snapGrid[0];
}
function _P() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function RP(r, a, o, s, u) {
  (r === void 0 && (r = 0),
    a === void 0 && (a = this.params.speed),
    o === void 0 && (o = !0),
    s === void 0 && (s = !0));
  const d = this,
    { params: f, wrapperEl: v } = d;
  if (d.animating && f.preventInteractionOnTransition) return !1;
  const m = d.minTranslate(),
    y = d.maxTranslate();
  let b;
  if (
    (s && r > m ? (b = m) : s && r < y ? (b = y) : (b = r),
    d.updateProgress(b),
    f.cssMode)
  ) {
    const T = d.isHorizontal();
    if (a === 0) v[T ? 'scrollLeft' : 'scrollTop'] = -b;
    else {
      if (!d.support.smoothScroll)
        return (
          Lw({ swiper: d, targetPosition: -b, side: T ? 'left' : 'top' }),
          !0
        );
      v.scrollTo({ [T ? 'left' : 'top']: -b, behavior: 'smooth' });
    }
    return !0;
  }
  return (
    a === 0
      ? (d.setTransition(0),
        d.setTranslate(b),
        o && (d.emit('beforeTransitionStart', a, u), d.emit('transitionEnd')))
      : (d.setTransition(a),
        d.setTranslate(b),
        o && (d.emit('beforeTransitionStart', a, u), d.emit('transitionStart')),
        d.animating ||
          ((d.animating = !0),
          d.onTranslateToWrapperTransitionEnd ||
            (d.onTranslateToWrapperTransitionEnd = function (w) {
              !d ||
                d.destroyed ||
                (w.target === this &&
                  (d.wrapperEl.removeEventListener(
                    'transitionend',
                    d.onTranslateToWrapperTransitionEnd
                  ),
                  (d.onTranslateToWrapperTransitionEnd = null),
                  delete d.onTranslateToWrapperTransitionEnd,
                  (d.animating = !1),
                  o && d.emit('transitionEnd')));
            }),
          d.wrapperEl.addEventListener(
            'transitionend',
            d.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
var DP = {
  getTranslate: wP,
  setTranslate: CP,
  minTranslate: xP,
  maxTranslate: _P,
  translateTo: RP,
};
function OP(r, a) {
  const o = this;
  (o.params.cssMode ||
    ((o.wrapperEl.style.transitionDuration = `${r}ms`),
    (o.wrapperEl.style.transitionDelay = r === 0 ? '0ms' : '')),
    o.emit('setTransition', r, a));
}
function zw(r) {
  let { swiper: a, runCallbacks: o, direction: s, step: u } = r;
  const { activeIndex: d, previousIndex: f } = a;
  let v = s;
  (v || (d > f ? (v = 'next') : d < f ? (v = 'prev') : (v = 'reset')),
    a.emit(`transition${u}`),
    o && v === 'reset'
      ? a.emit(`slideResetTransition${u}`)
      : o &&
        d !== f &&
        (a.emit(`slideChangeTransition${u}`),
        v === 'next'
          ? a.emit(`slideNextTransition${u}`)
          : a.emit(`slidePrevTransition${u}`)));
}
function AP(r, a) {
  r === void 0 && (r = !0);
  const o = this,
    { params: s } = o;
  s.cssMode ||
    (s.autoHeight && o.updateAutoHeight(),
    zw({ swiper: o, runCallbacks: r, direction: a, step: 'Start' }));
}
function MP(r, a) {
  r === void 0 && (r = !0);
  const o = this,
    { params: s } = o;
  ((o.animating = !1),
    !s.cssMode &&
      (o.setTransition(0),
      zw({ swiper: o, runCallbacks: r, direction: a, step: 'End' })));
}
var LP = { setTransition: OP, transitionStart: AP, transitionEnd: MP };
function kP(r, a, o, s, u) {
  (r === void 0 && (r = 0),
    o === void 0 && (o = !0),
    typeof r == 'string' && (r = parseInt(r, 10)));
  const d = this;
  let f = r;
  f < 0 && (f = 0);
  const {
    params: v,
    snapGrid: m,
    slidesGrid: y,
    previousIndex: b,
    activeIndex: T,
    rtlTranslate: w,
    wrapperEl: R,
    enabled: D,
  } = d;
  if (
    (!D && !s && !u) ||
    d.destroyed ||
    (d.animating && v.preventInteractionOnTransition)
  )
    return !1;
  typeof a > 'u' && (a = d.params.speed);
  const _ = Math.min(d.params.slidesPerGroupSkip, f);
  let L = _ + Math.floor((f - _) / d.params.slidesPerGroup);
  L >= m.length && (L = m.length - 1);
  const O = -m[L];
  if (v.normalizeSlideIndex)
    for (let B = 0; B < y.length; B += 1) {
      const q = -Math.floor(O * 100),
        Z = Math.floor(y[B] * 100),
        W = Math.floor(y[B + 1] * 100);
      typeof y[B + 1] < 'u'
        ? q >= Z && q < W - (W - Z) / 2
          ? (f = B)
          : q >= Z && q < W && (f = B + 1)
        : q >= Z && (f = B);
    }
  if (
    d.initialized &&
    f !== T &&
    ((!d.allowSlideNext &&
      (w
        ? O > d.translate && O > d.minTranslate()
        : O < d.translate && O < d.minTranslate())) ||
      (!d.allowSlidePrev &&
        O > d.translate &&
        O > d.maxTranslate() &&
        (T || 0) !== f))
  )
    return !1;
  (f !== (b || 0) && o && d.emit('beforeSlideChangeStart'),
    d.updateProgress(O));
  let C;
  f > T ? (C = 'next') : f < T ? (C = 'prev') : (C = 'reset');
  const M = d.virtual && d.params.virtual.enabled;
  if (!(M && u) && ((w && -O === d.translate) || (!w && O === d.translate)))
    return (
      d.updateActiveIndex(f),
      v.autoHeight && d.updateAutoHeight(),
      d.updateSlidesClasses(),
      v.effect !== 'slide' && d.setTranslate(O),
      C !== 'reset' && (d.transitionStart(o, C), d.transitionEnd(o, C)),
      !1
    );
  if (v.cssMode) {
    const B = d.isHorizontal(),
      q = w ? O : -O;
    if (a === 0)
      (M &&
        ((d.wrapperEl.style.scrollSnapType = 'none'),
        (d._immediateVirtual = !0)),
        M && !d._cssModeVirtualInitialSet && d.params.initialSlide > 0
          ? ((d._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              R[B ? 'scrollLeft' : 'scrollTop'] = q;
            }))
          : (R[B ? 'scrollLeft' : 'scrollTop'] = q),
        M &&
          requestAnimationFrame(() => {
            ((d.wrapperEl.style.scrollSnapType = ''),
              (d._immediateVirtual = !1));
          }));
    else {
      if (!d.support.smoothScroll)
        return (
          Lw({ swiper: d, targetPosition: q, side: B ? 'left' : 'top' }),
          !0
        );
      R.scrollTo({ [B ? 'left' : 'top']: q, behavior: 'smooth' });
    }
    return !0;
  }
  const Y = Pw().isSafari;
  return (
    M && !u && Y && d.isElement && d.virtual.update(!1, !1, f),
    d.setTransition(a),
    d.setTranslate(O),
    d.updateActiveIndex(f),
    d.updateSlidesClasses(),
    d.emit('beforeTransitionStart', a, s),
    d.transitionStart(o, C),
    a === 0
      ? d.transitionEnd(o, C)
      : d.animating ||
        ((d.animating = !0),
        d.onSlideToWrapperTransitionEnd ||
          (d.onSlideToWrapperTransitionEnd = function (q) {
            !d ||
              d.destroyed ||
              (q.target === this &&
                (d.wrapperEl.removeEventListener(
                  'transitionend',
                  d.onSlideToWrapperTransitionEnd
                ),
                (d.onSlideToWrapperTransitionEnd = null),
                delete d.onSlideToWrapperTransitionEnd,
                d.transitionEnd(o, C)));
          }),
        d.wrapperEl.addEventListener(
          'transitionend',
          d.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function NP(r, a, o, s) {
  (r === void 0 && (r = 0),
    o === void 0 && (o = !0),
    typeof r == 'string' && (r = parseInt(r, 10)));
  const u = this;
  if (u.destroyed) return;
  typeof a > 'u' && (a = u.params.speed);
  const d = u.grid && u.params.grid && u.params.grid.rows > 1;
  let f = r;
  if (u.params.loop)
    if (u.virtual && u.params.virtual.enabled) f = f + u.virtual.slidesBefore;
    else {
      let v;
      if (d) {
        const w = f * u.params.grid.rows;
        v = u.slides.find(
          (R) => R.getAttribute('data-swiper-slide-index') * 1 === w
        ).column;
      } else v = u.getSlideIndexByData(f);
      const m = d
          ? Math.ceil(u.slides.length / u.params.grid.rows)
          : u.slides.length,
        { centeredSlides: y } = u.params;
      let b = u.params.slidesPerView;
      b === 'auto'
        ? (b = u.slidesPerViewDynamic())
        : ((b = Math.ceil(parseFloat(u.params.slidesPerView, 10))),
          y && b % 2 === 0 && (b = b + 1));
      let T = m - v < b;
      if (
        (y && (T = T || v < Math.ceil(b / 2)),
        s && y && u.params.slidesPerView !== 'auto' && !d && (T = !1),
        T)
      ) {
        const w = y
          ? v < u.activeIndex
            ? 'prev'
            : 'next'
          : v - u.activeIndex - 1 < u.params.slidesPerView
            ? 'next'
            : 'prev';
        u.loopFix({
          direction: w,
          slideTo: !0,
          activeSlideIndex: w === 'next' ? v + 1 : v - m + 1,
          slideRealIndex: w === 'next' ? u.realIndex : void 0,
        });
      }
      if (d) {
        const w = f * u.params.grid.rows;
        f = u.slides.find(
          (R) => R.getAttribute('data-swiper-slide-index') * 1 === w
        ).column;
      } else f = u.getSlideIndexByData(f);
    }
  return (
    requestAnimationFrame(() => {
      u.slideTo(f, a, o, s);
    }),
    u
  );
}
function PP(r, a, o) {
  a === void 0 && (a = !0);
  const s = this,
    { enabled: u, params: d, animating: f } = s;
  if (!u || s.destroyed) return s;
  typeof r > 'u' && (r = s.params.speed);
  let v = d.slidesPerGroup;
  d.slidesPerView === 'auto' &&
    d.slidesPerGroup === 1 &&
    d.slidesPerGroupAuto &&
    (v = Math.max(s.slidesPerViewDynamic('current', !0), 1));
  const m = s.activeIndex < d.slidesPerGroupSkip ? 1 : v,
    y = s.virtual && d.virtual.enabled;
  if (d.loop) {
    if (f && !y && d.loopPreventsSliding) return !1;
    if (
      (s.loopFix({ direction: 'next' }),
      (s._clientLeft = s.wrapperEl.clientLeft),
      s.activeIndex === s.slides.length - 1 && d.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          s.slideTo(s.activeIndex + m, r, a, o);
        }),
        !0
      );
  }
  return d.rewind && s.isEnd
    ? s.slideTo(0, r, a, o)
    : s.slideTo(s.activeIndex + m, r, a, o);
}
function zP(r, a, o) {
  a === void 0 && (a = !0);
  const s = this,
    {
      params: u,
      snapGrid: d,
      slidesGrid: f,
      rtlTranslate: v,
      enabled: m,
      animating: y,
    } = s;
  if (!m || s.destroyed) return s;
  typeof r > 'u' && (r = s.params.speed);
  const b = s.virtual && u.virtual.enabled;
  if (u.loop) {
    if (y && !b && u.loopPreventsSliding) return !1;
    (s.loopFix({ direction: 'prev' }),
      (s._clientLeft = s.wrapperEl.clientLeft));
  }
  const T = v ? s.translate : -s.translate;
  function w(C) {
    return C < 0 ? -Math.floor(Math.abs(C)) : Math.floor(C);
  }
  const R = w(T),
    D = d.map((C) => w(C)),
    _ = u.freeMode && u.freeMode.enabled;
  let L = d[D.indexOf(R) - 1];
  if (typeof L > 'u' && (u.cssMode || _)) {
    let C;
    (d.forEach((M, k) => {
      R >= M && (C = k);
    }),
      typeof C < 'u' && (L = _ ? d[C] : d[C > 0 ? C - 1 : C]));
  }
  let O = 0;
  if (
    (typeof L < 'u' &&
      ((O = f.indexOf(L)),
      O < 0 && (O = s.activeIndex - 1),
      u.slidesPerView === 'auto' &&
        u.slidesPerGroup === 1 &&
        u.slidesPerGroupAuto &&
        ((O = O - s.slidesPerViewDynamic('previous', !0) + 1),
        (O = Math.max(O, 0)))),
    u.rewind && s.isBeginning)
  ) {
    const C =
      s.params.virtual && s.params.virtual.enabled && s.virtual
        ? s.virtual.slides.length - 1
        : s.slides.length - 1;
    return s.slideTo(C, r, a, o);
  } else if (u.loop && s.activeIndex === 0 && u.cssMode)
    return (
      requestAnimationFrame(() => {
        s.slideTo(O, r, a, o);
      }),
      !0
    );
  return s.slideTo(O, r, a, o);
}
function FP(r, a, o) {
  a === void 0 && (a = !0);
  const s = this;
  if (!s.destroyed)
    return (
      typeof r > 'u' && (r = s.params.speed),
      s.slideTo(s.activeIndex, r, a, o)
    );
}
function UP(r, a, o, s) {
  (a === void 0 && (a = !0), s === void 0 && (s = 0.5));
  const u = this;
  if (u.destroyed) return;
  typeof r > 'u' && (r = u.params.speed);
  let d = u.activeIndex;
  const f = Math.min(u.params.slidesPerGroupSkip, d),
    v = f + Math.floor((d - f) / u.params.slidesPerGroup),
    m = u.rtlTranslate ? u.translate : -u.translate;
  if (m >= u.snapGrid[v]) {
    const y = u.snapGrid[v],
      b = u.snapGrid[v + 1];
    m - y > (b - y) * s && (d += u.params.slidesPerGroup);
  } else {
    const y = u.snapGrid[v - 1],
      b = u.snapGrid[v];
    m - y <= (b - y) * s && (d -= u.params.slidesPerGroup);
  }
  return (
    (d = Math.max(d, 0)),
    (d = Math.min(d, u.slidesGrid.length - 1)),
    u.slideTo(d, r, a, o)
  );
}
function IP() {
  const r = this;
  if (r.destroyed) return;
  const { params: a, slidesEl: o } = r,
    s = a.slidesPerView === 'auto' ? r.slidesPerViewDynamic() : a.slidesPerView;
  let u = r.getSlideIndexWhenGrid(r.clickedIndex),
    d;
  const f = r.isElement ? 'swiper-slide' : `.${a.slideClass}`,
    v = r.grid && r.params.grid && r.params.grid.rows > 1;
  if (a.loop) {
    if (r.animating) return;
    ((d = parseInt(r.clickedSlide.getAttribute('data-swiper-slide-index'), 10)),
      a.centeredSlides
        ? r.slideToLoop(d)
        : u >
            (v
              ? (r.slides.length - s) / 2 - (r.params.grid.rows - 1)
              : r.slides.length - s)
          ? (r.loopFix(),
            (u = r.getSlideIndex(
              Ca(o, `${f}[data-swiper-slide-index="${d}"]`)[0]
            )),
            Vy(() => {
              r.slideTo(u);
            }))
          : r.slideTo(u));
  } else r.slideTo(u);
}
var VP = {
  slideTo: kP,
  slideToLoop: NP,
  slideNext: PP,
  slidePrev: zP,
  slideReset: FP,
  slideToClosest: UP,
  slideToClickedSlide: IP,
};
function BP(r, a) {
  const o = this,
    { params: s, slidesEl: u } = o;
  if (!s.loop || (o.virtual && o.params.virtual.enabled)) return;
  const d = () => {
      Ca(u, `.${s.slideClass}, swiper-slide`).forEach((R, D) => {
        R.setAttribute('data-swiper-slide-index', D);
      });
    },
    f = () => {
      const w = Ca(u, `.${s.slideBlankClass}`);
      (w.forEach((R) => {
        R.remove();
      }),
        w.length > 0 && (o.recalcSlides(), o.updateSlides()));
    },
    v = o.grid && s.grid && s.grid.rows > 1;
  s.loopAddBlankSlides && (s.slidesPerGroup > 1 || v) && f();
  const m = s.slidesPerGroup * (v ? s.grid.rows : 1),
    y = o.slides.length % m !== 0,
    b = v && o.slides.length % s.grid.rows !== 0,
    T = (w) => {
      for (let R = 0; R < w; R += 1) {
        const D = o.isElement
          ? Gu('swiper-slide', [s.slideBlankClass])
          : Gu('div', [s.slideClass, s.slideBlankClass]);
        o.slidesEl.append(D);
      }
    };
  if (y) {
    if (s.loopAddBlankSlides) {
      const w = m - (o.slides.length % m);
      (T(w), o.recalcSlides(), o.updateSlides());
    } else
      Ud(
        'Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
      );
    d();
  } else if (b) {
    if (s.loopAddBlankSlides) {
      const w = s.grid.rows - (o.slides.length % s.grid.rows);
      (T(w), o.recalcSlides(), o.updateSlides());
    } else
      Ud(
        'Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
      );
    d();
  } else d();
  o.loopFix({
    slideRealIndex: r,
    direction: s.centeredSlides ? void 0 : 'next',
    initial: a,
  });
}
function HP(r) {
  let {
    slideRealIndex: a,
    slideTo: o = !0,
    direction: s,
    setTranslate: u,
    activeSlideIndex: d,
    initial: f,
    byController: v,
    byMousewheel: m,
  } = r === void 0 ? {} : r;
  const y = this;
  if (!y.params.loop) return;
  y.emit('beforeLoopFix');
  const {
      slides: b,
      allowSlidePrev: T,
      allowSlideNext: w,
      slidesEl: R,
      params: D,
    } = y,
    { centeredSlides: _, initialSlide: L } = D;
  if (
    ((y.allowSlidePrev = !0),
    (y.allowSlideNext = !0),
    y.virtual && D.virtual.enabled)
  ) {
    (o &&
      (!D.centeredSlides && y.snapIndex === 0
        ? y.slideTo(y.virtual.slides.length, 0, !1, !0)
        : D.centeredSlides && y.snapIndex < D.slidesPerView
          ? y.slideTo(y.virtual.slides.length + y.snapIndex, 0, !1, !0)
          : y.snapIndex === y.snapGrid.length - 1 &&
            y.slideTo(y.virtual.slidesBefore, 0, !1, !0)),
      (y.allowSlidePrev = T),
      (y.allowSlideNext = w),
      y.emit('loopFix'));
    return;
  }
  let O = D.slidesPerView;
  O === 'auto'
    ? (O = y.slidesPerViewDynamic())
    : ((O = Math.ceil(parseFloat(D.slidesPerView, 10))),
      _ && O % 2 === 0 && (O = O + 1));
  const C = D.slidesPerGroupAuto ? O : D.slidesPerGroup;
  let M = _ ? Math.max(C, Math.ceil(O / 2)) : C;
  (M % C !== 0 && (M += C - (M % C)),
    (M += D.loopAdditionalSlides),
    (y.loopedSlides = M));
  const k = y.grid && D.grid && D.grid.rows > 1;
  b.length < O + M || (y.params.effect === 'cards' && b.length < O + M * 2)
    ? Ud(
        'Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters'
      )
    : k &&
      D.grid.fill === 'row' &&
      Ud(
        'Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`'
      );
  const z = [],
    Y = [],
    B = k ? Math.ceil(b.length / D.grid.rows) : b.length,
    q = f && B - L < O && !_;
  let Z = q ? L : y.activeIndex;
  typeof d > 'u'
    ? (d = y.getSlideIndex(
        b.find((ue) => ue.classList.contains(D.slideActiveClass))
      ))
    : (Z = d);
  const W = s === 'next' || !s,
    ie = s === 'prev' || !s;
  let I = 0,
    X = 0;
  const fe = (k ? b[d].column : d) + (_ && typeof u > 'u' ? -O / 2 + 0.5 : 0);
  if (fe < M) {
    I = Math.max(M - fe, C);
    for (let ue = 0; ue < M - fe; ue += 1) {
      const de = ue - Math.floor(ue / B) * B;
      if (k) {
        const me = B - de - 1;
        for (let _e = b.length - 1; _e >= 0; _e -= 1)
          b[_e].column === me && z.push(_e);
      } else z.push(B - de - 1);
    }
  } else if (fe + O > B - M) {
    ((X = Math.max(fe - (B - M * 2), C)),
      q && (X = Math.max(X, O - B + L + 1)));
    for (let ue = 0; ue < X; ue += 1) {
      const de = ue - Math.floor(ue / B) * B;
      k
        ? b.forEach((me, _e) => {
            me.column === de && Y.push(_e);
          })
        : Y.push(de);
    }
  }
  if (
    ((y.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      y.__preventObserver__ = !1;
    }),
    y.params.effect === 'cards' &&
      b.length < O + M * 2 &&
      (Y.includes(d) && Y.splice(Y.indexOf(d), 1),
      z.includes(d) && z.splice(z.indexOf(d), 1)),
    ie &&
      z.forEach((ue) => {
        ((b[ue].swiperLoopMoveDOM = !0),
          R.prepend(b[ue]),
          (b[ue].swiperLoopMoveDOM = !1));
      }),
    W &&
      Y.forEach((ue) => {
        ((b[ue].swiperLoopMoveDOM = !0),
          R.append(b[ue]),
          (b[ue].swiperLoopMoveDOM = !1));
      }),
    y.recalcSlides(),
    D.slidesPerView === 'auto'
      ? y.updateSlides()
      : k &&
        ((z.length > 0 && ie) || (Y.length > 0 && W)) &&
        y.slides.forEach((ue, de) => {
          y.grid.updateSlide(de, ue, y.slides);
        }),
    D.watchSlidesProgress && y.updateSlidesOffset(),
    o)
  ) {
    if (z.length > 0 && ie) {
      if (typeof a > 'u') {
        const ue = y.slidesGrid[Z],
          me = y.slidesGrid[Z + I] - ue;
        m
          ? y.setTranslate(y.translate - me)
          : (y.slideTo(Z + Math.ceil(I), 0, !1, !0),
            u &&
              ((y.touchEventsData.startTranslate =
                y.touchEventsData.startTranslate - me),
              (y.touchEventsData.currentTranslate =
                y.touchEventsData.currentTranslate - me)));
      } else if (u) {
        const ue = k ? z.length / D.grid.rows : z.length;
        (y.slideTo(y.activeIndex + ue, 0, !1, !0),
          (y.touchEventsData.currentTranslate = y.translate));
      }
    } else if (Y.length > 0 && W)
      if (typeof a > 'u') {
        const ue = y.slidesGrid[Z],
          me = y.slidesGrid[Z - X] - ue;
        m
          ? y.setTranslate(y.translate - me)
          : (y.slideTo(Z - X, 0, !1, !0),
            u &&
              ((y.touchEventsData.startTranslate =
                y.touchEventsData.startTranslate - me),
              (y.touchEventsData.currentTranslate =
                y.touchEventsData.currentTranslate - me)));
      } else {
        const ue = k ? Y.length / D.grid.rows : Y.length;
        y.slideTo(y.activeIndex - ue, 0, !1, !0);
      }
  }
  if (
    ((y.allowSlidePrev = T),
    (y.allowSlideNext = w),
    y.controller && y.controller.control && !v)
  ) {
    const ue = {
      slideRealIndex: a,
      direction: s,
      setTranslate: u,
      activeSlideIndex: d,
      byController: !0,
    };
    Array.isArray(y.controller.control)
      ? y.controller.control.forEach((de) => {
          !de.destroyed &&
            de.params.loop &&
            de.loopFix({
              ...ue,
              slideTo: de.params.slidesPerView === D.slidesPerView ? o : !1,
            });
        })
      : y.controller.control instanceof y.constructor &&
        y.controller.control.params.loop &&
        y.controller.control.loopFix({
          ...ue,
          slideTo:
            y.controller.control.params.slidesPerView === D.slidesPerView
              ? o
              : !1,
        });
  }
  y.emit('loopFix');
}
function jP() {
  const r = this,
    { params: a, slidesEl: o } = r;
  if (!a.loop || !o || (r.virtual && r.params.virtual.enabled)) return;
  r.recalcSlides();
  const s = [];
  (r.slides.forEach((u) => {
    const d =
      typeof u.swiperSlideIndex > 'u'
        ? u.getAttribute('data-swiper-slide-index') * 1
        : u.swiperSlideIndex;
    s[d] = u;
  }),
    r.slides.forEach((u) => {
      u.removeAttribute('data-swiper-slide-index');
    }),
    s.forEach((u) => {
      o.append(u);
    }),
    r.recalcSlides(),
    r.slideTo(r.realIndex, 0));
}
var $P = { loopCreate: BP, loopFix: HP, loopDestroy: jP };
function YP(r) {
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
function GP() {
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
var WP = { setGrabCursor: YP, unsetGrabCursor: GP };
function qP(r, a) {
  a === void 0 && (a = this);
  function o(s) {
    if (!s || s === Ir() || s === Jn()) return null;
    s.assignedSlot && (s = s.assignedSlot);
    const u = s.closest(r);
    return !u && !s.getRootNode ? null : u || o(s.getRootNode().host);
  }
  return o(a);
}
function AE(r, a, o) {
  const s = Jn(),
    { params: u } = r,
    d = u.edgeSwipeDetection,
    f = u.edgeSwipeThreshold;
  return d && (o <= f || o >= s.innerWidth - f)
    ? d === 'prevent'
      ? (a.preventDefault(), !0)
      : !1
    : !0;
}
function XP(r) {
  const a = this,
    o = Ir();
  let s = r;
  s.originalEvent && (s = s.originalEvent);
  const u = a.touchEventsData;
  if (s.type === 'pointerdown') {
    if (u.pointerId !== null && u.pointerId !== s.pointerId) return;
    u.pointerId = s.pointerId;
  } else
    s.type === 'touchstart' &&
      s.targetTouches.length === 1 &&
      (u.touchId = s.targetTouches[0].identifier);
  if (s.type === 'touchstart') {
    AE(a, s, s.targetTouches[0].pageX);
    return;
  }
  const { params: d, touches: f, enabled: v } = a;
  if (
    !v ||
    (!d.simulateTouch && s.pointerType === 'mouse') ||
    (a.animating && d.preventInteractionOnTransition)
  )
    return;
  !a.animating && d.cssMode && d.loop && a.loopFix();
  let m = s.target;
  if (
    (d.touchEventsTarget === 'wrapper' && !eP(m, a.wrapperEl)) ||
    ('which' in s && s.which === 3) ||
    ('button' in s && s.button > 0) ||
    (u.isTouched && u.isMoved)
  )
    return;
  const y = !!d.noSwipingClass && d.noSwipingClass !== '',
    b = s.composedPath ? s.composedPath() : s.path;
  y && s.target && s.target.shadowRoot && b && (m = b[0]);
  const T = d.noSwipingSelector ? d.noSwipingSelector : `.${d.noSwipingClass}`,
    w = !!(s.target && s.target.shadowRoot);
  if (d.noSwiping && (w ? qP(T, m) : m.closest(T))) {
    a.allowClick = !0;
    return;
  }
  if (d.swipeHandler && !m.closest(d.swipeHandler)) return;
  ((f.currentX = s.pageX), (f.currentY = s.pageY));
  const R = f.currentX,
    D = f.currentY;
  if (!AE(a, s, R)) return;
  (Object.assign(u, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (f.startX = R),
    (f.startY = D),
    (u.touchStartTime = Fd()),
    (a.allowClick = !0),
    a.updateSize(),
    (a.swipeDirection = void 0),
    d.threshold > 0 && (u.allowThresholdMove = !1));
  let _ = !0;
  (m.matches(u.focusableElements) &&
    ((_ = !1), m.nodeName === 'SELECT' && (u.isTouched = !1)),
    o.activeElement &&
      o.activeElement.matches(u.focusableElements) &&
      o.activeElement !== m &&
      (s.pointerType === 'mouse' ||
        (s.pointerType !== 'mouse' && !m.matches(u.focusableElements))) &&
      o.activeElement.blur());
  const L = _ && a.allowTouchMove && d.touchStartPreventDefault;
  ((d.touchStartForcePreventDefault || L) &&
    !m.isContentEditable &&
    s.preventDefault(),
    d.freeMode &&
      d.freeMode.enabled &&
      a.freeMode &&
      a.animating &&
      !d.cssMode &&
      a.freeMode.onTouchStart(),
    a.emit('touchStart', s));
}
function QP(r) {
  const a = Ir(),
    o = this,
    s = o.touchEventsData,
    { params: u, touches: d, rtlTranslate: f, enabled: v } = o;
  if (!v || (!u.simulateTouch && r.pointerType === 'mouse')) return;
  let m = r;
  if (
    (m.originalEvent && (m = m.originalEvent),
    m.type === 'pointermove' &&
      (s.touchId !== null || m.pointerId !== s.pointerId))
  )
    return;
  let y;
  if (m.type === 'touchmove') {
    if (
      ((y = [...m.changedTouches].find((Y) => Y.identifier === s.touchId)),
      !y || y.identifier !== s.touchId)
    )
      return;
  } else y = m;
  if (!s.isTouched) {
    s.startMoving && s.isScrolling && o.emit('touchMoveOpposite', m);
    return;
  }
  const b = y.pageX,
    T = y.pageY;
  if (m.preventedByNestedSwiper) {
    ((d.startX = b), (d.startY = T));
    return;
  }
  if (!o.allowTouchMove) {
    (m.target.matches(s.focusableElements) || (o.allowClick = !1),
      s.isTouched &&
        (Object.assign(d, { startX: b, startY: T, currentX: b, currentY: T }),
        (s.touchStartTime = Fd())));
    return;
  }
  if (u.touchReleaseOnEdges && !u.loop)
    if (o.isVertical()) {
      if (
        (T < d.startY && o.translate <= o.maxTranslate()) ||
        (T > d.startY && o.translate >= o.minTranslate())
      ) {
        ((s.isTouched = !1), (s.isMoved = !1));
        return;
      }
    } else {
      if (
        f &&
        ((b > d.startX && -o.translate <= o.maxTranslate()) ||
          (b < d.startX && -o.translate >= o.minTranslate()))
      )
        return;
      if (
        !f &&
        ((b < d.startX && o.translate <= o.maxTranslate()) ||
          (b > d.startX && o.translate >= o.minTranslate()))
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
    (d.previousX = d.currentX),
    (d.previousY = d.currentY),
    (d.currentX = b),
    (d.currentY = T));
  const w = d.currentX - d.startX,
    R = d.currentY - d.startY;
  if (o.params.threshold && Math.sqrt(w ** 2 + R ** 2) < o.params.threshold)
    return;
  if (typeof s.isScrolling > 'u') {
    let Y;
    (o.isHorizontal() && d.currentY === d.startY) ||
    (o.isVertical() && d.currentX === d.startX)
      ? (s.isScrolling = !1)
      : w * w + R * R >= 25 &&
        ((Y = (Math.atan2(Math.abs(R), Math.abs(w)) * 180) / Math.PI),
        (s.isScrolling = o.isHorizontal()
          ? Y > u.touchAngle
          : 90 - Y > u.touchAngle));
  }
  if (
    (s.isScrolling && o.emit('touchMoveOpposite', m),
    typeof s.startMoving > 'u' &&
      (d.currentX !== d.startX || d.currentY !== d.startY) &&
      (s.startMoving = !0),
    s.isScrolling ||
      (m.type === 'touchmove' && s.preventTouchMoveFromPointerMove))
  ) {
    s.isTouched = !1;
    return;
  }
  if (!s.startMoving) return;
  ((o.allowClick = !1),
    !u.cssMode && m.cancelable && m.preventDefault(),
    u.touchMoveStopPropagation && !u.nested && m.stopPropagation());
  let D = o.isHorizontal() ? w : R,
    _ = o.isHorizontal() ? d.currentX - d.previousX : d.currentY - d.previousY;
  (u.oneWayMovement &&
    ((D = Math.abs(D) * (f ? 1 : -1)), (_ = Math.abs(_) * (f ? 1 : -1))),
    (d.diff = D),
    (D *= u.touchRatio),
    f && ((D = -D), (_ = -_)));
  const L = o.touchesDirection;
  ((o.swipeDirection = D > 0 ? 'prev' : 'next'),
    (o.touchesDirection = _ > 0 ? 'prev' : 'next'));
  const O = o.params.loop && !u.cssMode,
    C =
      (o.touchesDirection === 'next' && o.allowSlideNext) ||
      (o.touchesDirection === 'prev' && o.allowSlidePrev);
  if (!s.isMoved) {
    if (
      (O && C && o.loopFix({ direction: o.swipeDirection }),
      (s.startTranslate = o.getTranslate()),
      o.setTransition(0),
      o.animating)
    ) {
      const Y = new window.CustomEvent('transitionend', {
        bubbles: !0,
        cancelable: !0,
        detail: { bySwiperTouchMove: !0 },
      });
      o.wrapperEl.dispatchEvent(Y);
    }
    ((s.allowMomentumBounce = !1),
      u.grabCursor &&
        (o.allowSlideNext === !0 || o.allowSlidePrev === !0) &&
        o.setGrabCursor(!0),
      o.emit('sliderFirstMove', m));
  }
  let M;
  if (
    (new Date().getTime(),
    u._loopSwapReset !== !1 &&
      s.isMoved &&
      s.allowThresholdMove &&
      L !== o.touchesDirection &&
      O &&
      C &&
      Math.abs(D) >= 1)
  ) {
    (Object.assign(d, {
      startX: b,
      startY: T,
      currentX: b,
      currentY: T,
      startTranslate: s.currentTranslate,
    }),
      (s.loopSwapReset = !0),
      (s.startTranslate = s.currentTranslate));
    return;
  }
  (o.emit('sliderMove', m),
    (s.isMoved = !0),
    (s.currentTranslate = D + s.startTranslate));
  let k = !0,
    z = u.resistanceRatio;
  if (
    (u.touchReleaseOnEdges && (z = 0),
    D > 0
      ? (O &&
          C &&
          !M &&
          s.allowThresholdMove &&
          s.currentTranslate >
            (u.centeredSlides
              ? o.minTranslate() -
                o.slidesSizesGrid[o.activeIndex + 1] -
                (u.slidesPerView !== 'auto' &&
                o.slides.length - u.slidesPerView >= 2
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
          ((k = !1),
          u.resistance &&
            (s.currentTranslate =
              o.minTranslate() -
              1 +
              (-o.minTranslate() + s.startTranslate + D) ** z)))
      : D < 0 &&
        (O &&
          C &&
          !M &&
          s.allowThresholdMove &&
          s.currentTranslate <
            (u.centeredSlides
              ? o.maxTranslate() +
                o.slidesSizesGrid[o.slidesSizesGrid.length - 1] +
                o.params.spaceBetween +
                (u.slidesPerView !== 'auto' &&
                o.slides.length - u.slidesPerView >= 2
                  ? o.slidesSizesGrid[o.slidesSizesGrid.length - 1] +
                    o.params.spaceBetween
                  : 0)
              : o.maxTranslate()) &&
          o.loopFix({
            direction: 'next',
            setTranslate: !0,
            activeSlideIndex:
              o.slides.length -
              (u.slidesPerView === 'auto'
                ? o.slidesPerViewDynamic()
                : Math.ceil(parseFloat(u.slidesPerView, 10))),
          }),
        s.currentTranslate < o.maxTranslate() &&
          ((k = !1),
          u.resistance &&
            (s.currentTranslate =
              o.maxTranslate() +
              1 -
              (o.maxTranslate() - s.startTranslate - D) ** z))),
    k && (m.preventedByNestedSwiper = !0),
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
    u.threshold > 0)
  )
    if (Math.abs(D) > u.threshold || s.allowThresholdMove) {
      if (!s.allowThresholdMove) {
        ((s.allowThresholdMove = !0),
          (d.startX = d.currentX),
          (d.startY = d.currentY),
          (s.currentTranslate = s.startTranslate),
          (d.diff = o.isHorizontal()
            ? d.currentX - d.startX
            : d.currentY - d.startY));
        return;
      }
    } else {
      s.currentTranslate = s.startTranslate;
      return;
    }
  !u.followFinger ||
    u.cssMode ||
    (((u.freeMode && u.freeMode.enabled && o.freeMode) ||
      u.watchSlidesProgress) &&
      (o.updateActiveIndex(), o.updateSlidesClasses()),
    u.freeMode && u.freeMode.enabled && o.freeMode && o.freeMode.onTouchMove(),
    o.updateProgress(s.currentTranslate),
    o.setTranslate(s.currentTranslate));
}
function KP(r) {
  const a = this,
    o = a.touchEventsData;
  let s = r;
  s.originalEvent && (s = s.originalEvent);
  let u;
  if (s.type === 'touchend' || s.type === 'touchcancel') {
    if (
      ((u = [...s.changedTouches].find((z) => z.identifier === o.touchId)),
      !u || u.identifier !== o.touchId)
    )
      return;
  } else {
    if (o.touchId !== null || s.pointerId !== o.pointerId) return;
    u = s;
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
    params: f,
    touches: v,
    rtlTranslate: m,
    slidesGrid: y,
    enabled: b,
  } = a;
  if (!b || (!f.simulateTouch && s.pointerType === 'mouse')) return;
  if (
    (o.allowTouchCallbacks && a.emit('touchEnd', s),
    (o.allowTouchCallbacks = !1),
    !o.isTouched)
  ) {
    (o.isMoved && f.grabCursor && a.setGrabCursor(!1),
      (o.isMoved = !1),
      (o.startMoving = !1));
    return;
  }
  f.grabCursor &&
    o.isMoved &&
    o.isTouched &&
    (a.allowSlideNext === !0 || a.allowSlidePrev === !0) &&
    a.setGrabCursor(!1);
  const T = Fd(),
    w = T - o.touchStartTime;
  if (a.allowClick) {
    const z = s.path || (s.composedPath && s.composedPath());
    (a.updateClickedSlide((z && z[0]) || s.target, z),
      a.emit('tap click', s),
      w < 300 &&
        T - o.lastClickTime < 300 &&
        a.emit('doubleTap doubleClick', s));
  }
  if (
    ((o.lastClickTime = Fd()),
    Vy(() => {
      a.destroyed || (a.allowClick = !0);
    }),
    !o.isTouched ||
      !o.isMoved ||
      !a.swipeDirection ||
      (v.diff === 0 && !o.loopSwapReset) ||
      (o.currentTranslate === o.startTranslate && !o.loopSwapReset))
  ) {
    ((o.isTouched = !1), (o.isMoved = !1), (o.startMoving = !1));
    return;
  }
  ((o.isTouched = !1), (o.isMoved = !1), (o.startMoving = !1));
  let R;
  if (
    (f.followFinger
      ? (R = m ? a.translate : -a.translate)
      : (R = -o.currentTranslate),
    f.cssMode)
  )
    return;
  if (f.freeMode && f.freeMode.enabled) {
    a.freeMode.onTouchEnd({ currentPos: R });
    return;
  }
  const D = R >= -a.maxTranslate() && !a.params.loop;
  let _ = 0,
    L = a.slidesSizesGrid[0];
  for (
    let z = 0;
    z < y.length;
    z += z < f.slidesPerGroupSkip ? 1 : f.slidesPerGroup
  ) {
    const Y = z < f.slidesPerGroupSkip - 1 ? 1 : f.slidesPerGroup;
    typeof y[z + Y] < 'u'
      ? (D || (R >= y[z] && R < y[z + Y])) && ((_ = z), (L = y[z + Y] - y[z]))
      : (D || R >= y[z]) && ((_ = z), (L = y[y.length - 1] - y[y.length - 2]));
  }
  let O = null,
    C = null;
  f.rewind &&
    (a.isBeginning
      ? (C =
          f.virtual && f.virtual.enabled && a.virtual
            ? a.virtual.slides.length - 1
            : a.slides.length - 1)
      : a.isEnd && (O = 0));
  const M = (R - y[_]) / L,
    k = _ < f.slidesPerGroupSkip - 1 ? 1 : f.slidesPerGroup;
  if (w > f.longSwipesMs) {
    if (!f.longSwipes) {
      a.slideTo(a.activeIndex);
      return;
    }
    (a.swipeDirection === 'next' &&
      (M >= f.longSwipesRatio
        ? a.slideTo(f.rewind && a.isEnd ? O : _ + k)
        : a.slideTo(_)),
      a.swipeDirection === 'prev' &&
        (M > 1 - f.longSwipesRatio
          ? a.slideTo(_ + k)
          : C !== null && M < 0 && Math.abs(M) > f.longSwipesRatio
            ? a.slideTo(C)
            : a.slideTo(_)));
  } else {
    if (!f.shortSwipes) {
      a.slideTo(a.activeIndex);
      return;
    }
    a.navigation &&
    (s.target === a.navigation.nextEl || s.target === a.navigation.prevEl)
      ? s.target === a.navigation.nextEl
        ? a.slideTo(_ + k)
        : a.slideTo(_)
      : (a.swipeDirection === 'next' && a.slideTo(O !== null ? O : _ + k),
        a.swipeDirection === 'prev' && a.slideTo(C !== null ? C : _));
  }
}
function ME() {
  const r = this,
    { params: a, el: o } = r;
  if (o && o.offsetWidth === 0) return;
  a.breakpoints && r.setBreakpoint();
  const { allowSlideNext: s, allowSlidePrev: u, snapGrid: d } = r,
    f = r.virtual && r.params.virtual.enabled;
  ((r.allowSlideNext = !0),
    (r.allowSlidePrev = !0),
    r.updateSize(),
    r.updateSlides(),
    r.updateSlidesClasses());
  const v = f && a.loop;
  ((a.slidesPerView === 'auto' || a.slidesPerView > 1) &&
  r.isEnd &&
  !r.isBeginning &&
  !r.params.centeredSlides &&
  !v
    ? r.slideTo(r.slides.length - 1, 0, !1, !0)
    : r.params.loop && !f
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
    (r.allowSlidePrev = u),
    (r.allowSlideNext = s),
    r.params.watchOverflow && d !== r.snapGrid && r.checkOverflow());
}
function JP(r) {
  const a = this;
  a.enabled &&
    (a.allowClick ||
      (a.params.preventClicks && r.preventDefault(),
      a.params.preventClicksPropagation &&
        a.animating &&
        (r.stopPropagation(), r.stopImmediatePropagation())));
}
function ZP() {
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
  let u;
  const d = r.maxTranslate() - r.minTranslate();
  (d === 0 ? (u = 0) : (u = (r.translate - r.minTranslate()) / d),
    u !== r.progress && r.updateProgress(o ? -r.translate : r.translate),
    r.emit('setTranslate', r.translate, !1));
}
function ez(r) {
  const a = this;
  (Od(a, r.target),
    !(
      a.params.cssMode ||
      (a.params.slidesPerView !== 'auto' && !a.params.autoHeight)
    ) && a.update());
}
function tz() {
  const r = this;
  r.documentTouchHandlerProceeded ||
    ((r.documentTouchHandlerProceeded = !0),
    r.params.touchReleaseOnEdges && (r.el.style.touchAction = 'auto'));
}
const Fw = (r, a) => {
  const o = Ir(),
    { params: s, el: u, wrapperEl: d, device: f } = r,
    v = !!s.nested,
    m = a === 'on' ? 'addEventListener' : 'removeEventListener',
    y = a;
  !u ||
    typeof u == 'string' ||
    (o[m]('touchstart', r.onDocumentTouchStart, { passive: !1, capture: v }),
    u[m]('touchstart', r.onTouchStart, { passive: !1 }),
    u[m]('pointerdown', r.onTouchStart, { passive: !1 }),
    o[m]('touchmove', r.onTouchMove, { passive: !1, capture: v }),
    o[m]('pointermove', r.onTouchMove, { passive: !1, capture: v }),
    o[m]('touchend', r.onTouchEnd, { passive: !0 }),
    o[m]('pointerup', r.onTouchEnd, { passive: !0 }),
    o[m]('pointercancel', r.onTouchEnd, { passive: !0 }),
    o[m]('touchcancel', r.onTouchEnd, { passive: !0 }),
    o[m]('pointerout', r.onTouchEnd, { passive: !0 }),
    o[m]('pointerleave', r.onTouchEnd, { passive: !0 }),
    o[m]('contextmenu', r.onTouchEnd, { passive: !0 }),
    (s.preventClicks || s.preventClicksPropagation) &&
      u[m]('click', r.onClick, !0),
    s.cssMode && d[m]('scroll', r.onScroll),
    s.updateOnWindowResize
      ? r[y](
          f.ios || f.android
            ? 'resize orientationchange observerUpdate'
            : 'resize observerUpdate',
          ME,
          !0
        )
      : r[y]('observerUpdate', ME, !0),
    u[m]('load', r.onLoad, { capture: !0 }));
};
function nz() {
  const r = this,
    { params: a } = r;
  ((r.onTouchStart = XP.bind(r)),
    (r.onTouchMove = QP.bind(r)),
    (r.onTouchEnd = KP.bind(r)),
    (r.onDocumentTouchStart = tz.bind(r)),
    a.cssMode && (r.onScroll = ZP.bind(r)),
    (r.onClick = JP.bind(r)),
    (r.onLoad = ez.bind(r)),
    Fw(r, 'on'));
}
function rz() {
  Fw(this, 'off');
}
var az = { attachEvents: nz, detachEvents: rz };
const LE = (r, a) => r.grid && a.grid && a.grid.rows > 1;
function iz() {
  const r = this,
    { realIndex: a, initialized: o, params: s, el: u } = r,
    d = s.breakpoints;
  if (!d || (d && Object.keys(d).length === 0)) return;
  const f = Ir(),
    v =
      s.breakpointsBase === 'window' || !s.breakpointsBase
        ? s.breakpointsBase
        : 'container',
    m =
      ['window', 'container'].includes(s.breakpointsBase) || !s.breakpointsBase
        ? r.el
        : f.querySelector(s.breakpointsBase),
    y = r.getBreakpoint(d, v, m);
  if (!y || r.currentBreakpoint === y) return;
  const T = (y in d ? d[y] : void 0) || r.originalParams,
    w = LE(r, s),
    R = LE(r, T),
    D = r.params.grabCursor,
    _ = T.grabCursor,
    L = s.enabled;
  (w && !R
    ? (u.classList.remove(
        `${s.containerModifierClass}grid`,
        `${s.containerModifierClass}grid-column`
      ),
      r.emitContainerClasses())
    : !w &&
      R &&
      (u.classList.add(`${s.containerModifierClass}grid`),
      ((T.grid.fill && T.grid.fill === 'column') ||
        (!T.grid.fill && s.grid.fill === 'column')) &&
        u.classList.add(`${s.containerModifierClass}grid-column`),
      r.emitContainerClasses()),
    D && !_ ? r.unsetGrabCursor() : !D && _ && r.setGrabCursor(),
    ['navigation', 'pagination', 'scrollbar'].forEach((Y) => {
      if (typeof T[Y] > 'u') return;
      const B = s[Y] && s[Y].enabled,
        q = T[Y] && T[Y].enabled;
      (B && !q && r[Y].disable(), !B && q && r[Y].enable());
    }));
  const O = T.direction && T.direction !== s.direction,
    C = s.loop && (T.slidesPerView !== s.slidesPerView || O),
    M = s.loop;
  (O && o && r.changeDirection(), Or(r.params, T));
  const k = r.params.enabled,
    z = r.params.loop;
  (Object.assign(r, {
    allowTouchMove: r.params.allowTouchMove,
    allowSlideNext: r.params.allowSlideNext,
    allowSlidePrev: r.params.allowSlidePrev,
  }),
    L && !k ? r.disable() : !L && k && r.enable(),
    (r.currentBreakpoint = y),
    r.emit('_beforeBreakpoint', T),
    o &&
      (C
        ? (r.loopDestroy(), r.loopCreate(a), r.updateSlides())
        : !M && z
          ? (r.loopCreate(a), r.updateSlides())
          : M && !z && r.loopDestroy()),
    r.emit('breakpoint', T));
}
function oz(r, a, o) {
  if ((a === void 0 && (a = 'window'), !r || (a === 'container' && !o))) return;
  let s = !1;
  const u = Jn(),
    d = a === 'window' ? u.innerHeight : o.clientHeight,
    f = Object.keys(r).map((v) => {
      if (typeof v == 'string' && v.indexOf('@') === 0) {
        const m = parseFloat(v.substr(1));
        return { value: d * m, point: v };
      }
      return { value: v, point: v };
    });
  f.sort((v, m) => parseInt(v.value, 10) - parseInt(m.value, 10));
  for (let v = 0; v < f.length; v += 1) {
    const { point: m, value: y } = f[v];
    a === 'window'
      ? u.matchMedia(`(min-width: ${y}px)`).matches && (s = m)
      : y <= o.clientWidth && (s = m);
  }
  return s || 'max';
}
var sz = { setBreakpoint: iz, getBreakpoint: oz };
function lz(r, a) {
  const o = [];
  return (
    r.forEach((s) => {
      typeof s == 'object'
        ? Object.keys(s).forEach((u) => {
            s[u] && o.push(a + u);
          })
        : typeof s == 'string' && o.push(a + s);
    }),
    o
  );
}
function uz() {
  const r = this,
    { classNames: a, params: o, rtl: s, el: u, device: d } = r,
    f = lz(
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
        { android: d.android },
        { ios: d.ios },
        { 'css-mode': o.cssMode },
        { centered: o.cssMode && o.centeredSlides },
        { 'watch-progress': o.watchSlidesProgress },
      ],
      o.containerModifierClass
    );
  (a.push(...f), u.classList.add(...a), r.emitContainerClasses());
}
function cz() {
  const r = this,
    { el: a, classNames: o } = r;
  !a ||
    typeof a == 'string' ||
    (a.classList.remove(...o), r.emitContainerClasses());
}
var fz = { addClasses: uz, removeClasses: cz };
function dz() {
  const r = this,
    { isLocked: a, params: o } = r,
    { slidesOffsetBefore: s } = o;
  if (s) {
    const u = r.slides.length - 1,
      d = r.slidesGrid[u] + r.slidesSizesGrid[u] + s * 2;
    r.isLocked = r.size > d;
  } else r.isLocked = r.snapGrid.length === 1;
  (o.allowSlideNext === !0 && (r.allowSlideNext = !r.isLocked),
    o.allowSlidePrev === !0 && (r.allowSlidePrev = !r.isLocked),
    a && a !== r.isLocked && (r.isEnd = !1),
    a !== r.isLocked && r.emit(r.isLocked ? 'lock' : 'unlock'));
}
var pz = { checkOverflow: dz },
  wy = {
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
function vz(r, a) {
  return function (s) {
    s === void 0 && (s = {});
    const u = Object.keys(s)[0],
      d = s[u];
    if (typeof d != 'object' || d === null) {
      Or(a, s);
      return;
    }
    if (
      (r[u] === !0 && (r[u] = { enabled: !0 }),
      u === 'navigation' &&
        r[u] &&
        r[u].enabled &&
        !r[u].prevEl &&
        !r[u].nextEl &&
        (r[u].auto = !0),
      ['pagination', 'scrollbar'].indexOf(u) >= 0 &&
        r[u] &&
        r[u].enabled &&
        !r[u].el &&
        (r[u].auto = !0),
      !(u in r && 'enabled' in d))
    ) {
      Or(a, s);
      return;
    }
    (typeof r[u] == 'object' && !('enabled' in r[u]) && (r[u].enabled = !0),
      r[u] || (r[u] = { enabled: !1 }),
      Or(a, s));
  };
}
const cy = {
    eventsEmitter: fP,
    update: EP,
    translate: DP,
    transition: LP,
    slide: VP,
    loop: $P,
    grabCursor: WP,
    events: az,
    breakpoints: sz,
    checkOverflow: pz,
    classes: fz,
  },
  fy = {};
let By = class ni {
  constructor() {
    let a, o;
    for (var s = arguments.length, u = new Array(s), d = 0; d < s; d++)
      u[d] = arguments[d];
    (u.length === 1 &&
    u[0].constructor &&
    Object.prototype.toString.call(u[0]).slice(8, -1) === 'Object'
      ? (o = u[0])
      : ([a, o] = u),
      o || (o = {}),
      (o = Or({}, o)),
      a && !o.el && (o.el = a));
    const f = Ir();
    if (
      o.el &&
      typeof o.el == 'string' &&
      f.querySelectorAll(o.el).length > 1
    ) {
      const b = [];
      return (
        f.querySelectorAll(o.el).forEach((T) => {
          const w = Or({}, o, { el: T });
          b.push(new ni(w));
        }),
        b
      );
    }
    const v = this;
    ((v.__swiper__ = !0),
      (v.support = kw()),
      (v.device = Nw({ userAgent: o.userAgent })),
      (v.browser = Pw()),
      (v.eventsListeners = {}),
      (v.eventsAnyListeners = []),
      (v.modules = [...v.__modules__]),
      o.modules && Array.isArray(o.modules) && v.modules.push(...o.modules));
    const m = {};
    v.modules.forEach((b) => {
      b({
        params: o,
        swiper: v,
        extendParams: vz(o, m),
        on: v.on.bind(v),
        once: v.once.bind(v),
        off: v.off.bind(v),
        emit: v.emit.bind(v),
      });
    });
    const y = Or({}, wy, m);
    return (
      (v.params = Or({}, y, fy, o)),
      (v.originalParams = Or({}, v.params)),
      (v.passedParams = Or({}, o)),
      v.params &&
        v.params.on &&
        Object.keys(v.params.on).forEach((b) => {
          v.on(b, v.params.on[b]);
        }),
      v.params && v.params.onAny && v.onAny(v.params.onAny),
      Object.assign(v, {
        enabled: v.params.enabled,
        el: a,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return v.params.direction === 'horizontal';
        },
        isVertical() {
          return v.params.direction === 'vertical';
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
        allowSlideNext: v.params.allowSlideNext,
        allowSlidePrev: v.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: v.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: v.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      v.emit('_swiper'),
      v.params.init && v.init(),
      v
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
      u = Ca(o, `.${s.slideClass}, swiper-slide`),
      d = _E(u[0]);
    return _E(a) - d;
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
    a.slides = Ca(o, `.${s.slideClass}, swiper-slide`);
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
    const u = s.minTranslate(),
      f = (s.maxTranslate() - u) * a + u;
    (s.translateTo(f, typeof o > 'u' ? 0 : o),
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
      const u = a.getSlideClasses(s);
      (o.push({ slideEl: s, classNames: u }), a.emit('_slideClass', s, u));
    }),
      a.emit('_slideClasses', o));
  }
  slidesPerViewDynamic(a, o) {
    (a === void 0 && (a = 'current'), o === void 0 && (o = !1));
    const s = this,
      {
        params: u,
        slides: d,
        slidesGrid: f,
        slidesSizesGrid: v,
        size: m,
        activeIndex: y,
      } = s;
    let b = 1;
    if (typeof u.slidesPerView == 'number') return u.slidesPerView;
    if (u.centeredSlides) {
      let T = d[y] ? Math.ceil(d[y].swiperSlideSize) : 0,
        w;
      for (let R = y + 1; R < d.length; R += 1)
        d[R] &&
          !w &&
          ((T += Math.ceil(d[R].swiperSlideSize)), (b += 1), T > m && (w = !0));
      for (let R = y - 1; R >= 0; R -= 1)
        d[R] &&
          !w &&
          ((T += d[R].swiperSlideSize), (b += 1), T > m && (w = !0));
    } else if (a === 'current')
      for (let T = y + 1; T < d.length; T += 1)
        (o ? f[T] + v[T] - f[y] < m : f[T] - f[y] < m) && (b += 1);
    else for (let T = y - 1; T >= 0; T -= 1) f[y] - f[T] < m && (b += 1);
    return b;
  }
  update() {
    const a = this;
    if (!a || a.destroyed) return;
    const { snapGrid: o, params: s } = a;
    (s.breakpoints && a.setBreakpoint(),
      [...a.el.querySelectorAll('[loading="lazy"]')].forEach((f) => {
        f.complete && Od(a, f);
      }),
      a.updateSize(),
      a.updateSlides(),
      a.updateProgress(),
      a.updateSlidesClasses());
    function u() {
      const f = a.rtlTranslate ? a.translate * -1 : a.translate,
        v = Math.min(Math.max(f, a.maxTranslate()), a.minTranslate());
      (a.setTranslate(v), a.updateActiveIndex(), a.updateSlidesClasses());
    }
    let d;
    if (s.freeMode && s.freeMode.enabled && !s.cssMode)
      (u(), s.autoHeight && a.updateAutoHeight());
    else {
      if (
        (s.slidesPerView === 'auto' || s.slidesPerView > 1) &&
        a.isEnd &&
        !s.centeredSlides
      ) {
        const f = a.virtual && s.virtual.enabled ? a.virtual.slides : a.slides;
        d = a.slideTo(f.length - 1, 0, !1, !0);
      } else d = a.slideTo(a.activeIndex, 0, !1, !0);
      d || u();
    }
    (s.watchOverflow && o !== a.snapGrid && a.checkOverflow(),
      a.emit('update'));
  }
  changeDirection(a, o) {
    o === void 0 && (o = !0);
    const s = this,
      u = s.params.direction;
    return (
      a || (a = u === 'horizontal' ? 'vertical' : 'horizontal'),
      a === u ||
        (a !== 'horizontal' && a !== 'vertical') ||
        (s.el.classList.remove(`${s.params.containerModifierClass}${u}`),
        s.el.classList.add(`${s.params.containerModifierClass}${a}`),
        s.emitContainerClasses(),
        (s.params.direction = a),
        s.slides.forEach((d) => {
          a === 'vertical' ? (d.style.width = '') : (d.style.height = '');
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
    const u = () =>
      `.${(o.params.wrapperClass || '').trim().split(' ').join('.')}`;
    let f = (() =>
      s && s.shadowRoot && s.shadowRoot.querySelector
        ? s.shadowRoot.querySelector(u())
        : Ca(s, u())[0])();
    return (
      !f &&
        o.params.createElements &&
        ((f = Gu('div', o.params.wrapperClass)),
        s.append(f),
        Ca(s, `.${o.params.slideClass}`).forEach((v) => {
          f.append(v);
        })),
      Object.assign(o, {
        el: s,
        wrapperEl: f,
        slidesEl:
          o.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : f,
        hostEl: o.isElement ? s.parentNode.host : s,
        mounted: !0,
        rtl: s.dir.toLowerCase() === 'rtl' || $i(s, 'direction') === 'rtl',
        rtlTranslate:
          o.params.direction === 'horizontal' &&
          (s.dir.toLowerCase() === 'rtl' || $i(s, 'direction') === 'rtl'),
        wrongRTL: $i(f, 'display') === '-webkit-box',
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
    const u = [...o.el.querySelectorAll('[loading="lazy"]')];
    return (
      o.isElement && u.push(...o.hostEl.querySelectorAll('[loading="lazy"]')),
      u.forEach((d) => {
        d.complete
          ? Od(o, d)
          : d.addEventListener('load', (f) => {
              Od(o, f.target);
            });
      }),
      Ey(o),
      (o.initialized = !0),
      Ey(o),
      o.emit('init'),
      o.emit('afterInit'),
      o
    );
  }
  destroy(a, o) {
    (a === void 0 && (a = !0), o === void 0 && (o = !0));
    const s = this,
      { params: u, el: d, wrapperEl: f, slides: v } = s;
    return (
      typeof s.params > 'u' ||
        s.destroyed ||
        (s.emit('beforeDestroy'),
        (s.initialized = !1),
        s.detachEvents(),
        u.loop && s.loopDestroy(),
        o &&
          (s.removeClasses(),
          d && typeof d != 'string' && d.removeAttribute('style'),
          f && f.removeAttribute('style'),
          v &&
            v.length &&
            v.forEach((m) => {
              (m.classList.remove(
                u.slideVisibleClass,
                u.slideFullyVisibleClass,
                u.slideActiveClass,
                u.slideNextClass,
                u.slidePrevClass
              ),
                m.removeAttribute('style'),
                m.removeAttribute('data-swiper-slide-index'));
            })),
        s.emit('destroy'),
        Object.keys(s.eventsListeners).forEach((m) => {
          s.off(m);
        }),
        a !== !1 &&
          (s.el && typeof s.el != 'string' && (s.el.swiper = null), XN(s)),
        (s.destroyed = !0)),
      null
    );
  }
  static extendDefaults(a) {
    Or(fy, a);
  }
  static get extendedDefaults() {
    return fy;
  }
  static get defaults() {
    return wy;
  }
  static installModule(a) {
    ni.prototype.__modules__ || (ni.prototype.__modules__ = []);
    const o = ni.prototype.__modules__;
    typeof a == 'function' && o.indexOf(a) < 0 && o.push(a);
  }
  static use(a) {
    return Array.isArray(a)
      ? (a.forEach((o) => ni.installModule(o)), ni)
      : (ni.installModule(a), ni);
  }
};
Object.keys(cy).forEach((r) => {
  Object.keys(cy[r]).forEach((a) => {
    By.prototype[a] = cy[r][a];
  });
});
By.use([uP, cP]);
const Uw = [
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
function ko(r) {
  return (
    typeof r == 'object' &&
    r !== null &&
    r.constructor &&
    Object.prototype.toString.call(r).slice(8, -1) === 'Object' &&
    !r.__swiper__
  );
}
function Fs(r, a) {
  const o = ['__proto__', 'constructor', 'prototype'];
  Object.keys(a)
    .filter((s) => o.indexOf(s) < 0)
    .forEach((s) => {
      typeof r[s] > 'u'
        ? (r[s] = a[s])
        : ko(a[s]) && ko(r[s]) && Object.keys(a[s]).length > 0
          ? a[s].__swiper__
            ? (r[s] = a[s])
            : Fs(r[s], a[s])
          : (r[s] = a[s]);
    });
}
function Iw(r) {
  return (
    r === void 0 && (r = {}),
    r.navigation &&
      typeof r.navigation.nextEl > 'u' &&
      typeof r.navigation.prevEl > 'u'
  );
}
function Vw(r) {
  return (
    r === void 0 && (r = {}),
    r.pagination && typeof r.pagination.el > 'u'
  );
}
function Bw(r) {
  return (r === void 0 && (r = {}), r.scrollbar && typeof r.scrollbar.el > 'u');
}
function Hw(r) {
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
function hz(r) {
  return (
    r === void 0 && (r = ''),
    r
      ? r.includes('swiper-wrapper')
        ? r
        : `swiper-wrapper ${r}`
      : 'swiper-wrapper'
  );
}
function mz(r) {
  let {
    swiper: a,
    slides: o,
    passedParams: s,
    changedParams: u,
    nextEl: d,
    prevEl: f,
    scrollbarEl: v,
    paginationEl: m,
  } = r;
  const y = u.filter(
      (Z) => Z !== 'children' && Z !== 'direction' && Z !== 'wrapperClass'
    ),
    {
      params: b,
      pagination: T,
      navigation: w,
      scrollbar: R,
      virtual: D,
      thumbs: _,
    } = a;
  let L, O, C, M, k, z, Y, B;
  (u.includes('thumbs') &&
    s.thumbs &&
    s.thumbs.swiper &&
    !s.thumbs.swiper.destroyed &&
    b.thumbs &&
    (!b.thumbs.swiper || b.thumbs.swiper.destroyed) &&
    (L = !0),
    u.includes('controller') &&
      s.controller &&
      s.controller.control &&
      b.controller &&
      !b.controller.control &&
      (O = !0),
    u.includes('pagination') &&
      s.pagination &&
      (s.pagination.el || m) &&
      (b.pagination || b.pagination === !1) &&
      T &&
      !T.el &&
      (C = !0),
    u.includes('scrollbar') &&
      s.scrollbar &&
      (s.scrollbar.el || v) &&
      (b.scrollbar || b.scrollbar === !1) &&
      R &&
      !R.el &&
      (M = !0),
    u.includes('navigation') &&
      s.navigation &&
      (s.navigation.prevEl || f) &&
      (s.navigation.nextEl || d) &&
      (b.navigation || b.navigation === !1) &&
      w &&
      !w.prevEl &&
      !w.nextEl &&
      (k = !0));
  const q = (Z) => {
    a[Z] &&
      (a[Z].destroy(),
      Z === 'navigation'
        ? (a.isElement && (a[Z].prevEl.remove(), a[Z].nextEl.remove()),
          (b[Z].prevEl = void 0),
          (b[Z].nextEl = void 0),
          (a[Z].prevEl = void 0),
          (a[Z].nextEl = void 0))
        : (a.isElement && a[Z].el.remove(),
          (b[Z].el = void 0),
          (a[Z].el = void 0)));
  };
  (u.includes('loop') &&
    a.isElement &&
    (b.loop && !s.loop ? (z = !0) : !b.loop && s.loop ? (Y = !0) : (B = !0)),
    y.forEach((Z) => {
      if (ko(b[Z]) && ko(s[Z]))
        (Object.assign(b[Z], s[Z]),
          (Z === 'navigation' || Z === 'pagination' || Z === 'scrollbar') &&
            'enabled' in s[Z] &&
            !s[Z].enabled &&
            q(Z));
      else {
        const W = s[Z];
        (W === !0 || W === !1) &&
        (Z === 'navigation' || Z === 'pagination' || Z === 'scrollbar')
          ? W === !1 && q(Z)
          : (b[Z] = s[Z]);
      }
    }),
    y.includes('controller') &&
      !O &&
      a.controller &&
      a.controller.control &&
      b.controller &&
      b.controller.control &&
      (a.controller.control = b.controller.control),
    u.includes('children') && o && D && b.virtual.enabled
      ? ((D.slides = o), D.update(!0))
      : u.includes('virtual') &&
        D &&
        b.virtual.enabled &&
        (o && (D.slides = o), D.update(!0)),
    u.includes('children') && o && b.loop && (B = !0),
    L && _.init() && _.update(!0),
    O && (a.controller.control = b.controller.control),
    C &&
      (a.isElement &&
        (!m || typeof m == 'string') &&
        ((m = document.createElement('div')),
        m.classList.add('swiper-pagination'),
        m.part.add('pagination'),
        a.el.appendChild(m)),
      m && (b.pagination.el = m),
      T.init(),
      T.render(),
      T.update()),
    M &&
      (a.isElement &&
        (!v || typeof v == 'string') &&
        ((v = document.createElement('div')),
        v.classList.add('swiper-scrollbar'),
        v.part.add('scrollbar'),
        a.el.appendChild(v)),
      v && (b.scrollbar.el = v),
      R.init(),
      R.updateSize(),
      R.setTranslate()),
    k &&
      (a.isElement &&
        ((!d || typeof d == 'string') &&
          ((d = document.createElement('div')),
          d.classList.add('swiper-button-next'),
          DE(d, a.hostEl.constructor.nextButtonSvg),
          d.part.add('button-next'),
          a.el.appendChild(d)),
        (!f || typeof f == 'string') &&
          ((f = document.createElement('div')),
          f.classList.add('swiper-button-prev'),
          DE(f, a.hostEl.constructor.prevButtonSvg),
          f.part.add('button-prev'),
          a.el.appendChild(f))),
      d && (b.navigation.nextEl = d),
      f && (b.navigation.prevEl = f),
      w.init(),
      w.update()),
    u.includes('allowSlideNext') && (a.allowSlideNext = s.allowSlideNext),
    u.includes('allowSlidePrev') && (a.allowSlidePrev = s.allowSlidePrev),
    u.includes('direction') && a.changeDirection(s.direction, !1),
    (z || B) && a.loopDestroy(),
    (Y || B) && a.loopCreate(),
    a.update());
}
function yz(r, a) {
  (r === void 0 && (r = {}), a === void 0 && (a = !0));
  const o = { on: {} },
    s = {},
    u = {};
  (Fs(o, wy), (o._emitClasses = !0), (o.init = !1));
  const d = {},
    f = Uw.map((m) => m.replace(/_/, '')),
    v = Object.assign({}, r);
  return (
    Object.keys(v).forEach((m) => {
      typeof r[m] > 'u' ||
        (f.indexOf(m) >= 0
          ? ko(r[m])
            ? ((o[m] = {}), (u[m] = {}), Fs(o[m], r[m]), Fs(u[m], r[m]))
            : ((o[m] = r[m]), (u[m] = r[m]))
          : m.search(/on[A-Z]/) === 0 && typeof r[m] == 'function'
            ? a
              ? (s[`${m[2].toLowerCase()}${m.substr(3)}`] = r[m])
              : (o.on[`${m[2].toLowerCase()}${m.substr(3)}`] = r[m])
            : (d[m] = r[m]));
    }),
    ['navigation', 'pagination', 'scrollbar'].forEach((m) => {
      (o[m] === !0 && (o[m] = {}), o[m] === !1 && delete o[m]);
    }),
    { params: o, passedParams: u, rest: d, events: s }
  );
}
function gz(r, a) {
  let {
    el: o,
    nextEl: s,
    prevEl: u,
    paginationEl: d,
    scrollbarEl: f,
    swiper: v,
  } = r;
  (Iw(a) &&
    s &&
    u &&
    ((v.params.navigation.nextEl = s),
    (v.originalParams.navigation.nextEl = s),
    (v.params.navigation.prevEl = u),
    (v.originalParams.navigation.prevEl = u)),
    Vw(a) &&
      d &&
      ((v.params.pagination.el = d), (v.originalParams.pagination.el = d)),
    Bw(a) &&
      f &&
      ((v.params.scrollbar.el = f), (v.originalParams.scrollbar.el = f)),
    v.init(o));
}
function bz(r, a, o, s, u) {
  const d = [];
  if (!a) return d;
  const f = (m) => {
    d.indexOf(m) < 0 && d.push(m);
  };
  if (o && s) {
    const m = s.map(u),
      y = o.map(u);
    (m.join('') !== y.join('') && f('children'),
      s.length !== o.length && f('children'));
  }
  return (
    Uw.filter((m) => m[0] === '_')
      .map((m) => m.replace(/_/, ''))
      .forEach((m) => {
        if (m in r && m in a)
          if (ko(r[m]) && ko(a[m])) {
            const y = Object.keys(r[m]),
              b = Object.keys(a[m]);
            y.length !== b.length
              ? f(m)
              : (y.forEach((T) => {
                  r[m][T] !== a[m][T] && f(m);
                }),
                b.forEach((T) => {
                  r[m][T] !== a[m][T] && f(m);
                }));
          } else r[m] !== a[m] && f(m);
      }),
    d
  );
}
const Sz = (r) => {
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
function Id() {
  return (
    (Id = Object.assign
      ? Object.assign.bind()
      : function (r) {
          for (var a = 1; a < arguments.length; a++) {
            var o = arguments[a];
            for (var s in o)
              Object.prototype.hasOwnProperty.call(o, s) && (r[s] = o[s]);
          }
          return r;
        }),
    Id.apply(this, arguments)
  );
}
function jw(r) {
  return (
    r.type && r.type.displayName && r.type.displayName.includes('SwiperSlide')
  );
}
function $w(r) {
  const a = [];
  return (
    Ue.Children.toArray(r).forEach((o) => {
      jw(o)
        ? a.push(o)
        : o.props &&
          o.props.children &&
          $w(o.props.children).forEach((s) => a.push(s));
    }),
    a
  );
}
function Tz(r) {
  const a = [],
    o = {
      'container-start': [],
      'container-end': [],
      'wrapper-start': [],
      'wrapper-end': [],
    };
  return (
    Ue.Children.toArray(r).forEach((s) => {
      if (jw(s)) a.push(s);
      else if (s.props && s.props.slot && o[s.props.slot])
        o[s.props.slot].push(s);
      else if (s.props && s.props.children) {
        const u = $w(s.props.children);
        u.length > 0 ? u.forEach((d) => a.push(d)) : o['container-end'].push(s);
      } else o['container-end'].push(s);
    }),
    { slides: a, slots: o }
  );
}
function Ez(r, a, o) {
  if (!o) return null;
  const s = (b) => {
      let T = b;
      return (
        b < 0 ? (T = a.length + b) : T >= a.length && (T = T - a.length),
        T
      );
    },
    u = r.isHorizontal()
      ? { [r.rtlTranslate ? 'right' : 'left']: `${o.offset}px` }
      : { top: `${o.offset}px` },
    { from: d, to: f } = o,
    v = r.params.loop ? -a.length : 0,
    m = r.params.loop ? a.length * 2 : a.length,
    y = [];
  for (let b = v; b < m; b += 1) b >= d && b <= f && y.push(a[s(b)]);
  return y.map((b, T) =>
    Ue.cloneElement(b, {
      swiper: r,
      style: u,
      key: b.props.virtualIndex || b.key || `slide-${T}`,
    })
  );
}
function Iu(r, a) {
  return typeof window > 'u' ? $.useEffect(r, a) : $.useLayoutEffect(r, a);
}
const kE = $.createContext(null),
  wz = $.createContext(null),
  $d = $.forwardRef(function (r, a) {
    let {
        className: o,
        tag: s = 'div',
        wrapperTag: u = 'div',
        children: d,
        onSwiper: f,
        ...v
      } = r === void 0 ? {} : r,
      m = !1;
    const [y, b] = $.useState('swiper'),
      [T, w] = $.useState(null),
      [R, D] = $.useState(!1),
      _ = $.useRef(!1),
      L = $.useRef(null),
      O = $.useRef(null),
      C = $.useRef(null),
      M = $.useRef(null),
      k = $.useRef(null),
      z = $.useRef(null),
      Y = $.useRef(null),
      B = $.useRef(null),
      { params: q, passedParams: Z, rest: W, events: ie } = yz(v),
      { slides: I, slots: X } = Tz(d),
      oe = () => {
        D(!R);
      };
    Object.assign(q.on, {
      _containerClasses(_e, Ge) {
        b(Ge);
      },
    });
    const fe = () => {
      (Object.assign(q.on, ie), (m = !0));
      const _e = { ...q };
      if (
        (delete _e.wrapperClass,
        (O.current = new By(_e)),
        O.current.virtual && O.current.params.virtual.enabled)
      ) {
        O.current.virtual.slides = I;
        const Ge = {
          cache: !1,
          slides: I,
          renderExternal: w,
          renderExternalUpdate: !1,
        };
        (Fs(O.current.params.virtual, Ge),
          Fs(O.current.originalParams.virtual, Ge));
      }
    };
    (L.current || fe(), O.current && O.current.on('_beforeBreakpoint', oe));
    const ue = () => {
        m ||
          !ie ||
          !O.current ||
          Object.keys(ie).forEach((_e) => {
            O.current.on(_e, ie[_e]);
          });
      },
      de = () => {
        !ie ||
          !O.current ||
          Object.keys(ie).forEach((_e) => {
            O.current.off(_e, ie[_e]);
          });
      };
    ($.useEffect(() => () => {
      O.current && O.current.off('_beforeBreakpoint', oe);
    }),
      $.useEffect(() => {
        !_.current &&
          O.current &&
          (O.current.emitSlidesClasses(), (_.current = !0));
      }),
      Iu(() => {
        if ((a && (a.current = L.current), !!L.current))
          return (
            O.current.destroyed && fe(),
            gz(
              {
                el: L.current,
                nextEl: k.current,
                prevEl: z.current,
                paginationEl: Y.current,
                scrollbarEl: B.current,
                swiper: O.current,
              },
              q
            ),
            f && !O.current.destroyed && f(O.current),
            () => {
              O.current && !O.current.destroyed && O.current.destroy(!0, !1);
            }
          );
      }, []),
      Iu(() => {
        ue();
        const _e = bz(Z, C.current, I, M.current, (Ge) => Ge.key);
        return (
          (C.current = Z),
          (M.current = I),
          _e.length &&
            O.current &&
            !O.current.destroyed &&
            mz({
              swiper: O.current,
              slides: I,
              passedParams: Z,
              changedParams: _e,
              nextEl: k.current,
              prevEl: z.current,
              scrollbarEl: B.current,
              paginationEl: Y.current,
            }),
          () => {
            de();
          }
        );
      }),
      Iu(() => {
        Sz(O.current);
      }, [T]));
    function me() {
      return q.virtual
        ? Ez(O.current, I, T)
        : I.map((_e, Ge) =>
            Ue.cloneElement(_e, { swiper: O.current, swiperSlideIndex: Ge })
          );
    }
    return Ue.createElement(
      s,
      Id({ ref: L, className: Hw(`${y}${o ? ` ${o}` : ''}`) }, W),
      Ue.createElement(
        wz.Provider,
        { value: O.current },
        X['container-start'],
        Ue.createElement(
          u,
          { className: hz(q.wrapperClass) },
          X['wrapper-start'],
          me(),
          X['wrapper-end']
        ),
        Iw(q) &&
          Ue.createElement(
            Ue.Fragment,
            null,
            Ue.createElement('div', {
              ref: z,
              className: 'swiper-button-prev',
            }),
            Ue.createElement('div', { ref: k, className: 'swiper-button-next' })
          ),
        Bw(q) &&
          Ue.createElement('div', { ref: B, className: 'swiper-scrollbar' }),
        Vw(q) &&
          Ue.createElement('div', { ref: Y, className: 'swiper-pagination' }),
        X['container-end']
      )
    );
  });
$d.displayName = 'Swiper';
const Yd = $.forwardRef(function (r, a) {
  let {
    tag: o = 'div',
    children: s,
    className: u = '',
    swiper: d,
    zoom: f,
    lazy: v,
    virtualIndex: m,
    swiperSlideIndex: y,
    ...b
  } = r === void 0 ? {} : r;
  const T = $.useRef(null),
    [w, R] = $.useState('swiper-slide'),
    [D, _] = $.useState(!1);
  function L(k, z, Y) {
    z === T.current && R(Y);
  }
  (Iu(() => {
    if (
      (typeof y < 'u' && (T.current.swiperSlideIndex = y),
      a && (a.current = T.current),
      !(!T.current || !d))
    ) {
      if (d.destroyed) {
        w !== 'swiper-slide' && R('swiper-slide');
        return;
      }
      return (
        d.on('_slideClass', L),
        () => {
          d && d.off('_slideClass', L);
        }
      );
    }
  }),
    Iu(() => {
      d && T.current && !d.destroyed && R(d.getSlideClasses(T.current));
    }, [d]));
  const O = {
      isActive: w.indexOf('swiper-slide-active') >= 0,
      isVisible: w.indexOf('swiper-slide-visible') >= 0,
      isPrev: w.indexOf('swiper-slide-prev') >= 0,
      isNext: w.indexOf('swiper-slide-next') >= 0,
    },
    C = () => (typeof s == 'function' ? s(O) : s),
    M = () => {
      _(!0);
    };
  return Ue.createElement(
    o,
    Id(
      {
        ref: T,
        className: Hw(`${w}${u ? ` ${u}` : ''}`),
        'data-swiper-slide-index': m,
        onLoad: M,
      },
      b
    ),
    f &&
      Ue.createElement(
        kE.Provider,
        { value: O },
        Ue.createElement(
          'div',
          {
            className: 'swiper-zoom-container',
            'data-swiper-zoom': typeof f == 'number' ? f : void 0,
          },
          C(),
          v &&
            !D &&
            Ue.createElement('div', { className: 'swiper-lazy-preloader' })
        )
      ),
    !f &&
      Ue.createElement(
        kE.Provider,
        { value: O },
        C(),
        v &&
          !D &&
          Ue.createElement('div', { className: 'swiper-lazy-preloader' })
      )
  );
});
Yd.displayName = 'SwiperSlide';
function Cz(r, a, o, s) {
  return (
    r.params.createElements &&
      Object.keys(s).forEach((u) => {
        if (!o[u] && o.auto === !0) {
          let d = Ca(r.el, `.${s[u]}`)[0];
          (d || ((d = Gu('div', s[u])), (d.className = s[u]), r.el.append(d)),
            (o[u] = d),
            (a[u] = d));
        }
      }),
    o
  );
}
function xz(r) {
  return (
    r === void 0 && (r = ''),
    `.${r
      .trim()
      .replace(/([\.:!+\/()[\]])/g, '\\$1')
      .replace(/ /g, '.')}`
  );
}
function Hy(r) {
  let { swiper: a, extendParams: o, on: s, emit: u } = r;
  const d = Ir();
  let f = !1,
    v = null,
    m = null,
    y,
    b,
    T,
    w;
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
  function R() {
    if (!a.params.scrollbar.el || !a.scrollbar.el) return;
    const { scrollbar: I, rtlTranslate: X } = a,
      { dragEl: oe, el: fe } = I,
      ue = a.params.scrollbar,
      de = a.params.loop ? a.progressLoop : a.progress;
    let me = b,
      _e = (T - b) * de;
    (X
      ? ((_e = -_e),
        _e > 0 ? ((me = b - _e), (_e = 0)) : -_e + b > T && (me = T + _e))
      : _e < 0
        ? ((me = b + _e), (_e = 0))
        : _e + b > T && (me = T - _e),
      a.isHorizontal()
        ? ((oe.style.transform = `translate3d(${_e}px, 0, 0)`),
          (oe.style.width = `${me}px`))
        : ((oe.style.transform = `translate3d(0px, ${_e}px, 0)`),
          (oe.style.height = `${me}px`)),
      ue.hide &&
        (clearTimeout(v),
        (fe.style.opacity = 1),
        (v = setTimeout(() => {
          ((fe.style.opacity = 0), (fe.style.transitionDuration = '400ms'));
        }, 1e3))));
  }
  function D(I) {
    !a.params.scrollbar.el ||
      !a.scrollbar.el ||
      (a.scrollbar.dragEl.style.transitionDuration = `${I}ms`);
  }
  function _() {
    if (!a.params.scrollbar.el || !a.scrollbar.el) return;
    const { scrollbar: I } = a,
      { dragEl: X, el: oe } = I;
    ((X.style.width = ''),
      (X.style.height = ''),
      (T = a.isHorizontal() ? oe.offsetWidth : oe.offsetHeight),
      (w =
        a.size /
        (a.virtualSize +
          a.params.slidesOffsetBefore -
          (a.params.centeredSlides ? a.snapGrid[0] : 0))),
      a.params.scrollbar.dragSize === 'auto'
        ? (b = T * w)
        : (b = parseInt(a.params.scrollbar.dragSize, 10)),
      a.isHorizontal()
        ? (X.style.width = `${b}px`)
        : (X.style.height = `${b}px`),
      w >= 1 ? (oe.style.display = 'none') : (oe.style.display = ''),
      a.params.scrollbar.hide && (oe.style.opacity = 0),
      a.params.watchOverflow &&
        a.enabled &&
        I.el.classList[a.isLocked ? 'add' : 'remove'](
          a.params.scrollbar.lockClass
        ));
  }
  function L(I) {
    return a.isHorizontal() ? I.clientX : I.clientY;
  }
  function O(I) {
    const { scrollbar: X, rtlTranslate: oe } = a,
      { el: fe } = X;
    let ue;
    ((ue =
      (L(I) -
        tP(fe)[a.isHorizontal() ? 'left' : 'top'] -
        (y !== null ? y : b / 2)) /
      (T - b)),
      (ue = Math.max(Math.min(ue, 1), 0)),
      oe && (ue = 1 - ue));
    const de = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * ue;
    (a.updateProgress(de),
      a.setTranslate(de),
      a.updateActiveIndex(),
      a.updateSlidesClasses());
  }
  function C(I) {
    const X = a.params.scrollbar,
      { scrollbar: oe, wrapperEl: fe } = a,
      { el: ue, dragEl: de } = oe;
    ((f = !0),
      (y =
        I.target === de
          ? L(I) -
            I.target.getBoundingClientRect()[a.isHorizontal() ? 'left' : 'top']
          : null),
      I.preventDefault(),
      I.stopPropagation(),
      (fe.style.transitionDuration = '100ms'),
      (de.style.transitionDuration = '100ms'),
      O(I),
      clearTimeout(m),
      (ue.style.transitionDuration = '0ms'),
      X.hide && (ue.style.opacity = 1),
      a.params.cssMode && (a.wrapperEl.style['scroll-snap-type'] = 'none'),
      u('scrollbarDragStart', I));
  }
  function M(I) {
    const { scrollbar: X, wrapperEl: oe } = a,
      { el: fe, dragEl: ue } = X;
    f &&
      (I.preventDefault && I.cancelable
        ? I.preventDefault()
        : (I.returnValue = !1),
      O(I),
      (oe.style.transitionDuration = '0ms'),
      (fe.style.transitionDuration = '0ms'),
      (ue.style.transitionDuration = '0ms'),
      u('scrollbarDragMove', I));
  }
  function k(I) {
    const X = a.params.scrollbar,
      { scrollbar: oe, wrapperEl: fe } = a,
      { el: ue } = oe;
    f &&
      ((f = !1),
      a.params.cssMode &&
        ((a.wrapperEl.style['scroll-snap-type'] = ''),
        (fe.style.transitionDuration = '')),
      X.hide &&
        (clearTimeout(m),
        (m = Vy(() => {
          ((ue.style.opacity = 0), (ue.style.transitionDuration = '400ms'));
        }, 1e3))),
      u('scrollbarDragEnd', I),
      X.snapOnRelease && a.slideToClosest());
  }
  function z(I) {
    const { scrollbar: X, params: oe } = a,
      fe = X.el;
    if (!fe) return;
    const ue = fe,
      de = oe.passiveListeners ? { passive: !1, capture: !1 } : !1,
      me = oe.passiveListeners ? { passive: !0, capture: !1 } : !1;
    if (!ue) return;
    const _e = I === 'on' ? 'addEventListener' : 'removeEventListener';
    (ue[_e]('pointerdown', C, de),
      d[_e]('pointermove', M, de),
      d[_e]('pointerup', k, me));
  }
  function Y() {
    !a.params.scrollbar.el || !a.scrollbar.el || z('on');
  }
  function B() {
    !a.params.scrollbar.el || !a.scrollbar.el || z('off');
  }
  function q() {
    const { scrollbar: I, el: X } = a;
    a.params.scrollbar = Cz(a, a.originalParams.scrollbar, a.params.scrollbar, {
      el: 'swiper-scrollbar',
    });
    const oe = a.params.scrollbar;
    if (!oe.el) return;
    let fe;
    if (
      (typeof oe.el == 'string' &&
        a.isElement &&
        (fe = a.el.querySelector(oe.el)),
      !fe && typeof oe.el == 'string')
    ) {
      if (((fe = d.querySelectorAll(oe.el)), !fe.length)) return;
    } else fe || (fe = oe.el);
    (a.params.uniqueNavElements &&
      typeof oe.el == 'string' &&
      fe.length > 1 &&
      X.querySelectorAll(oe.el).length === 1 &&
      (fe = X.querySelector(oe.el)),
      fe.length > 0 && (fe = fe[0]),
      fe.classList.add(
        a.isHorizontal() ? oe.horizontalClass : oe.verticalClass
      ));
    let ue;
    (fe &&
      ((ue = fe.querySelector(xz(a.params.scrollbar.dragClass))),
      ue || ((ue = Gu('div', a.params.scrollbar.dragClass)), fe.append(ue))),
      Object.assign(I, { el: fe, dragEl: ue }),
      oe.draggable && Y(),
      fe &&
        fe.classList[a.enabled ? 'remove' : 'add'](
          ...Bi(a.params.scrollbar.lockClass)
        ));
  }
  function Z() {
    const I = a.params.scrollbar,
      X = a.scrollbar.el;
    (X &&
      X.classList.remove(
        ...Bi(a.isHorizontal() ? I.horizontalClass : I.verticalClass)
      ),
      B());
  }
  (s('changeDirection', () => {
    if (!a.scrollbar || !a.scrollbar.el) return;
    const I = a.params.scrollbar;
    let { el: X } = a.scrollbar;
    ((X = iP(X)),
      X.forEach((oe) => {
        (oe.classList.remove(I.horizontalClass, I.verticalClass),
          oe.classList.add(
            a.isHorizontal() ? I.horizontalClass : I.verticalClass
          ));
      }));
  }),
    s('init', () => {
      a.params.scrollbar.enabled === !1 ? ie() : (q(), _(), R());
    }),
    s('update resize observerUpdate lock unlock changeDirection', () => {
      _();
    }),
    s('setTranslate', () => {
      R();
    }),
    s('setTransition', (I, X) => {
      D(X);
    }),
    s('enable disable', () => {
      const { el: I } = a.scrollbar;
      I &&
        I.classList[a.enabled ? 'remove' : 'add'](
          ...Bi(a.params.scrollbar.lockClass)
        );
    }),
    s('destroy', () => {
      Z();
    }));
  const W = () => {
      (a.el.classList.remove(...Bi(a.params.scrollbar.scrollbarDisabledClass)),
        a.scrollbar.el &&
          a.scrollbar.el.classList.remove(
            ...Bi(a.params.scrollbar.scrollbarDisabledClass)
          ),
        q(),
        _(),
        R());
    },
    ie = () => {
      (a.el.classList.add(...Bi(a.params.scrollbar.scrollbarDisabledClass)),
        a.scrollbar.el &&
          a.scrollbar.el.classList.add(
            ...Bi(a.params.scrollbar.scrollbarDisabledClass)
          ),
        Z());
    };
  Object.assign(a.scrollbar, {
    enable: W,
    disable: ie,
    updateSize: _,
    setTranslate: R,
    init: q,
    destroy: Z,
  });
}
function Yw(r) {
  let { swiper: a, extendParams: o, on: s, emit: u, params: d } = r;
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
  let f,
    v,
    m = d && d.autoplay ? d.autoplay.delay : 3e3,
    y = d && d.autoplay ? d.autoplay.delay : 3e3,
    b,
    T = new Date().getTime(),
    w,
    R,
    D,
    _,
    L,
    O,
    C;
  function M(me) {
    !a ||
      a.destroyed ||
      !a.wrapperEl ||
      (me.target === a.wrapperEl &&
        (a.wrapperEl.removeEventListener('transitionend', M),
        !(C || (me.detail && me.detail.bySwiperTouchMove)) && W()));
  }
  const k = () => {
      if (a.destroyed || !a.autoplay.running) return;
      a.autoplay.paused ? (w = !0) : w && ((y = b), (w = !1));
      const me = a.autoplay.paused ? b : T + y - new Date().getTime();
      ((a.autoplay.timeLeft = me),
        u('autoplayTimeLeft', me, me / m),
        (v = requestAnimationFrame(() => {
          k();
        })));
    },
    z = () => {
      let me;
      return (
        a.virtual && a.params.virtual.enabled
          ? (me = a.slides.find((Ge) =>
              Ge.classList.contains('swiper-slide-active')
            ))
          : (me = a.slides[a.activeIndex]),
        me ? parseInt(me.getAttribute('data-swiper-autoplay'), 10) : void 0
      );
    },
    Y = (me) => {
      if (a.destroyed || !a.autoplay.running) return;
      (cancelAnimationFrame(v), k());
      let _e = typeof me > 'u' ? a.params.autoplay.delay : me;
      ((m = a.params.autoplay.delay), (y = a.params.autoplay.delay));
      const Ge = z();
      (!Number.isNaN(Ge) &&
        Ge > 0 &&
        typeof me > 'u' &&
        ((_e = Ge), (m = Ge), (y = Ge)),
        (b = _e));
      const Nt = a.params.speed,
        we = () => {
          !a ||
            a.destroyed ||
            (a.params.autoplay.reverseDirection
              ? !a.isBeginning || a.params.loop || a.params.rewind
                ? (a.slidePrev(Nt, !0, !0), u('autoplay'))
                : a.params.autoplay.stopOnLastSlide ||
                  (a.slideTo(a.slides.length - 1, Nt, !0, !0), u('autoplay'))
              : !a.isEnd || a.params.loop || a.params.rewind
                ? (a.slideNext(Nt, !0, !0), u('autoplay'))
                : a.params.autoplay.stopOnLastSlide ||
                  (a.slideTo(0, Nt, !0, !0), u('autoplay')),
            a.params.cssMode &&
              ((T = new Date().getTime()),
              requestAnimationFrame(() => {
                Y();
              })));
        };
      return (
        _e > 0
          ? (clearTimeout(f),
            (f = setTimeout(() => {
              we();
            }, _e)))
          : requestAnimationFrame(() => {
              we();
            }),
        _e
      );
    },
    B = () => {
      ((T = new Date().getTime()),
        (a.autoplay.running = !0),
        Y(),
        u('autoplayStart'));
    },
    q = () => {
      ((a.autoplay.running = !1),
        clearTimeout(f),
        cancelAnimationFrame(v),
        u('autoplayStop'));
    },
    Z = (me, _e) => {
      if (a.destroyed || !a.autoplay.running) return;
      (clearTimeout(f), me || (O = !0));
      const Ge = () => {
        (u('autoplayPause'),
          a.params.autoplay.waitForTransition
            ? a.wrapperEl.addEventListener('transitionend', M)
            : W());
      };
      if (((a.autoplay.paused = !0), _e)) {
        (L && (b = a.params.autoplay.delay), (L = !1), Ge());
        return;
      }
      ((b = (b || a.params.autoplay.delay) - (new Date().getTime() - T)),
        !(a.isEnd && b < 0 && !a.params.loop) && (b < 0 && (b = 0), Ge()));
    },
    W = () => {
      (a.isEnd && b < 0 && !a.params.loop) ||
        a.destroyed ||
        !a.autoplay.running ||
        ((T = new Date().getTime()),
        O ? ((O = !1), Y(b)) : Y(),
        (a.autoplay.paused = !1),
        u('autoplayResume'));
    },
    ie = () => {
      if (a.destroyed || !a.autoplay.running) return;
      const me = Ir();
      (me.visibilityState === 'hidden' && ((O = !0), Z(!0)),
        me.visibilityState === 'visible' && W());
    },
    I = (me) => {
      me.pointerType === 'mouse' &&
        ((O = !0), (C = !0), !(a.animating || a.autoplay.paused) && Z(!0));
    },
    X = (me) => {
      me.pointerType === 'mouse' && ((C = !1), a.autoplay.paused && W());
    },
    oe = () => {
      a.params.autoplay.pauseOnMouseEnter &&
        (a.el.addEventListener('pointerenter', I),
        a.el.addEventListener('pointerleave', X));
    },
    fe = () => {
      a.el &&
        typeof a.el != 'string' &&
        (a.el.removeEventListener('pointerenter', I),
        a.el.removeEventListener('pointerleave', X));
    },
    ue = () => {
      Ir().addEventListener('visibilitychange', ie);
    },
    de = () => {
      Ir().removeEventListener('visibilitychange', ie);
    };
  (s('init', () => {
    a.params.autoplay.enabled && (oe(), ue(), B());
  }),
    s('destroy', () => {
      (fe(), de(), a.autoplay.running && q());
    }),
    s('_freeModeStaticRelease', () => {
      (D || O) && W();
    }),
    s('_freeModeNoMomentumRelease', () => {
      a.params.autoplay.disableOnInteraction ? q() : Z(!0, !0);
    }),
    s('beforeTransitionStart', (me, _e, Ge) => {
      a.destroyed ||
        !a.autoplay.running ||
        (Ge || !a.params.autoplay.disableOnInteraction ? Z(!0, !0) : q());
    }),
    s('sliderFirstMove', () => {
      if (!(a.destroyed || !a.autoplay.running)) {
        if (a.params.autoplay.disableOnInteraction) {
          q();
          return;
        }
        ((R = !0),
          (D = !1),
          (O = !1),
          (_ = setTimeout(() => {
            ((O = !0), (D = !0), Z(!0));
          }, 200)));
      }
    }),
    s('touchEnd', () => {
      if (!(a.destroyed || !a.autoplay.running || !R)) {
        if (
          (clearTimeout(_),
          clearTimeout(f),
          a.params.autoplay.disableOnInteraction)
        ) {
          ((D = !1), (R = !1));
          return;
        }
        (D && a.params.cssMode && W(), (D = !1), (R = !1));
      }
    }),
    s('slideChange', () => {
      a.destroyed || !a.autoplay.running || (L = !0);
    }),
    Object.assign(a.autoplay, { start: B, stop: q, pause: Z, resume: W }));
}
function jy(r) {
  let { swiper: a, extendParams: o, on: s } = r;
  o({ grid: { rows: 1, fill: 'column' } });
  let u, d, f, v;
  const m = () => {
      let _ = a.params.spaceBetween;
      return (
        typeof _ == 'string' && _.indexOf('%') >= 0
          ? (_ = (parseFloat(_.replace('%', '')) / 100) * a.size)
          : typeof _ == 'string' && (_ = parseFloat(_)),
        _
      );
    },
    y = (_) => {
      const { slidesPerView: L } = a.params,
        { rows: O, fill: C } = a.params.grid,
        M =
          a.virtual && a.params.virtual.enabled
            ? a.virtual.slides.length
            : _.length;
      ((f = Math.floor(M / O)),
        Math.floor(M / O) === M / O ? (u = M) : (u = Math.ceil(M / O) * O),
        L !== 'auto' && C === 'row' && (u = Math.max(u, L * O)),
        (d = u / O));
    },
    b = () => {
      a.slides &&
        a.slides.forEach((_) => {
          _.swiperSlideGridSet &&
            ((_.style.height = ''),
            (_.style[a.getDirectionLabel('margin-top')] = ''));
        });
    },
    T = (_, L, O) => {
      const { slidesPerGroup: C } = a.params,
        M = m(),
        { rows: k, fill: z } = a.params.grid,
        Y =
          a.virtual && a.params.virtual.enabled
            ? a.virtual.slides.length
            : O.length;
      let B, q, Z;
      if (z === 'row' && C > 1) {
        const W = Math.floor(_ / (C * k)),
          ie = _ - k * C * W,
          I = W === 0 ? C : Math.min(Math.ceil((Y - W * k * C) / k), C);
        ((Z = Math.floor(ie / I)),
          (q = ie - Z * I + W * C),
          (B = q + (Z * u) / k),
          (L.style.order = B));
      } else
        z === 'column'
          ? ((q = Math.floor(_ / k)),
            (Z = _ - q * k),
            (q > f || (q === f && Z === k - 1)) &&
              ((Z += 1), Z >= k && ((Z = 0), (q += 1))))
          : ((Z = Math.floor(_ / d)), (q = _ - Z * d));
      ((L.row = Z),
        (L.column = q),
        (L.style.height = `calc((100% - ${(k - 1) * M}px) / ${k})`),
        (L.style[a.getDirectionLabel('margin-top')] =
          Z !== 0 ? M && `${M}px` : ''),
        (L.swiperSlideGridSet = !0));
    },
    w = (_, L) => {
      const { centeredSlides: O, roundLengths: C } = a.params,
        M = m(),
        { rows: k } = a.params.grid;
      if (
        ((a.virtualSize = (_ + M) * u),
        (a.virtualSize = Math.ceil(a.virtualSize / k) - M),
        a.params.cssMode ||
          (a.wrapperEl.style[a.getDirectionLabel('width')] =
            `${a.virtualSize + M}px`),
        O)
      ) {
        const z = [];
        for (let Y = 0; Y < L.length; Y += 1) {
          let B = L[Y];
          (C && (B = Math.floor(B)), L[Y] < a.virtualSize + L[0] && z.push(B));
        }
        (L.splice(0, L.length), L.push(...z));
      }
    },
    R = () => {
      v = a.params.grid && a.params.grid.rows > 1;
    },
    D = () => {
      const { params: _, el: L } = a,
        O = _.grid && _.grid.rows > 1;
      (v && !O
        ? (L.classList.remove(
            `${_.containerModifierClass}grid`,
            `${_.containerModifierClass}grid-column`
          ),
          (f = 1),
          a.emitContainerClasses())
        : !v &&
          O &&
          (L.classList.add(`${_.containerModifierClass}grid`),
          _.grid.fill === 'column' &&
            L.classList.add(`${_.containerModifierClass}grid-column`),
          a.emitContainerClasses()),
        (v = O));
    };
  (s('init', R),
    s('update', D),
    (a.grid = {
      initSlides: y,
      unsetSlides: b,
      updateSlide: T,
      updateWrapperSize: w,
    }));
}
const _z = yt.div.withConfig({
    displayName: 'Card__CardWrapper',
    componentId: 'sc-h41vf0-0',
  })([
    'max-width:340px;background:#fff;border-radius:16px;padding:16px;margin:12px auto;box-shadow:0 8px 16px rgba(0,0,0,0.1);transition:transform 0.2s ease,box-shadow 0.3s ease;&:hover{transform:translateY(-4px);box-shadow:0 12px 24px rgba(0,0,0,0.15);}',
  ]),
  Rz = yt.img.withConfig({
    displayName: 'Card__StyledImg',
    componentId: 'sc-h41vf0-1',
  })(['width:100%;border-radius:12px;display:block;margin-bottom:12px;']),
  Dz = yt.p.withConfig({
    displayName: 'Card__ProductId',
    componentId: 'sc-h41vf0-2',
  })(['font-size:0.8rem;color:#888;margin:4px 0;']),
  Oz = yt.p.withConfig({
    displayName: 'Card__ProductName',
    componentId: 'sc-h41vf0-3',
  })(['font-size:1.2rem;font-weight:600;color:#333;margin:4px 0;']),
  Az = yt.p.withConfig({
    displayName: 'Card__ProductPrice',
    componentId: 'sc-h41vf0-4',
  })(['font-size:1.1rem;font-weight:bold;color:#007b55;margin:4px 0 12px 0;']);
function $y({ product: r }) {
  return Vt(_z, {
    children: [
      he(Rz, { src: r.img[0], alt: r.name }),
      Vt(Dz, { children: ['ID: ', r.id] }),
      he(Oz, { children: r.name }),
      Vt(Az, { children: ['$', r.price] }),
    ],
  });
}
const Mz = yt('div').withConfig({
  displayName: 'Cards__StyledBaseField',
  componentId: 'sc-in0nuh-0',
})([
  'width:100%;max-width:1200px;margin:0 auto;padding:1rem;box-sizing:border-box;.swiper{width:100%;height:auto;}.swiper-slide{display:flex;justify-content:center;align-items:center;height:100%;}.swiper-scrollbar{margin-top:8px;}',
]);
function Lz({
  products: r,
  card: a,
  rows: o,
  setCard: s,
  setIsOpenModal: u,
  isOpenModal: d,
}) {
  let f = 3,
    v = 1;
  switch (o) {
    case 3:
      ((v = 1), (f = 3));
      break;
    case 2:
      ((v = 2), (f = 2));
      break;
    case 1:
      ((v = 3), (f = 1));
      break;
    default:
      v = 1;
  }
  function m(y) {
    const b = r.find((T) => T.id === y) ?? {
      id: '',
      name: '',
      description: '',
      price: '',
      img: [''],
    };
    (s(b), u(!0));
  }
  return he(Mz, {
    children: he($d, {
      scrollbar: { hide: !0 },
      modules: [Hy, jy],
      spaceBetween: 10,
      slidesPerView: v,
      grid: { rows: f, fill: 'row' },
      children: r.map((y) =>
        he(
          Yd,
          {
            onClick: () => m(y.id),
            children: he($y, {
              product: {
                id: y.id ?? '',
                name: y.name ?? '',
                description: y.description ?? '',
                price: y.price ?? '',
                img: y.img ?? '',
              },
            }),
          },
          y.id
        )
      ),
    }),
  });
}
const kz = yt('div').withConfig({
  displayName: 'Catalog__StyledBaseField',
  componentId: 'sc-lby759-0',
})(['width:90%;']);
function Nz({
  products: r,
  card: a,
  rows: o,
  setCard: s,
  setProductState: u,
  setIsOpenModal: d,
  isOpenModal: f,
  isAuth: v,
  setAuth: m,
  token: y,
  isExpired: b,
}) {
  return Vt(kz, {
    children: [
      he('h2', { children: 'Catalog' }),
      he(Lz, {
        products: r,
        card: a,
        rows: o,
        setCard: s,
        setProductState: u,
        setIsOpenModal: d,
        isOpenModal: f,
        url: '',
        endPoint: '',
        isAuth: v,
        setAuth: m,
        token: y,
        isExpired: b,
      }),
    ],
  });
}
var Ju = (r) => r.type === 'checkbox',
  Mo = (r) => r instanceof Date,
  or = (r) => r == null;
const Gw = (r) => typeof r == 'object';
var dn = (r) => !or(r) && !Array.isArray(r) && Gw(r) && !Mo(r),
  Pz = (r) =>
    dn(r) && r.target ? (Ju(r.target) ? r.target.checked : r.target.value) : r,
  zz = (r) => r.substring(0, r.search(/\.\d+(\.|$)/)) || r,
  Fz = (r, a) => r.has(zz(a)),
  Uz = (r) => {
    const a = r.constructor && r.constructor.prototype;
    return dn(a) && a.hasOwnProperty('isPrototypeOf');
  },
  Yy =
    typeof window < 'u' &&
    typeof window.HTMLElement < 'u' &&
    typeof document < 'u';
function kn(r) {
  let a;
  const o = Array.isArray(r),
    s = typeof FileList < 'u' ? r instanceof FileList : !1;
  if (r instanceof Date) a = new Date(r);
  else if (!(Yy && (r instanceof Blob || s)) && (o || dn(r)))
    if (((a = o ? [] : {}), !o && !Uz(r))) a = r;
    else for (const u in r) r.hasOwnProperty(u) && (a[u] = kn(r[u]));
  else return r;
  return a;
}
var Gd = (r) => /^\w*$/.test(r),
  yn = (r) => r === void 0,
  Gy = (r) => (Array.isArray(r) ? r.filter(Boolean) : []),
  Wy = (r) => Gy(r.replace(/["|']|\]/g, '').split(/\.|\[/)),
  Fe = (r, a, o) => {
    if (!a || !dn(r)) return o;
    const s = (Gd(a) ? [a] : Wy(a)).reduce((u, d) => (or(u) ? u : u[d]), r);
    return yn(s) || s === r ? (yn(r[a]) ? o : r[a]) : s;
  },
  wa = (r) => typeof r == 'boolean',
  Zt = (r, a, o) => {
    let s = -1;
    const u = Gd(a) ? [a] : Wy(a),
      d = u.length,
      f = d - 1;
    for (; ++s < d; ) {
      const v = u[s];
      let m = o;
      if (s !== f) {
        const y = r[v];
        m = dn(y) || Array.isArray(y) ? y : isNaN(+u[s + 1]) ? {} : [];
      }
      if (v === '__proto__' || v === 'constructor' || v === 'prototype') return;
      ((r[v] = m), (r = r[v]));
    }
  };
const NE = { BLUR: 'blur', FOCUS_OUT: 'focusout', CHANGE: 'change' },
  ra = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
    onTouched: 'onTouched',
    all: 'all',
  },
  ti = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate',
  },
  Iz = Ue.createContext(null);
Iz.displayName = 'HookFormContext';
var Vz = (r, a, o, s = !0) => {
  const u = { defaultValues: a._defaultValues };
  for (const d in r)
    Object.defineProperty(u, d, {
      get: () => {
        const f = d;
        return (
          a._proxyFormState[f] !== ra.all &&
            (a._proxyFormState[f] = !s || ra.all),
          o && (o[f] = !0),
          r[f]
        );
      },
    });
  return u;
};
const Bz = typeof window < 'u' ? $.useLayoutEffect : $.useEffect;
var xa = (r) => typeof r == 'string',
  Hz = (r, a, o, s, u) =>
    xa(r)
      ? (s && a.watch.add(r), Fe(o, r, u))
      : Array.isArray(r)
        ? r.map((d) => (s && a.watch.add(d), Fe(o, d)))
        : (s && (a.watchAll = !0), o),
  jz = (r, a, o, s, u) =>
    a
      ? {
          ...o[r],
          types: { ...(o[r] && o[r].types ? o[r].types : {}), [s]: u || !0 },
        }
      : {},
  Vu = (r) => (Array.isArray(r) ? r : [r]),
  PE = () => {
    let r = [];
    return {
      get observers() {
        return r;
      },
      next: (u) => {
        for (const d of r) d.next && d.next(u);
      },
      subscribe: (u) => (
        r.push(u),
        {
          unsubscribe: () => {
            r = r.filter((d) => d !== u);
          },
        }
      ),
      unsubscribe: () => {
        r = [];
      },
    };
  },
  Cy = (r) => or(r) || !Gw(r);
function Hi(r, a, o = new WeakSet()) {
  if (Cy(r) || Cy(a)) return r === a;
  if (Mo(r) && Mo(a)) return r.getTime() === a.getTime();
  const s = Object.keys(r),
    u = Object.keys(a);
  if (s.length !== u.length) return !1;
  if (o.has(r) || o.has(a)) return !0;
  (o.add(r), o.add(a));
  for (const d of s) {
    const f = r[d];
    if (!u.includes(d)) return !1;
    if (d !== 'ref') {
      const v = a[d];
      if (
        (Mo(f) && Mo(v)) ||
        (dn(f) && dn(v)) ||
        (Array.isArray(f) && Array.isArray(v))
          ? !Hi(f, v, o)
          : f !== v
      )
        return !1;
    }
  }
  return !0;
}
var mr = (r) => dn(r) && !Object.keys(r).length,
  qy = (r) => r.type === 'file',
  aa = (r) => typeof r == 'function',
  Vd = (r) => {
    if (!Yy) return !1;
    const a = r ? r.ownerDocument : 0;
    return (
      r instanceof
      (a && a.defaultView ? a.defaultView.HTMLElement : HTMLElement)
    );
  },
  Ww = (r) => r.type === 'select-multiple',
  Xy = (r) => r.type === 'radio',
  $z = (r) => Xy(r) || Ju(r),
  dy = (r) => Vd(r) && r.isConnected;
function Yz(r, a) {
  const o = a.slice(0, -1).length;
  let s = 0;
  for (; s < o; ) r = yn(r) ? s++ : r[a[s++]];
  return r;
}
function Gz(r) {
  for (const a in r) if (r.hasOwnProperty(a) && !yn(r[a])) return !1;
  return !0;
}
function mn(r, a) {
  const o = Array.isArray(a) ? a : Gd(a) ? [a] : Wy(a),
    s = o.length === 1 ? r : Yz(r, o),
    u = o.length - 1,
    d = o[u];
  return (
    s && delete s[d],
    u !== 0 &&
      ((dn(s) && mr(s)) || (Array.isArray(s) && Gz(s))) &&
      mn(r, o.slice(0, -1)),
    r
  );
}
var qw = (r) => {
  for (const a in r) if (aa(r[a])) return !0;
  return !1;
};
function Bd(r, a = {}) {
  const o = Array.isArray(r);
  if (dn(r) || o)
    for (const s in r)
      Array.isArray(r[s]) || (dn(r[s]) && !qw(r[s]))
        ? ((a[s] = Array.isArray(r[s]) ? [] : {}), Bd(r[s], a[s]))
        : or(r[s]) || (a[s] = !0);
  return a;
}
function Xw(r, a, o) {
  const s = Array.isArray(r);
  if (dn(r) || s)
    for (const u in r)
      Array.isArray(r[u]) || (dn(r[u]) && !qw(r[u]))
        ? yn(a) || Cy(o[u])
          ? (o[u] = Array.isArray(r[u]) ? Bd(r[u], []) : { ...Bd(r[u]) })
          : Xw(r[u], or(a) ? {} : a[u], o[u])
        : (o[u] = !Hi(r[u], a[u]));
  return o;
}
var zu = (r, a) => Xw(r, a, Bd(a));
const zE = { value: !1, isValid: !1 },
  FE = { value: !0, isValid: !0 };
var Qw = (r) => {
    if (Array.isArray(r)) {
      if (r.length > 1) {
        const a = r
          .filter((o) => o && o.checked && !o.disabled)
          .map((o) => o.value);
        return { value: a, isValid: !!a.length };
      }
      return r[0].checked && !r[0].disabled
        ? r[0].attributes && !yn(r[0].attributes.value)
          ? yn(r[0].value) || r[0].value === ''
            ? FE
            : { value: r[0].value, isValid: !0 }
          : FE
        : zE;
    }
    return zE;
  },
  Kw = (r, { valueAsNumber: a, valueAsDate: o, setValueAs: s }) =>
    yn(r)
      ? r
      : a
        ? r === ''
          ? NaN
          : r && +r
        : o && xa(r)
          ? new Date(r)
          : s
            ? s(r)
            : r;
const UE = { isValid: !1, value: null };
var Jw = (r) =>
  Array.isArray(r)
    ? r.reduce(
        (a, o) =>
          o && o.checked && !o.disabled ? { isValid: !0, value: o.value } : a,
        UE
      )
    : UE;
function IE(r) {
  const a = r.ref;
  return qy(a)
    ? a.files
    : Xy(a)
      ? Jw(r.refs).value
      : Ww(a)
        ? [...a.selectedOptions].map(({ value: o }) => o)
        : Ju(a)
          ? Qw(r.refs).value
          : Kw(yn(a.value) ? r.ref.value : a.value, r);
}
var Wz = (r, a, o, s) => {
    const u = {};
    for (const d of r) {
      const f = Fe(a, d);
      f && Zt(u, d, f._f);
    }
    return {
      criteriaMode: o,
      names: [...r],
      fields: u,
      shouldUseNativeValidation: s,
    };
  },
  Hd = (r) => r instanceof RegExp,
  Fu = (r) =>
    yn(r)
      ? r
      : Hd(r)
        ? r.source
        : dn(r)
          ? Hd(r.value)
            ? r.value.source
            : r.value
          : r,
  VE = (r) => ({
    isOnSubmit: !r || r === ra.onSubmit,
    isOnBlur: r === ra.onBlur,
    isOnChange: r === ra.onChange,
    isOnAll: r === ra.all,
    isOnTouch: r === ra.onTouched,
  });
const BE = 'AsyncFunction';
var qz = (r) =>
    !!r &&
    !!r.validate &&
    !!(
      (aa(r.validate) && r.validate.constructor.name === BE) ||
      (dn(r.validate) &&
        Object.values(r.validate).find((a) => a.constructor.name === BE))
    ),
  Xz = (r) =>
    r.mount &&
    (r.required ||
      r.min ||
      r.max ||
      r.maxLength ||
      r.minLength ||
      r.pattern ||
      r.validate),
  HE = (r, a, o) =>
    !o &&
    (a.watchAll ||
      a.watch.has(r) ||
      [...a.watch].some(
        (s) => r.startsWith(s) && /^\.\w+/.test(r.slice(s.length))
      ));
const Bu = (r, a, o, s) => {
  for (const u of o || Object.keys(r)) {
    const d = Fe(r, u);
    if (d) {
      const { _f: f, ...v } = d;
      if (f) {
        if (f.refs && f.refs[0] && a(f.refs[0], u) && !s) return !0;
        if (f.ref && a(f.ref, f.name) && !s) return !0;
        if (Bu(v, a)) break;
      } else if (dn(v) && Bu(v, a)) break;
    }
  }
};
function jE(r, a, o) {
  const s = Fe(r, o);
  if (s || Gd(o)) return { error: s, name: o };
  const u = o.split('.');
  for (; u.length; ) {
    const d = u.join('.'),
      f = Fe(a, d),
      v = Fe(r, d);
    if (f && !Array.isArray(f) && o !== d) return { name: o };
    if (v && v.type) return { name: d, error: v };
    if (v && v.root && v.root.type) return { name: `${d}.root`, error: v.root };
    u.pop();
  }
  return { name: o };
}
var Qz = (r, a, o, s) => {
    o(r);
    const { name: u, ...d } = r;
    return (
      mr(d) ||
      Object.keys(d).length >= Object.keys(a).length ||
      Object.keys(d).find((f) => a[f] === (!s || ra.all))
    );
  },
  Kz = (r, a, o) =>
    !r ||
    !a ||
    r === a ||
    Vu(r).some((s) => s && (o ? s === a : s.startsWith(a) || a.startsWith(s))),
  Jz = (r, a, o, s, u) =>
    u.isOnAll
      ? !1
      : !o && u.isOnTouch
        ? !(a || r)
        : (o ? s.isOnBlur : u.isOnBlur)
          ? !r
          : (o ? s.isOnChange : u.isOnChange)
            ? r
            : !0,
  Zz = (r, a) => !Gy(Fe(r, a)).length && mn(r, a),
  eF = (r, a, o) => {
    const s = Vu(Fe(r, o));
    return (Zt(s, 'root', a[o]), Zt(r, o, s), r);
  },
  Ad = (r) => xa(r);
function $E(r, a, o = 'validate') {
  if (Ad(r) || (Array.isArray(r) && r.every(Ad)) || (wa(r) && !r))
    return { type: o, message: Ad(r) ? r : '', ref: a };
}
var zs = (r) => (dn(r) && !Hd(r) ? r : { value: r, message: '' }),
  YE = async (r, a, o, s, u, d) => {
    const {
        ref: f,
        refs: v,
        required: m,
        maxLength: y,
        minLength: b,
        min: T,
        max: w,
        pattern: R,
        validate: D,
        name: _,
        valueAsNumber: L,
        mount: O,
      } = r._f,
      C = Fe(o, _);
    if (!O || a.has(_)) return {};
    const M = v ? v[0] : f,
      k = (I) => {
        u &&
          M.reportValidity &&
          (M.setCustomValidity(wa(I) ? '' : I || ''), M.reportValidity());
      },
      z = {},
      Y = Xy(f),
      B = Ju(f),
      q = Y || B,
      Z =
        ((L || qy(f)) && yn(f.value) && yn(C)) ||
        (Vd(f) && f.value === '') ||
        C === '' ||
        (Array.isArray(C) && !C.length),
      W = jz.bind(null, _, s, z),
      ie = (I, X, oe, fe = ti.maxLength, ue = ti.minLength) => {
        const de = I ? X : oe;
        z[_] = {
          type: I ? fe : ue,
          message: de,
          ref: f,
          ...W(I ? fe : ue, de),
        };
      };
    if (
      d
        ? !Array.isArray(C) || !C.length
        : m &&
          ((!q && (Z || or(C))) ||
            (wa(C) && !C) ||
            (B && !Qw(v).isValid) ||
            (Y && !Jw(v).isValid))
    ) {
      const { value: I, message: X } = Ad(m)
        ? { value: !!m, message: m }
        : zs(m);
      if (
        I &&
        ((z[_] = {
          type: ti.required,
          message: X,
          ref: M,
          ...W(ti.required, X),
        }),
        !s)
      )
        return (k(X), z);
    }
    if (!Z && (!or(T) || !or(w))) {
      let I, X;
      const oe = zs(w),
        fe = zs(T);
      if (!or(C) && !isNaN(C)) {
        const ue = f.valueAsNumber || (C && +C);
        (or(oe.value) || (I = ue > oe.value),
          or(fe.value) || (X = ue < fe.value));
      } else {
        const ue = f.valueAsDate || new Date(C),
          de = (Ge) => new Date(new Date().toDateString() + ' ' + Ge),
          me = f.type == 'time',
          _e = f.type == 'week';
        (xa(oe.value) &&
          C &&
          (I = me
            ? de(C) > de(oe.value)
            : _e
              ? C > oe.value
              : ue > new Date(oe.value)),
          xa(fe.value) &&
            C &&
            (X = me
              ? de(C) < de(fe.value)
              : _e
                ? C < fe.value
                : ue < new Date(fe.value)));
      }
      if ((I || X) && (ie(!!I, oe.message, fe.message, ti.max, ti.min), !s))
        return (k(z[_].message), z);
    }
    if ((y || b) && !Z && (xa(C) || (d && Array.isArray(C)))) {
      const I = zs(y),
        X = zs(b),
        oe = !or(I.value) && C.length > +I.value,
        fe = !or(X.value) && C.length < +X.value;
      if ((oe || fe) && (ie(oe, I.message, X.message), !s))
        return (k(z[_].message), z);
    }
    if (R && !Z && xa(C)) {
      const { value: I, message: X } = zs(R);
      if (
        Hd(I) &&
        !C.match(I) &&
        ((z[_] = { type: ti.pattern, message: X, ref: f, ...W(ti.pattern, X) }),
        !s)
      )
        return (k(X), z);
    }
    if (D) {
      if (aa(D)) {
        const I = await D(C, o),
          X = $E(I, M);
        if (X && ((z[_] = { ...X, ...W(ti.validate, X.message) }), !s))
          return (k(X.message), z);
      } else if (dn(D)) {
        let I = {};
        for (const X in D) {
          if (!mr(I) && !s) break;
          const oe = $E(await D[X](C, o), M, X);
          oe &&
            ((I = { ...oe, ...W(X, oe.message) }),
            k(oe.message),
            s && (z[_] = I));
        }
        if (!mr(I) && ((z[_] = { ref: M, ...I }), !s)) return z;
      }
    }
    return (k(!0), z);
  };
const tF = {
  mode: ra.onSubmit,
  reValidateMode: ra.onChange,
  shouldFocusError: !0,
};
function nF(r = {}) {
  let a = { ...tF, ...r },
    o = {
      submitCount: 0,
      isDirty: !1,
      isReady: !1,
      isLoading: aa(a.defaultValues),
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
    u =
      dn(a.defaultValues) || dn(a.values)
        ? kn(a.defaultValues || a.values) || {}
        : {},
    d = a.shouldUnregister ? {} : kn(u),
    f = { action: !1, mount: !1, watch: !1 },
    v = {
      mount: new Set(),
      disabled: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    m,
    y = 0;
  const b = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1,
  };
  let T = { ...b };
  const w = { array: PE(), state: PE() },
    R = a.criteriaMode === ra.all,
    D = (A) => (V) => {
      (clearTimeout(y), (y = setTimeout(A, V)));
    },
    _ = async (A) => {
      if (!a.disabled && (b.isValid || T.isValid || A)) {
        const V = a.resolver ? mr((await B()).errors) : await Z(s, !0);
        V !== o.isValid && w.state.next({ isValid: V });
      }
    },
    L = (A, V) => {
      !a.disabled &&
        (b.isValidating ||
          b.validatingFields ||
          T.isValidating ||
          T.validatingFields) &&
        ((A || Array.from(v.mount)).forEach((ee) => {
          ee &&
            (V ? Zt(o.validatingFields, ee, V) : mn(o.validatingFields, ee));
        }),
        w.state.next({
          validatingFields: o.validatingFields,
          isValidating: !mr(o.validatingFields),
        }));
    },
    O = (A, V = [], ee, ge, te = !0, se = !0) => {
      if (ge && ee && !a.disabled) {
        if (((f.action = !0), se && Array.isArray(Fe(s, A)))) {
          const Me = ee(Fe(s, A), ge.argA, ge.argB);
          te && Zt(s, A, Me);
        }
        if (se && Array.isArray(Fe(o.errors, A))) {
          const Me = ee(Fe(o.errors, A), ge.argA, ge.argB);
          (te && Zt(o.errors, A, Me), Zz(o.errors, A));
        }
        if (
          (b.touchedFields || T.touchedFields) &&
          se &&
          Array.isArray(Fe(o.touchedFields, A))
        ) {
          const Me = ee(Fe(o.touchedFields, A), ge.argA, ge.argB);
          te && Zt(o.touchedFields, A, Me);
        }
        ((b.dirtyFields || T.dirtyFields) && (o.dirtyFields = zu(u, d)),
          w.state.next({
            name: A,
            isDirty: ie(A, V),
            dirtyFields: o.dirtyFields,
            errors: o.errors,
            isValid: o.isValid,
          }));
      } else Zt(d, A, V);
    },
    C = (A, V) => {
      (Zt(o.errors, A, V), w.state.next({ errors: o.errors }));
    },
    M = (A) => {
      ((o.errors = A), w.state.next({ errors: o.errors, isValid: !1 }));
    },
    k = (A, V, ee, ge) => {
      const te = Fe(s, A);
      if (te) {
        const se = Fe(d, A, yn(ee) ? Fe(u, A) : ee);
        (yn(se) || (ge && ge.defaultChecked) || V
          ? Zt(d, A, V ? se : IE(te._f))
          : oe(A, se),
          f.mount && _());
      }
    },
    z = (A, V, ee, ge, te) => {
      let se = !1,
        Me = !1;
      const je = { name: A };
      if (!a.disabled) {
        if (!ee || ge) {
          (b.isDirty || T.isDirty) &&
            ((Me = o.isDirty),
            (o.isDirty = je.isDirty = ie()),
            (se = Me !== je.isDirty));
          const tt = Hi(Fe(u, A), V);
          ((Me = !!Fe(o.dirtyFields, A)),
            tt ? mn(o.dirtyFields, A) : Zt(o.dirtyFields, A, !0),
            (je.dirtyFields = o.dirtyFields),
            (se = se || ((b.dirtyFields || T.dirtyFields) && Me !== !tt)));
        }
        if (ee) {
          const tt = Fe(o.touchedFields, A);
          tt ||
            (Zt(o.touchedFields, A, ee),
            (je.touchedFields = o.touchedFields),
            (se = se || ((b.touchedFields || T.touchedFields) && tt !== ee)));
        }
        se && te && w.state.next(je);
      }
      return se ? je : {};
    },
    Y = (A, V, ee, ge) => {
      const te = Fe(o.errors, A),
        se = (b.isValid || T.isValid) && wa(V) && o.isValid !== V;
      if (
        (a.delayError && ee
          ? ((m = D(() => C(A, ee))), m(a.delayError))
          : (clearTimeout(y),
            (m = null),
            ee ? Zt(o.errors, A, ee) : mn(o.errors, A)),
        (ee ? !Hi(te, ee) : te) || !mr(ge) || se)
      ) {
        const Me = {
          ...ge,
          ...(se && wa(V) ? { isValid: V } : {}),
          errors: o.errors,
          name: A,
        };
        ((o = { ...o, ...Me }), w.state.next(Me));
      }
    },
    B = async (A) => {
      L(A, !0);
      const V = await a.resolver(
        d,
        a.context,
        Wz(A || v.mount, s, a.criteriaMode, a.shouldUseNativeValidation)
      );
      return (L(A), V);
    },
    q = async (A) => {
      const { errors: V } = await B(A);
      if (A)
        for (const ee of A) {
          const ge = Fe(V, ee);
          ge ? Zt(o.errors, ee, ge) : mn(o.errors, ee);
        }
      else o.errors = V;
      return V;
    },
    Z = async (A, V, ee = { valid: !0 }) => {
      for (const ge in A) {
        const te = A[ge];
        if (te) {
          const { _f: se, ...Me } = te;
          if (se) {
            const je = v.array.has(se.name),
              tt = te._f && qz(te._f);
            tt && b.validatingFields && L([ge], !0);
            const an = await YE(
              te,
              v.disabled,
              d,
              R,
              a.shouldUseNativeValidation && !V,
              je
            );
            if (
              (tt && b.validatingFields && L([ge]),
              an[se.name] && ((ee.valid = !1), V))
            )
              break;
            !V &&
              (Fe(an, se.name)
                ? je
                  ? eF(o.errors, an, se.name)
                  : Zt(o.errors, se.name, an[se.name])
                : mn(o.errors, se.name));
          }
          !mr(Me) && (await Z(Me, V, ee));
        }
      }
      return ee.valid;
    },
    W = () => {
      for (const A of v.unMount) {
        const V = Fe(s, A);
        V &&
          (V._f.refs ? V._f.refs.every((ee) => !dy(ee)) : !dy(V._f.ref)) &&
          Ze(A);
      }
      v.unMount = new Set();
    },
    ie = (A, V) => !a.disabled && (A && V && Zt(d, A, V), !Hi(Ge(), u)),
    I = (A, V, ee) =>
      Hz(
        A,
        v,
        { ...(f.mount ? d : yn(V) ? u : xa(A) ? { [A]: V } : V) },
        ee,
        V
      ),
    X = (A) =>
      Gy(Fe(f.mount ? d : u, A, a.shouldUnregister ? Fe(u, A, []) : [])),
    oe = (A, V, ee = {}) => {
      const ge = Fe(s, A);
      let te = V;
      if (ge) {
        const se = ge._f;
        se &&
          (!se.disabled && Zt(d, A, Kw(V, se)),
          (te = Vd(se.ref) && or(V) ? '' : V),
          Ww(se.ref)
            ? [...se.ref.options].forEach(
                (Me) => (Me.selected = te.includes(Me.value))
              )
            : se.refs
              ? Ju(se.ref)
                ? se.refs.forEach((Me) => {
                    (!Me.defaultChecked || !Me.disabled) &&
                      (Array.isArray(te)
                        ? (Me.checked = !!te.find((je) => je === Me.value))
                        : (Me.checked = te === Me.value || !!te));
                  })
                : se.refs.forEach((Me) => (Me.checked = Me.value === te))
              : qy(se.ref)
                ? (se.ref.value = '')
                : ((se.ref.value = te),
                  se.ref.type || w.state.next({ name: A, values: kn(d) })));
      }
      ((ee.shouldDirty || ee.shouldTouch) &&
        z(A, te, ee.shouldTouch, ee.shouldDirty, !0),
        ee.shouldValidate && _e(A));
    },
    fe = (A, V, ee) => {
      for (const ge in V) {
        if (!V.hasOwnProperty(ge)) return;
        const te = V[ge],
          se = A + '.' + ge,
          Me = Fe(s, se);
        (v.array.has(A) || dn(te) || (Me && !Me._f)) && !Mo(te)
          ? fe(se, te, ee)
          : oe(se, te, ee);
      }
    },
    ue = (A, V, ee = {}) => {
      const ge = Fe(s, A),
        te = v.array.has(A),
        se = kn(V);
      (Zt(d, A, se),
        te
          ? (w.array.next({ name: A, values: kn(d) }),
            (b.isDirty || b.dirtyFields || T.isDirty || T.dirtyFields) &&
              ee.shouldDirty &&
              w.state.next({
                name: A,
                dirtyFields: zu(u, d),
                isDirty: ie(A, se),
              }))
          : ge && !ge._f && !or(se)
            ? fe(A, se, ee)
            : oe(A, se, ee),
        HE(A, v) && w.state.next({ ...o }),
        w.state.next({ name: f.mount ? A : void 0, values: kn(d) }));
    },
    de = async (A) => {
      f.mount = !0;
      const V = A.target;
      let ee = V.name,
        ge = !0;
      const te = Fe(s, ee),
        se = (tt) => {
          ge =
            Number.isNaN(tt) ||
            (Mo(tt) && isNaN(tt.getTime())) ||
            Hi(tt, Fe(d, ee, tt));
        },
        Me = VE(a.mode),
        je = VE(a.reValidateMode);
      if (te) {
        let tt, an;
        const lr = V.type ? IE(te._f) : Pz(A),
          Ee = A.type === NE.BLUR || A.type === NE.FOCUS_OUT,
          Ie =
            (!Xz(te._f) && !a.resolver && !Fe(o.errors, ee) && !te._f.deps) ||
            Jz(Ee, Fe(o.touchedFields, ee), o.isSubmitted, je, Me),
          lt = HE(ee, v, Ee);
        (Zt(d, ee, lr),
          Ee
            ? (te._f.onBlur && te._f.onBlur(A), m && m(0))
            : te._f.onChange && te._f.onChange(A));
        const xt = z(ee, lr, Ee),
          Mt = !mr(xt) || lt;
        if (
          (!Ee && w.state.next({ name: ee, type: A.type, values: kn(d) }), Ie)
        )
          return (
            (b.isValid || T.isValid) &&
              (a.mode === 'onBlur' ? Ee && _() : Ee || _()),
            Mt && w.state.next({ name: ee, ...(lt ? {} : xt) })
          );
        if ((!Ee && lt && w.state.next({ ...o }), a.resolver)) {
          const { errors: on } = await B([ee]);
          if ((se(lr), ge)) {
            const en = jE(o.errors, s, ee),
              Nn = jE(on, s, en.name || ee);
            ((tt = Nn.error), (ee = Nn.name), (an = mr(on)));
          }
        } else
          (L([ee], !0),
            (tt = (await YE(te, v.disabled, d, R, a.shouldUseNativeValidation))[
              ee
            ]),
            L([ee]),
            se(lr),
            ge &&
              (tt
                ? (an = !1)
                : (b.isValid || T.isValid) && (an = await Z(s, !0))));
        ge && (te._f.deps && _e(te._f.deps), Y(ee, an, tt, xt));
      }
    },
    me = (A, V) => {
      if (Fe(o.errors, V) && A.focus) return (A.focus(), 1);
    },
    _e = async (A, V = {}) => {
      let ee, ge;
      const te = Vu(A);
      if (a.resolver) {
        const se = await q(yn(A) ? A : te);
        ((ee = mr(se)), (ge = A ? !te.some((Me) => Fe(se, Me)) : ee));
      } else
        A
          ? ((ge = (
              await Promise.all(
                te.map(async (se) => {
                  const Me = Fe(s, se);
                  return await Z(Me && Me._f ? { [se]: Me } : Me);
                })
              )
            ).every(Boolean)),
            !(!ge && !o.isValid) && _())
          : (ge = ee = await Z(s));
      return (
        w.state.next({
          ...(!xa(A) || ((b.isValid || T.isValid) && ee !== o.isValid)
            ? {}
            : { name: A }),
          ...(a.resolver || !A ? { isValid: ee } : {}),
          errors: o.errors,
        }),
        V.shouldFocus && !ge && Bu(s, me, A ? te : v.mount),
        ge
      );
    },
    Ge = (A) => {
      const V = { ...(f.mount ? d : u) };
      return yn(A) ? V : xa(A) ? Fe(V, A) : A.map((ee) => Fe(V, ee));
    },
    Nt = (A, V) => ({
      invalid: !!Fe((V || o).errors, A),
      isDirty: !!Fe((V || o).dirtyFields, A),
      error: Fe((V || o).errors, A),
      isValidating: !!Fe(o.validatingFields, A),
      isTouched: !!Fe((V || o).touchedFields, A),
    }),
    we = (A) => {
      (A && Vu(A).forEach((V) => mn(o.errors, V)),
        w.state.next({ errors: A ? o.errors : {} }));
    },
    Ce = (A, V, ee) => {
      const ge = (Fe(s, A, { _f: {} })._f || {}).ref,
        te = Fe(o.errors, A) || {},
        { ref: se, message: Me, type: je, ...tt } = te;
      (Zt(o.errors, A, { ...tt, ...V, ref: ge }),
        w.state.next({ name: A, errors: o.errors, isValid: !1 }),
        ee && ee.shouldFocus && ge && ge.focus && ge.focus());
    },
    Re = (A, V) =>
      aa(A)
        ? w.state.subscribe({ next: (ee) => A(I(void 0, V), ee) })
        : I(A, V, !0),
    Ve = (A) =>
      w.state.subscribe({
        next: (V) => {
          Kz(A.name, V.name, A.exact) &&
            Qz(V, A.formState || b, We, A.reRenderRoot) &&
            A.callback({ values: { ...d }, ...o, ...V });
        },
      }).unsubscribe,
    Q = (A) => (
      (f.mount = !0),
      (T = { ...T, ...A.formState }),
      Ve({ ...A, formState: T })
    ),
    Ze = (A, V = {}) => {
      for (const ee of A ? Vu(A) : v.mount)
        (v.mount.delete(ee),
          v.array.delete(ee),
          V.keepValue || (mn(s, ee), mn(d, ee)),
          !V.keepError && mn(o.errors, ee),
          !V.keepDirty && mn(o.dirtyFields, ee),
          !V.keepTouched && mn(o.touchedFields, ee),
          !V.keepIsValidating && mn(o.validatingFields, ee),
          !a.shouldUnregister && !V.keepDefaultValue && mn(u, ee));
      (w.state.next({ values: kn(d) }),
        w.state.next({ ...o, ...(V.keepDirty ? { isDirty: ie() } : {}) }),
        !V.keepIsValid && _());
    },
    be = ({ disabled: A, name: V }) => {
      ((wa(A) && f.mount) || A || v.disabled.has(V)) &&
        (A ? v.disabled.add(V) : v.disabled.delete(V));
    },
    ot = (A, V = {}) => {
      let ee = Fe(s, A);
      const ge = wa(V.disabled) || wa(a.disabled);
      return (
        Zt(s, A, {
          ...(ee || {}),
          _f: {
            ...(ee && ee._f ? ee._f : { ref: { name: A } }),
            name: A,
            mount: !0,
            ...V,
          },
        }),
        v.mount.add(A),
        ee
          ? be({ disabled: wa(V.disabled) ? V.disabled : a.disabled, name: A })
          : k(A, !0, V.value),
        {
          ...(ge ? { disabled: V.disabled || a.disabled } : {}),
          ...(a.progressive
            ? {
                required: !!V.required,
                min: Fu(V.min),
                max: Fu(V.max),
                minLength: Fu(V.minLength),
                maxLength: Fu(V.maxLength),
                pattern: Fu(V.pattern),
              }
            : {}),
          name: A,
          onChange: de,
          onBlur: de,
          ref: (te) => {
            if (te) {
              (ot(A, V), (ee = Fe(s, A)));
              const se =
                  (yn(te.value) &&
                    te.querySelectorAll &&
                    te.querySelectorAll('input,select,textarea')[0]) ||
                  te,
                Me = $z(se),
                je = ee._f.refs || [];
              if (Me ? je.find((tt) => tt === se) : se === ee._f.ref) return;
              (Zt(s, A, {
                _f: {
                  ...ee._f,
                  ...(Me
                    ? {
                        refs: [
                          ...je.filter(dy),
                          se,
                          ...(Array.isArray(Fe(u, A)) ? [{}] : []),
                        ],
                        ref: { type: se.type, name: A },
                      }
                    : { ref: se }),
                },
              }),
                k(A, !1, void 0, se));
            } else
              ((ee = Fe(s, A, {})),
                ee._f && (ee._f.mount = !1),
                (a.shouldUnregister || V.shouldUnregister) &&
                  !(Fz(v.array, A) && f.action) &&
                  v.unMount.add(A));
          },
        }
      );
    },
    Qe = () => a.shouldFocusError && Bu(s, me, v.mount),
    et = (A) => {
      wa(A) &&
        (w.state.next({ disabled: A }),
        Bu(
          s,
          (V, ee) => {
            const ge = Fe(s, ee);
            ge &&
              ((V.disabled = ge._f.disabled || A),
              Array.isArray(ge._f.refs) &&
                ge._f.refs.forEach((te) => {
                  te.disabled = ge._f.disabled || A;
                }));
          },
          0,
          !1
        ));
    },
    ce = (A, V) => async (ee) => {
      let ge;
      ee &&
        (ee.preventDefault && ee.preventDefault(), ee.persist && ee.persist());
      let te = kn(d);
      if ((w.state.next({ isSubmitting: !0 }), a.resolver)) {
        const { errors: se, values: Me } = await B();
        ((o.errors = se), (te = kn(Me)));
      } else await Z(s);
      if (v.disabled.size) for (const se of v.disabled) mn(te, se);
      if ((mn(o.errors, 'root'), mr(o.errors))) {
        w.state.next({ errors: {} });
        try {
          await A(te, ee);
        } catch (se) {
          ge = se;
        }
      } else (V && (await V({ ...o.errors }, ee)), Qe(), setTimeout(Qe));
      if (
        (w.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: mr(o.errors) && !ge,
          submitCount: o.submitCount + 1,
          errors: o.errors,
        }),
        ge)
      )
        throw ge;
    },
    st = (A, V = {}) => {
      Fe(s, A) &&
        (yn(V.defaultValue)
          ? ue(A, kn(Fe(u, A)))
          : (ue(A, V.defaultValue), Zt(u, A, kn(V.defaultValue))),
        V.keepTouched || mn(o.touchedFields, A),
        V.keepDirty ||
          (mn(o.dirtyFields, A),
          (o.isDirty = V.defaultValue ? ie(A, kn(Fe(u, A))) : ie())),
        V.keepError || (mn(o.errors, A), b.isValid && _()),
        w.state.next({ ...o }));
    },
    pt = (A, V = {}) => {
      const ee = A ? kn(A) : u,
        ge = kn(ee),
        te = mr(A),
        se = te ? u : ge;
      if ((V.keepDefaultValues || (u = ee), !V.keepValues)) {
        if (V.keepDirtyValues) {
          const Me = new Set([...v.mount, ...Object.keys(zu(u, d))]);
          for (const je of Array.from(Me))
            Fe(o.dirtyFields, je) ? Zt(se, je, Fe(d, je)) : ue(je, Fe(se, je));
        } else {
          if (Yy && yn(A))
            for (const Me of v.mount) {
              const je = Fe(s, Me);
              if (je && je._f) {
                const tt = Array.isArray(je._f.refs)
                  ? je._f.refs[0]
                  : je._f.ref;
                if (Vd(tt)) {
                  const an = tt.closest('form');
                  if (an) {
                    an.reset();
                    break;
                  }
                }
              }
            }
          if (V.keepFieldsRef) for (const Me of v.mount) ue(Me, Fe(se, Me));
          else s = {};
        }
        ((d = a.shouldUnregister ? (V.keepDefaultValues ? kn(u) : {}) : kn(se)),
          w.array.next({ values: { ...se } }),
          w.state.next({ values: { ...se } }));
      }
      ((v = {
        mount: V.keepDirtyValues ? v.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        disabled: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: '',
      }),
        (f.mount = !b.isValid || !!V.keepIsValid || !!V.keepDirtyValues),
        (f.watch = !!a.shouldUnregister),
        w.state.next({
          submitCount: V.keepSubmitCount ? o.submitCount : 0,
          isDirty: te
            ? !1
            : V.keepDirty
              ? o.isDirty
              : !!(V.keepDefaultValues && !Hi(A, u)),
          isSubmitted: V.keepIsSubmitted ? o.isSubmitted : !1,
          dirtyFields: te
            ? {}
            : V.keepDirtyValues
              ? V.keepDefaultValues && d
                ? zu(u, d)
                : o.dirtyFields
              : V.keepDefaultValues && A
                ? zu(u, A)
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
    Be = (A, V) => pt(aa(A) ? A(d) : A, V),
    ht = (A, V = {}) => {
      const ee = Fe(s, A),
        ge = ee && ee._f;
      if (ge) {
        const te = ge.refs ? ge.refs[0] : ge.ref;
        te.focus &&
          (te.focus(), V.shouldSelect && aa(te.select) && te.select());
      }
    },
    We = (A) => {
      o = { ...o, ...A };
    },
    cn = {
      control: {
        register: ot,
        unregister: Ze,
        getFieldState: Nt,
        handleSubmit: ce,
        setError: Ce,
        _subscribe: Ve,
        _runSchema: B,
        _focusError: Qe,
        _getWatch: I,
        _getDirty: ie,
        _setValid: _,
        _setFieldArray: O,
        _setDisabledField: be,
        _setErrors: M,
        _getFieldArray: X,
        _reset: pt,
        _resetDefaultValues: () =>
          aa(a.defaultValues) &&
          a.defaultValues().then((A) => {
            (Be(A, a.resetOptions), w.state.next({ isLoading: !1 }));
          }),
        _removeUnmounted: W,
        _disableForm: et,
        _subjects: w,
        _proxyFormState: b,
        get _fields() {
          return s;
        },
        get _formValues() {
          return d;
        },
        get _state() {
          return f;
        },
        set _state(A) {
          f = A;
        },
        get _defaultValues() {
          return u;
        },
        get _names() {
          return v;
        },
        set _names(A) {
          v = A;
        },
        get _formState() {
          return o;
        },
        get _options() {
          return a;
        },
        set _options(A) {
          a = { ...a, ...A };
        },
      },
      subscribe: Q,
      trigger: _e,
      register: ot,
      handleSubmit: ce,
      watch: Re,
      setValue: ue,
      getValues: Ge,
      reset: Be,
      resetField: st,
      clearErrors: we,
      unregister: Ze,
      setError: Ce,
      setFocus: ht,
      getFieldState: Nt,
    };
  return { ...cn, formControl: cn };
}
function Qy(r = {}) {
  const a = Ue.useRef(void 0),
    o = Ue.useRef(void 0),
    [s, u] = Ue.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: aa(r.defaultValues),
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
      defaultValues: aa(r.defaultValues) ? void 0 : r.defaultValues,
    });
  if (!a.current)
    if (r.formControl)
      ((a.current = { ...r.formControl, formState: s }),
        r.defaultValues &&
          !aa(r.defaultValues) &&
          r.formControl.reset(r.defaultValues, r.resetOptions));
    else {
      const { formControl: f, ...v } = nF(r);
      a.current = { ...v, formState: s };
    }
  const d = a.current.control;
  return (
    (d._options = r),
    Bz(() => {
      const f = d._subscribe({
        formState: d._proxyFormState,
        callback: () => u({ ...d._formState }),
        reRenderRoot: !0,
      });
      return (
        u((v) => ({ ...v, isReady: !0 })),
        (d._formState.isReady = !0),
        f
      );
    }, [d]),
    Ue.useEffect(() => d._disableForm(r.disabled), [d, r.disabled]),
    Ue.useEffect(() => {
      (r.mode && (d._options.mode = r.mode),
        r.reValidateMode && (d._options.reValidateMode = r.reValidateMode));
    }, [d, r.mode, r.reValidateMode]),
    Ue.useEffect(() => {
      r.errors && (d._setErrors(r.errors), d._focusError());
    }, [d, r.errors]),
    Ue.useEffect(() => {
      r.shouldUnregister && d._subjects.state.next({ values: d._getWatch() });
    }, [d, r.shouldUnregister]),
    Ue.useEffect(() => {
      if (d._proxyFormState.isDirty) {
        const f = d._getDirty();
        f !== s.isDirty && d._subjects.state.next({ isDirty: f });
      }
    }, [d, s.isDirty]),
    Ue.useEffect(() => {
      r.values && !Hi(r.values, o.current)
        ? (d._reset(r.values, {
            keepFieldsRef: !0,
            ...d._options.resetOptions,
          }),
          (o.current = r.values),
          u((f) => ({ ...f })))
        : d._resetDefaultValues();
    }, [d, r.values]),
    Ue.useEffect(() => {
      (d._state.mount || (d._setValid(), (d._state.mount = !0)),
        d._state.watch &&
          ((d._state.watch = !1), d._subjects.state.next({ ...d._formState })),
        d._removeUnmounted());
    }),
    (a.current.formState = Vz(s, d)),
    a.current
  );
}
const rF = yt('form').withConfig({
    displayName: 'MyForm__StyledForm',
    componentId: 'sc-1ycmc8g-0',
  })([
    'margin:30px;align-items:center;border:1px solid lightblue;border-radius:10px;padding:20px;display:flex;justify-content:center;flex-wrap:wrap;@media (min-width:480px){padding:40px;}@media (min-width:600px){width:500px;}',
  ]),
  GE = yt('input').withConfig({
    displayName: 'MyForm__StyledFormField',
    componentId: 'sc-1ycmc8g-1',
  })([
    'margin:5px;width:150px;@media (max-width:480px){width:200px;display:block;}',
  ]),
  aF = yt('textarea').withConfig({
    displayName: 'MyForm__StyledFormTextArea',
    componentId: 'sc-1ycmc8g-2',
  })([
    'display:block;margin:5px;width:200px;@media (min-width:480px){width:320px;}',
  ]),
  iF = yt('input').withConfig({
    displayName: 'MyForm__StyledButton',
    componentId: 'sc-1ycmc8g-3',
  })(['width:150px;margin:10px;display:block;']),
  oF = yt('input').withConfig({
    displayName: 'MyForm__StyledFormFile',
    componentId: 'sc-1ycmc8g-4',
  })(['margin:10px;display:block;']),
  WE = yt.h2.withConfig({
    displayName: 'MyForm__StyledNameForm',
    componentId: 'sc-1ycmc8g-5',
  })(['margin:0;padding:0;']),
  sF = yt.div.withConfig({
    displayName: 'MyForm__StyledBaseForm',
    componentId: 'sc-1ycmc8g-6',
  })(['margin:25px;padding:10px;']);
function Zw({
  products: r,
  card: a,
  rows: o,
  setCard: s,
  setProductState: u,
  setIsOpenModal: d,
  isOpenModal: f,
  url: v,
  endPoint: m,
}) {
  const {
    register: y,
    reset: b,
    handleSubmit: T,
    watch: w,
    formState: { errors: R },
  } = Qy();
  return Vt(sF, {
    children: [
      m === 'upload'
        ? he(WE, { children: 'Create new card' })
        : he(WE, { children: 'Update card' }),
      Vt(rF, {
        onSubmit: T(async (_) => {
          const L = new FormData();
          (L.append('name', _.name),
            L.append('price', _.price),
            L.append('description', _.description),
            L.append('id', a.id),
            s({
              id: a.id,
              name: _.name,
              description: _.description,
              price: _.price,
              img: a.img,
            }));
          const O = document.querySelector('input[name="files"]');
          (O != null &&
            O.files &&
            Array.from(O.files).forEach((z) => {
              L.append('files', z);
            }),
            await fetch(`${v}/${m}`, { method: 'POST', body: L }));
          const k = (
            await (await fetch(`${v}/all`, { method: 'GET' })).json()
          ).initialData.map((z) => {
            const { id: Y, name: B, price: q, description: Z, img: W } = z;
            return { id: Y, name: B, price: q, description: Z, img: W };
          });
          (u(k), b());
        }),
        children: [
          Vt('div', {
            children: [
              he(GE, { ...y('name', { required: !0 }), placeholder: 'Name' }),
              R.name && he('span', { children: 'This field name is required' }),
              he(GE, { ...y('price', { required: !0 }), placeholder: 'Price' }),
              R.price &&
                he('span', { children: 'This field price is required' }),
            ],
          }),
          he(aF, {
            ...y('description', { required: !0 }),
            placeholder: 'Description',
            rows: 5,
          }),
          m === 'upload'
            ? he(oF, {
                type: 'file',
                name: 'files',
                accept: '.jpg',
                multiple: !0,
              })
            : '',
          R.description &&
            he('span', { children: 'This field description is required' }),
          he(iF, { type: 'submit' }),
        ],
      }),
    ],
  });
}
const lF = yt.button.withConfig({
  displayName: 'ButtonClose__StyledButtonClose',
  componentId: 'sc-12icmn2-0',
})([
  'position:absolute;top:16px;right:20px;font-size:24px;color:#999;background:none;border:none;cursor:pointer;transition:color 0.2s;&:hover{color:#333;}',
]);
function uF({ setIsOpenModal: r }) {
  function a() {
    r(!1);
  }
  return he(lF, { onClick: a, children: '×' });
}
const cF = yt.div.withConfig({
    displayName: 'Modal__StyledOverlay',
    componentId: 'sc-1pc8fcs-0',
  })([
    'position:fixed;inset:0;background:rgba(0,0,0,0.5);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;z-index:9999;',
  ]),
  fF = yt.div.withConfig({
    displayName: 'Modal__StyledModal',
    componentId: 'sc-1pc8fcs-1',
  })([
    'background:#ffffff;border-radius:16px;box-shadow:0 12px 32px rgba(0,0,0,0.2);padding:32px;width:90%;max-width:720px;max-height:90vh;overflow-y:auto;position:relative;display:flex;flex-direction:column;gap:24px;animation:fadeIn 0.3s ease-in-out;@keyframes fadeIn{from{opacity:0;transform:scale(0.95);}to{opacity:1;transform:scale(1);}}&::-webkit-scrollbar{width:8px;}&::-webkit-scrollbar-thumb{background:#ccc;border-radius:4px;}',
  ]),
  dF = yt.div.withConfig({
    displayName: 'Modal__StyledFormWrapper',
    componentId: 'sc-1pc8fcs-2',
  })([
    'margin:40px;display:flex;flex-direction:column;align-items:center;gap:20px;',
  ]),
  pF = yt.button.withConfig({
    displayName: 'Modal__StyledDeleteButton',
    componentId: 'sc-1pc8fcs-3',
  })([
    'align-self:center;padding:10px 24px;background-color:#ff4d4f;border:none;border-radius:8px;color:white;font-weight:bold;font-size:16px;cursor:pointer;transition:background-color 0.2s;&:hover{background-color:#d9363e;}',
  ]),
  vF = yt.div.withConfig({
    displayName: 'Modal__SwiperContainer',
    componentId: 'sc-1pc8fcs-4',
  })([
    'margin:30px;width:100%;max-width:720px;height:300px;margin:0 auto;.swiper-slide{display:flex;justify-content:center;align-items:center;}.swiper-slide img{width:70%;height:70%;object-fit:contain;}',
  ]),
  hF = yt.div.withConfig({
    displayName: 'Modal__SrtyledDivImg',
    componentId: 'sc-1pc8fcs-5',
  })(['width:100%;height:auto;margin-bottom:15px;']),
  mF = yt.img.withConfig({
    displayName: 'Modal__StyledImg',
    componentId: 'sc-1pc8fcs-6',
  })(['width:100%;border-radius:12px;display:block;margin-bottom:12px;']),
  qE = yt.input.withConfig({
    displayName: 'Modal__StyledInput',
    componentId: 'sc-1pc8fcs-7',
  })(['display:block;']),
  XE = yt.input.withConfig({
    displayName: 'Modal__StyledInputButton',
    componentId: 'sc-1pc8fcs-8',
  })(['display:block;margin:30px;']),
  yF = yt.div.withConfig({
    displayName: 'Modal__StyledFieldButton',
    componentId: 'sc-1pc8fcs-9',
  })(['display:flex;flex-wrap:wrap;justify-content:start;']);
function gF({
  products: r,
  card: a,
  rows: o,
  url: s,
  setCard: u,
  setProductState: d,
  setIsOpenModal: f,
  isOpenModal: v,
  isAuth: m,
  token: y,
  setAuth: b,
  isExpired: T,
}) {
  const {
      register: w,
      reset: R,
      handleSubmit: D,
      watch: _,
      formState: { errors: L },
    } = Qy(),
    O = async (k) => {
      let z = [...a.img];
      for (let W = 0; W < k.deletePhotos.length; W++)
        +k.deletePhotos[W] != +k.selectedPhoto &&
          (await fetch(`${s}/upload/cloudinary`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ img: a.img[+k.deletePhotos[W]] }),
          }),
          (z[+k.deletePhotos[W]] = ''));
      ((z = [
        z[+k.selectedPhoto],
        ...z.filter((W, ie) => ie !== +k.selectedPhoto),
      ]),
        (z = z.filter((W) => W && W.trim())));
      const Y = new FormData();
      (Y.append('id', a.id),
        Y.append('name', a.name),
        Y.append('price', a.price),
        Y.append('description', a.description),
        Y.append('img', z.join(',')),
        await fetch(`${s}/admin`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: a.id,
            name: a.name,
            price: a.price,
            description: a.description,
            img: z,
          }),
        }),
        await C(Y));
      const Z = (
        await (await fetch(`${s}/all`, { method: 'GET' })).json()
      ).initialData.map((W) => {
        const { id: ie, name: I, price: X, description: oe, img: fe } = W;
        return { id: ie, name: I, price: X, description: oe, img: fe };
      });
      (u(Z.find((W) => W.id === a.id)), d(Z), R());
    };
  async function C(k) {
    const z = document.querySelector('input[name="files"]');
    if (
      (z != null &&
        z.files &&
        Array.from(z.files).forEach((Z) => {
          k.append('files', Z);
        }),
      !(z != null && z.files) || z.files.length === 0)
    )
      return (console.warn('Файли не вибрано — запит не буде надіслано'), k);
    await fetch(`${s}/upload/${a.id}`, { method: 'POST', body: k });
    const q = (
      await (await fetch(`${s}/all`, { method: 'GET' })).json()
    ).initialData.map((Z) => {
      const { id: W, name: ie, price: I, description: X, img: oe } = Z;
      return { id: W, name: ie, price: I, description: X, img: oe };
    });
    return (d(q), k);
  }
  async function M() {
    await fetch(`${s}/`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: a.id }),
    });
    const k = await fetch(`${s}/all`, { method: 'GET' });
    if (!k.ok) {
      const B = await k.text();
      console.error('Сервер повернув помилку:', k.status, B);
      return;
    }
    let z;
    try {
      z = await k.json();
    } catch (B) {
      console.error('Не вдалося розпарсити JSON:', B);
      return;
    }
    const Y = z.initialData.map((B) => {
      const { id: q, name: Z, price: W, description: ie, img: I } = B;
      return { id: q, name: Z, price: W, description: ie, img: I };
    });
    (u({ id: '', name: '', description: '', price: '', img: [] }), d(Y), f(!1));
  }
  return he(cF, {
    children: Vt(fF, {
      children: [
        he(uF, {
          products: r,
          card: a,
          rows: o,
          setCard: u,
          setProductState: d,
          setIsOpenModal: f,
          isOpenModal: v,
          url: s,
          endPoint: '',
          setAuth: b,
          isAuth: m,
          token: y,
          isExpired: T,
        }),
        he($y, { product: a }),
        he(vF, {
          children: Vt('form', {
            onSubmit: D(O),
            children: [
              he($d, {
                scrollbar: { hide: !0, draggable: !0 },
                modules: [Hy, jy, Yw],
                autoplay: { delay: 2500, disableOnInteraction: !0 },
                slidesPerView: 3,
                spaceBetween: 20,
                grid: { rows: 1, fill: 'row' },
                children: a.img.map((k, z) =>
                  he(
                    Yd,
                    {
                      children: Vt(hF, {
                        children: [
                          Vt('label', {
                            children: [
                              he(qE, {
                                type: 'checkbox',
                                value: z,
                                ...w('deletePhotos'),
                              }),
                              'Delete Photo',
                            ],
                          }),
                          he(mF, { src: k, alt: a.name }),
                          Vt('label', {
                            children: [
                              he(qE, {
                                type: 'radio',
                                value: z,
                                defaultChecked: z === 0,
                                ...w('selectedPhoto'),
                              }),
                              z === 0 && 'General Photo',
                            ],
                          }),
                        ],
                      }),
                    },
                    z
                  )
                ),
              }),
              Vt(yF, {
                children: [
                  he(XE, {
                    type: 'file',
                    name: 'files',
                    accept: '.jpg',
                    multiple: !0,
                  }),
                  he(XE, { type: 'submit', value: 'Changed' }),
                ],
              }),
            ],
          }),
        }),
        Vt(dF, {
          children: [
            he(Zw, {
              products: r,
              card: a,
              rows: o,
              setCard: u,
              setProductState: d,
              setIsOpenModal: f,
              isOpenModal: v,
              url: s,
              endPoint: 'admin',
              isAuth: m,
              setAuth: b,
              token: y,
              isExpired: T,
            }),
            he(pF, { onClick: M, children: '🗑 Delete Card' }),
          ],
        }),
      ],
    }),
  });
}
const py = 'upload',
  bF = yt('div').withConfig({
    displayName: 'Admin__StyledBaseField',
    componentId: 'sc-1rnwr9c-0',
  })([
    'display:flex;flex-direction:column;justify-content:center;align-items:center;',
  ]);
function SF({
  products: r,
  card: a,
  rows: o,
  url: s,
  setCard: u,
  setProductState: d,
  setIsOpenModal: f,
  isOpenModal: v,
  setAuth: m,
  isAuth: y,
  token: b,
  isExpired: T,
}) {
  return (
    y &&
    Vt('div', {
      children: [
        v &&
          he(gF, {
            products: r,
            card: a,
            rows: o,
            setCard: u,
            setProductState: d,
            setIsOpenModal: f,
            isOpenModal: v,
            url: s,
            endPoint: py,
            setAuth: m,
            isAuth: y,
            token: b,
            isExpired: T,
          }),
        Vt(bF, {
          children: [
            he('h2', { children: 'Administrator' }),
            he(Nz, {
              products: r,
              card: a,
              rows: o,
              setCard: u,
              setProductState: d,
              setIsOpenModal: f,
              isOpenModal: v,
              url: s,
              endPoint: py,
              setAuth: m,
              isAuth: y,
              token: b,
              isExpired: T,
            }),
            he(Zw, {
              products: r,
              card: a,
              rows: o,
              setCard: u,
              setProductState: d,
              setIsOpenModal: f,
              isOpenModal: v,
              url: s,
              endPoint: py,
              setAuth: m,
              isAuth: y,
              token: b,
              isExpired: T,
            }),
          ],
        }),
      ],
    })
  );
}
const TF = yt.div.withConfig({
  displayName: 'Home__StyledBaseField',
  componentId: 'sc-rf26ej-0',
})([
  'width:100%;max-width:1200px;margin:0 auto;padding:1rem;box-sizing:border-box;.swiper{width:100%;height:auto;}.swiper-slide{display:flex;justify-content:center;align-items:center;height:100%;}.swiper-scrollbar{margin-top:8px;}',
]);
function EF({ products: r, rows: a }) {
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
  return Vt('div', {
    children: [
      he('h2', { children: 'Home' }),
      he(TF, {
        children: he($d, {
          scrollbar: { hide: !0, draggable: !0 },
          modules: [Hy, jy, Yw],
          autoplay: { delay: 2500, disableOnInteraction: !0 },
          slidesPerView: s,
          spaceBetween: 20,
          grid: { rows: o, fill: 'row' },
          children: r.map((u) =>
            he(
              Yd,
              {
                children: he($y, {
                  product: {
                    id: u.id ?? '',
                    name: u.name ?? '',
                    description: u.description ?? '',
                    price: u.price ?? '',
                    img: u.img ?? '',
                  },
                }),
              },
              u.id
            )
          ),
        }),
      }),
    ],
  });
}
function wF() {
  return he('div', { children: he('h2', { children: 'Orders' }) });
}
function CF() {
  return he('div', { children: he('h2', { children: 'Contacts' }) });
}
function xF() {
  return Vt('div', {
    children: [
      he('h2', { children: 'Nothing to see here!' }),
      he('p', {
        children: he(ri, { to: '/', children: 'Go to the home page' }),
      }),
    ],
  });
}
function _F() {
  return Vt('div', {
    children: [
      he('nav', {
        children: Vt('ul', {
          children: [
            he('li', { children: he(ri, { to: '/', children: 'Home' }) }),
            he('li', { children: he(ri, { to: '/login', children: 'Login' }) }),
            he('li', { children: he(ri, { to: '/admin', children: 'Admin' }) }),
            he('li', {
              children: he(ri, { to: '/orders', children: 'Orders' }),
            }),
            he('li', {
              children: he(ri, { to: '/contacts', children: 'Contacts' }),
            }),
            he('li', {
              children: he(ri, {
                to: '/nothing-here',
                children: 'Nothing Here',
              }),
            }),
          ],
        }),
      }),
      he('hr', {}),
      he(Tk, {}),
    ],
  });
}
const RF = '/assets/Copilot_20250803_110344-af9a649f.png';
function eC(r) {
  var a,
    o,
    s = '';
  if (typeof r == 'string' || typeof r == 'number') s += r;
  else if (typeof r == 'object')
    if (Array.isArray(r)) {
      var u = r.length;
      for (a = 0; a < u; a++)
        r[a] && (o = eC(r[a])) && (s && (s += ' '), (s += o));
    } else for (o in r) r[o] && (s && (s += ' '), (s += o));
  return s;
}
function Lo() {
  for (var r, a, o = 0, s = '', u = arguments.length; o < u; o++)
    (r = arguments[o]) && (a = eC(r)) && (s && (s += ' '), (s += a));
  return s;
}
function DF(r) {
  if (!r || typeof document > 'u') return;
  let a = document.head || document.getElementsByTagName('head')[0],
    o = document.createElement('style');
  ((o.type = 'text/css'),
    a.firstChild ? a.insertBefore(o, a.firstChild) : a.appendChild(o),
    o.styleSheet
      ? (o.styleSheet.cssText = r)
      : o.appendChild(document.createTextNode(r)));
}
DF(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);
var Zu = (r) => typeof r == 'number' && !isNaN(r),
  No = (r) => typeof r == 'string',
  oi = (r) => typeof r == 'function',
  OF = (r) => No(r) || Zu(r),
  xy = (r) => (No(r) || oi(r) ? r : null),
  AF = (r, a) => (r === !1 || (Zu(r) && r > 0) ? r : a),
  _y = (r) => $.isValidElement(r) || No(r) || oi(r) || Zu(r);
function MF(r, a, o = 300) {
  let { scrollHeight: s, style: u } = r;
  requestAnimationFrame(() => {
    ((u.minHeight = 'initial'),
      (u.height = s + 'px'),
      (u.transition = `all ${o}ms`),
      requestAnimationFrame(() => {
        ((u.height = '0'),
          (u.padding = '0'),
          (u.margin = '0'),
          setTimeout(a, o));
      }));
  });
}
function LF({
  enter: r,
  exit: a,
  appendPosition: o = !1,
  collapse: s = !0,
  collapseDuration: u = 300,
}) {
  return function ({
    children: d,
    position: f,
    preventExitTransition: v,
    done: m,
    nodeRef: y,
    isIn: b,
    playToast: T,
  }) {
    let w = o ? `${r}--${f}` : r,
      R = o ? `${a}--${f}` : a,
      D = $.useRef(0);
    return (
      $.useLayoutEffect(() => {
        let _ = y.current,
          L = w.split(' '),
          O = (C) => {
            C.target === y.current &&
              (T(),
              _.removeEventListener('animationend', O),
              _.removeEventListener('animationcancel', O),
              D.current === 0 &&
                C.type !== 'animationcancel' &&
                _.classList.remove(...L));
          };
        (_.classList.add(...L),
          _.addEventListener('animationend', O),
          _.addEventListener('animationcancel', O));
      }, []),
      $.useEffect(() => {
        let _ = y.current,
          L = () => {
            (_.removeEventListener('animationend', L), s ? MF(_, m, u) : m());
          };
        b ||
          (v
            ? L()
            : ((D.current = 1),
              (_.className += ` ${R}`),
              _.addEventListener('animationend', L)));
      }, [b]),
      Ue.createElement(Ue.Fragment, null, d)
    );
  };
}
function QE(r, a) {
  return {
    content: tC(r.content, r.props),
    containerId: r.props.containerId,
    id: r.props.toastId,
    theme: r.props.theme,
    type: r.props.type,
    data: r.props.data || {},
    isLoading: r.props.isLoading,
    icon: r.props.icon,
    reason: r.removalReason,
    status: a,
  };
}
function tC(r, a, o = !1) {
  return $.isValidElement(r) && !No(r.type)
    ? $.cloneElement(r, {
        closeToast: a.closeToast,
        toastProps: a,
        data: a.data,
        isPaused: o,
      })
    : oi(r)
      ? r({
          closeToast: a.closeToast,
          toastProps: a,
          data: a.data,
          isPaused: o,
        })
      : r;
}
function kF({ closeToast: r, theme: a, ariaLabel: o = 'close' }) {
  return Ue.createElement(
    'button',
    {
      className: `Toastify__close-button Toastify__close-button--${a}`,
      type: 'button',
      onClick: (s) => {
        (s.stopPropagation(), r(!0));
      },
      'aria-label': o,
    },
    Ue.createElement(
      'svg',
      { 'aria-hidden': 'true', viewBox: '0 0 14 16' },
      Ue.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z',
      })
    )
  );
}
function NF({
  delay: r,
  isRunning: a,
  closeToast: o,
  type: s = 'default',
  hide: u,
  className: d,
  controlledProgress: f,
  progress: v,
  rtl: m,
  isIn: y,
  theme: b,
}) {
  let T = u || (f && v === 0),
    w = {
      animationDuration: `${r}ms`,
      animationPlayState: a ? 'running' : 'paused',
    };
  f && (w.transform = `scaleX(${v})`);
  let R = Lo(
      'Toastify__progress-bar',
      f
        ? 'Toastify__progress-bar--controlled'
        : 'Toastify__progress-bar--animated',
      `Toastify__progress-bar-theme--${b}`,
      `Toastify__progress-bar--${s}`,
      { 'Toastify__progress-bar--rtl': m }
    ),
    D = oi(d) ? d({ rtl: m, type: s, defaultClassName: R }) : Lo(R, d),
    _ = {
      [f && v >= 1 ? 'onTransitionEnd' : 'onAnimationEnd']:
        f && v < 1
          ? null
          : () => {
              y && o();
            },
    };
  return Ue.createElement(
    'div',
    { className: 'Toastify__progress-bar--wrp', 'data-hidden': T },
    Ue.createElement('div', {
      className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${b} Toastify__progress-bar--${s}`,
    }),
    Ue.createElement('div', {
      role: 'progressbar',
      'aria-hidden': T ? 'true' : 'false',
      'aria-label': 'notification timer',
      className: D,
      style: w,
      ..._,
    })
  );
}
var PF = 1,
  nC = () => `${PF++}`;
function zF(r, a, o) {
  let s = 1,
    u = 0,
    d = [],
    f = [],
    v = a,
    m = new Map(),
    y = new Set(),
    b = (C) => (y.add(C), () => y.delete(C)),
    T = () => {
      ((f = Array.from(m.values())), y.forEach((C) => C()));
    },
    w = ({ containerId: C, toastId: M, updateId: k }) => {
      let z = C ? C !== r : r !== 1,
        Y = m.has(M) && k == null;
      return z || Y;
    },
    R = (C, M) => {
      m.forEach((k) => {
        var z;
        (M == null || M === k.props.toastId) &&
          ((z = k.toggle) == null || z.call(k, C));
      });
    },
    D = (C) => {
      var M, k;
      ((k = (M = C.props) == null ? void 0 : M.onClose) == null ||
        k.call(M, C.removalReason),
        (C.isActive = !1));
    },
    _ = (C) => {
      if (C == null) m.forEach(D);
      else {
        let M = m.get(C);
        M && D(M);
      }
      T();
    },
    L = () => {
      ((u -= d.length), (d = []));
    },
    O = (C) => {
      var M, k;
      let { toastId: z, updateId: Y } = C.props,
        B = Y == null;
      (C.staleId && m.delete(C.staleId),
        (C.isActive = !0),
        m.set(z, C),
        T(),
        o(QE(C, B ? 'added' : 'updated')),
        B && ((k = (M = C.props).onOpen) == null || k.call(M)));
    };
  return {
    id: r,
    props: v,
    observe: b,
    toggle: R,
    removeToast: _,
    toasts: m,
    clearQueue: L,
    buildToast: (C, M) => {
      if (w(M)) return;
      let { toastId: k, updateId: z, data: Y, staleId: B, delay: q } = M,
        Z = z == null;
      Z && u++;
      let W = {
        ...v,
        style: v.toastStyle,
        key: s++,
        ...Object.fromEntries(Object.entries(M).filter(([I, X]) => X != null)),
        toastId: k,
        updateId: z,
        data: Y,
        isIn: !1,
        className: xy(M.className || v.toastClassName),
        progressClassName: xy(M.progressClassName || v.progressClassName),
        autoClose: M.isLoading ? !1 : AF(M.autoClose, v.autoClose),
        closeToast(I) {
          ((m.get(k).removalReason = I), _(k));
        },
        deleteToast() {
          let I = m.get(k);
          if (I != null) {
            if (
              (o(QE(I, 'removed')),
              m.delete(k),
              u--,
              u < 0 && (u = 0),
              d.length > 0)
            ) {
              O(d.shift());
              return;
            }
            T();
          }
        },
      };
      ((W.closeButton = v.closeButton),
        M.closeButton === !1 || _y(M.closeButton)
          ? (W.closeButton = M.closeButton)
          : M.closeButton === !0 &&
            (W.closeButton = _y(v.closeButton) ? v.closeButton : !0));
      let ie = { content: C, props: W, staleId: B };
      v.limit && v.limit > 0 && u > v.limit && Z
        ? d.push(ie)
        : Zu(q)
          ? setTimeout(() => {
              O(ie);
            }, q)
          : O(ie);
    },
    setProps(C) {
      v = C;
    },
    setToggle: (C, M) => {
      let k = m.get(C);
      k && (k.toggle = M);
    },
    isToastActive: (C) => {
      var M;
      return (M = m.get(C)) == null ? void 0 : M.isActive;
    },
    getSnapshot: () => f,
  };
}
var sr = new Map(),
  Wu = [],
  Ry = new Set(),
  FF = (r) => Ry.forEach((a) => a(r)),
  rC = () => sr.size > 0;
function UF() {
  (Wu.forEach((r) => iC(r.content, r.options)), (Wu = []));
}
var IF = (r, { containerId: a }) => {
  var o;
  return (o = sr.get(a || 1)) == null ? void 0 : o.toasts.get(r);
};
function aC(r, a) {
  var o;
  if (a) return !!((o = sr.get(a)) != null && o.isToastActive(r));
  let s = !1;
  return (
    sr.forEach((u) => {
      u.isToastActive(r) && (s = !0);
    }),
    s
  );
}
function VF(r) {
  if (!rC()) {
    Wu = Wu.filter((a) => r != null && a.options.toastId !== r);
    return;
  }
  if (r == null || OF(r))
    sr.forEach((a) => {
      a.removeToast(r);
    });
  else if (r && ('containerId' in r || 'id' in r)) {
    let a = sr.get(r.containerId);
    a
      ? a.removeToast(r.id)
      : sr.forEach((o) => {
          o.removeToast(r.id);
        });
  }
}
var BF = (r = {}) => {
  sr.forEach((a) => {
    a.props.limit &&
      (!r.containerId || a.id === r.containerId) &&
      a.clearQueue();
  });
};
function iC(r, a) {
  _y(r) &&
    (rC() || Wu.push({ content: r, options: a }),
    sr.forEach((o) => {
      o.buildToast(r, a);
    }));
}
function HF(r) {
  var a;
  (a = sr.get(r.containerId || 1)) == null || a.setToggle(r.id, r.fn);
}
function oC(r, a) {
  sr.forEach((o) => {
    (a == null ||
      !(a != null && a.containerId) ||
      (a == null ? void 0 : a.containerId) === o.id) &&
      o.toggle(r, a == null ? void 0 : a.id);
  });
}
function jF(r) {
  let a = r.containerId || 1;
  return {
    subscribe(o) {
      let s = zF(a, r, FF);
      sr.set(a, s);
      let u = s.observe(o);
      return (
        UF(),
        () => {
          (u(), sr.delete(a));
        }
      );
    },
    setProps(o) {
      var s;
      (s = sr.get(a)) == null || s.setProps(o);
    },
    getSnapshot() {
      var o;
      return (o = sr.get(a)) == null ? void 0 : o.getSnapshot();
    },
  };
}
function $F(r) {
  return (
    Ry.add(r),
    () => {
      Ry.delete(r);
    }
  );
}
function YF(r) {
  return r && (No(r.toastId) || Zu(r.toastId)) ? r.toastId : nC();
}
function ec(r, a) {
  return (iC(r, a), a.toastId);
}
function Wd(r, a) {
  return { ...a, type: (a && a.type) || r, toastId: YF(a) };
}
function qd(r) {
  return (a, o) => ec(a, Wd(r, o));
}
function kt(r, a) {
  return ec(r, Wd('default', a));
}
kt.loading = (r, a) =>
  ec(
    r,
    Wd('default', {
      isLoading: !0,
      autoClose: !1,
      closeOnClick: !1,
      closeButton: !1,
      draggable: !1,
      ...a,
    })
  );
function GF(r, { pending: a, error: o, success: s }, u) {
  let d;
  a && (d = No(a) ? kt.loading(a, u) : kt.loading(a.render, { ...u, ...a }));
  let f = {
      isLoading: null,
      autoClose: null,
      closeOnClick: null,
      closeButton: null,
      draggable: null,
    },
    v = (y, b, T) => {
      if (b == null) {
        kt.dismiss(d);
        return;
      }
      let w = { type: y, ...f, ...u, data: T },
        R = No(b) ? { render: b } : b;
      return (
        d ? kt.update(d, { ...w, ...R }) : kt(R.render, { ...w, ...R }),
        T
      );
    },
    m = oi(r) ? r() : r;
  return (m.then((y) => v('success', s, y)).catch((y) => v('error', o, y)), m);
}
kt.promise = GF;
kt.success = qd('success');
kt.info = qd('info');
kt.error = qd('error');
kt.warning = qd('warning');
kt.warn = kt.warning;
kt.dark = (r, a) => ec(r, Wd('default', { theme: 'dark', ...a }));
function WF(r) {
  VF(r);
}
kt.dismiss = WF;
kt.clearWaitingQueue = BF;
kt.isActive = aC;
kt.update = (r, a = {}) => {
  let o = IF(r, a);
  if (o) {
    let { props: s, content: u } = o,
      d = { delay: 100, ...s, ...a, toastId: a.toastId || r, updateId: nC() };
    d.toastId !== r && (d.staleId = r);
    let f = d.render || u;
    (delete d.render, ec(f, d));
  }
};
kt.done = (r) => {
  kt.update(r, { progress: 1 });
};
kt.onChange = $F;
kt.play = (r) => oC(!0, r);
kt.pause = (r) => oC(!1, r);
function qF(r) {
  var a;
  let { subscribe: o, getSnapshot: s, setProps: u } = $.useRef(jF(r)).current;
  u(r);
  let d = (a = $.useSyncExternalStore(o, s, s)) == null ? void 0 : a.slice();
  function f(v) {
    if (!d) return [];
    let m = new Map();
    return (
      r.newestOnTop && d.reverse(),
      d.forEach((y) => {
        let { position: b } = y.props;
        (m.has(b) || m.set(b, []), m.get(b).push(y));
      }),
      Array.from(m, (y) => v(y[0], y[1]))
    );
  }
  return {
    getToastToRender: f,
    isToastActive: aC,
    count: d == null ? void 0 : d.length,
  };
}
function XF(r) {
  let [a, o] = $.useState(!1),
    [s, u] = $.useState(!1),
    d = $.useRef(null),
    f = $.useRef({
      start: 0,
      delta: 0,
      removalDistance: 0,
      canCloseOnClick: !0,
      canDrag: !1,
      didMove: !1,
    }).current,
    {
      autoClose: v,
      pauseOnHover: m,
      closeToast: y,
      onClick: b,
      closeOnClick: T,
    } = r;
  (HF({ id: r.toastId, containerId: r.containerId, fn: o }),
    $.useEffect(() => {
      if (r.pauseOnFocusLoss)
        return (
          w(),
          () => {
            R();
          }
        );
    }, [r.pauseOnFocusLoss]));
  function w() {
    (document.hasFocus() || O(),
      window.addEventListener('focus', L),
      window.addEventListener('blur', O));
  }
  function R() {
    (window.removeEventListener('focus', L),
      window.removeEventListener('blur', O));
  }
  function D(B) {
    if (r.draggable === !0 || r.draggable === B.pointerType) {
      C();
      let q = d.current;
      ((f.canCloseOnClick = !0),
        (f.canDrag = !0),
        (q.style.transition = 'none'),
        r.draggableDirection === 'x'
          ? ((f.start = B.clientX),
            (f.removalDistance = q.offsetWidth * (r.draggablePercent / 100)))
          : ((f.start = B.clientY),
            (f.removalDistance =
              (q.offsetHeight *
                (r.draggablePercent === 80
                  ? r.draggablePercent * 1.5
                  : r.draggablePercent)) /
              100)));
    }
  }
  function _(B) {
    let {
      top: q,
      bottom: Z,
      left: W,
      right: ie,
    } = d.current.getBoundingClientRect();
    B.nativeEvent.type !== 'touchend' &&
    r.pauseOnHover &&
    B.clientX >= W &&
    B.clientX <= ie &&
    B.clientY >= q &&
    B.clientY <= Z
      ? O()
      : L();
  }
  function L() {
    o(!0);
  }
  function O() {
    o(!1);
  }
  function C() {
    ((f.didMove = !1),
      document.addEventListener('pointermove', k),
      document.addEventListener('pointerup', z));
  }
  function M() {
    (document.removeEventListener('pointermove', k),
      document.removeEventListener('pointerup', z));
  }
  function k(B) {
    let q = d.current;
    if (f.canDrag && q) {
      ((f.didMove = !0),
        a && O(),
        r.draggableDirection === 'x'
          ? (f.delta = B.clientX - f.start)
          : (f.delta = B.clientY - f.start),
        f.start !== B.clientX && (f.canCloseOnClick = !1));
      let Z =
        r.draggableDirection === 'x'
          ? `${f.delta}px, var(--y)`
          : `0, calc(${f.delta}px + var(--y))`;
      ((q.style.transform = `translate3d(${Z},0)`),
        (q.style.opacity = `${1 - Math.abs(f.delta / f.removalDistance)}`));
    }
  }
  function z() {
    M();
    let B = d.current;
    if (f.canDrag && f.didMove && B) {
      if (((f.canDrag = !1), Math.abs(f.delta) > f.removalDistance)) {
        (u(!0), r.closeToast(!0), r.collapseAll());
        return;
      }
      ((B.style.transition = 'transform 0.2s, opacity 0.2s'),
        B.style.removeProperty('transform'),
        B.style.removeProperty('opacity'));
    }
  }
  let Y = { onPointerDown: D, onPointerUp: _ };
  return (
    v && m && ((Y.onMouseEnter = O), r.stacked || (Y.onMouseLeave = L)),
    T &&
      (Y.onClick = (B) => {
        (b && b(B), f.canCloseOnClick && y(!0));
      }),
    {
      playToast: L,
      pauseToast: O,
      isRunning: a,
      preventExitTransition: s,
      toastRef: d,
      eventHandlers: Y,
    }
  );
}
var QF = typeof window < 'u' ? $.useLayoutEffect : $.useEffect,
  Xd = ({ theme: r, type: a, isLoading: o, ...s }) =>
    Ue.createElement('svg', {
      viewBox: '0 0 24 24',
      width: '100%',
      height: '100%',
      fill:
        r === 'colored' ? 'currentColor' : `var(--toastify-icon-color-${a})`,
      ...s,
    });
function KF(r) {
  return Ue.createElement(
    Xd,
    { ...r },
    Ue.createElement('path', {
      d: 'M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z',
    })
  );
}
function JF(r) {
  return Ue.createElement(
    Xd,
    { ...r },
    Ue.createElement('path', {
      d: 'M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z',
    })
  );
}
function ZF(r) {
  return Ue.createElement(
    Xd,
    { ...r },
    Ue.createElement('path', {
      d: 'M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z',
    })
  );
}
function eU(r) {
  return Ue.createElement(
    Xd,
    { ...r },
    Ue.createElement('path', {
      d: 'M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z',
    })
  );
}
function tU() {
  return Ue.createElement('div', { className: 'Toastify__spinner' });
}
var Dy = { info: JF, warning: KF, success: ZF, error: eU, spinner: tU },
  nU = (r) => r in Dy;
function rU({ theme: r, type: a, isLoading: o, icon: s }) {
  let u = null,
    d = { theme: r, type: a };
  return (
    s === !1 ||
      (oi(s)
        ? (u = s({ ...d, isLoading: o }))
        : $.isValidElement(s)
          ? (u = $.cloneElement(s, d))
          : o
            ? (u = Dy.spinner())
            : nU(a) && (u = Dy[a](d))),
    u
  );
}
var aU = (r) => {
    let {
        isRunning: a,
        preventExitTransition: o,
        toastRef: s,
        eventHandlers: u,
        playToast: d,
      } = XF(r),
      {
        closeButton: f,
        children: v,
        autoClose: m,
        onClick: y,
        type: b,
        hideProgressBar: T,
        closeToast: w,
        transition: R,
        position: D,
        className: _,
        style: L,
        progressClassName: O,
        updateId: C,
        role: M,
        progress: k,
        rtl: z,
        toastId: Y,
        deleteToast: B,
        isIn: q,
        isLoading: Z,
        closeOnClick: W,
        theme: ie,
        ariaLabel: I,
      } = r,
      X = Lo(
        'Toastify__toast',
        `Toastify__toast-theme--${ie}`,
        `Toastify__toast--${b}`,
        { 'Toastify__toast--rtl': z },
        { 'Toastify__toast--close-on-click': W }
      ),
      oe = oi(_)
        ? _({ rtl: z, position: D, type: b, defaultClassName: X })
        : Lo(X, _),
      fe = rU(r),
      ue = !!k || !m,
      de = { closeToast: w, type: b, theme: ie },
      me = null;
    return (
      f === !1 ||
        (oi(f)
          ? (me = f(de))
          : $.isValidElement(f)
            ? (me = $.cloneElement(f, de))
            : (me = kF(de))),
      Ue.createElement(
        R,
        {
          isIn: q,
          done: B,
          position: D,
          preventExitTransition: o,
          nodeRef: s,
          playToast: d,
        },
        Ue.createElement(
          'div',
          {
            id: Y,
            tabIndex: 0,
            onClick: y,
            'data-in': q,
            className: oe,
            ...u,
            style: L,
            ref: s,
            ...(q && { role: M, 'aria-label': I }),
          },
          fe != null &&
            Ue.createElement(
              'div',
              {
                className: Lo('Toastify__toast-icon', {
                  'Toastify--animate-icon Toastify__zoom-enter': !Z,
                }),
              },
              fe
            ),
          tC(v, r, !a),
          me,
          !r.customProgressBar &&
            Ue.createElement(NF, {
              ...(C && !ue ? { key: `p-${C}` } : {}),
              rtl: z,
              theme: ie,
              delay: m,
              isRunning: a,
              isIn: q,
              closeToast: w,
              hide: T,
              type: b,
              className: O,
              controlledProgress: ue,
              progress: k || 0,
            })
        )
      )
    );
  },
  iU = (r, a = !1) => ({
    enter: `Toastify--animate Toastify__${r}-enter`,
    exit: `Toastify--animate Toastify__${r}-exit`,
    appendPosition: a,
  }),
  oU = LF(iU('bounce', !0)),
  sU = {
    position: 'top-right',
    transition: oU,
    autoClose: 5e3,
    closeButton: !0,
    pauseOnHover: !0,
    pauseOnFocusLoss: !0,
    draggable: 'touch',
    draggablePercent: 80,
    draggableDirection: 'x',
    role: 'alert',
    theme: 'light',
    'aria-label': 'Notifications Alt+T',
    hotKeys: (r) => r.altKey && r.code === 'KeyT',
  };
function lU(r) {
  let a = { ...sU, ...r },
    o = r.stacked,
    [s, u] = $.useState(!0),
    d = $.useRef(null),
    { getToastToRender: f, isToastActive: v, count: m } = qF(a),
    { className: y, style: b, rtl: T, containerId: w, hotKeys: R } = a;
  function D(L) {
    let O = Lo('Toastify__toast-container', `Toastify__toast-container--${L}`, {
      'Toastify__toast-container--rtl': T,
    });
    return oi(y)
      ? y({ position: L, rtl: T, defaultClassName: O })
      : Lo(O, xy(y));
  }
  function _() {
    o && (u(!0), kt.play());
  }
  return (
    QF(() => {
      var L;
      if (o) {
        let O = d.current.querySelectorAll('[data-in="true"]'),
          C = 12,
          M = (L = a.position) == null ? void 0 : L.includes('top'),
          k = 0,
          z = 0;
        Array.from(O)
          .reverse()
          .forEach((Y, B) => {
            let q = Y;
            (q.classList.add('Toastify__toast--stacked'),
              B > 0 && (q.dataset.collapsed = `${s}`),
              q.dataset.pos || (q.dataset.pos = M ? 'top' : 'bot'));
            let Z = k * (s ? 0.2 : 1) + (s ? 0 : C * B);
            (q.style.setProperty('--y', `${M ? Z : Z * -1}px`),
              q.style.setProperty('--g', `${C}`),
              q.style.setProperty('--s', `${1 - (s ? z : 0)}`),
              (k += q.offsetHeight),
              (z += 0.025));
          });
      }
    }, [s, m, o]),
    $.useEffect(() => {
      function L(O) {
        var C;
        let M = d.current;
        (R(O) &&
          ((C = M.querySelector('[tabIndex="0"]')) == null || C.focus(),
          u(!1),
          kt.pause()),
          O.key === 'Escape' &&
            (document.activeElement === M ||
              (M != null && M.contains(document.activeElement))) &&
            (u(!0), kt.play()));
      }
      return (
        document.addEventListener('keydown', L),
        () => {
          document.removeEventListener('keydown', L);
        }
      );
    }, [R]),
    Ue.createElement(
      'section',
      {
        ref: d,
        className: 'Toastify',
        id: w,
        onMouseEnter: () => {
          o && (u(!1), kt.pause());
        },
        onMouseLeave: _,
        'aria-live': 'polite',
        'aria-atomic': 'false',
        'aria-relevant': 'additions text',
        'aria-label': a['aria-label'],
      },
      f((L, O) => {
        let C = O.length ? { ...b } : { ...b, pointerEvents: 'none' };
        return Ue.createElement(
          'div',
          {
            tabIndex: -1,
            className: D(L),
            'data-stacked': o,
            style: C,
            key: `c-${L}`,
          },
          O.map(({ content: M, props: k }) =>
            Ue.createElement(
              aU,
              {
                ...k,
                stacked: o,
                collapseAll: _,
                isIn: v(k.toastId, k.containerId),
                key: `t-${k.key}`,
              },
              M
            )
          )
        );
      })
    )
  );
}
const uU = yt.button.withConfig({
    displayName: 'UsersForm__StyledButtonClose',
    componentId: 'sc-w5oi9h-0',
  })([
    'position:absolute;top:5px;right:5px;font-size:24px;color:#999;background:none;border:none;cursor:pointer;transition:color 0.2s;&:hover{color:#333;}',
  ]),
  cU = yt.div.withConfig({
    displayName: 'UsersForm__StyledBase',
    componentId: 'sc-w5oi9h-1',
  })([
    'display:flex;flex-direction:column;align-items:center;min-height:100vh;padding-top:20px;',
  ]),
  fU = yt.input.withConfig({
    displayName: 'UsersForm__StyledButton',
    componentId: 'sc-w5oi9h-2',
  })([
    'align-self:center;padding:10px 24px;width:150px;height:40px;background-color:#007bff;border:none;border-radius:8px;color:white;font-weight:bold;font-size:14px;cursor:pointer;transition:background-color 0.3s ease;&:hover{background-color:#0056b3;}',
  ]),
  dU = yt.button.withConfig({
    displayName: 'UsersForm__StyledDeleteButton',
    componentId: 'sc-w5oi9h-3',
  })([
    'align-self:center;padding:10px 24px;width:150px;height:40px;background-color:#ff4d4f;border:none;border-radius:8px;color:white;font-weight:bold;font-size:14px;cursor:pointer;transition:background-color 0.3s ease;&:hover{background-color:#d9363e;}',
  ]),
  pU = yt.form.withConfig({
    displayName: 'UsersForm__StyledForm',
    componentId: 'sc-w5oi9h-4',
  })([
    'position:relative;display:flex;flex-direction:column;gap:16px;padding:32px;border:1px solid #ccc;border-radius:12px;background-color:#f9f9f9;box-shadow:0 4px 12px rgba(0,0,0,0.1);width:300px;',
  ]),
  Td = yt.input.withConfig({
    displayName: 'UsersForm__StyledInput',
    componentId: 'sc-w5oi9h-5',
  })([
    'width:95%;padding:10px;font-size:14px;border:1px solid #aaa;border-radius:8px;',
  ]),
  vU = yt.span.withConfig({
    displayName: 'UsersForm__StyledSpan',
    componentId: 'sc-w5oi9h-6',
  })(['font-size:12px;color:red;']),
  hU = yt.div.withConfig({
    displayName: 'UsersForm__StyledDiv',
    componentId: 'sc-w5oi9h-7',
  })(['position:relative;width:100%;']),
  mU = yt.select.withConfig({
    displayName: 'UsersForm__StyledSelect',
    componentId: 'sc-w5oi9h-8',
  })([
    'width:95%;padding:10px;font-size:14px;border:1px solid #aaa;border-radius:8px;background-color:white;color:black;',
  ]);
function yU({
  url: r,
  endPoint: a,
  isAuth: o,
  isExpired: s,
  token: u,
  setAuth: d,
}) {
  const [f, v] = $.useState(!1),
    [m, y] = $.useState(!1),
    [b, T] = $.useState(0),
    w = pw();
  $.useEffect(() => {
    switch (b) {
      case 1:
        kt.success('Login or Password correct!');
        break;
      case 2:
        kt.error('Login or Password incorrect!');
        break;
      case 3:
        kt.success('New user created!');
        break;
      case 4:
        kt.info('Login successful');
        break;
      case 5:
        kt.info('user deleted');
        break;
    }
  }, [b]);
  const {
      register: R,
      reset: D,
      handleSubmit: _,
      getValues: L,
      watch: O,
      formState: { errors: C },
    } = Qy(),
    M = async (Y) => {
      if (m) {
        y(!1);
        try {
          (
            await (
              await fetch(`${r}/${a}/root/10`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  name: Y.login,
                  password: Y.password,
                  description: Y.descriptionUser,
                  email: Y.email,
                  role: Y.role,
                }),
              })
            ).json()
          ).auth
            ? T(3)
            : T(0);
        } catch (B) {
          console.log('error', B);
        }
      }
      if (Y.login === 'root')
        try {
          const q = await (
            await fetch(`${r}/${a}/root/1`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                name: Y.login,
                password: Y.password,
                description: Y.descriptionUser,
                email: Y.email,
                role: Y.role,
              }),
            })
          ).json();
          (q.auth ? y(!0) : y(!1), q.auth ? T(1) : T(2));
        } catch (B) {
          console.log('error', B);
        }
      else
        try {
          const q = await (
            await fetch(`${r}/${a}/root/20`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                name: Y.login,
                password: Y.password,
                description: Y.descriptionUser,
                email: Y.email,
                role: Y.role,
              }),
            })
          ).json();
          (q.auth ? T(4) : T(2),
            localStorage.setItem('token', q.token),
            d(s),
            q.auth && w('/admin'));
        } catch (B) {
          console.log('error', B);
        }
      D();
    };
  async function k() {
    try {
      (
        await (
          await fetch(`${r}/${a}/${L('login')}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ pass: L('password') }),
          })
        ).json()
      ).auth
        ? T(5)
        : T(2);
    } catch (Y) {
      console.log('error', Y);
    }
    D();
  }
  function z() {
    y(!1);
  }
  return Vt(cU, {
    children: [
      he(lU, {}),
      !m || he('h3', { children: 'Create or delete user ' }),
      Vt(pU, {
        onSubmit: _(M),
        children: [
          !m || he(uU, { type: 'button', onClick: z, children: '×' }),
          he(Td, {
            ...R('login', { required: !0 }),
            type: 'login',
            placeholder: 'login',
          }),
          C.login && he('span', { children: 'This field is required' }),
          Vt(hU, {
            children: [
              he(Td, {
                ...R('password', { required: !0 }),
                type: f ? 'text' : 'password',
                name: 'password',
                placeholder: 'Password',
              }),
              he(vU, {
                onClick: () => v(!f),
                style: {
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                  fontSize: '24px',
                },
                children: f ? '👁️' : '🙈',
              }),
            ],
          }),
          C.password && he('span', { children: 'This field is required' }),
          !m ||
            Vt(tw, {
              children: [
                he(Td, {
                  ...R('email', { required: !0 }),
                  type: 'email',
                  placeholder: 'email',
                }),
                C.email && he('span', { children: 'This field is required' }),
                he(Td, {
                  ...R('descriptionUser', { required: !0 }),
                  type: 'text',
                  placeholder: 'description',
                }),
                C.descriptionUser &&
                  he('span', { children: 'This field is required' }),
                he('label', { htmlFor: 'role', children: 'Select role' }),
                Vt(mU, {
                  id: 'role',
                  name: 'role',
                  children: [
                    he('option', { value: 'root', children: 'Root' }),
                    he('option', { value: 'admin', children: 'Admin' }),
                    he('option', { value: 'user', children: 'User' }),
                  ],
                }),
              ],
            }),
          he(fU, { type: 'submit', value: m ? 'Create User' : 'Send' }),
          !m ||
            he(dU, {
              type: 'button',
              onClick: k,
              value: 'delete',
              children: '🗑 Delete Card',
            }),
        ],
      }),
    ],
  });
}
const gU = yt.div.withConfig({
    displayName: 'Login__StyledBaseField',
    componentId: 'sc-49vdt4-0',
  })([
    'display:flex;flex-direction:column;align-items:center;min-height:100vh;padding-top:20px;',
  ]),
  bU = yt.div.withConfig({
    displayName: 'Login__StaticBackground',
    componentId: 'sc-49vdt4-1',
  })(
    [
      'position:absolute;width:100vw;height:100vh;background-image:url(',
      ');background-repeat:repeat;background-size:450px;z-index:-1;',
    ],
    RF
  );
function SU({
  url: r,
  endPoint: a,
  products: o,
  card: s,
  rows: u,
  setCard: d,
  setProductState: f,
  setIsOpenModal: v,
  setAuth: m,
  isOpenModal: y,
  isAuth: b,
  token: T,
  isExpired: w,
}) {
  return Vt(tw, {
    children: [
      he(bU, {}),
      Vt(gU, {
        children: [
          he('h2', { children: 'Login' }),
          he(yU, {
            products: o,
            card: s,
            rows: u,
            setCard: d,
            setProductState: f,
            setIsOpenModal: v,
            isOpenModal: y,
            url: r,
            endPoint: 'users',
            isAuth: b,
            setAuth: m,
            token: T,
            isExpired: w,
          }),
        ],
      }),
    ],
  });
}
for (
  var KE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
    sC = new Map(),
    Ed = 0;
  Ed < KE.length;
  Ed++
) {
  var wd = Ed.toString(2);
  ((wd = '0'.repeat(6 - wd.length) + wd), sC.set(KE.charCodeAt(Ed), wd));
}
function lC(r) {
  try {
    if (typeof r != 'string' || r.split('.').length !== 3) return null;
    var a = (function (o) {
      for (var s, u = '', d = o.length, f = 0; f < d; f++)
        ((s = o[f]),
          (u += String.fromCodePoint(
            s > 251 && s < 254 && f + 5 < d
              ? 1073741824 * (s - 252) +
                  ((o[++f] - 128) << 24) +
                  ((o[++f] - 128) << 18) +
                  ((o[++f] - 128) << 12) +
                  ((o[++f] - 128) << 6) +
                  o[++f] -
                  128
              : s > 247 && s < 252 && f + 4 < d
                ? ((s - 248) << 24) +
                  ((o[++f] - 128) << 18) +
                  ((o[++f] - 128) << 12) +
                  ((o[++f] - 128) << 6) +
                  o[++f] -
                  128
                : s > 239 && s < 248 && f + 3 < d
                  ? ((s - 240) << 18) +
                    ((o[++f] - 128) << 12) +
                    ((o[++f] - 128) << 6) +
                    o[++f] -
                    128
                  : s > 223 && s < 240 && f + 2 < d
                    ? ((s - 224) << 12) + ((o[++f] - 128) << 6) + o[++f] - 128
                    : s > 191 && s < 224 && f + 1 < d
                      ? ((s - 192) << 6) + o[++f] - 128
                      : s
          )));
      return u;
    })(
      (function (o) {
        for (var s = '', u = 0; u < o.length; u++) s += sC.get(o.charCodeAt(u));
        s = s.slice(0, s.length - (s.length % 8));
        for (var d = [], f = 0; f < s.length / 8; f++)
          d.push(s.slice(8 * f, 8 * f + 8));
        return d;
      })(
        r
          .split('.')[1]
          .replaceAll('=', '')
          .replaceAll('-', '+')
          .replaceAll('_', '/')
      ).map(function (o) {
        return parseInt(o, 2);
      })
    );
    return JSON.parse(a);
  } catch (o) {
    return (console.error('There was an error decoding token: ', o), null);
  }
}
function TU(r) {
  var a = lC(r),
    o = !0;
  if (a && a.exp) {
    var s = new Date(0);
    (s.setUTCSeconds(a.exp), (o = s.valueOf() < new Date().valueOf()));
  }
  return o;
}
function EU(r) {
  var a = $.useState(!1),
    o = a[0],
    s = a[1],
    u = $.useState(null),
    d = u[0],
    f = u[1];
  $.useEffect(
    function () {
      v(r);
    },
    [r]
  );
  var v = function (m) {
    (f(lC(m)), s(TU(m)));
  };
  return { isExpired: o, decodedToken: d, reEvaluateToken: v };
}
const Cd = 'https://soft-rabit.onrender.com';
function wU({ products: r }) {
  const [a, o] = $.useState(r),
    [s, u] = $.useState(2),
    [d, f] = $.useState(!1),
    [v, m] = $.useState({
      id: '',
      email: '',
      name: '',
      role: '',
      description: '',
      token: '',
    }),
    { decodedToken: y, isExpired: b } = EU(v.token),
    [T, w] = $.useState(b),
    [R, D] = $.useState({
      id: '',
      name: '',
      description: '',
      price: '',
      img: [],
    }),
    [_, L] = $.useState(!1);
  return (
    $.useEffect(() => {
      if (typeof window < 'u') {
        (L(!0), o(r));
        const O = localStorage.getItem('token');
        O && m({ ...v, token: O });
      }
    }, [r]),
    $.useEffect(() => {
      (async () => {
        if (y)
          try {
            const C = await fetch(`${Cd}/users/${y.id}`, {
              method: 'GET',
              headers: { 'Content-Type': 'application/json' },
            });
            if (!C.ok) throw new Error(`HTTP error! status: ${C.status}`);
            const M = await C.json();
            m((k) => ({ ...k, ...M.user }));
          } catch (C) {
            console.error('error', C);
          }
        else console.warn('cant decoding token');
      })();
    }, [y, b]),
    $.useEffect(() => {
      function O() {
        const C = window.innerWidth;
        C < 480 ? u(4) : C < 768 ? u(3) : C < 1024 ? u(2) : u(1);
      }
      return (
        O(),
        window.addEventListener('resize', O),
        () => window.removeEventListener('resize', O)
      );
    }, []),
    _
      ? Vt('div', {
          children: [
            he('h1', { children: 'Server Rendering Example' }),
            he(wk, {
              children: Vt(Vi, {
                path: '/',
                element: he(_F, {}),
                children: [
                  he(Vi, {
                    index: !0,
                    element: he(EF, {
                      products: a,
                      card: R,
                      rows: s,
                      setCard: D,
                      setProductState: o,
                      setIsOpenModal: f,
                      isOpenModal: d,
                      url: Cd,
                      endPoint: '',
                      isAuth: T,
                      setAuth: w,
                      token: v.token,
                      isExpired: b,
                    }),
                  }),
                  he(Vi, {
                    path: 'login',
                    element: he(SU, {
                      products: a,
                      card: R,
                      rows: s,
                      setCard: D,
                      setProductState: o,
                      setIsOpenModal: f,
                      isOpenModal: d,
                      url: Cd,
                      endPoint: 'users',
                      isAuth: T,
                      setAuth: w,
                      token: v.token,
                      isExpired: b,
                    }),
                  }),
                  he(Vi, {
                    path: 'admin',
                    element: he(SF, {
                      products: a,
                      card: R,
                      rows: s,
                      setCard: D,
                      setProductState: o,
                      setIsOpenModal: f,
                      isOpenModal: d,
                      url: Cd,
                      endPoint: '',
                      isAuth: T,
                      setAuth: w,
                      token: v.token,
                      isExpired: b,
                    }),
                  }),
                  he(Vi, { path: 'orders', element: he(wF, {}) }),
                  he(Vi, { path: 'contacts', element: he(CF, {}) }),
                  he(Vi, { path: '*', element: he(xF, {}) }),
                ],
              }),
            }),
          ],
        })
      : null
  );
}
iw(
  document.getElementById('app'),
  he($.StrictMode, {
    children: he(Uk, {
      children: he(wU, { products: window.__INITIAL_PRODUCTS__ ?? [] }),
    }),
  })
);
