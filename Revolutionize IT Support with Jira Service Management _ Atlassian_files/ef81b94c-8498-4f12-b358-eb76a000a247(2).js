// Copyright 2006-2024 ClickTale Ltd., US Patent Pending

window.ClickTaleGlobal = window.ClickTaleGlobal || {};
window.ClickTaleSettings = window.ClickTaleSettings || {};

ClickTaleGlobal.init = ClickTaleGlobal.init || {};
ClickTaleGlobal.scripts = ClickTaleGlobal.scripts || {};

ClickTaleGlobal.scripts.filter = ClickTaleGlobal.scripts.filter || (function () {
	var recordingThreshold = Math.random() * 100;

	return {
		isRecordingApproved: function(percentage) {
			return recordingThreshold <= percentage;
		}
	}
})();
	
		
// Copyright 2006-2024 ClickTale Ltd., US Patent Pending
// PID: 45



/*browsers exclusion start*/ ClickTaleSettings.PTC.doOnlyWhen = function (toDoHandler, toCheckHandler, interval, times, failHandler) {
            if ((!toDoHandler) || (!toCheckHandler)) return;
            if (typeof interval == 'undefined') interval = 1000;
            if (typeof times == 'undefined') times = 20;
        
            if (--times < 0) {
                if (typeof failHandler === 'function') {
                    failHandler();
                }
                return;
            }
            if (toCheckHandler()) {
                toDoHandler();
                return;
            }
        
            setTimeout(function () { ClickTaleSettings.PTC.doOnlyWhen(toDoHandler, toCheckHandler, interval, times, failHandler); }, interval);
        }
        ClickTaleSettings.PTC.doOnlyWhen(function () { 
            if (window.ClickTaleSettings.PTC.okToRunPCC) { 
                (function(){
                    window.ClickTaleSettings = window.ClickTaleSettings || {};
                    ClickTaleSettings.PTC = ClickTaleSettings.PTC || {};
                    ClickTaleSettings.PTC.originalPCCLocation = 'P33_PID45';
                    
                    function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function ba(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}function da(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}var ea="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function fa(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var ha=fa(this);function ia(a,b){if(b)a:{var c=ha;a=a.split(".");for(var d=0;d<a.length-1;d++){var f=a[d];if(!(f in c))break a;c=c[f]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ea(c,a,{configurable:!0,writable:!0,value:b})}}
var ja="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var f in d)Object.prototype.hasOwnProperty.call(d,f)&&(a[f]=d[f])}return a};ia("Object.assign",function(a){return a||ja});ia("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var f=d.length,g=0;g<f;g++){var e=d[g];if(b.call(c,e,g,d)){b=e;break a}}b=void 0}return b}});
function m(a,b,c,d,f){a&&b&&("undefined"==typeof c&&(c=1E3),"undefined"==typeof d&&(d=20),0>--d?"function"===typeof f&&f():b()?a():setTimeout(function(){m(a,b,c,d,f)},c))};function n(a,b){b||(b=document);return b instanceof Element||b instanceof Document?Array.prototype.slice.call(b.querySelectorAll(a)):"string"===typeof b?n(a,document.querySelectorAll(b)):Array.isArray(b)||b instanceof HTMLCollection||b instanceof NodeList?Array.prototype.reduce.call(b,function(c,d){return c.concat(Array.prototype.slice.call(d.querySelectorAll(a)))},[]):[]}
function t(a,b){if(a&&a.nodeType&&9===a.nodeType)return!1;var c=Element.prototype;t=function(d,f){return d&&document.documentElement.contains(d)?t.matches.call(d,f):!1};t.matches=c.webkitMatchesSelector||c.mozMatchesSelector||c.msMatchesSelector||c.matches;return t(a,b)}function u(a,b){u=Element.prototype.closest?function(c,d){return c&&c instanceof Element?Element.prototype.closest.call(c,d):null}:function(c,d){for(;c&&!t(c,d);)c=c.parentElement;return c};return u(a,b)};var v=!1,ka=Object.defineProperty&&Object.defineProperty({},"passive",{get:function(){v=!0}});document.addEventListener("test",function(){},ka);var w=v?{passive:!0,capture:!0}:!0,x=v?{passive:!0,capture:!1}:!1,la=0;
function A(a){function b(){2==++c&&a()}if(!~A.l.indexOf(a)){A.l.push(a);var c=0;ma(b);if("function"==typeof ClickTaleIsRecording&&!0===ClickTaleIsRecording())b();else{var d=window.ClickTaleOnRecording||function(){};window.ClickTaleOnRecording=function(){b();return d.apply(this,arguments)}}}}A.l=[];function ma(a){function b(){c||(c=!0,a())}var c=!1;"loading"!=document.readyState?b():document.addEventListener&&document.addEventListener("DOMContentLoaded",b,!1)}
function B(a,b,c,d,f){if("string"===typeof b&&-1!=b.indexOf(" "))return b.split(/\s+/).forEach(function(e){return B(a,e,c,d,f)}),a;if("string"===typeof a)Array.prototype.forEach.call(document.querySelectorAll(a),function(e){B(e,b,c,d,f)});else if(a instanceof Array||a instanceof NodeList)Array.prototype.forEach.call(a,function(e){B(e,b,c,d,f)});else{var g="";"string"==typeof c&&("mouseenter"==b?(b="mouseover",g="mouseenter"):"mouseleave"==b&&(b="mouseout",g="mouseleave"));a.addEventListener(b,function(e,
h,l,k,p,q){return function(r){if("function"===typeof l)l.apply(this,arguments),p&&e.removeEventListener(h,arguments.callee,w);else{var z=r.relatedTarget,y=u(r.target,l);y&&e.compareDocumentPosition(y)&Node.DOCUMENT_POSITION_CONTAINED_BY&&("mouseenter"==q||"mouseleave"==q?z&&(z==y||y.compareDocumentPosition(z)&Node.DOCUMENT_POSITION_CONTAINED_BY)||k.apply(y,arguments):k.apply(y,arguments),p&&e.removeEventListener(h,arguments.callee,w))}}}(a,b,c,d,f,g),w)}return a}
function na(a,b){document.addEventListener("mouseup",function(c){a===c.target&&b();document.removeEventListener("mouseup",arguments.callee,x)},x)}function oa(a,b){document.addEventListener("mouseup",function(c){a===c.target&&b();document.removeEventListener("mouseup",arguments.callee,w)},w)}
function pa(a,b){function c(d){document.removeEventListener("touchend",arguments.callee,x);a===d.target&&b()}document.addEventListener("touchend",c,x);document.addEventListener("touchmove",function(d){document.removeEventListener("touchmove",arguments.callee,x);document.removeEventListener("touchend",c,x)},x)}
function qa(a,b){function c(d){document.removeEventListener("touchend",arguments.callee,w);a===d.target&&b()}document.addEventListener("touchend",c,w);document.addEventListener("touchmove",function(d){document.removeEventListener("touchmove",arguments.callee,w);document.removeEventListener("touchend",c,w)},w)}function C(a,b){var c=D();c&&(c.m?C=pa:C=na,C(a,b))}function F(a,b){var c=D();c&&(c.m?F=qa:F=oa,F(a,b))};function ra(a){return btoa(encodeURIComponent(a).replace(/%([0-9A-F]{2})/g,function(b,c){return String.fromCharCode(+("0x"+c))}))};function sa(a){window._uxa=window._uxa||[];window._uxa.push.apply(window._uxa,arguments)}function ta(a){a=void 0===a?window.location.pathname+window.location.hash.replace("#","?__"):a;sa(["trackPageview",a])};var ua,va,wa,xa,ya=!1;function G(a){"function"===typeof ClickTaleExec&&ClickTaleExec(a)}function H(){"function"===typeof ClickTaleStop&&ClickTaleStop()}function I(a,b){"function"===typeof ClickTaleEvent&&(b?!0!==I.flags[a]&&(I.flags[a]=!0,ClickTaleEvent(a)):ClickTaleEvent(a))}I.flags={};function za(a){"function"===typeof window.ClickTaleRegisterElementAction&&ClickTaleRegisterElementAction("click",a)}function Aa(a,b){var c={},d;for(d in a)c[d]=a[d];c.target=b;c.srcElement=b;za(c)}
function Ba(a,b){a&&"object"==typeof a&&"string"==typeof b&&(window.ClickTaleContext&&-1!=document.referrer.indexOf(location.hostname)&&window.parent.ct&&window.parent.ct.ElementAddressing&&"function"===typeof window.parent.ct.ElementAddressing.forceSetCustomElementID?window.parent.ct.ElementAddressing.forceSetCustomElementID(a,b):(window.ClickTaleContext||"function"!==typeof ClickTaleSetCustomElementID||-1==ClickTaleSetCustomElementID.toString().indexOf("duplicate registration of custom id")?window.ClickTaleSetCustomElementID=
window.ClickTaleSetCustomElementID||function(c,d){c.ClickTale=c.ClickTale||{};c.ClickTale.CustomID=d}:Ba=function(c,d){c.ClickTale=c.ClickTale||{};c.ClickTale.CustomID=d},window.ClickTaleSetCustomElementID(a,b)))}function Ca(a,b){"function"===typeof ClickTaleLogical&&(I.flags={},J.h&&J.h instanceof Da&&J.h.clear(),b?ClickTaleLogical(a,b):ClickTaleLogical(a))}function D(){if("function"===typeof ClickTaleDetectAgent){var a=ClickTaleDetectAgent();if(a)return D=function(){return a},D()}return null}
function Ea(){"function"===typeof ClickTaleUploadPage&&ClickTaleUploadPage(void 0,void 0)}function K(a){if("function"===typeof ClickTaleRegisterTouchAction){var b=a.getBoundingClientRect();ClickTaleRegisterTouchAction(a,b.left+document.body.scrollLeft,b.top+document.body.scrollTop)}}
function Ga(a,b,c){if("boolean"!=typeof L){var d=D();d&&(L=!!d.m)}a||(a="mousedown",L&&(a="touchstart"));c=c||"img, a, button, textarea, input, select";L&&(c+=", label[for]");B(document,a,c,function(f){var g=f.target,e=this;if(!b||!t(this,b))if(L)if(t(this,"label[for]"))F(g,function(k){return function(){var p,q;(p=k.getAttribute("for"))&&(q=document.getElementById(p))&&K(q)}.bind(e)}(g,f));else{var h=-1,l=function(k){clearTimeout(h);document.removeEventListener("touchstart",arguments.callee,x);F(g,
function(p){return function(){function q(z){document.removeEventListener("touchend",arguments.callee,x);clearTimeout(r)}var r=-1;document.addEventListener("touchend",q,x);r=setTimeout(function(){document.removeEventListener("touchend",q,x);K(p)},50)}.bind(e)}(g,f))};document.addEventListener("touchstart",l,x);h=setTimeout(function(){document.removeEventListener("touchstart",l,x);K(g)},50)}else F(g,function(k,p){return function(){function q(z){z.target===k&&(M=!0);document.removeEventListener("click",
arguments.callee,!0);clearTimeout(r)}var r=setTimeout(function(){M||za(p);document.removeEventListener("click",q,!0);M=void 0},200);document.addEventListener("click",q,!0)}.bind(e)}(g,f))})}var L,M;function N(a,b,c,d){N.j&&(N.j=!1,d=d||400,"number"==typeof c&&(d=c,c=""),b=b||document.location.href,H(),window.ClickTaleIncludedOnDOMReady=!0,window.ClickTaleIncludedOnWindowLoad=!0,Ea(),Ca(b,c),m(a,ClickTaleIsRecording,1E3,2),setTimeout(function(){N.j=!0},d))}N.j=!0;
function Ha(){var a=O,b=document.location,c=P,d=Q;if(R){R=!1;var f=f||400;d?(H(),window.ClickTaleIncludedOnDOMReady=!0,window.ClickTaleIncludedOnWindowLoad=!0,Ea(),Ca(b.href,c)):(Array.isArray(window.ClickTaleOnStop)&&window.ClickTaleOnStop.forEach(function(g){if("function"===typeof g)try{g.call(window)}catch(e){}}),ta(b.pathname));a();clearTimeout(Ia);Ia=setTimeout(function(){R=!0},f)}}var Ia=-1,R=!0;
function Ja(a){"function"===typeof ClickTaleAddAugmentElementPathHandler&&ClickTaleAddAugmentElementPathHandler("Linkanalytics",a)}function Ka(){var a=[[".select2-result-label",!0]];La=a;var b="";a.forEach(function(c){!0===c[1]&&(b+=","+c[0])});b&&Ga("","",b.replace(/^,/,""));Ja(function(c){return function(d){for(var f=0,g=c.length;f<g;f++){var e=c[f],h=e[0];if(d&&t(d,h)&&(h=e[2],"function"!=typeof h||h()))return{data:{interesting:e[1]}}}return null}}(La))}var La=[];
function Da(){this.i=!1;this.g="";this.init=function(a){this.i||(this.i=!0,document.addEventListener("input",this.o,w));this.u(a);this.g=this.g?this.g+","+a:a};this.o=function(a){a=a.target;if(t(a,this.g)){var b=n(this.g).indexOf(a);G("document.querySelectorAll('"+this.g+"')["+b+"].value = Base64Decode('"+ra(a.value)+"');")}}.bind(this);this.u=function(a){var b="";n(a).forEach(function(c,d){b+="document.querySelectorAll('"+a+"')["+d+"].value = Base64Decode('"+ra(c.value)+"'); "});b&&G(b)};this.clear=
function(){document.removeEventListener("input",this.o,w);this.i=!1;this.g=""}}function J(a){J.h=J.h||new Da;J.h.init(a)}J.h=null;var S=I,T=Ba;function Ma(a,b){return a instanceof Element?b instanceof Element?a===b:t(a,b):!1}var U=u,Na=C,Oa=F;var V,W="",X="",Pa=document.location.host,Qa=document.location.href,Ra=!1,Sa=!0,P=location.href,Q,Y,Ta="";function Ua(){var a=Object.assign({},document.location);a.href=a.href.replace("#","?__");a.pathname+=a.hash.replace("#","?__");return a}
function Va(){var a;m(function(){var b=a.sheet.insertRule;a.sheet.insertRule=function(c,d,f){var g=arguments[0];g&&"string"==typeof g&&setTimeout(function(){G("window['fixSheetIssue']('"+escape(g)+"');")},10);return b.apply(this,arguments)}},function(){a=document.querySelector("style[data-styled]");return!!a},250,25,function(){"function"===typeof ClickTaleField&&ClickTaleField("style[data-styled]","never found and time passed")})}
function Wa(){var a=document.querySelector("#imkt-jsx--5749a30a h2 > span > span");return a?a.innerText.trim().slice(0,-1):(a=document.querySelector("#imkt-jsx--5749a30a h2 > span"))?a.innerText.trim().slice(0,-1):""}function Xa(){m(function(){Ta=Wa();S("Onload | Cloud Calculator | "+Ta)},function(){return Wa()!=Ta},250,10)}function Z(a){Ma(a.target,".select2-result-label")&&"function"===typeof ClickTaleRegisterElementAction&&ClickTaleRegisterElementAction("click",a)}
function Ya(){a:{var a=["LITHIUM","CommunityJsonObject","User","isAnonymous"];var b=window,c;for(c in a){var d=b[a[c]];if(void 0===d||null==d||0>=d.length){a=null;break a}b=b[a[c]]}a=b}(a||0==a)&&sa(["trackDynamicVariable",{key:"Community Logged In Status",value:""+!a}])}
function O(){V="";P=location.href;X=document.location.pathname.toLowerCase();Va();if(Sa)Sa=!1;else for(var a=window.ClickTaleSettings&&window.ClickTaleSettings.PTC&&window.ClickTaleSettings.PTC.InitFuncs?window.ClickTaleSettings.PTC.InitFuncs:[],b=0,c=a.length;b<c;b++)if("function"===typeof a[b])a[b]();Q||A(function(){Q=!0});var d,f;m(function(){[].concat(f instanceof Array?f:da(ba(f))).forEach(function(g,e){T(g,"inputsID"+e)});[].concat(d instanceof Array?d:da(ba(d))).forEach(function(g){var e=U(g,
".sc-cQFLBn.gqKsMq");g=g.alt&&g.alt.replace(/ /g,"");e&&g&&T(e,g)})},function(){d=document.querySelectorAll(".sc-cQFLBn.gqKsMq .khamac > img");f=document.querySelectorAll("#product-card-units-number-field");return!(!d.length||!f.length)},250,10);"/"===X||""===X?V="Home Page":Array.prototype.forEach.call(document.location.pathname.split("/"),function(g){0<g.length&&(0<V.length&&(V+=" | "),V+=g)});"my.atlassian.com"==Pa?S("Onload | Logged in user"+V,!0):"training.atlassian.com"===Pa&&document.querySelectorAll(".imkt-navbar__link-list > li:not(.custom-nav)").forEach(function(g,
e){g.addEventListener("mouseenter",function(){G("jQuery('.imkt-navbar__link-list > li:not(.custom-nav)').eq("+e+").addClass('ct_isHover');")});g.addEventListener("mouseleave",function(){G("jQuery('.imkt-navbar__link-list > li:not(.custom-nav)').eq("+e+").removeClass('ct_isHover');")})});-1<Qa.indexOf("https://www.atlassian.com/software/")&&(W="PDP");-1<Qa.indexOf("/software/jira/pricing?tab=self-hosted")&&(V="Jira Self-Hosted Pricing",Ka());V&&S("Onload | "+V);-1<X.indexOf("software/pricing-calculator")&&
Xa();Ya()}function Za(){setTimeout(function(){Ha()},600)}
function $a(){if(!window.ClickTaleFirstPCCGo){window.ClickTaleFirstPCCGo=!0;var a=D();a&&(Ra=a.m);O();var b=document.querySelector('input[id ^= "uuid-"][id $= "-users"]');b&&b.addEventListener("input",function(){G('jQuery(\'input[id ^= "uuid-"][id $= "-users"]\').val(unescape(\''+escape(b.value)+"'));")},!1);a=["input","#search-input"];jQuery(document).on(a[0],a[1],function(d){(d=jQuery(d.target).val())&&G("jQuery('#search-input').val(unescape('"+escape(d)+"'));")});a=Ra?"touchstart":"mousedown";
var c=[a,'.select2-result-label, .icon.logo, .header-product a,  a[class*="button"], .product.ng-isolate-scope'];jQuery(document).on(c[0],c[1],function(d){var f=d.target;jQuery(f);var g=jQuery(this);Na(f,function(e){return function(){if(e.closest("a[class*='button']").length){var h=e.text().trim(),l=e.attr("href");h&&l&&V&&S("Action | "+V+" | "+l+" | "+h,!0)}else if(0<e.closest(".product.ng-isolate-scope").length){if(e.closest(".product.ng-isolate-scope")[0].pathname){var k="";Array.prototype.forEach.call(e.closest(".product.ng-isolate-scope")[0].pathname.split("/"),
function(p){0<p.length&&(0<k.length&&(k+=" "),k+=p)})}V&&k&&S("Action | "+V+" | "+k,!0)}else e.closest(".header-product a").length?(l=jQuery(".selected .topnav-toggle").text().trim(),h=e.closest(".header-product").attr("data-custom")?e.closest(".header-product").attr("data-custom"):e.closest(".header-product").find("h4").text().trim(),l&&h&&S("Action | All Pages | "+l+" | "+h+" clicked",!0)):e.closest(".icon.logo").length&&(0<e.closest("a.logo-link").length&&e.closest("a.logo-link")[0].pathname&&
(k="",Array.prototype.forEach.call(e.closest("a.logo-link")[0].pathname.split("/"),function(p){0<p.length&&(0<k.length&&(k+=" "),k+=p)})),V&&k&&S("Action | "+V+" | "+k+" Icon Clicked",!0))}.bind(e[0])}(g,f,d))});"Jira Self-Hosted Pricing"===V&&((c=document.querySelector("#s2id_autogen1 .select2-choice"))&&c.addEventListener("mousedown",function(){m(function(){Y=document.querySelector("div#select2-drop");Y.removeEventListener("pointerup",Z,!1);T(Y,"serverDropdown");Y.addEventListener("pointerup",Z,
!1)},function(){return!!document.querySelector("div#select2-drop")},200,10)},!1),(c=document.querySelector("#s2id_autogen3 .select2-choice"))&&c.addEventListener("mousedown",function(){m(function(){Y=document.querySelector("div#select2-drop");Y.removeEventListener("pointerup",Z,!1);T(Y,"dataCenterDropdown");Y.addEventListener("pointerup",Z,!1)},function(){return!!document.querySelector("div#select2-drop")},200,10)},!1));c="#homepage--hero--video, .customers.wpl div div, .image-heading-textblock a, .imkt-navbar__link-list-link, .video-link, #search-input, header, footer .footer-links a, #topnav .topnav-toggle, #topnav .topnav-link, #topnav .mobile-only a";
-1<V.indexOf("self-paced-tutorials | try-it")&&(c+=", .featured-course .accordion-toggle strong");-1<X.indexOf("software/pricing-calculator")&&(c+=',[id^=imkt-jsx] button[class^=css],[id^="imkt-jsx"] [type="button"].css-exzcqm');B(document,a,c,function(d){var f=d.target;Oa(f,function(g,e,h){return function(){U(h,"[id^=imkt-jsx] button[class^=css]")?(S("Action | Cloud Calculator | Click Continue",!1),setTimeout(function(){Za()},500)):Ma(h,'[id^="imkt-jsx"] [type="button"].css-exzcqm')&&setTimeout(function(){Za()},
500);if(U(h,".imkt-navbar__link-list-link")){var l=h.textContent.trim();l&&"PDP"==W&&S("Action | "+W+" | "+V+" | Clicked on tab "+l,!0)}else U(h,".video-link")?W&&V&&S("Action | "+W+" | "+V+" | Interacted with video",!0):U(h,"#homepage--hero--video")?S("Action | Interacted with main Hero",!0):U(h,".customers.wpl div div")?S("Action | Interacted with Customers Section",!0):U(h,".image-heading-textblock a")?S("Action | Interacted with Recommended Reading",!0):U(h,"footer .footer-links a")?(S("Action | All Pages | Clicked on Any Footer",
!0),S("Action | Footer | "+h.textContent.trim()+" clicked",!0)):U(h,"header")?S("Action | All Pages | Any Top Navigation Clicked",!0):U(h,"#search-input")?S("Action | All Pages | Clicked on search",!0):U(h,"#topnav .topnav-toggle, #topnav .topnav-link, #topnav .mobile-only a")&&(S("Action | All Pages | Clicked on Any Top Nav Menu",!0),(l=h.textContent.trim())&&S("Action | All Pages | "+l+" Top navigation clicked",!0));-1<V.indexOf("self-paced-tutorials | try-it")&&Ma(h,".featured-course .accordion-toggle strong")&&
(l=U(h,".featured-course .accordion-toggle"))&&Aa(e,l)}.bind(h)}(f,d,this))})}}
(function(a){function b(){2==++la&&a()}ma(b);if("function"==typeof ClickTale)b();else{Array.isArray(window.ClickTaleOnReadyList)&&window.ClickTaleOnReadyList.push(b);var c=window.ClickTaleOnRecording||function(){};window.ClickTaleOnRecording=function(){b();return c.apply(this,arguments)}}})(function(){Ga();m($a,function(){return!window.jQuery||"function"!==typeof jQuery.fn.on&&"function"!==typeof jQuery.fn.delegate?!1:!0},250,40)});
window.clickTaleStartEventSignal=function(a){N(O,Ua().href,P);a&&"string"===typeof a&&S(a)};window.clickTaleEndEventSignal=function(){H()};
(function(a,b,c,d,f,g,e,h,l,k,p){function q(){"function"===typeof p&&p();var E=h?h():location;ya?N(function(){"function"===typeof a&&a()},E.href,z,c):ua&&(ta(E.pathname),!0===l&&"function"===typeof a&&a());z=E.href}function r(E){if(y&&(y=!1,setTimeout(function(){y=!0},e),"function"!==typeof g||g()))if(isNaN(f)||"number"!=typeof f||E){if("function"===typeof ClickTaleIsRecording&&ClickTaleIsRecording())ya=!0,H();else{var ca;"function"!==typeof ClickTaleStop&&(ca=window.ClickTaleOnStop)&&Array.isArray(ca)&&
ca.forEach(function(Fa){"function"===typeof Fa&&Fa.call(window)});ua=!0}d()||(b?"string"===typeof b?m(q,function(){return!!document.querySelector(b+"")},1E3,10,q):"function"===typeof b?m(q,b,1E3,10,q):setTimeout(q,2E3):setTimeout(q,2E3))}else E=f||0,setTimeout(r.bind(null,!0),E)}"function"!=typeof a&&a&&(b=a.K,c=a.I,d=a.D,f=a.C,g=a.H,e=a.J,h=a.A,l=a.B,k=a.F,p=a.G,a=a.s);k=k||!1;d=d||function(){return!1};a=a||function(){};e=e||400;var z=(h?h():location).href;c||isNaN(b)||(c=b,b="");c=c||2E3;var y=
!0;window.history&&(va=history.replaceState,history.replaceState=function(){k?r():setTimeout(r,5);return va.apply(history,arguments)},wa=history.pushState,history.pushState=function(){k?r():setTimeout(r,5);return wa.apply(history,arguments)},xa=function(){k?r():setTimeout(r,5)},window.addEventListener("popstate",xa,!1))})({s:O,B:!0,A:Ua});
                })();
            } 
        }, function () { return !!(window.ClickTaleSettings && ClickTaleSettings.PTC && typeof ClickTaleSettings.PTC.okToRunPCC != 'undefined'); }, 500, 20);


//Signature:YIjMPd/MruMZUeinFGkLcUUnfmLeOa8C6B0FfMRi+D3QI0jYhQtN7wbXtA48qWj57rOJcp7Q7IWEeH+B/c//IZ9DrN2IIKqN82p+reEz3I9A4s6K4VYHSTEZtNkqjW+NC1+iTRIFnpTAJu0L4/8xz9hpk6kwAhRHkdZ5C1QrpEg=