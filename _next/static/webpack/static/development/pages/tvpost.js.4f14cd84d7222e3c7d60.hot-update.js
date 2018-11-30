webpackHotUpdate("static/development/pages/tvpost.js",{

/***/ "./pages/tvpost.js":
/*!*************************!*\
  !*** ./pages/tvpost.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/interface */ "./components/interface.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/home/ubuntu/workspace/estudo/next/pages/tvpost.js";



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var TvPost = function TvPost(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_interface__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: 'Batman TV Shows: ' + props.show.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: "jsx-2371066384",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.show.name), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "jsx-2371066384",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.show.summary.replace(/<[/]?p>/g, '')), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: props.show.image.medium,
    className: "jsx-2371066384",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "javascript:history.back()",
    className: "jsx-2371066384" + " " + 'btn btn-light',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Go back"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    styleId: "2371066384",
    css: "img.jsx-2371066384{margin-bottom:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS93b3Jrc3BhY2UvZXN0dWRvL25leHQvcGFnZXMvdHZwb3N0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdvQixBQUdvQyxtQkFDdkIiLCJmaWxlIjoiL2hvbWUvdWJ1bnR1L3dvcmtzcGFjZS9lc3R1ZG8vbmV4dC9wYWdlcy90dnBvc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW50ZXJmYWNlIGZyb20gJy4uL2NvbXBvbmVudHMvaW50ZXJmYWNlJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcblxuY29uc3QgVHZQb3N0ID0gKHByb3BzKSA9PiAoXG4gICAgPEludGVyZmFjZSB0aXRsZT17J0JhdG1hbiBUViBTaG93czogJytwcm9wcy5zaG93Lm5hbWV9PlxuXG4gICAgICAgIDxoMT57cHJvcHMuc2hvdy5uYW1lfTwvaDE+XG4gICAgICAgIDxwPntwcm9wcy5zaG93LnN1bW1hcnkucmVwbGFjZSgvPFsvXT9wPi9nLCAnJyl9PC9wPlxuICAgICAgICA8aW1nIHNyYz17cHJvcHMuc2hvdy5pbWFnZS5tZWRpdW19Lz5cbiAgICAgICAgXG4gICAgICAgIDxhIGhyZWY9J2phdmFzY3JpcHQ6aGlzdG9yeS5iYWNrKCknIGNsYXNzTmFtZT0nYnRuIGJ0bi1saWdodCc+R28gYmFjazwvYT5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9JbnRlcmZhY2U+XG4pXG5cblR2UG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoY29udGV4dCkge1xuICBjb25zdCB7IGlkIH0gPSBjb250ZXh0LnF1ZXJ5XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzLyR7aWR9YClcbiAgbGV0IHNob3cgPSBhd2FpdCByZXMuanNvbigpXG4gIHNob3cubmFtZSA9PT0gJ05vdCBGb3VuZCcgPyBzaG93ID0ge25hbWU6XCJOb3QgRm91bmRcIiwgc3VtbWFyeTonTm90IEZvdW5kJywgaW1hZ2U6e21lZGl1bTonJ319IDogMDtcblxuICBjb25zb2xlLmxvZyhgRmV0Y2hlZCBzaG93OiAke3Nob3cubmFtZX1gKVxuXG4gIHJldHVybiB7IHNob3cgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUdlBvc3QiXX0= */\n/*@ sourceURL=/home/ubuntu/workspace/estudo/next/pages/tvpost.js */",
    __self: this
  }));
};

TvPost.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var id, res, show;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = context.query.id;
            _context.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("https://api.tvmaze.com/shows/".concat(id));

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            show = _context.sent;
            show.name === 'Not Found' ? show = {
              name: "Not Found",
              summary: 'Not Found',
              image: {
                medium: ''
              }
            } : 0;
            console.log("Fetched show: ".concat(show.name));
            return _context.abrupt("return", {
              show: show
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (TvPost);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/tvpost")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=tvpost.js.4f14cd84d7222e3c7d60.hot-update.js.map