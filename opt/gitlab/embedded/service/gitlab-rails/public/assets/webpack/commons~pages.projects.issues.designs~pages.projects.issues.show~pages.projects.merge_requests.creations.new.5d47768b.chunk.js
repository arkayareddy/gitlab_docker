(this.webpackJsonp=this.webpackJsonp||[]).push([[56],{FUW5:function(t,e,i){"use strict";i("va8A"),i("z4I3"),i("dj/k"),i("kO4A"),i("+kFb"),i("OZM5"),i("x/6R"),i("4ql4"),i("8Qi2"),i("zCcL"),i("zpLX"),i("BD5p"),i("MRnW"),i("GzNv"),i("tbvx"),i("Id6h"),i("orcL");var n=i("Naob");function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var i=[],n=!0,o=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(n=(s=a.next()).done)&&(i.push(s.value),!e||i.length!==e);n=!0);}catch(t){o=!0,r=t}finally{try{n||null==a.return||a.return()}finally{if(o)throw r}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return r(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function s(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function l(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var u=function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach((function(e){l(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({},i("d5X7").a),f=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.dropdownTrigger=e.dropdownTrigger,this.dropdownList=e.dropdownList,this.button=e.button}var e,i,r;return e=t,(i=[{key:"initDroplab",value:function(){this.reopenItem=this.dropdownList.querySelector(".reopen-item"),this.closeItem=this.dropdownList.querySelector(".close-item"),this.droplab=new n.a;var t=this.setConfig();this.droplab.init(this.dropdownTrigger,this.dropdownList,[u],t)}},{key:"updateButton",value:function(t){this.toggleButtonType(t),this.button.blur()}},{key:"toggleButtonType",value:function(t){var e=o(this.getButtonTypes(t),2),i=e[0],n=e[1];i.classList.remove("hidden"),i.classList.add("droplab-item-selected"),n.classList.add("hidden"),n.classList.remove("droplab-item-selected"),i.click()}},{key:"getButtonTypes",value:function(t){return t?[this.reopenItem,this.closeItem]:[this.closeItem,this.reopenItem]}},{key:"setDisable",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t?(this.button.setAttribute("disabled","true"),this.dropdownTrigger.setAttribute("disabled","true")):(this.button.removeAttribute("disabled"),this.dropdownTrigger.removeAttribute("disabled"))}},{key:"setConfig",value:function(){return{InputSetter:[{input:this.button,valueAttribute:"data-text",inputAttribute:"data-value"},{input:this.button,valueAttribute:"data-text",inputAttribute:"title"},{input:this.button,valueAttribute:"data-button-class",inputAttribute:"class"},{input:this.dropdownTrigger,valueAttribute:"data-toggle-class",inputAttribute:"class"},{input:this.button,valueAttribute:"data-url",inputAttribute:"href"},{input:this.button,valueAttribute:"data-method",inputAttribute:"data-method"}]}}}])&&s(e.prototype,i),r&&s(e,r),t}();var c={initCloseReopenReport:function(){var t=document.querySelector(".js-issuable-close-dropdown");if(t){var e=t.querySelector(".js-issuable-close-toggle"),i=t.querySelector(".js-issuable-close-menu"),n=t.querySelector(".js-issuable-close-button"),o=new f({dropdownTrigger:e,dropdownList:i,button:n});return o.initDroplab(),o}}};e.a=c},V2jy:function(t,e,i){!function(e,i){"use strict";var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();var o,r=!1,s=void 0!==e;s&&e.getComputedStyle?(o=i.createElement("div"),["","-webkit-","-moz-","-ms-"].some((function(t){try{o.style.position=t+"sticky"}catch(t){}return""!=o.style.position}))&&(r=!0)):r=!0;var a=!1,l="undefined"!=typeof ShadowRoot,u={top:null,left:null},f=[];function c(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])}function d(t){return parseFloat(t)||0}function h(t){for(var e=0;t;)e+=t.offsetTop,t=t.offsetParent;return e}var p=function(){function t(e){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),!(e instanceof HTMLElement))throw new Error("First argument must be HTMLElement");if(f.some((function(t){return t._node===e})))throw new Error("Stickyfill is already applied to this node");this._node=e,this._stickyMode=null,this._active=!1,f.push(this),this.refresh()}return n(t,[{key:"refresh",value:function(){if(!r&&!this._removed){this._active&&this._deactivate();var t=this._node,n=getComputedStyle(t),o={position:n.position,top:n.top,display:n.display,marginTop:n.marginTop,marginBottom:n.marginBottom,marginLeft:n.marginLeft,marginRight:n.marginRight,cssFloat:n.cssFloat};if(!isNaN(parseFloat(o.top))&&"table-cell"!=o.display&&"none"!=o.display){this._active=!0;var s=t.style.position;"sticky"!=n.position&&"-webkit-sticky"!=n.position||(t.style.position="static");var a=t.parentNode,u=l&&a instanceof ShadowRoot?a.host:a,f=t.getBoundingClientRect(),p=u.getBoundingClientRect(),g=getComputedStyle(u);this._parent={node:u,styles:{position:u.style.position},offsetHeight:u.offsetHeight},this._offsetToWindow={left:f.left,right:i.documentElement.clientWidth-f.right},this._offsetToParent={top:f.top-p.top-d(g.borderTopWidth),left:f.left-p.left-d(g.borderLeftWidth),right:-f.right+p.right-d(g.borderRightWidth)},this._styles={position:s,top:t.style.top,bottom:t.style.bottom,left:t.style.left,right:t.style.right,width:t.style.width,marginTop:t.style.marginTop,marginLeft:t.style.marginLeft,marginRight:t.style.marginRight};var m=d(o.top);this._limits={start:f.top+e.pageYOffset-m,end:p.top+e.pageYOffset+u.offsetHeight-d(g.borderBottomWidth)-t.offsetHeight-m-d(o.marginBottom)};var v=g.position;"absolute"!=v&&"relative"!=v&&(u.style.position="relative"),this._recalcPosition();var b=this._clone={};b.node=i.createElement("div"),c(b.node.style,{width:f.right-f.left+"px",height:f.bottom-f.top+"px",marginTop:o.marginTop,marginBottom:o.marginBottom,marginLeft:o.marginLeft,marginRight:o.marginRight,cssFloat:o.cssFloat,padding:0,border:0,borderSpacing:0,fontSize:"1em",position:"static"}),a.insertBefore(b.node,t),b.docOffsetTop=h(b.node)}}}},{key:"_recalcPosition",value:function(){if(this._active&&!this._removed){var t=u.top<=this._limits.start?"start":u.top>=this._limits.end?"end":"middle";if(this._stickyMode!=t){switch(t){case"start":c(this._node.style,{position:"absolute",left:this._offsetToParent.left+"px",right:this._offsetToParent.right+"px",top:this._offsetToParent.top+"px",bottom:"auto",width:"auto",marginLeft:0,marginRight:0,marginTop:0});break;case"middle":c(this._node.style,{position:"fixed",left:this._offsetToWindow.left+"px",right:this._offsetToWindow.right+"px",top:this._styles.top,bottom:"auto",width:"auto",marginLeft:0,marginRight:0,marginTop:0});break;case"end":c(this._node.style,{position:"absolute",left:this._offsetToParent.left+"px",right:this._offsetToParent.right+"px",top:"auto",bottom:0,width:"auto",marginLeft:0,marginRight:0})}this._stickyMode=t}}}},{key:"_fastCheck",value:function(){this._active&&!this._removed&&(Math.abs(h(this._clone.node)-this._clone.docOffsetTop)>1||Math.abs(this._parent.node.offsetHeight-this._parent.offsetHeight)>1)&&this.refresh()}},{key:"_deactivate",value:function(){var t=this;this._active&&!this._removed&&(this._clone.node.parentNode.removeChild(this._clone.node),delete this._clone,c(this._node.style,this._styles),delete this._styles,f.some((function(e){return e!==t&&e._parent&&e._parent.node===t._parent.node}))||c(this._parent.node.style,this._parent.styles),delete this._parent,this._stickyMode=null,this._active=!1,delete this._offsetToWindow,delete this._offsetToParent,delete this._limits)}},{key:"remove",value:function(){var t=this;this._deactivate(),f.some((function(e,i){if(e._node===t._node)return f.splice(i,1),!0})),this._removed=!0}}]),t}(),g={stickies:f,Sticky:p,forceSticky:function(){r=!1,m(),this.refreshAll()},addOne:function(t){if(!(t instanceof HTMLElement)){if(!t.length||!t[0])return;t=t[0]}for(var e=0;e<f.length;e++)if(f[e]._node===t)return f[e];return new p(t)},add:function(t){if(t instanceof HTMLElement&&(t=[t]),t.length){for(var e=[],i=function(i){var n=t[i];return n instanceof HTMLElement?f.some((function(t){if(t._node===n)return e.push(t),!0}))?"continue":void e.push(new p(n)):(e.push(void 0),"continue")},n=0;n<t.length;n++)i(n);return e}},refreshAll:function(){f.forEach((function(t){return t.refresh()}))},removeOne:function(t){if(!(t instanceof HTMLElement)){if(!t.length||!t[0])return;t=t[0]}f.some((function(e){if(e._node===t)return e.remove(),!0}))},remove:function(t){if(t instanceof HTMLElement&&(t=[t]),t.length)for(var e=function(e){var i=t[e];f.some((function(t){if(t._node===i)return t.remove(),!0}))},i=0;i<t.length;i++)e(i)},removeAll:function(){for(;f.length;)f[0].remove()}};function m(){if(!a){a=!0,r(),e.addEventListener("scroll",r),e.addEventListener("resize",g.refreshAll),e.addEventListener("orientationchange",g.refreshAll);var t=void 0,n=void 0,o=void 0;"hidden"in i?(n="hidden",o="visibilitychange"):"webkitHidden"in i&&(n="webkitHidden",o="webkitvisibilitychange"),o?(i[n]||s(),i.addEventListener(o,(function(){i[n]?clearInterval(t):s()}))):s()}function r(){e.pageXOffset!=u.left?(u.top=e.pageYOffset,u.left=e.pageXOffset,g.refreshAll()):e.pageYOffset!=u.top&&(u.top=e.pageYOffset,u.left=e.pageXOffset,f.forEach((function(t){return t._recalcPosition()})))}function s(){t=setInterval((function(){f.forEach((function(t){return t._fastCheck()}))}),500)}}r||m(),t.exports?t.exports=g:s&&(e.Stickyfill=g)}(window,document)},Zvrg:function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"a",(function(){return a}));var n=i("V2jy"),o=i.n(n),r=function(t,e,i,n){var o=Math.floor(t.offsetTop-e);if(o<=i&&!t.classList.contains("is-stuck")){var r=n?function(){var t=document.createElement("div");return t.classList.add("sticky-placeholder"),t}():null,s=t.offsetHeight;t.classList.add("is-stuck"),n&&(t.parentNode.insertBefore(r,t.nextElementSibling),r.style.height="".concat(s-t.offsetHeight,"px"))}else o>i&&t.classList.contains("is-stuck")&&(t.classList.remove("is-stuck"),n&&t.nextElementSibling&&t.nextElementSibling.classList.contains("sticky-placeholder")&&t.nextElementSibling.remove())},s=function(t,e){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];t&&"undefined"!=typeof CSS&&CSS.supports("(position: -webkit-sticky) or (position: sticky)")&&document.addEventListener("scroll",(function(){return r(t,window.scrollY,e,i)}),{passive:!0})},a=function(t){o.a.add(t)}}}]);
//# sourceMappingURL=commons~pages.projects.issues.designs~pages.projects.issues.show~pages.projects.merge_requests.creations.new.5d47768b.chunk.js.map