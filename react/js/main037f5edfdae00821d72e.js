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

/***/ 1:
/*!******************************!*\
  !*** min-document (ignored) ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!***************************!*\
  !*** ./streams (ignored) ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!*******************************!*\
  !*** ./extend-node (ignored) ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "6654c475ed6ac23f154d":
/*!*********************************!*\
  !*** ./src/views/pdf/index.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "8af190b70a6bc55c6f1b");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "63f14ac74ce296f77f4d");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-pdf/renderer */ "1ff255f2f77a5a1a28a1");
/* eslint react/prop-types: 0 */

/* eslint react/jsx-sort-props: 0 */



var styles = _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["StyleSheet"].create({
  page: {
    flexDirection: 'row'
  },
  image: {
    width: '60%',
    padding: 10,
    backgroundColor: 'grey'
  },
  textWrapper: {
    width: '40%',
    height: '100%',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 50,
    paddingVertical: 30
  },
  text: {
    fontFamily: 'Oswald',
    color: '#212121'
  }
});
_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Font"].register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

var MyDocument = function MyDocument() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Document"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Page"], {
    style: styles.page,
    size: [1500, 600],
    page: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
    style: styles.image
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: "http://blog.oxforddictionaries.com/wp-content/uploads/mountain-names.jpg"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["View"], {
    style: styles.textWrapper
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    style: styles.text
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))));
};

var App = function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__["PDFViewer"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MyDocument, null));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

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
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/spin/style */ "d9b296048a068290efe3");
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/spin */ "44205f4f15931773029f");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "8af190b70a6bc55c6f1b");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dva_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dva/router */ "d20ee11348d9f986110a");
/* harmony import */ var dva_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dva_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loadable */ "49112c95d93be1863904");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _views_Thanos_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @views/Thanos/index */ "00202a98bb09eaf405bb");
/* harmony import */ var _views_pdf_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @views/pdf/index */ "6654c475ed6ac23f154d");



function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



 // 引入组件
// import MainView  from './index/index';
// import About from './about/AboutView'
// import TimeLine from './timeLine/TimeLineView'
// import Home from './home/HomeView'
// import LoginView from './login/index'

var MainComponent = react_loadable__WEBPACK_IMPORTED_MODULE_4___default()({
  loader: function loader() {
    return Promise.all(/*! import() */[__webpack_require__.e("chunk-antd"), __webpack_require__.e("async-vendors"), __webpack_require__.e("styles"), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, /*! @views/index/index */ "f790f5f316a66d837da9"));
  },
  loading: LoadingPage
});
var LoginComponent = react_loadable__WEBPACK_IMPORTED_MODULE_4___default()({
  loader: function loader() {
    return Promise.all(/*! import() */[__webpack_require__.e("chunk-antd"), __webpack_require__.e("async-vendors"), __webpack_require__.e("styles"), __webpack_require__.e(0), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, /*! @views/login/index */ "cc40952a950107dc0492"));
  },
  loading: LoadingPage
});
var AboutComponent = react_loadable__WEBPACK_IMPORTED_MODULE_4___default()({
  loader: function loader() {
    return Promise.all(/*! import() */[__webpack_require__.e("chunk-antd"), __webpack_require__.e("async-vendors"), __webpack_require__.e(2), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, /*! @views/about/AboutView */ "a6f4efeb00136d939b9e"));
  },
  loading: LoadingPage
});
var TimeLineComponent = react_loadable__WEBPACK_IMPORTED_MODULE_4___default()({
  loader: function loader() {
    return Promise.all(/*! import() */[__webpack_require__.e("chunk-antd"), __webpack_require__.e("async-vendors"), __webpack_require__.e("styles"), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, /*! @views/timeLine/TimeLineView */ "ed13d0969987be818423"));
  },
  loading: LoadingPage
});
var HomeComponent = react_loadable__WEBPACK_IMPORTED_MODULE_4___default()({
  loader: function loader() {
    return Promise.all(/*! import() */[__webpack_require__.e("chunk-antd"), __webpack_require__.e("async-vendors"), __webpack_require__.e("styles"), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, /*! @views/home/HomeView */ "c28dfd7c9b79a75f1ffc"));
  },
  loading: LoadingPage
});



function LoadingPage() {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      width: "100%",
      height: "100%"
    }
  });
}

var routes = [{
  path: "/",
  component: LoginComponent,
  exact: true
}, {
  path: "/login",
  component: LoginComponent
}, {
  path: "/main",
  component: MainComponent,
  routes: [{
    path: "/main",
    component: HomeComponent,
    exact: true
  }, // { path: '/main/home', component: Home},
  {
    path: "/main/about",
    component: AboutComponent
  }, {
    path: "/main/timeline/:status",
    component: TimeLineComponent
  }, // { path: '/main/mobx', component: MobxComponent},
  {
    path: "/main/thanos",
    component: _views_Thanos_index__WEBPACK_IMPORTED_MODULE_5__["default"]
  }, {
    path: "/main/pdf",
    component: _views_pdf_index__WEBPACK_IMPORTED_MODULE_6__["default"]
  }]
}];

var RouteWithSubRoutes = function RouteWithSubRoutes(route) {
  return route.exact ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(dva_router__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: route.path,
    exact: true,
    render: function render(props) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(route.component, _extends({}, props, {
        routes: route.routes
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(dva_router__WEBPACK_IMPORTED_MODULE_3__["Switch"], null, route.routes && route.routes.map(function (route, i) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(RouteWithSubRoutes, _extends({
          key: i
        }, route));
      })));
    }
  }) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(dva_router__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: route.path,
    render: function render(props) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(route.component, _extends({}, props, {
        routes: route.routes
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(dva_router__WEBPACK_IMPORTED_MODULE_3__["Switch"], null, route.routes && route.routes.map(function (route, i) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(RouteWithSubRoutes, _extends({
          key: i
        }, route));
      })));
    }
  });
};

function RouterConfig(_ref) {
  var history = _ref.history;
  return (// <Provider {...stores}>
    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(dva_router__WEBPACK_IMPORTED_MODULE_3__["Router"], {
      history: history
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(dva_router__WEBPACK_IMPORTED_MODULE_3__["Switch"], null, routes.map(function (route, i) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(RouteWithSubRoutes, _extends({
        key: i
      }, route));
    }))) // </Provider>

  );
}

/* harmony default export */ __webpack_exports__["default"] = (RouterConfig);

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
// 引入css样式

 //引入fetch

 //



 // import models from './models';
//import browserHistory from 'history/createBrowserHistory'
// import { browserHistory } from 'dva/router';

 // 1. Initialize

var app = dva__WEBPACK_IMPORTED_MODULE_4___default()({
  //history: browserHistory
  history: __webpack_require__(/*! history */ "ab7c549b8ff2d886f5ce").createHashHistory()
}); // 2. Plugins
// app.use({});
// 3. Model move to router
// models.forEach((m) => {
//   app.model(m);
// });
// 4. Router

app.router(__webpack_require__(/*! ./router */ "98f7bfdbe716f5461d3c")["default"]); // 5. Start

app.start('#main');
/* harmony default export */ __webpack_exports__["default"] = (app._store);

/***/ })

},[[0,"manifest","styles","vendor"]]]);
//# sourceMappingURL=main037f5edfdae00821d72e.js.map