"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// StringBuilder - a way to keep string memory operations to a minimum
// while building the strings for the xml files
var StringBuilder = /*#__PURE__*/function () {
  function StringBuilder() {
    _classCallCheck(this, StringBuilder);
    this.reset();
  }
  _createClass(StringBuilder, [{
    key: "length",
    get: function get() {
      return this._buf.length;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this._buf.join('');
    }
  }, {
    key: "reset",
    value: function reset(position) {
      if (position) {
        while (this._buf.length > position) {
          this._buf.pop();
        }
      } else {
        this._buf = [];
      }
    }
  }, {
    key: "addText",
    value: function addText(text) {
      this._buf.push(text);
    }
  }, {
    key: "addStringBuf",
    value: function addStringBuf(inBuf) {
      this._buf.push(inBuf.toString());
    }
  }]);
  return StringBuilder;
}();
module.exports = StringBuilder;
//# sourceMappingURL=string-builder.js.map
