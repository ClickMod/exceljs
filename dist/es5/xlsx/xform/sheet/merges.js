"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var _ = require('../../../utils/under-dash');
var Range = require('../../../doc/range');
var colCache = require('../../../utils/col-cache');
var Enums = require('../../../doc/enums');
var Merges = /*#__PURE__*/function () {
  function Merges() {
    _classCallCheck(this, Merges);
    // optional mergeCells is array of ranges (like the xml)
    this.merges = {};
  }
  _createClass(Merges, [{
    key: "add",
    value: function add(merge) {
      // merge is {address, master}
      if (this.merges[merge.master]) {
        this.merges[merge.master].expandToAddress(merge.address);
      } else {
        var range = "".concat(merge.master, ":").concat(merge.address);
        this.merges[merge.master] = new Range(range);
      }
    }
  }, {
    key: "mergeCells",
    get: function get() {
      return _.map(this.merges, function (merge) {
        return merge.range;
      });
    }
  }, {
    key: "reconcile",
    value: function reconcile(mergeCells, rows) {
      // reconcile merge list with merge cells
      _.each(mergeCells, function (merge) {
        var dimensions = colCache.decode(merge);
        for (var i = dimensions.top; i <= dimensions.bottom; i++) {
          var row = rows[i - 1];
          for (var j = dimensions.left; j <= dimensions.right; j++) {
            var cell = row.cells[j - 1];
            if (!cell) {
              // nulls are not included in document - so if master cell has no value - add a null one here
              row.cells[j] = {
                type: Enums.ValueType.Null,
                address: colCache.encodeAddress(i, j)
              };
            } else if (cell.type === Enums.ValueType.Merge) {
              cell.master = dimensions.tl;
            }
          }
        }
      });
    }
  }, {
    key: "getMasterAddress",
    value: function getMasterAddress(address) {
      // if address has been merged, return its master's address. Assumes reconcile has been called
      var range = this.hash[address];
      return range && range.tl;
    }
  }]);
  return Merges;
}();
module.exports = Merges;
//# sourceMappingURL=merges.js.map
