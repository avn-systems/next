webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/chain-function/index.js":
/*!**********************************************!*\
  !*** ./node_modules/chain-function/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = function chain(){
  var len = arguments.length
  var args = [];

  for (var i = 0; i < len; i++)
    args[i] = arguments[i]

  args = args.filter(function(fn){ return fn != null })

  if (args.length === 0) return undefined
  if (args.length === 1) return args[0]

  return args.reduce(function(current, next){
    return function chainedFunction() {
      current.apply(this, arguments);
      next.apply(this, arguments);
    };
  })
}


/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
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
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/dom-helpers/class/addClass.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/class/addClass.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/dom-helpers/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = addClass;

var _hasClass = _interopRequireDefault(__webpack_require__(/*! ./hasClass */ "./node_modules/dom-helpers/class/hasClass.js"));

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/class/hasClass.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/class/hasClass.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = hasClass;

function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/class/removeClass.js":
/*!*******************************************************!*\
  !*** ./node_modules/dom-helpers/class/removeClass.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
};

/***/ }),

/***/ "./node_modules/dom-helpers/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/dom-helpers/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/dom-helpers/transition/properties.js":
/*!***********************************************************!*\
  !*** ./node_modules/dom-helpers/transition/properties.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/dom-helpers/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = void 0;

var _inDOM = _interopRequireDefault(__webpack_require__(/*! ../util/inDOM */ "./node_modules/dom-helpers/util/inDOM.js"));

var transform = 'transform';
exports.transform = transform;
var prefix, transitionEnd, animationEnd;
exports.animationEnd = animationEnd;
exports.transitionEnd = transitionEnd;
var transitionProperty, transitionDuration, transitionTiming, transitionDelay;
exports.transitionDelay = transitionDelay;
exports.transitionTiming = transitionTiming;
exports.transitionDuration = transitionDuration;
exports.transitionProperty = transitionProperty;
var animationName, animationDuration, animationTiming, animationDelay;
exports.animationDelay = animationDelay;
exports.animationTiming = animationTiming;
exports.animationDuration = animationDuration;
exports.animationName = animationName;

if (_inDOM.default) {
  var _getTransitionPropert = getTransitionProperties();

  prefix = _getTransitionPropert.prefix;
  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;
  exports.transform = transform = prefix + "-" + transform;
  exports.transitionProperty = transitionProperty = prefix + "-transition-property";
  exports.transitionDuration = transitionDuration = prefix + "-transition-duration";
  exports.transitionDelay = transitionDelay = prefix + "-transition-delay";
  exports.transitionTiming = transitionTiming = prefix + "-transition-timing-function";
  exports.animationName = animationName = prefix + "-animation-name";
  exports.animationDuration = animationDuration = prefix + "-animation-duration";
  exports.animationTiming = animationTiming = prefix + "-animation-delay";
  exports.animationDelay = animationDelay = prefix + "-animation-timing-function";
}

var _default = {
  transform: transform,
  end: transitionEnd,
  property: transitionProperty,
  timing: transitionTiming,
  delay: transitionDelay,
  duration: transitionDuration
};
exports.default = _default;

function getTransitionProperties() {
  var style = document.createElement('div').style;
  var vendorMap = {
    O: function O(e) {
      return "o" + e.toLowerCase();
    },
    Moz: function Moz(e) {
      return e.toLowerCase();
    },
    Webkit: function Webkit(e) {
      return "webkit" + e;
    },
    ms: function ms(e) {
      return "MS" + e;
    }
  };
  var vendors = Object.keys(vendorMap);
  var transitionEnd, animationEnd;
  var prefix = '';

  for (var i = 0; i < vendors.length; i++) {
    var vendor = vendors[i];

    if (vendor + "TransitionProperty" in style) {
      prefix = "-" + vendor.toLowerCase();
      transitionEnd = vendorMap[vendor]('TransitionEnd');
      animationEnd = vendorMap[vendor]('AnimationEnd');
      break;
    }
  }

  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';
  if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';
  style = null;
  return {
    animationEnd: animationEnd,
    transitionEnd: transitionEnd,
    prefix: prefix
  };
}

/***/ }),

/***/ "./node_modules/dom-helpers/util/inDOM.js":
/*!************************************************!*\
  !*** ./node_modules/dom-helpers/util/inDOM.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/util/requestAnimationFrame.js":
/*!****************************************************************!*\
  !*** ./node_modules/dom-helpers/util/requestAnimationFrame.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/dom-helpers/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _inDOM = _interopRequireDefault(__webpack_require__(/*! ./inDOM */ "./node_modules/dom-helpers/util/inDOM.js"));

var vendors = ['', 'webkit', 'moz', 'o', 'ms'];
var cancel = 'clearTimeout';
var raf = fallback;
var compatRaf;

var getKey = function getKey(vendor, k) {
  return vendor + (!vendor ? k : k[0].toUpperCase() + k.substr(1)) + 'AnimationFrame';
};

if (_inDOM.default) {
  vendors.some(function (vendor) {
    var rafKey = getKey(vendor, 'request');

    if (rafKey in window) {
      cancel = getKey(vendor, 'cancel');
      return raf = function raf(cb) {
        return window[rafKey](cb);
      };
    }
  });
}
/* https://github.com/component/raf */


var prev = new Date().getTime();

function fallback(fn) {
  var curr = new Date().getTime(),
      ms = Math.max(0, 16 - (curr - prev)),
      req = setTimeout(fn, ms);
  prev = curr;
  return req;
}

compatRaf = function compatRaf(cb) {
  return raf(cb);
};

compatRaf.cancel = function (id) {
  window[cancel] && typeof window[cancel] === 'function' && window[cancel](id);
};

var _default = compatRaf;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/performance-now/lib/performance-now.js":
/*!*************************************************************!*\
  !*** ./node_modules/performance-now/lib/performance-now.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.7.1
(function() {
  var getNanoSeconds, hrtime, loadTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - loadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    loadTime = getNanoSeconds();
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/raf/index.js":
/*!***********************************!*\
  !*** ./node_modules/raf/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(/*! performance-now */ "./node_modules/raf/node_modules/performance-now/lib/performance-now.js")
  , root = typeof window === 'undefined' ? global : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix]
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
}
module.exports.cancel = function() {
  caf.apply(root, arguments)
}
module.exports.polyfill = function(object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf
  object.cancelAnimationFrame = caf
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/raf/node_modules/performance-now/lib/performance-now.js":
/*!******************************************************************************!*\
  !*** ./node_modules/raf/node_modules/performance-now/lib/performance-now.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

//# sourceMappingURL=performance-now.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/react-md/lib/Avatars/Avatar.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-md/lib/Avatars/Avatar.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _oneRequiredForA11yIf = __webpack_require__(/*! ../utils/PropTypes/oneRequiredForA11yIf */ "./node_modules/react-md/lib/utils/PropTypes/oneRequiredForA11yIf.js");

var _oneRequiredForA11yIf2 = _interopRequireDefault(_oneRequiredForA11yIf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The avatar component is used to convert a `FontIcon`, an image, or
 * a letter into an avatar.
 *
 * Any other props given to the Avatar component such as event listeners
 * or styles will also be applied.
 */
var Avatar = function (_PureComponent) {
  _inherits(Avatar, _PureComponent);

  function Avatar() {
    var _temp, _this, _ret;

    _classCallCheck(this, Avatar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _PureComponent.call.apply(_PureComponent, [this].concat(args))), _this), _this.state = { color: null }, _this._setRandomColor = function () {
      var suffixes = _this.props.suffixes;


      var i = Math.floor(Math.random() * (suffixes.length - 1)) + 1;
      _this.setState({ color: suffixes[i] });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Avatar.prototype.componentWillMount = function componentWillMount() {
    if (this.props.random) {
      this._setRandomColor();
    }
  };

  Avatar.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.random && (this.props.src !== nextProps.src || this.props.icon !== nextProps.icon)) {
      this._setRandomColor();
    } else if (this.props.random && !nextProps.random) {
      this.setState({ color: null });
    }
  };

  Avatar.prototype._getColor = function _getColor(suffix, suffixes, color) {
    if (suffix) {
      return 'md-avatar--' + suffix;
    } else if (!!suffixes && !color) {
      return 'md-avatar--default';
    }

    return 'md-avatar--' + color;
  };

  Avatar.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        contentStyle = _props.contentStyle,
        contentClassName = _props.contentClassName,
        src = _props.src,
        alt = _props.alt,
        icon = _props.icon,
        children = _props.children,
        suffix = _props.suffix,
        suffixes = _props.suffixes,
        iconSized = _props.iconSized,
        role = _props.role,
        random = _props.random,
        props = _objectWithoutProperties(_props, ['className', 'contentStyle', 'contentClassName', 'src', 'alt', 'icon', 'children', 'suffix', 'suffixes', 'iconSized', 'role', 'random']);

    var content = void 0;
    if (src) {
      content = _react2.default.createElement('img', {
        src: src,
        alt: alt,
        role: role,
        style: contentStyle,
        className: (0, _classnames2.default)('md-avatar-img', contentClassName)
      });
    } else {
      content = _react2.default.createElement(
        'div',
        {
          style: contentStyle,
          className: (0, _classnames2.default)('md-avatar-content', contentClassName)
        },
        icon || children
      );
    }
    return _react2.default.createElement(
      'div',
      _extends({}, props, {
        className: (0, _classnames2.default)('md-inline-block md-avatar', this._getColor(suffix, suffixes, this.state.color), {
          'md-avatar--icon-sized': iconSized
        }, className)
      }),
      content
    );
  };

  return Avatar;
}(_react.PureComponent);

Avatar.propTypes = {
  /**
   * An optional className to apply to the avatar.
   */
  className: _propTypes2.default.string,

  /**
   * An optional style to apply to either the `<img>` or `<div>` surrounding the content. The `<img>` tag
   * will be used with the `src` prop is defined.
   */
  contentStyle: _propTypes2.default.object,

  /**
   * An optional className to apply to either the `<img>` or `<div>` surrounding the content. The `<img>` tag
   * will be used with the `src` prop is defined.
   */
  contentClassName: _propTypes2.default.string,

  /**
   * An optional image source to use for the avatar.
   */
  src: (0, _oneRequiredForA11yIf2.default)(_propTypes2.default.string, 'role', 'alt'),

  /**
   * An optional image alt to use for the avatar if it is
   * an image.
   */
  alt: _propTypes2.default.string,

  /**
   * An optional `FontIcon` to convert into an avatar.
   */
  icon: _propTypes2.default.node,

  /**
   * An optional letter to display in the avatar.
   */
  children: _propTypes2.default.node,

  /**
   * A boolean if a random color should be applied to the avatar.
   * This will be one of the `suffixes`.
   */
  random: _propTypes2.default.bool,

  /**
   * A list of available suffixes to use when generating a random
   * color for the avatar.
   */
  suffixes: _propTypes2.default.arrayOf(_propTypes2.default.string),

  /**
   * The suffix to use for a color. This can be any value but
   * *should* be one of the available `suffixes`.
   */
  suffix: _propTypes2.default.string,

  /**
   * Boolean if the `Avatar` should be sized to a `FontIcon` size. This
   * will just set the width and height to the `$md-font-icon-size`.
   */
  iconSized: _propTypes2.default.bool,

  /**
   * A role for the avatar's image. When the `src` prop is set, either a `role` of `presentation`
   * or the `alt` prop must be defined for a11y.
   */
  role: _propTypes2.default.oneOf(['presentation'])
};
Avatar.defaultProps = {
  suffixes: ['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'grey', 'blue-grey']
};
exports.default = Avatar;

/***/ }),

/***/ "./node_modules/react-md/lib/Avatars/index.js":
/*!****************************************************!*\
  !*** ./node_modules/react-md/lib/Avatars/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Avatar = undefined;

var _Avatar2 = __webpack_require__(/*! ./Avatar */ "./node_modules/react-md/lib/Avatars/Avatar.js");

var _Avatar3 = _interopRequireDefault(_Avatar2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Avatar3.default;
exports.Avatar = _Avatar3.default;

/***/ }),

/***/ "./node_modules/react-md/lib/Buttons/Button.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-md/lib/Buttons/Button.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _deprecated = __webpack_require__(/*! react-prop-types/lib/deprecated */ "./node_modules/react-prop-types/lib/deprecated.js");

var _deprecated2 = _interopRequireDefault(_deprecated);

var _keyCodes = __webpack_require__(/*! ../constants/keyCodes */ "./node_modules/react-md/lib/constants/keyCodes.js");

var _CSSTransitionGroupTick = __webpack_require__(/*! ../constants/CSSTransitionGroupTick */ "./node_modules/react-md/lib/constants/CSSTransitionGroupTick.js");

var _CSSTransitionGroupTick2 = _interopRequireDefault(_CSSTransitionGroupTick);

var _getBtnStyles2 = __webpack_require__(/*! ./getBtnStyles */ "./node_modules/react-md/lib/Buttons/getBtnStyles.js");

var _getBtnStyles3 = _interopRequireDefault(_getBtnStyles2);

var _invalidIf = __webpack_require__(/*! ../utils/PropTypes/invalidIf */ "./node_modules/react-md/lib/utils/PropTypes/invalidIf.js");

var _invalidIf2 = _interopRequireDefault(_invalidIf);

var _captureNextEvent = __webpack_require__(/*! ../utils/EventUtils/captureNextEvent */ "./node_modules/react-md/lib/utils/EventUtils/captureNextEvent.js");

var _captureNextEvent2 = _interopRequireDefault(_captureNextEvent);

var _FontIcon = __webpack_require__(/*! ../FontIcons/FontIcon */ "./node_modules/react-md/lib/FontIcons/FontIcon.js");

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _IconSeparator = __webpack_require__(/*! ../Helpers/IconSeparator */ "./node_modules/react-md/lib/Helpers/IconSeparator.js");

var _IconSeparator2 = _interopRequireDefault(_IconSeparator);

var _injectInk = __webpack_require__(/*! ../Inks/injectInk */ "./node_modules/react-md/lib/Inks/injectInk.js");

var _injectInk2 = _interopRequireDefault(_injectInk);

var _injectTooltip = __webpack_require__(/*! ../Tooltips/injectTooltip */ "./node_modules/react-md/lib/Tooltips/injectTooltip.js");

var _injectTooltip2 = _interopRequireDefault(_injectTooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The `Button` component can either be a `FlatButton`, `RaisedButton`, `IconButton`, or a
 * `FloatingButton`.
 *
 * A `FlatButton` is a button with no depth on the screen that is ideally used in `Dialog`s
 * or `CardActions`. The text can be optionally styled with the `primary` or `secondary` colors.
 *
 * A `RaisedButton` is a button with some depth to help actions have more prominent in flat
 * layouts or layouts with varying content. The background can be styled by the light/dark theme,
 * or optionally the `primary` or `secondary` color.
 *
 * An `IconButton` is a button that just displays a `FontIcon` as the child in a circle.
 * The `FontIcon` can be optionally styled with the `primary` or `secondary` color.
 *
 * A `FloatingButton` is a special case. Woop
 */
var Button = function (_PureComponent) {
  _inherits(Button, _PureComponent);

  function Button() {
    var _temp, _this, _ret;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _PureComponent.call.apply(_PureComponent, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  Button.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.disabled && !nextProps.disabled && this.state.hover) {
      this.setState({ hover: false });
    }
  };

  Button.prototype.componentWillUpdate = function componentWillUpdate(nextProps, nextState) {
    var _this2 = this;

    if (!this.state.pressed && nextState.pressed) {
      this._timeout = setTimeout(function () {
        _this2._timeout = null;
        if (_this2._attemptedBlur) {
          _this2._attemptedBlur = false;

          _this2.setState({ pressed: false });
        }
      }, 450);
    }
  };

  Button.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this._timeout) {
      clearTimeout(this._timeout);
    }

    if (this._snackbarTimeout) {
      clearTimeout(this._snackbarTimeout);
    }

    window.removeEventListener('click', this._blur);
  };

  Button.prototype.render = function render() {
    var _getBtnStyles;

    var _props = this.props,
        className = _props.className,
        iconClassName = _props.iconClassName,
        iconChildren = _props.iconChildren,
        iconBefore = _props.iconBefore,
        href = _props.href,
        primary = _props.primary,
        secondary = _props.secondary,
        flat = _props.flat,
        raised = _props.raised,
        floating = _props.floating,
        mini = _props.mini,
        fixed = _props.fixed,
        fixedPosition = _props.fixedPosition,
        disabled = _props.disabled,
        component = _props.component,
        ink = _props.ink,
        tooltip = _props.tooltip,
        icon = _props.icon,
        forceIconSize = _props.forceIconSize,
        forceIconFontSize = _props.forceIconFontSize,
        type = _props.type,
        children = _props.children,
        swapTheming = _props.swapTheming,
        svg = _props.svg,
        propIconEl = _props.iconEl,
        label = _props.label,
        props = _objectWithoutProperties(_props, ['className', 'iconClassName', 'iconChildren', 'iconBefore', 'href', 'primary', 'secondary', 'flat', 'raised', 'floating', 'mini', 'fixed', 'fixedPosition', 'disabled', 'component', 'ink', 'tooltip', 'icon', 'forceIconSize', 'forceIconFontSize', 'type', 'children', 'swapTheming', 'svg', 'iconEl', 'label']);

    var iconEl = this.props.iconEl;


    if (!href) {
      props.type = type;
    }

    var _state = this.state,
        pressed = _state.pressed,
        hover = _state.hover,
        snackbar = _state.snackbar,
        snackbarType = _state.snackbarType;

    var iconBtnType = icon || floating;

    var visibleChildren = void 0;
    if (!iconEl && !svg && (iconClassName || iconChildren || iconBtnType || label && children)) {
      var resolvedIconChildren = iconChildren;
      if (typeof iconChildren === 'undefined') {
        resolvedIconChildren = iconBtnType || label ? children : null;
      }

      iconEl = _react2.default.createElement(
        _FontIcon2.default,
        { iconClassName: iconClassName, forceSize: forceIconSize, forceFontSize: forceIconFontSize, inherit: true },
        resolvedIconChildren
      );
    } else if (iconEl || svg) {
      var el = _react2.default.Children.only(iconEl || children);
      iconEl = _react2.default.cloneElement(el, { inherit: !el.props.error });
    }

    if (!iconBtnType) {
      visibleChildren = label || children;
      if (iconEl) {
        visibleChildren = _react2.default.createElement(
          _IconSeparator2.default,
          { label: visibleChildren, iconBefore: iconBefore },
          iconEl
        );
      }
    } else {
      visibleChildren = iconEl;
    }

    var Component = component || (href ? 'a' : 'button');
    return _react2.default.createElement(
      Component,
      _extends({}, props, {
        disabled: disabled,
        onTouchStart: this._handleTouchStart,
        onTouchEnd: this._handleTouchEnd,
        onMouseDown: this._handleMouseDown,
        onMouseUp: this._handleMouseUp,
        onKeyDown: this._handleKeyDown,
        onKeyUp: this._handleKeyUp,
        onMouseEnter: this._handleMouseEnter,
        onMouseLeave: this._handleMouseLeave,
        href: href,
        className: (0, _getBtnStyles3.default)({
          flat: flat,
          raised: raised,
          icon: icon,
          floating: floating,
          disabled: disabled,
          primary: primary,
          secondary: secondary,
          hover: hover,
          swapTheming: swapTheming,
          pressed: pressed,
          mini: mini,
          fixed: fixed,
          fixedPosition: fixedPosition
        }, (_getBtnStyles = {
          'md-btn--tooltip': tooltip,
          'md-btn--snackbar-floating': snackbar
        }, _getBtnStyles['md-btn--snackbar-floating-' + snackbarType + 'adjust'] = snackbar && snackbarType !== null, _getBtnStyles), 'md-inline-block', className)
      }),
      ink,
      tooltip,
      visibleChildren
    );
  };

  return Button;
}(_react.PureComponent);

Button.propTypes = {
  /**
   * An optional style to apply to the button.
   */
  style: _propTypes2.default.object,

  /**
   * An optional className to apply to the button.
   */
  className: _propTypes2.default.string,

  /**
   * A boolean if the icon should appear before or after the text for a `FlatButton` or
   * a `RaisedButton`.
   */
  iconBefore: _propTypes2.default.bool,

  /**
   * Any children used to display the button. When the button type is `icon` or `floating`,
   * this can be used to render the `FontIcon` instead of the `iconChildren` prop.
   *
   * When the button type is `raised` or `flat`, this will be the label or any other elements
   * you'd like to display in the button. This can work hand-in-hand with the `iconClassName`
   * and `iconChildren` to make a button with an icon and text.
   */
  children: _propTypes2.default.node,

  /**
   * An icon className to use in an optional `FontIcon` in any version of the button. This will
   * be used with the `children` prop. If the `floating` or `icon` props are set to true, this or
   * the children are required.
   *
   * @see {@link #iconEl}
   */
  iconClassName: _propTypes2.default.string,

  /**
   * Any children to use to display an icon in the button.
   *
   * @see {@link #iconEl}
   */
  iconChildren: _propTypes2.default.node,

  /**
   * An optional icon to display. This prop is recommended over the `iconClassName` and `iconChildren`
   * props since it allows more control for you. There is also better SVG support since it won't wrap
   * the SVG with the `FontIcon` element.
   */
  iconEl: _propTypes2.default.element,

  /**
   * The type for the button. This is required when the `component` prop is not
   * the 'a' tag, a `function`, or when the `href` prop is defined.
   */
  type: function type(props, propName, component) {
    for (var _len2 = arguments.length, args = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
      args[_key2 - 3] = arguments[_key2];
    }

    var c = props.component;
    var validator = _propTypes2.default.oneOf(['button', 'submit', 'reset']);
    if (!props.href && c !== 'a' && typeof c !== 'function') {
      validator = validator.isRequired;
    }

    return validator.apply(undefined, [props, propName, component].concat(args));
  },

  /**
   * Boolean if the button should be styled with the primary color.
   */
  primary: _propTypes2.default.bool,

  /**
   * Boolean if the button should be styled with the secondary color.
   */
  secondary: _propTypes2.default.bool,

  /**
   * Boolean if the button is disabled.
   */
  disabled: _propTypes2.default.bool,

  /**
   * An optional href for the button. This will style the `a` tag as a button.
   */
  href: _propTypes2.default.string,

  /**
   * An optional component to render the button as. This allows you to get all the styles and functionality
   * of the Button, but as a custom React component.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func, _propTypes2.default.object]),

  /**
   * An optional function to call when the `click` event is triggered.
   */
  onClick: _propTypes2.default.func,

  /**
   * An optional function to call when the `touchstart` event is triggered.
   */
  onTouchStart: _propTypes2.default.func,

  /**
   * An optional function to call when the `touchend` event is triggered.
   */
  onTouchEnd: _propTypes2.default.func,

  /**
   * An optional function to call when the `mousedown` event is triggered.
   */
  onMouseDown: _propTypes2.default.func,

  /**
   * An optional function to call when the `mouseup` event is triggered.
   */
  onMouseUp: _propTypes2.default.func,

  /**
   * An optional function to call when the `keyup` event is triggered.
   */
  onKeyUp: _propTypes2.default.func,

  /**
   * An optional function to call when the `keydown` event is triggered.
   */
  onKeyDown: _propTypes2.default.func,

  /**
   * An optional function to call when the `mouseenter` event is triggered.
   */
  onMouseEnter: _propTypes2.default.func,

  /**
   * An optional function to call when the `mouseleave` event is triggered.
   */
  onMouseLeave: _propTypes2.default.func,

  /**
   * Boolean if the `FloatingButton` should be fixed to the page. This prop can
   * only be enabled if the `floating` prop is true.
   */
  fixed: (0, _invalidIf2.default)(_propTypes2.default.bool, 'flat', 'raised', 'icon'),

  /**
   * The position that the `FloatingButton` should be fixed to the page. It will
   * either be fixed to the top right, top left, bottom right, or bottom left of
   * the page. This prop is only used if the `floating` prop and `fixed` prop are
   * `true`.
   */
  fixedPosition: _propTypes2.default.oneOf(['tr', 'tl', 'br', 'bl']).isRequired,

  /**
   * Boolean if the `FloatingButton` should be `mini`. This prop can only be used
   * when the `floating` prop is true.
   */
  mini: (0, _invalidIf2.default)(_propTypes2.default.bool, 'flat', 'raised', 'icon'),

  /**
   * Boolean if the `Button` should be styled as a `FlatButton`.
   */
  flat: _propTypes2.default.bool,

  /**
   * Boolean if the `Button` should be styled as a `RaisedButton`.
   */
  raised: _propTypes2.default.bool,

  /**
   * Boolean if the `Button` should be styled as a `IconButton`.
   *
   * @see {@link #svg}
   */
  icon: _propTypes2.default.bool,

  /**
   * Boolean if the `Button` should be styled as a `FloatingButton`.
   *
   * @see {@link #svg}
   */
  floating: _propTypes2.default.bool,

  /**
   * Boolean if the theming of `primary` or `secondary` should be swapped. By default,
   * only flat and icon buttons can gain the theme colors as text color while the raised
   * and floating buttons can gain the theme colors as background color.
   *
   * If this prop is enabled, the flat and icon buttons will gain the theme background colors
   * while the raised and icon will gain the theme text colors instead.
   *
   * @see {@link #primary}
   * @see {@link #secondary}
   */
  swapTheming: _propTypes2.default.bool,

  /**
   * An optional label to use for the tooltip. This is normally only used for
   * `IconButton`s or `FloatingButton`s, but can be used on `FlatButton`s and
   * `RaisedButton`s if you wish. Knock yourself out!
   *
   * If this prop is omitted, no tooltip will be included.
   */
  tooltipLabel: _propTypes2.default.node,

  /**
   * An optional delay before the tooltip appears on mouse over.
   */
  tooltipDelay: _propTypes2.default.number,

  /**
   * The position for the tooltip.
   */
  tooltipPosition: _propTypes2.default.oneOf(['top', 'right', 'bottom', 'left']),

  /**
   * An ink from `injectInk`.
   * @access private
   */
  ink: _propTypes2.default.node,

  /**
   * A tooltip from `injectTooltip`
   * @access private
   */
  tooltip: _propTypes2.default.node,

  /**
   * Custom validator for verifying that only one type is defined and that
   * at one type is defined.
   */
  _typeValidator: function _typeValidator(props, propName, component) {
    var flat = props.flat,
        raised = props.raised,
        icon = props.icon,
        floating = props.floating;


    var defined = [raised, flat, icon, floating].filter(function (d) {
      return d;
    });
    var len = defined.length;
    if (len === 0) {
      return new Error('A material design button type must be specified in the `' + component + '` but none were ' + 'given. Valid types are `flat`, `raised`, `icon`, or `floating`.');
    } else if (len !== 1) {
      return new Error('Only one material design button type may be specified in the `' + component + '` but `' + len + '` ' + 'were given. Select only one of `flat`, `raised`, `icon`, or `floating`.');
    }

    return null;
  },

  /**
   * Either a boolean that will enforce the 24x24 size of the font icon or a number of the size
   * to enforce. This is useful when using other font icon libraries that do not have a consistent
   * size.
   */
  forceIconSize: _FontIcon2.default.propTypes.forceSize,

  /**
   * Boolean if the `forceIconSize` prop should also force the `font-size` instead of only `width` and `height`.
   */
  forceIconFontSize: _propTypes2.default.bool,

  /**
   * Boolean if the child is an SVGIcon or FontIcon when using the `icon` or `floating` props. This is only needed
   * until the next release when the `label` migration can be removed.
   */
  svg: _propTypes2.default.bool,

  label: (0, _deprecated2.default)(_propTypes2.default.node, 'Use the `children` prop instead'),
  noIcon: (0, _deprecated2.default)(_propTypes2.default.bool, 'This has been removed during the alpha release. Children will always attempt to be rendered outside of an ' + 'icon by default for flat and raised buttons')
};
Button.defaultProps = {
  type: 'button',
  iconBefore: true,
  fixedPosition: 'br'
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.state = {
    pressed: false,
    snackbar: false,
    snackbarType: null
  };

  this._blur = function () {
    if (_this3.props.disabled) {
      return;
    }

    if (_this3._timeout) {
      _this3._attemptedBlur = true;
    } else {
      _this3.setState({ pressed: false });
    }
  };

  this._handleMouseUp = function (e) {
    if (_this3.props.onMouseUp) {
      _this3.props.onMouseUp(e);
    }

    _this3._blur();
  };

  this._handleMouseDown = function (e) {
    if (_this3.props.onMouseDown) {
      _this3.props.onMouseDown(e);
    }

    if (!_this3.props.disabled) {
      _this3.setState({ pressed: true });
    }
  };

  this._handleTouchStart = function (e) {
    if (_this3.props.onTouchStart) {
      _this3.props.onTouchStart(e);
    }

    if (!_this3.props.disabled) {
      _this3.setState({ pressed: true });
    }
  };

  this._handleTouchEnd = function (e) {
    if (_this3.props.onTouchEnd) {
      _this3.props.onTouchEnd(e);
    }

    _this3._blur();
    (0, _captureNextEvent2.default)('mouseover');
  };

  this._handleKeyUp = function (e) {
    if (_this3.props.onKeyUp) {
      _this3.props.onKeyUp(e);
    }

    if ((e.which || e.keyCode) === _keyCodes.TAB) {
      window.addEventListener('click', _this3._blur);
      _this3.setState({ pressed: true });
    }
  };

  this._handleKeyDown = function (e) {
    if (_this3.props.onKeyDown) {
      _this3.props.onKeyDown(e);
    }

    if ((e.which || e.keyCode) === _keyCodes.TAB) {
      window.removeEventListener('click', _this3._blur);
      _this3.setState({ pressed: false });
    }
  };

  this._handleMouseEnter = function (e) {
    if (_this3.props.onMouseEnter) {
      _this3.props.onMouseEnter(e);
    }

    if (!_this3.props.disabled) {
      _this3.setState({ hover: true });
    }
  };

  this._handleMouseLeave = function (e) {
    if (_this3.props.onMouseLeave) {
      _this3.props.onMouseLeave(e);
    }

    if (!_this3.props.disabled) {
      _this3.setState({ hover: false });
    }
  };

  this._animateForSnackbar = function (multiline, leaveTimeout) {
    if (typeof leaveTimeout === 'number') {
      _this3._snackbarTimeout = setTimeout(function () {
        _this3._snackbarTimeout = setTimeout(function () {
          _this3._snackbarTimeout = null;

          _this3.setState({ snackbar: false });
        }, leaveTimeout + 150);

        _this3.setState({ snackbarType: null });
      }, _CSSTransitionGroupTick2.default);
    } else {
      _this3._snackbarTimeout = setTimeout(function () {
        _this3._snackbarTimeout = null;

        _this3.setState({ snackbar: true, snackbarType: multiline ? 'multiline-' : '' });
      }, _CSSTransitionGroupTick2.default);
    }
  };
};

exports.default = (0, _injectInk2.default)((0, _injectTooltip2.default)(Button));

/***/ }),

/***/ "./node_modules/react-md/lib/Buttons/getBtnStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-md/lib/Buttons/getBtnStyles.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = getBtnStyles;

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _themeColors = __webpack_require__(/*! ../utils/themeColors */ "./node_modules/react-md/lib/utils/themeColors.js");

var _themeColors2 = _interopRequireDefault(_themeColors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Since it can be helpful to apply button styles on other components, this is a utlity function
 * to apply those styles based on props.
 */
function getBtnStyles(_ref) {
  var _ref2;

  var flat = _ref.flat,
      raised = _ref.raised,
      icon = _ref.icon,
      floating = _ref.floating,
      disabled = _ref.disabled,
      primary = _ref.primary,
      secondary = _ref.secondary,
      hover = _ref.hover,
      swapTheming = _ref.swapTheming,
      pressed = _ref.pressed,
      mini = _ref.mini,
      fixed = _ref.fixed,
      fixedPosition = _ref.fixedPosition;

  var flatStyles = flat || icon;
  var raisedStyles = raised || floating;
  var textTheming = flatStyles && !swapTheming || raisedStyles && swapTheming;
  var backgroundTheming = (!disabled && raisedStyles && !swapTheming || flatStyles && swapTheming) && (primary || secondary);

  for (var _len = arguments.length, classNames = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    classNames[_key - 1] = arguments[_key];
  }

  return _classnames2.default.apply(undefined, ['md-btn', (_ref2 = {
    'md-btn--flat': flat || disabled && raised,
    'md-btn--raised': !disabled && raised,
    'md-btn--icon': icon || floating,
    'md-btn--floating': floating,
    'md-btn--text': flat || raised,
    'md-btn--hover': !disabled && hover,
    'md-btn--raised-disabled': disabled && raised,
    'md-btn--raised-pressed': !disabled && raisedStyles && pressed,
    'md-btn--fixed': fixed
  }, _ref2['md-btn--fixed-' + fixedPosition] = floating && fixed, _ref2['md-btn--floating-mini'] = floating && mini, _ref2['md-btn--color-primary-active'] = !disabled && primary && hover && textTheming, _ref2['md-btn--color-secondary-active'] = !disabled && secondary && hover && textTheming, _ref2['md-pointer--hover'] = !disabled, _ref2['md-paper md-paper--2'] = !disabled && floating, _ref2['md-paper--4'] = !disabled && floating && pressed, _ref2), (0, _themeColors2.default)({
    text: !icon && !floating && !backgroundTheming,
    themeText: !backgroundTheming,
    disabled: disabled,
    primary: primary,
    secondary: secondary,
    hover: true,
    ink: true
  })].concat(classNames));
}

/***/ }),

/***/ "./node_modules/react-md/lib/Dividers/Divider.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-md/lib/Dividers/Divider.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The divider component will pass all other props such as style or
 * event listeners on to the component.
 */
var Divider = function (_PureComponent) {
  _inherits(Divider, _PureComponent);

  function Divider() {
    _classCallCheck(this, Divider);

    return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
  }

  Divider.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        inset = _props.inset,
        vertical = _props.vertical,
        props = _objectWithoutProperties(_props, ['className', 'inset', 'vertical']);

    var Component = vertical ? 'div' : 'hr';

    return _react2.default.createElement(Component, _extends({}, props, {
      className: (0, _classnames2.default)('md-divider', {
        'md-divider--vertical': vertical,
        'md-divider--inset': inset
      }, className)
    }));
  };

  return Divider;
}(_react.PureComponent);

Divider.propTypes = {
  /*
   * An optional style to apply to the divider.
   */
  style: _propTypes2.default.object,

  /**
   * An optional className to apply to the divider.
   */
  className: _propTypes2.default.string,

  /**
   * Boolean if this divider should be inset relative to it's container
   * component. This means that if it is in a `List` with `Avatar`, it
   * will start the divider  to the left of the main text in the list.
   */
  inset: _propTypes2.default.bool,

  /**
   * Boolean if the divider should be vertical instead of horizontal.
   */
  vertical: _propTypes2.default.bool
};
exports.default = Divider;

/***/ }),

/***/ "./node_modules/react-md/lib/Drawers/Drawer.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-md/lib/Drawers/Drawer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _deprecated = __webpack_require__(/*! react-prop-types/lib/deprecated */ "./node_modules/react-prop-types/lib/deprecated.js");

var _deprecated2 = _interopRequireDefault(_deprecated);

var _media = __webpack_require__(/*! ../constants/media */ "./node_modules/react-md/lib/constants/media.js");

var _CSSTransitionGroupTick = __webpack_require__(/*! ../constants/CSSTransitionGroupTick */ "./node_modules/react-md/lib/constants/CSSTransitionGroupTick.js");

var _CSSTransitionGroupTick2 = _interopRequireDefault(_CSSTransitionGroupTick);

var _getField = __webpack_require__(/*! ../utils/getField */ "./node_modules/react-md/lib/utils/getField.js");

var _getField2 = _interopRequireDefault(_getField);

var _mapToListParts = __webpack_require__(/*! ../utils/mapToListParts */ "./node_modules/react-md/lib/utils/mapToListParts.js");

var _mapToListParts2 = _interopRequireDefault(_mapToListParts);

var _controlled = __webpack_require__(/*! ../utils/PropTypes/controlled */ "./node_modules/react-md/lib/utils/PropTypes/controlled.js");

var _controlled2 = _interopRequireDefault(_controlled);

var _Paper = __webpack_require__(/*! ../Papers/Paper */ "./node_modules/react-md/lib/Papers/Paper.js");

var _Paper2 = _interopRequireDefault(_Paper);

var _Portal = __webpack_require__(/*! ../Helpers/Portal */ "./node_modules/react-md/lib/Helpers/Portal.js");

var _Portal2 = _interopRequireDefault(_Portal);

var _List = __webpack_require__(/*! ../Lists/List */ "./node_modules/react-md/lib/Lists/List.js");

var _List2 = _interopRequireDefault(_List);

var _Overlay = __webpack_require__(/*! ./Overlay */ "./node_modules/react-md/lib/Drawers/Overlay.js");

var _Overlay2 = _interopRequireDefault(_Overlay);

var _isType = __webpack_require__(/*! ./isType */ "./node_modules/react-md/lib/Drawers/isType.js");

var _DrawerTypes = __webpack_require__(/*! ./DrawerTypes */ "./node_modules/react-md/lib/Drawers/DrawerTypes.js");

var _DrawerTypes2 = _interopRequireDefault(_DrawerTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var oneOfDrawerTypes = _propTypes2.default.oneOf([_DrawerTypes2.default.FULL_HEIGHT, _DrawerTypes2.default.CLIPPED, _DrawerTypes2.default.FLOATING, _DrawerTypes2.default.PERSISTENT, _DrawerTypes2.default.PERSISTENT_MINI, _DrawerTypes2.default.TEMPORARY, _DrawerTypes2.default.TEMPORARY_MINI]);

/**
 * The `Drawer` component is used for having a sliding panel of content or navigation
 * that appears from the side of a screen.
 *
 * If the `Drawer` uses any of the `_MINI` drawer types, you will need to also create another
 * `Drawer` that is not `_MINI`. Transitioning the `width` on mobile devices is very sluggish,
 * and it isn't much more work to create another drawer.
 */

var Drawer = function (_PureComponent) {
  _inherits(Drawer, _PureComponent);

  /**
   * Determines the current media and returns an object containing matches for `mobile`, `tablet`, `desktop`,
   * and the current drawer type. This expects a `props` object of the drawer.
   *
   * If this is used server side, it will default to only matching mobile.
   *
   * @param {Object=} props - The current drawer's prop shape to extract the mobile, tablet,
   *    and desktop type/min widths. This defaults to the drawer's default props.
   * @return {Object} an object containing the media matches and the current type to use for the drawer.
   */
  Drawer.getCurrentMedia = function getCurrentMedia() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Drawer.defaultProps;
    var mobileMinWidth = props.mobileMinWidth,
        tabletMinWidth = props.tabletMinWidth,
        desktopMinWidth = props.desktopMinWidth,
        mobileType = props.mobileType,
        tabletType = props.tabletType,
        desktopType = props.desktopType,
        constantType = props.constantType;

    if (typeof window === 'undefined') {
      var _type = constantType && props.type ? props.type : mobileType;
      return { mobile: true, tablet: false, desktop: false, type: _type };
    }

    var mobile = Drawer.matchesMedia(mobileMinWidth, tabletMinWidth - 1);
    var tablet = Drawer.matchesMedia(tabletMinWidth, desktopMinWidth);
    var desktop = Drawer.matchesMedia(desktopMinWidth);

    var type = void 0;
    if (constantType && props.type && (0, _isType.isTemporary)(props.type)) {
      type = props.type;
    } else if (desktop) {
      type = desktopType;
    } else if (tablet) {
      type = tabletType;
    } else {
      type = mobileType;
    }

    return { type: type, mobile: mobile, tablet: tablet, desktop: desktop };
  };

  /**
   * Simply does a `window.matchMedia(query)` where the query gets defined as a min width
   * and optional max width.
   *
   * @param {number} min - The min width for the media query.
   * @param {number=} max - An optional max width to include for the media query.
   * @return {boolean} true if the media matches.
   */


  Drawer.matchesMedia = function matchesMedia(min, max) {
    var media = 'screen and (min-width: ' + min + 'px)';
    if (max) {
      media += ' and (max-width: ' + max + 'px)';
    }

    return window.matchMedia(media).matches;
  };

  function Drawer(props) {
    _classCallCheck(this, Drawer);

    var _this = _possibleConstructorReturn(this, _PureComponent.call(this, props));

    _initialiseProps.call(_this);

    var defaultVisible = props.defaultVisible,
        defaultMedia = props.defaultMedia,
        overlay = props.overlay;


    _this.state = {
      mobile: defaultMedia === 'mobile',
      tablet: defaultMedia === 'tablet',
      desktop: defaultMedia === 'desktop',
      animating: false,
      overlayActive: false,
      drawerActive: false
    };

    if (typeof props.type === 'undefined') {
      _this.state.type = props[defaultMedia + 'Type'];
    }

    var type = (0, _getField2.default)(props, _this.state, 'type');
    _this._initialFix = true;

    if (typeof props.visible === 'undefined') {
      var _visible = (0, _isType.isPermanent)(type) || (0, _isType.isMini)(type);
      if (!_visible && typeof defaultVisible !== 'undefined') {
        _visible = defaultVisible;
      }

      _this.state.visible = _visible;
    }

    var visible = (0, _getField2.default)(props, _this.state, 'visible');

    _this.state.overlayActive = (typeof overlay !== 'undefined' ? overlay : (0, _isType.isTemporary)(type) && !_this.state.desktop) && visible;
    _this.state.drawerActive = visible;
    return _this;
  }

  Drawer.prototype.componentWillMount = function componentWillMount() {
    if (typeof window !== 'undefined') {
      this._updateType(this.props);
    }
  };

  Drawer.prototype.componentDidMount = function componentDidMount() {
    if (!(0, _isType.isMini)((0, _getField2.default)(this.props, this.state, 'type'))) {
      window.addEventListener('resize', this._updateMedia);
    }
  };

  Drawer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _props = this.props,
        mobileMinWidth = _props.mobileMinWidth,
        mobileType = _props.mobileType,
        tabletMinWidth = _props.tabletMinWidth,
        tabletType = _props.tabletType,
        desktopMinWidth = _props.desktopMinWidth,
        desktopType = _props.desktopType;


    if (nextProps.mobileMinWidth !== mobileMinWidth || nextProps.mobileType !== mobileType || nextProps.tabletMinWidth !== tabletMinWidth || nextProps.tabletType !== tabletType || nextProps.desktopMinWidth !== desktopMinWidth || nextProps.desktopType !== desktopType) {
      this._updateType(nextProps);
    }

    var visible = nextProps.visible,
        transitionDuration = nextProps.transitionDuration,
        overlay = nextProps.overlay;

    if (this.props.visible === nextProps.visible) {
      return;
    }

    var type = (0, _getField2.default)(nextProps, this.state, 'type');
    this._animate(visible, type, transitionDuration, overlay, this.state.desktop);
  };

  Drawer.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this._timeout) {
      clearTimeout(this._timeout);
    }

    if (this._closeTimeout) {
      clearTimeout(this._closeTimeout);
    }

    window.removeEventListener('resize', this._updateMedia);
  };

  Drawer.prototype.render = function render() {
    var _cn;

    var _state = this.state,
        overlayActive = _state.overlayActive,
        drawerActive = _state.drawerActive,
        animating = _state.animating;

    var _props2 = this.props,
        id = _props2.id,
        style = _props2.style,
        className = _props2.className,
        navStyle = _props2.navStyle,
        navClassName = _props2.navClassName,
        component = _props2.component,
        navItems = _props2.navItems,
        header = _props2.header,
        children = _props2.children,
        inline = _props2.inline,
        position = _props2.position,
        overlay = _props2.overlay,
        clickableDesktopOverlay = _props2.clickableDesktopOverlay,
        lastChild = _props2.lastChild,
        portal = _props2.portal,
        overlayStyle = _props2.overlayStyle,
        overlayClassName = _props2.overlayClassName,
        propType = _props2.type,
        propVisible = _props2.visible,
        propRenderNode = _props2.renderNode,
        propNavItemsId = _props2.navItemsId,
        propZDepth = _props2.zDepth,
        constantType = _props2.constantType,
        defaultVisible = _props2.defaultVisible,
        defaultMedia = _props2.defaultMedia,
        mobileType = _props2.mobileType,
        mobileMinWidth = _props2.mobileMinWidth,
        tabletType = _props2.tabletType,
        tabletMinWidth = _props2.tabletMinWidth,
        desktopType = _props2.desktopType,
        desktopMinWidth = _props2.desktopMinWidth,
        transitionDuration = _props2.transitionDuration,
        onMediaTypeChange = _props2.onMediaTypeChange,
        onVisibilityChange = _props2.onVisibilityChange,
        autoclose = _props2.autoclose,
        autocloseAfterInk = _props2.autocloseAfterInk,
        onVisibilityToggle = _props2.onVisibilityToggle,
        closeOnNavItemClick = _props2.closeOnNavItemClick,
        props = _objectWithoutProperties(_props2, ['id', 'style', 'className', 'navStyle', 'navClassName', 'component', 'navItems', 'header', 'children', 'inline', 'position', 'overlay', 'clickableDesktopOverlay', 'lastChild', 'portal', 'overlayStyle', 'overlayClassName', 'type', 'visible', 'renderNode', 'navItemsId', 'zDepth', 'constantType', 'defaultVisible', 'defaultMedia', 'mobileType', 'mobileMinWidth', 'tabletType', 'tabletMinWidth', 'desktopType', 'desktopMinWidth', 'transitionDuration', 'onMediaTypeChange', 'onVisibilityChange', 'autoclose', 'autocloseAfterInk', 'onVisibilityToggle', 'closeOnNavItemClick']);

    var _props3 = this.props,
        navItemsId = _props3.navItemsId,
        zDepth = _props3.zDepth;

    if (!navItemsId && id) {
      navItemsId = id + '-nav-items';
    }

    var desktop = this.state.desktop;

    var renderNode = (0, _getField2.default)(this.props, this.context, 'renderNode');
    var type = (0, _getField2.default)(this.props, this.state, 'type');
    var visible = (0, _getField2.default)(this.props, this.state, 'visible');
    var mini = (0, _isType.isMini)(type);
    var temporary = (0, _isType.isTemporary)(type);
    var floating = _DrawerTypes2.default.FLOATING === type;
    var permanent = (0, _isType.isPermanent)(type);

    var Component = void 0;
    if (component) {
      Component = component;
    } else if (navItems) {
      Component = 'nav';
    } else {
      Component = 'aside';
    }

    var navigation = void 0;
    if (navItems) {
      navigation = _react2.default.createElement(
        _List2.default,
        {
          ref: this._setNavigation,
          key: 'navigation',
          id: navItemsId,
          style: navStyle,
          className: (0, _classnames2.default)('md-list--drawer', {
            'md-toolbar-relative': mini && !visible,
            'md-background': floating
          }, navClassName),
          onClick: this._handleNavClick
        },
        navItems.map(_mapToListParts2.default)
      );
    }

    if (typeof zDepth === 'undefined') {
      zDepth = 1;
      if (floating || inline) {
        zDepth = 0;
      } else if (!mini && temporary) {
        zDepth = 5;
      }
    }

    var overlayVisible = overlay;
    if (typeof overlayVisible !== 'boolean') {
      overlayVisible = temporary && !mini && (!desktop || clickableDesktopOverlay) && (animating || visible);
    }

    var drawer = _react2.default.createElement(
      _Paper2.default,
      _extends({}, props, {
        id: id,
        key: 'drawer',
        component: Component,
        zDepth: zDepth,
        raiseOnHover: false,
        style: style,
        className: (0, _classnames2.default)('md-drawer', (_cn = {}, _cn['md-drawer--' + position] = !inline, _cn['md-drawer--fixed'] = !inline, _cn['md-drawer--inline'] = inline, _cn['md-drawer--active'] = mini || drawerActive, _cn['md-drawer--mini'] = mini, _cn['md-transition--deceleration'] = !mini && !permanent && visible, _cn['md-transition--acceleration'] = !mini && !permanent && !visible, _cn['md-background'] = inline || floating, _cn['md-background--card'] = !floating && !inline, _cn), className)
      }),
      header,
      navigation,
      children,
      _react2.default.createElement(_Overlay2.default, {
        style: overlayStyle,
        className: overlayClassName,
        active: overlayActive,
        onClick: this._closeDrawer,
        visible: overlayVisible,
        renderNode: renderNode
      })
    );

    if (inline || permanent) {
      return drawer;
    } else if (!portal) {
      return mini || animating || visible ? drawer : null;
    }

    return _react2.default.createElement(
      _Portal2.default,
      { visible: animating || visible, renderNode: renderNode, lastChild: lastChild },
      drawer
    );
  };

  return Drawer;
}(_react.PureComponent);

Drawer.DrawerTypes = _DrawerTypes2.default;
Drawer.propTypes = {
  /**
   * An optional id to provide to the drawer. This is generally a good idea to provide if
   * there are any `navItems` defined.
   *
   * @see {@link #navItemsId}
   */
  id: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  /**
   * An optional id to provide to the navItems list. If this is omitted and the `id` prop is
   * defined, it will be defaulted to `${id}-nav-items`.
   */
  navItemsId: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  /**
   * An optional style to apply.
   */
  style: _propTypes2.default.object,

  /**
   * An optional className to apply.
   */
  className: _propTypes2.default.string,

  /**
   * An optional style to apply to the `List` surrounding the `navItems`.
   */
  navStyle: _propTypes2.default.object,

  /**
   * An optional className to apply to the `List` surrounding the `navItems`.
   */
  navClassName: _propTypes2.default.string,

  /**
   * An optional style to apply to the overlay.
   */
  overlayStyle: _propTypes2.default.object,

  /**
   * An optional className to apply to the overlay.
   */
  overlayClassName: _propTypes2.default.string,

  /**
   * An optional component to render the drawer in. When this prop is undefined, the drawer
   * will be rendered as a `nav` if the `navItems` prop is defined, otherwise an `aside`.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.element, _propTypes2.default.object]),

  /**
   * An optional list of navigation items to display in the drawer. This list can either contain
   * a valid child component for a `List` or an object used to create a `Divider`, `Subheader`,
   * or `ListItem`.
   *
   * - To create a divider in the list, set a `divider` key to `true`. Any other keys will be
   * passed to the `Divider` component.
   * - To create a subheader in the list, set the `subheader` key to `true`. Any other keys will
   * be passed to the `Subheader` component.
   * - To create a list item, just create an object with any normal `ListItem` props.
   */
  navItems: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.shape({
    divider: _propTypes2.default.bool,
    subheader: _propTypes2.default.bool,
    primaryText: _propTypes2.default.node
  })])),

  /**
   * Boolean if a temporary drawer should close when a nav item is clicked.
   */
  autoclose: _propTypes2.default.bool,

  /**
   * An optional header to display. This _should_ normally be a toolbar.
   */
  header: _propTypes2.default.node,

  /**
   * Any additional children to display after the `header` and `navItems`.
   */
  children: _propTypes2.default.node,

  /**
   * The drawer type to use when the current device matches the mobile
   * media query.
   */
  mobileType: _propTypes2.default.oneOf([Drawer.DrawerTypes.TEMPORARY, Drawer.DrawerTypes.TEMPORARY_MINI]).isRequired,

  /**
   * The min-width to use for the mobile media query.
   */
  mobileMinWidth: _propTypes2.default.number.isRequired,

  /**
   * The drawer type to use when the current device matches the tablet
   * media query.
   */
  tabletType: oneOfDrawerTypes.isRequired,

  /**
   * The min-width to use for the tablet media query.
   */
  tabletMinWidth: _propTypes2.default.number.isRequired,

  /**
   * The drawer type to use when the current device matches the desktop media
   * query.
   */
  desktopType: oneOfDrawerTypes.isRequired,

  /**
   * The min-width for a desktop screen.
   */
  desktopMinWidth: _propTypes2.default.number.isRequired,

  /**
   * An optional type to enforce across all media sizes. Since `mobile` devices are
   * included, you are required to manually specify when the `type` should be `temporary`.
   *
   * When the `type` is not one of the `temporary` types, the `onMediaTypeChange` prop
   * must be provided.
   */
  type: function type(props, propName, component) {
    for (var _len = arguments.length, others = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      others[_key - 3] = arguments[_key];
    }

    var type = props[propName];
    if ((0, _isType.isTemporary)(type)) {
      return oneOfDrawerTypes.apply(undefined, [props, propName, component].concat(others));
    }

    var err = oneOfDrawerTypes.apply(undefined, [props, propName, component].concat(others));
    if (!err && typeof type !== 'undefined' && !(0, _isType.isMini)(type) && typeof props.onMediaTypeChange === 'undefined') {
      err = new Error('You provided a `' + propName + '` prop to the ' + component + ' without the `onMediaTypeChange` ' + ('handler. The `onMediaTypeChange` prop must be specified when the `' + propName + '` is not ') + 'one of the `temporary` types.');
    }

    return err;
  },

  /**
   * An optional function to call when the drawer's type changes when the screen resizes.
   * The callback will include the new `type` that should be used for the screen size,
   * and an object containing the media matches for `mobile`, `tablet`, and `desktop`.
   *
   * ```js
   * this.props.onMediaTypeChange(Drawer.DrawerTypes.TEMPORARY, {
   *   mobile: true,
   *   tablet: false,
   *   desktop: false,
   * });
   * ```
   */
  onMediaTypeChange: _propTypes2.default.func,

  /**
   * The default drawer type to display on initial render. The drawer will automatically
   * adjust itself to the correct media once it has mounted. This prop is really only useful
   * for server side rendering.
   */
  defaultMedia: _propTypes2.default.oneOf(['mobile', 'tablet', 'desktop']).isRequired,

  /**
   * Boolean if there should be a visible overlay when the drawer is visible. The default behavior
   * is to only include a visible overlay when the `type` is `TEMPORARY` or `TEMPORARY_MINI` and
   * the device is not a desktop.
   *
   * Definining this variable as `true` or `false` will override any default behavior. This means that
   * if this is enabled for a full-height drawer, an overlay will still be created.
   */
  overlay: _propTypes2.default.bool,

  /**
   * Boolean if the Portal's functionality of rendering in a separate react tree should be applied
   * to the drawer. The overlay that appears for temporary type drawers will still appear in the
   * separate subtree.
   *
   * @see {@link Helpers/Portal}
   */
  portal: _propTypes2.default.bool,

  /**
   * An optional DOM Node to render the drawer into. The default is to render as
   * the first child in the `body`.
   *
   * > This prop will not be used when the drawer is of the permanent type or `inline` is specified
   * since the `Portal` component will not be used.
   */
  renderNode: _propTypes2.default.object,

  /**
   * Boolean if the drawer should be rendered as the last child instead of the first child
   * in the `renderNode` or `body`.
   *
   * > This prop will not be used when the drawer is of the permanent type or `inline` is specified
   * since the `Portal` component will not be used.
   */
  lastChild: _propTypes2.default.bool,

  /**
   * Boolean if the drawer is visible by default. If this is omitted, the drawer will be visible
   * if the current drawer type is NOT `Drawer.DrawerTypes.TEMPORARY` or `Drawer.DrawerTypes.TEMPORARY_MINI`.
   *
   * This basically means that if you are using the default configuration, a mobile device's drawer
   * will be hidden while tablets and desktops will be visible.
   */
  defaultVisible: _propTypes2.default.bool,

  /**
   * Boolean if the drawer is visible. This will force the component to define the `onVisibilityChange`
   * prop as well as manually updating the drawer's visibility.
   */
  visible: (0, _controlled2.default)(_propTypes2.default.bool, 'onVisibilityChange', 'defaultVisible'),

  /**
   * An optional function to call when the visibility of the drawer is changed. The function will
   * be called with the new visibility state.
   *
   * ```js
   * onVisibilityChange(!currentlyVisible);
   * ```
   */
  onVisibilityChange: _propTypes2.default.func,

  /**
   * The drawer's position on the page when it is not `inline`. When the drawer's position is `left`,
   * the width will be `calc(100vw - 56px)` on mobile devices and `$md-drawer-desktop-width` on desktops.
   *
   * When the position is `right`, the width will be `100vw` for mobile devices and scaling to the drawer's
   * children width on desktops.
   */
  position: _propTypes2.default.oneOf(['left', 'right']).isRequired,

  /**
   * Boolean if the drawer should be displayed inline instead of fixed to the page. When this prop
   * is enabled, the `position` prop will not be used.
   */
  inline: _propTypes2.default.bool,

  /**
   * The `$md-drawer-transition-time` value from sass.
   */
  transitionDuration: _propTypes2.default.number.isRequired,

  /**
   * Boolean if the temporary drawer's overlay should be created on desktop screens. This is really used so that
   * the drawer will close when a user clicks anywhere on the page except in the drawer.
   */
  clickableDesktopOverlay: _propTypes2.default.bool,

  /**
   * Boolean if the `autoclose` feature should wait for the ink transition to finish before automatically
   * closing the drawer. This will add a `300ms` delay. If this is `false`, there will only be a `17ms` delay.
   *
   * > The delay is required so that any event listeners will still be correctly invoked when an item is clicked.
   */
  autocloseAfterInk: _propTypes2.default.bool,

  /**
   * Boolean if the `type` prop should be constant across all media sizes. This is only valid if the `type` is
   * one of the temporary types.
   *
   * This will basically mean that when attempting to do a media adjustment, it will use the `type` prop instead of
   * `mobileType`, `tabletType`, and `desktopType` to determine the next drawer type.
   */
  constantType: _propTypes2.default.bool.isRequired,

  /**
   * An optional zDepth to apply to the drawer. If this is omitted, the value will be set as follows:
   * - floating || inline = 1
   * - temporary = 5
   * - all others = 1
   *
   * @see {@link Papers/Paper#zDepth}
   */
  zDepth: _propTypes2.default.number,

  closeOnNavItemClick: (0, _deprecated2.default)(_propTypes2.default.bool, 'Use `autoclose` instead'),
  onVisibilityToggle: (0, _deprecated2.default)(_propTypes2.default.func, 'Use `onVisibilityChange` instead')
};
Drawer.defaultProps = {
  defaultMedia: 'mobile',
  mobileType: Drawer.DrawerTypes.TEMPORARY,
  mobileMinWidth: _media.MOBILE_MIN_WIDTH,
  tabletType: Drawer.DrawerTypes.PERSISTENT,
  tabletMinWidth: _media.TABLET_MIN_WIDTH,
  desktopType: Drawer.DrawerTypes.FULL_HEIGHT,
  desktopMinWidth: _media.DESKTOP_MIN_WIDTH,
  position: 'left',
  transitionDuration: 300,
  autoclose: true,
  clickableDesktopOverlay: true,
  constantType: true
};
Drawer.contextTypes = {
  renderNode: _propTypes2.default.object
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this._updateType = function (props) {
    var onMediaTypeChange = props.onMediaTypeChange,
        overlay = props.overlay,
        transitionDuration = props.transitionDuration;


    var onVisibilityChange = props.onVisibilityToggle || props.onVisibilityChange;

    var state = Drawer.getCurrentMedia(props);
    var diffType = (0, _getField2.default)(props, _this2.state, 'type') !== state.type;
    var diffMedia = state.mobile !== _this2.state.mobile || state.tablet !== _this2.state.tablet || state.desktop !== _this2.state.desktop;

    if (onMediaTypeChange && (diffType || diffMedia)) {
      onMediaTypeChange(state.type, { mobile: state.mobile, tablet: state.tablet, desktop: state.desktop });
    }

    if (diffType) {
      var visible = (0, _isType.isPermanent)(state.type);
      if (_this2._initialFix) {
        if (props.defaultVisible) {
          visible = props.defaultVisible;
        } else if (props.visible) {
          visible = props.visible;
        }
      }

      var prevVisible = (0, _getField2.default)(props, _this2.state, 'visible');
      if (onVisibilityChange && visible !== prevVisible) {
        onVisibilityChange(visible);
      }

      if (typeof props.visible === 'undefined') {
        state.visible = visible;
        _this2._animate(visible, state.type, transitionDuration, overlay, state.desktop);
      }
    } else if (_this2._initialFix && diffMedia) {
      state.overlayActive = (typeof overlay !== 'undefined' ? overlay : (0, _isType.isTemporary)(state.type) && !state.desktop) && (0, _getField2.default)(props, _this2.state, 'visible');
    }

    if (typeof props.type !== 'undefined') {
      var _state2 = state,
          type = _state2.type,
          realState = _objectWithoutProperties(_state2, ['type']); // eslint-disable-line no-unused-vars


      state = realState;
    }

    _this2._initialFix = false;
    _this2.setState(state);
  };

  this._updateMedia = function () {
    _this2._updateType(_this2.props);
  };

  this._animate = function (visible, type, timeout, overlay, desktop) {
    if (_this2._timeout) {
      clearTimeout(_this2._timeout);
    }

    if (visible) {
      _this2._timeout = setTimeout(function () {
        _this2._timeout = null;

        _this2.setState({
          overlayActive: overlay || (0, _isType.isTemporary)(type) && !desktop,
          drawerActive: true,
          animating: true
        });
      }, _CSSTransitionGroupTick2.default);
    } else {
      _this2._timeout = setTimeout(function () {
        _this2._timeout = null;

        _this2.setState({ animating: false });
      }, timeout);
      _this2.setState({ animating: true, overlayActive: false, drawerActive: false });
    }
  };

  this._setNavigation = function (navigation) {
    _this2._navigation = (0, _reactDom.findDOMNode)(navigation);
  };

  this._handleNavClick = function (e) {
    var _props4 = _this2.props,
        closeOnNavItemClick = _props4.closeOnNavItemClick,
        autoclose = _props4.autoclose,
        autocloseAfterInk = _props4.autocloseAfterInk;

    var enabled = typeof closeOnNavItemClick !== 'undefined' ? closeOnNavItemClick : autoclose;
    if (!enabled || !(0, _isType.isTemporary)((0, _getField2.default)(_this2.props, _this2.state, 'type'))) {
      return;
    }

    var target = e.target;

    while (target && _this2._navigation.contains(target)) {
      if (target.classList.contains('md-list-tile')) {
        // Clicked a nav item that has a nested list
        if (target.getAttribute('aria-expanded') !== null) {
          return;
        }

        _this2._closeTimeout = setTimeout(function () {
          _this2._closeTimeout = null;

          _this2._closeDrawer(e);
        }, autocloseAfterInk ? 300 : _CSSTransitionGroupTick2.default);
        return;
      }

      target = target.parentNode;
    }
  };

  this._closeDrawer = function () {
    var _props5 = _this2.props,
        onVisibilityChange = _props5.onVisibilityChange,
        onVisibilityToggle = _props5.onVisibilityToggle,
        transitionDuration = _props5.transitionDuration,
        overlay = _props5.overlay;

    var callback = onVisibilityToggle || onVisibilityChange;
    if (callback) {
      callback(false);
    }

    if (typeof _this2.props.visible === 'undefined') {
      _this2.setState({ visible: false });
      _this2._animate(false, (0, _getField2.default)(_this2.props, _this2.state, 'type'), transitionDuration, overlay, _this2.state.desktop);
    }
  };
};

exports.default = Drawer;

/***/ }),

/***/ "./node_modules/react-md/lib/Drawers/DrawerTypes.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-md/lib/Drawers/DrawerTypes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/** @module Drawers/DrawerTypes */

/**
 * An enum for all the different type of drawers.
 *
 * @readonly
 * @enum {string}
 */
var DrawerTypes = {
  // Permanent drawers
  /**
   * This is the default drawer type. It will always be on the screen and takes
   * up the entire height. This is very helpful for main navigation on desktops
   * when you do not need an expandable workspace.
   */
  FULL_HEIGHT: 'full-height',

  /**
   * This drawer type will always be on the screen, but it will appear under the
   * main toolbar.
   */
  CLIPPED: 'clipped',

  /**
   * This drawer type will always be on the screen, but it will appear under the
   * main toolbar and have a transparent background. This is useful if you want
   * a persistent drawer on desktop screens, but do not want the main focus to be
   * the drawer.
   */
  FLOATING: 'floating',

  // Persistent drawers
  /**
   * A persistent drawer changes between being hidden and being fixed on the page like
   * a permanent drawer. When it is visible, it will take up the same amount of room
   * as a permanent drawer, and will not go away until closed.
   *
   * This drawer type is helpful when you need to have a dynamic workspace size.
   */
  PERSISTENT: 'persistent',

  /**
   * This is a modification of the persistent drawer. It will behave as the persistent drawer
   * but it will always have a "mini" drawer visible. This is helpful when you want to have
   * a dynamic workspace size and keep certain actions available at all times.
   */
  PERSISTENT_MINI: 'persistent-mini',

  // Temporary
  /**
   * A temporary drawer will not be visible by default. When it is visible, it will overlay
   * the page to get the main focus on the drawer. When the user touches the overlay or
   * one of the navigation items, the drawer will be closed. The overlay can be disabled on
   * desktop and tablets.
   */
  TEMPORARY: 'temporary',

  /**
   * This is a modification of the temporary drawer. It will behave like a temporary drawer,
   * but it will always have a "mini" drawer visible. Just like the `PERSISTENT_MINI` drawer
   * type, this is useful when certain actions should be available at all times but additional
   * actions are available when the drawer is visible.
   */
  TEMPORARY_MINI: 'temporary-mini'
};

exports.default = DrawerTypes;

/***/ }),

/***/ "./node_modules/react-md/lib/Drawers/Overlay.js":
/*!******************************************************!*\
  !*** ./node_modules/react-md/lib/Drawers/Overlay.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _Portal = __webpack_require__(/*! ../Helpers/Portal */ "./node_modules/react-md/lib/Helpers/Portal.js");

var _Portal2 = _interopRequireDefault(_Portal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Overlay = function (_PureComponent) {
  _inherits(Overlay, _PureComponent);

  function Overlay() {
    _classCallCheck(this, Overlay);

    return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
  }

  Overlay.prototype.getChildContext = function getChildContext() {
    // Always want the overlay to render in a separate subtree until 1.1.0
    return { isInPortal: false };
  };

  Overlay.prototype.render = function render() {
    var _props = this.props,
        active = _props.active,
        visible = _props.visible,
        renderNode = _props.renderNode,
        onClick = _props.onClick,
        style = _props.style,
        className = _props.className;

    return _react2.default.createElement(
      _Portal2.default,
      { visible: visible, renderNode: renderNode },
      _react2.default.createElement('div', {
        style: style,
        className: (0, _classnames2.default)('md-overlay md-overlay--drawer md-pointer--hover', {
          'md-overlay--active': active
        }, className),
        onClick: onClick
      })
    );
  };

  return Overlay;
}(_react.PureComponent);

Overlay.propTypes = {
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  active: _propTypes2.default.bool,
  visible: _propTypes2.default.bool.isRequired,
  renderNode: _propTypes2.default.object,
  onClick: _propTypes2.default.func
};
Overlay.childContextTypes = {
  isInPortal: _propTypes2.default.bool
};
exports.default = Overlay;

/***/ }),

/***/ "./node_modules/react-md/lib/Drawers/isType.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-md/lib/Drawers/isType.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isTemporary = isTemporary;
exports.isPersistent = isPersistent;
exports.isPermanent = isPermanent;
exports.isMini = isMini;

var _DrawerTypes = __webpack_require__(/*! ./DrawerTypes */ "./node_modules/react-md/lib/Drawers/DrawerTypes.js");

var _DrawerTypes2 = _interopRequireDefault(_DrawerTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FULL_HEIGHT = _DrawerTypes2.default.FULL_HEIGHT,
    CLIPPED = _DrawerTypes2.default.CLIPPED,
    FLOATING = _DrawerTypes2.default.FLOATING,
    PERSISTENT = _DrawerTypes2.default.PERSISTENT,
    PERSISTENT_MINI = _DrawerTypes2.default.PERSISTENT_MINI,
    TEMPORARY = _DrawerTypes2.default.TEMPORARY,
    TEMPORARY_MINI = _DrawerTypes2.default.TEMPORARY_MINI;
function isTemporary(type) {
  return [TEMPORARY, TEMPORARY_MINI].indexOf(type) !== -1;
}

function isPersistent(type) {
  return [PERSISTENT, PERSISTENT_MINI].indexOf(type) !== -1;
}

function isPermanent(type) {
  return [FULL_HEIGHT, CLIPPED, FLOATING].indexOf(type) !== -1;
}

function isMini(type) {
  return [PERSISTENT_MINI, TEMPORARY_MINI].indexOf(type) !== -1;
}

/***/ }),

/***/ "./node_modules/react-md/lib/FontIcons/FontIcon.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-md/lib/FontIcons/FontIcon.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _themeColors = __webpack_require__(/*! ../utils/themeColors */ "./node_modules/react-md/lib/utils/themeColors.js");

var _themeColors2 = _interopRequireDefault(_themeColors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ICON_SIZE = 24;

/**
 * The \`FontIcon\` component is used for rendering a font-icon library's
 * icon. The default is to use the `material-icons` library, but others
 * can be used as well.
 *
 * If you are using another font-icon library that does not always create
 * icons with a perfect 1:1 scale (such as font-awesome), it is recommended
 * to update the `.md-icon` styles to set the width and height to `$md-font-icon-size`.
 * However, this will prevent different sided icons.
 *
 * ```scss
 * .md-icon.fa {
 *   height: $md-font-icon-size;
 *   width: $md-font-icon-size;
 * }
 * ```
 */

var FontIcon = function (_PureComponent) {
  _inherits(FontIcon, _PureComponent);

  function FontIcon(props) {
    _classCallCheck(this, FontIcon);

    var _this = _possibleConstructorReturn(this, _PureComponent.call(this));

    _initialiseProps.call(_this);

    _this.state = { styles: _this._mergeStyles(props) };
    return _this;
  }

  FontIcon.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _props = this.props,
        style = _props.style,
        forceSize = _props.forceSize,
        forceFontSize = _props.forceFontSize;

    if (style !== nextProps.style || forceSize !== nextProps.forceSize || forceFontSize !== nextProps.forceFontSize) {
      this.setState({ styles: this._mergeStyles(nextProps) });
    }
  };

  FontIcon.prototype.render = function render() {
    var styles = this.state.styles;

    var _props2 = this.props,
        iconClassName = _props2.iconClassName,
        className = _props2.className,
        children = _props2.children,
        disabled = _props2.disabled,
        primary = _props2.primary,
        secondary = _props2.secondary,
        error = _props2.error,
        inherit = _props2.inherit,
        style = _props2.style,
        forceSize = _props2.forceSize,
        forceFontSize = _props2.forceFontSize,
        props = _objectWithoutProperties(_props2, ['iconClassName', 'className', 'children', 'disabled', 'primary', 'secondary', 'error', 'inherit', 'style', 'forceSize', 'forceFontSize']);

    var classes = (0, _classnames2.default)('md-icon', iconClassName, (0, _themeColors2.default)({
      disabled: disabled,
      error: error,
      inherit: inherit,
      primary: primary,
      secondary: secondary
    }), className);

    return _react2.default.createElement(
      'i',
      _extends({}, props, { style: styles, className: classes }),
      children
    );
  };

  return FontIcon;
}(_react.PureComponent);

FontIcon.propTypes = {
  /**
   * An optional style to apply.
   */
  style: _propTypes2.default.object,

  /**
   * An optional className to apply to the `FontIcon`.
   */
  className: _propTypes2.default.string,

  /**
   * The icon font library className to use to display the icon.
   */
  iconClassName: _propTypes2.default.string.isRequired,

  /**
   * Boolean if the primary theme color should be applied.
   */
  primary: _propTypes2.default.bool,

  /**
   * Boolean if the secondary theme color should be applied.
   */
  secondary: _propTypes2.default.bool,

  /**
   * Boolean if the icon is considered disabled and should inherit the
   * disabled color.
   */
  disabled: _propTypes2.default.bool,

  /**
   * Boolean if the error color should be applied to the icon.
   */
  error: _propTypes2.default.bool,

  /**
   * Boolean if the color of the icon should be inherited by parent elements.
   */
  inherit: _propTypes2.default.bool,

  /**
   * Either a boolean that will enforce the 24x24 size of the font icon or a number of the size
   * to enforce. This is useful when using other font icon libraries that do not have a consistent
   * size.
   */
  forceSize: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.number]),

  /**
   * Boolean if the `forceSize` prop should also force the `font-size` instead of only `width` and `height`.
   */
  forceFontSize: function forceFontSize(props, propName, component) {
    for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      args[_key - 3] = arguments[_key];
    }

    var error = _propTypes2.default.bool.apply(_propTypes2.default, [props, propName, component].concat(args));
    if (!error && typeof props.forceSize === 'undefined' && props[propName]) {
      error = new Error('You provided a `forceFontSize` prop to the ' + component + ' component, without specifying the `forceSize` ' + ('prop. Either set the `forceSize` prop to a boolean or a number, or disable `' + propName + '`.'));
    }

    return error;
  },

  /**
   * Any children required to display the icon with the font library.
   */
  children: _propTypes2.default.node
};
FontIcon.defaultProps = {
  iconClassName: 'material-icons'
};

var _initialiseProps = function _initialiseProps() {
  this._mergeStyles = function (_ref) {
    var style = _ref.style,
        forceSize = _ref.forceSize,
        forceFontSize = _ref.forceFontSize;

    var styles = style;
    if (typeof forceSize === 'boolean') {
      styles = _extends({
        height: ICON_SIZE,
        width: ICON_SIZE,
        fontSize: forceFontSize ? ICON_SIZE : undefined
      }, style);
    } else if (typeof forceSize === 'number') {
      styles = _extends({
        height: forceSize,
        width: forceSize,
        fontSize: forceFontSize ? forceSize : undefined
      }, style);
    }

    return styles;
  };
};

exports.default = FontIcon;

/***/ }),

/***/ "./node_modules/react-md/lib/FontIcons/getDeprecatedIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-md/lib/FontIcons/getDeprecatedIcon.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = getDeprecatedIcon;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _FontIcon = __webpack_require__(/*! ../FontIcons/FontIcon */ "./node_modules/react-md/lib/FontIcons/FontIcon.js");

var _FontIcon2 = _interopRequireDefault(_FontIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getDeprecatedIcon(className, children, icon) {
  if (className || children) {
    return _react2.default.createElement(
      _FontIcon2.default,
      { iconClassName: className },
      children
    );
  }

  return icon;
}

/***/ }),

/***/ "./node_modules/react-md/lib/FontIcons/index.js":
/*!******************************************************!*\
  !*** ./node_modules/react-md/lib/FontIcons/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.FontIcon = undefined;

var _FontIcon2 = __webpack_require__(/*! ./FontIcon */ "./node_modules/react-md/lib/FontIcons/FontIcon.js");

var _FontIcon3 = _interopRequireDefault(_FontIcon2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _FontIcon3.default;
exports.FontIcon = _FontIcon3.default;

/***/ }),

/***/ "./node_modules/react-md/lib/Helpers/AccessibleFakeButton.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-md/lib/Helpers/AccessibleFakeButton.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _keyCodes = __webpack_require__(/*! ../constants/keyCodes */ "./node_modules/react-md/lib/constants/keyCodes.js");

var _handleKeyboardAccessibility = __webpack_require__(/*! ../utils/EventUtils/handleKeyboardAccessibility */ "./node_modules/react-md/lib/utils/EventUtils/handleKeyboardAccessibility.js");

var _handleKeyboardAccessibility2 = _interopRequireDefault(_handleKeyboardAccessibility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The `AccessibleFakeButton` is a generic component that can be used to render
 * a `div` or any other non `button` components as a button. This should not be
 * used often.
 *
 * The `AccessibleFakeButton` allows the user to tab focus the element, use the
 * space or enter key to trigger the `onClick` event, and toggles the `aria-pressed`
 * attribute.
 */
var AccessibleFakeButton = function (_PureComponent) {
  _inherits(AccessibleFakeButton, _PureComponent);

  function AccessibleFakeButton() {
    var _temp, _this, _ret;

    _classCallCheck(this, AccessibleFakeButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _PureComponent.call.apply(_PureComponent, [this].concat(args))), _this), _this.state = { pressed: false, tabFocused: false }, _this.focus = function () {
      if (_this._node) {
        _this._node.focus();
      }
    }, _this.blur = function () {
      if (_this._node) {
        _this._node.blur();
      }
    }, _this._setNode = function (node) {
      if (node) {
        _this._node = (0, _reactDom.findDOMNode)(node);
      }
    }, _this._handleClick = function (e) {
      if (_this.props.disabled) {
        return;
      }

      if (_this.props.onClick) {
        _this.props.onClick(e);
      }

      _this._node.focus();
      _this.setState({ pressed: !_this.state.pressed });
    }, _this._handleKeyDown = function (e) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onKeyDown = _this$props.onKeyDown,
          listenToEnter = _this$props.listenToEnter,
          listenToSpace = _this$props.listenToSpace;

      if (disabled) {
        return;
      }

      if (onKeyDown) {
        onKeyDown(e);
      }

      (0, _handleKeyboardAccessibility2.default)(e, _this._handleClick, listenToEnter, listenToSpace);
    }, _this._handleKeyUp = function (e) {
      var _this$props2 = _this.props,
          onKeyUp = _this$props2.onKeyUp,
          onTabFocus = _this$props2.onTabFocus;

      if (onKeyUp) {
        onKeyUp(e);
      }

      if ((e.which || e.keyCode) === _keyCodes.TAB) {
        if (onTabFocus) {
          onTabFocus(e);
        }

        _this.setState({ tabFocused: true });
      }
    }, _this._handleBlur = function (e) {
      if (_this.props.onBlur) {
        _this.props.onBlur(e);
      }

      if (_this.state.tabFocused) {
        _this.setState({ tabFocused: false });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  /**
   * Focuses the button.
   */


  /**
   * Blurs the button.
   */


  AccessibleFakeButton.prototype.render = function render() {
    var _cn;

    var _props = this.props,
        Component = _props.component,
        children = _props.children,
        className = _props.className,
        tabbedClassName = _props.tabbedClassName,
        disabled = _props.disabled,
        tabIndex = _props.tabIndex,
        ink = _props.ink,
        noFocusOutline = _props.noFocusOutline,
        onBlur = _props.onBlur,
        onClick = _props.onClick,
        onKeyUp = _props.onKeyUp,
        onKeyDown = _props.onKeyDown,
        onTabFocus = _props.onTabFocus,
        listenToEnter = _props.listenToEnter,
        listenToSpace = _props.listenToSpace,
        props = _objectWithoutProperties(_props, ['component', 'children', 'className', 'tabbedClassName', 'disabled', 'tabIndex', 'ink', 'noFocusOutline', 'onBlur', 'onClick', 'onKeyUp', 'onKeyDown', 'onTabFocus', 'listenToEnter', 'listenToSpace']);

    var childElements = children;
    if (ink) {
      childElements = _react.Children.toArray(children);
      childElements.unshift(ink);
    }

    return _react2.default.createElement(
      Component,
      _extends({}, props, {
        ref: this._setNode,
        className: (0, _classnames2.default)('md-fake-btn', (_cn = {
          'md-pointer--hover': !disabled,
          'md-fake-btn--no-outline': noFocusOutline
        }, _cn[tabbedClassName] = tabbedClassName && this.state.tabFocused, _cn), className),
        disabled: disabled,
        tabIndex: disabled ? null : tabIndex,
        onBlur: this._handleBlur,
        onClick: this._handleClick,
        onKeyUp: this._handleKeyUp,
        onKeyDown: this._handleKeyDown,
        'aria-pressed': this.state.pressed
      }),
      childElements
    );
  };

  return AccessibleFakeButton;
}(_react.PureComponent);

AccessibleFakeButton.propTypes = {
  /**
   * An optional style to apply.
   */
  style: _propTypes2.default.object,

  /**
   * An optional className to apply.
   */
  className: _propTypes2.default.string,

  /**
   * An optional function to call only when the button has been focused with the tab key.
   */
  tabbedClassName: _propTypes2.default.string,

  /**
   * Any children to display in the Accessible Fake Button.
   */
  children: _propTypes2.default.node,

  /**
   * An optional onClick function to call when the user clicks the
   * button or presses space || enter.
   */
  onClick: _propTypes2.default.func,

  /**
   * An optional onKeyDown function to call.
   */
  onKeyDown: _propTypes2.default.func,

  /**
   * An optional onBlur function to call.
   */
  onBlur: _propTypes2.default.func,

  /**
   * An optional onKeyUp function to call.
   */
  onKeyUp: _propTypes2.default.func,

  /**
   * An optional function to call when the element is focused with the tab key.
   */
  onTabFocus: _propTypes2.default.func,

  /**
   * The component to render the Fake button as.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string, _propTypes2.default.object]).isRequired,

  /**
   * Boolean if the default outline should be removed the when the fake button has been focused.
   *
   * @see {@link #tabbedClassName}
   */
  noFocusOutline: _propTypes2.default.bool,

  /**
   * The tab index to use for the Fake button so it is keyboard focusable.
   */
  tabIndex: _propTypes2.default.number,

  /**
   * Boolean if the Button is disabled. This will prevent tab focus.
   */
  disabled: _propTypes2.default.bool,

  /**
   * The role for the accessible fake button. It is recommended to keep it
   * the default of `button` unless you are rendering it as an `a` tag.
   */
  role: _propTypes2.default.string,

  /**
   * The ink when coming from the AccessibleFakeInkedButton
   * @access private
   */
  ink: _propTypes2.default.node,

  /**
   * Boolean if the spacebar should be used to trigger the click event. This _should_ be `true`
   * is almost all cases.
   */
  listenToSpace: _propTypes2.default.bool,

  /**
   * Boolean if the enter key should be used to trigger the click event. This _should_ be `true`
   * in most cases. By default, the param will be ignored if the `role` attribute is for a `checkbox`
   * or `radio`. When it is a checkbox or radio, it will attempt to submit the form on the enter
   * keypress instead like the native elements.
   */
  listenToEnter: _propTypes2.default.bool
};
AccessibleFakeButton.defaultProps = {
  component: 'div',
  tabIndex: 0,
  role: 'button',
  noFocusOutline: true,
  listenToEnter: true,
  listenToSpace: true
};
exports.default = AccessibleFakeButton;

/***/ }),

/***/ "./node_modules/react-md/lib/Helpers/AccessibleFakeInkedButton.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-md/lib/Helpers/AccessibleFakeInkedButton.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _AccessibleFakeButton = __webpack_require__(/*! ./AccessibleFakeButton */ "./node_modules/react-md/lib/Helpers/AccessibleFakeButton.js");

var _AccessibleFakeButton2 = _interopRequireDefault(_AccessibleFakeButton);

var _injectInk = __webpack_require__(/*! ../Inks/injectInk */ "./node_modules/react-md/lib/Inks/injectInk.js");

var _injectInk2 = _interopRequireDefault(_injectInk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _injectInk2.default)(_AccessibleFakeButton2.default);

/***/ }),

/***/ "./node_modules/react-md/lib/Helpers/Collapse.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-md/lib/Helpers/Collapse.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactMotion = __webpack_require__(/*! react-motion */ "./node_modules/react-motion/lib/react-motion.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The `Collapse` component is used to animate a single child entering
 * or leaving. This uses the `react-motion` library to animate the height,
 * padding-top, and padding-bottom of an element when the `collapsed` prop
 * changes.
 */
var Collapse = function (_PureComponent) {
  _inherits(Collapse, _PureComponent);

  function Collapse(props) {
    _classCallCheck(this, Collapse);

    var _this = _possibleConstructorReturn(this, _PureComponent.call(this, props));

    _this._setHeight = function (child) {
      if (_this._child && typeof _this._child.ref === 'function') {
        _this._child.ref(child);
      }

      var height = 0;
      var paddingTop = 0;
      var paddingBottom = 0;
      if (child !== null) {
        var node = (0, _reactDom.findDOMNode)(child);
        var cs = window.getComputedStyle(node);
        height = node.offsetHeight;
        paddingTop = parseInt(cs.getPropertyValue('padding-top'), 10);
        paddingBottom = parseInt(cs.getPropertyValue('padding-bottom'), 10);
      }

      height = Math.max(_this.props.minHeight, height);

      _this.setState({ height: height, paddingTop: paddingTop, paddingBottom: paddingBottom });
    };

    if (!props.collapsed) {
      _this.state = { initialOpen: true };
    } else {
      _this.state = {
        height: props.minHeight,
        paddingTop: 0,
        paddingBottom: 0
      };
    }
    return _this;
  }

  Collapse.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.state.initialOpen && nextProps.collapsed) {
      this.setState({ initialOpen: false });
    }
  };

  Collapse.prototype._spring = function _spring(collapsed, initialOpen, value, config) {
    var min = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

    var nextValue = !collapsed ? Math.max(min, value) : min;
    if (initialOpen && !collapsed) {
      return nextValue;
    }

    return (0, _reactMotion.spring)(nextValue, config);
  };

  Collapse.prototype.render = function render() {
    var _this2 = this;

    var _state = this.state,
        height = _state.height,
        paddingTop = _state.paddingTop,
        paddingBottom = _state.paddingBottom,
        initialOpen = _state.initialOpen;
    var _props = this.props,
        children = _props.children,
        collapsed = _props.collapsed,
        defaultStyle = _props.defaultStyle,
        motionStyle = _props.style,
        springConfig = _props.springConfig,
        animate = _props.animate,
        minHeight = _props.minHeight;


    if (!animate) {
      return collapsed ? null : children;
    }

    return _react2.default.createElement(
      _reactMotion.Motion,
      {
        style: _extends({}, motionStyle, {
          height: this._spring(collapsed, initialOpen, height, springConfig, minHeight),
          paddingTop: this._spring(collapsed, initialOpen, paddingTop, springConfig),
          paddingBottom: this._spring(collapsed, initialOpen, paddingBottom, springConfig)
        }),
        defaultStyle: _extends({}, defaultStyle, {
          height: height,
          paddingTop: paddingTop,
          paddingBottom: paddingBottom
        })
      },
      function (style) {
        if (collapsed && !style.height) {
          return null;
        }

        var child = _react.Children.only(children);
        _this2._child = child;
        var nextStyle = child.props.style;
        if (collapsed && (!minHeight || style.height !== minHeight) || style.height !== height) {
          nextStyle = _extends({}, child.props.style, style, {
            overflow: 'hidden'
          });
        }
        return (0, _react.cloneElement)(child, {
          ref: !collapsed ? _this2._setHeight : null,
          style: nextStyle
        });
      }
    );
  };

  return Collapse;
}(_react.PureComponent);

Collapse.propTypes = {
  /**
   * An optional style to merge with the `Motion` style.
   */
  style: _propTypes2.default.object,

  /**
   * An optional default style to merge with the `Motion` default style.
   */
  defaultStyle: _propTypes2.default.object,

  /**
   * Boolean if the children are currently collapsed.
   */
  collapsed: _propTypes2.default.bool.isRequired,

  /**
   * A single child to collapse or expand.
   */
  children: _propTypes2.default.element.isRequired,

  /**
   * The spring config to use for the animation.
   */
  springConfig: _propTypes2.default.object.isRequired,

  /**
   * Boolean if the single child entering or leaving should be animated.
   */
  animate: _propTypes2.default.bool,

  /**
   * The min height to apply for the collapse div.
   */
  minHeight: _propTypes2.default.number.isRequired
};
Collapse.defaultProps = {
  animate: true,
  springConfig: {
    precision: 0.5
  },
  minHeight: 0
};
exports.default = Collapse;

/***/ }),

/***/ "./node_modules/react-md/lib/Helpers/HorizontalAnchors.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-md/lib/Helpers/HorizontalAnchors.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/** @module Helpers/HorizontalAnchors */

/**
 * An enum for all the different types of horizontal anchors on a layover.
 *
 * @readonly
 * @enum {string}
 */
var HorizontalAnchors = {
  /**
   * Positions the layover to the outside left on the toggle component
   * so that it does not overlap.
   */
  LEFT: 'left',

  /**
   * Positions the layover to the inner left of the toggle component so
   * that it will overlap.
   */
  INNER_LEFT: 'inner left',

  /**
   * Positions the layover so that it overlaps the toggle component
   * by positioning itself in the cetner of the toggle component's width.
   */
  CENTER: 'center',

  /**
   * Positions the layover to the outside right on the toggle component
   * so that it does not overlap.
   */
  RIGHT: 'right',

  /**
   * Positions the layover to the outside right on the toggle component
   * so that it will overlap.
   */
  INNER_RIGHT: 'inner right'
};

exports.default = HorizontalAnchors;

/***/ }),

/***/ "./node_modules/react-md/lib/Helpers/IconSeparator.js":
/*!************************************************************!*\
  !*** ./node_modules/react-md/lib/Helpers/IconSeparator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The `IconSeparator` component is a simple helper component to render some text and
 * an icon with some space between them while centering the text. The icon can either
 * come before or after the text.
 */
var IconSeparator = function (_PureComponent) {
  _inherits(IconSeparator, _PureComponent);

  function IconSeparator() {
    _classCallCheck(this, IconSeparator);

    return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
  }

  IconSeparator.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        labelStyle = _props.labelStyle,
        labelClassName = _props.labelClassName,
        component = _props.component,
        label = _props.label,
        iconBefore = _props.iconBefore,
        children = _props.children,
        props = _objectWithoutProperties(_props, ['className', 'labelStyle', 'labelClassName', 'component', 'label', 'iconBefore', 'children']);

    var text = void 0;
    if ((0, _react.isValidElement)(label)) {
      var labelProps = _react.Children.only(label).props;
      text = (0, _react.cloneElement)(label, {
        className: (0, _classnames2.default)('md-icon-text', labelClassName, labelProps.className),
        style: _extends({}, labelStyle, labelProps.style)
      });
    } else {
      text = _react2.default.createElement(
        'span',
        { style: labelStyle, className: (0, _classnames2.default)('md-icon-text', labelClassName) },
        label
      );
    }

    var Component = component;

    return _react2.default.createElement(
      Component,
      _extends({}, props, { className: (0, _classnames2.default)('md-icon-separator', className) }),
      iconBefore && children,
      text,
      !iconBefore && children
    );
  };

  return IconSeparator;
}(_react.PureComponent);

IconSeparator.propTypes = {
  /**
   * An optional style to apply.
   */
  style: _propTypes2.default.object,

  /**
   * An optional className to apply.
   */
  className: _propTypes2.default.string,

  /**
   * An optional style to apply to the label.
   */
  labelStyle: _propTypes2.default.object,

  /**
   * An optional className to apply to the label.
   */
  labelClassName: _propTypes2.default.string,

  /**
   * The label to display.
   */
  label: _propTypes2.default.node.isRequired,

  /**
   * The icon to display.
   */
  children: _propTypes2.default.node.isRequired,

  /**
   * Boolean if the icon should appear before or after the text
   */
  iconBefore: _propTypes2.default.bool,

  /**
   * The component to be rendered as.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func, _propTypes2.default.object]).isRequired
};
IconSeparator.defaultProps = {
  component: 'div'
};
exports.default = IconSeparator;

/***/ }),

/***/ "./node_modules/react-md/lib/Helpers/Layover.js":
/*!******************************************************!*\
  !*** ./node_modules/react-md/lib/Helpers/Layover.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CSSTransitionGroup = __webpack_require__(/*! react-transition-group/CSSTransitionGroup */ "./node_modules/react-transition-group/CSSTransitionGroup.js");

var _CSSTransitionGroup2 = _interopRequireDefault(_CSSTransitionGroup);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _handleWindowClickListeners = __webpack_require__(/*! ../utils/EventUtils/handleWindowClickListeners */ "./node_modules/react-md/lib/utils/EventUtils/handleWindowClickListeners.js");

var _handleWindowClickListeners2 = _interopRequireDefault(_handleWindowClickListeners);

var _getSelectedTextPosition = __webpack_require__(/*! ../utils/Positioning/getSelectedTextPosition */ "./node_modules/react-md/lib/utils/Positioning/getSelectedTextPosition.js");

var _getSelectedTextPosition2 = _interopRequireDefault(_getSelectedTextPosition);

var _getScroll = __webpack_require__(/*! ../utils/Positioning/getScroll */ "./node_modules/react-md/lib/utils/Positioning/getScroll.js");

var _getScroll2 = _interopRequireDefault(_getScroll);

var _viewport = __webpack_require__(/*! ../utils/Positioning/viewport */ "./node_modules/react-md/lib/utils/Positioning/viewport.js");

var _viewport2 = _interopRequireDefault(_viewport);

var _isOutOfBounds = __webpack_require__(/*! ../utils/Positioning/isOutOfBounds */ "./node_modules/react-md/lib/utils/Positioning/isOutOfBounds.js");

var _isOutOfBounds2 = _interopRequireDefault(_isOutOfBounds);

var _anchorShape = __webpack_require__(/*! ./anchorShape */ "./node_modules/react-md/lib/Helpers/anchorShape.js");

var _anchorShape2 = _interopRequireDefault(_anchorShape);

var _fixedToShape = __webpack_require__(/*! ./fixedToShape */ "./node_modules/react-md/lib/Helpers/fixedToShape.js");

var _fixedToShape2 = _interopRequireDefault(_fixedToShape);

var _positionShape = __webpack_require__(/*! ./positionShape */ "./node_modules/react-md/lib/Helpers/positionShape.js");

var _positionShape2 = _interopRequireDefault(_positionShape);

var _HorizontalAnchors = __webpack_require__(/*! ./HorizontalAnchors */ "./node_modules/react-md/lib/Helpers/HorizontalAnchors.js");

var _HorizontalAnchors2 = _interopRequireDefault(_HorizontalAnchors);

var _VerticalAnchors = __webpack_require__(/*! ./VerticalAnchors */ "./node_modules/react-md/lib/Helpers/VerticalAnchors.js");

var _VerticalAnchors2 = _interopRequireDefault(_VerticalAnchors);

var _Positions = __webpack_require__(/*! ./Positions */ "./node_modules/react-md/lib/Helpers/Positions.js");

var _Positions2 = _interopRequireDefault(_Positions);

var _ResizeObserver = __webpack_require__(/*! ./ResizeObserver */ "./node_modules/react-md/lib/Helpers/ResizeObserver.js");

var _ResizeObserver2 = _interopRequireDefault(_ResizeObserver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The Layover component is used to keep a component fixed to another component
 * while the page is scrolling or a container is scrolling. When the fixed component
 * is considered out of view, it will be closed.
 *
 * > NOTE: Don't look at source code. Plz.
 */
var Layover = function (_PureComponent) {
  _inherits(Layover, _PureComponent);

  function Layover(props) {
    _classCallCheck(this, Layover);

    var _this = _possibleConstructorReturn(this, _PureComponent.call(this));

    _initialiseProps.call(_this);

    var child = _react2.default.Children.only(props.children);
    _this.state = {
      below: false,
      right: false,
      styles: child.props.style
    };

    _this._lastXFix = null;
    _this._lastYFix = null;
    _this._initialX = null;
    _this._initialY = null;
    _this._initialTop = null;
    _this._initialLeft = null;
    _this._child = null;
    _this._toggle = null;
    return _this;
  }

  Layover.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    if (true) {
      window.addEventListener('load', function () {
        _this2._setContainer(_this2._container);
      });
    }

    var _props = this.props,
        visible = _props.visible,
        fixedTo = _props.fixedTo,
        sameWidth = _props.sameWidth,
        centered = _props.centered,
        simplified = _props.simplified;

    var anchor = this._getAnchor(this.props);
    if (visible) {
      (0, _handleWindowClickListeners2.default)(this._handleOutsideClick, true);

      // Don't worry about any of the other logic for a "simple" layover
      if (simplified) {
        return;
      }

      var rect = this._contextRect || this._toggle.getBoundingClientRect();
      if (this._dialog) {
        this._manageFixedToListener(this._dialog, true);
      } else if (!this._inFixed) {
        this._manageFixedToListener(fixedTo, true);
      }

      this._init(fixedTo, anchor, sameWidth, centered, rect);
    }
  };

  Layover.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var fixedTo = nextProps.fixedTo,
        visible = nextProps.visible,
        children = nextProps.children,
        sameWidth = nextProps.sameWidth,
        centered = nextProps.centered,
        simplified = nextProps.simplified;

    if (simplified) {
      if (this.props.simplified !== simplified) {
        this._reset();
      }
      return;
    }

    var anchor = this._getAnchor(nextProps);
    var visibileDiff = visible !== this.props.visible;
    var childStyle = _react2.default.Children.only(children).props.style;

    if (visibileDiff) {
      if (!visible) {
        this._reset();
      } else {
        // Initialize the layover logic
        var rect = this._contextRect || this._toggle.getBoundingClientRect();
        if (this._dialog) {
          this._manageFixedToListener(this._dialog, true);
        } else if (!this._inFixed) {
          this._manageFixedToListener(fixedTo, true);
        }

        this._init(fixedTo, anchor, sameWidth, centered, rect);
      }
    } else if (fixedTo !== this.props.fixedTo && visible) {
      // swap the fixedTo listeners
      this._manageFixedToListener(this.props.fixedTo, false);
      this._manageFixedToListener(fixedTo, true);
    } else if (childStyle !== _react2.default.Children.only(this.props.children).props.style) {
      // Re-merge styles... This is only required if all the others fail since all the other
      // logic always merges styles with the children styles
      this.setState({ styles: _extends({}, this.state.styles, childStyle) });
    }
  };

  Layover.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this3 = this;

    var _props2 = this.props,
        visible = _props2.visible,
        closeOnOutsideClick = _props2.closeOnOutsideClick;

    var enabled = visible && closeOnOutsideClick;
    var prevEnabled = prevProps.visible && prevProps.closeOnOutsideClick;
    if (enabled !== prevEnabled) {
      if (this._clickTimeout) {
        clearTimeout(this._clickTimeout);
        this._clickTimeout = null;
      }

      // This is really an arbitrary timeout time, but firefox needs to have a timeout
      // so the context menu doesn't close automatically due to an "outside click" being
      // triggered
      this._clickTimeout = setTimeout(function () {
        _this3._clickTimeout = null;
        (0, _handleWindowClickListeners2.default)(_this3._handleOutsideClick, enabled);
      }, enabled ? 300 : 0);
    }
  };

  Layover.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this._clickTimeout) {
      clearTimeout(this._clickTimeout);
      this._clickTimeout = null;
    }
    (0, _handleWindowClickListeners2.default)(this._handleOutsideClick, false);

    if (!this.props.simplified) {
      this._manageFixedToListener(this.props.fixedTo, false);
      this._manageWindowResizeListener(false);
    }
  };

  Layover.prototype._getAnchor = function _getAnchor(_ref) {
    var anchor = _ref.anchor,
        belowAnchor = _ref.belowAnchor,
        animationPosition = _ref.animationPosition;

    return animationPosition === Layover.Positions.BELOW && belowAnchor || anchor;
  };

  /**
   * Whew. Ok. So since the fixedTo prop can either be two elements or a single item,
   * this utility function is used to add/remove the scrolling event listeners for
   * this prop.
   *
   * When the fixedTo prop has a horizontal and/or vertical attribute, the `window`
   * will be the fallback option. If both the horizontal and vertical attributes are
   * defined, the `window` still needs to have a scroll listener to make sure it
   * doesn't go off screen.
   */


  /**
   * This is just a simple utility function to merge the existing state styles,
   * any new styles, and the children's styles (with most precedence).
   */


  /**
   * This initializes the popover with the default styles, and the initial bookkeeping
   * variables to update while it is open.
   */


  /**
   * Attempts to fix the child by setting it's location ONLY for the entire
   * page viewport. I didn't bother attempting to fix it for additional fixedTo
   * stuff.
   */


  /**
   * When the child is initially mounted, it will update the styles for centering
   * the element (if enabled) and then attempt to fix any viewport issues.
   */


  /**
   * This is the meat of the stuff. Do lots of viewport / container checks to make sure
   * the element should still be visible. If it is still visible, it will update its
   * x and y position for the new scroll position.
   */


  /**
   * Attempts to fix a viewport problem by swapping the positioning. This only does
   * vertical switching right now.
   *
   * @param {Object} vp - The result of the viewport function
   * @return {boolean} true if the fix was able to be done and successful.
   */


  Layover.prototype.render = function render() {
    var _props3 = this.props,
        className = _props3.className,
        block = _props3.block,
        toggle = _props3.toggle,
        visible = _props3.visible,
        children = _props3.children,
        fullWidth = _props3.fullWidth,
        animationPosition = _props3.animationPosition,
        simplified = _props3.simplified,
        fillViewportWidth = _props3.fillViewportWidth,
        fillViewportHeight = _props3.fillViewportHeight,
        anchor = _props3.anchor,
        belowAnchor = _props3.belowAnchor,
        onClose = _props3.onClose,
        repositionOnScroll = _props3.repositionOnScroll,
        repositionOnResize = _props3.repositionOnResize,
        sameWidth = _props3.sameWidth,
        centered = _props3.centered,
        fixedTo = _props3.fixedTo,
        toggleQuery = _props3.toggleQuery,
        yThreshold = _props3.yThreshold,
        xThreshold = _props3.xThreshold,
        onContextMenu = _props3.onContextMenu,
        preventContextMenu = _props3.preventContextMenu,
        closeOnOutsideClick = _props3.closeOnOutsideClick,
        minLeft = _props3.minLeft,
        minRight = _props3.minRight,
        minBottom = _props3.minBottom,
        props = _objectWithoutProperties(_props3, ['className', 'block', 'toggle', 'visible', 'children', 'fullWidth', 'animationPosition', 'simplified', 'fillViewportWidth', 'fillViewportHeight', 'anchor', 'belowAnchor', 'onClose', 'repositionOnScroll', 'repositionOnResize', 'sameWidth', 'centered', 'fixedTo', 'toggleQuery', 'yThreshold', 'xThreshold', 'onContextMenu', 'preventContextMenu', 'closeOnOutsideClick', 'minLeft', 'minRight', 'minBottom']);

    var child = void 0;
    var childId = void 0;
    if (visible) {
      child = _react2.default.Children.only(children);
      if (child.props.id) {
        childId = child.props.id;
      } else if (props.id) {
        childId = props.id + '-layover';
      }

      child = _react2.default.cloneElement(children, {
        ref: this._fixateChild,
        id: childId,
        style: simplified ? child.props.style : this.state.styles,
        className: (0, _classnames2.default)('md-layover-child md-layover-child--' + animationPosition, {
          'md-layover-child--simplified': simplified
        }, child.props.className)
      });
    }

    var observer = null;
    if (!simplified && !fillViewportWidth && !fillViewportHeight) {
      observer = _react2.default.createElement(_ResizeObserver2.default, {
        watchWidth: !fillViewportWidth,
        watchHeight: !fillViewportHeight,
        target: this._child,
        onResize: this._handleResize
      });
    }

    return _react2.default.createElement(
      _CSSTransitionGroup2.default,
      _extends({}, props, {
        className: (0, _classnames2.default)('md-layover', {
          'md-layover--simplified': simplified,
          'md-inline-block': !block && !fullWidth,
          'md-full-width': fullWidth
        }, className),
        ref: this._setContainer,
        'aria-haspopup': true,
        'aria-owns': childId,
        'aria-expanded': visible,
        transitionEnter: props.transitionEnterTimeout !== 0,
        transitionLeave: props.transitionLeaveTimeout !== 0,
        onContextMenu: this._handleContextMenu
      }),
      observer,
      toggle,
      child
    );
  };

  return Layover;
}(_react.PureComponent);

Layover.HorizontalAnchors = _HorizontalAnchors2.default;
Layover.VerticalAnchors = _VerticalAnchors2.default;
Layover.Positions = _Positions2.default;
Layover.propTypes = {
  /**
   * A id to give the layover itself. This is generally recommended for accessibility. If the
   * child does not have an id, the child will automatically be updated to be `${id}-layover`.
   */
  id: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  /**
   * An optional style to apply to the layover.
   */
  style: _propTypes2.default.object,

  /**
   * An optional className to apply to the layover.
   */
  className: _propTypes2.default.string,

  /**
   * Boolean if the layover's child is currently visible.
   */
  visible: _propTypes2.default.bool.isRequired,

  /**
   * This should either be a single element or two elements that the layover recalculates
   * its fixed position when scrolling for horizontal and vertical.
   *
   * When it is a single element, it will recalculate for both horizontal and vertical
   * scrolling. Otherwise, you can specify the element for horizontal scrolling and a
   * separate element for vertical scrolling. If one is omitted, it will default to `window`.
   *
   * If the component is no longer considered to be in view after scrolling, the `onClose`
   * prop will be called.
   */
  fixedTo: _fixedToShape2.default.isRequired,

  /**
   * The renderable item that causes the Layover to become visible. This _should_
   * most likely be an `element` or `arrayOf(element)`, but anything is allowed.
   */
  toggle: _propTypes2.default.node,

  /**
   * Since the `toggle` prop can be anything, I need a way to be able to find an
   * element to base all the calculations on. This can either be a string that
   * gets passed to `layover.querySelector`, a DOM Element, or a function that
   * returns a DOM Element.
   */
  toggleQuery: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object, _propTypes2.default.string]).isRequired,

  /**
   * A single child that should be fixed to the toggle element.
   */
  children: _propTypes2.default.element.isRequired,

  /**
   * Boolean if the Layover should be displayed as a block instead of as an inline block.
   */
  block: _propTypes2.default.bool,

  /**
   * Boolean if the `children` should be centered horizontally and vertically while keeping
   * its height in mind as well. This is *only* valid if both the x and y `anchor` targets
   * are `CENTER`.
   */
  centered: _propTypes2.default.bool,

  /**
   * Boolean if the layover should gain the `md-full-width` class name.
   */
  fullWidth: _propTypes2.default.bool,

  /**
   * Boolean if the width of the children should be updated automatically to be the width
   * of the toggle element.
   */
  sameWidth: _propTypes2.default.bool,

  /**
   * The minimum value the `left` style can be for the child component. This is really just used
   * to make sure it doesn't scroll off the left of the page. It can also be used to make
   * full screen layovers on devices when when the `fillViewportWidth` prop is enabled.
   *
   * This can either be a number of pixels or a string for percentages. If this value is a string
   * **it will always be used over the calculated values** so it is preferred to use a number.
   *
   * @see {@link #minRight}
   * @see {@link #fillViewportWidth}
   */
  minLeft: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]).isRequired,

  /**
   * The minimum value the `right` style can be for the child component. This is really just used
   * to make sure it doesn't scroll off the right of the page when the `fillViewportWidth` prop is
   * enabled.
   *
   * This can either be a number of pixels or a string for percentages. If this value is a string
   * **it will always be used over the calculated values** so it is preferred to use a number.
   *
   * @see {@link #minLeft}
   * @see {@link #fillViewportWidth}
   */
  minRight: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]).isRequired,

  /**
   * The minimum value that can be used for the `bottom` prop when the `fillViewportHeight` prop is enabled.
   * It is generally recommended to keep this value at `0` to keep it stretched to the bottom of the viewport
   * or setting it to a small positive number to add some padding.
   *
   * This can either be a number of pixels or a string for percentages. If this value is a string
   * **it will always be used over the calculated values** so it is preferred to use a number.
   *
   * @see {@link #fillViewportHeight}
   */
  minBottom: _propTypes2.default.number.isRequired,

  /**
   * Boolean if the layover should make the child fill the entire viewport's width. This will just
   * style the child element with:
   *
   * ```js
   * childStyle = {
   *   left: this.props.minLeft,
   *   right: this.props.minRight,
   * };
   * ```
   *
   * If you add any additional constraints such as `width` or `max-width`, it will not span the entire viewport's
   * width. This prop should generally really only be used on mobile devices. Using this prop along with
   * `fillViewportHeight` for Autocompletes can create great Android mobile searches. See the `fillViewportHeight`
   * for more information about why it is *only Android*.
   *
   * @see {@link #minLeft}
   * @see {@link #minRight}
   * @see {@link #fillViewportHeight}
   */
  fillViewportWidth: _propTypes2.default.bool,

  /**
   * Boolean if the layover should fill the height of the viewport from the current calculated `top`. This will just
   * style the child element with:
   *
   * ```js
   * childStyle = {
   *   top: currentCalculatedTop,
   *   bottom: this.props.minBottom,
   *   maxHeight: 'none',
   * };
   * ```
   *
   * This is *super* nice on Android devices since it will allow you to create nice toolbar search autocompletes
   * in your app and the list of items will grow until it reaches the soft keyboard. It isn't as nice on iOS since
   * iOS does not subtract the soft keyboard from the viewport's size so the list will still extend to the bottom
   * of the page.
   *
   * @see {@link #minBottom}
   * @see {@link #fillViewportWidth}
   */
  fillViewportHeight: _propTypes2.default.bool,

  /**
   * A function used to hide the visibility of the children when the children are no longer
   * visible or an element outside of the layover is clicked.
   */
  onClose: _propTypes2.default.func.isRequired,

  /**
   * The component to render the Layover as.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func, _propTypes2.default.object]).isRequired,

  /**
   * The transition name to use for the children appearing/disappearing.
   */
  transitionName: _propTypes2.default.string.isRequired,

  /**
   * The transition duration for the enter animation. The animation can be disabled by setting
   * this value to 0.
   */
  transitionEnterTimeout: _propTypes2.default.number.isRequired,

  /**
   * The transition duration for the leave animation. The animation can be disabled by setting
   * this value to 0.
   */
  transitionLeaveTimeout: _propTypes2.default.number.isRequired,

  /**
   * This is a threshold that is used to calculate if the `children` is still in
   * view by applying this multiplier to the `children`'s width.
   */
  xThreshold: _propTypes2.default.number.isRequired,

  /**
   * This is a threshold that is used to calculate if the `children` is still in
   * view by applying this multiplier to the `toggle`'s height.
   */
  yThreshold: _propTypes2.default.number.isRequired,

  /**
   * Boolean if the `children` should be hidden when an element outside
   * of the `Layout` component has been clicked.
   */
  closeOnOutsideClick: _propTypes2.default.bool.isRequired,

  /**
   * This is how the children get "anchored" to the `toggle` element and how the
   * auto-fix attempts will be made. Right now, the auto fixes will only be handled
   * on viewport boundaries instead of `fixedTo` boundaries. It was too hard for
   * first attempt.
   *
   * The general behavior will be that an equal-opposite of an anchor will be chosen
   * when that direction is out of viewport. So for example, the children are out
   * of viewport for the right of the screen, and the `anchor.x` value is
   * `Layover.HorizontalPositions.RIGHT`, the children will be swapped to be the `LEFT`
   * of the `toggle` component now.
   *
   * So a full list:
   * - `LEFT` / `RIGHT`
   * - `INNER_LEFT` / `INNER_RIGHT`
   * - `TOP` / `BOTTOM`
   *
   * The `CENTER` and `OVERLAP` positions can not be automatically adjusted.
   *
   * > To be safe, you should use the enum values for the `x` and `y` values.
   * @see {@link #VerticalAnchors}
   * @see {@link #HorizontalAnchors}
   */
  anchor: _anchorShape2.default.isRequired,

  /**
   * This is how the children get "anchored" when the `animationPositions` is set to `Layover.Positions.BELOW`.
   * Set this to `null` to continue using the base `anchor` prop instead of switching to this anchor.
   *
   * @see {@link #anchor}
   */
  belowAnchor: _anchorShape2.default,

  /**
   * This is the position that the children should animate from. It directly ties into
   * the `$md-layover-child-positions` Sass variable.
   */
  animationPosition: _positionShape2.default.isRequired,

  /**
   * If you would like the layover to interact as a context menu, provide this prop. It will
   * make the children appear relative to the context menu origin automatically.
   *
   * @see {@link #preventContextMenu}
   */
  onContextMenu: _propTypes2.default.func,

  /**
   * Boolean if the default behavior of the context menu should be prevented when using the
   * `onContextMenu` prop.
   *
   * @see {@link #onContextMenu}
   */
  preventContextMenu: _propTypes2.default.bool,

  /**
   * Boolean if the layover should attempt to automatically adjust the position of the element to
   * keep it within the viewport. If this value is set to `false`, the `onClose` prop will be called
   * instead.
   */
  repositionOnScroll: _propTypes2.default.bool,

  /**
   * Boolean if the layover should attempt to automatically adjust the position of the element to
   * keep it within the viewport. If this value is set to `false`, the `onClose` prop will be called
   * instead.
   */
  repositionOnResize: _propTypes2.default.bool,

  /**
   * Boolean if the layover should become "simplified". This basically disables all the logic for
   * keeping the child within the viewport and allows you to manage all the positioning via CSS.
   *
   * When this is enabled, it updates the `Layover` to have `position: relative` while the child will
   * have `position: absolute` which will allow for simple `top`, `right`, `bottom`, and/or `left` CSS
   * to position as wanted.
   *
   * This is really only helpful in cases where the layover can't calculate things correctly due to
   * being in fixed containers somewhere in the page or some other weird stuff. Hopefully this won't
   * really need to be used much.
   */
  simplified: _propTypes2.default.bool
};
Layover.defaultProps = {
  anchor: {
    x: Layover.HorizontalAnchors.INNER_LEFT,
    y: Layover.VerticalAnchors.OVERLAP
  },
  belowAnchor: {
    x: Layover.HorizontalAnchors.CENTER,
    y: Layover.VerticalAnchors.BOTTOM
  },
  animationPosition: Layover.Positions.BELOW,
  repositionOnScroll: true,
  repositionOnResize: false,
  component: 'div',
  fixedTo: typeof window !== 'undefined' ? window : {},
  toggleQuery: '.md-text-field-container,button,*[role="button"],*[role="listbox"]',
  transitionName: 'md-layover',
  transitionEnterTimeout: 200,
  transitionLeaveTimeout: 200,
  yThreshold: 0.38,
  xThreshold: 0.38,
  closeOnOutsideClick: true,
  preventContextMenu: true,
  simplified: false,
  minLeft: 0,
  minRight: 0,
  minBottom: 0,
  fillViewportWidth: false,
  fillViewportHeight: false
};

var _initialiseProps = function _initialiseProps() {
  var _this4 = this;

  this._isCenteredDialog = function () {
    return _this4._dialog && _this4._dialog.classList.contains('md-dialog--centered');
  };

  this._createStyles = function (anchor, centered, child, rect) {
    var x = anchor.x,
        y = anchor.y;
    var offsetWidth = child.offsetWidth,
        offsetHeight = child.offsetHeight;


    var left = void 0;
    var top = void 0;
    if (x === _HorizontalAnchors2.default.CENTER) {
      left = rect.left + rect.width / 2 - offsetWidth / 2;
    } else if (x === _HorizontalAnchors2.default.INNER_RIGHT) {
      left = rect.right - offsetWidth;
    } else if (x === _HorizontalAnchors2.default.LEFT) {
      left = rect.left - offsetWidth;
    } else if (x === _HorizontalAnchors2.default.RIGHT) {
      left = rect.right;
    }

    if (centered && x === _HorizontalAnchors2.default.CENTER && y === _VerticalAnchors2.default.CENTER) {
      top = rect.top - offsetHeight / 2 + rect.height / 2;
    } else if (y === _VerticalAnchors2.default.TOP) {
      top = rect.top - offsetHeight;
    } else if (y === _VerticalAnchors2.default.CENTER) {
      top = rect.top + rect.height / 2;
    } else if (y === _VerticalAnchors2.default.BOTTOM) {
      top = rect.bottom;
    }

    if (_this4._isCenteredDialog()) {
      var dialogRect = _this4._dialog.getBoundingClientRect();
      left -= dialogRect.left;
      top -= dialogRect.top;
    }

    var style = {};
    if (top) {
      style.top = top;
    }

    if (left) {
      style.left = left;
    }

    return style;
  };

  this._manageFixedToListener = function (fixedTo, add) {
    var listener = (add ? 'add' : 'remove') + 'EventListener';
    if (fixedTo !== window && (fixedTo.x || fixedTo.y)) {
      var x = fixedTo.x,
          y = fixedTo.y;

      if (x) {
        x[listener]('scroll', _this4._handleScroll);
      } else {
        window[listener]('scroll', _this4._handleScroll);
      }

      if (y) {
        y[listener]('scroll', _this4._handleScroll);
      } else if (!x) {
        // Only add the window event listener once
        window[listener]('scroll', _this4._handleScroll);
      }

      if (y && y !== window && x && x !== window) {
        window[listener]('scroll', _this4._handleScroll);
      }
    } else {
      fixedTo[listener]('scroll', _this4._handleScroll);

      if (fixedTo !== window) {
        window[listener]('scroll', _this4._handleScroll);
      }
    }
  };

  this._manageWindowResizeListener = function (enabled) {
    if (_this4._windowResizeTimeout) {
      clearTimeout(_this4._windowResizeTimeout);
      _this4._windowResizeTimeout = null;
    }

    if (enabled) {
      // add a 2 second delay before watching resize events since Android soft keyboards trigger a resize event.
      _this4._windowResizeTimeout = setTimeout(function () {
        _this4._windowResizeTimeout = null;
        window.addEventListener('resize', _this4._handleWindowResize);
      }, 2000);
    } else {
      window.removeEventListener('resize', _this4._handleWindowResize);
    }
  };

  this._mergeStyles = function (style) {
    var _props4 = _this4.props,
        minLeft = _props4.minLeft,
        minRight = _props4.minRight,
        minBottom = _props4.minBottom,
        fillViewportWidth = _props4.fillViewportWidth,
        fillViewportHeight = _props4.fillViewportHeight;

    if (fillViewportWidth) {
      style.left = minLeft;
      style.right = minRight;
    } else {
      if (style.left) {
        style.left = Math.max(minLeft, style.left);
      }

      if (style.right) {
        style.right = Math.max(minRight, style.right);
      }
    }

    if (fillViewportHeight) {
      style.bottom = minBottom;
      style.maxHeight = 'none';
    } else {
      // These styles are only created when filling the viewport height, so clear
      // them out again
      style.bottom = null;
      style.maxHeight = null;
    }

    return _extends({}, _this4.state.styles, style, _react2.default.Children.only(_this4.props.children).props.style);
  };

  this._init = function (fixedTo, anchor, sameWidth, centered, rect) {
    if (_this4._child) {
      // The init function can be called again if the user quickly toggles the layover. If that
      // is the case, we want the styles that were set after the _positionChild _attemptFix.
      return;
    }

    var height = rect.height,
        width = rect.width;
    var top = rect.top,
        left = rect.left,
        right = rect.right;

    var x = void 0;
    var y = void 0;
    if (_this4._dialog) {
      var scroll = (0, _getScroll2.default)(_this4._dialog);
      x = scroll.x;
      y = scroll.y;

      if (_this4._isCenteredDialog()) {
        var dialogRect = _this4._dialog.getBoundingClientRect();
        left -= dialogRect.left;
        top -= dialogRect.top;
        right -= dialogRect.right;
      }
    } else if (fixedTo !== window && (fixedTo.y || fixedTo.x)) {
      x = (0, _getScroll2.default)(fixedTo.x || window).x;
      y = (0, _getScroll2.default)(fixedTo.y || window).y;
    } else {
      var _scroll = (0, _getScroll2.default)(fixedTo);
      x = _scroll.x;
      y = _scroll.y;
    }

    _this4._initialX = x;
    _this4._initialY = y;
    _this4._initialLeft = left;
    _this4._initialTop = top;

    if (anchor.x === _HorizontalAnchors2.default.INNER_RIGHT) {
      _this4._initialLeft = left + width;
    } else if (anchor.x === _HorizontalAnchors2.default.RIGHT) {
      _this4._initialLeft = right;
    }

    if (!centered) {
      _this4._lastYFix = anchor.y === _VerticalAnchors2.default.TOP ? 'bottom' : 'top';
    } else {
      // Centered is not fixable
      _this4._lastYFix = null;
    }
    if (anchor.x === _HorizontalAnchors2.default.LEFT || anchor.x === _HorizontalAnchors2.default.INNER_LEFT) {
      _this4._lastXFix = 'right';
    } else if (anchor.x === _HorizontalAnchors2.default.RIGHT || anchor.x === _HorizontalAnchors2.default.INNER_RIGHT) {
      _this4._lastXFix = 'left';
    } else {
      // Can't fix others
      _this4._lastXFix = null;
    }

    if (anchor.y === _VerticalAnchors2.default.BOTTOM) {
      _this4._initialTop = top + height;
    }

    if (fixedTo !== window && !fixedTo.y && !fixedTo.x) {
      var _scroll2 = (0, _getScroll2.default)(window);
      _this4._initialWinX = _scroll2.x;
      _this4._initialWinY = _scroll2.y;
    }

    var styles = _this4._mergeStyles({
      left: _this4._initialLeft,
      top: _this4._initialTop,
      transformOrigin: undefined,
      width: sameWidth ? width : undefined
    });

    _this4.setState({ styles: styles });
  };

  this._reset = function () {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this4.props,
        fixedTo = _ref2.fixedTo;

    // Reset all the bookkeeping variables for a fresh start on re-visible
    _this4._lastXFix = null;
    _this4._lastYFix = null;
    _this4._initialX = null;
    _this4._initialY = null;
    _this4._initialTop = null;
    _this4._initialLeft = null;

    if (!_this4._inFixed) {
      if (_this4._dialog) {
        _this4._manageFixedToListener(_this4._dialog, false);
      }

      _this4._manageFixedToListener(fixedTo, false);
    }
  };

  this._setContainer = function (container) {
    _this4._container = (0, _reactDom.findDOMNode)(container);
    _this4._toggle = null;
    if (!_this4._container) {
      return;
    }

    var _props5 = _this4.props,
        toggleQuery = _props5.toggleQuery,
        onContextMenu = _props5.onContextMenu;

    if (typeof toggleQuery === 'function') {
      _this4._toggle = toggleQuery();
    } else if (typeof toggleQuery === 'string') {
      _this4._toggle = _this4._container.querySelector(toggleQuery);
    } else {
      _this4._toggle = toggleQuery;
    }

    if (!_this4._toggle && !onContextMenu && "development" !== 'production') {
      var error = new Error('Unable to find a toggle component with the provided `toggleQuery` and `toggle` element. \n' + ('`toggleQuery`: `' + toggleQuery + '`'));
      error.toggleQuery = toggleQuery;
      error.toggle = _this4.props.toggle;

      throw error;
    }

    var node = _this4._container;
    while (node) {
      var fixed = window.getComputedStyle(node).position === 'fixed';
      if (fixed && node.className.match(/md-dialog--(full-page|centered)/)) {
        _this4._dialog = node;
        return;
      } else if (fixed && !node.classList.contains('md-layover-child')) {
        _this4._inFixed = true;
        return;
      }

      node = node.offsetParent;
    }
  };

  this._initialFix = function () {
    // Need to make a clone that disables any transitions to calculate positioning stuff
    var clone = _this4._child.cloneNode(true);
    clone.style.webkitTransform = 'none';
    clone.style.transfrom = 'none';
    clone.style.webkitTransition = 'none';
    clone.style.transition = 'none';

    _this4._child.parentNode.appendChild(clone);
    var vp = (0, _viewport2.default)(clone);
    var childHeight = clone.offsetHeight,
        childWidth = clone.offsetWidth;

    _this4._child.parentNode.removeChild(clone);

    if (vp === true || !_this4._toggle || !_this4._child) {
      return;
    }

    var _getAnchor2 = _this4._getAnchor(_this4.props),
        x = _getAnchor2.x,
        y = _getAnchor2.y;

    var toggleHeight = void 0;
    var toggleWidth = void 0;
    if (_this4._contextRect) {
      toggleHeight = _this4._contextRect.height;
      toggleWidth = _this4._contextRect.width;
    } else {
      toggleHeight = _this4._toggle.offsetHeight;
      toggleWidth = _this4._toggle.offsetWidth;
    }

    var addToTop = 0;
    var addToLeft = 0;

    // Android devices will never get this far because they consider the keyboard as part
    // of the viewport, iOS will and cause it to be a giant negative number. *sigh*
    // Prevent any additional vertical positioning for iOS
    if (!_this4.props.fillViewportHeight && (!vp.top || !vp.bottom)) {
      var multiplier = vp.top ? -1 : 1;
      if (!vp.bottom && y === _VerticalAnchors2.default.OVERLAP) {
        addToTop += toggleHeight;
      } else if (y === _VerticalAnchors2.default.TOP || y === _VerticalAnchors2.default.BOTTOM) {
        addToTop += multiplier * toggleHeight;
      }

      addToTop += multiplier * childHeight;

      _this4._lastYFix = vp.top ? 'bottom' : 'top';
    }

    if (!_this4.props.fillViewportWidth && x !== _HorizontalAnchors2.default.CENTER && (!vp.left || !vp.right)) {
      if (!vp.left && x === _HorizontalAnchors2.default.LEFT) {
        addToLeft += toggleWidth + childWidth;
        _this4._lastXFix = 'left';
      } else if (!vp.left && x === _HorizontalAnchors2.default.INNER_LEFT) {
        addToLeft += toggleWidth;
        _this4._lastXFix = 'left';
      } else if (!vp.right && x === _HorizontalAnchors2.default.RIGHT) {
        addToLeft -= toggleWidth + childWidth;
        _this4._lastXFix = 'right';
      } else if (!vp.right && x === _HorizontalAnchors2.default.INNER_RIGHT) {
        addToLeft -= toggleWidth;
        _this4._lastXFix = 'right';
      }
    }

    if (addToTop !== 0 || addToLeft !== 0) {
      _this4._initialTop += addToTop;
      _this4._initialLeft += addToLeft;

      _this4.setState({ styles: _this4._mergeStyles({ top: _this4._initialTop, left: _this4._initialLeft }) });
    }
  };

  this._fixateChild = function (child) {
    _this4._child = (0, _reactDom.findDOMNode)(child);

    if (_this4._child !== null) {
      _this4._childComponent = _react2.default.Children.only(_this4.props.children);

      // If child also has a ref callback, simulate the same thing
      if (typeof _this4._childComponent.ref === 'function') {
        _this4._childComponent.ref(child);
      }

      if (_this4.props.simplified || !_this4._child || !_this4._toggle && !_this4._contextRect) {
        return;
      }

      if (_this4._dialog && _this4._dialog.classList.contains('md-dialog--centered')) {
        return;
      }

      _this4._manageWindowResizeListener(true);
      _this4._positionChild();
    } else if (_this4._childComponent && typeof _this4._childComponent.ref === 'function') {
      _this4._childComponent.ref(child);
    }
  };

  this._positionChild = function () {
    var centered = _this4.props.centered;

    var anchor = _this4._getAnchor(_this4.props);
    var rect = _this4._contextRect || _this4._toggle.getBoundingClientRect();
    _this4._height = rect.height;
    _this4._width = rect.width;
    var styles = _this4._createStyles(anchor, centered, _this4._child, rect);
    if (styles.top || styles.left) {
      _this4._initialLeft = styles.left || _this4._initialLeft;
      _this4._initialTop = styles.top || _this4._initialTop;
      _this4.setState({ styles: _this4._mergeStyles(styles) }, _this4._initialFix);
    } else {
      _this4._initialFix();
    }
  };

  this._handleResize = function () {
    if (_this4.props.visible) {
      _this4._positionChild();
    }
  };

  this._handleScroll = function (e) {
    if (!_this4.props.repositionOnScroll) {
      _this4._manageFixedToListener(_this4.props.fixedTo, false);
      _this4.props.onClose(e);
    }

    if (!_this4._ticking) {
      requestAnimationFrame(function () {
        return _this4._handleTick(e);
      });
    }

    _this4._ticking = true;
  };

  this._handleTick = function (e) {
    var _props6 = _this4.props,
        fixedTo = _props6.fixedTo,
        xThreshold = _props6.xThreshold,
        yThreshold = _props6.yThreshold;

    var vp = (0, _viewport2.default)(_this4._child);
    if (vp !== true && vp.left && vp.right) {
      var fixed = !_this4._contextRect && _this4._attemptFix(vp);
      if (!fixed) {
        _this4.props.onClose(e);
        _this4._ticking = false;
      }

      return;
    } else if ((0, _isOutOfBounds2.default)(fixedTo, _this4._child, _this4._toggle, yThreshold, xThreshold)) {
      _this4.props.onClose(e);
      _this4._ticking = false;
      return;
    }

    var x = void 0;
    var y = void 0;
    if (_this4._dialog) {
      var scroll = (0, _getScroll2.default)(_this4._dialog);
      x = scroll.x;
      y = scroll.y;
    } else if (fixedTo !== window && (fixedTo.x || fixedTo.y)) {
      x = (0, _getScroll2.default)(fixedTo.x || window).x;
      y = (0, _getScroll2.default)(fixedTo.y || window).y;
    } else {
      var _scroll3 = (0, _getScroll2.default)(fixedTo);
      x = _scroll3.x;
      y = _scroll3.y;
    }

    var winX = void 0;
    var winY = void 0;
    // When using the additional fixedTo stuff, need to also keep track of the entire
    // window's scrolling..
    if (fixedTo !== window && !fixedTo.x && !fixedTo.y) {
      var _scroll4 = (0, _getScroll2.default)(window);
      winX = _scroll4.x;
      winY = _scroll4.y;
    }

    var styles = _this4.state.styles;
    var left = styles.left,
        top = styles.top;

    if (_this4._initialX !== x) {
      left = _this4._initialX - x + _this4._initialLeft;
    }

    if (winX && _this4._initialWinX !== winX) {
      left = _this4._initialWinX - winX + _this4._initialX;
    }

    if (_this4._initialY !== y) {
      top = _this4._initialY - y + _this4._initialTop;
    }

    if (winY && _this4._initialWinY !== winY) {
      top = _this4._initialWinY - winY + _this4._initialTop + (_this4._initialY - y);
    }

    if (styles.top !== top || styles.left !== left) {
      _this4.setState({ styles: _this4._mergeStyles({ left: left, top: top }) }, function () {
        _this4._ticking = false;
      });
    } else {
      _this4._ticking = false;
    }
  };

  this._handleOutsideClick = function (e) {
    if (_this4._contextRect && _this4._child && !_this4._child.contains(e.target) || _this4._container && !_this4._container.contains(e.target)) {
      _this4.props.onClose(e);
    }
  };

  this._handleWindowResize = function (e) {
    var _props7 = _this4.props,
        onClose = _props7.onClose,
        repositionOnResize = _props7.repositionOnResize;

    if (repositionOnResize) {
      _this4._handleResize();
    } else {
      onClose(e);
      _this4._manageWindowResizeListener(false);
    }
  };

  this._attemptFix = function (vp) {
    var _getAnchor3 = _this4._getAnchor(_this4.props),
        x = _getAnchor3.x,
        y = _getAnchor3.y;

    var centered = x === _HorizontalAnchors2.default.CENTER && y === _VerticalAnchors2.default.CENTER && _this4.props.centered;
    if (centered || _this4._lastYFix === 'top' && !vp.top || _this4._lastYFix === 'bottom' && !vp.bottom) {
      return false;
    }

    var toggleTop = _this4._toggle.getBoundingClientRect().top;
    var toggleHeight = _this4._toggle.offsetHeight;
    var childHeight = _this4._child.offsetHeight;

    // Can;t fix if the child can't fit on the page based on the toggle's position

    if (toggleTop + toggleHeight + childHeight > window.innerHeight) {
      return false;
    }

    var _child$getBoundingCli = _this4._child.getBoundingClientRect(),
        top = _child$getBoundingCli.top;

    var newTop = _this4._initialTop;
    var addToTop = childHeight * (vp.top ? -1 : 1);
    if (y === _VerticalAnchors2.default.OVERLAP) {
      addToTop += (vp.top ? 1 : -1) * toggleHeight;
    } else if (y === _VerticalAnchors2.default.TOP || y === _VerticalAnchors2.default.BOTTOM) {
      addToTop += (_this4._lastYFix === 'top' ? -1 : 1) * toggleHeight;
    }

    if (addToTop !== 0) {
      newTop = top + addToTop;
      _this4._lastYFix = vp.top ? 'bottom' : 'top';
    }

    if (newTop !== _this4._initialTop) {
      _this4._initialTop = newTop;
      var fixedTo = _this4.props.fixedTo;

      var scrollEl = fixedTo;
      if (fixedTo !== window && (fixedTo.y || fixedTo.x)) {
        scrollEl = fixedTo.y || window;
      }

      _this4._initialY = (0, _getScroll2.default)(scrollEl).y;

      _this4.setState({ styles: _this4._mergeStyles({ top: _this4._initialTop }) }, function () {
        _this4._ticking = false;
      });
      return true;
    }

    return false;
  };

  this._handleContextMenu = function (e) {
    var anchor = _this4._getAnchor(_this4.props);
    var _props8 = _this4.props,
        onContextMenu = _props8.onContextMenu,
        preventContextMenu = _props8.preventContextMenu,
        fixedTo = _props8.fixedTo,
        sameWidth = _props8.sameWidth,
        centered = _props8.centered,
        visible = _props8.visible;

    if (!onContextMenu) {
      return;
    }

    _this4._contextRect = (0, _getSelectedTextPosition2.default)(e);
    if (preventContextMenu && (!_this4._child || !_this4._child.contains(e.target))) {
      e.preventDefault();
    }

    onContextMenu(e);
    if (visible) {
      _this4._init(fixedTo, anchor, sameWidth, centered, _this4._contextRect);
    }
  };
};

exports.default = Layover;

/***/ }),

/***/ "./node_modules/react-md/lib/Helpers/Portal.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-md/lib/Helpers/Portal.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isReact16 = typeof _reactDom.createPortal === 'function';

/**
 * Creates a "Portal" for the children to be rendered in. Basically it will render the
 * children only when the `visible` prop is `true`. When it is visible, a new `component`
 * will be rendered as the first child in the body with the children inside.
 *
 * Unlike all the other components, `style` will not be applied for the `Portal`.
 */

var Portal = function (_PureComponent) {
  _inherits(Portal, _PureComponent);

  function Portal() {
    var _temp, _this, _ret;

    _classCallCheck(this, Portal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _PureComponent.call.apply(_PureComponent, [this].concat(args))), _this), _this._container = null, _this._portal = null, _this._applyStyles = function (props) {
      if (props.className) {
        _this._container.className = props.className;
      }
    }, _this._renderPortal = function (props) {
      if (!_this._container) {
        _this._container = document.createElement(props.component);

        _this._applyStyles(props);
        var node = props.renderNode || document.body;
        if (props.lastChild) {
          node.appendChild(_this._container);
        } else {
          node.insertBefore(_this._container, node.firstChild);
        }
      } else {
        _this._applyStyles(props);
      }

      if (!isReact16) {
        _this._portal = (0, _reactDom.unstable_renderSubtreeIntoContainer)(_this, props.children, _this._container);
      }
    }, _this._removePortal = function () {
      if (_this.props.onClose) {
        _this.props.onClose();
      }

      if (_this._container) {
        if (!isReact16) {
          (0, _reactDom.unmountComponentAtNode)(_this._container);
        }

        (_this.props.renderNode || document.body).removeChild(_this._container);
      }

      _this._portal = null;
      _this._container = null;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Portal.prototype.componentDidMount = function componentDidMount() {
    if (this.props.visible) {
      this._renderPortal(this.props);

      if (isReact16) {
        // Need to update after the renderPortal created the DOM element.
        this.forceUpdate();
      }
    }
  };

  Portal.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var visible = nextProps.visible,
        onOpen = nextProps.onOpen;

    if (this.props.visible === visible) {
      if (visible && !isReact16) {
        // Need to just re-render the subtree
        this._renderPortal(nextProps);
      }

      return;
    }

    if (visible) {
      if (onOpen) {
        onOpen();
      }

      this._renderPortal(nextProps);
    } else {
      this._removePortal();
    }
  };

  Portal.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.props.visible && this.props.onClose) {
      this.props.onClose();
    }
    this._removePortal();
  };

  Portal.prototype.render = function render() {
    var _props = this.props,
        Component = _props.component,
        className = _props.className,
        children = _props.children,
        visible = _props.visible;

    // When doing server side rendering, actually render the component as a direct child of its parent.
    // Once it has been rendered and working client side, it will be removed correctly.

    if (typeof window === 'undefined' && visible) {
      return _react2.default.createElement(
        Component,
        { className: className },
        children
      );
    } else if (isReact16 && visible && this._container && typeof window !== 'undefined') {
      return (0, _reactDom.createPortal)(children, this._container);
    }

    return null;
  };

  return Portal;
}(_react.PureComponent);

Portal.propTypes = {
  /**
   * An optional className to apply to the newly created `component` when visible.
   */
  className: _propTypes2.default.string,

  /**
   * Boolean if the children are visible.
   */
  visible: _propTypes2.default.bool.isRequired,

  /**
   * The children to render when visible.
   */
  children: _propTypes2.default.element,

  /**
   * The component to render as. This should be a valid DOM element.
   */
  component: _propTypes2.default.string.isRequired,

  /**
   * An optional function to call when the portal is opened.
   */
  onOpen: _propTypes2.default.func,

  /**
   * An optional function to call when the portal is closed
   */
  onClose: _propTypes2.default.func,

  /**
   * An optional DOM Node to render the portal into. The default is to render as
   * the first child in the `body`.
   */
  renderNode: _propTypes2.default.object,

  /**
   * Boolean if the portal should render the children as the last child of the `renderNode`
   * or `body` instead of the first.
   */
  lastChild: _propTypes2.default.bool
};
Portal.defaultProps = {
  component: 'span'
};
exports.default = Portal;

/***/ }),

/***/ "./node_modules/react-md/lib/Helpers/Positions.js":
/*!********************************************************!*\
  !*** ./node_modules/react-md/lib/Helpers/Positions.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/** @module Helpers/Positions */

/**
 * An enum for all the animation positions for a layover appearing.
 *
 * @readonly
 * @enum {string}
 */
var Positions = {
  /**
   * The layover will appear by transitioning from the top left and expand
   * down right.
   */
  TOP_LEFT: 'tl',

  /**
   * The layover will appear by transitioning from the top right and expand
   * down left.
   */
  TOP_RIGHT: 'tr',

  /**
   * The layover will appear by transitioning from the bottom left and expand
   * top right.
   */
  BOTTOM_LEFT: 'bl',

  /**
   * The layover will appear by transitioning from the bottom right and expand
   * top left.
   */
  BOTTOM_RIGHT: 'br',

  /**
   * The layover will appear by just transitioning downwards from the bottom
   * of the toggle component.
   */
  BELOW: 'below'
};

exports.default = Positions;

/***/ }),

/***/ "./node_modules/react-md/lib/Helpers/ResizeObserver.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-md/lib/Helpers/ResizeObserver.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _resizeObserverPolyfill = __webpack_require__(/*! resize-observer-polyfill */ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");

var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The `ResizeObserver` component is a component hook for the
 * [ResizeObserver](http://rawgit.com/WICG/ResizeObserver/master/index.html)
 * using the [resize-observer-polyfill](https://github.com/que-etc/resize-observer-polyfill)
 * for browsers that don't support it yet.
 *
 * This component displays an empty `span` with `aria-hidden` to allow access to the DOM. By
 * default it will attempt to watch changes on its parent component, but it can be configured
 * to watch any element by using the `target` prop.
 */
var ResizeObserver = function (_PureComponent) {
  _inherits(ResizeObserver, _PureComponent);

  function ResizeObserver() {
    var _temp, _this, _ret;

    _classCallCheck(this, ResizeObserver);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _PureComponent.call.apply(_PureComponent, [this].concat(args))), _this), _this._container = null, _this._target = null, _this._observer = null, _this._height = null, _this._width = null, _this._scrollHeight = null, _this._scrollWidth = null, _this._measure = function (entries) {
      if (!_this._observer || !_this._target) {
        return;
      }

      for (var _iterator = entries, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var entry = _ref;

        if (!entry) {
          return;
        }

        var _entry$contentRect = entry.contentRect,
            height = _entry$contentRect.height,
            width = _entry$contentRect.width;
        var _entry$target = entry.target,
            scrollHeight = _entry$target.scrollHeight,
            scrollWidth = _entry$target.scrollWidth;

        if (_this._isHeightChange(height, scrollHeight) || _this._isWidthChange(width, scrollWidth)) {
          _this._height = height;
          _this._width = width;
          _this._scrollHeight = scrollHeight;
          _this._scrollWidth = scrollWidth;
          _this.props.onResize({ height: height, width: width, scrollHeight: scrollHeight, scrollWidth: scrollWidth, el: entry.target });
        }
      }
    }, _this._isHeightChange = function (height, scrollHeight) {
      return _this.props.watchHeight && (height !== _this._height || scrollHeight !== _this._scrollHeight);
    }, _this._isWidthChange = function (width, scrollWidth) {
      return _this.props.watchWidth && (width !== _this._width || scrollWidth !== _this._scrollWidth);
    }, _this._handleRef = function (container) {
      if (container) {
        _this._container = container;
        _this._target = _this._getTarget(container, _this.props.target);
        _this._observer = new _resizeObserverPolyfill2.default(_this._measure);

        if (_this._target) {
          _this._observer.observe(_this._target);
        }
      } else {
        if (_this._observer) {
          _this._observer.disconnect();
        }

        _this._container = null;
        _this._target = null;
        _this._observer = null;
        _this._height = null;
        _this._width = null;
        _this._scrollHeight = null;
        _this._scrollWidth = null;
      }

      if (_this.props.elRef) {
        _this.props.elRef(_this._target);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  ResizeObserver.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var target = this.props.target;

    var nextTarget = nextProps.target;
    if (target === nextTarget) {
      return;
    } else if (nextTarget) {
      if (this._target) {
        this._observer.unobserve(this._target);
      }
      this._target = this._getTarget(this._container, nextTarget);
      this._observer.observe(this._target);
    }
  };

  ResizeObserver.prototype._getTarget = function _getTarget(container, target) {
    if (target === null || target && typeof target !== 'string') {
      return target;
    }

    var t = null;
    if (target) {
      t = document.getElementById(target) || document.querySelector(target);
    } else {
      t = container.parentNode;
    }

    if (!t) {
      throw new Error('An HTMLDOMNode is required as the `ResizeObserver`\'s watch target but none were provided/found. ' + ('Please update the target prop to find a valid node since the provided target is invalid. `' + target + '`.'));
    }

    return t;
  };

  ResizeObserver.prototype.render = function render() {
    var Component = this.props.component;

    return _react2.default.createElement(Component, { ref: this._handleRef, 'aria-hidden': true });
  };

  return ResizeObserver;
}(_react.PureComponent);

ResizeObserver.propTypes = {
  /**
   * Boolean if the height should be watched for the resize target.
   */
  watchHeight: _propTypes2.default.bool,

  /**
   * Boolean if the width should be watched for the resize target.
   */
  watchWidth: _propTypes2.default.bool,

  /**
   * An optional target that should be used for detecting resize events. This can either
   * be a HTMLDOMNode or a string to use with `document.getElementById` or `document.querySelector`.
   *
   * If this prop is not provided and not null, it will default to the parent node of this component.
   * If the provided `target={null}`, the observer will not begin until the `target` is `undefined` or
   * it has been correctly passed a target string or object.
   */
  target: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),

  /**
   * The component to be rendered as. This should normally just be the default `span`, but there are cases
   * where the component should be switched to something else for valid html.
   */
  component: _propTypes2.default.string,

  /**
   * A function to call when the height or width has been changed and that attribute is being watched.
   * The callback will include the current height, width, scrollHeight and scrollWidth of the target.
   *
   * ```js
   * onResize({
   *   height: nextHeight,
   *   width: nextWidth,
   *   scrollHeight: nextScrollHeight,
   *   scrollWidth: nextScrollWidth,
   *   el: resizeTarget,
   * });
   * ```
   */
  onResize: _propTypes2.default.func.isRequired,

  /**
   * An optional ref callback that will include the `target` or the parent node of the resize observer. Just
   * like other refs, this will provide null when it unmounts.
   *
   * This is really only helpful if you'd like the DOM node for a parent Component without needing to use
   * `ReactDOM.findDOMNode(this)`.
   */
  elRef: _propTypes2.default.func
};
ResizeObserver.defaultProps = {
  watchHeight: false,
  watchWidth: false,
  component: 'span'
};
exports.default = ResizeObserver;

/***/ }),

/***/ "./node_modules/react-md/lib/Helpers/VerticalAnchors.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-md/lib/Helpers/VerticalAnchors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/** @module Helpers/VerticalAnchors */

/**
 * An enum for all the different types of horizontal anchors on a layover.
 *
 * @readonly
 * @enum {string}
 */
var VerticalAnchors = {
  /**
   * Positions the layover to be placed over the toggle component so that
   * it will never overlay the toggle component.
   */
  TOP: 'top',

  /**
   * Positions the layover so that it will be centered over the toggle component
   * based on the layover's height.
   */
  CENTER: 'center',

  /**
   * Positions the layover so that it will overlap the toggle component by
   * fixing to the top of the toggle.
   */
  OVERLAP: 'overlap',

  /**
   * Positions the layover to be placed below the toggle component so that
   * it will never overlay the toggle component.
   */
  BOTTOM: 'bottom'
};

exports.default = VerticalAnchors;

/***/ }),

/***/ "./node_modules/react-md/lib/Helpers/anchorShape.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-md/lib/Helpers/anchorShape.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _HorizontalAnchors = __webpack_require__(/*! ./HorizontalAnchors */ "./node_modules/react-md/lib/Helpers/HorizontalAnchors.js");

var _HorizontalAnchors2 = _interopRequireDefault(_HorizontalAnchors);

var _VerticalAnchors = __webpack_require__(/*! ./VerticalAnchors */ "./node_modules/react-md/lib/Helpers/VerticalAnchors.js");

var _VerticalAnchors2 = _interopRequireDefault(_VerticalAnchors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _propTypes2.default.shape({
  x: _propTypes2.default.oneOf([_HorizontalAnchors2.default.LEFT, _HorizontalAnchors2.default.INNER_LEFT, _HorizontalAnchors2.default.CENTER, _HorizontalAnchors2.default.RIGHT, _HorizontalAnchors2.default.INNER_RIGHT]).isRequired,
  y: _propTypes2.default.oneOf([_VerticalAnchors2.default.TOP, _VerticalAnchors2.default.CENTER, _VerticalAnchors2.default.OVERLAP, _VerticalAnchors2.default.BOTTOM]).isRequired
});

/***/ }),

/***/ "./node_modules/react-md/lib/Helpers/fixedToShape.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-md/lib/Helpers/fixedToShape.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.shape({
  x: _propTypes2.default.object,
  y: _propTypes2.default.object
})]);

/***/ }),

/***/ "./node_modules/react-md/lib/Helpers/positionShape.js":
/*!************************************************************!*\
  !*** ./node_modules/react-md/lib/Helpers/positionShape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Positions = __webpack_require__(/*! ./Positions */ "./node_modules/react-md/lib/Helpers/Positions.js");

var _Positions2 = _interopRequireDefault(_Positions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _propTypes2.default.oneOfType([_propTypes2.default.oneOf([_Positions2.default.TOP_LEFT, _Positions2.default.TOP_RIGHT, _Positions2.default.BOTTOM_LEFT, _Positions2.default.BOTTOM_RIGHT, _Positions2.default.BELOW]), _propTypes2.default.string]);

/***/ }),

/***/ "./node_modules/react-md/lib/Inks/Ink.js":
/*!***********************************************!*\
  !*** ./node_modules/react-md/lib/Inks/Ink.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _CSSTransitionGroupTick = __webpack_require__(/*! ../constants/CSSTransitionGroupTick */ "./node_modules/react-md/lib/constants/CSSTransitionGroupTick.js");

var _CSSTransitionGroupTick2 = _interopRequireDefault(_CSSTransitionGroupTick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ink = function (_PureComponent) {
  _inherits(Ink, _PureComponent);

  function Ink(props) {
    _classCallCheck(this, Ink);

    var _this = _possibleConstructorReturn(this, _PureComponent.call(this, props));

    _this.state = {
      active: false,
      expanded: false,
      pulsing: false,
      leaving: false
    };
    return _this;
  }

  Ink.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (!this.props.aborted && nextProps.aborted) {
      if (this._timeout) {
        clearTimeout(this._timeout);
      }

      if (this._abort) {
        this._abort();
      }

      this.setState({ active: false, expanding: false, pulsing: false, leaving: false });
    }
  };

  Ink.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this._timeout) {
      clearTimeout(this._timeout);
    }
  };

  Ink.prototype.componentWillEnter = function componentWillEnter(cb) {
    var _this2 = this;

    if (this.props.aborted) {
      cb();
      return;
    }

    var _props = this.props,
        transitionOverlap = _props.transitionOverlap,
        transitionEnterTimeout = _props.transitionEnterTimeout;

    this._abort = cb;

    this._timeout = setTimeout(function () {
      _this2._timeout = setTimeout(function () {
        _this2._timeout = null;
        _this2._abort = null;

        cb();
      }, transitionEnterTimeout - transitionOverlap);

      _this2.setState({ expanded: true });
    }, _CSSTransitionGroupTick2.default);

    this.setState({ active: true });
  };

  Ink.prototype.componentDidEnter = function componentDidEnter() {
    var _this3 = this;

    if (this.props.pulse) {
      this._timeout = setTimeout(function () {
        _this3._timeout = null;

        _this3.setState({ pulsing: true });
      }, this.props.transitionEnterTimeout);
    }
  };

  Ink.prototype.componentWillLeave = function componentWillLeave(cb) {
    var _this4 = this;

    if (this.props.aborted) {
      cb();
      return;
    }

    if (this._timeout) {
      clearTimeout(this._timeout);
    }

    this._abort = cb;
    this._timeout = setTimeout(function () {
      _this4._timeout = null;

      cb();
    }, this.props.transitionLeaveTimeout);

    this.setState({ pulsing: false, leaving: true });
  };

  Ink.prototype.componentDidLeave = function componentDidLeave() {
    if (!this.props.aborted && this.props.onRemove) {
      this.props.onRemove();
    }
  };

  Ink.prototype.render = function render() {
    var _props2 = this.props,
        style = _props2.style,
        className = _props2.className,
        left = _props2.left,
        top = _props2.top,
        size = _props2.size;
    var _state = this.state,
        active = _state.active,
        expanded = _state.expanded,
        pulsing = _state.pulsing,
        leaving = _state.leaving;


    return _react2.default.createElement('span', {
      style: Object.assign({}, style, {
        left: left,
        top: top,
        height: size,
        width: size
      }),
      className: (0, _classnames2.default)('md-ink', {
        'md-ink--active': active,
        'md-ink--expanded': expanded,
        'md-ink--pulsing': pulsing,
        'md-ink--leaving': leaving
      }, className)
    });
  };

  return Ink;
}(_react.PureComponent);

Ink.propTypes = {
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  aborted: _propTypes2.default.bool,
  onRemove: _propTypes2.default.func,
  left: _propTypes2.default.number.isRequired,
  top: _propTypes2.default.number.isRequired,
  size: _propTypes2.default.number.isRequired,
  transitionOverlap: _propTypes2.default.number.isRequired,
  transitionEnterTimeout: _propTypes2.default.number.isRequired,
  transitionLeaveTimeout: _propTypes2.default.number.isRequired,
  pulse: _propTypes2.default.bool
};
exports.default = Ink;

/***/ }),

/***/ "./node_modules/react-md/lib/Inks/InkContainer.js":
/*!********************************************************!*\
  !*** ./node_modules/react-md/lib/Inks/InkContainer.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TransitionGroup = __webpack_require__(/*! react-transition-group/TransitionGroup */ "./node_modules/react-transition-group/TransitionGroup.js");

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _keyCodes = __webpack_require__(/*! ../constants/keyCodes */ "./node_modules/react-md/lib/constants/keyCodes.js");

var _isFormPartRole = __webpack_require__(/*! ../utils/isFormPartRole */ "./node_modules/react-md/lib/utils/isFormPartRole.js");

var _isFormPartRole2 = _interopRequireDefault(_isFormPartRole);

var _calcPageOffset = __webpack_require__(/*! ../utils/Positioning/calcPageOffset */ "./node_modules/react-md/lib/utils/Positioning/calcPageOffset.js");

var _calcPageOffset2 = _interopRequireDefault(_calcPageOffset);

var _isValidClick = __webpack_require__(/*! ../utils/EventUtils/isValidClick */ "./node_modules/react-md/lib/utils/EventUtils/isValidClick.js");

var _isValidClick2 = _interopRequireDefault(_isValidClick);

var _touches = __webpack_require__(/*! ../utils/EventUtils/touches */ "./node_modules/react-md/lib/utils/EventUtils/touches.js");

var _captureNextEvent = __webpack_require__(/*! ../utils/EventUtils/captureNextEvent */ "./node_modules/react-md/lib/utils/EventUtils/captureNextEvent.js");

var _captureNextEvent2 = _interopRequireDefault(_captureNextEvent);

var _calculateHypotenuse = __webpack_require__(/*! ../utils/NumberUtils/calculateHypotenuse */ "./node_modules/react-md/lib/utils/NumberUtils/calculateHypotenuse.js");

var _calculateHypotenuse2 = _interopRequireDefault(_calculateHypotenuse);

var _Ink = __webpack_require__(/*! ./Ink */ "./node_modules/react-md/lib/Inks/Ink.js");

var _Ink2 = _interopRequireDefault(_Ink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The `InkContainer` is used for holding the list of inks that get created by touch,
 * click, or keyboard focus.
 *
 * If the container element has the `type="submit"` attribute, the ink will also be
 * triggered when the user presses enter anywhere in the form.
 */
var InkContainer = function (_PureComponent) {
  _inherits(InkContainer, _PureComponent);

  function InkContainer() {
    var _temp, _this, _ret;

    _classCallCheck(this, InkContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _PureComponent.call.apply(_PureComponent, [this].concat(args))), _this), _this.state = { inks: [] }, _this.createInk = function (pageX, pageY) {
      _this._createInk(pageX, pageY);
      _this._removeTimeout = setTimeout(function () {
        _this._removeTimeout = null;
        _this._removeInk();
      }, _this.props.transitionOverlap);
    }, _this.focus = function () {
      _this._getKeyboardContainer().focus();
    }, _this._createInk = function (pageX, pageY) {
      var _this$_inkContainer = _this._inkContainer,
          offsetWidth = _this$_inkContainer.offsetWidth,
          offsetHeight = _this$_inkContainer.offsetHeight;


      var x = void 0;
      var y = void 0;
      if (typeof pageX !== 'undefined' && typeof pageY !== 'undefined') {
        var pageOffset = (0, _calcPageOffset2.default)(_this._inkContainer);

        x = pageX - pageOffset.left;
        y = pageY - pageOffset.top;
      } else {
        x = offsetWidth / 2;
        y = offsetHeight / 2;
      }

      var r = Math.max((0, _calculateHypotenuse2.default)(x, y), (0, _calculateHypotenuse2.default)(offsetWidth - x, y), (0, _calculateHypotenuse2.default)(offsetWidth - x, offsetHeight - y), (0, _calculateHypotenuse2.default)(x, offsetHeight - y));

      var ink = {
        left: x - r,
        top: y - r,
        size: r * 2,
        key: Date.now()
      };

      var inks = _this.state.inks.slice();
      inks.push(ink);
      _this.setState({ inks: inks });
    }, _this._removeInk = function () {
      var inks = _this.state.inks.slice();
      inks.pop();

      _this.setState({ inks: inks });
    }, _this._getKeyboardContainer = function () {
      if (_this._container.classList.contains('md-text-field-container')) {
        return _this._container.querySelector('.md-text-field');
      }

      return _this._container;
    }, _this._setContainers = function (group) {
      if (group !== null) {
        _this._inkContainer = (0, _reactDom.findDOMNode)(group);
        _this._container = _this._inkContainer.parentElement;

        if (_this._container) {
          _this._initOrRemoveEvents(_this.props);
        }
      }
    }, _this._initOrRemoveEvents = function (props) {
      var keyboardDiff = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var mouseDiff = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var touchDiff = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

      var mouseDisabled = _this._isListenerDisabled('mouse', props.disabledInteractions);
      var touchDisabled = _this._isListenerDisabled('touch', props.disabledInteractions);
      var keyboardDisabled = _this._isListenerDisabled('keyboard', props.disabledInteractions);

      if (keyboardDiff) {
        var fn = (keyboardDisabled ? 'remove' : 'add') + 'EventListener';
        _this._getKeyboardContainer()[fn]('focus', _this._handleFocus);
        _this._getKeyboardContainer()[fn]('keydown', _this._handleKeyDown);

        if (_this._container.getAttribute('type') === 'submit') {
          window[fn]('submit', _this._handleSubmit);
        }

        if (mouseDiff) {
          _this._container[(!mouseDisabled ? 'add' : 'remove') + 'EventListener']('mousedown', _this._stopPropagationToFocus);
        }

        if (touchDiff) {
          (0, _touches.setTouchEvent)(!touchDisabled, _this._container, 'start', _this._stopPropagationToFocus);
        }
      }

      if (mouseDiff) {
        var _fn = (mouseDisabled ? 'remove' : 'add') + 'EventListener';
        _this._container[_fn]('mousedown', _this._handleMouseDown);
        _this._container[_fn]('mouseup', _this._handleMouseUp);
      }

      if (touchDiff) {
        (0, _touches.setTouchEvent)(!touchDisabled, _this._container, 'start', _this._handleTouchStart);
        (0, _touches.setTouchEvent)(!touchDisabled, _this._container, 'end', _this._handleTouchEnd);
      }
    }, _this._maybeDelayClick = function () {
      if (!_this.props.waitForInkTransition) {
        return;
      }

      (0, _captureNextEvent2.default)('click', _this._container);
    }, _this._handleRemove = function () {
      if (_this._clicked && _this.props.waitForInkTransition) {
        // For some reason if the click event will make the ink unmount, it will no longer
        // have a debug id in the TransitionGroup and it displays a warning. Adding a 1ms timeout
        // fixes that issue... It only happens on an actual click instead of an enter click.
        setTimeout(function () {
          _this._container.click();
        }, 1);
      }

      _this._clicked = false;
    }, _this._handleKeyDown = function (e) {
      var key = e.which || e.keyCode;
      var enter = key === _keyCodes.ENTER;
      var space = key === _keyCodes.SPACE;
      // Don't trigger ink when enter key is pressed and the target has an input inside of it (SelectField)
      if (space || enter && !(0, _isFormPartRole2.default)(e.target) && !e.target.querySelector('input')) {
        _this._clicked = true;
        _this.createInk();
        _this._maybeDelayClick();
      }
    }, _this._handleFocus = function () {
      if (_this._clicked) {
        return;
      }

      _this._createInk();
      _this._getKeyboardContainer().addEventListener('blur', _this._handleBlur);
    }, _this._handleBlur = function () {
      _this._getKeyboardContainer().removeEventListener('blur', _this._handleBlur);
      _this._removeInk();
    }, _this._handleMouseDown = function (e) {
      _this._clicked = true;
      if (!(0, _isValidClick2.default)(e) || _this._skipNextMouse) {
        _this._skipNextMouse = false;
        return;
      }

      _this._mouseLeave = false;
      _this._container.addEventListener('mouseleave', _this._handleMouseLeave);
      _this._createInk(e.pageX, e.pageY);
    }, _this._handleMouseLeave = function () {
      _this._container.removeEventListener('mouseleave', _this._handleMouseLeave);
      _this._mouseLeave = true;
      _this._removeInk();
    }, _this._handleMouseUp = function () {
      if (_this._mouseLeave) {
        return;
      }

      _this._maybeDelayClick();
      _this._container.removeEventListener('mouseleave', _this._handleMouseLeave);
      _this._removeInk();
    }, _this._handleTouchStart = function (e) {
      _this._aborted = false;
      _this._clicked = true;
      _this._skipNextMouse = true;
      (0, _touches.addTouchEvent)(window, 'move', _this._handleTouchMove);

      var _e$changedTouches$ = e.changedTouches[0],
          pageX = _e$changedTouches$.pageX,
          pageY = _e$changedTouches$.pageY;

      _this._createInk(pageX, pageY);
    }, _this._handleTouchMove = function () {
      (0, _touches.removeTouchEvent)(window, 'move', _this._handleTouchMove);
      var lastInk = _this.state.inks[_this.state.inks.length - 1];
      if (!lastInk || Date.now() > lastInk.key + 200) {
        _this._aborted = false;
        return;
      }

      var inks = _this.state.inks.slice();
      var index = inks.length - 1;

      var abortedInk = Object.assign({}, lastInk, { aborted: true });
      inks.splice(index, 1, abortedInk);

      _this._aborted = true;
      _this.setState({ inks: inks }, _this._removeInk);
    }, _this._handleTouchEnd = function () {
      _this._skipNextMouse = true;

      if (_this._aborted) {
        return;
      } else {
        (0, _touches.removeTouchEvent)(window, 'move', _this._handleTouchMove);
      }

      _this._removeInk();
    }, _this._handleSubmit = function (e) {
      if (document.activeElement === _this._container || !e.target.contains(_this._container)) {
        return;
      }

      _this._maybeDelayClick();
      _this.createInk();
    }, _this._stopPropagationToFocus = function (e) {
      switch (e.type) {
        case 'touchstart':
          (0, _touches.addTouchEvent)(window, 'end', _this._stopPropagationToFocus, { capture: true });
          break;
        case 'touchend':
          (0, _touches.removeTouchEvent)(window, 'end', _this._stopPropagationToFocus, { capture: true });
          break;
        case 'mousedown':
          window.addEventListener('mouseup', _this._stopPropagationToFocus, true);
          break;
        case 'mouseup':
          window.removeEventListener('mouseup', _this._stopPropagationToFocus, true);
          break;
        default:
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  InkContainer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var di = this.props.disabledInteractions;
    var ndi = nextProps.disabledInteractions;

    if (di === ndi || !this._container) {
      return;
    }

    var mouseDisabledDiff = this._isListenerDisabledDiff('mouse', di, ndi);
    var touchDisabledDiff = this._isListenerDisabledDiff('touch', di, ndi);
    var keyboardDisabledDiff = this._isListenerDisabledDiff('keyboard', di, ndi);
    this._initOrRemoveEvents(nextProps, keyboardDisabledDiff, mouseDisabledDiff, touchDisabledDiff);
  };

  InkContainer.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this._removeTimeout) {
      clearTimeout(this._removeTimeout);
    }

    if (this._container) {
      this._initOrRemoveEvents({ disabledInteractions: ['keyboard', 'mouse', 'touch'] });
      this._getKeyboardContainer().removeEventListener('blur', this._handleBlur);
    }
  };

  /**
   * Creates an ink from pageX and pageY coordinates. These values should either come
   * from the `changedTouches` or just the base event (if clicked). These coordinates
   * are used to position the ink correctly in the container from touch/click point.
   * If either value is undefined, an ink will be created from the center of the
   * container.
   *
   * It will also automatically remove the ink.
   *
   * @param {number} pageX - The page x coordinate of the click or touch event.
   * @param {number} pageY - The page y coordinate of the click or touch event.
   */


  /**
   * Focuses the main element.
   */


  InkContainer.prototype._isListenerDisabledDiff = function _isListenerDisabledDiff(interaction, disabledInteractions, nextDisabledInteractions) {
    var i = disabledInteractions.indexOf(interaction);
    var ni = nextDisabledInteractions.indexOf(interaction);

    return i < 0 && ni >= 0 || i >= 0 && ni < 0;
  };

  InkContainer.prototype._isListenerDisabled = function _isListenerDisabled(interaction, disabledInteractions) {
    return disabledInteractions && disabledInteractions.indexOf(interaction) !== -1;
  };

  /**
   * Creates an ink from pageX and pageY coordinates. These values should either come
   * from the `changedTouches` or just the base event (if clicked). These coordinates
   * are used to position the ink correctly in the container from touch/click point.
   * If either value is undefined, an ink will be created from the center of the
   * container.
   *
   * @param {number} pageX - The page x coordinate of the click or touch event.
   * @param {number} pageY - The page y coordinate of the click or touch event.
   */


  /**
   * Removes an ink from the container.
   */


  /**
   * Gets the container for any keyboard events. This will almost always be the main element,
   * but text fields will need to be the input itself.
   */


  /**
   * Sets the ink container and the main container from the ref callback. When the component
   * is mounting, the keyboard, mouse, and keyboard events will be initialized.
   */


  /**
   * This function will either add or remove the event listeners for creating inks.
   *
   * @param {Object} props - The current props to use for figuring out if the events should
   *    be added or removed.
   * @param {bool=} keyboardDiff - Boolean if there was a difference between the current props and either
   *    the previous or next props for the keyboard interactions being disabled.
   * @param {bool=} mouseDiff - Boolean if there was a difference between the current props and either
   *    the previous or next props for the mouse interactions being disabled.
   * @param {bool=} touchDiff - Boolean if there was a difference between the current props and either
   *    the previous or next props for the touch interactions being disabled.
   */


  /**
   * If a form was submitted that contains the container of the ink and the current focus element
   * is not the container, trigger an ink effect.
   *
   * The current focus check is added so that two inks are not created.
   */


  InkContainer.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        style = _props.style,
        className = _props.className,
        inkStyle = _props.inkStyle,
        inkClassName = _props.inkClassName,
        transitionOverlap = _props.transitionOverlap,
        transitionEnterTimeout = _props.transitionEnterTimeout,
        transitionLeaveTimeout = _props.transitionLeaveTimeout,
        pulse = _props.pulse;

    var inks = this.state.inks.map(function (props) {
      return _react2.default.createElement(_Ink2.default, _extends({}, props, {
        pulse: pulse,
        style: inkStyle,
        className: inkClassName,
        onRemove: _this2._handleRemove,
        transitionOverlap: transitionOverlap,
        transitionEnterTimeout: transitionEnterTimeout,
        transitionLeaveTimeout: transitionLeaveTimeout
      }));
    });

    return _react2.default.createElement(
      _TransitionGroup2.default,
      {
        component: 'div',
        style: style,
        className: (0, _classnames2.default)('md-ink-container', className),
        ref: this._setContainers
      },
      inks
    );
  };

  return InkContainer;
}(_react.PureComponent);

InkContainer.propTypes = {
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  inkStyle: _propTypes2.default.object,
  inkClassName: _propTypes2.default.string,
  waitForInkTransition: _propTypes2.default.bool,
  disabledInteractions: _propTypes2.default.arrayOf(_propTypes2.default.oneOf(['keyboard', 'mouse', 'touch'])),
  transitionOverlap: _propTypes2.default.number.isRequired,
  transitionEnterTimeout: _propTypes2.default.number.isRequired,
  transitionLeaveTimeout: _propTypes2.default.number.isRequired,
  pulse: _propTypes2.default.bool
};
InkContainer.defaultProps = {
  transitionOverlap: 150,
  transitionEnterTimeout: 450,
  transitionLeaveTimeout: 300
};
exports.default = InkContainer;

/***/ }),

/***/ "./node_modules/react-md/lib/Inks/injectInk.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-md/lib/Inks/injectInk.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getField = __webpack_require__(/*! ../utils/getField */ "./node_modules/react-md/lib/utils/getField.js");

var _getField2 = _interopRequireDefault(_getField);

var _getDisplayName = __webpack_require__(/*! ../utils/StringUtils/getDisplayName */ "./node_modules/react-md/lib/utils/StringUtils/getDisplayName.js");

var _getDisplayName2 = _interopRequireDefault(_getDisplayName);

var _InkContainer = __webpack_require__(/*! ./InkContainer */ "./node_modules/react-md/lib/Inks/InkContainer.js");

var _InkContainer2 = _interopRequireDefault(_InkContainer);

var _inkContextTypes = __webpack_require__(/*! ./inkContextTypes */ "./node_modules/react-md/lib/Inks/inkContextTypes.js");

var _inkContextTypes2 = _interopRequireDefault(_inkContextTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Takes any component and injects an ink container for having the Material Design Ink effect.
 *
 * The default triggers for an ink are:
 * - mouse down event
 * - touch start event
 * - keyboard focus
 * - form submit
 *
 * The form submit ink will only be triggered if the `ComposedComponent` has the attribute
 * `type="submit"`, the `ComposedComponent` is in a form, and the user hits the `enter` key
 * while not actively focusing the `ComposedComponent`.
 *
 * ```js
 * @param {function} ComposedComponent - The React Component to inject an `ink` prop into.
 * @return {function} a new React class rendering the `ComposedComponent` and adding an
 *    `ink` pop.
 * ```
 */
exports.default = function (ComposedComponent) {
  var _class, _temp2;

  return _temp2 = _class = function (_PureComponent) {
    _inherits(InkedComponent, _PureComponent);

    function InkedComponent() {
      var _temp, _this, _ret;

      _classCallCheck(this, InkedComponent);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _PureComponent.call.apply(_PureComponent, [this].concat(args))), _this), _this.createInk = function (pageX, pageY) {
        if (_this._inkContainer && !_this.props.disabled && !_this.props.inkDisabled) {
          _this._inkContainer.createInk(pageX, pageY);
        }
      }, _this.focus = function () {
        if (_this.props.inkDisabled) {
          var composed = (0, _reactDom.findDOMNode)(_this._composed);
          if (composed) {
            composed.focus();
          }
        } else if (_this._inkContainer) {
          _this._inkContainer.focus();
        }
      }, _this.getComposedComponent = function () {
        return _this._composed;
      }, _this._setInkRef = function (inkContainer) {
        if (inkContainer) {
          _this._inkContainer = inkContainer;
        }
      }, _this._setComposedComponent = function (component) {
        _this._composed = component;
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    InkedComponent.prototype.componentDidMount = function componentDidMount() {
      var ref = this.props.__SUPER_SECRET_REF__;
      // Emulate the ref callback...

      if (ref) {
        ref(this);
      }
    };

    InkedComponent.prototype.componentWillUnmount = function componentWillUnmount() {
      var ref = this.props.__SUPER_SECRET_REF__;
      // Emulate the ref callback...

      if (ref) {
        ref(null);
      }
    };

    /**
     * A publicly accessible way to manually create an ink. This can be used with the `refs`.
     * The ink can either be created by using the `pageX` and `pageY` from a click/touch event
     * or it will be created in the center of the `ComposedComponent`.
     *
     * ```js
     * <SomeInkedComponent ref={inkHOC => inkHOC.createInk()} />
     * ```
     *
     * @param {number=} pageX - An optional pageX of the click or touch event.
     * @param {number=} pageY - An optional pageY of the click or touch event.
     */


    /**
     * This will attempt to focus the composed component. If the component is disabled, nothing
     * will happen. If the `disabled` and `inkDisabled` props are not set to `true`, an ink will
     * also be created.
     *
     * ```js
     * <SomeInkedComponent ref={inkHOC => inkHOC.focus()} />
     * ```
     */


    /**
     * Gets the composed component as a ref. This is useful if you need to access the ref of the
     * composed component instead of the `injectInk` HOC to use some publicly accessible methods.
     *
     * ```js
     * <SomeInkedComponent
     *   ref={inkHOC => {
     *     inkHOC.getComposedComponent().focus();
     *   }}
     * />
     * ```
     */


    InkedComponent.prototype.render = function render() {
      var _props = this.props,
          transitionOverlap = _props.inkTransitionOverlap,
          transitionEnterTimeout = _props.inkTransitionEnterTimeout,
          transitionLeaveTimeout = _props.inkTransitionLeaveTimeout,
          inkStyle = _props.inkStyle,
          inkClassName = _props.inkClassName,
          inkContainerStyle = _props.inkContainerStyle,
          inkContainerClassName = _props.inkContainerClassName,
          waitForInkTransition = _props.waitForInkTransition,
          disabledInteractions = _props.disabledInteractions,
          pulse = _props.pulse,
          propInkDisabled = _props.inkDisabled,
          __SUPER_SECRET_REF__ = _props.__SUPER_SECRET_REF__,
          props = _objectWithoutProperties(_props, ['inkTransitionOverlap', 'inkTransitionEnterTimeout', 'inkTransitionLeaveTimeout', 'inkStyle', 'inkClassName', 'inkContainerStyle', 'inkContainerClassName', 'waitForInkTransition', 'disabledInteractions', 'pulse', 'inkDisabled', '__SUPER_SECRET_REF__']);

      var inkDisabled = (0, _getField2.default)(this.props, this.context, 'inkDisabled');
      var inkDisabledInteractions = typeof disabledInteractions !== 'undefined' ? disabledInteractions : this.context.inkDisabledInteractions;

      if (!(props.disabled || inkDisabled)) {
        props.ink = _react2.default.createElement(_InkContainer2.default, {
          ref: this._setInkRef,
          key: 'ink-container',
          pulse: pulse,
          style: inkContainerStyle,
          className: inkContainerClassName,
          inkStyle: inkStyle,
          inkClassName: inkClassName,
          disabledInteractions: inkDisabledInteractions,
          transitionOverlap: transitionOverlap,
          transitionEnterTimeout: transitionEnterTimeout,
          transitionLeaveTimeout: transitionLeaveTimeout,
          waitForInkTransition: waitForInkTransition
        });
      }

      props.ref = this._setComposedComponent;

      return _react2.default.createElement(ComposedComponent, props);
    };

    return InkedComponent;
  }(_react.PureComponent), _class.displayName = (0, _getDisplayName2.default)(ComposedComponent, 'Ink'), _class.propTypes = {
    /**
     * An optional style to apply to each ink that gets generated.
     */
    inkStyle: _propTypes2.default.object,

    /**
     * An optional className to apply to each ink that gets generated.
     */
    inkClassName: _propTypes2.default.string,

    /**
     * An optional style to apply to the ink's container.
     */
    inkContainerStyle: _propTypes2.default.object,

    /**
     * An optional className to apply to the ink's container.
     */
    inkContainerClassName: _propTypes2.default.string,

    /**
     * Boolean if the composed component or the ink is disabled.
     */
    disabled: _propTypes2.default.bool,

    /**
     * Boolean if only the ink is disabled for the composed component.
     */
    inkDisabled: _propTypes2.default.bool,

    /**
     * The time (in ms) that the enter and leave transitions for the ink should overlap.
     * This really just allows for a more _fluid_ looking ink when something is quickly
     * touched or clicked by having it fade out while growing.
     */
    inkTransitionOverlap: _propTypes2.default.number.isRequired,

    /**
     * The transition time for the ink to be considered fully entered. This should really
     * map up to whatever value you set for `$md-ink-enter-transition-time`.
     */
    inkTransitionEnterTimeout: _propTypes2.default.number.isRequired,

    /**
     * The transition time for the ink to be considered fully leaved (left?). This should really
     * map up to whatever value you set for `$md-ink-leave-transition-time`.
     */
    inkTransitionLeaveTimeout: _propTypes2.default.number.isRequired,

    /**
     * Boolean if the `ComposedComponent`'s click event only after the ink has finished transitioning
     * in and out. This is really only to get a more _fluid_ looking click event when clicking on
     * the `ComposedComponent` ends up taking it out of the view. (ex: Closing a Dialog).
     */
    waitForInkTransition: _propTypes2.default.bool,

    /**
     * An optional array of interactions that can be disabled for the ink. This is a *very* limited
     * use case where `Switches` needed the ink disabled only when using a mouse.
     */
    disabledInteractions: _propTypes2.default.arrayOf(_propTypes2.default.oneOf(['keyboard', 'mouse', 'touch'])),

    /**
     * Boolean if the ink should do a pulse animation while focused. This was enabled by default in
     * previous versions.
     */
    pulse: _propTypes2.default.bool,

    /**
     * When using inked components in a `TransitionGroup`, the ref callback is not actually invoked.
     * This is a little _hack_ to get it to work by not using `ref`, but this name.
     */
    __SUPER_SECRET_REF__: _propTypes2.default.func
  }, _class.defaultProps = {
    inkTransitionOverlap: 150,
    inkTransitionEnterTimeout: 450,
    inkTransitionLeaveTimeout: 300
  }, _class.contextTypes = _inkContextTypes2.default, _temp2;
};

/***/ }),

/***/ "./node_modules/react-md/lib/Inks/inkContextTypes.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-md/lib/Inks/inkContextTypes.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  inkDisabled: _propTypes2.default.bool,
  inkDisabledInteractions: _propTypes2.default.arrayOf(_propTypes2.default.oneOf(['keyboard', 'mouse', 'touch']))
};

/***/ }),

/***/ "./node_modules/react-md/lib/Lists/List.js":
/*!*************************************************!*\
  !*** ./node_modules/react-md/lib/Lists/List.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _deprecated = __webpack_require__(/*! react-prop-types/lib/deprecated */ "./node_modules/react-prop-types/lib/deprecated.js");

var _deprecated2 = _interopRequireDefault(_deprecated);

var _getField = __webpack_require__(/*! ../utils/getField */ "./node_modules/react-md/lib/utils/getField.js");

var _getField2 = _interopRequireDefault(_getField);

var _fixedToShape = __webpack_require__(/*! ../Helpers/fixedToShape */ "./node_modules/react-md/lib/Helpers/fixedToShape.js");

var _fixedToShape2 = _interopRequireDefault(_fixedToShape);

var _Subheaders = __webpack_require__(/*! ../Subheaders */ "./node_modules/react-md/lib/Subheaders/index.js");

var _Subheaders2 = _interopRequireDefault(_Subheaders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Lists present multiple line items vertically as a single continuous element.
 */
var List = function (_PureComponent) {
  _inherits(List, _PureComponent);

  function List() {
    var _temp, _this, _ret;

    _classCallCheck(this, List);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _PureComponent.call.apply(_PureComponent, [this].concat(args))), _this), _this.state = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  List.prototype.getChildContext = function getChildContext() {
    var _context = this.context,
        listLevel = _context.listLevel,
        context = _objectWithoutProperties(_context, ['listLevel']);

    var cascadingFixedTo = (0, _getField2.default)(this.state, this.context, 'cascadingFixedTo');
    return _extends({}, context, {
      cascadingFixedTo: cascadingFixedTo,
      listLevel: typeof listLevel === 'undefined' ? 1 : listLevel + 1
    });
  };

  List.prototype.componentDidMount = function componentDidMount() {
    if (this.context.cascadingMenu) {
      var list = (0, _reactDom.findDOMNode)(this);
      if (list.offsetHeight < list.scrollHeight) {
        var cascadingFixedTo = { y: (0, _reactDom.findDOMNode)(this) };
        this.setState({ cascadingFixedTo: cascadingFixedTo }); // eslint-disable-line react/no-did-mount-set-state
      }
    }
  };

  List.prototype.render = function render() {
    var _cn;

    var _props = this.props,
        className = _props.className,
        ordered = _props.ordered,
        children = _props.children,
        subheader = _props.subheader,
        inline = _props.inline,
        primarySubheader = _props.primarySubheader,
        props = _objectWithoutProperties(_props, ['className', 'ordered', 'children', 'subheader', 'inline', 'primarySubheader']);

    var _context2 = this.context,
        cascadingMenu = _context2.cascadingMenu,
        cascadingZDepth = _context2.cascadingZDepth,
        listLevel = _context2.listLevel;


    var subheaderEl = void 0;
    if (subheader) {
      subheaderEl = _react2.default.createElement(_Subheaders2.default, { key: 'subheader', primaryText: subheader, primary: primarySubheader });
    }

    var Component = ordered ? 'ol' : 'ul';
    return _react2.default.createElement(
      Component,
      _extends({}, props, {
        className: (0, _classnames2.default)('md-list', (_cn = {
          'md-list--inline': inline,
          'md-list--menu-cascading': cascadingMenu
        }, _cn['md-paper md-paper--' + cascadingZDepth] = cascadingZDepth && cascadingMenu && listLevel > 0, _cn['md-list--nested-' + listLevel] = listLevel && !cascadingMenu, _cn), className)
      }),
      subheaderEl,
      children
    );
  };

  return List;
}(_react.PureComponent);

List.propTypes = {
  /**
   * An optional style to apply to the list.
   */
  style: _propTypes2.default.object,

  /**
   * An optional className to apply to the list.
   */
  className: _propTypes2.default.string,

  /**
   * Boolean if this should be an ordered list (`<ol>`) component. Otherwise, it will
   * be rendered as `<ul>`.
   */
  ordered: _propTypes2.default.bool,

  /**
   * This *should* be a list of `ListItem`, `ListItemControl`, `Divider`, or
   * `Subheader`.
   */
  children: _propTypes2.default.node,

  /**
   * Boolean if the list should appear horizontally instead of vertically.
   */
  inline: _propTypes2.default.bool,
  subheader: (0, _deprecated2.default)(_propTypes2.default.string, 'Use the `Subheader` component as a child instead'),
  primarySubheader: (0, _deprecated2.default)(_propTypes2.default.bool, 'Use the `Subheader` component as a child instead')
};
List.childContextTypes = {
  listLevel: _propTypes2.default.number,
  cascadingMenu: _propTypes2.default.bool,
  cascadingFixedTo: _fixedToShape2.default,
  cascadingZDepth: _propTypes2.default.number
};
List.contextTypes = {
  listLevel: _propTypes2.default.number,
  cascadingMenu: _propTypes2.default.bool,
  cascadingFixedTo: _fixedToShape2.default,
  cascadingZDepth: _propTypes2.default.number
};
exports.default = List;

/***/ }),

/***/ "./node_modules/react-md/lib/Lists/ListItem.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-md/lib/Lists/ListItem.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _deprecated = __webpack_require__(/*! react-prop-types/lib/deprecated */ "./node_modules/react-prop-types/lib/deprecated.js");

var _deprecated2 = _interopRequireDefault(_deprecated);

var _themeColors = __webpack_require__(/*! ../utils/themeColors */ "./node_modules/react-md/lib/utils/themeColors.js");

var _themeColors2 = _interopRequireDefault(_themeColors);

var _getCollapserStyles = __webpack_require__(/*! ../utils/getCollapserStyles */ "./node_modules/react-md/lib/utils/getCollapserStyles.js");

var _getCollapserStyles2 = _interopRequireDefault(_getCollapserStyles);

var _getField = __webpack_require__(/*! ../utils/getField */ "./node_modules/react-md/lib/utils/getField.js");

var _getField2 = _interopRequireDefault(_getField);

var _controlled = __webpack_require__(/*! ../utils/PropTypes/controlled */ "./node_modules/react-md/lib/utils/PropTypes/controlled.js");

var _controlled2 = _interopRequireDefault(_controlled);

var _keyCodes = __webpack_require__(/*! ../constants/keyCodes */ "./node_modules/react-md/lib/constants/keyCodes.js");

var _anchorShape = __webpack_require__(/*! ../Helpers/anchorShape */ "./node_modules/react-md/lib/Helpers/anchorShape.js");

var _anchorShape2 = _interopRequireDefault(_anchorShape);

var _fixedToShape = __webpack_require__(/*! ../Helpers/fixedToShape */ "./node_modules/react-md/lib/Helpers/fixedToShape.js");

var _fixedToShape2 = _interopRequireDefault(_fixedToShape);

var _AccessibleFakeInkedButton = __webpack_require__(/*! ../Helpers/AccessibleFakeInkedButton */ "./node_modules/react-md/lib/Helpers/AccessibleFakeInkedButton.js");

var _AccessibleFakeInkedButton2 = _interopRequireDefault(_AccessibleFakeInkedButton);

var _Collapse = __webpack_require__(/*! ../Helpers/Collapse */ "./node_modules/react-md/lib/Helpers/Collapse.js");

var _Collapse2 = _interopRequireDefault(_Collapse);

var _Divider = __webpack_require__(/*! ../Dividers/Divider */ "./node_modules/react-md/lib/Dividers/Divider.js");

var _Divider2 = _interopRequireDefault(_Divider);

var _FontIcon = __webpack_require__(/*! ../FontIcons/FontIcon */ "./node_modules/react-md/lib/FontIcons/FontIcon.js");

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _getDeprecatedIcon = __webpack_require__(/*! ../FontIcons/getDeprecatedIcon */ "./node_modules/react-md/lib/FontIcons/getDeprecatedIcon.js");

var _getDeprecatedIcon2 = _interopRequireDefault(_getDeprecatedIcon);

var _TileAddon = __webpack_require__(/*! ./TileAddon */ "./node_modules/react-md/lib/Lists/TileAddon.js");

var _TileAddon2 = _interopRequireDefault(_TileAddon);

var _ListItemText = __webpack_require__(/*! ./ListItemText */ "./node_modules/react-md/lib/Lists/ListItemText.js");

var _ListItemText2 = _interopRequireDefault(_ListItemText);

var _List = __webpack_require__(/*! ./List */ "./node_modules/react-md/lib/Lists/List.js");

var _List2 = _interopRequireDefault(_List);

var _Menu = __webpack_require__(/*! ../Menus/Menu */ "./node_modules/react-md/lib/Menus/Menu.js");

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The `ListItem` component is used for rendering a `li` tag with text and optional
 * icons/avatars.
 */
var ListItem = function (_PureComponent) {
  _inherits(ListItem, _PureComponent);

  function ListItem(props) {
    _classCallCheck(this, ListItem);

    var _this = _possibleConstructorReturn(this, _PureComponent.call(this, props));

    _initialiseProps.call(_this);

    _this.state = { active: false };

    if (typeof props.isOpen === 'undefined' && typeof props.visible === 'undefined') {
      var defined = function defined(v) {
        return typeof v !== 'undefined';
      };
      var _this$props = _this.props,
          initiallyOpen = _this$props.initiallyOpen,
          defaultOpen = _this$props.defaultOpen,
          defaultVisible = _this$props.defaultVisible;

      var visible = defined(initiallyOpen) ? initiallyOpen : defaultVisible;
      visible = defined(defaultOpen) ? defaultOpen : visible;
      visible = !!visible;

      _this.state.visible = visible;
    }
    return _this;
  }

  ListItem.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.state.active) {
      window.removeEventListener('click', this._handleOutsideClick);
    }

    if (this._touchTimeout) {
      clearTimeout(this._touchTimeout);
    }
  };

  /**
   * A utility function to focus the `AccessibleFakeInkedButton` in the `ListItem` and also
   * inject an ink to indicate focus.
   */


  /**
   * A utility function to blur the `AccessibleFakeInkedButton` in the `ListItem`.
   */


  ListItem.prototype._renderChildrenIfInside = function _renderChildrenIfInside() {
    var _props = this.props,
        children = _props.children,
        renderChildrenOutside = _props.renderChildrenOutside;


    return !renderChildrenOutside ? children : null;
  };

  ListItem.prototype._renderChildrenIfOutside = function _renderChildrenIfOutside() {
    var _props2 = this.props,
        children = _props2.children,
        renderChildrenOutside = _props2.renderChildrenOutside;


    if (renderChildrenOutside) {
      return _react2.default.createElement(
        'div',
        { className: 'md-list-item--flex' },
        _react2.default.createElement(_Divider2.default, { vertical: true, className: 'md-list-item--divider-vertical' }),
        _react2.default.createElement(
          'div',
          { className: 'md-list-item--children-inline' },
          children
        )
      );
    }

    return null;
  };

  ListItem.prototype.render = function render() {
    var _cn;

    var _props3 = this.props,
        style = _props3.style,
        className = _props3.className,
        tileStyle = _props3.tileStyle,
        tileClassName = _props3.tileClassName,
        contentStyle = _props3.contentStyle,
        contentClassName = _props3.contentClassName,
        leftNodeStyle = _props3.leftNodeStyle,
        leftNodeClassName = _props3.leftNodeClassName,
        rightNodeStyle = _props3.rightNodeStyle,
        rightNodeClassName = _props3.rightNodeClassName,
        primaryTextStyle = _props3.primaryTextStyle,
        primaryTextClassName = _props3.primaryTextClassName,
        secondaryTextStyle = _props3.secondaryTextStyle,
        secondaryTextClassName = _props3.secondaryTextClassName,
        nestedListStyle = _props3.nestedListStyle,
        nestedListClassName = _props3.nestedListClassName,
        nestedListHeightRestricted = _props3.nestedListHeightRestricted,
        disabled = _props3.disabled,
        leftIcon = _props3.leftIcon,
        leftAvatar = _props3.leftAvatar,
        inset = _props3.inset,
        rightIcon = _props3.rightIcon,
        rightAvatar = _props3.rightAvatar,
        primaryText = _props3.primaryText,
        secondaryText = _props3.secondaryText,
        threeLines = _props3.threeLines,
        nestedItems = _props3.nestedItems,
        prependNested = _props3.prependNested,
        active = _props3.active,
        activeClassName = _props3.activeClassName,
        activeBoxStyle = _props3.activeBoxStyle,
        activeBoxClassName = _props3.activeBoxClassName,
        animateNestedItems = _props3.animateNestedItems,
        expanderIcon = _props3.expanderIcon,
        expanderLeft = _props3.expanderLeft,
        component = _props3.component,
        ItemComponent = _props3.itemComponent,
        itemProps = _props3.itemProps,
        tileProps = _props3.tileProps,
        passPropsToItem = _props3.passPropsToItem,
        ariaSize = _props3['aria-setsize'],
        ariaPos = _props3['aria-posinset'],
        renderChildrenOutside = _props3.renderChildrenOutside,
        isOpen = _props3.isOpen,
        expanderIconChildren = _props3.expanderIconChildren,
        expanderIconClassName = _props3.expanderIconClassName,
        propVisible = _props3.visible,
        defaultVisible = _props3.defaultVisible,
        itemRef = _props3.itemRef,
        defaultOpen = _props3.defaultOpen,
        initiallyOpen = _props3.initiallyOpen,
        props = _objectWithoutProperties(_props3, ['style', 'className', 'tileStyle', 'tileClassName', 'contentStyle', 'contentClassName', 'leftNodeStyle', 'leftNodeClassName', 'rightNodeStyle', 'rightNodeClassName', 'primaryTextStyle', 'primaryTextClassName', 'secondaryTextStyle', 'secondaryTextClassName', 'nestedListStyle', 'nestedListClassName', 'nestedListHeightRestricted', 'disabled', 'leftIcon', 'leftAvatar', 'inset', 'rightIcon', 'rightAvatar', 'primaryText', 'secondaryText', 'threeLines', 'nestedItems', 'prependNested', 'active', 'activeClassName', 'activeBoxStyle', 'activeBoxClassName', 'animateNestedItems', 'expanderIcon', 'expanderLeft', 'component', 'itemComponent', 'itemProps', 'tileProps', 'passPropsToItem', 'aria-setsize', 'aria-posinset', 'renderChildrenOutside', 'isOpen', 'expanderIconChildren', 'expanderIconClassName', 'visible', 'defaultVisible', 'itemRef', 'defaultOpen', 'initiallyOpen']);

    var _context = this.context,
        cascadingId = _context.cascadingId,
        cascadingMenu = _context.cascadingMenu,
        cascadingAnchor = _context.cascadingAnchor,
        cascadingFixedTo = _context.cascadingFixedTo;

    var visible = (0, _getField2.default)(this.props, this.state, 'visible');
    if (typeof isOpen !== 'undefined') {
      visible = isOpen;
    }

    var leftNode = _react2.default.createElement(_TileAddon2.default, {
      key: 'left-addon',
      style: leftNodeStyle,
      className: leftNodeClassName,
      active: active,
      activeClassName: activeClassName,
      icon: leftIcon,
      avatar: leftAvatar
    });

    var rightNode = _react2.default.createElement(_TileAddon2.default, {
      key: 'right-addon',
      style: rightNodeStyle,
      className: rightNodeClassName,
      active: active,
      activeClassName: activeClassName,
      icon: rightIcon,
      avatar: rightAvatar
    });

    var nestedList = void 0;
    if (nestedItems) {
      if (!cascadingMenu) {
        nestedList = _react2.default.createElement(
          _Collapse2.default,
          { collapsed: !visible, animate: animateNestedItems },
          _react2.default.createElement(
            _List2.default,
            { style: nestedListStyle, className: nestedListClassName },
            nestedItems
          )
        );
      }

      var icon = _react2.default.Children.only((0, _getDeprecatedIcon2.default)(expanderIconClassName, expanderIconChildren, expanderIcon));
      var collapser = _react2.default.createElement(_TileAddon2.default, {
        key: 'expander-addon',
        icon: _react2.default.cloneElement(icon, {
          className: (0, _getCollapserStyles2.default)({ flipped: visible }, icon.props.className)
        }),
        avatar: null
      });

      if (expanderLeft) {
        if (!leftIcon && !leftAvatar) {
          leftNode = collapser;
        }
      } else if (!rightIcon && !rightAvatar) {
        rightNode = collapser;
      }
    }

    var icond = !!leftIcon || !!rightIcon || !!nestedItems;
    var avatard = !!leftAvatar || !!rightAvatar;

    var tile = _react2.default.createElement(
      _AccessibleFakeInkedButton2.default,
      _extends({}, tileProps, passPropsToItem ? undefined : props, {
        component: component,
        __SUPER_SECRET_REF__: this._setTile,
        key: 'tile',
        onClick: this._handleClick,
        onMouseOver: this._handleMouseOver,
        onMouseLeave: this._handleMouseLeave,
        onTouchStart: this._handleTouchStart,
        onTouchEnd: this._handleTouchEnd,
        onKeyDown: this._handleKeyDown,
        onKeyUp: this._handleKeyUp,
        disabled: disabled,
        style: tileStyle,
        className: (0, _classnames2.default)('md-list-tile', {
          'md-list-tile--active': this.state.active && !this._touched,
          'md-list-tile--icon': !secondaryText && icond && !avatard,
          'md-list-tile--avatar': !secondaryText && avatard,
          'md-list-tile--two-lines': secondaryText && !threeLines,
          'md-list-tile--three-lines': secondaryText && threeLines,
          'md-list-item--inset': inset && !leftIcon && !leftAvatar,
          'md-list-item--button-grow': renderChildrenOutside
        }, (0, _themeColors2.default)({ disabled: disabled, text: true }), tileClassName),
        'aria-expanded': nestedList && !cascadingMenu ? visible : null
      }),
      leftNode,
      _react2.default.createElement(_ListItemText2.default, {
        active: active,
        activeClassName: activeClassName,
        disabled: disabled,
        primaryText: primaryText,
        secondaryText: secondaryText,
        threeLines: threeLines,
        style: contentStyle,
        className: (0, _classnames2.default)({
          'md-tile-content--left-icon': leftIcon || expanderLeft && nestedItems,
          'md-tile-content--left-avatar': leftAvatar,
          'md-tile-content--right-padding': rightIcon || rightAvatar
        }, contentClassName),
        primaryTextStyle: primaryTextStyle,
        primaryTextClassName: primaryTextClassName,
        secondaryTextStyle: secondaryTextStyle,
        secondaryTextClassName: secondaryTextClassName
      }),
      rightNode,
      this._renderChildrenIfInside()
    );

    var sharedProps = _extends({}, itemProps, passPropsToItem ? props : undefined, {
      style: Object.assign({}, style, active ? activeBoxStyle : null),
      className: (0, _classnames2.default)('md-list-item', (_cn = {
        'md-list-item--nested-container': nestedItems
      }, _cn[activeBoxClassName] = activeBoxClassName && active, _cn['md-list-item--flex'] = renderChildrenOutside, _cn), className),
      'aria-setsize': ariaSize,
      'aria-posinset': ariaPos,
      ref: this._setContainer
    });
    if (cascadingMenu && nestedItems) {
      return _react2.default.createElement(
        _Menu2.default,
        _extends({
          id: cascadingId,
          visible: visible,
          onClose: this._handleClick,
          toggle: tile,
          block: true,
          simplified: false,
          anchor: cascadingAnchor,
          belowAnchor: null,
          position: _Menu2.default.Positions.BELOW,
          component: ItemComponent,
          listStyle: nestedListStyle,
          listClassName: nestedListClassName,
          listHeightRestricted: nestedListHeightRestricted
        }, sharedProps, {
          fixedTo: cascadingFixedTo
        }),
        nestedItems
      );
    }

    return _react2.default.createElement(
      ItemComponent,
      sharedProps,
      prependNested ? nestedList : null,
      tile,
      this._renderChildrenIfOutside(),
      prependNested ? null : nestedList
    );
  };

  return ListItem;
}(_react.PureComponent);

ListItem.propTypes = {
  /**
   * An optional style to apply to the `li` tag.
   */
  style: _propTypes2.default.object,

  /**
   * An optional className to apply to the `li` tag.
   */
  className: _propTypes2.default.string,

  /**
   * An optional style to apply to the `.md-list-tile`.
   *
   * @see {@link #component}
   */
  tileStyle: _propTypes2.default.object,

  /**
   * An optional className to apply to the `.md-list-tile`.
   *
   * @see {@link #component}
   */
  tileClassName: _propTypes2.default.string,

  /**
   * An optional style to apply to the div that surrounds the `primaryText` and `secondaryText`
   * nodes.
   */
  contentStyle: _propTypes2.default.object,

  /**
   * An optional className to apply to the div that surrounds the `primaryText` and `secondaryText`
   * nodes.
   */
  contentClassName: _propTypes2.default.string,

  /**
   * An optional style to apply to the element that is rendered before content node.
   */
  leftNodeStyle: _propTypes2.default.object,

  /**
   * An optional className to apply to the element that is rendered before content node.
   */
  leftNodeClassName: _propTypes2.default.string,

  /**
   * An optional style to apply to the element that is rendered after content node.
   */
  rightNodeStyle: _propTypes2.default.object,

  /**
   * An optional className to apply to the element that is rendered after content node.
   */
  rightNodeClassName: _propTypes2.default.string,

  /**
   * An optional style to apply to the div surrounding the `primaryText`.
   */
  primaryTextStyle: _propTypes2.default.object,

  /**
   * An optional className to apply to the div surrounding the `primaryText`.
   */
  primaryTextClassName: _propTypes2.default.string,

  /**
   * An optional style to apply to the div surrounding the `secondaryText`.
   */
  secondaryTextStyle: _propTypes2.default.object,

  /**
   * An optional className to apply to the div surrounding the `secondaryText`.
   */
  secondaryTextClassName: _propTypes2.default.string,

  /**
   * An optional style to apply to the nested `List` that gets created when using `nestedItems`.
   */
  nestedListStyle: _propTypes2.default.object,

  /**
   * An optional className to apply to the nested `List` that gets created when using `nestedItems`.
   */
  nestedListClassName: _propTypes2.default.string,

  /**
   * Boolean if the nested `List` in a cascading menu should be restricted.
   */
  nestedListHeightRestricted: _propTypes2.default.bool,

  /**
   * Any additional children to display in the `.md-list-tile`. If you use this prop,
   * you will most likely need to override the `height` for the `.md-list-tile--icon`,
   * `.md-list-tile--avatar`, `.md-list-tile--two-lines`, and/or `.md-list-tile--three-lines`
   * to get it to display correctly unless the children are positioned `absolute`.
   */
  children: _propTypes2.default.node,

  /**
   * Boolean if the `ListItem` is disabled.
   */
  disabled: _propTypes2.default.bool,

  /**
   * An optional tab index for the `.md-list-tile`. If omitted, it will default to the
   * `AccessibleFakeButton`'s `tabIndex` default prop value.
   */
  tabIndex: _propTypes2.default.number,

  /**
   * The primary text to display. This will only be rendered as a single line. Any overflown
   * text will be converted to ellipsis.
   */
  primaryText: _propTypes2.default.node.isRequired,

  /**
   * An optional secondary text to display below the `primaryText`. This can be an additional
   * one or two lines. Like the `primaryText`, and overflown text will be converted to ellipsis.
   *
   * You must set the `threeLines` prop to `true` if you want this to be displayed as two lines.
   */
  secondaryText: _propTypes2.default.node,

  /**
   * An optional `FontIcon` to display to the left of the text.
   */
  leftIcon: _propTypes2.default.node,

  /**
   * An optional `Avatar` to display to the left of the text. If you have a mixed `List` of
   * `FontIcon` and `Avatar`, it is recommended to set the `iconSized` prop on the `Avatar` to
   * `true` so that the `Avatar` will be scaled down to the `FontIcon` size.
   */
  leftAvatar: _propTypes2.default.node,

  /**
   * An optional `FontIcon` to display to the right of the text.
   */
  rightIcon: _propTypes2.default.node,

  /**
   * An optional `Avatar` to display to the right of the text. If you have a mixed `List` of
   * `FontIcon` and `Avatar`, it is recommended to set the `iconSized` prop on the `Avatar` to
   * `true` so that the `Avatar` will be scaled down to the `FontIcon` size.
   */
  rightAvatar: _propTypes2.default.node,

  /**
   * Boolean if the list item should be inset as if there is a `leftIcon` or a `leftAvatar`.
   * This is used for some lists where only a parent contains the icon.
   */
  inset: _propTypes2.default.bool,

  /**
   * Boolean if the `secondaryText` should span two lines instead of one. This will include
   * three lines of text in total when including the `primaryText`.
   */
  threeLines: _propTypes2.default.bool,

  /**
   * The component to render the `.md-list-tile` as. This is mostly useful if you
   * want to use the `ListItem` for navigation and working with the `react-router`'s `Link`
   * component.
   *
   * This prop is **not** the top-most element of the `ListItem` component. To change the
   * top-most element, see the `itemComponent` prop.
   *
   * @see {@link #itemComponent}
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func, _propTypes2.default.object]).isRequired,

  /**
   * The component to render the top-most element of the `ListItem` component. This is the
   * `.md-list-item` and defaults to the `<li>` element.
   *
   * @see {@link #component}
   * @see {@link #itemProps}
   */
  itemComponent: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func, _propTypes2.default.object]).isRequired,

  /**
   * An optional ref callback to get reference to the top-most element of the `ListItem` component.
   * Just like other refs, this will provide null when it unmounts.
   */
  itemRef: _propTypes2.default.func,

  /**
   * An optional list of `ListItem`, `ListItemControl`, `Divider`, or `Subheader` components
   * to render in a nested list. This will inject an expander icon to the right of the text
   * in the `.md-list-tile` that rotates 180 degrees when open.
   *
   * The nested items will be visible once the user clicks on the `ListItem`.
   *
   * @see {@link #visible}
   */
  nestedItems: _propTypes2.default.arrayOf(_propTypes2.default.node),

  /**
   * An optional parameter determining whether `nestedItems` should be placed before or after `ListItemText`
   */
  prependNested: _propTypes2.default.bool,

  /**
   * Boolean if the `nestedItems` are visible by default.
   */
  defaultVisible: _propTypes2.default.bool,

  /**
   * Boolean if the `nestedItems` are visible. This will make the `nestedItems` controlled
   * and require the `onClick` function to be defined.
   *
   * @see {@link #defaultVisible}
   */
  visible: (0, _controlled2.default)(_propTypes2.default.bool, 'onClick', 'defaultVisible'),

  /**
   * An icon to use for the expander icon when there are nested items.
   */
  expanderIcon: _propTypes2.default.element,

  /**
   * Boolean if the expander icon should appear as the left icon instead of the right.
   */
  expanderLeft: _propTypes2.default.bool,

  /**
   * An optional function to call when the `.md-list-tile` is clicked. This is required if the
   * `visible` prop is defined.
   */
  onClick: _propTypes2.default.func,

  /**
   * An optional function to call when the `.md-list-tile` triggers the `mouseover` event.
   */
  onMouseOver: _propTypes2.default.func,

  /**
   * An optional function to call when the `.md-list-tile` triggers the `mouseleave` event.
   */
  onMouseLeave: _propTypes2.default.func,

  /**
   * An optional function to call when the `.md-list-tile` triggers the `touchstart` event.
   */
  onTouchStart: _propTypes2.default.func,

  /**
   * An optional function to call when the `.md-list-tile` triggers the `touchend` event.
   */
  onTouchEnd: _propTypes2.default.func,

  /**
   * An optional function to call when the `.md-list-tile` triggers the `keydown` event.
   */
  onKeyDown: _propTypes2.default.func,

  /**
   * An optional function to call when the `.md-list-tile` triggers the `keyup` event.
   */
  onKeyUp: _propTypes2.default.func,

  /**
   * Boolean if the `ListItem` is currently active. This will apply the `activeClassName` prop
   * to the `leftIcon`, `rightIcon`, and the `primaryText`.
   */
  active: _propTypes2.default.bool,

  /**
   * The className to apply to the `leftIcon`, `rightIcon`, and `primaryText` when the `active`
   * prop is `true`.
   */
  activeClassName: _propTypes2.default.string,

  /**
   * An optional style to apply to the top-most element of the `ListItem` component (`.md-list-item`)
   * when the `active` prop is `true`.
   */
  activeBoxStyle: _propTypes2.default.object,

  /**
   * The className to apply to the top-most element of the `ListItem` component (`.md-list-item`)
   * when the `active` prop is `true`.
   */
  activeBoxClassName: _propTypes2.default.string,

  /**
   * Boolean if the nested items should animate when they appear or disappear.
   */
  animateNestedItems: _propTypes2.default.bool,

  /**
   * Boolean if the children should be rendered outside auf the AccessibleFakeButton component.
   */
  renderChildrenOutside: _propTypes2.default.bool,

  /**
   * Defines the number of items in the list. This is only required when all items in the
   * list are not present in the DOM.
   *
   * @see https://www.w3.org/TR/wai-aria/states_and_properties#aria-setsize
   */
  'aria-setsize': _propTypes2.default.number,

  /**
   * Defines the items position in the list. This is only required when all items in the list
   * are not present in the DOM. The custom validation just requires this prop if the `aria-setsize`
   * prop is defined as a helpful reminder.
   *
   * @see https://www.w3.org/TR/wai-aria/states_and_properties#aria-posinset
   */
  'aria-posinset': function ariaPosinset(props, propName) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    var validator = _propTypes2.default.number;
    if (typeof props['aria-setsize'] !== 'undefined') {
      validator = validator.isRequired;
    }

    return validator.apply(undefined, [props, propName].concat(args));
  },

  /**
   * Any additional props you would like to supply to the surrounding `<li>` tag for the `ListItem`.
   * By default, all props will be provided to the inner `AccessibleFakeButton`. If the `passPropsToItem`
   * prop is enabled, the remaining props will be provided to the `<li>` tag instead and this prop
   * is probably useless.
   */
  itemProps: _propTypes2.default.object,

  /**
   * Any additional props you would like to add to the inner `AccessibleFakeButton`. By default, all the
   * remaining props will be provided to the `AccessibleFakeButton`, so this prop is probably useless.
   * Enabling the `passPropsToItem` prop will change the default behavior so that the remaining props
   * are provided to the surrounding `<li>` node instead and this prop becomes useful.
   */
  tileProps: _propTypes2.default.object,

  /**
   * All the remaining props should be passed to the surrounding `<li>` node instead of the `AccessibleFakeButton`.
   *
   * > NOTE: This will most likely become the default in the next *major* release. Migration warnings will be added
   * if that is the case.
   */
  passPropsToItem: _propTypes2.default.bool,
  expanderIconChildren: (0, _deprecated2.default)(_propTypes2.default.node, 'Use `expanderIcon` instead'),
  expanderIconClassName: (0, _deprecated2.default)(_propTypes2.default.string, 'Use `expanderIcon` instead'),
  initiallyOpen: (0, _deprecated2.default)(_propTypes2.default.bool, 'Use `defaultVisible` instead'),
  defaultOpen: (0, _deprecated2.default)(_propTypes2.default.bool, 'Use `defaultVisible` instead'),
  isOpen: (0, _deprecated2.default)(_propTypes2.default.bool, 'Use `visible` instead')
};
ListItem.defaultProps = {
  animateNestedItems: true,
  activeClassName: 'md-text--theme-primary',
  component: 'div',
  itemComponent: 'li',
  expanderIcon: _react2.default.createElement(
    _FontIcon2.default,
    null,
    'keyboard_arrow_down'
  ),
  renderChildrenOutside: false
};
ListItem.contextTypes = {
  cascadingId: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  cascadingMenu: _propTypes2.default.bool,
  cascadingAnchor: _anchorShape2.default,
  cascadingFixedTo: _fixedToShape2.default
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.focus = function () {
    if (_this2._tile) {
      _this2._tile.focus();
    }
  };

  this.blur = function () {
    if (_this2._tile) {
      _this2._tile.blur();
    }
  };

  this._setTile = function (tile) {
    if (tile) {
      _this2._tile = tile;
      _this2._tileNode = (0, _reactDom.findDOMNode)(tile);
    }
  };

  this._setContainer = function (container) {
    var itemRef = _this2.props.itemRef;

    if (container) {
      _this2._container = (0, _reactDom.findDOMNode)(container);
    }
    if (itemRef) {
      itemRef(container ? _this2._container : null);
    }
  };

  this._handleOutsideClick = function (e) {
    if (_this2._container && !_this2._container.contains(e.target)) {
      window.removeEventListener('click', _this2._handleOutsideClick);
      _this2.setState({ active: false });
    }
  };

  this._handleClick = function (e) {
    if (_this2.props.onClick) {
      _this2.props.onClick(e);
    }

    if (typeof _this2.state.visible !== 'undefined') {
      _this2.setState({ visible: !_this2.state.visible });
    }
  };

  this._handleMouseOver = function (e) {
    if (_this2.props.onMouseOver) {
      _this2.props.onMouseOver(e);
    }

    if (!_this2.props.disabled) {
      _this2.setState({ active: true });
    }
  };

  this._handleMouseLeave = function (e) {
    if (_this2.props.onMouseLeave) {
      _this2.props.onMouseLeave(e);
    }

    if (!_this2.props.disabled) {
      _this2.setState({ active: false });
    }
  };

  this._handleTouchStart = function (e) {
    if (_this2.props.onTouchStart) {
      _this2.props.onTouchStart(e);
    }

    _this2._touched = true;

    _this2.setState({ active: true, touchedAt: Date.now() });
  };

  this._handleTouchEnd = function (e) {
    if (_this2.props.onTouchEnd) {
      _this2.props.onTouchEnd(e);
    }

    var time = Date.now() - _this2.state.touchedAt;
    _this2._touchTimeout = setTimeout(function () {
      _this2._touchTimeout = null;

      _this2.setState({ active: false });
    }, time > 450 ? 0 : 450 - time);
  };

  this._handleKeyUp = function (e) {
    if (_this2.props.onKeyUp) {
      _this2.props.onKeyUp(e);
    }

    if ((e.which || e.keyCode) === _keyCodes.TAB) {
      window.addEventListener('click', _this2._handleOutsideClick);
      _this2.setState({ active: true });
    }
  };

  this._handleKeyDown = function (e) {
    if (_this2.props.onKeyDown) {
      _this2.props.onKeyDown(e);
    }

    if ((e.which || e.keyCode) === _keyCodes.TAB) {
      window.removeEventListener('click', _this2._handleOutsideClick);
      _this2.setState({ active: false });
    }
  };
};

exports.default = ListItem;

/***/ }),

/***/ "./node_modules/react-md/lib/Lists/ListItemText.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-md/lib/Lists/ListItemText.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _themeColors = __webpack_require__(/*! ../utils/themeColors */ "./node_modules/react-md/lib/utils/themeColors.js");

var _themeColors2 = _interopRequireDefault(_themeColors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The `ListItemText` component is used to render the `primaryText` and an optional
 * `secondaryText` for a `ListItem`.
 */
var ListItemText = function (_PureComponent) {
  _inherits(ListItemText, _PureComponent);

  function ListItemText() {
    _classCallCheck(this, ListItemText);

    return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
  }

  ListItemText.prototype.render = function render() {
    var _cn;

    var _props = this.props,
        active = _props.active,
        activeClassName = _props.activeClassName,
        disabled = _props.disabled,
        primaryText = _props.primaryText,
        primaryTextStyle = _props.primaryTextStyle,
        primaryTextClassName = _props.primaryTextClassName,
        secondaryText = _props.secondaryText,
        secondaryTextStyle = _props.secondaryTextStyle,
        secondaryTextClassName = _props.secondaryTextClassName,
        className = _props.className,
        threeLines = _props.threeLines,
        props = _objectWithoutProperties(_props, ['active', 'activeClassName', 'disabled', 'primaryText', 'primaryTextStyle', 'primaryTextClassName', 'secondaryText', 'secondaryTextStyle', 'secondaryTextClassName', 'className', 'threeLines']);

    var secondaryTextNode = void 0;
    if (secondaryText) {
      secondaryTextNode = _react2.default.createElement(
        'div',
        {
          style: secondaryTextStyle,
          className: (0, _classnames2.default)('md-tile-text--secondary', {
            'md-tile-text--three-lines': threeLines
          }, (0, _themeColors2.default)({ disabled: disabled, hint: !disabled }), secondaryTextClassName)
        },
        secondaryText
      );
    }

    return _react2.default.createElement(
      'div',
      _extends({}, props, { className: (0, _classnames2.default)('md-tile-content', className) }),
      _react2.default.createElement(
        'div',
        {
          style: primaryTextStyle,
          className: (0, _classnames2.default)('md-tile-text--primary', (_cn = {}, _cn[activeClassName] = !disabled && active, _cn), (0, _themeColors2.default)({ disabled: disabled, text: !active }), primaryTextClassName)
        },
        primaryText
      ),
      secondaryTextNode
    );
  };

  return ListItemText;
}(_react.PureComponent);

ListItemText.propTypes = {
  active: _propTypes2.default.bool,
  activeClassName: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  primaryText: _propTypes2.default.node.isRequired,
  primaryTextStyle: _propTypes2.default.object,
  primaryTextClassName: _propTypes2.default.string,
  secondaryText: _propTypes2.default.node,
  secondaryTextStyle: _propTypes2.default.object,
  secondaryTextClassName: _propTypes2.default.string,
  className: _propTypes2.default.string,
  threeLines: _propTypes2.default.bool
};
exports.default = ListItemText;

/***/ }),

/***/ "./node_modules/react-md/lib/Lists/TileAddon.js":
/*!******************************************************!*\
  !*** ./node_modules/react-md/lib/Lists/TileAddon.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The `TileAddon` component is used to render either a `FontIcon` or an `Avatar`
 * next to the `ListTileText` for a `ListItem`.
 */
var TileAddon = function (_PureComponent) {
  _inherits(TileAddon, _PureComponent);

  function TileAddon() {
    _classCallCheck(this, TileAddon);

    return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
  }

  TileAddon.prototype.render = function render() {
    var _cn;

    var _props = this.props,
        icon = _props.icon,
        avatar = _props.avatar,
        active = _props.active,
        activeClassName = _props.activeClassName,
        style = _props.style,
        className = _props.className;

    if (!icon && !avatar) {
      return null;
    }

    var avatarIcon = false;
    if (avatar) {
      var avatarChild = _react2.default.Children.only(avatar);
      if (avatarChild.props.iconSized) {
        avatarIcon = true;
      }
    }
    return _react2.default.createElement(
      'div',
      {
        style: style,
        className: (0, _classnames2.default)('md-tile-addon', (_cn = {
          'md-tile-addon--icon': icon || avatarIcon,
          'md-tile-addon--avatar': avatar && !avatarIcon
        }, _cn[activeClassName] = active, _cn), className)
      },
      icon || avatar
    );
  };

  return TileAddon;
}(_react.PureComponent);

TileAddon.propTypes = {
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  active: _propTypes2.default.bool,
  activeClassName: _propTypes2.default.string,
  icon: _propTypes2.default.node,
  avatar: _propTypes2.default.node
};
exports.default = TileAddon;

/***/ }),

/***/ "./node_modules/react-md/lib/Menus/Menu.js":
/*!*************************************************!*\
  !*** ./node_modules/react-md/lib/Menus/Menu.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _deprecated = __webpack_require__(/*! react-prop-types/lib/deprecated */ "./node_modules/react-prop-types/lib/deprecated.js");

var _deprecated2 = _interopRequireDefault(_deprecated);

var _isRequiredForA11y = __webpack_require__(/*! react-prop-types/lib/isRequiredForA11y */ "./node_modules/react-prop-types/lib/isRequiredForA11y.js");

var _isRequiredForA11y2 = _interopRequireDefault(_isRequiredForA11y);

var _CSSTransitionGroupTick = __webpack_require__(/*! ../constants/CSSTransitionGroupTick */ "./node_modules/react-md/lib/constants/CSSTransitionGroupTick.js");

var _CSSTransitionGroupTick2 = _interopRequireDefault(_CSSTransitionGroupTick);

var _getField = __webpack_require__(/*! ../utils/getField */ "./node_modules/react-md/lib/utils/getField.js");

var _getField2 = _interopRequireDefault(_getField);

var _handleKeyboardAccessibility = __webpack_require__(/*! ../utils/EventUtils/handleKeyboardAccessibility */ "./node_modules/react-md/lib/utils/EventUtils/handleKeyboardAccessibility.js");

var _handleKeyboardAccessibility2 = _interopRequireDefault(_handleKeyboardAccessibility);

var _anchorShape = __webpack_require__(/*! ../Helpers/anchorShape */ "./node_modules/react-md/lib/Helpers/anchorShape.js");

var _anchorShape2 = _interopRequireDefault(_anchorShape);

var _fixedToShape = __webpack_require__(/*! ../Helpers/fixedToShape */ "./node_modules/react-md/lib/Helpers/fixedToShape.js");

var _fixedToShape2 = _interopRequireDefault(_fixedToShape);

var _positionShape = __webpack_require__(/*! ../Helpers/positionShape */ "./node_modules/react-md/lib/Helpers/positionShape.js");

var _positionShape2 = _interopRequireDefault(_positionShape);

var _Layover = __webpack_require__(/*! ../Helpers/Layover */ "./node_modules/react-md/lib/Helpers/Layover.js");

var _Layover2 = _interopRequireDefault(_Layover);

var _List = __webpack_require__(/*! ../Lists/List */ "./node_modules/react-md/lib/Lists/List.js");

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The `Menu` controlled component is used to display a list of children in the `List`
 * component once the `visible` prop is true.
 */
var Menu = function (_PureComponent) {
  _inherits(Menu, _PureComponent);

  function Menu() {
    var _temp, _this, _ret;

    _classCallCheck(this, Menu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _PureComponent.call.apply(_PureComponent, [this].concat(args))), _this), _this._handleClose = function (e) {
      var _this$props = _this.props,
          close = _this$props.close,
          onClose = _this$props.onClose;

      if (close || onClose) {
        (close || onClose)(e);
      }
    }, _this._handleClick = function (e) {
      if (_this.props.onClick) {
        _this.props.onClick(e);
      }

      var node = e.target;
      while (_this._container && _this._container.contains(node)) {
        if (_this._isIgnoreTarget(node)) {
          return;
        } else if (_this._isCloseTarget(node)) {
          e.persist();
          // set a timeout so item click events still trigger, and then close
          _this._timeout = setTimeout(function () {
            _this._timeout = null;
            _this._handleClose(e);
          }, _CSSTransitionGroupTick2.default);

          return;
        }

        node = node.parentNode;
      }
    }, _this._handleKeyDown = function (e) {
      if (_this.props.onKeyDown) {
        _this.props.onKeyDown(e);
      }

      (0, _handleKeyboardAccessibility2.default)(e, _this._handleClick, true, true);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Menu.prototype.getChildContext = function getChildContext() {
    var _props = this.props,
        cascading = _props.cascading,
        id = _props.id,
        fixedTo = _props.fixedTo,
        cascadingAnchor = _props.cascadingAnchor;

    var listLevel = this.context.listLevel || 0;
    var cascadingMenu = typeof cascading !== 'undefined' ? cascading : this.context.cascadingMenu;
    var cascadingZDepth = (0, _getField2.default)(this.context, this.props, 'cascadingZDepth');
    var cascadingFixedTo = typeof fixedTo !== 'undefined' ? fixedTo : this.context.cascadingFixedTo;

    return {
      listLevel: listLevel,
      cascadingId: id + '-level-' + (listLevel + 1),
      cascadingMenu: cascadingMenu,
      cascadingAnchor: cascadingAnchor,
      cascadingZDepth: cascadingZDepth,
      cascadingFixedTo: cascadingFixedTo
    };
  };

  Menu.prototype.componentDidMount = function componentDidMount() {
    this._container = (0, _reactDom.findDOMNode)(this);
  };

  Menu.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this._timeout) {
      clearTimeout(this._timeout);
    }
  };

  /**
   * Checks if a provided event target or HTML Element is considered a menu click target.
   * This normally is just a ListItem.
   */
  Menu.prototype._isCloseTarget = function _isCloseTarget(target) {
    return target.classList.contains('md-list-item') && !target.classList.contains('md-list-item--nested-container');
  };

  /**
   * Checks if a provided event target or HTML Element is something that should shortcut/break
   * out of the click event loop because it **should not** close menus when clicked.
   */


  Menu.prototype._isIgnoreTarget = function _isIgnoreTarget(target) {
    return target.getAttribute('disabled') !== null || target.classList.contains('md-list-control');
  };

  Menu.prototype.render = function render() {
    var _cn;

    var _props2 = this.props,
        id = _props2.id,
        className = _props2.className,
        listStyle = _props2.listStyle,
        listClassName = _props2.listClassName,
        visible = _props2.visible,
        children = _props2.children,
        listProps = _props2.listProps,
        listZDepth = _props2.listZDepth,
        listInline = _props2.listInline,
        listHeightRestricted = _props2.listHeightRestricted,
        cascading = _props2.cascading,
        sameWidth = _props2.sameWidth,
        simplified = _props2.simplified,
        contained = _props2.contained,
        isOpen = _props2.isOpen,
        propFixedTo = _props2.fixedTo,
        propListId = _props2.listId,
        cascadingAnchor = _props2.cascadingAnchor,
        cascadingZDepth = _props2.cascadingZDepth,
        onClose = _props2.onClose,
        propPosition = _props2.position,
        close = _props2.close,
        autoclose = _props2.autoclose,
        limitHeight = _props2.limitHeight,
        expanderIconChildren = _props2.expanderIconChildren,
        expanderIconClassName = _props2.expanderIconClassName,
        props = _objectWithoutProperties(_props2, ['id', 'className', 'listStyle', 'listClassName', 'visible', 'children', 'listProps', 'listZDepth', 'listInline', 'listHeightRestricted', 'cascading', 'sameWidth', 'simplified', 'contained', 'isOpen', 'fixedTo', 'listId', 'cascadingAnchor', 'cascadingZDepth', 'onClose', 'position', 'close', 'autoclose', 'limitHeight', 'expanderIconChildren', 'expanderIconClassName']);

    var _props3 = this.props,
        listId = _props3.listId,
        position = _props3.position;

    if (!listId) {
      listId = id + '-list';
    }

    // can't have a simplified menu for cascading and context menus
    var simple = !cascading && !props.onContextMenu && position !== 'context' && simplified;
    if (position === 'context') {
      position = Menu.Positions.BELOW;
    }

    var below = position === Menu.Positions.BELOW;
    var fixedTo = typeof propFixedTo !== 'undefined' ? propFixedTo : this.context.cascadingFixedTo;
    var listVisible = typeof isOpen !== 'undefined' ? isOpen : visible;
    return _react2.default.createElement(
      _Layover2.default,
      _extends({}, props, {
        id: id,
        className: (0, _classnames2.default)('md-menu-container', {
          'md-menu-container--menu-below': simplified && below
        }, className),
        simplified: simple,
        sameWidth: contained || sameWidth,
        fixedTo: fixedTo,
        onClick: this._handleClick,
        onKeyDown: this._handleKeyDown,
        onClose: this._handleClose,
        animationPosition: position,
        visible: listVisible,
        'aria-haspopup': true,
        'aria-expanded': listVisible,
        'aria-owns': listId
      }),
      _react2.default.createElement(
        _List2.default,
        _extends({}, listProps, {
          id: listId,
          key: 'menu-list',
          style: listStyle,
          className: (0, _classnames2.default)('md-list--menu', (_cn = {
            'md-list--menu-restricted': listHeightRestricted,
            'md-list--menu-contained': simplified && (sameWidth || contained)
          }, _cn['md-list--menu-' + position] = simplified, _cn['md-paper md-paper--' + listZDepth] = listZDepth, _cn), listClassName),
          inline: listInline
        }),
        children
      )
    );
  };

  return Menu;
}(_react.PureComponent);

Menu.HorizontalAnchors = _Layover2.default.HorizontalAnchors;
Menu.VerticalAnchors = _Layover2.default.VerticalAnchors;
Menu.Positions = {
  // Can't do ...Layover.Positions since it triggers the get for CONTEXT
  TOP_LEFT: _Layover2.default.Positions.TOP_LEFT,
  TOP_RIGHT: _Layover2.default.Positions.TOP_RIGHT,
  BOTTOM_LEFT: _Layover2.default.Positions.BOTTOM_LEFT,
  BOTTOM_RIGHT: _Layover2.default.Positions.BOTTOM_RIGHT,
  BELOW: _Layover2.default.Positions.BELOW,
  _warned: false,
  get CONTEXT() {
    if (!this._warned) {
      /* eslint-disable no-console */
      console.error('The `Menu.Positions.CONTEXT` position has been deprecated and will be removed ' + 'in the next major release. To make the `Menu` behave as a context menu, provide ' + 'the `onContextMenu` prop instead.');
      /* eslint-enable no-console */
    }

    this._warned = true;
    return 'context';
  }
};
Menu.propTypes = {
  /**
   * An id to provide to the menu's container. This is required for accessibility as it generates
   * the `aria-` attributes for dynamic content.
   *
   * @see {@link #listId}
   */
  id: (0, _isRequiredForA11y2.default)(_propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])),

  /**
   * An optional id to provide to the menu's list. If this prop is omitted, the list's id will be
   * `\`${id}-list\``
   */
  listId: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  /**
   * An optional style to apply to the main container for the menu.
   */
  style: _propTypes2.default.object,

  /**
   * An optional class name to apply to the main container for the menu.
   */
  className: _propTypes2.default.string,

  /**
   * An optional style to apply to the list once the menu has opened.
   */
  listStyle: _propTypes2.default.object,

  /**
   * An optional class name to apply to the list once the menu has opened.
   */
  listClassName: _propTypes2.default.string,

  /**
   * The component to render the main container as.
   *
   * @see {@link Helpers/Layover#component}
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func, _propTypes2.default.object]),

  /**
   * This is how the menu's `List` gets anchored to the `toggle` element.
   *
   * @see {@link Helpers/Layover#anchor}
   */
  anchor: _anchorShape2.default,

  /**
   * This is the optional anchor to use when the `position` is set to `Menu.Positions.BELOW`.
   * Set this to `null` to use the default `anchor` prop.
   *
   * @see {@link Helpers/Layover#belowAnchor}
   */
  belowAnchor: _anchorShape2.default,

  /**
   * This is the animation position for the list that appears.
   *
   * @see {@link Helpers/Layover#animationPosition}
   */
  position: _positionShape2.default,

  /**
   * This is the component/element that should toggle the menu open.
   *
   * @see {@link Helpers/Layover#toggle}
   */
  toggle: _propTypes2.default.node,

  /**
   * This is how the menu's list will be "fixed" to the `toggle` component.
   *
   * @see {@link Helpers/Layover#fixedTo}
   */
  fixedTo: _fixedToShape2.default,

  /**
   * Any additional props that should be applied to the list in the menu. This is really used
   * when additional `aria-` tags need to be applied.
   */
  listProps: _propTypes2.default.object,

  /**
   * Boolean if the menu's list should appear horizontally instead of vertically.
   */
  listInline: _propTypes2.default.bool,

  /**
   * The list's z-depth for applying box shadow. This should be a number from 0 to 5.
   */
  listZDepth: _propTypes2.default.number.isRequired,

  /**
   * Boolean if the list should have its height restricted to the `$md-menu-mobile-max-height`/
   * `$md-menu-desktop-max-height` values.
   *
   * @see [md-menu-mobile-max-height](/components/menus?tab=2#variable-md-menu-mobile-max-height)
   * @see [md-menu-desktop-max-height](/components/menus?tab=2#variable-md-menu-desktop-max-height)
   */
  listHeightRestricted: _propTypes2.default.bool,

  /**
   * Boolean if the menu's list is visible.
   */
  visible: _propTypes2.default.bool.isRequired,

  /**
   * Any children to render in the menu's list. This _should_ normally be `ListItem`, or
   * `ListItemControl`.
   */
  children: _propTypes2.default.node,

  /**
   * An optional function to call when en element in the menu has been clicked.
   */
  onClick: _propTypes2.default.func,

  /**
   * An optional function to call when a key is pressed anywhere in the menu.
   */
  onKeyDown: _propTypes2.default.func,

  /**
   * A function to call to close the menu. This is used for closing on outside clicks,
   * closing when a list item has been clicked, or the user presses escape.
   */
  onClose: _propTypes2.default.func.isRequired,

  /**
   * Boolean if the menu should be cascading. This means that the menu will pop the additional
   * `nestedItems` on any `ListItem` to be appear either to the right or left of the visible list.
   */
  cascading: _propTypes2.default.bool,

  /**
   * This is how the cascading lists get anchored to the list item.
   *
   * @see {@link Helpers/Layover#anchor}
   */
  cascadingAnchor: _Layover2.default.propTypes.anchor,

  /**
   * This is the z-depth the list should gain for a cascading menu. This only gets applied on
   * items that are more than 1 level deep.
   */
  cascadingZDepth: _propTypes2.default.number.isRequired,

  /**
   * Boolean if the `md-full-width` class name should get applied to the menu's container.
   */
  fullWidth: _propTypes2.default.bool,

  /**
   * Boolean if the menu should be displayed as a block instead of as an inline block.
   *
   * @see {@link #fullWidth}
   */
  block: _propTypes2.default.bool,

  /**
   * @see {@link Helpers/Layover#centered}
   */
  centered: _Layover2.default.propTypes.centered,

  /**
   * @see {@link Helpers/Layover#sameWidth}
   */
  sameWidth: _Layover2.default.propTypes.sameWidth,

  /**
   * If you would like the menu to interact as a context menu, provide this prop.
   *
   * @see {@link Helpers/Layover#onContextMenu}
   */
  onContextMenu: _Layover2.default.propTypes.onContextMenu,

  /**
   * Boolean if the default behavior of the context menu should be prevented when using the
   * `onContextMenu` prop.
   *
   * @see {@link Helpers/Layover#preventContextMenu}
   */
  preventContextMenu: _Layover2.default.propTypes.preventContextMenu,

  /**
   * @see {@link Helpers/Layover#xThreshold}
   */
  xThreshold: _propTypes2.default.number,

  /**
   * @see {@link Helpers/Layover#yThreshold}
   */
  yThreshold: _propTypes2.default.number,

  /**
   * @see {@link Helpers/Layover#closeOnOutsideClick}
   */
  closeOnOutsideClick: _propTypes2.default.bool,

  /**
   * @see {@link Helpers/Layover#toggleQuery}
   */
  toggleQuery: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object, _propTypes2.default.string]),

  /**
   * An optional transition name to use for the list appearing/disappearing.
   *
   * @see {@link Helpers/Layover#transitionName}
   */
  transitionName: _propTypes2.default.string,

  /**
   * @see {@link Helpers/Layover#transitionEnterTimeout}
   */
  transitionEnterTimeout: _propTypes2.default.number,

  /**
   * @see {@link Helpers/Layover#transitionLeaveTimeout}
   */
  transitionLeaveTimeout: _propTypes2.default.number,

  /**
   * Boolean if the menu should automatically try to reposition itself to stay within
   * the viewport when the `fixedTo` element scrolls.
   *
   * @see {@link Helpers/Layover#repositionOnScroll}
   */
  repositionOnScroll: _propTypes2.default.bool,

  /**
   * Boolean if the menu should automatically try to reposition itself to stay within
   * the viewport when the window resizes.
   *
   * @see {@link Helpers/Layover#repositionOnResize}
   */
  repositionOnResize: _propTypes2.default.bool,

  /**
   * @see {@link Helpers/Layover#simplified}
   */
  simplified: _propTypes2.default.bool,

  /**
   * @see {@link Helpers/Layover#minLeft}
   */
  minLeft: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  /**
   * @see {@link Helpers/Layover#minRight}
   */
  minRight: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  /**
   * @see {@link Helpers/Layover#minBottom}
   */
  minBottom: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  /**
   * @see {@link Helpers/Layover#fillViewportWidth}
   */
  fillViewportWidth: _propTypes2.default.bool,

  /**
   * @see {@link Helpers/Layover#fillViewportHeight}
   */
  fillViewportHeight: _propTypes2.default.bool,

  isOpen: (0, _deprecated2.default)(_propTypes2.default.bool, 'Use `visible` instead'),
  close: (0, _deprecated2.default)(_propTypes2.default.func, 'Use `onClose` instead'),
  autoclose: (0, _deprecated2.default)(_propTypes2.default.bool, 'The menus will always autoclose as according to the specs'),
  contained: (0, _deprecated2.default)(_propTypes2.default.bool, 'Use `sameWidth` instead'),
  limitHeight: (0, _deprecated2.default)(_propTypes2.default.bool, 'The menus will always be limited in height as according to the specs'),
  expanderIconClassName: (0, _deprecated2.default)(_propTypes2.default.node, 'The expander for cascading menus will now just be a simple rotate of the existing `ListItem` ' + 'expander icon'),
  expanderIconChildren: (0, _deprecated2.default)(_propTypes2.default.node, 'The expander for cascading menus will now just be a simple rotate of the existing `ListItem` ' + 'expander icon')
};
Menu.defaultProps = {
  anchor: {
    x: _Layover2.default.HorizontalAnchors.INNER_RIGHT,
    y: _Layover2.default.VerticalAnchors.OVERLAP
  },
  cascadingAnchor: {
    x: _Layover2.default.HorizontalAnchors.RIGHT,
    y: _Layover2.default.VerticalAnchors.OVERLAP
  },
  position: _Layover2.default.Positions.TOP_RIGHT,
  fixedTo: typeof window !== 'undefined' ? window : {},
  listZDepth: 2,
  listHeightRestricted: true,
  cascadingZDepth: 3,
  repositionOnScroll: true,
  repositionOnResize: false,
  simplified: true
};
Menu.contextTypes = {
  listLevel: _propTypes2.default.number,
  cascadingId: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  cascadingMenu: _propTypes2.default.bool,
  cascadingAnchor: _anchorShape2.default,
  cascadingZDepth: _propTypes2.default.number
};
Menu.childContextTypes = {
  listLevel: _propTypes2.default.number,
  cascadingId: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  cascadingMenu: _propTypes2.default.bool,
  cascadingFixedTo: _fixedToShape2.default,
  cascadingAnchor: _anchorShape2.default,
  cascadingZDepth: _propTypes2.default.number
};
exports.default = Menu;

/***/ }),

/***/ "./node_modules/react-md/lib/NavigationDrawers/CloseButton.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-md/lib/NavigationDrawers/CloseButton.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = __webpack_require__(/*! ../Buttons/Button */ "./node_modules/react-md/lib/Buttons/Button.js");

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A button used to close the persistent navigation drawer. The button will
 * be generated based on the `NavigationDrawer`'s `contextTypes`.
 *
 * This component is really only used if you are using a `persistent` drawer and you
 * manually created the `drawerHeader` for the `NavigationDrawer`.
 */
var CloseButton = function (_PureComponent) {
  _inherits(CloseButton, _PureComponent);

  function CloseButton() {
    var _temp, _this, _ret;

    _classCallCheck(this, CloseButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _PureComponent.call.apply(_PureComponent, [this].concat(args))), _this), _this._handleClick = function (e) {
      if (_this.props.onClick) {
        _this.props.onClick(e);
      }

      if (_this.context.onCloseClick) {
        _this.context.onCloseClick(e);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  CloseButton.prototype.render = function render() {
    var closeIcon = this.context.closeIcon;


    return _react2.default.createElement(_Button2.default, _extends({}, this.props, {
      icon: true,
      key: 'close',
      onClick: this._handleClick,
      iconEl: closeIcon
    }));
  };

  return CloseButton;
}(_react.PureComponent);

CloseButton.propTypes = {
  /**
   * An optional className to apply.
   */
  className: _propTypes2.default.string,

  /**
   * An optional additional function to call when the `click` event is triggered.
   */
  onClick: _propTypes2.default.func
};
CloseButton.contextTypes = {
  closeIcon: _propTypes2.default.element,
  onCloseClick: _propTypes2.default.func
};
exports.default = CloseButton;

/***/ }),

/***/ "./node_modules/react-md/lib/NavigationDrawers/JumpToContentLink.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-md/lib/NavigationDrawers/JumpToContentLink.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This is an accessibility only component that should be used in the `NavigationDrawer`
 * component. It allows keyboard users to quickly jump to the main content.
 *
 * This component relies on the `contextTypes` of the `NavigationDrawer` to work. If this is going
 * to be used outside of that component, you will need to specify an `id` and `label` contextType
 * to pass to this component.
 */
var JumpToContentLink = function (_PureComponent) {
  _inherits(JumpToContentLink, _PureComponent);

  function JumpToContentLink() {
    var _temp, _this, _ret;

    _classCallCheck(this, JumpToContentLink);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _PureComponent.call.apply(_PureComponent, [this].concat(args))), _this), _this._handleClick = function (e) {
      if (_this.props.onClick) {
        _this.props.onClick(e);
      }

      document.getElementById(_this.context.id).focus();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  JumpToContentLink.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        props = _objectWithoutProperties(_props, ['className']);

    var _context = this.context,
        id = _context.id,
        label = _context.label;

    return _react2.default.createElement(
      'a',
      _extends({}, props, {
        id: 'jump-to-' + id,
        href: '#' + id,
        onClick: this._handleClick,
        className: (0, _classnames2.default)('md-content-jump', className)
      }),
      label
    );
  };

  return JumpToContentLink;
}(_react.PureComponent);

JumpToContentLink.propTypes = {
  /**
   * An optional className to apply.
   */
  className: _propTypes2.default.string,

  /**
   * An optional function to call when the linked is clicked.
   */
  onClick: _propTypes2.default.func
};
JumpToContentLink.contextTypes = {
  id: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]).isRequired,
  label: _propTypes2.default.node.isRequired
};
exports.default = JumpToContentLink;

/***/ }),

/***/ "./node_modules/react-md/lib/NavigationDrawers/MiniListItem.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-md/lib/NavigationDrawers/MiniListItem.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _AccessibleFakeInkedButton = __webpack_require__(/*! ../Helpers/AccessibleFakeInkedButton */ "./node_modules/react-md/lib/Helpers/AccessibleFakeInkedButton.js");

var _AccessibleFakeInkedButton2 = _interopRequireDefault(_AccessibleFakeInkedButton);

var _TileAddon = __webpack_require__(/*! ../Lists/TileAddon */ "./node_modules/react-md/lib/Lists/TileAddon.js");

var _TileAddon2 = _interopRequireDefault(_TileAddon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MiniListItem = function (_PureComponent) {
  _inherits(MiniListItem, _PureComponent);

  function MiniListItem() {
    var _temp, _this, _ret;

    _classCallCheck(this, MiniListItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _PureComponent.call.apply(_PureComponent, [this].concat(args))), _this), _this.state = { active: false }, _this._handleMouseOver = function (e) {
      if (_this.props.onMouseOver) {
        _this.props.onMouseOver(e);
      }

      if (!_this.props.disabled) {
        _this.setState({ active: true });
      }
    }, _this._handleMouseLeave = function (e) {
      if (_this.props.onMouseLeave) {
        _this.props.onMouseLeave(e);
      }

      if (!_this.props.disabled) {
        _this.setState({ active: false });
      }
    }, _this._handleTouchStart = function (e) {
      if (_this.props.onTouchStart) {
        _this.props.onTouchStart(e);
      }

      _this._touched = true;

      _this.setState({ active: true, touchedAt: Date.now() });
    }, _this._handleTouchEnd = function (e) {
      if (_this.props.onTouchEnd) {
        _this.props.onTouchEnd(e);
      }

      var time = Date.now() - _this.state.touchedAt;
      _this._touchTimeout = setTimeout(function () {
        _this._touchTimeout = null;

        _this.setState({ active: false });
      }, time > 450 ? 0 : 450 - time);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  MiniListItem.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this._touchTimeout) {
      clearTimeout(this._touchTimeout);
    }
  };

  MiniListItem.prototype.render = function render() {
    var _props = this.props,
        style = _props.style,
        className = _props.className,
        tileStyle = _props.tileStyle,
        tileClassName = _props.tileClassName,
        leftIcon = _props.leftIcon,
        leftAvatar = _props.leftAvatar,
        active = _props.active,
        activeClassName = _props.activeClassName,
        ItemComponent = _props.itemComponent,
        primaryText = _props.primaryText,
        secondaryText = _props.secondaryText,
        rightIcon = _props.rightIcon,
        rightAvatar = _props.rightAvatar,
        threeLines = _props.threeLines,
        children = _props.children,
        defaultOpen = _props.defaultOpen,
        isOpen = _props.isOpen,
        inset = _props.inset,
        nestedItems = _props.nestedItems,
        animateNestedItems = _props.animateNestedItems,
        expanderIcon = _props.expanderIcon,
        expanderIconChildren = _props.expanderIconChildren,
        expanderIconClassName = _props.expanderIconClassName,
        props = _objectWithoutProperties(_props, ['style', 'className', 'tileStyle', 'tileClassName', 'leftIcon', 'leftAvatar', 'active', 'activeClassName', 'itemComponent', 'primaryText', 'secondaryText', 'rightIcon', 'rightAvatar', 'threeLines', 'children', 'defaultOpen', 'isOpen', 'inset', 'nestedItems', 'animateNestedItems', 'expanderIcon', 'expanderIconChildren', 'expanderIconClassName']);

    return _react2.default.createElement(
      ItemComponent,
      { style: style, className: className },
      _react2.default.createElement(
        _AccessibleFakeInkedButton2.default,
        _extends({}, props, {
          style: tileStyle,
          className: (0, _classnames2.default)('md-list-tile md-list-tile--icon md-list-tile--mini', {
            'md-list-tile--active': this.state.active && !this._touched
          }, tileClassName),
          onMouseOver: this._handleMouseOver,
          onMouseLeave: this._handleMouseLeave,
          onTouchStart: this._handleTouchStart,
          onTouchEnd: this._handleTouchEnd
        }),
        _react2.default.createElement(_TileAddon2.default, {
          active: active,
          activeClassName: activeClassName,
          icon: leftIcon,
          avatar: leftAvatar
        })
      )
    );
  };

  return MiniListItem;
}(_react.PureComponent);

MiniListItem.propTypes = {
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  tileStyle: _propTypes2.default.object,
  tileClassName: _propTypes2.default.string,
  component: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string, _propTypes2.default.object]),
  active: _propTypes2.default.bool,
  activeClassName: _propTypes2.default.string,
  leftIcon: _propTypes2.default.node,
  leftAvatar: _propTypes2.default.node,
  disabled: _propTypes2.default.bool,
  onTouchStart: _propTypes2.default.func,
  onTouchEnd: _propTypes2.default.func,
  onMouseOver: _propTypes2.default.func,
  onMouseLeave: _propTypes2.default.func,
  defaultOpen: _propTypes2.default.bool,
  itemComponent: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func, _propTypes2.default.object]).isRequired
};
MiniListItem.defaultProps = {
  activeClassName: 'md-text--theme-primary',
  component: 'div',
  itemComponent: 'li'
};
exports.default = MiniListItem;

/***/ }),

/***/ "./node_modules/react-md/lib/NavigationDrawers/NavigationDrawer.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-md/lib/NavigationDrawers/NavigationDrawer.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _CSSTransitionGroup = __webpack_require__(/*! react-transition-group/CSSTransitionGroup */ "./node_modules/react-transition-group/CSSTransitionGroup.js");

var _CSSTransitionGroup2 = _interopRequireDefault(_CSSTransitionGroup);

var _deprecated = __webpack_require__(/*! react-prop-types/lib/deprecated */ "./node_modules/react-prop-types/lib/deprecated.js");

var _deprecated2 = _interopRequireDefault(_deprecated);

var _isRequiredForA11y = __webpack_require__(/*! react-prop-types/lib/isRequiredForA11y */ "./node_modules/react-prop-types/lib/isRequiredForA11y.js");

var _isRequiredForA11y2 = _interopRequireDefault(_isRequiredForA11y);

var _getField = __webpack_require__(/*! ../utils/getField */ "./node_modules/react-md/lib/utils/getField.js");

var _getField2 = _interopRequireDefault(_getField);

var _controlled = __webpack_require__(/*! ../utils/PropTypes/controlled */ "./node_modules/react-md/lib/utils/PropTypes/controlled.js");

var _controlled2 = _interopRequireDefault(_controlled);

var _invalidIf = __webpack_require__(/*! ../utils/PropTypes/invalidIf */ "./node_modules/react-md/lib/utils/PropTypes/invalidIf.js");

var _invalidIf2 = _interopRequireDefault(_invalidIf);

var _Button = __webpack_require__(/*! ../Buttons/Button */ "./node_modules/react-md/lib/Buttons/Button.js");

var _Button2 = _interopRequireDefault(_Button);

var _Drawer = __webpack_require__(/*! ../Drawers/Drawer */ "./node_modules/react-md/lib/Drawers/Drawer.js");

var _Drawer2 = _interopRequireDefault(_Drawer);

var _List = __webpack_require__(/*! ../Lists/List */ "./node_modules/react-md/lib/Lists/List.js");

var _List2 = _interopRequireDefault(_List);

var _Toolbar = __webpack_require__(/*! ../Toolbars/Toolbar */ "./node_modules/react-md/lib/Toolbars/Toolbar.js");

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _FontIcon = __webpack_require__(/*! ../FontIcons/FontIcon */ "./node_modules/react-md/lib/FontIcons/FontIcon.js");

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _getDeprecatedIcon = __webpack_require__(/*! ../FontIcons/getDeprecatedIcon */ "./node_modules/react-md/lib/FontIcons/getDeprecatedIcon.js");

var _getDeprecatedIcon2 = _interopRequireDefault(_getDeprecatedIcon);

var _isType = __webpack_require__(/*! ../Drawers/isType */ "./node_modules/react-md/lib/Drawers/isType.js");

var _JumpToContentLink = __webpack_require__(/*! ./JumpToContentLink */ "./node_modules/react-md/lib/NavigationDrawers/JumpToContentLink.js");

var _JumpToContentLink2 = _interopRequireDefault(_JumpToContentLink);

var _CloseButton = __webpack_require__(/*! ./CloseButton */ "./node_modules/react-md/lib/NavigationDrawers/CloseButton.js");

var _CloseButton2 = _interopRequireDefault(_CloseButton);

var _MiniListItem = __webpack_require__(/*! ./MiniListItem */ "./node_modules/react-md/lib/NavigationDrawers/MiniListItem.js");

var _MiniListItem2 = _interopRequireDefault(_MiniListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DrawerTypes = _Drawer2.default.DrawerTypes;


function getNonMiniType(type) {
  var pMini = DrawerTypes.PERSISTENT_MINI,
      tMini = DrawerTypes.TEMPORARY_MINI;

  if ([pMini, tMini].indexOf(type) === -1) {
    return type;
  }

  return pMini === type ? DrawerTypes.PERSISTENT : DrawerTypes.TEMPORARY;
}

function toMiniListItem(item, index) {
  if ((0, _react.isValidElement)(item)) {
    return item;
  }

  var divider = item.divider,
      subheader = item.subheader,
      key = item.key,
      itemProps = _objectWithoutProperties(item, ['divider', 'subheader', 'key']);

  if (divider || subheader) {
    return null;
  }

  return _react2.default.createElement(_MiniListItem2.default, _extends({ key: key || index }, itemProps));
}

/**
 * The `NavigationDrawer` is used when you want a full layout configuration. It is a combination
 * of the `Toolbar` component and the `Drawer` component. Any props that are not specifically
 * listed below will be provided to the `Drawer` component. So if there are props on the `Drawer`
 * that are not listed here, they will be passed along.
 *
 * The main benefit of using this component is that it will manage adding respective offset
 * classes automatically for you to the content and the drawer. It will also manage using
 * a mini drawer type for you.
 */

var NavigationDrawer = function (_PureComponent) {
  _inherits(NavigationDrawer, _PureComponent);

  /**
   * Determines the current media and returns an object containing matches for `mobile`, `tablet`, `desktop`,
   * and the current drawer type. This expects a `props` object of the drawer.
   *
   * If this is used server side, it will default to only matching mobile.
   *
   * @param {Object=} props - The current drawer's prop shape to extract the mobile, tablet, and desktop type/min
   *    widths. This defaults to the drawer's default props.
   * @return {Object} an object containing the media matches and the current type to use for the drawer.
   */
  NavigationDrawer.getCurrentMedia = function getCurrentMedia() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : NavigationDrawer.defaultProps;

    var mobileType = props.mobileDrawerType,
        tabletType = props.tabletDrawerType,
        desktopType = props.desktopDrawerType,
        constantType = props.constantDrawerType,
        others = _objectWithoutProperties(props, ['mobileDrawerType', 'tabletDrawerType', 'desktopDrawerType', 'constantDrawerType']);

    return _Drawer2.default.getCurrentMedia(_extends({ mobileType: mobileType, tabletType: tabletType, desktopType: desktopType, constantType: constantType }, others));
  };

  function NavigationDrawer(props) {
    _classCallCheck(this, NavigationDrawer);

    var _this = _possibleConstructorReturn(this, _PureComponent.call(this, props));

    _initialiseProps.call(_this);

    var defaultMedia = props.defaultMedia,
        defaultVisible = props.defaultVisible,
        initialDrawerType = props.initialDrawerType;


    _this.state = {
      mobile: initialDrawerType || defaultMedia === 'mobile',
      tablet: initialDrawerType || defaultMedia === 'tablet',
      desktop: initialDrawerType || defaultMedia === 'desktop'
    };

    if (typeof props.drawerType === 'undefined') {
      _this.state.drawerType = props[(initialDrawerType || defaultMedia) + 'DrawerType'];
    }

    var type = (0, _getField2.default)(props, _this.state, 'drawerType');

    if (typeof props.visible === 'undefined') {
      // The logic for determining the visibility is handled by the created mini drawer
      _this.state.visible = (0, _isType.isPermanent)(type);
      if (!_this.state.visible && typeof defaultVisible !== 'undefined') {
        _this.state.visible = defaultVisible;
      }
    }
    return _this;
  }

  NavigationDrawer.prototype.getChildContext = function getChildContext() {
    var _props = this.props,
        persistentIcon = _props.persistentIcon,
        id = _props.contentId,
        label = _props.jumpLabel,
        persistentIconChildren = _props.persistentIconChildren,
        persistentIconClassName = _props.persistentIconClassName,
        closeIconChildren = _props.closeIconChildren,
        closeIconClassName = _props.closeIconClassName;


    return {
      id: id,
      label: label,
      closeIcon: (0, _getDeprecatedIcon2.default)(closeIconClassName || persistentIconClassName, closeIconChildren || persistentIconChildren, persistentIcon),
      onCloseClick: this._toggleVisibility,
      renderNode: this.context.renderNode
    };
  };

  NavigationDrawer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var visible = (0, _getField2.default)(this.props, this.state, 'visible');
    var nVisible = (0, _getField2.default)(nextProps, this.state, 'visible');
    if (visible !== nVisible) {
      this._animate(nextProps);
    }
  };

  NavigationDrawer.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this._timeout) {
      clearTimeout(this._timeout);
    }
  };

  NavigationDrawer.prototype.render = function render() {
    var _props2 = this.props,
        id = _props2.id,
        style = _props2.style,
        className = _props2.className,
        toolbarStyle = _props2.toolbarStyle,
        toolbarClassName = _props2.toolbarClassName,
        drawerStyle = _props2.drawerStyle,
        drawerClassName = _props2.drawerClassName,
        contentStyle = _props2.contentStyle,
        contentClassName = _props2.contentClassName,
        Content = _props2.contentComponent,
        miniDrawerStyle = _props2.miniDrawerStyle,
        miniDrawerClassName = _props2.miniDrawerClassName,
        miniNavStyle = _props2.miniNavStyle,
        miniNavClassName = _props2.miniNavClassName,
        miniDrawerId = _props2.miniDrawerId,
        miniNavItemsId = _props2.miniNavItemsId,
        navItems = _props2.navItems,
        children = _props2.children,
        drawerId = _props2.drawerId,
        drawerTitle = _props2.drawerTitle,
        drawerZDepth = _props2.drawerZDepth,
        drawerChildren = _props2.drawerChildren,
        drawerHeaderChildren = _props2.drawerHeaderChildren,
        drawerTransitionDuration = _props2.drawerTransitionDuration,
        toolbarId = _props2.toolbarId,
        toolbarTitle = _props2.toolbarTitle,
        toolbarTitleMenu = _props2.toolbarTitleMenu,
        toolbarTitleStyle = _props2.toolbarTitleStyle,
        toolbarTitleClassName = _props2.toolbarTitleClassName,
        toolbarActions = _props2.toolbarActions,
        toolbarProminent = _props2.toolbarProminent,
        toolbarProminentTitle = _props2.toolbarProminentTitle,
        toolbarThemeType = _props2.toolbarThemeType,
        toolbarSingleColor = _props2.toolbarSingleColor,
        toolbarChildren = _props2.toolbarChildren,
        toolbarZDepth = _props2.toolbarZDepth,
        mobileType = _props2.mobileDrawerType,
        tabletType = _props2.tabletDrawerType,
        desktopType = _props2.desktopDrawerType,
        transitionName = _props2.transitionName,
        transitionEnterTimeout = _props2.transitionEnterTimeout,
        transitionLeaveTimeout = _props2.transitionLeaveTimeout,
        extractMini = _props2.extractMini,
        miniDrawerHeader = _props2.miniDrawerHeader,
        miniDrawerChildren = _props2.miniDrawerChildren,
        footer = _props2.footer,
        includeDrawerHeader = _props2.includeDrawerHeader,
        contentId = _props2.contentId,
        contentProps = _props2.contentProps,
        constantDrawerType = _props2.constantDrawerType,
        temporaryIcon = _props2.temporaryIcon,
        temporaryIconChildren = _props2.temporaryIconChildren,
        temporaryIconClassName = _props2.temporaryIconClassName,
        menuIconChildren = _props2.menuIconChildren,
        menuIconClassName = _props2.menuIconClassName,
        propDrawerType = _props2.drawerType,
        propDrawerHeader = _props2.drawerHeader,
        propRenderNode = _props2.renderNode,
        jumpLabel = _props2.jumpLabel,
        persistentIcon = _props2.persistentIcon,
        onDrawerChange = _props2.onDrawerChange,
        closeIconChildren = _props2.closeIconChildren,
        closeIconClassName = _props2.closeIconClassName,
        persistentIconChildren = _props2.persistentIconChildren,
        persistentIconClassName = _props2.persistentIconClassName,
        props = _objectWithoutProperties(_props2, ['id', 'style', 'className', 'toolbarStyle', 'toolbarClassName', 'drawerStyle', 'drawerClassName', 'contentStyle', 'contentClassName', 'contentComponent', 'miniDrawerStyle', 'miniDrawerClassName', 'miniNavStyle', 'miniNavClassName', 'miniDrawerId', 'miniNavItemsId', 'navItems', 'children', 'drawerId', 'drawerTitle', 'drawerZDepth', 'drawerChildren', 'drawerHeaderChildren', 'drawerTransitionDuration', 'toolbarId', 'toolbarTitle', 'toolbarTitleMenu', 'toolbarTitleStyle', 'toolbarTitleClassName', 'toolbarActions', 'toolbarProminent', 'toolbarProminentTitle', 'toolbarThemeType', 'toolbarSingleColor', 'toolbarChildren', 'toolbarZDepth', 'mobileDrawerType', 'tabletDrawerType', 'desktopDrawerType', 'transitionName', 'transitionEnterTimeout', 'transitionLeaveTimeout', 'extractMini', 'miniDrawerHeader', 'miniDrawerChildren', 'footer', 'includeDrawerHeader', 'contentId', 'contentProps', 'constantDrawerType', 'temporaryIcon', 'temporaryIconChildren', 'temporaryIconClassName', 'menuIconChildren', 'menuIconClassName', 'drawerType', 'drawerHeader', 'renderNode', 'jumpLabel', 'persistentIcon', 'onDrawerChange', 'closeIconChildren', 'closeIconClassName', 'persistentIconChildren', 'persistentIconClassName']);

    var drawerHeader = this.props.drawerHeader;
    var _state = this.state,
        desktop = _state.desktop,
        tablet = _state.tablet,
        contentActive = _state.contentActive;


    var drawerType = (0, _getField2.default)(this.props, this.state, 'drawerType');
    var visible = (0, _getField2.default)(this.props, this.state, 'visible');
    var renderNode = (0, _getField2.default)(this.props, this.context, 'renderNode');
    var mini = (0, _isType.isMini)(drawerType);
    var temporary = (0, _isType.isTemporary)(drawerType);
    var persistent = (0, _isType.isPersistent)(drawerType);
    var clipped = drawerType === DrawerTypes.CLIPPED;
    var floating = drawerType === DrawerTypes.FLOATING;

    var offset = desktop || tablet ? !temporary && visible : visible;
    var toolbarRelative = (0, _classnames2.default)({
      'md-toolbar-relative': !toolbarProminent && !toolbarProminentTitle,
      'md-toolbar-relative--prominent': toolbarProminent || toolbarProminentTitle
    });

    var nav = void 0;
    if (temporary || persistent) {
      nav = _react2.default.createElement(_Button2.default, {
        key: 'nav',
        onClick: this._toggleVisibility,
        disabled: persistent && visible,
        icon: true,
        iconEl: (0, _getDeprecatedIcon2.default)(menuIconClassName || temporaryIconClassName, menuIconChildren || temporaryIconChildren, temporaryIcon)
      });
    }

    var closeButton = void 0;
    if (persistent) {
      closeButton = _react2.default.createElement(_CloseButton2.default, null);
    }

    if (!drawerHeader && includeDrawerHeader) {
      var _cn;

      drawerHeader = _react2.default.createElement(
        _Toolbar2.default,
        {
          key: 'drawer-header',
          title: drawerTitle,
          actions: visible && nav ? closeButton : null,
          className: (0, _classnames2.default)('md-divider-border md-divider-border--bottom', (_cn = {}, _cn[toolbarRelative] = clipped || floating, _cn))
        },
        drawerHeaderChildren,
        _react2.default.createElement(_JumpToContentLink2.default, null)
      );
    }
    var miniDrawer = void 0;
    if (mini) {
      var miniList = void 0;
      if (extractMini) {
        miniList = _react2.default.createElement(
          _List2.default,
          {
            id: miniNavItemsId,
            key: 'mini-nav-items',
            style: miniNavStyle,
            className: (0, _classnames2.default)(miniNavClassName, toolbarRelative)
          },
          navItems.map(toMiniListItem)
        );
      }

      miniDrawer = _react2.default.createElement(
        _Drawer2.default,
        {
          id: miniDrawerId,
          key: 'mini-drawer',
          type: drawerType,
          renderNode: renderNode,
          'aria-hidden': visible,
          style: miniDrawerStyle,
          className: miniDrawerClassName
        },
        miniDrawerHeader,
        miniList,
        miniDrawerChildren
      );
    }

    var desktopOffset = !clipped && !floating && offset;

    return _react2.default.createElement(
      'div',
      { id: id, style: style, className: className },
      _react2.default.createElement(
        _Toolbar2.default,
        {
          id: toolbarId,
          colored: toolbarThemeType === 'colored',
          themed: toolbarThemeType === 'themed',
          singleColor: toolbarSingleColor,
          style: toolbarStyle,
          className: (0, _classnames2.default)({
            'md-toolbar--over-drawer': clipped || floating || mini && !visible
          }, toolbarClassName),
          title: toolbarTitle,
          titleMenu: toolbarTitleMenu,
          prominent: toolbarProminent,
          prominentTitle: toolbarProminentTitle,
          titleStyle: toolbarTitleStyle,
          titleClassName: (0, _classnames2.default)({
            'md-title--drawer-active': contentActive,
            'md-transition--deceleration': offset && visible,
            'md-transition--acceleration': offset && !visible,
            'md-title--permanent-offset': desktopOffset && (0, _isType.isPermanent)(drawerType),
            'md-title--persistent-offset': desktopOffset && persistent
          }, toolbarTitleClassName),
          nav: nav,
          actions: toolbarActions,
          fixed: true,
          zDepth: toolbarZDepth
        },
        toolbarChildren
      ),
      miniDrawer,
      _react2.default.createElement(
        _Drawer2.default,
        _extends({}, props, {
          id: drawerId,
          constantType: constantDrawerType,
          transitionDuration: drawerTransitionDuration,
          header: drawerHeader,
          style: drawerStyle,
          className: drawerClassName,
          navItems: navItems,
          renderNode: renderNode,
          mobileType: mobileType,
          tabletType: tabletType,
          desktopType: desktopType,
          type: getNonMiniType(drawerType),
          visible: visible,
          zDepth: drawerZDepth,
          onVisibilityChange: this._handleVisibility,
          onMediaTypeChange: this._handleTypeChange
        }),
        drawerChildren
      ),
      _react2.default.createElement(
        _CSSTransitionGroup2.default,
        _extends({}, contentProps, {
          id: contentId,
          component: Content,
          transitionName: transitionName,
          transitionEnter: !!transitionEnterTimeout,
          transitionEnterTimeout: transitionEnterTimeout,
          transitionLeave: !!transitionLeaveTimeout,
          transitionLeaveTimeout: transitionLeaveTimeout,
          tabIndex: -1,
          style: contentStyle,
          className: (0, _classnames2.default)('md-navigation-drawer-content', {
            'md-navigation-drawer-content--active': contentActive,
            'md-navigation-drawer-content--inactive': !visible,
            'md-navigation-drawer-content--prominent-offset': toolbarProminent || toolbarProminentTitle,
            'md-transition--deceleration': visible,
            'md-transition--acceleration': !visible,
            'md-drawer-relative': offset,
            'md-drawer-relative--mini': mini && (!visible || temporary)
          }, toolbarRelative, contentClassName)
        }),
        children
      ),
      footer
    );
  };

  return NavigationDrawer;
}(_react.PureComponent);

NavigationDrawer.DrawerType = { // deprecated
  /* eslint-disable no-console */
  _warned: false,
  _msg: 'Invalid use of `NavigationDrawer.DrawerType.{{TYPE}}`. The `NavigationDrawer.DrawerType` ' + 'has been deprecated and will be removed in the next major release. Please use the ' + '`NavigationDrawer.DrawerTypes.{{TYPE}}` instead.',

  get FULL_HEIGHT() {
    if (!this._warned) {
      console.error(this._msg.replace(/{{TYPE}}/g, 'FULL_HEIGHT'));
    }
    this._warned = true;

    return DrawerTypes.FULL_HEIGHT;
  },

  get CLIPPED() {
    if (!this._warned) {
      console.error(this._msg.replace(/{{TYPE}}/g, 'CLIPPED'));
    }
    this._warned = true;

    return DrawerTypes.CLIPPED;
  },

  get FLOATING() {
    if (!this._warned) {
      console.error(this._msg.replace(/{{TYPE}}/g, 'FLOATING'));
    }
    this._warned = true;

    return DrawerTypes.FLOATING;
  },

  get PERSISTENT() {
    if (!this._warned) {
      console.error(this._msg.replace(/{{TYPE}}/g, 'PERSISTENT'));
    }
    this._warned = true;

    return DrawerTypes.PERSISTENT;
  },

  get PERSISTENT_MINI() {
    if (!this._warned) {
      console.error(this._msg.replace(/{{TYPE}}/g, 'PERSISTENT_MINI'));
    }
    this._warned = true;

    return DrawerTypes.PERSISTENT_MINI;
  },

  get TEMPORARY() {
    if (!this._warned) {
      console.error(this._msg.replace(/{{TYPE}}/g, 'TEMPORARY'));
    }
    this._warned = true;

    return DrawerTypes.TEMPORARY;
  },

  get TEMPORARY_MINI() {
    if (!this._warned) {
      console.error(this._msg.replace(/{{TYPE}}/g, 'TEMPORARY_MINI'));
    }
    this._warned = true;

    return DrawerTypes.TEMPORARY_MINI;
  }
};
NavigationDrawer.DrawerTypes = DrawerTypes;
NavigationDrawer.propTypes = {
  /**
   * An optional id to provide to the entire div wrapper.
   */
  id: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  /**
   * An optional id to provide to the drawer. This is generally a good idea to provide if
   * there are any `navItems` defined.
   *
   * @see {@link #navItemsId}
   * @see {@link #miniDrawerId}
   */
  drawerId: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  /**
   * An optional id to provide to the navItems list. If this is omitted and the `drawerId` prop is
   * defined, it will be defaulted to `${drawerId}-nav-items`.
   *
   * @see {@link #drawerId}
   * @see {@link Drawer#navItemsId}
   */
  navItemsId: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  /**
   * An optional id to apply to mini drawer that gets created when the `drawerType` is set to
   * one of the mini types.
   *
   * @see {@link #drawerId}
   * @see {@link #miniNavItemsId}
   */
  miniDrawerId: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  /**
   * An optional id to apply to mini drawer's navigation list that gets created when the `drawerType`
   * is set to one of the mini types.
   *
   * @see {@link #navItemsId}
   * @see {@link #miniDrawerId}
   */
  miniNavItemsId: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  /**
   * An optional id to provide to the main toolbar.
   */
  toolbarId: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  /**
   * An id to give the main content. A hidden link is created in the main drawer's header that links to the main
   * content. This is used for keyboard only users to jump the navigation and jump straight to the content.
   *
   * If you provide your own `drawerHeader`, it is suggested to include the link yourself.
   */
  contentId: (0, _isRequiredForA11y2.default)(_propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])),

  /**
   * An optional style to apply to the surrounding container.
   */
  style: _propTypes2.default.object,

  /**
   * An optional className to apply to the surrounding container.
   */
  className: _propTypes2.default.string,

  /**
   * An optional style to apply to the main toolbar.
   */
  toolbarStyle: _propTypes2.default.object,

  /**
   * An optional className to apply to the toolbar.
   */
  toolbarClassName: _propTypes2.default.string,

  /**
   * An optional style to apply to the main toolbar's title.
   */
  toolbarTitleStyle: _propTypes2.default.object,

  /**
   * An optional className to apply to the main toolbar's title.
   */
  toolbarTitleClassName: _propTypes2.default.string,

  /**
   * An optional style to apply to the drawer.
   */
  drawerStyle: _propTypes2.default.object,

  /**
   * An optional className to apply to the drawer.
   */
  drawerClassName: _propTypes2.default.string,

  /**
   * An optional style to apply to the `List` surrounding the `navItems`.
   */
  navStyle: _propTypes2.default.object,

  /**
   * An optional className to apply to the `List` surrounding the `navItems`.
   */
  navClassName: _propTypes2.default.string,

  /**
   * An optional style to apply to the mini drawer that gets created when the `drawerType` is set
   * to one of the mini types.
   *
   * @see {@link #miniDrawerClassName}
   * @see {@link #miniNavStyle}
   * @see {@link #miniNavClassName}
   */
  miniDrawerStyle: _propTypes2.default.object,

  /**
   * An optional className to apply to the mini drawer that gets created when the `drawerType` is set
   * to one of the mini types.
   *
   * @see {@link #miniDrawerStyle}
   * @see {@link #miniNavStyle}
   * @see {@link #miniNavClassName}
   */
  miniDrawerClassName: _propTypes2.default.string,

  /**
   * An optional style to apply to the mini drawer's navigation list when the `drawerType` is set
   * to one of the mini types.
   *
   * @see {@link #miniDrawerStyle}
   * @see {@link #miniDrawerClassName}
   * @see {@link #miniNavClassName}
   */
  miniNavStyle: _propTypes2.default.object,

  /**
   * An optional className to apply to the mini drawer's navigation list when the `drawerType` is set
   * to one of the mini types.
   *
   * @see {@link #miniDrawerStyle}
   * @see {@link #miniDrawerClassName}
   * @see {@link #miniNavStyle}
   */
  miniNavClassName: _propTypes2.default.string,

  /**
   * An optional style to apply to the content. This is the container surrounding whatever
   * `children` are passed in.
   */
  contentStyle: _propTypes2.default.object,

  /**
   * An optional className to apply to the content. This is the container surrounding whatever
   * `children` are passed in.
   */
  contentClassName: _propTypes2.default.string,

  /**
   * An optional style to apply to the overlay.
   */
  overlayStyle: _propTypes2.default.object,

  /**
   * An optional className to apply to the overlay.
   */
  overlayClassName: _propTypes2.default.string,

  /**
   * The children to display in the main content.
   */
  children: _propTypes2.default.node,

  /**
   * Boolean if the `drawerHeader` component should be built if the `drawerHeader` prop is not
   * passed in.
   */
  includeDrawerHeader: _propTypes2.default.bool,

  /**
   * An optional header to display in the drawer. This will normally be the `Toolbar` component
   * or any other type of header. You can either use this prop with the `CloseButton` component
   * when displaying a persistent drawer, or use the `drawerTitle` and `drawerHeaderChildren` prop
   * to build a toolbar.
   */
  drawerHeader: _propTypes2.default.node,

  /**
   * An optional title to use for the drawer's header toolbar. If the `drawerHeader` prop is defined,
   * this is invalid.
   */
  drawerTitle: (0, _invalidIf2.default)(_propTypes2.default.node, 'drawerHeader'),

  /**
   * An optional zDepth to apply to the drawer. If this is omitted, the value will be set as follows:
   * - floating || inline = 1
   * - temporary = 5
   * - all others = 1
   *
   * @see {@link Papers/Paper#zDepth}
   */
  drawerZDepth: _propTypes2.default.number,

  /**
   * Any additional children to display after the `drawerHeader` and `navItems` list in the drawer.
   */
  drawerChildren: _propTypes2.default.node,

  /**
   * Any additional children to display in the drawer's header `Toolbar`. If the `drawerHeader` prop is defined,
   * this is invalid.
   */
  drawerHeaderChildren: (0, _invalidIf2.default)(_propTypes2.default.node, 'drawerHeader'),

  /**
   * The position for the drawer to be displayed.
   */
  position: _propTypes2.default.oneOf(['left', 'right']).isRequired,

  /**
   * An optional list of elements or props to use to build a navigational list in the drawer.
   * When the item is an object of props, it will build a `ListItem` component unless a key of
   * `divider` or `subheader` is set to true. It will then create the Divider or Subheader component
   * with any other remaining keys.
   */
  navItems: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.shape({
    divider: _propTypes2.default.bool,
    subheader: _propTypes2.default.bool,
    primaryText: _propTypes2.default.node
  })])),

  /**
   * The drawer type to use for mobile devices.
   */
  mobileDrawerType: _propTypes2.default.oneOf([DrawerTypes.TEMPORARY, DrawerTypes.TEMPORARY_MINI]).isRequired,

  /**
   * The drawer type to use for tablets.
   */
  tabletDrawerType: _propTypes2.default.oneOf([DrawerTypes.FULL_HEIGHT, DrawerTypes.CLIPPED, DrawerTypes.FLOATING, DrawerTypes.PERSISTENT, DrawerTypes.PERSISTENT_MINI, DrawerTypes.TEMPORARY, DrawerTypes.TEMPORARY_MINI]).isRequired,

  /**
   * The drawer type to use for desktop displays.
   */
  desktopDrawerType: _propTypes2.default.oneOf([DrawerTypes.FULL_HEIGHT, DrawerTypes.CLIPPED, DrawerTypes.FLOATING, DrawerTypes.PERSISTENT, DrawerTypes.PERSISTENT_MINI, DrawerTypes.TEMPORARY, DrawerTypes.TEMPORARY_MINI]).isRequired,

  /**
   * An optional drawer type to enforce on all screen sizes. If the drawer type is not
   * `temporary`, you are required to define the `onMediaTypeChange` prop to handle switching
   * to temporary when the media matches a mobile device.
   * ```
   */
  drawerType: _propTypes2.default.oneOf([DrawerTypes.FULL_HEIGHT, DrawerTypes.CLIPPED, DrawerTypes.FLOATING, DrawerTypes.PERSISTENT, DrawerTypes.PERSISTENT_MINI, DrawerTypes.TEMPORARY, DrawerTypes.TEMPORARY_MINI]),

  /**
   * The default media match for the drawer. This will be what is displayed on first render.
   * The component will adjust itself to the current media after it has mounted, but this
   * is mostly used for server side rendering.
   */
  defaultMedia: _propTypes2.default.oneOf(['mobile', 'tablet', 'desktop']),

  /**
   * The min width to use for a mobile media query. This prop should match the `md-mobile-min-width`
   * variable.
   *
   * The media query for a mobile device will be:
   *
   * ```js
   * window.matchMedia(
   *   `screen and (min-width: ${mobileMinWidth}px) and (max-width: ${tabletMinWidth - 1}px`
   * ).matches;
   * ```
   */
  mobileMinWidth: _propTypes2.default.number.isRequired,

  /**
   * The min width to use for a tablet media query. This prop should match the `md-tablet-min-width`
   * variable.
   *
   * The media query for a tablet device will be:
   *
   * ```js
   * window.matchMedia(
   *   `screen and (min-width: ${tabletMinWidth}px) and (max-width: ${desktopWidth - 1}px`
   * ).matches;
   * ```
   */
  tabletMinWidth: _propTypes2.default.number.isRequired,

  /**
   * The min width to use for a desktop media query. This prop should match the `md-desktop-min-width`
   * variable.
   *
   * The media query for a tablet device will be:
   *
   * ```js
   * window.matchMedia(`screen and (min-width: ${tabletMinWidth}px)`).matches;
   * ```
   */
  desktopMinWidth: _propTypes2.default.number.isRequired,

  /**
   * An optional function to call when the type of the drawer changes because of the
   * new media queries. The callback will include the newly selected drawer type
   * and an object containing the media matches of `mobile`, `tablet`, and `desktop`.
   *
   * ```js
   * this.props.onMediaTypeChange(NavigationDrawer.DrawerTypes.TEMPORARY, {
   *   mobile: true,
   *   tablet: false,
   *   desktop: false,
   * });
   * ```
   */
  onMediaTypeChange: _propTypes2.default.func,

  /**
   * Boolean if the temporary or persistent drawers are visible by default.
   */
  defaultVisible: _propTypes2.default.bool,

  /**
   * Boolean if the temporary or persistent drawers are visible. If this is defined,
   * it will make the component controlled and require the `onVisibilityChange` prop
   * to be defined.
   */
  visible: (0, _controlled2.default)(_propTypes2.default.bool, 'onVisibilityChange', 'defaultVisible'),

  /**
   * An optional function to call when the visibility of the drawer changes. The callback
   * will include the new visibility.
   *
   * ```js
   * onVisibilityChange(false);
   * ```
   */
  onVisibilityChange: _propTypes2.default.func,

  /**
   * A boolean if the mini drawer's list should be generated from the `navItems` prop. When building
   * the list, it will extract the `leftIcon` or `leftAvatar` from the `navItem` and then create a
   * mini `ListItem` containing only that icon or image. Any other event listeners will also be applied.
   *
   *
   * @see {@link #miniDrawerHeader}
   * @see {@link #miniDrawerChildren}
   */
  extractMini: _propTypes2.default.bool,

  /**
   * An optional header to display in the mini drawer. This will be displayed above the optional
   * mini nav list that get generated if the `extractMini` prop is `true` and the `miniDrawerChildren`.
   *
   * @see {@link #extractMini}
   */
  miniDrawerHeader: _propTypes2.default.node,

  /**
   * Any additional children to display in the mini drawer. This will be displayed after the `miniDrawerHeader`
   * and the optional mini nav list that gets generated if the `extractMini` prop is `true`.
   *
   * @see {@link #extractMini}
   */
  miniDrawerChildren: _propTypes2.default.node,

  /**
   * Boolean if the drawer should automatically close after a nav item has been clicked for `temporary` drawers.
   */
  autoclose: _propTypes2.default.bool,

  /**
   * An optional title to display in the main toolbar. Either the `toolbarTitle` or the `toolbarTitleMenu`
   * may be defined, not both.
   */
  toolbarTitle: (0, _invalidIf2.default)(_propTypes2.default.node, 'toolbarTitleMenu'),

  /**
   * An optional select field menu to display in the main toolbar. Either the `toolbarTitle` or the `toolbarTitleMenu`
   * may be defined, not both.
   */
  toolbarTitleMenu: _propTypes2.default.element,

  /**
   * The theme style for the main toolbar.
   *
   * @see {@link Toolbars/Toolbar}
   */
  toolbarThemeType: _propTypes2.default.oneOf(['default', 'colored', 'themed']).isRequired,

  /**
   * Boolean if the toolbar's nav, actions, and title should share the same color.
   */
  toolbarSingleColor: _propTypes2.default.bool,

  /**
   * A boolean if the toolbar should be prominent.
   */
  toolbarProminent: _propTypes2.default.bool,

  /**
   * A boolean if the toolbar's title should be prominent.
   */
  toolbarProminentTitle: _propTypes2.default.bool,

  /**
   * A list of elements or a single element to display to the right of the
   * toolbar's nav, title, and children.
   *
   * @see {@link Toolbars/Toolbar#actions}
   */
  toolbarActions: _Toolbar2.default.propTypes.actions,

  /**
   * Any children to display in the toolbar. This will be displayed between the optional title and
   * actions.
   */
  toolbarChildren: _Toolbar2.default.propTypes.children,

  /**
   * An optional zDepth to apply to the toolbar.
   *
   * @see {@link Toolbars/Toolbar#zDepth}
   */
  toolbarZDepth: _propTypes2.default.number,

  /**
   * The component to render the content in.
   */
  contentComponent: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string, _propTypes2.default.object]).isRequired,

  /**
   * An optional footer display after the main content.
   */
  footer: _propTypes2.default.node,

  /**
   * The icon to use to render the button that will toggle the visibility of the
   * navigation drawer for `temporary` and `persistent` drawers. This is normally a
   * hamburger menu.
   */
  temporaryIcon: _propTypes2.default.element,

  /**
   * The icon to use to render the button that appears on a persistent drawer's open
   * header. This is used to create the `CloseButton` for drawers. When a persistent
   * drawer is closed, the `temporaryIcon` will be used to create a button to open the drawer.
   *
   * If the `drawerHeader` prop is defined, you will have to either include the `CloseButton`
   * in your header manually, or create your own controlled button to close the drawer.
   */
  persistentIcon: _propTypes2.default.element,

  /**
   * The transition name to use when the page's content changes. If you want to disable
   * transitions, set both the `transitionEnterTimeout` and `transitionLeaveTimeout` props
   * to a false-ish value. (`null`, `undefined`, or `0`).
   */
  transitionName: _propTypes2.default.string.isRequired,

  /**
   * The transition enter timeout when the page's content changes. If you want to disable
   * the enter transition, set this to a false-ish value (`null`, `undefined`, or `0`).
   */
  transitionEnterTimeout: _propTypes2.default.number,

  /**
   * The transition leave timeout when the page's content changes. If you want to disable
   * the leave transition, set this to a false-ish value (`null`, `undefined`, or `0`).
   */
  transitionLeaveTimeout: _propTypes2.default.number,

  /**
   * The transition duration for the drawer when sliding in and out of view.
   */
  drawerTransitionDuration: _propTypes2.default.number.isRequired,

  /**
   * Any additional props to provide to the main content. This will be applied before any of the generated props,
   * so this should not include `style`, `className`, or `component`.
   */
  contentProps: _propTypes2.default.object,

  /**
   * The label to use for a keyboard accessibility link that jumps all the navigation and allows a user to focus
   * the main content. This is created in the drawer's header.
   */
  jumpLabel: _propTypes2.default.node.isRequired,

  /**
   * Boolean if the Portal's functionality of rendering in a separate react tree should be applied
   * to the drawer. The overlay that appears for temporary type drawers will still appear in the
   * separate subtree.
   *
   * @see {@link Helpers/Portal}
   */
  portal: _propTypes2.default.bool,

  /**
   * An optional DOM Node to render the drawer into. The default is to render as
   * the first child in the `body`.
   *
   * > This prop will not be used when the drawer is of the permanent type or `inline` is specified
   * since the `Portal` component will not be used.
   */
  renderNode: _propTypes2.default.object,

  /**
   * Boolean if the drawer should be rendered as the last child instead of the first child
   * in the `renderNode` or `body`.
   *
   * > This prop will not be used when the drawer is of the permanent type or `inline` is specified
   * since the `Portal` component will not be used.
   */
  lastChild: _propTypes2.default.bool,

  /**
   * Boolean if the `drawerType` should remain constant across all media. This is really only valid
   * if the `drawerType` is one of the temporary types.
   */
  constantDrawerType: _propTypes2.default.bool,

  menuIconChildren: (0, _deprecated2.default)(_propTypes2.default.node, 'Use `temporaryIcon` instead'),
  menuIconClassName: (0, _deprecated2.default)(_propTypes2.default.string, 'Use `temporaryIcon` instead'),
  closeIconChildren: (0, _deprecated2.default)(_propTypes2.default.node, 'Use `persistentIcon` instead'),
  closeIconClassName: (0, _deprecated2.default)(_propTypes2.default.string, 'Use `persistentIcon` instead'),
  temporaryIconChildren: (0, _deprecated2.default)(_propTypes2.default.node, 'Use the `temporaryIcon` instead'),
  temporaryIconClassName: (0, _deprecated2.default)(_propTypes2.default.string, 'Use the `temporaryIcon` instead'),
  persistentIconChildren: (0, _deprecated2.default)(_propTypes2.default.node, 'Use the `persistentIcon` instead'),
  persistentIconClassName: (0, _deprecated2.default)(_propTypes2.default.string, 'Use the `persistentIcon` prop instead'),
  onDrawerChange: (0, _deprecated2.default)(_propTypes2.default.func, 'Use `onVisibilityChange` or `onMediaTypeChange` instead'),
  onVisibilityToggle: (0, _deprecated2.default)(_propTypes2.default.func, 'Use `onVisibilityChange` instead'),
  contentTransitionName: (0, _deprecated2.default)(_propTypes2.default.string, 'Use `transitionName` instead'),
  contentTransitionEnterTimeout: (0, _deprecated2.default)(_propTypes2.default.number, 'Use `transtionEnterTimeout` instead'),
  contentTransitionLeaveTimeout: (0, _deprecated2.default)(_propTypes2.default.number, 'Use `transtionLeaveTimeout` instead'),
  initialDrawerType: (0, _deprecated2.default)(_propTypes2.default.oneOf(['mobile', 'tablet', 'desktop']), 'Use `defaultMedia` instead')
};
NavigationDrawer.contextTypes = {
  renderNode: _propTypes2.default.object
};
NavigationDrawer.childContextTypes = {
  closeIcon: _propTypes2.default.element,
  onCloseClick: _propTypes2.default.func,
  id: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]).isRequired,
  label: _propTypes2.default.node.isRequired,
  renderNode: _propTypes2.default.object
};
NavigationDrawer.defaultProps = {
  autoclose: _Drawer2.default.defaultProps.autoclose,
  contentId: 'main-content',
  // Defaults to false since it keeps the state of the drawerType in sync and makes the Drawer
  // controlled. On initial mount without any defaultMedia updates, it would always be considered
  // temporary
  constantDrawerType: false,
  jumpLabel: 'Jump to content',
  extractMini: true,
  position: _Drawer2.default.defaultProps.position,
  defaultMedia: _Drawer2.default.defaultProps.defaultMedia,
  mobileDrawerType: _Drawer2.default.defaultProps.mobileType,
  tabletDrawerType: _Drawer2.default.defaultProps.tabletType,
  desktopDrawerType: _Drawer2.default.defaultProps.desktopType,
  mobileMinWidth: _Drawer2.default.defaultProps.mobileMinWidth,
  tabletMinWidth: _Drawer2.default.defaultProps.tabletMinWidth,
  desktopMinWidth: _Drawer2.default.defaultProps.desktopMinWidth,
  includeDrawerHeader: true,
  contentComponent: 'main',
  temporaryIcon: _react2.default.createElement(
    _FontIcon2.default,
    null,
    'menu'
  ),
  toolbarThemeType: 'colored',
  persistentIcon: _react2.default.createElement(
    _FontIcon2.default,
    null,
    'arrow_back'
  ),
  transitionName: 'md-cross-fade',
  transitionEnterTimeout: 300,
  drawerTransitionDuration: _Drawer2.default.defaultProps.transitionDuration
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this._animate = function () {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this2.props;
    var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this2.state;

    if ((0, _isType.isTemporary)((0, _getField2.default)(props, state, 'drawerType'))) {
      return;
    }

    if (_this2._timeout) {
      clearTimeout(_this2._timeout);
    }

    _this2._timeout = setTimeout(function () {
      _this2.setState({ contentActive: false });
    }, props.drawerTransitionDuration);

    _this2.setState({ contentActive: true });
  };

  this._toggleVisibility = function (e) {
    var _props3 = _this2.props,
        onVisibilityToggle = _props3.onVisibilityToggle,
        onVisibilityChange = _props3.onVisibilityChange,
        onDrawerChange = _props3.onDrawerChange;

    var visible = !(0, _getField2.default)(_this2.props, _this2.state, 'visible');
    var callback = onVisibilityChange || onVisibilityToggle || onDrawerChange;
    if (callback) {
      callback(visible, e);
    }

    if (typeof _this2.props.visible === 'undefined') {
      _this2.setState({ visible: visible });
      _this2._animate(_this2.props);
    }
  };

  this._handleVisibility = function (visible) {
    var _props4 = _this2.props,
        onVisibilityToggle = _props4.onVisibilityToggle,
        onVisibilityChange = _props4.onVisibilityChange,
        onDrawerChange = _props4.onDrawerChange;

    var callback = onVisibilityChange || onVisibilityToggle || onDrawerChange;
    if (callback) {
      callback(visible);
    }

    if (typeof _this2.props.visible === 'undefined') {
      _this2.setState({ visible: visible });
      _this2._animate(_this2.props);
    }
  };

  this._handleTypeChange = function (drawerType, mediaState) {
    var onMediaTypeChange = _this2.props.onMediaTypeChange;

    var state = mediaState;
    if (onMediaTypeChange) {
      onMediaTypeChange(drawerType, mediaState);
    }

    if (typeof _this2.props.drawerType === 'undefined') {
      state = _extends({}, mediaState, { drawerType: drawerType });
    }

    _this2.setState(state);
  };
};

exports.default = NavigationDrawer;

/***/ }),

/***/ "./node_modules/react-md/lib/NavigationDrawers/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-md/lib/NavigationDrawers/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.JumpToContentLink = exports.CloseButton = exports.NavigationDrawer = undefined;

var _NavigationDrawer2 = __webpack_require__(/*! ./NavigationDrawer */ "./node_modules/react-md/lib/NavigationDrawers/NavigationDrawer.js");

var _NavigationDrawer3 = _interopRequireDefault(_NavigationDrawer2);

var _CloseButton2 = __webpack_require__(/*! ./CloseButton */ "./node_modules/react-md/lib/NavigationDrawers/CloseButton.js");

var _CloseButton3 = _interopRequireDefault(_CloseButton2);

var _JumpToContentLink2 = __webpack_require__(/*! ./JumpToContentLink */ "./node_modules/react-md/lib/NavigationDrawers/JumpToContentLink.js");

var _JumpToContentLink3 = _interopRequireDefault(_JumpToContentLink2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _NavigationDrawer3.default;
exports.NavigationDrawer = _NavigationDrawer3.default;
exports.CloseButton = _CloseButton3.default;
exports.JumpToContentLink = _JumpToContentLink3.default;

/***/ }),

/***/ "./node_modules/react-md/lib/Papers/Paper.js":
/*!***************************************************!*\
  !*** ./node_modules/react-md/lib/Papers/Paper.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _between = __webpack_require__(/*! ../utils/PropTypes/between */ "./node_modules/react-md/lib/utils/PropTypes/between.js");

var _between2 = _interopRequireDefault(_between);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The `Paper` component is a simple wrapper that adds box-shadow.
 *
 * You can also use the SCSS mixin instead of paper.
 *
 * ```scss
 * @include md-box-shadow(5);
 * ```
 */
var Paper = function (_PureComponent) {
  _inherits(Paper, _PureComponent);

  function Paper() {
    _classCallCheck(this, Paper);

    return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
  }

  Paper.prototype.render = function render() {
    var _props = this.props,
        Component = _props.component,
        zDepth = _props.zDepth,
        className = _props.className,
        raiseOnHover = _props.raiseOnHover,
        props = _objectWithoutProperties(_props, ['component', 'zDepth', 'className', 'raiseOnHover']);

    return _react2.default.createElement(Component, _extends({}, props, {
      className: (0, _classnames2.default)('md-paper md-paper--' + zDepth, {
        'md-paper--0-hover': zDepth === 0 && raiseOnHover
      }, className)
    }));
  };

  return Paper;
}(_react.PureComponent);

Paper.propTypes = {
  /**
   * The component to render the paper as.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string, _propTypes2.default.object]).isRequired,

  /**
   * An optional className to apply.
   */
  className: _propTypes2.default.string,

  /**
   * The depth of the paper. This should be a number between 0 - 5. If
   * the depth is 0, it will raise to a depth of 3 on hover.
   */
  zDepth: (0, _between2.default)(_propTypes2.default.number.isRequired, 0, 5),

  /**
   * Any children to display in the paper.
   */
  children: _propTypes2.default.node,

  /**
   * Boolean if the paper should raise to the `zDepth` of `3` on hover when the initial
   * `zDepth` is `0`.
   */
  raiseOnHover: _propTypes2.default.bool
};
Paper.defaultProps = {
  zDepth: 1,
  component: 'div'
};
exports.default = Paper;

/***/ }),

/***/ "./node_modules/react-md/lib/SelectFields/SelectField.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-md/lib/SelectFields/SelectField.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _deprecated = __webpack_require__(/*! react-prop-types/lib/deprecated */ "./node_modules/react-prop-types/lib/deprecated.js");

var _deprecated2 = _interopRequireDefault(_deprecated);

var _isRequiredForA11y = __webpack_require__(/*! react-prop-types/lib/isRequiredForA11y */ "./node_modules/react-prop-types/lib/isRequiredForA11y.js");

var _isRequiredForA11y2 = _interopRequireDefault(_isRequiredForA11y);

var _keyCodes = __webpack_require__(/*! ../constants/keyCodes */ "./node_modules/react-md/lib/constants/keyCodes.js");

var _omit = __webpack_require__(/*! ../utils/omit */ "./node_modules/react-md/lib/utils/omit.js");

var _omit2 = _interopRequireDefault(_omit);

var _isValued = __webpack_require__(/*! ../utils/isValued */ "./node_modules/react-md/lib/utils/isValued.js");

var _isValued2 = _interopRequireDefault(_isValued);

var _getField = __webpack_require__(/*! ../utils/getField */ "./node_modules/react-md/lib/utils/getField.js");

var _getField2 = _interopRequireDefault(_getField);

var _isBetween = __webpack_require__(/*! ../utils/NumberUtils/isBetween */ "./node_modules/react-md/lib/utils/NumberUtils/isBetween.js");

var _isBetween2 = _interopRequireDefault(_isBetween);

var _handleKeyboardAccessibility = __webpack_require__(/*! ../utils/EventUtils/handleKeyboardAccessibility */ "./node_modules/react-md/lib/utils/EventUtils/handleKeyboardAccessibility.js");

var _handleKeyboardAccessibility2 = _interopRequireDefault(_handleKeyboardAccessibility);

var _controlled = __webpack_require__(/*! ../utils/PropTypes/controlled */ "./node_modules/react-md/lib/utils/PropTypes/controlled.js");

var _controlled2 = _interopRequireDefault(_controlled);

var _FontIcon = __webpack_require__(/*! ../FontIcons/FontIcon */ "./node_modules/react-md/lib/FontIcons/FontIcon.js");

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _anchorShape = __webpack_require__(/*! ../Helpers/anchorShape */ "./node_modules/react-md/lib/Helpers/anchorShape.js");

var _anchorShape2 = _interopRequireDefault(_anchorShape);

var _fixedToShape = __webpack_require__(/*! ../Helpers/fixedToShape */ "./node_modules/react-md/lib/Helpers/fixedToShape.js");

var _fixedToShape2 = _interopRequireDefault(_fixedToShape);

var _positionShape = __webpack_require__(/*! ../Helpers/positionShape */ "./node_modules/react-md/lib/Helpers/positionShape.js");

var _positionShape2 = _interopRequireDefault(_positionShape);

var _Menu = __webpack_require__(/*! ../Menus/Menu */ "./node_modules/react-md/lib/Menus/Menu.js");

var _Menu2 = _interopRequireDefault(_Menu);

var _ListItem = __webpack_require__(/*! ../Lists/ListItem */ "./node_modules/react-md/lib/Lists/ListItem.js");

var _ListItem2 = _interopRequireDefault(_ListItem);

var _SelectFieldToggle = __webpack_require__(/*! ./SelectFieldToggle */ "./node_modules/react-md/lib/SelectFields/SelectFieldToggle.js");

var _SelectFieldToggle2 = _interopRequireDefault(_SelectFieldToggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MOBILE_LIST_PADDING = 8;
var ARIA_ACTIVE = 'aria-activedescendant';

var SelectField = function (_PureComponent) {
  _inherits(SelectField, _PureComponent);

  function SelectField(props) {
    var _listProps;

    _classCallCheck(this, SelectField);

    var _this = _possibleConstructorReturn(this, _PureComponent.call(this, props));

    _initialiseProps.call(_this);

    _this.state = _extends({
      error: false,
      active: false
    }, _this._getActive(props, { value: props.defaultValue }), {
      listProps: (_listProps = {
        role: 'listbox',
        ref: _this._scrollActiveIntoView
      }, _listProps[ARIA_ACTIVE] = null, _listProps),
      match: null,
      lastSearch: null,
      value: props.defaultValue,
      visible: props.defaultVisible
    });

    _this._items = [];
    _this._activeItem = null;
    _this._deleteKeys = _this._getDeleteKeys(props);
    return _this;
  }

  SelectField.prototype.componentDidMount = function componentDidMount() {
    this._container = (0, _reactDom.findDOMNode)(this);
    this._field = this._container.querySelector('.md-select-field');
  };

  SelectField.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _props = this.props,
        itemLabel = _props.itemLabel,
        itemValue = _props.itemValue,
        deleteKeys = _props.deleteKeys;

    if (deleteKeys !== nextProps.deleteKeys || itemLabel !== nextProps.itemLabel || itemValue !== nextProps.itemValue) {
      this._deleteKeys = this._getDeleteKeys(nextProps);
    }

    if (this.props.value !== nextProps.value || this.props.menuItems !== nextProps.menuItems) {
      this.setState(this._getActive(nextProps, this.state));
    }
  };

  /**
   * Gets the current value from the select field. This is used when you have an uncontrolled
   * text field and simply need the value from a ref callback.
   *
   * @return {String} the select field's value
   */


  SelectField.prototype._getItemPart = function _getItemPart(item, itemLabel, itemValue) {
    var preferLabel = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    var type = typeof item === 'undefined' ? 'undefined' : _typeof(item);
    if (type === 'number' || type === 'string') {
      return item;
    } else if (type === 'object') {
      var key1 = preferLabel ? itemLabel : itemValue;
      var key2 = preferLabel ? itemValue : itemLabel;
      return typeof item[key1] !== 'undefined' ? item[key1] : item[key2];
    }

    return '';
  };

  SelectField.prototype._getDeleteKeys = function _getDeleteKeys(_ref) {
    var itemLabel = _ref.itemLabel,
        itemValue = _ref.itemValue,
        itemProps = _ref.itemProps,
        deleteKeys = _ref.deleteKeys;

    var keys = [itemLabel, itemValue, itemProps];
    if (deleteKeys) {
      return keys.concat(Array.isArray(deleteKeys) ? deleteKeys : [deleteKeys]);
    }

    return keys;
  };

  SelectField.prototype.render = function render() {
    var _props2 = this.props,
        id = _props2.id,
        style = _props2.style,
        className = _props2.className,
        listStyle = _props2.listStyle,
        listClassName = _props2.listClassName,
        toggleStyle = _props2.toggleStyle,
        toggleClassName = _props2.toggleClassName,
        menuItems = _props2.menuItems,
        anchor = _props2.anchor,
        belowAnchor = _props2.belowAnchor,
        fixedTo = _props2.fixedTo,
        position = _props2.position,
        xThreshold = _props2.xThreshold,
        yThreshold = _props2.yThreshold,
        listZDepth = _props2.listZDepth,
        listInline = _props2.listInline,
        listHeightRestricted = _props2.listHeightRestricted,
        block = _props2.block,
        centered = _props2.centered,
        sameWidth = _props2.sameWidth,
        fullWidth = _props2.fullWidth,
        repositionOnScroll = _props2.repositionOnScroll,
        repositionOnResize = _props2.repositionOnResize,
        simplifiedMenu = _props2.simplifiedMenu,
        minLeft = _props2.minLeft,
        minRight = _props2.minRight,
        minBottom = _props2.minBottom,
        fillViewportWidth = _props2.fillViewportWidth,
        fillViewportHeight = _props2.fillViewportHeight,
        menuTransitionName = _props2.menuTransitionName,
        menuTransitionEnterTimeout = _props2.menuTransitionEnterTimeout,
        menuTransitionLeaveTimeout = _props2.menuTransitionLeaveTimeout,
        isOpen = _props2.isOpen,
        propError = _props2.error,
        propMenuId = _props2.menuId,
        propVisible = _props2.visible,
        itemLabel = _props2.itemLabel,
        itemValue = _props2.itemValue,
        itemProps = _props2.itemProps,
        getItemProps = _props2.getItemProps,
        defaultValue = _props2.defaultValue,
        defaultVisible = _props2.defaultVisible,
        onClick = _props2.onClick,
        onKeyDown = _props2.onKeyDown,
        onVisibilityChange = _props2.onVisibilityChange,
        deleteKeys = _props2.deleteKeys,
        stripActiveItem = _props2.stripActiveItem,
        keyboardMatchingTimeout = _props2.keyboardMatchingTimeout,
        defaultOpen = _props2.defaultOpen,
        initiallyOpen = _props2.initiallyOpen,
        onMenuToggle = _props2.onMenuToggle,
        stretchList = _props2.stretchList,
        menuStyle = _props2.menuStyle,
        menuClassName = _props2.menuClassName,
        floatingLabel = _props2.floatingLabel,
        noAutoAdjust = _props2.noAutoAdjust,
        adjustMinWidth = _props2.adjustMinWidth,
        props = _objectWithoutProperties(_props2, ['id', 'style', 'className', 'listStyle', 'listClassName', 'toggleStyle', 'toggleClassName', 'menuItems', 'anchor', 'belowAnchor', 'fixedTo', 'position', 'xThreshold', 'yThreshold', 'listZDepth', 'listInline', 'listHeightRestricted', 'block', 'centered', 'sameWidth', 'fullWidth', 'repositionOnScroll', 'repositionOnResize', 'simplifiedMenu', 'minLeft', 'minRight', 'minBottom', 'fillViewportWidth', 'fillViewportHeight', 'menuTransitionName', 'menuTransitionEnterTimeout', 'menuTransitionLeaveTimeout', 'isOpen', 'error', 'menuId', 'visible', 'itemLabel', 'itemValue', 'itemProps', 'getItemProps', 'defaultValue', 'defaultVisible', 'onClick', 'onKeyDown', 'onVisibilityChange', 'deleteKeys', 'stripActiveItem', 'keyboardMatchingTimeout', 'defaultOpen', 'initiallyOpen', 'onMenuToggle', 'stretchList', 'menuStyle', 'menuClassName', 'floatingLabel', 'noAutoAdjust', 'adjustMinWidth']);

    var _props3 = this.props,
        menuId = _props3.menuId,
        listId = _props3.listId,
        error = _props3.error;

    error = error || this.state.error;
    if (!menuId) {
      menuId = id + '-menu';
    }

    if (!listId) {
      listId = menuId + '-options';
    }

    var _state = this.state,
        listProps = _state.listProps,
        active = _state.active,
        activeLabel = _state.activeLabel;

    var below = position === SelectField.Positions.BELOW;
    var visible = typeof isOpen !== 'undefined' ? isOpen : (0, _getField2.default)(this.props, this.state, 'visible');
    var value = (0, _getField2.default)(this.props, this.state, 'value');
    var useSameWidth = typeof sameWidth !== 'undefined' ? sameWidth : below;

    var toggle = _react2.default.createElement(_SelectFieldToggle2.default, _extends({}, props, {
      id: id,
      style: toggleStyle,
      className: toggleClassName,
      visible: visible,
      value: value,
      below: below,
      error: error,
      active: active,
      activeLabel: activeLabel,
      onClick: this._toggle,
      onFocus: this._handleFocus,
      onBlur: this._handleBlur
    }));

    return _react2.default.createElement(
      _Menu2.default,
      {
        id: menuId,
        listId: listId,
        style: style,
        className: (0, _classnames2.default)('md-menu--select-field', className),
        listProps: listProps,
        listStyle: listStyle,
        listClassName: listClassName,
        toggle: toggle,
        visible: visible,
        onClose: this._close,
        onKeyDown: this._handleKeyDown,
        onClick: this._handleClick,
        simplified: simplifiedMenu,
        anchor: anchor,
        belowAnchor: belowAnchor,
        fixedTo: fixedTo,
        position: position,
        xThreshold: xThreshold,
        yThreshold: yThreshold,
        listZDepth: listZDepth,
        listInline: listInline,
        listHeightRestricted: listHeightRestricted,
        sameWidth: useSameWidth,
        block: block,
        centered: centered,
        fullWidth: fullWidth,
        minLeft: minLeft,
        minRight: minRight,
        minBottom: minBottom,
        fillViewportWidth: fillViewportWidth,
        fillViewportHeight: fillViewportHeight,
        repositionOnScroll: repositionOnScroll,
        repositionOnResize: repositionOnResize,
        transitionName: menuTransitionName,
        transitionEnterTimeout: menuTransitionEnterTimeout,
        transitionLeaveTimeout: menuTransitionLeaveTimeout
      },
      menuItems.reduce(this._reduceItems, [])
    );
  };

  _createClass(SelectField, [{
    key: 'value',
    get: function get() {
      return (0, _getField2.default)(this.props, this.state, 'value');
    }
  }]);

  return SelectField;
}(_react.PureComponent);

SelectField.HorizontalAnchors = _Menu2.default.HorizontalAnchors;
SelectField.VerticalAnchors = _Menu2.default.VerticalAnchors;
SelectField.Positions = _Menu2.default.Positions;
SelectField.propTypes = {
  /**
   * An id to give the select field. This is required for accessibility.
   */
  id: (0, _isRequiredForA11y2.default)(_propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])),

  /**
   * An optional name to give to the select field.
   */
  name: _propTypes2.default.string,

  /**
   * An optional id to provide to the select field's menu. If this is omitted,
   * it will default to `${id}-menu`.
   */
  menuId: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  /**
   * An optional id to provide to the select field's list.
   *
   * @see {@link #menuId}
   * @see {@link Menus/Menu#menuId}
   */
  listId: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  /**
   * An optional style to apply to the select field's container (the menu).
   */
  style: _propTypes2.default.object,

  /**
   * An optional className to apply to the select field's container (the menu).
   */
  className: _propTypes2.default.string,

  /**
   * An optional style to apply to the menu's list.
   */
  listStyle: _propTypes2.default.object,

  /**
   * An optional className to apply to the menu's list.
   */
  listClassName: _propTypes2.default.string,

  /**
   * An optional style to apply to the select field's toggle.
   */
  toggleStyle: _propTypes2.default.object,

  /**
   * An optional className to apply to the select field's toggle.
   */
  toggleClassName: _propTypes2.default.string,

  /**
   * An optional style to apply to the `AccessibleFakeInkedButton` that is the trigger
   * for the select field.
   */
  inputStyle: _propTypes2.default.object,

  /**
   * An optional className to apply to the `AccessibleFakeInkedButton` that is the trigger
   * for the select field.
   */
  inputClassName: _propTypes2.default.string,

  /**
   * Boolean if the select field should be have the menu's list visible by default.
   */
  defaultVisible: _propTypes2.default.bool.isRequired,

  /**
   * Boolean if the select field should have the menu's list visible. This will make
   * the select field controlled and require the `onVisibilityChange` prop to be defined,
   */
  visible: (0, _controlled2.default)(_propTypes2.default.bool, 'onVisibilityChange', 'defaultVisible'),

  /**
   * An optional function to call when the select field's menu has it's visibility changed. The callback
   * will include the next visible state and the event that triggered it.
   */
  onVisibilityChange: _propTypes2.default.func,

  /**
   * A list of `number`, `string`, or `object` that should be used to create `ListItem`
   * in the menu's list. When it is an `object`, it will use the `itemLabel` prop as the
   * `primaryText` and use the value of `itemValue`.
   *
   * @see {@link #itemLabel}
   * @see {@link #itemValue}
   */
  menuItems: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.object, _propTypes2.default.element])).isRequired,

  /**
   * The amount of time that a list of letters should be used when finding a menu item
   * while typing. Since a user can select items by typing multiple letters in a row,
   * this will be used as the timeout for clearing those letters.
   *
   * For example:
   * - User types `g`
   *
   * Full match is now `'g'`.
   *
   * - User delays 200ms and types `u`
   *
   * Full match is now `'gu'`
   *
   * - User delays 1000ms and types `a`.
   *
   * Full match is now `'a'`
   */
  keyboardMatchingTimeout: _propTypes2.default.number.isRequired,

  /**
   * The key to use for extracting a menu item's label if the menu item is an object.
   *
   * Example:
   *
   * ```js
   * const item = { something: 'My Label', somethingElse: 'value' };
   * const itemLabel = 'something';
   * const itemValue = 'somethingElse';
   * ```
   */
  itemLabel: _propTypes2.default.string.isRequired,

  /**
   * The key to use for extracting a menu item's value if the menu item is an object.
   *
   * Example:
   *
   * ```js
   * const item = { something: 'My Label', somethingElse: 'value' };
   * const itemLabel = 'something';
   * const itemValue = 'somethingElse';
   * ```
   */
  itemValue: _propTypes2.default.string.isRequired,

  /**
   * The key to use for extracting a menu item's function
   * to get additional `ListItem` props if the menu item is an object.
   *
   * Example:
   *
   * ```js
   * const item = { something: 'My Label', addProps: ({active}) => active ? {secondaryText: 'some text'} : null };
   * const itemLabel = 'something';
   * const itemProps = 'addProps';
   * ```
   *
   * @see {@link #getItemProps}
   */
  itemProps: _propTypes2.default.string.isRequired,

  /**
   * An optional function to get additional `ListItem` props if the menu item is an object.
   *
   * An object with the following fields will be passed into the function:
   * - `index` - item's index
   * - `active` - whether item is active
   * - `disabled` - whether item is disabled
   * - `itemValue` - item's value
   * - `value` - current list value
   * - `props` - default `ListItem` props
   * - `item` - source item's data
   * - `field` - reference to the component instance
   */
  getItemProps: _propTypes2.default.func,

  /**
   * The default value to use for the select field. If this is set, it should either match
   * one of the `number` or `string` in your `menuItems` list or be the empty string. If
   * the `menuItems` is a list of `object`, this value should match one of the menu item's
   * `itemValue` or be the empty string.
   *
   * ```js
   * const menuItems = [{ label: 'Something': value: 0 }, { label: 'Something else', value: 1 }];
   *
   * // both valid
   * defaultValue={0}
   * defaultValue=""
   * ```
   */
  defaultValue: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]).isRequired,

  /**
   * The value to use for the select field. If this is defined, it becomes a controlled component
   * and requires the `onChange` prop to be defined. See the `defaultValue` for more behavior info.
   *
   * @see {@link #defaultValue}
   */
  value: (0, _controlled2.default)(_propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]), 'onChange', 'defaultValue'),

  /**
   * An optional function to call when the select field's value has been changed either when the user
   * has click/touched/keyboard selected a value in the list, or the user has selected a value by typing
   * in the select field while the menu's list is closed.
   *
   * The callback will include the next text field value, the selected item's index, the event that
   * triggered the change, and the id, name, and value of the select field.
   *
   * ```js
   * onChange(value, index, event, { id, name, value });
   * ```
   */
  onChange: _propTypes2.default.func,

  /**
   * An optional label to use with the select field. This will be a floating label as seen on the text field.
   */
  label: _propTypes2.default.node,

  /**
   * An optional placeholder to use in the select field. This will only appear when no value has been selected.
   */
  placeholder: _propTypes2.default.string,

  /**
   * Boolean if the select field should be disabled.
   */
  disabled: _propTypes2.default.bool,

  /**
   * Boolean if the select field is required. This will update the label and placeholder to include a `*` suffix.
   */
  required: _propTypes2.default.bool,

  /**
   * Boolean if the select field is considered to be in an `error` state.
   *
   * @see {@link TextFields/TextField#error}
   */
  error: _propTypes2.default.bool,

  /**
   * An optional text to display when the text select field is in an error state.
   *
   * @see {@link TextFields/TextField#errorText}
   */
  errorText: _propTypes2.default.node,

  /**
   * An optional text to display below the select field to provide input help to the user.
   * This will only be displayed if the select field is not in an error state.
   *
   * @see {@link #helpOnFocus}
   * @see {@link TextFields/TextField#errorText}
   */
  helpText: _propTypes2.default.node,

  /**
   * Boolean if the `helpText` should only appear on focus.
   *
   * @see {@link #helpText}
   * @see {@link TextFields/TextField#helpOnFocus}
   */
  helpOnFocus: _propTypes2.default.bool,

  /**
   * An optional function to call when any element in the select field has been clicked.
   */
  onClick: _propTypes2.default.func,

  /**
   * An optional function to call when the `keydown` event has been triggered anywhere in the
   * select field.
   */
  onKeyDown: _propTypes2.default.func,

  /**
   * An optional function to call when the select field's toggle has gained focus.
   */
  onFocus: _propTypes2.default.func,

  /**
   * An optional function to call when the select field's toggle has been blurred. This
   * will be triggered if the user hits the up or down arrow keys to traverse the list
   * of items.
   */
  onBlur: _propTypes2.default.func,

  /**
   * The icon to use to display the dropdown arrow.
   */
  dropdownIcon: _propTypes2.default.element,

  /**
   * Boolean if the select field is in a toolbar. This should automatically be injected by the `Toolbar`
   * component if being used as a `titleMenu` or one of the `actions`.
   *
   * @see {@link Toolbars/Toolbar#titleMenu}
   * @see {@link Toolbars/Toolbar#actions}
   */
  toolbar: _propTypes2.default.bool,

  /**
   * Boolean if the currently active item should be removed from the list of available `menuItems`.
   * If this is `undefined`, it will strip out the active one only when the
   * `position === SelectField.Positions.BELOW`.
   */
  stripActiveItem: _propTypes2.default.bool,

  /**
   * The transition name to use when a new value has been selected. By default, it will have the
   * new item _drop_ into the select field's input location.
   */
  transitionName: _propTypes2.default.string.isRequired,

  /**
   * The transition time to use when a new value has been selected. If this value is `0`, there
   * will be no transition.
   */
  transitionTime: _propTypes2.default.number.isRequired,

  /**
   * This is how the menu's `List` gets anchored to the select field.
   *
   * @see {@link Helpers/Layover#anchor}
   */
  anchor: _anchorShape2.default,

  /**
   * This is the anchor to use when the `position` is set to `Autocomplete.Positions.BELOW`.
   *
   * @see {@link Helpers/Layover#belowAnchor}
   */
  belowAnchor: _anchorShape2.default,

  /**
   * This is the animation position for the list that appears.
   *
   * @see {@link Helpers/Layover#animationPosition}
   */
  position: _positionShape2.default,

  /**
   * This is how the menu's list will be "fixed" to the `toggle` component.
   *
   * @see {@link Helpers/Layover#fixedTo}
   */
  fixedTo: _fixedToShape2.default,

  /**
   * Boolean if the menu's list should appear horizontally instead of vertically.
   */
  listInline: _propTypes2.default.bool,

  /**
   * The list's z-depth for applying box shadow. This should be a number from 0 to 5.
   */
  listZDepth: _propTypes2.default.number,

  /**
   * Boolean if the list should have its height restricted to the `$md-menu-mobile-max-height`/
   * `$md-menu-desktop-max-height` values.
   *
   * @see [md-menu-mobile-max-height](/components/menus?tab=1#variable-md-menu-mobile-max-height)
   * @see [md-menu-desktop-max-height](/components/menus?tab=1#variable-md-menu-desktop-max-height)
   */
  listHeightRestricted: _propTypes2.default.bool,

  /**
   * @see {@link Helpers/Layover#xThreshold}
   */
  xThreshold: _propTypes2.default.number,

  /**
   * @see {@link Helpers/Layover#yThreshold}
   */
  yThreshold: _propTypes2.default.number,

  /**
   * @see {@link Helpers/Layover#closeOnOutsideClick}
   */
  closeOnOutsideClick: _propTypes2.default.bool,

  /**
   * An optional transition name to use for the list appearing/disappearing.
   *
   * @see {@link Menus/Menu#transitionName}
   */
  menuTransitionName: _propTypes2.default.string,

  /**
   * @see {@link Helpers/Layover#transitionEnterTimeout}
   */
  menuTransitionEnterTimeout: _propTypes2.default.number,

  /**
   * @see {@link Helpers/Layover#transitionLeaveTimeout}
   */
  menuTransitionLeaveTimeout: _propTypes2.default.number,

  /**
   * @see {@link Menus/Menu#block}
   */
  block: _propTypes2.default.bool,

  /**
   * @see {@link Menus/Menu#fullWidth}
   */
  fullWidth: _propTypes2.default.bool,

  /**
   * @see {@link Helpers/Layover#centered}
   */
  centered: _Menu2.default.propTypes.centered,

  /**
   * @see {@link Helpers/Layover#sameWidth}
   */
  sameWidth: _Menu2.default.propTypes.sameWidth,

  /**
   * Since the `menuItems` get mapped into `ListItem`, this prop is used to remove
   * any unnecessary props from the `ListItem` itself. This is where you
   * would remove parts of your object such as `description` or `__metadata__`.
   */
  deleteKeys: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]))]),

  /**
   * Boolean if the menu should automatically try to reposition itself to stay within
   * the viewport when the `fixedTo` element scrolls.
   *
   * @see {@link Helpers/Layover#repositionOnScroll}
   */
  repositionOnScroll: _propTypes2.default.bool,

  /**
   * Boolean if the menu should automatically try to reposition itself to stay within
   * the viewport when the window resizes.
   *
   * @see {@link Helpers/Layover#repositionOnResize}
   */
  repositionOnResize: _propTypes2.default.bool,

  /**
   * Boolean if the menu logic should be simplified without any viewport logic and position
   * based on the relative position of the menu. This will most like require some additional
   * styles applied to the menu.
   *
   * @see {@link Helpers/Layover#simplified}
   */
  simplifiedMenu: _propTypes2.default.bool,

  /**
   * @see {@link Helpers/Layover#minLeft}
   */
  minLeft: _Menu2.default.propTypes.minLeft,

  /**
   * @see {@link Helpers/Layover#minRight}
   */
  minRight: _Menu2.default.propTypes.minLeft,

  /**
   * @see {@link Helpers/Layover#minBottom}
   */
  minBottom: _Menu2.default.propTypes.minBottom,

  /**
   * @see {@link Helpers/Layover#fillViewportWidth}
   */
  fillViewportWidth: _propTypes2.default.bool,

  /**
   * @see {@link Helpers/Layover#fillViewportHeight}
   */
  fillViewportHeight: _propTypes2.default.bool,

  /**
   * The direction that the underline should appear from.
   */
  lineDirection: _propTypes2.default.oneOf(['left', 'center', 'right']).isRequired,

  iconChildren: (0, _deprecated2.default)(_propTypes2.default.node, 'Use `dropdownIcon` instead'),
  iconClassName: (0, _deprecated2.default)(_propTypes2.default.string, 'Use `dropdownIcon` instead'),
  isOpen: (0, _deprecated2.default)(_propTypes2.default.bool, 'Use `visible` instead'),
  defaultOpen: (0, _deprecated2.default)(_propTypes2.default.bool, 'Use `defaultVisible` instead'),
  initiallyOpen: (0, _deprecated2.default)(_propTypes2.default.bool, 'Use `defaultVisible` instead'),
  onMenuToggle: (0, _deprecated2.default)(_propTypes2.default.func, 'Use `onVisibilityChange` instead'),
  stretchList: (0, _deprecated2.default)(_propTypes2.default.bool, 'No longer valid after the changes to the `Menu` component. Possibly use `sameWidth` instead'),
  menuStyle: (0, _deprecated2.default)(_propTypes2.default.object, 'Use `style` instead'),
  menuClassName: (0, _deprecated2.default)(_propTypes2.default.string, 'Use `className` instead'),
  floatingLabel: (0, _deprecated2.default)(_propTypes2.default.bool, 'A select field can only have floating labels now. Only provide the `label` prop'),
  noAutoAdjust: (0, _deprecated2.default)(_propTypes2.default.bool, 'No longer valid to use since select fields are no longer text fields'),
  adjustMinWidth: (0, _deprecated2.default)(_propTypes2.default.bool, 'No longer valid to use since select fields are no longer text fields')
};
SelectField.defaultProps = {
  anchor: {
    x: SelectField.HorizontalAnchors.INNER_LEFT,
    y: SelectField.VerticalAnchors.OVERLAP
  },
  fixedTo: _Menu2.default.defaultProps.fixedTo,
  position: SelectField.Positions.TOP_LEFT,
  itemLabel: 'label',
  itemValue: 'value',
  itemProps: 'getProps',
  dropdownIcon: _react2.default.createElement(
    _FontIcon2.default,
    null,
    'arrow_drop_down'
  ),
  lineDirection: 'left',
  menuItems: [],
  defaultValue: '',
  defaultVisible: false,
  keyboardMatchingTimeout: 1000,
  transitionName: 'md-drop',
  transitionTime: 300,
  repositionOnScroll: true,
  repositionOnResize: false
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this._getActiveItemLabel = function (item, value, itemLabel, itemValue) {
    var v = _this2._getItemPart(item, itemLabel, itemValue);
    var label = _this2._getItemPart(item, itemLabel, itemValue, true);

    return v === value || v === parseFloat(value) ? label : '';
  };

  this._getActive = function (props, state) {
    var activeLabel = '';
    var activeIndex = -1;
    var value = (0, _getField2.default)(props, state, 'value');
    if ((0, _isValued2.default)(value)) {
      var menuItems = props.menuItems,
          itemLabel = props.itemLabel,
          itemValue = props.itemValue;


      menuItems.some(function (item, index) {
        activeLabel = _this2._getActiveItemLabel(item, value, itemLabel, itemValue);
        var found = (0, _isValued2.default)(activeLabel);
        if (found) {
          activeIndex = index;
        }

        return found;
      });
    }

    return { activeLabel: activeLabel, activeIndex: activeIndex };
  };

  this._attemptItemFocus = function (index) {
    if (index === -1) {
      return;
    }

    var item = _this2._items[index];
    if (item) {
      item.focus();
    }
  };

  this._setListItem = function (item) {
    if (!item) {
      return;
    }

    if (item.props.active) {
      _this2._activeItem = (0, _reactDom.findDOMNode)(item);
      item.focus();

      if (!_this2.state.listProps[ARIA_ACTIVE]) {
        var _extends2;

        _this2.setState({ listProps: _extends({}, _this2.state.listProps, (_extends2 = {}, _extends2[ARIA_ACTIVE] = _this2.props.id + '-options-active', _extends2)) });
      }
    }

    _this2._items.push(item);
  };

  this._scrollActiveIntoView = function (listRef) {
    if (listRef === null) {
      _this2._items = [];
      return;
    } else if (!_this2._activeItem) {
      return;
    }

    var list = (0, _reactDom.findDOMNode)(listRef);
    var offsetTop = _this2._activeItem.offsetTop;

    list.scrollTop = offsetTop > MOBILE_LIST_PADDING ? offsetTop : 0;
  };

  this._toggle = function (e) {
    var _props4 = _this2.props,
        isOpen = _props4.isOpen,
        onVisibilityChange = _props4.onVisibilityChange,
        onMenuToggle = _props4.onMenuToggle;

    var visible = !(typeof isOpen !== 'undefined' ? isOpen : (0, _getField2.default)(_this2.props, _this2.state, 'visible'));
    if (onMenuToggle || onVisibilityChange) {
      (onMenuToggle || onVisibilityChange)(visible, e);
    }

    var state = void 0;
    if (typeof isOpen === 'undefined' && typeof _this2.props.visible === 'undefined') {
      state = { visible: visible };
    }

    if (state) {
      _this2.setState(state);
    }
  };

  this._close = function (e) {
    if (_this2.props.onVisibilityChange) {
      _this2.props.onVisibilityChange(false, e);
    }

    if (e.type === 'keydown' && _this2._field) {
      _this2._field.focus();
    }

    var state = void 0;
    if (_this2.props.required && !(0, _getField2.default)(_this2.props, _this2.state, 'value')) {
      state = { error: true };
    }

    if (typeof _this2.props.visible === 'undefined') {
      state = state || {};
      state.visible = false;
    }

    if (state) {
      _this2.setState(state);
    }
  };

  this._handleClick = function (e) {
    if (_this2.props.onClick) {
      _this2.props.onClick(e);
    }

    var isOpen = _this2.props.isOpen;

    var visible = typeof isOpen !== 'undefined' ? isOpen : (0, _getField2.default)(_this2.props, _this2.state, 'visible');
    if (visible && _this2._container) {
      var node = e.target;
      while (_this2._container.contains(node)) {
        if (node.dataset && typeof node.dataset.id !== 'undefined') {
          var _node$dataset = node.dataset,
              id = _node$dataset.id,
              value = _node$dataset.value;

          _this2._selectItem(parseInt(id, 10), value, e);
          return;
        }

        node = node.parentNode;
      }
    }
  };

  this._selectItem = function (dataIndex, dataValue, e) {
    var _props5 = _this2.props,
        required = _props5.required,
        menuItems = _props5.menuItems,
        itemLabel = _props5.itemLabel,
        itemValue = _props5.itemValue,
        onChange = _props5.onChange,
        id = _props5.id,
        name = _props5.name;

    var value = _this2._getItemPart(menuItems[dataIndex], itemLabel, itemValue);
    var prevValue = (0, _getField2.default)(_this2.props, _this2.state, 'value');
    if (prevValue !== value && onChange) {
      onChange(value, dataIndex, e, { id: id, name: name, value: value });
    }

    var state = _extends({}, _this2._getActive({ value: value, itemLabel: itemLabel, itemValue: itemValue, menuItems: menuItems }, {}), {
      error: !!required && !value && value !== 0
    });

    if (typeof _this2.props.value === 'undefined') {
      state.value = value;
    }

    _this2.setState(state);
  };

  this._handleFocus = function (e) {
    if (_this2.props.onFocus) {
      _this2.props.onFocus(e);
    }

    _this2.setState({ active: true });
  };

  this._handleBlur = function (e) {
    if (_this2.props.onBlur) {
      _this2.props.onBlur(e);
    }

    var error = _this2.state.error;
    var _props6 = _this2.props,
        isOpen = _props6.isOpen,
        required = _props6.required;

    var visible = typeof isOpen !== 'undefined' ? isOpen : (0, _getField2.default)(_this2.props, _this2.state, 'visible');
    var value = (0, _getField2.default)(_this2.props, _this2.state, 'value');

    if (required && !visible) {
      error = !value;
    }

    _this2.setState({ active: false, error: error });
  };

  this._handleKeyDown = function (e) {
    var _props7 = _this2.props,
        isOpen = _props7.isOpen,
        onKeyDown = _props7.onKeyDown;

    if (onKeyDown) {
      onKeyDown(e);
    }

    var key = e.which || e.keyCode;
    var up = key === _keyCodes.UP;
    var down = key === _keyCodes.DOWN;
    var visible = typeof isOpen !== 'undefined' ? isOpen : (0, _getField2.default)(_this2.props, _this2.state, 'visible');

    if (up || down) {
      e.preventDefault();

      if (!visible) {
        _this2._toggle(e);
        return;
      }

      _this2._advanceFocus(up);
    } else if (!visible && (0, _handleKeyboardAccessibility2.default)(e, _this2._toggle, true, true)) {
      return;
    } else if (visible && (key === _keyCodes.ESC || key === _keyCodes.TAB)) {
      if (_this2._field && key === _keyCodes.ESC) {
        _this2._field.focus();
      }

      _this2._close(e);
      return;
    } else {
      _this2._selectItemByLetter(key, e);
    }
  };

  this._advanceFocus = function (decrement) {
    var _props8 = _this2.props,
        position = _props8.position,
        stripActiveItem = _props8.stripActiveItem;
    var activeIndex = _this2.state.activeIndex;


    var below = position === SelectField.Positions.BELOW;
    var value = (0, _getField2.default)(_this2.props, _this2.state, 'value');
    var valued = (0, _isValued2.default)(value);
    var itemStripped = (typeof stripActiveItem !== 'undefined' ? stripActiveItem : below) && valued;

    // If the select field is positioned below and there is no value, need to increment the last index
    // by one since this select field removes the active item. Need to account for that here when there
    // is no value.
    var lastIndex = _this2._items.length - (itemStripped ? 0 : 1);
    if (decrement && activeIndex <= 0 || !decrement && activeIndex >= lastIndex) {
      return;
    }

    var nextIndex = Math.max(-1, Math.min(lastIndex, activeIndex + (decrement ? -1 : 1)));
    if (nextIndex === activeIndex) {
      return;
    }

    _this2._attemptItemFocus(nextIndex - (itemStripped ? 1 : 0));
    _this2.setState({ activeIndex: nextIndex });
  };

  this._selectItemByLetter = function (key, e) {
    var charCode = String.fromCharCode(key);
    var isLetter = charCode && charCode.match(/[A-Za-z0-9-_ ]/);
    var isKeypad = (0, _isBetween2.default)(key, _keyCodes.KEYPAD_ZERO, _keyCodes.KEYPAD_NINE);
    if (!(0, _isBetween2.default)(key, _keyCodes.ZERO, _keyCodes.NINE) && !isKeypad && !isLetter) {
      return;
    }

    var letter = isLetter ? charCode : String(key - (isKeypad ? _keyCodes.KEYPAD_ZERO : _keyCodes.ZERO));

    if (_this2._matchingTimeout) {
      clearTimeout(_this2._matchingTimeout);
    }

    _this2._matchingTimeout = setTimeout(function () {
      _this2._matchingTimeout = null;

      _this2.setState({ match: null, lastSearch: null });
    }, _this2.props.keyboardMatchingTimeout);

    _this2._selectFirstMatch(letter, e);
  };

  this._selectFirstMatch = function (letter, e) {
    var _props9 = _this2.props,
        menuItems = _props9.menuItems,
        itemLabel = _props9.itemLabel,
        itemValue = _props9.itemValue,
        isOpen = _props9.isOpen,
        onChange = _props9.onChange,
        id = _props9.id,
        name = _props9.name;
    var lastSearch = _this2.state.lastSearch;

    var match = -1;
    var search = ('' + (lastSearch || '') + letter).toUpperCase();
    menuItems.some(function (item, index) {
      if (item && (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object' && item.disabled) {
        return false;
      }

      var label = String(_this2._getItemPart(item, itemLabel, itemValue, true));
      if (label && label.toUpperCase().replace(/\s/g, '').indexOf(search) === 0) {
        match = index;
      }

      return match > -1;
    });

    var state = {
      match: match,
      lastSearch: search
    };

    if (match !== -1) {
      var activeItem = menuItems[match];
      state.activeLabel = _this2._getItemPart(activeItem, itemLabel, itemValue, true);
      state.activeIndex = match;

      var visible = typeof isOpen !== 'undefined' ? isOpen : (0, _getField2.default)(_this2.props, _this2.state, 'visible');
      if (visible) {
        if (state.match !== _this2.state.match) {
          _this2._attemptItemFocus(state.activeIndex);
        }
      } else {
        var value = _this2._getItemPart(activeItem, itemLabel, itemValue);
        var prevValue = (0, _getField2.default)(_this2.props, _this2.state, 'value');

        if (value !== prevValue && onChange) {
          onChange(value, match, e, { id: id, name: name, value: value });
        }

        if (typeof _this2.props.value === 'undefined') {
          state.value = value;
        }
      }
    }

    _this2.setState(state);
  };

  this._reduceItems = function (items, item, i) {
    if (item === null) {
      return items;
    } else if (_react2.default.isValidElement(item)) {
      items.push(item);
      return items;
    }

    var _props10 = _this2.props,
        getItemProps = _props10.getItemProps,
        id = _props10.id,
        itemLabel = _props10.itemLabel,
        itemProps = _props10.itemProps,
        itemValue = _props10.itemValue,
        position = _props10.position,
        stripActiveItem = _props10.stripActiveItem;

    var below = position === SelectField.Positions.BELOW;
    var value = (0, _getField2.default)(_this2.props, _this2.state, 'value');

    var dataValue = _this2._getItemPart(item, itemLabel, itemValue);
    var primaryText = _this2._getItemPart(item, itemLabel, itemValue, true);

    var active = dataValue === value || dataValue === parseFloat(value);
    var stripped = (typeof stripActiveItem !== 'undefined' ? stripActiveItem : below) && active;
    if (!stripped) {
      var objectType = (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object';
      var props = objectType ? (0, _omit2.default)(item, _this2._deleteKeys) : {};
      var disabled = props.disabled || false;
      props.ref = disabled ? null : _this2._setListItem;
      props.id = active ? id + '-options-active' : null;
      props.active = active;
      props.tabIndex = -1;
      props.primaryText = primaryText;
      props.key = item.key || dataValue;
      props.role = 'option';
      props['data-id'] = disabled ? null : i;
      props['data-value'] = disabled ? null : dataValue;

      var getProps = objectType && item[itemProps] || getItemProps;
      if (typeof getProps === 'function') {
        Object.assign(props, getProps({
          index: i,
          active: active,
          disabled: disabled,
          itemValue: itemValue,
          value: value,
          props: props,
          item: item,
          field: _this2
        }));
      }

      items.push(_react2.default.createElement(_ListItem2.default, props));
    }

    return items;
  };
};

exports.default = SelectField;

/***/ }),

/***/ "./node_modules/react-md/lib/SelectFields/SelectFieldInput.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-md/lib/SelectFields/SelectFieldInput.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _CSSTransitionGroupTick = __webpack_require__(/*! ../constants/CSSTransitionGroupTick */ "./node_modules/react-md/lib/constants/CSSTransitionGroupTick.js");

var _CSSTransitionGroupTick2 = _interopRequireDefault(_CSSTransitionGroupTick);

var _themeColors = __webpack_require__(/*! ../utils/themeColors */ "./node_modules/react-md/lib/utils/themeColors.js");

var _themeColors2 = _interopRequireDefault(_themeColors);

var _FontIcon = __webpack_require__(/*! ../FontIcons/FontIcon */ "./node_modules/react-md/lib/FontIcons/FontIcon.js");

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _AccessibleFakeInkedButton = __webpack_require__(/*! ../Helpers/AccessibleFakeInkedButton */ "./node_modules/react-md/lib/Helpers/AccessibleFakeInkedButton.js");

var _AccessibleFakeInkedButton2 = _interopRequireDefault(_AccessibleFakeInkedButton);

var _IconSeparator = __webpack_require__(/*! ../Helpers/IconSeparator */ "./node_modules/react-md/lib/Helpers/IconSeparator.js");

var _IconSeparator2 = _interopRequireDefault(_IconSeparator);

var _Paper = __webpack_require__(/*! ../Papers/Paper */ "./node_modules/react-md/lib/Papers/Paper.js");

var _Paper2 = _interopRequireDefault(_Paper);

var _TextFieldDivider = __webpack_require__(/*! ../TextFields/TextFieldDivider */ "./node_modules/react-md/lib/TextFields/TextFieldDivider.js");

var _TextFieldDivider2 = _interopRequireDefault(_TextFieldDivider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectFieldInput = function (_PureComponent) {
  _inherits(SelectFieldInput, _PureComponent);

  function SelectFieldInput() {
    var _temp, _this, _ret;

    _classCallCheck(this, SelectFieldInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _PureComponent.call.apply(_PureComponent, [this].concat(args))), _this), _this.state = { transition: null }, _this._timeout = null, _this._transitionNewValue = function () {
      var _this$props = _this.props,
          transitionTime = _this$props.transitionTime,
          transitionName = _this$props.transitionName;

      if (_this._timeout) {
        clearTimeout(_this._timeout);
      }

      _this._timeout = setTimeout(function () {
        _this._timeout = setTimeout(function () {
          _this._timeout = null;
          _this.setState({ transition: null });
        }, transitionTime);

        _this.setState({ transition: _this.state.transition + ' ' + transitionName + '-enter-active' });
      }, _CSSTransitionGroupTick2.default);

      _this.setState({ transition: transitionName + '-enter' });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  SelectFieldInput.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value) {
      this._transitionNewValue();
    }
  };

  SelectFieldInput.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this._timeout) {
      clearTimeout(this._timeout);
    }
  };

  SelectFieldInput.prototype.render = function render() {
    var _props = this.props,
        id = _props.id,
        className = _props.className,
        name = _props.name,
        value = _props.value,
        label = _props.label,
        placeholder = _props.placeholder,
        active = _props.active,
        activeLabel = _props.activeLabel,
        error = _props.error,
        disabled = _props.disabled,
        required = _props.required,
        toolbar = _props.toolbar,
        below = _props.below,
        lineDirection = _props.lineDirection,
        dropdownIcon = _props.dropdownIcon,
        iconChildren = _props.iconChildren,
        iconClassName = _props.iconClassName,
        transitionName = _props.transitionName,
        transitionTime = _props.transitionTime,
        props = _objectWithoutProperties(_props, ['id', 'className', 'name', 'value', 'label', 'placeholder', 'active', 'activeLabel', 'error', 'disabled', 'required', 'toolbar', 'below', 'lineDirection', 'dropdownIcon', 'iconChildren', 'iconClassName', 'transitionName', 'transitionTime']);

    var transition = this.state.transition;


    var divider = void 0;
    if (!below && !toolbar) {
      divider = _react2.default.createElement(_TextFieldDivider2.default, {
        key: 'text-divider',
        active: active,
        error: error,
        lineDirection: lineDirection,
        className: 'md-divider--select-field'
      });
    }

    var visibleLabel = activeLabel;
    if (!activeLabel && activeLabel !== 0) {
      visibleLabel = (!label || active) && placeholder || '';
    }

    var labelActive = !!activeLabel || activeLabel === 0;

    var icon = dropdownIcon;
    if (iconClassName || iconChildren) {
      icon = _react2.default.createElement(
        _FontIcon2.default,
        { iconClassName: iconClassName },
        iconChildren
      );
    }
    icon = _react2.default.cloneElement(icon, { disabled: disabled });

    return _react2.default.createElement(
      _AccessibleFakeInkedButton2.default,
      _extends({}, props, {
        id: id + '-toggle',
        role: 'listbox',
        disabled: disabled,
        component: _Paper2.default,
        zDepth: below && active ? 1 : 0,
        inkDisabled: !below,
        className: (0, _classnames2.default)('md-select-field', (0, _themeColors2.default)({
          disabled: disabled,
          hint: !labelActive && placeholder,
          text: labelActive
        }), className)
      }),
      _react2.default.createElement(
        _IconSeparator2.default,
        {
          label: visibleLabel,
          labelClassName: transition,
          className: (0, _classnames2.default)('md-text-field', {
            'md-text-field--margin': !below && !label,
            'md-text-field--floating-margin': label,
            'md-text-field--toolbar': toolbar && !below,
            'md-select-field--text-field': !below,
            'md-select-field--btn': below
          })
        },
        icon
      ),
      divider,
      _react2.default.createElement('input', {
        key: 'value',
        type: 'hidden',
        id: id,
        name: name,
        value: value,
        required: required,
        disabled: disabled
      })
    );
  };

  return SelectFieldInput;
}(_react.PureComponent);

SelectFieldInput.propTypes = {
  id: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  name: _propTypes2.default.string,
  value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]).isRequired,
  disabled: _propTypes2.default.bool,
  required: _propTypes2.default.bool,
  label: _propTypes2.default.node,
  placeholder: _propTypes2.default.string,
  active: _propTypes2.default.bool,
  activeLabel: _propTypes2.default.node,
  below: _propTypes2.default.bool,
  error: _propTypes2.default.bool,
  toolbar: _propTypes2.default.bool,
  dropdownIcon: _propTypes2.default.element,
  iconClassName: _propTypes2.default.string,
  iconChildren: _propTypes2.default.node,
  transitionName: _propTypes2.default.string.isRequired,
  transitionTime: _propTypes2.default.number.isRequired,
  lineDirection: _TextFieldDivider2.default.propTypes.lineDirection
};
SelectFieldInput.defaultProps = {
  transitionName: 'md-drop',
  transitionTime: 300
};
exports.default = SelectFieldInput;

/***/ }),

/***/ "./node_modules/react-md/lib/SelectFields/SelectFieldToggle.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-md/lib/SelectFields/SelectFieldToggle.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _addSuffix = __webpack_require__(/*! ../utils/StringUtils/addSuffix */ "./node_modules/react-md/lib/utils/StringUtils/addSuffix.js");

var _addSuffix2 = _interopRequireDefault(_addSuffix);

var _isValued = __webpack_require__(/*! ../utils/isValued */ "./node_modules/react-md/lib/utils/isValued.js");

var _isValued2 = _interopRequireDefault(_isValued);

var _FloatingLabel = __webpack_require__(/*! ../TextFields/FloatingLabel */ "./node_modules/react-md/lib/TextFields/FloatingLabel.js");

var _FloatingLabel2 = _interopRequireDefault(_FloatingLabel);

var _TextFieldMessage = __webpack_require__(/*! ../TextFields/TextFieldMessage */ "./node_modules/react-md/lib/TextFields/TextFieldMessage.js");

var _TextFieldMessage2 = _interopRequireDefault(_TextFieldMessage);

var _SelectFieldInput = __webpack_require__(/*! ./SelectFieldInput */ "./node_modules/react-md/lib/SelectFields/SelectFieldInput.js");

var _SelectFieldInput2 = _interopRequireDefault(_SelectFieldInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectFieldToggle = function (_PureComponent) {
  _inherits(SelectFieldToggle, _PureComponent);

  function SelectFieldToggle() {
    _classCallCheck(this, SelectFieldToggle);

    return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
  }

  SelectFieldToggle.prototype.render = function render() {
    var _props = this.props,
        id = _props.id,
        style = _props.style,
        className = _props.className,
        inputStyle = _props.inputStyle,
        inputClassName = _props.inputClassName,
        required = _props.required,
        disabled = _props.disabled,
        active = _props.active,
        error = _props.error,
        errorText = _props.errorText,
        helpText = _props.helpText,
        helpOnFocus = _props.helpOnFocus,
        visible = _props.visible,
        activeLabel = _props.activeLabel,
        propLabel = _props.label,
        propPlaceholder = _props.placeholder,
        props = _objectWithoutProperties(_props, ['id', 'style', 'className', 'inputStyle', 'inputClassName', 'required', 'disabled', 'active', 'error', 'errorText', 'helpText', 'helpOnFocus', 'visible', 'activeLabel', 'label', 'placeholder']);

    var _props2 = this.props,
        label = _props2.label,
        placeholder = _props2.placeholder;

    if (required) {
      if (label) {
        label = (0, _addSuffix2.default)(label, '*');
      }

      if (placeholder && !label) {
        placeholder = (0, _addSuffix2.default)(placeholder, '*');
      }
    }

    return _react2.default.createElement(
      'div',
      { style: style, className: (0, _classnames2.default)('md-select-field__toggle', className) },
      _react2.default.createElement(_FloatingLabel2.default, {
        label: label,
        htmlFor: id,
        active: active || visible,
        error: error,
        floating: (0, _isValued2.default)(activeLabel) || active || visible,
        disabled: disabled
      }),
      _react2.default.createElement(_SelectFieldInput2.default, _extends({}, props, {
        id: id,
        style: inputStyle,
        className: inputClassName,
        label: label,
        placeholder: placeholder,
        activeLabel: activeLabel,
        active: active,
        error: error,
        disabled: disabled
      })),
      _react2.default.createElement(_TextFieldMessage2.default, {
        active: active || visible,
        error: error,
        errorText: errorText,
        helpText: helpText,
        helpOnFocus: helpOnFocus,
        leftIcon: false,
        rightIcon: false
      })
    );
  };

  return SelectFieldToggle;
}(_react.PureComponent);

SelectFieldToggle.propTypes = {
  id: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  inputStyle: _propTypes2.default.object,
  inputClassName: _propTypes2.default.string,
  activeLabel: _propTypes2.default.node,
  value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  required: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  label: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  active: _propTypes2.default.bool,
  error: _propTypes2.default.bool,
  errorText: _propTypes2.default.node,
  helpText: _propTypes2.default.node,
  helpOnFocus: _propTypes2.default.bool,
  below: _propTypes2.default.bool,
  visible: _propTypes2.default.bool
};
exports.default = SelectFieldToggle;

/***/ }),

/***/ "./node_modules/react-md/lib/SelectFields/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-md/lib/SelectFields/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.SelectField = undefined;

var _SelectField2 = __webpack_require__(/*! ./SelectField */ "./node_modules/react-md/lib/SelectFields/SelectField.js");

var _SelectField3 = _interopRequireDefault(_SelectField2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SelectField3.default;
exports.SelectField = _SelectField3.default;

/***/ }),

/***/ "./node_modules/react-md/lib/Subheaders/Subheader.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-md/lib/Subheaders/Subheader.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _themeColors = __webpack_require__(/*! ../utils/themeColors */ "./node_modules/react-md/lib/utils/themeColors.js");

var _themeColors2 = _interopRequireDefault(_themeColors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The `Subheader` component is generally used inside of lists or menus.
 */
var Subheader = function (_PureComponent) {
  _inherits(Subheader, _PureComponent);

  function Subheader() {
    _classCallCheck(this, Subheader);

    return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
  }

  Subheader.prototype.render = function render() {
    var _props = this.props,
        Component = _props.component,
        inset = _props.inset,
        primary = _props.primary,
        primaryText = _props.primaryText,
        className = _props.className,
        children = _props.children,
        props = _objectWithoutProperties(_props, ['component', 'inset', 'primary', 'primaryText', 'className', 'children']);

    return _react2.default.createElement(
      Component,
      _extends({}, props, {
        className: (0, _classnames2.default)('md-subheader', {
          'md-list-item--inset': inset
        }, (0, _themeColors2.default)({ primary: primary, hint: !primary }), className)
      }),
      primaryText,
      children
    );
  };

  return Subheader;
}(_react.PureComponent);

Subheader.propTypes = {
  /**
   * An optional style to apply to the subheader.
   */
  style: _propTypes2.default.object,

  /**
   * An optional className to apply to the subheader.
   */
  className: _propTypes2.default.string,

  /**
   * Boolean if the subheader should be styled with the primary color.
   */
  primary: _propTypes2.default.bool,

  /**
   * Boolean if the subheader is inset in the list. This will add additional
   * spacing to align the subheader.
   */
  inset: _propTypes2.default.bool,

  /**
   * The primary text to use in the subheader.
   */
  primaryText: _propTypes2.default.node.isRequired,

  /**
   * Any optional children to display after the `primaryText`. This prop is
   * not recommended.
   */
  children: _propTypes2.default.node,

  /**
   * The component to render the Subheader as.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func, _propTypes2.default.object]).isRequired
};
Subheader.defaultProps = {
  component: 'li'
};
exports.default = Subheader;

/***/ }),

/***/ "./node_modules/react-md/lib/Subheaders/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-md/lib/Subheaders/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Subheader = undefined;

var _Subheader2 = __webpack_require__(/*! ./Subheader */ "./node_modules/react-md/lib/Subheaders/Subheader.js");

var _Subheader3 = _interopRequireDefault(_Subheader2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Subheader3.default;
exports.Subheader = _Subheader3.default;

/***/ }),

/***/ "./node_modules/react-md/lib/TextFields/FloatingLabel.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-md/lib/TextFields/FloatingLabel.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _themeColors = __webpack_require__(/*! ../utils/themeColors */ "./node_modules/react-md/lib/utils/themeColors.js");

var _themeColors2 = _interopRequireDefault(_themeColors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FloatingLabel = function (_PureComponent) {
  _inherits(FloatingLabel, _PureComponent);

  function FloatingLabel() {
    _classCallCheck(this, FloatingLabel);

    return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
  }

  FloatingLabel.prototype.render = function render() {
    var _cn;

    var _props = this.props,
        label = _props.label,
        htmlFor = _props.htmlFor,
        className = _props.className,
        floating = _props.floating,
        active = _props.active,
        error = _props.error,
        disabled = _props.disabled,
        iconOffset = _props.iconOffset,
        customSize = _props.customSize,
        props = _objectWithoutProperties(_props, ['label', 'htmlFor', 'className', 'floating', 'active', 'error', 'disabled', 'iconOffset', 'customSize']);

    if (!label) {
      return null;
    }

    return _react2.default.createElement(
      'label',
      _extends({}, props, {
        htmlFor: htmlFor,
        className: (0, _classnames2.default)('md-floating-label', (_cn = {
          'md-floating-label--inactive': !floating,
          'md-floating-label--inactive-sized': !floating && !customSize
        }, _cn['md-floating-label--' + customSize] = customSize, _cn['md-floating-label--inactive-' + customSize] = customSize && !floating, _cn['md-floating-label--floating'] = floating, _cn['md-floating-label--icon-offset'] = iconOffset, _cn), (0, _themeColors2.default)({
          disabled: disabled,
          error: error,
          hint: !active,
          primary: active
        }, className))
      }),
      label
    );
  };

  return FloatingLabel;
}(_react.PureComponent);

FloatingLabel.propTypes = {
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  label: _propTypes2.default.node,
  floating: _propTypes2.default.bool,
  error: _propTypes2.default.bool,
  active: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  iconOffset: _propTypes2.default.bool,
  customSize: _propTypes2.default.string,
  htmlFor: _propTypes2.default.string
};
exports.default = FloatingLabel;

/***/ }),

/***/ "./node_modules/react-md/lib/TextFields/Message.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-md/lib/TextFields/Message.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Message = function (_PureComponent) {
  _inherits(Message, _PureComponent);

  function Message() {
    _classCallCheck(this, Message);

    return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
  }

  Message.prototype.render = function render() {
    var _props = this.props,
        active = _props.active,
        children = _props.children,
        className = _props.className;


    if (!children) {
      return null;
    }

    return _react2.default.createElement(
      'div',
      {
        'aria-hidden': !active,
        className: (0, _classnames2.default)('md-text-field-message', 'md-text-field-message--' + (active ? '' : 'in') + 'active', className)
      },
      children
    );
  };

  return Message;
}(_react.PureComponent);

Message.propTypes = {
  active: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  children: _propTypes2.default.node
};
exports.default = Message;

/***/ }),

/***/ "./node_modules/react-md/lib/TextFields/TextFieldDivider.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-md/lib/TextFields/TextFieldDivider.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _Divider = __webpack_require__(/*! ../Dividers/Divider */ "./node_modules/react-md/lib/Dividers/Divider.js");

var _Divider2 = _interopRequireDefault(_Divider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextFieldDivider = function (_PureComponent) {
  _inherits(TextFieldDivider, _PureComponent);

  function TextFieldDivider() {
    _classCallCheck(this, TextFieldDivider);

    return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
  }

  TextFieldDivider.prototype.render = function render() {
    var _props = this.props,
        active = _props.active,
        error = _props.error,
        lineDirection = _props.lineDirection,
        className = _props.className,
        props = _objectWithoutProperties(_props, ['active', 'error', 'lineDirection', 'className']);

    return _react2.default.createElement(_Divider2.default, _extends({}, props, {
      className: (0, _classnames2.default)('md-divider--text-field md-divider--expand-from-' + lineDirection, {
        'md-divider--text-field-expanded': active,
        'md-divider--text-field-active': !error && active,
        'md-divider--text-field-error': error
      }, className)
    }));
  };

  return TextFieldDivider;
}(_react.PureComponent);

TextFieldDivider.propTypes = {
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  active: _propTypes2.default.bool,
  error: _propTypes2.default.bool,
  lineDirection: _propTypes2.default.oneOf(['left', 'center', 'right'])
};
exports.default = TextFieldDivider;

/***/ }),

/***/ "./node_modules/react-md/lib/TextFields/TextFieldMessage.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-md/lib/TextFields/TextFieldMessage.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _themeColors = __webpack_require__(/*! ../utils/themeColors */ "./node_modules/react-md/lib/utils/themeColors.js");

var _themeColors2 = _interopRequireDefault(_themeColors);

var _Message = __webpack_require__(/*! ./Message */ "./node_modules/react-md/lib/TextFields/Message.js");

var _Message2 = _interopRequireDefault(_Message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextFieldMessage = function (_PureComponent) {
  _inherits(TextFieldMessage, _PureComponent);

  function TextFieldMessage(props) {
    _classCallCheck(this, TextFieldMessage);

    var _this = _possibleConstructorReturn(this, _PureComponent.call(this, props));

    _this.state = {
      message: props.error && props.errorText || props.helpText || props.errorText,
      isMessageVisible: _this._isMessageVisible(props)
    };
    return _this;
  }

  TextFieldMessage.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var keys = ['active', 'error', 'helpOnFocus', 'helpText', 'errorText'];
    if (this._anyChanges(keys, this.props, nextProps)) {
      this.setState({
        isMessageVisible: this._isMessageVisible(nextProps),
        message: nextProps.error && nextProps.errorText || nextProps.helpText || nextProps.errorText
      });
    }
  };

  TextFieldMessage.prototype._anyChanges = function _anyChanges(keys, p1, p2) {
    var changed = false;
    keys.some(function (key) {
      if (p1[key] !== p2[key]) {
        changed = true;
      }

      return changed;
    });

    return changed;
  };

  TextFieldMessage.prototype._isMessageVisible = function _isMessageVisible(props) {
    var error = props.error,
        errorText = props.errorText,
        helpText = props.helpText,
        helpOnFocus = props.helpOnFocus,
        active = props.active;

    if (error && errorText) {
      return true;
    }

    return !!(helpText && (!helpOnFocus || active));
  };

  TextFieldMessage.prototype.render = function render() {
    var _props = this.props,
        maxLength = _props.maxLength,
        error = _props.error,
        className = _props.className,
        errorText = _props.errorText,
        helpText = _props.helpText,
        currentLength = _props.currentLength,
        leftIcon = _props.leftIcon,
        rightIcon = _props.rightIcon,
        block = _props.block,
        active = _props.active;
    var _state = this.state,
        isMessageVisible = _state.isMessageVisible,
        message = _state.message;


    if (currentLength === 'undefined' || !helpText && !errorText && !maxLength) {
      return null;
    }

    return _react2.default.createElement(
      'div',
      {
        className: (0, _classnames2.default)('md-text-field-message-container', {
          'md-text-field-message-container--count-only': !message || !isMessageVisible,
          'md-text-field-message-container--left-icon-offset': leftIcon,
          'md-text-field-message-container--right-icon-offset': rightIcon,
          'md-full-width': !block
        }, (0, _themeColors2.default)({ error: error, disabled: !error }), className)
      },
      _react2.default.createElement(
        _Message2.default,
        { key: 'message', active: isMessageVisible },
        message
      ),
      _react2.default.createElement(
        _Message2.default,
        { key: 'counter', className: 'md-text-field-message--counter', active: active },
        maxLength ? currentLength + ' / ' + maxLength : null
      )
    );
  };

  return TextFieldMessage;
}(_react.PureComponent);

TextFieldMessage.propTypes = {
  className: _propTypes2.default.string,
  error: _propTypes2.default.bool,
  helpText: _propTypes2.default.node,
  errorText: _propTypes2.default.node,
  active: _propTypes2.default.bool,
  helpOnFocus: _propTypes2.default.bool,
  maxLength: _propTypes2.default.number,
  currentLength: _propTypes2.default.number,
  leftIcon: _propTypes2.default.bool,
  rightIcon: _propTypes2.default.bool,
  block: _propTypes2.default.bool
};
exports.default = TextFieldMessage;

/***/ }),

/***/ "./node_modules/react-md/lib/Toolbars/Toolbar.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-md/lib/Toolbars/Toolbar.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _deprecated = __webpack_require__(/*! react-prop-types/lib/deprecated */ "./node_modules/react-prop-types/lib/deprecated.js");

var _deprecated2 = _interopRequireDefault(_deprecated);

var _invalidIf = __webpack_require__(/*! ../utils/PropTypes/invalidIf */ "./node_modules/react-md/lib/utils/PropTypes/invalidIf.js");

var _invalidIf2 = _interopRequireDefault(_invalidIf);

var _between = __webpack_require__(/*! ../utils/PropTypes/between */ "./node_modules/react-md/lib/utils/PropTypes/between.js");

var _between2 = _interopRequireDefault(_between);

var _Paper = __webpack_require__(/*! ../Papers/Paper */ "./node_modules/react-md/lib/Papers/Paper.js");

var _Paper2 = _interopRequireDefault(_Paper);

var _ToolbarTitle = __webpack_require__(/*! ./ToolbarTitle */ "./node_modules/react-md/lib/Toolbars/ToolbarTitle.js");

var _ToolbarTitle2 = _interopRequireDefault(_ToolbarTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toolbar = function (_PureComponent) {
  _inherits(Toolbar, _PureComponent);

  function Toolbar() {
    _classCallCheck(this, Toolbar);

    return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
  }

  Toolbar.prototype.render = function render() {
    var _props = this.props,
        style = _props.style,
        className = _props.className,
        component = _props.component,
        titleStyle = _props.titleStyle,
        titleClassName = _props.titleClassName,
        prominentTitle = _props.prominentTitle,
        themed = _props.themed,
        singleColor = _props.singleColor,
        actions = _props.actions,
        fixed = _props.fixed,
        children = _props.children,
        inset = _props.inset,
        titleId = _props.titleId,
        propNav = _props.nav,
        propTitle = _props.title,
        propTitleMenu = _props.titleMenu,
        propZDepth = _props.zDepth,
        propColored = _props.colored,
        propProminent = _props.prominent,
        containerStyle = _props.containerStyle,
        containerClassName = _props.containerClassName,
        actionLeft = _props.actionLeft,
        actionsRight = _props.actionsRight,
        primary = _props.primary,
        secondary = _props.secondary,
        props = _objectWithoutProperties(_props, ['style', 'className', 'component', 'titleStyle', 'titleClassName', 'prominentTitle', 'themed', 'singleColor', 'actions', 'fixed', 'children', 'inset', 'titleId', 'nav', 'title', 'titleMenu', 'zDepth', 'colored', 'prominent', 'containerStyle', 'containerClassName', 'actionLeft', 'actionsRight', 'primary', 'secondary']);

    var _props2 = this.props,
        colored = _props2.colored,
        title = _props2.title,
        titleMenu = _props2.titleMenu,
        nav = _props2.nav,
        prominent = _props2.prominent,
        zDepth = _props2.zDepth;


    colored = colored || primary || secondary;
    prominent = prominent || prominentTitle;

    title = _react2.default.createElement(_ToolbarTitle2.default, {
      key: 'title',
      style: titleStyle,
      className: titleClassName,
      prominent: prominentTitle,
      offset: prominentTitle,
      id: typeof titleId === 'undefined' && props.id ? props.id + '-title' : titleId,
      title: title
    });

    if (nav || actionLeft) {
      var navEl = _react.Children.only(nav || actionLeft);
      nav = (0, _react.cloneElement)(nav, {
        className: (0, _classnames2.default)('md-btn--toolbar md-toolbar--action-left', navEl.props.className)
      });
    }

    var rightActions = void 0;
    if (actions || actionsRight) {
      rightActions = _react.Children.map(_react.Children.toArray(actions || actionsRight), function (action) {
        return (0, _react.cloneElement)(action, {
          className: (0, _classnames2.default)('md-btn--toolbar', action.props.className)
        });
      });

      rightActions = _react2.default.createElement(
        'div',
        { key: 'actions', className: 'md-cell--right md-toolbar--action-right' },
        rightActions
      );
    }

    if (titleMenu) {
      titleMenu = _react.Children.only(titleMenu);
      titleMenu = (0, _react.cloneElement)(titleMenu, {
        className: (0, _classnames2.default)('md-title md-title--toolbar md-select-field--toolbar', {
          'md-title--toolbar-offset': prominentTitle,
          'md-title--toolbar-prominent': prominentTitle
        }, titleMenu.props.className),
        position: titleMenu.props.position || 'tl',
        toolbar: true
      });
    }

    if (typeof zDepth !== 'number') {
      zDepth = fixed ? 2 : 0;
    }

    return _react2.default.createElement(
      _Paper2.default,
      _extends({}, props, {
        component: component,
        zDepth: zDepth,
        style: style,
        className: (0, _classnames2.default)('md-toolbar', {
          'md-background--primary': colored,
          'md-toolbar--themed': themed,
          'md-toolbar--text-white': singleColor && colored,
          'md-toolbar--prominent': prominent,
          'md-toolbar--fixed': fixed,
          'md-toolbar--inset': inset
        }, className)
      }),
      nav,
      title,
      titleMenu,
      children,
      rightActions
    );
  };

  return Toolbar;
}(_react.PureComponent);

Toolbar.propTypes = {
  /**
   * An optional id to provide to the toolbar. If this is specified and the `titleId` is not, the title
   * will gain an id of `${id}-title`. This will not be applied to the `titleMenu`.
   *
   * @see {@link #titleId}
   */
  id: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  /**
   * An optional style to apply to the toolbar.
   */
  style: _propTypes2.default.object,

  /**
   * An optional className to apply to the toolbar,
   */
  className: _propTypes2.default.string,

  /*
   * An optional style to apply to the `h2` surrounding the `title` prop.
   */
  titleStyle: _propTypes2.default.object,

  /*
   * An optional className to apply to the `h2` surrounding the `title` prop.
   */
  titleClassName: _propTypes2.default.string,

  /**
   * Boolean if the toolbar should more prominent. This will double the height of the toolbar.
   */
  prominent: _propTypes2.default.bool,

  /**
   * Boolean if the toolbar's title should be more prominent. This will move the title to the
   * second line of the toolbar. This only works when the `prominent` prop is true as well.
   */
  prominentTitle: _propTypes2.default.bool,

  /**
   * The current title of the page to show in the toolbar. It is invalid to specify both a
   * `title` and a `titleMenu`. Only one should be given.
   */
  title: (0, _invalidIf2.default)(_propTypes2.default.node, 'titleMenu'),

  /**
   * An optional id to give the main title in the toolbar. This will not be applied to the
   * `titleMenu`.
   */
  titleId: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  /**
   * An optional title menu to display instead of the title. This should be a `SelectField` component.
   * It is cloned with some additional props, so if the `SelectField` is separated into a separate
   * component, the following props must be passed to get the correct styling: `className`, `block`,
   * `paddedBlock`, `position`.
   */
  titleMenu: _propTypes2.default.element,

  /**
   * This prop is used for rendering an optional navigation button to the left of the `title`
   * or the `titleMenu` component. This needs to be an icon `Button` because some additional props
   * are cloned into it.
   */
  nav: _propTypes2.default.element,

  /**
   * Any additional actions to display to the right of the title. This should be a list or a single
   * `Button` to display. The buttons get cloned with an additional className for toolbar styling.
   */
  actions: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.element)]),

  /**
   * Any children to display in the toolbar. This will be displayed between the optional title and
   * actions.
   */
  children: _propTypes2.default.node,

  /**
   * Boolean if the toolbar should be fixed to the top of the page. This will add some additional box shadow.
   */
  fixed: _propTypes2.default.bool,

  /**
   * Boolean if the nav, actions, and title should share the same color. For a `colored` or dark `themed`
   * toolbar, they will all be colored white. For a transparent or light `themed` toolbar, the colors will
   * be the `rgba(0, 0, 0, .87)`. Setting this to false will only style the title to the specific color
   * stated above.
   */
  singleColor: _propTypes2.default.bool,

  /**
   * Boolean if the toolbar should be colored based off the current theme. This will either style the background
   * to be fairly white, or fairly black. You can not specify both `themed` and `colored`.
   */
  themed: _propTypes2.default.bool,

  /**
   * Boolean if the toolbar should be colored with the `$md-primary-color`.
   */
  colored: (0, _invalidIf2.default)(_propTypes2.default.bool, 'themed'),

  /**
   * The component to render the toolbar as.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string, _propTypes2.default.object]).isRequired,

  /**
   * Boolean if the toolbar is inset in the page. This will just add some margin around
   * it.
   */
  inset: _propTypes2.default.bool,

  /**
   * An optional zDepth to enforce for the toolbar. This should be a number between 0 and 5.
   * If this is omitted, the toolbar will gain a zDepth of 2 when `fixed`.
   */
  zDepth: (0, _between2.default)(_propTypes2.default.number, 0, 5),
  containerStyle: (0, _deprecated2.default)(_propTypes2.default.object, 'The `container` no longer exists in the `Toolbar`. Use the `style` prop instead'),
  containerClassName: (0, _deprecated2.default)(_propTypes2.default.string, 'The `container` no longer exists in the `Toolbar`. Use the `className` prop instead'),
  primary: (0, _deprecated2.default)(_propTypes2.default.bool, 'Use the `colored` prop instead'),
  secondary: (0, _deprecated2.default)(_propTypes2.default.bool, 'Toolbars can no longer be themed to the secondary color. Use the `colored` prop instead'),
  actionLeft: (0, _deprecated2.default)(_propTypes2.default.element, 'Use the `nav` prop instead'),
  actionsRight: (0, _deprecated2.default)(_propTypes2.default.node, 'Use the `menu` prop and/or the `actions` prop instead')
};
Toolbar.defaultProps = {
  singleColor: true,
  component: 'header'
};
exports.default = Toolbar;

/***/ }),

/***/ "./node_modules/react-md/lib/Toolbars/ToolbarTitle.js":
/*!************************************************************!*\
  !*** ./node_modules/react-md/lib/Toolbars/ToolbarTitle.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToolbarTitle = function (_PureComponent) {
  _inherits(ToolbarTitle, _PureComponent);

  function ToolbarTitle() {
    _classCallCheck(this, ToolbarTitle);

    return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
  }

  ToolbarTitle.prototype.render = function render() {
    var _props = this.props,
        title = _props.title,
        className = _props.className,
        prominent = _props.prominent,
        offset = _props.offset,
        props = _objectWithoutProperties(_props, ['title', 'className', 'prominent', 'offset']);

    if (!title) {
      return null;
    }

    var fullClassName = (0, _classnames2.default)('md-title md-title--toolbar', {
      'md-title--toolbar-prominent': prominent,
      'md-title--toolbar-offset': offset
    }, className);

    if ((0, _react.isValidElement)(title)) {
      var titleEl = _react.Children.only(title);
      return (0, _react.cloneElement)(title, _extends({}, props, {
        id: titleEl.props.id || props.id,
        className: (0, _classnames2.default)(fullClassName, titleEl.props.className)
      }));
    }

    return _react2.default.createElement(
      'h2',
      _extends({}, props, {
        className: fullClassName
      }),
      title
    );
  };

  return ToolbarTitle;
}(_react.PureComponent);

ToolbarTitle.propTypes = {
  className: _propTypes2.default.string,
  prominent: _propTypes2.default.bool,
  offset: _propTypes2.default.bool,
  title: _propTypes2.default.node
};
exports.default = ToolbarTitle;

/***/ }),

/***/ "./node_modules/react-md/lib/Tooltips/Tooltip.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-md/lib/Tooltips/Tooltip.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _CSSTransitionGroupTick = __webpack_require__(/*! ../constants/CSSTransitionGroupTick */ "./node_modules/react-md/lib/constants/CSSTransitionGroupTick.js");

var _CSSTransitionGroupTick2 = _interopRequireDefault(_CSSTransitionGroupTick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tooltip = function (_PureComponent) {
  _inherits(Tooltip, _PureComponent);

  function Tooltip(props) {
    _classCallCheck(this, Tooltip);

    var _this = _possibleConstructorReturn(this, _PureComponent.call(this, props));

    _this.state = {
      entering: false,
      leaving: false,
      active: false,
      visible: false
    };

    _this._timeout = null;
    return _this;
  }

  Tooltip.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this._timeout) {
      clearTimeout(this._timeout);
    }
  };

  Tooltip.prototype.componentWillEnter = function componentWillEnter(cb) {
    var _this2 = this;

    this._timeout = setTimeout(function () {
      _this2._timeout = setTimeout(function () {
        _this2._timeout = null;

        cb();
      }, _this2.props.enterTimeout);
      _this2.setState({ active: true });
    }, _CSSTransitionGroupTick2.default);

    this.setState({ entering: true });
  };

  Tooltip.prototype.componentDidEnter = function componentDidEnter() {
    this.setState({ entering: false, active: false, visible: true });
  };

  Tooltip.prototype.componentWillLeave = function componentWillLeave(cb) {
    var _this3 = this;

    if (this._timeout) {
      clearTimeout(this._timeout);
    }

    this._timeout = setTimeout(function () {
      _this3._timeout = setTimeout(function () {
        _this3._timeout = null;

        cb();
      }, _this3.props.leaveTimeout);

      _this3.setState({ active: true, visible: false });
    }, _CSSTransitionGroupTick2.default);

    this.setState({ leaving: true });
  };

  Tooltip.prototype.render = function render() {
    var _cn;

    var _state = this.state,
        active = _state.active,
        entering = _state.entering,
        leaving = _state.leaving,
        visible = _state.visible;
    var _props = this.props,
        style = _props.style,
        className = _props.className,
        children = _props.children,
        position = _props.position;


    var direction = position === 'top' || position === 'bottom' ? 'horizontal' : 'vertical';
    return _react2.default.createElement(
      'span',
      {
        style: style,
        className: (0, _classnames2.default)('md-tooltip md-tooltip--' + position + ' md-tooltip--' + direction, (_cn = {
          'md-tooltip--active': active,
          'md-tooltip--enter': entering,
          'md-tooltip--enter-active': entering && active,
          'md-tooltip--leave': leaving,
          'md-tooltip--leave-active': leaving && active
        }, _cn['md-tooltip--' + position + '-active'] = visible || entering && active, _cn), className)
      },
      children
    );
  };

  return Tooltip;
}(_react.PureComponent);

Tooltip.propTypes = {
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  position: _propTypes2.default.oneOf(['top', 'right', 'bottom', 'left']),
  children: _propTypes2.default.node.isRequired,
  enterTimeout: _propTypes2.default.number,
  leaveTimeout: _propTypes2.default.number
};
Tooltip.defaultProps = {
  position: 'bottom',
  enterTimeout: 150,
  leaveTimeout: 150
};
exports.default = Tooltip;

/***/ }),

/***/ "./node_modules/react-md/lib/Tooltips/TooltipContainer.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-md/lib/Tooltips/TooltipContainer.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TransitionGroup = __webpack_require__(/*! react-transition-group/TransitionGroup */ "./node_modules/react-transition-group/TransitionGroup.js");

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _keyCodes = __webpack_require__(/*! ../constants/keyCodes */ "./node_modules/react-md/lib/constants/keyCodes.js");

var _captureNextEvent = __webpack_require__(/*! ../utils/EventUtils/captureNextEvent */ "./node_modules/react-md/lib/utils/EventUtils/captureNextEvent.js");

var _captureNextEvent2 = _interopRequireDefault(_captureNextEvent);

var _touches = __webpack_require__(/*! ../utils/EventUtils/touches */ "./node_modules/react-md/lib/utils/EventUtils/touches.js");

var _Tooltip = __webpack_require__(/*! ./Tooltip */ "./node_modules/react-md/lib/Tooltips/Tooltip.js");

var _Tooltip2 = _interopRequireDefault(_Tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getContainer(tooltip) {
  return tooltip.parentNode;
}

var TooltipContainer = function (_PureComponent) {
  _inherits(TooltipContainer, _PureComponent);

  function TooltipContainer() {
    var _temp, _this, _ret;

    _classCallCheck(this, TooltipContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _PureComponent.call.apply(_PureComponent, [this].concat(args))), _this), _this.state = { visible: false }, _this._delayedTimeout = null, _this._unlinkTarget = function () {
      var target = _this._target;
      if (target) {
        (0, _touches.removeTouchEvent)(target, 'start', _this._showTooltip);
        (0, _touches.removeTouchEvent)(target, 'end', _this._hideTooltip);
        target.removeEventListener('mouseover', _this._showTooltip);
        target.removeEventListener('mouseleave', _this._hideTooltip);
        target.removeEventListener('keyup', _this._handleKeyUp);
        target.removeEventListener('blur', _this._hideTooltip);
      }
    }, _this._setTarget = function () {
      var container = _this._container;
      var target = _this.props.target;


      _this._unlinkTarget();

      if (typeof target === 'function') {
        target = target(container, _this);
      }
      target = target ? (0, _reactDom.findDOMNode)(target) : container;
      _this._target = target || null;

      if (target) {
        (0, _touches.addTouchEvent)(target, 'start', _this._showTooltip);
        (0, _touches.addTouchEvent)(target, 'end', _this._hideTooltip);
        target.addEventListener('mouseover', _this._showTooltip);
        target.addEventListener('mouseleave', _this._hideTooltip);
        target.addEventListener('keyup', _this._handleKeyUp);
        target.addEventListener('blur', _this._hideTooltip);
      }
    }, _this._setContainers = function (span) {
      if (span) {
        _this._container = _this.props.container(span.parentNode, _this);
      }
    }, _this._stopContextMenu = function (e) {
      e.preventDefault();
      window.removeEventListener('contextmenu', _this._stopContextMenu, true);
      (0, _captureNextEvent2.default)('click');
      _this.setState({ visible: true });
    }, _this._showTooltip = function (e) {
      if (e.type === 'mouseover' && _this._touched) {
        return;
      }

      if (e.type === 'touchstart') {
        _this._touched = true;

        window.addEventListener('contextmenu', _this._stopContextMenu, true);
        return;
      }

      var delay = _this.props.delay;

      if (_this._delayedTimeout) {
        clearTimeout(_this._delayedTimeout);
      }

      if (delay) {
        _this._delayedTimeout = setTimeout(function () {
          _this._delayedTimeout = null;

          _this.setState({ visible: true });
        }, delay);
      } else {
        _this.setState({ visible: true });
      }
    }, _this._hideTooltip = function (e) {
      if (_this._delayedTimeout) {
        clearTimeout(_this._delayedTimeout);
      }

      if (e.type === 'mouseover' && _this._touched) {
        return;
      }

      _this.setState({ visible: false });
    }, _this._handleKeyUp = function (e) {
      if ((e.which || e.keyCode) === _keyCodes.TAB) {
        _this._showTooltip(e);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  TooltipContainer.prototype.componentDidMount = function componentDidMount() {
    this._setTarget();
  };

  TooltipContainer.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.target !== prevProps.target) {
      this._setTarget();
    }
  };

  TooltipContainer.prototype.componentWillUnmount = function componentWillUnmount() {
    this._unlinkTarget();
    this._target = null;

    if (this._delayedTimeout) {
      clearTimeout(this._delayedTimeout);
    }
  };

  TooltipContainer.prototype.render = function render() {
    var visible = this.state.visible;
    var _props = this.props,
        style = _props.style,
        className = _props.className,
        tooltipStyle = _props.tooltipStyle,
        tooltipClassName = _props.tooltipClassName,
        label = _props.label,
        position = _props.position,
        enterTimeout = _props.enterTimeout,
        leaveTimeout = _props.leaveTimeout;


    var tooltip = _react2.default.createElement(
      _Tooltip2.default,
      {
        key: 'tooltip',
        style: tooltipStyle,
        className: tooltipClassName,
        position: position,
        enterTimeout: enterTimeout,
        leaveTimeout: leaveTimeout
      },
      label
    );

    return _react2.default.createElement(
      _TransitionGroup2.default,
      {
        style: style,
        className: (0, _classnames2.default)('md-tooltip-container', className),
        component: 'div'
      },
      _react2.default.createElement('span', { ref: this._setContainers, 'aria-hidden': true }),
      visible ? tooltip : null
    );
  };

  return TooltipContainer;
}(_react.PureComponent);

TooltipContainer.propTypes = {
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  tooltipStyle: _propTypes2.default.object,
  tooltipClassName: _propTypes2.default.string,
  label: _propTypes2.default.node.isRequired,
  position: _Tooltip2.default.propTypes.position,
  delay: _propTypes2.default.number,
  enterTimeout: _Tooltip2.default.propTypes.enterTimeout,
  leaveTimeout: _Tooltip2.default.propTypes.leaveTimeout,
  /**
   * A function that returns a DOM element that will be used as the tooltip's container.
   * A ref to the tooltip's DOM element will be passed into the function.
   */
  container: _propTypes2.default.func,
  /**
   * A component/element the tooltip should be linked to,
   * or a function that returns such a component/element.
   * A ref to the tooltip's container will be passed into the function.
   *
   * By default the tooltip's container will be used as the target.
   */
  target: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func])
};
TooltipContainer.defaultProps = {
  container: getContainer,
  delay: 0
};
exports.default = TooltipContainer;

/***/ }),

/***/ "./node_modules/react-md/lib/Tooltips/injectTooltip.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-md/lib/Tooltips/injectTooltip.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getDisplayName = __webpack_require__(/*! ../utils/StringUtils/getDisplayName */ "./node_modules/react-md/lib/utils/StringUtils/getDisplayName.js");

var _getDisplayName2 = _interopRequireDefault(_getDisplayName);

var _TooltipContainer = __webpack_require__(/*! ./TooltipContainer */ "./node_modules/react-md/lib/Tooltips/TooltipContainer.js");

var _TooltipContainer2 = _interopRequireDefault(_TooltipContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Takes any component and injects a tooltip container as a prop. The tooltip container
 * will add event listeners for touch, mouse, and keyboard events so that a tooltip will appear
 * in the ComposedComponent.
 *
 * If the `tooltipLabel` prop is omitted, the tooltip and event listeners will not
 * be included.
 *
 * ```js
 * @param {function} ComposedComponent the component to compose with the tooltip functionality.
 * @return {function} the ComposedComponent with a tooltip.
 * ```
 */
exports.default = function (ComposedComponent) {
  var _class, _temp2;

  return _temp2 = _class = function (_PureComponent) {
    _inherits(TooltipedComponent, _PureComponent);

    function TooltipedComponent() {
      var _temp, _this, _ret;

      _classCallCheck(this, TooltipedComponent);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _PureComponent.call.apply(_PureComponent, [this].concat(args))), _this), _this._composed = null, _this.getComposedComponent = function () {
        return _this._composed;
      }, _this._setComposedComponent = function (component) {
        _this._composed = component;
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    /**
     * Gets the composed component as a ref. This is useful if you need to access the ref of the
     * composed component instead of the `injectTooltip` HOC to use some publicly accessible methods.
     *
     * ```js
     * <SomeTooltippedComponent
     *   ref={tooltipHOC => {
     *     tooltipHOC.getComposedComponent().focus();
     *   }}
     * />
     * ```
     *
     * > NOTE: This can be `null`, so make sure to do a null check before using.
     */


    TooltipedComponent.prototype.render = function render() {
      var _props = this.props,
          tooltipLabel = _props.tooltipLabel,
          tooltipDelay = _props.tooltipDelay,
          tooltipPosition = _props.tooltipPosition,
          tooltipStyle = _props.tooltipStyle,
          tooltipClassName = _props.tooltipClassName,
          tooltipContainerStyle = _props.tooltipContainerStyle,
          tooltipContainerClassName = _props.tooltipContainerClassName,
          tooltipTransitionEnterTimeout = _props.tooltipTransitionEnterTimeout,
          tooltipTransitionLeaveTimeout = _props.tooltipTransitionLeaveTimeout,
          props = _objectWithoutProperties(_props, ['tooltipLabel', 'tooltipDelay', 'tooltipPosition', 'tooltipStyle', 'tooltipClassName', 'tooltipContainerStyle', 'tooltipContainerClassName', 'tooltipTransitionEnterTimeout', 'tooltipTransitionLeaveTimeout']);

      if (tooltipLabel) {
        props.tooltip = _react2.default.createElement(_TooltipContainer2.default, {
          key: 'tooltipContainer',
          label: tooltipLabel,
          delay: tooltipDelay,
          position: tooltipPosition,
          enterTimeout: tooltipTransitionEnterTimeout,
          leaveTimeout: tooltipTransitionLeaveTimeout,
          style: tooltipContainerStyle,
          className: tooltipContainerClassName,
          tooltipStyle: tooltipStyle,
          tooltipClassName: tooltipClassName
        });
      }

      props.ref = this._setComposedComponent;

      return _react2.default.createElement(ComposedComponent, props);
    };

    return TooltipedComponent;
  }(_react.PureComponent), _class.displayName = (0, _getDisplayName2.default)(ComposedComponent, 'Tooltip'), _class.propTypes = {
    /**
     * An optional style to apply to the tooltip container.
     */
    tooltipContainerStyle: _propTypes2.default.object,

    /**
     * An optional className to apply to the tooltip container.
     */
    tooltipContainerClassName: _propTypes2.default.string,

    /**
     * An optional style to apply to the tooltip itself.
     */
    tooltipStyle: _propTypes2.default.object,

    /**
     * An optional className to the tooltip itself.
     */
    tooltipClassName: _propTypes2.default.string,

    /**
     * The tooltip to display. If omitted, the `tooltip` prop will not be injected.
     */
    tooltipLabel: _propTypes2.default.node,

    /**
     * The amount of delay before the tooltip will appear on hover, touch, or keyboard focus.
     */
    tooltipDelay: _TooltipContainer2.default.propTypes.delay,

    /**
     * The position that the tooltip should appear related to the composed component.
     */
    tooltipPosition: _TooltipContainer2.default.propTypes.position,

    /**
     * The transition time for the tooltip appearing.
     */
    tooltipTransitionEnterTimeout: _TooltipContainer2.default.propTypes.enterTimeout,

    /**
     * The transition time for the tooltip disappearing.
     */
    tooltipTransitionLeaveTimeout: _TooltipContainer2.default.propTypes.leaveTimeout
  }, _temp2;
};

/***/ }),

/***/ "./node_modules/react-md/lib/constants/CSSTransitionGroupTick.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-md/lib/constants/CSSTransitionGroupTick.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
// This will need to keep in sync with the `ReactCSSTransitionGroupChild` `TICK` const.
// https://github.com/facebook/react/blob/master/src/addons/transitions/ReactCSSTransitionGroupChild.js#L22

exports.default = 17;

/***/ }),

/***/ "./node_modules/react-md/lib/constants/keyCodes.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-md/lib/constants/keyCodes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var LEFT_MOUSE = exports.LEFT_MOUSE = 0;
var RIGHT_MOUSE = exports.RIGHT_MOUSE = 2;

var TAB = exports.TAB = 9;
var ENTER = exports.ENTER = 13;
var ESC = exports.ESC = 27;
var SPACE = exports.SPACE = 32;
var PAGE_UP = exports.PAGE_UP = 33;
var PAGE_DOWN = exports.PAGE_DOWN = 34;
var END = exports.END = 35;
var HOME = exports.HOME = 36;
var LEFT = exports.LEFT = 37;
var UP = exports.UP = 38;
var RIGHT = exports.RIGHT = 39;
var DOWN = exports.DOWN = 40;

var ZERO = exports.ZERO = 48;
var NINE = exports.NINE = 57;
var KEYPAD_ZERO = exports.KEYPAD_ZERO = 96;
var KEYPAD_NINE = exports.KEYPAD_NINE = 105;

/***/ }),

/***/ "./node_modules/react-md/lib/constants/media.js":
/*!******************************************************!*\
  !*** ./node_modules/react-md/lib/constants/media.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var MOBILE_MIN_WIDTH = exports.MOBILE_MIN_WIDTH = 320;
var TABLET_MIN_WIDTH = exports.TABLET_MIN_WIDTH = 768;
var DESKTOP_MIN_WIDTH = exports.DESKTOP_MIN_WIDTH = 1025;

/***/ }),

/***/ "./node_modules/react-md/lib/utils/EventUtils/captureNextEvent.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-md/lib/utils/EventUtils/captureNextEvent.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = captureNextEvent;
/** @module utils/EventUtils/captureNextEvent */

/**
 * This function will capture the next event and stop propagation during the
 * bubbling cycle of events. This is really only useful if you want to stop
 * the default behavior of chained events.
 *
 * @param {String} type - The event type to capture.
 * @param {Object|func=} target - Either the DOM node to target, a callback function
 *      to call once the event has been captured, or undefined. If this is undefined,
 *      the event will be captured on the window.
 * @param {func=} callback - An optional callback function to call once the event
 *      has been captured.
 */
function captureNextEvent(type, target, callback) {
  var el = typeof target !== 'function' && target ? target : window;
  var cb = typeof target === 'function' ? target : callback;

  var capture = function capture(e) {
    e.stopPropagation();
    if (cb) {
      cb(e);
    }

    el.removeEventListener(type, capture, true);
  };

  el.addEventListener(type, capture, true);
}

/***/ }),

/***/ "./node_modules/react-md/lib/utils/EventUtils/handleKeyboardAccessibility.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/react-md/lib/utils/EventUtils/handleKeyboardAccessibility.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = handleKeyboardAccessibility;

var _keyCodes = __webpack_require__(/*! ../../constants/keyCodes */ "./node_modules/react-md/lib/constants/keyCodes.js");

var _closest = __webpack_require__(/*! ../closest */ "./node_modules/react-md/lib/utils/closest.js");

var _closest2 = _interopRequireDefault(_closest);

var _isFormPartRole = __webpack_require__(/*! ../isFormPartRole */ "./node_modules/react-md/lib/utils/isFormPartRole.js");

var _isFormPartRole2 = _interopRequireDefault(_isFormPartRole);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A utility function for adding keyboard accessibility to elements that are not a natively
 * clickable (div, span, etc). When the space or enter key is pressed while focusing the
 * element, different flows will happen.
 *
 * - space - The click event will be triggered and the default page scrolling behavior of the
 *      spacebar will be prevented
 * - enter - If the element has a form role ('checkbox' or 'radio'), the click event will not
 *      be triggered. Instead, it will find out if the element is inside a form. If it is, it
 *      will emulate the default behavior of attempting to submit the form. If the element does
 *      not have a form role, the click event will be triggered.
 *
 * @param {Event} e - the keydown event
 * @param {function} onClick - the on click event to be triggered if space or enter was pressed
 * @param {boolean=true} listenToEnter - boolean if the enter key should be used to trigger the
 *      the click event. Even if this is true, the click event will not be triggered if the role
 *      is for a form role.
 * @param {boolean=true} listenToSpace - boolean if the space key should be used to trigger the
 *      click event.
 * @return {Boolean} true if the enter or space keys were pressed while their listener is also active.
 */
function handleKeyboardAccessibility(e, onClick) {
  var listenToEnter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var listenToSpace = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  var key = e.which || e.keyCode;
  var space = listenToSpace && key === _keyCodes.SPACE;
  var enter = key === _keyCodes.ENTER;

  var tagName = e.target.tagName;
  // it is valid to press space in text fields, contenteditable, and buttons

  if (space && !tagName.match(/input|textarea|button/i) && e.target.getAttribute('contenteditable') !== 'true') {
    // Stop page scrolling
    e.preventDefault();
  }

  if (enter && (0, _isFormPartRole2.default)(e.target)) {
    var form = (0, _closest2.default)(e.target, 'form');
    var submit = form ? form.querySelector('*[type="submit"]') : null;
    if (submit) {
      submit.click();
    }

    return true;
  }

  if (enter && listenToEnter || space) {
    onClick(e);

    return true;
  }

  return false;
} /** @module utils/EventUtils/handleKeyboardAccessibility */

/***/ }),

/***/ "./node_modules/react-md/lib/utils/EventUtils/handleWindowClickListeners.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/react-md/lib/utils/EventUtils/handleWindowClickListeners.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = handleWindowClickListeners;
/** @module utils/EventUtils/handleWindowClickListeners */
var mobileSafari = void 0;

/**
 * Since mobile safari doesn't delegate click events to the window (it only does touch events),
 * this utility function will hack a fix to allow the delegation by updaging the body's cursor
 * to be a pointer.
 *
 * Hopefully this can be removed one day....
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/Events/click#Safari_Mobile
 * @param {function} cb - the callback function to use for a window click event.
 * @param {boolean} enabled - boolean if the click event is enabled.
 */
function handleWindowClickListeners(cb) {
  var enabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (typeof mobileSafari === 'undefined' && typeof window !== 'undefined') {
    var ua = window.navigator.userAgent;
    var iOS = ua.match(/iP(ad|hone)/i);
    var webkit = ua.match(/WebKit/i);
    mobileSafari = iOS && webkit && !ua.match(/CriOS/i);

    if (mobileSafari) {
      document.body.style.cursor = 'pointer';
    }
  }

  var listener = window[(enabled ? 'add' : 'remove') + 'EventListener'];
  listener('click', cb);
}

/***/ }),

/***/ "./node_modules/react-md/lib/utils/EventUtils/isValidClick.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-md/lib/utils/EventUtils/isValidClick.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = isValidClick;

var _keyCodes = __webpack_require__(/*! ../../constants/keyCodes */ "./node_modules/react-md/lib/constants/keyCodes.js");

/**
 * Checks if an event is a valid click event by ignoring
 * any clisk that are not the left mouse button and not
 * clicks that involve the shift key.
 *
 * @param {Object} e - the event to check
 * @return {Boolean} true if the event is valid.
 */
function isValidClick(e) {
  return e.button === _keyCodes.LEFT_MOUSE && !e.shiftKey;
} /** @module utils/EventUtils/isValidClick */

/***/ }),

/***/ "./node_modules/react-md/lib/utils/EventUtils/touches.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-md/lib/utils/EventUtils/touches.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.setTouchEvent = setTouchEvent;
exports.addTouchEvent = addTouchEvent;
exports.removeTouchEvent = removeTouchEvent;
// https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
var supportsPassive = void 0;
try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function get() {
      supportsPassive = true;
    }
  });
  window.addEventListener('test', null, opts);
} catch (e) {
  supportsPassive = false;
}

/**
 * A helper function for manually setting touch events on elements with the passive
 * option (when it is supported).
 *
 * @param {boolean} add - Boolean if the event listener should be added or removed.
 * @param {HTMLElement} el - The element to add the listener to.
 * @param {String} type - the event type to set. This should be 'start', 'move', or 'end'
 * @param {function} callback - The event listener callback function.
 * @param {Object=} options - any additional options to apply.
 */
function setTouchEvent(add, el, eventType, callback, options) {
  return el[(add ? 'add' : 'remove') + 'EventListener']('touch' + eventType, callback, supportsPassive ? _extends({ passive: true }, options) : false);
}

/**
 * A helper function for manually adding touch events on elements with the passive
 * option (when it is supported).
 *
 * @param {HTMLElement} el - The element to add the listener to.
 * @param {String} type - the event type to set. This should be 'start', 'move', or 'end'
 * @param {function} callback - The event listener callback function.
 * @param {Object=} options - any additional options to apply.
 */
function addTouchEvent(el, type, callback, options) {
  return setTouchEvent(true, el, type, callback, options);
}

/**
 * A helper function for manually removing touch events on elements with the passive
 * option (when it is supported).
 *
 * @param {HTMLElement} el - The element to add the listener to.
 * @param {String} type - the event type to set. This should be 'start', 'move', or 'end'
 * @param {function} callback - The event listener callback function.
 * @param {Object=} options - any additional options to apply.
 */
function removeTouchEvent(el, type, callback, options) {
  return setTouchEvent(false, el, type, callback, options);
}

/***/ }),

/***/ "./node_modules/react-md/lib/utils/NumberUtils/calculateHypotenuse.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-md/lib/utils/NumberUtils/calculateHypotenuse.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = calculateHypotenuse;
/** @module utils/NumberUtils/calculateHypotenuse */

/**
 * Calculates the hypotenuse using the x and y coordinates given.
 *
 * @param {number} a the x coordinate
 * @param {number} b the y coordinate
 * @return {number} the hypotenuse length for the given x and y coordinates.
 */
function calculateHypotenuse(a, b) {
  return Math.sqrt(a * a + b * b);
}

/***/ }),

/***/ "./node_modules/react-md/lib/utils/NumberUtils/isBetween.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-md/lib/utils/NumberUtils/isBetween.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = isBetween;
/** @module utils/NumberUtils/isBetween */

/**
 * Checks if a number is between a min and maximum (inclusive)
 *
 * @param {Number} num the number to check
 * @param {Number} min the minimum
 * @param {Number} max the maximum
 * @return {Boolean} true if the number is between the min and max (inclusive)
 */
function isBetween(num, min, max) {
  return num >= min && num <= max;
}

/***/ }),

/***/ "./node_modules/react-md/lib/utils/Positioning/calcPageOffset.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-md/lib/utils/Positioning/calcPageOffset.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = calcPageOffset;

var _getPagePosition = __webpack_require__(/*! ./getPagePosition */ "./node_modules/react-md/lib/utils/Positioning/getPagePosition.js");

var _getPagePosition2 = _interopRequireDefault(_getPagePosition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Calculates the page offset of an element. If the element
 * is false-ish, an empty object will be returned.
 *
 * This is really only used for calculating an ink position.
 *
 * @param {Node} el - An html node to find a page offset for.
 * @return {Object} an object with a left and top attribute for the page
 *    offset.
 */
function calcPageOffset(el) {
  if (!el) {
    return { left: null, right: null };
  }

  var rect = el.getBoundingClientRect();
  return {
    left: rect.left + (0, _getPagePosition2.default)('x'),
    top: rect.top + (0, _getPagePosition2.default)('y')
  };
} /** @module utils/Positioning/calcPageOffset */

/***/ }),

/***/ "./node_modules/react-md/lib/utils/Positioning/getPagePosition.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-md/lib/utils/Positioning/getPagePosition.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = getPagePosition;
/** @module utils/Positioning/getPagePosition */

/**
 * Gets the current page position.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY
 * @param {String} direction - The direction that should be retrieved. This
 *    should be either 'x' or 'y'.
 * @return {number} the position of the direction on the page.
 */
function getPagePosition(direction) {
  var scroll = 'scroll' + (direction === 'x' ? 'Left' : 'Top');
  if (typeof window.pageXOffset !== 'undefined') {
    return window['page' + direction.toUpperCase() + 'Offset'];
  } else if ((document.compatMode || '') === 'CSS1Compat') {
    return document.documentElement[scroll];
  } else {
    return document.body[scroll];
  }
}

/***/ }),

/***/ "./node_modules/react-md/lib/utils/Positioning/getScreenSize.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-md/lib/utils/Positioning/getScreenSize.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = getScreenSize;
/** @module utils/Positioning/getScreenSize */

/**
 * A utility function to get the height or width of the of the browser with
 * a fallback for older browsers.
 *
 * @param {String} position - the position to get the screen size for
 * @return {number} the screen size for the provided position.
 */
function getScreenSize(position) {
  if (position !== 'Height' && position !== 'Width' && "development" !== 'production') {
    throw new Error('The \'getScreenSize\' function requires either a position of \'Height\' or \'Width\' ' + ('but received `' + position + '`'));
  }

  return window['inner' + position] || document.documentElement['client' + position];
}

/***/ }),

/***/ "./node_modules/react-md/lib/utils/Positioning/getScroll.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-md/lib/utils/Positioning/getScroll.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = getScroll;
/** @module utils/Positioning/getScroll */

/**
 * A utility function to just get an element's scroll x and y
 * values. This is really just needed because `window` uses
 * different attributes.
 *
 * @param {Object} el - The element to get a scroll value from.
 * @return {Object} an object containing the scrollX and scrollY of the element.
 */
function getScroll(el) {
  if (typeof el.scrollX !== 'undefined' && typeof el.scrollY !== 'undefined') {
    return { x: el.scrollX, y: el.scrollY };
  } else if (typeof el.scrollLeft !== 'undefined' && typeof el.scrollTop !== 'undefined') {
    return { x: el.scrollLeft, y: el.scrollTop };
  }

  return { x: 0, y: 0 };
}

/***/ }),

/***/ "./node_modules/react-md/lib/utils/Positioning/getSelectedTextPosition.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-md/lib/utils/Positioning/getSelectedTextPosition.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = getSelectedTextPosition;

var _getSelectedText = __webpack_require__(/*! ../getSelectedText */ "./node_modules/react-md/lib/utils/getSelectedText.js");

var _getSelectedText2 = _interopRequireDefault(_getSelectedText);

var _getTextWidth = __webpack_require__(/*! ./getTextWidth */ "./node_modules/react-md/lib/utils/Positioning/getTextWidth.js");

var _getTextWidth2 = _interopRequireDefault(_getTextWidth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @module utils/Positoning/getSelectedTextPosition */
var ZERO_WIDTH_CHARACTER = '\u200B';

/**
 * A utility function to attempt to get the current highlighted text position.
 *
 * When a context menu is opened, this function attempts to find the bounding client rect
 * for the highlighted text. However, if the text is in the text field, some weird stuff
 * happens and it is unable to get it correctly.
 */
function getSelectedTextPosition(e) {
  var height = void 0;
  var target = e.target,
      clientX = e.clientX,
      clientY = e.clientY;

  var text = (0, _getSelectedText2.default)();
  var width = Math.round((0, _getTextWidth2.default)(text, target) || 0);
  if (!text || target.classList.contains('md-text-field')) {
    height = parseInt(window.getComputedStyle(target).fontSize, 10);
    return {
      width: width,
      height: height,
      left: clientX - width,
      top: clientY
    };
  }

  // All browsers I am supporting have window.getSelection, but better safe than sorry
  if (window.getSelection) {
    var selection = window.getSelection();
    if (selection.rangeCount) {
      var range = selection.getRangeAt(0).cloneRange();
      var rect = null;
      if (range.getClientRects) {
        var rects = range.getClientRects();
        if (rects.length > 0) {
          rect = rects[0];
        }
      }

      if (!rect) {
        var span = document.createElement('span');
        span.appendChild(document.createTextNode(ZERO_WIDTH_CHARACTER));
        range.insertNode(span);
        rect = span.getBoundingClientRect();

        var spanParent = span.parentNode;
        spanParent.removeChild(span);
        spanParent.normalize();
      }

      return rect;
    }
  }

  return null;
}

/***/ }),

/***/ "./node_modules/react-md/lib/utils/Positioning/getTextWidth.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-md/lib/utils/Positioning/getTextWidth.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = getTextWidth;
/** @module utils/Positioning/getTextWidth */

var cachedCanvas = void 0;

/**
 * A utility function to measure the width (in px) of any text. It will require a canvas
 * and an element to use to determine the current fonts to apply since different fonts will
 * have different widths.
 *
 * This isn't fully accurate since some browsers handle the calculations a bit differently so
 * they are off by a 0-3px
 *
 * @param {String} text - The text to measure the width
 * @param {HTMLElement} el - The element to use to determine the current font for the text.
 * @param {HTMLElement=} canvas - An optional canvas to use for doing the calculations. If this
 *    is omitted, it will just use the locally created canvas to do the calculations.
 * @return {number} this will either return null if there is a problem calculating the width or
 *    the length (in px) of the text.
 */
function getTextWidth(text, el, canvas) {
  if (!el) {
    return null;
  }

  if (!canvas) {
    if (!cachedCanvas) {
      cachedCanvas = document.createElement('canvas');
    }

    canvas = cachedCanvas;
  }

  var context = canvas.getContext('2d');
  if (!context) {
    // context doesn't exist in testing without complicated mocks
    return null;
  }

  var styles = window.getComputedStyle(el);
  var font = styles.font;
  // Some browsers do not actually supply the font style since they are on an older version of CSSProperties,
  // so the font string needs to be made manually.
  if (!font) {
    // font-style font-variant font-weight font-size/line-height font-family
    var sizing = styles.fontSize + ' / ' + styles.lineHeight + ' ' + styles.fontFamily;
    font = styles.fontStyle + ' ' + styles.fontVariant + ' ' + styles.fontWeight + ' ' + sizing;
  }

  context.font = font;
  return context.measureText(text).width;
}

/***/ }),

/***/ "./node_modules/react-md/lib/utils/Positioning/isOutOfBounds.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-md/lib/utils/Positioning/isOutOfBounds.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = isOutOfBounds;

var _getScreenSize = __webpack_require__(/*! ./getScreenSize */ "./node_modules/react-md/lib/utils/Positioning/getScreenSize.js");

var _getScreenSize2 = _interopRequireDefault(_getScreenSize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isOutHorizontally(fixedTo, child, threshold) {
  var _fixedTo$getBoundingC = fixedTo.getBoundingClientRect(),
      fixedLeft = _fixedTo$getBoundingC.left,
      fixedRight = _fixedTo$getBoundingC.right;

  var _child$getBoundingCli = child.getBoundingClientRect(),
      childLeft = _child$getBoundingCli.left,
      childRight = _child$getBoundingCli.right;

  var offset = child.offsetWidth * threshold;

  var left = childLeft + offset;
  var right = childRight - offset;

  var screenEdge = childLeft === 0 || (0, _getScreenSize2.default)('Width') === childRight;
  return fixedLeft > left || fixedRight < right || screenEdge;
} /** @module utils/Positioning/isOutOfBounds */

function isOutVertically(fixedTo, child, toggle, threshold) {
  var _fixedTo$getBoundingC2 = fixedTo.getBoundingClientRect(),
      fixedTop = _fixedTo$getBoundingC2.top,
      fixedBottom = _fixedTo$getBoundingC2.bottom;

  var _child$getBoundingCli2 = child.getBoundingClientRect(),
      childTop = _child$getBoundingCli2.top,
      childBottom = _child$getBoundingCli2.bottom;

  var offset = toggle.offsetHeight * threshold;

  var screenEdge = childTop === 0 || (0, _getScreenSize2.default)('Height') === childBottom;
  return fixedTop > childTop + offset || fixedBottom < childTop - offset || screenEdge;
}

/**
 * Checks if the fixedTo object for the Layover component is considered
 * out of bounds relative to the container.
 *
 * @param {Object} fixedTo - The Layover's `fixedTo` prop.
 * @param {Object} child - The Layover's `children` prop as a DOM element.
 * @param {Object} toggle - The Layover's `toggle` prop as a DOM element.
 * @param {number} verticalThreshold - The vertical threshold multiplier to apply.
 * @param {number} horizontalThreshold - The horizontal threshold multiplier to apply.
 * @return {boolean} true if the Layover's `fixedTo` prop is considered out of bounds.
 */
function isOutOfBounds(fixedTo, child, toggle, verticalThreshold, horizontalThreshold) {
  if (fixedTo === window) {
    return false;
  } else if (fixedTo.x || fixedTo.y) {
    var x = fixedTo.x,
        y = fixedTo.y;

    return !!y && isOutVertically(y, child, toggle, verticalThreshold) || !!x && isOutHorizontally(x, child, horizontalThreshold);
  }

  return isOutVertically(fixedTo, child, toggle, verticalThreshold) || isOutHorizontally(fixedTo, child, horizontalThreshold);
}

/***/ }),

/***/ "./node_modules/react-md/lib/utils/Positioning/viewport.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-md/lib/utils/Positioning/viewport.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = viewport;

var _getScreenSize = __webpack_require__(/*! ./getScreenSize */ "./node_modules/react-md/lib/utils/Positioning/getScreenSize.js");

var _getScreenSize2 = _interopRequireDefault(_getScreenSize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Determines if an element is still in the viewport. If it is,
 * it will return a `true` boolean. If it is not, it will return
 * an object containing booleans for top, right, bottom, and left
 * where a `false` value will mean it is out of the viewport for that
 * position.
 *
 * @param {Object} el - The element to test.
 * @return {boolean|Object} the results.
 */
function viewport(el) {
  if (!el) {
    return {};
  }

  var rect = el.getBoundingClientRect();
  var top = rect.top >= 0;
  var right = rect.right <= (0, _getScreenSize2.default)('Width');
  var bottom = rect.bottom <= (0, _getScreenSize2.default)('Height');
  var left = rect.left >= 0;

  return top && right && bottom && left || { top: top, right: right, bottom: bottom, left: left };
} /** @module utils/Positioning/viewport */

/***/ }),

/***/ "./node_modules/react-md/lib/utils/PropTypes/between.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-md/lib/utils/PropTypes/between.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = between;

var _isBetween = __webpack_require__(/*! ../NumberUtils/isBetween */ "./node_modules/react-md/lib/utils/NumberUtils/isBetween.js");

var _isBetween2 = _interopRequireDefault(_isBetween);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Validates that a number is between a min and max value.
 *
 * @param {function} validator - The number validator to use.
 * @param {number} min - The min number to use.
 * @param {number} max - The max number to use.
 * @return {Error} the prop type error or null
 */
function between(validator, min, max) {
  return function validate(props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    for (var _len = arguments.length, args = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      args[_key - 5] = arguments[_key];
    }

    var err = validator.apply(undefined, [props, propName, componentName, location, propFullName].concat(args));
    var value = props[propName];
    if (!err && typeof value !== 'undefined' && !(0, _isBetween2.default)(value, min, max)) {
      err = new Error('You provided a `' + propFullNameSafe + '` ' + location + ' to the ' + componentNameSafe + ' that was ' + ('not within the range from \'' + min + ' - ' + max + '\'. `' + propFullNameSafe + '`: ' + value + '.'));
    }

    return err;
  };
} /** @module utils/PropTypes/between */

/***/ }),

/***/ "./node_modules/react-md/lib/utils/PropTypes/controlled.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-md/lib/utils/PropTypes/controlled.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = controlled;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Validates the a component is fully controlled or uncontrolled.  If the given prop is not
 * `undefined`, it will check if the `funcName` is defined and a function. A missing function
 * will generate an error similar to the built-in React controlled validation message.
 *
 * @param {String} funcName - The function name to use for additional validation.
 * @param {function} validator - The PropTypes validator to use for the given prop.
 * @return {Error} an error or null.
 */
function controlled(validator, funcName) {
  var fallbackPropName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'defaultValue';

  return function validate(props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    for (var _len = arguments.length, args = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      args[_key - 5] = arguments[_key];
    }

    var err = validator.apply(undefined, [props, propName, componentName, location, propFullName].concat(args));
    if (!err && typeof props[propName] !== 'undefined' && !props.readOnly && !props.disabled) {
      var _PropTypes$func;

      var funcError = (_PropTypes$func = _propTypes2.default.func).isRequired.apply(_PropTypes$func, [props, funcName, componentName, location, propFullName].concat(args));
      if (funcError) {
        err = new Error('You provided a `' + propFullNameSafe + '` ' + location + ' to the ' + componentNameSafe + ' without a ' + ('`' + funcName + '` handler. This will render a read only field. Set either the `' + funcName + '` ') + ('or use the `' + fallbackPropName + '` instead.'));
      }
    }

    return err;
  };
} /** @module utils/PropTypes/controlled */

/***/ }),

/***/ "./node_modules/react-md/lib/utils/PropTypes/invalidIf.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-md/lib/utils/PropTypes/invalidIf.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = invalidIf;
/** @module utils/PropTypes/invalidIf */

/**
 * A custom validator that will throw an error if any of the `ifDefinedProps` are also defined.
 *
 * @param {function} validator - The PropTypes validator to use.
 * @param {String...} ifDefinedProps - any othe rprop names to validate against
 * @return {Error} an error or null
 */
function invalidIf(validator) {
  for (var _len = arguments.length, ifDefinedProps = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    ifDefinedProps[_key - 1] = arguments[_key];
  }

  return function validate(props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    for (var _len2 = arguments.length, args = Array(_len2 > 5 ? _len2 - 5 : 0), _key2 = 5; _key2 < _len2; _key2++) {
      args[_key2 - 5] = arguments[_key2];
    }

    var err = validator.apply(undefined, [props, propName, componentName, location, propFullName].concat(args));
    if (err) {
      return err;
    }

    var defined = typeof props[propName] !== 'undefined' && !!props[propName];
    var othersDefined = ifDefinedProps.filter(function (name) {
      return typeof props[name] !== 'undefined' && !!props[name];
    });
    if (defined && othersDefined.length) {
      var names = '`' + othersDefined.join('`, `') + '`';
      if (othersDefined.length === 1) {
        return new Error('You provided both a `' + propFullNameSafe + '` and ' + names + ' prop to the ' + componentNameSafe + ' ' + 'but only one can be given.');
      }

      return new Error('You provided a `' + propFullNameSafe + '` ' + location + ' to the ' + componentNameSafe + ' when ' + ('the following props were defined: ' + names + '. Either remove the `' + propFullNameSafe + '` ') + 'or use the remove all the other props.');
    }

    return null;
  };
}

/***/ }),

/***/ "./node_modules/react-md/lib/utils/PropTypes/oneRequiredForA11yIf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-md/lib/utils/PropTypes/oneRequiredForA11yIf.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = oneRequiredForA11yIf;
/** @module utils/PropTypes/oneRequiredForA11yIf */

/**
 * A PropType validator to make sure that any of the other prop names have been defined
 * if the current prop is also defined.
 *
 * This is mostly useful for when adding a prop requires additional accessibility props defined
 * as well.
 *
 * @param {function} validator - The current prop's validator.
 */
function oneRequiredForA11yIf(validator) {
  for (var _len = arguments.length, otherPropNames = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    otherPropNames[_key - 1] = arguments[_key];
  }

  return function validate(props, propName, componentName, location, propFullName) {
    var filterUndefined = function filterUndefined(pn) {
      return typeof props[pn] !== 'undefined';
    };
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;
    var defined = typeof props[propName] !== 'undefined';
    var allPropNames = [propFullNameSafe].concat(otherPropNames);

    for (var _len2 = arguments.length, args = Array(_len2 > 5 ? _len2 - 5 : 0), _key2 = 5; _key2 < _len2; _key2++) {
      args[_key2 - 5] = arguments[_key2];
    }

    var err = validator.apply(undefined, [props, propName, componentName, location, propFullName].concat(args));
    if (!err && defined && !allPropNames.filter(filterUndefined).length) {
      err = new Error('One of the following props are required to make `' + componentNameSafe + '` accessible ' + ('for users of assistive technologies such as screen readers when using the `' + propFullNameSafe + '` ') + ('prop. `' + allPropNames.join('`, `') + '`.'));
    }

    return err;
  };
}

/***/ }),

/***/ "./node_modules/react-md/lib/utils/StringUtils/addSuffix.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-md/lib/utils/StringUtils/addSuffix.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = addSuffix;
/** @module utils/StringUtils/addSuffix */

/**
 * Optionally adds a suffix to a string if it does
 * not already contain that string.
 *
 * @param {String} str - The string to modify
 * @param {String} suffix - The suffix to add
 *
 * @return {String} the string with a suffix
 */
function addSuffix(str, suffix) {
  if (!str || typeof str !== 'string') {
    return str;
  }

  return str.indexOf(suffix) === -1 ? str.trim() + ' ' + suffix : str;
}

/***/ }),

/***/ "./node_modules/react-md/lib/utils/StringUtils/getDisplayName.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-md/lib/utils/StringUtils/getDisplayName.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = getDisplayName;
/** @module utils/StringUtils/getDisplayName */

/**
 * Gets the display name for a composed component.
 *
 * @param {function|Object} ComposedComponent - The composed component to use
 * @param {String} hoc - The higher order component's name to use.
 * @return {String} the new name of the component.
 */
function getDisplayName(ComposedComponent, hoc) {
  var name = '' + (ComposedComponent.displayName || ComposedComponent.name || 'Component');

  return 'with' + hoc + '(' + name + ')';
}

/***/ }),

/***/ "./node_modules/react-md/lib/utils/closest.js":
/*!****************************************************!*\
  !*** ./node_modules/react-md/lib/utils/closest.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = closest;
/** @module utils/closest */

/**
 * A _very_ primitive polyfill for the Element.closest function. If this is a browser that doesn't
 * support it (IE, Edge, etc), it will just keep searching the parent elements until the nodeName
 * matches the provided type.
 *
 * @param {Element} el - the html element to find a closest node type for
 * @param {String} type - the html element type to find.
 * @return {Element} the found element or null.
 */
function closest(el, type) {
  if (typeof el.closest === 'function') {
    return el.closest(type);
  }

  var nodeType = type.toUpperCase();
  var node = el.parentElement;
  while (node && node.parentElement) {
    if (node.nodeName === nodeType) {
      return node;
    }

    node = node.parentElement;
  }

  return null;
}

/***/ }),

/***/ "./node_modules/react-md/lib/utils/getCollapserStyles.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-md/lib/utils/getCollapserStyles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = getCollapserStyles;

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A simple utility function to get the dynamic collapser styles.
 */
function getCollapserStyles(_ref) {
  var _ref2;

  var flipped = _ref.flipped,
      suffix = _ref.suffix,
      suffixFlipped = _ref.suffixFlipped;

  for (var _len = arguments.length, classNames = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    classNames[_key - 1] = arguments[_key];
  }

  return _classnames2.default.apply(undefined, ['md-collapser', (_ref2 = {
    'md-collapser--flipped': flipped && (!suffixFlipped || !suffix)
  }, _ref2['md-collapser--' + suffix] = suffix, _ref2['md-collapser--' + suffix + '-flipped'] = suffix && flipped && suffixFlipped, _ref2)].concat(classNames));
}

/***/ }),

/***/ "./node_modules/react-md/lib/utils/getField.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-md/lib/utils/getField.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = getField;
/** @module utils/getField */

/**
 * Gets the current field for a component that can the field
 * as either uncontrolled or controlled.
 *
 * @param {Object} props - the props object.
 * @param {Object} state = the state object.
 * @param {string=} field - the field to extract a value from. Defaults to 'value'.
 *
 * @return the field's value.
 */
function getField(props, state) {
  var field = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'value';

  return typeof props[field] !== 'undefined' ? props[field] : state[field];
}

/***/ }),

/***/ "./node_modules/react-md/lib/utils/getSelectedText.js":
/*!************************************************************!*\
  !*** ./node_modules/react-md/lib/utils/getSelectedText.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = getSelectedText;
/** @module utils/getSelectedText */

/**
 * A utility function that gets the current selected text in the document. I think
 * that all the browsers I support have `window.getSelection`, but it falls back to
 * support others.
 *
 * @return {String} the current selection on the page
 */
function getSelectedText() {
  if (typeof window.getSelection !== 'undefined') {
    return window.getSelection().toString();
  } else if (typeof document.selection !== 'undefined' && document.selection.type === 'Text') {
    return document.selection.createRange().text;
  }

  return '';
}

/***/ }),

/***/ "./node_modules/react-md/lib/utils/isFormPartRole.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-md/lib/utils/isFormPartRole.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = isFormPartRole;
/** @module utils/isFormPartRole */

/**
 * A simple utility function to determine if an element has a role that should
 * be used as a form part. This is mostly used for changing the behavior of keyboard
 * events.
 *
 * A form part role is one of the following:
 * - checkbox
 * - radio
 * - listbox
 * - input
 *
 * @param {HTMLElement} el - the element to check.
 * @return {boolean} true if the element is considered an element part of a form.
 */
function isFormPartRole(el) {
  if (!el) {
    return false;
  } else if (el.nodeName === 'INPUT') {
    return true;
  }

  var role = el.getAttribute('role');
  return role === 'checkbox' || role === 'radio' || role === 'listbox';
}

/***/ }),

/***/ "./node_modules/react-md/lib/utils/isValued.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-md/lib/utils/isValued.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = isValued;
/** @module utils/isValied */

/**
 * A really simple utility function to check if an input's value is considered "valued".
 *
 * @param {string|number} v - the value to check
 * @return {boolean} true if the value is a number or a non-empty string.
 */
function isValued(v) {
  return v === 0 || !!v;
}

/***/ }),

/***/ "./node_modules/react-md/lib/utils/mapToListParts.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-md/lib/utils/mapToListParts.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = mapToListParts;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _Divider = __webpack_require__(/*! ../Dividers/Divider */ "./node_modules/react-md/lib/Dividers/Divider.js");

var _Divider2 = _interopRequireDefault(_Divider);

var _Subheader = __webpack_require__(/*! ../Subheaders/Subheader */ "./node_modules/react-md/lib/Subheaders/Subheader.js");

var _Subheader2 = _interopRequireDefault(_Subheader);

var _ListItem = __webpack_require__(/*! ../Lists/ListItem */ "./node_modules/react-md/lib/Lists/ListItem.js");

var _ListItem2 = _interopRequireDefault(_ListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /** @module utils/mapToListParts */

/**
 * A utility function to convert any "item" into a valid React element that is used
 * within the `List` component.
 *
 * Use cases:
 * - is a valid React element -> item returned unmodified
 * - `number` or `string` -> `ListItem` with the item as the `primaryText`
 * - an `object` with a key `divider: true` -> a `Divider` component with the remaining
 *    keys applied as props.
 * - an `object` with a key `subheader: true` -> a `Subheader` component with the remianing
 *    keys applied as props. This one technically requires the `primaryText` key to be defined.
 * - an `object` -> all keys passed into the `ListItem` component.
 *
 * Examples:
 * ```js
 * mapToListParts('Hello') == <ListItem primaryText="Hello" />
 * mapToListParts(100)     == <ListItem primaryText={100} />
 * mapToListParts({ primaryText: 'Item' }) == <ListItem primaryText="Item" />
 * mapToListParts({ divider: true }) == <Divider />
 * mapToListParts({ subheader: true, primaryText: 'Subheader' }) == <Subheader primaryText="Subheader" />
 * ```
 *
 * @param {string|number|Object} item - the item to convert
 * @param {number|string=} index - the current index in the array (if used in an array)
 * @return {Object} a React element
 */
function mapToListParts(item, index) {
  if (typeof item === 'string' || typeof item === 'number') {
    return (0, _react.createElement)(_ListItem2.default, { key: item, primaryText: item });
  } else if ((0, _react.isValidElement)(item)) {
    return item;
  }

  var divider = item.divider,
      subheader = item.subheader,
      nestedItems = item.nestedItems,
      remainingProps = _objectWithoutProperties(item, ['divider', 'subheader', 'nestedItems']);

  var component = void 0;
  if (divider) {
    component = _Divider2.default;
  } else if (subheader) {
    component = _Subheader2.default;
  } else {
    component = _ListItem2.default;
  }

  var props = _extends({}, remainingProps, { key: item.key || index });
  if (nestedItems) {
    props.nestedItems = nestedItems.map(mapToListParts);
  }

  return (0, _react.createElement)(component, props);
}

/***/ }),

/***/ "./node_modules/react-md/lib/utils/omit.js":
/*!*************************************************!*\
  !*** ./node_modules/react-md/lib/utils/omit.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = omit;
/** @module utils/omit */

/**
 * This should hopefully be very similar to lodash's omit function. It will
 * take an object and return a new object without any of the given keys.
 *
 * @param {Object} obj - The object to omit keys from.
 * @param {Array.<String>} keys - a list of keys to remove.
 */
function omit(obj, keys) {
  if (!obj) {
    return {};
  } else if (!keys || !keys.length) {
    return obj;
  }

  return Object.keys(obj).filter(function (key) {
    return keys.indexOf(key) === -1;
  }).reduce(function (newProps, key) {
    newProps[key] = obj[key];

    return newProps;
  }, {});
}

/***/ }),

/***/ "./node_modules/react-md/lib/utils/themeColors.js":
/*!********************************************************!*\
  !*** ./node_modules/react-md/lib/utils/themeColors.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = themeColors;

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This is a utility function to apply the different text colors as a class name.
 *
 * @param {Object} options - The options to use to figure out which styles to apply.
 * @param {boolean?} options.text - Boolean if the base text color should attempt to be
 *    applied. This will only be applied if all the other states are not true.
 * @param {boolean?} options.disabled - Boolean if the text should be disabled.
 * @param {boolean?} options.error - Boolean if the error color should attempt to be applied.
 *    This will only be applied if the disabled state is false.
 * @param {boolean?} options.primary - Boolean if the primary color should be applied. This
 *    will only be applied if all the other states are false.
 * @param {boolean?} options.secondary - Boolean if the secondary color should be applied.
 *    This will only be applied if all the other states are false.
 * @param {boolean?} options.inherit - Boolean if the color should be inherited by a parent.
 *    This will only be applied if the error and disabled states are false.
 * @return {String} the class name
 */
function themeColors() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$themeText = _ref.themeText,
      themeText = _ref$themeText === undefined ? true : _ref$themeText,
      _ref$text = _ref.text,
      text = _ref$text === undefined ? false : _ref$text,
      _ref$background = _ref.background,
      background = _ref$background === undefined ? false : _ref$background,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === undefined ? false : _ref$disabled,
      _ref$error = _ref.error,
      error = _ref$error === undefined ? false : _ref$error,
      _ref$hint = _ref.hint,
      hint = _ref$hint === undefined ? false : _ref$hint,
      _ref$primary = _ref.primary,
      primary = _ref$primary === undefined ? false : _ref$primary,
      _ref$secondary = _ref.secondary,
      secondary = _ref$secondary === undefined ? false : _ref$secondary,
      _ref$inherit = _ref.inherit,
      inherit = _ref$inherit === undefined ? false : _ref$inherit,
      _ref$ink = _ref.ink,
      ink = _ref$ink === undefined ? false : _ref$ink,
      _ref$card = _ref.card,
      card = _ref$card === undefined ? false : _ref$card,
      _ref$hover = _ref.hover,
      hover = _ref$hover === undefined ? false : _ref$hover;

  var className = arguments[1];

  var colors = '';
  if (themeText) {
    if (disabled) {
      colors = 'md-text--disabled';
    } else if (error) {
      colors = 'md-text--error';
    } else if (inherit) {
      colors = 'md-text--inherit';
    } else {
      colors = (0, _classnames2.default)({
        'md-text': text && !primary && !secondary && !hint,
        'md-text--secondary': hint,
        'md-text--theme-primary': !hint && primary,
        'md-text--theme-secondary': !hint && secondary,
        'md-ink--primary': ink && primary,
        'md-ink--secondary': ink && secondary
      });
    }
  } else {
    colors = (0, _classnames2.default)({
      'md-background': background && !primary && !secondary && !card,
      'md-background--card': card,
      'md-background--primary': primary,
      'md-background--primary-hover': primary && hover,
      'md-background--secondary': secondary,
      'md-background--secondary-hover': secondary && hover
    });
  }

  return (0, _classnames2.default)(colors, className);
} /** @module utils/themeColors */

/***/ }),

/***/ "./node_modules/react-motion/lib/Motion.js":
/*!*************************************************!*\
  !*** ./node_modules/react-motion/lib/Motion.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _mapToZero = __webpack_require__(/*! ./mapToZero */ "./node_modules/react-motion/lib/mapToZero.js");

var _mapToZero2 = _interopRequireDefault(_mapToZero);

var _stripStyle = __webpack_require__(/*! ./stripStyle */ "./node_modules/react-motion/lib/stripStyle.js");

var _stripStyle2 = _interopRequireDefault(_stripStyle);

var _stepper3 = __webpack_require__(/*! ./stepper */ "./node_modules/react-motion/lib/stepper.js");

var _stepper4 = _interopRequireDefault(_stepper3);

var _performanceNow = __webpack_require__(/*! performance-now */ "./node_modules/performance-now/lib/performance-now.js");

var _performanceNow2 = _interopRequireDefault(_performanceNow);

var _raf = __webpack_require__(/*! raf */ "./node_modules/raf/index.js");

var _raf2 = _interopRequireDefault(_raf);

var _shouldStopAnimation = __webpack_require__(/*! ./shouldStopAnimation */ "./node_modules/react-motion/lib/shouldStopAnimation.js");

var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var msPerFrame = 1000 / 60;

var Motion = (function (_React$Component) {
  _inherits(Motion, _React$Component);

  _createClass(Motion, null, [{
    key: 'propTypes',
    value: {
      // TOOD: warn against putting a config in here
      defaultStyle: _propTypes2['default'].objectOf(_propTypes2['default'].number),
      style: _propTypes2['default'].objectOf(_propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].object])).isRequired,
      children: _propTypes2['default'].func.isRequired,
      onRest: _propTypes2['default'].func
    },
    enumerable: true
  }]);

  function Motion(props) {
    var _this = this;

    _classCallCheck(this, Motion);

    _React$Component.call(this, props);
    this.wasAnimating = false;
    this.animationID = null;
    this.prevTime = 0;
    this.accumulatedTime = 0;
    this.unreadPropStyle = null;

    this.clearUnreadPropStyle = function (destStyle) {
      var dirty = false;
      var _state = _this.state;
      var currentStyle = _state.currentStyle;
      var currentVelocity = _state.currentVelocity;
      var lastIdealStyle = _state.lastIdealStyle;
      var lastIdealVelocity = _state.lastIdealVelocity;

      for (var key in destStyle) {
        if (!Object.prototype.hasOwnProperty.call(destStyle, key)) {
          continue;
        }

        var styleValue = destStyle[key];
        if (typeof styleValue === 'number') {
          if (!dirty) {
            dirty = true;
            currentStyle = _extends({}, currentStyle);
            currentVelocity = _extends({}, currentVelocity);
            lastIdealStyle = _extends({}, lastIdealStyle);
            lastIdealVelocity = _extends({}, lastIdealVelocity);
          }

          currentStyle[key] = styleValue;
          currentVelocity[key] = 0;
          lastIdealStyle[key] = styleValue;
          lastIdealVelocity[key] = 0;
        }
      }

      if (dirty) {
        _this.setState({ currentStyle: currentStyle, currentVelocity: currentVelocity, lastIdealStyle: lastIdealStyle, lastIdealVelocity: lastIdealVelocity });
      }
    };

    this.startAnimationIfNecessary = function () {
      // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
      // call cb? No, otherwise accidental parent rerender causes cb trigger
      _this.animationID = _raf2['default'](function (timestamp) {
        // check if we need to animate in the first place
        var propsStyle = _this.props.style;
        if (_shouldStopAnimation2['default'](_this.state.currentStyle, propsStyle, _this.state.currentVelocity)) {
          if (_this.wasAnimating && _this.props.onRest) {
            _this.props.onRest();
          }

          // no need to cancel animationID here; shouldn't have any in flight
          _this.animationID = null;
          _this.wasAnimating = false;
          _this.accumulatedTime = 0;
          return;
        }

        _this.wasAnimating = true;

        var currentTime = timestamp || _performanceNow2['default']();
        var timeDelta = currentTime - _this.prevTime;
        _this.prevTime = currentTime;
        _this.accumulatedTime = _this.accumulatedTime + timeDelta;
        // more than 10 frames? prolly switched browser tab. Restart
        if (_this.accumulatedTime > msPerFrame * 10) {
          _this.accumulatedTime = 0;
        }

        if (_this.accumulatedTime === 0) {
          // no need to cancel animationID here; shouldn't have any in flight
          _this.animationID = null;
          _this.startAnimationIfNecessary();
          return;
        }

        var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
        var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);

        var newLastIdealStyle = {};
        var newLastIdealVelocity = {};
        var newCurrentStyle = {};
        var newCurrentVelocity = {};

        for (var key in propsStyle) {
          if (!Object.prototype.hasOwnProperty.call(propsStyle, key)) {
            continue;
          }

          var styleValue = propsStyle[key];
          if (typeof styleValue === 'number') {
            newCurrentStyle[key] = styleValue;
            newCurrentVelocity[key] = 0;
            newLastIdealStyle[key] = styleValue;
            newLastIdealVelocity[key] = 0;
          } else {
            var newLastIdealStyleValue = _this.state.lastIdealStyle[key];
            var newLastIdealVelocityValue = _this.state.lastIdealVelocity[key];
            for (var i = 0; i < framesToCatchUp; i++) {
              var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

              newLastIdealStyleValue = _stepper[0];
              newLastIdealVelocityValue = _stepper[1];
            }

            var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

            var nextIdealX = _stepper2[0];
            var nextIdealV = _stepper2[1];

            newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
            newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
            newLastIdealStyle[key] = newLastIdealStyleValue;
            newLastIdealVelocity[key] = newLastIdealVelocityValue;
          }
        }

        _this.animationID = null;
        // the amount we're looped over above
        _this.accumulatedTime -= framesToCatchUp * msPerFrame;

        _this.setState({
          currentStyle: newCurrentStyle,
          currentVelocity: newCurrentVelocity,
          lastIdealStyle: newLastIdealStyle,
          lastIdealVelocity: newLastIdealVelocity
        });

        _this.unreadPropStyle = null;

        _this.startAnimationIfNecessary();
      });
    };

    this.state = this.defaultState();
  }

  Motion.prototype.defaultState = function defaultState() {
    var _props = this.props;
    var defaultStyle = _props.defaultStyle;
    var style = _props.style;

    var currentStyle = defaultStyle || _stripStyle2['default'](style);
    var currentVelocity = _mapToZero2['default'](currentStyle);
    return {
      currentStyle: currentStyle,
      currentVelocity: currentVelocity,
      lastIdealStyle: currentStyle,
      lastIdealVelocity: currentVelocity
    };
  };

  // it's possible that currentStyle's value is stale: if props is immediately
  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
  // at 0 (didn't have time to tick and interpolate even once). If we naively
  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
  // In reality currentStyle should be 400

  Motion.prototype.componentDidMount = function componentDidMount() {
    this.prevTime = _performanceNow2['default']();
    this.startAnimationIfNecessary();
  };

  Motion.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
    if (this.unreadPropStyle != null) {
      // previous props haven't had the chance to be set yet; set them here
      this.clearUnreadPropStyle(this.unreadPropStyle);
    }

    this.unreadPropStyle = props.style;
    if (this.animationID == null) {
      this.prevTime = _performanceNow2['default']();
      this.startAnimationIfNecessary();
    }
  };

  Motion.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.animationID != null) {
      _raf2['default'].cancel(this.animationID);
      this.animationID = null;
    }
  };

  Motion.prototype.render = function render() {
    var renderedChildren = this.props.children(this.state.currentStyle);
    return renderedChildren && _react2['default'].Children.only(renderedChildren);
  };

  return Motion;
})(_react2['default'].Component);

exports['default'] = Motion;
module.exports = exports['default'];

// after checking for unreadPropStyle != null, we manually go set the
// non-interpolating values (those that are a number, without a spring
// config)

/***/ }),

/***/ "./node_modules/react-motion/lib/StaggeredMotion.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-motion/lib/StaggeredMotion.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _mapToZero = __webpack_require__(/*! ./mapToZero */ "./node_modules/react-motion/lib/mapToZero.js");

var _mapToZero2 = _interopRequireDefault(_mapToZero);

var _stripStyle = __webpack_require__(/*! ./stripStyle */ "./node_modules/react-motion/lib/stripStyle.js");

var _stripStyle2 = _interopRequireDefault(_stripStyle);

var _stepper3 = __webpack_require__(/*! ./stepper */ "./node_modules/react-motion/lib/stepper.js");

var _stepper4 = _interopRequireDefault(_stepper3);

var _performanceNow = __webpack_require__(/*! performance-now */ "./node_modules/performance-now/lib/performance-now.js");

var _performanceNow2 = _interopRequireDefault(_performanceNow);

var _raf = __webpack_require__(/*! raf */ "./node_modules/raf/index.js");

var _raf2 = _interopRequireDefault(_raf);

var _shouldStopAnimation = __webpack_require__(/*! ./shouldStopAnimation */ "./node_modules/react-motion/lib/shouldStopAnimation.js");

var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var msPerFrame = 1000 / 60;

function shouldStopAnimationAll(currentStyles, styles, currentVelocities) {
  for (var i = 0; i < currentStyles.length; i++) {
    if (!_shouldStopAnimation2['default'](currentStyles[i], styles[i], currentVelocities[i])) {
      return false;
    }
  }
  return true;
}

var StaggeredMotion = (function (_React$Component) {
  _inherits(StaggeredMotion, _React$Component);

  _createClass(StaggeredMotion, null, [{
    key: 'propTypes',
    value: {
      // TOOD: warn against putting a config in here
      defaultStyles: _propTypes2['default'].arrayOf(_propTypes2['default'].objectOf(_propTypes2['default'].number)),
      styles: _propTypes2['default'].func.isRequired,
      children: _propTypes2['default'].func.isRequired
    },
    enumerable: true
  }]);

  function StaggeredMotion(props) {
    var _this = this;

    _classCallCheck(this, StaggeredMotion);

    _React$Component.call(this, props);
    this.animationID = null;
    this.prevTime = 0;
    this.accumulatedTime = 0;
    this.unreadPropStyles = null;

    this.clearUnreadPropStyle = function (unreadPropStyles) {
      var _state = _this.state;
      var currentStyles = _state.currentStyles;
      var currentVelocities = _state.currentVelocities;
      var lastIdealStyles = _state.lastIdealStyles;
      var lastIdealVelocities = _state.lastIdealVelocities;

      var someDirty = false;
      for (var i = 0; i < unreadPropStyles.length; i++) {
        var unreadPropStyle = unreadPropStyles[i];
        var dirty = false;

        for (var key in unreadPropStyle) {
          if (!Object.prototype.hasOwnProperty.call(unreadPropStyle, key)) {
            continue;
          }

          var styleValue = unreadPropStyle[key];
          if (typeof styleValue === 'number') {
            if (!dirty) {
              dirty = true;
              someDirty = true;
              currentStyles[i] = _extends({}, currentStyles[i]);
              currentVelocities[i] = _extends({}, currentVelocities[i]);
              lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
              lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
            }
            currentStyles[i][key] = styleValue;
            currentVelocities[i][key] = 0;
            lastIdealStyles[i][key] = styleValue;
            lastIdealVelocities[i][key] = 0;
          }
        }
      }

      if (someDirty) {
        _this.setState({ currentStyles: currentStyles, currentVelocities: currentVelocities, lastIdealStyles: lastIdealStyles, lastIdealVelocities: lastIdealVelocities });
      }
    };

    this.startAnimationIfNecessary = function () {
      // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
      // call cb? No, otherwise accidental parent rerender causes cb trigger
      _this.animationID = _raf2['default'](function (timestamp) {
        var destStyles = _this.props.styles(_this.state.lastIdealStyles);

        // check if we need to animate in the first place
        if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities)) {
          // no need to cancel animationID here; shouldn't have any in flight
          _this.animationID = null;
          _this.accumulatedTime = 0;
          return;
        }

        var currentTime = timestamp || _performanceNow2['default']();
        var timeDelta = currentTime - _this.prevTime;
        _this.prevTime = currentTime;
        _this.accumulatedTime = _this.accumulatedTime + timeDelta;
        // more than 10 frames? prolly switched browser tab. Restart
        if (_this.accumulatedTime > msPerFrame * 10) {
          _this.accumulatedTime = 0;
        }

        if (_this.accumulatedTime === 0) {
          // no need to cancel animationID here; shouldn't have any in flight
          _this.animationID = null;
          _this.startAnimationIfNecessary();
          return;
        }

        var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
        var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);

        var newLastIdealStyles = [];
        var newLastIdealVelocities = [];
        var newCurrentStyles = [];
        var newCurrentVelocities = [];

        for (var i = 0; i < destStyles.length; i++) {
          var destStyle = destStyles[i];
          var newCurrentStyle = {};
          var newCurrentVelocity = {};
          var newLastIdealStyle = {};
          var newLastIdealVelocity = {};

          for (var key in destStyle) {
            if (!Object.prototype.hasOwnProperty.call(destStyle, key)) {
              continue;
            }

            var styleValue = destStyle[key];
            if (typeof styleValue === 'number') {
              newCurrentStyle[key] = styleValue;
              newCurrentVelocity[key] = 0;
              newLastIdealStyle[key] = styleValue;
              newLastIdealVelocity[key] = 0;
            } else {
              var newLastIdealStyleValue = _this.state.lastIdealStyles[i][key];
              var newLastIdealVelocityValue = _this.state.lastIdealVelocities[i][key];
              for (var j = 0; j < framesToCatchUp; j++) {
                var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

                newLastIdealStyleValue = _stepper[0];
                newLastIdealVelocityValue = _stepper[1];
              }

              var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

              var nextIdealX = _stepper2[0];
              var nextIdealV = _stepper2[1];

              newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
              newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
              newLastIdealStyle[key] = newLastIdealStyleValue;
              newLastIdealVelocity[key] = newLastIdealVelocityValue;
            }
          }

          newCurrentStyles[i] = newCurrentStyle;
          newCurrentVelocities[i] = newCurrentVelocity;
          newLastIdealStyles[i] = newLastIdealStyle;
          newLastIdealVelocities[i] = newLastIdealVelocity;
        }

        _this.animationID = null;
        // the amount we're looped over above
        _this.accumulatedTime -= framesToCatchUp * msPerFrame;

        _this.setState({
          currentStyles: newCurrentStyles,
          currentVelocities: newCurrentVelocities,
          lastIdealStyles: newLastIdealStyles,
          lastIdealVelocities: newLastIdealVelocities
        });

        _this.unreadPropStyles = null;

        _this.startAnimationIfNecessary();
      });
    };

    this.state = this.defaultState();
  }

  StaggeredMotion.prototype.defaultState = function defaultState() {
    var _props = this.props;
    var defaultStyles = _props.defaultStyles;
    var styles = _props.styles;

    var currentStyles = defaultStyles || styles().map(_stripStyle2['default']);
    var currentVelocities = currentStyles.map(function (currentStyle) {
      return _mapToZero2['default'](currentStyle);
    });
    return {
      currentStyles: currentStyles,
      currentVelocities: currentVelocities,
      lastIdealStyles: currentStyles,
      lastIdealVelocities: currentVelocities
    };
  };

  StaggeredMotion.prototype.componentDidMount = function componentDidMount() {
    this.prevTime = _performanceNow2['default']();
    this.startAnimationIfNecessary();
  };

  StaggeredMotion.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
    if (this.unreadPropStyles != null) {
      // previous props haven't had the chance to be set yet; set them here
      this.clearUnreadPropStyle(this.unreadPropStyles);
    }

    this.unreadPropStyles = props.styles(this.state.lastIdealStyles);
    if (this.animationID == null) {
      this.prevTime = _performanceNow2['default']();
      this.startAnimationIfNecessary();
    }
  };

  StaggeredMotion.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.animationID != null) {
      _raf2['default'].cancel(this.animationID);
      this.animationID = null;
    }
  };

  StaggeredMotion.prototype.render = function render() {
    var renderedChildren = this.props.children(this.state.currentStyles);
    return renderedChildren && _react2['default'].Children.only(renderedChildren);
  };

  return StaggeredMotion;
})(_react2['default'].Component);

exports['default'] = StaggeredMotion;
module.exports = exports['default'];

// it's possible that currentStyle's value is stale: if props is immediately
// changed from 0 to 400 to spring(0) again, the async currentStyle is still
// at 0 (didn't have time to tick and interpolate even once). If we naively
// compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
// In reality currentStyle should be 400

// after checking for unreadPropStyles != null, we manually go set the
// non-interpolating values (those that are a number, without a spring
// config)

/***/ }),

/***/ "./node_modules/react-motion/lib/TransitionMotion.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-motion/lib/TransitionMotion.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _mapToZero = __webpack_require__(/*! ./mapToZero */ "./node_modules/react-motion/lib/mapToZero.js");

var _mapToZero2 = _interopRequireDefault(_mapToZero);

var _stripStyle = __webpack_require__(/*! ./stripStyle */ "./node_modules/react-motion/lib/stripStyle.js");

var _stripStyle2 = _interopRequireDefault(_stripStyle);

var _stepper3 = __webpack_require__(/*! ./stepper */ "./node_modules/react-motion/lib/stepper.js");

var _stepper4 = _interopRequireDefault(_stepper3);

var _mergeDiff = __webpack_require__(/*! ./mergeDiff */ "./node_modules/react-motion/lib/mergeDiff.js");

var _mergeDiff2 = _interopRequireDefault(_mergeDiff);

var _performanceNow = __webpack_require__(/*! performance-now */ "./node_modules/performance-now/lib/performance-now.js");

var _performanceNow2 = _interopRequireDefault(_performanceNow);

var _raf = __webpack_require__(/*! raf */ "./node_modules/raf/index.js");

var _raf2 = _interopRequireDefault(_raf);

var _shouldStopAnimation = __webpack_require__(/*! ./shouldStopAnimation */ "./node_modules/react-motion/lib/shouldStopAnimation.js");

var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var msPerFrame = 1000 / 60;

// the children function & (potential) styles function asks as param an
// Array<TransitionPlainStyle>, where each TransitionPlainStyle is of the format
// {key: string, data?: any, style: PlainStyle}. However, the way we keep
// internal states doesn't contain such a data structure (check the state and
// TransitionMotionState). So when children function and others ask for such
// data we need to generate them on the fly by combining mergedPropsStyles and
// currentStyles/lastIdealStyles
function rehydrateStyles(mergedPropsStyles, unreadPropStyles, plainStyles) {
  // Copy the value to a `const` so that Flow understands that the const won't
  // change and will be non-nullable in the callback below.
  var cUnreadPropStyles = unreadPropStyles;
  if (cUnreadPropStyles == null) {
    return mergedPropsStyles.map(function (mergedPropsStyle, i) {
      return {
        key: mergedPropsStyle.key,
        data: mergedPropsStyle.data,
        style: plainStyles[i]
      };
    });
  }
  return mergedPropsStyles.map(function (mergedPropsStyle, i) {
    for (var j = 0; j < cUnreadPropStyles.length; j++) {
      if (cUnreadPropStyles[j].key === mergedPropsStyle.key) {
        return {
          key: cUnreadPropStyles[j].key,
          data: cUnreadPropStyles[j].data,
          style: plainStyles[i]
        };
      }
    }
    return { key: mergedPropsStyle.key, data: mergedPropsStyle.data, style: plainStyles[i] };
  });
}

function shouldStopAnimationAll(currentStyles, destStyles, currentVelocities, mergedPropsStyles) {
  if (mergedPropsStyles.length !== destStyles.length) {
    return false;
  }

  for (var i = 0; i < mergedPropsStyles.length; i++) {
    if (mergedPropsStyles[i].key !== destStyles[i].key) {
      return false;
    }
  }

  // we have the invariant that mergedPropsStyles and
  // currentStyles/currentVelocities/last* are synced in terms of cells, see
  // mergeAndSync comment for more info
  for (var i = 0; i < mergedPropsStyles.length; i++) {
    if (!_shouldStopAnimation2['default'](currentStyles[i], destStyles[i].style, currentVelocities[i])) {
      return false;
    }
  }

  return true;
}

// core key merging logic

// things to do: say previously merged style is {a, b}, dest style (prop) is {b,
// c}, previous current (interpolating) style is {a, b}
// **invariant**: current[i] corresponds to merged[i] in terms of key

// steps:
// turn merged style into {a?, b, c}
//    add c, value of c is destStyles.c
//    maybe remove a, aka call willLeave(a), then merged is either {b, c} or {a, b, c}
// turn current (interpolating) style from {a, b} into {a?, b, c}
//    maybe remove a
//    certainly add c, value of c is willEnter(c)
// loop over merged and construct new current
// dest doesn't change, that's owner's
function mergeAndSync(willEnter, willLeave, didLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldLastIdealStyles, oldLastIdealVelocities) {
  var newMergedPropsStyles = _mergeDiff2['default'](oldMergedPropsStyles, destStyles, function (oldIndex, oldMergedPropsStyle) {
    var leavingStyle = willLeave(oldMergedPropsStyle);
    if (leavingStyle == null) {
      didLeave({ key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data });
      return null;
    }
    if (_shouldStopAnimation2['default'](oldCurrentStyles[oldIndex], leavingStyle, oldCurrentVelocities[oldIndex])) {
      didLeave({ key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data });
      return null;
    }
    return { key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data, style: leavingStyle };
  });

  var newCurrentStyles = [];
  var newCurrentVelocities = [];
  var newLastIdealStyles = [];
  var newLastIdealVelocities = [];
  for (var i = 0; i < newMergedPropsStyles.length; i++) {
    var newMergedPropsStyleCell = newMergedPropsStyles[i];
    var foundOldIndex = null;
    for (var j = 0; j < oldMergedPropsStyles.length; j++) {
      if (oldMergedPropsStyles[j].key === newMergedPropsStyleCell.key) {
        foundOldIndex = j;
        break;
      }
    }
    // TODO: key search code
    if (foundOldIndex == null) {
      var plainStyle = willEnter(newMergedPropsStyleCell);
      newCurrentStyles[i] = plainStyle;
      newLastIdealStyles[i] = plainStyle;

      var velocity = _mapToZero2['default'](newMergedPropsStyleCell.style);
      newCurrentVelocities[i] = velocity;
      newLastIdealVelocities[i] = velocity;
    } else {
      newCurrentStyles[i] = oldCurrentStyles[foundOldIndex];
      newLastIdealStyles[i] = oldLastIdealStyles[foundOldIndex];
      newCurrentVelocities[i] = oldCurrentVelocities[foundOldIndex];
      newLastIdealVelocities[i] = oldLastIdealVelocities[foundOldIndex];
    }
  }

  return [newMergedPropsStyles, newCurrentStyles, newCurrentVelocities, newLastIdealStyles, newLastIdealVelocities];
}

var TransitionMotion = (function (_React$Component) {
  _inherits(TransitionMotion, _React$Component);

  _createClass(TransitionMotion, null, [{
    key: 'propTypes',
    value: {
      defaultStyles: _propTypes2['default'].arrayOf(_propTypes2['default'].shape({
        key: _propTypes2['default'].string.isRequired,
        data: _propTypes2['default'].any,
        style: _propTypes2['default'].objectOf(_propTypes2['default'].number).isRequired
      })),
      styles: _propTypes2['default'].oneOfType([_propTypes2['default'].func, _propTypes2['default'].arrayOf(_propTypes2['default'].shape({
        key: _propTypes2['default'].string.isRequired,
        data: _propTypes2['default'].any,
        style: _propTypes2['default'].objectOf(_propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].object])).isRequired
      }))]).isRequired,
      children: _propTypes2['default'].func.isRequired,
      willEnter: _propTypes2['default'].func,
      willLeave: _propTypes2['default'].func,
      didLeave: _propTypes2['default'].func
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      willEnter: function willEnter(styleThatEntered) {
        return _stripStyle2['default'](styleThatEntered.style);
      },
      // recall: returning null makes the current unmounting TransitionStyle
      // disappear immediately
      willLeave: function willLeave() {
        return null;
      },
      didLeave: function didLeave() {}
    },
    enumerable: true
  }]);

  function TransitionMotion(props) {
    var _this = this;

    _classCallCheck(this, TransitionMotion);

    _React$Component.call(this, props);
    this.unmounting = false;
    this.animationID = null;
    this.prevTime = 0;
    this.accumulatedTime = 0;
    this.unreadPropStyles = null;

    this.clearUnreadPropStyle = function (unreadPropStyles) {
      var _mergeAndSync = mergeAndSync(_this.props.willEnter, _this.props.willLeave, _this.props.didLeave, _this.state.mergedPropsStyles, unreadPropStyles, _this.state.currentStyles, _this.state.currentVelocities, _this.state.lastIdealStyles, _this.state.lastIdealVelocities);

      var mergedPropsStyles = _mergeAndSync[0];
      var currentStyles = _mergeAndSync[1];
      var currentVelocities = _mergeAndSync[2];
      var lastIdealStyles = _mergeAndSync[3];
      var lastIdealVelocities = _mergeAndSync[4];

      for (var i = 0; i < unreadPropStyles.length; i++) {
        var unreadPropStyle = unreadPropStyles[i].style;
        var dirty = false;

        for (var key in unreadPropStyle) {
          if (!Object.prototype.hasOwnProperty.call(unreadPropStyle, key)) {
            continue;
          }

          var styleValue = unreadPropStyle[key];
          if (typeof styleValue === 'number') {
            if (!dirty) {
              dirty = true;
              currentStyles[i] = _extends({}, currentStyles[i]);
              currentVelocities[i] = _extends({}, currentVelocities[i]);
              lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
              lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
              mergedPropsStyles[i] = {
                key: mergedPropsStyles[i].key,
                data: mergedPropsStyles[i].data,
                style: _extends({}, mergedPropsStyles[i].style)
              };
            }
            currentStyles[i][key] = styleValue;
            currentVelocities[i][key] = 0;
            lastIdealStyles[i][key] = styleValue;
            lastIdealVelocities[i][key] = 0;
            mergedPropsStyles[i].style[key] = styleValue;
          }
        }
      }

      // unlike the other 2 components, we can't detect staleness and optionally
      // opt out of setState here. each style object's data might contain new
      // stuff we're not/cannot compare
      _this.setState({
        currentStyles: currentStyles,
        currentVelocities: currentVelocities,
        mergedPropsStyles: mergedPropsStyles,
        lastIdealStyles: lastIdealStyles,
        lastIdealVelocities: lastIdealVelocities
      });
    };

    this.startAnimationIfNecessary = function () {
      if (_this.unmounting) {
        return;
      }

      // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
      // call cb? No, otherwise accidental parent rerender causes cb trigger
      _this.animationID = _raf2['default'](function (timestamp) {
        // https://github.com/chenglou/react-motion/pull/420
        // > if execution passes the conditional if (this.unmounting), then
        // executes async defaultRaf and after that component unmounts and after
        // that the callback of defaultRaf is called, then setState will be called
        // on unmounted component.
        if (_this.unmounting) {
          return;
        }

        var propStyles = _this.props.styles;
        var destStyles = typeof propStyles === 'function' ? propStyles(rehydrateStyles(_this.state.mergedPropsStyles, _this.unreadPropStyles, _this.state.lastIdealStyles)) : propStyles;

        // check if we need to animate in the first place
        if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities, _this.state.mergedPropsStyles)) {
          // no need to cancel animationID here; shouldn't have any in flight
          _this.animationID = null;
          _this.accumulatedTime = 0;
          return;
        }

        var currentTime = timestamp || _performanceNow2['default']();
        var timeDelta = currentTime - _this.prevTime;
        _this.prevTime = currentTime;
        _this.accumulatedTime = _this.accumulatedTime + timeDelta;
        // more than 10 frames? prolly switched browser tab. Restart
        if (_this.accumulatedTime > msPerFrame * 10) {
          _this.accumulatedTime = 0;
        }

        if (_this.accumulatedTime === 0) {
          // no need to cancel animationID here; shouldn't have any in flight
          _this.animationID = null;
          _this.startAnimationIfNecessary();
          return;
        }

        var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
        var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);

        var _mergeAndSync2 = mergeAndSync(_this.props.willEnter, _this.props.willLeave, _this.props.didLeave, _this.state.mergedPropsStyles, destStyles, _this.state.currentStyles, _this.state.currentVelocities, _this.state.lastIdealStyles, _this.state.lastIdealVelocities);

        var newMergedPropsStyles = _mergeAndSync2[0];
        var newCurrentStyles = _mergeAndSync2[1];
        var newCurrentVelocities = _mergeAndSync2[2];
        var newLastIdealStyles = _mergeAndSync2[3];
        var newLastIdealVelocities = _mergeAndSync2[4];

        for (var i = 0; i < newMergedPropsStyles.length; i++) {
          var newMergedPropsStyle = newMergedPropsStyles[i].style;
          var newCurrentStyle = {};
          var newCurrentVelocity = {};
          var newLastIdealStyle = {};
          var newLastIdealVelocity = {};

          for (var key in newMergedPropsStyle) {
            if (!Object.prototype.hasOwnProperty.call(newMergedPropsStyle, key)) {
              continue;
            }

            var styleValue = newMergedPropsStyle[key];
            if (typeof styleValue === 'number') {
              newCurrentStyle[key] = styleValue;
              newCurrentVelocity[key] = 0;
              newLastIdealStyle[key] = styleValue;
              newLastIdealVelocity[key] = 0;
            } else {
              var newLastIdealStyleValue = newLastIdealStyles[i][key];
              var newLastIdealVelocityValue = newLastIdealVelocities[i][key];
              for (var j = 0; j < framesToCatchUp; j++) {
                var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

                newLastIdealStyleValue = _stepper[0];
                newLastIdealVelocityValue = _stepper[1];
              }

              var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

              var nextIdealX = _stepper2[0];
              var nextIdealV = _stepper2[1];

              newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
              newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
              newLastIdealStyle[key] = newLastIdealStyleValue;
              newLastIdealVelocity[key] = newLastIdealVelocityValue;
            }
          }

          newLastIdealStyles[i] = newLastIdealStyle;
          newLastIdealVelocities[i] = newLastIdealVelocity;
          newCurrentStyles[i] = newCurrentStyle;
          newCurrentVelocities[i] = newCurrentVelocity;
        }

        _this.animationID = null;
        // the amount we're looped over above
        _this.accumulatedTime -= framesToCatchUp * msPerFrame;

        _this.setState({
          currentStyles: newCurrentStyles,
          currentVelocities: newCurrentVelocities,
          lastIdealStyles: newLastIdealStyles,
          lastIdealVelocities: newLastIdealVelocities,
          mergedPropsStyles: newMergedPropsStyles
        });

        _this.unreadPropStyles = null;

        _this.startAnimationIfNecessary();
      });
    };

    this.state = this.defaultState();
  }

  TransitionMotion.prototype.defaultState = function defaultState() {
    var _props = this.props;
    var defaultStyles = _props.defaultStyles;
    var styles = _props.styles;
    var willEnter = _props.willEnter;
    var willLeave = _props.willLeave;
    var didLeave = _props.didLeave;

    var destStyles = typeof styles === 'function' ? styles(defaultStyles) : styles;

    // this is special. for the first time around, we don't have a comparison
    // between last (no last) and current merged props. we'll compute last so:
    // say default is {a, b} and styles (dest style) is {b, c}, we'll
    // fabricate last as {a, b}
    var oldMergedPropsStyles = undefined;
    if (defaultStyles == null) {
      oldMergedPropsStyles = destStyles;
    } else {
      oldMergedPropsStyles = defaultStyles.map(function (defaultStyleCell) {
        // TODO: key search code
        for (var i = 0; i < destStyles.length; i++) {
          if (destStyles[i].key === defaultStyleCell.key) {
            return destStyles[i];
          }
        }
        return defaultStyleCell;
      });
    }
    var oldCurrentStyles = defaultStyles == null ? destStyles.map(function (s) {
      return _stripStyle2['default'](s.style);
    }) : defaultStyles.map(function (s) {
      return _stripStyle2['default'](s.style);
    });
    var oldCurrentVelocities = defaultStyles == null ? destStyles.map(function (s) {
      return _mapToZero2['default'](s.style);
    }) : defaultStyles.map(function (s) {
      return _mapToZero2['default'](s.style);
    });

    var _mergeAndSync3 = mergeAndSync(
    // Because this is an old-style createReactClass component, Flow doesn't
    // understand that the willEnter and willLeave props have default values
    // and will always be present.
    willEnter, willLeave, didLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldCurrentStyles, // oldLastIdealStyles really
    oldCurrentVelocities);

    var mergedPropsStyles = _mergeAndSync3[0];
    var currentStyles = _mergeAndSync3[1];
    var currentVelocities = _mergeAndSync3[2];
    var lastIdealStyles = _mergeAndSync3[3];
    var lastIdealVelocities = _mergeAndSync3[4];
    // oldLastIdealVelocities really

    return {
      currentStyles: currentStyles,
      currentVelocities: currentVelocities,
      lastIdealStyles: lastIdealStyles,
      lastIdealVelocities: lastIdealVelocities,
      mergedPropsStyles: mergedPropsStyles
    };
  };

  // after checking for unreadPropStyles != null, we manually go set the
  // non-interpolating values (those that are a number, without a spring
  // config)

  TransitionMotion.prototype.componentDidMount = function componentDidMount() {
    this.prevTime = _performanceNow2['default']();
    this.startAnimationIfNecessary();
  };

  TransitionMotion.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
    if (this.unreadPropStyles) {
      // previous props haven't had the chance to be set yet; set them here
      this.clearUnreadPropStyle(this.unreadPropStyles);
    }

    var styles = props.styles;
    if (typeof styles === 'function') {
      this.unreadPropStyles = styles(rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.lastIdealStyles));
    } else {
      this.unreadPropStyles = styles;
    }

    if (this.animationID == null) {
      this.prevTime = _performanceNow2['default']();
      this.startAnimationIfNecessary();
    }
  };

  TransitionMotion.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unmounting = true;
    if (this.animationID != null) {
      _raf2['default'].cancel(this.animationID);
      this.animationID = null;
    }
  };

  TransitionMotion.prototype.render = function render() {
    var hydratedStyles = rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.currentStyles);
    var renderedChildren = this.props.children(hydratedStyles);
    return renderedChildren && _react2['default'].Children.only(renderedChildren);
  };

  return TransitionMotion;
})(_react2['default'].Component);

exports['default'] = TransitionMotion;
module.exports = exports['default'];

// list of styles, each containing interpolating values. Part of what's passed
// to children function. Notice that this is
// Array<ActualInterpolatingStyleObject>, without the wrapper that is {key: ...,
// data: ... style: ActualInterpolatingStyleObject}. Only mergedPropsStyles
// contains the key & data info (so that we only have a single source of truth
// for these, and to save space). Check the comment for `rehydrateStyles` to
// see how we regenerate the entirety of what's passed to children function

// the array that keeps track of currently rendered stuff! Including stuff
// that you've unmounted but that's still animating. This is where it lives

// it's possible that currentStyle's value is stale: if props is immediately
// changed from 0 to 400 to spring(0) again, the async currentStyle is still
// at 0 (didn't have time to tick and interpolate even once). If we naively
// compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
// In reality currentStyle should be 400

/***/ }),

/***/ "./node_modules/react-motion/lib/mapToZero.js":
/*!****************************************************!*\
  !*** ./node_modules/react-motion/lib/mapToZero.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// currently used to initiate the velocity style object to 0


exports.__esModule = true;
exports['default'] = mapToZero;

function mapToZero(obj) {
  var ret = {};
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      ret[key] = 0;
    }
  }
  return ret;
}

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-motion/lib/mergeDiff.js":
/*!****************************************************!*\
  !*** ./node_modules/react-motion/lib/mergeDiff.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// core keys merging algorithm. If previous render's keys are [a, b], and the
// next render's [c, b, d], what's the final merged keys and ordering?

// - c and a must both be before b
// - b before d
// - ordering between a and c ambiguous

// this reduces to merging two partially ordered lists (e.g. lists where not
// every item has a definite ordering, like comparing a and c above). For the
// ambiguous ordering we deterministically choose to place the next render's
// item after the previous'; so c after a

// this is called a topological sorting. Except the existing algorithms don't
// work well with js bc of the amount of allocation, and isn't optimized for our
// current use-case bc the runtime is linear in terms of edges (see wiki for
// meaning), which is huge when two lists have many common elements


exports.__esModule = true;
exports['default'] = mergeDiff;

function mergeDiff(prev, next, onRemove) {
  // bookkeeping for easier access of a key's index below. This is 2 allocations +
  // potentially triggering chrome hash map mode for objs (so it might be faster

  var prevKeyIndex = {};
  for (var i = 0; i < prev.length; i++) {
    prevKeyIndex[prev[i].key] = i;
  }
  var nextKeyIndex = {};
  for (var i = 0; i < next.length; i++) {
    nextKeyIndex[next[i].key] = i;
  }

  // first, an overly elaborate way of merging prev and next, eliminating
  // duplicates (in terms of keys). If there's dupe, keep the item in next).
  // This way of writing it saves allocations
  var ret = [];
  for (var i = 0; i < next.length; i++) {
    ret[i] = next[i];
  }
  for (var i = 0; i < prev.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(nextKeyIndex, prev[i].key)) {
      // this is called my TM's `mergeAndSync`, which calls willLeave. We don't
      // merge in keys that the user desires to kill
      var fill = onRemove(i, prev[i]);
      if (fill != null) {
        ret.push(fill);
      }
    }
  }

  // now all the items all present. Core sorting logic to have the right order
  return ret.sort(function (a, b) {
    var nextOrderA = nextKeyIndex[a.key];
    var nextOrderB = nextKeyIndex[b.key];
    var prevOrderA = prevKeyIndex[a.key];
    var prevOrderB = prevKeyIndex[b.key];

    if (nextOrderA != null && nextOrderB != null) {
      // both keys in next
      return nextKeyIndex[a.key] - nextKeyIndex[b.key];
    } else if (prevOrderA != null && prevOrderB != null) {
      // both keys in prev
      return prevKeyIndex[a.key] - prevKeyIndex[b.key];
    } else if (nextOrderA != null) {
      // key a in next, key b in prev

      // how to determine the order between a and b? We find a "pivot" (term
      // abuse), a key present in both prev and next, that is sandwiched between
      // a and b. In the context of our above example, if we're comparing a and
      // d, b's (the only) pivot
      for (var i = 0; i < next.length; i++) {
        var pivot = next[i].key;
        if (!Object.prototype.hasOwnProperty.call(prevKeyIndex, pivot)) {
          continue;
        }

        if (nextOrderA < nextKeyIndex[pivot] && prevOrderB > prevKeyIndex[pivot]) {
          return -1;
        } else if (nextOrderA > nextKeyIndex[pivot] && prevOrderB < prevKeyIndex[pivot]) {
          return 1;
        }
      }
      // pluggable. default to: next bigger than prev
      return 1;
    }
    // prevOrderA, nextOrderB
    for (var i = 0; i < next.length; i++) {
      var pivot = next[i].key;
      if (!Object.prototype.hasOwnProperty.call(prevKeyIndex, pivot)) {
        continue;
      }
      if (nextOrderB < nextKeyIndex[pivot] && prevOrderA > prevKeyIndex[pivot]) {
        return 1;
      } else if (nextOrderB > nextKeyIndex[pivot] && prevOrderA < prevKeyIndex[pivot]) {
        return -1;
      }
    }
    // pluggable. default to: next bigger than prev
    return -1;
  });
}

module.exports = exports['default'];
// to loop through and find a key's index each time), but I no longer care

/***/ }),

/***/ "./node_modules/react-motion/lib/presets.js":
/*!**************************************************!*\
  !*** ./node_modules/react-motion/lib/presets.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = {
  noWobble: { stiffness: 170, damping: 26 }, // the default, if nothing provided
  gentle: { stiffness: 120, damping: 14 },
  wobbly: { stiffness: 180, damping: 12 },
  stiff: { stiffness: 210, damping: 20 }
};
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-motion/lib/react-motion.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-motion/lib/react-motion.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

var _Motion = __webpack_require__(/*! ./Motion */ "./node_modules/react-motion/lib/Motion.js");

exports.Motion = _interopRequire(_Motion);

var _StaggeredMotion = __webpack_require__(/*! ./StaggeredMotion */ "./node_modules/react-motion/lib/StaggeredMotion.js");

exports.StaggeredMotion = _interopRequire(_StaggeredMotion);

var _TransitionMotion = __webpack_require__(/*! ./TransitionMotion */ "./node_modules/react-motion/lib/TransitionMotion.js");

exports.TransitionMotion = _interopRequire(_TransitionMotion);

var _spring = __webpack_require__(/*! ./spring */ "./node_modules/react-motion/lib/spring.js");

exports.spring = _interopRequire(_spring);

var _presets = __webpack_require__(/*! ./presets */ "./node_modules/react-motion/lib/presets.js");

exports.presets = _interopRequire(_presets);

var _stripStyle = __webpack_require__(/*! ./stripStyle */ "./node_modules/react-motion/lib/stripStyle.js");

exports.stripStyle = _interopRequire(_stripStyle);

// deprecated, dummy warning function

var _reorderKeys = __webpack_require__(/*! ./reorderKeys */ "./node_modules/react-motion/lib/reorderKeys.js");

exports.reorderKeys = _interopRequire(_reorderKeys);

/***/ }),

/***/ "./node_modules/react-motion/lib/reorderKeys.js":
/*!******************************************************!*\
  !*** ./node_modules/react-motion/lib/reorderKeys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = reorderKeys;

var hasWarned = false;

function reorderKeys() {
  if (true) {
    if (!hasWarned) {
      hasWarned = true;
      console.error('`reorderKeys` has been removed, since it is no longer needed for TransitionMotion\'s new styles array API.');
    }
  }
}

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-motion/lib/shouldStopAnimation.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-motion/lib/shouldStopAnimation.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// usage assumption: currentStyle values have already been rendered but it says
// nothing of whether currentStyle is stale (see unreadPropStyle)


exports.__esModule = true;
exports['default'] = shouldStopAnimation;

function shouldStopAnimation(currentStyle, style, currentVelocity) {
  for (var key in style) {
    if (!Object.prototype.hasOwnProperty.call(style, key)) {
      continue;
    }

    if (currentVelocity[key] !== 0) {
      return false;
    }

    var styleValue = typeof style[key] === 'number' ? style[key] : style[key].val;
    // stepper will have already taken care of rounding precision errors, so
    // won't have such thing as 0.9999 !=== 1
    if (currentStyle[key] !== styleValue) {
      return false;
    }
  }

  return true;
}

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-motion/lib/spring.js":
/*!*************************************************!*\
  !*** ./node_modules/react-motion/lib/spring.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports['default'] = spring;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _presets = __webpack_require__(/*! ./presets */ "./node_modules/react-motion/lib/presets.js");

var _presets2 = _interopRequireDefault(_presets);

var defaultConfig = _extends({}, _presets2['default'].noWobble, {
  precision: 0.01
});

function spring(val, config) {
  return _extends({}, defaultConfig, config, { val: val });
}

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-motion/lib/stepper.js":
/*!**************************************************!*\
  !*** ./node_modules/react-motion/lib/stepper.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// stepper is used a lot. Saves allocation to return the same array wrapper.
// This is fine and danger-free against mutations because the callsite
// immediately destructures it and gets the numbers inside without passing the


exports.__esModule = true;
exports["default"] = stepper;

var reusedTuple = [0, 0];

function stepper(secondPerFrame, x, v, destX, k, b, precision) {
  // Spring stiffness, in kg / s^2

  // for animations, destX is really spring length (spring at rest). initial
  // position is considered as the stretched/compressed position of a spring
  var Fspring = -k * (x - destX);

  // Damping, in kg / s
  var Fdamper = -b * v;

  // usually we put mass here, but for animation purposes, specifying mass is a
  // bit redundant. you could simply adjust k and b accordingly
  // let a = (Fspring + Fdamper) / mass;
  var a = Fspring + Fdamper;

  var newV = v + a * secondPerFrame;
  var newX = x + newV * secondPerFrame;

  if (Math.abs(newV) < precision && Math.abs(newX - destX) < precision) {
    reusedTuple[0] = destX;
    reusedTuple[1] = 0;
    return reusedTuple;
  }

  reusedTuple[0] = newX;
  reusedTuple[1] = newV;
  return reusedTuple;
}

module.exports = exports["default"];
// array reference around.

/***/ }),

/***/ "./node_modules/react-motion/lib/stripStyle.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-motion/lib/stripStyle.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// turn {x: {val: 1, stiffness: 1, damping: 2}, y: 2} generated by
// `{x: spring(1, {stiffness: 1, damping: 2}), y: 2}` into {x: 1, y: 2}



exports.__esModule = true;
exports['default'] = stripStyle;

function stripStyle(style) {
  var ret = {};
  for (var key in style) {
    if (!Object.prototype.hasOwnProperty.call(style, key)) {
      continue;
    }
    ret[key] = typeof style[key] === 'number' ? style[key] : style[key].val;
  }
  return ret;
}

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-prop-types/lib/deprecated.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-prop-types/lib/deprecated.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = deprecated;

var _warning = __webpack_require__(/*! warning */ "./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var warned = {};

function deprecated(validator, reason) {
  return function validate(props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (props[propName] != null) {
      var messageKey = componentName + '.' + propName;

      (0, _warning2.default)(warned[messageKey], 'The ' + location + ' `' + propFullNameSafe + '` of ' + ('`' + componentNameSafe + '` is deprecated. ' + reason + '.'));

      warned[messageKey] = true;
    }

    for (var _len = arguments.length, args = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      args[_key - 5] = arguments[_key];
    }

    return validator.apply(undefined, [props, propName, componentName, location, propFullName].concat(args));
  };
}

/* eslint-disable no-underscore-dangle */
function _resetWarned() {
  warned = {};
}

deprecated._resetWarned = _resetWarned;
/* eslint-enable no-underscore-dangle */

/***/ }),

/***/ "./node_modules/react-prop-types/lib/isRequiredForA11y.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-prop-types/lib/isRequiredForA11y.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = isRequiredForA11y;
function isRequiredForA11y(validator) {
  return function validate(props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (props[propName] == null) {
      return new Error('The ' + location + ' `' + propFullNameSafe + '` is required to make ' + ('`' + componentNameSafe + '` accessible for users of assistive ') + 'technologies such as screen readers.');
    }

    for (var _len = arguments.length, args = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      args[_key - 5] = arguments[_key];
    }

    return validator.apply(undefined, [props, propName, componentName, location, propFullName].concat(args));
  };
}

/***/ }),

/***/ "./node_modules/react-transition-group/CSSTransitionGroup.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-transition-group/CSSTransitionGroup.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TransitionGroup = __webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/TransitionGroup.js");

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _CSSTransitionGroupChild = __webpack_require__(/*! ./CSSTransitionGroupChild */ "./node_modules/react-transition-group/CSSTransitionGroupChild.js");

var _CSSTransitionGroupChild2 = _interopRequireDefault(_CSSTransitionGroupChild);

var _PropTypes = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/utils/PropTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  transitionName: _PropTypes.nameShape.isRequired,

  transitionAppear: _propTypes2.default.bool,
  transitionEnter: _propTypes2.default.bool,
  transitionLeave: _propTypes2.default.bool,
  transitionAppearTimeout: (0, _PropTypes.transitionTimeout)('Appear'),
  transitionEnterTimeout: (0, _PropTypes.transitionTimeout)('Enter'),
  transitionLeaveTimeout: (0, _PropTypes.transitionTimeout)('Leave')
};

var defaultProps = {
  transitionAppear: false,
  transitionEnter: true,
  transitionLeave: true
};

var CSSTransitionGroup = function (_React$Component) {
  _inherits(CSSTransitionGroup, _React$Component);

  function CSSTransitionGroup() {
    var _temp, _this, _ret;

    _classCallCheck(this, CSSTransitionGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this._wrapChild = function (child) {
      return _react2.default.createElement(_CSSTransitionGroupChild2.default, {
        name: _this.props.transitionName,
        appear: _this.props.transitionAppear,
        enter: _this.props.transitionEnter,
        leave: _this.props.transitionLeave,
        appearTimeout: _this.props.transitionAppearTimeout,
        enterTimeout: _this.props.transitionEnterTimeout,
        leaveTimeout: _this.props.transitionLeaveTimeout
      }, child);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // We need to provide this childFactory so that
  // ReactCSSTransitionGroupChild can receive updates to name, enter, and
  // leave while it is leaving.


  CSSTransitionGroup.prototype.render = function render() {
    return _react2.default.createElement(_TransitionGroup2.default, _extends({}, this.props, { childFactory: this._wrapChild }));
  };

  return CSSTransitionGroup;
}(_react2.default.Component);

CSSTransitionGroup.displayName = 'CSSTransitionGroup';


CSSTransitionGroup.propTypes =  true ? propTypes : undefined;
CSSTransitionGroup.defaultProps = defaultProps;

exports.default = CSSTransitionGroup;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-transition-group/CSSTransitionGroupChild.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-transition-group/CSSTransitionGroupChild.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _addClass = __webpack_require__(/*! dom-helpers/class/addClass */ "./node_modules/dom-helpers/class/addClass.js");

var _addClass2 = _interopRequireDefault(_addClass);

var _removeClass = __webpack_require__(/*! dom-helpers/class/removeClass */ "./node_modules/dom-helpers/class/removeClass.js");

var _removeClass2 = _interopRequireDefault(_removeClass);

var _requestAnimationFrame = __webpack_require__(/*! dom-helpers/util/requestAnimationFrame */ "./node_modules/dom-helpers/util/requestAnimationFrame.js");

var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);

var _properties = __webpack_require__(/*! dom-helpers/transition/properties */ "./node_modules/dom-helpers/transition/properties.js");

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _PropTypes = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/utils/PropTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var events = [];
if (_properties.transitionEnd) events.push(_properties.transitionEnd);
if (_properties.animationEnd) events.push(_properties.animationEnd);

function addEndListener(node, listener) {
  if (events.length) {
    events.forEach(function (e) {
      return node.addEventListener(e, listener, false);
    });
  } else {
    setTimeout(listener, 0);
  }

  return function () {
    if (!events.length) return;
    events.forEach(function (e) {
      return node.removeEventListener(e, listener, false);
    });
  };
}

var propTypes = {
  children: _propTypes2.default.node,
  name: _PropTypes.nameShape.isRequired,

  // Once we require timeouts to be specified, we can remove the
  // boolean flags (appear etc.) and just accept a number
  // or a bool for the timeout flags (appearTimeout etc.)
  appear: _propTypes2.default.bool,
  enter: _propTypes2.default.bool,
  leave: _propTypes2.default.bool,
  appearTimeout: _propTypes2.default.number,
  enterTimeout: _propTypes2.default.number,
  leaveTimeout: _propTypes2.default.number
};

var CSSTransitionGroupChild = function (_React$Component) {
  _inherits(CSSTransitionGroupChild, _React$Component);

  function CSSTransitionGroupChild() {
    var _temp, _this, _ret;

    _classCallCheck(this, CSSTransitionGroupChild);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.componentWillAppear = function (done) {
      if (_this.props.appear) {
        _this.transition('appear', done, _this.props.appearTimeout);
      } else {
        done();
      }
    }, _this.componentWillEnter = function (done) {
      if (_this.props.enter) {
        _this.transition('enter', done, _this.props.enterTimeout);
      } else {
        done();
      }
    }, _this.componentWillLeave = function (done) {
      if (_this.props.leave) {
        _this.transition('leave', done, _this.props.leaveTimeout);
      } else {
        done();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  CSSTransitionGroupChild.prototype.componentWillMount = function componentWillMount() {
    this.classNameAndNodeQueue = [];
    this.transitionTimeouts = [];
  };

  CSSTransitionGroupChild.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unmounted = true;

    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.transitionTimeouts.forEach(function (timeout) {
      clearTimeout(timeout);
    });

    this.classNameAndNodeQueue.length = 0;
  };

  CSSTransitionGroupChild.prototype.transition = function transition(animationType, finishCallback, timeout) {
    var node = (0, _reactDom.findDOMNode)(this);

    if (!node) {
      if (finishCallback) {
        finishCallback();
      }
      return;
    }

    var className = this.props.name[animationType] || this.props.name + '-' + animationType;
    var activeClassName = this.props.name[animationType + 'Active'] || className + '-active';
    var timer = null;
    var removeListeners = void 0;

    (0, _addClass2.default)(node, className);

    // Need to do this to actually trigger a transition.
    this.queueClassAndNode(activeClassName, node);

    // Clean-up the animation after the specified delay
    var finish = function finish(e) {
      if (e && e.target !== node) {
        return;
      }

      clearTimeout(timer);
      if (removeListeners) removeListeners();

      (0, _removeClass2.default)(node, className);
      (0, _removeClass2.default)(node, activeClassName);

      if (removeListeners) removeListeners();

      // Usually this optional callback is used for informing an owner of
      // a leave animation and telling it to remove the child.
      if (finishCallback) {
        finishCallback();
      }
    };

    if (timeout) {
      timer = setTimeout(finish, timeout);
      this.transitionTimeouts.push(timer);
    } else if (_properties.transitionEnd) {
      removeListeners = addEndListener(node, finish);
    }
  };

  CSSTransitionGroupChild.prototype.queueClassAndNode = function queueClassAndNode(className, node) {
    var _this2 = this;

    this.classNameAndNodeQueue.push({
      className: className,
      node: node
    });

    if (!this.rafHandle) {
      this.rafHandle = (0, _requestAnimationFrame2.default)(function () {
        return _this2.flushClassNameAndNodeQueue();
      });
    }
  };

  CSSTransitionGroupChild.prototype.flushClassNameAndNodeQueue = function flushClassNameAndNodeQueue() {
    if (!this.unmounted) {
      this.classNameAndNodeQueue.forEach(function (obj) {
        // This is for to force a repaint,
        // which is necessary in order to transition styles when adding a class name.
        /* eslint-disable no-unused-expressions */
        obj.node.scrollTop;
        /* eslint-enable no-unused-expressions */
        (0, _addClass2.default)(obj.node, obj.className);
      });
    }
    this.classNameAndNodeQueue.length = 0;
    this.rafHandle = null;
  };

  CSSTransitionGroupChild.prototype.render = function render() {
    var props = _extends({}, this.props);
    delete props.name;
    delete props.appear;
    delete props.enter;
    delete props.leave;
    delete props.appearTimeout;
    delete props.enterTimeout;
    delete props.leaveTimeout;
    delete props.children;
    return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), props);
  };

  return CSSTransitionGroupChild;
}(_react2.default.Component);

CSSTransitionGroupChild.displayName = 'CSSTransitionGroupChild';


CSSTransitionGroupChild.propTypes =  true ? propTypes : undefined;

exports.default = CSSTransitionGroupChild;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-transition-group/TransitionGroup.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-transition-group/TransitionGroup.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _chainFunction = __webpack_require__(/*! chain-function */ "./node_modules/chain-function/index.js");

var _chainFunction2 = _interopRequireDefault(_chainFunction);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__(/*! warning */ "./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _ChildMapping = __webpack_require__(/*! ./utils/ChildMapping */ "./node_modules/react-transition-group/utils/ChildMapping.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  component: _propTypes2.default.any,
  childFactory: _propTypes2.default.func,
  children: _propTypes2.default.node
};

var defaultProps = {
  component: 'span',
  childFactory: function childFactory(child) {
    return child;
  }
};

var TransitionGroup = function (_React$Component) {
  _inherits(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    _classCallCheck(this, TransitionGroup);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.performAppear = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillAppear) {
        component.componentWillAppear(_this._handleDoneAppearing.bind(_this, key, component));
      } else {
        _this._handleDoneAppearing(key, component);
      }
    };

    _this._handleDoneAppearing = function (key, component) {
      if (component.componentDidAppear) {
        component.componentDidAppear();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully appeared. Remove it.
        _this.performLeave(key, component);
      }
    };

    _this.performEnter = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillEnter) {
        component.componentWillEnter(_this._handleDoneEntering.bind(_this, key, component));
      } else {
        _this._handleDoneEntering(key, component);
      }
    };

    _this._handleDoneEntering = function (key, component) {
      if (component.componentDidEnter) {
        component.componentDidEnter();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully entered. Remove it.
        _this.performLeave(key, component);
      }
    };

    _this.performLeave = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillLeave) {
        component.componentWillLeave(_this._handleDoneLeaving.bind(_this, key, component));
      } else {
        // Note that this is somewhat dangerous b/c it calls setState()
        // again, effectively mutating the component before all the work
        // is done.
        _this._handleDoneLeaving(key, component);
      }
    };

    _this._handleDoneLeaving = function (key, component) {
      if (component.componentDidLeave) {
        component.componentDidLeave();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
        // This entered again before it fully left. Add it again.
        _this.keysToEnter.push(key);
      } else {
        _this.setState(function (state) {
          var newChildren = _extends({}, state.children);
          delete newChildren[key];
          return { children: newChildren };
        });
      }
    };

    _this.childRefs = Object.create(null);

    _this.state = {
      children: (0, _ChildMapping.getChildMapping)(props.children)
    };
    return _this;
  }

  TransitionGroup.prototype.componentWillMount = function componentWillMount() {
    this.currentlyTransitioningKeys = {};
    this.keysToEnter = [];
    this.keysToLeave = [];
  };

  TransitionGroup.prototype.componentDidMount = function componentDidMount() {
    var initialChildMapping = this.state.children;
    for (var key in initialChildMapping) {
      if (initialChildMapping[key]) {
        this.performAppear(key, this.childRefs[key]);
      }
    }
  };

  TransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var nextChildMapping = (0, _ChildMapping.getChildMapping)(nextProps.children);
    var prevChildMapping = this.state.children;

    this.setState({
      children: (0, _ChildMapping.mergeChildMappings)(prevChildMapping, nextChildMapping)
    });

    for (var key in nextChildMapping) {
      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
        this.keysToEnter.push(key);
      }
    }

    for (var _key in prevChildMapping) {
      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(_key);
      if (prevChildMapping[_key] && !hasNext && !this.currentlyTransitioningKeys[_key]) {
        this.keysToLeave.push(_key);
      }
    }

    // If we want to someday check for reordering, we could do it here.
  };

  TransitionGroup.prototype.componentDidUpdate = function componentDidUpdate() {
    var _this2 = this;

    var keysToEnter = this.keysToEnter;
    this.keysToEnter = [];
    keysToEnter.forEach(function (key) {
      return _this2.performEnter(key, _this2.childRefs[key]);
    });

    var keysToLeave = this.keysToLeave;
    this.keysToLeave = [];
    keysToLeave.forEach(function (key) {
      return _this2.performLeave(key, _this2.childRefs[key]);
    });
  };

  TransitionGroup.prototype.render = function render() {
    var _this3 = this;

    // TODO: we could get rid of the need for the wrapper node
    // by cloning a single child
    var childrenToRender = [];

    var _loop = function _loop(key) {
      var child = _this3.state.children[key];
      if (child) {
        var isCallbackRef = typeof child.ref !== 'string';
        var factoryChild = _this3.props.childFactory(child);
        var ref = function ref(r) {
          _this3.childRefs[key] = r;
        };

         true ? (0, _warning2.default)(isCallbackRef, 'string refs are not supported on children of TransitionGroup and will be ignored. ' + 'Please use a callback ref instead: https://facebook.github.io/react/docs/refs-and-the-dom.html#the-ref-callback-attribute') : undefined;

        // Always chaining the refs leads to problems when the childFactory
        // wraps the child. The child ref callback gets called twice with the
        // wrapper and the child. So we only need to chain the ref if the
        // factoryChild is not different from child.
        if (factoryChild === child && isCallbackRef) {
          ref = (0, _chainFunction2.default)(child.ref, ref);
        }

        // You may need to apply reactive updates to a child as it is leaving.
        // The normal React way to do it won't work since the child will have
        // already been removed. In case you need this behavior you can provide
        // a childFactory function to wrap every child, even the ones that are
        // leaving.
        childrenToRender.push(_react2.default.cloneElement(factoryChild, {
          key: key,
          ref: ref
        }));
      }
    };

    for (var key in this.state.children) {
      _loop(key);
    }

    // Do not forward TransitionGroup props to primitive DOM nodes
    var props = _extends({}, this.props);
    delete props.transitionLeave;
    delete props.transitionName;
    delete props.transitionAppear;
    delete props.transitionEnter;
    delete props.childFactory;
    delete props.transitionLeaveTimeout;
    delete props.transitionEnterTimeout;
    delete props.transitionAppearTimeout;
    delete props.component;

    return _react2.default.createElement(this.props.component, props, childrenToRender);
  };

  return TransitionGroup;
}(_react2.default.Component);

TransitionGroup.displayName = 'TransitionGroup';


TransitionGroup.propTypes =  true ? propTypes : undefined;
TransitionGroup.defaultProps = defaultProps;

exports.default = TransitionGroup;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-transition-group/utils/ChildMapping.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-transition-group/utils/ChildMapping.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children) {
  if (!children) {
    return children;
  }
  var result = {};
  _react.Children.map(children, function (child) {
    return child;
  }).forEach(function (child) {
    result[child.key] = child;
  });
  return result;
}

/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */
function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    if (next.hasOwnProperty(key)) {
      return next[key];
    }

    return prev[key];
  }

  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextKeysPending = {};

  var pendingKeys = [];
  for (var prevKey in prev) {
    if (next.hasOwnProperty(prevKey)) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i = void 0;
  var childMapping = {};
  for (var nextKey in next) {
    if (nextKeysPending.hasOwnProperty(nextKey)) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }

  // Finally, add the keys which didn't appear before any key in `next`
  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

/***/ }),

/***/ "./node_modules/react-transition-group/utils/PropTypes.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-transition-group/utils/PropTypes.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.nameShape = undefined;
exports.transitionTimeout = transitionTimeout;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transitionTimeout(transitionType) {
  var timeoutPropName = 'transition' + transitionType + 'Timeout';
  var enabledPropName = 'transition' + transitionType;

  return function (props) {
    // If the transition is enabled
    if (props[enabledPropName]) {
      // If no timeout duration is provided
      if (props[timeoutPropName] == null) {
        return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');

        // If the duration isn't a number
      } else if (typeof props[timeoutPropName] !== 'number') {
        return new Error(timeoutPropName + ' must be a number (in milliseconds)');
      }
    }

    return null;
  };
}

var nameShape = exports.nameShape = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  leave: _propTypes2.default.string,
  active: _propTypes2.default.string
}), _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  enterActive: _propTypes2.default.string,
  leave: _propTypes2.default.string,
  leaveActive: _propTypes2.default.string,
  appear: _propTypes2.default.string,
  appearActive: _propTypes2.default.string
})]);

/***/ }),

/***/ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js":
/*!*************************************************************************!*\
  !*** ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }

    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;

        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;

                return true;
            }

            return false;
        });

        return result;
    }

    return (function () {
        function anonymous() {
            this.__entries__ = [];
        }

        var prototypeAccessors = { size: { configurable: true } };

        /**
         * @returns {boolean}
         */
        prototypeAccessors.size.get = function () {
            return this.__entries__.length;
        };

        /**
         * @param {*} key
         * @returns {*}
         */
        anonymous.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];

            return entry && entry[1];
        };

        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        anonymous.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);

            if (~index) {
                this.__entries__[index][1] = value;
            } else {
                this.__entries__.push([key, value]);
            }
        };

        /**
         * @param {*} key
         * @returns {void}
         */
        anonymous.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);

            if (~index) {
                entries.splice(index, 1);
            }
        };

        /**
         * @param {*} key
         * @returns {void}
         */
        anonymous.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };

        /**
         * @returns {void}
         */
        anonymous.prototype.clear = function () {
            this.__entries__.splice(0);
        };

        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        anonymous.prototype.forEach = function (callback, ctx) {
            var this$1 = this;
            if ( ctx === void 0 ) ctx = null;

            for (var i = 0, list = this$1.__entries__; i < list.length; i += 1) {
                var entry = list[i];

                callback.call(ctx, entry[1], entry[0]);
            }
        };

        Object.defineProperties( anonymous.prototype, prototypeAccessors );

        return anonymous;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }

    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }

    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }

    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }

    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;

/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
var throttle = function (callback, delay) {
    var leadingCall = false,
        trailingCall = false,
        lastCallTime = 0;

    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;

            callback();
        }

        if (trailingCall) {
            proxy();
        }
    }

    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }

    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();

        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }

            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        } else {
            leadingCall = true;
            trailingCall = false;

            setTimeout(timeoutCallback, delay);
        }

        lastCallTime = timeStamp;
    }

    return proxy;
};

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;

// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];

// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';

/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = function() {
    this.connected_ = false;
    this.mutationEventsAdded_ = false;
    this.mutationsObserver_ = null;
    this.observers_ = [];

    this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
    this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
};

/**
 * Adds observer to observers list.
 *
 * @param {ResizeObserverSPI} observer - Observer to be added.
 * @returns {void}
 */


/**
 * Holds reference to the controller's instance.
 *
 * @private {ResizeObserverController}
 */


/**
 * Keeps reference to the instance of MutationObserver.
 *
 * @private {MutationObserver}
 */

/**
 * Indicates whether DOM listeners have been added.
 *
 * @private {boolean}
 */
ResizeObserverController.prototype.addObserver = function (observer) {
    if (!~this.observers_.indexOf(observer)) {
        this.observers_.push(observer);
    }

    // Add listeners if they haven't been added yet.
    if (!this.connected_) {
        this.connect_();
    }
};

/**
 * Removes observer from observers list.
 *
 * @param {ResizeObserverSPI} observer - Observer to be removed.
 * @returns {void}
 */
ResizeObserverController.prototype.removeObserver = function (observer) {
    var observers = this.observers_;
    var index = observers.indexOf(observer);

    // Remove observer if it's present in registry.
    if (~index) {
        observers.splice(index, 1);
    }

    // Remove listeners if controller has no connected observers.
    if (!observers.length && this.connected_) {
        this.disconnect_();
    }
};

/**
 * Invokes the update of observers. It will continue running updates insofar
 * it detects changes.
 *
 * @returns {void}
 */
ResizeObserverController.prototype.refresh = function () {
    var changesDetected = this.updateObservers_();

    // Continue running updates if changes have been detected as there might
    // be future ones caused by CSS transitions.
    if (changesDetected) {
        this.refresh();
    }
};

/**
 * Updates every observer from observers list and notifies them of queued
 * entries.
 *
 * @private
 * @returns {boolean} Returns "true" if any observer has detected changes in
 *  dimensions of it's elements.
 */
ResizeObserverController.prototype.updateObservers_ = function () {
    // Collect observers that have active observations.
    var activeObservers = this.observers_.filter(function (observer) {
        return observer.gatherActive(), observer.hasActive();
    });

    // Deliver notifications in a separate cycle in order to avoid any
    // collisions between observers, e.g. when multiple instances of
    // ResizeObserver are tracking the same element and the callback of one
    // of them changes content dimensions of the observed target. Sometimes
    // this may result in notifications being blocked for the rest of observers.
    activeObservers.forEach(function (observer) { return observer.broadcastActive(); });

    return activeObservers.length > 0;
};

/**
 * Initializes DOM listeners.
 *
 * @private
 * @returns {void}
 */
ResizeObserverController.prototype.connect_ = function () {
    // Do nothing if running in a non-browser environment or if listeners
    // have been already added.
    if (!isBrowser || this.connected_) {
        return;
    }

    // Subscription to the "Transitionend" event is used as a workaround for
    // delayed transitions. This way it's possible to capture at least the
    // final state of an element.
    document.addEventListener('transitionend', this.onTransitionEnd_);

    window.addEventListener('resize', this.refresh);

    if (mutationObserverSupported) {
        this.mutationsObserver_ = new MutationObserver(this.refresh);

        this.mutationsObserver_.observe(document, {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
        });
    } else {
        document.addEventListener('DOMSubtreeModified', this.refresh);

        this.mutationEventsAdded_ = true;
    }

    this.connected_ = true;
};

/**
 * Removes DOM listeners.
 *
 * @private
 * @returns {void}
 */
ResizeObserverController.prototype.disconnect_ = function () {
    // Do nothing if running in a non-browser environment or if listeners
    // have been already removed.
    if (!isBrowser || !this.connected_) {
        return;
    }

    document.removeEventListener('transitionend', this.onTransitionEnd_);
    window.removeEventListener('resize', this.refresh);

    if (this.mutationsObserver_) {
        this.mutationsObserver_.disconnect();
    }

    if (this.mutationEventsAdded_) {
        document.removeEventListener('DOMSubtreeModified', this.refresh);
    }

    this.mutationsObserver_ = null;
    this.mutationEventsAdded_ = false;
    this.connected_ = false;
};

/**
 * "Transitionend" event handler.
 *
 * @private
 * @param {TransitionEvent} event
 * @returns {void}
 */
ResizeObserverController.prototype.onTransitionEnd_ = function (ref) {
        var propertyName = ref.propertyName; if ( propertyName === void 0 ) propertyName = '';

    // Detect whether transition may affect dimensions of an element.
    var isReflowProperty = transitionKeys.some(function (key) {
        return !!~propertyName.indexOf(key);
    });

    if (isReflowProperty) {
        this.refresh();
    }
};

/**
 * Returns instance of the ResizeObserverController.
 *
 * @returns {ResizeObserverController}
 */
ResizeObserverController.getInstance = function () {
    if (!this.instance_) {
        this.instance_ = new ResizeObserverController();
    }

    return this.instance_;
};

ResizeObserverController.instance_ = null;

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var i = 0, list = Object.keys(props); i < list.length; i += 1) {
        var key = list[i];

        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }

    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;

    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);

/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}

/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [], len = arguments.length - 1;
    while ( len-- > 0 ) positions[ len ] = arguments[ len + 1 ];

    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];

        return size + toFloat(value);
    }, 0);
}

/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};

    for (var i = 0, list = positions; i < list.length; i += 1) {
        var position = list[i];

        var value = styles['padding-' + position];

        paddings[position] = toFloat(value);
    }

    return paddings;
}

/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();

    return createRectInit(0, 0, bbox.width, bbox.height);
}

/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth;
    var clientHeight = target.clientHeight;

    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }

    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;

    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width),
        height = toFloat(styles.height);

    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }

        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }

    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;

        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }

        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }

    return createRectInit(paddings.left, paddings.top, width, height);
}

/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }

    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === 'function'; };
})();

/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}

/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }

    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }

    return getHTMLElementContentRect(target);
}

/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(ref) {
    var x = ref.x;
    var y = ref.y;
    var width = ref.width;
    var height = ref.height;

    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);

    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });

    return rect;
}

/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = function(target) {
    this.broadcastWidth = 0;
    this.broadcastHeight = 0;
    this.contentRect_ = createRectInit(0, 0, 0, 0);

    this.target = target;
};

/**
 * Updates content rectangle and tells whether it's width or height properties
 * have changed since the last broadcast.
 *
 * @returns {boolean}
 */


/**
 * Reference to the last observed content rectangle.
 *
 * @private {DOMRectInit}
 */


/**
 * Broadcasted width of content rectangle.
 *
 * @type {number}
 */
ResizeObservation.prototype.isActive = function () {
    var rect = getContentRect(this.target);

    this.contentRect_ = rect;

    return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
};

/**
 * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
 * from the corresponding properties of the last observed content rectangle.
 *
 * @returns {DOMRectInit} Last observed content rectangle.
 */
ResizeObservation.prototype.broadcastRect = function () {
    var rect = this.contentRect_;

    this.broadcastWidth = rect.width;
    this.broadcastHeight = rect.height;

    return rect;
};

var ResizeObserverEntry = function(target, rectInit) {
    var contentRect = createReadOnlyRect(rectInit);

    // According to the specification following properties are not writable
    // and are also not enumerable in the native implementation.
    //
    // Property accessors are not being used as they'd require to define a
    // private WeakMap storage which may cause memory leaks in browsers that
    // don't support this type of collections.
    defineConfigurable(this, { target: target, contentRect: contentRect });
};

var ResizeObserverSPI = function(callback, controller, callbackCtx) {
    this.activeObservations_ = [];
    this.observations_ = new MapShim();

    if (typeof callback !== 'function') {
        throw new TypeError('The callback provided as parameter 1 is not a function.');
    }

    this.callback_ = callback;
    this.controller_ = controller;
    this.callbackCtx_ = callbackCtx;
};

/**
 * Starts observing provided element.
 *
 * @param {Element} target - Element to be observed.
 * @returns {void}
 */


/**
 * Registry of the ResizeObservation instances.
 *
 * @private {Map<Element, ResizeObservation>}
 */


/**
 * Public ResizeObserver instance which will be passed to the callback
 * function and used as a value of it's "this" binding.
 *
 * @private {ResizeObserver}
 */

/**
 * Collection of resize observations that have detected changes in dimensions
 * of elements.
 *
 * @private {Array<ResizeObservation>}
 */
ResizeObserverSPI.prototype.observe = function (target) {
    if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
    }

    // Do nothing if current environment doesn't have the Element interface.
    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
        return;
    }

    if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
    }

    var observations = this.observations_;

    // Do nothing if element is already being observed.
    if (observations.has(target)) {
        return;
    }

    observations.set(target, new ResizeObservation(target));

    this.controller_.addObserver(this);

    // Force the update of observations.
    this.controller_.refresh();
};

/**
 * Stops observing provided element.
 *
 * @param {Element} target - Element to stop observing.
 * @returns {void}
 */
ResizeObserverSPI.prototype.unobserve = function (target) {
    if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
    }

    // Do nothing if current environment doesn't have the Element interface.
    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
        return;
    }

    if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
    }

    var observations = this.observations_;

    // Do nothing if element is not being observed.
    if (!observations.has(target)) {
        return;
    }

    observations.delete(target);

    if (!observations.size) {
        this.controller_.removeObserver(this);
    }
};

/**
 * Stops observing all elements.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.disconnect = function () {
    this.clearActive();
    this.observations_.clear();
    this.controller_.removeObserver(this);
};

/**
 * Collects observation instances the associated element of which has changed
 * it's content rectangle.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.gatherActive = function () {
        var this$1 = this;

    this.clearActive();

    this.observations_.forEach(function (observation) {
        if (observation.isActive()) {
            this$1.activeObservations_.push(observation);
        }
    });
};

/**
 * Invokes initial callback function with a list of ResizeObserverEntry
 * instances collected from active resize observations.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.broadcastActive = function () {
    // Do nothing if observer doesn't have active observations.
    if (!this.hasActive()) {
        return;
    }

    var ctx = this.callbackCtx_;

    // Create ResizeObserverEntry instance for every active observation.
    var entries = this.activeObservations_.map(function (observation) {
        return new ResizeObserverEntry(observation.target, observation.broadcastRect());
    });

    this.callback_.call(ctx, entries, ctx);
    this.clearActive();
};

/**
 * Clears the collection of active observations.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.clearActive = function () {
    this.activeObservations_.splice(0);
};

/**
 * Tells whether observer has active observations.
 *
 * @returns {boolean}
 */
ResizeObserverSPI.prototype.hasActive = function () {
    return this.activeObservations_.length > 0;
};

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();

/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = function(callback) {
    if (!(this instanceof ResizeObserver)) {
        throw new TypeError('Cannot call a class as a function.');
    }
    if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
    }

    var controller = ResizeObserverController.getInstance();
    var observer = new ResizeObserverSPI(callback, controller, this);

    observers.set(this, observer);
};

// Expose public methods of ResizeObserver.
['observe', 'unobserve', 'disconnect'].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        return (ref = observers.get(this))[method].apply(ref, arguments);
        var ref;
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }

    return ResizeObserver;
})();

/* harmony default export */ __webpack_exports__["default"] = (index);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/warning/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/warning/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (true) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_md_lib_Avatars__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-md/lib/Avatars */ "./node_modules/react-md/lib/Avatars/index.js");
/* harmony import */ var react_md_lib_Avatars__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_md_lib_Avatars__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_md_lib_Buttons_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-md/lib/Buttons/Button */ "./node_modules/react-md/lib/Buttons/Button.js");
/* harmony import */ var react_md_lib_Buttons_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_md_lib_Buttons_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_md_lib_FontIcons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-md/lib/FontIcons */ "./node_modules/react-md/lib/FontIcons/index.js");
/* harmony import */ var react_md_lib_FontIcons__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_md_lib_FontIcons__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_md_lib_Lists_ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-md/lib/Lists/ListItem */ "./node_modules/react-md/lib/Lists/ListItem.js");
/* harmony import */ var react_md_lib_Lists_ListItem__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_md_lib_Lists_ListItem__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_md_lib_NavigationDrawers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-md/lib/NavigationDrawers */ "./node_modules/react-md/lib/NavigationDrawers/index.js");
/* harmony import */ var react_md_lib_NavigationDrawers__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_md_lib_NavigationDrawers__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_md_lib_SelectFields__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-md/lib/SelectFields */ "./node_modules/react-md/lib/SelectFields/index.js");
/* harmony import */ var react_md_lib_SelectFields__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_md_lib_SelectFields__WEBPACK_IMPORTED_MODULE_11__);

var _jsxFileName = "/home/ubuntu/workspace/next/pages/_app.js";


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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












next_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on('routeChangeStart', function (url) {
  console.log("Loading: ".concat(url));
  nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.start();
});
next_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on('routeChangeComplete', function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.done();
});
next_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on('routeChangeError', function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.done();
});
var avatarSrc = 'https://cloud.githubusercontent.com/assets/13041/19686250/971bf7f8-9ac0-11e6-975c-188defd82df1.png';
var drawerHeaderChildren = [react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_md_lib_Avatars__WEBPACK_IMPORTED_MODULE_6___default.a, {
  style: {
    alignSelf: 'center',
    marginLeft: 16,
    marginRight: 16,
    flexShrink: 0
  },
  key: avatarSrc,
  src: avatarSrc,
  role: "presentation",
  iconSized: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_md_lib_SelectFields__WEBPACK_IMPORTED_MODULE_11___default.a, {
  position: react_md_lib_SelectFields__WEBPACK_IMPORTED_MODULE_11___default.a.Positions.BELOW,
  className: "md-select-field--toolbar",
  menuItems: ['Jonathan', 'Fred'],
  defaultValue: "Jonathan",
  key: "account-switcher",
  id: "account-switcher",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
})];
var toolbarActions = [react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_md_lib_Buttons_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
  icon: true,
  tooltipLabel: "Share this page",
  tooltipDelay: 150,
  tooltipPosition: "left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}, "share")];

var NavigationLink =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(NavigationLink, _PureComponent);

  function NavigationLink() {
    _classCallCheck(this, NavigationLink);

    return _possibleConstructorReturn(this, _getPrototypeOf(NavigationLink).apply(this, arguments));
  }

  _createClass(NavigationLink, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          href = _this$props.href,
          as = _this$props.as,
          children = _this$props.children,
          _props = _objectWithoutProperties(_this$props, ["href", "as", "children"]);

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", _extends({}, _props, {
        style: {
          padding: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: href,
        as: as,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "md-list-tile md-list-tile--mini",
        style: {
          width: '100%',
          overflow: 'hidden'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, children)));
    }
  }]);

  return NavigationLink;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);

var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyApp).apply(this, arguments));
  }

  _createClass(MyApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register("/service-worker.js").then(function (registration) {
          console.log('service worker registration successful');
        }).catch(function (err) {
          console.warn('service worker registration failed', err.message);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          Component = _this$props2.Component,
          pageProps = _this$props2.pageProps;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_md_lib_NavigationDrawers__WEBPACK_IMPORTED_MODULE_10___default.a, {
        navItems: [react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_md_lib_Lists_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
          key: "0",
          component: NavigationLink,
          href: "/",
          as: "/",
          leftIcon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_md_lib_FontIcons__WEBPACK_IMPORTED_MODULE_8___default.a, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 95
            },
            __self: this
          }, "inbox"),
          tileClassName: "md-list-tile--mini",
          primaryText: 'Home',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_md_lib_Lists_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
          key: "1",
          component: NavigationLink,
          href: "/about",
          as: "/about",
          leftIcon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_md_lib_FontIcons__WEBPACK_IMPORTED_MODULE_8___default.a, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 103
            },
            __self: this
          }, "info"),
          tileClassName: "md-list-tile--mini",
          primaryText: 'About',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_md_lib_Lists_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
          key: "2",
          component: NavigationLink,
          href: "/tvmaze",
          as: "/tvmaze",
          leftIcon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_md_lib_FontIcons__WEBPACK_IMPORTED_MODULE_8___default.a, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 111
            },
            __self: this
          }, "tv"),
          tileClassName: "md-list-tile--mini",
          primaryText: 'TV Maze',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          },
          __self: this
        })],
        contentClassName: "md-grid",
        drawerHeaderChildren: drawerHeaderChildren,
        mobileDrawerType: react_md_lib_NavigationDrawers__WEBPACK_IMPORTED_MODULE_10___default.a.DrawerTypes.TEMPORARY,
        tabletDrawerType: react_md_lib_NavigationDrawers__WEBPACK_IMPORTED_MODULE_10___default.a.DrawerTypes.PERSISTENT_MINI,
        desktopDrawerType: react_md_lib_NavigationDrawers__WEBPACK_IMPORTED_MODULE_10___default.a.DrawerTypes.PERSISTENT_MINI,
        toolbarTitle: "Hello, World!",
        toolbarActions: toolbarActions,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, _extends({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, router, ctx, pageProps;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, router = _ref.router, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                pageProps = _context.sent;

              case 6:
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_2___default.a);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/_app")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=_app.js.a77c756e2f62e143fae6.hot-update.js.map