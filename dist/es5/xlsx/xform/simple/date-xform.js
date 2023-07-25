"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var BaseXform = require('../base-xform');
var DateXform = /*#__PURE__*/function (_BaseXform) {
  _inherits(DateXform, _BaseXform);
  var _super = _createSuper(DateXform);
  function DateXform(options) {
    var _this;
    _classCallCheck(this, DateXform);
    _this = _super.call(this);
    _this.tag = options.tag;
    _this.attr = options.attr;
    _this.attrs = options.attrs;
    _this._format = options.format || function (dt) {
      try {
        if (Number.isNaN(dt.getTime())) return '';
        return dt.toISOString();
      } catch (e) {
        return '';
      }
    };
    _this._parse = options.parse || function (str) {
      return new Date(str);
    };
    return _this;
  }
  _createClass(DateXform, [{
    key: "render",
    value: function render(xmlStream, model) {
      if (model) {
        xmlStream.openNode(this.tag);
        if (this.attrs) {
          xmlStream.addAttributes(this.attrs);
        }
        if (this.attr) {
          xmlStream.addAttribute(this.attr, this._format(model));
        } else {
          xmlStream.writeText(this._format(model));
        }
        xmlStream.closeNode();
      }
    }
  }, {
    key: "parseOpen",
    value: function parseOpen(node) {
      if (node.name === this.tag) {
        if (this.attr) {
          this.model = this._parse(node.attributes[this.attr]);
        } else {
          this.text = [];
        }
      }
    }
  }, {
    key: "parseText",
    value: function parseText(text) {
      if (!this.attr) {
        this.text.push(text);
      }
    }
  }, {
    key: "parseClose",
    value: function parseClose() {
      if (!this.attr) {
        this.model = this._parse(this.text.join(''));
      }
      return false;
    }
  }]);
  return DateXform;
}(BaseXform);
module.exports = DateXform;
//# sourceMappingURL=date-xform.js.map