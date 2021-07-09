webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/readOnlyError.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _readOnlyError; });
function _readOnlyError(name) {
  throw new TypeError("\"" + name + "\" is read-only");
}

/***/ }),

/***/ "./src/contexts/CountdownContext.tsx":
/*!*******************************************!*\
  !*** ./src/contexts/CountdownContext.tsx ***!
  \*******************************************/
/*! exports provided: CountdownContext, CountdownProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownContext", function() { return CountdownContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownProvider", function() { return CountdownProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Fernando_Documents_ESTUDOS_TI_Rocketseat_NLW_aulas_semova_next_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ChallengesContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChallengesContext */ "./src/contexts/ChallengesContext.tsx");



var _jsxFileName = "C:\\Users\\Fernando\\Documents\\ESTUDOS-TI\\Rocketseat\\NLW\\aulas\\semova-next\\src\\contexts\\CountdownContext.tsx",
    _s = $RefreshSig$();



var countdownTimeout;
var CountdownContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])({});
function CountdownProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_ChallengesContext__WEBPACK_IMPORTED_MODULE_3__["ChallengesContext"]),
      startNewChallenge = _useContext.startNewChallenge;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(25 * 60),
      time = _useState[0],
      setTime = _useState[1]; // useState coloca o estado no componente - começaem 25 minutos - 60 é a quantidde de segundos em cada minuto


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isActive = _useState2[0],
      setIsActive = _useState2[1]; // esse estado vai armazenar se o countdown está iniciado ou parado


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      hasFinished = _useState3[0],
      setHasFinished = _useState3[1]; // esse estado vai armazenar se o ciclo terminou


  var minutes = Math.floor(time / 60); // calcula os minutos - math é usado para arredondar - floor arredonda pra baixo

  var seconds = time % 60; // calcula os segundos

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime = (Object(C_Users_Fernando_Documents_ESTUDOS_TI_Rocketseat_NLW_aulas_semova_next_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__["default"])("setTime"), Math.floor(0.416 * 60));
    setHasFinished(false);
  } // useEffect é um gerador de efeitos colaterais 
  // se active for true e o time não chegou a 0, depois de 1 segundos (1000), o countdown vai diminuir em 1 segundo


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(function () {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true); // ciclo finalizado verdadeiro

      setIsActive(false); // contador fica inativo

      startNewChallenge();
    }
  }, [isActive, time]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CountdownContext.Provider, {
    value: {
      minutes: minutes,
      seconds: seconds,
      hasFinished: hasFinished,
      isActive: isActive,
      startCountdown: startCountdown,
      resetCountdown: resetCountdown
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 5
  }, this);
}

_s(CountdownProvider, "mj5/cnN4jENLd9Ysf8U5sf/QRNY=");

_c = CountdownProvider;

var _c;

$RefreshReg$(_c, "CountdownProvider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3JlYWRPbmx5RXJyb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0cy9Db3VudGRvd25Db250ZXh0LnRzeCJdLCJuYW1lcyI6WyJjb3VudGRvd25UaW1lb3V0IiwiQ291bnRkb3duQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDb3VudGRvd25Qcm92aWRlciIsImNoaWxkcmVuIiwidXNlQ29udGV4dCIsIkNoYWxsZW5nZXNDb250ZXh0Iiwic3RhcnROZXdDaGFsbGVuZ2UiLCJ1c2VTdGF0ZSIsInRpbWUiLCJzZXRUaW1lIiwiaXNBY3RpdmUiLCJzZXRJc0FjdGl2ZSIsImhhc0ZpbmlzaGVkIiwic2V0SGFzRmluaXNoZWQiLCJtaW51dGVzIiwiTWF0aCIsImZsb29yIiwic2Vjb25kcyIsInN0YXJ0Q291bnRkb3duIiwicmVzZXRDb3VudGRvd24iLCJjbGVhclRpbWVvdXQiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBZUEsSUFBSUEsZ0JBQUo7QUFFTyxJQUFNQyxnQkFBZ0IsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUF0QztBQUVBLFNBQVNDLGlCQUFULE9BQWlFO0FBQUE7O0FBQUEsTUFBcENDLFFBQW9DLFFBQXBDQSxRQUFvQzs7QUFBQSxvQkFDekNDLHdEQUFVLENBQUNDLG9FQUFELENBRCtCO0FBQUEsTUFDOURDLGlCQUQ4RCxlQUM5REEsaUJBRDhEOztBQUFBLGtCQUc5Q0Msc0RBQVEsQ0FBQyxLQUFLLEVBQU4sQ0FIc0M7QUFBQSxNQUcvREMsSUFIK0Q7QUFBQSxNQUd6REMsT0FIeUQsaUJBR3ZCOzs7QUFIdUIsbUJBSXRDRixzREFBUSxDQUFDLEtBQUQsQ0FKOEI7QUFBQSxNQUkvREcsUUFKK0Q7QUFBQSxNQUlyREMsV0FKcUQsa0JBSW5COzs7QUFKbUIsbUJBS2hDSixzREFBUSxDQUFDLEtBQUQsQ0FMd0I7QUFBQSxNQUsvREssV0FMK0Q7QUFBQSxNQUtsREMsY0FMa0Qsa0JBS2Y7OztBQUV2RCxNQUFNQyxPQUFPLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXUixJQUFJLEdBQUcsRUFBbEIsQ0FBaEIsQ0FQc0UsQ0FPdkI7O0FBQy9DLE1BQU1TLE9BQU8sR0FBR1QsSUFBSSxHQUFHLEVBQXZCLENBUnNFLENBUXZCOztBQUUvQyxXQUFTVSxjQUFULEdBQTBCO0FBQ3hCUCxlQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0Q7O0FBRUQsV0FBU1EsY0FBVCxHQUEwQjtBQUN4QkMsZ0JBQVksQ0FBQ3JCLGdCQUFELENBQVo7QUFDQVksZUFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNBRixXQUFPLDRMQUFHTSxJQUFJLENBQUNDLEtBQUwsQ0FBVyxRQUFRLEVBQW5CLENBQUgsQ0FBUDtBQUNBSCxrQkFBYyxDQUFDLEtBQUQsQ0FBZDtBQUNELEdBbkJxRSxDQXNCdEU7QUFDQTs7O0FBQ0FRLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlYLFFBQVEsSUFBSUYsSUFBSSxHQUFHLENBQXZCLEVBQTBCO0FBQ3hCVCxzQkFBZ0IsR0FBR3VCLFVBQVUsQ0FBQyxZQUFNO0FBQ2xDYixlQUFPLENBQUNELElBQUksR0FBRyxDQUFSLENBQVA7QUFDRCxPQUY0QixFQUUxQixJQUYwQixDQUE3QjtBQUdELEtBSkQsTUFJTyxJQUFJRSxRQUFRLElBQUlGLElBQUksS0FBSyxDQUF6QixFQUE0QjtBQUNqQ0ssb0JBQWMsQ0FBQyxJQUFELENBQWQsQ0FEaUMsQ0FDVDs7QUFDeEJGLGlCQUFXLENBQUMsS0FBRCxDQUFYLENBRmlDLENBRVQ7O0FBQ3hCTCx1QkFBaUI7QUFDbEI7QUFDRixHQVZRLEVBVU4sQ0FBQ0ksUUFBRCxFQUFXRixJQUFYLENBVk0sQ0FBVDtBQVlBLHNCQUNFLHFFQUFDLGdCQUFELENBQWtCLFFBQWxCO0FBQTJCLFNBQUssRUFBRTtBQUNoQ00sYUFBTyxFQUFQQSxPQURnQztBQUVoQ0csYUFBTyxFQUFQQSxPQUZnQztBQUdoQ0wsaUJBQVcsRUFBWEEsV0FIZ0M7QUFJaENGLGNBQVEsRUFBUkEsUUFKZ0M7QUFLaENRLG9CQUFjLEVBQWRBLGNBTGdDO0FBTWhDQyxvQkFBYyxFQUFkQTtBQU5nQyxLQUFsQztBQUFBLGNBUUdoQjtBQVJIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWFEOztHQWpEZUQsaUI7O0tBQUFBLGlCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJiNzgxYTgwOTI0ZWNiYTY4NDc5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcmVhZE9ubHlFcnJvcihuYW1lKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJcXFwiXCIgKyBuYW1lICsgXCJcXFwiIGlzIHJlYWQtb25seVwiKTtcbn0iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ2hhbGxlbmdlc0NvbnRleHQgfSBmcm9tIFwiLi9DaGFsbGVuZ2VzQ29udGV4dFwiO1xyXG5cclxuaW50ZXJmYWNlIENvdW50ZG93bkNvbnRleHREYXRhIHtcclxuICAgICAgbWludXRlczogbnVtYmVyO1xyXG4gICAgICBzZWNvbmRzOiBudW1iZXI7XHJcbiAgICAgIGhhc0ZpbmlzaGVkOiBib29sZWFuO1xyXG4gICAgICBpc0FjdGl2ZTogYm9vbGVhbjtcclxuICAgICAgc3RhcnRDb3VudGRvd246ICgpID0+IHZvaWQ7XHJcbiAgICAgIHJlc2V0Q291bnRkb3duOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ291bnRkb3duUHJvdmlkZXJQcm9wcyB7XHJcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxufVxyXG5cclxubGV0IGNvdW50ZG93blRpbWVvdXQ6IE5vZGVKUy5UaW1lb3V0O1xyXG5cclxuZXhwb3J0IGNvbnN0IENvdW50ZG93bkNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIENvdW50ZG93bkNvbnRleHREYXRhKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb3VudGRvd25Qcm92aWRlcih7IGNoaWxkcmVuIH06IENvdW50ZG93blByb3ZpZGVyUHJvcHMpIHtcclxuICBjb25zdCB7IHN0YXJ0TmV3Q2hhbGxlbmdlIH09IHVzZUNvbnRleHQoQ2hhbGxlbmdlc0NvbnRleHQpO1xyXG4gIFxyXG4gIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKDI1ICogNjApOyAgICAgLy8gdXNlU3RhdGUgY29sb2NhIG8gZXN0YWRvIG5vIGNvbXBvbmVudGUgLSBjb21lw6dhZW0gMjUgbWludXRvcyAtIDYwIMOpIGEgcXVhbnRpZGRlIGRlIHNlZ3VuZG9zIGVtIGNhZGEgbWludXRvXHJcbiAgY29uc3QgW2lzQWN0aXZlLCBzZXRJc0FjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7ICAgLy8gZXNzZSBlc3RhZG8gdmFpIGFybWF6ZW5hciBzZSBvIGNvdW50ZG93biBlc3TDoSBpbmljaWFkbyBvdSBwYXJhZG9cclxuICBjb25zdCBbaGFzRmluaXNoZWQsIHNldEhhc0ZpbmlzaGVkXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gZXNzZSBlc3RhZG8gdmFpIGFybWF6ZW5hciBzZSBvIGNpY2xvIHRlcm1pbm91XHJcblxyXG4gIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHRpbWUgLyA2MCk7ICAgICAgICAgLy8gY2FsY3VsYSBvcyBtaW51dG9zIC0gbWF0aCDDqSB1c2FkbyBwYXJhIGFycmVkb25kYXIgLSBmbG9vciBhcnJlZG9uZGEgcHJhIGJhaXhvXHJcbiAgY29uc3Qgc2Vjb25kcyA9IHRpbWUgJSA2MDsgICAgICAgICAgICAgICAgICAgICAvLyBjYWxjdWxhIG9zIHNlZ3VuZG9zXHJcblxyXG4gIGZ1bmN0aW9uIHN0YXJ0Q291bnRkb3duKCkge1xyXG4gICAgc2V0SXNBY3RpdmUodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZXNldENvdW50ZG93bigpIHtcclxuICAgIGNsZWFyVGltZW91dChjb3VudGRvd25UaW1lb3V0KTtcclxuICAgIHNldElzQWN0aXZlKGZhbHNlKTtcclxuICAgIHNldFRpbWUgPSBNYXRoLmZsb29yKDAuNDE2ICogNjApO1xyXG4gICAgc2V0SGFzRmluaXNoZWQoZmFsc2UpO1xyXG4gIH1cclxuXHJcblxyXG4gIC8vIHVzZUVmZmVjdCDDqSB1bSBnZXJhZG9yIGRlIGVmZWl0b3MgY29sYXRlcmFpcyBcclxuICAvLyBzZSBhY3RpdmUgZm9yIHRydWUgZSBvIHRpbWUgbsOjbyBjaGVnb3UgYSAwLCBkZXBvaXMgZGUgMSBzZWd1bmRvcyAoMTAwMCksIG8gY291bnRkb3duIHZhaSBkaW1pbnVpciBlbSAxIHNlZ3VuZG9cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGlzQWN0aXZlICYmIHRpbWUgPiAwKSB7XHJcbiAgICAgIGNvdW50ZG93blRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBzZXRUaW1lKHRpbWUgLSAxKTtcclxuICAgICAgfSwgMTAwMClcclxuICAgIH0gZWxzZSBpZiAoaXNBY3RpdmUgJiYgdGltZSA9PT0gMCkge1xyXG4gICAgICBzZXRIYXNGaW5pc2hlZCh0cnVlKTsgICAvLyBjaWNsbyBmaW5hbGl6YWRvIHZlcmRhZGVpcm9cclxuICAgICAgc2V0SXNBY3RpdmUoZmFsc2UpOyAgICAgLy8gY29udGFkb3IgZmljYSBpbmF0aXZvXHJcbiAgICAgIHN0YXJ0TmV3Q2hhbGxlbmdlKCk7XHJcbiAgICB9XHJcbiAgfSwgW2lzQWN0aXZlLCB0aW1lXSlcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPENvdW50ZG93bkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tcclxuICAgICAgbWludXRlcyxcclxuICAgICAgc2Vjb25kcyxcclxuICAgICAgaGFzRmluaXNoZWQsXHJcbiAgICAgIGlzQWN0aXZlLFxyXG4gICAgICBzdGFydENvdW50ZG93bixcclxuICAgICAgcmVzZXRDb3VudGRvd24sXHJcbiAgICB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Db3VudGRvd25Db250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9