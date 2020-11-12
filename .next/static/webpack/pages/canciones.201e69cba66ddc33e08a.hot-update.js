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
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./pages/canciones/styles.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Spinner */ "./components/Spinner/index.js");


var _jsxFileName = "/mnt/c/Users/cmax9/documents/Developer/chordi/pages/canciones/index.js",
    _this = undefined,
    _s = $RefreshSig$();





var Canciones = function Canciones() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      letras = _useState[0],
      setLetras = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("juanes"),
      formArtist = _useState2[0],
      setFormArtist = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("la paga"),
      formSong = _useState3[0],
      setFormSong = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var API = "https://api.lyrics.ovh/v1/".concat(formArtist, "/").concat(formSong);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setLoading(true);
    traerLetra();
    setLoading(false);
  }, []);

  var traerLetra = function traerLetra() {
    window.fetch("".concat(API)).then(function (response) {
      return response.json();
    }).then(function (data) {
      setLetras(data);
      console.log(data);
    });
  };

  var handlesubmit = function handlesubmit(e) {
    e.preventDefault();
    console.log('hola');
    traerLetra();
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "hola"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this);
  };

  var handleChange = function handleChange(e) {
    setFormArtist(e.target.value);
  };

  var handleChange2 = function handleChange2(e) {
    setFormSong(e.target.value);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Head"], {
      children: "busca con el nombre de tu artista y el nombre de la cancion"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      onSubmit: handlesubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        placeholder: "artista",
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        placeholder: "cancion",
        onChange: handleChange2
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "submit",
        value: "buscar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Result"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: ["resultados para: ", formSong]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: formArtist
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Spinner__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 24
        }, _this) : ''
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [letras.lyrics ? letras.lyrics : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Error"], {
          children: "no se ha encontrado letra :( "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 45
        }, _this), "  "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Smaller"], {
      children: "Letra powered by Lyrics.ovh"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, _this);
};

_s(Canciones, "L4INGKy74A5AjPWdkb14bgawflU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FuY2lvbmVzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNhbmNpb25lcyIsInVzZVN0YXRlIiwibGV0cmFzIiwic2V0TGV0cmFzIiwiZm9ybUFydGlzdCIsInNldEZvcm1BcnRpc3QiLCJmb3JtU29uZyIsInNldEZvcm1Tb25nIiwibG9hZGluZyIsInNldExvYWRpbmciLCJBUEkiLCJ1c2VFZmZlY3QiLCJ0cmFlckxldHJhIiwid2luZG93IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVzdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNoYW5nZTIiLCJseXJpY3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxrQkFFTUMsc0RBQVEsQ0FBQyxFQUFELENBRmQ7QUFBQSxNQUVmQyxNQUZlO0FBQUEsTUFFUEMsU0FGTzs7QUFBQSxtQkFHY0Ysc0RBQVEsQ0FBQyxRQUFELENBSHRCO0FBQUEsTUFHZkcsVUFIZTtBQUFBLE1BR0hDLGFBSEc7O0FBQUEsbUJBSVVKLHNEQUFRLENBQUMsU0FBRCxDQUpsQjtBQUFBLE1BSWZLLFFBSmU7QUFBQSxNQUlMQyxXQUpLOztBQUFBLG1CQUtRTixzREFBUSxDQUFDLEtBQUQsQ0FMaEI7QUFBQSxNQUtmTyxPQUxlO0FBQUEsTUFLTkMsVUFMTTs7QUFNdEIsTUFBTUMsR0FBRyx1Q0FBZ0NOLFVBQWhDLGNBQThDRSxRQUE5QyxDQUFUO0FBRUVLLHlEQUFTLENBQUMsWUFBTTtBQUNkRixjQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0FHLGNBQVU7QUFDVkgsY0FBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELEdBSlEsRUFJTixFQUpNLENBQVQ7O0FBTUEsTUFBTUcsVUFBVSxHQUFDLFNBQVhBLFVBQVcsR0FBSTtBQUNuQkMsVUFBTSxDQUNIQyxLQURILFdBQ1lKLEdBRFosR0FFR0ssSUFGSCxDQUVRLFVBQUNDLFFBQUQ7QUFBQSxhQUFjQSxRQUFRLENBQUNDLElBQVQsRUFBZDtBQUFBLEtBRlIsRUFHR0YsSUFISCxDQUdRLFVBQUNHLElBQUQsRUFBVTtBQUNkZixlQUFTLENBQUNlLElBQUQsQ0FBVDtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNELEtBTkg7QUFPRCxHQVJEOztBQVVGLE1BQU1HLFlBQVksR0FBQyxTQUFiQSxZQUFhLENBQUNDLENBQUQsRUFBSztBQUN0QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FKLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDQVIsY0FBVTtBQUNWLHdCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFHRCxHQVBEOztBQVNBLE1BQU1ZLFlBQVksR0FBQyxTQUFiQSxZQUFhLENBQUNGLENBQUQsRUFBSztBQUN0QmpCLGlCQUFhLENBQUNpQixDQUFDLENBQUNHLE1BQUYsQ0FBU0MsS0FBVixDQUFiO0FBQ0QsR0FGRDs7QUFHQSxNQUFNQyxhQUFhLEdBQUMsU0FBZEEsYUFBYyxDQUFDTCxDQUFELEVBQUs7QUFDdkJmLGVBQVcsQ0FBQ2UsQ0FBQyxDQUFDRyxNQUFGLENBQVNDLEtBQVYsQ0FBWDtBQUNELEdBRkQ7O0FBTUEsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUscUVBQUMsNENBQUQ7QUFBTSxjQUFRLEVBQUVMLFlBQWhCO0FBQUEsOEJBQ0U7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixtQkFBVyxFQUFDLFNBQS9CO0FBQXlDLGdCQUFRLEVBQUVHO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsbUJBQVcsRUFBQyxTQUEvQjtBQUF5QyxnQkFBUSxFQUFFRztBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRTtBQUFPLFlBQUksRUFBQyxRQUFaO0FBQXFCLGFBQUssRUFBQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFPRSxxRUFBQyw4Q0FBRDtBQUFBLDhCQUNFO0FBQUEsd0NBQXNCckIsUUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFBLGtCQUFLRjtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUlBO0FBQUEsa0JBQU9JLE9BQU8sZ0JBQUcscUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBSCxHQUFpQjtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkEsZUFLQTtBQUFBLG1CQUFNTixNQUFNLENBQUMwQixNQUFQLEdBQWdCMUIsTUFBTSxDQUFDMEIsTUFBdkIsZ0JBQWdDLHFFQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRixlQWNFLHFFQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFrQkQsQ0E1REQ7O0dBQU01QixTOztLQUFBQSxTO0FBOERTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYW5jaW9uZXMuMjAxZTY5Y2JhNjZkZGMzM2UwOGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9ybSwgSGVhZCwgUmVzdWx0LCBTbWFsbGVyLCBFcnJvciB9IGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIkBjb21wb25lbnRzL1NwaW5uZXJcIjtcblxuY29uc3QgQ2FuY2lvbmVzID0gKCkgPT4ge1xuICBcbiAgY29uc3QgW2xldHJhcywgc2V0TGV0cmFzXSA9IHVzZVN0YXRlKHt9KVxuICBjb25zdCBbZm9ybUFydGlzdCwgc2V0Rm9ybUFydGlzdF0gPSB1c2VTdGF0ZShcImp1YW5lc1wiKTtcbiAgY29uc3QgW2Zvcm1Tb25nLCBzZXRGb3JtU29uZ10gPSB1c2VTdGF0ZShcImxhIHBhZ2FcIik7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgQVBJID0gYGh0dHBzOi8vYXBpLmx5cmljcy5vdmgvdjEvJHtmb3JtQXJ0aXN0fS8ke2Zvcm1Tb25nfWA7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgc2V0TG9hZGluZyh0cnVlKVxuICAgICAgdHJhZXJMZXRyYSgpXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCB0cmFlckxldHJhPSgpPT57XG4gICAgICB3aW5kb3dcbiAgICAgICAgLmZldGNoKGAke0FQSX1gKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBzZXRMZXRyYXMoZGF0YSk7XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICBjb25zdCBoYW5kbGVzdWJtaXQ9KGUpPT57XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKCdob2xhJylcbiAgICB0cmFlckxldHJhKClcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PmhvbGE8L2Rpdj5cbiAgICApXG4gIH1cblxuICBjb25zdCBoYW5kbGVDaGFuZ2U9KGUpPT57XG4gICAgc2V0Rm9ybUFydGlzdChlLnRhcmdldC52YWx1ZSlcbiAgfVxuICBjb25zdCBoYW5kbGVDaGFuZ2UyPShlKT0+e1xuICAgIHNldEZvcm1Tb25nKGUudGFyZ2V0LnZhbHVlKVxuICB9XG4gIFxuICBcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPmJ1c2NhIGNvbiBlbCBub21icmUgZGUgdHUgYXJ0aXN0YSB5IGVsIG5vbWJyZSBkZSBsYSBjYW5jaW9uPC9IZWFkPlxuICAgICAgPEZvcm0gb25TdWJtaXQ9e2hhbmRsZXN1Ym1pdH0+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiYXJ0aXN0YVwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiY2FuY2lvblwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UyfSAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiYnVzY2FyXCIgLz5cbiAgICAgIDwvRm9ybT5cbiAgICAgIDxSZXN1bHQ+XG4gICAgICAgIDxoMj5yZXN1bHRhZG9zIHBhcmE6IHtmb3JtU29uZ308L2gyPlxuICAgICAgICA8aDM+e2Zvcm1BcnRpc3R9PC9oMz5cblxuICAgICAgPGRpdj57IGxvYWRpbmcgPyA8U3Bpbm5lciAvPiA6ICcnfTwvZGl2PlxuICAgICAgPGRpdj57bGV0cmFzLmx5cmljcyA/IGxldHJhcy5seXJpY3MgOiA8RXJyb3I+bm8gc2UgaGEgZW5jb250cmFkbyBsZXRyYSA6KCA8L0Vycm9yPn0gIDwvZGl2PlxuICAgICAgPC9SZXN1bHQ+XG4gICAgICA8U21hbGxlcj5MZXRyYSBwb3dlcmVkIGJ5IEx5cmljcy5vdmg8L1NtYWxsZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbmNpb25lczsiXSwic291cmNlUm9vdCI6IiJ9