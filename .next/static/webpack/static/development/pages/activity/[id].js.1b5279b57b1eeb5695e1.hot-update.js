webpackHotUpdate("static/development/pages/activity/[id].js",{

/***/ "./services/auth0.js":
/*!***************************!*\
  !*** ./services/auth0.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! auth0-js */ \"./node_modules/auth0-js/dist/auth0.min.esm.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar CLIENT_URL = \"http://localhost:3000\";\n\nvar Auth0 = /*#__PURE__*/function () {\n  function Auth0() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Auth0);\n\n    this.auth0 = new auth0_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].WebAuth({\n      domain: 'jakepeg.eu.auth0.com',\n      clientID: '6w0luoKEKUH4QLOImluA81kNf3jLmWbr',\n      redirectUri: \"\".concat(CLIENT_URL, \"/callback\"),\n      responseType: 'token id_token',\n      scope: 'openid profile'\n    });\n    this.login = this.login.bind(this);\n    this.loginAddActivity = this.loginAddActivity.bind(this);\n    this.logout = this.logout.bind(this);\n    this.handleAuthentication = this.handleAuthentication.bind(this);\n    this.isAuthenticated = this.isAuthenticated.bind(this);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Auth0, [{\n    key: \"handleAuthentication\",\n    value: function handleAuthentication() {\n      var _this = this;\n\n      return new Promise(function (resolve, reject) {\n        _this.auth0.parseHash(function (err, authResult) {\n          if (authResult && authResult.accessToken && authResult.idToken) {\n            _this.setSession(authResult);\n\n            resolve();\n          } else if (err) {\n            reject(err);\n          }\n        });\n      });\n    }\n  }, {\n    key: \"setSession\",\n    value: function setSession(authResult) {\n      // let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime())\n      var date = new Date();\n      var expiresAt = date.setDate(date.getDate() + 1);\n      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('user', authResult.idTokenPayload, {\n        expires: 1\n      });\n      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('jwt', authResult.idToken, {\n        expires: 1\n      });\n      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('expiresAt', expiresAt, {\n        expires: 1\n      });\n      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('sub', authResult.idTokenPayload.sub, {\n        expires: 1\n      });\n    }\n  }, {\n    key: \"logout\",\n    value: function logout() {\n      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.remove('user');\n      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.remove('jwt');\n      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.remove('expiresAt');\n      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.remove('sub');\n      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.remove('returnURL');\n      this.auth0.logout({\n        returnTo: CLIENT_URL,\n        clientID: '6w0luoKEKUH4QLOImluA81kNf3jLmWbr'\n      });\n    }\n  }, {\n    key: \"login\",\n    value: function login() {\n      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('returnURL', '/');\n      this.auth0.authorize();\n    }\n  }, {\n    key: \"loginAddActivity\",\n    value: function loginAddActivity() {\n      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('returnURL', '/create');\n      this.auth0.authorize();\n    }\n  }, {\n    key: \"isAuthenticated\",\n    value: function isAuthenticated() {\n      var expiresAt = js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get('expiresAt');\n      return new Date().getTime() < expiresAt;\n    }\n  }]);\n\n  return Auth0;\n}();\n\nvar auth0Client = new Auth0();\n/* harmony default export */ __webpack_exports__[\"default\"] = (auth0Client);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9hdXRoMC5qcz83MDVjIl0sIm5hbWVzIjpbIkNMSUVOVF9VUkwiLCJwcm9jZXNzIiwiQXV0aDAiLCJhdXRoMCIsIldlYkF1dGgiLCJkb21haW4iLCJjbGllbnRJRCIsInJlZGlyZWN0VXJpIiwicmVzcG9uc2VUeXBlIiwic2NvcGUiLCJsb2dpbiIsImJpbmQiLCJsb2dpbkFkZEFjdGl2aXR5IiwibG9nb3V0IiwiaGFuZGxlQXV0aGVudGljYXRpb24iLCJpc0F1dGhlbnRpY2F0ZWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInBhcnNlSGFzaCIsImVyciIsImF1dGhSZXN1bHQiLCJhY2Nlc3NUb2tlbiIsImlkVG9rZW4iLCJzZXRTZXNzaW9uIiwiZGF0ZSIsIkRhdGUiLCJleHBpcmVzQXQiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsIkNvb2tpZXMiLCJzZXQiLCJpZFRva2VuUGF5bG9hZCIsImV4cGlyZXMiLCJzdWIiLCJyZW1vdmUiLCJyZXR1cm5UbyIsImF1dGhvcml6ZSIsImdldCIsImdldFRpbWUiLCJhdXRoMENsaWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHQyx1QkFBbkI7O0lBRU1DLEs7QUFFSixtQkFBYztBQUFBOztBQUNaLFNBQUtDLEtBQUwsR0FBYSxJQUFJQSxnREFBSyxDQUFDQyxPQUFWLENBQWtCO0FBQzdCQyxZQUFNLEVBQUUsc0JBRHFCO0FBRTdCQyxjQUFRLEVBQUUsa0NBRm1CO0FBRzdCQyxpQkFBVyxZQUFLUCxVQUFMLGNBSGtCO0FBSTdCUSxrQkFBWSxFQUFFLGdCQUplO0FBSzdCQyxXQUFLLEVBQUU7QUFMc0IsS0FBbEIsQ0FBYjtBQVFBLFNBQUtDLEtBQUwsR0FBYSxLQUFLQSxLQUFMLENBQVdDLElBQVgsQ0FBZ0IsSUFBaEIsQ0FBYjtBQUNBLFNBQUtDLGdCQUFMLEdBQXdCLEtBQUtBLGdCQUFMLENBQXNCRCxJQUF0QixDQUEyQixJQUEzQixDQUF4QjtBQUNBLFNBQUtFLE1BQUwsR0FBYyxLQUFLQSxNQUFMLENBQVlGLElBQVosQ0FBaUIsSUFBakIsQ0FBZDtBQUNBLFNBQUtHLG9CQUFMLEdBQTRCLEtBQUtBLG9CQUFMLENBQTBCSCxJQUExQixDQUErQixJQUEvQixDQUE1QjtBQUNBLFNBQUtJLGVBQUwsR0FBdUIsS0FBS0EsZUFBTCxDQUFxQkosSUFBckIsQ0FBMEIsSUFBMUIsQ0FBdkI7QUFDRDs7OzsyQ0FFc0I7QUFBQTs7QUFDckIsYUFBTyxJQUFJSyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLGFBQUksQ0FBQ2YsS0FBTCxDQUFXZ0IsU0FBWCxDQUFxQixVQUFDQyxHQUFELEVBQU1DLFVBQU4sRUFBcUI7QUFDeEMsY0FBSUEsVUFBVSxJQUFJQSxVQUFVLENBQUNDLFdBQXpCLElBQXdDRCxVQUFVLENBQUNFLE9BQXZELEVBQWdFO0FBQzlELGlCQUFJLENBQUNDLFVBQUwsQ0FBZ0JILFVBQWhCOztBQUNBSixtQkFBTztBQUNSLFdBSEQsTUFHTyxJQUFJRyxHQUFKLEVBQVM7QUFDZEYsa0JBQU0sQ0FBQ0UsR0FBRCxDQUFOO0FBQ0Q7QUFDRixTQVBEO0FBUUQsT0FUTSxDQUFQO0FBVUQ7OzsrQkFFVUMsVSxFQUFZO0FBQ3JCO0FBQ0EsVUFBSUksSUFBSSxHQUFHLElBQUlDLElBQUosRUFBWDtBQUNBLFVBQUlDLFNBQVMsR0FBR0YsSUFBSSxDQUFDRyxPQUFMLENBQWFILElBQUksQ0FBQ0ksT0FBTCxLQUFpQixDQUE5QixDQUFoQjtBQUNBQyxzREFBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQlYsVUFBVSxDQUFDVyxjQUEvQixFQUErQztBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQUEvQztBQUNBSCxzREFBTyxDQUFDQyxHQUFSLENBQVksS0FBWixFQUFtQlYsVUFBVSxDQUFDRSxPQUE5QixFQUF1QztBQUFFVSxlQUFPLEVBQUU7QUFBWCxPQUF2QztBQUNBSCxzREFBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5QkosU0FBekIsRUFBb0M7QUFBRU0sZUFBTyxFQUFFO0FBQVgsT0FBcEM7QUFDQUgsc0RBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosRUFBbUJWLFVBQVUsQ0FBQ1csY0FBWCxDQUEwQkUsR0FBN0MsRUFBa0Q7QUFBRUQsZUFBTyxFQUFFO0FBQVgsT0FBbEQ7QUFDRDs7OzZCQUVRO0FBQ1BILHNEQUFPLENBQUNLLE1BQVIsQ0FBZSxNQUFmO0FBQ0FMLHNEQUFPLENBQUNLLE1BQVIsQ0FBZSxLQUFmO0FBQ0FMLHNEQUFPLENBQUNLLE1BQVIsQ0FBZSxXQUFmO0FBQ0FMLHNEQUFPLENBQUNLLE1BQVIsQ0FBZSxLQUFmO0FBQ0FMLHNEQUFPLENBQUNLLE1BQVIsQ0FBZSxXQUFmO0FBRUEsV0FBS2hDLEtBQUwsQ0FBV1UsTUFBWCxDQUFrQjtBQUNoQnVCLGdCQUFRLEVBQUVwQyxVQURNO0FBRWhCTSxnQkFBUSxFQUFFO0FBRk0sT0FBbEI7QUFJRDs7OzRCQUVPO0FBQ053QixzREFBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5QixHQUF6QjtBQUNBLFdBQUs1QixLQUFMLENBQVdrQyxTQUFYO0FBQ0Q7Ozt1Q0FFa0I7QUFDakJQLHNEQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCLFNBQXpCO0FBQ0EsV0FBSzVCLEtBQUwsQ0FBV2tDLFNBQVg7QUFDRDs7O3NDQUVpQjtBQUNoQixVQUFNVixTQUFTLEdBQUdHLGdEQUFPLENBQUNRLEdBQVIsQ0FBWSxXQUFaLENBQWxCO0FBQ0EsYUFBTyxJQUFJWixJQUFKLEdBQVdhLE9BQVgsS0FBdUJaLFNBQTlCO0FBQ0M7Ozs7OztBQUdMLElBQU1hLFdBQVcsR0FBRyxJQUFJdEMsS0FBSixFQUFwQjtBQUVlc0MsMEVBQWYiLCJmaWxlIjoiLi9zZXJ2aWNlcy9hdXRoMC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhdXRoMCBmcm9tICdhdXRoMC1qcydcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSdcblxuY29uc3QgQ0xJRU5UX1VSTCA9IHByb2Nlc3MuZW52LkNMSUVOVF9VUkw7XG5cbmNsYXNzIEF1dGgwIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmF1dGgwID0gbmV3IGF1dGgwLldlYkF1dGgoe1xuICAgICAgZG9tYWluOiAnamFrZXBlZy5ldS5hdXRoMC5jb20nLFxuICAgICAgY2xpZW50SUQ6ICc2dzBsdW9LRUtVSDRRTE9JbWx1QTgxa05mM2pMbVdicicsXG4gICAgICByZWRpcmVjdFVyaTogYCR7Q0xJRU5UX1VSTH0vY2FsbGJhY2tgLFxuICAgICAgcmVzcG9uc2VUeXBlOiAndG9rZW4gaWRfdG9rZW4nLFxuICAgICAgc2NvcGU6ICdvcGVuaWQgcHJvZmlsZSdcbiAgICB9KTtcblxuICAgIHRoaXMubG9naW4gPSB0aGlzLmxvZ2luLmJpbmQodGhpcyk7XG4gICAgdGhpcy5sb2dpbkFkZEFjdGl2aXR5ID0gdGhpcy5sb2dpbkFkZEFjdGl2aXR5LmJpbmQodGhpcyk7XG4gICAgdGhpcy5sb2dvdXQgPSB0aGlzLmxvZ291dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQXV0aGVudGljYXRpb24gPSB0aGlzLmhhbmRsZUF1dGhlbnRpY2F0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSB0aGlzLmlzQXV0aGVudGljYXRlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQXV0aGVudGljYXRpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuYXV0aDAucGFyc2VIYXNoKChlcnIsIGF1dGhSZXN1bHQpID0+IHtcbiAgICAgICAgaWYgKGF1dGhSZXN1bHQgJiYgYXV0aFJlc3VsdC5hY2Nlc3NUb2tlbiAmJiBhdXRoUmVzdWx0LmlkVG9rZW4pIHtcbiAgICAgICAgICB0aGlzLnNldFNlc3Npb24oYXV0aFJlc3VsdCk7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKGVycikge1xuICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KVxuICB9XG5cbiAgc2V0U2Vzc2lvbihhdXRoUmVzdWx0KSB7XG4gICAgLy8gbGV0IGV4cGlyZXNBdCA9IEpTT04uc3RyaW5naWZ5KChhdXRoUmVzdWx0LmV4cGlyZXNJbiAqIDEwMDApICsgbmV3IERhdGUoKS5nZXRUaW1lKCkpXG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBleHBpcmVzQXQgPSBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyAxKTtcbiAgICBDb29raWVzLnNldCgndXNlcicsIGF1dGhSZXN1bHQuaWRUb2tlblBheWxvYWQsIHsgZXhwaXJlczogMSB9KVxuICAgIENvb2tpZXMuc2V0KCdqd3QnLCBhdXRoUmVzdWx0LmlkVG9rZW4sIHsgZXhwaXJlczogMSB9KVxuICAgIENvb2tpZXMuc2V0KCdleHBpcmVzQXQnLCBleHBpcmVzQXQsIHsgZXhwaXJlczogMSB9KVxuICAgIENvb2tpZXMuc2V0KCdzdWInLCBhdXRoUmVzdWx0LmlkVG9rZW5QYXlsb2FkLnN1YiwgeyBleHBpcmVzOiAxIH0pXG4gIH1cblxuICBsb2dvdXQoKSB7XG4gICAgQ29va2llcy5yZW1vdmUoJ3VzZXInKVxuICAgIENvb2tpZXMucmVtb3ZlKCdqd3QnKVxuICAgIENvb2tpZXMucmVtb3ZlKCdleHBpcmVzQXQnKVxuICAgIENvb2tpZXMucmVtb3ZlKCdzdWInKVxuICAgIENvb2tpZXMucmVtb3ZlKCdyZXR1cm5VUkwnKVxuXG4gICAgdGhpcy5hdXRoMC5sb2dvdXQoe1xuICAgICAgcmV0dXJuVG86IENMSUVOVF9VUkwsXG4gICAgICBjbGllbnRJRDogJzZ3MGx1b0tFS1VINFFMT0ltbHVBODFrTmYzakxtV2JyJ1xuICAgIH0pXG4gIH1cblxuICBsb2dpbigpIHtcbiAgICBDb29raWVzLnNldCgncmV0dXJuVVJMJywgJy8nKVxuICAgIHRoaXMuYXV0aDAuYXV0aG9yaXplKClcbiAgfVxuXG4gIGxvZ2luQWRkQWN0aXZpdHkoKSB7XG4gICAgQ29va2llcy5zZXQoJ3JldHVyblVSTCcsICcvY3JlYXRlJylcbiAgICB0aGlzLmF1dGgwLmF1dGhvcml6ZSgpXG4gIH1cblxuICBpc0F1dGhlbnRpY2F0ZWQoKSB7XG4gICAgY29uc3QgZXhwaXJlc0F0ID0gQ29va2llcy5nZXQoJ2V4cGlyZXNBdCcpXG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpIDwgZXhwaXJlc0F0O1xuICAgIH1cbn1cblxuY29uc3QgYXV0aDBDbGllbnQgPSBuZXcgQXV0aDAoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXV0aDBDbGllbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./services/auth0.js\n");

/***/ })

})