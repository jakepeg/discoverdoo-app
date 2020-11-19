webpackHotUpdate("static/development/pages/activity/[id].js",{

/***/ "./pages/activity/[id]/index.js":
/*!**************************************!*\
  !*** ./pages/activity/[id]/index.js ***!
  \**************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions */ \"./actions/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _services_auth0__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auth0 */ \"./services/auth0.js\");\n/* harmony import */ var _components_activityList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/activityList */ \"./components/activityList.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Documents/discoverdoo-app/pages/activity/[id]/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar DetailPage = function DetailPage(props) {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  var id = router.query.id;\n  var activity = props.activity;\n\n  var handleDelete = function handleDelete(id) {\n    Object(_actions__WEBPACK_IMPORTED_MODULE_2__[\"deleteActivity\"])(id).then(function () {\n      router.push('/my-activities');\n    });\n  };\n\n  var filteredActivities = props.activities.filter(function (a) {\n    return a.category.includes('Academic');\n  });\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, \"\".concat(activity.name, \" - DiscoverDoo\")), __jsx(\"meta\", {\n    name: \"title\",\n    content: \"\".concat(activity.name, \" - DiscoverDoo fun finder\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: \"contain top-space\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"details-card\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"card-header\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 11\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 11\n    }\n  }, activity.name), __jsx(\"a\", {\n    className: \"back-link\",\n    id: \"back-btn\",\n    onClick: function onClick() {\n      return router.back();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    id: \"arrow-left\",\n    src: \"/arrow-left.svg\",\n    alt: \"Go Back\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 15\n    }\n  }), __jsx(\"span\", {\n    className: \"back\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 15\n    }\n  }, \"BACK\"))), __jsx(\"div\", {\n    className: \"card-content\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"info-section\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  }, __jsx(\"p\", {\n    className: \"description\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 15\n    }\n  }, activity.description), activity.ageFrom.length > 0 && __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    className: \"info\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 19\n    }\n  }, __jsx(\"img\", {\n    className: \"map-icon\",\n    align: \"top\",\n    src: \"/child.svg\",\n    alt: \"Child icon\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 19\n    }\n  }), \"Ages \", activity.ageFrom, \" - \", activity.ageTo)), __jsx(\"p\", {\n    className: \"info\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 15\n    }\n  }, __jsx(\"img\", {\n    className: \"map-icon\",\n    align: \"top\",\n    src: \"/tags.svg\",\n    alt: \"Tags icon\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 15\n    }\n  }), activity.category), activity.price.length > 0 && __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    className: \"info\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 19\n    }\n  }, __jsx(\"img\", {\n    className: \"map-icon\",\n    align: \"top\",\n    src: \"/piggy.svg\",\n    alt: \"Piggybank\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 19\n    }\n  }), activity.price)), activity.website.length > 0 && __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    className: \"info\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 19\n    }\n  }, __jsx(\"a\", {\n    href: 'http://' + activity.website,\n    target: \"_blank\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 19\n    }\n  }, __jsx(\"img\", {\n    className: \"map-icon\",\n    align: \"top\",\n    src: \"/eye.svg\",\n    alt: \"Eye\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 19\n    }\n  }), activity.medium)))), __jsx(\"img\", {\n    className: \"image-section\",\n    src: \"https://res.cloudinary.com/jakepeg/image/upload/f_auto/v1593005651/\".concat(activity.image),\n    alt: activity.name,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 13\n    }\n  })), _services_auth0__WEBPACK_IMPORTED_MODULE_5__[\"default\"].isAuthenticated() && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"button\", {\n    className: \"delete-button\",\n    onClick: function onClick() {\n      return handleDelete(activity._id);\n    },\n    href: \"#\",\n    role: \"button\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 17\n    }\n  }, \"Delete\"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/activity/[id]/edit\",\n    as: \"/activity/\".concat(id, \"/edit\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 17\n    }\n  }, __jsx(\"button\", {\n    className: \"edit-button\",\n    role: \"button\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 19\n    }\n  }, \"Edit\"))))), __jsx(\"div\", {\n    className: \"contain top-space\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }\n  }, __jsx(_components_activityList__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    activities: filteredActivities,\n    title: \"Similar\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(DetailPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = DetailPage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"DetailPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hY3Rpdml0eS8vaW5kZXguanM/MjBkYyJdLCJuYW1lcyI6WyJEZXRhaWxQYWdlIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiYWN0aXZpdHkiLCJoYW5kbGVEZWxldGUiLCJkZWxldGVBY3Rpdml0eSIsInRoZW4iLCJwdXNoIiwiZmlsdGVyZWRBY3Rpdml0aWVzIiwiYWN0aXZpdGllcyIsImZpbHRlciIsImEiLCJjYXRlZ29yeSIsImluY2x1ZGVzIiwibmFtZSIsImJhY2siLCJkZXNjcmlwdGlvbiIsImFnZUZyb20iLCJsZW5ndGgiLCJhZ2VUbyIsInByaWNlIiwid2Vic2l0ZSIsIm1lZGl1bSIsImltYWdlIiwiYXV0aDAiLCJpc0F1dGhlbnRpY2F0ZWQiLCJfaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQzVCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFENEIsTUFFcEJDLEVBRm9CLEdBRWJGLE1BQU0sQ0FBQ0csS0FGTSxDQUVwQkQsRUFGb0I7QUFBQSxNQUdwQkUsUUFIb0IsR0FHUEwsS0FITyxDQUdwQkssUUFIb0I7O0FBSTVCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNILEVBQUQsRUFBUTtBQUMzQkksbUVBQWMsQ0FBQ0osRUFBRCxDQUFkLENBQW1CSyxJQUFuQixDQUF3QixZQUFNO0FBQzVCUCxZQUFNLENBQUNRLElBQVAsQ0FBWSxnQkFBWjtBQUNELEtBRkQ7QUFHRCxHQUpEOztBQU1BLE1BQU1DLGtCQUFrQixHQUFHVixLQUFLLENBQUNXLFVBQU4sQ0FBaUJDLE1BQWpCLENBQXdCLFVBQUFDLENBQUM7QUFBQSxXQUFFQSxDQUFDLENBQUNDLFFBQUYsQ0FBV0MsUUFBWCxDQUFvQixVQUFwQixDQUFGO0FBQUEsR0FBekIsQ0FBM0I7QUFFQSxTQUNFLG1FQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBV1YsUUFBUSxDQUFDVyxJQUFwQixvQkFERixFQUVFO0FBQU0sUUFBSSxFQUFDLE9BQVg7QUFBbUIsV0FBTyxZQUFLWCxRQUFRLENBQUNXLElBQWQsOEJBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBS0U7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS1gsUUFBUSxDQUFDVyxJQUFkLENBREEsRUFFRTtBQUFHLGFBQVMsRUFBQyxXQUFiO0FBQXlCLE1BQUUsRUFBQyxVQUE1QjtBQUF1QyxXQUFPLEVBQUU7QUFBQSxhQUFNZixNQUFNLENBQUNnQixJQUFQLEVBQU47QUFBQSxLQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxNQUFFLEVBQUMsWUFBUjtBQUFxQixPQUFHLEVBQUMsaUJBQXpCO0FBQTJDLE9BQUcsRUFBQyxTQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFNLGFBQVMsRUFBQyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsQ0FGRixDQURGLEVBUUU7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTZCWixRQUFRLENBQUNhLFdBQXRDLENBREYsRUFFR2IsUUFBUSxDQUFDYyxPQUFULENBQWlCQyxNQUFqQixHQUEwQixDQUExQixJQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQTBCLFNBQUssRUFBQyxLQUFoQztBQUFzQyxPQUFHLEVBQUMsWUFBMUM7QUFBdUQsT0FBRyxFQUFDLFlBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxXQUVPZixRQUFRLENBQUNjLE9BRmhCLFNBRThCZCxRQUFRLENBQUNnQixLQUZ2QyxDQURGLENBSEosRUFVRTtBQUFHLGFBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQTBCLFNBQUssRUFBQyxLQUFoQztBQUFzQyxPQUFHLEVBQUMsV0FBMUM7QUFBc0QsT0FBRyxFQUFDLFdBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxFQUVFaEIsUUFBUSxDQUFDUyxRQUZYLENBVkYsRUFjR1QsUUFBUSxDQUFDaUIsS0FBVCxDQUFlRixNQUFmLEdBQXdCLENBQXhCLElBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBMEIsU0FBSyxFQUFDLEtBQWhDO0FBQXNDLE9BQUcsRUFBQyxZQUExQztBQUF1RCxPQUFHLEVBQUMsV0FBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLEVBRUVmLFFBQVEsQ0FBQ2lCLEtBRlgsQ0FERixDQWZKLEVBZ0NHakIsUUFBUSxDQUFDa0IsT0FBVCxDQUFpQkgsTUFBakIsR0FBMEIsQ0FBMUIsSUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBRyxRQUFJLEVBQUUsWUFBWWYsUUFBUSxDQUFDa0IsT0FBOUI7QUFBdUMsVUFBTSxFQUFDLFFBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQTBCLFNBQUssRUFBQyxLQUFoQztBQUFzQyxPQUFHLEVBQUMsVUFBMUM7QUFBcUQsT0FBRyxFQUFDLEtBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxFQUVFbEIsUUFBUSxDQUFDbUIsTUFGWCxDQURBLENBREYsQ0FqQ0osQ0FERixFQTJDRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQStCLE9BQUcsK0VBQXdFbkIsUUFBUSxDQUFDb0IsS0FBakYsQ0FBbEM7QUFBNEgsT0FBRyxFQUFFcEIsUUFBUSxDQUFDVyxJQUExSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBM0NGLENBUkYsRUFzRElVLHVEQUFLLENBQUNDLGVBQU4sTUFDRSxtRUFDRTtBQUFRLGFBQVMsRUFBQyxlQUFsQjtBQUFrQyxXQUFPLEVBQUU7QUFBQSxhQUFNckIsWUFBWSxDQUFDRCxRQUFRLENBQUN1QixHQUFWLENBQWxCO0FBQUEsS0FBM0M7QUFBNkUsUUFBSSxFQUFDLEdBQWxGO0FBQXNGLFFBQUksRUFBQyxRQUEzRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLHFCQUFYO0FBQWlDLE1BQUUsc0JBQWV6QixFQUFmLFVBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLGFBQVMsRUFBQyxhQUFsQjtBQUFnQyxRQUFJLEVBQUMsUUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLENBRkYsQ0F2RE4sQ0FERixDQUxGLEVBc0VFO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdFQUFEO0FBQ0UsY0FBVSxFQUFFTyxrQkFEZDtBQUVFLFNBQUssRUFBQyxTQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQXRFRixDQURGO0FBK0VELENBM0ZEOztHQUFNWCxVO1VBQ1dHLHFEOzs7S0FEWEgsVTs7QUFxR1NBLHlFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYWN0aXZpdHkvW2lkXS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgZ2V0QWN0aXZpdHlCeUlkLCBkZWxldGVBY3Rpdml0eSwgZ2V0QWN0aXZpdGllcyB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgYXV0aDAgZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYXV0aDAnXG5pbXBvcnQgQWN0aXZpdHlMaXN0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvYWN0aXZpdHlMaXN0J1xuXG5jb25zdCBEZXRhaWxQYWdlID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeVxuICBjb25zdCB7IGFjdGl2aXR5IH0gPSBwcm9wc1xuICBjb25zdCBoYW5kbGVEZWxldGUgPSAoaWQpID0+IHtcbiAgICBkZWxldGVBY3Rpdml0eShpZCkudGhlbigoKSA9PiB7XG4gICAgICByb3V0ZXIucHVzaCgnL215LWFjdGl2aXRpZXMnKVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBmaWx0ZXJlZEFjdGl2aXRpZXMgPSBwcm9wcy5hY3Rpdml0aWVzLmZpbHRlcihhPT5hLmNhdGVnb3J5LmluY2x1ZGVzKCdBY2FkZW1pYycpKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e2Ake2FjdGl2aXR5Lm5hbWV9IC0gRGlzY292ZXJEb29gfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0aXRsZVwiIGNvbnRlbnQ9e2Ake2FjdGl2aXR5Lm5hbWV9IC0gRGlzY292ZXJEb28gZnVuIGZpbmRlcmB9IC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW4gdG9wLXNwYWNlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscy1jYXJkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgIDxoMT57YWN0aXZpdHkubmFtZX08L2gxPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYmFjay1saW5rXCIgaWQ9XCJiYWNrLWJ0blwiIG9uQ2xpY2s9eygpID0+IHJvdXRlci5iYWNrKCl9PlxuICAgICAgICAgICAgICA8aW1nIGlkPVwiYXJyb3ctbGVmdFwiIHNyYz1cIi9hcnJvdy1sZWZ0LnN2Z1wiIGFsdD1cIkdvIEJhY2tcIiAvPiBcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFja1wiPkJBQ0s8L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+eyBhY3Rpdml0eS5kZXNjcmlwdGlvbiB9PC9wPlxuICAgICAgICAgICAgICB7YWN0aXZpdHkuYWdlRnJvbS5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1hcC1pY29uXCIgYWxpZ249XCJ0b3BcIiBzcmM9XCIvY2hpbGQuc3ZnXCIgYWx0PVwiQ2hpbGQgaWNvblwiIC8+XG4gICAgICAgICAgICAgICAgICBBZ2VzIHsgYWN0aXZpdHkuYWdlRnJvbSB9IC0geyBhY3Rpdml0eS5hZ2VUbyB9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImluZm9cIj5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtYXAtaWNvblwiIGFsaWduPVwidG9wXCIgc3JjPVwiL3RhZ3Muc3ZnXCIgYWx0PVwiVGFncyBpY29uXCIgLz5cbiAgICAgICAgICAgICAgeyBhY3Rpdml0eS5jYXRlZ29yeSB9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAge2FjdGl2aXR5LnByaWNlLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImluZm9cIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibWFwLWljb25cIiBhbGlnbj1cInRvcFwiIHNyYz1cIi9waWdneS5zdmdcIiBhbHQ9XCJQaWdneWJhbmtcIiAvPlxuICAgICAgICAgICAgICAgICAgeyBhY3Rpdml0eS5wcmljZSB9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibWFwLWljb25cIiBzcmM9XCIvc2hhcmUuc3ZnXCIgYWx0PVwiU2hhcmVcIiAvPlxuICAgICAgICAgICAgICBTaGFyZSB3aXRoIGZyaWVuZHNcbiAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImluZm9cIj5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtYXAtaWNvblwiIHNyYz1cIi9mYXZvcml0ZS5zdmdcIiBhbHQ9XCJBZGQgdG8gZmF2b3JpdGVzXCIgLz5cbiAgICAgICAgICAgICAgQWRkIHRvIGZhdm9yaXRlc1xuICAgICAgICAgICAgICA8L3A+ICovfVxuXG4gICAgICAgICAgICAgIHthY3Rpdml0eS53ZWJzaXRlLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImluZm9cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eydodHRwOi8vJyArIGFjdGl2aXR5LndlYnNpdGV9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtYXAtaWNvblwiIGFsaWduPVwidG9wXCIgc3JjPVwiL2V5ZS5zdmdcIiBhbHQ9XCJFeWVcIiAvPlxuICAgICAgICAgICAgICAgICAgeyBhY3Rpdml0eS5tZWRpdW0gfVxuICAgICAgICAgICAgICAgICAgPC9hPjwvcD5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWFnZS1zZWN0aW9uXCIgc3JjPXtgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vamFrZXBlZy9pbWFnZS91cGxvYWQvZl9hdXRvL3YxNTkzMDA1NjUxLyR7YWN0aXZpdHkuaW1hZ2V9YH0gYWx0PXthY3Rpdml0eS5uYW1lfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHsvKiB7YWN0aXZpdHkudXNlcklkID09PSBDb29raWVzLmdldCgnc3ViJykgJiYgKi99XG4gICAgICAgICAgeyBhdXRoMC5pc0F1dGhlbnRpY2F0ZWQoKSAmJlxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZGVsZXRlLWJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZShhY3Rpdml0eS5faWQpfSBocmVmPVwiI1wiIHJvbGU9XCJidXR0b25cIj5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FjdGl2aXR5L1tpZF0vZWRpdFwiIGFzPXtgL2FjdGl2aXR5LyR7aWR9L2VkaXRgfT5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZWRpdC1idXR0b25cIiByb2xlPVwiYnV0dG9uXCI+RWRpdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW4gdG9wLXNwYWNlXCI+XG4gICAgICAgIDxBY3Rpdml0eUxpc3QgXG4gICAgICAgICAgYWN0aXZpdGllcz17ZmlsdGVyZWRBY3Rpdml0aWVzfSBcbiAgICAgICAgICB0aXRsZT1cIlNpbWlsYXJcIiAgXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcXVlcnkgfSkge1xuICAvLyBjb25zdCBhY3Rpdml0eSA9IGF3YWl0IGdldEFjdGl2aXR5QnlJZChxdWVyeS5pZClcbiAgbGV0IFthY3Rpdml0eSwgYWN0aXZpdGllc10gPSBhd2FpdCBQcm9taXNlLmFsbChbYXdhaXQgZ2V0QWN0aXZpdHlCeUlkKHF1ZXJ5LmlkKSwgZ2V0QWN0aXZpdGllcygpXSk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHthY3Rpdml0eSwgYWN0aXZpdGllc31cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/activity/[id]/index.js\n");

/***/ })

})