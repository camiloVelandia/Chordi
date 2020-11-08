webpackHotUpdate_N_E("pages/canciones",{

/***/ "./pages/canciones/index.js":
/*!**********************************!*\
  !*** ./pages/canciones/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "/mnt/c/Users/cmax9/documents/Developer/chordi/pages/canciones/index.js",
    _this = undefined,
    _s = $RefreshSig$();



var Canciones = function Canciones() {
  _s();

  var artist = 'juanes';
  var cancion = 'la paga';
  var API = "https://api.lyrics.ovh/v1/".concat(artist, "/").concat(cancion);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      letras = _useState[0],
      setLetras = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.fetch("".concat(API)).then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log(data); // setLetras(data);
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: "letras"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, _this);
};

_s(Canciones, "ikgf8WyTP2V9K8Dv0PmAmyBw3q8=");

_c = Canciones;
/* harmony default export */ __webpack_exports__["default"] = (Canciones);

var _c;

$RefreshReg$(_c, "Canciones");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FuY2lvbmVzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNhbmNpb25lcyIsImFydGlzdCIsImNhbmNpb24iLCJBUEkiLCJ1c2VTdGF0ZSIsImxldHJhcyIsInNldExldHJhcyIsInVzZUVmZmVjdCIsIndpbmRvdyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQ3RCLE1BQU1DLE1BQU0sR0FBQyxRQUFiO0FBQ0EsTUFBTUMsT0FBTyxHQUFDLFNBQWQ7QUFDQSxNQUFNQyxHQUFHLHVDQUFnQ0YsTUFBaEMsY0FBMENDLE9BQTFDLENBQVQ7O0FBSHNCLGtCQUlNRSxzREFBUSxDQUFDLEVBQUQsQ0FKZDtBQUFBLE1BSWZDLE1BSmU7QUFBQSxNQUlQQyxTQUpPOztBQU1wQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFVBQU0sQ0FDSEMsS0FESCxXQUNZTixHQURaLEdBRUdPLElBRkgsQ0FFUSxVQUFDQyxRQUFEO0FBQUEsYUFBY0EsUUFBUSxDQUFDQyxJQUFULEVBQWQ7QUFBQSxLQUZSLEVBR0dGLElBSEgsQ0FHUSxVQUFDRyxJQUFELEVBQVU7QUFDZEMsYUFBTyxDQUFDQyxHQUFSLENBQWFGLElBQWIsRUFEYyxDQUVkO0FBRUQsS0FQSDtBQVFELEdBVFEsRUFTTixFQVRNLENBQVQ7QUFVRixzQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0FyQkQ7O0dBQU1iLFM7O0tBQUFBLFM7QUF1QlNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhbmNpb25lcy42ZWUwODYyNjNjNDYxYzc0ZmVhMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IENhbmNpb25lcyA9ICgpID0+IHtcbiAgY29uc3QgYXJ0aXN0PSdqdWFuZXMnXG4gIGNvbnN0IGNhbmNpb249J2xhIHBhZ2EnXG4gIGNvbnN0IEFQSSA9IGBodHRwczovL2FwaS5seXJpY3Mub3ZoL3YxLyR7YXJ0aXN0fS8ke2NhbmNpb259YDtcbiAgY29uc3QgW2xldHJhcywgc2V0TGV0cmFzXSA9IHVzZVN0YXRlKHt9KVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIHdpbmRvd1xuICAgICAgICAuZmV0Y2goYCR7QVBJfWApXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCBkYXRhKVxuICAgICAgICAgIC8vIHNldExldHJhcyhkYXRhKTtcbiAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICBsZXRyYXNcbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYW5jaW9uZXM7Il0sInNvdXJjZVJvb3QiOiIifQ==