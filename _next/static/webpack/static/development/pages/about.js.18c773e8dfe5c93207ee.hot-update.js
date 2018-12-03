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
        css: "featimg.__jsx-style-dynamic-selector{background-image:url(".concat(this.props.src, ");background-repeat:no-repeat;background-position:center;background-color:#f4f4f4;background-size:cover;border:2px solid #f4f4f4;margin-bottom:50px;padding-top:180px;display:block;float:left;width:49%;}a.__jsx-style-dynamic-selector:nth-child(even) featimg.__jsx-style-dynamic-selector{float:right;}featimg.__jsx-style-dynamic-selector:hover{border:2px solid #8500FF;}featimg.__jsx-style-dynamic-selector imgprogress.show.__jsx-style-dynamic-selector{position:absolute;margin-top:-125px;margin-left:130px;}featimg.__jsx-style-dynamic-selector imgprogress.show.__jsx-style-dynamic-selector spinner.__jsx-style-dynamic-selector{border:solid 2px transparent;border-bottom-color:#6055fb;border-right-color:#8103f4;border-left-color:#8103f4;border-top-color:#6055fb;box-sizing:border-box;border-radius:50%;display:block;height:70px;width:70px;-webkit-animation:spinner 400ms linear infinite;-webkit-animation:spinner-__jsx-style-dynamic-selector 400ms linear infinite;animation:spinner-__jsx-style-dynamic-selector 400ms linear infinite;box-shadow:0px 1px 7px 1px #8103f4;}@-webkit-keyframes spinner{0%.__jsx-style-dynamic-selector{-webkit-transform:rotate(0deg);}100%.__jsx-style-dynamic-selector{-webkit-transform:rotate(360deg);}}@-webkit-keyframes spinner-__jsx-style-dynamic-selector{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spinner-__jsx-style-dynamic-selector{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}featimg.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{display:none;}featimg.__jsx-style-dynamic-selector text.__jsx-style-dynamic-selector{border:2px solid #f4f4f4;width:calc(100% + 4px);text-align:center;position:relative;background:white;font-weight:500;display:block;bottom:-35px;padding:5px;left:-2px;}featimg.__jsx-style-dynamic-selector:hover text.__jsx-style-dynamic-selector{border:2px solid #8500FF;color:#8500FF;}@media (max-width:768px){featimg.__jsx-style-dynamic-selector{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvcGFnZXMvYWJvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUNvQixBQUdnRSxBQWN2QyxBQUdhLEFBR1AsQUFLVyxBQWdCUSxBQUNFLEFBR1YsQUFDRSxBQUlsQixBQUdZLEFBWUEsQUFNWixXQUNiLENBekRGLENBb0NBLEtBOUJvQixPQUhwQixBQW9DeUIsQUFZVCxJQXhDYyxFQWVVLEVBQ0UsR0FwQnRCLEdBNkNwQixTQVpvQixHQXREVSxHQXNCOUIsR0FJNkIsU0E2QlQsYUF0RFMsRUEyQ0csR0FqQkosQUE2QlQsR0FYZSxjQVloQixLQXZEUyxJQTBCQSxPQThCWCxjQXZEUSxBQXdEVCxJQTlCUyxTQStCVixTQXZEYSxHQXdEZixDQS9CUSxTQWdDcEIsU0EvQmdCLEdBekJLLFdBMEJQLFFBekJNLElBMEJQLFdBQ3FDLEdBMUJsQyxjQUNILFdBQ0QsVUFDWixVQXdCMEMsa0pBQ0wsbUNBQ3JDIiwiZmlsZSI6Ii9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvcGFnZXMvYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW50ZXJmYWNlIGZyb20gJy4uL2NvbXBvbmVudHMvaW50ZXJmYWNlJ1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBJbWFnZVdpdGhMb2FkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBpbWdTdGF0dXM6IFwiXCIgfTtcbiAgfVxuICBcbiAgaW1nSW5pdCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW1nU3RhdHVzOiBcInNob3dcIiB9KTtcbiAgfVxuXG4gIGltZ0xvYWRlZCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW1nU3RhdHVzOiBcImxvYWRlZFwiIH0pO1xuICB9XG5cbiAgaW1nRXJyb3IoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGltZ1N0YXR1czogXCJlcnJvclwiIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8YSBocmVmPXt0aGlzLnByb3BzLmhyZWZ9IHRhcmdldD17dGhpcy5wcm9wcy50YXJnZXR9PlxuICAgICAgICA8ZmVhdGltZz5cbiAgICAgICAgICA8aW1ncHJvZ3Jlc3MgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmltZ1N0YXR1c30+PHNwaW5uZXI+PC9zcGlubmVyPjwvaW1ncHJvZ3Jlc3M+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXt0aGlzLnByb3BzLnNyY31cbiAgICAgICAgICAgIGFsdD17dGhpcy5wcm9wcy5hbHQgfHwgJyd9XG4gICAgICAgICAgICBvbkxvYWQ9e3RoaXMuaW1nTG9hZGVkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICBvbkVycm9yPXt0aGlzLmltZ0Vycm9yLmJpbmQodGhpcyl9XG4gICAgICAgICAgICBvbkxvYWRTdGFydD17dGhpcy5pbWdJbml0LmJpbmQodGhpcyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8dGV4dD57dGhpcy5wcm9wcy5hbHQgfHwgJyd9PC90ZXh0PlxuICAgICAgICA8L2ZlYXRpbWc+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBmZWF0aW1nIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3RoaXMucHJvcHMuc3JjfSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmNGY0ZjQ7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDE4MHB4O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIHdpZHRoOiA0OSU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGE6bnRoLWNoaWxkKGV2ZW4pIGZlYXRpbWcge1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBmZWF0aW1nOmhvdmVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM4NTAwRkY7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZlYXRpbWcgaW1ncHJvZ3Jlc3Muc2hvdyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTI1cHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTMwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZlYXRpbWcgaW1ncHJvZ3Jlc3Muc2hvdyBzcGlubmVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMnB4IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzYwNTVmYjtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogIzgxMDNmNDtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjODEwM2Y0O1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogIzYwNTVmYjtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW5uZXIgNDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBzcGlubmVyIDQwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggN3B4IDFweCAjODEwM2Y0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc3Bpbm5lciB7XG4gICAgICAgICAgICAwJSAgIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAgICAgICAgICAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAa2V5ZnJhbWVzIHNwaW5uZXIge1xuICAgICAgICAgICAgMCUgICB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgICAgICAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBmZWF0aW1nIGltZyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmZWF0aW1nIHRleHQge1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2Y0ZjRmNDtcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgKyA0cHgpO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBib3R0b206IC0zNXB4O1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgbGVmdDogLTJweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZmVhdGltZzpob3ZlciB0ZXh0IHtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM4NTAwRkY7XG4gICAgICAgICAgICBjb2xvcjogIzg1MDBGRjtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICBmZWF0aW1nIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2E+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxJbnRlcmZhY2UgdGl0bGU9J0Fib3V0IFVzJz5cbiAgICA8dG9waW1hZ2U+XG4gICAgICA8aDE+QWJvdXQgdXM8L2gxPlxuICAgIDwvdG9waW1hZ2U+XG4gICAgPGNvbnRlbnQ+XG4gICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDpoaXN0b3J5LmJhY2soKVwiIGNsYXNzTmFtZT1cImJhY2tcIj5cbiAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgYXJyb3ctbGVmdFwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIyOS45IDQ3My44OTlsMTkuNzk5LTE5Ljc5OWM0LjY4Ni00LjY4NiA0LjY4Ni0xMi4yODQgMC0xNi45NzFMOTQuNTY5IDI4Mkg0MzZjNi42MjcgMCAxMi01LjM3MyAxMi0xMnYtMjhjMC02LjYyNy01LjM3My0xMi0xMi0xMkg5NC41NjlsMTU1LjEzLTE1NS4xM2M0LjY4Ni00LjY4NiA0LjY4Ni0xMi4yODQgMC0xNi45NzFMMjI5LjkgMzguMTAxYy00LjY4Ni00LjY4Ni0xMi4yODQtNC42ODYtMTYuOTcxIDBMMy41MTUgMjQ3LjUxNWMtNC42ODYgNC42ODYtNC42ODYgMTIuMjg0IDAgMTYuOTcxTDIxMi45MjkgNDczLjljNC42ODYgNC42ODYgMTIuMjg0IDQuNjg2IDE2Ljk3MS0uMDAxelwiPjwvcGF0aD48L3N2Zz48L2E+XG4gICAgICA8bGVmdD5cbiAgICAgICAgPGgzPkJMT0NLQ0hBSU4gQVBQTElDQVRJT05TLCBDVVNUT00gU09GVFdBUkUsIE1PQklMRSBBUFBMSUNBVElPTlMsIFdISVRFUEFQRVJTIEFORCBNT1JFIC4uPC9oMz5cbiAgICAgICAgPGg2PkJMT0NLQ0hBSU48L2g2PlxuICAgICAgICA8cD5BcyB0aGUgd29ybGQgZW1icmFjZXMgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmJsb2NrY2hhaW4uY29tL2Fib3V0L2luZGV4Lmh0bWxcIiB0YXJnZXQ9XCJfYmxhbmtcIj5CbG9ja2NoYWluPC9hPiBUZWNobm9sb2d5LCBXZSBzZWVrcyB0byBkZWxpdmVyIGlubm92YXRpb25zIGZvciB0aGUgZGV2ZWxvcG1lbnQgb2YgPGE+ZW50ZXJwcmlzZSBzb2x1dGlvbnM8L2E+IGJhc2VkIG9uIHRoZSBsYXRlc3QgdGVjaG5vbG9naWVzLCBzdWNoIGFzIDxhPnNtYXJ0IGNvbnRyYWN0czwvYT4sIGFuIGVzc2VudGlhbCB0b29sIGZvciBsYXVuY2hpbmcgZGlnaXRhbCB0b2tlbnMgaW4gdGhlIHNvLWNhbGxlZCA8YSBocmVmPVwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSW5pdGlhbF9jb2luX29mZmVyaW5nXCIgdGFyZ2V0PVwiX2JsYW5rXCI+aW5pdGlhbCBjb2luIG9mZmVyaW5nIChJQ08pPC9hPi48L3A+XG4gICAgICAgIFxuICAgICAgICA8cD5UaGUgZGV2ZWxvcG1lbnQgb2YgbmV3IDxhPmZpbmFuY2lhbCBzb2x1dGlvbnM8L2E+IHBsYXRmb3JtcywgcHJvdmlkaW5nIHBheW1lbnQgZ2F0ZXdheXMgYXNzb2NpYXRlZCB3aXRoIGNlbnRyYWxpemVkIDxhPm11bHRpLWN1cnJlbmN5IGV4Y2hhbmdlPC9hPiwgbGlzdCBvZiBjdXJyZW5jeSBwYWlycyBmb3IgPGE+dHJhZGluZzwvYT4sIGhpc3Rvcnkgb2YgZm9yZWNsb3N1cmVzLCBvZmZlcnMgb2YgPGE+cHVyY2hhc2U8L2E+IGFuZCA8YT5zYWxlPC9hPiBvcmRlcnMsIHZvbHVtZSBpbmRpY2F0b3IgYW5kIGV0Yy4gQ3VzdG9tIHByZXBhcmF0aW9uIG9mIDxhPndoaXRlcGFwZXJzPC9hPiBmb3IgcHJvamVjdHMgd2l0aCBpbml0aWFsIG9mZmVyIGxhdW5jaC4gSGVyZSBhcmUgc29tZSB0ZWNobm9sb2dpZXMgd2UgYXJlIGZvbGxvd2luZyBjbG9zZWx5OjwvcD5cbiAgICAgICAgXG4gICAgICAgIDxJbWFnZVdpdGhMb2FkZXIgc3JjPXtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCtcIi9zdGF0aWMvaW1hZ2VzL2Fib3V0L2V0aGVyZXVtLmpwZ1wifSBhbHQ9XCJFdGhlcmV1bVwiIGhyZWY9XCJodHRwczovL2V0aGVyZXVtLm9yZy9cIiB0YXJnZXQ9XCJfYmxhbmtcIi8+XG4gICAgICAgIDxJbWFnZVdpdGhMb2FkZXIgc3JjPXtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCtcIi9zdGF0aWMvaW1hZ2VzL2Fib3V0L2RlY2VudC1jaC5qcGdcIn0gYWx0PVwiRGVjZW50XCIgaHJlZj1cImh0dHBzOi8vZGVjZW50LmNoXCIgdGFyZ2V0PVwiX2JsYW5rXCIvPlxuICAgICAgICA8SW1hZ2VXaXRoTG9hZGVyIHNyYz17cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwrXCIvc3RhdGljL2ltYWdlcy9hYm91dC9pcGZzLmpwZ1wifSBhbHQ9XCJJUEZTXCIgaHJlZj1cImh0dHBzOi8vaXBmcy5pby9cIiB0YXJnZXQ9XCJfYmxhbmtcIi8+XG4gICAgICAgIDxJbWFnZVdpdGhMb2FkZXIgc3JjPXtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCtcIi9zdGF0aWMvaW1hZ2VzL2Fib3V0L2Jsb2Nrc3RhY2suanBnXCJ9IGFsdD1cIkJsb2Nrc3RhY2tcIiBocmVmPVwiaHR0cHM6Ly9ibG9ja3N0YWNrLm9yZy9cIiB0YXJnZXQ9XCJfYmxhbmtcIi8+XG5cbiAgICAgIDwvbGVmdD5cbiAgICAgIDxyaWdodD5cbiAgICAgICAgPG1lbnVpdGVtcz5cbiAgICAgICAgICAgIDxidG4gaHJlZj1cIi8vYWRtaW4uYXZuLnN5c3RlbXNcIiB0YXJnZXQ9XCJfc2VsZlwiPlxuICAgICAgICAgICAgXHQ8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTE0NCAxMTJ2NTEuNkg0OGMtMjYuNSAwLTQ4IDIxLjUtNDggNDh2ODguNmMwIDI2LjUgMjEuNSA0OCA0OCA0OGg5NnY1MS42YzAgNDIuNiA1MS43IDY0LjIgODEuOSAzMy45bDE0NC0xNDMuOWMxOC43LTE4LjcgMTguNy00OS4xIDAtNjcuOWwtMTQ0LTE0NEMxOTUuOCA0OCAxNDQgNjkuMyAxNDQgMTEyem0xOTIgMTQ0TDE5MiA0MDB2LTk5LjdINDh2LTg4LjZoMTQ0VjExMmwxNDQgMTQ0em04MCAxOTJoLTg0Yy02LjYgMC0xMi01LjQtMTItMTJ2LTI0YzAtNi42IDUuNC0xMiAxMi0xMmg4NGMyNi41IDAgNDgtMjEuNSA0OC00OFYxNjBjMC0yNi41LTIxLjUtNDgtNDgtNDhoLTg0Yy02LjYgMC0xMi01LjQtMTItMTJWNzZjMC02LjYgNS40LTEyIDEyLTEyaDg0YzUzIDAgOTYgNDMgOTYgOTZ2MTkyYzAgNTMtNDMgOTYtOTYgOTZ6XCIgY2xhc3NOYW1lPVwiXCI+PC9wYXRoPjwvc3ZnPkVudHJhcjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICAgICAgICAgIDxidG4gaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJkaXNhYmxlXCI+XG4gICAgICAgICAgICBcdDxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1NzYgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjg4IDIwOGMtNDQuMiAwLTgwIDM1LjgtODAgODBzMzUuOCA4MCA4MCA4MCA4MC0zNS44IDgwLTgwLTM1LjgtODAtODAtODB6bTAgMTI4Yy0yNi41IDAtNDgtMjEuNS00OC00OHMyMS41LTQ4IDQ4LTQ4IDQ4IDIxLjUgNDggNDgtMjEuNSA0OC00OCA0OHpNNTEyIDY0SDM1MlYzMmMwLTE3LjctMTQuMy0zMi0zMi0zMmgtNjRjLTE3LjcgMC0zMiAxNC4zLTMyIDMydjMySDY0QzI4LjcgNjQgMCA5Mi43IDAgMTI4djMyMGMwIDM1LjMgMjguNyA2NCA2NCA2NGg0NDhjMzUuMyAwIDY0LTI4LjcgNjQtNjRWMTI4YzAtMzUuMy0yOC43LTY0LTY0LTY0ek0yNTYgMzJoNjR2OTZoLTY0VjMyem0xMjggNDQ4SDE5MnYtMjEuOWMwLTkgMi42LTE3LjYgNy42LTI1IDcuMi0xMC43IDIwLjMtMTcuMiAzNS0xNy4yIDE1LjkgMCAyMy41IDggNTMuNCA4czM3LjYtOCA1My40LThjMTQuNyAwIDI3LjcgNi40IDM1IDE3LjIgNSA3LjQgNy42IDE2IDcuNiAyNVY0ODB6bTE2MC0zMmMwIDE3LjYtMTQuNCAzMi0zMiAzMmgtOTZ2LTIxLjljMC0xNS45LTQuOC0zMC42LTEzLTQyLjgtMTMuOC0yMC41LTM3LjMtMzEuMy02MS41LTMxLjMtMjIuMiAwLTI3LjggOC01My40IDgtMjUuNiAwLTMxLjItOC01My40LTgtMjQuMiAwLTQ3LjcgMTAuOC02MS41IDMxLjMtOC4yIDEyLjItMTMgMjctMTMgNDIuOFY0ODBINjRjLTE3LjYgMC0zMi0xNC40LTMyLTMyVjEyOGMwLTE3LjYgMTQuNC0zMiAzMi0zMmgxNjB2NjRoMTI4Vjk2aDE2MGMxNy42IDAgMzIgMTQuNCAzMiAzMnYzMjB6XCIgY2xhc3NOYW1lPVwiXCI+PC9wYXRoPjwvc3ZnPkNhZGFzdHJhci1zZTxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICAgICAgPC9tZW51aXRlbXM+XG4gICAgICA8L3JpZ2h0PlxuICAgIDwvY29udGVudD5cbiAgXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgdG9waW1hZ2Uge1xuICAgICAgICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAzNTBtcyBlYXNlIDBzO1xuICAgICAgICBib3gtc2hhZG93OiAwIDVweCAxMHB4IDAgcmdiYSgwLDAsMCwuNyk7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9zdGF0aWMvaW1hZ2VzL2hvbWVwYWdlL2Jsb2NrY2hhaW4uanBnKTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcGFkZGluZy10b3A6IDMzMHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICAgIHRvcGltYWdlIGgxIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgICAgICBib3R0b206IDY1cHg7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB0ZXh0LXNoYWRvdzogM3B4IDRweCA0cHggcmdiYSgwLDAsMCwxKTtcbiAgICAgIH1cbiAgICAgIHRvcGltYWdlIGltZ3Byb2dyZXNzIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBsZWZ0OiBjYWxjKDUwdncgLSAzNXB4KTtcbiAgICAgICAgdG9wOiAxNTVweDtcbiAgICAgIH1cbiAgICAgIHRvcGltYWdlIGltZ3Byb2dyZXNzIHNwaW5uZXIge1xuICAgICAgICBib3JkZXI6IHNvbGlkIDJweCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzYwNTVmYjtcbiAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjODEwM2Y0O1xuICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogIzgxMDNmNDtcbiAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogIzYwNTVmYjtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW5uZXIgNDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICBhbmltYXRpb246IHNwaW5uZXIgNDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDdweCAxcHggIzgxMDNmNDtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQge1xuICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzcwcHgpO1xuICAgICAgICBwYWRkaW5nOiAwIDMwcHggNDBweCA2MHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgICAgICBtYXJnaW46IDIwcHggMjBweCAwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0b3A6IC05MHB4O1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCA1cHggcmdiYSgwLDAsMCwwLjcpO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMzUwbXMgZWFzZSAwcztcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgLmJhY2sge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHBhZGRpbmc6IDE4cHg7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICB9XG4gICAgICBjb250ZW50IC5iYWNrOmhvdmVyIC5hcnJvdy1sZWZ0IHtcbiAgICAgICAgY29sb3I6ICNiNTAwZmY7XG4gICAgICB9XG4gICAgICBjb250ZW50IC5hcnJvdy1sZWZ0IHtcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgICB3aWR0aDogMjJweDtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgPiBsZWZ0IGgzIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgIGNvbG9yOiAjODUwMEZGO1xuICAgICAgfVxuICAgICAgY29udGVudCA+IGxlZnQgaDYge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBmb250LXNpemU6IDIuNWVtO1xuICAgICAgICBjb2xvcjogIzcyMzZkNjtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgPiBsZWZ0IHAge1xuICAgICAgICBsaW5lLWhlaWdodDogMS40ZW07XG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgIGNvbG9yOiAjNGQ0ZDRkO1xuICAgICAgfVxuICAgICAgY29udGVudCA+IGxlZnQgcCBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogIzg1MDBGRjtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgPiBsZWZ0IHAgYTpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjYmM3NGZmO1xuICAgICAgfVxuICAgICAgY29udGVudCA+IGxlZnQge1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NjYztcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgcGFkZGluZzogMjBweCA0MHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgcmlnaHQge1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDAgMjBweCAzMHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgfVxuICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHNwaW5uZXIge1xuICAgICAgICAwJSAgIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAgICAgICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gICAgICB9XG4gICAgICBAa2V5ZnJhbWVzIHNwaW5uZXIge1xuICAgICAgICAwJSAgIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAgICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyNTBweCkge1xuICAgICAgICBjb250ZW50IHtcbiAgICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICAgICAgfVxuICAgICAgICB0b3BpbWFnZSBoMSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIG1heC13aWR0aDogMTE5MHB4O1xuICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgYm90dG9tOiA3NXB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgY29udGVudCAuYXJyb3ctbGVmdCB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZW50IHtcbiAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgICAgbWFyZ2luOiA1MHB4IDE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudCA+IGxlZnQge1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgdG9waW1hZ2UgaDEge1xuICAgICAgICAgIGJvdHRvbTogMzVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYyNXB4KSB7XG4gICAgICAgIHRvcGltYWdlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDU4cHg7XG4gICAgICAgIH1cbiAgICAgICAgdG9waW1hZ2UgaDEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gICAgICAgICAgdG9wOiA2MHB4O1xuICAgICAgICB9XG4gICAgICAgIGNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgICBtYXJnaW46IDUwcHggNXB4O1xuICAgICAgICB9XG4gICAgICAgIGNvbnRlbnQgPiBsZWZ0IHtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvSW50ZXJmYWNlPlxuKSJdfQ== */\n/*@ sourceURL=/home/ubuntu/workspace/estudo/next/pages/about.js */"),
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
    className: "jsx-2242842066",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: "jsx-2242842066",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "About us")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("content", {
    className: "jsx-2242842066",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "javascript:history.back()",
    className: "jsx-2242842066" + " " + "back",
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
    className: "jsx-2242842066" + " " + "svg-inline arrow-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    fill: "currentColor",
    d: "M229.9 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L94.569 282H436c6.627 0 12-5.373 12-12v-28c0-6.627-5.373-12-12-12H94.569l155.13-155.13c4.686-4.686 4.686-12.284 0-16.971L229.9 38.101c-4.686-4.686-12.284-4.686-16.971 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971L212.929 473.9c4.686 4.686 12.284 4.686 16.971-.001z",
    className: "jsx-2242842066",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("left", {
    className: "jsx-2242842066",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    className: "jsx-2242842066",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "BLOCKCHAIN APPLICATIONS, CUSTOM SOFTWARE, MOBILE APPLICATIONS, WHITEPAPERS AND MORE .."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h6", {
    className: "jsx-2242842066",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "BLOCKCHAIN"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "jsx-2242842066",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "As the world embraces ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://www.blockchain.com/about/index.html",
    target: "_blank",
    className: "jsx-2242842066",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "Blockchain"), " Technology, We seeks to deliver innovations for the development of ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-2242842066",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "enterprise solutions"), " based on the latest technologies, such as ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-2242842066",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "smart contracts"), ", an essential tool for launching digital tokens in the so-called ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://en.wikipedia.org/wiki/Initial_coin_offering",
    target: "_blank",
    className: "jsx-2242842066",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "initial coin offering (ICO)"), "."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "jsx-2242842066",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "The development of new ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-2242842066",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "financial solutions"), " platforms, providing payment gateways associated with centralized ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-2242842066",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "multi-currency exchange"), ", list of currency pairs for ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-2242842066",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "trading"), ", history of foreclosures, offers of ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-2242842066",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "purchase"), " and ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-2242842066",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "sale"), " orders, volume indicator and etc. Custom preparation of ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-2242842066",
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
    className: "jsx-2242842066",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("menuitems", {
    className: "jsx-2242842066",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("btn", {
    href: "//admin.avn.systems",
    target: "_self",
    className: "jsx-2242842066",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", {
    "aria-hidden": "true",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    className: "jsx-2242842066" + " " + "svg-inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    fill: "currentColor",
    d: "M144 112v51.6H48c-26.5 0-48 21.5-48 48v88.6c0 26.5 21.5 48 48 48h96v51.6c0 42.6 51.7 64.2 81.9 33.9l144-143.9c18.7-18.7 18.7-49.1 0-67.9l-144-144C195.8 48 144 69.3 144 112zm192 144L192 400v-99.7H48v-88.6h144V112l144 144zm80 192h-84c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h84c26.5 0 48-21.5 48-48V160c0-26.5-21.5-48-48-48h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96z",
    className: "jsx-2242842066" + " " + "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  })), "Entrar", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", {
    "aria-hidden": "true",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    className: "jsx-2242842066" + " " + "svg-inline svg-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    fill: "currentColor",
    d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
    className: "jsx-2242842066",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("btn", {
    href: "#",
    className: "jsx-2242842066" + " " + "disable",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", {
    "aria-hidden": "true",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 576 512",
    className: "jsx-2242842066" + " " + "svg-inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    fill: "currentColor",
    d: "M288 208c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80zm0 128c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zM512 64H352V32c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v32H64C28.7 64 0 92.7 0 128v320c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zM256 32h64v96h-64V32zm128 448H192v-21.9c0-9 2.6-17.6 7.6-25 7.2-10.7 20.3-17.2 35-17.2 15.9 0 23.5 8 53.4 8s37.6-8 53.4-8c14.7 0 27.7 6.4 35 17.2 5 7.4 7.6 16 7.6 25V480zm160-32c0 17.6-14.4 32-32 32h-96v-21.9c0-15.9-4.8-30.6-13-42.8-13.8-20.5-37.3-31.3-61.5-31.3-22.2 0-27.8 8-53.4 8-25.6 0-31.2-8-53.4-8-24.2 0-47.7 10.8-61.5 31.3-8.2 12.2-13 27-13 42.8V480H64c-17.6 0-32-14.4-32-32V128c0-17.6 14.4-32 32-32h160v64h128V96h160c17.6 0 32 14.4 32 32v320z",
    className: "jsx-2242842066" + " " + "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  })), "Cadastrar-se", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", {
    "aria-hidden": "true",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    className: "jsx-2242842066" + " " + "svg-inline svg-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    fill: "currentColor",
    d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
    className: "jsx-2242842066",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  })))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2242842066",
    css: "topimage.jsx-2242842066{-webkit-transition:margin-left 350ms ease 0s;transition:margin-left 350ms ease 0s;box-shadow:0 5px 10px 0 rgba(0,0,0,.7);background-image:url(".concat("", "/static/images/homepage/blockchain.jpg);background-position-x:center;background-size:cover;position:relative;padding-top:330px;display:block;}topimage.jsx-2242842066 h1.jsx-2242842066{position:absolute;text-transform:uppercase;-webkit-letter-spacing:-1px;-moz-letter-spacing:-1px;-ms-letter-spacing:-1px;letter-spacing:-1px;margin-left:20px;font-size:3em;bottom:65px;color:#fff;text-shadow:3px 4px 4px rgba(0,0,0,1);}topimage.jsx-2242842066 imgprogress.jsx-2242842066{position:fixed;left:calc(50vw - 35px);top:155px;}topimage.jsx-2242842066 imgprogress.jsx-2242842066 spinner.jsx-2242842066{border:solid 2px transparent;border-bottom-color:#6055fb;border-right-color:#8103f4;border-left-color:#8103f4;border-top-color:#6055fb;box-sizing:border-box;border-radius:50%;display:block;height:70px;width:70px;-webkit-animation:spinner 400ms linear infinite;-webkit-animation:spinner-jsx-2242842066 400ms linear infinite;animation:spinner-jsx-2242842066 400ms linear infinite;box-shadow:0px 1px 7px 1px #8103f4;}content.jsx-2242842066{min-height:calc(100vh - 370px);padding:0 30px 40px 60px;border:1px solid #fff;margin:20px 20px 0px;background:#f4f4f4;position:relative;max-width:1200px;overflow:hidden;display:block;top:-90px;box-shadow:0 0 10px 5px rgba(0,0,0,0.7);-webkit-transition:all 350ms ease 0s;transition:all 350ms ease 0s;}content.jsx-2242842066 .back.jsx-2242842066{position:absolute;padding:18px;left:0;}content.jsx-2242842066 .back.jsx-2242842066:hover .arrow-left.jsx-2242842066{color:#b500ff;}content.jsx-2242842066 .arrow-left.jsx-2242842066{overflow:visible;color:black;height:22px;width:22px;}content.jsx-2242842066>left.jsx-2242842066 h3.jsx-2242842066{margin-bottom:20px;-webkit-letter-spacing:3px;-moz-letter-spacing:3px;-ms-letter-spacing:3px;letter-spacing:3px;font-weight:700;font-size:1em;color:#8500FF;}content.jsx-2242842066>left.jsx-2242842066 h6.jsx-2242842066{margin-bottom:20px;font-size:2.5em;color:#7236d6;}content.jsx-2242842066>left.jsx-2242842066 p.jsx-2242842066{line-height:1.4em;text-align:justify;color:#4d4d4d;}content.jsx-2242842066>left.jsx-2242842066 p.jsx-2242842066 a.jsx-2242842066{-webkit-text-decoration:none;text-decoration:none;color:#8500FF;}content.jsx-2242842066>left.jsx-2242842066 p.jsx-2242842066 a.jsx-2242842066:hover{color:#bc74ff;}content.jsx-2242842066>left.jsx-2242842066{border-bottom:2px solid #ccc;background:#fff;padding:20px 40px;display:block;height:100%;float:left;width:70%;}content.jsx-2242842066 right.jsx-2242842066{padding:20px 0 20px 30px;display:block;float:right;width:30%;}@-webkit-keyframes spinner{0%.jsx-2242842066{-webkit-transform:rotate(0deg);}100%.jsx-2242842066{-webkit-transform:rotate(360deg);}}@-webkit-keyframes spinner-jsx-2242842066{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spinner-jsx-2242842066{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@media (min-width:1250px){content.jsx-2242842066{margin:20px auto;}topimage.jsx-2242842066 h1.jsx-2242842066{position:relative;max-width:1190px;margin:0px auto;bottom:75px;width:100%;}}@media (max-width:768px){content.jsx-2242842066 .arrow-left.jsx-2242842066{display:none;}content.jsx-2242842066{padding:0 20px;margin:50px 15px;}content.jsx-2242842066>left.jsx-2242842066{padding:20px;}topimage.jsx-2242842066 h1.jsx-2242842066{bottom:35px;}}@media (max-width:625px){topimage.jsx-2242842066{background-position-y:58px;}topimage.jsx-2242842066 h1.jsx-2242842066{font-size:2.5em;top:60px;}content.jsx-2242842066{padding:0 10px;margin:50px 5px;}content.jsx-2242842066>left.jsx-2242842066{padding:20px 10px;width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvcGFnZXMvYWJvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0pnQixBQUc4QyxBQVVuQixBQVVILEFBS2MsQUFlRSxBQWNiLEFBS0osQUFHRyxBQU1FLEFBT0EsQUFLRCxBQUtHLEFBSVAsQUFHZSxBQVNKLEFBTVksQUFDRSxBQUdWLEFBQ0UsQUFLWixBQUdDLEFBU0wsQUFHRSxBQUlGLEFBR0QsQUFLZSxBQUdYLEFBSUQsQUFJRyxZQWZwQixDQVZBLEFBT0EsQ0E3RUYsQUE4QkEsQ0FyRXlCLEFBZ0hKLEFBbUJELENBSlAsQ0FyRkMsQUF1RFosQ0EzR3lCLEFBNENaLEFBMEJNLEFBd0NBLEFBbUNOLENBdkZNLEFBT0gsTUEwQkYsQUErQ2QsRUFKQSxFQXZINEIsQUFzQ2hCLEFBNkJJLEFBZ0VoQixFQXBIeUIsQUFlbEIsQUFtRCtCLEFBOEN0QyxDQW5CQSxDQTFCd0MsRUEvQjFCLEFBNkNJLEVBeENKLENBNURKLEFBbUNaLENBOENjLEVBdENELEVBckRTLEVBa0ZGLEdBdkVwQixDQXVEQSxDQVFnQixDQUhoQixBQXFCWSxBQW1CSSxDQXpEaEIsSUF4QndCLENBZkssSUE4RTdCLEVBVmdCLEFBNkJELENBckNmLFVBc0NFLEdBN0JZLENBckRTLEdBb0VTLENBOUdTLEVBMkJiLEdBb0ZNLEVBZnJCLFVBckRRLENBc0RULFVBckVlLEFBc0UzQixFQTdCa0IsTUF6QkUsR0EzQ3VFLE9BcUUzRSxPQXpDUSxDQWdCTCxJQWpDQSxFQTJESCxXQXpCRSxHQTBCbEIsQ0EzRGdCLEFBaUJJLFlBaUJKLEVBakNGLElBaUJFLFFBaEJILEFBaUNELE1BaEJFLElBaUI0QixDQWpDRixPQWlCM0IsU0EvQmtCLEVBZ0NtQixvQkFqQmxELENBaUMrQixNQS9DUCxxQkFnQ2tCLENBL0J0QixrQkFDQSxrQkFDSixFQTZDaEIsWUE1Q0EsbUVBNkJxQyxtQ0FDckMiLCJmaWxlIjoiL2hvbWUvdWJ1bnR1L3dvcmtzcGFjZS9lc3R1ZG8vbmV4dC9wYWdlcy9hYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnRlcmZhY2UgZnJvbSAnLi4vY29tcG9uZW50cy9pbnRlcmZhY2UnXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIEltYWdlV2l0aExvYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGltZ1N0YXR1czogXCJcIiB9O1xuICB9XG4gIFxuICBpbWdJbml0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpbWdTdGF0dXM6IFwic2hvd1wiIH0pO1xuICB9XG5cbiAgaW1nTG9hZGVkKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpbWdTdGF0dXM6IFwibG9hZGVkXCIgfSk7XG4gIH1cblxuICBpbWdFcnJvcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW1nU3RhdHVzOiBcImVycm9yXCIgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxhIGhyZWY9e3RoaXMucHJvcHMuaHJlZn0gdGFyZ2V0PXt0aGlzLnByb3BzLnRhcmdldH0+XG4gICAgICAgIDxmZWF0aW1nPlxuICAgICAgICAgIDxpbWdwcm9ncmVzcyBjbGFzc05hbWU9e3RoaXMuc3RhdGUuaW1nU3RhdHVzfT48c3Bpbm5lcj48L3NwaW5uZXI+PC9pbWdwcm9ncmVzcz5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e3RoaXMucHJvcHMuc3JjfVxuICAgICAgICAgICAgYWx0PXt0aGlzLnByb3BzLmFsdCB8fCAnJ31cbiAgICAgICAgICAgIG9uTG9hZD17dGhpcy5pbWdMb2FkZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIG9uRXJyb3I9e3RoaXMuaW1nRXJyb3IuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIG9uTG9hZFN0YXJ0PXt0aGlzLmltZ0luaXQuYmluZCh0aGlzKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDx0ZXh0Pnt0aGlzLnByb3BzLmFsdCB8fCAnJ308L3RleHQ+XG4gICAgICAgIDwvZmVhdGltZz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGZlYXRpbWcge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7dGhpcy5wcm9wcy5zcmN9KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2Y0ZjRmNDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTgwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgd2lkdGg6IDQ5JTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYTpudGgtY2hpbGQoZXZlbikgZmVhdGltZyB7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZlYXRpbWc6aG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzg1MDBGRjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZmVhdGltZyBpbWdwcm9ncmVzcy5zaG93IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xMjVweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMzBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZmVhdGltZyBpbWdwcm9ncmVzcy5zaG93IHNwaW5uZXIge1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjNjA1NWZiO1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjODEwM2Y0O1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICM4MTAzZjQ7XG4gICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiAjNjA1NWZiO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc3Bpbm5lciA0MDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgICBhbmltYXRpb246IHNwaW5uZXIgNDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCA3cHggMXB4ICM4MTAzZjQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzcGlubmVyIHtcbiAgICAgICAgICAgIDAlICAgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgICAgICAgICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBrZXlmcmFtZXMgc3Bpbm5lciB7XG4gICAgICAgICAgICAwJSAgIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAgICAgICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIGZlYXRpbWcgaW1nIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZlYXRpbWcgdGV4dCB7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZjRmNGY0O1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSArIDRweCk7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGJvdHRvbTogLTM1cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICBsZWZ0OiAtMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBmZWF0aW1nOmhvdmVyIHRleHQge1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzg1MDBGRjtcbiAgICAgICAgICAgIGNvbG9yOiAjODUwMEZGO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgIGZlYXRpbWcge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvYT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPEludGVyZmFjZSB0aXRsZT0nQWJvdXQgVXMnPlxuICAgIDx0b3BpbWFnZT5cbiAgICAgIDxoMT5BYm91dCB1czwvaDE+XG4gICAgPC90b3BpbWFnZT5cbiAgICA8Y29udGVudD5cbiAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0Omhpc3RvcnkuYmFjaygpXCIgY2xhc3NOYW1lPVwiYmFja1wiPlxuICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCIgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBhcnJvdy1sZWZ0XCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI5LjkgNDczLjg5OWwxOS43OTktMTkuNzk5YzQuNjg2LTQuNjg2IDQuNjg2LTEyLjI4NCAwLTE2Ljk3MUw5NC41NjkgMjgySDQzNmM2LjYyNyAwIDEyLTUuMzczIDEyLTEydi0yOGMwLTYuNjI3LTUuMzczLTEyLTEyLTEySDk0LjU2OWwxNTUuMTMtMTU1LjEzYzQuNjg2LTQuNjg2IDQuNjg2LTEyLjI4NCAwLTE2Ljk3MUwyMjkuOSAzOC4xMDFjLTQuNjg2LTQuNjg2LTEyLjI4NC00LjY4Ni0xNi45NzEgMEwzLjUxNSAyNDcuNTE1Yy00LjY4NiA0LjY4Ni00LjY4NiAxMi4yODQgMCAxNi45NzFMMjEyLjkyOSA0NzMuOWM0LjY4NiA0LjY4NiAxMi4yODQgNC42ODYgMTYuOTcxLS4wMDF6XCI+PC9wYXRoPjwvc3ZnPjwvYT5cbiAgICAgIDxsZWZ0PlxuICAgICAgICA8aDM+QkxPQ0tDSEFJTiBBUFBMSUNBVElPTlMsIENVU1RPTSBTT0ZUV0FSRSwgTU9CSUxFIEFQUExJQ0FUSU9OUywgV0hJVEVQQVBFUlMgQU5EIE1PUkUgLi48L2gzPlxuICAgICAgICA8aDY+QkxPQ0tDSEFJTjwvaDY+XG4gICAgICAgIDxwPkFzIHRoZSB3b3JsZCBlbWJyYWNlcyA8YSBocmVmPVwiaHR0cHM6Ly93d3cuYmxvY2tjaGFpbi5jb20vYWJvdXQvaW5kZXguaHRtbFwiIHRhcmdldD1cIl9ibGFua1wiPkJsb2NrY2hhaW48L2E+IFRlY2hub2xvZ3ksIFdlIHNlZWtzIHRvIGRlbGl2ZXIgaW5ub3ZhdGlvbnMgZm9yIHRoZSBkZXZlbG9wbWVudCBvZiA8YT5lbnRlcnByaXNlIHNvbHV0aW9uczwvYT4gYmFzZWQgb24gdGhlIGxhdGVzdCB0ZWNobm9sb2dpZXMsIHN1Y2ggYXMgPGE+c21hcnQgY29udHJhY3RzPC9hPiwgYW4gZXNzZW50aWFsIHRvb2wgZm9yIGxhdW5jaGluZyBkaWdpdGFsIHRva2VucyBpbiB0aGUgc28tY2FsbGVkIDxhIGhyZWY9XCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Jbml0aWFsX2NvaW5fb2ZmZXJpbmdcIiB0YXJnZXQ9XCJfYmxhbmtcIj5pbml0aWFsIGNvaW4gb2ZmZXJpbmcgKElDTyk8L2E+LjwvcD5cbiAgICAgICAgXG4gICAgICAgIDxwPlRoZSBkZXZlbG9wbWVudCBvZiBuZXcgPGE+ZmluYW5jaWFsIHNvbHV0aW9uczwvYT4gcGxhdGZvcm1zLCBwcm92aWRpbmcgcGF5bWVudCBnYXRld2F5cyBhc3NvY2lhdGVkIHdpdGggY2VudHJhbGl6ZWQgPGE+bXVsdGktY3VycmVuY3kgZXhjaGFuZ2U8L2E+LCBsaXN0IG9mIGN1cnJlbmN5IHBhaXJzIGZvciA8YT50cmFkaW5nPC9hPiwgaGlzdG9yeSBvZiBmb3JlY2xvc3VyZXMsIG9mZmVycyBvZiA8YT5wdXJjaGFzZTwvYT4gYW5kIDxhPnNhbGU8L2E+IG9yZGVycywgdm9sdW1lIGluZGljYXRvciBhbmQgZXRjLiBDdXN0b20gcHJlcGFyYXRpb24gb2YgPGE+d2hpdGVwYXBlcnM8L2E+IGZvciBwcm9qZWN0cyB3aXRoIGluaXRpYWwgb2ZmZXIgbGF1bmNoLiBIZXJlIGFyZSBzb21lIHRlY2hub2xvZ2llcyB3ZSBhcmUgZm9sbG93aW5nIGNsb3NlbHk6PC9wPlxuICAgICAgICBcbiAgICAgICAgPEltYWdlV2l0aExvYWRlciBzcmM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMK1wiL3N0YXRpYy9pbWFnZXMvYWJvdXQvZXRoZXJldW0uanBnXCJ9IGFsdD1cIkV0aGVyZXVtXCIgaHJlZj1cImh0dHBzOi8vZXRoZXJldW0ub3JnL1wiIHRhcmdldD1cIl9ibGFua1wiLz5cbiAgICAgICAgPEltYWdlV2l0aExvYWRlciBzcmM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMK1wiL3N0YXRpYy9pbWFnZXMvYWJvdXQvZGVjZW50LWNoLmpwZ1wifSBhbHQ9XCJEZWNlbnRcIiBocmVmPVwiaHR0cHM6Ly9kZWNlbnQuY2hcIiB0YXJnZXQ9XCJfYmxhbmtcIi8+XG4gICAgICAgIDxJbWFnZVdpdGhMb2FkZXIgc3JjPXtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCtcIi9zdGF0aWMvaW1hZ2VzL2Fib3V0L2lwZnMuanBnXCJ9IGFsdD1cIklQRlNcIiBocmVmPVwiaHR0cHM6Ly9pcGZzLmlvL1wiIHRhcmdldD1cIl9ibGFua1wiLz5cbiAgICAgICAgPEltYWdlV2l0aExvYWRlciBzcmM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMK1wiL3N0YXRpYy9pbWFnZXMvYWJvdXQvYmxvY2tzdGFjay5qcGdcIn0gYWx0PVwiQmxvY2tzdGFja1wiIGhyZWY9XCJodHRwczovL2Jsb2Nrc3RhY2sub3JnL1wiIHRhcmdldD1cIl9ibGFua1wiLz5cblxuICAgICAgPC9sZWZ0PlxuICAgICAgPHJpZ2h0PlxuICAgICAgICA8bWVudWl0ZW1zPlxuICAgICAgICAgICAgPGJ0biBocmVmPVwiLy9hZG1pbi5hdm4uc3lzdGVtc1wiIHRhcmdldD1cIl9zZWxmXCI+XG4gICAgICAgICAgICBcdDxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTQ0IDExMnY1MS42SDQ4Yy0yNi41IDAtNDggMjEuNS00OCA0OHY4OC42YzAgMjYuNSAyMS41IDQ4IDQ4IDQ4aDk2djUxLjZjMCA0Mi42IDUxLjcgNjQuMiA4MS45IDMzLjlsMTQ0LTE0My45YzE4LjctMTguNyAxOC43LTQ5LjEgMC02Ny45bC0xNDQtMTQ0QzE5NS44IDQ4IDE0NCA2OS4zIDE0NCAxMTJ6bTE5MiAxNDRMMTkyIDQwMHYtOTkuN0g0OHYtODguNmgxNDRWMTEybDE0NCAxNDR6bTgwIDE5MmgtODRjLTYuNiAwLTEyLTUuNC0xMi0xMnYtMjRjMC02LjYgNS40LTEyIDEyLTEyaDg0YzI2LjUgMCA0OC0yMS41IDQ4LTQ4VjE2MGMwLTI2LjUtMjEuNS00OC00OC00OGgtODRjLTYuNiAwLTEyLTUuNC0xMi0xMlY3NmMwLTYuNiA1LjQtMTIgMTItMTJoODRjNTMgMCA5NiA0MyA5NiA5NnYxOTJjMCA1My00MyA5Ni05NiA5NnpcIiBjbGFzc05hbWU9XCJcIj48L3BhdGg+PC9zdmc+RW50cmFyPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgICAgICAgICAgPGJ0biBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImRpc2FibGVcIj5cbiAgICAgICAgICAgIFx0PHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDU3NiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yODggMjA4Yy00NC4yIDAtODAgMzUuOC04MCA4MHMzNS44IDgwIDgwIDgwIDgwLTM1LjggODAtODAtMzUuOC04MC04MC04MHptMCAxMjhjLTI2LjUgMC00OC0yMS41LTQ4LTQ4czIxLjUtNDggNDgtNDggNDggMjEuNSA0OCA0OC0yMS41IDQ4LTQ4IDQ4ek01MTIgNjRIMzUyVjMyYzAtMTcuNy0xNC4zLTMyLTMyLTMyaC02NGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJ2MzJINjRDMjguNyA2NCAwIDkyLjcgMCAxMjh2MzIwYzAgMzUuMyAyOC43IDY0IDY0IDY0aDQ0OGMzNS4zIDAgNjQtMjguNyA2NC02NFYxMjhjMC0zNS4zLTI4LjctNjQtNjQtNjR6TTI1NiAzMmg2NHY5NmgtNjRWMzJ6bTEyOCA0NDhIMTkydi0yMS45YzAtOSAyLjYtMTcuNiA3LjYtMjUgNy4yLTEwLjcgMjAuMy0xNy4yIDM1LTE3LjIgMTUuOSAwIDIzLjUgOCA1My40IDhzMzcuNi04IDUzLjQtOGMxNC43IDAgMjcuNyA2LjQgMzUgMTcuMiA1IDcuNCA3LjYgMTYgNy42IDI1VjQ4MHptMTYwLTMyYzAgMTcuNi0xNC40IDMyLTMyIDMyaC05NnYtMjEuOWMwLTE1LjktNC44LTMwLjYtMTMtNDIuOC0xMy44LTIwLjUtMzcuMy0zMS4zLTYxLjUtMzEuMy0yMi4yIDAtMjcuOCA4LTUzLjQgOC0yNS42IDAtMzEuMi04LTUzLjQtOC0yNC4yIDAtNDcuNyAxMC44LTYxLjUgMzEuMy04LjIgMTIuMi0xMyAyNy0xMyA0Mi44VjQ4MEg2NGMtMTcuNiAwLTMyLTE0LjQtMzItMzJWMTI4YzAtMTcuNiAxNC40LTMyIDMyLTMyaDE2MHY2NGgxMjhWOTZoMTYwYzE3LjYgMCAzMiAxNC40IDMyIDMydjMyMHpcIiBjbGFzc05hbWU9XCJcIj48L3BhdGg+PC9zdmc+Q2FkYXN0cmFyLXNlPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgICAgICA8L21lbnVpdGVtcz5cbiAgICAgIDwvcmlnaHQ+XG4gICAgPC9jb250ZW50PlxuICBcbiAgICA8c3R5bGUganN4PntgXG4gICAgICB0b3BpbWFnZSB7XG4gICAgICAgIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDM1MG1zIGVhc2UgMHM7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggMCByZ2JhKDAsMCwwLC43KTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L3N0YXRpYy9pbWFnZXMvaG9tZXBhZ2UvYmxvY2tjaGFpbi5qcGcpO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBwYWRkaW5nLXRvcDogMzMwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgICAgdG9waW1hZ2UgaDEge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgZm9udC1zaXplOiAzZW07XG4gICAgICAgIGJvdHRvbTogNjVweDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHRleHQtc2hhZG93OiAzcHggNHB4IDRweCByZ2JhKDAsMCwwLDEpO1xuICAgICAgfVxuICAgICAgdG9waW1hZ2UgaW1ncHJvZ3Jlc3Mge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGxlZnQ6IGNhbGMoNTB2dyAtIDM1cHgpO1xuICAgICAgICB0b3A6IDE1NXB4O1xuICAgICAgfVxuICAgICAgdG9waW1hZ2UgaW1ncHJvZ3Jlc3Mgc3Bpbm5lciB7XG4gICAgICAgIGJvcmRlcjogc29saWQgMnB4IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjNjA1NWZiO1xuICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6ICM4MTAzZjQ7XG4gICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjODEwM2Y0O1xuICAgICAgICBib3JkZXItdG9wLWNvbG9yOiAjNjA1NWZiO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc3Bpbm5lciA0MDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgIGFuaW1hdGlvbjogc3Bpbm5lciA0MDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggN3B4IDFweCAjODEwM2Y0O1xuICAgICAgfVxuICAgICAgY29udGVudCB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzNzBweCk7XG4gICAgICAgIHBhZGRpbmc6IDAgMzBweCA0MHB4IDYwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgICAgIG1hcmdpbjogMjBweCAyMHB4IDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRvcDogLTkwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDVweCByZ2JhKDAsMCwwLDAuNyk7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAzNTBtcyBlYXNlIDBzO1xuICAgICAgfVxuICAgICAgY29udGVudCAuYmFjayB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcGFkZGluZzogMThweDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgLmJhY2s6aG92ZXIgLmFycm93LWxlZnQge1xuICAgICAgICBjb2xvcjogI2I1MDBmZjtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgLmFycm93LWxlZnQge1xuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICAgIHdpZHRoOiAyMnB4O1xuICAgICAgfVxuICAgICAgY29udGVudCA+IGxlZnQgaDMge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgY29sb3I6ICM4NTAwRkY7XG4gICAgICB9XG4gICAgICBjb250ZW50ID4gbGVmdCBoNiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gICAgICAgIGNvbG9yOiAjNzIzNmQ2O1xuICAgICAgfVxuICAgICAgY29udGVudCA+IGxlZnQgcCB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgY29sb3I6ICM0ZDRkNGQ7XG4gICAgICB9XG4gICAgICBjb250ZW50ID4gbGVmdCBwIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiAjODUwMEZGO1xuICAgICAgfVxuICAgICAgY29udGVudCA+IGxlZnQgcCBhOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICNiYzc0ZmY7XG4gICAgICB9XG4gICAgICBjb250ZW50ID4gbGVmdCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2NjO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgfVxuICAgICAgY29udGVudCByaWdodCB7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMCAyMHB4IDMwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICB9XG4gICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc3Bpbm5lciB7XG4gICAgICAgIDAlICAgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgICAgIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbiAgICAgIH1cbiAgICAgIEBrZXlmcmFtZXMgc3Bpbm5lciB7XG4gICAgICAgIDAlICAgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAgICAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTI1MHB4KSB7XG4gICAgICAgIGNvbnRlbnQge1xuICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIHRvcGltYWdlIGgxIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMTkwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICBib3R0b206IDc1cHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBjb250ZW50IC5hcnJvdy1sZWZ0IHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICAgICAgICBtYXJnaW46IDUwcHggMTVweDtcbiAgICAgICAgfVxuICAgICAgICBjb250ZW50ID4gbGVmdCB7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgfVxuICAgICAgICB0b3BpbWFnZSBoMSB7XG4gICAgICAgICAgYm90dG9tOiAzNXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNjI1cHgpIHtcbiAgICAgICAgdG9waW1hZ2Uge1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogNThweDtcbiAgICAgICAgfVxuICAgICAgICB0b3BpbWFnZSBoMSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyLjVlbTtcbiAgICAgICAgICB0b3A6IDYwcHg7XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICAgIG1hcmdpbjogNTBweCA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudCA+IGxlZnQge1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9JbnRlcmZhY2U+XG4pIl19 */\n/*@ sourceURL=/home/ubuntu/workspace/estudo/next/pages/about.js */"),
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
//# sourceMappingURL=about.js.18c773e8dfe5c93207ee.hot-update.js.map