(this.webpackJsonp=this.webpackJsonp||[]).push([[5],{"7Kf6":function(e,t,n){"use strict";var r=n("ZfjD"),a=n("qR60");r({target:"String",proto:!0,forced:n("262j")("link")},{link:function(e){return a(this,"a","href",e)}})},FVJN:function(e,t,n){"use strict";n.d(t,"a",(function(){return P}));n("va8A"),n("kO4A"),n("t3Gg"),n("+kFb"),n("zCcL"),n("zpLX"),n("BD5p"),n("Id6h");var r=n("3a3M"),a=n.n(r),i=n("k5du"),o=n.n(i),s=n("Jn9D"),l=(n("S6uq"),n("Z5ek"),n("IdsT"),n("S26F"),n("7Kf6"),n("G3fq")),u=n.n(l),c=n("ClPU"),f=n.n(c);n("d8P8"),n("z4I3"),n("dj/k"),n("OZM5"),n("FMw2"),n("x/6R"),n("gyUR"),n("4ql4"),n("jnfO"),n("8Qi2"),n("MRnW"),n("GzNv"),n("QifN"),n("tbvx"),n("pBsb"),n("+xeR"),n("orcL");function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var v=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.data=t,this.columnWidths=[],this.rows=[],this.tableFound=this.parseTable()}var t,n,r;return t=e,(n=[{key:"isTable",value:function(){return this.tableFound}},{key:"convertToTableMarkdown",value:function(){var e=this;this.calculateColumnWidths();var t=this.rows.map((function(t){return"| ".concat(t.map((function(t,n){return e.formatColumn(t,n)})).join(" | ")," |")}));return t.splice(1,0,this.generateHeaderBreak()),t.join("\n")}},{key:"parseTable",value:function(){if(!this.data.types.includes("text/html")||!this.data.types.includes("text/plain"))return!1;var e=this.data.getData("text/html");if(this.doc=(new DOMParser).parseFromString(e,"text/html"),1!==this.doc.querySelectorAll("table:not(.diff-wrap-lines)").length)return!1;var t=this.data.getData("text/plain").trim().split(/[\n\u0085\u2028\u2029]|\r\n?/g);return this.doc.querySelectorAll("tr").length===t.length&&(this.rows=t.map((function(e){return e.split("\t")})),this.normalizeRows(),!!this.columnCountsMatch())}},{key:"normalizeRows",value:function(){var e=this.rows.map((function(e){return e.length})),t=Math.max.apply(Math,h(e));this.rows.forEach((function(e){for(;e.length<t;)e.push("")}))}},{key:"calculateColumnWidths",value:function(){var e=this;this.columnWidths=this.rows[0].map((function(t,n){return function(e,t){return Math.max.apply(Math,h(e.map((function(e){return e[t].length}))))}(e.rows,n)}))}},{key:"columnCountsMatch",value:function(){var e=this.rows[0].length,t=0;return this.doc.querySelectorAll("table tr").forEach((function(e){t=Math.max(e.cells.length,t)})),e===t}},{key:"formatColumn",value:function(e,t){return e+Array(this.columnWidths[t]-e.length+1).join(" ")}},{key:"generateHeaderBreak",value:function(){var e=this,t=this.columnWidths.map((function(t,n){return Array(e.columnWidths[n]+3).join("-")}));return"|".concat(t.join("|"),"|")}}])&&d(t.prototype,n),r&&d(t,r),e}(),m=n("Qhxq"),g=n("2ibD"),b=n("/lV4"),y=n("O4Ih");function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(e){return e&&"string"!=typeof e?e.message:e}function O(e){var t,n,r,i,o,s,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{parallelUploads:2},c=e.find(".button-attach-file"),d=e.find(".attaching-file-message"),h=e.find(".button-cancel-uploading-files"),p=e.find(".retry-uploading-link"),w=e.find(".uploading-progress"),j=e.find(".uploading-error-container"),O=e.find(".uploading-error-message"),x=e.find(".uploading-progress-container"),C=e.data("uploads-path")||window.uploads_path||null,D=gon.max_file_size||10,A=e.find(".js-gfm-input");A.wrap('<div class="div-dropzone"></div>'),A.on("paste",(function(e){return t(e)}));var E=A.closest(".md-area");e.setupMarkdownPreview();var P=e.find(".div-dropzone");if(P.parent().addClass("div-dropzone-wrapper"),P.append('<div class="div-dropzone-hover"></div>'),P.find(".div-dropzone-hover").append('<i class="fa fa-paperclip div-dropzone-icon"></i>'),!C)return P.addClass("js-invalid-dropzone"),null;var S=P.dropzone(k(k({url:C,dictDefaultMessage:"",clickable:!0,paramName:"file",maxFilesize:D,uploadMultiple:!1,headers:m.a.headers,previewContainer:!1},l),{},{processing:function(){return a()(".div-dropzone-alert").alert("close")},dragover:function(){E.addClass("is-dropzone-hover"),e.find(".div-dropzone-hover").css("opacity",.7)},dragleave:function(){E.removeClass("is-dropzone-hover"),e.find(".div-dropzone-hover").css("opacity",0)},drop:function(){E.removeClass("is-dropzone-hover"),e.find(".div-dropzone-hover").css("opacity",0),A.focus()},success:function(e,t){var a=this.getQueuedFiles().length+this.getUploadingFiles().length,i=a>=1;n(t.link.markdown,i),a||c.removeClass("hide"),r(t.link.url)},error:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object(b.a)("Attaching the file failed."),n=arguments.length>2?arguments[2]:void 0,r=z(t||n.responseText);j.removeClass("hide"),O.html(r),c.addClass("hide"),h.addClass("hide")},totaluploadprogress:function(e){i(this.files,d),w.text("".concat(Math.round(e),"%"))},sending:function(){c.addClass("hide"),j.addClass("hide"),x.removeClass("hide"),h.removeClass("hide")},removedfile:function(){c.removeClass("hide"),h.addClass("hide"),x.addClass("hide"),j.addClass("hide")},queuecomplete:function(){a()(".dz-preview").remove(),a()(".markdown-area").trigger("input"),x.addClass("hide"),h.addClass("hide")}})),F=a()(S[0]).children("textarea");h.on("click",(function(e){e.preventDefault(),e.stopPropagation(),f.a.forElement(P.get(0)).removeAllFiles(!0)})),p.on("click",(function(e){var t=f.a.forElement(e.target.closest(".js-main-target-form").querySelector(".div-dropzone")),n=t.files;e.preventDefault(),t.removeAllFiles(!0),n.map((function(e){var n=e;return n.status===f.a.ERROR&&(n.status=void 0,n.accepted=void 0),t.addFile(n)}))})),t=function(e){var t=e.originalEvent,r=t.clipboardData;if(r&&r.items){var a=new v(r);if(a.isTable()){e.preventDefault();var i=a.convertToTableMarkdown();n(i)}else{var l=o(t);if(l){e.preventDefault();var u=Object(y.b)(t)||"image.png",c="{{".concat(u,"}}");return n(c),s(l.getAsFile(),u)}}}},o=function(e){for(var t=0;t<e.clipboardData.items.length;){var n=e.clipboardData.items[t];if(-1!==n.type.indexOf("image"))return n;t+=1}return!1},n=function(e,t){var n=e;t&&(n+="\n\n");var r=F.get(0),i=r.selectionStart,o=r.selectionEnd,s=a()(F).val().length,l=a()(F).val().substring(0,i),u=a()(F).val().substring(o,s);return a()(F).val(l+n+u),r.setSelectionRange(i+n.length,o+n.length),r.style.height="".concat(r.scrollHeight,"px"),A.get(0).dispatchEvent(new Event("input")),A.trigger("input")},r=function(t){a()(e).append('<input type="hidden" name="files[]" value="'.concat(u()(t),'">'))};var M=function(){return x.addClass("hide")};return s=function(t,n){var r=new FormData;r.append("file",t,n),x.removeClass("hide"),e.find(".div-dropzone-alert").alert("close"),g.a.post(C,r).then((function(e){var t=e.data.link.markdown;!function(e,t){var n=a()(F),r=n.get(0),i=r.selectionStart,o=r.selectionEnd,s="{{".concat(e,"}}");n.val((function(e,n){return n.replace(s,t)})),r.setSelectionRange(i-s.length+t.length,o-s.length+t.length),n.trigger("change")}(n,t),M()})).catch((function(e){var t;t=e.response.data.message,j.removeClass("hide"),O.html(t),M()}))},i=function(e,t){var n=e.filter((function(e){return"uploading"===e.status||"queued"===e.status})).length,r=Object(b.c)("Attaching a file","Attaching %d files",n);t.text("".concat(r," -"))},e.find(".markdown-selector").click((function(e){e.preventDefault(),a()(this).closest(".gfm-form").find(".div-dropzone").click(),A.focus()})),P.get(0)?f.a.forElement(P.get(0)):null}f.a.autoDiscover=!1;var x=n("tXF7");function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.form=t,this.textarea=this.form.find("textarea.js-gfm-input"),this.enableGFM=D(D({},s.b),r);var a=gl.GfmAutoComplete&&gl.GfmAutoComplete.dataSources||{};Object.keys(this.enableGFM).forEach((function(e){"emojis"!==e&&(n.enableGFM[e]=Boolean(a[e]))})),this.destroy(),this.setupForm(),this.form.data("glForm",this)}var t,n,r;return t=e,(n=[{key:"destroy",value:function(){this.clearEventListeners(),this.autoComplete&&this.autoComplete.destroy(),this.formDropzone&&this.formDropzone.destroy(),this.form.data("glForm",null)}},{key:"setupForm",value:function(){var e=this.form.is(":not(.gfm-form)");this.form.removeClass("js-new-note-form"),e&&(this.form.find(".div-dropzone").remove(),this.form.addClass("gfm-form"),gl.utils.disableButtonIfEmptyField(this.form.find(".js-note-text"),this.form.find(".js-comment-button, .js-note-new-discussion")),this.autoComplete=new s.a(gl.GfmAutoComplete&&gl.GfmAutoComplete.dataSources),this.autoComplete.setup(this.form.find(".js-gfm-input"),this.enableGFM),this.formDropzone=O(this.form,{parallelUploads:1}),o()(this.textarea)),this.addEventListeners(),Object(x.b)(this.form),this.form.show(),this.isAutosizeable&&this.setupAutosize()}},{key:"setupAutosize",value:function(){var e=this;this.textarea.off("autosize:resized").on("autosize:resized",this.setHeightData.bind(this)),this.textarea.off("mouseup.autosize").on("mouseup.autosize",this.destroyAutosize.bind(this)),setTimeout((function(){o()(e.textarea),e.textarea.css("resize","vertical")}),0)}},{key:"setHeightData",value:function(){this.textarea.data("height",this.textarea.outerHeight())}},{key:"destroyAutosize",value:function(){var e=this.textarea.outerHeight();this.textarea.data("height")!==e&&(o.a.destroy(this.textarea),this.textarea.data("height",e),this.textarea.outerHeight(e),this.textarea.css("max-height",window.outerHeight))}},{key:"clearEventListeners",value:function(){this.textarea.off("focus"),this.textarea.off("blur"),Object(x.c)(this.form)}},{key:"addEventListeners",value:function(){this.textarea.on("focus",(function(){a()(this).closest(".md-area").addClass("is-focused")})),this.textarea.on("blur",(function(){a()(this).closest(".md-area").removeClass("is-focused")}))}}])&&E(t.prototype,n),r&&E(t,r),e}()},O4Ih:function(e,t,n){"use strict";n.d(t,"b",(function(){return r}));n("IdsT"),n("S26F"),n("pBsb");t.a=function(e,t){var n=document.querySelector(e),r=document.querySelector(t);if(n&&r){var a=n.closest("form");n.addEventListener("click",(function(){r.click()})),r.addEventListener("change",(function(){a.querySelector(".js-filename").textContent=r.value.replace(/^.*[\\\/]/,"")}))}};var r=function(e){var t,n=e.clipboardData;return window.clipboardData&&window.clipboardData.getData?t=window.clipboardData.getData("Text"):n&&n.getData&&(t=n.getData("text/plain")),(t=t.split("\r"))[0]}},Ylta:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n("t3Gg");var r=n("3a3M"),a=n.n(r),i=(n("B0Da"),n("ClPU")),o=n.n(i),s=n("t6Yz"),l=n.n(s);n("U6io");function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}o.a.autoDiscover=!1;var c=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.active_backdrop=null,this.active_textarea=null,a()(document).on("click",".js-zen-enter",(function(e){return e.preventDefault(),a()(e.currentTarget).trigger("zen_mode:enter")})),a()(document).on("click",".js-zen-leave",(function(e){return e.preventDefault(),a()(e.currentTarget).trigger("zen_mode:leave")})),a()(document).on("zen_mode:enter",(function(e){t.enter(a()(e.target).closest(".md-area").find(".zen-backdrop"))})),a()(document).on("zen_mode:leave",(function(){t.exit()})),a()(document).on("keydown",(function(e){if(27===e.keyCode)return e.preventDefault(),a()(document).trigger("zen_mode:leave")}))}var t,n,r;return t=e,(n=[{key:"enter",value:function(e){l.a.pause(),this.active_backdrop=a()(e),this.active_backdrop.addClass("fullscreen"),this.active_textarea=this.active_backdrop.find("textarea"),this.active_textarea.removeAttr("style"),this.active_textarea.focus()}},{key:"exit",value:function(){if(this.active_textarea){l.a.unpause(),this.active_textarea.closest(".zen-backdrop").removeClass("fullscreen"),this.scrollTo(this.active_textarea),this.active_textarea=null,this.active_backdrop=null;var e=a()(".div-dropzone");e&&!e.hasClass("js-invalid-dropzone")&&o.a.forElement(".div-dropzone").enable()}}},{key:"scrollTo",value:function(e){return a.a.scrollTo(e,0,{offset:-150})}}])&&u(t.prototype,n),r&&u(t,r),e}()}}]);
//# sourceMappingURL=commons~pages.groups.milestones.edit~pages.groups.milestones.new~pages.projects.commit.show~pages.pr~ab9e92f8.9b456a27.chunk.js.map