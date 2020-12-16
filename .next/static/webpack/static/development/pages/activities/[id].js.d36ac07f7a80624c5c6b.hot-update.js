webpackHotUpdate("static/development/pages/activities/[id].js",{

/***/ "./components/activityList.js":
/*!************************************!*\
  !*** ./components/activityList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-lazyload */ \"./node_modules/react-lazyload/lib/index.js\");\n/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _favourites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./favourites */ \"./components/favourites.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Dev/discoverdoo-app/components/activityList.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar ActivityList = function ActivityList(props) {\n  var activities = props.activities;\n\n  function truncateString(str) {\n    if (str.length > 18) {\n      return str.slice(0, 18) + \"..\";\n    } else {\n      return str;\n    }\n  }\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"h2\", {\n    className: \"jsx-2406873769\" + \" \" + \"card-grid-title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, props.title, \" activities\"), __jsx(\"div\", {\n    id: \"grid\",\n    className: \"jsx-2406873769\" + \" \" + \"card-grid\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, activities.map(function (activity) {\n    return __jsx(\"div\", {\n      key: activity.id,\n      className: \"jsx-2406873769\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }\n    }, __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      height: 400,\n      throttle: 500,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 11\n      }\n    }, __jsx(_favourites__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      activityId: activity._id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 11\n      }\n    }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      href: \"/activity/[id]\",\n      as: \"/activity/\".concat(activity.id),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 13\n      }\n    }, __jsx(\"a\", {\n      className: \"jsx-2406873769\" + \" \" + \"nounderline\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 15\n      }\n    }, __jsx(\"div\", {\n      className: \"jsx-2406873769\" + \" \" + \"card\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 17\n      }\n    }, __jsx(\"img\", {\n      src: \"https://res.cloudinary.com/jakepeg/image/upload/q_auto,f_auto,c_fill,h_250,w_350/v1593005651/\".concat(activity.image),\n      alt: activity.name,\n      className: \"jsx-2406873769\" + \" \" + \"card-image\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 19\n      }\n    }), __jsx(\"div\", {\n      className: \"jsx-2406873769\" + \" \" + \"card-content\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 19\n      }\n    }, __jsx(\"h2\", {\n      className: \"jsx-2406873769\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 21\n      }\n    }, activity.name), __jsx(\"div\", {\n      className: \"jsx-2406873769\" + \" \" + \"card-footer\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 21\n      }\n    }, __jsx(\"div\", {\n      className: \"jsx-2406873769\" + \" \" + \"age-range\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 23\n      }\n    }, 'age ' + activity.ageFrom + ' - ' + activity.ageTo), props.category ? __jsx(\"div\", {\n      className: \"jsx-2406873769\" + \" \" + \"location\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 25\n      }\n    }, __jsx(\"span\", {\n      className: \"jsx-2406873769\" + \" \" + (truncateString(activity.medium) || \"\"),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 51\n      }\n    }, activity.medium)) : __jsx(\"div\", {\n      className: \"jsx-2406873769\" + \" \" + \"location\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 25\n      }\n    }, truncateString(activity.category)))))))));\n  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"2406873769\",\n    __self: _this\n  }, \".nounderline.jsx-2406873769{-webkit-text-decoration:none;text-decoration:none;}.card-grid-title.jsx-2406873769{font-size:2rem;font-family:'Paytone One',sans-serif;font-weight:600;line-height:1;-webkit-letter-spacing:0em;-moz-letter-spacing:0em;-ms-letter-spacing:0em;letter-spacing:0em;color:#ffffff;}.card-grid.jsx-2406873769{display:grid;grid-template-columns:repeat(3,350px);-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;grid-row-gap:40px;margin-top:30px;margin-bottom:30px;}.card.jsx-2406873769{width:350px;height:340px;background:#fff;box-shadow:0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12);-webkit-transition:0.3s;transition:0.3s;cursor:pointer;}.card.jsx-2406873769:hover{box-shadow:0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12);}.card-image.jsx-2406873769{position:relative;width:350px;height:250px;}.card-content.jsx-2406873769{padding:0 20px;display:block;}.card-footer.jsx-2406873769{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:-7px;color:#0b334d;}.location.jsx-2406873769{margin-left:auto;}.close.jsx-2406873769{margin-bottom:-150px;}.Website.jsx-2406873769{color:Teal;}.App.jsx-2406873769{color:Navy;}.Youtube.jsx-2406873769{color:FireBrick;}.Podcast.jsx-2406873769{color:DarkMagenta;}.Livestream.jsx-2406873769{color:DarkSlateBlue;}@media (max-width:1130px){.card-grid.jsx-2406873769{grid-template-columns:repeat(2,350px);-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}}@media (max-width:992px){}@media (max-width:768px){.card-grid.jsx-2406873769{grid-template-columns:repeat(1,350px);-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.card-grid-title.jsx-2406873769{font-size:1.8rem;text-align:center;}}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9EZXYvRGV2L2Rpc2NvdmVyZG9vLWFwcC9jb21wb25lbnRzL2FjdGl2aXR5TGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRGtCLEFBSWdDLEFBSU4sQUFTRixBQVNELEFBU3VHLEFBSWpHLEFBTUgsQUFLRixBQU1JLEFBSUksQUFJVixBQUlBLEFBSUssQUFJRSxBQUlFLEFBS3FCLEFBV0EsQUFLdEIsV0FwQ3JCLEFBSUEsQ0ExQ2UsQ0FUMEIsRUFURCxBQXFDeEIsQ0EyQmhCLENBaEJBLEFBNkNzQixDQTlEUixBQXFDZCxFQUlBLENBcEJBLElBakNrQixJQW1CbEIsQ0FOZSxLQThEYixHQWpCK0IsQUFXQSxHQXBFa0YsRUFhbkgsT0FyQ0EsQ0FjZ0MsQ0FUZCxnQkFDRixNQXdDRSxRQXZDRyxRQXdDTCxjQUNoQixTQWpCQSx1Q0FOa0IsU0F5RGhCLEFBV0EsS0E5RWtCLFNBUEosU0FRRSxLQVBsQixHQWlCaUIsUUFUSSxPQVVyQixZQVRBIiwiZmlsZSI6Ii9Vc2Vycy9EZXYvRGV2L2Rpc2NvdmVyZG9vLWFwcC9jb21wb25lbnRzL2FjdGl2aXR5TGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBMYXp5TG9hZCBmcm9tICdyZWFjdC1sYXp5bG9hZCdcbmltcG9ydCBGYXZvdXJpdGVzIGZyb20gJy4vZmF2b3VyaXRlcydcblxuY29uc3QgQWN0aXZpdHlMaXN0ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgYWN0aXZpdGllcyB9ID0gcHJvcHNcblxuICBmdW5jdGlvbiB0cnVuY2F0ZVN0cmluZyhzdHIpIHtcbiAgICBpZiAoc3RyLmxlbmd0aCA+IDE4KSB7XG4gICAgICByZXR1cm4gc3RyLnNsaWNlKDAsIDE4KSArIFwiLi5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPGgyIGNsYXNzTmFtZT1cImNhcmQtZ3JpZC10aXRsZVwiPntwcm9wcy50aXRsZX0gYWN0aXZpdGllczwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZ3JpZFwiIGlkPVwiZ3JpZFwiPlxuICAgICAgeyBhY3Rpdml0aWVzLm1hcChhY3Rpdml0eSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXthY3Rpdml0eS5pZH0+XG4gICAgICAgICAgPExhenlMb2FkIGhlaWdodD17NDAwfSB0aHJvdHRsZT17NTAwfT5cbiAgICAgICAgICA8RmF2b3VyaXRlcyBhY3Rpdml0eUlkID0ge2FjdGl2aXR5Ll9pZH0gLz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWN0aXZpdHkvW2lkXVwiIGFzPXtgL2FjdGl2aXR5LyR7YWN0aXZpdHkuaWR9YH0+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5vdW5kZXJsaW5lXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG5cbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2FyZC1pbWFnZVwiIHNyYz17YGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2pha2VwZWcvaW1hZ2UvdXBsb2FkL3FfYXV0byxmX2F1dG8sY19maWxsLGhfMjUwLHdfMzUwL3YxNTkzMDA1NjUxLyR7YWN0aXZpdHkuaW1hZ2V9YH0gYWx0PXthY3Rpdml0eS5uYW1lfSAvPlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+e2FjdGl2aXR5Lm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWdlLXJhbmdlXCI+eydhZ2UgJyArIGFjdGl2aXR5LmFnZUZyb20gKyAnIC0gJyArIGFjdGl2aXR5LmFnZVRvfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIHsgcHJvcHMuY2F0ZWdvcnkgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvY2F0aW9uXCI+PHNwYW4gY2xhc3NOYW1lPXt0cnVuY2F0ZVN0cmluZyhhY3Rpdml0eS5tZWRpdW0pfT57YWN0aXZpdHkubWVkaXVtfTwvc3Bhbj48L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvY2F0aW9uXCI+e3RydW5jYXRlU3RyaW5nKGFjdGl2aXR5LmNhdGVnb3J5KX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L0xhenlMb2FkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgIC5ub3VuZGVybGluZSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQtZ3JpZC10aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUGF5dG9uZSBPbmUnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkLWdyaWQge1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMzUwcHgpO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBncmlkLXJvdy1nYXA6IDQwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgIHdpZHRoOiAzNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDM0MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA1cHggLTFweCByZ2JhKDAsMCwwLDAuMiksIDBweCA1cHggOHB4IDBweCByZ2JhKDAsMCwwLDAuMTQpLCAwcHggMXB4IDE0cHggMHB4IHJnYmEoMCwwLDAsMC4xMik7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZCA6aG92ZXIge1xuICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA2cHggNnB4IC0zcHggcmdiYSgwLDAsMCwwLjIpLCAwcHggMTBweCAxNHB4IDFweCByZ2JhKDAsMCwwLDAuMTQpLCAwcHggNHB4IDE4cHggM3B4IHJnYmEoMCwwLDAsMC4xMik7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC1pbWFnZSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHdpZHRoOiAzNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQtY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuY2FyZC1mb290ZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTdweDtcbiAgICAgICAgICBjb2xvcjogIzBiMzM0ZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2NhdGlvbiB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAuY2xvc2Uge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0xNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5XZWJzaXRlIHtcbiAgICAgICAgICBjb2xvcjogVGVhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5BcHAge1xuICAgICAgICAgIGNvbG9yOiBOYXZ5O1xuICAgICAgICB9XG5cbiAgICAgICAgLllvdXR1YmUge1xuICAgICAgICAgIGNvbG9yOiBGaXJlQnJpY2s7XG4gICAgICAgIH1cblxuICAgICAgICAuUG9kY2FzdCB7XG4gICAgICAgICAgY29sb3I6IERhcmtNYWdlbnRhO1xuICAgICAgICB9XG5cbiAgICAgICAgLkxpdmVzdHJlYW0ge1xuICAgICAgICAgIGNvbG9yOiBEYXJrU2xhdGVCbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExMzBweCkge1xuICAgICAgICAgIC5jYXJkLWdyaWQge1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMzUwcHgpO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgIC5jYXJkLWdyaWQge1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMzUwcHgpO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNhcmQtZ3JpZC10aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBY3Rpdml0eUxpc3QiXX0= */\\n/*@ sourceURL=/Users/Dev/Dev/discoverdoo-app/components/activityList.js */\"));\n};\n\n_c = ActivityList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ActivityList);\n\nvar _c;\n\n$RefreshReg$(_c, \"ActivityList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FjdGl2aXR5TGlzdC5qcz83ZDc5Il0sIm5hbWVzIjpbIkFjdGl2aXR5TGlzdCIsInByb3BzIiwiYWN0aXZpdGllcyIsInRydW5jYXRlU3RyaW5nIiwic3RyIiwibGVuZ3RoIiwic2xpY2UiLCJ0aXRsZSIsIm1hcCIsImFjdGl2aXR5IiwiaWQiLCJfaWQiLCJpbWFnZSIsIm5hbWUiLCJhZ2VGcm9tIiwiYWdlVG8iLCJjYXRlZ29yeSIsIm1lZGl1bSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsTUFDdEJDLFVBRHNCLEdBQ1BELEtBRE8sQ0FDdEJDLFVBRHNCOztBQUc5QixXQUFTQyxjQUFULENBQXdCQyxHQUF4QixFQUE2QjtBQUMzQixRQUFJQSxHQUFHLENBQUNDLE1BQUosR0FBYSxFQUFqQixFQUFxQjtBQUNuQixhQUFPRCxHQUFHLENBQUNFLEtBQUosQ0FBVSxDQUFWLEVBQWEsRUFBYixJQUFtQixJQUExQjtBQUNELEtBRkQsTUFFTztBQUNMLGFBQU9GLEdBQVA7QUFDRDtBQUNGOztBQUVELFNBQ0UsbUVBQ0E7QUFBQSx3Q0FBYyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlDSCxLQUFLLENBQUNNLEtBQXZDLGdCQURBLEVBRUU7QUFBMkIsTUFBRSxFQUFDLE1BQTlCO0FBQUEsd0NBQWUsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VMLFVBQVUsQ0FBQ00sR0FBWCxDQUFlLFVBQUFDLFFBQVE7QUFBQSxXQUN2QjtBQUFLLFNBQUcsRUFBRUEsUUFBUSxDQUFDQyxFQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHFEQUFEO0FBQVUsWUFBTSxFQUFFLEdBQWxCO0FBQXVCLGNBQVEsRUFBRSxHQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0EsTUFBQyxtREFBRDtBQUFZLGdCQUFVLEVBQUlELFFBQVEsQ0FBQ0UsR0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURBLEVBRUUsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxnQkFBWDtBQUE0QixRQUFFLHNCQUFlRixRQUFRLENBQUNDLEVBQXhCLENBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBLDBDQUFhLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUEsMENBQWUsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRUU7QUFBNEIsU0FBRyx5R0FBa0dELFFBQVEsQ0FBQ0csS0FBM0csQ0FBL0I7QUFBbUosU0FBRyxFQUFFSCxRQUFRLENBQUNJLElBQWpLO0FBQUEsMENBQWUsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkYsRUFJRTtBQUFBLDBDQUFlLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLSixRQUFRLENBQUNJLElBQWQsQ0FERixFQUVFO0FBQUEsMENBQWUsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQSwwQ0FBZSxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBNEIsU0FBU0osUUFBUSxDQUFDSyxPQUFsQixHQUE0QixLQUE1QixHQUFvQ0wsUUFBUSxDQUFDTSxLQUF6RSxDQURGLEVBRUlkLEtBQUssQ0FBQ2UsUUFBTixHQUNBO0FBQUEsMENBQWUsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTBCO0FBQUEsMkNBQWlCYixjQUFjLENBQUNNLFFBQVEsQ0FBQ1EsTUFBVixDQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQW1EUixRQUFRLENBQUNRLE1BQTVELENBQTFCLENBREEsR0FHQTtBQUFBLDBDQUFlLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUEyQmQsY0FBYyxDQUFDTSxRQUFRLENBQUNPLFFBQVYsQ0FBekMsQ0FMSixDQUZGLENBSkYsQ0FERixDQURGLENBRkYsQ0FERixDQUR1QjtBQUFBLEdBQXZCLENBREYsQ0FGRjtBQUFBO0FBQUE7QUFBQSxvMVFBREY7QUE2SUQsQ0F4SkQ7O0tBQU1oQixZO0FBMEpTQSwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvYWN0aXZpdHlMaXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IExhenlMb2FkIGZyb20gJ3JlYWN0LWxhenlsb2FkJ1xuaW1wb3J0IEZhdm91cml0ZXMgZnJvbSAnLi9mYXZvdXJpdGVzJ1xuXG5jb25zdCBBY3Rpdml0eUxpc3QgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBhY3Rpdml0aWVzIH0gPSBwcm9wc1xuXG4gIGZ1bmN0aW9uIHRydW5jYXRlU3RyaW5nKHN0cikge1xuICAgIGlmIChzdHIubGVuZ3RoID4gMTgpIHtcbiAgICAgIHJldHVybiBzdHIuc2xpY2UoMCwgMTgpICsgXCIuLlwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8aDIgY2xhc3NOYW1lPVwiY2FyZC1ncmlkLXRpdGxlXCI+e3Byb3BzLnRpdGxlfSBhY3Rpdml0aWVzPC9oMj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ncmlkXCIgaWQ9XCJncmlkXCI+XG4gICAgICB7IGFjdGl2aXRpZXMubWFwKGFjdGl2aXR5ID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2FjdGl2aXR5LmlkfT5cbiAgICAgICAgICA8TGF6eUxvYWQgaGVpZ2h0PXs0MDB9IHRocm90dGxlPXs1MDB9PlxuICAgICAgICAgIDxGYXZvdXJpdGVzIGFjdGl2aXR5SWQgPSB7YWN0aXZpdHkuX2lkfSAvPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hY3Rpdml0eS9baWRdXCIgYXM9e2AvYWN0aXZpdHkvJHthY3Rpdml0eS5pZH1gfT5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibm91bmRlcmxpbmVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cblxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJkLWltYWdlXCIgc3JjPXtgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vamFrZXBlZy9pbWFnZS91cGxvYWQvcV9hdXRvLGZfYXV0byxjX2ZpbGwsaF8yNTAsd18zNTAvdjE1OTMwMDU2NTEvJHthY3Rpdml0eS5pbWFnZX1gfSBhbHQ9e2FjdGl2aXR5Lm5hbWV9IC8+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj57YWN0aXZpdHkubmFtZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZ2UtcmFuZ2VcIj57J2FnZSAnICsgYWN0aXZpdHkuYWdlRnJvbSArICcgLSAnICsgYWN0aXZpdHkuYWdlVG99PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgeyBwcm9wcy5jYXRlZ29yeSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9jYXRpb25cIj48c3BhbiBjbGFzc05hbWU9e3RydW5jYXRlU3RyaW5nKGFjdGl2aXR5Lm1lZGl1bSl9PnthY3Rpdml0eS5tZWRpdW19PC9zcGFuPjwvZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9jYXRpb25cIj57dHJ1bmNhdGVTdHJpbmcoYWN0aXZpdHkuY2F0ZWdvcnkpfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvTGF6eUxvYWQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgLm5vdW5kZXJsaW5lIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC1ncmlkLXRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdQYXl0b25lIE9uZScsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMGVtO1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQtZ3JpZCB7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAzNTBweCk7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGdyaWQtcm93LWdhcDogNDBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgd2lkdGg6IDM1MHB4O1xuICAgICAgICAgIGhlaWdodDogMzQwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsMC4yKSwgMHB4IDVweCA4cHggMHB4IHJnYmEoMCwwLDAsMC4xNCksIDBweCAxcHggMTRweCAwcHggcmdiYSgwLDAsMCwwLjEyKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkIDpob3ZlciB7XG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDZweCA2cHggLTNweCByZ2JhKDAsMCwwLDAuMiksIDBweCAxMHB4IDE0cHggMXB4IHJnYmEoMCwwLDAsMC4xNCksIDBweCA0cHggMThweCAzcHggcmdiYSgwLDAsMCwwLjEyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkLWltYWdlIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgd2lkdGg6IDM1MHB4O1xuICAgICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC1jb250ZW50IHtcbiAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5jYXJkLWZvb3RlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtN3B4O1xuICAgICAgICAgIGNvbG9yOiAjMGIzMzRkO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvY2F0aW9uIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5jbG9zZSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTE1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLldlYnNpdGUge1xuICAgICAgICAgIGNvbG9yOiBUZWFsO1xuICAgICAgICB9XG5cbiAgICAgICAgLkFwcCB7XG4gICAgICAgICAgY29sb3I6IE5hdnk7XG4gICAgICAgIH1cblxuICAgICAgICAuWW91dHViZSB7XG4gICAgICAgICAgY29sb3I6IEZpcmVCcmljaztcbiAgICAgICAgfVxuXG4gICAgICAgIC5Qb2RjYXN0IHtcbiAgICAgICAgICBjb2xvcjogRGFya01hZ2VudGE7XG4gICAgICAgIH1cblxuICAgICAgICAuTGl2ZXN0cmVhbSB7XG4gICAgICAgICAgY29sb3I6IERhcmtTbGF0ZUJsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTEzMHB4KSB7XG4gICAgICAgICAgLmNhcmQtZ3JpZCB7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAzNTBweCk7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcblxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgLmNhcmQtZ3JpZCB7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAzNTBweCk7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FyZC1ncmlkLXRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGl2aXR5TGlzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/activityList.js\n");

/***/ })

})