"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
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
function _awaitAsyncGenerator(value) { return new _OverloadYield(value, 0); }
function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }
function _AsyncGenerator(gen) { var front, back; function resume(key, arg) { try { var result = gen[key](arg), value = result.value, overloaded = value instanceof _OverloadYield; Promise.resolve(overloaded ? value.v : value).then(function (arg) { if (overloaded) { var nextKey = "return" === key ? "return" : "next"; if (!value.k || arg.done) return resume(nextKey, arg); arg = gen[nextKey](arg).value; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: !0 }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: !1 }); } (front = front.next) ? resume(front.key, front.arg) : back = null; } this._invoke = function (key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; back ? back = back.next = request : (front = back = request, resume(key, arg)); }); }, "function" != typeof gen.return && (this.return = void 0); }
_AsyncGenerator.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function () { return this; }, _AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); }, _AsyncGenerator.prototype.throw = function (arg) { return this._invoke("throw", arg); }, _AsyncGenerator.prototype.return = function (arg) { return this._invoke("return", arg); };
function _OverloadYield(value, kind) { this.v = value, this.k = kind; }
function _asyncIterator(iterable) { var method, async, sync, retry = 2; for ("undefined" != typeof Symbol && (async = Symbol.asyncIterator, sync = Symbol.iterator); retry--;) { if (async && null != (method = iterable[async])) return method.call(iterable); if (sync && null != (method = iterable[sync])) return new AsyncFromSyncIterator(method.call(iterable)); async = "@@asyncIterator", sync = "@@iterator"; } throw new TypeError("Object is not async iterable"); }
function AsyncFromSyncIterator(s) { function AsyncFromSyncIteratorContinuation(r) { if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object.")); var done = r.done; return Promise.resolve(r.value).then(function (value) { return { value: value, done: done }; }); } return AsyncFromSyncIterator = function AsyncFromSyncIterator(s) { this.s = s, this.n = s.next; }, AsyncFromSyncIterator.prototype = { s: null, n: null, next: function next() { return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments)); }, return: function _return(value) { var ret = this.s.return; return void 0 === ret ? Promise.resolve({ value: value, done: !0 }) : AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments)); }, throw: function _throw(value) { var thr = this.s.return; return void 0 === thr ? Promise.reject(value) : AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments)); } }, new AsyncFromSyncIterator(s); }
var _require = require('events'),
  EventEmitter = _require.EventEmitter;
var parseSax = require('../../utils/parse-sax');
var _ = require('../../utils/under-dash');
var utils = require('../../utils/utils');
var colCache = require('../../utils/col-cache');
var Dimensions = require('../../doc/range');
var Row = require('../../doc/row');
var Column = require('../../doc/column');
var WorksheetReader = /*#__PURE__*/function (_EventEmitter, _Symbol$asyncIterator) {
  _inherits(WorksheetReader, _EventEmitter);
  var _super = _createSuper(WorksheetReader);
  function WorksheetReader(_ref) {
    var _this3;
    var workbook = _ref.workbook,
      id = _ref.id,
      iterator = _ref.iterator,
      options = _ref.options;
    _classCallCheck(this, WorksheetReader);
    _this3 = _super.call(this);
    _this3.workbook = workbook;
    _this3.id = id;
    _this3.iterator = iterator;
    _this3.options = options || {};

    // and a name
    _this3.name = "Sheet".concat(_this3.id);

    // column definitions
    _this3._columns = null;
    _this3._keys = {};

    // keep a record of dimensions
    _this3._dimensions = new Dimensions();
    return _this3;
  }

  // destroy - not a valid operation for a streaming writer
  // even though some streamers might be able to, it's a bad idea.
  _createClass(WorksheetReader, [{
    key: "destroy",
    value: function destroy() {
      throw new Error('Invalid Operation: destroy');
    }

    // return the current dimensions of the writer
  }, {
    key: "dimensions",
    get: function get() {
      return this._dimensions;
    }

    // =========================================================================
    // Columns

    // get the current columns array.
  }, {
    key: "columns",
    get: function get() {
      return this._columns;
    }

    // get a single column by col number. If it doesn't exist, it and any gaps before it
    // are created.
  }, {
    key: "getColumn",
    value: function getColumn(c) {
      if (typeof c === 'string') {
        // if it matches a key'd column, return that
        var col = this._keys[c];
        if (col) {
          return col;
        }

        // otherise, assume letter
        c = colCache.l2n(c);
      }
      if (!this._columns) {
        this._columns = [];
      }
      if (c > this._columns.length) {
        var n = this._columns.length + 1;
        while (n <= c) {
          this._columns.push(new Column(this, n++));
        }
      }
      return this._columns[c - 1];
    }
  }, {
    key: "getColumnKey",
    value: function getColumnKey(key) {
      return this._keys[key];
    }
  }, {
    key: "setColumnKey",
    value: function setColumnKey(key, value) {
      this._keys[key] = value;
    }
  }, {
    key: "deleteColumnKey",
    value: function deleteColumnKey(key) {
      delete this._keys[key];
    }
  }, {
    key: "eachColumnKey",
    value: function eachColumnKey(f) {
      _.each(this._keys, f);
    }
  }, {
    key: "read",
    value: function () {
      var _read = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, events, _iterator4, _step4, _step4$value, eventType, value;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _iteratorAbruptCompletion = false;
              _didIteratorError = false;
              _context.prev = 3;
              _iterator = _asyncIterator(this.parse());
            case 5:
              _context.next = 7;
              return _iterator.next();
            case 7:
              if (!(_iteratorAbruptCompletion = !(_step = _context.sent).done)) {
                _context.next = 14;
                break;
              }
              events = _step.value;
              _iterator4 = _createForOfIteratorHelper(events);
              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  _step4$value = _step4.value, eventType = _step4$value.eventType, value = _step4$value.value;
                  this.emit(eventType, value);
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
            case 11:
              _iteratorAbruptCompletion = false;
              _context.next = 5;
              break;
            case 14:
              _context.next = 20;
              break;
            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](3);
              _didIteratorError = true;
              _iteratorError = _context.t0;
            case 20:
              _context.prev = 20;
              _context.prev = 21;
              if (!(_iteratorAbruptCompletion && _iterator.return != null)) {
                _context.next = 25;
                break;
              }
              _context.next = 25;
              return _iterator.return();
            case 25:
              _context.prev = 25;
              if (!_didIteratorError) {
                _context.next = 28;
                break;
              }
              throw _iteratorError;
            case 28:
              return _context.finish(25);
            case 29:
              return _context.finish(20);
            case 30:
              this.emit('finished');
              _context.next = 36;
              break;
            case 33:
              _context.prev = 33;
              _context.t1 = _context["catch"](0);
              this.emit('error', _context.t1);
            case 36:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[0, 33], [3, 16, 20, 30], [21,, 25, 29]]);
      }));
      function read() {
        return _read.apply(this, arguments);
      }
      return read;
    }()
  }, {
    key: _Symbol$asyncIterator,
    value: function value() {
      var _this = this;
      return _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _iteratorAbruptCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, events, _iterator5, _step5, _step5$value, eventType, value;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _iteratorAbruptCompletion2 = false;
              _didIteratorError2 = false;
              _context2.prev = 2;
              _iterator2 = _asyncIterator(_this.parse());
            case 4:
              _context2.next = 6;
              return _awaitAsyncGenerator(_iterator2.next());
            case 6:
              if (!(_iteratorAbruptCompletion2 = !(_step2 = _context2.sent).done)) {
                _context2.next = 29;
                break;
              }
              events = _step2.value;
              _iterator5 = _createForOfIteratorHelper(events);
              _context2.prev = 9;
              _iterator5.s();
            case 11:
              if ((_step5 = _iterator5.n()).done) {
                _context2.next = 18;
                break;
              }
              _step5$value = _step5.value, eventType = _step5$value.eventType, value = _step5$value.value;
              if (!(eventType === 'row')) {
                _context2.next = 16;
                break;
              }
              _context2.next = 16;
              return value;
            case 16:
              _context2.next = 11;
              break;
            case 18:
              _context2.next = 23;
              break;
            case 20:
              _context2.prev = 20;
              _context2.t0 = _context2["catch"](9);
              _iterator5.e(_context2.t0);
            case 23:
              _context2.prev = 23;
              _iterator5.f();
              return _context2.finish(23);
            case 26:
              _iteratorAbruptCompletion2 = false;
              _context2.next = 4;
              break;
            case 29:
              _context2.next = 35;
              break;
            case 31:
              _context2.prev = 31;
              _context2.t1 = _context2["catch"](2);
              _didIteratorError2 = true;
              _iteratorError2 = _context2.t1;
            case 35:
              _context2.prev = 35;
              _context2.prev = 36;
              if (!(_iteratorAbruptCompletion2 && _iterator2.return != null)) {
                _context2.next = 40;
                break;
              }
              _context2.next = 40;
              return _awaitAsyncGenerator(_iterator2.return());
            case 40:
              _context2.prev = 40;
              if (!_didIteratorError2) {
                _context2.next = 43;
                break;
              }
              throw _iteratorError2;
            case 43:
              return _context2.finish(40);
            case 44:
              return _context2.finish(35);
            case 45:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[2, 31, 35, 45], [9, 20, 23, 26], [36,, 40, 44]]);
      }))();
    }
  }, {
    key: "parse",
    value: function parse() {
      var _this2 = this;
      return _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var iterator, options, emitSheet, emitHyperlinks, hyperlinks, _this2$workbook, sharedStrings, styles, properties, inCols, inRows, inHyperlinks, cols, row, c, current, _iteratorAbruptCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, events, worksheetEvents, _iterator6, _step6, _step6$value, eventType, value, node, r, styleId, style, hyperlink, _node, address, cell, _style, cellValue, index, _hyperlink;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              iterator = _this2.iterator, options = _this2.options;
              emitSheet = false;
              emitHyperlinks = false;
              hyperlinks = null;
              _context3.t0 = options.worksheets;
              _context3.next = _context3.t0 === 'emit' ? 7 : _context3.t0 === 'prep' ? 9 : 10;
              break;
            case 7:
              emitSheet = true;
              return _context3.abrupt("break", 11);
            case 9:
              return _context3.abrupt("break", 11);
            case 10:
              return _context3.abrupt("break", 11);
            case 11:
              _context3.t1 = options.hyperlinks;
              _context3.next = _context3.t1 === 'emit' ? 14 : _context3.t1 === 'cache' ? 16 : 18;
              break;
            case 14:
              emitHyperlinks = true;
              return _context3.abrupt("break", 19);
            case 16:
              _this2.hyperlinks = hyperlinks = {};
              return _context3.abrupt("break", 19);
            case 18:
              return _context3.abrupt("break", 19);
            case 19:
              if (!(!emitSheet && !emitHyperlinks && !hyperlinks)) {
                _context3.next = 21;
                break;
              }
              return _context3.abrupt("return");
            case 21:
              // references
              _this2$workbook = _this2.workbook, sharedStrings = _this2$workbook.sharedStrings, styles = _this2$workbook.styles, properties = _this2$workbook.properties; // xml position
              inCols = false;
              inRows = false;
              inHyperlinks = false; // parse state
              cols = null;
              row = null;
              c = null;
              current = null;
              _iteratorAbruptCompletion3 = false;
              _didIteratorError3 = false;
              _context3.prev = 31;
              _iterator3 = _asyncIterator(parseSax(iterator));
            case 33:
              _context3.next = 35;
              return _awaitAsyncGenerator(_iterator3.next());
            case 35:
              if (!(_iteratorAbruptCompletion3 = !(_step3 = _context3.sent).done)) {
                _context3.next = 150;
                break;
              }
              events = _step3.value;
              worksheetEvents = [];
              _iterator6 = _createForOfIteratorHelper(events);
              _context3.prev = 39;
              _iterator6.s();
            case 41:
              if ((_step6 = _iterator6.n()).done) {
                _context3.next = 136;
                break;
              }
              _step6$value = _step6.value, eventType = _step6$value.eventType, value = _step6$value.value;
              if (!(eventType === 'opentag')) {
                _context3.next = 79;
                break;
              }
              node = value;
              if (!emitSheet) {
                _context3.next = 68;
                break;
              }
              _context3.t2 = node.name;
              _context3.next = _context3.t2 === 'cols' ? 49 : _context3.t2 === 'sheetData' ? 52 : _context3.t2 === 'col' ? 54 : _context3.t2 === 'row' ? 56 : _context3.t2 === 'c' ? 58 : _context3.t2 === 'f' ? 60 : _context3.t2 === 'v' ? 62 : _context3.t2 === 'is' ? 64 : _context3.t2 === 't' ? 64 : _context3.t2 === 'mergeCell' ? 66 : 67;
              break;
            case 49:
              inCols = true;
              cols = [];
              return _context3.abrupt("break", 68);
            case 52:
              inRows = true;
              return _context3.abrupt("break", 68);
            case 54:
              if (inCols) {
                cols.push({
                  min: parseInt(node.attributes.min, 10),
                  max: parseInt(node.attributes.max, 10),
                  width: parseFloat(node.attributes.width),
                  styleId: parseInt(node.attributes.style || '0', 10)
                });
              }
              return _context3.abrupt("break", 68);
            case 56:
              if (inRows) {
                r = parseInt(node.attributes.r, 10);
                row = new Row(_this2, r);
                if (node.attributes.ht) {
                  row.height = parseFloat(node.attributes.ht);
                }
                if (node.attributes.s) {
                  styleId = parseInt(node.attributes.s, 10);
                  style = styles.getStyleModel(styleId);
                  if (style) {
                    row.style = style;
                  }
                }
              }
              return _context3.abrupt("break", 68);
            case 58:
              if (row) {
                c = {
                  ref: node.attributes.r,
                  s: parseInt(node.attributes.s, 10),
                  t: node.attributes.t
                };
              }
              return _context3.abrupt("break", 68);
            case 60:
              if (c) {
                current = c.f = {
                  text: ''
                };
              }
              return _context3.abrupt("break", 68);
            case 62:
              if (c) {
                current = c.v = {
                  text: ''
                };
              }
              return _context3.abrupt("break", 68);
            case 64:
              if (c) {
                current = c.v = {
                  text: ''
                };
              }
              return _context3.abrupt("break", 68);
            case 66:
              return _context3.abrupt("break", 68);
            case 67:
              return _context3.abrupt("break", 68);
            case 68:
              if (!(emitHyperlinks || hyperlinks)) {
                _context3.next = 77;
                break;
              }
              _context3.t3 = node.name;
              _context3.next = _context3.t3 === 'hyperlinks' ? 72 : _context3.t3 === 'hyperlink' ? 74 : 76;
              break;
            case 72:
              inHyperlinks = true;
              return _context3.abrupt("break", 77);
            case 74:
              if (inHyperlinks) {
                hyperlink = {
                  ref: node.attributes.ref,
                  rId: node.attributes['r:id']
                };
                if (emitHyperlinks) {
                  worksheetEvents.push({
                    eventType: 'hyperlink',
                    value: hyperlink
                  });
                } else {
                  hyperlinks[hyperlink.ref] = hyperlink;
                }
              }
              return _context3.abrupt("break", 77);
            case 76:
              return _context3.abrupt("break", 77);
            case 77:
              _context3.next = 134;
              break;
            case 79:
              if (!(eventType === 'text')) {
                _context3.next = 83;
                break;
              }
              // only text data is for sheet values
              if (emitSheet) {
                if (current) {
                  current.text += value;
                }
              }
              _context3.next = 134;
              break;
            case 83:
              if (!(eventType === 'closetag')) {
                _context3.next = 134;
                break;
              }
              _node = value;
              if (!emitSheet) {
                _context3.next = 127;
                break;
              }
              _context3.t4 = _node.name;
              _context3.next = _context3.t4 === 'cols' ? 89 : _context3.t4 === 'sheetData' ? 92 : _context3.t4 === 'row' ? 94 : _context3.t4 === 'c' ? 98 : 126;
              break;
            case 89:
              inCols = false;
              _this2._columns = Column.fromModel(cols);
              return _context3.abrupt("break", 127);
            case 92:
              inRows = false;
              return _context3.abrupt("break", 127);
            case 94:
              _this2._dimensions.expandRow(row);
              worksheetEvents.push({
                eventType: 'row',
                value: row
              });
              row = null;
              return _context3.abrupt("break", 127);
            case 98:
              if (!(row && c)) {
                _context3.next = 125;
                break;
              }
              address = colCache.decodeAddress(c.ref);
              cell = row.getCell(address.col);
              if (c.s) {
                _style = styles.getStyleModel(c.s);
                if (_style) {
                  cell.style = _style;
                }
              }
              if (!c.f) {
                _context3.next = 108;
                break;
              }
              cellValue = {
                formula: c.f.text
              };
              if (c.v) {
                if (c.t === 'str') {
                  cellValue.result = utils.xmlDecode(c.v.text);
                } else {
                  cellValue.result = parseFloat(c.v.text);
                }
              }
              cell.value = cellValue;
              _context3.next = 123;
              break;
            case 108:
              if (!c.v) {
                _context3.next = 123;
                break;
              }
              _context3.t5 = c.t;
              _context3.next = _context3.t5 === 's' ? 112 : _context3.t5 === 'inlineStr' ? 115 : _context3.t5 === 'str' ? 115 : _context3.t5 === 'e' ? 117 : _context3.t5 === 'b' ? 119 : 121;
              break;
            case 112:
              index = parseInt(c.v.text, 10);
              if (sharedStrings) {
                cell.value = sharedStrings[index];
              } else {
                cell.value = {
                  sharedString: index
                };
              }
              return _context3.abrupt("break", 123);
            case 115:
              cell.value = utils.xmlDecode(c.v.text);
              return _context3.abrupt("break", 123);
            case 117:
              cell.value = {
                error: c.v.text
              };
              return _context3.abrupt("break", 123);
            case 119:
              cell.value = parseInt(c.v.text, 10) !== 0;
              return _context3.abrupt("break", 123);
            case 121:
              if (utils.isDateFmt(cell.numFmt)) {
                cell.value = utils.excelToDate(parseFloat(c.v.text), properties.model && properties.model.date1904);
              } else {
                cell.value = parseFloat(c.v.text);
              }
              return _context3.abrupt("break", 123);
            case 123:
              if (hyperlinks) {
                _hyperlink = hyperlinks[c.ref];
                if (_hyperlink) {
                  cell.text = cell.value;
                  cell.value = undefined;
                  cell.hyperlink = _hyperlink;
                }
              }
              c = null;
            case 125:
              return _context3.abrupt("break", 127);
            case 126:
              return _context3.abrupt("break", 127);
            case 127:
              if (!(emitHyperlinks || hyperlinks)) {
                _context3.next = 134;
                break;
              }
              _context3.t6 = _node.name;
              _context3.next = _context3.t6 === 'hyperlinks' ? 131 : 133;
              break;
            case 131:
              inHyperlinks = false;
              return _context3.abrupt("break", 134);
            case 133:
              return _context3.abrupt("break", 134);
            case 134:
              _context3.next = 41;
              break;
            case 136:
              _context3.next = 141;
              break;
            case 138:
              _context3.prev = 138;
              _context3.t7 = _context3["catch"](39);
              _iterator6.e(_context3.t7);
            case 141:
              _context3.prev = 141;
              _iterator6.f();
              return _context3.finish(141);
            case 144:
              if (!(worksheetEvents.length > 0)) {
                _context3.next = 147;
                break;
              }
              _context3.next = 147;
              return worksheetEvents;
            case 147:
              _iteratorAbruptCompletion3 = false;
              _context3.next = 33;
              break;
            case 150:
              _context3.next = 156;
              break;
            case 152:
              _context3.prev = 152;
              _context3.t8 = _context3["catch"](31);
              _didIteratorError3 = true;
              _iteratorError3 = _context3.t8;
            case 156:
              _context3.prev = 156;
              _context3.prev = 157;
              if (!(_iteratorAbruptCompletion3 && _iterator3.return != null)) {
                _context3.next = 161;
                break;
              }
              _context3.next = 161;
              return _awaitAsyncGenerator(_iterator3.return());
            case 161:
              _context3.prev = 161;
              if (!_didIteratorError3) {
                _context3.next = 164;
                break;
              }
              throw _iteratorError3;
            case 164:
              return _context3.finish(161);
            case 165:
              return _context3.finish(156);
            case 166:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[31, 152, 156, 166], [39, 138, 141, 144], [157,, 161, 165]]);
      }))();
    }
  }]);
  return WorksheetReader;
}(EventEmitter, Symbol.asyncIterator);
module.exports = WorksheetReader;
//# sourceMappingURL=worksheet-reader.js.map
