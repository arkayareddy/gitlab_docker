(this.webpackJsonp=this.webpackJsonp||[]).push([[61],{"4lAS":function(t,e,n){"use strict";var r=n("ofGl"),i=n("s1D3"),o=n("FkSe"),s=n("LCwo"),a=n("XBTk"),c=n("Pyw5"),u=n.n(c);const l={components:{BButton:r.a,GlIcon:i.a,GlLoadingIcon:o.a},mixins:[s.a],props:{category:{type:String,required:!1,default:a.u.tertiary,validator:function(t){return Object.keys(a.u).includes(t)}},variant:{type:String,required:!1,default:a.x.default,validator:function(t){return Object.keys(a.x).includes(t)}},size:{type:String,required:!1,default:a.v.medium,validator:function(t){return Object.keys(a.v).includes(t)}},selected:{type:Boolean,required:!1,default:!1},icon:{type:String,required:!1,default:""},label:{type:Boolean,required:!1,default:!1},loading:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1}},computed:{hasIcon:function(){return""!==this.icon},hasIconOnly:function(){return 0===Object.keys(this.$slots).length&&this.hasIcon},isButtonDisabled:function(){return this.disabled||this.loading},buttonClasses:function(){return{"btn-icon":this.hasIconOnly,"button-ellipsis-horizontal":this.hasIconOnly&&"ellipsis_h"===this.icon,"btn-secondary":this.category===a.u.secondary,"gl-button":this.variant!==a.x.link,"btn-label":this.label,selected:this.selected}},buttonSize:function(){return a.w[this.size]}}};const d=u()({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-button",t._g(t._b({class:t.buttonClasses,attrs:{rel:t.relType,target:t.target,variant:t.variant,size:t.buttonSize,disabled:t.isButtonDisabled}},"b-button",t.$attrs,!1),t.$listeners),[t.loading?n("gl-loading-icon",{staticClass:"gl-button-loading-indicator",attrs:{inline:""}}):t._e(),t._v(" "),t.hasIcon?n("gl-icon",{attrs:{name:t.icon}}):t._e(),t._v(" "),t._t("emoji"),t._v(" "),t.hasIconOnly?t._e():n("span",{staticClass:"gl-button-text"},[t._t("default")],2)],2)},staticRenderFns:[]},void 0,l,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=d},GTbw:function(t,e,n){"use strict";n.d(e,"a",(function(){return y}));var r=n("/Szx"),i=n("TjC/"),o=n("QXXq"),s=n("DXSV"),a=n("Vxxt"),c=n("Tu1i"),u=n("QlUp"),l=n("Qo4I"),d=n("ZKBa"),f=n("xy9X");function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var b=["text","password","email","number","url","tel","search","range","color","date","time","datetime","datetime-local","month","week"],y=r.a.extend({name:"BFormInput",mixins:[s.a,a.a,c.a,u.a,l.a,d.a,f.a],props:{type:{type:String,default:"text",validator:function(t){return Object(i.a)(b,t)}},noWheel:{type:Boolean,default:!1},min:{type:[String,Number]},max:{type:[String,Number]},step:{type:[String,Number]},list:{type:String}},computed:{localType:function(){return Object(i.a)(b,this.type)?this.type:"text"}},watch:{noWheel:function(t){this.setWheelStopper(t)}},mounted:function(){this.setWheelStopper(this.noWheel)},deactivated:function(){this.setWheelStopper(!1)},activated:function(){this.setWheelStopper(this.noWheel)},beforeDestroy:function(){this.setWheelStopper(!1)},methods:{setWheelStopper:function(t){var e=this.$el;Object(o.e)(t,e,"focus",this.onWheelFocus),Object(o.e)(t,e,"blur",this.onWheelBlur),t||Object(o.c)(document,"wheel",this.stopWheel)},onWheelFocus:function(){Object(o.d)(document,"wheel",this.stopWheel)},onWheelBlur:function(){Object(o.c)(document,"wheel",this.stopWheel)},stopWheel:function(t){t.preventDefault(),this.$el.blur()}},render:function(t){return t("input",{ref:"input",class:this.computedClass,directives:[{name:"model",rawName:"v-model",value:this.localValue,expression:"localValue"}],attrs:{id:this.safeId(),name:this.name,form:this.form||null,type:this.localType,disabled:this.disabled,placeholder:this.placeholder,required:this.required,autocomplete:this.autocomplete||null,readonly:this.readonly||this.plaintext,min:this.min,max:this.max,step:this.step,list:"password"!==this.localType?this.list:null,"aria-required":this.required?"true":null,"aria-invalid":this.computedAriaInvalid},domProps:{value:this.localValue},on:h(h({},this.$listeners),{},{input:this.onInput,change:this.onChange,blur:this.onBlur})})}})},IUcQ:function(t,e,n){"use strict";n.r(e);n("va8A"),n("kO4A"),n("+kFb"),n("OZM5"),n("S6uq"),n("zCcL"),n("zpLX"),n("BD5p"),n("tbvx"),n("Id6h");var r=n("jB52"),i=n("0KyK");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c={props:{modalConfiguration:{required:!0,type:Object},actionModals:{required:!0,type:Object},csrfToken:{required:!0,type:String}},data:function(){return{currentModalData:null}},computed:{activeModal:function(){if(!this.currentModalData)return null;var t=this.currentModalData.glModalAction;return this.actionModals[t]},modalProps:function(){var t=this.currentModalData.glModalAction;return s(s(s({},this.modalConfiguration[t]),this.currentModalData),{},{csrfToken:this.csrfToken})}},mounted:function(){document.addEventListener("click",this.handleClick)},beforeDestroy:function(){document.removeEventListener("click",this.handleClick)},methods:{handleClick:function(t){t.target.dataset.glModalAction&&(this.show(t.target.dataset),t.preventDefault())},show:function(t){var e=this,n=t.glModalAction;if(!this.actionModals[n])throw new Error("Requested non-existing modal action ".concat(n));if(!this.modalConfiguration[n])throw new Error("Modal action ".concat(n," has no configuration in HTML"));return this.currentModalData=t,this.$nextTick().then((function(){e.$refs.modal.show()}))}}},u=n("tBpV"),l=Object(u.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return this.activeModal?e(this.activeModal,this._b({ref:"modal",tag:"div"},"div",this.modalProps,!1)):this._e()}),[],!1,null,null,null).exports,d=n("G3fq"),f=n.n(d),p=n("1cpz"),h=n("GTGS"),m=n("PrLL"),b=n("/lV4"),y={components:{GlModal:p.a,GlDeprecatedButton:h.a,GlFormInput:m.a},props:{title:{type:String,required:!0},content:{type:String,required:!0},action:{type:String,required:!0},secondaryAction:{type:String,required:!0},deleteUserUrl:{type:String,required:!0},blockUserUrl:{type:String,required:!0},username:{type:String,required:!0},csrfToken:{type:String,required:!0}},data:function(){return{enteredUsername:""}},computed:{modalTitle:function(){return Object(b.e)(this.title,{username:this.username})},text:function(){return Object(b.e)(this.content,{username:"<strong>".concat(f()(this.username),"</strong>"),strong_start:"<strong>",strong_end:"</strong>"},!1)},confirmationTextLabel:function(){return Object(b.e)(Object(b.d)("AdminUsers|To confirm, type %{username}"),{username:"<code>".concat(f()(this.username),"</code>")},!1)},secondaryButtonLabel:function(){return Object(b.d)("AdminUsers|Block user")},canSubmit:function(){return this.enteredUsername===this.username}},methods:{show:function(){this.$refs.modal.show()},onCancel:function(){this.enteredUsername="",this.$refs.modal.hide()},onSecondaryAction:function(){var t=this.$refs.form;t.action=this.blockUserUrl,this.$refs.method.value="put",t.submit()},onSubmit:function(){this.$refs.form.submit(),this.enteredUsername=""}}},v=Object(u.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("gl-modal",{ref:"modal",attrs:{"modal-id":"delete-user-modal",title:t.modalTitle,kind:"danger"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[n("gl-deprecated-button",{attrs:{variant:"secondary"},on:{click:t.onCancel}},[t._v(t._s(t.s__("Cancel")))]),t._v(" "),n("gl-deprecated-button",{attrs:{disabled:!t.canSubmit,variant:"warning"},on:{click:t.onSecondaryAction}},[t._v("\n      "+t._s(t.secondaryAction)+"\n    ")]),t._v(" "),n("gl-deprecated-button",{attrs:{disabled:!t.canSubmit,variant:"danger"},on:{click:t.onSubmit}},[t._v(t._s(t.action))])]},proxy:!0}])},[[n("p",{domProps:{innerHTML:t._s(t.text)}}),t._v(" "),n("p",{domProps:{innerHTML:t._s(t.confirmationTextLabel)}}),t._v(" "),n("form",{ref:"form",attrs:{action:t.deleteUserUrl,method:"post"},on:{submit:function(t){t.preventDefault()}}},[n("input",{ref:"method",attrs:{type:"hidden",name:"_method",value:"delete"}}),t._v(" "),n("input",{attrs:{type:"hidden",name:"authenticity_token"},domProps:{value:t.csrfToken}}),t._v(" "),n("gl-form-input",{attrs:{autofocus:"",type:"text",name:"username",autocomplete:"off"},model:{value:t.enteredUsername,callback:function(e){t.enteredUsername=e},expression:"enteredUsername"}})],1)]],2)}),[],!1,null,null,null).exports,g={components:{GlModal:p.a},props:{title:{type:String,required:!0},content:{type:String,required:!0},action:{type:String,required:!0},url:{type:String,required:!0},username:{type:String,required:!0},csrfToken:{type:String,required:!0},method:{type:String,required:!1,default:"put"}},computed:{modalTitle:function(){return Object(b.e)(this.title,{username:this.username})}},methods:{show:function(){this.$refs.modal.show()},submit:function(){this.$refs.form.submit()}}},O=Object(u.a)(g,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("gl-modal",{ref:"modal",attrs:{"modal-id":"user-operation-modal",title:t.modalTitle,"ok-variant":"warning","ok-title":t.action},on:{ok:t.submit}},[n("form",{ref:"form",attrs:{action:t.url,method:"post"}},[n("span",{domProps:{innerHTML:t._s(t.content)}}),t._v(" "),n("input",{ref:"method",attrs:{type:"hidden",name:"_method"},domProps:{value:t.method}}),t._v(" "),n("input",{attrs:{type:"hidden",name:"authenticity_token"},domProps:{value:t.csrfToken}})])])}),[],!1,null,null,null).exports,S=n("Qhxq");function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(Object(n),!0).forEach((function(e){w(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function w(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function k(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var P={deactivate:O,block:O,delete:v,"delete-with-contributions":v};document.addEventListener("DOMContentLoaded",(function(){r.default.use(i.a);var t=function(t){var e={};if(!t)throw new Error("Modals content element not found!");return Array.from(t.children).forEach((function(t){var n=t.dataset,r=n.modal,i=k(n,["modal"]);e[r]=_(_({title:t.dataset.title},i),{},{content:t.innerHTML})})),e}(document.querySelector("#modal-texts"));new r.default({el:"#user-modal",functional:!0,methods:{show:function(){var t;(t=this.$refs.manager).show.apply(t,arguments)}},render:function(e){return e(l,{ref:"manager",props:{modalConfiguration:t,actionModals:P,csrfToken:S.a.token}})}})}))},PrLL:function(t,e,n){"use strict";var r=n("GTbw"),i=n("Pyw5"),o=n.n(i);const s={components:{BFormInput:r.a},inheritAttrs:!1};const a=o()({render:function(){var t=this.$createElement;return(this._self._c||t)("b-form-input",this._g(this._b({staticClass:"gl-form-input"},"b-form-input",this.$attrs,!1),this.$listeners))},staticRenderFns:[]},void 0,s,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=a},QlUp:function(t,e,n){"use strict";var r=n("BrvI");e.a={props:{state:{type:Boolean,default:null}},computed:{computedState:function(){return Object(r.a)(this.state)?this.state:null},stateClass:function(){var t=this.computedState;return!0===t?"is-valid":!1===t?"is-invalid":null}}}},Qo4I:function(t,e,n){"use strict";var r=n("BrvI"),i=n("9aS3"),o=n("Ddgg"),s=n("bvam");e.a={model:{prop:"value",event:"update"},props:{value:{type:[String,Number],default:""},ariaInvalid:{type:[Boolean,String],default:!1},readonly:{type:Boolean,default:!1},plaintext:{type:Boolean,default:!1},autocomplete:{type:String},placeholder:{type:String},formatter:{type:Function},lazyFormatter:{type:Boolean,default:!1},trim:{type:Boolean,default:!1},number:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},debounce:{type:[Number,String],default:0}},data:function(){return{localValue:Object(s.d)(this.value),vModelValue:this.value}},computed:{computedClass:function(){return[{"custom-range":"range"===this.type,"form-control-plaintext":this.plaintext&&"range"!==this.type&&"color"!==this.type,"form-control":!this.plaintext&&"range"!==this.type||"color"===this.type},this.sizeFormClass,this.stateClass]},computedAriaInvalid:function(){return this.ariaInvalid&&"false"!==this.ariaInvalid?!0===this.ariaInvalid?"true":this.ariaInvalid:!1===this.computedState?"true":null},computedDebounce:function(){return Object(i.b)(Object(o.c)(this.debounce,0),0)},hasFormatter:function(){return Object(r.d)(this.formatter)}},watch:{value:function(t){var e=Object(s.d)(t);e!==this.localValue&&t!==this.vModelValue&&(this.clearDebounce(),this.localValue=e,this.vModelValue=t)}},mounted:function(){this.$_inputDebounceTimer=null,this.$on("hook:beforeDestroy",this.clearDebounce);var t=this.value,e=Object(s.d)(t);e!==this.localValue&&t!==this.vModelValue&&(this.localValue=e,this.vModelValue=t)},methods:{clearDebounce:function(){clearTimeout(this.$_inputDebounceTimer),this.$_inputDebounceTimer=null},formatValue:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t=Object(s.d)(t),!this.hasFormatter||this.lazyFormatter&&!n||(t=this.formatter(t,e)),t},modifyValue:function(t){return this.trim&&(t=t.trim()),this.number&&(t=Object(o.b)(t,t)),t},updateValue:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this.lazy;if(!r||n)if((t=this.modifyValue(t))!==this.vModelValue){this.clearDebounce();var i=function(){e.vModelValue=t,e.$emit("update",t)},o=this.computedDebounce;o>0&&!r&&!n?this.$_inputDebounceTimer=setTimeout(i,o):i()}else if(this.hasFormatter){var s=this.$refs.input;s&&t!==s.value&&(s.value=t)}},onInput:function(t){if(!t.target.composing){var e=t.target.value,n=this.formatValue(e,t);!1===n||t.defaultPrevented?t.preventDefault():(this.localValue=n,this.updateValue(n),this.$emit("input",n))}},onChange:function(t){var e=t.target.value,n=this.formatValue(e,t);!1===n||t.defaultPrevented?t.preventDefault():(this.localValue=n,this.updateValue(n,!0),this.$emit("change",n))},onBlur:function(t){var e=t.target.value,n=this.formatValue(e,t,!0);!1!==n&&(this.localValue=Object(s.d)(this.modifyValue(n)),this.updateValue(n,!0)),this.$emit("blur",t)},focus:function(){this.disabled||this.$el.focus()},blur:function(){this.disabled||this.$el.blur()}}}},Tu1i:function(t,e,n){"use strict";var r=n("t8l0");e.a={props:{size:{type:String,default:function(){return Object(r.b)("formControls","size")}}},computed:{sizeFormClass:function(){return[this.size?"form-control-".concat(this.size):null]},sizeBtnClass:function(){return[this.size?"btn-".concat(this.size):null]}}}},Vxxt:function(t,e,n){"use strict";var r=n("o/E4");e.a={props:{name:{type:String},id:{type:String},disabled:{type:Boolean},required:{type:Boolean,default:!1},form:{type:String},autofocus:{type:Boolean,default:!1}},mounted:function(){this.handleAutofocus()},activated:function(){this.handleAutofocus()},methods:{handleAutofocus:function(){var t=this;this.$nextTick((function(){Object(r.u)((function(){var e=t.$el;t.autofocus&&Object(r.o)(e)&&(Object(r.p)(e,"input, textarea, select")||(e=Object(r.v)("input, textarea, select",e)),e&&e.focus&&e.focus())}))}))}}}},ZKBa:function(t,e,n){"use strict";e.a={computed:{selectionStart:{cache:!1,get:function(){return this.$refs.input.selectionStart},set:function(t){this.$refs.input.selectionStart=t}},selectionEnd:{cache:!1,get:function(){return this.$refs.input.selectionEnd},set:function(t){this.$refs.input.selectionEnd=t}},selectionDirection:{cache:!1,get:function(){return this.$refs.input.selectionDirection},set:function(t){this.$refs.input.selectionDirection=t}}},methods:{select:function(){var t;(t=this.$refs.input).select.apply(t,arguments)},setSelectionRange:function(){var t;(t=this.$refs.input).setSelectionRange.apply(t,arguments)},setRangeText:function(){var t;(t=this.$refs.input).setRangeText.apply(t,arguments)}}}},dsWN:function(t,e,n){"use strict";var r=n("s1D3"),i=n("4lAS"),o=n("XBTk"),s=n("Pyw5"),a=n.n(s);function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}const d={components:{GlIcon:r.a,GlButton:i.a},props:{title:{type:String,required:!1,default:""},dismissible:{type:Boolean,required:!1,default:!0},dismissLabel:{type:String,required:!1,default:"Dismiss"},variant:{type:String,required:!1,default:o.b.info,validator:function(t){return Object.keys(o.b).includes(t)}},primaryButtonLink:{type:String,required:!1,default:""},primaryButtonText:{type:String,required:!1,default:""},secondaryButtonLink:{type:String,required:!1,default:""},secondaryButtonText:{type:String,required:!1,default:""}},computed:{iconName:function(){return o.a[this.variant]},shouldRenderActions:function(){return Boolean(this.$slots.actions||this.actionButtons.length)},actionButtons:function(){return[{text:this.primaryButtonText,attrs:{href:this.primaryButtonLink,variant:"info",category:o.u.primary},listeners:{click:this.primaryButtonClicked}},{text:this.secondaryButtonText,attrs:{href:this.secondaryButtonLink,variant:"default",category:o.u.secondary},listeners:{click:this.secondaryButtonClicked}}].reduce((function(t,e){if(!e.text)return t;var n=l({},e.attrs);return n.href||delete n.href,t.push(l(l({},e),{},{attrs:n})),t}),[])},variantClass:function(){return"gl-alert-".concat(this.variant)}},methods:{primaryButtonClicked:function(t){this.$emit("primaryAction",t)},secondaryButtonClicked:function(t){this.$emit("secondaryAction",t)},onDismiss:function(){this.$emit("dismiss")}}};const f=a()({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["gl-alert",t.variantClass],attrs:{role:"alert"}},[n("gl-icon",{class:{"gl-alert-icon":!0,"gl-alert-icon-no-title":!t.title},attrs:{name:t.iconName}}),t._v(" "),t.dismissible?n("button",{ref:"dismiss",staticClass:"gl-alert-dismiss",attrs:{type:"button","aria-label":t.dismissLabel},on:{click:t.onDismiss}},[n("gl-icon",{attrs:{name:"close"}})],1):t._e(),t._v(" "),t.title?n("h4",{staticClass:"gl-alert-title"},[t._v(t._s(t.title))]):t._e(),t._v(" "),n("div",{staticClass:"gl-alert-body"},[t._t("default")],2),t._v(" "),t.shouldRenderActions?n("div",{staticClass:"gl-alert-actions"},[t._t("actions",t._l(t.actionButtons,(function(e,r){return n("gl-button",t._g(t._b({key:r,staticClass:"gl-alert-action"},"gl-button",e.attrs,!1),e.listeners),[t._v("\n        "+t._s(e.text)+"\n      ")])})))],2):t._e()],1)},staticRenderFns:[]},void 0,d,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=f},iooJ:function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"requestStatistics",(function(){return w})),n.d(r,"fetchStatistics",(function(){return k})),n.d(r,"receiveStatisticsSuccess",(function(){return P})),n.d(r,"receiveStatisticsError",(function(){return D})),n.d(r,"default",(function(){return T}));var i={};n.r(i),n.d(i,"getStatistics",(function(){return C})),n.d(i,"default",(function(){return $}));n("t3Gg");var o=n("3a3M"),s=n.n(o),a=n("3twG");function c(){"file"===s()('input[name="blacklist_type"]:checked').val()?(s()(".blacklist-file").show(),s()(".blacklist-raw").hide()):(s()(".blacklist-file").hide(),s()(".blacklist-raw").show())}var u=n("jB52"),l=(n("va8A"),n("kO4A"),n("+kFb"),n("zCcL"),n("zpLX"),n("BD5p"),n("Id6h"),n("yi8e")),d=n("FkSe"),f=n("/lV4"),p={forks:Object(f.d)("AdminStatistics|Forks"),issues:Object(f.d)("AdminStatistics|Issues"),mergeRequests:Object(f.d)("AdminStatistics|Merge Requests"),notes:Object(f.d)("AdminStatistics|Notes"),snippets:Object(f.d)("AdminStatistics|Snippets"),sshKeys:Object(f.d)("AdminStatistics|SSH Keys"),milestones:Object(f.d)("AdminStatistics|Milestones"),activeUsers:Object(f.d)("AdminStatistics|Active Users")};function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){b(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var y,v={components:{GlLoadingIcon:d.a},data:function(){return{statisticsLabels:p}},computed:m(m({},Object(l.e)(["isLoading","statistics"])),Object(l.d)(["getStatistics"])),mounted:function(){this.fetchStatistics()},methods:m({},Object(l.c)(["fetchStatistics"]))},g=n("tBpV"),O=Object(g.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info-well"},[n("div",{staticClass:"well-segment admin-well admin-well-statistics"},[n("h4",[t._v(t._s(t.__("Statistics")))]),t._v(" "),t.isLoading?n("gl-loading-icon",{staticClass:"my-3",attrs:{size:"md"}}):t._l(t.getStatistics(t.statisticsLabels),(function(e){return n("p",{key:e.key,staticClass:"js-stats"},[t._v("\n        "+t._s(e.label)+"\n        "),n("span",{staticClass:"light float-right"},[t._v(t._s(e.value))])])}))],2)])}),[],!1,null,null,null).exports,S=n("qPgm"),j=n("XRO8"),_=n("NmEs"),w=function(t){return(0,t.commit)("REQUEST_STATISTICS")},k=function(t){var e=t.dispatch;e("requestStatistics"),S.a.adminStatistics().then((function(t){var n=t.data;e("receiveStatisticsSuccess",Object(_.g)(n,{deep:!0}))})).catch((function(t){return e("receiveStatisticsError",t)}))},P=function(t,e){return(0,t.commit)("RECEIVE_STATISTICS_SUCCESS",e)},D=function(t,e){(0,t.commit)("RECEIVE_STATISTICS_ERROR",e),Object(j.a)(Object(f.d)("AdminDashboard|Error loading the statistics. Please try again"))},T=function(){},C=(n("Z5ek"),function(t){return function(e){return Object.keys(e).map((function(n){return{key:n,label:e[n],value:t.statistics&&t.statistics[n]?t.statistics[n]:null}}))}}),$=function(){};function x(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var B=(x(y={},"REQUEST_STATISTICS",(function(t){t.isLoading=!0})),x(y,"RECEIVE_STATISTICS_SUCCESS",(function(t,e){t.isLoading=!1,t.error=null,t.statistics=e})),x(y,"RECEIVE_STATISTICS_ERROR",(function(t,e){t.isLoading=!1,t.error=e})),y);u.default.use(l.b);var E=function(t){if(!t)return!1;var e=new l.b.Store({actions:r,getters:i,mutations:B,state:{error:null,isLoading:!1,statistics:null}});return new u.default({el:t,store:e,components:{StatisticsPanelApp:O},render:function(t){return t(O)}})},I=(n("z4I3"),n("dj/k"),n("OZM5"),n("x/6R"),n("4ql4"),n("8Qi2"),n("MRnW"),n("GzNv"),n("tbvx"),n("orcL"),{components:{GlAlert:n("dsWN").a},props:{html:{type:String,required:!1,default:""}},data:function(){return{isDismissed:!1}},methods:{dismiss:function(){this.isDismissed=!0}}}),q=Object(g.a)(I,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isDismissed?t._e():n("gl-alert",t._g(t._b({on:{dismiss:t.dismiss}},"gl-alert",t.$attrs,!1),t.$listeners),[n("div",{domProps:{innerHTML:t._s(t.html)}})])}),[],!1,null,null,null).exports;function A(t){return function(t){if(Array.isArray(t))return V(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return V(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return V(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function V(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function M(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function L(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?M(Object(n),!0).forEach((function(e){z(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function z(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var R=function(t){var e={html:t.innerHTML},n=L(L({},t.dataset),{},{dismissible:Object(_.H)(t.dataset.dismissible)});return new u.default({el:t,render:function(t){return t(q,{props:e,attrs:n})}})};document.addEventListener("DOMContentLoaded",(function(){return A(document.querySelectorAll(".js-vue-alert")).map(R)})),document.addEventListener("DOMContentLoaded",(function(){var t,e=document.getElementById("js-admin-statistics-container");t=s()(".change-owner-holder"),s()("input#user_force_random_password").on("change",(function(){var t=s()("#user_password, #user_password_confirmation");s()(this).attr("checked")?t.val("").prop("disabled",!0):t.prop("disabled",!1)})),s()("body").on("click",".js-toggle-colors-link",(function(t){t.preventDefault(),s()(".js-toggle-colors-container").toggleClass("hide")})),s()(".log-tabs a").on("click",(function(t){t.preventDefault(),s()(this).tab("show")})),s()(".log-bottom").on("click",(function(t){t.preventDefault();var e=s()(".file-content:visible");e.animate({scrollTop:e.find("ol").height()},"fast")})),s()(".change-owner-link").on("click",(function(e){e.preventDefault(),s()(this).hide(),t.show()})),s()(".change-owner-cancel-link").on("click",(function(e){e.preventDefault(),t.hide(),s()(".change-owner-link").show()})),s()("li.project_member, li.group_member").on("ajax:success",a.r),s()("input[name='blacklist_type']").on("click",c),c(),E(e)}))},xy9X:function(t,e,n){"use strict";e.a={computed:{validity:{cache:!1,get:function(){return this.$refs.input.validity}},validationMessage:{cache:!1,get:function(){return this.$refs.input.validationMessage}},willValidate:{cache:!1,get:function(){return this.$refs.input.willValidate}}},methods:{setCustomValidity:function(){var t;return(t=this.$refs.input).setCustomValidity.apply(t,arguments)},checkValidity:function(){var t;return(t=this.$refs.input).checkValidity.apply(t,arguments)},reportValidity:function(){var t;return(t=this.$refs.input).reportValidity.apply(t,arguments)}}}}}]);
//# sourceMappingURL=commons~pages.admin.users~pages.admin.users.new.d010e420.chunk.js.map