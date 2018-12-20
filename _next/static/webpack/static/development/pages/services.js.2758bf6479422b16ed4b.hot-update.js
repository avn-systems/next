webpackHotUpdate("static/development/pages/services.js",{

/***/ "./pages/services.js":
/*!***************************!*\
  !*** ./pages/services.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/interface */ "./components/interface.js");
var _jsxFileName = "/home/ubuntu/workspace/estudo/next/pages/services.js";



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
function (_Component) {
  _inherits(ImageWithLoader, _Component);

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
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: this.props.href,
        target: this.props.target,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1532854595", [this.props.src]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("featimg", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1532854595", [this.props.src]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("imgprogress", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1532854595", [this.props.src]]]) + " " + (this.state.imgStatus || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("spinner", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1532854595", [this.props.src]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
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
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1532854595", [this.props.src]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, this.props.alt || '')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1532854595",
        css: "featimg.__jsx-style-dynamic-selector{background-image:url(".concat(this.props.src, ");background-repeat:no-repeat;background-position:center;background-color:#f4f4f4;background-size:cover;border:2px solid #f4f4f4;margin-bottom:50px;padding-top:180px;display:block;float:left;width:49%;}a.__jsx-style-dynamic-selector:nth-child(even) featimg.__jsx-style-dynamic-selector{float:right;}featimg.__jsx-style-dynamic-selector:hover{border:2px solid #8500FF;}featimg.__jsx-style-dynamic-selector imgprogress.show.__jsx-style-dynamic-selector{position:absolute;margin-top:-125px;margin-left:130px;}featimg.__jsx-style-dynamic-selector imgprogress.show.__jsx-style-dynamic-selector spinner.__jsx-style-dynamic-selector{border:solid 2px transparent;border-bottom-color:#6055fb;border-right-color:#8103f4;border-left-color:#8103f4;border-top-color:#6055fb;box-sizing:border-box;border-radius:50%;display:block;height:70px;width:70px;-webkit-animation:spinner 400ms linear infinite;-webkit-animation:spinner-__jsx-style-dynamic-selector 400ms linear infinite;animation:spinner-__jsx-style-dynamic-selector 400ms linear infinite;box-shadow:0px 1px 7px 1px #8103f4;}@-webkit-keyframes spinner{0%.__jsx-style-dynamic-selector{-webkit-transform:rotate(0deg);}100%.__jsx-style-dynamic-selector{-webkit-transform:rotate(360deg);}}@-webkit-keyframes spinner-__jsx-style-dynamic-selector{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spinner-__jsx-style-dynamic-selector{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}featimg.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{display:none;}featimg.__jsx-style-dynamic-selector text.__jsx-style-dynamic-selector{border:2px solid #f4f4f4;width:calc(100% + 4px);text-align:center;position:relative;background:white;font-weight:500;display:block;bottom:-35px;padding:5px;left:-2px;}featimg.__jsx-style-dynamic-selector:hover text.__jsx-style-dynamic-selector{border:2px solid #8500FF;color:#8500FF;}@media (max-width:768px){featimg.__jsx-style-dynamic-selector{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvcGFnZXMvc2VydmljZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUNvQixBQUdnRSxBQWN2QyxBQUdhLEFBR1AsQUFLVyxBQWdCUSxBQUNFLEFBR1YsQUFDRSxBQUlsQixBQUdZLEFBWUEsQUFNWixXQUNiLENBekRGLENBb0NBLEtBOUJvQixPQUhwQixBQW9DeUIsQUFZVCxJQXhDYyxFQWVVLEVBQ0UsR0FwQnRCLEdBNkNwQixTQVpvQixHQXREVSxHQXNCOUIsR0FJNkIsU0E2QlQsYUF0RFMsRUEyQ0csR0FqQkosQUE2QlQsR0FYZSxjQVloQixLQXZEUyxJQTBCQSxPQThCWCxjQXZEUSxBQXdEVCxJQTlCUyxTQStCVixTQXZEYSxHQXdEZixDQS9CUSxTQWdDcEIsU0EvQmdCLEdBekJLLFdBMEJQLFFBekJNLElBMEJQLFdBQ3FDLEdBMUJsQyxjQUNILFdBQ0QsVUFDWixVQXdCMEMsa0pBQ0wsbUNBQ3JDIiwiZmlsZSI6Ii9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvcGFnZXMvc2VydmljZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW50ZXJmYWNlIGZyb20gJy4uL2NvbXBvbmVudHMvaW50ZXJmYWNlJ1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmNsYXNzIEltYWdlV2l0aExvYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGltZ1N0YXR1czogXCJcIiB9O1xuICB9XG4gIFxuICBpbWdJbml0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpbWdTdGF0dXM6IFwic2hvd1wiIH0pO1xuICB9XG5cbiAgaW1nTG9hZGVkKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpbWdTdGF0dXM6IFwibG9hZGVkXCIgfSk7XG4gIH1cblxuICBpbWdFcnJvcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW1nU3RhdHVzOiBcImVycm9yXCIgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxhIGhyZWY9e3RoaXMucHJvcHMuaHJlZn0gdGFyZ2V0PXt0aGlzLnByb3BzLnRhcmdldH0+XG4gICAgICAgIDxmZWF0aW1nPlxuICAgICAgICAgIDxpbWdwcm9ncmVzcyBjbGFzc05hbWU9e3RoaXMuc3RhdGUuaW1nU3RhdHVzfT48c3Bpbm5lcj48L3NwaW5uZXI+PC9pbWdwcm9ncmVzcz5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e3RoaXMucHJvcHMuc3JjfVxuICAgICAgICAgICAgYWx0PXt0aGlzLnByb3BzLmFsdCB8fCAnJ31cbiAgICAgICAgICAgIG9uTG9hZD17dGhpcy5pbWdMb2FkZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIG9uRXJyb3I9e3RoaXMuaW1nRXJyb3IuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIG9uTG9hZFN0YXJ0PXt0aGlzLmltZ0luaXQuYmluZCh0aGlzKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDx0ZXh0Pnt0aGlzLnByb3BzLmFsdCB8fCAnJ308L3RleHQ+XG4gICAgICAgIDwvZmVhdGltZz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGZlYXRpbWcge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7dGhpcy5wcm9wcy5zcmN9KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2Y0ZjRmNDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTgwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgd2lkdGg6IDQ5JTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYTpudGgtY2hpbGQoZXZlbikgZmVhdGltZyB7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZlYXRpbWc6aG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzg1MDBGRjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZmVhdGltZyBpbWdwcm9ncmVzcy5zaG93IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xMjVweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMzBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZmVhdGltZyBpbWdwcm9ncmVzcy5zaG93IHNwaW5uZXIge1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjNjA1NWZiO1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjODEwM2Y0O1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICM4MTAzZjQ7XG4gICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiAjNjA1NWZiO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc3Bpbm5lciA0MDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgICBhbmltYXRpb246IHNwaW5uZXIgNDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCA3cHggMXB4ICM4MTAzZjQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzcGlubmVyIHtcbiAgICAgICAgICAgIDAlICAgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgICAgICAgICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBrZXlmcmFtZXMgc3Bpbm5lciB7XG4gICAgICAgICAgICAwJSAgIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAgICAgICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIGZlYXRpbWcgaW1nIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZlYXRpbWcgdGV4dCB7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZjRmNGY0O1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSArIDRweCk7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGJvdHRvbTogLTM1cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICBsZWZ0OiAtMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBmZWF0aW1nOmhvdmVyIHRleHQge1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzg1MDBGRjtcbiAgICAgICAgICAgIGNvbG9yOiAjODUwMEZGO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgIGZlYXRpbWcge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvYT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPEludGVyZmFjZSB0aXRsZT0nQVZOIFNZU1RFTVMnPlxuICAgIDx0b3BpbWFnZT5cbiAgICAgIDxoMT5TT0xVVElPTlMgQU5EIFNFUlZJQ0VTPC9oMT5cbiAgICA8L3RvcGltYWdlPlxuICAgIDxjb250ZW50PlxuICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6aGlzdG9yeS5iYWNrKClcIiBjbGFzc05hbWU9XCJiYWNrXCI+XG4gICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIiBjbGFzc05hbWU9XCJzdmctaW5saW5lIGFycm93LWxlZnRcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjkuOSA0NzMuODk5bDE5Ljc5OS0xOS43OTljNC42ODYtNC42ODYgNC42ODYtMTIuMjg0IDAtMTYuOTcxTDk0LjU2OSAyODJINDM2YzYuNjI3IDAgMTItNS4zNzMgMTItMTJ2LTI4YzAtNi42MjctNS4zNzMtMTItMTItMTJIOTQuNTY5bDE1NS4xMy0xNTUuMTNjNC42ODYtNC42ODYgNC42ODYtMTIuMjg0IDAtMTYuOTcxTDIyOS45IDM4LjEwMWMtNC42ODYtNC42ODYtMTIuMjg0LTQuNjg2LTE2Ljk3MSAwTDMuNTE1IDI0Ny41MTVjLTQuNjg2IDQuNjg2LTQuNjg2IDEyLjI4NCAwIDE2Ljk3MUwyMTIuOTI5IDQ3My45YzQuNjg2IDQuNjg2IDEyLjI4NCA0LjY4NiAxNi45NzEtLjAwMXpcIj48L3BhdGg+PC9zdmc+PC9hPlxuICAgICAgPGxlZnQ+XG4gICAgICAgIDxoMz5CTE9DS0NIQUlOIEFQUExJQ0FUSU9OUywgQ1VTVE9NIFNPRlRXQVJFLCBNT0JJTEUgQVBQTElDQVRJT05TLCBXSElURVBBUEVSUyBBTkQgTU9SRS4uLjwvaDM+XG4gICAgICAgIDxoNj5CTE9DS0NIQUlOPC9oNj5cbiAgICAgICAgPHA+QXMgdGhlIHdvcmxkIGVtYnJhY2VzIDxhIGhyZWY9XCJodHRwczovL3d3dy5ibG9ja2NoYWluLmNvbS9hYm91dC9pbmRleC5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCI+QmxvY2tjaGFpbjwvYT4gVGVjaG5vbG9neSwgV2Ugc2Vla3MgdG8gZGVsaXZlciBpbm5vdmF0aW9ucyBmb3IgdGhlIGRldmVsb3BtZW50IG9mIDxhPmVudGVycHJpc2Ugc29sdXRpb25zPC9hPiBiYXNlZCBvbiB0aGUgbGF0ZXN0IHRlY2hub2xvZ2llcywgc3VjaCBhcyA8YT5zbWFydCBjb250cmFjdHM8L2E+LCBhbiBlc3NlbnRpYWwgdG9vbCBmb3IgbGF1bmNoaW5nIGRpZ2l0YWwgdG9rZW5zIGluIHRoZSBzby1jYWxsZWQgPGEgaHJlZj1cImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0luaXRpYWxfY29pbl9vZmZlcmluZ1wiIHRhcmdldD1cIl9ibGFua1wiPmluaXRpYWwgY29pbiBvZmZlcmluZyAoSUNPKTwvYT4uPC9wPlxuICAgICAgICBcbiAgICAgICAgPHA+VGhlIGRldmVsb3BtZW50IG9mIG5ldyA8YT5maW5hbmNpYWwgc29sdXRpb25zPC9hPiBwbGF0Zm9ybXMsIHByb3ZpZGluZyBwYXltZW50IGdhdGV3YXlzIGFzc29jaWF0ZWQgd2l0aCBjZW50cmFsaXplZCA8YT5tdWx0aS1jdXJyZW5jeSBleGNoYW5nZTwvYT4sIGxpc3Qgb2YgY3VycmVuY3kgcGFpcnMgZm9yIDxhPnRyYWRpbmc8L2E+LCBoaXN0b3J5IG9mIGZvcmVjbG9zdXJlcywgb2ZmZXJzIG9mIDxhPnB1cmNoYXNlPC9hPiBhbmQgPGE+c2FsZTwvYT4gb3JkZXJzLCB2b2x1bWUgaW5kaWNhdG9yIGFuZCBldGMuIEN1c3RvbSBwcmVwYXJhdGlvbiBvZiA8YT53aGl0ZXBhcGVyczwvYT4gZm9yIHByb2plY3RzIHdpdGggaW5pdGlhbCBvZmZlciBsYXVuY2guIEhlcmUgYXJlIHNvbWUgdGVjaG5vbG9naWVzIHdlIGFyZSBmb2xsb3dpbmcgY2xvc2VseTo8L3A+XG4gICAgICAgIFxuICAgICAgICA8SW1hZ2VXaXRoTG9hZGVyIHNyYz17cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwrXCIvc3RhdGljL2ltYWdlcy9zZXJ2aWNlcy9ldGhlcmV1bS5qcGdcIn0gYWx0PVwiRXRoZXJldW1cIiBocmVmPVwiaHR0cHM6Ly9ldGhlcmV1bS5vcmcvXCIgdGFyZ2V0PVwiX2JsYW5rXCIvPlxuICAgICAgICA8SW1hZ2VXaXRoTG9hZGVyIHNyYz17cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwrXCIvc3RhdGljL2ltYWdlcy9zZXJ2aWNlcy9kZWNlbnQtY2guanBnXCJ9IGFsdD1cIkRlY2VudFwiIGhyZWY9XCJodHRwczovL2RlY2VudC5jaFwiIHRhcmdldD1cIl9ibGFua1wiLz5cbiAgICAgICAgPEltYWdlV2l0aExvYWRlciBzcmM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMK1wiL3N0YXRpYy9pbWFnZXMvc2VydmljZXMvaXBmcy5qcGdcIn0gYWx0PVwiSVBGU1wiIGhyZWY9XCJodHRwczovL2lwZnMuaW8vXCIgdGFyZ2V0PVwiX2JsYW5rXCIvPlxuICAgICAgICA8SW1hZ2VXaXRoTG9hZGVyIHNyYz17cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwrXCIvc3RhdGljL2ltYWdlcy9zZXJ2aWNlcy9ibG9ja3N0YWNrLmpwZ1wifSBhbHQ9XCJCbG9ja3N0YWNrXCIgaHJlZj1cImh0dHBzOi8vYmxvY2tzdGFjay5vcmcvXCIgdGFyZ2V0PVwiX2JsYW5rXCIvPlxuICAgICAgPC9sZWZ0PlxuICAgICAgPHJpZ2h0PlxuICAgICAgICA8TWVudUl0ZW1zIHNlbGVjdGVkPVwiU0VSVklDRVNcIi8+XG4gICAgICA8L3JpZ2h0PlxuICAgIDwvY29udGVudD5cbiAgICAgICAgICAgIFxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIFxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTI1MHB4KSBhbmQgKG1heC13aWR0aDogMTU5MHB4KSB7XG4gICAgICAgICAgICBib2R5LmxlZnQtbWVudSB0b3BpbWFnZSBoMSB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAxMDBweCkhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYm9keS5sZWZ0LW1lbnUgY29udGVudCB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KSFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgYH08L3N0eWxlPlxuICBcbiAgICA8c3R5bGUganN4PntgXG4gICAgICB0b3BpbWFnZSB7XG4gICAgICAgIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDM1MG1zIGVhc2UgMHM7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggMCByZ2JhKDAsMCwwLC43KTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L3N0YXRpYy9pbWFnZXMvaG9tZXBhZ2UvYmxvY2tjaGFpbi5qcGcpO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBwYWRkaW5nLXRvcDogMzMwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgICAgdG9waW1hZ2UgaDEge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICAgICAgZm9udC1zaXplOiAzZW07XG4gICAgICAgIGJvdHRvbTogNjVweDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHRleHQtc2hhZG93OiAzcHggNHB4IDRweCByZ2JhKDAsMCwwLDEpO1xuICAgICAgfVxuICAgICAgdG9waW1hZ2UgaW1ncHJvZ3Jlc3Mge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGxlZnQ6IGNhbGMoNTB2dyAtIDM1cHgpO1xuICAgICAgICB0b3A6IDE1NXB4O1xuICAgICAgfVxuICAgICAgdG9waW1hZ2UgaW1ncHJvZ3Jlc3Mgc3Bpbm5lciB7XG4gICAgICAgIGJvcmRlcjogc29saWQgMnB4IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjNjA1NWZiO1xuICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6ICM4MTAzZjQ7XG4gICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjODEwM2Y0O1xuICAgICAgICBib3JkZXItdG9wLWNvbG9yOiAjNjA1NWZiO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc3Bpbm5lciA0MDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgIGFuaW1hdGlvbjogc3Bpbm5lciA0MDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggN3B4IDFweCAjODEwM2Y0O1xuICAgICAgfVxuICAgICAgY29udGVudCB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzNzBweCk7XG4gICAgICAgIHBhZGRpbmc6IDAgMzBweCA0MHB4IDYwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgICAgIG1hcmdpbjogMjBweCAyMHB4IDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRvcDogLTkwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDVweCByZ2JhKDAsMCwwLDAuNyk7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAzNTBtcyBlYXNlIDBzO1xuICAgICAgfVxuICAgICAgY29udGVudCAuYmFjayB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcGFkZGluZzogMThweDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgLmJhY2s6aG92ZXIgLmFycm93LWxlZnQge1xuICAgICAgICBjb2xvcjogI2I1MDBmZjtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgLmFycm93LWxlZnQge1xuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICAgIHdpZHRoOiAyMnB4O1xuICAgICAgfVxuICAgICAgXG4gICAgICBjb250ZW50ID4gbGVmdCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2NjO1xuICAgICAgICBwYWRkaW5nOiAzMHB4IDQwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgfVxuICAgICAgY29udGVudCA+IGxlZnQgaDMge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgY29sb3I6ICM4NTAwRkY7XG4gICAgICB9XG4gICAgICBjb250ZW50ID4gbGVmdCBoNiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gICAgICAgIGNvbG9yOiAjNzIzNmQ2O1xuICAgICAgfVxuICAgICAgY29udGVudCA+IGxlZnQgcCB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgY29sb3I6ICM0ZDRkNGQ7XG4gICAgICB9XG4gICAgICBjb250ZW50ID4gbGVmdCBwIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiAjODUwMEZGO1xuICAgICAgfVxuICAgICAgY29udGVudCA+IGxlZnQgcCBhOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICNiYzc0ZmY7XG4gICAgICB9XG4gICAgICBjb250ZW50ID4gcmlnaHQge1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDMwcHggMjBweCA2MHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgfVxuICAgICAgY29udGVudCA+IHJpZ2h0IG1lbnVpdGVtcyBidG46aG92ZXIge1xuICAgICAgICBjb2xvcjogIzg1MDBGRjtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgPiByaWdodCBtZW51aXRlbXMgYnRuLmFjdGl2ZSB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgIGNvbG9yOiAjMTQxNDE0O1xuICAgICAgfVxuICAgICAgY29udGVudCA+IHJpZ2h0IG1lbnVpdGVtcyBidG4ge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiA1cHggMDtcbiAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICB9XG4gICAgICBjb250ZW50ID4gcmlnaHQgbWVudWl0ZW1zIGJ0bnNvbGlkIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNkZGQ7XG4gICAgICAgIGJhY2tncm91bmQ6ICM4NTAwRkY7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgICBjb250ZW50ID4gcmlnaHQgbWVudWl0ZW1zIGJ0bnNvbGlkOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzljMzFmZjtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgPiByaWdodCBtZW51aXRlbXMgaHIge1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG4gICAgICB9XG4gICAgICBcbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzcGlubmVyIHtcbiAgICAgICAgMCUgICB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAgICAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICAgICAgfVxuICAgICAgQGtleWZyYW1lcyBzcGlubmVyIHtcbiAgICAgICAgMCUgICB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjUwcHgpIHtcbiAgICAgICAgY29udGVudCB7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgdG9waW1hZ2UgaDEge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDExNjBweDtcbiAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgIGJvdHRvbTogNzVweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk0NXB4KSB7XG4gICAgICAgIGNvbnRlbnQgPiByaWdodCB7XG4gICAgICAgICAgcGFkZGluZzogMjBweCAwcHggMjBweCAzMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgY29udGVudCAuYXJyb3ctbGVmdCB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZW50IHtcbiAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgICAgbWFyZ2luOiA1MHB4IDE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudCA+IGxlZnQge1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgdG9waW1hZ2UgaDEge1xuICAgICAgICAgIGJvdHRvbTogMzVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYyNXB4KSB7XG4gICAgICAgIHRvcGltYWdlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDU4cHg7XG4gICAgICAgIH1cbiAgICAgICAgdG9waW1hZ2UgaDEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICAgIG1hcmdpbjogNTBweCA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudCA+IGxlZnQge1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZW50ID4gcmlnaHQge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgXG4gIDwvSW50ZXJmYWNlPlxuKSJdfQ== */\n/*@ sourceURL=/home/ubuntu/workspace/estudo/next/pages/services.js */"),
        dynamic: [this.props.src],
        __self: this
      }));
    }
  }]);

  return ImageWithLoader;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_interface__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "AVN SYSTEMS",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("topimage", {
    className: "jsx-3660631994",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3660631994",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "SOLUTIONS AND SERVICES")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("content", {
    className: "jsx-3660631994",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "javascript:history.back()",
    className: "jsx-3660631994" + " " + "back",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    "aria-hidden": "true",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512",
    className: "jsx-3660631994" + " " + "svg-inline arrow-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "currentColor",
    d: "M229.9 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L94.569 282H436c6.627 0 12-5.373 12-12v-28c0-6.627-5.373-12-12-12H94.569l155.13-155.13c4.686-4.686 4.686-12.284 0-16.971L229.9 38.101c-4.686-4.686-12.284-4.686-16.971 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971L212.929 473.9c4.686 4.686 12.284 4.686 16.971-.001z",
    className: "jsx-3660631994",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("left", {
    className: "jsx-3660631994",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-3660631994",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "BLOCKCHAIN APPLICATIONS, CUSTOM SOFTWARE, MOBILE APPLICATIONS, WHITEPAPERS AND MORE..."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
    className: "jsx-3660631994",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "BLOCKCHAIN"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3660631994",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "As the world embraces ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.blockchain.com/about/index.html",
    target: "_blank",
    className: "jsx-3660631994",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "Blockchain"), " Technology, We seeks to deliver innovations for the development of ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3660631994",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "enterprise solutions"), " based on the latest technologies, such as ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3660631994",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "smart contracts"), ", an essential tool for launching digital tokens in the so-called ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://en.wikipedia.org/wiki/Initial_coin_offering",
    target: "_blank",
    className: "jsx-3660631994",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "initial coin offering (ICO)"), "."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3660631994",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "The development of new ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3660631994",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "financial solutions"), " platforms, providing payment gateways associated with centralized ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3660631994",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "multi-currency exchange"), ", list of currency pairs for ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3660631994",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "trading"), ", history of foreclosures, offers of ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3660631994",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "purchase"), " and ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3660631994",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "sale"), " orders, volume indicator and etc. Custom preparation of ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3660631994",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "whitepapers"), " for projects with initial offer launch. Here are some technologies we are following closely:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ImageWithLoader, {
    src: "/static/images/services/ethereum.jpg",
    alt: "Ethereum",
    href: "https://ethereum.org/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ImageWithLoader, {
    src: "/static/images/services/decent-ch.jpg",
    alt: "Decent",
    href: "https://decent.ch",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ImageWithLoader, {
    src: "/static/images/services/ipfs.jpg",
    alt: "IPFS",
    href: "https://ipfs.io/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ImageWithLoader, {
    src: "/static/images/services/blockstack.jpg",
    alt: "Blockstack",
    href: "https://blockstack.org/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("right", {
    className: "jsx-3660631994",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuItems, {
    selected: "SERVICES",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3624822357",
    css: "@media (min-width:1250px) and (max-width:1590px){body.left-menu topimage h1{max-width:calc(100% - 100px)!important;}body.left-menu content{max-width:calc(100% - 60px)!important;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvcGFnZXMvc2VydmljZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEl1QixBQUt3RCxBQUdELHNDQUMxQyxDQUhBIiwiZmlsZSI6Ii9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvcGFnZXMvc2VydmljZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW50ZXJmYWNlIGZyb20gJy4uL2NvbXBvbmVudHMvaW50ZXJmYWNlJ1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmNsYXNzIEltYWdlV2l0aExvYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGltZ1N0YXR1czogXCJcIiB9O1xuICB9XG4gIFxuICBpbWdJbml0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpbWdTdGF0dXM6IFwic2hvd1wiIH0pO1xuICB9XG5cbiAgaW1nTG9hZGVkKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpbWdTdGF0dXM6IFwibG9hZGVkXCIgfSk7XG4gIH1cblxuICBpbWdFcnJvcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW1nU3RhdHVzOiBcImVycm9yXCIgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxhIGhyZWY9e3RoaXMucHJvcHMuaHJlZn0gdGFyZ2V0PXt0aGlzLnByb3BzLnRhcmdldH0+XG4gICAgICAgIDxmZWF0aW1nPlxuICAgICAgICAgIDxpbWdwcm9ncmVzcyBjbGFzc05hbWU9e3RoaXMuc3RhdGUuaW1nU3RhdHVzfT48c3Bpbm5lcj48L3NwaW5uZXI+PC9pbWdwcm9ncmVzcz5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e3RoaXMucHJvcHMuc3JjfVxuICAgICAgICAgICAgYWx0PXt0aGlzLnByb3BzLmFsdCB8fCAnJ31cbiAgICAgICAgICAgIG9uTG9hZD17dGhpcy5pbWdMb2FkZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIG9uRXJyb3I9e3RoaXMuaW1nRXJyb3IuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIG9uTG9hZFN0YXJ0PXt0aGlzLmltZ0luaXQuYmluZCh0aGlzKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDx0ZXh0Pnt0aGlzLnByb3BzLmFsdCB8fCAnJ308L3RleHQ+XG4gICAgICAgIDwvZmVhdGltZz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGZlYXRpbWcge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7dGhpcy5wcm9wcy5zcmN9KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2Y0ZjRmNDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTgwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgd2lkdGg6IDQ5JTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYTpudGgtY2hpbGQoZXZlbikgZmVhdGltZyB7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZlYXRpbWc6aG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzg1MDBGRjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZmVhdGltZyBpbWdwcm9ncmVzcy5zaG93IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xMjVweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMzBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZmVhdGltZyBpbWdwcm9ncmVzcy5zaG93IHNwaW5uZXIge1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjNjA1NWZiO1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjODEwM2Y0O1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICM4MTAzZjQ7XG4gICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiAjNjA1NWZiO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc3Bpbm5lciA0MDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgICBhbmltYXRpb246IHNwaW5uZXIgNDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCA3cHggMXB4ICM4MTAzZjQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzcGlubmVyIHtcbiAgICAgICAgICAgIDAlICAgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgICAgICAgICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBrZXlmcmFtZXMgc3Bpbm5lciB7XG4gICAgICAgICAgICAwJSAgIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAgICAgICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIGZlYXRpbWcgaW1nIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZlYXRpbWcgdGV4dCB7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZjRmNGY0O1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSArIDRweCk7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGJvdHRvbTogLTM1cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICBsZWZ0OiAtMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBmZWF0aW1nOmhvdmVyIHRleHQge1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzg1MDBGRjtcbiAgICAgICAgICAgIGNvbG9yOiAjODUwMEZGO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgIGZlYXRpbWcge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvYT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPEludGVyZmFjZSB0aXRsZT0nQVZOIFNZU1RFTVMnPlxuICAgIDx0b3BpbWFnZT5cbiAgICAgIDxoMT5TT0xVVElPTlMgQU5EIFNFUlZJQ0VTPC9oMT5cbiAgICA8L3RvcGltYWdlPlxuICAgIDxjb250ZW50PlxuICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6aGlzdG9yeS5iYWNrKClcIiBjbGFzc05hbWU9XCJiYWNrXCI+XG4gICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIiBjbGFzc05hbWU9XCJzdmctaW5saW5lIGFycm93LWxlZnRcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjkuOSA0NzMuODk5bDE5Ljc5OS0xOS43OTljNC42ODYtNC42ODYgNC42ODYtMTIuMjg0IDAtMTYuOTcxTDk0LjU2OSAyODJINDM2YzYuNjI3IDAgMTItNS4zNzMgMTItMTJ2LTI4YzAtNi42MjctNS4zNzMtMTItMTItMTJIOTQuNTY5bDE1NS4xMy0xNTUuMTNjNC42ODYtNC42ODYgNC42ODYtMTIuMjg0IDAtMTYuOTcxTDIyOS45IDM4LjEwMWMtNC42ODYtNC42ODYtMTIuMjg0LTQuNjg2LTE2Ljk3MSAwTDMuNTE1IDI0Ny41MTVjLTQuNjg2IDQuNjg2LTQuNjg2IDEyLjI4NCAwIDE2Ljk3MUwyMTIuOTI5IDQ3My45YzQuNjg2IDQuNjg2IDEyLjI4NCA0LjY4NiAxNi45NzEtLjAwMXpcIj48L3BhdGg+PC9zdmc+PC9hPlxuICAgICAgPGxlZnQ+XG4gICAgICAgIDxoMz5CTE9DS0NIQUlOIEFQUExJQ0FUSU9OUywgQ1VTVE9NIFNPRlRXQVJFLCBNT0JJTEUgQVBQTElDQVRJT05TLCBXSElURVBBUEVSUyBBTkQgTU9SRS4uLjwvaDM+XG4gICAgICAgIDxoNj5CTE9DS0NIQUlOPC9oNj5cbiAgICAgICAgPHA+QXMgdGhlIHdvcmxkIGVtYnJhY2VzIDxhIGhyZWY9XCJodHRwczovL3d3dy5ibG9ja2NoYWluLmNvbS9hYm91dC9pbmRleC5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCI+QmxvY2tjaGFpbjwvYT4gVGVjaG5vbG9neSwgV2Ugc2Vla3MgdG8gZGVsaXZlciBpbm5vdmF0aW9ucyBmb3IgdGhlIGRldmVsb3BtZW50IG9mIDxhPmVudGVycHJpc2Ugc29sdXRpb25zPC9hPiBiYXNlZCBvbiB0aGUgbGF0ZXN0IHRlY2hub2xvZ2llcywgc3VjaCBhcyA8YT5zbWFydCBjb250cmFjdHM8L2E+LCBhbiBlc3NlbnRpYWwgdG9vbCBmb3IgbGF1bmNoaW5nIGRpZ2l0YWwgdG9rZW5zIGluIHRoZSBzby1jYWxsZWQgPGEgaHJlZj1cImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0luaXRpYWxfY29pbl9vZmZlcmluZ1wiIHRhcmdldD1cIl9ibGFua1wiPmluaXRpYWwgY29pbiBvZmZlcmluZyAoSUNPKTwvYT4uPC9wPlxuICAgICAgICBcbiAgICAgICAgPHA+VGhlIGRldmVsb3BtZW50IG9mIG5ldyA8YT5maW5hbmNpYWwgc29sdXRpb25zPC9hPiBwbGF0Zm9ybXMsIHByb3ZpZGluZyBwYXltZW50IGdhdGV3YXlzIGFzc29jaWF0ZWQgd2l0aCBjZW50cmFsaXplZCA8YT5tdWx0aS1jdXJyZW5jeSBleGNoYW5nZTwvYT4sIGxpc3Qgb2YgY3VycmVuY3kgcGFpcnMgZm9yIDxhPnRyYWRpbmc8L2E+LCBoaXN0b3J5IG9mIGZvcmVjbG9zdXJlcywgb2ZmZXJzIG9mIDxhPnB1cmNoYXNlPC9hPiBhbmQgPGE+c2FsZTwvYT4gb3JkZXJzLCB2b2x1bWUgaW5kaWNhdG9yIGFuZCBldGMuIEN1c3RvbSBwcmVwYXJhdGlvbiBvZiA8YT53aGl0ZXBhcGVyczwvYT4gZm9yIHByb2plY3RzIHdpdGggaW5pdGlhbCBvZmZlciBsYXVuY2guIEhlcmUgYXJlIHNvbWUgdGVjaG5vbG9naWVzIHdlIGFyZSBmb2xsb3dpbmcgY2xvc2VseTo8L3A+XG4gICAgICAgIFxuICAgICAgICA8SW1hZ2VXaXRoTG9hZGVyIHNyYz17cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwrXCIvc3RhdGljL2ltYWdlcy9zZXJ2aWNlcy9ldGhlcmV1bS5qcGdcIn0gYWx0PVwiRXRoZXJldW1cIiBocmVmPVwiaHR0cHM6Ly9ldGhlcmV1bS5vcmcvXCIgdGFyZ2V0PVwiX2JsYW5rXCIvPlxuICAgICAgICA8SW1hZ2VXaXRoTG9hZGVyIHNyYz17cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwrXCIvc3RhdGljL2ltYWdlcy9zZXJ2aWNlcy9kZWNlbnQtY2guanBnXCJ9IGFsdD1cIkRlY2VudFwiIGhyZWY9XCJodHRwczovL2RlY2VudC5jaFwiIHRhcmdldD1cIl9ibGFua1wiLz5cbiAgICAgICAgPEltYWdlV2l0aExvYWRlciBzcmM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMK1wiL3N0YXRpYy9pbWFnZXMvc2VydmljZXMvaXBmcy5qcGdcIn0gYWx0PVwiSVBGU1wiIGhyZWY9XCJodHRwczovL2lwZnMuaW8vXCIgdGFyZ2V0PVwiX2JsYW5rXCIvPlxuICAgICAgICA8SW1hZ2VXaXRoTG9hZGVyIHNyYz17cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwrXCIvc3RhdGljL2ltYWdlcy9zZXJ2aWNlcy9ibG9ja3N0YWNrLmpwZ1wifSBhbHQ9XCJCbG9ja3N0YWNrXCIgaHJlZj1cImh0dHBzOi8vYmxvY2tzdGFjay5vcmcvXCIgdGFyZ2V0PVwiX2JsYW5rXCIvPlxuICAgICAgPC9sZWZ0PlxuICAgICAgPHJpZ2h0PlxuICAgICAgICA8TWVudUl0ZW1zIHNlbGVjdGVkPVwiU0VSVklDRVNcIi8+XG4gICAgICA8L3JpZ2h0PlxuICAgIDwvY29udGVudD5cbiAgICAgICAgICAgIFxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIFxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTI1MHB4KSBhbmQgKG1heC13aWR0aDogMTU5MHB4KSB7XG4gICAgICAgICAgICBib2R5LmxlZnQtbWVudSB0b3BpbWFnZSBoMSB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAxMDBweCkhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYm9keS5sZWZ0LW1lbnUgY29udGVudCB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KSFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgYH08L3N0eWxlPlxuICBcbiAgICA8c3R5bGUganN4PntgXG4gICAgICB0b3BpbWFnZSB7XG4gICAgICAgIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDM1MG1zIGVhc2UgMHM7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggMCByZ2JhKDAsMCwwLC43KTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L3N0YXRpYy9pbWFnZXMvaG9tZXBhZ2UvYmxvY2tjaGFpbi5qcGcpO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBwYWRkaW5nLXRvcDogMzMwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgICAgdG9waW1hZ2UgaDEge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICAgICAgZm9udC1zaXplOiAzZW07XG4gICAgICAgIGJvdHRvbTogNjVweDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHRleHQtc2hhZG93OiAzcHggNHB4IDRweCByZ2JhKDAsMCwwLDEpO1xuICAgICAgfVxuICAgICAgdG9waW1hZ2UgaW1ncHJvZ3Jlc3Mge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGxlZnQ6IGNhbGMoNTB2dyAtIDM1cHgpO1xuICAgICAgICB0b3A6IDE1NXB4O1xuICAgICAgfVxuICAgICAgdG9waW1hZ2UgaW1ncHJvZ3Jlc3Mgc3Bpbm5lciB7XG4gICAgICAgIGJvcmRlcjogc29saWQgMnB4IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjNjA1NWZiO1xuICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6ICM4MTAzZjQ7XG4gICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjODEwM2Y0O1xuICAgICAgICBib3JkZXItdG9wLWNvbG9yOiAjNjA1NWZiO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc3Bpbm5lciA0MDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgIGFuaW1hdGlvbjogc3Bpbm5lciA0MDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggN3B4IDFweCAjODEwM2Y0O1xuICAgICAgfVxuICAgICAgY29udGVudCB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzNzBweCk7XG4gICAgICAgIHBhZGRpbmc6IDAgMzBweCA0MHB4IDYwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgICAgIG1hcmdpbjogMjBweCAyMHB4IDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRvcDogLTkwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDVweCByZ2JhKDAsMCwwLDAuNyk7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAzNTBtcyBlYXNlIDBzO1xuICAgICAgfVxuICAgICAgY29udGVudCAuYmFjayB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcGFkZGluZzogMThweDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgLmJhY2s6aG92ZXIgLmFycm93LWxlZnQge1xuICAgICAgICBjb2xvcjogI2I1MDBmZjtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgLmFycm93LWxlZnQge1xuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICAgIHdpZHRoOiAyMnB4O1xuICAgICAgfVxuICAgICAgXG4gICAgICBjb250ZW50ID4gbGVmdCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2NjO1xuICAgICAgICBwYWRkaW5nOiAzMHB4IDQwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgfVxuICAgICAgY29udGVudCA+IGxlZnQgaDMge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgY29sb3I6ICM4NTAwRkY7XG4gICAgICB9XG4gICAgICBjb250ZW50ID4gbGVmdCBoNiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gICAgICAgIGNvbG9yOiAjNzIzNmQ2O1xuICAgICAgfVxuICAgICAgY29udGVudCA+IGxlZnQgcCB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgY29sb3I6ICM0ZDRkNGQ7XG4gICAgICB9XG4gICAgICBjb250ZW50ID4gbGVmdCBwIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiAjODUwMEZGO1xuICAgICAgfVxuICAgICAgY29udGVudCA+IGxlZnQgcCBhOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICNiYzc0ZmY7XG4gICAgICB9XG4gICAgICBjb250ZW50ID4gcmlnaHQge1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDMwcHggMjBweCA2MHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgfVxuICAgICAgY29udGVudCA+IHJpZ2h0IG1lbnVpdGVtcyBidG46aG92ZXIge1xuICAgICAgICBjb2xvcjogIzg1MDBGRjtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgPiByaWdodCBtZW51aXRlbXMgYnRuLmFjdGl2ZSB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgIGNvbG9yOiAjMTQxNDE0O1xuICAgICAgfVxuICAgICAgY29udGVudCA+IHJpZ2h0IG1lbnVpdGVtcyBidG4ge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiA1cHggMDtcbiAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICB9XG4gICAgICBjb250ZW50ID4gcmlnaHQgbWVudWl0ZW1zIGJ0bnNvbGlkIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNkZGQ7XG4gICAgICAgIGJhY2tncm91bmQ6ICM4NTAwRkY7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgICBjb250ZW50ID4gcmlnaHQgbWVudWl0ZW1zIGJ0bnNvbGlkOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzljMzFmZjtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgPiByaWdodCBtZW51aXRlbXMgaHIge1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG4gICAgICB9XG4gICAgICBcbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzcGlubmVyIHtcbiAgICAgICAgMCUgICB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAgICAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICAgICAgfVxuICAgICAgQGtleWZyYW1lcyBzcGlubmVyIHtcbiAgICAgICAgMCUgICB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjUwcHgpIHtcbiAgICAgICAgY29udGVudCB7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgdG9waW1hZ2UgaDEge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDExNjBweDtcbiAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgIGJvdHRvbTogNzVweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk0NXB4KSB7XG4gICAgICAgIGNvbnRlbnQgPiByaWdodCB7XG4gICAgICAgICAgcGFkZGluZzogMjBweCAwcHggMjBweCAzMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgY29udGVudCAuYXJyb3ctbGVmdCB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZW50IHtcbiAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgICAgbWFyZ2luOiA1MHB4IDE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudCA+IGxlZnQge1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgdG9waW1hZ2UgaDEge1xuICAgICAgICAgIGJvdHRvbTogMzVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYyNXB4KSB7XG4gICAgICAgIHRvcGltYWdlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDU4cHg7XG4gICAgICAgIH1cbiAgICAgICAgdG9waW1hZ2UgaDEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICAgIG1hcmdpbjogNTBweCA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudCA+IGxlZnQge1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZW50ID4gcmlnaHQge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgXG4gIDwvSW50ZXJmYWNlPlxuKSJdfQ== */\n/*@ sourceURL=/home/ubuntu/workspace/estudo/next/pages/services.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3447084006",
    css: "topimage.jsx-3660631994{-webkit-transition:margin-left 350ms ease 0s;transition:margin-left 350ms ease 0s;box-shadow:0 5px 10px 0 rgba(0,0,0,.7);background-image:url(".concat("", "/static/images/homepage/blockchain.jpg);background-position-x:center;background-size:cover;position:relative;padding-top:330px;display:block;}topimage.jsx-3660631994 h1.jsx-3660631994{position:absolute;text-transform:uppercase;-webkit-letter-spacing:-1px;-moz-letter-spacing:-1px;-ms-letter-spacing:-1px;letter-spacing:-1px;margin-left:40px;font-size:3em;bottom:65px;color:#fff;text-shadow:3px 4px 4px rgba(0,0,0,1);}topimage.jsx-3660631994 imgprogress.jsx-3660631994{position:fixed;left:calc(50vw - 35px);top:155px;}topimage.jsx-3660631994 imgprogress.jsx-3660631994 spinner.jsx-3660631994{border:solid 2px transparent;border-bottom-color:#6055fb;border-right-color:#8103f4;border-left-color:#8103f4;border-top-color:#6055fb;box-sizing:border-box;border-radius:50%;display:block;height:70px;width:70px;-webkit-animation:spinner 400ms linear infinite;-webkit-animation:spinner-jsx-3660631994 400ms linear infinite;animation:spinner-jsx-3660631994 400ms linear infinite;box-shadow:0px 1px 7px 1px #8103f4;}content.jsx-3660631994{min-height:calc(100vh - 370px);padding:0 30px 40px 60px;border:1px solid #fff;margin:20px 20px 0px;background:#f4f4f4;position:relative;max-width:1200px;overflow:hidden;display:block;top:-90px;box-shadow:0 0 10px 5px rgba(0,0,0,0.7);-webkit-transition:all 350ms ease 0s;transition:all 350ms ease 0s;}content.jsx-3660631994 .back.jsx-3660631994{position:absolute;padding:18px;left:0;}content.jsx-3660631994 .back.jsx-3660631994:hover .arrow-left.jsx-3660631994{color:#b500ff;}content.jsx-3660631994 .arrow-left.jsx-3660631994{overflow:visible;color:black;height:22px;width:22px;}content.jsx-3660631994>left.jsx-3660631994{border-bottom:2px solid #ccc;padding:30px 40px;background:#fff;display:block;height:100%;float:left;width:70%;}content.jsx-3660631994>left.jsx-3660631994 h3.jsx-3660631994{margin-bottom:20px;-webkit-letter-spacing:3px;-moz-letter-spacing:3px;-ms-letter-spacing:3px;letter-spacing:3px;font-weight:700;font-size:1em;color:#8500FF;}content.jsx-3660631994>left.jsx-3660631994 h6.jsx-3660631994{margin-bottom:20px;font-size:2.5em;color:#7236d6;}content.jsx-3660631994>left.jsx-3660631994 p.jsx-3660631994{line-height:1.4em;text-align:justify;color:#4d4d4d;}content.jsx-3660631994>left.jsx-3660631994 p.jsx-3660631994 a.jsx-3660631994{-webkit-text-decoration:none;text-decoration:none;color:#8500FF;}content.jsx-3660631994>left.jsx-3660631994 p.jsx-3660631994 a.jsx-3660631994:hover{color:#bc74ff;}content.jsx-3660631994>right.jsx-3660631994{padding:20px 30px 20px 60px;display:block;float:right;width:30%;}content.jsx-3660631994>right.jsx-3660631994 menuitems.jsx-3660631994 btn.jsx-3660631994:hover{color:#8500FF;}content.jsx-3660631994>right.jsx-3660631994 menuitems.jsx-3660631994 btn.active.jsx-3660631994{pointer-events:none;cursor:default;color:#141414;}content.jsx-3660631994>right.jsx-3660631994 menuitems.jsx-3660631994 btn.jsx-3660631994{text-transform:uppercase;font-weight:500;cursor:pointer;display:block;padding:5px 0;color:#999;}content.jsx-3660631994>right.jsx-3660631994 menuitems.jsx-3660631994 btnsolid.jsx-3660631994{text-transform:uppercase;border-bottom:3px solid #ddd;background:#8500FF;text-align:center;line-height:50px;font-weight:500;cursor:pointer;display:block;padding:5px 0;color:white;}content.jsx-3660631994>right.jsx-3660631994 menuitems.jsx-3660631994 btnsolid.jsx-3660631994:hover{background:#9c31ff;}content.jsx-3660631994>right.jsx-3660631994 menuitems.jsx-3660631994 hr.jsx-3660631994{border-top:1px solid #ddd;border-bottom:1px solid #fff;}@-webkit-keyframes spinner{0%.jsx-3660631994{-webkit-transform:rotate(0deg);}100%.jsx-3660631994{-webkit-transform:rotate(360deg);}}@-webkit-keyframes spinner-jsx-3660631994{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spinner-jsx-3660631994{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@media (min-width:1250px){content.jsx-3660631994{margin:20px auto;}topimage.jsx-3660631994 h1.jsx-3660631994{position:relative;max-width:1160px;margin:0px auto;bottom:75px;width:100%;}}@media (max-width:945px){content.jsx-3660631994>right.jsx-3660631994{padding:20px 0px 20px 30px;}}@media (max-width:768px){content.jsx-3660631994 .arrow-left.jsx-3660631994{display:none;}content.jsx-3660631994{padding:0 20px;margin:50px 15px;}content.jsx-3660631994>left.jsx-3660631994{padding:20px;}topimage.jsx-3660631994 h1.jsx-3660631994{bottom:35px;}}@media (max-width:625px){topimage.jsx-3660631994{background-position-y:58px;}topimage.jsx-3660631994 h1.jsx-3660631994{font-size:2.5em;margin-left:20px;}content.jsx-3660631994{padding:0 10px;margin:50px 5px;}content.jsx-3660631994>left.jsx-3660631994{padding:20px 10px;width:100%;}content.jsx-3660631994>right.jsx-3660631994{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvcGFnZXMvc2VydmljZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkpnQixBQUc4QyxBQVVuQixBQVVILEFBS2MsQUFlRSxBQWNiLEFBS0osQUFHRyxBQU9ZLEFBU1YsQUFPQSxBQUtELEFBS0csQUFJUCxBQUdjLEFBTWQsQUFHTSxBQUtLLEFBUUEsQUFZTixBQUdPLEFBS1csQUFDRSxBQUdWLEFBQ0UsQUFLWixBQUdDLEFBU1MsQUFLZCxBQUdFLEFBSUYsQUFHRCxBQUtlLEFBR1gsQUFJRCxBQUlHLEFBSUwsWUFuQmYsQ0FWQSxBQU9BLEFBdUJBLENBOUlGLEFBd0NBLEFBU0EsQ0F4RnlCLEFBMEpKLEFBbUJELENBSkMsQ0EvSFAsQUE0RlosQ0FoSnlCLEFBNENaLEFBb0NNLEFBbUVBLEFBd0NOLENBdkhNLEFBT0gsQUFtRGxCLENBekJpQixLQUtDLEFBUWEsQ0FlQSxDQTJCN0IsQUFvQkEsQ0FwRmMsQ0E3RWMsQUFzQ2hCLEFBTU0sQUFpSWxCLEVBOUp5QixBQWVsQixBQXdGK0IsQUFtRHRDLENBbkJBLENBL0J3QyxBQThDeEMsRUF4R2MsQUEwQkEsQUE4Q0ksRUFuRUosQ0F0RUosQUFtQ1osR0FRYSxBQXFESSxDQWRILENBNUZRLElBMkRKLENBaERsQixDQWlFQSxBQTBCQSxDQWxCZ0IsQ0FIaEIsQUFtRWdCLENBOUZoQixFQXVDWSxBQXFCUyxDQWVyQixDQW5Hd0IsQUE2RVIsQ0E1RmEsTUE2Q2IsQUF5RkQsQ0FoRWYsQUFTQSxNQWNnQixHQU9JLENBbUNsQixHQXpGWSxDQTlCUyxHQXlHUyxDQW5KUyxFQTJCYixBQTZGZixHQTRCcUIsRUEzRXJCLEVBc0RNLElBTm5CLElBOUVxQixDQStCVCxRQXNETSxFQXBHUyxBQStDM0IsRUFJa0IsTUFuQ0UsR0EzQ3VFLEdBZ0kxRSxJQWpERCxPQW5EUSxDQWdCTCxHQXFGSCxDQXRIRyxFQXFFSCxXQW5DRSxBQXFGRixHQWpEaEIsQ0FyRWdCLEFBaUJJLFVBc0dOLEVBckZFLEVBakNGLElBaUJFLElBc0doQixJQXRIYSxBQWlDRCxNQWhCRSxJQWlCNEIsQ0FqQ0YsT0FpQjNCLFNBL0JrQixFQWdDbUIsb0JBakJsRCxDQWlDK0IsTUEvQ1AscUJBZ0NrQixDQS9CdEIsa0JBQ0Esa0JBQ0osRUE2Q2hCLFlBNUNBLG1FQTZCcUMsbUNBQ3JDIiwiZmlsZSI6Ii9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvcGFnZXMvc2VydmljZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW50ZXJmYWNlIGZyb20gJy4uL2NvbXBvbmVudHMvaW50ZXJmYWNlJ1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmNsYXNzIEltYWdlV2l0aExvYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGltZ1N0YXR1czogXCJcIiB9O1xuICB9XG4gIFxuICBpbWdJbml0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpbWdTdGF0dXM6IFwic2hvd1wiIH0pO1xuICB9XG5cbiAgaW1nTG9hZGVkKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpbWdTdGF0dXM6IFwibG9hZGVkXCIgfSk7XG4gIH1cblxuICBpbWdFcnJvcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW1nU3RhdHVzOiBcImVycm9yXCIgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxhIGhyZWY9e3RoaXMucHJvcHMuaHJlZn0gdGFyZ2V0PXt0aGlzLnByb3BzLnRhcmdldH0+XG4gICAgICAgIDxmZWF0aW1nPlxuICAgICAgICAgIDxpbWdwcm9ncmVzcyBjbGFzc05hbWU9e3RoaXMuc3RhdGUuaW1nU3RhdHVzfT48c3Bpbm5lcj48L3NwaW5uZXI+PC9pbWdwcm9ncmVzcz5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e3RoaXMucHJvcHMuc3JjfVxuICAgICAgICAgICAgYWx0PXt0aGlzLnByb3BzLmFsdCB8fCAnJ31cbiAgICAgICAgICAgIG9uTG9hZD17dGhpcy5pbWdMb2FkZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIG9uRXJyb3I9e3RoaXMuaW1nRXJyb3IuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIG9uTG9hZFN0YXJ0PXt0aGlzLmltZ0luaXQuYmluZCh0aGlzKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDx0ZXh0Pnt0aGlzLnByb3BzLmFsdCB8fCAnJ308L3RleHQ+XG4gICAgICAgIDwvZmVhdGltZz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGZlYXRpbWcge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7dGhpcy5wcm9wcy5zcmN9KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2Y0ZjRmNDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTgwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgd2lkdGg6IDQ5JTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYTpudGgtY2hpbGQoZXZlbikgZmVhdGltZyB7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZlYXRpbWc6aG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzg1MDBGRjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZmVhdGltZyBpbWdwcm9ncmVzcy5zaG93IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xMjVweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMzBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZmVhdGltZyBpbWdwcm9ncmVzcy5zaG93IHNwaW5uZXIge1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjNjA1NWZiO1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjODEwM2Y0O1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICM4MTAzZjQ7XG4gICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiAjNjA1NWZiO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc3Bpbm5lciA0MDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgICBhbmltYXRpb246IHNwaW5uZXIgNDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCA3cHggMXB4ICM4MTAzZjQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzcGlubmVyIHtcbiAgICAgICAgICAgIDAlICAgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgICAgICAgICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBrZXlmcmFtZXMgc3Bpbm5lciB7XG4gICAgICAgICAgICAwJSAgIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAgICAgICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIGZlYXRpbWcgaW1nIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZlYXRpbWcgdGV4dCB7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZjRmNGY0O1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSArIDRweCk7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGJvdHRvbTogLTM1cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICBsZWZ0OiAtMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBmZWF0aW1nOmhvdmVyIHRleHQge1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzg1MDBGRjtcbiAgICAgICAgICAgIGNvbG9yOiAjODUwMEZGO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgIGZlYXRpbWcge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvYT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPEludGVyZmFjZSB0aXRsZT0nQVZOIFNZU1RFTVMnPlxuICAgIDx0b3BpbWFnZT5cbiAgICAgIDxoMT5TT0xVVElPTlMgQU5EIFNFUlZJQ0VTPC9oMT5cbiAgICA8L3RvcGltYWdlPlxuICAgIDxjb250ZW50PlxuICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6aGlzdG9yeS5iYWNrKClcIiBjbGFzc05hbWU9XCJiYWNrXCI+XG4gICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIiBjbGFzc05hbWU9XCJzdmctaW5saW5lIGFycm93LWxlZnRcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMjkuOSA0NzMuODk5bDE5Ljc5OS0xOS43OTljNC42ODYtNC42ODYgNC42ODYtMTIuMjg0IDAtMTYuOTcxTDk0LjU2OSAyODJINDM2YzYuNjI3IDAgMTItNS4zNzMgMTItMTJ2LTI4YzAtNi42MjctNS4zNzMtMTItMTItMTJIOTQuNTY5bDE1NS4xMy0xNTUuMTNjNC42ODYtNC42ODYgNC42ODYtMTIuMjg0IDAtMTYuOTcxTDIyOS45IDM4LjEwMWMtNC42ODYtNC42ODYtMTIuMjg0LTQuNjg2LTE2Ljk3MSAwTDMuNTE1IDI0Ny41MTVjLTQuNjg2IDQuNjg2LTQuNjg2IDEyLjI4NCAwIDE2Ljk3MUwyMTIuOTI5IDQ3My45YzQuNjg2IDQuNjg2IDEyLjI4NCA0LjY4NiAxNi45NzEtLjAwMXpcIj48L3BhdGg+PC9zdmc+PC9hPlxuICAgICAgPGxlZnQ+XG4gICAgICAgIDxoMz5CTE9DS0NIQUlOIEFQUExJQ0FUSU9OUywgQ1VTVE9NIFNPRlRXQVJFLCBNT0JJTEUgQVBQTElDQVRJT05TLCBXSElURVBBUEVSUyBBTkQgTU9SRS4uLjwvaDM+XG4gICAgICAgIDxoNj5CTE9DS0NIQUlOPC9oNj5cbiAgICAgICAgPHA+QXMgdGhlIHdvcmxkIGVtYnJhY2VzIDxhIGhyZWY9XCJodHRwczovL3d3dy5ibG9ja2NoYWluLmNvbS9hYm91dC9pbmRleC5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCI+QmxvY2tjaGFpbjwvYT4gVGVjaG5vbG9neSwgV2Ugc2Vla3MgdG8gZGVsaXZlciBpbm5vdmF0aW9ucyBmb3IgdGhlIGRldmVsb3BtZW50IG9mIDxhPmVudGVycHJpc2Ugc29sdXRpb25zPC9hPiBiYXNlZCBvbiB0aGUgbGF0ZXN0IHRlY2hub2xvZ2llcywgc3VjaCBhcyA8YT5zbWFydCBjb250cmFjdHM8L2E+LCBhbiBlc3NlbnRpYWwgdG9vbCBmb3IgbGF1bmNoaW5nIGRpZ2l0YWwgdG9rZW5zIGluIHRoZSBzby1jYWxsZWQgPGEgaHJlZj1cImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0luaXRpYWxfY29pbl9vZmZlcmluZ1wiIHRhcmdldD1cIl9ibGFua1wiPmluaXRpYWwgY29pbiBvZmZlcmluZyAoSUNPKTwvYT4uPC9wPlxuICAgICAgICBcbiAgICAgICAgPHA+VGhlIGRldmVsb3BtZW50IG9mIG5ldyA8YT5maW5hbmNpYWwgc29sdXRpb25zPC9hPiBwbGF0Zm9ybXMsIHByb3ZpZGluZyBwYXltZW50IGdhdGV3YXlzIGFzc29jaWF0ZWQgd2l0aCBjZW50cmFsaXplZCA8YT5tdWx0aS1jdXJyZW5jeSBleGNoYW5nZTwvYT4sIGxpc3Qgb2YgY3VycmVuY3kgcGFpcnMgZm9yIDxhPnRyYWRpbmc8L2E+LCBoaXN0b3J5IG9mIGZvcmVjbG9zdXJlcywgb2ZmZXJzIG9mIDxhPnB1cmNoYXNlPC9hPiBhbmQgPGE+c2FsZTwvYT4gb3JkZXJzLCB2b2x1bWUgaW5kaWNhdG9yIGFuZCBldGMuIEN1c3RvbSBwcmVwYXJhdGlvbiBvZiA8YT53aGl0ZXBhcGVyczwvYT4gZm9yIHByb2plY3RzIHdpdGggaW5pdGlhbCBvZmZlciBsYXVuY2guIEhlcmUgYXJlIHNvbWUgdGVjaG5vbG9naWVzIHdlIGFyZSBmb2xsb3dpbmcgY2xvc2VseTo8L3A+XG4gICAgICAgIFxuICAgICAgICA8SW1hZ2VXaXRoTG9hZGVyIHNyYz17cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwrXCIvc3RhdGljL2ltYWdlcy9zZXJ2aWNlcy9ldGhlcmV1bS5qcGdcIn0gYWx0PVwiRXRoZXJldW1cIiBocmVmPVwiaHR0cHM6Ly9ldGhlcmV1bS5vcmcvXCIgdGFyZ2V0PVwiX2JsYW5rXCIvPlxuICAgICAgICA8SW1hZ2VXaXRoTG9hZGVyIHNyYz17cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwrXCIvc3RhdGljL2ltYWdlcy9zZXJ2aWNlcy9kZWNlbnQtY2guanBnXCJ9IGFsdD1cIkRlY2VudFwiIGhyZWY9XCJodHRwczovL2RlY2VudC5jaFwiIHRhcmdldD1cIl9ibGFua1wiLz5cbiAgICAgICAgPEltYWdlV2l0aExvYWRlciBzcmM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMK1wiL3N0YXRpYy9pbWFnZXMvc2VydmljZXMvaXBmcy5qcGdcIn0gYWx0PVwiSVBGU1wiIGhyZWY9XCJodHRwczovL2lwZnMuaW8vXCIgdGFyZ2V0PVwiX2JsYW5rXCIvPlxuICAgICAgICA8SW1hZ2VXaXRoTG9hZGVyIHNyYz17cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwrXCIvc3RhdGljL2ltYWdlcy9zZXJ2aWNlcy9ibG9ja3N0YWNrLmpwZ1wifSBhbHQ9XCJCbG9ja3N0YWNrXCIgaHJlZj1cImh0dHBzOi8vYmxvY2tzdGFjay5vcmcvXCIgdGFyZ2V0PVwiX2JsYW5rXCIvPlxuICAgICAgPC9sZWZ0PlxuICAgICAgPHJpZ2h0PlxuICAgICAgICA8TWVudUl0ZW1zIHNlbGVjdGVkPVwiU0VSVklDRVNcIi8+XG4gICAgICA8L3JpZ2h0PlxuICAgIDwvY29udGVudD5cbiAgICAgICAgICAgIFxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIFxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTI1MHB4KSBhbmQgKG1heC13aWR0aDogMTU5MHB4KSB7XG4gICAgICAgICAgICBib2R5LmxlZnQtbWVudSB0b3BpbWFnZSBoMSB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAxMDBweCkhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYm9keS5sZWZ0LW1lbnUgY29udGVudCB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KSFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgYH08L3N0eWxlPlxuICBcbiAgICA8c3R5bGUganN4PntgXG4gICAgICB0b3BpbWFnZSB7XG4gICAgICAgIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDM1MG1zIGVhc2UgMHM7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggMCByZ2JhKDAsMCwwLC43KTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L3N0YXRpYy9pbWFnZXMvaG9tZXBhZ2UvYmxvY2tjaGFpbi5qcGcpO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBwYWRkaW5nLXRvcDogMzMwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgICAgdG9waW1hZ2UgaDEge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICAgICAgZm9udC1zaXplOiAzZW07XG4gICAgICAgIGJvdHRvbTogNjVweDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHRleHQtc2hhZG93OiAzcHggNHB4IDRweCByZ2JhKDAsMCwwLDEpO1xuICAgICAgfVxuICAgICAgdG9waW1hZ2UgaW1ncHJvZ3Jlc3Mge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGxlZnQ6IGNhbGMoNTB2dyAtIDM1cHgpO1xuICAgICAgICB0b3A6IDE1NXB4O1xuICAgICAgfVxuICAgICAgdG9waW1hZ2UgaW1ncHJvZ3Jlc3Mgc3Bpbm5lciB7XG4gICAgICAgIGJvcmRlcjogc29saWQgMnB4IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjNjA1NWZiO1xuICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6ICM4MTAzZjQ7XG4gICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjODEwM2Y0O1xuICAgICAgICBib3JkZXItdG9wLWNvbG9yOiAjNjA1NWZiO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc3Bpbm5lciA0MDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgIGFuaW1hdGlvbjogc3Bpbm5lciA0MDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggN3B4IDFweCAjODEwM2Y0O1xuICAgICAgfVxuICAgICAgY29udGVudCB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzNzBweCk7XG4gICAgICAgIHBhZGRpbmc6IDAgMzBweCA0MHB4IDYwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgICAgIG1hcmdpbjogMjBweCAyMHB4IDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRvcDogLTkwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDVweCByZ2JhKDAsMCwwLDAuNyk7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAzNTBtcyBlYXNlIDBzO1xuICAgICAgfVxuICAgICAgY29udGVudCAuYmFjayB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcGFkZGluZzogMThweDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgLmJhY2s6aG92ZXIgLmFycm93LWxlZnQge1xuICAgICAgICBjb2xvcjogI2I1MDBmZjtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgLmFycm93LWxlZnQge1xuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICAgIHdpZHRoOiAyMnB4O1xuICAgICAgfVxuICAgICAgXG4gICAgICBjb250ZW50ID4gbGVmdCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2NjO1xuICAgICAgICBwYWRkaW5nOiAzMHB4IDQwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgfVxuICAgICAgY29udGVudCA+IGxlZnQgaDMge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgY29sb3I6ICM4NTAwRkY7XG4gICAgICB9XG4gICAgICBjb250ZW50ID4gbGVmdCBoNiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gICAgICAgIGNvbG9yOiAjNzIzNmQ2O1xuICAgICAgfVxuICAgICAgY29udGVudCA+IGxlZnQgcCB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgY29sb3I6ICM0ZDRkNGQ7XG4gICAgICB9XG4gICAgICBjb250ZW50ID4gbGVmdCBwIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiAjODUwMEZGO1xuICAgICAgfVxuICAgICAgY29udGVudCA+IGxlZnQgcCBhOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICNiYzc0ZmY7XG4gICAgICB9XG4gICAgICBjb250ZW50ID4gcmlnaHQge1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDMwcHggMjBweCA2MHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgfVxuICAgICAgY29udGVudCA+IHJpZ2h0IG1lbnVpdGVtcyBidG46aG92ZXIge1xuICAgICAgICBjb2xvcjogIzg1MDBGRjtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgPiByaWdodCBtZW51aXRlbXMgYnRuLmFjdGl2ZSB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgIGNvbG9yOiAjMTQxNDE0O1xuICAgICAgfVxuICAgICAgY29udGVudCA+IHJpZ2h0IG1lbnVpdGVtcyBidG4ge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiA1cHggMDtcbiAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICB9XG4gICAgICBjb250ZW50ID4gcmlnaHQgbWVudWl0ZW1zIGJ0bnNvbGlkIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNkZGQ7XG4gICAgICAgIGJhY2tncm91bmQ6ICM4NTAwRkY7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgICBjb250ZW50ID4gcmlnaHQgbWVudWl0ZW1zIGJ0bnNvbGlkOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzljMzFmZjtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgPiByaWdodCBtZW51aXRlbXMgaHIge1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG4gICAgICB9XG4gICAgICBcbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzcGlubmVyIHtcbiAgICAgICAgMCUgICB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAgICAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICAgICAgfVxuICAgICAgQGtleWZyYW1lcyBzcGlubmVyIHtcbiAgICAgICAgMCUgICB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjUwcHgpIHtcbiAgICAgICAgY29udGVudCB7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgdG9waW1hZ2UgaDEge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDExNjBweDtcbiAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgIGJvdHRvbTogNzVweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk0NXB4KSB7XG4gICAgICAgIGNvbnRlbnQgPiByaWdodCB7XG4gICAgICAgICAgcGFkZGluZzogMjBweCAwcHggMjBweCAzMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgY29udGVudCAuYXJyb3ctbGVmdCB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZW50IHtcbiAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgICAgbWFyZ2luOiA1MHB4IDE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudCA+IGxlZnQge1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgdG9waW1hZ2UgaDEge1xuICAgICAgICAgIGJvdHRvbTogMzVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYyNXB4KSB7XG4gICAgICAgIHRvcGltYWdlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDU4cHg7XG4gICAgICAgIH1cbiAgICAgICAgdG9waW1hZ2UgaDEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICAgIG1hcmdpbjogNTBweCA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudCA+IGxlZnQge1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZW50ID4gcmlnaHQge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgXG4gIDwvSW50ZXJmYWNlPlxuKSJdfQ== */\n/*@ sourceURL=/home/ubuntu/workspace/estudo/next/pages/services.js */"),
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/services")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=services.js.2758bf6479422b16ed4b.hot-update.js.map