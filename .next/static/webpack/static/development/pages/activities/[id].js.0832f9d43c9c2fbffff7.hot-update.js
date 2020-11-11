webpackHotUpdate("static/development/pages/activities/[id].js",{

/***/ "./components/activityList.js":
/*!************************************!*\
  !*** ./components/activityList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-lazyload */ \"./node_modules/react-lazyload/lib/index.js\");\n/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Documents/discoverdoo-app/components/activityList.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nvar ActivityList = function ActivityList(props) {\n  var activities = props.activities;\n\n  function truncateString(str) {\n    if (str.length > 18) {\n      return str.slice(0, 18) + \"..\";\n    } else {\n      return str;\n    }\n  }\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"h2\", {\n    className: \"jsx-4070224422\" + \" \" + \"card-grid-title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }\n  }, props.title, \" activities\"), __jsx(\"div\", {\n    id: \"grid\",\n    className: \"jsx-4070224422\" + \" \" + \"card-grid\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, activities.map(function (activity) {\n    return __jsx(\"div\", {\n      key: activity.id,\n      className: \"jsx-4070224422\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }\n    }, __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      height: 400,\n      throttle: 500,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 11\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      href: \"/activity/[id]\",\n      as: \"/activity/\".concat(activity.id),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 13\n      }\n    }, __jsx(\"a\", {\n      className: \"jsx-4070224422\" + \" \" + \"nounderline\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 15\n      }\n    }, __jsx(\"div\", {\n      className: \"jsx-4070224422\" + \" \" + \"card\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 17\n      }\n    }, __jsx(\"img\", {\n      src: \"https://res.cloudinary.com/jakepeg/image/upload/q_auto,f_auto,c_fill,h_250,w_350/v1593005651/\".concat(activity.image),\n      alt: activity.name,\n      className: \"jsx-4070224422\" + \" \" + \"card-image\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 19\n      }\n    }), __jsx(\"div\", {\n      className: \"jsx-4070224422\" + \" \" + \"card-content\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 19\n      }\n    }, __jsx(\"h2\", {\n      className: \"jsx-4070224422\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 21\n      }\n    }, activity.name), __jsx(\"div\", {\n      className: \"jsx-4070224422\" + \" \" + \"card-footer\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 21\n      }\n    }, __jsx(\"div\", {\n      className: \"jsx-4070224422\" + \" \" + \"age-range\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 23\n      }\n    }, 'age ' + activity.ageFrom + ' - ' + activity.ageTo), __jsx(\"div\", {\n      className: \"jsx-4070224422\" + \" \" + \"location\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 23\n      }\n    }, truncateString(activity.category), \" - \", __jsx(\"span\", {\n      className: \"jsx-4070224422\" + \" \" + (activity.medium || \"\"),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 87\n      }\n    }, activity.medium)))))))));\n  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"4070224422\",\n    __self: _this\n  }, \".nounderline.jsx-4070224422{-webkit-text-decoration:none;text-decoration:none;}.card-grid-title.jsx-4070224422{font-size:2rem;font-family:'Paytone One',sans-serif;font-weight:600;line-height:1;-webkit-letter-spacing:0em;-moz-letter-spacing:0em;-ms-letter-spacing:0em;letter-spacing:0em;color:#ffffff;}.card-grid.jsx-4070224422{display:grid;grid-template-columns:repeat(3,350px);-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;grid-row-gap:40px;margin-top:30px;margin-bottom:30px;}.card.jsx-4070224422{width:350px;height:340px;background:#fff;box-shadow:0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12);-webkit-transition:0.3s;transition:0.3s;cursor:pointer;}.card.jsx-4070224422:hover{box-shadow:0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12);}.card-image.jsx-4070224422{width:350px;height:250px;}.card-content.jsx-4070224422{padding:0 20px;display:block;}.card-footer.jsx-4070224422{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:-7px;color:#0b334d;}.location.jsx-4070224422{margin-left:auto;}.close.jsx-4070224422{margin-bottom:-150px;}.Website.jsx-4070224422{color:Teal;}.App.jsx-4070224422{color:Navy;}.Youtube.jsx-4070224422{color:FireBrick;}.Podcast.jsx-4070224422{color:DarkMagenta;}.Livestream.jsx-4070224422{color:DarkSlateBlue;}@media (max-width:1130px){.card-grid.jsx-4070224422{grid-template-columns:repeat(2,350px);-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}}@media (max-width:992px){}@media (max-width:768px){.card-grid.jsx-4070224422{grid-template-columns:repeat(1,350px);-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.card-grid-title.jsx-4070224422{font-size:1.8rem;text-align:center;}}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9EZXYvRG9jdW1lbnRzL2Rpc2NvdmVyZG9vLWFwcC9jb21wb25lbnRzL2FjdGl2aXR5TGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Q2tCLEFBSWdDLEFBSU4sQUFTRixBQVNELEFBU3VHLEFBSXZHLEFBS0csQUFLRixBQU1JLEFBSUksQUFJVixBQUlBLEFBSUssQUFJRSxBQUlFLEFBS3FCLEFBV0EsQUFLdEIsV0FwQ3JCLEFBSUEsQ0F6Q2UsQUFhQSxDQXRCMEIsRUFURCxBQW9DeEIsQ0EyQmhCLENBaEJBLEFBNkNzQixDQXpCdEIsRUFJQSxDQXBCQSxJQWhDa0IsQUFhbEIsSUFLQSxNQXdERSxHQWpCK0IsQUFXQSxHQW5Fa0YsU0F4Qm5ILENBY2dDLENBVGQsZ0JBQ0YsTUF1Q0UsUUF0Q0csUUF1Q0wsY0FDaEIsU0FoQkEsdUNBTmtCLFNBd0RoQixBQVdBLEtBN0VrQixTQVBKLFNBUUUsS0FQbEIsR0FpQmlCLFFBVEksT0FVckIsWUFUQSIsImZpbGUiOiIvVXNlcnMvRGV2L0RvY3VtZW50cy9kaXNjb3ZlcmRvby1hcHAvY29tcG9uZW50cy9hY3Rpdml0eUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgTGF6eUxvYWQgZnJvbSAncmVhY3QtbGF6eWxvYWQnXG5cbmNvbnN0IEFjdGl2aXR5TGlzdCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGFjdGl2aXRpZXMgfSA9IHByb3BzXG5cbiAgZnVuY3Rpb24gdHJ1bmNhdGVTdHJpbmcoc3RyKSB7XG4gICAgaWYgKHN0ci5sZW5ndGggPiAxOCkge1xuICAgICAgcmV0dXJuIHN0ci5zbGljZSgwLCAxOCkgKyBcIi4uXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICB9XG5cblxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8aDIgY2xhc3NOYW1lPVwiY2FyZC1ncmlkLXRpdGxlXCI+e3Byb3BzLnRpdGxlfSBhY3Rpdml0aWVzPC9oMj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ncmlkXCIgaWQ9XCJncmlkXCI+XG4gICAgICB7IGFjdGl2aXRpZXMubWFwKGFjdGl2aXR5ID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2FjdGl2aXR5LmlkfT5cbiAgICAgICAgICA8TGF6eUxvYWQgaGVpZ2h0PXs0MDB9IHRocm90dGxlPXs1MDB9PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hY3Rpdml0eS9baWRdXCIgYXM9e2AvYWN0aXZpdHkvJHthY3Rpdml0eS5pZH1gfT5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibm91bmRlcmxpbmVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2FyZC1pbWFnZVwiIHNyYz17YGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2pha2VwZWcvaW1hZ2UvdXBsb2FkL3FfYXV0byxmX2F1dG8sY19maWxsLGhfMjUwLHdfMzUwL3YxNTkzMDA1NjUxLyR7YWN0aXZpdHkuaW1hZ2V9YH0gYWx0PXthY3Rpdml0eS5uYW1lfSAvPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPnthY3Rpdml0eS5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFnZS1yYW5nZVwiPnsnYWdlICcgKyBhY3Rpdml0eS5hZ2VGcm9tICsgJyAtICcgKyBhY3Rpdml0eS5hZ2VUb308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvY2F0aW9uXCI+e3RydW5jYXRlU3RyaW5nKGFjdGl2aXR5LmNhdGVnb3J5KX0gLSA8c3BhbiBjbGFzc05hbWU9e2FjdGl2aXR5Lm1lZGl1bX0+e2FjdGl2aXR5Lm1lZGl1bX08L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L0xhenlMb2FkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgIC5ub3VuZGVybGluZSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQtZ3JpZC10aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUGF5dG9uZSBPbmUnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkLWdyaWQge1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMzUwcHgpO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBncmlkLXJvdy1nYXA6IDQwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgIHdpZHRoOiAzNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDM0MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA1cHggLTFweCByZ2JhKDAsMCwwLDAuMiksIDBweCA1cHggOHB4IDBweCByZ2JhKDAsMCwwLDAuMTQpLCAwcHggMXB4IDE0cHggMHB4IHJnYmEoMCwwLDAsMC4xMik7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZCA6aG92ZXIge1xuICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA2cHggNnB4IC0zcHggcmdiYSgwLDAsMCwwLjIpLCAwcHggMTBweCAxNHB4IDFweCByZ2JhKDAsMCwwLDAuMTQpLCAwcHggNHB4IDE4cHggM3B4IHJnYmEoMCwwLDAsMC4xMik7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC1pbWFnZSB7XG4gICAgICAgICAgd2lkdGg6IDM1MHB4O1xuICAgICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC1jb250ZW50IHtcbiAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5jYXJkLWZvb3RlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtN3B4O1xuICAgICAgICAgIGNvbG9yOiAjMGIzMzRkO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvY2F0aW9uIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5jbG9zZSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTE1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLldlYnNpdGUge1xuICAgICAgICAgIGNvbG9yOiBUZWFsO1xuICAgICAgICB9XG5cbiAgICAgICAgLkFwcCB7XG4gICAgICAgICAgY29sb3I6IE5hdnk7XG4gICAgICAgIH1cblxuICAgICAgICAuWW91dHViZSB7XG4gICAgICAgICAgY29sb3I6IEZpcmVCcmljaztcbiAgICAgICAgfVxuXG4gICAgICAgIC5Qb2RjYXN0IHtcbiAgICAgICAgICBjb2xvcjogRGFya01hZ2VudGE7XG4gICAgICAgIH1cblxuICAgICAgICAuTGl2ZXN0cmVhbSB7XG4gICAgICAgICAgY29sb3I6IERhcmtTbGF0ZUJsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTEzMHB4KSB7XG4gICAgICAgICAgLmNhcmQtZ3JpZCB7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAzNTBweCk7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcblxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgLmNhcmQtZ3JpZCB7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAzNTBweCk7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FyZC1ncmlkLXRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWN0aXZpdHlMaXN0Il19 */\\n/*@ sourceURL=/Users/Dev/Documents/discoverdoo-app/components/activityList.js */\"));\n};\n\n_c = ActivityList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ActivityList);\n\nvar _c;\n\n$RefreshReg$(_c, \"ActivityList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FjdGl2aXR5TGlzdC5qcz83ZDc5Il0sIm5hbWVzIjpbIkFjdGl2aXR5TGlzdCIsInByb3BzIiwiYWN0aXZpdGllcyIsInRydW5jYXRlU3RyaW5nIiwic3RyIiwibGVuZ3RoIiwic2xpY2UiLCJ0aXRsZSIsIm1hcCIsImFjdGl2aXR5IiwiaWQiLCJpbWFnZSIsIm5hbWUiLCJhZ2VGcm9tIiwiYWdlVG8iLCJjYXRlZ29yeSIsIm1lZGl1bSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsTUFDdEJDLFVBRHNCLEdBQ1BELEtBRE8sQ0FDdEJDLFVBRHNCOztBQUc5QixXQUFTQyxjQUFULENBQXdCQyxHQUF4QixFQUE2QjtBQUMzQixRQUFJQSxHQUFHLENBQUNDLE1BQUosR0FBYSxFQUFqQixFQUFxQjtBQUNuQixhQUFPRCxHQUFHLENBQUNFLEtBQUosQ0FBVSxDQUFWLEVBQWEsRUFBYixJQUFtQixJQUExQjtBQUNELEtBRkQsTUFFTztBQUNMLGFBQU9GLEdBQVA7QUFDRDtBQUNGOztBQUlELFNBQ0UsbUVBQ0E7QUFBQSx3Q0FBYyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlDSCxLQUFLLENBQUNNLEtBQXZDLGdCQURBLEVBRUU7QUFBMkIsTUFBRSxFQUFDLE1BQTlCO0FBQUEsd0NBQWUsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VMLFVBQVUsQ0FBQ00sR0FBWCxDQUFlLFVBQUFDLFFBQVE7QUFBQSxXQUN2QjtBQUFLLFNBQUcsRUFBRUEsUUFBUSxDQUFDQyxFQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHFEQUFEO0FBQVUsWUFBTSxFQUFFLEdBQWxCO0FBQXVCLGNBQVEsRUFBRSxHQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxnQkFBWDtBQUE0QixRQUFFLHNCQUFlRCxRQUFRLENBQUNDLEVBQXhCLENBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBLDBDQUFhLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUEsMENBQWUsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBNEIsU0FBRyx5R0FBa0dELFFBQVEsQ0FBQ0UsS0FBM0csQ0FBL0I7QUFBbUosU0FBRyxFQUFFRixRQUFRLENBQUNHLElBQWpLO0FBQUEsMENBQWUsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRTtBQUFBLDBDQUFlLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLSCxRQUFRLENBQUNHLElBQWQsQ0FERixFQUVFO0FBQUEsMENBQWUsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQSwwQ0FBZSxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBNEIsU0FBU0gsUUFBUSxDQUFDSSxPQUFsQixHQUE0QixLQUE1QixHQUFvQ0osUUFBUSxDQUFDSyxLQUF6RSxDQURGLEVBRUU7QUFBQSwwQ0FBZSxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBMkJYLGNBQWMsQ0FBQ00sUUFBUSxDQUFDTSxRQUFWLENBQXpDLFNBQWdFO0FBQUEsMkNBQWlCTixRQUFRLENBQUNPLE1BQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBbUNQLFFBQVEsQ0FBQ08sTUFBNUMsQ0FBaEUsQ0FGRixDQUZGLENBRkYsQ0FERixDQURGLENBREYsQ0FERixDQUR1QjtBQUFBLEdBQXZCLENBREYsQ0FGRjtBQUFBO0FBQUE7QUFBQSw0NlBBREY7QUFzSUQsQ0FuSkQ7O0tBQU1oQixZO0FBcUpTQSwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvYWN0aXZpdHlMaXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IExhenlMb2FkIGZyb20gJ3JlYWN0LWxhenlsb2FkJ1xuXG5jb25zdCBBY3Rpdml0eUxpc3QgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBhY3Rpdml0aWVzIH0gPSBwcm9wc1xuXG4gIGZ1bmN0aW9uIHRydW5jYXRlU3RyaW5nKHN0cikge1xuICAgIGlmIChzdHIubGVuZ3RoID4gMTgpIHtcbiAgICAgIHJldHVybiBzdHIuc2xpY2UoMCwgMTgpICsgXCIuLlwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgfVxuXG5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPGgyIGNsYXNzTmFtZT1cImNhcmQtZ3JpZC10aXRsZVwiPntwcm9wcy50aXRsZX0gYWN0aXZpdGllczwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZ3JpZFwiIGlkPVwiZ3JpZFwiPlxuICAgICAgeyBhY3Rpdml0aWVzLm1hcChhY3Rpdml0eSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXthY3Rpdml0eS5pZH0+XG4gICAgICAgICAgPExhenlMb2FkIGhlaWdodD17NDAwfSB0aHJvdHRsZT17NTAwfT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWN0aXZpdHkvW2lkXVwiIGFzPXtgL2FjdGl2aXR5LyR7YWN0aXZpdHkuaWR9YH0+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5vdW5kZXJsaW5lXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNhcmQtaW1hZ2VcIiBzcmM9e2BodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qYWtlcGVnL2ltYWdlL3VwbG9hZC9xX2F1dG8sZl9hdXRvLGNfZmlsbCxoXzI1MCx3XzM1MC92MTU5MzAwNTY1MS8ke2FjdGl2aXR5LmltYWdlfWB9IGFsdD17YWN0aXZpdHkubmFtZX0gLz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj57YWN0aXZpdHkubmFtZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZ2UtcmFuZ2VcIj57J2FnZSAnICsgYWN0aXZpdHkuYWdlRnJvbSArICcgLSAnICsgYWN0aXZpdHkuYWdlVG99PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2NhdGlvblwiPnt0cnVuY2F0ZVN0cmluZyhhY3Rpdml0eS5jYXRlZ29yeSl9IC0gPHNwYW4gY2xhc3NOYW1lPXthY3Rpdml0eS5tZWRpdW19PnthY3Rpdml0eS5tZWRpdW19PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9MYXp5TG9hZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICAubm91bmRlcmxpbmUge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkLWdyaWQtdGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1BheXRvbmUgT25lJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwZW07XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC1ncmlkIHtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDM1MHB4KTtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgZ3JpZC1yb3ctZ2FwOiA0MHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkIHtcbiAgICAgICAgICB3aWR0aDogMzUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAzNDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNXB4IC0xcHggcmdiYSgwLDAsMCwwLjIpLCAwcHggNXB4IDhweCAwcHggcmdiYSgwLDAsMCwwLjE0KSwgMHB4IDFweCAxNHB4IDBweCByZ2JhKDAsMCwwLDAuMTIpO1xuICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQgOmhvdmVyIHtcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggNnB4IDZweCAtM3B4IHJnYmEoMCwwLDAsMC4yKSwgMHB4IDEwcHggMTRweCAxcHggcmdiYSgwLDAsMCwwLjE0KSwgMHB4IDRweCAxOHB4IDNweCByZ2JhKDAsMCwwLDAuMTIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQtaW1hZ2Uge1xuICAgICAgICAgIHdpZHRoOiAzNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQtY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuY2FyZC1mb290ZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTdweDtcbiAgICAgICAgICBjb2xvcjogIzBiMzM0ZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2NhdGlvbiB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAuY2xvc2Uge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0xNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5XZWJzaXRlIHtcbiAgICAgICAgICBjb2xvcjogVGVhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5BcHAge1xuICAgICAgICAgIGNvbG9yOiBOYXZ5O1xuICAgICAgICB9XG5cbiAgICAgICAgLllvdXR1YmUge1xuICAgICAgICAgIGNvbG9yOiBGaXJlQnJpY2s7XG4gICAgICAgIH1cblxuICAgICAgICAuUG9kY2FzdCB7XG4gICAgICAgICAgY29sb3I6IERhcmtNYWdlbnRhO1xuICAgICAgICB9XG5cbiAgICAgICAgLkxpdmVzdHJlYW0ge1xuICAgICAgICAgIGNvbG9yOiBEYXJrU2xhdGVCbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExMzBweCkge1xuICAgICAgICAgIC5jYXJkLWdyaWQge1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMzUwcHgpO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgIC5jYXJkLWdyaWQge1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMzUwcHgpO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNhcmQtZ3JpZC10aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGl2aXR5TGlzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/activityList.js\n");

/***/ })

})