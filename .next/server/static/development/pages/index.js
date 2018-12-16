module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var _node_modules_aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! animejs */ "animejs");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/tommy.t.lusun/Documents/projects/nextjs/components/header.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var isBrowser = typeof window !== 'undefined';
      var AOS = isBrowser ? __webpack_require__(/*! aos */ "aos") : undefined;
      this.aos = AOS;
      this.aos.init({
        duration: 500,
        anchorPlacement: 'bottom-top'
      });
      window.addEventListener('aos:in', function (_ref) {
        var detail = _ref.detail;
        console.log('animated in', detail);
      }); // window.onscroll = function() {
      //     if (window.pageYOffset >= 1) {
      //         header.classList.add("sticky");
      //       } else {
      //         header.classList.remove("sticky");
      //       }
      // };
      // var header = document.getElementById("header");
      // var sticky = header.offsetTop;

      console.log(window);
    }
  }, {
    key: "myFunction",
    value: function myFunction() {}
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps() {
      this.aos.refresh();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "header",
        className: "jsx-946950859" + " " + "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-946950859" + " " + "header-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Tommy Lusun")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-946950859" + " " + "nav-tab",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-946950859",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-946950859",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "About"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-946950859",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-946950859",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "Contact"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-946950859",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/projects",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-946950859",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "Projects")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "946950859",
        css: ".header.jsx-946950859{position:fixed;top:0px;width:100%;padding-left:10%;padding-right:10%;height:80px;background:#ECF0F1F0;z-index:9999;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.header-title.jsx-946950859{font-size:2rem;cursor:pointer;}li.jsx-946950859{list-style:none;width:100px;cursor:pointer;}li.jsx-946950859:hover{color:gray;}.nav-tab.jsx-946950859{width:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;text-align:center;margin-left:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21teS50Lmx1c3VuL0RvY3VtZW50cy9wcm9qZWN0cy9uZXh0anMvY29tcG9uZW50cy9oZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0VvQixBQUc0QixBQWFBLEFBSUMsQUFLTCxBQUdELFVBQ0csQ0FIakIsSUF0QlksQUFhTyxDQUlILE9BaEJBLEtBaUJHLEVBSm5CLElBWnFCLFNBaUJyQixRQWhCc0Isa0JBQ04sWUFDUyxHQXFCRixrQkFwQk4sYUFDQSxzQ0FvQkssa0JBQ0QsaUJBQ3JCLENBcEJ1Qiw2RkFDdkIiLCJmaWxlIjoiL1VzZXJzL3RvbW15LnQubHVzdW4vRG9jdW1lbnRzL3Byb2plY3RzL25leHRqcy9jb21wb25lbnRzL2hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi4vbm9kZV9tb2R1bGVzL2Fvcy9kaXN0L2Fvcy5jc3MnO1xuaW1wb3J0IGFuaW1lIGZyb20gJ2FuaW1lanMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xuICAgICAgICBjb25zdCBBT1MgPSBpc0Jyb3dzZXIgPyByZXF1aXJlKCdhb3MnKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgXG5cbiAgICAgICAgdGhpcy5hb3MgPSBBT1M7XG4gICAgICAgIHRoaXMuYW9zLmluaXQoe1xuICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgICAgIGFuY2hvclBsYWNlbWVudDogJ2JvdHRvbS10b3AnXG4gICAgICAgIH0pO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYW9zOmluJywgKHsgZGV0YWlsIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhbmltYXRlZCBpbicsIGRldGFpbCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+PSAxKSB7XG4gICAgICAgIC8vICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJzdGlja3lcIik7XG4gICAgICAgIC8vICAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGlja3lcIik7XG4gICAgICAgIC8vICAgICAgIH1cbiAgICAgICAgLy8gfTtcbiAgICAgICAgLy8gdmFyIGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyXCIpO1xuICAgICAgICAvLyB2YXIgc3RpY2t5ID0gaGVhZGVyLm9mZnNldFRvcDtcblxuICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cpO1xuICAgIH1cbiAgICBteUZ1bmN0aW9uKCkge1xuICAgICAgICBcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAoKXsgXG4gICAgICAgIHRoaXMuYW9zLnJlZnJlc2goKTsgXG4gICAgfSBcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgaWQ9XCJoZWFkZXJcIiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItdGl0bGVcIj5Ub21teSBMdXN1bjwvZGl2PlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtdGFiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+QWJvdXQ8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+Q29udGFjdDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+UHJvamVjdHM8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlIDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTAlO1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI0VDRjBGMUYwO1xuICAgICAgICAgICAgei1pbmRleDogOTk5OTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWRlci10aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgbGkge1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBsaTpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgfVxuICAgICAgICAubmF2LXRhYntcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDwvZGl2PlxuICAgICAgICApO1xuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il19 */\n/*@ sourceURL=/Users/tommy.t.lusun/Documents/projects/nextjs/components/header.js */",
        __self: this
      }));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/homePage.js":
/*!********************************!*\
  !*** ./components/homePage.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var _node_modules_aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! animejs */ "animejs");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/tommy.t.lusun/Documents/projects/nextjs/components/homePage.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var HomePage =
/*#__PURE__*/
function (_Component) {
  _inherits(HomePage, _Component);

  function HomePage() {
    _classCallCheck(this, HomePage);

    return _possibleConstructorReturn(this, _getPrototypeOf(HomePage).apply(this, arguments));
  }

  _createClass(HomePage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var isBrowser = typeof window !== 'undefined';
      var AOS = isBrowser ? __webpack_require__(/*! aos */ "aos") : undefined;
      this.aos = AOS;
      this.aos.init({
        duration: 500,
        anchorPlacement: 'bottom-top'
      });
      window.addEventListener('aos:in', function (_ref) {
        var detail = _ref.detail;
        console.log('animated in', detail);
      });
      animejs__WEBPACK_IMPORTED_MODULE_3___default()({
        delay: 500,
        duration: 750,
        targets: 'polygon',
        points: '64 64 0 100 64 64 64 0 64 64 120 100',
        easing: [.91, -0.25, .29, 1.56]
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps() {
      this.aos.refresh();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3121637905" + " " + "title-card title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3121637905" + " " + "full-card first-card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        style: {
          top: '30vh'
        },
        width: "428",
        height: "428",
        viewBox: "0 0 128 128",
        className: "jsx-3121637905" + " " + "welcome",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("polygon", {
        points: "64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96",
        className: "jsx-3121637905",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3121637905" + " " + "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Welcome")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3121637905" + " " + "full-card second-card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos-offset": "100",
        "data-aos-anchor-placement": "top-bottom",
        "data-aos": "fade-left",
        className: "jsx-3121637905" + " " + "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Scroll down..")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3121637905" + " " + "full-card third-card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos-offset": "100",
        "data-aos-anchor-placement": "top-bottom",
        "data-aos": "fade-left",
        className: "jsx-3121637905" + " " + "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "for a special message")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3121637905" + " " + "full-card fourth-card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos-id": "super-duper",
        "data-aos-offset": "-300",
        "data-aos-anchor-placement": "center-center",
        "data-aos-delay": "500",
        "data-aos": "fade-in",
        className: "jsx-3121637905" + " " + "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "Hi")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3121637905",
        css: ".welcome.jsx-3121637905{position:absolute;top:50vh;}.title-card.jsx-3121637905{text-align:center;}.first-card.jsx-3121637905{background:linear-gradient(180deg,#FFB3A7 0%,#FFB3A7 35%,#BE90D4 100%);}.second-card.jsx-3121637905{background:#BE90D4;height:50vh;}.third-card.jsx-3121637905{background:linear-gradient(180deg,#BE90D4 0%,#BE90D4 35%,#1F4788 100%);}.fourth-card.jsx-3121637905{background:linear-gradient(180deg,#1F4788 0%,#1F4788 35%,#264348 100%);color:white;height:100vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21teS50Lmx1c3VuL0RvY3VtZW50cy9wcm9qZWN0cy9uZXh0anMvY29tcG9uZW50cy9ob21lUGFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRG9CLEFBRytCLEFBSUEsQUFHd0QsQUFHdkQsQUFJdUQsQUFHQSxrQkFoQmpFLEFBSWIsQ0FNZ0IsUUFUaEIsSUFVQSx3Q0FKQSxBQU9BLEFBR2dCLFlBQ0MsYUFDakIiLCJmaWxlIjoiL1VzZXJzL3RvbW15LnQubHVzdW4vRG9jdW1lbnRzL3Byb2plY3RzL25leHRqcy9jb21wb25lbnRzL2hvbWVQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuLi9ub2RlX21vZHVsZXMvYW9zL2Rpc3QvYW9zLmNzcyc7XG5pbXBvcnQgYW5pbWUgZnJvbSAnYW5pbWVqcyc7XG5cbmNsYXNzIEhvbWVQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zdCBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbiAgICAgICAgY29uc3QgQU9TID0gaXNCcm93c2VyID8gcmVxdWlyZSgnYW9zJykgOiB1bmRlZmluZWQ7XG4gICAgICAgIFxuXG4gICAgICAgIHRoaXMuYW9zID0gQU9TO1xuICAgICAgICB0aGlzLmFvcy5pbml0KHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgICBhbmNob3JQbGFjZW1lbnQ6ICdib3R0b20tdG9wJ1xuICAgICAgICB9KTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2FvczppbicsICh7IGRldGFpbCB9KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYW5pbWF0ZWQgaW4nLCBkZXRhaWwpO1xuICAgICAgICB9KTtcbiAgICAgICAgYW5pbWUoe1xuICAgICAgICAgICAgZGVsYXk6IDUwMCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiA3NTAsXG4gICAgICAgICAgICB0YXJnZXRzOiAncG9seWdvbicsXG4gICAgICAgICAgICBwb2ludHM6ICc2NCA2NCAwIDEwMCA2NCA2NCA2NCAwIDY0IDY0IDEyMCAxMDAnLFxuICAgICAgICAgICAgZWFzaW5nOiBbLjkxLC0wLjI1LC4yOSwxLjU2XVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAoKXsgXG4gICAgICAgIHRoaXMuYW9zLnJlZnJlc2goKTsgXG4gICAgfSBcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtY2FyZCB0aXRsZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdWxsLWNhcmQgZmlyc3QtY2FyZFwiID5cbiAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cIndlbGNvbWVcIiBzdHlsZT17e3RvcDogJzMwdmgnfX0gd2lkdGg9XCI0MjhcIiBoZWlnaHQ9XCI0MjhcIiB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz1cIjY0IDEyOCA4LjU3NCA5NiA4LjU3NCAzMiA2NCAwIDExOS40MjYgMzIgMTE5LjQyNiA5NlwiPjwvcG9seWdvbj5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIiA+V2VsY29tZTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ1bGwtY2FyZCBzZWNvbmQtY2FyZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiIGRhdGEtYW9zLW9mZnNldD1cIjEwMFwiIGRhdGEtYW9zLWFuY2hvci1wbGFjZW1lbnQ9XCJ0b3AtYm90dG9tXCIgZGF0YS1hb3M9XCJmYWRlLWxlZnRcIj5TY3JvbGwgZG93bi4uPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdWxsLWNhcmQgdGhpcmQtY2FyZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiIGRhdGEtYW9zLW9mZnNldD1cIjEwMFwiIGRhdGEtYW9zLWFuY2hvci1wbGFjZW1lbnQ9XCJ0b3AtYm90dG9tXCIgZGF0YS1hb3M9XCJmYWRlLWxlZnRcIj5mb3IgYSBzcGVjaWFsIG1lc3NhZ2U8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ1bGwtY2FyZCBmb3VydGgtY2FyZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiIGRhdGEtYW9zLWlkPVwic3VwZXItZHVwZXJcIiBkYXRhLWFvcy1vZmZzZXQ9XCItMzAwXCIgZGF0YS1hb3MtYW5jaG9yLXBsYWNlbWVudD1cImNlbnRlci1jZW50ZXJcIiBkYXRhLWFvcy1kZWxheT1cIjUwMFwiIGRhdGEtYW9zPVwiZmFkZS1pblwiPkhpPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC53ZWxjb21lIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNTB2aDtcbiAgICAgICAgfVxuICAgICAgICAudGl0bGUtY2FyZCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmZpcnN0LWNhcmQge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI0ZGQjNBNyAwJSwgI0ZGQjNBNyAzNSUsICNCRTkwRDQgMTAwJSk7XG4gICAgICAgIH1cbiAgICAgICAgLnNlY29uZC1jYXJkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNCRTkwRDQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwdmg7XG4gICAgICAgIH1cbiAgICAgICAgLnRoaXJkLWNhcmQge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI0JFOTBENCAwJSwgI0JFOTBENCAzNSUsICMxRjQ3ODggMTAwJSk7XG4gICAgICAgIH1cbiAgICAgICAgLmZvdXJ0aC1jYXJkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMxRjQ3ODggMCUsICMxRjQ3ODggMzUlLCAjMjY0MzQ4IDEwMCUpO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8L2Rpdj5cbiAgICAgICAgKTtcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7Il19 */\n/*@ sourceURL=/Users/tommy.t.lusun/Documents/projects/nextjs/components/homePage.js */",
        __self: this
      }));
    }
  }]);

  return HomePage;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./node_modules/aos/dist/aos.css":
/*!***************************************!*\
  !*** ./node_modules/aos/dist/aos.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_homePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/homePage */ "./components/homePage.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./pages/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
var _jsxFileName = "/Users/tommy.t.lusun/Documents/projects/nextjs/pages/index.js";

// import styles from '../pages/styles.scss';





var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "main-background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_homePage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./pages/styles.css":
/*!**************************!*\
  !*** ./pages/styles.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "animejs":
/*!**************************!*\
  !*** external "animejs" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("animejs");

/***/ }),

/***/ "aos":
/*!**********************!*\
  !*** external "aos" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aos");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map