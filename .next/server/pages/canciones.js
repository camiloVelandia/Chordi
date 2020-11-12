module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/canciones/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Spinner/index.js":
/*!*************************************!*\
  !*** ./components/Spinner/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./components/Spinner/styles.js");

var _jsxFileName = "/mnt/c/Users/cmax9/documents/Developer/chordi/components/Spinner/index.js";



const Spinner = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Spin"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "lds-ellipsis",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Spinner);

/***/ }),

/***/ "./components/Spinner/styles.js":
/*!**************************************!*\
  !*** ./components/Spinner/styles.js ***!
  \**************************************/
/*! exports provided: Spin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spin", function() { return Spin; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Spin = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__Spin",
  componentId: "w6p50y-0"
})(["text-align:center;.lds-ellipsis{display:inline-block;position:relative;width:80px;height:80px;}.lds-ellipsis div{position:absolute;top:33px;width:13px;height:13px;border-radius:50%;background:#253a46;animation-timing-function:cubic-bezier(0,1,1,0);}.lds-ellipsis div:nth-child(1){left:8px;animation:lds-ellipsis1 0.6s infinite;}.lds-ellipsis div:nth-child(2){left:8px;animation:lds-ellipsis2 0.6s infinite;}.lds-ellipsis div:nth-child(3){left:32px;animation:lds-ellipsis2 0.6s infinite;}.lds-ellipsis div:nth-child(4){left:56px;animation:lds-ellipsis3 0.6s infinite;}@keyframes lds-ellipsis1{0%{transform:scale(0);}100%{transform:scale(1);}}@keyframes lds-ellipsis3{0%{transform:scale(1);}100%{transform:scale(0);}}@keyframes lds-ellipsis2{0%{transform:translate(0,0);}100%{transform:translate(24px,0);}}"]);

/***/ }),

/***/ "./pages/canciones/index.js":
/*!**********************************!*\
  !*** ./pages/canciones/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./pages/canciones/styles.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Spinner */ "./components/Spinner/index.js");

var _jsxFileName = "/mnt/c/Users/cmax9/documents/Developer/chordi/pages/canciones/index.js";




const Canciones = () => {
  const {
    0: letras,
    1: setLetras
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});
  const {
    0: formArtist,
    1: setFormArtist
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("juanes");
  const {
    0: formSong,
    1: setFormSong
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("la paga");
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const API = `https://api.lyrics.ovh/v1/${formArtist}/${formSong}`;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setLoading(true);
    traerLetra();
    setLoading(false);
  }, []);

  const traerLetra = () => {
    window.fetch(`${API}`).then(response => response.json()).then(data => {
      setLetras(data);
      console.log(data);
    });
  };

  const handlesubmit = e => {
    e.preventDefault();
    traerLetra();
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "hola"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined);
  };

  const handleChange = e => {
    setFormArtist(e.target.value);
  };

  const handleChange2 = e => {
    setFormSong(e.target.value);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Head"], {
      children: "busca con el nombre de tu artista y el nombre de la cancion"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      onSubmit: handlesubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        placeholder: "artista",
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        placeholder: "cancion",
        onChange: handleChange2
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "submit",
        value: "buscar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Result"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: ["resultados para: ", formSong]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: formArtist
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Spinner__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 24
        }, undefined) : ''
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [letras.lyrics ? letras.lyrics : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Error"], {
          children: "no se ha encontrado letra :( "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 45
        }, undefined), "  "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Smaller"], {
      children: "Letra powered by Lyrics.ovh"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Canciones);

/***/ }),

/***/ "./pages/canciones/styles.js":
/*!***********************************!*\
  !*** ./pages/canciones/styles.js ***!
  \***********************************/
/*! exports provided: Form, Head, Result, Smaller, Error */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Head", function() { return Head; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result", function() { return Result; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Smaller", function() { return Smaller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error", function() { return Error; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "styles__Form",
  componentId: "sc-1pewxi3-0"
})(["text-align:center;& input{border:none;padding:10px;background-color:var(--white-color);border:1px solid var(--brand-color);border-radius:15px;margin-left:25px;text-transform:capitalize;color:var(--brand-color);cursor:pointer;&::placeholder{color:var(--brand-color);}}& input[type=\"submit\"]{color:var(--white-color);background-color:var(--brand-color);font-weight:500;}"]);
const Head = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "styles__Head",
  componentId: "sc-1pewxi3-1"
})(["text-align:center;text-transform:uppercase;margin-top:80px;margin-bottom:60px"]);
const Result = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__Result",
  componentId: "sc-1pewxi3-2"
})(["text-align:center;margin-top:80px;margin-bottom:60px;& h2{font-size:30px;text-transform:capitalize;color:var(--brand-color);}& h3{font-size:25px;text-transform:capitalize;color:var(--second-color);}& p{display:block;text-align:center;line-height:1.7;letter-spacing:1.5px;font-size:16px;font-weight:400;width:340px;margin:0 auto;margin-top:90px;color:var(--myDark-color);}"]);
const Smaller = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.small.withConfig({
  displayName: "styles__Smaller",
  componentId: "sc-1pewxi3-3"
})(["display:block;text-align:center;line-height:1.7;color:var(--second-color);font-size:12px;font-weight:600;width:250px;margin:0 auto;margin-top:30px;"]);
const Error = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "styles__Error",
  componentId: "sc-1pewxi3-4"
})(["display:flex;text-align:center;align-items:center;text-transform:uppercase;line-height:1.7;color:var(--second-color);font-size:16px;font-weight:600;width:250px;margin:0 auto;margin-top:30px;height:20vh;"]);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TcGlubmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU3Bpbm5lci9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FuY2lvbmVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2NhbmNpb25lcy9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIlNwaW5uZXIiLCJTcGluIiwic3R5bGVkIiwiZGl2IiwiQ2FuY2lvbmVzIiwibGV0cmFzIiwic2V0TGV0cmFzIiwidXNlU3RhdGUiLCJmb3JtQXJ0aXN0Iiwic2V0Rm9ybUFydGlzdCIsImZvcm1Tb25nIiwic2V0Rm9ybVNvbmciLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIkFQSSIsInVzZUVmZmVjdCIsInRyYWVyTGV0cmEiLCJ3aW5kb3ciLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImhhbmRsZXN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2hhbmdlMiIsImx5cmljcyIsIkZvcm0iLCJmb3JtIiwiSGVhZCIsImgxIiwiUmVzdWx0IiwiU21hbGxlciIsInNtYWxsIiwiRXJyb3IiLCJwIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FB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QywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWtCRCxDQTNERDs7QUE2RGU1Qix3RUFBZixFOzs7Ozs7Ozs7Ozs7QUNqRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTTZCLElBQUksR0FBRy9CLHdEQUFNLENBQUNnQyxJQUFWO0FBQUE7QUFBQTtBQUFBLDBYQUFWO0FBdUJBLE1BQU1DLElBQUksR0FBR2pDLHdEQUFNLENBQUNrQyxFQUFWO0FBQUE7QUFBQTtBQUFBLHFGQUFWO0FBTUEsTUFBTUMsTUFBTSxHQUFHbkMsd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwyWEFBWjtBQTRCQSxNQUFNbUMsT0FBTyxHQUFHcEMsd0RBQU0sQ0FBQ3FDLEtBQVY7QUFBQTtBQUFBO0FBQUEsMkpBQWI7QUFZQSxNQUFNQyxLQUFLLEdBQUd0Qyx3REFBTSxDQUFDdUMsQ0FBVjtBQUFBO0FBQUE7QUFBQSxrTkFBWCxDOzs7Ozs7Ozs7OztBQ3ZFUCxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9jYW5jaW9uZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2NhbmNpb25lcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7U3Bpbn0gZnJvbSAnLi9zdHlsZXMnXG5cbmNvbnN0IFNwaW5uZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFNwaW4+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxkcy1lbGxpcHNpc1wiPlxuICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9TcGluPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3Bpbm5lcjtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBTcGluID0gc3R5bGVkLmRpdmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAubGRzLWVsbGlwc2lzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgfVxuICAubGRzLWVsbGlwc2lzIGRpdiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzNweDtcbiAgICB3aWR0aDogMTNweDtcbiAgICBoZWlnaHQ6IDEzcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6ICMyNTNhNDY7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDEsIDEsIDApO1xuICB9XG4gIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgxKSB7XG4gICAgbGVmdDogOHB4O1xuICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMSAwLjZzIGluZmluaXRlO1xuICB9XG4gIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgyKSB7XG4gICAgbGVmdDogOHB4O1xuICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMiAwLjZzIGluZmluaXRlO1xuICB9XG4gIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgzKSB7XG4gICAgbGVmdDogMzJweDtcbiAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczIgMC42cyBpbmZpbml0ZTtcbiAgfVxuICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoNCkge1xuICAgIGxlZnQ6IDU2cHg7XG4gICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMzIDAuNnMgaW5maW5pdGU7XG4gIH1cbiAgQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMxIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMyB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIH1cbiAgfVxuICBAa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczIge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDI0cHgsIDApO1xuICAgIH1cbiAgfVxuYDtcbiIsImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9ybSwgSGVhZCwgUmVzdWx0LCBTbWFsbGVyLCBFcnJvciB9IGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIkBjb21wb25lbnRzL1NwaW5uZXJcIjtcblxuY29uc3QgQ2FuY2lvbmVzID0gKCkgPT4ge1xuICBcbiAgY29uc3QgW2xldHJhcywgc2V0TGV0cmFzXSA9IHVzZVN0YXRlKHt9KVxuICBjb25zdCBbZm9ybUFydGlzdCwgc2V0Rm9ybUFydGlzdF0gPSB1c2VTdGF0ZShcImp1YW5lc1wiKTtcbiAgY29uc3QgW2Zvcm1Tb25nLCBzZXRGb3JtU29uZ10gPSB1c2VTdGF0ZShcImxhIHBhZ2FcIik7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgQVBJID0gYGh0dHBzOi8vYXBpLmx5cmljcy5vdmgvdjEvJHtmb3JtQXJ0aXN0fS8ke2Zvcm1Tb25nfWA7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgc2V0TG9hZGluZyh0cnVlKVxuICAgICAgdHJhZXJMZXRyYSgpXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCB0cmFlckxldHJhPSgpPT57XG4gICAgICB3aW5kb3dcbiAgICAgICAgLmZldGNoKGAke0FQSX1gKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBzZXRMZXRyYXMoZGF0YSk7XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICBjb25zdCBoYW5kbGVzdWJtaXQ9KGUpPT57XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRyYWVyTGV0cmEoKVxuICAgIHJldHVybihcbiAgICAgIDxkaXY+aG9sYTwvZGl2PlxuICAgIClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZT0oZSk9PntcbiAgICBzZXRGb3JtQXJ0aXN0KGUudGFyZ2V0LnZhbHVlKVxuICB9XG4gIGNvbnN0IGhhbmRsZUNoYW5nZTI9KGUpPT57XG4gICAgc2V0Rm9ybVNvbmcoZS50YXJnZXQudmFsdWUpXG4gIH1cbiAgXG4gIFxuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+YnVzY2EgY29uIGVsIG5vbWJyZSBkZSB0dSBhcnRpc3RhIHkgZWwgbm9tYnJlIGRlIGxhIGNhbmNpb248L0hlYWQ+XG4gICAgICA8Rm9ybSBvblN1Ym1pdD17aGFuZGxlc3VibWl0fT5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJhcnRpc3RhXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJjYW5jaW9uXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZTJ9IC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJidXNjYXJcIiAvPlxuICAgICAgPC9Gb3JtPlxuICAgICAgPFJlc3VsdD5cbiAgICAgICAgPGgyPnJlc3VsdGFkb3MgcGFyYToge2Zvcm1Tb25nfTwvaDI+XG4gICAgICAgIDxoMz57Zm9ybUFydGlzdH08L2gzPlxuXG4gICAgICA8ZGl2PnsgbG9hZGluZyA/IDxTcGlubmVyIC8+IDogJyd9PC9kaXY+XG4gICAgICA8ZGl2PntsZXRyYXMubHlyaWNzID8gbGV0cmFzLmx5cmljcyA6IDxFcnJvcj5ubyBzZSBoYSBlbmNvbnRyYWRvIGxldHJhIDooIDwvRXJyb3I+fSAgPC9kaXY+XG4gICAgICA8L1Jlc3VsdD5cbiAgICAgIDxTbWFsbGVyPkxldHJhIHBvd2VyZWQgYnkgTHlyaWNzLm92aDwvU21hbGxlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FuY2lvbmVzOyIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgJiBpbnB1dCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJyYW5kLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGNvbG9yOiB2YXIoLS1icmFuZC1jb2xvcik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1icmFuZC1jb2xvcik7XG4gICAgfVxuICB9XG5cbiAgJiBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJyYW5kLWNvbG9yKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG5gO1xuZXhwb3J0IGNvbnN0IEhlYWQgPSBzdHlsZWQuaDFgXG4gdGV4dC1hbGlnbjpjZW50ZXI7XG4gdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xuIG1hcmdpbi10b3A6ODBweDtcbiBtYXJnaW4tYm90dG9tOjYwcHhcbmA7XG5leHBvcnQgY29uc3QgUmVzdWx0ID0gc3R5bGVkLmRpdmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA4MHB4O1xuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICAmIGgyIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgY29sb3I6IHZhcigtLWJyYW5kLWNvbG9yKTtcbiAgfVxuICAmIGgzIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XG4gIH1cbiAgJiBwIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDEuNztcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgd2lkdGg6IDM0MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDkwcHg7XG4gICAgY29sb3I6IHZhcigtLW15RGFyay1jb2xvcik7XG4gIH1cbiAgXG5gO1xuZXhwb3J0IGNvbnN0IFNtYWxsZXIgPSBzdHlsZWQuc21hbGxgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxLjc7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHdpZHRoOiAyNTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDMwcHg7XG5gO1xuXG5leHBvcnQgY29uc3QgRXJyb3IgPSBzdHlsZWQucGBcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsaW5lLWhlaWdodDogMS43O1xuICBjb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB3aWR0aDogMjUwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBoZWlnaHQ6IDIwdmg7XG5gO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=