(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("babel-runtime/regenerator"), require("babel-runtime/helpers/asyncToGenerator"), require("fuse.js"), require("opensubtitles"), require("node-uuid"), require("addic7ed-api"));
	else if(typeof define === 'function' && define.amd)
		define(["babel-runtime/regenerator", "babel-runtime/helpers/asyncToGenerator", "fuse.js", "opensubtitles", "node-uuid", "addic7ed-api"], factory);
	else if(typeof exports === 'object')
		exports["getsub-core"] = factory(require("babel-runtime/regenerator"), require("babel-runtime/helpers/asyncToGenerator"), require("fuse.js"), require("opensubtitles"), require("node-uuid"), require("addic7ed-api"));
	else
		root["getsub-core"] = factory(root["babel-runtime/regenerator"], root["babel-runtime/helpers/asyncToGenerator"], root["fuse.js"], root["opensubtitles"], root["node-uuid"], root["addic7ed-api"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_9__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
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
	
	var _asyncToGenerator2 = __webpack_require__(2);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	var _fuse = __webpack_require__(3);
	
	var _fuse2 = _interopRequireDefault(_fuse);
	
	var _utils = __webpack_require__(4);
	
	var _opensubtitle = __webpack_require__(5);
	
	var _opensubtitle2 = _interopRequireDefault(_opensubtitle);
	
	var _addic7ed = __webpack_require__(8);
	
	var _addic7ed2 = _interopRequireDefault(_addic7ed);
	
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
	    var originName, info, _subtitles, subtitles, fuse;
	
	    return _regenerator2.default.wrap(function _callee$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            originName = file.name;
	
	            if (!(0, _utils.isTvShow)(originName)) {
	              _context.next = 6;
	              break;
	            }
	
	            info = (0, _utils.extractShow)(originName);
	            _context.next = 5;
	            return (0, _addic7ed2.default)(info.name, info.showIndex[0], info.showIndex[1], lang);
	
	          case 5:
	            _subtitles = _context.sent;
	
	          case 6:
	            return _context.abrupt('return');
	
	          case 9:
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
	
	          case 12:
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
/***/ function(module, exports) {

	module.exports = require("babel-runtime/regenerator");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("fuse.js");

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isTvShow = isTvShow;
	exports.extractShow = extractShow;
	var tvShowNamePattern = formatRegex(/(.*)((S\d\d)|(\d+X\d+))/);
	var weirdPattern = formatRegex(/(\d+X\d+)/);
	var seasonPattern = formatRegex(/(S\d\d)/);
	var episodePattern = formatRegex(/(E\d\d)/);
	
	function formatRegex(pattern) {
	  return new RegExp(pattern, 'i');
	}
	
	function isTvShow(name) {
	  var pattern = formatRegex(/(S\d\d((E\d\dE\d\d)|(E\d\d)))|(\d+X\d+)/);
	  return name.match(pattern);
	}
	
	function extractShow(name) {
	
	  var result = {
	    name: undefined,
	    showIndex: []
	  };
	
	  if (name.match(tvShowNamePattern)) {
	    result.name = tvShowNamePattern.exec(name)[1];
	  }
	
	  if (name.match(weirdPattern)) {
	    result.showIndex = weirdPattern.exec(name)[0].toUpperCase().split('X');
	  } else {
	    result.showIndex.push(seasonPattern.exec(name)[0].slice(1));
	    result.showIndex.push(episodePattern.exec(name)[0].slice(1));
	  }
	
	  return result;
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _regenerator = __webpack_require__(1);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _asyncToGenerator2 = __webpack_require__(2);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	var _opensubtitles = __webpack_require__(6);
	
	var _opensubtitles2 = _interopRequireDefault(_opensubtitles);
	
	var _nodeUuid = __webpack_require__(7);
	
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
/* 6 */
/***/ function(module, exports) {

	module.exports = require("opensubtitles");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("node-uuid");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _regenerator = __webpack_require__(1);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _asyncToGenerator2 = __webpack_require__(2);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	var _addic7edApi = __webpack_require__(9);
	
	var _addic7edApi2 = _interopRequireDefault(_addic7edApi);
	
	var _nodeUuid = __webpack_require__(7);
	
	var _nodeUuid2 = _interopRequireDefault(_nodeUuid);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(name, season, episode, lang) {
	    return _regenerator2.default.wrap(function _callee$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            console.log(name, season, episode);
	            _context.next = 3;
	            return _addic7edApi2.default.search(name, season, episode, lang).then(function (subtitlesList) {
	              var subInfo = subtitlesList[0];
	              console.log(subInfo);
	            }).catch(function (err) {
	              console.log('err', err);
	            });
	
	          case 3:
	          case 'end':
	            return _context.stop();
	        }
	      }
	    }, _callee, undefined);
	  }));
	
	  return function (_x, _x2, _x3, _x4) {
	    return _ref.apply(this, arguments);
	  };
	}();

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("addic7ed-api");

/***/ }
/******/ ])
});
;
//# sourceMappingURL=getsub-core.js.map