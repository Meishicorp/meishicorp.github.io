_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["main"],{

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct */ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js");

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@next/polyfill-module/dist/polyfill-module.js":
/*!********************************************************************!*\
  !*** ./node_modules/@next/polyfill-module/dist/polyfill-module.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

"trimStart"in String.prototype||(String.prototype.trimStart=String.prototype.trimLeft),"trimEnd"in String.prototype||(String.prototype.trimEnd=String.prototype.trimRight),"description"in Symbol.prototype||Object.defineProperty(Symbol.prototype,"description",{configurable:!0,get:function(){var t=/\((.*)\)/.exec(this.toString());return t?t[1]:void 0}}),Array.prototype.flat||(Array.prototype.flat=function(t,r){return r=this.concat.apply([],this),t>1&&r.some(Array.isArray)?r.flat(t-1):r},Array.prototype.flatMap=function(t,r){return this.map(t,r).flat()}),Promise.prototype.finally||(Promise.prototype.finally=function(t){if("function"!=typeof t)return this.then(t,t);var r=this.constructor||Promise;return this.then(function(o){return r.resolve(t()).then(function(){return o})},function(o){return r.resolve(t()).then(function(){throw o})})});


/***/ }),

/***/ "./node_modules/@next/react-dev-overlay/lib/client.js":
/*!************************************************************!*\
  !*** ./node_modules/@next/react-dev-overlay/lib/client.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var Bus = __importStar(__webpack_require__(/*! ./internal/bus */ "./node_modules/@next/react-dev-overlay/lib/internal/bus.js"));
var parseStack_1 = __webpack_require__(/*! ./internal/helpers/parseStack */ "./node_modules/@next/react-dev-overlay/lib/internal/helpers/parseStack.js");
var isRegistered = false;
var stackTraceLimit = undefined;
function onUnhandledError(ev) {
    var error = ev === null || ev === void 0 ? void 0 : ev.error;
    if (!error || !(error instanceof Error) || typeof error.stack !== 'string') {
        // A non-error was thrown, we don't have anything to show. :-(
        return;
    }
    var e = error;
    Bus.emit({
        type: Bus.TYPE_UNHANDLED_ERROR,
        reason: error,
        frames: parseStack_1.parseStack(e.stack)
    });
}
function onUnhandledRejection(ev) {
    var reason = ev === null || ev === void 0 ? void 0 : ev.reason;
    if (!reason ||
        !(reason instanceof Error) ||
        typeof reason.stack !== 'string') {
        // A non-error was thrown, we don't have anything to show. :-(
        return;
    }
    var e = reason;
    Bus.emit({
        type: Bus.TYPE_UNHANDLED_REJECTION,
        reason: reason,
        frames: parseStack_1.parseStack(e.stack)
    });
}
function register() {
    if (isRegistered) {
        return;
    }
    isRegistered = true;
    try {
        var limit = Error.stackTraceLimit;
        Error.stackTraceLimit = 50;
        stackTraceLimit = limit;
    }
    catch (_a) { }
    window.addEventListener('error', onUnhandledError);
    window.addEventListener('unhandledrejection', onUnhandledRejection);
}
exports.register = register;
function unregister() {
    if (!isRegistered) {
        return;
    }
    isRegistered = false;
    if (stackTraceLimit !== undefined) {
        try {
            Error.stackTraceLimit = stackTraceLimit;
        }
        catch (_a) { }
        stackTraceLimit = undefined;
    }
    window.removeEventListener('error', onUnhandledError);
    window.removeEventListener('unhandledrejection', onUnhandledRejection);
}
exports.unregister = unregister;
function onBuildOk() {
    Bus.emit({ type: Bus.TYPE_BUILD_OK });
}
exports.onBuildOk = onBuildOk;
function onBuildError(message) {
    Bus.emit({ type: Bus.TYPE_BUILD_ERROR, message: message });
}
exports.onBuildError = onBuildError;
function onRefresh() {
    Bus.emit({ type: Bus.TYPE_REFFRESH });
}
exports.onRefresh = onRefresh;
var nodeStackFrames_1 = __webpack_require__(/*! ./internal/helpers/nodeStackFrames */ "./node_modules/@next/react-dev-overlay/lib/internal/helpers/nodeStackFrames.js");
exports.getNodeError = nodeStackFrames_1.getNodeError;
var ReactDevOverlay_1 = __webpack_require__(/*! ./internal/ReactDevOverlay */ "./node_modules/@next/react-dev-overlay/lib/internal/ReactDevOverlay.js");
exports.ReactDevOverlay = ReactDevOverlay_1["default"];
//# sourceMappingURL=client.js.map

/***/ }),

/***/ "./node_modules/@next/react-dev-overlay/lib/internal/ErrorBoundary.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@next/react-dev-overlay/lib/internal/ErrorBoundary.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.module.js"));
var ErrorBoundary = /** @class */ (function (_super) {
    __extends(ErrorBoundary, _super);
    function ErrorBoundary() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { error: null };
        return _this;
    }
    ErrorBoundary.prototype.componentDidCatch = function (error, 
    // Loosely typed because it depends on the React version and was
    // accidentally excluded in some versions.
    errorInfo) {
        this.props.onError(error, (errorInfo === null || errorInfo === void 0 ? void 0 : errorInfo.componentStack) || null);
        this.setState({ error: error });
    };
    ErrorBoundary.prototype.render = function () {
        return this.state.error
            ? // The component has to be unmounted or else it would continue to error
                null
            : this.props.children;
    };
    return ErrorBoundary;
}(react_1["default"].PureComponent));
exports.ErrorBoundary = ErrorBoundary;
//# sourceMappingURL=ErrorBoundary.js.map

/***/ }),

/***/ "./node_modules/@next/react-dev-overlay/lib/internal/ReactDevOverlay.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@next/react-dev-overlay/lib/internal/ReactDevOverlay.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.module.js"));
var Bus = __importStar(__webpack_require__(/*! ./bus */ "./node_modules/@next/react-dev-overlay/lib/internal/bus.js"));
var ShadowPortal_1 = __webpack_require__(/*! ./components/ShadowPortal */ "./node_modules/@next/react-dev-overlay/lib/internal/components/ShadowPortal.js");
var Errors_1 = __webpack_require__(/*! ./container/Errors */ "./node_modules/@next/react-dev-overlay/lib/internal/container/Errors.js");
var BuildError_1 = __webpack_require__(/*! ./container/BuildError */ "./node_modules/@next/react-dev-overlay/lib/internal/container/BuildError.js");
var ErrorBoundary_1 = __webpack_require__(/*! ./ErrorBoundary */ "./node_modules/@next/react-dev-overlay/lib/internal/ErrorBoundary.js");
var Base_1 = __webpack_require__(/*! ./styles/Base */ "./node_modules/@next/react-dev-overlay/lib/internal/styles/Base.js");
var ComponentStyles_1 = __webpack_require__(/*! ./styles/ComponentStyles */ "./node_modules/@next/react-dev-overlay/lib/internal/styles/ComponentStyles.js");
var CssReset_1 = __webpack_require__(/*! ./styles/CssReset */ "./node_modules/@next/react-dev-overlay/lib/internal/styles/CssReset.js");
function reducer(state, ev) {
    switch (ev.type) {
        case Bus.TYPE_BUILD_OK: {
            return __assign(__assign({}, state), { buildError: null });
        }
        case Bus.TYPE_BUILD_ERROR: {
            return __assign(__assign({}, state), { buildError: ev.message });
        }
        case Bus.TYPE_REFFRESH: {
            return __assign(__assign({}, state), { buildError: null, errors: [] });
        }
        case Bus.TYPE_UNHANDLED_ERROR:
        case Bus.TYPE_UNHANDLED_REJECTION: {
            return __assign(__assign({}, state), { nextId: state.nextId + 1, errors: __spread(state.errors, [{ id: state.nextId, event: ev }]) });
        }
        default: {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            var _1 = ev;
            return state;
        }
    }
}
var ReactDevOverlay = function ReactDevOverlay(_a) {
    var children = _a.children;
    var _b = __read(React.useReducer(reducer, { nextId: 1, buildError: null, errors: [] }), 2), state = _b[0], dispatch = _b[1];
    React.useEffect(function () {
        Bus.on(dispatch);
        return function () {
            Bus.off(dispatch);
        };
    }, [dispatch]);
    var onComponentError = React.useCallback(function (_error, _componentStack) {
        // TODO: special handling
    }, []);
    var hasBuildError = state.buildError != null;
    var hasRuntimeErrors = Boolean(state.errors.length);
    var isMounted = hasBuildError || hasRuntimeErrors;
    return (React.createElement(React.Fragment, null,
        React.createElement(ErrorBoundary_1.ErrorBoundary, { onError: onComponentError }, children !== null && children !== void 0 ? children : null),
        isMounted ? (React.createElement(ShadowPortal_1.ShadowPortal, null,
            React.createElement(CssReset_1.CssReset, null),
            React.createElement(Base_1.Base, null),
            React.createElement(ComponentStyles_1.ComponentStyles, null),
            hasBuildError ? (React.createElement(BuildError_1.BuildError, { message: state.buildError })) : hasRuntimeErrors ? (React.createElement(Errors_1.Errors, { errors: state.errors })) : undefined)) : undefined));
};
exports["default"] = ReactDevOverlay;
//# sourceMappingURL=ReactDevOverlay.js.map

/***/ }),

/***/ "./node_modules/@next/react-dev-overlay/lib/internal/bus.js":
/*!******************************************************************!*\
  !*** ./node_modules/@next/react-dev-overlay/lib/internal/bus.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.TYPE_BUILD_OK = 'build-ok';
exports.TYPE_BUILD_ERROR = 'build-error';
exports.TYPE_REFFRESH = 'fast-refresh';
exports.TYPE_UNHANDLED_ERROR = 'unhandled-error';
exports.TYPE_UNHANDLED_REJECTION = 'unhandled-rejection';
var handlers = new Set();
var queue = [];
function drain() {
    // Draining should never happen synchronously in case multiple handlers are
    // registered.
    setTimeout(function () {
        var _loop_1 = function () {
            var ev = queue.shift();
            handlers.forEach(function (handler) { return handler(ev); });
        };
        while (
        // Until we are out of events:
        Boolean(queue.length) &&
            // Or, if all handlers removed themselves as a result of handling the
            // event(s)
            Boolean(handlers.size)) {
            _loop_1();
        }
    }, 1);
}
function emit(ev) {
    queue.push(Object.freeze(__assign({}, ev)));
    drain();
}
exports.emit = emit;
function on(fn) {
    if (handlers.has(fn)) {
        return false;
    }
    handlers.add(fn);
    drain();
    return true;
}
exports.on = on;
function off(fn) {
    if (handlers.has(fn)) {
        handlers["delete"](fn);
        return true;
    }
    return false;
}
exports.off = off;
//# sourceMappingURL=bus.js.map

/***/ }),

/***/ "./node_modules/@next/react-dev-overlay/lib/internal/components/CodeFrame/CodeFrame.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@next/react-dev-overlay/lib/internal/components/CodeFrame/CodeFrame.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var anser_1 = __importDefault(__webpack_require__(/*! anser */ "./node_modules/anser/lib/index.js"));
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.module.js"));
var strip_ansi_1 = __importDefault(__webpack_require__(/*! strip-ansi */ "./node_modules/@next/react-dev-overlay/node_modules/strip-ansi/index.js"));
var stack_frame_1 = __webpack_require__(/*! ../../helpers/stack-frame */ "./node_modules/@next/react-dev-overlay/lib/internal/helpers/stack-frame.js");
exports.CodeFrame = function CodeFrame(_a) {
    var stackFrame = _a.stackFrame, codeFrame = _a.codeFrame;
    // Strip leading spaces out of the code frame:
    var formattedFrame = React.useMemo(function () {
        var lines = codeFrame.split(/\r?\n/g);
        var prefixLength = lines
            .map(function (line) { return /^>? +\d+ +\| ( *)/.exec(strip_ansi_1["default"](line)); })
            .filter(Boolean)
            .map(function (v) { return v.pop(); })
            .reduce(function (c, n) { return (isNaN(c) ? n.length : Math.min(c, n.length)); }, NaN);
        if (prefixLength > 1) {
            var p_1 = ' '.repeat(prefixLength);
            return lines
                .map(function (line, a) {
                return ~(a = line.indexOf('|'))
                    ? line.substring(0, a) + line.substring(a).replace(p_1, '')
                    : line;
            })
                .join('\n');
        }
        return lines.join('\n');
    }, [codeFrame]);
    var decoded = React.useMemo(function () {
        return anser_1["default"].ansiToJson(formattedFrame, {
            json: true,
            use_classes: true,
            remove_empty: true
        });
    }, [formattedFrame]);
    var open = React.useCallback(function () {
        var _a;
        var params = new URLSearchParams();
        for (var key in stackFrame) {
            params.append(key, ((_a = stackFrame[key]) !== null && _a !== void 0 ? _a : '').toString());
        }
        self
            .fetch(( false || '') + "/__nextjs_launch-editor?" + params.toString())
            .then(function () { }, function () {
            // TODO: report error
        });
    }, [stackFrame]);
    // TODO: make the caret absolute
    return (React.createElement("div", { "data-nextjs-codeframe": true },
        React.createElement("p", { role: "link", onClick: open, tabIndex: 1, title: "Click to open in your editor" },
            React.createElement("span", null,
                stack_frame_1.getFrameSource(stackFrame),
                " @ ",
                stackFrame.methodName),
            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
                React.createElement("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
                React.createElement("polyline", { points: "15 3 21 3 21 9" }),
                React.createElement("line", { x1: "10", y1: "14", x2: "21", y2: "3" }))),
        React.createElement("hr", null),
        React.createElement("pre", null, decoded.map(function (entry, index) { return (React.createElement("span", { key: "frame-" + index, style: __assign({ color: entry.fg ? "var(--color-" + entry.fg + ")" : undefined }, (entry.decoration === 'bold'
                ? { fontWeight: 800 }
                : entry.decoration === 'italic'
                    ? { fontStyle: 'italic' }
                    : undefined)) }, entry.content)); }))));
};
//# sourceMappingURL=CodeFrame.js.map

/***/ }),

/***/ "./node_modules/@next/react-dev-overlay/lib/internal/components/CodeFrame/index.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@next/react-dev-overlay/lib/internal/components/CodeFrame/index.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var CodeFrame_1 = __webpack_require__(/*! ./CodeFrame */ "./node_modules/@next/react-dev-overlay/lib/internal/components/CodeFrame/CodeFrame.js");
exports.CodeFrame = CodeFrame_1.CodeFrame;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@next/react-dev-overlay/lib/internal/components/CodeFrame/styles.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@next/react-dev-overlay/lib/internal/components/CodeFrame/styles.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var noop_template_1 = __webpack_require__(/*! ../../helpers/noop-template */ "./node_modules/@next/react-dev-overlay/lib/internal/helpers/noop-template.js");
var styles = noop_template_1.noop(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  [data-nextjs-codeframe] {\n    border-radius: var(--size-gap-half);\n    background-color: var(--color-ansi-bg);\n    color: var(--color-ansi-fg);\n  }\n  [data-nextjs-codeframe]::selection,\n  [data-nextjs-codeframe] *::selection {\n    background-color: var(--color-ansi-selection);\n  }\n  [data-nextjs-codeframe] * {\n    color: inherit;\n    background-color: transparent;\n    font-family: var(--font-stack-monospace);\n  }\n\n  [data-nextjs-codeframe] > * {\n    margin: 0;\n    padding: calc(var(--size-gap) + var(--size-gap-half))\n      calc(var(--size-gap-double) + var(--size-gap-half));\n  }\n  [data-nextjs-codeframe] > hr {\n    margin: 0;\n    padding: 0;\n\n    border: none;\n    border-style: solid;\n    border-width: 0;\n    border-bottom-width: 1px;\n    border-color: var(--color-ansi-bright-black);\n  }\n\n  [data-nextjs-codeframe] > p {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    cursor: pointer;\n  }\n  [data-nextjs-codeframe] > p:hover {\n    text-decoration: underline dotted;\n  }\n  [data-nextjs-codeframe] > p > svg {\n    width: auto;\n    height: 1em;\n    margin-left: 8px;\n  }\n"], ["\n  [data-nextjs-codeframe] {\n    border-radius: var(--size-gap-half);\n    background-color: var(--color-ansi-bg);\n    color: var(--color-ansi-fg);\n  }\n  [data-nextjs-codeframe]::selection,\n  [data-nextjs-codeframe] *::selection {\n    background-color: var(--color-ansi-selection);\n  }\n  [data-nextjs-codeframe] * {\n    color: inherit;\n    background-color: transparent;\n    font-family: var(--font-stack-monospace);\n  }\n\n  [data-nextjs-codeframe] > * {\n    margin: 0;\n    padding: calc(var(--size-gap) + var(--size-gap-half))\n      calc(var(--size-gap-double) + var(--size-gap-half));\n  }\n  [data-nextjs-codeframe] > hr {\n    margin: 0;\n    padding: 0;\n\n    border: none;\n    border-style: solid;\n    border-width: 0;\n    border-bottom-width: 1px;\n    border-color: var(--color-ansi-bright-black);\n  }\n\n  [data-nextjs-codeframe] > p {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    cursor: pointer;\n  }\n  [data-nextjs-codeframe] > p:hover {\n    text-decoration: underline dotted;\n  }\n  [data-nextjs-codeframe] > p > svg {\n    width: auto;\n    height: 1em;\n    margin-left: 8px;\n  }\n"])));
exports.styles = styles;
var templateObject_1;
//# sourceMappingURL=styles.js.map

/***/ }),

/***/ "./node_modules/@next/react-dev-overlay/lib/internal/components/Dialog/Dialog.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@next/react-dev-overlay/lib/internal/components/Dialog/Dialog.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.module.js"));
var use_on_click_outside_1 = __webpack_require__(/*! ../../hooks/use-on-click-outside */ "./node_modules/@next/react-dev-overlay/lib/internal/hooks/use-on-click-outside.js");
var Dialog = function Dialog(_a) {
    var children = _a.children, type = _a.type, onClose = _a.onClose, props = __rest(_a, ["children", "type", "onClose"]);
    var _b = __read(React.useState(null), 2), dialog = _b[0], setDialog = _b[1];
    var onDialog = React.useCallback(function (node) {
        setDialog(node);
    }, []);
    use_on_click_outside_1.useOnClickOutside(dialog, onClose);
    // Make HTMLElements with `role=link` accessible to be triggered by the
    // keyboard, i.e. [Enter].
    React.useEffect(function () {
        if (dialog == null) {
            return;
        }
        var root = dialog.getRootNode();
        // Always true, but we do this for TypeScript:
        if (!(root instanceof ShadowRoot)) {
            return;
        }
        var shadowRoot = root;
        function handler(e) {
            var el = shadowRoot.activeElement;
            if (e.key === 'Enter' &&
                el instanceof HTMLElement &&
                el.getAttribute('role') === 'link') {
                e.preventDefault();
                e.stopPropagation();
                el.click();
            }
        }
        shadowRoot.addEventListener('keydown', handler);
        return function () {
            return shadowRoot.removeEventListener('keydown', handler);
        };
    }, [dialog]);
    return (React.createElement("div", { ref: onDialog, "data-nextjs-dialog": true, tabIndex: -1, role: "dialog", "aria-labelledby": props['aria-labelledby'], "aria-describedby": props['aria-describedby'], "aria-modal": "true" },
        React.createElement("div", { "data-nextjs-dialog-banner": true, className: "banner-" + type }),
        children));
};
exports.Dialog = Dialog;
//# sourceMappingURL=Dialog.js.map

/***/ }),

/***/ "./node_modules/@next/react-dev-overlay/lib/internal/components/Dialog/DialogBody.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@next/react-dev-overlay/lib/internal/components/Dialog/DialogBody.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.module.js"));
var DialogBody = function DialogBody(_a) {
    var children = _a.children, className = _a.className;
    return (React.createElement("div", { "data-nextjs-dialog-body": true, className: className }, children));
};
exports.DialogBody = DialogBody;
//# sourceMappingURL=DialogBody.js.map

/***/ }),

/***/ "./node_modules/@next/react-dev-overlay/lib/internal/components/Dialog/DialogContent.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@next/react-dev-overlay/lib/internal/components/Dialog/DialogContent.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.module.js"));
var DialogContent = function DialogContent(_a) {
    var children = _a.children, className = _a.className;
    return (React.createElement("div", { "data-nextjs-dialog-content": true, className: className }, children));
};
exports.DialogContent = DialogContent;
//# sourceMappingURL=DialogContent.js.map

/***/ }),

/***/ "./node_modules/@next/react-dev-overlay/lib/internal/components/Dialog/DialogHeader.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@next/react-dev-overlay/lib/internal/components/Dialog/DialogHeader.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.module.js"));
var DialogHeader = function DialogHeader(_a) {
    var children = _a.children, className = _a.className;
    return (React.createElement("div", { "data-nextjs-dialog-header": true, className: className }, children));
};
exports.DialogHeader = DialogHeader;
//# sourceMappingURL=DialogHeader.js.map

/***/ }),

/***/ "./node_modules/@next/react-dev-overlay/lib/internal/components/Dialog/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@next/react-dev-overlay/lib/internal/components/Dialog/index.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Dialog_1 = __webpack_require__(/*! ./Dialog */ "./node_modules/@next/react-dev-overlay/lib/internal/components/Dialog/Dialog.js");
exports.Dialog = Dialog_1.Dialog;
var DialogBody_1 = __webpack_require__(/*! ./DialogBody */ "./node_modules/@next/react-dev-overlay/lib/internal/components/Dialog/DialogBody.js");
exports.DialogBody = DialogBody_1.DialogBody;
var DialogContent_1 = __webpack_require__(/*! ./DialogContent */ "./node_modules/@next/react-dev-overlay/lib/internal/components/Dialog/DialogContent.js");
exports.DialogContent = DialogContent_1.DialogContent;
var DialogHeader_1 = __webpack_require__(/*! ./DialogHeader */ "./node_modules/@next/react-dev-overlay/lib/internal/components/Dialog/DialogHeader.js");
exports.DialogHeader = DialogHeader_1.DialogHeader;
var styles_1 = __webpack_require__(/*! ./styles */ "./node_modules/@next/react-dev-overlay/lib/internal/components/Dialog/styles.js");
exports.styles = styles_1.styles;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@next/react-dev-overlay/lib/internal/components/Dialog/styles.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@next/react-dev-overlay/lib/internal/components/Dialog/styles.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var noop_template_1 = __webpack_require__(/*! ../../helpers/noop-template */ "./node_modules/@next/react-dev-overlay/lib/internal/helpers/noop-template.js");
var styles = noop_template_1.noop(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  [data-nextjs-dialog] {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    margin-right: auto;\n    margin-left: auto;\n    outline: none;\n    background: white;\n    border-radius: var(--size-gap);\n    box-shadow: 0 var(--size-gap-half) var(--size-gap-double)\n      rgba(0, 0, 0, 0.25);\n    max-height: calc(100% - 56px);\n    overflow-y: hidden;\n  }\n\n  @media (max-height: 812px) {\n    [data-nextjs-dialog-overlay] {\n      max-height: calc(100% - 15px);\n    }\n  }\n\n  @media (min-width: 576px) {\n    [data-nextjs-dialog] {\n      max-width: 540px;\n      box-shadow: 0 var(--size-gap) var(--size-gap-quad) rgba(0, 0, 0, 0.25);\n    }\n  }\n\n  @media (min-width: 768px) {\n    [data-nextjs-dialog] {\n      max-width: 720px;\n    }\n  }\n\n  @media (min-width: 992px) {\n    [data-nextjs-dialog] {\n      max-width: 960px;\n    }\n  }\n\n  [data-nextjs-dialog-banner] {\n    position: relative;\n  }\n  [data-nextjs-dialog-banner].banner-warning {\n    border-color: var(--color-ansi-yellow);\n  }\n  [data-nextjs-dialog-banner].banner-error {\n    border-color: var(--color-ansi-red);\n  }\n\n  [data-nextjs-dialog-banner]::after {\n    z-index: 2;\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 100%;\n    /* banner width: */\n    border-top-width: var(--size-gap-half);\n    border-bottom-width: 0;\n    border-top-style: solid;\n    border-bottom-style: solid;\n    border-top-color: inherit;\n    border-bottom-color: transparent;\n  }\n\n  [data-nextjs-dialog-content] {\n    overflow-y: auto;\n    border: none;\n    margin: 0;\n    /* calc(padding + banner width offset) */\n    padding: calc(var(--size-gap-double) + var(--size-gap-half))\n      var(--size-gap-double);\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  [data-nextjs-dialog-content] > [data-nextjs-dialog-header] {\n    flex-shrink: 0;\n    margin-bottom: var(--size-gap-double);\n  }\n  [data-nextjs-dialog-content] > [data-nextjs-dialog-body] {\n    position: relative;\n    flex: 1 1 auto;\n  }\n"], ["\n  [data-nextjs-dialog] {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    margin-right: auto;\n    margin-left: auto;\n    outline: none;\n    background: white;\n    border-radius: var(--size-gap);\n    box-shadow: 0 var(--size-gap-half) var(--size-gap-double)\n      rgba(0, 0, 0, 0.25);\n    max-height: calc(100% - 56px);\n    overflow-y: hidden;\n  }\n\n  @media (max-height: 812px) {\n    [data-nextjs-dialog-overlay] {\n      max-height: calc(100% - 15px);\n    }\n  }\n\n  @media (min-width: 576px) {\n    [data-nextjs-dialog] {\n      max-width: 540px;\n      box-shadow: 0 var(--size-gap) var(--size-gap-quad) rgba(0, 0, 0, 0.25);\n    }\n  }\n\n  @media (min-width: 768px) {\n    [data-nextjs-dialog] {\n      max-width: 720px;\n    }\n  }\n\n  @media (min-width: 992px) {\n    [data-nextjs-dialog] {\n      max-width: 960px;\n    }\n  }\n\n  [data-nextjs-dialog-banner] {\n    position: relative;\n  }\n  [data-nextjs-dialog-banner].banner-warning {\n    border-color: var(--color-ansi-yellow);\n  }\n  [data-nextjs-dialog-banner].banner-error {\n    border-color: var(--color-ansi-red);\n  }\n\n  [data-nextjs-dialog-banner]::after {\n    z-index: 2;\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 100%;\n    /* banner width: */\n    border-top-width: var(--size-gap-half);\n    border-bottom-width: 0;\n    border-top-style: solid;\n    border-bottom-style: solid;\n    border-top-color: inherit;\n    border-bottom-color: transparent;\n  }\n\n  [data-nextjs-dialog-content] {\n    overflow-y: auto;\n    border: none;\n    margin: 0;\n    /* calc(padding + banner width offset) */\n    padding: calc(var(--size-gap-double) + var(--size-gap-half))\n      var(--size-gap-double);\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  [data-nextjs-dialog-content] > [data-nextjs-dialog-header] {\n    flex-shrink: 0;\n    margin-bottom: var(--size-gap-double);\n  }\n  [data-nextjs-dialog-content] > [data-nextjs-dialog-body] {\n    position: relative;\n    flex: 1 1 auto;\n  }\n"])));
exports.styles = styles;
var templateObject_1;
//# sourceMappingURL=styles.js.map

/***/ }),

/***/ "./node_modules/@next/react-dev-overlay/lib/internal/components/LeftRightDialogHeader/LeftRightDialogHeader.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@next/react-dev-overlay/lib/internal/components/LeftRightDialogHeader/LeftRightDialogHeader.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.module.js"));
var LeftRightDialogHeader = function LeftRightDialogHeader(_a) {
    var children = _a.children, className = _a.className, previous = _a.previous, next = _a.next, close = _a.close;
    var buttonLeft = React.useRef(null);
    var buttonRight = React.useRef(null);
    var buttonClose = React.useRef(null);
    var _b = __read(React.useState(null), 2), nav = _b[0], setNav = _b[1];
    var onNav = React.useCallback(function (el) {
        setNav(el);
    }, []);
    React.useEffect(function () {
        if (nav == null) {
            return;
        }
        var root = nav.getRootNode();
        var d = self.document;
        function handler(e) {
            if (e.key === 'ArrowLeft') {
                e.stopPropagation();
                if (buttonLeft.current) {
                    buttonLeft.current.focus();
                }
                previous && previous();
            }
            else if (e.key === 'ArrowRight') {
                e.stopPropagation();
                if (buttonRight.current) {
                    buttonRight.current.focus();
                }
                next && next();
            }
            else if (e.key === 'Escape') {
                e.stopPropagation();
                if (root instanceof ShadowRoot) {
                    var a = root.activeElement;
                    if (a && a !== buttonClose.current && a instanceof HTMLElement) {
                        a.blur();
                        return;
                    }
                }
                if (close) {
                    close();
                }
            }
        }
        root.addEventListener('keydown', handler);
        if (root !== d) {
            d.addEventListener('keydown', handler);
        }
        return function () {
            root.removeEventListener('keydown', handler);
            if (root !== d) {
                d.removeEventListener('keydown', handler);
            }
        };
    }, [close, nav, next, previous]);
    // Unlock focus for browsers like Firefox, that break all user focus if the
    // currently focused item becomes disabled.
    React.useEffect(function () {
        if (nav == null) {
            return;
        }
        var root = nav.getRootNode();
        // Always true, but we do this for TypeScript:
        if (root instanceof ShadowRoot) {
            var a = root.activeElement;
            if (previous == null) {
                if (buttonLeft.current && a === buttonLeft.current) {
                    buttonLeft.current.blur();
                }
            }
            else if (next == null) {
                if (buttonRight.current && a === buttonRight.current) {
                    buttonRight.current.blur();
                }
            }
        }
    }, [nav, next, previous]);
    return (React.createElement("div", { "data-nextjs-dialog-left-right": true, className: className },
        React.createElement("nav", { ref: onNav },
            React.createElement("button", { ref: buttonLeft, type: "button", disabled: previous == null ? true : undefined, "aria-disabled": previous == null ? true : undefined, onClick: previous !== null && previous !== void 0 ? previous : undefined },
                React.createElement("svg", { viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    React.createElement("path", { d: "M6.99996 1.16666L1.16663 6.99999L6.99996 12.8333M12.8333 6.99999H1.99996H12.8333Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }))),
            React.createElement("button", { ref: buttonRight, type: "button", disabled: next == null ? true : undefined, "aria-disabled": next == null ? true : undefined, onClick: next !== null && next !== void 0 ? next : undefined },
                React.createElement("svg", { viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    React.createElement("path", { d: "M6.99996 1.16666L12.8333 6.99999L6.99996 12.8333M1.16663 6.99999H12H1.16663Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }))),
            "\u00A0",
            children),
        close ? (React.createElement("button", { ref: buttonClose, type: "button", onClick: close, "aria-label": "Close" },
            React.createElement("span", { "aria-hidden": "true" },
                React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    React.createElement("path", { d: "M18 6L6 18", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
                    React.createElement("path", { d: "M6 6L18 18", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }))))) : null));
};
exports.LeftRightDialogHeader = LeftRightDialogHeader;
//# sourceMappingURL=LeftRightDialogHeader.js.map

/***/ }),

/***/ "./node_modules/@next/react-dev-overlay/lib/internal/components/LeftRightDialogHeader/index.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@next/react-dev-overlay/lib/internal/components/LeftRightDialogHeader/index.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var LeftRightDialogHeader_1 = __webpack_require__(/*! ./LeftRightDialogHeader */ "./node_modules/@next/react-dev-overlay/lib/internal/components/LeftRightDialogHeader/LeftRightDialogHeader.js");
exports.LeftRightDialogHeader = LeftRightDialogHeader_1.LeftRightDialogHeader;
var styles_1 = __webpack_require__(/*! ./styles */ "./node_modules/@next/react-dev-overlay/lib/internal/components/LeftRightDialogHeader/styles.js");
exports.styles = styles_1.styles;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@next/react-dev-overlay/lib/internal/components/LeftRightDialogHeader/styles.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@next/react-dev-overlay/lib/internal/components/LeftRightDialogHeader/styles.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var noop_template_1 = __webpack_require__(/*! ../../helpers/noop-template */ "./node_modules/@next/react-dev-overlay/lib/internal/helpers/noop-template.js");
var styles = noop_template_1.noop(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  [data-nextjs-dialog-left-right] {\n    display: flex;\n    flex-direction: row;\n    align-content: center;\n    align-items: center;\n    justify-content: space-between;\n  }\n  [data-nextjs-dialog-left-right] > nav > button {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n\n    width: calc(var(--size-gap-double) + var(--size-gap));\n    height: calc(var(--size-gap-double) + var(--size-gap));\n    font-size: 0;\n    border: none;\n    background-color: rgba(255, 85, 85, 0.1);\n    color: var(--color-ansi-red);\n    cursor: pointer;\n    transition: background-color 0.25s ease;\n  }\n  [data-nextjs-dialog-left-right] > nav > button > svg {\n    width: auto;\n    height: calc(var(--size-gap) + var(--size-gap-half));\n  }\n  [data-nextjs-dialog-left-right] > nav > button:hover {\n    background-color: rgba(255, 85, 85, 0.2);\n  }\n  [data-nextjs-dialog-left-right] > nav > button:disabled {\n    background-color: rgba(255, 85, 85, 0.1);\n    color: rgba(255, 85, 85, 0.4);\n    cursor: not-allowed;\n  }\n\n  [data-nextjs-dialog-left-right] > nav > button:first-of-type {\n    border-radius: var(--size-gap-half) 0 0 var(--size-gap-half);\n    margin-right: 1px;\n  }\n  [data-nextjs-dialog-left-right] > nav > button:last-of-type {\n    border-radius: 0 var(--size-gap-half) var(--size-gap-half) 0;\n  }\n\n  [data-nextjs-dialog-left-right] > button:last-of-type {\n    border: 0;\n    padding: 0;\n\n    background-color: transparent;\n    appearance: none;\n\n    opacity: 0.4;\n    transition: opacity 0.25s ease;\n  }\n  [data-nextjs-dialog-left-right] > button:last-of-type:hover {\n    opacity: 0.7;\n  }\n"], ["\n  [data-nextjs-dialog-left-right] {\n    display: flex;\n    flex-direction: row;\n    align-content: center;\n    align-items: center;\n    justify-content: space-between;\n  }\n  [data-nextjs-dialog-left-right] > nav > button {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n\n    width: calc(var(--size-gap-double) + var(--size-gap));\n    height: calc(var(--size-gap-double) + var(--size-gap));\n    font-size: 0;\n    border: none;\n    background-color: rgba(255, 85, 85, 0.1);\n    color: var(--color-ansi-red);\n    cursor: pointer;\n    transition: background-color 0.25s ease;\n  }\n  [data-nextjs-dialog-left-right] > nav > button > svg {\n    width: auto;\n    height: calc(var(--size-gap) + var(--size-gap-half));\n  }\n  [data-nextjs-dialog-left-right] > nav > button:hover {\n    background-color: rgba(255, 85, 85, 0.2);\n  }\n  [data-nextjs-dialog-left-right] > nav > button:disabled {\n    background-color: rgba(255, 85, 85, 0.1);\n    color: rgba(255, 85, 85, 0.4);\n    cursor: not-allowed;\n  }\n\n  [data-nextjs-dialog-left-right] > nav > button:first-of-type {\n    border-radius: var(--size-gap-half) 0 0 var(--size-gap-half);\n    margin-right: 1px;\n  }\n  [data-nextjs-dialog-left-right] > nav > button:last-of-type {\n    border-radius: 0 var(--size-gap-half) var(--size-gap-half) 0;\n  }\n\n  [data-nextjs-dialog-left-right] > button:last-of-type {\n    border: 0;\n    padding: 0;\n\n    background-color: transparent;\n    appearance: none;\n\n    opacity: 0.4;\n    transition: opacity 0.25s ease;\n  }\n  [data-nextjs-dialog-left-right] > button:last-of-type:hover {\n    opacity: 0.7;\n  }\n"])));
exports.styles = styles;
var templateObject_1;
//# sourceMappingURL=styles.js.map

/***/ }),

/***/ "./node_modules/@next/react-dev-overlay/lib/internal/components/Overlay/Overlay.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@next/react-dev-overlay/lib/internal/components/Overlay/Overlay.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
// @ts-ignore
var maintain__tab_focus_1 = __importDefault(__webpack_require__(/*! ./maintain--tab-focus */ "./node_modules/@next/react-dev-overlay/lib/internal/components/Overlay/maintain--tab-focus.js"));
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.module.js"));
var body_locker_1 = __webpack_require__(/*! ./body-locker */ "./node_modules/@next/react-dev-overlay/lib/internal/components/Overlay/body-locker.js");
var Overlay = function Overlay(_a) {
    var className = _a.className, children = _a.children, fixed = _a.fixed;
    React.useEffect(function () {
        body_locker_1.lock();
        return function () {
            body_locker_1.unlock();
        };
    }, []);
    var _b = __read(React.useState(null), 2), overlay = _b[0], setOverlay = _b[1];
    var onOverlay = React.useCallback(function (el) {
        setOverlay(el);
    }, []);
    React.useEffect(function () {
        if (overlay == null) {
            return;
        }
        var handle2 = maintain__tab_focus_1["default"]({ context: overlay });
        return function () {
            handle2.disengage();
        };
    }, [overlay]);
    return (React.createElement("div", { "data-nextjs-dialog-overlay": true, className: className, ref: onOverlay },
        React.createElement("div", { "data-nextjs-dialog-backdrop": true, "data-nextjs-dialog-backdrop-fixed": fixed ? true : undefined }),
        children));
};
exports.Overlay = Overlay;
//# sourceMappingURL=Overlay.js.map

/***/ }),

/***/ "./node_modules/@next/react-dev-overlay/lib/internal/components/Overlay/body-locker.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@next/react-dev-overlay/lib/internal/components/Overlay/body-locker.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var previousBodyPaddingRight;
var previousBodyOverflowSetting;
var activeLocks = 0;
function lock() {
    setTimeout(function () {
        if (activeLocks++ > 0) {
            return;
        }
        var scrollBarGap = window.innerWidth - document.documentElement.clientWidth;
        if (scrollBarGap > 0) {
            previousBodyPaddingRight = document.body.style.paddingRight;
            document.body.style.paddingRight = scrollBarGap + "px";
        }
        previousBodyOverflowSetting = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
    });
}
exports.lock = lock;
function unlock() {
    setTimeout(function () {
        if (activeLocks === 0 || --activeLocks !== 0) {
            return;
        }
        if (previousBodyPaddingRight !== undefined) {
            document.body.style.paddingRight = previousBodyPaddingRight;
            previousBodyPaddingRight = undefined;
        }
        if (previousBodyOverflowSetting !== undefined) {
            document.body.style.overflow = previousBodyOverflowSetting;
            previousBodyOverflowSetting = undefined;
        }
    });
}
exports.unlock = unlock;
//# sourceMappingURL=body-locker.js.map

/***/ }),

/***/ "./node_modules/@next/react-dev-overlay/lib/internal/components/Overlay/index.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@next/react-dev-overlay/lib/internal/components/Overlay/index.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Overlay_1 = __webpack_require__(/*! ./Overlay */ "./node_modules/@next/react-dev-overlay/lib/internal/components/Overlay/Overlay.js");
exports.Overlay = Overlay_1.Overlay;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@next/react-dev-overlay/lib/internal/components/Overlay/maintain--tab-focus.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@next/react-dev-overlay/lib/internal/components/Overlay/maintain--tab-focus.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable */
// @ts-nocheck
// Copied from https://github.com/medialize/ally.js
// License: MIT
// Copyright (c) 2015 Rodney Rehm
//
// Entrypoint: ally.js/maintain/tab-focus
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var platform_1 = __importDefault(__webpack_require__(/*! platform */ "./node_modules/platform/platform.js"));
var css_escape_1 = __importDefault(__webpack_require__(/*! css.escape */ "./node_modules/css.escape/css.escape.js"));
// input may be undefined, selector-tring, Node, NodeList, HTMLCollection, array of Nodes
// yes, to some extent this is a bad replica of jQuery's constructor function
function nodeArray(input) {
    if (!input) {
        return [];
    }
    if (Array.isArray(input)) {
        return input;
    }
    // instanceof Node - does not work with iframes
    if (input.nodeType !== undefined) {
        return [input];
    }
    if (typeof input === 'string') {
        input = document.querySelectorAll(input);
    }
    if (input.length !== undefined) {
        return [].slice.call(input, 0);
    }
    throw new TypeError('unexpected input ' + String(input));
}
function contextToElement(_ref) {
    var context = _ref.context, _ref$label = _ref.label, label = _ref$label === undefined ? 'context-to-element' : _ref$label, resolveDocument = _ref.resolveDocument, defaultToDocument = _ref.defaultToDocument;
    var element = nodeArray(context)[0];
    if (resolveDocument && element && element.nodeType === Node.DOCUMENT_NODE) {
        element = element.documentElement;
    }
    if (!element && defaultToDocument) {
        return document.documentElement;
    }
    if (!element) {
        throw new TypeError(label + ' requires valid options.context');
    }
    if (element.nodeType !== Node.ELEMENT_NODE &&
        element.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
        throw new TypeError(label + ' requires options.context to be an Element');
    }
    return element;
}
function getShadowHost() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context;
    var element = contextToElement({
        label: 'get/shadow-host',
        context: context
    });
    // walk up to the root
    var container = null;
    while (element) {
        container = element;
        element = element.parentNode;
    }
    // https://developer.mozilla.org/en-US/docs/Web/API/Node.nodeType
    // NOTE: Firefox 34 does not expose ShadowRoot.host (but 37 does)
    if (container.nodeType === container.DOCUMENT_FRAGMENT_NODE &&
        container.host) {
        // the root is attached to a fragment node that has a host
        return container.host;
    }
    return null;
}
function getDocument(node) {
    if (!node) {
        return document;
    }
    if (node.nodeType === Node.DOCUMENT_NODE) {
        return node;
    }
    return node.ownerDocument || document;
}
function isActiveElement(context) {
    var element = contextToElement({
        label: 'is/active-element',
        resolveDocument: true,
        context: context
    });
    var _document = getDocument(element);
    if (_document.activeElement === element) {
        return true;
    }
    var shadowHost = getShadowHost({ context: element });
    if (shadowHost && shadowHost.shadowRoot.activeElement === element) {
        return true;
    }
    return false;
}
// [elem, elem.parent, elem.parent.parent, …, html]
// will not contain the shadowRoot (DOCUMENT_FRAGMENT_NODE) and shadowHost
function getParents() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context;
    var list = [];
    var element = contextToElement({
        label: 'get/parents',
        context: context
    });
    while (element) {
        list.push(element);
        // IE does know support parentElement on SVGElement
        element = element.parentNode;
        if (element && element.nodeType !== Node.ELEMENT_NODE) {
            element = null;
        }
    }
    return list;
}
// Element.prototype.matches may be available at a different name
// https://developer.mozilla.org/en/docs/Web/API/Element/matches
var names = [
    'matches',
    'webkitMatchesSelector',
    'mozMatchesSelector',
    'msMatchesSelector',
];
var name = null;
function findMethodName(element) {
    names.some(function (_name) {
        if (!element[_name]) {
            return false;
        }
        name = _name;
        return true;
    });
}
function elementMatches(element, selector) {
    if (!name) {
        findMethodName(element);
    }
    return element[name](selector);
}
// deep clone of original platform
var platform = JSON.parse(JSON.stringify(platform_1["default"]));
// operating system
var os = platform.os.family || '';
var ANDROID = os === 'Android';
var WINDOWS = os.slice(0, 7) === 'Windows';
var OSX = os === 'OS X';
var IOS = os === 'iOS';
// layout
var BLINK = platform.layout === 'Blink';
var GECKO = platform.layout === 'Gecko';
var TRIDENT = platform.layout === 'Trident';
var EDGE = platform.layout === 'EdgeHTML';
var WEBKIT = platform.layout === 'WebKit';
// browser version (not layout engine version!)
var version = parseFloat(platform.version);
var majorVersion = Math.floor(version);
platform.majorVersion = majorVersion;
platform.is = {
    // operating system
    ANDROID: ANDROID,
    WINDOWS: WINDOWS,
    OSX: OSX,
    IOS: IOS,
    // layout
    BLINK: BLINK,
    GECKO: GECKO,
    TRIDENT: TRIDENT,
    EDGE: EDGE,
    WEBKIT: WEBKIT,
    // INTERNET EXPLORERS
    IE9: TRIDENT && majorVersion === 9,
    IE10: TRIDENT && majorVersion === 10,
    IE11: TRIDENT && majorVersion === 11
};
function before() {
    var data = {
        // remember what had focus to restore after test
        activeElement: document.activeElement,
        // remember scroll positions to restore after test
        windowScrollTop: window.scrollTop,
        windowScrollLeft: window.scrollLeft,
        bodyScrollTop: document.body.scrollTop,
        bodyScrollLeft: document.body.scrollLeft
    };
    // wrap tests in an element hidden from screen readers to prevent them
    // from announcing focus, which can be quite irritating to the user
    var iframe = document.createElement('iframe');
    iframe.setAttribute('style', 'position:absolute; position:fixed; top:0; left:-2px; width:1px; height:1px; overflow:hidden;');
    iframe.setAttribute('aria-live', 'off');
    iframe.setAttribute('aria-busy', 'true');
    iframe.setAttribute('aria-hidden', 'true');
    document.body.appendChild(iframe);
    var _window = iframe.contentWindow;
    var _document = _window.document;
    _document.open();
    _document.close();
    var wrapper = _document.createElement('div');
    _document.body.appendChild(wrapper);
    data.iframe = iframe;
    data.wrapper = wrapper;
    data.window = _window;
    data.document = _document;
    return data;
}
// options.element:
//  {string} element name
//  {function} callback(wrapper, document) to generate an element
// options.mutate: (optional)
//  {function} callback(element, wrapper, document) to manipulate element prior to focus-test.
//             Can return DOMElement to define focus target (default: element)
// options.validate: (optional)
//  {function} callback(element, focusTarget, document) to manipulate test-result
function test(data, options) {
    // make sure we operate on a clean slate
    data.wrapper.innerHTML = '';
    // create dummy element to test focusability of
    var element = typeof options.element === 'string'
        ? data.document.createElement(options.element)
        : options.element(data.wrapper, data.document);
    // allow callback to further specify dummy element
    // and optionally define element to focus
    var focus = options.mutate && options.mutate(element, data.wrapper, data.document);
    if (!focus && focus !== false) {
        focus = element;
    }
    // element needs to be part of the DOM to be focusable
    !element.parentNode && data.wrapper.appendChild(element);
    // test if the element with invalid tabindex can be focused
    focus && focus.focus && focus.focus();
    // validate test's result
    return options.validate
        ? options.validate(element, focus, data.document)
        : data.document.activeElement === focus;
}
function after(data) {
    // restore focus to what it was before test and cleanup
    if (data.activeElement === document.body) {
        document.activeElement &&
            document.activeElement.blur &&
            document.activeElement.blur();
        if (platform.is.IE10) {
            // IE10 does not redirect focus to <body> when the activeElement is removed
            document.body.focus();
        }
    }
    else {
        data.activeElement && data.activeElement.focus && data.activeElement.focus();
    }
    document.body.removeChild(data.iframe);
    // restore scroll position
    window.scrollTop = data.windowScrollTop;
    window.scrollLeft = data.windowScrollLeft;
    document.body.scrollTop = data.bodyScrollTop;
    document.body.scrollLeft = data.bodyScrollLeft;
}
function detectFocus(tests) {
    var data = before();
    var results = {};
    Object.keys(tests).map(function (key) {
        results[key] = test(data, tests[key]);
    });
    after(data);
    return results;
}
// this file is overwritten by `npm run build:pre`
var version$1 = '1.4.1';
/*
    Facility to cache test results in localStorage.

    USAGE:
      cache.get('key');
      cache.set('key', 'value');
 */
function readLocalStorage(key) {
    // allow reading from storage to retrieve previous support results
    // even while the document does not have focus
    var data = void 0;
    try {
        data = window.localStorage && window.localStorage.getItem(key);
        data = data ? JSON.parse(data) : {};
    }
    catch (e) {
        data = {};
    }
    return data;
}
function writeLocalStorage(key, value) {
    if (!document.hasFocus()) {
        // if the document does not have focus when tests are executed, focus() may
        // not be handled properly and events may not be dispatched immediately.
        // This can happen when a document is reloaded while Developer Tools have focus.
        try {
            window.localStorage && window.localStorage.removeItem(key);
        }
        catch (e) {
            // ignore
        }
        return;
    }
    try {
        window.localStorage &&
            window.localStorage.setItem(key, JSON.stringify(value));
    }
    catch (e) {
        // ignore
    }
}
var userAgent = (typeof window !== 'undefined' && window.navigator.userAgent) || '';
var cacheKey = 'ally-supports-cache';
var cache = readLocalStorage(cacheKey);
// update the cache if ally or the user agent changed (newer version, etc)
if (cache.userAgent !== userAgent || cache.version !== version$1) {
    cache = {};
}
cache.userAgent = userAgent;
cache.version = version$1;
var cache$1 = {
    get: function get() {
        return cache;
    },
    set: function set(values) {
        Object.keys(values).forEach(function (key) {
            cache[key] = values[key];
        });
        cache.time = new Date().toISOString();
        writeLocalStorage(cacheKey, cache);
    }
};
function cssShadowPiercingDeepCombinator() {
    var combinator = void 0;
    // see https://dev.w3.org/csswg/css-scoping-1/#deep-combinator
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1117572
    // https://code.google.com/p/chromium/issues/detail?id=446051
    try {
        document.querySelector('html >>> :first-child');
        combinator = '>>>';
    }
    catch (noArrowArrowArrow) {
        try {
            // old syntax supported at least up to Chrome 41
            // https://code.google.com/p/chromium/issues/detail?id=446051
            document.querySelector('html /deep/ :first-child');
            combinator = '/deep/';
        }
        catch (noDeep) {
            combinator = '';
        }
    }
    return combinator;
}
var gif = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
var focusAreaImgTabindex = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML =
            '<map name="image-map-tabindex-test">' +
                '<area shape="rect" coords="63,19,144,45"></map>' +
                '<img usemap="#image-map-tabindex-test" tabindex="-1" alt="" src="' +
                gif +
                '">';
        return element.querySelector('area');
    }
};
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
var focusAreaTabindex = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML =
            '<map name="image-map-tabindex-test">' +
                '<area href="#void" tabindex="-1" shape="rect" coords="63,19,144,45"></map>' +
                '<img usemap="#image-map-tabindex-test" alt="" src="' +
                gif +
                '">';
        return false;
    },
    validate: function validate(element, focusTarget, _document) {
        if (platform.is.GECKO) {
            // fixes https://github.com/medialize/ally.js/issues/35
            // Firefox loads the DataURI asynchronously, causing a false-negative
            return true;
        }
        var focus = element.querySelector('area');
        focus.focus();
        return _document.activeElement === focus;
    }
};
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
var focusAreaWithoutHref = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML =
            '<map name="image-map-area-href-test">' +
                '<area shape="rect" coords="63,19,144,45"></map>' +
                '<img usemap="#image-map-area-href-test" alt="" src="' +
                gif +
                '">';
        return element.querySelector('area');
    },
    validate: function validate(element, focusTarget, _document) {
        if (platform.is.GECKO) {
            // fixes https://github.com/medialize/ally.js/issues/35
            // Firefox loads the DataURI asynchronously, causing a false-negative
            return true;
        }
        return _document.activeElement === focusTarget;
    }
};
var focusAudioWithoutControls = {
    name: 'can-focus-audio-without-controls',
    element: 'audio',
    mutate: function mutate(element) {
        try {
            // invalid media file can trigger warning in console, data-uri to prevent HTTP request
            element.setAttribute('src', gif);
        }
        catch (e) {
            // IE9 may throw "Error: Not implemented"
        }
    }
};
var invalidGif = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ';
// NOTE: https://github.com/medialize/ally.js/issues/35
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
var focusBrokenImageMap = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML =
            '<map name="broken-image-map-test"><area href="#void" shape="rect" coords="63,19,144,45"></map>' +
                '<img usemap="#broken-image-map-test" alt="" src="' +
                invalidGif +
                '">';
        return element.querySelector('area');
    }
};
// Children of focusable elements with display:flex are focusable in IE10-11
var focusChildrenOfFocusableFlexbox = {
    element: 'div',
    mutate: function mutate(element) {
        element.setAttribute('tabindex', '-1');
        element.setAttribute('style', 'display: -webkit-flex; display: -ms-flexbox; display: flex;');
        element.innerHTML = '<span style="display: block;">hello</span>';
        return element.querySelector('span');
    }
};
// fieldset[tabindex=0][disabled] should not be focusable, but Blink and WebKit disagree
// @specification https://www.w3.org/TR/html5/disabled-elements.html#concept-element-disabled
// @browser-issue Chromium https://crbug.com/453847
// @browser-issue WebKit https://bugs.webkit.org/show_bug.cgi?id=141086
var focusFieldsetDisabled = {
    element: 'fieldset',
    mutate: function mutate(element) {
        element.setAttribute('tabindex', 0);
        element.setAttribute('disabled', 'disabled');
    }
};
var focusFieldset = {
    element: 'fieldset',
    mutate: function mutate(element) {
        element.innerHTML = '<legend>legend</legend><p>content</p>';
    }
};
// elements with display:flex are focusable in IE10-11
var focusFlexboxContainer = {
    element: 'span',
    mutate: function mutate(element) {
        element.setAttribute('style', 'display: -webkit-flex; display: -ms-flexbox; display: flex;');
        element.innerHTML = '<span style="display: block;">hello</span>';
    }
};
// form[tabindex=0][disabled] should be focusable as the
// specification doesn't know the disabled attribute on the form element
// @specification https://www.w3.org/TR/html5/forms.html#the-form-element
var focusFormDisabled = {
    element: 'form',
    mutate: function mutate(element) {
        element.setAttribute('tabindex', 0);
        element.setAttribute('disabled', 'disabled');
    }
};
// NOTE: https://github.com/medialize/ally.js/issues/35
// fixes https://github.com/medialize/ally.js/issues/20
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-ismap
var focusImgIsmap = {
    element: 'a',
    mutate: function mutate(element) {
        element.href = '#void';
        element.innerHTML = '<img ismap src="' + gif + '" alt="">';
        return element.querySelector('img');
    }
};
// NOTE: https://github.com/medialize/ally.js/issues/35
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
var focusImgUsemapTabindex = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML =
            '<map name="image-map-tabindex-test"><area href="#void" shape="rect" coords="63,19,144,45"></map>' +
                '<img usemap="#image-map-tabindex-test" tabindex="-1" alt="" ' +
                'src="' +
                gif +
                '">';
        return element.querySelector('img');
    }
};
var focusInHiddenIframe = {
    element: function element(wrapper, _document) {
        var iframe = _document.createElement('iframe');
        // iframe must be part of the DOM before accessing the contentWindow is possible
        wrapper.appendChild(iframe);
        // create the iframe's default document (<html><head></head><body></body></html>)
        var iframeDocument = iframe.contentWindow.document;
        iframeDocument.open();
        iframeDocument.close();
        return iframe;
    },
    mutate: function mutate(iframe) {
        iframe.style.visibility = 'hidden';
        var iframeDocument = iframe.contentWindow.document;
        var input = iframeDocument.createElement('input');
        iframeDocument.body.appendChild(input);
        return input;
    },
    validate: function validate(iframe) {
        var iframeDocument = iframe.contentWindow.document;
        var focus = iframeDocument.querySelector('input');
        return iframeDocument.activeElement === focus;
    }
};
var result = !platform.is.WEBKIT;
function focusInZeroDimensionObject() {
    return result;
}
// Firefox allows *any* value and treats invalid values like tabindex="-1"
// @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
var focusInvalidTabindex = {
    element: 'div',
    mutate: function mutate(element) {
        element.setAttribute('tabindex', 'invalid-value');
    }
};
var focusLabelTabindex = {
    element: 'label',
    mutate: function mutate(element) {
        element.setAttribute('tabindex', '-1');
    },
    validate: function validate(element, focusTarget, _document) {
        // force layout in Chrome 49, otherwise the element won't be focusable
        /* eslint-disable no-unused-vars */
        var variableToPreventDeadCodeElimination = element.offsetHeight;
        /* eslint-enable no-unused-vars */
        element.focus();
        return _document.activeElement === element;
    }
};
var svg = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtb' +
    'G5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0ic3ZnIj48dGV4dCB4PSIxMCIgeT0iMjAiIGlkPSJ' +
    'zdmctbGluay10ZXh0Ij50ZXh0PC90ZXh0Pjwvc3ZnPg==';
// Note: IE10 on BrowserStack does not like this test
var focusObjectSvgHidden = {
    element: 'object',
    mutate: function mutate(element) {
        element.setAttribute('type', 'image/svg+xml');
        element.setAttribute('data', svg);
        element.setAttribute('width', '200');
        element.setAttribute('height', '50');
        element.style.visibility = 'hidden';
    }
};
// Note: IE10 on BrowserStack does not like this test
var focusObjectSvg = {
    name: 'can-focus-object-svg',
    element: 'object',
    mutate: function mutate(element) {
        element.setAttribute('type', 'image/svg+xml');
        element.setAttribute('data', svg);
        element.setAttribute('width', '200');
        element.setAttribute('height', '50');
    },
    validate: function validate(element, focusTarget, _document) {
        if (platform.is.GECKO) {
            // Firefox seems to be handling the object creation asynchronously and thereby produces a false negative test result.
            // Because we know Firefox is able to focus object elements referencing SVGs, we simply cheat by sniffing the user agent string
            return true;
        }
        return _document.activeElement === element;
    }
};
// Every Environment except IE9 considers SWF objects focusable
var result$1 = !platform.is.IE9;
function focusObjectSwf() {
    return result$1;
}
var focusRedirectImgUsemap = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML =
            '<map name="focus-redirect-img-usemap"><area href="#void" shape="rect" coords="63,19,144,45"></map>' +
                '<img usemap="#focus-redirect-img-usemap" alt="" ' +
                'src="' +
                gif +
                '">';
        // focus the <img>, not the <div>
        return element.querySelector('img');
    },
    validate: function validate(element, focusTarget, _document) {
        var target = element.querySelector('area');
        return _document.activeElement === target;
    }
};
// see https://jsbin.com/nenirisage/edit?html,js,console,output
var focusRedirectLegend = {
    element: 'fieldset',
    mutate: function mutate(element) {
        element.innerHTML =
            '<legend>legend</legend><input tabindex="-1"><input tabindex="0">';
        // take care of focus in validate();
        return false;
    },
    validate: function validate(element, focusTarget, _document) {
        var focusable = element.querySelector('input[tabindex="-1"]');
        var tabbable = element.querySelector('input[tabindex="0"]');
        // Firefox requires this test to focus the <fieldset> first, while this is not necessary in
        // https://jsbin.com/nenirisage/edit?html,js,console,output
        element.focus();
        element.querySelector('legend').focus();
        return ((_document.activeElement === focusable && 'focusable') ||
            (_document.activeElement === tabbable && 'tabbable') ||
            '');
    }
};
// https://github.com/medialize/ally.js/issues/21
var focusScrollBody = {
    element: 'div',
    mutate: function mutate(element) {
        element.setAttribute('style', 'width: 100px; height: 50px; overflow: auto;');
        element.innerHTML =
            '<div style="width: 500px; height: 40px;">scrollable content</div>';
        return element.querySelector('div');
    }
};
// https://github.com/medialize/ally.js/issues/21
var focusScrollContainerWithoutOverflow = {
    element: 'div',
    mutate: function mutate(element) {
        element.setAttribute('style', 'width: 100px; height: 50px;');
        element.innerHTML =
            '<div style="width: 500px; height: 40px;">scrollable content</div>';
    }
};
// https://github.com/medialize/ally.js/issues/21
var focusScrollContainer = {
    element: 'div',
    mutate: function mutate(element) {
        element.setAttribute('style', 'width: 100px; height: 50px; overflow: auto;');
        element.innerHTML =
            '<div style="width: 500px; height: 40px;">scrollable content</div>';
    }
};
var focusSummary = {
    element: 'details',
    mutate: function mutate(element) {
        element.innerHTML = '<summary>foo</summary><p>content</p>';
        return element.firstElementChild;
    }
};
function makeFocusableForeignObject() {
    var fragment = document.createElement('div');
    fragment.innerHTML =
        '<svg><foreignObject width="30" height="30">\n      <input type="text"/>\n  </foreignObject></svg>';
    return fragment.firstChild.firstChild;
}
function focusSvgForeignObjectHack(element) {
    // Edge13, Edge14: foreignObject focus hack
    // https://jsbin.com/kunehinugi/edit?html,js,output
    // https://jsbin.com/fajagi/3/edit?html,js,output
    var isSvgElement = element.ownerSVGElement || element.nodeName.toLowerCase() === 'svg';
    if (!isSvgElement) {
        return false;
    }
    // inject and focus an <input> element into the SVG element to receive focus
    var foreignObject = makeFocusableForeignObject();
    element.appendChild(foreignObject);
    var input = foreignObject.querySelector('input');
    input.focus();
    // upon disabling the activeElement, IE and Edge
    // will not shift focus to <body> like all the other
    // browsers, but instead find the first focusable
    // ancestor and shift focus to that
    input.disabled = true;
    // clean up
    element.removeChild(foreignObject);
    return true;
}
function generate(element) {
    return ('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
        element +
        '</svg>');
}
function focus(element) {
    if (element.focus) {
        return;
    }
    try {
        HTMLElement.prototype.focus.call(element);
    }
    catch (e) {
        focusSvgForeignObjectHack(element);
    }
}
function validate(element, focusTarget, _document) {
    focus(focusTarget);
    return _document.activeElement === focusTarget;
}
var focusSvgFocusableAttribute = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = generate('<text focusable="true">a</text>');
        return element.querySelector('text');
    },
    validate: validate
};
var focusSvgTabindexAttribute = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = generate('<text tabindex="0">a</text>');
        return element.querySelector('text');
    },
    validate: validate
};
var focusSvgNegativeTabindexAttribute = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = generate('<text tabindex="-1">a</text>');
        return element.querySelector('text');
    },
    validate: validate
};
var focusSvgUseTabindex = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = generate([
            '<g id="ally-test-target"><a xlink:href="#void"><text>link</text></a></g>',
            '<use xlink:href="#ally-test-target" x="0" y="0" tabindex="-1" />',
        ].join(''));
        return element.querySelector('use');
    },
    validate: validate
};
var focusSvgForeignobjectTabindex = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = generate('<foreignObject tabindex="-1"><input type="text" /></foreignObject>');
        // Safari 8's quersSelector() can't identify foreignObject, but getElementyByTagName() can
        return (element.querySelector('foreignObject') ||
            element.getElementsByTagName('foreignObject')[0]);
    },
    validate: validate
};
// Firefox seems to be handling the SVG-document-in-iframe creation asynchronously
// and thereby produces a false negative test result. Thus the test is pointless
// and we resort to UA sniffing once again.
// see http://jsbin.com/vunadohoko/1/edit?js,console,output
var result$2 = Boolean(platform.is.GECKO &&
    typeof SVGElement !== 'undefined' &&
    SVGElement.prototype.focus);
function focusSvgInIframe() {
    return result$2;
}
var focusSvg = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = generate('');
        return element.firstChild;
    },
    validate: validate
};
// Firefox allows *any* value and treats invalid values like tabindex="-1"
// @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
var focusTabindexTrailingCharacters = {
    element: 'div',
    mutate: function mutate(element) {
        element.setAttribute('tabindex', '3x');
    }
};
var focusTable = {
    element: 'table',
    mutate: function mutate(element, wrapper, _document) {
        // IE9 has a problem replacing TBODY contents with innerHTML.
        // https://stackoverflow.com/a/8097055/515124
        // element.innerHTML = '<tr><td>cell</td></tr>';
        var fragment = _document.createDocumentFragment();
        fragment.innerHTML = '<tr><td>cell</td></tr>';
        element.appendChild(fragment);
    }
};
var focusVideoWithoutControls = {
    element: 'video',
    mutate: function mutate(element) {
        try {
            // invalid media file can trigger warning in console, data-uri to prevent HTTP request
            element.setAttribute('src', gif);
        }
        catch (e) {
            // IE9 may throw "Error: Not implemented"
        }
    }
};
// https://jsbin.com/vafaba/3/edit?html,js,console,output
var result$3 = platform.is.GECKO || platform.is.TRIDENT || platform.is.EDGE;
function tabsequenceAreaAtImgPosition() {
    return result$3;
}
var testCallbacks = {
    cssShadowPiercingDeepCombinator: cssShadowPiercingDeepCombinator,
    focusInZeroDimensionObject: focusInZeroDimensionObject,
    focusObjectSwf: focusObjectSwf,
    focusSvgInIframe: focusSvgInIframe,
    tabsequenceAreaAtImgPosition: tabsequenceAreaAtImgPosition
};
var testDescriptions = {
    focusAreaImgTabindex: focusAreaImgTabindex,
    focusAreaTabindex: focusAreaTabindex,
    focusAreaWithoutHref: focusAreaWithoutHref,
    focusAudioWithoutControls: focusAudioWithoutControls,
    focusBrokenImageMap: focusBrokenImageMap,
    focusChildrenOfFocusableFlexbox: focusChildrenOfFocusableFlexbox,
    focusFieldsetDisabled: focusFieldsetDisabled,
    focusFieldset: focusFieldset,
    focusFlexboxContainer: focusFlexboxContainer,
    focusFormDisabled: focusFormDisabled,
    focusImgIsmap: focusImgIsmap,
    focusImgUsemapTabindex: focusImgUsemapTabindex,
    focusInHiddenIframe: focusInHiddenIframe,
    focusInvalidTabindex: focusInvalidTabindex,
    focusLabelTabindex: focusLabelTabindex,
    focusObjectSvg: focusObjectSvg,
    focusObjectSvgHidden: focusObjectSvgHidden,
    focusRedirectImgUsemap: focusRedirectImgUsemap,
    focusRedirectLegend: focusRedirectLegend,
    focusScrollBody: focusScrollBody,
    focusScrollContainerWithoutOverflow: focusScrollContainerWithoutOverflow,
    focusScrollContainer: focusScrollContainer,
    focusSummary: focusSummary,
    focusSvgFocusableAttribute: focusSvgFocusableAttribute,
    focusSvgTabindexAttribute: focusSvgTabindexAttribute,
    focusSvgNegativeTabindexAttribute: focusSvgNegativeTabindexAttribute,
    focusSvgUseTabindex: focusSvgUseTabindex,
    focusSvgForeignobjectTabindex: focusSvgForeignobjectTabindex,
    focusSvg: focusSvg,
    focusTabindexTrailingCharacters: focusTabindexTrailingCharacters,
    focusTable: focusTable,
    focusVideoWithoutControls: focusVideoWithoutControls
};
function executeTests() {
    var results = detectFocus(testDescriptions);
    Object.keys(testCallbacks).forEach(function (key) {
        results[key] = testCallbacks[key]();
    });
    return results;
}
var supportsCache = null;
function _supports() {
    if (supportsCache) {
        return supportsCache;
    }
    supportsCache = cache$1.get();
    if (!supportsCache.time) {
        cache$1.set(executeTests());
        supportsCache = cache$1.get();
    }
    return supportsCache;
}
var supports = void 0;
// https://www.w3.org/TR/html5/infrastructure.html#rules-for-parsing-integers
// NOTE: all browsers agree to allow trailing spaces as well
var validIntegerPatternNoTrailing = /^\s*(-|\+)?[0-9]+\s*$/;
var validIntegerPatternWithTrailing = /^\s*(-|\+)?[0-9]+.*$/;
function isValidTabindex(context) {
    if (!supports) {
        supports = _supports();
    }
    var validIntegerPattern = supports.focusTabindexTrailingCharacters
        ? validIntegerPatternWithTrailing
        : validIntegerPatternNoTrailing;
    var element = contextToElement({
        label: 'is/valid-tabindex',
        resolveDocument: true,
        context: context
    });
    // Edge 14 has a capitalization problem on SVG elements,
    // see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/9282058/
    var hasTabindex = element.hasAttribute('tabindex');
    var hasTabIndex = element.hasAttribute('tabIndex');
    if (!hasTabindex && !hasTabIndex) {
        return false;
    }
    // older Firefox and Internet Explorer don't support tabindex on SVG elements
    var isSvgElement = element.ownerSVGElement || element.nodeName.toLowerCase() === 'svg';
    if (isSvgElement && !supports.focusSvgTabindexAttribute) {
        return false;
    }
    // @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
    if (supports.focusInvalidTabindex) {
        return true;
    }
    // an element matches the tabindex selector even if its value is invalid
    var tabindex = element.getAttribute(hasTabindex ? 'tabindex' : 'tabIndex');
    // IE11 parses tabindex="" as the value "-32768"
    // @browser-issue Trident https://connect.microsoft.com/IE/feedback/details/1072965
    if (tabindex === '-32768') {
        return false;
    }
    return Boolean(tabindex && validIntegerPattern.test(tabindex));
}
function tabindexValue(element) {
    if (!isValidTabindex(element)) {
        return null;
    }
    // Edge 14 has a capitalization problem on SVG elements,
    // see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/9282058/
    var hasTabindex = element.hasAttribute('tabindex');
    var attributeName = hasTabindex ? 'tabindex' : 'tabIndex';
    // @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
    var tabindex = parseInt(element.getAttribute(attributeName), 10);
    return isNaN(tabindex) ? -1 : tabindex;
}
// this is a shared utility file for focus-relevant.js and tabbable.js
// separate testing of this file's functions is not necessary,
// as they're implicitly tested by way of the consumers
function isUserModifyWritable(style) {
    // https://www.w3.org/TR/1999/WD-css3-userint-19990916#user-modify
    // https://github.com/medialize/ally.js/issues/17
    var userModify = style.webkitUserModify || '';
    return Boolean(userModify && userModify.indexOf('write') !== -1);
}
function hasCssOverflowScroll(style) {
    return [
        style.getPropertyValue('overflow'),
        style.getPropertyValue('overflow-x'),
        style.getPropertyValue('overflow-y'),
    ].some(function (overflow) {
        return overflow === 'auto' || overflow === 'scroll';
    });
}
function hasCssDisplayFlex(style) {
    return style.display.indexOf('flex') > -1;
}
function isScrollableContainer(element, nodeName, parentNodeName, parentStyle) {
    if (nodeName !== 'div' && nodeName !== 'span') {
        // Internet Explorer advances scrollable containers and bodies to focusable
        // only if the scrollable container is <div> or <span> - this does *not*
        // happen for <section>, <article>, …
        return false;
    }
    if (parentNodeName &&
        parentNodeName !== 'div' &&
        parentNodeName !== 'span' &&
        !hasCssOverflowScroll(parentStyle)) {
        return false;
    }
    return (element.offsetHeight < element.scrollHeight ||
        element.offsetWidth < element.scrollWidth);
}
var supports$1 = void 0;
function isFocusRelevantRules() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, _ref$except = _ref.except, except = _ref$except === undefined
        ? {
            flexbox: false,
            scrollable: false,
            shadow: false
        }
        : _ref$except;
    if (!supports$1) {
        supports$1 = _supports();
    }
    var element = contextToElement({
        label: 'is/focus-relevant',
        resolveDocument: true,
        context: context
    });
    if (!except.shadow && element.shadowRoot) {
        // a ShadowDOM host receives focus when the focus moves to its content
        return true;
    }
    var nodeName = element.nodeName.toLowerCase();
    if (nodeName === 'input' && element.type === 'hidden') {
        // input[type="hidden"] supports.cannot be focused
        return false;
    }
    if (nodeName === 'input' ||
        nodeName === 'select' ||
        nodeName === 'button' ||
        nodeName === 'textarea') {
        return true;
    }
    if (nodeName === 'legend' && supports$1.focusRedirectLegend) {
        // specifics filtered in is/focusable
        return true;
    }
    if (nodeName === 'label') {
        // specifics filtered in is/focusable
        return true;
    }
    if (nodeName === 'area') {
        // specifics filtered in is/focusable
        return true;
    }
    if (nodeName === 'a' && element.hasAttribute('href')) {
        return true;
    }
    if (nodeName === 'object' && element.hasAttribute('usemap')) {
        // object[usemap] is not focusable in any browser
        return false;
    }
    if (nodeName === 'object') {
        var svgType = element.getAttribute('type');
        if (!supports$1.focusObjectSvg && svgType === 'image/svg+xml') {
            // object[type="image/svg+xml"] is not focusable in Internet Explorer
            return false;
        }
        else if (!supports$1.focusObjectSwf &&
            svgType === 'application/x-shockwave-flash') {
            // object[type="application/x-shockwave-flash"] is not focusable in Internet Explorer 9
            return false;
        }
    }
    if (nodeName === 'iframe' || nodeName === 'object') {
        // browsing context containers
        return true;
    }
    if (nodeName === 'embed' || nodeName === 'keygen') {
        // embed is considered focus-relevant but not focusable
        // see https://github.com/medialize/ally.js/issues/82
        return true;
    }
    if (element.hasAttribute('contenteditable')) {
        // also see CSS property user-modify below
        return true;
    }
    if (nodeName === 'audio' &&
        (supports$1.focusAudioWithoutControls || element.hasAttribute('controls'))) {
        return true;
    }
    if (nodeName === 'video' &&
        (supports$1.focusVideoWithoutControls || element.hasAttribute('controls'))) {
        return true;
    }
    if (supports$1.focusSummary && nodeName === 'summary') {
        return true;
    }
    var validTabindex = isValidTabindex(element);
    if (nodeName === 'img' && element.hasAttribute('usemap')) {
        // Gecko, Trident and Edge do not allow an image with an image map and tabindex to be focused,
        // it appears the tabindex is overruled so focus is still forwarded to the <map>
        return ((validTabindex && supports$1.focusImgUsemapTabindex) ||
            supports$1.focusRedirectImgUsemap);
    }
    if (supports$1.focusTable && (nodeName === 'table' || nodeName === 'td')) {
        // IE10-11 supports.can focus <table> and <td>
        return true;
    }
    if (supports$1.focusFieldset && nodeName === 'fieldset') {
        // IE10-11 supports.can focus <fieldset>
        return true;
    }
    var isSvgElement = nodeName === 'svg';
    var isSvgContent = element.ownerSVGElement;
    var focusableAttribute = element.getAttribute('focusable');
    var tabindex = tabindexValue(element);
    if (nodeName === 'use' &&
        tabindex !== null &&
        !supports$1.focusSvgUseTabindex) {
        // <use> cannot be made focusable by adding a tabindex attribute anywhere but Blink and WebKit
        return false;
    }
    if (nodeName === 'foreignobject') {
        // <use> can only be made focusable in Blink and WebKit
        return tabindex !== null && supports$1.focusSvgForeignobjectTabindex;
    }
    if (elementMatches(element, 'svg a') && element.hasAttribute('xlink:href')) {
        return true;
    }
    if ((isSvgElement || isSvgContent) &&
        element.focus &&
        !supports$1.focusSvgNegativeTabindexAttribute &&
        tabindex < 0) {
        // Firefox 51 and 52 treat any natively tabbable SVG element with
        // tabindex="-1" as tabbable and everything else as inert
        // see https://bugzilla.mozilla.org/show_bug.cgi?id=1302340
        return false;
    }
    if (isSvgElement) {
        return (validTabindex ||
            supports$1.focusSvg ||
            supports$1.focusSvgInIframe ||
            // Internet Explorer understands the focusable attribute introduced in SVG Tiny 1.2
            Boolean(supports$1.focusSvgFocusableAttribute &&
                focusableAttribute &&
                focusableAttribute === 'true'));
    }
    if (isSvgContent) {
        if (supports$1.focusSvgTabindexAttribute && validTabindex) {
            return true;
        }
        if (supports$1.focusSvgFocusableAttribute) {
            // Internet Explorer understands the focusable attribute introduced in SVG Tiny 1.2
            return focusableAttribute === 'true';
        }
    }
    // https://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribute
    if (validTabindex) {
        return true;
    }
    var style = window.getComputedStyle(element, null);
    if (isUserModifyWritable(style)) {
        return true;
    }
    if (supports$1.focusImgIsmap &&
        nodeName === 'img' &&
        element.hasAttribute('ismap')) {
        // IE10-11 considers the <img> in <a href><img ismap> focusable
        // https://github.com/medialize/ally.js/issues/20
        var hasLinkParent = getParents({ context: element }).some(function (parent) {
            return (parent.nodeName.toLowerCase() === 'a' && parent.hasAttribute('href'));
        });
        if (hasLinkParent) {
            return true;
        }
    }
    // https://github.com/medialize/ally.js/issues/21
    if (!except.scrollable && supports$1.focusScrollContainer) {
        if (supports$1.focusScrollContainerWithoutOverflow) {
            // Internet Explorer does will consider the scrollable area focusable
            // if the element is a <div> or a <span> and it is in fact scrollable,
            // regardless of the CSS overflow property
            if (isScrollableContainer(element, nodeName)) {
                return true;
            }
        }
        else if (hasCssOverflowScroll(style)) {
            // Firefox requires proper overflow setting, IE does not necessarily
            // https://developer.mozilla.org/en-US/docs/Web/CSS/overflow
            return true;
        }
    }
    if (!except.flexbox &&
        supports$1.focusFlexboxContainer &&
        hasCssDisplayFlex(style)) {
        // elements with display:flex are focusable in IE10-11
        return true;
    }
    var parent = element.parentElement;
    if (!except.scrollable && parent) {
        var parentNodeName = parent.nodeName.toLowerCase();
        var parentStyle = window.getComputedStyle(parent, null);
        if (supports$1.focusScrollBody &&
            isScrollableContainer(parent, nodeName, parentNodeName, parentStyle)) {
            // scrollable bodies are focusable Internet Explorer
            // https://github.com/medialize/ally.js/issues/21
            return true;
        }
        // Children of focusable elements with display:flex are focusable in IE10-11
        if (supports$1.focusChildrenOfFocusableFlexbox) {
            if (hasCssDisplayFlex(parentStyle)) {
                return true;
            }
        }
    }
    // NOTE: elements marked as inert are not focusable,
    // but that property is not exposed to the DOM
    // https://www.w3.org/TR/html5/editing.html#inert
    return false;
}
// bind exceptions to an iterator callback
isFocusRelevantRules.except = function () {
    var except = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var isFocusRelevant = function isFocusRelevant(context) {
        return isFocusRelevantRules({
            context: context,
            except: except
        });
    };
    isFocusRelevant.rules = isFocusRelevantRules;
    return isFocusRelevant;
};
// provide isFocusRelevant(context) as default iterator callback
var isFocusRelevant = isFocusRelevantRules.except({});
function findIndex(array, callback) {
    // attempt to use native or polyfilled Array#findIndex first
    if (array.findIndex) {
        return array.findIndex(callback);
    }
    var length = array.length;
    // shortcut if the array is empty
    if (length === 0) {
        return -1;
    }
    // otherwise loop over array
    for (var i = 0; i < length; i++) {
        if (callback(array[i], i, array)) {
            return i;
        }
    }
    return -1;
}
function getContentDocument(node) {
    try {
        // works on <object> and <iframe>
        return (node.contentDocument ||
            // works on <object> and <iframe>
            (node.contentWindow && node.contentWindow.document) ||
            // works on <object> and <iframe> that contain SVG
            (node.getSVGDocument && node.getSVGDocument()) ||
            null);
    }
    catch (e) {
        // SecurityError: Failed to read the 'contentDocument' property from 'HTMLObjectElement'
        // also IE may throw member not found exception e.g. on <object type="image/png">
        return null;
    }
}
function getWindow(node) {
    var _document = getDocument(node);
    return _document.defaultView || window;
}
var shadowPrefix = void 0;
function selectInShadows(selector) {
    if (typeof shadowPrefix !== 'string') {
        var operator = cssShadowPiercingDeepCombinator();
        if (operator) {
            shadowPrefix = ', html ' + operator + ' ';
        }
    }
    if (!shadowPrefix) {
        return selector;
    }
    return (selector +
        shadowPrefix +
        selector
            .replace(/\s*,\s*/g, ',')
            .split(',')
            .join(shadowPrefix));
}
var selector = void 0;
function findDocumentHostElement(_window) {
    if (!selector) {
        selector = selectInShadows('object, iframe');
    }
    if (_window._frameElement !== undefined) {
        return _window._frameElement;
    }
    _window._frameElement = null;
    var potentialHosts = _window.parent.document.querySelectorAll(selector);
    [].some.call(potentialHosts, function (element) {
        var _document = getContentDocument(element);
        if (_document !== _window.document) {
            return false;
        }
        _window._frameElement = element;
        return true;
    });
    return _window._frameElement;
}
function getFrameElement(element) {
    var _window = getWindow(element);
    if (!_window.parent || _window.parent === _window) {
        // if there is no parent browsing context,
        // we're not going to get a frameElement either way
        return null;
    }
    try {
        // see https://developer.mozilla.org/en-US/docs/Web/API/Window/frameElement
        // does not work within <embed> anywhere, and not within in <object> in IE
        return _window.frameElement || findDocumentHostElement(_window);
    }
    catch (e) {
        return null;
    }
}
// https://www.w3.org/TR/html5/rendering.html#being-rendered
// <area> is not rendered, but we *consider* it visible to simplfiy this function's usage
var notRenderedElementsPattern = /^(area)$/;
function computedStyle(element, property) {
    return window.getComputedStyle(element, null).getPropertyValue(property);
}
function notDisplayed(_path) {
    return _path.some(function (element) {
        // display:none is not visible (optimized away at layout)
        return computedStyle(element, 'display') === 'none';
    });
}
function notVisible(_path) {
    // https://github.com/jquery/jquery-ui/blob/master/ui/core.js#L109-L114
    // NOTE: a nested element can reverse visibility:hidden|collapse by explicitly setting visibility:visible
    // NOTE: visibility can be ["", "visible", "hidden", "collapse"]
    var hidden = findIndex(_path, function (element) {
        var visibility = computedStyle(element, 'visibility');
        return visibility === 'hidden' || visibility === 'collapse';
    });
    if (hidden === -1) {
        // there is no hidden element
        return false;
    }
    var visible = findIndex(_path, function (element) {
        return computedStyle(element, 'visibility') === 'visible';
    });
    if (visible === -1) {
        // there is no visible element (but a hidden element)
        return true;
    }
    if (hidden < visible) {
        // there is a hidden element and it's closer than the first visible element
        return true;
    }
    // there may be a hidden element, but the closest element is visible
    return false;
}
function collapsedParent(_path) {
    var offset = 1;
    if (_path[0].nodeName.toLowerCase() === 'summary') {
        offset = 2;
    }
    return _path.slice(offset).some(function (element) {
        // "content children" of a closed details element are not visible
        return (element.nodeName.toLowerCase() === 'details' && element.open === false);
    });
}
function isVisibleRules() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, _ref$except = _ref.except, except = _ref$except === undefined
        ? {
            notRendered: false,
            cssDisplay: false,
            cssVisibility: false,
            detailsElement: false,
            browsingContext: false
        }
        : _ref$except;
    var element = contextToElement({
        label: 'is/visible',
        resolveDocument: true,
        context: context
    });
    var nodeName = element.nodeName.toLowerCase();
    if (!except.notRendered && notRenderedElementsPattern.test(nodeName)) {
        return true;
    }
    var _path = getParents({ context: element });
    // in Internet Explorer <audio> has a default display: none, where others have display: inline
    // but IE allows focusing <audio style="display:none">, but not <div display:none><audio>
    // this is irrelevant to other browsers, as the controls attribute is required to make <audio> focusable
    var isAudioWithoutControls = nodeName === 'audio' && !element.hasAttribute('controls');
    if (!except.cssDisplay &&
        notDisplayed(isAudioWithoutControls ? _path.slice(1) : _path)) {
        return false;
    }
    if (!except.cssVisibility && notVisible(_path)) {
        return false;
    }
    if (!except.detailsElement && collapsedParent(_path)) {
        return false;
    }
    if (!except.browsingContext) {
        // elements within a browsing context are affected by the
        // browsing context host element's visibility and tabindex
        var frameElement = getFrameElement(element);
        var _isVisible = isVisibleRules.except(except);
        if (frameElement && !_isVisible(frameElement)) {
            return false;
        }
    }
    return true;
}
// bind exceptions to an iterator callback
isVisibleRules.except = function () {
    var except = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var isVisible = function isVisible(context) {
        return isVisibleRules({
            context: context,
            except: except
        });
    };
    isVisible.rules = isVisibleRules;
    return isVisible;
};
// provide isVisible(context) as default iterator callback
var isVisible = isVisibleRules.except({});
function getMapByName(name, _document) {
    // apparently getElementsByName() also considers id attribute in IE & opera
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByName
    var map = _document.querySelector('map[name="' + css_escape_1["default"](name) + '"]');
    return map || null;
}
function getImageOfArea(element) {
    var map = element.parentElement;
    if (!map.name || map.nodeName.toLowerCase() !== 'map') {
        return null;
    }
    // NOTE: image maps can also be applied to <object> with image content,
    // but no browser supports this at the moment
    // HTML5 specifies HTMLMapElement.images to be an HTMLCollection of all
    // <img> and <object> referencing the <map> element, but no browser implements this
    //   https://www.w3.org/TR/html5/embedded-content-0.html#the-map-element
    //   https://developer.mozilla.org/en-US/docs/Web/API/HTMLMapElement
    // the image must be valid and loaded for the map to take effect
    var _document = getDocument(element);
    return (_document.querySelector('img[usemap="#' + css_escape_1["default"](map.name) + '"]') ||
        null);
}
var supports$2 = void 0;
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
// https://github.com/jquery/jquery-ui/blob/master/ui/core.js#L88-L107
function isValidArea(context) {
    if (!supports$2) {
        supports$2 = _supports();
    }
    var element = contextToElement({
        label: 'is/valid-area',
        context: context
    });
    var nodeName = element.nodeName.toLowerCase();
    if (nodeName !== 'area') {
        return false;
    }
    var hasTabindex = element.hasAttribute('tabindex');
    if (!supports$2.focusAreaTabindex && hasTabindex) {
        // Blink and WebKit do not consider <area tabindex="-1" href="#void"> focusable
        return false;
    }
    var img = getImageOfArea(element);
    if (!img || !isVisible(img)) {
        return false;
    }
    // Firefox only allows fully loaded images to reference image maps
    // https://stereochro.me/ideas/detecting-broken-images-js
    if (!supports$2.focusBrokenImageMap &&
        (!img.complete ||
            !img.naturalHeight ||
            img.offsetWidth <= 0 ||
            img.offsetHeight <= 0)) {
        return false;
    }
    // Firefox supports.can focus area elements even if they don't have an href attribute
    if (!supports$2.focusAreaWithoutHref && !element.href) {
        // Internet explorer supports.can focus area elements without href if either
        // the area element or the image element has a tabindex attribute
        return ((supports$2.focusAreaTabindex && hasTabindex) ||
            (supports$2.focusAreaImgTabindex && img.hasAttribute('tabindex')));
    }
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
    var childOfInteractive = getParents({ context: img })
        .slice(1)
        .some(function (_element) {
        var name = _element.nodeName.toLowerCase();
        return name === 'button' || name === 'a';
    });
    if (childOfInteractive) {
        return false;
    }
    return true;
}
var supports$3 = void 0;
// https://www.w3.org/TR/html5/disabled-elements.html#concept-element-disabled
var disabledElementsPattern = void 0;
var disabledElements = {
    input: true,
    select: true,
    textarea: true,
    button: true,
    fieldset: true,
    form: true
};
function isNativeDisabledSupported(context) {
    if (!supports$3) {
        supports$3 = _supports();
        if (supports$3.focusFieldsetDisabled) {
            delete disabledElements.fieldset;
        }
        if (supports$3.focusFormDisabled) {
            delete disabledElements.form;
        }
        disabledElementsPattern = new RegExp('^(' + Object.keys(disabledElements).join('|') + ')$');
    }
    var element = contextToElement({
        label: 'is/native-disabled-supported',
        context: context
    });
    var nodeName = element.nodeName.toLowerCase();
    return Boolean(disabledElementsPattern.test(nodeName));
}
var supports$4 = void 0;
function isDisabledFieldset(element) {
    var nodeName = element.nodeName.toLowerCase();
    return nodeName === 'fieldset' && element.disabled;
}
function isDisabledForm(element) {
    var nodeName = element.nodeName.toLowerCase();
    return nodeName === 'form' && element.disabled;
}
function isDisabled(context) {
    if (!supports$4) {
        supports$4 = _supports();
    }
    var element = contextToElement({
        label: 'is/disabled',
        context: context
    });
    if (element.hasAttribute('data-ally-disabled')) {
        // treat ally's element/disabled like the DOM native element.disabled
        return true;
    }
    if (!isNativeDisabledSupported(element)) {
        // non-form elements do not support the disabled attribute
        return false;
    }
    if (element.disabled) {
        // the element itself is disabled
        return true;
    }
    var parents = getParents({ context: element });
    if (parents.some(isDisabledFieldset)) {
        // a parental <fieldset> is disabld and inherits the state onto this element
        return true;
    }
    if (!supports$4.focusFormDisabled && parents.some(isDisabledForm)) {
        // a parental <form> is disabld and inherits the state onto this element
        return true;
    }
    return false;
}
function isOnlyTabbableRules() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, _ref$except = _ref.except, except = _ref$except === undefined
        ? {
            onlyFocusableBrowsingContext: false,
            visible: false
        }
        : _ref$except;
    var element = contextToElement({
        label: 'is/only-tabbable',
        resolveDocument: true,
        context: context
    });
    if (!except.visible && !isVisible(element)) {
        return false;
    }
    if (!except.onlyFocusableBrowsingContext &&
        (platform.is.GECKO || platform.is.TRIDENT || platform.is.EDGE)) {
        var frameElement = getFrameElement(element);
        if (frameElement) {
            if (tabindexValue(frameElement) < 0) {
                // iframe[tabindex="-1"] and object[tabindex="-1"] inherit the
                // tabbable demotion onto elements of their browsing contexts
                return false;
            }
        }
    }
    var nodeName = element.nodeName.toLowerCase();
    var tabindex = tabindexValue(element);
    if (nodeName === 'label' && platform.is.GECKO) {
        // Firefox cannot focus, but tab to: label[tabindex=0]
        return tabindex !== null && tabindex >= 0;
    }
    // SVG Elements were keyboard focusable but not script focusable before Firefox 51.
    // Firefox 51 added the focus management DOM API (.focus and .blur) to SVGElement,
    // see https://bugzilla.mozilla.org/show_bug.cgi?id=778654
    if (platform.is.GECKO && element.ownerSVGElement && !element.focus) {
        if (nodeName === 'a' && element.hasAttribute('xlink:href')) {
            // any focusable child of <svg> cannot be focused, but tabbed to
            if (platform.is.GECKO) {
                return true;
            }
        }
    }
    return false;
}
// bind exceptions to an iterator callback
isOnlyTabbableRules.except = function () {
    var except = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var isOnlyTabbable = function isOnlyTabbable(context) {
        return isOnlyTabbableRules({
            context: context,
            except: except
        });
    };
    isOnlyTabbable.rules = isOnlyTabbableRules;
    return isOnlyTabbable;
};
// provide isOnlyTabbable(context) as default iterator callback
var isOnlyTabbable = isOnlyTabbableRules.except({});
var supports$5 = void 0;
function isOnlyFocusRelevant(element) {
    var nodeName = element.nodeName.toLowerCase();
    if (nodeName === 'embed' || nodeName === 'keygen') {
        // embed is considered focus-relevant but not focusable
        // see https://github.com/medialize/ally.js/issues/82
        return true;
    }
    var _tabindex = tabindexValue(element);
    if (element.shadowRoot && _tabindex === null) {
        // ShadowDOM host elements *may* receive focus
        // even though they are not considered focuable
        return true;
    }
    if (nodeName === 'label') {
        // <label tabindex="0"> is only tabbable in Firefox, not script-focusable
        // there's no way to make an element focusable other than by adding a tabindex,
        // and focus behavior of the label element seems hard-wired to ignore tabindex
        // in some browsers (like Gecko, Blink and WebKit)
        return !supports$5.focusLabelTabindex || _tabindex === null;
    }
    if (nodeName === 'legend') {
        return _tabindex === null;
    }
    if (supports$5.focusSvgFocusableAttribute &&
        (element.ownerSVGElement || nodeName === 'svg')) {
        // Internet Explorer understands the focusable attribute introduced in SVG Tiny 1.2
        var focusableAttribute = element.getAttribute('focusable');
        return focusableAttribute && focusableAttribute === 'false';
    }
    if (nodeName === 'img' && element.hasAttribute('usemap')) {
        // Gecko, Trident and Edge do not allow an image with an image map and tabindex to be focused,
        // it appears the tabindex is overruled so focus is still forwarded to the <map>
        return _tabindex === null || !supports$5.focusImgUsemapTabindex;
    }
    if (nodeName === 'area') {
        // all <area>s are considered relevant,
        // but only the valid <area>s are focusable
        return !isValidArea(element);
    }
    return false;
}
function isFocusableRules() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, _ref$except = _ref.except, except = _ref$except === undefined
        ? {
            disabled: false,
            visible: false,
            onlyTabbable: false
        }
        : _ref$except;
    if (!supports$5) {
        supports$5 = _supports();
    }
    var _isOnlyTabbable = isOnlyTabbable.rules.except({
        onlyFocusableBrowsingContext: true,
        visible: except.visible
    });
    var element = contextToElement({
        label: 'is/focusable',
        resolveDocument: true,
        context: context
    });
    var focusRelevant = isFocusRelevant.rules({
        context: element,
        except: except
    });
    if (!focusRelevant || isOnlyFocusRelevant(element)) {
        return false;
    }
    if (!except.disabled && isDisabled(element)) {
        return false;
    }
    if (!except.onlyTabbable && _isOnlyTabbable(element)) {
        // some elements may be keyboard focusable, but not script focusable
        return false;
    }
    // elements that are not rendered, cannot be focused
    if (!except.visible) {
        var visibilityOptions = {
            context: element,
            except: {}
        };
        if (supports$5.focusInHiddenIframe) {
            // WebKit and Blink can focus content in hidden <iframe> and <object>
            visibilityOptions.except.browsingContext = true;
        }
        if (supports$5.focusObjectSvgHidden) {
            // Blink allows focusing the object element, even if it has visibility: hidden;
            // @browser-issue Blink https://code.google.com/p/chromium/issues/detail?id=586191
            var _nodeName2 = element.nodeName.toLowerCase();
            if (_nodeName2 === 'object') {
                visibilityOptions.except.cssVisibility = true;
            }
        }
        if (!isVisible.rules(visibilityOptions)) {
            return false;
        }
    }
    var frameElement = getFrameElement(element);
    if (frameElement) {
        var _nodeName = frameElement.nodeName.toLowerCase();
        if (_nodeName === 'object' && !supports$5.focusInZeroDimensionObject) {
            if (!frameElement.offsetWidth || !frameElement.offsetHeight) {
                // WebKit can not focus content in <object> if it doesn't have dimensions
                return false;
            }
        }
    }
    var nodeName = element.nodeName.toLowerCase();
    if (nodeName === 'svg' &&
        supports$5.focusSvgInIframe &&
        !frameElement &&
        element.getAttribute('tabindex') === null) {
        return false;
    }
    return true;
}
// bind exceptions to an iterator callback
isFocusableRules.except = function () {
    var except = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var isFocusable = function isFocusable(context) {
        return isFocusableRules({
            context: context,
            except: except
        });
    };
    isFocusable.rules = isFocusableRules;
    return isFocusable;
};
// provide isFocusRelevant(context) as default iterator callback
var isFocusable = isFocusableRules.except({});
function createFilter(condition) {
    // see https://developer.mozilla.org/en-US/docs/Web/API/NodeFilter
    var filter = function filter(node) {
        if (node.shadowRoot) {
            // return ShadowRoot elements regardless of them being focusable,
            // so they can be walked recursively later
            return NodeFilter.FILTER_ACCEPT;
        }
        if (condition(node)) {
            // finds elements that could have been found by document.querySelectorAll()
            return NodeFilter.FILTER_ACCEPT;
        }
        return NodeFilter.FILTER_SKIP;
    };
    // IE requires a function, Browsers require {acceptNode: function}
    // see http://www.bennadel.com/blog/2607-finding-html-comment-nodes-in-the-dom-using-treewalker.htm
    filter.acceptNode = filter;
    return filter;
}
var PossiblyFocusableFilter = createFilter(isFocusRelevant);
function queryFocusableStrict() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, includeContext = _ref.includeContext, includeOnlyTabbable = _ref.includeOnlyTabbable, strategy = _ref.strategy;
    if (!context) {
        context = document.documentElement;
    }
    var _isFocusable = isFocusable.rules.except({
        onlyTabbable: includeOnlyTabbable
    });
    var _document = getDocument(context);
    // see https://developer.mozilla.org/en-US/docs/Web/API/Document/createTreeWalker
    var walker = _document.createTreeWalker(
    // root element to start search in
    context, 
    // element type filter
    NodeFilter.SHOW_ELEMENT, 
    // custom NodeFilter filter
    strategy === 'all' ? PossiblyFocusableFilter : createFilter(_isFocusable), 
    // deprecated, but IE requires it
    false);
    var list = [];
    while (walker.nextNode()) {
        if (walker.currentNode.shadowRoot) {
            if (_isFocusable(walker.currentNode)) {
                list.push(walker.currentNode);
            }
            list = list.concat(queryFocusableStrict({
                context: walker.currentNode.shadowRoot,
                includeOnlyTabbable: includeOnlyTabbable,
                strategy: strategy
            }));
        }
        else {
            list.push(walker.currentNode);
        }
    }
    // add context if requested and focusable
    if (includeContext) {
        if (strategy === 'all') {
            if (isFocusRelevant(context)) {
                list.unshift(context);
            }
        }
        else if (_isFocusable(context)) {
            list.unshift(context);
        }
    }
    return list;
}
// NOTE: this selector MUST *never* be used directly,
var supports$6 = void 0;
var selector$1 = void 0;
function selector$2() {
    if (!supports$6) {
        supports$6 = _supports();
    }
    if (typeof selector$1 === 'string') {
        return selector$1;
    }
    // https://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribute
    selector$1 =
        '' +
            // IE11 supports.can focus <table> and <td>
            (supports$6.focusTable ? 'table, td,' : '') +
            // IE11 supports.can focus <fieldset>
            (supports$6.focusFieldset ? 'fieldset,' : '') +
            // Namespace problems of [xlink:href] explained in https://stackoverflow.com/a/23047888/515124
            // svg a[*|href] does not match in IE9, but since we're filtering
            // through is/focusable we can include all <a> from SVG
            'svg a,' +
            // may behave as 'svg, svg *,' in chrome as *every* svg element with a focus event listener is focusable
            // navigational elements
            'a[href],' +
            // validity determined by is/valid-area.js
            'area[href],' +
            // validity determined by is/disabled.js
            'input, select, textarea, button,' +
            // browsing context containers
            'iframe, object, embed,' +
            // interactive content
            'keygen,' +
            (supports$6.focusAudioWithoutControls ? 'audio,' : 'audio[controls],') +
            (supports$6.focusVideoWithoutControls ? 'video,' : 'video[controls],') +
            (supports$6.focusSummary ? 'summary,' : '') +
            // validity determined by is/valid-tabindex.js
            '[tabindex],' +
            // editing hosts
            '[contenteditable]';
    // where ShadowDOM is supported, we also want the shadowed focusable elements (via ">>>" or "/deep/")
    selector$1 = selectInShadows(selector$1);
    return selector$1;
}
function queryFocusableQuick() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, includeContext = _ref.includeContext, includeOnlyTabbable = _ref.includeOnlyTabbable;
    var _selector = selector$2();
    var elements = context.querySelectorAll(_selector);
    // the selector potentially matches more than really is focusable
    var _isFocusable = isFocusable.rules.except({
        onlyTabbable: includeOnlyTabbable
    });
    var result = [].filter.call(elements, _isFocusable);
    // add context if requested and focusable
    if (includeContext && _isFocusable(context)) {
        result.unshift(context);
    }
    return result;
}
function queryFocusable() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, includeContext = _ref.includeContext, includeOnlyTabbable = _ref.includeOnlyTabbable, _ref$strategy = _ref.strategy, strategy = _ref$strategy === undefined ? 'quick' : _ref$strategy;
    var element = contextToElement({
        label: 'query/focusable',
        resolveDocument: true,
        defaultToDocument: true,
        context: context
    });
    var options = {
        context: element,
        includeContext: includeContext,
        includeOnlyTabbable: includeOnlyTabbable,
        strategy: strategy
    };
    if (strategy === 'quick') {
        return queryFocusableQuick(options);
    }
    else if (strategy === 'strict' || strategy === 'all') {
        return queryFocusableStrict(options);
    }
    throw new TypeError('query/focusable requires option.strategy to be one of ["quick", "strict", "all"]');
}
var supports$7 = void 0;
// Internet Explorer 11 considers fieldset, table, td focusable, but not tabbable
// Internet Explorer 11 considers body to have [tabindex=0], but does not allow tabbing to it
var focusableElementsPattern = /^(fieldset|table|td|body)$/;
function isTabbableRules() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, _ref$except = _ref.except, except = _ref$except === undefined
        ? {
            flexbox: false,
            scrollable: false,
            shadow: false,
            visible: false,
            onlyTabbable: false
        }
        : _ref$except;
    if (!supports$7) {
        supports$7 = _supports();
    }
    var element = contextToElement({
        label: 'is/tabbable',
        resolveDocument: true,
        context: context
    });
    if (platform.is.BLINK && platform.is.ANDROID && platform.majorVersion > 42) {
        // External keyboard support worked fine in CHrome 42, but stopped working in Chrome 45.
        // The on-screen keyboard does not provide a way to focus the next input element (like iOS does).
        // That leaves us with no option to advance focus by keyboard, ergo nothing is tabbable (keyboard focusable).
        return false;
    }
    var frameElement = getFrameElement(element);
    if (frameElement) {
        if (platform.is.WEBKIT && platform.is.IOS) {
            // iOS only does not consider anything from another browsing context keyboard focusable
            return false;
        }
        // iframe[tabindex="-1"] and object[tabindex="-1"] inherit the
        // tabbable demotion onto elements of their browsing contexts
        if (tabindexValue(frameElement) < 0) {
            return false;
        }
        if (!except.visible &&
            (platform.is.BLINK || platform.is.WEBKIT) &&
            !isVisible(frameElement)) {
            // Blink and WebKit consider elements in hidden browsing contexts focusable, but not tabbable
            return false;
        }
        // Webkit and Blink don't consider anything in <object> tabbable
        // Blink fixed that fixed in Chrome 54, Opera 41
        var frameNodeName = frameElement.nodeName.toLowerCase();
        if (frameNodeName === 'object') {
            var isFixedBlink = (platform.name === 'Chrome' && platform.majorVersion >= 54) ||
                (platform.name === 'Opera' && platform.majorVersion >= 41);
            if (platform.is.WEBKIT || (platform.is.BLINK && !isFixedBlink)) {
                return false;
            }
        }
    }
    var nodeName = element.nodeName.toLowerCase();
    var _tabindex = tabindexValue(element);
    var tabindex = _tabindex === null ? null : _tabindex >= 0;
    if (platform.is.EDGE &&
        platform.majorVersion >= 14 &&
        frameElement &&
        element.ownerSVGElement &&
        _tabindex < 0) {
        // Edge 14+ considers <a xlink:href="…" tabindex="-1"> keyboard focusable
        // if the element is in a nested browsing context
        return true;
    }
    var hasTabbableTabindexOrNone = tabindex !== false;
    var hasTabbableTabindex = _tabindex !== null && _tabindex >= 0;
    // NOTE: Firefox 31 considers [contenteditable] to have [tabindex=-1], but allows tabbing to it
    // fixed in Firefox 40 the latest - https://bugzilla.mozilla.org/show_bug.cgi?id=1185657
    if (element.hasAttribute('contenteditable')) {
        // tabbing can still be disabled by explicitly providing [tabindex="-1"]
        return hasTabbableTabindexOrNone;
    }
    if (focusableElementsPattern.test(nodeName) && tabindex !== true) {
        return false;
    }
    if (platform.is.WEBKIT && platform.is.IOS) {
        // iOS only considers a hand full of elements tabbable (keyboard focusable)
        // this holds true even with external keyboards
        var potentiallyTabbable = (nodeName === 'input' && element.type === 'text') ||
            element.type === 'password' ||
            nodeName === 'select' ||
            nodeName === 'textarea' ||
            element.hasAttribute('contenteditable');
        if (!potentiallyTabbable) {
            var style = window.getComputedStyle(element, null);
            potentiallyTabbable = isUserModifyWritable(style);
        }
        if (!potentiallyTabbable) {
            return false;
        }
    }
    if (nodeName === 'use' && _tabindex !== null) {
        if (platform.is.BLINK ||
            (platform.is.WEBKIT && platform.majorVersion === 9)) {
            // In Chrome and Safari 9 the <use> element is keyboard focusable even for tabindex="-1"
            return true;
        }
    }
    if (elementMatches(element, 'svg a') && element.hasAttribute('xlink:href')) {
        if (hasTabbableTabindexOrNone) {
            // in Trident and Gecko SVGElement does not handle the tabIndex property properly
            return true;
        }
        if (element.focus && !supports$7.focusSvgNegativeTabindexAttribute) {
            // Firefox 51 and 52 treat any natively tabbable SVG element with
            // tabindex="-1" as tabbable and everything else as inert
            // see https://bugzilla.mozilla.org/show_bug.cgi?id=1302340
            return true;
        }
    }
    if (nodeName === 'svg' &&
        supports$7.focusSvgInIframe &&
        hasTabbableTabindexOrNone) {
        return true;
    }
    if (platform.is.TRIDENT || platform.is.EDGE) {
        if (nodeName === 'svg') {
            if (supports$7.focusSvg) {
                // older Internet Explorers consider <svg> keyboard focusable
                // unless they have focsable="false", but then they wouldn't
                // be focusable and thus not even reach this filter
                return true;
            }
            // elements that have [focusable] are automatically keyboard focusable regardless of the attribute's value
            return element.hasAttribute('focusable') || hasTabbableTabindex;
        }
        if (element.ownerSVGElement) {
            if (supports$7.focusSvgTabindexAttribute && hasTabbableTabindex) {
                return true;
            }
            // elements that have [focusable] are automatically keyboard focusable regardless of the attribute's value
            return element.hasAttribute('focusable');
        }
    }
    if (element.tabIndex === undefined) {
        return Boolean(except.onlyTabbable);
    }
    if (nodeName === 'audio') {
        if (!element.hasAttribute('controls')) {
            // In Internet Explorer the <audio> element is focusable, but not tabbable, and tabIndex property is wrong
            return false;
        }
        else if (platform.is.BLINK) {
            // In Chrome <audio controls tabindex="-1"> remains keyboard focusable
            return true;
        }
    }
    if (nodeName === 'video') {
        if (!element.hasAttribute('controls')) {
            if (platform.is.TRIDENT || platform.is.EDGE) {
                // In Internet Explorer and Edge the <video> element is focusable, but not tabbable, and tabIndex property is wrong
                return false;
            }
        }
        else if (platform.is.BLINK || platform.is.GECKO) {
            // In Chrome and Firefox <video controls tabindex="-1"> remains keyboard focusable
            return true;
        }
    }
    if (nodeName === 'object') {
        if (platform.is.BLINK || platform.is.WEBKIT) {
            // In all Blink and WebKit based browsers <embed> and <object> are never keyboard focusable, even with tabindex="0" set
            return false;
        }
    }
    if (nodeName === 'iframe') {
        // In Internet Explorer all iframes are only focusable
        // In WebKit, Blink and Gecko iframes may be tabbable depending on content.
        // Since we can't reliably investigate iframe documents because of the
        // SameOriginPolicy, we're declaring everything only focusable.
        return false;
    }
    if (!except.scrollable && platform.is.GECKO) {
        // Firefox considers scrollable containers keyboard focusable,
        // even though their tabIndex property is -1
        var _style = window.getComputedStyle(element, null);
        if (hasCssOverflowScroll(_style)) {
            return hasTabbableTabindexOrNone;
        }
    }
    if (platform.is.TRIDENT || platform.is.EDGE) {
        // IE and Edge degrade <area> to script focusable, if the image
        // using the <map> has been given tabindex="-1"
        if (nodeName === 'area') {
            var img = getImageOfArea(element);
            if (img && tabindexValue(img) < 0) {
                return false;
            }
        }
        var _style2 = window.getComputedStyle(element, null);
        if (isUserModifyWritable(_style2)) {
            // prevent being swallowed by the overzealous isScrollableContainer() below
            return element.tabIndex >= 0;
        }
        if (!except.flexbox && hasCssDisplayFlex(_style2)) {
            if (_tabindex !== null) {
                return hasTabbableTabindex;
            }
            return (isFocusRelevantWithoutFlexbox(element) &&
                isTabbableWithoutFlexbox(element));
        }
        // IE considers scrollable containers script focusable only,
        // even though their tabIndex property is 0
        if (isScrollableContainer(element, nodeName)) {
            return false;
        }
        var parent = element.parentElement;
        if (parent) {
            var parentNodeName = parent.nodeName.toLowerCase();
            var parentStyle = window.getComputedStyle(parent, null);
            // IE considers scrollable bodies script focusable only,
            if (isScrollableContainer(parent, nodeName, parentNodeName, parentStyle)) {
                return false;
            }
            // Children of focusable elements with display:flex are focusable in IE10-11,
            // even though their tabIndex property suggests otherwise
            if (hasCssDisplayFlex(parentStyle)) {
                // value of tabindex takes precedence
                return hasTabbableTabindex;
            }
        }
    }
    // https://www.w3.org/WAI/PF/aria-practices/#focus_tabindex
    return element.tabIndex >= 0;
}
// bind exceptions to an iterator callback
isTabbableRules.except = function () {
    var except = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var isTabbable = function isTabbable(context) {
        return isTabbableRules({
            context: context,
            except: except
        });
    };
    isTabbable.rules = isTabbableRules;
    return isTabbable;
};
var isFocusRelevantWithoutFlexbox = isFocusRelevant.rules.except({
    flexbox: true
});
var isTabbableWithoutFlexbox = isTabbableRules.except({ flexbox: true });
// provide isTabbable(context) as default iterator callback
var isTabbable = isTabbableRules.except({});
function queryTabbable() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, includeContext = _ref.includeContext, includeOnlyTabbable = _ref.includeOnlyTabbable, strategy = _ref.strategy;
    var _isTabbable = isTabbable.rules.except({
        onlyTabbable: includeOnlyTabbable
    });
    return queryFocusable({
        context: context,
        includeContext: includeContext,
        includeOnlyTabbable: includeOnlyTabbable,
        strategy: strategy
    }).filter(_isTabbable);
}
// sorts a list of elements according to their order in the DOM
function compareDomPosition(a, b) {
    return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING
        ? -1
        : 1;
}
function sortDomOrder(elements) {
    return elements.sort(compareDomPosition);
}
function getFirstSuccessorOffset(list, target) {
    // find the first element that comes AFTER the target element
    return findIndex(list, function (element) {
        return (target.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_FOLLOWING);
    });
}
function findInsertionOffsets(list, elements, resolveElement) {
    // instead of mutating the elements list directly, remember position and map
    // to inject later, when we can do this more efficiently
    var insertions = [];
    elements.forEach(function (element) {
        var replace = true;
        var offset = list.indexOf(element);
        if (offset === -1) {
            // element is not in target list
            offset = getFirstSuccessorOffset(list, element);
            replace = false;
        }
        if (offset === -1) {
            // there is no successor in the tabsequence,
            // meaning the image must be the last element
            offset = list.length;
        }
        // allow the consumer to replace the injected element
        var injections = nodeArray(resolveElement ? resolveElement(element) : element);
        if (!injections.length) {
            // we can't inject zero elements
            return;
        }
        insertions.push({
            offset: offset,
            replace: replace,
            elements: injections
        });
    });
    return insertions;
}
function insertElementsAtOffsets(list, insertions) {
    // remember the number of elements we have already injected
    // so we account for the caused index offset
    var inserted = 0;
    // make sure that we insert the elements in sequence,
    // otherwise the offset compensation won't work
    insertions.sort(function (a, b) {
        return a.offset - b.offset;
    });
    insertions.forEach(function (insertion) {
        // array.splice has an annoying function signature :(
        var remove = insertion.replace ? 1 : 0;
        var args = [insertion.offset + inserted, remove].concat(insertion.elements);
        list.splice.apply(list, args);
        inserted += insertion.elements.length - remove;
    });
}
function mergeInDomOrder() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, list = _ref.list, elements = _ref.elements, resolveElement = _ref.resolveElement;
    // operate on a copy so we don't mutate the original array
    var _list = list.slice(0);
    // make sure the elements we're injecting are provided in DOM order
    var _elements = nodeArray(elements).slice(0);
    sortDomOrder(_elements);
    // find the offsets within the target array (list) at which to inject
    // each individual element (from elements)
    var insertions = findInsertionOffsets(_list, _elements, resolveElement);
    // actually inject the elements into the target array at the identified positions
    insertElementsAtOffsets(_list, insertions);
    return _list;
}
var _createClass = (function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor)
                descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function (Constructor, protoProps, staticProps) {
        if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
            defineProperties(Constructor, staticProps);
        return Constructor;
    };
})();
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}
var Maps = (function () {
    function Maps(context) {
        _classCallCheck(this, Maps);
        this._document = getDocument(context);
        this.maps = {};
    }
    _createClass(Maps, [
        {
            key: 'getAreasFor',
            value: function getAreasFor(name) {
                if (!this.maps[name]) {
                    // the map is not defined within the context, so we
                    // have to go find it elsewhere in the document
                    this.addMapByName(name);
                }
                return this.maps[name];
            }
        },
        {
            key: 'addMapByName',
            value: function addMapByName(name) {
                var map = getMapByName(name, this._document);
                if (!map) {
                    // if there is no map, the img[usemap] wasn't doing anything anyway
                    return;
                }
                this.maps[map.name] = queryTabbable({ context: map });
            }
        },
        {
            key: 'extractAreasFromList',
            value: function extractAreasFromList(elements) {
                // remove all <area> elements from the elements list,
                // but put them the map for later retrieval
                return elements.filter(function (element) {
                    var nodeName = element.nodeName.toLowerCase();
                    if (nodeName !== 'area') {
                        return true;
                    }
                    var map = element.parentNode;
                    if (!this.maps[map.name]) {
                        this.maps[map.name] = [];
                    }
                    this.maps[map.name].push(element);
                    return false;
                }, this);
            }
        },
    ]);
    return Maps;
})();
function sortArea(elements, context) {
    // images - unless they are focusable themselves, likely not
    // part of the elements list, so we'll have to find them and
    // sort them into the elements list manually
    var usemaps = context.querySelectorAll('img[usemap]');
    var maps = new Maps(context);
    // remove all <area> elements from the elements list,
    // but put them the map for later retrieval
    var _elements = maps.extractAreasFromList(elements);
    if (!usemaps.length) {
        // the context does not contain any <area>s so no need
        // to replace anything, just remove any maps
        return _elements;
    }
    return mergeInDomOrder({
        list: _elements,
        elements: usemaps,
        resolveElement: function resolveElement(image) {
            var name = image.getAttribute('usemap').slice(1);
            return maps.getAreasFor(name);
        }
    });
}
var _createClass$1 = (function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor)
                descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function (Constructor, protoProps, staticProps) {
        if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
            defineProperties(Constructor, staticProps);
        return Constructor;
    };
})();
function _classCallCheck$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}
var Shadows = (function () {
    function Shadows(context, sortElements) {
        _classCallCheck$1(this, Shadows);
        // document context we're working with
        this.context = context;
        // callback that sorts an array of elements
        this.sortElements = sortElements;
        // reference to create unique IDs for each ShadowHost
        this.hostCounter = 1;
        // reference map for child-ShadowHosts of a ShadowHost
        this.inHost = {};
        // reference map for child-ShadowHost of the document
        this.inDocument = [];
        // reference map for ShadowHosts
        this.hosts = {};
        // reference map for tabbable elements of a ShadowHost
        this.elements = {};
    }
    // remember which hosts we have to sort within later
    _createClass$1(Shadows, [
        {
            key: '_registerHost',
            value: function _registerHost(host) {
                if (host._sortingId) {
                    return;
                }
                // make the ShadowHost identifiable (see cleanup() for undo)
                host._sortingId = 'shadow-' + this.hostCounter++;
                this.hosts[host._sortingId] = host;
                // hosts may contain other hosts
                var parentHost = getShadowHost({ context: host });
                if (parentHost) {
                    this._registerHost(parentHost);
                    this._registerHostParent(host, parentHost);
                }
                else {
                    this.inDocument.push(host);
                }
            }
        },
        {
            key: '_registerHostParent',
            value: function _registerHostParent(host, parent) {
                if (!this.inHost[parent._sortingId]) {
                    this.inHost[parent._sortingId] = [];
                }
                this.inHost[parent._sortingId].push(host);
            }
        },
        {
            key: '_registerElement',
            value: function _registerElement(element, host) {
                if (!this.elements[host._sortingId]) {
                    this.elements[host._sortingId] = [];
                }
                this.elements[host._sortingId].push(element);
            }
        },
        {
            key: 'extractElements',
            value: function extractElements(elements) {
                return elements.filter(function (element) {
                    var host = getShadowHost({ context: element });
                    if (!host) {
                        return true;
                    }
                    this._registerHost(host);
                    this._registerElement(element, host);
                    return false;
                }, this);
            }
        },
        {
            key: 'sort',
            value: function sort(elements) {
                var _elements = this._injectHosts(elements);
                _elements = this._replaceHosts(_elements);
                this._cleanup();
                return _elements;
            }
        },
        {
            key: '_injectHosts',
            value: function _injectHosts(elements) {
                Object.keys(this.hosts).forEach(function (_sortingId) {
                    var _list = this.elements[_sortingId];
                    var _elements = this.inHost[_sortingId];
                    var _context = this.hosts[_sortingId].shadowRoot;
                    this.elements[_sortingId] = this._merge(_list, _elements, _context);
                }, this);
                return this._merge(elements, this.inDocument, this.context);
            }
        },
        {
            key: '_merge',
            value: function _merge(list, elements, context) {
                var merged = mergeInDomOrder({
                    list: list,
                    elements: elements
                });
                return this.sortElements(merged, context);
            }
        },
        {
            key: '_replaceHosts',
            value: function _replaceHosts(elements) {
                return mergeInDomOrder({
                    list: elements,
                    elements: this.inDocument,
                    resolveElement: this._resolveHostElement.bind(this)
                });
            }
        },
        {
            key: '_resolveHostElement',
            value: function _resolveHostElement(host) {
                var merged = mergeInDomOrder({
                    list: this.elements[host._sortingId],
                    elements: this.inHost[host._sortingId],
                    resolveElement: this._resolveHostElement.bind(this)
                });
                var _tabindex = tabindexValue(host);
                if (_tabindex !== null && _tabindex > -1) {
                    return [host].concat(merged);
                }
                return merged;
            }
        },
        {
            key: '_cleanup',
            value: function _cleanup() {
                // remove those identifers we put on the ShadowHost to avoid using Map()
                Object.keys(this.hosts).forEach(function (key) {
                    delete this.hosts[key]._sortingId;
                }, this);
            }
        },
    ]);
    return Shadows;
})();
function sortShadowed(elements, context, sortElements) {
    var shadows = new Shadows(context, sortElements);
    var _elements = shadows.extractElements(elements);
    if (_elements.length === elements.length) {
        // no shadowed content found, no need to continue
        return sortElements(elements);
    }
    return shadows.sort(_elements);
}
function sortTabindex(elements) {
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement.tabIndex
    // elements with tabIndex "0" (including tabbableElements without tabIndex) should be navigated in the order they appear.
    // elements with a positive tabIndex:
    //   Elements that have identical tabIndexes should be navigated in the order they appear.
    //   Navigation proceeds from the lowest tabIndex to the highest tabIndex.
    // NOTE: sort implementation may be unstable and thus mess up DOM order,
    // that's why we build a map that's being sorted instead. If we were able to rely
    // on a stable sorting algorithm, sortTabindex() could be as simple as
    // elements.sort(function(a, b) { return a.tabIndex - b.tabIndex; });
    // at this time Chrome does not use a stable sorting algorithm
    // see http://blog.rodneyrehm.de/archives/14-Sorting-Were-Doing-It-Wrong.html#stability
    // NOTE: compareDocumentPosition seemed like more overhead than just sorting this with buckets
    // https://developer.mozilla.org/en-US/docs/Web/API/Node.compareDocumentPosition
    var map = {};
    var indexes = [];
    var normal = elements.filter(function (element) {
        // in Trident and Gecko SVGElement does not know about the tabIndex property
        var tabIndex = element.tabIndex;
        if (tabIndex === undefined) {
            tabIndex = tabindexValue(element);
        }
        // extract elements that don't need sorting
        if (tabIndex <= 0 || tabIndex === null || tabIndex === undefined) {
            return true;
        }
        if (!map[tabIndex]) {
            // create sortable bucket for dom-order-preservation of elements with the same tabIndex
            map[tabIndex] = [];
            // maintain a list of unique tabIndexes
            indexes.push(tabIndex);
        }
        // sort element into the proper bucket
        map[tabIndex].push(element);
        // element moved to sorting map, so not "normal" anymore
        return false;
    });
    // sort the tabindex ascending,
    // then resolve them to their appropriate buckets,
    // then flatten the array of arrays to an array
    var _elements = indexes
        .sort()
        .map(function (tabIndex) {
        return map[tabIndex];
    })
        .reduceRight(function (previous, current) {
        return current.concat(previous);
    }, normal);
    return _elements;
}
var supports$8 = void 0;
function moveContextToBeginning(elements, context) {
    var pos = elements.indexOf(context);
    if (pos > 0) {
        var tmp = elements.splice(pos, 1);
        return tmp.concat(elements);
    }
    return elements;
}
function sortElements(elements, _context) {
    if (supports$8.tabsequenceAreaAtImgPosition) {
        // Some browsers sort <area> in DOM order, some place the <area>s
        // where the <img> referecing them would've been in DOM order.
        // https://github.com/medialize/ally.js/issues/5
        elements = sortArea(elements, _context);
    }
    elements = sortTabindex(elements);
    return elements;
}
function queryTabsequence() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, includeContext = _ref.includeContext, includeOnlyTabbable = _ref.includeOnlyTabbable, strategy = _ref.strategy;
    if (!supports$8) {
        supports$8 = _supports();
    }
    var _context = nodeArray(context)[0] || document.documentElement;
    var elements = queryTabbable({
        context: _context,
        includeContext: includeContext,
        includeOnlyTabbable: includeOnlyTabbable,
        strategy: strategy
    });
    if (document.body.createShadowRoot && platform.is.BLINK) {
        // sort tabindex localized to shadow dom
        // see https://github.com/medialize/ally.js/issues/6
        elements = sortShadowed(elements, _context, sortElements);
    }
    else {
        elements = sortElements(elements, _context);
    }
    if (includeContext) {
        // if we include the context itself, it has to be the first
        // element of the sequence
        elements = moveContextToBeginning(elements, _context);
    }
    return elements;
}
// codes mostly cloned from https://github.com/keithamus/jwerty/blob/master/jwerty.js
// deliberately not exposing characters like <,.-#* because they vary *wildly*
// across keyboard layouts and may cause various problems
// (e.g. "*" is "Shift +" on a German Mac keyboard)
// (e.g. "@" is "Alt L" on a German Mac keyboard)
var keycode = {
    // Element Focus
    tab: 9,
    // Navigation
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    pageUp: 33,
    'page-up': 33,
    pageDown: 34,
    'page-down': 34,
    end: 35,
    home: 36,
    // Action
    enter: 13,
    escape: 27,
    space: 32,
    // Modifier
    shift: 16,
    capsLock: 20,
    'caps-lock': 20,
    ctrl: 17,
    alt: 18,
    meta: 91,
    // in firefox: 224
    // on mac (chrome): meta-left=91, meta-right=93
    // on win (IE11): meta-left=91, meta-right=92
    pause: 19,
    // Content Manipulation
    insert: 45,
    "delete": 46,
    backspace: 8,
    // the same logical key may be identified through different keyCodes
    _alias: {
        91: [92, 93, 224]
    }
};
// Function keys (112 - 137)
// NOTE: not every keyboard knows F13+
for (var n = 1; n < 26; n++) {
    keycode['f' + n] = n + 111;
}
// Number keys (48-57, numpad 96-105)
// NOTE: not every keyboard knows num-0+
for (var _n = 0; _n < 10; _n++) {
    var code = _n + 48;
    var numCode = _n + 96;
    keycode[_n] = code;
    keycode['num-' + _n] = numCode;
    keycode._alias[code] = [numCode];
}
// Latin characters (65 - 90)
for (var _n2 = 0; _n2 < 26; _n2++) {
    var _code = _n2 + 65;
    var name$1 = String.fromCharCode(_code).toLowerCase();
    keycode[name$1] = _code;
}
var modifier = {
    alt: 'altKey',
    ctrl: 'ctrlKey',
    meta: 'metaKey',
    shift: 'shiftKey'
};
var modifierSequence = Object.keys(modifier).map(function (name) {
    return modifier[name];
});
function createExpectedModifiers(ignoreModifiers) {
    var value = ignoreModifiers ? null : false;
    return {
        altKey: value,
        ctrlKey: value,
        metaKey: value,
        shiftKey: value
    };
}
function resolveModifiers(modifiers) {
    var ignoreModifiers = modifiers.indexOf('*') !== -1;
    var expected = createExpectedModifiers(ignoreModifiers);
    modifiers.forEach(function (token) {
        if (token === '*') {
            // we've already covered the all-in operator
            return;
        }
        // we want the modifier pressed
        var value = true;
        var operator = token.slice(0, 1);
        if (operator === '?') {
            // we don't care if the modifier is pressed
            value = null;
        }
        else if (operator === '!') {
            // we do not want the modifier pressed
            value = false;
        }
        if (value !== true) {
            // compensate for the modifier's operator
            token = token.slice(1);
        }
        var propertyName = modifier[token];
        if (!propertyName) {
            throw new TypeError('Unknown modifier "' + token + '"');
        }
        expected[propertyName] = value;
    });
    return expected;
}
function resolveKey(key) {
    var code = keycode[key] || parseInt(key, 10);
    if (!code || typeof code !== 'number' || isNaN(code)) {
        throw new TypeError('Unknown key "' + key + '"');
    }
    return [code].concat(keycode._alias[code] || []);
}
function matchModifiers(expected, event) {
    // returns true on match
    return !modifierSequence.some(function (prop) {
        // returns true on mismatch
        return (typeof expected[prop] === 'boolean' &&
            Boolean(event[prop]) !== expected[prop]);
    });
}
function keyBinding(text) {
    return text.split(/\s+/).map(function (_text) {
        var tokens = _text.split('+');
        var _modifiers = resolveModifiers(tokens.slice(0, -1));
        var _keyCodes = resolveKey(tokens.slice(-1));
        return {
            keyCodes: _keyCodes,
            modifiers: _modifiers,
            matchModifiers: matchModifiers.bind(null, _modifiers)
        };
    });
}
// Node.compareDocumentPosition is available since IE9
// see https://developer.mozilla.org/en-US/docs/Web/API/Node.compareDocumentPosition
// callback returns true when element is contained by parent or is the parent suited for use with Array.some()
/*
  USAGE:
    var isChildOf = getParentComparator({parent: someNode});
    listOfElements.some(isChildOf)
*/
function getParentComparator() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, parent = _ref.parent, element = _ref.element, includeSelf = _ref.includeSelf;
    if (parent) {
        return function isChildOf(node) {
            return Boolean((includeSelf && node === parent) ||
                parent.compareDocumentPosition(node) &
                    Node.DOCUMENT_POSITION_CONTAINED_BY);
        };
    }
    else if (element) {
        return function isParentOf(node) {
            return Boolean((includeSelf && element === node) ||
                node.compareDocumentPosition(element) &
                    Node.DOCUMENT_POSITION_CONTAINED_BY);
        };
    }
    throw new TypeError('util/compare-position#getParentComparator required either options.parent or options.element');
}
// Bug 286933 - Key events in the autocomplete popup should be hidden from page scripts
// @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=286933
function whenKey() {
    var map = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var bindings = {};
    var context = nodeArray(map.context)[0] || document.documentElement;
    delete map.context;
    var filter = nodeArray(map.filter);
    delete map.filter;
    var mapKeys = Object.keys(map);
    if (!mapKeys.length) {
        throw new TypeError('when/key requires at least one option key');
    }
    var registerBinding = function registerBinding(event) {
        event.keyCodes.forEach(function (code) {
            if (!bindings[code]) {
                bindings[code] = [];
            }
            bindings[code].push(event);
        });
    };
    mapKeys.forEach(function (text) {
        if (typeof map[text] !== 'function') {
            throw new TypeError('when/key requires option["' + text + '"] to be a function');
        }
        var addCallback = function addCallback(event) {
            event.callback = map[text];
            return event;
        };
        keyBinding(text).map(addCallback).forEach(registerBinding);
    });
    var handleKeyDown = function handleKeyDown(event) {
        if (event.defaultPrevented) {
            return;
        }
        if (filter.length) {
            // ignore elements within the exempted sub-trees
            var isParentOfElement = getParentComparator({
                element: event.target,
                includeSelf: true
            });
            if (filter.some(isParentOfElement)) {
                return;
            }
        }
        var key = event.keyCode || event.which;
        if (!bindings[key]) {
            return;
        }
        bindings[key].forEach(function (_event) {
            if (!_event.matchModifiers(event)) {
                return;
            }
            _event.callback.call(context, event, disengage);
        });
    };
    context.addEventListener('keydown', handleKeyDown, false);
    var disengage = function disengage() {
        context.removeEventListener('keydown', handleKeyDown, false);
    };
    return { disengage: disengage };
}
function default_1(_a) {
    var context = (_a === void 0 ? {} : _a).context;
    if (!context) {
        context = document.documentElement;
    }
    // Make sure the supports tests are run before intercepting the Tab key,
    // or IE10 and IE11 will fail to process the first Tab key event. Not
    // limiting this warm-up to IE because it may be a problem elsewhere, too.
    queryTabsequence();
    return whenKey({
        // Safari on OSX may require ALT+TAB to reach links,
        // see https://github.com/medialize/ally.js/issues/146
        '?alt+?shift+tab': function altShiftTab(event) {
            // we're completely taking over the Tab key handling
            event.preventDefault();
            var sequence = queryTabsequence({
                context: context
            });
            var backward = event.shiftKey;
            var first = sequence[0];
            var last = sequence[sequence.length - 1];
            // wrap around first to last, last to first
            var source = backward ? first : last;
            var target = backward ? last : first;
            if (isActiveElement(source)) {
                target.focus();
                return;
            }
            // find current position in tabsequence
            var currentIndex = void 0;
            var found = sequence.some(function (element, index) {
                if (!isActiveElement(element)) {
                    return false;
                }
                currentIndex = index;
                return true;
            });
            if (!found) {
                // redirect to first as we're not in our tabsequence
                first.focus();
                return;
            }
            // shift focus to previous/next element in the sequence
            var offset = backward ? -1 : 1;
            sequence[currentIndex + offset].focus();
        }
    });
}
exports["default"] = default_1;
//# sourceMappingURL=maintain--tab-focus.js.map

/***/ }),

/***/ "./node_modules/@next/react-dev-overlay/lib/internal/components/Overlay/styles.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@next/react-dev-overlay/lib/internal/components/Overlay/styles.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var noop_template_1 = __webpack_require__(/*! ../../helpers/noop-template */ "./node_modules/@next/react-dev-overlay/lib/internal/helpers/noop-template.js");
var styles = noop_template_1.noop(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  [data-nextjs-dialog-overlay] {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    overflow: auto;\n    z-index: 9000;\n\n    display: flex;\n    align-content: center;\n    align-items: center;\n    flex-direction: column;\n    padding: 10vh 15px 0;\n  }\n\n  @media (max-height: 812px) {\n    [data-nextjs-dialog-overlay] {\n      padding: 15px 15px 0;\n    }\n  }\n\n  [data-nextjs-dialog-backdrop] {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: rgba(17, 17, 17, 0.2);\n    pointer-events: all;\n    z-index: -1;\n  }\n\n  [data-nextjs-dialog-backdrop-fixed] {\n    cursor: not-allowed;\n    -webkit-backdrop-filter: blur(8px);\n    backdrop-filter: blur(8px);\n  }\n"], ["\n  [data-nextjs-dialog-overlay] {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    overflow: auto;\n    z-index: 9000;\n\n    display: flex;\n    align-content: center;\n    align-items: center;\n    flex-direction: column;\n    padding: 10vh 15px 0;\n  }\n\n  @media (max-height: 812px) {\n    [data-nextjs-dialog-overlay] {\n      padding: 15px 15px 0;\n    }\n  }\n\n  [data-nextjs-dialog-backdrop] {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: rgba(17, 17, 17, 0.2);\n    pointer-events: all;\n    z-index: -1;\n  }\n\n  [data-nextjs-dialog-backdrop-fixed] {\n    cursor: not-allowed;\n    -webkit-backdrop-filter: blur(8px);\n    backdrop-filter: blur(8px);\n  }\n"])));
exports.styles = styles;
var templateObject_1;
//# sourceMappingURL=styles.js.map

/***/ }),

/***/ "./node_modules/@next/react-dev-overlay/lib/internal/components/ShadowPortal.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@next/react-dev-overlay/lib/internal/components/ShadowPortal.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.module.js"));
var react_dom_1 = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.module.js");
exports.ShadowPortal = function Portal(_a) {
    var children = _a.children;
    var mountNode = React.useRef(null);
    var portalNode = React.useRef(null);
    var shadowNode = React.useRef(null);
    var _b = __read(React.useState(), 2), forceUpdate = _b[1];
    React.useLayoutEffect(function () {
        var ownerDocument = mountNode.current.ownerDocument;
        portalNode.current = ownerDocument.createElement('nextjs-portal');
        shadowNode.current = portalNode.current.attachShadow({ mode: 'open' });
        ownerDocument.body.appendChild(portalNode.current);
        forceUpdate({});
        return function () {
            if (portalNode.current && portalNode.current.ownerDocument) {
                portalNode.current.ownerDocument.body.removeChild(portalNode.current);
            }
        };
    }, []);
    return shadowNode.current ? (react_dom_1.createPortal(children, shadowNode.current)) : (React.createElement("span", { ref: mountNode }));
};
//# sourceMappingURL=ShadowPortal.js.map

/***/ }),

/***/ "./node_modules/@next/react-dev-overlay/lib/internal/components/Terminal/Terminal.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@next/react-dev-overlay/lib/internal/components/Terminal/Terminal.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var anser_1 = __importDefault(__webpack_require__(/*! anser */ "./node_modules/anser/lib/index.js"));
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.module.js"));
exports.Terminal = function Terminal(_a) {
    var content = _a.content;
    var decoded = React.useMemo(function () {
        return anser_1["default"].ansiToJson(content, {
            json: true,
            use_classes: true,
            remove_empty: true
        });
    }, [content]);
    return (React.createElement("div", { "data-nextjs-terminal": true },
        React.createElement("pre", null, decoded.map(function (entry, index) { return (React.createElement("span", { key: "terminal-entry-" + index, style: __assign({ color: entry.fg ? "var(--color-" + entry.fg + ")" : undefined }, (entry.decoration === 'bold'
                ? { fontWeight: 800 }
                : entry.decoration === 'italic'
                    ? { fontStyle: 'italic' }
                    : undefined)) }, entry.content)); }))));
};
//# sourceMappingURL=Terminal.js.map

/***/ }),

/***/ "./node_modules/@next/react-dev-overlay/lib/internal/components/Terminal/index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@next/react-dev-overlay/lib/internal/components/Terminal/index.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Terminal_1 = __webpack_require__(/*! ./Terminal */ "./node_modules/@next/react-dev-overlay/lib/internal/components/Terminal/Terminal.js");
exports.Terminal = Terminal_1.Terminal;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@next/react-dev-overlay/lib/internal/components/Terminal/styles.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@next/react-dev-overlay/lib/internal/components/Terminal/styles.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var noop_template_1 = __webpack_require__(/*! ../../helpers/noop-template */ "./node_modules/@next/react-dev-overlay/lib/internal/helpers/noop-template.js");
var styles = noop_template_1.noop(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  [data-nextjs-terminal] {\n    border-radius: var(--size-gap-half);\n    background-color: var(--color-ansi-bg);\n    color: var(--color-ansi-fg);\n  }\n  [data-nextjs-terminal]::selection,\n  [data-nextjs-terminal] *::selection {\n    background-color: var(--color-ansi-selection);\n  }\n  [data-nextjs-terminal] * {\n    color: inherit;\n    background-color: transparent;\n    font-family: var(--font-stack-monospace);\n  }\n  [data-nextjs-terminal] > * {\n    margin: 0;\n    padding: calc(var(--size-gap) + var(--size-gap-half))\n      calc(var(--size-gap-double) + var(--size-gap-half));\n  }\n\n  [data-nextjs-terminal] pre {\n    white-space: pre-wrap;\n    word-break: break-word;\n  }\n"], ["\n  [data-nextjs-terminal] {\n    border-radius: var(--size-gap-half);\n    background-color: var(--color-ansi-bg);\n    color: var(--color-ansi-fg);\n  }\n  [data-nextjs-terminal]::selection,\n  [data-nextjs-terminal] *::selection {\n    background-color: var(--color-ansi-selection);\n  }\n  [data-nextjs-terminal] * {\n    color: inherit;\n    background-color: transparent;\n    font-family: var(--font-stack-monospace);\n  }\n  [data-nextjs-terminal] > * {\n    margin: 0;\n    padding: calc(var(--size-gap) + var(--size-gap-half))\n      calc(var(--size-gap-double) + var(--size-gap-half));\n  }\n\n  [data-nextjs-terminal] pre {\n    white-space: pre-wrap;\n    word-break: break-word;\n  }\n"])));
exports.styles = styles;
var templateObject_1;
//# sourceMappingURL=styles.js.map

/***/ }),

/***/ "./node_modules/@next/react-dev-overlay/lib/internal/components/Toast/Toast.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@next/react-dev-overlay/lib/internal/components/Toast/Toast.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.module.js"));
exports.Toast = function Toast(_a) {
    var onClick = _a.onClick, children = _a.children, className = _a.className;
    return (React.createElement("div", { "data-nextjs-toast": true, onClick: onClick, className: className },
        React.createElement("div", { "data-nextjs-toast-wrapper": true }, children)));
};
//# sourceMappingURL=Toast.js.map

/***/ }),

/***/ "./node_modules/@next/react-dev-overlay/lib/internal/components/Toast/index.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@next/react-dev-overlay/lib/internal/components/Toast/index.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var styles_1 = __webpack_require__(/*! ./styles */ "./node_modules/@next/react-dev-overlay/lib/internal/components/Toast/styles.js");
exports.styles = styles_1.styles;
var Toast_1 = __webpack_require__(/*! ./Toast */ "./node_modules/@next/react-dev-overlay/lib/internal/components/Toast/Toast.js");
exports.Toast = Toast_1.Toast;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@next/react-dev-overlay/lib/internal/components/Toast/styles.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@next/react-dev-overlay/lib/internal/components/Toast/styles.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var noop_template_1 = __webpack_require__(/*! ../../helpers/noop-template */ "./node_modules/@next/react-dev-overlay/lib/internal/helpers/noop-template.js");
var styles = noop_template_1.noop(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  [data-nextjs-toast] {\n    position: fixed;\n    bottom: var(--size-gap-double);\n    left: var(--size-gap-double);\n    max-width: 420px;\n    z-index: 9000;\n  }\n\n  @media (max-width: 440px) {\n    [data-nextjs-toast] {\n      max-width: 90vw;\n      left: 5vw;\n    }\n  }\n\n  [data-nextjs-toast-wrapper] {\n    padding: 16px;\n    border-radius: var(--size-gap-half);\n    font-weight: 500;\n    color: var(--color-ansi-bright-white);\n    background-color: var(--color-ansi-red);\n    box-shadow: 0px var(--size-gap-double) var(--size-gap-quad)\n      rgba(0, 0, 0, 0.25);\n  }\n"], ["\n  [data-nextjs-toast] {\n    position: fixed;\n    bottom: var(--size-gap-double);\n    left: var(--size-gap-double);\n    max-width: 420px;\n    z-index: 9000;\n  }\n\n  @media (max-width: 440px) {\n    [data-nextjs-toast] {\n      max-width: 90vw;\n      left: 5vw;\n    }\n  }\n\n  [data-nextjs-toast-wrapper] {\n    padding: 16px;\n    border-radius: var(--size-gap-half);\n    font-weight: 500;\n    color: var(--color-ansi-bright-white);\n    background-color: var(--color-ansi-red);\n    box-shadow: 0px var(--size-gap-double) var(--size-gap-quad)\n      rgba(0, 0, 0, 0.25);\n  }\n"])));
exports.styles = styles;
var templateObject_1;
//# sourceMappingURL=styles.js.map

/***/ }),

/***/ "./node_modules/@next/react-dev-overlay/lib/internal/container/BuildError.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@next/react-dev-overlay/lib/internal/container/BuildError.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.module.js"));
var Dialog_1 = __webpack_require__(/*! ../components/Dialog */ "./node_modules/@next/react-dev-overlay/lib/internal/components/Dialog/index.js");
var Overlay_1 = __webpack_require__(/*! ../components/Overlay */ "./node_modules/@next/react-dev-overlay/lib/internal/components/Overlay/index.js");
var Terminal_1 = __webpack_require__(/*! ../components/Terminal */ "./node_modules/@next/react-dev-overlay/lib/internal/components/Terminal/index.js");
var noop_template_1 = __webpack_require__(/*! ../helpers/noop-template */ "./node_modules/@next/react-dev-overlay/lib/internal/helpers/noop-template.js");
exports.BuildError = function BuildError(_a) {
    var message = _a.message;
    var noop = React.useCallback(function () { }, []);
    return (React.createElement(Overlay_1.Overlay, { fixed: true },
        React.createElement(Dialog_1.Dialog, { type: "error", "aria-labelledby": "nextjs__container_build_error_label", "aria-describedby": "nextjs__container_build_error_desc", onClose: noop },
            React.createElement(Dialog_1.DialogContent, null,
                React.createElement(Dialog_1.DialogHeader, { className: "nextjs-container-build-error-header" },
                    React.createElement("h4", { id: "nextjs__container_build_error_label" }, "Failed to compile")),
                React.createElement(Dialog_1.DialogBody, { className: "nextjs-container-build-error-body" },
                    React.createElement(Terminal_1.Terminal, { content: message }),
                    React.createElement("footer", null,
                        React.createElement("p", { id: "nextjs__container_build_error_desc" },
                            React.createElement("small", null, "This error occurred during the build process and can only be dismissed by fixing the error."))))))));
};
exports.styles = noop_template_1.noop(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .nextjs-container-build-error-header > h4 {\n    line-height: 1.5;\n    margin: 0;\n    padding: 0;\n  }\n\n  .nextjs-container-build-error-body footer {\n    margin-top: var(--size-gap);\n  }\n  .nextjs-container-build-error-body footer p {\n    margin: 0;\n  }\n\n  .nextjs-container-build-error-body small {\n    color: #757575;\n  }\n"], ["\n  .nextjs-container-build-error-header > h4 {\n    line-height: 1.5;\n    margin: 0;\n    padding: 0;\n  }\n\n  .nextjs-container-build-error-body footer {\n    margin-top: var(--size-gap);\n  }\n  .nextjs-container-build-error-body footer p {\n    margin: 0;\n  }\n\n  .nextjs-container-build-error-body small {\n    color: #757575;\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=BuildError.js.map

/***/ }),

/***/ "./node_modules/@next/react-dev-overlay/lib/internal/container/Errors.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@next/react-dev-overlay/lib/internal/container/Errors.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.module.js"));
var bus_1 = __webpack_require__(/*! ../bus */ "./node_modules/@next/react-dev-overlay/lib/internal/bus.js");
var Dialog_1 = __webpack_require__(/*! ../components/Dialog */ "./node_modules/@next/react-dev-overlay/lib/internal/components/Dialog/index.js");
var LeftRightDialogHeader_1 = __webpack_require__(/*! ../components/LeftRightDialogHeader */ "./node_modules/@next/react-dev-overlay/lib/internal/components/LeftRightDialogHeader/index.js");
var Overlay_1 = __webpack_require__(/*! ../components/Overlay */ "./node_modules/@next/react-dev-overlay/lib/internal/components/Overlay/index.js");
var Toast_1 = __webpack_require__(/*! ../components/Toast */ "./node_modules/@next/react-dev-overlay/lib/internal/components/Toast/index.js");
var nodeStackFrames_1 = __webpack_require__(/*! ../helpers/nodeStackFrames */ "./node_modules/@next/react-dev-overlay/lib/internal/helpers/nodeStackFrames.js");
var noop_template_1 = __webpack_require__(/*! ../helpers/noop-template */ "./node_modules/@next/react-dev-overlay/lib/internal/helpers/noop-template.js");
var stack_frame_1 = __webpack_require__(/*! ../helpers/stack-frame */ "./node_modules/@next/react-dev-overlay/lib/internal/helpers/stack-frame.js");
var RuntimeError_1 = __webpack_require__(/*! ./RuntimeError */ "./node_modules/@next/react-dev-overlay/lib/internal/container/RuntimeError.js");
function getErrorSignature(ev) {
    var event = ev.event;
    switch (event.type) {
        case bus_1.TYPE_UNHANDLED_ERROR:
        case bus_1.TYPE_UNHANDLED_REJECTION: {
            return event.reason.name + "::" + event.reason.message + "::" + event.reason.stack;
        }
        default: {
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    var _ = event;
    return '';
}
var HotlinkedText = function HotlinkedText(props) {
    var text = props.text;
    var linkRegex = /https?:\/\/[^\s/$.?#].[^\s"]*/i;
    return (React.createElement(React.Fragment, null, linkRegex.test(text)
        ? text.split(' ').map(function (word, index, array) {
            if (linkRegex.test(word)) {
                return (React.createElement(React.Fragment, { key: "link-" + index },
                    React.createElement("a", { href: word }, word),
                    index === array.length - 1 ? '' : ' '));
            }
            return index === array.length - 1 ? (React.createElement(React.Fragment, { key: "text-" + index }, word)) : (React.createElement(React.Fragment, { key: "text-" + index },
                word,
                " "));
        })
        : text));
};
function getErrorByType(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var id, event, _a, _b, _;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    id = ev.id, event = ev.event;
                    _a = event.type;
                    switch (_a) {
                        case bus_1.TYPE_UNHANDLED_ERROR: return [3 /*break*/, 1];
                        case bus_1.TYPE_UNHANDLED_REJECTION: return [3 /*break*/, 1];
                    }
                    return [3 /*break*/, 3];
                case 1:
                    _b = {
                        id: id,
                        runtime: true,
                        error: event.reason
                    };
                    return [4 /*yield*/, stack_frame_1.getOriginalStackFrames(nodeStackFrames_1.isNodeError(event.reason), event.frames)];
                case 2: return [2 /*return*/, (_b.frames = _c.sent(),
                        _b)];
                case 3:
                    {
                        return [3 /*break*/, 4];
                    }
                    _c.label = 4;
                case 4:
                    _ = event;
                    throw new Error('type system invariant violation');
            }
        });
    });
}
exports.Errors = function Errors(_a) {
    var errors = _a.errors;
    var _b = __read(React.useState({}), 2), lookups = _b[0], setLookups = _b[1];
    var _c = __read(React.useMemo(function () {
        var ready = [];
        var next = null;
        // Ensure errors are displayed in the order they occurred in:
        for (var idx = 0; idx < errors.length; ++idx) {
            var e = errors[idx];
            var id = e.id;
            if (id in lookups) {
                ready.push(lookups[id]);
                continue;
            }
            // Check for duplicate errors
            if (idx > 0) {
                var prev = errors[idx - 1];
                if (getErrorSignature(prev) === getErrorSignature(e)) {
                    continue;
                }
            }
            next = e;
            break;
        }
        return [ready, next];
    }, [errors, lookups]), 2), readyErrors = _c[0], nextError = _c[1];
    var isLoading = React.useMemo(function () {
        return readyErrors.length < 1 && Boolean(errors.length);
    }, [errors.length, readyErrors.length]);
    React.useEffect(function () {
        if (nextError == null) {
            return;
        }
        var mounted = true;
        getErrorByType(nextError).then(function (resolved) {
            // We don't care if the desired error changed while we were resolving,
            // thus we're not tracking it using a ref. Once the work has been done,
            // we'll store it.
            if (mounted) {
                setLookups(function (m) {
                    var _a;
                    return (__assign(__assign({}, m), (_a = {}, _a[resolved.id] = resolved, _a)));
                });
            }
        }, function () {
            // TODO: handle this, though an edge case
        });
        return function () {
            mounted = false;
        };
    }, [nextError]);
    var _d = __read(React.useState(false), 2), isMinimized = _d[0], setMinimized = _d[1];
    var _e = __read(React.useState(0), 2), activeIdx = _e[0], setActiveIndex = _e[1];
    var previous = React.useCallback(function (e) {
        e === null || e === void 0 ? void 0 : e.preventDefault();
        setActiveIndex(function (v) { return Math.max(0, v - 1); });
    }, []);
    var next = React.useCallback(function (e) {
        e === null || e === void 0 ? void 0 : e.preventDefault();
        setActiveIndex(function (v) {
            return Math.max(0, Math.min(readyErrors.length - 1, v + 1));
        });
    }, [readyErrors.length]);
    var activeError = React.useMemo(function () { var _a; return (_a = readyErrors[activeIdx]) !== null && _a !== void 0 ? _a : null; }, [activeIdx, readyErrors]);
    // Reset component state when there are no errors to be displayed.
    // This should never happen, but lets handle it.
    React.useEffect(function () {
        if (errors.length < 1) {
            setLookups({});
            setMinimized(false);
            setActiveIndex(0);
        }
    }, [errors.length]);
    var minimize = React.useCallback(function (e) {
        e === null || e === void 0 ? void 0 : e.preventDefault();
        setMinimized(true);
    }, []);
    var reopen = React.useCallback(function (e) {
        e === null || e === void 0 ? void 0 : e.preventDefault();
        setMinimized(false);
    }, []);
    // This component shouldn't be rendered with no errors, but if it is, let's
    // handle it gracefully by rendering nothing.
    if (errors.length < 1 || activeError == null) {
        return null;
    }
    if (isLoading) {
        // TODO: better loading state
        return React.createElement(Overlay_1.Overlay, null);
    }
    if (isMinimized) {
        return (React.createElement(Toast_1.Toast, { className: "nextjs-toast-errors-parent", onClick: reopen },
            React.createElement("div", { className: "nextjs-toast-errors" },
                React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
                    React.createElement("circle", { cx: "12", cy: "12", r: "10" }),
                    React.createElement("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
                    React.createElement("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })),
                React.createElement("span", null,
                    readyErrors.length,
                    " error",
                    readyErrors.length > 1 ? 's' : ''))));
    }
    var isServerError = nodeStackFrames_1.isNodeError(activeError.error);
    return (React.createElement(Overlay_1.Overlay, null,
        React.createElement(Dialog_1.Dialog, { type: "error", "aria-labelledby": "nextjs__container_errors_label", "aria-describedby": "nextjs__container_errors_desc", onClose: isServerError ? undefined : minimize },
            React.createElement(Dialog_1.DialogContent, null,
                React.createElement(Dialog_1.DialogHeader, { className: "nextjs-container-errors-header" },
                    React.createElement(LeftRightDialogHeader_1.LeftRightDialogHeader, { previous: activeIdx > 0 ? previous : null, next: activeIdx < readyErrors.length - 1 ? next : null, close: isServerError ? undefined : minimize },
                        React.createElement("small", null,
                            React.createElement("span", null, activeIdx + 1),
                            " of",
                            ' ',
                            React.createElement("span", null, readyErrors.length),
                            " unhandled error",
                            readyErrors.length < 2 ? '' : 's')),
                    React.createElement("h1", { id: "nextjs__container_errors_label" }, isServerError ? 'Server Error' : 'Unhandled Runtime Error'),
                    React.createElement("p", { id: "nextjs__container_errors_desc" },
                        activeError.error.name,
                        ":",
                        ' ',
                        React.createElement(HotlinkedText, { text: activeError.error.message })),
                    isServerError ? (React.createElement("div", null,
                        React.createElement("small", null, "This error happened while generating the page. Any console logs will be displayed in the terminal window."))) : undefined),
                React.createElement(Dialog_1.DialogBody, { className: "nextjs-container-errors-body" },
                    React.createElement(RuntimeError_1.RuntimeError, { key: activeError.id.toString(), error: activeError }))))));
};
exports.styles = noop_template_1.noop(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .nextjs-container-errors-header > h1 {\n    font-size: var(--size-font-big);\n    line-height: var(--size-font-bigger);\n    font-weight: bold;\n    margin: 0;\n    margin-top: calc(var(--size-gap-double) + var(--size-gap-half));\n  }\n  .nextjs-container-errors-header small {\n    font-size: var(--size-font-small);\n    color: var(--color-accents-1);\n    margin-left: var(--size-gap-double);\n  }\n  .nextjs-container-errors-header small > span {\n    font-family: var(--font-stack-monospace);\n  }\n  .nextjs-container-errors-header > p {\n    font-family: var(--font-stack-monospace);\n    font-size: var(--size-font-small);\n    line-height: var(--size-font-big);\n    font-weight: bold;\n    margin: 0;\n    margin-top: var(--size-gap-half);\n    color: var(--color-ansi-red);\n    white-space: pre-wrap;\n  }\n  .nextjs-container-errors-header > div > small {\n    margin: 0;\n    margin-top: var(--size-gap-half);\n  }\n  .nextjs-container-errors-header > p > a {\n    color: var(--color-ansi-red);\n  }\n\n  .nextjs-container-errors-body > h5:not(:first-child) {\n    margin-top: calc(var(--size-gap-double) + var(--size-gap));\n  }\n  .nextjs-container-errors-body > h5 {\n    margin-bottom: var(--size-gap);\n  }\n\n  .nextjs-toast-errors-parent {\n    cursor: pointer;\n    transition: transform 0.2s ease;\n  }\n  .nextjs-toast-errors-parent:hover {\n    transform: scale(1.1);\n  }\n  .nextjs-toast-errors {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n  }\n  .nextjs-toast-errors > svg {\n    margin-right: var(--size-gap);\n  }\n"], ["\n  .nextjs-container-errors-header > h1 {\n    font-size: var(--size-font-big);\n    line-height: var(--size-font-bigger);\n    font-weight: bold;\n    margin: 0;\n    margin-top: calc(var(--size-gap-double) + var(--size-gap-half));\n  }\n  .nextjs-container-errors-header small {\n    font-size: var(--size-font-small);\n    color: var(--color-accents-1);\n    margin-left: var(--size-gap-double);\n  }\n  .nextjs-container-errors-header small > span {\n    font-family: var(--font-stack-monospace);\n  }\n  .nextjs-container-errors-header > p {\n    font-family: var(--font-stack-monospace);\n    font-size: var(--size-font-small);\n    line-height: var(--size-font-big);\n    font-weight: bold;\n    margin: 0;\n    margin-top: var(--size-gap-half);\n    color: var(--color-ansi-red);\n    white-space: pre-wrap;\n  }\n  .nextjs-container-errors-header > div > small {\n    margin: 0;\n    margin-top: var(--size-gap-half);\n  }\n  .nextjs-container-errors-header > p > a {\n    color: var(--color-ansi-red);\n  }\n\n  .nextjs-container-errors-body > h5:not(:first-child) {\n    margin-top: calc(var(--size-gap-double) + var(--size-gap));\n  }\n  .nextjs-container-errors-body > h5 {\n    margin-bottom: var(--size-gap);\n  }\n\n  .nextjs-toast-errors-parent {\n    cursor: pointer;\n    transition: transform 0.2s ease;\n  }\n  .nextjs-toast-errors-parent:hover {\n    transform: scale(1.1);\n  }\n  .nextjs-toast-errors {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n  }\n  .nextjs-toast-errors > svg {\n    margin-right: var(--size-gap);\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=Errors.js.map

/***/ }),

/***/ "./node_modules/@next/react-dev-overlay/lib/internal/container/RuntimeError.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@next/react-dev-overlay/lib/internal/container/RuntimeError.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.module.js"));
var CodeFrame_1 = __webpack_require__(/*! ../components/CodeFrame */ "./node_modules/@next/react-dev-overlay/lib/internal/components/CodeFrame/index.js");
var noop_template_1 = __webpack_require__(/*! ../helpers/noop-template */ "./node_modules/@next/react-dev-overlay/lib/internal/helpers/noop-template.js");
var stack_frame_1 = __webpack_require__(/*! ../helpers/stack-frame */ "./node_modules/@next/react-dev-overlay/lib/internal/helpers/stack-frame.js");
var CallStackFrame = function CallStackFrame(_a) {
    // TODO: ability to expand resolved frames
    // TODO: render error or external indicator
    var frame = _a.frame;
    var _b;
    var f = (_b = frame.originalStackFrame) !== null && _b !== void 0 ? _b : frame.sourceStackFrame;
    var hasSource = Boolean(frame.originalCodeFrame);
    var open = React.useCallback(function () {
        var _a;
        if (!hasSource)
            return;
        var params = new URLSearchParams();
        for (var key in f) {
            params.append(key, ((_a = f[key]) !== null && _a !== void 0 ? _a : '').toString());
        }
        self
            .fetch(( false || '') + "/__nextjs_launch-editor?" + params.toString())
            .then(function () { }, function () {
            // TODO: report error
        });
    }, [hasSource, f]);
    return (React.createElement("div", { "data-nextjs-call-stack-frame": true },
        React.createElement("h6", { "data-nextjs-frame-expanded": Boolean(frame.expanded) }, f.methodName),
        React.createElement("div", { "data-has-source": hasSource ? 'true' : undefined, tabIndex: hasSource ? 10 : undefined, role: hasSource ? 'link' : undefined, onClick: open, title: hasSource ? 'Click to open in your editor' : undefined },
            React.createElement("span", null, stack_frame_1.getFrameSource(f)),
            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
                React.createElement("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
                React.createElement("polyline", { points: "15 3 21 3 21 9" }),
                React.createElement("line", { x1: "10", y1: "14", x2: "21", y2: "3" })))));
};
var RuntimeError = function RuntimeError(_a) {
    var error = _a.error;
    var firstFirstPartyFrameIndex = React.useMemo(function () {
        return error.frames.findIndex(function (entry) {
            return entry.expanded &&
                Boolean(entry.originalCodeFrame) &&
                Boolean(entry.originalStackFrame);
        });
    }, [error.frames]);
    var firstFrame = React.useMemo(function () {
        var _a;
        return (_a = error.frames[firstFirstPartyFrameIndex]) !== null && _a !== void 0 ? _a : null;
    }, [error.frames, firstFirstPartyFrameIndex]);
    var allLeadingFrames = React.useMemo(function () {
        return firstFirstPartyFrameIndex < 0
            ? []
            : error.frames.slice(0, firstFirstPartyFrameIndex);
    }, [error.frames, firstFirstPartyFrameIndex]);
    var _b = __read(React.useState(firstFrame == null), 2), all = _b[0], setAll = _b[1];
    var toggleAll = React.useCallback(function () {
        setAll(function (v) { return !v; });
    }, []);
    var leadingFrames = React.useMemo(function () { return allLeadingFrames.filter(function (f) { return f.expanded || all; }); }, [all, allLeadingFrames]);
    var allCallStackFrames = React.useMemo(function () { return error.frames.slice(firstFirstPartyFrameIndex + 1); }, [error.frames, firstFirstPartyFrameIndex]);
    var visibleCallStackFrames = React.useMemo(function () { return allCallStackFrames.filter(function (f) { return f.expanded || all; }); }, [all, allCallStackFrames]);
    var canShowMore = React.useMemo(function () {
        return (allCallStackFrames.length !== visibleCallStackFrames.length ||
            (all && firstFrame != null));
    }, [
        all,
        allCallStackFrames.length,
        firstFrame,
        visibleCallStackFrames.length,
    ]);
    return (React.createElement(React.Fragment, null,
        firstFrame ? (React.createElement(React.Fragment, null,
            React.createElement("h5", null, "Source"),
            leadingFrames.map(function (frame, index) { return (React.createElement(CallStackFrame, { key: "leading-frame-" + index + "-" + all, frame: frame })); }),
            React.createElement(CodeFrame_1.CodeFrame, { stackFrame: firstFrame.originalStackFrame, codeFrame: firstFrame.originalCodeFrame }))) : undefined,
        visibleCallStackFrames.length ? (React.createElement(React.Fragment, null,
            React.createElement("h5", null, "Call Stack"),
            visibleCallStackFrames.map(function (frame, index) { return (React.createElement(CallStackFrame, { key: "call-stack-" + index + "-" + all, frame: frame })); }))) : undefined,
        canShowMore ? (React.createElement(React.Fragment, null,
            React.createElement("button", { tabIndex: 10, "data-nextjs-data-runtime-error-collapsed-action": true, type: "button", onClick: toggleAll },
                all ? 'Hide' : 'Show',
                " collapsed frames"))) : undefined));
};
exports.RuntimeError = RuntimeError;
exports.styles = noop_template_1.noop(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  button[data-nextjs-data-runtime-error-collapsed-action] {\n    background: none;\n    border: none;\n    padding: 0;\n    font-size: var(--size-font-small);\n    line-height: var(--size-font-bigger);\n    color: var(--color-accents-3);\n  }\n\n  [data-nextjs-call-stack-frame]:not(:last-child) {\n    margin-bottom: var(--size-gap-double);\n  }\n\n  [data-nextjs-call-stack-frame] > h6 {\n    margin-top: 0;\n    margin-bottom: var(--size-gap);\n    font-family: var(--font-stack-monospace);\n    color: #222;\n  }\n  [data-nextjs-call-stack-frame] > h6[data-nextjs-frame-expanded='false'] {\n    color: #666;\n  }\n  [data-nextjs-call-stack-frame] > div {\n    display: flex;\n    align-items: center;\n    padding-left: calc(var(--size-gap) + var(--size-gap-half));\n    font-size: var(--size-font-small);\n    color: #999;\n  }\n  [data-nextjs-call-stack-frame] > div > svg {\n    width: auto;\n    height: var(--size-font-small);\n    margin-left: var(--size-gap);\n\n    display: none;\n  }\n\n  [data-nextjs-call-stack-frame] > div[data-has-source] {\n    cursor: pointer;\n  }\n  [data-nextjs-call-stack-frame] > div[data-has-source]:hover {\n    text-decoration: underline dotted;\n  }\n  [data-nextjs-call-stack-frame] > div[data-has-source] > svg {\n    display: unset;\n  }\n"], ["\n  button[data-nextjs-data-runtime-error-collapsed-action] {\n    background: none;\n    border: none;\n    padding: 0;\n    font-size: var(--size-font-small);\n    line-height: var(--size-font-bigger);\n    color: var(--color-accents-3);\n  }\n\n  [data-nextjs-call-stack-frame]:not(:last-child) {\n    margin-bottom: var(--size-gap-double);\n  }\n\n  [data-nextjs-call-stack-frame] > h6 {\n    margin-top: 0;\n    margin-bottom: var(--size-gap);\n    font-family: var(--font-stack-monospace);\n    color: #222;\n  }\n  [data-nextjs-call-stack-frame] > h6[data-nextjs-frame-expanded='false'] {\n    color: #666;\n  }\n  [data-nextjs-call-stack-frame] > div {\n    display: flex;\n    align-items: center;\n    padding-left: calc(var(--size-gap) + var(--size-gap-half));\n    font-size: var(--size-font-small);\n    color: #999;\n  }\n  [data-nextjs-call-stack-frame] > div > svg {\n    width: auto;\n    height: var(--size-font-small);\n    margin-left: var(--size-gap);\n\n    display: none;\n  }\n\n  [data-nextjs-call-stack-frame] > div[data-has-source] {\n    cursor: pointer;\n  }\n  [data-nextjs-call-stack-frame] > div[data-has-source]:hover {\n    text-decoration: underline dotted;\n  }\n  [data-nextjs-call-stack-frame] > div[data-has-source] > svg {\n    display: unset;\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=RuntimeError.js.map

/***/ }),

/***/ "./node_modules/@next/react-dev-overlay/lib/internal/helpers/nodeStackFrames.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@next/react-dev-overlay/lib/internal/helpers/nodeStackFrames.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var stacktrace_parser_1 = __webpack_require__(/*! stacktrace-parser */ "./node_modules/stacktrace-parser/dist/stack-trace-parser.esm.js");
function getFilesystemFrame(frame) {
    var f = __assign({}, frame);
    if (typeof f.file === 'string') {
        if (
        // Posix:
        f.file.startsWith('/') ||
            // Win32:
            /^[a-z]:\\/i.test(f.file) ||
            // Win32 UNC:
            f.file.startsWith('\\\\')) {
            f.file = "file://" + f.file;
        }
    }
    return f;
}
exports.getFilesystemFrame = getFilesystemFrame;
var symbolNodeError = Symbol('NextjsNodeError');
function isNodeError(error) {
    return symbolNodeError in error;
}
exports.isNodeError = isNodeError;
function getNodeError(error) {
    var n;
    try {
        throw new Error(error.message);
    }
    catch (e) {
        n = e;
    }
    n.name = error.name;
    try {
        n.stack = stacktrace_parser_1.parse(error.stack)
            .map(getFilesystemFrame)
            .map(function (f) {
            var str = "    at " + f.methodName;
            if (f.file) {
                var loc = f.file;
                if (f.lineNumber) {
                    loc += ":" + f.lineNumber;
                    if (f.column) {
                        loc += ":" + f.column;
                    }
                }
                str += " (" + loc + ")";
            }
            return str;
        })
            .join('\n');
    }
    catch (_a) {
        n.stack = error.stack;
    }
    Object.defineProperty(n, symbolNodeError, {
        writable: false,
        enumerable: false,
        configurable: false
    });
    return n;
}
exports.getNodeError = getNodeError;
//# sourceMappingURL=nodeStackFrames.js.map

/***/ }),

/***/ "./node_modules/@next/react-dev-overlay/lib/internal/helpers/noop-template.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@next/react-dev-overlay/lib/internal/helpers/noop-template.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
function noop(strings) {
    var keys = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        keys[_i - 1] = arguments[_i];
    }
    var lastIndex = strings.length - 1;
    return (strings.slice(0, lastIndex).reduce(function (p, s, i) { return p + s + keys[i]; }, '') +
        strings[lastIndex]);
}
exports.noop = noop;
//# sourceMappingURL=noop-template.js.map

/***/ }),

/***/ "./node_modules/@next/react-dev-overlay/lib/internal/helpers/parseStack.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@next/react-dev-overlay/lib/internal/helpers/parseStack.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var stacktrace_parser_1 = __webpack_require__(/*! stacktrace-parser */ "./node_modules/stacktrace-parser/dist/stack-trace-parser.esm.js");
var regexNextStatic = /\/_next(\/static\/.+)/g;
function parseStack(stack) {
    var frames = stacktrace_parser_1.parse(stack);
    return frames.map(function (frame) {
        var _a, _b;
        try {
            var url = new URL(frame.file);
            var res = regexNextStatic.exec(url.pathname);
            if (res) {
                var distDir = (_b = (_a = "C:\\Users\\Steve\\git\\Meishicorp\\www\\.next") === null || _a === void 0 ? void 0 : _a.replace(/\\/g, '/')) === null || _b === void 0 ? void 0 : _b.replace(/\/$/, '');
                if (distDir) {
                    frame.file = 'file://' + distDir.concat(res.pop());
                }
            }
        }
        catch (_c) { }
        return frame;
    });
}
exports.parseStack = parseStack;
//# sourceMappingURL=parseStack.js.map

/***/ }),

/***/ "./node_modules/@next/react-dev-overlay/lib/internal/helpers/stack-frame.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@next/react-dev-overlay/lib/internal/helpers/stack-frame.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
function getOriginalStackFrames(isServerSide, frames) {
    return Promise.all(frames.map(function (frame) { return getOriginalStackFrame(isServerSide, frame); }));
}
exports.getOriginalStackFrames = getOriginalStackFrames;
function getOriginalStackFrame(isServerSide, source) {
    var _a, _b;
    function _getOriginalStackFrame() {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var params, key, controller, tm, res, _e, _f, _g, body;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        params = new URLSearchParams();
                        params.append('isServerSide', String(isServerSide));
                        for (key in source) {
                            params.append(key, ((_a = source[key]) !== null && _a !== void 0 ? _a : '').toString());
                        }
                        controller = new AbortController();
                        tm = setTimeout(function () { return controller.abort(); }, 3000);
                        return [4 /*yield*/, self
                                .fetch(( false || '') + "/__nextjs_original-stack-frame?" + params.toString(), {
                                signal: controller.signal
                            })["finally"](function () {
                                clearTimeout(tm);
                            })];
                    case 1:
                        res = _h.sent();
                        if (!(!res.ok || res.status === 204)) return [3 /*break*/, 3];
                        _f = (_e = Promise).reject;
                        _g = Error.bind;
                        return [4 /*yield*/, res.text()];
                    case 2: return [2 /*return*/, _f.apply(_e, [new (_g.apply(Error, [void 0, _h.sent()]))()])];
                    case 3: return [4 /*yield*/, res.json()];
                    case 4:
                        body = _h.sent();
                        return [2 /*return*/, {
                                error: false,
                                reason: null,
                                external: false,
                                expanded: !Boolean((_d = (_c = (_b = 
                                /* collapsed */
                                body.originalStackFrame) === null || _b === void 0 ? void 0 : _b.file) === null || _c === void 0 ? void 0 : _c.includes('node_modules')) !== null && _d !== void 0 ? _d : true),
                                sourceStackFrame: source,
                                originalStackFrame: body.originalStackFrame,
                                originalCodeFrame: body.originalCodeFrame || null
                            }];
                }
            });
        });
    }
    if (!(((_a = source.file) === null || _a === void 0 ? void 0 : _a.startsWith('webpack-internal:')) || ((_b = source.file) === null || _b === void 0 ? void 0 : _b.startsWith('file:')))) {
        return Promise.resolve({
            error: false,
            reason: null,
            external: true,
            expanded: false,
            sourceStackFrame: source,
            originalStackFrame: null,
            originalCodeFrame: null
        });
    }
    return _getOriginalStackFrame()["catch"](function (err) {
        var _a, _b;
        return ({
            error: true,
            reason: (_b = (_a = err === null || err === void 0 ? void 0 : err.message) !== null && _a !== void 0 ? _a : err === null || err === void 0 ? void 0 : err.toString()) !== null && _b !== void 0 ? _b : 'Unknown Error',
            external: false,
            expanded: false,
            sourceStackFrame: source,
            originalStackFrame: null,
            originalCodeFrame: null
        });
    });
}
exports.getOriginalStackFrame = getOriginalStackFrame;
function getFrameSource(frame) {
    var _a;
    var str = '';
    try {
        var u = new URL(frame.file);
        // Strip the origin for same-origin scripts.
        if (typeof globalThis !== 'undefined' &&
            ((_a = globalThis.location) === null || _a === void 0 ? void 0 : _a.origin) !== u.origin) {
            // URLs can be valid without an `origin`, so long as they have a
            // `protocol`. However, `origin` is preferred.
            if (u.origin === 'null') {
                str += u.protocol;
            }
            else {
                str += u.origin;
            }
        }
        // Strip query string information as it's typically too verbose to be
        // meaningful.
        str += u.pathname;
        str += ' ';
    }
    catch (_b) {
        str += (frame.file || '(unknown)') + ' ';
    }
    if (frame.lineNumber != null) {
        if (frame.column != null) {
            str += "(" + frame.lineNumber + ":" + frame.column + ") ";
        }
        else {
            str += "(" + frame.lineNumber + ") ";
        }
    }
    return str.slice(0, -1);
}
exports.getFrameSource = getFrameSource;
//# sourceMappingURL=stack-frame.js.map

/***/ }),

/***/ "./node_modules/@next/react-dev-overlay/lib/internal/hooks/use-on-click-outside.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@next/react-dev-overlay/lib/internal/hooks/use-on-click-outside.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.module.js"));
function useOnClickOutside(el, handler) {
    React.useEffect(function () {
        if (el == null || handler == null) {
            return;
        }
        var listener = function (e) {
            // Do nothing if clicking ref's element or descendent elements
            if (!el || el.contains(e.target)) {
                return;
            }
            handler(e);
        };
        var root = el.getRootNode();
        root.addEventListener('mousedown', listener);
        root.addEventListener('touchstart', listener);
        return function () {
            root.removeEventListener('mousedown', listener);
            root.removeEventListener('touchstart', listener);
        };
    }, [handler, el]);
}
exports.useOnClickOutside = useOnClickOutside;
//# sourceMappingURL=use-on-click-outside.js.map

/***/ }),

/***/ "./node_modules/@next/react-dev-overlay/lib/internal/styles/Base.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@next/react-dev-overlay/lib/internal/styles/Base.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.module.js"));
var noop_template_1 = __webpack_require__(/*! ../helpers/noop-template */ "./node_modules/@next/react-dev-overlay/lib/internal/helpers/noop-template.js");
function Base() {
    return (React.createElement("style", { dangerouslySetInnerHTML: {
            __html: noop_template_1.noop(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          :host {\n            --size-gap-half: 4px;\n            --size-gap: 8px;\n            --size-gap-double: 16px;\n            --size-gap-quad: 32px;\n\n            --size-font-small: 14px;\n            --size-font: 16px;\n            --size-font-big: 20px;\n            --size-font-bigger: 24px;\n\n            --color-accents-1: #808080;\n            --color-accents-2: #222222;\n            --color-accents-3: #404040;\n\n            --font-stack-monospace: 'SFMono-Regular', Consolas,\n              'Liberation Mono', Menlo, Courier, monospace;\n\n            --color-ansi-selection: rgba(95, 126, 151, 0.48);\n            --color-ansi-bg: #111111;\n            --color-ansi-fg: #cccccc;\n\n            --color-ansi-white: #777777;\n            --color-ansi-black: #141414;\n            --color-ansi-blue: #00aaff;\n            --color-ansi-cyan: #88ddff;\n            --color-ansi-green: #98ec65;\n            --color-ansi-magenta: #aa88ff;\n            --color-ansi-red: #ff5555;\n            --color-ansi-yellow: #ffcc33;\n            --color-ansi-bright-white: #ffffff;\n            --color-ansi-bright-black: #777777;\n            --color-ansi-bright-blue: #33bbff;\n            --color-ansi-bright-cyan: #bbecff;\n            --color-ansi-bright-green: #b6f292;\n            --color-ansi-bright-magenta: #cebbff;\n            --color-ansi-bright-red: #ff8888;\n            --color-ansi-bright-yellow: #ffd966;\n          }\n\n          .mono {\n            font-family: var(--font-stack-monospace);\n          }\n\n          h1,\n          h2,\n          h3,\n          h4,\n          h5,\n          h6 {\n            margin-bottom: var(--size-gap);\n            font-weight: 500;\n            line-height: 1.5;\n          }\n\n          h1 {\n            font-size: 40px;\n          }\n          h2 {\n            font-size: 32px;\n          }\n          h3 {\n            font-size: 28px;\n          }\n          h4 {\n            font-size: 24px;\n          }\n          h5 {\n            font-size: 20px;\n          }\n          h6 {\n            font-size: 16px;\n          }\n        "], ["\n          :host {\n            --size-gap-half: 4px;\n            --size-gap: 8px;\n            --size-gap-double: 16px;\n            --size-gap-quad: 32px;\n\n            --size-font-small: 14px;\n            --size-font: 16px;\n            --size-font-big: 20px;\n            --size-font-bigger: 24px;\n\n            --color-accents-1: #808080;\n            --color-accents-2: #222222;\n            --color-accents-3: #404040;\n\n            --font-stack-monospace: 'SFMono-Regular', Consolas,\n              'Liberation Mono', Menlo, Courier, monospace;\n\n            --color-ansi-selection: rgba(95, 126, 151, 0.48);\n            --color-ansi-bg: #111111;\n            --color-ansi-fg: #cccccc;\n\n            --color-ansi-white: #777777;\n            --color-ansi-black: #141414;\n            --color-ansi-blue: #00aaff;\n            --color-ansi-cyan: #88ddff;\n            --color-ansi-green: #98ec65;\n            --color-ansi-magenta: #aa88ff;\n            --color-ansi-red: #ff5555;\n            --color-ansi-yellow: #ffcc33;\n            --color-ansi-bright-white: #ffffff;\n            --color-ansi-bright-black: #777777;\n            --color-ansi-bright-blue: #33bbff;\n            --color-ansi-bright-cyan: #bbecff;\n            --color-ansi-bright-green: #b6f292;\n            --color-ansi-bright-magenta: #cebbff;\n            --color-ansi-bright-red: #ff8888;\n            --color-ansi-bright-yellow: #ffd966;\n          }\n\n          .mono {\n            font-family: var(--font-stack-monospace);\n          }\n\n          h1,\n          h2,\n          h3,\n          h4,\n          h5,\n          h6 {\n            margin-bottom: var(--size-gap);\n            font-weight: 500;\n            line-height: 1.5;\n          }\n\n          h1 {\n            font-size: 40px;\n          }\n          h2 {\n            font-size: 32px;\n          }\n          h3 {\n            font-size: 28px;\n          }\n          h4 {\n            font-size: 24px;\n          }\n          h5 {\n            font-size: 20px;\n          }\n          h6 {\n            font-size: 16px;\n          }\n        "])))
        } }));
}
exports.Base = Base;
var templateObject_1;
//# sourceMappingURL=Base.js.map

/***/ }),

/***/ "./node_modules/@next/react-dev-overlay/lib/internal/styles/ComponentStyles.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@next/react-dev-overlay/lib/internal/styles/ComponentStyles.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.module.js"));
var styles_1 = __webpack_require__(/*! ../components/CodeFrame/styles */ "./node_modules/@next/react-dev-overlay/lib/internal/components/CodeFrame/styles.js");
var Dialog_1 = __webpack_require__(/*! ../components/Dialog */ "./node_modules/@next/react-dev-overlay/lib/internal/components/Dialog/index.js");
var styles_2 = __webpack_require__(/*! ../components/LeftRightDialogHeader/styles */ "./node_modules/@next/react-dev-overlay/lib/internal/components/LeftRightDialogHeader/styles.js");
var styles_3 = __webpack_require__(/*! ../components/Overlay/styles */ "./node_modules/@next/react-dev-overlay/lib/internal/components/Overlay/styles.js");
var styles_4 = __webpack_require__(/*! ../components/Terminal/styles */ "./node_modules/@next/react-dev-overlay/lib/internal/components/Terminal/styles.js");
var Toast_1 = __webpack_require__(/*! ../components/Toast */ "./node_modules/@next/react-dev-overlay/lib/internal/components/Toast/index.js");
var BuildError_1 = __webpack_require__(/*! ../container/BuildError */ "./node_modules/@next/react-dev-overlay/lib/internal/container/BuildError.js");
var Errors_1 = __webpack_require__(/*! ../container/Errors */ "./node_modules/@next/react-dev-overlay/lib/internal/container/Errors.js");
var RuntimeError_1 = __webpack_require__(/*! ../container/RuntimeError */ "./node_modules/@next/react-dev-overlay/lib/internal/container/RuntimeError.js");
var noop_template_1 = __webpack_require__(/*! ../helpers/noop-template */ "./node_modules/@next/react-dev-overlay/lib/internal/helpers/noop-template.js");
function ComponentStyles() {
    return (React.createElement("style", { dangerouslySetInnerHTML: {
            __html: noop_template_1.noop(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          ", "\n          ", "\n          ", "\n          ", "\n          ", "\n          ", "\n\n          ", "\n          ", "\n          ", "\n        "], ["\n          ", "\n          ", "\n          ", "\n          ", "\n          ", "\n          ", "\n\n          ", "\n          ", "\n          ", "\n        "])), styles_3.styles, Toast_1.styles, Dialog_1.styles, styles_2.styles, styles_1.styles, styles_4.styles, BuildError_1.styles, Errors_1.styles, RuntimeError_1.styles)
        } }));
}
exports.ComponentStyles = ComponentStyles;
var templateObject_1;
//# sourceMappingURL=ComponentStyles.js.map

/***/ }),

/***/ "./node_modules/@next/react-dev-overlay/lib/internal/styles/CssReset.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@next/react-dev-overlay/lib/internal/styles/CssReset.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.module.js"));
var noop_template_1 = __webpack_require__(/*! ../helpers/noop-template */ "./node_modules/@next/react-dev-overlay/lib/internal/helpers/noop-template.js");
function CssReset() {
    return (React.createElement("style", { dangerouslySetInnerHTML: {
            __html: noop_template_1.noop(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          :host {\n            all: initial;\n\n            /* the direction property is not reset by 'all' */\n            direction: ltr;\n          }\n\n          /*!\n           * Bootstrap Reboot v4.4.1 (https://getbootstrap.com/)\n           * Copyright 2011-2019 The Bootstrap Authors\n           * Copyright 2011-2019 Twitter, Inc.\n           * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n           * Forked from Normalize.css, licensed MIT (https://github.com/necolas/normalize.css/blob/master/LICENSE.md)\n           */\n          *,\n          *::before,\n          *::after {\n            box-sizing: border-box;\n          }\n\n          :host {\n            font-family: sans-serif;\n            line-height: 1.15;\n            -webkit-text-size-adjust: 100%;\n            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n          }\n\n          article,\n          aside,\n          figcaption,\n          figure,\n          footer,\n          header,\n          hgroup,\n          main,\n          nav,\n          section {\n            display: block;\n          }\n\n          :host {\n            margin: 0;\n            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n              'Helvetica Neue', Arial, 'Noto Sans', sans-serif,\n              'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',\n              'Noto Color Emoji';\n            font-size: 16px;\n            font-weight: 400;\n            line-height: 1.5;\n            color: #212529;\n            text-align: left;\n            background-color: #fff;\n          }\n\n          [tabindex='-1']:focus:not(:focus-visible) {\n            outline: 0 !important;\n          }\n\n          hr {\n            box-sizing: content-box;\n            height: 0;\n            overflow: visible;\n          }\n\n          h1,\n          h2,\n          h3,\n          h4,\n          h5,\n          h6 {\n            margin-top: 0;\n            margin-bottom: 8px;\n          }\n\n          p {\n            margin-top: 0;\n            margin-bottom: 16px;\n          }\n\n          abbr[title],\n          abbr[data-original-title] {\n            text-decoration: underline;\n            -webkit-text-decoration: underline dotted;\n            text-decoration: underline dotted;\n            cursor: help;\n            border-bottom: 0;\n            -webkit-text-decoration-skip-ink: none;\n            text-decoration-skip-ink: none;\n          }\n\n          address {\n            margin-bottom: 16px;\n            font-style: normal;\n            line-height: inherit;\n          }\n\n          ol,\n          ul,\n          dl {\n            margin-top: 0;\n            margin-bottom: 16px;\n          }\n\n          ol ol,\n          ul ul,\n          ol ul,\n          ul ol {\n            margin-bottom: 0;\n          }\n\n          dt {\n            font-weight: 700;\n          }\n\n          dd {\n            margin-bottom: 8px;\n            margin-left: 0;\n          }\n\n          blockquote {\n            margin: 0 0 16px;\n          }\n\n          b,\n          strong {\n            font-weight: bolder;\n          }\n\n          small {\n            font-size: 80%;\n          }\n\n          sub,\n          sup {\n            position: relative;\n            font-size: 75%;\n            line-height: 0;\n            vertical-align: baseline;\n          }\n\n          sub {\n            bottom: -0.25em;\n          }\n\n          sup {\n            top: -0.5em;\n          }\n\n          a {\n            color: #007bff;\n            text-decoration: none;\n            background-color: transparent;\n          }\n\n          a:hover {\n            color: #0056b3;\n            text-decoration: underline;\n          }\n\n          a:not([href]) {\n            color: inherit;\n            text-decoration: none;\n          }\n\n          a:not([href]):hover {\n            color: inherit;\n            text-decoration: none;\n          }\n\n          pre,\n          code,\n          kbd,\n          samp {\n            font-family: SFMono-Regular, Menlo, Monaco, Consolas,\n              'Liberation Mono', 'Courier New', monospace;\n            font-size: 1em;\n          }\n\n          pre {\n            margin-top: 0;\n            margin-bottom: 16px;\n            overflow: auto;\n          }\n\n          figure {\n            margin: 0 0 16px;\n          }\n\n          img {\n            vertical-align: middle;\n            border-style: none;\n          }\n\n          svg {\n            overflow: hidden;\n            vertical-align: middle;\n          }\n\n          table {\n            border-collapse: collapse;\n          }\n\n          caption {\n            padding-top: 12px;\n            padding-bottom: 12px;\n            color: #6c757d;\n            text-align: left;\n            caption-side: bottom;\n          }\n\n          th {\n            text-align: inherit;\n          }\n\n          label {\n            display: inline-block;\n            margin-bottom: 8px;\n          }\n\n          button {\n            border-radius: 0;\n          }\n\n          button:focus {\n            outline: 1px dotted;\n            outline: 5px auto -webkit-focus-ring-color;\n          }\n\n          input,\n          button,\n          select,\n          optgroup,\n          textarea {\n            margin: 0;\n            font-family: inherit;\n            font-size: inherit;\n            line-height: inherit;\n          }\n\n          button,\n          input {\n            overflow: visible;\n          }\n\n          button,\n          select {\n            text-transform: none;\n          }\n\n          select {\n            word-wrap: normal;\n          }\n\n          button,\n          [type='button'],\n          [type='reset'],\n          [type='submit'] {\n            -webkit-appearance: button;\n          }\n\n          button:not(:disabled),\n          [type='button']:not(:disabled),\n          [type='reset']:not(:disabled),\n          [type='submit']:not(:disabled) {\n            cursor: pointer;\n          }\n\n          button::-moz-focus-inner,\n          [type='button']::-moz-focus-inner,\n          [type='reset']::-moz-focus-inner,\n          [type='submit']::-moz-focus-inner {\n            padding: 0;\n            border-style: none;\n          }\n\n          input[type='radio'],\n          input[type='checkbox'] {\n            box-sizing: border-box;\n            padding: 0;\n          }\n\n          input[type='date'],\n          input[type='time'],\n          input[type='datetime-local'],\n          input[type='month'] {\n            -webkit-appearance: listbox;\n          }\n\n          textarea {\n            overflow: auto;\n            resize: vertical;\n          }\n\n          fieldset {\n            min-width: 0;\n            padding: 0;\n            margin: 0;\n            border: 0;\n          }\n\n          legend {\n            display: block;\n            width: 100%;\n            max-width: 100%;\n            padding: 0;\n            margin-bottom: 8px;\n            font-size: 24px;\n            line-height: inherit;\n            color: inherit;\n            white-space: normal;\n          }\n\n          progress {\n            vertical-align: baseline;\n          }\n\n          [type='number']::-webkit-inner-spin-button,\n          [type='number']::-webkit-outer-spin-button {\n            height: auto;\n          }\n\n          [type='search'] {\n            outline-offset: -2px;\n            -webkit-appearance: none;\n          }\n\n          [type='search']::-webkit-search-decoration {\n            -webkit-appearance: none;\n          }\n\n          ::-webkit-file-upload-button {\n            font: inherit;\n            -webkit-appearance: button;\n          }\n\n          output {\n            display: inline-block;\n          }\n\n          summary {\n            display: list-item;\n            cursor: pointer;\n          }\n\n          template {\n            display: none;\n          }\n\n          [hidden] {\n            display: none !important;\n          }\n        "], ["\n          :host {\n            all: initial;\n\n            /* the direction property is not reset by 'all' */\n            direction: ltr;\n          }\n\n          /*!\n           * Bootstrap Reboot v4.4.1 (https://getbootstrap.com/)\n           * Copyright 2011-2019 The Bootstrap Authors\n           * Copyright 2011-2019 Twitter, Inc.\n           * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n           * Forked from Normalize.css, licensed MIT (https://github.com/necolas/normalize.css/blob/master/LICENSE.md)\n           */\n          *,\n          *::before,\n          *::after {\n            box-sizing: border-box;\n          }\n\n          :host {\n            font-family: sans-serif;\n            line-height: 1.15;\n            -webkit-text-size-adjust: 100%;\n            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n          }\n\n          article,\n          aside,\n          figcaption,\n          figure,\n          footer,\n          header,\n          hgroup,\n          main,\n          nav,\n          section {\n            display: block;\n          }\n\n          :host {\n            margin: 0;\n            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n              'Helvetica Neue', Arial, 'Noto Sans', sans-serif,\n              'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',\n              'Noto Color Emoji';\n            font-size: 16px;\n            font-weight: 400;\n            line-height: 1.5;\n            color: #212529;\n            text-align: left;\n            background-color: #fff;\n          }\n\n          [tabindex='-1']:focus:not(:focus-visible) {\n            outline: 0 !important;\n          }\n\n          hr {\n            box-sizing: content-box;\n            height: 0;\n            overflow: visible;\n          }\n\n          h1,\n          h2,\n          h3,\n          h4,\n          h5,\n          h6 {\n            margin-top: 0;\n            margin-bottom: 8px;\n          }\n\n          p {\n            margin-top: 0;\n            margin-bottom: 16px;\n          }\n\n          abbr[title],\n          abbr[data-original-title] {\n            text-decoration: underline;\n            -webkit-text-decoration: underline dotted;\n            text-decoration: underline dotted;\n            cursor: help;\n            border-bottom: 0;\n            -webkit-text-decoration-skip-ink: none;\n            text-decoration-skip-ink: none;\n          }\n\n          address {\n            margin-bottom: 16px;\n            font-style: normal;\n            line-height: inherit;\n          }\n\n          ol,\n          ul,\n          dl {\n            margin-top: 0;\n            margin-bottom: 16px;\n          }\n\n          ol ol,\n          ul ul,\n          ol ul,\n          ul ol {\n            margin-bottom: 0;\n          }\n\n          dt {\n            font-weight: 700;\n          }\n\n          dd {\n            margin-bottom: 8px;\n            margin-left: 0;\n          }\n\n          blockquote {\n            margin: 0 0 16px;\n          }\n\n          b,\n          strong {\n            font-weight: bolder;\n          }\n\n          small {\n            font-size: 80%;\n          }\n\n          sub,\n          sup {\n            position: relative;\n            font-size: 75%;\n            line-height: 0;\n            vertical-align: baseline;\n          }\n\n          sub {\n            bottom: -0.25em;\n          }\n\n          sup {\n            top: -0.5em;\n          }\n\n          a {\n            color: #007bff;\n            text-decoration: none;\n            background-color: transparent;\n          }\n\n          a:hover {\n            color: #0056b3;\n            text-decoration: underline;\n          }\n\n          a:not([href]) {\n            color: inherit;\n            text-decoration: none;\n          }\n\n          a:not([href]):hover {\n            color: inherit;\n            text-decoration: none;\n          }\n\n          pre,\n          code,\n          kbd,\n          samp {\n            font-family: SFMono-Regular, Menlo, Monaco, Consolas,\n              'Liberation Mono', 'Courier New', monospace;\n            font-size: 1em;\n          }\n\n          pre {\n            margin-top: 0;\n            margin-bottom: 16px;\n            overflow: auto;\n          }\n\n          figure {\n            margin: 0 0 16px;\n          }\n\n          img {\n            vertical-align: middle;\n            border-style: none;\n          }\n\n          svg {\n            overflow: hidden;\n            vertical-align: middle;\n          }\n\n          table {\n            border-collapse: collapse;\n          }\n\n          caption {\n            padding-top: 12px;\n            padding-bottom: 12px;\n            color: #6c757d;\n            text-align: left;\n            caption-side: bottom;\n          }\n\n          th {\n            text-align: inherit;\n          }\n\n          label {\n            display: inline-block;\n            margin-bottom: 8px;\n          }\n\n          button {\n            border-radius: 0;\n          }\n\n          button:focus {\n            outline: 1px dotted;\n            outline: 5px auto -webkit-focus-ring-color;\n          }\n\n          input,\n          button,\n          select,\n          optgroup,\n          textarea {\n            margin: 0;\n            font-family: inherit;\n            font-size: inherit;\n            line-height: inherit;\n          }\n\n          button,\n          input {\n            overflow: visible;\n          }\n\n          button,\n          select {\n            text-transform: none;\n          }\n\n          select {\n            word-wrap: normal;\n          }\n\n          button,\n          [type='button'],\n          [type='reset'],\n          [type='submit'] {\n            -webkit-appearance: button;\n          }\n\n          button:not(:disabled),\n          [type='button']:not(:disabled),\n          [type='reset']:not(:disabled),\n          [type='submit']:not(:disabled) {\n            cursor: pointer;\n          }\n\n          button::-moz-focus-inner,\n          [type='button']::-moz-focus-inner,\n          [type='reset']::-moz-focus-inner,\n          [type='submit']::-moz-focus-inner {\n            padding: 0;\n            border-style: none;\n          }\n\n          input[type='radio'],\n          input[type='checkbox'] {\n            box-sizing: border-box;\n            padding: 0;\n          }\n\n          input[type='date'],\n          input[type='time'],\n          input[type='datetime-local'],\n          input[type='month'] {\n            -webkit-appearance: listbox;\n          }\n\n          textarea {\n            overflow: auto;\n            resize: vertical;\n          }\n\n          fieldset {\n            min-width: 0;\n            padding: 0;\n            margin: 0;\n            border: 0;\n          }\n\n          legend {\n            display: block;\n            width: 100%;\n            max-width: 100%;\n            padding: 0;\n            margin-bottom: 8px;\n            font-size: 24px;\n            line-height: inherit;\n            color: inherit;\n            white-space: normal;\n          }\n\n          progress {\n            vertical-align: baseline;\n          }\n\n          [type='number']::-webkit-inner-spin-button,\n          [type='number']::-webkit-outer-spin-button {\n            height: auto;\n          }\n\n          [type='search'] {\n            outline-offset: -2px;\n            -webkit-appearance: none;\n          }\n\n          [type='search']::-webkit-search-decoration {\n            -webkit-appearance: none;\n          }\n\n          ::-webkit-file-upload-button {\n            font: inherit;\n            -webkit-appearance: button;\n          }\n\n          output {\n            display: inline-block;\n          }\n\n          summary {\n            display: list-item;\n            cursor: pointer;\n          }\n\n          template {\n            display: none;\n          }\n\n          [hidden] {\n            display: none !important;\n          }\n        "])))
        } }));
}
exports.CssReset = CssReset;
var templateObject_1;
//# sourceMappingURL=CssReset.js.map

/***/ }),

/***/ "./node_modules/@next/react-dev-overlay/node_modules/ansi-regex/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@next/react-dev-overlay/node_modules/ansi-regex/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

module.exports = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$onlyFirst = _ref.onlyFirst,
      onlyFirst = _ref$onlyFirst === void 0 ? false : _ref$onlyFirst;

  var pattern = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))'].join('|');
  return new RegExp(pattern, onlyFirst ? undefined : 'g');
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/@next/react-dev-overlay/node_modules/strip-ansi/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@next/react-dev-overlay/node_modules/strip-ansi/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var ansiRegex = __webpack_require__(/*! ansi-regex */ "./node_modules/@next/react-dev-overlay/node_modules/ansi-regex/index.js");

module.exports = function (string) {
  return typeof string === 'string' ? string.replace(ansiRegex(), '') : string;
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/anser/lib/index.js":
/*!*****************************************!*\
  !*** ./node_modules/anser/lib/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// This file was originally written by @drudru (https://github.com/drudru/ansi_up), MIT, 2011

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ANSI_COLORS = [[{ color: "0, 0, 0", "class": "ansi-black" }, { color: "187, 0, 0", "class": "ansi-red" }, { color: "0, 187, 0", "class": "ansi-green" }, { color: "187, 187, 0", "class": "ansi-yellow" }, { color: "0, 0, 187", "class": "ansi-blue" }, { color: "187, 0, 187", "class": "ansi-magenta" }, { color: "0, 187, 187", "class": "ansi-cyan" }, { color: "255,255,255", "class": "ansi-white" }], [{ color: "85, 85, 85", "class": "ansi-bright-black" }, { color: "255, 85, 85", "class": "ansi-bright-red" }, { color: "0, 255, 0", "class": "ansi-bright-green" }, { color: "255, 255, 85", "class": "ansi-bright-yellow" }, { color: "85, 85, 255", "class": "ansi-bright-blue" }, { color: "255, 85, 255", "class": "ansi-bright-magenta" }, { color: "85, 255, 255", "class": "ansi-bright-cyan" }, { color: "255, 255, 255", "class": "ansi-bright-white" }]];

var Anser = function () {
    _createClass(Anser, null, [{
        key: "escapeForHtml",


        /**
         * Anser.escapeForHtml
         * Escape the input HTML.
         *
         * This does the minimum escaping of text to make it compliant with HTML.
         * In particular, the '&','<', and '>' characters are escaped. This should
         * be run prior to `ansiToHtml`.
         *
         * @name Anser.escapeForHtml
         * @function
         * @param {String} txt The input text (containing the ANSI snippets).
         * @returns {String} The escaped html.
         */
        value: function escapeForHtml(txt) {
            return new Anser().escapeForHtml(txt);
        }

        /**
         * Anser.linkify
         * Adds the links in the HTML.
         *
         * This replaces any links in the text with anchor tags that display the
         * link. The links should have at least one whitespace character
         * surrounding it. Also, you should apply this after you have run
         * `ansiToHtml` on the text.
         *
         * @name Anser.linkify
         * @function
         * @param {String} txt The input text.
         * @returns {String} The HTML containing the <a> tags (unescaped).
         */

    }, {
        key: "linkify",
        value: function linkify(txt) {
            return new Anser().linkify(txt);
        }

        /**
         * Anser.ansiToHtml
         * This replaces ANSI terminal escape codes with SPAN tags that wrap the
         * content.
         *
         * This function only interprets ANSI SGR (Select Graphic Rendition) codes
         * that can be represented in HTML.
         * For example, cursor movement codes are ignored and hidden from output.
         * The default style uses colors that are very close to the prescribed
         * standard. The standard assumes that the text will have a black
         * background. These colors are set as inline styles on the SPAN tags.
         *
         * Another option is to set `use_classes: true` in the options argument.
         * This will instead set classes on the spans so the colors can be set via
         * CSS. The class names used are of the format `ansi-*-fg/bg` and
         * `ansi-bright-*-fg/bg` where `*` is the color name,
         * i.e black/red/green/yellow/blue/magenta/cyan/white.
         *
         * @name Anser.ansiToHtml
         * @function
         * @param {String} txt The input text.
         * @param {Object} options The options passed to the ansiToHTML method.
         * @returns {String} The HTML output.
         */

    }, {
        key: "ansiToHtml",
        value: function ansiToHtml(txt, options) {
            return new Anser().ansiToHtml(txt, options);
        }

        /**
         * Anser.ansiToJson
         * Converts ANSI input into JSON output.
         *
         * @name Anser.ansiToJson
         * @function
         * @param {String} txt The input text.
         * @param {Object} options The options passed to the ansiToHTML method.
         * @returns {String} The HTML output.
         */

    }, {
        key: "ansiToJson",
        value: function ansiToJson(txt, options) {
            return new Anser().ansiToJson(txt, options);
        }

        /**
         * Anser.ansiToText
         * Converts ANSI input into text output.
         *
         * @name Anser.ansiToText
         * @function
         * @param {String} txt The input text.
         * @returns {String} The text output.
         */

    }, {
        key: "ansiToText",
        value: function ansiToText(txt) {
            return new Anser().ansiToText(txt);
        }

        /**
         * Anser
         * The `Anser` class.
         *
         * @name Anser
         * @function
         * @returns {Anser}
         */

    }]);

    function Anser() {
        _classCallCheck(this, Anser);

        this.fg = this.bg = this.fg_truecolor = this.bg_truecolor = null;
        this.bright = 0;
    }

    /**
     * setupPalette
     * Sets up the palette.
     *
     * @name setupPalette
     * @function
     */


    _createClass(Anser, [{
        key: "setupPalette",
        value: function setupPalette() {
            this.PALETTE_COLORS = [];

            // Index 0..15 : System color
            for (var i = 0; i < 2; ++i) {
                for (var j = 0; j < 8; ++j) {
                    this.PALETTE_COLORS.push(ANSI_COLORS[i][j].color);
                }
            }

            // Index 16..231 : RGB 6x6x6
            // https://gist.github.com/jasonm23/2868981#file-xterm-256color-yaml
            var levels = [0, 95, 135, 175, 215, 255];
            var format = function format(r, g, b) {
                return levels[r] + ", " + levels[g] + ", " + levels[b];
            };
            var r = void 0,
                g = void 0,
                b = void 0;
            for (var _r = 0; _r < 6; ++_r) {
                for (var _g = 0; _g < 6; ++_g) {
                    for (var _b = 0; _b < 6; ++_b) {
                        this.PALETTE_COLORS.push(format(_r, _g, _b));
                    }
                }
            }

            // Index 232..255 : Grayscale
            var level = 8;
            for (var _i = 0; _i < 24; ++_i, level += 10) {
                this.PALETTE_COLORS.push(format(level, level, level));
            }
        }

        /**
         * escapeForHtml
         * Escapes the input text.
         *
         * @name escapeForHtml
         * @function
         * @param {String} txt The input text.
         * @returns {String} The escpaed HTML output.
         */

    }, {
        key: "escapeForHtml",
        value: function escapeForHtml(txt) {
            return txt.replace(/[&<>]/gm, function (str) {
                return str == "&" ? "&amp;" : str == "<" ? "&lt;" : str == ">" ? "&gt;" : "";
            });
        }

        /**
         * linkify
         * Adds HTML link elements.
         *
         * @name linkify
         * @function
         * @param {String} txt The input text.
         * @returns {String} The HTML output containing link elements.
         */

    }, {
        key: "linkify",
        value: function linkify(txt) {
            return txt.replace(/(https?:\/\/[^\s]+)/gm, function (str) {
                return "<a href=\"" + str + "\">" + str + "</a>";
            });
        }

        /**
         * ansiToHtml
         * Converts ANSI input into HTML output.
         *
         * @name ansiToHtml
         * @function
         * @param {String} txt The input text.
         * @param {Object} options The options passed ot the `process` method.
         * @returns {String} The HTML output.
         */

    }, {
        key: "ansiToHtml",
        value: function ansiToHtml(txt, options) {
            return this.process(txt, options, true);
        }

        /**
         * ansiToJson
         * Converts ANSI input into HTML output.
         *
         * @name ansiToJson
         * @function
         * @param {String} txt The input text.
         * @param {Object} options The options passed ot the `process` method.
         * @returns {String} The JSON output.
         */

    }, {
        key: "ansiToJson",
        value: function ansiToJson(txt, options) {
            options = options || {};
            options.json = true;
            options.clearLine = false;
            return this.process(txt, options, true);
        }

        /**
         * ansiToText
         * Converts ANSI input into HTML output.
         *
         * @name ansiToText
         * @function
         * @param {String} txt The input text.
         * @returns {String} The text output.
         */

    }, {
        key: "ansiToText",
        value: function ansiToText(txt) {
            return this.process(txt, {}, false);
        }

        /**
         * process
         * Processes the input.
         *
         * @name process
         * @function
         * @param {String} txt The input text.
         * @param {Object} options An object passed to `processChunk` method, extended with:
         *
         *  - `json` (Boolean): If `true`, the result will be an object.
         *  - `use_classes` (Boolean): If `true`, HTML classes will be appended to the HTML output.
         *
         * @param {Boolean} markup
         */

    }, {
        key: "process",
        value: function process(txt, options, markup) {
            var _this = this;

            var self = this;
            var raw_text_chunks = txt.split(/\033\[/);
            var first_chunk = raw_text_chunks.shift(); // the first chunk is not the result of the split

            if (options === undefined || options === null) {
                options = {};
            }
            options.clearLine = /\r/.test(txt); // check for Carriage Return
            var color_chunks = raw_text_chunks.map(function (chunk) {
                return _this.processChunk(chunk, options, markup);
            });

            if (options && options.json) {
                var first = self.processChunkJson("");
                first.content = first_chunk;
                first.clearLine = options.clearLine;
                color_chunks.unshift(first);
                if (options.remove_empty) {
                    color_chunks = color_chunks.filter(function (c) {
                        return !c.isEmpty();
                    });
                }
                return color_chunks;
            } else {
                color_chunks.unshift(first_chunk);
            }

            return color_chunks.join("");
        }

        /**
         * processChunkJson
         * Processes the current chunk into json output.
         *
         * @name processChunkJson
         * @function
         * @param {String} text The input text.
         * @param {Object} options An object containing the following fields:
         *
         *  - `json` (Boolean): If `true`, the result will be an object.
         *  - `use_classes` (Boolean): If `true`, HTML classes will be appended to the HTML output.
         *
         * @param {Boolean} markup If false, the colors will not be parsed.
         * @return {Object} The result object:
         *
         *  - `content` (String): The text.
         *  - `fg` (String|null): The foreground color.
         *  - `bg` (String|null): The background color.
         *  - `fg_truecolor` (String|null): The foreground true color (if 16m color is enabled).
         *  - `bg_truecolor` (String|null): The background true color (if 16m color is enabled).
         *  - `clearLine` (Boolean): `true` if a carriageReturn \r was fount at end of line.
         *  - `was_processed` (Bolean): `true` if the colors were processed, `false` otherwise.
         *  - `isEmpty` (Function): A function returning `true` if the content is empty, or `false` otherwise.
         *
         */

    }, {
        key: "processChunkJson",
        value: function processChunkJson(text, options, markup) {

            // Are we using classes or styles?
            options = typeof options == "undefined" ? {} : options;
            var use_classes = options.use_classes = typeof options.use_classes != "undefined" && options.use_classes;
            var key = options.key = use_classes ? "class" : "color";

            var result = {
                content: text,
                fg: null,
                bg: null,
                fg_truecolor: null,
                bg_truecolor: null,
                clearLine: options.clearLine,
                decoration: null,
                was_processed: false,
                isEmpty: function isEmpty() {
                    return !result.content;
                }
            };

            // Each "chunk" is the text after the CSI (ESC + "[") and before the next CSI/EOF.
            //
            // This regex matches four groups within a chunk.
            //
            // The first and third groups match code type.
            // We supported only SGR command. It has empty first group and "m" in third.
            //
            // The second group matches all of the number+semicolon command sequences
            // before the "m" (or other trailing) character.
            // These are the graphics or SGR commands.
            //
            // The last group is the text (including newlines) that is colored by
            // the other group"s commands.
            var matches = text.match(/^([!\x3c-\x3f]*)([\d;]*)([\x20-\x2c]*[\x40-\x7e])([\s\S]*)/m);

            if (!matches) return result;

            var orig_txt = result.content = matches[4];
            var nums = matches[2].split(";");

            // We currently support only "SGR" (Select Graphic Rendition)
            // Simply ignore if not a SGR command.
            if (matches[1] !== "" || matches[3] !== "m") {
                return result;
            }

            if (!markup) {
                return result;
            }

            var self = this;

            self.decoration = null;

            while (nums.length > 0) {
                var num_str = nums.shift();
                var num = parseInt(num_str);

                if (isNaN(num) || num === 0) {
                    self.fg = self.bg = self.decoration = null;
                } else if (num === 1) {
                    self.decoration = "bold";
                } else if (num === 2) {
                    self.decoration = "dim";
                    // Enable code 2 to get string
                } else if (num == 3) {
                    self.decoration = "italic";
                } else if (num == 4) {
                    self.decoration = "underline";
                } else if (num == 5) {
                    self.decoration = "blink";
                } else if (num === 7) {
                    self.decoration = "reverse";
                } else if (num === 8) {
                    self.decoration = "hidden";
                    // Enable code 9 to get strikethrough
                } else if (num === 9) {
                    self.decoration = "strikethrough";
                } else if (num == 39) {
                    self.fg = null;
                } else if (num == 49) {
                    self.bg = null;
                    // Foreground color
                } else if (num >= 30 && num < 38) {
                    self.fg = ANSI_COLORS[0][num % 10][key];
                    // Foreground bright color
                } else if (num >= 90 && num < 98) {
                    self.fg = ANSI_COLORS[1][num % 10][key];
                    // Background color
                } else if (num >= 40 && num < 48) {
                    self.bg = ANSI_COLORS[0][num % 10][key];
                    // Background bright color
                } else if (num >= 100 && num < 108) {
                    self.bg = ANSI_COLORS[1][num % 10][key];
                } else if (num === 38 || num === 48) {
                    // extend color (38=fg, 48=bg)
                    var is_foreground = num === 38;
                    if (nums.length >= 1) {
                        var mode = nums.shift();
                        if (mode === "5" && nums.length >= 1) {
                            // palette color
                            var palette_index = parseInt(nums.shift());
                            if (palette_index >= 0 && palette_index <= 255) {
                                if (!use_classes) {
                                    if (!this.PALETTE_COLORS) {
                                        self.setupPalette();
                                    }
                                    if (is_foreground) {
                                        self.fg = this.PALETTE_COLORS[palette_index];
                                    } else {
                                        self.bg = this.PALETTE_COLORS[palette_index];
                                    }
                                } else {
                                    var klass = palette_index >= 16 ? "ansi-palette-" + palette_index : ANSI_COLORS[palette_index > 7 ? 1 : 0][palette_index % 8]["class"];
                                    if (is_foreground) {
                                        self.fg = klass;
                                    } else {
                                        self.bg = klass;
                                    }
                                }
                            }
                        } else if (mode === "2" && nums.length >= 3) {
                            // true color
                            var r = parseInt(nums.shift());
                            var g = parseInt(nums.shift());
                            var b = parseInt(nums.shift());
                            if (r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255) {
                                var color = r + ", " + g + ", " + b;
                                if (!use_classes) {
                                    if (is_foreground) {
                                        self.fg = color;
                                    } else {
                                        self.bg = color;
                                    }
                                } else {
                                    if (is_foreground) {
                                        self.fg = "ansi-truecolor";
                                        self.fg_truecolor = color;
                                    } else {
                                        self.bg = "ansi-truecolor";
                                        self.bg_truecolor = color;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            if (self.fg === null && self.bg === null && self.decoration === null) {
                return result;
            } else {
                var styles = [];
                var classes = [];
                var data = {};

                result.fg = self.fg;
                result.bg = self.bg;
                result.fg_truecolor = self.fg_truecolor;
                result.bg_truecolor = self.bg_truecolor;
                result.decoration = self.decoration;
                result.was_processed = true;

                return result;
            }
        }

        /**
         * processChunk
         * Processes the current chunk of text.
         *
         * @name processChunk
         * @function
         * @param {String} text The input text.
         * @param {Object} options An object containing the following fields:
         *
         *  - `json` (Boolean): If `true`, the result will be an object.
         *  - `use_classes` (Boolean): If `true`, HTML classes will be appended to the HTML output.
         *
         * @param {Boolean} markup If false, the colors will not be parsed.
         * @return {Object|String} The result (object if `json` is wanted back or string otherwise).
         */

    }, {
        key: "processChunk",
        value: function processChunk(text, options, markup) {
            var _this2 = this;

            var self = this;
            options = options || {};
            var jsonChunk = this.processChunkJson(text, options, markup);

            if (options.json) {
                return jsonChunk;
            }
            if (jsonChunk.isEmpty()) {
                return "";
            }
            if (!jsonChunk.was_processed) {
                return jsonChunk.content;
            }

            var use_classes = options.use_classes;

            var styles = [];
            var classes = [];
            var data = {};
            var render_data = function render_data(data) {
                var fragments = [];
                var key = void 0;
                for (key in data) {
                    if (data.hasOwnProperty(key)) {
                        fragments.push("data-" + key + "=\"" + _this2.escapeForHtml(data[key]) + "\"");
                    }
                }
                return fragments.length > 0 ? " " + fragments.join(" ") : "";
            };

            if (jsonChunk.fg) {
                if (use_classes) {
                    classes.push(jsonChunk.fg + "-fg");
                    if (jsonChunk.fg_truecolor !== null) {
                        data["ansi-truecolor-fg"] = jsonChunk.fg_truecolor;
                        jsonChunk.fg_truecolor = null;
                    }
                } else {
                    styles.push("color:rgb(" + jsonChunk.fg + ")");
                }
            }

            if (jsonChunk.bg) {
                if (use_classes) {
                    classes.push(jsonChunk.bg + "-bg");
                    if (jsonChunk.bg_truecolor !== null) {
                        data["ansi-truecolor-bg"] = jsonChunk.bg_truecolor;
                        jsonChunk.bg_truecolor = null;
                    }
                } else {
                    styles.push("background-color:rgb(" + jsonChunk.bg + ")");
                }
            }

            if (jsonChunk.decoration) {
                if (use_classes) {
                    classes.push("ansi-" + jsonChunk.decoration);
                } else if (jsonChunk.decoration === "bold") {
                    styles.push("font-weight:bold");
                } else if (jsonChunk.decoration === "dim") {
                    styles.push("opacity:0.5");
                } else if (jsonChunk.decoration === "italic") {
                    styles.push("font-style:italic");
                    // underline and blink are treated bellow
                } else if (jsonChunk.decoration === "reverse") {
                    styles.push("filter:invert(100%)");
                } else if (jsonChunk.decoration === "hidden") {
                    styles.push("visibility:hidden");
                } else if (jsonChunk.decoration === "strikethrough") {
                    styles.push("text-decoration:line-through");
                } else {
                    styles.push("text-decoration:" + jsonChunk.decoration);
                }
            }

            if (use_classes) {
                return "<span class=\"" + classes.join(" ") + "\"" + render_data(data) + ">" + jsonChunk.content + "</span>";
            } else {
                return "<span style=\"" + styles.join(";") + "\"" + render_data(data) + ">" + jsonChunk.content + "</span>";
            }
        }
    }]);

    return Anser;
}();

;

module.exports = Anser;

/***/ }),

/***/ "./node_modules/css.escape/css.escape.js":
/*!***********************************************!*\
  !*** ./node_modules/css.escape/css.escape.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
;(function(root, factory) {
	// https://github.com/umdjs/umd/blob/master/returnExports.js
	if (true) {
		// For Node.js.
		module.exports = factory(root);
	} else {}
}(typeof global != 'undefined' ? global : this, function(root) {

	if (root.CSS && root.CSS.escape) {
		return root.CSS.escape;
	}

	// https://drafts.csswg.org/cssom/#serialize-an-identifier
	var cssEscape = function(value) {
		if (arguments.length == 0) {
			throw new TypeError('`CSS.escape` requires an argument.');
		}
		var string = String(value);
		var length = string.length;
		var index = -1;
		var codeUnit;
		var result = '';
		var firstCodeUnit = string.charCodeAt(0);
		while (++index < length) {
			codeUnit = string.charCodeAt(index);
			// Note: there’s no need to special-case astral symbols, surrogate
			// pairs, or lone surrogates.

			// If the character is NULL (U+0000), then the REPLACEMENT CHARACTER
			// (U+FFFD).
			if (codeUnit == 0x0000) {
				result += '\uFFFD';
				continue;
			}

			if (
				// If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
				// U+007F, […]
				(codeUnit >= 0x0001 && codeUnit <= 0x001F) || codeUnit == 0x007F ||
				// If the character is the first character and is in the range [0-9]
				// (U+0030 to U+0039), […]
				(index == 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039) ||
				// If the character is the second character and is in the range [0-9]
				// (U+0030 to U+0039) and the first character is a `-` (U+002D), […]
				(
					index == 1 &&
					codeUnit >= 0x0030 && codeUnit <= 0x0039 &&
					firstCodeUnit == 0x002D
				)
			) {
				// https://drafts.csswg.org/cssom/#escape-a-character-as-code-point
				result += '\\' + codeUnit.toString(16) + ' ';
				continue;
			}

			if (
				// If the character is the first character and is a `-` (U+002D), and
				// there is no second character, […]
				index == 0 &&
				length == 1 &&
				codeUnit == 0x002D
			) {
				result += '\\' + string.charAt(index);
				continue;
			}

			// If the character is not handled by one of the above rules and is
			// greater than or equal to U+0080, is `-` (U+002D) or `_` (U+005F), or
			// is in one of the ranges [0-9] (U+0030 to U+0039), [A-Z] (U+0041 to
			// U+005A), or [a-z] (U+0061 to U+007A), […]
			if (
				codeUnit >= 0x0080 ||
				codeUnit == 0x002D ||
				codeUnit == 0x005F ||
				codeUnit >= 0x0030 && codeUnit <= 0x0039 ||
				codeUnit >= 0x0041 && codeUnit <= 0x005A ||
				codeUnit >= 0x0061 && codeUnit <= 0x007A
			) {
				// the character itself
				result += string.charAt(index);
				continue;
			}

			// Otherwise, the escaped character.
			// https://drafts.csswg.org/cssom/#escape-a-character
			result += '\\' + string.charAt(index);

		}
		return result;
	};

	if (!root.CSS) {
		root.CSS = {};
	}

	root.CSS.escape = cssEscape;
	return cssEscape;

}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/next-pwa/register.js":
/*!*******************************************!*\
  !*** ./node_modules/next-pwa/register.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var workbox_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-window */ "./node_modules/workbox-window/build/workbox-window.prod.es5.mjs");


if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  window.workbox = new workbox_window__WEBPACK_IMPORTED_MODULE_0__["Workbox"]('/sw.js', { scope: '/' })
  
  window.workbox.addEventListener('activated', function(event) {
    if (!event.isUpdate) {
      caches.keys().then(function(c) {
        if (!c.includes('start-url')) {
          fetch('/')
        }
      })
    }
  })

  if(true) {
    window.workbox.register()
  }
}


/***/ }),

/***/ "./node_modules/next/dist/client/dev/dev-build-watcher.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/dev-build-watcher.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports["default"] = initializeBuildWatcher;

var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");

function initializeBuildWatcher(toggleCallback) {
  var shadowHost = document.createElement('div');
  shadowHost.id = '__next-build-watcher'; // Make sure container is fixed and on a high zIndex so it shows

  shadowHost.style.position = 'fixed';
  shadowHost.style.bottom = '10px';
  shadowHost.style.right = '20px';
  shadowHost.style.width = 0;
  shadowHost.style.height = 0;
  shadowHost.style.zIndex = 99999;
  document.body.appendChild(shadowHost);
  var shadowRoot;
  var prefix = '';

  if (shadowHost.attachShadow) {
    shadowRoot = shadowHost.attachShadow({
      mode: 'open'
    });
  } else {
    // If attachShadow is undefined then the browser does not support
    // the Shadow DOM, we need to prefix all the names so there
    // will be no conflicts
    shadowRoot = shadowHost;
    prefix = '__next-build-watcher-';
  } // Container


  var container = createContainer(prefix);
  shadowRoot.appendChild(container); // CSS

  var css = createCss(prefix);
  shadowRoot.appendChild(css); // State

  var isVisible = false;
  var isBuilding = false;
  var timeoutId = null; // Handle events

  var evtSource = (0, _eventsource.getEventSourceWrapper)({
    path: '/_next/webpack-hmr'
  });
  evtSource.addMessageListener(function (event) {
    // This is the heartbeat event
    if (event.data === "\uD83D\uDC93") {
      return;
    }

    try {
      handleMessage(event);
    } catch (_unused) {}
  });

  function handleMessage(event) {
    var obj = typeof event === 'string' ? {
      action: event
    } : JSON.parse(event.data); // eslint-disable-next-line default-case

    switch (obj.action) {
      case 'building':
        timeoutId && clearTimeout(timeoutId);
        isVisible = true;
        isBuilding = true;
        updateContainer();
        break;

      case 'built':
      case 'sync':
        isBuilding = false; // Wait for the fade out transtion to complete

        timeoutId = setTimeout(function () {
          isVisible = false;
          updateContainer();
        }, 100);
        updateContainer();
        break;
    }
  }

  toggleCallback(handleMessage);

  function updateContainer() {
    if (isBuilding) {
      container.classList.add("".concat(prefix, "building"));
    } else {
      container.classList.remove("".concat(prefix, "building"));
    }

    if (isVisible) {
      container.classList.add("".concat(prefix, "visible"));
    } else {
      container.classList.remove("".concat(prefix, "visible"));
    }
  }
}

function createContainer(prefix) {
  var container = document.createElement('div');
  container.id = "".concat(prefix, "container");
  container.innerHTML = "\n    <div id=\"".concat(prefix, "icon-wrapper\">\n      <svg viewBox=\"0 0 226 200\">\n        <defs>\n          <linearGradient\n            x1=\"114.720775%\"\n            y1=\"181.283245%\"\n            x2=\"39.5399306%\"\n            y2=\"100%\"\n            id=\"").concat(prefix, "linear-gradient\"\n          >\n            <stop stop-color=\"#000000\" offset=\"0%\" />\n            <stop stop-color=\"#FFFFFF\" offset=\"100%\" />\n          </linearGradient>\n        </defs>\n        <g id=\"").concat(prefix, "icon-group\" fill=\"none\" stroke=\"url(#").concat(prefix, "linear-gradient)\" stroke-width=\"18\">\n          <path d=\"M113,5.08219117 L4.28393801,197.5 L221.716062,197.5 L113,5.08219117 Z\" />\n        </g>\n      </svg>\n    </div>\n  ");
  return container;
}

function createCss(prefix) {
  var css = document.createElement('style');
  css.textContent = "\n    #".concat(prefix, "container {\n      position: absolute;\n      bottom: 10px;\n      right: 30px;\n\n      border-radius: 3px;\n      background: #000;\n      color: #fff;\n      font: initial;\n      cursor: initial;\n      letter-spacing: initial;\n      text-shadow: initial;\n      text-transform: initial;\n      visibility: initial;\n\n      padding: 7px 10px 8px 10px;\n      align-items: center;\n      box-shadow: 0 11px 40px 0 rgba(0, 0, 0, 0.25), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n\n      display: none;\n      opacity: 0;\n      transition: opacity 0.1s ease, bottom 0.1s ease;\n      animation: ").concat(prefix, "fade-in 0.1s ease-in-out;\n    }\n\n    #").concat(prefix, "container.").concat(prefix, "visible {\n      display: flex;\n    }\n\n    #").concat(prefix, "container.").concat(prefix, "building {\n      bottom: 20px;\n      opacity: 1;\n    }\n\n    #").concat(prefix, "icon-wrapper {\n      width: 16px;\n      height: 16px;\n    }\n\n    #").concat(prefix, "icon-wrapper > svg {\n      width: 100%;\n      height: 100%;\n    }\n\n    #").concat(prefix, "icon-group {\n      animation: ").concat(prefix, "strokedash 1s ease-in-out both infinite;\n    }\n\n    @keyframes ").concat(prefix, "fade-in {\n      from {\n        bottom: 10px;\n        opacity: 0;\n      }\n      to {\n        bottom: 20px;\n        opacity: 1;\n      }\n    }\n\n    @keyframes ").concat(prefix, "strokedash {\n      0% {\n        stroke-dasharray: 0 226;\n      }\n      80%,\n      100% {\n        stroke-dasharray: 659 226;\n      }\n    }\n  ");
  return css;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/error-overlay/eventsource.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.getEventSourceWrapper = getEventSourceWrapper;
var eventCallbacks = [];

function EventSourceWrapper(options) {
  var source;
  var lastActivity = new Date();
  var listeners = [];

  if (!options.timeout) {
    options.timeout = 20 * 1000;
  }

  init();
  var timer = setInterval(function () {
    if (new Date() - lastActivity > options.timeout) {
      handleDisconnect();
    }
  }, options.timeout / 2);

  function init() {
    source = new window.EventSource(options.path);
    source.onopen = handleOnline;
    source.onerror = handleDisconnect;
    source.onmessage = handleMessage;
  }

  function handleOnline() {
    if (options.log) console.log('[HMR] connected');
    lastActivity = new Date();
  }

  function handleMessage(event) {
    lastActivity = new Date();

    for (var i = 0; i < listeners.length; i++) {
      listeners[i](event);
    }

    eventCallbacks.forEach(function (cb) {
      if (!cb.unfiltered && event.data.indexOf('action') === -1) return;
      cb(event);
    });
  }

  function handleDisconnect() {
    clearInterval(timer);
    source.close();
    setTimeout(init, options.timeout);
  }

  return {
    close: function close() {
      clearInterval(timer);
      source.close();
    },
    addMessageListener: function addMessageListener(fn) {
      listeners.push(fn);
    }
  };
}

_c = EventSourceWrapper;

function getEventSourceWrapper(options) {
  if (!options.ondemand) {
    return {
      addMessageListener: function addMessageListener(cb) {
        eventCallbacks.push(cb);
      }
    };
  }

  return EventSourceWrapper(options);
}

var _c;

$RefreshReg$(_c, "EventSourceWrapper");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/error-overlay/format-webpack-messages.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/error-overlay/format-webpack-messages.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/**
MIT License
Copyright (c) 2015-present, Facebook, Inc.
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
// This file is based on https://github.com/facebook/create-react-app/blob/7b1a32be6ec9f99a6c9a3c66813f3ac09c4736b9/packages/react-dev-utils/formatWebpackMessages.js
// It's been edited to remove chalk and CRA-specific logic

var _toConsumableArray = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var friendlySyntaxErrorLabel = 'Syntax error:';

function isLikelyASyntaxError(message) {
  return message.indexOf(friendlySyntaxErrorLabel) !== -1;
} // Cleans up webpack error messages.


function formatMessage(message) {
  // TODO: Replace this once webpack 5 is stable
  if (typeof message === 'object' && message.message) {
    message = (message.moduleName ? message.moduleName + '\n' : '') + (message.file ? message.file + '\n' : '') + message.message;
  }

  var lines = message.split('\n'); // Strip Webpack-added headers off errors/warnings
  // https://github.com/webpack/webpack/blob/master/lib/ModuleError.js

  lines = lines.filter(function (line) {
    return !/Module [A-z ]+\(from/.test(line);
  }); // Transform parsing error into syntax error
  // TODO: move this to our ESLint formatter?

  lines = lines.map(function (line) {
    var parsingError = /Line (\d+):(?:(\d+):)?\s*Parsing error: (.+)$/.exec(line);

    if (!parsingError) {
      return line;
    }

    var _parsingError = _slicedToArray(parsingError, 4),
        errorLine = _parsingError[1],
        errorColumn = _parsingError[2],
        errorMessage = _parsingError[3];

    return "".concat(friendlySyntaxErrorLabel, " ").concat(errorMessage, " (").concat(errorLine, ":").concat(errorColumn, ")");
  });
  message = lines.join('\n'); // Smoosh syntax errors (commonly found in CSS)

  message = message.replace(/SyntaxError\s+\((\d+):(\d+)\)\s*(.+?)\n/g, "".concat(friendlySyntaxErrorLabel, " $3 ($1:$2)\n")); // Clean up export errors

  message = message.replace(/^.*export '(.+?)' was not found in '(.+?)'.*$/gm, "Attempted import error: '$1' is not exported from '$2'.");
  message = message.replace(/^.*export 'default' \(imported as '(.+?)'\) was not found in '(.+?)'.*$/gm, "Attempted import error: '$2' does not contain a default export (imported as '$1').");
  message = message.replace(/^.*export '(.+?)' \(imported as '(.+?)'\) was not found in '(.+?)'.*$/gm, "Attempted import error: '$1' is not exported from '$3' (imported as '$2').");
  lines = message.split('\n'); // Remove leading newline

  if (lines.length > 2 && lines[1].trim() === '') {
    lines.splice(1, 1);
  } // Clean up file name


  lines[0] = lines[0].replace(/^(.*) \d+:\d+-\d+$/, '$1'); // Cleans up verbose "module not found" messages for files and packages.

  if (lines[1] && lines[1].indexOf('Module not found: ') === 0) {
    lines = [lines[0], lines[1].replace('Error: ', '').replace('Module not found: Cannot find file:', 'Cannot find file:')].concat(_toConsumableArray(lines.slice(2).filter(function (line) {
      return line.indexOf(' @ ') !== 0;
    })));
  } // Add helpful message for users trying to use Sass for the first time


  if (lines[1] && lines[1].match(/Cannot find module.+node-sass/)) {
    // ./file.module.scss (<<loader info>>) => ./file.module.scss
    lines[0] = lines[0].replace(/(.+) \(.+?(?=\?\?).+?\)/, '$1');
    lines[1] = "To use Next.js' built-in Sass support, you first need to install `sass`.\n";
    lines[1] += 'Run `npm i sass` or `yarn add sass` inside your workspace.\n';
    lines[1] += '\nLearn more: https://err.sh/next.js/install-sass';
  }

  message = lines.join('\n'); // Internal stacks are generally useless so we strip them... with the
  // exception of stacks containing `webpack:` because they're normally
  // from user code generated by Webpack. For more information see
  // https://github.com/facebook/create-react-app/pull/1050

  message = message.replace(/^\s*at\s((?!webpack:).)*:\d+:\d+[\s)]*(\n|$)/gm, ''); // at ... ...:x:y

  message = message.replace(/^\s*at\s<anonymous>(\n|$)/gm, ''); // at <anonymous>

  lines = message.split('\n'); // Remove duplicated newlines

  lines = lines.filter(function (line, index, arr) {
    return index === 0 || line.trim() !== '' || line.trim() !== arr[index - 1].trim();
  }); // Reassemble the message

  message = lines.join('\n');
  return message.trim();
}

function formatWebpackMessages(json) {
  var formattedErrors = json.errors.map(function (message) {
    return formatMessage(message, true);
  });
  var formattedWarnings = json.warnings.map(function (message) {
    return formatMessage(message, false);
  });
  var result = {
    errors: formattedErrors,
    warnings: formattedWarnings
  };

  if (result.errors.some(isLikelyASyntaxError)) {
    // If there are any syntax errors, show just them.
    result.errors = result.errors.filter(isLikelyASyntaxError);
  }

  return result;
}

module.exports = formatWebpackMessages;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/error-overlay/hot-dev-client.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/error-overlay/hot-dev-client.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports["default"] = connect;

var DevOverlay = _interopRequireWildcard(__webpack_require__(/*! @next/react-dev-overlay/lib/client */ "./node_modules/@next/react-dev-overlay/lib/client.js"));

var _stripAnsi = _interopRequireDefault(__webpack_require__(/*! next/dist/compiled/strip-ansi */ "./node_modules/next/dist/compiled/strip-ansi/index.js"));

var _eventsource = __webpack_require__(/*! ./eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");

var _formatWebpackMessages = _interopRequireDefault(__webpack_require__(/*! ./format-webpack-messages */ "./node_modules/next/dist/client/dev/error-overlay/format-webpack-messages.js"));
/**
* MIT License
*
* Copyright (c) 2013-present, Facebook, Inc.
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
// This file is a modified version of the Create React App HMR dev client that
// can be found here:
// https://github.com/facebook/create-react-app/blob/v3.4.1/packages/react-dev-utils/webpackHotDevClient.js
// This alternative WebpackDevServer combines the functionality of:
// https://github.com/webpack/webpack-dev-server/blob/webpack-1/client/index.js
// https://github.com/webpack/webpack/blob/webpack-1/hot/dev-server.js
// It only supports their simplest configuration (hot updates on same server).
// It makes some opinionated choices on top, like adding a syntax error overlay
// that looks similar to our console output. The error overlay is inspired by:
// https://github.com/glenjamin/webpack-hot-middleware


var hadRuntimeError = false;
var customHmrEventHandler;

function connect(options) {
  DevOverlay.register();
  (0, _eventsource.getEventSourceWrapper)(options).addMessageListener(function (event) {
    // This is the heartbeat event
    if (event.data === "\uD83D\uDC93") {
      return;
    }

    try {
      processMessage(event);
    } catch (ex) {
      console.warn('Invalid HMR message: ' + event.data + '\n' + ex);
    }
  });
  return {
    subscribeToHmrEvent: function subscribeToHmrEvent(handler) {
      customHmrEventHandler = handler;
    },
    onUnrecoverableError: function onUnrecoverableError() {
      hadRuntimeError = true;
    }
  };
} // Remember some state related to hot module replacement.


var isFirstCompilation = true;
var mostRecentCompilationHash = null;
var hasCompileErrors = false;

function clearOutdatedErrors() {
  // Clean up outdated compile errors, if any.
  if (typeof console !== 'undefined' && typeof console.clear === 'function') {
    if (hasCompileErrors) {
      console.clear();
    }
  }
} // Successful compilation.


function handleSuccess() {
  clearOutdatedErrors();
  var isHotUpdate = !isFirstCompilation;
  isFirstCompilation = false;
  hasCompileErrors = false; // Attempt to apply hot updates or reload.

  if (isHotUpdate) {
    tryApplyUpdates(function onSuccessfulHotUpdate(hasUpdates) {
      // Only dismiss it when we're sure it's a hot update.
      // Otherwise it would flicker right before the reload.
      onFastRefresh(hasUpdates);
    });
  }
} // Compilation with warnings (e.g. ESLint).


function handleWarnings(warnings) {
  clearOutdatedErrors();
  var isHotUpdate = !isFirstCompilation;
  isFirstCompilation = false;
  hasCompileErrors = false;

  function printWarnings() {
    // Print warnings to the console.
    var formatted = (0, _formatWebpackMessages["default"])({
      warnings: warnings,
      errors: []
    });

    if (typeof console !== 'undefined' && typeof console.warn === 'function') {
      for (var i = 0; i < formatted.warnings.length; i++) {
        if (i === 5) {
          console.warn('There were more warnings in other files.\n' + 'You can find a complete log in the terminal.');
          break;
        }

        console.warn((0, _stripAnsi["default"])(formatted.warnings[i]));
      }
    }
  }

  printWarnings(); // Attempt to apply hot updates or reload.

  if (isHotUpdate) {
    tryApplyUpdates(function onSuccessfulHotUpdate(hasUpdates) {
      // Only dismiss it when we're sure it's a hot update.
      // Otherwise it would flicker right before the reload.
      onFastRefresh(hasUpdates);
    });
  }
} // Compilation with errors (e.g. syntax error or missing modules).


function handleErrors(errors) {
  clearOutdatedErrors();
  isFirstCompilation = false;
  hasCompileErrors = true; // "Massage" webpack messages.

  var formatted = (0, _formatWebpackMessages["default"])({
    errors: errors,
    warnings: []
  }); // Only show the first error.

  DevOverlay.onBuildError(formatted.errors[0]); // Also log them to the console.

  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    for (var i = 0; i < formatted.errors.length; i++) {
      console.error((0, _stripAnsi["default"])(formatted.errors[i]));
    }
  } // Do not attempt to reload now.
  // We will reload on next success instead.


  if (undefined) {
    if (self.__NEXT_HMR_CB) {
      self.__NEXT_HMR_CB(formatted.errors[0]);

      self.__NEXT_HMR_CB = null;
    }
  }
}

function onFastRefresh(hasUpdates) {
  DevOverlay.onBuildOk();

  if (hasUpdates) {
    DevOverlay.onRefresh();
  }

  console.log('[Fast Refresh] done');
} // There is a newer version of the code available.


function handleAvailableHash(hash) {
  // Update last known compilation hash.
  mostRecentCompilationHash = hash;
} // Handle messages from the server.


function processMessage(e) {
  var obj = JSON.parse(e.data);

  switch (obj.action) {
    case 'building':
      {
        console.log('[Fast Refresh] rebuilding');
        break;
      }

    case 'built':
    case 'sync':
      {
        if (obj.hash) {
          handleAvailableHash(obj.hash);
        }

        var errors = obj.errors,
            warnings = obj.warnings;
        var hasErrors = Boolean(errors && errors.length);

        if (hasErrors) {
          return handleErrors(errors);
        }

        var hasWarnings = Boolean(warnings && warnings.length);

        if (hasWarnings) {
          return handleWarnings(warnings);
        }

        return handleSuccess();
      }

    default:
      {
        if (customHmrEventHandler) {
          customHmrEventHandler(obj);
          break;
        }

        break;
      }
  }
} // Is there a newer version of this code available?


function isUpdateAvailable() {
  /* globals __webpack_hash__ */
  // __webpack_hash__ is the hash of the current compilation.
  // It's a global variable injected by Webpack.
  return mostRecentCompilationHash !== __webpack_require__.h();
} // Webpack disallows updates in other states.


function canApplyUpdates() {
  return module.hot.status() === 'idle';
}

function afterApplyUpdates(fn) {
  if (canApplyUpdates()) {
    fn();
  } else {
    var handler = function handler(status) {
      if (status === 'idle') {
        module.hot.removeStatusHandler(handler);
        fn();
      }
    };

    module.hot.addStatusHandler(handler);
  }
} // Attempt to update code on the fly, fall back to a hard reload.


function tryApplyUpdates(onHotUpdateSuccess) {
  if (false) {}

  if (!isUpdateAvailable() || !canApplyUpdates()) {
    return;
  }

  function handleApplyUpdates(err, updatedModules) {
    if (err || hadRuntimeError || !updatedModules) {
      if (err) {
        console.warn('[Fast Refresh] performing full reload\n\n' + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + 'You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n' + 'Consider migrating the non-React component export to a separate file and importing it into both files.\n\n' + 'It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n' + 'Fast Refresh requires at least one parent function component in your React tree.');
      } else if (hadRuntimeError) {
        console.warn('[Fast Refresh] performing full reload because your application had an unrecoverable error');
      }

      window.location.reload();
      return;
    }

    var hasUpdates = Boolean(updatedModules.length);

    if (typeof onHotUpdateSuccess === 'function') {
      // Maybe we want to do something.
      onHotUpdateSuccess(hasUpdates);
    }

    if (isUpdateAvailable()) {
      // While we were updating, there was a new update! Do it again.
      tryApplyUpdates(hasUpdates ? undefined : onHotUpdateSuccess);
    } else {
      if (undefined) {
        afterApplyUpdates(function () {
          if (self.__NEXT_HMR_CB) {
            self.__NEXT_HMR_CB();

            self.__NEXT_HMR_CB = null;
          }
        });
      }
    }
  } // https://webpack.js.org/api/hot-module-replacement/#check


  module.hot.check(
  /* autoApply */
  true).then(function (updatedModules) {
    handleApplyUpdates(null, updatedModules);
  }, function (err) {
    handleApplyUpdates(err, null);
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/event-source-polyfill.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/event-source-polyfill.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports["default"] = void 0;
/* eslint-disable */
// Improved version of https://github.com/Yaffle/EventSource/
// Available under MIT License (MIT)
// Only tries to support IE11 and nothing below

var document = window.document;
var Response = window.Response;
var TextDecoder = window.TextDecoder;
var TextEncoder = window.TextEncoder;
var AbortController = window.AbortController;

if (AbortController == undefined) {
  AbortController = function AbortController() {
    this.signal = null;

    this.abort = function () {};
  };
}

function TextDecoderPolyfill() {
  this.bitsNeeded = 0;
  this.codePoint = 0;
}

_c = TextDecoderPolyfill;

TextDecoderPolyfill.prototype.decode = function (octets) {
  function valid(codePoint, shift, octetsCount) {
    if (octetsCount === 1) {
      return codePoint >= 0x0080 >> shift && codePoint << shift <= 0x07ff;
    }

    if (octetsCount === 2) {
      return codePoint >= 0x0800 >> shift && codePoint << shift <= 0xd7ff || codePoint >= 0xe000 >> shift && codePoint << shift <= 0xffff;
    }

    if (octetsCount === 3) {
      return codePoint >= 0x010000 >> shift && codePoint << shift <= 0x10ffff;
    }

    throw new Error();
  }

  function octetsCount(bitsNeeded, codePoint) {
    if (bitsNeeded === 6 * 1) {
      return codePoint >> 6 > 15 ? 3 : codePoint > 31 ? 2 : 1;
    }

    if (bitsNeeded === 6 * 2) {
      return codePoint > 15 ? 3 : 2;
    }

    if (bitsNeeded === 6 * 3) {
      return 3;
    }

    throw new Error();
  }

  var REPLACER = 0xfffd;
  var string = '';
  var bitsNeeded = this.bitsNeeded;
  var codePoint = this.codePoint;

  for (var i = 0; i < octets.length; i += 1) {
    var octet = octets[i];

    if (bitsNeeded !== 0) {
      if (octet < 128 || octet > 191 || !valid(codePoint << 6 | octet & 63, bitsNeeded - 6, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
        string += String.fromCharCode(codePoint);
      }
    }

    if (bitsNeeded === 0) {
      if (octet >= 0 && octet <= 127) {
        bitsNeeded = 0;
        codePoint = octet;
      } else if (octet >= 192 && octet <= 223) {
        bitsNeeded = 6 * 1;
        codePoint = octet & 31;
      } else if (octet >= 224 && octet <= 239) {
        bitsNeeded = 6 * 2;
        codePoint = octet & 15;
      } else if (octet >= 240 && octet <= 247) {
        bitsNeeded = 6 * 3;
        codePoint = octet & 7;
      } else {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }

      if (bitsNeeded !== 0 && !valid(codePoint, bitsNeeded, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }
    } else {
      bitsNeeded -= 6;
      codePoint = codePoint << 6 | octet & 63;
    }

    if (bitsNeeded === 0) {
      if (codePoint <= 0xffff) {
        string += String.fromCharCode(codePoint);
      } else {
        string += String.fromCharCode(0xd800 + (codePoint - 0xffff - 1 >> 10));
        string += String.fromCharCode(0xdc00 + (codePoint - 0xffff - 1 & 0x3ff));
      }
    }
  }

  this.bitsNeeded = bitsNeeded;
  this.codePoint = codePoint;
  return string;
}; // Firefox < 38 throws an error with stream option


var supportsStreamOption = function supportsStreamOption() {
  try {
    return new TextDecoder().decode(new TextEncoder().encode('test'), {
      stream: true
    }) === 'test';
  } catch (error) {
    console.log(error);
  }

  return false;
}; // IE, Edge


if (TextDecoder == undefined || TextEncoder == undefined || !supportsStreamOption()) {
  TextDecoder = TextDecoderPolyfill;
}

var k = function k() {};

function XHRWrapper(xhr) {
  this.withCredentials = false;
  this.responseType = '';
  this.readyState = 0;
  this.status = 0;
  this.statusText = '';
  this.responseText = '';
  this.onprogress = k;
  this.onreadystatechange = k;
  this._contentType = '';
  this._xhr = xhr;
  this._sendTimeout = 0;
  this._abort = k;
}

_c2 = XHRWrapper;

XHRWrapper.prototype.open = function (method, url) {
  this._abort(true);

  var that = this;
  var xhr = this._xhr;
  var state = 1;
  var timeout = 0;

  this._abort = function (silent) {
    if (that._sendTimeout !== 0) {
      clearTimeout(that._sendTimeout);
      that._sendTimeout = 0;
    }

    if (state === 1 || state === 2 || state === 3) {
      state = 4;
      xhr.onload = k;
      xhr.onerror = k;
      xhr.onabort = k;
      xhr.onprogress = k;
      xhr.onreadystatechange = k; // IE 8 - 9: XDomainRequest#abort() does not fire any event
      // Opera < 10: XMLHttpRequest#abort() does not fire any event

      xhr.abort();

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      if (!silent) {
        that.readyState = 4;
        that.onreadystatechange();
      }
    }

    state = 0;
  };

  var onStart = function onStart() {
    if (state === 1) {
      // state = 2;
      var status = 0;
      var statusText = '';
      var contentType = undefined;

      if (!('contentType' in xhr)) {
        try {
          status = xhr.status;
          statusText = xhr.statusText;
          contentType = xhr.getResponseHeader('Content-Type');
        } catch (error) {
          // IE < 10 throws exception for `xhr.status` when xhr.readyState === 2 || xhr.readyState === 3
          // Opera < 11 throws exception for `xhr.status` when xhr.readyState === 2
          // https://bugs.webkit.org/show_bug.cgi?id=29121
          status = 0;
          statusText = '';
          contentType = undefined; // Firefox < 14, Chrome ?, Safari ?
          // https://bugs.webkit.org/show_bug.cgi?id=29658
          // https://bugs.webkit.org/show_bug.cgi?id=77854
        }
      } else {
        status = 200;
        statusText = 'OK';
        contentType = xhr.contentType;
      }

      if (status !== 0) {
        state = 2;
        that.readyState = 2;
        that.status = status;
        that.statusText = statusText;
        that._contentType = contentType;
        that.onreadystatechange();
      }
    }
  };

  var onProgress = function onProgress() {
    onStart();

    if (state === 2 || state === 3) {
      state = 3;
      var responseText = '';

      try {
        responseText = xhr.responseText;
      } catch (error) {// IE 8 - 9 with XMLHttpRequest
      }

      that.readyState = 3;
      that.responseText = responseText;
      that.onprogress();
    }
  };

  var onFinish = function onFinish() {
    // Firefox 52 fires "readystatechange" (xhr.readyState === 4) without final "readystatechange" (xhr.readyState === 3)
    // IE 8 fires "onload" without "onprogress"
    onProgress();

    if (state === 1 || state === 2 || state === 3) {
      state = 4;

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      that.readyState = 4;
      that.onreadystatechange();
    }
  };

  var onReadyStateChange = function onReadyStateChange() {
    if (xhr != undefined) {
      // Opera 12
      if (xhr.readyState === 4) {
        onFinish();
      } else if (xhr.readyState === 3) {
        onProgress();
      } else if (xhr.readyState === 2) {
        onStart();
      }
    }
  };

  var onTimeout = function onTimeout() {
    timeout = setTimeout(function () {
      onTimeout();
    }, 500);

    if (xhr.readyState === 3) {
      onProgress();
    }
  }; // XDomainRequest#abort removes onprogress, onerror, onload


  xhr.onload = onFinish;
  xhr.onerror = onFinish; // improper fix to match Firefox behavior, but it is better than just ignore abort
  // see https://bugzilla.mozilla.org/show_bug.cgi?id=768596
  // https://bugzilla.mozilla.org/show_bug.cgi?id=880200
  // https://code.google.com/p/chromium/issues/detail?id=153570
  // IE 8 fires "onload" without "onprogress

  xhr.onabort = onFinish; // https://bugzilla.mozilla.org/show_bug.cgi?id=736723

  if (!('sendAsBinary' in XMLHttpRequest.prototype) && !('mozAnon' in XMLHttpRequest.prototype)) {
    xhr.onprogress = onProgress;
  } // IE 8 - 9 (XMLHTTPRequest)
  // Opera < 12
  // Firefox < 3.5
  // Firefox 3.5 - 3.6 - ? < 9.0
  // onprogress is not fired sometimes or delayed
  // see also #64


  xhr.onreadystatechange = onReadyStateChange;

  if ('contentType' in xhr) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + 'padding=true';
  }

  xhr.open(method, url, true);

  if ('readyState' in xhr) {
    // workaround for Opera 12 issue with "progress" events
    // #91
    timeout = setTimeout(function () {
      onTimeout();
    }, 0);
  }
};

XHRWrapper.prototype.abort = function () {
  this._abort(false);
};

XHRWrapper.prototype.getResponseHeader = function (name) {
  return this._contentType;
};

XHRWrapper.prototype.setRequestHeader = function (name, value) {
  var xhr = this._xhr;

  if ('setRequestHeader' in xhr) {
    xhr.setRequestHeader(name, value);
  }
};

XHRWrapper.prototype.getAllResponseHeaders = function () {
  return this._xhr.getAllResponseHeaders != undefined ? this._xhr.getAllResponseHeaders() : '';
};

XHRWrapper.prototype.send = function () {
  // loading indicator in Safari < ? (6), Chrome < 14, Firefox
  if (!('ontimeout' in XMLHttpRequest.prototype) && document != undefined && document.readyState != undefined && document.readyState !== 'complete') {
    var that = this;
    that._sendTimeout = setTimeout(function () {
      that._sendTimeout = 0;
      that.send();
    }, 4);
    return;
  }

  var xhr = this._xhr; // withCredentials should be set after "open" for Safari and Chrome (< 19 ?)

  xhr.withCredentials = this.withCredentials;
  xhr.responseType = this.responseType;

  try {
    // xhr.send(); throws "Not enough arguments" in Firefox 3.0
    xhr.send(undefined);
  } catch (error1) {
    // Safari 5.1.7, Opera 12
    throw error1;
  }
};

function toLowerCase(name) {
  return name.replace(/[A-Z]/g, function (c) {
    return String.fromCharCode(c.charCodeAt(0) + 0x20);
  });
}

function HeadersPolyfill(all) {
  // Get headers: implemented according to mozilla's example code: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders#Example
  var map = Object.create(null);
  var array = all.split('\r\n');

  for (var i = 0; i < array.length; i += 1) {
    var line = array[i];
    var parts = line.split(': ');
    var name = parts.shift();
    var value = parts.join(': ');
    map[toLowerCase(name)] = value;
  }

  this._map = map;
}

_c3 = HeadersPolyfill;

HeadersPolyfill.prototype.get = function (name) {
  return this._map[toLowerCase(name)];
};

function XHRTransport() {}

_c4 = XHRTransport;

XHRTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  xhr.open('GET', url);
  var offset = 0;

  xhr.onprogress = function () {
    var responseText = xhr.responseText;
    var chunk = responseText.slice(offset);
    offset += chunk.length;
    onProgressCallback(chunk);
  };

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 2) {
      var status = xhr.status;
      var statusText = xhr.statusText;
      var contentType = xhr.getResponseHeader('Content-Type');
      var headers = xhr.getAllResponseHeaders();
      onStartCallback(status, statusText, contentType, new HeadersPolyfill(headers), function () {
        xhr.abort();
      });
    } else if (xhr.readyState === 4) {
      onFinishCallback();
    }
  };

  xhr.withCredentials = withCredentials;
  xhr.responseType = 'text';

  for (var name in headers) {
    if (Object.prototype.hasOwnProperty.call(headers, name)) {
      xhr.setRequestHeader(name, headers[name]);
    }
  }

  xhr.send();
};

function HeadersWrapper(headers) {
  this._headers = headers;
}

_c5 = HeadersWrapper;

HeadersWrapper.prototype.get = function (name) {
  return this._headers.get(name);
};

function FetchTransport() {}

_c6 = FetchTransport;

FetchTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  var controller = new AbortController();
  var signal = controller.signal; // see #120

  var textDecoder = new TextDecoder();
  fetch(url, {
    headers: headers,
    credentials: withCredentials ? 'include' : 'same-origin',
    signal: signal,
    cache: 'no-store'
  }).then(function (response) {
    var reader = response.body.getReader();
    onStartCallback(response.status, response.statusText, response.headers.get('Content-Type'), new HeadersWrapper(response.headers), function () {
      controller.abort();
      reader.cancel();
    });
    return new Promise(function (resolve, reject) {
      var readNextChunk = function readNextChunk() {
        reader.read().then(function (result) {
          if (result.done) {
            // Note: bytes in textDecoder are ignored
            resolve(undefined);
          } else {
            var chunk = textDecoder.decode(result.value, {
              stream: true
            });
            onProgressCallback(chunk);
            readNextChunk();
          }
        })['catch'](function (error) {
          reject(error);
        });
      };

      readNextChunk();
    });
  }).then(function (result) {
    onFinishCallback();
    return result;
  }, function (error) {
    onFinishCallback();
    return Promise.reject(error);
  });
};

function EventTarget() {
  this._listeners = Object.create(null);
}

_c7 = EventTarget;

function throwError(e) {
  setTimeout(function () {
    throw e;
  }, 0);
}

EventTarget.prototype.dispatchEvent = function (event) {
  event.target = this;
  var typeListeners = this._listeners[event.type];

  if (typeListeners != undefined) {
    var length = typeListeners.length;

    for (var i = 0; i < length; i += 1) {
      var listener = typeListeners[i];

      try {
        if (typeof listener.handleEvent === 'function') {
          listener.handleEvent(event);
        } else {
          listener.call(this, event);
        }
      } catch (e) {
        throwError(e);
      }
    }
  }
};

EventTarget.prototype.addEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];

  if (typeListeners == undefined) {
    typeListeners = [];
    listeners[type] = typeListeners;
  }

  var found = false;

  for (var i = 0; i < typeListeners.length; i += 1) {
    if (typeListeners[i] === listener) {
      found = true;
    }
  }

  if (!found) {
    typeListeners.push(listener);
  }
};

EventTarget.prototype.removeEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];

  if (typeListeners != undefined) {
    var filtered = [];

    for (var i = 0; i < typeListeners.length; i += 1) {
      if (typeListeners[i] !== listener) {
        filtered.push(typeListeners[i]);
      }
    }

    if (filtered.length === 0) {
      delete listeners[type];
    } else {
      listeners[type] = filtered;
    }
  }
};

function Event(type) {
  this.type = type;
  this.target = undefined;
}

_c8 = Event;

function MessageEvent(type, options) {
  Event.call(this, type);
  this.data = options.data;
  this.lastEventId = options.lastEventId;
}

_c9 = MessageEvent;
MessageEvent.prototype = Object.create(Event.prototype);

function ConnectionEvent(type, options) {
  Event.call(this, type);
  this.status = options.status;
  this.statusText = options.statusText;
  this.headers = options.headers;
}

_c10 = ConnectionEvent;
ConnectionEvent.prototype = Object.create(Event.prototype);
var WAITING = -1;
var CONNECTING = 0;
var OPEN = 1;
var CLOSED = 2;
var AFTER_CR = -1;
var FIELD_START = 0;
var FIELD = 1;
var VALUE_START = 2;
var VALUE = 3;
var contentTypeRegExp = /^text\/event\-stream;?(\s*charset\=utf\-8)?$/i;
var MINIMUM_DURATION = 1000;
var MAXIMUM_DURATION = 18000000;

var parseDuration = function parseDuration(value, def) {
  var n = parseInt(value, 10);

  if (n !== n) {
    n = def;
  }

  return clampDuration(n);
};

var clampDuration = function clampDuration(n) {
  return Math.min(Math.max(n, MINIMUM_DURATION), MAXIMUM_DURATION);
};

var fire = function fire(that, f, event) {
  try {
    if (typeof f === 'function') {
      f.call(that, event);
    }
  } catch (e) {
    throwError(e);
  }
};

function EventSourcePolyfill(url, options) {
  EventTarget.call(this);
  this.onopen = undefined;
  this.onmessage = undefined;
  this.onerror = undefined;
  this.url = undefined;
  this.readyState = undefined;
  this.withCredentials = undefined;
  this._close = undefined;
  start(this, url, options);
}

_c11 = EventSourcePolyfill;
var isFetchSupported = fetch != undefined && Response != undefined && 'body' in Response.prototype;

function start(es, url, options) {
  url = String(url);
  var withCredentials = options != undefined && Boolean(options.withCredentials);
  var initialRetry = clampDuration(1000);
  var heartbeatTimeout = options != undefined && options.heartbeatTimeout != undefined ? parseDuration(options.heartbeatTimeout, 45000) : clampDuration(45000);
  var lastEventId = '';
  var retry = initialRetry;
  var wasActivity = false;
  var headers = options != undefined && options.headers != undefined ? JSON.parse(JSON.stringify(options.headers)) : undefined;
  var CurrentTransport = options != undefined && options.Transport != undefined ? options.Transport : XMLHttpRequest;
  var xhr = isFetchSupported && !(options != undefined && options.Transport != undefined) ? undefined : new XHRWrapper(new CurrentTransport());
  var transport = xhr == undefined ? new FetchTransport() : new XHRTransport();
  var cancelFunction = undefined;
  var timeout = 0;
  var currentState = WAITING;
  var dataBuffer = '';
  var lastEventIdBuffer = '';
  var eventTypeBuffer = '';
  var textBuffer = '';
  var state = FIELD_START;
  var fieldStart = 0;
  var valueStart = 0;

  var onStart = function onStart(status, statusText, contentType, headers, cancel) {
    if (currentState === CONNECTING) {
      cancelFunction = cancel;

      if (status === 200 && contentType != undefined && contentTypeRegExp.test(contentType)) {
        currentState = OPEN;
        wasActivity = true;
        retry = initialRetry;
        es.readyState = OPEN;
        var event = new ConnectionEvent('open', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onopen, event);
      } else {
        var message = '';

        if (status !== 200) {
          if (statusText) {
            statusText = statusText.replace(/\s+/g, ' ');
          }

          message = "EventSource's response has a status " + status + ' ' + statusText + ' that is not 200. Aborting the connection.';
        } else {
          message = "EventSource's response has a Content-Type specifying an unsupported type: " + (contentType == undefined ? '-' : contentType.replace(/\s+/g, ' ')) + '. Aborting the connection.';
        }

        throwError(new Error(message));
        close();
        var event = new ConnectionEvent('error', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onerror, event);
      }
    }
  };

  var onProgress = function onProgress(textChunk) {
    if (currentState === OPEN) {
      var n = -1;

      for (var i = 0; i < textChunk.length; i += 1) {
        var c = textChunk.charCodeAt(i);

        if (c === '\n'.charCodeAt(0) || c === '\r'.charCodeAt(0)) {
          n = i;
        }
      }

      var chunk = (n !== -1 ? textBuffer : '') + textChunk.slice(0, n + 1);
      textBuffer = (n === -1 ? textBuffer : '') + textChunk.slice(n + 1);

      if (chunk !== '') {
        wasActivity = true;
      }

      for (var position = 0; position < chunk.length; position += 1) {
        var c = chunk.charCodeAt(position);

        if (state === AFTER_CR && c === '\n'.charCodeAt(0)) {
          state = FIELD_START;
        } else {
          if (state === AFTER_CR) {
            state = FIELD_START;
          }

          if (c === '\r'.charCodeAt(0) || c === '\n'.charCodeAt(0)) {
            if (state !== FIELD_START) {
              if (state === FIELD) {
                valueStart = position + 1;
              }

              var field = chunk.slice(fieldStart, valueStart - 1);
              var value = chunk.slice(valueStart + (valueStart < position && chunk.charCodeAt(valueStart) === ' '.charCodeAt(0) ? 1 : 0), position);

              if (field === 'data') {
                dataBuffer += '\n';
                dataBuffer += value;
              } else if (field === 'id') {
                lastEventIdBuffer = value;
              } else if (field === 'event') {
                eventTypeBuffer = value;
              } else if (field === 'retry') {
                initialRetry = parseDuration(value, initialRetry);
                retry = initialRetry;
              } else if (field === 'heartbeatTimeout') {
                heartbeatTimeout = parseDuration(value, heartbeatTimeout);

                if (timeout !== 0) {
                  clearTimeout(timeout);
                  timeout = setTimeout(function () {
                    onTimeout();
                  }, heartbeatTimeout);
                }
              }
            }

            if (state === FIELD_START) {
              if (dataBuffer !== '') {
                lastEventId = lastEventIdBuffer;

                if (eventTypeBuffer === '') {
                  eventTypeBuffer = 'message';
                }

                var event = new MessageEvent(eventTypeBuffer, {
                  data: dataBuffer.slice(1),
                  lastEventId: lastEventIdBuffer
                });
                es.dispatchEvent(event);

                if (eventTypeBuffer === 'message') {
                  fire(es, es.onmessage, event);
                }

                if (currentState === CLOSED) {
                  return;
                }
              }

              dataBuffer = '';
              eventTypeBuffer = '';
            }

            state = c === '\r'.charCodeAt(0) ? AFTER_CR : FIELD_START;
          } else {
            if (state === FIELD_START) {
              fieldStart = position;
              state = FIELD;
            }

            if (state === FIELD) {
              if (c === ':'.charCodeAt(0)) {
                valueStart = position + 1;
                state = VALUE_START;
              }
            } else if (state === VALUE_START) {
              state = VALUE;
            }
          }
        }
      }
    }
  };

  var onFinish = function onFinish() {
    if (currentState === OPEN || currentState === CONNECTING) {
      currentState = WAITING;

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      timeout = setTimeout(function () {
        onTimeout();
      }, retry);
      retry = clampDuration(Math.min(initialRetry * 16, retry * 2));
      es.readyState = CONNECTING;
      var event = new Event('error');
      es.dispatchEvent(event);
      fire(es, es.onerror, event);
    }
  };

  var close = function close() {
    currentState = CLOSED;

    if (cancelFunction != undefined) {
      cancelFunction();
      cancelFunction = undefined;
    }

    if (timeout !== 0) {
      clearTimeout(timeout);
      timeout = 0;
    }

    es.readyState = CLOSED;
  };

  var onTimeout = function onTimeout() {
    timeout = 0;

    if (currentState !== WAITING) {
      if (!wasActivity && cancelFunction != undefined) {
        throwError(new Error('No activity within ' + heartbeatTimeout + ' milliseconds. Reconnecting.'));
        cancelFunction();
        cancelFunction = undefined;
      } else {
        wasActivity = false;
        timeout = setTimeout(function () {
          onTimeout();
        }, heartbeatTimeout);
      }

      return;
    }

    wasActivity = false;
    timeout = setTimeout(function () {
      onTimeout();
    }, heartbeatTimeout);
    currentState = CONNECTING;
    dataBuffer = '';
    eventTypeBuffer = '';
    lastEventIdBuffer = lastEventId;
    textBuffer = '';
    fieldStart = 0;
    valueStart = 0;
    state = FIELD_START; // https://bugzilla.mozilla.org/show_bug.cgi?id=428916
    // Request header field Last-Event-ID is not allowed by Access-Control-Allow-Headers.

    var requestURL = url;

    if (url.slice(0, 5) !== 'data:' && url.slice(0, 5) !== 'blob:') {
      if (lastEventId !== '') {
        requestURL += (url.indexOf('?') === -1 ? '?' : '&') + 'lastEventId=' + encodeURIComponent(lastEventId);
      }
    }

    var requestHeaders = {};
    requestHeaders['Accept'] = 'text/event-stream';

    if (headers != undefined) {
      for (var name in headers) {
        if (Object.prototype.hasOwnProperty.call(headers, name)) {
          requestHeaders[name] = headers[name];
        }
      }
    }

    try {
      transport.open(xhr, onStart, onProgress, onFinish, requestURL, withCredentials, requestHeaders);
    } catch (error) {
      close();
      throw error;
    }
  };

  es.url = url;
  es.readyState = CONNECTING;
  es.withCredentials = withCredentials;
  es._close = close;
  onTimeout();
}

EventSourcePolyfill.prototype = Object.create(EventTarget.prototype);
EventSourcePolyfill.prototype.CONNECTING = CONNECTING;
EventSourcePolyfill.prototype.OPEN = OPEN;
EventSourcePolyfill.prototype.CLOSED = CLOSED;

EventSourcePolyfill.prototype.close = function () {
  this._close();
};

EventSourcePolyfill.CONNECTING = CONNECTING;
EventSourcePolyfill.OPEN = OPEN;
EventSourcePolyfill.CLOSED = CLOSED;
EventSourcePolyfill.prototype.withCredentials = undefined;
var _default = EventSourcePolyfill;
exports["default"] = _default;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;

$RefreshReg$(_c, "TextDecoderPolyfill");
$RefreshReg$(_c2, "XHRWrapper");
$RefreshReg$(_c3, "HeadersPolyfill");
$RefreshReg$(_c4, "XHRTransport");
$RefreshReg$(_c5, "HeadersWrapper");
$RefreshReg$(_c6, "FetchTransport");
$RefreshReg$(_c7, "EventTarget");
$RefreshReg$(_c8, "Event");
$RefreshReg$(_c9, "MessageEvent");
$RefreshReg$(_c10, "ConnectionEvent");
$RefreshReg$(_c11, "EventSourcePolyfill");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/fouc.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/client/dev/fouc.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.displayContent = displayContent; // This function is used to remove Next.js' no-FOUC styles workaround for using
// `style-loader` in development. It must be called before hydration, or else
// rendering won't have the correct computed values in effects.

function displayContent(callback) {
  ;
  (window.requestAnimationFrame || setTimeout)(function () {
    for (var x = document.querySelectorAll('[data-next-hide-fouc]'), i = x.length; i--;) {
      x[i].parentNode.removeChild(x[i]);
    }

    if (callback) {
      callback();
    }
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/on-demand-entries-client.js":
/*!***********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/on-demand-entries-client.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = void 0;

var _router = _interopRequireDefault(__webpack_require__(/*! next/router */ "./node_modules/next/router.js"));

var _onDemandEntriesUtils = __webpack_require__(/*! ./on-demand-entries-utils */ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js");

var _default = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref) {
    var assetPrefix;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            assetPrefix = _ref.assetPrefix;

            _router["default"].ready(function () {
              _router["default"].events.on('routeChangeComplete', _onDemandEntriesUtils.setupPing.bind(void 0, assetPrefix, function () {
                return _router["default"].pathname;
              }));
            });

            (0, _onDemandEntriesUtils.setupPing)(assetPrefix, function () {
              return _router["default"].pathname;
            }, _onDemandEntriesUtils.currentPage); // prevent HMR connection from being closed when running tests

            if (!undefined) {
              document.addEventListener('visibilitychange', function (_event) {
                var state = document.visibilityState;

                if (state === 'visible') {
                  (0, _onDemandEntriesUtils.setupPing)(assetPrefix, function () {
                    return _router["default"].pathname;
                  }, true);
                } else {
                  (0, _onDemandEntriesUtils.closePing)();
                }
              });
              window.addEventListener('beforeunload', function () {
                (0, _onDemandEntriesUtils.closePing)();
              });
            }

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function _default(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports["default"] = _default;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/on-demand-entries-utils.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.closePing = closePing;
exports.setupPing = setupPing;
exports.currentPage = void 0;

var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");
/* global location */


var evtSource;
var currentPage;
exports.currentPage = currentPage;

function closePing() {
  if (evtSource) evtSource.close();
  evtSource = null;
}

function setupPing(assetPrefix, pathnameFn, retry) {
  var pathname = pathnameFn(); // Make sure to only create new EventSource request if page has changed

  if (pathname === currentPage && !retry) return;
  exports.currentPage = currentPage = pathname; // close current EventSource connection

  closePing();
  var url = "".concat(assetPrefix, "/_next/webpack-hmr?page=").concat(currentPage);
  evtSource = (0, _eventsource.getEventSourceWrapper)({
    path: url,
    timeout: 5000,
    ondemand: 1
  });
  evtSource.addMessageListener(function (event) {
    if (event.data.indexOf('{') === -1) return;

    try {
      var payload = JSON.parse(event.data);

      if (payload.invalid) {
        // Payload can be invalid even if the page does not exist.
        // So, we need to make sure it exists before reloading.
        fetch(location.href, {
          credentials: 'same-origin'
        }).then(function (pageRes) {
          if (pageRes.status === 200) {
            location.reload();
          }
        });
      }
    } catch (err) {
      console.error('on-demand-entries failed to parse response', err);
    }
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/webpack-hot-middleware-client.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/webpack-hot-middleware-client.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = void 0;

var _hotDevClient = _interopRequireDefault(__webpack_require__(/*! ./error-overlay/hot-dev-client */ "./node_modules/next/dist/client/dev/error-overlay/hot-dev-client.js"));

var _default = function _default(_ref) {
  var assetPrefix = _ref.assetPrefix;
  var options = {
    path: "".concat(assetPrefix, "/_next/webpack-hmr")
  };
  var devClient = (0, _hotDevClient["default"])(options);
  devClient.subscribeToHmrEvent(function (obj) {
    if (obj.action === 'reloadPage') {
      return window.location.reload();
    }

    if (obj.action === 'removedPage') {
      var _obj$data = _slicedToArray(obj.data, 1),
          page = _obj$data[0];

      if (page === window.next.router.pathname) {
        return window.location.reload();
      }

      return;
    }

    if (obj.action === 'addedPage') {
      var _obj$data2 = _slicedToArray(obj.data, 1),
          _page = _obj$data2[0];

      if (_page === window.next.router.pathname && typeof window.next.router.components[_page] === 'undefined') {
        return window.location.reload();
      }

      return;
    }

    throw new Error('Unexpected action ' + obj.action);
  });
  return devClient;
};

exports["default"] = _default;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/head-manager.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/head-manager.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports["default"] = initHeadManager;
exports.DOMAttributeNames = void 0;
var DOMAttributeNames = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv',
  noModule: 'noModule'
};
exports.DOMAttributeNames = DOMAttributeNames;

function reactElementToDOM(_ref) {
  var type = _ref.type,
      props = _ref.props;
  var el = document.createElement(type);

  for (var p in props) {
    if (!props.hasOwnProperty(p)) continue;
    if (p === 'children' || p === 'dangerouslySetInnerHTML') continue; // we don't render undefined props to the DOM

    if (props[p] === undefined) continue;
    var attr = DOMAttributeNames[p] || p.toLowerCase();

    if (type === 'script' && (attr === 'async' || attr === 'defer' || attr === 'noModule')) {
      ;
      el[attr] = !!props[p];
    } else {
      el.setAttribute(attr, props[p]);
    }
  }

  var children = props.children,
      dangerouslySetInnerHTML = props.dangerouslySetInnerHTML;

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  }

  return el;
}

function updateElements(type, components) {
  var headEl = document.getElementsByTagName('head')[0];
  var headCountEl = headEl.querySelector('meta[name=next-head-count]');

  if (true) {
    if (!headCountEl) {
      console.error('Warning: next-head-count is missing. https://err.sh/next.js/next-head-count-missing');
      return;
    }
  }

  var headCount = Number(headCountEl.content);
  var oldTags = [];

  for (var i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = j.previousElementSibling) {
    if (j.tagName.toLowerCase() === type) {
      oldTags.push(j);
    }
  }

  var newTags = components.map(reactElementToDOM).filter(function (newTag) {
    for (var k = 0, len = oldTags.length; k < len; k++) {
      var oldTag = oldTags[k];

      if (oldTag.isEqualNode(newTag)) {
        oldTags.splice(k, 1);
        return false;
      }
    }

    return true;
  });
  oldTags.forEach(function (t) {
    return t.parentNode.removeChild(t);
  });
  newTags.forEach(function (t) {
    return headEl.insertBefore(t, headCountEl);
  });
  headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
}

function initHeadManager() {
  var updatePromise = null;
  return {
    mountedInstances: new Set(),
    updateHead: function updateHead(head) {
      var promise = updatePromise = Promise.resolve().then(function () {
        if (promise !== updatePromise) return;
        updatePromise = null;
        var tags = {};
        head.forEach(function (h) {
          var components = tags[h.type] || [];
          components.push(h);
          tags[h.type] = components;
        });
        var titleComponent = tags.title ? tags.title[0] : null;
        var title = '';

        if (titleComponent) {
          var children = titleComponent.props.children;
          title = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
        }

        if (title !== document.title) document.title = title;
        ['meta', 'base', 'link', 'style', 'script'].forEach(function (type) {
          updateElements(type, tags[type] || []);
        });
      });
    }
  };
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/index.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _interopRequireWildcard3 = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.render = render;
exports.renderError = renderError;
exports["default"] = exports.emitter = exports.router = exports.version = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _interopRequireWildcard2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"));

__webpack_require__(/*! @next/polyfill-module */ "./node_modules/@next/polyfill-module/dist/polyfill-module.js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.module.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.module.js"));

var _headManagerContext = __webpack_require__(/*! ../next-server/lib/head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _isDynamic = __webpack_require__(/*! ../next-server/lib/router/utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var querystring = _interopRequireWildcard3(__webpack_require__(/*! ../next-server/lib/router/utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

var envConfig = _interopRequireWildcard3(__webpack_require__(/*! ../next-server/lib/runtime-config */ "./node_modules/next/dist/next-server/lib/runtime-config.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _headManager = _interopRequireDefault(__webpack_require__(/*! ./head-manager */ "./node_modules/next/dist/client/head-manager.js"));

var _pageLoader = _interopRequireDefault(__webpack_require__(/*! ./page-loader */ "./node_modules/next/dist/client/page-loader.js"));

var _performanceRelayer = _interopRequireDefault(__webpack_require__(/*! ./performance-relayer */ "./node_modules/next/dist/client/performance-relayer.js"));

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");
/* global location */


var data = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
window.__NEXT_DATA__ = data;
var version = "10.0.5";
exports.version = version;

var looseToArray = function looseToArray(input) {
  return [].slice.call(input);
};

var hydrateProps = data.props,
    hydrateErr = data.err,
    page = data.page,
    query = data.query,
    buildId = data.buildId,
    assetPrefix = data.assetPrefix,
    runtimeConfig = data.runtimeConfig,
    dynamicIds = data.dynamicIds,
    isFallback = data.isFallback,
    locales = data.locales,
    domainLocales = data.domainLocales;
var locale = data.locale,
    defaultLocale = data.defaultLocale;
var prefix = assetPrefix || ''; // With dynamic assetPrefix it's no longer possible to set assetPrefix at the build time
// So, this is how we do it in the client side at runtime

__webpack_require__.p = "".concat(prefix, "/_next/"); //eslint-disable-line
// Initialize next/config with the environment configuration

envConfig.setConfig({
  serverRuntimeConfig: {},
  publicRuntimeConfig: runtimeConfig || {}
});
var asPath = (0, _utils.getURL)(); // make sure not to attempt stripping basePath for 404s

if ((0, _router.hasBasePath)(asPath)) {
  asPath = (0, _router.delBasePath)(asPath);
}

if (false) { var detectedDomain, localePathResult, parsedAs, _require4, formatUrl, _require3, parseRelativeUrl, _require2, detectDomainLocale, _require, normalizeLocalePath; }

var pageLoader = new _pageLoader["default"](buildId, prefix);

var register = function register(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      r = _ref2[0],
      f = _ref2[1];

  return pageLoader.routeLoader.onEntrypoint(r, f);
};

if (window.__NEXT_P) {
  // Defer page registration for another tick. This will increase the overall
  // latency in hydrating the page, but reduce the total blocking time.
  window.__NEXT_P.map(function (p) {
    return setTimeout(function () {
      return register(p);
    }, 0);
  });
}

window.__NEXT_P = [];
window.__NEXT_P.push = register;
var headManager = (0, _headManager["default"])();
var appElement = document.getElementById('__next');
var lastAppProps;

var _lastRenderReject;

var webpackHMR;
var router;
exports.router = router;
var CachedComponent;
var CachedApp, onPerfEntry;

var Container = /*#__PURE__*/function (_react$default$Compon) {
  _inherits(Container, _react$default$Compon);

  var _super = _createSuper(Container);

  function Container() {
    _classCallCheck(this, Container);

    return _super.apply(this, arguments);
  }

  _createClass(Container, [{
    key: "componentDidCatch",
    value: function componentDidCatch(componentErr, info) {
      this.props.fn(componentErr, info);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollToHash(); // We need to replace the router state if:
      // - the page was (auto) exported and has a query string or search (hash)
      // - it was auto exported and is a dynamic route (to provide params)
      // - if it is a client-side skeleton (fallback render)

      if (router.isSsr && (isFallback || data.nextExport && ((0, _isDynamic.isDynamicRoute)(router.pathname) || location.search) || hydrateProps && hydrateProps.__N_SSG && location.search)) {
        // update query on mount for exported pages
        router.replace(router.pathname + '?' + String(querystring.assign(querystring.urlQueryToSearchParams(router.query), new URLSearchParams(location.search))), asPath, {
          // @ts-ignore
          // WARNING: `_h` is an internal option for handing Next.js
          // client-side hydration. Your app should _never_ use this property.
          // It may change at any time without notice.
          _h: 1,
          // Fallback pages must trigger the data fetch, so the transition is
          // not shallow.
          // Other pages (strictly updating query) happens shallowly, as data
          // requirements would already be present.
          shallow: !isFallback
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.scrollToHash();
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash() {
      var _location = location,
          hash = _location.hash;
      hash = hash && hash.substring(1);
      if (!hash) return;
      var el = document.getElementById(hash);
      if (!el) return; // If we call scrollIntoView() in here without a setTimeout
      // it won't scroll properly.

      setTimeout(function () {
        return el.scrollIntoView();
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      if (false) {} else {
        var _require5 = __webpack_require__(/*! @next/react-dev-overlay/lib/client */ "./node_modules/@next/react-dev-overlay/lib/client.js"),
            ReactDevOverlay = _require5.ReactDevOverlay;

        return /*#__PURE__*/_react["default"].createElement(ReactDevOverlay, null, this.props.children);
      }
    }
  }]);

  return Container;
}(_react["default"].Component);

var emitter = (0, _mitt["default"])();
exports.emitter = emitter;

var _default = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var opts,
        appEntrypoint,
        app,
        mod,
        initialErr,
        pageEntrypoint,
        _require6,
        isValidElementType,
        _require7,
        getNodeError,
        renderCtx,
        _args = arguments;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            opts = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};

            // This makes sure this specific lines are removed in production
            if (true) {
              webpackHMR = opts.webpackHMR;
            }

            _context.next = 4;
            return pageLoader.routeLoader.whenEntrypoint('/_app');

          case 4:
            appEntrypoint = _context.sent;

            if (!('error' in appEntrypoint)) {
              _context.next = 7;
              break;
            }

            throw appEntrypoint.error;

          case 7:
            app = appEntrypoint.component, mod = appEntrypoint.exports;
            CachedApp = app;

            if (mod && mod.reportWebVitals) {
              onPerfEntry = function onPerfEntry(_ref4) {
                var id = _ref4.id,
                    name = _ref4.name,
                    startTime = _ref4.startTime,
                    value = _ref4.value,
                    duration = _ref4.duration,
                    entryType = _ref4.entryType,
                    entries = _ref4.entries;
                // Combines timestamp with random number for unique ID
                var uniqueID = "".concat(Date.now(), "-").concat(Math.floor(Math.random() * (9e12 - 1)) + 1e12);
                var perfStartEntry;

                if (entries && entries.length) {
                  perfStartEntry = entries[0].startTime;
                }

                mod.reportWebVitals({
                  id: id || uniqueID,
                  name: name,
                  startTime: startTime || perfStartEntry,
                  value: value == null ? duration : value,
                  label: entryType === 'mark' || entryType === 'measure' ? 'custom' : 'web-vital'
                });
              };
            }

            initialErr = hydrateErr;
            _context.prev = 11;

            if (!( true && hydrateErr)) {
              _context.next = 16;
              break;
            }

            _context.t0 = {
              error: hydrateErr
            };
            _context.next = 19;
            break;

          case 16:
            _context.next = 18;
            return pageLoader.routeLoader.whenEntrypoint(page);

          case 18:
            _context.t0 = _context.sent;

          case 19:
            pageEntrypoint = _context.t0;

            if (!('error' in pageEntrypoint)) {
              _context.next = 22;
              break;
            }

            throw pageEntrypoint.error;

          case 22:
            CachedComponent = pageEntrypoint.component;

            if (false) {}

            _require6 = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"), isValidElementType = _require6.isValidElementType;

            if (isValidElementType(CachedComponent)) {
              _context.next = 27;
              break;
            }

            throw new Error("The default export is not a React Component in page: \"".concat(page, "\""));

          case 27:
            _context.next = 32;
            break;

          case 29:
            _context.prev = 29;
            _context.t1 = _context["catch"](11);
            // This catches errors like throwing in the top level of a module
            initialErr = _context.t1;

          case 32:
            if (true) {
              _require7 = __webpack_require__(/*! @next/react-dev-overlay/lib/client */ "./node_modules/@next/react-dev-overlay/lib/client.js"), getNodeError = _require7.getNodeError; // Server-side runtime errors need to be re-thrown on the client-side so
              // that the overlay is rendered.

              if (initialErr) {
                if (initialErr === hydrateErr) {
                  setTimeout(function () {
                    var error;

                    try {
                      // Generate a new error object. We `throw` it because some browsers
                      // will set the `stack` when thrown, and we want to ensure ours is
                      // not overridden when we re-throw it below.
                      throw new Error(initialErr.message);
                    } catch (e) {
                      error = e;
                    }

                    error.name = initialErr.name;
                    error.stack = initialErr.stack;
                    var node = getNodeError(error);
                    throw node;
                  });
                } // We replaced the server-side error with a client-side error, and should
                // no longer rewrite the stack trace to a Node error.
                else {
                    setTimeout(function () {
                      throw initialErr;
                    });
                  }
              }
            }

            if (!window.__NEXT_PRELOADREADY) {
              _context.next = 36;
              break;
            }

            _context.next = 36;
            return window.__NEXT_PRELOADREADY(dynamicIds);

          case 36:
            exports.router = router = (0, _router2.createRouter)(page, query, asPath, {
              initialProps: hydrateProps,
              pageLoader: pageLoader,
              App: CachedApp,
              Component: CachedComponent,
              wrapApp: wrapApp,
              err: initialErr,
              isFallback: Boolean(isFallback),
              subscription: function subscription(info, App, scroll) {
                return render(Object.assign({}, info, {
                  App: App,
                  scroll: scroll
                }));
              },
              locale: locale,
              locales: locales,
              defaultLocale: defaultLocale,
              domainLocales: domainLocales
            }); // call init-client middleware

            if (false) {}

            renderCtx = {
              App: CachedApp,
              initial: true,
              Component: CachedComponent,
              props: hydrateProps,
              err: initialErr
            };

            if (true) {
              _context.next = 44;
              break;
            }

            render(renderCtx);
            return _context.abrupt("return", emitter);

          case 44:
            return _context.abrupt("return", {
              emitter: emitter,
              render: render,
              renderCtx: renderCtx
            });

          case 45:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[11, 29]]);
  }));

  return function _default() {
    return _ref3.apply(this, arguments);
  };
}();

exports["default"] = _default;

function render(_x) {
  return _render.apply(this, arguments);
} // This method handles all runtime and debug errors.
// 404 and 500 errors are special kind of errors
// and they are still handle via the main render method.


function _render() {
  _render = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(renderingProps) {
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!renderingProps.err) {
              _context2.next = 4;
              break;
            }

            _context2.next = 3;
            return renderError(renderingProps);

          case 3:
            return _context2.abrupt("return");

          case 4:
            _context2.prev = 4;
            _context2.next = 7;
            return doRender(renderingProps);

          case 7:
            _context2.next = 16;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](4);

            if (!_context2.t0.cancelled) {
              _context2.next = 13;
              break;
            }

            throw _context2.t0;

          case 13:
            if (true) {
              // Ensure this error is displayed in the overlay in development
              setTimeout(function () {
                throw _context2.t0;
              });
            }

            _context2.next = 16;
            return renderError((0, _extends2["default"])({}, renderingProps, {
              err: _context2.t0
            }));

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[4, 9]]);
  }));
  return _render.apply(this, arguments);
}

function renderError(renderErrorProps) {
  var App = renderErrorProps.App,
      err = renderErrorProps.err; // In development runtime errors are caught by our overlay
  // In production we catch runtime errors using componentDidCatch which will trigger renderError

  if (true) {
    // A Next.js rendering runtime error is always unrecoverable
    // FIXME: let's make this recoverable (error in GIP client-transition)
    webpackHMR.onUnrecoverableError(); // We need to render an empty <App> so that the `<ReactDevOverlay>` can
    // render itself.

    return doRender({
      App: function App() {
        return null;
      },
      props: {},
      Component: function Component() {
        return null;
      },
      styleSheets: []
    });
  }

  if (false) {} // Make sure we log the error to the console, otherwise users can't track down issues.


  console.error(err);
  return pageLoader.loadPage('/_error').then(function (_ref5) {
    var ErrorComponent = _ref5.page,
        styleSheets = _ref5.styleSheets;
    // In production we do a normal render with the `ErrorComponent` as component.
    // If we've gotten here upon initial render, we can use the props from the server.
    // Otherwise, we need to call `getInitialProps` on `App` before mounting.
    var AppTree = wrapApp(App);
    var appCtx = {
      Component: ErrorComponent,
      AppTree: AppTree,
      router: router,
      ctx: {
        err: err,
        pathname: page,
        query: query,
        asPath: asPath,
        AppTree: AppTree
      }
    };
    return Promise.resolve(renderErrorProps.props ? renderErrorProps.props : (0, _utils.loadGetInitialProps)(App, appCtx)).then(function (initProps) {
      return doRender((0, _extends2["default"])({}, renderErrorProps, {
        err: err,
        Component: ErrorComponent,
        styleSheets: styleSheets,
        props: initProps
      }));
    });
  });
}

var reactRoot = null;
var shouldUseHydrate = typeof _reactDom["default"].hydrate === 'function';

function renderReactElement(reactEl, domEl) {
  if (false) { var opts; } else {
    // mark start of hydrate/render
    if (_utils.ST) {
      performance.mark('beforeRender');
    } // The check for `.hydrate` is there to support React alternatives like preact


    if (shouldUseHydrate) {
      _reactDom["default"].hydrate(reactEl, domEl, markHydrateComplete);

      shouldUseHydrate = false;
    } else {
      _reactDom["default"].render(reactEl, domEl, markRenderComplete);
    }
  }
}

function markHydrateComplete() {
  if (!_utils.ST) return;
  performance.mark('afterHydrate'); // mark end of hydration

  performance.measure('Next.js-before-hydration', 'navigationStart', 'beforeRender');
  performance.measure('Next.js-hydration', 'beforeRender', 'afterHydrate');

  if (onPerfEntry) {
    performance.getEntriesByName('Next.js-hydration').forEach(onPerfEntry);
  }

  clearMarks();
}

function markRenderComplete() {
  if (!_utils.ST) return;
  performance.mark('afterRender'); // mark end of render

  var navStartEntries = performance.getEntriesByName('routeChange', 'mark');

  if (!navStartEntries.length) {
    return;
  }

  performance.measure('Next.js-route-change-to-render', navStartEntries[0].name, 'beforeRender');
  performance.measure('Next.js-render', 'beforeRender', 'afterRender');

  if (onPerfEntry) {
    performance.getEntriesByName('Next.js-render').forEach(onPerfEntry);
    performance.getEntriesByName('Next.js-route-change-to-render').forEach(onPerfEntry);
  }

  clearMarks();
  ['Next.js-route-change-to-render', 'Next.js-render'].forEach(function (measure) {
    return performance.clearMeasures(measure);
  });
}

function clearMarks() {
  ;
  ['beforeRender', 'afterHydrate', 'afterRender', 'routeChange'].forEach(function (mark) {
    return performance.clearMarks(mark);
  });
}

function AppContainer(_ref6) {
  var children = _ref6.children;
  return /*#__PURE__*/_react["default"].createElement(Container, {
    fn: function fn(error) {
      return renderError({
        App: CachedApp,
        err: error
      })["catch"](function (err) {
        return console.error('Error rendering page: ', err);
      });
    }
  }, /*#__PURE__*/_react["default"].createElement(_routerContext.RouterContext.Provider, {
    value: (0, _router2.makePublicRouterInstance)(router)
  }, /*#__PURE__*/_react["default"].createElement(_headManagerContext.HeadManagerContext.Provider, {
    value: headManager
  }, children)));
}

_c = AppContainer;

var wrapApp = function wrapApp(App) {
  return function (wrappedAppProps) {
    var appProps = (0, _extends2["default"])({}, wrappedAppProps, {
      Component: CachedComponent,
      err: hydrateErr,
      router: router
    });
    return /*#__PURE__*/_react["default"].createElement(AppContainer, null, /*#__PURE__*/_react["default"].createElement(App, appProps));
  };
};

function doRender(input) {
  var App = input.App,
      Component = input.Component,
      props = input.props,
      err = input.err;
  var styleSheets = 'initial' in input ? undefined : input.styleSheets;
  Component = Component || lastAppProps.Component;
  props = props || lastAppProps.props;
  var appProps = (0, _extends2["default"])({}, props, {
    Component: Component,
    err: err,
    router: router
  }); // lastAppProps has to be set before ReactDom.render to account for ReactDom throwing an error.

  lastAppProps = appProps;
  var canceled = false;
  var resolvePromise;
  var renderPromise = new Promise(function (resolve, reject) {
    if (_lastRenderReject) {
      _lastRenderReject();
    }

    resolvePromise = function resolvePromise() {
      _lastRenderReject = null;
      resolve();
    };

    _lastRenderReject = function lastRenderReject() {
      canceled = true;
      _lastRenderReject = null;
      var error = new Error('Cancel rendering route');
      error.cancelled = true;
      reject(error);
    };
  }); // This function has a return type to ensure it doesn't start returning a
  // Promise. It should remain synchronous.

  function onStart() {
    if (!styleSheets || // We use `style-loader` in development, so we don't need to do anything
    // unless we're in production:
    true) {
      return false;
    }

    var currentStyleTags = looseToArray(document.querySelectorAll('style[data-n-href]'));
    var currentHrefs = new Set(currentStyleTags.map(function (tag) {
      return tag.getAttribute('data-n-href');
    }));
    var noscript = document.querySelector('noscript[data-n-css]');
    var nonce = noscript == null ? void 0 : noscript.getAttribute('data-n-css');
    styleSheets.forEach(function (_ref7) {
      var href = _ref7.href,
          text = _ref7.text;

      if (!currentHrefs.has(href)) {
        var styleTag = document.createElement('style');
        styleTag.setAttribute('data-n-href', href);
        styleTag.setAttribute('media', 'x');

        if (nonce) {
          styleTag.setAttribute('nonce', nonce);
        }

        document.head.appendChild(styleTag);
        styleTag.appendChild(document.createTextNode(text));
      }
    });
    return true;
  }

  function onHeadCommit() {
    if ( // We use `style-loader` in development, so we don't need to do anything
    // unless we're in production:
    false) { var referenceNode, idx, currentHrefs, currentStyleTags, desiredHrefs; }

    if (input.scroll) {
      window.scrollTo(input.scroll.x, input.scroll.y);
    }
  }

  function onRootCommit() {
    resolvePromise();
  }

  var elem = /*#__PURE__*/_react["default"].createElement(Root, {
    callback: onRootCommit
  }, /*#__PURE__*/_react["default"].createElement(Head, {
    callback: onHeadCommit
  }), /*#__PURE__*/_react["default"].createElement(AppContainer, null, /*#__PURE__*/_react["default"].createElement(App, appProps)));

  onStart(); // We catch runtime errors using componentDidCatch which will trigger renderError

  renderReactElement( false ? /*#__PURE__*/undefined : elem, appElement);
  return renderPromise;
}

function Root(_ref9) {
  _s();

  var callback = _ref9.callback,
      children = _ref9.children;

  // We use `useLayoutEffect` to guarantee the callback is executed
  // as soon as React flushes the update.
  _react["default"].useLayoutEffect(function () {
    return callback();
  }, [callback]);

  if (undefined) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    _react["default"].useEffect(function () {
      window.__NEXT_HYDRATED = true;

      if (window.__NEXT_HYDRATED_CB) {
        window.__NEXT_HYDRATED_CB();
      }
    }, []);
  } // We should ask to measure the Web Vitals after rendering completes so we
  // don't cause any hydration delay:


  _react["default"].useEffect(function () {
    (0, _performanceRelayer["default"])(onPerfEntry);
  }, []);

  return children;
} // Dummy component that we render as a child of Root so that we can
// toggle the correct styles before the page is rendered.


_s(Root, "KDoBXdlwSU+O+uFsByO25XxhKDU=");

_c2 = Root;

function Head(_ref10) {
  _s2();

  var callback = _ref10.callback;

  // We use `useLayoutEffect` to guarantee the callback is executed
  // as soon as React flushes the update.
  _react["default"].useLayoutEffect(function () {
    return callback();
  }, [callback]);

  return null;
}

_s2(Head, "n7/vCynhJvM+pLkyL2DMQUF0odM=");

_c3 = Head;

var _c, _c2, _c3;

$RefreshReg$(_c, "AppContainer");
$RefreshReg$(_c2, "Root");
$RefreshReg$(_c3, "Head");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/next-dev.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/client/next-dev.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var next = _interopRequireWildcard(__webpack_require__(/*! ./ */ "./node_modules/next/dist/client/index.js"));

var _eventSourcePolyfill = _interopRequireDefault(__webpack_require__(/*! ./dev/event-source-polyfill */ "./node_modules/next/dist/client/dev/event-source-polyfill.js"));

var _onDemandEntriesClient = _interopRequireDefault(__webpack_require__(/*! ./dev/on-demand-entries-client */ "./node_modules/next/dist/client/dev/on-demand-entries-client.js"));

var _webpackHotMiddlewareClient = _interopRequireDefault(__webpack_require__(/*! ./dev/webpack-hot-middleware-client */ "./node_modules/next/dist/client/dev/webpack-hot-middleware-client.js"));

var _devBuildWatcher = _interopRequireDefault(__webpack_require__(/*! ./dev/dev-build-watcher */ "./node_modules/next/dist/client/dev/dev-build-watcher.js"));

var _fouc = __webpack_require__(/*! ./dev/fouc */ "./node_modules/next/dist/client/dev/fouc.js");

var _eventsource = __webpack_require__(/*! ./dev/error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");

var querystring = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));
/* globals import('./dev/noop'); */
// Temporary workaround for the issue described here:
// https://github.com/vercel/next.js/issues/3775#issuecomment-407438123
// The runtimeChunk doesn't have dynamic import handling code when there hasn't been a dynamic import
// The runtimeChunk can't hot reload itself currently to correct it when adding pages using on-demand-entries
// eslint-disable-next-line no-unused-expressions


__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! ./dev/noop */ "./node_modules/next/dist/client/dev/noop.js", 7));
; // Support EventSource on Internet Explorer 11

if (!window.EventSource) {
  window.EventSource = _eventSourcePolyfill["default"];
}

var _window = window,
    assetPrefix = _window.__NEXT_DATA__.assetPrefix;
var prefix = assetPrefix || '';
var webpackHMR = (0, _webpackHotMiddlewareClient["default"])({
  assetPrefix: prefix
});
window.next = next;
(0, next["default"])({
  webpackHMR: webpackHMR
}).then(function (_ref) {
  var renderCtx = _ref.renderCtx,
      render = _ref.render;
  (0, _onDemandEntriesClient["default"])({
    assetPrefix: prefix
  });

  var buildIndicatorHandler = function buildIndicatorHandler() {};

  function devPagesManifestListener(event) {
    if (event.data.indexOf('devPagesManifest') !== -1) {
      fetch("".concat(prefix, "/_next/static/development/_devPagesManifest.json")).then(function (res) {
        return res.json();
      }).then(function (manifest) {
        window.__DEV_PAGES_MANIFEST = manifest;
      })["catch"](function (err) {
        console.log("Failed to fetch devPagesManifest", err);
      });
    } else if (event.data.indexOf('serverOnlyChanges') !== -1) {
      var _JSON$parse = JSON.parse(event.data),
          pages = _JSON$parse.pages;

      var router = window.next.router;

      if (pages.includes(router.pathname)) {
        console.log('Refreshing page data due to server-side change');
        buildIndicatorHandler('building');

        var clearIndicator = function clearIndicator() {
          return buildIndicatorHandler('built');
        };

        router.replace(router.pathname + '?' + String(querystring.assign(querystring.urlQueryToSearchParams(router.query), new URLSearchParams(location.search))), router.asPath)["finally"](clearIndicator);
      }
    }
  }

  devPagesManifestListener.unfiltered = true;
  (0, _eventsource.getEventSourceWrapper)({}).addMessageListener(devPagesManifestListener);

  if (true) {
    (0, _devBuildWatcher["default"])(function (handler) {
      buildIndicatorHandler = handler;
    });
  } // delay rendering until after styles have been applied in development


  (0, _fouc.displayContent)(function () {
    render(renderCtx);
  });
})["catch"](function (err) {
  console.error('Error was not caught', err);
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


var normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/page-loader.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/page-loader.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = void 0;

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "./node_modules/next/dist/next-server/lib/router/utils/get-asset-path-from-route.js"));

var _isDynamic = __webpack_require__(/*! ../next-server/lib/router/utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ../next-server/lib/router/utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _routeLoader = _interopRequireWildcard(__webpack_require__(/*! ./route-loader */ "./node_modules/next/dist/client/route-loader.js"));

function normalizeRoute(route) {
  if (route[0] !== '/') {
    throw new Error("Route name should start with a \"/\", got \"".concat(route, "\""));
  }

  if (route === '/') return route;
  return route.replace(/\/$/, '');
}

var PageLoader = /*#__PURE__*/function () {
  function PageLoader(buildId, assetPrefix) {
    _classCallCheck(this, PageLoader);

    this.buildId = void 0;
    this.assetPrefix = void 0;
    this.promisedSsgManifest = void 0;
    this.promisedDevPagesManifest = void 0;
    this.routeLoader = void 0;
    this.routeLoader = (0, _routeLoader["default"])(assetPrefix);
    this.buildId = buildId;
    this.assetPrefix = assetPrefix;
    /** @type {Promise<Set<string>>} */

    this.promisedSsgManifest = new Promise(function (resolve) {
      if (window.__SSG_MANIFEST) {
        resolve(window.__SSG_MANIFEST);
      } else {
        ;

        window.__SSG_MANIFEST_CB = function () {
          resolve(window.__SSG_MANIFEST);
        };
      }
    });
  }

  _createClass(PageLoader, [{
    key: "getPageList",
    value: function getPageList() {
      if (false) {} else {
        if (window.__DEV_PAGES_MANIFEST) {
          return window.__DEV_PAGES_MANIFEST.pages;
        } else {
          if (!this.promisedDevPagesManifest) {
            this.promisedDevPagesManifest = fetch("".concat(this.assetPrefix, "/_next/static/development/_devPagesManifest.json")).then(function (res) {
              return res.json();
            }).then(function (manifest) {
              ;
              window.__DEV_PAGES_MANIFEST = manifest;
              return manifest.pages;
            })["catch"](function (err) {
              console.log("Failed to fetch devPagesManifest", err);
            });
          }

          return this.promisedDevPagesManifest;
        }
      }
    }
    /**
    * @param {string} href the route href (file-system path)
    * @param {string} asPath the URL as shown in browser (virtual path); used for dynamic routes
    * @returns {string}
    */

  }, {
    key: "getDataHref",
    value: function getDataHref(href, asPath, ssg, locale) {
      var _this = this;

      var _ref = (0, _parseRelativeUrl.parseRelativeUrl)(href),
          hrefPathname = _ref.pathname,
          query = _ref.query,
          search = _ref.search;

      var _ref2 = (0, _parseRelativeUrl.parseRelativeUrl)(asPath),
          asPathname = _ref2.pathname;

      var route = normalizeRoute(hrefPathname);

      var getHrefForSlug = function getHrefForSlug(path) {
        var dataRoute = (0, _getAssetPathFromRoute["default"])((0, _router.addLocale)(path, locale), '.json');
        return (0, _router.addBasePath)("/_next/data/".concat(_this.buildId).concat(dataRoute).concat(ssg ? '' : search));
      };

      var isDynamic = (0, _isDynamic.isDynamicRoute)(route);
      var interpolatedRoute = isDynamic ? (0, _router.interpolateAs)(hrefPathname, asPathname, query).result : '';
      return isDynamic ? interpolatedRoute && getHrefForSlug(interpolatedRoute) : getHrefForSlug(route);
    }
    /**
    * @param {string} href the route href (file-system path)
    */

  }, {
    key: "_isSsg",
    value: function _isSsg(href) {
      var _ref3 = (0, _parseRelativeUrl.parseRelativeUrl)(href),
          hrefPathname = _ref3.pathname;

      var route = normalizeRoute(hrefPathname);
      return this.promisedSsgManifest.then(function (s) {
        return s.has(route);
      });
    }
  }, {
    key: "loadPage",
    value: function loadPage(route) {
      return this.routeLoader.loadRoute(route).then(function (res) {
        if ('component' in res) {
          return {
            page: res.component,
            mod: res.exports,
            styleSheets: res.styles.map(function (o) {
              return {
                href: o.href,
                text: o.content
              };
            })
          };
        }

        throw res.error;
      });
    }
  }, {
    key: "prefetch",
    value: function prefetch(route) {
      return this.routeLoader.prefetch(route);
    }
  }]);

  return PageLoader;
}();

exports["default"] = PageLoader;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/performance-relayer.js":
/*!**************************************************************!*\
  !*** ./node_modules/next/dist/client/performance-relayer.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports["default"] = void 0;

var _webVitals = __webpack_require__(/*! next/dist/compiled/web-vitals */ "./node_modules/next/dist/compiled/web-vitals/web-vitals.es5.umd.min.js");

var initialHref = location.href;
var isRegistered = false;
var userReportHandler;

function onReport(metric) {
  if (userReportHandler) {
    userReportHandler(metric);
  } // This code is not shipped, executed, or present in the client-side
  // JavaScript bundle unless explicitly enabled in your application.
  //
  // When this feature is enabled, we'll make it very clear by printing a
  // message during the build (`next build`).


  if (false) { var vitalsUrl, blob, body; }
}

var _default = function _default(onPerfEntry) {
  // Update function if it changes:
  userReportHandler = onPerfEntry; // Only register listeners once:

  if (isRegistered) {
    return;
  }

  isRegistered = true;
  (0, _webVitals.getCLS)(onReport);
  (0, _webVitals.getFID)(onReport);
  (0, _webVitals.getFCP)(onReport);
  (0, _webVitals.getLCP)(onReport);
  (0, _webVitals.getTTFB)(onReport);
};

exports["default"] = _default;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports["default"] = void 0;

var requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  var start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function timeRemaining() {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports["default"] = _default;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports["default"] = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "./node_modules/next/dist/next-server/lib/router/utils/get-asset-path-from-route.js"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


var MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  var entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  var resolver;
  var prom = new Promise(function (resolve) {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(function (value) {
    return resolver(value), value;
  }) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

var canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise(function (res, rej) {
    if (document.querySelector("link[rel=\"prefetch\"][href^=\"".concat(href, "\"]"))) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = "prefetch";
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

var ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise(function (resolve, reject) {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = function () {
      return reject(markAssetError(new Error("Failed to load script: ".concat(src))));
    }; // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise(function (_resolve, reject) {
    return (0, _requestIdleCallback["default"])(function () {
      return setTimeout(function () {
        return reject(err);
      }, ms);
    });
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  var onBuildManifest = new Promise(function (resolve) {
    // Mandatory because this is not concurrent safe:
    var cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = function () {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute["default"])(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(function (manifest) {
    if (!(route in manifest)) {
      throw markAssetError(new Error("Failed to lookup route: ".concat(route)));
    }

    var allFiles = manifest[route].map(function (entry) {
      return assetPrefix + '/_next/' + encodeURI(entry);
    });
    return {
      scripts: allFiles.filter(function (v) {
        return v.endsWith('.js');
      }),
      css: allFiles.filter(function (v) {
        return v.endsWith('.css');
      })
    };
  });
}

function createRouteLoader(assetPrefix) {
  var entrypoints = new Map();
  var loadedScripts = new Map();
  var styleSheets = new Map();
  var routes = new Map();

  function maybeExecuteScript(src) {
    var prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector("script[src^=\"".concat(src, "\"]"))) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    var prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(function (res) {
      if (!res.ok) {
        throw new Error("Failed to load stylesheet: ".concat(href));
      }

      return res.text().then(function (text) {
        return {
          href: href,
          content: text
        };
      });
    })["catch"](function (err) {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint: function whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },
    onEntrypoint: function onEntrypoint(route, execute) {
      Promise.resolve(execute).then(function (fn) {
        return fn();
      }).then(function (exports) {
        return {
          component: exports && exports["default"] || exports,
          exports: exports
        };
      }, function (err) {
        return {
          error: err
        };
      }).then(function (input) {
        var old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },
    loadRoute: function loadRoute(route) {
      var _this = this;

      return withFuture(route, routes, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var _yield$getFilesForRou, scripts, css, _yield$Promise$all, _yield$Promise$all2, styles, entrypoint, res;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return getFilesForRoute(assetPrefix, route);

              case 3:
                _yield$getFilesForRou = _context.sent;
                scripts = _yield$getFilesForRou.scripts;
                css = _yield$getFilesForRou.css;
                _context.next = 8;
                return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);

              case 8:
                _yield$Promise$all = _context.sent;
                _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
                styles = _yield$Promise$all2[1];
                _context.next = 13;
                return Promise.race([_this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error("Route did not complete loading: ".concat(route))))]);

              case 13:
                entrypoint = _context.sent;
                res = Object.assign({
                  styles: styles
                }, entrypoint);
                return _context.abrupt("return", 'error' in entrypoint ? entrypoint : res);

              case 18:
                _context.prev = 18;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", {
                  error: _context.t0
                });

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 18]]);
      })));
    },
    prefetch: function prefetch(route) {
      var _this2 = this;

      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      var cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(function (output) {
        return Promise.all(canPrefetch ? output.scripts.map(function (script) {
          return prefetchViaDom(script, 'script');
        }) : []);
      }).then(function () {
        (0, _requestIdleCallback["default"])(function () {
          return _this2.loadRoute(route);
        });
      })["catch"]( // swallow prefetch errors
      function () {});
    }
  };
}

var _default = createRouteLoader;
exports["default"] = _default;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _construct = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js");

var _s = $RefreshSig$();

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.module.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          console.error("Error when running the Router event: ".concat(eventField));
          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  _s();

  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


_s(useRouter, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.module.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(".concat(name, ")");
  }

  return WithRouterWrapper;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/compiled/strip-ansi/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/next/dist/compiled/strip-ansi/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname, module) {module.exports = function () {
  "use strict";

  var e = {
    301: function _(e, r, t) {
      var _ = t(979);

      e.exports = function (e) {
        return typeof e === "string" ? e.replace(_(), "") : e;
      };
    },
    979: function _(e) {
      e.exports = function () {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$onlyFirst = _ref.onlyFirst,
            e = _ref$onlyFirst === void 0 ? false : _ref$onlyFirst;

        var r = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
        return new RegExp(r, e ? undefined : "g");
      };
    }
  };
  var r = {};

  function __webpack_require__(t) {
    if (r[t]) {
      return r[t].exports;
    }

    var _ = r[t] = {
      exports: {}
    };

    var n = true;

    try {
      e[t](_, _.exports, __webpack_require__);
      n = false;
    } finally {
      if (n) delete r[t];
    }

    return _.exports;
  }

  __webpack_require__.ab = __dirname + "/";
  return __webpack_require__(301);
}();

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, "/", __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/compiled/web-vitals/web-vitals.es5.umd.min.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/web-vitals/web-vitals.es5.umd.min.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports=function(){var t={599:function(t,e){!function(t,n){true?n(e):undefined}(this,function(t){"use strict";var e,n,i=function(){return"".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)},a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return{name:t,value:e,delta:0,entries:[],id:i(),isFinal:!1}},r=function(t,e){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){var n=new PerformanceObserver(function(t){return t.getEntries().map(e)});return n.observe({type:t,buffered:!0}),n}}catch(t){}},o=!1,u=!1,s=function(t){o=!t.persisted},c=function(){addEventListener("pagehide",s),addEventListener("beforeunload",function(){})},p=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];u||(c(),u=!0),addEventListener("visibilitychange",function(e){var n=e.timeStamp;"hidden"===document.visibilityState&&t({timeStamp:n,isUnloading:o})},{capture:!0,once:e})},l=function(t,e,n,i){var a;return function(){n&&e.isFinal&&n.disconnect(),e.value>=0&&(i||e.isFinal||"hidden"===document.visibilityState)&&(e.delta=e.value-(a||0),(e.delta||e.isFinal||void 0===a)&&(t(e),a=e.value))}},f=function(){return void 0===e&&(e="hidden"===document.visibilityState?0:1/0,p(function(t){var n=t.timeStamp;return e=n},!0)),{get timeStamp(){return e}}},d=function(){return n||(n=new Promise(function(t){return["scroll","keydown","pointerdown"].map(function(e){addEventListener(e,t,{once:!0,passive:!0,capture:!0})})})),n};t.getCLS=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=a("CLS",0),o=function(t){t.hadRecentInput||(i.value+=t.value,i.entries.push(t),e())},u=r("layout-shift",o);u&&(e=l(t,i,u,n),p(function(t){var n=t.isUnloading;u.takeRecords().map(o),n&&(i.isFinal=!0),e()}))},t.getFCP=function(t){var e,n=a("FCP"),i=f(),o=r("paint",function(t){"first-contentful-paint"===t.name&&t.startTime<i.timeStamp&&(n.value=t.startTime,n.isFinal=!0,n.entries.push(t),e())});o&&(e=l(t,n,o))},t.getFID=function(t){var e=a("FID"),n=f(),i=function(t){t.startTime<n.timeStamp&&(e.value=t.processingStart-t.startTime,e.entries.push(t),e.isFinal=!0,u())},o=r("first-input",i),u=l(t,e,o);o?p(function(){o.takeRecords().map(i),o.disconnect()},!0):window.perfMetrics&&window.perfMetrics.onFirstInputDelay&&window.perfMetrics.onFirstInputDelay(function(t,i){i.timeStamp<n.timeStamp&&(e.value=t,e.isFinal=!0,e.entries=[{entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+t}],u())})},t.getLCP=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=a("LCP"),o=f(),u=function(t){var n=t.startTime;n<o.timeStamp?(i.value=n,i.entries.push(t)):i.isFinal=!0,e()},s=r("largest-contentful-paint",u);if(s){e=l(t,i,s,n);var c=function(){i.isFinal||(s.takeRecords().map(u),i.isFinal=!0,e())};d().then(c),p(c,!0)}},t.getTTFB=function(t){var e,n=a("TTFB");e=function(){try{var e=performance.getEntriesByType("navigation")[0]||function(){var t=performance.timing,e={entryType:"navigation",startTime:0};for(var n in t)"navigationStart"!==n&&"toJSON"!==n&&(e[n]=Math.max(t[n]-t.navigationStart,0));return e}();n.value=n.delta=e.responseStart,n.entries=[e],n.isFinal=!0,t(n)}catch(t){}},"complete"===document.readyState?setTimeout(e,0):addEventListener("pageshow",e)},Object.defineProperty(t,"__esModule",{value:!0})})}};var e={};function __webpack_require__(n){if(e[n]){return e[n].exports}var i=e[n]={exports:{}};var a=true;try{t[n].call(i.exports,i,i.exports,__webpack_require__);a=false}finally{if(a)delete e[n]}return i.exports}__webpack_require__.ab=__dirname+"/";return __webpack_require__(599)}();
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.HeadManagerContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.module.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var HeadManagerContext = /*#__PURE__*/_react["default"].createContext({});

exports.HeadManagerContext = HeadManagerContext;

if (true) {
  HeadManagerContext.displayName = 'HeadManagerContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  var detectedLocale; // first item will be empty string from splitting at first char

  var pathnameParts = pathname.split('/');
  (locales || []).some(function (locale) {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname: pathname,
    detectedLocale: detectedLocale
  };
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports["default"] = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.RouterContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.module.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var RouterContext = /*#__PURE__*/_react["default"].createContext(null);

exports.RouterContext = RouterContext;

if (true) {
  RouterContext.displayName = 'RouterContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports["default"] = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


var detectDomainLocale;

if (false) {}

var basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : "".concat(prefix).concat(pathNoQueryHash(path) === '/' ? path.substring(1) : path) : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) { var detectedDomain; }

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  var queryIndex = path.indexOf('?');
  var hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = "/".concat(path);
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    var locationOrigin = (0, _utils.getLocationOrigin)();
    var resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  var interpolatedRoute = '';
  var dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  var dynamicGroups = dynamicRegex.groups;
  var dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  var params = Object.keys(dynamicGroups);

  if (!params.every(function (param) {
    var value = dynamicMatches[param] || '';
    var _dynamicGroups$param = dynamicGroups[param],
        repeat = _dynamicGroups$param.repeat,
        optional = _dynamicGroups$param.optional; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    var replaced = "[".concat(repeat ? '...' : '').concat(param, "]");

    if (optional) {
      replaced = "".concat(!value ? '/' : '', "[").concat(replaced, "]");
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    function (segment) {
      return encodeURIComponent(segment);
    }).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params: params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  var filteredQuery = {};
  Object.keys(query).forEach(function (key) {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  var base = new URL(currentPath, 'http://n');
  var urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    var finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    var interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      var query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);

      var _interpolateAs = interpolateAs(finalUrl.pathname, finalUrl.pathname, query),
          result = _interpolateAs.result,
          params = _interpolateAs.params;

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    var resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  var origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  var _resolveHref = resolveHref(router.pathname, url, true),
      _resolveHref2 = _slicedToArray(_resolveHref, 2),
      resolvedHref = _resolveHref2[0],
      resolvedAs = _resolveHref2[1];

  var origin = (0, _utils.getLocationOrigin)();
  var hrefHadOrigin = resolvedHref.startsWith(origin);
  var asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  var preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  var preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

var manualScrollRestoration =  false && false;
var SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(function (res) {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(function (data) {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error("Failed to load static props");
        });
      }

      throw new Error("Failed to load static props");
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1)["catch"](function (err) {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

var Router = /*#__PURE__*/function () {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  function Router(_pathname, _query, _as, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription,
        isFallback = _ref.isFallback,
        locale = _ref.locale,
        locales = _ref.locales,
        defaultLocale = _ref.defaultLocale,
        domainLocales = _ref.domainLocales;

    _classCallCheck(this, Router);

    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this._idx = 0;

    this.onPopState = function (e) {
      var state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname2 = _this.pathname,
            query = _this.query;

        _this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(_pathname2),
          query: query
        }), (0, _utils.getURL)());

        return;
      }

      if (!state.__N) {
        return;
      }

      var forcedScroll;
      var url = state.url,
          as = state.as,
          options = state.options,
          idx = state.idx;

      if (false) { var v; }

      _this._idx = idx;

      var _ref2 = (0, _parseRelativeUrl.parseRelativeUrl)(url),
          pathname = _ref2.pathname; // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (_this.isSsr && as === _this.asPath && pathname === _this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(state)) {
        return;
      }

      _this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && _this._shallow,
        locale: options.locale || _this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        initial: true,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    var autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);

    if (false) {}

    if (true) {
      // make sure "as" doesn't start with double slashes or else it can
      // throw an error as it's considered invalid
      if (_as.substr(0, 2) !== '//') {
        // in order for `e.state` to work on the `onpopstate` event
        // we have to register the initial route upon initialization
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(_pathname),
          query: _query
        }), (0, _utils.getURL)(), {
          locale: locale
        });
      }

      window.addEventListener('popstate', this.onPopState); // enable custom scroll restoration handling when available
      // otherwise fallback to browser's default handling

      if (false) {}
    }
  }

  _createClass(Router, [{
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
    * Go back in history
    */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
    * Performs a `pushState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */

  }, {
    key: "push",
    value: function push(url, as) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (false) {}

      ;

      var _prepareUrlAs = prepareUrlAs(this, url, as);

      url = _prepareUrlAs.url;
      as = _prepareUrlAs.as;
      return this.change('pushState', url, as, options);
    }
    /**
    * Performs a `replaceState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */

  }, {
    key: "replace",
    value: function replace(url, as) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      ;

      var _prepareUrlAs2 = prepareUrlAs(this, url, as);

      url = _prepareUrlAs2.url;
      as = _prepareUrlAs2.as;
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function () {
      var _change = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(method, url, as, options, forcedScroll) {
        var _this2 = this;

        var _options$scroll, localeChange, parsedAs, localePathResult, didNavigate, _this$locales, detectedDomain, asNoBasePath, _options$shallow, shallow, routeProps, cleanedAs, parsed, _parsed, pathname, query, pages, rewrites, _yield, route, resolvedAs, potentialHref, _parsedAs, asPathname, routeRegex, routeMatch, shouldInterpolate, interpolatedAs, missingParams, routeInfo, _routeInfo, error, props, __N_SSG, __N_SSP, destination, parsedHref, _prepareUrlAs3, newUrl, newAs, notFoundRoute, appComp;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (isLocalURL(url)) {
                  _context.next = 3;
                  break;
                }

                window.location.href = url;
                return _context.abrupt("return", false);

              case 3:
                // for static pages with query params in the URL we delay
                // marking the router ready until after the query is updated
                if (options._h) {
                  this.isReady = true;
                } // Default to scroll reset behavior unless explicitly specified to be
                // `false`! This makes the behavior between using `Router#push` and a
                // `<Link />` consistent.


                options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
                localeChange = options.locale !== this.locale;

                if (true) {
                  _context.next = 18;
                  break;
                }

                this.locale = options.locale === false ? this.defaultLocale : options.locale || this.locale;

                if (typeof options.locale === 'undefined') {
                  options.locale = this.locale;
                }

                parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(hasBasePath(as) ? delBasePath(as) : as);
                localePathResult = (0, _normalizeLocalePath.normalizeLocalePath)(parsedAs.pathname, this.locales);

                if (localePathResult.detectedLocale) {
                  this.locale = localePathResult.detectedLocale;
                  parsedAs.pathname = addBasePath(parsedAs.pathname);
                  as = (0, _utils.formatWithValidation)(parsedAs);
                  url = addBasePath((0, _normalizeLocalePath.normalizeLocalePath)(hasBasePath(url) ? delBasePath(url) : url, this.locales).pathname);
                }

                didNavigate = false; // we need to wrap this in the env check again since regenerator runtime
                // moves this on its own due to the return

                if (false) {}

                detectedDomain = detectDomainLocale(this.domainLocales, undefined, this.locale); // we need to wrap this in the env check again since regenerator runtime
                // moves this on its own due to the return

                if (false) {}

                if (!didNavigate) {
                  _context.next = 18;
                  break;
                }

                return _context.abrupt("return", new Promise(function () {}));

              case 18:
                if (!options._h) {
                  this.isSsr = false;
                } // marking route changes as a navigation start entry


                if (_utils.ST) {
                  performance.mark('routeChange');
                }

                _options$shallow = options.shallow, shallow = _options$shallow === void 0 ? false : _options$shallow;
                routeProps = {
                  shallow: shallow
                };

                if (this._inFlightRoute) {
                  this.abortComponentLoad(this._inFlightRoute, routeProps);
                }

                as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
                cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
                this._inFlightRoute = as; // If the url change is only related to a hash change
                // We should not proceed. We should only change the state.
                // WARNING: `_h` is an internal option for handing Next.js client-side
                // hydration. Your app should _never_ use this property. It may change at
                // any time without notice.

                if (!(!options._h && this.onlyAHashChange(cleanedAs))) {
                  _context.next = 34;
                  break;
                }

                this.asPath = cleanedAs;
                Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

                this.changeState(method, url, as, options);
                this.scrollToHash(cleanedAs);
                this.notify(this.components[this.route], null);
                Router.events.emit('hashChangeComplete', as, routeProps);
                return _context.abrupt("return", true);

              case 34:
                parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
                _parsed = parsed, pathname = _parsed.pathname, query = _parsed.query; // The build manifest needs to be loaded before auto-static dynamic pages
                // get their query parameters to allow ensuring they can be parsed properly
                // when rewritten to

                _context.prev = 36;
                _context.next = 39;
                return this.pageLoader.getPageList();

              case 39:
                pages = _context.sent;
                _context.next = 42;
                return (0, _routeLoader.getClientBuildManifest)();

              case 42:
                _yield = _context.sent;
                rewrites = _yield.__rewrites;
                _context.next = 50;
                break;

              case 46:
                _context.prev = 46;
                _context.t0 = _context["catch"](36);
                // If we fail to resolve the page list or client-build manifest, we must
                // do a server-side transition:
                window.location.href = as;
                return _context.abrupt("return", false);

              case 50:
                parsed = this._resolveHref(parsed, pages);

                if (parsed.pathname !== pathname) {
                  pathname = parsed.pathname;
                  url = (0, _utils.formatWithValidation)(parsed);
                } // url and as should always be prefixed with basePath by this
                // point by either next/link or router.push/replace so strip the
                // basePath from the pathname to match the pages dir 1-to-1


                pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
                // (not location.reload() but reload getInitialProps and other Next.js stuffs)
                // We also need to set the method = replaceState always
                // as this should not go into the history (That's how browsers work)
                // We should compare the new asPath to the current asPath, not the url

                if (!this.urlIsNew(cleanedAs) && !localeChange) {
                  method = 'replaceState';
                }

                route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
                // pages to allow building the data URL correctly

                resolvedAs = as;

                if ( true && as.startsWith('/')) {
                  resolvedAs = (0, _resolveRewrites["default"])(addBasePath(addLocale(delBasePath((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname), this.locale)), pages, rewrites, query, function (p) {
                    return _this2._resolveHref({
                      pathname: p
                    }, pages).pathname;
                  }, this.locales);

                  if (resolvedAs !== as) {
                    potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
                      pathname: (0, _normalizeLocalePath.normalizeLocalePath)(hasBasePath(resolvedAs) ? delBasePath(resolvedAs) : resolvedAs, this.locales).pathname
                    }), pages, false).pathname); // if this directly matches a page we need to update the href to
                    // allow the correct page chunk to be loaded

                    if (pages.includes(potentialHref)) {
                      route = potentialHref;
                      pathname = potentialHref;
                      parsed.pathname = pathname;
                      url = (0, _utils.formatWithValidation)(parsed);
                    }
                  }
                }

                if (isLocalURL(as)) {
                  _context.next = 62;
                  break;
                }

                if (false) {}

                throw new Error("Invalid href: \"".concat(url, "\" and as: \"").concat(as, "\", received relative href and external as") + "\nSee more info: https://err.sh/next.js/invalid-relative-url-external-as");

              case 60:
                window.location.href = as;
                return _context.abrupt("return", false);

              case 62:
                resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

                if (!(0, _isDynamic.isDynamicRoute)(route)) {
                  _context.next = 78;
                  break;
                }

                _parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
                asPathname = _parsedAs.pathname;
                routeRegex = (0, _routeRegex.getRouteRegex)(route);
                routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
                shouldInterpolate = route === asPathname;
                interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

                if (!(!routeMatch || shouldInterpolate && !interpolatedAs.result)) {
                  _context.next = 77;
                  break;
                }

                missingParams = Object.keys(routeRegex.groups).filter(function (param) {
                  return !query[param];
                });

                if (!(missingParams.length > 0)) {
                  _context.next = 75;
                  break;
                }

                if (true) {
                  console.warn("".concat(shouldInterpolate ? "Interpolating href" : "Mismatching `as` and `href`", " failed to manually provide ") + "the params: ".concat(missingParams.join(', '), " in the `href`'s `query`"));
                }

                throw new Error((shouldInterpolate ? "The provided `href` (".concat(url, ") value is missing query values (").concat(missingParams.join(', '), ") to be interpolated properly. ") : "The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ")) + "Read more: https://err.sh/vercel/next.js/".concat(shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'));

              case 75:
                _context.next = 78;
                break;

              case 77:
                if (shouldInterpolate) {
                  as = (0, _utils.formatWithValidation)(Object.assign({}, _parsedAs, {
                    pathname: interpolatedAs.result,
                    query: omitParmsFromQuery(query, interpolatedAs.params)
                  }));
                } else {
                  // Merge params into `query`, overwriting any specified in search
                  Object.assign(query, routeMatch);
                }

              case 78:
                Router.events.emit('routeChangeStart', as, routeProps);
                _context.prev = 79;
                _context.next = 82;
                return this.getRouteInfo(route, pathname, query, addBasePath(addLocale(resolvedAs, this.locale)), routeProps);

              case 82:
                routeInfo = _context.sent;
                _routeInfo = routeInfo, error = _routeInfo.error, props = _routeInfo.props, __N_SSG = _routeInfo.__N_SSG, __N_SSP = _routeInfo.__N_SSP; // handle redirect on client-transition

                if (!((__N_SSG || __N_SSP) && props)) {
                  _context.next = 108;
                  break;
                }

                if (!(props.pageProps && props.pageProps.__N_REDIRECT)) {
                  _context.next = 95;
                  break;
                }

                destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
                // client-navigation if it is falling back to hard navigation if
                // it's not

                if (!destination.startsWith('/')) {
                  _context.next = 93;
                  break;
                }

                parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

                this._resolveHref(parsedHref, pages, false);

                if (!pages.includes(parsedHref.pathname)) {
                  _context.next = 93;
                  break;
                }

                _prepareUrlAs3 = prepareUrlAs(this, destination, destination), newUrl = _prepareUrlAs3.url, newAs = _prepareUrlAs3.as;
                return _context.abrupt("return", this.change(method, newUrl, newAs, options));

              case 93:
                window.location.href = destination;
                return _context.abrupt("return", new Promise(function () {}));

              case 95:
                if (!(props.notFound === SSG_DATA_NOT_FOUND)) {
                  _context.next = 108;
                  break;
                }

                _context.prev = 96;
                _context.next = 99;
                return this.fetchComponent('/404');

              case 99:
                notFoundRoute = '/404';
                _context.next = 105;
                break;

              case 102:
                _context.prev = 102;
                _context.t1 = _context["catch"](96);
                notFoundRoute = '/_error';

              case 105:
                _context.next = 107;
                return this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, {
                  shallow: false
                });

              case 107:
                routeInfo = _context.sent;

              case 108:
                Router.events.emit('beforeHistoryChange', as, routeProps);
                this.changeState(method, url, as, options);

                if (true) {
                  appComp = this.components['/_app'].Component;
                  window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
                }

                _context.next = 113;
                return this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (options.scroll ? {
                  x: 0,
                  y: 0
                } : null))["catch"](function (e) {
                  if (e.cancelled) error = error || e;else throw e;
                });

              case 113:
                if (!error) {
                  _context.next = 116;
                  break;
                }

                Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
                throw error;

              case 116:
                if (false) {}

                Router.events.emit('routeChangeComplete', as, routeProps);
                return _context.abrupt("return", true);

              case 121:
                _context.prev = 121;
                _context.t2 = _context["catch"](79);

                if (!_context.t2.cancelled) {
                  _context.next = 125;
                  break;
                }

                return _context.abrupt("return", false);

              case 125:
                throw _context.t2;

              case 126:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[36, 46], [79, 121], [96, 102]]);
      }));

      function change(_x, _x2, _x3, _x4, _x5) {
        return _change.apply(this, arguments);
      }

      return change;
    }()
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
        this._shallow = options.shallow;
        window.history[method]({
          url: url,
          as: as,
          options: options,
          __N: true,
          idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "handleRouteInfoError",
    value: function () {
      var _handleRouteInfoError = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(err, pathname, query, as, routeProps, loadErrorFail) {
        var Component, styleSheets, props, _yield$this$fetchComp, routeInfo;

        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!err.cancelled) {
                  _context2.next = 2;
                  break;
                }

                throw err;

              case 2:
                if (!((0, _routeLoader.isAssetError)(err) || loadErrorFail)) {
                  _context2.next = 6;
                  break;
                }

                Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
                //  1. Page doesn't exists
                //  2. Page does exist in a different zone
                //  3. Internal error while loading the page
                // So, doing a hard reload is the proper way to deal with this.

                window.location.href = as; // Changing the URL doesn't block executing the current code path.
                // So let's throw a cancellation error stop the routing logic.

                throw buildCancellationError();

              case 6:
                _context2.prev = 6;

                if (!(typeof Component === 'undefined' || typeof styleSheets === 'undefined')) {
                  _context2.next = 14;
                  break;
                }

                ;
                _context2.next = 11;
                return this.fetchComponent('/_error');

              case 11:
                _yield$this$fetchComp = _context2.sent;
                Component = _yield$this$fetchComp.page;
                styleSheets = _yield$this$fetchComp.styleSheets;

              case 14:
                routeInfo = {
                  props: props,
                  Component: Component,
                  styleSheets: styleSheets,
                  err: err,
                  error: err
                };

                if (routeInfo.props) {
                  _context2.next = 26;
                  break;
                }

                _context2.prev = 16;
                _context2.next = 19;
                return this.getInitialProps(Component, {
                  err: err,
                  pathname: pathname,
                  query: query
                });

              case 19:
                routeInfo.props = _context2.sent;
                _context2.next = 26;
                break;

              case 22:
                _context2.prev = 22;
                _context2.t0 = _context2["catch"](16);
                console.error('Error in error page `getInitialProps`: ', _context2.t0);
                routeInfo.props = {};

              case 26:
                return _context2.abrupt("return", routeInfo);

              case 29:
                _context2.prev = 29;
                _context2.t1 = _context2["catch"](6);
                return _context2.abrupt("return", this.handleRouteInfoError(_context2.t1, pathname, query, as, routeProps, true));

              case 32:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[6, 29], [16, 22]]);
      }));

      function handleRouteInfoError(_x6, _x7, _x8, _x9, _x10, _x11) {
        return _handleRouteInfoError.apply(this, arguments);
      }

      return handleRouteInfoError;
    }()
  }, {
    key: "getRouteInfo",
    value: function () {
      var _getRouteInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(route, pathname, query, as, routeProps) {
        var _this3 = this;

        var existingRouteInfo, cachedRouteInfo, routeInfo, Component, __N_SSG, __N_SSP, _require, isValidElementType, dataHref, props;

        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                existingRouteInfo = this.components[route];

                if (!(routeProps.shallow && existingRouteInfo && this.route === route)) {
                  _context3.next = 4;
                  break;
                }

                return _context3.abrupt("return", existingRouteInfo);

              case 4:
                cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;

                if (!cachedRouteInfo) {
                  _context3.next = 9;
                  break;
                }

                _context3.t0 = cachedRouteInfo;
                _context3.next = 12;
                break;

              case 9:
                _context3.next = 11;
                return this.fetchComponent(route).then(function (res) {
                  return {
                    Component: res.page,
                    styleSheets: res.styleSheets,
                    __N_SSG: res.mod.__N_SSG,
                    __N_SSP: res.mod.__N_SSP
                  };
                });

              case 11:
                _context3.t0 = _context3.sent;

              case 12:
                routeInfo = _context3.t0;
                Component = routeInfo.Component, __N_SSG = routeInfo.__N_SSG, __N_SSP = routeInfo.__N_SSP;

                if (false) {}

                _require = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"), isValidElementType = _require.isValidElementType;

                if (isValidElementType(Component)) {
                  _context3.next = 18;
                  break;
                }

                throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));

              case 18:
                if (__N_SSG || __N_SSP) {
                  dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
                    pathname: pathname,
                    query: query
                  }), delBasePath(as), __N_SSG, this.locale);
                }

                _context3.next = 21;
                return this._getData(function () {
                  return __N_SSG ? _this3._getStaticData(dataHref) : __N_SSP ? _this3._getServerData(dataHref) : _this3.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
                  {
                    pathname: pathname,
                    query: query,
                    asPath: as
                  });
                });

              case 21:
                props = _context3.sent;
                routeInfo.props = props;
                this.components[route] = routeInfo;
                return _context3.abrupt("return", routeInfo);

              case 27:
                _context3.prev = 27;
                _context3.t1 = _context3["catch"](0);
                return _context3.abrupt("return", this.handleRouteInfoError(_context3.t1, pathname, query, as, routeProps));

              case 30:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 27]]);
      }));

      function getRouteInfo(_x12, _x13, _x14, _x15, _x16) {
        return _getRouteInfo.apply(this, arguments);
      }

      return getRouteInfo;
    }()
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data, resetScroll) {
      this.isFallback = false;
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      return this.notify(data, resetScroll);
    }
    /**
    * Callback to execute before replacing router state
    * @param cb callback to be executed
    */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
  }, {
    key: "_resolveHref",
    value: function _resolveHref(parsedHref, pages) {
      var applyBasePath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var pathname = parsedHref.pathname;
      var cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

      if (cleanPathname === '/404' || cleanPathname === '/_error') {
        return parsedHref;
      } // handle resolving href for dynamic routes


      if (!pages.includes(cleanPathname)) {
        // eslint-disable-next-line array-callback-return
        pages.some(function (page) {
          if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
            parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
            return true;
          }
        });
      }

      parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
      return parsedHref;
    }
    /**
    * Prefetch page code, you may wait for the data during page rendering.
    * This feature only works in production!
    * @param url the href of prefetched page
    * @param asPath the as path of the prefetched page
    */

  }, {
    key: "prefetch",
    value: function () {
      var _prefetch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(url) {
        var _this4 = this;

        var asPath,
            options,
            parsed,
            _parsed2,
            pathname,
            parsedAs,
            localePathResult,
            pages,
            route,
            _args4 = arguments;

        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                asPath = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : url;
                options = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : {};
                parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
                _parsed2 = parsed, pathname = _parsed2.pathname;

                if (false) {}

                _context4.next = 7;
                return this.pageLoader.getPageList();

              case 7:
                pages = _context4.sent;
                parsed = this._resolveHref(parsed, pages, false);

                if (parsed.pathname !== pathname) {
                  pathname = parsed.pathname;
                  url = (0, _utils.formatWithValidation)(parsed);
                } // Prefetch is not supported in development mode because it would trigger on-demand-entries


                if (false) {}

                return _context4.abrupt("return");

              case 12:
                route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
                _context4.next = 15;
                return Promise.all([this.pageLoader._isSsg(url).then(function (isSsg) {
                  return isSsg ? _this4._getStaticData(_this4.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : _this4.locale)) : false;
                }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);

              case 15:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function prefetch(_x17) {
        return _prefetch.apply(this, arguments);
      }

      return prefetch;
    }()
  }, {
    key: "fetchComponent",
    value: function () {
      var _fetchComponent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5(route) {
        var cancelled, cancel, componentResult, error;
        return _regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                cancelled = false;

                cancel = this.clc = function () {
                  cancelled = true;
                };

                _context5.next = 4;
                return this.pageLoader.loadPage(route);

              case 4:
                componentResult = _context5.sent;

                if (!cancelled) {
                  _context5.next = 9;
                  break;
                }

                error = new Error("Abort fetching component for route: \"".concat(route, "\""));
                error.cancelled = true;
                throw error;

              case 9:
                if (cancel === this.clc) {
                  this.clc = null;
                }

                return _context5.abrupt("return", componentResult);

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function fetchComponent(_x18) {
        return _fetchComponent.apply(this, arguments);
      }

      return fetchComponent;
    }()
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this5 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this5.clc) {
          _this5.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "_getStaticData",
    value: function _getStaticData(dataHref) {
      var _this6 = this;

      var _URL = new URL(dataHref, window.location.href),
          cacheKey = _URL.href;

      if (false) {}

      return fetchNextData(dataHref, this.isSsr).then(function (data) {
        _this6.sdc[cacheKey] = data;
        return data;
      });
    }
  }, {
    key: "_getServerData",
    value: function _getServerData(dataHref) {
      return fetchNextData(dataHref, this.isSsr);
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return (0, _utils.loadGetInitialProps)(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as, routeProps) {
      if (this.clc) {
        Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data, resetScroll) {
      return this.sub(data, this.components['/_app'].Component, resetScroll);
    }
  }]);

  return Router;
}();

exports["default"] = Router;
Router.events = (0, _mitt["default"])();

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


var slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  var auth = urlObj.auth,
      hostname = urlObj.hostname;
  var protocol = urlObj.protocol || '';
  var pathname = urlObj.pathname || '';
  var hash = urlObj.hash || '';
  var query = urlObj.query || '';
  var host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? "[".concat(hostname, "]") : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  var search = urlObj.search || query && "?".concat(query) || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return "".concat(protocol).concat(host).concat(pathname).concat(search).concat(hash);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/get-asset-path-from-route.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/get-asset-path-from-route.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports["default"] = getAssetPathFromRoute; // Translates a logical route into its pages asset path (relative from a common prefix)
// "asset path" being its javascript file, data file, prerendered html,...

function getAssetPathFromRoute(route) {
  var ext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var path = route === '/' ? '/index' : /^\/index(\/|$)/.test(route) ? "/index".concat(route) : "".concat(route);
  return path + ext;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  var globalBase = new URL(false ? undefined : (0, _utils.getLocationOrigin)());
  var resolvedBase = base ? new URL(base, globalBase) : globalBase;

  var _URL = new URL(url, resolvedBase),
      pathname = _URL.pathname,
      searchParams = _URL.searchParams,
      search = _URL.search,
      hash = _URL.hash,
      href = _URL.href,
      origin = _URL.origin;

  if (origin !== globalBase.origin) {
    throw new Error("invariant: invalid relative URL, router received ".concat(url));
  }

  return {
    pathname: pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search: search,
    hash: hash,
    href: href.slice(globalBase.origin.length)
  };
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _defineProperty = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

exports.__esModule = true;
exports.pathToRegexp = exports["default"] = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

var matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

var customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = function _default() {
  var customRoute = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return function (path) {
    var keys = [];
    var matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    var matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return function (pathname, params) {
      var res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        var _iterator = _createForOfIteratorHelper(keys),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var key = _step.value;

            // unnamed params should be removed as they
            // are not allowed to be used in the destination
            if (typeof key.name === 'number') {
              delete res.params[key.name];
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports["default"] = _default;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _defineProperty = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

exports.__esModule = true;
exports.compileNonPath = compileNonPath;
exports["default"] = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function compileNonPath(value, params) {
  if (!value.includes(':')) {
    return value;
  }

  for (var _i = 0, _Object$keys = Object.keys(params); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];

    if (value.includes(":".concat(key))) {
      value = value.replace(new RegExp(":".concat(key, "\\*"), 'g'), ":".concat(key, "--ESCAPED_PARAM_ASTERISKS")).replace(new RegExp(":".concat(key, "\\?"), 'g'), ":".concat(key, "--ESCAPED_PARAM_QUESTION")).replace(new RegExp(":".concat(key, "\\+"), 'g'), ":".concat(key, "--ESCAPED_PARAM_PLUS")).replace(new RegExp(":".concat(key, "(?!\\w)"), 'g'), "--ESCAPED_PARAM_COLON".concat(key));
    }
  }

  value = value.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, '\\$1').replace(/--ESCAPED_PARAM_PLUS/g, '+').replace(/--ESCAPED_PARAM_COLON/g, ':').replace(/--ESCAPED_PARAM_QUESTION/g, '?').replace(/--ESCAPED_PARAM_ASTERISKS/g, '*'); // the value needs to start with a forward-slash to be compiled
  // correctly

  return pathToRegexp.compile("/".concat(value), {
    validate: false
  })(params).substr(1);
}

function prepareDestination(destination, params, query, appendParamsToQuery) {
  var parsedDestination = {}; // clone query so we don't modify the original

  query = Object.assign({}, query);
  var hadLocale = query.__nextLocale;
  delete query.__nextLocale;
  delete query.__nextDefaultLocale;

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    var _URL = new URL(destination),
        pathname = _URL.pathname,
        searchParams = _URL.searchParams,
        hash = _URL.hash,
        hostname = _URL.hostname,
        port = _URL.port,
        protocol = _URL.protocol,
        search = _URL.search,
        href = _URL.href;

    parsedDestination = {
      pathname: pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash: hash,
      protocol: protocol,
      hostname: hostname,
      port: port,
      search: search,
      href: href
    };
  }

  var destQuery = parsedDestination.query;
  var destPath = "".concat(parsedDestination.pathname).concat(parsedDestination.hash || '');
  var destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  var destPathParams = destPathParamKeys.map(function (key) {
    return key.name;
  });
  var destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  var newUrl; // update any params in query values

  for (var _i2 = 0, _Object$entries = Object.entries(destQuery); _i2 < _Object$entries.length; _i2++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
        key = _Object$entries$_i[0],
        strOrArray = _Object$entries$_i[1];

    var value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = compileNonPath(value, params);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  var paramKeys = Object.keys(params); // remove internal param for i18n

  if (hadLocale) {
    paramKeys = paramKeys.filter(function (name) {
      return name !== 'nextInternalLocale';
    });
  }

  if (appendParamsToQuery && !paramKeys.some(function (key) {
    return destPathParams.includes(key);
  })) {
    var _iterator = _createForOfIteratorHelper(paramKeys),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _key = _step.value;

        if (!(_key in destQuery)) {
          destQuery[_key] = params[_key];
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  try {
    newUrl = destinationCompiler(params);

    var _newUrl$split = newUrl.split('#'),
        _newUrl$split2 = _slicedToArray(_newUrl$split, 2),
        _pathname = _newUrl$split2[0],
        _hash = _newUrl$split2[1];

    parsedDestination.pathname = _pathname;
    parsedDestination.hash = "".concat(_hash ? '#' : '').concat(_hash || '');
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error("To use a multi-match in the destination you must add `*` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match");
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl: newUrl,
    parsedDestination: parsedDestination
  };
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  var query = {};
  searchParams.forEach(function (value, key) {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  var result = new URLSearchParams();
  Object.entries(urlQuery).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if (Array.isArray(value)) {
      value.forEach(function (item) {
        return result.append(key, stringifyUrlQueryParam(item));
      });
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target) {
  for (var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    searchParamsList[_key - 1] = arguments[_key];
  }

  searchParamsList.forEach(function (searchParams) {
    Array.from(searchParams.keys()).forEach(function (key) {
      return target["delete"](key);
    });
    searchParams.forEach(function (value, key) {
      return target.append(key, value);
    });
  });
  return target;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

exports.__esModule = true;
exports["default"] = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _normalizeLocalePath = __webpack_require__(/*! ../../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var customRouteMatcher = (0, _pathMatch["default"])(true);

function resolveRewrites(asPath, pages, rewrites, query, resolveHref, locales) {
  if (!pages.includes((0, _normalizeLocalePath.normalizeLocalePath)(asPath, locales).pathname)) {
    var _iterator = _createForOfIteratorHelper(rewrites),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var rewrite = _step.value;
        var matcher = customRouteMatcher(rewrite.source);
        var params = matcher(asPath);

        if (params) {
          if (!rewrite.destination) {
            // this is a proxied rewrite which isn't handled on the client
            break;
          }

          var destRes = (0, _prepareDestination["default"])(rewrite.destination, params, query, true);
          asPath = destRes.parsedDestination.pathname;
          Object.assign(query, destRes.parsedDestination.query);
          var fsPathname = (0, _normalizeLocalePath.normalizeLocalePath)((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath), locales).pathname;

          if (pages.includes(fsPathname)) {
            asPath = fsPathname; // check if we now match a page as this means we are done
            // resolving the rewrites

            break;
          } // check if we match a dynamic-route, if so we break the rewrites chain


          var resolvedHref = resolveHref(fsPathname);

          if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
            asPath = fsPathname;
            break;
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  return asPath;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = function decode(param) {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        var err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  var optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  var repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat: repeat,
    optional: optional
  };
}

function getRouteRegex(normalizedRoute) {
  var segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = segments.map(function (segment) {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      var _parseParameter = parseParameter(segment.slice(1, -1)),
          key = _parseParameter.key,
          optional = _parseParameter.optional,
          repeat = _parseParameter.repeat;

      groups[key] = {
        pos: groupIndex++,
        repeat: repeat,
        optional: optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return "/".concat(escapeRegex(segment));
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (false) { var namedParameterizedRoute, routeKeys, getSafeRouteKey, routeKeyCharLength, routeKeyCharCode; }

  return {
    re: new RegExp("^".concat(parameterizedRoute, "(?:/)?$")),
    groups: groups
  };
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/runtime-config.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/runtime-config.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.setConfig = setConfig;
exports["default"] = void 0;
var runtimeConfig;

var _default = function _default() {
  return runtimeConfig;
};

exports["default"] = _default;

function setConfig(configValue) {
  runtimeConfig = configValue;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");

exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  var used = false;
  var result;
  return function () {
    if (!used) {
      used = true;
      result = fn.apply(void 0, arguments);
    }

    return result;
  };
}

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

function loadGetInitialProps(_x, _x2) {
  return _loadGetInitialProps.apply(this, arguments);
}

function _loadGetInitialProps() {
  _loadGetInitialProps = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(App, ctx) {
    var _App$prototype, message, res, props, _message;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (false) {}

            if (!((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps)) {
              _context.next = 4;
              break;
            }

            message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.");
            throw new Error(message);

          case 4:
            // when called from _app `ctx` is nested in `ctx`
            res = ctx.res || ctx.ctx && ctx.ctx.res;

            if (App.getInitialProps) {
              _context.next = 12;
              break;
            }

            if (!(ctx.ctx && ctx.Component)) {
              _context.next = 11;
              break;
            }

            _context.next = 9;
            return loadGetInitialProps(ctx.Component, ctx.ctx);

          case 9:
            _context.t0 = _context.sent;
            return _context.abrupt("return", {
              pageProps: _context.t0
            });

          case 11:
            return _context.abrupt("return", {});

          case 12:
            _context.next = 14;
            return App.getInitialProps(ctx);

          case 14:
            props = _context.sent;

            if (!(res && isResSent(res))) {
              _context.next = 17;
              break;
            }

            return _context.abrupt("return", props);

          case 17:
            if (props) {
              _context.next = 20;
              break;
            }

            _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
            throw new Error(_message);

          case 20:
            if (true) {
              if (Object.keys(props).length === 0 && !ctx.ctx) {
                console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps"));
              }
            }

            return _context.abrupt("return", props);

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadGetInitialProps.apply(this, arguments);
}

var urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(function (key) {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

var SP = typeof performance !== 'undefined';
exports.SP = SP;
var ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/router */ "./node_modules/next/dist/client/router.js")


/***/ }),

/***/ "./node_modules/platform/platform.js":
/*!*******************************************!*\
  !*** ./node_modules/platform/platform.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Platform.js v1.3.6
 * Copyright 2014-2020 Benjamin Tan
 * Copyright 2011-2013 John-David Dalton
 * Available under MIT license
 */
;(function() {
  'use strict';

  /** Used to determine if values are of the language type `Object`. */
  var objectTypes = {
    'function': true,
    'object': true
  };

  /** Used as a reference to the global object. */
  var root = (objectTypes[typeof window] && window) || this;

  /** Backup possible global object. */
  var oldRoot = root;

  /** Detect free variable `exports`. */
  var freeExports = objectTypes[typeof exports] && exports;

  /** Detect free variable `module`. */
  var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;

  /** Detect free variable `global` from Node.js or Browserified code and use it as `root`. */
  var freeGlobal = freeExports && freeModule && typeof global == 'object' && global;
  if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal)) {
    root = freeGlobal;
  }

  /**
   * Used as the maximum length of an array-like object.
   * See the [ES6 spec](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength)
   * for more details.
   */
  var maxSafeInteger = Math.pow(2, 53) - 1;

  /** Regular expression to detect Opera. */
  var reOpera = /\bOpera/;

  /** Possible global object. */
  var thisBinding = this;

  /** Used for native method references. */
  var objectProto = Object.prototype;

  /** Used to check for own properties of an object. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /** Used to resolve the internal `[[Class]]` of values. */
  var toString = objectProto.toString;

  /*--------------------------------------------------------------------------*/

  /**
   * Capitalizes a string value.
   *
   * @private
   * @param {string} string The string to capitalize.
   * @returns {string} The capitalized string.
   */
  function capitalize(string) {
    string = String(string);
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  /**
   * A utility function to clean up the OS name.
   *
   * @private
   * @param {string} os The OS name to clean up.
   * @param {string} [pattern] A `RegExp` pattern matching the OS name.
   * @param {string} [label] A label for the OS.
   */
  function cleanupOS(os, pattern, label) {
    // Platform tokens are defined at:
    // http://msdn.microsoft.com/en-us/library/ms537503(VS.85).aspx
    // http://web.archive.org/web/20081122053950/http://msdn.microsoft.com/en-us/library/ms537503(VS.85).aspx
    var data = {
      '10.0': '10',
      '6.4':  '10 Technical Preview',
      '6.3':  '8.1',
      '6.2':  '8',
      '6.1':  'Server 2008 R2 / 7',
      '6.0':  'Server 2008 / Vista',
      '5.2':  'Server 2003 / XP 64-bit',
      '5.1':  'XP',
      '5.01': '2000 SP1',
      '5.0':  '2000',
      '4.0':  'NT',
      '4.90': 'ME'
    };
    // Detect Windows version from platform tokens.
    if (pattern && label && /^Win/i.test(os) && !/^Windows Phone /i.test(os) &&
        (data = data[/[\d.]+$/.exec(os)])) {
      os = 'Windows ' + data;
    }
    // Correct character case and cleanup string.
    os = String(os);

    if (pattern && label) {
      os = os.replace(RegExp(pattern, 'i'), label);
    }

    os = format(
      os.replace(/ ce$/i, ' CE')
        .replace(/\bhpw/i, 'web')
        .replace(/\bMacintosh\b/, 'Mac OS')
        .replace(/_PowerPC\b/i, ' OS')
        .replace(/\b(OS X) [^ \d]+/i, '$1')
        .replace(/\bMac (OS X)\b/, '$1')
        .replace(/\/(\d)/, ' $1')
        .replace(/_/g, '.')
        .replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, '')
        .replace(/\bx86\.64\b/gi, 'x86_64')
        .replace(/\b(Windows Phone) OS\b/, '$1')
        .replace(/\b(Chrome OS \w+) [\d.]+\b/, '$1')
        .split(' on ')[0]
    );

    return os;
  }

  /**
   * An iteration utility for arrays and objects.
   *
   * @private
   * @param {Array|Object} object The object to iterate over.
   * @param {Function} callback The function called per iteration.
   */
  function each(object, callback) {
    var index = -1,
        length = object ? object.length : 0;

    if (typeof length == 'number' && length > -1 && length <= maxSafeInteger) {
      while (++index < length) {
        callback(object[index], index, object);
      }
    } else {
      forOwn(object, callback);
    }
  }

  /**
   * Trim and conditionally capitalize string values.
   *
   * @private
   * @param {string} string The string to format.
   * @returns {string} The formatted string.
   */
  function format(string) {
    string = trim(string);
    return /^(?:webOS|i(?:OS|P))/.test(string)
      ? string
      : capitalize(string);
  }

  /**
   * Iterates over an object's own properties, executing the `callback` for each.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} callback The function executed per own property.
   */
  function forOwn(object, callback) {
    for (var key in object) {
      if (hasOwnProperty.call(object, key)) {
        callback(object[key], key, object);
      }
    }
  }

  /**
   * Gets the internal `[[Class]]` of a value.
   *
   * @private
   * @param {*} value The value.
   * @returns {string} The `[[Class]]`.
   */
  function getClassOf(value) {
    return value == null
      ? capitalize(value)
      : toString.call(value).slice(8, -1);
  }

  /**
   * Host objects can return type values that are different from their actual
   * data type. The objects we are concerned with usually return non-primitive
   * types of "object", "function", or "unknown".
   *
   * @private
   * @param {*} object The owner of the property.
   * @param {string} property The property to check.
   * @returns {boolean} Returns `true` if the property value is a non-primitive, else `false`.
   */
  function isHostType(object, property) {
    var type = object != null ? typeof object[property] : 'number';
    return !/^(?:boolean|number|string|undefined)$/.test(type) &&
      (type == 'object' ? !!object[property] : true);
  }

  /**
   * Prepares a string for use in a `RegExp` by making hyphens and spaces optional.
   *
   * @private
   * @param {string} string The string to qualify.
   * @returns {string} The qualified string.
   */
  function qualify(string) {
    return String(string).replace(/([ -])(?!$)/g, '$1?');
  }

  /**
   * A bare-bones `Array#reduce` like utility function.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} callback The function called per iteration.
   * @returns {*} The accumulated result.
   */
  function reduce(array, callback) {
    var accumulator = null;
    each(array, function(value, index) {
      accumulator = callback(accumulator, value, index, array);
    });
    return accumulator;
  }

  /**
   * Removes leading and trailing whitespace from a string.
   *
   * @private
   * @param {string} string The string to trim.
   * @returns {string} The trimmed string.
   */
  function trim(string) {
    return String(string).replace(/^ +| +$/g, '');
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Creates a new platform object.
   *
   * @memberOf platform
   * @param {Object|string} [ua=navigator.userAgent] The user agent string or
   *  context object.
   * @returns {Object} A platform object.
   */
  function parse(ua) {

    /** The environment context object. */
    var context = root;

    /** Used to flag when a custom context is provided. */
    var isCustomContext = ua && typeof ua == 'object' && getClassOf(ua) != 'String';

    // Juggle arguments.
    if (isCustomContext) {
      context = ua;
      ua = null;
    }

    /** Browser navigator object. */
    var nav = context.navigator || {};

    /** Browser user agent string. */
    var userAgent = nav.userAgent || '';

    ua || (ua = userAgent);

    /** Used to flag when `thisBinding` is the [ModuleScope]. */
    var isModuleScope = isCustomContext || thisBinding == oldRoot;

    /** Used to detect if browser is like Chrome. */
    var likeChrome = isCustomContext
      ? !!nav.likeChrome
      : /\bChrome\b/.test(ua) && !/internal|\n/i.test(toString.toString());

    /** Internal `[[Class]]` value shortcuts. */
    var objectClass = 'Object',
        airRuntimeClass = isCustomContext ? objectClass : 'ScriptBridgingProxyObject',
        enviroClass = isCustomContext ? objectClass : 'Environment',
        javaClass = (isCustomContext && context.java) ? 'JavaPackage' : getClassOf(context.java),
        phantomClass = isCustomContext ? objectClass : 'RuntimeObject';

    /** Detect Java environments. */
    var java = /\bJava/.test(javaClass) && context.java;

    /** Detect Rhino. */
    var rhino = java && getClassOf(context.environment) == enviroClass;

    /** A character to represent alpha. */
    var alpha = java ? 'a' : '\u03b1';

    /** A character to represent beta. */
    var beta = java ? 'b' : '\u03b2';

    /** Browser document object. */
    var doc = context.document || {};

    /**
     * Detect Opera browser (Presto-based).
     * http://www.howtocreate.co.uk/operaStuff/operaObject.html
     * http://dev.opera.com/articles/view/opera-mini-web-content-authoring-guidelines/#operamini
     */
    var opera = context.operamini || context.opera;

    /** Opera `[[Class]]`. */
    var operaClass = reOpera.test(operaClass = (isCustomContext && opera) ? opera['[[Class]]'] : getClassOf(opera))
      ? operaClass
      : (opera = null);

    /*------------------------------------------------------------------------*/

    /** Temporary variable used over the script's lifetime. */
    var data;

    /** The CPU architecture. */
    var arch = ua;

    /** Platform description array. */
    var description = [];

    /** Platform alpha/beta indicator. */
    var prerelease = null;

    /** A flag to indicate that environment features should be used to resolve the platform. */
    var useFeatures = ua == userAgent;

    /** The browser/environment version. */
    var version = useFeatures && opera && typeof opera.version == 'function' && opera.version();

    /** A flag to indicate if the OS ends with "/ Version" */
    var isSpecialCasedOS;

    /* Detectable layout engines (order is important). */
    var layout = getLayout([
      { 'label': 'EdgeHTML', 'pattern': 'Edge' },
      'Trident',
      { 'label': 'WebKit', 'pattern': 'AppleWebKit' },
      'iCab',
      'Presto',
      'NetFront',
      'Tasman',
      'KHTML',
      'Gecko'
    ]);

    /* Detectable browser names (order is important). */
    var name = getName([
      'Adobe AIR',
      'Arora',
      'Avant Browser',
      'Breach',
      'Camino',
      'Electron',
      'Epiphany',
      'Fennec',
      'Flock',
      'Galeon',
      'GreenBrowser',
      'iCab',
      'Iceweasel',
      'K-Meleon',
      'Konqueror',
      'Lunascape',
      'Maxthon',
      { 'label': 'Microsoft Edge', 'pattern': '(?:Edge|Edg|EdgA|EdgiOS)' },
      'Midori',
      'Nook Browser',
      'PaleMoon',
      'PhantomJS',
      'Raven',
      'Rekonq',
      'RockMelt',
      { 'label': 'Samsung Internet', 'pattern': 'SamsungBrowser' },
      'SeaMonkey',
      { 'label': 'Silk', 'pattern': '(?:Cloud9|Silk-Accelerated)' },
      'Sleipnir',
      'SlimBrowser',
      { 'label': 'SRWare Iron', 'pattern': 'Iron' },
      'Sunrise',
      'Swiftfox',
      'Vivaldi',
      'Waterfox',
      'WebPositive',
      { 'label': 'Yandex Browser', 'pattern': 'YaBrowser' },
      { 'label': 'UC Browser', 'pattern': 'UCBrowser' },
      'Opera Mini',
      { 'label': 'Opera Mini', 'pattern': 'OPiOS' },
      'Opera',
      { 'label': 'Opera', 'pattern': 'OPR' },
      'Chromium',
      'Chrome',
      { 'label': 'Chrome', 'pattern': '(?:HeadlessChrome)' },
      { 'label': 'Chrome Mobile', 'pattern': '(?:CriOS|CrMo)' },
      { 'label': 'Firefox', 'pattern': '(?:Firefox|Minefield)' },
      { 'label': 'Firefox for iOS', 'pattern': 'FxiOS' },
      { 'label': 'IE', 'pattern': 'IEMobile' },
      { 'label': 'IE', 'pattern': 'MSIE' },
      'Safari'
    ]);

    /* Detectable products (order is important). */
    var product = getProduct([
      { 'label': 'BlackBerry', 'pattern': 'BB10' },
      'BlackBerry',
      { 'label': 'Galaxy S', 'pattern': 'GT-I9000' },
      { 'label': 'Galaxy S2', 'pattern': 'GT-I9100' },
      { 'label': 'Galaxy S3', 'pattern': 'GT-I9300' },
      { 'label': 'Galaxy S4', 'pattern': 'GT-I9500' },
      { 'label': 'Galaxy S5', 'pattern': 'SM-G900' },
      { 'label': 'Galaxy S6', 'pattern': 'SM-G920' },
      { 'label': 'Galaxy S6 Edge', 'pattern': 'SM-G925' },
      { 'label': 'Galaxy S7', 'pattern': 'SM-G930' },
      { 'label': 'Galaxy S7 Edge', 'pattern': 'SM-G935' },
      'Google TV',
      'Lumia',
      'iPad',
      'iPod',
      'iPhone',
      'Kindle',
      { 'label': 'Kindle Fire', 'pattern': '(?:Cloud9|Silk-Accelerated)' },
      'Nexus',
      'Nook',
      'PlayBook',
      'PlayStation Vita',
      'PlayStation',
      'TouchPad',
      'Transformer',
      { 'label': 'Wii U', 'pattern': 'WiiU' },
      'Wii',
      'Xbox One',
      { 'label': 'Xbox 360', 'pattern': 'Xbox' },
      'Xoom'
    ]);

    /* Detectable manufacturers. */
    var manufacturer = getManufacturer({
      'Apple': { 'iPad': 1, 'iPhone': 1, 'iPod': 1 },
      'Alcatel': {},
      'Archos': {},
      'Amazon': { 'Kindle': 1, 'Kindle Fire': 1 },
      'Asus': { 'Transformer': 1 },
      'Barnes & Noble': { 'Nook': 1 },
      'BlackBerry': { 'PlayBook': 1 },
      'Google': { 'Google TV': 1, 'Nexus': 1 },
      'HP': { 'TouchPad': 1 },
      'HTC': {},
      'Huawei': {},
      'Lenovo': {},
      'LG': {},
      'Microsoft': { 'Xbox': 1, 'Xbox One': 1 },
      'Motorola': { 'Xoom': 1 },
      'Nintendo': { 'Wii U': 1,  'Wii': 1 },
      'Nokia': { 'Lumia': 1 },
      'Oppo': {},
      'Samsung': { 'Galaxy S': 1, 'Galaxy S2': 1, 'Galaxy S3': 1, 'Galaxy S4': 1 },
      'Sony': { 'PlayStation': 1, 'PlayStation Vita': 1 },
      'Xiaomi': { 'Mi': 1, 'Redmi': 1 }
    });

    /* Detectable operating systems (order is important). */
    var os = getOS([
      'Windows Phone',
      'KaiOS',
      'Android',
      'CentOS',
      { 'label': 'Chrome OS', 'pattern': 'CrOS' },
      'Debian',
      { 'label': 'DragonFly BSD', 'pattern': 'DragonFly' },
      'Fedora',
      'FreeBSD',
      'Gentoo',
      'Haiku',
      'Kubuntu',
      'Linux Mint',
      'OpenBSD',
      'Red Hat',
      'SuSE',
      'Ubuntu',
      'Xubuntu',
      'Cygwin',
      'Symbian OS',
      'hpwOS',
      'webOS ',
      'webOS',
      'Tablet OS',
      'Tizen',
      'Linux',
      'Mac OS X',
      'Macintosh',
      'Mac',
      'Windows 98;',
      'Windows '
    ]);

    /*------------------------------------------------------------------------*/

    /**
     * Picks the layout engine from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected layout engine.
     */
    function getLayout(guesses) {
      return reduce(guesses, function(result, guess) {
        return result || RegExp('\\b' + (
          guess.pattern || qualify(guess)
        ) + '\\b', 'i').exec(ua) && (guess.label || guess);
      });
    }

    /**
     * Picks the manufacturer from an array of guesses.
     *
     * @private
     * @param {Array} guesses An object of guesses.
     * @returns {null|string} The detected manufacturer.
     */
    function getManufacturer(guesses) {
      return reduce(guesses, function(result, value, key) {
        // Lookup the manufacturer by product or scan the UA for the manufacturer.
        return result || (
          value[product] ||
          value[/^[a-z]+(?: +[a-z]+\b)*/i.exec(product)] ||
          RegExp('\\b' + qualify(key) + '(?:\\b|\\w*\\d)', 'i').exec(ua)
        ) && key;
      });
    }

    /**
     * Picks the browser name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected browser name.
     */
    function getName(guesses) {
      return reduce(guesses, function(result, guess) {
        return result || RegExp('\\b' + (
          guess.pattern || qualify(guess)
        ) + '\\b', 'i').exec(ua) && (guess.label || guess);
      });
    }

    /**
     * Picks the OS name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected OS name.
     */
    function getOS(guesses) {
      return reduce(guesses, function(result, guess) {
        var pattern = guess.pattern || qualify(guess);
        if (!result && (result =
              RegExp('\\b' + pattern + '(?:/[\\d.]+|[ \\w.]*)', 'i').exec(ua)
            )) {
          result = cleanupOS(result, pattern, guess.label || guess);
        }
        return result;
      });
    }

    /**
     * Picks the product name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected product name.
     */
    function getProduct(guesses) {
      return reduce(guesses, function(result, guess) {
        var pattern = guess.pattern || qualify(guess);
        if (!result && (result =
              RegExp('\\b' + pattern + ' *\\d+[.\\w_]*', 'i').exec(ua) ||
              RegExp('\\b' + pattern + ' *\\w+-[\\w]*', 'i').exec(ua) ||
              RegExp('\\b' + pattern + '(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)', 'i').exec(ua)
            )) {
          // Split by forward slash and append product version if needed.
          if ((result = String((guess.label && !RegExp(pattern, 'i').test(guess.label)) ? guess.label : result).split('/'))[1] && !/[\d.]+/.test(result[0])) {
            result[0] += ' ' + result[1];
          }
          // Correct character case and cleanup string.
          guess = guess.label || guess;
          result = format(result[0]
            .replace(RegExp(pattern, 'i'), guess)
            .replace(RegExp('; *(?:' + guess + '[_-])?', 'i'), ' ')
            .replace(RegExp('(' + guess + ')[-_.]?(\\w)', 'i'), '$1 $2'));
        }
        return result;
      });
    }

    /**
     * Resolves the version using an array of UA patterns.
     *
     * @private
     * @param {Array} patterns An array of UA patterns.
     * @returns {null|string} The detected version.
     */
    function getVersion(patterns) {
      return reduce(patterns, function(result, pattern) {
        return result || (RegExp(pattern +
          '(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)', 'i').exec(ua) || 0)[1] || null;
      });
    }

    /**
     * Returns `platform.description` when the platform object is coerced to a string.
     *
     * @name toString
     * @memberOf platform
     * @returns {string} Returns `platform.description` if available, else an empty string.
     */
    function toStringPlatform() {
      return this.description || '';
    }

    /*------------------------------------------------------------------------*/

    // Convert layout to an array so we can add extra details.
    layout && (layout = [layout]);

    // Detect Android products.
    // Browsers on Android devices typically provide their product IDS after "Android;"
    // up to "Build" or ") AppleWebKit".
    // Example:
    // "Mozilla/5.0 (Linux; Android 8.1.0; Moto G (5) Plus) AppleWebKit/537.36
    // (KHTML, like Gecko) Chrome/70.0.3538.80 Mobile Safari/537.36"
    if (/\bAndroid\b/.test(os) && !product &&
        (data = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(ua))) {
      product = trim(data[1])
        // Replace any language codes (eg. "en-US").
        .replace(/^[a-z]{2}-[a-z]{2};\s*/i, '')
        || null;
    }
    // Detect product names that contain their manufacturer's name.
    if (manufacturer && !product) {
      product = getProduct([manufacturer]);
    } else if (manufacturer && product) {
      product = product
        .replace(RegExp('^(' + qualify(manufacturer) + ')[-_.\\s]', 'i'), manufacturer + ' ')
        .replace(RegExp('^(' + qualify(manufacturer) + ')[-_.]?(\\w)', 'i'), manufacturer + ' $2');
    }
    // Clean up Google TV.
    if ((data = /\bGoogle TV\b/.exec(product))) {
      product = data[0];
    }
    // Detect simulators.
    if (/\bSimulator\b/i.test(ua)) {
      product = (product ? product + ' ' : '') + 'Simulator';
    }
    // Detect Opera Mini 8+ running in Turbo/Uncompressed mode on iOS.
    if (name == 'Opera Mini' && /\bOPiOS\b/.test(ua)) {
      description.push('running in Turbo/Uncompressed mode');
    }
    // Detect IE Mobile 11.
    if (name == 'IE' && /\blike iPhone OS\b/.test(ua)) {
      data = parse(ua.replace(/like iPhone OS/, ''));
      manufacturer = data.manufacturer;
      product = data.product;
    }
    // Detect iOS.
    else if (/^iP/.test(product)) {
      name || (name = 'Safari');
      os = 'iOS' + ((data = / OS ([\d_]+)/i.exec(ua))
        ? ' ' + data[1].replace(/_/g, '.')
        : '');
    }
    // Detect Kubuntu.
    else if (name == 'Konqueror' && /^Linux\b/i.test(os)) {
      os = 'Kubuntu';
    }
    // Detect Android browsers.
    else if ((manufacturer && manufacturer != 'Google' &&
        ((/Chrome/.test(name) && !/\bMobile Safari\b/i.test(ua)) || /\bVita\b/.test(product))) ||
        (/\bAndroid\b/.test(os) && /^Chrome/.test(name) && /\bVersion\//i.test(ua))) {
      name = 'Android Browser';
      os = /\bAndroid\b/.test(os) ? os : 'Android';
    }
    // Detect Silk desktop/accelerated modes.
    else if (name == 'Silk') {
      if (!/\bMobi/i.test(ua)) {
        os = 'Android';
        description.unshift('desktop mode');
      }
      if (/Accelerated *= *true/i.test(ua)) {
        description.unshift('accelerated');
      }
    }
    // Detect UC Browser speed mode.
    else if (name == 'UC Browser' && /\bUCWEB\b/.test(ua)) {
      description.push('speed mode');
    }
    // Detect PaleMoon identifying as Firefox.
    else if (name == 'PaleMoon' && (data = /\bFirefox\/([\d.]+)\b/.exec(ua))) {
      description.push('identifying as Firefox ' + data[1]);
    }
    // Detect Firefox OS and products running Firefox.
    else if (name == 'Firefox' && (data = /\b(Mobile|Tablet|TV)\b/i.exec(ua))) {
      os || (os = 'Firefox OS');
      product || (product = data[1]);
    }
    // Detect false positives for Firefox/Safari.
    else if (!name || (data = !/\bMinefield\b/i.test(ua) && /\b(?:Firefox|Safari)\b/.exec(name))) {
      // Escape the `/` for Firefox 1.
      if (name && !product && /[\/,]|^[^(]+?\)/.test(ua.slice(ua.indexOf(data + '/') + 8))) {
        // Clear name of false positives.
        name = null;
      }
      // Reassign a generic name.
      if ((data = product || manufacturer || os) &&
          (product || manufacturer || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(os))) {
        name = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(os) ? os : data) + ' Browser';
      }
    }
    // Add Chrome version to description for Electron.
    else if (name == 'Electron' && (data = (/\bChrome\/([\d.]+)\b/.exec(ua) || 0)[1])) {
      description.push('Chromium ' + data);
    }
    // Detect non-Opera (Presto-based) versions (order is important).
    if (!version) {
      version = getVersion([
        '(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)',
        'Version',
        qualify(name),
        '(?:Firefox|Minefield|NetFront)'
      ]);
    }
    // Detect stubborn layout engines.
    if ((data =
          layout == 'iCab' && parseFloat(version) > 3 && 'WebKit' ||
          /\bOpera\b/.test(name) && (/\bOPR\b/.test(ua) ? 'Blink' : 'Presto') ||
          /\b(?:Midori|Nook|Safari)\b/i.test(ua) && !/^(?:Trident|EdgeHTML)$/.test(layout) && 'WebKit' ||
          !layout && /\bMSIE\b/i.test(ua) && (os == 'Mac OS' ? 'Tasman' : 'Trident') ||
          layout == 'WebKit' && /\bPlayStation\b(?! Vita\b)/i.test(name) && 'NetFront'
        )) {
      layout = [data];
    }
    // Detect Windows Phone 7 desktop mode.
    if (name == 'IE' && (data = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(ua) || 0)[1])) {
      name += ' Mobile';
      os = 'Windows Phone ' + (/\+$/.test(data) ? data : data + '.x');
      description.unshift('desktop mode');
    }
    // Detect Windows Phone 8.x desktop mode.
    else if (/\bWPDesktop\b/i.test(ua)) {
      name = 'IE Mobile';
      os = 'Windows Phone 8.x';
      description.unshift('desktop mode');
      version || (version = (/\brv:([\d.]+)/.exec(ua) || 0)[1]);
    }
    // Detect IE 11 identifying as other browsers.
    else if (name != 'IE' && layout == 'Trident' && (data = /\brv:([\d.]+)/.exec(ua))) {
      if (name) {
        description.push('identifying as ' + name + (version ? ' ' + version : ''));
      }
      name = 'IE';
      version = data[1];
    }
    // Leverage environment features.
    if (useFeatures) {
      // Detect server-side environments.
      // Rhino has a global function while others have a global object.
      if (isHostType(context, 'global')) {
        if (java) {
          data = java.lang.System;
          arch = data.getProperty('os.arch');
          os = os || data.getProperty('os.name') + ' ' + data.getProperty('os.version');
        }
        if (rhino) {
          try {
            version = context.require('ringo/engine').version.join('.');
            name = 'RingoJS';
          } catch(e) {
            if ((data = context.system) && data.global.system == context.system) {
              name = 'Narwhal';
              os || (os = data[0].os || null);
            }
          }
          if (!name) {
            name = 'Rhino';
          }
        }
        else if (
          typeof context.process == 'object' && !context.process.browser &&
          (data = context.process)
        ) {
          if (typeof data.versions == 'object') {
            if (typeof data.versions.electron == 'string') {
              description.push('Node ' + data.versions.node);
              name = 'Electron';
              version = data.versions.electron;
            } else if (typeof data.versions.nw == 'string') {
              description.push('Chromium ' + version, 'Node ' + data.versions.node);
              name = 'NW.js';
              version = data.versions.nw;
            }
          }
          if (!name) {
            name = 'Node.js';
            arch = data.arch;
            os = data.platform;
            version = /[\d.]+/.exec(data.version);
            version = version ? version[0] : null;
          }
        }
      }
      // Detect Adobe AIR.
      else if (getClassOf((data = context.runtime)) == airRuntimeClass) {
        name = 'Adobe AIR';
        os = data.flash.system.Capabilities.os;
      }
      // Detect PhantomJS.
      else if (getClassOf((data = context.phantom)) == phantomClass) {
        name = 'PhantomJS';
        version = (data = data.version || null) && (data.major + '.' + data.minor + '.' + data.patch);
      }
      // Detect IE compatibility modes.
      else if (typeof doc.documentMode == 'number' && (data = /\bTrident\/(\d+)/i.exec(ua))) {
        // We're in compatibility mode when the Trident version + 4 doesn't
        // equal the document mode.
        version = [version, doc.documentMode];
        if ((data = +data[1] + 4) != version[1]) {
          description.push('IE ' + version[1] + ' mode');
          layout && (layout[1] = '');
          version[1] = data;
        }
        version = name == 'IE' ? String(version[1].toFixed(1)) : version[0];
      }
      // Detect IE 11 masking as other browsers.
      else if (typeof doc.documentMode == 'number' && /^(?:Chrome|Firefox)\b/.test(name)) {
        description.push('masking as ' + name + ' ' + version);
        name = 'IE';
        version = '11.0';
        layout = ['Trident'];
        os = 'Windows';
      }
      os = os && format(os);
    }
    // Detect prerelease phases.
    if (version && (data =
          /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(version) ||
          /(?:alpha|beta)(?: ?\d)?/i.exec(ua + ';' + (useFeatures && nav.appMinorVersion)) ||
          /\bMinefield\b/i.test(ua) && 'a'
        )) {
      prerelease = /b/i.test(data) ? 'beta' : 'alpha';
      version = version.replace(RegExp(data + '\\+?$'), '') +
        (prerelease == 'beta' ? beta : alpha) + (/\d+\+?/.exec(data) || '');
    }
    // Detect Firefox Mobile.
    if (name == 'Fennec' || name == 'Firefox' && /\b(?:Android|Firefox OS|KaiOS)\b/.test(os)) {
      name = 'Firefox Mobile';
    }
    // Obscure Maxthon's unreliable version.
    else if (name == 'Maxthon' && version) {
      version = version.replace(/\.[\d.]+/, '.x');
    }
    // Detect Xbox 360 and Xbox One.
    else if (/\bXbox\b/i.test(product)) {
      if (product == 'Xbox 360') {
        os = null;
      }
      if (product == 'Xbox 360' && /\bIEMobile\b/.test(ua)) {
        description.unshift('mobile mode');
      }
    }
    // Add mobile postfix.
    else if ((/^(?:Chrome|IE|Opera)$/.test(name) || name && !product && !/Browser|Mobi/.test(name)) &&
        (os == 'Windows CE' || /Mobi/i.test(ua))) {
      name += ' Mobile';
    }
    // Detect IE platform preview.
    else if (name == 'IE' && useFeatures) {
      try {
        if (context.external === null) {
          description.unshift('platform preview');
        }
      } catch(e) {
        description.unshift('embedded');
      }
    }
    // Detect BlackBerry OS version.
    // http://docs.blackberry.com/en/developers/deliverables/18169/HTTP_headers_sent_by_BB_Browser_1234911_11.jsp
    else if ((/\bBlackBerry\b/.test(product) || /\bBB10\b/.test(ua)) && (data =
          (RegExp(product.replace(/ +/g, ' *') + '/([.\\d]+)', 'i').exec(ua) || 0)[1] ||
          version
        )) {
      data = [data, /BB10/.test(ua)];
      os = (data[1] ? (product = null, manufacturer = 'BlackBerry') : 'Device Software') + ' ' + data[0];
      version = null;
    }
    // Detect Opera identifying/masking itself as another browser.
    // http://www.opera.com/support/kb/view/843/
    else if (this != forOwn && product != 'Wii' && (
          (useFeatures && opera) ||
          (/Opera/.test(name) && /\b(?:MSIE|Firefox)\b/i.test(ua)) ||
          (name == 'Firefox' && /\bOS X (?:\d+\.){2,}/.test(os)) ||
          (name == 'IE' && (
            (os && !/^Win/.test(os) && version > 5.5) ||
            /\bWindows XP\b/.test(os) && version > 8 ||
            version == 8 && !/\bTrident\b/.test(ua)
          ))
        ) && !reOpera.test((data = parse.call(forOwn, ua.replace(reOpera, '') + ';'))) && data.name) {
      // When "identifying", the UA contains both Opera and the other browser's name.
      data = 'ing as ' + data.name + ((data = data.version) ? ' ' + data : '');
      if (reOpera.test(name)) {
        if (/\bIE\b/.test(data) && os == 'Mac OS') {
          os = null;
        }
        data = 'identify' + data;
      }
      // When "masking", the UA contains only the other browser's name.
      else {
        data = 'mask' + data;
        if (operaClass) {
          name = format(operaClass.replace(/([a-z])([A-Z])/g, '$1 $2'));
        } else {
          name = 'Opera';
        }
        if (/\bIE\b/.test(data)) {
          os = null;
        }
        if (!useFeatures) {
          version = null;
        }
      }
      layout = ['Presto'];
      description.push(data);
    }
    // Detect WebKit Nightly and approximate Chrome/Safari versions.
    if ((data = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(ua) || 0)[1])) {
      // Correct build number for numeric comparison.
      // (e.g. "532.5" becomes "532.05")
      data = [parseFloat(data.replace(/\.(\d)$/, '.0$1')), data];
      // Nightly builds are postfixed with a "+".
      if (name == 'Safari' && data[1].slice(-1) == '+') {
        name = 'WebKit Nightly';
        prerelease = 'alpha';
        version = data[1].slice(0, -1);
      }
      // Clear incorrect browser versions.
      else if (version == data[1] ||
          version == (data[2] = (/\bSafari\/([\d.]+\+?)/i.exec(ua) || 0)[1])) {
        version = null;
      }
      // Use the full Chrome version when available.
      data[1] = (/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(ua) || 0)[1];
      // Detect Blink layout engine.
      if (data[0] == 537.36 && data[2] == 537.36 && parseFloat(data[1]) >= 28 && layout == 'WebKit') {
        layout = ['Blink'];
      }
      // Detect JavaScriptCore.
      // http://stackoverflow.com/questions/6768474/how-can-i-detect-which-javascript-engine-v8-or-jsc-is-used-at-runtime-in-androi
      if (!useFeatures || (!likeChrome && !data[1])) {
        layout && (layout[1] = 'like Safari');
        data = (data = data[0], data < 400 ? 1 : data < 500 ? 2 : data < 526 ? 3 : data < 533 ? 4 : data < 534 ? '4+' : data < 535 ? 5 : data < 537 ? 6 : data < 538 ? 7 : data < 601 ? 8 : data < 602 ? 9 : data < 604 ? 10 : data < 606 ? 11 : data < 608 ? 12 : '12');
      } else {
        layout && (layout[1] = 'like Chrome');
        data = data[1] || (data = data[0], data < 530 ? 1 : data < 532 ? 2 : data < 532.05 ? 3 : data < 533 ? 4 : data < 534.03 ? 5 : data < 534.07 ? 6 : data < 534.10 ? 7 : data < 534.13 ? 8 : data < 534.16 ? 9 : data < 534.24 ? 10 : data < 534.30 ? 11 : data < 535.01 ? 12 : data < 535.02 ? '13+' : data < 535.07 ? 15 : data < 535.11 ? 16 : data < 535.19 ? 17 : data < 536.05 ? 18 : data < 536.10 ? 19 : data < 537.01 ? 20 : data < 537.11 ? '21+' : data < 537.13 ? 23 : data < 537.18 ? 24 : data < 537.24 ? 25 : data < 537.36 ? 26 : layout != 'Blink' ? '27' : '28');
      }
      // Add the postfix of ".x" or "+" for approximate versions.
      layout && (layout[1] += ' ' + (data += typeof data == 'number' ? '.x' : /[.+]/.test(data) ? '' : '+'));
      // Obscure version for some Safari 1-2 releases.
      if (name == 'Safari' && (!version || parseInt(version) > 45)) {
        version = data;
      } else if (name == 'Chrome' && /\bHeadlessChrome/i.test(ua)) {
        description.unshift('headless');
      }
    }
    // Detect Opera desktop modes.
    if (name == 'Opera' &&  (data = /\bzbov|zvav$/.exec(os))) {
      name += ' ';
      description.unshift('desktop mode');
      if (data == 'zvav') {
        name += 'Mini';
        version = null;
      } else {
        name += 'Mobile';
      }
      os = os.replace(RegExp(' *' + data + '$'), '');
    }
    // Detect Chrome desktop mode.
    else if (name == 'Safari' && /\bChrome\b/.exec(layout && layout[1])) {
      description.unshift('desktop mode');
      name = 'Chrome Mobile';
      version = null;

      if (/\bOS X\b/.test(os)) {
        manufacturer = 'Apple';
        os = 'iOS 4.3+';
      } else {
        os = null;
      }
    }
    // Newer versions of SRWare Iron uses the Chrome tag to indicate its version number.
    else if (/\bSRWare Iron\b/.test(name) && !version) {
      version = getVersion('Chrome');
    }
    // Strip incorrect OS versions.
    if (version && version.indexOf((data = /[\d.]+$/.exec(os))) == 0 &&
        ua.indexOf('/' + data + '-') > -1) {
      os = trim(os.replace(data, ''));
    }
    // Ensure OS does not include the browser name.
    if (os && os.indexOf(name) != -1 && !RegExp(name + ' OS').test(os)) {
      os = os.replace(RegExp(' *' + qualify(name) + ' *'), '');
    }
    // Add layout engine.
    if (layout && !/\b(?:Avant|Nook)\b/.test(name) && (
        /Browser|Lunascape|Maxthon/.test(name) ||
        name != 'Safari' && /^iOS/.test(os) && /\bSafari\b/.test(layout[1]) ||
        /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(name) && layout[1])) {
      // Don't add layout details to description if they are falsey.
      (data = layout[layout.length - 1]) && description.push(data);
    }
    // Combine contextual information.
    if (description.length) {
      description = ['(' + description.join('; ') + ')'];
    }
    // Append manufacturer to description.
    if (manufacturer && product && product.indexOf(manufacturer) < 0) {
      description.push('on ' + manufacturer);
    }
    // Append product to description.
    if (product) {
      description.push((/^on /.test(description[description.length - 1]) ? '' : 'on ') + product);
    }
    // Parse the OS into an object.
    if (os) {
      data = / ([\d.+]+)$/.exec(os);
      isSpecialCasedOS = data && os.charAt(os.length - data[0].length - 1) == '/';
      os = {
        'architecture': 32,
        'family': (data && !isSpecialCasedOS) ? os.replace(data[0], '') : os,
        'version': data ? data[1] : null,
        'toString': function() {
          var version = this.version;
          return this.family + ((version && !isSpecialCasedOS) ? ' ' + version : '') + (this.architecture == 64 ? ' 64-bit' : '');
        }
      };
    }
    // Add browser/OS architecture.
    if ((data = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(arch)) && !/\bi686\b/i.test(arch)) {
      if (os) {
        os.architecture = 64;
        os.family = os.family.replace(RegExp(' *' + data), '');
      }
      if (
          name && (/\bWOW64\b/i.test(ua) ||
          (useFeatures && /\w(?:86|32)$/.test(nav.cpuClass || nav.platform) && !/\bWin64; x64\b/i.test(ua)))
      ) {
        description.unshift('32-bit');
      }
    }
    // Chrome 39 and above on OS X is always 64-bit.
    else if (
        os && /^OS X/.test(os.family) &&
        name == 'Chrome' && parseFloat(version) >= 39
    ) {
      os.architecture = 64;
    }

    ua || (ua = null);

    /*------------------------------------------------------------------------*/

    /**
     * The platform object.
     *
     * @name platform
     * @type Object
     */
    var platform = {};

    /**
     * The platform description.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.description = ua;

    /**
     * The name of the browser's layout engine.
     *
     * The list of common layout engines include:
     * "Blink", "EdgeHTML", "Gecko", "Trident" and "WebKit"
     *
     * @memberOf platform
     * @type string|null
     */
    platform.layout = layout && layout[0];

    /**
     * The name of the product's manufacturer.
     *
     * The list of manufacturers include:
     * "Apple", "Archos", "Amazon", "Asus", "Barnes & Noble", "BlackBerry",
     * "Google", "HP", "HTC", "LG", "Microsoft", "Motorola", "Nintendo",
     * "Nokia", "Samsung" and "Sony"
     *
     * @memberOf platform
     * @type string|null
     */
    platform.manufacturer = manufacturer;

    /**
     * The name of the browser/environment.
     *
     * The list of common browser names include:
     * "Chrome", "Electron", "Firefox", "Firefox for iOS", "IE",
     * "Microsoft Edge", "PhantomJS", "Safari", "SeaMonkey", "Silk",
     * "Opera Mini" and "Opera"
     *
     * Mobile versions of some browsers have "Mobile" appended to their name:
     * eg. "Chrome Mobile", "Firefox Mobile", "IE Mobile" and "Opera Mobile"
     *
     * @memberOf platform
     * @type string|null
     */
    platform.name = name;

    /**
     * The alpha/beta release indicator.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.prerelease = prerelease;

    /**
     * The name of the product hosting the browser.
     *
     * The list of common products include:
     *
     * "BlackBerry", "Galaxy S4", "Lumia", "iPad", "iPod", "iPhone", "Kindle",
     * "Kindle Fire", "Nexus", "Nook", "PlayBook", "TouchPad" and "Transformer"
     *
     * @memberOf platform
     * @type string|null
     */
    platform.product = product;

    /**
     * The browser's user agent string.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.ua = ua;

    /**
     * The browser/environment version.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.version = name && version;

    /**
     * The name of the operating system.
     *
     * @memberOf platform
     * @type Object
     */
    platform.os = os || {

      /**
       * The CPU architecture the OS is built for.
       *
       * @memberOf platform.os
       * @type number|null
       */
      'architecture': null,

      /**
       * The family of the OS.
       *
       * Common values include:
       * "Windows", "Windows Server 2008 R2 / 7", "Windows Server 2008 / Vista",
       * "Windows XP", "OS X", "Linux", "Ubuntu", "Debian", "Fedora", "Red Hat",
       * "SuSE", "Android", "iOS" and "Windows Phone"
       *
       * @memberOf platform.os
       * @type string|null
       */
      'family': null,

      /**
       * The version of the OS.
       *
       * @memberOf platform.os
       * @type string|null
       */
      'version': null,

      /**
       * Returns the OS string.
       *
       * @memberOf platform.os
       * @returns {string} The OS string.
       */
      'toString': function() { return 'null'; }
    };

    platform.parse = parse;
    platform.toString = toStringPlatform;

    if (platform.version) {
      description.unshift(version);
    }
    if (platform.name) {
      description.unshift(name);
    }
    if (os && name && !(os == String(os).split(' ')[0] && (os == name.split(' ')[0] || product))) {
      description.push(product ? '(' + os + ')' : 'on ' + os);
    }
    if (description.length) {
      platform.description = description.join(' ');
    }
    return platform;
  }

  /*--------------------------------------------------------------------------*/

  // Export platform.
  var platform = parse();

  // Some AMD build optimizers, like r.js, check for condition patterns like the following:
  if (true) {
    // Expose platform on the global object to prevent errors when platform is
    // loaded by a script tag in the presence of an AMD loader.
    // See http://requirejs.org/docs/errors.html#mismatch for more details.
    root.platform = platform;

    // Define as an anonymous module so platform can be aliased through path mapping.
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return platform;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  // Check for `exports` after `define` in case a build optimizer adds an `exports` object.
  else {}
}.call(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/preact/compat/dist/compat.module.js":
/*!**********************************************************!*\
  !*** ./node_modules/preact/compat/dist/compat.module.js ***!
  \**********************************************************/
/*! exports provided: useState, useReducer, useEffect, useLayoutEffect, useRef, useImperativeHandle, useMemo, useCallback, useContext, useDebugValue, useErrorBoundary, createElement, createContext, createRef, Fragment, Component, default, version, Children, render, hydrate, unmountComponentAtNode, createPortal, createFactory, cloneElement, isValidElement, findDOMNode, PureComponent, memo, forwardRef, unstable_batchedUpdates, StrictMode, Suspense, SuspenseList, lazy, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, unstable_ImmediatePriority, unstable_UserBlockingPriority, unstable_NormalPriority, unstable_LowPriority, unstable_IdlePriority, unstable_runWithPriority, unstable_now */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return un; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Children", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unmountComponentAtNode", function() { return an; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPortal", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFactory", function() { return fn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return ln; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return cn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDOMNode", function() { return sn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureComponent", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memo", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forwardRef", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_batchedUpdates", function() { return hn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrictMode", function() { return pn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Suspense", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuspenseList", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazy", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_ImmediatePriority", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_UserBlockingPriority", function() { return X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_NormalPriority", function() { return nn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_LowPriority", function() { return tn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_IdlePriority", function() { return en; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_runWithPriority", function() { return rn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_now", function() { return on; });
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useImperativeHandle", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useMemo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useContext", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDebugValue", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useDebugValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useErrorBoundary", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useErrorBoundary"]; });

/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["createElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["createContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["createRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["Component"]; });

function C(n,t){for(var e in t)n[e]=t[e];return n}function S(n,t){for(var e in n)if("__source"!==e&&!(e in t))return!0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return!0;return!1}function E(n){this.props=n}function g(n,t){function e(n){var e=this.props.ref,r=e==n.ref;return!r&&e&&(e.call?e(null):e.current=null),t?!t(this.props,n)||!r:S(this.props,n)}function r(t){return this.shouldComponentUpdate=e,Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(n,t)}return r.displayName="Memo("+(n.displayName||n.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(E.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__["Component"]).isPureReactComponent=!0,E.prototype.shouldComponentUpdate=function(n,t){return S(this.props,n)||S(this.state,t)};var w=preact__WEBPACK_IMPORTED_MODULE_1__["options"].__b;preact__WEBPACK_IMPORTED_MODULE_1__["options"].__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),w&&w(n)};var R="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function x(n){function t(t,e){var r=C({},t);return delete r.ref,n(r,(e=t.ref||e)&&("object"!=typeof e||"current"in e)?e:null)}return t.$$typeof=R,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var N=function(n,t){return null==n?null:Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n).map(t))},k={map:N,forEach:N,count:function(n){return n?Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n).length:0},only:function(n){var t=Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n);if(1!==t.length)throw"Children.only";return t[0]},toArray:preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"]},A=preact__WEBPACK_IMPORTED_MODULE_1__["options"].__e;function O(){this.__u=0,this.t=null,this.__b=null}function L(n){var t=n.__.__c;return t&&t.__e&&t.__e(n)}function U(n){var t,e,r;function o(o){if(t||(t=n()).then(function(n){e=n.default||n},function(n){r=n}),r)throw r;if(!e)throw t;return Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(e,o)}return o.displayName="Lazy",o.__f=!0,o}function D(){this.o=null,this.u=null}preact__WEBPACK_IMPORTED_MODULE_1__["options"].__e=function(n,t,e){if(n.then)for(var r,o=t;o=o.__;)if((r=o.__c)&&r.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),r.__c(n,t);A(n,t,e)},(O.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__["Component"]).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var o=L(r.__v),u=!1,i=function(){u||(u=!0,e.componentWillUnmount=e.__c,o?o(f):f())};e.__c=e.componentWillUnmount,e.componentWillUnmount=function(){i(),e.__c&&e.__c()};var f=function(){if(!--r.__u){if(r.state.__e){var n=r.state.__e;r.__v.__k[0]=function n(t,e,r){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)}),t.__c&&t.__c.__P===e&&(t.__e&&r.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=r)),t}(n,n.__c.__P,n.__c.__O)}var t;for(r.setState({__e:r.__b=null});t=r.t.pop();)t.forceUpdate()}},c=!0===t.__h;r.__u++||c||r.setState({__e:r.__b=r.__v.__k[0]}),n.then(i,i)},O.prototype.componentWillUnmount=function(){this.t=[]},O.prototype.render=function(n,t){if(this.__b){if(this.__v.__k){var e=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function n(t,e,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c()}),t.__c.__H=null),null!=(t=C({},t)).__c&&(t.__c.__P===r&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)})),t}(this.__b,e,r.__O=r.__P)}this.__b=null}var o=t.__e&&Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"],null,n.fallback);return o&&(o.__h=null),[Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"],null,t.__e?null:n.children),o]};var F=function(n,t,e){if(++e[1]===e[0]&&n.u.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.u.size))for(e=n.o;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.o=e=e[2]}};function M(n){return this.getChildContext=function(){return n.context},n.children}function T(n){var t=this,e=n.i;t.componentWillUnmount=function(){Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(null,t.l),t.l=null,t.i=null},t.i&&t.i!==e&&t.componentWillUnmount(),n.__v?(t.l||(t.i=e,t.l={nodeType:1,parentNode:e,childNodes:[],appendChild:function(n){this.childNodes.push(n),t.i.appendChild(n)},insertBefore:function(n,e){this.childNodes.push(n),t.i.appendChild(n)},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),t.i.removeChild(n)}}),Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(M,{context:t.context},n.__v),t.l)):t.l&&t.componentWillUnmount()}function j(n,t){return Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(T,{__v:n,i:t})}(D.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__["Component"]).__e=function(n){var t=this,e=L(t.__v),r=t.u.get(n);return r[0]++,function(o){var u=function(){t.props.revealOrder?(r.push(o),F(t,n,r)):o()};e?e(u):u()}},D.prototype.render=function(n){this.o=null,this.u=new Map;var t=Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.u.set(t[e],this.o=[1,0,this.o]);return n.children},D.prototype.componentDidUpdate=D.prototype.componentDidMount=function(){var n=this;this.u.forEach(function(t,e){F(n,e,t)})};var I="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,W=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,P=function(n){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(n)};function z(n,t,e){return null==t.__k&&(t.textContent=""),Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(n,t),"function"==typeof e&&e(),n?n.__c:null}function B(n,t,e){return Object(preact__WEBPACK_IMPORTED_MODULE_1__["hydrate"])(n,t),"function"==typeof e&&e(),n?n.__c:null}preact__WEBPACK_IMPORTED_MODULE_1__["Component"].prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(preact__WEBPACK_IMPORTED_MODULE_1__["Component"].prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(t){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:t})}})});var V=preact__WEBPACK_IMPORTED_MODULE_1__["options"].event;function H(){}function Z(){return this.cancelBubble}function Y(){return this.defaultPrevented}preact__WEBPACK_IMPORTED_MODULE_1__["options"].event=function(n){return V&&(n=V(n)),n.persist=H,n.isPropagationStopped=Z,n.isDefaultPrevented=Y,n.nativeEvent=n};var $,q={configurable:!0,get:function(){return this.class}},G=preact__WEBPACK_IMPORTED_MODULE_1__["options"].vnode;preact__WEBPACK_IMPORTED_MODULE_1__["options"].vnode=function(n){var t=n.type,e=n.props,r=e;if("string"==typeof t){for(var o in r={},e){var u=e[o];"defaultValue"===o&&"value"in e&&null==e.value?o="value":"download"===o&&!0===u?u="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+t)&&!P(e.type)?o="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(o)?o=o.toLowerCase():W.test(o)?o=o.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===u&&(u=void 0),r[o]=u}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(e.children).forEach(function(n){n.props.selected=-1!=r.value.indexOf(n.props.value)})),"select"==t&&null!=r.defaultValue&&(r.value=Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(e.children).forEach(function(n){n.props.selected=r.multiple?-1!=r.defaultValue.indexOf(n.props.value):r.defaultValue==n.props.value})),n.props=r}t&&e.class!=e.className&&(q.enumerable="className"in e,null!=e.className&&(r.class=e.className),Object.defineProperty(r,"className",q)),n.$$typeof=I,G&&G(n)};var J=preact__WEBPACK_IMPORTED_MODULE_1__["options"].__r;preact__WEBPACK_IMPORTED_MODULE_1__["options"].__r=function(n){J&&J(n),$=n.__c};var K={ReactCurrentDispatcher:{current:{readContext:function(n){return $.__n[n.__c].props.value}}}},Q=1,X=2,nn=3,tn=4,en=5;function rn(n,t){return t()}var on="object"==typeof performance&&"function"==typeof performance.now?performance.now.bind(performance):function(){return Date.now()},un="16.8.0";function fn(n){return preact__WEBPACK_IMPORTED_MODULE_1__["createElement"].bind(null,n)}function cn(n){return!!n&&n.$$typeof===I}function ln(n){return cn(n)?preact__WEBPACK_IMPORTED_MODULE_1__["cloneElement"].apply(null,arguments):n}function an(n){return!!n.__k&&(Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(null,n),!0)}function sn(n){return n&&(n.base||1===n.nodeType&&n)||null}var hn=function(n,t){return n(t)},pn=preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"];/* harmony default export */ __webpack_exports__["default"] = ({useState:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useState"],useReducer:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useReducer"],useEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useEffect"],useLayoutEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"],useRef:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useRef"],useImperativeHandle:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"],useMemo:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useMemo"],useCallback:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useCallback"],useContext:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useContext"],useDebugValue:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useDebugValue"],version:"16.8.0",Children:k,render:z,hydrate:B,unmountComponentAtNode:an,createPortal:j,createElement:preact__WEBPACK_IMPORTED_MODULE_1__["createElement"],createContext:preact__WEBPACK_IMPORTED_MODULE_1__["createContext"],createFactory:fn,cloneElement:ln,createRef:preact__WEBPACK_IMPORTED_MODULE_1__["createRef"],Fragment:preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"],isValidElement:cn,findDOMNode:sn,Component:preact__WEBPACK_IMPORTED_MODULE_1__["Component"],PureComponent:E,memo:g,forwardRef:x,unstable_batchedUpdates:hn,StrictMode:preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"],Suspense:O,SuspenseList:D,lazy:U,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:K});
//# sourceMappingURL=compat.module.js.map


/***/ }),

/***/ "./node_modules/preact/dist/preact.module.js":
/*!***************************************************!*\
  !*** ./node_modules/preact/dist/preact.module.js ***!
  \***************************************************/
/*! exports provided: render, hydrate, createElement, h, Fragment, createRef, isValidElement, Component, cloneElement, createContext, toChildArray, options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toChildArray", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return n; });
var n,l,u,i,t,r,o={},f=[],e=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c(n,l){for(var u in l)n[u]=l[u];return n}function s(n){var l=n.parentNode;l&&l.removeChild(n)}function a(n,l,u){var i,t,r,o=arguments,f={};for(r in l)"key"==r?i=l[r]:"ref"==r?t=l[r]:f[r]=l[r];if(arguments.length>3)for(u=[u],r=3;r<arguments.length;r++)u.push(o[r]);if(null!=u&&(f.children=u),"function"==typeof n&&null!=n.defaultProps)for(r in n.defaultProps)void 0===f[r]&&(f[r]=n.defaultProps[r]);return v(n,f,i,t,null)}function v(l,u,i,t,r){var o={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++n.__v:r};return null!=n.vnode&&n.vnode(o),o}function h(){return{current:null}}function y(n){return n.children}function p(n,l){this.props=n,this.context=l}function d(n,l){if(null==l)return n.__?d(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?d(n):null}function _(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return _(n)}}function k(l){(!l.__d&&(l.__d=!0)&&u.push(l)&&!m.__r++||t!==n.debounceRendering)&&((t=n.debounceRendering)||i)(m)}function m(){for(var n;m.__r=u.length;)n=u.sort(function(n,l){return n.__v.__b-l.__v.__b}),u=[],n.some(function(n){var l,u,i,t,r,o;n.__d&&(r=(t=(l=n).__v).__e,(o=l.__P)&&(u=[],(i=c({},t)).__v=t.__v+1,T(o,t,i,l.__n,void 0!==o.ownerSVGElement,null!=t.__h?[r]:null,u,null==r?d(t):r,t.__h),j(u,t),t.__e!=r&&_(t)))})}function b(n,l,u,i,t,r,e,c,s,a){var h,p,_,k,m,b,w,A=i&&i.__k||f,P=A.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(k=u.__k[h]=null==(k=l[h])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k?v(null,k,null,null,k):Array.isArray(k)?v(y,{children:k},null,null,null):k.__b>0?v(k.type,k.props,k.key,null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(_=A[h])||_&&k.key==_.key&&k.type===_.type)A[h]=void 0;else for(p=0;p<P;p++){if((_=A[p])&&k.key==_.key&&k.type===_.type){A[p]=void 0;break}_=null}T(n,k,_=_||o,t,r,e,c,s,a),m=k.__e,(p=k.ref)&&_.ref!=p&&(w||(w=[]),_.ref&&w.push(_.ref,null,k),w.push(p,k.__c||m,k)),null!=m?(null==b&&(b=m),"function"==typeof k.type&&null!=k.__k&&k.__k===_.__k?k.__d=s=g(k,s,n):s=x(n,k,_,A,m,s),a||"option"!==u.type?"function"==typeof u.type&&(u.__d=s):n.value=""):s&&_.__e==s&&s.parentNode!=n&&(s=d(_))}for(u.__e=b,h=P;h--;)null!=A[h]&&("function"==typeof u.type&&null!=A[h].__e&&A[h].__e==u.__d&&(u.__d=d(i,h+1)),L(A[h],A[h]));if(w)for(h=0;h<w.length;h++)I(w[h],w[++h],w[++h])}function g(n,l,u){var i,t;for(i=0;i<n.__k.length;i++)(t=n.__k[i])&&(t.__=n,l="function"==typeof t.type?g(t,l,u):x(u,t,t,n.__k,t.__e,l));return l}function w(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){w(n,l)}):l.push(n)),l}function x(n,l,u,i,t,r){var o,f,e;if(void 0!==l.__d)o=l.__d,l.__d=void 0;else if(null==u||t!=r||null==t.parentNode)n:if(null==r||r.parentNode!==n)n.appendChild(t),o=null;else{for(f=r,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,r),o=r}return void 0!==o?o:t.nextSibling}function A(n,l,u,i,t){var r;for(r in u)"children"===r||"key"===r||r in l||C(n,r,null,u[r],i);for(r in l)t&&"function"!=typeof l[r]||"children"===r||"key"===r||"value"===r||"checked"===r||u[r]===l[r]||C(n,r,l[r],u[r],i)}function P(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||e.test(l)?u:u+"px"}function C(n,l,u,i,t){var r;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||P(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||P(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])r=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+r]=u,u?i||n.addEventListener(l,r?H:$,r):n.removeEventListener(l,r?H:$,r);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l))}}function $(l){this.l[l.type+!1](n.event?n.event(l):l)}function H(l){this.l[l.type+!0](n.event?n.event(l):l)}function T(l,u,i,t,r,o,f,e,s){var a,v,h,d,_,k,m,g,w,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(s=i.__h,e=u.__e=i.__e,u.__h=null,o=[e]),(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(g=u.props,w=(a=P.contextType)&&t[a.__c],x=a?w?w.props.value:a.__:t,i.__c?m=(v=u.__c=i.__c).__=v.__E:("prototype"in P&&P.prototype.render?u.__c=v=new P(g,x):(u.__c=v=new p(g,x),v.constructor=P,v.render=M),w&&w.sub(v),v.props=g,v.state||(v.state={}),v.context=x,v.__n=t,h=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=P.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=c({},v.__s)),c(v.__s,P.getDerivedStateFromProps(g,v.__s))),d=v.props,_=v.state,h)null==P.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else{if(null==P.getDerivedStateFromProps&&g!==d&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(g,x),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(g,v.__s,x)||u.__v===i.__v){v.props=g,v.state=v.__s,u.__v!==i.__v&&(v.__d=!1),v.__v=u,u.__e=i.__e,u.__k=i.__k,v.__h.length&&f.push(v);break n}null!=v.componentWillUpdate&&v.componentWillUpdate(g,v.__s,x),null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(d,_,k)})}v.context=x,v.props=g,v.state=v.__s,(a=n.__r)&&a(u),v.__d=!1,v.__v=u,v.__P=l,a=v.render(v.props,v.state,v.context),v.state=v.__s,null!=v.getChildContext&&(t=c(c({},t),v.getChildContext())),h||null==v.getSnapshotBeforeUpdate||(k=v.getSnapshotBeforeUpdate(d,_)),A=null!=a&&a.type===y&&null==a.key?a.props.children:a,b(l,Array.isArray(A)?A:[A],u,i,t,r,o,f,e,s),v.base=u.__e,u.__h=null,v.__h.length&&f.push(v),m&&(v.__E=v.__=null),v.__e=!1}else null==o&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=z(i.__e,u,i,t,r,o,f,s);(a=n.diffed)&&a(u)}catch(l){u.__v=null,(s||null!=o)&&(u.__e=e,u.__h=!!s,o[o.indexOf(e)]=null),n.__e(l,u,i)}}function j(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u)})}catch(l){n.__e(l,u.__v)}})}function z(n,l,u,i,t,r,e,c){var a,v,h,y,p,d=u.props,_=l.props,k=l.type;if("svg"===k&&(t=!0),null!=r)for(a=0;a<r.length;a++)if(null!=(v=r[a])&&(n==v||v.localName==k)){n=v,r[a]=null;break}if(null==n){if(null===k)return document.createTextNode(_);n=t?document.createElementNS("http://www.w3.org/2000/svg",k):document.createElement(k,_.is&&_),r=null,c=!1}if(null===k)d===_||c&&n.data===_||(n.data=_);else{if(null!=r&&(r=f.slice.call(n.childNodes)),h=(d=u.props||o).dangerouslySetInnerHTML,y=_.dangerouslySetInnerHTML,!c){if(null!=r)for(d={},p=0;p<n.attributes.length;p++)d[n.attributes[p].name]=n.attributes[p].value;(y||h)&&(y&&(h&&y.__html==h.__html||y.__html===n.innerHTML)||(n.innerHTML=y&&y.__html||""))}if(A(n,_,d,t,c),y)l.__k=[];else if(a=l.props.children,b(n,Array.isArray(a)?a:[a],l,u,i,t&&"foreignObject"!==k,r,e,n.firstChild,c),null!=r)for(a=r.length;a--;)null!=r[a]&&s(r[a]);c||("value"in _&&void 0!==(a=_.value)&&(a!==n.value||"progress"===k&&!a)&&C(n,"value",a,d.value,!1),"checked"in _&&void 0!==(a=_.checked)&&a!==n.checked&&C(n,"checked",a,d.checked,!1))}return n}function I(l,u,i){try{"function"==typeof l?l(u):l.current=u}catch(l){n.__e(l,i)}}function L(l,u,i){var t,r,o;if(n.unmount&&n.unmount(l),(t=l.ref)&&(t.current&&t.current!==l.__e||I(t,null,u)),i||"function"==typeof l.type||(i=null!=(r=l.__e)),l.__e=l.__d=void 0,null!=(t=l.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(l){n.__e(l,u)}t.base=t.__P=null}if(t=l.__k)for(o=0;o<t.length;o++)t[o]&&L(t[o],u,i);null!=r&&s(r)}function M(n,l,u){return this.constructor(n,u)}function N(l,u,i){var t,r,e;n.__&&n.__(l,u),r=(t="function"==typeof i)?null:i&&i.__k||u.__k,e=[],T(u,l=(!t&&i||u).__k=a(y,null,[l]),r||o,o,void 0!==u.ownerSVGElement,!t&&i?[i]:r?null:u.firstChild?f.slice.call(u.childNodes):null,e,!t&&i?i:r?r.__e:u.firstChild,t),j(e,l)}function O(n,l){N(n,l,O)}function S(n,l,u){var i,t,r,o=arguments,f=c({},n.props);for(r in l)"key"==r?i=l[r]:"ref"==r?t=l[r]:f[r]=l[r];if(arguments.length>3)for(u=[u],r=3;r<arguments.length;r++)u.push(o[r]);return null!=u&&(f.children=u),v(n.type,f,i||n.key,t||n.ref,null)}function q(n,l){var u={__c:l="__cC"+r++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(k)},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n={__e:function(n,l){for(var u,i,t;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return u.__E=u}catch(l){n=l}throw n},__v:0},l=function(n){return null!=n&&void 0===n.constructor},p.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof n&&(n=n(c({},u),this.props)),n&&c(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),k(this))},p.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),k(this))},p.prototype.render=y,u=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,m.__r=0,r=0;
//# sourceMappingURL=preact.module.js.map


/***/ }),

/***/ "./node_modules/preact/hooks/dist/hooks.module.js":
/*!********************************************************!*\
  !*** ./node_modules/preact/hooks/dist/hooks.module.js ***!
  \********************************************************/
/*! exports provided: useState, useReducer, useEffect, useLayoutEffect, useRef, useImperativeHandle, useMemo, useCallback, useContext, useDebugValue, useErrorBoundary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useImperativeHandle", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useContext", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDebugValue", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useErrorBoundary", function() { return q; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var t,u,r,o=0,i=[],c=preact__WEBPACK_IMPORTED_MODULE_0__["options"].__b,f=preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r,e=preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed,a=preact__WEBPACK_IMPORTED_MODULE_0__["options"].__c,v=preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount;function m(t,r){preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h&&preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h(u,t,o||r),o=0;var i=u.__H||(u.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({}),i.__[t]}function l(n){return o=1,p(w,n)}function p(n,r,o){var i=m(t++,2);return i.t=n,i.__c||(i.__=[o?o(r):w(void 0,r),function(n){var t=i.t(i.__[0],n);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}))}],i.__c=u),i.__}function y(r,o){var i=m(t++,3);!preact__WEBPACK_IMPORTED_MODULE_0__["options"].__s&&k(i.__H,o)&&(i.__=r,i.__H=o,u.__H.__h.push(i))}function h(r,o){var i=m(t++,4);!preact__WEBPACK_IMPORTED_MODULE_0__["options"].__s&&k(i.__H,o)&&(i.__=r,i.__H=o,u.__h.push(i))}function s(n){return o=5,d(function(){return{current:n}},[])}function _(n,t,u){o=6,h(function(){"function"==typeof n?n(t()):n&&(n.current=t())},null==u?u:u.concat(n))}function d(n,u){var r=m(t++,7);return k(r.__H,u)&&(r.__=n(),r.__H=u,r.__h=n),r.__}function A(n,t){return o=8,d(function(){return n},t)}function F(n){var r=u.context[n.__c],o=m(t++,9);return o.__c=n,r?(null==o.__&&(o.__=!0,r.sub(u)),r.props.value):n.__}function T(t,u){preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue&&preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue(u?u(t):t)}function q(n){var r=m(t++,10),o=l();return r.__=n,u.componentDidCatch||(u.componentDidCatch=function(n){r.__&&r.__(n),o[1](n)}),[o[0],function(){o[1](void 0)}]}function x(){i.forEach(function(t){if(t.__P)try{t.__H.__h.forEach(g),t.__H.__h.forEach(j),t.__H.__h=[]}catch(u){t.__H.__h=[],preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(u,t.__v)}}),i=[]}preact__WEBPACK_IMPORTED_MODULE_0__["options"].__b=function(n){u=null,c&&c(n)},preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r=function(n){f&&f(n),t=0;var r=(u=n.__c).__H;r&&(r.__h.forEach(g),r.__h.forEach(j),r.__h=[])},preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed=function(t){e&&e(t);var o=t.__c;o&&o.__H&&o.__H.__h.length&&(1!==i.push(o)&&r===preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame||((r=preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),b&&cancelAnimationFrame(t),setTimeout(n)},r=setTimeout(u,100);b&&(t=requestAnimationFrame(u))})(x)),u=void 0},preact__WEBPACK_IMPORTED_MODULE_0__["options"].__c=function(t,u){u.some(function(t){try{t.__h.forEach(g),t.__h=t.__h.filter(function(n){return!n.__||j(n)})}catch(r){u.some(function(n){n.__h&&(n.__h=[])}),u=[],preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(r,t.__v)}}),a&&a(t,u)},preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount=function(t){v&&v(t);var u=t.__c;if(u&&u.__H)try{u.__H.__.forEach(g)}catch(t){preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(t,u.__v)}};var b="function"==typeof requestAnimationFrame;function g(n){var t=u;"function"==typeof n.__c&&n.__c(),u=t}function j(n){var t=u;n.__c=n.__(),u=t}function k(n,t){return!n||n.length!==t.length||t.some(function(t,u){return t!==n[u]})}function w(n,t){return"function"==typeof t?t(n):t}
//# sourceMappingURL=hooks.module.js.map


/***/ }),

/***/ "./node_modules/react-dom/index.module.js":
/*!************************************************!*\
  !*** ./node_modules/react-dom/index.module.js ***!
  \************************************************/
/*! exports provided: useState, useReducer, useEffect, useLayoutEffect, useRef, useImperativeHandle, useMemo, useCallback, useContext, useDebugValue, useErrorBoundary, createElement, createContext, createRef, Fragment, Component, version, Children, render, hydrate, unmountComponentAtNode, createPortal, createFactory, cloneElement, isValidElement, findDOMNode, PureComponent, memo, forwardRef, unstable_batchedUpdates, StrictMode, Suspense, SuspenseList, lazy, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, unstable_ImmediatePriority, unstable_UserBlockingPriority, unstable_NormalPriority, unstable_LowPriority, unstable_IdlePriority, unstable_runWithPriority, unstable_now, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/compat */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["useState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["useReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["useEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["useRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useImperativeHandle", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["useMemo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["useCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useContext", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["useContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDebugValue", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["useDebugValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useErrorBoundary", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["useErrorBoundary"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["createElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["createContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["createRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["Fragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["Component"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "version", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["version"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Children", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["Children"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["hydrate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unmountComponentAtNode", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["unmountComponentAtNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPortal", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["createPortal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFactory", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["createFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["cloneElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["isValidElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findDOMNode", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["findDOMNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureComponent", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "memo", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["memo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forwardRef", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["forwardRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unstable_batchedUpdates", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["unstable_batchedUpdates"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StrictMode", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["StrictMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Suspense", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["Suspense"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SuspenseList", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["SuspenseList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lazy", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["lazy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unstable_ImmediatePriority", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["unstable_ImmediatePriority"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unstable_UserBlockingPriority", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["unstable_UserBlockingPriority"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unstable_NormalPriority", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["unstable_NormalPriority"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unstable_LowPriority", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["unstable_LowPriority"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unstable_IdlePriority", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["unstable_IdlePriority"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unstable_runWithPriority", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["unstable_runWithPriority"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unstable_now", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["unstable_now"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["default"]; });





/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/index.module.js":
/*!********************************************!*\
  !*** ./node_modules/react/index.module.js ***!
  \********************************************/
/*! exports provided: useState, useReducer, useEffect, useLayoutEffect, useRef, useImperativeHandle, useMemo, useCallback, useContext, useDebugValue, useErrorBoundary, createElement, createContext, createRef, Fragment, Component, version, Children, render, hydrate, unmountComponentAtNode, createPortal, createFactory, cloneElement, isValidElement, findDOMNode, PureComponent, memo, forwardRef, unstable_batchedUpdates, StrictMode, Suspense, SuspenseList, lazy, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, unstable_ImmediatePriority, unstable_UserBlockingPriority, unstable_NormalPriority, unstable_LowPriority, unstable_IdlePriority, unstable_runWithPriority, unstable_now, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/compat */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["useState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["useReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["useEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["useRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useImperativeHandle", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["useMemo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["useCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useContext", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["useContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDebugValue", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["useDebugValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useErrorBoundary", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["useErrorBoundary"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["createElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["createContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["createRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["Fragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["Component"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "version", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["version"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Children", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["Children"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["hydrate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unmountComponentAtNode", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["unmountComponentAtNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPortal", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["createPortal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFactory", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["createFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["cloneElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["isValidElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findDOMNode", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["findDOMNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PureComponent", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "memo", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["memo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forwardRef", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["forwardRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unstable_batchedUpdates", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["unstable_batchedUpdates"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StrictMode", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["StrictMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Suspense", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["Suspense"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SuspenseList", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["SuspenseList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lazy", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["lazy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unstable_ImmediatePriority", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["unstable_ImmediatePriority"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unstable_UserBlockingPriority", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["unstable_UserBlockingPriority"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unstable_NormalPriority", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["unstable_NormalPriority"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unstable_LowPriority", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["unstable_LowPriority"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unstable_IdlePriority", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["unstable_IdlePriority"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unstable_runWithPriority", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["unstable_runWithPriority"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unstable_now", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["unstable_now"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return preact_compat__WEBPACK_IMPORTED_MODULE_0__["default"]; });





/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/stacktrace-parser/dist/stack-trace-parser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/stacktrace-parser/dist/stack-trace-parser.esm.js ***!
  \***********************************************************************/
/*! exports provided: parse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
var UNKNOWN_FUNCTION = '<unknown>';
/**
 * This parses the different stack traces and puts them into one format
 * This borrows heavily from TraceKit (https://github.com/csnover/TraceKit)
 */

function parse(stackString) {
  var lines = stackString.split('\n');
  return lines.reduce(function (stack, line) {
    var parseResult = parseChrome(line) || parseWinjs(line) || parseGecko(line) || parseNode(line) || parseJSC(line);

    if (parseResult) {
      stack.push(parseResult);
    }

    return stack;
  }, []);
}
var chromeRe = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
var chromeEvalRe = /\((\S*)(?::(\d+))(?::(\d+))\)/;

function parseChrome(line) {
  var parts = chromeRe.exec(line);

  if (!parts) {
    return null;
  }

  var isNative = parts[2] && parts[2].indexOf('native') === 0; // start of line

  var isEval = parts[2] && parts[2].indexOf('eval') === 0; // start of line

  var submatch = chromeEvalRe.exec(parts[2]);

  if (isEval && submatch != null) {
    // throw out eval line/column and use top-most line/column number
    parts[2] = submatch[1]; // url

    parts[3] = submatch[2]; // line

    parts[4] = submatch[3]; // column
  }

  return {
    file: !isNative ? parts[2] : null,
    methodName: parts[1] || UNKNOWN_FUNCTION,
    arguments: isNative ? [parts[2]] : [],
    lineNumber: parts[3] ? +parts[3] : null,
    column: parts[4] ? +parts[4] : null
  };
}

var winjsRe = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;

function parseWinjs(line) {
  var parts = winjsRe.exec(line);

  if (!parts) {
    return null;
  }

  return {
    file: parts[2],
    methodName: parts[1] || UNKNOWN_FUNCTION,
    arguments: [],
    lineNumber: +parts[3],
    column: parts[4] ? +parts[4] : null
  };
}

var geckoRe = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i;
var geckoEvalRe = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;

function parseGecko(line) {
  var parts = geckoRe.exec(line);

  if (!parts) {
    return null;
  }

  var isEval = parts[3] && parts[3].indexOf(' > eval') > -1;
  var submatch = geckoEvalRe.exec(parts[3]);

  if (isEval && submatch != null) {
    // throw out eval line/column and use top-most line number
    parts[3] = submatch[1];
    parts[4] = submatch[2];
    parts[5] = null; // no column when eval
  }

  return {
    file: parts[3],
    methodName: parts[1] || UNKNOWN_FUNCTION,
    arguments: parts[2] ? parts[2].split(',') : [],
    lineNumber: parts[4] ? +parts[4] : null,
    column: parts[5] ? +parts[5] : null
  };
}

var javaScriptCoreRe = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;

function parseJSC(line) {
  var parts = javaScriptCoreRe.exec(line);

  if (!parts) {
    return null;
  }

  return {
    file: parts[3],
    methodName: parts[1] || UNKNOWN_FUNCTION,
    arguments: [],
    lineNumber: +parts[4],
    column: parts[5] ? +parts[5] : null
  };
}

var nodeRe = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;

function parseNode(line) {
  var parts = nodeRe.exec(line);

  if (!parts) {
    return null;
  }

  return {
    file: parts[2],
    methodName: parts[1] || UNKNOWN_FUNCTION,
    arguments: [],
    lineNumber: +parts[3],
    column: parts[4] ? +parts[4] : null
  };
}




/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/workbox-window/build/workbox-window.prod.es5.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/workbox-window/build/workbox-window.prod.es5.mjs ***!
  \***********************************************************************/
/*! exports provided: Workbox, messageSW */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Workbox", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messageSW", function() { return n; });
try{self["workbox:window:5.1.4"]&&_()}catch(n){}function n(n,t){return new Promise((function(r){var e=new MessageChannel;e.port1.onmessage=function(n){r(n.data)},n.postMessage(t,[e.port2])}))}function t(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function r(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}function e(n,t){var e;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(e=function(n,t){if(n){if("string"==typeof n)return r(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(n,t):void 0}}(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var i=0;return function(){return i>=n.length?{done:!0}:{done:!1,value:n[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(e=n[Symbol.iterator]()).next.bind(e)}try{self["workbox:core:5.1.4"]&&_()}catch(n){}var i=function(){var n=this;this.promise=new Promise((function(t,r){n.resolve=t,n.reject=r}))};function o(n,t){var r=location.href;return new URL(n,r).href===new URL(t,r).href}var u=function(n,t){this.type=n,Object.assign(this,t)};function a(n,t,r){return r?t?t(n):n:(n&&n.then||(n=Promise.resolve(n)),t?n.then(t):n)}function c(){}var f=function(r){var e,c;function f(n,t){var e,c;return void 0===t&&(t={}),(e=r.call(this)||this).t={},e.i=0,e.o=new i,e.u=new i,e.s=new i,e.v=0,e.h=new Set,e.l=function(){var n=e.m,t=n.installing;e.i>0||!o(t.scriptURL,e.g)||performance.now()>e.v+6e4?(e.p=t,n.removeEventListener("updatefound",e.l)):(e.P=t,e.h.add(t),e.o.resolve(t)),++e.i,t.addEventListener("statechange",e.S)},e.S=function(n){var t=e.m,r=n.target,i=r.state,o=r===e.p,a=o?"external":"",c={sw:r,originalEvent:n};!o&&e.j&&(c.isUpdate=!0),e.dispatchEvent(new u(a+i,c)),"installed"===i?e.A=self.setTimeout((function(){"installed"===i&&t.waiting===r&&e.dispatchEvent(new u(a+"waiting",c))}),200):"activating"===i&&(clearTimeout(e.A),o||e.u.resolve(r))},e.O=function(n){var t=e.P;t===navigator.serviceWorker.controller&&(e.dispatchEvent(new u("controlling",{sw:t,originalEvent:n,isUpdate:e.j})),e.s.resolve(t))},e.U=(c=function(n){var t=n.data,r=n.source;return a(e.getSW(),(function(){e.h.has(r)&&e.dispatchEvent(new u("message",{data:t,sw:r,originalEvent:n}))}))},function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];try{return Promise.resolve(c.apply(this,n))}catch(n){return Promise.reject(n)}}),e.g=n,e.t=t,navigator.serviceWorker.addEventListener("message",e.U),e}c=r,(e=f).prototype=Object.create(c.prototype),e.prototype.constructor=e,e.__proto__=c;var v,h,l,m=f.prototype;return m.register=function(n){var t=(void 0===n?{}:n).immediate,r=void 0!==t&&t;try{var e=this;return function(n,t){var r=n();if(r&&r.then)return r.then(t);return t(r)}((function(){if(!r&&"complete"!==document.readyState)return s(new Promise((function(n){return window.addEventListener("load",n)})))}),(function(){return e.j=Boolean(navigator.serviceWorker.controller),e.I=e.M(),a(e.R(),(function(n){e.m=n,e.I&&(e.P=e.I,e.u.resolve(e.I),e.s.resolve(e.I),e.I.addEventListener("statechange",e.S,{once:!0}));var t=e.m.waiting;return t&&o(t.scriptURL,e.g)&&(e.P=t,Promise.resolve().then((function(){e.dispatchEvent(new u("waiting",{sw:t,wasWaitingBeforeRegister:!0}))})).then((function(){}))),e.P&&(e.o.resolve(e.P),e.h.add(e.P)),e.m.addEventListener("updatefound",e.l),navigator.serviceWorker.addEventListener("controllerchange",e.O,{once:!0}),e.m}))}))}catch(n){return Promise.reject(n)}},m.update=function(){try{return this.m?s(this.m.update()):void 0}catch(n){return Promise.reject(n)}},m.getSW=function(){try{return void 0!==this.P?this.P:this.o.promise}catch(n){return Promise.reject(n)}},m.messageSW=function(t){try{return a(this.getSW(),(function(r){return n(r,t)}))}catch(n){return Promise.reject(n)}},m.M=function(){var n=navigator.serviceWorker.controller;return n&&o(n.scriptURL,this.g)?n:void 0},m.R=function(){try{var n=this;return function(n,t){try{var r=n()}catch(n){return t(n)}if(r&&r.then)return r.then(void 0,t);return r}((function(){return a(navigator.serviceWorker.register(n.g,n.t),(function(t){return n.v=performance.now(),t}))}),(function(n){throw n}))}catch(n){return Promise.reject(n)}},v=f,(h=[{key:"active",get:function(){return this.u.promise}},{key:"controlling",get:function(){return this.s.promise}}])&&t(v.prototype,h),l&&t(v,l),f}(function(){function n(){this.k=new Map}var t=n.prototype;return t.addEventListener=function(n,t){this.B(n).add(t)},t.removeEventListener=function(n,t){this.B(n).delete(t)},t.dispatchEvent=function(n){n.target=this;for(var t,r=e(this.B(n.type));!(t=r()).done;){(0,t.value)(n)}},t.B=function(n){return this.k.has(n)||this.k.set(n,new Set),this.k.get(n)},n}());function s(n,t){if(!t)return n&&n.then?n.then(c):Promise.resolve()}
//# sourceMappingURL=workbox-window.prod.es5.mjs.map


/***/ }),

/***/ 0:
/*!*********************************************************************************************!*\
  !*** multi ./node_modules/next-pwa/register.js ./node_modules/next/dist/client/next-dev.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\Steve\git\Meishicorp\www\node_modules\next-pwa\register.js */"./node_modules/next-pwa/register.js");
module.exports = __webpack_require__(/*! ./node_modules/next/dist/client/next-dev.js */"./node_modules/next/dist/client/next-dev.js");


/***/ })

},[[0,"webpack"]]]);