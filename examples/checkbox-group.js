webpackJsonp([22],{

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return regionStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return errorStyle; });
var regionStyle = {
  border: '1px solid red',
  marginTop: 10,
  padding: 10
};

var errorStyle = {
  color: 'red',
  marginTop: 10,
  padding: 10
};

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
throw new Error("Cannot find module \"rc-form/src/createDOMForm\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_dom__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__styles__ = __webpack_require__(42);





/* eslint react/no-multi-comp:0, no-console:0 */







var Form = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Form, _Component);

  function Form() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Form);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = Form.__proto__ || Object.getPrototypeOf(Form)).call.apply(_ref, [this].concat(args))), _this), _this.onSubmit = function (e) {
      console.log('submit');
      e.preventDefault();
      _this.props.form.validateFieldsAndScroll({ scroll: { offsetTop: 20 } }, function (error, values) {
        if (!error) {
          console.log('ok', values);
        } else {
          console.log('error', error, values);
        }
      });
    }, _this.reset = function (e) {
      e.preventDefault();
      _this.props.form.resetFields();
    }, _temp), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Form, [{
    key: 'render',
    value: function render() {
      var form = this.props.form;
      var getFieldProps = form.getFieldProps;

      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        'div',
        { style: { margin: 20 } },
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'h2',
          null,
          'checkbox-group'
        ),
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'form',
          { onSubmit: this.onSubmit },
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
            'div',
            { style: __WEBPACK_IMPORTED_MODULE_9__styles__["a" /* regionStyle */] },
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
              'div',
              null,
              'checkbox-group'
            ),
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
              'div',
              null,
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'label',
                null,
                'a:',
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('input', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
                  type: 'checkbox'
                }, getFieldProps('normal.a', {
                  initialValue: false,
                  valuePropName: 'checked'
                })))
              ),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('br', null),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'label',
                null,
                'b:',
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('input', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
                  type: 'checkbox'
                }, getFieldProps('normal.b', {
                  initialValue: 'b',
                  getValueFromEvent: function getValueFromEvent(e) {
                    return e.target.checked ? 'b' : '';
                  },
                  getValueProps: function getValueProps(value) {
                    return {
                      checked: !!value
                    };
                  }
                })))
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
            'div',
            { style: __WEBPACK_IMPORTED_MODULE_9__styles__["a" /* regionStyle */] },
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
              'button',
              { onClick: this.reset },
              'reset'
            ),
            '\xA0',
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('input', { type: 'submit', value: 'submit' })
          )
        )
      );
    }
  }]);

  return Form;
}(__WEBPACK_IMPORTED_MODULE_6_react__["Component"]);

Form.propTypes = {
  form: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.object
};


var NewForm = __WEBPACK_IMPORTED_MODULE_5_rc_form_src_createDOMForm___default()()(Form);

__WEBPACK_IMPORTED_MODULE_8_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(NewForm, null), document.getElementById('__react-content'));

/***/ }),

/***/ 677:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(476);


/***/ })

},[677]);
//# sourceMappingURL=checkbox-group.js.map