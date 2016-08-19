(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("fs"), require("events"), require("http"), require("https"), require("url"), (function webpackLoadOptionalExternalModule() { try { return require("stream"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("crypto"); } catch(e) {} }()));
	else if(typeof define === 'function' && define.amd)
		define(["fs", "events", "http", "https", "url", "stream", "crypto"], factory);
	else if(typeof exports === 'object')
		exports["getsub-core"] = factory(require("fs"), require("events"), require("http"), require("https"), require("url"), (function webpackLoadOptionalExternalModule() { try { return require("stream"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("crypto"); } catch(e) {} }()));
	else
		root["getsub-core"] = factory(root["fs"], root["events"], root["http"], root["https"], root["url"], root["stream"], root["crypto"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_73__, __WEBPACK_EXTERNAL_MODULE_74__, __WEBPACK_EXTERNAL_MODULE_78__, __WEBPACK_EXTERNAL_MODULE_79__, __WEBPACK_EXTERNAL_MODULE_80__, __WEBPACK_EXTERNAL_MODULE_88__, __WEBPACK_EXTERNAL_MODULE_91__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.search = undefined;

	var _regenerator = __webpack_require__(1);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _asyncToGenerator2 = __webpack_require__(4);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	var _fuse = __webpack_require__(70);

	var _fuse2 = _interopRequireDefault(_fuse);

	var _opensubtitle = __webpack_require__(71);

	var _opensubtitle2 = _interopRequireDefault(_opensubtitle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Getsub Search API
	 *
	 * @param {Object} File object containing our file path and name
	 * @param {String} Search language filter
	 * @return {Object} Resulted search object (with subtitles list and origin names)
	 */
	/* API(s) */
	var search = exports.search = function () {
	  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(file, lang) {
	    var originName, subtitles, fuse;
	    return _regenerator2.default.wrap(function _callee$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            originName = file.name;
	            _context.next = 3;
	            return (0, _opensubtitle2.default)(originName, file.size, lang);

	          case 3:
	            subtitles = _context.sent;


	            /**
	             * We use Fuse (https://github.com/krisk/Fuse)
	             * to comparing the file name with our list of
	             * subtitles found.
	             *
	             * @return {Array} A new array sorted by score
	             */
	            fuse = new _fuse2.default(subtitles, {
	              caseSensitive: false,
	              includeScore: false,
	              shouldSort: true,
	              tokenize: false,
	              threshold: 0.6,
	              location: 0,
	              distance: 100,
	              maxPatternLength: originName.length + 8,
	              keys: ['fileName']
	            });
	            return _context.abrupt('return', {
	              subtitles: fuse.search(originName),
	              originLang: lang,
	              originName: originName
	            });

	          case 6:
	          case 'end':
	            return _context.stop();
	        }
	      }
	    }, _callee, undefined);
	  }));

	  return function search(_x, _x2) {
	    return _ref.apply(this, arguments);
	  };
	}();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g =
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this;

	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime &&
	  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;

	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;

	module.exports = __webpack_require__(3);

	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  try {
	    delete g.regeneratorRuntime;
	  } catch(e) {
	    g.regeneratorRuntime = undefined;
	  }
	}


/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */

	!(function(global) {
	  "use strict";

	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }

	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = Object.create((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  runtime.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function(arg) {
	    return new AwaitArgument(arg);
	  };

	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }

	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value instanceof AwaitArgument) {
	          return Promise.resolve(value.arg).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }

	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );

	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" ||
	              (method === "throw" && delegate.iterator[method] === undefined)) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;

	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }

	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }

	          var record = tryCatch(
	            delegate.iterator[method],
	            delegate.iterator,
	            arg
	          );

	          if (record.type === "throw") {
	            context.delegate = null;

	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }

	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;

	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }

	          context.delegate = null;
	        }

	        if (method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = arg;

	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }

	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }

	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          var info = {
	            value: record.arg,
	            done: context.done
	          };

	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[iteratorSymbol] = function() {
	    return this;
	  };

	  Gp[toStringTagSymbol] = "Generator";

	  Gp.toString = function() {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }

	      return ContinueSentinel;
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _promise = __webpack_require__(5);

	var _promise2 = _interopRequireDefault(_promise);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (fn) {
	  return function () {
	    var gen = fn.apply(this, arguments);
	    return new _promise2.default(function (resolve, reject) {
	      function step(key, arg) {
	        try {
	          var info = gen[key](arg);
	          var value = info.value;
	        } catch (error) {
	          reject(error);
	          return;
	        }

	        if (info.done) {
	          resolve(value);
	        } else {
	          return _promise2.default.resolve(value).then(function (value) {
	            return step("next", value);
	          }, function (err) {
	            return step("throw", err);
	          });
	        }
	      }

	      return step("next");
	    });
	  };
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(6), __esModule: true };

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(52);
	__webpack_require__(56);
	module.exports = __webpack_require__(16).Promise;

/***/ },
/* 7 */
/***/ function(module, exports) {

	

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(9)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(12)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(10)
	  , defined   = __webpack_require__(11);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(13)
	  , $export        = __webpack_require__(14)
	  , redefine       = __webpack_require__(29)
	  , hide           = __webpack_require__(19)
	  , has            = __webpack_require__(30)
	  , Iterators      = __webpack_require__(31)
	  , $iterCreate    = __webpack_require__(32)
	  , setToStringTag = __webpack_require__(48)
	  , getPrototypeOf = __webpack_require__(50)
	  , ITERATOR       = __webpack_require__(49)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(15)
	  , core      = __webpack_require__(16)
	  , ctx       = __webpack_require__(17)
	  , hide      = __webpack_require__(19)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 15 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 16 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(18);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(20)
	  , createDesc = __webpack_require__(28);
	module.exports = __webpack_require__(24) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(21)
	  , IE8_DOM_DEFINE = __webpack_require__(23)
	  , toPrimitive    = __webpack_require__(27)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(24) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(22);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(24) && !__webpack_require__(25)(function(){
	  return Object.defineProperty(__webpack_require__(26)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(25)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(22)
	  , document = __webpack_require__(15).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(22);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(19);

/***/ },
/* 30 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(33)
	  , descriptor     = __webpack_require__(28)
	  , setToStringTag = __webpack_require__(48)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(19)(IteratorPrototype, __webpack_require__(49)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(21)
	  , dPs         = __webpack_require__(34)
	  , enumBugKeys = __webpack_require__(46)
	  , IE_PROTO    = __webpack_require__(43)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(26)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(47).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(20)
	  , anObject = __webpack_require__(21)
	  , getKeys  = __webpack_require__(35);

	module.exports = __webpack_require__(24) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(36)
	  , enumBugKeys = __webpack_require__(46);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(30)
	  , toIObject    = __webpack_require__(37)
	  , arrayIndexOf = __webpack_require__(40)(false)
	  , IE_PROTO     = __webpack_require__(43)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(38)
	  , defined = __webpack_require__(11);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(39);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(37)
	  , toLength  = __webpack_require__(41)
	  , toIndex   = __webpack_require__(42);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(10)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(10)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(44)('keys')
	  , uid    = __webpack_require__(45);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(15)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(15).document && document.documentElement;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(20).f
	  , has = __webpack_require__(30)
	  , TAG = __webpack_require__(49)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(44)('wks')
	  , uid        = __webpack_require__(45)
	  , Symbol     = __webpack_require__(15).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(30)
	  , toObject    = __webpack_require__(51)
	  , IE_PROTO    = __webpack_require__(43)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(11);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(53);
	var global        = __webpack_require__(15)
	  , hide          = __webpack_require__(19)
	  , Iterators     = __webpack_require__(31)
	  , TO_STRING_TAG = __webpack_require__(49)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(54)
	  , step             = __webpack_require__(55)
	  , Iterators        = __webpack_require__(31)
	  , toIObject        = __webpack_require__(37);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(12)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(13)
	  , global             = __webpack_require__(15)
	  , ctx                = __webpack_require__(17)
	  , classof            = __webpack_require__(57)
	  , $export            = __webpack_require__(14)
	  , isObject           = __webpack_require__(22)
	  , aFunction          = __webpack_require__(18)
	  , anInstance         = __webpack_require__(58)
	  , forOf              = __webpack_require__(59)
	  , speciesConstructor = __webpack_require__(63)
	  , task               = __webpack_require__(64).set
	  , microtask          = __webpack_require__(66)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;

	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(49)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();

	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};

	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(67)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(48)($Promise, PROMISE);
	__webpack_require__(68)(PROMISE);
	Wrapper = __webpack_require__(16)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(69)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(39)
	  , TAG = __webpack_require__(49)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(17)
	  , call        = __webpack_require__(60)
	  , isArrayIter = __webpack_require__(61)
	  , anObject    = __webpack_require__(21)
	  , toLength    = __webpack_require__(41)
	  , getIterFn   = __webpack_require__(62)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(21);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(31)
	  , ITERATOR   = __webpack_require__(49)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(57)
	  , ITERATOR  = __webpack_require__(49)('iterator')
	  , Iterators = __webpack_require__(31);
	module.exports = __webpack_require__(16).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(21)
	  , aFunction = __webpack_require__(18)
	  , SPECIES   = __webpack_require__(49)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(17)
	  , invoke             = __webpack_require__(65)
	  , html               = __webpack_require__(47)
	  , cel                = __webpack_require__(26)
	  , global             = __webpack_require__(15)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(39)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 65 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(15)
	  , macrotask = __webpack_require__(64).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(39)(process) == 'process';

	module.exports = function(){
	  var head, last, notify;

	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };

	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }

	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(19);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(15)
	  , core        = __webpack_require__(16)
	  , dP          = __webpack_require__(20)
	  , DESCRIPTORS = __webpack_require__(24)
	  , SPECIES     = __webpack_require__(49)('species');

	module.exports = function(KEY){
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(49)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Fuse - Lightweight fuzzy-search
	 *
	 * Copyright (c) 2012-2016 Kirollos Risk <kirollos@gmail.com>.
	 * All Rights Reserved. Apache Software License 2.0
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License")
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	;(function (global) {
	  'use strict'

	  function log () {
	    console.log.apply(console, arguments)
	  }

	  var defaultOptions = {
	    // The name of the identifier property. If specified, the returned result will be a list
	    // of the items' dentifiers, otherwise it will be a list of the items.
	    id: null,

	    // Indicates whether comparisons should be case sensitive.

	    caseSensitive: false,

	    // An array of values that should be included from the searcher's output. When this array
	    // contains elements, each result in the list will be of the form `{ item: ..., include1: ..., include2: ... }`.
	    // Values you can include are `score`, `matchedLocations`
	    include: [],

	    // Whether to sort the result list, by score
	    shouldSort: true,

	    // The search function to use
	    // Note that the default search function ([[Function]]) must conform to the following API:
	    //
	    //  @param pattern The pattern string to search
	    //  @param options The search option
	    //  [[Function]].constructor = function(pattern, options)
	    //
	    //  @param text: the string to search in for the pattern
	    //  @return Object in the form of:
	    //    - isMatch: boolean
	    //    - score: Int
	    //  [[Function]].prototype.search = function(text)
	    searchFn: BitapSearcher,

	    // Default sort function
	    sortFn: function (a, b) {
	      return a.score - b.score
	    },

	    // The get function to use when fetching an object's properties.
	    // The default will search nested paths *ie foo.bar.baz*
	    getFn: deepValue,

	    // List of properties that will be searched. This also supports nested properties.
	    keys: [],

	    // Will print to the console. Useful for debugging.
	    verbose: false,

	    // When true, the search algorithm will search individual words **and** the full string,
	    // computing the final score as a function of both. Note that when `tokenize` is `true`,
	    // the `threshold`, `distance`, and `location` are inconsequential for individual tokens.
	    tokenize: false,

	    // Regex used to separate words when searching. Only applicable when `tokenize` is `true`.
	    tokenSeparator: / +/g
	  }

	  function Fuse (list, options) {
	    var i
	    var len
	    var key
	    var keys

	    this.list = list
	    this.options = options = options || {}

	    // Add boolean type options
	    for (i = 0, keys = ['sort', 'shouldSort', 'verbose', 'tokenize'], len = keys.length; i < len; i++) {
	      key = keys[i]
	      this.options[key] = key in options ? options[key] : defaultOptions[key]
	    }
	    // Add all other options
	    for (i = 0, keys = ['searchFn', 'sortFn', 'keys', 'getFn', 'include', 'tokenSeparator'], len = keys.length; i < len; i++) {
	      key = keys[i]
	      this.options[key] = options[key] || defaultOptions[key]
	    }
	  }

	  Fuse.VERSION = '2.4.1'

	  /**
	   * Sets a new list for Fuse to match against.
	   * @param {Array} list
	   * @return {Array} The newly set list
	   * @public
	   */
	  Fuse.prototype.set = function (list) {
	    this.list = list
	    return list
	  }

	  Fuse.prototype.search = function (pattern) {
	    if (this.options.verbose) log('\nSearch term:', pattern, '\n')

	    this.pattern = pattern
	    this.results = []
	    this.resultMap = {}
	    this._keyMap = null

	    this._prepareSearchers()
	    this._startSearch()
	    this._computeScore()
	    this._sort()

	    var output = this._format()
	    return output
	  }

	  Fuse.prototype._prepareSearchers = function () {
	    var options = this.options
	    var pattern = this.pattern
	    var searchFn = options.searchFn
	    var tokens = pattern.split(options.tokenSeparator)
	    var i = 0
	    var len = tokens.length

	    if (this.options.tokenize) {
	      this.tokenSearchers = []
	      for (; i < len; i++) {
	        this.tokenSearchers.push(new searchFn(tokens[i], options))
	      }
	    }
	    this.fullSeacher = new searchFn(pattern, options)
	  }

	  Fuse.prototype._startSearch = function () {
	    var options = this.options
	    var getFn = options.getFn
	    var list = this.list
	    var listLen = list.length
	    var keys = this.options.keys
	    var keysLen = keys.length
	    var key
	    var weight
	    var item = null
	    var i
	    var j

	    // Check the first item in the list, if it's a string, then we assume
	    // that every item in the list is also a string, and thus it's a flattened array.
	    if (typeof list[0] === 'string') {
	      // Iterate over every item
	      for (i = 0; i < listLen; i++) {
	        this._analyze('', list[i], i, i)
	      }
	    } else {
	      this._keyMap = {}
	      // Otherwise, the first item is an Object (hopefully), and thus the searching
	      // is done on the values of the keys of each item.
	      // Iterate over every item
	      for (i = 0; i < listLen; i++) {
	        item = list[i]
	        // Iterate over every key
	        for (j = 0; j < keysLen; j++) {
	          key = keys[j]
	          if (typeof key !== 'string') {
	            weight = (1 - key.weight) || 1
	            this._keyMap[key.name] = {
	              weight: weight
	            }
	            if (key.weight <= 0 || key.weight > 1) {
	              throw new Error('Key weight has to be > 0 and <= 1')
	            }
	            key = key.name
	          } else {
	            this._keyMap[key] = {
	              weight: 1
	            }
	          }
	          this._analyze(key, getFn(item, key, []), item, i)
	        }
	      }
	    }
	  }

	  Fuse.prototype._analyze = function (key, text, entity, index) {
	    var options = this.options
	    var words
	    var scores
	    var exists = false
	    var existingResult
	    var averageScore
	    var finalScore
	    var scoresLen
	    var mainSearchResult
	    var tokenSearcher
	    var termScores
	    var word
	    var tokenSearchResult
	    var i
	    var j

	    // Check if the text can be searched
	    if (text === undefined || text === null) {
	      return
	    }

	    scores = []

	    if (typeof text === 'string') {
	      words = text.split(options.tokenSeparator)

	      if (options.verbose) log('---------\nKey:', key)

	      if (this.options.tokenize) {
	        for (i = 0; i < this.tokenSearchers.length; i++) {
	          tokenSearcher = this.tokenSearchers[i]

	          if (options.verbose) log('Pattern:', tokenSearcher.pattern)

	          termScores = []
	          for (j = 0; j < words.length; j++) {
	            word = words[j]
	            tokenSearchResult = tokenSearcher.search(word)
	            var obj = {}
	            if (tokenSearchResult.isMatch) {
	              obj[word] = tokenSearchResult.score
	              exists = true
	              scores.push(tokenSearchResult.score)
	            } else {
	              obj[word] = 1
	              scores.push(1)
	            }
	            termScores.push(obj)
	          }
	          if (options.verbose) log('Token scores:', termScores)
	        }

	        averageScore = scores[0]
	        scoresLen = scores.length
	        for (i = 1; i < scoresLen; i++) {
	          averageScore += scores[i]
	        }
	        averageScore = averageScore / scoresLen

	        if (options.verbose) log('Token score average:', averageScore)
	      }

	      mainSearchResult = this.fullSeacher.search(text)
	      if (options.verbose) log('Full text score:', mainSearchResult.score)

	      finalScore = mainSearchResult.score
	      if (averageScore !== undefined) {
	        finalScore = (finalScore + averageScore) / 2
	      }

	      if (options.verbose) log('Score average:', finalScore)

	      // If a match is found, add the item to <rawResults>, including its score
	      if (exists || mainSearchResult.isMatch) {
	        // Check if the item already exists in our results
	        existingResult = this.resultMap[index]

	        if (existingResult) {
	          // Use the lowest score
	          // existingResult.score, bitapResult.score
	          existingResult.output.push({
	            key: key,
	            score: finalScore,
	            matchedIndices: mainSearchResult.matchedIndices
	          })
	        } else {
	          // Add it to the raw result list
	          this.resultMap[index] = {
	            item: entity,
	            output: [{
	              key: key,
	              score: finalScore,
	              matchedIndices: mainSearchResult.matchedIndices
	            }]
	          }

	          this.results.push(this.resultMap[index])
	        }
	      }
	    } else if (isArray(text)) {
	      for (i = 0; i < text.length; i++) {
	        this._analyze(key, text[i], entity, index)
	      }
	    }
	  }

	  Fuse.prototype._computeScore = function () {
	    var i
	    var j
	    var keyMap = this._keyMap
	    var totalScore
	    var output
	    var scoreLen
	    var score
	    var weight
	    var results = this.results
	    var bestScore
	    var nScore

	    if (this.options.verbose) log('\n\nComputing score:\n')

	    for (i = 0; i < results.length; i++) {
	      totalScore = 0
	      output = results[i].output
	      scoreLen = output.length

	      bestScore = 1

	      for (j = 0; j < scoreLen; j++) {
	        score = output[j].score
	        weight = keyMap ? keyMap[output[j].key].weight : 1

	        nScore = score * weight

	        if (weight !== 1) {
	          bestScore = Math.min(bestScore, nScore)
	        } else {
	          totalScore += nScore
	          output[j].nScore = nScore
	        }
	      }

	      if (bestScore === 1) {
	        results[i].score = totalScore / scoreLen
	      } else {
	        results[i].score = bestScore
	      }

	      if (this.options.verbose) log(results[i])
	    }
	  }

	  Fuse.prototype._sort = function () {
	    var options = this.options
	    if (options.shouldSort) {
	      if (options.verbose) log('\n\nSorting....')
	      this.results.sort(options.sortFn)
	    }
	  }

	  Fuse.prototype._format = function () {
	    var options = this.options
	    var getFn = options.getFn
	    var finalOutput = []
	    var item
	    var i
	    var len
	    var results = this.results
	    var replaceValue
	    var getItemAtIndex
	    var include = options.include

	    if (options.verbose) log('\n\nOutput:\n\n', results)

	    // Helper function, here for speed-up, which replaces the item with its value,
	    // if the options specifies it,
	    replaceValue = options.id ? function (index) {
	      results[index].item = getFn(results[index].item, options.id, [])[0]
	    } : function () {}

	    getItemAtIndex = function (index) {
	      var record = results[index]
	      var data
	      var j
	      var output
	      var _item
	      var _result

	      // If `include` has values, put the item in the result
	      if (include.length > 0) {
	        data = {
	          item: record.item
	        }
	        if (include.indexOf('matches') !== -1) {
	          output = record.output
	          data.matches = []
	          for (j = 0; j < output.length; j++) {
	            _item = output[j]
	            _result = {
	              indices: _item.matchedIndices
	            }
	            if (_item.key) {
	              _result.key = _item.key
	            }
	            data.matches.push(_result)
	          }
	        }

	        if (include.indexOf('score') !== -1) {
	          data.score = results[index].score
	        }

	      } else {
	        data = record.item
	      }

	      return data
	    }

	    // From the results, push into a new array only the item identifier (if specified)
	    // of the entire item.  This is because we don't want to return the <results>,
	    // since it contains other metadata
	    for (i = 0, len = results.length; i < len; i++) {
	      replaceValue(i)
	      item = getItemAtIndex(i)
	      finalOutput.push(item)
	    }

	    return finalOutput
	  }

	  // Helpers

	  function deepValue (obj, path, list) {
	    var firstSegment
	    var remaining
	    var dotIndex
	    var value
	    var i
	    var len

	    if (!path) {
	      // If there's no path left, we've gotten to the object we care about.
	      list.push(obj)
	    } else {
	      dotIndex = path.indexOf('.')

	      if (dotIndex !== -1) {
	        firstSegment = path.slice(0, dotIndex)
	        remaining = path.slice(dotIndex + 1)
	      } else {
	        firstSegment = path
	      }

	      value = obj[firstSegment]
	      if (value !== null && value !== undefined) {
	        if (!remaining && (typeof value === 'string' || typeof value === 'number')) {
	          list.push(value)
	        } else if (isArray(value)) {
	          // Search each item in the array.
	          for (i = 0, len = value.length; i < len; i++) {
	            deepValue(value[i], remaining, list)
	          }
	        } else if (remaining) {
	          // An object. Recurse further.
	          deepValue(value, remaining, list)
	        }
	      }
	    }

	    return list
	  }

	  function isArray (obj) {
	    return Object.prototype.toString.call(obj) === '[object Array]'
	  }

	  /**
	   * Adapted from "Diff, Match and Patch", by Google
	   *
	   *   http://code.google.com/p/google-diff-match-patch/
	   *
	   * Modified by: Kirollos Risk <kirollos@gmail.com>
	   * -----------------------------------------------
	   * Details: the algorithm and structure was modified to allow the creation of
	   * <Searcher> instances with a <search> method which does the actual
	   * bitap search. The <pattern> (the string that is searched for) is only defined
	   * once per instance and thus it eliminates redundant re-creation when searching
	   * over a list of strings.
	   *
	   * Licensed under the Apache License, Version 2.0 (the "License")
	   * you may not use this file except in compliance with the License.
	   */
	  function BitapSearcher (pattern, options) {
	    options = options || {}
	    this.options = options
	    this.options.location = options.location || BitapSearcher.defaultOptions.location
	    this.options.distance = 'distance' in options ? options.distance : BitapSearcher.defaultOptions.distance
	    this.options.threshold = 'threshold' in options ? options.threshold : BitapSearcher.defaultOptions.threshold
	    this.options.maxPatternLength = options.maxPatternLength || BitapSearcher.defaultOptions.maxPatternLength

	    this.pattern = options.caseSensitive ? pattern : pattern.toLowerCase()
	    this.patternLen = pattern.length

	    if (this.patternLen <= this.options.maxPatternLength) {
	      this.matchmask = 1 << (this.patternLen - 1)
	      this.patternAlphabet = this._calculatePatternAlphabet()
	    }
	  }

	  BitapSearcher.defaultOptions = {
	    // Approximately where in the text is the pattern expected to be found?
	    location: 0,

	    // Determines how close the match must be to the fuzzy location (specified above).
	    // An exact letter match which is 'distance' characters away from the fuzzy location
	    // would score as a complete mismatch. A distance of '0' requires the match be at
	    // the exact location specified, a threshold of '1000' would require a perfect match
	    // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
	    distance: 100,

	    // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
	    // (of both letters and location), a threshold of '1.0' would match anything.
	    threshold: 0.6,

	    // Machine word size
	    maxPatternLength: 32
	  }

	  /**
	   * Initialize the alphabet for the Bitap algorithm.
	   * @return {Object} Hash of character locations.
	   * @private
	   */
	  BitapSearcher.prototype._calculatePatternAlphabet = function () {
	    var mask = {},
	      i = 0

	    for (i = 0; i < this.patternLen; i++) {
	      mask[this.pattern.charAt(i)] = 0
	    }

	    for (i = 0; i < this.patternLen; i++) {
	      mask[this.pattern.charAt(i)] |= 1 << (this.pattern.length - i - 1)
	    }

	    return mask
	  }

	  /**
	   * Compute and return the score for a match with `e` errors and `x` location.
	   * @param {number} errors Number of errors in match.
	   * @param {number} location Location of match.
	   * @return {number} Overall score for match (0.0 = good, 1.0 = bad).
	   * @private
	   */
	  BitapSearcher.prototype._bitapScore = function (errors, location) {
	    var accuracy = errors / this.patternLen,
	      proximity = Math.abs(this.options.location - location)

	    if (!this.options.distance) {
	      // Dodge divide by zero error.
	      return proximity ? 1.0 : accuracy
	    }
	    return accuracy + (proximity / this.options.distance)
	  }

	  /**
	   * Compute and return the result of the search
	   * @param {String} text The text to search in
	   * @return {Object} Literal containing:
	   *                          {Boolean} isMatch Whether the text is a match or not
	   *                          {Decimal} score Overall score for the match
	   * @public
	   */
	  BitapSearcher.prototype.search = function (text) {
	    var options = this.options
	    var i
	    var j
	    var textLen
	    var location
	    var threshold
	    var bestLoc
	    var binMin
	    var binMid
	    var binMax
	    var start, finish
	    var bitArr
	    var lastBitArr
	    var charMatch
	    var score
	    var locations
	    var matches
	    var isMatched
	    var matchMask
	    var matchedIndices
	    var matchesLen
	    var match

	    text = options.caseSensitive ? text : text.toLowerCase()

	    if (this.pattern === text) {
	      // Exact match
	      return {
	        isMatch: true,
	        score: 0,
	        matchedIndices: [[0, text.length - 1]]
	      }
	    }

	    // When pattern length is greater than the machine word length, just do a a regex comparison
	    if (this.patternLen > options.maxPatternLength) {
	      matches = text.match(new RegExp(this.pattern.replace(options.tokenSeparator, '|')))
	      isMatched = !!matches

	      if (isMatched) {
	        matchedIndices = []
	        for (i = 0, matchesLen = matches.length; i < matchesLen; i++) {
	          match = matches[i]
	          matchedIndices.push([text.indexOf(match), match.length - 1])
	        }
	      }

	      return {
	        isMatch: isMatched,
	        // TODO: revisit this score
	        score: isMatched ? 0.5 : 1,
	        matchedIndices: matchedIndices
	      }
	    }

	    location = options.location
	    // Set starting location at beginning text and initialize the alphabet.
	    textLen = text.length
	    // Highest score beyond which we give up.
	    threshold = options.threshold
	    // Is there a nearby exact match? (speedup)
	    bestLoc = text.indexOf(this.pattern, location)

	    // a mask of the matches
	    matchMask = []
	    for (i = 0; i < textLen; i++) {
	      matchMask[i] = 0
	    }

	    if (bestLoc != -1) {
	      threshold = Math.min(this._bitapScore(0, bestLoc), threshold)
	      // What about in the other direction? (speed up)
	      bestLoc = text.lastIndexOf(this.pattern, location + this.patternLen)

	      if (bestLoc != -1) {
	        threshold = Math.min(this._bitapScore(0, bestLoc), threshold)
	      }
	    }

	    bestLoc = -1
	    score = 1
	    locations = []
	    binMax = this.patternLen + textLen

	    for (i = 0; i < this.patternLen; i++) {
	      // Scan for the best match; each iteration allows for one more error.
	      // Run a binary search to determine how far from the match location we can stray
	      // at this error level.
	      binMin = 0
	      binMid = binMax
	      while (binMin < binMid) {
	        if (this._bitapScore(i, location + binMid) <= threshold) {
	          binMin = binMid
	        } else {
	          binMax = binMid
	        }
	        binMid = Math.floor((binMax - binMin) / 2 + binMin)
	      }

	      // Use the result from this iteration as the maximum for the next.
	      binMax = binMid
	      start = Math.max(1, location - binMid + 1)
	      finish = Math.min(location + binMid, textLen) + this.patternLen

	      // Initialize the bit array
	      bitArr = Array(finish + 2)

	      bitArr[finish + 1] = (1 << i) - 1

	      for (j = finish; j >= start; j--) {
	        charMatch = this.patternAlphabet[text.charAt(j - 1)]

	        if (charMatch) {
	          matchMask[j - 1] = 1
	        }

	        if (i === 0) {
	          // First pass: exact match.
	          bitArr[j] = ((bitArr[j + 1] << 1) | 1) & charMatch
	        } else {
	          // Subsequent passes: fuzzy match.
	          bitArr[j] = ((bitArr[j + 1] << 1) | 1) & charMatch | (((lastBitArr[j + 1] | lastBitArr[j]) << 1) | 1) | lastBitArr[j + 1]
	        }
	        if (bitArr[j] & this.matchmask) {
	          score = this._bitapScore(i, j - 1)

	          // This match will almost certainly be better than any existing match.
	          // But check anyway.
	          if (score <= threshold) {
	            // Indeed it is
	            threshold = score
	            bestLoc = j - 1
	            locations.push(bestLoc)

	            if (bestLoc > location) {
	              // When passing loc, don't exceed our current distance from loc.
	              start = Math.max(1, 2 * location - bestLoc)
	            } else {
	              // Already passed loc, downhill from here on in.
	              break
	            }
	          }
	        }
	      }

	      // No hope for a (better) match at greater error levels.
	      if (this._bitapScore(i + 1, location) > threshold) {
	        break
	      }
	      lastBitArr = bitArr
	    }

	    matchedIndices = this._getMatchedIndices(matchMask)

	    // Count exact matches (those with a score of 0) to be "almost" exact
	    return {
	      isMatch: bestLoc >= 0,
	      score: score === 0 ? 0.001 : score,
	      matchedIndices: matchedIndices
	    }
	  }

	  BitapSearcher.prototype._getMatchedIndices = function (matchMask) {
	    var matchedIndices = []
	    var start = -1
	    var end = -1
	    var i = 0
	    var match
	    var len = matchMask.length
	    for (; i < len; i++) {
	      match = matchMask[i]
	      if (match && start === -1) {
	        start = i
	      } else if (!match && start !== -1) {
	        end = i - 1
	        matchedIndices.push([start, end])
	        start = -1
	      }
	    }
	    if (matchMask[i - 1]) {
	      matchedIndices.push([start, i - 1])
	    }
	    return matchedIndices
	  }

	  // Export to Common JS Loader
	  if (true) {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like environments that support module.exports,
	    // like Node.
	    module.exports = Fuse
	  } else if (typeof define === 'function' && define.amd) {
	    // AMD. Register as an anonymous module.
	    define(function () {
	      return Fuse
	    })
	  } else {
	    // Browser globals (root is window)
	    global.Fuse = Fuse
	  }

	})(this)


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _regenerator = __webpack_require__(1);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _asyncToGenerator2 = __webpack_require__(4);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	var _opensubtitles = __webpack_require__(72);

	var _opensubtitles2 = _interopRequireDefault(_opensubtitles);

	var _nodeUuid = __webpack_require__(90);

	var _nodeUuid2 = _interopRequireDefault(_nodeUuid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var os = new _opensubtitles2.default();

	/**
	 * Init function
	 *
	 * @param {String} Filename
	 * @param {Int} File's size
	 * @param {String} Search language filter
	 * @return {Array} List of subtitles
	 */

	exports.default = function () {
	  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(name, size, lang) {
	    var movieHash, token, query, subtitles;
	    return _regenerator2.default.wrap(function _callee$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            _context.next = 2;
	            return checkMovieHash([size]);

	          case 2:
	            movieHash = _context.sent;
	            _context.next = 5;
	            return login();

	          case 5:
	            token = _context.sent;
	            query = [{ sublanguageid: lang, query: name }];
	            _context.next = 9;
	            return searchSubtitles(token, query);

	          case 9:
	            _context.t0 = function (subtitle) {
	              return subtitle.SubDownloadLink && subtitle.IDSubtitleFile && subtitle.SubFileName && subtitle.MovieReleaseName;
	            };

	            _context.t1 = function (subtitle) {
	              /* we want to remove .zip ext to directly download .srt */
	              var downloadLink = subtitle.SubDownloadLink;
	              downloadLink = downloadLink.substring(0, downloadLink.length - 3);

	              return {
	                provider: 'opensubtitle',
	                id: _nodeUuid2.default.v4(),
	                subtitleName: subtitle.SubFileName,
	                fileName: subtitle.MovieReleaseName,
	                downloadLink: downloadLink
	              };
	            };

	            subtitles = _context.sent.filter(_context.t0).map(_context.t1);
	            return _context.abrupt('return', subtitles);

	          case 13:
	          case 'end':
	            return _context.stop();
	        }
	      }
	    }, _callee, undefined);
	  }));

	  return function (_x, _x2, _x3) {
	    return _ref.apply(this, arguments);
	  };
	}();

	/**
	 * Bind opensubtitles checkMovieHash method
	 *
	 * @param {Array} Array of files size
	 * @return {Array} Array of object with file infos
	 */


	var checkMovieHash = function () {
	  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(sizes) {
	    return _regenerator2.default.wrap(function _callee2$(_context2) {
	      while (1) {
	        switch (_context2.prev = _context2.next) {
	          case 0:
	            _context2.next = 2;
	            return new Promise(function (resolve, reject) {
	              os.checkMovieHash(sizes, function (err, res) {
	                if (err) reject(err);else resolve(res.data);
	              });
	            });

	          case 2:
	            return _context2.abrupt('return', _context2.sent);

	          case 3:
	          case 'end':
	            return _context2.stop();
	        }
	      }
	    }, _callee2, undefined);
	  }));

	  return function checkMovieHash(_x4) {
	    return _ref2.apply(this, arguments);
	  };
	}();

	/**
	 * Bind opensubtitles login method
	 * With filtered response (only Token)
	 *
	 * @return {String} Token is returned
	 */
	var login = function () {
	  var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
	    return _regenerator2.default.wrap(function _callee3$(_context3) {
	      while (1) {
	        switch (_context3.prev = _context3.next) {
	          case 0:
	            return _context3.abrupt('return', new Promise(function (resolve, reject) {
	              os.api.LogIn(function (err, res) {
	                if (err) reject(err);else resolve(res.token);
	              }, null, null, null, 'OSTestUserAgent');
	            }));

	          case 1:
	          case 'end':
	            return _context3.stop();
	        }
	      }
	    }, _callee3, undefined);
	  }));

	  return function login() {
	    return _ref3.apply(this, arguments);
	  };
	}();

	/**
	 * Bind opensubtitles search for subtitles method
	 *
	 * @param {String} Token
	 * @param {Array} Query (see http://bit.ly/22B0NX4)
	 * @return {Array} List of subtitle objects
	 */
	var searchSubtitles = function () {
	  var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(token, query) {
	    return _regenerator2.default.wrap(function _callee4$(_context4) {
	      while (1) {
	        switch (_context4.prev = _context4.next) {
	          case 0:
	            return _context4.abrupt('return', new Promise(function (resolve, reject) {
	              os.api.SearchSubtitles(function (err, res) {
	                if (err) reject(err);else resolve(res.data);
	              }, token, query);
	            }));

	          case 1:
	          case 'end':
	            return _context4.stop();
	        }
	      }
	    }, _callee4, undefined);
	  }));

	  return function searchSubtitles(_x5, _x6) {
	    return _ref4.apply(this, arguments);
	  };
	}();

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var fs = __webpack_require__(73),
		ee = __webpack_require__(74).EventEmitter,
		Api = __webpack_require__(75);


	var os = module.exports = function(user, password, lang, ua) {

		this.api = new Api();
		this.user = user;
		this.password = password;
		this.lang = lang ? lang : 'en';
		this.ua = ua ? ua : 'NodeOpensubtitles v0.0.1';
	};

	os.prototype.__proto__ = ee.prototype;


	// http://api.opensubtitles.org/xml-rpc


	os.prototype.checkMovieHash = function(t_hash, cb) {
		var self = this;
		this.api.LogIn(function(err, res) {
			if(err) return cb(err);

			var token = res.token;
			self.api.CheckMovieHash(function(err, res){

				if(err) return cb(err);

				cb(null, res);
			},token, t_hash);
		}, this.user, this.password, this.lang, this.ua);
	};

	os.prototype.computeHash = function(path, cb) {
		// get file size
		// get first 64kb
		// get last 64kb
		// summup everything

		var chunk_size = 65536;
		var buf_start = new Buffer(chunk_size*2);
		var buf_end = new Buffer(chunk_size*2);
		var file_size = 0;
		var self = this;
		var t_chksum = [];
	  
	  function checksumReady(chksum_part, name) {
	    self.emit('checksum-ready', chksum_part, name);

	    t_chksum.push(chksum_part);
	    if(t_chksum.length == 3) {
	      var chksum = self.sumHex64bits(t_chksum[0], t_chksum[1]);
	      chksum = self.sumHex64bits(chksum, t_chksum[2]);
	      chksum = chksum.substr(-16);
	      cb(null, self.padLeft(chksum, '0', 16));
	    }
	  }
	  

		fs.stat(path, function(err, stat) {
			if(err) return cb(err);

			file_size = stat.size;
	    
	    checksumReady(file_size.toString(16), "filesize");

			fs.open(path, 'r', function(err, fd) {
				if(err) {
					return cb(err);
				}

				var t_buffers = [{buf:buf_start, offset:0}, {buf:buf_end, offset:file_size-chunk_size}];
				for(var i in t_buffers) {
					fs.read(fd, t_buffers[i].buf, 0, chunk_size*2, t_buffers[i].offset, function(err, bytesRead, buffer) {
						if(err) return cb(err);
	          checksumReady(self.checksumBuffer(buffer, 16), "buf?");
					});
				}
			});
		});
	};


	/**
	 * read 64 bits from buffer starting at offset as LITTLE ENDIAN hex
	 *
	 * @param buffer
	 * @param offset
	 * @return {String}
	 */
	os.prototype.read64LE = function(buffer, offset) {
		var ret_64_be = buffer.toString('hex', offset*8, ((offset+1)*8));
		var t = [];
		for(var i=0; i<8; i++) {
			t.push(ret_64_be.substr(i*2, 2));
		}
		t.reverse();
		return t.join('');
	};


	/**
	 * compute checksum of the buffer splitting by chunk of lengths bits
	 *
	 * @param buf
	 * @param length
	 */
	os.prototype.checksumBuffer = function(buf, length) {
		var checksum = 0, checksum_hex = 0;
		for(var i=0; i<(buf.length/length); i++) {
			checksum_hex = this.read64LE(buf, i);
			checksum = this.sumHex64bits(checksum.toString(), checksum_hex).substr(-16);
			//console.log("hash#"+i+" "+checksum_hex+" => "+checksum);
		}
		//console.log("chck sum : "+checksum);
		return checksum;
	};

	/**
	 * calculate hex sum between 2 64bits hex numbers
	 *
	 * @param n1
	 * @param n2
	 * @return {String}
	 */
	os.prototype.sumHex64bits = function(n1, n2) {

		if(n1.length < 16) n1 = this.padLeft(n1, '0', 16);
		if(n2.length < 16) n2 = this.padLeft(n2, '0', 16);

		//console.log("n1 "+n1);
		//console.log("n2 "+n2);

		// 1st 32 bits
		var n1_0 = n1.substr(0, 8);
		var n2_0 = n2.substr(0, 8);
		var i_0 = parseInt(n1_0, 16) + parseInt(n2_0, 16);

		// 2nd 32 bits
		var n1_1 = n1.substr(8, 8);
		var n2_1 = n2.substr(8, 8);
		var i_1 = parseInt(n1_1, 16) + parseInt(n2_1, 16);

		// back to hex
		var h_1 = i_1.toString(16);
		//console.log('i'+i_1);
		//console.log('x'+h_1);
		//console.log(h_1.length);
		var i_1_over = 0;
		if(h_1.length > 8) {
			//console.log('retenue');
			i_1_over = parseInt(h_1.substr(0, h_1.length - 8), 16);
		} else {
			h_1 = this.padLeft(h_1, '0', 8);
		}

		var h_0 = (i_1_over + i_0).toString(16);

		//console.log(h_0+' | '+h_1);
		return h_0 + h_1.substr(-8);
	};

	/**
	 * pad left with c up to length characters
	 *
	 * @param str
	 * @param c
	 * @param length
	 * @return {*}
	 */
	os.prototype.padLeft = function(str, c, length) {
		while(str.length < length) {
			str = c.toString() + str;
		}
		return str;
	};

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = require("events");

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * User: seb
	 * Date: 10/5/12
	 * Time: 5:15 PM
	 * To change this template use File | Settings | File Templates.
	 */
	var xmlrpc = __webpack_require__(76);

	var ep = module.exports = function() {

		this.clientOptions = 'http://api.opensubtitles.org/xml-rpc';
		this.client = xmlrpc.createClient(this.clientOptions);

		/*
		var def = "<strong>array LogIn( $username, $password, $language, $useragent )</strong>"+
		"<strong>string LogOut( $token )</strong>"+
		"<strong>array SearchSubtitles( $token, array(array('sublanguageid' =&gt; $sublanguageid, 'moviehash' =&gt; $moviehash, 'moviebytesize' =&gt; $moviesize, <em>imdbid =&gt; $imdbid</em>, <em>query</em> =&gt; 'movie name', 'season' =&gt; 'season number', 'episode' =&gt; 'episode number', 'tag' =&gt; tag ),array(...)))</strong>"+
		"<strong>array SearchToMail( $token, array( $sublanguageid, $sublanguageid, ...), array( array( 'moviehash' =&gt; $moviehash, 'moviesize' =&gt; $moviesize), array( 'moviehash' =&gt; $moviehash, 'moviesize' =&gt; $moviesize), ...) )</strong>"+
		"<strong>array CheckSubHash( $token, array($subhash, $subhash, ...) )</strong>"+
		"<strong>array CheckMovieHash( $token, array($moviehash, $moviehash, ...) )</strong>"+
		"<strong>array CheckMovieHash2( $token, array($moviehash, $moviehash, ...) )</strong>"+
		"<strong>array InsertMovieHash( $token, array( array('moviehash' =&gt; $moviehash, 'moviebytesize' =&gt; $moviebytesize, 'imdbid' =&gt; $imdbid, 'movietimems' =&gt; $movietimems, 'moviefps' =&gt; $moviefps, 'moviefilename' =&gt; $moviefilename), array(...) ) )</strong>"+
		"<strong>array TryUploadSubtitles( $token, array('cd1' =&gt; array('subhash' =&gt; $submd5hash, 'subfilename' =&gt; $subfilename, 'moviehash' =&gt; $moviehash, 'moviebytesize' =&gt; $moviesize, 'movietimems' =&gt; $movietimems, 'movieframes' =&gt; $movieframes, 'moviefps' =&gt; $moviefps, 'moviefilename' =&gt; $moviefilename), 'cd2' =&gt; array(...) ) )</strong>"+
		"<strong>array UploadSubtitles( $token,array( 'baseinfo' =&gt; array ( 'idmovieimdb' =&gt; $idmovieimdb, 'moviereleasename' =&gt; $scene_releasename, 'movieaka' =&gt; $aka_in_subtitle_language, 'sublanguageid' =&gt; $sublanguageid, 'subauthorcomment' =&gt; $author_comment, 'hearingimpaired' =&gt; $hearing_impaired, 'highdefinition' =&gt; $high_definition, 'automatictranslation' =&gt; $automatic_translation), 'cd1' =&gt; array( 'subhash' =&gt; $md5subhash, 'subfilename' =&gt; $subfilename, 'moviehash' =&gt; $moviehash, 'moviebytesize' =&gt; $moviebytesize, 'movietimems' =&gt; $movietimems, 'moviefps' =&gt; $moviefps, 'movieframes' =&gt; $movieframes, 'moviefilename' =&gt; $moviefilename, 'subcontent' =&gt; $subtitlecontent ), 'cd2' =&gt; array (...) ) )</strong>"+
		"<strong>array DetectLanguage( $token, array($text, $text, ...) )</strong>"+
		"<strong>array DownloadSubtitles( $token, array($IDSubtitleFile, $IDSubtitleFile,...) )</strong>"+
		"<strong>array ReportWrongMovieHash( $token, $IDSubMovieFile )</strong>"+
		"<strong>array ReportWrongImdbMovie( $token, array('moviehash' =&gt; $moviehash, 'moviebytesize' =&gt; $moviebytesize, 'imdbid' =&gt; $imdbid )</strong>"+
		"<strong>array GetSubLanguages( $language = 'en' )</strong>"+
		"<strong>array GetAvailableTranslations( $token, $program )</strong>"+
		"<strong>array GetTranslation( $token, $iso639, $format, $program )</strong>"+
		"<strong>array SearchMoviesOnIMDB( $token, $query )</strong>"+
		"<strong>array GetIMDBMovieDetails( $token, $imdbid )</strong>"+
		"<strong>array InsertMovie( $token, array('moviename' =&gt; $moviename, 'movieyear' =&gt; $movieyear) )</strong>"+
		"<strong>array SubtitlesVote( $token, array('idsubtitle' =&gt; $idsubtitle, 'score' =&gt; $score) )</strong>"+
		"<strong>array GetComments( $token, array($idsubtitle, $idsubtitle, ...))</strong>"+
		"<strong>array AddComment( $token, array('idsubtitle' =&gt; $idsubtitle, 'comment' =&gt; $comment, 'badsubtitle' =&gt; $int) )</strong>"+
		"<strong>array AddRequest( $token, array('sublanguageid' =&gt; $sublanguageid, 'idmovieimdb' =&gt; $idmovieimdb, 'comment' =&gt; $comment ) )</strong>"+
		"<strong>array AutoUpdate ( $program_name )</strong>"+
		"<strong>array NoOperation( $token )</strong>";

		def = def.split('strong>').join('').split('<').join('').split('/');
		for (var i in def) {
			var t_meth = def[i].split(' ');
			var t_args = def[i].split('(');
			t_args.shift();
			var args = t_args.join('');


			console.log(t_meth[1].split('(')[0]+' = function(cb, '+args.replace(/\$/g, '')+'{');
			console.log('   this.call(\''+t_meth[1].replace('(', '')+'\', arguments);');
			console.log('};');
		}
		console.log(def.join('***'));
		*/
	};

	ep.prototype.call = function(method, args) {
		var cb = args[0];
		var t = [];
		delete(args[0]);
		for(var i in args) {
			t.push(args[i]);
		}
		this.client.methodCall(method, t, cb);
	};


	/** protocol methods */
	ep.prototype.LogIn = function(cb,  username, password, language, useragent ){
		this.call('LogIn', arguments);
	};
	ep.prototype.LogOut = function(cb,  token ){
		this.call('LogOut', arguments);
	};
	ep.prototype.SearchSubtitles = function(cb,  token, t_queries){
		this.call('SearchSubtitles', arguments);
	};

	ep.prototype.SearchToMail = function(cb,  token, t_langs, t_movies){
		this.call('SearchToMail', arguments);
	};
	ep.prototype.CheckSubHash = function(cb,  token, t_subs_hash){
		this.call('CheckSubHash', arguments);
	};
	ep.prototype.CheckMovieHash = function(cb,  token, t_movies_hash){
		this.call('CheckMovieHash', arguments);
	};
	ep.prototype.CheckMovieHash2 = function(cb,  token, t_movies_hash){
		this.call('CheckMovieHash2', arguments);
	};
	ep.prototype.InsertMovieHash = function(cb,  token, t_movies_info){
		this.call('InsertMovieHash', arguments);
	};
	ep.prototype.TryUploadSubtitles = function(cb,  token, t_sub){
		this.call('TryUploadSubtitles', arguments);
	};
	ep.prototype.UploadSubtitles = function(cb,  token, t_sub){
		this.call('UploadSubtitles', arguments);
	};
	ep.prototype.DetectLanguage = function(cb,  token, t_texts){
		this.call('DetectLanguage', arguments);
	};
	ep.prototype.DownloadSubtitles = function(cb,  token, t_subid){
		this.call('DownloadSubtitles', arguments);
	};
	ep.prototype.ReportWrongMovieHash = function(cb,  token, IDSubMovieFile ){
		this.call('ReportWrongMovieHash', arguments);
	};
	ep.prototype.ReportWrongImdbMovie = function(cb,  token, t_movie){
		this.call('ReportWrongImdbMovie', arguments);
	};
	ep.prototype.GetSubLanguages = function(cb,  language){
		this.call('GetSubLanguages', arguments);
	};
	ep.prototype.GetAvailableTranslations = function(cb,  token, program ){
		this.call('GetAvailableTranslations', arguments);
	};
	ep.prototype.GetTranslation = function(cb,  token, iso639, format, program ){
		this.call('GetTranslation', arguments);
	};
	ep.prototype.SearchMoviesOnIMDB = function(cb,  token, query ){
		this.call('SearchMoviesOnIMDB', arguments);
	};
	ep.prototype.GetIMDBMovieDetails = function(cb,  token, imdbid ){
		this.call('GetIMDBMovieDetails', arguments);
	};
	ep.prototype.InsertMovie = function(cb,  token, t_movie){
		this.call('InsertMovie', arguments);
	};
	ep.prototype.SubtitlesVote = function(cb,  token, t_vote){
		this.call('SubtitlesVote', arguments);
	};
	ep.prototype.GetComments = function(cb,  token, t_subids){
		this.call('GetComments', arguments);
	};
	ep.prototype.AddComment = function(cb,  token, t_comments){
		this.call('AddComment', arguments);
	};
	ep.prototype.AddRequest = function(cb,  token, t_request){
		this.call('AddRequest', arguments);
	};
	ep.prototype.AutoUpdate = function(cb,  program_name ){
		this.call('AutoUpdate', arguments);
	};
	ep.prototype.NoOperation = function(cb,  token ){
		this.call('NoOperation', arguments);
	};


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var Client = __webpack_require__(77)
	  , Server = __webpack_require__(89)

	var xmlrpc = exports

	/**
	 * Creates an XML-RPC client.
	 *
	 * @param {Object} options - server options to make the HTTP request to
	 *   - {String} host
	 *   - {Number} port
	 * @return {Client}
	 * @see Client
	 */
	xmlrpc.createClient = function(options) {
	  return new Client(options, false)
	}

	/**
	 * Creates an XML-RPC client that makes calls using HTTPS.
	 *
	 * @param {Object} options - server options to make the HTTP request to
	 *   - {String} host
	 *   - {Number} port
	 * @return {Client}
	 * @see Client
	 */
	xmlrpc.createSecureClient = function(options) {
	  return new Client(options, true)
	}

	/**
	 * Creates an XML-RPC server.
	 *
	 * @param {Object}options - the HTTP server options
	 *   - {String} host
	 *   - {Number} port
	 * @return {Server}
	 * @see Server
	 */
	xmlrpc.createServer = function(options) {
	  return new Server(options, false)
	}

	/**
	 * Creates an XML-RPC server that uses HTTPS.
	 *
	 * @param {Object}options - the HTTP server options
	 *   - {String} host
	 *   - {Number} port
	 * @return {Server}
	 * @see Server
	 */
	xmlrpc.createSecureServer = function(options) {
	  return new Server(options, true)
	}



/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var http         = __webpack_require__(78)
	  , https        = __webpack_require__(79)
	  , url          = __webpack_require__(80)
	  , Serializer   = __webpack_require__(81)
	  , Deserializer = __webpack_require__(86)

	/**
	 * Creates a Client object for making XML-RPC method calls.
	 *
	 * @constructor
	 * @param {Object|String} options - Server options to make the HTTP request to.
	 *                                  Either a URI string
	 *                                  (e.g. 'http://localhost:9090') or an object
	 *                                  with fields:
	 *   - {String} host              - (optional)
	 *   - {Number} port
	 * @param {Boolean} isSecure      - True if using https for making calls,
	 *                                  otherwise false.
	 * @return {Client}
	 */
	function Client(options, isSecure) {

	  // Invokes with new if called without
	  if (false === (this instanceof Client)) {
	    return new Client(options, isSecure)
	  }

	  // If a string URI is passed in, converts to URI fields
	  if (typeof options === 'string') {
	    options = url.parse(options)
	    options.host = options.hostname
	    options.path = options.pathname
	  }

	  // Set the HTTP request headers
	  var headers = {
	    'User-Agent'     : 'NodeJS XML-RPC Client'
	  , 'Content-Type'   : 'text/xml'
	  , 'Accept'         : 'text/xml'
	  , 'Accept-Charset' : 'UTF8'
	  , 'Connection'     : 'Keep-Alive'
	  }
	  options.headers = options.headers || {}

	  if (options.headers.Authorization == null &&
	      options.basic_auth != null &&
	      options.basic_auth.user != null &&
	      options.basic_auth.pass != null)
	  {
	    var auth = options.basic_auth.user + ":" + options.basic_auth.pass
	    options.headers['Authorization'] = 'Basic ' + new Buffer(auth).toString('base64')
	  }

	  for (var attribute in headers) {
	    if (options.headers[attribute] === undefined) {
	      options.headers[attribute] = headers[attribute]
	    }
	  }

	  options.method = 'POST'
	  this.options = options

	  this.isSecure = isSecure
	}

	/**
	 * Makes an XML-RPC call to the server specified by the constructor's options.
	 *
	 * @param {String} method     - The method name.
	 * @param {Array} params      - Params to send in the call.
	 * @param {Function} callback - function(error, value) { ... }
	 *   - {Object|null} error    - Any errors when making the call, otherwise null.
	 *   - {mixed} value          - The value returned in the method response.
	 */
	Client.prototype.methodCall = function methodCall(method, params, callback) {
	  var xml       = Serializer.serializeMethodCall(method, params)
	    , transport = this.isSecure ? https : http
	    , options   = this.options

	  options.headers['Content-Length'] = Buffer.byteLength(xml, 'utf8')

	  var request = transport.request(options, function(response) {
	    if (response.statusCode == 404) {
	      callback(new Error('Not Found'));
	    }
	    else {
	      var deserializer = new Deserializer(options.responseEncoding)
	      deserializer.deserializeMethodResponse(response, callback)
	    }
	  })

	  request.on('error', callback)
	  request.write(xml, 'utf8')
	  request.end()
	}

	module.exports = Client



/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = require("http");

/***/ },
/* 79 */
/***/ function(module, exports) {

	module.exports = require("https");

/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = require("url");

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var xmlBuilder    = __webpack_require__(82)
	  , dateFormatter = __webpack_require__(85)

	/**
	 * Creates the XML for an XML-RPC method call.
	 *
	 * @param {String} method     - The method name.
	 * @param {Array} params      - Params to pass in the call.
	 * @param {Function} callback - function (error, xml) { ... }
	 *   - {Object|null} error    - Any errors that occurred while building the XML,
	 *                              otherwise null.
	 *   - {String} xml           - The method call XML.
	 */
	exports.serializeMethodCall = function(method, params) {
	  var params = params || []

	  var xml = xmlBuilder.create()
	    . begin('methodCall', { version: '1.0' })
	    . ele('methodName')
	      .txt(method)
	    . up()
	    . ele('params')

	  params.forEach(function(param) {
	    serializeValue(param, xml.ele('param'))
	  })

	  // Includes the <?xml ...> declaration
	  return xml.doc().toString()
	}

	/**
	 * Creates the XML for an XML-RPC method response.
	 *
	 * @param {mixed} value       - The value to pass in the response.
	 * @param {Function} callback - function (error, xml) { ... }
	 *   - {Object|null} error    - Any errors that occurred while building the XML,
	 *                              otherwise null.
	 *   - {String} xml           - The method response XML.
	 */
	exports.serializeMethodResponse = function(result) {
	  var xml = xmlBuilder.create()
	    . begin('methodResponse', { version: '1.0' })
	    . ele('params')
	      . ele('param')

	  serializeValue(result, xml)

	  // Includes the <?xml ...> declaration
	  return xml.doc().toString()
	}

	exports.serializeFault = function(fault) {
	  var xml = xmlBuilder.create()
	    . begin('methodResponse', { version: '1.0' })
	    . ele('fault')

	  serializeValue(fault, xml)

	  // Includes the <?xml ...> declaration
	  return xml.doc().toString()
	}

	function serializeValue(value, xml) {
	  var stack     = [ { value: value, xml: xml } ]
	    , current   = null
	    , valueNode = null
	    , next      = null

	  while (stack.length > 0) {
	    current = stack[stack.length - 1]

	    if (current.index !== undefined) {
	      // Iterating a compound
	      next = getNextItemsFrame(current)
	      if (next) {
	        stack.push(next)
	      }
	      else {
	        stack.pop()
	      }
	    }
	    else {
	      // we're about to add a new value (compound or simple)
	      valueNode = current.xml.ele('value')
	      switch(typeof current.value) {
	        case 'boolean':
	          appendBoolean(current.value, valueNode)
	          stack.pop()
	          break
	        case 'string':
	          appendString(current.value, valueNode)
	          stack.pop()
	          break
	        case 'number':
	          appendNumber(current.value, valueNode)
	          stack.pop()
	          break
	        case 'object':
	          if (current.value === null) {
	            valueNode.ele('nil')
	            stack.pop()
	          }
	          else if (current.value instanceof Date) {
	            appendDatetime(current.value, valueNode)
	            stack.pop()
	          }
	          else if (Buffer.isBuffer(current.value)) {
	            appendBuffer(current.value, valueNode)
	            stack.pop()
	          }
	          else {
	            if (Array.isArray(current.value)) {
	              current.xml = valueNode.ele('array').ele('data')
	            }
	            else {
	              current.xml = valueNode.ele('struct')
	              current.keys = Object.keys(current.value)
	            }
	            current.index = 0
	            next = getNextItemsFrame(current)
	            if (next) {
	              stack.push(next)
	            }
	            else {
	              stack.pop()
	            }
	          }
	          break
	        default:
	          stack.pop()
	          break
	      }
	    }
	  }
	}

	function getNextItemsFrame(frame) {
	  var nextFrame = null

	  if (frame.keys) {
	    if (frame.index < frame.keys.length) {
	      var key    = frame.keys[frame.index++]
	        , member = frame.xml.ele('member').ele('name').text(key).up()
	      nextFrame = {
	        value: frame.value[key]
	      , xml: member
	      }
	    }
	  }
	  else if (frame.index < frame.value.length) {
	    nextFrame = {
	      value: frame.value[frame.index]
	    , xml: frame.xml
	    }
	    frame.index++
	  }

	  return nextFrame
	}

	function appendBoolean(value, xml) {
	  xml.ele('boolean').txt(value ? 1 : 0)
	}

	var illegalChars = /^(?![^<&]*]]>[^<&]*)[^<&]*$/
	function appendString(value, xml) {
	  if (value.length === 0) {
	    xml.ele('string')
	  }
	  else if (!illegalChars.test(value)) {
	    xml.ele('string').d(value)
	  }
	  else {
	    xml.ele('string').txt(value)
	  }
	}

	function appendNumber(value, xml) {
	  if (value % 1 == 0) {
	    xml.ele('int').txt(value)
	  }
	  else {
	    xml.ele('double').txt(value)
	  }
	}

	function appendDatetime(value, xml) {
	  xml.ele('dateTime.iso8601').txt(dateFormatter.encodeIso8601(value))
	}

	function appendBuffer(value, xml) {
	  xml.ele('base64').txt(value.toString('base64'))
	}



/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	(function() {
	  var XMLBuilder;
	  XMLBuilder = __webpack_require__(83);
	  module.exports.create = function() {
	    return new XMLBuilder();
	  };
	}).call(this);


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	(function() {
	  var XMLBuilder, XMLFragment;
	  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
	    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
	    function ctor() { this.constructor = child; }
	    ctor.prototype = parent.prototype;
	    child.prototype = new ctor;
	    child.__super__ = parent.prototype;
	    return child;
	  };
	  XMLFragment = __webpack_require__(84);
	  XMLBuilder = (function() {
	    function XMLBuilder() {
	      XMLBuilder.__super__.constructor.call(this, null, '', {}, '');
	      this.isDoc = true;
	    }
	    __extends(XMLBuilder, XMLFragment);
	    XMLBuilder.prototype.begin = function(name, xmldec, doctype, options) {
	      var att, child, root;
	      if (!(name != null)) {
	        throw new Error("Root element needs a name");
	      }
	      this.children = [];
	      name = '' + name || '';
	      if ((xmldec != null) && !(xmldec.version != null)) {
	        throw new Error("Version number is required");
	      }
	      if (xmldec != null) {
	        xmldec.version = '' + xmldec.version || '';
	        if (!xmldec.version.match(/1\.[0-9]+/)) {
	          throw new Error("Invalid version number: " + xmldec.version);
	        }
	        att = {
	          version: xmldec.version
	        };
	        if (xmldec.encoding != null) {
	          xmldec.encoding = '' + xmldec.encoding || '';
	          if (!xmldec.encoding.match(/[A-Za-z](?:[A-Za-z0-9._-]|-)*/)) {
	            throw new Error("Invalid encoding: " + xmldec.encoding);
	          }
	          att.encoding = xmldec.encoding;
	        }
	        if (xmldec.standalone != null) {
	          att.standalone = xmldec.standalone ? "yes" : "no";
	        }
	        child = new XMLFragment(this, '?xml', att);
	        this.children.push(child);
	      }
	      if (doctype != null) {
	        att = {
	          name: name
	        };
	        if (doctype.ext != null) {
	          doctype.ext = '' + doctype.ext || '';
	          att.ext = doctype.ext;
	        }
	        child = new XMLFragment(this, '!DOCTYPE', att);
	        this.children.push(child);
	      }
	      root = new XMLFragment(this, name, {});
	      root.isRoot = true;
	      this.children.push(root);
	      return root;
	    };
	    XMLBuilder.prototype.toString = function(options) {
	      var child, r, _i, _len, _ref;
	      r = '';
	      _ref = this.children;
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        child = _ref[_i];
	        r += child.toString(options);
	      }
	      return r;
	    };
	    return XMLBuilder;
	  })();
	  module.exports = XMLBuilder;
	}).call(this);


/***/ },
/* 84 */
/***/ function(module, exports) {

	(function() {
	  var XMLFragment;
	  var __hasProp = Object.prototype.hasOwnProperty;
	  XMLFragment = (function() {
	    function XMLFragment(parent, name, attributes, text) {
	      this.isDoc = false;
	      this.isRoot = false;
	      this.parent = parent;
	      this.name = name;
	      this.attributes = attributes;
	      this.value = text;
	      this.children = [];
	    }
	    XMLFragment.prototype.element = function(name, attributes, text) {
	      var child, key, val, _ref, _ref2;
	      if (!(name != null)) {
	        throw new Error("Missing element name");
	      }
	      name = '' + name || '';
	      this.assertLegalChar(name);
	            if (attributes != null) {
	        attributes;
	      } else {
	        attributes = {};
	      };
	      if (this.is(attributes, 'String') && this.is(text, 'Object')) {
	        _ref = [text, attributes], attributes = _ref[0], text = _ref[1];
	      } else if (this.is(attributes, 'String')) {
	        _ref2 = [{}, attributes], attributes = _ref2[0], text = _ref2[1];
	      }
	      for (key in attributes) {
	        if (!__hasProp.call(attributes, key)) continue;
	        val = attributes[key];
	        val = '' + val || '';
	        attributes[key] = this.escape(val);
	      }
	      child = new XMLFragment(this, name, attributes);
	      if (text != null) {
	        text = '' + text || '';
	        text = this.escape(text);
	        this.assertLegalChar(text);
	        child.text(text);
	      }
	      this.children.push(child);
	      return child;
	    };
	    XMLFragment.prototype.insertBefore = function(name, attributes, text) {
	      var child, i, key, val, _ref, _ref2;
	      if (this.isRoot || this.isDoc) {
	        throw new Error("Cannot insert elements at root level");
	      }
	      if (!(name != null)) {
	        throw new Error("Missing element name");
	      }
	      name = '' + name || '';
	      this.assertLegalChar(name);
	            if (attributes != null) {
	        attributes;
	      } else {
	        attributes = {};
	      };
	      if (this.is(attributes, 'String') && this.is(text, 'Object')) {
	        _ref = [text, attributes], attributes = _ref[0], text = _ref[1];
	      } else if (this.is(attributes, 'String')) {
	        _ref2 = [{}, attributes], attributes = _ref2[0], text = _ref2[1];
	      }
	      for (key in attributes) {
	        if (!__hasProp.call(attributes, key)) continue;
	        val = attributes[key];
	        val = '' + val || '';
	        attributes[key] = this.escape(val);
	      }
	      child = new XMLFragment(this.parent, name, attributes);
	      if (text != null) {
	        text = '' + text || '';
	        text = this.escape(text);
	        this.assertLegalChar(text);
	        child.text(text);
	      }
	      i = this.parent.children.indexOf(this);
	      this.parent.children.splice(i, 0, child);
	      return child;
	    };
	    XMLFragment.prototype.insertAfter = function(name, attributes, text) {
	      var child, i, key, val, _ref, _ref2;
	      if (this.isRoot || this.isDoc) {
	        throw new Error("Cannot insert elements at root level");
	      }
	      if (!(name != null)) {
	        throw new Error("Missing element name");
	      }
	      name = '' + name || '';
	      this.assertLegalChar(name);
	            if (attributes != null) {
	        attributes;
	      } else {
	        attributes = {};
	      };
	      if (this.is(attributes, 'String') && this.is(text, 'Object')) {
	        _ref = [text, attributes], attributes = _ref[0], text = _ref[1];
	      } else if (this.is(attributes, 'String')) {
	        _ref2 = [{}, attributes], attributes = _ref2[0], text = _ref2[1];
	      }
	      for (key in attributes) {
	        if (!__hasProp.call(attributes, key)) continue;
	        val = attributes[key];
	        val = '' + val || '';
	        attributes[key] = this.escape(val);
	      }
	      child = new XMLFragment(this.parent, name, attributes);
	      if (text != null) {
	        text = '' + text || '';
	        text = this.escape(text);
	        this.assertLegalChar(text);
	        child.text(text);
	      }
	      i = this.parent.children.indexOf(this);
	      this.parent.children.splice(i + 1, 0, child);
	      return child;
	    };
	    XMLFragment.prototype.remove = function() {
	      var i, _ref;
	      if (this.isRoot || this.isDoc) {
	        throw new Error("Cannot remove the root element");
	      }
	      i = this.parent.children.indexOf(this);
	      [].splice.apply(this.parent.children, [i, i - i + 1].concat(_ref = [])), _ref;
	      return this.parent;
	    };
	    XMLFragment.prototype.text = function(value) {
	      var child;
	      if (!(value != null)) {
	        throw new Error("Missing element text");
	      }
	      value = '' + value || '';
	      value = this.escape(value);
	      this.assertLegalChar(value);
	      child = new XMLFragment(this, '', {}, value);
	      this.children.push(child);
	      return this;
	    };
	    XMLFragment.prototype.cdata = function(value) {
	      var child;
	      if (!(value != null)) {
	        throw new Error("Missing CDATA text");
	      }
	      value = '' + value || '';
	      this.assertLegalChar(value);
	      if (value.match(/]]>/)) {
	        throw new Error("Invalid CDATA text: " + value);
	      }
	      child = new XMLFragment(this, '', {}, '<![CDATA[' + value + ']]>');
	      this.children.push(child);
	      return this;
	    };
	    XMLFragment.prototype.comment = function(value) {
	      var child;
	      if (!(value != null)) {
	        throw new Error("Missing comment text");
	      }
	      value = '' + value || '';
	      value = this.escape(value);
	      this.assertLegalChar(value);
	      if (value.match(/--/)) {
	        throw new Error("Comment text cannot contain double-hypen: " + value);
	      }
	      child = new XMLFragment(this, '', {}, '<!-- ' + value + ' -->');
	      this.children.push(child);
	      return this;
	    };
	    XMLFragment.prototype.raw = function(value) {
	      var child;
	      if (!(value != null)) {
	        throw new Error("Missing raw text");
	      }
	      value = '' + value || '';
	      child = new XMLFragment(this, '', {}, value);
	      this.children.push(child);
	      return this;
	    };
	    XMLFragment.prototype.up = function() {
	      if (this.isRoot) {
	        throw new Error("This node has no parent. Use doc() if you need to get the document object.");
	      }
	      return this.parent;
	    };
	    XMLFragment.prototype.root = function() {
	      var child;
	      if (this.isRoot) {
	        return this;
	      }
	      child = this.parent;
	      while (!child.isRoot) {
	        child = child.parent;
	      }
	      return child;
	    };
	    XMLFragment.prototype.document = function() {
	      var child;
	      if (this.isDoc) {
	        return this;
	      }
	      child = this.parent;
	      while (!child.isDoc) {
	        child = child.parent;
	      }
	      return child;
	    };
	    XMLFragment.prototype.prev = function() {
	      var i;
	      if (this.isRoot || this.isDoc) {
	        throw new Error("Root node has no siblings");
	      }
	      i = this.parent.children.indexOf(this);
	      if (i < 1) {
	        throw new Error("Already at the first node");
	      }
	      return this.parent.children[i - 1];
	    };
	    XMLFragment.prototype.next = function() {
	      var i;
	      if (this.isRoot || this.isDoc) {
	        throw new Error("Root node has no siblings");
	      }
	      i = this.parent.children.indexOf(this);
	      if (i === -1 || i === this.parent.children.length - 1) {
	        throw new Error("Already at the last node");
	      }
	      return this.parent.children[i + 1];
	    };
	    XMLFragment.prototype.attribute = function(name, value) {
	      var _ref;
	      if (!(name != null)) {
	        throw new Error("Missing attribute name");
	      }
	      if (!(value != null)) {
	        throw new Error("Missing attribute value");
	      }
	      name = '' + name || '';
	      value = '' + value || '';
	            if ((_ref = this.attributes) != null) {
	        _ref;
	      } else {
	        this.attributes = {};
	      };
	      this.attributes[name] = this.escape(value);
	      return this;
	    };
	    XMLFragment.prototype.removeAttribute = function(name) {
	      if (!(name != null)) {
	        throw new Error("Missing attribute name");
	      }
	      name = '' + name || '';
	      delete this.attributes[name];
	      return this;
	    };
	    XMLFragment.prototype.toString = function(options, level) {
	      var attName, attValue, child, indent, newline, pretty, r, space, _i, _len, _ref, _ref2;
	      pretty = (options != null) && options.pretty || false;
	      indent = (options != null) && options.indent || '  ';
	      newline = (options != null) && options.newline || '\n';
	      level || (level = 0);
	      space = new Array(level + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      if (!this.value) {
	        r += '<' + this.name;
	      } else {
	        r += '' + this.value;
	      }
	      _ref = this.attributes;
	      for (attName in _ref) {
	        attValue = _ref[attName];
	        if (this.name === '!DOCTYPE') {
	          r += ' ' + attValue;
	        } else {
	          r += ' ' + attName + '="' + attValue + '"';
	        }
	      }
	      if (this.children.length === 0) {
	        if (!this.value) {
	          r += this.name === '?xml' ? '?>' : this.name === '!DOCTYPE' ? '>' : '/>';
	        }
	        if (pretty) {
	          r += newline;
	        }
	      } else if (pretty && this.children.length === 1 && this.children[0].value) {
	        r += '>';
	        r += this.children[0].value;
	        r += '</' + this.name + '>';
	        r += newline;
	      } else {
	        r += '>';
	        if (pretty) {
	          r += newline;
	        }
	        _ref2 = this.children;
	        for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
	          child = _ref2[_i];
	          r += child.toString(options, level + 1);
	        }
	        if (pretty) {
	          r += space;
	        }
	        r += '</' + this.name + '>';
	        if (pretty) {
	          r += newline;
	        }
	      }
	      return r;
	    };
	    XMLFragment.prototype.escape = function(str) {
	      return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&apos;').replace(/"/g, '&quot;');
	    };
	    XMLFragment.prototype.assertLegalChar = function(str) {
	      var chars, chr;
	      chars = /[\u0000-\u0008\u000B-\u000C\u000E-\u001F\uD800-\uDFFF\uFFFE-\uFFFF]/;
	      chr = str.match(chars);
	      if (chr) {
	        throw new Error("Invalid character (" + chr + ") in string: " + str);
	      }
	    };
	    XMLFragment.prototype.is = function(obj, type) {
	      var clas;
	      clas = Object.prototype.toString.call(obj).slice(8, -1);
	      return (obj != null) && clas === type;
	    };
	    XMLFragment.prototype.ele = function(name, attributes, text) {
	      return this.element(name, attributes, text);
	    };
	    XMLFragment.prototype.txt = function(value) {
	      return this.text(value);
	    };
	    XMLFragment.prototype.dat = function(value) {
	      return this.cdata(value);
	    };
	    XMLFragment.prototype.att = function(name, value) {
	      return this.attribute(name, value);
	    };
	    XMLFragment.prototype.com = function(value) {
	      return this.comment(value);
	    };
	    XMLFragment.prototype.doc = function() {
	      return this.document();
	    };
	    XMLFragment.prototype.e = function(name, attributes, text) {
	      return this.element(name, attributes, text);
	    };
	    XMLFragment.prototype.t = function(value) {
	      return this.text(value);
	    };
	    XMLFragment.prototype.d = function(value) {
	      return this.cdata(value);
	    };
	    XMLFragment.prototype.a = function(name, value) {
	      return this.attribute(name, value);
	    };
	    XMLFragment.prototype.c = function(value) {
	      return this.comment(value);
	    };
	    XMLFragment.prototype.r = function(value) {
	      return this.raw(value);
	    };
	    XMLFragment.prototype.u = function() {
	      return this.up();
	    };
	    return XMLFragment;
	  })();
	  module.exports = XMLFragment;
	}).call(this);


/***/ },
/* 85 */
/***/ function(module, exports) {

	var dateFormatter = exports

	// Source: http://webcloud.se/log/JavaScript-and-ISO-8601/
	var iso8601 = new RegExp(
	  '([0-9]{4})([-]?([0-9]{2})([-]?([0-9]{2})'
	+ '(T([0-9]{2}):([0-9]{2})(:([0-9]{2})(\.([0-9]+))?)?'
	+ '(Z|(([-+])([0-9]{2}):([0-9]{2})))?)?)?)?'
	)

	/*
	 * Converts a date time stamp following the ISO8601 format to a JavaScript Date
	 * object.
	 *
	 * @param {String} time - String representation of timestamp.
	 * @return {Date}       - Date object from timestamp.
	 */
	dateFormatter.decodeIso8601 = function(time) {
	  var dateParts = time.toString().match(iso8601)
	  if (!dateParts) {
	    throw new Error('Expected a ISO8601 datetime but got \'' + time + '\'')
	  }

	  var date = new Date(dateParts[1], 0, 1)
	  if (dateParts[3]) {
	    date.setMonth(dateParts[3] - 1)
	  }
	  if (dateParts[5]) {
	    date.setDate(dateParts[5])
	  }
	  if (dateParts[7]) {
	    date.setHours(dateParts[7])
	  }
	  if (dateParts[8]) {
	    date.setMinutes(dateParts[8])
	  }
	  if (dateParts[10]) {
	    date.setSeconds(dateParts[10])
	  }
	  if (dateParts[12]) {
	    date.setMilliseconds(Number('0.' + dateParts[12]) * 1000)
	  }

	  return date
	}

	/**
	 * Converts a JavaScript Date object to an ISO8601 timestamp.
	 *
	 * @param {Date} date - Date object.
	 * @return {String}   - String representation of timestamp.
	 */
	dateFormatter.encodeIso8601 = function(date) {
	  return zeroPad(date.getFullYear(), 4)
	    + zeroPad(date.getMonth() + 1, 2)
	    + zeroPad(date.getDate(), 2)
	    + 'T'
	    + zeroPad(date.getHours(), 2)
	    + ':'
	    + zeroPad(date.getMinutes(), 2)
	    + ':'
	    + zeroPad(date.getSeconds(), 2)
	}

	/**
	 * Helper function to pad the digits with 0s to meet date formatting
	 * requirements.
	 *
	 * @param {Number} digit  - The number to pad.
	 * @param {Number} length - Length of digit string, prefix with 0s if not
	 *                          already length.
	 * @return {String}       - String with the padded digit
	 */
	function zeroPad(digit, length) {
	  var padded = '' + digit
	  while (padded.length < length) {
	    padded = '0' + padded
	  }

	  return padded
	}



/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var sax           = __webpack_require__(87)
	  , dateFormatter = __webpack_require__(85)

	var Deserializer = function(encoding) {
	  this.type = null
	  this.responseType = null
	  this.stack = []
	  this.marks = []
	  this.data = []
	  this.methodname = null
	  this.encoding = encoding || 'utf8'
	  this.value = false
	  this.callback = null
	  this.error = null

	  this.parser = sax.createStream()
	  this.parser.on('opentag',  this.onOpentag.bind(this))
	  this.parser.on('closetag', this.onClosetag.bind(this))
	  this.parser.on('text',     this.onText.bind(this))
	  this.parser.on('end',      this.onDone.bind(this))
	  this.parser.on('error',    this.onError.bind(this))
	}

	Deserializer.prototype.deserializeMethodResponse = function(stream, callback) {
	  var that = this

	  this.callback = function(error, result) {
	    if (error) {
	      callback(error)
	    }
	    else if (result.length > 1) {
	      callback(new Error('Response has more than one param'))
	    }
	    else if (that.type !== 'methodresponse') {
	      callback(new Error('Not a method response'))
	    }
	    else if (!that.responseType) {
	      callback(new Error('Invalid method response'))
	    }
	    else {
	      callback(null, result[0])
	    }
	  }

	  stream.setEncoding(this.encoding)
	  stream.on('error', this.onError.bind(this))
	  stream.pipe(this.parser)
	}

	Deserializer.prototype.deserializeMethodCall = function(stream, callback) {
	  var that = this

	  this.callback = function(error, result) {
	    if (error) {
	      callback(error)
	    }
	    else if (that.type !== 'methodcall') {
	      callback(new Error('Not a method call'))
	    }
	    else if (!that.methodname) {
	      callback(new Error('Method call did not contain a method name'))
	    }
	    else {
	      callback(null, that.methodname, result)
	    }
	  }

	  stream.setEncoding(this.encoding)
	  stream.on('error', this.onError.bind(this))
	  stream.pipe(this.parser)
	}

	Deserializer.prototype.onDone = function() {
	  var that = this

	  if (!this.error) {
	    if (this.type === null || this.marks.length) {
	      this.callback(new Error('Invalid XML-RPC message'))
	    }
	    else if (this.responseType === 'fault') {
	      var createFault = function(fault) {
	        var error = new Error('XML-RPC fault' + (fault.faultString ? ': ' + fault.faultString : ''))
	        error.code = fault.faultCode
	        error.faultCode = fault.faultCode
	        error.faultString = fault.faultString
	        return error
	      }
	      this.callback(createFault(this.stack[0]))
	    }
	    else {
	      this.callback(undefined, this.stack)
	    }
	  }
	}

	// TODO:
	// Error handling needs a little thinking. There are two different kinds of
	// errors: 
	//   1. Low level errors like network, stream or xml errors. These don't
	//      require special treatment. They only need to be forwarded. The IO
	//      is already stopped in these cases. 
	//   2. Protocol errors: Invalid tags, invalid values &c. These happen in
	//      our code and we should tear down the IO and stop parsing.
	// Currently all errors end here. Guess I'll split it up. 
	Deserializer.prototype.onError = function(msg) {
	  if (!this.error) {
	    if (typeof msg === 'string') {
	      this.error = new Error(msg)
	    }
	    else {
	      this.error = msg
	    }
	    this.callback(this.error)
	  }
	}

	Deserializer.prototype.push = function(value) {
	  this.stack.push(value)
	}

	//==============================================================================
	// SAX Handlers
	//==============================================================================

	Deserializer.prototype.onOpentag = function(node) {
	  if (node.name === 'ARRAY' || node.name === 'STRUCT') {
	    this.marks.push(this.stack.length)
	  }
	  this.data = []
	  this.value = (node.name === 'VALUE')
	}

	Deserializer.prototype.onText = function(text) {
	  this.data.push(text)
	}

	Deserializer.prototype.onClosetag = function(el) {
	  var data = this.data.join('')
	  try {
	    switch(el) {
	      case 'BOOLEAN':
	        this.endBoolean(data)
	        break
	      case 'INT':
	      case 'I4':
	        this.endInt(data)
	        break
	      case 'I8':
	        this.endI8(data)
	        break
	      case 'DOUBLE':
	        this.endDouble(data)
	        break
	      case 'STRING':
	      case 'NAME':
	        this.endString(data)
	        break
	      case 'ARRAY':
	        this.endArray(data)
	        break
	      case 'STRUCT':
	        this.endStruct(data)
	        break
	      case 'BASE64':
	        this.endBase64(data)
	        break
	      case 'DATETIME.ISO8601':
	        this.endDateTime(data)
	        break
	      case 'VALUE':
	        this.endValue(data)
	        break
	      case 'PARAMS':
	        this.endParams(data)
	        break
	      case 'FAULT':
	        this.endFault(data)
	        break
	      case 'METHODRESPONSE':
	        this.endMethodResponse(data)
	        break
	      case 'METHODNAME':
	        this.endMethodName(data)
	        break
	      case 'METHODCALL':
	        this.endMethodCall(data)
	        break
	      case 'NIL':
	        this.endNil(data)
	        break
	      case 'DATA':
	      case 'PARAM':
	      case 'MEMBER':
	        // Ignored by design
	        break
	      default:
	        this.onError('Unknown XML-RPC tag \'' + el + '\'')
	        break
	    }
	  }
	  catch (e) {
	    this.onError(e)
	  }
	}

	Deserializer.prototype.endNil = function(data) {
	  this.push(null)
	  this.value = false
	}

	Deserializer.prototype.endBoolean = function(data) {
	  if (data === '1') {
	    this.push(true)
	  }
	  else if (data === '0') {
	    this.push(false)
	  }
	  else {
	    throw new Error('Illegal boolean value \'' + data + '\'')
	  }
	  this.value = false
	}

	Deserializer.prototype.endInt = function(data) {
	  var value = parseInt(data, 10)
	  if (isNaN(value)) {
	    throw new Error('Expected an integer but got \'' + data + '\'')
	  }
	  else {
	    this.push(value)
	    this.value = false
	  }
	}

	Deserializer.prototype.endDouble = function(data) {
	  var value = parseFloat(data)
	  if (isNaN(value)) {
	    throw new Error('Expected a double but got \'' + data + '\'')
	  }
	  else {
	    this.push(value)
	    this.value = false
	  }
	}

	Deserializer.prototype.endString = function(data) {
	  this.push(data)
	  this.value = false
	}

	Deserializer.prototype.endArray = function(data) {
	  var mark = this.marks.pop()
	  this.stack.splice(mark, this.stack.length - mark, this.stack.slice(mark))
	  this.value = false
	}

	Deserializer.prototype.endStruct = function(data) {
	  var mark = this.marks.pop()
	    , struct = {}
	    , items = this.stack.slice(mark)
	    , i = 0

	  for (; i < items.length; i += 2) {
	    struct[items[i]] = items[i + 1]
	  }
	  this.stack.splice(mark, this.stack.length - mark, struct)
	  this.value = false
	}

	Deserializer.prototype.endBase64 = function(data) {
	  var buffer = new Buffer(data, 'base64')
	  this.push(buffer)
	  this.value = false
	}

	Deserializer.prototype.endDateTime = function(data) {
	  var date = dateFormatter.decodeIso8601(data)
	  this.push(date)
	  this.value = false
	}

	var isInteger = /^-?\d+$/
	Deserializer.prototype.endI8 = function(data) {
	  if (!isInteger.test(data)) {
	    throw new Error('Expected integer (I8) value but got \'' + data + '\'')
	  }
	  else {
	    this.endString(data)
	  }
	}

	Deserializer.prototype.endValue = function(data) {
	  if (this.value) {
	    this.endString(data)
	  }
	}

	Deserializer.prototype.endParams = function(data) {
	  this.responseType = 'params'
	}

	Deserializer.prototype.endFault = function(data) {
	  this.responseType = 'fault'
	}

	Deserializer.prototype.endMethodResponse = function(data) {
	  this.type = 'methodresponse'
	}

	Deserializer.prototype.endMethodName = function(data) {
	  this.methodname = data
	}

	Deserializer.prototype.endMethodCall = function(data) {
	  this.type = 'methodcall'
	}

	module.exports = Deserializer



/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	// wrapper for non-node envs
	;(function (sax) {

	sax.parser = function (strict, opt) { return new SAXParser(strict, opt) }
	sax.SAXParser = SAXParser
	sax.SAXStream = SAXStream
	sax.createStream = createStream

	// When we pass the MAX_BUFFER_LENGTH position, start checking for buffer overruns.
	// When we check, schedule the next check for MAX_BUFFER_LENGTH - (max(buffer lengths)),
	// since that's the earliest that a buffer overrun could occur.  This way, checks are
	// as rare as required, but as often as necessary to ensure never crossing this bound.
	// Furthermore, buffers are only tested at most once per write(), so passing a very
	// large string into write() might have undesirable effects, but this is manageable by
	// the caller, so it is assumed to be safe.  Thus, a call to write() may, in the extreme
	// edge case, result in creating at most one complete copy of the string passed in.
	// Set to Infinity to have unlimited buffers.
	sax.MAX_BUFFER_LENGTH = 64 * 1024

	var buffers = [
	  "comment", "sgmlDecl", "textNode", "tagName", "doctype",
	  "procInstName", "procInstBody", "entity", "attribName",
	  "attribValue", "cdata", "script"
	]

	sax.EVENTS = // for discoverability.
	  [ "text"
	  , "processinginstruction"
	  , "sgmldeclaration"
	  , "doctype"
	  , "comment"
	  , "attribute"
	  , "opentag"
	  , "closetag"
	  , "opencdata"
	  , "cdata"
	  , "closecdata"
	  , "error"
	  , "end"
	  , "ready"
	  , "script"
	  , "opennamespace"
	  , "closenamespace"
	  ]

	function SAXParser (strict, opt) {
	  if (!(this instanceof SAXParser)) return new SAXParser(strict, opt)

	  var parser = this
	  clearBuffers(parser)
	  parser.q = parser.c = ""
	  parser.bufferCheckPosition = sax.MAX_BUFFER_LENGTH
	  parser.opt = opt || {}
	  parser.opt.lowercase = parser.opt.lowercase || parser.opt.lowercasetags;
	  parser.looseCase = parser.opt.lowercase ? "toLowerCase" : "toUpperCase"
	  parser.tags = []
	  parser.closed = parser.closedRoot = parser.sawRoot = false
	  parser.tag = parser.error = null
	  parser.strict = !!strict
	  parser.noscript = !!(strict || parser.opt.noscript)
	  parser.state = S.BEGIN
	  parser.ENTITIES = Object.create(sax.ENTITIES)
	  parser.attribList = []

	  // namespaces form a prototype chain.
	  // it always points at the current tag,
	  // which protos to its parent tag.
	  if (parser.opt.xmlns) parser.ns = Object.create(rootNS)

	  // mostly just for error reporting
	  parser.trackPosition = parser.opt.position !== false
	  if (parser.trackPosition) {
	    parser.position = parser.line = parser.column = 0
	  }
	  emit(parser, "onready")
	}

	if (!Object.create) Object.create = function (o) {
	  function f () { this.__proto__ = o }
	  f.prototype = o
	  return new f
	}

	if (!Object.getPrototypeOf) Object.getPrototypeOf = function (o) {
	  return o.__proto__
	}

	if (!Object.keys) Object.keys = function (o) {
	  var a = []
	  for (var i in o) if (o.hasOwnProperty(i)) a.push(i)
	  return a
	}

	function checkBufferLength (parser) {
	  var maxAllowed = Math.max(sax.MAX_BUFFER_LENGTH, 10)
	    , maxActual = 0
	  for (var i = 0, l = buffers.length; i < l; i ++) {
	    var len = parser[buffers[i]].length
	    if (len > maxAllowed) {
	      // Text/cdata nodes can get big, and since they're buffered,
	      // we can get here under normal conditions.
	      // Avoid issues by emitting the text node now,
	      // so at least it won't get any bigger.
	      switch (buffers[i]) {
	        case "textNode":
	          closeText(parser)
	        break

	        case "cdata":
	          emitNode(parser, "oncdata", parser.cdata)
	          parser.cdata = ""
	        break

	        case "script":
	          emitNode(parser, "onscript", parser.script)
	          parser.script = ""
	        break

	        default:
	          error(parser, "Max buffer length exceeded: "+buffers[i])
	      }
	    }
	    maxActual = Math.max(maxActual, len)
	  }
	  // schedule the next check for the earliest possible buffer overrun.
	  parser.bufferCheckPosition = (sax.MAX_BUFFER_LENGTH - maxActual)
	                             + parser.position
	}

	function clearBuffers (parser) {
	  for (var i = 0, l = buffers.length; i < l; i ++) {
	    parser[buffers[i]] = ""
	  }
	}

	SAXParser.prototype =
	  { end: function () { end(this) }
	  , write: write
	  , resume: function () { this.error = null; return this }
	  , close: function () { return this.write(null) }
	  }

	try {
	  var Stream = __webpack_require__(88).Stream
	} catch (ex) {
	  var Stream = function () {}
	}


	var streamWraps = sax.EVENTS.filter(function (ev) {
	  return ev !== "error" && ev !== "end"
	})

	function createStream (strict, opt) {
	  return new SAXStream(strict, opt)
	}

	function SAXStream (strict, opt) {
	  if (!(this instanceof SAXStream)) return new SAXStream(strict, opt)

	  Stream.apply(this)

	  this._parser = new SAXParser(strict, opt)
	  this.writable = true
	  this.readable = true


	  var me = this

	  this._parser.onend = function () {
	    me.emit("end")
	  }

	  this._parser.onerror = function (er) {
	    me.emit("error", er)

	    // if didn't throw, then means error was handled.
	    // go ahead and clear error, so we can write again.
	    me._parser.error = null
	  }

	  streamWraps.forEach(function (ev) {
	    Object.defineProperty(me, "on" + ev, {
	      get: function () { return me._parser["on" + ev] },
	      set: function (h) {
	        if (!h) {
	          me.removeAllListeners(ev)
	          return me._parser["on"+ev] = h
	        }
	        me.on(ev, h)
	      },
	      enumerable: true,
	      configurable: false
	    })
	  })
	}

	SAXStream.prototype = Object.create(Stream.prototype,
	  { constructor: { value: SAXStream } })

	SAXStream.prototype.write = function (data) {
	  this._parser.write(data.toString())
	  this.emit("data", data)
	  return true
	}

	SAXStream.prototype.end = function (chunk) {
	  if (chunk && chunk.length) this._parser.write(chunk.toString())
	  this._parser.end()
	  return true
	}

	SAXStream.prototype.on = function (ev, handler) {
	  var me = this
	  if (!me._parser["on"+ev] && streamWraps.indexOf(ev) !== -1) {
	    me._parser["on"+ev] = function () {
	      var args = arguments.length === 1 ? [arguments[0]]
	               : Array.apply(null, arguments)
	      args.splice(0, 0, ev)
	      me.emit.apply(me, args)
	    }
	  }

	  return Stream.prototype.on.call(me, ev, handler)
	}



	// character classes and tokens
	var whitespace = "\r\n\t "
	  // this really needs to be replaced with character classes.
	  // XML allows all manner of ridiculous numbers and digits.
	  , number = "0124356789"
	  , letter = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
	  // (Letter | "_" | ":")
	  , nameStart = letter+"_:"
	  , nameBody = nameStart+number+"-."
	  , quote = "'\""
	  , entity = number+letter+"#"
	  , attribEnd = whitespace + ">"
	  , CDATA = "[CDATA["
	  , DOCTYPE = "DOCTYPE"
	  , XML_NAMESPACE = "http://www.w3.org/XML/1998/namespace"
	  , XMLNS_NAMESPACE = "http://www.w3.org/2000/xmlns/"
	  , rootNS = { xml: XML_NAMESPACE, xmlns: XMLNS_NAMESPACE }

	// turn all the string character sets into character class objects.
	whitespace = charClass(whitespace)
	number = charClass(number)
	letter = charClass(letter)
	nameStart = charClass(nameStart)
	nameBody = charClass(nameBody)
	quote = charClass(quote)
	entity = charClass(entity)
	attribEnd = charClass(attribEnd)

	function charClass (str) {
	  return str.split("").reduce(function (s, c) {
	    s[c] = true
	    return s
	  }, {})
	}

	function is (charclass, c) {
	  return charclass[c]
	}

	function not (charclass, c) {
	  return !charclass[c]
	}

	var S = 0
	sax.STATE =
	{ BEGIN                     : S++
	, TEXT                      : S++ // general stuff
	, TEXT_ENTITY               : S++ // &amp and such.
	, OPEN_WAKA                 : S++ // <
	, SGML_DECL                 : S++ // <!BLARG
	, SGML_DECL_QUOTED          : S++ // <!BLARG foo "bar
	, DOCTYPE                   : S++ // <!DOCTYPE
	, DOCTYPE_QUOTED            : S++ // <!DOCTYPE "//blah
	, DOCTYPE_DTD               : S++ // <!DOCTYPE "//blah" [ ...
	, DOCTYPE_DTD_QUOTED        : S++ // <!DOCTYPE "//blah" [ "foo
	, COMMENT_STARTING          : S++ // <!-
	, COMMENT                   : S++ // <!--
	, COMMENT_ENDING            : S++ // <!-- blah -
	, COMMENT_ENDED             : S++ // <!-- blah --
	, CDATA                     : S++ // <![CDATA[ something
	, CDATA_ENDING              : S++ // ]
	, CDATA_ENDING_2            : S++ // ]]
	, PROC_INST                 : S++ // <?hi
	, PROC_INST_BODY            : S++ // <?hi there
	, PROC_INST_QUOTED          : S++ // <?hi "there
	, PROC_INST_ENDING          : S++ // <?hi "there" ?
	, OPEN_TAG                  : S++ // <strong
	, OPEN_TAG_SLASH            : S++ // <strong /
	, ATTRIB                    : S++ // <a
	, ATTRIB_NAME               : S++ // <a foo
	, ATTRIB_NAME_SAW_WHITE     : S++ // <a foo _
	, ATTRIB_VALUE              : S++ // <a foo=
	, ATTRIB_VALUE_QUOTED       : S++ // <a foo="bar
	, ATTRIB_VALUE_UNQUOTED     : S++ // <a foo=bar
	, ATTRIB_VALUE_ENTITY_Q     : S++ // <foo bar="&quot;"
	, ATTRIB_VALUE_ENTITY_U     : S++ // <foo bar=&quot;
	, CLOSE_TAG                 : S++ // </a
	, CLOSE_TAG_SAW_WHITE       : S++ // </a   >
	, SCRIPT                    : S++ // <script> ...
	, SCRIPT_ENDING             : S++ // <script> ... <
	}

	sax.ENTITIES =
	{ "apos" : "'"
	, "quot" : "\""
	, "amp"  : "&"
	, "gt"   : ">"
	, "lt"   : "<"
	}

	for (var S in sax.STATE) sax.STATE[sax.STATE[S]] = S

	// shorthand
	S = sax.STATE

	function emit (parser, event, data) {
	  parser[event] && parser[event](data)
	}

	function emitNode (parser, nodeType, data) {
	  if (parser.textNode) closeText(parser)
	  emit(parser, nodeType, data)
	}

	function closeText (parser) {
	  parser.textNode = textopts(parser.opt, parser.textNode)
	  if (parser.textNode) emit(parser, "ontext", parser.textNode)
	  parser.textNode = ""
	}

	function textopts (opt, text) {
	  if (opt.trim) text = text.trim()
	  if (opt.normalize) text = text.replace(/\s+/g, " ")
	  return text
	}

	function error (parser, er) {
	  closeText(parser)
	  if (parser.trackPosition) {
	    er += "\nLine: "+parser.line+
	          "\nColumn: "+parser.column+
	          "\nChar: "+parser.c
	  }
	  er = new Error(er)
	  parser.error = er
	  emit(parser, "onerror", er)
	  return parser
	}

	function end (parser) {
	  if (parser.state !== S.TEXT) error(parser, "Unexpected end")
	  closeText(parser)
	  parser.c = ""
	  parser.closed = true
	  emit(parser, "onend")
	  SAXParser.call(parser, parser.strict, parser.opt)
	  return parser
	}

	function strictFail (parser, message) {
	  if (parser.strict) error(parser, message)
	}

	function newTag (parser) {
	  if (!parser.strict) parser.tagName = parser.tagName[parser.looseCase]()
	  var parent = parser.tags[parser.tags.length - 1] || parser
	    , tag = parser.tag = { name : parser.tagName, attributes : {} }

	  // will be overridden if tag contails an xmlns="foo" or xmlns:foo="bar"
	  if (parser.opt.xmlns) tag.ns = parent.ns
	  parser.attribList.length = 0
	}

	function qname (name) {
	  var i = name.indexOf(":")
	    , qualName = i < 0 ? [ "", name ] : name.split(":")
	    , prefix = qualName[0]
	    , local = qualName[1]

	  // <x "xmlns"="http://foo">
	  if (name === "xmlns") {
	    prefix = "xmlns"
	    local = ""
	  }

	  return { prefix: prefix, local: local }
	}

	function attrib (parser) {
	  if (!parser.strict) parser.attribName = parser.attribName[parser.looseCase]()
	  if (parser.opt.xmlns) {
	    var qn = qname(parser.attribName)
	      , prefix = qn.prefix
	      , local = qn.local

	    if (prefix === "xmlns") {
	      // namespace binding attribute; push the binding into scope
	      if (local === "xml" && parser.attribValue !== XML_NAMESPACE) {
	        strictFail( parser
	                  , "xml: prefix must be bound to " + XML_NAMESPACE + "\n"
	                  + "Actual: " + parser.attribValue )
	      } else if (local === "xmlns" && parser.attribValue !== XMLNS_NAMESPACE) {
	        strictFail( parser
	                  , "xmlns: prefix must be bound to " + XMLNS_NAMESPACE + "\n"
	                  + "Actual: " + parser.attribValue )
	      } else {
	        var tag = parser.tag
	          , parent = parser.tags[parser.tags.length - 1] || parser
	        if (tag.ns === parent.ns) {
	          tag.ns = Object.create(parent.ns)
	        }
	        tag.ns[local] = parser.attribValue
	      }
	    }

	    // defer onattribute events until all attributes have been seen
	    // so any new bindings can take effect; preserve attribute order
	    // so deferred events can be emitted in document order
	    parser.attribList.push([parser.attribName, parser.attribValue])
	  } else {
	    // in non-xmlns mode, we can emit the event right away
	    parser.tag.attributes[parser.attribName] = parser.attribValue
	    emitNode( parser
	            , "onattribute"
	            , { name: parser.attribName
	              , value: parser.attribValue } )
	  }

	  parser.attribName = parser.attribValue = ""
	}

	function openTag (parser, selfClosing) {
	  if (parser.opt.xmlns) {
	    // emit namespace binding events
	    var tag = parser.tag

	    // add namespace info to tag
	    var qn = qname(parser.tagName)
	    tag.prefix = qn.prefix
	    tag.local = qn.local
	    tag.uri = tag.ns[qn.prefix] || qn.prefix

	    if (tag.prefix && !tag.uri) {
	      strictFail(parser, "Unbound namespace prefix: "
	                       + JSON.stringify(parser.tagName))
	    }

	    var parent = parser.tags[parser.tags.length - 1] || parser
	    if (tag.ns && parent.ns !== tag.ns) {
	      Object.keys(tag.ns).forEach(function (p) {
	        emitNode( parser
	                , "onopennamespace"
	                , { prefix: p , uri: tag.ns[p] } )
	      })
	    }

	    // handle deferred onattribute events
	    // Note: do not apply default ns to attributes:
	    //   http://www.w3.org/TR/REC-xml-names/#defaulting
	    for (var i = 0, l = parser.attribList.length; i < l; i ++) {
	      var nv = parser.attribList[i]
	      var name = nv[0]
	        , value = nv[1]
	        , qualName = qname(name)
	        , prefix = qualName.prefix
	        , local = qualName.local
	        , uri = prefix == "" ? "" : (tag.ns[prefix] || "")
	        , a = { name: name
	              , value: value
	              , prefix: prefix
	              , local: local
	              , uri: uri
	              }

	      // if there's any attributes with an undefined namespace,
	      // then fail on them now.
	      if (prefix && prefix != "xmlns" && !uri) {
	        strictFail(parser, "Unbound namespace prefix: "
	                         + JSON.stringify(prefix))
	        a.uri = prefix
	      }
	      parser.tag.attributes[name] = a
	      emitNode(parser, "onattribute", a)
	    }
	    parser.attribList.length = 0
	  }

	  // process the tag
	  parser.sawRoot = true
	  parser.tags.push(parser.tag)
	  emitNode(parser, "onopentag", parser.tag)
	  if (!selfClosing) {
	    // special case for <script> in non-strict mode.
	    if (!parser.noscript && parser.tagName.toLowerCase() === "script") {
	      parser.state = S.SCRIPT
	    } else {
	      parser.state = S.TEXT
	    }
	    parser.tag = null
	    parser.tagName = ""
	  }
	  parser.attribName = parser.attribValue = ""
	  parser.attribList.length = 0
	}

	function closeTag (parser) {
	  if (!parser.tagName) {
	    strictFail(parser, "Weird empty close tag.")
	    parser.textNode += "</>"
	    parser.state = S.TEXT
	    return
	  }
	  // first make sure that the closing tag actually exists.
	  // <a><b></c></b></a> will close everything, otherwise.
	  var t = parser.tags.length
	  var tagName = parser.tagName
	  if (!parser.strict) tagName = tagName[parser.looseCase]()
	  var closeTo = tagName
	  while (t --) {
	    var close = parser.tags[t]
	    if (close.name !== closeTo) {
	      // fail the first time in strict mode
	      strictFail(parser, "Unexpected close tag")
	    } else break
	  }

	  // didn't find it.  we already failed for strict, so just abort.
	  if (t < 0) {
	    strictFail(parser, "Unmatched closing tag: "+parser.tagName)
	    parser.textNode += "</" + parser.tagName + ">"
	    parser.state = S.TEXT
	    return
	  }
	  parser.tagName = tagName
	  var s = parser.tags.length
	  while (s --> t) {
	    var tag = parser.tag = parser.tags.pop()
	    parser.tagName = parser.tag.name
	    emitNode(parser, "onclosetag", parser.tagName)

	    var x = {}
	    for (var i in tag.ns) x[i] = tag.ns[i]

	    var parent = parser.tags[parser.tags.length - 1] || parser
	    if (parser.opt.xmlns && tag.ns !== parent.ns) {
	      // remove namespace bindings introduced by tag
	      Object.keys(tag.ns).forEach(function (p) {
	        var n = tag.ns[p]
	        emitNode(parser, "onclosenamespace", { prefix: p, uri: n })
	      })
	    }
	  }
	  if (t === 0) parser.closedRoot = true
	  parser.tagName = parser.attribValue = parser.attribName = ""
	  parser.attribList.length = 0
	  parser.state = S.TEXT
	}

	function parseEntity (parser) {
	  var entity = parser.entity.toLowerCase()
	    , num
	    , numStr = ""
	  if (parser.ENTITIES[entity]) return parser.ENTITIES[entity]
	  if (entity.charAt(0) === "#") {
	    if (entity.charAt(1) === "x") {
	      entity = entity.slice(2)
	      num = parseInt(entity, 16)
	      numStr = num.toString(16)
	    } else {
	      entity = entity.slice(1)
	      num = parseInt(entity, 10)
	      numStr = num.toString(10)
	    }
	  }
	  entity = entity.replace(/^0+/, "")
	  if (numStr.toLowerCase() !== entity) {
	    strictFail(parser, "Invalid character entity")
	    return "&"+parser.entity + ";"
	  }
	  return String.fromCharCode(num)
	}

	function write (chunk) {
	  var parser = this
	  if (this.error) throw this.error
	  if (parser.closed) return error(parser,
	    "Cannot write after close. Assign an onready handler.")
	  if (chunk === null) return end(parser)
	  var i = 0, c = ""
	  while (parser.c = c = chunk.charAt(i++)) {
	    if (parser.trackPosition) {
	      parser.position ++
	      if (c === "\n") {
	        parser.line ++
	        parser.column = 0
	      } else parser.column ++
	    }
	    switch (parser.state) {

	      case S.BEGIN:
	        if (c === "<") parser.state = S.OPEN_WAKA
	        else if (not(whitespace,c)) {
	          // have to process this as a text node.
	          // weird, but happens.
	          strictFail(parser, "Non-whitespace before first tag.")
	          parser.textNode = c
	          parser.state = S.TEXT
	        }
	      continue

	      case S.TEXT:
	        if (parser.sawRoot && !parser.closedRoot) {
	          var starti = i-1
	          while (c && c!=="<" && c!=="&") {
	            c = chunk.charAt(i++)
	            if (c && parser.trackPosition) {
	              parser.position ++
	              if (c === "\n") {
	                parser.line ++
	                parser.column = 0
	              } else parser.column ++
	            }
	          }
	          parser.textNode += chunk.substring(starti, i-1)
	        }
	        if (c === "<") parser.state = S.OPEN_WAKA
	        else {
	          if (not(whitespace, c) && (!parser.sawRoot || parser.closedRoot))
	            strictFail("Text data outside of root node.")
	          if (c === "&") parser.state = S.TEXT_ENTITY
	          else parser.textNode += c
	        }
	      continue

	      case S.SCRIPT:
	        // only non-strict
	        if (c === "<") {
	          parser.state = S.SCRIPT_ENDING
	        } else parser.script += c
	      continue

	      case S.SCRIPT_ENDING:
	        if (c === "/") {
	          emitNode(parser, "onscript", parser.script)
	          parser.state = S.CLOSE_TAG
	          parser.script = ""
	          parser.tagName = ""
	        } else {
	          parser.script += "<" + c
	          parser.state = S.SCRIPT
	        }
	      continue

	      case S.OPEN_WAKA:
	        // either a /, ?, !, or text is coming next.
	        if (c === "!") {
	          parser.state = S.SGML_DECL
	          parser.sgmlDecl = ""
	        } else if (is(whitespace, c)) {
	          // wait for it...
	        } else if (is(nameStart,c)) {
	          parser.startTagPosition = parser.position - 1
	          parser.state = S.OPEN_TAG
	          parser.tagName = c
	        } else if (c === "/") {
	          parser.startTagPosition = parser.position - 1
	          parser.state = S.CLOSE_TAG
	          parser.tagName = ""
	        } else if (c === "?") {
	          parser.state = S.PROC_INST
	          parser.procInstName = parser.procInstBody = ""
	        } else {
	          strictFail(parser, "Unencoded <")
	          parser.textNode += "<" + c
	          parser.state = S.TEXT
	        }
	      continue

	      case S.SGML_DECL:
	        if ((parser.sgmlDecl+c).toUpperCase() === CDATA) {
	          emitNode(parser, "onopencdata")
	          parser.state = S.CDATA
	          parser.sgmlDecl = ""
	          parser.cdata = ""
	        } else if (parser.sgmlDecl+c === "--") {
	          parser.state = S.COMMENT
	          parser.comment = ""
	          parser.sgmlDecl = ""
	        } else if ((parser.sgmlDecl+c).toUpperCase() === DOCTYPE) {
	          parser.state = S.DOCTYPE
	          if (parser.doctype || parser.sawRoot) strictFail(parser,
	            "Inappropriately located doctype declaration")
	          parser.doctype = ""
	          parser.sgmlDecl = ""
	        } else if (c === ">") {
	          emitNode(parser, "onsgmldeclaration", parser.sgmlDecl)
	          parser.sgmlDecl = ""
	          parser.state = S.TEXT
	        } else if (is(quote, c)) {
	          parser.state = S.SGML_DECL_QUOTED
	          parser.sgmlDecl += c
	        } else parser.sgmlDecl += c
	      continue

	      case S.SGML_DECL_QUOTED:
	        if (c === parser.q) {
	          parser.state = S.SGML_DECL
	          parser.q = ""
	        }
	        parser.sgmlDecl += c
	      continue

	      case S.DOCTYPE:
	        if (c === ">") {
	          parser.state = S.TEXT
	          emitNode(parser, "ondoctype", parser.doctype)
	          parser.doctype = true // just remember that we saw it.
	        } else {
	          parser.doctype += c
	          if (c === "[") parser.state = S.DOCTYPE_DTD
	          else if (is(quote, c)) {
	            parser.state = S.DOCTYPE_QUOTED
	            parser.q = c
	          }
	        }
	      continue

	      case S.DOCTYPE_QUOTED:
	        parser.doctype += c
	        if (c === parser.q) {
	          parser.q = ""
	          parser.state = S.DOCTYPE
	        }
	      continue

	      case S.DOCTYPE_DTD:
	        parser.doctype += c
	        if (c === "]") parser.state = S.DOCTYPE
	        else if (is(quote,c)) {
	          parser.state = S.DOCTYPE_DTD_QUOTED
	          parser.q = c
	        }
	      continue

	      case S.DOCTYPE_DTD_QUOTED:
	        parser.doctype += c
	        if (c === parser.q) {
	          parser.state = S.DOCTYPE_DTD
	          parser.q = ""
	        }
	      continue

	      case S.COMMENT:
	        if (c === "-") parser.state = S.COMMENT_ENDING
	        else parser.comment += c
	      continue

	      case S.COMMENT_ENDING:
	        if (c === "-") {
	          parser.state = S.COMMENT_ENDED
	          parser.comment = textopts(parser.opt, parser.comment)
	          if (parser.comment) emitNode(parser, "oncomment", parser.comment)
	          parser.comment = ""
	        } else {
	          parser.comment += "-" + c
	          parser.state = S.COMMENT
	        }
	      continue

	      case S.COMMENT_ENDED:
	        if (c !== ">") {
	          strictFail(parser, "Malformed comment")
	          // allow <!-- blah -- bloo --> in non-strict mode,
	          // which is a comment of " blah -- bloo "
	          parser.comment += "--" + c
	          parser.state = S.COMMENT
	        } else parser.state = S.TEXT
	      continue

	      case S.CDATA:
	        if (c === "]") parser.state = S.CDATA_ENDING
	        else parser.cdata += c
	      continue

	      case S.CDATA_ENDING:
	        if (c === "]") parser.state = S.CDATA_ENDING_2
	        else {
	          parser.cdata += "]" + c
	          parser.state = S.CDATA
	        }
	      continue

	      case S.CDATA_ENDING_2:
	        if (c === ">") {
	          if (parser.cdata) emitNode(parser, "oncdata", parser.cdata)
	          emitNode(parser, "onclosecdata")
	          parser.cdata = ""
	          parser.state = S.TEXT
	        } else if (c === "]") {
	          parser.cdata += "]"
	        } else {
	          parser.cdata += "]]" + c
	          parser.state = S.CDATA
	        }
	      continue

	      case S.PROC_INST:
	        if (c === "?") parser.state = S.PROC_INST_ENDING
	        else if (is(whitespace, c)) parser.state = S.PROC_INST_BODY
	        else parser.procInstName += c
	      continue

	      case S.PROC_INST_BODY:
	        if (!parser.procInstBody && is(whitespace, c)) continue
	        else if (c === "?") parser.state = S.PROC_INST_ENDING
	        else if (is(quote, c)) {
	          parser.state = S.PROC_INST_QUOTED
	          parser.q = c
	          parser.procInstBody += c
	        } else parser.procInstBody += c
	      continue

	      case S.PROC_INST_ENDING:
	        if (c === ">") {
	          emitNode(parser, "onprocessinginstruction", {
	            name : parser.procInstName,
	            body : parser.procInstBody
	          })
	          parser.procInstName = parser.procInstBody = ""
	          parser.state = S.TEXT
	        } else {
	          parser.procInstBody += "?" + c
	          parser.state = S.PROC_INST_BODY
	        }
	      continue

	      case S.PROC_INST_QUOTED:
	        parser.procInstBody += c
	        if (c === parser.q) {
	          parser.state = S.PROC_INST_BODY
	          parser.q = ""
	        }
	      continue

	      case S.OPEN_TAG:
	        if (is(nameBody, c)) parser.tagName += c
	        else {
	          newTag(parser)
	          if (c === ">") openTag(parser)
	          else if (c === "/") parser.state = S.OPEN_TAG_SLASH
	          else {
	            if (not(whitespace, c)) strictFail(
	              parser, "Invalid character in tag name")
	            parser.state = S.ATTRIB
	          }
	        }
	      continue

	      case S.OPEN_TAG_SLASH:
	        if (c === ">") {
	          openTag(parser, true)
	          closeTag(parser)
	        } else {
	          strictFail(parser, "Forward-slash in opening tag not followed by >")
	          parser.state = S.ATTRIB
	        }
	      continue

	      case S.ATTRIB:
	        // haven't read the attribute name yet.
	        if (is(whitespace, c)) continue
	        else if (c === ">") openTag(parser)
	        else if (c === "/") parser.state = S.OPEN_TAG_SLASH
	        else if (is(nameStart, c)) {
	          parser.attribName = c
	          parser.attribValue = ""
	          parser.state = S.ATTRIB_NAME
	        } else strictFail(parser, "Invalid attribute name")
	      continue

	      case S.ATTRIB_NAME:
	        if (c === "=") parser.state = S.ATTRIB_VALUE
	        else if (is(whitespace, c)) parser.state = S.ATTRIB_NAME_SAW_WHITE
	        else if (is(nameBody, c)) parser.attribName += c
	        else strictFail(parser, "Invalid attribute name")
	      continue

	      case S.ATTRIB_NAME_SAW_WHITE:
	        if (c === "=") parser.state = S.ATTRIB_VALUE
	        else if (is(whitespace, c)) continue
	        else {
	          strictFail(parser, "Attribute without value")
	          parser.tag.attributes[parser.attribName] = ""
	          parser.attribValue = ""
	          emitNode(parser, "onattribute",
	                   { name : parser.attribName, value : "" })
	          parser.attribName = ""
	          if (c === ">") openTag(parser)
	          else if (is(nameStart, c)) {
	            parser.attribName = c
	            parser.state = S.ATTRIB_NAME
	          } else {
	            strictFail(parser, "Invalid attribute name")
	            parser.state = S.ATTRIB
	          }
	        }
	      continue

	      case S.ATTRIB_VALUE:
	        if (is(whitespace, c)) continue
	        else if (is(quote, c)) {
	          parser.q = c
	          parser.state = S.ATTRIB_VALUE_QUOTED
	        } else {
	          strictFail(parser, "Unquoted attribute value")
	          parser.state = S.ATTRIB_VALUE_UNQUOTED
	          parser.attribValue = c
	        }
	      continue

	      case S.ATTRIB_VALUE_QUOTED:
	        if (c !== parser.q) {
	          if (c === "&") parser.state = S.ATTRIB_VALUE_ENTITY_Q
	          else parser.attribValue += c
	          continue
	        }
	        attrib(parser)
	        parser.q = ""
	        parser.state = S.ATTRIB
	      continue

	      case S.ATTRIB_VALUE_UNQUOTED:
	        if (not(attribEnd,c)) {
	          if (c === "&") parser.state = S.ATTRIB_VALUE_ENTITY_U
	          else parser.attribValue += c
	          continue
	        }
	        attrib(parser)
	        if (c === ">") openTag(parser)
	        else parser.state = S.ATTRIB
	      continue

	      case S.CLOSE_TAG:
	        if (!parser.tagName) {
	          if (is(whitespace, c)) continue
	          else if (not(nameStart, c)) strictFail(parser,
	            "Invalid tagname in closing tag.")
	          else parser.tagName = c
	        }
	        else if (c === ">") closeTag(parser)
	        else if (is(nameBody, c)) parser.tagName += c
	        else {
	          if (not(whitespace, c)) strictFail(parser,
	            "Invalid tagname in closing tag")
	          parser.state = S.CLOSE_TAG_SAW_WHITE
	        }
	      continue

	      case S.CLOSE_TAG_SAW_WHITE:
	        if (is(whitespace, c)) continue
	        if (c === ">") closeTag(parser)
	        else strictFail("Invalid characters in closing tag")
	      continue

	      case S.TEXT_ENTITY:
	      case S.ATTRIB_VALUE_ENTITY_Q:
	      case S.ATTRIB_VALUE_ENTITY_U:
	        switch(parser.state) {
	          case S.TEXT_ENTITY:
	            var returnState = S.TEXT, buffer = "textNode"
	          break

	          case S.ATTRIB_VALUE_ENTITY_Q:
	            var returnState = S.ATTRIB_VALUE_QUOTED, buffer = "attribValue"
	          break

	          case S.ATTRIB_VALUE_ENTITY_U:
	            var returnState = S.ATTRIB_VALUE_UNQUOTED, buffer = "attribValue"
	          break
	        }
	        if (c === ";") {
	          parser[buffer] += parseEntity(parser)
	          parser.entity = ""
	          parser.state = returnState
	        }
	        else if (is(entity, c)) parser.entity += c
	        else {
	          strictFail("Invalid character entity")
	          parser[buffer] += "&" + parser.entity + c
	          parser.entity = ""
	          parser.state = returnState
	        }
	      continue

	      default:
	        throw new Error(parser, "Unknown state: " + parser.state)
	    }
	  } // while
	  // cdata blocks can get very big under normal conditions. emit and move on.
	  // if (parser.state === S.CDATA && parser.cdata) {
	  //   emitNode(parser, "oncdata", parser.cdata)
	  //   parser.cdata = ""
	  // }
	  if (parser.position >= parser.bufferCheckPosition) checkBufferLength(parser)
	  return parser
	}

	})( false ? sax = {} : exports)


/***/ },
/* 88 */
/***/ function(module, exports) {

	module.exports = require("stream");

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var http             = __webpack_require__(78)
	  , https            = __webpack_require__(79)
	  , url              = __webpack_require__(80)
	  , EventEmitter     = __webpack_require__(74).EventEmitter
	  , Serializer       = __webpack_require__(81)
	  , Deserializer     = __webpack_require__(86)

	/**
	 * Creates a new Server object. Also creates an HTTP server to start listening
	 * for XML-RPC method calls. Will emit an event with the XML-RPC call's method
	 * name when receiving a method call.
	 *
	 * @constructor
	 * @param {Object|String} options - The HTTP server options. Either a URI string
	 *                                  (e.g. 'http://localhost:9090') or an object
	 *                                  with fields:
	 *   - {String} host              - (optional)
	 *   - {Number} port
	 * @param {Boolean} isSecure      - True if using https for making calls,
	 *                                  otherwise false.
	 * @return {Server}
	 */
	function Server(options, isSecure) {

	  if (false === (this instanceof Server)) {
	    return new Server(options, isSecure)
	  }

	  var that = this

	  // If a string URI is passed in, converts to URI fields
	  if (typeof options === 'string') {
	    options = url.parse(options)
	    options.host = options.hostname
	    options.path = options.pathname
	  }

	  function handleMethodCall(request, response) {
	    var deserializer = new Deserializer()
	    deserializer.deserializeMethodCall(request, function(error, methodName, params) {
	      if (that._events.hasOwnProperty(methodName)) {
	        that.emit(methodName, null, params, function(error, value) {
	          var xml = null
	          if (error !== null) {
	            xml = Serializer.serializeFault(error)
	          }
	          else {
	            xml = Serializer.serializeMethodResponse(value)
	          }
	          response.writeHead(200, {'Content-Type': 'text/xml'})
	          response.end(xml)
	        })
	      }
	      else {
	        that.emit('NotFound', methodName, params);
	        response.writeHead(404);
	        response.end();
	      }
	    })
	  }
	  var httpServer = isSecure ? https.createServer(options, handleMethodCall)
	                            : http.createServer(handleMethodCall)
	  httpServer.listen(options.port, options.host)
	}

	// Inherit from EventEmitter to emit and listen
	Server.prototype.__proto__ = EventEmitter.prototype

	module.exports = Server



/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;//     uuid.js
	//
	//     Copyright (c) 2010-2012 Robert Kieffer
	//     MIT License - http://opensource.org/licenses/mit-license.php

	/*global window, require, define */
	(function(_window) {
	  'use strict';

	  // Unique ID creation requires a high quality random # generator.  We feature
	  // detect to determine the best RNG source, normalizing to a function that
	  // returns 128-bits of randomness, since that's what's usually required
	  var _rng, _mathRNG, _nodeRNG, _whatwgRNG, _previousRoot;

	  function setupBrowser() {
	    // Allow for MSIE11 msCrypto
	    var _crypto = _window.crypto || _window.msCrypto;

	    if (!_rng && _crypto && _crypto.getRandomValues) {
	      // WHATWG crypto-based RNG - http://wiki.whatwg.org/wiki/Crypto
	      //
	      // Moderately fast, high quality
	      try {
	        var _rnds8 = new Uint8Array(16);
	        _whatwgRNG = _rng = function whatwgRNG() {
	          _crypto.getRandomValues(_rnds8);
	          return _rnds8;
	        };
	        _rng();
	      } catch(e) {}
	    }

	    if (!_rng) {
	      // Math.random()-based (RNG)
	      //
	      // If all else fails, use Math.random().  It's fast, but is of unspecified
	      // quality.
	      var  _rnds = new Array(16);
	      _mathRNG = _rng = function() {
	        for (var i = 0, r; i < 16; i++) {
	          if ((i & 0x03) === 0) { r = Math.random() * 0x100000000; }
	          _rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
	        }

	        return _rnds;
	      };
	      if ('undefined' !== typeof console && console.warn) {
	        console.warn("[SECURITY] node-uuid: crypto not usable, falling back to insecure Math.random()");
	      }
	    }
	  }

	  function setupNode() {
	    // Node.js crypto-based RNG - http://nodejs.org/docs/v0.6.2/api/crypto.html
	    //
	    // Moderately fast, high quality
	    if (true) {
	      try {
	        var _rb = __webpack_require__(91).randomBytes;
	        _nodeRNG = _rng = _rb && function() {return _rb(16);};
	        _rng();
	      } catch(e) {}
	    }
	  }

	  if (_window) {
	    setupBrowser();
	  } else {
	    setupNode();
	  }

	  // Buffer class to use
	  var BufferClass = ('function' === typeof Buffer) ? Buffer : Array;

	  // Maps for number <-> hex string conversion
	  var _byteToHex = [];
	  var _hexToByte = {};
	  for (var i = 0; i < 256; i++) {
	    _byteToHex[i] = (i + 0x100).toString(16).substr(1);
	    _hexToByte[_byteToHex[i]] = i;
	  }

	  // **`parse()` - Parse a UUID into it's component bytes**
	  function parse(s, buf, offset) {
	    var i = (buf && offset) || 0, ii = 0;

	    buf = buf || [];
	    s.toLowerCase().replace(/[0-9a-f]{2}/g, function(oct) {
	      if (ii < 16) { // Don't overflow!
	        buf[i + ii++] = _hexToByte[oct];
	      }
	    });

	    // Zero out remaining bytes if string was short
	    while (ii < 16) {
	      buf[i + ii++] = 0;
	    }

	    return buf;
	  }

	  // **`unparse()` - Convert UUID byte array (ala parse()) into a string**
	  function unparse(buf, offset) {
	    var i = offset || 0, bth = _byteToHex;
	    return  bth[buf[i++]] + bth[buf[i++]] +
	            bth[buf[i++]] + bth[buf[i++]] + '-' +
	            bth[buf[i++]] + bth[buf[i++]] + '-' +
	            bth[buf[i++]] + bth[buf[i++]] + '-' +
	            bth[buf[i++]] + bth[buf[i++]] + '-' +
	            bth[buf[i++]] + bth[buf[i++]] +
	            bth[buf[i++]] + bth[buf[i++]] +
	            bth[buf[i++]] + bth[buf[i++]];
	  }

	  // **`v1()` - Generate time-based UUID**
	  //
	  // Inspired by https://github.com/LiosK/UUID.js
	  // and http://docs.python.org/library/uuid.html

	  // random #'s we need to init node and clockseq
	  var _seedBytes = _rng();

	  // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
	  var _nodeId = [
	    _seedBytes[0] | 0x01,
	    _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
	  ];

	  // Per 4.2.2, randomize (14 bit) clockseq
	  var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;

	  // Previous uuid creation time
	  var _lastMSecs = 0, _lastNSecs = 0;

	  // See https://github.com/broofa/node-uuid for API details
	  function v1(options, buf, offset) {
	    var i = buf && offset || 0;
	    var b = buf || [];

	    options = options || {};

	    var clockseq = (options.clockseq != null) ? options.clockseq : _clockseq;

	    // UUID timestamps are 100 nano-second units since the Gregorian epoch,
	    // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
	    // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
	    // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
	    var msecs = (options.msecs != null) ? options.msecs : new Date().getTime();

	    // Per 4.2.1.2, use count of uuid's generated during the current clock
	    // cycle to simulate higher resolution clock
	    var nsecs = (options.nsecs != null) ? options.nsecs : _lastNSecs + 1;

	    // Time since last uuid creation (in msecs)
	    var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

	    // Per 4.2.1.2, Bump clockseq on clock regression
	    if (dt < 0 && options.clockseq == null) {
	      clockseq = clockseq + 1 & 0x3fff;
	    }

	    // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
	    // time interval
	    if ((dt < 0 || msecs > _lastMSecs) && options.nsecs == null) {
	      nsecs = 0;
	    }

	    // Per 4.2.1.2 Throw error if too many uuids are requested
	    if (nsecs >= 10000) {
	      throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
	    }

	    _lastMSecs = msecs;
	    _lastNSecs = nsecs;
	    _clockseq = clockseq;

	    // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
	    msecs += 12219292800000;

	    // `time_low`
	    var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
	    b[i++] = tl >>> 24 & 0xff;
	    b[i++] = tl >>> 16 & 0xff;
	    b[i++] = tl >>> 8 & 0xff;
	    b[i++] = tl & 0xff;

	    // `time_mid`
	    var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
	    b[i++] = tmh >>> 8 & 0xff;
	    b[i++] = tmh & 0xff;

	    // `time_high_and_version`
	    b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
	    b[i++] = tmh >>> 16 & 0xff;

	    // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
	    b[i++] = clockseq >>> 8 | 0x80;

	    // `clock_seq_low`
	    b[i++] = clockseq & 0xff;

	    // `node`
	    var node = options.node || _nodeId;
	    for (var n = 0; n < 6; n++) {
	      b[i + n] = node[n];
	    }

	    return buf ? buf : unparse(b);
	  }

	  // **`v4()` - Generate random UUID**

	  // See https://github.com/broofa/node-uuid for API details
	  function v4(options, buf, offset) {
	    // Deprecated - 'format' argument, as supported in v1.2
	    var i = buf && offset || 0;

	    if (typeof(options) === 'string') {
	      buf = (options === 'binary') ? new BufferClass(16) : null;
	      options = null;
	    }
	    options = options || {};

	    var rnds = options.random || (options.rng || _rng)();

	    // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
	    rnds[6] = (rnds[6] & 0x0f) | 0x40;
	    rnds[8] = (rnds[8] & 0x3f) | 0x80;

	    // Copy bytes to buffer, if provided
	    if (buf) {
	      for (var ii = 0; ii < 16; ii++) {
	        buf[i + ii] = rnds[ii];
	      }
	    }

	    return buf || unparse(rnds);
	  }

	  // Export public API
	  var uuid = v4;
	  uuid.v1 = v1;
	  uuid.v4 = v4;
	  uuid.parse = parse;
	  uuid.unparse = unparse;
	  uuid.BufferClass = BufferClass;
	  uuid._rng = _rng;
	  uuid._mathRNG = _mathRNG;
	  uuid._nodeRNG = _nodeRNG;
	  uuid._whatwgRNG = _whatwgRNG;

	  if (('undefined' !== typeof module) && module.exports) {
	    // Publish as node.js module
	    module.exports = uuid;
	  } else if (true) {
	    // Publish as AMD module
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {return uuid;}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


	  } else {
	    // Publish as global (in browsers)
	    _previousRoot = _window.uuid;

	    // **`noConflict()` - (browser only) to reset global 'uuid' var**
	    uuid.noConflict = function() {
	      _window.uuid = _previousRoot;
	      return uuid;
	    };

	    _window.uuid = uuid;
	  }
	})('undefined' !== typeof window ? window : null);


/***/ },
/* 91 */
/***/ function(module, exports) {

	module.exports = require("crypto");

/***/ }
/******/ ])
});
;