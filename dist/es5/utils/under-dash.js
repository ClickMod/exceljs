"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var toString = Object.prototype.toString;
var escapeHtmlRegex = /["&<>]/;
var _ = {
  each: function each(obj, cb) {
    if (obj) {
      if (Array.isArray(obj)) {
        obj.forEach(cb);
      } else {
        Object.keys(obj).forEach(function (key) {
          cb(obj[key], key);
        });
      }
    }
  },
  some: function some(obj, cb) {
    if (obj) {
      if (Array.isArray(obj)) {
        return obj.some(cb);
      }
      return Object.keys(obj).some(function (key) {
        return cb(obj[key], key);
      });
    }
    return false;
  },
  every: function every(obj, cb) {
    if (obj) {
      if (Array.isArray(obj)) {
        return obj.every(cb);
      }
      return Object.keys(obj).every(function (key) {
        return cb(obj[key], key);
      });
    }
    return true;
  },
  map: function map(obj, cb) {
    if (obj) {
      if (Array.isArray(obj)) {
        return obj.map(cb);
      }
      return Object.keys(obj).map(function (key) {
        return cb(obj[key], key);
      });
    }
    return [];
  },
  keyBy: function keyBy(a, p) {
    return a.reduce(function (o, v) {
      o[v[p]] = v;
      return o;
    }, {});
  },
  isEqual: function isEqual(a, b) {
    var aType = _typeof(a);
    var bType = _typeof(b);
    var aArray = Array.isArray(a);
    var bArray = Array.isArray(b);
    var keys;
    if (aType !== bType) {
      return false;
    }
    switch (_typeof(a)) {
      case 'object':
        if (aArray || bArray) {
          if (aArray && bArray) {
            return a.length === b.length && a.every(function (aValue, index) {
              var bValue = b[index];
              return _.isEqual(aValue, bValue);
            });
          }
          return false;
        }
        if (a === null || b === null) {
          return a === b;
        }

        // Compare object keys and values
        keys = Object.keys(a);
        if (Object.keys(b).length !== keys.length) {
          return false;
        }
        var _iterator = _createForOfIteratorHelper(keys),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var key = _step.value;
            if (!b.hasOwnProperty(key)) {
              return false;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return _.every(a, function (aValue, key) {
          var bValue = b[key];
          return _.isEqual(aValue, bValue);
        });
      default:
        return a === b;
    }
  },
  escapeHtml: function escapeHtml(html) {
    var regexResult = escapeHtmlRegex.exec(html);
    if (!regexResult) return html;
    var result = '';
    var escape = '';
    var lastIndex = 0;
    var i = regexResult.index;
    for (; i < html.length; i++) {
      switch (html.charAt(i)) {
        case '"':
          escape = '&quot;';
          break;
        case '&':
          escape = '&amp;';
          break;
        case '\'':
          escape = '&apos;';
          break;
        case '<':
          escape = '&lt;';
          break;
        case '>':
          escape = '&gt;';
          break;
        default:
          continue;
      }
      if (lastIndex !== i) result += html.substring(lastIndex, i);
      lastIndex = i + 1;
      result += escape;
    }
    if (lastIndex !== i) return result + html.substring(lastIndex, i);
    return result;
  },
  strcmp: function strcmp(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  },
  isUndefined: function isUndefined(val) {
    return toString.call(val) === '[object Undefined]';
  },
  isObject: function isObject(val) {
    return toString.call(val) === '[object Object]';
  },
  deepMerge: function deepMerge() {
    var target = arguments[0] || {};
    var length = arguments.length;
    // eslint-disable-next-line one-var
    var src, clone, copyIsArray;
    function assignValue(val, key) {
      src = target[key];
      copyIsArray = Array.isArray(val);
      if (_.isObject(val) || copyIsArray) {
        if (copyIsArray) {
          copyIsArray = false;
          clone = src && Array.isArray(src) ? src : [];
        } else {
          clone = src && _.isObject(src) ? src : {};
        }
        target[key] = _.deepMerge(clone, val);
      } else if (!_.isUndefined(val)) {
        target[key] = val;
      }
    }
    for (var i = 0; i < length; i++) {
      _.each(arguments[i], assignValue);
    }
    return target;
  }
};
module.exports = _;
//# sourceMappingURL=under-dash.js.map
