"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
function _asyncGeneratorDelegate(inner) { var iter = {}, waiting = !1; function pump(key, value) { return waiting = !0, value = new Promise(function (resolve) { resolve(inner[key](value)); }), { done: !1, value: new _OverloadYield(value, 1) }; } return iter["undefined" != typeof Symbol && Symbol.iterator || "@@iterator"] = function () { return this; }, iter.next = function (value) { return waiting ? (waiting = !1, value) : pump("next", value); }, "function" == typeof inner.throw && (iter.throw = function (value) { if (waiting) throw waiting = !1, value; return pump("throw", value); }), "function" == typeof inner.return && (iter.return = function (value) { return waiting ? (waiting = !1, value) : pump("return", value); }), iter; }
function _awaitAsyncGenerator(value) { return new _OverloadYield(value, 0); }
function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }
function _AsyncGenerator(gen) { var front, back; function resume(key, arg) { try { var result = gen[key](arg), value = result.value, overloaded = value instanceof _OverloadYield; Promise.resolve(overloaded ? value.v : value).then(function (arg) { if (overloaded) { var nextKey = "return" === key ? "return" : "next"; if (!value.k || arg.done) return resume(nextKey, arg); arg = gen[nextKey](arg).value; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: !0 }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: !1 }); } (front = front.next) ? resume(front.key, front.arg) : back = null; } this._invoke = function (key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; back ? back = back.next = request : (front = back = request, resume(key, arg)); }); }, "function" != typeof gen.return && (this.return = void 0); }
_AsyncGenerator.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function () { return this; }, _AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); }, _AsyncGenerator.prototype.throw = function (arg) { return this._invoke("throw", arg); }, _AsyncGenerator.prototype.return = function (arg) { return this._invoke("return", arg); };
function _OverloadYield(value, kind) { this.v = value, this.k = kind; }
function _asyncIterator(iterable) { var method, async, sync, retry = 2; for ("undefined" != typeof Symbol && (async = Symbol.asyncIterator, sync = Symbol.iterator); retry--;) { if (async && null != (method = iterable[async])) return method.call(iterable); if (sync && null != (method = iterable[sync])) return new AsyncFromSyncIterator(method.call(iterable)); async = "@@asyncIterator", sync = "@@iterator"; } throw new TypeError("Object is not async iterable"); }
function AsyncFromSyncIterator(s) { function AsyncFromSyncIteratorContinuation(r) { if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object.")); var done = r.done; return Promise.resolve(r.value).then(function (value) { return { value: value, done: done }; }); } return AsyncFromSyncIterator = function AsyncFromSyncIterator(s) { this.s = s, this.n = s.next; }, AsyncFromSyncIterator.prototype = { s: null, n: null, next: function next() { return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments)); }, return: function _return(value) { var ret = this.s.return; return void 0 === ret ? Promise.resolve({ value: value, done: !0 }) : AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments)); }, throw: function _throw(value) { var thr = this.s.return; return void 0 === thr ? Promise.reject(value) : AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments)); } }, new AsyncFromSyncIterator(s); }
var fs = require('fs');
var _require = require('events'),
  EventEmitter = _require.EventEmitter;
var _require2 = require('readable-stream'),
  PassThrough = _require2.PassThrough,
  Readable = _require2.Readable;
var nodeStream = require('stream');
var unzip = require('unzipper');
var tmp = require('tmp');
var iterateStream = require('../../utils/iterate-stream');
var parseSax = require('../../utils/parse-sax');
var StyleManager = require('../../xlsx/xform/style/styles-xform');
var WorkbookXform = require('../../xlsx/xform/book/workbook-xform');
var RelationshipsXform = require('../../xlsx/xform/core/relationships-xform');
var WorksheetReader = require('./worksheet-reader');
var HyperlinkReader = require('./hyperlink-reader');
tmp.setGracefulCleanup();
var WorkbookReader = /*#__PURE__*/function (_EventEmitter, _Symbol$asyncIterator) {
  _inherits(WorkbookReader, _EventEmitter);
  var _super = _createSuper(WorkbookReader);
  function WorkbookReader(input) {
    var _this4;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, WorkbookReader);
    _this4 = _super.call(this);
    _this4.input = input;
    _this4.options = _objectSpread({
      worksheets: 'emit',
      sharedStrings: 'cache',
      hyperlinks: 'ignore',
      styles: 'ignore',
      entries: 'ignore'
    }, options);
    _this4.styles = new StyleManager();
    _this4.styles.init();
    return _this4;
  }
  _createClass(WorkbookReader, [{
    key: "_getStream",
    value: function _getStream(input) {
      if (input instanceof nodeStream.Readable || input instanceof Readable) {
        return input;
      }
      if (typeof input === 'string') {
        return fs.createReadStream(input);
      }
      throw new Error("Could not recognise input: ".concat(input));
    }
  }, {
    key: "read",
    value: function () {
      var _read = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(input, options) {
        var _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, _step$value, eventType, value;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _iteratorAbruptCompletion = false;
              _didIteratorError = false;
              _context.prev = 3;
              _iterator = _asyncIterator(this.parse(input, options));
            case 5:
              _context.next = 7;
              return _iterator.next();
            case 7:
              if (!(_iteratorAbruptCompletion = !(_step = _context.sent).done)) {
                _context.next = 23;
                break;
              }
              _step$value = _step.value, eventType = _step$value.eventType, value = _step$value.value;
              _context.t0 = eventType;
              _context.next = _context.t0 === 'shared-strings' ? 12 : _context.t0 === 'worksheet' ? 14 : _context.t0 === 'hyperlinks' ? 18 : 20;
              break;
            case 12:
              this.emit(eventType, value);
              return _context.abrupt("break", 20);
            case 14:
              this.emit(eventType, value);
              _context.next = 17;
              return value.read();
            case 17:
              return _context.abrupt("break", 20);
            case 18:
              this.emit(eventType, value);
              return _context.abrupt("break", 20);
            case 20:
              _iteratorAbruptCompletion = false;
              _context.next = 5;
              break;
            case 23:
              _context.next = 29;
              break;
            case 25:
              _context.prev = 25;
              _context.t1 = _context["catch"](3);
              _didIteratorError = true;
              _iteratorError = _context.t1;
            case 29:
              _context.prev = 29;
              _context.prev = 30;
              if (!(_iteratorAbruptCompletion && _iterator.return != null)) {
                _context.next = 34;
                break;
              }
              _context.next = 34;
              return _iterator.return();
            case 34:
              _context.prev = 34;
              if (!_didIteratorError) {
                _context.next = 37;
                break;
              }
              throw _iteratorError;
            case 37:
              return _context.finish(34);
            case 38:
              return _context.finish(29);
            case 39:
              this.emit('end');
              this.emit('finished');
              _context.next = 46;
              break;
            case 43:
              _context.prev = 43;
              _context.t2 = _context["catch"](0);
              this.emit('error', _context.t2);
            case 46:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[0, 43], [3, 25, 29, 39], [30,, 34, 38]]);
      }));
      function read(_x, _x2) {
        return _read.apply(this, arguments);
      }
      return read;
    }()
  }, {
    key: _Symbol$asyncIterator,
    value: function value() {
      var _this = this;
      return _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _iteratorAbruptCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _step2$value, eventType, value;
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
                _context2.next = 14;
                break;
              }
              _step2$value = _step2.value, eventType = _step2$value.eventType, value = _step2$value.value;
              if (!(eventType === 'worksheet')) {
                _context2.next = 11;
                break;
              }
              _context2.next = 11;
              return value;
            case 11:
              _iteratorAbruptCompletion2 = false;
              _context2.next = 4;
              break;
            case 14:
              _context2.next = 20;
              break;
            case 16:
              _context2.prev = 16;
              _context2.t0 = _context2["catch"](2);
              _didIteratorError2 = true;
              _iteratorError2 = _context2.t0;
            case 20:
              _context2.prev = 20;
              _context2.prev = 21;
              if (!(_iteratorAbruptCompletion2 && _iterator2.return != null)) {
                _context2.next = 25;
                break;
              }
              _context2.next = 25;
              return _awaitAsyncGenerator(_iterator2.return());
            case 25:
              _context2.prev = 25;
              if (!_didIteratorError2) {
                _context2.next = 28;
                break;
              }
              throw _iteratorError2;
            case 28:
              return _context2.finish(25);
            case 29:
              return _context2.finish(20);
            case 30:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[2, 16, 20, 30], [21,, 25, 29]]);
      }))();
    }
  }, {
    key: "parse",
    value: function parse(input, options) {
      var _this2 = this;
      return _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var stream, zip, waitingWorkSheets, _iteratorAbruptCompletion3, _didIteratorError3, _iteratorError3, _loop, _iterator3, _step3, _i, _waitingWorkSheets, _waitingWorkSheets$_i, sheetNo, path, tempFileCleanupCallback, fileStream;
        return _regeneratorRuntime().wrap(function _callee3$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (options) _this2.options = options;
              stream = _this2.stream = _this2._getStream(input || _this2.input);
              zip = unzip.Parse({
                forceStream: true
              });
              stream.pipe(zip);

              // worksheets, deferred for parsing after shared strings reading
              waitingWorkSheets = [];
              _iteratorAbruptCompletion3 = false;
              _didIteratorError3 = false;
              _context4.prev = 7;
              _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                var entry, match, sheetNo;
                return _regeneratorRuntime().wrap(function _loop$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                    case 0:
                      entry = _step3.value;
                      _context3.t0 = entry.path;
                      _context3.next = _context3.t0 === '_rels/.rels' ? 4 : _context3.t0 === 'xl/_rels/workbook.xml.rels' ? 5 : _context3.t0 === 'xl/workbook.xml' ? 8 : _context3.t0 === 'xl/sharedStrings.xml' ? 11 : _context3.t0 === 'xl/styles.xml' ? 13 : 16;
                      break;
                    case 4:
                      return _context3.abrupt("break", 32);
                    case 5:
                      _context3.next = 7;
                      return _awaitAsyncGenerator(_this2._parseRels(entry));
                    case 7:
                      return _context3.abrupt("break", 32);
                    case 8:
                      _context3.next = 10;
                      return _awaitAsyncGenerator(_this2._parseWorkbook(entry));
                    case 10:
                      return _context3.abrupt("break", 32);
                    case 11:
                      return _context3.delegateYield(_asyncGeneratorDelegate(_asyncIterator(_this2._parseSharedStrings(entry)), _awaitAsyncGenerator), "t1", 12);
                    case 12:
                      return _context3.abrupt("break", 32);
                    case 13:
                      _context3.next = 15;
                      return _awaitAsyncGenerator(_this2._parseStyles(entry));
                    case 15:
                      return _context3.abrupt("break", 32);
                    case 16:
                      if (!entry.path.match(/xl\/worksheets\/sheet\d+[.]xml/)) {
                        _context3.next = 27;
                        break;
                      }
                      match = entry.path.match(/xl\/worksheets\/sheet(\d+)[.]xml/);
                      sheetNo = match[1];
                      if (!(_this2.sharedStrings && _this2.workbookRels)) {
                        _context3.next = 23;
                        break;
                      }
                      return _context3.delegateYield(_asyncGeneratorDelegate(_asyncIterator(_this2._parseWorksheet(iterateStream(entry), sheetNo)), _awaitAsyncGenerator), "t2", 21);
                    case 21:
                      _context3.next = 25;
                      break;
                    case 23:
                      _context3.next = 25;
                      return _awaitAsyncGenerator(new Promise(function (resolve, reject) {
                        tmp.file(function (err, path, fd, tempFileCleanupCallback) {
                          if (err) {
                            return reject(err);
                          }
                          waitingWorkSheets.push({
                            sheetNo: sheetNo,
                            path: path,
                            tempFileCleanupCallback: tempFileCleanupCallback
                          });
                          var tempStream = fs.createWriteStream(path);
                          tempStream.on('error', reject);
                          entry.pipe(tempStream);
                          return tempStream.on('finish', function () {
                            return resolve();
                          });
                        });
                      }));
                    case 25:
                      _context3.next = 31;
                      break;
                    case 27:
                      if (!entry.path.match(/xl\/worksheets\/_rels\/sheet\d+[.]xml.rels/)) {
                        _context3.next = 31;
                        break;
                      }
                      match = entry.path.match(/xl\/worksheets\/_rels\/sheet(\d+)[.]xml.rels/);
                      sheetNo = match[1];
                      return _context3.delegateYield(_asyncGeneratorDelegate(_asyncIterator(_this2._parseHyperlinks(iterateStream(entry), sheetNo)), _awaitAsyncGenerator), "t3", 31);
                    case 31:
                      return _context3.abrupt("break", 32);
                    case 32:
                      entry.autodrain();
                    case 33:
                    case "end":
                      return _context3.stop();
                  }
                }, _loop);
              });
              _iterator3 = _asyncIterator(iterateStream(zip));
            case 10:
              _context4.next = 12;
              return _awaitAsyncGenerator(_iterator3.next());
            case 12:
              if (!(_iteratorAbruptCompletion3 = !(_step3 = _context4.sent).done)) {
                _context4.next = 17;
                break;
              }
              return _context4.delegateYield(_loop(), "t0", 14);
            case 14:
              _iteratorAbruptCompletion3 = false;
              _context4.next = 10;
              break;
            case 17:
              _context4.next = 23;
              break;
            case 19:
              _context4.prev = 19;
              _context4.t1 = _context4["catch"](7);
              _didIteratorError3 = true;
              _iteratorError3 = _context4.t1;
            case 23:
              _context4.prev = 23;
              _context4.prev = 24;
              if (!(_iteratorAbruptCompletion3 && _iterator3.return != null)) {
                _context4.next = 28;
                break;
              }
              _context4.next = 28;
              return _awaitAsyncGenerator(_iterator3.return());
            case 28:
              _context4.prev = 28;
              if (!_didIteratorError3) {
                _context4.next = 31;
                break;
              }
              throw _iteratorError3;
            case 31:
              return _context4.finish(28);
            case 32:
              return _context4.finish(23);
            case 33:
              _i = 0, _waitingWorkSheets = waitingWorkSheets;
            case 34:
              if (!(_i < _waitingWorkSheets.length)) {
                _context4.next = 43;
                break;
              }
              _waitingWorkSheets$_i = _waitingWorkSheets[_i], sheetNo = _waitingWorkSheets$_i.sheetNo, path = _waitingWorkSheets$_i.path, tempFileCleanupCallback = _waitingWorkSheets$_i.tempFileCleanupCallback;
              fileStream = fs.createReadStream(path); // TODO: Remove once node v8 is deprecated
              // Detect and upgrade old fileStreams
              if (!fileStream[Symbol.asyncIterator]) {
                fileStream = fileStream.pipe(new PassThrough());
              }
              return _context4.delegateYield(_asyncGeneratorDelegate(_asyncIterator(_this2._parseWorksheet(fileStream, sheetNo)), _awaitAsyncGenerator), "t2", 39);
            case 39:
              tempFileCleanupCallback();
            case 40:
              _i++;
              _context4.next = 34;
              break;
            case 43:
            case "end":
              return _context4.stop();
          }
        }, _callee3, null, [[7, 19, 23, 33], [24,, 28, 32]]);
      }))();
    }
  }, {
    key: "_emitEntry",
    value: function _emitEntry(payload) {
      if (this.options.entries === 'emit') {
        this.emit('entry', payload);
      }
    }
  }, {
    key: "_parseRels",
    value: function () {
      var _parseRels2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(entry) {
        var xform;
        return _regeneratorRuntime().wrap(function _callee4$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              xform = new RelationshipsXform();
              _context5.next = 3;
              return xform.parseStream(iterateStream(entry));
            case 3:
              this.workbookRels = _context5.sent;
            case 4:
            case "end":
              return _context5.stop();
          }
        }, _callee4, this);
      }));
      function _parseRels(_x3) {
        return _parseRels2.apply(this, arguments);
      }
      return _parseRels;
    }()
  }, {
    key: "_parseWorkbook",
    value: function () {
      var _parseWorkbook2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(entry) {
        var workbook;
        return _regeneratorRuntime().wrap(function _callee5$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              this._emitEntry({
                type: 'workbook'
              });
              workbook = new WorkbookXform();
              _context6.next = 4;
              return workbook.parseStream(iterateStream(entry));
            case 4:
              this.properties = workbook.map.workbookPr;
              this.model = workbook.model;
            case 6:
            case "end":
              return _context6.stop();
          }
        }, _callee5, this);
      }));
      function _parseWorkbook(_x4) {
        return _parseWorkbook2.apply(this, arguments);
      }
      return _parseWorkbook;
    }()
  }, {
    key: "_parseSharedStrings",
    value: function _parseSharedStrings(entry) {
      var _this3 = this;
      return _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var text, richText, index, font, _iteratorAbruptCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, events, _iterator5, _step5, _step5$value, eventType, value, node, _node;
        return _regeneratorRuntime().wrap(function _callee6$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _this3._emitEntry({
                type: 'shared-strings'
              });
              _context7.t0 = _this3.options.sharedStrings;
              _context7.next = _context7.t0 === 'cache' ? 4 : _context7.t0 === 'emit' ? 6 : 7;
              break;
            case 4:
              _this3.sharedStrings = [];
              return _context7.abrupt("break", 8);
            case 6:
              return _context7.abrupt("break", 8);
            case 7:
              return _context7.abrupt("return");
            case 8:
              text = null;
              richText = [];
              index = 0;
              font = null;
              _iteratorAbruptCompletion4 = false;
              _didIteratorError4 = false;
              _context7.prev = 14;
              _iterator4 = _asyncIterator(parseSax(iterateStream(entry)));
            case 16:
              _context7.next = 18;
              return _awaitAsyncGenerator(_iterator4.next());
            case 18:
              if (!(_iteratorAbruptCompletion4 = !(_step4 = _context7.sent).done)) {
                _context7.next = 109;
                break;
              }
              events = _step4.value;
              _iterator5 = _createForOfIteratorHelper(events);
              _context7.prev = 21;
              _iterator5.s();
            case 23:
              if ((_step5 = _iterator5.n()).done) {
                _context7.next = 98;
                break;
              }
              _step5$value = _step5.value, eventType = _step5$value.eventType, value = _step5$value.value;
              if (!(eventType === 'opentag')) {
                _context7.next = 72;
                break;
              }
              node = value;
              _context7.t1 = node.name;
              _context7.next = _context7.t1 === 'b' ? 30 : _context7.t1 === 'charset' ? 33 : _context7.t1 === 'color' ? 36 : _context7.t1 === 'family' ? 42 : _context7.t1 === 'i' ? 45 : _context7.t1 === 'outline' ? 48 : _context7.t1 === 'rFont' ? 51 : _context7.t1 === 'si' ? 54 : _context7.t1 === 'sz' ? 58 : _context7.t1 === 'strike' ? 61 : _context7.t1 === 't' ? 62 : _context7.t1 === 'u' ? 64 : _context7.t1 === 'vertAlign' ? 67 : 70;
              break;
            case 30:
              font = font || {};
              font.bold = true;
              return _context7.abrupt("break", 70);
            case 33:
              font = font || {};
              font.charset = parseInt(node.attributes.charset, 10);
              return _context7.abrupt("break", 70);
            case 36:
              font = font || {};
              font.color = {};
              if (node.attributes.rgb) {
                font.color.argb = node.attributes.argb;
              }
              if (node.attributes.val) {
                font.color.argb = node.attributes.val;
              }
              if (node.attributes.theme) {
                font.color.theme = node.attributes.theme;
              }
              return _context7.abrupt("break", 70);
            case 42:
              font = font || {};
              font.family = parseInt(node.attributes.val, 10);
              return _context7.abrupt("break", 70);
            case 45:
              font = font || {};
              font.italic = true;
              return _context7.abrupt("break", 70);
            case 48:
              font = font || {};
              font.outline = true;
              return _context7.abrupt("break", 70);
            case 51:
              font = font || {};
              font.name = node.value;
              return _context7.abrupt("break", 70);
            case 54:
              font = null;
              richText = [];
              text = null;
              return _context7.abrupt("break", 70);
            case 58:
              font = font || {};
              font.size = parseInt(node.attributes.val, 10);
              return _context7.abrupt("break", 70);
            case 61:
              return _context7.abrupt("break", 70);
            case 62:
              text = null;
              return _context7.abrupt("break", 70);
            case 64:
              font = font || {};
              font.underline = true;
              return _context7.abrupt("break", 70);
            case 67:
              font = font || {};
              font.vertAlign = node.attributes.val;
              return _context7.abrupt("break", 70);
            case 70:
              _context7.next = 96;
              break;
            case 72:
              if (!(eventType === 'text')) {
                _context7.next = 76;
                break;
              }
              text = text ? text + value : value;
              _context7.next = 96;
              break;
            case 76:
              if (!(eventType === 'closetag')) {
                _context7.next = 96;
                break;
              }
              _node = value;
              _context7.t2 = _node.name;
              _context7.next = _context7.t2 === 'r' ? 81 : _context7.t2 === 'si' ? 85 : 96;
              break;
            case 81:
              richText.push({
                font: font,
                text: text
              });
              font = null;
              text = null;
              return _context7.abrupt("break", 96);
            case 85:
              if (!(_this3.options.sharedStrings === 'cache')) {
                _context7.next = 89;
                break;
              }
              _this3.sharedStrings.push(richText.length ? {
                richText: richText
              } : text);
              _context7.next = 92;
              break;
            case 89:
              if (!(_this3.options.sharedStrings === 'emit')) {
                _context7.next = 92;
                break;
              }
              _context7.next = 92;
              return {
                index: index++,
                text: richText.length ? {
                  richText: richText
                } : text
              };
            case 92:
              richText = [];
              font = null;
              text = null;
              return _context7.abrupt("break", 96);
            case 96:
              _context7.next = 23;
              break;
            case 98:
              _context7.next = 103;
              break;
            case 100:
              _context7.prev = 100;
              _context7.t3 = _context7["catch"](21);
              _iterator5.e(_context7.t3);
            case 103:
              _context7.prev = 103;
              _iterator5.f();
              return _context7.finish(103);
            case 106:
              _iteratorAbruptCompletion4 = false;
              _context7.next = 16;
              break;
            case 109:
              _context7.next = 115;
              break;
            case 111:
              _context7.prev = 111;
              _context7.t4 = _context7["catch"](14);
              _didIteratorError4 = true;
              _iteratorError4 = _context7.t4;
            case 115:
              _context7.prev = 115;
              _context7.prev = 116;
              if (!(_iteratorAbruptCompletion4 && _iterator4.return != null)) {
                _context7.next = 120;
                break;
              }
              _context7.next = 120;
              return _awaitAsyncGenerator(_iterator4.return());
            case 120:
              _context7.prev = 120;
              if (!_didIteratorError4) {
                _context7.next = 123;
                break;
              }
              throw _iteratorError4;
            case 123:
              return _context7.finish(120);
            case 124:
              return _context7.finish(115);
            case 125:
            case "end":
              return _context7.stop();
          }
        }, _callee6, null, [[14, 111, 115, 125], [21, 100, 103, 106], [116,, 120, 124]]);
      }))();
    }
  }, {
    key: "_parseStyles",
    value: function () {
      var _parseStyles2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(entry) {
        return _regeneratorRuntime().wrap(function _callee7$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              this._emitEntry({
                type: 'styles'
              });
              if (!(this.options.styles === 'cache')) {
                _context8.next = 5;
                break;
              }
              this.styles = new StyleManager();
              _context8.next = 5;
              return this.styles.parseStream(iterateStream(entry));
            case 5:
            case "end":
              return _context8.stop();
          }
        }, _callee7, this);
      }));
      function _parseStyles(_x5) {
        return _parseStyles2.apply(this, arguments);
      }
      return _parseStyles;
    }()
  }, {
    key: "_parseWorksheet",
    value: /*#__PURE__*/_regeneratorRuntime().mark(function _parseWorksheet(iterator, sheetNo) {
      var worksheetReader, matchingRel, matchingSheet;
      return _regeneratorRuntime().wrap(function _parseWorksheet$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            this._emitEntry({
              type: 'worksheet',
              id: sheetNo
            });
            worksheetReader = new WorksheetReader({
              workbook: this,
              id: sheetNo,
              iterator: iterator,
              options: this.options
            });
            matchingRel = (this.workbookRels || []).find(function (rel) {
              return rel.Target === "worksheets/sheet".concat(sheetNo, ".xml");
            });
            matchingSheet = matchingRel && (this.model.sheets || []).find(function (sheet) {
              return sheet.rId === matchingRel.Id;
            });
            if (matchingSheet) {
              worksheetReader.id = matchingSheet.id;
              worksheetReader.name = matchingSheet.name;
              worksheetReader.state = matchingSheet.state;
            }
            if (!(this.options.worksheets === 'emit')) {
              _context9.next = 8;
              break;
            }
            _context9.next = 8;
            return {
              eventType: 'worksheet',
              value: worksheetReader
            };
          case 8:
          case "end":
            return _context9.stop();
        }
      }, _parseWorksheet, this);
    })
  }, {
    key: "_parseHyperlinks",
    value: /*#__PURE__*/_regeneratorRuntime().mark(function _parseHyperlinks(iterator, sheetNo) {
      var hyperlinksReader;
      return _regeneratorRuntime().wrap(function _parseHyperlinks$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            this._emitEntry({
              type: 'hyperlinks',
              id: sheetNo
            });
            hyperlinksReader = new HyperlinkReader({
              workbook: this,
              id: sheetNo,
              iterator: iterator,
              options: this.options
            });
            if (!(this.options.hyperlinks === 'emit')) {
              _context10.next = 5;
              break;
            }
            _context10.next = 5;
            return {
              eventType: 'hyperlinks',
              value: hyperlinksReader
            };
          case 5:
          case "end":
            return _context10.stop();
        }
      }, _parseHyperlinks, this);
    })
  }]);
  return WorkbookReader;
}(EventEmitter, Symbol.asyncIterator); // for reference - these are the valid values for options
WorkbookReader.Options = {
  worksheets: ['emit', 'ignore'],
  sharedStrings: ['cache', 'emit', 'ignore'],
  hyperlinks: ['cache', 'emit', 'ignore'],
  styles: ['cache', 'ignore'],
  entries: ['emit', 'ignore']
};
module.exports = WorkbookReader;
//# sourceMappingURL=workbook-reader.js.map
