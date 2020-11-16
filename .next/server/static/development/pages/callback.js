module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/callback.js":
/*!***************************!*\
  !*** ./pages/callback.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_auth0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth0 */ \"./services/auth0.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/Dev/Documents/discoverdoo-app/pages/callback.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nclass Callback extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  async componentDidMount() {\n    await _services_auth0__WEBPACK_IMPORTED_MODULE_2__[\"default\"].handleAuthentication(); // this.props.router.push(Cookies.get('returnURL'))\n\n    console.log(js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get('returnURL'));\n    this.props.router.push(js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get('returnURL'));\n  }\n\n  render() {\n    return __jsx(\"div\", {\n      className: \"jsx-3309388774\" + \" \" + \"contain\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 7\n      }\n    }, __jsx(\"h1\", {\n      className: \"jsx-3309388774\" + \" \" + \"message\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 7\n      }\n    }, \"Welcome back!\"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n      id: \"3309388774\",\n      __self: this\n    }, \"h1.jsx-3309388774{margin:40px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9EZXYvRG9jdW1lbnRzL2Rpc2NvdmVyZG9vLWFwcC9wYWdlcy9jYWxsYmFjay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQmtCLEFBR3VCLFlBQ2QiLCJmaWxlIjoiL1VzZXJzL0Rldi9Eb2N1bWVudHMvZGlzY292ZXJkb28tYXBwL3BhZ2VzL2NhbGxiYWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF1dGgwQ2xpZW50IGZyb20gJy4uL3NlcnZpY2VzL2F1dGgwJ1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJ1xuXG5jbGFzcyBDYWxsYmFjayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgYXdhaXQgYXV0aDBDbGllbnQuaGFuZGxlQXV0aGVudGljYXRpb24oKTtcbiAgICAvLyB0aGlzLnByb3BzLnJvdXRlci5wdXNoKENvb2tpZXMuZ2V0KCdyZXR1cm5VUkwnKSlcbiAgICBjb25zb2xlLmxvZyhDb29raWVzLmdldCgncmV0dXJuVVJMJykpXG4gICAgdGhpcy5wcm9wcy5yb3V0ZXIucHVzaChDb29raWVzLmdldCgncmV0dXJuVVJMJykpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpblwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cIm1lc3NhZ2VcIj5XZWxjb21lIGJhY2shPC9oMT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaDEge1xuICAgICAgICAgIG1hcmdpbjogNDBweDtcbiAgICAgICAgfVxuXG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihDYWxsYmFjaykiXX0= */\\n/*@ sourceURL=/Users/Dev/Documents/discoverdoo-app/pages/callback.js */\"));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"withRouter\"])(Callback));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jYWxsYmFjay5qcz8wNGVlIl0sIm5hbWVzIjpbIkNhbGxiYWNrIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb21wb25lbnREaWRNb3VudCIsImF1dGgwQ2xpZW50IiwiaGFuZGxlQXV0aGVudGljYXRpb24iLCJjb25zb2xlIiwibG9nIiwiQ29va2llcyIsImdldCIsInByb3BzIiwicm91dGVyIiwicHVzaCIsInJlbmRlciIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxRQUFOLFNBQXVCQyw0Q0FBSyxDQUFDQyxTQUE3QixDQUF1QztBQUVyQyxRQUFNQyxpQkFBTixHQUEwQjtBQUN4QixVQUFNQyx1REFBVyxDQUFDQyxvQkFBWixFQUFOLENBRHdCLENBRXhCOztBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUMsZ0RBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosQ0FBWjtBQUNBLFNBQUtDLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQkMsSUFBbEIsQ0FBdUJKLGdEQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaLENBQXZCO0FBQ0Q7O0FBRURJLFFBQU0sR0FBRztBQUNQLFdBQ0U7QUFBQSwwQ0FBZSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQTtBQUFBLDBDQUFjLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEQTtBQUFBO0FBQUE7QUFBQSw0M0NBREY7QUFXRDs7QUFyQm9DOztBQXdCeEJDLDZIQUFVLENBQUNkLFFBQUQsQ0FBekIiLCJmaWxlIjoiLi9wYWdlcy9jYWxsYmFjay5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBhdXRoMENsaWVudCBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoMCdcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSdcblxuY2xhc3MgQ2FsbGJhY2sgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGF3YWl0IGF1dGgwQ2xpZW50LmhhbmRsZUF1dGhlbnRpY2F0aW9uKCk7XG4gICAgLy8gdGhpcy5wcm9wcy5yb3V0ZXIucHVzaChDb29raWVzLmdldCgncmV0dXJuVVJMJykpXG4gICAgY29uc29sZS5sb2coQ29va2llcy5nZXQoJ3JldHVyblVSTCcpKVxuICAgIHRoaXMucHJvcHMucm91dGVyLnB1c2goQ29va2llcy5nZXQoJ3JldHVyblVSTCcpKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5cIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJtZXNzYWdlXCI+V2VsY29tZSBiYWNrITwvaDE+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGgxIHtcbiAgICAgICAgICBtYXJnaW46IDQwcHg7XG4gICAgICAgIH1cblxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoQ2FsbGJhY2spIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/callback.js\n");

/***/ }),

/***/ "./services/auth0.js":
/*!***************************!*\
  !*** ./services/auth0.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! auth0-js */ \"auth0-js\");\n/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(auth0_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CLIENT_URL = \"http://localhost:3000\";\n\nclass Auth0 {\n  constructor() {\n    this.auth0 = new auth0_js__WEBPACK_IMPORTED_MODULE_0___default.a.WebAuth({\n      domain: 'jakepeg.eu.auth0.com',\n      clientID: '6w0luoKEKUH4QLOImluA81kNf3jLmWbr',\n      redirectUri: `${CLIENT_URL}/callback`,\n      responseType: 'token id_token',\n      scope: 'openid profile'\n    });\n    this.login = this.login.bind(this);\n    this.loginAddActivity = this.loginAddActivity.bind(this);\n    this.logout = this.logout.bind(this);\n    this.handleAuthentication = this.handleAuthentication.bind(this);\n    this.isAuthenticated = this.isAuthenticated.bind(this);\n  }\n\n  handleAuthentication() {\n    return new Promise((resolve, reject) => {\n      this.auth0.parseHash((err, authResult) => {\n        if (authResult && authResult.accessToken && authResult.idToken) {\n          this.setSession(authResult);\n          resolve();\n        } else if (err) {\n          reject(err);\n          console.log(err);\n        }\n      });\n    });\n  }\n\n  setSession(authResult) {\n    let expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());\n    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('user', authResult.idTokenPayload);\n    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('jwt', authResult.idToken);\n    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('expiresAt', expiresAt);\n    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('sub', authResult.idTokenPayload.sub);\n    console.log(authResult);\n  }\n\n  logout() {\n    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove('user');\n    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove('jwt');\n    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove('expiresAt');\n    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove('sub');\n    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove('returnURL');\n    this.auth0.logout({\n      returnTo: CLIENT_URL,\n      clientID: '6w0luoKEKUH4QLOImluA81kNf3jLmWbr'\n    });\n  }\n\n  login() {\n    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('returnURL', '/');\n    this.auth0.authorize();\n    console.log(CLIENT_URL);\n  }\n\n  loginAddActivity() {\n    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('returnURL', '/create');\n    this.auth0.authorize();\n  }\n\n  isAuthenticated() {\n    const expiresAt = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.getJSON('expiresAt');\n    return new Date().getTime() < expiresAt;\n  }\n\n}\n\nconst auth0Client = new Auth0();\n/* harmony default export */ __webpack_exports__[\"default\"] = (auth0Client);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9hdXRoMC5qcz83MDVjIl0sIm5hbWVzIjpbIkNMSUVOVF9VUkwiLCJwcm9jZXNzIiwiQXV0aDAiLCJjb25zdHJ1Y3RvciIsImF1dGgwIiwiV2ViQXV0aCIsImRvbWFpbiIsImNsaWVudElEIiwicmVkaXJlY3RVcmkiLCJyZXNwb25zZVR5cGUiLCJzY29wZSIsImxvZ2luIiwiYmluZCIsImxvZ2luQWRkQWN0aXZpdHkiLCJsb2dvdXQiLCJoYW5kbGVBdXRoZW50aWNhdGlvbiIsImlzQXV0aGVudGljYXRlZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicGFyc2VIYXNoIiwiZXJyIiwiYXV0aFJlc3VsdCIsImFjY2Vzc1Rva2VuIiwiaWRUb2tlbiIsInNldFNlc3Npb24iLCJjb25zb2xlIiwibG9nIiwiZXhwaXJlc0F0IiwiSlNPTiIsInN0cmluZ2lmeSIsImV4cGlyZXNJbiIsIkRhdGUiLCJnZXRUaW1lIiwiQ29va2llcyIsInNldCIsImlkVG9rZW5QYXlsb2FkIiwic3ViIiwicmVtb3ZlIiwicmV0dXJuVG8iLCJhdXRob3JpemUiLCJnZXRKU09OIiwiYXV0aDBDbGllbnQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsTUFBTUEsVUFBVSxHQUFHQyx1QkFBbkI7O0FBRUEsTUFBTUMsS0FBTixDQUFZO0FBRVZDLGFBQVcsR0FBRztBQUNaLFNBQUtDLEtBQUwsR0FBYSxJQUFJQSwrQ0FBSyxDQUFDQyxPQUFWLENBQWtCO0FBQzdCQyxZQUFNLEVBQUUsc0JBRHFCO0FBRTdCQyxjQUFRLEVBQUUsa0NBRm1CO0FBRzdCQyxpQkFBVyxFQUFHLEdBQUVSLFVBQVcsV0FIRTtBQUk3QlMsa0JBQVksRUFBRSxnQkFKZTtBQUs3QkMsV0FBSyxFQUFFO0FBTHNCLEtBQWxCLENBQWI7QUFRQSxTQUFLQyxLQUFMLEdBQWEsS0FBS0EsS0FBTCxDQUFXQyxJQUFYLENBQWdCLElB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WyJpbXBvcnQgYXV0aDAgZnJvbSAnYXV0aDAtanMnXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnXG5cbmNvbnN0IENMSUVOVF9VUkwgPSBwcm9jZXNzLmVudi5DTElFTlRfVVJMO1xuXG5jbGFzcyBBdXRoMCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hdXRoMCA9IG5ldyBhdXRoMC5XZWJBdXRoKHtcbiAgICAgIGRvbWFpbjogJ2pha2VwZWcuZXUuYXV0aDAuY29tJyxcbiAgICAgIGNsaWVudElEOiAnNncwbHVvS0VLVUg0UUxPSW1sdUE4MWtOZjNqTG1XYnInLFxuICAgICAgcmVkaXJlY3RVcmk6IGAke0NMSUVOVF9VUkx9L2NhbGxiYWNrYCxcbiAgICAgIHJlc3BvbnNlVHlwZTogJ3Rva2VuIGlkX3Rva2VuJyxcbiAgICAgIHNjb3BlOiAnb3BlbmlkIHByb2ZpbGUnXG4gICAgfSk7XG5cbiAgICB0aGlzLmxvZ2luID0gdGhpcy5sb2dpbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMubG9naW5BZGRBY3Rpdml0eSA9IHRoaXMubG9naW5BZGRBY3Rpdml0eS5iaW5kKHRoaXMpO1xuICAgIHRoaXMubG9nb3V0ID0gdGhpcy5sb2dvdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUF1dGhlbnRpY2F0aW9uID0gdGhpcy5oYW5kbGVBdXRoZW50aWNhdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkID0gdGhpcy5pc0F1dGhlbnRpY2F0ZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUF1dGhlbnRpY2F0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmF1dGgwLnBhcnNlSGFzaCgoZXJyLCBhdXRoUmVzdWx0KSA9PiB7XG4gICAgICAgIGlmIChhdXRoUmVzdWx0ICYmIGF1dGhSZXN1bHQuYWNjZXNzVG9rZW4gJiYgYXV0aFJlc3VsdC5pZFRva2VuKSB7XG4gICAgICAgICAgdGhpcy5zZXRTZXNzaW9uKGF1dGhSZXN1bHQpO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSBlbHNlIGlmIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KVxuICB9XG5cbiAgc2V0U2Vzc2lvbihhdXRoUmVzdWx0KSB7XG4gICAgbGV0IGV4cGlyZXNBdCA9IEpTT04uc3RyaW5naWZ5KChhdXRoUmVzdWx0LmV4cGlyZXNJbiAqIDEwMDApICsgbmV3IERhdGUoKS5nZXRUaW1lKCkpXG4gICAgQ29va2llcy5zZXQoJ3VzZXInLCBhdXRoUmVzdWx0LmlkVG9rZW5QYXlsb2FkKVxuICAgIENvb2tpZXMuc2V0KCdqd3QnLCBhdXRoUmVzdWx0LmlkVG9rZW4pXG4gICAgQ29va2llcy5zZXQoJ2V4cGlyZXNBdCcsIGV4cGlyZXNBdClcbiAgICBDb29raWVzLnNldCgnc3ViJywgYXV0aFJlc3VsdC5pZFRva2VuUGF5bG9hZC5zdWIpXG4gICAgY29uc29sZS5sb2coYXV0aFJlc3VsdClcbiAgfVxuXG4gIGxvZ291dCgpIHtcbiAgICBDb29raWVzLnJlbW92ZSgndXNlcicpXG4gICAgQ29va2llcy5yZW1vdmUoJ2p3dCcpXG4gICAgQ29va2llcy5yZW1vdmUoJ2V4cGlyZXNBdCcpXG4gICAgQ29va2llcy5yZW1vdmUoJ3N1YicpXG4gICAgQ29va2llcy5yZW1vdmUoJ3JldHVyblVSTCcpXG5cbiAgICB0aGlzLmF1dGgwLmxvZ291dCh7XG4gICAgICByZXR1cm5UbzogQ0xJRU5UX1VSTCxcbiAgICAgIGNsaWVudElEOiAnNncwbHVvS0VLVUg0UUxPSW1sdUE4MWtOZjNqTG1XYnInXG4gICAgfSlcbiAgfVxuXG4gIGxvZ2luKCkge1xuICAgIENvb2tpZXMuc2V0KCdyZXR1cm5VUkwnLCAnLycpXG4gICAgdGhpcy5hdXRoMC5hdXRob3JpemUoKVxuICAgIGNvbnNvbGUubG9nKENMSUVOVF9VUkwpXG4gIH1cblxuICBsb2dpbkFkZEFjdGl2aXR5KCkge1xuICAgIENvb2tpZXMuc2V0KCdyZXR1cm5VUkwnLCAnL2NyZWF0ZScpXG4gICAgdGhpcy5hdXRoMC5hdXRob3JpemUoKVxuICB9XG5cbiAgaXNBdXRoZW50aWNhdGVkKCkge1xuICAgIGNvbnN0IGV4cGlyZXNBdCA9IENvb2tpZXMuZ2V0SlNPTignZXhwaXJlc0F0JylcbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkgPCBleHBpcmVzQXQ7XG4gICAgfVxufVxuXG5jb25zdCBhdXRoMENsaWVudCA9IG5ldyBBdXRoMCgpO1xuXG5leHBvcnQgZGVmYXVsdCBhdXRoMENsaWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./services/auth0.js\n");

/***/ }),

/***/ 5:
/*!*********************************!*\
  !*** multi ./pages/callback.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Dev/Documents/discoverdoo-app/pages/callback.js */"./pages/callback.js");


/***/ }),

/***/ "auth0-js":
/*!***************************!*\
  !*** external "auth0-js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"auth0-js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhdXRoMC1qc1wiPzJjZTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXV0aDAtanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhdXRoMC1qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///auth0-js\n");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"js-cookie\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIj8wM2MxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImpzLWNvb2tpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///js-cookie\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/style\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCI/MmJiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtanN4L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-jsx/style\n");

/***/ })

/******/ });