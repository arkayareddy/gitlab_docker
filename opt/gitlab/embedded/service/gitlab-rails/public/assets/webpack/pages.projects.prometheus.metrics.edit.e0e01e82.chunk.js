(this.webpackJsonp=this.webpackJsonp||[]).push([[263],{"+5hy":function(t,e,i){"use strict";i.r(e);var n=i("O2C9");document.addEventListener("DOMContentLoaded",n.a)},168:function(t,e,i){i("HVBj"),i("gjpc"),t.exports=i("+5hy")},GTbw:function(t,e,i){"use strict";i.d(e,"a",(function(){return b}));var n=i("/Szx"),r=i("TjC/"),a=i("QXXq"),o=i("DXSV"),s=i("Vxxt"),l=i("Tu1i"),u=i("QlUp"),c=i("Qo4I"),d=i("ZKBa"),h=i("xy9X");function p(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function f(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?p(Object(i),!0).forEach((function(e){m(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function m(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var v=["text","password","email","number","url","tel","search","range","color","date","time","datetime","datetime-local","month","week"],b=n.a.extend({name:"BFormInput",mixins:[o.a,s.a,l.a,u.a,c.a,d.a,h.a],props:{type:{type:String,default:"text",validator:function(t){return Object(r.a)(v,t)}},noWheel:{type:Boolean,default:!1},min:{type:[String,Number]},max:{type:[String,Number]},step:{type:[String,Number]},list:{type:String}},computed:{localType:function(){return Object(r.a)(v,this.type)?this.type:"text"}},watch:{noWheel:function(t){this.setWheelStopper(t)}},mounted:function(){this.setWheelStopper(this.noWheel)},deactivated:function(){this.setWheelStopper(!1)},activated:function(){this.setWheelStopper(this.noWheel)},beforeDestroy:function(){this.setWheelStopper(!1)},methods:{setWheelStopper:function(t){var e=this.$el;Object(a.e)(t,e,"focus",this.onWheelFocus),Object(a.e)(t,e,"blur",this.onWheelBlur),t||Object(a.c)(document,"wheel",this.stopWheel)},onWheelFocus:function(){Object(a.d)(document,"wheel",this.stopWheel)},onWheelBlur:function(){Object(a.c)(document,"wheel",this.stopWheel)},stopWheel:function(t){t.preventDefault(),this.$el.blur()}},render:function(t){return t("input",{ref:"input",class:this.computedClass,directives:[{name:"model",rawName:"v-model",value:this.localValue,expression:"localValue"}],attrs:{id:this.safeId(),name:this.name,form:this.form||null,type:this.localType,disabled:this.disabled,placeholder:this.placeholder,required:this.required,autocomplete:this.autocomplete||null,readonly:this.readonly||this.plaintext,min:this.min,max:this.max,step:this.step,list:"password"!==this.localType?this.list:null,"aria-required":this.required?"true":null,"aria-invalid":this.computedAriaInvalid},domProps:{value:this.localValue},on:f(f({},this.$listeners),{},{input:this.onInput,change:this.onChange,blur:this.onBlur})})}})},O2C9:function(t,e,i){"use strict";var n=i("jB52"),r=i("NmEs"),a=i("GTGS"),o=i("/lV4"),s=i("Qhxq"),l=i("lvxy"),u=i("1cpz"),c=i("XqDB"),d={components:{GlModal:u.a,GlDeprecatedButton:a.a},directives:{"gl-modal":c.a},props:{deleteMetricUrl:{type:String,required:!0},csrfToken:{type:String,required:!0}},methods:{onSubmit:function(){this.$refs.form.submit()}},descriptionText:Object(o.d)("Metrics|You're about to permanently delete this metric. This cannot be undone."),modalId:"delete-custom-metric-modal"},h=i("tBpV"),p=Object(h.a)(d,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"d-inline-block float-right mr-3"},[i("gl-deprecated-button",{directives:[{name:"gl-modal",rawName:"v-gl-modal",value:t.$options.modalId,expression:"$options.modalId"}],attrs:{variant:"danger"}},[t._v("\n    "+t._s(t.__("Delete"))+"\n  ")]),t._v(" "),i("gl-modal",{attrs:{title:t.s__("Metrics|Delete metric?"),"ok-title":t.s__("Metrics|Delete metric"),"modal-id":t.$options.modalId,"ok-variant":"danger"},on:{ok:t.onSubmit}},[t._v("\n    "+t._s(t.$options.descriptionText)+"\n\n    "),i("form",{ref:"form",attrs:{action:t.deleteMetricUrl,method:"post"}},[i("input",{attrs:{type:"hidden",name:"_method",value:"delete"}}),t._v(" "),i("input",{attrs:{type:"hidden",name:"authenticity_token"},domProps:{value:t.csrfToken}})])])],1)}),[],!1,null,null,null).exports,f=i("zXS2"),m={components:{CustomMetricsFormFields:l.a,DeleteCustomMetricModal:p,GlDeprecatedButton:a.a},props:{customMetricsPath:{type:String,required:!1,default:""},metricPersisted:{type:Boolean,required:!0},editProjectServicePath:{type:String,required:!0},validateQueryPath:{type:String,required:!0},formData:{type:Object,required:!0,validator:f.a}},data:function(){return{formIsValid:null,errorMessage:""}},computed:{saveButtonText:function(){return this.metricPersisted?Object(o.a)("Save Changes"):Object(o.d)("Metrics|Create metric")},titleText:function(){return this.metricPersisted?Object(o.d)("Metrics|Edit metric"):Object(o.d)("Metrics|New metric")}},created:function(){this.csrf=null!=s.a.token?s.a.token:"",this.formOperation=this.metricPersisted?"patch":"post"},methods:{formValidation:function(t){this.formIsValid=t},submit:function(){this.$refs.form.submit()}}},v=Object(h.a)(m,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row my-3"},[i("h4",{staticClass:"gl-mt-0 col-lg-8 offset-lg-2"},[t._v(t._s(t.titleText))]),t._v(" "),i("form",{ref:"form",staticClass:"col-lg-8 offset-lg-2",attrs:{action:t.customMetricsPath,method:"post"}},[i("custom-metrics-form-fields",{attrs:{"form-operation":t.formOperation,"form-data":t.formData,"metric-persisted":t.metricPersisted,"validate-query-path":t.validateQueryPath},on:{formValidation:t.formValidation}}),t._v(" "),i("div",{staticClass:"form-actions"},[i("gl-deprecated-button",{attrs:{variant:"success",disabled:!t.formIsValid},on:{click:t.submit}},[t._v("\n        "+t._s(t.saveButtonText)+"\n      ")]),t._v(" "),i("gl-deprecated-button",{staticClass:"float-right",attrs:{variant:"secondary",href:t.editProjectServicePath}},[t._v(t._s(t.__("Cancel")))]),t._v(" "),t.metricPersisted?i("delete-custom-metric-modal",{attrs:{"delete-metric-url":t.customMetricsPath,"csrf-token":t.csrf}}):t._e()],1)],1)])}),[],!1,null,null,null).exports;e.a=function(){new n.default({el:"#js-custom-metrics",components:{CustomMetricsForm:v},render:function(t){var e=document.querySelector(this.$options.el),i=e.dataset,n=i.customMetricsPath,a=i.editProjectServicePath,o=i.validateQueryPath,s=i.title,l=i.query,u=i.yLabel,c=i.unit,d=i.group,h=i.legend,p=e.dataset.metricPersisted;return t("custom-metrics-form",{props:{customMetricsPath:n,metricPersisted:p=Object(r.H)(p),editProjectServicePath:a,validateQueryPath:o,formData:{title:s,query:l,yLabel:u,unit:c,group:d,legend:h}}})}})}},PrLL:function(t,e,i){"use strict";var n=i("GTbw"),r=i("Pyw5"),a=i.n(r);const o={components:{BFormInput:n.a},inheritAttrs:!1};const s=a()({render:function(){var t=this.$createElement;return(this._self._c||t)("b-form-input",this._g(this._b({staticClass:"gl-form-input"},"b-form-input",this.$attrs,!1),this.$listeners))},staticRenderFns:[]},void 0,o,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=s},QlUp:function(t,e,i){"use strict";var n=i("BrvI");e.a={props:{state:{type:Boolean,default:null}},computed:{computedState:function(){return Object(n.a)(this.state)?this.state:null},stateClass:function(){var t=this.computedState;return!0===t?"is-valid":!1===t?"is-invalid":null}}}},Qo4I:function(t,e,i){"use strict";var n=i("BrvI"),r=i("9aS3"),a=i("Ddgg"),o=i("bvam");e.a={model:{prop:"value",event:"update"},props:{value:{type:[String,Number],default:""},ariaInvalid:{type:[Boolean,String],default:!1},readonly:{type:Boolean,default:!1},plaintext:{type:Boolean,default:!1},autocomplete:{type:String},placeholder:{type:String},formatter:{type:Function},lazyFormatter:{type:Boolean,default:!1},trim:{type:Boolean,default:!1},number:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},debounce:{type:[Number,String],default:0}},data:function(){return{localValue:Object(o.d)(this.value),vModelValue:this.value}},computed:{computedClass:function(){return[{"custom-range":"range"===this.type,"form-control-plaintext":this.plaintext&&"range"!==this.type&&"color"!==this.type,"form-control":!this.plaintext&&"range"!==this.type||"color"===this.type},this.sizeFormClass,this.stateClass]},computedAriaInvalid:function(){return this.ariaInvalid&&"false"!==this.ariaInvalid?!0===this.ariaInvalid?"true":this.ariaInvalid:!1===this.computedState?"true":null},computedDebounce:function(){return Object(r.b)(Object(a.c)(this.debounce,0),0)},hasFormatter:function(){return Object(n.d)(this.formatter)}},watch:{value:function(t){var e=Object(o.d)(t);e!==this.localValue&&t!==this.vModelValue&&(this.clearDebounce(),this.localValue=e,this.vModelValue=t)}},mounted:function(){this.$_inputDebounceTimer=null,this.$on("hook:beforeDestroy",this.clearDebounce);var t=this.value,e=Object(o.d)(t);e!==this.localValue&&t!==this.vModelValue&&(this.localValue=e,this.vModelValue=t)},methods:{clearDebounce:function(){clearTimeout(this.$_inputDebounceTimer),this.$_inputDebounceTimer=null},formatValue:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t=Object(o.d)(t),!this.hasFormatter||this.lazyFormatter&&!i||(t=this.formatter(t,e)),t},modifyValue:function(t){return this.trim&&(t=t.trim()),this.number&&(t=Object(a.b)(t,t)),t},updateValue:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.lazy;if(!n||i)if((t=this.modifyValue(t))!==this.vModelValue){this.clearDebounce();var r=function(){e.vModelValue=t,e.$emit("update",t)},a=this.computedDebounce;a>0&&!n&&!i?this.$_inputDebounceTimer=setTimeout(r,a):r()}else if(this.hasFormatter){var o=this.$refs.input;o&&t!==o.value&&(o.value=t)}},onInput:function(t){if(!t.target.composing){var e=t.target.value,i=this.formatValue(e,t);!1===i||t.defaultPrevented?t.preventDefault():(this.localValue=i,this.updateValue(i),this.$emit("input",i))}},onChange:function(t){var e=t.target.value,i=this.formatValue(e,t);!1===i||t.defaultPrevented?t.preventDefault():(this.localValue=i,this.updateValue(i,!0),this.$emit("change",i))},onBlur:function(t){var e=t.target.value,i=this.formatValue(e,t,!0);!1!==i&&(this.localValue=Object(o.d)(this.modifyValue(i)),this.updateValue(i,!0)),this.$emit("blur",t)},focus:function(){this.disabled||this.$el.focus()},blur:function(){this.disabled||this.$el.blur()}}}},Tu1i:function(t,e,i){"use strict";var n=i("t8l0");e.a={props:{size:{type:String,default:function(){return Object(n.b)("formControls","size")}}},computed:{sizeFormClass:function(){return[this.size?"form-control-".concat(this.size):null]},sizeBtnClass:function(){return[this.size?"btn-".concat(this.size):null]}}}},Vxxt:function(t,e,i){"use strict";var n=i("o/E4");e.a={props:{name:{type:String},id:{type:String},disabled:{type:Boolean},required:{type:Boolean,default:!1},form:{type:String},autofocus:{type:Boolean,default:!1}},mounted:function(){this.handleAutofocus()},activated:function(){this.handleAutofocus()},methods:{handleAutofocus:function(){var t=this;this.$nextTick((function(){Object(n.u)((function(){var e=t.$el;t.autofocus&&Object(n.o)(e)&&(Object(n.p)(e,"input, textarea, select")||(e=Object(n.v)("input, textarea, select",e)),e&&e.focus&&e.focus())}))}))}}}},ZKBa:function(t,e,i){"use strict";e.a={computed:{selectionStart:{cache:!1,get:function(){return this.$refs.input.selectionStart},set:function(t){this.$refs.input.selectionStart=t}},selectionEnd:{cache:!1,get:function(){return this.$refs.input.selectionEnd},set:function(t){this.$refs.input.selectionEnd=t}},selectionDirection:{cache:!1,get:function(){return this.$refs.input.selectionDirection},set:function(t){this.$refs.input.selectionDirection=t}}},methods:{select:function(){var t;(t=this.$refs.input).select.apply(t,arguments)},setSelectionRange:function(){var t;(t=this.$refs.input).setSelectionRange.apply(t,arguments)},setRangeText:function(){var t;(t=this.$refs.input).setRangeText.apply(t,arguments)}}}},xy9X:function(t,e,i){"use strict";e.a={computed:{validity:{cache:!1,get:function(){return this.$refs.input.validity}},validationMessage:{cache:!1,get:function(){return this.$refs.input.validationMessage}},willValidate:{cache:!1,get:function(){return this.$refs.input.willValidate}}},methods:{setCustomValidity:function(){var t;return(t=this.$refs.input).setCustomValidity.apply(t,arguments)},checkValidity:function(){var t;return(t=this.$refs.input).checkValidity.apply(t,arguments)},reportValidity:function(){var t;return(t=this.$refs.input).reportValidity.apply(t,arguments)}}}}},[[168,1,0,13,54]]]);
//# sourceMappingURL=pages.projects.prometheus.metrics.edit.e0e01e82.chunk.js.map