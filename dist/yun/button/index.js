!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){e.exports=n(5)},function(e,t){},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(8);t.default={name:"yun-button",mixins:[o.UIName],props:{type:{type:String,default:"normal"},size:{type:String,default:"large"},disabled:Boolean},methods:{handleClick:function(e){}}}},,function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(9),u=o(r);e.exports=u.default},,function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{UIName:"yun"}}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(7),u=o(r),i={UIName:u.default};e.exports=i},function(e,t,n){var o,r;n(1),o=n(3);var u=n(11);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=u.render,r.staticRenderFns=u.staticRenderFns,e.exports=o},,function(module,exports){module.exports={render:function(){with(this)return _h("button",{class:[UIName+"-button",UIName+"-button-"+type,UIName+"-button-"+size,{"is-disabled":disabled}],attrs:{disabled:disabled},on:{click:handleClick}},[_t("default")])},staticRenderFns:[]}}])});