module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("pdaC");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dpnd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CATEGORY_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getActivities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createActivity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getActivityById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return updateActivity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return deleteActivity; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slugify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("gb/s");
/* harmony import */ var react_slugify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slugify__WEBPACK_IMPORTED_MODULE_1__);


const BASE_URL = "https://discoverdoo.herokuapp.com"; // const BASE_URL = 'http://localhost:3000'
// const BASE_URL = 'https://www.discoverdoo.com'
// const ACTIVITY_DATA = []
// const CATEGORY_DATA = [
//   {id: 'c-00', name: 'All Activities'},
//   {id: 'c-12', name: 'Accademic'},
//   {id: 'c-01', name: 'Adventure Sports'},
//   {id: 'c-02', name: 'Attractions'},
//   {id: 'c-03', name: 'Art, Crafts and Cooking'},
//   {id: 'c-04', name: 'Birthday Parties'},
//   {id: 'c-05', name: 'Events'},
//   {id: 'c-06', name: 'Holiday Camps'},
//   {id: 'c-07', name: 'Parks and Skate Parks'},
//   {id: 'c-08', name: 'Performing Arts'},
//   {id: 'c-09', name: 'Play Centres'},
//   {id: 'c-10', name: 'Sport and Games'}, 
//   {id: 'c-11', name: 'Theme Parks and Water Parks'}
// ]
// export const CATEGORY_LIST = [
//   {value: 'c-00', label: 'All Activities'},
//   {value: 'c-12', label: 'Accademic'},
//   {value: 'c-01', label: 'Adventure Sports'},
//   {value: 'c-02', label: 'Art, Crafts and Cooking'},
//   {value: 'c-03', label: 'Attractions'},
//   {value: 'c-04', label: 'Birthday Parties'},
//   {value: 'c-05', label: 'Events'},
//   {value: 'c-06', label: 'Holiday Camps'},
//   {value: 'c-07', label: 'Parks and Skate Parks'},
//   {value: 'c-08', label: 'Performing Arts'},
//   {value: 'c-09', label: 'Play Centres'},
//   {value: 'c-10', label: 'Sport and Games'}, 
//   {value: 'c-11', label: 'Theme Parks and Water Parks'}
// ]

const CATEGORY_LIST = [{
  value: 'c-00',
  label: 'All activities'
}, {
  value: 'c-01',
  label: 'Academic'
}, {
  value: 'c-02',
  label: 'Arts and crafts'
}, {
  value: 'c-03',
  label: 'Cooking'
}, {
  value: 'c-04',
  label: 'Games'
}, {
  value: 'c-05',
  label: 'Music and dance'
}, {
  value: 'c-06',
  label: 'Outdoor'
}, {
  value: 'c-07',
  label: 'Sport and fitness'
}];
const getCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(CATEGORY_LIST); // reject('Cannot fetch category data')
    }, 20);
  });
};
const getActivities = () => {
  console.log(`${BASE_URL}/api/v1/activities`);
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${BASE_URL}/api/v1/activities`).then(res => res.data);
};
const createActivity = activity => {
  // activity.id = Math.random().toString(36).substr(2, 7)
  activity.id = react_slugify__WEBPACK_IMPORTED_MODULE_1___default()(activity.name);
  activity.promoted = false;
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${BASE_URL}/api/v1/activities`, activity).then(res => res.data);
};
const getActivityById = id => {
  console.log(id);
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${BASE_URL}/api/v1/activities/${id}`).then(res => res.data);
};
const updateActivity = activity => {
  //console.log(activity._id)
  activity.id = react_slugify__WEBPACK_IMPORTED_MODULE_1___default()(activity.name);
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch(`${BASE_URL}/api/v1/activities/${activity._id}`, activity).then(res => res.data);
};
const deleteActivity = id => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`${BASE_URL}/api/v1/activities/${id}`); // return axios.delete(`${BASE_URL}/api/v1/activities/${id}`).then(res => res.data)
};

/***/ }),

/***/ "gb/s":
/***/ (function(module, exports) {

module.exports = require("react-slugify");

/***/ }),

/***/ "pdaC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// CONCATENATED MODULE: ./components/edit.js


var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const Edit = props => {
  const router = Object(router_["useRouter"])();
  const defaultData = {
    name: '',
    description: '',
    image: '',
    ageFrom: '',
    ageTo: '',
    price: '',
    website: ''
  };
  const formData = props.initialData ? _objectSpread({}, props.initialData) : defaultData;
  const {
    0: form,
    1: setForm
  } = Object(external_react_["useState"])(formData);
  const {
    0: nameError,
    1: setNameError
  } = Object(external_react_["useState"])(false);
  const {
    0: descriptionError,
    1: setDescriptionError
  } = Object(external_react_["useState"])(false); // const [imageError, setImageError] = useState(false)

  const {
    0: ageFromError,
    1: setAgeFromError
  } = Object(external_react_["useState"])(false);
  const {
    0: ageToError,
    1: setAgeToError
  } = Object(external_react_["useState"])(false);
  const {
    0: priceError,
    1: setPriceError
  } = Object(external_react_["useState"])(false);
  const {
    0: websiteError,
    1: setWebsiteError
  } = Object(external_react_["useState"])(false);
  const {
    0: categoryError,
    1: setCategoryError
  } = Object(external_react_["useState"])(false);
  const {
    0: mediumError,
    1: setMediumError
  } = Object(external_react_["useState"])(false);

  const validate = () => {
    if (!form.name) {
      setNameError(true);
      return false;
    }

    if (!form.ageFrom) {
      setAgeFromError(true);
      return false;
    }

    if (!form.ageTo) {
      setAgeToError(true);
      return false;
    }

    if (!form.price) {
      setPriceError(true);
      return false;
    }

    if (!form.website) {
      setWebsiteError(true);
      return false;
    } // if (!form.image) {
    //   setImageError(true)
    //   return false
    // }


    if (!form.description) {
      setDescriptionError(true);
      return false;
    }

    if (!form.category) {
      setCategoryError(true);
      return false;
    }

    if (!form.medium) {
      setMediumError(true);
      return false;
    }

    return true;
  };

  const handleChange = event => {
    const target = event.target;
    const name = target.name;
    setForm(_objectSpread(_objectSpread({}, form), {}, {
      [name]: target.value
    }));
  };

  const {
    0: displayImage,
    1: setImageVisibility
  } = Object(external_react_["useState"])(true);

  const removeImage = () => {
    console.log("remove image");
    setImageVisibility(false);
    setForm(_objectSpread(_objectSpread({}, form), {}, {
      image: ''
    }));
  };

  const handleCategoryChange = event => {
    const {
      options
    } = event.target;
    const optionsLength = options.length;
    let value = [];

    for (let i = 0; i < optionsLength; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }

    setForm(_objectSpread(_objectSpread({}, form), {}, {
      category: value.toString()
    }));
  };

  const handleMediumChange = event => {
    const {
      options
    } = event.target;
    const optionsLength = options.length;
    let value = [];

    for (let i = 0; i < optionsLength; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }

    setForm(_objectSpread(_objectSpread({}, form), {}, {
      medium: value.toString()
    }));
  }; // const submitForm = () => {
  //   createActivity({...form}).then(() => {
  //     router.push('/my-activities')
  //   })
  // }
  // const submitForm = () => {
  //   props.handleFormSubmit({...form})
  // }


  const submitForm = () => {
    const isValid = validate();

    if (isValid) {
      props.handleFormSubmit(_objectSpread({}, form));
    }
  };

  const {
    0: image,
    1: setImage
  } = Object(external_react_["useState"])('doozone/tzgl9kjalula4brx0irl.png');
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(false);

  const uploadImage = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'doozone');
    setLoading(true);
    const res = await fetch('https://api.cloudinary.com/v1_1/jakepeg/image/upload', {
      method: 'POST',
      body: data
    });
    const file = await res.json();
    const newFileName = file.public_id + '.' + file.format;
    setImage(newFileName);
    setLoading(false);
    setImageVisibility(true);
    setForm(_objectSpread(_objectSpread({}, form), {}, {
      image: newFileName
    }));
  };

  return __jsx(external_react_default.a.Fragment, null, __jsx("div", {
    className: "jsx-3756628814" + " " + "contain top-space"
  }, __jsx("div", {
    className: "jsx-3756628814" + " " + "details-card"
  }, __jsx("div", {
    className: "jsx-3756628814" + " " + "card-header"
  }, __jsx("a", {
    href: "/",
    id: "back-btn",
    className: "jsx-3756628814"
  }, __jsx("img", {
    id: "arrow-left",
    src: "/arrow-left.svg",
    alt: "Go Back",
    className: "jsx-3756628814"
  }), __jsx("span", {
    className: "jsx-3756628814" + " " + "back"
  }, "BACK"))), __jsx("div", {
    className: "jsx-3756628814" + " " + "form-card-content"
  }, __jsx("h1", {
    className: "jsx-3756628814"
  }, "Edit activity"), __jsx("form", {
    className: "jsx-3756628814"
  }, __jsx("div", {
    className: "jsx-3756628814" + " " + "add-activity-form"
  }, __jsx("div", {
    className: "jsx-3756628814" + " " + "form-col"
  }, __jsx("div", {
    className: "jsx-3756628814" + " " + "form-group"
  }, __jsx("label", {
    htmlFor: "name",
    className: "jsx-3756628814"
  }, "Name"), __jsx("input", {
    onChange: handleChange,
    value: form.name,
    type: "text",
    id: "name",
    name: "name",
    "aria-describedby": "emailHelp",
    placeholder: "Activity name",
    className: "jsx-3756628814" + " " + "form-control"
  }), nameError ? __jsx("div", {
    className: "jsx-3756628814" + " " + "form-error"
  }, "enter a name") : null), __jsx("div", {
    className: "jsx-3756628814" + " " + "form-group"
  }, __jsx("label", {
    htmlFor: "ageFrom",
    className: "jsx-3756628814"
  }, "Age from"), __jsx("input", {
    onChange: handleChange,
    value: form.ageFrom,
    type: "text",
    id: "ageFrom",
    name: "ageFrom",
    placeholder: "age from",
    className: "jsx-3756628814" + " " + "form-control"
  }), ageFromError ? __jsx("div", {
    className: "jsx-3756628814" + " " + "form-error"
  }, "enter age from") : null), __jsx("div", {
    className: "jsx-3756628814" + " " + "form-group"
  }, __jsx("label", {
    htmlFor: "ageTo",
    className: "jsx-3756628814"
  }, "Age to"), __jsx("input", {
    onChange: handleChange,
    value: form.ageTo,
    type: "text",
    id: "ageTo",
    name: "ageTo",
    placeholder: "age to",
    className: "jsx-3756628814" + " " + "form-control"
  }), ageToError ? __jsx("div", {
    className: "jsx-3756628814" + " " + "form-error"
  }, "enter age to") : null), __jsx("div", {
    className: "jsx-3756628814" + " " + "form-group"
  }, __jsx("label", {
    htmlFor: "price",
    className: "jsx-3756628814"
  }, "Price"), __jsx("input", {
    onChange: handleChange,
    value: form.price,
    type: "text",
    id: "price",
    name: "price",
    placeholder: "Price",
    className: "jsx-3756628814" + " " + "form-control"
  }), priceError ? __jsx("div", {
    className: "jsx-3756628814" + " " + "form-error"
  }, "enter a price") : null), __jsx("div", {
    className: "jsx-3756628814" + " " + "form-group"
  }, __jsx("label", {
    htmlFor: "website",
    className: "jsx-3756628814"
  }, "Website"), __jsx("input", {
    onChange: handleChange,
    value: form.website,
    type: "text",
    id: "website",
    name: "website",
    placeholder: "Website",
    className: "jsx-3756628814" + " " + "form-control"
  }), websiteError ? __jsx("div", {
    className: "jsx-3756628814" + " " + "form-error"
  }, "enter a website") : null), __jsx("div", {
    className: "jsx-3756628814" + " " + "form-group"
  }, displayImage === false ? __jsx(external_react_default.a.Fragment, null, __jsx("label", {
    htmlFor: "file",
    className: "jsx-3756628814"
  }, "Image"), __jsx("input", {
    type: "file",
    name: "file",
    placeholder: "Upload an image",
    onChange: uploadImage,
    className: "jsx-3756628814"
  })) : null, __jsx("input", {
    value: external_js_cookie_default.a.get('sub'),
    type: "hidden",
    id: "userId",
    name: "userId",
    className: "jsx-3756628814"
  })), __jsx("div", {
    className: "jsx-3756628814" + " " + "form-group"
  }, loading ? __jsx("h3", {
    className: "jsx-3756628814"
  }, "LOADING IMAGE...") : __jsx("img", {
    src: `https://res.cloudinary.com/jakepeg/image/upload/v1593005651/${form.image}`,
    style: {
      width: '150px'
    },
    className: "jsx-3756628814"
  })), displayImage ? __jsx("p", {
    onClick: removeImage,
    className: "jsx-3756628814" + " " + "remove-image"
  }, "remove image") : null), __jsx("div", {
    className: "jsx-3756628814" + " " + "form-col"
  }, __jsx("div", {
    className: "jsx-3756628814" + " " + "form-group"
  }, __jsx("label", {
    htmlFor: "description",
    className: "jsx-3756628814"
  }, "Description"), __jsx("textarea", {
    onChange: handleChange,
    value: form.description,
    id: "description",
    name: "description",
    rows: "3",
    className: "jsx-3756628814" + " " + "form-control"
  }), descriptionError ? __jsx("div", {
    className: "jsx-3756628814" + " " + "form-error"
  }, "enter a description") : null), __jsx("div", {
    className: "jsx-3756628814" + " " + "form-group"
  }, __jsx("label", {
    htmlFor: "category",
    className: "jsx-3756628814"
  }, "Category"), __jsx("select", {
    onChange: handleCategoryChange,
    multiple: true,
    value: [form.category],
    id: "category",
    name: "category",
    className: "jsx-3756628814" + " " + "form-control"
  }, __jsx("option", {
    className: "jsx-3756628814"
  }, "Academic"), __jsx("option", {
    className: "jsx-3756628814"
  }, "Arts and crafts"), __jsx("option", {
    className: "jsx-3756628814"
  }, "Cooking"), __jsx("option", {
    className: "jsx-3756628814"
  }, "Games"), __jsx("option", {
    className: "jsx-3756628814"
  }, "Music and dance"), __jsx("option", {
    className: "jsx-3756628814"
  }, "Outdoor"), __jsx("option", {
    className: "jsx-3756628814"
  }, "Sport and fitness")), categoryError ? __jsx("div", {
    className: "jsx-3756628814" + " " + "form-error"
  }, "select a category") : null), __jsx("div", {
    className: "jsx-3756628814" + " " + "form-group"
  }, __jsx("label", {
    htmlFor: "medium",
    className: "jsx-3756628814"
  }, "Channel"), __jsx("select", {
    onChange: handleMediumChange,
    value: [form.medium],
    multiple: true,
    id: "medium",
    name: "medium",
    className: "jsx-3756628814" + " " + "form-control"
  }, __jsx("option", {
    className: "jsx-3756628814"
  }, "Website"), __jsx("option", {
    className: "jsx-3756628814"
  }, "Youtube"), __jsx("option", {
    className: "jsx-3756628814"
  }, "App")), mediumError ? __jsx("div", {
    className: "jsx-3756628814" + " " + "form-error"
  }, "select a channel") : null))), __jsx("button", {
    onClick: submitForm,
    type: "button",
    className: "jsx-3756628814" + " " + "btn btn-primary"
  }, "Update"))))), __jsx(style_default.a, {
    id: "3756628814"
  }, [".form-card-content.jsx-3756628814{padding:20px;}", ".add-activity-form.jsx-3756628814{margin:50px 50px 0 50px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", "@media (max-width:1100px){.add-activity-form.jsx-3756628814{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}", ".form-col.jsx-3756628814{-webkit-flex:1;-ms-flex:1;flex:1;}", ".form-group.jsx-3756628814{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".form-error.jsx-3756628814{width:60px;color:red;font-size:0.7rem;padding:3px 0 0 3px;}", "input.jsx-3756628814:not([type=\"submit\"]){font-size:1rem;margin-bottom:15px;padding:10px 20px;box-sizing:border-box;width:300px;}", "select.jsx-3756628814,textarea.jsx-3756628814{font-size:1rem;margin-bottom:15px;padding:10px 20px;box-sizing:border-box;width:300px;}", "h1.jsx-3756628814{margin-top:-35px;}", "label.jsx-3756628814{width:120px;}", "button.jsx-3756628814{margin:25px 0 25px 50px;}", "#description.jsx-3756628814{height:120px;}", "#category.jsx-3756628814{height:155px;}", "#medium.jsx-3756628814{height:80px;}", ".remove-image.jsx-3756628814{color:red;-webkit-text-decoration:underline;text-decoration:underline;font-size:0.8rem;cursor:pointer;}"]));
};

/* harmony default export */ var edit = (Edit);
// EXTERNAL MODULE: ./actions/index.js
var actions = __webpack_require__("dpnd");

// CONCATENATED MODULE: ./pages/activities/[id]/edit.js
var edit_jsx = external_react_default.a.createElement;

function edit_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class edit_EditActivity extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    edit_defineProperty(this, "HandleUpdateActivity", activity => {
      Object(actions["g" /* updateActivity */])(activity).then(updatedActivity => {
        router_default.a.push('/activities/[id]', `/activities/${activity.id}`);
      });
    });
  }

  static async getInitialProps({
    query
  }) {
    const activity = await Object(actions["e" /* getActivityById */])(query.id);
    return {
      activity
    };
  }

  render() {
    const {
      activity
    } = this.props;
    return edit_jsx(external_react_default.a.Fragment, null, edit_jsx(head_default.a, null, edit_jsx("title", null, "DiscoverDoo - Edit activity"), edit_jsx("meta", {
      name: "title",
      content: "DiscoverDoo fun finder"
    })), edit_jsx("div", {
      className: "container"
    }, edit_jsx(edit, {
      submitButton: "Update",
      initialData: activity,
      handleFormSubmit: this.HandleUpdateActivity
    })));
  }

}

/* harmony default export */ var _id_edit = __webpack_exports__["default"] = (edit_EditActivity);

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });