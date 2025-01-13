!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="ccf05567-4b4a-44c4-aad1-fd78be63d7fe",e._sentryDebugIdIdentifier="sentry-dbid-ccf05567-4b4a-44c4-aad1-fd78be63d7fe")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4772],{56803:()=>{},31655:()=>{},24864:(e,t,n)=>{"use strict";n.r(t),n.d(t,{InsightsProvider:()=>h,useTrackEvent:()=>v});var r=n(54568);n(15108);var a=n(7620);n(50292),n(42036),n(8702),n(71372),n(86223),n(64649),n(2807);var o=n(22461),l=n(15584),i=n(70171),c=n(75491),s=n(49582);let u=null,p="__gitbook_session";function d(){u&&c.S(p,u)}var m=n(23828);let f=a.createContext(()=>{});function h(e){let{enabled:t,apiHost:n,visitorAuthToken:h,children:v,...g}=e,y=a.useRef(null),b=a.useRef({}),E=(0,l.DK)(()=>{let e=function(){if(u)return u;try{let e=c.G(p,null);if(e&&"object"==typeof e&&"lastActiveAt"in e&&"number"==typeof e.lastActiveAt&&"id"in e&&"string"==typeof e.id&&e.lastActiveAt+18e5>Date.now())return(u=e)&&(u.lastActiveAt=Date.now(),d()),u}catch(e){console.error("Error parsing session",e)}return u={id:(0,s.M)(),lastActiveAt:Date.now()},d(),u}(),r=y.current;if(!r)throw Error("Visitor ID should be set before flushing events");let a=[];for(let t in b.current){let n=b.current[t];if(n&&n.events.length){if(!n.pageContext){console.warn("No page context for flushing events of",t,n);continue}a.push(...function(e){var t,n,r,a;let o={sessionId:e.sessionId,visitorId:e.visitorId,userAgent:window.navigator.userAgent,language:window.navigator.language,cookies:i.UK(),referrer:document.referrer||null,visitorAuthToken:null!==(t=e.visitorAuthToken)&&void 0!==t?t:null},l={url:e.url,siteSection:null!==(n=e.context.siteSectionId)&&void 0!==n?n:null,siteSpace:null!==(r=e.context.siteSpaceId)&&void 0!==r?r:null,space:e.context.spaceId,siteShareKey:null!==(a=e.context.siteShareKey)&&void 0!==a?a:null,page:e.pageContext.pageId,revision:e.pageContext.revisionId};return e.events.map(e=>({...e,session:o,location:l}))}({url:n.url,events:n.events,context:g,pageContext:n.pageContext,visitorId:r,sessionId:e.id,visitorAuthToken:h})),b.current[t]={...n,events:[]}}}a.length>0&&(t?(console.log("Sending events",a),function(e){let{apiHost:t,organizationId:n,siteId:r,events:a}=e,o=new URL(t);o.pathname="/v1/orgs/".concat(n,"/sites/").concat(r,"/insights/events"),fetch(o.toString(),{method:"POST",headers:{"Content-Type":"application/json"},keepalive:!0,body:JSON.stringify({events:a})}).catch(e=>{console.error("Error sending events",e)})}({apiHost:n,organizationId:g.organizationId,siteId:g.siteId,events:a})):console.log("Skipping sending events",a))}),w=(0,l._6)(async()=>{var e;let t=null!==(e=y.current)&&void 0!==e?e:await (0,m.getVisitorId)();y.current=t,E()},1500),I=(0,l.DK)((e,t,n)=>{var r,a,o;console.log("Logging event",e,t);let l=window.location.pathname,i=b.current[l];b.current[l]={pageContext:null!==(r=null==i?void 0:i.pageContext)&&void 0!==r?r:t,url:null!==(a=null==i?void 0:i.url)&&void 0!==a?a:window.location.href,events:[...null!==(o=null==i?void 0:i.events)&&void 0!==o?o:[],{...e,timestamp:new Date().toISOString()}],context:g},void 0!==b.current[l].pageContext&&((null==n?void 0:n.immediate)&&y.current?(w.cancel(),E()):w())});return a.useEffect(()=>((0,m.getVisitorId)().then(e=>{y.current=e,window.addEventListener("beforeunload",E)}),()=>{window.removeEventListener("beforeunload",E)}),[E]),(0,r.jsx)(f.Provider,{value:I,children:(0,r.jsx)(o.OpenAPIOperationContextProvider,{onOpenClient:e=>{I({type:"api_client_open",operation:e})},children:e.children})})}function v(){return a.useContext(f)}},67764:(e,t,n)=>{"use strict";n.r(t),n.d(t,{TrackPageViewEvent:()=>o});var r=n(7620),a=n(24864);function o(e){let{pageId:t,revisionId:n}=e,o=(0,a.useTrackEvent)();return r.useEffect(()=>{o({type:"page_view"},{pageId:t,revisionId:n})},[t,n,o]),null}},59628:(e,t,n)=>{"use strict";n.r(t),n.d(t,{isCookiesTrackingDisabled:()=>l,setCookiesTracking:()=>o});var r=n(70171);let a="__gitbook_cookie_granted";function o(e){r.hZ(a,e?"yes":"no",{expires:365,sameSite:"none",secure:!0})}function l(){let e=r.Jt(a);return"yes"!==e&&("no"===e||void 0)}},49582:(e,t,n)=>{"use strict";function r(){return"undefined"!=typeof crypto&&crypto.randomUUID?"".concat(crypto.randomUUID(),"R"):"".concat(Math.random().toString(36).substring(2),"R")}n.d(t,{M:()=>r})},23828:(e,t,n)=>{"use strict";n.r(t),n.d(t,{getVisitorId:()=>s});var r=n(70171),a=n(59628),o=n(49582),l=n(91205);let i=null,c=null;async function s(){return i||(c||(c=u().finally(()=>{c=null})),i=await c),i}async function u(){if((0,a.isCookiesTrackingDisabled)())return(0,o.M)();let e=r.Jt("__session");if(e)return e;{var t;let e=(0,o.M)(),n=new URL(null!==(t=l.env.NEXT_PUBLIC_GITBOOK_APP_URL)&&void 0!==t?t:"https://app.gitbook.com");n.pathname="/__session",n.searchParams.set("proposed",e);try{let e=await fetch(n,{method:"GET",credentials:"include",cache:"no-cache",mode:"cors"}),{deviceId:t}=await e.json();return t}catch(t){return console.error("Failed to fetch visitor session ID",t),e}}}},70171:(e,t,n)=>{"use strict";n.d(t,{Jt:()=>l,UK:()=>o,hZ:()=>i});var r=n(16251),a=n(44193);function o(){try{return r.A.get()}catch(e){if((0,a.N)(e))return{};throw e}}function l(e){try{return r.A.get(e)}catch(e){if((0,a.N)(e))return;throw e}}let i=r.A.set},75491:(e,t,n)=>{"use strict";n.d(t,{G:()=>a,S:()=>o});var r=n(44193);function a(e,t){try{if("undefined"!=typeof localStorage&&localStorage&&"getItem"in localStorage){let n=localStorage.getItem(e);return n?JSON.parse(n):t}return t}catch(e){if((0,r.N)(e))return t;throw e}}function o(e,t){try{"undefined"!=typeof localStorage&&localStorage&&"setItem"in localStorage&&localStorage.setItem(e,JSON.stringify(t))}catch(e){if((0,r.N)(e))return;throw e}}},44193:(e,t,n)=>{"use strict";function r(e){return e instanceof Error&&("SecurityError"===e.name||"NS_ERROR_FAILURE"===e.name||"NS_ERROR_ABORT"===e.name)}n.d(t,{N:()=>r})},71372:(e,t,n)=>{"use strict";n.r(t),n.d(t,{InteractiveSection:()=>i});var r=n(50292),a=n(7620);let o={},l=new Set;function i(e){var t,n,i;let{id:c,className:s,toggeable:u=!1,defaultOpened:p=!0,tabs:d=[],defaultTab:m=null===(t=d[0])||void 0===t?void 0:t.key,header:f,children:h,overlay:v,toggleOpenIcon:g="▶",toggleCloseIcon:y="▼",stateKey:b}=e,[E,w]=function(){let e=(0,a.useCallback)(e=>(l.add(e),()=>l.delete(e)),[]),t=(0,a.useCallback)(()=>o,[]),n=(0,a.useCallback)(e=>{o=e(o),l.forEach(e=>e())},[]);return[a.useSyncExternalStore(e,t,t),n]}(),I=b&&b in E?d.find(e=>e.key===E[b]):void 0,[k,O]=a.useState(p),[N,S]=a.useState(null!==(n=null==I?void 0:I.key)&&void 0!==n?n:m),x=null!==(i=null!=I?I:d.find(e=>e.key===N))&&void 0!==i?i:d[0];return a.createElement("div",{id:c,className:r("openapi-section",u?"openapi-section-toggeable":null,s,u?"".concat(s,"-").concat(k?"opened":"closed"):null)},a.createElement("div",{onClick:()=>{u&&O(!k)},className:r("openapi-section-header","".concat(s,"-header"))},a.createElement("div",{className:r("openapi-section-header-content","".concat(s,"-header-content"))},f),a.createElement("div",{className:r("openapi-section-header-controls","".concat(s,"-header-controls")),onClick:e=>{e.stopPropagation()}},d.length?a.createElement("select",{className:r("openapi-section-select","openapi-select","".concat(s,"-tabs-select")),value:x.key,onChange:e=>{S(e.target.value),b&&w(t=>({...t,[b]:e.target.value})),O(!0)}},d.map(e=>a.createElement("option",{key:e.key,value:e.key},e.label))):null,(h||(null==x?void 0:x.body))&&u?a.createElement("button",{className:r("openapi-section-toggle","".concat(s,"-toggle")),onClick:()=>O(!k)},k?y:g):null)),(!u||k)&&(h||(null==x?void 0:x.body))?a.createElement("div",{className:r("openapi-section-body","".concat(s,"-body"))},h,null==x?void 0:x.body):null,v)}},8702:(e,t,n)=>{"use strict";n.d(t,{o:()=>o});var r=n(7620),a=n(50292);function o(e){let{source:t,className:n}=e;return r.createElement("div",{className:a("openapi-markdown",n),dangerouslySetInnerHTML:{__html:t}})}},22461:(e,t,n)=>{"use strict";n.r(t),n.d(t,{OpenAPIOperationContextProvider:()=>l,useOpenAPIOperationContext:()=>i});var r=n(7620),a=n(15584);let o=r.createContext({onOpenClient:()=>{}});function l(e){let{children:t}=e,n=(0,a.DK)(t=>{var n;null===(n=e.onOpenClient)||void 0===n||n.call(e,t)}),l=r.useMemo(()=>({onOpenClient:n}),[n]);return r.createElement(o.Provider,{value:l},t)}function i(){return r.useContext(o)}},86223:(e,t,n)=>{"use strict";n.d(t,{OpenAPIServerURLVariable:()=>o});var r=n(7620),a=n(50292);function o(e){let{variable:t}=e;return r.createElement("span",{className:a("openapi-url-var")},t.default)}},2807:(e,t,n)=>{"use strict";n.d(t,{OpenAPISpec:()=>_});var r=n(7620),a=n(15108),o=n(71372),l=n(50292),i=n(8702);let c="__$markdownParsed",s="__$refResolved";async function u(e,t,n){let r=await n.fetch(e);if(!r)return;let a=t[t.length-1];for(let a of t=t.slice(0,-1))if(m(r[a])&&await p(e,r,a,n),"object"!=typeof(r=r[a])||null===r)return;return await p(e,r,a,n),r[a]}async function p(e,t,n,r){let a=t[n];if("string"==typeof a&&"description"===n&&r.parseMarkdown&&!t[c])t[c]=!0,t[n]=await r.parseMarkdown(a);else if("string"==typeof a||"number"==typeof a||"boolean"==typeof a||null===a);else if("object"==typeof a&&null!==a&&s in a);else if(m(a)){let o=a.$ref;delete a.$ref,t[n]=await d(e,o,r),t[n]&&(t[n][s]=function(e){let t=e.split("/");return t[t.length-1]}(o))}else if(Array.isArray(a))await Promise.all(a.map((t,n)=>p(e,a,n,r)));else if("object"==typeof a&&null!==a)for(let t of Object.keys(a))await p(e,a,t,r)}async function d(e,t,n){let r=function e(t,n){if(!n)return{url:t,dataPath:[]};if(n.startsWith("#"))return{url:t,dataPath:n.split("/").filter(Boolean).slice(1)};let r=new URL(n,t);if(r.hash){let t=r.hash;return r.hash="",e(r.toString(),t)}return{url:r.toString(),dataPath:[]}}(e,t);return u(r.url,r.dataPath,n)}function m(e){return"object"==typeof e&&null!==e&&"$ref"in e&&e.$ref}function f(e){if("object"==typeof e&&e&&"$ref"in e)throw Error("Reference found");return e}function h(e){let{propertyName:t,required:n,schema:a,circularRefs:c=new Map,context:s,className:u}=e,p=(0,r.useId)(),d=c.get(a),m=new Map(c).set(a,p),f=d?null:w(a),h=d?null:I(a,new Set(m.keys()));return r.createElement(o.InteractiveSection,{id:p,className:l("openapi-schema",u),toggeable:!!f||!!h,defaultOpened:!!s.defaultInteractiveOpened,toggleOpenIcon:s.icons.chevronRight,toggleCloseIcon:s.icons.chevronDown,tabs:null==h?void 0:h[0].map((e,t)=>({key:"".concat(t),label:O(e,h[1]),body:m.has(e)?r.createElement(b,{id:m.get(e),schema:e}):r.createElement(y,{schema:e,circularRefs:m,context:s})})),header:r.createElement("div",{className:l("openapi-schema-presentation")},r.createElement("div",{className:l("openapi-schema-name")},t?r.createElement("span",{className:l("openapi-schema-propertyname")},t):null,n?r.createElement("span",{className:l("openapi-schema-required")},"*"):null,r.createElement("span",{className:l("openapi-schema-type")},O(a))),a.description?r.createElement(i.o,{source:a.description,className:"openapi-schema-description"}):null,"string"==typeof a.example||"number"==typeof a.example||"boolean"==typeof a.example?r.createElement("span",{className:"openapi-schema-example"},"Example: ",r.createElement("code",null,JSON.stringify(a.example))):null,a.pattern?r.createElement("div",{className:"openapi-schema-pattern"},"Pattern: ",r.createElement("code",null,a.pattern)):null)},f&&f.length>0||a.enum&&a.enum.length>0||d?r.createElement(r.Fragment,null,(null==f?void 0:f.length)?r.createElement(v,{properties:f,circularRefs:m,context:s}):null,a.enum&&a.enum.length>0?r.createElement(E,{enumValues:a.enum}):null,d?r.createElement(b,{id:d,schema:a}):null):null)}function v(e){let{id:t,properties:n,circularRefs:a,context:o}=e;return n.length?r.createElement("div",{id:t,className:l("openapi-schema-properties")},n.map(e=>r.createElement(h,{key:e.propertyName,circularRefs:a,...e,context:o}))):null}function g(e){let{schema:t,context:n}=e,a=w(t);return a&&a.length>0?r.createElement(v,{properties:a,context:n}):r.createElement(h,{schema:t,context:n,className:"openapi-schema-root"})}function y(e){let{schema:t,circularRefs:n,context:a}=e,o=(0,r.useId)(),l=w(t);return r.createElement(v,{id:o,properties:null!=l?l:[{schema:t}],circularRefs:l?new Map(n).set(t,o):n,context:a})}function b(e){let{id:t,schema:n}=e;return r.createElement("div",{className:"openapi-schema-circular"},"Circular reference to ",r.createElement("a",{href:"#".concat(t)},O(n))," ",r.createElement("span",{className:"openapi-schema-circular-glyph"},"↩"))}function E(e){let{enumValues:t}=e;return r.createElement("div",{className:"openapi-schema-enum"},t.map((e,t)=>r.createElement("span",{key:t,className:"openapi-schema-enum-value"},"".concat(e))))}function w(e){if(e.allOf)return e.allOf.reduce((e,t)=>{var n;return[...e,...null!==(n=w(f(t)))&&void 0!==n?n:[{schema:f(t)}]]},[]);if("array"===e.type&&e.items){let t=f(e.items);return w(t)||[{propertyName:"items",schema:t}]}if("object"===e.type||e.properties){let t=[];if(e.properties&&Object.entries(e.properties).forEach(n=>{let[r,a]=n,o=f(a);o.deprecated||t.push({propertyName:r,required:Array.isArray(e.required)?e.required.includes(r):void 0,schema:o})}),e.additionalProperties){let n=f(e.additionalProperties);t.push({propertyName:"Other properties",schema:!0===n?{}:n})}return t}return null}function I(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Set,n=new Set(t).add(e);return e.anyOf?[k("anyOf",e.anyOf.map(f),n),f(e.discriminator)]:e.oneOf?[k("oneOf",e.oneOf.map(f),n),f(e.discriminator)]:(e.allOf,null)}function k(e,t,n){return t.reduce((t,r)=>{if(r[e]&&!n.has(r)){var a;return[...t,...(null===(a=I(r,n))||void 0===a?void 0:a[0])||[]]}return[...t,r]},[])}function O(e,t){if(e.title)return e.title;if(t&&e.properties){let n=f(e.properties[t.propertyName]);if(n&&n.enum)return n.enum.map(e=>e.toString()).join(" | ")}let n="any";if(e.enum)n="enum";else if("array"===e.type&&e.items)n="array of ".concat(O(f(e.items)));else if(e.type||e.properties){var r;n=null!==(r=e.type)&&void 0!==r?r:"object",e.format&&(n+=" (".concat(e.format,")"))}else"anyOf"in e?n="any of":"oneOf"in e?n="one of":"allOf"in e?n="all of":"not"in e&&(n="not");return s in e&&(n="".concat(e[s]," (").concat(n,")")),e.nullable&&(n="nullable ".concat(n)),n}function N(e){var t;let{requestBody:n,context:a}=e;return r.createElement(o.InteractiveSection,{header:"Body",className:"openapi-requestbody",tabs:Object.entries(null!==(t=n.content)&&void 0!==t?t:{}).map(e=>{var t;let[n,o]=e;return{key:n,label:n,body:r.createElement(g,{schema:null!==(t=f(o.schema))&&void 0!==t?t:{},context:a})}}),defaultOpened:a.defaultInteractiveOpened},n.description?r.createElement(i.o,{source:n.description,className:"openapi-requestbody-description"}):null)}function S(e){var t,n;let{response:a,context:c}=e,s=Object.entries(null!==(t=a.content)&&void 0!==t?t:{}),u=Object.entries(null!==(n=a.headers)&&void 0!==n?n:{}).map(e=>{var t;let[n,r]=e;return[n,null!==(t=f(r))&&void 0!==t?t:{}]});return 0!==s.length||a.description||0!==u.length?r.createElement(r.Fragment,null,a.description?r.createElement(i.o,{source:a.description,className:"openapi-response-description"}):null,u.length>0?r.createElement(o.InteractiveSection,{toggeable:!0,defaultOpened:!!c.defaultInteractiveOpened,toggleCloseIcon:c.icons.chevronDown,toggleOpenIcon:c.icons.chevronRight,header:"Headers",className:l("openapi-responseheaders")},r.createElement(v,{properties:u.map(e=>{var t;let[n,r]=e;return{propertyName:n,schema:null!==(t=f(r.schema))&&void 0!==t?t:{},required:r.required}}),context:c})):null,s.length>0?r.createElement(o.InteractiveSection,{header:"Body",className:l("openapi-responsebody"),tabs:s.map(e=>{var t;let[n,a]=e;return{key:n,label:n,body:r.createElement(g,{schema:null!==(t=f(a.schema))&&void 0!==t?t:{},context:c})}})}):null):null}function x(e){var t,n;let{responses:a,context:i}=e;return r.createElement(o.InteractiveSection,{stateKey:(t="response",(n=i.blockKey)?"".concat(n,"_").concat(t):t),header:"Response",className:l("openapi-responses"),tabs:Object.entries(a).map(e=>{let[t,n]=e;return{key:t,label:t,body:r.createElement(S,{response:f(n),context:i})}})})}function C(e){let{securities:t,context:n}=e;return 0===t.length?null:r.createElement(o.InteractiveSection,{header:"Authorization",className:"openapi-securities",toggeable:!0,defaultOpened:!1,toggleCloseIcon:n.icons.chevronDown,toggleOpenIcon:n.icons.chevronRight,tabs:t.map(e=>{let[t,n]=e;return{key:t,label:t,body:r.createElement(r.Fragment,null,r.createElement("p",{className:"openapi-securities-label"},function(e){switch(e.type){case"apiKey":return"API Key";case"http":if("basic"===e.scheme)return"Basic Auth";if("bearer"==e.scheme)return"Bearer Token ".concat(e.bearerFormat?"(".concat(e.bearerFormat,")"):"");return"HTTP";case"oauth2":return"OAuth2";case"openIdConnect":return"OpenID Connect";default:return e.type}}(n)),n.description?r.createElement(i.o,{source:n.description,className:"openapi-securities-description"}):null)}})})}function _(e){let{rawData:t,context:n}=e,{operation:l,securities:i}=(0,a.rS)(t),c=function(e){let t=["path","query","header"],n=[];return e.forEach(e=>{let t=e.in,r=function(e){switch(e){case"path":return"Path parameters";case"query":return"Query parameters";case"header":return"Header parameters";default:return e}}(e.in),a=n.find(e=>e.key===t);a?a.parameters.push(e):n.push({key:t,label:r,parameters:[e]})}),n.sort((e,n)=>t.indexOf(e.key)-t.indexOf(n.key)),n}((l.parameters||[]).map(f));return r.createElement(r.Fragment,null,i.length>0?r.createElement(C,{securities:i,context:n}):null,c.map(e=>r.createElement(o.InteractiveSection,{key:e.key,className:"openapi-parameters",toggeable:!0,toggleOpenIcon:n.icons.chevronRight,toggleCloseIcon:n.icons.chevronDown,header:e.label,defaultOpened:"path"===e.key||n.defaultInteractiveOpened},r.createElement(v,{properties:e.parameters.map(e=>{var t;return{propertyName:e.name,schema:{description:e.description,example:e.example,...null!==(t=f(e.schema))&&void 0!==t?t:{}},required:e.required}}),context:n}))),l.requestBody?r.createElement(N,{requestBody:f(l.requestBody),context:n}):null,l.responses?r.createElement(x,{responses:f(l.responses),context:n}):null)}},64649:(e,t,n)=>{"use strict";n.d(t,{ScalarApiButton:()=>l});var r=n(42036),a=n(7620),o=n(22461);function l(e){let{method:t,path:n}=e,l=(0,r.s)(),{onOpenClient:i}=(0,o.useOpenAPIOperationContext)();return a.createElement("div",{className:"scalar scalar-activate"},a.createElement("button",{className:"scalar-activate-button",onClick:()=>{null==l||l.open({method:t,path:n}),i({method:t,path:n})}},a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"12",fill:"none"},a.createElement("path",{stroke:"currentColor",strokeWidth:"1.5",d:"M1 10.05V1.43c0-.2.2-.31.37-.22l7.26 4.08c.17.1.17.33.01.43l-7.26 4.54a.25.25 0 0 1-.38-.21Z"})),"Test it"))}},15108:(e,t,n)=>{"use strict";n.d(t,{rS:()=>r.rS});var r=n(1516);n(32456),n(61320)}}]);