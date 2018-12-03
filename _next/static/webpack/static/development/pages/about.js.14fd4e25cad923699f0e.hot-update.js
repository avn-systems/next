webpackHotUpdate("static/development/pages/about.js",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/interface */ "./components/interface.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/ubuntu/workspace/estudo/next/pages/about.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ImageWithLoader =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ImageWithLoader, _React$Component);

  function ImageWithLoader(props) {
    var _this;

    _classCallCheck(this, ImageWithLoader);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ImageWithLoader).call(this, props));
    _this.state = {
      imgStatus: ""
    };
    return _this;
  }

  _createClass(ImageWithLoader, [{
    key: "imgInit",
    value: function imgInit() {
      this.setState({
        imgStatus: "show"
      });
    }
  }, {
    key: "imgLoaded",
    value: function imgLoaded() {
      this.setState({
        imgStatus: "loaded"
      });
    }
  }, {
    key: "imgError",
    value: function imgError() {
      this.setState({
        imgStatus: "error"
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        href: this.props.href,
        target: this.props.target,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1532854595", [this.props.src]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("featimg", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1532854595", [this.props.src]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("imgprogress", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1532854595", [this.props.src]]]) + " " + (this.state.imgStatus || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("spinner", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1532854595", [this.props.src]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        src: this.props.src,
        alt: this.props.alt || '',
        onLoad: this.imgLoaded.bind(this),
        onError: this.imgError.bind(this),
        onLoadStart: this.imgInit.bind(this),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1532854595", [this.props.src]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("text", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1532854595", [this.props.src]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, this.props.alt || '')), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1532854595",
        css: "featimg.__jsx-style-dynamic-selector{background-image:url(".concat(this.props.src, ");background-repeat:no-repeat;background-position:center;background-color:#f4f4f4;background-size:cover;border:2px solid #f4f4f4;margin-bottom:50px;padding-top:180px;display:block;float:left;width:49%;}a.__jsx-style-dynamic-selector:nth-child(even) featimg.__jsx-style-dynamic-selector{float:right;}featimg.__jsx-style-dynamic-selector:hover{border:2px solid #8500FF;}featimg.__jsx-style-dynamic-selector imgprogress.show.__jsx-style-dynamic-selector{position:absolute;margin-top:-125px;margin-left:130px;}featimg.__jsx-style-dynamic-selector imgprogress.show.__jsx-style-dynamic-selector spinner.__jsx-style-dynamic-selector{border:solid 2px transparent;border-bottom-color:#6055fb;border-right-color:#8103f4;border-left-color:#8103f4;border-top-color:#6055fb;box-sizing:border-box;border-radius:50%;display:block;height:70px;width:70px;-webkit-animation:spinner 400ms linear infinite;-webkit-animation:spinner-__jsx-style-dynamic-selector 400ms linear infinite;animation:spinner-__jsx-style-dynamic-selector 400ms linear infinite;box-shadow:0px 1px 7px 1px #8103f4;}@-webkit-keyframes spinner{0%.__jsx-style-dynamic-selector{-webkit-transform:rotate(0deg);}100%.__jsx-style-dynamic-selector{-webkit-transform:rotate(360deg);}}@-webkit-keyframes spinner-__jsx-style-dynamic-selector{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spinner-__jsx-style-dynamic-selector{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}featimg.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{display:none;}featimg.__jsx-style-dynamic-selector text.__jsx-style-dynamic-selector{border:2px solid #f4f4f4;width:calc(100% + 4px);text-align:center;position:relative;background:white;font-weight:500;display:block;bottom:-35px;padding:5px;left:-2px;}featimg.__jsx-style-dynamic-selector:hover text.__jsx-style-dynamic-selector{border:2px solid #8500FF;color:#8500FF;}@media (max-width:768px){featimg.__jsx-style-dynamic-selector{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvcGFnZXMvYWJvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUNvQixBQUdnRSxBQWN2QyxBQUdhLEFBR1AsQUFLVyxBQWdCUSxBQUNFLEFBR1YsQUFDRSxBQUlsQixBQUdZLEFBWUEsQUFNWixXQUNiLENBekRGLENBb0NBLEtBOUJvQixPQUhwQixBQW9DeUIsQUFZVCxJQXhDYyxFQWVVLEVBQ0UsR0FwQnRCLEdBNkNwQixTQVpvQixHQXREVSxHQXNCOUIsR0FJNkIsU0E2QlQsYUF0RFMsRUEyQ0csR0FqQkosQUE2QlQsR0FYZSxjQVloQixLQXZEUyxJQTBCQSxPQThCWCxjQXZEUSxBQXdEVCxJQTlCUyxTQStCVixTQXZEYSxHQXdEZixDQS9CUSxTQWdDcEIsU0EvQmdCLEdBekJLLFdBMEJQLFFBekJNLElBMEJQLFdBQ3FDLEdBMUJsQyxjQUNILFdBQ0QsVUFDWixVQXdCMEMsa0pBQ0wsbUNBQ3JDIiwiZmlsZSI6Ii9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvcGFnZXMvYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW50ZXJmYWNlIGZyb20gJy4uL2NvbXBvbmVudHMvaW50ZXJmYWNlJ1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBJbWFnZVdpdGhMb2FkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBpbWdTdGF0dXM6IFwiXCIgfTtcbiAgfVxuICBcbiAgaW1nSW5pdCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW1nU3RhdHVzOiBcInNob3dcIiB9KTtcbiAgfVxuXG4gIGltZ0xvYWRlZCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW1nU3RhdHVzOiBcImxvYWRlZFwiIH0pO1xuICB9XG5cbiAgaW1nRXJyb3IoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGltZ1N0YXR1czogXCJlcnJvclwiIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8YSBocmVmPXt0aGlzLnByb3BzLmhyZWZ9IHRhcmdldD17dGhpcy5wcm9wcy50YXJnZXR9PlxuICAgICAgICA8ZmVhdGltZz5cbiAgICAgICAgICA8aW1ncHJvZ3Jlc3MgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmltZ1N0YXR1c30+PHNwaW5uZXI+PC9zcGlubmVyPjwvaW1ncHJvZ3Jlc3M+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXt0aGlzLnByb3BzLnNyY31cbiAgICAgICAgICAgIGFsdD17dGhpcy5wcm9wcy5hbHQgfHwgJyd9XG4gICAgICAgICAgICBvbkxvYWQ9e3RoaXMuaW1nTG9hZGVkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICBvbkVycm9yPXt0aGlzLmltZ0Vycm9yLmJpbmQodGhpcyl9XG4gICAgICAgICAgICBvbkxvYWRTdGFydD17dGhpcy5pbWdJbml0LmJpbmQodGhpcyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8dGV4dD57dGhpcy5wcm9wcy5hbHQgfHwgJyd9PC90ZXh0PlxuICAgICAgICA8L2ZlYXRpbWc+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBmZWF0aW1nIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3RoaXMucHJvcHMuc3JjfSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmNGY0ZjQ7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDE4MHB4O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIHdpZHRoOiA0OSU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGE6bnRoLWNoaWxkKGV2ZW4pIGZlYXRpbWcge1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBmZWF0aW1nOmhvdmVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM4NTAwRkY7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZlYXRpbWcgaW1ncHJvZ3Jlc3Muc2hvdyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTI1cHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTMwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZlYXRpbWcgaW1ncHJvZ3Jlc3Muc2hvdyBzcGlubmVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMnB4IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzYwNTVmYjtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogIzgxMDNmNDtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjODEwM2Y0O1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogIzYwNTVmYjtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW5uZXIgNDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBzcGlubmVyIDQwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggN3B4IDFweCAjODEwM2Y0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc3Bpbm5lciB7XG4gICAgICAgICAgICAwJSAgIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAgICAgICAgICAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAa2V5ZnJhbWVzIHNwaW5uZXIge1xuICAgICAgICAgICAgMCUgICB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgICAgICAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBmZWF0aW1nIGltZyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmZWF0aW1nIHRleHQge1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2Y0ZjRmNDtcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgKyA0cHgpO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBib3R0b206IC0zNXB4O1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgbGVmdDogLTJweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZmVhdGltZzpob3ZlciB0ZXh0IHtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM4NTAwRkY7XG4gICAgICAgICAgICBjb2xvcjogIzg1MDBGRjtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICBmZWF0aW1nIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2E+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxJbnRlcmZhY2UgdGl0bGU9J0Fib3V0IFVzJz5cbiAgICA8dG9waW1hZ2U+XG4gICAgICA8aDE+QWJvdXQgdXM8L2gxPlxuICAgIDwvdG9waW1hZ2U+XG4gICAgPGNvbnRlbnQ+XG4gICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDpoaXN0b3J5LmJhY2soKVwiIGNsYXNzTmFtZT1cImJhY2tcIj5cbiAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgYXJyb3ctbGVmdFwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyOS45IDQ3My44OTlsMTkuNzk5LTE5Ljc5OWM0LjY4Ni00LjY4NiA0LjY4Ni0xMi4yODQgMC0xNi45NzFMOTQuNTY5IDI4Mkg0MzZjNi42MjcgMCAxMi01LjM3MyAxMi0xMnYtMjhjMC02LjYyNy01LjM3My0xMi0xMi0xMkg5NC41NjlsMTU1LjEzLTE1NS4xM2M0LjY4Ni00LjY4NiA0LjY4Ni0xMi4yODQgMC0xNi45NzFMMjI5LjkgMzguMTAxYy00LjY4Ni00LjY4Ni0xMi4yODQtNC42ODYtMTYuOTcxIDBMMy41MTUgMjQ3LjUxNWMtNC42ODYgNC42ODYtNC42ODYgMTIuMjg0IDAgMTYuOTcxTDIxMi45MjkgNDczLjljNC42ODYgNC42ODYgMTIuMjg0IDQuNjg2IDE2Ljk3MS0uMDAxelwiPjwvcGF0aD48L3N2Zz48L2E+XG4gICAgICA8bGVmdD5cbiAgICAgICAgPGgzPkJMT0NLQ0hBSU4gQVBQTElDQVRJT05TLCBDVVNUT00gU09GVFdBUkUsIE1PQklMRSBBUFBMSUNBVElPTlMsIFdISVRFUEFQRVJTIEFORCBNT1JFIC4uPC9oMz5cbiAgICAgICAgPGg2PkJMT0NLQ0hBSU48L2g2PlxuICAgICAgICA8cD5BcyB0aGUgd29ybGQgZW1icmFjZXMgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmJsb2NrY2hhaW4uY29tL2Fib3V0L2luZGV4Lmh0bWxcIiB0YXJnZXQ9XCJfYmxhbmtcIj5CbG9ja2NoYWluPC9hPiBUZWNobm9sb2d5LCBXZSBzZWVrcyB0byBkZWxpdmVyIGlubm92YXRpb25zIGZvciB0aGUgZGV2ZWxvcG1lbnQgb2YgPGE+ZW50ZXJwcmlzZSBzb2x1dGlvbnM8L2E+IGJhc2VkIG9uIHRoZSBsYXRlc3QgdGVjaG5vbG9naWVzLCBzdWNoIGFzIDxhPnNtYXJ0IGNvbnRyYWN0czwvYT4sIGFuIGVzc2VudGlhbCB0b29sIGZvciBsYXVuY2hpbmcgZGlnaXRhbCB0b2tlbnMgaW4gdGhlIHNvLWNhbGxlZCA8YSBocmVmPVwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSW5pdGlhbF9jb2luX29mZmVyaW5nXCIgdGFyZ2V0PVwiX2JsYW5rXCI+aW5pdGlhbCBjb2luIG9mZmVyaW5nIChJQ08pPC9hPi48L3A+XG4gICAgICAgIFxuICAgICAgICA8cD5UaGUgZGV2ZWxvcG1lbnQgb2YgbmV3IDxhPmZpbmFuY2lhbCBzb2x1dGlvbnM8L2E+IHBsYXRmb3JtcywgcHJvdmlkaW5nIHBheW1lbnQgZ2F0ZXdheXMgYXNzb2NpYXRlZCB3aXRoIGNlbnRyYWxpemVkIDxhPm11bHRpLWN1cnJlbmN5IGV4Y2hhbmdlPC9hPiwgbGlzdCBvZiBjdXJyZW5jeSBwYWlycyBmb3IgPGE+dHJhZGluZzwvYT4sIGhpc3Rvcnkgb2YgZm9yZWNsb3N1cmVzLCBvZmZlcnMgb2YgPGE+cHVyY2hhc2U8L2E+IGFuZCA8YT5zYWxlPC9hPiBvcmRlcnMsIHZvbHVtZSBpbmRpY2F0b3IgYW5kIGV0Yy4gQ3VzdG9tIHByZXBhcmF0aW9uIG9mIDxhPndoaXRlcGFwZXJzPC9hPiBmb3IgcHJvamVjdHMgd2l0aCBpbml0aWFsIG9mZmVyIGxhdW5jaC4gSGVyZSBhcmUgc29tZSB0ZWNobm9sb2dpZXMgd2UgYXJlIGZvbGxvd2luZyBjbG9zZWx5OjwvcD5cbiAgICAgICAgXG4gICAgICAgIDxJbWFnZVdpdGhMb2FkZXIgc3JjPXtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCtcIi9zdGF0aWMvaW1hZ2VzL2Fib3V0L2V0aGVyZXVtLmpwZ1wifSBhbHQ9XCJFdGhlcmV1bVwiIGhyZWY9XCJodHRwczovL2V0aGVyZXVtLm9yZy9cIiB0YXJnZXQ9XCJfYmxhbmtcIi8+XG4gICAgICAgIDxJbWFnZVdpdGhMb2FkZXIgc3JjPXtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCtcIi9zdGF0aWMvaW1hZ2VzL2Fib3V0L2RlY2VudC1jaC5qcGdcIn0gYWx0PVwiRGVjZW50XCIgaHJlZj1cImh0dHBzOi8vZGVjZW50LmNoXCIgdGFyZ2V0PVwiX2JsYW5rXCIvPlxuICAgICAgICA8SW1hZ2VXaXRoTG9hZGVyIHNyYz17cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwrXCIvc3RhdGljL2ltYWdlcy9hYm91dC9pcGZzLmpwZ1wifSBhbHQ9XCJJUEZTXCIgaHJlZj1cImh0dHBzOi8vaXBmcy5pby9cIiB0YXJnZXQ9XCJfYmxhbmtcIi8+XG4gICAgICAgIDxJbWFnZVdpdGhMb2FkZXIgc3JjPXtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCtcIi9zdGF0aWMvaW1hZ2VzL2Fib3V0L2Jsb2Nrc3RhY2suanBnXCJ9IGFsdD1cIkJsb2Nrc3RhY2tcIiBocmVmPVwiaHR0cHM6Ly9ibG9ja3N0YWNrLm9yZy9cIiB0YXJnZXQ9XCJfYmxhbmtcIi8+XG5cbiAgICAgIDwvbGVmdD5cbiAgICAgIDxyaWdodD5cbiAgICAgICAgPG1lbnVpdGVtcz5cbiAgICAgICAgICAgIDxidG4gaHJlZj1cIi8vYWRtaW4uYXZuLnN5c3RlbXNcIiB0YXJnZXQ9XCJfc2VsZlwiPlxuICAgICAgICAgICAgXHRCTE9DS0NIQUlOPC9idG4+XG4gICAgICAgICAgICA8YnRuIGhyZWY9XCIvL2FkbWluLmF2bi5zeXN0ZW1zXCIgdGFyZ2V0PVwiX3NlbGZcIj5cbiAgICAgICAgICAgIFx0Q1JZUFRPQ1VSUkVOQ1k8L2J0bj5cbiAgICAgICAgICAgIDxidG4gaHJlZj1cIi8vYWRtaW4uYXZuLnN5c3RlbXNcIiB0YXJnZXQ9XCJfc2VsZlwiPlxuICAgICAgICAgICAgXHRTRUNVUklUWSAmIFBSSVZBQ1k8L2J0bj5cbiAgICAgICAgICAgIDxidG4gaHJlZj1cIi8vYWRtaW4uYXZuLnN5c3RlbXNcIiB0YXJnZXQ9XCJfc2VsZlwiPlxuICAgICAgICAgICAgXHRQQVlNRU5UUzwvYnRuPlxuICAgICAgICAgICAgPGJ0biBocmVmPVwiLy9hZG1pbi5hdm4uc3lzdGVtc1wiIHRhcmdldD1cIl9zZWxmXCI+XG4gICAgICAgICAgICBcdEVYQ0hBTkdFUzwvYnRuPlxuICAgICAgICAgICAgPGJ0biBocmVmPVwiLy9hZG1pbi5hdm4uc3lzdGVtc1wiIHRhcmdldD1cIl9zZWxmXCI+XG4gICAgICAgICAgICBcdFNPRlRXQVJFIERFVkVMT1BNRU5UPC9idG4+XG4gICAgICAgICAgICA8YnRuIGhyZWY9XCIvL2FkbWluLmF2bi5zeXN0ZW1zXCIgdGFyZ2V0PVwiX3NlbGZcIj5cbiAgICAgICAgICAgIFx0TU9CSUxFIEFQUExJQ0FUSU9OUzwvYnRuPlxuICAgICAgICA8L21lbnVpdGVtcz5cbiAgICAgIDwvcmlnaHQ+XG4gICAgPC9jb250ZW50PlxuICBcbiAgICA8c3R5bGUganN4PntgXG4gICAgICB0b3BpbWFnZSB7XG4gICAgICAgIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDM1MG1zIGVhc2UgMHM7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggMCByZ2JhKDAsMCwwLC43KTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L3N0YXRpYy9pbWFnZXMvaG9tZXBhZ2UvYmxvY2tjaGFpbi5qcGcpO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBwYWRkaW5nLXRvcDogMzMwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgICAgdG9waW1hZ2UgaDEge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgZm9udC1zaXplOiAzZW07XG4gICAgICAgIGJvdHRvbTogNjVweDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHRleHQtc2hhZG93OiAzcHggNHB4IDRweCByZ2JhKDAsMCwwLDEpO1xuICAgICAgfVxuICAgICAgdG9waW1hZ2UgaW1ncHJvZ3Jlc3Mge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGxlZnQ6IGNhbGMoNTB2dyAtIDM1cHgpO1xuICAgICAgICB0b3A6IDE1NXB4O1xuICAgICAgfVxuICAgICAgdG9waW1hZ2UgaW1ncHJvZ3Jlc3Mgc3Bpbm5lciB7XG4gICAgICAgIGJvcmRlcjogc29saWQgMnB4IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjNjA1NWZiO1xuICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6ICM4MTAzZjQ7XG4gICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjODEwM2Y0O1xuICAgICAgICBib3JkZXItdG9wLWNvbG9yOiAjNjA1NWZiO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc3Bpbm5lciA0MDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgIGFuaW1hdGlvbjogc3Bpbm5lciA0MDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggN3B4IDFweCAjODEwM2Y0O1xuICAgICAgfVxuICAgICAgY29udGVudCB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzNzBweCk7XG4gICAgICAgIHBhZGRpbmc6IDAgMzBweCA0MHB4IDYwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgICAgIG1hcmdpbjogMjBweCAyMHB4IDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRvcDogLTkwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDVweCByZ2JhKDAsMCwwLDAuNyk7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAzNTBtcyBlYXNlIDBzO1xuICAgICAgfVxuICAgICAgY29udGVudCAuYmFjayB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcGFkZGluZzogMThweDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgLmJhY2s6aG92ZXIgLmFycm93LWxlZnQge1xuICAgICAgICBjb2xvcjogI2I1MDBmZjtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgLmFycm93LWxlZnQge1xuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICAgIHdpZHRoOiAyMnB4O1xuICAgICAgfVxuICAgICAgY29udGVudCA+IGxlZnQgaDMge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgY29sb3I6ICM4NTAwRkY7XG4gICAgICB9XG4gICAgICBjb250ZW50ID4gbGVmdCBoNiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gICAgICAgIGNvbG9yOiAjNzIzNmQ2O1xuICAgICAgfVxuICAgICAgY29udGVudCA+IGxlZnQgcCB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgY29sb3I6ICM0ZDRkNGQ7XG4gICAgICB9XG4gICAgICBjb250ZW50ID4gbGVmdCBwIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiAjODUwMEZGO1xuICAgICAgfVxuICAgICAgY29udGVudCA+IGxlZnQgcCBhOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICNiYzc0ZmY7XG4gICAgICB9XG4gICAgICBjb250ZW50ID4gbGVmdCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2NjO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgfVxuICAgICAgY29udGVudCA+IHJpZ2h0IHtcbiAgICAgICAgcGFkZGluZzogMjBweCAwIDIwcHggMzBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgPiByaWdodCBtZW51aXRlbXMgYnRuIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBjb2xvcjogIzE0MTQxNDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgICAgfVxuICAgICAgXG4gICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc3Bpbm5lciB7XG4gICAgICAgIDAlICAgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgICAgIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbiAgICAgIH1cbiAgICAgIEBrZXlmcmFtZXMgc3Bpbm5lciB7XG4gICAgICAgIDAlICAgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAgICAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTI1MHB4KSB7XG4gICAgICAgIGNvbnRlbnQge1xuICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIHRvcGltYWdlIGgxIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMTkwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICBib3R0b206IDc1cHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBjb250ZW50IC5hcnJvdy1sZWZ0IHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICAgICAgICBtYXJnaW46IDUwcHggMTVweDtcbiAgICAgICAgfVxuICAgICAgICBjb250ZW50ID4gbGVmdCB7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgfVxuICAgICAgICB0b3BpbWFnZSBoMSB7XG4gICAgICAgICAgYm90dG9tOiAzNXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNjI1cHgpIHtcbiAgICAgICAgdG9waW1hZ2Uge1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogNThweDtcbiAgICAgICAgfVxuICAgICAgICB0b3BpbWFnZSBoMSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyLjVlbTtcbiAgICAgICAgICB0b3A6IDYwcHg7XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICAgIG1hcmdpbjogNTBweCA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudCA+IGxlZnQge1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9JbnRlcmZhY2U+XG4pIl19 */\n/*@ sourceURL=/home/ubuntu/workspace/estudo/next/pages/about.js */"),
        dynamic: [this.props.src],
        __self: this
      }));
    }
  }]);

  return ImageWithLoader;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_interface__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "About Us",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("topimage", {
    className: "jsx-3570468545",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: "jsx-3570468545",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "About us")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("content", {
    className: "jsx-3570468545",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "javascript:history.back()",
    className: "jsx-3570468545" + " " + "back",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", {
    "aria-hidden": "true",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512",
    className: "jsx-3570468545" + " " + "svg-inline arrow-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    fill: "currentColor",
    d: "M229.9 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L94.569 282H436c6.627 0 12-5.373 12-12v-28c0-6.627-5.373-12-12-12H94.569l155.13-155.13c4.686-4.686 4.686-12.284 0-16.971L229.9 38.101c-4.686-4.686-12.284-4.686-16.971 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971L212.929 473.9c4.686 4.686 12.284 4.686 16.971-.001z",
    className: "jsx-3570468545",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("left", {
    className: "jsx-3570468545",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    className: "jsx-3570468545",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "BLOCKCHAIN APPLICATIONS, CUSTOM SOFTWARE, MOBILE APPLICATIONS, WHITEPAPERS AND MORE .."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h6", {
    className: "jsx-3570468545",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "BLOCKCHAIN"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "jsx-3570468545",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "As the world embraces ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://www.blockchain.com/about/index.html",
    target: "_blank",
    className: "jsx-3570468545",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "Blockchain"), " Technology, We seeks to deliver innovations for the development of ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-3570468545",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "enterprise solutions"), " based on the latest technologies, such as ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-3570468545",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "smart contracts"), ", an essential tool for launching digital tokens in the so-called ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://en.wikipedia.org/wiki/Initial_coin_offering",
    target: "_blank",
    className: "jsx-3570468545",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "initial coin offering (ICO)"), "."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "jsx-3570468545",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "The development of new ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-3570468545",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "financial solutions"), " platforms, providing payment gateways associated with centralized ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-3570468545",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "multi-currency exchange"), ", list of currency pairs for ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-3570468545",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "trading"), ", history of foreclosures, offers of ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-3570468545",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "purchase"), " and ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-3570468545",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "sale"), " orders, volume indicator and etc. Custom preparation of ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-3570468545",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "whitepapers"), " for projects with initial offer launch. Here are some technologies we are following closely:"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ImageWithLoader, {
    src: "/static/images/about/ethereum.jpg",
    alt: "Ethereum",
    href: "https://ethereum.org/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ImageWithLoader, {
    src: "/static/images/about/decent-ch.jpg",
    alt: "Decent",
    href: "https://decent.ch",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ImageWithLoader, {
    src: "/static/images/about/ipfs.jpg",
    alt: "IPFS",
    href: "https://ipfs.io/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ImageWithLoader, {
    src: "/static/images/about/blockstack.jpg",
    alt: "Blockstack",
    href: "https://blockstack.org/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("right", {
    className: "jsx-3570468545",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("menuitems", {
    className: "jsx-3570468545",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("btn", {
    href: "//admin.avn.systems",
    target: "_self",
    className: "jsx-3570468545",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "BLOCKCHAIN"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("btn", {
    href: "//admin.avn.systems",
    target: "_self",
    className: "jsx-3570468545",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, "CRYPTOCURRENCY"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("btn", {
    href: "//admin.avn.systems",
    target: "_self",
    className: "jsx-3570468545",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "SECURITY & PRIVACY"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("btn", {
    href: "//admin.avn.systems",
    target: "_self",
    className: "jsx-3570468545",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "PAYMENTS"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("btn", {
    href: "//admin.avn.systems",
    target: "_self",
    className: "jsx-3570468545",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, "EXCHANGES"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("btn", {
    href: "//admin.avn.systems",
    target: "_self",
    className: "jsx-3570468545",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, "SOFTWARE DEVELOPMENT"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("btn", {
    href: "//admin.avn.systems",
    target: "_self",
    className: "jsx-3570468545",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, "MOBILE APPLICATIONS")))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3570468545",
    css: "topimage.jsx-3570468545{-webkit-transition:margin-left 350ms ease 0s;transition:margin-left 350ms ease 0s;box-shadow:0 5px 10px 0 rgba(0,0,0,.7);background-image:url(".concat("", "/static/images/homepage/blockchain.jpg);background-position-x:center;background-size:cover;position:relative;padding-top:330px;display:block;}topimage.jsx-3570468545 h1.jsx-3570468545{position:absolute;text-transform:uppercase;-webkit-letter-spacing:-1px;-moz-letter-spacing:-1px;-ms-letter-spacing:-1px;letter-spacing:-1px;margin-left:20px;font-size:3em;bottom:65px;color:#fff;text-shadow:3px 4px 4px rgba(0,0,0,1);}topimage.jsx-3570468545 imgprogress.jsx-3570468545{position:fixed;left:calc(50vw - 35px);top:155px;}topimage.jsx-3570468545 imgprogress.jsx-3570468545 spinner.jsx-3570468545{border:solid 2px transparent;border-bottom-color:#6055fb;border-right-color:#8103f4;border-left-color:#8103f4;border-top-color:#6055fb;box-sizing:border-box;border-radius:50%;display:block;height:70px;width:70px;-webkit-animation:spinner 400ms linear infinite;-webkit-animation:spinner-jsx-3570468545 400ms linear infinite;animation:spinner-jsx-3570468545 400ms linear infinite;box-shadow:0px 1px 7px 1px #8103f4;}content.jsx-3570468545{min-height:calc(100vh - 370px);padding:0 30px 40px 60px;border:1px solid #fff;margin:20px 20px 0px;background:#f4f4f4;position:relative;max-width:1200px;overflow:hidden;display:block;top:-90px;box-shadow:0 0 10px 5px rgba(0,0,0,0.7);-webkit-transition:all 350ms ease 0s;transition:all 350ms ease 0s;}content.jsx-3570468545 .back.jsx-3570468545{position:absolute;padding:18px;left:0;}content.jsx-3570468545 .back.jsx-3570468545:hover .arrow-left.jsx-3570468545{color:#b500ff;}content.jsx-3570468545 .arrow-left.jsx-3570468545{overflow:visible;color:black;height:22px;width:22px;}content.jsx-3570468545>left.jsx-3570468545 h3.jsx-3570468545{margin-bottom:20px;-webkit-letter-spacing:3px;-moz-letter-spacing:3px;-ms-letter-spacing:3px;letter-spacing:3px;font-weight:700;font-size:1em;color:#8500FF;}content.jsx-3570468545>left.jsx-3570468545 h6.jsx-3570468545{margin-bottom:20px;font-size:2.5em;color:#7236d6;}content.jsx-3570468545>left.jsx-3570468545 p.jsx-3570468545{line-height:1.4em;text-align:justify;color:#4d4d4d;}content.jsx-3570468545>left.jsx-3570468545 p.jsx-3570468545 a.jsx-3570468545{-webkit-text-decoration:none;text-decoration:none;color:#8500FF;}content.jsx-3570468545>left.jsx-3570468545 p.jsx-3570468545 a.jsx-3570468545:hover{color:#bc74ff;}content.jsx-3570468545>left.jsx-3570468545{border-bottom:2px solid #ccc;background:#fff;padding:20px 40px;display:block;height:100%;float:left;width:70%;}content.jsx-3570468545>right.jsx-3570468545{padding:20px 0 20px 30px;display:block;float:right;width:30%;}content.jsx-3570468545>right.jsx-3570468545 menuitems.jsx-3570468545 btn.jsx-3570468545{text-transform:uppercase;-webkit-letter-spacing:-1px;-moz-letter-spacing:-1px;-ms-letter-spacing:-1px;letter-spacing:-1px;font-size:1.2rem;font-weight:500;color:#141414;display:block;padding:5px 0;}@-webkit-keyframes spinner{0%.jsx-3570468545{-webkit-transform:rotate(0deg);}100%.jsx-3570468545{-webkit-transform:rotate(360deg);}}@-webkit-keyframes spinner-jsx-3570468545{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spinner-jsx-3570468545{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@media (min-width:1250px){content.jsx-3570468545{margin:20px auto;}topimage.jsx-3570468545 h1.jsx-3570468545{position:relative;max-width:1190px;margin:0px auto;bottom:75px;width:100%;}}@media (max-width:768px){content.jsx-3570468545 .arrow-left.jsx-3570468545{display:none;}content.jsx-3570468545{padding:0 20px;margin:50px 15px;}content.jsx-3570468545>left.jsx-3570468545{padding:20px;}topimage.jsx-3570468545 h1.jsx-3570468545{bottom:35px;}}@media (max-width:625px){topimage.jsx-3570468545{background-position-y:58px;}topimage.jsx-3570468545 h1.jsx-3570468545{font-size:2.5em;top:60px;}content.jsx-3570468545{padding:0 10px;margin:50px 5px;}content.jsx-3570468545>left.jsx-3570468545{padding:20px 10px;width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvcGFnZXMvYWJvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEpnQixBQUc4QyxBQVVuQixBQVVILEFBS2MsQUFlRSxBQWNiLEFBS0osQUFHRyxBQU1FLEFBT0EsQUFLRCxBQUtHLEFBSVAsQUFHZSxBQVNKLEFBTUEsQUFVWSxBQUNFLEFBR1YsQUFDRSxBQUtaLEFBR0MsQUFTTCxBQUdFLEFBSUYsQUFHRCxBQUtlLEFBR1gsQUFJRCxBQUlHLFlBZnBCLENBVkEsQUFPQSxDQXZGRixBQThCQSxDQXJFeUIsQUEwSEosQUFtQkQsQ0FKUCxDQS9GQyxBQWlFWixDQXJIeUIsQUE0Q1osQUEwQk0sQUFrREEsQUFtQ04sQ0FqR00sQUFPSCxNQTBCRixBQU1NLEFBbURwQixFQUpBLEVBakk0QixBQXNDaEIsQUE2QkksQUEwRWhCLEVBOUh5QixBQWVsQixBQTZEK0IsQUE4Q3RDLENBbkJBLENBMUJ3QyxFQXpDMUIsQUF1REksRUFsREosQ0E1REosQUFtQ1osQ0E4Q2MsRUF0Q0QsRUFyRFMsRUFrRkYsR0F2RXBCLENBdURBLENBUWdCLENBSGhCLEFBcUJZLEFBNkJJLENBbkVoQixJQXhCd0IsQ0FmSyxJQThFN0IsRUFWZ0IsQUF1Q0QsQ0EvQ2YsVUFnREUsR0F2Q1ksQ0FyRFMsR0E4RVMsQ0F4SFMsRUEyQmIsR0E4Rk0sRUF6QnJCLFVBckRRLENBc0RULFVBckVlLEFBc0UzQixFQTdCa0IsTUF6QkUsR0EzQ3VFLENBMkd4RSxNQXRDSCxPQXpDUSxDQWdCTCxHQWdFRCxDQWpHQyxFQTJESCxXQXpCRSxFQWdFRixDQXRDaEIsQ0EzRGdCLEFBaUJJLFlBaUJKLEFBZ0VBLEVBakdGLElBaUJFLFFBaEJILEFBaUNELEFBZ0VJLE1BaEZGLElBaUI0QixDQWpDRixHQWlHeEMsSUFoRmEsU0EvQmtCLEVBZ0NtQixvQkFqQmxELENBaUMrQixNQS9DUCxxQkFnQ2tCLENBL0J0QixrQkFDQSxrQkFDSixFQTZDaEIsWUE1Q0EsbUVBNkJxQyxtQ0FDckMiLCJmaWxlIjoiL2hvbWUvdWJ1bnR1L3dvcmtzcGFjZS9lc3R1ZG8vbmV4dC9wYWdlcy9hYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnRlcmZhY2UgZnJvbSAnLi4vY29tcG9uZW50cy9pbnRlcmZhY2UnXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIEltYWdlV2l0aExvYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGltZ1N0YXR1czogXCJcIiB9O1xuICB9XG4gIFxuICBpbWdJbml0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpbWdTdGF0dXM6IFwic2hvd1wiIH0pO1xuICB9XG5cbiAgaW1nTG9hZGVkKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpbWdTdGF0dXM6IFwibG9hZGVkXCIgfSk7XG4gIH1cblxuICBpbWdFcnJvcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW1nU3RhdHVzOiBcImVycm9yXCIgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxhIGhyZWY9e3RoaXMucHJvcHMuaHJlZn0gdGFyZ2V0PXt0aGlzLnByb3BzLnRhcmdldH0+XG4gICAgICAgIDxmZWF0aW1nPlxuICAgICAgICAgIDxpbWdwcm9ncmVzcyBjbGFzc05hbWU9e3RoaXMuc3RhdGUuaW1nU3RhdHVzfT48c3Bpbm5lcj48L3NwaW5uZXI+PC9pbWdwcm9ncmVzcz5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e3RoaXMucHJvcHMuc3JjfVxuICAgICAgICAgICAgYWx0PXt0aGlzLnByb3BzLmFsdCB8fCAnJ31cbiAgICAgICAgICAgIG9uTG9hZD17dGhpcy5pbWdMb2FkZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIG9uRXJyb3I9e3RoaXMuaW1nRXJyb3IuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIG9uTG9hZFN0YXJ0PXt0aGlzLmltZ0luaXQuYmluZCh0aGlzKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDx0ZXh0Pnt0aGlzLnByb3BzLmFsdCB8fCAnJ308L3RleHQ+XG4gICAgICAgIDwvZmVhdGltZz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGZlYXRpbWcge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7dGhpcy5wcm9wcy5zcmN9KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2Y0ZjRmNDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTgwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgd2lkdGg6IDQ5JTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYTpudGgtY2hpbGQoZXZlbikgZmVhdGltZyB7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZlYXRpbWc6aG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzg1MDBGRjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZmVhdGltZyBpbWdwcm9ncmVzcy5zaG93IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xMjVweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMzBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZmVhdGltZyBpbWdwcm9ncmVzcy5zaG93IHNwaW5uZXIge1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjNjA1NWZiO1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjODEwM2Y0O1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICM4MTAzZjQ7XG4gICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiAjNjA1NWZiO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc3Bpbm5lciA0MDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgICBhbmltYXRpb246IHNwaW5uZXIgNDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCA3cHggMXB4ICM4MTAzZjQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzcGlubmVyIHtcbiAgICAgICAgICAgIDAlICAgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgICAgICAgICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBrZXlmcmFtZXMgc3Bpbm5lciB7XG4gICAgICAgICAgICAwJSAgIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAgICAgICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIGZlYXRpbWcgaW1nIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZlYXRpbWcgdGV4dCB7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZjRmNGY0O1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSArIDRweCk7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGJvdHRvbTogLTM1cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICBsZWZ0OiAtMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBmZWF0aW1nOmhvdmVyIHRleHQge1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzg1MDBGRjtcbiAgICAgICAgICAgIGNvbG9yOiAjODUwMEZGO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgIGZlYXRpbWcge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvYT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPEludGVyZmFjZSB0aXRsZT0nQWJvdXQgVXMnPlxuICAgIDx0b3BpbWFnZT5cbiAgICAgIDxoMT5BYm91dCB1czwvaDE+XG4gICAgPC90b3BpbWFnZT5cbiAgICA8Y29udGVudD5cbiAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0Omhpc3RvcnkuYmFjaygpXCIgY2xhc3NOYW1lPVwiYmFja1wiPlxuICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCIgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBhcnJvdy1sZWZ0XCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI5LjkgNDczLjg5OWwxOS43OTktMTkuNzk5YzQuNjg2LTQuNjg2IDQuNjg2LTEyLjI4NCAwLTE2Ljk3MUw5NC41NjkgMjgySDQzNmM2LjYyNyAwIDEyLTUuMzczIDEyLTEydi0yOGMwLTYuNjI3LTUuMzczLTEyLTEyLTEySDk0LjU2OWwxNTUuMTMtMTU1LjEzYzQuNjg2LTQuNjg2IDQuNjg2LTEyLjI4NCAwLTE2Ljk3MUwyMjkuOSAzOC4xMDFjLTQuNjg2LTQuNjg2LTEyLjI4NC00LjY4Ni0xNi45NzEgMEwzLjUxNSAyNDcuNTE1Yy00LjY4NiA0LjY4Ni00LjY4NiAxMi4yODQgMCAxNi45NzFMMjEyLjkyOSA0NzMuOWM0LjY4NiA0LjY4NiAxMi4yODQgNC42ODYgMTYuOTcxLS4wMDF6XCI+PC9wYXRoPjwvc3ZnPjwvYT5cbiAgICAgIDxsZWZ0PlxuICAgICAgICA8aDM+QkxPQ0tDSEFJTiBBUFBMSUNBVElPTlMsIENVU1RPTSBTT0ZUV0FSRSwgTU9CSUxFIEFQUExJQ0FUSU9OUywgV0hJVEVQQVBFUlMgQU5EIE1PUkUgLi48L2gzPlxuICAgICAgICA8aDY+QkxPQ0tDSEFJTjwvaDY+XG4gICAgICAgIDxwPkFzIHRoZSB3b3JsZCBlbWJyYWNlcyA8YSBocmVmPVwiaHR0cHM6Ly93d3cuYmxvY2tjaGFpbi5jb20vYWJvdXQvaW5kZXguaHRtbFwiIHRhcmdldD1cIl9ibGFua1wiPkJsb2NrY2hhaW48L2E+IFRlY2hub2xvZ3ksIFdlIHNlZWtzIHRvIGRlbGl2ZXIgaW5ub3ZhdGlvbnMgZm9yIHRoZSBkZXZlbG9wbWVudCBvZiA8YT5lbnRlcnByaXNlIHNvbHV0aW9uczwvYT4gYmFzZWQgb24gdGhlIGxhdGVzdCB0ZWNobm9sb2dpZXMsIHN1Y2ggYXMgPGE+c21hcnQgY29udHJhY3RzPC9hPiwgYW4gZXNzZW50aWFsIHRvb2wgZm9yIGxhdW5jaGluZyBkaWdpdGFsIHRva2VucyBpbiB0aGUgc28tY2FsbGVkIDxhIGhyZWY9XCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Jbml0aWFsX2NvaW5fb2ZmZXJpbmdcIiB0YXJnZXQ9XCJfYmxhbmtcIj5pbml0aWFsIGNvaW4gb2ZmZXJpbmcgKElDTyk8L2E+LjwvcD5cbiAgICAgICAgXG4gICAgICAgIDxwPlRoZSBkZXZlbG9wbWVudCBvZiBuZXcgPGE+ZmluYW5jaWFsIHNvbHV0aW9uczwvYT4gcGxhdGZvcm1zLCBwcm92aWRpbmcgcGF5bWVudCBnYXRld2F5cyBhc3NvY2lhdGVkIHdpdGggY2VudHJhbGl6ZWQgPGE+bXVsdGktY3VycmVuY3kgZXhjaGFuZ2U8L2E+LCBsaXN0IG9mIGN1cnJlbmN5IHBhaXJzIGZvciA8YT50cmFkaW5nPC9hPiwgaGlzdG9yeSBvZiBmb3JlY2xvc3VyZXMsIG9mZmVycyBvZiA8YT5wdXJjaGFzZTwvYT4gYW5kIDxhPnNhbGU8L2E+IG9yZGVycywgdm9sdW1lIGluZGljYXRvciBhbmQgZXRjLiBDdXN0b20gcHJlcGFyYXRpb24gb2YgPGE+d2hpdGVwYXBlcnM8L2E+IGZvciBwcm9qZWN0cyB3aXRoIGluaXRpYWwgb2ZmZXIgbGF1bmNoLiBIZXJlIGFyZSBzb21lIHRlY2hub2xvZ2llcyB3ZSBhcmUgZm9sbG93aW5nIGNsb3NlbHk6PC9wPlxuICAgICAgICBcbiAgICAgICAgPEltYWdlV2l0aExvYWRlciBzcmM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMK1wiL3N0YXRpYy9pbWFnZXMvYWJvdXQvZXRoZXJldW0uanBnXCJ9IGFsdD1cIkV0aGVyZXVtXCIgaHJlZj1cImh0dHBzOi8vZXRoZXJldW0ub3JnL1wiIHRhcmdldD1cIl9ibGFua1wiLz5cbiAgICAgICAgPEltYWdlV2l0aExvYWRlciBzcmM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMK1wiL3N0YXRpYy9pbWFnZXMvYWJvdXQvZGVjZW50LWNoLmpwZ1wifSBhbHQ9XCJEZWNlbnRcIiBocmVmPVwiaHR0cHM6Ly9kZWNlbnQuY2hcIiB0YXJnZXQ9XCJfYmxhbmtcIi8+XG4gICAgICAgIDxJbWFnZVdpdGhMb2FkZXIgc3JjPXtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCtcIi9zdGF0aWMvaW1hZ2VzL2Fib3V0L2lwZnMuanBnXCJ9IGFsdD1cIklQRlNcIiBocmVmPVwiaHR0cHM6Ly9pcGZzLmlvL1wiIHRhcmdldD1cIl9ibGFua1wiLz5cbiAgICAgICAgPEltYWdlV2l0aExvYWRlciBzcmM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMK1wiL3N0YXRpYy9pbWFnZXMvYWJvdXQvYmxvY2tzdGFjay5qcGdcIn0gYWx0PVwiQmxvY2tzdGFja1wiIGhyZWY9XCJodHRwczovL2Jsb2Nrc3RhY2sub3JnL1wiIHRhcmdldD1cIl9ibGFua1wiLz5cblxuICAgICAgPC9sZWZ0PlxuICAgICAgPHJpZ2h0PlxuICAgICAgICA8bWVudWl0ZW1zPlxuICAgICAgICAgICAgPGJ0biBocmVmPVwiLy9hZG1pbi5hdm4uc3lzdGVtc1wiIHRhcmdldD1cIl9zZWxmXCI+XG4gICAgICAgICAgICBcdEJMT0NLQ0hBSU48L2J0bj5cbiAgICAgICAgICAgIDxidG4gaHJlZj1cIi8vYWRtaW4uYXZuLnN5c3RlbXNcIiB0YXJnZXQ9XCJfc2VsZlwiPlxuICAgICAgICAgICAgXHRDUllQVE9DVVJSRU5DWTwvYnRuPlxuICAgICAgICAgICAgPGJ0biBocmVmPVwiLy9hZG1pbi5hdm4uc3lzdGVtc1wiIHRhcmdldD1cIl9zZWxmXCI+XG4gICAgICAgICAgICBcdFNFQ1VSSVRZICYgUFJJVkFDWTwvYnRuPlxuICAgICAgICAgICAgPGJ0biBocmVmPVwiLy9hZG1pbi5hdm4uc3lzdGVtc1wiIHRhcmdldD1cIl9zZWxmXCI+XG4gICAgICAgICAgICBcdFBBWU1FTlRTPC9idG4+XG4gICAgICAgICAgICA8YnRuIGhyZWY9XCIvL2FkbWluLmF2bi5zeXN0ZW1zXCIgdGFyZ2V0PVwiX3NlbGZcIj5cbiAgICAgICAgICAgIFx0RVhDSEFOR0VTPC9idG4+XG4gICAgICAgICAgICA8YnRuIGhyZWY9XCIvL2FkbWluLmF2bi5zeXN0ZW1zXCIgdGFyZ2V0PVwiX3NlbGZcIj5cbiAgICAgICAgICAgIFx0U09GVFdBUkUgREVWRUxPUE1FTlQ8L2J0bj5cbiAgICAgICAgICAgIDxidG4gaHJlZj1cIi8vYWRtaW4uYXZuLnN5c3RlbXNcIiB0YXJnZXQ9XCJfc2VsZlwiPlxuICAgICAgICAgICAgXHRNT0JJTEUgQVBQTElDQVRJT05TPC9idG4+XG4gICAgICAgIDwvbWVudWl0ZW1zPlxuICAgICAgPC9yaWdodD5cbiAgICA8L2NvbnRlbnQ+XG4gIFxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIHRvcGltYWdlIHtcbiAgICAgICAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMzUwbXMgZWFzZSAwcztcbiAgICAgICAgYm94LXNoYWRvdzogMCA1cHggMTBweCAwIHJnYmEoMCwwLDAsLjcpO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vc3RhdGljL2ltYWdlcy9ob21lcGFnZS9ibG9ja2NoYWluLmpwZyk7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzMzBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgICB0b3BpbWFnZSBoMSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICAgICAgYm90dG9tOiA2NXB4O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDNweCA0cHggNHB4IHJnYmEoMCwwLDAsMSk7XG4gICAgICB9XG4gICAgICB0b3BpbWFnZSBpbWdwcm9ncmVzcyB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgbGVmdDogY2FsYyg1MHZ3IC0gMzVweCk7XG4gICAgICAgIHRvcDogMTU1cHg7XG4gICAgICB9XG4gICAgICB0b3BpbWFnZSBpbWdwcm9ncmVzcyBzcGlubmVyIHtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICM2MDU1ZmI7XG4gICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogIzgxMDNmNDtcbiAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICM4MTAzZjQ7XG4gICAgICAgIGJvcmRlci10b3AtY29sb3I6ICM2MDU1ZmI7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGlubmVyIDQwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgYW5pbWF0aW9uOiBzcGlubmVyIDQwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCA3cHggMXB4ICM4MTAzZjQ7XG4gICAgICB9XG4gICAgICBjb250ZW50IHtcbiAgICAgICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDM3MHB4KTtcbiAgICAgICAgcGFkZGluZzogMCAzMHB4IDQwcHggNjBweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgbWFyZ2luOiAyMHB4IDIwcHggMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdG9wOiAtOTBweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggNXB4IHJnYmEoMCwwLDAsMC43KTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDM1MG1zIGVhc2UgMHM7XG4gICAgICB9XG4gICAgICBjb250ZW50IC5iYWNrIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBwYWRkaW5nOiAxOHB4O1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgfVxuICAgICAgY29udGVudCAuYmFjazpob3ZlciAuYXJyb3ctbGVmdCB7XG4gICAgICAgIGNvbG9yOiAjYjUwMGZmO1xuICAgICAgfVxuICAgICAgY29udGVudCAuYXJyb3ctbGVmdCB7XG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIGhlaWdodDogMjJweDtcbiAgICAgICAgd2lkdGg6IDIycHg7XG4gICAgICB9XG4gICAgICBjb250ZW50ID4gbGVmdCBoMyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICBjb2xvcjogIzg1MDBGRjtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgPiBsZWZ0IGg2IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgZm9udC1zaXplOiAyLjVlbTtcbiAgICAgICAgY29sb3I6ICM3MjM2ZDY7XG4gICAgICB9XG4gICAgICBjb250ZW50ID4gbGVmdCBwIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNGVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgICBjb2xvcjogIzRkNGQ0ZDtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgPiBsZWZ0IHAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6ICM4NTAwRkY7XG4gICAgICB9XG4gICAgICBjb250ZW50ID4gbGVmdCBwIGE6aG92ZXIge1xuICAgICAgICBjb2xvcjogI2JjNzRmZjtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgPiBsZWZ0IHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjY2M7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggNDBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICB9XG4gICAgICBjb250ZW50ID4gcmlnaHQge1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDAgMjBweCAzMHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgfVxuICAgICAgY29udGVudCA+IHJpZ2h0IG1lbnVpdGVtcyBidG4ge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGNvbG9yOiAjMTQxNDE0O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZzogNXB4IDA7XG4gICAgICB9XG4gICAgICBcbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzcGlubmVyIHtcbiAgICAgICAgMCUgICB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAgICAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICAgICAgfVxuICAgICAgQGtleWZyYW1lcyBzcGlubmVyIHtcbiAgICAgICAgMCUgICB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjUwcHgpIHtcbiAgICAgICAgY29udGVudCB7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgdG9waW1hZ2UgaDEge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDExOTBweDtcbiAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgIGJvdHRvbTogNzVweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIGNvbnRlbnQgLmFycm93LWxlZnQge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICAgIG1hcmdpbjogNTBweCAxNXB4O1xuICAgICAgICB9XG4gICAgICAgIGNvbnRlbnQgPiBsZWZ0IHtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIHRvcGltYWdlIGgxIHtcbiAgICAgICAgICBib3R0b206IDM1cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MjVweCkge1xuICAgICAgICB0b3BpbWFnZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiA1OHB4O1xuICAgICAgICB9XG4gICAgICAgIHRvcGltYWdlIGgxIHtcbiAgICAgICAgICBmb250LXNpemU6IDIuNWVtO1xuICAgICAgICAgIHRvcDogNjBweDtcbiAgICAgICAgfVxuICAgICAgICBjb250ZW50IHtcbiAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgbWFyZ2luOiA1MHB4IDVweDtcbiAgICAgICAgfVxuICAgICAgICBjb250ZW50ID4gbGVmdCB7XG4gICAgICAgICAgcGFkZGluZzogMjBweCAxMHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0ludGVyZmFjZT5cbikiXX0= */\n/*@ sourceURL=/home/ubuntu/workspace/estudo/next/pages/about.js */"),
    __self: this
  }));
});
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/about")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=about.js.14fd4e25cad923699f0e.hot-update.js.map