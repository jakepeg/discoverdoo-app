webpackHotUpdate("static/development/pages/activity/[id].js",{

/***/ "./pages/activity/[id]/index.js":
/*!**************************************!*\
  !*** ./pages/activity/[id]/index.js ***!
  \**************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions */ \"./actions/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _services_auth0__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auth0 */ \"./services/auth0.js\");\n/* harmony import */ var _components_activityList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/activityList */ \"./components/activityList.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Documents/discoverdoo-app/pages/activity/[id]/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar DetailPage = function DetailPage(props) {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  var id = router.query.id;\n  var activity = props.activity;\n\n  var handleDelete = function handleDelete(id) {\n    Object(_actions__WEBPACK_IMPORTED_MODULE_2__[\"deleteActivity\"])(id).then(function () {\n      router.push('/my-activities');\n    });\n  };\n\n  var filteredActivities = props.activities.filter(function (a) {\n    return a.category.includes(activity.category);\n  });\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, \"\".concat(activity.name, \" - DiscoverDoo\")), __jsx(\"meta\", {\n    name: \"title\",\n    content: \"\".concat(activity.name, \" - DiscoverDoo fun finder\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: \"contain top-space\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"details-card\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"card-header\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 11\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 11\n    }\n  }, activity.name), __jsx(\"a\", {\n    className: \"back-link\",\n    id: \"back-btn\",\n    onClick: function onClick() {\n      return router.back();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    id: \"arrow-left\",\n    src: \"/arrow-left.svg\",\n    alt: \"Go Back\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 15\n    }\n  }), __jsx(\"span\", {\n    className: \"back\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 15\n    }\n  }, \"BACK\"))), __jsx(\"div\", {\n    className: \"card-content\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"info-section\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  }, __jsx(\"p\", {\n    className: \"description\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 15\n    }\n  }, activity.description), activity.ageFrom.length > 0 && __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    className: \"info\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 19\n    }\n  }, __jsx(\"img\", {\n    className: \"map-icon\",\n    align: \"top\",\n    src: \"/child.svg\",\n    alt: \"Child icon\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 19\n    }\n  }), \"Ages \", activity.ageFrom, \" - \", activity.ageTo)), __jsx(\"p\", {\n    className: \"info\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 15\n    }\n  }, __jsx(\"img\", {\n    className: \"map-icon\",\n    align: \"top\",\n    src: \"/tags.svg\",\n    alt: \"Tags icon\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 15\n    }\n  }), activity.category), activity.price.length > 0 && __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    className: \"info\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 19\n    }\n  }, __jsx(\"img\", {\n    className: \"map-icon\",\n    align: \"top\",\n    src: \"/piggy.svg\",\n    alt: \"Piggybank\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 19\n    }\n  }), activity.price)), activity.website.length > 0 && __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    className: \"info\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 19\n    }\n  }, __jsx(\"a\", {\n    href: 'http://' + activity.website,\n    target: \"_blank\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 19\n    }\n  }, __jsx(\"img\", {\n    className: \"map-icon\",\n    align: \"top\",\n    src: \"/eye.svg\",\n    alt: \"Eye\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 19\n    }\n  }), activity.medium)))), __jsx(\"iframe\", {\n    width: \"560\",\n    height: \"315\",\n    src: \"https://www.youtube.com/embed/rd1kZXvrQMk\",\n    frameborder: \"0\",\n    allow: \"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\",\n    allowfullscreen: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 13\n    }\n  })), _services_auth0__WEBPACK_IMPORTED_MODULE_5__[\"default\"].isAuthenticated() && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"button\", {\n    className: \"delete-button\",\n    onClick: function onClick() {\n      return handleDelete(activity._id);\n    },\n    href: \"#\",\n    role: \"button\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 17\n    }\n  }, \"Delete\"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/activity/[id]/edit\",\n    as: \"/activity/\".concat(id, \"/edit\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 17\n    }\n  }, __jsx(\"button\", {\n    className: \"edit-button\",\n    role: \"button\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 19\n    }\n  }, \"Edit\"))))), !activity.promoted && __jsx(\"div\", {\n    className: \"contain top-space\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 9\n    }\n  }, __jsx(_components_activityList__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    activities: filteredActivities,\n    title: \"Similar\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 11\n    }\n  })));\n};\n\n_s(DetailPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = DetailPage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"DetailPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hY3Rpdml0eS8vaW5kZXguanM/MjBkYyJdLCJuYW1lcyI6WyJEZXRhaWxQYWdlIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiYWN0aXZpdHkiLCJoYW5kbGVEZWxldGUiLCJkZWxldGVBY3Rpdml0eSIsInRoZW4iLCJwdXNoIiwiZmlsdGVyZWRBY3Rpdml0aWVzIiwiYWN0aXZpdGllcyIsImZpbHRlciIsImEiLCJjYXRlZ29yeSIsImluY2x1ZGVzIiwibmFtZSIsImJhY2siLCJkZXNjcmlwdGlvbiIsImFnZUZyb20iLCJsZW5ndGgiLCJhZ2VUbyIsInByaWNlIiwid2Vic2l0ZSIsIm1lZGl1bSIsImF1dGgwIiwiaXNBdXRoZW50aWNhdGVkIiwiX2lkIiwicHJvbW90ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQzVCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFENEIsTUFFcEJDLEVBRm9CLEdBRWJGLE1BQU0sQ0FBQ0csS0FGTSxDQUVwQkQsRUFGb0I7QUFBQSxNQUdwQkUsUUFIb0IsR0FHUEwsS0FITyxDQUdwQkssUUFIb0I7O0FBSTVCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNILEVBQUQsRUFBUTtBQUMzQkksbUVBQWMsQ0FBQ0osRUFBRCxDQUFkLENBQW1CSyxJQUFuQixDQUF3QixZQUFNO0FBQzVCUCxZQUFNLENBQUNRLElBQVAsQ0FBWSxnQkFBWjtBQUNELEtBRkQ7QUFHRCxHQUpEOztBQU1BLE1BQU1DLGtCQUFrQixHQUFHVixLQUFLLENBQUNXLFVBQU4sQ0FBaUJDLE1BQWpCLENBQXdCLFVBQUFDLENBQUM7QUFBQSxXQUFFQSxDQUFDLENBQUNDLFFBQUYsQ0FBV0MsUUFBWCxD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UUFBSSxFQUFDLFFBQTNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUVFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMscUJBQVg7QUFBaUMsTUFBRSxzQkFBZXhCLEVBQWYsVUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsYUFBUyxFQUFDLGFBQWxCO0FBQWdDLFFBQUksRUFBQyxRQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0FGRixDQTNETixDQURGLENBTEYsRUEwRUksQ0FBQ0UsUUFBUSxDQUFDdUIsUUFBVixJQUNBO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdFQUFEO0FBQ0UsY0FBVSxFQUFFbEIsa0JBRGQ7QUFFRSxTQUFLLEVBQUMsU0FGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0EzRUosQ0FERjtBQXFGRCxDQWpHRDs7R0FBTVgsVTtVQUNXRyxxRDs7O0tBRFhILFU7O0FBMEdTQSx5RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2FjdGl2aXR5L1tpZF0vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IGdldEFjdGl2aXR5QnlJZCwgZGVsZXRlQWN0aXZpdHksIGdldEFjdGl2aXRpZXMgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IGF1dGgwIGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2F1dGgwJ1xuaW1wb3J0IEFjdGl2aXR5TGlzdCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2FjdGl2aXR5TGlzdCdcblxuY29uc3QgRGV0YWlsUGFnZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnlcbiAgY29uc3QgeyBhY3Rpdml0eSB9ID0gcHJvcHNcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKGlkKSA9PiB7XG4gICAgZGVsZXRlQWN0aXZpdHkoaWQpLnRoZW4oKCkgPT4ge1xuICAgICAgcm91dGVyLnB1c2goJy9teS1hY3Rpdml0aWVzJylcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgZmlsdGVyZWRBY3Rpdml0aWVzID0gcHJvcHMuYWN0aXZpdGllcy5maWx0ZXIoYT0+YS5jYXRlZ29yeS5pbmNsdWRlcyhhY3Rpdml0eS5jYXRlZ29yeSkpXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57YCR7YWN0aXZpdHkubmFtZX0gLSBEaXNjb3ZlckRvb2B9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cInRpdGxlXCIgY29udGVudD17YCR7YWN0aXZpdHkubmFtZX0gLSBEaXNjb3ZlckRvbyBmdW4gZmluZGVyYH0gLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbiB0b3Atc3BhY2VcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzLWNhcmRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgICAgPGgxPnthY3Rpdml0eS5uYW1lfTwvaDE+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJiYWNrLWxpbmtcIiBpZD1cImJhY2stYnRuXCIgb25DbGljaz17KCkgPT4gcm91dGVyLmJhY2soKX0+XG4gICAgICAgICAgICAgIDxpbWcgaWQ9XCJhcnJvdy1sZWZ0XCIgc3JjPVwiL2Fycm93LWxlZnQuc3ZnXCIgYWx0PVwiR28gQmFja1wiIC8+IFxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWNrXCI+QkFDSzwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57IGFjdGl2aXR5LmRlc2NyaXB0aW9uIH08L3A+XG4gICAgICAgICAgICAgIHthY3Rpdml0eS5hZ2VGcm9tLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImluZm9cIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibWFwLWljb25cIiBhbGlnbj1cInRvcFwiIHNyYz1cIi9jaGlsZC5zdmdcIiBhbHQ9XCJDaGlsZCBpY29uXCIgLz5cbiAgICAgICAgICAgICAgICAgIEFnZXMgeyBhY3Rpdml0eS5hZ2VGcm9tIH0gLSB7IGFjdGl2aXR5LmFnZVRvIH1cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5mb1wiPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1hcC1pY29uXCIgYWxpZ249XCJ0b3BcIiBzcmM9XCIvdGFncy5zdmdcIiBhbHQ9XCJUYWdzIGljb25cIiAvPlxuICAgICAgICAgICAgICB7IGFjdGl2aXR5LmNhdGVnb3J5IH1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICB7YWN0aXZpdHkucHJpY2UubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtYXAtaWNvblwiIGFsaWduPVwidG9wXCIgc3JjPVwiL3BpZ2d5LnN2Z1wiIGFsdD1cIlBpZ2d5YmFua1wiIC8+XG4gICAgICAgICAgICAgICAgICB7IGFjdGl2aXR5LnByaWNlIH1cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgey8qIDxwIGNsYXNzTmFtZT1cImluZm9cIj5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtYXAtaWNvblwiIHNyYz1cIi9zaGFyZS5zdmdcIiBhbHQ9XCJTaGFyZVwiIC8+XG4gICAgICAgICAgICAgIFNoYXJlIHdpdGggZnJpZW5kc1xuICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5mb1wiPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1hcC1pY29uXCIgc3JjPVwiL2Zhdm9yaXRlLnN2Z1wiIGFsdD1cIkFkZCB0byBmYXZvcml0ZXNcIiAvPlxuICAgICAgICAgICAgICBBZGQgdG8gZmF2b3JpdGVzXG4gICAgICAgICAgICAgIDwvcD4gKi99XG5cbiAgICAgICAgICAgICAge2FjdGl2aXR5LndlYnNpdGUubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17J2h0dHA6Ly8nICsgYWN0aXZpdHkud2Vic2l0ZX0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1hcC1pY29uXCIgYWxpZ249XCJ0b3BcIiBzcmM9XCIvZXllLnN2Z1wiIGFsdD1cIkV5ZVwiIC8+XG4gICAgICAgICAgICAgICAgICB7IGFjdGl2aXR5Lm1lZGl1bSB9XG4gICAgICAgICAgICAgICAgICA8L2E+PC9wPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogPGltZyBjbGFzc05hbWU9XCJpbWFnZS1zZWN0aW9uXCIgc3JjPXtgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vamFrZXBlZy9pbWFnZS91cGxvYWQvZl9hdXRvL3YxNTkzMDA1NjUxLyR7YWN0aXZpdHkuaW1hZ2V9YH0gYWx0PXthY3Rpdml0eS5uYW1lfSAvPiAqL31cblxuXG4gICAgICAgICAgICA8aWZyYW1lIHdpZHRoPVwiNTYwXCIgaGVpZ2h0PVwiMzE1XCIgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvcmQxa1pYdnJRTWtcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+XG5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHsgYXV0aDAuaXNBdXRoZW50aWNhdGVkKCkgJiZcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRlbGV0ZS1idXR0b25cIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGUoYWN0aXZpdHkuX2lkKX0gaHJlZj1cIiNcIiByb2xlPVwiYnV0dG9uXCI+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hY3Rpdml0eS9baWRdL2VkaXRcIiBhcz17YC9hY3Rpdml0eS8ke2lkfS9lZGl0YH0+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImVkaXQtYnV0dG9uXCIgcm9sZT1cImJ1dHRvblwiPkVkaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgeyAhYWN0aXZpdHkucHJvbW90ZWQgJiZcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluIHRvcC1zcGFjZVwiPlxuICAgICAgICAgIDxBY3Rpdml0eUxpc3QgXG4gICAgICAgICAgICBhY3Rpdml0aWVzPXtmaWx0ZXJlZEFjdGl2aXRpZXN9IFxuICAgICAgICAgICAgdGl0bGU9XCJTaW1pbGFyXCIgIFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBxdWVyeSB9KSB7XG4gIGxldCBbYWN0aXZpdHksIGFjdGl2aXRpZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW2F3YWl0IGdldEFjdGl2aXR5QnlJZChxdWVyeS5pZCksIGdldEFjdGl2aXRpZXMoKV0pO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7YWN0aXZpdHksIGFjdGl2aXRpZXN9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/activity/[id]/index.js\n");

/***/ })

})