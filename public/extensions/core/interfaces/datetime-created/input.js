parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QdEO":[function(require,module,exports) {
module.exports={props:{name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},options:{type:Object,default:function(){return{}}},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null}}};
},{}],"OFuN":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("../../../mixins/interface"));function t(e){return e&&e.__esModule?e:{default:e}}var u={mixins:[e.default],computed:{date:function(){return this.value?new Date(this.value.replace(" ","T")+"Z"):null},displayValue:function(){if(this.date)return this.$d(this.date,"long")+" GMT"}}};exports.default=u;
(function(){var e=exports.default||module.exports;"function"==typeof e&&(e=e.options),Object.assign(e,{render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.value?a("div",{staticClass:"gray style-3"},[e.options.showRelative?a("v-timeago",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.displayValue,expression:"displayValue"}],staticClass:"no-wrap",attrs:{since:e.date,"auto-update":60,locale:e.$i18n.locale}}):a("div",[e._v(e._s(e.displayValue))])],1):e.newItem?a("div",{staticClass:"gray style-3"},[e._v(" "+e._s(e.$t("interfaces-datetime-created-now"))+"\n")]):a("div",{staticClass:"gray style-3"},[e._v(" "+e._s(e.$t("interfaces-datetime-created-unknown"))+"\n")])},staticRenderFns:[],_compiled:!0,_scopeId:"data-v-9572a1",functional:void 0});})();
},{"../../../mixins/interface":"QdEO"}]},{},["OFuN"], "__DirectusExtension__")