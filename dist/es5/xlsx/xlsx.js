"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _asyncIterator(iterable) { var method, async, sync, retry = 2; for ("undefined" != typeof Symbol && (async = Symbol.asyncIterator, sync = Symbol.iterator); retry--;) { if (async && null != (method = iterable[async])) return method.call(iterable); if (sync && null != (method = iterable[sync])) return new AsyncFromSyncIterator(method.call(iterable)); async = "@@asyncIterator", sync = "@@iterator"; } throw new TypeError("Object is not async iterable"); }
function AsyncFromSyncIterator(s) { function AsyncFromSyncIteratorContinuation(r) { if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object.")); var done = r.done; return Promise.resolve(r.value).then(function (value) { return { value: value, done: done }; }); } return AsyncFromSyncIterator = function AsyncFromSyncIterator(s) { this.s = s, this.n = s.next; }, AsyncFromSyncIterator.prototype = { s: null, n: null, next: function next() { return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments)); }, return: function _return(value) { var ret = this.s.return; return void 0 === ret ? Promise.resolve({ value: value, done: !0 }) : AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments)); }, throw: function _throw(value) { var thr = this.s.return; return void 0 === thr ? Promise.reject(value) : AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments)); } }, new AsyncFromSyncIterator(s); }
var fs = require('fs');
var JSZip = require('jszip');
var _require = require('readable-stream'),
  PassThrough = _require.PassThrough;
var ZipStream = require('../utils/zip-stream');
var StreamBuf = require('../utils/stream-buf');
var utils = require('../utils/utils');
var XmlStream = require('../utils/xml-stream');
var _require2 = require('../utils/browser-buffer-decode'),
  bufferToString = _require2.bufferToString;
var StylesXform = require('./xform/style/styles-xform');
var CoreXform = require('./xform/core/core-xform');
var SharedStringsXform = require('./xform/strings/shared-strings-xform');
var RelationshipsXform = require('./xform/core/relationships-xform');
var ContentTypesXform = require('./xform/core/content-types-xform');
var AppXform = require('./xform/core/app-xform');
var WorkbookXform = require('./xform/book/workbook-xform');
var WorksheetXform = require('./xform/sheet/worksheet-xform');
var DrawingXform = require('./xform/drawing/drawing-xform');
var TableXform = require('./xform/table/table-xform');
var CommentsXform = require('./xform/comment/comments-xform');
var VmlNotesXform = require('./xform/comment/vml-notes-xform');
var theme1Xml = require('./xml/theme1.js');
function fsReadFileAsync(filename, options) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filename, options, function (error, data) {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}
var XLSX = /*#__PURE__*/function () {
  function XLSX(workbook) {
    _classCallCheck(this, XLSX);
    this.workbook = workbook;
  }

  // ===============================================================================
  // Workbook
  // =========================================================================
  // Read
  _createClass(XLSX, [{
    key: "readFile",
    value: function () {
      var _readFile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(filename, options) {
        var stream, workbook;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return utils.fs.exists(filename);
            case 2:
              if (_context.sent) {
                _context.next = 4;
                break;
              }
              throw new Error("File not found: ".concat(filename));
            case 4:
              stream = fs.createReadStream(filename);
              _context.prev = 5;
              _context.next = 8;
              return this.read(stream, options);
            case 8:
              workbook = _context.sent;
              stream.close();
              return _context.abrupt("return", workbook);
            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](5);
              stream.close();
              throw _context.t0;
            case 17:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[5, 13]]);
      }));
      function readFile(_x, _x2) {
        return _readFile.apply(this, arguments);
      }
      return readFile;
    }()
  }, {
    key: "parseRels",
    value: function parseRels(stream) {
      var xform = new RelationshipsXform();
      return xform.parseStream(stream);
    }
  }, {
    key: "parseWorkbook",
    value: function parseWorkbook(stream) {
      var xform = new WorkbookXform();
      return xform.parseStream(stream);
    }
  }, {
    key: "parseSharedStrings",
    value: function parseSharedStrings(stream) {
      var xform = new SharedStringsXform();
      return xform.parseStream(stream);
    }
  }, {
    key: "reconcile",
    value: function reconcile(model, options) {
      var workbookXform = new WorkbookXform();
      var worksheetXform = new WorksheetXform(options);
      var drawingXform = new DrawingXform();
      var tableXform = new TableXform();
      workbookXform.reconcile(model);

      // reconcile drawings with their rels
      var drawingOptions = {
        media: model.media,
        mediaIndex: model.mediaIndex
      };
      Object.keys(model.drawings).forEach(function (name) {
        var drawing = model.drawings[name];
        var drawingRel = model.drawingRels[name];
        if (drawingRel) {
          drawingOptions.rels = drawingRel.reduce(function (o, rel) {
            o[rel.Id] = rel;
            return o;
          }, {});
          (drawing.anchors || []).forEach(function (anchor) {
            var hyperlinks = anchor.picture && anchor.picture.hyperlinks;
            if (hyperlinks && drawingOptions.rels[hyperlinks.rId]) {
              hyperlinks.hyperlink = drawingOptions.rels[hyperlinks.rId].Target;
              delete hyperlinks.rId;
            }
          });
          drawingXform.reconcile(drawing, drawingOptions);
        }
      });

      // reconcile tables with the default styles
      var tableOptions = {
        styles: model.styles
      };
      Object.values(model.tables).forEach(function (table) {
        tableXform.reconcile(table, tableOptions);
      });
      var sheetOptions = {
        styles: model.styles,
        sharedStrings: model.sharedStrings,
        media: model.media,
        mediaIndex: model.mediaIndex,
        date1904: model.properties && model.properties.date1904,
        drawings: model.drawings,
        comments: model.comments,
        tables: model.tables,
        vmlDrawings: model.vmlDrawings
      };
      model.worksheets.forEach(function (worksheet) {
        worksheet.relationships = model.worksheetRels[worksheet.sheetNo];
        worksheetXform.reconcile(worksheet, sheetOptions);
      });

      // delete unnecessary parts
      delete model.worksheetHash;
      delete model.worksheetRels;
      delete model.globalRels;
      delete model.sharedStrings;
      delete model.workbookRels;
      delete model.sheetDefs;
      delete model.styles;
      delete model.mediaIndex;
      delete model.drawings;
      delete model.drawingRels;
      delete model.vmlDrawings;
    }
  }, {
    key: "_processWorksheetEntry",
    value: function () {
      var _processWorksheetEntry2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(stream, model, sheetNo, options, path) {
        var xform, worksheet;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              xform = new WorksheetXform(options);
              _context2.next = 3;
              return xform.parseStream(stream);
            case 3:
              worksheet = _context2.sent;
              worksheet.sheetNo = sheetNo;
              model.worksheetHash[path] = worksheet;
              model.worksheets.push(worksheet);
            case 7:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function _processWorksheetEntry(_x3, _x4, _x5, _x6, _x7) {
        return _processWorksheetEntry2.apply(this, arguments);
      }
      return _processWorksheetEntry;
    }()
  }, {
    key: "_processCommentEntry",
    value: function () {
      var _processCommentEntry2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(stream, model, name) {
        var xform, comments;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              xform = new CommentsXform();
              _context3.next = 3;
              return xform.parseStream(stream);
            case 3:
              comments = _context3.sent;
              model.comments["../".concat(name, ".xml")] = comments;
            case 5:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function _processCommentEntry(_x8, _x9, _x10) {
        return _processCommentEntry2.apply(this, arguments);
      }
      return _processCommentEntry;
    }()
  }, {
    key: "_processTableEntry",
    value: function () {
      var _processTableEntry2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(stream, model, name) {
        var xform, table;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              xform = new TableXform();
              _context4.next = 3;
              return xform.parseStream(stream);
            case 3:
              table = _context4.sent;
              model.tables["../tables/".concat(name, ".xml")] = table;
            case 5:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function _processTableEntry(_x11, _x12, _x13) {
        return _processTableEntry2.apply(this, arguments);
      }
      return _processTableEntry;
    }()
  }, {
    key: "_processWorksheetRelsEntry",
    value: function () {
      var _processWorksheetRelsEntry2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(stream, model, sheetNo) {
        var xform, relationships;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              xform = new RelationshipsXform();
              _context5.next = 3;
              return xform.parseStream(stream);
            case 3:
              relationships = _context5.sent;
              model.worksheetRels[sheetNo] = relationships;
            case 5:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      function _processWorksheetRelsEntry(_x14, _x15, _x16) {
        return _processWorksheetRelsEntry2.apply(this, arguments);
      }
      return _processWorksheetRelsEntry;
    }()
  }, {
    key: "_processMediaEntry",
    value: function () {
      var _processMediaEntry2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(entry, model, filename) {
        var lastDot, extension, name;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              lastDot = filename.lastIndexOf('.'); // if we can't determine extension, ignore it
              if (!(lastDot >= 1)) {
                _context6.next = 6;
                break;
              }
              extension = filename.substr(lastDot + 1);
              name = filename.substr(0, lastDot);
              _context6.next = 6;
              return new Promise(function (resolve, reject) {
                var streamBuf = new StreamBuf();
                streamBuf.on('finish', function () {
                  model.mediaIndex[filename] = model.media.length;
                  model.mediaIndex[name] = model.media.length;
                  var medium = {
                    type: 'image',
                    name: name,
                    extension: extension,
                    buffer: streamBuf.toBuffer()
                  };
                  model.media.push(medium);
                  resolve();
                });
                entry.on('error', function (error) {
                  reject(error);
                });
                entry.pipe(streamBuf);
              });
            case 6:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      function _processMediaEntry(_x17, _x18, _x19) {
        return _processMediaEntry2.apply(this, arguments);
      }
      return _processMediaEntry;
    }()
  }, {
    key: "_processDrawingEntry",
    value: function () {
      var _processDrawingEntry2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(entry, model, name) {
        var xform, drawing;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              xform = new DrawingXform();
              _context7.next = 3;
              return xform.parseStream(entry);
            case 3:
              drawing = _context7.sent;
              model.drawings[name] = drawing;
            case 5:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }));
      function _processDrawingEntry(_x20, _x21, _x22) {
        return _processDrawingEntry2.apply(this, arguments);
      }
      return _processDrawingEntry;
    }()
  }, {
    key: "_processDrawingRelsEntry",
    value: function () {
      var _processDrawingRelsEntry2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(entry, model, name) {
        var xform, relationships;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              xform = new RelationshipsXform();
              _context8.next = 3;
              return xform.parseStream(entry);
            case 3:
              relationships = _context8.sent;
              model.drawingRels[name] = relationships;
            case 5:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }));
      function _processDrawingRelsEntry(_x23, _x24, _x25) {
        return _processDrawingRelsEntry2.apply(this, arguments);
      }
      return _processDrawingRelsEntry;
    }()
  }, {
    key: "_processVmlDrawingEntry",
    value: function () {
      var _processVmlDrawingEntry2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(entry, model, name) {
        var xform, vmlDrawing;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              xform = new VmlNotesXform();
              _context9.next = 3;
              return xform.parseStream(entry);
            case 3:
              vmlDrawing = _context9.sent;
              model.vmlDrawings["../drawings/".concat(name, ".vml")] = vmlDrawing;
            case 5:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }));
      function _processVmlDrawingEntry(_x26, _x27, _x28) {
        return _processVmlDrawingEntry2.apply(this, arguments);
      }
      return _processVmlDrawingEntry;
    }()
  }, {
    key: "_processThemeEntry",
    value: function () {
      var _processThemeEntry2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(entry, model, name) {
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return new Promise(function (resolve, reject) {
                // TODO: stream entry into buffer and store the xml in the model.themes[]
                var stream = new StreamBuf();
                entry.on('error', reject);
                stream.on('error', reject);
                stream.on('finish', function () {
                  model.themes[name] = stream.read().toString();
                  resolve();
                });
                entry.pipe(stream);
              });
            case 2:
            case "end":
              return _context10.stop();
          }
        }, _callee10);
      }));
      function _processThemeEntry(_x29, _x30, _x31) {
        return _processThemeEntry2.apply(this, arguments);
      }
      return _processThemeEntry;
    }()
    /**
     * @deprecated since version 4.0. You should use `#read` instead. Please follow upgrade instruction: https://github.com/exceljs/exceljs/blob/master/UPGRADE-4.0.md
     */
  }, {
    key: "createInputStream",
    value: function createInputStream() {
      throw new Error('`XLSX#createInputStream` is deprecated. You should use `XLSX#read` instead. This method will be removed in version 5.0. Please follow upgrade instruction: https://github.com/exceljs/exceljs/blob/master/UPGRADE-4.0.md');
    }
  }, {
    key: "read",
    value: function () {
      var _read = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(stream, options) {
        var chunks, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, chunk;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              // TODO: Remove once node v8 is deprecated
              // Detect and upgrade old streams
              if (!stream[Symbol.asyncIterator] && stream.pipe) {
                stream = stream.pipe(new PassThrough());
              }
              chunks = [];
              _iteratorAbruptCompletion = false;
              _didIteratorError = false;
              _context11.prev = 4;
              _iterator = _asyncIterator(stream);
            case 6:
              _context11.next = 8;
              return _iterator.next();
            case 8:
              if (!(_iteratorAbruptCompletion = !(_step = _context11.sent).done)) {
                _context11.next = 14;
                break;
              }
              chunk = _step.value;
              chunks.push(chunk);
            case 11:
              _iteratorAbruptCompletion = false;
              _context11.next = 6;
              break;
            case 14:
              _context11.next = 20;
              break;
            case 16:
              _context11.prev = 16;
              _context11.t0 = _context11["catch"](4);
              _didIteratorError = true;
              _iteratorError = _context11.t0;
            case 20:
              _context11.prev = 20;
              _context11.prev = 21;
              if (!(_iteratorAbruptCompletion && _iterator.return != null)) {
                _context11.next = 25;
                break;
              }
              _context11.next = 25;
              return _iterator.return();
            case 25:
              _context11.prev = 25;
              if (!_didIteratorError) {
                _context11.next = 28;
                break;
              }
              throw _iteratorError;
            case 28:
              return _context11.finish(25);
            case 29:
              return _context11.finish(20);
            case 30:
              return _context11.abrupt("return", this.load(Buffer.concat(chunks), options));
            case 31:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this, [[4, 16, 20, 30], [21,, 25, 29]]);
      }));
      function read(_x32, _x33) {
        return _read.apply(this, arguments);
      }
      return read;
    }()
  }, {
    key: "load",
    value: function () {
      var _load = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(data, options) {
        var buffer, model, zip, _i, _Object$values, entry, entryName, stream, content, chunkSize, i, workbook, appXform, appProperties, coreXform, coreProperties, match;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              if (options && options.base64) {
                buffer = Buffer.from(data.toString(), 'base64');
              } else {
                buffer = data;
              }
              model = {
                worksheets: [],
                worksheetHash: {},
                worksheetRels: [],
                themes: {},
                media: [],
                mediaIndex: {},
                drawings: {},
                drawingRels: {},
                comments: {},
                tables: {},
                vmlDrawings: {}
              };
              _context12.next = 4;
              return JSZip.loadAsync(buffer);
            case 4:
              zip = _context12.sent;
              _i = 0, _Object$values = Object.values(zip.files);
            case 6:
              if (!(_i < _Object$values.length)) {
                _context12.next = 126;
                break;
              }
              entry = _Object$values[_i];
              if (entry.dir) {
                _context12.next = 123;
                break;
              }
              entryName = entry.name;
              if (entryName[0] === '/') {
                entryName = entryName.substr(1);
              }
              stream = void 0;
              if (!(entryName.match(/xl\/media\//) ||
              // themes are not parsed as stream
              entryName.match(/xl\/theme\/([a-zA-Z0-9]+)[.]xml/))) {
                _context12.next = 21;
                break;
              }
              stream = new PassThrough();
              _context12.t0 = stream;
              _context12.next = 17;
              return entry.async('nodebuffer');
            case 17:
              _context12.t1 = _context12.sent;
              _context12.t0.write.call(_context12.t0, _context12.t1);
              _context12.next = 36;
              break;
            case 21:
              // use object mode to avoid buffer-string convention
              stream = new PassThrough({
                writableObjectMode: true,
                readableObjectMode: true
              });
              content = void 0; // https://www.npmjs.com/package/process
              if (!process.browser) {
                _context12.next = 31;
                break;
              }
              _context12.t2 = bufferToString;
              _context12.next = 27;
              return entry.async('nodebuffer');
            case 27:
              _context12.t3 = _context12.sent;
              content = (0, _context12.t2)(_context12.t3);
              _context12.next = 34;
              break;
            case 31:
              _context12.next = 33;
              return entry.async('string');
            case 33:
              content = _context12.sent;
            case 34:
              chunkSize = 16 * 1024;
              for (i = 0; i < content.length; i += chunkSize) {
                stream.write(content.substring(i, i + chunkSize));
              }
            case 36:
              stream.end();
              _context12.t4 = entryName;
              _context12.next = _context12.t4 === '_rels/.rels' ? 40 : _context12.t4 === 'xl/workbook.xml' ? 44 : _context12.t4 === 'xl/_rels/workbook.xml.rels' ? 53 : _context12.t4 === 'xl/sharedStrings.xml' ? 57 : _context12.t4 === 'xl/styles.xml' ? 61 : _context12.t4 === 'docProps/app.xml' ? 65 : _context12.t4 === 'docProps/core.xml' ? 72 : 78;
              break;
            case 40:
              _context12.next = 42;
              return this.parseRels(stream);
            case 42:
              model.globalRels = _context12.sent;
              return _context12.abrupt("break", 123);
            case 44:
              _context12.next = 46;
              return this.parseWorkbook(stream);
            case 46:
              workbook = _context12.sent;
              model.sheets = workbook.sheets;
              model.definedNames = workbook.definedNames;
              model.views = workbook.views;
              model.properties = workbook.properties;
              model.calcProperties = workbook.calcProperties;
              return _context12.abrupt("break", 123);
            case 53:
              _context12.next = 55;
              return this.parseRels(stream);
            case 55:
              model.workbookRels = _context12.sent;
              return _context12.abrupt("break", 123);
            case 57:
              model.sharedStrings = new SharedStringsXform();
              _context12.next = 60;
              return model.sharedStrings.parseStream(stream);
            case 60:
              return _context12.abrupt("break", 123);
            case 61:
              model.styles = new StylesXform();
              _context12.next = 64;
              return model.styles.parseStream(stream);
            case 64:
              return _context12.abrupt("break", 123);
            case 65:
              appXform = new AppXform();
              _context12.next = 68;
              return appXform.parseStream(stream);
            case 68:
              appProperties = _context12.sent;
              model.company = appProperties.company;
              model.manager = appProperties.manager;
              return _context12.abrupt("break", 123);
            case 72:
              coreXform = new CoreXform();
              _context12.next = 75;
              return coreXform.parseStream(stream);
            case 75:
              coreProperties = _context12.sent;
              Object.assign(model, coreProperties);
              return _context12.abrupt("break", 123);
            case 78:
              match = entryName.match(/xl\/worksheets\/sheet(\d+)[.]xml/);
              if (!match) {
                _context12.next = 83;
                break;
              }
              _context12.next = 82;
              return this._processWorksheetEntry(stream, model, match[1], options, entryName);
            case 82:
              return _context12.abrupt("break", 123);
            case 83:
              match = entryName.match(/xl\/worksheets\/_rels\/sheet(\d+)[.]xml.rels/);
              if (!match) {
                _context12.next = 88;
                break;
              }
              _context12.next = 87;
              return this._processWorksheetRelsEntry(stream, model, match[1]);
            case 87:
              return _context12.abrupt("break", 123);
            case 88:
              match = entryName.match(/xl\/theme\/([a-zA-Z0-9]+)[.]xml/);
              if (!match) {
                _context12.next = 93;
                break;
              }
              _context12.next = 92;
              return this._processThemeEntry(stream, model, match[1]);
            case 92:
              return _context12.abrupt("break", 123);
            case 93:
              match = entryName.match(/xl\/media\/([a-zA-Z0-9]+[.][a-zA-Z0-9]{3,4})$/);
              if (!match) {
                _context12.next = 98;
                break;
              }
              _context12.next = 97;
              return this._processMediaEntry(stream, model, match[1]);
            case 97:
              return _context12.abrupt("break", 123);
            case 98:
              match = entryName.match(/xl\/drawings\/([a-zA-Z0-9]+)[.]xml/);
              if (!match) {
                _context12.next = 103;
                break;
              }
              _context12.next = 102;
              return this._processDrawingEntry(stream, model, match[1]);
            case 102:
              return _context12.abrupt("break", 123);
            case 103:
              match = entryName.match(/xl\/(comments\d+)[.]xml/);
              if (!match) {
                _context12.next = 108;
                break;
              }
              _context12.next = 107;
              return this._processCommentEntry(stream, model, match[1]);
            case 107:
              return _context12.abrupt("break", 123);
            case 108:
              match = entryName.match(/xl\/tables\/(table\d+)[.]xml/);
              if (!match) {
                _context12.next = 113;
                break;
              }
              _context12.next = 112;
              return this._processTableEntry(stream, model, match[1]);
            case 112:
              return _context12.abrupt("break", 123);
            case 113:
              match = entryName.match(/xl\/drawings\/_rels\/([a-zA-Z0-9]+)[.]xml[.]rels/);
              if (!match) {
                _context12.next = 118;
                break;
              }
              _context12.next = 117;
              return this._processDrawingRelsEntry(stream, model, match[1]);
            case 117:
              return _context12.abrupt("break", 123);
            case 118:
              match = entryName.match(/xl\/drawings\/(vmlDrawing\d+)[.]vml/);
              if (!match) {
                _context12.next = 123;
                break;
              }
              _context12.next = 122;
              return this._processVmlDrawingEntry(stream, model, match[1]);
            case 122:
              return _context12.abrupt("break", 123);
            case 123:
              _i++;
              _context12.next = 6;
              break;
            case 126:
              this.reconcile(model, options);

              // apply model
              this.workbook.model = model;
              return _context12.abrupt("return", this.workbook);
            case 129:
            case "end":
              return _context12.stop();
          }
        }, _callee12, this);
      }));
      function load(_x34, _x35) {
        return _load.apply(this, arguments);
      }
      return load;
    }() // =========================================================================
    // Write
  }, {
    key: "addMedia",
    value: function () {
      var _addMedia = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(zip, model) {
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              _context14.next = 2;
              return Promise.all(model.media.map( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(medium) {
                  var filename, data, dataimg64, content;
                  return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                    while (1) switch (_context13.prev = _context13.next) {
                      case 0:
                        if (!(medium.type === 'image')) {
                          _context13.next = 13;
                          break;
                        }
                        filename = "xl/media/".concat(medium.name, ".").concat(medium.extension);
                        if (!medium.filename) {
                          _context13.next = 7;
                          break;
                        }
                        _context13.next = 5;
                        return fsReadFileAsync(medium.filename);
                      case 5:
                        data = _context13.sent;
                        return _context13.abrupt("return", zip.append(data, {
                          name: filename
                        }));
                      case 7:
                        if (!medium.buffer) {
                          _context13.next = 9;
                          break;
                        }
                        return _context13.abrupt("return", zip.append(medium.buffer, {
                          name: filename
                        }));
                      case 9:
                        if (!medium.base64) {
                          _context13.next = 13;
                          break;
                        }
                        dataimg64 = medium.base64;
                        content = dataimg64.substring(dataimg64.indexOf(',') + 1);
                        return _context13.abrupt("return", zip.append(content, {
                          name: filename,
                          base64: true
                        }));
                      case 13:
                        throw new Error('Unsupported media');
                      case 14:
                      case "end":
                        return _context13.stop();
                    }
                  }, _callee13);
                }));
                return function (_x38) {
                  return _ref.apply(this, arguments);
                };
              }()));
            case 2:
            case "end":
              return _context14.stop();
          }
        }, _callee14);
      }));
      function addMedia(_x36, _x37) {
        return _addMedia.apply(this, arguments);
      }
      return addMedia;
    }()
  }, {
    key: "addDrawings",
    value: function addDrawings(zip, model) {
      var drawingXform = new DrawingXform();
      var relsXform = new RelationshipsXform();
      model.worksheets.forEach(function (worksheet) {
        var drawing = worksheet.drawing;
        if (drawing) {
          drawingXform.prepare(drawing, {});
          var xml = drawingXform.toXml(drawing);
          zip.append(xml, {
            name: "xl/drawings/".concat(drawing.name, ".xml")
          });
          xml = relsXform.toXml(drawing.rels);
          zip.append(xml, {
            name: "xl/drawings/_rels/".concat(drawing.name, ".xml.rels")
          });
        }
      });
    }
  }, {
    key: "addTables",
    value: function addTables(zip, model) {
      var tableXform = new TableXform();
      model.worksheets.forEach(function (worksheet) {
        var tables = worksheet.tables;
        tables.forEach(function (table) {
          tableXform.prepare(table, {});
          var tableXml = tableXform.toXml(table);
          zip.append(tableXml, {
            name: "xl/tables/".concat(table.target)
          });
        });
      });
    }
  }, {
    key: "addContentTypes",
    value: function () {
      var _addContentTypes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(zip, model) {
        var xform, xml;
        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              xform = new ContentTypesXform();
              xml = xform.toXml(model);
              zip.append(xml, {
                name: '[Content_Types].xml'
              });
            case 3:
            case "end":
              return _context15.stop();
          }
        }, _callee15);
      }));
      function addContentTypes(_x39, _x40) {
        return _addContentTypes.apply(this, arguments);
      }
      return addContentTypes;
    }()
  }, {
    key: "addApp",
    value: function () {
      var _addApp = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(zip, model) {
        var xform, xml;
        return _regeneratorRuntime().wrap(function _callee16$(_context16) {
          while (1) switch (_context16.prev = _context16.next) {
            case 0:
              xform = new AppXform();
              xml = xform.toXml(model);
              zip.append(xml, {
                name: 'docProps/app.xml'
              });
            case 3:
            case "end":
              return _context16.stop();
          }
        }, _callee16);
      }));
      function addApp(_x41, _x42) {
        return _addApp.apply(this, arguments);
      }
      return addApp;
    }()
  }, {
    key: "addCore",
    value: function () {
      var _addCore = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(zip, model) {
        var coreXform;
        return _regeneratorRuntime().wrap(function _callee17$(_context17) {
          while (1) switch (_context17.prev = _context17.next) {
            case 0:
              coreXform = new CoreXform();
              zip.append(coreXform.toXml(model), {
                name: 'docProps/core.xml'
              });
            case 2:
            case "end":
              return _context17.stop();
          }
        }, _callee17);
      }));
      function addCore(_x43, _x44) {
        return _addCore.apply(this, arguments);
      }
      return addCore;
    }()
  }, {
    key: "addThemes",
    value: function () {
      var _addThemes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(zip, model) {
        var themes;
        return _regeneratorRuntime().wrap(function _callee18$(_context18) {
          while (1) switch (_context18.prev = _context18.next) {
            case 0:
              themes = model.themes || {
                theme1: theme1Xml
              };
              Object.keys(themes).forEach(function (name) {
                var xml = themes[name];
                var path = "xl/theme/".concat(name, ".xml");
                zip.append(xml, {
                  name: path
                });
              });
            case 2:
            case "end":
              return _context18.stop();
          }
        }, _callee18);
      }));
      function addThemes(_x45, _x46) {
        return _addThemes.apply(this, arguments);
      }
      return addThemes;
    }()
  }, {
    key: "addOfficeRels",
    value: function () {
      var _addOfficeRels = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(zip) {
        var xform, xml;
        return _regeneratorRuntime().wrap(function _callee19$(_context19) {
          while (1) switch (_context19.prev = _context19.next) {
            case 0:
              xform = new RelationshipsXform();
              xml = xform.toXml([{
                Id: 'rId1',
                Type: XLSX.RelType.OfficeDocument,
                Target: 'xl/workbook.xml'
              }, {
                Id: 'rId2',
                Type: XLSX.RelType.CoreProperties,
                Target: 'docProps/core.xml'
              }, {
                Id: 'rId3',
                Type: XLSX.RelType.ExtenderProperties,
                Target: 'docProps/app.xml'
              }]);
              zip.append(xml, {
                name: '_rels/.rels'
              });
            case 3:
            case "end":
              return _context19.stop();
          }
        }, _callee19);
      }));
      function addOfficeRels(_x47) {
        return _addOfficeRels.apply(this, arguments);
      }
      return addOfficeRels;
    }()
  }, {
    key: "addWorkbookRels",
    value: function () {
      var _addWorkbookRels = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(zip, model) {
        var count, relationships, xform, xml;
        return _regeneratorRuntime().wrap(function _callee20$(_context20) {
          while (1) switch (_context20.prev = _context20.next) {
            case 0:
              count = 1;
              relationships = [{
                Id: "rId".concat(count++),
                Type: XLSX.RelType.Styles,
                Target: 'styles.xml'
              }, {
                Id: "rId".concat(count++),
                Type: XLSX.RelType.Theme,
                Target: 'theme/theme1.xml'
              }];
              if (model.sharedStrings.count) {
                relationships.push({
                  Id: "rId".concat(count++),
                  Type: XLSX.RelType.SharedStrings,
                  Target: 'sharedStrings.xml'
                });
              }
              model.worksheets.forEach(function (worksheet) {
                worksheet.rId = "rId".concat(count++);
                relationships.push({
                  Id: worksheet.rId,
                  Type: XLSX.RelType.Worksheet,
                  Target: "worksheets/sheet".concat(worksheet.id, ".xml")
                });
              });
              xform = new RelationshipsXform();
              xml = xform.toXml(relationships);
              zip.append(xml, {
                name: 'xl/_rels/workbook.xml.rels'
              });
            case 7:
            case "end":
              return _context20.stop();
          }
        }, _callee20);
      }));
      function addWorkbookRels(_x48, _x49) {
        return _addWorkbookRels.apply(this, arguments);
      }
      return addWorkbookRels;
    }()
  }, {
    key: "addSharedStrings",
    value: function () {
      var _addSharedStrings = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(zip, model) {
        return _regeneratorRuntime().wrap(function _callee21$(_context21) {
          while (1) switch (_context21.prev = _context21.next) {
            case 0:
              if (model.sharedStrings && model.sharedStrings.count) {
                zip.append(model.sharedStrings.xml, {
                  name: 'xl/sharedStrings.xml'
                });
              }
            case 1:
            case "end":
              return _context21.stop();
          }
        }, _callee21);
      }));
      function addSharedStrings(_x50, _x51) {
        return _addSharedStrings.apply(this, arguments);
      }
      return addSharedStrings;
    }()
  }, {
    key: "addStyles",
    value: function () {
      var _addStyles = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(zip, model) {
        var xml;
        return _regeneratorRuntime().wrap(function _callee22$(_context22) {
          while (1) switch (_context22.prev = _context22.next) {
            case 0:
              xml = model.styles.xml;
              if (xml) {
                zip.append(xml, {
                  name: 'xl/styles.xml'
                });
              }
            case 2:
            case "end":
              return _context22.stop();
          }
        }, _callee22);
      }));
      function addStyles(_x52, _x53) {
        return _addStyles.apply(this, arguments);
      }
      return addStyles;
    }()
  }, {
    key: "addWorkbook",
    value: function () {
      var _addWorkbook = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(zip, model) {
        var xform;
        return _regeneratorRuntime().wrap(function _callee23$(_context23) {
          while (1) switch (_context23.prev = _context23.next) {
            case 0:
              xform = new WorkbookXform();
              zip.append(xform.toXml(model), {
                name: 'xl/workbook.xml'
              });
            case 2:
            case "end":
              return _context23.stop();
          }
        }, _callee23);
      }));
      function addWorkbook(_x54, _x55) {
        return _addWorkbook.apply(this, arguments);
      }
      return addWorkbook;
    }()
  }, {
    key: "addWorksheets",
    value: function () {
      var _addWorksheets = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(zip, model) {
        var worksheetXform, relationshipsXform, commentsXform, vmlNotesXform;
        return _regeneratorRuntime().wrap(function _callee24$(_context24) {
          while (1) switch (_context24.prev = _context24.next) {
            case 0:
              // preparation phase
              worksheetXform = new WorksheetXform();
              relationshipsXform = new RelationshipsXform();
              commentsXform = new CommentsXform();
              vmlNotesXform = new VmlNotesXform(); // write sheets
              model.worksheets.forEach(function (worksheet) {
                var xmlStream = new XmlStream();
                worksheetXform.render(xmlStream, worksheet);
                zip.append(xmlStream.xml, {
                  name: "xl/worksheets/sheet".concat(worksheet.id, ".xml")
                });
                if (worksheet.rels && worksheet.rels.length) {
                  xmlStream = new XmlStream();
                  relationshipsXform.render(xmlStream, worksheet.rels);
                  zip.append(xmlStream.xml, {
                    name: "xl/worksheets/_rels/sheet".concat(worksheet.id, ".xml.rels")
                  });
                }
                if (worksheet.comments.length > 0) {
                  xmlStream = new XmlStream();
                  commentsXform.render(xmlStream, worksheet);
                  zip.append(xmlStream.xml, {
                    name: "xl/comments".concat(worksheet.id, ".xml")
                  });
                  xmlStream = new XmlStream();
                  vmlNotesXform.render(xmlStream, worksheet);
                  zip.append(xmlStream.xml, {
                    name: "xl/drawings/vmlDrawing".concat(worksheet.id, ".vml")
                  });
                }
              });
            case 5:
            case "end":
              return _context24.stop();
          }
        }, _callee24);
      }));
      function addWorksheets(_x56, _x57) {
        return _addWorksheets.apply(this, arguments);
      }
      return addWorksheets;
    }()
  }, {
    key: "_finalize",
    value: function _finalize(zip) {
      var _this = this;
      return new Promise(function (resolve, reject) {
        zip.on('finish', function () {
          resolve(_this);
        });
        zip.on('error', reject);
        zip.finalize();
      });
    }
  }, {
    key: "prepareModel",
    value: function prepareModel(model, options) {
      // ensure following properties have sane values
      model.creator = model.creator || 'ExcelJS';
      model.lastModifiedBy = model.lastModifiedBy || 'ExcelJS';
      model.created = model.created || new Date();
      model.modified = model.modified || new Date();
      model.useSharedStrings = options.useSharedStrings !== undefined ? options.useSharedStrings : true;
      model.useStyles = options.useStyles !== undefined ? options.useStyles : true;

      // Manage the shared strings
      model.sharedStrings = new SharedStringsXform();

      // add a style manager to handle cell formats, fonts, etc.
      model.styles = model.useStyles ? new StylesXform(true) : new StylesXform.Mock();

      // prepare all of the things before the render
      var workbookXform = new WorkbookXform();
      var worksheetXform = new WorksheetXform();
      workbookXform.prepare(model);
      var worksheetOptions = {
        sharedStrings: model.sharedStrings,
        styles: model.styles,
        date1904: model.properties.date1904,
        drawingsCount: 0,
        media: model.media
      };
      worksheetOptions.drawings = model.drawings = [];
      worksheetOptions.commentRefs = model.commentRefs = [];
      var tableCount = 0;
      model.tables = [];
      model.worksheets.forEach(function (worksheet) {
        // assign unique filenames to tables
        worksheet.tables.forEach(function (table) {
          tableCount++;
          table.target = "table".concat(tableCount, ".xml");
          table.id = tableCount;
          model.tables.push(table);
        });
        worksheetXform.prepare(worksheet, worksheetOptions);
      });

      // TODO: workbook drawing list
    }
  }, {
    key: "write",
    value: function () {
      var _write = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25(stream, options) {
        var model, zip;
        return _regeneratorRuntime().wrap(function _callee25$(_context25) {
          while (1) switch (_context25.prev = _context25.next) {
            case 0:
              options = options || {};
              model = this.workbook.model;
              zip = new ZipStream.ZipWriter(options.zip);
              zip.pipe(stream);
              this.prepareModel(model, options);

              // render
              _context25.next = 7;
              return this.addContentTypes(zip, model);
            case 7:
              _context25.next = 9;
              return this.addOfficeRels(zip, model);
            case 9:
              _context25.next = 11;
              return this.addWorkbookRels(zip, model);
            case 11:
              _context25.next = 13;
              return this.addWorksheets(zip, model);
            case 13:
              _context25.next = 15;
              return this.addSharedStrings(zip, model);
            case 15:
              _context25.next = 17;
              return this.addDrawings(zip, model);
            case 17:
              _context25.next = 19;
              return this.addTables(zip, model);
            case 19:
              _context25.next = 21;
              return Promise.all([this.addThemes(zip, model), this.addStyles(zip, model)]);
            case 21:
              _context25.next = 23;
              return this.addMedia(zip, model);
            case 23:
              _context25.next = 25;
              return Promise.all([this.addApp(zip, model), this.addCore(zip, model)]);
            case 25:
              _context25.next = 27;
              return this.addWorkbook(zip, model);
            case 27:
              return _context25.abrupt("return", this._finalize(zip));
            case 28:
            case "end":
              return _context25.stop();
          }
        }, _callee25, this);
      }));
      function write(_x58, _x59) {
        return _write.apply(this, arguments);
      }
      return write;
    }()
  }, {
    key: "writeFile",
    value: function writeFile(filename, options) {
      var _this2 = this;
      var stream = fs.createWriteStream(filename);
      return new Promise(function (resolve, reject) {
        stream.on('finish', function () {
          resolve();
        });
        stream.on('error', function (error) {
          reject(error);
        });
        _this2.write(stream, options).then(function () {
          stream.end();
        }).catch(function (err) {
          reject(err);
        });
      });
    }
  }, {
    key: "writeBuffer",
    value: function () {
      var _writeBuffer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee26(options) {
        var stream;
        return _regeneratorRuntime().wrap(function _callee26$(_context26) {
          while (1) switch (_context26.prev = _context26.next) {
            case 0:
              stream = new StreamBuf();
              _context26.next = 3;
              return this.write(stream, options);
            case 3:
              return _context26.abrupt("return", stream.read());
            case 4:
            case "end":
              return _context26.stop();
          }
        }, _callee26, this);
      }));
      function writeBuffer(_x60) {
        return _writeBuffer.apply(this, arguments);
      }
      return writeBuffer;
    }()
  }]);
  return XLSX;
}();
XLSX.RelType = require('./rel-type');
module.exports = XLSX;
//# sourceMappingURL=xlsx.js.map
