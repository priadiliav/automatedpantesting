"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/VulnerabilityItem.tsx":
/*!**************************************************!*\
  !*** ./src/app/components/VulnerabilityItem.tsx ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst VulnerabilityItem = (param)=>{\n    let { vulnerability } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4 rounded-md shadow-md bg-pink-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"text-lg font-semibold text-black\",\n                children: vulnerability.name\n            }, void 0, false, {\n                fileName: \"C:\\\\Study\\\\Hackaton\\\\client\\\\src\\\\app\\\\components\\\\VulnerabilityItem.tsx\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-sm text-black\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \"Severity:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Study\\\\Hackaton\\\\client\\\\src\\\\app\\\\components\\\\VulnerabilityItem.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 17\n                    }, undefined),\n                    \" \",\n                    vulnerability.severity\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Study\\\\Hackaton\\\\client\\\\src\\\\app\\\\components\\\\VulnerabilityItem.tsx\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-sm text-black\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \"Script:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Study\\\\Hackaton\\\\client\\\\src\\\\app\\\\components\\\\VulnerabilityItem.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 17\n                    }, undefined),\n                    \" \",\n                    vulnerability.script\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Study\\\\Hackaton\\\\client\\\\src\\\\app\\\\components\\\\VulnerabilityItem.tsx\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-sm text-black\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \"Log:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Study\\\\Hackaton\\\\client\\\\src\\\\app\\\\components\\\\VulnerabilityItem.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, undefined),\n                    \" \",\n                    vulnerability.log\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Study\\\\Hackaton\\\\client\\\\src\\\\app\\\\components\\\\VulnerabilityItem.tsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Study\\\\Hackaton\\\\client\\\\src\\\\app\\\\components\\\\VulnerabilityItem.tsx\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, undefined);\n};\n_c = VulnerabilityItem;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VulnerabilityItem);\nvar _c;\n$RefreshReg$(_c, \"VulnerabilityItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9WdWxuZXJhYmlsaXR5SXRlbS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFXMUIsTUFBTUMsb0JBQXNEO1FBQUMsRUFBRUMsYUFBYSxFQUFFO0lBQzFFLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQW9DRixjQUFjSSxJQUFJOzs7Ozs7MEJBQ3BFLDhEQUFDQztnQkFBRUgsV0FBVTs7a0NBQ1QsOERBQUNJO2tDQUFPOzs7Ozs7b0JBQWtCO29CQUFFTixjQUFjTyxRQUFROzs7Ozs7OzBCQUV0RCw4REFBQ0Y7Z0JBQUVILFdBQVU7O2tDQUNULDhEQUFDSTtrQ0FBTzs7Ozs7O29CQUFnQjtvQkFBRU4sY0FBY1EsTUFBTTs7Ozs7OzswQkFFbEQsOERBQUNIO2dCQUFFSCxXQUFVOztrQ0FDVCw4REFBQ0k7a0NBQU87Ozs7OztvQkFBYTtvQkFBRU4sY0FBY1MsR0FBRzs7Ozs7Ozs7Ozs7OztBQUl4RDtLQWZNVjtBQWlCTixpRUFBZUEsaUJBQWlCQSxFQUFDIiwic291cmNlcyI6WyJDOlxcU3R1ZHlcXEhhY2thdG9uXFxjbGllbnRcXHNyY1xcYXBwXFxjb21wb25lbnRzXFxWdWxuZXJhYmlsaXR5SXRlbS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIFZ1bG5lcmFiaWxpdHlJdGVtUHJvcHMge1xyXG4gICAgdnVsbmVyYWJpbGl0eToge1xyXG4gICAgICAgIG5hbWU6IHN0cmluZztcclxuICAgICAgICBzZXZlcml0eTogc3RyaW5nO1xyXG4gICAgICAgIHNjcmlwdDogc3RyaW5nO1xyXG4gICAgICAgIGxvZzogc3RyaW5nO1xyXG4gICAgfTtcclxufVxyXG5cclxuY29uc3QgVnVsbmVyYWJpbGl0eUl0ZW06IFJlYWN0LkZDPFZ1bG5lcmFiaWxpdHlJdGVtUHJvcHM+ID0gKHsgdnVsbmVyYWJpbGl0eSB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IHJvdW5kZWQtbWQgc2hhZG93LW1kIGJnLXBpbmstMTAwXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC1ibGFja1wiPnt2dWxuZXJhYmlsaXR5Lm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWJsYWNrXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPlNldmVyaXR5Ojwvc3Ryb25nPiB7dnVsbmVyYWJpbGl0eS5zZXZlcml0eX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtYmxhY2tcIj5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+U2NyaXB0Ojwvc3Ryb25nPiB7dnVsbmVyYWJpbGl0eS5zY3JpcHR9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWJsYWNrXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPkxvZzo8L3N0cm9uZz4ge3Z1bG5lcmFiaWxpdHkubG9nfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVnVsbmVyYWJpbGl0eUl0ZW07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlZ1bG5lcmFiaWxpdHlJdGVtIiwidnVsbmVyYWJpbGl0eSIsImRpdiIsImNsYXNzTmFtZSIsImgzIiwibmFtZSIsInAiLCJzdHJvbmciLCJzZXZlcml0eSIsInNjcmlwdCIsImxvZyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/VulnerabilityItem.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/components/VulnerabilityList.tsx":
/*!**************************************************!*\
  !*** ./src/app/components/VulnerabilityList.tsx ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _VulnerabilityItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VulnerabilityItem */ \"(app-pages-browser)/./src/app/components/VulnerabilityItem.tsx\");\n\n\n\nconst VulnerabilityList = (param)=>{\n    let { vulnerabilities } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"space-y-4\",\n        children: vulnerabilities.map((vuln, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_VulnerabilityItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                vulnerability: vuln\n            }, index, false, {\n                fileName: \"C:\\\\Study\\\\Hackaton\\\\client\\\\src\\\\app\\\\components\\\\VulnerabilityList.tsx\",\n                lineNumber: 17,\n                columnNumber: 17\n            }, undefined) // Використовуємо окремий компонент\n        )\n    }, void 0, false, {\n        fileName: \"C:\\\\Study\\\\Hackaton\\\\client\\\\src\\\\app\\\\components\\\\VulnerabilityList.tsx\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, undefined);\n};\n_c = VulnerabilityList;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VulnerabilityList);\nvar _c;\n$RefreshReg$(_c, \"VulnerabilityList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9WdWxuZXJhYmlsaXR5TGlzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBCO0FBQzBCO0FBV3BELE1BQU1FLG9CQUFzRDtRQUFDLEVBQUVDLGVBQWUsRUFBRTtJQUM1RSxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDVkYsZ0JBQWdCRyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ3hCLDhEQUFDUCwwREFBaUJBO2dCQUFhUSxlQUFlRjtlQUF0QkM7Ozs7MEJBQStCLG1DQUFtQzs7Ozs7OztBQUkxRztLQVJNTjtBQVVOLGlFQUFlQSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxTdHVkeVxcSGFja2F0b25cXGNsaWVudFxcc3JjXFxhcHBcXGNvbXBvbmVudHNcXFZ1bG5lcmFiaWxpdHlMaXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBWdWxuZXJhYmlsaXR5SXRlbSBmcm9tIFwiLi9WdWxuZXJhYmlsaXR5SXRlbVwiOyBcclxuXHJcbmludGVyZmFjZSBWdWxuZXJhYmlsaXR5TGlzdFByb3BzIHtcclxuICAgIHZ1bG5lcmFiaWxpdGllczogQXJyYXk8e1xyXG4gICAgICAgIG5hbWU6IHN0cmluZztcclxuICAgICAgICBzZXZlcml0eTogc3RyaW5nO1xyXG4gICAgICAgIHNjcmlwdDogc3RyaW5nO1xyXG4gICAgICAgIGxvZzogc3RyaW5nO1xyXG4gICAgfT47XHJcbn1cclxuXHJcbmNvbnN0IFZ1bG5lcmFiaWxpdHlMaXN0OiBSZWFjdC5GQzxWdWxuZXJhYmlsaXR5TGlzdFByb3BzPiA9ICh7IHZ1bG5lcmFiaWxpdGllcyB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XHJcbiAgICAgICAgICAgIHt2dWxuZXJhYmlsaXRpZXMubWFwKCh2dWxuLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPFZ1bG5lcmFiaWxpdHlJdGVtIGtleT17aW5kZXh9IHZ1bG5lcmFiaWxpdHk9e3Z1bG59IC8+IC8vINCS0LjQutC+0YDQuNGB0YLQvtCy0YPRlNC80L4g0L7QutGA0LXQvNC40Lkg0LrQvtC80L/QvtC90LXQvdGCXHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZ1bG5lcmFiaWxpdHlMaXN0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJWdWxuZXJhYmlsaXR5SXRlbSIsIlZ1bG5lcmFiaWxpdHlMaXN0IiwidnVsbmVyYWJpbGl0aWVzIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwidnVsbiIsImluZGV4IiwidnVsbmVyYWJpbGl0eSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/VulnerabilityList.tsx\n"));

/***/ })

});