(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!********************************************************!*\
  !*** multi whatwg-fetch babel-polyfill ./src/main.jsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! whatwg-fetch */"81466c1910d9b02d71b2");
__webpack_require__(/*! babel-polyfill */"a26e52c4218006ed1d2f");
module.exports = __webpack_require__(/*! ./src/main.jsx */"ff61d1fd4701b65595a2");


/***/ }),

/***/ "00202a98bb09eaf405bb":
/*!***********************************!*\
  !*** ./src/views/Thanos/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Thanos; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "8af190b70a6bc55c6f1b");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html2canvas */ "04d35588fc3deec75d6a");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




__webpack_require__(/*! ./index.less */ "6f7f073c76f73d5012e4");

var Thanos =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Thanos, _React$Component);

  function Thanos() {
    var _this;

    _classCallCheck(this, Thanos);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Thanos).call(this));
    _this.DEBUG = false;
    _this.REPETITION_COUNT = 2; // number of times each pixel is assigned to a canvas

    _this.NUM_FRAMES = 128;
    return _this;
  }

  _createClass(Thanos, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      /** === Below is just to bind the module and the DOM == */
      _toConsumableArray(document.querySelectorAll(".disintegration-target")).forEach(function ($elm) {
        $elm.addEventListener("click", function () {
          if ($elm.disintegrated) {
            return;
          }

          $elm.disintegrated = true;

          _this2.disintegrate($elm);
        });
      });
    }
    /**
     * Generates the individual subsets of pixels that are animated to create the effect
     * @param {HTMLCanvasElement} ctx
     * @param {number} count The higher the frame count, the less grouped the pixels will look - Google use 32, but for our elms we use 128 since we have images near the edges
     * @return {HTMLCanvasElement[]} Each canvas contains a subset of the original pixels
     */

  }, {
    key: "generateFrames",
    value: function generateFrames($canvas) {
      var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 32;
      var width = $canvas.width,
          height = $canvas.height;
      var ctx = $canvas.getContext("2d");
      var originalData = ctx.getImageData(0, 0, width, height);

      var imageDatas = _toConsumableArray(Array(count)).map(function (_, i) {
        return ctx.createImageData(width, height);
      }); // assign the pixels to a canvas
      // each pixel is assigned to 2 canvas', based on its x-position


      for (var x = 0; x < width; ++x) {
        for (var y = 0; y < height; ++y) {
          for (var i = 0; i < this.REPETITION_COUNT; ++i) {
            var dataIndex = Math.floor(count * (Math.random() + 2 * x / width) / 3);
            var pixelIndex = (y * width + x) * 4; // copy the pixel over from the original image

            for (var offset = 0; offset < 4; ++offset) {
              imageDatas[dataIndex].data[pixelIndex + offset] = originalData.data[pixelIndex + offset];
            }
          }
        }
      } // turn image datas into canvas'


      return imageDatas.map(function (data) {
        var $c = $canvas.cloneNode(true);
        $c.getContext("2d").putImageData(data, 0, 0);
        return $c;
      });
    }
    /**
     * Inserts a new element over an old one, hiding the old one
     */

  }, {
    key: "replaceElementVisually",
    value: function replaceElementVisually($old, $new) {
      var $parent = $old.offsetParent;
      $new.style.top = "".concat($old.offsetTop, "px");
      $new.style.left = "".concat($old.offsetLeft, "px");
      $new.style.width = "".concat($old.offsetWidth, "px");
      $new.style.height = "".concat($old.offsetHeight, "px");
      $parent.appendChild($new);
      $old.style.visibility = "hidden";
    }
    /**
     * Disintegrates an element
     * @param {HTMLElement} $elm
     */

  }, {
    key: "disintegrate",
    value: function disintegrate($elm) {
      var _this3 = this;

      html2canvas__WEBPACK_IMPORTED_MODULE_1___default()($elm).then(function ($canvas) {
        // create the container we'll use to replace the element with
        var $container = document.createElement("div");
        $container.classList.add("disintegration-container"); // setup the frames for animation

        var $frames = _this3.generateFrames($canvas, _this3.NUM_FRAMES);

        $frames.forEach(function ($frame, i) {
          $frame.style.transitionDelay = "".concat(1.35 * i / $frames.length, "s");
          $container.appendChild($frame);
        }); // then insert them into the DOM over the element

        _this3.replaceElementVisually($elm, $container); // then animate them


        $container.offsetLeft; // forces reflow, so CSS we apply below does transition

        if (!_this3.DEBUG) {
          // set the values the frame should animate to
          // note that this is done after reflow so the transitions trigger
          $frames.forEach(function ($frame) {
            var randomRadian = 2 * Math.PI * (Math.random() - 0.5);
            $frame.style.transform = "rotate(".concat(15 * (Math.random() - 0.5), "deg) translate(").concat(60 * Math.cos(randomRadian), "px, ").concat(30 * Math.sin(randomRadian), "px)\n    rotate(").concat(15 * (Math.random() - 0.5), "deg)");
            $frame.style.opacity = 0;
          });
        } else {
          $frames.forEach(function ($frame) {
            $frame.style.animation = "debug-pulse 1s ease ".concat($frame.style.transitionDelay, " infinite alternate");
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "disintegration-container-wrap"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item disintegration-target"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "data:image/png;base64,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",
        width: "96",
        height: "96"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Disintegrate me!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Click here to trigger the disintegration effect. It's shamelessly stolen from Google's effect when googling \"Thanos\"")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item disintegration-target"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "data:image/png;base64,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",
        width: "96",
        height: "96"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Disintegrate me!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Click here to trigger the disintegration effect. It's shamelessly stolen from Google's effect when googling \"Thanos\"")));
    }
  }]);

  return Thanos;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "042f3caad27f2c3abbbf":
/*!**********************************!*\
  !*** ./src/views/hook/index.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "b28d1f103e4a5b2e8ef8");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "55f6171b5a254025824d");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "8af190b70a6bc55c6f1b");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var Hook = function Hook() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(1),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var timer;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    timer = setInterval(function () {
      console.log(111, data);
    }, 1000);
    return function () {
      return clearInterval(timer);
    };
  }, [data]);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    onClick: function onClick() {
      setData(2);
    }
  }, "change"));
};

/* harmony default export */ __webpack_exports__["default"] = (Hook);

/***/ }),

/***/ "07f3901f30ac134729df":
/*!**********************************!*\
  !*** ./src/views/test/index.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Test; });
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "b28d1f103e4a5b2e8ef8");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "55f6171b5a254025824d");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "8af190b70a6bc55c6f1b");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _promise_browser_asap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../promise/browser-asap */ "a564f8b09de2e3839026");
/* harmony import */ var _promise_browser_asap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_promise_browser_asap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _promise_Promise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../promise/Promise */ "bdaf0b66ea5cfeefada2");
/* harmony import */ var _promise_Promise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_promise_Promise__WEBPACK_IMPORTED_MODULE_4__);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


 // import asap  from 'asap/raw'



var Test =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Test, _React$Component);

  function Test(props) {
    var _this;

    _classCallCheck(this, Test);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Test).call(this, props));
    _this.state = {
      newArr: [],
      count: 0
    };
    return _this;
  }

  _createClass(Test, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.testPromise();
      var newArr = [];

      for (var item = 0; item < 10; item++) {
        for (var i = 1; i <= item; i++) {
          if (Array.isArray(newArr[item])) {
            newArr[item].push("".concat(i, "*").concat(item, "=").concat(i * item));
          } else {
            newArr[item] = ["".concat(i, "*").concat(item, "=").concat(i * item)];
          }
        }
      }

      console.log(newArr);
      this.setState({
        newArr: newArr
      });
      this.returnPromise()["finally"](function () {
        debugger;
      });
    }
  }, {
    key: "testPromise",
    value: function testPromise() {
      new _promise_Promise__WEBPACK_IMPORTED_MODULE_4___default.a(function (resolve) {
        resolve();
      }).then(function () {
        console.log('Promise1');
      });
      _promise_browser_asap__WEBPACK_IMPORTED_MODULE_3___default()(function () {
        console.log('asap');
      });
      new _promise_Promise__WEBPACK_IMPORTED_MODULE_4___default.a(function (resolve) {
        resolve();
      }).then(function () {
        console.log('Promise2');
      });
      setTimeout(function () {
        console.log('setTimeout');
      }, 0);
    }
  }, {
    key: "testSetState",
    value: function testSetState() {
      var _this2 = this;

      this.setState({
        count: 1
      });
      console.log(111, this.state.count);
      new Promise(function (resolve) {
        resolve();
      }).then(function () {
        _this2.setState({
          count: 1
        });

        console.log(222, _this2.state.count);
      });
      this.setState(function (prevState) {
        count: prevState.count + 1;
      });
      console.log(333, this.state.count);
    }
  }, {
    key: "returnPromise",
    value: function returnPromise() {
      return Promise.resolve();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log(111);
      debugger;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var newArr = this.state.newArr;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, newArr.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          key: item
        }, item.map(function (item1) {
          return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
            key: item1
          }, item1, "  ");
        }));
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        type: "primary",
        onClick: function onClick() {
          return _this3.testSetState();
        }
      }, "setState\u6D4B\u8BD5"));
    }
  }]);

  return Test;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);



/***/ }),

/***/ "0ef39b99c776accd2301":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! exports provided: LenTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Table_TableSprate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Table/TableSprate */ "28d8211412be3b64eff8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LenTable", function() { return _Table_TableSprate__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ 1:
/*!******************************!*\
  !*** min-document (ignored) ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "1b25b660c84864270aeb":
/*!*************************************!*\
  !*** ./src/views/wallet/wallet.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WalletComponent; });
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row/style */ "430efd9ee93fab5ea3aa");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "ab77426700a64afb515f");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col/style */ "cce4e96b47a88eedc219");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "4634762afad890a7174e");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/button/style */ "b28d1f103e4a5b2e8ef8");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/button */ "55f6171b5a254025824d");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "8af190b70a6bc55c6f1b");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var dva__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dva */ "3a8d0c344d1f86a21c86");
/* harmony import */ var dva__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dva__WEBPACK_IMPORTED_MODULE_7__);







var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var WalletComponent = (_dec = Object(dva__WEBPACK_IMPORTED_MODULE_7__["connect"])(function (_ref) {
  var wallet = _ref.wallet;
  return {
    wallet: wallet.wallet,
    position: wallet.position
  };
}), _dec(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(WalletComponent, _React$Component);

  function WalletComponent() {
    _classCallCheck(this, WalletComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(WalletComponent).call(this));
  }

  _createClass(WalletComponent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          wallet = _this$props.wallet,
          position = _this$props.position;
      console.log(111, wallet);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, Object.keys(wallet).map(function (key) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
          key: key
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
          span: 12
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default.a, {
          type: "primary"
        }, key)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
          span: 12
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default.a, {
          type: "primary"
        }, wallet[key])));
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, position.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {
          key: index
        }, Object.keys(item).map(function (key) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
            key: key
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
            span: 12
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default.a, {
            type: "primary"
          }, key)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
            span: 12
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default.a, {
            type: "primary"
          }, wallet[key])));
        }));
      })));
    }
  }]);

  return WalletComponent;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component)) || _class);


/***/ }),

/***/ "1ea33c0fe0b37882290b":
/*!**************************************!*\
  !*** ./src/pub-sub/store/actions.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  addBook: function addBook(context, payload) {
    context.commit('addBook', payload);
  }
});

/***/ }),

/***/ "28d8211412be3b64eff8":
/*!*********************************************!*\
  !*** ./src/components/Table/TableSprate.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/spin/style */ "d9b296048a068290efe3");
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/spin */ "44205f4f15931773029f");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row/style */ "430efd9ee93fab5ea3aa");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/row */ "ab77426700a64afb515f");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_pagination_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/pagination/style */ "ada3e0fb9918a2aa6b05");
/* harmony import */ var antd_lib_pagination_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_pagination_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/pagination */ "926c292ca3bcee1b8fe4");
/* harmony import */ var antd_lib_pagination__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_pagination__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/icon/style */ "c099c4fc48cd9bb84110");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/icon */ "21700e306353b2e19c0b");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/checkbox/style */ "c3582b8f1a06e12bc499");
/* harmony import */ var antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/checkbox */ "1173f26215750d27bf53");
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "8af190b70a6bc55c6f1b");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Table_less__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Table.less */ "ea70886f17d361adf08b");
/* harmony import */ var _Table_less__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Table_less__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/utils */ "397f735c1e1fa46b6d74");
/* harmony import */ var _TableHeader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./TableHeader */ "6bd219a6004852596e72");
/* harmony import */ var _TableBody__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./TableBody */ "d1c4ef86de8f0d15a34f");











function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var LenTable =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LenTable, _React$Component);

  function LenTable(props) {
    var _this;

    _classCallCheck(this, LenTable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LenTable).call(this, props));
    _this.state = {
      columns: _this.props.columns || [],
      columnsLeft: [],
      columnsRight: [],
      dataSource: _this.props.dataSource,
      rowSelection: _this.props.rowSelection,
      selectedRowKeys: _this.props.rowSelection && _this.props.rowSelection.selectedRowKeys ? _this.props.rowSelection.selectedRowKeys : [],
      indeterminate: Array.isArray(_this.props.dataSource) && _this.props.rowSelection && Array.isArray(_this.props.rowSelection.selectedRowKeys) && _this.props.dataSource.length !== _this.props.rowSelection.selectedRowKeys.length && _this.props.rowSelection.selectedRowKeys.length > 0 ? true : false,
      selectAll: Array.isArray(_this.props.dataSource) && _this.props.rowSelection && Array.isArray(_this.props.rowSelection.selectedRowKeys) && _this.props.dataSource.length === _this.props.rowSelection.selectedRowKeys.length ? true : false,
      pagination: _this.props.pagination
    };
    return _this;
  }

  _createClass(LenTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.findFixedCol(); // const columns = deepClone(this.state.columns);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var columns = nextProps.columns,
          dataSource = nextProps.dataSource,
          rowSelection = nextProps.rowSelection,
          pagination = nextProps.pagination;

      if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_12__["isObjectValueEqual"])(columns, this.props.columns)) {
        this.setState({
          columns: columns || []
        });
      }

      if (rowSelection && Array.isArray(rowSelection.selectedRowKeys) && !Object(_utils_utils__WEBPACK_IMPORTED_MODULE_12__["isObjectValueEqual"])(rowSelection, this.props.rowSelection)) {
        this.setState({
          selectedRowKeys: rowSelection.selectedRowKeys
        }, function () {
          _this2.checkSelected();
        });
      }

      if (Array.isArray(dataSource) && !Object(_utils_utils__WEBPACK_IMPORTED_MODULE_12__["isObjectValueEqual"])(dataSource, this.props.dataSource)) {
        this.setState({
          dataSource: dataSource
        }, function () {
          _this2.checkSelected();
        });
      }

      if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_12__["isObjectValueEqual"])(pagination, this.props.pagination)) {
        this.setState({
          pagination: pagination
        });
      }
    }
  }, {
    key: "onBodyCheckChange",
    value: function onBodyCheckChange(e, index) {
      var _this3 = this;

      var selectedRowKeys = this.state.selectedRowKeys;
      var checked = e.target.checked; // 对应选中

      if (checked) {
        selectedRowKeys.push(index);
      } else {
        var currentIndex = selectedRowKeys.findIndex(function (selectedRowKey) {
          return selectedRowKey === index;
        });
        selectedRowKeys.splice(currentIndex, 1);
      }

      this.setState({
        selectedRowKeys: selectedRowKeys
      }, function () {
        _this3.doRowSelectionFun();

        _this3.checkSelected();
      });
    }
  }, {
    key: "onHeaderCheckChange",
    value: function onHeaderCheckChange() {
      var _this4 = this;

      var _this$state = this.state,
          indeterminate = _this$state.indeterminate,
          selectAll = _this$state.selectAll,
          dataSource = _this$state.dataSource;
      var selectedRowKeys = []; // 这两种情况都要全选中

      if (indeterminate || !selectAll) {
        this.setState({
          indeterminate: false,
          selectAll: true
        });

        if (Array.isArray(dataSource) && dataSource.length > 0) {
          selectedRowKeys = dataSource.map(function (data, index) {
            return index;
          });
        }

        this.setState({
          selectedRowKeys: selectedRowKeys
        }, function () {
          _this4.doRowSelectionFun();

          _this4.checkSelected();
        });
      } // 全不选


      if (selectAll) {
        this.setState({
          indeterminate: false,
          selectAll: false,
          selectedRowKeys: selectedRowKeys
        }, function () {
          _this4.doRowSelectionFun();

          _this4.checkSelected();
        });
      }
    }
  }, {
    key: "findFixedCol",
    value: function findFixedCol() {
      var _this5 = this;

      var columns = this.state.columns;
      var columnsLeft = [];
      var columnsRight = [];

      if (Array.isArray(columns) && columns.length > 0) {
        columns.forEach(function (column) {
          if (column.fixed && column.fixed === 'left') {
            columnsLeft.push(column);

            _this5.reSetColumns(column, 'left');
          }

          if (column.fixed && column.fixed === 'right') {
            columnsRight.push(column);

            _this5.reSetColumns(column, 'right');
          }
        });
      }

      this.setState({
        columnsRight: columnsRight,
        columnsLeft: columnsLeft
      });
    }
  }, {
    key: "reSetColumns",
    value: function reSetColumns(column, dirction) {
      var columns = this.state.columns;
      var currentIndex = columns.findIndex(function (col) {
        return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_12__["isObjectValueEqual"])(col, column);
      });

      if (currentIndex >= 0) {
        columns.splice(currentIndex, 1);

        if (dirction === 'left') {
          columns = [column].concat(_toConsumableArray(columns));
        } else {
          columns = [].concat(_toConsumableArray(columns), [column]);
        }
      }

      this.setState({
        columns: columns
      });
    }
  }, {
    key: "doRowSelectionFun",
    value: function doRowSelectionFun() {
      var _this$state2 = this.state,
          onChange = _this$state2.rowSelection.onChange,
          selectedRowKeys = _this$state2.selectedRowKeys,
          dataSource = _this$state2.dataSource;
      var selectedRows = [];

      if (typeof onChange === 'function') {
        selectedRows = Array.isArray(dataSource) && dataSource.length > 0 && dataSource.map(function (data, index) {
          var selectedRow = {};
          selectedRowKeys.forEach(function (selectedRowKey) {
            if (selectedRowKey === index) {
              selectedRow = data;
            }
          });
          return selectedRow;
        });
      }

      onChange(selectedRowKeys, selectedRows);
    }
  }, {
    key: "checkSelected",
    value: function checkSelected() {
      var _this$state3 = this.state,
          selectedRowKeys = _this$state3.selectedRowKeys,
          dataSource = _this$state3.dataSource;

      if (Array.isArray(dataSource) && Array.isArray(selectedRowKeys)) {
        var addCheckedData = dataSource.map(function (data, index) {
          var newData = _objectSpread({}, data);

          newData.checked = false;
          selectedRowKeys.forEach(function (selectedRowKey) {
            if (selectedRowKey === index) {
              newData.checked = true;
            }
          });
          return newData;
        });
        this.setState({
          dataSource: addCheckedData
        });
        this.setState({
          selectAll: !!(dataSource.length === selectedRowKeys.length)
        });
        this.setState({
          indeterminate: !!(selectedRowKeys.length && dataSource.length !== selectedRowKeys.length)
        });
      }
    } // 数据排序

  }, {
    key: "sortData",
    value: function sortData(dataIndex, type, sorterFun) {
      var dataSource = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_12__["deepClone"])(this.state.dataSource);
      var length = dataSource.length;

      for (var i = 0; i < length - 1; i += 1) {
        for (var j = i + 1; j < length; j += 1) {
          if (type === 'descend') {
            if (dataSource[i][dataIndex] < dataSource[j][dataIndex]) {
              var temp = dataSource[i];
              dataSource[i] = dataSource[j];
              dataSource[j] = temp;
            }
          } else if (dataSource[i][dataIndex] > dataSource[j][dataIndex]) {
            var _temp = dataSource[i];
            dataSource[i] = dataSource[j];
            dataSource[j] = _temp;
          }
        }
      }

      sorterFun(dataSource, type);
    }
  }, {
    key: "paginationChnage",
    value: function paginationChnage(page, pageSize) {
      var pagination = this.state.pagination;

      if (pagination && typeof pagination.onChange === 'function') {
        pagination.onChange(page, pageSize);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      var _this$state4 = this.state,
          columns = _this$state4.columns,
          columnsRight = _this$state4.columnsRight,
          columnsLeft = _this$state4.columnsLeft,
          dataSource = _this$state4.dataSource,
          rowSelection = _this$state4.rowSelection,
          indeterminate = _this$state4.indeterminate,
          selectedRowKeys = _this$state4.selectedRowKeys,
          selectAll = _this$state4.selectAll,
          pagination = _this$state4.pagination;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: _Table_less__WEBPACK_IMPORTED_MODULE_11___default.a['len-table-wrap']
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default.a, {
        spinning: false
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: _Table_less__WEBPACK_IMPORTED_MODULE_11___default.a['table-header']
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_TableHeader__WEBPACK_IMPORTED_MODULE_13__["default"], {
        columns: columns,
        columnsLeft: columnsLeft,
        rowSelection: rowSelection,
        dataSource: dataSource,
        indeterminate: indeterminate,
        selectAll: selectAll,
        sortData: function sortData(dataIndex, type, sorter) {
          _this6.sortData(dataIndex, type, sorter);
        },
        onHeaderCheckChange: function onHeaderCheckChange() {
          _this6.onHeaderCheckChange();
        }
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: _Table_less__WEBPACK_IMPORTED_MODULE_11___default.a['table-body']
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_TableBody__WEBPACK_IMPORTED_MODULE_14__["default"], {
        columns: columns,
        dataSource: dataSource,
        columnsLeft: columnsLeft,
        rowSelection: rowSelection,
        onBodyCheckChange: function onBodyCheckChange(e, index) {
          _this6.onBodyCheckChange(e, index);
        }
      })), columnsLeft.length > 0 ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: [_Table_less__WEBPACK_IMPORTED_MODULE_11___default.a['table-body'], _Table_less__WEBPACK_IMPORTED_MODULE_11___default.a['fixed-left']].join(' ')
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("table", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tr", null, (rowSelection ? [react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
        indeterminate: indeterminate,
        onChange: function onChange() {
          _this6.onHeaderCheckChange();
        },
        checked: selectAll
      }))] : []).concat(columnsLeft.map(function (column) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
          key: column.key
        }, typeof column.sorter === 'function' ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: _Table_less__WEBPACK_IMPORTED_MODULE_11___default.a.sorterwrap
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", null, column.title), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: _Table_less__WEBPACK_IMPORTED_MODULE_11___default.a.sortercolwrap
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: _Table_less__WEBPACK_IMPORTED_MODULE_11___default.a.sortericonwrap
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_7___default.a, {
          type: "caret-up",
          onClick: function onClick() {
            _this6.sortData(column.dataIndex, 'ascend', column.sorter);
          }
        })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: _Table_less__WEBPACK_IMPORTED_MODULE_11___default.a.sortericonwrap
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_7___default.a, {
          type: "caret-down",
          onClick: function onClick() {
            _this6.sortData(column.dataIndex, 'descend', column.sorter);
          }
        })))) : column.title);
      })))), Array.isArray(dataSource) && dataSource.length > 0 ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tbody", null, dataSource.map(function (data, index) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tr", {
          key: data.key ? data.key : index
        }, (rowSelection ? [react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
          onChange: function onChange(e) {
            _this6.onBodyCheckChange(e, index);
          },
          checked: data.checked
        }))] : []).concat(columnsLeft.map(function (column) {
          return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
            key: column.key
          }, typeof column.render === 'function' ? column.render(data[column.dataIndex], data, index) : data[column.dataIndex]);
        })));
      })) : null)) : null, columnsRight.length > 0 ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: [_Table_less__WEBPACK_IMPORTED_MODULE_11___default.a['table-body'], _Table_less__WEBPACK_IMPORTED_MODULE_11___default.a['fixed-right']].join(' ')
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("table", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tr", null, columnsRight.map(function (column) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
          key: column.key
        }, typeof column.sorter === 'function' ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: _Table_less__WEBPACK_IMPORTED_MODULE_11___default.a.sorterwrap
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", null, column.title), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: _Table_less__WEBPACK_IMPORTED_MODULE_11___default.a.sortercolwrap
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: _Table_less__WEBPACK_IMPORTED_MODULE_11___default.a.sortericonwrap
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_7___default.a, {
          type: "caret-up",
          onClick: function onClick() {
            _this6.sortData(column.dataIndex, 'ascend', column.sorter);
          }
        })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: _Table_less__WEBPACK_IMPORTED_MODULE_11___default.a.sortericonwrap
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_7___default.a, {
          type: "caret-down",
          onClick: function onClick() {
            _this6.sortData(column.dataIndex, 'descend', column.sorter);
          }
        })))) : column.title);
      }))), Array.isArray(dataSource) && dataSource.length > 0 ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tbody", null, dataSource.map(function (data, index) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tr", {
          key: data.key ? data.key : index
        }, columnsRight.map(function (column) {
          return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
            key: column.key
          }, typeof column.render === 'function' ? column.render(data[column.dataIndex], data, index) : data[column.dataIndex]);
        }));
      })) : null)) : null, Array.isArray(dataSource) && dataSource.length > 0 ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_pagination__WEBPACK_IMPORTED_MODULE_5___default.a, _extends({}, pagination, {
        onChange: function onChange(page, pageSize) {
          _this6.paginationChnage(page, pageSize);
        },
        style: {
          "float": 'right'
        }
      }))) : null));
    }
  }]);

  return LenTable;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (LenTable);

/***/ }),

/***/ "2bfd7ba838699fe029b2":
/*!***********************************!*\
  !*** ./src/views/share/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Share; });
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "b28d1f103e4a5b2e8ef8");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "55f6171b5a254025824d");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "8af190b70a6bc55c6f1b");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "5709a8d97a91c1a85554");



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Share =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Share, _React$Component);

  function Share(props) {
    _classCallCheck(this, Share);

    return _possibleConstructorReturn(this, _getPrototypeOf(Share).call(this));
  }

  _createClass(Share, [{
    key: "shareFB",
    value: function shareFB() {
      window.open("https://www.facebook.com/sharer.php?u=www.baidu.com");
    }
  }, {
    key: "twitter",
    value: function twitter() {
      // window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${'share'} ${'shareUrl'}`)}`)
      window.open('http://twitter.com/share?url=' + encodeURIComponent('www.baidu.com') + '&text=' + encodeURIComponent('title')); // window.open('http://twitter.com/home/?status='.concat(encodeURIComponent(111)).concat(' ').concat(encodeURIComponent('www.baidu.com')))   
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3__["Helmet"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
        name: "twitter:card",
        content: "summary"
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
        name: "twitter:site",
        content: "@flickr"
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
        name: "twitter:title",
        content: "Small Island Developing States Photo Submission"
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
        name: "twitter:description",
        content: "View the album on Flickr."
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
        name: "twitter:image",
        content: "https://farm6.staticflickr.com/5510/14338202952_93595258ff_z.jpg"
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
        property: "og:image",
        content: "http://image.made-in-china.com/2f0j00sJdQPUDMngkI/Ce-Approved-Superfine-Synthetic-Graphite-Spheroidization-Grinding-Mill.jpg"
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
        name: "og:image",
        content: "http://www.menvscode.com/upload/41464238946737386.png"
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        type: "primary",
        onClick: function onClick() {
          return _this.shareFB();
        }
      }, "facebook"), "\xA0\xA0", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        type: "primary",
        onClick: function onClick() {
          return _this.twitter();
        }
      }, "twitter"), "\xA0\xA0", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        "class": "twitter-share-button",
        href: "https://twitter.com/intent/tweet?text=Hello%20world"
      }, "Tweet"));
    }
  }]);

  return Share;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);



/***/ }),

/***/ "33ed01da25201f9e6e76":
/*!*************************************!*\
  !*** ./src/components/Progress.jsx ***!
  \*************************************/
/*! exports provided: Progress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return Progress; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "8af190b70a6bc55c6f1b");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _progress_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./progress.less */ "fb31c45558b8ebb537fc");
/* harmony import */ var _progress_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_progress_less__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Progress =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Progress, _React$Component);

  function Progress(props) {
    _classCallCheck(this, Progress);

    return _possibleConstructorReturn(this, _getPrototypeOf(Progress).call(this, props));
  }

  _createClass(Progress, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-wrap"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        viewBox: "0 0 100 100"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        className: "ant-progress-circle-trail",
        d: "M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94",
        stroke: "#f3f3f3",
        strokeWidth: "6",
        fillOpacity: "0"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        className: "ant-progress-circle-path",
        d: "M 50,50 m 0,-47 a 47,47 0 1 0 0,94 a 47,47 0 1 0 0,-94",
        strokeLinecap: "round",
        stroke: "#108ee9",
        strokeWidth: "6",
        fillOpacity: "0"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "progress-text"
      }, "0%"));
    }
  }]);

  return Progress;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "36b697c0f0059d9db547":
/*!**********************************!*\
  !*** ./src/views/test/immer.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Test; });
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "b28d1f103e4a5b2e8ef8");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "55f6171b5a254025824d");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "8af190b70a6bc55c6f1b");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immer */ "01e2cd22dd17a35e4094");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/utils */ "397f735c1e1fa46b6d74");



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Test =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Test, _React$Component);

  function Test(props) {
    var _this;

    _classCallCheck(this, Test);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Test).call(this, props));
    _this.state = {
      done: false,
      val: {
        name: 'old'
      }
    };
    return _this;
  }

  _createClass(Test, [{
    key: "handleClick",
    value: function handleClick() {
      var newState = Object(immer__WEBPACK_IMPORTED_MODULE_3__["produce"])(this.state, function (draft) {
        draft.val.name = 'new';
      });
      console.log(newState, this.state, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["shallowEqual"])(newState, this.state));
      console.log(newState.val === this.state.val);
      this.setState(newState);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log('render');
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, this.state.val.name, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        type: "primary",
        onClick: function onClick() {
          return _this2.handleClick();
        }
      }, "immer\u6D4B\u8BD5"));
    }
  }]);

  return Test;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);



/***/ }),

/***/ "397f735c1e1fa46b6d74":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! exports provided: fixedZero, getTimeDistance, getPlainNode, digitUppercase, getRoutes, isUrl, randStr, deepClone, clone, isObjectValueEqual, shallowEqual */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowEqual", function() { return shallowEqual; });
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
} // +0 === -0; // js 打印true
// NaN === NaN; // js 打印false

function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (_typeof(objA) !== 'object' || objA === null || _typeof(objB) !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  } // Test for A's keys different from B.


  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ "3f9813bd58a9599260a2":
/*!********************************!*\
  !*** ./src/pub-sub/pub-sub.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PubSub; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PubSub =
/*#__PURE__*/
function () {
  function PubSub() {
    _classCallCheck(this, PubSub);

    // events里存放的是所有的具名事件
    this.events = {};
  } //  提供订阅功能


  _createClass(PubSub, [{
    key: "subscribe",
    value: function subscribe(event, callback) {
      var self = this;

      if (!self.events.hasOwnProperty(event)) {
        self.events[event] = [];
      } // 没有做去重


      return self.events[event].push(callback);
    } // 提供发布功能

  }, {
    key: "publish",
    value: function publish(event, data) {
      var self = this;

      if (!self.events.hasOwnProperty(event)) {
        return [];
      }

      return self.events[event].map(function (callback) {
        return callback(data);
      });
    }
  }]);

  return PubSub;
}();



/***/ }),

/***/ "4573fd42727860f4a96d":
/*!****************************************!*\
  !*** ./src/pub-sub/store/mutations.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  addBook: function addBook(state, payload) {
    state.bookList.push(payload);
    return state;
  }
});

/***/ }),

/***/ "4771c7d07a290bcf0da8":
/*!************************************!*\
  !*** ./src/views/resume/index.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/icon/style */ "c099c4fc48cd9bb84110");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/icon */ "21700e306353b2e19c0b");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "8af190b70a6bc55c6f1b");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.js */ "55e53a5ea3c84781d6b2");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.less */ "087405ba330b7215979f");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_4__);



// data



var MyResume = function MyResume() {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "myResume"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
    className: "basicInfo"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "\u5218\u5BBE"), "\xA0 \u524D\u7AEF\u5DE5\u7A0B\u5E08"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "socialInfo"
  }, _data_js__WEBPACK_IMPORTED_MODULE_3__["basicData"].map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
      type: item.icon
    }), "\xA0", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "javascript:;"
    }, item.title));
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "github"
  }), "\xA0", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://github.com/liubin915249126",
    target: "_blank"
  }, "github")))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
    className: "excellent"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    className: "sectionTitle"
  }, "\u4E2A\u4EBA\u4F18\u52BF"), _data_js__WEBPACK_IMPORTED_MODULE_3__["excellentData"].map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, index + 1, ":", item.title);
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
    className: "work"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    className: "sectionTitle"
  }, "\u5DE5\u4F5C\u7ECF\u5386"), _data_js__WEBPACK_IMPORTED_MODULE_3__["workData"].map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "workItem",
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "workTitle"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "bold"
    }, item.name, " - ", item.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "time"
    }, item.time)), item.jobs.map(function (item1, index1) {
      var _item1$techStack = item1.techStack,
          techStack = _item1$techStack === void 0 ? [] : _item1$techStack;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jobItem",
        key: index1
      }, index1 + 1, ": ", item1.title, item1.role && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jobRole"
      }, "- \u4E3B\u8981\u804C\u8D23: ", item1.role), techStack.length > 0 && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "techStack"
      }, "- \u6280\u672F\u6808: ", techStack.join(' | ')));
    }));
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
    className: "project"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    className: "sectionTitle"
  }, "\u4E3B\u8981\u9879\u76EE\u7ECF\u5386"), _data_js__WEBPACK_IMPORTED_MODULE_3__["projectData"].map(function (item, index) {
    var mainJobs = item.mainJobs,
        mainAchivements = item.mainAchivements,
        _item$techStack = item.techStack,
        techStack = _item$techStack === void 0 ? [] : _item$techStack;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "projectItem",
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "projectTitle"
    }, item.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "subTitle"
    }, "\u6280\u672F\u6808: "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, techStack.join(' | '))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "-- \u9879\u76EE\u80CC\u666F\u548C\u4E3B\u8981\u5DE5\u4F5C:"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "mainJobs"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "projectInfo"
    }, item.projectInfo), Array.isArray(mainJobs) && mainJobs.map(function (item, index) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "",
        key: index
      }, item);
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "-- \u4E3B\u8981\u6210\u5C31:"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "mainJobs"
    }, Array.isArray(mainAchivements) && mainAchivements.map(function (item, index) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "",
        key: index
      }, item);
    })));
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
    className: "tagWrap"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    className: "sectionTitle"
  }, "\u6BD5\u4E1A\u9662\u6821/\u8BED\u8A00\u6C34\u5E73"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "tag"
  }, "\u592A\u539F\u7406\u5DE5\u5927\u5B66: 211"), " \xA0", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "tag"
  }, "\u70ED\u80FD\u4E0E\u52A8\u529B\u5DE5\u7A0B"), " \xA0", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "tag"
  }, "\u82F1\u8BED CET-4 "))));
};

/* harmony default export */ __webpack_exports__["default"] = (MyResume);

/***/ }),

/***/ "4c9edeafc1df1d07f301":
/*!*********************************!*\
  !*** ./src/views/punsub/Pub.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pub; });
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "b28d1f103e4a5b2e8ef8");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "55f6171b5a254025824d");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "8af190b70a6bc55c6f1b");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pub_sub_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/pub-sub/store */ "ef605bb5a4a1e7ad1e17");



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Pub =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Pub, _React$Component);

  function Pub(props) {
    _classCallCheck(this, Pub);

    return _possibleConstructorReturn(this, _getPrototypeOf(Pub).call(this, props));
  }

  _createClass(Pub, [{
    key: "pub",
    value: function pub() {
      _pub_sub_store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch('addBook', {
        bookid: 203
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        onClick: function onClick() {
          _this.pub();
        }
      }, "\u53D1\u5E03"));
    }
  }]);

  return Pub;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);



/***/ }),

/***/ "52f5f6bcbcb3449bee20":
/*!***************************!*\
  !*** ./src/common/nav.js ***!
  \***************************/
/*! exports provided: componentLink, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentLink", function() { return componentLink; });
/* harmony import */ var _views_home_HomeView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @views/home/HomeView */ "c28dfd7c9b79a75f1ffc");
/* harmony import */ var _views_about_AboutView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @views/about/AboutView */ "a6f4efeb00136d939b9e");
/* harmony import */ var _views_timeLine_TimeLineView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @views/timeLine/TimeLineView */ "ed13d0969987be818423");
/* harmony import */ var _views_Thanos_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @views/Thanos/index.js */ "00202a98bb09eaf405bb");
/* harmony import */ var _views_punsub_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @views/punsub/index.js */ "61f74ceec3c37af70a26");
/* harmony import */ var _views_share__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @views/share */ "2bfd7ba838699fe029b2");
/* harmony import */ var _views_wallet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @views/wallet */ "9fb60ea5c94618f746a0");
/* harmony import */ var _views_hook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @views/hook */ "042f3caad27f2c3abbbf");
/* harmony import */ var _views_upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @views/upload */ "f096eec40047cc7cae4c");
/* harmony import */ var _views_test__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @views/test */ "07f3901f30ac134729df");
/* harmony import */ var _views_test_immer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @views/test/immer */ "36b697c0f0059d9db547");
/* harmony import */ var _views_test_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @views/test/state */ "cf9157284cc3de2ef765");
/* harmony import */ var _views_resume_index_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @views/resume/index.jsx */ "4771c7d07a290bcf0da8");











 // 简历


var componentLink = {
  main: _views_home_HomeView__WEBPACK_IMPORTED_MODULE_0__["default"],
  about: _views_about_AboutView__WEBPACK_IMPORTED_MODULE_1__["default"],
  timeline: _views_timeLine_TimeLineView__WEBPACK_IMPORTED_MODULE_2__["default"],
  thanos: _views_Thanos_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  punsub: _views_punsub_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  share: _views_share__WEBPACK_IMPORTED_MODULE_5__["default"],
  wallet: _views_wallet__WEBPACK_IMPORTED_MODULE_6__["default"],
  test: _views_test__WEBPACK_IMPORTED_MODULE_9__["default"],
  hook: _views_hook__WEBPACK_IMPORTED_MODULE_7__["default"],
  immer: _views_test_immer__WEBPACK_IMPORTED_MODULE_10__["default"],
  state: _views_test_state__WEBPACK_IMPORTED_MODULE_11__["default"],
  upload: _views_upload__WEBPACK_IMPORTED_MODULE_8__["default"],
  resume: _views_resume_index_jsx__WEBPACK_IMPORTED_MODULE_12__["default"]
};
var routerConfig = [{
  icon: 'user',
  name: '首页',
  url: 'main'
}, {
  icon: 'video-camera',
  name: '关于',
  url: 'about'
}, {
  icon: 'upload',
  name: '时间轴',
  url: 'timeline'
}, {
  icon: 'upload',
  name: '灭霸特效',
  url: 'thanos'
}, {
  icon: 'upload',
  name: '事件订阅',
  url: 'punsub'
}, {
  icon: 'upload',
  name: '分享社媒',
  url: 'share'
}, {
  icon: 'upload',
  name: 'ws推送',
  url: 'wallet'
}, {
  icon: 'upload',
  name: 'hook',
  url: 'hook'
}, {
  icon: 'upload',
  name: 'upload',
  url: 'upload'
}, {
  icon: 'contacts',
  name: 'resume',
  url: 'resume'
}, {
  icon: 'upload',
  name: '测试',
  url: 'test',
  hide: true,
  children: [{
    icon: 'upload',
    name: '测试',
    url: 'immer'
  }, {
    icon: 'upload',
    name: 'state测试',
    url: 'state'
  }]
}];

/* harmony default export */ __webpack_exports__["default"] = (routerConfig);

/***/ }),

/***/ "55e53a5ea3c84781d6b2":
/*!**********************************!*\
  !*** ./src/views/resume/data.js ***!
  \**********************************/
/*! exports provided: basicData, excellentData, workData, projectData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basicData", function() { return basicData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "excellentData", function() { return excellentData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "workData", function() { return workData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectData", function() { return projectData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "8af190b70a6bc55c6f1b");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // 基本信息

var basicData = [{
  title: 'len.liu0614@gmail.com',
  icon: 'mail'
}, {
  title: 'liubin-53',
  icon: 'wechat'
}, {
  title: '13030602110',
  icon: 'phone'
}]; // 优势

var excellentData = [{
  title: '平时工作中有注意补齐原生js相关概念与知识点, 计算机基础, 数据结构与算法, 网络相关还在持续学习当中.',
  content: ''
}, {
  title: '熟悉 React/Vue 全家桶, 维护过一整套的 UI 组件库, 承担了项⽬技术选型, 项⽬架构, 跨团队协同, 推⾏前端⼯程化, 会封装适⽤于团队项⽬的脚⼿架⼯具',
  content: ''
}, {
  title: '带过团队, 做过项目和技术 owner, 平时工作中比较有项目 owner 意识。',
  content: ''
}, {
  title: '具有较强的自学能力, 技术栈基本属于自己看文档学习到的, 有较强的问题解决能力, 能够快速定位问题, 通过搜索引擎找到解决方案.',
  content: ''
}, {
  title: '有过 PC/H5/混合开发 项目经验, 搭建过项目脚手架, 项目开发中善于利用技术提高开发效率.',
  content: ''
}, {
  title: '平时喜欢钻研技术, 逐步在了解和掌握后端技术栈和运维相关技术.',
  content: ''
}]; // 工作经历

var workData = [{
  name: '参与 SocialFi 项目',
  title: '项目制-前端开发',
  time: '2022.09 - 2023.09',
  jobs: [{
    title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://web3edu.xyz/profile"
    }, "web3 \u7684 dapp"), " \xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://alpha.talentre.com/home/referral"
    }, "web3 \u7684 talentre")),
    role: '项目的搭建, 框架的引入, ui组件库的主题改造, 合约的调用',
    techStack: ['Web3js', 'Material-Ui', 'Wagmi', 'React', 'Redux', 'React-Router']
  }, {
    title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u82E5\u5E72\u81EA\u7531\u804C\u4E1A\u63A5\u7684\u524D\u7AEF\u5F00\u53D1")
  }]
}, // bybit
{
  name: '上海亿锦 (bybit)',
  title: '前端开发',
  time: '2020.03 - 2022.09',
  jobs: [{
    title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u6838\u5FC3\u4EA4\u6613\u7AD9:\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://www.bybit.com/trade/inverse/BTCUSD"
    }, "\u53CD\u5411\u4EA4\u6613\u7AD9"), "\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://www.bybit.com/trade/usdt/BTCUSDT"
    }, "\u6B63\u5411\u4EA4\u6613\u7AD9"), "\xA0\u91CD\u6784, \u6027\u80FD\u4F18\u5316, \u4E1A\u52A1\u8FED\u4EE3."),
    role: '担任业务技术owner, 项目的搭建, 自研组件库的维护, 性能优化, 数据流管理, 网络请求封装',
    techStack: ['React/Redux', 'Webpack/Node', 'React-Router', 'ImmerJs', 'Less+Css-Modules']
  }, {
    title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u8FD0\u8425\u5E73\u53F0\u67B6\u6784, \u4E1A\u52A1\u8FED\u4EE3."),
    role: '整个业务线技术项目owner, 项目的搭建, 自研组件库的维护, 性能优化, 数据流管理, 网络请求封装.',
    techStack: ['React/Redux', 'Webpack/Node', 'React-Router', 'ImmerJs', 'Less+Css-Modules']
  }, {
    title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://www.bybit.com"
    }, "\u5B98\u7F51"), " \u7EF4\u62A4, \u6D3B\u52A8\u9875\u5F00\u53D1"),
    role: '空投活动技术项目owner, 动效的开发, 数据流管理, 公共组件库的开发',
    techStack: ['React/Redux/NextJs', 'Webpack/Node', 'React-Router', 'ImmerJs', 'Less+Css-Modules']
  }]
}, {
  name: '江苏五一互联电子商务有限公司',
  title: '前端开发',
  time: '2018.08 - 2020.03',
  jobs: [{
    title: '运营管理后台架构改造和业务迭代',
    role: '整个项目技术owner, 架构的改造, 数据流管理, 提升打包开发效率',
    techStack: ['React/Redux/Dva', 'Webpack/Node/Roadhog', 'React-Router', 'ImmerJs', 'Less+Css-Modules']
  }, {
    title: '官网项目架构和开发',
    role: '整个项目技术owner, 动效的开发, 数据流管理。',
    techStack: ['React/Redux/NextJs', 'Webpack/Node', 'React-Router', 'ImmerJs', 'Less+Css-Modules']
  }]
}, {
  name: '上海星合金融科技',
  title: '前端开发',
  time: '2017.12 - 2018.08',
  jobs: [{
    title: 'APP管理后台架构和业务迭代'
  }, {
    title: 'APP 架构搭建与开发(React-Native)',
    role: 'React-Native 框架的搭建, 组件库, 数据管理的引入',
    techStack: ['React-Native', 'React-Navigation', 'Webpack/Node', 'React-Router', 'Less+Css-Modules']
  }]
}, {
  name: '上海磐哲科技公司',
  title: '前端开发',
  time: '2016.02 - 2017.12',
  jobs: [{
    title: '参与唯品会人才管理项目开发'
  }]
}, {
  name: '毕业签的国企',
  title: '国企实习生',
  time: '2014.07 - 2016.03',
  jobs: [{
    title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u5B9E\u4E60\u671F\u95F4\u81EA\u5B66\u4E86\u524D\u7AEF"),
    role: '张鑫旭的深入理解系列, 原生 JS 系列',
    techStack: ['html(5)', 'Css(3)', 'javascript']
  }]
}]; // project 项目

var projectData = [{
  title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u6838\u5FC3\u4EA4\u6613\u7AD9:\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.bybit.com/trade/inverse/BTCUSD"
  }, "\u53CD\u5411\u4EA4\u6613\u7AD9"), "\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.bybit.com/trade/usdt/BTCUSDT"
  }, "\u6B63\u5411\u4EA4\u6613\u7AD9"), "\xA0 \u91CD\u6784\u548C\u4E1A\u52A1\u8FED\u4EE3\u3002"),
  techStack: ['TypeScript', 'React/Hook/Redux', 'WebPack+Node', 'Less+Css-Modules', '自研UI组件库'],
  projectInfo: '作为公司主要业务, 面向C端用户, 很注重用户视觉交互体验, 以及解决大行情下性能问题',
  mainJobs: ['1. 反向业务的重构, 参与了项目脚手架的搭建, 数据流的管理, 公共方法, 网络请求的封装, 组件库的维护.', '2. 参与了 下单区, 持仓区, orderBook, Kline, deepChart, 业务的迭代', '3. 负责持仓区聚合持仓的技术owner, 参与C端快速上币的改造, 担任运营管理端的项目owner, 快速上币功能使得上一个币对的时间和bug大大减少', '4. 运用社区各种技术手段优化首页加载性能和运行时性能'],
  mainAchivements: ['1. http/ws 数据统一通过数据处理按照NameSpace存储到全局状态, 后续通过自定义Hook处理好逻辑, 输出给组件使用, 数据的统一处理和统一输出', '2. 自动上币的改造, 使得每次上一个新币对不需要修改代码, 直接页面操作, 可以快速抓住市场热点, 做到 0 bug 上币', '3. 持仓区的改造, 使得用户可以看到所有的持仓, 操作仓位不需要切换币对, 优化用户体验', '4. 打包的优化和浏览器的缓存减少白屏时间, 虚拟滚动/webWorker/懒加载/immutableData 优化运行时性能', '5. C端 mock 方案, 前端可以脱离后端环境开发, 大大加快前端开发效率和体验']
}, {
  title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u516C\u53F8\u7EC4\u4EF6\u5E93:"),
  techStack: ['TypeScript', 'React/Hook/Redux', 'Rollup+Node', 'Less+Css-Modules', 'father/storyBook/dumi'],
  projectInfo: '和UI/产品确定了色彩交互体系, 写出了一套基础组件库, 并基于基础组件封装业务组件',
  mainJobs: ['1. 制定组件封装原则和规范, 开发与私有包部署', '2. 常用组件的开发与维护, 组件库文档书写, 单元测试与发布的 PipLine', '3. 结合业务基于组件库封装业务组件, 方便业务快速迭代与后续的维护'],
  mainAchivements: ['1. 根据业务扩展从 Monorepo 项⽬结构 迁移到 私有化 Npm 部署(Verdaccio)', '2. 结合业务, 接入数据和业务配置, 扩展成业务组件.', '3. 引入组件单元测试覆盖与后续流水线发布, 维护组件库文档']
}, {
  title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u524D\u7AEF CLI \u5DE5\u5177:"),
  techStack: ['TypeScript', 'Node', 'commander', 'Inquirer', 'dotenv', 'eslint', 'prettier'],
  projectInfo: '维护了 React/Vue 的项目模版, 增加代码规范团队协作规范, 并发展成CLI, 可以快速开始项目。',
  mainJobs: ['1. 结合社区已有方案, 输出服务于自己业务的模版, 预设公共方法, layout, 快速开始一个项目', '2. 模版可适用于 PC/H5, 预设后台管理Layout, utils 和 请求的封装等'],
  mainAchivements: ['1. 增加命令行交互, 从gitlab 直接 clone 模版, 后续和运维扩展了 CI/CD 相关', '2. 配置eslint 规则和 prettier 规则, 以及代码提交方案, 组内代码风格统一']
}, // 项目补充
//   {
//     title: <span>物流信息管理平台:</span>,
//     techStack: [
//       'React',
//       'React-Router',
//       'antd',
//       'Redux',
//       'Webpack',
//     ],
//     projectInfo:
//       '物流信息的管理',
//       mainAchivements: [
//       '1.升级了项目脚手架 roadhog->webpack4',
//       '2.抽离项目公共方法与组件, 方便快速迭代, 代码复用',
//       '3. 封装了 fetch 的全局拦截, 统一添加请求的 token, 返回错误的统一处理。',
//     ],
//   },
//   {
//     title: <span>
//         公司官网:&nbsp;
//         <a href="http://www.lan360.com/">缆360</a>
//         &nbsp;
//         <a href="http://www.51youse.com/">51有色</a>
//         &nbsp; 重构和业务迭代。
//       </span>,
//     techStack: [
//       'React',
//       'React-Router',
//       'antd',
//       'Redux',
//       'Webpack',
//     ],
//     projectInfo:
//       '参与公司官网从0-1的开发, 从脚手架的搭建到业务的开发, 项目为了SEO, 使用了Nextjs+React+Redux+Saga+Css-Modules+antd, 制作了通用的地址选择, 用户中心, 销售订单表格等组件用于项目中, 加快了开发效率, 项目使用Helmet增加搜索权重, 用户中心可实现用户订单的查看, 下单等业务。',
//       mainAchivements: [
//       '1.手写了 site.map 的生成',
//       '2.抽离项目公共方法与组件, 方便快速迭代, 代码复用',
//       '3. 封装了 fetch 的全局拦截, 统一添加请求的 token, 返回错误的统一处理。',
//     ],
//   },
{
  title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u4E00\u4E2A\u7535\u5546\u5C0F\u7A0B\u5E8F\u548C RN \u7684 \u5BA2\u6237\u7AEF:"),
  techStack: ['React-Native', 'React-Navigation', 'Redux'],
  projectInfo: '线上电商平台',
  mainAchivements: ['1.完成业务的迭代与开发', '2.抽离项目公共方法与组件, 方便快速迭代, 代码复用']
}];

/***/ }),

/***/ "56b7fdc1b11e55d3bb3d":
/*!************************************!*\
  !*** ./src/pub-sub/store/store.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Store; });
/* harmony import */ var _pub_sub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pub-sub.js */ "3f9813bd58a9599260a2");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Store =
/*#__PURE__*/
function () {
  function Store(params) {
    _classCallCheck(this, Store);

    var self = this;
    self.actions = {}; // 存储异步方法

    self.mutations = {}; // 存储同步方法

    self.state = {}; // 共享数据

    self.status = 'resting'; // 防止手动更新

    self.events = new _pub_sub_js__WEBPACK_IMPORTED_MODULE_0__["default"](); // 参数可以传入初始的actions和mutations

    if (params.hasOwnProperty('actions')) {
      self.actions = params.actions;
    }

    if (params.hasOwnProperty('mutations')) {
      self.mutations = params.mutations;
    } // Proxy：es6的方法，起到拦截的作用


    self.state = new Proxy(params.state || {}, {
      set: function set(state, key, value) {
        state[key] = value;
        console.log("stateChange: ".concat(key, ": ").concat(value));
        self.events.publish('stateChange', self.state); // 防止手动更新

        if (self.status !== 'mutation') {
          console.warn("You should use a mutation to set ".concat(key));
        }

        self.status = 'resting';
        return true;
      }
    });
  }

  _createClass(Store, [{
    key: "dispatch",
    value: function dispatch(actionKey, payload) {
      var self = this;

      if (typeof self.actions[actionKey] !== 'function') {
        console.error("Action \"".concat(actionKey, " doesn't exist."));
        return false;
      }

      console.groupCollapsed("ACTION: ".concat(actionKey));
      self.status = 'action';
      self.actions[actionKey](self, payload);
      console.groupEnd();
      return true;
    }
  }, {
    key: "commit",
    value: function commit(mutationKey, payload) {
      var self = this;

      if (typeof self.mutations[mutationKey] !== 'function') {
        console.log("Mutation \"".concat(mutationKey, "\" doesn't exist"));
        return false;
      }

      self.status = 'mutation';
      console.groupCollapsed("MUTATION: ".concat(mutationKey));
      var newState = self.mutations[mutationKey](self.state, payload);
      self.state = Object.assign(self.state, newState);
      return true;
    }
  }]);

  return Store;
}();



/***/ }),

/***/ "57224cf94e5af410101e":
/*!*******************************************!*\
  !*** ./src/components/SlideComponent.jsx ***!
  \*******************************************/
/*! exports provided: LenSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LenSlider", function() { return LenSlider; });
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row/style */ "430efd9ee93fab5ea3aa");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "ab77426700a64afb515f");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col/style */ "cce4e96b47a88eedc219");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "4634762afad890a7174e");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/icon/style */ "c099c4fc48cd9bb84110");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/icon */ "21700e306353b2e19c0b");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "8af190b70a6bc55c6f1b");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _slide_less__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./slide.less */ "3ffa507cb27d4ddfaad1");
/* harmony import */ var _slide_less__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_slide_less__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @utils/utils */ "397f735c1e1fa46b6d74");







function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var LenSlider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LenSlider, _React$Component);

  function LenSlider(props) {
    var _this;

    _classCallCheck(this, LenSlider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LenSlider).call(this, props));
    _this.state = {
      selecteds: [true],
      left: 0,
      right: 12,
      //记录向右点击的次数
      disableClick: ''
    };
    return _this;
  }

  _createClass(LenSlider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var slideData = this.props.slideData;
      this.setState({
        right: slideData.length
      }, function () {
        _this2.checkCursor();
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["isObjectValueEqual"])(nextProps.slideData, this.props.slideData)) {
        this.setState({
          right: nextProps.slideData.length,
          left: 0
        }); //使组件恢复到初始状态
      }
    }
  }, {
    key: "checkCursor",
    value: function checkCursor() {
      var _this$state = this.state,
          right = _this$state.right,
          left = _this$state.left;

      if (right <= 12) {
        this.setState({
          disableClick: 'd-all'
        });
      } else {}
    } //点击滑动

  }, {
    key: "slide",
    value: function slide(dire) {
      var _this3 = this;

      var slidewrap = document.getElementsByClassName('sliderWrap')[0];
      var slide = slidewrap.getElementsByClassName('paySlip')[0];

      if (slide) {
        var slideW = parseInt(document.defaultView.getComputedStyle(slide, null).width);

        if (dire === "right") {
          if (this.state.right > 12) {
            var newRight = this.state.right - 1;
            this.setState({
              right: newRight
            }, function () {
              if (_this3.state.right >= 12) {
                var newLeft = _this3.state.left - slideW;

                _this3.setState({
                  left: newLeft
                });
              } else {}
            });
          }
        } else {
          var newLeft = this.state.left + slideW;

          if (newLeft <= 0) {
            var _newRight = this.state.right + 1;

            this.setState({
              right: _newRight
            }, function () {
              _this3.setState({
                left: newLeft
              });
            });
          } else {}
        }
      }
    } //切换选中点   

  }, {
    key: "toggleSelect",
    value: function toggleSelect(index) {
      var newState = [];
      newState[index] = true;
      this.setState({
        selecteds: newState
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var slideData = this.props.slideData;
      var disableClick = this.state.disableClick;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "sliderWrap ".concat(disableClick)
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 2
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
        type: "double-left",
        onClick: function onClick(e) {
          _this4.slide("left");
        }
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 20,
        style: {
          position: "relative",
          left: this.state.left
        }
      }, Array.isArray(slideData) && slideData.length && slideData.map(function (item, index, arr) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
          span: 2,
          className: "paySlip",
          key: index,
          style: {
            position: "absolute",
            left: index * 8.3333 + '%'
          }
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, item), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: _this4.state.selecteds[index] ? 'selected dateDot' : 'dateDot',
          onClick: function onClick() {
            _this4.toggleSelect(index);
          }
        }));
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 2
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
        type: "double-right",
        onClick: function onClick(e) {
          _this4.slide("right");
        }
      })));
    }
  }]);

  return LenSlider;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ }),

/***/ "58d3b4b343662f3a0da9":
/*!*********************************!*\
  !*** ./src/views/punsub/Sub.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sub; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "8af190b70a6bc55c6f1b");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pub_sub_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/pub-sub/store */ "ef605bb5a4a1e7ad1e17");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Sub =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Sub, _React$Component);

  function Sub(props) {
    var _this;

    _classCallCheck(this, Sub);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Sub).call(this, props));
    _this.state = {
      bookList: []
    };
    return _this;
  }

  _createClass(Sub, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _pub_sub_store__WEBPACK_IMPORTED_MODULE_1__["default"].events.subscribe('stateChange', function (params) {
        _this2.setState({
          bookList: params.bookList
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var bookList = this.state.bookList;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "\u8BA2\u9605", bookList.map(function (book) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, book.bookid);
      }));
    }
  }]);

  return Sub;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "61f74ceec3c37af70a26":
/*!***********************************!*\
  !*** ./src/views/punsub/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PubSub; });
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row/style */ "430efd9ee93fab5ea3aa");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "ab77426700a64afb515f");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col/style */ "cce4e96b47a88eedc219");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "4634762afad890a7174e");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "8af190b70a6bc55c6f1b");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Pub__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pub */ "4c9edeafc1df1d07f301");
/* harmony import */ var _Sub__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Sub */ "58d3b4b343662f3a0da9");
/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./proxy */ "af601716a73ba93fcc9b");





function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var PubSub =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PubSub, _React$Component);

  function PubSub(props) {
    _classCallCheck(this, PubSub);

    return _possibleConstructorReturn(this, _getPrototypeOf(PubSub).call(this, props));
  }

  _createClass(PubSub, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: "8"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Pub__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Sub__WEBPACK_IMPORTED_MODULE_6__["default"], null)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: "8"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_proxy__WEBPACK_IMPORTED_MODULE_7__["default"], null)));
    }
  }]);

  return PubSub;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);



/***/ }),

/***/ "6bd219a6004852596e72":
/*!*********************************************!*\
  !*** ./src/components/Table/TableHeader.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/icon/style */ "c099c4fc48cd9bb84110");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/icon */ "21700e306353b2e19c0b");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/checkbox/style */ "c3582b8f1a06e12bc499");
/* harmony import */ var antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/checkbox */ "1173f26215750d27bf53");
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "8af190b70a6bc55c6f1b");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Table_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Table.less */ "ea70886f17d361adf08b");
/* harmony import */ var _Table_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Table_less__WEBPACK_IMPORTED_MODULE_5__);





function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var TableHeader =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TableHeader, _React$Component);

  function TableHeader() {
    _classCallCheck(this, TableHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(TableHeader).apply(this, arguments));
  }

  _createClass(TableHeader, [{
    key: "onHeaderCheckChange",
    //   constructor(props) {
    //     super(props);
    //   }
    value: function onHeaderCheckChange() {
      if (this.props.onHeaderCheckChange) {
        this.props.onHeaderCheckChange();
      }
    }
  }, {
    key: "sortData",
    value: function sortData(dataIndex, type, sorter) {
      if (this.props.sortData) {
        this.props.sortData(dataIndex, type, sorter);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          columns = _this$props.columns,
          columnsLeft = _this$props.columnsLeft,
          rowSelection = _this$props.rowSelection,
          indeterminate = _this$props.indeterminate,
          selectAll = _this$props.selectAll,
          dataSource = _this$props.dataSource;
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("table", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", null, (rowSelection && columnsLeft.length === 0 && Array.isArray(dataSource) && dataSource.length > 0 ? [react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3___default.a, {
        indeterminate: indeterminate,
        onChange: function onChange() {
          _this.onHeaderCheckChange();
        },
        checked: selectAll
      }))] : []).concat(columns.map(function (column) {
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
          key: column.key
        }, typeof column.sorter === 'function' ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: _Table_less__WEBPACK_IMPORTED_MODULE_5___default.a.sorterwrap
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, column.title), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: _Table_less__WEBPACK_IMPORTED_MODULE_5___default.a.sortercolwrap
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: _Table_less__WEBPACK_IMPORTED_MODULE_5___default.a.sortericonwrap
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
          type: "caret-up",
          onClick: function onClick() {
            _this.sortData(column.dataIndex, 'ascend', column.sorter);
          }
        })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: _Table_less__WEBPACK_IMPORTED_MODULE_5___default.a.sortericonwrap
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
          type: "caret-down",
          onClick: function onClick() {
            _this.sortData(column.dataIndex, 'descend', column.sorter);
          }
        })))) : column.title);
      })))));
    }
  }]);

  return TableHeader;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TableHeader);

/***/ }),

/***/ "8bf9f5ceb63a6daa4739":
/*!************************************!*\
  !*** ./src/pub-sub/store/state.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  bookList: []
});

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
  debugger;

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

/***/ "94e4968e996275b7b27a":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "4fe50ffc7983d80569ba",
	"./af.js": "4fe50ffc7983d80569ba",
	"./ar": "3f7f6568c894fbb46c29",
	"./ar-dz": "0a4b0969f58fca504d02",
	"./ar-dz.js": "0a4b0969f58fca504d02",
	"./ar-kw": "9dc1adf1367a833c5dde",
	"./ar-kw.js": "9dc1adf1367a833c5dde",
	"./ar-ly": "cccb904b2f064b592b02",
	"./ar-ly.js": "cccb904b2f064b592b02",
	"./ar-ma": "d81c92a0aa9e6c084db4",
	"./ar-ma.js": "d81c92a0aa9e6c084db4",
	"./ar-sa": "dee24f02b8ecd3a36176",
	"./ar-sa.js": "dee24f02b8ecd3a36176",
	"./ar-tn": "df08077061459e88529b",
	"./ar-tn.js": "df08077061459e88529b",
	"./ar.js": "3f7f6568c894fbb46c29",
	"./az": "9a25880d1491856f4e1e",
	"./az.js": "9a25880d1491856f4e1e",
	"./be": "ffa801cad665eebbfdc8",
	"./be.js": "ffa801cad665eebbfdc8",
	"./bg": "c81c2298ba3a83bd3b5b",
	"./bg.js": "c81c2298ba3a83bd3b5b",
	"./bm": "0d5fb61f772f2aaaf82c",
	"./bm.js": "0d5fb61f772f2aaaf82c",
	"./bn": "fa658b93b3c6b01c668e",
	"./bn.js": "fa658b93b3c6b01c668e",
	"./bo": "b30d6122d9094906930a",
	"./bo.js": "b30d6122d9094906930a",
	"./br": "ee0a94b9013e4e7ae788",
	"./br.js": "ee0a94b9013e4e7ae788",
	"./bs": "89a9e5355865ee89e959",
	"./bs.js": "89a9e5355865ee89e959",
	"./ca": "0a16bdb66e0525c325dc",
	"./ca.js": "0a16bdb66e0525c325dc",
	"./cs": "b7a0f42b9110b4ba030f",
	"./cs.js": "b7a0f42b9110b4ba030f",
	"./cv": "2b90ff6f0e337e46d5d6",
	"./cv.js": "2b90ff6f0e337e46d5d6",
	"./cy": "0d0ea3473f47b0d7b396",
	"./cy.js": "0d0ea3473f47b0d7b396",
	"./da": "7a8735ec68591dea5f8e",
	"./da.js": "7a8735ec68591dea5f8e",
	"./de": "5f6fa986f8050423684e",
	"./de-at": "7f7e87a36ad679cf294c",
	"./de-at.js": "7f7e87a36ad679cf294c",
	"./de-ch": "f949125f8f7b0502a634",
	"./de-ch.js": "f949125f8f7b0502a634",
	"./de.js": "5f6fa986f8050423684e",
	"./dv": "3073d71361f604d2822a",
	"./dv.js": "3073d71361f604d2822a",
	"./el": "4130747efcded86a1698",
	"./el.js": "4130747efcded86a1698",
	"./en-SG": "1afc743add3cba92f5e9",
	"./en-SG.js": "1afc743add3cba92f5e9",
	"./en-au": "517cd2b76c171df54c77",
	"./en-au.js": "517cd2b76c171df54c77",
	"./en-ca": "eb450040fb739424b607",
	"./en-ca.js": "eb450040fb739424b607",
	"./en-gb": "594dc41e90bb0b4ce7b3",
	"./en-gb.js": "594dc41e90bb0b4ce7b3",
	"./en-ie": "7f1a2a614d100ed33e07",
	"./en-ie.js": "7f1a2a614d100ed33e07",
	"./en-il": "3d148bdee40eb371501e",
	"./en-il.js": "3d148bdee40eb371501e",
	"./en-nz": "a04dc64dfdfc9ac4210a",
	"./en-nz.js": "a04dc64dfdfc9ac4210a",
	"./eo": "d8aa3f4072118ba0c74b",
	"./eo.js": "d8aa3f4072118ba0c74b",
	"./es": "8dca363c55e082fe5270",
	"./es-do": "24f7ae66e6bdc8652fba",
	"./es-do.js": "24f7ae66e6bdc8652fba",
	"./es-us": "8c156bbc319a64186fe9",
	"./es-us.js": "8c156bbc319a64186fe9",
	"./es.js": "8dca363c55e082fe5270",
	"./et": "0207368f4fca00662d61",
	"./et.js": "0207368f4fca00662d61",
	"./eu": "4d24b542827f0d35c2d4",
	"./eu.js": "4d24b542827f0d35c2d4",
	"./fa": "9cf1585e02829dff5f9a",
	"./fa.js": "9cf1585e02829dff5f9a",
	"./fi": "5b8ee8fca9bd9b066e05",
	"./fi.js": "5b8ee8fca9bd9b066e05",
	"./fo": "cef1ea44f0d3f6eb36e0",
	"./fo.js": "cef1ea44f0d3f6eb36e0",
	"./fr": "74e23c69ccb5a5eec403",
	"./fr-ca": "f79130304d5016e13ffb",
	"./fr-ca.js": "f79130304d5016e13ffb",
	"./fr-ch": "f08607bde9b355fddbe5",
	"./fr-ch.js": "f08607bde9b355fddbe5",
	"./fr.js": "74e23c69ccb5a5eec403",
	"./fy": "0d86e36306113c72bd77",
	"./fy.js": "0d86e36306113c72bd77",
	"./ga": "d67fee5c3c35fb7cd073",
	"./ga.js": "d67fee5c3c35fb7cd073",
	"./gd": "d9d35cbb598c476f7045",
	"./gd.js": "d9d35cbb598c476f7045",
	"./gl": "29e2d221e75f936e25f1",
	"./gl.js": "29e2d221e75f936e25f1",
	"./gom-latn": "d91ea0088c3c0ebdc87f",
	"./gom-latn.js": "d91ea0088c3c0ebdc87f",
	"./gu": "d1841a848065084c621c",
	"./gu.js": "d1841a848065084c621c",
	"./he": "624c722243ab1968c264",
	"./he.js": "624c722243ab1968c264",
	"./hi": "061d025a8797acc49a77",
	"./hi.js": "061d025a8797acc49a77",
	"./hr": "6a0c124ead216c897c0f",
	"./hr.js": "6a0c124ead216c897c0f",
	"./hu": "dce09320209f9a044b94",
	"./hu.js": "dce09320209f9a044b94",
	"./hy-am": "39a71a00fd6cfabeef30",
	"./hy-am.js": "39a71a00fd6cfabeef30",
	"./id": "a8eb5357a53ddba4d83c",
	"./id.js": "a8eb5357a53ddba4d83c",
	"./is": "0ccb71e8f62bf567199f",
	"./is.js": "0ccb71e8f62bf567199f",
	"./it": "35f77a330b2b59f483b2",
	"./it-ch": "0a856ed5497f738d0cf5",
	"./it-ch.js": "0a856ed5497f738d0cf5",
	"./it.js": "35f77a330b2b59f483b2",
	"./ja": "239d00735eb311c1c046",
	"./ja.js": "239d00735eb311c1c046",
	"./jv": "92711492583b83951b6d",
	"./jv.js": "92711492583b83951b6d",
	"./ka": "d31914898082af20b314",
	"./ka.js": "d31914898082af20b314",
	"./kk": "83d94a8a59b81194ec02",
	"./kk.js": "83d94a8a59b81194ec02",
	"./km": "331957b72f4beeaf2d4a",
	"./km.js": "331957b72f4beeaf2d4a",
	"./kn": "a0c1a30a96f4369ead33",
	"./kn.js": "a0c1a30a96f4369ead33",
	"./ko": "6de7f88f5c7d1ec2d27f",
	"./ko.js": "6de7f88f5c7d1ec2d27f",
	"./ku": "a9d2ef0fc91d568bdfab",
	"./ku.js": "a9d2ef0fc91d568bdfab",
	"./ky": "0747c8ca89dcf60580a2",
	"./ky.js": "0747c8ca89dcf60580a2",
	"./lb": "62019114b63dbd69721a",
	"./lb.js": "62019114b63dbd69721a",
	"./lo": "c2110f526b1ce19817cc",
	"./lo.js": "c2110f526b1ce19817cc",
	"./lt": "6df32c33af3d2e5fc11c",
	"./lt.js": "6df32c33af3d2e5fc11c",
	"./lv": "55b3e93988104c60a071",
	"./lv.js": "55b3e93988104c60a071",
	"./me": "e66100575f1ac6d00d4a",
	"./me.js": "e66100575f1ac6d00d4a",
	"./mi": "fd0033b452a90713b091",
	"./mi.js": "fd0033b452a90713b091",
	"./mk": "1ffc46d9756a7dd1c823",
	"./mk.js": "1ffc46d9756a7dd1c823",
	"./ml": "18c9a4d7cd02df34341e",
	"./ml.js": "18c9a4d7cd02df34341e",
	"./mn": "c6f0bab67f50b43fe8bb",
	"./mn.js": "c6f0bab67f50b43fe8bb",
	"./mr": "48ce3e4e5fdba4499ebb",
	"./mr.js": "48ce3e4e5fdba4499ebb",
	"./ms": "d892199478d896774453",
	"./ms-my": "de1a2ccd001fe36ceecc",
	"./ms-my.js": "de1a2ccd001fe36ceecc",
	"./ms.js": "d892199478d896774453",
	"./mt": "9b8ee8b32ab81129ffce",
	"./mt.js": "9b8ee8b32ab81129ffce",
	"./my": "b403e02a2233207d0c4d",
	"./my.js": "b403e02a2233207d0c4d",
	"./nb": "cb288475654d715d144b",
	"./nb.js": "cb288475654d715d144b",
	"./ne": "89e8ae3a87cc919f89a4",
	"./ne.js": "89e8ae3a87cc919f89a4",
	"./nl": "301790a531e8a33e9796",
	"./nl-be": "3daa408e1685eb5e8fbd",
	"./nl-be.js": "3daa408e1685eb5e8fbd",
	"./nl.js": "301790a531e8a33e9796",
	"./nn": "643270e1e47cf81f688e",
	"./nn.js": "643270e1e47cf81f688e",
	"./pa-in": "5c40bc9eec89d0d6802d",
	"./pa-in.js": "5c40bc9eec89d0d6802d",
	"./pl": "a4a8376f7fdb2d708907",
	"./pl.js": "a4a8376f7fdb2d708907",
	"./pt": "6177d8a6abfd93127496",
	"./pt-br": "e20444730613ccb91ab4",
	"./pt-br.js": "e20444730613ccb91ab4",
	"./pt.js": "6177d8a6abfd93127496",
	"./ro": "b2de2f54a02115863ee5",
	"./ro.js": "b2de2f54a02115863ee5",
	"./ru": "a884f82f1fcf323b0ed1",
	"./ru.js": "a884f82f1fcf323b0ed1",
	"./sd": "60abb66915d33f1d36b4",
	"./sd.js": "60abb66915d33f1d36b4",
	"./se": "40bfee84281d9b77f113",
	"./se.js": "40bfee84281d9b77f113",
	"./si": "a975fe4573e5d9e39086",
	"./si.js": "a975fe4573e5d9e39086",
	"./sk": "e0600ff36ac1e0dece75",
	"./sk.js": "e0600ff36ac1e0dece75",
	"./sl": "46cd6d95bdea594f4775",
	"./sl.js": "46cd6d95bdea594f4775",
	"./sq": "c043969c123ab5cd2b70",
	"./sq.js": "c043969c123ab5cd2b70",
	"./sr": "77fd666a52737f1efd7b",
	"./sr-cyrl": "6868054dbb36f02db227",
	"./sr-cyrl.js": "6868054dbb36f02db227",
	"./sr.js": "77fd666a52737f1efd7b",
	"./ss": "bbaffbb41ef7f4fd8c3a",
	"./ss.js": "bbaffbb41ef7f4fd8c3a",
	"./sv": "be84e9b3b463cb96fa5a",
	"./sv.js": "be84e9b3b463cb96fa5a",
	"./sw": "c35940c6626d2bccf0f9",
	"./sw.js": "c35940c6626d2bccf0f9",
	"./ta": "73e1ad1f793625d5e923",
	"./ta.js": "73e1ad1f793625d5e923",
	"./te": "96fe0dfde527a883c0a4",
	"./te.js": "96fe0dfde527a883c0a4",
	"./tet": "73089628077a1b3908a1",
	"./tet.js": "73089628077a1b3908a1",
	"./tg": "0481860a8ba35ca9d22d",
	"./tg.js": "0481860a8ba35ca9d22d",
	"./th": "4331da7acfa5f52746d6",
	"./th.js": "4331da7acfa5f52746d6",
	"./tl-ph": "b965a0000a1179485d25",
	"./tl-ph.js": "b965a0000a1179485d25",
	"./tlh": "a42a137c2d01e40c18cd",
	"./tlh.js": "a42a137c2d01e40c18cd",
	"./tr": "183a75bd2437f11817b2",
	"./tr.js": "183a75bd2437f11817b2",
	"./tzl": "42e54a873080a091cf1e",
	"./tzl.js": "42e54a873080a091cf1e",
	"./tzm": "48caaadb1d262b8d3df6",
	"./tzm-latn": "d974062d0d2321cab039",
	"./tzm-latn.js": "d974062d0d2321cab039",
	"./tzm.js": "48caaadb1d262b8d3df6",
	"./ug-cn": "2453f05ed409711cc1e1",
	"./ug-cn.js": "2453f05ed409711cc1e1",
	"./uk": "917876f36b35aa56a2cd",
	"./uk.js": "917876f36b35aa56a2cd",
	"./ur": "9c29a77b375c4c9c03a3",
	"./ur.js": "9c29a77b375c4c9c03a3",
	"./uz": "3b78af3fb5d1ef120da2",
	"./uz-latn": "54ff3dc03d2cb362f2dc",
	"./uz-latn.js": "54ff3dc03d2cb362f2dc",
	"./uz.js": "3b78af3fb5d1ef120da2",
	"./vi": "63f81a840f588ddc77ce",
	"./vi.js": "63f81a840f588ddc77ce",
	"./x-pseudo": "51f18a209d286b73de60",
	"./x-pseudo.js": "51f18a209d286b73de60",
	"./yo": "cc6e20f395448f8d5fc0",
	"./yo.js": "cc6e20f395448f8d5fc0",
	"./zh-cn": "a25e83e8799759c246e1",
	"./zh-cn.js": "a25e83e8799759c246e1",
	"./zh-hk": "1bec13affc76a58d17d9",
	"./zh-hk.js": "1bec13affc76a58d17d9",
	"./zh-tw": "dba649134b180837c44d",
	"./zh-tw.js": "dba649134b180837c44d"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "94e4968e996275b7b27a";

/***/ }),

/***/ "98f7bfdbe716f5461d3c":
/*!************************!*\
  !*** ./src/router.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "8af190b70a6bc55c6f1b");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dva_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dva/router */ "d20ee11348d9f986110a");
/* harmony import */ var dva_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dva_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _views_login_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @views/login/index */ "cc40952a950107dc0492");
/* harmony import */ var _views_index_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @views/index/index */ "f790f5f316a66d837da9");
/* harmony import */ var _views_resume_index_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @views/resume/index.jsx */ "4771c7d07a290bcf0da8");
// import React from "react";
// import { Router, Route, Switch, Redirect } from 'dva/router';
// import { Spin } from "antd";
// import Loadable from "react-loadable";
// // 引入组件
// // import MainView  from './index/index';
// // import About from './about/AboutView'
// // import TimeLine from './timeLine/TimeLineView'
// // import Home from './home/HomeView'
// // import LoginView from './login/index'
// const MainComponent = Loadable({
//   loader: () => import("@views/index/index"),
//   loading: LoadingPage
// });
// const LoginComponent = Loadable({
//   loader: () => import("@views/login/index"),
//   loading: LoadingPage
// });
// const AboutComponent = Loadable({
//   loader: () => import("@views/about/AboutView"),
//   loading: LoadingPage
// });
// const TimeLineComponent = Loadable({
//   loader: () => import("@views/timeLine/TimeLineView"),
//   loading: LoadingPage
// });
// const HomeComponent = Loadable({
//   loader: () => import("@views/home/HomeView"),
//   loading: LoadingPage
// });
// import Thanos from "@views/Thanos/index";
// import pdf from "@views/pdf/index";
// function LoadingPage() {
//   return <Spin style={{ width: "100%", height: "100%" }} />;
// }
// const routes = [
//   { path: "/", component: LoginComponent, exact: true },
//   { path: "/login", component: LoginComponent },
//   {
//     path: "/main",
//     component: MainComponent,
//     routes: [
//       { path: "/main", component: HomeComponent, exact: true },
//       // { path: '/main/home', component: Home},
//       { path: "/main/about", component: AboutComponent },
//       { path: "/main/timeline/:status", component: TimeLineComponent },
//       // { path: '/main/mobx', component: MobxComponent},
//       { path: "/main/thanos", component: Thanos },
//       { path: "/main/pdf", component: pdf }
//     ]
//   }
// ];
// const RouteWithSubRoutes = route =>
//   route.exact ? (
//     <Route
//       path={route.path}
//       exact
//       render={props => (
//         <route.component {...props} routes={route.routes}>
//           <Switch>
//             {route.routes &&
//               route.routes.map((route, i) => {
//                 return <RouteWithSubRoutes key={i} {...route} />;
//               })}
//           </Switch>
//         </route.component>
//       )}
//     />
//   ) : (
//     <Route
//       path={route.path}
//       render={props => (
//         <route.component {...props} routes={route.routes}>
//           <Switch>
//             {route.routes &&
//               route.routes.map((route, i) => {
//                 return <RouteWithSubRoutes key={i} {...route} />;
//               })}
//           </Switch>
//         </route.component>
//       )}
//     />
//   );
//   function RouterConfig({ history }) {
//     return (
//       // <Provider {...stores}>
//       <Router history={history}>
//         <Switch>
//           {routes.map((route, i) => {
//             return <RouteWithSubRoutes key={i} {...route} />;
//           })}
//         </Switch>
//         {/* <Switch>
//                     <Route path="/" component={LoginComponent} exact></Route>
//                     <Route path="/login" component={LoginComponent}></Route>
//                     <Route path="/main" component={MainComponent}>
//                          <Route path="/main/home" component={HomeComponent}></Route>
//                         <Route path="/main/home" component={HomeComponent}></Route>
//                         <Route path="/main/about" component={AboutComponent}></Route>
//                         <Route path="/main/timeline/:status" component={TimeLineComponent}></Route>
//                     </Route>
//                 </Switch> */}
//       </Router>
//       // </Provider>
//     );
//   }
// export default RouterConfig;






function RouterConfig(_ref) {
  var history = _ref.history;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dva_router__WEBPACK_IMPORTED_MODULE_1__["Router"], {
    history: history
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dva_router__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dva_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/login",
    component: _views_login_index__WEBPACK_IMPORTED_MODULE_2__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dva_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/resume",
    component: _views_resume_index_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dva_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/",
    component: _views_index_index__WEBPACK_IMPORTED_MODULE_3__["default"]
  }))) // </Provider>
  ;
}

/* harmony default export */ __webpack_exports__["default"] = (RouterConfig);

/***/ }),

/***/ "9ac36ebfb2e352767335":
/*!****************************!*\
  !*** ./src/utils/proxy.js ***!
  \****************************/
/*! exports provided: log */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
function log(target, key, descriptor) {
  var oldValue = descriptor.value; // 修改 descriptor属性

  descriptor.value = function () {
    console.log("".concat(name), arguments);
    return oldValue.apply(this, arguments);
  };

  return descriptor;
}

/***/ }),

/***/ "9e881abc3980e339733b":
/*!************************************!*\
  !*** ./src/views/Flow/flowData.js ***!
  \************************************/
/*! exports provided: templateData, flowData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateData", function() { return templateData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flowData", function() { return flowData; });
var templateData = [{
  "id": null,
  "createTime": null,
  "updateTime": null,
  "loanId": null,
  "step": 1,
  "title": "Unduh program aplikasi",
  "description": null,
  "icon": "https://s3-ap-southeast-1.amazonaws.com/uuang/flow/APPLY/default/download.png",
  "type": "APPLY",
  "active": null
}, {
  "id": null,
  "createTime": null,
  "updateTime": null,
  "loanId": null,
  "step": 2,
  "title": "Mengisi informasi",
  "description": null,
  "icon": "https://s3-ap-southeast-1.amazonaws.com/uuang/flow/APPLY/default/documents.png",
  "type": "APPLY",
  "active": null
}, {
  "id": null,
  "createTime": null,
  "updateTime": null,
  "loanId": null,
  "step": 3,
  "title": "Verifikasi informasi",
  "description": null,
  "icon": "https://s3-ap-southeast-1.amazonaws.com/uuang/flow/APPLY/default/safety.png",
  "type": "APPLY",
  "active": null
}, {
  "id": null,
  "createTime": null,
  "updateTime": null,
  "loanId": null,
  "step": 4,
  "title": "Pinjaman masuk ke rek kita",
  "description": null,
  "icon": "https://s3-ap-southeast-1.amazonaws.com/uuang/flow/APPLY/default/audit.png",
  "type": "APPLY",
  "active": null
}, {
  "id": null,
  "createTime": null,
  "updateTime": null,
  "loanId": null,
  "step": 1,
  "title": "Verifikasi",
  "description": "Daftar no hp & membuat password",
  "icon": "https://s3-ap-southeast-1.amazonaws.com/uuang/flow/AUDIT/default/safety.png",
  "type": "AUDIT",
  "active": null
}, {
  "id": null,
  "createTime": null,
  "updateTime": null,
  "loanId": null,
  "step": 2,
  "title": "Informasi bank",
  "description": "Verifikasi data bank : nama di rek, nama bank, no rek bank.",
  "icon": "https://s3-ap-southeast-1.amazonaws.com/uuang/flow/AUDIT/default/bank.png",
  "type": "AUDIT",
  "active": null
}, {
  "id": null,
  "createTime": null,
  "updateTime": null,
  "loanId": null,
  "step": 3,
  "title": "Informasi profesional",
  "description": "Nama perusahaan, alamat kantor, no telepon perusahaan, pendapatan bulanan, kode pos",
  "icon": "https://s3-ap-southeast-1.amazonaws.com/uuang/flow/AUDIT/default/profession.png",
  "type": "AUDIT",
  "active": null
}];
var flowData = [{
  "id": null,
  "createTime": null,
  "updateTime": null,
  "loanId": null,
  "step": 1,
  "title": "Verifikasi",
  "description": "Daftar no hp & membuat password",
  "icon": "https://s3-ap-southeast-1.amazonaws.com/uuang/flow/AUDIT/default/safety.png",
  "type": "AUDIT",
  "active": null
}, // {
//     "id": null,
//     "createTime": null,
//     "updateTime": null,
//     "loanId": null,
//     "step": 2,
//     "title": "Informasi bank",
//     "description": "Verifikasi data bank : nama di rek, nama bank, no rek bank.",
//     "icon": "https://s3-ap-southeast-1.amazonaws.com/uuang/flow/AUDIT/default/bank.png",
//     "type": "AUDIT",
//     "active": null
// }, 
{
  "id": null,
  "createTime": null,
  "updateTime": null,
  "loanId": null,
  "step": 3,
  "title": "Informasi profesional",
  "description": "Nama perusahaan, alamat kantor, no telepon perusahaan, pendapatan bulanan, kode pos",
  "icon": "https://s3-ap-southeast-1.amazonaws.com/uuang/flow/AUDIT/default/profession.png",
  "type": "AUDIT",
  "active": null
}];


/***/ }),

/***/ "9fb60ea5c94618f746a0":
/*!************************************!*\
  !*** ./src/views/wallet/index.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Wallet; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "8af190b70a6bc55c6f1b");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wallet_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wallet.jsx */ "1b25b660c84864270aeb");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Wallet =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Wallet, _React$Component);

  function Wallet() {
    _classCallCheck(this, Wallet);

    return _possibleConstructorReturn(this, _getPrototypeOf(Wallet).call(this));
  }

  _createClass(Wallet, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wallet_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null));
    }
  }]);

  return Wallet;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "a1bdb53b521cb61ed490":
/*!************************************!*\
  !*** ./src/views/Flow/FlowForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/spin/style */ "d9b296048a068290efe3");
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/spin */ "44205f4f15931773029f");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row/style */ "430efd9ee93fab5ea3aa");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/row */ "ab77426700a64afb515f");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/button/style */ "b28d1f103e4a5b2e8ef8");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/button */ "55f6171b5a254025824d");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/icon/style */ "c099c4fc48cd9bb84110");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/icon */ "21700e306353b2e19c0b");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/col/style */ "cce4e96b47a88eedc219");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/col */ "4634762afad890a7174e");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/message/style */ "aaa12c37f93504858944");
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/message */ "21677e23133eca295df8");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "8af190b70a6bc55c6f1b");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _FlowItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./FlowItem */ "ee856c1ce8bc65faa8ec");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/utils */ "397f735c1e1fa46b6d74");
/* harmony import */ var _FlowTemplate__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./FlowTemplate */ "ef9fc4aa5c1823ea9201");
/* harmony import */ var _flowData__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./flowData */ "9e881abc3980e339733b");
/* harmony import */ var _flow_less__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./flow.less */ "0cf6b9175bd08a1324e3");
/* harmony import */ var _flow_less__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_flow_less__WEBPACK_IMPORTED_MODULE_17__);













function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


 // import { getFlow, saveFlow, uploadimg, loadflowurl, getFlowTemplate } from '../../services/loan';






var FlowForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FlowForm, _React$Component);

  function FlowForm(props) {
    var _this;

    _classCallCheck(this, FlowForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FlowForm).call(this, props));
    _this.state = {
      spinning: false,
      flowLists: {
        APPLY: [],
        AUDIT: []
      },
      flowTemplate: {
        APPLY: [],
        AUDIT: []
      },
      applyFlag: false,
      auditFlag: false,
      selectKeys: {
        APPLY: [],
        AUDIT: []
      }
    };
    return _this;
  }

  _createClass(FlowForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadFlowData(this.loadFlowTemplate);
    }
  }, {
    key: "onSelectChange",
    value: function onSelectChange(selectedRowKeys, selectedRows, type) {
      var _this$state = this.state,
          flowLists = _this$state.flowLists,
          flowTemplate = _this$state.flowTemplate;
      this.reRenderFlowLists(flowLists, selectedRowKeys, type, flowTemplate);
    }
  }, {
    key: "reRenderFlowLists",
    value: function reRenderFlowLists(flowLists, selectedRowKeys, type, flowTemplate) {
      // const selectKeys = deepClone(this.state.selectKeys);
      var flowListsCopy = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_14__["deepClone"])(flowLists); // const selectedFlowIds = this.selectedRowKeysToId(selectedRowKeys, flowTemplate, type);

      var _this$compareSelectKe = this.compareSelectKeys(type, selectedRowKeys),
          addRows = _this$compareSelectKe.addRows,
          deleteRows = _this$compareSelectKe.deleteRows,
          selectKeys = _this$compareSelectKe.selectKeys;

      flowListsCopy[type] = [].concat(_toConsumableArray(flowLists[type]), _toConsumableArray(addRows));

      if (Array.isArray(deleteRows) && deleteRows.length > 0) {
        deleteRows.forEach(function (deleteRow) {
          var current = flowListsCopy[type].findIndex(function (newflowList) {
            return newflowList.icon === deleteRow.icon;
          });

          if (current >= 0) {
            flowListsCopy[type].splice(current, 1);
          }
        });
      }

      this.setState({
        selectKeys: selectKeys,
        flowLists: flowListsCopy
      });
    }
  }, {
    key: "compareSelectKeys",
    value: function compareSelectKeys(type, selectedRowKeys) {
      var flowTemplate = this.state.flowTemplate;
      var selectKeys = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_14__["deepClone"])(this.state.selectKeys);
      var addKeys = [];
      var deleteKeys = [];
      var addRows = [];
      var deleteRows = [];
      selectedRowKeys.forEach(function (selectedRowKey) {
        var current = selectKeys[type].findIndex(function (selectKey) {
          return selectKey === selectedRowKey;
        });

        if (current === -1) {
          addKeys.push(selectedRowKey);
        }
      });
      selectKeys[type].forEach(function (selectKey) {
        var current = selectedRowKeys.findIndex(function (selectedRowKey) {
          return selectKey === selectedRowKey;
        });

        if (current === -1) {
          deleteKeys.push(selectKey);
        }
      });
      addKeys.forEach(function (addkey) {
        flowTemplate[type].forEach(function (flow, index) {
          if (addkey === index) {
            addRows.push(flow);
          }
        });
      });
      deleteKeys.forEach(function (addkey) {
        flowTemplate[type].forEach(function (flow, index) {
          if (addkey === index) {
            deleteRows.push(flow);
          }
        });
      });
      selectKeys[type] = selectedRowKeys;
      return {
        addKeys: addKeys,
        deleteKeys: deleteKeys,
        addRows: addRows,
        deleteRows: deleteRows,
        selectKeys: selectKeys
      };
    }
  }, {
    key: "selectedRowKeysToId",
    value: function selectedRowKeysToId(selectedRowKeys, flowTemplate, type) {
      var selectedFlowIds = selectedRowKeys.map(function (selectedRowKey) {
        var selectedFlowId = -1;
        flowTemplate[type].forEach(function (data, index) {
          if (selectedRowKey === index) {
            selectedFlowId = data.id;
          }
        });

        if (selectedFlowId) {
          return selectedFlowId;
        }
      });
      return selectedFlowIds;
      this.setState({});
    }
  }, {
    key: "loadFlowTemplate",
    value: function loadFlowTemplate(that) {
      that.setState({
        spinning: true
      }); // try {
      //   const res = await getFlowTemplate();
      //   that.dealFlowData(res, 'flowTemplate', that.checkFlowData);
      // } catch (error) {
      //   console.log(error);
      // }

      that.dealFlowData(_flowData__WEBPACK_IMPORTED_MODULE_16__["templateData"], 'flowTemplate', that.checkFlowData);
      that.setState({
        spinning: false
      });
    }
  }, {
    key: "loadFlowData",
    value: function loadFlowData(callback) {
      var loanId = this.props.loanId;
      this.setState({
        spinning: true
      }); // try {
      //   const res = await getFlow(loanId);
      //   this.dealFlowData(res, 'flowLists', callback);
      // } catch (err) {
      //   console.log(err);
      // }

      this.dealFlowData(_flowData__WEBPACK_IMPORTED_MODULE_16__["flowData"], 'flowLists', callback);
      this.setState({
        spinning: false
      });
    }
  }, {
    key: "checkFlowData",
    value: function checkFlowData(that) {
      var _that$state = that.state,
          flowLists = _that$state.flowLists,
          flowTemplate = _that$state.flowTemplate;
      var APPLY = flowLists.APPLY,
          AUDIT = flowLists.AUDIT;

      if (!(Array.isArray(APPLY) && APPLY.length > 0)) {
        flowLists.APPLY = flowTemplate.APPLY;
        that.setState({
          applyFlag: true
        });
        that.renderSelectKeys('APPLY', flowTemplate.APPLY, true);
      } else {
        that.renderSelectKeys('APPLY', flowTemplate.APPLY, false);
        that.setState({
          applyFlag: false
        });
      }

      if (!(Array.isArray(AUDIT) && AUDIT.length > 0)) {
        flowLists.AUDIT = flowTemplate.AUDIT;
        that.setState({
          auditFlag: true
        });
        that.renderSelectKeys('AUDIT', flowTemplate.AUDIT, true);
      } else {
        that.renderSelectKeys('AUDIT', flowTemplate.AUDIT, false);
        that.setState({
          auditFlag: false
        });
      }

      that.setState({
        flowLists: flowLists
      });
    }
  }, {
    key: "dealFlowData",
    value: function dealFlowData(data, type, callback) {
      var that = this;
      var flowLists = {
        APPLY: [],
        AUDIT: []
      };

      if (Array.isArray(data)) {
        data.forEach(function (flow) {
          if (flow.type === 'APPLY') {
            flowLists.APPLY.push(flow);
          } else {
            flowLists.AUDIT.push(flow);
          }
        });
      }

      if (callback) {
        this.setState(_defineProperty({}, type, flowLists), function () {
          callback(that);
        });
      }

      this.setState(_defineProperty({}, type, flowLists));
    }
  }, {
    key: "addItem",
    value: function addItem(type) {
      var flowLists = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_14__["deepClone"])(this.state.flowLists);
      flowLists[type].push({
        editFlag: true
      });
      this.setState({
        flowLists: flowLists
      });
    }
  }, {
    key: "textChange",
    value: function textChange(value, type, step, flowType) {
      var flowLists = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_14__["deepClone"])(this.state.flowLists);
      flowLists[flowType][step][type] = value;
      this.setState({
        flowLists: flowLists
      });
    }
    /**
     * 保存
     * @param {*} type 
     */

  }, {
    key: "saveItem",
    value: function () {
      var _saveItem = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(type) {
        var loanId, flowLists, flag, data, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                loanId = this.props.loanId;
                flowLists = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_14__["deepClone"])(this.state.flowLists);
                flag = false;
                /*
                * 生成step
                */

                flowLists[type].forEach(function (data, index) {
                  if (!data.title) {
                    flag = true;
                  }

                  data.step = index + 1;
                });

                if (!flag) {
                  _context.next = 7;
                  break;
                }

                antd_lib_message__WEBPACK_IMPORTED_MODULE_11___default.a.error('请填写完信息在保存');

                return _context.abrupt("return");

              case 7:
                data = {
                  id: loanId,
                  procedureDTOs: flowLists[type],
                  type: type
                };
                _context.prev = 8;
                _context.next = 11;
                return saveFlow(data);

              case 11:
                res = _context.sent;
                this.loadFlowData(this.loadFlowTemplate);
                _context.next = 18;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](8);
                console.log(_context.t0);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[8, 15]]);
      }));

      function saveItem(_x) {
        return _saveItem.apply(this, arguments);
      }

      return saveItem;
    }()
  }, {
    key: "cancleAdd",
    value: function cancleAdd(step, flowType) {
      var flowLists = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_14__["deepClone"])(this.state.flowLists);
      flowLists[flowType].splice(step, 1);
      this.selectIdTokeys(flowLists, flowType);
      this.setState({
        flowLists: flowLists
      });
    }
  }, {
    key: "selectIdTokeys",
    value: function selectIdTokeys(flowLists, type) {
      var flowTemplate = this.state.flowTemplate;
      var selectKeys = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_14__["deepClone"])(this.state.selectKeys);
      selectKeys[type] = [];
      flowTemplate[type].forEach(function (data, index) {
        flowLists[type].forEach(function (flowList) {
          if (flowList.icon === data.icon) {
            selectKeys[type].push(index);
          }
        });
      });
      this.setState({
        selectKeys: selectKeys
      });
    }
  }, {
    key: "confirmAdd",
    value: function confirmAdd(step, flowType) {
      var flowLists = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_14__["deepClone"])(this.state.flowLists);
      flowLists[flowType][step].editFlag = false;
      this.setState({
        flowLists: flowLists
      });
    }
  }, {
    key: "openEdit",
    value: function openEdit(step, flowType) {
      var flowLists = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_14__["deepClone"])(this.state.flowLists);
      flowLists[flowType][step].editFlag = true;
      this.setState({
        flowLists: flowLists
      });
    }
  }, {
    key: "beforeUpload",
    value: function () {
      var _beforeUpload = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(file, step, flowType) {
        var flowLists, loanId, data, formData, res, iconurl;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                flowLists = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_14__["deepClone"])(this.state.flowLists);
                loanId = this.props.loanId;
                this.setState({
                  spinning: true
                });
                data = {
                  prefix: "flow/".concat(flowType, "/").concat(loanId),
                  filename: step,
                  file: file
                };
                formData = new FormData();
                formData.append('file', file);
                data.formData = formData;
                _context2.prev = 7;
                _context2.next = 10;
                return uploadimg(data);

              case 10:
                res = _context2.sent;
                res.prefix = data.prefix;
                _context2.next = 14;
                return loadflowurl(res);

              case 14:
                iconurl = _context2.sent;
                flowLists[flowType][step].icon = "".concat(iconurl.data, "?t=").concat(Math.random());
                _context2.next = 21;
                break;

              case 18:
                _context2.prev = 18;
                _context2.t0 = _context2["catch"](7);
                console.log(_context2.t0);

              case 21:
                this.setState({
                  spinning: false,
                  flowLists: flowLists
                });

              case 22:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[7, 18]]);
      }));

      function beforeUpload(_x2, _x3, _x4) {
        return _beforeUpload.apply(this, arguments);
      }

      return beforeUpload;
    }()
    /**
     * 排序
     */

  }, {
    key: "sortData",
    value: function sortData(type, step, flowType) {
      var flowLists = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_14__["deepClone"])(this.state.flowLists);
      var j = type === 'up' ? step - 1 : step + 1;
      var temp = flowLists[flowType][j];
      flowLists[flowType][j] = flowLists[flowType][step];
      flowLists[flowType][step] = temp;
      this.setState({
        flowLists: flowLists
      });
    }
  }, {
    key: "renderSelectKeys",
    value: function renderSelectKeys(type, data, allFlag) {
      var _this$state2 = this.state,
          selectKeys = _this$state2.selectKeys,
          flowLists = _this$state2.flowLists;
      var selectedRowKeys = [];

      if (allFlag) {
        selectedRowKeys = data.map(function (item, index) {
          return index;
        });
      } else {
        data.forEach(function (item, index) {
          flowLists[type].forEach(function (flowList) {
            if (item.icon === flowList.icon) {
              selectedRowKeys.push(index);
            }
          });
        });
      }

      selectKeys[type] = selectedRowKeys;
      this.setState({
        selectKeys: selectKeys
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state3 = this.state,
          flowLists = _this$state3.flowLists,
          spinning = _this$state3.spinning,
          flowTemplate = _this$state3.flowTemplate,
          applyFlag = _this$state3.applyFlag,
          auditFlag = _this$state3.auditFlag,
          selectKeys = _this$state3.selectKeys;
      var AUDIT = flowLists.AUDIT,
          APPLY = flowLists.APPLY; // 优先选择flow的数据

      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: _flow_less__WEBPACK_IMPORTED_MODULE_17___default.a.flowrap
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default.a, {
        spinning: spinning
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
        style: {
          marginBottom: '20px',
          borderBottom: '1px solid #d9d9d9',
          paddingBottom: '15px',
          textAlign: 'center'
        }
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h4", null, "\u5BA1\u6838\u6D41\u7A0B"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default.a, {
        span: 10
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_FlowTemplate__WEBPACK_IMPORTED_MODULE_15__["default"], {
        select: true,
        dataSource: flowTemplate.AUDIT,
        type: "AUDIT",
        selectedRowKeys: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_14__["deepClone"])(selectKeys['AUDIT']),
        onSelectChange: function onSelectChange(selectedRowKeys, selectedRows, type) {
          _this2.onSelectChange(selectedRowKeys, selectedRows, type);
        }
      })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default.a, {
        span: 14
      }, Array.isArray(AUDIT) && AUDIT.length > 0 ? AUDIT.map(function (data, index) {
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_FlowItem__WEBPACK_IMPORTED_MODULE_13__["default"], {
          data: data,
          step: index,
          total: AUDIT.length,
          flowType: "AUDIT",
          textChange: function textChange(value, type, step) {
            _this2.textChange(value, type, step, 'AUDIT');
          },
          confirmAdd: function confirmAdd(step) {
            _this2.confirmAdd(step, 'AUDIT');
          },
          cancleAdd: function cancleAdd(step) {
            _this2.cancleAdd(step, 'AUDIT');
          },
          openEdit: function openEdit(step) {
            _this2.openEdit(step, 'AUDIT');
          },
          beforeUpload: function beforeUpload(file, step) {
            _this2.beforeUpload(file, step, 'AUDIT');
          },
          sortData: function sortData(type, step, flowType) {
            _this2.sortData(type, step, flowType);
          }
        });
      }) : react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_7___default.a, {
        type: "frown"
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", {
        className: _flow_less__WEBPACK_IMPORTED_MODULE_17___default.a.btnwrap
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default.a, {
        type: "primary",
        onClick: function onClick() {
          _this2.saveItem('AUDIT');
        }
      }, "\u4FDD\u5B58"), auditFlag ? react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", null, "flow\u6570\u636E\u4E3A\u6A21\u7248\u6570\u636E\uFF0C\u8BF7\u70B9\u51FB\u4FDD\u5B58") : null))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
        style: {
          textAlign: 'center'
        }
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h4", null, "\u7533\u8BF7\u6D41\u7A0B"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default.a, {
        span: 10
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_FlowTemplate__WEBPACK_IMPORTED_MODULE_15__["default"], {
        select: true,
        dataSource: flowTemplate.APPLY,
        type: "APPLY",
        selectedRowKeys: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_14__["deepClone"])(selectKeys['APPLY']),
        onSelectChange: function onSelectChange(selectedRowKeys, selectedRows, type) {
          _this2.onSelectChange(selectedRowKeys, selectedRows, type);
        }
      })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default.a, {
        span: 14
      }, Array.isArray(APPLY) && APPLY.length > 0 ? APPLY.map(function (data, index) {
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_FlowItem__WEBPACK_IMPORTED_MODULE_13__["default"], {
          data: data,
          step: index,
          total: APPLY.length,
          flowType: "APPLY",
          textChange: function textChange(value, type, step) {
            _this2.textChange(value, type, step, 'APPLY');
          },
          confirmAdd: function confirmAdd(step) {
            _this2.confirmAdd(step, 'APPLY');
          },
          cancleAdd: function cancleAdd(step) {
            _this2.cancleAdd(step, 'APPLY');
          },
          openEdit: function openEdit(step) {
            _this2.openEdit(step, 'APPLY');
          },
          beforeUpload: function beforeUpload(file, step) {
            _this2.beforeUpload(file, step, 'APPLY');
          },
          sortData: function sortData(type, step, flowType) {
            _this2.sortData(type, step, flowType);
          }
        });
      }) : react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_7___default.a, {
        type: "frown"
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", {
        className: _flow_less__WEBPACK_IMPORTED_MODULE_17___default.a.btnwrap
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default.a, {
        type: "primary",
        onClick: function onClick() {
          _this2.saveItem('APPLY');
        }
      }, "\u4FDD\u5B58"), applyFlag ? react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", null, "flow\u6570\u636E\u4E3A\u6A21\u7248\u6570\u636E\uFF0C\u8BF7\u70B9\u51FB\u4FDD\u5B58") : null)))));
    }
  }]);

  return FlowForm;
}(react__WEBPACK_IMPORTED_MODULE_12___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (FlowForm);

/***/ }),

/***/ "a564f8b09de2e3839026":
/*!*************************************!*\
  !*** ./src/promise/browser-asap.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // rawAsap provides everything we need except exception management.

var rawAsap = __webpack_require__(/*! ./browser-raw.js */ "c17bfc07d08fdc67d1df"); // RawTasks are recycled to reduce GC churn.


var freeTasks = []; // We queue errors to ensure they are thrown in right order (FIFO).
// Array-as-queue is good enough here, since we are just dealing with exceptions.

var pendingErrors = [];
var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);

function throwFirstError() {
  if (pendingErrors.length) {
    throw pendingErrors.shift();
  }
}
/**
 * Calls a task as soon as possible after returning, in its own event, with priority
 * over other events like animation, reflow, and repaint. An error thrown from an
 * event will not interrupt, nor even substantially slow down the processing of
 * other events, but will be rather postponed to a lower priority event.
 * @param {{call}} task A callable object, typically a function that takes no
 * arguments.
 */


module.exports = asap;

function asap(task) {
  var rawTask;

  if (freeTasks.length) {
    rawTask = freeTasks.pop();
  } else {
    rawTask = new RawTask();
  }

  rawTask.task = task;
  rawAsap(rawTask);
} // We wrap tasks with recyclable task objects.  A task object implements
// `call`, just like a function.


function RawTask() {
  this.task = null;
} // The sole purpose of wrapping the task is to catch the exception and recycle
// the task object after its single use.


RawTask.prototype.call = function () {
  try {
    this.task.call();
  } catch (error) {
    if (asap.onerror) {
      // This hook exists purely for testing purposes.
      // Its name will be periodically randomized to break any code that
      // depends on its existence.
      asap.onerror(error);
    } else {
      // In a web browser, exceptions are not fatal. However, to avoid
      // slowing down the queue of pending tasks, we rethrow the error in a
      // lower priority turn.
      pendingErrors.push(error);
      requestErrorThrow();
    }
  } finally {
    this.task = null;
    freeTasks[freeTasks.length] = this;
  }
};

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
                  method: 'GET' //   body:{}

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

/***/ }),

/***/ "abb77d417d761f397217":
/*!*************************************!*\
  !*** ./src/views/upload/Upload.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UploadCom; });
/* harmony import */ var antd_lib_upload_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/upload/style */ "bd787f82be277453cf5f");
/* harmony import */ var antd_lib_upload_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_upload_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/upload */ "858a94120cc8a50b9cf3");
/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_upload__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style */ "c099c4fc48cd9bb84110");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "21700e306353b2e19c0b");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/modal/style */ "e19205557bb71c52af9f");
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/modal */ "ecb09fa8e73d7235d766");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "8af190b70a6bc55c6f1b");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);







function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function getBase64(img, callback) {
  var reader = new FileReader();
  reader.addEventListener("load", function () {
    return callback(reader.result);
  });
  reader.readAsDataURL(img);
}

var UploadCom =
/*#__PURE__*/
function (_React$Component) {
  _inherits(UploadCom, _React$Component);

  function UploadCom(props) {
    var _this;

    _classCallCheck(this, UploadCom);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UploadCom).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "beforeUpload", function (file) {
      // Get this url from response in real world.
      getBase64(file, function (imageUrl) {
        return _this.setState({
          imageUrl: imageUrl
        });
      });
    });

    _this.state = {
      imageUrl: ""
    };
    return _this;
  }

  _createClass(UploadCom, [{
    key: "onRemove",
    value: function onRemove() {
      this.setState({
        imageUrl: ""
      });
    }
  }, {
    key: "prview",
    value: function prview() {
      var imageUrl = this.state.imageUrl;

      antd_lib_modal__WEBPACK_IMPORTED_MODULE_5___default.a.info({
        title: "图片预览",
        content: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
          src: imageUrl,
          width: 300,
          height: 300
        })
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var imageUrl = this.state.imageUrl;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, imageUrl ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "img-wrap"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "icon-wrap"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "eye",
        onClick: function onClick() {
          return _this2.prview();
        }
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "delete",
        onClick: function onClick() {
          return _this2.onRemove();
        }
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: imageUrl
      })) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_upload__WEBPACK_IMPORTED_MODULE_1___default.a, {
        maxCount: 1,
        onRemove: this.onRemove,
        beforeUpload: this.beforeUpload
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "uploader"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, "+"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, "\u4E0A\u4F20")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, "\u652F\u6301jpg,jpeg,png,\u5927\u5C0F\u4E0D\u8D85\u8FC75\bM,\u5C3A\u5BF8\u5BBD1920"));
    }
  }]);

  return UploadCom;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ }),

/***/ "af601716a73ba93fcc9b":
/*!***********************************!*\
  !*** ./src/views/punsub/proxy.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Proxy; });
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "b28d1f103e4a5b2e8ef8");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "55f6171b5a254025824d");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "8af190b70a6bc55c6f1b");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_proxy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/proxy */ "9ac36ebfb2e352767335");



var _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }



var Proxy = (_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Proxy, _React$Component);

  function Proxy(props) {
    _classCallCheck(this, Proxy);

    return _possibleConstructorReturn(this, _getPrototypeOf(Proxy).call(this, props));
  }

  _createClass(Proxy, [{
    key: "test",
    value: function test(args) {}
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "es6 proxy", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        type: "primary",
        onClick: function onClick() {
          return _this.test(111);
        }
      }, "\u70B9\u51FB"));
    }
  }]);

  return Proxy;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component), (_applyDecoratedDescriptor(_class.prototype, "test", [_utils_proxy__WEBPACK_IMPORTED_MODULE_3__["log"]], Object.getOwnPropertyDescriptor(_class.prototype, "test"), _class.prototype)), _class);


/***/ }),

/***/ "bdaf0b66ea5cfeefada2":
/*!********************************!*\
  !*** ./src/promise/Promise.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // var asap = require('asap/raw');

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var asap = __webpack_require__(/*! ./browser-asap */ "a564f8b09de2e3839026");

function noop() {} // States:
//
// 0 - pending
// 1 - fulfilled with _value
// 2 - rejected with _value
// 3 - adopted the state of another promise, _value
//
// once the state is no longer pending (0) it is immutable
// All `_` prefixed properties will be reduced to `_{random number}`
// at build time to obfuscate them and discourage their use.
// We don't use symbols or Object.defineProperty to fully hide them
// because the performance isn't good enough.
// to avoid using try/catch inside critical functions, we
// extract them to here.


var LAST_ERROR = null;
var IS_ERROR = {};

function getThen(obj) {
  try {
    return obj.then;
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

function tryCallOne(fn, a) {
  try {
    return fn(a);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

function tryCallTwo(fn, a, b) {
  try {
    fn(a, b);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

module.exports = Promise;

function Promise(fn) {
  if (_typeof(this) !== 'object') {
    throw new TypeError('Promises must be constructed via new');
  }

  if (typeof fn !== 'function') {
    throw new TypeError('Promise constructor\'s argument is not a function');
  }

  this._deferredState = 0;
  this._state = 0;
  this._value = null;
  this._deferreds = null;
  if (fn === noop) return;
  doResolve(fn, this);
}

Promise._onHandle = null;
Promise._onReject = null;
Promise._noop = noop;

Promise.prototype.then = function (onFulfilled, onRejected) {
  if (this.constructor !== Promise) {
    return safeThen(this, onFulfilled, onRejected);
  }

  var res = new Promise(noop);
  handle(this, new Handler(onFulfilled, onRejected, res));
  return res;
};

function safeThen(self, onFulfilled, onRejected) {
  return new self.constructor(function (resolve, reject) {
    var res = new Promise(noop);
    res.then(resolve, reject);
    handle(self, new Handler(onFulfilled, onRejected, res));
  });
}

function handle(self, deferred) {
  while (self._state === 3) {
    self = self._value;
  }

  if (Promise._onHandle) {
    Promise._onHandle(self);
  }

  if (self._state === 0) {
    if (self._deferredState === 0) {
      self._deferredState = 1;
      self._deferreds = deferred;
      return;
    }

    if (self._deferredState === 1) {
      self._deferredState = 2;
      self._deferreds = [self._deferreds, deferred];
      return;
    }

    self._deferreds.push(deferred);

    return;
  }

  handleResolved(self, deferred);
}

function handleResolved(self, deferred) {
  asap(function () {
    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;

    if (cb === null) {
      if (self._state === 1) {
        resolve(deferred.promise, self._value);
      } else {
        reject(deferred.promise, self._value);
      }

      return;
    }

    var ret = tryCallOne(cb, self._value);

    if (ret === IS_ERROR) {
      reject(deferred.promise, LAST_ERROR);
    } else {
      resolve(deferred.promise, ret);
    }
  });
}

function resolve(self, newValue) {
  // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
  if (newValue === self) {
    return reject(self, new TypeError('A promise cannot be resolved with itself.'));
  }

  if (newValue && (_typeof(newValue) === 'object' || typeof newValue === 'function')) {
    var then = getThen(newValue);

    if (then === IS_ERROR) {
      return reject(self, LAST_ERROR);
    }

    if (then === self.then && newValue instanceof Promise) {
      self._state = 3;
      self._value = newValue;
      finale(self);
      return;
    } else if (typeof then === 'function') {
      doResolve(then.bind(newValue), self);
      return;
    }
  }

  self._state = 1;
  self._value = newValue;
  finale(self);
}

function reject(self, newValue) {
  self._state = 2;
  self._value = newValue;

  if (Promise._onReject) {
    Promise._onReject(self, newValue);
  }

  finale(self);
}

function finale(self) {
  if (self._deferredState === 1) {
    handle(self, self._deferreds);
    self._deferreds = null;
  }

  if (self._deferredState === 2) {
    for (var i = 0; i < self._deferreds.length; i++) {
      handle(self, self._deferreds[i]);
    }

    self._deferreds = null;
  }
}

function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}
/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */


function doResolve(fn, promise) {
  var done = false;
  var res = tryCallTwo(fn, function (value) {
    if (done) return;
    done = true;
    resolve(promise, value);
  }, function (reason) {
    if (done) return;
    done = true;
    reject(promise, reason);
  });

  if (!done && res === IS_ERROR) {
    done = true;
    reject(promise, LAST_ERROR);
  }
}

/***/ }),

/***/ "c17bfc07d08fdc67d1df":
/*!************************************!*\
  !*** ./src/promise/browser-raw.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) { // Use the fastest means possible to execute a task in its own turn, with
// priority over other events including IO, animation, reflow, and redraw
// events in browsers.
//
// An exception thrown by a task will permanently interrupt the processing of
// subsequent tasks. The higher level `asap` function ensures that if an
// exception is thrown by a task, that the task queue will continue flushing as
// soon as possible, but if you use `rawAsap` directly, you are responsible to
// either ensure that no exceptions are thrown from your task, or to manually
// call `rawAsap.requestFlush` if an exception is thrown.

module.exports = rawAsap;

function rawAsap(task) {
  if (!queue.length) {
    requestFlush();
    flushing = true;
  } // Equivalent to push, but avoids a function call.


  queue[queue.length] = task;
}

var queue = []; // Once a flush has been requested, no further calls to `requestFlush` are
// necessary until the next `flush` completes.

var flushing = false; // `requestFlush` is an implementation-specific method that attempts to kick
// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
// the event queue before yielding to the browser's own event loop.

var requestFlush; // The position of the next task to execute in the task queue. This is
// preserved between calls to `flush` so that it can be resumed if
// a task throws an exception.

var index = 0; // If a task schedules additional tasks recursively, the task queue can grow
// unbounded. To prevent memory exhaustion, the task queue will periodically
// truncate already-completed tasks.

var capacity = 1024; // The flush function processes all tasks that have been scheduled with
// `rawAsap` unless and until one of those tasks throws an exception.
// If a task throws an exception, `flush` ensures that its state will remain
// consistent and will resume where it left off when called again.
// However, `flush` does not make any arrangements to be called again if an
// exception is thrown.

function flush() {
  while (index < queue.length) {
    var currentIndex = index; // Advance the index before calling the task. This ensures that we will
    // begin flushing on the next task the task throws an error.

    index = index + 1;
    queue[currentIndex].call(); // Prevent leaking memory for long chains of recursive calls to `asap`.
    // If we call `asap` within tasks scheduled by `asap`, the queue will
    // grow, but to avoid an O(n) walk for every task we execute, we don't
    // shift tasks off the queue after they have been executed.
    // Instead, we periodically shift 1024 tasks off the queue.

    if (index > capacity) {
      // Manually shift all values starting at the index back to the
      // beginning of the queue.
      for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
        queue[scan] = queue[scan + index];
      }

      queue.length -= index;
      index = 0;
    }
  }

  queue.length = 0;
  index = 0;
  flushing = false;
} // `requestFlush` is implemented using a strategy based on data collected from
// every available SauceLabs Selenium web driver worker at time of writing.
// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593
// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` or `self` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

/* globals self */


var scope = typeof global !== "undefined" ? global : self;
var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver; // MutationObservers are desirable because they have high priority and work
// reliably everywhere they are implemented.
// They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7

if (typeof BrowserMutationObserver === "function") {
  requestFlush = makeRequestCallFromMutationObserver(flush); // MessageChannels are desirable because they give direct access to the HTML
  // task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
  // 11-12, and in web workers in many engines.
  // Although message channels yield to any queued rendering and IO tasks, they
  // would be better than imposing the 4ms delay of timers.
  // However, they do not work reliably in Internet Explorer or Safari.
  // Internet Explorer 10 is the only browser that has setImmediate but does
  // not have MutationObservers.
  // Although setImmediate yields to the browser's renderer, it would be
  // preferrable to falling back to setTimeout since it does not have
  // the minimum 4ms penalty.
  // Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
  // Desktop to a lesser extent) that renders both setImmediate and
  // MessageChannel useless for the purposes of ASAP.
  // https://github.com/kriskowal/q/issues/396
  // Timers are implemented universally.
  // We fall back to timers in workers in most engines, and in foreground
  // contexts in the following browsers.
  // However, note that even this simple case requires nuances to operate in a
  // broad spectrum of browsers.
  //
  // - Firefox 3-13
  // - Internet Explorer 6-9
  // - iPad Safari 4.3
  // - Lynx 2.8.7
} else {
  requestFlush = makeRequestCallFromTimer(flush);
} // `requestFlush` requests that the high priority event queue be flushed as
// soon as possible.
// This is useful to prevent an error thrown in a task from stalling the event
// queue if the exception handled by Node.js’s
// `process.on("uncaughtException")` or by a domain.


rawAsap.requestFlush = requestFlush; // To request a high priority event, we induce a mutation observer by toggling
// the text of a text node between "1" and "-1".

function makeRequestCallFromMutationObserver(callback) {
  var toggle = 1;
  var observer = new BrowserMutationObserver(callback);
  var node = document.createTextNode("");
  observer.observe(node, {
    characterData: true
  });
  return function requestCall() {
    toggle = -toggle;
    node.data = toggle;
  };
} // The message channel technique was discovered by Malte Ubl and was the
// original foundation for this library.
// http://www.nonblocking.io/2011/06/windownexttick.html
// Safari 6.0.5 (at least) intermittently fails to create message ports on a
// page's first load. Thankfully, this version of Safari supports
// MutationObservers, so we don't need to fall back in that case.
// function makeRequestCallFromMessageChannel(callback) {
//     var channel = new MessageChannel();
//     channel.port1.onmessage = callback;
//     return function requestCall() {
//         channel.port2.postMessage(0);
//     };
// }
// For reasons explained above, we are also unable to use `setImmediate`
// under any circumstances.
// Even if we were, there is another bug in Internet Explorer 10.
// It is not sufficient to assign `setImmediate` to `requestFlush` because
// `setImmediate` must be called *by name* and therefore must be wrapped in a
// closure.
// Never forget.
// function makeRequestCallFromSetImmediate(callback) {
//     return function requestCall() {
//         setImmediate(callback);
//     };
// }
// Safari 6.0 has a problem where timers will get lost while the user is
// scrolling. This problem does not impact ASAP because Safari 6.0 supports
// mutation observers, so that implementation is used instead.
// However, if we ever elect to use timers in Safari, the prevalent work-around
// is to add a scroll event listener that calls for a flush.
// `setTimeout` does not call the passed callback if the delay is less than
// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
// even then.


function makeRequestCallFromTimer(callback) {
  return function requestCall() {
    // We dispatch a timeout with a specified delay of 0 for engines that
    // can reliably accommodate that request. This will usually be snapped
    // to a 4 milisecond delay, but once we're flushing, there's no delay
    // between events.
    var timeoutHandle = setTimeout(handleTimer, 0); // However, since this timer gets frequently dropped in Firefox
    // workers, we enlist an interval handle that will try to fire
    // an event 20 times per second until it succeeds.

    var intervalHandle = setInterval(handleTimer, 50);

    function handleTimer() {
      // Whichever timer succeeds will cancel both timers and
      // execute the callback.
      clearTimeout(timeoutHandle);
      clearInterval(intervalHandle);
      callback();
    }
  };
} // This is for `asap.js` only.
// Its name will be periodically randomized to break any code that depends on
// its existence.


rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer; // ASAP was originally a nextTick shim included in Q. This was factored out
// into this ASAP package. It was later adapted to RSVP which made further
// amendments. These decisions, particularly to marginalize MessageChannel and
// to capture the MutationObserver implementation in a closure, were integrated
// back into ASAP proper.
// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "698d75b157f24ae829cc")))

/***/ }),

/***/ "c28dfd7c9b79a75f1ffc":
/*!*************************************!*\
  !*** ./src/views/home/HomeView.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row/style */ "430efd9ee93fab5ea3aa");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "ab77426700a64afb515f");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col/style */ "cce4e96b47a88eedc219");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "4634762afad890a7174e");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/button/style */ "b28d1f103e4a5b2e8ef8");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/button */ "55f6171b5a254025824d");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "8af190b70a6bc55c6f1b");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_SlideComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/SlideComponent */ "57224cf94e5af410101e");
/* harmony import */ var _components_Progress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/Progress */ "33ed01da25201f9e6e76");
/* harmony import */ var _components_Modal_Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/Modal/Modal */ "c7bb5f3a2c4f7267c8e8");
/* harmony import */ var _components_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/Tooltip/Tooltip */ "f87203303a81019a6b79");
/* harmony import */ var _Flow_FlowForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Flow/FlowForm */ "a1bdb53b521cb61ed490");
/* harmony import */ var _slideData__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./slideData */ "df9e048c9178f7a160c9");







function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

 //引入组件





 //引入模拟数据

 // 引入less

__webpack_require__(/*! ./home.less */ "f20e1c183745f03c1d4b");

var Home =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    var _this;

    _classCallCheck(this, Home);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Home).call(this, props));
    _this.state = {
      toogleSlide: true,
      Modalshow: false //控制modal显示与隐藏

    };
    return _this;
  }

  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // debugger;
      console.log(this.props);
    }
  }, {
    key: "toogleSlide",
    value: function toogleSlide(flag) {
      this.setState({
        toogleSlide: !flag
      });
    }
  }, {
    key: "toggleModal",
    value: function toggleModal(flag) {
      this.setState({
        Modalshow: !flag
      });
    }
    /**
     * @method onCancle 关闭弹窗
     */

  }, {
    key: "onCancle",
    value: function onCancle() {
      this.setState({
        Modalshow: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          toogleSlide = _this$state.toogleSlide,
          Modalshow = _this$state.Modalshow;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "homeWrap"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", null, "slider\u7EC4\u4EF6:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_SlideComponent__WEBPACK_IMPORTED_MODULE_7__["LenSlider"], {
        slideData: toogleSlide ? _slideData__WEBPACK_IMPORTED_MODULE_12__["slideData1"] : _slideData__WEBPACK_IMPORTED_MODULE_12__["slideData2"]
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default.a, {
        type: "primary",
        onClick: function onClick() {
          _this2.toogleSlide(toogleSlide);
        }
      }, toogleSlide ? 'data1' : "data2"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 6
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", null, "progress\u7EC4\u4EF6:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Progress__WEBPACK_IMPORTED_MODULE_8__["Progress"], null)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 6
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, "Modal\u7EC4\u4EF6"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default.a, {
        type: "primary",
        onClick: function onClick() {
          _this2.toggleModal(Modalshow);
        }
      }, Modalshow ? '隐藏' : '显示'), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_9__["default"], {
        open: Modalshow,
        onCancle: function onCancle() {
          _this2.onCancle();
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, "Modal\u7EC4\u4EF611"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 6
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_10__["default"], {
        trigger: "click"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, "tooltip")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", null, "Table\u7EC4\u4EF6"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Flow_FlowForm__WEBPACK_IMPORTED_MODULE_11__["default"], null)));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "c393ad287278fb121606":
/*!****************************************************!*\
  !*** ./src/models sync nonrecursive (\.js|\.jsx)$ ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./wallet.js": "c47ac578ac25a32dfeb0"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "c393ad287278fb121606";

/***/ }),

/***/ "c47ac578ac25a32dfeb0":
/*!******************************!*\
  !*** ./src/models/wallet.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = ({
  namespace: 'wallet',
  state: {
    wallet: {},
    position: []
  },
  reducers: {
    changeWallet: function changeWallet(state, _ref) {
      var data = _ref.data;
      return _objectSpread({}, state, {
        wallet: data.data[0]
      });
    },
    changePosition: function changePosition(state, _ref2) {
      var data = _ref2.data;
      return _objectSpread({}, state, {
        position: data.data
      });
    }
  },
  effects: {}
});

/***/ }),

/***/ "c7bb5f3a2c4f7267c8e8":
/*!****************************************!*\
  !*** ./src/components/Modal/Modal.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "b28d1f103e4a5b2e8ef8");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "55f6171b5a254025824d");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style */ "c099c4fc48cd9bb84110");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "21700e306353b2e19c0b");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "8af190b70a6bc55c6f1b");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "63f14ac74ce296f77f4d");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);





function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Modal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Modal).call(this, props));
    _this.state = {
      open: false
    };
    return _this;
  }
  /**
   * @method closeModal 点击mask关闭弹窗
   */


  _createClass(Modal, [{
    key: "closeModal",
    value: function closeModal() {
      this.props.onCancle && this.props.onCancle();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (nextProps.open && !this.props.open) {
        this.node = document.createElement('div'); // 创建 DOM

        this.node.className = 'ReactModal'; // 给上 ClassName

        document.getElementsByTagName('body')[0].appendChild(this.node); // 给 body 加上刚才的 带有 className 的 div
        // 这个时候创建了 render的目的地。

        var style = __webpack_require__(/*! ./modal.less */ "417228ff4936794ef720"); // css 样式


        var children = nextProps.children,
            rest = _objectWithoutProperties(nextProps, ["children"]);

        var leMmodalStyle = {
          width: nextProps.width ? nextProps.width : '520px'
        };
        var modal = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "len-modal-container"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "mask" //    {...rest}
          ,
          onClick: function onClick() {
            _this2.closeModal();
          }
        }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "modal-wrap"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "len-modal animated slideInDown",
          style: leMmodalStyle
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "modal-title"
        }, nextProps.title ? nextProps.title : '新增', react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
          type: "close",
          onClick: function onClick() {
            _this2.closeModal();
          }
        })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "modal-body"
        }, nextProps.children), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "modal-footer"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
          onClick: function onClick() {
            _this2.closeModal();
          }
        }, "\u53D6\u6D88"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
          type: "primary"
        }, "\u786E\u5B9A"))))); // 这个时候创建了 Modal 的虚拟 Dom

        var allClass = document.getElementsByClassName('ReactModal');
        react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.render(modal, allClass[allClass.length - 1]); // 之所以这么写，是因为能重复打开Modal，因为每一次打开Modal，都会建立一个div
        // 将 Modal 成功 render 到目的地
      }

      if (this.props.open && !nextProps.open) {
        // 从有到无
        react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.unmountComponentAtNode(this.node); // 调用 react-dom unmountComponentAtNode方法，将Modal解除。
        // 或者可以写下面的方法，将整个创建的div删除，这样多次打开就不会有很多个div残留在body中，但是并不是很正规的做法。
        // document.getElementsByTagName('body')[0].removeChild(document.getElementsByClassName('ReactModal')[0])
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return Modal;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "cc40952a950107dc0492":
/*!***********************************!*\
  !*** ./src/views/login/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row/style */ "430efd9ee93fab5ea3aa");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "ab77426700a64afb515f");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/button/style */ "b28d1f103e4a5b2e8ef8");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "55f6171b5a254025824d");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col/style */ "cce4e96b47a88eedc219");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/col */ "4634762afad890a7174e");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/input/style */ "2bef2847a697d49723f5");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/input */ "8ea69893f2da751b3fed");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/form/style */ "501bc7434ef93f928f1c");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/form */ "2ead291d06c1b64a6501");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "8af190b70a6bc55c6f1b");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);











var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var FormItem = antd_lib_form__WEBPACK_IMPORTED_MODULE_9___default.a.Item;

__webpack_require__(/*! ./login.less */ "f9abb38b8e52f0b1b8ab");

var LoginView = (_dec = antd_lib_form__WEBPACK_IMPORTED_MODULE_9___default.a.create(), _dec(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LoginView, _React$Component);

  function LoginView(props) {
    var _this;

    _classCallCheck(this, LoginView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LoginView).call(this, props));
    _this.state = {
      userinfo: {
        name: "username",
        password: "123456"
      }
    };
    return _this;
  }

  _createClass(LoginView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initMap();
    }
  }, {
    key: "initMap",
    value: function initMap() {
      var map = new BMap.Map("container");
      var point = new BMap.Point(116.404, 39.915);
      map.centerAndZoom(point, 15); //

      map.enableScrollWheelZoom(true); //允许缩放

      map.addControl(new BMap.NavigationControl()); //添加控件

      var geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(function (r) {
        //浏览器定位
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
          var mk = new BMap.Marker(r.point);
          map.addOverlay(mk);
          map.panTo(r.point);
          console.log('您的位置：' + r.point.lng + ',' + r.point.lat);
        } else {
          console.log('failed' + this.getStatus());
          geolocation.enableSDKLocation(); //SDK定位

          geolocation.getCurrentPosition(function (r) {
            if (this.getStatus() == BMAP_STATUS_SUCCESS) {
              var mk = new BMap.Marker(r.point);
              map.addOverlay(mk);
              map.panTo(r.point);
              console.log('您的位置：' + r.point.lng + ',' + r.point.lat);
            } else {
              console.log('failed' + this.getStatus());
              var myCity = new BMap.LocalCity();
              myCity.get(function (result) {
                var cityName = result.name;
                map.setCenter(cityName);
                console.log("当前定位城市:" + cityName);
              });
            }
          });
        }
      });
    }
  }, {
    key: "loginIn",
    value: function loginIn() {
      this.props.history.push('/main');
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var userinfo = this.state.userinfo;
      var getFieldDecorator = this.props.form.getFieldDecorator;
      var formItemLayout = {
        labelCol: {
          xs: {
            span: 24
          },
          sm: {
            span: 7
          },
          md: {
            span: 6
          }
        },
        wrapperCol: {
          xs: {
            span: 24
          },
          sm: {
            span: 12
          },
          md: {
            span: 18
          }
        }
      };
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "loginWrap"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "formWrap"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_9___default.a, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", null, "\u6B22\u8FCE\u767B\u9646\u7CFB\u7EDF"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: "\u59D3\u540D"
      }), getFieldDecorator('name', {
        rules: [{
          required: true,
          message: '请输入姓名'
        }],
        initialValue: userinfo.name
      })(react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_7___default.a, null))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: "\u5BC6\u7801"
      }), getFieldDecorator('password', {
        rules: [{
          required: true,
          message: '请输入密码'
        }],
        initialValue: userinfo.password
      })(react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_7___default.a, {
        type: "password"
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, formItemLayout.labelCol), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, formItemLayout.wrapperCol, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
        onClick: function onClick() {
          _this2.loginIn();
        },
        type: "primary"
      }, "\u767B\u5F55"))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", null, "\u5730\u56FE\u5B9A\u4F4D"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "container"
      })));
    }
  }]);

  return LoginView;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component)) || _class);
/* harmony default export */ __webpack_exports__["default"] = (LoginView);

/***/ }),

/***/ "cf9157284cc3de2ef765":
/*!**********************************!*\
  !*** ./src/views/test/state.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return State; });
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "b28d1f103e4a5b2e8ef8");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "55f6171b5a254025824d");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "8af190b70a6bc55c6f1b");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var State =
/*#__PURE__*/
function (_React$Component) {
  _inherits(State, _React$Component);

  function State(props) {
    var _this;

    _classCallCheck(this, State);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(State).call(this, props));
    _this.state = {
      done: false,
      val: {
        info: {
          name: "old"
        }
      }
    };
    return _this;
  }

  _createClass(State, [{
    key: "handleClick",
    value: function handleClick() {
      var _this2 = this;

      this.setState({
        val: _objectSpread({}, this.state.val, {
          info: {
            name: "new"
          }
        })
      }, function () {
        console.log("111", _this2.state.val);
      });
    }
  }, {
    key: "handleClick1",
    value: function handleClick1() {
      var _this3 = this;

      new Promise(function (resolve, reject) {
        resolve();
      }).then(function () {
        _this3.setState({
          done: true
        });

        console.log(111, _this3.state.done);
      }).then(function () {
        console.log(222, _this3.state.done);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      console.log("render");
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, this.state.val.info.name, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        type: "primary",
        onClick: function onClick() {
          return _this4.handleClick();
        }
      }, "state\u6D4B\u8BD5"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        type: "primary",
        onClick: function onClick() {
          return _this4.handleClick1();
        }
      }, "setSync"));
    }
  }]);

  return State;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);



/***/ }),

/***/ "d1c4ef86de8f0d15a34f":
/*!*******************************************!*\
  !*** ./src/components/Table/TableBody.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/checkbox/style */ "c3582b8f1a06e12bc499");
/* harmony import */ var antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/checkbox */ "1173f26215750d27bf53");
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "8af190b70a6bc55c6f1b");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/utils */ "397f735c1e1fa46b6d74");



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var TableBody =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TableBody, _React$Component);

  function TableBody(props) {
    _classCallCheck(this, TableBody);

    return _possibleConstructorReturn(this, _getPrototypeOf(TableBody).call(this, props)); // this.state = {
    //   columns: [],
    //   dataSource: [],
    //   rowSelection: {},
    //   columnsLeft: [],
    // };
  } // componentWillReceiveProps(nextProps) {
  //   const { columns, dataSource } = nextProps;
  //   if (!isObjectValueEqual(columns, this.props.columns)) {
  //     this.setState({ columns });
  //   }
  //   if (Array.isArray(dataSource) && !isObjectValueEqual(dataSource, this.props.dataSource)) {
  //     this.setState({ dataSource }, () => {
  //     });
  //   }
  // }


  _createClass(TableBody, [{
    key: "onBodyCheckChange",
    value: function onBodyCheckChange(e, index) {
      if (this.props.onBodyCheckChange) {
        this.props.onBodyCheckChange(e, index);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          columns = _this$props.columns,
          columnsLeft = _this$props.columnsLeft,
          dataSource = _this$props.dataSource,
          rowSelection = _this$props.rowSelection;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("table", null, Array.isArray(dataSource) && dataSource.length > 0 ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tbody", null, dataSource.map(function (data, index) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
          key: data.key ? data.key : index
        }, (rowSelection && columnsLeft.length === 0 ? [react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1___default.a, {
          onChange: function onChange(e) {
            _this.onBodyCheckChange(e, index);
          },
          checked: data.checked
        }))] : []).concat(columns.map(function (column) {
          return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
            key: column.key
          }, typeof column.render === 'function' ? column.render(data[column.dataIndex], data, index) : data[column.dataIndex]);
        })));
      })) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
        style: {
          textAlign: 'center'
        }
      }, "\u6682\u65E0\u6570\u636E")));
    }
  }]);

  return TableBody;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TableBody);

/***/ }),

/***/ "d5ad9a330a12a59294c6":
/*!*********************************************!*\
  !*** ./src/views/timeLine/timeLineData.jsx ***!
  \*********************************************/
/*! exports provided: timeLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeLine", function() { return timeLine; });
/**
 * @property {array} timeLine 生成时间轴的数据
 * @property {string} timeLine.label 标题
 * @property {number} timeLine.status 状态
 * @property {array} timeLine.buttons 对应的按钮
 * @property {array} timeLine.links 对应的链接
 */
var timeLine = [{
  label: '退出',
  status: 0,
  buttons: [{
    text: "发布",
    target: 1
  }],
  links: [{
    text: '导入',
    target: '/main/importExcel',
    icon: 'icon-daoru'
  }, {
    text: '导出',
    target: '/main/exportExcel',
    icon: 'icon-daochu'
  }]
}, {
  label: '已发布',
  status: 1,
  buttons: [{
    text: "取消发布",
    target: 0
  }, {
    text: "核算",
    target: 2
  }],
  links: [{
    text: '数据查看',
    target: '/main/PayrollMain',
    icon: 'icon-shujuchakan'
  }]
}, {
  label: '核算中',
  status: 2,
  buttons: [{
    text: "检查结果",
    target: 3
  }]
}, {
  label: '结果检查中',
  status: 3,
  buttons: [{
    text: "改正数据",
    target: 4
  }, {
    text: "提交审批",
    target: 5
  }],
  links: [{
    text: '报表查询',
    target: '/main/PayrollReportB14',
    icon: 'icon-baobiaochaxun'
  }]
}, {
  label: '数据更正中',
  status: 4,
  hlines: [{
    index: 1
  }, {
    index: 2
  }],
  buttons: [{
    text: "发布",
    target: 1
  }]
}, {
  label: '审核中',
  status: 5,
  buttons: [{
    text: "返回检查",
    target: 3
  }, {
    text: "审核通过",
    target: 0
  }],
  links: [{
    text: '银行转账',
    target: '',
    icon: 'icon-yinhangzhuanzhang1'
  }, {
    text: '工资单打印',
    target: '',
    icon: 'icon-gongzidandayin'
  }, {
    text: '报税操作',
    target: '',
    icon: 'icon-baoshuiguanli'
  }, {
    text: '社保缴纳',
    target: '',
    icon: 'icon-shebaojiaona'
  }]
}];


/***/ }),

/***/ "df9e048c9178f7a160c9":
/*!*************************************!*\
  !*** ./src/views/home/slideData.js ***!
  \*************************************/
/*! exports provided: slideData1, slideData2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideData1", function() { return slideData1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideData2", function() { return slideData2; });
var slideData1 = ['1月15日', '2月15日', '3月15日', '4月15日', '5月15日', '6月15日', '7月15日', '8月15日', '9月15日', '10月15日', '11月15日', '12月15日', '13月15日', '14月15日', '15月15日', '16月15日'];
var slideData2 = ['1月15日', '2月15日', '3月15日', '4月15日', '5月15日', '6月15日', '7月15日', '8月15日', '9月15日'];

/***/ }),

/***/ "ed13d0969987be818423":
/*!*********************************************!*\
  !*** ./src/views/timeLine/TimeLineView.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "b28d1f103e4a5b2e8ef8");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "55f6171b5a254025824d");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style */ "c099c4fc48cd9bb84110");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "21700e306353b2e19c0b");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "8af190b70a6bc55c6f1b");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.less */ "a3341656b0fa7784c170");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _timeLineData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timeLineData */ "d5ad9a330a12a59294c6");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "91409e3157f4cc61f11f");





function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var TimeLine =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TimeLine, _React$Component);

  function TimeLine(props) {
    var _this;

    _classCallCheck(this, TimeLine);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TimeLine).call(this, props));
    _this.state = {
      currentStatus: 4,

      /**
       * @description statusArr表示时间轴高亮的部分
       */
      statusArr: [],
      toLeft: false
    };
    return _this;
  }

  _createClass(TimeLine, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.renderArr();
    }
    /**
     * @method renderArr 根据当前状态以及更新后的状态跟新时间轴
     * @param status  初始状态和点击后的状态
     */

  }, {
    key: "renderArr",
    value: function renderArr() {
      var currentStatus = parseInt(this.state.currentStatus);
      var newArr = [];

      for (var i = 0; i <= currentStatus; i++) {
        newArr.push(true);
      }
      /**
       *@description 修复状态3箭头指向,状态为数据更新时箭头指向向右
       *
       */


      if (currentStatus == 4) {
        this.setState({
          toLeft: true
        });
      } else {
        this.setState({
          toLeft: false
        });
      }

      this.setState({
        statusArr: newArr
      });
    }
  }, {
    key: "changeStatus",
    value: function changeStatus(from, to) {
      var _this2 = this;

      this.setState({
        currentStatus: to
      }, function () {
        _this2.renderArr();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "timelineWrap"
      }, _timeLineData__WEBPACK_IMPORTED_MODULE_6__["timeLine"].map(function (item, index, arr) {
        /**
         * @description 控制每块的class
         */
        var className = 'timeItem';

        if (_this3.state.statusArr[index]) {
          className += ' itemSelected';
        }

        if (_this3.state.currentStatus == index) {
          className += ' currentStatus';
        }
        /**
         * @description 箭头的指向
         */


        var arrow = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
          type: "down"
        });

        if (index == 3 && _this3.state.toLeft) {
          arrow = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
            type: "left"
          });
        }

        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: className,
          key: index
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
          className: "dot"
        }, arrow), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "content"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
          className: "label"
        }, item.label), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "btnsWrap"
        }, item.buttons && item.buttons.map(function (item2, index2, arr2) {
          /**
           * @description 渲染button
           */
          return _this3.state.currentStatus == index ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
            key: index2,
            onClick: function onClick() {
              _this3.changeStatus(item.status, item2.target);
            }
          }, item2.text) : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
            key: index2
          }, item2.text);
        })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "linksWrap"
        }, item.links && item.links.map(function (item3, index3, arr3) {
          /**
          * @description 渲染links
          */
          return _this3.state.statusArr[index] ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
            to: item3.target,
            key: index3
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
            className: "iconfont ".concat(item3.icon)
          }), item3.text) : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
            key: index3
          }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
            className: "iconfont ".concat(item3.icon)
          }), item3.text);
        }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "hLines"
        }));
      }));
    }
  }]);

  return TimeLine;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TimeLine);

/***/ }),

/***/ "ee856c1ce8bc65faa8ec":
/*!************************************!*\
  !*** ./src/views/Flow/FlowItem.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row/style */ "430efd9ee93fab5ea3aa");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "ab77426700a64afb515f");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_popconfirm_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/popconfirm/style */ "0b1f1303b77f5015657e");
/* harmony import */ var antd_lib_popconfirm_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popconfirm_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/popconfirm */ "91664cba009678441dbd");
/* harmony import */ var antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/icon/style */ "c099c4fc48cd9bb84110");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/icon */ "21700e306353b2e19c0b");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/input/style */ "2bef2847a697d49723f5");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/input */ "8ea69893f2da751b3fed");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "8af190b70a6bc55c6f1b");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _flow_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./flow.less */ "0cf6b9175bd08a1324e3");
/* harmony import */ var _flow_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_flow_less__WEBPACK_IMPORTED_MODULE_9__);









function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var TextArea = antd_lib_input__WEBPACK_IMPORTED_MODULE_7___default.a.TextArea;


var LoanFlowItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LoanFlowItem, _React$Component);

  function LoanFlowItem() {
    _classCallCheck(this, LoanFlowItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(LoanFlowItem).apply(this, arguments));
  }

  _createClass(LoanFlowItem, [{
    key: "textChange",
    value: function textChange(e, type, step) {
      var value = e.target.value;

      if (this.props.textChange) {
        this.props.textChange(value, type, step);
      }
    }
  }, {
    key: "cancleAdd",
    value: function cancleAdd(step) {
      if (this.props.cancleAdd) {
        this.props.cancleAdd(step);
      }
    }
  }, {
    key: "confirmAdd",
    value: function confirmAdd(step) {
      if (this.props.confirmAdd) {
        this.props.confirmAdd(step);
      }
    }
  }, {
    key: "openEdit",
    value: function openEdit(step) {
      if (this.props.openEdit) {
        this.props.openEdit(step);
      }
    }
  }, {
    key: "beforeUpload",
    value: function beforeUpload(file, step) {
      if (this.props.beforeUpload) {
        this.props.beforeUpload(file, step);
      }
    }
  }, {
    key: "sortData",
    value: function sortData(type, step, flowType) {
      if (this.props.sortData) {
        this.props.sortData(type, step, flowType);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          data = _this$props.data,
          step = _this$props.step,
          flowType = _this$props.flowType,
          total = _this$props.total;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: _flow_less__WEBPACK_IMPORTED_MODULE_9___default.a.flowitemWrap
      }, data && data.editFlag ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: _flow_less__WEBPACK_IMPORTED_MODULE_9___default.a.centerwrap
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: _flow_less__WEBPACK_IMPORTED_MODULE_9___default.a.centerleft
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        alt: "icon",
        src: data.icon,
        width: "30",
        height: "30"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: _flow_less__WEBPACK_IMPORTED_MODULE_9___default.a.textwrap
      }, data.title), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: _flow_less__WEBPACK_IMPORTED_MODULE_9___default.a.textwrap
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(TextArea, {
        placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
        onChange: function onChange(e) {
          _this.textChange(e, 'description', step);
        },
        value: data.description
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: _flow_less__WEBPACK_IMPORTED_MODULE_9___default.a.centerright
      }, step !== total - 1 ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
        type: "arrow-down",
        onClick: function onClick() {
          _this.sortData('down', step, flowType);
        }
      }) : null, step !== 0 ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
        type: "arrow-up",
        onClick: function onClick() {
          _this.sortData('up', step, flowType);
        }
      }) : null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_3___default.a, {
        title: "\u786E\u8BA4\u5220\u9664\u5417\uFF1F",
        onConfirm: function onConfirm() {
          _this.cancleAdd(step);
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
        type: "close"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
        type: "check",
        onClick: function onClick() {
          _this.confirmAdd(step);
        }
      }))) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: _flow_less__WEBPACK_IMPORTED_MODULE_9___default.a.centerwrap
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: _flow_less__WEBPACK_IMPORTED_MODULE_9___default.a.centerleft
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        alt: "icon",
        src: data.icon,
        width: "30",
        height: "30"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: _flow_less__WEBPACK_IMPORTED_MODULE_9___default.a.textwrap
      }, data.title), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: _flow_less__WEBPACK_IMPORTED_MODULE_9___default.a.textwrap
      }, data.description)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: _flow_less__WEBPACK_IMPORTED_MODULE_9___default.a.centerright
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
        type: "edit",
        onClick: function onClick() {
          _this.openEdit(step);
        }
      }))));
    }
  }]);

  return LoanFlowItem;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (LoanFlowItem);

/***/ }),

/***/ "ef605bb5a4a1e7ad1e17":
/*!************************************!*\
  !*** ./src/pub-sub/store/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions.js */ "1ea33c0fe0b37882290b");
/* harmony import */ var _mutations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mutations.js */ "4573fd42727860f4a96d");
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state.js */ "8bf9f5ceb63a6daa4739");
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store.js */ "56b7fdc1b11e55d3bb3d");




/* harmony default export */ __webpack_exports__["default"] = (new _store_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
  actions: _actions_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  mutations: _mutations_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  state: _state_js__WEBPACK_IMPORTED_MODULE_2__["default"]
}));

/***/ }),

/***/ "ef9fc4aa5c1823ea9201":
/*!****************************************!*\
  !*** ./src/views/Flow/FlowTemplate.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/spin/style */ "d9b296048a068290efe3");
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/spin */ "44205f4f15931773029f");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "8af190b70a6bc55c6f1b");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/index */ "0ef39b99c776accd2301");



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




var FlowTemplate =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FlowTemplate, _React$Component);

  function FlowTemplate(props) {
    var _this;

    _classCallCheck(this, FlowTemplate);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FlowTemplate).call(this, props));
    _this.state = {
      spinning: false,
      dataSource1: {
        APPLY: [],
        AUDIT: []
      }
    };
    return _this;
  }

  _createClass(FlowTemplate, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var select = this.props.select;

      if (!select) {
        this.loadTemplate();
      }
    }
  }, {
    key: "onSelectChange",
    value: function onSelectChange(selectedRowKeys, selectedRows, type) {
      if (this.props.onSelectChange) {
        this.props.onSelectChange(selectedRowKeys, selectedRows, type);
      }
    }
  }, {
    key: "dealFlowData",
    value: function dealFlowData(data) {
      var dataSource1 = {
        APPLY: [],
        AUDIT: []
      };

      if (Array.isArray(data)) {
        data.forEach(function (flow) {
          if (flow.type === 'APPLY') {
            dataSource1.APPLY.push(flow);
          } else {
            dataSource1.AUDIT.push(flow);
          }
        });
      }

      this.setState({
        dataSource1: dataSource1
      });
    }
  }, {
    key: "loadTemplate",
    value: function () {
      var _loadTemplate = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var _ref, data;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setState({
                  spinning: true
                });
                _context.prev = 1;
                _context.next = 4;
                return getFlowTemplate();

              case 4:
                _ref = _context.sent;
                data = _ref.data;
                this.dealFlowData(data);
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](1);
                console.log(_context.t0);

              case 12:
                this.setState({
                  spinning: false
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 9]]);
      }));

      function loadTemplate() {
        return _loadTemplate.apply(this, arguments);
      }

      return loadTemplate;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          select = _this$props.select,
          dataSource = _this$props.dataSource,
          selectedRowKeys = _this$props.selectedRowKeys,
          type = _this$props.type;
      var _this$state = this.state,
          spinning = _this$state.spinning,
          dataSource1 = _this$state.dataSource1;
      var rowSelection = {
        selectedRowKeys: selectedRowKeys,
        onChange: function onChange(selectedRowKeys, selectedRows) {
          _this2.onSelectChange(selectedRowKeys, selectedRows, type);
        }
      };
      var columns = [{
        title: 'icon',
        dataIndex: 'icon',
        key: 'icon',
        render: function render(text, record, index) {
          return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
            src: text,
            alt: "icon",
            width: "30",
            height: "30"
          });
        }
      }, {
        title: 'title',
        dataIndex: 'title',
        key: 'title'
      }, {
        title: 'description',
        dataIndex: 'description',
        key: 'description'
      }];

      if (select) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_index__WEBPACK_IMPORTED_MODULE_3__["LenTable"], {
          columns: columns,
          dataSource: dataSource,
          rowSelection: rowSelection
        }));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PageHeaderLayout, {
          title: "flow\u6A21\u677F\u8BBE\u7F6E"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default.a, {
          spinning: spinning
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", null, "APPLY"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_index__WEBPACK_IMPORTED_MODULE_3__["LenTable"], {
          columns: columns,
          dataSource: dataSource1.APPLY
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", null, "AUDIT"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_index__WEBPACK_IMPORTED_MODULE_3__["LenTable"], {
          columns: columns,
          dataSource: dataSource1.AUDIT
        })));
      }
    }
  }]);

  return FlowTemplate;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (FlowTemplate);

/***/ }),

/***/ "f096eec40047cc7cae4c":
/*!************************************!*\
  !*** ./src/views/upload/index.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UploadTest; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "8af190b70a6bc55c6f1b");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Upload_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Upload.jsx */ "abb77d417d761f397217");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.less */ "39cba267667980facb29");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var UploadTest =
/*#__PURE__*/
function (_React$Component) {
  _inherits(UploadTest, _React$Component);

  function UploadTest() {
    _classCallCheck(this, UploadTest);

    return _possibleConstructorReturn(this, _getPrototypeOf(UploadTest).apply(this, arguments));
  }

  _createClass(UploadTest, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "uploadTest"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "upload-inner"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "\u4F18\u60E0\u5217\u8868\u4E3B\u56FE"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Upload_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "upload-inner"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "\u4F18\u60E0\u5217\u8868\u80CC\u666F\u56FE"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Upload_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
    }
  }]);

  return UploadTest;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


;

/***/ }),

/***/ "f790f5f316a66d837da9":
/*!***********************************!*\
  !*** ./src/views/index/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_breadcrumb_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/breadcrumb/style */ "226c41536b8a346d5494");
/* harmony import */ var antd_lib_breadcrumb_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_breadcrumb_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/breadcrumb */ "4f03a2d21d96b7302c50");
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/menu/style */ "0205cc8feb741eb7f5d6");
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/menu */ "3af481c1b0e9bc0eb2ac");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/icon/style */ "c099c4fc48cd9bb84110");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/icon */ "21700e306353b2e19c0b");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/layout/style */ "b9dfb0890ffa2df878a0");
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/layout */ "f2f9db8dd357950110e7");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "8af190b70a6bc55c6f1b");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var dva__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dva */ "3a8d0c344d1f86a21c86");
/* harmony import */ var dva__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dva__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index.less */ "746f7afb4e63d5e313dc");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "91409e3157f4cc61f11f");
/* harmony import */ var _common_nav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/common/nav */ "52f5f6bcbcb3449bee20");









var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Header = antd_lib_layout__WEBPACK_IMPORTED_MODULE_7___default.a.Header,
    Sider = antd_lib_layout__WEBPACK_IMPORTED_MODULE_7___default.a.Sider,
    Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_7___default.a.Content;



var menuList = _common_nav__WEBPACK_IMPORTED_MODULE_12__["default"].flatten(Infinity);
var MainView = (_dec = Object(dva__WEBPACK_IMPORTED_MODULE_9__["connect"])(), _dec(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MainView, _React$Component);

  function MainView(props) {
    var _this;

    _classCallCheck(this, MainView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MainView).call(this, props));
    _this.state = {
      collapsed: false,
      openKeys: []
    };
    return _this;
  }

  _createClass(MainView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initWs();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      console.log(this.props);
    }
  }, {
    key: "initWs",
    value: function initWs() {
      var _this2 = this;

      var ws = new WebSocket('ws://localhost:8087/realtime_private');
      console.log('ws', ws);

      ws.onopen = function () {
        ws.send(JSON.stringify({
          "op": "query",
          "args": ["BTCUSDT"]
        }));
        console.log('open');
      };

      ws.onmessage = function (_ref) {
        var data = _ref.data;
        var res = JSON.parse(data);

        if (res.topic == 'private.wallet') {
          _this2.props.dispatch({
            type: 'wallet/changeWallet',
            data: res
          });
        }

        if (res.topic == 'private.position') {
          _this2.props.dispatch({
            type: 'wallet/changePosition',
            data: res
          });
        }
      };

      ws.onerror = function (error) {
        console.log('error', error);
      };

      ws.onclose = function () {
        console.log('onclose');
      };
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this.setState({
        collapsed: !this.state.collapsed
      });
    }
  }, {
    key: "renderMenu",
    value: function renderMenu(menusData, parentPath) {
      var _this3 = this;

      var collapsed = this.state.collapsed;
      return menusData.filter(function (item) {
        return !item.hide;
      }).map(function (item, index) {
        var _item$icon = item.icon,
            icon = _item$icon === void 0 ? "user" : _item$icon,
            url = item.url,
            name = item.name;
        var itemPath = "".concat(parentPath, "/").concat(url || "").replace(/\/+/g, "/");

        if (Array.isArray(item.children) && item.children.length > 0) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(SubMenu, {
            title: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
              type: icon
            }), name)
          }, _this3.renderMenu(item.children, itemPath));
        } else {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
            key: url || index
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
            type: icon
          }), collapsed ? null : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Link"], {
            to: "".concat(itemPath)
          }, name));
        }
      });
    }
  }, {
    key: "renderComponents",
    value: function renderComponents(menusData, parentPath) {
      var _this4 = this;

      var components = menusData.map(function (item, index) {
        var url = item.url;
        var itemPath = "".concat(parentPath, "/").concat(url || "").replace(/\/+/g, "/");
        var component = _common_nav__WEBPACK_IMPORTED_MODULE_12__["componentLink"][url];

        if (Array.isArray(item.children) && item.children.length > 0) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, _this4.renderComponents(item.children, itemPath));
        } else {
          return component ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
            exact: item.exact,
            key: itemPath,
            path: itemPath,
            component: component
          }) : null;
        }
      });
      return components;
    }
  }, {
    key: "getSelectedKeys",
    value: function getSelectedKeys() {
      var pathname = this.props.location.pathname;
      var keys = pathname.split("/").slice(1);
      return keys;
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      var asset = "react";
      var title = "";
      var location = this.props.location;
      var pathname = location.pathname;
      var keys = pathname.split("/").slice(1);

      if (!keys.length) {
        title = asset;
      }

      _common_nav__WEBPACK_IMPORTED_MODULE_12__["default"].forEach(function (item) {
        if (item.url == keys[0]) {
          title = "".concat(item.meta || item.name, "-").concat(asset);
        }
      });
      return title;
    }
  }, {
    key: "getOpenKeys",
    value: function getOpenKeys(routerConfig, loop, openKeys) {
      var location = this.props.location;
      var pathname = location.pathname;
      var keys = pathname.split("/").filter(function (item) {
        return item;
      }).slice(0, -1);

      var _ref2 = routerConfig.filter(function (item) {
        return item.url == keys[loop - 1];
      })[0] || {},
          url = _ref2.url,
          children = _ref2.children;

      if (url) {
        openKeys.push(url);
      }

      if (Array.isArray(children) && children.length > 0) {
        this.getOpenKeys(children, loop + 1, openKeys);
      }

      return openKeys;
    }
  }, {
    key: "renderBread",
    value: function renderBread(routerConfig, parentPath) {
      var pathname = this.props.location.pathname;
      var pathArr = pathname.split("/").filter(function (item) {
        return item;
      });

      if (Array.isArray(routerConfig) && routerConfig.length > 0) {
        return pathArr.map(function (item, index) {
          var currentIndex = routerConfig.findIndex(function (_ref3) {
            var url = _ref3.url;
            return item == url;
          });

          if (currentIndex > -1) {
            var _routerConfig$current = routerConfig[currentIndex],
                url = _routerConfig$current.url,
                resourceNameCn = _routerConfig$current.resourceNameCn;
            var itemPath = '#';

            for (var i = 0; i < index + 1; i++) {
              itemPath += "/".concat(pathArr[i]);
            } // itemPath = itemPath.slice(0,-1)


            return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
              href: itemPath
            }, resourceNameCn);
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$state = this.state,
          openKeys = _this$state.openKeys,
          collapsed = _this$state.collapsed;
      var location = this.props.location;
      var pathname = location.pathname;
      var title = this.getTitle();
      document.title = title;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_7___default.a, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Sider, {
        trigger: null,
        collapsible: true,
        collapsed: collapsed
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "logo"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a, {
        theme: "dark",
        mode: "inline",
        selectedKeys: this.getSelectedKeys(),
        openKeys: collapsed ? [] : openKeys,
        onOpenChange: function onOpenChange(openKeys) {
          return _this5.setState({
            openKeys: openKeys
          });
        }
      }, this.renderMenu(_common_nav__WEBPACK_IMPORTED_MODULE_12__["default"], ""))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_7___default.a, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Header, {
        style: {
          background: "#fff",
          padding: 0
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
        className: "trigger",
        type: this.state.collapsed ? "menu-unfold" : "menu-fold",
        onClick: function onClick() {
          _this5.toggle();
        }
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "breadcrumb"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        href: "/"
      }, "\u9996\u9875"), this.renderBread(menuList, ''))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Content, {
        style: {
          margin: "24px 16px",
          padding: 24,
          background: "#fff",
          minHeight: 280
        }
      }, this.renderComponents(_common_nav__WEBPACK_IMPORTED_MODULE_12__["default"], ""), pathname == "/" ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Redirect"], {
        exact: true,
        strict: true,
        from: "/",
        to: "/appMananger"
      }) : null)));
    }
  }]);

  return MainView;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component)) || _class);
/* harmony default export */ __webpack_exports__["default"] = (MainView);

/***/ }),

/***/ "f87203303a81019a6b79":
/*!********************************************!*\
  !*** ./src/components/Tooltip/Tooltip.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "8af190b70a6bc55c6f1b");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Tooltip =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tooltip, _React$Component);

  function Tooltip(props) {
    _classCallCheck(this, Tooltip);

    return _possibleConstructorReturn(this, _getPrototypeOf(Tooltip).call(this, props));
  }

  _createClass(Tooltip, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this.props);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {}
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return Tooltip;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Tooltip);

/***/ }),

/***/ "ff61d1fd4701b65595a2":
/*!**********************!*\
  !*** ./src/main.jsx ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_dist_antd_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/dist/antd.less */ "0b67099f0eabd3c2641b");
/* harmony import */ var antd_dist_antd_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var animate_css_animate_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animate.css/animate.css */ "75af253476fabe4074d5");
/* harmony import */ var animate_css_animate_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(animate_css_animate_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! whatwg-fetch */ "81466c1910d9b02d71b2");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-polyfill */ "a26e52c4218006ed1d2f");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dva__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dva */ "3a8d0c344d1f86a21c86");
/* harmony import */ var dva__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dva__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment_locale_zh_cn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment/locale/zh-cn */ "a25e83e8799759c246e1");
/* harmony import */ var moment_locale_zh_cn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment_locale_zh_cn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.less */ "e31db7fcf7d1ce2cacbf");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_6__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// 引入css样式

 //引入fetch

 //



 //import browserHistory from 'history/createBrowserHistory'
// import { browserHistory } from 'dva/router';



var models = __webpack_require__("c393ad287278fb121606"); // 1. Initialize


var app = dva__WEBPACK_IMPORTED_MODULE_4___default()({
  //history: browserHistory
  history: __webpack_require__(/*! history */ "ab7c549b8ff2d886f5ce").createHashHistory()
}); // 2. Plugins
// app.use({});

var originFetch = fetch;
Object.defineProperty(window, "fetch", {
  configurable: true,
  enumerable: true,
  // writable: true,
  get: function get() {
    return function (url, options) {
      return originFetch(url, _objectSpread({}, options, _objectSpread({
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          Accept: 'application/json',
          token: localStorage.getItem('token')
        }
      }, options.headers))).then(function (res) {
        return res;
      });
    };
  }
}); // 3. Model move to router

models.keys().forEach(function (key) {
  app.model(models(key)["default"]);
}); // 4. Router

app.router(__webpack_require__(/*! ./router */ "98f7bfdbe716f5461d3c")["default"]); // 5. Start

app.start('#main');
/* harmony default export */ __webpack_exports__["default"] = (app._store);

/***/ })

},[[0,"manifest","styles","vendor"]]]);
//# sourceMappingURL=mainb4f1a1316eabd168f33a.js.map