/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app_index_ts-app_services_general_general_ts-app_services_modal_modalService_ts"],{

/***/ "./app/assets/img sync \\.(png%7Cjp?g%7Csvg)$":
/*!*****************************************************************!*\
  !*** ./app/assets/img/ sync nonrecursive \.(png%7Cjp?g%7Csvg)$ ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./ocean.jpg\": \"./app/assets/img/ocean.jpg\",\n\t\"./pic1.jpg\": \"./app/assets/img/pic1.jpg\",\n\t\"./pic2.jpg\": \"./app/assets/img/pic2.jpg\",\n\t\"./pic3.jpg\": \"./app/assets/img/pic3.jpg\",\n\t\"./pic4.jpg\": \"./app/assets/img/pic4.jpg\",\n\t\"./pic5.jpg\": \"./app/assets/img/pic5.jpg\",\n\t\"./pic6.jpg\": \"./app/assets/img/pic6.jpg\",\n\t\"./pic7.jpg\": \"./app/assets/img/pic7.jpg\",\n\t\"./pic8.jpg\": \"./app/assets/img/pic8.jpg\",\n\t\"./pic9.jpg\": \"./app/assets/img/pic9.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./app/assets/img sync \\\\.(png%7Cjp?g%7Csvg)$\";\n\n//# sourceURL=webpack:///./app/assets/img/_sync_nonrecursive_\\.(png%257Cjp?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/assets/styles/main.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/assets/styles/main.scss ***!
  \******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"#accept-order-button {\\n  max-width: 260px;\\n  padding: 4px;\\n  height: 30px;\\n  text-align: center;\\n  margin: 10px;\\n  cursor: pointer;\\n}\\n\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  height: 100vh;\\n}\\n\\n.main-app-wrap {\\n  display: flex;\\n  height: 100%;\\n  flex-direction: column;\\n}\\n.main-app-wrap header {\\n  display: flex;\\n  align-content: center;\\n  justify-content: center;\\n  color: #fff;\\n  background: #f14e4e;\\n}\\n.main-app-wrap footer {\\n  height: 70px;\\n  background: #313b5e;\\n  color: #fff;\\n  display: flex;\\n  align-content: center;\\n  justify-content: center;\\n}\\n.main-app-wrap .main-app {\\n  overflow: auto;\\n  padding: 10px;\\n  flex: 1;\\n  height: 100%;\\n}\\n.main-app-wrap .main-app .tour-wrap {\\n  display: flex;\\n  flex-wrap: wrap;\\n}\\n.main-app-wrap .main-app .tour-wrap .tour-pic {\\n  width: 100%;\\n  height: 140px;\\n}\\n.main-app-wrap .main-app .tour-wrap > div {\\n  flex-direction: column;\\n  display: flex;\\n  width: 260px;\\n  height: 400px;\\n  padding: 4px;\\n  border: 1px solid grey;\\n  margin: 4px;\\n}\\n.main-app-wrap .main-app .tour-wrap > div:hover {\\n  cursor: pointer;\\n}\\n.main-app-wrap .main-app .tour-wrap > div > div.ticket-description {\\n  flex: 1;\\n  height: 155px;\\n  text-overflow: ellipsis;\\n  overflow: hidden;\\n}\\n\\n.modal-element {\\n  color: #292d2c;\\n  background-color: #e4e9e7;\\n  height: 360px;\\n  width: 300px;\\n  position: fixed;\\n  box-shadow: 1px 1px 1px 2px #d7c7c7;\\n  top: 50%;\\n  left: 50%;\\n  padding: 6px;\\n  transform: translateY(-50%) translateX(-50%);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.modal-element .close-modal {\\n  position: absolute;\\n  top: 0;\\n  margin: 0;\\n  cursor: pointer;\\n  font-size: 1.3rem;\\n  font-weight: bold;\\n  right: 3px;\\n}\\n.modal-element .ticket-submit {\\n  height: 45px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./app/assets/styles/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./app/assets/img/ocean.jpg":
/*!**********************************!*\
  !*** ./app/assets/img/ocean.jpg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"/img/ocean.jpg\");\n\n//# sourceURL=webpack:///./app/assets/img/ocean.jpg?");

/***/ }),

/***/ "./app/assets/img/pic1.jpg":
/*!*********************************!*\
  !*** ./app/assets/img/pic1.jpg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"/img/pic1.jpg\");\n\n//# sourceURL=webpack:///./app/assets/img/pic1.jpg?");

/***/ }),

/***/ "./app/assets/img/pic2.jpg":
/*!*********************************!*\
  !*** ./app/assets/img/pic2.jpg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"/img/pic2.jpg\");\n\n//# sourceURL=webpack:///./app/assets/img/pic2.jpg?");

/***/ }),

/***/ "./app/assets/img/pic3.jpg":
/*!*********************************!*\
  !*** ./app/assets/img/pic3.jpg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"/img/pic3.jpg\");\n\n//# sourceURL=webpack:///./app/assets/img/pic3.jpg?");

/***/ }),

/***/ "./app/assets/img/pic4.jpg":
/*!*********************************!*\
  !*** ./app/assets/img/pic4.jpg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"/img/pic4.jpg\");\n\n//# sourceURL=webpack:///./app/assets/img/pic4.jpg?");

/***/ }),

/***/ "./app/assets/img/pic5.jpg":
/*!*********************************!*\
  !*** ./app/assets/img/pic5.jpg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"/img/pic5.jpg\");\n\n//# sourceURL=webpack:///./app/assets/img/pic5.jpg?");

/***/ }),

/***/ "./app/assets/img/pic6.jpg":
/*!*********************************!*\
  !*** ./app/assets/img/pic6.jpg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"/img/pic6.jpg\");\n\n//# sourceURL=webpack:///./app/assets/img/pic6.jpg?");

/***/ }),

/***/ "./app/assets/img/pic7.jpg":
/*!*********************************!*\
  !*** ./app/assets/img/pic7.jpg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"/img/pic7.jpg\");\n\n//# sourceURL=webpack:///./app/assets/img/pic7.jpg?");

/***/ }),

/***/ "./app/assets/img/pic8.jpg":
/*!*********************************!*\
  !*** ./app/assets/img/pic8.jpg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"/img/pic8.jpg\");\n\n//# sourceURL=webpack:///./app/assets/img/pic8.jpg?");

/***/ }),

/***/ "./app/assets/img/pic9.jpg":
/*!*********************************!*\
  !*** ./app/assets/img/pic9.jpg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"/img/pic9.jpg\");\n\n//# sourceURL=webpack:///./app/assets/img/pic9.jpg?");

/***/ }),

/***/ "./app/assets/styles/main.scss":
/*!*************************************!*\
  !*** ./app/assets/styles/main.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/assets/styles/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./app/assets/styles/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./app/classess/modal.ts":
/*!*******************************!*\
  !*** ./app/classess/modal.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Modal\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\r\n    constructor(selector) {\r\n        this.selector = selector;\r\n    }\r\n    ;\r\n    open(template) {\r\n        const modal = document.createElement('div');\r\n        modal.innerHTML = template;\r\n        modal.id = this.selector;\r\n        modal.classList.add('modal-element');\r\n        document.querySelector('body').append(modal);\r\n    }\r\n    ;\r\n}\r\n\n\n//# sourceURL=webpack:///./app/classess/modal.ts?");

/***/ }),

/***/ "./app/index.ts":
/*!**********************!*\
  !*** ./app/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toursDataArray\": () => (/* binding */ toursDataArray)\n/* harmony export */ });\n/* harmony import */ var _rest_tours__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rest/tours */ \"./app/services/rest/tours.ts\");\n/* harmony import */ var _assets_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/styles/main.scss */ \"./app/assets/styles/main.scss\");\n/* harmony import */ var _services_img_img__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/img/img */ \"./app/services/img/img.ts\");\n/* harmony import */ var _services_general_general__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/general/general */ \"./app/services/general/general.ts\");\n\r\n\r\n\r\n\r\nlet toursDataArray = [];\r\nconst imagesStore = _services_img_img__WEBPACK_IMPORTED_MODULE_2__.images; // ссылка на изображения нужна чтобы webpack формировал изображения в папке dist\r\nconst tourData = (0,_rest_tours__WEBPACK_IMPORTED_MODULE_0__.getTours)();\r\ntourData.then((data) => {\r\n    console.log('call ');\r\n    toursDataArray = data;\r\n    (0,_services_general_general__WEBPACK_IMPORTED_MODULE_3__.initToursDivElements)(data);\r\n});\r\n(0,_services_general_general__WEBPACK_IMPORTED_MODULE_3__.initApp)(toursDataArray);\r\n\n\n//# sourceURL=webpack:///./app/index.ts?");

/***/ }),

/***/ "./app/services/general/general.ts":
/*!*****************************************!*\
  !*** ./app/services/general/general.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initApp\": () => (/* binding */ initApp),\n/* harmony export */   \"initFooterTitle\": () => (/* binding */ initFooterTitle),\n/* harmony export */   \"initHeaderTitle\": () => (/* binding */ initHeaderTitle),\n/* harmony export */   \"initTourElemListener\": () => (/* binding */ initTourElemListener),\n/* harmony export */   \"initToursDivElements\": () => (/* binding */ initToursDivElements)\n/* harmony export */ });\n/* harmony import */ var _services_modal_modalService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/modal/modalService */ \"./app/services/modal/modalService.ts\");\n/* harmony import */ var _templates_tours__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../templates/tours */ \"./app/templates/tours.ts\");\n\r\n\r\nfunction initApp(data) {\r\n    initHeaderTitle('Туры', 'h1');\r\n    initFooterTitle('Туры по всему миру', 'h2');\r\n    () => { initToursDivElements(data); };\r\n}\r\nfunction initHeaderTitle(ticketName, selector) {\r\n    const headerElement = document.querySelector('header');\r\n    const targetItem = headerElement.querySelector(selector);\r\n    if (targetItem) {\r\n        targetItem.innerText = ticketName;\r\n    }\r\n}\r\nfunction initFooterTitle(ticketName, selector) {\r\n    const headerElement = document.querySelector('footer');\r\n    const targetItem = headerElement.querySelector(selector);\r\n    if (targetItem) {\r\n        targetItem.innerText = ticketName;\r\n    }\r\n}\r\nfunction initToursDivElements(data) {\r\n    if (Array.isArray(data)) {\r\n        const rootElement = document.querySelector('.main-app');\r\n        const tourWrap = document.createElement('div');\r\n        tourWrap.classList.add('tour-wrap');\r\n        // init click for modal\r\n        initTourElemListener(tourWrap);\r\n        let rootElementData = '';\r\n        data.forEach((el, i) => {\r\n            rootElementData += (0,_templates_tours__WEBPACK_IMPORTED_MODULE_1__.getTourTemplate)(el, i);\r\n        });\r\n        tourWrap.innerHTML = rootElementData;\r\n        rootElement.appendChild(tourWrap);\r\n    }\r\n}\r\nfunction initTourElemListener(tourWrap) {\r\n    tourWrap.addEventListener('click', (ev) => {\r\n        const targetItem = ev.target;\r\n        const parentItem = targetItem?.parentNode;\r\n        let realTarget;\r\n        if (targetItem.hasAttribute('data-tour-item-index')) {\r\n            realTarget = targetItem;\r\n        }\r\n        else if (parentItem && parentItem.hasAttribute('data-tour-item-index')) {\r\n            realTarget = parentItem;\r\n        }\r\n        if (realTarget) {\r\n            const dataIndex = realTarget.getAttribute('data-tour-item-index');\r\n            (0,_services_modal_modalService__WEBPACK_IMPORTED_MODULE_0__.openModal)('order', Number(dataIndex));\r\n        }\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack:///./app/services/general/general.ts?");

/***/ }),

/***/ "./app/services/img/img.ts":
/*!*********************************!*\
  !*** ./app/services/img/img.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"images\": () => (/* binding */ images)\n/* harmony export */ });\nfunction importAll(r) {\r\n    return r.keys().map(r);\r\n}\r\n/*- для того чтобы свойство context распозналось Typescript надо установить дополнительно типы (npm i  @types/webpack-env)\r\n  - метод importAll динамически импортирует файлы картинок и сохраняет их в переменную images*/\r\nconst images = importAll(__webpack_require__(\"./app/assets/img sync \\\\.(png%7Cjp?g%7Csvg)$\"));\r\n\n\n//# sourceURL=webpack:///./app/services/img/img.ts?");

/***/ }),

/***/ "./app/services/modal/modalService.ts":
/*!********************************************!*\
  !*** ./app/services/modal/modalService.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"openModal\": () => (/* binding */ openModal)\n/* harmony export */ });\n/* harmony import */ var _classess_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classess/modal */ \"./app/classess/modal.ts\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../index */ \"./app/index.ts\");\n\r\n // ссылка на массив с данными\r\n// Определить типы для метода (возвращающие и для переменных в теле функции)\r\nfunction openModal(type, i) {\r\n    const data = _index__WEBPACK_IMPORTED_MODULE_1__.toursDataArray[i];\r\n    const tourId = data[i]?.id;\r\n    let modalInfo = {};\r\n    switch (type) {\r\n        case \"order\":\r\n            const modalTemplate = `\r\n      <div> \r\n      <p data-moda-id=\"tour-modal\" class=\"close-modal\">X</p>\r\n      <p>${data.name}</p>\r\n      <p>${data.description}</p>\r\n       \r\n       <div data-tour-id=${tourId} class=\"ticket-submit\">\r\n       <a href=\"ticket.html\">Buy</a>\r\n</div>\r\n     </div>\r\n  `;\r\n            const modal = new _classess_modal__WEBPACK_IMPORTED_MODULE_0__.Modal('tour-modal');\r\n            modal.open(modalTemplate);\r\n            break;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./app/services/modal/modalService.ts?");

/***/ }),

/***/ "./app/services/rest/tours.ts":
/*!************************************!*\
  !*** ./app/services/rest/tours.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTours\": () => (/* binding */ getTours)\n/* harmony export */ });\n// запрос на получение списка туров - Определить типы (возвращающие и для параметров)\r\nfunction getTours() {\r\n    return fetch('https://62b9e756ff109cd1dc9dae16.mockapi.io/apiv/v1/tours/').then((response) => response.json());\r\n}\r\n\n\n//# sourceURL=webpack:///./app/services/rest/tours.ts?");

/***/ }),

/***/ "./app/templates/tours.ts":
/*!********************************!*\
  !*** ./app/templates/tours.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTourTemplate\": () => (/* binding */ getTourTemplate)\n/* harmony export */ });\nfunction getTourTemplate(obj, i) {\r\n    const tmpl = ` \r\n       <div  data-tour-item-index=${i} class=\"tour-block\">\r\n           <h2>${obj.name}</h2>\r\n           <img class='tour-pic' src=\"../app/assets/img/${obj.img}\"/>\r\n           <div class=\"ticket-description\">${obj.description}</div>\r\n           <p>Buy for ${obj.price}</p>\r\n       </div>\r\n    `;\r\n    return tmpl;\r\n}\r\n\n\n//# sourceURL=webpack:///./app/templates/tours.ts?");

/***/ })

}]);