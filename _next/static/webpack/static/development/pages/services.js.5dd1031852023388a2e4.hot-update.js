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
/* harmony import */ var _components_menuitems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/menuitems */ "./components/menuitems.js");
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
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("featimg", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1532854595", [this.props.src]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("imgprogress", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1532854595", [this.props.src]]]) + " " + (this.state.imgStatus || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("spinner", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1532854595", [this.props.src]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
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
          lineNumber: 28
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1532854595", [this.props.src]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, this.props.alt || '')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1532854595",
        css: "featimg.__jsx-style-dynamic-selector{background-image:url(".concat(this.props.src, ");background-repeat:no-repeat;background-position:center;background-color:#f4f4f4;background-size:cover;border:2px solid #f4f4f4;margin-bottom:50px;padding-top:180px;display:block;float:left;width:49%;}a.__jsx-style-dynamic-selector:nth-child(even) featimg.__jsx-style-dynamic-selector{float:right;}featimg.__jsx-style-dynamic-selector:hover{border:2px solid #8500FF;}featimg.__jsx-style-dynamic-selector imgprogress.show.__jsx-style-dynamic-selector{position:absolute;margin-top:-125px;margin-left:130px;}featimg.__jsx-style-dynamic-selector imgprogress.show.__jsx-style-dynamic-selector spinner.__jsx-style-dynamic-selector{border:solid 2px transparent;border-bottom-color:#6055fb;border-right-color:#8103f4;border-left-color:#8103f4;border-top-color:#6055fb;box-sizing:border-box;border-radius:50%;display:block;height:70px;width:70px;-webkit-animation:spinner 400ms linear infinite;-webkit-animation:spinner-__jsx-style-dynamic-selector 400ms linear infinite;animation:spinner-__jsx-style-dynamic-selector 400ms linear infinite;box-shadow:0px 1px 7px 1px #8103f4;}@-webkit-keyframes spinner{0%.__jsx-style-dynamic-selector{-webkit-transform:rotate(0deg);}100%.__jsx-style-dynamic-selector{-webkit-transform:rotate(360deg);}}@-webkit-keyframes spinner-__jsx-style-dynamic-selector{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spinner-__jsx-style-dynamic-selector{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}featimg.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{display:none;}featimg.__jsx-style-dynamic-selector text.__jsx-style-dynamic-selector{border:2px solid #f4f4f4;width:calc(100% + 4px);text-align:center;position:relative;background:white;font-weight:500;display:block;bottom:-35px;padding:5px;left:-2px;}featimg.__jsx-style-dynamic-selector:hover text.__jsx-style-dynamic-selector{border:2px solid #8500FF;color:#8500FF;}@media (max-width:768px){featimg.__jsx-style-dynamic-selector{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvcGFnZXMvc2VydmljZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0NvQixBQUdnRSxBQWN2QyxBQUdhLEFBR1AsQUFLVyxBQWdCUSxBQUNFLEFBR1YsQUFDRSxBQUlsQixBQUdZLEFBWUEsQUFNWixXQUNiLENBekRGLENBb0NBLEtBOUJvQixPQUhwQixBQW9DeUIsQUFZVCxJQXhDYyxFQWVVLEVBQ0UsR0FwQnRCLEdBNkNwQixTQVpvQixHQXREVSxHQXNCOUIsR0FJNkIsU0E2QlQsYUF0RFMsRUEyQ0csR0FqQkosQUE2QlQsR0FYZSxjQVloQixLQXZEUyxJQTBCQSxPQThCWCxjQXZEUSxBQXdEVCxJQTlCUyxTQStCVixTQXZEYSxHQXdEZixDQS9CUSxTQWdDcEIsU0EvQmdCLEdBekJLLFdBMEJQLFFBekJNLElBMEJQLFdBQ3FDLEdBMUJsQyxjQUNILFdBQ0QsVUFDWixVQXdCMEMsa0pBQ0wsbUNBQ3JDIiwiZmlsZSI6Ii9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvcGFnZXMvc2VydmljZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW50ZXJmYWNlIGZyb20gJy4uL2NvbXBvbmVudHMvaW50ZXJmYWNlJ1xuaW1wb3J0IE1lbnVJdGVtcyBmcm9tICcuLi9jb21wb25lbnRzL21lbnVpdGVtcydcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBJbWFnZVdpdGhMb2FkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBpbWdTdGF0dXM6IFwiXCIgfTtcbiAgfVxuICBcbiAgaW1nSW5pdCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW1nU3RhdHVzOiBcInNob3dcIiB9KTtcbiAgfVxuXG4gIGltZ0xvYWRlZCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW1nU3RhdHVzOiBcImxvYWRlZFwiIH0pO1xuICB9XG5cbiAgaW1nRXJyb3IoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGltZ1N0YXR1czogXCJlcnJvclwiIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8YSBocmVmPXt0aGlzLnByb3BzLmhyZWZ9IHRhcmdldD17dGhpcy5wcm9wcy50YXJnZXR9PlxuICAgICAgICA8ZmVhdGltZz5cbiAgICAgICAgICA8aW1ncHJvZ3Jlc3MgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmltZ1N0YXR1c30+PHNwaW5uZXI+PC9zcGlubmVyPjwvaW1ncHJvZ3Jlc3M+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXt0aGlzLnByb3BzLnNyY31cbiAgICAgICAgICAgIGFsdD17dGhpcy5wcm9wcy5hbHQgfHwgJyd9XG4gICAgICAgICAgICBvbkxvYWQ9e3RoaXMuaW1nTG9hZGVkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICBvbkVycm9yPXt0aGlzLmltZ0Vycm9yLmJpbmQodGhpcyl9XG4gICAgICAgICAgICBvbkxvYWRTdGFydD17dGhpcy5pbWdJbml0LmJpbmQodGhpcyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8dGV4dD57dGhpcy5wcm9wcy5hbHQgfHwgJyd9PC90ZXh0PlxuICAgICAgICA8L2ZlYXRpbWc+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBmZWF0aW1nIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3RoaXMucHJvcHMuc3JjfSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmNGY0ZjQ7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDE4MHB4O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIHdpZHRoOiA0OSU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGE6bnRoLWNoaWxkKGV2ZW4pIGZlYXRpbWcge1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBmZWF0aW1nOmhvdmVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM4NTAwRkY7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZlYXRpbWcgaW1ncHJvZ3Jlc3Muc2hvdyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTI1cHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTMwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZlYXRpbWcgaW1ncHJvZ3Jlc3Muc2hvdyBzcGlubmVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMnB4IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzYwNTVmYjtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogIzgxMDNmNDtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjODEwM2Y0O1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogIzYwNTVmYjtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW5uZXIgNDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBzcGlubmVyIDQwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggN3B4IDFweCAjODEwM2Y0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc3Bpbm5lciB7XG4gICAgICAgICAgICAwJSAgIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAgICAgICAgICAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAa2V5ZnJhbWVzIHNwaW5uZXIge1xuICAgICAgICAgICAgMCUgICB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgICAgICAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBmZWF0aW1nIGltZyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmZWF0aW1nIHRleHQge1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2Y0ZjRmNDtcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgKyA0cHgpO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBib3R0b206IC0zNXB4O1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgbGVmdDogLTJweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZmVhdGltZzpob3ZlciB0ZXh0IHtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM4NTAwRkY7XG4gICAgICAgICAgICBjb2xvcjogIzg1MDBGRjtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICBmZWF0aW1nIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2E+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxJbnRlcmZhY2UgdGl0bGU9J0FWTiBTWVNURU1TJz5cbiAgICA8dG9waW1hZ2U+XG4gICAgICA8aDE+U09MVVRJT05TIEFORCBTRVJWSUNFUzwvaDE+XG4gICAgPC90b3BpbWFnZT5cbiAgICA8Y29udGVudD5cbiAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0Omhpc3RvcnkuYmFjaygpXCIgY2xhc3NOYW1lPVwiYmFja1wiPlxuICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCIgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBhcnJvdy1sZWZ0XCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI5LjkgNDczLjg5OWwxOS43OTktMTkuNzk5YzQuNjg2LTQuNjg2IDQuNjg2LTEyLjI4NCAwLTE2Ljk3MUw5NC41NjkgMjgySDQzNmM2LjYyNyAwIDEyLTUuMzczIDEyLTEydi0yOGMwLTYuNjI3LTUuMzczLTEyLTEyLTEySDk0LjU2OWwxNTUuMTMtMTU1LjEzYzQuNjg2LTQuNjg2IDQuNjg2LTEyLjI4NCAwLTE2Ljk3MUwyMjkuOSAzOC4xMDFjLTQuNjg2LTQuNjg2LTEyLjI4NC00LjY4Ni0xNi45NzEgMEwzLjUxNSAyNDcuNTE1Yy00LjY4NiA0LjY4Ni00LjY4NiAxMi4yODQgMCAxNi45NzFMMjEyLjkyOSA0NzMuOWM0LjY4NiA0LjY4NiAxMi4yODQgNC42ODYgMTYuOTcxLS4wMDF6XCI+PC9wYXRoPjwvc3ZnPjwvYT5cbiAgICAgIDxsZWZ0PlxuICAgICAgICA8aDM+QkxPQ0tDSEFJTiBBUFBMSUNBVElPTlMsIENVU1RPTSBTT0ZUV0FSRSwgTU9CSUxFIEFQUExJQ0FUSU9OUywgV0hJVEVQQVBFUlMgQU5EIE1PUkUuLi48L2gzPlxuICAgICAgICA8aDY+QkxPQ0tDSEFJTjwvaDY+XG4gICAgICAgIDxwPkFzIHRoZSB3b3JsZCBlbWJyYWNlcyA8YSBocmVmPVwiaHR0cHM6Ly93d3cuYmxvY2tjaGFpbi5jb20vYWJvdXQvaW5kZXguaHRtbFwiIHRhcmdldD1cIl9ibGFua1wiPkJsb2NrY2hhaW48L2E+IFRlY2hub2xvZ3ksIFdlIHNlZWtzIHRvIGRlbGl2ZXIgaW5ub3ZhdGlvbnMgZm9yIHRoZSBkZXZlbG9wbWVudCBvZiA8YT5lbnRlcnByaXNlIHNvbHV0aW9uczwvYT4gYmFzZWQgb24gdGhlIGxhdGVzdCB0ZWNobm9sb2dpZXMsIHN1Y2ggYXMgPGE+c21hcnQgY29udHJhY3RzPC9hPiwgYW4gZXNzZW50aWFsIHRvb2wgZm9yIGxhdW5jaGluZyBkaWdpdGFsIHRva2VucyBpbiB0aGUgc28tY2FsbGVkIDxhIGhyZWY9XCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Jbml0aWFsX2NvaW5fb2ZmZXJpbmdcIiB0YXJnZXQ9XCJfYmxhbmtcIj5pbml0aWFsIGNvaW4gb2ZmZXJpbmcgKElDTyk8L2E+LjwvcD5cbiAgICAgICAgXG4gICAgICAgIDxwPlRoZSBkZXZlbG9wbWVudCBvZiBuZXcgPGE+ZmluYW5jaWFsIHNvbHV0aW9uczwvYT4gcGxhdGZvcm1zLCBwcm92aWRpbmcgcGF5bWVudCBnYXRld2F5cyBhc3NvY2lhdGVkIHdpdGggY2VudHJhbGl6ZWQgPGE+bXVsdGktY3VycmVuY3kgZXhjaGFuZ2U8L2E+LCBsaXN0IG9mIGN1cnJlbmN5IHBhaXJzIGZvciA8YT50cmFkaW5nPC9hPiwgaGlzdG9yeSBvZiBmb3JlY2xvc3VyZXMsIG9mZmVycyBvZiA8YT5wdXJjaGFzZTwvYT4gYW5kIDxhPnNhbGU8L2E+IG9yZGVycywgdm9sdW1lIGluZGljYXRvciBhbmQgZXRjLiBDdXN0b20gcHJlcGFyYXRpb24gb2YgPGE+d2hpdGVwYXBlcnM8L2E+IGZvciBwcm9qZWN0cyB3aXRoIGluaXRpYWwgb2ZmZXIgbGF1bmNoLiBIZXJlIGFyZSBzb21lIHRlY2hub2xvZ2llcyB3ZSBhcmUgZm9sbG93aW5nIGNsb3NlbHk6PC9wPlxuICAgICAgICBcbiAgICAgICAgPEltYWdlV2l0aExvYWRlciBzcmM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMK1wiL3N0YXRpYy9pbWFnZXMvc2VydmljZXMvZXRoZXJldW0uanBnXCJ9IGFsdD1cIkV0aGVyZXVtXCIgaHJlZj1cImh0dHBzOi8vZXRoZXJldW0ub3JnL1wiIHRhcmdldD1cIl9ibGFua1wiLz5cbiAgICAgICAgPEltYWdlV2l0aExvYWRlciBzcmM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMK1wiL3N0YXRpYy9pbWFnZXMvc2VydmljZXMvZGVjZW50LWNoLmpwZ1wifSBhbHQ9XCJEZWNlbnRcIiBocmVmPVwiaHR0cHM6Ly9kZWNlbnQuY2hcIiB0YXJnZXQ9XCJfYmxhbmtcIi8+XG4gICAgICAgIDxJbWFnZVdpdGhMb2FkZXIgc3JjPXtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCtcIi9zdGF0aWMvaW1hZ2VzL3NlcnZpY2VzL2lwZnMuanBnXCJ9IGFsdD1cIklQRlNcIiBocmVmPVwiaHR0cHM6Ly9pcGZzLmlvL1wiIHRhcmdldD1cIl9ibGFua1wiLz5cbiAgICAgICAgPEltYWdlV2l0aExvYWRlciBzcmM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMK1wiL3N0YXRpYy9pbWFnZXMvc2VydmljZXMvYmxvY2tzdGFjay5qcGdcIn0gYWx0PVwiQmxvY2tzdGFja1wiIGhyZWY9XCJodHRwczovL2Jsb2Nrc3RhY2sub3JnL1wiIHRhcmdldD1cIl9ibGFua1wiLz5cbiAgICAgIDwvbGVmdD5cbiAgICAgIDxyaWdodD5cbiAgICAgICAgPE1lbnVJdGVtcyBzZWxlY3RlZD1cIlNFUlZJQ0VTXCIvPlxuICAgICAgPC9yaWdodD5cbiAgICA8L2NvbnRlbnQ+XG4gICAgICAgICAgICBcbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyNTBweCkgYW5kIChtYXgtd2lkdGg6IDE1OTBweCkge1xuICAgICAgICAgICAgYm9keS5sZWZ0LW1lbnUgdG9waW1hZ2UgaDEge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMTAwcHgpIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJvZHkubGVmdC1tZW51IGNvbnRlbnQge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gNjBweCkhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIGB9PC9zdHlsZT5cbiAgXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgdG9waW1hZ2Uge1xuICAgICAgICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAzNTBtcyBlYXNlIDBzO1xuICAgICAgICBib3gtc2hhZG93OiAwIDVweCAxMHB4IDAgcmdiYSgwLDAsMCwuNyk7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9zdGF0aWMvaW1hZ2VzL2hlYWRlci9hdm4tMS03NjguanBnKTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcGFkZGluZy10b3A6IDMzMHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICAgIHRvcGltYWdlIGgxIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgICAgICBib3R0b206IDY1cHg7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB0ZXh0LXNoYWRvdzogM3B4IDRweCA0cHggcmdiYSgwLDAsMCwxKTtcbiAgICAgIH1cbiAgICAgIHRvcGltYWdlIGltZ3Byb2dyZXNzIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBsZWZ0OiBjYWxjKDUwdncgLSAzNXB4KTtcbiAgICAgICAgdG9wOiAxNTVweDtcbiAgICAgIH1cbiAgICAgIHRvcGltYWdlIGltZ3Byb2dyZXNzIHNwaW5uZXIge1xuICAgICAgICBib3JkZXI6IHNvbGlkIDJweCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzYwNTVmYjtcbiAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjODEwM2Y0O1xuICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogIzgxMDNmNDtcbiAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogIzYwNTVmYjtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW5uZXIgNDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICBhbmltYXRpb246IHNwaW5uZXIgNDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDdweCAxcHggIzgxMDNmNDtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQge1xuICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzcwcHgpO1xuICAgICAgICBwYWRkaW5nOiAwIDMwcHggNDBweCA2MHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgICAgICBtYXJnaW46IDIwcHggMjBweCAwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0b3A6IC05MHB4O1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCA1cHggcmdiYSgwLDAsMCwwLjcpO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMzUwbXMgZWFzZSAwcztcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgLmJhY2sge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHBhZGRpbmc6IDE4cHg7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICB9XG4gICAgICBjb250ZW50IC5iYWNrOmhvdmVyIC5hcnJvdy1sZWZ0IHtcbiAgICAgICAgY29sb3I6ICNiNTAwZmY7XG4gICAgICB9XG4gICAgICBjb250ZW50IC5hcnJvdy1sZWZ0IHtcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgICB3aWR0aDogMjJweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgY29udGVudCA+IGxlZnQge1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NjYztcbiAgICAgICAgcGFkZGluZzogMzBweCA0MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgPiBsZWZ0IGgzIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgIGNvbG9yOiAjODUwMEZGO1xuICAgICAgfVxuICAgICAgY29udGVudCA+IGxlZnQgaDYge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBmb250LXNpemU6IDIuNWVtO1xuICAgICAgICBjb2xvcjogIzcyMzZkNjtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgPiBsZWZ0IHAge1xuICAgICAgICBsaW5lLWhlaWdodDogMS40ZW07XG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgIGNvbG9yOiAjNGQ0ZDRkO1xuICAgICAgfVxuICAgICAgY29udGVudCA+IGxlZnQgcCBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogIzg1MDBGRjtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgPiBsZWZ0IHAgYTpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjYmM3NGZmO1xuICAgICAgfVxuICAgICAgY29udGVudCA+IHJpZ2h0IHtcbiAgICAgICAgcGFkZGluZzogMjBweCAzMHB4IDIwcHggNjBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgPiByaWdodCBtZW51aXRlbXMgYnRuOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICM4NTAwRkY7XG4gICAgICB9XG4gICAgICBjb250ZW50ID4gcmlnaHQgbWVudWl0ZW1zIGJ0bi5hY3RpdmUge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICBjb2xvcjogIzE0MTQxNDtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgPiByaWdodCBtZW51aXRlbXMgYnRuIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZzogNXB4IDA7XG4gICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgfVxuICAgICAgY29udGVudCA+IHJpZ2h0IG1lbnVpdGVtcyBidG5zb2xpZCB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZGRkO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjODUwMEZGO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiA1cHggMDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgICAgY29udGVudCA+IHJpZ2h0IG1lbnVpdGVtcyBidG5zb2xpZDpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICM5YzMxZmY7XG4gICAgICB9XG4gICAgICBjb250ZW50ID4gcmlnaHQgbWVudWl0ZW1zIGhyIHtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xuICAgICAgfVxuICAgICAgXG4gICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc3Bpbm5lciB7XG4gICAgICAgIDAlICAgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgICAgIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbiAgICAgIH1cbiAgICAgIEBrZXlmcmFtZXMgc3Bpbm5lciB7XG4gICAgICAgIDAlICAgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAgICAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTI1MHB4KSB7XG4gICAgICAgIGNvbnRlbnQge1xuICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIHRvcGltYWdlIGgxIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMTYwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICBib3R0b206IDc1cHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NDVweCkge1xuICAgICAgICBjb250ZW50ID4gcmlnaHQge1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHggMHB4IDIwcHggMzBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIGNvbnRlbnQgLmFycm93LWxlZnQge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICAgIG1hcmdpbjogNTBweCAxNXB4O1xuICAgICAgICB9XG4gICAgICAgIGNvbnRlbnQgPiBsZWZ0IHtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIHRvcGltYWdlIGgxIHtcbiAgICAgICAgICBib3R0b206IDM1cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MjVweCkge1xuICAgICAgICB0b3BpbWFnZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiA1OHB4O1xuICAgICAgICB9XG4gICAgICAgIHRvcGltYWdlIGgxIHtcbiAgICAgICAgICBmb250LXNpemU6IDIuNWVtO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIGNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgICBtYXJnaW46IDUwcHggNXB4O1xuICAgICAgICB9XG4gICAgICAgIGNvbnRlbnQgPiBsZWZ0IHtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudCA+IHJpZ2h0IHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIFxuICA8L0ludGVyZmFjZT5cbikiXX0= */\n/*@ sourceURL=/home/ubuntu/workspace/estudo/next/pages/services.js */"),
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
      lineNumber: 120
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("topimage", {
    className: "jsx-188595699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-188595699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "SOLUTIONS AND SERVICES")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("content", {
    className: "jsx-188595699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "javascript:history.back()",
    className: "jsx-188595699" + " " + "back",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    "aria-hidden": "true",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512",
    className: "jsx-188595699" + " " + "svg-inline arrow-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "currentColor",
    d: "M229.9 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L94.569 282H436c6.627 0 12-5.373 12-12v-28c0-6.627-5.373-12-12-12H94.569l155.13-155.13c4.686-4.686 4.686-12.284 0-16.971L229.9 38.101c-4.686-4.686-12.284-4.686-16.971 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971L212.929 473.9c4.686 4.686 12.284 4.686 16.971-.001z",
    className: "jsx-188595699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("left", {
    className: "jsx-188595699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-188595699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "BLOCKCHAIN APPLICATIONS, CUSTOM SOFTWARE, MOBILE APPLICATIONS, WHITEPAPERS AND MORE..."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
    className: "jsx-188595699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "BLOCKCHAIN"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-188595699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "As the world embraces ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.blockchain.com/about/index.html",
    target: "_blank",
    className: "jsx-188595699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "Blockchain"), " Technology, We seeks to deliver innovations for the development of ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-188595699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "enterprise solutions"), " based on the latest technologies, such as ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-188595699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "smart contracts"), ", an essential tool for launching digital tokens in the so-called ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://en.wikipedia.org/wiki/Initial_coin_offering",
    target: "_blank",
    className: "jsx-188595699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "initial coin offering (ICO)"), "."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-188595699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "The development of new ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-188595699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "financial solutions"), " platforms, providing payment gateways associated with centralized ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-188595699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "multi-currency exchange"), ", list of currency pairs for ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-188595699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "trading"), ", history of foreclosures, offers of ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-188595699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "purchase"), " and ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-188595699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "sale"), " orders, volume indicator and etc. Custom preparation of ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-188595699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "whitepapers"), " for projects with initial offer launch. Here are some technologies we are following closely:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ImageWithLoader, {
    src: "/static/images/services/ethereum.jpg",
    alt: "Ethereum",
    href: "https://ethereum.org/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ImageWithLoader, {
    src: "/static/images/services/decent-ch.jpg",
    alt: "Decent",
    href: "https://decent.ch",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ImageWithLoader, {
    src: "/static/images/services/ipfs.jpg",
    alt: "IPFS",
    href: "https://ipfs.io/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ImageWithLoader, {
    src: "/static/images/services/blockstack.jpg",
    alt: "Blockstack",
    href: "https://blockstack.org/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("right", {
    className: "jsx-188595699",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_menuitems__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selected: "SERVICES",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3624822357",
    css: "@media (min-width:1250px) and (max-width:1590px){body.left-menu topimage h1{max-width:calc(100% - 100px)!important;}body.left-menu content{max-width:calc(100% - 60px)!important;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvcGFnZXMvc2VydmljZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0l1QixBQUt3RCxBQUdELHNDQUMxQyxDQUhBIiwiZmlsZSI6Ii9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvcGFnZXMvc2VydmljZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW50ZXJmYWNlIGZyb20gJy4uL2NvbXBvbmVudHMvaW50ZXJmYWNlJ1xuaW1wb3J0IE1lbnVJdGVtcyBmcm9tICcuLi9jb21wb25lbnRzL21lbnVpdGVtcydcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBJbWFnZVdpdGhMb2FkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBpbWdTdGF0dXM6IFwiXCIgfTtcbiAgfVxuICBcbiAgaW1nSW5pdCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW1nU3RhdHVzOiBcInNob3dcIiB9KTtcbiAgfVxuXG4gIGltZ0xvYWRlZCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW1nU3RhdHVzOiBcImxvYWRlZFwiIH0pO1xuICB9XG5cbiAgaW1nRXJyb3IoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGltZ1N0YXR1czogXCJlcnJvclwiIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8YSBocmVmPXt0aGlzLnByb3BzLmhyZWZ9IHRhcmdldD17dGhpcy5wcm9wcy50YXJnZXR9PlxuICAgICAgICA8ZmVhdGltZz5cbiAgICAgICAgICA8aW1ncHJvZ3Jlc3MgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmltZ1N0YXR1c30+PHNwaW5uZXI+PC9zcGlubmVyPjwvaW1ncHJvZ3Jlc3M+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXt0aGlzLnByb3BzLnNyY31cbiAgICAgICAgICAgIGFsdD17dGhpcy5wcm9wcy5hbHQgfHwgJyd9XG4gICAgICAgICAgICBvbkxvYWQ9e3RoaXMuaW1nTG9hZGVkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICBvbkVycm9yPXt0aGlzLmltZ0Vycm9yLmJpbmQodGhpcyl9XG4gICAgICAgICAgICBvbkxvYWRTdGFydD17dGhpcy5pbWdJbml0LmJpbmQodGhpcyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8dGV4dD57dGhpcy5wcm9wcy5hbHQgfHwgJyd9PC90ZXh0PlxuICAgICAgICA8L2ZlYXRpbWc+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBmZWF0aW1nIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3RoaXMucHJvcHMuc3JjfSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmNGY0ZjQ7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDE4MHB4O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIHdpZHRoOiA0OSU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGE6bnRoLWNoaWxkKGV2ZW4pIGZlYXRpbWcge1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBmZWF0aW1nOmhvdmVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM4NTAwRkY7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZlYXRpbWcgaW1ncHJvZ3Jlc3Muc2hvdyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTI1cHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTMwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZlYXRpbWcgaW1ncHJvZ3Jlc3Muc2hvdyBzcGlubmVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMnB4IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzYwNTVmYjtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogIzgxMDNmNDtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjODEwM2Y0O1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogIzYwNTVmYjtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW5uZXIgNDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBzcGlubmVyIDQwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggN3B4IDFweCAjODEwM2Y0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc3Bpbm5lciB7XG4gICAgICAgICAgICAwJSAgIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAgICAgICAgICAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAa2V5ZnJhbWVzIHNwaW5uZXIge1xuICAgICAgICAgICAgMCUgICB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgICAgICAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBmZWF0aW1nIGltZyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmZWF0aW1nIHRleHQge1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2Y0ZjRmNDtcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgKyA0cHgpO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBib3R0b206IC0zNXB4O1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgbGVmdDogLTJweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZmVhdGltZzpob3ZlciB0ZXh0IHtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM4NTAwRkY7XG4gICAgICAgICAgICBjb2xvcjogIzg1MDBGRjtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICBmZWF0aW1nIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2E+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxJbnRlcmZhY2UgdGl0bGU9J0FWTiBTWVNURU1TJz5cbiAgICA8dG9waW1hZ2U+XG4gICAgICA8aDE+U09MVVRJT05TIEFORCBTRVJWSUNFUzwvaDE+XG4gICAgPC90b3BpbWFnZT5cbiAgICA8Y29udGVudD5cbiAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0Omhpc3RvcnkuYmFjaygpXCIgY2xhc3NOYW1lPVwiYmFja1wiPlxuICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCIgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBhcnJvdy1sZWZ0XCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI5LjkgNDczLjg5OWwxOS43OTktMTkuNzk5YzQuNjg2LTQuNjg2IDQuNjg2LTEyLjI4NCAwLTE2Ljk3MUw5NC41NjkgMjgySDQzNmM2LjYyNyAwIDEyLTUuMzczIDEyLTEydi0yOGMwLTYuNjI3LTUuMzczLTEyLTEyLTEySDk0LjU2OWwxNTUuMTMtMTU1LjEzYzQuNjg2LTQuNjg2IDQuNjg2LTEyLjI4NCAwLTE2Ljk3MUwyMjkuOSAzOC4xMDFjLTQuNjg2LTQuNjg2LTEyLjI4NC00LjY4Ni0xNi45NzEgMEwzLjUxNSAyNDcuNTE1Yy00LjY4NiA0LjY4Ni00LjY4NiAxMi4yODQgMCAxNi45NzFMMjEyLjkyOSA0NzMuOWM0LjY4NiA0LjY4NiAxMi4yODQgNC42ODYgMTYuOTcxLS4wMDF6XCI+PC9wYXRoPjwvc3ZnPjwvYT5cbiAgICAgIDxsZWZ0PlxuICAgICAgICA8aDM+QkxPQ0tDSEFJTiBBUFBMSUNBVElPTlMsIENVU1RPTSBTT0ZUV0FSRSwgTU9CSUxFIEFQUExJQ0FUSU9OUywgV0hJVEVQQVBFUlMgQU5EIE1PUkUuLi48L2gzPlxuICAgICAgICA8aDY+QkxPQ0tDSEFJTjwvaDY+XG4gICAgICAgIDxwPkFzIHRoZSB3b3JsZCBlbWJyYWNlcyA8YSBocmVmPVwiaHR0cHM6Ly93d3cuYmxvY2tjaGFpbi5jb20vYWJvdXQvaW5kZXguaHRtbFwiIHRhcmdldD1cIl9ibGFua1wiPkJsb2NrY2hhaW48L2E+IFRlY2hub2xvZ3ksIFdlIHNlZWtzIHRvIGRlbGl2ZXIgaW5ub3ZhdGlvbnMgZm9yIHRoZSBkZXZlbG9wbWVudCBvZiA8YT5lbnRlcnByaXNlIHNvbHV0aW9uczwvYT4gYmFzZWQgb24gdGhlIGxhdGVzdCB0ZWNobm9sb2dpZXMsIHN1Y2ggYXMgPGE+c21hcnQgY29udHJhY3RzPC9hPiwgYW4gZXNzZW50aWFsIHRvb2wgZm9yIGxhdW5jaGluZyBkaWdpdGFsIHRva2VucyBpbiB0aGUgc28tY2FsbGVkIDxhIGhyZWY9XCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Jbml0aWFsX2NvaW5fb2ZmZXJpbmdcIiB0YXJnZXQ9XCJfYmxhbmtcIj5pbml0aWFsIGNvaW4gb2ZmZXJpbmcgKElDTyk8L2E+LjwvcD5cbiAgICAgICAgXG4gICAgICAgIDxwPlRoZSBkZXZlbG9wbWVudCBvZiBuZXcgPGE+ZmluYW5jaWFsIHNvbHV0aW9uczwvYT4gcGxhdGZvcm1zLCBwcm92aWRpbmcgcGF5bWVudCBnYXRld2F5cyBhc3NvY2lhdGVkIHdpdGggY2VudHJhbGl6ZWQgPGE+bXVsdGktY3VycmVuY3kgZXhjaGFuZ2U8L2E+LCBsaXN0IG9mIGN1cnJlbmN5IHBhaXJzIGZvciA8YT50cmFkaW5nPC9hPiwgaGlzdG9yeSBvZiBmb3JlY2xvc3VyZXMsIG9mZmVycyBvZiA8YT5wdXJjaGFzZTwvYT4gYW5kIDxhPnNhbGU8L2E+IG9yZGVycywgdm9sdW1lIGluZGljYXRvciBhbmQgZXRjLiBDdXN0b20gcHJlcGFyYXRpb24gb2YgPGE+d2hpdGVwYXBlcnM8L2E+IGZvciBwcm9qZWN0cyB3aXRoIGluaXRpYWwgb2ZmZXIgbGF1bmNoLiBIZXJlIGFyZSBzb21lIHRlY2hub2xvZ2llcyB3ZSBhcmUgZm9sbG93aW5nIGNsb3NlbHk6PC9wPlxuICAgICAgICBcbiAgICAgICAgPEltYWdlV2l0aExvYWRlciBzcmM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMK1wiL3N0YXRpYy9pbWFnZXMvc2VydmljZXMvZXRoZXJldW0uanBnXCJ9IGFsdD1cIkV0aGVyZXVtXCIgaHJlZj1cImh0dHBzOi8vZXRoZXJldW0ub3JnL1wiIHRhcmdldD1cIl9ibGFua1wiLz5cbiAgICAgICAgPEltYWdlV2l0aExvYWRlciBzcmM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMK1wiL3N0YXRpYy9pbWFnZXMvc2VydmljZXMvZGVjZW50LWNoLmpwZ1wifSBhbHQ9XCJEZWNlbnRcIiBocmVmPVwiaHR0cHM6Ly9kZWNlbnQuY2hcIiB0YXJnZXQ9XCJfYmxhbmtcIi8+XG4gICAgICAgIDxJbWFnZVdpdGhMb2FkZXIgc3JjPXtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCtcIi9zdGF0aWMvaW1hZ2VzL3NlcnZpY2VzL2lwZnMuanBnXCJ9IGFsdD1cIklQRlNcIiBocmVmPVwiaHR0cHM6Ly9pcGZzLmlvL1wiIHRhcmdldD1cIl9ibGFua1wiLz5cbiAgICAgICAgPEltYWdlV2l0aExvYWRlciBzcmM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMK1wiL3N0YXRpYy9pbWFnZXMvc2VydmljZXMvYmxvY2tzdGFjay5qcGdcIn0gYWx0PVwiQmxvY2tzdGFja1wiIGhyZWY9XCJodHRwczovL2Jsb2Nrc3RhY2sub3JnL1wiIHRhcmdldD1cIl9ibGFua1wiLz5cbiAgICAgIDwvbGVmdD5cbiAgICAgIDxyaWdodD5cbiAgICAgICAgPE1lbnVJdGVtcyBzZWxlY3RlZD1cIlNFUlZJQ0VTXCIvPlxuICAgICAgPC9yaWdodD5cbiAgICA8L2NvbnRlbnQ+XG4gICAgICAgICAgICBcbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyNTBweCkgYW5kIChtYXgtd2lkdGg6IDE1OTBweCkge1xuICAgICAgICAgICAgYm9keS5sZWZ0LW1lbnUgdG9waW1hZ2UgaDEge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMTAwcHgpIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJvZHkubGVmdC1tZW51IGNvbnRlbnQge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gNjBweCkhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIGB9PC9zdHlsZT5cbiAgXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgdG9waW1hZ2Uge1xuICAgICAgICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAzNTBtcyBlYXNlIDBzO1xuICAgICAgICBib3gtc2hhZG93OiAwIDVweCAxMHB4IDAgcmdiYSgwLDAsMCwuNyk7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9zdGF0aWMvaW1hZ2VzL2hlYWRlci9hdm4tMS03NjguanBnKTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcGFkZGluZy10b3A6IDMzMHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICAgIHRvcGltYWdlIGgxIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgICAgICBib3R0b206IDY1cHg7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB0ZXh0LXNoYWRvdzogM3B4IDRweCA0cHggcmdiYSgwLDAsMCwxKTtcbiAgICAgIH1cbiAgICAgIHRvcGltYWdlIGltZ3Byb2dyZXNzIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBsZWZ0OiBjYWxjKDUwdncgLSAzNXB4KTtcbiAgICAgICAgdG9wOiAxNTVweDtcbiAgICAgIH1cbiAgICAgIHRvcGltYWdlIGltZ3Byb2dyZXNzIHNwaW5uZXIge1xuICAgICAgICBib3JkZXI6IHNvbGlkIDJweCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzYwNTVmYjtcbiAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjODEwM2Y0O1xuICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogIzgxMDNmNDtcbiAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogIzYwNTVmYjtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW5uZXIgNDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICBhbmltYXRpb246IHNwaW5uZXIgNDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDdweCAxcHggIzgxMDNmNDtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQge1xuICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzcwcHgpO1xuICAgICAgICBwYWRkaW5nOiAwIDMwcHggNDBweCA2MHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgICAgICBtYXJnaW46IDIwcHggMjBweCAwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0b3A6IC05MHB4O1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCA1cHggcmdiYSgwLDAsMCwwLjcpO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMzUwbXMgZWFzZSAwcztcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgLmJhY2sge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHBhZGRpbmc6IDE4cHg7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICB9XG4gICAgICBjb250ZW50IC5iYWNrOmhvdmVyIC5hcnJvdy1sZWZ0IHtcbiAgICAgICAgY29sb3I6ICNiNTAwZmY7XG4gICAgICB9XG4gICAgICBjb250ZW50IC5hcnJvdy1sZWZ0IHtcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgICB3aWR0aDogMjJweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgY29udGVudCA+IGxlZnQge1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NjYztcbiAgICAgICAgcGFkZGluZzogMzBweCA0MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgPiBsZWZ0IGgzIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgIGNvbG9yOiAjODUwMEZGO1xuICAgICAgfVxuICAgICAgY29udGVudCA+IGxlZnQgaDYge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBmb250LXNpemU6IDIuNWVtO1xuICAgICAgICBjb2xvcjogIzcyMzZkNjtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgPiBsZWZ0IHAge1xuICAgICAgICBsaW5lLWhlaWdodDogMS40ZW07XG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgIGNvbG9yOiAjNGQ0ZDRkO1xuICAgICAgfVxuICAgICAgY29udGVudCA+IGxlZnQgcCBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogIzg1MDBGRjtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgPiBsZWZ0IHAgYTpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjYmM3NGZmO1xuICAgICAgfVxuICAgICAgY29udGVudCA+IHJpZ2h0IHtcbiAgICAgICAgcGFkZGluZzogMjBweCAzMHB4IDIwcHggNjBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgPiByaWdodCBtZW51aXRlbXMgYnRuOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICM4NTAwRkY7XG4gICAgICB9XG4gICAgICBjb250ZW50ID4gcmlnaHQgbWVudWl0ZW1zIGJ0bi5hY3RpdmUge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICBjb2xvcjogIzE0MTQxNDtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgPiByaWdodCBtZW51aXRlbXMgYnRuIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZzogNXB4IDA7XG4gICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgfVxuICAgICAgY29udGVudCA+IHJpZ2h0IG1lbnVpdGVtcyBidG5zb2xpZCB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZGRkO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjODUwMEZGO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiA1cHggMDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgICAgY29udGVudCA+IHJpZ2h0IG1lbnVpdGVtcyBidG5zb2xpZDpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICM5YzMxZmY7XG4gICAgICB9XG4gICAgICBjb250ZW50ID4gcmlnaHQgbWVudWl0ZW1zIGhyIHtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xuICAgICAgfVxuICAgICAgXG4gICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc3Bpbm5lciB7XG4gICAgICAgIDAlICAgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgICAgIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbiAgICAgIH1cbiAgICAgIEBrZXlmcmFtZXMgc3Bpbm5lciB7XG4gICAgICAgIDAlICAgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAgICAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTI1MHB4KSB7XG4gICAgICAgIGNvbnRlbnQge1xuICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIHRvcGltYWdlIGgxIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMTYwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICBib3R0b206IDc1cHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NDVweCkge1xuICAgICAgICBjb250ZW50ID4gcmlnaHQge1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHggMHB4IDIwcHggMzBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIGNvbnRlbnQgLmFycm93LWxlZnQge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICAgIG1hcmdpbjogNTBweCAxNXB4O1xuICAgICAgICB9XG4gICAgICAgIGNvbnRlbnQgPiBsZWZ0IHtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIHRvcGltYWdlIGgxIHtcbiAgICAgICAgICBib3R0b206IDM1cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MjVweCkge1xuICAgICAgICB0b3BpbWFnZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiA1OHB4O1xuICAgICAgICB9XG4gICAgICAgIHRvcGltYWdlIGgxIHtcbiAgICAgICAgICBmb250LXNpemU6IDIuNWVtO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIGNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgICBtYXJnaW46IDUwcHggNXB4O1xuICAgICAgICB9XG4gICAgICAgIGNvbnRlbnQgPiBsZWZ0IHtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudCA+IHJpZ2h0IHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIFxuICA8L0ludGVyZmFjZT5cbikiXX0= */\n/*@ sourceURL=/home/ubuntu/workspace/estudo/next/pages/services.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2137001647",
    css: "topimage.jsx-188595699{-webkit-transition:margin-left 350ms ease 0s;transition:margin-left 350ms ease 0s;box-shadow:0 5px 10px 0 rgba(0,0,0,.7);background-image:url(".concat("", "/static/images/header/avn-1-768.jpg);background-position-x:center;background-size:cover;position:relative;padding-top:330px;display:block;}topimage.jsx-188595699 h1.jsx-188595699{position:absolute;text-transform:uppercase;-webkit-letter-spacing:-1px;-moz-letter-spacing:-1px;-ms-letter-spacing:-1px;letter-spacing:-1px;margin-left:40px;font-size:3em;bottom:65px;color:#fff;text-shadow:3px 4px 4px rgba(0,0,0,1);}topimage.jsx-188595699 imgprogress.jsx-188595699{position:fixed;left:calc(50vw - 35px);top:155px;}topimage.jsx-188595699 imgprogress.jsx-188595699 spinner.jsx-188595699{border:solid 2px transparent;border-bottom-color:#6055fb;border-right-color:#8103f4;border-left-color:#8103f4;border-top-color:#6055fb;box-sizing:border-box;border-radius:50%;display:block;height:70px;width:70px;-webkit-animation:spinner 400ms linear infinite;-webkit-animation:spinner-jsx-188595699 400ms linear infinite;animation:spinner-jsx-188595699 400ms linear infinite;box-shadow:0px 1px 7px 1px #8103f4;}content.jsx-188595699{min-height:calc(100vh - 370px);padding:0 30px 40px 60px;border:1px solid #fff;margin:20px 20px 0px;background:#f4f4f4;position:relative;max-width:1200px;overflow:hidden;display:block;top:-90px;box-shadow:0 0 10px 5px rgba(0,0,0,0.7);-webkit-transition:all 350ms ease 0s;transition:all 350ms ease 0s;}content.jsx-188595699 .back.jsx-188595699{position:absolute;padding:18px;left:0;}content.jsx-188595699 .back.jsx-188595699:hover .arrow-left.jsx-188595699{color:#b500ff;}content.jsx-188595699 .arrow-left.jsx-188595699{overflow:visible;color:black;height:22px;width:22px;}content.jsx-188595699>left.jsx-188595699{border-bottom:2px solid #ccc;padding:30px 40px;background:#fff;display:block;height:100%;float:left;width:70%;}content.jsx-188595699>left.jsx-188595699 h3.jsx-188595699{margin-bottom:20px;-webkit-letter-spacing:3px;-moz-letter-spacing:3px;-ms-letter-spacing:3px;letter-spacing:3px;font-weight:700;font-size:1em;color:#8500FF;}content.jsx-188595699>left.jsx-188595699 h6.jsx-188595699{margin-bottom:20px;font-size:2.5em;color:#7236d6;}content.jsx-188595699>left.jsx-188595699 p.jsx-188595699{line-height:1.4em;text-align:justify;color:#4d4d4d;}content.jsx-188595699>left.jsx-188595699 p.jsx-188595699 a.jsx-188595699{-webkit-text-decoration:none;text-decoration:none;color:#8500FF;}content.jsx-188595699>left.jsx-188595699 p.jsx-188595699 a.jsx-188595699:hover{color:#bc74ff;}content.jsx-188595699>right.jsx-188595699{padding:20px 30px 20px 60px;display:block;float:right;width:30%;}content.jsx-188595699>right.jsx-188595699 menuitems.jsx-188595699 btn.jsx-188595699:hover{color:#8500FF;}content.jsx-188595699>right.jsx-188595699 menuitems.jsx-188595699 btn.active.jsx-188595699{pointer-events:none;cursor:default;color:#141414;}content.jsx-188595699>right.jsx-188595699 menuitems.jsx-188595699 btn.jsx-188595699{text-transform:uppercase;font-weight:500;cursor:pointer;display:block;padding:5px 0;color:#999;}content.jsx-188595699>right.jsx-188595699 menuitems.jsx-188595699 btnsolid.jsx-188595699{text-transform:uppercase;border-bottom:3px solid #ddd;background:#8500FF;text-align:center;line-height:50px;font-weight:500;cursor:pointer;display:block;padding:5px 0;color:white;}content.jsx-188595699>right.jsx-188595699 menuitems.jsx-188595699 btnsolid.jsx-188595699:hover{background:#9c31ff;}content.jsx-188595699>right.jsx-188595699 menuitems.jsx-188595699 hr.jsx-188595699{border-top:1px solid #ddd;border-bottom:1px solid #fff;}@-webkit-keyframes spinner{0%.jsx-188595699{-webkit-transform:rotate(0deg);}100%.jsx-188595699{-webkit-transform:rotate(360deg);}}@-webkit-keyframes spinner-jsx-188595699{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spinner-jsx-188595699{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@media (min-width:1250px){content.jsx-188595699{margin:20px auto;}topimage.jsx-188595699 h1.jsx-188595699{position:relative;max-width:1160px;margin:0px auto;bottom:75px;width:100%;}}@media (max-width:945px){content.jsx-188595699>right.jsx-188595699{padding:20px 0px 20px 30px;}}@media (max-width:768px){content.jsx-188595699 .arrow-left.jsx-188595699{display:none;}content.jsx-188595699{padding:0 20px;margin:50px 15px;}content.jsx-188595699>left.jsx-188595699{padding:20px;}topimage.jsx-188595699 h1.jsx-188595699{bottom:35px;}}@media (max-width:625px){topimage.jsx-188595699{background-position-y:58px;}topimage.jsx-188595699 h1.jsx-188595699{font-size:2.5em;margin-left:20px;}content.jsx-188595699{padding:0 10px;margin:50px 5px;}content.jsx-188595699>left.jsx-188595699{padding:20px 10px;width:100%;}content.jsx-188595699>right.jsx-188595699{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvcGFnZXMvc2VydmljZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEpnQixBQUc4QyxBQVVuQixBQVVILEFBS2MsQUFlRSxBQWNiLEFBS0osQUFHRyxBQU9ZLEFBU1YsQUFPQSxBQUtELEFBS0csQUFJUCxBQUdjLEFBTWQsQUFHTSxBQUtLLEFBUUEsQUFZTixBQUdPLEFBS1csQUFDRSxBQUdWLEFBQ0UsQUFLWixBQUdDLEFBU1MsQUFLZCxBQUdFLEFBSUYsQUFHRCxBQUtlLEFBR1gsQUFJRCxBQUlHLEFBSUwsWUFuQmYsQ0FWQSxBQU9BLEFBdUJBLENBOUlGLEFBd0NBLEFBU0EsQ0F4RnlCLEFBMEpKLEFBbUJELENBSkMsQ0EvSFAsQUE0RlosQ0FoSnlCLEFBNENaLEFBb0NNLEFBbUVBLEFBd0NOLENBdkhNLEFBT0gsQUFtRGxCLENBekJpQixLQUtDLEFBUWEsQ0FlQSxDQTJCN0IsQUFvQkEsQ0FwRmMsQ0E3RWMsQUFzQ2hCLEFBTU0sQUFpSWxCLEVBOUp5QixBQWVsQixBQXdGK0IsQUFtRHRDLENBbkJBLENBL0J3QyxBQThDeEMsRUF4R2MsQUEwQkEsQUE4Q0ksRUFuRUosQ0F0RUosQUFtQ1osR0FRYSxBQXFESSxDQWRILENBNUZRLElBMkRKLENBaERsQixDQWlFQSxBQTBCQSxDQWxCZ0IsQ0FIaEIsQUFtRWdCLENBOUZoQixFQXVDWSxBQXFCUyxDQWVyQixDQW5Hd0IsQUE2RVIsQ0E1RmEsTUE2Q2IsQUF5RkQsQ0FoRWYsQUFTQSxNQWNnQixHQU9JLENBbUNsQixHQXpGWSxDQTlCUyxHQXlHUyxDQW5KUyxFQTJCYixBQTZGZixHQTRCcUIsRUEzRXJCLEVBc0RNLElBTm5CLElBOUVxQixDQStCVCxRQXNETSxFQXBHUyxBQStDM0IsRUFJa0IsTUFuQ0UsR0EzQ29FLEdBZ0l2RSxJQWpERCxPQW5EUSxDQWdCTCxHQXFGSCxDQXRIRyxFQXFFSCxXQW5DRSxBQXFGRixHQWpEaEIsQ0FyRWdCLEFBaUJJLFVBc0dOLEVBckZFLEVBakNGLElBaUJFLElBc0doQixJQXRIYSxBQWlDRCxNQWhCRSxJQWlCNEIsQ0FqQ0YsT0FpQjNCLE1BL0JrQixLQWdDbUIsb0JBakJsRCxDQWlDK0IsR0EvQ1Asc0JBQ0osRUErQnNCLGdCQTlCdEIsa0JBQ0osS0E2Q2hCLFNBNUNBLG9FQTZCcUMsbUNBQ3JDIiwiZmlsZSI6Ii9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvcGFnZXMvc2VydmljZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW50ZXJmYWNlIGZyb20gJy4uL2NvbXBvbmVudHMvaW50ZXJmYWNlJ1xuaW1wb3J0IE1lbnVJdGVtcyBmcm9tICcuLi9jb21wb25lbnRzL21lbnVpdGVtcydcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBJbWFnZVdpdGhMb2FkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBpbWdTdGF0dXM6IFwiXCIgfTtcbiAgfVxuICBcbiAgaW1nSW5pdCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW1nU3RhdHVzOiBcInNob3dcIiB9KTtcbiAgfVxuXG4gIGltZ0xvYWRlZCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW1nU3RhdHVzOiBcImxvYWRlZFwiIH0pO1xuICB9XG5cbiAgaW1nRXJyb3IoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGltZ1N0YXR1czogXCJlcnJvclwiIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8YSBocmVmPXt0aGlzLnByb3BzLmhyZWZ9IHRhcmdldD17dGhpcy5wcm9wcy50YXJnZXR9PlxuICAgICAgICA8ZmVhdGltZz5cbiAgICAgICAgICA8aW1ncHJvZ3Jlc3MgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmltZ1N0YXR1c30+PHNwaW5uZXI+PC9zcGlubmVyPjwvaW1ncHJvZ3Jlc3M+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXt0aGlzLnByb3BzLnNyY31cbiAgICAgICAgICAgIGFsdD17dGhpcy5wcm9wcy5hbHQgfHwgJyd9XG4gICAgICAgICAgICBvbkxvYWQ9e3RoaXMuaW1nTG9hZGVkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICBvbkVycm9yPXt0aGlzLmltZ0Vycm9yLmJpbmQodGhpcyl9XG4gICAgICAgICAgICBvbkxvYWRTdGFydD17dGhpcy5pbWdJbml0LmJpbmQodGhpcyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8dGV4dD57dGhpcy5wcm9wcy5hbHQgfHwgJyd9PC90ZXh0PlxuICAgICAgICA8L2ZlYXRpbWc+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBmZWF0aW1nIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3RoaXMucHJvcHMuc3JjfSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmNGY0ZjQ7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDE4MHB4O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIHdpZHRoOiA0OSU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGE6bnRoLWNoaWxkKGV2ZW4pIGZlYXRpbWcge1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBmZWF0aW1nOmhvdmVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM4NTAwRkY7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZlYXRpbWcgaW1ncHJvZ3Jlc3Muc2hvdyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTI1cHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTMwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZlYXRpbWcgaW1ncHJvZ3Jlc3Muc2hvdyBzcGlubmVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMnB4IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzYwNTVmYjtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogIzgxMDNmNDtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjODEwM2Y0O1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogIzYwNTVmYjtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW5uZXIgNDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBzcGlubmVyIDQwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggN3B4IDFweCAjODEwM2Y0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc3Bpbm5lciB7XG4gICAgICAgICAgICAwJSAgIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAgICAgICAgICAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAa2V5ZnJhbWVzIHNwaW5uZXIge1xuICAgICAgICAgICAgMCUgICB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgICAgICAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBmZWF0aW1nIGltZyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmZWF0aW1nIHRleHQge1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2Y0ZjRmNDtcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgKyA0cHgpO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBib3R0b206IC0zNXB4O1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgbGVmdDogLTJweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZmVhdGltZzpob3ZlciB0ZXh0IHtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM4NTAwRkY7XG4gICAgICAgICAgICBjb2xvcjogIzg1MDBGRjtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICBmZWF0aW1nIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2E+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxJbnRlcmZhY2UgdGl0bGU9J0FWTiBTWVNURU1TJz5cbiAgICA8dG9waW1hZ2U+XG4gICAgICA8aDE+U09MVVRJT05TIEFORCBTRVJWSUNFUzwvaDE+XG4gICAgPC90b3BpbWFnZT5cbiAgICA8Y29udGVudD5cbiAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0Omhpc3RvcnkuYmFjaygpXCIgY2xhc3NOYW1lPVwiYmFja1wiPlxuICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCIgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBhcnJvdy1sZWZ0XCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjI5LjkgNDczLjg5OWwxOS43OTktMTkuNzk5YzQuNjg2LTQuNjg2IDQuNjg2LTEyLjI4NCAwLTE2Ljk3MUw5NC41NjkgMjgySDQzNmM2LjYyNyAwIDEyLTUuMzczIDEyLTEydi0yOGMwLTYuNjI3LTUuMzczLTEyLTEyLTEySDk0LjU2OWwxNTUuMTMtMTU1LjEzYzQuNjg2LTQuNjg2IDQuNjg2LTEyLjI4NCAwLTE2Ljk3MUwyMjkuOSAzOC4xMDFjLTQuNjg2LTQuNjg2LTEyLjI4NC00LjY4Ni0xNi45NzEgMEwzLjUxNSAyNDcuNTE1Yy00LjY4NiA0LjY4Ni00LjY4NiAxMi4yODQgMCAxNi45NzFMMjEyLjkyOSA0NzMuOWM0LjY4NiA0LjY4NiAxMi4yODQgNC42ODYgMTYuOTcxLS4wMDF6XCI+PC9wYXRoPjwvc3ZnPjwvYT5cbiAgICAgIDxsZWZ0PlxuICAgICAgICA8aDM+QkxPQ0tDSEFJTiBBUFBMSUNBVElPTlMsIENVU1RPTSBTT0ZUV0FSRSwgTU9CSUxFIEFQUExJQ0FUSU9OUywgV0hJVEVQQVBFUlMgQU5EIE1PUkUuLi48L2gzPlxuICAgICAgICA8aDY+QkxPQ0tDSEFJTjwvaDY+XG4gICAgICAgIDxwPkFzIHRoZSB3b3JsZCBlbWJyYWNlcyA8YSBocmVmPVwiaHR0cHM6Ly93d3cuYmxvY2tjaGFpbi5jb20vYWJvdXQvaW5kZXguaHRtbFwiIHRhcmdldD1cIl9ibGFua1wiPkJsb2NrY2hhaW48L2E+IFRlY2hub2xvZ3ksIFdlIHNlZWtzIHRvIGRlbGl2ZXIgaW5ub3ZhdGlvbnMgZm9yIHRoZSBkZXZlbG9wbWVudCBvZiA8YT5lbnRlcnByaXNlIHNvbHV0aW9uczwvYT4gYmFzZWQgb24gdGhlIGxhdGVzdCB0ZWNobm9sb2dpZXMsIHN1Y2ggYXMgPGE+c21hcnQgY29udHJhY3RzPC9hPiwgYW4gZXNzZW50aWFsIHRvb2wgZm9yIGxhdW5jaGluZyBkaWdpdGFsIHRva2VucyBpbiB0aGUgc28tY2FsbGVkIDxhIGhyZWY9XCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Jbml0aWFsX2NvaW5fb2ZmZXJpbmdcIiB0YXJnZXQ9XCJfYmxhbmtcIj5pbml0aWFsIGNvaW4gb2ZmZXJpbmcgKElDTyk8L2E+LjwvcD5cbiAgICAgICAgXG4gICAgICAgIDxwPlRoZSBkZXZlbG9wbWVudCBvZiBuZXcgPGE+ZmluYW5jaWFsIHNvbHV0aW9uczwvYT4gcGxhdGZvcm1zLCBwcm92aWRpbmcgcGF5bWVudCBnYXRld2F5cyBhc3NvY2lhdGVkIHdpdGggY2VudHJhbGl6ZWQgPGE+bXVsdGktY3VycmVuY3kgZXhjaGFuZ2U8L2E+LCBsaXN0IG9mIGN1cnJlbmN5IHBhaXJzIGZvciA8YT50cmFkaW5nPC9hPiwgaGlzdG9yeSBvZiBmb3JlY2xvc3VyZXMsIG9mZmVycyBvZiA8YT5wdXJjaGFzZTwvYT4gYW5kIDxhPnNhbGU8L2E+IG9yZGVycywgdm9sdW1lIGluZGljYXRvciBhbmQgZXRjLiBDdXN0b20gcHJlcGFyYXRpb24gb2YgPGE+d2hpdGVwYXBlcnM8L2E+IGZvciBwcm9qZWN0cyB3aXRoIGluaXRpYWwgb2ZmZXIgbGF1bmNoLiBIZXJlIGFyZSBzb21lIHRlY2hub2xvZ2llcyB3ZSBhcmUgZm9sbG93aW5nIGNsb3NlbHk6PC9wPlxuICAgICAgICBcbiAgICAgICAgPEltYWdlV2l0aExvYWRlciBzcmM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMK1wiL3N0YXRpYy9pbWFnZXMvc2VydmljZXMvZXRoZXJldW0uanBnXCJ9IGFsdD1cIkV0aGVyZXVtXCIgaHJlZj1cImh0dHBzOi8vZXRoZXJldW0ub3JnL1wiIHRhcmdldD1cIl9ibGFua1wiLz5cbiAgICAgICAgPEltYWdlV2l0aExvYWRlciBzcmM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMK1wiL3N0YXRpYy9pbWFnZXMvc2VydmljZXMvZGVjZW50LWNoLmpwZ1wifSBhbHQ9XCJEZWNlbnRcIiBocmVmPVwiaHR0cHM6Ly9kZWNlbnQuY2hcIiB0YXJnZXQ9XCJfYmxhbmtcIi8+XG4gICAgICAgIDxJbWFnZVdpdGhMb2FkZXIgc3JjPXtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCtcIi9zdGF0aWMvaW1hZ2VzL3NlcnZpY2VzL2lwZnMuanBnXCJ9IGFsdD1cIklQRlNcIiBocmVmPVwiaHR0cHM6Ly9pcGZzLmlvL1wiIHRhcmdldD1cIl9ibGFua1wiLz5cbiAgICAgICAgPEltYWdlV2l0aExvYWRlciBzcmM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMK1wiL3N0YXRpYy9pbWFnZXMvc2VydmljZXMvYmxvY2tzdGFjay5qcGdcIn0gYWx0PVwiQmxvY2tzdGFja1wiIGhyZWY9XCJodHRwczovL2Jsb2Nrc3RhY2sub3JnL1wiIHRhcmdldD1cIl9ibGFua1wiLz5cbiAgICAgIDwvbGVmdD5cbiAgICAgIDxyaWdodD5cbiAgICAgICAgPE1lbnVJdGVtcyBzZWxlY3RlZD1cIlNFUlZJQ0VTXCIvPlxuICAgICAgPC9yaWdodD5cbiAgICA8L2NvbnRlbnQ+XG4gICAgICAgICAgICBcbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyNTBweCkgYW5kIChtYXgtd2lkdGg6IDE1OTBweCkge1xuICAgICAgICAgICAgYm9keS5sZWZ0LW1lbnUgdG9waW1hZ2UgaDEge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMTAwcHgpIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJvZHkubGVmdC1tZW51IGNvbnRlbnQge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gNjBweCkhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIGB9PC9zdHlsZT5cbiAgXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgdG9waW1hZ2Uge1xuICAgICAgICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAzNTBtcyBlYXNlIDBzO1xuICAgICAgICBib3gtc2hhZG93OiAwIDVweCAxMHB4IDAgcmdiYSgwLDAsMCwuNyk7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9zdGF0aWMvaW1hZ2VzL2hlYWRlci9hdm4tMS03NjguanBnKTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcGFkZGluZy10b3A6IDMzMHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICAgIHRvcGltYWdlIGgxIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgICAgICBib3R0b206IDY1cHg7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB0ZXh0LXNoYWRvdzogM3B4IDRweCA0cHggcmdiYSgwLDAsMCwxKTtcbiAgICAgIH1cbiAgICAgIHRvcGltYWdlIGltZ3Byb2dyZXNzIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBsZWZ0OiBjYWxjKDUwdncgLSAzNXB4KTtcbiAgICAgICAgdG9wOiAxNTVweDtcbiAgICAgIH1cbiAgICAgIHRvcGltYWdlIGltZ3Byb2dyZXNzIHNwaW5uZXIge1xuICAgICAgICBib3JkZXI6IHNvbGlkIDJweCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzYwNTVmYjtcbiAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjODEwM2Y0O1xuICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogIzgxMDNmNDtcbiAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogIzYwNTVmYjtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW5uZXIgNDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICBhbmltYXRpb246IHNwaW5uZXIgNDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDdweCAxcHggIzgxMDNmNDtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQge1xuICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzcwcHgpO1xuICAgICAgICBwYWRkaW5nOiAwIDMwcHggNDBweCA2MHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgICAgICBtYXJnaW46IDIwcHggMjBweCAwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0b3A6IC05MHB4O1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCA1cHggcmdiYSgwLDAsMCwwLjcpO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMzUwbXMgZWFzZSAwcztcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgLmJhY2sge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHBhZGRpbmc6IDE4cHg7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICB9XG4gICAgICBjb250ZW50IC5iYWNrOmhvdmVyIC5hcnJvdy1sZWZ0IHtcbiAgICAgICAgY29sb3I6ICNiNTAwZmY7XG4gICAgICB9XG4gICAgICBjb250ZW50IC5hcnJvdy1sZWZ0IHtcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgICB3aWR0aDogMjJweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgY29udGVudCA+IGxlZnQge1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NjYztcbiAgICAgICAgcGFkZGluZzogMzBweCA0MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgPiBsZWZ0IGgzIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgIGNvbG9yOiAjODUwMEZGO1xuICAgICAgfVxuICAgICAgY29udGVudCA+IGxlZnQgaDYge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBmb250LXNpemU6IDIuNWVtO1xuICAgICAgICBjb2xvcjogIzcyMzZkNjtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgPiBsZWZ0IHAge1xuICAgICAgICBsaW5lLWhlaWdodDogMS40ZW07XG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgIGNvbG9yOiAjNGQ0ZDRkO1xuICAgICAgfVxuICAgICAgY29udGVudCA+IGxlZnQgcCBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogIzg1MDBGRjtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgPiBsZWZ0IHAgYTpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjYmM3NGZmO1xuICAgICAgfVxuICAgICAgY29udGVudCA+IHJpZ2h0IHtcbiAgICAgICAgcGFkZGluZzogMjBweCAzMHB4IDIwcHggNjBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgPiByaWdodCBtZW51aXRlbXMgYnRuOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICM4NTAwRkY7XG4gICAgICB9XG4gICAgICBjb250ZW50ID4gcmlnaHQgbWVudWl0ZW1zIGJ0bi5hY3RpdmUge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICBjb2xvcjogIzE0MTQxNDtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgPiByaWdodCBtZW51aXRlbXMgYnRuIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZzogNXB4IDA7XG4gICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgfVxuICAgICAgY29udGVudCA+IHJpZ2h0IG1lbnVpdGVtcyBidG5zb2xpZCB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZGRkO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjODUwMEZGO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiA1cHggMDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgICAgY29udGVudCA+IHJpZ2h0IG1lbnVpdGVtcyBidG5zb2xpZDpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICM5YzMxZmY7XG4gICAgICB9XG4gICAgICBjb250ZW50ID4gcmlnaHQgbWVudWl0ZW1zIGhyIHtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xuICAgICAgfVxuICAgICAgXG4gICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc3Bpbm5lciB7XG4gICAgICAgIDAlICAgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgICAgIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbiAgICAgIH1cbiAgICAgIEBrZXlmcmFtZXMgc3Bpbm5lciB7XG4gICAgICAgIDAlICAgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAgICAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTI1MHB4KSB7XG4gICAgICAgIGNvbnRlbnQge1xuICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIHRvcGltYWdlIGgxIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMTYwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICBib3R0b206IDc1cHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NDVweCkge1xuICAgICAgICBjb250ZW50ID4gcmlnaHQge1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHggMHB4IDIwcHggMzBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIGNvbnRlbnQgLmFycm93LWxlZnQge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICAgIG1hcmdpbjogNTBweCAxNXB4O1xuICAgICAgICB9XG4gICAgICAgIGNvbnRlbnQgPiBsZWZ0IHtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIHRvcGltYWdlIGgxIHtcbiAgICAgICAgICBib3R0b206IDM1cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MjVweCkge1xuICAgICAgICB0b3BpbWFnZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiA1OHB4O1xuICAgICAgICB9XG4gICAgICAgIHRvcGltYWdlIGgxIHtcbiAgICAgICAgICBmb250LXNpemU6IDIuNWVtO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIGNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgICBtYXJnaW46IDUwcHggNXB4O1xuICAgICAgICB9XG4gICAgICAgIGNvbnRlbnQgPiBsZWZ0IHtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudCA+IHJpZ2h0IHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIFxuICA8L0ludGVyZmFjZT5cbikiXX0= */\n/*@ sourceURL=/home/ubuntu/workspace/estudo/next/pages/services.js */"),
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
//# sourceMappingURL=services.js.5dd1031852023388a2e4.hot-update.js.map