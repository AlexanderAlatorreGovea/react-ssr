/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

var _bodyParser = __webpack_require__(4);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _express = __webpack_require__(5);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(6);

var _server2 = _interopRequireDefault(_server);

var _reactHelmet = __webpack_require__(1);

var _server3 = __webpack_require__(7);

var _App = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var PORT = process.env.PORT || 3000;

app.use(_bodyParser2.default.json());
app.use(_express2.default.static("build/public"));

app.get("*", function (req, res) {
  var context = {};

  var APP = _server2.default.renderToString(_react2.default.createElement(
    _server3.StaticRouter,
    { location: req.url, context: context },
    _react2.default.createElement(_App.App, null)
  ));

  var helmet = _reactHelmet.Helmet.renderStatic();

  var html = "\n    <!DOCTYPE html>\n    <html lang=\"en\">\n    <head>\n        " + helmet.meta.toString() + "\n        " + helmet.title.toString() + "\n        <title>React SSR</title>\n        <link rel=\"stylesheet\" href=\"styles.css\">\n    </head>\n    <body>\n        <div id=\"root\">\n        " + APP + "\n        </div>\n        <script type=\"text/javascript\" src=\"client_bundle.js\"></script>\n    </body>\n    </html>\n  ";

  res.send(html);
});

app.listen(PORT, function () {
  console.log("App running on " + PORT);
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom/server.js");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(9);

var _HomePage = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(props) {
  return _react2.default.createElement(
    "div",
    null,
    "Home",
    _react2.default.createElement(
      _reactRouter.Routes,
      null,
      _react2.default.createElement(_reactRouter.Route, { path: "/", element: _react2.default.createElement(_HomePage.HomePage, props) })
    )
  );
};

exports.App = App;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomePage = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomePage = function HomePage() {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement("meta", { charSet: "utf-8" }),
      _react2.default.createElement(
        "title",
        null,
        "Home Page"
      ),
      _react2.default.createElement("link", { rel: "canonical", href: "http://mysite.com/example" })
    ),
    _react2.default.createElement(
      "h1",
      null,
      "Home Page"
    ),
    _react2.default.createElement(
      "button",
      { onClick: function onClick() {
          return console.log("js is running");
        } },
      "console log some term"
    )
  );
};

exports.HomePage = HomePage;

/***/ })
/******/ ]);