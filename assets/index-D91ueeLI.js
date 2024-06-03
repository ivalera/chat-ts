(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();/*! js-cookie v3.0.5 | MIT */function x(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}var _e={read:function(e){return e[0]==='"'&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function H(e,t){function n(a,o,s){if(!(typeof document>"u")){s=x({},t,s),typeof s.expires=="number"&&(s.expires=new Date(Date.now()+s.expires*864e5)),s.expires&&(s.expires=s.expires.toUTCString()),a=encodeURIComponent(a).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var i="";for(var c in s)s[c]&&(i+="; "+c,s[c]!==!0&&(i+="="+s[c].split(";")[0]));return document.cookie=a+"="+e.write(o,a)+i}}function r(a){if(!(typeof document>"u"||arguments.length&&!a)){for(var o=document.cookie?document.cookie.split("; "):[],s={},i=0;i<o.length;i++){var c=o[i].split("="),d=c.slice(1).join("=");try{var h=decodeURIComponent(c[0]);if(s[h]=e.read(d,h),a===h)break}catch{}}return a?s[a]:s}}return Object.create({set:n,get:r,remove:function(a,o){n(a,"",x({},o,{expires:-1}))},withAttributes:function(a){return H(this.converter,x({},this.attributes,a))},withConverter:function(a){return H(x({},this.converter,a),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(e)}})}var b=H(_e,{path:"/"});const f={SEND_FORM:document.querySelector(".chat__form-msg-send"),TEXT_INPUT:document.querySelector(".chat__send-text"),TEMPLATE:document.querySelector("#message"),LIST:document.querySelector(".chat__messages-list"),OUTPUT_PLACE:document.querySelector(".chat__messages-place")},y={DIALOG:document.querySelector(".auth__frame"),EMAIL_INPUT:document.querySelector(".auth__email"),FORM:document.querySelector(".auth__form"),CONFIRM_TOKEN_BTN:document.querySelector(".auth__confirm-code-btn")},O={DIALOG:document.querySelector(".confirm__frame"),FORM:document.querySelector(".confirm__form"),INPUT_TOKEN:document.querySelector(".confirm__code")},m={BUTTON_OPEN:document.querySelector(".chat__setting-btn"),DIALOG:document.querySelector(".setting__frame"),FORM:document.querySelector(".setting__form"),NAME_INPUT:document.querySelector(".setting__change-user"),INFO_ALERT:document.querySelector(".setting__warning")},l={FORM:document.querySelector(".form__search"),INPUT_MESSAGES:document.querySelector(".form__search-input"),LIST:document.querySelector(".chat__search-list"),BUTTON_CLEAR:document.querySelector(".btn__clear_search")},_={INFO_ALERT:document.querySelector(".info_alert"),BUTTON_EXIT:document.querySelector(".chat__exit-btn"),MAIN_SECTION:document.querySelector(".main")},j="https://edu.strada.one/api/",fe=`${j}user`,be=`${j}user/me`,pe=`${j}messages/`,W={"Content-Type":"application/json;charset=utf-8"};async function R(e,t){try{const n=await fetch(e,t);if(!_.INFO_ALERT)return;if(n.ok)_.INFO_ALERT.textContent="Код отправлен";else throw _.INFO_ALERT.textContent="Код не отправлен! ",n.status===401?new Error("Ошибка авторизации"):new Error("Ошибка на сервере");return await n.json()}catch(n){console.log(n)}}async function Me(e){R(fe,{method:"POST",headers:W,body:JSON.stringify({email:e})})}async function Pe(e){return R(be,{method:"GET",headers:{...W,Authorization:`Bearer ${e}`}})}async function Ne(e){return R(fe,{method:"PATCH",headers:{...W,Authorization:`Bearer ${b.get("userToken")}`},body:JSON.stringify({name:e})})}async function ve(){return R(pe,{method:"GET",headers:{...W,Authorization:`Bearer ${b.get("userToken")}`}})}function T(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function P(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}const he=6048e5,Ie=864e5;let Le={};function U(){return Le}function D(e,t){var i,c,d,h;const n=U(),r=(t==null?void 0:t.weekStartsOn)??((c=(i=t==null?void 0:t.locale)==null?void 0:i.options)==null?void 0:c.weekStartsOn)??n.weekStartsOn??((h=(d=n.locale)==null?void 0:d.options)==null?void 0:h.weekStartsOn)??0,a=T(e),o=a.getDay(),s=(o<r?7:0)+o-r;return a.setDate(a.getDate()-s),a.setHours(0,0,0,0),a}function C(e){return D(e,{weekStartsOn:1})}function me(e){const t=T(e),n=t.getFullYear(),r=P(e,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const a=C(r),o=P(e,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const s=C(o);return t.getTime()>=a.getTime()?n+1:t.getTime()>=s.getTime()?n:n-1}function J(e){const t=T(e);return t.setHours(0,0,0,0),t}function V(e){const t=T(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function Ae(e,t){const n=J(e),r=J(t),a=+n-V(n),o=+r-V(r);return Math.round((a-o)/Ie)}function De(e){const t=me(e),n=P(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),C(n)}function xe(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function ke(e){if(!xe(e)&&typeof e!="number")return!1;const t=T(e);return!isNaN(Number(t))}function Ce(e){const t=T(e),n=P(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}const We={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Re=(e,t,n)=>{let r;const a=We[e];return typeof a=="string"?r=a:t===1?r=a.one:r=a.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function q(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const Ue={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Fe={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},qe={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Ye={date:q({formats:Ue,defaultWidth:"full"}),time:q({formats:Fe,defaultWidth:"full"}),dateTime:q({formats:qe,defaultWidth:"full"})},Ge={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},He=(e,t,n,r)=>Ge[e];function L(e){return(t,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let a;if(r==="formatting"&&e.formattingValues){const s=e.defaultFormattingWidth||e.defaultWidth,i=n!=null&&n.width?String(n.width):s;a=e.formattingValues[i]||e.formattingValues[s]}else{const s=e.defaultWidth,i=n!=null&&n.width?String(n.width):e.defaultWidth;a=e.values[i]||e.values[s]}const o=e.argumentCallback?e.argumentCallback(t):t;return a[o]}}const Be={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},je={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Xe={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Qe={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},$e={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Je={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Ve=(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},Ke={ordinalNumber:Ve,era:L({values:Be,defaultWidth:"wide"}),quarter:L({values:je,defaultWidth:"wide",argumentCallback:e=>e-1}),month:L({values:Xe,defaultWidth:"wide"}),day:L({values:Qe,defaultWidth:"wide"}),dayPeriod:L({values:$e,defaultWidth:"wide",formattingValues:Je,defaultFormattingWidth:"wide"})};function A(e){return(t,n={})=>{const r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=t.match(a);if(!o)return null;const s=o[0],i=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(i)?Ze(i,S=>S.test(s)):ze(i,S=>S.test(s));let d;d=e.valueCallback?e.valueCallback(c):c,d=n.valueCallback?n.valueCallback(d):d;const h=t.slice(s.length);return{value:d,rest:h}}}function ze(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function Ze(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function et(e){return(t,n={})=>{const r=t.match(e.matchPattern);if(!r)return null;const a=r[0],o=t.match(e.parsePattern);if(!o)return null;let s=e.valueCallback?e.valueCallback(o[0]):o[0];s=n.valueCallback?n.valueCallback(s):s;const i=t.slice(a.length);return{value:s,rest:i}}}const tt=/^(\d+)(th|st|nd|rd)?/i,nt=/\d+/i,rt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},at={any:[/^b/i,/^(a|c)/i]},ot={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},st={any:[/1/i,/2/i,/3/i,/4/i]},it={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},ct={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},ut={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},dt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},lt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},ft={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},ht={ordinalNumber:et({matchPattern:tt,parsePattern:nt,valueCallback:e=>parseInt(e,10)}),era:A({matchPatterns:rt,defaultMatchWidth:"wide",parsePatterns:at,defaultParseWidth:"any"}),quarter:A({matchPatterns:ot,defaultMatchWidth:"wide",parsePatterns:st,defaultParseWidth:"any",valueCallback:e=>e+1}),month:A({matchPatterns:it,defaultMatchWidth:"wide",parsePatterns:ct,defaultParseWidth:"any"}),day:A({matchPatterns:ut,defaultMatchWidth:"wide",parsePatterns:dt,defaultParseWidth:"any"}),dayPeriod:A({matchPatterns:lt,defaultMatchWidth:"any",parsePatterns:ft,defaultParseWidth:"any"})},mt={code:"en-US",formatDistance:Re,formatLong:Ye,formatRelative:He,localize:Ke,match:ht,options:{weekStartsOn:0,firstWeekContainsDate:1}};function gt(e){const t=T(e);return Ae(t,Ce(t))+1}function yt(e){const t=T(e),n=+C(t)-+De(t);return Math.round(n/he)+1}function ge(e,t){var h,S,v,I;const n=T(e),r=n.getFullYear(),a=U(),o=(t==null?void 0:t.firstWeekContainsDate)??((S=(h=t==null?void 0:t.locale)==null?void 0:h.options)==null?void 0:S.firstWeekContainsDate)??a.firstWeekContainsDate??((I=(v=a.locale)==null?void 0:v.options)==null?void 0:I.firstWeekContainsDate)??1,s=P(e,0);s.setFullYear(r+1,0,o),s.setHours(0,0,0,0);const i=D(s,t),c=P(e,0);c.setFullYear(r,0,o),c.setHours(0,0,0,0);const d=D(c,t);return n.getTime()>=i.getTime()?r+1:n.getTime()>=d.getTime()?r:r-1}function wt(e,t){var i,c,d,h;const n=U(),r=(t==null?void 0:t.firstWeekContainsDate)??((c=(i=t==null?void 0:t.locale)==null?void 0:i.options)==null?void 0:c.firstWeekContainsDate)??n.firstWeekContainsDate??((h=(d=n.locale)==null?void 0:d.options)==null?void 0:h.firstWeekContainsDate)??1,a=ge(e,t),o=P(e,0);return o.setFullYear(a,0,r),o.setHours(0,0,0,0),D(o,t)}function Tt(e,t){const n=T(e),r=+D(n,t)-+wt(n,t);return Math.round(r/he)+1}function u(e,t){const n=e<0?"-":"",r=Math.abs(e).toString().padStart(t,"0");return n+r}const E={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return u(t==="yy"?r%100:r,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):u(n+1,2)},d(e,t){return u(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return u(e.getHours()%12||12,t.length)},H(e,t){return u(e.getHours(),t.length)},m(e,t){return u(e.getMinutes(),t.length)},s(e,t){return u(e.getSeconds(),t.length)},S(e,t){const n=t.length,r=e.getMilliseconds(),a=Math.trunc(r*Math.pow(10,n-3));return u(a,t.length)}},N={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},K={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const r=e.getFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return E.y(e,t)},Y:function(e,t,n,r){const a=ge(e,r),o=a>0?a:1-a;if(t==="YY"){const s=o%100;return u(s,2)}return t==="Yo"?n.ordinalNumber(o,{unit:"year"}):u(o,t.length)},R:function(e,t){const n=me(e);return u(n,t.length)},u:function(e,t){const n=e.getFullYear();return u(n,t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return u(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return u(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return E.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return u(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const a=Tt(e,r);return t==="wo"?n.ordinalNumber(a,{unit:"week"}):u(a,t.length)},I:function(e,t,n){const r=yt(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):u(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):E.d(e,t)},D:function(e,t,n){const r=gt(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):u(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const a=e.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return u(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const a=e.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return u(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),a=r===0?7:r;switch(t){case"i":return String(a);case"ii":return u(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const a=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let a;switch(r===12?a=N.noon:r===0?a=N.midnight:a=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let a;switch(r>=17?a=N.evening:r>=12?a=N.afternoon:r>=4?a=N.morning:a=N.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let r=e.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return E.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):E.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):u(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):u(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):E.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):E.s(e,t)},S:function(e,t){return E.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(t){case"X":return Z(r);case"XXXX":case"XX":return p(r);case"XXXXX":case"XXX":default:return p(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return Z(r);case"xxxx":case"xx":return p(r);case"xxxxx":case"xxx":default:return p(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+z(r,":");case"OOOO":default:return"GMT"+p(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+z(r,":");case"zzzz":default:return"GMT"+p(r,":")}},t:function(e,t,n){const r=Math.trunc(e.getTime()/1e3);return u(r,t.length)},T:function(e,t,n){const r=e.getTime();return u(r,t.length)}};function z(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),a=Math.trunc(r/60),o=r%60;return o===0?n+String(a):n+String(a)+t+u(o,2)}function Z(e,t){return e%60===0?(e>0?"-":"+")+u(Math.abs(e)/60,2):p(e,t)}function p(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),a=u(Math.trunc(r/60),2),o=u(r%60,2);return n+a+t+o}const ee=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},ye=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},St=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return ee(e,t);let o;switch(r){case"P":o=t.dateTime({width:"short"});break;case"PP":o=t.dateTime({width:"medium"});break;case"PPP":o=t.dateTime({width:"long"});break;case"PPPP":default:o=t.dateTime({width:"full"});break}return o.replace("{{date}}",ee(r,t)).replace("{{time}}",ye(a,t))},Et={p:ye,P:St},Ot=/^D+$/,_t=/^Y+$/,bt=["D","DD","YY","YYYY"];function pt(e){return Ot.test(e)}function Mt(e){return _t.test(e)}function Pt(e,t,n){const r=Nt(e,t,n);if(console.warn(r),bt.includes(e))throw new RangeError(r)}function Nt(e,t,n){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const vt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,It=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Lt=/^'([^]*?)'?$/,At=/''/g,Dt=/[a-zA-Z]/;function we(e,t,n){var h,S,v,I;const r=U(),a=r.locale??mt,o=r.firstWeekContainsDate??((S=(h=r.locale)==null?void 0:h.options)==null?void 0:S.firstWeekContainsDate)??1,s=r.weekStartsOn??((I=(v=r.locale)==null?void 0:v.options)==null?void 0:I.weekStartsOn)??0,i=T(e);if(!ke(i))throw new RangeError("Invalid time value");let c=t.match(It).map(w=>{const g=w[0];if(g==="p"||g==="P"){const F=Et[g];return F(w,a.formatLong)}return w}).join("").match(vt).map(w=>{if(w==="''")return{isToken:!1,value:"'"};const g=w[0];if(g==="'")return{isToken:!1,value:xt(w)};if(K[g])return{isToken:!0,value:w};if(g.match(Dt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+g+"`");return{isToken:!1,value:w}});a.localize.preprocessor&&(c=a.localize.preprocessor(i,c));const d={firstWeekContainsDate:o,weekStartsOn:s,locale:a};return c.map(w=>{if(!w.isToken)return w.value;const g=w.value;(Mt(g)||pt(g))&&Pt(g,t,String(e));const F=K[g[0]];return F(i,g,a.localize,d)}).join("")}function xt(e){const t=e.match(Lt);return t?t[1].replace(At,"'"):e}function kt(e){localStorage.setItem("messagesList",JSON.stringify([...e]))}function Ct(){return JSON.parse(localStorage.getItem("messagesList"))}const Wt="ivalera.devel@gmail.com";let k=0;const Y=20,Rt=300;let G=!0,B=[];async function Ut(){try{const e=await ve();e||console.log("Сообщения не загружены!"),B=e.messages,kt(B)}catch(e){console.log(e)}}async function X(){if(!f.LIST)return;const e=f.LIST.scrollHeight;if(!G)return;if(k+Y===Rt&&G){G=!1;const n=document.createElement("div");n.classList.add("messages__end"),n.textContent="Вся история загружена",f.LIST.prepend(n);return}await Ut(),B.slice(k,k+Y).map(n=>{Te(n,"prepend")}),f.LIST.scrollTop=f.LIST.scrollHeight-e,k+=Y}function Ft(){var e;try{const n=((e=f.TEMPLATE)==null?void 0:e.content.cloneNode(!0)).querySelector(".chat__message");return n||null}catch(t){return console.log(t),null}}function Te(e,t="append"){var n,r;try{let a=e.user.email;const o=Ft(),s=o==null?void 0:o.querySelector(".chat__message-user"),i=o==null?void 0:o.querySelector(".chat__message-text"),c=o==null?void 0:o.querySelector(".chat__message-time");if(!o||!s||(s.textContent=e.user.name,!i)||(i.textContent=e.text,!c))return;c.textContent=we(e.updatedAt,"HH:mm"),a===Wt?o.classList.add("message__right-side"):o.classList.add("message__left-side"),t==="prepend"?(n=f.LIST)==null||n.prepend(o):(r=f.LIST)==null||r.append(o)}catch(a){console.log(a)}}function qt(){f.LIST&&(f.LIST.scrollTop=f.LIST.scrollHeight)}function Yt(){var t;((t=f.LIST)==null?void 0:t.scrollTop)===0&&X()}const Se="wss://edu.strada.one/websockets?";let M=null;function Q(e){M=new WebSocket(Se+`${e}`),M.onmessage=function(t){const n=t.data,r=JSON.parse(n);Te(r),qt()},M.onclose=function(){setTimeout(()=>{Q(e)},1e3)},M.onerror=function(t){console.log(t),Ee()}}function Ee(){M==null||M.close()}const Gt=258;function Ht(){var t;if(!y.DIALOG||!l.BUTTON_CLEAR)return;const e=b.get("userToken");if(e===void 0){(t=y.DIALOG)==null||t.showModal();return}y.DIALOG.close(),Q(e),X(),$()}function $(){if(!f.OUTPUT_PLACE||!_.MAIN_SECTION)return;const t=_.MAIN_SECTION.clientHeight-Gt;f.OUTPUT_PLACE.style.height=`${t}px`}const Bt=0,jt=/^\s+$/;function Xt(e){try{if(e.preventDefault(),!l.LIST||!l.INPUT_MESSAGES||!l.BUTTON_CLEAR)return;Oe(l.LIST),l.LIST.scrollTop=Bt;const t=l.INPUT_MESSAGES.value.trim();if(t===""||jt.test(t)){l.INPUT_MESSAGES.value="",l.INPUT_MESSAGES.placeholder="Введите текст для поиска";return}let r=Ct().filter(a=>a.text.toLocaleLowerCase().includes(t.toLocaleLowerCase()));r.length!==0&&(l.BUTTON_CLEAR.style.visibility="visible"),r.forEach(a=>{var d;const o=document.createElement("li"),s=document.createElement("span"),i=document.createElement("p"),c=document.createElement("p");s&&(s.textContent=a.user.name,i&&(i.textContent=a.text,c&&(c.textContent=we(a.updatedAt,"dd.MM.yy-HH:mm"),o.classList.add("chat__message"),s.classList.add("chat__message-user"),i.classList.add("chat__message-text"),c.classList.add("chat__message-time"),o.append(s),o.append(i),o.append(c),(d=l.LIST)==null||d.append(o))))})}catch(t){console.log(t)}}function Oe(e){for(;e!=null&&e.firstChild;)e==null||e.removeChild(e==null?void 0:e.firstChild)}function Qt(){!l.LIST||!l.INPUT_MESSAGES||!l.BUTTON_CLEAR||(Oe(l.LIST),l.INPUT_MESSAGES.value="",l.INPUT_MESSAGES.placeholder="Введите текст для поиска",l.BUTTON_CLEAR.style.visibility="hidden")}var te;(te=y.DIALOG)==null||te.showModal();var ne;(ne=y.FORM)==null||ne.addEventListener("submit",Vt);var re;(re=y.CONFIRM_TOKEN_BTN)==null||re.addEventListener("click",Kt);var ae;(ae=O.FORM)==null||ae.addEventListener("submit",zt);var oe;(oe=f.SEND_FORM)==null||oe.addEventListener("submit",Jt);var se;(se=f.LIST)==null||se.addEventListener("scroll",Yt);var ie;(ie=m.BUTTON_OPEN)==null||ie.addEventListener("click",Zt);var ce;(ce=m.FORM)==null||ce.addEventListener("submit",en);var ue;(ue=_.BUTTON_EXIT)==null||ue.addEventListener("click",$t);window.addEventListener("resize",$);var de;(de=l.FORM)==null||de.addEventListener("submit",Xt);var le;(le=l.BUTTON_CLEAR)==null||le.addEventListener("click",Qt);Ht();function $t(){var e;b.remove("userToken"),(e=y.DIALOG)==null||e.showModal(),Ee()}function Jt(e){var t;try{if(e.preventDefault(),!f.TEXT_INPUT)return;const n=f.TEXT_INPUT.value,r=b.get("userToken");let a=new WebSocket(Se+r);a.onopen=function(o){a.send(JSON.stringify({text:`${n}`})),a.close()},(t=f.SEND_FORM)==null||t.reset()}catch(n){console.log(n)}}function Vt(e){if(e.preventDefault(),!y.EMAIL_INPUT)return;const t=y.EMAIL_INPUT.value;if(y.EMAIL_INPUT.value="",!t){y.EMAIL_INPUT.placeholder="Введите почту!";return}Me(t)}function Kt(){var e,t;(e=y.DIALOG)==null||e.close(),(t=O.DIALOG)==null||t.showModal()}async function zt(e){if(e.preventDefault(),!O.INPUT_TOKEN||!O.DIALOG||!y.DIALOG||!m.NAME_INPUT)return;const t=O.INPUT_TOKEN.value;if(O.INPUT_TOKEN.value="",!t){O.INPUT_TOKEN.placeholder="Ведите код!";return}try{const n=await Pe(t);if(!_.INFO_ALERT)return;if(!n){_.INFO_ALERT.textContent="Токен не подходит!",console.log("Токен не подходит!");return}y.DIALOG.close(),O.DIALOG.close(),b.set("userToken",t,{expires:3}),Q(t),X(),$()}catch(n){console.error("Ошибка при обработке запроса пользователя:",n)}}function Zt(){if(!m.DIALOG||!m.NAME_INPUT)return;m.DIALOG.showModal();const e=b.get("userName");e&&(m.NAME_INPUT.placeholder=e)}async function en(e){if(e.preventDefault(),!m.INFO_ALERT||!m.NAME_INPUT)return;m.INFO_ALERT.textContent="";const t=m.NAME_INPUT.value;if(!t){m.NAME_INPUT.placeholder="Введите имя!";return}try{const n=await Ne(t);console.log(n),n||(m.INFO_ALERT.textContent="Имя не изменено!"),b.set("userName",t),m.NAME_INPUT.placeholder=t,m.INFO_ALERT.textContent="Имя изменено!"}catch(n){console.log(n)}}