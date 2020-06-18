module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aIwK");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "aIwK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./actions/index.js
var actions = __webpack_require__("dpnd");

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// CONCATENATED MODULE: ./components/create.js


var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Create = props => {
  const router = Object(router_["useRouter"])();
  const defaultData = {
    name: '',
    description: '',
    image: '',
    ageFrom: '',
    ageTo: '',
    price: '',
    website: '',
    userId: external_js_cookie_default.a.get('sub')
  }; // const formData = defaultData

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
  } = Object(external_react_["useState"])(false);
  const {
    0: imageError,
    1: setImageError
  } = Object(external_react_["useState"])(false);
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
    }

    if (!form.image) {
      setImageError(true);
      return false;
    }

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

  const handleWebsiteChange = event => {
    const target = event.target;
    const name = target.name;
    const cleanWebsite = target.value.replace('https://', '').replace('http://', '');
    console.log(target);
    setForm(_objectSpread(_objectSpread({}, form), {}, {
      [name]: cleanWebsite
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
  };

  const submitForm = () => {
    const isValid = validate();

    if (isValid) {
      Object(actions["b" /* createActivity */])(_objectSpread({}, form)).then(() => {
        router.push('/my-activities');
      });
    }
  };

  const {
    0: image,
    1: setImage
  } = Object(external_react_["useState"])('');
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
    setImage(file.secure_url);
    setLoading(false);
    setForm(_objectSpread(_objectSpread({}, form), {}, {
      image: file.secure_url
    }));
  };

  return __jsx(external_react_default.a.Fragment, null, __jsx("div", {
    className: "jsx-4224210527" + " " + "contain top-space"
  }, __jsx("div", {
    className: "jsx-4224210527" + " " + "details-card"
  }, __jsx("div", {
    className: "jsx-4224210527" + " " + "card-header"
  }, __jsx("a", {
    href: "/",
    id: "back-btn",
    className: "jsx-4224210527"
  }, __jsx("img", {
    id: "arrow-left",
    src: "/arrow-left.svg",
    alt: "Go Back",
    className: "jsx-4224210527"
  }), __jsx("span", {
    className: "jsx-4224210527" + " " + "back"
  }, "BACK"))), __jsx("div", {
    className: "jsx-4224210527" + " " + "form-card-content"
  }, __jsx("h1", {
    className: "jsx-4224210527"
  }, "Add an activity"), __jsx("form", {
    className: "jsx-4224210527"
  }, __jsx("div", {
    className: "jsx-4224210527" + " " + "add-activity-form"
  }, __jsx("div", {
    className: "jsx-4224210527" + " " + "form-col"
  }, __jsx("div", {
    className: "jsx-4224210527" + " " + "form-group"
  }, __jsx("label", {
    htmlFor: "name",
    className: "jsx-4224210527"
  }, "Name"), __jsx("input", {
    value: form.name,
    onChange: handleChange,
    type: "text",
    id: "name",
    name: "name",
    required: true,
    "aria-describedby": "emailHelp",
    placeholder: "Activity name",
    className: "jsx-4224210527" + " " + "form-control"
  }), nameError ? __jsx("div", {
    className: "jsx-4224210527" + " " + "form-error"
  }, "enter a name") : null), __jsx("div", {
    className: "jsx-4224210527" + " " + "form-group"
  }, __jsx("label", {
    htmlFor: "ageFrom",
    className: "jsx-4224210527"
  }, "Age from"), __jsx("input", {
    onChange: handleChange,
    value: form.ageFrom,
    type: "number",
    id: "ageFrom",
    name: "ageFrom",
    required: true,
    placeholder: "age from",
    className: "jsx-4224210527" + " " + "form-control"
  }), ageFromError ? __jsx("div", {
    className: "jsx-4224210527" + " " + "form-error"
  }, "enter age from") : null), __jsx("div", {
    className: "jsx-4224210527" + " " + "form-group"
  }, __jsx("label", {
    htmlFor: "ageTo",
    className: "jsx-4224210527"
  }, "Age to"), __jsx("input", {
    onChange: handleChange,
    value: form.ageTo,
    type: "number",
    id: "ageTo",
    name: "ageTo",
    required: true,
    placeholder: "age to",
    className: "jsx-4224210527" + " " + "form-control"
  }), ageToError ? __jsx("div", {
    className: "jsx-4224210527" + " " + "form-error"
  }, "enter age to") : null), __jsx("div", {
    className: "jsx-4224210527" + " " + "form-group"
  }, __jsx("label", {
    htmlFor: "price",
    className: "jsx-4224210527"
  }, "Price"), __jsx("input", {
    onChange: handleChange,
    value: form.price,
    type: "text",
    id: "price",
    name: "price",
    required: true,
    placeholder: "Price",
    className: "jsx-4224210527" + " " + "form-control"
  }), priceError ? __jsx("div", {
    className: "jsx-4224210527" + " " + "form-error"
  }, "enter a price") : null), __jsx("div", {
    className: "jsx-4224210527" + " " + "form-group"
  }, __jsx("label", {
    htmlFor: "website",
    className: "jsx-4224210527"
  }, "Website"), __jsx("input", {
    onChange: handleWebsiteChange,
    value: form.website,
    type: "text",
    id: "website",
    name: "website",
    required: true,
    placeholder: "Website",
    className: "jsx-4224210527" + " " + "form-control"
  }), websiteError ? __jsx("div", {
    className: "jsx-4224210527" + " " + "form-error"
  }, "enter website") : null), __jsx("div", {
    className: "jsx-4224210527" + " " + "form-group"
  }, __jsx("label", {
    htmlFor: "file",
    className: "jsx-4224210527"
  }, "Image"), __jsx("input", {
    type: "file",
    name: "file",
    required: true,
    placeholder: "Upload an image",
    onChange: uploadImage,
    className: "jsx-4224210527"
  }), imageError ? __jsx("div", {
    className: "jsx-4224210527" + " " + "form-error"
  }, "provide an image") : null, __jsx("input", {
    value: form.userId,
    type: "hidden",
    id: "userId",
    name: "userId",
    className: "jsx-4224210527"
  })), __jsx("div", {
    className: "jsx-4224210527" + " " + "form-group"
  }, loading ? __jsx("h3", {
    className: "jsx-4224210527"
  }, "LOADING IMAGE...") : __jsx("img", {
    src: image,
    style: {
      width: '150px'
    },
    className: "jsx-4224210527"
  }))), __jsx("div", {
    className: "jsx-4224210527" + " " + "form-col"
  }, __jsx("div", {
    className: "jsx-4224210527" + " " + "form-group"
  }, __jsx("label", {
    htmlFor: "description",
    className: "jsx-4224210527"
  }, "Description"), __jsx("textarea", {
    onChange: handleChange,
    value: form.description,
    id: "description",
    name: "description",
    required: true,
    rows: "3",
    className: "jsx-4224210527" + " " + "form-control"
  }), descriptionError ? __jsx("div", {
    className: "jsx-4224210527" + " " + "form-error"
  }, "enter a description") : null), __jsx("div", {
    className: "jsx-4224210527" + " " + "form-group"
  }, __jsx("label", {
    htmlFor: "category",
    className: "jsx-4224210527"
  }, "Category"), __jsx("select", {
    onChange: handleCategoryChange,
    multiple: true,
    required: true,
    id: "category",
    name: "category",
    className: "jsx-4224210527" + " " + "form-control"
  }, __jsx("option", {
    className: "jsx-4224210527"
  }, "Academic"), __jsx("option", {
    className: "jsx-4224210527"
  }, "Arts and crafts"), __jsx("option", {
    className: "jsx-4224210527"
  }, "Cooking"), __jsx("option", {
    className: "jsx-4224210527"
  }, "Games"), __jsx("option", {
    className: "jsx-4224210527"
  }, "Music and dance"), __jsx("option", {
    className: "jsx-4224210527"
  }, "Outdoor"), __jsx("option", {
    className: "jsx-4224210527"
  }, "Sport and fitness")), categoryError ? __jsx("div", {
    className: "jsx-4224210527" + " " + "form-error"
  }, "select a category") : null), __jsx("div", {
    className: "jsx-4224210527" + " " + "form-group"
  }, __jsx("label", {
    htmlFor: "medium",
    className: "jsx-4224210527"
  }, "Channel"), __jsx("select", {
    onChange: handleMediumChange,
    multiple: true,
    required: true,
    id: "medium",
    name: "medium",
    className: "jsx-4224210527" + " " + "form-control"
  }, __jsx("option", {
    className: "jsx-4224210527"
  }, "Website"), __jsx("option", {
    className: "jsx-4224210527"
  }, "Youtube"), __jsx("option", {
    className: "jsx-4224210527"
  }, "App")), mediumError ? __jsx("div", {
    className: "jsx-4224210527" + " " + "form-error"
  }, "select a channel") : null))), __jsx("button", {
    onClick: submitForm,
    type: "button",
    className: "jsx-4224210527" + " " + "btn btn-primary"
  }, "Add Activity"))))), __jsx(style_default.a, {
    id: "4224210527"
  }, [".form-card-content.jsx-4224210527{padding:20px;}", ".add-activity-form.jsx-4224210527{margin:50px 50px 0 50px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", "@media (max-width:1100px){.add-activity-form.jsx-4224210527{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0;}}", ".form-col.jsx-4224210527{-webkit-flex:1;-ms-flex:1;flex:1;}", ".form-group.jsx-4224210527{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".form-error.jsx-4224210527{width:60px;color:red;font-size:0.7rem;padding:3px 0 0 3px;}", "input.jsx-4224210527:not([type=\"submit\"]){font-size:1rem;margin-bottom:15px;padding:10px 20px;box-sizing:border-box;width:300px;}", "select.jsx-4224210527,textarea.jsx-4224210527{font-size:1rem;margin-bottom:15px;padding:10px 20px;box-sizing:border-box;width:300px;}", "h1.jsx-4224210527{margin-top:-35px;}", "label.jsx-4224210527{width:120px;}", "button.jsx-4224210527{margin:25px 0 25px 50px;}", "#description.jsx-4224210527{height:120px;}", "#category.jsx-4224210527{height:155px;}", "#medium.jsx-4224210527{height:80px;}"]));
};

/* harmony default export */ var create = (Create);
// EXTERNAL MODULE: ./services/auth0.js
var auth0 = __webpack_require__("cFwr");

// CONCATENATED MODULE: ./pages/create.js

var create_jsx = external_react_default.a.createElement;



const CreatePage = () => create_jsx(external_react_default.a.Fragment, null, auth0["a" /* default */].isAuthenticated() && create_jsx(create, null), auth0["a" /* default */].isAuthenticated() === false && create_jsx("h1", null, "Please sign in to add activities"));

/* harmony default export */ var pages_create = __webpack_exports__["default"] = (CreatePage);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cFwr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pXxs");
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(auth0_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);


const CLIENT_URL = "https://discoverdoo.com"; // console

class Auth0 {
  constructor() {
    this.auth0 = new auth0_js__WEBPACK_IMPORTED_MODULE_0___default.a.WebAuth({
      domain: 'jakepeg.eu.auth0.com',
      clientID: '6w0luoKEKUH4QLOImluA81kNf3jLmWbr',
      // redirectUri: 'http://localhost:3000/callback',
      // redirectUri: 'https://discoverdoo.com/callback',
      redirectUri: `${CLIENT_URL}/callback`,
      responseType: 'token id_token',
      scope: 'openid profile'
    });
    this.login = this.login.bind(this);
    this.loginAddActivity = this.loginAddActivity.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          resolve();
        } else if (err) {
          reject(err);
          console.log(err);
        }
      });
    });
  }

  setSession(authResult) {
    let expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime()); //  localStorage.setItem('access_token', authResult.accessToken)

    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('user', authResult.idTokenPayload);
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('jwt', authResult.idToken);
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('expiresAt', expiresAt);
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('sub', authResult.idTokenPayload.sub);
    console.log(authResult);
  }

  logout() {
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove('user');
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove('jwt');
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove('expiresAt');
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove('sub');
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove('returnURL');
    this.auth0.logout({
      // returnTo: 'https://discoverdoo.com',
      returnTo: CLIENT_URL,
      clientID: '6w0luoKEKUH4QLOImluA81kNf3jLmWbr'
    });
  }

  login() {
    // Cookies.set('returnURL', CLIENT_URL)
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('returnURL', '/');
    this.auth0.authorize();
    console.log(CLIENT_URL);
  }

  loginAddActivity() {
    // Cookies.set('returnURL', `${CLIENT_URL}/create`)
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('returnURL', '/create');
    this.auth0.authorize();
  }

  isAuthenticated() {
    // console.log('isAuthenticated in auth0.js')
    const expiresAt = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.getJSON('expiresAt');
    return new Date().getTime() < expiresAt;
  }

}

const auth0Client = new Auth0();
/* harmony default export */ __webpack_exports__["a"] = (auth0Client);

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

/***/ "pXxs":
/***/ (function(module, exports) {

module.exports = require("auth0-js");

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });