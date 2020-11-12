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
    traerLetra();
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "hola"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
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
      lineNumber: 48,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      onSubmit: handlesubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        placeholder: "artista",
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        placeholder: "cancion",
        onChange: handleChange2
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "submit",
        value: "buscar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Result"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: ["resultados para: ", formSong]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: formArtist
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Spinner__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 24
        }, _this) : ''
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [letras.lyrics ? letras.lyrics : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Error"], {
          children: "no se ha encontrado letra :( "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 45
        }, _this), "  "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Smaller"], {
      children: "Letra powered by Lyrics.ovh"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FuY2lvbmVzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNhbmNpb25lcyIsInVzZVN0YXRlIiwibGV0cmFzIiwic2V0TGV0cmFzIiwiZm9ybUFydGlzdCIsInNldEZvcm1BcnRpc3QiLCJmb3JtU29uZyIsInNldEZvcm1Tb25nIiwibG9hZGluZyIsInNldExvYWRpbmciLCJBUEkiLCJ1c2VFZmZlY3QiLCJ0cmFlckxldHJhIiwid2luZG93IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVzdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNoYW5nZTIiLCJseXJpY3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxrQkFFTUMsc0RBQVEsQ0FBQyxFQUFELENBRmQ7QUFBQSxNQUVmQyxNQUZlO0FBQUEsTUFFUEMsU0FGTzs7QUFBQSxtQkFHY0Ysc0RBQVEsQ0FBQyxRQUFELENBSHRCO0FBQUEsTUFHZkcsVUFIZTtBQUFBLE1BR0hDLGFBSEc7O0FBQUEsbUJBSVVKLHNEQUFRLENBQUMsU0FBRCxDQUpsQjtBQUFBLE1BSWZLLFFBSmU7QUFBQSxNQUlMQyxXQUpLOztBQUFBLG1CQUtRTixzREFBUSxDQUFDLEtBQUQsQ0FMaEI7QUFBQSxNQUtmTyxPQUxlO0FBQUEsTUFLTkMsVUFMTTs7QUFNdEIsTUFBTUMsR0FBRyx1Q0FBZ0NOLFVBQWhDLGNBQThDRSxRQUE5QyxDQUFUO0FBRUVLLHlEQUFTLENBQUMsWUFBTTtBQUNkRixjQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0FHLGNBQVU7QUFDVkgsY0FBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELEdBSlEsRUFJTixFQUpNLENBQVQ7O0FBTUEsTUFBTUcsVUFBVSxHQUFDLFNBQVhBLFVBQVcsR0FBSTtBQUNuQkMsVUFBTSxDQUNIQyxLQURILFdBQ1lKLEdBRFosR0FFR0ssSUFGSCxDQUVRLFVBQUNDLFFBQUQ7QUFBQSxhQUFjQSxRQUFRLENBQUNDLElBQVQsRUFBZDtBQUFBLEtBRlIsRUFHR0YsSUFISCxDQUdRLFVBQUNHLElBQUQsRUFBVTtBQUNkZixlQUFTLENBQUNlLElBQUQsQ0FBVDtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNELEtBTkg7QUFPRCxHQVJEOztBQVVGLE1BQU1HLFlBQVksR0FBQyxTQUFiQSxZQUFhLENBQUNDLENBQUQsRUFBSztBQUN0QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FYLGNBQVU7QUFDVix3QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBR0QsR0FORDs7QUFRQSxNQUFNWSxZQUFZLEdBQUMsU0FBYkEsWUFBYSxDQUFDRixDQUFELEVBQUs7QUFDdEJqQixpQkFBYSxDQUFDaUIsQ0FBQyxDQUFDRyxNQUFGLENBQVNDLEtBQVYsQ0FBYjtBQUNELEdBRkQ7O0FBR0EsTUFBTUMsYUFBYSxHQUFDLFNBQWRBLGFBQWMsQ0FBQ0wsQ0FBRCxFQUFLO0FBQ3ZCZixlQUFXLENBQUNlLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxLQUFWLENBQVg7QUFDRCxHQUZEOztBQU1BLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLHFFQUFDLDRDQUFEO0FBQU0sY0FBUSxFQUFFTCxZQUFoQjtBQUFBLDhCQUNFO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsbUJBQVcsRUFBQyxTQUEvQjtBQUF5QyxnQkFBUSxFQUFFRztBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLG1CQUFXLEVBQUMsU0FBL0I7QUFBeUMsZ0JBQVEsRUFBRUc7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0U7QUFBTyxZQUFJLEVBQUMsUUFBWjtBQUFxQixhQUFLLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBT0UscUVBQUMsOENBQUQ7QUFBQSw4QkFDRTtBQUFBLHdDQUFzQnJCLFFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBQSxrQkFBS0Y7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFJQTtBQUFBLGtCQUFPSSxPQUFPLGdCQUFHLHFFQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQUgsR0FBaUI7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpBLGVBS0E7QUFBQSxtQkFBTU4sTUFBTSxDQUFDMEIsTUFBUCxHQUFnQjFCLE1BQU0sQ0FBQzBCLE1BQXZCLGdCQUFnQyxxRUFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEYsZUFjRSxxRUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBa0JELENBM0REOztHQUFNNUIsUzs7S0FBQUEsUztBQTZEU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FuY2lvbmVzLmQ1NmM3N2U2NzZiZjA2MjUwNzAwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvcm0sIEhlYWQsIFJlc3VsdCwgU21hbGxlciwgRXJyb3IgfSBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCBTcGlubmVyIGZyb20gXCJAY29tcG9uZW50cy9TcGlubmVyXCI7XG5cbmNvbnN0IENhbmNpb25lcyA9ICgpID0+IHtcbiAgXG4gIGNvbnN0IFtsZXRyYXMsIHNldExldHJhc10gPSB1c2VTdGF0ZSh7fSlcbiAgY29uc3QgW2Zvcm1BcnRpc3QsIHNldEZvcm1BcnRpc3RdID0gdXNlU3RhdGUoXCJqdWFuZXNcIik7XG4gIGNvbnN0IFtmb3JtU29uZywgc2V0Rm9ybVNvbmddID0gdXNlU3RhdGUoXCJsYSBwYWdhXCIpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IEFQSSA9IGBodHRwczovL2FwaS5seXJpY3Mub3ZoL3YxLyR7Zm9ybUFydGlzdH0vJHtmb3JtU29uZ31gO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgIHRyYWVyTGV0cmEoKVxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgdHJhZXJMZXRyYT0oKT0+e1xuICAgICAgd2luZG93XG4gICAgICAgIC5mZXRjaChgJHtBUEl9YClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgc2V0TGV0cmFzKGRhdGEpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgY29uc3QgaGFuZGxlc3VibWl0PShlKT0+e1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0cmFlckxldHJhKClcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PmhvbGE8L2Rpdj5cbiAgICApXG4gIH1cblxuICBjb25zdCBoYW5kbGVDaGFuZ2U9KGUpPT57XG4gICAgc2V0Rm9ybUFydGlzdChlLnRhcmdldC52YWx1ZSlcbiAgfVxuICBjb25zdCBoYW5kbGVDaGFuZ2UyPShlKT0+e1xuICAgIHNldEZvcm1Tb25nKGUudGFyZ2V0LnZhbHVlKVxuICB9XG4gIFxuICBcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPmJ1c2NhIGNvbiBlbCBub21icmUgZGUgdHUgYXJ0aXN0YSB5IGVsIG5vbWJyZSBkZSBsYSBjYW5jaW9uPC9IZWFkPlxuICAgICAgPEZvcm0gb25TdWJtaXQ9e2hhbmRsZXN1Ym1pdH0+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiYXJ0aXN0YVwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiY2FuY2lvblwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UyfSAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiYnVzY2FyXCIgLz5cbiAgICAgIDwvRm9ybT5cbiAgICAgIDxSZXN1bHQ+XG4gICAgICAgIDxoMj5yZXN1bHRhZG9zIHBhcmE6IHtmb3JtU29uZ308L2gyPlxuICAgICAgICA8aDM+e2Zvcm1BcnRpc3R9PC9oMz5cblxuICAgICAgPGRpdj57IGxvYWRpbmcgPyA8U3Bpbm5lciAvPiA6ICcnfTwvZGl2PlxuICAgICAgPGRpdj57bGV0cmFzLmx5cmljcyA/IGxldHJhcy5seXJpY3MgOiA8RXJyb3I+bm8gc2UgaGEgZW5jb250cmFkbyBsZXRyYSA6KCA8L0Vycm9yPn0gIDwvZGl2PlxuICAgICAgPC9SZXN1bHQ+XG4gICAgICA8U21hbGxlcj5MZXRyYSBwb3dlcmVkIGJ5IEx5cmljcy5vdmg8L1NtYWxsZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbmNpb25lczsiXSwic291cmNlUm9vdCI6IiJ9