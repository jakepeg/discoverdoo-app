webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/activityList.js":
/*!************************************!*\
  !*** ./components/activityList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-lazyload */ \"./node_modules/react-lazyload/lib/index.js\");\n/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Documents/discoverdoo-app/components/activityList.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nvar ActivityList = function ActivityList(props) {\n  var activities = props.activities;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"h2\", {\n    className: \"jsx-4070224422\" + \" \" + \"card-grid-title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }, props.title, \" activities\"), __jsx(\"div\", {\n    id: \"grid\",\n    className: \"jsx-4070224422\" + \" \" + \"card-grid\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, activities.map(function (activity) {\n    return __jsx(\"div\", {\n      key: activity.id,\n      className: \"jsx-4070224422\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }\n    }, __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      height: 400,\n      throttle: 500,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 11\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      href: \"/activity/[id]\",\n      as: \"/activity/\".concat(activity.id),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 13\n      }\n    }, __jsx(\"a\", {\n      className: \"jsx-4070224422\" + \" \" + \"nounderline\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 15\n      }\n    }, __jsx(\"div\", {\n      className: \"jsx-4070224422\" + \" \" + \"card\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 17\n      }\n    }, __jsx(\"img\", {\n      src: \"https://res.cloudinary.com/jakepeg/image/upload/q_auto,f_auto,c_fill,h_250,w_350/v1593005651/\".concat(activity.image),\n      alt: activity.name,\n      className: \"jsx-4070224422\" + \" \" + \"card-image\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 19\n      }\n    }), __jsx(\"div\", {\n      className: \"jsx-4070224422\" + \" \" + \"card-content\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 19\n      }\n    }, __jsx(\"h2\", {\n      className: \"jsx-4070224422\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 21\n      }\n    }, activity.name), __jsx(\"div\", {\n      className: \"jsx-4070224422\" + \" \" + \"card-footer\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 21\n      }\n    }, __jsx(\"div\", {\n      className: \"jsx-4070224422\" + \" \" + \"age-range\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 23\n      }\n    }, 'age ' + activity.ageFrom + ' - ' + activity.ageTo), __jsx(\"div\", {\n      className: \"jsx-4070224422\" + \" \" + \"location\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 23\n      }\n    }, activity.category, \" - \", __jsx(\"span\", {\n      className: \"jsx-4070224422\" + \" \" + (activity.medium || \"\"),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 71\n      }\n    }, activity.medium)))))))));\n  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"4070224422\",\n    __self: _this\n  }, \".nounderline.jsx-4070224422{-webkit-text-decoration:none;text-decoration:none;}.card-grid-title.jsx-4070224422{font-size:2rem;font-family:'Paytone One',sans-serif;font-weight:600;line-height:1;-webkit-letter-spacing:0em;-moz-letter-spacing:0em;-ms-letter-spacing:0em;letter-spacing:0em;color:#ffffff;}.card-grid.jsx-4070224422{display:grid;grid-template-columns:repeat(3,350px);-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;grid-row-gap:40px;margin-top:30px;margin-bottom:30px;}.card.jsx-4070224422{width:350px;height:340px;background:#fff;box-shadow:0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12);-webkit-transition:0.3s;transition:0.3s;cursor:pointer;}.card.jsx-4070224422:hover{box-shadow:0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12);}.card-image.jsx-4070224422{width:350px;height:250px;}.card-content.jsx-4070224422{padding:0 20px;display:block;}.card-footer.jsx-4070224422{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:-7px;color:#0b334d;}.location.jsx-4070224422{margin-left:auto;}.close.jsx-4070224422{margin-bottom:-150px;}.Website.jsx-4070224422{color:Teal;}.App.jsx-4070224422{color:Navy;}.Youtube.jsx-4070224422{color:FireBrick;}.Podcast.jsx-4070224422{color:DarkMagenta;}.Livestream.jsx-4070224422{color:DarkSlateBlue;}@media (max-width:1130px){.card-grid.jsx-4070224422{grid-template-columns:repeat(2,350px);-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}}@media (max-width:992px){}@media (max-width:768px){.card-grid.jsx-4070224422{grid-template-columns:repeat(1,350px);-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.card-grid-title.jsx-4070224422{font-size:1.8rem;text-align:center;}}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9EZXYvRG9jdW1lbnRzL2Rpc2NvdmVyZG9vLWFwcC9jb21wb25lbnRzL2FjdGl2aXR5TGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ2tCLEFBSWdDLEFBSU4sQUFTRixBQVNELEFBU3VHLEFBSXZHLEFBS0csQUFLRixBQU1JLEFBSUksQUFJVixBQUlBLEFBSUssQUFJRSxBQUlFLEFBS3FCLEFBV0EsQUFLdEIsV0FwQ3JCLEFBSUEsQ0F6Q2UsQUFhQSxDQXRCMEIsRUFURCxBQW9DeEIsQ0EyQmhCLENBaEJBLEFBNkNzQixDQXpCdEIsRUFJQSxDQXBCQSxJQWhDa0IsQUFhbEIsSUFLQSxNQXdERSxHQWpCK0IsQUFXQSxHQW5Fa0YsU0F4Qm5ILENBY2dDLENBVGQsZ0JBQ0YsTUF1Q0UsUUF0Q0csUUF1Q0wsY0FDaEIsU0FoQkEsdUNBTmtCLFNBd0RoQixBQVdBLEtBN0VrQixTQVBKLFNBUUUsS0FQbEIsR0FpQmlCLFFBVEksT0FVckIsWUFUQSIsImZpbGUiOiIvVXNlcnMvRGV2L0RvY3VtZW50cy9kaXNjb3ZlcmRvby1hcHAvY29tcG9uZW50cy9hY3Rpdml0eUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgTGF6eUxvYWQgZnJvbSAncmVhY3QtbGF6eWxvYWQnXG5cbmNvbnN0IEFjdGl2aXR5TGlzdCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGFjdGl2aXRpZXMgfSA9IHByb3BzXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxoMiBjbGFzc05hbWU9XCJjYXJkLWdyaWQtdGl0bGVcIj57cHJvcHMudGl0bGV9IGFjdGl2aXRpZXM8L2gyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWdyaWRcIiBpZD1cImdyaWRcIj5cbiAgICAgIHsgYWN0aXZpdGllcy5tYXAoYWN0aXZpdHkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17YWN0aXZpdHkuaWR9PlxuICAgICAgICAgIDxMYXp5TG9hZCBoZWlnaHQ9ezQwMH0gdGhyb3R0bGU9ezUwMH0+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2FjdGl2aXR5L1tpZF1cIiBhcz17YC9hY3Rpdml0eS8ke2FjdGl2aXR5LmlkfWB9PlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJub3VuZGVybGluZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJkLWltYWdlXCIgc3JjPXtgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vamFrZXBlZy9pbWFnZS91cGxvYWQvcV9hdXRvLGZfYXV0byxjX2ZpbGwsaF8yNTAsd18zNTAvdjE1OTMwMDU2NTEvJHthY3Rpdml0eS5pbWFnZX1gfSBhbHQ9e2FjdGl2aXR5Lm5hbWV9IC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+e2FjdGl2aXR5Lm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWdlLXJhbmdlXCI+eydhZ2UgJyArIGFjdGl2aXR5LmFnZUZyb20gKyAnIC0gJyArIGFjdGl2aXR5LmFnZVRvfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9jYXRpb25cIj57YWN0aXZpdHkuY2F0ZWdvcnl9IC0gPHNwYW4gY2xhc3NOYW1lPXthY3Rpdml0eS5tZWRpdW19PnthY3Rpdml0eS5tZWRpdW19PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9MYXp5TG9hZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICAubm91bmRlcmxpbmUge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkLWdyaWQtdGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1BheXRvbmUgT25lJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwZW07XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC1ncmlkIHtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDM1MHB4KTtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgZ3JpZC1yb3ctZ2FwOiA0MHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkIHtcbiAgICAgICAgICB3aWR0aDogMzUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAzNDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNXB4IC0xcHggcmdiYSgwLDAsMCwwLjIpLCAwcHggNXB4IDhweCAwcHggcmdiYSgwLDAsMCwwLjE0KSwgMHB4IDFweCAxNHB4IDBweCByZ2JhKDAsMCwwLDAuMTIpO1xuICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQgOmhvdmVyIHtcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggNnB4IDZweCAtM3B4IHJnYmEoMCwwLDAsMC4yKSwgMHB4IDEwcHggMTRweCAxcHggcmdiYSgwLDAsMCwwLjE0KSwgMHB4IDRweCAxOHB4IDNweCByZ2JhKDAsMCwwLDAuMTIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQtaW1hZ2Uge1xuICAgICAgICAgIHdpZHRoOiAzNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQtY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuY2FyZC1mb290ZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTdweDtcbiAgICAgICAgICBjb2xvcjogIzBiMzM0ZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2NhdGlvbiB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAuY2xvc2Uge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0xNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5XZWJzaXRlIHtcbiAgICAgICAgICBjb2xvcjogVGVhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5BcHAge1xuICAgICAgICAgIGNvbG9yOiBOYXZ5O1xuICAgICAgICB9XG5cbiAgICAgICAgLllvdXR1YmUge1xuICAgICAgICAgIGNvbG9yOiBGaXJlQnJpY2s7XG4gICAgICAgIH1cblxuICAgICAgICAuUG9kY2FzdCB7XG4gICAgICAgICAgY29sb3I6IERhcmtNYWdlbnRhO1xuICAgICAgICB9XG5cbiAgICAgICAgLkxpdmVzdHJlYW0ge1xuICAgICAgICAgIGNvbG9yOiBEYXJrU2xhdGVCbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExMzBweCkge1xuICAgICAgICAgIC5jYXJkLWdyaWQge1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMzUwcHgpO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgIC5jYXJkLWdyaWQge1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMzUwcHgpO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNhcmQtZ3JpZC10aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGl2aXR5TGlzdCJdfQ== */\\n/*@ sourceURL=/Users/Dev/Documents/discoverdoo-app/components/activityList.js */\"));\n};\n\n_c = ActivityList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ActivityList);\n\nvar _c;\n\n$RefreshReg$(_c, \"ActivityList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FjdGl2aXR5TGlzdC5qcz83ZDc5Il0sIm5hbWVzIjpbIkFjdGl2aXR5TGlzdCIsInByb3BzIiwiYWN0aXZpdGllcyIsInRpdGxlIiwibWFwIiwiYWN0aXZpdHkiLCJpZCIsImltYWdlIiwibmFtZSIsImFnZUZyb20iLCJhZ2VUbyIsImNhdGVnb3J5IiwibWVkaXVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFBQSxNQUN0QkMsVUFEc0IsR0FDUEQsS0FETyxDQUN0QkMsVUFEc0I7QUFHOUIsU0FDRSxtRUFDQTtBQUFBLHdDQUFjLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaUNELEtBQUssQ0FBQ0UsS0FBdkMsZ0JBREEsRUFFRTtBQUEyQixNQUFFLEVBQUMsTUFBOUI7QUFBQSx3Q0FBZSxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRUQsVUFBVSxDQUFDRSxHQUFYLENBQWUsVUFBQUMsUUFBUTtBQUFBLFdBQ3ZCO0FBQUssU0FBRyxFQUFFQSxRQUFRLENBQUNDLEVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMscURBQUQ7QUFBVSxZQUFNLEVBQUUsR0FBbEI7QUFBdUIsY0FBUSxFQUFFLEdBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLGdCQUFYO0FBQTRCLFFBQUUsc0JBQWVELFFBQVEsQ0FBQ0MsRUFBeEIsQ0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUEsMENBQWEsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQSwwQ0FBZSxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUE0QixTQUFHLHlHQUFrR0QsUUFBUSxDQUFDRSxLQUEzRyxDQUEvQjtBQUFtSixTQUFHLEVBQUVGLFFBQVEsQ0FBQ0csSUFBaks7QUFBQSwwQ0FBZSxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFO0FBQUEsMENBQWUsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtILFFBQVEsQ0FBQ0csSUFBZCxDQURGLEVBRUU7QUFBQSwwQ0FBZSxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBLDBDQUFlLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUE0QixTQUFTSCxRQUFRLENBQUNJLE9BQWxCLEdBQTRCLEtBQTVCLEdBQW9DSixRQUFRLENBQUNLLEtBQXpFLENBREYsRUFFRTtBQUFBLDBDQUFlLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUEyQkwsUUFBUSxDQUFDTSxRQUFwQyxTQUFnRDtBQUFBLDJDQUFpQk4sUUFBUSxDQUFDTyxNQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQW1DUCxRQUFRLENBQUNPLE1BQTVDLENBQWhELENBRkYsQ0FGRixDQUZGLENBREYsQ0FERixDQURGLENBREYsQ0FEdUI7QUFBQSxHQUF2QixDQURGLENBRkY7QUFBQTtBQUFBO0FBQUEsNHNQQURGO0FBc0lELENBeklEOztLQUFNWixZO0FBMklTQSwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvYWN0aXZpdHlMaXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IExhenlMb2FkIGZyb20gJ3JlYWN0LWxhenlsb2FkJ1xuXG5jb25zdCBBY3Rpdml0eUxpc3QgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBhY3Rpdml0aWVzIH0gPSBwcm9wc1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8aDIgY2xhc3NOYW1lPVwiY2FyZC1ncmlkLXRpdGxlXCI+e3Byb3BzLnRpdGxlfSBhY3Rpdml0aWVzPC9oMj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ncmlkXCIgaWQ9XCJncmlkXCI+XG4gICAgICB7IGFjdGl2aXRpZXMubWFwKGFjdGl2aXR5ID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2FjdGl2aXR5LmlkfT5cbiAgICAgICAgICA8TGF6eUxvYWQgaGVpZ2h0PXs0MDB9IHRocm90dGxlPXs1MDB9PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hY3Rpdml0eS9baWRdXCIgYXM9e2AvYWN0aXZpdHkvJHthY3Rpdml0eS5pZH1gfT5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibm91bmRlcmxpbmVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2FyZC1pbWFnZVwiIHNyYz17YGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2pha2VwZWcvaW1hZ2UvdXBsb2FkL3FfYXV0byxmX2F1dG8sY19maWxsLGhfMjUwLHdfMzUwL3YxNTkzMDA1NjUxLyR7YWN0aXZpdHkuaW1hZ2V9YH0gYWx0PXthY3Rpdml0eS5uYW1lfSAvPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPnthY3Rpdml0eS5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFnZS1yYW5nZVwiPnsnYWdlICcgKyBhY3Rpdml0eS5hZ2VGcm9tICsgJyAtICcgKyBhY3Rpdml0eS5hZ2VUb308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvY2F0aW9uXCI+e2FjdGl2aXR5LmNhdGVnb3J5fSAtIDxzcGFuIGNsYXNzTmFtZT17YWN0aXZpdHkubWVkaXVtfT57YWN0aXZpdHkubWVkaXVtfTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvTGF6eUxvYWQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgLm5vdW5kZXJsaW5lIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC1ncmlkLXRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdQYXl0b25lIE9uZScsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMGVtO1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQtZ3JpZCB7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAzNTBweCk7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGdyaWQtcm93LWdhcDogNDBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgd2lkdGg6IDM1MHB4O1xuICAgICAgICAgIGhlaWdodDogMzQwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsMC4yKSwgMHB4IDVweCA4cHggMHB4IHJnYmEoMCwwLDAsMC4xNCksIDBweCAxcHggMTRweCAwcHggcmdiYSgwLDAsMCwwLjEyKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkIDpob3ZlciB7XG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDZweCA2cHggLTNweCByZ2JhKDAsMCwwLDAuMiksIDBweCAxMHB4IDE0cHggMXB4IHJnYmEoMCwwLDAsMC4xNCksIDBweCA0cHggMThweCAzcHggcmdiYSgwLDAsMCwwLjEyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkLWltYWdlIHtcbiAgICAgICAgICB3aWR0aDogMzUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkLWNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmNhcmQtZm9vdGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IC03cHg7XG4gICAgICAgICAgY29sb3I6ICMwYjMzNGQ7XG4gICAgICAgIH1cblxuICAgICAgICAubG9jYXRpb24ge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNsb3NlIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMTUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuV2Vic2l0ZSB7XG4gICAgICAgICAgY29sb3I6IFRlYWw7XG4gICAgICAgIH1cblxuICAgICAgICAuQXBwIHtcbiAgICAgICAgICBjb2xvcjogTmF2eTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5Zb3V0dWJlIHtcbiAgICAgICAgICBjb2xvcjogRmlyZUJyaWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgLlBvZGNhc3Qge1xuICAgICAgICAgIGNvbG9yOiBEYXJrTWFnZW50YTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5MaXZlc3RyZWFtIHtcbiAgICAgICAgICBjb2xvcjogRGFya1NsYXRlQmx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTMwcHgpIHtcbiAgICAgICAgICAuY2FyZC1ncmlkIHtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDM1MHB4KTtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuXG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAuY2FyZC1ncmlkIHtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDM1MHB4KTtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJkLWdyaWQtdGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBY3Rpdml0eUxpc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/activityList.js\n");

/***/ })

})