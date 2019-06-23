(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

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
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, "Modal\u7EC4\u4EF6"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
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

/***/ })

}]);
//# sourceMappingURL=3573ebecc0adb31c25766.js.map