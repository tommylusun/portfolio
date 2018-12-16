webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/homePage.js":
/*!********************************!*\
  !*** ./components/homePage.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var _node_modules_aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/anime.min.js");
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
      var AOS = isBrowser ? __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js") : undefined;
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
        duration: 1000,
        targets: 'polygon',
        points: '64 64 0 100 64 64 64 0 64 64 120 100'
      });
      console.log(window);
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
        className: "jsx-345035918" + " " + "title-card title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-345035918" + " " + "full-card first-card",
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
        className: "jsx-345035918" + " " + "welcome",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("polygon", {
        points: "64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96",
        className: "jsx-345035918",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos-delay": "0",
        "data-aos": "fade-in",
        className: "jsx-345035918" + " " + "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Welcome")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-345035918" + " " + "full-card second-card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos-offset": "100",
        "data-aos-anchor-placement": "top-bottom",
        "data-aos": "fade-left",
        className: "jsx-345035918" + " " + "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Scroll down..")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-345035918" + " " + "full-card third-card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos-offset": "100",
        "data-aos-anchor-placement": "top-bottom",
        "data-aos": "fade-left",
        className: "jsx-345035918" + " " + "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "for a special message")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-345035918" + " " + "full-card fourth-card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "data-aos-id": "super-duper",
        "data-aos-offset": "-200",
        "data-aos-anchor-placement": "center-center",
        "data-aos-delay": "500",
        "data-aos": "fade-in",
        className: "jsx-345035918" + " " + "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Hi")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "345035918",
        css: ".welcome.jsx-345035918{position:absolute;top:50vh;}.title-card.jsx-345035918{text-align:center;}.first-card.jsx-345035918{background:linear-gradient(180deg,#d87093 0%,#d87093 35%,#7d348f 100%);}.second-card.jsx-345035918{background:#7d348f;height:35vh;}.third-card.jsx-345035918{background:linear-gradient(180deg,#7d348f 0%,#7d348f 35%,#2417d3 100%);}.fourth-card.jsx-345035918{background:linear-gradient(180deg,#2417d3 0%,#2417d3 35%,#080441 100%);color:white;position:relative;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21teS50Lmx1c3VuL0RvY3VtZW50cy9wcm9qZWN0cy9uZXh0anMvY29tcG9uZW50cy9ob21lUGFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RG9CLEFBRytCLEFBSUEsQUFHd0QsQUFHdkQsQUFJdUQsQUFHQSxrQkFoQmpFLEFBSWIsQ0FNZ0IsUUFUaEIsSUFVQSx3Q0FKQSxBQU9BLEFBR2dCLFlBQ00sa0JBQ3RCIiwiZmlsZSI6Ii9Vc2Vycy90b21teS50Lmx1c3VuL0RvY3VtZW50cy9wcm9qZWN0cy9uZXh0anMvY29tcG9uZW50cy9ob21lUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi4vbm9kZV9tb2R1bGVzL2Fvcy9kaXN0L2Fvcy5jc3MnO1xuaW1wb3J0IGFuaW1lIGZyb20gJ2FuaW1lanMnO1xuXG5jbGFzcyBIb21lUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgY29uc3QgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgICAgIGNvbnN0IEFPUyA9IGlzQnJvd3NlciA/IHJlcXVpcmUoJ2FvcycpIDogdW5kZWZpbmVkO1xuICAgICAgICBcblxuICAgICAgICB0aGlzLmFvcyA9IEFPUztcbiAgICAgICAgdGhpcy5hb3MuaW5pdCh7XG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgYW5jaG9yUGxhY2VtZW50OiAnYm90dG9tLXRvcCdcbiAgICAgICAgfSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdhb3M6aW4nLCAoeyBkZXRhaWwgfSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FuaW1hdGVkIGluJywgZGV0YWlsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGFuaW1lKHtcbiAgICAgICAgICAgIGRlbGF5OiA1MDAsXG4gICAgICAgICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgICAgICAgIHRhcmdldHM6ICdwb2x5Z29uJyxcbiAgICAgICAgICAgIHBvaW50czogJzY0IDY0IDAgMTAwIDY0IDY0IDY0IDAgNjQgNjQgMTIwIDEwMCdcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdyk7XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKCl7IFxuICAgICAgICB0aGlzLmFvcy5yZWZyZXNoKCk7IFxuICAgIH0gXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLWNhcmQgdGl0bGVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnVsbC1jYXJkIGZpcnN0LWNhcmRcIiA+XG4gICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cIndlbGNvbWVcIiBzdHlsZT17e3RvcDogJzMwdmgnfX0gd2lkdGg9XCI0MjhcIiBoZWlnaHQ9XCI0MjhcIiB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIj5cbiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gcG9pbnRzPVwiNjQgMTI4IDguNTc0IDk2IDguNTc0IDMyIDY0IDAgMTE5LjQyNiAzMiAxMTkuNDI2IDk2XCI+PC9wb2x5Z29uPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIiBkYXRhLWFvcy1kZWxheT1cIjBcIiBkYXRhLWFvcz1cImZhZGUtaW5cIj5XZWxjb21lPC9kaXY+XG5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ1bGwtY2FyZCBzZWNvbmQtY2FyZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiIGRhdGEtYW9zLW9mZnNldD1cIjEwMFwiIGRhdGEtYW9zLWFuY2hvci1wbGFjZW1lbnQ9XCJ0b3AtYm90dG9tXCIgZGF0YS1hb3M9XCJmYWRlLWxlZnRcIj5TY3JvbGwgZG93bi4uPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdWxsLWNhcmQgdGhpcmQtY2FyZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiIGRhdGEtYW9zLW9mZnNldD1cIjEwMFwiIGRhdGEtYW9zLWFuY2hvci1wbGFjZW1lbnQ9XCJ0b3AtYm90dG9tXCIgZGF0YS1hb3M9XCJmYWRlLWxlZnRcIj5mb3IgYSBzcGVjaWFsIG1lc3NhZ2U8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ1bGwtY2FyZCBmb3VydGgtY2FyZFwiPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiIGRhdGEtYW9zLWlkPVwic3VwZXItZHVwZXJcIiBkYXRhLWFvcy1vZmZzZXQ9XCItMjAwXCIgZGF0YS1hb3MtYW5jaG9yLXBsYWNlbWVudD1cImNlbnRlci1jZW50ZXJcIiBkYXRhLWFvcy1kZWxheT1cIjUwMFwiIGRhdGEtYW9zPVwiZmFkZS1pblwiPkhpPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLndlbGNvbWUge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA1MHZoO1xuICAgICAgICB9XG4gICAgICAgIC50aXRsZS1jYXJkIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuZmlyc3QtY2FyZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZDg3MDkzIDAlLCAjZDg3MDkzIDM1JSwgIzdkMzQ4ZiAxMDAlKTtcbiAgICAgICAgfVxuICAgICAgICAuc2Vjb25kLWNhcmQge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzdkMzQ4ZjtcbiAgICAgICAgICAgIGhlaWdodDogMzV2aDtcbiAgICAgICAgfVxuICAgICAgICAudGhpcmQtY2FyZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjN2QzNDhmIDAlLCAjN2QzNDhmIDM1JSwgIzI0MTdkMyAxMDAlKTtcbiAgICAgICAgfVxuICAgICAgICAuZm91cnRoLWNhcmQge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzI0MTdkMyAwJSwgIzI0MTdkMyAzNSUsICMwODA0NDEgMTAwJSk7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPC9kaXY+XG4gICAgICAgICk7XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlOyJdfQ== */\n/*@ sourceURL=/Users/tommy.t.lusun/Documents/projects/nextjs/components/homePage.js */",
        __self: this
      }));
    }
  }]);

  return HomePage;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ })

})
//# sourceMappingURL=index.js.6c94504f626b5bae4299.hot-update.js.map