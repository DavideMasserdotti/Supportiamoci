!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="db0b2c83-96a8-46a5-9ea2-2e7d140b7fde",e._sentryDebugIdIdentifier="sentry-dbid-db0b2c83-96a8-46a5-9ea2-2e7d140b7fde")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1724],{34331:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return y},handleClientScriptLoad:function(){return h},initScriptLoader:function(){return m}});let r=n(97097),o=n(28322),a=n(54568),i=r._(n(97509)),u=o._(n(7620)),l=n(4174),c=n(85498),s=n(4758),d=new Map,f=new Set,p=e=>{if(i.default.preinit){e.forEach(e=>{i.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},v=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:o=null,dangerouslySetInnerHTML:a,children:i="",strategy:u="afterInteractive",onError:l,stylesheets:s}=e,v=n||t;if(v&&f.has(v))return;if(d.has(t)){f.add(v),d.get(t).then(r,l);return}let h=()=>{o&&o(),f.add(v)},m=document.createElement("script"),g=new Promise((e,t)=>{m.addEventListener("load",function(t){e(),r&&r.call(this,t),h()}),m.addEventListener("error",function(e){t(e)})}).catch(function(e){l&&l(e)});a?(m.innerHTML=a.__html||"",h()):i?(m.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):"",h()):t&&(m.src=t,d.set(t,g)),(0,c.setAttributesFromProps)(m,e),"worker"===u&&m.setAttribute("type","text/partytown"),m.setAttribute("data-nscript",u),s&&p(s),document.body.appendChild(m)};function h(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,s.requestIdleCallback)(()=>v(e))}):v(e)}function m(e){e.forEach(h),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function g(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:o=null,strategy:c="afterInteractive",onError:d,stylesheets:p,...h}=e,{updateScripts:m,scripts:g,getIsSsr:y,appDir:b,nonce:w}=(0,u.useContext)(l.HeadManagerContext),E=(0,u.useRef)(!1);(0,u.useEffect)(()=>{let e=t||n;E.current||(o&&e&&f.has(e)&&o(),E.current=!0)},[o,t,n]);let x=(0,u.useRef)(!1);if((0,u.useEffect)(()=>{!x.current&&("afterInteractive"===c?v(e):"lazyOnload"===c&&("complete"===document.readyState?(0,s.requestIdleCallback)(()=>v(e)):window.addEventListener("load",()=>{(0,s.requestIdleCallback)(()=>v(e))})),x.current=!0)},[e,c]),("beforeInteractive"===c||"worker"===c)&&(m?(g[c]=(g[c]||[]).concat([{id:t,src:n,onLoad:r,onReady:o,onError:d,...h}]),m(g)):y&&y()?f.add(t||n):y&&!y()&&v(e)),b){if(p&&p.forEach(e=>{i.default.preinit(e,{as:"style"})}),"beforeInteractive"===c)return n?(i.default.preload(n,h.integrity?{as:"script",integrity:h.integrity,nonce:w,crossOrigin:h.crossOrigin}:{as:"script",nonce:w,crossOrigin:h.crossOrigin}),(0,a.jsx)("script",{nonce:w,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...h,id:t}])+")"}})):(h.dangerouslySetInnerHTML&&(h.children=h.dangerouslySetInnerHTML.__html,delete h.dangerouslySetInnerHTML),(0,a.jsx)("script",{nonce:w,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...h,id:t}])+")"}}));"afterInteractive"===c&&n&&i.default.preload(n,h.integrity?{as:"script",integrity:h.integrity,nonce:w,crossOrigin:h.crossOrigin}:{as:"script",nonce:w,crossOrigin:h.crossOrigin})}return null}Object.defineProperty(g,"__nextScript",{value:!0});let y=g;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},85498:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"setAttributesFromProps",{enumerable:!0,get:function(){return a}});let n={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"},r=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"];function o(e){return["async","defer","noModule"].includes(e)}function a(e,t){for(let[a,i]of Object.entries(t)){if(!t.hasOwnProperty(a)||r.includes(a)||void 0===i)continue;let u=n[a]||a.toLowerCase();"SCRIPT"===e.tagName&&o(u)?e[u]=!!i:e.setAttribute(u,String(i)),(!1===i||"SCRIPT"===e.tagName&&o(u)&&(!i||"false"===i))&&(e.setAttribute(u,""),e.removeAttribute(u))}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},97698:(e,t,n)=>{n.d(t,{i3:()=>tA,UC:()=>tO,ZL:()=>tS,bL:()=>tC,l9:()=>tP});var r,o,a,i=n(7620),u=n.t(i,2),l=n(16029),c=n(36329),s=n(27645),d=n(67307),f=n(62085),p=n(54568),v="dismissableLayer.update",h=i.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),m=i.forwardRef((e,t)=>{var n,r;let{disableOutsidePointerEvents:a=!1,onEscapeKeyDown:u,onPointerDownOutside:s,onFocusOutside:m,onInteractOutside:b,onDismiss:w,...E}=e,x=i.useContext(h),[C,P]=i.useState(null),S=null!==(r=null==C?void 0:C.ownerDocument)&&void 0!==r?r:null===(n=globalThis)||void 0===n?void 0:n.document,[,O]=i.useState({}),A=(0,c.s)(t,e=>P(e)),R=Array.from(x.layers),[j]=[...x.layersWithOutsidePointerEventsDisabled].slice(-1),L=R.indexOf(j),k=C?R.indexOf(C):-1,N=x.layersWithOutsidePointerEventsDisabled.size>0,_=k>=L,M=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,f.c)(e),o=i.useRef(!1),a=i.useRef(()=>{});return i.useEffect(()=>{let e=e=>{if(e.target&&!o.current){let t=function(){y("dismissableLayer.pointerDownOutside",r,o,{discrete:!0})},o={originalEvent:e};"touch"===e.pointerType?(n.removeEventListener("click",a.current),a.current=t,n.addEventListener("click",a.current,{once:!0})):t()}else n.removeEventListener("click",a.current);o.current=!1},t=window.setTimeout(()=>{n.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(t),n.removeEventListener("pointerdown",e),n.removeEventListener("click",a.current)}},[n,r]),{onPointerDownCapture:()=>o.current=!0}}(e=>{let t=e.target,n=[...x.branches].some(e=>e.contains(t));!_||n||(null==s||s(e),null==b||b(e),e.defaultPrevented||null==w||w())},S),I=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,f.c)(e),o=i.useRef(!1);return i.useEffect(()=>{let e=e=>{e.target&&!o.current&&y("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return n.addEventListener("focusin",e),()=>n.removeEventListener("focusin",e)},[n,r]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}(e=>{let t=e.target;[...x.branches].some(e=>e.contains(t))||(null==m||m(e),null==b||b(e),e.defaultPrevented||null==w||w())},S);return!function(e,t=globalThis?.document){let n=(0,f.c)(e);i.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{k!==x.layers.size-1||(null==u||u(e),!e.defaultPrevented&&w&&(e.preventDefault(),w()))},S),i.useEffect(()=>{if(C)return a&&(0===x.layersWithOutsidePointerEventsDisabled.size&&(o=S.body.style.pointerEvents,S.body.style.pointerEvents="none"),x.layersWithOutsidePointerEventsDisabled.add(C)),x.layers.add(C),g(),()=>{a&&1===x.layersWithOutsidePointerEventsDisabled.size&&(S.body.style.pointerEvents=o)}},[C,S,a,x]),i.useEffect(()=>()=>{C&&(x.layers.delete(C),x.layersWithOutsidePointerEventsDisabled.delete(C),g())},[C,x]),i.useEffect(()=>{let e=()=>O({});return document.addEventListener(v,e),()=>document.removeEventListener(v,e)},[]),(0,p.jsx)(d.sG.div,{...E,ref:A,style:{pointerEvents:N?_?"auto":"none":void 0,...e.style},onFocusCapture:(0,l.m)(e.onFocusCapture,I.onFocusCapture),onBlurCapture:(0,l.m)(e.onBlurCapture,I.onBlurCapture),onPointerDownCapture:(0,l.m)(e.onPointerDownCapture,M.onPointerDownCapture)})});function g(){let e=new CustomEvent(v);document.dispatchEvent(e)}function y(e,t,n,r){let{discrete:o}=r,a=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&a.addEventListener(e,t,{once:!0}),o?(0,d.hO)(a,i):a.dispatchEvent(i)}m.displayName="DismissableLayer",i.forwardRef((e,t)=>{let n=i.useContext(h),r=i.useRef(null),o=(0,c.s)(t,r);return i.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,p.jsx)(d.sG.div,{...e,ref:o})}).displayName="DismissableLayerBranch";var b=0;function w(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var E="focusScope.autoFocusOnMount",x="focusScope.autoFocusOnUnmount",C={bubbles:!1,cancelable:!0},P=i.forwardRef((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:a,...u}=e,[l,s]=i.useState(null),v=(0,f.c)(o),h=(0,f.c)(a),m=i.useRef(null),g=(0,c.s)(t,e=>s(e)),y=i.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;i.useEffect(()=>{if(r){let e=function(e){if(y.paused||!l)return;let t=e.target;l.contains(t)?m.current=t:A(m.current,{select:!0})},t=function(e){if(y.paused||!l)return;let t=e.relatedTarget;null===t||l.contains(t)||A(m.current,{select:!0})};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&A(l)});return l&&n.observe(l,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,l,y.paused]),i.useEffect(()=>{if(l){R.add(y);let e=document.activeElement;if(!l.contains(e)){let t=new CustomEvent(E,C);l.addEventListener(E,v),l.dispatchEvent(t),t.defaultPrevented||(function(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.activeElement;for(let r of e)if(A(r,{select:t}),document.activeElement!==n)return}(S(l).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&A(l))}return()=>{l.removeEventListener(E,v),setTimeout(()=>{let t=new CustomEvent(x,C);l.addEventListener(x,h),l.dispatchEvent(t),t.defaultPrevented||A(null!=e?e:document.body,{select:!0}),l.removeEventListener(x,h),R.remove(y)},0)}}},[l,v,h,y]);let b=i.useCallback(e=>{if(!n&&!r||y.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,a]=function(e){let t=S(e);return[O(t,e),O(t.reverse(),e)]}(t);r&&a?e.shiftKey||o!==a?e.shiftKey&&o===r&&(e.preventDefault(),n&&A(a,{select:!0})):(e.preventDefault(),n&&A(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,y.paused]);return(0,p.jsx)(d.sG.div,{tabIndex:-1,...u,ref:g,onKeyDown:b})});function S(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function O(e,t){for(let n of e)if(!function(e,t){let{upTo:n}=t;if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===n||e!==n);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function A(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}P.displayName="FocusScope";var R=function(){let e=[];return{add(t){let n=e[0];t!==n&&(null==n||n.pause()),(e=j(e,t)).unshift(t)},remove(t){var n;null===(n=(e=j(e,t))[0])||void 0===n||n.resume()}}}();function j(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}var L=n(67204),k=u["useId".toString()]||(()=>void 0),N=0,_=n(53864),M=n(97509),I="undefined"!=typeof document?i.useLayoutEffect:i.useEffect;function T(e,t){let n,r,o;if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if((n=e.length)!==t.length)return!1;for(r=n;0!=r--;)if(!T(e[r],t[r]))return!1;return!0}if((n=(o=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!({}).hasOwnProperty.call(t,o[r]))return!1;for(r=n;0!=r--;){let n=o[r];if(("_owner"!==n||!e.$$typeof)&&!T(e[n],t[n]))return!1}return!0}return e!=e&&t!=t}function D(e){return"undefined"==typeof window?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function F(e,t){let n=D(e);return Math.round(t*n)/n}function W(e){let t=i.useRef(e);return I(()=>{t.current=e}),t}let B=e=>({name:"arrow",options:e,fn(t){let{element:n,padding:r}="function"==typeof e?e(t):e;return n&&({}).hasOwnProperty.call(n,"current")?null!=n.current?(0,_.UE)({element:n.current,padding:r}).fn(t):{}:n?(0,_.UE)({element:n,padding:r}).fn(t):{}}}),H=(e,t)=>({...(0,_.cY)(e),options:[e,t]}),X=(e,t)=>({...(0,_.BN)(e),options:[e,t]}),Y=(e,t)=>({...(0,_.ER)(e),options:[e,t]}),z=(e,t)=>({...(0,_.UU)(e),options:[e,t]}),q=(e,t)=>({...(0,_.Ej)(e),options:[e,t]}),K=(e,t)=>({...(0,_.jD)(e),options:[e,t]}),G=(e,t)=>({...B(e),options:[e,t]});var U=i.forwardRef((e,t)=>{let{children:n,width:r=10,height:o=5,...a}=e;return(0,p.jsx)(d.sG.svg,{...a,ref:t,width:r,height:o,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:(0,p.jsx)("polygon",{points:"0,0 30,0 15,10"})})});U.displayName="Arrow";var $=n(75719),Z="Popper",[J,V]=function(e,t=[]){let n=[],r=()=>{let t=n.map(e=>i.createContext(e));return function(n){let r=n?.[e]||t;return i.useMemo(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])}};return r.scopeName=e,[function(t,r){let o=i.createContext(r),a=n.length;function u(t){let{scope:n,children:r,...u}=t,l=n?.[e][a]||o,c=i.useMemo(()=>u,Object.values(u));return(0,p.jsx)(l.Provider,{value:c,children:r})}return n=[...n,r],u.displayName=t+"Provider",[u,function(n,u){let l=u?.[e][a]||o,c=i.useContext(l);if(c)return c;if(void 0!==r)return r;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return i.useMemo(()=>({[`__scope${t.scopeName}`]:r}),[r])}};return n.scopeName=t.scopeName,n}(r,...t)]}(Z),[Q,ee]=J(Z),et=e=>{let{__scopePopper:t,children:n}=e,[r,o]=i.useState(null);return(0,p.jsx)(Q,{scope:t,anchor:r,onAnchorChange:o,children:n})};et.displayName=Z;var en="PopperAnchor",er=i.forwardRef((e,t)=>{let{__scopePopper:n,virtualRef:r,...o}=e,a=ee(en,n),u=i.useRef(null),l=(0,c.s)(t,u);return i.useEffect(()=>{a.onAnchorChange((null==r?void 0:r.current)||u.current)}),r?null:(0,p.jsx)(d.sG.div,{...o,ref:l})});er.displayName=en;var eo="PopperContent",[ea,ei]=J(eo),eu=i.forwardRef((e,t)=>{var n,r,o,a,u,l,s,v;let{__scopePopper:h,side:m="bottom",sideOffset:g=0,align:y="center",alignOffset:b=0,arrowPadding:w=0,avoidCollisions:E=!0,collisionBoundary:x=[],collisionPadding:C=0,sticky:P="partial",hideWhenDetached:S=!1,updatePositionStrategy:O="optimized",onPlaced:A,...R}=e,j=ee(eo,h),[k,N]=i.useState(null),B=(0,c.s)(t,e=>N(e)),[U,Z]=i.useState(null),J=(0,$.X)(U),V=null!==(s=null==J?void 0:J.width)&&void 0!==s?s:0,Q=null!==(v=null==J?void 0:J.height)&&void 0!==v?v:0,et="number"==typeof C?C:{top:0,right:0,bottom:0,left:0,...C},en=Array.isArray(x)?x:[x],er=en.length>0,ei={padding:et,boundary:en.filter(ed),altBoundary:er},{refs:eu,floatingStyles:el,placement:ec,isPositioned:es,middlewareData:ev}=function(e){void 0===e&&(e={});let{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,elements:{reference:a,floating:u}={},transform:l=!0,whileElementsMounted:c,open:s}=e,[d,f]=i.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[p,v]=i.useState(r);T(p,r)||v(r);let[h,m]=i.useState(null),[g,y]=i.useState(null),b=i.useCallback(e=>{e!==C.current&&(C.current=e,m(e))},[]),w=i.useCallback(e=>{e!==P.current&&(P.current=e,y(e))},[]),E=a||h,x=u||g,C=i.useRef(null),P=i.useRef(null),S=i.useRef(d),O=null!=c,A=W(c),R=W(o),j=W(s),L=i.useCallback(()=>{if(!C.current||!P.current)return;let e={placement:t,strategy:n,middleware:p};R.current&&(e.platform=R.current),(0,_.rD)(C.current,P.current,e).then(e=>{let t={...e,isPositioned:!1!==j.current};k.current&&!T(S.current,t)&&(S.current=t,M.flushSync(()=>{f(t)}))})},[p,t,n,R,j]);I(()=>{!1===s&&S.current.isPositioned&&(S.current.isPositioned=!1,f(e=>({...e,isPositioned:!1})))},[s]);let k=i.useRef(!1);I(()=>(k.current=!0,()=>{k.current=!1}),[]),I(()=>{if(E&&(C.current=E),x&&(P.current=x),E&&x){if(A.current)return A.current(E,x,L);L()}},[E,x,L,A,O]);let N=i.useMemo(()=>({reference:C,floating:P,setReference:b,setFloating:w}),[b,w]),B=i.useMemo(()=>({reference:E,floating:x}),[E,x]),H=i.useMemo(()=>{let e={position:n,left:0,top:0};if(!B.floating)return e;let t=F(B.floating,d.x),r=F(B.floating,d.y);return l?{...e,transform:"translate("+t+"px, "+r+"px)",...D(B.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:t,top:r}},[n,l,B.floating,d.x,d.y]);return i.useMemo(()=>({...d,update:L,refs:N,elements:B,floatingStyles:H}),[d,L,N,B,H])}({strategy:"fixed",placement:m+("center"!==y?"-"+y:""),whileElementsMounted:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,_.ll)(...t,{animationFrame:"always"===O})},elements:{reference:j.anchor},middleware:[H({mainAxis:g+Q,alignmentAxis:b}),E&&X({mainAxis:!0,crossAxis:!1,limiter:"partial"===P?Y():void 0,...ei}),E&&z({...ei}),q({...ei,apply:e=>{let{elements:t,rects:n,availableWidth:r,availableHeight:o}=e,{width:a,height:i}=n.reference,u=t.floating.style;u.setProperty("--radix-popper-available-width","".concat(r,"px")),u.setProperty("--radix-popper-available-height","".concat(o,"px")),u.setProperty("--radix-popper-anchor-width","".concat(a,"px")),u.setProperty("--radix-popper-anchor-height","".concat(i,"px"))}}),U&&G({element:U,padding:w}),ef({arrowWidth:V,arrowHeight:Q}),S&&K({strategy:"referenceHidden",...ei})]}),[eh,em]=ep(ec),eg=(0,f.c)(A);(0,L.N)(()=>{es&&(null==eg||eg())},[es,eg]);let ey=null===(n=ev.arrow)||void 0===n?void 0:n.x,eb=null===(r=ev.arrow)||void 0===r?void 0:r.y,ew=(null===(o=ev.arrow)||void 0===o?void 0:o.centerOffset)!==0,[eE,ex]=i.useState();return(0,L.N)(()=>{k&&ex(window.getComputedStyle(k).zIndex)},[k]),(0,p.jsx)("div",{ref:eu.setFloating,"data-radix-popper-content-wrapper":"",style:{...el,transform:es?el.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:eE,"--radix-popper-transform-origin":[null===(a=ev.transformOrigin)||void 0===a?void 0:a.x,null===(u=ev.transformOrigin)||void 0===u?void 0:u.y].join(" "),...(null===(l=ev.hide)||void 0===l?void 0:l.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:(0,p.jsx)(ea,{scope:h,placedSide:eh,onArrowChange:Z,arrowX:ey,arrowY:eb,shouldHideArrow:ew,children:(0,p.jsx)(d.sG.div,{"data-side":eh,"data-align":em,...R,ref:B,style:{...R.style,animation:es?void 0:"none"}})})})});eu.displayName=eo;var el="PopperArrow",ec={top:"bottom",right:"left",bottom:"top",left:"right"},es=i.forwardRef(function(e,t){let{__scopePopper:n,...r}=e,o=ei(el,n),a=ec[o.placedSide];return(0,p.jsx)("span",{ref:o.onArrowChange,style:{position:"absolute",left:o.arrowX,top:o.arrowY,[a]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[o.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[o.placedSide],visibility:o.shouldHideArrow?"hidden":void 0},children:(0,p.jsx)(U,{...r,ref:t,style:{...r.style,display:"block"}})})});function ed(e){return null!==e}es.displayName=el;var ef=e=>({name:"transformOrigin",options:e,fn(t){var n,r,o,a,i;let{placement:u,rects:l,middlewareData:c}=t,s=(null===(n=c.arrow)||void 0===n?void 0:n.centerOffset)!==0,d=s?0:e.arrowWidth,f=s?0:e.arrowHeight,[p,v]=ep(u),h={start:"0%",center:"50%",end:"100%"}[v],m=(null!==(a=null===(r=c.arrow)||void 0===r?void 0:r.x)&&void 0!==a?a:0)+d/2,g=(null!==(i=null===(o=c.arrow)||void 0===o?void 0:o.y)&&void 0!==i?i:0)+f/2,y="",b="";return"bottom"===p?(y=s?h:"".concat(m,"px"),b="".concat(-f,"px")):"top"===p?(y=s?h:"".concat(m,"px"),b="".concat(l.floating.height+f,"px")):"right"===p?(y="".concat(-f,"px"),b=s?h:"".concat(g,"px")):"left"===p&&(y="".concat(l.floating.width+f,"px"),b=s?h:"".concat(g,"px")),{data:{x:y,y:b}}}});function ep(e){let[t,n="center"]=e.split("-");return[t,n]}var ev=i.forwardRef((e,t)=>{var n,r;let{container:o,...a}=e,[u,l]=i.useState(!1);(0,L.N)(()=>l(!0),[]);let c=o||u&&(null===(r=globalThis)||void 0===r?void 0:null===(n=r.document)||void 0===n?void 0:n.body);return c?M.createPortal((0,p.jsx)(d.sG.div,{...a,ref:t}),c):null});ev.displayName="Portal";var eh=n(77429),em=n(67680),eg=n(24537),ey=new WeakMap,eb=new WeakMap,ew={},eE=0,ex=function(e){return e&&(e.host||ex(e.parentNode))},eC=function(e,t,n,r){var o=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=ex(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});ew[n]||(ew[n]=new WeakMap);var a=ew[n],i=[],u=new Set,l=new Set(o),c=function(e){!e||u.has(e)||(u.add(e),c(e.parentNode))};o.forEach(c);var s=function(e){!e||l.has(e)||Array.prototype.forEach.call(e.children,function(e){if(u.has(e))s(e);else try{var t=e.getAttribute(r),o=null!==t&&"false"!==t,l=(ey.get(e)||0)+1,c=(a.get(e)||0)+1;ey.set(e,l),a.set(e,c),i.push(e),1===l&&o&&eb.set(e,!0),1===c&&e.setAttribute(n,"true"),o||e.setAttribute(r,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return s(t),u.clear(),eE++,function(){i.forEach(function(e){var t=ey.get(e)-1,o=a.get(e)-1;ey.set(e,t),a.set(e,o),t||(eb.has(e)||e.removeAttribute(r),eb.delete(e)),o||e.removeAttribute(n)}),--eE||(ey=new WeakMap,ey=new WeakMap,eb=new WeakMap,ew={})}},eP=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r,o=Array.from(Array.isArray(e)?e:[e]),a=t||(r=e,"undefined"==typeof document?null:(Array.isArray(r)?r[0]:r).ownerDocument.body);return a?(o.push.apply(o,Array.from(a.querySelectorAll("[aria-live]"))),eC(o,a,n,"aria-hidden")):function(){return null}},eS=function(){return(eS=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function eO(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError;var eA="right-scroll-bar-position",eR="width-before-scroll-bar";function ej(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var eL="undefined"!=typeof window?i.useLayoutEffect:i.useEffect,ek=new WeakMap;function eN(e){return e}var e_=function(e){void 0===e&&(e={});var t,n,r,o=(void 0===t&&(t=eN),n=[],r=!1,{read:function(){if(r)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:null},useMedium:function(e){var o=t(e,r);return n.push(o),function(){n=n.filter(function(e){return e!==o})}},assignSyncMedium:function(e){for(r=!0;n.length;){var t=n;n=[],t.forEach(e)}n={push:function(t){return e(t)},filter:function(){return n}}},assignMedium:function(e){r=!0;var t=[];if(n.length){var o=n;n=[],o.forEach(e),t=n}var a=function(){var n=t;t=[],n.forEach(e)},i=function(){return Promise.resolve().then(a)};i(),n={push:function(e){t.push(e),i()},filter:function(e){return t=t.filter(e),n}}}});return o.options=eS({async:!0,ssr:!1},e),o}(),eM=function(){},eI=i.forwardRef(function(e,t){var n,r,o,a,u=i.useRef(null),l=i.useState({onScrollCapture:eM,onWheelCapture:eM,onTouchMoveCapture:eM}),c=l[0],s=l[1],d=e.forwardProps,f=e.children,p=e.className,v=e.removeScrollBar,h=e.enabled,m=e.shards,g=e.sideCar,y=e.noIsolation,b=e.inert,w=e.allowPinchZoom,E=e.as,x=e.gapMode,C=eO(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),P=(n=[u,t],r=function(e){return n.forEach(function(t){return ej(t,e)})},(o=(0,i.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,a=o.facade,eL(function(){var e=ek.get(a);if(e){var t=new Set(e),r=new Set(n),o=a.current;t.forEach(function(e){r.has(e)||ej(e,null)}),r.forEach(function(e){t.has(e)||ej(e,o)})}ek.set(a,n)},[n]),a),S=eS(eS({},C),c);return i.createElement(i.Fragment,null,h&&i.createElement(g,{sideCar:e_,removeScrollBar:v,shards:m,noIsolation:y,inert:b,setCallbacks:s,allowPinchZoom:!!w,lockRef:u,gapMode:x}),d?i.cloneElement(i.Children.only(f),eS(eS({},S),{ref:P})):i.createElement(void 0===E?"div":E,eS({},S,{className:p,ref:P}),f))});eI.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},eI.classNames={fullWidth:eR,zeroRight:eA};var eT=function(e){var t=e.sideCar,n=eO(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return i.createElement(r,eS({},n))};eT.isSideCarExport=!0;var eD=function(){var e=0,t=null;return{add:function(r){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=a||n.nc;return t&&e.setAttribute("nonce",t),e}())){var o,i;(o=t).styleSheet?o.styleSheet.cssText=r:o.appendChild(document.createTextNode(r)),i=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(i)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},eF=function(){var e=eD();return function(t,n){i.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},eW=function(){var e=eF();return function(t){return e(t.styles,t.dynamic),null}},eB={left:0,top:0,right:0,gap:0},eH=function(e){return parseInt(e||"",10)||0},eX=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[eH(n),eH(r),eH(o)]},eY=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return eB;var t=eX(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},ez=eW(),eq="data-scroll-locked",eK=function(e,t,n,r){var o=e.left,a=e.top,i=e.right,u=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(u,"px ").concat(r,";\n  }\n  body[").concat(eq,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(a,"px;\n    padding-right: ").concat(i,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(u,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(eA," {\n    right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(eR," {\n    margin-right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(eA," .").concat(eA," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(eR," .").concat(eR," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(eq,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(u,"px;\n  }\n")},eG=function(){var e=parseInt(document.body.getAttribute(eq)||"0",10);return isFinite(e)?e:0},eU=function(){i.useEffect(function(){return document.body.setAttribute(eq,(eG()+1).toString()),function(){var e=eG()-1;e<=0?document.body.removeAttribute(eq):document.body.setAttribute(eq,e.toString())}},[])},e$=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r;eU();var a=i.useMemo(function(){return eY(o)},[o]);return i.createElement(ez,{styles:eK(a,!t,o,n?"":"!important")})},eZ=!1;if("undefined"!=typeof window)try{var eJ=Object.defineProperty({},"passive",{get:function(){return eZ=!0,!0}});window.addEventListener("test",eJ,eJ),window.removeEventListener("test",eJ,eJ)}catch(e){eZ=!1}var eV=!!eZ&&{passive:!1},eQ=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},e0=function(e,t){var n=t.ownerDocument,r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),e1(e,r)){var o=e2(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},e1=function(e,t){return"v"===e?eQ(t,"overflowY"):eQ(t,"overflowX")},e2=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},e5=function(e,t,n,r,o){var a,i=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),u=i*r,l=n.target,c=t.contains(l),s=!1,d=u>0,f=0,p=0;do{var v=e2(e,l),h=v[0],m=v[1]-v[2]-i*h;(h||m)&&e1(e,l)&&(f+=m,p+=h),l instanceof ShadowRoot?l=l.host:l=l.parentNode}while(!c&&l!==document.body||c&&(t.contains(l)||t===l));return d&&(o&&1>Math.abs(f)||!o&&u>f)?s=!0:!d&&(o&&1>Math.abs(p)||!o&&-u>p)&&(s=!0),s},e7=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},e9=function(e){return[e.deltaX,e.deltaY]},e4=function(e){return e&&"current"in e?e.current:e},e6=0,e8=[];let e3=(r=function(e){var t=i.useRef([]),n=i.useRef([0,0]),r=i.useRef(),o=i.useState(e6++)[0],a=i.useState(eW)[0],u=i.useRef(e);i.useEffect(function(){u.current=e},[e]),i.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(function(e,t,n){if(n||2==arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(e4),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var l=i.useCallback(function(e,t){if("touches"in e&&2===e.touches.length||"wheel"===e.type&&e.ctrlKey)return!u.current.allowPinchZoom;var o,a=e7(e),i=n.current,l="deltaX"in e?e.deltaX:i[0]-a[0],c="deltaY"in e?e.deltaY:i[1]-a[1],s=e.target,d=Math.abs(l)>Math.abs(c)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=e0(d,s);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=e0(d,s)),!f)return!1;if(!r.current&&"changedTouches"in e&&(l||c)&&(r.current=o),!o)return!0;var p=r.current||o;return e5(p,t,e,"h"===p?l:c,!0)},[]),c=i.useCallback(function(e){if(e8.length&&e8[e8.length-1]===a){var n="deltaY"in e?e9(e):e7(e),r=t.current.filter(function(t){var r;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(u.current.shards||[]).map(e4).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?l(e,o[0]):!u.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),s=i.useCallback(function(e,n,r,o){var a={name:e,delta:n,target:r,should:o,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(r)};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),d=i.useCallback(function(e){n.current=e7(e),r.current=void 0},[]),f=i.useCallback(function(t){s(t.type,e9(t),t.target,l(t,e.lockRef.current))},[]),p=i.useCallback(function(t){s(t.type,e7(t),t.target,l(t,e.lockRef.current))},[]);i.useEffect(function(){return e8.push(a),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:p}),document.addEventListener("wheel",c,eV),document.addEventListener("touchmove",c,eV),document.addEventListener("touchstart",d,eV),function(){e8=e8.filter(function(e){return e!==a}),document.removeEventListener("wheel",c,eV),document.removeEventListener("touchmove",c,eV),document.removeEventListener("touchstart",d,eV)}},[]);var v=e.removeScrollBar,h=e.inert;return i.createElement(i.Fragment,null,h?i.createElement(a,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,v?i.createElement(e$,{gapMode:e.gapMode}):null)},e_.useMedium(r),eT);var te=i.forwardRef(function(e,t){return i.createElement(eI,eS({},e,{ref:t,sideCar:e3}))});te.classNames=eI.classNames;var tt="Popover",[tn,tr]=(0,s.A)(tt,[V]),to=V(),[ta,ti]=tn(tt),tu=e=>{let{__scopePopover:t,children:n,open:r,defaultOpen:o,onOpenChange:a,modal:u=!1}=e,l=to(t),c=i.useRef(null),[s,d]=i.useState(!1),[f=!1,v]=(0,eg.i)({prop:r,defaultProp:o,onChange:a});return(0,p.jsx)(et,{...l,children:(0,p.jsx)(ta,{scope:t,contentId:function(e){let[t,n]=i.useState(k());return(0,L.N)(()=>{n(e=>e??String(N++))},[void 0]),t?`radix-${t}`:""}(),triggerRef:c,open:f,onOpenChange:v,onOpenToggle:i.useCallback(()=>v(e=>!e),[v]),hasCustomAnchor:s,onCustomAnchorAdd:i.useCallback(()=>d(!0),[]),onCustomAnchorRemove:i.useCallback(()=>d(!1),[]),modal:u,children:n})})};tu.displayName=tt;var tl="PopoverAnchor";i.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,o=ti(tl,n),a=to(n),{onCustomAnchorAdd:u,onCustomAnchorRemove:l}=o;return i.useEffect(()=>(u(),()=>l()),[u,l]),(0,p.jsx)(er,{...a,...r,ref:t})}).displayName=tl;var tc="PopoverTrigger",ts=i.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,o=ti(tc,n),a=to(n),i=(0,c.s)(t,o.triggerRef),u=(0,p.jsx)(d.sG.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":tx(o.open),...r,ref:i,onClick:(0,l.m)(e.onClick,o.onOpenToggle)});return o.hasCustomAnchor?u:(0,p.jsx)(er,{asChild:!0,...a,children:u})});ts.displayName=tc;var td="PopoverPortal",[tf,tp]=tn(td,{forceMount:void 0}),tv=e=>{let{__scopePopover:t,forceMount:n,children:r,container:o}=e,a=ti(td,t);return(0,p.jsx)(tf,{scope:t,forceMount:n,children:(0,p.jsx)(eh.C,{present:n||a.open,children:(0,p.jsx)(ev,{asChild:!0,container:o,children:r})})})};tv.displayName=td;var th="PopoverContent",tm=i.forwardRef((e,t)=>{let n=tp(th,e.__scopePopover),{forceMount:r=n.forceMount,...o}=e,a=ti(th,e.__scopePopover);return(0,p.jsx)(eh.C,{present:r||a.open,children:a.modal?(0,p.jsx)(tg,{...o,ref:t}):(0,p.jsx)(ty,{...o,ref:t})})});tm.displayName=th;var tg=i.forwardRef((e,t)=>{let n=ti(th,e.__scopePopover),r=i.useRef(null),o=(0,c.s)(t,r),a=i.useRef(!1);return i.useEffect(()=>{let e=r.current;if(e)return eP(e)},[]),(0,p.jsx)(te,{as:em.DX,allowPinchZoom:!0,children:(0,p.jsx)(tb,{...e,ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,l.m)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),a.current||null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,l.m)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey,r=2===t.button||n;a.current=r},{checkForDefaultPrevented:!1}),onFocusOutside:(0,l.m)(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1})})})}),ty=i.forwardRef((e,t)=>{let n=ti(th,e.__scopePopover),r=i.useRef(!1),o=i.useRef(!1);return(0,p.jsx)(tb,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var a,i;null===(a=e.onCloseAutoFocus)||void 0===a||a.call(e,t),t.defaultPrevented||(r.current||null===(i=n.triggerRef.current)||void 0===i||i.focus(),t.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:t=>{var a,i;null===(a=e.onInteractOutside)||void 0===a||a.call(e,t),t.defaultPrevented||(r.current=!0,"pointerdown"!==t.detail.originalEvent.type||(o.current=!0));let u=t.target;(null===(i=n.triggerRef.current)||void 0===i?void 0:i.contains(u))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&o.current&&t.preventDefault()}})}),tb=i.forwardRef((e,t)=>{let{__scopePopover:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:a,disableOutsidePointerEvents:u,onEscapeKeyDown:l,onPointerDownOutside:c,onFocusOutside:s,onInteractOutside:d,...f}=e,v=ti(th,n),h=to(n);return i.useEffect(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:w()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:w()),b++,()=>{1===b&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),b--}},[]),(0,p.jsx)(P,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:a,children:(0,p.jsx)(m,{asChild:!0,disableOutsidePointerEvents:u,onInteractOutside:d,onEscapeKeyDown:l,onPointerDownOutside:c,onFocusOutside:s,onDismiss:()=>v.onOpenChange(!1),children:(0,p.jsx)(eu,{"data-state":tx(v.open),role:"dialog",id:v.contentId,...h,...f,ref:t,style:{...f.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})}),tw="PopoverClose";i.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,o=ti(tw,n);return(0,p.jsx)(d.sG.button,{type:"button",...r,ref:t,onClick:(0,l.m)(e.onClick,()=>o.onOpenChange(!1))})}).displayName=tw;var tE=i.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,o=to(n);return(0,p.jsx)(es,{...o,...r,ref:t})});function tx(e){return e?"open":"closed"}tE.displayName="PopoverArrow";var tC=tu,tP=ts,tS=tv,tO=tm,tA=tE}}]);