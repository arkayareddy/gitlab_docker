(this.webpackJsonp=this.webpackJsonp||[]).push([[225],{130:function(e,t,n){n("HVBj"),n("gjpc"),e.exports=n("R5ZX")},"6F50":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={MERGE_REQUEST:"merge_request_",ISSUE:"issue_"}},CX32:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));n("va8A"),n("z4I3"),n("dj/k"),n("x/6R"),n("WQYg"),n("MRnW"),n("EfZm"),n("GzNv"),n("tbvx"),n("orcL");var r=n("t6Yz"),o=n.n(r),a=n("yQ8t");function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}function u(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(n,e);var t=s(n);function n(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),e=t.call(this),o.a.bind("g p",(function(){return Object(a.a)(".shortcuts-project")})),o.a.bind("g v",(function(){return Object(a.a)(".shortcuts-project-activity")})),o.a.bind("g r",(function(){return Object(a.a)(".shortcuts-project-releases")})),o.a.bind("g f",(function(){return Object(a.a)(".shortcuts-tree")})),o.a.bind("g c",(function(){return Object(a.a)(".shortcuts-commits")})),o.a.bind("g j",(function(){return Object(a.a)(".shortcuts-builds")})),o.a.bind("g n",(function(){return Object(a.a)(".shortcuts-network")})),o.a.bind("g d",(function(){return Object(a.a)(".shortcuts-repository-charts")})),o.a.bind("g i",(function(){return Object(a.a)(".shortcuts-issues")})),o.a.bind("g b",(function(){return Object(a.a)(".shortcuts-issue-boards")})),o.a.bind("g m",(function(){return Object(a.a)(".shortcuts-merge_requests")})),o.a.bind("g w",(function(){return Object(a.a)(".shortcuts-wiki")})),o.a.bind("g s",(function(){return Object(a.a)(".shortcuts-snippets")})),o.a.bind("g k",(function(){return Object(a.a)(".shortcuts-kubernetes")})),o.a.bind("g e",(function(){return Object(a.a)(".shortcuts-environments")})),o.a.bind("g l",(function(){return Object(a.a)(".shortcuts-metrics")})),o.a.bind("i",(function(){return Object(a.a)(".shortcuts-new-issue")})),e}return n}(n("v+Mp").a)},R5ZX:function(e,t,n){"use strict";n.r(t);var r=n("lLWD"),o=n("SN/t"),a=n("CX32"),c=n("yYhH"),i=n("6ld1"),s=n("kOYq"),u=n("6F50"),l=n("ILYA"),f=n("yJ49"),d=n("UCUN");document.addEventListener("DOMContentLoaded",(function(){r.a.addExtraTokensForIssues(),Object(i.a)({page:s.a.ISSUES,filteredSearchTokenKeys:r.a}),new o.a(u.a.ISSUE),new a.a,new c.a,Object(f.a)(),Object(l.a)(),Object(d.b)()}))},"SN/t":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("3a3M"),o=n.n(r),a=n("2ibD"),c=n("XRO8"),i=n("/lV4"),s=n("SGvn");function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s.a.init(t),e.resetIncomingEmailToken()}var t,n,r;return t=e,r=[{key:"resetIncomingEmailToken",value:function(){var e=o()(".incoming-email-token-reset");e.on("click",(function(t){t.preventDefault(),e.text(Object(i.d)("EmailToken|resetting...")),a.a.put(e.attr("href")).then((function(t){var n=t.data;o()("#issuable_email").val(n.new_address).focus(),e.text(Object(i.d)("EmailToken|reset it"))})).catch((function(){Object(c.a)(Object(i.a)("There was an error when reseting email token.")),e.text(Object(i.d)("EmailToken|reset it"))}))}))}}],(n=null)&&u(t.prototype,n),r&&u(t,r),e}()},UCUN:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"c",(function(){return m})),n.d(t,"b",(function(){return y}));n("va8A"),n("kO4A"),n("+kFb"),n("FMw2"),n("zCcL"),n("zpLX"),n("BD5p"),n("QifN"),n("Id6h");var r=n("3a3M"),o=n.n(r),a=n("NmEs"),c=n("/lV4"),i=n("4ZIW");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f="onboarding_issues_settings",d="groups#show",p="projects#show",b="issues#index",v=function(){Object(a.M)(f)};function h(e){e.preventDefault(),this.popover("dispose"),v(),i.a.event("Growth::Conversion::Experiment::OnboardingIssues","dismiss_popover")}var g=function(e,t,n,r){var c=Object(a.j)(f);if(c){var i=JSON.parse(c);if(Object(a.H)(i[t])){var s={boundary:"window",html:!0,placement:"top",template:'<div class="popover blue learn-gitlab d-none d-xl-block" role="tooltip">\n                <div class="arrow"></div>\n                <div class="close cursor-pointer gl-font-base text-white gl-opacity-10 p-2">&#10005</div>\n                <div class="popover-body gl-font-base gl-line-height-20 pb-0 px-3"></div>\n                <div class="bold text-right text-white p-2">'.concat(n,"</div>\n               </div>")},l=function(){return document.querySelector(".learn-gitlab.popover .close")},d=o()(e),p=h.bind(d);d.popover(u(u({},s),r)).on("inserted.bs.popover",(function(){return l().addEventListener("click",p)})).on("hide.bs.dropdown",(function(){return l().removeEventListener("click",p)})).popover("show"),Object.keys(i).forEach((function(e){t!==e?i[e]=!1:Object(a.T)(f,i)})),t===b&&e.addEventListener("click",v)}}},j=function(e){var t=document.querySelector("#group-".concat(e," .group-text a"));if(t){var n={content:Object(c.a)("Here are all your projects in your group, including the one you just created. To start, let’s take a look at your personalized learning project which will help you learn about GitLab at your own pace.")};g(t,d,"1 / 2",n)}},m=function(){if(window.location.pathname.includes("learn-gitlab")){var e=document.querySelector("a.shortcuts-issues");if(e){var t={content:Object(c.a)("Go to <strong>Issues</strong> > <strong>Boards</strong> to access your personalized learning issue board.")};g(e,p,"2 / 2",t)}}},y=function(){if(window.location.pathname.includes("learn-gitlab")){var e=document.querySelector('a[data-qa-selector="issue_boards_link"]');if(e){var t={content:Object(c.a)("Go to <strong>Issues</strong> > <strong>Boards</strong> to access your personalized learning issue board.")};g(e,b,"2 / 2",t)}}}},ZeWX:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));n("t3Gg"),n("+xeR");var r=n("3a3M"),o=n.n(r),a=n("06tH"),c=n.n(a),i=n("/lV4"),s=n("3twG");n("kO4A"),n("OZM5"),n("x/6R"),n("Z5ek"),n("yaFd"),n("8Qi2"),n("EWC9"),n("MRnW"),n("tbvx"),n("orcL");var u=function(e){return e.reduce((function(e,t){var n=t.name,r=t.value;return Object.assign(e,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n,r))}),{})},l=n("2ibD"),f=n("XRO8"),d=n("k/Fq");function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var t=o()("ul.clone-options-dropdown"),n=o()("#project_clone"),r=o()(".js-git-clone-holder .js-clone-dropdown-label"),a=document.querySelector(".js-mobile-git-clone .js-clone-dropdown-label"),i=r.text().trim();i.length>0&&o()("a:contains('".concat(i,"')"),t).addClass("is-active"),o()("a",t).on("click",(function(e){e.preventDefault();var r=o()(e.currentTarget),c=r.attr("href"),i=r.data("cloneType");o()(".is-active",t).removeClass("is-active"),o()('a[data-clone-type="'.concat(i,'"]')).each((function(){var e=o()(this),t=e.find(".dropdown-menu-inner-title").text(),n=e.closest(".project-clone-holder").find(".js-clone-dropdown-label");e.toggleClass("is-active"),n.text(t)})),a?a.dataset.clipboardText=c:n.val(c),o()(".js-git-empty .js-clone").text(c)})),e.initRefSwitcher(),o()(".project-refs-select").on("change",(function(){return o()(this).parents("form").submit()})),o()(".hide-no-ssh-message").on("click",(function(e){return c.a.set("hide_no_ssh_message","false"),o()(this).parents(".no-ssh-key-message").remove(),e.preventDefault()})),o()(".hide-no-password-message").on("click",(function(e){return c.a.set("hide_no_password_message","false"),o()(this).parents(".no-password-message").remove(),e.preventDefault()})),o()(".hide-auto-devops-implicitly-enabled-banner").on("click",(function(e){var t=o()(this).data("project-id"),n="hide_auto_devops_implicitly_enabled_banner_".concat(t);return c.a.set(n,"false"),o()(this).parents(".auto-devops-implicitly-enabled-banner").remove(),e.preventDefault()})),e.projectSelectDropdown()}var t,n,r;return t=e,r=[{key:"projectSelectDropdown",value:function(){Object(d.a)(),o()(".project-item-select").on("click",(function(t){return e.changeProject(o()(t.currentTarget).val())}))}},{key:"changeProject",value:function(e){return window.location=e}},{key:"initRefSwitcher",value:function(){var e=document.createElement("li"),t=document.createElement("a");return t.href="#",o()(".js-project-refs-dropdown").each((function(){var n,r,a,c=o()(this),d=c.data("selected"),p=c.data("fieldName"),b=Boolean(c.data("visit")),v=c.closest("form"),h=v.attr("action"),g=Object(s.n)((n=v[0],r=new FormData(n),a=Array.from(r.keys()).map((function(e){var t=r.getAll(e);return{name:e,value:1===(t=t.filter((function(e){return e}))).length?t[0]:t}})),u(a)),h);return c.glDropdown({data:function(e,t){l.a.get(c.data("refsUrl"),{params:{ref:c.data("ref"),search:e}}).then((function(e){var n=e.data;return t(n)})).catch((function(){return Object(f.a)(Object(i.a)("An error occurred while getting projects"))}))},selectable:!0,filterable:!0,filterRemote:!0,filterByText:!0,inputFieldName:c.data("inputFieldName"),fieldName:p,renderRow:function(n){var r,o,a,c=e.cloneNode(!1),i=t.cloneNode(!1);return n===d&&(i.className="is-active"),i.textContent=n,i.dataset.ref=n,n.length>0&&b&&(i.href=Object(s.n)((a=n,(o=p)in(r={})?Object.defineProperty(r,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[o]=a,r),g)),c.appendChild(i),c},id:function(e,t){return t.attr("data-ref")},toggleLabel:function(e,t){return t.text().trim()},clicked:function(e){var t=e.e;b||t.preventDefault()}})}))}}],(n=null)&&p(t.prototype,n),r&&p(t,r),e}()},gjpc:function(e,t,n){"use strict";n.r(t);var r=n("ZeWX"),o=n("CX32");document.addEventListener("DOMContentLoaded",(function(){new r.a,new o.a}))}},[[130,1,0,7,8,9,11,18,20,49,64]]]);
//# sourceMappingURL=pages.projects.issues.index.17b4b4cf.chunk.js.map