webpackJsonp([20],{

/***/ 144:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

module.exports = function(arr, obj){
  if (arr.indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rc_util_es_unsafeLifecyclesPolyfill__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ChildrenUtils__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__AnimateChild__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__util_animate__ = __webpack_require__(158);













var defaultKey = 'rc_animate_' + Date.now();

function getChildrenFromProps(props) {
  var children = props.children;
  if (__WEBPACK_IMPORTED_MODULE_6_react___default.a.isValidElement(children)) {
    if (!children.key) {
      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.cloneElement(children, {
        key: defaultKey
      });
    }
  }
  return children;
}

function noop() {}

var Animate = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Animate, _React$Component);

  // eslint-disable-line

  function Animate(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Animate);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Animate.__proto__ || Object.getPrototypeOf(Animate)).call(this, props));

    _initialiseProps.call(_this);

    _this.currentlyAnimatingKeys = {};
    _this.keysToEnter = [];
    _this.keysToLeave = [];

    _this.state = {
      children: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__ChildrenUtils__["a" /* toArrayChildren */])(getChildrenFromProps(props))
    };

    _this.childrenRefs = {};
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Animate, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var showProp = this.props.showProp;
      var children = this.state.children;
      if (showProp) {
        children = children.filter(function (child) {
          return !!child.props[showProp];
        });
      }
      children.forEach(function (child) {
        if (child) {
          _this2.performAppear(child.key);
        }
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      this.nextProps = nextProps;
      var nextChildren = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__ChildrenUtils__["a" /* toArrayChildren */])(getChildrenFromProps(nextProps));
      var props = this.props;
      // exclusive needs immediate response
      if (props.exclusive) {
        Object.keys(this.currentlyAnimatingKeys).forEach(function (key) {
          _this3.stop(key);
        });
      }
      var showProp = props.showProp;
      var currentlyAnimatingKeys = this.currentlyAnimatingKeys;
      // last props children if exclusive
      var currentChildren = props.exclusive ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__ChildrenUtils__["a" /* toArrayChildren */])(getChildrenFromProps(props)) : this.state.children;
      // in case destroy in showProp mode
      var newChildren = [];
      if (showProp) {
        currentChildren.forEach(function (currentChild) {
          var nextChild = currentChild && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__ChildrenUtils__["b" /* findChildInChildrenByKey */])(nextChildren, currentChild.key);
          var newChild = void 0;
          if ((!nextChild || !nextChild.props[showProp]) && currentChild.props[showProp]) {
            newChild = __WEBPACK_IMPORTED_MODULE_6_react___default.a.cloneElement(nextChild || currentChild, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()({}, showProp, true));
          } else {
            newChild = nextChild;
          }
          if (newChild) {
            newChildren.push(newChild);
          }
        });
        nextChildren.forEach(function (nextChild) {
          if (!nextChild || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__ChildrenUtils__["b" /* findChildInChildrenByKey */])(currentChildren, nextChild.key)) {
            newChildren.push(nextChild);
          }
        });
      } else {
        newChildren = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__ChildrenUtils__["c" /* mergeChildren */])(currentChildren, nextChildren);
      }

      // need render to avoid update
      this.setState({
        children: newChildren
      });

      nextChildren.forEach(function (child) {
        var key = child && child.key;
        if (child && currentlyAnimatingKeys[key]) {
          return;
        }
        var hasPrev = child && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__ChildrenUtils__["b" /* findChildInChildrenByKey */])(currentChildren, key);
        if (showProp) {
          var showInNext = child.props[showProp];
          if (hasPrev) {
            var showInNow = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__ChildrenUtils__["d" /* findShownChildInChildrenByKey */])(currentChildren, key, showProp);
            if (!showInNow && showInNext) {
              _this3.keysToEnter.push(key);
            }
          } else if (showInNext) {
            _this3.keysToEnter.push(key);
          }
        } else if (!hasPrev) {
          _this3.keysToEnter.push(key);
        }
      });

      currentChildren.forEach(function (child) {
        var key = child && child.key;
        if (child && currentlyAnimatingKeys[key]) {
          return;
        }
        var hasNext = child && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__ChildrenUtils__["b" /* findChildInChildrenByKey */])(nextChildren, key);
        if (showProp) {
          var showInNow = child.props[showProp];
          if (hasNext) {
            var showInNext = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__ChildrenUtils__["d" /* findShownChildInChildrenByKey */])(nextChildren, key, showProp);
            if (!showInNext && showInNow) {
              _this3.keysToLeave.push(key);
            }
          } else if (showInNow) {
            _this3.keysToLeave.push(key);
          }
        } else if (!hasNext) {
          _this3.keysToLeave.push(key);
        }
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var keysToEnter = this.keysToEnter;
      this.keysToEnter = [];
      keysToEnter.forEach(this.performEnter);
      var keysToLeave = this.keysToLeave;
      this.keysToLeave = [];
      keysToLeave.forEach(this.performLeave);
    }
  }, {
    key: 'isValidChildByKey',
    value: function isValidChildByKey(currentChildren, key) {
      var showProp = this.props.showProp;
      if (showProp) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__ChildrenUtils__["d" /* findShownChildInChildrenByKey */])(currentChildren, key, showProp);
      }
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__ChildrenUtils__["b" /* findChildInChildrenByKey */])(currentChildren, key);
    }
  }, {
    key: 'stop',
    value: function stop(key) {
      delete this.currentlyAnimatingKeys[key];
      var component = this.childrenRefs[key];
      if (component) {
        component.stop();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var props = this.props;
      this.nextProps = props;
      var stateChildren = this.state.children;
      var children = null;
      if (stateChildren) {
        children = stateChildren.map(function (child) {
          if (child === null || child === undefined) {
            return child;
          }
          if (!child.key) {
            throw new Error('must set key for <rc-animate> children');
          }
          return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_10__AnimateChild__["a" /* default */],
            {
              key: child.key,
              ref: function ref(node) {
                _this4.childrenRefs[child.key] = node;
              },
              animation: props.animation,
              transitionName: props.transitionName,
              transitionEnter: props.transitionEnter,
              transitionAppear: props.transitionAppear,
              transitionLeave: props.transitionLeave
            },
            child
          );
        });
      }
      var Component = props.component;
      if (Component) {
        var passedProps = props;
        if (typeof Component === 'string') {
          passedProps = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
            className: props.className,
            style: props.style
          }, props.componentProps);
        }
        return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          Component,
          passedProps,
          children
        );
      }
      return children[0] || null;
    }
  }]);

  return Animate;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

Animate.isAnimate = true;
Animate.propTypes = {
  className: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.string,
  style: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.object,
  component: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.any,
  componentProps: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.object,
  animation: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.object,
  transitionName: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.object]),
  transitionEnter: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,
  transitionAppear: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,
  exclusive: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,
  transitionLeave: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,
  onEnd: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
  onEnter: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
  onLeave: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
  onAppear: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
  showProp: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.string,
  children: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.node
};
Animate.defaultProps = {
  animation: {},
  component: 'span',
  componentProps: {},
  transitionEnter: true,
  transitionLeave: true,
  transitionAppear: false,
  onEnd: noop,
  onEnter: noop,
  onLeave: noop,
  onAppear: noop
};

var _initialiseProps = function _initialiseProps() {
  var _this5 = this;

  this.performEnter = function (key) {
    // may already remove by exclusive
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;
      _this5.childrenRefs[key].componentWillEnter(_this5.handleDoneAdding.bind(_this5, key, 'enter'));
    }
  };

  this.performAppear = function (key) {
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;
      _this5.childrenRefs[key].componentWillAppear(_this5.handleDoneAdding.bind(_this5, key, 'appear'));
    }
  };

  this.handleDoneAdding = function (key, type) {
    var props = _this5.props;
    delete _this5.currentlyAnimatingKeys[key];
    // if update on exclusive mode, skip check
    if (props.exclusive && props !== _this5.nextProps) {
      return;
    }
    var currentChildren = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__ChildrenUtils__["a" /* toArrayChildren */])(getChildrenFromProps(props));
    if (!_this5.isValidChildByKey(currentChildren, key)) {
      // exclusive will not need this
      _this5.performLeave(key);
    } else if (type === 'appear') {
      if (__WEBPACK_IMPORTED_MODULE_11__util_animate__["a" /* default */].allowAppearCallback(props)) {
        props.onAppear(key);
        props.onEnd(key, true);
      }
    } else if (__WEBPACK_IMPORTED_MODULE_11__util_animate__["a" /* default */].allowEnterCallback(props)) {
      props.onEnter(key);
      props.onEnd(key, true);
    }
  };

  this.performLeave = function (key) {
    // may already remove by exclusive
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;
      _this5.childrenRefs[key].componentWillLeave(_this5.handleDoneLeaving.bind(_this5, key));
    }
  };

  this.handleDoneLeaving = function (key) {
    var props = _this5.props;
    delete _this5.currentlyAnimatingKeys[key];
    // if update on exclusive mode, skip check
    if (props.exclusive && props !== _this5.nextProps) {
      return;
    }
    var currentChildren = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__ChildrenUtils__["a" /* toArrayChildren */])(getChildrenFromProps(props));
    // in case state change is too fast
    if (_this5.isValidChildByKey(currentChildren, key)) {
      _this5.performEnter(key);
    } else {
      var end = function end() {
        if (__WEBPACK_IMPORTED_MODULE_11__util_animate__["a" /* default */].allowLeaveCallback(props)) {
          props.onLeave(key);
          props.onEnd(key, false);
        }
      };
      if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__ChildrenUtils__["e" /* isSameChildren */])(_this5.state.children, currentChildren, props.showProp)) {
        _this5.setState({
          children: currentChildren
        }, end);
      } else {
        end();
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_rc_util_es_unsafeLifecyclesPolyfill__["a" /* default */])(Animate));

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var util = {
  isAppearSupported: function isAppearSupported(props) {
    return props.transitionName && props.transitionAppear || props.animation.appear;
  },
  isEnterSupported: function isEnterSupported(props) {
    return props.transitionName && props.transitionEnter || props.animation.enter;
  },
  isLeaveSupported: function isLeaveSupported(props) {
    return props.transitionName && props.transitionLeave || props.animation.leave;
  },
  allowAppearCallback: function allowAppearCallback(props) {
    return props.transitionAppear || props.animation.appear;
  },
  allowEnterCallback: function allowEnterCallback(props) {
    return props.transitionEnter || props.animation.enter;
  },
  allowLeaveCallback: function allowLeaveCallback(props) {
    return props.transitionLeave || props.animation.leave;
  }
};
/* harmony default export */ __webpack_exports__["a"] = (util);

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var React = __webpack_require__(2);
var factory = __webpack_require__(139);

if (typeof React === 'undefined') {
  throw Error(
    'create-react-class could not find the React object. If you are using script tags, ' +
      'make sure that React is being loaded before create-react-class.'
  );
}

// Hack to grab NoopUpdateQueue from isomorphic React
var ReactNoopUpdateQueue = new React.Component().updater;

module.exports = factory(
  React.Component,
  React.isValidElement,
  ReactNoopUpdateQueue
);


/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = addEventListener;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _EventObject = __webpack_require__(186);

var _EventObject2 = _interopRequireDefault(_EventObject);

function addEventListener(target, eventType, callback, option) {
  function wrapCallback(e) {
    var ne = new _EventObject2['default'](e);
    callback.call(target, ne);
  }

  if (target.addEventListener) {
    var _ret = (function () {
      var useCapture = false;
      if (typeof option === 'object') {
        useCapture = option.capture || false;
      } else if (typeof option === 'boolean') {
        useCapture = option;
      }

      target.addEventListener(eventType, wrapCallback, option || false);

      return {
        v: {
          remove: function remove() {
            target.removeEventListener(eventType, wrapCallback, useCapture);
          }
        }
      };
    })();

    if (typeof _ret === 'object') return _ret.v;
  } else if (target.attachEvent) {
    target.attachEvent('on' + eventType, wrapCallback);
    return {
      remove: function remove() {
        target.detachEvent('on' + eventType, wrapCallback);
      }
    };
  }
}

module.exports = exports['default'];

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

try {
  var index = __webpack_require__(154);
} catch (err) {
  var index = __webpack_require__(154);
}

/**
 * Whitespace regexp.
 */

var re = /\s+/;

/**
 * toString reference.
 */

var toString = Object.prototype.toString;

/**
 * Wrap `el` in a `ClassList`.
 *
 * @param {Element} el
 * @return {ClassList}
 * @api public
 */

module.exports = function(el){
  return new ClassList(el);
};

/**
 * Initialize a new ClassList for `el`.
 *
 * @param {Element} el
 * @api private
 */

function ClassList(el) {
  if (!el || !el.nodeType) {
    throw new Error('A DOM element reference is required');
  }
  this.el = el;
  this.list = el.classList;
}

/**
 * Add class `name` if not already present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.add = function(name){
  // classList
  if (this.list) {
    this.list.add(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = index(arr, name);
  if (!~i) arr.push(name);
  this.el.className = arr.join(' ');
  return this;
};

/**
 * Remove class `name` when present, or
 * pass a regular expression to remove
 * any which match.
 *
 * @param {String|RegExp} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.remove = function(name){
  if ('[object RegExp]' == toString.call(name)) {
    return this.removeMatching(name);
  }

  // classList
  if (this.list) {
    this.list.remove(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = index(arr, name);
  if (~i) arr.splice(i, 1);
  this.el.className = arr.join(' ');
  return this;
};

/**
 * Remove all classes matching `re`.
 *
 * @param {RegExp} re
 * @return {ClassList}
 * @api private
 */

ClassList.prototype.removeMatching = function(re){
  var arr = this.array();
  for (var i = 0; i < arr.length; i++) {
    if (re.test(arr[i])) {
      this.remove(arr[i]);
    }
  }
  return this;
};

/**
 * Toggle class `name`, can force state via `force`.
 *
 * For browsers that support classList, but do not support `force` yet,
 * the mistake will be detected and corrected.
 *
 * @param {String} name
 * @param {Boolean} force
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.toggle = function(name, force){
  // classList
  if (this.list) {
    if ("undefined" !== typeof force) {
      if (force !== this.list.toggle(name, force)) {
        this.list.toggle(name); // toggle again to correct
      }
    } else {
      this.list.toggle(name);
    }
    return this;
  }

  // fallback
  if ("undefined" !== typeof force) {
    if (!force) {
      this.remove(name);
    } else {
      this.add(name);
    }
  } else {
    if (this.has(name)) {
      this.remove(name);
    } else {
      this.add(name);
    }
  }

  return this;
};

/**
 * Return an array of classes.
 *
 * @return {Array}
 * @api public
 */

ClassList.prototype.array = function(){
  var className = this.el.getAttribute('class') || '';
  var str = className.replace(/^\s+|\s+$/g, '');
  var arr = str.split(re);
  if ('' === arr[0]) arr.shift();
  return arr;
};

/**
 * Check if class `name` is present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.has =
ClassList.prototype.contains = function(name){
  return this.list
    ? this.list.contains(name)
    : !! ~index(this.array(), name);
};


/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addEventListenerWrap;

var _addDomEventListener = _interopRequireDefault(__webpack_require__(161));

var _reactDom = _interopRequireDefault(__webpack_require__(17));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addEventListenerWrap(target, eventType, cb, option) {
  /* eslint camelcase: 2 */
  var callback = _reactDom.default.unstable_batchedUpdates ? function run(e) {
    _reactDom.default.unstable_batchedUpdates(cb, e);
  } : cb;
  return (0, _addDomEventListener.default)(target, eventType, callback, option);
}

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(8);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(27);

var _classnames2 = _interopRequireDefault(_classnames);

var _omit = __webpack_require__(175);

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Icon = function Icon(props) {
    var type = props.type,
        _props$className = props.className,
        className = _props$className === undefined ? '' : _props$className,
        spin = props.spin;

    var classString = (0, _classnames2['default'])((0, _defineProperty3['default'])({
        anticon: true,
        'anticon-spin': !!spin || type === 'loading'
    }, 'anticon-' + type, true), className);
    return _react2['default'].createElement('i', (0, _extends3['default'])({}, (0, _omit2['default'])(props, ['type', 'spin']), { className: classString }));
};
exports['default'] = Icon;
module.exports = exports['default'];

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);

function omit(obj, fields) {
  var shallowCopy = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, obj);
  for (var i = 0; i < fields.length; i++) {
    var key = fields[i];
    delete shallowCopy[key];
  }
  return shallowCopy;
}

/* harmony default export */ __webpack_exports__["default"] = (omit);

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @ignore
 * some key-codes definition and utils from closure-library
 * @author yiminghe@gmail.com
 */
var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,

  /**
   * BACKSPACE
   */
  BACKSPACE: 8,

  /**
   * TAB
   */
  TAB: 9,

  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,

  /**
   * ENTER
   */
  ENTER: 13,

  /**
   * SHIFT
   */
  SHIFT: 16,

  /**
   * CTRL
   */
  CTRL: 17,

  /**
   * ALT
   */
  ALT: 18,

  /**
   * PAUSE
   */
  PAUSE: 19,

  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,

  /**
   * ESC
   */
  ESC: 27,

  /**
   * SPACE
   */
  SPACE: 32,

  /**
   * PAGE_UP
   */
  PAGE_UP: 33,

  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,

  /**
   * END
   */
  END: 35,

  /**
   * HOME
   */
  HOME: 36,

  /**
   * LEFT
   */
  LEFT: 37,

  /**
   * UP
   */
  UP: 38,

  /**
   * RIGHT
   */
  RIGHT: 39,

  /**
   * DOWN
   */
  DOWN: 40,

  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,

  /**
   * INSERT
   */
  INSERT: 45,

  /**
   * DELETE
   */
  DELETE: 46,

  /**
   * ZERO
   */
  ZERO: 48,

  /**
   * ONE
   */
  ONE: 49,

  /**
   * TWO
   */
  TWO: 50,

  /**
   * THREE
   */
  THREE: 51,

  /**
   * FOUR
   */
  FOUR: 52,

  /**
   * FIVE
   */
  FIVE: 53,

  /**
   * SIX
   */
  SIX: 54,

  /**
   * SEVEN
   */
  SEVEN: 55,

  /**
   * EIGHT
   */
  EIGHT: 56,

  /**
   * NINE
   */
  NINE: 57,

  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,

  /**
   * A
   */
  A: 65,

  /**
   * B
   */
  B: 66,

  /**
   * C
   */
  C: 67,

  /**
   * D
   */
  D: 68,

  /**
   * E
   */
  E: 69,

  /**
   * F
   */
  F: 70,

  /**
   * G
   */
  G: 71,

  /**
   * H
   */
  H: 72,

  /**
   * I
   */
  I: 73,

  /**
   * J
   */
  J: 74,

  /**
   * K
   */
  K: 75,

  /**
   * L
   */
  L: 76,

  /**
   * M
   */
  M: 77,

  /**
   * N
   */
  N: 78,

  /**
   * O
   */
  O: 79,

  /**
   * P
   */
  P: 80,

  /**
   * Q
   */
  Q: 81,

  /**
   * R
   */
  R: 82,

  /**
   * S
   */
  S: 83,

  /**
   * T
   */
  T: 84,

  /**
   * U
   */
  U: 85,

  /**
   * V
   */
  V: 86,

  /**
   * W
   */
  W: 87,

  /**
   * X
   */
  X: 88,

  /**
   * Y
   */
  Y: 89,

  /**
   * Z
   */
  Z: 90,

  /**
   * META
   */
  META: 91,

  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,

  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,

  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,

  /**
   * NUM_ONE
   */
  NUM_ONE: 97,

  /**
   * NUM_TWO
   */
  NUM_TWO: 98,

  /**
   * NUM_THREE
   */
  NUM_THREE: 99,

  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,

  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,

  /**
   * NUM_SIX
   */
  NUM_SIX: 102,

  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,

  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,

  /**
   * NUM_NINE
   */
  NUM_NINE: 105,

  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,

  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,

  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,

  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,

  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,

  /**
   * F1
   */
  F1: 112,

  /**
   * F2
   */
  F2: 113,

  /**
   * F3
   */
  F3: 114,

  /**
   * F4
   */
  F4: 115,

  /**
   * F5
   */
  F5: 116,

  /**
   * F6
   */
  F6: 117,

  /**
   * F7
   */
  F7: 118,

  /**
   * F8
   */
  F8: 119,

  /**
   * F9
   */
  F9: 120,

  /**
   * F10
   */
  F10: 121,

  /**
   * F11
   */
  F11: 122,

  /**
   * F12
   */
  F12: 123,

  /**
   * NUMLOCK
   */
  NUMLOCK: 144,

  /**
   * SEMICOLON
   */
  SEMICOLON: 186,

  /**
   * DASH
   */
  DASH: 189,

  /**
   * EQUALS
   */
  EQUALS: 187,

  /**
   * COMMA
   */
  COMMA: 188,

  /**
   * PERIOD
   */
  PERIOD: 190,

  /**
   * SLASH
   */
  SLASH: 191,

  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,

  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,

  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,

  /**
   * BACKSLASH
   */
  BACKSLASH: 220,

  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,

  /**
   * WIN_KEY
   */
  WIN_KEY: 224,

  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,

  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================

  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e) {
    var keyCode = e.keyCode;

    if (e.altKey && !e.ctrlKey || e.metaKey || // Function keys don't generate text
    keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
      return false;
    } // The following keys are quite harmless, even in combination with
    // CTRL, ALT or SHIFT.


    switch (keyCode) {
      case KeyCode.ALT:
      case KeyCode.CAPS_LOCK:
      case KeyCode.CONTEXT_MENU:
      case KeyCode.CTRL:
      case KeyCode.DOWN:
      case KeyCode.END:
      case KeyCode.ESC:
      case KeyCode.HOME:
      case KeyCode.INSERT:
      case KeyCode.LEFT:
      case KeyCode.MAC_FF_META:
      case KeyCode.META:
      case KeyCode.NUMLOCK:
      case KeyCode.NUM_CENTER:
      case KeyCode.PAGE_DOWN:
      case KeyCode.PAGE_UP:
      case KeyCode.PAUSE:
      case KeyCode.PRINT_SCREEN:
      case KeyCode.RIGHT:
      case KeyCode.SHIFT:
      case KeyCode.UP:
      case KeyCode.WIN_KEY:
      case KeyCode.WIN_KEY_RIGHT:
        return false;

      default:
        return true;
    }
  },

  /**
   * whether character is entered.
   */
  isCharacterKey: function isCharacterKey(keyCode) {
    if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
      return true;
    }

    if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
      return true;
    }

    if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
      return true;
    } // Safari sends zero key code for non-latin characters.


    if (window.navigator.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
      return true;
    }

    switch (keyCode) {
      case KeyCode.SPACE:
      case KeyCode.QUESTION_MARK:
      case KeyCode.NUM_PLUS:
      case KeyCode.NUM_MINUS:
      case KeyCode.NUM_PERIOD:
      case KeyCode.NUM_DIVISION:
      case KeyCode.SEMICOLON:
      case KeyCode.DASH:
      case KeyCode.EQUALS:
      case KeyCode.COMMA:
      case KeyCode.PERIOD:
      case KeyCode.SLASH:
      case KeyCode.APOSTROPHE:
      case KeyCode.SINGLE_QUOTE:
      case KeyCode.OPEN_SQUARE_BRACKET:
      case KeyCode.BACKSLASH:
      case KeyCode.CLOSE_SQUARE_BRACKET:
        return true;

      default:
        return false;
    }
  }
};
/* harmony default export */ __webpack_exports__["a"] = (KeyCode);

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @ignore
 * base event object for custom and dom event.
 * @author yiminghe@gmail.com
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});
function returnFalse() {
  return false;
}

function returnTrue() {
  return true;
}

function EventBaseObject() {
  this.timeStamp = Date.now();
  this.target = undefined;
  this.currentTarget = undefined;
}

EventBaseObject.prototype = {
  isEventObject: 1,

  constructor: EventBaseObject,

  isDefaultPrevented: returnFalse,

  isPropagationStopped: returnFalse,

  isImmediatePropagationStopped: returnFalse,

  preventDefault: function preventDefault() {
    this.isDefaultPrevented = returnTrue;
  },

  stopPropagation: function stopPropagation() {
    this.isPropagationStopped = returnTrue;
  },

  stopImmediatePropagation: function stopImmediatePropagation() {
    this.isImmediatePropagationStopped = returnTrue;
    // fixed 1.2
    // call stopPropagation implicitly
    this.stopPropagation();
  },

  halt: function halt(immediate) {
    if (immediate) {
      this.stopImmediatePropagation();
    } else {
      this.stopPropagation();
    }
    this.preventDefault();
  }
};

exports["default"] = EventBaseObject;
module.exports = exports["default"];

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @ignore
 * event object for dom
 * @author yiminghe@gmail.com
 */



Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _EventBaseObject = __webpack_require__(185);

var _EventBaseObject2 = _interopRequireDefault(_EventBaseObject);

var _objectAssign = __webpack_require__(128);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var TRUE = true;
var FALSE = false;
var commonProps = ['altKey', 'bubbles', 'cancelable', 'ctrlKey', 'currentTarget', 'eventPhase', 'metaKey', 'shiftKey', 'target', 'timeStamp', 'view', 'type'];

function isNullOrUndefined(w) {
  return w === null || w === undefined;
}

var eventNormalizers = [{
  reg: /^key/,
  props: ['char', 'charCode', 'key', 'keyCode', 'which'],
  fix: function fix(event, nativeEvent) {
    if (isNullOrUndefined(event.which)) {
      event.which = !isNullOrUndefined(nativeEvent.charCode) ? nativeEvent.charCode : nativeEvent.keyCode;
    }

    // add metaKey to non-Mac browsers (use ctrl for PC 's and Meta for Macs)
    if (event.metaKey === undefined) {
      event.metaKey = event.ctrlKey;
    }
  }
}, {
  reg: /^touch/,
  props: ['touches', 'changedTouches', 'targetTouches']
}, {
  reg: /^hashchange$/,
  props: ['newURL', 'oldURL']
}, {
  reg: /^gesturechange$/i,
  props: ['rotation', 'scale']
}, {
  reg: /^(mousewheel|DOMMouseScroll)$/,
  props: [],
  fix: function fix(event, nativeEvent) {
    var deltaX = undefined;
    var deltaY = undefined;
    var delta = undefined;
    var wheelDelta = nativeEvent.wheelDelta;
    var axis = nativeEvent.axis;
    var wheelDeltaY = nativeEvent.wheelDeltaY;
    var wheelDeltaX = nativeEvent.wheelDeltaX;
    var detail = nativeEvent.detail;

    // ie/webkit
    if (wheelDelta) {
      delta = wheelDelta / 120;
    }

    // gecko
    if (detail) {
      // press control e.detail == 1 else e.detail == 3
      delta = 0 - (detail % 3 === 0 ? detail / 3 : detail);
    }

    // Gecko
    if (axis !== undefined) {
      if (axis === event.HORIZONTAL_AXIS) {
        deltaY = 0;
        deltaX = 0 - delta;
      } else if (axis === event.VERTICAL_AXIS) {
        deltaX = 0;
        deltaY = delta;
      }
    }

    // Webkit
    if (wheelDeltaY !== undefined) {
      deltaY = wheelDeltaY / 120;
    }
    if (wheelDeltaX !== undefined) {
      deltaX = -1 * wheelDeltaX / 120;
    }

    // 默认 deltaY (ie)
    if (!deltaX && !deltaY) {
      deltaY = delta;
    }

    if (deltaX !== undefined) {
      /**
       * deltaX of mousewheel event
       * @property deltaX
       * @member Event.DomEvent.Object
       */
      event.deltaX = deltaX;
    }

    if (deltaY !== undefined) {
      /**
       * deltaY of mousewheel event
       * @property deltaY
       * @member Event.DomEvent.Object
       */
      event.deltaY = deltaY;
    }

    if (delta !== undefined) {
      /**
       * delta of mousewheel event
       * @property delta
       * @member Event.DomEvent.Object
       */
      event.delta = delta;
    }
  }
}, {
  reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
  props: ['buttons', 'clientX', 'clientY', 'button', 'offsetX', 'relatedTarget', 'which', 'fromElement', 'toElement', 'offsetY', 'pageX', 'pageY', 'screenX', 'screenY'],
  fix: function fix(event, nativeEvent) {
    var eventDoc = undefined;
    var doc = undefined;
    var body = undefined;
    var target = event.target;
    var button = nativeEvent.button;

    // Calculate pageX/Y if missing and clientX/Y available
    if (target && isNullOrUndefined(event.pageX) && !isNullOrUndefined(nativeEvent.clientX)) {
      eventDoc = target.ownerDocument || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;
      event.pageX = nativeEvent.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
      event.pageY = nativeEvent.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
    }

    // which for click: 1 === left; 2 === middle; 3 === right
    // do not use button
    if (!event.which && button !== undefined) {
      if (button & 1) {
        event.which = 1;
      } else if (button & 2) {
        event.which = 3;
      } else if (button & 4) {
        event.which = 2;
      } else {
        event.which = 0;
      }
    }

    // add relatedTarget, if necessary
    if (!event.relatedTarget && event.fromElement) {
      event.relatedTarget = event.fromElement === target ? event.toElement : event.fromElement;
    }

    return event;
  }
}];

function retTrue() {
  return TRUE;
}

function retFalse() {
  return FALSE;
}

function DomEventObject(nativeEvent) {
  var type = nativeEvent.type;

  var isNative = typeof nativeEvent.stopPropagation === 'function' || typeof nativeEvent.cancelBubble === 'boolean';

  _EventBaseObject2['default'].call(this);

  this.nativeEvent = nativeEvent;

  // in case dom event has been mark as default prevented by lower dom node
  var isDefaultPrevented = retFalse;
  if ('defaultPrevented' in nativeEvent) {
    isDefaultPrevented = nativeEvent.defaultPrevented ? retTrue : retFalse;
  } else if ('getPreventDefault' in nativeEvent) {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=691151
    isDefaultPrevented = nativeEvent.getPreventDefault() ? retTrue : retFalse;
  } else if ('returnValue' in nativeEvent) {
    isDefaultPrevented = nativeEvent.returnValue === FALSE ? retTrue : retFalse;
  }

  this.isDefaultPrevented = isDefaultPrevented;

  var fixFns = [];
  var fixFn = undefined;
  var l = undefined;
  var prop = undefined;
  var props = commonProps.concat();

  eventNormalizers.forEach(function (normalizer) {
    if (type.match(normalizer.reg)) {
      props = props.concat(normalizer.props);
      if (normalizer.fix) {
        fixFns.push(normalizer.fix);
      }
    }
  });

  l = props.length;

  // clone properties of the original event object
  while (l) {
    prop = props[--l];
    this[prop] = nativeEvent[prop];
  }

  // fix target property, if necessary
  if (!this.target && isNative) {
    this.target = nativeEvent.srcElement || document; // srcElement might not be defined either
  }

  // check if target is a text node (safari)
  if (this.target && this.target.nodeType === 3) {
    this.target = this.target.parentNode;
  }

  l = fixFns.length;

  while (l) {
    fixFn = fixFns[--l];
    fixFn(this, nativeEvent);
  }

  this.timeStamp = nativeEvent.timeStamp || Date.now();
}

var EventBaseObjectProto = _EventBaseObject2['default'].prototype;

(0, _objectAssign2['default'])(DomEventObject.prototype, EventBaseObjectProto, {
  constructor: DomEventObject,

  preventDefault: function preventDefault() {
    var e = this.nativeEvent;

    // if preventDefault exists run it on the original event
    if (e.preventDefault) {
      e.preventDefault();
    } else {
      // otherwise set the returnValue property of the original event to FALSE (IE)
      e.returnValue = FALSE;
    }

    EventBaseObjectProto.preventDefault.call(this);
  },

  stopPropagation: function stopPropagation() {
    var e = this.nativeEvent;

    // if stopPropagation exists run it on the original event
    if (e.stopPropagation) {
      e.stopPropagation();
    } else {
      // otherwise set the cancelBubble property of the original event to TRUE (IE)
      e.cancelBubble = TRUE;
    }

    EventBaseObjectProto.stopPropagation.call(this);
  }
});

exports['default'] = DomEventObject;
module.exports = exports['default'];

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var START_EVENT_NAME_MAP = {
  transitionstart: {
    transition: 'transitionstart',
    WebkitTransition: 'webkitTransitionStart',
    MozTransition: 'mozTransitionStart',
    OTransition: 'oTransitionStart',
    msTransition: 'MSTransitionStart'
  },

  animationstart: {
    animation: 'animationstart',
    WebkitAnimation: 'webkitAnimationStart',
    MozAnimation: 'mozAnimationStart',
    OAnimation: 'oAnimationStart',
    msAnimation: 'MSAnimationStart'
  }
};

var END_EVENT_NAME_MAP = {
  transitionend: {
    transition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'mozTransitionEnd',
    OTransition: 'oTransitionEnd',
    msTransition: 'MSTransitionEnd'
  },

  animationend: {
    animation: 'animationend',
    WebkitAnimation: 'webkitAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    OAnimation: 'oAnimationEnd',
    msAnimation: 'MSAnimationEnd'
  }
};

var startEvents = [];
var endEvents = [];

function detectEvents() {
  var testEl = document.createElement('div');
  var style = testEl.style;

  if (!('AnimationEvent' in window)) {
    delete START_EVENT_NAME_MAP.animationstart.animation;
    delete END_EVENT_NAME_MAP.animationend.animation;
  }

  if (!('TransitionEvent' in window)) {
    delete START_EVENT_NAME_MAP.transitionstart.transition;
    delete END_EVENT_NAME_MAP.transitionend.transition;
  }

  function process(EVENT_NAME_MAP, events) {
    for (var baseEventName in EVENT_NAME_MAP) {
      if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
        var baseEvents = EVENT_NAME_MAP[baseEventName];
        for (var styleName in baseEvents) {
          if (styleName in style) {
            events.push(baseEvents[styleName]);
            break;
          }
        }
      }
    }
  }

  process(START_EVENT_NAME_MAP, startEvents);
  process(END_EVENT_NAME_MAP, endEvents);
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  detectEvents();
}

function addEventListener(node, eventName, eventListener) {
  node.addEventListener(eventName, eventListener, false);
}

function removeEventListener(node, eventName, eventListener) {
  node.removeEventListener(eventName, eventListener, false);
}

var TransitionEvents = {
  // Start events
  startEvents: startEvents,

  addStartEventListener: function addStartEventListener(node, eventListener) {
    if (startEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    startEvents.forEach(function (startEvent) {
      addEventListener(node, startEvent, eventListener);
    });
  },
  removeStartEventListener: function removeStartEventListener(node, eventListener) {
    if (startEvents.length === 0) {
      return;
    }
    startEvents.forEach(function (startEvent) {
      removeEventListener(node, startEvent, eventListener);
    });
  },


  // End events
  endEvents: endEvents,

  addEndEventListener: function addEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    endEvents.forEach(function (endEvent) {
      addEventListener(node, endEvent, eventListener);
    });
  },
  removeEndEventListener: function removeEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      return;
    }
    endEvents.forEach(function (endEvent) {
      removeEventListener(node, endEvent, eventListener);
    });
  }
};

/* harmony default export */ __webpack_exports__["a"] = (TransitionEvents);

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isCssAnimationSupported; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Event__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_component_classes__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_component_classes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_component_classes__);




var isCssAnimationSupported = __WEBPACK_IMPORTED_MODULE_1__Event__["a" /* default */].endEvents.length !== 0;
var capitalPrefixes = ['Webkit', 'Moz', 'O',
// ms is special .... !
'ms'];
var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];

function getStyleProperty(node, name) {
  // old ff need null, https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
  var style = window.getComputedStyle(node, null);
  var ret = '';
  for (var i = 0; i < prefixes.length; i++) {
    ret = style.getPropertyValue(prefixes[i] + name);
    if (ret) {
      break;
    }
  }
  return ret;
}

function fixBrowserByTimeout(node) {
  if (isCssAnimationSupported) {
    var transitionDelay = parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
    var transitionDuration = parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
    var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
    var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
    var time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);
    // sometimes, browser bug
    node.rcEndAnimTimeout = setTimeout(function () {
      node.rcEndAnimTimeout = null;
      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }, time * 1000 + 200);
  }
}

function clearBrowserBugTimeout(node) {
  if (node.rcEndAnimTimeout) {
    clearTimeout(node.rcEndAnimTimeout);
    node.rcEndAnimTimeout = null;
  }
}

var cssAnimation = function cssAnimation(node, transitionName, endCallback) {
  var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(transitionName)) === 'object';
  var className = nameIsObj ? transitionName.name : transitionName;
  var activeClassName = nameIsObj ? transitionName.active : transitionName + '-active';
  var end = endCallback;
  var start = void 0;
  var active = void 0;
  var nodeClasses = __WEBPACK_IMPORTED_MODULE_2_component_classes___default()(node);

  if (endCallback && Object.prototype.toString.call(endCallback) === '[object Object]') {
    end = endCallback.end;
    start = endCallback.start;
    active = endCallback.active;
  }

  if (node.rcEndListener) {
    node.rcEndListener();
  }

  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }

    if (node.rcAnimTimeout) {
      clearTimeout(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }

    clearBrowserBugTimeout(node);

    nodeClasses.remove(className);
    nodeClasses.remove(activeClassName);

    __WEBPACK_IMPORTED_MODULE_1__Event__["a" /* default */].removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null;

    // Usually this optional end is used for informing an owner of
    // a leave animation and telling it to remove the child.
    if (end) {
      end();
    }
  };

  __WEBPACK_IMPORTED_MODULE_1__Event__["a" /* default */].addEndEventListener(node, node.rcEndListener);

  if (start) {
    start();
  }
  nodeClasses.add(className);

  node.rcAnimTimeout = setTimeout(function () {
    node.rcAnimTimeout = null;
    nodeClasses.add(activeClassName);
    if (active) {
      setTimeout(active, 0);
    }
    fixBrowserByTimeout(node);
    // 30ms for firefox
  }, 30);

  return {
    stop: function stop() {
      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }
  };
};

cssAnimation.style = function (node, style, callback) {
  if (node.rcEndListener) {
    node.rcEndListener();
  }

  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }

    if (node.rcAnimTimeout) {
      clearTimeout(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }

    clearBrowserBugTimeout(node);

    __WEBPACK_IMPORTED_MODULE_1__Event__["a" /* default */].removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null;

    // Usually this optional callback is used for informing an owner of
    // a leave animation and telling it to remove the child.
    if (callback) {
      callback();
    }
  };

  __WEBPACK_IMPORTED_MODULE_1__Event__["a" /* default */].addEndEventListener(node, node.rcEndListener);

  node.rcAnimTimeout = setTimeout(function () {
    for (var s in style) {
      if (style.hasOwnProperty(s)) {
        node.style[s] = style[s];
      }
    }
    node.rcAnimTimeout = null;
    fixBrowserByTimeout(node);
  }, 0);
};

cssAnimation.setTransition = function (node, p, value) {
  var property = p;
  var v = value;
  if (value === undefined) {
    v = property;
    property = '';
  }
  property = property || '';
  capitalPrefixes.forEach(function (prefix) {
    node.style[prefix + 'Transition' + property] = v;
  });
};

cssAnimation.isCssAnimationSupported = isCssAnimationSupported;



/* harmony default export */ __webpack_exports__["b"] = (cssAnimation);

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_css_animation__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util_animate__ = __webpack_require__(158);










var transitionMap = {
  enter: 'transitionEnter',
  appear: 'transitionAppear',
  leave: 'transitionLeave'
};

var AnimateChild = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(AnimateChild, _React$Component);

  function AnimateChild() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, AnimateChild);

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (AnimateChild.__proto__ || Object.getPrototypeOf(AnimateChild)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(AnimateChild, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.stop();
    }
  }, {
    key: 'componentWillEnter',
    value: function componentWillEnter(done) {
      if (__WEBPACK_IMPORTED_MODULE_8__util_animate__["a" /* default */].isEnterSupported(this.props)) {
        this.transition('enter', done);
      } else {
        done();
      }
    }
  }, {
    key: 'componentWillAppear',
    value: function componentWillAppear(done) {
      if (__WEBPACK_IMPORTED_MODULE_8__util_animate__["a" /* default */].isAppearSupported(this.props)) {
        this.transition('appear', done);
      } else {
        done();
      }
    }
  }, {
    key: 'componentWillLeave',
    value: function componentWillLeave(done) {
      if (__WEBPACK_IMPORTED_MODULE_8__util_animate__["a" /* default */].isLeaveSupported(this.props)) {
        this.transition('leave', done);
      } else {
        // always sync, do not interupt with react component life cycle
        // update hidden -> animate hidden ->
        // didUpdate -> animate leave -> unmount (if animate is none)
        done();
      }
    }
  }, {
    key: 'transition',
    value: function transition(animationType, finishCallback) {
      var _this2 = this;

      var node = __WEBPACK_IMPORTED_MODULE_5_react_dom___default.a.findDOMNode(this);
      var props = this.props;
      var transitionName = props.transitionName;
      var nameIsObj = typeof transitionName === 'object';
      this.stop();
      var end = function end() {
        _this2.stopper = null;
        finishCallback();
      };
      if ((__WEBPACK_IMPORTED_MODULE_7_css_animation__["a" /* isCssAnimationSupported */] || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
        var name = nameIsObj ? transitionName[animationType] : transitionName + '-' + animationType;
        var activeName = name + '-active';
        if (nameIsObj && transitionName[animationType + 'Active']) {
          activeName = transitionName[animationType + 'Active'];
        }
        this.stopper = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_css_animation__["b" /* default */])(node, {
          name: name,
          active: activeName
        }, end);
      } else {
        this.stopper = props.animation[animationType](node, end);
      }
    }
  }, {
    key: 'stop',
    value: function stop() {
      var stopper = this.stopper;
      if (stopper) {
        this.stopper = null;
        stopper.stop();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return AnimateChild;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

AnimateChild.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.any,
  animation: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.any,
  transitionName: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.any
};
/* harmony default export */ __webpack_exports__["a"] = (AnimateChild);

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = toArrayChildren;
/* harmony export (immutable) */ __webpack_exports__["b"] = findChildInChildrenByKey;
/* harmony export (immutable) */ __webpack_exports__["d"] = findShownChildInChildrenByKey;
/* unused harmony export findHiddenChildInChildrenByKey */
/* harmony export (immutable) */ __webpack_exports__["e"] = isSameChildren;
/* harmony export (immutable) */ __webpack_exports__["c"] = mergeChildren;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function toArrayChildren(children) {
  var ret = [];
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.forEach(children, function (child) {
    ret.push(child);
  });
  return ret;
}

function findChildInChildrenByKey(children, key) {
  var ret = null;
  if (children) {
    children.forEach(function (child) {
      if (ret) {
        return;
      }
      if (child && child.key === key) {
        ret = child;
      }
    });
  }
  return ret;
}

function findShownChildInChildrenByKey(children, key, showProp) {
  var ret = null;
  if (children) {
    children.forEach(function (child) {
      if (child && child.key === key && child.props[showProp]) {
        if (ret) {
          throw new Error('two child with same key for <rc-animate> children');
        }
        ret = child;
      }
    });
  }
  return ret;
}

function findHiddenChildInChildrenByKey(children, key, showProp) {
  var found = 0;
  if (children) {
    children.forEach(function (child) {
      if (found) {
        return;
      }
      found = child && child.key === key && !child.props[showProp];
    });
  }
  return found;
}

function isSameChildren(c1, c2, showProp) {
  var same = c1.length === c2.length;
  if (same) {
    c1.forEach(function (child, index) {
      var child2 = c2[index];
      if (child && child2) {
        if (child && !child2 || !child && child2) {
          same = false;
        } else if (child.key !== child2.key) {
          same = false;
        } else if (showProp && child.props[showProp] !== child2.props[showProp]) {
          same = false;
        }
      }
    });
  }
  return same;
}

function mergeChildren(prev, next) {
  var ret = [];

  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextChildrenPending = {};
  var pendingChildren = [];
  prev.forEach(function (child) {
    if (child && findChildInChildrenByKey(next, child.key)) {
      if (pendingChildren.length) {
        nextChildrenPending[child.key] = pendingChildren;
        pendingChildren = [];
      }
    } else {
      pendingChildren.push(child);
    }
  });

  next.forEach(function (child) {
    if (child && Object.prototype.hasOwnProperty.call(nextChildrenPending, child.key)) {
      ret = ret.concat(nextChildrenPending[child.key]);
    }
    ret.push(child);
  });

  ret = ret.concat(pendingChildren);

  return ret;
}

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var unsafeLifecyclesPolyfill = function unsafeLifecyclesPolyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  } // only handle componentWillReceiveProps


  if (typeof prototype.componentWillReceiveProps !== 'function') {
    return Component;
  } // In React 16.9, React.Profiler was introduced together with UNSAFE_componentWillReceiveProps
  // https://reactjs.org/blog/2019/08/08/react-v16.9.0.html#performance-measurements-with-reactprofiler


  if (!__WEBPACK_IMPORTED_MODULE_0_react___default.a.Profiler) {
    return Component;
  } // Here polyfill get started


  prototype.UNSAFE_componentWillReceiveProps = prototype.componentWillReceiveProps;
  delete prototype.componentWillReceiveProps;
  return Component;
};

/* harmony default export */ __webpack_exports__["a"] = (unsafeLifecyclesPolyfill);

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),

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

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = __webpack_require__(498);

var _button2 = _interopRequireDefault(_button);

var _buttonGroup = __webpack_require__(497);

var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_button2['default'].Group = _buttonGroup2['default'];
exports['default'] = _button2['default'];
module.exports = exports['default'];

/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(10);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _rcDialog = __webpack_require__(574);

var _rcDialog2 = _interopRequireDefault(_rcDialog);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _addEventListener = __webpack_require__(169);

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _button = __webpack_require__(423);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var mousePosition = void 0;
var mousePositionEventBinded = void 0;

var Modal = function (_React$Component) {
    (0, _inherits3['default'])(Modal, _React$Component);

    function Modal() {
        (0, _classCallCheck3['default'])(this, Modal);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));

        _this.handleCancel = function (e) {
            var onCancel = _this.props.onCancel;
            if (onCancel) {
                onCancel(e);
            }
        };
        _this.handleOk = function (e) {
            var onOk = _this.props.onOk;
            if (onOk) {
                onOk(e);
            }
        };
        return _this;
    }

    (0, _createClass3['default'])(Modal, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (mousePositionEventBinded) {
                return;
            }
            // 只有点击事件支持从鼠标位置动画展开
            (0, _addEventListener2['default'])(document.documentElement, 'click', function (e) {
                mousePosition = {
                    x: e.pageX,
                    y: e.pageY
                };
                // 100ms 内发生过点击事件，则从点击位置动画展示
                // 否则直接 zoom 展示
                // 这样可以兼容非点击方式展开
                setTimeout(function () {
                    return mousePosition = null;
                }, 100);
            });
            mousePositionEventBinded = true;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                okText = _props.okText,
                okType = _props.okType,
                cancelText = _props.cancelText,
                confirmLoading = _props.confirmLoading,
                footer = _props.footer,
                visible = _props.visible;

            if (this.context.antLocale && this.context.antLocale.Modal) {
                okText = okText || this.context.antLocale.Modal.okText;
                cancelText = cancelText || this.context.antLocale.Modal.cancelText;
            }
            var defaultFooter = [_react2['default'].createElement(
                _button2['default'],
                { key: 'cancel', size: 'large', onClick: this.handleCancel },
                cancelText || '取消'
            ), _react2['default'].createElement(
                _button2['default'],
                { key: 'confirm', type: okType, size: 'large', loading: confirmLoading, onClick: this.handleOk },
                okText || '确定'
            )];
            return _react2['default'].createElement(_rcDialog2['default'], (0, _extends3['default'])({}, this.props, { footer: footer === undefined ? defaultFooter : footer, visible: visible, mousePosition: mousePosition, onClose: this.handleCancel }));
        }
    }]);
    return Modal;
}(_react2['default'].Component);

exports['default'] = Modal;

Modal.defaultProps = {
    prefixCls: 'ant-modal',
    width: 520,
    transitionName: 'zoom',
    maskTransitionName: 'fade',
    confirmLoading: false,
    visible: false,
    okType: 'primary'
};
Modal.propTypes = {
    prefixCls: _propTypes2['default'].string,
    onOk: _propTypes2['default'].func,
    onCancel: _propTypes2['default'].func,
    okText: _propTypes2['default'].node,
    cancelText: _propTypes2['default'].node,
    width: _propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].string]),
    confirmLoading: _propTypes2['default'].bool,
    visible: _propTypes2['default'].bool,
    align: _propTypes2['default'].object,
    footer: _propTypes2['default'].node,
    title: _propTypes2['default'].node,
    closable: _propTypes2['default'].bool
};
Modal.contextTypes = {
    antLocale: _propTypes2['default'].object
};
module.exports = exports['default'];

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
throw new Error("Cannot find module \"rc-form/src/createDOMForm\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_antd_lib_modal__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_antd_lib_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_antd_lib_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_antd_dist_antd_css__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_antd_dist_antd_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_antd_dist_antd_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__styles__ = __webpack_require__(42);




/* eslint react/no-multi-comp:0, no-console:0 */









var Form = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Form, _Component);

  function Form() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Form);

    var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this));

    _this.onSubmit = function (e) {
      e.preventDefault();
      _this.props.form.validateFieldsAndScroll(function (error, values) {
        if (!error) {
          console.log('ok', values);
        } else {
          console.log('error', error, values);
        }
      });
    };

    _this.onCancel = function () {
      _this.setState({
        visible: false
      });
    };

    _this.open = function () {
      _this.setState({
        visible: true
      });
    };

    _this.state = {
      visible: false
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Form, [{
    key: 'render',
    value: function render() {
      var _props$form = this.props.form,
          getFieldProps = _props$form.getFieldProps,
          getFieldError = _props$form.getFieldError;

      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { style: { margin: 20 } },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'h2',
          null,
          'modal'
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_8_antd_lib_modal___default.a,
          {
            visible: this.state.visible,
            bodyStyle: {
              height: 200,
              overflow: 'auto'
            },
            onCancel: this.onCancel,
            title: 'modal'
          },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'div',
            { ref: 'dialogContent' },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              'form',
              { onSubmit: this.onSubmit },
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('input', getFieldProps('required', {
                rules: [{
                  required: true,
                  message: '必填'
                }]
              })),
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                'div',
                { style: __WEBPACK_IMPORTED_MODULE_10__styles__["b" /* errorStyle */] },
                getFieldError('required') ? getFieldError('required').join(',') : __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  'b',
                  { style: { visibility: 'hidden' } },
                  '1'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                'div',
                { style: { marginTop: 300 } },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  'button',
                  null,
                  'submit'
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          { style: __WEBPACK_IMPORTED_MODULE_10__styles__["a" /* regionStyle */] },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'button',
            { onClick: this.open },
            'open'
          )
        )
      );
    }
  }]);

  return Form;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

Form.propTypes = {
  form: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object
};


var NewForm = __WEBPACK_IMPORTED_MODULE_4_rc_form_src_createDOMForm___default()()(Form);

__WEBPACK_IMPORTED_MODULE_7_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(NewForm, null), document.getElementById('__react-content'));

/***/ }),

/***/ 497:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(8);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(27);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var ButtonGroup = function ButtonGroup(props) {
    var _props$prefixCls = props.prefixCls,
        prefixCls = _props$prefixCls === undefined ? 'ant-btn-group' : _props$prefixCls,
        size = props.size,
        className = props.className,
        others = __rest(props, ["prefixCls", "size", "className"]);
    // large => lg
    // small => sm


    var sizeCls = '';
    switch (size) {
        case 'large':
            sizeCls = 'lg';
            break;
        case 'small':
            sizeCls = 'sm';
        default:
            break;
    }
    var classes = (0, _classnames2['default'])(prefixCls, (0, _defineProperty3['default'])({}, prefixCls + '-' + sizeCls, sizeCls), className);
    return _react2['default'].createElement('div', (0, _extends3['default'])({}, others, { className: classes }));
};
exports['default'] = ButtonGroup;
module.exports = exports['default'];

/***/ }),

/***/ 498:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(8);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(10);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(27);

var _classnames2 = _interopRequireDefault(_classnames);

var _omit = __webpack_require__(175);

var _omit2 = _interopRequireDefault(_omit);

var _icon = __webpack_require__(171);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isString(str) {
    return typeof str === 'string';
}
// Insert one space between two chinese characters automatically.
function insertSpace(child, needInserted) {
    // Check the child if is undefined or null.
    if (child == null) {
        return;
    }
    var SPACE = needInserted ? ' ' : '';
    // strictNullChecks oops.
    if (typeof child !== 'string' && typeof child !== 'number' && isString(child.type) && isTwoCNChar(child.props.children)) {
        return _react2['default'].cloneElement(child, {}, child.props.children.split('').join(SPACE));
    }
    if (typeof child === 'string') {
        if (isTwoCNChar(child)) {
            child = child.split('').join(SPACE);
        }
        return _react2['default'].createElement(
            'span',
            null,
            child
        );
    }
    return child;
}

var Button = function (_React$Component) {
    (0, _inherits3['default'])(Button, _React$Component);

    function Button(props) {
        (0, _classCallCheck3['default'])(this, Button);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

        _this.handleClick = function (e) {
            // Add click effect
            _this.setState({ clicked: true });
            clearTimeout(_this.timeout);
            _this.timeout = setTimeout(function () {
                return _this.setState({ clicked: false });
            }, 500);
            var onClick = _this.props.onClick;
            if (onClick) {
                onClick(e);
            }
        };
        _this.state = {
            loading: props.loading,
            clicked: false
        };
        return _this;
    }

    (0, _createClass3['default'])(Button, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _this2 = this;

            var currentLoading = this.props.loading;
            var loading = nextProps.loading;
            if (currentLoading) {
                clearTimeout(this.delayTimeout);
            }
            if (typeof loading !== 'boolean' && loading && loading.delay) {
                this.delayTimeout = setTimeout(function () {
                    return _this2.setState({ loading: loading });
                }, loading.delay);
            } else {
                this.setState({ loading: loading });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.timeout) {
                clearTimeout(this.timeout);
            }
            if (this.delayTimeout) {
                clearTimeout(this.delayTimeout);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var _a = this.props,
                type = _a.type,
                shape = _a.shape,
                size = _a.size,
                className = _a.className,
                htmlType = _a.htmlType,
                children = _a.children,
                icon = _a.icon,
                prefixCls = _a.prefixCls,
                ghost = _a.ghost,
                others = __rest(_a, ["type", "shape", "size", "className", "htmlType", "children", "icon", "prefixCls", "ghost"]);var _state = this.state,
                loading = _state.loading,
                clicked = _state.clicked;
            // large => lg
            // small => sm

            var sizeCls = '';
            switch (size) {
                case 'large':
                    sizeCls = 'lg';
                    break;
                case 'small':
                    sizeCls = 'sm';
                default:
                    break;
            }
            var classes = (0, _classnames2['default'])(prefixCls, className, (_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + type, type), (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + shape, shape), (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + sizeCls, sizeCls), (0, _defineProperty3['default'])(_classNames, prefixCls + '-icon-only', !children && icon), (0, _defineProperty3['default'])(_classNames, prefixCls + '-loading', loading), (0, _defineProperty3['default'])(_classNames, prefixCls + '-clicked', clicked), (0, _defineProperty3['default'])(_classNames, prefixCls + '-background-ghost', ghost), _classNames));
            var iconType = loading ? 'loading' : icon;
            var iconNode = iconType ? _react2['default'].createElement(_icon2['default'], { type: iconType }) : null;
            var needInserted = _react2['default'].Children.count(children) === 1 && (!iconType || iconType === 'loading');
            var kids = _react2['default'].Children.map(children, function (child) {
                return insertSpace(child, needInserted);
            });
            return _react2['default'].createElement(
                'button',
                (0, _extends3['default'])({}, (0, _omit2['default'])(others, ['loading']), { type: htmlType || 'button', className: classes, onClick: this.handleClick }),
                iconNode,
                kids
            );
        }
    }]);
    return Button;
}(_react2['default'].Component);

exports['default'] = Button;

Button.__ANT_BUTTON = true;
Button.defaultProps = {
    prefixCls: 'ant-btn',
    loading: false,
    ghost: false
};
Button.propTypes = {
    type: _propTypes2['default'].string,
    shape: _propTypes2['default'].oneOf(['circle', 'circle-outline']),
    size: _propTypes2['default'].oneOf(['large', 'default', 'small']),
    htmlType: _propTypes2['default'].oneOf(['submit', 'button', 'reset']),
    onClick: _propTypes2['default'].func,
    loading: _propTypes2['default'].oneOfType([_propTypes2['default'].bool, _propTypes2['default'].object]),
    className: _propTypes2['default'].string,
    icon: _propTypes2['default'].string
};
module.exports = exports['default'];

/***/ }),

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(10);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _button = __webpack_require__(423);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ActionButton = function (_React$Component) {
    (0, _inherits3['default'])(ActionButton, _React$Component);

    function ActionButton(props) {
        (0, _classCallCheck3['default'])(this, ActionButton);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (ActionButton.__proto__ || Object.getPrototypeOf(ActionButton)).call(this, props));

        _this.onClick = function () {
            var _this$props = _this.props,
                actionFn = _this$props.actionFn,
                closeModal = _this$props.closeModal;

            if (actionFn) {
                var ret = void 0;
                if (actionFn.length) {
                    ret = actionFn(closeModal);
                } else {
                    ret = actionFn();
                    if (!ret) {
                        closeModal();
                    }
                }
                if (ret && ret.then) {
                    _this.setState({ loading: true });
                    ret.then(function () {
                        // It's unnecessary to set loading=false, for the Modal will be unmounted after close.
                        // this.setState({ loading: false });
                        closeModal.apply(undefined, arguments);
                    }, function () {
                        // See: https://github.com/ant-design/ant-design/issues/6183
                        _this.setState({ loading: false });
                    });
                }
            } else {
                closeModal();
            }
        };
        _this.state = {
            loading: false
        };
        return _this;
    }

    (0, _createClass3['default'])(ActionButton, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.autoFocus) {
                var $this = _reactDom2['default'].findDOMNode(this);
                this.timeoutId = setTimeout(function () {
                    return $this.focus();
                });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearTimeout(this.timeoutId);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                type = _props.type,
                children = _props.children;

            var loading = this.state.loading;
            return _react2['default'].createElement(
                _button2['default'],
                { type: type, size: 'large', onClick: this.onClick, loading: loading },
                children
            );
        }
    }]);
    return ActionButton;
}(_react2['default'].Component);

exports['default'] = ActionButton;
module.exports = exports['default'];

/***/ }),

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(8);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

exports['default'] = confirm;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = __webpack_require__(27);

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = __webpack_require__(171);

var _icon2 = _interopRequireDefault(_icon);

var _Modal = __webpack_require__(424);

var _Modal2 = _interopRequireDefault(_Modal);

var _ActionButton = __webpack_require__(499);

var _ActionButton2 = _interopRequireDefault(_ActionButton);

var _locale = __webpack_require__(502);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function confirm(config) {
    var props = (0, _extends3['default'])({ iconType: 'question-circle', okType: 'primary' }, config);
    var prefixCls = props.prefixCls || 'ant-confirm';
    var div = document.createElement('div');
    document.body.appendChild(div);
    var width = props.width || 416;
    var style = props.style || {};
    // 默认为 false，保持旧版默认行为
    var maskClosable = props.maskClosable === undefined ? false : props.maskClosable;
    // 默认为 true，保持向下兼容
    if (!('okCancel' in props)) {
        props.okCancel = true;
    }
    var runtimeLocale = (0, _locale.getConfirmLocale)();
    props.okText = props.okText || (props.okCancel ? runtimeLocale.okText : runtimeLocale.justOkText);
    props.cancelText = props.cancelText || runtimeLocale.cancelText;
    function close() {
        var unmountResult = _reactDom2['default'].unmountComponentAtNode(div);
        if (unmountResult && div.parentNode) {
            div.parentNode.removeChild(div);
        }

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var triggerCancel = args && args.length && args.some(function (param) {
            return param && param.triggerCancel;
        });
        if (props.onCancel && triggerCancel) {
            props.onCancel.apply(props, args);
        }
    }
    var body = _react2['default'].createElement(
        'div',
        { className: prefixCls + '-body' },
        _react2['default'].createElement(_icon2['default'], { type: props.iconType }),
        _react2['default'].createElement(
            'span',
            { className: prefixCls + '-title' },
            props.title
        ),
        _react2['default'].createElement(
            'div',
            { className: prefixCls + '-content' },
            props.content
        )
    );
    var footer = null;
    if (props.okCancel) {
        footer = _react2['default'].createElement(
            'div',
            { className: prefixCls + '-btns' },
            _react2['default'].createElement(
                _ActionButton2['default'],
                { actionFn: props.onCancel, closeModal: close },
                props.cancelText
            ),
            _react2['default'].createElement(
                _ActionButton2['default'],
                { type: props.okType, actionFn: props.onOk, closeModal: close, autoFocus: true },
                props.okText
            )
        );
    } else {
        footer = _react2['default'].createElement(
            'div',
            { className: prefixCls + '-btns' },
            _react2['default'].createElement(
                _ActionButton2['default'],
                { type: props.okType, actionFn: props.onOk, closeModal: close, autoFocus: true },
                props.okText
            )
        );
    }
    var classString = (0, _classnames2['default'])(prefixCls, (0, _defineProperty3['default'])({}, prefixCls + '-' + props.type, true), props.className);
    _reactDom2['default'].render(_react2['default'].createElement(
        _Modal2['default'],
        { className: classString, onCancel: close.bind(this, { triggerCancel: true }), visible: true, title: '', transitionName: 'zoom', footer: '', maskTransitionName: 'fade', maskClosable: maskClosable, style: style, width: width, zIndex: props.zIndex },
        _react2['default'].createElement(
            'div',
            { className: prefixCls + '-body-wrapper' },
            body,
            ' ',
            footer
        )
    ), div);
    return {
        destroy: close
    };
}
module.exports = exports['default'];

/***/ }),

/***/ 501:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _Modal = __webpack_require__(424);

var _Modal2 = _interopRequireDefault(_Modal);

var _confirm = __webpack_require__(500);

var _confirm2 = _interopRequireDefault(_confirm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_Modal2['default'].info = function (props) {
    var config = (0, _extends3['default'])({ type: 'info', iconType: 'info-circle', okCancel: false }, props);
    return (0, _confirm2['default'])(config);
};
_Modal2['default'].success = function (props) {
    var config = (0, _extends3['default'])({ type: 'success', iconType: 'check-circle', okCancel: false }, props);
    return (0, _confirm2['default'])(config);
};
_Modal2['default'].error = function (props) {
    var config = (0, _extends3['default'])({ type: 'error', iconType: 'cross-circle', okCancel: false }, props);
    return (0, _confirm2['default'])(config);
};
_Modal2['default'].warning = _Modal2['default'].warn = function (props) {
    var config = (0, _extends3['default'])({ type: 'warning', iconType: 'exclamation-circle', okCancel: false }, props);
    return (0, _confirm2['default'])(config);
};
_Modal2['default'].confirm = function (props) {
    var config = (0, _extends3['default'])({ type: 'confirm', okCancel: true }, props);
    return (0, _confirm2['default'])(config);
};
exports['default'] = _Modal2['default'];
module.exports = exports['default'];

/***/ }),

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

exports.changeConfirmLocale = changeConfirmLocale;
exports.getConfirmLocale = getConfirmLocale;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var defaultLocale = {
    okText: '确定',
    cancelText: '取消',
    justOkText: '知道了'
};
var runtimeLocale = (0, _extends3['default'])({}, defaultLocale);
function changeConfirmLocale(newLocale) {
    if (newLocale) {
        runtimeLocale = (0, _extends3['default'])({}, runtimeLocale, newLocale);
    } else {
        runtimeLocale = (0, _extends3['default'])({}, defaultLocale);
    }
}
function getConfirmLocale() {
    return runtimeLocale;
}

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rc_util_es_KeyCode__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rc_animate__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__LazyRenderBox__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rc_util_lib_getScrollBarSize__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rc_util_lib_getScrollBarSize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rc_util_lib_getScrollBarSize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_object_assign__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_object_assign__);












var uuid = 0;
var openCount = 0;

function noop() {}
function getScroll(w, top) {
    var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
    var method = 'scroll' + (top ? 'Top' : 'Left');
    if (typeof ret !== 'number') {
        var d = w.document;
        ret = d.documentElement[method];
        if (typeof ret !== 'number') {
            ret = d.body[method];
        }
    }
    return ret;
}
function setTransformOrigin(node, value) {
    var style = node.style;
    ['Webkit', 'Moz', 'Ms', 'ms'].forEach(function (prefix) {
        style[prefix + 'TransformOrigin'] = value;
    });
    style['transformOrigin'] = value;
}
function offset(el) {
    var rect = el.getBoundingClientRect();
    var pos = {
        left: rect.left,
        top: rect.top
    };
    var doc = el.ownerDocument;
    var w = doc.defaultView || doc.parentWindow;
    pos.left += getScroll(w);
    pos.top += getScroll(w, true);
    return pos;
}

var Dialog = function (_React$Component) {
    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Dialog, _React$Component);

    function Dialog() {
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Dialog);

        var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).apply(this, arguments));

        _this.onAnimateLeave = function () {
                                    if (_this.refs.wrap) {
                _this.refs.wrap.style.display = 'none';
            }
            _this.inTransition = false;
            _this.removeScrollingEffect();
            _this.props.afterClose();
        };
        _this.onMaskClick = function (e) {
                        if (Date.now() - _this.openTime < 300) {
                return;
            }
            if (e.target === e.currentTarget) {
                _this.close(e);
            }
        };
        _this.onKeyDown = function (e) {
            var props = _this.props;
            if (props.keyboard && e.keyCode === __WEBPACK_IMPORTED_MODULE_7_rc_util_es_KeyCode__["a" /* default */].ESC) {
                _this.close(e);
            }
                        if (props.visible) {
                if (e.keyCode === __WEBPACK_IMPORTED_MODULE_7_rc_util_es_KeyCode__["a" /* default */].TAB) {
                    var activeElement = document.activeElement;
                    var dialogRoot = _this.refs.wrap;
                    var sentinel = _this.refs.sentinel;
                    if (e.shiftKey) {
                        if (activeElement === dialogRoot) {
                            sentinel.focus();
                        }
                    } else if (activeElement === _this.refs.sentinel) {
                        dialogRoot.focus();
                    }
                }
            }
        };
        _this.getDialogElement = function () {
            var props = _this.props;
            var closable = props.closable;
            var prefixCls = props.prefixCls;
            var dest = {};
            if (props.width !== undefined) {
                dest.width = props.width;
            }
            if (props.height !== undefined) {
                dest.height = props.height;
            }
            var footer = void 0;
            if (props.footer) {
                footer = __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", { className: prefixCls + '-footer', ref: "footer" }, props.footer);
            }
            var header = void 0;
            if (props.title) {
                header = __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", { className: prefixCls + '-header', ref: "header" }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", { className: prefixCls + '-title', id: _this.titleId }, props.title));
            }
            var closer = void 0;
            if (closable) {
                closer = __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("button", { onClick: _this.close, "aria-label": "Close", className: prefixCls + '-close' }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: prefixCls + '-close-x' }));
            }
            var style = __WEBPACK_IMPORTED_MODULE_11_object_assign___default()({}, props.style, dest);
            var transitionName = _this.getTransitionName();
            var dialogElement = __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__LazyRenderBox__["a" /* default */], { key: "dialog-element", role: "document", ref: "dialog", style: style, className: prefixCls + ' ' + (props.className || ''), visible: props.visible }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", { className: prefixCls + '-content' }, closer, header, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ className: prefixCls + '-body', style: props.bodyStyle, ref: "body" }, props.bodyProps), props.children), footer), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", { tabIndex: 0, ref: "sentinel", style: { width: 0, height: 0, overflow: 'hidden' } }, "sentinel"));
            return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_rc_animate__["default"], { key: "dialog", showProp: "visible", onLeave: _this.onAnimateLeave, transitionName: transitionName, component: "", transitionAppear: true }, dialogElement);
        };
        _this.getZIndexStyle = function () {
            var style = {};
            var props = _this.props;
            if (props.zIndex !== undefined) {
                style.zIndex = props.zIndex;
            }
            return style;
        };
        _this.getWrapStyle = function () {
            return __WEBPACK_IMPORTED_MODULE_11_object_assign___default()({}, _this.getZIndexStyle(), _this.props.wrapStyle);
        };
        _this.getMaskStyle = function () {
            return __WEBPACK_IMPORTED_MODULE_11_object_assign___default()({}, _this.getZIndexStyle(), _this.props.maskStyle);
        };
        _this.getMaskElement = function () {
            var props = _this.props;
            var maskElement = void 0;
            if (props.mask) {
                var maskTransition = _this.getMaskTransitionName();
                maskElement = __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__LazyRenderBox__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ style: _this.getMaskStyle(), key: "mask", className: props.prefixCls + '-mask', hiddenClassName: props.prefixCls + '-mask-hidden', visible: props.visible }, props.maskProps));
                if (maskTransition) {
                    maskElement = __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_rc_animate__["default"], { key: "mask", showProp: "visible", transitionAppear: true, component: "", transitionName: maskTransition }, maskElement);
                }
            }
            return maskElement;
        };
        _this.getMaskTransitionName = function () {
            var props = _this.props;
            var transitionName = props.maskTransitionName;
            var animation = props.maskAnimation;
            if (!transitionName && animation) {
                transitionName = props.prefixCls + '-' + animation;
            }
            return transitionName;
        };
        _this.getTransitionName = function () {
            var props = _this.props;
            var transitionName = props.transitionName;
            var animation = props.animation;
            if (!transitionName && animation) {
                transitionName = props.prefixCls + '-' + animation;
            }
            return transitionName;
        };
        _this.getElement = function (part) {
            return _this.refs[part];
        };
        _this.setScrollbar = function () {
            if (_this.bodyIsOverflowing && _this.scrollbarWidth !== undefined) {
                document.body.style.paddingRight = _this.scrollbarWidth + 'px';
            }
        };
        _this.addScrollingEffect = function () {
            openCount++;
            if (openCount !== 1) {
                return;
            }
            _this.checkScrollbar();
            _this.setScrollbar();
            document.body.style.overflow = 'hidden';
                    };
        _this.removeScrollingEffect = function () {
            openCount--;
            if (openCount !== 0) {
                return;
            }
            document.body.style.overflow = '';
            _this.resetScrollbar();
                    };
        _this.close = function (e) {
            _this.props.onClose(e);
        };
        _this.checkScrollbar = function () {
            var fullWindowWidth = window.innerWidth;
            if (!fullWindowWidth) {
                var documentElementRect = document.documentElement.getBoundingClientRect();
                fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
            }
            _this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
            if (_this.bodyIsOverflowing) {
                _this.scrollbarWidth = __WEBPACK_IMPORTED_MODULE_10_rc_util_lib_getScrollBarSize___default()();
            }
        };
        _this.resetScrollbar = function () {
            document.body.style.paddingRight = '';
        };
        _this.adjustDialog = function () {
            if (_this.refs.wrap && _this.scrollbarWidth !== undefined) {
                var modalIsOverflowing = _this.refs.wrap.scrollHeight > document.documentElement.clientHeight;
                _this.refs.wrap.style.paddingLeft = (!_this.bodyIsOverflowing && modalIsOverflowing ? _this.scrollbarWidth : '') + 'px';
                _this.refs.wrap.style.paddingRight = (_this.bodyIsOverflowing && !modalIsOverflowing ? _this.scrollbarWidth : '') + 'px';
            }
        };
        _this.resetAdjustments = function () {
            if (_this.refs.wrap) {
                _this.refs.wrap.style.paddingLeft = _this.refs.wrap.style.paddingLeft = '';
            }
        };
        return _this;
    }

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Dialog, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.inTransition = false;
            this.titleId = 'rcDialogTitle' + uuid++;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.componentDidUpdate({});
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            var props = this.props;
            var mousePosition = this.props.mousePosition;
            if (props.visible) {
                                if (!prevProps.visible) {
                    this.openTime = Date.now();
                    this.lastOutSideFocusNode = document.activeElement;
                    this.addScrollingEffect();
                    this.refs.wrap.focus();
                    var dialogNode = __WEBPACK_IMPORTED_MODULE_6_react_dom___default.a.findDOMNode(this.refs.dialog);
                    if (mousePosition) {
                        var elOffset = offset(dialogNode);
                        setTransformOrigin(dialogNode, mousePosition.x - elOffset.left + 'px ' + (mousePosition.y - elOffset.top) + 'px');
                    } else {
                        setTransformOrigin(dialogNode, '');
                    }
                }
            } else if (prevProps.visible) {
                this.inTransition = true;
                if (props.mask && this.lastOutSideFocusNode) {
                    try {
                        this.lastOutSideFocusNode.focus();
                    } catch (e) {
                        this.lastOutSideFocusNode = null;
                    }
                    this.lastOutSideFocusNode = null;
                }
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.props.visible || this.inTransition) {
                this.removeScrollingEffect();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var props = this.props;
            var prefixCls = props.prefixCls,
                maskClosable = props.maskClosable;

            var style = this.getWrapStyle();
                                    if (props.visible) {
                style.display = null;
            }
            return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", null, this.getMaskElement(), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ tabIndex: -1, onKeyDown: this.onKeyDown, className: prefixCls + '-wrap ' + (props.wrapClassName || ''), ref: "wrap", onClick: maskClosable ? this.onMaskClick : undefined, role: "dialog", "aria-labelledby": props.title ? this.titleId : null, style: style }, props.wrapProps), this.getDialogElement()));
        }
    }]);

    return Dialog;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Dialog);

Dialog.defaultProps = {
    afterClose: noop,
    className: '',
    mask: true,
    visible: false,
    keyboard: true,
    closable: true,
    maskClosable: true,
    prefixCls: 'rc-dialog',
    onClose: noop
};

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_create_react_class__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_create_react_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_create_react_class__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Dialog__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rc_util_es_getContainerRenderMixin__ = __webpack_require__(576);





var DialogWrap = __WEBPACK_IMPORTED_MODULE_2_create_react_class___default()({
    displayName: 'DialogWrap',
    mixins: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_rc_util_es_getContainerRenderMixin__["a" /* default */])({
        isVisible: function isVisible(instance) {
            return instance.props.visible;
        },

        autoDestroy: false,
        getComponent: function getComponent(instance, extra) {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Dialog__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, instance.props, extra, { key: "dialog" }));
        },
        getContainer: function getContainer(instance) {
            if (instance.props.getContainer) {
                return instance.props.getContainer();
            }
            var container = document.createElement('div');
            document.body.appendChild(container);
            return container;
        }
    })],
    getDefaultProps: function getDefaultProps() {
        return {
            visible: false
        };
    },
    shouldComponentUpdate: function shouldComponentUpdate(_ref) {
        var visible = _ref.visible;

        return !!(this.props.visible || visible);
    },
    componentWillUnmount: function componentWillUnmount() {
        if (this.props.visible) {
            this.renderComponent({
                afterClose: this.removeContainer,
                onClose: function onClose() {},

                visible: false
            });
        } else {
            this.removeContainer();
        }
    },
    getElement: function getElement(part) {
        return this._component.getElement(part);
    },
    render: function render() {
        return null;
    }
});
/* harmony default export */ __webpack_exports__["default"] = (DialogWrap);

/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_object_assign__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_object_assign__);








var LazyRenderBox = function (_React$Component) {
    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(LazyRenderBox, _React$Component);

    function LazyRenderBox() {
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, LazyRenderBox);

        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (LazyRenderBox.__proto__ || Object.getPrototypeOf(LazyRenderBox)).apply(this, arguments));
    }

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(LazyRenderBox, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            return !!nextProps.hiddenClassName || !!nextProps.visible;
        }
    }, {
        key: 'render',
        value: function render() {
            var className = this.props.className;
            if (!!this.props.hiddenClassName && !this.props.visible) {
                className += ' ' + this.props.hiddenClassName;
            }
            var props = __WEBPACK_IMPORTED_MODULE_6_object_assign___default()({}, this.props);
            delete props.hiddenClassName;
            delete props.visible;
            props.className = className;
            return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props));
        }
    }]);

    return LazyRenderBox;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (LazyRenderBox);

/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getContainerRenderMixin;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_dom__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_dom__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function defaultGetContainer() {
  var container = document.createElement('div');
  document.body.appendChild(container);
  return container;
}

function getContainerRenderMixin(config) {
  var _config$autoMount = config.autoMount,
      autoMount = _config$autoMount === void 0 ? true : _config$autoMount,
      _config$autoDestroy = config.autoDestroy,
      autoDestroy = _config$autoDestroy === void 0 ? true : _config$autoDestroy,
      isVisible = config.isVisible,
      isForceRender = config.isForceRender,
      getComponent = config.getComponent,
      _config$getContainer = config.getContainer,
      getContainer = _config$getContainer === void 0 ? defaultGetContainer : _config$getContainer;
  var mixin;

  function _renderComponent(instance, componentArg, ready) {
    if (!isVisible || instance._component || isVisible(instance) || isForceRender && isForceRender(instance)) {
      if (!instance._container) {
        instance._container = getContainer(instance);
      }

      var component;

      if (instance.getComponent) {
        component = instance.getComponent(componentArg);
      } else {
        component = getComponent(instance, componentArg);
      }

      __WEBPACK_IMPORTED_MODULE_0_react_dom___default.a.unstable_renderSubtreeIntoContainer(instance, component, instance._container, function callback() {
        instance._component = this;

        if (ready) {
          ready.call(this);
        }
      });
    }
  }

  if (autoMount) {
    mixin = _objectSpread({}, mixin, {
      componentDidMount: function componentDidMount() {
        _renderComponent(this);
      },
      componentDidUpdate: function componentDidUpdate() {
        _renderComponent(this);
      }
    });
  }

  if (!autoMount || !autoDestroy) {
    mixin = _objectSpread({}, mixin, {
      renderComponent: function renderComponent(componentArg, ready) {
        _renderComponent(this, componentArg, ready);
      }
    });
  }

  function _removeContainer(instance) {
    if (instance._container) {
      var container = instance._container;
      __WEBPACK_IMPORTED_MODULE_0_react_dom___default.a.unmountComponentAtNode(container);
      container.parentNode.removeChild(container);
      instance._container = null;
    }
  }

  if (autoDestroy) {
    mixin = _objectSpread({}, mixin, {
      componentWillUnmount: function componentWillUnmount() {
        _removeContainer(this);
      }
    });
  } else {
    mixin = _objectSpread({}, mixin, {
      removeContainer: function removeContainer() {
        _removeContainer(this);
      }
    });
  }

  return mixin;
}

/***/ }),

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getScrollBarSize;
var cached;

function getScrollBarSize(fresh) {
  if (typeof document === 'undefined') {
    return 0;
  }

  if (fresh || cached === undefined) {
    var inner = document.createElement('div');
    inner.style.width = '100%';
    inner.style.height = '200px';
    var outer = document.createElement('div');
    var outerStyle = outer.style;
    outerStyle.position = 'absolute';
    outerStyle.top = 0;
    outerStyle.left = 0;
    outerStyle.pointerEvents = 'none';
    outerStyle.visibility = 'hidden';
    outerStyle.width = '200px';
    outerStyle.height = '150px';
    outerStyle.overflow = 'hidden';
    outer.appendChild(inner);
    document.body.appendChild(outer);
    var widthContained = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var widthScroll = inner.offsetWidth;

    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth;
    }

    document.body.removeChild(outer);
    cached = widthContained - widthScroll;
  }

  return cached;
}

/***/ }),

/***/ 684:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(483);


/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(136);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ })

},[684]);
//# sourceMappingURL=modal.js.map