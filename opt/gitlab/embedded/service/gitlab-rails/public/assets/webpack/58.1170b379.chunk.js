(this.webpackJsonp=this.webpackJsonp||[]).push([[58],{"41/x":function(t,e,i){"use strict";i.d(e,"a",(function(){return p}));var n=i("/Szx"),r=i("lgrP"),o=i("t8l0"),s=i("hkqW"),a=i("1m+M");function c(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function l(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?c(Object(i),!0).forEach((function(e){u(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function u(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var d=Object(a.b)();delete d.href.default,delete d.to.default;var h=l(l({},d),{},{tag:{type:String,default:"span"},variant:{type:String,default:function(){return Object(o.b)("BBadge","variant")}},pill:{type:Boolean,default:!1}}),p=n.a.extend({name:"BBadge",functional:!0,props:h,render:function(t,e){var i=e.props,n=e.data,o=e.children,c=i.href||i.to,l=c?a.a:i.tag,u={staticClass:"badge",class:[i.variant?"badge-".concat(i.variant):"badge-secondary",{"badge-pill":i.pill,active:i.active,disabled:i.disabled}],props:c?Object(s.a)(d,i):{}};return t(l,Object(r.a)(n,u),o)}})},Lzak:function(t,e,i){"use strict";var n=i("41/x"),r=i("XBTk"),o=i("Pyw5"),s=i.n(o);const a={components:{BBadge:n.a},inheritAttrs:!1,props:{size:{type:String,default:r.g.md,validator:function(t){return void 0!==r.g[t]},required:!1},variant:{type:String,default:r.h.muted,validator:function(t){return void 0!==r.h[t]},required:!1}}};const c=s()({render:function(){var t=this.$createElement;return(this._self._c||t)("b-badge",this._b({class:["gl-badge",this.size],attrs:{variant:this.variant,pill:""}},"b-badge",this.$attrs,!1),[this._t("default")],2)},staticRenderFns:[]},void 0,a,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=c},MV2A:function(t,e,i){"use strict";var n=i("1m+M"),r=i("jB52"),o=function(t){try{var e=new URL(t,(i=window.location,n=i.protocol,r=i.host,"".concat(n,"//").concat(r)));return["http:","https:","mailto:","ftp:"].includes(e.protocol)}catch(t){return!1}var i,n,r},s=function(t){var e=t.href,i=t.target,n=t.rel,r=t.hostname;o(e)||(t.href="about:blank"),function(t,e){return"_blank"===t&&e!==window.location.hostname}(i,r)&&(t.rel=function(t){var e=t?t.trim().split(" "):[];return e.includes("noopener")||e.push("noopener"),e.includes("noreferrer")||e.push("noreferrer"),e.join(" ")}(n))},a={inserted:s,update:function(t){r.default.nextTick((function(){s(t)}))}},c=i("Pyw5"),l=i.n(c);const u={components:{BLink:n.a},directives:{SafeLink:a},props:{target:{type:String,required:!1,default:null}}};const d=l()({render:function(){var t=this.$createElement;return(this._self._c||t)("b-link",this._g(this._b({directives:[{name:"safe-link",rawName:"v-safe-link"}],staticClass:"gl-link",attrs:{target:this.target}},"b-link",this.$attrs,!1),this.$listeners),[this._t("default")],2)},staticRenderFns:[]},void 0,u,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=d},SU48:function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));var n=i("/Szx"),r=i("EQ0+");function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function s(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){a(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var c={active:{type:Boolean,default:!1},activeClass:{type:String,default:"active"},buttonClass:{type:[String,Array,Object]},disabled:{type:Boolean,default:!1},variant:{type:String}},l=n.a.extend({name:"BDropdownItemButton",mixins:[r.a],inheritAttrs:!1,inject:{bvDropdown:{default:null}},props:c,methods:{closeDropdown:function(){this.bvDropdown&&this.bvDropdown.hide(!0)},onClick:function(t){this.$emit("click",t),this.closeDropdown()}},render:function(t){var e;return t("li",{attrs:{role:"presentation"}},[t("button",{staticClass:"dropdown-item",class:[this.buttonClass,(e={},a(e,this.activeClass,this.active),a(e,"text-".concat(this.variant),this.variant&&!(this.active||this.disabled)),e)],attrs:s(s({},this.$attrs),{},{role:"menuitem",type:"button",disabled:this.disabled}),on:{click:this.onClick},ref:"button"},this.normalizeSlot("default"))])}})},XLEV:function(t,e,i){"use strict";i.d(e,"a",(function(){return z}));var n=i("/Szx"),r=i("TjC/"),o=i("rPnh"),s=i("t8l0"),a=i("DXSV"),c=i("Z4o9"),l=i("Mm9T"),u=i("sOG4"),d=i("o/E4"),h=i("BrvI"),p=i("oSBg"),f=i("kI/X"),b=i("QXXq"),v={data:function(){return{listenForClickOut:!1}},watch:{listenForClickOut:function(t,e){t!==e&&(Object(b.c)(this.clickOutElement,this.clickOutEventName,this._clickOutHandler,b.a),t&&Object(b.d)(this.clickOutElement,this.clickOutEventName,this._clickOutHandler,b.a))}},beforeCreate:function(){this.clickOutElement=null,this.clickOutEventName=null},mounted:function(){this.clickOutElement||(this.clickOutElement=document),this.clickOutEventName||(this.clickOutEventName="click"),this.listenForClickOut&&Object(b.d)(this.clickOutElement,this.clickOutEventName,this._clickOutHandler,b.a)},beforeDestroy:function(){Object(b.c)(this.clickOutElement,this.clickOutEventName,this._clickOutHandler,b.a)},methods:{isClickOut:function(t){return!Object(d.d)(this.$el,t.target)},_clickOutHandler:function(t){this.clickOutHandler&&this.isClickOut(t)&&this.clickOutHandler(t)}}},g={data:function(){return{listenForFocusIn:!1}},watch:{listenForFocusIn:function(t,e){t!==e&&(Object(b.c)(this.focusInElement,"focusin",this._focusInHandler,b.a),t&&Object(b.d)(this.focusInElement,"focusin",this._focusInHandler,b.a))}},beforeCreate:function(){this.focusInElement=null},mounted:function(){this.focusInElement||(this.focusInElement=document),this.listenForFocusIn&&Object(b.d)(this.focusInElement,"focusin",this._focusInHandler,b.a)},beforeDestroy:function(){Object(b.c)(this.focusInElement,"focusin",this._focusInHandler,b.a)},methods:{_focusInHandler:function(t){this.focusInHandler&&this.focusInHandler(t)}}};function O(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function m(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?O(Object(i),!0).forEach((function(e){y(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):O(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function y(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var w="".concat("bv::dropdown::","shown"),j="".concat("bv::dropdown::","hidden"),k={FORM_CHILD:".dropdown form",ITEM_SELECTOR:[".dropdown-item",".b-dropdown-form"].map((function(t){return"".concat(t,":not(.disabled):not([disabled])")})).join(", ")},P="top-start",C="top-end",S="bottom-start",E="bottom-end",_="right-start",$="left-start",D={dropup:{type:Boolean,default:!1},dropright:{type:Boolean,default:!1},dropleft:{type:Boolean,default:!1},right:{type:Boolean,default:!1},offset:{type:[Number,String],default:0},noFlip:{type:Boolean,default:!1},popperOpts:{default:function(){}},boundary:{type:[String,p.b],default:"scrollParent"}},B={mixins:[a.a,v,g],provide:function(){return{bvDropdown:this}},inject:{bvNavbar:{default:null}},props:m({disabled:{type:Boolean,default:!1}},D),data:function(){return{visible:!1,visibleChangePrevented:!1}},computed:{inNavbar:function(){return!Object(h.e)(this.bvNavbar)},toggler:function(){var t=this.$refs.toggle;return t?t.$el||t:null},directionClass:function(){return this.dropup?"dropup":this.dropright?"dropright":this.dropleft?"dropleft":""}},watch:{visible:function(t,e){if(this.visibleChangePrevented)this.visibleChangePrevented=!1;else if(t!==e){var i=t?"show":"hide",n=new u.a(i,{cancelable:!0,vueTarget:this,target:this.$refs.menu,relatedTarget:null,componentId:this.safeId?this.safeId():this.id||null});if(this.emitEvent(n),n.defaultPrevented)return this.visibleChangePrevented=!0,this.visible=e,void this.$off("hidden",this.focusToggler);"show"===i?this.showMenu():this.hideMenu()}},disabled:function(t,e){t!==e&&t&&this.visible&&(this.visible=!1)}},created:function(){this.$_popper=null},deactivated:function(){this.visible=!1,this.whileOpenListen(!1),this.destroyPopper()},beforeDestroy:function(){this.visible=!1,this.whileOpenListen(!1),this.destroyPopper()},methods:{emitEvent:function(t){var e=t.type;this.$emit(e,t),this.$root.$emit("".concat("bv::dropdown::").concat(e),t)},showMenu:function(){var t=this;if(!this.disabled){if(!this.inNavbar)if(void 0===c.default)Object(f.a)("Popper.js not found. Falling back to CSS positioning","BDropdown");else{var e=this.dropup&&this.right||this.split?this.$el:this.$refs.toggle;e=e.$el||e,this.createPopper(e)}this.$root.$emit(w,this),this.whileOpenListen(!0),this.$nextTick((function(){t.focusMenu(),t.$emit("shown")}))}},hideMenu:function(){this.whileOpenListen(!1),this.$root.$emit(j,this),this.$emit("hidden"),this.destroyPopper()},createPopper:function(t){this.destroyPopper(),this.$_popper=new c.default(t,this.$refs.menu,this.getPopperConfig())},destroyPopper:function(){this.$_popper&&this.$_popper.destroy(),this.$_popper=null},updatePopper:function(){try{this.$_popper.scheduleUpdate()}catch(t){}},getPopperConfig:function(){var t=S;this.dropup?t=this.right?C:P:this.dropright?t=_:this.dropleft?t=$:this.right&&(t=E);var e={placement:t,modifiers:{offset:{offset:this.offset||0},flip:{enabled:!this.noFlip}}};return this.boundary&&(e.modifiers.preventOverflow={boundariesElement:this.boundary}),m(m({},e),this.popperOpts||{})},whileOpenListen:function(t){this.listenForClickOut=t,this.listenForFocusIn=t;var e=t?"$on":"$off";this.$root[e](w,this.rootCloseListener)},rootCloseListener:function(t){t!==this&&(this.visible=!1)},show:function(){var t=this;this.disabled||Object(d.u)((function(){t.visible=!0}))},hide:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.disabled||(this.visible=!1,t&&this.$once("hidden",this.focusToggler))},toggle:function(t){var e=t=t||{},i=e.type,n=e.keyCode;("click"===i||"keydown"===i&&-1!==[l.a.ENTER,l.a.SPACE,l.a.DOWN].indexOf(n))&&(this.disabled?this.visible=!1:(this.$emit("toggle",t),t.preventDefault(),t.stopPropagation(),this.visible?this.hide(!0):this.show()))},onMousedown:function(t){t.preventDefault()},onKeydown:function(t){var e=t.keyCode;e===l.a.ESC?this.onEsc(t):e===l.a.DOWN?this.focusNext(t,!1):e===l.a.UP&&this.focusNext(t,!0)},onEsc:function(t){this.visible&&(this.visible=!1,t.preventDefault(),t.stopPropagation(),this.$once("hidden",this.focusToggler))},onSplitClick:function(t){this.disabled?this.visible=!1:this.$emit("click",t)},hideHandler:function(t){var e=t.target;!this.visible||Object(d.d)(this.$refs.menu,e)||Object(d.d)(this.toggler,e)||this.hide()},clickOutHandler:function(t){this.hideHandler(t)},focusInHandler:function(t){this.hideHandler(t)},focusNext:function(t,e){var i=this,n=t.target;!this.visible||t&&Object(d.c)(k.FORM_CHILD,n)||(t.preventDefault(),t.stopPropagation(),this.$nextTick((function(){var t=i.getItems();if(!(t.length<1)){var r=t.indexOf(n);e&&r>0?r--:!e&&r<t.length-1&&r++,r<0&&(r=0),i.focusItem(r,t)}})))},focusItem:function(t,e){var i=e.find((function(e,i){return i===t}));i&&i.focus&&i.focus()},getItems:function(){return(Object(d.w)(k.ITEM_SELECTOR,this.$refs.menu)||[]).filter(d.o)},focusMenu:function(){try{this.$refs.menu.focus()}catch(t){}},focusToggler:function(){var t=this;this.$nextTick((function(){var e=t.toggler;e&&e.focus&&e.focus()}))}}},I=i("EQ0+"),x=i("ofGl"),T="BDropdown",H={text:{type:String,default:""},html:{type:String},size:{type:String,default:function(){return Object(s.b)(T,"size")}},variant:{type:String,default:function(){return Object(s.b)(T,"variant")}},block:{type:Boolean,default:!1},menuClass:{type:[String,Array,Object]},toggleTag:{type:String,default:"button"},toggleText:{type:String,default:function(){return Object(s.b)(T,"toggleText")}},toggleClass:{type:[String,Array,Object]},noCaret:{type:Boolean,default:!1},split:{type:Boolean,default:!1},splitHref:{type:String},splitTo:{type:[String,Object]},splitVariant:{type:String,default:function(){return Object(s.b)(T,"splitVariant")}},splitClass:{type:[String,Array,Object]},splitButtonType:{type:String,default:"button",validator:function(t){return Object(r.a)(["button","submit","reset"],t)}},lazy:{type:Boolean,default:!1},role:{type:String,default:"menu"}},z=n.a.extend({name:T,mixins:[a.a,B,I.a],props:H,computed:{dropdownClasses:function(){return[this.directionClass,{show:this.visible,"btn-group":this.split||!this.block,"d-flex":this.block&&this.split,"position-static":"scrollParent"!==this.boundary||!this.boundary}]},menuClasses:function(){return[this.menuClass,{"dropdown-menu-right":this.right,show:this.visible}]},toggleClasses:function(){return[this.toggleClass,{"dropdown-toggle-split":this.split,"dropdown-toggle-no-caret":this.noCaret&&!this.split}]}},render:function(t){var e=t(),i=this.normalizeSlot("button-content")||this.html||Object(o.b)(this.text);if(this.split){var n={variant:this.splitVariant||this.variant,size:this.size,block:this.block,disabled:this.disabled};this.splitTo?n.to=this.splitTo:this.splitHref?n.href=this.splitHref:this.splitButtonType&&(n.type=this.splitButtonType),e=t(x.a,{ref:"button",props:n,class:this.splitClass,attrs:{id:this.safeId("_BV_button_")},on:{click:this.onSplitClick}},[i])}var r=t(x.a,{ref:"toggle",staticClass:"dropdown-toggle",class:this.toggleClasses,props:{tag:this.toggleTag,variant:this.variant,size:this.size,block:this.block&&!this.split,disabled:this.disabled},attrs:{id:this.safeId("_BV_toggle_"),"aria-haspopup":"true","aria-expanded":this.visible?"true":"false"},on:{mousedown:this.onMousedown,click:this.toggle,keydown:this.toggle}},[this.split?t("span",{class:["sr-only"]},[this.toggleText]):i]),s=t("ul",{ref:"menu",staticClass:"dropdown-menu",class:this.menuClasses,attrs:{role:this.role,tabindex:"-1","aria-labelledby":this.safeId(this.split?"_BV_button_":"_BV_toggle_")},on:{keydown:this.onKeydown}},!this.lazy||this.visible?this.normalizeSlot("default",{hide:this.hide}):[t()]);return t("div",{staticClass:"dropdown b-dropdown",class:this.dropdownClasses,attrs:{id:this.safeId()}},[e,r,s])}})},Yyc1:function(t,e,i){"use strict";var n=i("o/E4"),r=i("XLEV"),o=i("s1D3"),s=i("Pyw5"),a=i.n(s);var c=".dropdown-item:not(.disabled):not([disabled]),.form-control:not(.disabled):not([disabled])";const l={components:{BDropdown:{extends:r.a,methods:{getItems:function(){return(Object(n.w)(c,this.$refs.menu)||[]).filter(n.o)}}},GlIcon:o.a},inheritAttrs:!1,props:{text:{type:String,required:!1,default:""},noCaret:{type:Boolean,required:!1,default:!1},split:{type:Boolean,required:!1,default:!1}},computed:{renderCaret:function(){return!this.split&&!this.noCaret}},methods:{hide:function(){var t;(t=this.$refs.dropdown).hide.apply(t,arguments)},show:function(){var t;(t=this.$refs.dropdown).show.apply(t,arguments)}}};const u=a()({render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-dropdown",t._g(t._b({ref:"dropdown",staticClass:"gl-dropdown",attrs:{split:t.split}},"b-dropdown",t.$attrs,!1),t.$listeners),[t._t("default"),t._v(" "),t._t("button-content",[i("span",{staticClass:"gl-dropdown-toggle-text"},[t._v(t._s(t.text))]),t._v(" "),t.renderCaret?i("gl-icon",{staticClass:"gl-dropdown-caret",attrs:{name:"chevron-down","aria-hidden":"true"}}):t._e()],{slot:"button-content"})],2)},staticRenderFns:[]},void 0,l,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=u},k4g8:function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));var n=i("/Szx"),r=i("lgrP");function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function s(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){a(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var c={tag:{type:String,default:"hr"}},l=n.a.extend({name:"BDropdownDivider",functional:!0,props:c,render:function(t,e){var i=e.props,n=e.data,o=n.attrs||{};return n.attrs={},t("li",Object(r.a)(n,{attrs:{role:"presentation"}}),[t(i.tag,{staticClass:"dropdown-divider",attrs:s(s({},o),{},{role:"separator","aria-orientation":"horizontal"}),ref:"divider"})])}})},"q79+":function(t,e,i){"use strict";i.d(e,"a",(function(){return d}));var n=i("/Szx"),r=i("o/E4"),o=i("EQ0+"),s=i("1m+M");function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach((function(e){l(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function l(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var u=Object(s.b)(),d=n.a.extend({name:"BDropdownItem",mixins:[o.a],inheritAttrs:!1,inject:{bvDropdown:{default:null}},props:c(c({},u),{},{linkClass:{type:[String,Array,Object],default:null},variant:{type:String,default:null}}),methods:{closeDropdown:function(){var t=this;Object(r.u)((function(){t.bvDropdown&&t.bvDropdown.hide(!0)}))},onClick:function(t){this.$emit("click",t),this.closeDropdown()}},render:function(t){return t("li",{attrs:{role:"presentation"}},[t(s.a,{props:this.$props,staticClass:"dropdown-item",class:[this.linkClass,l({},"text-".concat(this.variant),this.variant&&!(this.active||this.disabled))],attrs:c(c({},this.$attrs),{},{role:"menuitem"}),on:{click:this.onClick},ref:"item"},this.normalizeSlot("default"))])}})},wP8z:function(t,e,i){"use strict";var n=i("q79+"),r=i("SU48"),o=i("Pyw5");const s={inheritAttrs:!1,computed:{bootstrapComponent:function(){return this.$attrs.href?n.a:r.a}}};const a=i.n(o)()({render:function(){var t=this.$createElement;return(this._self._c||t)(this.bootstrapComponent,this._g(this._b({tag:"component"},"component",this.$attrs,!1),this.$listeners),[this._t("default")],2)},staticRenderFns:[]},void 0,s,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=a}}]);
//# sourceMappingURL=58.1170b379.chunk.js.map