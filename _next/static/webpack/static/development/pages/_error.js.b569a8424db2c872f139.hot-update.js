webpackHotUpdate("static/development/pages/_error.js",{

/***/ "./components/interface/leftmenu.js":
/*!******************************************!*\
  !*** ./components/interface/leftmenu.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LeftMenu; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _leftmenu_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leftmenu/contact */ "./components/interface/leftmenu/contact.js");
var _jsxFileName = "/home/ubuntu/workspace/estudo/next/components/interface/leftmenu.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*global $ navigator*/



var LeftMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(LeftMenu, _Component);

  function LeftMenu() {
    _classCallCheck(this, LeftMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(LeftMenu).apply(this, arguments));
  }

  _createClass(LeftMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      $("leftmenu menuscroll menuitems > btn.submenu-has-numbers").on("click", function (e) {
        if ($(e.target).hasClass('disable')) {
          e.stopImmediatePropagation();
          return;
        } else if ($(e.target).attr('href')) {
          $('body').removeClass('left-menu'); //return $.fn.navigate(e.target, e);
        } else {
          $(this).find('submenu').toggleClass("open");
        }
      });
      $("header navtoggle, menuhider").on("click", function (e) {
        if (e.currentTarget.localName === "navtoggle" || $('body').hasClass('left-menu') || !$('html').hasClass('nprogress-busy')) {
          $('body').toggleClass('left-menu');
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("leftmenu", {
        className: "jsx-4267113797",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("sidebaruser", {
        className: "jsx-4267113797",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("photo", {
        className: "jsx-4267113797",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
        className: "jsx-4267113797",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Boa noite. \u2605"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("subtitle", {
        className: "jsx-4267113797",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Entre com seu login ou cadastre-se!")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("bgimg", {
        className: "jsx-4267113797",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("bgshadow", {
        className: "jsx-4267113797",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("menuscroll", {
        className: "jsx-4267113797",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("sidebarseparator", {
        className: "jsx-4267113797",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Acesso Restrito"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("menuitems", {
        className: "jsx-4267113797",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        href: "//admin.avn.systems",
        target: "_self",
        className: "jsx-4267113797",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-4267113797" + " " + "svg-inline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M144 112v51.6H48c-26.5 0-48 21.5-48 48v88.6c0 26.5 21.5 48 48 48h96v51.6c0 42.6 51.7 64.2 81.9 33.9l144-143.9c18.7-18.7 18.7-49.1 0-67.9l-144-144C195.8 48 144 69.3 144 112zm192 144L192 400v-99.7H48v-88.6h144V112l144 144zm80 192h-84c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h84c26.5 0 48-21.5 48-48V160c0-26.5-21.5-48-48-48h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96z",
        className: "jsx-4267113797" + " " + "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      })), "Entrar", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-4267113797" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-4267113797",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("btn", {
        href: "#",
        className: "jsx-4267113797" + " " + "disable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 576 512",
        className: "jsx-4267113797" + " " + "svg-inline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M288 208c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80zm0 128c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zM512 64H352V32c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v32H64C28.7 64 0 92.7 0 128v320c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zM256 32h64v96h-64V32zm128 448H192v-21.9c0-9 2.6-17.6 7.6-25 7.2-10.7 20.3-17.2 35-17.2 15.9 0 23.5 8 53.4 8s37.6-8 53.4-8c14.7 0 27.7 6.4 35 17.2 5 7.4 7.6 16 7.6 25V480zm160-32c0 17.6-14.4 32-32 32h-96v-21.9c0-15.9-4.8-30.6-13-42.8-13.8-20.5-37.3-31.3-61.5-31.3-22.2 0-27.8 8-53.4 8-25.6 0-31.2-8-53.4-8-24.2 0-47.7 10.8-61.5 31.3-8.2 12.2-13 27-13 42.8V480H64c-17.6 0-32-14.4-32-32V128c0-17.6 14.4-32 32-32h160v64h128V96h160c17.6 0 32 14.4 32 32v320z",
        className: "jsx-4267113797" + " " + "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      })), "Cadastrar-se", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        "aria-hidden": "true",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "jsx-4267113797" + " " + "svg-inline svg-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
        className: "jsx-4267113797",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("sidebardivider", {
        className: "jsx-4267113797",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("menusitemobile", {
        className: "jsx-4267113797",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("sidebarseparator", {
        className: "jsx-4267113797",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Website Menu"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4267113797" + " " + "menu-items menu-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("sidebardivider", {
        className: "jsx-4267113797",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "925935266",
        css: "leftmenu{top:0;width:100%;left:-340px;height:100vh;display:none;display:block;z-index:10000;position:fixed;max-width:330px;box-shadow:0 0 8px #000;background-color:#1c222e;-webkit-transition:left 350ms ease 0s;-moz-transition:left 350ms ease 0s;-ms-transition:left 350ms ease 0s;-o-transition:left 350ms ease 0s;-webkit-transition:left 350ms ease 0s;transition:left 350ms ease 0s;}leftmenu sidebaruser{box-shadow:0 0 6px 4px rgba(0,0,0,.3);touch-action:none;display:block;height:185px;}leftmenu sidebaruser photo{background-image:url(".concat("", "/static/images/icons/icon-192x192.png);}leftmenu sidebaruser photo{background-color:white;border:2px solid #00f9a6;background-position:center top;text-shadow:1px 1px 5px #000000;box-shadow:1px 1px 5px #000000;margin:15px 0px 0px 15px;background-size:cover;border-radius:50%;position:absolute;height:90px;width:90px;z-index:10;}leftmenu sidebaruser photo title{position:relative;min-width:285px;font-size:18px;display:block;color:#fff;top:105px;}leftmenu sidebaruser photo subtitle{position:relative;font-size:14px;display:block;width:290px;color:#ccc;top:100px;}leftmenu sidebaruser bgimg{background-image:url(").concat("", "/static/images/homepage/background-avn-1.jpg);}leftmenu sidebaruser bgimg{background-blend-mode:hard-light;background-position:center;background-color:#a7f7ff;background-size:cover;position:absolute;height:185px;width:100%;}leftmenu sidebaruser bgshadow{top:0;left:0;right:0;z-index:9;height:185px;position:absolute;background:linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,0) 20%,rgba(0,0,0,.1) 40%,rgba(0,0,0,.7) 70%,rgba(0,0,0,1) 100%);}leftmenu menuscroll{height:calc(100vh - 235px);touch-action:pan-y;overflow-x:hidden;position:fixed;overflow:auto;width:330px;}leftmenu menuscroll sidebarseparator:first-child{margin-top:20px;}leftmenu menuscroll sidebarseparator{text-transform:uppercase;margin-bottom:10px;padding-left:20px;margin-top:10px;font-weight:500;font-size:14px;display:block;color:#ccc;}left-enu menuscroll sidebardivider{border-top:solid 1px rgba(0,0,0,.2);border-bottom:solid 1px rgba(255,255,255,.03);margin-bottom:20px;margin-top:10px;display:block;}leftmenu menuscroll menuitems>btn,leftmenu menuscroll menucontact>a{-webkit-text-decoration:none;text-decoration:none;padding-left:25px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;line-height:55px;cursor:pointer;font-size:15px;display:block;color:#ccc;}leftmenu menuscroll menuitems>btn.disable,leftmenu menuscroll menucontact>a.disable{pointer-events:none;opacity:.5;}leftmenu menuscroll menuitems>btn .svg-inline,leftmenu menuscroll menucontact>a .svg-inline{vertical-align:-.125em;display:inline-block;overflow:visible;position:relative;margin-right:20px;min-width:25px;color:#b500ff;height:22px;width:auto;top:3px;}leftmenu menuscroll menuitems>btn .svg-inline.svg-circle,leftmenu menuscroll menucontact>a .svg-inline.svg-circle{color:#434752;float:right;height:5px;top:25px;}leftmenu menuscroll menuitems>btn .svg-inline.svg-terminal{color:#434752;float:right;left:-5px;top:18px;}leftmenu menuscroll menuitems>btn .svg-inline.svg-tv{left:-4px;}leftmenu menuscroll menuitems>btn .svg-inline.svg-stores{left:-5px;top:2px;}leftmenu menuscroll menuitems>btn .svg-inline.svg-restaurantes,leftmenu menuscroll menuitems>btn .svg-inline.svg-whatsapp,leftmenu menuscroll menuitems>btn .svg-inline.svg-phone,leftmenu menuscroll menuitems>btn .svg-inline.svg-mail,leftmenu menuscroll menuitems>btn .svg-inline.svg-star{left:-2px;}leftmenu menuscroll menuitems>btn:hover,leftmenu menuscroll menucontact>a:hover{background-color:#232b3a;color:white;}leftmenu menuscroll menuitems>btn:hover .svg-inline.svg-terminal,leftmenu menuscroll menuitems>btn:hover .svg-inline.svg-circle,leftmenu menuscroll menucontact>a:hover .svg-inline.svg-circle{color:white;}leftmenu menuscroll menuitems>btn>count{position:relative;font-weight:bold;font-size:18px;color:#c947ff;right:-25px;float:right;top:-2px;}leftmenu menuscroll menuitems>btn submenu{width:calc(100% + 25px);position:relative;display:none;left:-25px;}leftmenu menuscroll menuitems>btn submenu btn.disable{opacity:.5;}leftmenu menuscroll menuitems>btn submenu btn{padding-left:35px;}leftmenu menuscroll menuitems>btn submenu.open{display:grid;}leftmenu menuscroll menuitems>btn:hover submenu btn .svg-inline.svg-circle{color:#434752;}leftmenu menuscroll menuitems>btn:hover submenu btn:not(.disable):hover{background-color:#2f3a4e;color:white;}leftmenu menuscroll menuitems>btn:hover submenu btn:not(.disable):hover .svg-inline.svg-circle{color:white;}@media (max-width:940px){footer infos{display:none;}}@media (min-width:625px){leftmenu menusitemobile{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvY29tcG9uZW50cy9pbnRlcmZhY2UvbGVmdG1lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0QrQixBQUcyQixBQWtCZ0MsQUFNa0QsQUFHakUsQUFjTCxBQVFBLEFBUTZFLEFBRzlELEFBUzNCLEFBVXFCLEFBUVgsQUFHUyxBQVVXLEFBU2YsQUFXRCxBQUtHLEFBYVQsQUFNQSxBQU1KLEFBR0EsQUFRQSxBQUllLEFBTWIsQUFHTSxBQVNNLEFBTWIsQUFHTyxBQUdMLEFBR0MsQUFHVyxBQUliLEFBS0ssQUFLQSxNQXROTixBQXFFSixJQWlGWCxBQUdZLEFBUVosQ0E0QkEsQ0FsQkEsQUFrQ0EsQ0F2SVksQUE2SFosQUFlSSxBQUtBLENBN0VZLEFBTUEsQUFzRGhCLEVBL0dBLENBdEZnQixDQXdDSSxBQVFELEFBeUduQixBQW9CcUIsQUFrQnJCLEVBeEVlLENBakRELEVBNUNlLEFBa0dKLENBMERILENBN0ZDLEFBMkVQLEFBb0NBLENBOURELEFBTUQsQ0FsRVMsRUE3RU4sRUFzRUEsQUFpRGpCLEVBdkVrQixBQVVhLENBbEJaLENBcUlBLENBM0UrQixBQThDckMsQ0FOQSxBQTBCYixBQW9DQSxDQXhMc0IsSUFmTCxBQXFMQSxFQS9HSyxBQWtCQSxBQW1DRCxDQXFCckIsQ0FuRXNCLEFBNkR0QixDQTFGZ0IsQ0F2Qm1CLENBZWpCLENBa0VJLEFBbUVKLEtBNUtBLEFBcUxILENBdEtHLEdBaUNILENBU2MsQ0FrRVAsQ0FyRCtHLEFBa0JqSCxDQWhETCxDQXFDSSxBQWdHSCxFQVNoQixFQTVFcUIsQ0F6R0gsQ0FlRCxBQWlDSCxJQVJBLEVBcUlFLEVBckZJLENBaEVnQixBQXFEbEIsQUE4Q0ksQ0ExRXRCLEVBK0N1QixDQS9GSixBQWVuQixDQXlCQSxDQWdCMEIsR0F0QzFCLEFBMkphLEtBaEdHLENBV0csQ0FyQ25CLEVBd0VtQixBQW1EbkIsQ0E3S29CLEdBK0ZBLElBbEJwQixFQXJCc0IsRUFnQ0osRUFqRWlCLENBb0dqQixFQTFIVSxHQStGVixNQVBILEVBaENFLENBbUVELEtBM0JoQixHQVBBLElBeEY2QixBQXdEZCxBQW1FQSxJQXJHYyxPQW1DN0IsQUFtRVksSUF0QlMsSUF1QnJCLE1BNUgwQyxJQXNCaEIsR0FnRlAsZUFDQSxJQWhGRyxFQTBDdEIsU0F1Q2tCLENBdkdxQixNQXVCakIsT0FpRlAsV0FoRkMsQUFpRmhCLFdBeEdzQyxDQXdCdkIsV0FDQSxXQUNmLFdBekJxQyxpQ0FDSCxvRUFDbEMiLCJmaWxlIjoiL2hvbWUvdWJ1bnR1L3dvcmtzcGFjZS9lc3R1ZG8vbmV4dC9jb21wb25lbnRzL2ludGVyZmFjZS9sZWZ0bWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qZ2xvYmFsICQgbmF2aWdhdG9yKi9cbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExlZnRNZW51Q29udGFjdDEgZnJvbSAnLi9sZWZ0bWVudS9jb250YWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZWZ0TWVudSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgICAgICAkKFwibGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4uc3VibWVudS1oYXMtbnVtYmVyc1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmICgkKGUudGFyZ2V0KS5oYXNDbGFzcygnZGlzYWJsZScpKSB7XG4gICAgICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICgkKGUudGFyZ2V0KS5hdHRyKCdocmVmJykpIHtcbiAgICAgICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2xlZnQtbWVudScpO1xuICAgICAgICAgICAgICAgIC8vcmV0dXJuICQuZm4ubmF2aWdhdGUoZS50YXJnZXQsIGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ3N1Ym1lbnUnKS50b2dnbGVDbGFzcyhcIm9wZW5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICQoXCJoZWFkZXIgbmF2dG9nZ2xlLCBtZW51aGlkZXJcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoKGUuY3VycmVudFRhcmdldC5sb2NhbE5hbWUgPT09IFwibmF2dG9nZ2xlXCIgfHwgJCgnYm9keScpLmhhc0NsYXNzKCdsZWZ0LW1lbnUnKSkgfHwgISQoJ2h0bWwnKS5oYXNDbGFzcygnbnByb2dyZXNzLWJ1c3knKSkge1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnbGVmdC1tZW51Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGxlZnRtZW51PlxuICAgIFx0XHQ8c2lkZWJhcnVzZXI+XG4gICAgXHQgICAgICAgIDxwaG90bz5cbiAgICBcdCAgICAgICAgICAgIDx0aXRsZT5Cb2Egbm9pdGUuIOKYhTwvdGl0bGU+XG4gICAgXHQgICAgICAgICAgICA8c3VidGl0bGU+RW50cmUgY29tIHNldSBsb2dpbiBvdSBjYWRhc3RyZS1zZSE8L3N1YnRpdGxlPlxuICAgIFx0ICAgICAgICA8L3Bob3RvPlxuICAgIFx0XHQgICAgPGJnaW1nPjwvYmdpbWc+XG4gICAgXHRcdCAgICA8YmdzaGFkb3c+PC9iZ3NoYWRvdz5cbiAgICBcdFx0PC9zaWRlYmFydXNlcj5cbiAgICBcdFx0PG1lbnVzY3JvbGw+XG4gICAgICAgICAgICAgICAgPHNpZGViYXJzZXBhcmF0b3I+QWNlc3NvIFJlc3RyaXRvPC9zaWRlYmFyc2VwYXJhdG9yPlxuICAgICAgICAgICAgICAgIDxtZW51aXRlbXM+XG4gICAgICAgICAgICAgICAgICAgIDxidG4gaHJlZj1cIi8vYWRtaW4uYXZuLnN5c3RlbXNcIiB0YXJnZXQ9XCJfc2VsZlwiPlxuICAgICAgICAgICAgICAgICAgICBcdDxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTQ0IDExMnY1MS42SDQ4Yy0yNi41IDAtNDggMjEuNS00OCA0OHY4OC42YzAgMjYuNSAyMS41IDQ4IDQ4IDQ4aDk2djUxLjZjMCA0Mi42IDUxLjcgNjQuMiA4MS45IDMzLjlsMTQ0LTE0My45YzE4LjctMTguNyAxOC43LTQ5LjEgMC02Ny45bC0xNDQtMTQ0QzE5NS44IDQ4IDE0NCA2OS4zIDE0NCAxMTJ6bTE5MiAxNDRMMTkyIDQwMHYtOTkuN0g0OHYtODguNmgxNDRWMTEybDE0NCAxNDR6bTgwIDE5MmgtODRjLTYuNiAwLTEyLTUuNC0xMi0xMnYtMjRjMC02LjYgNS40LTEyIDEyLTEyaDg0YzI2LjUgMCA0OC0yMS41IDQ4LTQ4VjE2MGMwLTI2LjUtMjEuNS00OC00OC00OGgtODRjLTYuNiAwLTEyLTUuNC0xMi0xMlY3NmMwLTYuNiA1LjQtMTIgMTItMTJoODRjNTMgMCA5NiA0MyA5NiA5NnYxOTJjMCA1My00MyA5Ni05NiA5NnpcIiBjbGFzc05hbWU9XCJcIj48L3BhdGg+PC9zdmc+RW50cmFyPHN2ZyBjbGFzc05hbWU9XCJzdmctaW5saW5lIHN2Zy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6XCI+PC9wYXRoPjwvc3ZnPjwvYnRuPlxuICAgICAgICAgICAgICAgICAgICA8YnRuIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZGlzYWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICBcdDxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1NzYgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjg4IDIwOGMtNDQuMiAwLTgwIDM1LjgtODAgODBzMzUuOCA4MCA4MCA4MCA4MC0zNS44IDgwLTgwLTM1LjgtODAtODAtODB6bTAgMTI4Yy0yNi41IDAtNDgtMjEuNS00OC00OHMyMS41LTQ4IDQ4LTQ4IDQ4IDIxLjUgNDggNDgtMjEuNSA0OC00OCA0OHpNNTEyIDY0SDM1MlYzMmMwLTE3LjctMTQuMy0zMi0zMi0zMmgtNjRjLTE3LjcgMC0zMiAxNC4zLTMyIDMydjMySDY0QzI4LjcgNjQgMCA5Mi43IDAgMTI4djMyMGMwIDM1LjMgMjguNyA2NCA2NCA2NGg0NDhjMzUuMyAwIDY0LTI4LjcgNjQtNjRWMTI4YzAtMzUuMy0yOC43LTY0LTY0LTY0ek0yNTYgMzJoNjR2OTZoLTY0VjMyem0xMjggNDQ4SDE5MnYtMjEuOWMwLTkgMi42LTE3LjYgNy42LTI1IDcuMi0xMC43IDIwLjMtMTcuMiAzNS0xNy4yIDE1LjkgMCAyMy41IDggNTMuNCA4czM3LjYtOCA1My40LThjMTQuNyAwIDI3LjcgNi40IDM1IDE3LjIgNSA3LjQgNy42IDE2IDcuNiAyNVY0ODB6bTE2MC0zMmMwIDE3LjYtMTQuNCAzMi0zMiAzMmgtOTZ2LTIxLjljMC0xNS45LTQuOC0zMC42LTEzLTQyLjgtMTMuOC0yMC41LTM3LjMtMzEuMy02MS41LTMxLjMtMjIuMiAwLTI3LjggOC01My40IDgtMjUuNiAwLTMxLjItOC01My40LTgtMjQuMiAwLTQ3LjcgMTAuOC02MS41IDMxLjMtOC4yIDEyLjItMTMgMjctMTMgNDIuOFY0ODBINjRjLTE3LjYgMC0zMi0xNC40LTMyLTMyVjEyOGMwLTE3LjYgMTQuNC0zMiAzMi0zMmgxNjB2NjRoMTI4Vjk2aDE2MGMxNy42IDAgMzIgMTQuNCAzMiAzMnYzMjB6XCIgY2xhc3NOYW1lPVwiXCI+PC9wYXRoPjwvc3ZnPkNhZGFzdHJhci1zZTxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICAgICAgICAgICAgICA8L21lbnVpdGVtcz5cbiAgICAgICAgICAgICAgICA8c2lkZWJhcmRpdmlkZXI+PC9zaWRlYmFyZGl2aWRlcj5cbiAgICBcdFx0XHQ8bWVudXNpdGVtb2JpbGU+XG4gICAgXHQgICAgICAgICAgICA8c2lkZWJhcnNlcGFyYXRvcj5XZWJzaXRlIE1lbnU8L3NpZGViYXJzZXBhcmF0b3I+XG4gICAgXHQgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtaXRlbXMgbWVudS1pY29uc1wiPlxuICAgIFx0ICAgICAgICAgICAgICAgIFxuICAgIFx0ICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXHQ8c2lkZWJhcmRpdmlkZXI+PC9zaWRlYmFyZGl2aWRlcj5cbiAgICAgICAgICAgICAgICA8L21lbnVzaXRlbW9iaWxlPlxuICAgICAgICAgICAgPC9tZW51c2Nyb2xsPlxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSB7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0zNDBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDAwO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzMwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA4cHggIzAwMDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFjMjIyZTtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBsZWZ0IDM1MG1zIGVhc2UgMHM7XG4gICAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogbGVmdCAzNTBtcyBlYXNlIDBzO1xuICAgICAgICAgICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogbGVmdCAzNTBtcyBlYXNlIDBzO1xuICAgICAgICAgICAgICAgICAgICAtby10cmFuc2l0aW9uOiBsZWZ0IDM1MG1zIGVhc2UgMHM7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGxlZnQgMzUwbXMgZWFzZSAwcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgc2lkZWJhcnVzZXIge1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgNnB4IDRweCByZ2JhKDAsMCwwLC4zKTtcbiAgICAgICAgICAgICAgICAgICAgdG91Y2gtYWN0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxODVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgc2lkZWJhcnVzZXIgcGhvdG8ge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vc3RhdGljL2ltYWdlcy9pY29ucy9pY29uLTE5MngxOTIucG5nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgc2lkZWJhcnVzZXIgcGhvdG8ge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzAwZjlhNjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggNXB4ICMwMDAwMDA7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4ICMwMDAwMDA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTVweCAwcHggMHB4IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgc2lkZWJhcnVzZXIgcGhvdG8gdGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjg1cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDEwNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciBwaG90byBzdWJ0aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI5MHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2NjYztcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxMDBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgc2lkZWJhcnVzZXIgYmdpbWcge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vc3RhdGljL2ltYWdlcy9ob21lcGFnZS9iYWNrZ3JvdW5kLWF2bi0xLmpwZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IHNpZGViYXJ1c2VyIGJnaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBoYXJkLWxpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhN2Y3ZmY7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxODVweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IHNpZGViYXJ1c2VyIGJnc2hhZG93IHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxODVweDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLHJnYmEoMCwwLDAsMCkgMCxyZ2JhKDAsMCwwLDApIDIwJSxyZ2JhKDAsMCwwLC4xKSA0MCUscmdiYSgwLDAsMCwuNykgNzAlLHJnYmEoMCwwLDAsMSkgMTAwJSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMzVweCk7XG4gICAgICAgICAgICAgICAgICAgIHRvdWNoLWFjdGlvbjogcGFuLXk7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMzMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIHNpZGViYXJzZXBhcmF0b3I6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIHNpZGViYXJzZXBhcmF0b3Ige1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjY2NjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0LWVudSBtZW51c2Nyb2xsIHNpZGViYXJkaXZpZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogc29saWQgMXB4IHJnYmEoMCwwLDAsLjIpO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgyNTUsMjU1LDI1NSwuMDMpO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4sXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51Y29udGFjdCA+IGEge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1NXB4O1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjY2NjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0bi5kaXNhYmxlLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWNvbnRhY3QgPiBhLmRpc2FibGUge1xuICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWNvbnRhY3QgPiBhIC5zdmctaW5saW5lIHtcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IC0uMTI1ZW07XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYjUwMGZmO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDNweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gLnN2Zy1pbmxpbmUuc3ZnLWNpcmNsZSxcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVjb250YWN0ID4gYSAuc3ZnLWlubGluZS5zdmctY2lyY2xlIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0MzQ3NTI7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMjVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gLnN2Zy1pbmxpbmUuc3ZnLXRlcm1pbmFsIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0MzQ3NTI7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTVweDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxOHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biAuc3ZnLWlubGluZS5zdmctdHYge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtNHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biAuc3ZnLWlubGluZS5zdmctc3RvcmVzIHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTVweDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAycHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLnN2Zy1yZXN0YXVyYW50ZXMsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gLnN2Zy1pbmxpbmUuc3ZnLXdoYXRzYXBwLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLnN2Zy1waG9uZSxcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biAuc3ZnLWlubGluZS5zdmctbWFpbCxcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biAuc3ZnLWlubGluZS5zdmctc3RhciB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0ycHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuOmhvdmVyLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWNvbnRhY3QgPiBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMmIzYTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0bjpob3ZlciAuc3ZnLWlubGluZS5zdmctdGVybWluYWwsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG46aG92ZXIgLnN2Zy1pbmxpbmUuc3ZnLWNpcmNsZSxcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVjb250YWN0ID4gYTpob3ZlciAuc3ZnLWlubGluZS5zdmctY2lyY2xlIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biA+IGNvdW50IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2M5NDdmZjtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC0yNXB4O1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gc3VibWVudSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAyNXB4KTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMjVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gc3VibWVudSBidG4uZGlzYWJsZSB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biBzdWJtZW51IGJ0biB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gc3VibWVudS5vcGVuIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG46aG92ZXIgc3VibWVudSBidG4gLnN2Zy1pbmxpbmUuc3ZnLWNpcmNsZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDM0NzUyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0bjpob3ZlciBzdWJtZW51IGJ0bjpub3QoLmRpc2FibGUpOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJmM2E0ZTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0bjpob3ZlciBzdWJtZW51IGJ0bjpub3QoLmRpc2FibGUpOmhvdmVyIC5zdmctaW5saW5lLnN2Zy1jaXJjbGUge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NDBweCkge1xuICAgICAgICAgICAgICAgICAgICBmb290ZXIgaW5mb3Mge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNjI1cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNpdGVtb2JpbGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgICAgICBib2R5LmxlZnQtbWVudSBsZWZ0bWVudSB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzOTlweCkge1xuICAgICAgICAgICAgICAgICAgICBib2R5LmxlZnQtbWVudSBsZWZ0bWVudSwgbGVmdG1lbnUgbWVudXNjcm9sbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNjlweCkhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjYwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgXHQ8L2xlZnRtZW51PlxuICAgICl9XG59Il19 */\n/*@ sourceURL=/home/ubuntu/workspace/estudo/next/components/interface/leftmenu.js */"),
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "918551822",
        css: "body.left-menu leftmenu{left:0;}@media (max-width:399px){body.left-menu leftmenu,leftmenu menuscroll{width:calc(100% - 69px)!important;max-width:330px;min-width:260px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvY29tcG9uZW50cy9pbnRlcmZhY2UvbGVmdG1lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa1IrQixBQUc0QixBQUsrQixPQUoxQywyQkFLd0IsZ0JBQ0EsZ0JBQ3BCIiwiZmlsZSI6Ii9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvY29tcG9uZW50cy9pbnRlcmZhY2UvbGVmdG1lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKmdsb2JhbCAkIG5hdmlnYXRvciovXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMZWZ0TWVudUNvbnRhY3QxIGZyb20gJy4vbGVmdG1lbnUvY29udGFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVmdE1lbnUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICAgICAgJChcImxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuLnN1Ym1lbnUtaGFzLW51bWJlcnNcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoJ2Rpc2FibGUnKSkge1xuICAgICAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoJChlLnRhcmdldCkuYXR0cignaHJlZicpKSB7XG4gICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdsZWZ0LW1lbnUnKTtcbiAgICAgICAgICAgICAgICAvL3JldHVybiAkLmZuLm5hdmlnYXRlKGUudGFyZ2V0LCBlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCdzdWJtZW51JykudG9nZ2xlQ2xhc3MoXCJvcGVuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAkKFwiaGVhZGVyIG5hdnRvZ2dsZSwgbWVudWhpZGVyXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYgKChlLmN1cnJlbnRUYXJnZXQubG9jYWxOYW1lID09PSBcIm5hdnRvZ2dsZVwiIHx8ICQoJ2JvZHknKS5oYXNDbGFzcygnbGVmdC1tZW51JykpIHx8ICEkKCdodG1sJykuaGFzQ2xhc3MoJ25wcm9ncmVzcy1idXN5JykpIHtcbiAgICAgICAgICAgICAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ2xlZnQtbWVudScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxsZWZ0bWVudT5cbiAgICBcdFx0PHNpZGViYXJ1c2VyPlxuICAgIFx0ICAgICAgICA8cGhvdG8+XG4gICAgXHQgICAgICAgICAgICA8dGl0bGU+Qm9hIG5vaXRlLiDimIU8L3RpdGxlPlxuICAgIFx0ICAgICAgICAgICAgPHN1YnRpdGxlPkVudHJlIGNvbSBzZXUgbG9naW4gb3UgY2FkYXN0cmUtc2UhPC9zdWJ0aXRsZT5cbiAgICBcdCAgICAgICAgPC9waG90bz5cbiAgICBcdFx0ICAgIDxiZ2ltZz48L2JnaW1nPlxuICAgIFx0XHQgICAgPGJnc2hhZG93PjwvYmdzaGFkb3c+XG4gICAgXHRcdDwvc2lkZWJhcnVzZXI+XG4gICAgXHRcdDxtZW51c2Nyb2xsPlxuICAgICAgICAgICAgICAgIDxzaWRlYmFyc2VwYXJhdG9yPkFjZXNzbyBSZXN0cml0bzwvc2lkZWJhcnNlcGFyYXRvcj5cbiAgICAgICAgICAgICAgICA8bWVudWl0ZW1zPlxuICAgICAgICAgICAgICAgICAgICA8YnRuIGhyZWY9XCIvL2FkbWluLmF2bi5zeXN0ZW1zXCIgdGFyZ2V0PVwiX3NlbGZcIj5cbiAgICAgICAgICAgICAgICAgICAgXHQ8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTE0NCAxMTJ2NTEuNkg0OGMtMjYuNSAwLTQ4IDIxLjUtNDggNDh2ODguNmMwIDI2LjUgMjEuNSA0OCA0OCA0OGg5NnY1MS42YzAgNDIuNiA1MS43IDY0LjIgODEuOSAzMy45bDE0NC0xNDMuOWMxOC43LTE4LjcgMTguNy00OS4xIDAtNjcuOWwtMTQ0LTE0NEMxOTUuOCA0OCAxNDQgNjkuMyAxNDQgMTEyem0xOTIgMTQ0TDE5MiA0MDB2LTk5LjdINDh2LTg4LjZoMTQ0VjExMmwxNDQgMTQ0em04MCAxOTJoLTg0Yy02LjYgMC0xMi01LjQtMTItMTJ2LTI0YzAtNi42IDUuNC0xMiAxMi0xMmg4NGMyNi41IDAgNDgtMjEuNSA0OC00OFYxNjBjMC0yNi41LTIxLjUtNDgtNDgtNDhoLTg0Yy02LjYgMC0xMi01LjQtMTItMTJWNzZjMC02LjYgNS40LTEyIDEyLTEyaDg0YzUzIDAgOTYgNDMgOTYgOTZ2MTkyYzAgNTMtNDMgOTYtOTYgOTZ6XCIgY2xhc3NOYW1lPVwiXCI+PC9wYXRoPjwvc3ZnPkVudHJhcjxzdmcgY2xhc3NOYW1lPVwic3ZnLWlubGluZSBzdmctY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4elwiPjwvcGF0aD48L3N2Zz48L2J0bj5cbiAgICAgICAgICAgICAgICAgICAgPGJ0biBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImRpc2FibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgXHQ8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTc2IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI4OCAyMDhjLTQ0LjIgMC04MCAzNS44LTgwIDgwczM1LjggODAgODAgODAgODAtMzUuOCA4MC04MC0zNS44LTgwLTgwLTgwem0wIDEyOGMtMjYuNSAwLTQ4LTIxLjUtNDgtNDhzMjEuNS00OCA0OC00OCA0OCAyMS41IDQ4IDQ4LTIxLjUgNDgtNDggNDh6TTUxMiA2NEgzNTJWMzJjMC0xNy43LTE0LjMtMzItMzItMzJoLTY0Yy0xNy43IDAtMzIgMTQuMy0zMiAzMnYzMkg2NEMyOC43IDY0IDAgOTIuNyAwIDEyOHYzMjBjMCAzNS4zIDI4LjcgNjQgNjQgNjRoNDQ4YzM1LjMgMCA2NC0yOC43IDY0LTY0VjEyOGMwLTM1LjMtMjguNy02NC02NC02NHpNMjU2IDMyaDY0djk2aC02NFYzMnptMTI4IDQ0OEgxOTJ2LTIxLjljMC05IDIuNi0xNy42IDcuNi0yNSA3LjItMTAuNyAyMC4zLTE3LjIgMzUtMTcuMiAxNS45IDAgMjMuNSA4IDUzLjQgOHMzNy42LTggNTMuNC04YzE0LjcgMCAyNy43IDYuNCAzNSAxNy4yIDUgNy40IDcuNiAxNiA3LjYgMjVWNDgwem0xNjAtMzJjMCAxNy42LTE0LjQgMzItMzIgMzJoLTk2di0yMS45YzAtMTUuOS00LjgtMzAuNi0xMy00Mi44LTEzLjgtMjAuNS0zNy4zLTMxLjMtNjEuNS0zMS4zLTIyLjIgMC0yNy44IDgtNTMuNCA4LTI1LjYgMC0zMS4yLTgtNTMuNC04LTI0LjIgMC00Ny43IDEwLjgtNjEuNSAzMS4zLTguMiAxMi4yLTEzIDI3LTEzIDQyLjhWNDgwSDY0Yy0xNy42IDAtMzItMTQuNC0zMi0zMlYxMjhjMC0xNy42IDE0LjQtMzIgMzItMzJoMTYwdjY0aDEyOFY5NmgxNjBjMTcuNiAwIDMyIDE0LjQgMzIgMzJ2MzIwelwiIGNsYXNzTmFtZT1cIlwiPjwvcGF0aD48L3N2Zz5DYWRhc3RyYXItc2U8c3ZnIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUgc3ZnLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHpcIj48L3BhdGg+PC9zdmc+PC9idG4+XG4gICAgICAgICAgICAgICAgPC9tZW51aXRlbXM+XG4gICAgICAgICAgICAgICAgPHNpZGViYXJkaXZpZGVyPjwvc2lkZWJhcmRpdmlkZXI+XG4gICAgXHRcdFx0PG1lbnVzaXRlbW9iaWxlPlxuICAgIFx0ICAgICAgICAgICAgPHNpZGViYXJzZXBhcmF0b3I+V2Vic2l0ZSBNZW51PC9zaWRlYmFyc2VwYXJhdG9yPlxuICAgIFx0ICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWl0ZW1zIG1lbnUtaWNvbnNcIj5cbiAgICBcdCAgICAgICAgICAgICAgICBcbiAgICBcdCAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFx0PHNpZGViYXJkaXZpZGVyPjwvc2lkZWJhcmRpdmlkZXI+XG4gICAgICAgICAgICAgICAgPC9tZW51c2l0ZW1vYmlsZT5cbiAgICAgICAgICAgIDwvbWVudXNjcm9sbD5cbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUge1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMzQwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDAwMDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDMzMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgOHB4ICMwMDA7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYzIyMmU7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbGVmdCAzNTBtcyBlYXNlIDBzO1xuICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGxlZnQgMzUwbXMgZWFzZSAwcztcbiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IGxlZnQgMzUwbXMgZWFzZSAwcztcbiAgICAgICAgICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogbGVmdCAzNTBtcyBlYXNlIDBzO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBsZWZ0IDM1MG1zIGVhc2UgMHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IHNpZGViYXJ1c2VyIHtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDZweCA0cHggcmdiYSgwLDAsMCwuMyk7XG4gICAgICAgICAgICAgICAgICAgIHRvdWNoLWFjdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTg1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IHNpZGViYXJ1c2VyIHBob3RvIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L3N0YXRpYy9pbWFnZXMvaWNvbnMvaWNvbi0xOTJ4MTkyLnBuZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IHNpZGViYXJ1c2VyIHBob3RvIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMGY5YTY7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDVweCAjMDAwMDAwO1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAjMDAwMDAwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDE1cHggMHB4IDBweCAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTBweDtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IHNpZGViYXJ1c2VyIHBob3RvIHRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDI4NXB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxMDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgc2lkZWJhcnVzZXIgcGhvdG8gc3VidGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyOTBweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNjY2M7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTAwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IHNpZGViYXJ1c2VyIGJnaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L3N0YXRpYy9pbWFnZXMvaG9tZXBhZ2UvYmFja2dyb3VuZC1hdm4tMS5qcGcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciBiZ2ltZyB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogaGFyZC1saWdodDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTdmN2ZmO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTg1cHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBzaWRlYmFydXNlciBiZ3NoYWRvdyB7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTg1cHg7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSxyZ2JhKDAsMCwwLDApIDAscmdiYSgwLDAsMCwwKSAyMCUscmdiYSgwLDAsMCwuMSkgNDAlLHJnYmEoMCwwLDAsLjcpIDcwJSxyZ2JhKDAsMCwwLDEpIDEwMCUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjM1cHgpO1xuICAgICAgICAgICAgICAgICAgICB0b3VjaC1hY3Rpb246IHBhbi15O1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMzBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBzaWRlYmFyc2VwYXJhdG9yOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBzaWRlYmFyc2VwYXJhdG9yIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2NjYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdC1lbnUgbWVudXNjcm9sbCBzaWRlYmFyZGl2aWRlciB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCByZ2JhKDAsMCwwLC4yKTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMjU1LDI1NSwyNTUsLjAzKTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWNvbnRhY3QgPiBhIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNTVweDtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2NjYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4uZGlzYWJsZSxcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVjb250YWN0ID4gYS5kaXNhYmxlIHtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biAuc3ZnLWlubGluZSxcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVjb250YWN0ID4gYSAuc3ZnLWlubGluZSB7XG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiAtLjEyNWVtO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2I1MDBmZjtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAzcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLnN2Zy1jaXJjbGUsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51Y29udGFjdCA+IGEgLnN2Zy1pbmxpbmUuc3ZnLWNpcmNsZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDM0NzUyO1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDI1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLnN2Zy10ZXJtaW5hbCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDM0NzUyO1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IC01cHg7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMThweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gLnN2Zy1pbmxpbmUuc3ZnLXR2IHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTRweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gLnN2Zy1pbmxpbmUuc3ZnLXN0b3JlcyB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IC01cHg7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biAuc3ZnLWlubGluZS5zdmctcmVzdGF1cmFudGVzLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIC5zdmctaW5saW5lLnN2Zy13aGF0c2FwcCxcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0biAuc3ZnLWlubGluZS5zdmctcGhvbmUsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gLnN2Zy1pbmxpbmUuc3ZnLW1haWwsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gLnN2Zy1pbmxpbmUuc3ZnLXN0YXIge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVpdGVtcyA+IGJ0bjpob3ZlcixcbiAgICAgICAgICAgICAgICBsZWZ0bWVudSBtZW51c2Nyb2xsIG1lbnVjb250YWN0ID4gYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzJiM2E7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG46aG92ZXIgLnN2Zy1pbmxpbmUuc3ZnLXRlcm1pbmFsLFxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuOmhvdmVyIC5zdmctaW5saW5lLnN2Zy1jaXJjbGUsXG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51Y29udGFjdCA+IGE6aG92ZXIgLnN2Zy1pbmxpbmUuc3ZnLWNpcmNsZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gPiBjb3VudCB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNjOTQ3ZmY7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAtMjVweDtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB0b3A6IC0ycHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIHN1Ym1lbnUge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlICsgMjVweCk7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTI1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIHN1Ym1lbnUgYnRuLmRpc2FibGUge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG4gc3VibWVudSBidG4ge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuIHN1Ym1lbnUub3BlbiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzY3JvbGwgbWVudWl0ZW1zID4gYnRuOmhvdmVyIHN1Ym1lbnUgYnRuIC5zdmctaW5saW5lLnN2Zy1jaXJjbGUge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQzNDc1MjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG46aG92ZXIgc3VibWVudSBidG46bm90KC5kaXNhYmxlKTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyZjNhNGU7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdG1lbnUgbWVudXNjcm9sbCBtZW51aXRlbXMgPiBidG46aG92ZXIgc3VibWVudSBidG46bm90KC5kaXNhYmxlKTpob3ZlciAuc3ZnLWlubGluZS5zdmctY2lyY2xlIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTQwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyIGluZm9zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDYyNXB4KSB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnRtZW51IG1lbnVzaXRlbW9iaWxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICAgICAgYm9keS5sZWZ0LW1lbnUgbGVmdG1lbnUge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMzk5cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keS5sZWZ0LW1lbnUgbGVmdG1lbnUsIGxlZnRtZW51IG1lbnVzY3JvbGwge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDY5cHgpIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDI2MHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgIFx0PC9sZWZ0bWVudT5cbiAgICApfVxufSJdfQ== */\n/*@ sourceURL=/home/ubuntu/workspace/estudo/next/components/interface/leftmenu.js */",
        __self: this
      }));
    }
  }]);

  return LeftMenu;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ })

})
//# sourceMappingURL=_error.js.b569a8424db2c872f139.hot-update.js.map