(this.webpackJsonp=this.webpackJsonp||[]).push([[239],{144:function(e,t,n){n("HVBj"),n("gjpc"),e.exports=n("kFdu")},"6F50":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={MERGE_REQUEST:"merge_request_",ISSUE:"issue_"}},"6ld1":function(e,t,n){"use strict";var r=n("8/Mu");t.a=function(e){var t=e.page,n=e.filteredSearchTokenKeys,a=e.isGroup,i=e.isGroupAncestor,o=e.isGroupDecendent,s=e.stateFiltersSelector;r.a&&document.querySelector(".filtered-search")&&new r.a({page:t,isGroup:a,isGroupAncestor:i,isGroupDecendent:o,filteredSearchTokenKeys:n,stateFiltersSelector:s}).setup()}},"9d8q":function(e,t,n){"use strict";var r=n("7xOh");t.a=Object(r.a)()},CX32:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));n("va8A"),n("z4I3"),n("dj/k"),n("x/6R"),n("WQYg"),n("MRnW"),n("EfZm"),n("GzNv"),n("tbvx"),n("orcL");var r=n("t6Yz"),a=n.n(r),i=n("yQ8t");function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var a=l(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}function c(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(n,e);var t=u(n);function n(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),e=t.call(this),a.a.bind("g p",(function(){return Object(i.a)(".shortcuts-project")})),a.a.bind("g v",(function(){return Object(i.a)(".shortcuts-project-activity")})),a.a.bind("g r",(function(){return Object(i.a)(".shortcuts-project-releases")})),a.a.bind("g f",(function(){return Object(i.a)(".shortcuts-tree")})),a.a.bind("g c",(function(){return Object(i.a)(".shortcuts-commits")})),a.a.bind("g j",(function(){return Object(i.a)(".shortcuts-builds")})),a.a.bind("g n",(function(){return Object(i.a)(".shortcuts-network")})),a.a.bind("g d",(function(){return Object(i.a)(".shortcuts-repository-charts")})),a.a.bind("g i",(function(){return Object(i.a)(".shortcuts-issues")})),a.a.bind("g b",(function(){return Object(i.a)(".shortcuts-issue-boards")})),a.a.bind("g m",(function(){return Object(i.a)(".shortcuts-merge_requests")})),a.a.bind("g w",(function(){return Object(i.a)(".shortcuts-wiki")})),a.a.bind("g s",(function(){return Object(i.a)(".shortcuts-snippets")})),a.a.bind("g k",(function(){return Object(i.a)(".shortcuts-kubernetes")})),a.a.bind("g e",(function(){return Object(i.a)(".shortcuts-environments")})),a.a.bind("g l",(function(){return Object(i.a)(".shortcuts-metrics")})),a.a.bind("i",(function(){return Object(i.a)(".shortcuts-new-issue")})),e}return n}(n("v+Mp").a)},SGvn:function(e,t,n){"use strict";n("t3Gg"),n("Z5ek");var r=n("Ur9C"),a=n.n(r),i=n("3a3M"),o=n.n(i),s=n("rrDE"),u=n("hoFG"),c=n("/lV4");var l=n("MDlm"),d=n("9d8q");function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.vueIssuablesListFeature=a()(["gon","features","vueIssuablesList"])(window),this.initDomElements(),this.bindEvents(),this.initDropdowns(),this.setupBulkUpdateActions()}var t,n,r;return t=e,r=[{key:"getCheckedIssueIds",value:function(){var e=o()(".selected-issuable:checked");return e.length>0?o.a.map(e,(function(e){return o()(e).data("id")})):[]}}],(n=[{key:"initDomElements",value:function(){this.$page=o()(".layout-page"),this.$sidebar=o()(".right-sidebar"),this.$sidebarInnerContainer=this.$sidebar.find(".issuable-sidebar"),this.$bulkEditCancelBtn=o()(".js-bulk-update-menu-hide"),this.$bulkEditSubmitBtn=o()(".update-selected-issues"),this.$bulkUpdateEnableBtn=o()(".js-bulk-update-toggle"),this.$otherFilters=o()(".issues-other-filters"),this.$checkAllContainer=o()(".check-all-holder"),this.$issueChecks=o()(".issue-check"),this.$issuesList=o()(".selected-issuable"),this.$issuableIdsInput=o()("#update_issuable_ids")}},{key:"bindEvents",value:function(){var e=this;this.$bulkUpdateEnableBtn.on("click",(function(t){return e.toggleBulkEdit(t,!0)})),this.$bulkEditCancelBtn.on("click",(function(t){return e.toggleBulkEdit(t,!1)})),this.$checkAllContainer.on("click",(function(t){return e.selectAll(t)})),this.$issuesList.on("change",(function(){return e.updateFormState()})),this.$bulkEditSubmitBtn.on("click",(function(){return e.prepForSubmit()})),this.$checkAllContainer.on("click",(function(){return e.updateFormState()})),this.vueIssuablesListFeature&&d.a.$on("issuables:updateBulkEdit",(function(){e.updateFormState()}))}},{key:"initDropdowns",value:function(){new l.a,new u.a,o()(".js-issue-status").each((function(e,t){var n=o()(t).data("fieldName");return o()(t).glDropdown({selectable:!0,fieldName:n,toggleLabel:function(e,t,n){var r=Object(c.a)("Author"),a=n.dropdown.find(".is-active");return a.length&&(r=a.text()),r},clicked:function(e){return e.e.preventDefault()},id:function(e,t){return o()(t).data("id")}})})),o()(".js-subscription-event").each((function(e,t){var n=o()(t).data("fieldName");return o()(t).glDropdown({selectable:!0,fieldName:n,toggleLabel:function(e,t,n){var r=Object(c.a)("Subscription"),a=n.dropdown.find(".is-active");return a.length&&(r=a.text()),r},clicked:function(e){return e.e.preventDefault()},id:function(e,t){return o()(t).data("id")}})}))}},{key:"setupBulkUpdateActions",value:function(){s.a.setOriginalDropdownData()}},{key:"updateFormState",value:function(){var e=!o()(".selected-issuable:checked").length;this.toggleSubmitButtonDisabled(e),this.updateSelectedIssuableIds(),s.a.setOriginalDropdownData()}},{key:"prepForSubmit",value:function(){var e=this;setTimeout((function(){return e.$bulkEditSubmitBtn.disable()})),this.updateSelectedIssuableIds()}},{key:"toggleBulkEdit",value:function(e,t){e.preventDefault(),d.a.$emit("issuables:toggleBulkEdit",t),this.toggleSidebarDisplay(t),this.toggleBulkEditButtonDisabled(t),this.toggleOtherFiltersDisabled(t),this.toggleCheckboxDisplay(t)}},{key:"updateSelectedIssuableIds",value:function(){this.$issuableIdsInput.val(e.getCheckedIssueIds())}},{key:"selectAll",value:function(){var e=this.$checkAllContainer.find("input").prop("checked");this.$issuesList.prop("checked",e)}},{key:"toggleSidebarDisplay",value:function(e){this.$page.toggleClass("right-sidebar-expanded issuable-bulk-update-sidebar",e),this.$page.toggleClass("right-sidebar-collapsed issuable-bulk-update-sidebar",!e),this.$sidebarInnerContainer.toggleClass("hidden",!e),this.$sidebar.toggleClass("right-sidebar-expanded issuable-bulk-update-sidebar",e),this.$sidebar.toggleClass("right-sidebar-collapsed issuable-bulk-update-sidebar",!e)}},{key:"toggleBulkEditButtonDisabled",value:function(e){e?this.$bulkUpdateEnableBtn.disable():this.$bulkUpdateEnableBtn.enable()}},{key:"toggleCheckboxDisplay",value:function(e){this.$checkAllContainer.toggleClass("hidden",!e||this.vueIssuablesListFeature),this.$issueChecks.toggleClass("hidden",!e)}},{key:"toggleOtherFiltersDisabled",value:function(e){this.$otherFilters.toggleClass("disabled-content",e)}},{key:"toggleSubmitButtonDisabled",value:function(e){e?this.$bulkEditSubmitBtn.disable():this.$bulkEditSubmitBtn.enable()}}])&&f(t.prototype,n),r&&f(t,r),e}();t.a={bulkUpdateSidebar:null,init:function(e){var t=document.querySelector(".issues-bulk-update"),n=Boolean(this.bulkUpdateSidebar);return t&&!n&&(s.a.init({prefixId:e}),this.bulkUpdateSidebar=new h),this.bulkUpdateSidebar}}},"SN/t":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("3a3M"),a=n.n(r),i=n("2ibD"),o=n("XRO8"),s=n("/lV4"),u=n("SGvn");function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u.a.init(t),e.resetIncomingEmailToken()}var t,n,r;return t=e,r=[{key:"resetIncomingEmailToken",value:function(){var e=a()(".incoming-email-token-reset");e.on("click",(function(t){t.preventDefault(),e.text(Object(s.d)("EmailToken|resetting...")),i.a.put(e.attr("href")).then((function(t){var n=t.data;a()("#issuable_email").val(n.new_address).focus(),e.text(Object(s.d)("EmailToken|reset it"))})).catch((function(){Object(o.a)(Object(s.a)("There was an error when reseting email token.")),e.text(Object(s.d)("EmailToken|reset it"))}))}))}}],(n=null)&&c(t.prototype,n),r&&c(t,r),e}()},ZeWX:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));n("t3Gg"),n("+xeR");var r=n("3a3M"),a=n.n(r),i=n("06tH"),o=n.n(i),s=n("/lV4"),u=n("3twG");n("kO4A"),n("OZM5"),n("x/6R"),n("Z5ek"),n("yaFd"),n("8Qi2"),n("EWC9"),n("MRnW"),n("tbvx"),n("orcL");var c=function(e){return e.reduce((function(e,t){var n=t.name,r=t.value;return Object.assign(e,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n,r))}),{})},l=n("2ibD"),d=n("XRO8"),f=n("k/Fq");function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var t=a()("ul.clone-options-dropdown"),n=a()("#project_clone"),r=a()(".js-git-clone-holder .js-clone-dropdown-label"),i=document.querySelector(".js-mobile-git-clone .js-clone-dropdown-label"),s=r.text().trim();s.length>0&&a()("a:contains('".concat(s,"')"),t).addClass("is-active"),a()("a",t).on("click",(function(e){e.preventDefault();var r=a()(e.currentTarget),o=r.attr("href"),s=r.data("cloneType");a()(".is-active",t).removeClass("is-active"),a()('a[data-clone-type="'.concat(s,'"]')).each((function(){var e=a()(this),t=e.find(".dropdown-menu-inner-title").text(),n=e.closest(".project-clone-holder").find(".js-clone-dropdown-label");e.toggleClass("is-active"),n.text(t)})),i?i.dataset.clipboardText=o:n.val(o),a()(".js-git-empty .js-clone").text(o)})),e.initRefSwitcher(),a()(".project-refs-select").on("change",(function(){return a()(this).parents("form").submit()})),a()(".hide-no-ssh-message").on("click",(function(e){return o.a.set("hide_no_ssh_message","false"),a()(this).parents(".no-ssh-key-message").remove(),e.preventDefault()})),a()(".hide-no-password-message").on("click",(function(e){return o.a.set("hide_no_password_message","false"),a()(this).parents(".no-password-message").remove(),e.preventDefault()})),a()(".hide-auto-devops-implicitly-enabled-banner").on("click",(function(e){var t=a()(this).data("project-id"),n="hide_auto_devops_implicitly_enabled_banner_".concat(t);return o.a.set(n,"false"),a()(this).parents(".auto-devops-implicitly-enabled-banner").remove(),e.preventDefault()})),e.projectSelectDropdown()}var t,n,r;return t=e,r=[{key:"projectSelectDropdown",value:function(){Object(f.a)(),a()(".project-item-select").on("click",(function(t){return e.changeProject(a()(t.currentTarget).val())}))}},{key:"changeProject",value:function(e){return window.location=e}},{key:"initRefSwitcher",value:function(){var e=document.createElement("li"),t=document.createElement("a");return t.href="#",a()(".js-project-refs-dropdown").each((function(){var n,r,i,o=a()(this),f=o.data("selected"),h=o.data("fieldName"),p=Boolean(o.data("visit")),b=o.closest("form"),g=b.attr("action"),v=Object(u.n)((n=b[0],r=new FormData(n),i=Array.from(r.keys()).map((function(e){var t=r.getAll(e);return{name:e,value:1===(t=t.filter((function(e){return e}))).length?t[0]:t}})),c(i)),g);return o.glDropdown({data:function(e,t){l.a.get(o.data("refsUrl"),{params:{ref:o.data("ref"),search:e}}).then((function(e){var n=e.data;return t(n)})).catch((function(){return Object(d.a)(Object(s.a)("An error occurred while getting projects"))}))},selectable:!0,filterable:!0,filterRemote:!0,filterByText:!0,inputFieldName:o.data("inputFieldName"),fieldName:h,renderRow:function(n){var r,a,i,o=e.cloneNode(!1),s=t.cloneNode(!1);return n===f&&(s.className="is-active"),s.textContent=n,s.dataset.ref=n,n.length>0&&p&&(s.href=Object(u.n)((i=n,(a=h)in(r={})?Object.defineProperty(r,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[a]=i,r),v)),o.appendChild(s),o},id:function(e,t){return t.attr("data-ref")},toggleLabel:function(e,t){return t.text().trim()},clicked:function(e){var t=e.e;p||t.preventDefault()}})}))}}],(n=null)&&h(t.prototype,n),r&&h(t,r),e}()},gjpc:function(e,t,n){"use strict";n.r(t);var r=n("ZeWX"),a=n("CX32");document.addEventListener("DOMContentLoaded",(function(){new r.a,new a.a}))},"k/Fq":function(e,t,n){"use strict";n("9U97"),n("8Qi2"),n("MRnW"),n("jaBk");var r=n("3a3M"),a=n.n(r),i=n("qPgm"),o=(n("gyUR"),n("4ql4"),n("IdsT"),n("pBsb"),n("n7CP"));function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.projectSelectInput=a()(t),this.newItemBtn=a()(".new-project-item-link"),this.resourceType=this.newItemBtn.data("type"),this.resourceLabel=this.newItemBtn.data("label"),this.formattedText=this.deriveTextVariants(),this.groupId=this.projectSelectInput.data("groupId"),this.bindEvents(),this.initLocalStorage()}var t,r,i;return t=e,(r=[{key:"bindEvents",value:function(){var e=this;this.projectSelectInput.siblings(".new-project-item-select-button").on("click",(function(t){return e.openDropdown(t)})),this.newItemBtn.on("click",(function(t){e.getProjectFromLocalStorage()||(t.preventDefault(),e.openDropdown(t))})),this.projectSelectInput.on("change",(function(){return e.selectProject()}))}},{key:"initLocalStorage",value:function(){o.a.isLocalStorageAccessSafe()&&(this.localStorageKey=["group",this.groupId,this.formattedText.localStorageItemType,"recent-project"].join("-"),this.setBtnTextFromLocalStorage())}},{key:"openDropdown",value:function(e){n.e(311).then(n.t.bind(null,"p9g0",7)).then((function(){a()(e.currentTarget).siblings(".project-item-select").select2("open")})).catch((function(){}))}},{key:"selectProject",value:function(){var e=JSON.parse(this.projectSelectInput.val()),t={url:"".concat(e.url,"/").concat(this.projectSelectInput.data("relativePath")),name:e.name};this.setNewItemBtnAttributes(t),this.setProjectInLocalStorage(t)}},{key:"setBtnTextFromLocalStorage",value:function(){var e=this.getProjectFromLocalStorage();this.setNewItemBtnAttributes(e)}},{key:"setNewItemBtnAttributes",value:function(e){e?(this.newItemBtn.attr("href",e.url),this.newItemBtn.text("".concat(this.formattedText.defaultTextPrefix," in ").concat(e.name))):this.newItemBtn.text("Select project to create ".concat(this.formattedText.presetTextSuffix))}},{key:"getProjectFromLocalStorage",value:function(){var e=localStorage.getItem(this.localStorageKey);return JSON.parse(e)}},{key:"setProjectInLocalStorage",value:function(e){var t=JSON.stringify(e);localStorage.setItem(this.localStorageKey,t)}},{key:"deriveTextVariants",value:function(){var e=this.resourceLabel;return{localStorageItemType:"new-".concat(this.resourceType.split("_").join("-").slice(0,-1)),defaultTextPrefix:e,presetTextSuffix:this.resourceType.split("_").join(" ").slice(0,-1)}}}])&&s(t.prototype,r),i&&s(t,i),e}(),c=n("/lV4"),l=function(){a()(".ajax-project-select").each((function(e,t){var n,r=this,o=a()(t).data("simpleFilter")||!1,s=a()(t).data("select2");return this.groupId=a()(t).data("groupId"),this.userId=a()(t).data("userId"),this.includeGroups=a()(t).data("includeGroups"),this.allProjects=a()(t).data("allProjects")||!1,this.orderBy=a()(t).data("orderBy")||"id",this.withIssuesEnabled=a()(t).data("withIssuesEnabled"),this.withMergeRequestsEnabled=a()(t).data("withMergeRequestsEnabled"),this.withShared=void 0===a()(t).data("withShared")||a()(t).data("withShared"),this.includeProjectsInSubgroups=a()(t).data("includeProjectsInSubgroups")||!1,this.allowClear=a()(t).data("allowClear")||!1,n=Object(c.d)("ProjectSelect|Search for project"),this.includeGroups&&(n+=Object(c.d)("ProjectSelect| or group")),a()(t).select2({placeholder:n,minimumInputLength:0,query:function(e){var t,n=function(t){var n={results:t};return e.callback(n)};return t=r.includeGroups?function(t){return i.a.groups(e.term,{},(function(e){var r=e.concat(t);return n(r)}))}:n,r.groupId?i.a.groupProjects(r.groupId,e.term,{search_namespaces:!0,with_issues_enabled:r.withIssuesEnabled,with_merge_requests_enabled:r.withMergeRequestsEnabled,with_shared:r.withShared,include_subgroups:r.includeProjectsInSubgroups},t):r.userId?i.a.userProjects(r.userId,e.term,{with_issues_enabled:r.withIssuesEnabled,with_merge_requests_enabled:r.withMergeRequestsEnabled,with_shared:r.withShared,include_subgroups:r.includeProjectsInSubgroups},t):i.a.projects(e.term,{order_by:r.orderBy,with_issues_enabled:r.withIssuesEnabled,with_merge_requests_enabled:r.withMergeRequestsEnabled,membership:!r.allProjects},t)},id:function(e){return o?e.id:JSON.stringify({name:e.name,url:e.web_url})},text:function(e){return e.name_with_namespace||e.name},initSelection:function(e,t){return i.a.project(e.val()).then((function(e){var n=e.data;return t(n)}))},allowClear:this.allowClear,dropdownCssClass:"ajax-project-dropdown"}),s||o?t:new u(t)}))};t.a=function(){return n.e(311).then(n.t.bind(null,"p9g0",7)).then(l).catch((function(){}))}},kFdu:function(e,t,n){"use strict";n.r(t);var r=n("uehF"),a=n("SN/t"),i=n("CX32"),o=n("yYhH"),s=n("6ld1"),u=n("lLWD"),c=n("kOYq"),l=n("6F50");document.addEventListener("DOMContentLoaded",(function(){Object(r.a)(u.a),Object(s.a)({page:c.a.MERGE_REQUESTS,filteredSearchTokenKeys:u.a}),new a.a(l.a.MERGE_REQUEST),new i.a,new o.a}))},kOYq:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={MERGE_REQUESTS:"merge_requests",ISSUES:"issues",ADMIN_RUNNERS:"admin/runners"}},uehF:function(e,t,n){"use strict";var r=n("/lV4");t.a=function(e){var t={formattedKey:Object(r.a)("WIP"),key:"wip",type:"string",param:"",symbol:"",icon:"admin",tag:Object(r.a)("Yes or No"),lowercaseValueOnSubmit:!0,uppercaseTokenName:!0,capitalizeTokenValue:!0};e.tokenKeys.push(t),e.tokenKeysWithAlternative.push(t);var n={formattedKey:Object(r.a)("Target-Branch"),key:"target-branch",type:"string",param:"",symbol:"",icon:"arrow-right",tag:"branch"};e.tokenKeys.push(n),e.tokenKeysWithAlternative.push(n)}}},[[144,1,0,7,8,9,11,18]]]);
//# sourceMappingURL=pages.projects.merge_requests.index.d479c096.chunk.js.map