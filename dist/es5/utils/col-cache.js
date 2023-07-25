"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var addressRegex = /^[A-Z]+\d+$/;
// =========================================================================
// Column Letter to Number conversion
var colCache = {
  _dictionary: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  _l2nFill: 0,
  _l2n: {},
  _n2l: [],
  _level: function _level(n) {
    if (n <= 26) {
      return 1;
    }
    if (n <= 26 * 26) {
      return 2;
    }
    return 3;
  },
  _fill: function _fill(level) {
    var c;
    var v;
    var l1;
    var l2;
    var l3;
    var n = 1;
    if (level >= 4) {
      throw new Error('Out of bounds. Excel supports columns from 1 to 16384');
    }
    if (this._l2nFill < 1 && level >= 1) {
      while (n <= 26) {
        c = this._dictionary[n - 1];
        this._n2l[n] = c;
        this._l2n[c] = n;
        n++;
      }
      this._l2nFill = 1;
    }
    if (this._l2nFill < 2 && level >= 2) {
      n = 27;
      while (n <= 26 + 26 * 26) {
        v = n - (26 + 1);
        l1 = v % 26;
        l2 = Math.floor(v / 26);
        c = this._dictionary[l2] + this._dictionary[l1];
        this._n2l[n] = c;
        this._l2n[c] = n;
        n++;
      }
      this._l2nFill = 2;
    }
    if (this._l2nFill < 3 && level >= 3) {
      n = 26 + 26 * 26 + 1;
      while (n <= 16384) {
        v = n - (26 * 26 + 26 + 1);
        l1 = v % 26;
        l2 = Math.floor(v / 26) % 26;
        l3 = Math.floor(v / (26 * 26));
        c = this._dictionary[l3] + this._dictionary[l2] + this._dictionary[l1];
        this._n2l[n] = c;
        this._l2n[c] = n;
        n++;
      }
      this._l2nFill = 3;
    }
  },
  l2n: function l2n(l) {
    if (!this._l2n[l]) {
      this._fill(l.length);
    }
    if (!this._l2n[l]) {
      throw new Error("Out of bounds. Invalid column letter: ".concat(l));
    }
    return this._l2n[l];
  },
  n2l: function n2l(n) {
    if (n < 1 || n > 16384) {
      throw new Error("".concat(n, " is out of bounds. Excel supports columns from 1 to 16384"));
    }
    if (!this._n2l[n]) {
      this._fill(this._level(n));
    }
    return this._n2l[n];
  },
  // =========================================================================
  // Address processing
  _hash: {},
  // check if value looks like an address
  validateAddress: function validateAddress(value) {
    if (!addressRegex.test(value)) {
      throw new Error("Invalid Address: ".concat(value));
    }
    return true;
  },
  // convert address string into structure
  decodeAddress: function decodeAddress(value) {
    var addr = value.length < 5 && this._hash[value];
    if (addr) {
      return addr;
    }
    var hasCol = false;
    var col = '';
    var colNumber = 0;
    var hasRow = false;
    var row = '';
    var rowNumber = 0;
    for (var i = 0, char; i < value.length; i++) {
      char = value.charCodeAt(i);
      // col should before row
      if (!hasRow && char >= 65 && char <= 90) {
        // 65 = 'A'.charCodeAt(0)
        // 90 = 'Z'.charCodeAt(0)
        hasCol = true;
        col += value[i];
        // colNumber starts from 1
        colNumber = colNumber * 26 + char - 64;
      } else if (char >= 48 && char <= 57) {
        // 48 = '0'.charCodeAt(0)
        // 57 = '9'.charCodeAt(0)
        hasRow = true;
        row += value[i];
        // rowNumber starts from 0
        rowNumber = rowNumber * 10 + char - 48;
      } else if (hasRow && hasCol && char !== 36) {
        // 36 = '$'.charCodeAt(0)
        break;
      }
    }
    if (!hasCol) {
      colNumber = undefined;
    } else if (colNumber > 16384) {
      throw new Error("Out of bounds. Invalid column letter: ".concat(col));
    }
    if (!hasRow) {
      rowNumber = undefined;
    }

    // in case $row$col
    value = col + row;
    var address = {
      address: value,
      col: colNumber,
      row: rowNumber,
      $col$row: "$".concat(col, "$").concat(row)
    };

    // mem fix - cache only the tl 100x100 square
    if (colNumber <= 100 && rowNumber <= 100) {
      this._hash[value] = address;
      this._hash[address.$col$row] = address;
    }
    return address;
  },
  // convert r,c into structure (if only 1 arg, assume r is address string)
  getAddress: function getAddress(r, c) {
    if (c) {
      var address = this.n2l(c) + r;
      return this.decodeAddress(address);
    }
    return this.decodeAddress(r);
  },
  // convert [address], [tl:br] into address structures
  decode: function decode(value) {
    var parts = value.split(':');
    if (parts.length === 2) {
      var tl = this.decodeAddress(parts[0]);
      var br = this.decodeAddress(parts[1]);
      var result = {
        top: Math.min(tl.row, br.row),
        left: Math.min(tl.col, br.col),
        bottom: Math.max(tl.row, br.row),
        right: Math.max(tl.col, br.col)
      };
      // reconstruct tl, br and dimensions
      result.tl = this.n2l(result.left) + result.top;
      result.br = this.n2l(result.right) + result.bottom;
      result.dimensions = "".concat(result.tl, ":").concat(result.br);
      return result;
    }
    return this.decodeAddress(value);
  },
  // convert [sheetName!][$]col[$]row[[$]col[$]row] into address or range structures
  decodeEx: function decodeEx(value) {
    var groups = value.match(/(?:(?:(?:'((?:[^']|'')*)')|([^'^ !]*))!)?(.*)/);
    var sheetName = groups[1] || groups[2]; // Qouted and unqouted groups
    var reference = groups[3]; // Remaining address

    var parts = reference.split(':');
    if (parts.length > 1) {
      var tl = this.decodeAddress(parts[0]);
      var br = this.decodeAddress(parts[1]);
      var top = Math.min(tl.row, br.row);
      var left = Math.min(tl.col, br.col);
      var bottom = Math.max(tl.row, br.row);
      var right = Math.max(tl.col, br.col);
      tl = this.n2l(left) + top;
      br = this.n2l(right) + bottom;
      return {
        top: top,
        left: left,
        bottom: bottom,
        right: right,
        sheetName: sheetName,
        tl: {
          address: tl,
          col: left,
          row: top,
          $col$row: "$".concat(this.n2l(left), "$").concat(top),
          sheetName: sheetName
        },
        br: {
          address: br,
          col: right,
          row: bottom,
          $col$row: "$".concat(this.n2l(right), "$").concat(bottom),
          sheetName: sheetName
        },
        dimensions: "".concat(tl, ":").concat(br)
      };
    }
    if (reference.startsWith('#')) {
      return sheetName ? {
        sheetName: sheetName,
        error: reference
      } : {
        error: reference
      };
    }
    var address = this.decodeAddress(reference);
    return sheetName ? _objectSpread({
      sheetName: sheetName
    }, address) : address;
  },
  // convert row,col into address string
  encodeAddress: function encodeAddress(row, col) {
    return colCache.n2l(col) + row;
  },
  // convert row,col into string address or t,l,b,r into range
  encode: function encode() {
    switch (arguments.length) {
      case 2:
        return colCache.encodeAddress(arguments[0], arguments[1]);
      case 4:
        return "".concat(colCache.encodeAddress(arguments[0], arguments[1]), ":").concat(colCache.encodeAddress(arguments[2], arguments[3]));
      default:
        throw new Error('Can only encode with 2 or 4 arguments');
    }
  },
  // return true if address is contained within range
  inRange: function inRange(range, address) {
    var _range = _slicedToArray(range, 5),
      left = _range[0],
      top = _range[1],
      right = _range[3],
      bottom = _range[4];
    var _address = _slicedToArray(address, 2),
      col = _address[0],
      row = _address[1];
    return col >= left && col <= right && row >= top && row <= bottom;
  }
};
module.exports = colCache;
//# sourceMappingURL=col-cache.js.map
