(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "397f735c1e1fa46b6d74":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! exports provided: fixedZero, getTimeDistance, getPlainNode, digitUppercase, getRoutes, isUrl, randStr, deepClone, clone, isObjectValueEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixedZero", function() { return fixedZero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeDistance", function() { return getTimeDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlainNode", function() { return getPlainNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "digitUppercase", function() { return digitUppercase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRoutes", function() { return getRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUrl", function() { return isUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randStr", function() { return randStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepClone", function() { return deepClone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObjectValueEqual", function() { return isObjectValueEqual; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "da010f21fea25912dd9e");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


function fixedZero(val) {
  return val * 1 < 10 ? "0".concat(val) : val;
}
function getTimeDistance(type) {
  var now = new Date();
  var oneDay = 1000 * 60 * 60 * 24;

  if (type === 'today') {
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    return [moment__WEBPACK_IMPORTED_MODULE_0___default()(now), moment__WEBPACK_IMPORTED_MODULE_0___default()(now.getTime() + (oneDay - 1000))];
  }

  if (type === 'week') {
    var day = now.getDay();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);

    if (day === 0) {
      day = 6;
    } else {
      day -= 1;
    }

    var beginTime = now.getTime() - day * oneDay;
    return [moment__WEBPACK_IMPORTED_MODULE_0___default()(beginTime), moment__WEBPACK_IMPORTED_MODULE_0___default()(beginTime + (7 * oneDay - 1000))];
  }

  if (type === 'month') {
    var year = now.getFullYear();
    var month = now.getMonth();
    var nextDate = moment__WEBPACK_IMPORTED_MODULE_0___default()(now).add(1, 'months');
    var nextYear = nextDate.year();
    var nextMonth = nextDate.month();
    return [moment__WEBPACK_IMPORTED_MODULE_0___default()("".concat(year, "-").concat(fixedZero(month + 1), "-01 00:00:00")), moment__WEBPACK_IMPORTED_MODULE_0___default()(moment__WEBPACK_IMPORTED_MODULE_0___default()("".concat(nextYear, "-").concat(fixedZero(nextMonth + 1), "-01 00:00:00")).valueOf() - 1000)];
  }

  if (type === 'year') {
    var _year = now.getFullYear();

    return [moment__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_year, "-01-01 00:00:00")), moment__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_year, "-12-31 23:59:59"))];
  }
}
function getPlainNode(nodeList) {
  var parentPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var arr = [];
  nodeList.forEach(function (node) {
    var item = node;
    item.path = "".concat(parentPath, "/").concat(item.path || '').replace(/\/+/g, '/');
    item.exact = true;

    if (item.children && !item.component) {
      arr.push.apply(arr, _toConsumableArray(getPlainNode(item.children, item.path)));
    } else {
      if (item.children && item.component) {
        item.exact = false;
      }

      arr.push(item);
    }
  });
  return arr;
}
function digitUppercase(n) {
  var fraction = ['角', '分'];
  var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
  var unit = [['元', '万', '亿'], ['', '拾', '佰', '仟']];
  var num = Math.abs(n);
  var s = '';
  fraction.forEach(function (item, index) {
    s += (digit[Math.floor(num * 10 * Math.pow(10, index)) % 10] + item).replace(/零./, '');
  });
  s = s || '整';
  num = Math.floor(num);

  for (var i = 0; i < unit[0].length && num > 0; i += 1) {
    var p = '';

    for (var j = 0; j < unit[1].length && num > 0; j += 1) {
      p = digit[num % 10] + unit[1][j] + p;
      num = Math.floor(num / 10);
    }

    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
  }

  return s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
}

function getRelation(str1, str2) {
  if (str1 === str2) {
    console.warn('Two path are equal!'); // eslint-disable-line
  }

  var arr1 = str1.split('/');
  var arr2 = str2.split('/');

  if (arr2.every(function (item, index) {
    return item === arr1[index];
  })) {
    return 1;
  } else if (arr1.every(function (item, index) {
    return item === arr2[index];
  })) {
    return 2;
  }

  return 3;
}

function getRenderArr(routes) {
  var renderArr = [];
  renderArr.push(routes[0]);

  var _loop = function _loop(i) {
    var isAdd = false; // 是否包含

    isAdd = renderArr.every(function (item) {
      return getRelation(item, routes[i]) === 3;
    }); // 去重

    renderArr = renderArr.filter(function (item) {
      return getRelation(item, routes[i]) !== 1;
    });

    if (isAdd) {
      renderArr.push(routes[i]);
    }
  };

  for (var i = 1; i < routes.length; i += 1) {
    _loop(i);
  }

  return renderArr;
}
/**
 * Get router routing configuration
 * { path:{name,...param}}=>Array<{name,path ...param}>
 * @param {string} path
 * @param {routerData} routerData
 */


function getRoutes(path, routerData) {
  var routes = Object.keys(routerData).filter(function (routePath) {
    return routePath.indexOf(path) === 0 && routePath !== path;
  }); // Replace path to '' eg. path='user' /user/name => name

  routes = routes.map(function (item) {
    return item.replace(path, '');
  }); // Get the route to be rendered to remove the deep rendering

  var renderArr = getRenderArr(routes); // Conversion and stitching parameters

  var renderRoutes = renderArr.map(function (item) {
    var exact = !routes.some(function (route) {
      return route !== item && getRelation(route, item) === 1;
    });
    return _objectSpread({}, routerData["".concat(path).concat(item)], {
      key: "".concat(path).concat(item),
      path: "".concat(path).concat(item),
      exact: exact
    });
  });
  return renderRoutes;
}
/* eslint no-useless-escape:0 */

var reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g;
function isUrl(path) {
  return reg.test(path);
}
function randStr(len) {
  return Math.random().toString(36).substr(-len);
}
/**
 * deepclone
 */

function deepClone(source) {
  if (!source && _typeof(source) !== 'object') {
    throw new Error('error arguments', 'shallowClone');
  }

  var targetObj = source.constructor === Array ? [] : {};

  for (var keys in source) {
    if (Object.prototype.hasOwnProperty.call(source, keys)) {
      if (source[keys] && _typeof(source[keys]) === 'object') {
        targetObj[keys] = source[keys].constructor === Array ? [] : {};
        targetObj[keys] = deepClone(source[keys]);
      } else {
        targetObj[keys] = source[keys];
      }
    }
  }

  return targetObj;
}
function clone(item) {
  if (!item) {
    return item;
  } // null, undefined values check


  var types = [Number, String, Boolean];
  var result; // normalizing primitives if someone did new String('aaa'), or new Number('444');

  types.forEach(function (type) {
    if (item instanceof type) {
      result = type(item);
    }
  });

  if (typeof result === 'undefined') {
    if (Object.prototype.toString.call(item) === '[object Array]') {
      result = [];
      item.forEach(function (child, index) {
        result[index] = clone(child);
      });
    } else if (_typeof(item) === 'object') {
      // testing that this is DOM
      if (item.nodeType && typeof item.cloneNode === 'function') {
        var _result = item.cloneNode(true);
      } else if (!item.prototype) {
        // check that this is a literal
        if (item instanceof Date) {
          result = new Date(item);
        } else {
          // it is an object literal
          result = {};

          for (var i in item) {
            if (item[i]) {
              result[i] = clone(item[i]);
            }
          }
        }
      } else if (false) {} else {
        result = item;
      }
    } else {
      result = item;
    }
  }

  return result;
}
function isObjectValueEqual(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a === b;
  }

  if (a && b) {
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    if (aProps.length !== bProps.length) {
      return false;
    }

    for (var i = 0; i < aProps.length; i += 1) {
      var propName = aProps[i];

      if (Object.prototype.toString(a[propName]) === '[Object Object]' || Object.prototype.toString(b[propName]) === '[Object Object]') {
        isObjectValueEqual(a[propName], b[propName]);
      }

      if (a[propName] !== b[propName]) {
        return false;
      }
    }
  } else {
    return false;
  }

  return true;
}

/***/ }),

/***/ "8df43fb3a99386ccf0de":
/*!******************************!*\
  !*** ./src/utils/request.js ***!
  \******************************/
/*! exports provided: default, requestWithExcal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestWithExcal", function() { return requestWithExcal; });
/* harmony import */ var antd_lib_notification_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/notification/style */ "e26988fab971d495d114");
/* harmony import */ var antd_lib_notification_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_notification_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/notification */ "02082421d7c858f33441");
/* harmony import */ var antd_lib_notification__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_notification__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dva_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dva/fetch */ "d082b384eed4ada83776");
/* harmony import */ var dva_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dva_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dva_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dva/router */ "d20ee11348d9f986110a");
/* harmony import */ var dva_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dva_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/main */ "ff61d1fd4701b65595a2");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "397f735c1e1fa46b6d74");



function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  antd_lib_notification__WEBPACK_IMPORTED_MODULE_1___default.a.error({
    message: "\u8BF7\u6C42\u9519\u8BEF ".concat(response.status, ": ").concat(response.url),
    description: response.statusText
  });

  var error = new Error(response.statusText);
  error.response = response;
  throw error;
}
/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */


function request(url, options) {
  var AUTH_TOKEN = localStorage.getItem('token');
  var appId = localStorage.getItem('appId');
  var defaultOptions = {
    credentials: 'include'
  };

  var newOptions = _objectSpread({}, defaultOptions, options);

  if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
    if (newOptions.body instanceof FormData) {
      newOptions.headers = _objectSpread({
        Accept: 'application/json',
        'Authorization': AUTH_TOKEN,
        appId: appId,
        // 'Content-Type': 'multipart/form-data',
        'Content-Type': 'application/json; charset=utf-8'
      }, newOptions.headers);
    } else {
      newOptions.headers = _objectSpread({
        Accept: 'application/json',
        appId: appId,
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': AUTH_TOKEN
      }, newOptions.headers);
      newOptions.body = JSON.stringify(newOptions.body);
    }
  }

  return dva_fetch__WEBPACK_IMPORTED_MODULE_2___default()(url, newOptions).then(checkStatus).then(function (response) {
    return response.json();
  }).then(function (res) {
    var _window = window,
        href = _window.location.href;
    var redirct = href.split('#')[1];

    if (res.data && res.data.code == 401) {
      var dispatch = _main__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch;

      if (redirct.indexOf('redirct') >= 1) {
        var redirctArr = redirct.split('?') || [];
        redirct = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getQueryString"])("redirct", redirctArr[redirctArr.length - 1]);
        redirct = decodeURI(escape(redirct)); //debugger;

        dispatch(dva_router__WEBPACK_IMPORTED_MODULE_3__["routerRedux"].push("/login?redirct=".concat(redirct)));
      } else {
        // redirct = decodeURI(escape(redirct))
        dispatch(dva_router__WEBPACK_IMPORTED_MODULE_3__["routerRedux"].push("/login?redirct=".concat(redirct)));
      }
    }

    return res;
  })["catch"](function (error) {
    if (error.code) {
      antd_lib_notification__WEBPACK_IMPORTED_MODULE_1___default.a.error({
        message: error.name,
        description: error.message
      });
    }

    if ('stack' in error && 'message' in error) {
      antd_lib_notification__WEBPACK_IMPORTED_MODULE_1___default.a.error({
        message: "\u8BF7\u6C42\u9519\u8BEF: ".concat(url),
        description: error.message
      });
    }

    return error;
  });
}
function requestWithExcal(url, options) {
  var AUTH_TOKEN = localStorage.getItem('token');
  var appId = localStorage.getItem('appId');
  var defaultOptions = {
    credentials: 'include'
  };

  var newOptions = _objectSpread({}, defaultOptions, options);

  if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
    if (newOptions.body instanceof FormData) {
      newOptions.headers = _objectSpread({
        Accept: 'application/json',
        'Authorization': AUTH_TOKEN,
        appId: appId,
        // 'Content-Type': 'multipart/form-data',
        'Content-Type': 'application/json; charset=utf-8'
      }, newOptions.headers);
    } else {
      newOptions.headers = _objectSpread({
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': AUTH_TOKEN,
        appId: appId
      }, newOptions.headers);
      newOptions.fileName = newOptions.body.fileName;
      delete newOptions.body.fileName;
      newOptions.body = JSON.stringify(newOptions.body);
    }
  }

  console.log(newOptions);
  return dva_fetch__WEBPACK_IMPORTED_MODULE_2___default()(url, newOptions).then(checkStatus) // .then(response =>response.json())
  .then(function (response) {
    if (response.status == 250) {
      return response.json().then(function (res) {
        return res;
      });
    }

    return response.blob().then(function (blob) {
      var url = window.URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = newOptions.fileName ? "".concat(newOptions.fileName, ".xlsx") : 'filename.xlsx';
      a.click();
    });
  })["catch"](function (error) {
    if (error.code) {
      antd_lib_notification__WEBPACK_IMPORTED_MODULE_1___default.a.error({
        message: error.name,
        description: error.message
      });
    }

    if ('stack' in error && 'message' in error) {
      antd_lib_notification__WEBPACK_IMPORTED_MODULE_1___default.a.error({
        message: "\u8BF7\u6C42\u9519\u8BEF: ".concat(url),
        description: error.message
      });
    }

    return error;
  });
}

/***/ }),

/***/ "a6f4efeb00136d939b9e":
/*!***************************************!*\
  !*** ./src/views/about/AboutView.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style */ "dba777ef9347f7e4b4b7");
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "c952ad067942d3b16204");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/button/style */ "b28d1f103e4a5b2e8ef8");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "55f6171b5a254025824d");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "8af190b70a6bc55c6f1b");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @utils/request */ "8df43fb3a99386ccf0de");





function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


 // const url = 'http://localhost:3000/'

var url = '/index';

var About =
/*#__PURE__*/
function (_React$Component) {
  _inherits(About, _React$Component);

  function About(props) {
    var _this;

    _classCallCheck(this, About);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(About).call(this, props));
    _this.state = {
      requestData: null
    };
    return _this;
  }

  _createClass(About, [{
    key: "queryData",
    value: function () {
      var _queryData = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_utils_request__WEBPACK_IMPORTED_MODULE_5__["default"])(url, {
                  method: 'GET',
                  body: {}
                });

              case 3:
                res = _context.sent;
                this.setState({
                  requestData: res
                });
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function queryData() {
        return _queryData.apply(this, arguments);
      }

      return queryData;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var requestData = this.state.requestData;
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "primary",
        onClick: function onClick() {
          _this2.queryData();
        }
      }, "fetch\u6D4B\u8BD5"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "wrap"
      }, requestData && requestData.map(function (item, index, arr) {
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, null, item);
      })));
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ })

}]);
//# sourceMappingURL=4a0242d09132000407907.js.map