(this.webpackJsonp=this.webpackJsonp||[]).push([[170],{"4mi+":function(t,e,o){"use strict";o("9U97"),o("t3Gg"),o("IdsT"),o("S26F"),o("+xeR");var n=o("3a3M"),c=o.n(n),a=o("NmEs"),i=o("0AwG"),p=o("/lV4"),r={rails:{text:Object(p.d)("ProjectTemplates|Ruby on Rails"),icon:".template-option .icon-rails"},express:{text:Object(p.d)("ProjectTemplates|NodeJS Express"),icon:".template-option .icon-express"},spring:{text:Object(p.d)("ProjectTemplates|Spring"),icon:".template-option .icon-spring"},iosswift:{text:Object(p.d)("ProjectTemplates|iOS (Swift)"),icon:".template-option .icon-iosswift"},dotnetcore:{text:Object(p.d)("ProjectTemplates|.NET Core"),icon:".template-option .icon-dotnetcore"},android:{text:Object(p.d)("ProjectTemplates|Android"),icon:".template-option .icon-android"},gomicro:{text:Object(p.d)("ProjectTemplates|Go Micro"),icon:".template-option .icon-gomicro"},gatsby:{text:Object(p.d)("ProjectTemplates|Pages/Gatsby"),icon:".template-option .icon-gatsby"},hugo:{text:Object(p.d)("ProjectTemplates|Pages/Hugo"),icon:".template-option .icon-hugo"},jekyll:{text:Object(p.d)("ProjectTemplates|Pages/Jekyll"),icon:".template-option .icon-jekyll"},plainhtml:{text:Object(p.d)("ProjectTemplates|Pages/Plain HTML"),icon:".template-option .icon-plainhtml"},gitbook:{text:Object(p.d)("ProjectTemplates|Pages/GitBook"),icon:".template-option .icon-gitbook"},hexo:{text:Object(p.d)("ProjectTemplates|Pages/Hexo"),icon:".template-option .icon-hexo"},sse_middleman:{text:Object(p.d)("ProjectTemplates|Static Site Editor/Middleman"),icon:".template-option .icon-sse_middleman"},nfhugo:{text:Object(p.d)("ProjectTemplates|Netlify/Hugo"),icon:".template-option .icon-nfhugo"},nfjekyll:{text:Object(p.d)("ProjectTemplates|Netlify/Jekyll"),icon:".template-option .icon-nfjekyll"},nfplainhtml:{text:Object(p.d)("ProjectTemplates|Netlify/Plain HTML"),icon:".template-option .icon-nfplainhtml"},nfgitbook:{text:Object(p.d)("ProjectTemplates|Netlify/GitBook"),icon:".template-option .icon-nfgitbook"},nfhexo:{text:Object(p.d)("ProjectTemplates|Netlify/Hexo"),icon:".template-option .icon-nfhexo"},salesforcedx:{text:Object(p.d)("ProjectTemplates|SalesforceDX"),icon:".template-option .icon-salesforcedx"},serverless_framework:{text:Object(p.d)("ProjectTemplates|Serverless Framework/JS"),icon:".template-option .icon-serverless_framework"},cluster_management:{text:Object(p.d)("ProjectTemplates|GitLab Cluster Management"),icon:".template-option .icon-cluster_management"}},l=!1,s=!1,m=function(t,e){var o=Object(i.k)(t.val());e.val(o)},j=function(t,e,o){var n=e.val();o||t.val(Object(i.e)(Object(i.j)(n,"[-_]")))},d=function(t,e){t.off("keyup change").on("keyup change",(function(){m(t,e),s=t.val().trim().length>0,l=e.val().trim().length>0})),e.off("keyup change").on("keyup change",(function(){j(t,e,s),l=e.val().trim().length>0}))},f=function(t){var e=t.parents(".toggle-import-form").find("#project_name"),o=t.parents(".toggle-import-form").find("#project_path");if(!l){var n=t.val().trim();if(0!==n.length){n=n.replace(/\/?(\.git\/?)?(\?.*)?(#.*)?$/,"");var c=/\/([^\/]+)$/.exec(n);c&&(o.val(c[1]),j(e,o,!1))}}};e.a={bindEvents:function(){var t=c()("#new_project"),e=c()("#project_import_url"),o=c()(".tab-pane.active #project_path"),n=c()(".template-button > input"),i=c()(".project-fields-form"),p=c()(".selected-template"),l=c()(".change-template"),s=c()(".selected-icon"),m=c()(".push-new-project-tip"),j=c()(".project-templates-buttons"),u=c()(".tab-pane.active #project_name");1===t.length&&(c()(".how_to_import_link").on("click",(function(t){t.preventDefault(),c()(t.currentTarget).next(".modal").show()})),c()(".modal-header .close").on("click",(function(){c()(".modal").hide()})),c()(".btn_import_gitlab_project").on("click",(function(){var t=c()("a.btn_import_gitlab_project").attr("href");c()(".btn_import_gitlab_project").attr("href","".concat(t,"?namespace_id=").concat(c()("#project_namespace_id").val(),"&name=").concat(u.val(),"&path=").concat(o.val()))})),m&&m.removeAttr("rel").removeAttr("target").on("click",(function(t){t.preventDefault()})).popover({title:m.data("title"),placement:"bottom",html:!0,content:c()(".push-new-project-tip-template").html()}).on("shown.bs.popover",(function(){c()(document).on("click.popover touchstart.popover",(function(t){0===c()(t.target).closest(".popover").length&&m.trigger("click")}));var t=c()("#".concat(m.attr("aria-describedby"))).find(".js-select-on-focus");Object(a.c)(t),t.focus()})).on("hide.bs.popover",(function(){c()(document).off("click.popover touchstart.popover")})),n.on("change",(function(){j.addClass("hidden"),i.addClass("selected"),s.empty();var t=c()(this).val(),e=r[t];p.text(e.text),c()(e.icon).clone().addClass("d-block").appendTo(s);var o=c()(".tab-pane.active #project_name"),n=c()(".tab-pane.active #project_path");o.focus(),d(o,n)})),l.on("click",(function(){j.removeClass("hidden"),i.removeClass("selected"),n.prop("checked",!1)})),t.on("submit",(function(){o.val(o.val().trim())})),e.keyup((function(){return f(e)})),c()(".js-import-git-toggle-button").on("click",(function(){var t=c()("#project_mirror");t.attr("disabled",!t.attr("disabled")),d(c()(".tab-pane.active #project_name"),c()(".tab-pane.active #project_path"))})),d(u,o))},deriveProjectPathFromUrl:f,onProjectNameChange:m,onProjectPathChange:j}},74:function(t,e,o){o("HVBj"),t.exports=o("hM4O")},hM4O:function(t,e,o){"use strict";o.r(e);o("8Qi2"),o("+xeR");var n=o("3a3M"),c=o.n(n),a=o("0AwG"),i=o("3twG"),p=o("4mi+");document.addEventListener("DOMContentLoaded",(function(){var t=!1,e=c()(".js-project-name"),o=c()(".js-path-name"),n=function(){var t=Object(i.f)("name")[0],e=Object(i.f)("path")[0];return t&&!e?{name:t,path:Object(a.k)(t)}:e&&!t?{name:Object(a.e)(Object(a.j)(e,"-")),path:e}:{name:t,path:e}}(),r=n.name,l=n.path;e.val(r),o.val(l),e.on("keyup",(function(){p.a.onProjectNameChange(e,o),t=e.val().trim().length>0})),o.on("keyup",(function(){return p.a.onProjectPathChange(e,o,t)}))}))}},[[74,1,0]]]);
//# sourceMappingURL=pages.import.gitlab_projects.new.4c12facf.chunk.js.map