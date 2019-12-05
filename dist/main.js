/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.sass":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.sass ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/**\\n * RESET DEFAULT CSS\\n */\\nul {\\n  margin: 0;\\n  padding-left: 0; }\\n  ul li {\\n    list-style: none; }\\n\\nhtml {\\n  font-family: Consolas,monospace;\\n  font-size: 14px;\\n  height: 100%; }\\n  html body {\\n    margin: 0 auto;\\n    height: 100%;\\n    overflow: hidden; }\\n    html body main {\\n      height: 100%;\\n      display: flex;\\n      padding: 0 15px;\\n      max-width: 1170px;\\n      margin: 0 auto; }\\n      html body main nav {\\n        width: 180px;\\n        border-right: 1px solid #000; }\\n        html body main nav #logo a {\\n          height: 130px;\\n          display: flex;\\n          width: 130px;\\n          justify-content: center;\\n          align-items: center;\\n          border-radius: 50%;\\n          background: #000;\\n          text-decoration: none;\\n          margin: 15px auto 30px auto; }\\n          html body main nav #logo a:hover {\\n            animation: birdmove .5s; }\\n          html body main nav #logo a span {\\n            font-size: 80px;\\n            color: #fff; }\\n        html body main nav ul li {\\n          margin-bottom: 7px; }\\n          html body main nav ul li a {\\n            color: #000;\\n            text-decoration: none;\\n            font-weight: 300;\\n            display: block;\\n            border-right: 0px solid #fff;\\n            -webkit-transition: all .2s ease-in-out;\\n            -moz-transition: all .2s ease-in-out;\\n            -o-transition: all .2s ease-in-out;\\n            transition: all .2s ease-in-out; }\\n            html body main nav ul li a:hover {\\n              border-color: #000;\\n              border-right-width: 5px;\\n              background-image: -webkit-linear-gradient(to right, #fff, rgba(0, 0, 0, 0.02));\\n              background-image: -o-linear-gradient(to right, #fff, rgba(0, 0, 0, 0.02));\\n              background-image: -moz-linear-gradient(to right, #fff, rgba(0, 0, 0, 0.02));\\n              background-image: linear-gradient(to right, #fff, rgba(0, 0, 0, 0.02)); }\\n          html body main nav ul li.active a {\\n            border-color: #000;\\n            border-right-width: 5px;\\n            background-image: -webkit-linear-gradient(to right, #fff, rgba(0, 0, 0, 0.02));\\n            background-image: -o-linear-gradient(to right, #fff, rgba(0, 0, 0, 0.02));\\n            background-image: -moz-linear-gradient(to right, #fff, rgba(0, 0, 0, 0.02));\\n            background-image: linear-gradient(to right, #fff, rgba(0, 0, 0, 0.02)); }\\n      html body main .contents {\\n        width: calc(100% - 200px);\\n        padding-top: 50px; }\\n        html body main .contents section {\\n          overflow: hidden; }\\n          html body main .contents section .inner-wrp {\\n            padding: 15px 0; }\\n          html body main .contents section .gallery {\\n            border-left: 5px solid #000;\\n            padding-left: 5px;\\n            display: flex;\\n            flex-flow: wrap; }\\n            html body main .contents section .gallery .img-wrap {\\n              border: 1px dashed #000;\\n              padding: 3px;\\n              -webkit-box-sizing: border-box;\\n              -moz-box-sizing: border-box;\\n              box-sizing: border-box;\\n              height: 208px;\\n              position: relative;\\n              margin: 10px; }\\n              html body main .contents section .gallery .img-wrap .filler {\\n                position: absolute;\\n                top: 0;\\n                left: 0;\\n                right: 75%;\\n                bottom: 0;\\n                background: rgba(0, 0, 0, 0.75); }\\n                html body main .contents section .gallery .img-wrap .filler.opened {\\n                  right: 0%; }\\n                  html body main .contents section .gallery .img-wrap .filler.opened .inner-details-wrap > * {\\n                    opacity: 1 !important; }\\n                html body main .contents section .gallery .img-wrap .filler .inner-wrap {\\n                  height: 100%;\\n                  position: relative; }\\n                  html body main .contents section .gallery .img-wrap .filler .inner-wrap .fa-plus-circle {\\n                    position: absolute;\\n                    top: calc(50% - 15px);\\n                    right: -13px;\\n                    font-size: 30px;\\n                    color: #E91E63;\\n                    box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.65);\\n                    border-radius: 50%;\\n                    cursor: pointer;\\n                    background: rgba(0, 0, 0, 0.7); }\\n                    html body main .contents section .gallery .img-wrap .filler .inner-wrap .fa-plus-circle.opened {\\n                      transform: rotate(45deg); }\\n                  html body main .contents section .gallery .img-wrap .filler .inner-wrap .details-wrap {\\n                    overflow: hidden;\\n                    height: 100%;\\n                    position: relative; }\\n                    html body main .contents section .gallery .img-wrap .filler .inner-wrap .details-wrap .inner-details-wrap {\\n                      height: inherit;\\n                      width: 246px;\\n                      -webkit-box-sizing: border-box;\\n                      -moz-box-sizing: border-box;\\n                      box-sizing: border-box;\\n                      padding: 15px; }\\n                      html body main .contents section .gallery .img-wrap .filler .inner-wrap .details-wrap .inner-details-wrap h3 {\\n                        font-size: 18px;\\n                        font-weight: 700; }\\n                      html body main .contents section .gallery .img-wrap .filler .inner-wrap .details-wrap .inner-details-wrap h3,\\n                      html body main .contents section .gallery .img-wrap .filler .inner-wrap .details-wrap .inner-details-wrap p {\\n                        -webkit-transition: all .5s ease-in-out;\\n                        -moz-transition: all .5s ease-in-out;\\n                        -o-transition: all .5s ease-in-out;\\n                        transition: all .5s ease-in-out;\\n                        opacity: .3; }\\n                      html body main .contents section .gallery .img-wrap .filler .inner-wrap .details-wrap .inner-details-wrap * {\\n                        color: #fff; }\\n                      html body main .contents section .gallery .img-wrap .filler .inner-wrap .details-wrap .inner-details-wrap .some-logo {\\n                        position: absolute;\\n                        bottom: 15px;\\n                        left: 15px;\\n                        right: 15px;\\n                        display: flex; }\\n                        html body main .contents section .gallery .img-wrap .filler .inner-wrap .details-wrap .inner-details-wrap .some-logo span {\\n                          font-size: 34px;\\n                          margin-right: 15px; }\\n                          html body main .contents section .gallery .img-wrap .filler .inner-wrap .details-wrap .inner-details-wrap .some-logo span:hover {\\n                            text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.9); }\\n                          html body main .contents section .gallery .img-wrap .filler .inner-wrap .details-wrap .inner-details-wrap .some-logo span:last-of-type {\\n                            margin-right: 0; }\\n                        html body main .contents section .gallery .img-wrap .filler .inner-wrap .details-wrap .inner-details-wrap .some-logo a {\\n                          background: #fff;\\n                          width: 30px;\\n                          height: 30px;\\n                          display: block;\\n                          display: flex;\\n                          align-items: center;\\n                          justify-content: center;\\n                          border-radius: 50%; }\\n                          html body main .contents section .gallery .img-wrap .filler .inner-wrap .details-wrap .inner-details-wrap .some-logo a i {\\n                            color: #000;\\n                            font-size: 19px; }\\n    html body #loader {\\n      position: fixed;\\n      top: 0;\\n      left: 0;\\n      right: 0;\\n      bottom: 0;\\n      display: flex;\\n      align-items: center;\\n      justify-content: center;\\n      background-color: #fff; }\\n\\n.left-border-style {\\n  border-left: 5px solid #000;\\n  padding-left: 15px; }\\n\\nh1 {\\n  margin-bottom: 30px; }\\n\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6 {\\n  font-weight: 400;\\n  margin-top: 0; }\\n\\np {\\n  margin-bottom: 0; }\\n\\n.forceOpacity {\\n  opacity: 0 !important; }\\n\\n.trn {\\n  -webkit-transition: all .5s ease-in-out;\\n  -moz-transition: all .5s ease-in-out;\\n  -o-transition: all .5s ease-in-out;\\n  transition: all .5s ease-in-out; }\\n\\n@keyframes birdmove {\\n  0% {\\n    transform: rotate(0deg); }\\n  50% {\\n    transform: rotate(5deg); }\\n  100% {\\n    transform: rotate(0deg); } }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/sass/main.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/sass/main.sass":
/*!****************************!*\
  !*** ./src/sass/main.sass ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.sass\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/sass/main.sass?");

/***/ }),

/***/ "./src/ts/main.ts":
/*!************************!*\
  !*** ./src/ts/main.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar Nagivate = /** @class */ (function () {\r\n    function Nagivate() {\r\n        this.menuLinks = document.querySelectorAll('ul li a');\r\n        this.contents = document.querySelectorAll('div.contents section');\r\n        this.contentsHeight = [];\r\n        this.assignEvents();\r\n        this.prepareContents();\r\n        this.currentPage = (window.location.hash == '') ? '#home' : window.location.hash;\r\n        this.showLinkContent(this.currentPage);\r\n        this.resizeWindow();\r\n        //this.loader(1,this.removeLoader);\r\n    }\r\n    Nagivate.prototype.assignEvents = function () {\r\n        var _this = this;\r\n        this.menuLinks.forEach(function (item, i) {\r\n            item.addEventListener(\"click\", function (e) {\r\n                var hash = e.srcElement.hash;\r\n                _this.currentPage = hash;\r\n                _this.showLinkContent(hash);\r\n                _this.setActiveMenu(e);\r\n            });\r\n        });\r\n    };\r\n    Nagivate.prototype.setActiveMenu = function (e) {\r\n        document.querySelectorAll('ul li.active')[0].classList.remove('active');\r\n        e.srcElement.parentNode.classList.add('active');\r\n    };\r\n    Nagivate.prototype.showLinkContent = function (sectionID) {\r\n        var contentArea = document.querySelector(sectionID);\r\n        var existingOpen = document.querySelectorAll('.contents .open-sesame-seed')[0];\r\n        if (existingOpen != undefined) {\r\n            existingOpen.classList.remove('open-sesame-seed');\r\n            this.closeContent(existingOpen);\r\n        }\r\n        contentArea.classList.add('open-sesame-seed');\r\n        contentArea.style.height = this.contentsHeight[sectionID.substr(1)] + \"px\";\r\n        contentArea.style.opacity = '1';\r\n    };\r\n    Nagivate.prototype.resizeWindow = function () {\r\n        var _this_1 = this;\r\n        var _this = this;\r\n        window.onresize = function () {\r\n            _this_1.contents.forEach(function (section, i) {\r\n                section.removeAttribute('style');\r\n                _this.closeContent(section);\r\n            });\r\n            _this_1.showLinkContent(_this_1.currentPage);\r\n        };\r\n    };\r\n    Nagivate.prototype.prepareContents = function () {\r\n        var _this = this;\r\n        this.contents.forEach(function (section, i) {\r\n            _this.closeContent(section);\r\n        });\r\n    };\r\n    Nagivate.prototype.closeContent = function (section) {\r\n        this.contentsHeight[section.getAttribute('id')] = section.scrollHeight;\r\n        section.classList.add('trn');\r\n        section.style.height = 0;\r\n        section.style.opacity = 0;\r\n    };\r\n    Nagivate.prototype.loader = function (limit, callback) {\r\n        if (limit === void 0) { limit = -1; }\r\n        var loader = ['|', '/', '─', '\\\\'];\r\n        var ctr = 0;\r\n        var remainder = 0;\r\n        var interval = setInterval(function () {\r\n            document.querySelector(\"#loader\").textContent = loader[ctr];\r\n            if (ctr > 2) {\r\n                ctr = -1;\r\n            }\r\n            ctr++;\r\n            remainder++;\r\n            if (remainder === limit) {\r\n                clearInterval(interval);\r\n                callback();\r\n            }\r\n        }, 150);\r\n    };\r\n    Nagivate.prototype.removeLoader = function () {\r\n        document.getElementById(\"loader\").style.opacity = \"0\";\r\n        document.getElementById(\"loader\").style.zIndex = \"-1\";\r\n    };\r\n    Nagivate.prototype.showLoader = function () {\r\n        document.getElementById(\"loader\").style.opacity = \"1\";\r\n        document.getElementById(\"loader\").style.zIndex = \"1\";\r\n    };\r\n    return Nagivate;\r\n}());\r\nvar navigate = new Nagivate();\r\nvar Gallery = /** @class */ (function () {\r\n    function Gallery() {\r\n        console.log('gallery');\r\n        this.showDetailsBtn = document.querySelectorAll('[data-show-details]');\r\n        this.showDetails();\r\n    }\r\n    Gallery.prototype.showDetails = function () {\r\n        var _this = this;\r\n        this.showDetailsBtn.forEach(function (item, i) {\r\n            item.addEventListener(\"click\", function (e) {\r\n                var parentContainer = e.srcElement.parentNode.parentNode;\r\n                var btnDelay = setTimeout(function () {\r\n                    e.srcElement.classList.toggle('opened');\r\n                    clearTimeout(btnDelay);\r\n                }, 400);\r\n                parentContainer.style.transition = \"all .5s\";\r\n                parentContainer.classList.toggle('opened');\r\n            });\r\n        });\r\n    };\r\n    return Gallery;\r\n}());\r\nvar gallery = new Gallery();\r\n\n\n//# sourceURL=webpack:///./src/ts/main.ts?");

/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi ./src/sass/main.sass ./src/ts/main.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/sass/main.sass */\"./src/sass/main.sass\");\nmodule.exports = __webpack_require__(/*! ./src/ts/main.ts */\"./src/ts/main.ts\");\n\n\n//# sourceURL=webpack:///multi_./src/sass/main.sass_./src/ts/main.ts?");

/***/ })

/******/ });