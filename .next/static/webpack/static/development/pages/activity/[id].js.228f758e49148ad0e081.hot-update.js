webpackHotUpdate("static/development/pages/activity/[id].js",{

/***/ "./actions/index.js":
/*!**************************!*\
  !*** ./actions/index.js ***!
  \**************************/
/*! exports provided: CATEGORY_LIST, getCategories, getActivities, createActivity, getActivityById, getActivitiesByCategory, updateActivity, deleteActivity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CATEGORY_LIST\", function() { return CATEGORY_LIST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCategories\", function() { return getCategories; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getActivities\", function() { return getActivities; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createActivity\", function() { return createActivity; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getActivityById\", function() { return getActivityById; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getActivitiesByCategory\", function() { return getActivitiesByCategory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateActivity\", function() { return updateActivity; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteActivity\", function() { return deleteActivity; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_slugify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slugify */ \"./node_modules/react-slugify/dist/slugify.js\");\n/* harmony import */ var react_slugify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slugify__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar BASE_URL = \"http://localhost:3001\"; // const BASE_URL = 'http://localhost:3000'\n// const BASE_URL = 'https://www.discoverdoo.com'\n// const ACTIVITY_DATA = []\n// const CATEGORY_DATA = [\n//   {id: 'c-00', name: 'All Activities'},\n//   {id: 'c-12', name: 'Accademic'},\n//   {id: 'c-01', name: 'Adventure Sports'},\n//   {id: 'c-02', name: 'Attractions'},\n//   {id: 'c-03', name: 'Art, Crafts and Cooking'},\n//   {id: 'c-04', name: 'Birthday Parties'},\n//   {id: 'c-05', name: 'Events'},\n//   {id: 'c-06', name: 'Holiday Camps'},\n//   {id: 'c-07', name: 'Parks and Skate Parks'},\n//   {id: 'c-08', name: 'Performing Arts'},\n//   {id: 'c-09', name: 'Play Centres'},\n//   {id: 'c-10', name: 'Sport and Games'}, \n//   {id: 'c-11', name: 'Theme Parks and Water Parks'}\n// ]\n// export const CATEGORY_LIST = [\n//   {value: 'c-00', label: 'All Activities'},\n//   {value: 'c-12', label: 'Accademic'},\n//   {value: 'c-01', label: 'Adventure Sports'},\n//   {value: 'c-02', label: 'Art, Crafts and Cooking'},\n//   {value: 'c-03', label: 'Attractions'},\n//   {value: 'c-04', label: 'Birthday Parties'},\n//   {value: 'c-05', label: 'Events'},\n//   {value: 'c-06', label: 'Holiday Camps'},\n//   {value: 'c-07', label: 'Parks and Skate Parks'},\n//   {value: 'c-08', label: 'Performing Arts'},\n//   {value: 'c-09', label: 'Play Centres'},\n//   {value: 'c-10', label: 'Sport and Games'}, \n//   {value: 'c-11', label: 'Theme Parks and Water Parks'}\n// ]\n\nvar CATEGORY_LIST = [{\n  value: 'c-00',\n  label: 'All activities'\n}, {\n  value: 'c-01',\n  label: 'Academic'\n}, {\n  value: 'c-02',\n  label: 'Art & Crafts'\n}, {\n  value: 'c-03',\n  label: 'Cooking'\n}, {\n  value: 'c-04',\n  label: 'Games'\n}, {\n  value: 'c-05',\n  label: 'Performing Arts'\n}, // {value: 'c-06', label: 'Outdoor'},\n{\n  value: 'c-07',\n  label: 'Sport & Fitness'\n}];\nvar getCategories = function getCategories() {\n  return new Promise(function (resolve, reject) {\n    setTimeout(function () {\n      resolve(CATEGORY_LIST); // reject('Cannot fetch category data')\n    }, 20);\n  });\n};\nvar getActivities = function getActivities() {\n  // console.log(`${BASE_URL}/api/v1/activities`)\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(BASE_URL, \"/api/v1/activities\")).then(function (res) {\n    return res.data;\n  });\n};\nvar createActivity = function createActivity(activity) {\n  // activity.id = Math.random().toString(36).substr(2, 7)\n  activity.id = react_slugify__WEBPACK_IMPORTED_MODULE_1___default()(activity.name);\n  activity.categorySlug = react_slugify__WEBPACK_IMPORTED_MODULE_1___default()(activity.category);\n  activity.promoted = false;\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(\"\".concat(BASE_URL, \"/api/v1/activities\"), activity).then(function (res) {\n    return res.data;\n  });\n};\nvar getActivityById = function getActivityById(id) {\n  // console.log(id)\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(BASE_URL, \"/api/v1/activities/\").concat(id)).then(function (res) {\n    return res.data;\n  });\n};\nvar getActivitiesByCategory = function getActivitiesByCategory(cat) {\n  console.log(cat);\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(BASE_URL, \"/api/v1/activitiesByCategory/\").concat(cat)).then(function (res) {\n    return res.data;\n  });\n};\nvar updateActivity = function updateActivity(activity) {\n  //console.log(activity._id)\n  activity.id = react_slugify__WEBPACK_IMPORTED_MODULE_1___default()(activity.name);\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch(\"\".concat(BASE_URL, \"/api/v1/activities/\").concat(activity._id), activity).then(function (res) {\n    return res.data;\n  });\n};\nvar deleteActivity = function deleteActivity(id) {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a[\"delete\"](\"\".concat(BASE_URL, \"/api/v1/activities/\").concat(id)); // return axios.delete(`${BASE_URL}/api/v1/activities/${id}`).then(res => res.data)\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb25zL2luZGV4LmpzPzc2OTkiXSwibmFtZXMiOlsiQkFTRV9VUkwiLCJwcm9jZXNzIiwiQ0FURUdPUllfTElTVCIsInZhbHVlIiwibGFiZWwiLCJnZXRDYXRlZ29yaWVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0IiwiZ2V0QWN0aXZpdGllcyIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJjcmVhdGVBY3Rpdml0eSIsImFjdGl2aXR5IiwiaWQiLCJzbHVnaWZ5IiwibmFtZSIsImNhdGVnb3J5U2x1ZyIsImNhdGVnb3J5IiwicHJvbW90ZWQiLCJwb3N0IiwiZ2V0QWN0aXZpdHlCeUlkIiwiZ2V0QWN0aXZpdGllc0J5Q2F0ZWdvcnkiLCJjYXQiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlQWN0aXZpdHkiLCJwYXRjaCIsIl9pZCIsImRlbGV0ZUFjdGl2aXR5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLHVCQUFqQixDLENBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLElBQU1DLGFBQWEsR0FBRyxDQUMzQjtBQUFDQyxPQUFLLEVBQUUsTUFBUjtBQUFnQkMsT0FBSyxFQUFFO0FBQXZCLENBRDJCLEVBRTNCO0FBQUNELE9BQUssRUFBRSxNQUFSO0FBQWdCQyxPQUFLLEVBQUU7QUFBdkIsQ0FGMkIsRUFHM0I7QUFBQ0QsT0FBSyxFQUFFLE1BQVI7QUFBZ0JDLE9BQUssRUFB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aWxlIjoiLi9hY3Rpb25zL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHNsdWdpZnkgZnJvbSAncmVhY3Qtc2x1Z2lmeSc7XG5cbmNvbnN0IEJBU0VfVVJMID0gcHJvY2Vzcy5lbnYuQkFTRV9VUkw7XG4vLyBjb25zdCBCQVNFX1VSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnXG4vLyBjb25zdCBCQVNFX1VSTCA9ICdodHRwczovL3d3dy5kaXNjb3ZlcmRvby5jb20nXG4vLyBjb25zdCBBQ1RJVklUWV9EQVRBID0gW11cbi8vIGNvbnN0IENBVEVHT1JZX0RBVEEgPSBbXG4vLyAgIHtpZDogJ2MtMDAnLCBuYW1lOiAnQWxsIEFjdGl2aXRpZXMnfSxcbi8vICAge2lkOiAnYy0xMicsIG5hbWU6ICdBY2NhZGVtaWMnfSxcbi8vICAge2lkOiAnYy0wMScsIG5hbWU6ICdBZHZlbnR1cmUgU3BvcnRzJ30sXG4vLyAgIHtpZDogJ2MtMDInLCBuYW1lOiAnQXR0cmFjdGlvbnMnfSxcbi8vICAge2lkOiAnYy0wMycsIG5hbWU6ICdBcnQsIENyYWZ0cyBhbmQgQ29va2luZyd9LFxuLy8gICB7aWQ6ICdjLTA0JywgbmFtZTogJ0JpcnRoZGF5IFBhcnRpZXMnfSxcbi8vICAge2lkOiAnYy0wNScsIG5hbWU6ICdFdmVudHMnfSxcbi8vICAge2lkOiAnYy0wNicsIG5hbWU6ICdIb2xpZGF5IENhbXBzJ30sXG4vLyAgIHtpZDogJ2MtMDcnLCBuYW1lOiAnUGFya3MgYW5kIFNrYXRlIFBhcmtzJ30sXG4vLyAgIHtpZDogJ2MtMDgnLCBuYW1lOiAnUGVyZm9ybWluZyBBcnRzJ30sXG4vLyAgIHtpZDogJ2MtMDknLCBuYW1lOiAnUGxheSBDZW50cmVzJ30sXG4vLyAgIHtpZDogJ2MtMTAnLCBuYW1lOiAnU3BvcnQgYW5kIEdhbWVzJ30sIFxuLy8gICB7aWQ6ICdjLTExJywgbmFtZTogJ1RoZW1lIFBhcmtzIGFuZCBXYXRlciBQYXJrcyd9XG4vLyBdXG5cbi8vIGV4cG9ydCBjb25zdCBDQVRFR09SWV9MSVNUID0gW1xuLy8gICB7dmFsdWU6ICdjLTAwJywgbGFiZWw6ICdBbGwgQWN0aXZpdGllcyd9LFxuLy8gICB7dmFsdWU6ICdjLTEyJywgbGFiZWw6ICdBY2NhZGVtaWMnfSxcbi8vICAge3ZhbHVlOiAnYy0wMScsIGxhYmVsOiAnQWR2ZW50dXJlIFNwb3J0cyd9LFxuLy8gICB7dmFsdWU6ICdjLTAyJywgbGFiZWw6ICdBcnQsIENyYWZ0cyBhbmQgQ29va2luZyd9LFxuLy8gICB7dmFsdWU6ICdjLTAzJywgbGFiZWw6ICdBdHRyYWN0aW9ucyd9LFxuLy8gICB7dmFsdWU6ICdjLTA0JywgbGFiZWw6ICdCaXJ0aGRheSBQYXJ0aWVzJ30sXG4vLyAgIHt2YWx1ZTogJ2MtMDUnLCBsYWJlbDogJ0V2ZW50cyd9LFxuLy8gICB7dmFsdWU6ICdjLTA2JywgbGFiZWw6ICdIb2xpZGF5IENhbXBzJ30sXG4vLyAgIHt2YWx1ZTogJ2MtMDcnLCBsYWJlbDogJ1BhcmtzIGFuZCBTa2F0ZSBQYXJrcyd9LFxuLy8gICB7dmFsdWU6ICdjLTA4JywgbGFiZWw6ICdQZXJmb3JtaW5nIEFydHMnfSxcbi8vICAge3ZhbHVlOiAnYy0wOScsIGxhYmVsOiAnUGxheSBDZW50cmVzJ30sXG4vLyAgIHt2YWx1ZTogJ2MtMTAnLCBsYWJlbDogJ1Nwb3J0IGFuZCBHYW1lcyd9LCBcbi8vICAge3ZhbHVlOiAnYy0xMScsIGxhYmVsOiAnVGhlbWUgUGFya3MgYW5kIFdhdGVyIFBhcmtzJ31cbi8vIF1cblxuZXhwb3J0IGNvbnN0IENBVEVHT1JZX0xJU1QgPSBbXG4gIHt2YWx1ZTogJ2MtMDAnLCBsYWJlbDogJ0FsbCBhY3Rpdml0aWVzJ30sXG4gIHt2YWx1ZTogJ2MtMDEnLCBsYWJlbDogJ0FjYWRlbWljJ30sXG4gIHt2YWx1ZTogJ2MtMDInLCBsYWJlbDogJ0FydCAmIENyYWZ0cyd9LFxuICB7dmFsdWU6ICdjLTAzJywgbGFiZWw6ICdDb29raW5nJ30sXG4gIHt2YWx1ZTogJ2MtMDQnLCBsYWJlbDogJ0dhbWVzJ30sXG4gIHt2YWx1ZTogJ2MtMDUnLCBsYWJlbDogJ1BlcmZvcm1pbmcgQXJ0cyd9LFxuICAvLyB7dmFsdWU6ICdjLTA2JywgbGFiZWw6ICdPdXRkb29yJ30sXG4gIHt2YWx1ZTogJ2MtMDcnLCBsYWJlbDogJ1Nwb3J0ICYgRml0bmVzcyd9XG5dXG5cbmV4cG9ydCBjb25zdCBnZXRDYXRlZ29yaWVzID0gKCkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmVzb2x2ZShDQVRFR09SWV9MSVNUKVxuICAgICAgLy8gcmVqZWN0KCdDYW5ub3QgZmV0Y2ggY2F0ZWdvcnkgZGF0YScpXG4gICAgfSwgMjApXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBnZXRBY3Rpdml0aWVzID0gKCkgPT4ge1xuICAvLyBjb25zb2xlLmxvZyhgJHtCQVNFX1VSTH0vYXBpL3YxL2FjdGl2aXRpZXNgKVxuICByZXR1cm4gYXhpb3MuZ2V0KGAke0JBU0VfVVJMfS9hcGkvdjEvYWN0aXZpdGllc2ApLnRoZW4ocmVzID0+IHJlcy5kYXRhKVxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlQWN0aXZpdHkgPSAoYWN0aXZpdHkpID0+IHtcbiAgLy8gYWN0aXZpdHkuaWQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgNylcbiAgYWN0aXZpdHkuaWQgPSBzbHVnaWZ5KGFjdGl2aXR5Lm5hbWUpXG4gIGFjdGl2aXR5LmNhdGVnb3J5U2x1ZyA9IHNsdWdpZnkoYWN0aXZpdHkuY2F0ZWdvcnkpXG4gIGFjdGl2aXR5LnByb21vdGVkID0gZmFsc2VcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYCR7QkFTRV9VUkx9L2FwaS92MS9hY3Rpdml0aWVzYCwgYWN0aXZpdHkpLnRoZW4ocmVzID0+IHJlcy5kYXRhKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0QWN0aXZpdHlCeUlkID0gKGlkKSA9PiB7XG4gIC8vIGNvbnNvbGUubG9nKGlkKVxuICByZXR1cm4gYXhpb3MuZ2V0KGAke0JBU0VfVVJMfS9hcGkvdjEvYWN0aXZpdGllcy8ke2lkfWApLnRoZW4ocmVzID0+IHJlcy5kYXRhKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0QWN0aXZpdGllc0J5Q2F0ZWdvcnkgPSAoY2F0KSA9PiB7XG4gIGNvbnNvbGUubG9nKGNhdClcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtCQVNFX1VSTH0vYXBpL3YxL2FjdGl2aXRpZXNCeUNhdGVnb3J5LyR7Y2F0fWApLnRoZW4ocmVzID0+IHJlcy5kYXRhKVxufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlQWN0aXZpdHkgPSAoYWN0aXZpdHkpID0+IHtcbiAgLy9jb25zb2xlLmxvZyhhY3Rpdml0eS5faWQpXG4gIGFjdGl2aXR5LmlkID0gc2x1Z2lmeShhY3Rpdml0eS5uYW1lKVxuICByZXR1cm4gYXhpb3MucGF0Y2goYCR7QkFTRV9VUkx9L2FwaS92MS9hY3Rpdml0aWVzLyR7YWN0aXZpdHkuX2lkfWAsIGFjdGl2aXR5KVxuICAudGhlbihyZXMgPT4gcmVzLmRhdGEpXG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVBY3Rpdml0eSA9IChpZCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAke0JBU0VfVVJMfS9hcGkvdjEvYWN0aXZpdGllcy8ke2lkfWApXG4gIC8vIHJldHVybiBheGlvcy5kZWxldGUoYCR7QkFTRV9VUkx9L2FwaS92MS9hY3Rpdml0aWVzLyR7aWR9YCkudGhlbihyZXMgPT4gcmVzLmRhdGEpXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./actions/index.js\n");

/***/ })

})