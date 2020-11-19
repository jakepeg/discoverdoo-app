webpackHotUpdate("static/development/pages/activity/[id].js",{

/***/ "./pages/activity/[id]/index.js":
/*!**************************************!*\
  !*** ./pages/activity/[id]/index.js ***!
  \**************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions */ \"./actions/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _services_auth0__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auth0 */ \"./services/auth0.js\");\n/* harmony import */ var _components_activityList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/activityList */ \"./components/activityList.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Documents/discoverdoo-app/pages/activity/[id]/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar DetailPage = function DetailPage(props) {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  var id = router.query.id;\n  var activity = props.activity;\n\n  var handleDelete = function handleDelete(id) {\n    Object(_actions__WEBPACK_IMPORTED_MODULE_2__[\"deleteActivity\"])(id).then(function () {\n      router.push('/my-activities');\n    });\n  };\n\n  var filteredActivities = props.activities.filter(function (a) {\n    return a.category.includes('Academic');\n  });\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, \"\".concat(activity.name, \" - DiscoverDoo\")), __jsx(\"meta\", {\n    name: \"title\",\n    content: \"\".concat(activity.name, \" - DiscoverDoo fun finder\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: \"contain top-space\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"details-card\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"card-header\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 11\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 11\n    }\n  }, activity.name), __jsx(\"a\", {\n    className: \"back-link\",\n    id: \"back-btn\",\n    onClick: function onClick() {\n      return router.back();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    id: \"arrow-left\",\n    src: \"/arrow-left.svg\",\n    alt: \"Go Back\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 15\n    }\n  }), __jsx(\"span\", {\n    className: \"back\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 15\n    }\n  }, \"BACK\"))), __jsx(\"div\", {\n    className: \"card-content\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"info-section\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  }, __jsx(\"p\", {\n    className: \"description\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 15\n    }\n  }, activity.description), activity.ageFrom.length > 0 && __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    className: \"info\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 19\n    }\n  }, __jsx(\"img\", {\n    className: \"map-icon\",\n    align: \"top\",\n    src: \"/child.svg\",\n    alt: \"Child icon\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 19\n    }\n  }), \"Ages \", activity.ageFrom, \" - \", activity.ageTo)), __jsx(\"p\", {\n    className: \"info\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 15\n    }\n  }, __jsx(\"img\", {\n    className: \"map-icon\",\n    align: \"top\",\n    src: \"/tags.svg\",\n    alt: \"Tags icon\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 15\n    }\n  }), activity.category), activity.price.length > 0 && __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    className: \"info\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 19\n    }\n  }, __jsx(\"img\", {\n    className: \"map-icon\",\n    align: \"top\",\n    src: \"/piggy.svg\",\n    alt: \"Piggybank\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 19\n    }\n  }), activity.price)), activity.website.length > 0 && __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    className: \"info\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 19\n    }\n  }, __jsx(\"a\", {\n    href: 'http://' + activity.website,\n    target: \"_blank\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 19\n    }\n  }, __jsx(\"img\", {\n    className: \"map-icon\",\n    align: \"top\",\n    src: \"/eye.svg\",\n    alt: \"Eye\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 19\n    }\n  }), activity.medium)))), __jsx(\"img\", {\n    className: \"image-section\",\n    src: \"https://res.cloudinary.com/jakepeg/image/upload/f_auto/v1593005651/\".concat(activity.image),\n    alt: activity.name,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 13\n    }\n  })), _services_auth0__WEBPACK_IMPORTED_MODULE_5__[\"default\"].isAuthenticated() && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"button\", {\n    className: \"delete-button\",\n    onClick: function onClick() {\n      return handleDelete(activity._id);\n    },\n    href: \"#\",\n    role: \"button\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 17\n    }\n  }, \"Delete\"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/activity/[id]/edit\",\n    as: \"/activity/\".concat(id, \"/edit\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 17\n    }\n  }, __jsx(\"button\", {\n    className: \"edit-button\",\n    role: \"button\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 19\n    }\n  }, \"Edit\"))), !activity.promoted && __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 15\n    }\n  }, \"Promoted\"))), __jsx(\"div\", {\n    className: \"contain top-space\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 7\n    }\n  }, __jsx(_components_activityList__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    activities: filteredActivities,\n    title: \"Similar\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(DetailPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = DetailPage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"DetailPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hY3Rpdml0eS8vaW5kZXguanM/MjBkYyJdLCJuYW1lcyI6WyJEZXRhaWxQYWdlIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiYWN0aXZpdHkiLCJoYW5kbGVEZWxldGUiLCJkZWxldGVBY3Rpdml0eSIsInRoZW4iLCJwdXNoIiwiZmlsdGVyZWRBY3Rpdml0aWVzIiwiYWN0aXZpdGllcyIsImZpbHRlciIsImEiLCJjYXRlZ29yeSIsImluY2x1ZGVzIiwibmFtZSIsImJhY2siLCJkZXNjcmlwdGlvbiIsImFnZUZyb20iLCJsZW5ndGgiLCJhZ2VUbyIsInByaWNlIiwid2Vic2l0ZSIsIm1lZGl1bSIsImltYWdlIiwiYXV0aDAiLCJpc0F1dGhlbnRpY2F0ZWQiLCJfaWQiLCJwcm9tb3RlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDNUIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUQ0QixNQUVwQkMsRUFGb0IsR0FFYkYsTUFBTSxDQUFDRyxLQUZNLENBRXBCRCxFQUZvQjtBQUFBLE1BR3BCRSxRQUhvQixHQUdQTCxLQUhPLENBR3BCSyxRQUhvQjs7QUFJNUIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0gsRUFBRCxFQUFRO0FBQzNCSSxtRUFBYyxDQUFDSixFQUFELENBQWQsQ0FBbUJLLElBQW5CLENBQXdCLFlBQU07QUFDNUJQLFlBQU0sQ0FBQ1EsSUFBUCxDQUFZLGdCQUFaO0FBQ0QsS0FGRDtBQUdELEdBSkQ7O0FBTUEsTUFBTUMsa0JBQWtCLEdBQUdWLEtBQUssQ0FBQ1csVUFBTixDQUFpQkMsTUFBakIsQ0FBd0IsVUFBQUMsQ0FBQztBQUFBLFdBQUVBLENBQUMsQ0FBQ0MsUUFBRixDQUFX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QUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUVFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMscUJBQVg7QUFBaUMsTUFBRSxzQkFBZXpCLEVBQWYsVUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsYUFBUyxFQUFDLGFBQWxCO0FBQWdDLFFBQUksRUFBQyxRQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0FGRixDQXRETixFQThETSxDQUFDRSxRQUFRLENBQUN3QixRQUFWLElBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkEvRE4sQ0FERixDQUxGLEVBNEVFO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdFQUFEO0FBQ0UsY0FBVSxFQUFFbkIsa0JBRGQ7QUFFRSxTQUFLLEVBQUMsU0FGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0E1RUYsQ0FERjtBQXFGRCxDQWpHRDs7R0FBTVgsVTtVQUNXRyxxRDs7O0tBRFhILFU7O0FBMEdTQSx5RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2FjdGl2aXR5L1tpZF0vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IGdldEFjdGl2aXR5QnlJZCwgZGVsZXRlQWN0aXZpdHksIGdldEFjdGl2aXRpZXMgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IGF1dGgwIGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2F1dGgwJ1xuaW1wb3J0IEFjdGl2aXR5TGlzdCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2FjdGl2aXR5TGlzdCdcblxuY29uc3QgRGV0YWlsUGFnZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnlcbiAgY29uc3QgeyBhY3Rpdml0eSB9ID0gcHJvcHNcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKGlkKSA9PiB7XG4gICAgZGVsZXRlQWN0aXZpdHkoaWQpLnRoZW4oKCkgPT4ge1xuICAgICAgcm91dGVyLnB1c2goJy9teS1hY3Rpdml0aWVzJylcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgZmlsdGVyZWRBY3Rpdml0aWVzID0gcHJvcHMuYWN0aXZpdGllcy5maWx0ZXIoYT0+YS5jYXRlZ29yeS5pbmNsdWRlcygnQWNhZGVtaWMnKSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntgJHthY3Rpdml0eS5uYW1lfSAtIERpc2NvdmVyRG9vYH08L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwidGl0bGVcIiBjb250ZW50PXtgJHthY3Rpdml0eS5uYW1lfSAtIERpc2NvdmVyRG9vIGZ1biBmaW5kZXJgfSAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluIHRvcC1zcGFjZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMtY2FyZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICA8aDE+e2FjdGl2aXR5Lm5hbWV9PC9oMT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJhY2stbGlua1wiIGlkPVwiYmFjay1idG5cIiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIuYmFjaygpfT5cbiAgICAgICAgICAgICAgPGltZyBpZD1cImFycm93LWxlZnRcIiBzcmM9XCIvYXJyb3ctbGVmdC5zdmdcIiBhbHQ9XCJHbyBCYWNrXCIgLz4gXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhY2tcIj5CQUNLPC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8tc2VjdGlvblwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPnsgYWN0aXZpdHkuZGVzY3JpcHRpb24gfTwvcD5cbiAgICAgICAgICAgICAge2FjdGl2aXR5LmFnZUZyb20ubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtYXAtaWNvblwiIGFsaWduPVwidG9wXCIgc3JjPVwiL2NoaWxkLnN2Z1wiIGFsdD1cIkNoaWxkIGljb25cIiAvPlxuICAgICAgICAgICAgICAgICAgQWdlcyB7IGFjdGl2aXR5LmFnZUZyb20gfSAtIHsgYWN0aXZpdHkuYWdlVG8gfVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibWFwLWljb25cIiBhbGlnbj1cInRvcFwiIHNyYz1cIi90YWdzLnN2Z1wiIGFsdD1cIlRhZ3MgaWNvblwiIC8+XG4gICAgICAgICAgICAgIHsgYWN0aXZpdHkuY2F0ZWdvcnkgfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIHthY3Rpdml0eS5wcmljZS5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1hcC1pY29uXCIgYWxpZ249XCJ0b3BcIiBzcmM9XCIvcGlnZ3kuc3ZnXCIgYWx0PVwiUGlnZ3liYW5rXCIgLz5cbiAgICAgICAgICAgICAgICAgIHsgYWN0aXZpdHkucHJpY2UgfVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPVwiaW5mb1wiPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1hcC1pY29uXCIgc3JjPVwiL3NoYXJlLnN2Z1wiIGFsdD1cIlNoYXJlXCIgLz5cbiAgICAgICAgICAgICAgU2hhcmUgd2l0aCBmcmllbmRzXG4gICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibWFwLWljb25cIiBzcmM9XCIvZmF2b3JpdGUuc3ZnXCIgYWx0PVwiQWRkIHRvIGZhdm9yaXRlc1wiIC8+XG4gICAgICAgICAgICAgIEFkZCB0byBmYXZvcml0ZXNcbiAgICAgICAgICAgICAgPC9wPiAqL31cblxuICAgICAgICAgICAgICB7YWN0aXZpdHkud2Vic2l0ZS5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXsnaHR0cDovLycgKyBhY3Rpdml0eS53ZWJzaXRlfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibWFwLWljb25cIiBhbGlnbj1cInRvcFwiIHNyYz1cIi9leWUuc3ZnXCIgYWx0PVwiRXllXCIgLz5cbiAgICAgICAgICAgICAgICAgIHsgYWN0aXZpdHkubWVkaXVtIH1cbiAgICAgICAgICAgICAgICAgIDwvYT48L3A+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1hZ2Utc2VjdGlvblwiIHNyYz17YGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2pha2VwZWcvaW1hZ2UvdXBsb2FkL2ZfYXV0by92MTU5MzAwNTY1MS8ke2FjdGl2aXR5LmltYWdlfWB9IGFsdD17YWN0aXZpdHkubmFtZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7IGF1dGgwLmlzQXV0aGVudGljYXRlZCgpICYmXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkZWxldGUtYnV0dG9uXCIgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlKGFjdGl2aXR5Ll9pZCl9IGhyZWY9XCIjXCIgcm9sZT1cImJ1dHRvblwiPkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWN0aXZpdHkvW2lkXS9lZGl0XCIgYXM9e2AvYWN0aXZpdHkvJHtpZH0vZWRpdGB9PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJlZGl0LWJ1dHRvblwiIHJvbGU9XCJidXR0b25cIj5FZGl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgeyAhYWN0aXZpdHkucHJvbW90ZWQgJiZcbiAgICAgICAgICAgICAgPGgxPlByb21vdGVkPC9oMT5cbiAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbiB0b3Atc3BhY2VcIj5cbiAgICAgICAgPEFjdGl2aXR5TGlzdCBcbiAgICAgICAgICBhY3Rpdml0aWVzPXtmaWx0ZXJlZEFjdGl2aXRpZXN9IFxuICAgICAgICAgIHRpdGxlPVwiU2ltaWxhclwiICBcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBxdWVyeSB9KSB7XG4gIGxldCBbYWN0aXZpdHksIGFjdGl2aXRpZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW2F3YWl0IGdldEFjdGl2aXR5QnlJZChxdWVyeS5pZCksIGdldEFjdGl2aXRpZXMoKV0pO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7YWN0aXZpdHksIGFjdGl2aXRpZXN9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/activity/[id]/index.js\n");

/***/ })

})