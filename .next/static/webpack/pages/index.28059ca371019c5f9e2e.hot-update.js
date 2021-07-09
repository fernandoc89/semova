webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChallengesContext */ "./src/contexts/ChallengesContext.tsx");


var _jsxFileName = "C:\\Users\\Fernando\\Documents\\ESTUDOS-TI\\Rocketseat\\NLW\\aulas\\semova-next\\src\\contexts\\CountdownContext.tsx",
    _s = $RefreshSig$();



var countdownTimeout;
var CountdownContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
function CountdownProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]),
      startNewChallenge = _useContext.startNewChallenge;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(25 * 60),
      time = _useState[0],
      setTime = _useState[1]; // useState coloca o estado no componente - começa em 25 minutos - 60 é a quantidde de segundos em cada minuto


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isActive = _useState2[0],
      setIsActive = _useState2[1]; // esse estado vai armazenar se o countdown está iniciado ou parado


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
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
    setTime;
    setHasFinished(false);
  } // useEffect é um gerador de efeitos colaterais 
  // se active for true e o time não chegou a 0, depois de 1 segundos (1000), o countdown vai diminuir em 1 segundo


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NvdW50ZG93bkNvbnRleHQudHN4Il0sIm5hbWVzIjpbImNvdW50ZG93blRpbWVvdXQiLCJDb3VudGRvd25Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNvdW50ZG93blByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VDb250ZXh0IiwiQ2hhbGxlbmdlc0NvbnRleHQiLCJzdGFydE5ld0NoYWxsZW5nZSIsInVzZVN0YXRlIiwidGltZSIsInNldFRpbWUiLCJpc0FjdGl2ZSIsInNldElzQWN0aXZlIiwiaGFzRmluaXNoZWQiLCJzZXRIYXNGaW5pc2hlZCIsIm1pbnV0ZXMiLCJNYXRoIiwiZmxvb3IiLCJzZWNvbmRzIiwic3RhcnRDb3VudGRvd24iLCJyZXNldENvdW50ZG93biIsImNsZWFyVGltZW91dCIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQWVBLElBQUlBLGdCQUFKO0FBRU8sSUFBTUMsZ0JBQWdCLGdCQUFHQywyREFBYSxDQUFDLEVBQUQsQ0FBdEM7QUFFQSxTQUFTQyxpQkFBVCxPQUFpRTtBQUFBOztBQUFBLE1BQXBDQyxRQUFvQyxRQUFwQ0EsUUFBb0M7O0FBQUEsb0JBQ3pDQyx3REFBVSxDQUFDQyxvRUFBRCxDQUQrQjtBQUFBLE1BQzlEQyxpQkFEOEQsZUFDOURBLGlCQUQ4RDs7QUFBQSxrQkFHOUNDLHNEQUFRLENBQUMsS0FBSyxFQUFOLENBSHNDO0FBQUEsTUFHL0RDLElBSCtEO0FBQUEsTUFHekRDLE9BSHlELGlCQUd2Qjs7O0FBSHVCLG1CQUl0Q0Ysc0RBQVEsQ0FBQyxLQUFELENBSjhCO0FBQUEsTUFJL0RHLFFBSitEO0FBQUEsTUFJckRDLFdBSnFELGtCQUluQjs7O0FBSm1CLG1CQUtoQ0osc0RBQVEsQ0FBQyxLQUFELENBTHdCO0FBQUEsTUFLL0RLLFdBTCtEO0FBQUEsTUFLbERDLGNBTGtELGtCQUtmOzs7QUFFdkQsTUFBTUMsT0FBTyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1IsSUFBSSxHQUFHLEVBQWxCLENBQWhCLENBUHNFLENBT3ZCOztBQUMvQyxNQUFNUyxPQUFPLEdBQUdULElBQUksR0FBRyxFQUF2QixDQVJzRSxDQVF2Qjs7QUFFL0MsV0FBU1UsY0FBVCxHQUEwQjtBQUN4QlAsZUFBVyxDQUFDLElBQUQsQ0FBWDtBQUNEOztBQUVELFdBQVNRLGNBQVQsR0FBMEI7QUFDeEJDLGdCQUFZLENBQUNyQixnQkFBRCxDQUFaO0FBQ0FZLGVBQVcsQ0FBQyxLQUFELENBQVg7QUFDQUYsV0FBTztBQUNQSSxrQkFBYyxDQUFDLEtBQUQsQ0FBZDtBQUNELEdBbkJxRSxDQXNCdEU7QUFDQTs7O0FBQ0FRLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlYLFFBQVEsSUFBSUYsSUFBSSxHQUFHLENBQXZCLEVBQTBCO0FBQ3hCVCxzQkFBZ0IsR0FBR3VCLFVBQVUsQ0FBQyxZQUFNO0FBQ2xDYixlQUFPLENBQUNELElBQUksR0FBRyxDQUFSLENBQVA7QUFDRCxPQUY0QixFQUUxQixJQUYwQixDQUE3QjtBQUdELEtBSkQsTUFJTyxJQUFJRSxRQUFRLElBQUlGLElBQUksS0FBSyxDQUF6QixFQUE0QjtBQUNqQ0ssb0JBQWMsQ0FBQyxJQUFELENBQWQsQ0FEaUMsQ0FDVDs7QUFDeEJGLGlCQUFXLENBQUMsS0FBRCxDQUFYLENBRmlDLENBRVQ7O0FBQ3hCTCx1QkFBaUI7QUFDbEI7QUFDRixHQVZRLEVBVU4sQ0FBQ0ksUUFBRCxFQUFXRixJQUFYLENBVk0sQ0FBVDtBQVlBLHNCQUNFLHFFQUFDLGdCQUFELENBQWtCLFFBQWxCO0FBQTJCLFNBQUssRUFBRTtBQUNoQ00sYUFBTyxFQUFQQSxPQURnQztBQUVoQ0csYUFBTyxFQUFQQSxPQUZnQztBQUdoQ0wsaUJBQVcsRUFBWEEsV0FIZ0M7QUFJaENGLGNBQVEsRUFBUkEsUUFKZ0M7QUFLaENRLG9CQUFjLEVBQWRBLGNBTGdDO0FBTWhDQyxvQkFBYyxFQUFkQTtBQU5nQyxLQUFsQztBQUFBLGNBUUdoQjtBQVJIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWFEOztHQWpEZUQsaUI7O0tBQUFBLGlCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjI4MDU5Y2EzNzEwMTljNWY5ZTJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ2hhbGxlbmdlc0NvbnRleHQgfSBmcm9tIFwiLi9DaGFsbGVuZ2VzQ29udGV4dFwiO1xyXG5cclxuaW50ZXJmYWNlIENvdW50ZG93bkNvbnRleHREYXRhIHtcclxuICAgICAgbWludXRlczogbnVtYmVyO1xyXG4gICAgICBzZWNvbmRzOiBudW1iZXI7XHJcbiAgICAgIGhhc0ZpbmlzaGVkOiBib29sZWFuO1xyXG4gICAgICBpc0FjdGl2ZTogYm9vbGVhbjtcclxuICAgICAgc3RhcnRDb3VudGRvd246ICgpID0+IHZvaWQ7XHJcbiAgICAgIHJlc2V0Q291bnRkb3duOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ291bnRkb3duUHJvdmlkZXJQcm9wcyB7XHJcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxufVxyXG5cclxubGV0IGNvdW50ZG93blRpbWVvdXQ6IE5vZGVKUy5UaW1lb3V0O1xyXG5cclxuZXhwb3J0IGNvbnN0IENvdW50ZG93bkNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIENvdW50ZG93bkNvbnRleHREYXRhKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb3VudGRvd25Qcm92aWRlcih7IGNoaWxkcmVuIH06IENvdW50ZG93blByb3ZpZGVyUHJvcHMpIHtcclxuICBjb25zdCB7IHN0YXJ0TmV3Q2hhbGxlbmdlIH09IHVzZUNvbnRleHQoQ2hhbGxlbmdlc0NvbnRleHQpO1xyXG4gIFxyXG4gIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKDI1ICogNjApOyAgICAgLy8gdXNlU3RhdGUgY29sb2NhIG8gZXN0YWRvIG5vIGNvbXBvbmVudGUgLSBjb21lw6dhIGVtIDI1IG1pbnV0b3MgLSA2MCDDqSBhIHF1YW50aWRkZSBkZSBzZWd1bmRvcyBlbSBjYWRhIG1pbnV0b1xyXG4gIGNvbnN0IFtpc0FjdGl2ZSwgc2V0SXNBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpOyAgIC8vIGVzc2UgZXN0YWRvIHZhaSBhcm1hemVuYXIgc2UgbyBjb3VudGRvd24gZXN0w6EgaW5pY2lhZG8gb3UgcGFyYWRvXHJcbiAgY29uc3QgW2hhc0ZpbmlzaGVkLCBzZXRIYXNGaW5pc2hlZF0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIGVzc2UgZXN0YWRvIHZhaSBhcm1hemVuYXIgc2UgbyBjaWNsbyB0ZXJtaW5vdVxyXG5cclxuICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcih0aW1lIC8gNjApOyAgICAgICAgIC8vIGNhbGN1bGEgb3MgbWludXRvcyAtIG1hdGggw6kgdXNhZG8gcGFyYSBhcnJlZG9uZGFyIC0gZmxvb3IgYXJyZWRvbmRhIHByYSBiYWl4b1xyXG4gIGNvbnN0IHNlY29uZHMgPSB0aW1lICUgNjA7ICAgICAgICAgICAgICAgICAgICAgLy8gY2FsY3VsYSBvcyBzZWd1bmRvc1xyXG5cclxuICBmdW5jdGlvbiBzdGFydENvdW50ZG93bigpIHtcclxuICAgIHNldElzQWN0aXZlKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVzZXRDb3VudGRvd24oKSB7XHJcbiAgICBjbGVhclRpbWVvdXQoY291bnRkb3duVGltZW91dCk7XHJcbiAgICBzZXRJc0FjdGl2ZShmYWxzZSk7XHJcbiAgICBzZXRUaW1lO1xyXG4gICAgc2V0SGFzRmluaXNoZWQoZmFsc2UpO1xyXG4gIH1cclxuXHJcblxyXG4gIC8vIHVzZUVmZmVjdCDDqSB1bSBnZXJhZG9yIGRlIGVmZWl0b3MgY29sYXRlcmFpcyBcclxuICAvLyBzZSBhY3RpdmUgZm9yIHRydWUgZSBvIHRpbWUgbsOjbyBjaGVnb3UgYSAwLCBkZXBvaXMgZGUgMSBzZWd1bmRvcyAoMTAwMCksIG8gY291bnRkb3duIHZhaSBkaW1pbnVpciBlbSAxIHNlZ3VuZG9cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGlzQWN0aXZlICYmIHRpbWUgPiAwKSB7XHJcbiAgICAgIGNvdW50ZG93blRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBzZXRUaW1lKHRpbWUgLSAxKTtcclxuICAgICAgfSwgMTAwMClcclxuICAgIH0gZWxzZSBpZiAoaXNBY3RpdmUgJiYgdGltZSA9PT0gMCkge1xyXG4gICAgICBzZXRIYXNGaW5pc2hlZCh0cnVlKTsgICAvLyBjaWNsbyBmaW5hbGl6YWRvIHZlcmRhZGVpcm9cclxuICAgICAgc2V0SXNBY3RpdmUoZmFsc2UpOyAgICAgLy8gY29udGFkb3IgZmljYSBpbmF0aXZvXHJcbiAgICAgIHN0YXJ0TmV3Q2hhbGxlbmdlKCk7XHJcbiAgICB9XHJcbiAgfSwgW2lzQWN0aXZlLCB0aW1lXSlcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPENvdW50ZG93bkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tcclxuICAgICAgbWludXRlcyxcclxuICAgICAgc2Vjb25kcyxcclxuICAgICAgaGFzRmluaXNoZWQsXHJcbiAgICAgIGlzQWN0aXZlLFxyXG4gICAgICBzdGFydENvdW50ZG93bixcclxuICAgICAgcmVzZXRDb3VudGRvd24sXHJcbiAgICB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Db3VudGRvd25Db250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9