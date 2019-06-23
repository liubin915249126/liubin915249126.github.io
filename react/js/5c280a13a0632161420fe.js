(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

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

/***/ })

}]);
//# sourceMappingURL=5c280a13a0632161420fe.js.map