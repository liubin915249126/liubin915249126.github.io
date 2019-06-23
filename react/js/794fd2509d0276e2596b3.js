(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

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

/***/ })

}]);
//# sourceMappingURL=794fd2509d0276e2596b3.js.map