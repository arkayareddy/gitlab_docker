(this.webpackJsonp=this.webpackJsonp||[]).push([[203],{107:function(t,e,n){n("HVBj"),n("gjpc"),t.exports=n("z9zc")},"2Swe":function(t,e,n){"use strict";var i=n("LLbv"),a={components:{CiIcon:n("8zNS").a},directives:{GlTooltip:i.a},props:{status:{type:Object,required:!0},showText:{type:Boolean,required:!1,default:!0}},computed:{cssClass:function(){var t=this.status.group;return t?"ci-status ci-".concat(t," qa-status-badge"):"ci-status qa-status-badge"}}},o=n("tBpV"),s=Object(o.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{directives:[{name:"gl-tooltip",rawName:"v-gl-tooltip"}],class:t.cssClass,attrs:{href:t.status.details_path,title:t.showText?"":t.status.text}},[n("ci-icon",{attrs:{status:t.status}}),t._v(" "),t.showText?[t._v("\n    "+t._s(t.status.text)+"\n  ")]:t._e()],2)}),[],!1,null,null,null);e.a=s.exports},"7Kf6":function(t,e,n){"use strict";var i=n("ZfjD"),a=n("qR60");i({target:"String",proto:!0,forced:n("262j")("link")},{link:function(t){return a(this,"a","href",t)}})},Bxe1:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n("3a3M"),a=n.n(i),o=n("XRO8"),s=n("2ibD"),r=n("/lV4");function l(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var c=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=e.container||"",this.dropdownListSelector=".js-builds-dropdown-container",this.getBuildsList=this.getBuildsList.bind(this)}var e,n,i;return e=t,(n=[{key:"bindEvents",value:function(){a()(document).off("shown.bs.dropdown",this.container).on("shown.bs.dropdown",this.container,this.getBuildsList)}},{key:"stopDropdownClickPropagation",value:function(){a()(document).on("click","".concat(this.container," .js-builds-dropdown-list a.mini-pipeline-graph-dropdown-item"),(function(t){t.stopPropagation()}))}},{key:"renderBuildsList",value:function(t,e){t.parentElement.querySelector("".concat(this.dropdownListSelector," .js-builds-dropdown-list ul")).innerHTML=e}},{key:"getBuildsList",value:function(t){var e=this,n=t.relatedTarget,i=n.dataset.stageEndpoint;this.renderBuildsList(n,""),this.toggleLoading(n),s.a.get(i).then((function(t){var i=t.data;e.toggleLoading(n),e.renderBuildsList(n,i.html),e.stopDropdownClickPropagation()})).catch((function(){e.toggleLoading(n),a()(n).parent().hasClass("open")&&a()(n).dropdown("toggle"),Object(o.a)(Object(r.a)("An error occurred while fetching the builds."),"alert")}))}},{key:"toggleLoading",value:function(t){t.parentElement.querySelector("".concat(this.dropdownListSelector," .js-builds-dropdown-loading")).classList.toggle("hidden")}}])&&l(e.prototype,n),i&&l(e,i),t}()},"Dfb/":function(t,e,n){"use strict";var i=n("3a3M"),a=n.n(i);n("yv3B");e.a={bind:function(t){var e=localStorage.getItem("gl-tooltip-delay"),n=e?JSON.parse(e):0;a()(t).tooltip({trigger:"hover",delay:n})},componentUpdated:function(t){a()(t).tooltip("_fixTitle");var e=a()(t).data("bs.tooltip"),n=e.getTipElement();e.setElementContent(a()(n.querySelectorAll(".tooltip-inner")),e.getTitle())},unbind:function(t){a()(t).tooltip("dispose")}}},HXu9:function(t,e,n){"use strict";var i=n("bOix");e.a={data:function(){return{remainingTime:Object(i.e)(0),remainingTimeIntervalId:null}},mounted:function(){this.startRemainingTimeInterval()},beforeDestroy:function(){this.remainingTimeIntervalId&&clearInterval(this.remainingTimeIntervalId)},computed:{isDelayedJob:function(){return this.job&&this.job.scheduled}},watch:{isDelayedJob:function(){this.startRemainingTimeInterval()}},methods:{startRemainingTimeInterval:function(){var t=this;this.remainingTimeIntervalId&&clearInterval(this.remainingTimeIntervalId),this.isDelayedJob&&(this.updateRemainingTime(),this.remainingTimeIntervalId=setInterval((function(){return t.updateRemainingTime()}),1e3))},updateRemainingTime:function(){var t=Object(i.b)(this.job.scheduled_at);this.remainingTime=Object(i.e)(t)}}}},KcQl:function(t,e,n){"use strict";var i=n("ZfjD"),a=n("PpKG"),o=n("O9kB"),s=n("QmHw"),r=n("OuD2"),l=n("eclS"),c=n("arHL"),u=n("fEQ0");i({target:"Promise",proto:!0,real:!0,forced:!!o&&s((function(){o.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(t){var e=l(this,r("Promise")),n="function"==typeof t;return this.then(n?function(n){return c(e,t()).then((function(){return n}))}:t,n?function(n){return c(e,t()).then((function(){throw n}))}:t)}}),a||"function"!=typeof o||o.prototype.finally||u(o.prototype,"finally",r("Promise").prototype.finally)},PvM2:function(t,e,n){"use strict";n("gyUR"),n("8Qi2"),n("+xU6");var i=n("MV2A"),a=n("LLbv"),o=n("f3jp"),s={components:{ciIcon:n("8zNS").a},props:{name:{type:String,required:!0},status:{type:Object,required:!0}}},r=n("tBpV"),l=Object(r.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"ci-job-name-component mw-100"},[e("ci-icon",{attrs:{status:this.status}}),this._v(" "),e("span",{staticClass:"ci-status-text text-truncate mw-70p gl-pl-1-deprecated-no-really-do-not-use-me d-inline-block align-bottom"},[this._v("\n    "+this._s(this.name)+"\n  ")])],1)}),[],!1,null,null,null).exports,c=n("/lV4"),u=n("HXu9"),p={components:{ActionComponent:o.a,JobNameComponent:l,GlLink:i.a},directives:{GlTooltip:a.a},mixins:[u.a],props:{job:{type:Object,required:!0},cssClassJobName:{type:String,required:!1,default:""},dropdownLength:{type:Number,required:!1,default:1/0}},computed:{boundary:function(){return 1===this.dropdownLength?"viewport":"scrollParent"},status:function(){return this.job&&this.job.status?this.job.status:{}},tooltipText:function(){var t=[],e=this.job.name;e&&t.push(e);var n=this.status.tooltip;return e&&n&&t.push("-"),n&&(this.isDelayedJob?t.push(Object(c.e)(n,{remainingTime:this.remainingTime})):t.push(n)),t.join(" ")},hasAction:function(){return this.job.status&&this.job.status.action&&this.job.status.action.path}},methods:{pipelineActionRequestComplete:function(){this.$emit("pipelineActionRequestComplete")}}},d=Object(r.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ci-job-component"},[t.status.has_details?n("gl-link",{directives:[{name:"gl-tooltip",rawName:"v-gl-tooltip",value:{boundary:t.boundary,placement:"bottom"},expression:"{ boundary, placement: 'bottom' }"}],staticClass:"js-pipeline-graph-job-link qa-job-link menu-item",class:t.cssClassJobName,attrs:{href:t.status.details_path,title:t.tooltipText}},[n("job-name-component",{attrs:{name:t.job.name,status:t.job.status}})],1):n("div",{directives:[{name:"gl-tooltip",rawName:"v-gl-tooltip",value:{boundary:t.boundary,placement:"bottom"},expression:"{ boundary, placement: 'bottom' }"}],staticClass:"js-job-component-tooltip non-details-job-component",class:t.cssClassJobName,attrs:{title:t.tooltipText}},[n("job-name-component",{attrs:{name:t.job.name,status:t.job.status}})],1),t._v(" "),t.hasAction?n("action-component",{attrs:{"tooltip-text":t.status.action.title,link:t.status.action.path,"action-icon":t.status.action.icon},on:{pipelineActionRequestComplete:t.pipelineActionRequestComplete}}):t._e()],1)}),[],!1,null,null,null);e.a=d.exports},UtYG:function(t,e,n){"use strict";var i=n("jB52"),a=(n("+xU6"),n("jslJ"),n("GTGS")),o=n("FkSe"),s=n("eVUo"),r=n("olcB"),l=n("69Ig"),c=n("goKL"),u=n("s5BM"),p=n("QSe5"),d=n("NmEs"),h=n("WYZc"),m={components:{TablePagination:p.a,GlDeprecatedButton:a.a,GlLoadingIcon:o.a},mixins:[c.a,h.a],props:{endpoint:{type:String,required:!0},helpPagePath:{type:String,required:!0},autoDevopsHelpPath:{type:String,required:!0},errorStateSvgPath:{type:String,required:!0},viewType:{type:String,required:!1,default:"child"},canRunPipeline:{type:Boolean,required:!1,default:!1},projectId:{type:String,required:!1,default:""},mergeRequestId:{type:Number,required:!1,default:0}},data:function(){var t=new l.a;return{store:t,state:t.state,page:Object(d.o)("page")||"1",requestData:{}}},computed:{shouldRenderTable:function(){return!this.isLoading&&this.state.pipelines.length>0&&!this.hasError},shouldRenderErrorState:function(){return this.hasError&&!this.isLoading},canRenderPipelineButton:function(){return this.canRunPipeline&&this.latestPipelineDetachedFlag},latestPipelineDetachedFlag:function(){var t=this.state.pipelines[0];return t&&t.flags&&(t.flags.detached_merge_request_pipeline||t.flags.merge_request_pipeline)},shouldAddNegativeMargin:function(){return this.canRenderPipelineButton&&s.b.isDesktop()}},created:function(){this.service=new r.a(this.endpoint),this.requestData={page:this.page}},methods:{successCallback:function(t){var e=t.data.pipelines||t.data;this.store.storePagination(t.headers),this.setCommonData(e);var n=new CustomEvent("update-pipelines-count",{detail:{pipelines:t.data}});this.$el.parentElement&&this.$el.parentElement.dispatchEvent(n)},onClickRunPipeline:function(){u.a.$emit("runMergeRequestPipeline",{projectId:this.projectId,mergeRequestId:this.mergeRequestId})}}},g=n("tBpV"),f=Object(g.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-list pipelines"},[t.isLoading?n("gl-loading-icon",{staticClass:"prepend-top-20",attrs:{label:t.s__("Pipelines|Loading Pipelines"),size:"lg"}}):t.shouldRenderErrorState?n("svg-blank-state",{attrs:{"svg-path":t.errorStateSvgPath,message:t.s__("Pipelines|There was an error fetching the pipelines.\n    Try again in a few moments or contact your support team.")}}):t.shouldRenderTable?n("div",{staticClass:"table-holder"},[t.canRenderPipelineButton?n("div",{staticClass:"nav justify-content-end"},[t.canRenderPipelineButton?n("gl-deprecated-button",{staticClass:"js-run-mr-pipeline prepend-top-10 btn-wide-on-xs",attrs:{variant:"success",disabled:t.state.isRunningMergeRequestPipeline},on:{click:t.onClickRunPipeline}},[t.state.isRunningMergeRequestPipeline?n("gl-loading-icon",{attrs:{inline:""}}):t._e(),t._v("\n        "+t._s(t.s__("Pipelines|Run Pipeline"))+"\n      ")],1):t._e()],1):t._e(),t._v(" "),n("pipelines-table-component",{class:{"negative-margin-top":t.shouldAddNegativeMargin},attrs:{pipelines:t.state.pipelines,"update-graph-dropdown":t.updateGraphDropdown,"auto-devops-help-path":t.autoDevopsHelpPath,"view-type":t.viewType}})],1):t._e(),t._v(" "),t.shouldRenderPagination?n("table-pagination",{attrs:{change:t.onChangePage,"page-info":t.state.pageInfo}}):t._e()],1)}),[],!1,null,null,null).exports,b=i.default.extend(f);window.gl=window.gl||{},window.gl.CommitPipelinesTable=b;e.a=function(){var t=document.querySelector("#commit-pipeline-table-view");if(t&&(t.addEventListener("update-pipelines-count",(function(t){t.detail.pipelines&&t.detail.pipelines.count&&t.detail.pipelines.count.all&&(document.querySelector(".js-pipelines-mr-count").textContent=t.detail.pipelines.count.all)})),void 0===t.dataset.disableInitialization)){var e=new b({propsData:{endpoint:t.dataset.endpoint,helpPagePath:t.dataset.helpPagePath,emptyStateSvgPath:t.dataset.emptyStateSvgPath,errorStateSvgPath:t.dataset.errorStateSvgPath,autoDevopsHelpPath:t.dataset.helpAutoDevopsPath}}).$mount();t.appendChild(e.$el)}}},f3jp:function(t,e,n){"use strict";n("9U97"),n("7Kf6");var i=n("GTGS"),a=n("FkSe"),o=n("LLbv"),s=n("2ibD"),r=n("0AwG"),l=n("/lV4"),c=n("XRO8"),u={components:{Icon:n("len0").a,GlDeprecatedButton:i.a,GlLoadingIcon:a.a},directives:{GlTooltip:o.a},props:{tooltipText:{type:String,required:!0},link:{type:String,required:!0},actionIcon:{type:String,required:!0}},data:function(){return{isDisabled:!1,isLoading:!1}},computed:{cssClass:function(){var t=Object(r.f)(this.actionIcon);return"".concat(t," js-icon-").concat(t)}},methods:{onClickAction:function(){var t=this;this.$root.$emit("bv::hide::tooltip","js-ci-action-".concat(this.link)),this.isDisabled=!0,this.isLoading=!0,s.a.post("".concat(this.link,".json")).then((function(){t.isDisabled=!1,t.isLoading=!1,t.$emit("pipelineActionRequestComplete")})).catch((function(){t.isDisabled=!1,t.isLoading=!1,Object(c.a)(Object(l.a)("An error occurred while making the request."))}))}}},p=n("tBpV"),d=Object(p.a)(u,(function(){var t=this.$createElement,e=this._self._c||t;return e("gl-deprecated-button",{directives:[{name:"gl-tooltip",rawName:"v-gl-tooltip",value:{boundary:"viewport"},expression:"{ boundary: 'viewport' }"}],staticClass:"js-ci-action btn btn-blank btn-transparent ci-action-icon-container ci-action-icon-wrapper d-flex align-items-center justify-content-center",class:this.cssClass,attrs:{id:"js-ci-action-"+this.link,title:this.tooltipText,disabled:this.isDisabled},on:{click:this.onClickAction}},[this.isLoading?e("gl-loading-icon",{staticClass:"js-action-icon-loading"}):e("icon",{attrs:{name:this.actionIcon}})],1)}),[],!1,null,null,null);e.a=d.exports},s5BM:function(t,e,n){"use strict";var i=n("jB52");e.a=new i.default},z9zc:function(t,e,n){"use strict";n.r(e);var i=n("3a3M"),a=n.n(i),o=n("Bxe1"),s=n("UtYG");document.addEventListener("DOMContentLoaded",(function(){new o.a({container:".js-commit-pipeline-graph"}).bindEvents(),a()(".commit-info.branches").load(document.querySelector(".js-commit-box").dataset.commitPath),Object(s.a)()}))}},[[107,1,0,15,23,52]]]);
//# sourceMappingURL=pages.projects.commit.pipelines.468a8c78.chunk.js.map