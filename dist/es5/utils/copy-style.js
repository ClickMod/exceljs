"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var oneDepthCopy = function oneDepthCopy(obj, nestKeys) {
  return _objectSpread(_objectSpread({}, obj), nestKeys.reduce(function (memo, key) {
    if (obj[key]) memo[key] = _objectSpread({}, obj[key]);
    return memo;
  }, {}));
};
var setIfExists = function setIfExists(src, dst, key) {
  var nestKeys = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  if (src[key]) dst[key] = oneDepthCopy(src[key], nestKeys);
};
var isEmptyObj = function isEmptyObj(obj) {
  return Object.keys(obj).length === 0;
};
var copyStyle = function copyStyle(style) {
  if (!style) return style;
  if (isEmptyObj(style)) return {};
  var copied = _objectSpread({}, style);
  setIfExists(style, copied, 'font', ['color']);
  setIfExists(style, copied, 'alignment');
  setIfExists(style, copied, 'protection');
  if (style.border) {
    setIfExists(style, copied, 'border');
    setIfExists(style.border, copied.border, 'top', ['color']);
    setIfExists(style.border, copied.border, 'left', ['color']);
    setIfExists(style.border, copied.border, 'bottom', ['color']);
    setIfExists(style.border, copied.border, 'right', ['color']);
    setIfExists(style.border, copied.border, 'diagonal', ['color']);
  }
  if (style.fill) {
    setIfExists(style, copied, 'fill', ['fgColor', 'bgColor', 'center']);
    if (style.fill.stops) {
      copied.fill.stops = style.fill.stops.map(function (s) {
        return oneDepthCopy(s, ['color']);
      });
    }
  }
  return copied;
};
exports.copyStyle = copyStyle;
//# sourceMappingURL=copy-style.js.map
