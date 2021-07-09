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
    setTime(25 * 60);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NvdW50ZG93bkNvbnRleHQudHN4Il0sIm5hbWVzIjpbImNvdW50ZG93blRpbWVvdXQiLCJDb3VudGRvd25Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNvdW50ZG93blByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VDb250ZXh0IiwiQ2hhbGxlbmdlc0NvbnRleHQiLCJzdGFydE5ld0NoYWxsZW5nZSIsInVzZVN0YXRlIiwidGltZSIsInNldFRpbWUiLCJpc0FjdGl2ZSIsInNldElzQWN0aXZlIiwiaGFzRmluaXNoZWQiLCJzZXRIYXNGaW5pc2hlZCIsIm1pbnV0ZXMiLCJNYXRoIiwiZmxvb3IiLCJzZWNvbmRzIiwic3RhcnRDb3VudGRvd24iLCJyZXNldENvdW50ZG93biIsImNsZWFyVGltZW91dCIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQWVBLElBQUlBLGdCQUFKO0FBRU8sSUFBTUMsZ0JBQWdCLGdCQUFHQywyREFBYSxDQUFDLEVBQUQsQ0FBdEM7QUFFQSxTQUFTQyxpQkFBVCxPQUFpRTtBQUFBOztBQUFBLE1BQXBDQyxRQUFvQyxRQUFwQ0EsUUFBb0M7O0FBQUEsb0JBQ3pDQyx3REFBVSxDQUFDQyxvRUFBRCxDQUQrQjtBQUFBLE1BQzlEQyxpQkFEOEQsZUFDOURBLGlCQUQ4RDs7QUFBQSxrQkFHOUNDLHNEQUFRLENBQUMsS0FBSyxFQUFOLENBSHNDO0FBQUEsTUFHL0RDLElBSCtEO0FBQUEsTUFHekRDLE9BSHlELGlCQUd2Qjs7O0FBSHVCLG1CQUl0Q0Ysc0RBQVEsQ0FBQyxLQUFELENBSjhCO0FBQUEsTUFJL0RHLFFBSitEO0FBQUEsTUFJckRDLFdBSnFELGtCQUluQjs7O0FBSm1CLG1CQUtoQ0osc0RBQVEsQ0FBQyxLQUFELENBTHdCO0FBQUEsTUFLL0RLLFdBTCtEO0FBQUEsTUFLbERDLGNBTGtELGtCQUtmOzs7QUFFdkQsTUFBTUMsT0FBTyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1IsSUFBSSxHQUFHLEVBQWxCLENBQWhCLENBUHNFLENBT3ZCOztBQUMvQyxNQUFNUyxPQUFPLEdBQUdULElBQUksR0FBRyxFQUF2QixDQVJzRSxDQVF2Qjs7QUFFL0MsV0FBU1UsY0FBVCxHQUEwQjtBQUN4QlAsZUFBVyxDQUFDLElBQUQsQ0FBWDtBQUNEOztBQUVELFdBQVNRLGNBQVQsR0FBMEI7QUFDeEJDLGdCQUFZLENBQUNyQixnQkFBRCxDQUFaO0FBQ0FZLGVBQVcsQ0FBQyxLQUFELENBQVg7QUFDQUYsV0FBTyxDQUFDLEtBQUssRUFBTixDQUFQO0FBQ0FJLGtCQUFjLENBQUMsS0FBRCxDQUFkO0FBQ0QsR0FuQnFFLENBc0J0RTtBQUNBOzs7QUFDQVEseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSVgsUUFBUSxJQUFJRixJQUFJLEdBQUcsQ0FBdkIsRUFBMEI7QUFDeEJULHNCQUFnQixHQUFHdUIsVUFBVSxDQUFDLFlBQU07QUFDbENiLGVBQU8sQ0FBQ0QsSUFBSSxHQUFHLENBQVIsQ0FBUDtBQUNELE9BRjRCLEVBRTFCLElBRjBCLENBQTdCO0FBR0QsS0FKRCxNQUlPLElBQUlFLFFBQVEsSUFBSUYsSUFBSSxLQUFLLENBQXpCLEVBQTRCO0FBQ2pDSyxvQkFBYyxDQUFDLElBQUQsQ0FBZCxDQURpQyxDQUNUOztBQUN4QkYsaUJBQVcsQ0FBQyxLQUFELENBQVgsQ0FGaUMsQ0FFVDs7QUFDeEJMLHVCQUFpQjtBQUNsQjtBQUNGLEdBVlEsRUFVTixDQUFDSSxRQUFELEVBQVdGLElBQVgsQ0FWTSxDQUFUO0FBWUEsc0JBQ0UscUVBQUMsZ0JBQUQsQ0FBa0IsUUFBbEI7QUFBMkIsU0FBSyxFQUFFO0FBQ2hDTSxhQUFPLEVBQVBBLE9BRGdDO0FBRWhDRyxhQUFPLEVBQVBBLE9BRmdDO0FBR2hDTCxpQkFBVyxFQUFYQSxXQUhnQztBQUloQ0YsY0FBUSxFQUFSQSxRQUpnQztBQUtoQ1Esb0JBQWMsRUFBZEEsY0FMZ0M7QUFNaENDLG9CQUFjLEVBQWRBO0FBTmdDLEtBQWxDO0FBQUEsY0FRR2hCO0FBUkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBYUQ7O0dBakRlRCxpQjs7S0FBQUEsaUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDVhYWU3NjQwYzFiNGM2Mjk5OTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDaGFsbGVuZ2VzQ29udGV4dCB9IGZyb20gXCIuL0NoYWxsZW5nZXNDb250ZXh0XCI7XHJcblxyXG5pbnRlcmZhY2UgQ291bnRkb3duQ29udGV4dERhdGEge1xyXG4gICAgICBtaW51dGVzOiBudW1iZXI7XHJcbiAgICAgIHNlY29uZHM6IG51bWJlcjtcclxuICAgICAgaGFzRmluaXNoZWQ6IGJvb2xlYW47XHJcbiAgICAgIGlzQWN0aXZlOiBib29sZWFuO1xyXG4gICAgICBzdGFydENvdW50ZG93bjogKCkgPT4gdm9pZDtcclxuICAgICAgcmVzZXRDb3VudGRvd246ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDb3VudGRvd25Qcm92aWRlclByb3BzIHtcclxuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG5sZXQgY291bnRkb3duVGltZW91dDogTm9kZUpTLlRpbWVvdXQ7XHJcblxyXG5leHBvcnQgY29uc3QgQ291bnRkb3duQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ291bnRkb3duQ29udGV4dERhdGEpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENvdW50ZG93blByb3ZpZGVyKHsgY2hpbGRyZW4gfTogQ291bnRkb3duUHJvdmlkZXJQcm9wcykge1xyXG4gIGNvbnN0IHsgc3RhcnROZXdDaGFsbGVuZ2UgfT0gdXNlQ29udGV4dChDaGFsbGVuZ2VzQ29udGV4dCk7XHJcbiAgXHJcbiAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoMjUgKiA2MCk7ICAgICAvLyB1c2VTdGF0ZSBjb2xvY2EgbyBlc3RhZG8gbm8gY29tcG9uZW50ZSAtIGNvbWXDp2EgZW0gMjUgbWludXRvcyAtIDYwIMOpIGEgcXVhbnRpZGRlIGRlIHNlZ3VuZG9zIGVtIGNhZGEgbWludXRvXHJcbiAgY29uc3QgW2lzQWN0aXZlLCBzZXRJc0FjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7ICAgLy8gZXNzZSBlc3RhZG8gdmFpIGFybWF6ZW5hciBzZSBvIGNvdW50ZG93biBlc3TDoSBpbmljaWFkbyBvdSBwYXJhZG9cclxuICBjb25zdCBbaGFzRmluaXNoZWQsIHNldEhhc0ZpbmlzaGVkXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gZXNzZSBlc3RhZG8gdmFpIGFybWF6ZW5hciBzZSBvIGNpY2xvIHRlcm1pbm91XHJcblxyXG4gIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHRpbWUgLyA2MCk7ICAgICAgICAgLy8gY2FsY3VsYSBvcyBtaW51dG9zIC0gbWF0aCDDqSB1c2FkbyBwYXJhIGFycmVkb25kYXIgLSBmbG9vciBhcnJlZG9uZGEgcHJhIGJhaXhvXHJcbiAgY29uc3Qgc2Vjb25kcyA9IHRpbWUgJSA2MDsgICAgICAgICAgICAgICAgICAgICAvLyBjYWxjdWxhIG9zIHNlZ3VuZG9zXHJcblxyXG4gIGZ1bmN0aW9uIHN0YXJ0Q291bnRkb3duKCkge1xyXG4gICAgc2V0SXNBY3RpdmUodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZXNldENvdW50ZG93bigpIHtcclxuICAgIGNsZWFyVGltZW91dChjb3VudGRvd25UaW1lb3V0KTtcclxuICAgIHNldElzQWN0aXZlKGZhbHNlKTtcclxuICAgIHNldFRpbWUoMjUgKiA2MCk7XHJcbiAgICBzZXRIYXNGaW5pc2hlZChmYWxzZSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gdXNlRWZmZWN0IMOpIHVtIGdlcmFkb3IgZGUgZWZlaXRvcyBjb2xhdGVyYWlzIFxyXG4gIC8vIHNlIGFjdGl2ZSBmb3IgdHJ1ZSBlIG8gdGltZSBuw6NvIGNoZWdvdSBhIDAsIGRlcG9pcyBkZSAxIHNlZ3VuZG9zICgxMDAwKSwgbyBjb3VudGRvd24gdmFpIGRpbWludWlyIGVtIDEgc2VndW5kb1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaXNBY3RpdmUgJiYgdGltZSA+IDApIHtcclxuICAgICAgY291bnRkb3duVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWUodGltZSAtIDEpO1xyXG4gICAgICB9LCAxMDAwKVxyXG4gICAgfSBlbHNlIGlmIChpc0FjdGl2ZSAmJiB0aW1lID09PSAwKSB7XHJcbiAgICAgIHNldEhhc0ZpbmlzaGVkKHRydWUpOyAgIC8vIGNpY2xvIGZpbmFsaXphZG8gdmVyZGFkZWlyb1xyXG4gICAgICBzZXRJc0FjdGl2ZShmYWxzZSk7ICAgICAvLyBjb250YWRvciBmaWNhIGluYXRpdm9cclxuICAgICAgc3RhcnROZXdDaGFsbGVuZ2UoKTtcclxuICAgIH1cclxuICB9LCBbaXNBY3RpdmUsIHRpbWVdKVxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8Q291bnRkb3duQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xyXG4gICAgICBtaW51dGVzLFxyXG4gICAgICBzZWNvbmRzLFxyXG4gICAgICBoYXNGaW5pc2hlZCxcclxuICAgICAgaXNBY3RpdmUsXHJcbiAgICAgIHN0YXJ0Q291bnRkb3duLFxyXG4gICAgICByZXNldENvdW50ZG93bixcclxuICAgIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0NvdW50ZG93bkNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=