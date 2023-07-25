"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var _ = require('../utils/under-dash');
var Note = /*#__PURE__*/function () {
  function Note(note) {
    _classCallCheck(this, Note);
    this.note = note;
  }
  _createClass(Note, [{
    key: "model",
    get: function get() {
      var value = null;
      switch (_typeof(this.note)) {
        case 'string':
          value = {
            type: 'note',
            note: {
              texts: [{
                text: this.note
              }]
            }
          };
          break;
        default:
          value = {
            type: 'note',
            note: this.note
          };
          break;
      }
      // Suitable for all cell comments
      return _.deepMerge({}, Note.DEFAULT_CONFIGS, value);
    },
    set: function set(value) {
      var note = value.note;
      var texts = note.texts;
      if (texts.length === 1 && Object.keys(texts[0]).length === 1) {
        this.note = texts[0].text;
      } else {
        this.note = note;
      }
    }
  }], [{
    key: "fromModel",
    value: function fromModel(model) {
      var note = new Note();
      note.model = model;
      return note;
    }
  }]);
  return Note;
}();
Note.DEFAULT_CONFIGS = {
  note: {
    margins: {
      insetmode: 'auto',
      inset: [0.13, 0.13, 0.25, 0.25]
    },
    protection: {
      locked: 'True',
      lockText: 'True'
    },
    editAs: 'absolute'
  }
};
module.exports = Note;
//# sourceMappingURL=note.js.map
