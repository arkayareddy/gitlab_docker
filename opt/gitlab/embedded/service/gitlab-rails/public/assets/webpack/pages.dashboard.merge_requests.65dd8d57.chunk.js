(this.webpackJsonp=this.webpackJsonp||[]).push([[127],{32:function(e,t,r){r("HVBj"),e.exports=r("vylJ")},"4ips":function(e,t,r){var n=r("1qE/"),a=r("MlCX");e.exports=function e(t,r,s,o,i){var c=-1,u=t.length;for(s||(s=a),i||(i=[]);++c<u;){var l=t[c];r>0&&s(l)?r>1?e(l,r-1,s,o,i):n(i,l):o||(i[i.length]=l)}return i}},"6ld1":function(e,t,r){"use strict";var n=r("8/Mu");t.a=function(e){var t=e.page,r=e.filteredSearchTokenKeys,a=e.isGroup,s=e.isGroupAncestor,o=e.isGroupDecendent,i=e.stateFiltersSelector;n.a&&document.querySelector(".filtered-search")&&new n.a({page:t,isGroup:a,isGroupAncestor:s,isGroupDecendent:o,filteredSearchTokenKeys:r,stateFiltersSelector:i}).setup()}},MlCX:function(e,t,r){var n=r("aCzx"),a=r("x14d"),s=r("P/Kr"),o=n?n.isConcatSpreadable:void 0;e.exports=function(e){return s(e)||a(e)||!!(o&&e&&e[o])}},"k/Fq":function(e,t,r){"use strict";r("9U97"),r("8Qi2"),r("MRnW"),r("jaBk");var n=r("3a3M"),a=r.n(n),s=r("qPgm"),o=(r("gyUR"),r("4ql4"),r("IdsT"),r("pBsb"),r("n7CP"));function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.projectSelectInput=a()(t),this.newItemBtn=a()(".new-project-item-link"),this.resourceType=this.newItemBtn.data("type"),this.resourceLabel=this.newItemBtn.data("label"),this.formattedText=this.deriveTextVariants(),this.groupId=this.projectSelectInput.data("groupId"),this.bindEvents(),this.initLocalStorage()}var t,n,s;return t=e,(n=[{key:"bindEvents",value:function(){var e=this;this.projectSelectInput.siblings(".new-project-item-select-button").on("click",(function(t){return e.openDropdown(t)})),this.newItemBtn.on("click",(function(t){e.getProjectFromLocalStorage()||(t.preventDefault(),e.openDropdown(t))})),this.projectSelectInput.on("change",(function(){return e.selectProject()}))}},{key:"initLocalStorage",value:function(){o.a.isLocalStorageAccessSafe()&&(this.localStorageKey=["group",this.groupId,this.formattedText.localStorageItemType,"recent-project"].join("-"),this.setBtnTextFromLocalStorage())}},{key:"openDropdown",value:function(e){r.e(311).then(r.t.bind(null,"p9g0",7)).then((function(){a()(e.currentTarget).siblings(".project-item-select").select2("open")})).catch((function(){}))}},{key:"selectProject",value:function(){var e=JSON.parse(this.projectSelectInput.val()),t={url:"".concat(e.url,"/").concat(this.projectSelectInput.data("relativePath")),name:e.name};this.setNewItemBtnAttributes(t),this.setProjectInLocalStorage(t)}},{key:"setBtnTextFromLocalStorage",value:function(){var e=this.getProjectFromLocalStorage();this.setNewItemBtnAttributes(e)}},{key:"setNewItemBtnAttributes",value:function(e){e?(this.newItemBtn.attr("href",e.url),this.newItemBtn.text("".concat(this.formattedText.defaultTextPrefix," in ").concat(e.name))):this.newItemBtn.text("Select project to create ".concat(this.formattedText.presetTextSuffix))}},{key:"getProjectFromLocalStorage",value:function(){var e=localStorage.getItem(this.localStorageKey);return JSON.parse(e)}},{key:"setProjectInLocalStorage",value:function(e){var t=JSON.stringify(e);localStorage.setItem(this.localStorageKey,t)}},{key:"deriveTextVariants",value:function(){var e=this.resourceLabel;return{localStorageItemType:"new-".concat(this.resourceType.split("_").join("-").slice(0,-1)),defaultTextPrefix:e,presetTextSuffix:this.resourceType.split("_").join(" ").slice(0,-1)}}}])&&i(t.prototype,n),s&&i(t,s),e}(),u=r("/lV4"),l=function(){a()(".ajax-project-select").each((function(e,t){var r,n=this,o=a()(t).data("simpleFilter")||!1,i=a()(t).data("select2");return this.groupId=a()(t).data("groupId"),this.userId=a()(t).data("userId"),this.includeGroups=a()(t).data("includeGroups"),this.allProjects=a()(t).data("allProjects")||!1,this.orderBy=a()(t).data("orderBy")||"id",this.withIssuesEnabled=a()(t).data("withIssuesEnabled"),this.withMergeRequestsEnabled=a()(t).data("withMergeRequestsEnabled"),this.withShared=void 0===a()(t).data("withShared")||a()(t).data("withShared"),this.includeProjectsInSubgroups=a()(t).data("includeProjectsInSubgroups")||!1,this.allowClear=a()(t).data("allowClear")||!1,r=Object(u.d)("ProjectSelect|Search for project"),this.includeGroups&&(r+=Object(u.d)("ProjectSelect| or group")),a()(t).select2({placeholder:r,minimumInputLength:0,query:function(e){var t,r=function(t){var r={results:t};return e.callback(r)};return t=n.includeGroups?function(t){return s.a.groups(e.term,{},(function(e){var n=e.concat(t);return r(n)}))}:r,n.groupId?s.a.groupProjects(n.groupId,e.term,{search_namespaces:!0,with_issues_enabled:n.withIssuesEnabled,with_merge_requests_enabled:n.withMergeRequestsEnabled,with_shared:n.withShared,include_subgroups:n.includeProjectsInSubgroups},t):n.userId?s.a.userProjects(n.userId,e.term,{with_issues_enabled:n.withIssuesEnabled,with_merge_requests_enabled:n.withMergeRequestsEnabled,with_shared:n.withShared,include_subgroups:n.includeProjectsInSubgroups},t):s.a.projects(e.term,{order_by:n.orderBy,with_issues_enabled:n.withIssuesEnabled,with_merge_requests_enabled:n.withMergeRequestsEnabled,membership:!n.allProjects},t)},id:function(e){return o?e.id:JSON.stringify({name:e.name,url:e.web_url})},text:function(e){return e.name_with_namespace||e.name},initSelection:function(e,t){return s.a.project(e.val()).then((function(e){var r=e.data;return t(r)}))},allowClear:this.allowClear,dropdownCssClass:"ajax-project-dropdown"}),i||o?t:new c(t)}))};t.a=function(){return r.e(311).then(r.t.bind(null,"p9g0",7)).then(l).catch((function(){}))}},kOYq:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n={MERGE_REQUESTS:"merge_requests",ISSUES:"issues",ADMIN_RUNNERS:"admin/runners"}},uehF:function(e,t,r){"use strict";var n=r("/lV4");t.a=function(e){var t={formattedKey:Object(n.a)("WIP"),key:"wip",type:"string",param:"",symbol:"",icon:"admin",tag:Object(n.a)("Yes or No"),lowercaseValueOnSubmit:!0,uppercaseTokenName:!0,capitalizeTokenValue:!0};e.tokenKeys.push(t),e.tokenKeysWithAlternative.push(t);var r={formattedKey:Object(n.a)("Target-Branch"),key:"target-branch",type:"string",param:"",symbol:"",icon:"arrow-right",tag:"branch"};e.tokenKeys.push(r),e.tokenKeysWithAlternative.push(r)}},vylJ:function(e,t,r){"use strict";r.r(t);var n=r("uehF"),a=r("k/Fq"),s=r("6ld1"),o=r("lLWD"),i=r("kOYq");document.addEventListener("DOMContentLoaded",(function(){Object(n.a)(o.a),Object(s.a)({page:i.a.MERGE_REQUESTS,filteredSearchTokenKeys:o.a}),Object(a.a)()}))}},[[32,1,0,9,18]]]);
//# sourceMappingURL=pages.dashboard.merge_requests.65dd8d57.chunk.js.map