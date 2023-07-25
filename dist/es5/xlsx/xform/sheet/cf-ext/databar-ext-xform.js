"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
var BaseXform = require('../../base-xform');
var CompositeXform = require('../../composite-xform');
var ColorXform = require('../../style/color-xform');
var CfvoExtXform = require('./cfvo-ext-xform');
var DatabarExtXform = /*#__PURE__*/function (_CompositeXform) {
  _inherits(DatabarExtXform, _CompositeXform);
  var _super = _createSuper(DatabarExtXform);
  function DatabarExtXform() {
    var _this;
    _classCallCheck(this, DatabarExtXform);
    _this = _super.call(this);
    _this.map = {
      'x14:cfvo': _this.cfvoXform = new CfvoExtXform(),
      'x14:borderColor': _this.borderColorXform = new ColorXform('x14:borderColor'),
      'x14:negativeBorderColor': _this.negativeBorderColorXform = new ColorXform('x14:negativeBorderColor'),
      'x14:negativeFillColor': _this.negativeFillColorXform = new ColorXform('x14:negativeFillColor'),
      'x14:axisColor': _this.axisColorXform = new ColorXform('x14:axisColor')
    };
    return _this;
  }
  _createClass(DatabarExtXform, [{
    key: "tag",
    get: function get() {
      return 'x14:dataBar';
    }
  }, {
    key: "render",
    value: function render(xmlStream, model) {
      var _this2 = this;
      xmlStream.openNode(this.tag, {
        minLength: BaseXform.toIntAttribute(model.minLength, 0, true),
        maxLength: BaseXform.toIntAttribute(model.maxLength, 100, true),
        border: BaseXform.toBoolAttribute(model.border, false),
        gradient: BaseXform.toBoolAttribute(model.gradient, true),
        negativeBarColorSameAsPositive: BaseXform.toBoolAttribute(model.negativeBarColorSameAsPositive, true),
        negativeBarBorderColorSameAsPositive: BaseXform.toBoolAttribute(model.negativeBarBorderColorSameAsPositive, true),
        axisPosition: BaseXform.toAttribute(model.axisPosition, 'auto'),
        direction: BaseXform.toAttribute(model.direction, 'leftToRight')
      });
      model.cfvo.forEach(function (cfvo) {
        _this2.cfvoXform.render(xmlStream, cfvo);
      });
      this.borderColorXform.render(xmlStream, model.borderColor);
      this.negativeBorderColorXform.render(xmlStream, model.negativeBorderColor);
      this.negativeFillColorXform.render(xmlStream, model.negativeFillColor);
      this.axisColorXform.render(xmlStream, model.axisColor);
      xmlStream.closeNode();
    }
  }, {
    key: "createNewModel",
    value: function createNewModel(_ref) {
      var attributes = _ref.attributes;
      return {
        cfvo: [],
        minLength: BaseXform.toIntValue(attributes.minLength, 0),
        maxLength: BaseXform.toIntValue(attributes.maxLength, 100),
        border: BaseXform.toBoolValue(attributes.border, false),
        gradient: BaseXform.toBoolValue(attributes.gradient, true),
        negativeBarColorSameAsPositive: BaseXform.toBoolValue(attributes.negativeBarColorSameAsPositive, true),
        negativeBarBorderColorSameAsPositive: BaseXform.toBoolValue(attributes.negativeBarBorderColorSameAsPositive, true),
        axisPosition: BaseXform.toStringValue(attributes.axisPosition, 'auto'),
        direction: BaseXform.toStringValue(attributes.direction, 'leftToRight')
      };
    }
  }, {
    key: "onParserClose",
    value: function onParserClose(name, parser) {
      var _name$split = name.split(':'),
        _name$split2 = _slicedToArray(_name$split, 2),
        prop = _name$split2[1];
      switch (prop) {
        case 'cfvo':
          this.model.cfvo.push(parser.model);
          break;
        default:
          this.model[prop] = parser.model;
          break;
      }
    }
  }], [{
    key: "isExt",
    value: function isExt(rule) {
      // not all databars need ext
      // TODO: refine this
      return !rule.gradient;
    }
  }]);
  return DatabarExtXform;
}(CompositeXform);
module.exports = DatabarExtXform;
//# sourceMappingURL=databar-ext-xform.js.map
