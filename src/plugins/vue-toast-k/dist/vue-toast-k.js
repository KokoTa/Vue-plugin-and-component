(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueToastK"] = factory();
	else
		root["VueToastK"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_15_4_2_vue_loader_lib_index_js_vue_loader_options_vue_toast_k_vue_vue_type_script_lang_js___ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_15_4_2_vue_loader_lib_index_js_vue_loader_options_vue_toast_k_vue_vue_type_script_lang_js____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_15_4_2_vue_loader_lib_index_js_vue_loader_options_vue_toast_k_vue_vue_type_script_lang_js___);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_15_4_2_vue_loader_lib_index_js_vue_loader_options_vue_toast_k_vue_vue_type_script_lang_js___) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_15_4_2_vue_loader_lib_index_js_vue_loader_options_vue_toast_k_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_15_4_2_vue_loader_lib_index_js_vue_loader_options_vue_toast_k_vue_vue_type_script_lang_js____default.a); 

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
exports.default = {
  data: function data() {
    return {
      show: false,
      message: '',
      duration: 1000
    };
  },
  watch: {
    show: function show() {
      var _this = this;

      setTimeout(function () {
        _this.show = false;
      }, this.duration);
    }
  }
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vueToastK = __webpack_require__(4);

var _vueToastK2 = _interopRequireDefault(_vueToastK);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 写好插件后我们还需要使用 webpack 将 vue 文件等打包成 css/js 文件
 * 以方便其他人引用该插件
 */
exports.default = {
  /**
   * Vue 插件需要包含 install 方法
   */
  install: function install(Vue) {
    Vue.prototype.$vtk = {};

    Vue.prototype.$vtk.show = function (message) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var T = Vue.extend(_vueToastK2.default); // 创建 Vue 组件类
      // 在文档之外渲染并且随后挂载

      var instance = new T().$mount();
      document.body.appendChild(instance.$el);
      instance.show = true; // 显示

      instance.message = message; // 传入数据

      instance.duration = options.duration ? options.duration : 1000; // 显示时间
    };
  }
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_toast_k_vue_vue_type_template_id_038e3eb5___ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_toast_k_vue_vue_type_script_lang_js___ = __webpack_require__(0);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__vue_toast_k_vue_vue_type_script_lang_js___) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__vue_toast_k_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_toast_k_vue_vue_type_style_index_0_lang_css___ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_15_4_2_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(8);






/* normalize component */

var component = __WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_15_4_2_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */](
  __WEBPACK_IMPORTED_MODULE_1__vue_toast_k_vue_vue_type_script_lang_js___["default"],
  __WEBPACK_IMPORTED_MODULE_0__vue_toast_k_vue_vue_type_template_id_038e3eb5___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__vue_toast_k_vue_vue_type_template_id_038e3eb5___["b" /* staticRenderFns */],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) {
  var api = require("F:\\Github\\Program\\vue-plugin-and-component\\src\\plugins\\vue-toast-k\\node_modules\\_vue-hot-reload-api@2.3.1@vue-hot-reload-api\\dist\\index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('038e3eb5', component.options)
    } else {
      api.reload('038e3eb5', component.options)
    }
    module.hot.accept("./vue-toast-k.vue?vue&type=template&id=038e3eb5&", function () {
      api.rerender('038e3eb5', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "src/vue-toast-k.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_15_4_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_4_2_vue_loader_lib_index_js_vue_loader_options_vue_toast_k_vue_vue_type_template_id_038e3eb5___ = __webpack_require__(6);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_15_4_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_4_2_vue_loader_lib_index_js_vue_loader_options_vue_toast_k_vue_vue_type_template_id_038e3eb5___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_15_4_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_4_2_vue_loader_lib_index_js_vue_loader_options_vue_toast_k_vue_vue_type_template_id_038e3eb5___["b"]; });


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "vue-toast-k-transition" } }, [
    _vm.show
      ? _c("section", { staticClass: "vue-toast-k" }, [
          _c("div", { staticClass: "vue-toast-k-box" }, [
            _c("span", { staticClass: "vue-toast-k-text" }, [
              _vm._v(_vm._s(_vm.message))
            ])
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_2_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_1_0_1_css_loader_index_js_node_modules_vue_loader_15_4_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_4_2_vue_loader_lib_index_js_vue_loader_options_vue_toast_k_vue_vue_type_style_index_0_lang_css___ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_2_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_1_0_1_css_loader_index_js_node_modules_vue_loader_15_4_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_4_2_vue_loader_lib_index_js_vue_loader_options_vue_toast_k_vue_vue_type_style_index_0_lang_css____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_2_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_1_0_1_css_loader_index_js_node_modules_vue_loader_15_4_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_4_2_vue_loader_lib_index_js_vue_loader_options_vue_toast_k_vue_vue_type_style_index_0_lang_css___);
/* unused harmony reexport namespace */
 /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_2_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_1_0_1_css_loader_index_js_node_modules_vue_loader_15_4_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_4_2_vue_loader_lib_index_js_vue_loader_options_vue_toast_k_vue_vue_type_style_index_0_lang_css____default.a); 

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = normalizeComponent;
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);
});