function Jh(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function qh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xd={exports:{}},Yi={},wd={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yo=Symbol.for("react.element"),Zh=Symbol.for("react.portal"),em=Symbol.for("react.fragment"),tm=Symbol.for("react.strict_mode"),nm=Symbol.for("react.profiler"),rm=Symbol.for("react.provider"),om=Symbol.for("react.context"),im=Symbol.for("react.forward_ref"),am=Symbol.for("react.suspense"),lm=Symbol.for("react.memo"),sm=Symbol.for("react.lazy"),Fu=Symbol.iterator;function um(e){return e===null||typeof e!="object"?null:(e=Fu&&e[Fu]||e["@@iterator"],typeof e=="function"?e:null)}var kd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sd=Object.assign,Cd={};function vr(e,t,n){this.props=e,this.context=t,this.refs=Cd,this.updater=n||kd}vr.prototype.isReactComponent={};vr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};vr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ed(){}Ed.prototype=vr.prototype;function ss(e,t,n){this.props=e,this.context=t,this.refs=Cd,this.updater=n||kd}var us=ss.prototype=new Ed;us.constructor=ss;Sd(us,vr.prototype);us.isPureReactComponent=!0;var Mu=Array.isArray,_d=Object.prototype.hasOwnProperty,cs={current:null},Pd={key:!0,ref:!0,__self:!0,__source:!0};function Nd(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)_d.call(t,r)&&!Pd.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:yo,type:e,key:i,ref:a,props:o,_owner:cs.current}}function cm(e,t){return{$$typeof:yo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ds(e){return typeof e=="object"&&e!==null&&e.$$typeof===yo}function dm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Du=/\/+/g;function ga(e,t){return typeof e=="object"&&e!==null&&e.key!=null?dm(""+e.key):t.toString(36)}function Xo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case yo:case Zh:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+ga(a,0):r,Mu(o)?(n="",e!=null&&(n=e.replace(Du,"$&/")+"/"),Xo(o,t,n,"",function(u){return u})):o!=null&&(ds(o)&&(o=cm(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(Du,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",Mu(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+ga(i,l);a+=Xo(i,t,n,s,o)}else if(s=um(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+ga(i,l++),a+=Xo(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Do(e,t,n){if(e==null)return e;var r=[],o=0;return Xo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function fm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ee={current:null},Jo={transition:null},pm={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:Jo,ReactCurrentOwner:cs};I.Children={map:Do,forEach:function(e,t,n){Do(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Do(e,function(){t++}),t},toArray:function(e){return Do(e,function(t){return t})||[]},only:function(e){if(!ds(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=vr;I.Fragment=em;I.Profiler=nm;I.PureComponent=ss;I.StrictMode=tm;I.Suspense=am;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pm;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Sd({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=cs.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)_d.call(t,s)&&!Pd.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:yo,type:e.type,key:o,ref:i,props:r,_owner:a}};I.createContext=function(e){return e={$$typeof:om,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:rm,_context:e},e.Consumer=e};I.createElement=Nd;I.createFactory=function(e){var t=Nd.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:im,render:e}};I.isValidElement=ds;I.lazy=function(e){return{$$typeof:sm,_payload:{_status:-1,_result:e},_init:fm}};I.memo=function(e,t){return{$$typeof:lm,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=Jo.transition;Jo.transition={};try{e()}finally{Jo.transition=t}};I.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};I.useCallback=function(e,t){return Ee.current.useCallback(e,t)};I.useContext=function(e){return Ee.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return Ee.current.useDeferredValue(e)};I.useEffect=function(e,t){return Ee.current.useEffect(e,t)};I.useId=function(){return Ee.current.useId()};I.useImperativeHandle=function(e,t,n){return Ee.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return Ee.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return Ee.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return Ee.current.useMemo(e,t)};I.useReducer=function(e,t,n){return Ee.current.useReducer(e,t,n)};I.useRef=function(e){return Ee.current.useRef(e)};I.useState=function(e){return Ee.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return Ee.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return Ee.current.useTransition()};I.version="18.2.0";wd.exports=I;var S=wd.exports;const tt=qh(S),hm=Jh({__proto__:null,default:tt},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mm=S,gm=Symbol.for("react.element"),vm=Symbol.for("react.fragment"),ym=Object.prototype.hasOwnProperty,xm=mm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wm={key:!0,ref:!0,__self:!0,__source:!0};function jd(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)ym.call(t,r)&&!wm.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:gm,type:e,key:i,ref:a,props:o,_owner:xm.current}}Yi.Fragment=vm;Yi.jsx=jd;Yi.jsxs=jd;xd.exports=Yi;var d=xd.exports,el={},Fd={exports:{}},We={},Md={exports:{}},Dd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,O){var L=E.length;E.push(O);e:for(;0<L;){var B=L-1>>>1,Y=E[B];if(0<o(Y,O))E[B]=O,E[L]=Y,L=B;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var O=E[0],L=E.pop();if(L!==O){E[0]=L;e:for(var B=0,Y=E.length,pn=Y>>>1;B<pn;){var Xe=2*(B+1)-1,Rt=E[Xe],Oe=Xe+1,kt=E[Oe];if(0>o(Rt,L))Oe<Y&&0>o(kt,Rt)?(E[B]=kt,E[Oe]=L,B=Oe):(E[B]=Rt,E[Xe]=L,B=Xe);else if(Oe<Y&&0>o(kt,L))E[B]=kt,E[Oe]=L,B=Oe;else break e}}return O}function o(E,O){var L=E.sortIndex-O.sortIndex;return L!==0?L:E.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],c=1,f=null,h=3,v=!1,y=!1,x=!1,k=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(E){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=E)r(u),O.sortIndex=O.expirationTime,t(s,O);else break;O=n(u)}}function w(E){if(x=!1,g(E),!y)if(n(s)!==null)y=!0,fn(P);else{var O=n(u);O!==null&&b(w,O.startTime-E)}}function P(E,O){y=!1,x&&(x=!1,m(M),M=-1),v=!0;var L=h;try{for(g(O),f=n(s);f!==null&&(!(f.expirationTime>O)||E&&!xe());){var B=f.callback;if(typeof B=="function"){f.callback=null,h=f.priorityLevel;var Y=B(f.expirationTime<=O);O=e.unstable_now(),typeof Y=="function"?f.callback=Y:f===n(s)&&r(s),g(O)}else r(s);f=n(s)}if(f!==null)var pn=!0;else{var Xe=n(u);Xe!==null&&b(w,Xe.startTime-O),pn=!1}return pn}finally{f=null,h=L,v=!1}}var N=!1,_=null,M=-1,D=5,R=-1;function xe(){return!(e.unstable_now()-R<D)}function xt(){if(_!==null){var E=e.unstable_now();R=E;var O=!0;try{O=_(!0,E)}finally{O?wt():(N=!1,_=null)}}else N=!1}var wt;if(typeof p=="function")wt=function(){p(xt)};else if(typeof MessageChannel<"u"){var Tn=new MessageChannel,Cr=Tn.port2;Tn.port1.onmessage=xt,wt=function(){Cr.postMessage(null)}}else wt=function(){k(xt,0)};function fn(E){_=E,N||(N=!0,wt())}function b(E,O){M=k(function(){E(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,fn(P))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(E){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var L=h;h=O;try{return E()}finally{h=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,O){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var L=h;h=E;try{return O()}finally{h=L}},e.unstable_scheduleCallback=function(E,O,L){var B=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?B+L:B):L=B,E){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=L+Y,E={id:c++,callback:O,priorityLevel:E,startTime:L,expirationTime:Y,sortIndex:-1},L>B?(E.sortIndex=L,t(u,E),n(s)===null&&E===n(u)&&(x?(m(M),M=-1):x=!0,b(w,L-B))):(E.sortIndex=Y,t(s,E),y||v||(y=!0,fn(P))),E},e.unstable_shouldYield=xe,e.unstable_wrapCallback=function(E){var O=h;return function(){var L=h;h=O;try{return E.apply(this,arguments)}finally{h=L}}}})(Dd);Md.exports=Dd;var km=Md.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bd=S,Ie=km;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Od=new Set,Kr={};function Dn(e,t){or(e,t),or(e+"Capture",t)}function or(e,t){for(Kr[e]=t,e=0;e<t.length;e++)Od.add(t[e])}var Ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tl=Object.prototype.hasOwnProperty,Sm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bu={},Ou={};function Cm(e){return tl.call(Ou,e)?!0:tl.call(bu,e)?!1:Sm.test(e)?Ou[e]=!0:(bu[e]=!0,!1)}function Em(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _m(e,t,n,r){if(t===null||typeof t>"u"||Em(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function _e(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){pe[e]=new _e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];pe[t]=new _e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){pe[e]=new _e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){pe[e]=new _e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){pe[e]=new _e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){pe[e]=new _e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){pe[e]=new _e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){pe[e]=new _e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){pe[e]=new _e(e,5,!1,e.toLowerCase(),null,!1,!1)});var fs=/[\-:]([a-z])/g;function ps(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(fs,ps);pe[t]=new _e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(fs,ps);pe[t]=new _e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(fs,ps);pe[t]=new _e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){pe[e]=new _e(e,1,!1,e.toLowerCase(),null,!1,!1)});pe.xlinkHref=new _e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){pe[e]=new _e(e,1,!1,e.toLowerCase(),null,!0,!0)});function hs(e,t,n,r){var o=pe.hasOwnProperty(t)?pe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(_m(t,n,o,r)&&(n=null),r||o===null?Cm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ot=bd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,bo=Symbol.for("react.element"),In=Symbol.for("react.portal"),$n=Symbol.for("react.fragment"),ms=Symbol.for("react.strict_mode"),nl=Symbol.for("react.profiler"),Td=Symbol.for("react.provider"),Ld=Symbol.for("react.context"),gs=Symbol.for("react.forward_ref"),rl=Symbol.for("react.suspense"),ol=Symbol.for("react.suspense_list"),vs=Symbol.for("react.memo"),Bt=Symbol.for("react.lazy"),Rd=Symbol.for("react.offscreen"),Tu=Symbol.iterator;function _r(e){return e===null||typeof e!="object"?null:(e=Tu&&e[Tu]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Object.assign,va;function Tr(e){if(va===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);va=t&&t[1]||""}return`
`+va+e}var ya=!1;function xa(e,t){if(!e||ya)return"";ya=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==i[l]){var s=`
`+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{ya=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Tr(e):""}function Pm(e){switch(e.tag){case 5:return Tr(e.type);case 16:return Tr("Lazy");case 13:return Tr("Suspense");case 19:return Tr("SuspenseList");case 0:case 2:case 15:return e=xa(e.type,!1),e;case 11:return e=xa(e.type.render,!1),e;case 1:return e=xa(e.type,!0),e;default:return""}}function il(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $n:return"Fragment";case In:return"Portal";case nl:return"Profiler";case ms:return"StrictMode";case rl:return"Suspense";case ol:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ld:return(e.displayName||"Context")+".Consumer";case Td:return(e._context.displayName||"Context")+".Provider";case gs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vs:return t=e.displayName||null,t!==null?t:il(e.type)||"Memo";case Bt:t=e._payload,e=e._init;try{return il(e(t))}catch{}}return null}function Nm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return il(t);case 8:return t===ms?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function on(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function zd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jm(e){var t=zd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Oo(e){e._valueTracker||(e._valueTracker=jm(e))}function Id(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=zd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function hi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function al(e,t){var n=t.checked;return ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Lu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=on(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function $d(e,t){t=t.checked,t!=null&&hs(e,"checked",t,!1)}function ll(e,t){$d(e,t);var n=on(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?sl(e,t.type,n):t.hasOwnProperty("defaultValue")&&sl(e,t.type,on(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ru(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function sl(e,t,n){(t!=="number"||hi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Lr=Array.isArray;function Jn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+on(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ul(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function zu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(Lr(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:on(n)}}function Wd(e,t){var n=on(t.value),r=on(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Iu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Bd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Bd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var To,Ad=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(To=To||document.createElement("div"),To.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=To.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Xr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $r={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fm=["Webkit","ms","Moz","O"];Object.keys($r).forEach(function(e){Fm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),$r[t]=$r[e]})});function Ud(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||$r.hasOwnProperty(e)&&$r[e]?(""+t).trim():t+"px"}function Vd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Ud(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Mm=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dl(e,t){if(t){if(Mm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function fl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pl=null;function ys(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hl=null,qn=null,Zn=null;function $u(e){if(e=ko(e)){if(typeof hl!="function")throw Error(j(280));var t=e.stateNode;t&&(t=Xi(t),hl(e.stateNode,e.type,t))}}function Yd(e){qn?Zn?Zn.push(e):Zn=[e]:qn=e}function Hd(){if(qn){var e=qn,t=Zn;if(Zn=qn=null,$u(e),t)for(e=0;e<t.length;e++)$u(t[e])}}function Gd(e,t){return e(t)}function Qd(){}var wa=!1;function Kd(e,t,n){if(wa)return e(t,n);wa=!0;try{return Gd(e,t,n)}finally{wa=!1,(qn!==null||Zn!==null)&&(Qd(),Hd())}}function Jr(e,t){var n=e.stateNode;if(n===null)return null;var r=Xi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var ml=!1;if(Ft)try{var Pr={};Object.defineProperty(Pr,"passive",{get:function(){ml=!0}}),window.addEventListener("test",Pr,Pr),window.removeEventListener("test",Pr,Pr)}catch{ml=!1}function Dm(e,t,n,r,o,i,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Wr=!1,mi=null,gi=!1,gl=null,bm={onError:function(e){Wr=!0,mi=e}};function Om(e,t,n,r,o,i,a,l,s){Wr=!1,mi=null,Dm.apply(bm,arguments)}function Tm(e,t,n,r,o,i,a,l,s){if(Om.apply(this,arguments),Wr){if(Wr){var u=mi;Wr=!1,mi=null}else throw Error(j(198));gi||(gi=!0,gl=u)}}function bn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Xd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Wu(e){if(bn(e)!==e)throw Error(j(188))}function Lm(e){var t=e.alternate;if(!t){if(t=bn(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Wu(o),e;if(i===r)return Wu(o),t;i=i.sibling}throw Error(j(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function Jd(e){return e=Lm(e),e!==null?qd(e):null}function qd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=qd(e);if(t!==null)return t;e=e.sibling}return null}var Zd=Ie.unstable_scheduleCallback,Bu=Ie.unstable_cancelCallback,Rm=Ie.unstable_shouldYield,zm=Ie.unstable_requestPaint,ne=Ie.unstable_now,Im=Ie.unstable_getCurrentPriorityLevel,xs=Ie.unstable_ImmediatePriority,ef=Ie.unstable_UserBlockingPriority,vi=Ie.unstable_NormalPriority,$m=Ie.unstable_LowPriority,tf=Ie.unstable_IdlePriority,Hi=null,gt=null;function Wm(e){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(Hi,e,void 0,(e.current.flags&128)===128)}catch{}}var nt=Math.clz32?Math.clz32:Um,Bm=Math.log,Am=Math.LN2;function Um(e){return e>>>=0,e===0?32:31-(Bm(e)/Am|0)|0}var Lo=64,Ro=4194304;function Rr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function yi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~o;l!==0?r=Rr(l):(i&=a,i!==0&&(r=Rr(i)))}else a=n&~o,a!==0?r=Rr(a):i!==0&&(r=Rr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-nt(t),o=1<<n,r|=e[n],t&=~o;return r}function Vm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ym(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-nt(i),l=1<<a,s=o[a];s===-1?(!(l&n)||l&r)&&(o[a]=Vm(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}function vl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function nf(){var e=Lo;return Lo<<=1,!(Lo&4194240)&&(Lo=64),e}function ka(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-nt(t),e[t]=n}function Hm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-nt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ws(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-nt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var V=0;function rf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var of,ks,af,lf,sf,yl=!1,zo=[],Qt=null,Kt=null,Xt=null,qr=new Map,Zr=new Map,Ut=[],Gm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Au(e,t){switch(e){case"focusin":case"focusout":Qt=null;break;case"dragenter":case"dragleave":Kt=null;break;case"mouseover":case"mouseout":Xt=null;break;case"pointerover":case"pointerout":qr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zr.delete(t.pointerId)}}function Nr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=ko(t),t!==null&&ks(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Qm(e,t,n,r,o){switch(t){case"focusin":return Qt=Nr(Qt,e,t,n,r,o),!0;case"dragenter":return Kt=Nr(Kt,e,t,n,r,o),!0;case"mouseover":return Xt=Nr(Xt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return qr.set(i,Nr(qr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Zr.set(i,Nr(Zr.get(i)||null,e,t,n,r,o)),!0}return!1}function uf(e){var t=yn(e.target);if(t!==null){var n=bn(t);if(n!==null){if(t=n.tag,t===13){if(t=Xd(n),t!==null){e.blockedOn=t,sf(e.priority,function(){af(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=xl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);pl=r,n.target.dispatchEvent(r),pl=null}else return t=ko(n),t!==null&&ks(t),e.blockedOn=n,!1;t.shift()}return!0}function Uu(e,t,n){qo(e)&&n.delete(t)}function Km(){yl=!1,Qt!==null&&qo(Qt)&&(Qt=null),Kt!==null&&qo(Kt)&&(Kt=null),Xt!==null&&qo(Xt)&&(Xt=null),qr.forEach(Uu),Zr.forEach(Uu)}function jr(e,t){e.blockedOn===t&&(e.blockedOn=null,yl||(yl=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,Km)))}function eo(e){function t(o){return jr(o,e)}if(0<zo.length){jr(zo[0],e);for(var n=1;n<zo.length;n++){var r=zo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Qt!==null&&jr(Qt,e),Kt!==null&&jr(Kt,e),Xt!==null&&jr(Xt,e),qr.forEach(t),Zr.forEach(t),n=0;n<Ut.length;n++)r=Ut[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ut.length&&(n=Ut[0],n.blockedOn===null);)uf(n),n.blockedOn===null&&Ut.shift()}var er=Ot.ReactCurrentBatchConfig,xi=!0;function Xm(e,t,n,r){var o=V,i=er.transition;er.transition=null;try{V=1,Ss(e,t,n,r)}finally{V=o,er.transition=i}}function Jm(e,t,n,r){var o=V,i=er.transition;er.transition=null;try{V=4,Ss(e,t,n,r)}finally{V=o,er.transition=i}}function Ss(e,t,n,r){if(xi){var o=xl(e,t,n,r);if(o===null)Da(e,t,r,wi,n),Au(e,r);else if(Qm(o,e,t,n,r))r.stopPropagation();else if(Au(e,r),t&4&&-1<Gm.indexOf(e)){for(;o!==null;){var i=ko(o);if(i!==null&&of(i),i=xl(e,t,n,r),i===null&&Da(e,t,r,wi,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Da(e,t,r,null,n)}}var wi=null;function xl(e,t,n,r){if(wi=null,e=ys(r),e=yn(e),e!==null)if(t=bn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Xd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return wi=e,null}function cf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Im()){case xs:return 1;case ef:return 4;case vi:case $m:return 16;case tf:return 536870912;default:return 16}default:return 16}}var Yt=null,Cs=null,Zo=null;function df(){if(Zo)return Zo;var e,t=Cs,n=t.length,r,o="value"in Yt?Yt.value:Yt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return Zo=o.slice(e,1<r?1-r:void 0)}function ei(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Io(){return!0}function Vu(){return!1}function Be(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Io:Vu,this.isPropagationStopped=Vu,this}return ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Io)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Io)},persist:function(){},isPersistent:Io}),t}var yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Es=Be(yr),wo=ee({},yr,{view:0,detail:0}),qm=Be(wo),Sa,Ca,Fr,Gi=ee({},wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_s,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fr&&(Fr&&e.type==="mousemove"?(Sa=e.screenX-Fr.screenX,Ca=e.screenY-Fr.screenY):Ca=Sa=0,Fr=e),Sa)},movementY:function(e){return"movementY"in e?e.movementY:Ca}}),Yu=Be(Gi),Zm=ee({},Gi,{dataTransfer:0}),eg=Be(Zm),tg=ee({},wo,{relatedTarget:0}),Ea=Be(tg),ng=ee({},yr,{animationName:0,elapsedTime:0,pseudoElement:0}),rg=Be(ng),og=ee({},yr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ig=Be(og),ag=ee({},yr,{data:0}),Hu=Be(ag),lg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ug={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ug[e])?!!t[e]:!1}function _s(){return cg}var dg=ee({},wo,{key:function(e){if(e.key){var t=lg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ei(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_s,charCode:function(e){return e.type==="keypress"?ei(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ei(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fg=Be(dg),pg=ee({},Gi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gu=Be(pg),hg=ee({},wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_s}),mg=Be(hg),gg=ee({},yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),vg=Be(gg),yg=ee({},Gi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xg=Be(yg),wg=[9,13,27,32],Ps=Ft&&"CompositionEvent"in window,Br=null;Ft&&"documentMode"in document&&(Br=document.documentMode);var kg=Ft&&"TextEvent"in window&&!Br,ff=Ft&&(!Ps||Br&&8<Br&&11>=Br),Qu=" ",Ku=!1;function pf(e,t){switch(e){case"keyup":return wg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wn=!1;function Sg(e,t){switch(e){case"compositionend":return hf(t);case"keypress":return t.which!==32?null:(Ku=!0,Qu);case"textInput":return e=t.data,e===Qu&&Ku?null:e;default:return null}}function Cg(e,t){if(Wn)return e==="compositionend"||!Ps&&pf(e,t)?(e=df(),Zo=Cs=Yt=null,Wn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ff&&t.locale!=="ko"?null:t.data;default:return null}}var Eg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Eg[e.type]:t==="textarea"}function mf(e,t,n,r){Yd(r),t=ki(t,"onChange"),0<t.length&&(n=new Es("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ar=null,to=null;function _g(e){Pf(e,0)}function Qi(e){var t=Un(e);if(Id(t))return e}function Pg(e,t){if(e==="change")return t}var gf=!1;if(Ft){var _a;if(Ft){var Pa="oninput"in document;if(!Pa){var Ju=document.createElement("div");Ju.setAttribute("oninput","return;"),Pa=typeof Ju.oninput=="function"}_a=Pa}else _a=!1;gf=_a&&(!document.documentMode||9<document.documentMode)}function qu(){Ar&&(Ar.detachEvent("onpropertychange",vf),to=Ar=null)}function vf(e){if(e.propertyName==="value"&&Qi(to)){var t=[];mf(t,to,e,ys(e)),Kd(_g,t)}}function Ng(e,t,n){e==="focusin"?(qu(),Ar=t,to=n,Ar.attachEvent("onpropertychange",vf)):e==="focusout"&&qu()}function jg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qi(to)}function Fg(e,t){if(e==="click")return Qi(t)}function Mg(e,t){if(e==="input"||e==="change")return Qi(t)}function Dg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var it=typeof Object.is=="function"?Object.is:Dg;function no(e,t){if(it(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!tl.call(t,o)||!it(e[o],t[o]))return!1}return!0}function Zu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ec(e,t){var n=Zu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zu(n)}}function yf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?yf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xf(){for(var e=window,t=hi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=hi(e.document)}return t}function Ns(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function bg(e){var t=xf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&yf(n.ownerDocument.documentElement,n)){if(r!==null&&Ns(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=ec(n,i);var a=ec(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Og=Ft&&"documentMode"in document&&11>=document.documentMode,Bn=null,wl=null,Ur=null,kl=!1;function tc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;kl||Bn==null||Bn!==hi(r)||(r=Bn,"selectionStart"in r&&Ns(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ur&&no(Ur,r)||(Ur=r,r=ki(wl,"onSelect"),0<r.length&&(t=new Es("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Bn)))}function $o(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var An={animationend:$o("Animation","AnimationEnd"),animationiteration:$o("Animation","AnimationIteration"),animationstart:$o("Animation","AnimationStart"),transitionend:$o("Transition","TransitionEnd")},Na={},wf={};Ft&&(wf=document.createElement("div").style,"AnimationEvent"in window||(delete An.animationend.animation,delete An.animationiteration.animation,delete An.animationstart.animation),"TransitionEvent"in window||delete An.transitionend.transition);function Ki(e){if(Na[e])return Na[e];if(!An[e])return e;var t=An[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in wf)return Na[e]=t[n];return e}var kf=Ki("animationend"),Sf=Ki("animationiteration"),Cf=Ki("animationstart"),Ef=Ki("transitionend"),_f=new Map,nc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ln(e,t){_f.set(e,t),Dn(t,[e])}for(var ja=0;ja<nc.length;ja++){var Fa=nc[ja],Tg=Fa.toLowerCase(),Lg=Fa[0].toUpperCase()+Fa.slice(1);ln(Tg,"on"+Lg)}ln(kf,"onAnimationEnd");ln(Sf,"onAnimationIteration");ln(Cf,"onAnimationStart");ln("dblclick","onDoubleClick");ln("focusin","onFocus");ln("focusout","onBlur");ln(Ef,"onTransitionEnd");or("onMouseEnter",["mouseout","mouseover"]);or("onMouseLeave",["mouseout","mouseover"]);or("onPointerEnter",["pointerout","pointerover"]);or("onPointerLeave",["pointerout","pointerover"]);Dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rg=new Set("cancel close invalid load scroll toggle".split(" ").concat(zr));function rc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Tm(r,t,void 0,e),e.currentTarget=null}function Pf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;rc(o,l,u),i=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;rc(o,l,u),i=s}}}if(gi)throw e=gl,gi=!1,gl=null,e}function Q(e,t){var n=t[Pl];n===void 0&&(n=t[Pl]=new Set);var r=e+"__bubble";n.has(r)||(Nf(t,e,2,!1),n.add(r))}function Ma(e,t,n){var r=0;t&&(r|=4),Nf(n,e,r,t)}var Wo="_reactListening"+Math.random().toString(36).slice(2);function ro(e){if(!e[Wo]){e[Wo]=!0,Od.forEach(function(n){n!=="selectionchange"&&(Rg.has(n)||Ma(n,!1,e),Ma(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wo]||(t[Wo]=!0,Ma("selectionchange",!1,t))}}function Nf(e,t,n,r){switch(cf(t)){case 1:var o=Xm;break;case 4:o=Jm;break;default:o=Ss}n=o.bind(null,t,n,e),o=void 0,!ml||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Da(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;a=a.return}for(;l!==null;){if(a=yn(l),a===null)return;if(s=a.tag,s===5||s===6){r=i=a;continue e}l=l.parentNode}}r=r.return}Kd(function(){var u=i,c=ys(n),f=[];e:{var h=_f.get(e);if(h!==void 0){var v=Es,y=e;switch(e){case"keypress":if(ei(n)===0)break e;case"keydown":case"keyup":v=fg;break;case"focusin":y="focus",v=Ea;break;case"focusout":y="blur",v=Ea;break;case"beforeblur":case"afterblur":v=Ea;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Yu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=eg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=mg;break;case kf:case Sf:case Cf:v=rg;break;case Ef:v=vg;break;case"scroll":v=qm;break;case"wheel":v=xg;break;case"copy":case"cut":case"paste":v=ig;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Gu}var x=(t&4)!==0,k=!x&&e==="scroll",m=x?h!==null?h+"Capture":null:h;x=[];for(var p=u,g;p!==null;){g=p;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,m!==null&&(w=Jr(p,m),w!=null&&x.push(oo(p,w,g)))),k)break;p=p.return}0<x.length&&(h=new v(h,y,null,n,c),f.push({event:h,listeners:x}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==pl&&(y=n.relatedTarget||n.fromElement)&&(yn(y)||y[Mt]))break e;if((v||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?yn(y):null,y!==null&&(k=bn(y),y!==k||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(x=Yu,w="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(x=Gu,w="onPointerLeave",m="onPointerEnter",p="pointer"),k=v==null?h:Un(v),g=y==null?h:Un(y),h=new x(w,p+"leave",v,n,c),h.target=k,h.relatedTarget=g,w=null,yn(c)===u&&(x=new x(m,p+"enter",y,n,c),x.target=g,x.relatedTarget=k,w=x),k=w,v&&y)t:{for(x=v,m=y,p=0,g=x;g;g=Ln(g))p++;for(g=0,w=m;w;w=Ln(w))g++;for(;0<p-g;)x=Ln(x),p--;for(;0<g-p;)m=Ln(m),g--;for(;p--;){if(x===m||m!==null&&x===m.alternate)break t;x=Ln(x),m=Ln(m)}x=null}else x=null;v!==null&&oc(f,h,v,x,!1),y!==null&&k!==null&&oc(f,k,y,x,!0)}}e:{if(h=u?Un(u):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var P=Pg;else if(Xu(h))if(gf)P=Mg;else{P=jg;var N=Ng}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=Fg);if(P&&(P=P(e,u))){mf(f,P,n,c);break e}N&&N(e,h,u),e==="focusout"&&(N=h._wrapperState)&&N.controlled&&h.type==="number"&&sl(h,"number",h.value)}switch(N=u?Un(u):window,e){case"focusin":(Xu(N)||N.contentEditable==="true")&&(Bn=N,wl=u,Ur=null);break;case"focusout":Ur=wl=Bn=null;break;case"mousedown":kl=!0;break;case"contextmenu":case"mouseup":case"dragend":kl=!1,tc(f,n,c);break;case"selectionchange":if(Og)break;case"keydown":case"keyup":tc(f,n,c)}var _;if(Ps)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else Wn?pf(e,n)&&(M="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(ff&&n.locale!=="ko"&&(Wn||M!=="onCompositionStart"?M==="onCompositionEnd"&&Wn&&(_=df()):(Yt=c,Cs="value"in Yt?Yt.value:Yt.textContent,Wn=!0)),N=ki(u,M),0<N.length&&(M=new Hu(M,e,null,n,c),f.push({event:M,listeners:N}),_?M.data=_:(_=hf(n),_!==null&&(M.data=_)))),(_=kg?Sg(e,n):Cg(e,n))&&(u=ki(u,"onBeforeInput"),0<u.length&&(c=new Hu("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=_))}Pf(f,t)})}function oo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ki(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Jr(e,n),i!=null&&r.unshift(oo(e,i,o)),i=Jr(e,t),i!=null&&r.push(oo(e,i,o))),e=e.return}return r}function Ln(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function oc(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,o?(s=Jr(n,i),s!=null&&a.unshift(oo(n,s,l))):o||(s=Jr(n,i),s!=null&&a.push(oo(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var zg=/\r\n?/g,Ig=/\u0000|\uFFFD/g;function ic(e){return(typeof e=="string"?e:""+e).replace(zg,`
`).replace(Ig,"")}function Bo(e,t,n){if(t=ic(t),ic(e)!==t&&n)throw Error(j(425))}function Si(){}var Sl=null,Cl=null;function El(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _l=typeof setTimeout=="function"?setTimeout:void 0,$g=typeof clearTimeout=="function"?clearTimeout:void 0,ac=typeof Promise=="function"?Promise:void 0,Wg=typeof queueMicrotask=="function"?queueMicrotask:typeof ac<"u"?function(e){return ac.resolve(null).then(e).catch(Bg)}:_l;function Bg(e){setTimeout(function(){throw e})}function ba(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),eo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);eo(t)}function Jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function lc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var xr=Math.random().toString(36).slice(2),ft="__reactFiber$"+xr,io="__reactProps$"+xr,Mt="__reactContainer$"+xr,Pl="__reactEvents$"+xr,Ag="__reactListeners$"+xr,Ug="__reactHandles$"+xr;function yn(e){var t=e[ft];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Mt]||n[ft]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=lc(e);e!==null;){if(n=e[ft])return n;e=lc(e)}return t}e=n,n=e.parentNode}return null}function ko(e){return e=e[ft]||e[Mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Un(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function Xi(e){return e[io]||null}var Nl=[],Vn=-1;function sn(e){return{current:e}}function X(e){0>Vn||(e.current=Nl[Vn],Nl[Vn]=null,Vn--)}function H(e,t){Vn++,Nl[Vn]=e.current,e.current=t}var an={},ye=sn(an),Fe=sn(!1),_n=an;function ir(e,t){var n=e.type.contextTypes;if(!n)return an;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Me(e){return e=e.childContextTypes,e!=null}function Ci(){X(Fe),X(ye)}function sc(e,t,n){if(ye.current!==an)throw Error(j(168));H(ye,t),H(Fe,n)}function jf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(j(108,Nm(e)||"Unknown",o));return ee({},n,r)}function Ei(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||an,_n=ye.current,H(ye,e),H(Fe,Fe.current),!0}function uc(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=jf(e,t,_n),r.__reactInternalMemoizedMergedChildContext=e,X(Fe),X(ye),H(ye,e)):X(Fe),H(Fe,n)}var _t=null,Ji=!1,Oa=!1;function Ff(e){_t===null?_t=[e]:_t.push(e)}function Vg(e){Ji=!0,Ff(e)}function un(){if(!Oa&&_t!==null){Oa=!0;var e=0,t=V;try{var n=_t;for(V=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}_t=null,Ji=!1}catch(o){throw _t!==null&&(_t=_t.slice(e+1)),Zd(xs,un),o}finally{V=t,Oa=!1}}return null}var Yn=[],Hn=0,_i=null,Pi=0,Ae=[],Ue=0,Pn=null,Pt=1,Nt="";function mn(e,t){Yn[Hn++]=Pi,Yn[Hn++]=_i,_i=e,Pi=t}function Mf(e,t,n){Ae[Ue++]=Pt,Ae[Ue++]=Nt,Ae[Ue++]=Pn,Pn=e;var r=Pt;e=Nt;var o=32-nt(r)-1;r&=~(1<<o),n+=1;var i=32-nt(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Pt=1<<32-nt(t)+o|n<<o|r,Nt=i+e}else Pt=1<<i|n<<o|r,Nt=e}function js(e){e.return!==null&&(mn(e,1),Mf(e,1,0))}function Fs(e){for(;e===_i;)_i=Yn[--Hn],Yn[Hn]=null,Pi=Yn[--Hn],Yn[Hn]=null;for(;e===Pn;)Pn=Ae[--Ue],Ae[Ue]=null,Nt=Ae[--Ue],Ae[Ue]=null,Pt=Ae[--Ue],Ae[Ue]=null}var ze=null,Re=null,J=!1,et=null;function Df(e,t){var n=Ve(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function cc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ze=e,Re=Jt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ze=e,Re=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Pn!==null?{id:Pt,overflow:Nt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ve(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ze=e,Re=null,!0):!1;default:return!1}}function jl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Fl(e){if(J){var t=Re;if(t){var n=t;if(!cc(e,t)){if(jl(e))throw Error(j(418));t=Jt(n.nextSibling);var r=ze;t&&cc(e,t)?Df(r,n):(e.flags=e.flags&-4097|2,J=!1,ze=e)}}else{if(jl(e))throw Error(j(418));e.flags=e.flags&-4097|2,J=!1,ze=e}}}function dc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function Ao(e){if(e!==ze)return!1;if(!J)return dc(e),J=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!El(e.type,e.memoizedProps)),t&&(t=Re)){if(jl(e))throw bf(),Error(j(418));for(;t;)Df(e,t),t=Jt(t.nextSibling)}if(dc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Re=Jt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Re=null}}else Re=ze?Jt(e.stateNode.nextSibling):null;return!0}function bf(){for(var e=Re;e;)e=Jt(e.nextSibling)}function ar(){Re=ze=null,J=!1}function Ms(e){et===null?et=[e]:et.push(e)}var Yg=Ot.ReactCurrentBatchConfig;function qe(e,t){if(e&&e.defaultProps){t=ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ni=sn(null),ji=null,Gn=null,Ds=null;function bs(){Ds=Gn=ji=null}function Os(e){var t=Ni.current;X(Ni),e._currentValue=t}function Ml(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function tr(e,t){ji=e,Ds=Gn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ne=!0),e.firstContext=null)}function He(e){var t=e._currentValue;if(Ds!==e)if(e={context:e,memoizedValue:t,next:null},Gn===null){if(ji===null)throw Error(j(308));Gn=e,ji.dependencies={lanes:0,firstContext:e}}else Gn=Gn.next=e;return t}var xn=null;function Ts(e){xn===null?xn=[e]:xn.push(e)}function Of(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ts(t)):(n.next=o.next,o.next=n),t.interleaved=n,Dt(e,r)}function Dt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var At=!1;function Ls(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function jt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function qt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Dt(e,n)}return o=r.interleaved,o===null?(t.next=t,Ts(r)):(t.next=o.next,o.next=t),r.interleaved=t,Dt(e,n)}function ti(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ws(e,n)}}function fc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Fi(e,t,n,r){var o=e.updateQueue;At=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?i=u:a.next=u,a=s;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==a&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(i!==null){var f=o.baseState;a=0,c=u=s=null,l=i;do{var h=l.lane,v=l.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,x=l;switch(h=t,v=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){f=y.call(v,f,h);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,h=typeof y=="function"?y.call(v,f,h):y,h==null)break e;f=ee({},f,h);break e;case 2:At=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[l]:h.push(l))}else v={eventTime:v,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=v,s=f):c=c.next=v,a|=h;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;h=l,l=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(c===null&&(s=f),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);jn|=a,e.lanes=a,e.memoizedState=f}}function pc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(j(191,o));o.call(r)}}}var Lf=new bd.Component().refs;function Dl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var qi={isMounted:function(e){return(e=e._reactInternals)?bn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ce(),o=en(e),i=jt(r,o);i.payload=t,n!=null&&(i.callback=n),t=qt(e,i,o),t!==null&&(rt(t,e,o,r),ti(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ce(),o=en(e),i=jt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=qt(e,i,o),t!==null&&(rt(t,e,o,r),ti(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ce(),r=en(e),o=jt(n,r);o.tag=2,t!=null&&(o.callback=t),t=qt(e,o,r),t!==null&&(rt(t,e,r,n),ti(t,e,r))}};function hc(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!no(n,r)||!no(o,i):!0}function Rf(e,t,n){var r=!1,o=an,i=t.contextType;return typeof i=="object"&&i!==null?i=He(i):(o=Me(t)?_n:ye.current,r=t.contextTypes,i=(r=r!=null)?ir(e,o):an),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=qi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function mc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&qi.enqueueReplaceState(t,t.state,null)}function bl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Lf,Ls(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=He(i):(i=Me(t)?_n:ye.current,o.context=ir(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Dl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&qi.enqueueReplaceState(o,o.state,null),Fi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Mr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var l=o.refs;l===Lf&&(l=o.refs={}),a===null?delete l[i]:l[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function Uo(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function gc(e){var t=e._init;return t(e._payload)}function zf(e){function t(m,p){if(e){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function o(m,p){return m=tn(m,p),m.index=0,m.sibling=null,m}function i(m,p,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,p,g,w){return p===null||p.tag!==6?(p=Wa(g,m.mode,w),p.return=m,p):(p=o(p,g),p.return=m,p)}function s(m,p,g,w){var P=g.type;return P===$n?c(m,p,g.props.children,w,g.key):p!==null&&(p.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Bt&&gc(P)===p.type)?(w=o(p,g.props),w.ref=Mr(m,p,g),w.return=m,w):(w=li(g.type,g.key,g.props,null,m.mode,w),w.ref=Mr(m,p,g),w.return=m,w)}function u(m,p,g,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=Ba(g,m.mode,w),p.return=m,p):(p=o(p,g.children||[]),p.return=m,p)}function c(m,p,g,w,P){return p===null||p.tag!==7?(p=Cn(g,m.mode,w,P),p.return=m,p):(p=o(p,g),p.return=m,p)}function f(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Wa(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case bo:return g=li(p.type,p.key,p.props,null,m.mode,g),g.ref=Mr(m,null,p),g.return=m,g;case In:return p=Ba(p,m.mode,g),p.return=m,p;case Bt:var w=p._init;return f(m,w(p._payload),g)}if(Lr(p)||_r(p))return p=Cn(p,m.mode,g,null),p.return=m,p;Uo(m,p)}return null}function h(m,p,g,w){var P=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return P!==null?null:l(m,p,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case bo:return g.key===P?s(m,p,g,w):null;case In:return g.key===P?u(m,p,g,w):null;case Bt:return P=g._init,h(m,p,P(g._payload),w)}if(Lr(g)||_r(g))return P!==null?null:c(m,p,g,w,null);Uo(m,g)}return null}function v(m,p,g,w,P){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(g)||null,l(p,m,""+w,P);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case bo:return m=m.get(w.key===null?g:w.key)||null,s(p,m,w,P);case In:return m=m.get(w.key===null?g:w.key)||null,u(p,m,w,P);case Bt:var N=w._init;return v(m,p,g,N(w._payload),P)}if(Lr(w)||_r(w))return m=m.get(g)||null,c(p,m,w,P,null);Uo(p,w)}return null}function y(m,p,g,w){for(var P=null,N=null,_=p,M=p=0,D=null;_!==null&&M<g.length;M++){_.index>M?(D=_,_=null):D=_.sibling;var R=h(m,_,g[M],w);if(R===null){_===null&&(_=D);break}e&&_&&R.alternate===null&&t(m,_),p=i(R,p,M),N===null?P=R:N.sibling=R,N=R,_=D}if(M===g.length)return n(m,_),J&&mn(m,M),P;if(_===null){for(;M<g.length;M++)_=f(m,g[M],w),_!==null&&(p=i(_,p,M),N===null?P=_:N.sibling=_,N=_);return J&&mn(m,M),P}for(_=r(m,_);M<g.length;M++)D=v(_,m,M,g[M],w),D!==null&&(e&&D.alternate!==null&&_.delete(D.key===null?M:D.key),p=i(D,p,M),N===null?P=D:N.sibling=D,N=D);return e&&_.forEach(function(xe){return t(m,xe)}),J&&mn(m,M),P}function x(m,p,g,w){var P=_r(g);if(typeof P!="function")throw Error(j(150));if(g=P.call(g),g==null)throw Error(j(151));for(var N=P=null,_=p,M=p=0,D=null,R=g.next();_!==null&&!R.done;M++,R=g.next()){_.index>M?(D=_,_=null):D=_.sibling;var xe=h(m,_,R.value,w);if(xe===null){_===null&&(_=D);break}e&&_&&xe.alternate===null&&t(m,_),p=i(xe,p,M),N===null?P=xe:N.sibling=xe,N=xe,_=D}if(R.done)return n(m,_),J&&mn(m,M),P;if(_===null){for(;!R.done;M++,R=g.next())R=f(m,R.value,w),R!==null&&(p=i(R,p,M),N===null?P=R:N.sibling=R,N=R);return J&&mn(m,M),P}for(_=r(m,_);!R.done;M++,R=g.next())R=v(_,m,M,R.value,w),R!==null&&(e&&R.alternate!==null&&_.delete(R.key===null?M:R.key),p=i(R,p,M),N===null?P=R:N.sibling=R,N=R);return e&&_.forEach(function(xt){return t(m,xt)}),J&&mn(m,M),P}function k(m,p,g,w){if(typeof g=="object"&&g!==null&&g.type===$n&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case bo:e:{for(var P=g.key,N=p;N!==null;){if(N.key===P){if(P=g.type,P===$n){if(N.tag===7){n(m,N.sibling),p=o(N,g.props.children),p.return=m,m=p;break e}}else if(N.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Bt&&gc(P)===N.type){n(m,N.sibling),p=o(N,g.props),p.ref=Mr(m,N,g),p.return=m,m=p;break e}n(m,N);break}else t(m,N);N=N.sibling}g.type===$n?(p=Cn(g.props.children,m.mode,w,g.key),p.return=m,m=p):(w=li(g.type,g.key,g.props,null,m.mode,w),w.ref=Mr(m,p,g),w.return=m,m=w)}return a(m);case In:e:{for(N=g.key;p!==null;){if(p.key===N)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(m,p.sibling),p=o(p,g.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=Ba(g,m.mode,w),p.return=m,m=p}return a(m);case Bt:return N=g._init,k(m,p,N(g._payload),w)}if(Lr(g))return y(m,p,g,w);if(_r(g))return x(m,p,g,w);Uo(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(m,p.sibling),p=o(p,g),p.return=m,m=p):(n(m,p),p=Wa(g,m.mode,w),p.return=m,m=p),a(m)):n(m,p)}return k}var lr=zf(!0),If=zf(!1),So={},vt=sn(So),ao=sn(So),lo=sn(So);function wn(e){if(e===So)throw Error(j(174));return e}function Rs(e,t){switch(H(lo,t),H(ao,e),H(vt,So),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:cl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=cl(t,e)}X(vt),H(vt,t)}function sr(){X(vt),X(ao),X(lo)}function $f(e){wn(lo.current);var t=wn(vt.current),n=cl(t,e.type);t!==n&&(H(ao,e),H(vt,n))}function zs(e){ao.current===e&&(X(vt),X(ao))}var q=sn(0);function Mi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ta=[];function Is(){for(var e=0;e<Ta.length;e++)Ta[e]._workInProgressVersionPrimary=null;Ta.length=0}var ni=Ot.ReactCurrentDispatcher,La=Ot.ReactCurrentBatchConfig,Nn=0,Z=null,ae=null,se=null,Di=!1,Vr=!1,so=0,Hg=0;function he(){throw Error(j(321))}function $s(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!it(e[n],t[n]))return!1;return!0}function Ws(e,t,n,r,o,i){if(Nn=i,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ni.current=e===null||e.memoizedState===null?Xg:Jg,e=n(r,o),Vr){i=0;do{if(Vr=!1,so=0,25<=i)throw Error(j(301));i+=1,se=ae=null,t.updateQueue=null,ni.current=qg,e=n(r,o)}while(Vr)}if(ni.current=bi,t=ae!==null&&ae.next!==null,Nn=0,se=ae=Z=null,Di=!1,t)throw Error(j(300));return e}function Bs(){var e=so!==0;return so=0,e}function ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return se===null?Z.memoizedState=se=e:se=se.next=e,se}function Ge(){if(ae===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=se===null?Z.memoizedState:se.next;if(t!==null)se=t,ae=e;else{if(e===null)throw Error(j(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},se===null?Z.memoizedState=se=e:se=se.next=e}return se}function uo(e,t){return typeof t=="function"?t(e):t}function Ra(e){var t=Ge(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=ae,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=a=null,s=null,u=i;do{var c=u.lane;if((Nn&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=f,a=r):s=s.next=f,Z.lanes|=c,jn|=c}u=u.next}while(u!==null&&u!==i);s===null?a=r:s.next=l,it(r,t.memoizedState)||(Ne=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Z.lanes|=i,jn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function za(e){var t=Ge(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);it(i,t.memoizedState)||(Ne=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Wf(){}function Bf(e,t){var n=Z,r=Ge(),o=t(),i=!it(r.memoizedState,o);if(i&&(r.memoizedState=o,Ne=!0),r=r.queue,As(Vf.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||se!==null&&se.memoizedState.tag&1){if(n.flags|=2048,co(9,Uf.bind(null,n,r,o,t),void 0,null),ce===null)throw Error(j(349));Nn&30||Af(n,t,o)}return o}function Af(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Uf(e,t,n,r){t.value=n,t.getSnapshot=r,Yf(t)&&Hf(e)}function Vf(e,t,n){return n(function(){Yf(t)&&Hf(e)})}function Yf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!it(e,n)}catch{return!0}}function Hf(e){var t=Dt(e,1);t!==null&&rt(t,e,1,-1)}function vc(e){var t=ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:uo,lastRenderedState:e},t.queue=e,e=e.dispatch=Kg.bind(null,Z,e),[t.memoizedState,e]}function co(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Gf(){return Ge().memoizedState}function ri(e,t,n,r){var o=ct();Z.flags|=e,o.memoizedState=co(1|t,n,void 0,r===void 0?null:r)}function Zi(e,t,n,r){var o=Ge();r=r===void 0?null:r;var i=void 0;if(ae!==null){var a=ae.memoizedState;if(i=a.destroy,r!==null&&$s(r,a.deps)){o.memoizedState=co(t,n,i,r);return}}Z.flags|=e,o.memoizedState=co(1|t,n,i,r)}function yc(e,t){return ri(8390656,8,e,t)}function As(e,t){return Zi(2048,8,e,t)}function Qf(e,t){return Zi(4,2,e,t)}function Kf(e,t){return Zi(4,4,e,t)}function Xf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Jf(e,t,n){return n=n!=null?n.concat([e]):null,Zi(4,4,Xf.bind(null,t,e),n)}function Us(){}function qf(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$s(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Zf(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$s(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ep(e,t,n){return Nn&21?(it(n,t)||(n=nf(),Z.lanes|=n,jn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ne=!0),e.memoizedState=n)}function Gg(e,t){var n=V;V=n!==0&&4>n?n:4,e(!0);var r=La.transition;La.transition={};try{e(!1),t()}finally{V=n,La.transition=r}}function tp(){return Ge().memoizedState}function Qg(e,t,n){var r=en(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},np(e))rp(t,n);else if(n=Of(e,t,n,r),n!==null){var o=Ce();rt(n,e,r,o),op(n,t,r)}}function Kg(e,t,n){var r=en(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(np(e))rp(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,l=i(a,n);if(o.hasEagerState=!0,o.eagerState=l,it(l,a)){var s=t.interleaved;s===null?(o.next=o,Ts(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Of(e,t,o,r),n!==null&&(o=Ce(),rt(n,e,r,o),op(n,t,r))}}function np(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function rp(e,t){Vr=Di=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function op(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ws(e,n)}}var bi={readContext:He,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},Xg={readContext:He,useCallback:function(e,t){return ct().memoizedState=[e,t===void 0?null:t],e},useContext:He,useEffect:yc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ri(4194308,4,Xf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ri(4194308,4,e,t)},useInsertionEffect:function(e,t){return ri(4,2,e,t)},useMemo:function(e,t){var n=ct();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ct();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Qg.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){var t=ct();return e={current:e},t.memoizedState=e},useState:vc,useDebugValue:Us,useDeferredValue:function(e){return ct().memoizedState=e},useTransition:function(){var e=vc(!1),t=e[0];return e=Gg.bind(null,e[1]),ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Z,o=ct();if(J){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),ce===null)throw Error(j(349));Nn&30||Af(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,yc(Vf.bind(null,r,i,e),[e]),r.flags|=2048,co(9,Uf.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=ct(),t=ce.identifierPrefix;if(J){var n=Nt,r=Pt;n=(r&~(1<<32-nt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=so++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Hg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Jg={readContext:He,useCallback:qf,useContext:He,useEffect:As,useImperativeHandle:Jf,useInsertionEffect:Qf,useLayoutEffect:Kf,useMemo:Zf,useReducer:Ra,useRef:Gf,useState:function(){return Ra(uo)},useDebugValue:Us,useDeferredValue:function(e){var t=Ge();return ep(t,ae.memoizedState,e)},useTransition:function(){var e=Ra(uo)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:Wf,useSyncExternalStore:Bf,useId:tp,unstable_isNewReconciler:!1},qg={readContext:He,useCallback:qf,useContext:He,useEffect:As,useImperativeHandle:Jf,useInsertionEffect:Qf,useLayoutEffect:Kf,useMemo:Zf,useReducer:za,useRef:Gf,useState:function(){return za(uo)},useDebugValue:Us,useDeferredValue:function(e){var t=Ge();return ae===null?t.memoizedState=e:ep(t,ae.memoizedState,e)},useTransition:function(){var e=za(uo)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:Wf,useSyncExternalStore:Bf,useId:tp,unstable_isNewReconciler:!1};function ur(e,t){try{var n="",r=t;do n+=Pm(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Ia(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ol(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Zg=typeof WeakMap=="function"?WeakMap:Map;function ip(e,t,n){n=jt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ti||(Ti=!0,Ul=r),Ol(e,t)},n}function ap(e,t,n){n=jt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ol(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ol(e,t),typeof r!="function"&&(Zt===null?Zt=new Set([this]):Zt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function xc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Zg;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=p0.bind(null,e,t,n),t.then(e,e))}function wc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function kc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=jt(-1,1),t.tag=2,qt(n,t,1))),n.lanes|=1),e)}var e0=Ot.ReactCurrentOwner,Ne=!1;function ke(e,t,n,r){t.child=e===null?If(t,null,n,r):lr(t,e.child,n,r)}function Sc(e,t,n,r,o){n=n.render;var i=t.ref;return tr(t,o),r=Ws(e,t,n,r,i,o),n=Bs(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,bt(e,t,o)):(J&&n&&js(t),t.flags|=1,ke(e,t,r,o),t.child)}function Cc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Js(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,lp(e,t,i,r,o)):(e=li(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:no,n(a,r)&&e.ref===t.ref)return bt(e,t,o)}return t.flags|=1,e=tn(i,r),e.ref=t.ref,e.return=t,t.child=e}function lp(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(no(i,r)&&e.ref===t.ref)if(Ne=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ne=!0);else return t.lanes=e.lanes,bt(e,t,o)}return Tl(e,t,n,r,o)}function sp(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(Kn,Le),Le|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(Kn,Le),Le|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,H(Kn,Le),Le|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,H(Kn,Le),Le|=r;return ke(e,t,o,n),t.child}function up(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Tl(e,t,n,r,o){var i=Me(n)?_n:ye.current;return i=ir(t,i),tr(t,o),n=Ws(e,t,n,r,i,o),r=Bs(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,bt(e,t,o)):(J&&r&&js(t),t.flags|=1,ke(e,t,n,o),t.child)}function Ec(e,t,n,r,o){if(Me(n)){var i=!0;Ei(t)}else i=!1;if(tr(t,o),t.stateNode===null)oi(e,t),Rf(t,n,r),bl(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=He(u):(u=Me(n)?_n:ye.current,u=ir(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&mc(t,a,r,u),At=!1;var h=t.memoizedState;a.state=h,Fi(t,r,a,o),s=t.memoizedState,l!==r||h!==s||Fe.current||At?(typeof c=="function"&&(Dl(t,n,c,r),s=t.memoizedState),(l=At||hc(t,n,l,r,h,s,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Tf(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:qe(t.type,l),a.props=u,f=t.pendingProps,h=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=He(s):(s=Me(n)?_n:ye.current,s=ir(t,s));var v=n.getDerivedStateFromProps;(c=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||h!==s)&&mc(t,a,r,s),At=!1,h=t.memoizedState,a.state=h,Fi(t,r,a,o);var y=t.memoizedState;l!==f||h!==y||Fe.current||At?(typeof v=="function"&&(Dl(t,n,v,r),y=t.memoizedState),(u=At||hc(t,n,u,r,h,y,s)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Ll(e,t,n,r,i,o)}function Ll(e,t,n,r,o,i){up(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&uc(t,n,!1),bt(e,t,i);r=t.stateNode,e0.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=lr(t,e.child,null,i),t.child=lr(t,null,l,i)):ke(e,t,l,i),t.memoizedState=r.state,o&&uc(t,n,!0),t.child}function cp(e){var t=e.stateNode;t.pendingContext?sc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&sc(e,t.context,!1),Rs(e,t.containerInfo)}function _c(e,t,n,r,o){return ar(),Ms(o),t.flags|=256,ke(e,t,n,r),t.child}var Rl={dehydrated:null,treeContext:null,retryLane:0};function zl(e){return{baseLanes:e,cachePool:null,transitions:null}}function dp(e,t,n){var r=t.pendingProps,o=q.current,i=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),H(q,o&1),e===null)return Fl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=na(a,r,0,null),e=Cn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=zl(n),t.memoizedState=Rl,e):Vs(t,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return t0(e,t,a,r,l,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=tn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=tn(l,i):(i=Cn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?zl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Rl,r}return i=e.child,e=i.sibling,r=tn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Vs(e,t){return t=na({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Vo(e,t,n,r){return r!==null&&Ms(r),lr(t,e.child,null,n),e=Vs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function t0(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Ia(Error(j(422))),Vo(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=na({mode:"visible",children:r.children},o,0,null),i=Cn(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&lr(t,e.child,null,a),t.child.memoizedState=zl(a),t.memoizedState=Rl,i);if(!(t.mode&1))return Vo(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(j(419)),r=Ia(i,r,void 0),Vo(e,t,a,r)}if(l=(a&e.childLanes)!==0,Ne||l){if(r=ce,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Dt(e,o),rt(r,e,o,-1))}return Xs(),r=Ia(Error(j(421))),Vo(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=h0.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Re=Jt(o.nextSibling),ze=t,J=!0,et=null,e!==null&&(Ae[Ue++]=Pt,Ae[Ue++]=Nt,Ae[Ue++]=Pn,Pt=e.id,Nt=e.overflow,Pn=t),t=Vs(t,r.children),t.flags|=4096,t)}function Pc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ml(e.return,t,n)}function $a(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function fp(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ke(e,t,r.children,n),r=q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pc(e,n,t);else if(e.tag===19)Pc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(H(q,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Mi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),$a(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Mi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}$a(t,!0,n,null,i);break;case"together":$a(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function oi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function bt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),jn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=tn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=tn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function n0(e,t,n){switch(t.tag){case 3:cp(t),ar();break;case 5:$f(t);break;case 1:Me(t.type)&&Ei(t);break;case 4:Rs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;H(Ni,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(H(q,q.current&1),t.flags|=128,null):n&t.child.childLanes?dp(e,t,n):(H(q,q.current&1),e=bt(e,t,n),e!==null?e.sibling:null);H(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return fp(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),H(q,q.current),r)break;return null;case 22:case 23:return t.lanes=0,sp(e,t,n)}return bt(e,t,n)}var pp,Il,hp,mp;pp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Il=function(){};hp=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,wn(vt.current);var i=null;switch(n){case"input":o=al(e,o),r=al(e,r),i=[];break;case"select":o=ee({},o,{value:void 0}),r=ee({},r,{value:void 0}),i=[];break;case"textarea":o=ul(e,o),r=ul(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Si)}dl(n,r);var a;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Kr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(l=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Kr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&Q("scroll",e),i||l===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};mp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Dr(e,t){if(!J)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function r0(e,t,n){var r=t.pendingProps;switch(Fs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(t),null;case 1:return Me(t.type)&&Ci(),me(t),null;case 3:return r=t.stateNode,sr(),X(Fe),X(ye),Is(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ao(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,et!==null&&(Hl(et),et=null))),Il(e,t),me(t),null;case 5:zs(t);var o=wn(lo.current);if(n=t.type,e!==null&&t.stateNode!=null)hp(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return me(t),null}if(e=wn(vt.current),Ao(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[ft]=t,r[io]=i,e=(t.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(o=0;o<zr.length;o++)Q(zr[o],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":Lu(r,i),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Q("invalid",r);break;case"textarea":zu(r,i),Q("invalid",r)}dl(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Bo(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Bo(r.textContent,l,e),o=["children",""+l]):Kr.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Q("scroll",r)}switch(n){case"input":Oo(r),Ru(r,i,!0);break;case"textarea":Oo(r),Iu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Si)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[ft]=t,e[io]=r,pp(e,t,!1,!1),t.stateNode=e;e:{switch(a=fl(n,r),n){case"dialog":Q("cancel",e),Q("close",e),o=r;break;case"iframe":case"object":case"embed":Q("load",e),o=r;break;case"video":case"audio":for(o=0;o<zr.length;o++)Q(zr[o],e);o=r;break;case"source":Q("error",e),o=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),o=r;break;case"details":Q("toggle",e),o=r;break;case"input":Lu(e,r),o=al(e,r),Q("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ee({},r,{value:void 0}),Q("invalid",e);break;case"textarea":zu(e,r),o=ul(e,r),Q("invalid",e);break;default:o=r}dl(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?Vd(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Ad(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Xr(e,s):typeof s=="number"&&Xr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Kr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&Q("scroll",e):s!=null&&hs(e,i,s,a))}switch(n){case"input":Oo(e),Ru(e,r,!1);break;case"textarea":Oo(e),Iu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+on(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Jn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Jn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Si)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return me(t),null;case 6:if(e&&t.stateNode!=null)mp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=wn(lo.current),wn(vt.current),Ao(t)){if(r=t.stateNode,n=t.memoizedProps,r[ft]=t,(i=r.nodeValue!==n)&&(e=ze,e!==null))switch(e.tag){case 3:Bo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Bo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ft]=t,t.stateNode=r}return me(t),null;case 13:if(X(q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(J&&Re!==null&&t.mode&1&&!(t.flags&128))bf(),ar(),t.flags|=98560,i=!1;else if(i=Ao(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(j(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));i[ft]=t}else ar(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;me(t),i=!1}else et!==null&&(Hl(et),et=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?le===0&&(le=3):Xs())),t.updateQueue!==null&&(t.flags|=4),me(t),null);case 4:return sr(),Il(e,t),e===null&&ro(t.stateNode.containerInfo),me(t),null;case 10:return Os(t.type._context),me(t),null;case 17:return Me(t.type)&&Ci(),me(t),null;case 19:if(X(q),i=t.memoizedState,i===null)return me(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)Dr(i,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Mi(e),a!==null){for(t.flags|=128,Dr(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(q,q.current&1|2),t.child}e=e.sibling}i.tail!==null&&ne()>cr&&(t.flags|=128,r=!0,Dr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Mi(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Dr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!J)return me(t),null}else 2*ne()-i.renderingStartTime>cr&&n!==1073741824&&(t.flags|=128,r=!0,Dr(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ne(),t.sibling=null,n=q.current,H(q,r?n&1|2:n&1),t):(me(t),null);case 22:case 23:return Ks(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Le&1073741824&&(me(t),t.subtreeFlags&6&&(t.flags|=8192)):me(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function o0(e,t){switch(Fs(t),t.tag){case 1:return Me(t.type)&&Ci(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return sr(),X(Fe),X(ye),Is(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return zs(t),null;case 13:if(X(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));ar()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(q),null;case 4:return sr(),null;case 10:return Os(t.type._context),null;case 22:case 23:return Ks(),null;case 24:return null;default:return null}}var Yo=!1,ge=!1,i0=typeof WeakSet=="function"?WeakSet:Set,F=null;function Qn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(e,t,r)}else n.current=null}function $l(e,t,n){try{n()}catch(r){te(e,t,r)}}var Nc=!1;function a0(e,t){if(Sl=xi,e=xf(),Ns(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,c=0,f=e,h=null;t:for(;;){for(var v;f!==n||o!==0&&f.nodeType!==3||(l=a+o),f!==i||r!==0&&f.nodeType!==3||(s=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(v=f.firstChild)!==null;)h=f,f=v;for(;;){if(f===e)break t;if(h===n&&++u===o&&(l=a),h===i&&++c===r&&(s=a),(v=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=v}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cl={focusedElem:e,selectionRange:n},xi=!1,F=t;F!==null;)if(t=F,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,F=e;else for(;F!==null;){t=F;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,k=y.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?x:qe(t.type,x),k);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(w){te(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,F=e;break}F=t.return}return y=Nc,Nc=!1,y}function Yr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&$l(t,n,i)}o=o.next}while(o!==r)}}function ea(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Wl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function gp(e){var t=e.alternate;t!==null&&(e.alternate=null,gp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ft],delete t[io],delete t[Pl],delete t[Ag],delete t[Ug])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function vp(e){return e.tag===5||e.tag===3||e.tag===4}function jc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Si));else if(r!==4&&(e=e.child,e!==null))for(Bl(e,t,n),e=e.sibling;e!==null;)Bl(e,t,n),e=e.sibling}function Al(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Al(e,t,n),e=e.sibling;e!==null;)Al(e,t,n),e=e.sibling}var de=null,Ze=!1;function It(e,t,n){for(n=n.child;n!==null;)yp(e,t,n),n=n.sibling}function yp(e,t,n){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(Hi,n)}catch{}switch(n.tag){case 5:ge||Qn(n,t);case 6:var r=de,o=Ze;de=null,It(e,t,n),de=r,Ze=o,de!==null&&(Ze?(e=de,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):de.removeChild(n.stateNode));break;case 18:de!==null&&(Ze?(e=de,n=n.stateNode,e.nodeType===8?ba(e.parentNode,n):e.nodeType===1&&ba(e,n),eo(e)):ba(de,n.stateNode));break;case 4:r=de,o=Ze,de=n.stateNode.containerInfo,Ze=!0,It(e,t,n),de=r,Ze=o;break;case 0:case 11:case 14:case 15:if(!ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&$l(n,t,a),o=o.next}while(o!==r)}It(e,t,n);break;case 1:if(!ge&&(Qn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){te(n,t,l)}It(e,t,n);break;case 21:It(e,t,n);break;case 22:n.mode&1?(ge=(r=ge)||n.memoizedState!==null,It(e,t,n),ge=r):It(e,t,n);break;default:It(e,t,n)}}function Fc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new i0),t.forEach(function(r){var o=m0.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Je(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:de=l.stateNode,Ze=!1;break e;case 3:de=l.stateNode.containerInfo,Ze=!0;break e;case 4:de=l.stateNode.containerInfo,Ze=!0;break e}l=l.return}if(de===null)throw Error(j(160));yp(i,a,o),de=null,Ze=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){te(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)xp(t,e),t=t.sibling}function xp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Je(t,e),st(e),r&4){try{Yr(3,e,e.return),ea(3,e)}catch(x){te(e,e.return,x)}try{Yr(5,e,e.return)}catch(x){te(e,e.return,x)}}break;case 1:Je(t,e),st(e),r&512&&n!==null&&Qn(n,n.return);break;case 5:if(Je(t,e),st(e),r&512&&n!==null&&Qn(n,n.return),e.flags&32){var o=e.stateNode;try{Xr(o,"")}catch(x){te(e,e.return,x)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&$d(o,i),fl(l,a);var u=fl(l,i);for(a=0;a<s.length;a+=2){var c=s[a],f=s[a+1];c==="style"?Vd(o,f):c==="dangerouslySetInnerHTML"?Ad(o,f):c==="children"?Xr(o,f):hs(o,c,f,u)}switch(l){case"input":ll(o,i);break;case"textarea":Wd(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?Jn(o,!!i.multiple,v,!1):h!==!!i.multiple&&(i.defaultValue!=null?Jn(o,!!i.multiple,i.defaultValue,!0):Jn(o,!!i.multiple,i.multiple?[]:"",!1))}o[io]=i}catch(x){te(e,e.return,x)}}break;case 6:if(Je(t,e),st(e),r&4){if(e.stateNode===null)throw Error(j(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(x){te(e,e.return,x)}}break;case 3:if(Je(t,e),st(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{eo(t.containerInfo)}catch(x){te(e,e.return,x)}break;case 4:Je(t,e),st(e);break;case 13:Je(t,e),st(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Gs=ne())),r&4&&Fc(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(ge=(u=ge)||c,Je(t,e),ge=u):Je(t,e),st(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(F=e,c=e.child;c!==null;){for(f=F=c;F!==null;){switch(h=F,v=h.child,h.tag){case 0:case 11:case 14:case 15:Yr(4,h,h.return);break;case 1:Qn(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){te(r,n,x)}}break;case 5:Qn(h,h.return);break;case 22:if(h.memoizedState!==null){Dc(f);continue}}v!==null?(v.return=h,F=v):Dc(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{o=f.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=f.stateNode,s=f.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Ud("display",a))}catch(x){te(e,e.return,x)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){te(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Je(t,e),st(e),r&4&&Fc(e);break;case 21:break;default:Je(t,e),st(e)}}function st(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(vp(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Xr(o,""),r.flags&=-33);var i=jc(e);Al(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=jc(e);Bl(e,l,a);break;default:throw Error(j(161))}}catch(s){te(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function l0(e,t,n){F=e,wp(e)}function wp(e,t,n){for(var r=(e.mode&1)!==0;F!==null;){var o=F,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Yo;if(!a){var l=o.alternate,s=l!==null&&l.memoizedState!==null||ge;l=Yo;var u=ge;if(Yo=a,(ge=s)&&!u)for(F=o;F!==null;)a=F,s=a.child,a.tag===22&&a.memoizedState!==null?bc(o):s!==null?(s.return=a,F=s):bc(o);for(;i!==null;)F=i,wp(i),i=i.sibling;F=o,Yo=l,ge=u}Mc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,F=i):Mc(e)}}function Mc(e){for(;F!==null;){var t=F;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ge||ea(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ge)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:qe(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&pc(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}pc(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&eo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}ge||t.flags&512&&Wl(t)}catch(h){te(t,t.return,h)}}if(t===e){F=null;break}if(n=t.sibling,n!==null){n.return=t.return,F=n;break}F=t.return}}function Dc(e){for(;F!==null;){var t=F;if(t===e){F=null;break}var n=t.sibling;if(n!==null){n.return=t.return,F=n;break}F=t.return}}function bc(e){for(;F!==null;){var t=F;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ea(4,t)}catch(s){te(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){te(t,o,s)}}var i=t.return;try{Wl(t)}catch(s){te(t,i,s)}break;case 5:var a=t.return;try{Wl(t)}catch(s){te(t,a,s)}}}catch(s){te(t,t.return,s)}if(t===e){F=null;break}var l=t.sibling;if(l!==null){l.return=t.return,F=l;break}F=t.return}}var s0=Math.ceil,Oi=Ot.ReactCurrentDispatcher,Ys=Ot.ReactCurrentOwner,Ye=Ot.ReactCurrentBatchConfig,$=0,ce=null,ie=null,fe=0,Le=0,Kn=sn(0),le=0,fo=null,jn=0,ta=0,Hs=0,Hr=null,Pe=null,Gs=0,cr=1/0,Ct=null,Ti=!1,Ul=null,Zt=null,Ho=!1,Ht=null,Li=0,Gr=0,Vl=null,ii=-1,ai=0;function Ce(){return $&6?ne():ii!==-1?ii:ii=ne()}function en(e){return e.mode&1?$&2&&fe!==0?fe&-fe:Yg.transition!==null?(ai===0&&(ai=nf()),ai):(e=V,e!==0||(e=window.event,e=e===void 0?16:cf(e.type)),e):1}function rt(e,t,n,r){if(50<Gr)throw Gr=0,Vl=null,Error(j(185));xo(e,n,r),(!($&2)||e!==ce)&&(e===ce&&(!($&2)&&(ta|=n),le===4&&Vt(e,fe)),De(e,r),n===1&&$===0&&!(t.mode&1)&&(cr=ne()+500,Ji&&un()))}function De(e,t){var n=e.callbackNode;Ym(e,t);var r=yi(e,e===ce?fe:0);if(r===0)n!==null&&Bu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Bu(n),t===1)e.tag===0?Vg(Oc.bind(null,e)):Ff(Oc.bind(null,e)),Wg(function(){!($&6)&&un()}),n=null;else{switch(rf(r)){case 1:n=xs;break;case 4:n=ef;break;case 16:n=vi;break;case 536870912:n=tf;break;default:n=vi}n=jp(n,kp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function kp(e,t){if(ii=-1,ai=0,$&6)throw Error(j(327));var n=e.callbackNode;if(nr()&&e.callbackNode!==n)return null;var r=yi(e,e===ce?fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ri(e,r);else{t=r;var o=$;$|=2;var i=Cp();(ce!==e||fe!==t)&&(Ct=null,cr=ne()+500,Sn(e,t));do try{d0();break}catch(l){Sp(e,l)}while(!0);bs(),Oi.current=i,$=o,ie!==null?t=0:(ce=null,fe=0,t=le)}if(t!==0){if(t===2&&(o=vl(e),o!==0&&(r=o,t=Yl(e,o))),t===1)throw n=fo,Sn(e,0),Vt(e,r),De(e,ne()),n;if(t===6)Vt(e,r);else{if(o=e.current.alternate,!(r&30)&&!u0(o)&&(t=Ri(e,r),t===2&&(i=vl(e),i!==0&&(r=i,t=Yl(e,i))),t===1))throw n=fo,Sn(e,0),Vt(e,r),De(e,ne()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:gn(e,Pe,Ct);break;case 3:if(Vt(e,r),(r&130023424)===r&&(t=Gs+500-ne(),10<t)){if(yi(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ce(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=_l(gn.bind(null,e,Pe,Ct),t);break}gn(e,Pe,Ct);break;case 4:if(Vt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-nt(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*s0(r/1960))-r,10<r){e.timeoutHandle=_l(gn.bind(null,e,Pe,Ct),r);break}gn(e,Pe,Ct);break;case 5:gn(e,Pe,Ct);break;default:throw Error(j(329))}}}return De(e,ne()),e.callbackNode===n?kp.bind(null,e):null}function Yl(e,t){var n=Hr;return e.current.memoizedState.isDehydrated&&(Sn(e,t).flags|=256),e=Ri(e,t),e!==2&&(t=Pe,Pe=n,t!==null&&Hl(t)),e}function Hl(e){Pe===null?Pe=e:Pe.push.apply(Pe,e)}function u0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!it(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Vt(e,t){for(t&=~Hs,t&=~ta,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-nt(t),r=1<<n;e[n]=-1,t&=~r}}function Oc(e){if($&6)throw Error(j(327));nr();var t=yi(e,0);if(!(t&1))return De(e,ne()),null;var n=Ri(e,t);if(e.tag!==0&&n===2){var r=vl(e);r!==0&&(t=r,n=Yl(e,r))}if(n===1)throw n=fo,Sn(e,0),Vt(e,t),De(e,ne()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,gn(e,Pe,Ct),De(e,ne()),null}function Qs(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(cr=ne()+500,Ji&&un())}}function Fn(e){Ht!==null&&Ht.tag===0&&!($&6)&&nr();var t=$;$|=1;var n=Ye.transition,r=V;try{if(Ye.transition=null,V=1,e)return e()}finally{V=r,Ye.transition=n,$=t,!($&6)&&un()}}function Ks(){Le=Kn.current,X(Kn)}function Sn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,$g(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(Fs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ci();break;case 3:sr(),X(Fe),X(ye),Is();break;case 5:zs(r);break;case 4:sr();break;case 13:X(q);break;case 19:X(q);break;case 10:Os(r.type._context);break;case 22:case 23:Ks()}n=n.return}if(ce=e,ie=e=tn(e.current,null),fe=Le=t,le=0,fo=null,Hs=ta=jn=0,Pe=Hr=null,xn!==null){for(t=0;t<xn.length;t++)if(n=xn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}xn=null}return e}function Sp(e,t){do{var n=ie;try{if(bs(),ni.current=bi,Di){for(var r=Z.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Di=!1}if(Nn=0,se=ae=Z=null,Vr=!1,so=0,Ys.current=null,n===null||n.return===null){le=1,fo=t,ie=null;break}e:{var i=e,a=n.return,l=n,s=t;if(t=fe,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=l,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var v=wc(a);if(v!==null){v.flags&=-257,kc(v,a,l,i,t),v.mode&1&&xc(i,u,t),t=v,s=u;var y=t.updateQueue;if(y===null){var x=new Set;x.add(s),t.updateQueue=x}else y.add(s);break e}else{if(!(t&1)){xc(i,u,t),Xs();break e}s=Error(j(426))}}else if(J&&l.mode&1){var k=wc(a);if(k!==null){!(k.flags&65536)&&(k.flags|=256),kc(k,a,l,i,t),Ms(ur(s,l));break e}}i=s=ur(s,l),le!==4&&(le=2),Hr===null?Hr=[i]:Hr.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=ip(i,s,t);fc(i,m);break e;case 1:l=s;var p=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Zt===null||!Zt.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=ap(i,l,t);fc(i,w);break e}}i=i.return}while(i!==null)}_p(n)}catch(P){t=P,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(!0)}function Cp(){var e=Oi.current;return Oi.current=bi,e===null?bi:e}function Xs(){(le===0||le===3||le===2)&&(le=4),ce===null||!(jn&268435455)&&!(ta&268435455)||Vt(ce,fe)}function Ri(e,t){var n=$;$|=2;var r=Cp();(ce!==e||fe!==t)&&(Ct=null,Sn(e,t));do try{c0();break}catch(o){Sp(e,o)}while(!0);if(bs(),$=n,Oi.current=r,ie!==null)throw Error(j(261));return ce=null,fe=0,le}function c0(){for(;ie!==null;)Ep(ie)}function d0(){for(;ie!==null&&!Rm();)Ep(ie)}function Ep(e){var t=Np(e.alternate,e,Le);e.memoizedProps=e.pendingProps,t===null?_p(e):ie=t,Ys.current=null}function _p(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=o0(n,t),n!==null){n.flags&=32767,ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,ie=null;return}}else if(n=r0(n,t,Le),n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);le===0&&(le=5)}function gn(e,t,n){var r=V,o=Ye.transition;try{Ye.transition=null,V=1,f0(e,t,n,r)}finally{Ye.transition=o,V=r}return null}function f0(e,t,n,r){do nr();while(Ht!==null);if($&6)throw Error(j(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Hm(e,i),e===ce&&(ie=ce=null,fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ho||(Ho=!0,jp(vi,function(){return nr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ye.transition,Ye.transition=null;var a=V;V=1;var l=$;$|=4,Ys.current=null,a0(e,n),xp(n,e),bg(Cl),xi=!!Sl,Cl=Sl=null,e.current=n,l0(n),zm(),$=l,V=a,Ye.transition=i}else e.current=n;if(Ho&&(Ho=!1,Ht=e,Li=o),i=e.pendingLanes,i===0&&(Zt=null),Wm(n.stateNode),De(e,ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ti)throw Ti=!1,e=Ul,Ul=null,e;return Li&1&&e.tag!==0&&nr(),i=e.pendingLanes,i&1?e===Vl?Gr++:(Gr=0,Vl=e):Gr=0,un(),null}function nr(){if(Ht!==null){var e=rf(Li),t=Ye.transition,n=V;try{if(Ye.transition=null,V=16>e?16:e,Ht===null)var r=!1;else{if(e=Ht,Ht=null,Li=0,$&6)throw Error(j(331));var o=$;for($|=4,F=e.current;F!==null;){var i=F,a=i.child;if(F.flags&16){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(F=u;F!==null;){var c=F;switch(c.tag){case 0:case 11:case 15:Yr(8,c,i)}var f=c.child;if(f!==null)f.return=c,F=f;else for(;F!==null;){c=F;var h=c.sibling,v=c.return;if(gp(c),c===u){F=null;break}if(h!==null){h.return=v,F=h;break}F=v}}}var y=i.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var k=x.sibling;x.sibling=null,x=k}while(x!==null)}}F=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,F=a;else e:for(;F!==null;){if(i=F,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Yr(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,F=m;break e}F=i.return}}var p=e.current;for(F=p;F!==null;){a=F;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,F=g;else e:for(a=p;F!==null;){if(l=F,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ea(9,l)}}catch(P){te(l,l.return,P)}if(l===a){F=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,F=w;break e}F=l.return}}if($=o,un(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(Hi,e)}catch{}r=!0}return r}finally{V=n,Ye.transition=t}}return!1}function Tc(e,t,n){t=ur(n,t),t=ip(e,t,1),e=qt(e,t,1),t=Ce(),e!==null&&(xo(e,1,t),De(e,t))}function te(e,t,n){if(e.tag===3)Tc(e,e,n);else for(;t!==null;){if(t.tag===3){Tc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zt===null||!Zt.has(r))){e=ur(n,e),e=ap(t,e,1),t=qt(t,e,1),e=Ce(),t!==null&&(xo(t,1,e),De(t,e));break}}t=t.return}}function p0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ce(),e.pingedLanes|=e.suspendedLanes&n,ce===e&&(fe&n)===n&&(le===4||le===3&&(fe&130023424)===fe&&500>ne()-Gs?Sn(e,0):Hs|=n),De(e,t)}function Pp(e,t){t===0&&(e.mode&1?(t=Ro,Ro<<=1,!(Ro&130023424)&&(Ro=4194304)):t=1);var n=Ce();e=Dt(e,t),e!==null&&(xo(e,t,n),De(e,n))}function h0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Pp(e,n)}function m0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),Pp(e,n)}var Np;Np=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Fe.current)Ne=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ne=!1,n0(e,t,n);Ne=!!(e.flags&131072)}else Ne=!1,J&&t.flags&1048576&&Mf(t,Pi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;oi(e,t),e=t.pendingProps;var o=ir(t,ye.current);tr(t,n),o=Ws(null,t,r,e,o,n);var i=Bs();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Me(r)?(i=!0,Ei(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ls(t),o.updater=qi,t.stateNode=o,o._reactInternals=t,bl(t,r,e,n),t=Ll(null,t,r,!0,i,n)):(t.tag=0,J&&i&&js(t),ke(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(oi(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=v0(r),e=qe(r,e),o){case 0:t=Tl(null,t,r,e,n);break e;case 1:t=Ec(null,t,r,e,n);break e;case 11:t=Sc(null,t,r,e,n);break e;case 14:t=Cc(null,t,r,qe(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:qe(r,o),Tl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:qe(r,o),Ec(e,t,r,o,n);case 3:e:{if(cp(t),e===null)throw Error(j(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Tf(e,t),Fi(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=ur(Error(j(423)),t),t=_c(e,t,r,n,o);break e}else if(r!==o){o=ur(Error(j(424)),t),t=_c(e,t,r,n,o);break e}else for(Re=Jt(t.stateNode.containerInfo.firstChild),ze=t,J=!0,et=null,n=If(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ar(),r===o){t=bt(e,t,n);break e}ke(e,t,r,n)}t=t.child}return t;case 5:return $f(t),e===null&&Fl(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,El(r,o)?a=null:i!==null&&El(r,i)&&(t.flags|=32),up(e,t),ke(e,t,a,n),t.child;case 6:return e===null&&Fl(t),null;case 13:return dp(e,t,n);case 4:return Rs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=lr(t,null,r,n):ke(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:qe(r,o),Sc(e,t,r,o,n);case 7:return ke(e,t,t.pendingProps,n),t.child;case 8:return ke(e,t,t.pendingProps.children,n),t.child;case 12:return ke(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,H(Ni,r._currentValue),r._currentValue=a,i!==null)if(it(i.value,a)){if(i.children===o.children&&!Fe.current){t=bt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=jt(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Ml(i.return,n,t),l.lanes|=n;break}s=s.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(j(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Ml(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}ke(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,tr(t,n),o=He(o),r=r(o),t.flags|=1,ke(e,t,r,n),t.child;case 14:return r=t.type,o=qe(r,t.pendingProps),o=qe(r.type,o),Cc(e,t,r,o,n);case 15:return lp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:qe(r,o),oi(e,t),t.tag=1,Me(r)?(e=!0,Ei(t)):e=!1,tr(t,n),Rf(t,r,o),bl(t,r,o,n),Ll(null,t,r,!0,e,n);case 19:return fp(e,t,n);case 22:return sp(e,t,n)}throw Error(j(156,t.tag))};function jp(e,t){return Zd(e,t)}function g0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ve(e,t,n,r){return new g0(e,t,n,r)}function Js(e){return e=e.prototype,!(!e||!e.isReactComponent)}function v0(e){if(typeof e=="function")return Js(e)?1:0;if(e!=null){if(e=e.$$typeof,e===gs)return 11;if(e===vs)return 14}return 2}function tn(e,t){var n=e.alternate;return n===null?(n=Ve(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function li(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")Js(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case $n:return Cn(n.children,o,i,t);case ms:a=8,o|=8;break;case nl:return e=Ve(12,n,t,o|2),e.elementType=nl,e.lanes=i,e;case rl:return e=Ve(13,n,t,o),e.elementType=rl,e.lanes=i,e;case ol:return e=Ve(19,n,t,o),e.elementType=ol,e.lanes=i,e;case Rd:return na(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Td:a=10;break e;case Ld:a=9;break e;case gs:a=11;break e;case vs:a=14;break e;case Bt:a=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=Ve(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Cn(e,t,n,r){return e=Ve(7,e,r,t),e.lanes=n,e}function na(e,t,n,r){return e=Ve(22,e,r,t),e.elementType=Rd,e.lanes=n,e.stateNode={isHidden:!1},e}function Wa(e,t,n){return e=Ve(6,e,null,t),e.lanes=n,e}function Ba(e,t,n){return t=Ve(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function y0(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ka(0),this.expirationTimes=ka(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ka(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function qs(e,t,n,r,o,i,a,l,s){return e=new y0(e,t,n,l,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ve(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ls(i),e}function x0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:In,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Fp(e){if(!e)return an;e=e._reactInternals;e:{if(bn(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(Me(n))return jf(e,n,t)}return t}function Mp(e,t,n,r,o,i,a,l,s){return e=qs(n,r,!0,e,o,i,a,l,s),e.context=Fp(null),n=e.current,r=Ce(),o=en(n),i=jt(r,o),i.callback=t??null,qt(n,i,o),e.current.lanes=o,xo(e,o,r),De(e,r),e}function ra(e,t,n,r){var o=t.current,i=Ce(),a=en(o);return n=Fp(n),t.context===null?t.context=n:t.pendingContext=n,t=jt(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=qt(o,t,a),e!==null&&(rt(e,o,a,i),ti(e,o,a)),a}function zi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Lc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Zs(e,t){Lc(e,t),(e=e.alternate)&&Lc(e,t)}function w0(){return null}var Dp=typeof reportError=="function"?reportError:function(e){console.error(e)};function eu(e){this._internalRoot=e}oa.prototype.render=eu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));ra(e,t,null,null)};oa.prototype.unmount=eu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Fn(function(){ra(null,e,null,null)}),t[Mt]=null}};function oa(e){this._internalRoot=e}oa.prototype.unstable_scheduleHydration=function(e){if(e){var t=lf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ut.length&&t!==0&&t<Ut[n].priority;n++);Ut.splice(n,0,e),n===0&&uf(e)}};function tu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ia(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Rc(){}function k0(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=zi(a);i.call(u)}}var a=Mp(t,r,e,0,null,!1,!1,"",Rc);return e._reactRootContainer=a,e[Mt]=a.current,ro(e.nodeType===8?e.parentNode:e),Fn(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=zi(s);l.call(u)}}var s=qs(e,0,!1,null,null,!1,!1,"",Rc);return e._reactRootContainer=s,e[Mt]=s.current,ro(e.nodeType===8?e.parentNode:e),Fn(function(){ra(t,s,n,r)}),s}function aa(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var l=o;o=function(){var s=zi(a);l.call(s)}}ra(t,a,e,o)}else a=k0(n,t,e,o,r);return zi(a)}of=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Rr(t.pendingLanes);n!==0&&(ws(t,n|1),De(t,ne()),!($&6)&&(cr=ne()+500,un()))}break;case 13:Fn(function(){var r=Dt(e,1);if(r!==null){var o=Ce();rt(r,e,1,o)}}),Zs(e,1)}};ks=function(e){if(e.tag===13){var t=Dt(e,134217728);if(t!==null){var n=Ce();rt(t,e,134217728,n)}Zs(e,134217728)}};af=function(e){if(e.tag===13){var t=en(e),n=Dt(e,t);if(n!==null){var r=Ce();rt(n,e,t,r)}Zs(e,t)}};lf=function(){return V};sf=function(e,t){var n=V;try{return V=e,t()}finally{V=n}};hl=function(e,t,n){switch(t){case"input":if(ll(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Xi(r);if(!o)throw Error(j(90));Id(r),ll(r,o)}}}break;case"textarea":Wd(e,n);break;case"select":t=n.value,t!=null&&Jn(e,!!n.multiple,t,!1)}};Gd=Qs;Qd=Fn;var S0={usingClientEntryPoint:!1,Events:[ko,Un,Xi,Yd,Hd,Qs]},br={findFiberByHostInstance:yn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},C0={bundleType:br.bundleType,version:br.version,rendererPackageName:br.rendererPackageName,rendererConfig:br.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ot.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Jd(e),e===null?null:e.stateNode},findFiberByHostInstance:br.findFiberByHostInstance||w0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Go=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Go.isDisabled&&Go.supportsFiber)try{Hi=Go.inject(C0),gt=Go}catch{}}We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=S0;We.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tu(t))throw Error(j(200));return x0(e,t,null,n)};We.createRoot=function(e,t){if(!tu(e))throw Error(j(299));var n=!1,r="",o=Dp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=qs(e,1,!1,null,null,n,!1,r,o),e[Mt]=t.current,ro(e.nodeType===8?e.parentNode:e),new eu(t)};We.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=Jd(t),e=e===null?null:e.stateNode,e};We.flushSync=function(e){return Fn(e)};We.hydrate=function(e,t,n){if(!ia(t))throw Error(j(200));return aa(null,e,t,!0,n)};We.hydrateRoot=function(e,t,n){if(!tu(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=Dp;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Mp(t,null,e,1,n??null,o,!1,i,a),e[Mt]=t.current,ro(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new oa(t)};We.render=function(e,t,n){if(!ia(t))throw Error(j(200));return aa(null,e,t,!1,n)};We.unmountComponentAtNode=function(e){if(!ia(e))throw Error(j(40));return e._reactRootContainer?(Fn(function(){aa(null,null,e,!1,function(){e._reactRootContainer=null,e[Mt]=null})}),!0):!1};We.unstable_batchedUpdates=Qs;We.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ia(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return aa(e,t,n,!1,r)};We.version="18.2.0-next-9e3b772b8-20220608";function bp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bp)}catch(e){console.error(e)}}bp(),Fd.exports=We;var E0=Fd.exports,zc=E0;el.createRoot=zc.createRoot,el.hydrateRoot=zc.hydrateRoot;/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function po(){return po=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},po.apply(this,arguments)}var Gt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Gt||(Gt={}));const Ic="popstate";function _0(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:a,hash:l}=r.location;return Gl("",{pathname:i,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Ii(o)}return N0(t,n,null,e)}function re(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Op(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function P0(){return Math.random().toString(36).substr(2,8)}function $c(e,t){return{usr:e.state,key:e.key,idx:t}}function Gl(e,t,n,r){return n===void 0&&(n=null),po({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?wr(t):t,{state:n,key:t&&t.key||r||P0()})}function Ii(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function wr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function N0(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,l=Gt.Pop,s=null,u=c();u==null&&(u=0,a.replaceState(po({},a.state,{idx:u}),""));function c(){return(a.state||{idx:null}).idx}function f(){l=Gt.Pop;let k=c(),m=k==null?null:k-u;u=k,s&&s({action:l,location:x.location,delta:m})}function h(k,m){l=Gt.Push;let p=Gl(x.location,k,m);u=c()+1;let g=$c(p,u),w=x.createHref(p);try{a.pushState(g,"",w)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;o.location.assign(w)}i&&s&&s({action:l,location:x.location,delta:1})}function v(k,m){l=Gt.Replace;let p=Gl(x.location,k,m);u=c();let g=$c(p,u),w=x.createHref(p);a.replaceState(g,"",w),i&&s&&s({action:l,location:x.location,delta:0})}function y(k){let m=o.location.origin!=="null"?o.location.origin:o.location.href,p=typeof k=="string"?k:Ii(k);return p=p.replace(/ $/,"%20"),re(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let x={get action(){return l},get location(){return e(o,a)},listen(k){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(Ic,f),s=k,()=>{o.removeEventListener(Ic,f),s=null}},createHref(k){return t(o,k)},createURL:y,encodeLocation(k){let m=y(k);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:v,go(k){return a.go(k)}};return x}var Wc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Wc||(Wc={}));function j0(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?wr(t):t,o=nu(r.pathname||"/",n);if(o==null)return null;let i=Tp(e);F0(i);let a=null;for(let l=0;a==null&&l<i.length;++l){let s=B0(o);a=I0(i[l],s)}return a}function Tp(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,a,l)=>{let s={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};s.relativePath.startsWith("/")&&(re(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=nn([r,s.relativePath]),c=n.concat(s);i.children&&i.children.length>0&&(re(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Tp(i.children,t,c,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:R0(u,i.index),routesMeta:c})};return e.forEach((i,a)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))o(i,a);else for(let s of Lp(i.path))o(i,a,s)}),t}function Lp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=Lp(r.join("/")),l=[];return l.push(...a.map(s=>s===""?i:[i,s].join("/"))),o&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function F0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:z0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const M0=/^:[\w-]+$/,D0=3,b0=2,O0=1,T0=10,L0=-2,Bc=e=>e==="*";function R0(e,t){let n=e.split("/"),r=n.length;return n.some(Bc)&&(r+=L0),t&&(r+=b0),n.filter(o=>!Bc(o)).reduce((o,i)=>o+(M0.test(i)?D0:i===""?O0:T0),r)}function z0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function I0(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",c=$0({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!c)return null;Object.assign(r,c.params);let f=l.route;i.push({params:r,pathname:nn([o,c.pathname]),pathnameBase:Y0(nn([o,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(o=nn([o,c.pathnameBase]))}return i}function $0(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=W0(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((u,c,f)=>{let{paramName:h,isOptional:v}=c;if(h==="*"){let x=l[f]||"";a=i.slice(0,i.length-x.length).replace(/(.)\/+$/,"$1")}const y=l[f];return v&&!y?u[h]=void 0:u[h]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:a,pattern:e}}function W0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Op(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,s)=>(r.push({paramName:l,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function B0(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Op(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function nu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function A0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?wr(e):e;return{pathname:n?n.startsWith("/")?n:U0(n,t):t,search:H0(r),hash:G0(o)}}function U0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Aa(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function V0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ru(e,t){let n=V0(e);return t?n.map((r,o)=>o===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ou(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=wr(e):(o=po({},e),re(!o.pathname||!o.pathname.includes("?"),Aa("?","pathname","search",o)),re(!o.pathname||!o.pathname.includes("#"),Aa("#","pathname","hash",o)),re(!o.search||!o.search.includes("#"),Aa("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,l;if(a==null)l=n;else{let f=t.length-1;if(!r&&a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),f-=1;o.pathname=h.join("/")}l=f>=0?t[f]:"/"}let s=A0(o,l),u=a&&a!=="/"&&a.endsWith("/"),c=(i||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||c)&&(s.pathname+="/"),s}const nn=e=>e.join("/").replace(/\/\/+/g,"/"),Y0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),H0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,G0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Q0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Rp=["post","put","patch","delete"];new Set(Rp);const K0=["get",...Rp];new Set(K0);/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ho(){return ho=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ho.apply(this,arguments)}const iu=S.createContext(null),X0=S.createContext(null),cn=S.createContext(null),la=S.createContext(null),yt=S.createContext({outlet:null,matches:[],isDataRoute:!1}),zp=S.createContext(null);function J0(e,t){let{relative:n}=t===void 0?{}:t;kr()||re(!1);let{basename:r,navigator:o}=S.useContext(cn),{hash:i,pathname:a,search:l}=$p(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:nn([r,a])),o.createHref({pathname:s,search:l,hash:i})}function kr(){return S.useContext(la)!=null}function Co(){return kr()||re(!1),S.useContext(la).location}function Ip(e){S.useContext(cn).static||S.useLayoutEffect(e)}function Tt(){let{isDataRoute:e}=S.useContext(yt);return e?pv():q0()}function q0(){kr()||re(!1);let e=S.useContext(iu),{basename:t,future:n,navigator:r}=S.useContext(cn),{matches:o}=S.useContext(yt),{pathname:i}=Co(),a=JSON.stringify(ru(o,n.v7_relativeSplatPath)),l=S.useRef(!1);return Ip(()=>{l.current=!0}),S.useCallback(function(u,c){if(c===void 0&&(c={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let f=ou(u,JSON.parse(a),i,c.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:nn([t,f.pathname])),(c.replace?r.replace:r.push)(f,c.state,c)},[t,r,a,i,e])}const Z0=S.createContext(null);function ev(e){let t=S.useContext(yt).outlet;return t&&S.createElement(Z0.Provider,{value:e},t)}function tv(){let{matches:e}=S.useContext(yt),t=e[e.length-1];return t?t.params:{}}function $p(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=S.useContext(cn),{matches:o}=S.useContext(yt),{pathname:i}=Co(),a=JSON.stringify(ru(o,r.v7_relativeSplatPath));return S.useMemo(()=>ou(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function nv(e,t){return rv(e,t)}function rv(e,t,n,r){kr()||re(!1);let{navigator:o}=S.useContext(cn),{matches:i}=S.useContext(yt),a=i[i.length-1],l=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let u=Co(),c;if(t){var f;let k=typeof t=="string"?wr(t):t;s==="/"||(f=k.pathname)!=null&&f.startsWith(s)||re(!1),c=k}else c=u;let h=c.pathname||"/",v=h;if(s!=="/"){let k=s.replace(/^\//,"").split("/");v="/"+h.replace(/^\//,"").split("/").slice(k.length).join("/")}let y=j0(e,{pathname:v}),x=sv(y&&y.map(k=>Object.assign({},k,{params:Object.assign({},l,k.params),pathname:nn([s,o.encodeLocation?o.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?s:nn([s,o.encodeLocation?o.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),i,n,r);return t&&x?S.createElement(la.Provider,{value:{location:ho({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Gt.Pop}},x):x}function ov(){let e=fv(),t=Q0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:o},n):null,null)}const iv=S.createElement(ov,null);class av extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?S.createElement(yt.Provider,{value:this.props.routeContext},S.createElement(zp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function lv(e){let{routeContext:t,match:n,children:r}=e,o=S.useContext(iu);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(yt.Provider,{value:t},r)}function sv(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let a=e,l=(o=n)==null?void 0:o.errors;if(l!=null){let c=a.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);c>=0||re(!1),a=a.slice(0,Math.min(a.length,c+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<a.length;c++){let f=a[c];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=c),f.route.id){let{loaderData:h,errors:v}=n,y=f.route.loader&&h[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||y){s=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((c,f,h)=>{let v,y=!1,x=null,k=null;n&&(v=l&&f.route.id?l[f.route.id]:void 0,x=f.route.errorElement||iv,s&&(u<0&&h===0?(y=!0,k=null):u===h&&(y=!0,k=f.route.hydrateFallbackElement||null)));let m=t.concat(a.slice(0,h+1)),p=()=>{let g;return v?g=x:y?g=k:f.route.Component?g=S.createElement(f.route.Component,null):f.route.element?g=f.route.element:g=c,S.createElement(lv,{match:f,routeContext:{outlet:c,matches:m,isDataRoute:n!=null},children:g})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?S.createElement(av,{location:n.location,revalidation:n.revalidation,component:x,error:v,children:p(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):p()},null)}var Wp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Wp||{}),$i=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}($i||{});function uv(e){let t=S.useContext(iu);return t||re(!1),t}function cv(e){let t=S.useContext(X0);return t||re(!1),t}function dv(e){let t=S.useContext(yt);return t||re(!1),t}function Bp(e){let t=dv(),n=t.matches[t.matches.length-1];return n.route.id||re(!1),n.route.id}function fv(){var e;let t=S.useContext(zp),n=cv($i.UseRouteError),r=Bp($i.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function pv(){let{router:e}=uv(Wp.UseNavigateStable),t=Bp($i.UseNavigateStable),n=S.useRef(!1);return Ip(()=>{n.current=!0}),S.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,ho({fromRouteId:t},i)))},[e,t])}function hv(e){let{to:t,replace:n,state:r,relative:o}=e;kr()||re(!1);let{future:i,static:a}=S.useContext(cn),{matches:l}=S.useContext(yt),{pathname:s}=Co(),u=Tt(),c=ou(t,ru(l,i.v7_relativeSplatPath),s,o==="path"),f=JSON.stringify(c);return S.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:o}),[u,f,o,n,r]),null}function au(e){return ev(e.context)}function ut(e){re(!1)}function mv(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Gt.Pop,navigator:i,static:a=!1,future:l}=e;kr()&&re(!1);let s=t.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:s,navigator:i,static:a,future:ho({v7_relativeSplatPath:!1},l)}),[s,l,i,a]);typeof r=="string"&&(r=wr(r));let{pathname:c="/",search:f="",hash:h="",state:v=null,key:y="default"}=r,x=S.useMemo(()=>{let k=nu(c,s);return k==null?null:{location:{pathname:k,search:f,hash:h,state:v,key:y},navigationType:o}},[s,c,f,h,v,y,o]);return x==null?null:S.createElement(cn.Provider,{value:u},S.createElement(la.Provider,{children:n,value:x}))}function gv(e){let{children:t,location:n}=e;return nv(Ql(t),n)}new Promise(()=>{});function Ql(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,o)=>{if(!S.isValidElement(r))return;let i=[...t,o];if(r.type===S.Fragment){n.push.apply(n,Ql(r.props.children,i));return}r.type!==ut&&re(!1),!r.props.index||!r.props.children||re(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Ql(r.props.children,i)),n.push(a)}),n}/**
 * React Router DOM v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Kl(){return Kl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Kl.apply(this,arguments)}function vv(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function yv(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function xv(e,t){return e.button===0&&(!t||t==="_self")&&!yv(e)}const wv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],kv="6";try{window.__reactRouterVersion=kv}catch{}const Sv="startTransition",Ac=hm[Sv];function Cv(e){let{basename:t,children:n,future:r,window:o}=e,i=S.useRef();i.current==null&&(i.current=_0({window:o,v5Compat:!0}));let a=i.current,[l,s]=S.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},c=S.useCallback(f=>{u&&Ac?Ac(()=>s(f)):s(f)},[s,u]);return S.useLayoutEffect(()=>a.listen(c),[a,c]),S.createElement(mv,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}const Ev=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_v=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Eo=S.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:l,target:s,to:u,preventScrollReset:c,unstable_viewTransition:f}=t,h=vv(t,wv),{basename:v}=S.useContext(cn),y,x=!1;if(typeof u=="string"&&_v.test(u)&&(y=u,Ev))try{let g=new URL(window.location.href),w=u.startsWith("//")?new URL(g.protocol+u):new URL(u),P=nu(w.pathname,v);w.origin===g.origin&&P!=null?u=P+w.search+w.hash:x=!0}catch{}let k=J0(u,{relative:o}),m=Pv(u,{replace:a,state:l,target:s,preventScrollReset:c,relative:o,unstable_viewTransition:f});function p(g){r&&r(g),g.defaultPrevented||m(g)}return S.createElement("a",Kl({},h,{href:y||k,onClick:x||i?r:p,ref:n,target:s}))});var Uc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Uc||(Uc={}));var Vc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Vc||(Vc={}));function Pv(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:l}=t===void 0?{}:t,s=Tt(),u=Co(),c=$p(e,{relative:a});return S.useCallback(f=>{if(xv(f,n)){f.preventDefault();let h=r!==void 0?r:Ii(u)===Ii(c);s(e,{replace:h,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:l})}},[u,s,c,r,o,n,e,i,a,l])}var ve=function(){return ve=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ve.apply(this,arguments)};function mo(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var K="-ms-",Qr="-moz-",A="-webkit-",Ap="comm",sa="rule",lu="decl",Nv="@import",Up="@keyframes",jv="@layer",Vp=Math.abs,su=String.fromCharCode,Xl=Object.assign;function Fv(e,t){return ue(e,0)^45?(((t<<2^ue(e,0))<<2^ue(e,1))<<2^ue(e,2))<<2^ue(e,3):0}function Yp(e){return e.trim()}function Et(e,t){return(e=t.exec(e))?e[0]:e}function z(e,t,n){return e.replace(t,n)}function si(e,t,n){return e.indexOf(t,n)}function ue(e,t){return e.charCodeAt(t)|0}function dr(e,t,n){return e.slice(t,n)}function dt(e){return e.length}function Hp(e){return e.length}function Ir(e,t){return t.push(e),e}function Mv(e,t){return e.map(t).join("")}function Yc(e,t){return e.filter(function(n){return!Et(n,t)})}var ua=1,fr=1,Gp=0,Qe=0,oe=0,Sr="";function ca(e,t,n,r,o,i,a,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:ua,column:fr,length:a,return:"",siblings:l}}function Wt(e,t){return Xl(ca("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Rn(e){for(;e.root;)e=Wt(e.root,{children:[e]});Ir(e,e.siblings)}function Dv(){return oe}function bv(){return oe=Qe>0?ue(Sr,--Qe):0,fr--,oe===10&&(fr=1,ua--),oe}function ot(){return oe=Qe<Gp?ue(Sr,Qe++):0,fr++,oe===10&&(fr=1,ua++),oe}function En(){return ue(Sr,Qe)}function ui(){return Qe}function da(e,t){return dr(Sr,e,t)}function Jl(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ov(e){return ua=fr=1,Gp=dt(Sr=e),Qe=0,[]}function Tv(e){return Sr="",e}function Ua(e){return Yp(da(Qe-1,ql(e===91?e+2:e===40?e+1:e)))}function Lv(e){for(;(oe=En())&&oe<33;)ot();return Jl(e)>2||Jl(oe)>3?"":" "}function Rv(e,t){for(;--t&&ot()&&!(oe<48||oe>102||oe>57&&oe<65||oe>70&&oe<97););return da(e,ui()+(t<6&&En()==32&&ot()==32))}function ql(e){for(;ot();)switch(oe){case e:return Qe;case 34:case 39:e!==34&&e!==39&&ql(oe);break;case 40:e===41&&ql(e);break;case 92:ot();break}return Qe}function zv(e,t){for(;ot()&&e+oe!==57;)if(e+oe===84&&En()===47)break;return"/*"+da(t,Qe-1)+"*"+su(e===47?e:ot())}function Iv(e){for(;!Jl(En());)ot();return da(e,Qe)}function $v(e){return Tv(ci("",null,null,null,[""],e=Ov(e),0,[0],e))}function ci(e,t,n,r,o,i,a,l,s){for(var u=0,c=0,f=a,h=0,v=0,y=0,x=1,k=1,m=1,p=0,g="",w=o,P=i,N=r,_=g;k;)switch(y=p,p=ot()){case 40:if(y!=108&&ue(_,f-1)==58){si(_+=z(Ua(p),"&","&\f"),"&\f",Vp(u?l[u-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:_+=Ua(p);break;case 9:case 10:case 13:case 32:_+=Lv(y);break;case 92:_+=Rv(ui()-1,7);continue;case 47:switch(En()){case 42:case 47:Ir(Wv(zv(ot(),ui()),t,n,s),s);break;default:_+="/"}break;case 123*x:l[u++]=dt(_)*m;case 125*x:case 59:case 0:switch(p){case 0:case 125:k=0;case 59+c:m==-1&&(_=z(_,/\f/g,"")),v>0&&dt(_)-f&&Ir(v>32?Gc(_+";",r,n,f-1,s):Gc(z(_," ","")+";",r,n,f-2,s),s);break;case 59:_+=";";default:if(Ir(N=Hc(_,t,n,u,c,o,l,g,w=[],P=[],f,i),i),p===123)if(c===0)ci(_,t,N,N,w,i,f,l,P);else switch(h===99&&ue(_,3)===110?100:h){case 100:case 108:case 109:case 115:ci(e,N,N,r&&Ir(Hc(e,N,N,0,0,o,l,g,o,w=[],f,P),P),o,P,f,l,r?w:P);break;default:ci(_,N,N,N,[""],P,0,l,P)}}u=c=v=0,x=m=1,g=_="",f=a;break;case 58:f=1+dt(_),v=y;default:if(x<1){if(p==123)--x;else if(p==125&&x++==0&&bv()==125)continue}switch(_+=su(p),p*x){case 38:m=c>0?1:(_+="\f",-1);break;case 44:l[u++]=(dt(_)-1)*m,m=1;break;case 64:En()===45&&(_+=Ua(ot())),h=En(),c=f=dt(g=_+=Iv(ui())),p++;break;case 45:y===45&&dt(_)==2&&(x=0)}}return i}function Hc(e,t,n,r,o,i,a,l,s,u,c,f){for(var h=o-1,v=o===0?i:[""],y=Hp(v),x=0,k=0,m=0;x<r;++x)for(var p=0,g=dr(e,h+1,h=Vp(k=a[x])),w=e;p<y;++p)(w=Yp(k>0?v[p]+" "+g:z(g,/&\f/g,v[p])))&&(s[m++]=w);return ca(e,t,n,o===0?sa:l,s,u,c,f)}function Wv(e,t,n,r){return ca(e,t,n,Ap,su(Dv()),dr(e,2,-2),0,r)}function Gc(e,t,n,r,o){return ca(e,t,n,lu,dr(e,0,r),dr(e,r+1,-1),r,o)}function Qp(e,t,n){switch(Fv(e,t)){case 5103:return A+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return A+e+e;case 4789:return Qr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return A+e+Qr+e+K+e+e;case 5936:switch(ue(e,t+11)){case 114:return A+e+K+z(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return A+e+K+z(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return A+e+K+z(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return A+e+K+e+e;case 6165:return A+e+K+"flex-"+e+e;case 5187:return A+e+z(e,/(\w+).+(:[^]+)/,A+"box-$1$2"+K+"flex-$1$2")+e;case 5443:return A+e+K+"flex-item-"+z(e,/flex-|-self/g,"")+(Et(e,/flex-|baseline/)?"":K+"grid-row-"+z(e,/flex-|-self/g,""))+e;case 4675:return A+e+K+"flex-line-pack"+z(e,/align-content|flex-|-self/g,"")+e;case 5548:return A+e+K+z(e,"shrink","negative")+e;case 5292:return A+e+K+z(e,"basis","preferred-size")+e;case 6060:return A+"box-"+z(e,"-grow","")+A+e+K+z(e,"grow","positive")+e;case 4554:return A+z(e,/([^-])(transform)/g,"$1"+A+"$2")+e;case 6187:return z(z(z(e,/(zoom-|grab)/,A+"$1"),/(image-set)/,A+"$1"),e,"")+e;case 5495:case 3959:return z(e,/(image-set\([^]*)/,A+"$1$`$1");case 4968:return z(z(e,/(.+:)(flex-)?(.*)/,A+"box-pack:$3"+K+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+A+e+e;case 4200:if(!Et(e,/flex-|baseline/))return K+"grid-column-align"+dr(e,t)+e;break;case 2592:case 3360:return K+z(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,Et(r.props,/grid-\w+-end/)})?~si(e+(n=n[t].value),"span",0)?e:K+z(e,"-start","")+e+K+"grid-row-span:"+(~si(n,"span",0)?Et(n,/\d+/):+Et(n,/\d+/)-+Et(e,/\d+/))+";":K+z(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Et(r.props,/grid-\w+-start/)})?e:K+z(z(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return z(e,/(.+)-inline(.+)/,A+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(dt(e)-1-t>6)switch(ue(e,t+1)){case 109:if(ue(e,t+4)!==45)break;case 102:return z(e,/(.+:)(.+)-([^]+)/,"$1"+A+"$2-$3$1"+Qr+(ue(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~si(e,"stretch",0)?Qp(z(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return z(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,a,l,s,u){return K+o+":"+i+u+(a?K+o+"-span:"+(l?s:+s-+i)+u:"")+e});case 4949:if(ue(e,t+6)===121)return z(e,":",":"+A)+e;break;case 6444:switch(ue(e,ue(e,14)===45?18:11)){case 120:return z(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+A+(ue(e,14)===45?"inline-":"")+"box$3$1"+A+"$2$3$1"+K+"$2box$3")+e;case 100:return z(e,":",":"+K)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return z(e,"scroll-","scroll-snap-")+e}return e}function Wi(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Bv(e,t,n,r){switch(e.type){case jv:if(e.children.length)break;case Nv:case lu:return e.return=e.return||e.value;case Ap:return"";case Up:return e.return=e.value+"{"+Wi(e.children,r)+"}";case sa:if(!dt(e.value=e.props.join(",")))return""}return dt(n=Wi(e.children,r))?e.return=e.value+"{"+n+"}":""}function Av(e){var t=Hp(e);return function(n,r,o,i){for(var a="",l=0;l<t;l++)a+=e[l](n,r,o,i)||"";return a}}function Uv(e){return function(t){t.root||(t=t.return)&&e(t)}}function Vv(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case lu:e.return=Qp(e.value,e.length,n);return;case Up:return Wi([Wt(e,{value:z(e.value,"@","@"+A)})],r);case sa:if(e.length)return Mv(n=e.props,function(o){switch(Et(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Rn(Wt(e,{props:[z(o,/:(read-\w+)/,":"+Qr+"$1")]})),Rn(Wt(e,{props:[o]})),Xl(e,{props:Yc(n,r)});break;case"::placeholder":Rn(Wt(e,{props:[z(o,/:(plac\w+)/,":"+A+"input-$1")]})),Rn(Wt(e,{props:[z(o,/:(plac\w+)/,":"+Qr+"$1")]})),Rn(Wt(e,{props:[z(o,/:(plac\w+)/,K+"input-$1")]})),Rn(Wt(e,{props:[o]})),Xl(e,{props:Yc(n,r)});break}return""})}}var Yv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Te={},pr=typeof process<"u"&&Te!==void 0&&(Te.REACT_APP_SC_ATTR||Te.SC_ATTR)||"data-styled",Kp="active",Xp="data-styled-version",fa="6.1.9",uu=`/*!sc*/
`,cu=typeof window<"u"&&"HTMLElement"in window,Hv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Te!==void 0&&Te.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Te.REACT_APP_SC_DISABLE_SPEEDY!==""?Te.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Te.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Te!==void 0&&Te.SC_DISABLE_SPEEDY!==void 0&&Te.SC_DISABLE_SPEEDY!==""&&Te.SC_DISABLE_SPEEDY!=="false"&&Te.SC_DISABLE_SPEEDY),Gv={},pa=Object.freeze([]),hr=Object.freeze({});function Jp(e,t,n){return n===void 0&&(n=hr),e.theme!==n.theme&&e.theme||t||n.theme}var qp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Qv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Kv=/(^-|-$)/g;function Qc(e){return e.replace(Qv,"-").replace(Kv,"")}var Xv=/(a)(d)/gi,Qo=52,Kc=function(e){return String.fromCharCode(e+(e>25?39:97))};function Zl(e){var t,n="";for(t=Math.abs(e);t>Qo;t=t/Qo|0)n=Kc(t%Qo)+n;return(Kc(t%Qo)+n).replace(Xv,"$1-$2")}var Va,Zp=5381,Xn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},eh=function(e){return Xn(Zp,e)};function th(e){return Zl(eh(e)>>>0)}function Jv(e){return e.displayName||e.name||"Component"}function Ya(e){return typeof e=="string"&&!0}var nh=typeof Symbol=="function"&&Symbol.for,rh=nh?Symbol.for("react.memo"):60115,qv=nh?Symbol.for("react.forward_ref"):60112,Zv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},e1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},oh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},t1=((Va={})[qv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Va[rh]=oh,Va);function Xc(e){return("type"in(t=e)&&t.type.$$typeof)===rh?oh:"$$typeof"in e?t1[e.$$typeof]:Zv;var t}var n1=Object.defineProperty,r1=Object.getOwnPropertyNames,Jc=Object.getOwnPropertySymbols,o1=Object.getOwnPropertyDescriptor,i1=Object.getPrototypeOf,qc=Object.prototype;function ih(e,t,n){if(typeof t!="string"){if(qc){var r=i1(t);r&&r!==qc&&ih(e,r,n)}var o=r1(t);Jc&&(o=o.concat(Jc(t)));for(var i=Xc(e),a=Xc(t),l=0;l<o.length;++l){var s=o[l];if(!(s in e1||n&&n[s]||a&&s in a||i&&s in i)){var u=o1(t,s);try{n1(e,s,u)}catch{}}}}return e}function mr(e){return typeof e=="function"}function du(e){return typeof e=="object"&&"styledComponentId"in e}function kn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function es(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function go(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ts(e,t,n){if(n===void 0&&(n=!1),!n&&!go(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ts(e[r],t[r]);else if(go(t))for(var r in t)e[r]=ts(e[r],t[r]);return e}function fu(e,t){Object.defineProperty(e,"toString",{value:t})}function _o(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var a1=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw _o(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var a=o;a<i;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),s=(a=0,n.length);a<s;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,a=o;a<i;a++)n+="".concat(this.tag.getRule(a)).concat(uu);return n},e}(),di=new Map,Bi=new Map,fi=1,Ko=function(e){if(di.has(e))return di.get(e);for(;Bi.has(fi);)fi++;var t=fi++;return di.set(e,t),Bi.set(t,e),t},l1=function(e,t){fi=t+1,di.set(e,t),Bi.set(t,e)},s1="style[".concat(pr,"][").concat(Xp,'="').concat(fa,'"]'),u1=new RegExp("^".concat(pr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),c1=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},d1=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(uu),o=[],i=0,a=r.length;i<a;i++){var l=r[i].trim();if(l){var s=l.match(u1);if(s){var u=0|parseInt(s[1],10),c=s[2];u!==0&&(l1(c,u),c1(e,c,s[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(l)}}};function f1(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var ah=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(l){var s=Array.from(l.querySelectorAll("style[".concat(pr,"]")));return s[s.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(pr,Kp),r.setAttribute(Xp,fa);var a=f1();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},p1=function(){function e(t){this.element=ah(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var a=r[o];if(a.ownerNode===n)return a}throw _o(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),h1=function(){function e(t){this.element=ah(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),m1=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Zc=cu,g1={isServer:!cu,useCSSOMInjection:!Hv},Ai=function(){function e(t,n,r){t===void 0&&(t=hr),n===void 0&&(n={});var o=this;this.options=ve(ve({},g1),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&cu&&Zc&&(Zc=!1,function(i){for(var a=document.querySelectorAll(s1),l=0,s=a.length;l<s;l++){var u=a[l];u&&u.getAttribute(pr)!==Kp&&(d1(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),fu(this,function(){return function(i){for(var a=i.getTag(),l=a.length,s="",u=function(f){var h=function(m){return Bi.get(m)}(f);if(h===void 0)return"continue";var v=i.names.get(h),y=a.getGroup(f);if(v===void 0||y.length===0)return"continue";var x="".concat(pr,".g").concat(f,'[id="').concat(h,'"]'),k="";v!==void 0&&v.forEach(function(m){m.length>0&&(k+="".concat(m,","))}),s+="".concat(y).concat(x,'{content:"').concat(k,'"}').concat(uu)},c=0;c<l;c++)u(c);return s}(o)})}return e.registerId=function(t){return Ko(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ve(ve({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new m1(o):r?new p1(o):new h1(o)}(this.options),new a1(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ko(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ko(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ko(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),v1=/&/g,y1=/^\s*\/\/.*$/gm;function lh(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=lh(n.children,t)),n})}function x1(e){var t,n,r,o=hr,i=o.options,a=i===void 0?hr:i,l=o.plugins,s=l===void 0?pa:l,u=function(h,v,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):h},c=s.slice();c.push(function(h){h.type===sa&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(v1,n).replace(r,u))}),a.prefix&&c.push(Vv),c.push(Bv);var f=function(h,v,y,x){v===void 0&&(v=""),y===void 0&&(y=""),x===void 0&&(x="&"),t=x,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var k=h.replace(y1,""),m=$v(y||v?"".concat(y," ").concat(v," { ").concat(k," }"):k);a.namespace&&(m=lh(m,a.namespace));var p=[];return Wi(m,Av(c.concat(Uv(function(g){return p.push(g)})))),p};return f.hash=s.length?s.reduce(function(h,v){return v.name||_o(15),Xn(h,v.name)},Zp).toString():"",f}var w1=new Ai,ns=x1(),sh=tt.createContext({shouldForwardProp:void 0,styleSheet:w1,stylis:ns});sh.Consumer;tt.createContext(void 0);function rs(){return S.useContext(sh)}var k1=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=ns);var a=r.name+i.hash;o.hasNameForId(r.id,a)||o.insertRules(r.id,a,i(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,fu(this,function(){throw _o(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=ns),this.name+t.hash},e}(),S1=function(e){return e>="A"&&e<="Z"};function ed(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;S1(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var uh=function(e){return e==null||e===!1||e===""},ch=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!uh(i)&&(Array.isArray(i)&&i.isCss||mr(i)?r.push("".concat(ed(o),":"),i,";"):go(i)?r.push.apply(r,mo(mo(["".concat(o," {")],ch(i),!1),["}"],!1)):r.push("".concat(ed(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Yv||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function rn(e,t,n,r){if(uh(e))return[];if(du(e))return[".".concat(e.styledComponentId)];if(mr(e)){if(!mr(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return rn(o,t,n,r)}var i;return e instanceof k1?n?(e.inject(n,r),[e.getName(r)]):[e]:go(e)?ch(e):Array.isArray(e)?Array.prototype.concat.apply(pa,e.map(function(a){return rn(a,t,n,r)})):[e.toString()]}function dh(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(mr(n)&&!du(n))return!1}return!0}var C1=eh(fa),E1=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&dh(t),this.componentId=n,this.baseHash=Xn(C1,n),this.baseStyle=r,Ai.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=kn(o,this.staticRulesId);else{var i=es(rn(this.rules,t,n,r)),a=Zl(Xn(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(i,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}o=kn(o,a),this.staticRulesId=a}else{for(var s=Xn(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var f=this.rules[c];if(typeof f=="string")u+=f;else if(f){var h=es(rn(f,t,n,r));s=Xn(s,h+c),u+=h}}if(u){var v=Zl(s>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(u,".".concat(v),void 0,this.componentId)),o=kn(o,v)}}return o},e}(),pu=tt.createContext(void 0);pu.Consumer;var Ha={};function _1(e,t,n){var r=du(e),o=e,i=!Ya(e),a=t.attrs,l=a===void 0?pa:a,s=t.componentId,u=s===void 0?function(w,P){var N=typeof w!="string"?"sc":Qc(w);Ha[N]=(Ha[N]||0)+1;var _="".concat(N,"-").concat(th(fa+N+Ha[N]));return P?"".concat(P,"-").concat(_):_}(t.displayName,t.parentComponentId):s,c=t.displayName,f=c===void 0?function(w){return Ya(w)?"styled.".concat(w):"Styled(".concat(Jv(w),")")}(e):c,h=t.displayName&&t.componentId?"".concat(Qc(t.displayName),"-").concat(t.componentId):t.componentId||u,v=r&&o.attrs?o.attrs.concat(l).filter(Boolean):l,y=t.shouldForwardProp;if(r&&o.shouldForwardProp){var x=o.shouldForwardProp;if(t.shouldForwardProp){var k=t.shouldForwardProp;y=function(w,P){return x(w,P)&&k(w,P)}}else y=x}var m=new E1(n,h,r?o.componentStyle:void 0);function p(w,P){return function(N,_,M){var D=N.attrs,R=N.componentStyle,xe=N.defaultProps,xt=N.foldedComponentIds,wt=N.styledComponentId,Tn=N.target,Cr=tt.useContext(pu),fn=rs(),b=N.shouldForwardProp||fn.shouldForwardProp,E=Jp(_,Cr,xe)||hr,O=function(Rt,Oe,kt){for(var Er,hn=ve(ve({},Oe),{className:void 0,theme:kt}),ma=0;ma<Rt.length;ma+=1){var Mo=mr(Er=Rt[ma])?Er(hn):Er;for(var zt in Mo)hn[zt]=zt==="className"?kn(hn[zt],Mo[zt]):zt==="style"?ve(ve({},hn[zt]),Mo[zt]):Mo[zt]}return Oe.className&&(hn.className=kn(hn.className,Oe.className)),hn}(D,_,E),L=O.as||Tn,B={};for(var Y in O)O[Y]===void 0||Y[0]==="$"||Y==="as"||Y==="theme"&&O.theme===E||(Y==="forwardedAs"?B.as=O.forwardedAs:b&&!b(Y,L)||(B[Y]=O[Y]));var pn=function(Rt,Oe){var kt=rs(),Er=Rt.generateAndInjectStyles(Oe,kt.styleSheet,kt.stylis);return Er}(R,O),Xe=kn(xt,wt);return pn&&(Xe+=" "+pn),O.className&&(Xe+=" "+O.className),B[Ya(L)&&!qp.has(L)?"class":"className"]=Xe,B.ref=M,S.createElement(L,B)}(g,w,P)}p.displayName=f;var g=tt.forwardRef(p);return g.attrs=v,g.componentStyle=m,g.displayName=f,g.shouldForwardProp=y,g.foldedComponentIds=r?kn(o.foldedComponentIds,o.styledComponentId):"",g.styledComponentId=h,g.target=r?o.target:e,Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(P){for(var N=[],_=1;_<arguments.length;_++)N[_-1]=arguments[_];for(var M=0,D=N;M<D.length;M++)ts(P,D[M],!0);return P}({},o.defaultProps,w):w}}),fu(g,function(){return".".concat(g.styledComponentId)}),i&&ih(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function td(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var nd=function(e){return Object.assign(e,{isCss:!0})};function fh(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(mr(e)||go(e))return nd(rn(td(pa,mo([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?rn(r):nd(rn(td(r,t)))}function os(e,t,n){if(n===void 0&&(n=hr),!t)throw _o(1,t);var r=function(o){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,n,fh.apply(void 0,mo([o],i,!1)))};return r.attrs=function(o){return os(e,t,ve(ve({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return os(e,t,ve(ve({},n),o))},r}var ph=function(e){return os(_1,e)},C=ph;qp.forEach(function(e){C[e]=ph(e)});var P1=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=dh(t),Ai.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(es(rn(this.rules,n,r,o)),""),a=this.componentId+t;r.insertRules(a,a,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&Ai.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function N1(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=fh.apply(void 0,mo([e],t,!1)),o="sc-global-".concat(th(JSON.stringify(r))),i=new P1(r,o),a=function(s){var u=rs(),c=tt.useContext(pu),f=tt.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&l(f,s,u.styleSheet,c,u.stylis),tt.useLayoutEffect(function(){if(!u.styleSheet.server)return l(f,s,u.styleSheet,c,u.stylis),function(){return i.removeStyles(f,u.styleSheet)}},[f,s,u.styleSheet,c,u.stylis]),null};function l(s,u,c,f,h){if(i.isStatic)i.renderStyles(s,Gv,c,h);else{var v=ve(ve({},u),{theme:Jp(u,f,a.defaultProps)});i.renderStyles(s,v,c,h)}}return tt.memo(a)}const j1=N1`
    * {
        margin: 0;
        padding: 0;    
        box-sizing: border-box;
    }

    *:before,
    *:after {
        box-sizing: border-box;
    }

    a,
    a:visited {
        text-decoration: none;
        cursor: pointer;
    }

    button,
    ._btn {
        cursor: pointer;
        outline: none;
    }

    ul li {
        list-style: none;
    }

    html,
    body {
        width: 100%;
        height: 100%;
        font-family: "Roboto", Arial, Helvetica, sans-serif;
        color: #000000;
    }
`,F1=C.button` 
    border-radius: 4px;
    background-color: #565EEF;
    color: #FFFFFF;
    border: none;
    font-size: 14px;
    line-height: 1;
    font-weight: 500;
    margin-right: 20px;
    z-index: 3;
    position: fixed;
    left: 16px;
    bottom: 30px;
    top: auto;
    width: calc(100vw - 32px);
    height: 40px;
    border-radius: 4px;
    margin-right: 0;

    @media screen and (max-width: 495px) {
        z-index: 3;
        position: fixed;
        left: 16px;
        bottom: 30px;
        top: auto;
        width: calc(100vw - 32px);
        height: 40px;
        border-radius: 4px;
        margin-right: 0;
    }

    &:hover {
        background-color: #33399b;
    }

    & a {
        color: #FFFFFF;
    }
`,M1=C.header`
    width: 100%;
    margin: 0 auto;
    background-color: #FFFFFF;
`,D1=C.img`
    width: 85px;
    height: 60px;
`,b1=C.div`
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;
`,O1=C.div`
    height: 70px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    position: relative;
    top: 0;
    left: 0;
    padding: 0 10px;
`,T1=C.nav`
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`,L1=C(F1)`
  position: static;
  width: 178px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 495px) {
    z-index: 3;
    position: fixed;
    left: 16px;
    bottom: 30px;
    top: auto;
    width: calc(100vw - 32px);
    height: 40px;
    border-radius: 4px;
    margin-right: 0;
  }
`,R1=C(Eo)`
  width: 100%;
  height: 100%;
  align-content: center;
`,z1=C.a`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: #565EEF;
  text-decoration: none;

  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid #565EEF;
    border-bottom: 1.9px solid #565EEF;
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
  }

  &:hover {
    color: #33399b;
  }

  &:hover::after {
    border-left-color: #33399b;
    border-bottom-color: #33399b;
  }
`;C.div`
  display: ${e=>e.visible?"block":"none"};
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: #FFF;
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  padding: 34px;
  text-align: center;
  z-index: 2;

  &:target {
    display: block;
  }
`;C.p`
  color: #000;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`;C.p`
  color: #94A6BE;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`;C.button`
  width: 72px;
  height: 30px;
  background: transparent;
  color: #565EEF;
  border-radius: 4px;
  border: 1px solid #565EEF;

    &:hover {
        cursor: pointer;
        background-color: #33399b;
        color: #FFFFFF;

        a {
            color: #565EEF;
            text-decoration: none;
        }

        &:hover a {
            color: #FFFFFF;
        }
    }

    a {
        color: #565EEF;
        text-decoration: none;
    }
`;C.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;

  p {
    color: #000;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
  }

  input[type="checkbox"] {
    position: relative;
    width: 24px;
    height: 13px;
    border-radius: 100px;
    background: #EAEEF6;
    outline: none;
    appearance: none;
  }

  input[type="checkbox"]::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #94A6BE;
    transition: 0.5s;
  }

  input:checked[type="checkbox"]::before {
    left: 12px;
  }
`;const I1=C.div`
  display: none;
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: auto;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: #FFF;
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  padding: 34px;
  text-align: center;
  z-index: 2;

  &.visible {
    display: block;
  }
`,$1=C.p`
  color: #000;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`,W1=C.p`
  color: #94A6BE;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`,B1=C.button`
  width: 72px;
  height: 30px;
  background: transparent;
  color: #565EEF;
  border-radius: 4px;
  border: 1px solid #565EEF;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;

  &:hover {
    background-color: #33399b;
    color: #FFFFFF;

    a {
      color: #FFFFFF;
    }
  }

  a {
    color: #565EEF;
    text-decoration: none;
  }
`,A1=C(Eo)`
  width: 100%;
  height: 100%;
  align-content: center;
`;function U1(){try{return JSON.parse(localStorage.getItem("user"))}catch{return null}}const hu=S.createContext(null),V1=({children:e})=>{let t=Tt();const[n,r]=S.useState(U1);function o(a){r(a),t("/")}function i(){r(null),t("/login")}return S.useEffect(()=>{n?localStorage.setItem("user",JSON.stringify(n)):localStorage.removeItem("user")},[n]),d.jsx(hu.Provider,{value:{user:n,setUser:r,loginUser:o,logoutUser:i},children:e})},On=()=>S.useContext(hu),Y1=()=>{const[e,t]=S.useState(!1),{user:n}=On(),r=S.useRef(null),o=()=>{t(a=>!a)},i=a=>{r.current&&!r.current.contains(a.target)&&t(!1)};return S.useEffect(()=>(document.addEventListener("mousedown",i),()=>{document.removeEventListener("mousedown",i)}),[]),d.jsx(M1,{children:d.jsx(b1,{children:d.jsxs(O1,{children:[d.jsx("div",{className:"header__logo _show _light",children:d.jsx("a",{href:"",target:"_self",children:d.jsx(D1,{src:"/images/logo.svg",alt:"logo"})})}),d.jsxs(T1,{children:[d.jsx(L1,{id:"btnMainNew",children:d.jsx(R1,{to:"/newcard",children:"Создать новую задачу"})}),d.jsx(z1,{href:"#user-set-target",className:"header__user _hover02",onClick:o,children:n.name}),d.jsxs(I1,{ref:r,id:"user-set-target",className:e?"visible":"",children:[d.jsx($1,{children:n.name}),d.jsx(W1,{children:n.login}),d.jsx(B1,{type:"button",className:"_hover03",children:d.jsx(A1,{to:"/exit",children:"Выйти"})})]})]})]})})})},H1=["Без статуса","Нужно сделать","В работе","Тестирование","Готово"],G1=e=>e==="Web Design"?"_orange":e==="Copywriting"?"_purple":e==="Research"?"_green":"_gray",rd={_purple:{backgroundColor:"#e9d4ff",color:"#9a48f1"},_orange:{backgroundColor:"#ffe4c2",color:"#ff6d00"},_green:{backgroundColor:"#b4fdd1",color:"#06b16e"},_gray:{backgroundColor:"#94a6be",color:"#ffffff"}},Q1=C.div`
    padding: 5px;
    animation-name: card-animation;
    animation-duration: 500ms;
    animation-timing-function: linear;
`,K1=C(Eo)`
    width: 220px;
    height: 130px;
    background-color: #FFFFFF;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 15px 13px 19px;
    overflow: hidden;

    @media screen and (max-width: 1200px) {
        width: 220px;
        height: 130px;
        background-color: #FFFFFF;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: stretch;
        padding: 15px 13px 19px;
    }
`;C.div`
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 2px;
`;C.div`
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #94A6BE;
`;const X1=C.h3`
 max-width: 220px; 
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;
`,J1=C.div`
    width: 100%;
    height: 20px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`,q1=C.div`
    height: 64px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    overflow: hidden;
`,Z1=C.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`,ey=C.p`
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: #94A6BE;
    letter-spacing: 0.2px;
`,hh=C.p`
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
`,ty=C.div`
    width: auto;
    height: 20px;
    padding: 5px 14px;
    border-radius: 18px;
    background-color: ${({$topicColor:e})=>{var t;return((t=rd[e])==null?void 0:t.backgroundColor)||"#b4fdd1"}};

    ${hh} {
        color: ${({$topicColor:e})=>{var t;return((t=rd[e])==null?void 0:t.color)||"#06b16e"}};
    }
`,ny=({topic:e,title:t,date:n,id:r})=>{const o=G1(e);return d.jsx(Q1,{children:d.jsxs(K1,{to:`/card/${r}`,children:[d.jsx(J1,{children:d.jsx(ty,{$topicColor:o,children:d.jsx(hh,{children:e})})}),d.jsxs(q1,{children:[d.jsx(X1,{children:t}),d.jsxs(Z1,{children:[d.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"13",height:"13",viewBox:"0 0 13 13",fill:"none",children:[d.jsxs("g",{clipPath:"url(#clip0_1_415)",children:[d.jsx("path",{d:"M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z",stroke:"#94A6BE",strokeWidth:"0.8",strokeLinejoin:"round"}),d.jsx("path",{d:"M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z",stroke:"#94A6BE",strokeWidth:"0.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),d.jsx("defs",{children:d.jsx("clipPath",{id:"clip0_1_415",children:d.jsx("rect",{width:"13",height:"13",fill:"white"})})})]}),d.jsx(ey,{children:n})]})]})]})})},ry=C.div`
    width: 20%;
    margin: 0 auto;
    display: block;

    @media screen and (max-width: 1200px) {
        width: 100%;
        margin: 0 auto;
        display: block;
    }
`,oy=C.div`
    width: 100%;
    display: block;
    position: relative;

    @media screen and (max-width: 1200px) {
        width: 100%;
        display: flex;
        overflow-y: auto;
    }
`,iy=C.div`
    padding: 0 10px;
    margin: 15px 0;
`,ay=C.p`
    color: #94A6BE;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
`;function W(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function $e(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function Se(e,t){const n=W(e);return isNaN(t)?$e(e,NaN):(t&&n.setDate(n.getDate()+t),n)}function at(e,t){const n=W(e);if(isNaN(t))return $e(e,NaN);if(!t)return n;const r=n.getDate(),o=$e(e,n.getTime());o.setMonth(n.getMonth()+t+1,0);const i=o.getDate();return r>=i?o:(n.setFullYear(o.getFullYear(),o.getMonth(),r),n)}const mu=6048e5,ly=864e5;let sy={};function Po(){return sy}function Ke(e,t){var l,s,u,c;const n=Po(),r=(t==null?void 0:t.weekStartsOn)??((s=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:s.weekStartsOn)??n.weekStartsOn??((c=(u=n.locale)==null?void 0:u.options)==null?void 0:c.weekStartsOn)??0,o=W(e),i=o.getDay(),a=(i<r?7:0)+i-r;return o.setDate(o.getDate()-a),o.setHours(0,0,0,0),o}function Mn(e){return Ke(e,{weekStartsOn:1})}function mh(e){const t=W(e),n=t.getFullYear(),r=$e(e,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const o=Mn(r),i=$e(e,0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);const a=Mn(i);return t.getTime()>=o.getTime()?n+1:t.getTime()>=a.getTime()?n:n-1}function gr(e){const t=W(e);return t.setHours(0,0,0,0),t}function Ui(e){const t=W(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function mt(e,t){const n=gr(e),r=gr(t),o=+n-Ui(n),i=+r-Ui(r);return Math.round((o-i)/ly)}function uy(e){const t=mh(e),n=$e(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),Mn(n)}function is(e,t){const n=t*7;return Se(e,n)}function cy(e,t){return at(e,t*12)}function dy(e){let t;return e.forEach(function(n){const r=W(n);(t===void 0||t<r||isNaN(Number(r)))&&(t=r)}),t||new Date(NaN)}function fy(e){let t;return e.forEach(n=>{const r=W(n);(!t||t>r||isNaN(+r))&&(t=r)}),t||new Date(NaN)}function je(e,t){const n=gr(e),r=gr(t);return+n==+r}function gu(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function py(e){if(!gu(e)&&typeof e!="number")return!1;const t=W(e);return!isNaN(Number(t))}function vo(e,t){const n=W(e),r=W(t),o=n.getFullYear()-r.getFullYear(),i=n.getMonth()-r.getMonth();return o*12+i}function hy(e,t,n){const r=Ke(e,n),o=Ke(t,n),i=+r-Ui(r),a=+o-Ui(o);return Math.round((i-a)/mu)}function vu(e){const t=W(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function be(e){const t=W(e);return t.setDate(1),t.setHours(0,0,0,0),t}function gh(e){const t=W(e),n=$e(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}function yu(e,t){var l,s,u,c;const n=Po(),r=(t==null?void 0:t.weekStartsOn)??((s=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:s.weekStartsOn)??n.weekStartsOn??((c=(u=n.locale)==null?void 0:u.options)==null?void 0:c.weekStartsOn)??0,o=W(e),i=o.getDay(),a=(i<r?-7:0)+6-(i-r);return o.setDate(o.getDate()+a),o.setHours(23,59,59,999),o}function vh(e){return yu(e,{weekStartsOn:1})}const my={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},gy=(e,t,n)=>{let r;const o=my[e];return typeof o=="string"?r=o:t===1?r=o.one:r=o.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function rr(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const vy={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},yy={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},xy={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},wy={date:rr({formats:vy,defaultWidth:"full"}),time:rr({formats:yy,defaultWidth:"full"}),dateTime:rr({formats:xy,defaultWidth:"full"})},ky={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Sy=(e,t,n,r)=>ky[e];function pt(e){return(t,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let o;if(r==="formatting"&&e.formattingValues){const a=e.defaultFormattingWidth||e.defaultWidth,l=n!=null&&n.width?String(n.width):a;o=e.formattingValues[l]||e.formattingValues[a]}else{const a=e.defaultWidth,l=n!=null&&n.width?String(n.width):e.defaultWidth;o=e.values[l]||e.values[a]}const i=e.argumentCallback?e.argumentCallback(t):t;return o[i]}}const Cy={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Ey={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},_y={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Py={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Ny={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},jy={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Fy=(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},My={ordinalNumber:Fy,era:pt({values:Cy,defaultWidth:"wide"}),quarter:pt({values:Ey,defaultWidth:"wide",argumentCallback:e=>e-1}),month:pt({values:_y,defaultWidth:"wide"}),day:pt({values:Py,defaultWidth:"wide"}),dayPeriod:pt({values:Ny,defaultWidth:"wide",formattingValues:jy,defaultFormattingWidth:"wide"})};function ht(e){return(t,n={})=>{const r=n.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(o);if(!i)return null;const a=i[0],l=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(l)?by(l,f=>f.test(a)):Dy(l,f=>f.test(a));let u;u=e.valueCallback?e.valueCallback(s):s,u=n.valueCallback?n.valueCallback(u):u;const c=t.slice(a.length);return{value:u,rest:c}}}function Dy(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function by(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function yh(e){return(t,n={})=>{const r=t.match(e.matchPattern);if(!r)return null;const o=r[0],i=t.match(e.parsePattern);if(!i)return null;let a=e.valueCallback?e.valueCallback(i[0]):i[0];a=n.valueCallback?n.valueCallback(a):a;const l=t.slice(o.length);return{value:a,rest:l}}}const Oy=/^(\d+)(th|st|nd|rd)?/i,Ty=/\d+/i,Ly={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Ry={any:[/^b/i,/^(a|c)/i]},zy={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Iy={any:[/1/i,/2/i,/3/i,/4/i]},$y={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Wy={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},By={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Ay={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Uy={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Vy={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Yy={ordinalNumber:yh({matchPattern:Oy,parsePattern:Ty,valueCallback:e=>parseInt(e,10)}),era:ht({matchPatterns:Ly,defaultMatchWidth:"wide",parsePatterns:Ry,defaultParseWidth:"any"}),quarter:ht({matchPatterns:zy,defaultMatchWidth:"wide",parsePatterns:Iy,defaultParseWidth:"any",valueCallback:e=>e+1}),month:ht({matchPatterns:$y,defaultMatchWidth:"wide",parsePatterns:Wy,defaultParseWidth:"any"}),day:ht({matchPatterns:By,defaultMatchWidth:"wide",parsePatterns:Ay,defaultParseWidth:"any"}),dayPeriod:ht({matchPatterns:Uy,defaultMatchWidth:"any",parsePatterns:Vy,defaultParseWidth:"any"})},xh={code:"en-US",formatDistance:gy,formatLong:wy,formatRelative:Sy,localize:My,match:Yy,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Hy(e){const t=W(e);return mt(t,gh(t))+1}function wh(e){const t=W(e),n=+Mn(t)-+uy(t);return Math.round(n/mu)+1}function kh(e,t){var c,f,h,v;const n=W(e),r=n.getFullYear(),o=Po(),i=(t==null?void 0:t.firstWeekContainsDate)??((f=(c=t==null?void 0:t.locale)==null?void 0:c.options)==null?void 0:f.firstWeekContainsDate)??o.firstWeekContainsDate??((v=(h=o.locale)==null?void 0:h.options)==null?void 0:v.firstWeekContainsDate)??1,a=$e(e,0);a.setFullYear(r+1,0,i),a.setHours(0,0,0,0);const l=Ke(a,t),s=$e(e,0);s.setFullYear(r,0,i),s.setHours(0,0,0,0);const u=Ke(s,t);return n.getTime()>=l.getTime()?r+1:n.getTime()>=u.getTime()?r:r-1}function Gy(e,t){var l,s,u,c;const n=Po(),r=(t==null?void 0:t.firstWeekContainsDate)??((s=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:s.firstWeekContainsDate)??n.firstWeekContainsDate??((c=(u=n.locale)==null?void 0:u.options)==null?void 0:c.firstWeekContainsDate)??1,o=kh(e,t),i=$e(e,0);return i.setFullYear(o,0,r),i.setHours(0,0,0,0),Ke(i,t)}function Sh(e,t){const n=W(e),r=+Ke(n,t)-+Gy(n,t);return Math.round(r/mu)+1}function U(e,t){const n=e<0?"-":"",r=Math.abs(e).toString().padStart(t,"0");return n+r}const $t={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return U(t==="yy"?r%100:r,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):U(n+1,2)},d(e,t){return U(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return U(e.getHours()%12||12,t.length)},H(e,t){return U(e.getHours(),t.length)},m(e,t){return U(e.getMinutes(),t.length)},s(e,t){return U(e.getSeconds(),t.length)},S(e,t){const n=t.length,r=e.getMilliseconds(),o=Math.trunc(r*Math.pow(10,n-3));return U(o,t.length)}},zn={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},od={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const r=e.getFullYear(),o=r>0?r:1-r;return n.ordinalNumber(o,{unit:"year"})}return $t.y(e,t)},Y:function(e,t,n,r){const o=kh(e,r),i=o>0?o:1-o;if(t==="YY"){const a=i%100;return U(a,2)}return t==="Yo"?n.ordinalNumber(i,{unit:"year"}):U(i,t.length)},R:function(e,t){const n=mh(e);return U(n,t.length)},u:function(e,t){const n=e.getFullYear();return U(n,t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return U(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return U(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return $t.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return U(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const o=Sh(e,r);return t==="wo"?n.ordinalNumber(o,{unit:"week"}):U(o,t.length)},I:function(e,t,n){const r=wh(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):U(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):$t.d(e,t)},D:function(e,t,n){const r=Hy(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):U(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const o=e.getDay(),i=(o-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return U(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});case"eeee":default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const o=e.getDay(),i=(o-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return U(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});case"cccc":default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),o=r===0?7:r;switch(t){case"i":return String(o);case"ii":return U(o,t.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const o=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let o;switch(r===12?o=zn.noon:r===0?o=zn.midnight:o=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let o;switch(r>=17?o=zn.evening:r>=12?o=zn.afternoon:r>=4?o=zn.morning:o=zn.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let r=e.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return $t.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):$t.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):U(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):U(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):$t.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):$t.s(e,t)},S:function(e,t){return $t.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(t){case"X":return ad(r);case"XXXX":case"XX":return vn(r);case"XXXXX":case"XXX":default:return vn(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return ad(r);case"xxxx":case"xx":return vn(r);case"xxxxx":case"xxx":default:return vn(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+id(r,":");case"OOOO":default:return"GMT"+vn(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+id(r,":");case"zzzz":default:return"GMT"+vn(r,":")}},t:function(e,t,n){const r=Math.trunc(e.getTime()/1e3);return U(r,t.length)},T:function(e,t,n){const r=e.getTime();return U(r,t.length)}};function id(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),o=Math.trunc(r/60),i=r%60;return i===0?n+String(o):n+String(o)+t+U(i,2)}function ad(e,t){return e%60===0?(e>0?"-":"+")+U(Math.abs(e)/60,2):vn(e,t)}function vn(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),o=U(Math.trunc(r/60),2),i=U(r%60,2);return n+o+t+i}const ld=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},Ch=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},Qy=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],o=n[2];if(!o)return ld(e,t);let i;switch(r){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"});break}return i.replace("{{date}}",ld(r,t)).replace("{{time}}",Ch(o,t))},Ky={p:Ch,P:Qy},Xy=/^D+$/,Jy=/^Y+$/,qy=["D","DD","YY","YYYY"];function Zy(e){return Xy.test(e)}function ex(e){return Jy.test(e)}function tx(e,t,n){const r=nx(e,t,n);if(console.warn(r),qy.includes(e))throw new RangeError(r)}function nx(e,t,n){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const rx=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ox=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ix=/^'([^]*?)'?$/,ax=/''/g,lx=/[a-zA-Z]/;function Lt(e,t,n){var c,f,h,v,y,x,k,m;const r=Po(),o=(n==null?void 0:n.locale)??r.locale??xh,i=(n==null?void 0:n.firstWeekContainsDate)??((f=(c=n==null?void 0:n.locale)==null?void 0:c.options)==null?void 0:f.firstWeekContainsDate)??r.firstWeekContainsDate??((v=(h=r.locale)==null?void 0:h.options)==null?void 0:v.firstWeekContainsDate)??1,a=(n==null?void 0:n.weekStartsOn)??((x=(y=n==null?void 0:n.locale)==null?void 0:y.options)==null?void 0:x.weekStartsOn)??r.weekStartsOn??((m=(k=r.locale)==null?void 0:k.options)==null?void 0:m.weekStartsOn)??0,l=W(e);if(!py(l))throw new RangeError("Invalid time value");let s=t.match(ox).map(p=>{const g=p[0];if(g==="p"||g==="P"){const w=Ky[g];return w(p,o.formatLong)}return p}).join("").match(rx).map(p=>{if(p==="''")return{isToken:!1,value:"'"};const g=p[0];if(g==="'")return{isToken:!1,value:sx(p)};if(od[g])return{isToken:!0,value:p};if(g.match(lx))throw new RangeError("Format string contains an unescaped latin alphabet character `"+g+"`");return{isToken:!1,value:p}});o.localize.preprocessor&&(s=o.localize.preprocessor(l,s));const u={firstWeekContainsDate:i,weekStartsOn:a,locale:o};return s.map(p=>{if(!p.isToken)return p.value;const g=p.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&ex(g)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&Zy(g))&&tx(g,t,String(e));const w=od[g[0]];return w(l,g,o.localize,u)}).join("")}function sx(e){const t=e.match(ix);return t?t[1].replace(ax,"'"):e}function ux(e){const t=W(e),n=t.getFullYear(),r=t.getMonth(),o=$e(e,0);return o.setFullYear(n,r+1,0),o.setHours(0,0,0,0),o.getDate()}function cx(e){return Math.trunc(+W(e)/1e3)}function dx(e){const t=W(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(0,0,0,0),t}function fx(e,t){return hy(dx(e),be(e),t)+1}function as(e,t){const n=W(e),r=W(t);return n.getTime()>r.getTime()}function Eh(e,t){const n=W(e),r=W(t);return+n<+r}function sd(e,t,n){const r=Ke(e,n),o=Ke(t,n);return+r==+o}function xu(e,t){const n=W(e),r=W(t);return n.getFullYear()===r.getFullYear()&&n.getMonth()===r.getMonth()}function px(e,t){const n=W(e),r=W(t);return n.getFullYear()===r.getFullYear()}function Ga(e,t){return Se(e,-t)}function Qa(e,t){const n=W(e),r=n.getFullYear(),o=n.getDate(),i=$e(e,0);i.setFullYear(r,t,15),i.setHours(0,0,0,0);const a=ux(i);return n.setMonth(t,Math.min(o,a)),n}function ud(e,t){const n=W(e);return isNaN(+n)?$e(e,NaN):(n.setFullYear(t),n)}const hx=({title:e,cardList:t})=>d.jsxs(ry,{children:[d.jsx(iy,{children:d.jsx(ay,{children:e})}),d.jsx(oy,{children:t.map(n=>{const r=Lt(new Date(n.date),"dd.MM.yyyy");return d.jsx(ny,{id:n._id,userId:n.userId,topic:n.topic,title:n.title,date:r,description:n.description,status:n.status},n._id)})})]}),mx=C.div`
    width: 100%;
    background-color: #EAEEF6;
`,gx=C.div`
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;

    @media screen and (max-width: 495px) {
        width: 100%;
        padding: 0 16px;
    }
`,vx=C.div`
    width: 100%;
    margin: 0 auto;
    padding: 25px 0 49px;

    @media screen and (max-width: 1200px) {    
        width: 100%;
        margin: 0 auto;
        padding: 40px 0 64px;
    }
`,yx=C.div`
    width: 100%;
    display: flex;

    @media screen and (max-width: 1200px){
        display: block;
    }
`,xx=({cards:e})=>d.jsx(mx,{children:d.jsx(gx,{children:d.jsx(vx,{children:d.jsx(yx,{children:H1.map(t=>d.jsx(hx,{title:t,cardList:e.filter(n=>n.status===t)},t))})})})}),wx=C.p`
    text-align: center;
    padding-top: 50px;
`,_h="https://wedev-api.sky.pro/api/kanban",Ph="https://wedev-api.sky.pro/api/user";async function kx({token:e}){const t=await fetch(_h,{headers:{Authorization:`Bearer ${e}`}});if(t.status===!1)throw new Error("Ошибка");return await t.json()}async function Sx({user:e,title:t,topic:n,status:r,description:o,date:i}){return fetch(_h,{method:"POST",headers:{Authorization:`Bearer ${e.token}`},body:JSON.stringify({title:t,topic:n,status:r,description:o,date:i})})}async function Cx({id:e,user:t,title:n,topic:r,status:o,description:i,date:a}){const l=await fetch(`https://wedev-api.sky.pro/api/kanban/${e}`,{headers:{Authorization:`Bearer ${t.token}`},method:"PUT",body:JSON.stringify({title:n,topic:r,status:o,description:i,date:a})});if(l.status===!1)throw new Error("Ошибка");return await l.json()}async function Ex({id:e,user:t}){const n=await fetch(`https://wedev-api.sky.pro/api/kanban/${e}`,{headers:{Authorization:`Bearer ${t.token}`},method:"DELETE"});if(n.status===!1)throw new Error("Ошибка");return await n.json()}function _x({login:e,name:t,password:n}){return fetch(Ph,{method:"POST",body:JSON.stringify({login:e,name:t,password:n})}).then(r=>{if(r.status===400)throw new Error("Пользователь уже существует");if(r.status===500)throw new Error("Ошибка сервера");return r.json()}).catch(r=>{r.message==="Пользователь уже существует"?alert("Кажется, у вас уже есть аккаунт, войдите в него"):r.message==="Ошибка сервера"&&alert("Что-то пошло не так, уже чиним")})}function Px({login:e,password:t}){return fetch(Ph+"/login",{method:"POST",body:JSON.stringify({login:e,password:t})}).then(n=>{if(n.status===400)throw new Error("Неверный логин или пароль");if(n.status===500)throw new Error("Ошибка сервера");return n.json()}).catch(n=>{n.message==="Неверный логин или пароль"?alert("Неверный логин или пароль"):n.message==="Ошибка сервера"&&alert("Что-то пошло не так, уже чиним")})}const Nh=S.createContext(null),Nx=()=>{let e=Tt();const[t,n]=S.useState([]),r=o=>{n(o),e("/")};return d.jsx(Nh.Provider,{value:{tasks:t,setTasks:n,getTasks:r},children:d.jsx(au,{})})},wu=()=>S.useContext(Nh),jx=C.div`
    max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #F1F1F1;
`;function Fx(){const{user:e}=S.useContext(hu),[t,n]=S.useState(!0),{tasks:r,setTasks:o}=wu();return S.useEffect(()=>{(async()=>{if(e&&e.token)try{const a=await kx({token:e.token});o(a.tasks)}catch{alert("Что-то пошло не так. Попробуйте снова.")}finally{n(!1)}else alert("Пользователь не авторизован."),n(!1)})()},[e]),d.jsxs(jx,{children:[d.jsx(Y1,{}),t?d.jsx(wx,{children:"Загружаю задачи ..."}):d.jsx(xx,{cards:r}),d.jsx(au,{})]})}const jh=C.div`
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    background-color: #EAEEF6;
`,Fh=C.div`
    display: block;
    width: 100vw;
    min-height: 100vh;
    margin: 0 auto;
`,Mh=C.div`
    width: 100%;
    height: 100%;
    min-width: 320px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 375px) {
        background-color: #FFFFFF;
    }
`,Dh=C.div`
    display: block;
    margin: 0 auto;
    background-color: #FFFFFF;
    max-width: 368px;
    width: 100%;
    padding: 50px 60px;
    border-radius: 10px;
    border: 0.7px solid #D4DBE5;
    box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);  

    @media screen and (max-width: 375px) {
        max-width: 368px;
        width: 100%;
        padding: 0 16px;
        border-radius: none;
        border: none;
        box-shadow: none;
    }
`,bh=C.h2`
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.6px;
    margin-bottom: 20px; 
`,Oh=C.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;  
`,ls=C.input`
    margin-bottom: 7px;
    width: 100%;
    min-width: 100%;
    border-radius: 8px;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    outline: none;
    padding: 10px 8px;

    &::-moz-placeholder {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: -0.28px;
        color: #94A6BE;
    }
`,Th=C.input`
    width: 100%;
    min-width: 100%;
    border-radius: 8px;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    outline: none;
    padding: 10px 8px;

    &::-moz-placeholder {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: -0.28px;
        color: #94A6BE;
    }
`,Lh=C.button`
    width: 100%;
    height: 30px;
    background-color: #565EEF;
    border-radius: 4px;
    margin-top: 20px;
    margin-bottom: 20px;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;
    letter-spacing: -0.14px;
    color: #FFFFFF;

    &:hover {
        background-color: #33399b;
    }

    @media screen and (max-width: 375px) {
        height: 40px;
    }
`,Rh=C.p`
    width: 100%;
    height: 100%;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
`,zh=C.div`
    text-align: center;
`,Ih=C.p`
    color: rgba(148, 166, 190, 0.4);
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.14px;
`,$h=C.a`
    color: rgba(148, 166, 190, 0.4);
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.14px;
    text-decoration: underline;
`;function Mx(){let e=Tt();const{loginUser:t}=On(),[n,r]=S.useState({login:"",password:""}),[o,i]=S.useState(!1);S.useEffect(()=>{(()=>{const u=n.login.trim()!=="",c=n.password.trim()!=="";i(u&&c)})()},[n]);const a=s=>{const{name:u,value:c}=s.target;r({...n,[u]:c})},l=async s=>{s.preventDefault();const u=await Px({login:n.login,password:n.password});u!=null&&u.user&&t(u.user)};return d.jsx(jh,{children:d.jsx(Fh,{children:d.jsx(Mh,{children:d.jsxs(Dh,{children:[d.jsx("div",{className:"modal__ttl",children:d.jsx(bh,{children:"Вход"})}),d.jsxs(Oh,{id:"formLogIn",action:"#",onSubmit:l,children:[d.jsx(ls,{type:"email",name:"login",id:"formlogin",placeholder:"Эл. почта",value:n.login,onChange:a,required:!0}),d.jsx(Th,{type:"password",name:"password",id:"formpassword",placeholder:"Пароль",value:n.password,onChange:a,required:!0}),d.jsx(Lh,{id:"btnEnter",type:"submit",style:{opacity:o?1:.5},disabled:!o,children:d.jsx(Rh,{children:"Войти"})}),d.jsxs(zh,{children:[d.jsx(Ih,{children:"Нужно зарегистрироваться?"}),d.jsx($h,{onClick:()=>e("/register"),children:"Регистрируйтесь здесь"})]})]})]})})})})}function Dx(){let e=Tt();const{loginUser:t}=On();function n(){e("/login")}const[r,o]=S.useState({firstName:"",login:"",password:""}),[i,a]=S.useState(!1);S.useEffect(()=>{(()=>{const c=r.firstName.trim()!=="",f=r.login.trim()!=="",h=r.password.trim()!=="";a(f&&h&&c)})()},[r]);const l=u=>{const{name:c,value:f}=u.target;o({...r,[c]:f})},s=async u=>{u.preventDefault();const c=await _x({name:r.firstName,login:r.login,password:r.password});c!=null&&c.user&&t(c.user)};return d.jsx(jh,{children:d.jsx(Fh,{children:d.jsx(Mh,{children:d.jsxs(Dh,{children:[d.jsx("div",{className:"modal__ttl",children:d.jsx(bh,{children:"Регистрация"})}),d.jsxs(Oh,{id:"formLogUp",action:"#",onSubmit:s,children:[d.jsx(ls,{type:"text",name:"firstName",id:"first-name",placeholder:"Имя",value:r.firstName,onChange:l,required:!0}),d.jsx(ls,{type:"email",name:"login",id:"loginReg",placeholder:"Эл. почта",value:r.login,onChange:l,required:!0}),d.jsx(Th,{type:"password",name:"password",id:"passwordFirst",placeholder:"Пароль",value:r.password,onChange:l,required:!0}),d.jsx(Lh,{id:"SignUpEnter",type:"submit",style:{opacity:i?1:.5},disabled:!i,children:d.jsx(Rh,{children:"Зарегистрироваться"})}),d.jsxs(zh,{children:[d.jsx(Ih,{children:"Уже есть аккаунт?"}),d.jsx($h,{onClick:n,children:"Войдите здесь"})]})]})]})})})})}function Or(e,t){if(e.one!==void 0&&t===1)return e.one;const n=t%10,r=t%100;return n===1&&r!==11?e.singularNominative.replace("{{count}}",String(t)):n>=2&&n<=4&&(r<10||r>20)?e.singularGenitive.replace("{{count}}",String(t)):e.pluralGenitive.replace("{{count}}",String(t))}function we(e){return(t,n)=>n!=null&&n.addSuffix?n.comparison&&n.comparison>0?e.future?Or(e.future,t):"через "+Or(e.regular,t):e.past?Or(e.past,t):Or(e.regular,t)+" назад":Or(e.regular,t)}const bx={lessThanXSeconds:we({regular:{one:"меньше секунды",singularNominative:"меньше {{count}} секунды",singularGenitive:"меньше {{count}} секунд",pluralGenitive:"меньше {{count}} секунд"},future:{one:"меньше, чем через секунду",singularNominative:"меньше, чем через {{count}} секунду",singularGenitive:"меньше, чем через {{count}} секунды",pluralGenitive:"меньше, чем через {{count}} секунд"}}),xSeconds:we({regular:{singularNominative:"{{count}} секунда",singularGenitive:"{{count}} секунды",pluralGenitive:"{{count}} секунд"},past:{singularNominative:"{{count}} секунду назад",singularGenitive:"{{count}} секунды назад",pluralGenitive:"{{count}} секунд назад"},future:{singularNominative:"через {{count}} секунду",singularGenitive:"через {{count}} секунды",pluralGenitive:"через {{count}} секунд"}}),halfAMinute:(e,t)=>t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"через полминуты":"полминуты назад":"полминуты",lessThanXMinutes:we({regular:{one:"меньше минуты",singularNominative:"меньше {{count}} минуты",singularGenitive:"меньше {{count}} минут",pluralGenitive:"меньше {{count}} минут"},future:{one:"меньше, чем через минуту",singularNominative:"меньше, чем через {{count}} минуту",singularGenitive:"меньше, чем через {{count}} минуты",pluralGenitive:"меньше, чем через {{count}} минут"}}),xMinutes:we({regular:{singularNominative:"{{count}} минута",singularGenitive:"{{count}} минуты",pluralGenitive:"{{count}} минут"},past:{singularNominative:"{{count}} минуту назад",singularGenitive:"{{count}} минуты назад",pluralGenitive:"{{count}} минут назад"},future:{singularNominative:"через {{count}} минуту",singularGenitive:"через {{count}} минуты",pluralGenitive:"через {{count}} минут"}}),aboutXHours:we({regular:{singularNominative:"около {{count}} часа",singularGenitive:"около {{count}} часов",pluralGenitive:"около {{count}} часов"},future:{singularNominative:"приблизительно через {{count}} час",singularGenitive:"приблизительно через {{count}} часа",pluralGenitive:"приблизительно через {{count}} часов"}}),xHours:we({regular:{singularNominative:"{{count}} час",singularGenitive:"{{count}} часа",pluralGenitive:"{{count}} часов"}}),xDays:we({regular:{singularNominative:"{{count}} день",singularGenitive:"{{count}} дня",pluralGenitive:"{{count}} дней"}}),aboutXWeeks:we({regular:{singularNominative:"около {{count}} недели",singularGenitive:"около {{count}} недель",pluralGenitive:"около {{count}} недель"},future:{singularNominative:"приблизительно через {{count}} неделю",singularGenitive:"приблизительно через {{count}} недели",pluralGenitive:"приблизительно через {{count}} недель"}}),xWeeks:we({regular:{singularNominative:"{{count}} неделя",singularGenitive:"{{count}} недели",pluralGenitive:"{{count}} недель"}}),aboutXMonths:we({regular:{singularNominative:"около {{count}} месяца",singularGenitive:"около {{count}} месяцев",pluralGenitive:"около {{count}} месяцев"},future:{singularNominative:"приблизительно через {{count}} месяц",singularGenitive:"приблизительно через {{count}} месяца",pluralGenitive:"приблизительно через {{count}} месяцев"}}),xMonths:we({regular:{singularNominative:"{{count}} месяц",singularGenitive:"{{count}} месяца",pluralGenitive:"{{count}} месяцев"}}),aboutXYears:we({regular:{singularNominative:"около {{count}} года",singularGenitive:"около {{count}} лет",pluralGenitive:"около {{count}} лет"},future:{singularNominative:"приблизительно через {{count}} год",singularGenitive:"приблизительно через {{count}} года",pluralGenitive:"приблизительно через {{count}} лет"}}),xYears:we({regular:{singularNominative:"{{count}} год",singularGenitive:"{{count}} года",pluralGenitive:"{{count}} лет"}}),overXYears:we({regular:{singularNominative:"больше {{count}} года",singularGenitive:"больше {{count}} лет",pluralGenitive:"больше {{count}} лет"},future:{singularNominative:"больше, чем через {{count}} год",singularGenitive:"больше, чем через {{count}} года",pluralGenitive:"больше, чем через {{count}} лет"}}),almostXYears:we({regular:{singularNominative:"почти {{count}} год",singularGenitive:"почти {{count}} года",pluralGenitive:"почти {{count}} лет"},future:{singularNominative:"почти через {{count}} год",singularGenitive:"почти через {{count}} года",pluralGenitive:"почти через {{count}} лет"}})},Ox=(e,t,n)=>bx[e](t,n),Tx={full:"EEEE, d MMMM y 'г.'",long:"d MMMM y 'г.'",medium:"d MMM y 'г.'",short:"dd.MM.y"},Lx={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},Rx={any:"{{date}}, {{time}}"},zx={date:rr({formats:Tx,defaultWidth:"full"}),time:rr({formats:Lx,defaultWidth:"full"}),dateTime:rr({formats:Rx,defaultWidth:"any"})},ku=["воскресенье","понедельник","вторник","среду","четверг","пятницу","субботу"];function Ix(e){const t=ku[e];switch(e){case 0:return"'в прошлое "+t+" в' p";case 1:case 2:case 4:return"'в прошлый "+t+" в' p";case 3:case 5:case 6:return"'в прошлую "+t+" в' p"}}function cd(e){const t=ku[e];return e===2?"'во "+t+" в' p":"'в "+t+" в' p"}function $x(e){const t=ku[e];switch(e){case 0:return"'в следующее "+t+" в' p";case 1:case 2:case 4:return"'в следующий "+t+" в' p";case 3:case 5:case 6:return"'в следующую "+t+" в' p"}}const Wx={lastWeek:(e,t,n)=>{const r=e.getDay();return sd(e,t,n)?cd(r):Ix(r)},yesterday:"'вчера в' p",today:"'сегодня в' p",tomorrow:"'завтра в' p",nextWeek:(e,t,n)=>{const r=e.getDay();return sd(e,t,n)?cd(r):$x(r)},other:"P"},Bx=(e,t,n,r)=>{const o=Wx[e];return typeof o=="function"?o(t,n,r):o},Ax={narrow:["до н.э.","н.э."],abbreviated:["до н. э.","н. э."],wide:["до нашей эры","нашей эры"]},Ux={narrow:["1","2","3","4"],abbreviated:["1-й кв.","2-й кв.","3-й кв.","4-й кв."],wide:["1-й квартал","2-й квартал","3-й квартал","4-й квартал"]},Vx={narrow:["Я","Ф","М","А","М","И","И","А","С","О","Н","Д"],abbreviated:["янв.","фев.","март","апр.","май","июнь","июль","авг.","сент.","окт.","нояб.","дек."],wide:["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"]},Yx={narrow:["Я","Ф","М","А","М","И","И","А","С","О","Н","Д"],abbreviated:["янв.","фев.","мар.","апр.","мая","июн.","июл.","авг.","сент.","окт.","нояб.","дек."],wide:["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"]},Hx={narrow:["В","П","В","С","Ч","П","С"],short:["вс","пн","вт","ср","чт","пт","сб"],abbreviated:["вск","пнд","втр","срд","чтв","птн","суб"],wide:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"]},Gx={narrow:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утро",afternoon:"день",evening:"веч.",night:"ночь"},abbreviated:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утро",afternoon:"день",evening:"веч.",night:"ночь"},wide:{am:"ДП",pm:"ПП",midnight:"полночь",noon:"полдень",morning:"утро",afternoon:"день",evening:"вечер",night:"ночь"}},Qx={narrow:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утра",afternoon:"дня",evening:"веч.",night:"ночи"},abbreviated:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утра",afternoon:"дня",evening:"веч.",night:"ночи"},wide:{am:"ДП",pm:"ПП",midnight:"полночь",noon:"полдень",morning:"утра",afternoon:"дня",evening:"вечера",night:"ночи"}},Kx=(e,t)=>{const n=Number(e),r=t==null?void 0:t.unit;let o;return r==="date"?o="-е":r==="week"||r==="minute"||r==="second"?o="-я":o="-й",n+o},Xx={ordinalNumber:Kx,era:pt({values:Ax,defaultWidth:"wide"}),quarter:pt({values:Ux,defaultWidth:"wide",argumentCallback:e=>e-1}),month:pt({values:Vx,defaultWidth:"wide",formattingValues:Yx,defaultFormattingWidth:"wide"}),day:pt({values:Hx,defaultWidth:"wide"}),dayPeriod:pt({values:Gx,defaultWidth:"any",formattingValues:Qx,defaultFormattingWidth:"wide"})},Jx=/^(\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i,qx=/\d+/i,Zx={narrow:/^((до )?н\.?\s?э\.?)/i,abbreviated:/^((до )?н\.?\s?э\.?)/i,wide:/^(до нашей эры|нашей эры|наша эра)/i},ew={any:[/^д/i,/^н/i]},tw={narrow:/^[1234]/i,abbreviated:/^[1234](-?[ыои]?й?)? кв.?/i,wide:/^[1234](-?[ыои]?й?)? квартал/i},nw={any:[/1/i,/2/i,/3/i,/4/i]},rw={narrow:/^[яфмаисонд]/i,abbreviated:/^(янв|фев|март?|апр|ма[йя]|июн[ья]?|июл[ья]?|авг|сент?|окт|нояб?|дек)\.?/i,wide:/^(январ[ья]|феврал[ья]|марта?|апрел[ья]|ма[йя]|июн[ья]|июл[ья]|августа?|сентябр[ья]|октябр[ья]|октябр[ья]|ноябр[ья]|декабр[ья])/i},ow={narrow:[/^я/i,/^ф/i,/^м/i,/^а/i,/^м/i,/^и/i,/^и/i,/^а/i,/^с/i,/^о/i,/^н/i,/^я/i],any:[/^я/i,/^ф/i,/^мар/i,/^ап/i,/^ма[йя]/i,/^июн/i,/^июл/i,/^ав/i,/^с/i,/^о/i,/^н/i,/^д/i]},iw={narrow:/^[впсч]/i,short:/^(вс|во|пн|по|вт|ср|чт|че|пт|пя|сб|су)\.?/i,abbreviated:/^(вск|вос|пнд|пон|втр|вто|срд|сре|чтв|чет|птн|пят|суб).?/i,wide:/^(воскресень[ея]|понедельника?|вторника?|сред[аы]|четверга?|пятниц[аы]|суббот[аы])/i},aw={narrow:[/^в/i,/^п/i,/^в/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^в[ос]/i,/^п[он]/i,/^в/i,/^ср/i,/^ч/i,/^п[ят]/i,/^с[уб]/i]},lw={narrow:/^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,abbreviated:/^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,wide:/^([дп]п|полночь|полдень|утр[оа]|день|дня|вечера?|ноч[ьи])/i},sw={any:{am:/^дп/i,pm:/^пп/i,midnight:/^полн/i,noon:/^полд/i,morning:/^у/i,afternoon:/^д[ен]/i,evening:/^в/i,night:/^н/i}},uw={ordinalNumber:yh({matchPattern:Jx,parsePattern:qx,valueCallback:e=>parseInt(e,10)}),era:ht({matchPatterns:Zx,defaultMatchWidth:"wide",parsePatterns:ew,defaultParseWidth:"any"}),quarter:ht({matchPatterns:tw,defaultMatchWidth:"wide",parsePatterns:nw,defaultParseWidth:"any",valueCallback:e=>e+1}),month:ht({matchPatterns:rw,defaultMatchWidth:"wide",parsePatterns:ow,defaultParseWidth:"any"}),day:ht({matchPatterns:iw,defaultMatchWidth:"wide",parsePatterns:aw,defaultParseWidth:"any"}),dayPeriod:ht({matchPatterns:lw,defaultMatchWidth:"wide",parsePatterns:sw,defaultParseWidth:"any"})},cw={code:"ru",formatDistance:Ox,formatLong:zx,formatRelative:Bx,localize:Xx,match:uw,options:{weekStartsOn:1,firstWeekContainsDate:1}};var T=function(){return T=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},T.apply(this,arguments)};function dw(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function Wh(e,t,n){for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}function No(e){return e.mode==="multiple"}function jo(e){return e.mode==="range"}function ha(e){return e.mode==="single"}var fw={root:"rdp",multiple_months:"rdp-multiple_months",with_weeknumber:"rdp-with_weeknumber",vhidden:"rdp-vhidden",button_reset:"rdp-button_reset",button:"rdp-button",caption:"rdp-caption",caption_start:"rdp-caption_start",caption_end:"rdp-caption_end",caption_between:"rdp-caption_between",caption_label:"rdp-caption_label",caption_dropdowns:"rdp-caption_dropdowns",dropdown:"rdp-dropdown",dropdown_month:"rdp-dropdown_month",dropdown_year:"rdp-dropdown_year",dropdown_icon:"rdp-dropdown_icon",months:"rdp-months",month:"rdp-month",table:"rdp-table",tbody:"rdp-tbody",tfoot:"rdp-tfoot",head:"rdp-head",head_row:"rdp-head_row",head_cell:"rdp-head_cell",nav:"rdp-nav",nav_button:"rdp-nav_button",nav_button_previous:"rdp-nav_button_previous",nav_button_next:"rdp-nav_button_next",nav_icon:"rdp-nav_icon",row:"rdp-row",weeknumber:"rdp-weeknumber",cell:"rdp-cell",day:"rdp-day",day_today:"rdp-day_today",day_outside:"rdp-day_outside",day_selected:"rdp-day_selected",day_disabled:"rdp-day_disabled",day_hidden:"rdp-day_hidden",day_range_start:"rdp-day_range_start",day_range_end:"rdp-day_range_end",day_range_middle:"rdp-day_range_middle"};function pw(e,t){return Lt(e,"LLLL y",t)}function hw(e,t){return Lt(e,"d",t)}function mw(e,t){return Lt(e,"LLLL",t)}function gw(e){return"".concat(e)}function vw(e,t){return Lt(e,"cccccc",t)}function yw(e,t){return Lt(e,"yyyy",t)}var xw=Object.freeze({__proto__:null,formatCaption:pw,formatDay:hw,formatMonthCaption:mw,formatWeekNumber:gw,formatWeekdayName:vw,formatYearCaption:yw}),ww=function(e,t,n){return Lt(e,"do MMMM (EEEE)",n)},kw=function(){return"Month: "},Sw=function(){return"Go to next month"},Cw=function(){return"Go to previous month"},Ew=function(e,t){return Lt(e,"cccc",t)},_w=function(e){return"Week n. ".concat(e)},Pw=function(){return"Year: "},Nw=Object.freeze({__proto__:null,labelDay:ww,labelMonthDropdown:kw,labelNext:Sw,labelPrevious:Cw,labelWeekNumber:_w,labelWeekday:Ew,labelYearDropdown:Pw});function jw(){var e="buttons",t=fw,n=xh,r={},o={},i=1,a={},l=new Date;return{captionLayout:e,classNames:t,formatters:xw,labels:Nw,locale:n,modifiersClassNames:r,modifiers:o,numberOfMonths:i,styles:a,today:l,mode:"default"}}function Fw(e){var t=e.fromYear,n=e.toYear,r=e.fromMonth,o=e.toMonth,i=e.fromDate,a=e.toDate;return r?i=be(r):t&&(i=new Date(t,0,1)),o?a=vu(o):n&&(a=new Date(n,11,31)),{fromDate:i?gr(i):void 0,toDate:a?gr(a):void 0}}var Bh=S.createContext(void 0);function Mw(e){var t,n=e.initialProps,r=jw(),o=Fw(n),i=o.fromDate,a=o.toDate,l=(t=n.captionLayout)!==null&&t!==void 0?t:r.captionLayout;l!=="buttons"&&(!i||!a)&&(l="buttons");var s;(ha(n)||No(n)||jo(n))&&(s=n.onSelect);var u=T(T(T({},r),n),{captionLayout:l,classNames:T(T({},r.classNames),n.classNames),components:T({},n.components),formatters:T(T({},r.formatters),n.formatters),fromDate:i,labels:T(T({},r.labels),n.labels),mode:n.mode||r.mode,modifiers:T(T({},r.modifiers),n.modifiers),modifiersClassNames:T(T({},r.modifiersClassNames),n.modifiersClassNames),onSelect:s,styles:T(T({},r.styles),n.styles),toDate:a});return d.jsx(Bh.Provider,{value:u,children:e.children})}function G(){var e=S.useContext(Bh);if(!e)throw new Error("useDayPicker must be used within a DayPickerProvider.");return e}function Ah(e){var t=G(),n=t.locale,r=t.classNames,o=t.styles,i=t.formatters.formatCaption;return d.jsx("div",{className:r.caption_label,style:o.caption_label,"aria-live":"polite",role:"presentation",id:e.id,children:i(e.displayMonth,{locale:n})})}function Dw(e){return d.jsx("svg",T({width:"8px",height:"8px",viewBox:"0 0 120 120","data-testid":"iconDropdown"},e,{children:d.jsx("path",{d:"M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z",fill:"currentColor",fillRule:"nonzero"})}))}function Uh(e){var t,n,r=e.onChange,o=e.value,i=e.children,a=e.caption,l=e.className,s=e.style,u=G(),c=(n=(t=u.components)===null||t===void 0?void 0:t.IconDropdown)!==null&&n!==void 0?n:Dw;return d.jsxs("div",{className:l,style:s,children:[d.jsx("span",{className:u.classNames.vhidden,children:e["aria-label"]}),d.jsx("select",{name:e.name,"aria-label":e["aria-label"],className:u.classNames.dropdown,style:u.styles.dropdown,value:o,onChange:r,children:i}),d.jsxs("div",{className:u.classNames.caption_label,style:u.styles.caption_label,"aria-hidden":"true",children:[a,d.jsx(c,{className:u.classNames.dropdown_icon,style:u.styles.dropdown_icon})]})]})}function bw(e){var t,n=G(),r=n.fromDate,o=n.toDate,i=n.styles,a=n.locale,l=n.formatters.formatMonthCaption,s=n.classNames,u=n.components,c=n.labels.labelMonthDropdown;if(!r)return d.jsx(d.Fragment,{});if(!o)return d.jsx(d.Fragment,{});var f=[];if(px(r,o))for(var h=be(r),v=r.getMonth();v<=o.getMonth();v++)f.push(Qa(h,v));else for(var h=be(new Date),v=0;v<=11;v++)f.push(Qa(h,v));var y=function(k){var m=Number(k.target.value),p=Qa(be(e.displayMonth),m);e.onChange(p)},x=(t=u==null?void 0:u.Dropdown)!==null&&t!==void 0?t:Uh;return d.jsx(x,{name:"months","aria-label":c(),className:s.dropdown_month,style:i.dropdown_month,onChange:y,value:e.displayMonth.getMonth(),caption:l(e.displayMonth,{locale:a}),children:f.map(function(k){return d.jsx("option",{value:k.getMonth(),children:l(k,{locale:a})},k.getMonth())})})}function Ow(e){var t,n=e.displayMonth,r=G(),o=r.fromDate,i=r.toDate,a=r.locale,l=r.styles,s=r.classNames,u=r.components,c=r.formatters.formatYearCaption,f=r.labels.labelYearDropdown,h=[];if(!o)return d.jsx(d.Fragment,{});if(!i)return d.jsx(d.Fragment,{});for(var v=o.getFullYear(),y=i.getFullYear(),x=v;x<=y;x++)h.push(ud(gh(new Date),x));var k=function(p){var g=ud(be(n),Number(p.target.value));e.onChange(g)},m=(t=u==null?void 0:u.Dropdown)!==null&&t!==void 0?t:Uh;return d.jsx(m,{name:"years","aria-label":f(),className:s.dropdown_year,style:l.dropdown_year,onChange:k,value:n.getFullYear(),caption:c(n,{locale:a}),children:h.map(function(p){return d.jsx("option",{value:p.getFullYear(),children:c(p,{locale:a})},p.getFullYear())})})}function Tw(e,t){var n=S.useState(e),r=n[0],o=n[1],i=t===void 0?r:t;return[i,o]}function Lw(e){var t=e.month,n=e.defaultMonth,r=e.today,o=t||n||r||new Date,i=e.toDate,a=e.fromDate,l=e.numberOfMonths,s=l===void 0?1:l;if(i&&vo(i,o)<0){var u=-1*(s-1);o=at(i,u)}return a&&vo(o,a)<0&&(o=a),be(o)}function Rw(){var e=G(),t=Lw(e),n=Tw(t,e.month),r=n[0],o=n[1],i=function(a){var l;if(!e.disableNavigation){var s=be(a);o(s),(l=e.onMonthChange)===null||l===void 0||l.call(e,s)}};return[r,i]}function zw(e,t){for(var n=t.reverseMonths,r=t.numberOfMonths,o=be(e),i=be(at(o,r)),a=vo(i,o),l=[],s=0;s<a;s++){var u=at(o,s);l.push(u)}return n&&(l=l.reverse()),l}function Iw(e,t){if(!t.disableNavigation){var n=t.toDate,r=t.pagedNavigation,o=t.numberOfMonths,i=o===void 0?1:o,a=r?i:1,l=be(e);if(!n)return at(l,a);var s=vo(n,e);if(!(s<i))return at(l,a)}}function $w(e,t){if(!t.disableNavigation){var n=t.fromDate,r=t.pagedNavigation,o=t.numberOfMonths,i=o===void 0?1:o,a=r?i:1,l=be(e);if(!n)return at(l,-a);var s=vo(l,n);if(!(s<=0))return at(l,-a)}}var Vh=S.createContext(void 0);function Ww(e){var t=G(),n=Rw(),r=n[0],o=n[1],i=zw(r,t),a=Iw(r,t),l=$w(r,t),s=function(f){return i.some(function(h){return xu(f,h)})},u=function(f,h){s(f)||(h&&Eh(f,h)?o(at(f,1+t.numberOfMonths*-1)):o(f))},c={currentMonth:r,displayMonths:i,goToMonth:o,goToDate:u,previousMonth:l,nextMonth:a,isDateDisplayed:s};return d.jsx(Vh.Provider,{value:c,children:e.children})}function Fo(){var e=S.useContext(Vh);if(!e)throw new Error("useNavigation must be used within a NavigationProvider");return e}function dd(e){var t,n=G(),r=n.classNames,o=n.styles,i=n.components,a=Fo().goToMonth,l=function(c){a(at(c,e.displayIndex?-e.displayIndex:0))},s=(t=i==null?void 0:i.CaptionLabel)!==null&&t!==void 0?t:Ah,u=d.jsx(s,{id:e.id,displayMonth:e.displayMonth});return d.jsxs("div",{className:r.caption_dropdowns,style:o.caption_dropdowns,children:[d.jsx("div",{className:r.vhidden,children:u}),d.jsx(bw,{onChange:l,displayMonth:e.displayMonth}),d.jsx(Ow,{onChange:l,displayMonth:e.displayMonth})]})}function Bw(e){return d.jsx("svg",T({width:"16px",height:"16px",viewBox:"0 0 120 120"},e,{children:d.jsx("path",{d:"M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z",fill:"currentColor",fillRule:"nonzero"})}))}function Aw(e){return d.jsx("svg",T({width:"16px",height:"16px",viewBox:"0 0 120 120"},e,{children:d.jsx("path",{d:"M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z",fill:"currentColor"})}))}var Vi=S.forwardRef(function(e,t){var n=G(),r=n.classNames,o=n.styles,i=[r.button_reset,r.button];e.className&&i.push(e.className);var a=i.join(" "),l=T(T({},o.button_reset),o.button);return e.style&&Object.assign(l,e.style),d.jsx("button",T({},e,{ref:t,type:"button",className:a,style:l}))});function Uw(e){var t,n,r=G(),o=r.dir,i=r.locale,a=r.classNames,l=r.styles,s=r.labels,u=s.labelPrevious,c=s.labelNext,f=r.components;if(!e.nextMonth&&!e.previousMonth)return d.jsx(d.Fragment,{});var h=u(e.previousMonth,{locale:i}),v=[a.nav_button,a.nav_button_previous].join(" "),y=c(e.nextMonth,{locale:i}),x=[a.nav_button,a.nav_button_next].join(" "),k=(t=f==null?void 0:f.IconRight)!==null&&t!==void 0?t:Aw,m=(n=f==null?void 0:f.IconLeft)!==null&&n!==void 0?n:Bw;return d.jsxs("div",{className:a.nav,style:l.nav,children:[!e.hidePrevious&&d.jsx(Vi,{name:"previous-month","aria-label":h,className:v,style:l.nav_button_previous,disabled:!e.previousMonth,onClick:e.onPreviousClick,children:o==="rtl"?d.jsx(k,{className:a.nav_icon,style:l.nav_icon}):d.jsx(m,{className:a.nav_icon,style:l.nav_icon})}),!e.hideNext&&d.jsx(Vi,{name:"next-month","aria-label":y,className:x,style:l.nav_button_next,disabled:!e.nextMonth,onClick:e.onNextClick,children:o==="rtl"?d.jsx(m,{className:a.nav_icon,style:l.nav_icon}):d.jsx(k,{className:a.nav_icon,style:l.nav_icon})})]})}function fd(e){var t=G().numberOfMonths,n=Fo(),r=n.previousMonth,o=n.nextMonth,i=n.goToMonth,a=n.displayMonths,l=a.findIndex(function(y){return xu(e.displayMonth,y)}),s=l===0,u=l===a.length-1,c=t>1&&(s||!u),f=t>1&&(u||!s),h=function(){r&&i(r)},v=function(){o&&i(o)};return d.jsx(Uw,{displayMonth:e.displayMonth,hideNext:c,hidePrevious:f,nextMonth:o,previousMonth:r,onPreviousClick:h,onNextClick:v})}function Vw(e){var t,n=G(),r=n.classNames,o=n.disableNavigation,i=n.styles,a=n.captionLayout,l=n.components,s=(t=l==null?void 0:l.CaptionLabel)!==null&&t!==void 0?t:Ah,u;return o?u=d.jsx(s,{id:e.id,displayMonth:e.displayMonth}):a==="dropdown"?u=d.jsx(dd,{displayMonth:e.displayMonth,id:e.id}):a==="dropdown-buttons"?u=d.jsxs(d.Fragment,{children:[d.jsx(dd,{displayMonth:e.displayMonth,displayIndex:e.displayIndex,id:e.id}),d.jsx(fd,{displayMonth:e.displayMonth,displayIndex:e.displayIndex,id:e.id})]}):u=d.jsxs(d.Fragment,{children:[d.jsx(s,{id:e.id,displayMonth:e.displayMonth,displayIndex:e.displayIndex}),d.jsx(fd,{displayMonth:e.displayMonth,id:e.id})]}),d.jsx("div",{className:r.caption,style:i.caption,children:u})}function Yw(e){var t=G(),n=t.footer,r=t.styles,o=t.classNames.tfoot;return n?d.jsx("tfoot",{className:o,style:r.tfoot,children:d.jsx("tr",{children:d.jsx("td",{colSpan:8,children:n})})}):d.jsx(d.Fragment,{})}function Hw(e,t,n){for(var r=n?Mn(new Date):Ke(new Date,{locale:e,weekStartsOn:t}),o=[],i=0;i<7;i++){var a=Se(r,i);o.push(a)}return o}function Gw(){var e=G(),t=e.classNames,n=e.styles,r=e.showWeekNumber,o=e.locale,i=e.weekStartsOn,a=e.ISOWeek,l=e.formatters.formatWeekdayName,s=e.labels.labelWeekday,u=Hw(o,i,a);return d.jsxs("tr",{style:n.head_row,className:t.head_row,children:[r&&d.jsx("td",{style:n.head_cell,className:t.head_cell}),u.map(function(c,f){return d.jsx("th",{scope:"col",className:t.head_cell,style:n.head_cell,"aria-label":s(c,{locale:o}),children:l(c,{locale:o})},f)})]})}function Qw(){var e,t=G(),n=t.classNames,r=t.styles,o=t.components,i=(e=o==null?void 0:o.HeadRow)!==null&&e!==void 0?e:Gw;return d.jsx("thead",{style:r.head,className:n.head,children:d.jsx(i,{})})}function Kw(e){var t=G(),n=t.locale,r=t.formatters.formatDay;return d.jsx(d.Fragment,{children:r(e.date,{locale:n})})}var Su=S.createContext(void 0);function Xw(e){if(!No(e.initialProps)){var t={selected:void 0,modifiers:{disabled:[]}};return d.jsx(Su.Provider,{value:t,children:e.children})}return d.jsx(Jw,{initialProps:e.initialProps,children:e.children})}function Jw(e){var t=e.initialProps,n=e.children,r=t.selected,o=t.min,i=t.max,a=function(u,c,f){var h,v;(h=t.onDayClick)===null||h===void 0||h.call(t,u,c,f);var y=!!(c.selected&&o&&(r==null?void 0:r.length)===o);if(!y){var x=!!(!c.selected&&i&&(r==null?void 0:r.length)===i);if(!x){var k=r?Wh([],r):[];if(c.selected){var m=k.findIndex(function(p){return je(u,p)});k.splice(m,1)}else k.push(u);(v=t.onSelect)===null||v===void 0||v.call(t,k,u,c,f)}}},l={disabled:[]};r&&l.disabled.push(function(u){var c=i&&r.length>i-1,f=r.some(function(h){return je(h,u)});return!!(c&&!f)});var s={selected:r,onDayClick:a,modifiers:l};return d.jsx(Su.Provider,{value:s,children:n})}function Cu(){var e=S.useContext(Su);if(!e)throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");return e}function qw(e,t){var n=t||{},r=n.from,o=n.to;return r&&o?je(o,e)&&je(r,e)?void 0:je(o,e)?{from:o,to:void 0}:je(r,e)?void 0:as(r,e)?{from:e,to:o}:{from:r,to:e}:o?as(e,o)?{from:o,to:e}:{from:e,to:o}:r?Eh(e,r)?{from:e,to:r}:{from:r,to:e}:{from:e,to:void 0}}var Eu=S.createContext(void 0);function Zw(e){if(!jo(e.initialProps)){var t={selected:void 0,modifiers:{range_start:[],range_end:[],range_middle:[],disabled:[]}};return d.jsx(Eu.Provider,{value:t,children:e.children})}return d.jsx(ek,{initialProps:e.initialProps,children:e.children})}function ek(e){var t=e.initialProps,n=e.children,r=t.selected,o=r||{},i=o.from,a=o.to,l=t.min,s=t.max,u=function(v,y,x){var k,m;(k=t.onDayClick)===null||k===void 0||k.call(t,v,y,x);var p=qw(v,r);(m=t.onSelect)===null||m===void 0||m.call(t,p,v,y,x)},c={range_start:[],range_end:[],range_middle:[],disabled:[]};if(i?(c.range_start=[i],a?(c.range_end=[a],je(i,a)||(c.range_middle=[{after:i,before:a}])):c.range_end=[i]):a&&(c.range_start=[a],c.range_end=[a]),l&&(i&&!a&&c.disabled.push({after:Ga(i,l-1),before:Se(i,l-1)}),i&&a&&c.disabled.push({after:i,before:Se(i,l-1)}),!i&&a&&c.disabled.push({after:Ga(a,l-1),before:Se(a,l-1)})),s){if(i&&!a&&(c.disabled.push({before:Se(i,-s+1)}),c.disabled.push({after:Se(i,s-1)})),i&&a){var f=mt(a,i)+1,h=s-f;c.disabled.push({before:Ga(i,h)}),c.disabled.push({after:Se(a,h)})}!i&&a&&(c.disabled.push({before:Se(a,-s+1)}),c.disabled.push({after:Se(a,s-1)}))}return d.jsx(Eu.Provider,{value:{selected:r,onDayClick:u,modifiers:c},children:n})}function _u(){var e=S.useContext(Eu);if(!e)throw new Error("useSelectRange must be used within a SelectRangeProvider");return e}function pi(e){return Array.isArray(e)?Wh([],e):e!==void 0?[e]:[]}function tk(e){var t={};return Object.entries(e).forEach(function(n){var r=n[0],o=n[1];t[r]=pi(o)}),t}var lt;(function(e){e.Outside="outside",e.Disabled="disabled",e.Selected="selected",e.Hidden="hidden",e.Today="today",e.RangeStart="range_start",e.RangeEnd="range_end",e.RangeMiddle="range_middle"})(lt||(lt={}));var nk=lt.Selected,St=lt.Disabled,rk=lt.Hidden,ok=lt.Today,Ka=lt.RangeEnd,Xa=lt.RangeMiddle,Ja=lt.RangeStart,ik=lt.Outside;function ak(e,t,n){var r,o=(r={},r[nk]=pi(e.selected),r[St]=pi(e.disabled),r[rk]=pi(e.hidden),r[ok]=[e.today],r[Ka]=[],r[Xa]=[],r[Ja]=[],r[ik]=[],r);return e.fromDate&&o[St].push({before:e.fromDate}),e.toDate&&o[St].push({after:e.toDate}),No(e)?o[St]=o[St].concat(t.modifiers[St]):jo(e)&&(o[St]=o[St].concat(n.modifiers[St]),o[Ja]=n.modifiers[Ja],o[Xa]=n.modifiers[Xa],o[Ka]=n.modifiers[Ka]),o}var Yh=S.createContext(void 0);function lk(e){var t=G(),n=Cu(),r=_u(),o=ak(t,n,r),i=tk(t.modifiers),a=T(T({},o),i);return d.jsx(Yh.Provider,{value:a,children:e.children})}function Hh(){var e=S.useContext(Yh);if(!e)throw new Error("useModifiers must be used within a ModifiersProvider");return e}function sk(e){return!!(e&&typeof e=="object"&&"before"in e&&"after"in e)}function uk(e){return!!(e&&typeof e=="object"&&"from"in e)}function ck(e){return!!(e&&typeof e=="object"&&"after"in e)}function dk(e){return!!(e&&typeof e=="object"&&"before"in e)}function fk(e){return!!(e&&typeof e=="object"&&"dayOfWeek"in e)}function pk(e,t){var n,r=t.from,o=t.to;if(r&&o){var i=mt(o,r)<0;i&&(n=[o,r],r=n[0],o=n[1]);var a=mt(e,r)>=0&&mt(o,e)>=0;return a}return o?je(o,e):r?je(r,e):!1}function hk(e){return gu(e)}function mk(e){return Array.isArray(e)&&e.every(gu)}function gk(e,t){return t.some(function(n){if(typeof n=="boolean")return n;if(hk(n))return je(e,n);if(mk(n))return n.includes(e);if(uk(n))return pk(e,n);if(fk(n))return n.dayOfWeek.includes(e.getDay());if(sk(n)){var r=mt(n.before,e),o=mt(n.after,e),i=r>0,a=o<0,l=as(n.before,n.after);return l?a&&i:i||a}return ck(n)?mt(e,n.after)>0:dk(n)?mt(n.before,e)>0:typeof n=="function"?n(e):!1})}function Pu(e,t,n){var r=Object.keys(t).reduce(function(i,a){var l=t[a];return gk(e,l)&&i.push(a),i},[]),o={};return r.forEach(function(i){return o[i]=!0}),n&&!xu(e,n)&&(o.outside=!0),o}function vk(e,t){for(var n=be(e[0]),r=vu(e[e.length-1]),o,i,a=n;a<=r;){var l=Pu(a,t),s=!l.disabled&&!l.hidden;if(!s){a=Se(a,1);continue}if(l.selected)return a;l.today&&!i&&(i=a),o||(o=a),a=Se(a,1)}return i||o}var yk=365;function Gh(e,t){var n=t.moveBy,r=t.direction,o=t.context,i=t.modifiers,a=t.retry,l=a===void 0?{count:0,lastFocused:e}:a,s=o.weekStartsOn,u=o.fromDate,c=o.toDate,f=o.locale,h={day:Se,week:is,month:at,year:cy,startOfWeek:function(k){return o.ISOWeek?Mn(k):Ke(k,{locale:f,weekStartsOn:s})},endOfWeek:function(k){return o.ISOWeek?vh(k):yu(k,{locale:f,weekStartsOn:s})}},v=h[n](e,r==="after"?1:-1);r==="before"&&u?v=dy([u,v]):r==="after"&&c&&(v=fy([c,v]));var y=!0;if(i){var x=Pu(v,i);y=!x.disabled&&!x.hidden}return y?v:l.count>yk?l.lastFocused:Gh(v,{moveBy:n,direction:r,context:o,modifiers:i,retry:T(T({},l),{count:l.count+1})})}var Qh=S.createContext(void 0);function xk(e){var t=Fo(),n=Hh(),r=S.useState(),o=r[0],i=r[1],a=S.useState(),l=a[0],s=a[1],u=vk(t.displayMonths,n),c=o??(l&&t.isDateDisplayed(l))?l:u,f=function(){s(o),i(void 0)},h=function(k){i(k)},v=G(),y=function(k,m){if(o){var p=Gh(o,{moveBy:k,direction:m,context:v,modifiers:n});je(o,p)||(t.goToDate(p,o),h(p))}},x={focusedDay:o,focusTarget:c,blur:f,focus:h,focusDayAfter:function(){return y("day","after")},focusDayBefore:function(){return y("day","before")},focusWeekAfter:function(){return y("week","after")},focusWeekBefore:function(){return y("week","before")},focusMonthBefore:function(){return y("month","before")},focusMonthAfter:function(){return y("month","after")},focusYearBefore:function(){return y("year","before")},focusYearAfter:function(){return y("year","after")},focusStartOfWeek:function(){return y("startOfWeek","before")},focusEndOfWeek:function(){return y("endOfWeek","after")}};return d.jsx(Qh.Provider,{value:x,children:e.children})}function Nu(){var e=S.useContext(Qh);if(!e)throw new Error("useFocusContext must be used within a FocusProvider");return e}function wk(e,t){var n=Hh(),r=Pu(e,n,t);return r}var ju=S.createContext(void 0);function kk(e){if(!ha(e.initialProps)){var t={selected:void 0};return d.jsx(ju.Provider,{value:t,children:e.children})}return d.jsx(Sk,{initialProps:e.initialProps,children:e.children})}function Sk(e){var t=e.initialProps,n=e.children,r=function(i,a,l){var s,u,c;if((s=t.onDayClick)===null||s===void 0||s.call(t,i,a,l),a.selected&&!t.required){(u=t.onSelect)===null||u===void 0||u.call(t,void 0,i,a,l);return}(c=t.onSelect)===null||c===void 0||c.call(t,i,i,a,l)},o={selected:t.selected,onDayClick:r};return d.jsx(ju.Provider,{value:o,children:n})}function Kh(){var e=S.useContext(ju);if(!e)throw new Error("useSelectSingle must be used within a SelectSingleProvider");return e}function Ck(e,t){var n=G(),r=Kh(),o=Cu(),i=_u(),a=Nu(),l=a.focusDayAfter,s=a.focusDayBefore,u=a.focusWeekAfter,c=a.focusWeekBefore,f=a.blur,h=a.focus,v=a.focusMonthBefore,y=a.focusMonthAfter,x=a.focusYearBefore,k=a.focusYearAfter,m=a.focusStartOfWeek,p=a.focusEndOfWeek,g=function(b){var E,O,L,B;ha(n)?(E=r.onDayClick)===null||E===void 0||E.call(r,e,t,b):No(n)?(O=o.onDayClick)===null||O===void 0||O.call(o,e,t,b):jo(n)?(L=i.onDayClick)===null||L===void 0||L.call(i,e,t,b):(B=n.onDayClick)===null||B===void 0||B.call(n,e,t,b)},w=function(b){var E;h(e),(E=n.onDayFocus)===null||E===void 0||E.call(n,e,t,b)},P=function(b){var E;f(),(E=n.onDayBlur)===null||E===void 0||E.call(n,e,t,b)},N=function(b){var E;(E=n.onDayMouseEnter)===null||E===void 0||E.call(n,e,t,b)},_=function(b){var E;(E=n.onDayMouseLeave)===null||E===void 0||E.call(n,e,t,b)},M=function(b){var E;(E=n.onDayPointerEnter)===null||E===void 0||E.call(n,e,t,b)},D=function(b){var E;(E=n.onDayPointerLeave)===null||E===void 0||E.call(n,e,t,b)},R=function(b){var E;(E=n.onDayTouchCancel)===null||E===void 0||E.call(n,e,t,b)},xe=function(b){var E;(E=n.onDayTouchEnd)===null||E===void 0||E.call(n,e,t,b)},xt=function(b){var E;(E=n.onDayTouchMove)===null||E===void 0||E.call(n,e,t,b)},wt=function(b){var E;(E=n.onDayTouchStart)===null||E===void 0||E.call(n,e,t,b)},Tn=function(b){var E;(E=n.onDayKeyUp)===null||E===void 0||E.call(n,e,t,b)},Cr=function(b){var E;switch(b.key){case"ArrowLeft":b.preventDefault(),b.stopPropagation(),n.dir==="rtl"?l():s();break;case"ArrowRight":b.preventDefault(),b.stopPropagation(),n.dir==="rtl"?s():l();break;case"ArrowDown":b.preventDefault(),b.stopPropagation(),u();break;case"ArrowUp":b.preventDefault(),b.stopPropagation(),c();break;case"PageUp":b.preventDefault(),b.stopPropagation(),b.shiftKey?x():v();break;case"PageDown":b.preventDefault(),b.stopPropagation(),b.shiftKey?k():y();break;case"Home":b.preventDefault(),b.stopPropagation(),m();break;case"End":b.preventDefault(),b.stopPropagation(),p();break}(E=n.onDayKeyDown)===null||E===void 0||E.call(n,e,t,b)},fn={onClick:g,onFocus:w,onBlur:P,onKeyDown:Cr,onKeyUp:Tn,onMouseEnter:N,onMouseLeave:_,onPointerEnter:M,onPointerLeave:D,onTouchCancel:R,onTouchEnd:xe,onTouchMove:xt,onTouchStart:wt};return fn}function Ek(){var e=G(),t=Kh(),n=Cu(),r=_u(),o=ha(e)?t.selected:No(e)?n.selected:jo(e)?r.selected:void 0;return o}function _k(e){return Object.values(lt).includes(e)}function Pk(e,t){var n=[e.classNames.day];return Object.keys(t).forEach(function(r){var o=e.modifiersClassNames[r];if(o)n.push(o);else if(_k(r)){var i=e.classNames["day_".concat(r)];i&&n.push(i)}}),n}function Nk(e,t){var n=T({},e.styles.day);return Object.keys(t).forEach(function(r){var o;n=T(T({},n),(o=e.modifiersStyles)===null||o===void 0?void 0:o[r])}),n}function jk(e,t,n){var r,o,i,a=G(),l=Nu(),s=wk(e,t),u=Ck(e,s),c=Ek(),f=!!(a.onDayClick||a.mode!=="default");S.useEffect(function(){var N;s.outside||l.focusedDay&&f&&je(l.focusedDay,e)&&((N=n.current)===null||N===void 0||N.focus())},[l.focusedDay,e,n,f,s.outside]);var h=Pk(a,s).join(" "),v=Nk(a,s),y=!!(s.outside&&!a.showOutsideDays||s.hidden),x=(i=(o=a.components)===null||o===void 0?void 0:o.DayContent)!==null&&i!==void 0?i:Kw,k=d.jsx(x,{date:e,displayMonth:t,activeModifiers:s}),m={style:v,className:h,children:k,role:"gridcell"},p=l.focusTarget&&je(l.focusTarget,e)&&!s.outside,g=l.focusedDay&&je(l.focusedDay,e),w=T(T(T({},m),(r={disabled:s.disabled,role:"gridcell"},r["aria-selected"]=s.selected,r.tabIndex=g||p?0:-1,r)),u),P={isButton:f,isHidden:y,activeModifiers:s,selectedDays:c,buttonProps:w,divProps:m};return P}function Fk(e){var t=S.useRef(null),n=jk(e.date,e.displayMonth,t);return n.isHidden?d.jsx("div",{role:"gridcell"}):n.isButton?d.jsx(Vi,T({name:"day",ref:t},n.buttonProps)):d.jsx("div",T({},n.divProps))}function Mk(e){var t=e.number,n=e.dates,r=G(),o=r.onWeekNumberClick,i=r.styles,a=r.classNames,l=r.locale,s=r.labels.labelWeekNumber,u=r.formatters.formatWeekNumber,c=u(Number(t),{locale:l});if(!o)return d.jsx("span",{className:a.weeknumber,style:i.weeknumber,children:c});var f=s(Number(t),{locale:l}),h=function(v){o(t,n,v)};return d.jsx(Vi,{name:"week-number","aria-label":f,className:a.weeknumber,style:i.weeknumber,onClick:h,children:c})}function Dk(e){var t,n,r=G(),o=r.styles,i=r.classNames,a=r.showWeekNumber,l=r.components,s=(t=l==null?void 0:l.Day)!==null&&t!==void 0?t:Fk,u=(n=l==null?void 0:l.WeekNumber)!==null&&n!==void 0?n:Mk,c;return a&&(c=d.jsx("td",{className:i.cell,style:o.cell,children:d.jsx(u,{number:e.weekNumber,dates:e.dates})})),d.jsxs("tr",{className:i.row,style:o.row,children:[c,e.dates.map(function(f){return d.jsx("td",{className:i.cell,style:o.cell,role:"presentation",children:d.jsx(s,{displayMonth:e.displayMonth,date:f})},cx(f))})]})}function pd(e,t,n){for(var r=n!=null&&n.ISOWeek?vh(t):yu(t,n),o=n!=null&&n.ISOWeek?Mn(e):Ke(e,n),i=mt(r,o),a=[],l=0;l<=i;l++)a.push(Se(o,l));var s=a.reduce(function(u,c){var f=n!=null&&n.ISOWeek?wh(c):Sh(c,n),h=u.find(function(v){return v.weekNumber===f});return h?(h.dates.push(c),u):(u.push({weekNumber:f,dates:[c]}),u)},[]);return s}function bk(e,t){var n=pd(be(e),vu(e),t);if(t!=null&&t.useFixedWeeks){var r=fx(e,t);if(r<6){var o=n[n.length-1],i=o.dates[o.dates.length-1],a=is(i,6-r),l=pd(is(i,1),a,t);n.push.apply(n,l)}}return n}function Ok(e){var t,n,r,o=G(),i=o.locale,a=o.classNames,l=o.styles,s=o.hideHead,u=o.fixedWeeks,c=o.components,f=o.weekStartsOn,h=o.firstWeekContainsDate,v=o.ISOWeek,y=bk(e.displayMonth,{useFixedWeeks:!!u,ISOWeek:v,locale:i,weekStartsOn:f,firstWeekContainsDate:h}),x=(t=c==null?void 0:c.Head)!==null&&t!==void 0?t:Qw,k=(n=c==null?void 0:c.Row)!==null&&n!==void 0?n:Dk,m=(r=c==null?void 0:c.Footer)!==null&&r!==void 0?r:Yw;return d.jsxs("table",{id:e.id,className:a.table,style:l.table,role:"grid","aria-labelledby":e["aria-labelledby"],children:[!s&&d.jsx(x,{}),d.jsx("tbody",{className:a.tbody,style:l.tbody,children:y.map(function(p){return d.jsx(k,{displayMonth:e.displayMonth,dates:p.dates,weekNumber:p.weekNumber},p.weekNumber)})}),d.jsx(m,{displayMonth:e.displayMonth})]})}function Tk(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}var Lk=Tk()?S.useLayoutEffect:S.useEffect,qa=!1,Rk=0;function hd(){return"react-day-picker-".concat(++Rk)}function zk(e){var t,n=e??(qa?hd():null),r=S.useState(n),o=r[0],i=r[1];return Lk(function(){o===null&&i(hd())},[]),S.useEffect(function(){qa===!1&&(qa=!0)},[]),(t=e??o)!==null&&t!==void 0?t:void 0}function Ik(e){var t,n,r=G(),o=r.dir,i=r.classNames,a=r.styles,l=r.components,s=Fo().displayMonths,u=zk(r.id?"".concat(r.id,"-").concat(e.displayIndex):void 0),c=r.id?"".concat(r.id,"-grid-").concat(e.displayIndex):void 0,f=[i.month],h=a.month,v=e.displayIndex===0,y=e.displayIndex===s.length-1,x=!v&&!y;o==="rtl"&&(t=[v,y],y=t[0],v=t[1]),v&&(f.push(i.caption_start),h=T(T({},h),a.caption_start)),y&&(f.push(i.caption_end),h=T(T({},h),a.caption_end)),x&&(f.push(i.caption_between),h=T(T({},h),a.caption_between));var k=(n=l==null?void 0:l.Caption)!==null&&n!==void 0?n:Vw;return d.jsxs("div",{className:f.join(" "),style:h,children:[d.jsx(k,{id:u,displayMonth:e.displayMonth,displayIndex:e.displayIndex}),d.jsx(Ok,{id:c,"aria-labelledby":u,displayMonth:e.displayMonth})]},e.displayIndex)}function $k(e){var t=G(),n=t.classNames,r=t.styles;return d.jsx("div",{className:n.months,style:r.months,children:e.children})}function Wk(e){var t,n,r=e.initialProps,o=G(),i=Nu(),a=Fo(),l=S.useState(!1),s=l[0],u=l[1];S.useEffect(function(){o.initialFocus&&i.focusTarget&&(s||(i.focus(i.focusTarget),u(!0)))},[o.initialFocus,s,i.focus,i.focusTarget,i]);var c=[o.classNames.root,o.className];o.numberOfMonths>1&&c.push(o.classNames.multiple_months),o.showWeekNumber&&c.push(o.classNames.with_weeknumber);var f=T(T({},o.styles.root),o.style),h=Object.keys(r).filter(function(y){return y.startsWith("data-")}).reduce(function(y,x){var k;return T(T({},y),(k={},k[x]=r[x],k))},{}),v=(n=(t=r.components)===null||t===void 0?void 0:t.Months)!==null&&n!==void 0?n:$k;return d.jsx("div",T({className:c.join(" "),style:f,dir:o.dir,id:o.id,nonce:r.nonce,title:r.title,lang:r.lang},h,{children:d.jsx(v,{children:a.displayMonths.map(function(y,x){return d.jsx(Ik,{displayIndex:x,displayMonth:y},x)})})}))}function Bk(e){var t=e.children,n=dw(e,["children"]);return d.jsx(Mw,{initialProps:n,children:d.jsx(Ww,{children:d.jsx(kk,{initialProps:n,children:d.jsx(Xw,{initialProps:n,children:d.jsx(Zw,{initialProps:n,children:d.jsx(lk,{children:d.jsx(xk,{children:t})})})})})})})}function Ak(e){return d.jsx(Bk,T({},e,{children:d.jsx(Wk,{initialProps:e})}))}const Uk=C(Ak)`
    font-size: 10px;

    --rdp-cell-size: 25px;
    --rdp-caption-font-size: 14px;
    
    .rdp {
        margin: 0;
    }

    .rdp-caption{
        height: 30px;
        color: #94A6BE;
    }

    .rdp-nav_button {
        background: none;
        border: none;
        cursor: pointer;
        padding: 7px;
        color: #94A6BE;
    }

    .rdp-day, .rdp-head_row {
        color: #94A6BE;
    }

    .rdp-day_today {
        background-color: #EAEEF6;;
    }

    .rdp-day_selected:not([disabled]) {
        background-color: #94A6BE;;
        color: white;
    }

    @media screen and (max-width: 660px) {
        font-size: 10px;
    }
`;function Xh({date:e,setSelected:t}){const[n,r]=S.useState(e?new Date(e):void 0),o=i=>{r(i),t(i?i.toISOString():"")};return d.jsx(Uk,{locale:cw,mode:"single",selected:n,onSelect:o})}const Vk=C.div`
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;

  @media screen and (max-width: 660px) {
    top: 70px;
  }
`,Yk=C.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);

  @media screen and (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
  }
`,Hk=C.div`
  display: block;
  margin: 0 auto;
  background-color: #FFFFFF;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  position: relative;

  @media screen and (max-width: 660px) {
    border-radius: 0;
  }

  @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`,Gk=C.div`
  display: block;
  text-align: left;

  @media screen and (max-width: 495px) {
    margin-bottom: 20px;
  }
`,Qk=C.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`,Kk=C.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`,Xk=C.input`
  width: 370px;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin: 20px 0;
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94A6BE;
    letter-spacing: -0.14px;
  }

  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 37px;
  }

`,Jk=C.div`
  background-color: '';
  color: '';
  border-radius: 4px;
  padding: 8px 20px;
  opacity: 1;
  
  &._orange {
  background-color: #FFE4C2;
  color: #FF6D00;
  }

  &._green {
    background-color: #B4FDD1;
    color: #06B16E;
  }

  &._purple {
    background-color: #E9D4FF;
    color: #9A48F1;
  }

  &._gray {
    background: #94A6BE;
    color: #FFFFFF;
  }

  &._active-category {
    opacity: 1 !important;
  }
`,qk=C.div`
  margin-bottom: 11px;
`,Zk=C.p`
  margin-bottom: 14px;
`,eS=C.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`,md=C.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94A6BE;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  cursor: pointer;

  &._hide {
    display: none;
  }

  &._gray {
    background: #94A6BE;
    color: #FFFFFF;
  }
`,gd=C.p`
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
`,tS=C.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 660px) {
    display: block;
  }
`,nS=C.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`,rS=C.div`
  display: flex;
  flex-direction: column;
`,oS=C.label`
    color: #000;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;  
`,iS=C.textarea`
  font-family: 'Roboto', sans-serif;
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #EAEEF6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;

  &::placeholder {
    font-family: 'Roboto', sans-serif;
    padding-top: 8px;
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94A6BE;
    letter-spacing: -0.14px;
  }

  @media screen and (max-width: 495px) {
    max-width: 100%;
  }
`,aS=C.textarea`
 font-family: 'Roboto', sans-serif;
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  &::placeholder {
    font-family: 'Roboto', sans-serif;
    padding-top: 8px;
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94A6BE;
    letter-spacing: -0.14px;
  }
`,lS=C.div`
  width: 182px;
  margin-bottom: 20px;

  @media screen and (max-width: 660px) {
    max-width: 340px;
    width: 100%;
  }

  p {
    font-size: 10px;
    padding-left: 15px;
    color: #94A6BE;

    @media screen and (max-width: 660px) {
      font-size: 14px;
    }
  }

  p span {
    color: #000000;
  }

  @media screen and (max-width: 495px) {
    max-width: 100%;
  }
`,sS=C.p`
  margin-bottom: 14px;
  padding: 0 7px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;C.div`
  display: none;
  margin-bottom: 20px;
`;C.p`
  margin-bottom: 14px;
`;C.div`
  background-color: #FFE4C2;
  color: #FF6D00;
  border-radius: 4px;
  padding: 8px 20px;
  opacity: 1;
`;const uS=C.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 495px) {
    display: block;
  }

  button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;

    @media screen and (max-width: 495px) {
      width: 100%;
      height: 40px;
    }
  }

  .btn-group {
    button {
      margin-right: 8px;
    }

    @media screen and (max-width: 495px) {
      margin-right: 0px;
    }
  }
`,cS=C.div`
  margin-right: 8px;

  
`,dn=C.button`
  border-radius: 4px;
  outline: none;

  &._btn-bor {
    border: 0.7px solid #565EEF;
    background: transparent;
    color: #565EEF;

    a {
      color: #565EEF;
    }
  }

  &._btn-bg {
    background: #565EEF;
    border: none;
    color: #FFFFFF;

    a {
      color: #FFFFFF;
    }
  }

  &._hover01:hover {
    background-color: #33399b;
  }

  &._hover03:hover {
    background-color: #33399b;
    color: #FFFFFF;

    a {
      color: #FFFFFF;
    }
  }
`,dS=C(dn)`
  &._btn-bor {
    margin-right: 8px;

    @media screen and (max-width: 495px) {
      margin-right: 0px;
    }
  }
`,fS=C(dn)`
  &._btn-bor {
    margin-left: 8px;

    @media screen and (max-width: 495px) {
      margin-left: 0px;      
    }
  }
`,pS=C(dn)`
  &._btn-bor {
    margin-left: 8px;

    @media screen and (max-width: 495px) {
      margin-left: 0px;
    }
  }
`,hS=C(dn)``,mS=C(dn)``,gS=C(dn)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`,vS=C(Eo)`
  text-decoration: none;
  width: 100%;
  height: 100%;
  align-content: center;
`;C.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 495px) {
    display: block;
  }

  .btn-group {
    button {
      margin-right: 8px;
    }
  }
`;C(dn)`
  &._btn-bg {
    margin-right: 8px;
  }
`;C(dn)``;const yS=C.p`
  color: red;
  font-size: 12px;
  margin-top: 5px;
  margin-left: 5px;
  display: block;
`,xS=C.p`
  color: red;
  position: absolute;
  font-size: 12px;
  top: 110px;
  left: 35px;
`,wS=()=>{let{id:e}=tv();const{tasks:t,setTasks:n}=wu(),r=t.find(D=>D._id===e),[o,i]=S.useState(!1),[a,l]=S.useState((r==null?void 0:r.status)||"Без статуса"),[s,u]=S.useState((r==null?void 0:r.title)||""),[c,f]=S.useState((r==null?void 0:r.description)||""),[h,v]=S.useState({}),y=Tt(),{user:x}=On(),k=S.useRef(null);if(S.useEffect(()=>{r&&(u(r.title),f(r.description),l(r.status))},[r]),S.useEffect(()=>{const D=R=>{k.current&&!k.current.contains(R.target)&&y("/")};return document.addEventListener("mousedown",D),()=>{document.removeEventListener("mousedown",D)}},[y]),!r)return null;const m=()=>{const D={};return s.trim()||(D.title=d.jsx(xS,{children:"Название задачи не может быть пустым"})),c.trim()||(D.description=d.jsx(yS,{children:"Описание задачи не может быть пустым"})),v(D),Object.keys(D).length===0},p=()=>{i(!0)},g=()=>{i(!1),u(r.title),f(r.description),l(r.status),v({})},w=D=>{l(D)},P=D=>{u(D.target.value)},N=D=>{f(D.target.value)},_=async()=>{try{const D=await Ex({id:r._id,user:x});n(D.tasks),y("/")}catch(D){console.error("Ошибка при удалении задачи:",D)}},M=async()=>{if(m())try{const D=await Cx({id:r._id,user:x,title:s,topic:r.topic,status:a,description:c,date:r.date});n(D.tasks),i(!1)}catch(D){console.error("Ошибка при редактировании задачи:",D)}};return d.jsx(Vk,{id:"popBrowse",children:d.jsx(Yk,{children:d.jsx(Hk,{ref:k,children:d.jsxs(Gk,{children:[d.jsxs(Qk,{children:[o?d.jsxs(d.Fragment,{children:[d.jsx(Xk,{placeholder:"Введите название задачи...",type:"text",value:s,onChange:P}),h.title&&d.jsx("span",{children:h.title})]}):d.jsx(Kk,{children:r.title}),d.jsx(Jk,{className:`
                  ${r.topic==="Research"?"_green":""}
                  ${r.topic==="Web Design"?"_orange":""}
                  ${r.topic==="Copywriting"?"_purple":""}
                  ${r.topic==="Без категории"?"_gray":""}
                `,children:d.jsx("p",{children:r.topic})})]}),d.jsxs(qk,{children:[d.jsx(Zk,{className:"subttl",children:"Статус"}),d.jsx(eS,{children:o?["Без статуса","Нужно сделать","В работе","Тестирование","Готово"].map(D=>d.jsx(md,{className:a===D?"_gray":"",onClick:()=>w(D),children:d.jsx(gd,{children:D})},D)):d.jsx(md,{className:"_gray",children:d.jsx(gd,{children:a})})})]}),d.jsxs(tS,{children:[d.jsx(nS,{id:"formBrowseCard",action:"#",children:d.jsxs(rS,{children:[d.jsx(oS,{htmlFor:"textArea01",children:"Описание задачи"}),o?d.jsxs(d.Fragment,{children:[d.jsx(aS,{placeholder:"Введите описание задачи...",value:c,onChange:N}),h.description&&d.jsx("span",{children:h.description})]}):d.jsx(iS,{id:"textArea01",readOnly:!0,value:c})]})}),d.jsxs(lS,{children:[d.jsx(sS,{children:"Даты"}),d.jsx(Xh,{date:r.date,setSelected:()=>{},readOnly:!o}),d.jsxs("p",{children:["Срок исполнения: ",d.jsx("span",{children:Lt(new Date(r.date),"dd.MM.yyyy")})]})]})]}),d.jsxs(uS,{children:[d.jsx(cS,{children:o?d.jsxs("div",{className:"editButtons",children:[d.jsx(hS,{className:"_btn-bg _hover01",onClick:M,children:"Сохранить"}),d.jsx(fS,{className:"_btn-bor _hover03",onClick:g,children:"Отменить"}),d.jsx(pS,{className:"_btn-bor _hover03",onClick:_,children:"Удалить задачу"})]}):d.jsxs("div",{className:"mainButtons",children:[d.jsx(dS,{className:"_btn-bor _hover03",onClick:p,children:"Редактировать"}),d.jsx(mS,{className:"_btn-bg _hover01",onClick:_,children:"Удалить"})]})}),d.jsx(gS,{className:"_btn-bor _hover03",children:d.jsx(vS,{to:"/",children:"Закрыть"})})]})]})})})})},kS=()=>d.jsx(wS,{});function SS(){const{user:e}=On();return e?d.jsx(au,{}):d.jsx(hv,{to:"/login"})}const CS=C.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
`,ES=C.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`,_S=C.div`
  display: block;
  margin: 0 auto;
  background-color: #FFFFFF;
  max-width: 370px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);

  @media only screen and (max-width: 375px) {
    padding: 50px 20px;
  }
`,PS=C.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.4px;
  margin-bottom: 20px;

  & h2 {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.4px;
    margin-bottom: 20px;
  }
`,NS=C.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`,jS=C.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 375px) {
    display: block;
  }
`,FS=C.button`
  width: 153px;
  height: 30px;
  background-color: #565EEF;
  border-radius: 4px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #FFFFFF;
  margin-right: 10px;
  cursor: pointer;

  @media only screen and (max-width: 375px) {
    width: 100%;
    height: 40px;
    margin-right: 0;
    margin-bottom: 10px;
  }

  &:hover {
    background-color: #33399b;
  }

  a {
    width: 100%;
    height: 100%;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }
`,MS=C.button`
  width: 153px;
  height: 30px;
  background-color: transparent;
  border-radius: 4px;
  border: 0.7px solid #565EEF;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #565EEF;
  cursor: pointer;

  @media only screen and (max-width: 375px) {
    width: 100%;
    height: 40px;
  }

  &:hover {
    background-color: #33399b;
    color: #FFFFFF;

    a {
      color: #FFFFFF;
    }
  }

  a {
    width: 100%;
    height: 100%;
    color: #565EEF;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }
`,DS=()=>{const{logoutUser:e}=On();return d.jsx(CS,{id:"popExit",children:d.jsx(ES,{children:d.jsxs(_S,{children:[d.jsx(PS,{children:d.jsx("h2",{children:"Выйти из аккаунта?"})}),d.jsx(NS,{id:"formExit",action:"#",children:d.jsxs(jS,{children:[d.jsx(FS,{children:d.jsx("a",{onClick:e,children:"Да, выйти"})}),d.jsx(MS,{children:d.jsx(Eo,{to:"/",children:"Нет, остаться"})})]})})]})})})};function bS(){return d.jsx(DS,{})}function OS(){let e=Tt();return setTimeout(()=>e("/"),2e3),d.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"center",height:"100vh"},children:[d.jsx("img",{src:"https://www.bordur32.ru/upload/editor/error-404.jpg",alt:"Страница не найдена",style:{width:"60%"}}),d.jsx("p",{children:"Возвращаемся на главную..."})]})}const TS=C.div`
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;

  @media screen and (max-width: 660px) {
    top: 70px;
  }
`,LS=C.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);

  @media screen and (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
  }

  @media screen and (max-width: 495px) {
    padding: 0;
    justify-content: flex-start;
  }
`,RS=C.div`
  display: block;
  margin: 0 auto;
  background-color: #FFFFFF;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  position: relative;

  @media screen and (max-width: 660px) {
    border-radius: 0;
  }

  @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`,zS=C.div`
  display: block;
  text-align: left;
`,IS=C.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`,$S=C.p`
    position: absolute;
    top: 20px;
    right: 30px;
    color: #94A6BE;
    cursor: pointer;

    &:hover {
        color: #000000;
    }
`,WS=C.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 660px) {
    display: block;
  }
`,BS=C.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;

  @media screen and (max-width: 495px) {
    max-width: 100%;
    width: 100%;
    display: block;
  }
`,vd=C.div`
  display: flex;
  flex-direction: column;
`,AS=C.input`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin: 20px 0;
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94A6BE;
    letter-spacing: -0.14px;
  }
`,US=C.textarea`
  font-family: 'Roboto', sans-serif;
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  &::placeholder {
    font-family: 'Roboto', sans-serif;
    padding-top: 8px;
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94A6BE;
    letter-spacing: -0.14px;
  }

  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 34px;
  }
`,VS=C.div`
  width: 182px;
  margin-bottom: 20px;
`,YS=C.p`
  margin-bottom: 14px;
  padding: 0 7px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`,HS=C.div`
  margin-bottom: 20px;
`,GS=C.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`,QS=C.p`
    margin-bottom: 14px;
    padding: 0 7px;
    color: #000;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
`,Za=C.div`
  cursor: pointer;
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;

  &._orange {
  background-color: #FFE4C2;
  color: #FF6D00;
  }

  &._green {
    background-color: #B4FDD1;
    color: #06B16E;
  }

  &._purple {
    background-color: #E9D4FF;
    color: #9A48F1;
  }

  &._gray {
    background: #94A6BE;
    color: #FFFFFF;
  }
  
  &._active-topic {
    opacity: 1 !important;
  }

  & p{
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
  }
`,KS=C.button`
  width: 132px;
  height: 30px;
  background-color: #565EEF;
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #FFFFFF;
  float: right;
  &:hover {
    background-color: #33399b;
  }

  @media screen and (max-width: 495px) {
    width: 100%;
    height: 40px;
  }
`,yd=C.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;C.div`
  margin-bottom: 12px;
`;C.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
`;C.div`
  color: #94A6BE;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
`;C.div`
  width: 182px;
  height: 126px;
  display: flex;
  flex-wrap: wrap;
`;C.div`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: #94A6BE;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;
  &.active {
    background-color: #94A6BE;
    color: #FFFFFF;
  }
  &:hover {
    color: #94A6BE;
    background-color: #EAEEF6;
  }
`;C.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;
`;C.div`
  width: 18px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    fill: #94A6BE;
  }
`;C.div`
  padding: 0 7px;
`;C.div`
  color: #94A6BE;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
`;C.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  svg {
    width: 13px;
  }
  p {
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: #94A6BE;
    letter-spacing: 0.2px;
  }
`;const XS=()=>{const{setTasks:e}=wu(),t=Tt(),{user:n}=On(),r=S.useRef(null),[o,i]=S.useState({title:"",topic:"",description:"",date:"",status:"Без статуса"}),a=h=>{const{name:v,value:y}=h.target;i({...o,[v]:y})},[l,s]=S.useState(!1);S.useEffect(()=>{(()=>{const v=o.title.trim()!=="",y=o.description.trim()!=="",x=o.topic,k=o.date;s(v&&y&&x&&k)})()},[o]);const u=async()=>{const h={title:o.title,topic:o.topic,status:o.status,description:o.description,date:o.date},v=await Sx({user:n,title:h.title,topic:h.topic,status:h.status,description:h.description,date:h.date});if(v.ok){const y=await v.json();e(y.tasks),t("/")}else alert("Что-то пошло не так, попробуйте снова...")},c=()=>{t("/")},f=h=>{r.current&&!r.current.contains(h.target)&&t("/")};return S.useEffect(()=>(document.addEventListener("mousedown",f),()=>{document.removeEventListener("mousedown",f)}),[]),d.jsx(TS,{children:d.jsx(LS,{children:d.jsx(RS,{ref:r,children:d.jsxs(zS,{children:[d.jsx(IS,{children:"Создание задачи"}),d.jsx($S,{onClick:c,children:"✖"}),d.jsxs(WS,{children:[d.jsxs(BS,{id:"formNewCard",action:"#",children:[d.jsxs(vd,{children:[d.jsx(yd,{htmlFor:"formTitle",children:"Название задачи"}),d.jsx(AS,{type:"text",name:"title",id:"formTitle",placeholder:"Введите название задачи...",autoFocus:!0,value:o.title,onChange:a})]}),d.jsxs(vd,{children:[d.jsx(yd,{htmlFor:"textArea",children:"Описание задачи"}),d.jsx(US,{name:"description",id:"textArea",placeholder:"Введите описание задачи...",value:o.description,onChange:a})]})]}),d.jsxs(VS,{children:[d.jsx(YS,{children:"Даты"}),d.jsx(Xh,{date:o.date,setSelected:h=>i({...o,date:h})})]})]}),d.jsxs(HS,{children:[d.jsx(QS,{children:"Категория"}),d.jsxs(GS,{children:[d.jsx(Za,{className:`_orange ${o.topic==="Web Design"?"_active-topic":""}`,onClick:()=>i({...o,topic:"Web Design"}),children:d.jsx("p",{className:"_orange",children:"Web Design"})}),d.jsx(Za,{className:`_green ${o.topic==="Research"?"_active-topic":""}`,onClick:()=>i({...o,topic:"Research"}),children:d.jsx("p",{className:"_green",children:"Research"})}),d.jsx(Za,{className:`_purple ${o.topic==="Copywriting"?"_active-topic":""}`,onClick:()=>i({...o,topic:"Copywriting"}),children:d.jsx("p",{className:"_purple",children:"Copywriting"})})]})]}),d.jsx(KS,{id:"btnCreate",onClick:u,style:{opacity:l?1:.5},disabled:!l,children:"Создать задачу"})]})})})})};function JS(){return d.jsx(XS,{})}function qS(){return d.jsxs(d.Fragment,{children:[d.jsx(j1,{}),d.jsx(V1,{children:d.jsxs(gv,{children:[d.jsx(ut,{element:d.jsx(SS,{}),children:d.jsx(ut,{element:d.jsx(Nx,{}),children:d.jsxs(ut,{path:"/",element:d.jsx(Fx,{}),children:[d.jsx(ut,{path:"/card/:id",element:d.jsx(kS,{})}),d.jsx(ut,{path:"/exit",element:d.jsx(bS,{})}),d.jsx(ut,{path:"/newcard",element:d.jsx(JS,{})})]})})}),d.jsx(ut,{path:"/login",element:d.jsx(Mx,{})}),d.jsx(ut,{path:"/register",element:d.jsx(Dx,{})}),d.jsx(ut,{path:"*",element:d.jsx(OS,{})})]})})]})}el.createRoot(document.getElementById("root")).render(d.jsx(tt.StrictMode,{children:d.jsx(Cv,{basename:"/kanban",children:d.jsx(qS,{})})}));
