webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./services/auth0.js":
/*!***************************!*\
  !*** ./services/auth0.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! auth0-js */ \"./node_modules/auth0-js/dist/auth0.min.esm.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar CLIENT_URL = \"http://localhost:3000\";\n\nvar Auth0 = /*#__PURE__*/function () {\n  function Auth0() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Auth0);\n\n    this.auth0 = new auth0_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].WebAuth({\n      domain: 'jakepeg.eu.auth0.com',\n      clientID: '6w0luoKEKUH4QLOImluA81kNf3jLmWbr',\n      redirectUri: \"\".concat(CLIENT_URL, \"/callback\"),\n      responseType: 'token id_token',\n      scope: 'openid profile'\n    });\n    this.login = this.login.bind(this);\n    this.loginAddActivity = this.loginAddActivity.bind(this);\n    this.logout = this.logout.bind(this);\n    this.handleAuthentication = this.handleAuthentication.bind(this);\n    this.isAuthenticated = this.isAuthenticated.bind(this);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Auth0, [{\n    key: \"handleAuthentication\",\n    value: function handleAuthentication() {\n      var _this = this;\n\n      return new Promise(function (resolve, reject) {\n        _this.auth0.parseHash(function (err, authResult) {\n          if (authResult && authResult.accessToken && authResult.idToken) {\n            _this.setSession(authResult);\n\n            resolve();\n          } else if (err) {\n            reject(err);\n            console.log(err);\n          }\n        });\n      });\n    }\n  }, {\n    key: \"setSession\",\n    value: function setSession(authResult) {\n      // let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime())\n      // let expiresAt = JSON.stringify(authResult.expiresIn)\n      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('user', authResult.idTokenPayload, {\n        expires: 1\n      });\n      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('jwt', authResult.idToken, {\n        expires: 1\n      }); // Cookies.set('expiresAt', expiresAt, { expires: 1 })\n\n      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('sub', authResult.idTokenPayload.sub, {\n        expires: 1\n      });\n    }\n  }, {\n    key: \"logout\",\n    value: function logout() {\n      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.remove('user');\n      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.remove('jwt'); // Cookies.remove('expiresAt')\n\n      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.remove('sub');\n      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.remove('returnURL');\n      this.auth0.logout({\n        returnTo: CLIENT_URL,\n        clientID: '6w0luoKEKUH4QLOImluA81kNf3jLmWbr'\n      });\n    }\n  }, {\n    key: \"login\",\n    value: function login() {\n      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('returnURL', '/');\n      this.auth0.authorize();\n      console.log(CLIENT_URL);\n    }\n  }, {\n    key: \"loginAddActivity\",\n    value: function loginAddActivity() {\n      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('returnURL', '/create');\n      this.auth0.authorize();\n    }\n  }, {\n    key: \"isAuthenticated\",\n    value: function isAuthenticated() {\n      var expiresAt = js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.getJSON('expiresAt');\n      return new Date().getTime() < expiresAt;\n    }\n  }]);\n\n  return Auth0;\n}();\n\nvar auth0Client = new Auth0();\n/* harmony default export */ __webpack_exports__[\"default\"] = (auth0Client);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9hdXRoMC5qcz83MDVjIl0sIm5hbWVzIjpbIkNMSUVOVF9VUkwiLCJwcm9jZXNzIiwiQXV0aDAiLCJhdXRoMCIsIldlYkF1dGgiLCJkb21haW4iLCJjbGllbnRJRCIsInJlZGlyZWN0VXJpIiwicmVzcG9uc2VUeXBlIiwic2NvcGUiLCJsb2dpbiIsImJpbmQiLCJsb2dpbkFkZEFjdGl2aXR5IiwibG9nb3V0IiwiaGFuZGxlQXV0aGVudGljYXRpb24iLCJpc0F1dGhlbnRpY2F0ZWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInBhcnNlSGFzaCIsImVyciIsImF1dGhSZXN1bHQiLCJhY2Nlc3NUb2tlbiIsImlkVG9rZW4iLCJzZXRTZXNzaW9uIiwiY29uc29sZSIsImxvZyIsIkNvb2tpZXMiLCJzZXQiLCJpZFRva2VuUGF5bG9hZCIsImV4cGlyZXMiLCJzdWIiLCJyZW1vdmUiLCJyZXR1cm5UbyIsImF1dGhvcml6ZSIsImV4cGlyZXNBdCIsImdldEpTT04iLCJEYXRlIiwiZ2V0VGltZSIsImF1dGgwQ2xpZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLHVCQUFuQjs7SUFFTUMsSztBQUVKLG1CQUFjO0FBQUE7O0FBQ1osU0FBS0MsS0FBTCxHQUFhLElBQUlBLGdEQUFLLENBQUNDLE9BQVYsQ0FBa0I7QUFDN0JDLFlBQU0sRUFBRSxzQkFEcUI7QUFFN0JDLGNBQVEsRUFBRSxrQ0FGbUI7QUFHN0JDLGlCQUFXLFlBQUtQLFVBQUwsY0FIa0I7QUFJN0JRLGtCQUFZLEVBQUUsZ0JBSmU7QUFLN0JDLFdBQUssRUFBRTtBQUxzQixLQUFsQixDQUFiO0FBUUEsU0FBS0MsS0FBTCxHQUFhLEtBQUtBLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQixJQUFoQixDQUFiO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0IsS0FBS0EsZ0JBQUwsQ0FBc0JELElBQXRCLENBQTJCLElBQTNCLENBQXhCO0FBQ0EsU0FBS0UsTUFBTCxHQUFjLEtBQUtBLE1BQUwsQ0FBWUYsSUFBWixDQUFpQixJQUFqQixDQUFkO0FBQ0EsU0FBS0csb0JBQUwsR0FBNEIsS0FBS0Esb0JBQUwsQ0FBMEJILElBQTFCLENBQStCLElBQS9CLENBQTVCO0FBQ0EsU0FBS0ksZUFBTCxHQUF1QixLQUFLQSxlQUFMLENBQXFCSixJQUFyQixDQUEwQixJQUExQixDQUF2QjtBQUNEOzs7OzJDQUVzQjtBQUFBOztBQUNyQixhQUFPLElBQUlLLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsYUFBSSxDQUFDZixLQUFMLENBQVdnQixTQUFYLENBQXFCLFVBQUNDLEdBQUQsRUFBTUMsVUFBTixFQUFxQjtBQUN4QyxjQUFJQSxVQUFVLElBQUlBLFVBQVUsQ0FBQ0MsV0FBekIsSUFBd0NELFVBQVUsQ0FBQ0UsT0FBdkQsRUFBZ0U7QUFDOUQsaUJBQUksQ0FBQ0MsVUFBTCxDQUFnQkgsVUFBaEI7O0FBQ0FKLG1CQUFPO0FBQ1IsV0FIRCxNQUdPLElBQUlHLEdBQUosRUFBUztBQUNkRixrQkFBTSxDQUFDRSxHQUFELENBQU47QUFDQUssbUJBQU8sQ0FBQ0MsR0FBUixDQUFZTixHQUFaO0FBQ0Q7QUFDRixTQVJEO0FBU0QsT0FWTSxDQUFQO0FBV0Q7OzsrQkFFVUMsVSxFQUFZO0FBQ3JCO0FBRUE7QUFDQU0sc0RBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0JQLFVBQVUsQ0FBQ1EsY0FBL0IsRUFBK0M7QUFBRUMsZUFBTyxFQUFFO0FBQVgsT0FBL0M7QUFDQUgsc0RBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosRUFBbUJQLFVBQVUsQ0FBQ0UsT0FBOUIsRUFBdUM7QUFBRU8sZUFBTyxFQUFFO0FBQVgsT0FBdkMsRUFMcUIsQ0FNckI7O0FBQ0FILHNEQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CUCxVQUFVLENBQUNRLGNBQVgsQ0FBMEJFLEdBQTdDLEVBQWtEO0FBQUVELGVBQU8sRUFBRTtBQUFYLE9BQWxEO0FBQ0Q7Ozs2QkFFUTtBQUNQSCxzREFBTyxDQUFDSyxNQUFSLENBQWUsTUFBZjtBQUNBTCxzREFBTyxDQUFDSyxNQUFSLENBQWUsS0FBZixFQUZPLENBR1A7O0FBQ0FMLHNEQUFPLENBQUNLLE1BQVIsQ0FBZSxLQUFmO0FBQ0FMLHNEQUFPLENBQUNLLE1BQVIsQ0FBZSxXQUFmO0FBRUEsV0FBSzdCLEtBQUwsQ0FBV1UsTUFBWCxDQUFrQjtBQUNoQm9CLGdCQUFRLEVBQUVqQyxVQURNO0FBRWhCTSxnQkFBUSxFQUFFO0FBRk0sT0FBbEI7QUFJRDs7OzRCQUVPO0FBQ05xQixzREFBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5QixHQUF6QjtBQUNBLFdBQUt6QixLQUFMLENBQVcrQixTQUFYO0FBQ0FULGFBQU8sQ0FBQ0MsR0FBUixDQUFZMUIsVUFBWjtBQUNEOzs7dUNBRWtCO0FBQ2pCMkIsc0RBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUIsU0FBekI7QUFDQSxXQUFLekIsS0FBTCxDQUFXK0IsU0FBWDtBQUNEOzs7c0NBRWlCO0FBQ2hCLFVBQU1DLFNBQVMsR0FBR1IsZ0RBQU8sQ0FBQ1MsT0FBUixDQUFnQixXQUFoQixDQUFsQjtBQUNBLGFBQU8sSUFBSUMsSUFBSixHQUFXQyxPQUFYLEtBQXVCSCxTQUE5QjtBQUNDOzs7Ozs7QUFHTCxJQUFNSSxXQUFXLEdBQUcsSUFBSXJDLEtBQUosRUFBcEI7QUFFZXFDLDBFQUFmIiwiZmlsZSI6Ii4vc2VydmljZXMvYXV0aDAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXV0aDAgZnJvbSAnYXV0aDAtanMnXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnXG5cbmNvbnN0IENMSUVOVF9VUkwgPSBwcm9jZXNzLmVudi5DTElFTlRfVVJMO1xuXG5jbGFzcyBBdXRoMCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hdXRoMCA9IG5ldyBhdXRoMC5XZWJBdXRoKHtcbiAgICAgIGRvbWFpbjogJ2pha2VwZWcuZXUuYXV0aDAuY29tJyxcbiAgICAgIGNsaWVudElEOiAnNncwbHVvS0VLVUg0UUxPSW1sdUE4MWtOZjNqTG1XYnInLFxuICAgICAgcmVkaXJlY3RVcmk6IGAke0NMSUVOVF9VUkx9L2NhbGxiYWNrYCxcbiAgICAgIHJlc3BvbnNlVHlwZTogJ3Rva2VuIGlkX3Rva2VuJyxcbiAgICAgIHNjb3BlOiAnb3BlbmlkIHByb2ZpbGUnXG4gICAgfSk7XG5cbiAgICB0aGlzLmxvZ2luID0gdGhpcy5sb2dpbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMubG9naW5BZGRBY3Rpdml0eSA9IHRoaXMubG9naW5BZGRBY3Rpdml0eS5iaW5kKHRoaXMpO1xuICAgIHRoaXMubG9nb3V0ID0gdGhpcy5sb2dvdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUF1dGhlbnRpY2F0aW9uID0gdGhpcy5oYW5kbGVBdXRoZW50aWNhdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkID0gdGhpcy5pc0F1dGhlbnRpY2F0ZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUF1dGhlbnRpY2F0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmF1dGgwLnBhcnNlSGFzaCgoZXJyLCBhdXRoUmVzdWx0KSA9PiB7XG4gICAgICAgIGlmIChhdXRoUmVzdWx0ICYmIGF1dGhSZXN1bHQuYWNjZXNzVG9rZW4gJiYgYXV0aFJlc3VsdC5pZFRva2VuKSB7XG4gICAgICAgICAgdGhpcy5zZXRTZXNzaW9uKGF1dGhSZXN1bHQpO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSBlbHNlIGlmIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KVxuICB9XG5cbiAgc2V0U2Vzc2lvbihhdXRoUmVzdWx0KSB7XG4gICAgLy8gbGV0IGV4cGlyZXNBdCA9IEpTT04uc3RyaW5naWZ5KChhdXRoUmVzdWx0LmV4cGlyZXNJbiAqIDEwMDApICsgbmV3IERhdGUoKS5nZXRUaW1lKCkpXG4gICAgXG4gICAgLy8gbGV0IGV4cGlyZXNBdCA9IEpTT04uc3RyaW5naWZ5KGF1dGhSZXN1bHQuZXhwaXJlc0luKVxuICAgIENvb2tpZXMuc2V0KCd1c2VyJywgYXV0aFJlc3VsdC5pZFRva2VuUGF5bG9hZCwgeyBleHBpcmVzOiAxIH0pXG4gICAgQ29va2llcy5zZXQoJ2p3dCcsIGF1dGhSZXN1bHQuaWRUb2tlbiwgeyBleHBpcmVzOiAxIH0pXG4gICAgLy8gQ29va2llcy5zZXQoJ2V4cGlyZXNBdCcsIGV4cGlyZXNBdCwgeyBleHBpcmVzOiAxIH0pXG4gICAgQ29va2llcy5zZXQoJ3N1YicsIGF1dGhSZXN1bHQuaWRUb2tlblBheWxvYWQuc3ViLCB7IGV4cGlyZXM6IDEgfSlcbiAgfVxuXG4gIGxvZ291dCgpIHtcbiAgICBDb29raWVzLnJlbW92ZSgndXNlcicpXG4gICAgQ29va2llcy5yZW1vdmUoJ2p3dCcpXG4gICAgLy8gQ29va2llcy5yZW1vdmUoJ2V4cGlyZXNBdCcpXG4gICAgQ29va2llcy5yZW1vdmUoJ3N1YicpXG4gICAgQ29va2llcy5yZW1vdmUoJ3JldHVyblVSTCcpXG5cbiAgICB0aGlzLmF1dGgwLmxvZ291dCh7XG4gICAgICByZXR1cm5UbzogQ0xJRU5UX1VSTCxcbiAgICAgIGNsaWVudElEOiAnNncwbHVvS0VLVUg0UUxPSW1sdUE4MWtOZjNqTG1XYnInXG4gICAgfSlcbiAgfVxuXG4gIGxvZ2luKCkge1xuICAgIENvb2tpZXMuc2V0KCdyZXR1cm5VUkwnLCAnLycpXG4gICAgdGhpcy5hdXRoMC5hdXRob3JpemUoKVxuICAgIGNvbnNvbGUubG9nKENMSUVOVF9VUkwpXG4gIH1cblxuICBsb2dpbkFkZEFjdGl2aXR5KCkge1xuICAgIENvb2tpZXMuc2V0KCdyZXR1cm5VUkwnLCAnL2NyZWF0ZScpXG4gICAgdGhpcy5hdXRoMC5hdXRob3JpemUoKVxuICB9XG5cbiAgaXNBdXRoZW50aWNhdGVkKCkge1xuICAgIGNvbnN0IGV4cGlyZXNBdCA9IENvb2tpZXMuZ2V0SlNPTignZXhwaXJlc0F0JylcbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkgPCBleHBpcmVzQXQ7XG4gICAgfVxufVxuXG5jb25zdCBhdXRoMENsaWVudCA9IG5ldyBBdXRoMCgpO1xuXG5leHBvcnQgZGVmYXVsdCBhdXRoMENsaWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./services/auth0.js\n");

/***/ })

})