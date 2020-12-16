webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./services/auth0.js":
/*!***************************!*\
  !*** ./services/auth0.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! auth0-js */ \"./node_modules/auth0-js/dist/auth0.min.esm.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ \"./actions/index.js\");\n\n\n\n\n\nvar CLIENT_URL = \"http://localhost:3000\";\n\nvar Auth0 = /*#__PURE__*/function () {\n  function Auth0() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Auth0);\n\n    this.auth0 = new auth0_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].WebAuth({\n      domain: 'jakepeg.eu.auth0.com',\n      clientID: '6w0luoKEKUH4QLOImluA81kNf3jLmWbr',\n      redirectUri: \"\".concat(CLIENT_URL, \"/callback\"),\n      responseType: 'token id_token',\n      scope: 'openid profile'\n    });\n    this.login = this.login.bind(this);\n    this.loginAddActivity = this.loginAddActivity.bind(this);\n    this.logout = this.logout.bind(this);\n    this.handleAuthentication = this.handleAuthentication.bind(this);\n    this.isAuthenticated = this.isAuthenticated.bind(this);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Auth0, [{\n    key: \"handleAuthentication\",\n    value: function handleAuthentication() {\n      var _this = this;\n\n      return new Promise(function (resolve, reject) {\n        _this.auth0.parseHash(function (err, authResult) {\n          if (authResult && authResult.accessToken && authResult.idToken) {\n            _this.setSession(authResult);\n\n            resolve();\n          } else if (err) {\n            reject(err);\n          }\n        });\n      });\n    }\n  }, {\n    key: \"setSession\",\n    value: function setSession(authResult) {\n      // let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime())\n      var date = new Date();\n      var expiresAt = date.setDate(date.getDate() + 1);\n      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('user', authResult.idTokenPayload, {\n        expires: 1\n      });\n      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('jwt', authResult.idToken, {\n        expires: 1\n      });\n      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('expiresAt', expiresAt, {\n        expires: 1\n      });\n      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('sub', authResult.idTokenPayload.sub, {\n        expires: 1\n      });\n      this.setFavesCookie();\n    } // get user favourites from the db and set them in a cookie\n    // can this be moved to the favourites component?\n\n  }, {\n    key: \"setFavesCookie\",\n    value: function setFavesCookie() {\n      Object(_actions__WEBPACK_IMPORTED_MODULE_4__[\"getUserFavourites\"])(js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get('sub')).then(function (data) {\n        return js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('favourites', data[0].favourites, {\n          expires: 1\n        });\n      });\n      console.log(data[0].favourites);\n    }\n  }, {\n    key: \"logout\",\n    value: function logout() {\n      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.remove('user');\n      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.remove('jwt');\n      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.remove('expiresAt');\n      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.remove('sub');\n      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.remove('returnURL');\n      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.remove('favourites');\n      this.auth0.logout({\n        returnTo: CLIENT_URL,\n        clientID: '6w0luoKEKUH4QLOImluA81kNf3jLmWbr'\n      });\n    }\n  }, {\n    key: \"login\",\n    value: function login() {\n      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('returnURL', '/');\n      this.auth0.authorize();\n    }\n  }, {\n    key: \"loginAddActivity\",\n    value: function loginAddActivity() {\n      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('returnURL', '/create');\n      this.auth0.authorize();\n    }\n  }, {\n    key: \"isAuthenticated\",\n    value: function isAuthenticated() {\n      var expiresAt = js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get('expiresAt');\n      return new Date().getTime() < expiresAt;\n    }\n  }]);\n\n  return Auth0;\n}();\n\nvar auth0Client = new Auth0();\n/* harmony default export */ __webpack_exports__[\"default\"] = (auth0Client);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9hdXRoMC5qcz83MDVjIl0sIm5hbWVzIjpbIkNMSUVOVF9VUkwiLCJwcm9jZXNzIiwiQXV0aDAiLCJhdXRoMCIsIldlYkF1dGgiLCJkb21haW4iLCJjbGllbnRJRCIsInJlZGlyZWN0VXJpIiwicmVzcG9uc2VUeXBlIiwic2NvcGUiLCJsb2dpbiIsImJpbmQiLCJsb2dpbkFkZEFjdGl2aXR5IiwibG9nb3V0IiwiaGFuZGxlQXV0aGVudGljYXRpb24iLCJpc0F1dGhlbnRpY2F0ZWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInBhcnNlSGFzaCIsImVyciIsImF1dGhSZXN1bHQiLCJhY2Nlc3NUb2tlbiIsImlkVG9rZW4iLCJzZXRTZXNzaW9uIiwiZGF0ZSIsIkRhdGUiLCJleHBpcmVzQXQiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsIkNvb2tpZXMiLCJzZXQiLCJpZFRva2VuUGF5bG9hZCIsImV4cGlyZXMiLCJzdWIiLCJzZXRGYXZlc0Nvb2tpZSIsImdldFVzZXJGYXZvdXJpdGVzIiwiZ2V0IiwidGhlbiIsImRhdGEiLCJmYXZvdXJpdGVzIiwiY29uc29sZSIsImxvZyIsInJlbW92ZSIsInJldHVyblRvIiwiYXV0aG9yaXplIiwiZ2V0VGltZSIsImF1dGgwQ2xpZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLHVCQUFuQjs7SUFFTUMsSztBQUVKLG1CQUFjO0FBQUE7O0FBQ1osU0FBS0MsS0FBTCxHQUFhLElBQUlBLGdEQUFLLENBQUNDLE9BQVYsQ0FBa0I7QUFDN0JDLFlBQU0sRUFBRSxzQkFEcUI7QUFFN0JDLGNBQVEsRUFBRSxrQ0FGbUI7QUFHN0JDLGlCQUFXLFlBQUtQLFVBQUwsY0FIa0I7QUFJN0JRLGtCQUFZLEVBQUUsZ0JBSmU7QUFLN0JDLFdBQUssRUFBRTtBQUxzQixLQUFsQixDQUFiO0FBUUEsU0FBS0MsS0FBTCxHQUFhLEtBQUtB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QUFZLFdBQVosRUFBeUIsR0FBekI7QUFDQSxXQUFLNUIsS0FBTCxDQUFXMEMsU0FBWDtBQUNEOzs7dUNBRWtCO0FBQ2pCZixzREFBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5QixTQUF6QjtBQUNBLFdBQUs1QixLQUFMLENBQVcwQyxTQUFYO0FBQ0Q7OztzQ0FFaUI7QUFDaEIsVUFBTWxCLFNBQVMsR0FBR0csZ0RBQU8sQ0FBQ08sR0FBUixDQUFZLFdBQVosQ0FBbEI7QUFDQSxhQUFPLElBQUlYLElBQUosR0FBV29CLE9BQVgsS0FBdUJuQixTQUE5QjtBQUNEOzs7Ozs7QUFHSCxJQUFNb0IsV0FBVyxHQUFHLElBQUk3QyxLQUFKLEVBQXBCO0FBRWU2QywwRUFBZiIsImZpbGUiOiIuL3NlcnZpY2VzL2F1dGgwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF1dGgwIGZyb20gJ2F1dGgwLWpzJ1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJ1xuaW1wb3J0IHsgZ2V0VXNlckZhdm91cml0ZXMgfSBmcm9tICcuLi9hY3Rpb25zJ1xuXG5jb25zdCBDTElFTlRfVVJMID0gcHJvY2Vzcy5lbnYuQ0xJRU5UX1VSTDtcblxuY2xhc3MgQXV0aDAge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYXV0aDAgPSBuZXcgYXV0aDAuV2ViQXV0aCh7XG4gICAgICBkb21haW46ICdqYWtlcGVnLmV1LmF1dGgwLmNvbScsXG4gICAgICBjbGllbnRJRDogJzZ3MGx1b0tFS1VINFFMT0ltbHVBODFrTmYzakxtV2JyJyxcbiAgICAgIHJlZGlyZWN0VXJpOiBgJHtDTElFTlRfVVJMfS9jYWxsYmFja2AsXG4gICAgICByZXNwb25zZVR5cGU6ICd0b2tlbiBpZF90b2tlbicsXG4gICAgICBzY29wZTogJ29wZW5pZCBwcm9maWxlJ1xuICAgIH0pO1xuXG4gICAgdGhpcy5sb2dpbiA9IHRoaXMubG9naW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLmxvZ2luQWRkQWN0aXZpdHkgPSB0aGlzLmxvZ2luQWRkQWN0aXZpdHkuYmluZCh0aGlzKTtcbiAgICB0aGlzLmxvZ291dCA9IHRoaXMubG9nb3V0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVBdXRoZW50aWNhdGlvbiA9IHRoaXMuaGFuZGxlQXV0aGVudGljYXRpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmlzQXV0aGVudGljYXRlZCA9IHRoaXMuaXNBdXRoZW50aWNhdGVkLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVBdXRoZW50aWNhdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5hdXRoMC5wYXJzZUhhc2goKGVyciwgYXV0aFJlc3VsdCkgPT4ge1xuICAgICAgICBpZiAoYXV0aFJlc3VsdCAmJiBhdXRoUmVzdWx0LmFjY2Vzc1Rva2VuICYmIGF1dGhSZXN1bHQuaWRUb2tlbikge1xuICAgICAgICAgIHRoaXMuc2V0U2Vzc2lvbihhdXRoUmVzdWx0KTtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXJyKSB7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pXG4gIH1cblxuICBzZXRTZXNzaW9uKGF1dGhSZXN1bHQpIHtcbiAgICAvLyBsZXQgZXhwaXJlc0F0ID0gSlNPTi5zdHJpbmdpZnkoKGF1dGhSZXN1bHQuZXhwaXJlc0luICogMTAwMCkgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSlcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IGV4cGlyZXNBdCA9IGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIDEpO1xuICAgIENvb2tpZXMuc2V0KCd1c2VyJywgYXV0aFJlc3VsdC5pZFRva2VuUGF5bG9hZCwgeyBleHBpcmVzOiAxIH0pXG4gICAgQ29va2llcy5zZXQoJ2p3dCcsIGF1dGhSZXN1bHQuaWRUb2tlbiwgeyBleHBpcmVzOiAxIH0pXG4gICAgQ29va2llcy5zZXQoJ2V4cGlyZXNBdCcsIGV4cGlyZXNBdCwgeyBleHBpcmVzOiAxIH0pXG4gICAgQ29va2llcy5zZXQoJ3N1YicsIGF1dGhSZXN1bHQuaWRUb2tlblBheWxvYWQuc3ViLCB7IGV4cGlyZXM6IDEgfSlcbiAgICB0aGlzLnNldEZhdmVzQ29va2llKClcbiAgfVxuXG4gIC8vIGdldCB1c2VyIGZhdm91cml0ZXMgZnJvbSB0aGUgZGIgYW5kIHNldCB0aGVtIGluIGEgY29va2llXG4gIC8vIGNhbiB0aGlzIGJlIG1vdmVkIHRvIHRoZSBmYXZvdXJpdGVzIGNvbXBvbmVudD9cbiAgc2V0RmF2ZXNDb29raWUoKSB7XG4gICAgZ2V0VXNlckZhdm91cml0ZXMoQ29va2llcy5nZXQoJ3N1YicpKS50aGVuKGRhdGEgPT4gQ29va2llcy5zZXQoJ2Zhdm91cml0ZXMnLCBkYXRhWzBdLmZhdm91cml0ZXMsIHsgZXhwaXJlczogMSB9KSlcbiAgICBjb25zb2xlLmxvZyhkYXRhWzBdLmZhdm91cml0ZXMpXG4gICB9XG5cbiAgbG9nb3V0KCkge1xuICAgIENvb2tpZXMucmVtb3ZlKCd1c2VyJylcbiAgICBDb29raWVzLnJlbW92ZSgnand0JylcbiAgICBDb29raWVzLnJlbW92ZSgnZXhwaXJlc0F0JylcbiAgICBDb29raWVzLnJlbW92ZSgnc3ViJylcbiAgICBDb29raWVzLnJlbW92ZSgncmV0dXJuVVJMJylcbiAgICBDb29raWVzLnJlbW92ZSgnZmF2b3VyaXRlcycpXG5cbiAgICB0aGlzLmF1dGgwLmxvZ291dCh7XG4gICAgICByZXR1cm5UbzogQ0xJRU5UX1VSTCxcbiAgICAgIGNsaWVudElEOiAnNncwbHVvS0VLVUg0UUxPSW1sdUE4MWtOZjNqTG1XYnInXG4gICAgfSlcbiAgfVxuXG4gIGxvZ2luKCkge1xuICAgIENvb2tpZXMuc2V0KCdyZXR1cm5VUkwnLCAnLycpXG4gICAgdGhpcy5hdXRoMC5hdXRob3JpemUoKVxuICB9XG5cbiAgbG9naW5BZGRBY3Rpdml0eSgpIHtcbiAgICBDb29raWVzLnNldCgncmV0dXJuVVJMJywgJy9jcmVhdGUnKVxuICAgIHRoaXMuYXV0aDAuYXV0aG9yaXplKClcbiAgfVxuXG4gIGlzQXV0aGVudGljYXRlZCgpIHtcbiAgICBjb25zdCBleHBpcmVzQXQgPSBDb29raWVzLmdldCgnZXhwaXJlc0F0JylcbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkgPCBleHBpcmVzQXQ7XG4gIH1cbn1cblxuY29uc3QgYXV0aDBDbGllbnQgPSBuZXcgQXV0aDAoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXV0aDBDbGllbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./services/auth0.js\n");

/***/ })

})