webpackHotUpdate("static/development/pages/activity/[id].js",{

/***/ "./pages/activity/[id]/index.js":
/*!**************************************!*\
  !*** ./pages/activity/[id]/index.js ***!
  \**************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions */ \"./actions/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _services_auth0__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auth0 */ \"./services/auth0.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Documents/discoverdoo-app/pages/activity/[id]/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar DetailPage = function DetailPage(props) {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  var id = router.query.id;\n  var activity = props.activity;\n\n  var handleDelete = function handleDelete(id) {\n    Object(_actions__WEBPACK_IMPORTED_MODULE_2__[\"deleteActivity\"])(id).then(function () {\n      router.push('/my-activities');\n    });\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, \"\".concat(activity.name, \" - DiscoverDoo\")), __jsx(\"meta\", {\n    name: \"title\",\n    content: \"\".concat(activity.name, \" - DiscoverDoo fun finder\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: \"contain top-space\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"details-card\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"card-header\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 11\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 11\n    }\n  }, activity.name), __jsx(\"a\", {\n    className: \"back-link\",\n    id: \"back-btn\",\n    onClick: function onClick() {\n      return router.back();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    id: \"arrow-left\",\n    src: \"/arrow-left.svg\",\n    alt: \"Go Back\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 15\n    }\n  }), __jsx(\"span\", {\n    className: \"back\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 15\n    }\n  }, \"BACK\"))), __jsx(\"div\", {\n    className: \"card-content\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"info-section\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }\n  }, __jsx(\"p\", {\n    className: \"description\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 15\n    }\n  }, activity.description), activity.ageFrom.length > 0 && __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    className: \"info\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 19\n    }\n  }, __jsx(\"img\", {\n    className: \"map-icon\",\n    align: \"top\",\n    src: \"/child.svg\",\n    alt: \"Child icon\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 19\n    }\n  }), \"Ages \", activity.ageFrom, \" - \", activity.ageTo)), __jsx(\"p\", {\n    className: \"info\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 15\n    }\n  }, __jsx(\"img\", {\n    className: \"map-icon\",\n    align: \"top\",\n    src: \"/tags.svg\",\n    alt: \"Tags icon\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 15\n    }\n  }), activity.category), activity.price.length > 0 && __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    className: \"info\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 19\n    }\n  }, __jsx(\"img\", {\n    className: \"map-icon\",\n    align: \"top\",\n    src: \"/piggy.svg\",\n    alt: \"Piggybank\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 19\n    }\n  }), activity.price)), activity.website.length > 0 && __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    className: \"info\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 19\n    }\n  }, __jsx(\"a\", {\n    href: 'http://' + activity.website,\n    target: \"_blank\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 19\n    }\n  }, __jsx(\"img\", {\n    className: \"map-icon\",\n    align: \"top\",\n    src: \"/eye.svg\",\n    alt: \"Eye\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 19\n    }\n  }), activity.medium)))), __jsx(\"img\", {\n    className: \"image-section\",\n    src: \"https://res.cloudinary.com/jakepeg/image/upload/f_auto/v1593005651/\".concat(activity.image),\n    alt: activity.name,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 13\n    }\n  })), _services_auth0__WEBPACK_IMPORTED_MODULE_5__[\"default\"].isAuthenticated() && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"button\", {\n    className: \"delete-button\",\n    onClick: function onClick() {\n      return handleDelete(activity._id);\n    },\n    href: \"#\",\n    role: \"button\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 17\n    }\n  }, \"Delete\"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/activity/[id]/edit\",\n    as: \"/activity/\".concat(id, \"/edit\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 17\n    }\n  }, __jsx(\"button\", {\n    className: \"edit-button\",\n    role: \"button\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 19\n    }\n  }, \"Edit\"))))));\n};\n\n_s(DetailPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = DetailPage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"DetailPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hY3Rpdml0eS8vaW5kZXguanM/MjBkYyJdLCJuYW1lcyI6WyJEZXRhaWxQYWdlIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiYWN0aXZpdHkiLCJoYW5kbGVEZWxldGUiLCJkZWxldGVBY3Rpdml0eSIsInRoZW4iLCJwdXNoIiwibmFtZSIsImJhY2siLCJkZXNjcmlwdGlvbiIsImFnZUZyb20iLCJsZW5ndGgiLCJhZ2VUbyIsImNhdGVnb3J5IiwicHJpY2UiLCJ3ZWJzaXRlIiwibWVkaXVtIiwiaW1hZ2UiLCJhdXRoMCIsImlzQXV0aGVudGljYXRlZCIsIl9pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDNUIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUQ0QixNQUVwQkMsRUFGb0IsR0FFYkYsTUFBTSxDQUFDRyxLQUZNLENBRXBCRCxFQUZvQjtBQUFBLE1BR3BCRSxRQUhvQixHQUdQTCxLQUhPLENBR3BCSyxRQUhvQjs7QUFLNUIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0gsRUFBRCxFQUFRO0FBQzNCSSxtRUFBYyxDQUFDSixFQUFELENBQWQsQ0FBbUJLLElBQW5CLENBQXdCLFlBQU07QUFDNUJQLFlBQU0sQ0FBQ1EsSUFBUCxDQUFZLGdCQUFaO0FBQ0QsS0FGRDtBQUdELEdBSkQ7O0FBTUEsU0FDRSxtRUFDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVdKLFFBQVEsQ0FBQ0ssSUFBcEIsb0JBREYsRUFFRTtBQUFNLFFBQUksRUFBQyxPQUFYO0FBQW1CLFdBQU8sWUFBS0wsUUFB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LENBTEYsQ0FERjtBQXdGRCxDQW5HRDs7R0FBTUosVTtVQUNXRyxxRDs7O0tBRFhILFU7O0FBK0dTQSx5RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2FjdGl2aXR5L1tpZF0vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IGdldEFjdGl2aXR5QnlJZCwgZGVsZXRlQWN0aXZpdHkgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IGF1dGgwIGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2F1dGgwJ1xuXG5jb25zdCBEZXRhaWxQYWdlID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeVxuICBjb25zdCB7IGFjdGl2aXR5IH0gPSBwcm9wc1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IChpZCkgPT4ge1xuICAgIGRlbGV0ZUFjdGl2aXR5KGlkKS50aGVuKCgpID0+IHtcbiAgICAgIHJvdXRlci5wdXNoKCcvbXktYWN0aXZpdGllcycpXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e2Ake2FjdGl2aXR5Lm5hbWV9IC0gRGlzY292ZXJEb29gfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0aXRsZVwiIGNvbnRlbnQ9e2Ake2FjdGl2aXR5Lm5hbWV9IC0gRGlzY292ZXJEb28gZnVuIGZpbmRlcmB9IC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW4gdG9wLXNwYWNlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscy1jYXJkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgICAgXG4gICAgICAgICAgPGgxPnthY3Rpdml0eS5uYW1lfTwvaDE+XG5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJhY2stbGlua1wiIGlkPVwiYmFjay1idG5cIiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIuYmFjaygpfT5cbiAgICAgICAgICAgICAgPGltZyBpZD1cImFycm93LWxlZnRcIiBzcmM9XCIvYXJyb3ctbGVmdC5zdmdcIiBhbHQ9XCJHbyBCYWNrXCIgLz4gXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhY2tcIj5CQUNLPC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuXG5cblxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+eyBhY3Rpdml0eS5kZXNjcmlwdGlvbiB9PC9wPlxuXG4gICAgICAgICAgICAgIHthY3Rpdml0eS5hZ2VGcm9tLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgICA8c3Bhbj5cblxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtYXAtaWNvblwiIGFsaWduPVwidG9wXCIgc3JjPVwiL2NoaWxkLnN2Z1wiIGFsdD1cIkNoaWxkIGljb25cIiAvPlxuICAgICAgICAgICAgICAgICAgQWdlcyB7IGFjdGl2aXR5LmFnZUZyb20gfSAtIHsgYWN0aXZpdHkuYWdlVG8gfVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImluZm9cIj5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtYXAtaWNvblwiIGFsaWduPVwidG9wXCIgc3JjPVwiL3RhZ3Muc3ZnXCIgYWx0PVwiVGFncyBpY29uXCIgLz5cbiAgICAgICAgICAgICAgeyBhY3Rpdml0eS5jYXRlZ29yeSB9XG4gICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICB7YWN0aXZpdHkucHJpY2UubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtYXAtaWNvblwiIGFsaWduPVwidG9wXCIgc3JjPVwiL3BpZ2d5LnN2Z1wiIGFsdD1cIlBpZ2d5YmFua1wiIC8+XG4gICAgICAgICAgICAgICAgICB7IGFjdGl2aXR5LnByaWNlIH1cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPVwiaW5mb1wiPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1hcC1pY29uXCIgc3JjPVwiL3NoYXJlLnN2Z1wiIGFsdD1cIlNoYXJlXCIgLz5cbiAgICAgICAgICAgICAgU2hhcmUgd2l0aCBmcmllbmRzXG4gICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibWFwLWljb25cIiBzcmM9XCIvZmF2b3JpdGUuc3ZnXCIgYWx0PVwiQWRkIHRvIGZhdm9yaXRlc1wiIC8+XG4gICAgICAgICAgICAgIEFkZCB0byBmYXZvcml0ZXNcbiAgICAgICAgICAgICAgPC9wPiAqL31cblxuICAgICAgICAgICAgICB7YWN0aXZpdHkud2Vic2l0ZS5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXsnaHR0cDovLycgKyBhY3Rpdml0eS53ZWJzaXRlfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibWFwLWljb25cIiBhbGlnbj1cInRvcFwiIHNyYz1cIi9leWUuc3ZnXCIgYWx0PVwiRXllXCIgLz5cbiAgICAgICAgICAgICAgICAgIHsgYWN0aXZpdHkubWVkaXVtIH1cbiAgICAgICAgICAgICAgICAgIDwvYT48L3A+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWFnZS1zZWN0aW9uXCIgc3JjPXtgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vamFrZXBlZy9pbWFnZS91cGxvYWQvZl9hdXRvL3YxNTkzMDA1NjUxLyR7YWN0aXZpdHkuaW1hZ2V9YH0gYWx0PXthY3Rpdml0eS5uYW1lfSAvPlxuICAgICAgICAgIFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHsvKiB7YWN0aXZpdHkudXNlcklkID09PSBDb29raWVzLmdldCgnc3ViJykgJiYgKi99XG4gICAgICAgICAgeyBhdXRoMC5pc0F1dGhlbnRpY2F0ZWQoKSAmJlxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZGVsZXRlLWJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZShhY3Rpdml0eS5faWQpfSBocmVmPVwiI1wiIHJvbGU9XCJidXR0b25cIj5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FjdGl2aXR5L1tpZF0vZWRpdFwiIGFzPXtgL2FjdGl2aXR5LyR7aWR9L2VkaXRgfT5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZWRpdC1idXR0b25cIiByb2xlPVwiYnV0dG9uXCI+RWRpdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHF1ZXJ5IH0pIHtcbiAgY29uc3QgYWN0aXZpdHkgPSBhd2FpdCBnZXRBY3Rpdml0eUJ5SWQocXVlcnkuaWQpXG4gIGNvbnNvbGUubG9nKFwiU1NSIChJIHRoaW5rISlcIilcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge2FjdGl2aXR5fVxuICB9XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/activity/[id]/index.js\n");

/***/ })

})