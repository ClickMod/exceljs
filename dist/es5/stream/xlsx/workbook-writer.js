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
var fs = require('fs');
var Archiver = require('archiver');
var StreamBuf = require('../../utils/stream-buf');
var RelType = require('../../xlsx/rel-type');
var StylesXform = require('../../xlsx/xform/style/styles-xform');
var SharedStrings = require('../../utils/shared-strings');
var DefinedNames = require('../../doc/defined-names');
var CoreXform = require('../../xlsx/xform/core/core-xform');
var RelationshipsXform = require('../../xlsx/xform/core/relationships-xform');
var ContentTypesXform = require('../../xlsx/xform/core/content-types-xform');
var AppXform = require('../../xlsx/xform/core/app-xform');
var WorkbookXform = require('../../xlsx/xform/book/workbook-xform');
var SharedStringsXform = require('../../xlsx/xform/strings/shared-strings-xform');
var WorksheetWriter = require('./worksheet-writer');
var theme1Xml = require('../../xlsx/xml/theme1.js');
var WorkbookWriter = /*#__PURE__*/function () {
  function WorkbookWriter(options) {
    _classCallCheck(this, WorkbookWriter);
    options = options || {};
    this.created = options.created || new Date();
    this.modified = options.modified || this.created;
    this.creator = options.creator || 'ExcelJS';
    this.lastModifiedBy = options.lastModifiedBy || 'ExcelJS';
    this.lastPrinted = options.lastPrinted;

    // using shared strings creates a smaller xlsx file but may use more memory
    this.useSharedStrings = options.useSharedStrings || false;
    this.sharedStrings = new SharedStrings();

    // style manager
    this.styles = options.useStyles ? new StylesXform(true) : new StylesXform.Mock(true);

    // defined names
    this._definedNames = new DefinedNames();
    this._worksheets = [];
    this.views = [];
    this.zipOptions = options.zip;
    this.media = [];
    this.commentRefs = [];
    this.zip = Archiver('zip', this.zipOptions);
    if (options.stream) {
      this.stream = options.stream;
    } else if (options.filename) {
      this.stream = fs.createWriteStream(options.filename);
    } else {
      this.stream = new StreamBuf();
    }
    this.zip.pipe(this.stream);

    // these bits can be added right now
    this.promise = Promise.all([this.addThemes(), this.addOfficeRels()]);
  }
  _createClass(WorkbookWriter, [{
    key: "definedNames",
    get: function get() {
      return this._definedNames;
    }
  }, {
    key: "_openStream",
    value: function _openStream(path) {
      var stream = new StreamBuf({
        bufSize: 65536,
        batch: true
      });
      this.zip.append(stream, {
        name: path
      });
      stream.on('finish', function () {
        stream.emit('zipped');
      });
      return stream;
    }
  }, {
    key: "_commitWorksheets",
    value: function _commitWorksheets() {
      var commitWorksheet = function commitWorksheet(worksheet) {
        if (!worksheet.committed) {
          return new Promise(function (resolve) {
            worksheet.stream.on('zipped', function () {
              resolve();
            });
            worksheet.commit();
          });
        }
        return Promise.resolve();
      };
      // if there are any uncommitted worksheets, commit them now and wait
      var promises = this._worksheets.map(commitWorksheet);
      if (promises.length) {
        return Promise.all(promises);
      }
      return Promise.resolve();
    }
  }, {
    key: "commit",
    value: function () {
      var _commit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.promise;
            case 2:
              _context.next = 4;
              return this.addMedia();
            case 4:
              _context.next = 6;
              return this._commitWorksheets();
            case 6:
              _context.next = 8;
              return Promise.all([this.addContentTypes(), this.addApp(), this.addCore(), this.addSharedStrings(), this.addStyles(), this.addWorkbookRels()]);
            case 8:
              _context.next = 10;
              return this.addWorkbook();
            case 10:
              return _context.abrupt("return", this._finalize());
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function commit() {
        return _commit.apply(this, arguments);
      }
      return commit;
    }()
  }, {
    key: "nextId",
    get: function get() {
      // find the next unique spot to add worksheet
      var i;
      for (i = 1; i < this._worksheets.length; i++) {
        if (!this._worksheets[i]) {
          return i;
        }
      }
      return this._worksheets.length || 1;
    }
  }, {
    key: "addImage",
    value: function addImage(image) {
      var id = this.media.length;
      var medium = Object.assign({}, image, {
        type: 'image',
        name: "image".concat(id, ".").concat(image.extension)
      });
      this.media.push(medium);
      return id;
    }
  }, {
    key: "getImage",
    value: function getImage(id) {
      return this.media[id];
    }
  }, {
    key: "addWorksheet",
    value: function addWorksheet(name, options) {
      // it's possible to add a worksheet with different than default
      // shared string handling
      // in fact, it's even possible to switch it mid-sheet
      options = options || {};
      var useSharedStrings = options.useSharedStrings !== undefined ? options.useSharedStrings : this.useSharedStrings;
      if (options.tabColor) {
        // eslint-disable-next-line no-console
        console.trace('tabColor option has moved to { properties: tabColor: {...} }');
        options.properties = Object.assign({
          tabColor: options.tabColor
        }, options.properties);
      }
      var id = this.nextId;
      name = name || "sheet".concat(id);
      var worksheet = new WorksheetWriter({
        id: id,
        name: name,
        workbook: this,
        useSharedStrings: useSharedStrings,
        properties: options.properties,
        state: options.state,
        pageSetup: options.pageSetup,
        views: options.views,
        autoFilter: options.autoFilter,
        headerFooter: options.headerFooter
      });
      this._worksheets[id] = worksheet;
      return worksheet;
    }
  }, {
    key: "getWorksheet",
    value: function getWorksheet(id) {
      if (id === undefined) {
        return this._worksheets.find(function () {
          return true;
        });
      }
      if (typeof id === 'number') {
        return this._worksheets[id];
      }
      if (typeof id === 'string') {
        return this._worksheets.find(function (worksheet) {
          return worksheet && worksheet.name === id;
        });
      }
      return undefined;
    }
  }, {
    key: "addStyles",
    value: function addStyles() {
      var _this = this;
      return new Promise(function (resolve) {
        _this.zip.append(_this.styles.xml, {
          name: 'xl/styles.xml'
        });
        resolve();
      });
    }
  }, {
    key: "addThemes",
    value: function addThemes() {
      var _this2 = this;
      return new Promise(function (resolve) {
        _this2.zip.append(theme1Xml, {
          name: 'xl/theme/theme1.xml'
        });
        resolve();
      });
    }
  }, {
    key: "addOfficeRels",
    value: function addOfficeRels() {
      var _this3 = this;
      return new Promise(function (resolve) {
        var xform = new RelationshipsXform();
        var xml = xform.toXml([{
          Id: 'rId1',
          Type: RelType.OfficeDocument,
          Target: 'xl/workbook.xml'
        }, {
          Id: 'rId2',
          Type: RelType.CoreProperties,
          Target: 'docProps/core.xml'
        }, {
          Id: 'rId3',
          Type: RelType.ExtenderProperties,
          Target: 'docProps/app.xml'
        }]);
        _this3.zip.append(xml, {
          name: '/_rels/.rels'
        });
        resolve();
      });
    }
  }, {
    key: "addContentTypes",
    value: function addContentTypes() {
      var _this4 = this;
      return new Promise(function (resolve) {
        var model = {
          worksheets: _this4._worksheets.filter(Boolean),
          sharedStrings: _this4.sharedStrings,
          commentRefs: _this4.commentRefs,
          media: _this4.media
        };
        var xform = new ContentTypesXform();
        var xml = xform.toXml(model);
        _this4.zip.append(xml, {
          name: '[Content_Types].xml'
        });
        resolve();
      });
    }
  }, {
    key: "addMedia",
    value: function addMedia() {
      var _this5 = this;
      return Promise.all(this.media.map(function (medium) {
        if (medium.type === 'image') {
          var filename = "xl/media/".concat(medium.name);
          if (medium.filename) {
            return _this5.zip.file(medium.filename, {
              name: filename
            });
          }
          if (medium.buffer) {
            return _this5.zip.append(medium.buffer, {
              name: filename
            });
          }
          if (medium.base64) {
            var dataimg64 = medium.base64;
            var content = dataimg64.substring(dataimg64.indexOf(',') + 1);
            return _this5.zip.append(content, {
              name: filename,
              base64: true
            });
          }
        }
        throw new Error('Unsupported media');
      }));
    }
  }, {
    key: "addApp",
    value: function addApp() {
      var _this6 = this;
      return new Promise(function (resolve) {
        var model = {
          worksheets: _this6._worksheets.filter(Boolean)
        };
        var xform = new AppXform();
        var xml = xform.toXml(model);
        _this6.zip.append(xml, {
          name: 'docProps/app.xml'
        });
        resolve();
      });
    }
  }, {
    key: "addCore",
    value: function addCore() {
      var _this7 = this;
      return new Promise(function (resolve) {
        var coreXform = new CoreXform();
        var xml = coreXform.toXml(_this7);
        _this7.zip.append(xml, {
          name: 'docProps/core.xml'
        });
        resolve();
      });
    }
  }, {
    key: "addSharedStrings",
    value: function addSharedStrings() {
      var _this8 = this;
      if (this.sharedStrings.count) {
        return new Promise(function (resolve) {
          var sharedStringsXform = new SharedStringsXform();
          var xml = sharedStringsXform.toXml(_this8.sharedStrings);
          _this8.zip.append(xml, {
            name: '/xl/sharedStrings.xml'
          });
          resolve();
        });
      }
      return Promise.resolve();
    }
  }, {
    key: "addWorkbookRels",
    value: function addWorkbookRels() {
      var _this9 = this;
      var count = 1;
      var relationships = [{
        Id: "rId".concat(count++),
        Type: RelType.Styles,
        Target: 'styles.xml'
      }, {
        Id: "rId".concat(count++),
        Type: RelType.Theme,
        Target: 'theme/theme1.xml'
      }];
      if (this.sharedStrings.count) {
        relationships.push({
          Id: "rId".concat(count++),
          Type: RelType.SharedStrings,
          Target: 'sharedStrings.xml'
        });
      }
      this._worksheets.forEach(function (worksheet) {
        if (worksheet) {
          worksheet.rId = "rId".concat(count++);
          relationships.push({
            Id: worksheet.rId,
            Type: RelType.Worksheet,
            Target: "worksheets/sheet".concat(worksheet.id, ".xml")
          });
        }
      });
      return new Promise(function (resolve) {
        var xform = new RelationshipsXform();
        var xml = xform.toXml(relationships);
        _this9.zip.append(xml, {
          name: '/xl/_rels/workbook.xml.rels'
        });
        resolve();
      });
    }
  }, {
    key: "addWorkbook",
    value: function addWorkbook() {
      var zip = this.zip;
      var model = {
        worksheets: this._worksheets.filter(Boolean),
        definedNames: this._definedNames.model,
        views: this.views,
        properties: {},
        calcProperties: {}
      };
      return new Promise(function (resolve) {
        var xform = new WorkbookXform();
        xform.prepare(model);
        zip.append(xform.toXml(model), {
          name: '/xl/workbook.xml'
        });
        resolve();
      });
    }
  }, {
    key: "_finalize",
    value: function _finalize() {
      var _this10 = this;
      return new Promise(function (resolve, reject) {
        _this10.stream.on('error', reject);
        _this10.stream.on('finish', function () {
          resolve(_this10);
        });
        _this10.zip.on('error', reject);
        _this10.zip.finalize();
      });
    }
  }]);
  return WorkbookWriter;
}();
module.exports = WorkbookWriter;
//# sourceMappingURL=workbook-writer.js.map
