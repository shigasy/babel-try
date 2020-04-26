"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

require("regenerator-runtime/runtime");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var hoge = function hoge() {
  console.log("babel-test");
};

var return1 = new Promise(function (resolve, reject) {
  if (1) {
    resolve(1);
  }

  reject(0);
});

var returnAsync = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!1) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", 'resolve');

          case 2:
            throw new Error('reject');

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function returnAsync() {
    return _ref.apply(this, arguments);
  };
}();

_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.t0 = console;
          _context2.next = 3;
          return return1;

        case 3:
          _context2.t1 = _context2.sent;

          _context2.t0.log.call(_context2.t0, _context2.t1);

          console.log(_typeof(return1));
          console.log(return1);
          console.log('--------------------------------------');
          _context2.t2 = console;
          _context2.next = 11;
          return returnAsync();

        case 11:
          _context2.t3 = _context2.sent;

          _context2.t2.log.call(_context2.t2, _context2.t3);

          returnAsync().then(function (value) {
            console.log({
              value: value
            });
            console.log('---');
          });
          _context2.t4 = console;
          _context2.next = 17;
          return returnAsync();

        case 17:
          _context2.t5 = _context2.sent;

          _context2.t4.log.call(_context2.t4, _context2.t5);

        case 19:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
}))();